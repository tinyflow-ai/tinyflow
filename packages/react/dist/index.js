import vu, { forwardRef as bf, useRef as Js, useImperativeHandle as xf, useEffect as $f } from "react";
var ui = { exports: {} }, ho = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function Cf() {
  if (Qs) return ho;
  Qs = 1;
  var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return ho.Fragment = n, ho.jsx = a, ho.jsxs = a, ho;
}
var po = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function _f() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), p = Symbol.iterator, b = "@@iterator";
    function x(D) {
      if (D === null || typeof D != "object")
        return null;
      var U = p && D[p] || D[b];
      return typeof U == "function" ? U : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(D) {
      {
        for (var U = arguments.length, ge = new Array(U > 1 ? U - 1 : 0), Me = 1; Me < U; Me++)
          ge[Me - 1] = arguments[Me];
        $("error", D, ge);
      }
    }
    function $(D, U, ge) {
      {
        var Me = C.ReactDebugCurrentFrame, B = Me.getStackAddendum();
        B !== "" && (U += "%s", ge = ge.concat([B]));
        var it = ge.map(function(Ye) {
          return String(Ye);
        });
        it.unshift("Warning: " + U), Function.prototype.apply.call(console[D], console, it);
      }
    }
    var w = !1, _ = !1, S = !1, M = !1, P = !1, V;
    V = Symbol.for("react.module.reference");
    function z(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === i || P || D === o || D === u || D === c || M || D === v || w || _ || S || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === d || D.$$typeof === a || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === V || D.getModuleId !== void 0));
    }
    function H(D, U, ge) {
      var Me = D.displayName;
      if (Me)
        return Me;
      var B = U.displayName || U.name || "";
      return B !== "" ? ge + "(" + B + ")" : ge;
    }
    function I(D) {
      return D.displayName || "Context";
    }
    function R(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
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
            var U = D;
            return I(U) + ".Consumer";
          case a:
            var ge = D;
            return I(ge._context) + ".Provider";
          case l:
            return H(D, D.render, "ForwardRef");
          case d:
            var Me = D.displayName || null;
            return Me !== null ? Me : R(D.type) || "Memo";
          case f: {
            var B = D, it = B._payload, Ye = B._init;
            try {
              return R(Ye(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, T = 0, k, O, N, A, X, K, F;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function Q() {
      {
        if (T === 0) {
          k = console.log, O = console.info, N = console.warn, A = console.error, X = console.group, K = console.groupCollapsed, F = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: re,
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
        T++;
      }
    }
    function W() {
      {
        if (T--, T === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, D, {
              value: k
            }),
            info: E({}, D, {
              value: O
            }),
            warn: E({}, D, {
              value: N
            }),
            error: E({}, D, {
              value: A
            }),
            group: E({}, D, {
              value: X
            }),
            groupCollapsed: E({}, D, {
              value: K
            }),
            groupEnd: E({}, D, {
              value: F
            })
          });
        }
        T < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = C.ReactCurrentDispatcher, xe;
    function Ce(D, U, ge) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (B) {
            var Me = B.stack.trim().match(/\n( *(at )?)/);
            xe = Me && Me[1] || "";
          }
        return `
` + xe + D;
      }
    }
    var pe = !1, de;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ie();
    }
    function ye(D, U) {
      if (!D || pe)
        return "";
      {
        var ge = de.get(D);
        if (ge !== void 0)
          return ge;
      }
      var Me;
      pe = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = se.current, se.current = null, Q();
      try {
        if (U) {
          var Ye = function() {
            throw Error();
          };
          if (Object.defineProperty(Ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ye, []);
            } catch (_t) {
              Me = _t;
            }
            Reflect.construct(D, [], Ye);
          } else {
            try {
              Ye.call();
            } catch (_t) {
              Me = _t;
            }
            D.call(Ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Me = _t;
          }
          D();
        }
      } catch (_t) {
        if (_t && Me && typeof _t.stack == "string") {
          for (var De = _t.stack.split(`
`), Mt = Me.stack.split(`
`), gt = De.length - 1, pt = Mt.length - 1; gt >= 1 && pt >= 0 && De[gt] !== Mt[pt]; )
            pt--;
          for (; gt >= 1 && pt >= 0; gt--, pt--)
            if (De[gt] !== Mt[pt]) {
              if (gt !== 1 || pt !== 1)
                do
                  if (gt--, pt--, pt < 0 || De[gt] !== Mt[pt]) {
                    var Xt = `
` + De[gt].replace(" at new ", " at ");
                    return D.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", D.displayName)), typeof D == "function" && de.set(D, Xt), Xt;
                  }
                while (gt >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        pe = !1, se.current = it, W(), Error.prepareStackTrace = B;
      }
      var tr = D ? D.displayName || D.name : "", nr = tr ? Ce(tr) : "";
      return typeof D == "function" && de.set(D, nr), nr;
    }
    function Ge(D, U, ge) {
      return ye(D, !1);
    }
    function We(D) {
      var U = D.prototype;
      return !!(U && U.isReactComponent);
    }
    function Ie(D, U, ge) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return ye(D, We(D));
      if (typeof D == "string")
        return Ce(D);
      switch (D) {
        case u:
          return Ce("Suspense");
        case c:
          return Ce("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case l:
            return Ge(D.render);
          case d:
            return Ie(D.type, U, ge);
          case f: {
            var Me = D, B = Me._payload, it = Me._init;
            try {
              return Ie(it(B), U, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Fe = {}, Je = C.ReactDebugCurrentFrame;
    function le(D) {
      if (D) {
        var U = D._owner, ge = Ie(D.type, D._source, U ? U.type : null);
        Je.setExtraStackFrame(ge);
      } else
        Je.setExtraStackFrame(null);
    }
    function ce(D, U, ge, Me, B) {
      {
        var it = Function.call.bind(ee);
        for (var Ye in D)
          if (it(D, Ye)) {
            var De = void 0;
            try {
              if (typeof D[Ye] != "function") {
                var Mt = Error((Me || "React class") + ": " + ge + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mt.name = "Invariant Violation", Mt;
              }
              De = D[Ye](U, Ye, Me, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              De = gt;
            }
            De && !(De instanceof Error) && (le(B), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", ge, Ye, typeof De), le(null)), De instanceof Error && !(De.message in Fe) && (Fe[De.message] = !0, le(B), h("Failed %s type: %s", ge, De.message), le(null));
          }
      }
    }
    var Se = Array.isArray;
    function Ke(D) {
      return Se(D);
    }
    function ze(D) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, ge = U && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return ge;
      }
    }
    function vt(D) {
      try {
        return lt(D), !1;
      } catch {
        return !0;
      }
    }
    function lt(D) {
      return "" + D;
    }
    function te(D) {
      if (vt(D))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(D)), lt(D);
    }
    var Le = C.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, Zt;
    function ln(D) {
      if (ee.call(D, "ref")) {
        var U = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Ve(D) {
      if (ee.call(D, "key")) {
        var U = Object.getOwnPropertyDescriptor(D, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function ut(D, U) {
      typeof D.ref == "string" && Le.current;
    }
    function Re(D, U) {
      {
        var ge = function() {
          Bt || (Bt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function Ae(D, U) {
      {
        var ge = function() {
          Zt || (Zt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var ct = function(D, U, ge, Me, B, it, Ye) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: U,
        ref: ge,
        props: Ye,
        // Record the component responsible for creating this element.
        _owner: it
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Jt(D, U, ge, Me, B) {
      {
        var it, Ye = {}, De = null, Mt = null;
        ge !== void 0 && (te(ge), De = "" + ge), Ve(U) && (te(U.key), De = "" + U.key), ln(U) && (Mt = U.ref, ut(U, B));
        for (it in U)
          ee.call(U, it) && !me.hasOwnProperty(it) && (Ye[it] = U[it]);
        if (D && D.defaultProps) {
          var gt = D.defaultProps;
          for (it in gt)
            Ye[it] === void 0 && (Ye[it] = gt[it]);
        }
        if (De || Mt) {
          var pt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          De && Re(Ye, pt), Mt && Ae(Ye, pt);
        }
        return ct(D, De, Mt, B, Me, Le.current, Ye);
      }
    }
    var Et = C.ReactCurrentOwner, Qn = C.ReactDebugCurrentFrame;
    function mt(D) {
      if (D) {
        var U = D._owner, ge = Ie(D.type, D._source, U ? U.type : null);
        Qn.setExtraStackFrame(ge);
      } else
        Qn.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function kn(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ot() {
      {
        if (Et.current) {
          var D = R(Et.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function vo(D) {
      return "";
    }
    var er = {};
    function Vt(D) {
      {
        var U = ot();
        if (!U) {
          var ge = typeof D == "string" ? D : D.displayName || D.name;
          ge && (U = `

Check the top-level render call using <` + ge + ">.");
        }
        return U;
      }
    }
    function mr(D, U) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var ge = Vt(U);
        if (er[ge])
          return;
        er[ge] = !0;
        var Me = "";
        D && D._owner && D._owner !== Et.current && (Me = " It was passed a child from " + R(D._owner.type) + "."), mt(D), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Me), mt(null);
      }
    }
    function yr(D, U) {
      {
        if (typeof D != "object")
          return;
        if (Ke(D))
          for (var ge = 0; ge < D.length; ge++) {
            var Me = D[ge];
            kn(Me) && mr(Me, U);
          }
        else if (kn(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var B = x(D);
          if (typeof B == "function" && B !== D.entries)
            for (var it = B.call(D), Ye; !(Ye = it.next()).done; )
              kn(Ye.value) && mr(Ye.value, U);
        }
      }
    }
    function Hr(D) {
      {
        var U = D.type;
        if (U == null || typeof U == "string")
          return;
        var ge;
        if (typeof U == "function")
          ge = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === d))
          ge = U.propTypes;
        else
          return;
        if (ge) {
          var Me = R(U);
          ce(ge, D.props, "prop", Me, D);
        } else if (U.PropTypes !== void 0 && !xt) {
          xt = !0;
          var B = R(U);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function go(D) {
      {
        for (var U = Object.keys(D.props), ge = 0; ge < U.length; ge++) {
          var Me = U[ge];
          if (Me !== "children" && Me !== "key") {
            mt(D), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), mt(null);
            break;
          }
        }
        D.ref !== null && (mt(D), h("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ii = {};
    function ai(D, U, ge, Me, B, it) {
      {
        var Ye = z(D);
        if (!Ye) {
          var De = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mt = vo();
          Mt ? De += Mt : De += ot();
          var gt;
          D === null ? gt = "null" : Ke(D) ? gt = "array" : D !== void 0 && D.$$typeof === t ? (gt = "<" + (R(D.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof D, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, De);
        }
        var pt = Jt(D, U, ge, B, it);
        if (pt == null)
          return pt;
        if (Ye) {
          var Xt = U.children;
          if (Xt !== void 0)
            if (Me)
              if (Ke(Xt)) {
                for (var tr = 0; tr < Xt.length; tr++)
                  yr(Xt[tr], D);
                Object.freeze && Object.freeze(Xt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(Xt, D);
        }
        if (ee.call(U, "key")) {
          var nr = R(D), _t = Object.keys(U).filter(function(li) {
            return li !== "key";
          }), Lr = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ii[nr + Lr]) {
            var si = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lr, nr, si, nr), ii[nr + Lr] = !0;
          }
        }
        return D === r ? go(pt) : Hr(pt), pt;
      }
    }
    function xa(D, U, ge) {
      return ai(D, U, ge, !0);
    }
    function $a(D, U, ge) {
      return ai(D, U, ge, !1);
    }
    var Ca = $a, _a = xa;
    po.Fragment = r, po.jsx = Ca, po.jsxs = _a;
  }()), po;
}
var tl;
function kf() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? ui.exports = Cf() : ui.exports = _f()), ui.exports;
}
var Sf = kf(), Ef = Object.defineProperty, gu = (e) => {
  throw TypeError(e);
}, Mf = (e, t, n) => t in e ? Ef(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jt = (e, t, n) => Mf(e, typeof t != "symbol" ? t + "" : t, n), ds = (e, t, n) => t.has(e) || gu("Cannot " + n), yt = (e, t, n) => (ds(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => t.has(e) ? gu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ki = (e, t, n, r) => (ds(e, t, "write to private field"), t.set(e, n), n), Pf = (e, t, n) => (ds(e, t, "access private method"), n);
const Of = "5";
var nl;
typeof window < "u" && ((nl = window.__svelte ?? (window.__svelte = {})).v ?? (nl.v = /* @__PURE__ */ new Set())).add(Of);
let so = !1, Tf = !1;
function Vf() {
  so = !0;
}
Vf();
const fs = 1, vs = 2, hu = 4, Nf = 8, Df = 16, zf = 1, Hf = 2, pu = 4, Lf = 8, Af = 16, mu = 1, If = 2, gs = "[", hs = "[!", ps = "]", Zr = {}, Yt = Symbol(), Rf = "http://www.w3.org/1999/xhtml", Bf = "http://www.w3.org/2000/svg", Zf = !1, Pn = 2, yu = 4, Ji = 8, ms = 16, Fn = 32, Or = 64, Si = 128, vn = 256, Ei = 512, Ft = 1024, Gn = 2048, Tr = 4096, Xn = 8192, Qi = 16384, Xf = 32768, lo = 65536, Yf = 1 << 17, Wf = 1 << 19, wu = 1 << 20, Ia = 1 << 21, lr = Symbol("$state"), ys = Symbol("legacy props"), jf = Symbol("");
var Wo = Array.isArray, Kf = Array.prototype.indexOf, ws = Array.from, Mi = Object.keys, Mo = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, bu = Object.getOwnPropertyDescriptors, qf = Object.prototype, Ff = Array.prototype, bs = Object.getPrototypeOf, rl = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const $t = () => {
};
function Gf(e) {
  return e();
}
function Po(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Uf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Oo = [], To = [];
function xu() {
  var e = Oo;
  Oo = [], Po(e);
}
function $u() {
  var e = To;
  To = [], Po(e);
}
function jo(e) {
  Oo.length === 0 && queueMicrotask(xu), Oo.push(e);
}
function Jf(e) {
  To.length === 0 && Uf($u), To.push(e);
}
function ol() {
  Oo.length > 0 && xu(), To.length > 0 && $u();
}
function Cu(e) {
  return e === this.v;
}
function xs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $s(e) {
  return !xs(e, this.v);
}
function Qf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ev() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function tv(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function nv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function rv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ov(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function iv() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function av() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function sv() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dn(e, t) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const n = bs(e);
  if (n !== qf && n !== Ff)
    return e;
  var r = /* @__PURE__ */ new Map(), o = Wo(e), i = Nt(0), a = et, s = (l) => {
    var u = et;
    Tn(a);
    var c;
    return c = l(), Tn(u), c;
  };
  return o && r.set("length", Nt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && iv();
        var d = r.get(u);
        return d === void 0 ? (d = s(() => Nt(c.value)), r.set(u, d)) : G(
          d,
          s(() => dn(c.value))
        ), !0;
      },
      deleteProperty(l, u) {
        var c = r.get(u);
        if (c === void 0)
          u in l && r.set(
            u,
            s(() => Nt(Yt))
          );
        else {
          if (o && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              r.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && G(d, f);
          }
          G(c, Yt), il(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === lr)
          return e;
        var f = r.get(u), v = u in l;
        if (f === void 0 && (!v || (d = Yn(l, u)) != null && d.writable) && (f = s(() => Nt(dn(v ? l[u] : Yt))), r.set(u, f)), f !== void 0) {
          var p = g(f);
          return p === Yt ? void 0 : p;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = r.get(u);
          d && (c.value = g(d));
        } else if (c === void 0) {
          var f = r.get(u), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== Yt)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var c;
        if (u === lr)
          return !0;
        var d = r.get(u), f = d !== void 0 && d.v !== Yt || Reflect.has(l, u);
        if (d !== void 0 || tt !== null && (!f || (c = Yn(l, u)) != null && c.writable)) {
          d === void 0 && (d = s(() => Nt(f ? dn(l[u]) : Yt)), r.set(u, d));
          var v = g(d);
          if (v === Yt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = r.get(u), p = u in l;
        if (o && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var x = r.get(b + "");
            x !== void 0 ? G(x, Yt) : b in l && (x = s(() => Nt(Yt)), r.set(b + "", x));
          }
        v === void 0 ? (!p || (f = Yn(l, u)) != null && f.writable) && (v = s(() => Nt(void 0)), G(
          v,
          s(() => dn(c))
        ), r.set(u, v)) : (p = v.v !== Yt, G(
          v,
          s(() => dn(c))
        ));
        var C = Reflect.getOwnPropertyDescriptor(l, u);
        if (C != null && C.set && C.set.call(d, c), !p) {
          if (o && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              r.get("length")
            ), $ = Number(u);
            Number.isInteger($) && $ >= h.v && G(h, $ + 1);
          }
          il(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = r.get(f);
          return v === void 0 || v.v !== Yt;
        });
        for (var [c, d] of r)
          d.v !== Yt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        av();
      }
    }
  );
}
function il(e, t = 1) {
  G(e, e.v + t);
}
const Vo = /* @__PURE__ */ new Map();
function qr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Cu,
    rv: 0,
    wv: 0
  };
  return n;
}
function Nt(e, t) {
  const n = qr(e);
  return Ou(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = qr(e);
  return t || (r.equals = $s), so && Qe !== null && Qe.l !== null && ((n = Qe.l).s ?? (n.s = [])).push(r), r;
}
function G(e, t, n = !1) {
  et !== null && !Sn && ia() && et.f & (Pn | ms) && !(gn != null && gn.includes(e)) && sv();
  let r = n ? dn(t) : t;
  return Ra(e, r);
}
function Ra(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ko ? Vo.set(e, t) : Vo.set(e, n), e.v = t, e.wv = Vu(), _u(e, Gn), ia() && tt !== null && tt.f & Ft && !(tt.f & (Fn | Or)) && (cn === null ? dv([e]) : cn.push(e));
  }
  return t;
}
function al(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function _u(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ia(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Gn || !r && a === tt || (wn(a, t), s & (Ft | vn) && (s & Pn ? _u(
        /** @type {Derived} */
        a,
        Tr
      ) : ra(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  var t = Pn | Gn, n = et !== null && et.f & Pn ? (
    /** @type {Derived} */
    et
  ) : null;
  return tt === null || n !== null && n.f & vn ? t |= vn : tt.f |= wu, {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: Cu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? tt
  };
}
function He(e) {
  const t = /* @__PURE__ */ Fr(e);
  return Ou(t), t;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  const t = /* @__PURE__ */ Fr(e);
  return t.equals = $s, t;
}
function ku(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      hn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function lv(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Pn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function uv(e) {
  var t, n = tt;
  fr(lv(e));
  try {
    ku(e), t = Du(e);
  } finally {
    fr(n);
  }
  return t;
}
function Su(e) {
  var t = uv(e), n = (ar || e.f & vn) && e.deps !== null ? Tr : Ft;
  wn(e, n), e.equals(t) || (e.v = t, e.wv = Vu());
}
function ea(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Oe = !1;
function tn(e) {
  Oe = e;
}
let Xe;
function Lt(e) {
  if (e === null)
    throw ea(), Zr;
  return Xe = e;
}
function On() {
  return Lt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Hn(Xe)
  );
}
function Y(e) {
  if (Oe) {
    if (/* @__PURE__ */ Hn(Xe) !== null)
      throw ea(), Zr;
    Xe = e;
  }
}
function Ne(e = 1) {
  if (Oe) {
    for (var t = e, n = Xe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(n);
    Xe = n;
  }
}
function Ba() {
  for (var e = 0, t = Xe; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ps) {
        if (e === 0) return t;
        e -= 1;
      } else (n === gs || n === hs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(t)
    );
    t.remove(), t = r;
  }
}
var Wt, Eu, Mu, Pu;
function Za() {
  if (Wt === void 0) {
    Wt = window, Eu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Mu = Yn(t, "firstChild").get, Pu = Yn(t, "nextSibling").get, rl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), rl(n) && (n.__t = void 0);
  }
}
function jn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return Mu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return Pu.call(e);
}
function j(e, t) {
  if (!Oe)
    return /* @__PURE__ */ Ht(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ht(Xe)
  );
  if (n === null)
    n = Xe.appendChild(jn());
  else if (t && n.nodeType !== 3) {
    var r = jn();
    return n == null || n.before(r), Lt(r), r;
  }
  return Lt(n), n;
}
function _e(e, t) {
  if (!Oe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ht(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Hn(n) : n;
  }
  return Xe;
}
function Z(e, t = 1, n = !1) {
  let r = Oe ? Xe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Hn(r);
  if (!Oe)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = jn();
    return r === null ? o == null || o.after(a) : r.before(a), Lt(a), a;
  }
  return Lt(r), /** @type {TemplateNode} */
  r;
}
function Cs(e) {
  e.textContent = "";
}
let mi = !1, Pi = !1, Oi = null, $r = !1, Ko = !1;
function sl(e) {
  Ko = e;
}
let ko = [], et = null, Sn = !1;
function Tn(e) {
  et = e;
}
let tt = null;
function fr(e) {
  tt = e;
}
let gn = null;
function cv(e) {
  gn = e;
}
function Ou(e) {
  et !== null && et.f & Ia && (gn === null ? cv([e]) : gn.push(e));
}
let Dt = null, Qt = 0, cn = null;
function dv(e) {
  cn = e;
}
let Tu = 1, Ti = 0, ar = !1;
function Vu() {
  return ++Tu;
}
function uo(e) {
  var t, n = e.f;
  if (n & Gn)
    return !0;
  if (n & Tr) {
    var r = e.deps, o = (n & vn) !== 0;
    if (r !== null) {
      var i, a, s = (n & Ei) !== 0, l = o && tt !== null && !ar, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Ei), l && d !== null && !(d.f & vn) && (c.f ^= vn);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], uo(
          /** @type {Derived} */
          a
        ) && Su(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || tt !== null && !ar) && wn(e, Ft);
  }
  return !1;
}
function fv(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & Si)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Si;
      }
    n = n.parent;
  }
  throw mi = !1, e;
}
function vv(e) {
  return (e.f & Qi) === 0 && (e.parent === null || (e.parent.f & Si) === 0);
}
function ta(e, t, n, r) {
  if (mi) {
    if (n === null && (mi = !1), vv(t))
      throw e;
    return;
  }
  n !== null && (mi = !0);
  {
    fv(e, t);
    return;
  }
}
function Nu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      gn != null && gn.includes(e) || (i.f & Pn ? Nu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? wn(i, Gn) : i.f & Ft && wn(i, Tr), ra(
        /** @type {Effect} */
        i
      )));
    }
}
function Du(e) {
  var t, n = Dt, r = Qt, o = cn, i = et, a = ar, s = gn, l = Qe, u = Sn, c = e.f;
  Dt = /** @type {null | Value[]} */
  null, Qt = 0, cn = null, ar = (c & vn) !== 0 && (Sn || !$r || et === null), et = c & (Fn | Or) ? null : e, gn = null, ll(e.ctx), Sn = !1, Ti++, e.f |= Ia;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Dt !== null) {
      var v;
      if (Vi(e, Qt), f !== null && Qt > 0)
        for (f.length = Qt + Dt.length, v = 0; v < Dt.length; v++)
          f[Qt + v] = Dt[v];
      else
        e.deps = f = Dt;
      if (!ar)
        for (v = Qt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Qt < f.length && (Vi(e, Qt), f.length = Qt);
    if (ia() && cn !== null && !Sn && f !== null && !(e.f & (Pn | Tr | Gn)))
      for (v = 0; v < /** @type {Source[]} */
      cn.length; v++)
        Nu(
          cn[v],
          /** @type {Effect} */
          e
        );
    return i !== null && (Ti++, cn !== null && (o === null ? o = cn : o.push(.../** @type {Source[]} */
    cn))), d;
  } finally {
    Dt = n, Qt = r, cn = o, et = i, ar = a, gn = s, ll(l), Sn = u, e.f ^= Ia;
  }
}
function gv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Kf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & Pn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Dt === null || !Dt.includes(t)) && (wn(t, Tr), t.f & (vn | Ei) || (t.f ^= Ei), ku(
    /** @type {Derived} **/
    t
  ), Vi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Vi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      gv(e, n[r]);
}
function na(e) {
  var t = e.f;
  if (!(t & Qi)) {
    wn(e, Ft);
    var n = tt, r = Qe, o = $r;
    tt = e, $r = !0;
    try {
      t & ms ? Cv(e) : Au(e), Lu(e);
      var i = Du(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Tu;
      var a = e.deps, s;
      Zf && Tf && e.f & Gn;
    } catch (l) {
      ta(l, e, n, r || e.ctx);
    } finally {
      $r = o, tt = n;
    }
  }
}
function hv() {
  try {
    nv();
  } catch (e) {
    if (Oi !== null)
      ta(e, Oi, null);
    else
      throw e;
  }
}
function zu() {
  var e = $r;
  try {
    var t = 0;
    for ($r = !0; ko.length > 0; ) {
      t++ > 1e3 && hv();
      var n = ko, r = n.length;
      ko = [];
      for (var o = 0; o < r; o++) {
        var i = mv(n[o]);
        pv(i);
      }
    }
  } finally {
    Pi = !1, $r = e, Oi = null, Vo.clear();
  }
}
function pv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Qi | Xn)))
        try {
          uo(r) && (na(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Iu(r) : r.fn = null));
        } catch (o) {
          ta(o, r, null, r.ctx);
        }
    }
}
function ra(e) {
  Pi || (Pi = !0, queueMicrotask(zu));
  for (var t = Oi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Or | Fn)) {
      if (!(n & Ft)) return;
      t.f ^= Ft;
    }
  }
  ko.push(t);
}
function mv(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Fn | Or)) !== 0, i = o && (r & Ft) !== 0;
    if (!i && !(r & Xn)) {
      if (r & yu)
        t.push(n);
      else if (o)
        n.f ^= Ft;
      else {
        var a = et;
        try {
          et = n, uo(n) && na(n);
        } catch (u) {
          ta(u, n, null, n.ctx);
        } finally {
          et = a;
        }
      }
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
  return t;
}
function m(e) {
  var t;
  for (ol(); ko.length > 0; )
    Pi = !0, zu(), ol();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & Pn) !== 0;
  if (et !== null && !Sn) {
    if (!(gn != null && gn.includes(e))) {
      var r = et.deps;
      e.rv < Ti && (e.rv = Ti, Dt === null && r !== null && r[Qt] === e ? Qt++ : Dt === null ? Dt = [e] : (!ar || !Dt.includes(e)) && Dt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & vn) && (o.f ^= vn);
  }
  return n && (o = /** @type {Derived} */
  e, uo(o) && Su(o)), Ko && Vo.has(e) ? Vo.get(e) : e.v;
}
function Vn(e) {
  var t = Sn;
  try {
    return Sn = !0, e();
  } finally {
    Sn = t;
  }
}
const yv = -7169;
function wn(e, t) {
  e.f = e.f & yv | t;
}
function J(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Xa(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Xa(n);
      }
  }
}
function Xa(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Xa(e[r], t);
      } catch {
      }
    const n = bs(e);
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
function Hu(e) {
  tt === null && et === null && tv(), et !== null && et.f & vn && tt === null && ev(), Ko && Qf();
}
function wv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Vr(e, t, n, r = !0) {
  var o = tt, i = {
    ctx: Qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Gn,
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
      na(i), i.f |= Xf;
    } catch (l) {
      throw hn(i), l;
    }
  else t !== null && ra(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (wu | Si)) === 0;
  if (!a && r && (o !== null && wv(i, o), et !== null && et.f & Pn)) {
    var s = (
      /** @type {Derived} */
      et
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function _s(e) {
  const t = Vr(Ji, null, !1);
  return wn(t, Ft), t.teardown = e, t;
}
function vr(e) {
  Hu();
  var t = tt !== null && (tt.f & Fn) !== 0 && Qe !== null && !Qe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Qe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: tt,
      reaction: et
    });
  } else {
    var r = en(e);
    return r;
  }
}
function bv(e) {
  return Hu(), co(e);
}
function xv(e) {
  const t = Vr(Or, e, !0);
  return () => {
    hn(t);
  };
}
function $v(e) {
  const t = Vr(Or, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Gr(t, () => {
      hn(t), r(void 0);
    }) : (hn(t), r(void 0));
  });
}
function en(e) {
  return Vr(yu, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = co(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), Vn(t));
  });
}
function kt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Qe
  );
  co(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Ft && wn(n, Tr), uo(n) && na(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function co(e) {
  return Vr(Ji, e, !0);
}
function Te(e, t = [], n = Fr) {
  const r = t.map(n);
  return Nr(() => e(...r.map(g)));
}
function Nr(e, t = 0) {
  return Vr(Ji | ms | t, e, !0);
}
function Kn(e, t = !0) {
  return Vr(Ji | Fn, e, !0, t);
}
function Lu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ko, r = et;
    sl(!0), Tn(null);
    try {
      t.call(null);
    } finally {
      sl(n), Tn(r);
    }
  }
}
function Au(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & Or ? n.parent = null : hn(n, t), n = r;
  }
}
function Cv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Fn || hn(t), t = n;
  }
}
function hn(e, t = !0) {
  var n = !1;
  if ((t || e.f & Wf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Hn(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Au(e, t && !n), Vi(e, 0), wn(e, Qi);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Lu(e);
  var s = e.parent;
  s !== null && s.first !== null && Iu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Iu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Gr(e, t) {
  var n = [];
  ks(e, n, !0), Ru(n, () => {
    hn(e), t && t();
  });
}
function Ru(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ks(e, t, n) {
  if (!(e.f & Xn)) {
    if (e.f ^= Xn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & lo) !== 0 || (r.f & Fn) !== 0;
      ks(r, t, i ? n : !1), r = o;
    }
  }
}
function No(e) {
  Bu(e, !0);
}
function Bu(e, t) {
  if (e.f & Xn) {
    e.f ^= Xn, e.f & Ft || (e.f ^= Ft), uo(e) && (wn(e, Gn), ra(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & lo) !== 0 || (n.f & Fn) !== 0;
      Bu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function oa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Qe = null;
function ll(e) {
  Qe = e;
}
function _r(e) {
  return (
    /** @type {T} */
    Ss().get(e)
  );
}
function Ur(e, t) {
  return Ss().set(e, t), t;
}
function _v(e) {
  return Ss().has(e);
}
function fe(e, t = !1, n) {
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
  so && !t && (Qe.l = {
    s: null,
    u: null,
    r1: [],
    r2: qr(!1)
  }), _s(() => {
    r.d = !0;
  });
}
function ve(e) {
  const t = Qe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var n = tt, r = et;
      t.e = null;
      try {
        for (var o = 0; o < a.length; o++) {
          var i = a[o];
          fr(i.effect), Tn(i.reaction), en(i.fn);
        }
      } finally {
        fr(n), Tn(r);
      }
    }
    Qe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ia() {
  return !so || Qe !== null && Qe.l === null;
}
function Ss(e) {
  return Qe === null && oa(), Qe.c ?? (Qe.c = new Map(kv(Qe) || void 0));
}
function kv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Sv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ev = [
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
function Mv(e) {
  return Ev.includes(e);
}
const Pv = {
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
function Ov(e) {
  return e = e.toLowerCase(), Pv[e] ?? e;
}
const Tv = ["touchstart", "touchmove"];
function Vv(e) {
  return Tv.includes(e);
}
const Nv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Dv(e) {
  return Nv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function zv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, jo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Hv(e) {
  Oe && /* @__PURE__ */ Ht(e) !== null && Cs(e);
}
let ul = !1;
function Lv() {
  ul || (ul = !0, document.addEventListener(
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
function Av(e) {
  var t = et, n = tt;
  Tn(null), fr(null);
  try {
    return e();
  } finally {
    Tn(t), fr(n);
  }
}
const Zu = /* @__PURE__ */ new Set(), Ya = /* @__PURE__ */ new Set();
function Xu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || xo.call(t, i), !i.cancelBubble)
      return Av(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? jo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ue(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Xu(e, t, n, i);
  (t === document.body || t === window || t === document) && _s(() => {
    t.removeEventListener(e, a, i);
  });
}
function aa(e) {
  for (var t = 0; t < e.length; t++)
    Zu.add(e[t]);
  for (var n of Ya)
    n(e);
}
function xo(e) {
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
    Mo(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = et, f = tt;
    Tn(null), fr(null);
    try {
      for (var v, p = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Wo(x)) {
              var [C, ...h] = x;
              C.apply(a, [e, ...h]);
            } else
              x.call(a, e);
        } catch ($) {
          v ? p.push($) : v = $;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let $ of p)
          queueMicrotask(() => {
            throw $;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, Tn(d), fr(f);
    }
  }
}
function Es(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function qt(e, t) {
  var n = (
    /** @type {Effect} */
    tt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  var n = (t & mu) !== 0, r = (t & If) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Oe)
      return qt(Xe, null), Xe;
    o === void 0 && (o = Es(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ht(o)));
    var a = (
      /** @type {TemplateNode} */
      r || Eu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      qt(s, l);
    } else
      qt(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & mu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (Oe)
      return qt(Xe, null), Xe;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Es(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ht(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Ht(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ht(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Ht(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      qt(c, d);
    } else
      qt(u, u);
    return u;
  };
}
function qe(e = "") {
  if (!Oe) {
    var t = jn(e + "");
    return qt(t, t), t;
  }
  var n = Xe;
  return n.nodeType !== 3 && (n.before(n = jn()), Lt(n)), qt(n, n), n;
}
function dt() {
  if (Oe)
    return qt(Xe, null), Xe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = jn();
  return e.append(t, n), qt(t, n), e;
}
function L(e, t) {
  if (Oe) {
    tt.nodes_end = Xe, On();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function rn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Yu(e, t) {
  return Wu(e, t);
}
function Iv(e, t) {
  Za(), t.intro = t.intro ?? !1;
  const n = t.target, r = Oe, o = Xe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ht(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== gs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(i);
    if (!i)
      throw Zr;
    tn(!0), Lt(
      /** @type {Comment} */
      i
    ), On();
    const a = Wu(e, { ...t, anchor: i });
    if (Xe === null || Xe.nodeType !== 8 || /** @type {Comment} */
    Xe.data !== ps)
      throw ea(), Zr;
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Zr)
      return t.recover === !1 && rv(), Za(), Cs(n), tn(!1), Yu(e, t);
    throw a;
  } finally {
    tn(r), Lt(o);
  }
}
const Ar = /* @__PURE__ */ new Map();
function Wu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Za();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var p = Vv(v);
        t.addEventListener(v, xo, { passive: p });
        var b = Ar.get(v);
        b === void 0 ? (document.addEventListener(v, xo, { passive: p }), Ar.set(v, 1)) : Ar.set(v, b + 1);
      }
    }
  };
  l(ws(Zu)), Ya.add(l);
  var u = void 0, c = $v(() => {
    var d = n ?? t.appendChild(jn());
    return Kn(() => {
      if (i) {
        fe({});
        var f = (
          /** @type {ComponentContext} */
          Qe
        );
        f.c = i;
      }
      o && (r.$$events = o), Oe && qt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Oe && (tt.nodes_end = Xe), i && ve();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, xo);
        var p = (
          /** @type {number} */
          Ar.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, xo), Ar.delete(v)) : Ar.set(v, p);
      }
      Ya.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Wa.set(u, c), u;
}
let Wa = /* @__PURE__ */ new WeakMap();
function Rv(e, t) {
  const n = Wa.get(e);
  return n ? (Wa.delete(e), n(t)) : Promise.resolve();
}
function Ee(e, t, [n, r] = [0, 0]) {
  Oe && n === 0 && On();
  var o = e, i = null, a = null, s = Yt, l = n > 0 ? lo : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let p = !1;
    if (Oe && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === gs ? r = 0 : x === hs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Ba(), Lt(o), tn(!1), p = !0, r = -1);
    }
    s ? (i ? No(i) : v && (i = Kn(() => v(o))), a && Gr(a, () => {
      a = null;
    })) : (a ? No(a) : v && (a = Kn(() => v(o, [n + 1, r]))), i && Gr(i, () => {
      i = null;
    })), p && tn(!0);
  };
  Nr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Oe && (o = Xe);
}
function Do(e, t) {
  return t;
}
function Bv(e, t, n, r) {
  for (var o = [], i = t.length, a = 0; a < i; a++)
    ks(t[a].e, o, !0);
  var s = i > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Cs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), or(e, t[0].prev, t[i - 1].next);
  }
  Ru(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), or(e, c.prev, c.next)), hn(c.e, !s);
    }
  });
}
function Gt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & hu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = Oe ? Lt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ht(u)
    ) : u.appendChild(jn());
  }
  Oe && On();
  var c = null, d = !1, f = /* @__PURE__ */ we(() => {
    var v = n();
    return Wo(v) ? v : v == null ? [] : ws(v);
  });
  Nr(() => {
    var v = g(f), p = v.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let b = !1;
    if (Oe) {
      var x = (
        /** @type {Comment} */
        a.data === hs
      );
      x !== (p === 0) && (a = Ba(), Lt(a), tn(!1), b = !0);
    }
    if (Oe) {
      for (var C = null, h, $ = 0; $ < p; $++) {
        if (Xe.nodeType === 8 && /** @type {Comment} */
        Xe.data === ps) {
          a = /** @type {Comment} */
          Xe, b = !0, tn(!1);
          break;
        }
        var w = v[$], _ = r(w, $);
        h = ju(
          Xe,
          s,
          C,
          null,
          w,
          _,
          $,
          o,
          t,
          n
        ), s.items.set(_, h), C = h;
      }
      p > 0 && Lt(Ba());
    }
    Oe || Zv(v, s, a, o, t, r, n), i !== null && (p === 0 ? c ? No(c) : c = Kn(() => i(a)) : c !== null && Gr(c, () => {
      c = null;
    })), b && tn(!0), g(f);
  }), Oe && (a = Xe);
}
function Zv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Nf) !== 0, f = (o & (fs | vs)) !== 0, v = e.length, p = t.items, b = t.first, x = b, C, h = null, $, w = [], _ = [], S, M, P, V;
  if (d)
    for (V = 0; V < v; V += 1)
      S = e[V], M = i(S, V), P = p.get(M), P !== void 0 && ((s = P.a) == null || s.measure(), ($ ?? ($ = /* @__PURE__ */ new Set())).add(P));
  for (V = 0; V < v; V += 1) {
    if (S = e[V], M = i(S, V), P = p.get(M), P === void 0) {
      var z = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = ju(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        S,
        M,
        V,
        r,
        o,
        a
      ), p.set(M, h), w = [], _ = [], x = h.next;
      continue;
    }
    if (f && Xv(P, S, V, o), P.e.f & Xn && (No(P.e), d && ((l = P.a) == null || l.unfix(), ($ ?? ($ = /* @__PURE__ */ new Set())).delete(P))), P !== x) {
      if (C !== void 0 && C.has(P)) {
        if (w.length < _.length) {
          var H = _[0], I;
          h = H.prev;
          var R = w[0], E = w[w.length - 1];
          for (I = 0; I < w.length; I += 1)
            cl(w[I], H, n);
          for (I = 0; I < _.length; I += 1)
            C.delete(_[I]);
          or(t, R.prev, E.next), or(t, h, R), or(t, E, H), x = H, h = E, V -= 1, w = [], _ = [];
        } else
          C.delete(P), cl(P, x, n), or(t, P.prev, P.next), or(t, P, h === null ? t.first : h.next), or(t, h, P), h = P;
        continue;
      }
      for (w = [], _ = []; x !== null && x.k !== M; )
        x.e.f & Xn || (C ?? (C = /* @__PURE__ */ new Set())).add(x), _.push(x), x = x.next;
      if (x === null)
        continue;
      P = x;
    }
    w.push(P), h = P, x = P.next;
  }
  if (x !== null || C !== void 0) {
    for (var T = C === void 0 ? [] : ws(C); x !== null; )
      x.e.f & Xn || T.push(x), x = x.next;
    var k = T.length;
    if (k > 0) {
      var O = o & hu && v === 0 ? n : null;
      if (d) {
        for (V = 0; V < k; V += 1)
          (u = T[V].a) == null || u.measure();
        for (V = 0; V < k; V += 1)
          (c = T[V].a) == null || c.fix();
      }
      Bv(t, T, O, p);
    }
  }
  d && jo(() => {
    var N;
    if ($ !== void 0)
      for (P of $)
        (N = P.a) == null || N.apply();
  }), tt.first = t.first && t.first.e, tt.last = h && h.e;
}
function Xv(e, t, n, r) {
  r & fs && Ra(e.v, t), r & vs ? Ra(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ju(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & fs) !== 0, d = (l & Df) === 0, f = c ? d ? /* @__PURE__ */ oe(o) : qr(o) : o, v = l & vs ? qr(a) : a, p = {
    i: v,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return p.e = Kn(() => s(e, f, v, u), Oe), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? t.first = p : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function cl(e, t, n) {
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
      /* @__PURE__ */ Hn(i)
    );
    o.before(i), i = a;
  }
}
function or(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ms(e, t, n, r, o) {
  var i = e, a = "", s;
  Nr(() => {
    if (a === (a = t() ?? "")) {
      Oe && On();
      return;
    }
    s !== void 0 && (hn(s), s = void 0), a !== "" && (s = Kn(() => {
      if (Oe) {
        Xe.data;
        for (var l = On(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Hn(l);
        if (l === null)
          throw ea(), Zr;
        qt(Xe, u), i = Lt(l);
        return;
      }
      var c = a + "", d = Es(c);
      qt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ht(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function Ot(e, t, n, r, o) {
  var i;
  Oe && On();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Yv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function kr(e, t, ...n) {
  var r = e, o = $t, i;
  Nr(() => {
    o !== (o = t()) && (i && (hn(i), i = null), i = Kn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, lo), Oe && (r = Xe);
}
function Ku(e, t, n) {
  Oe && On();
  var r = e, o, i;
  Nr(() => {
    o !== (o = t()) && (i && (Gr(i), i = null), o && (i = Kn(() => n(r, o))));
  }, lo), Oe && (r = Xe);
}
function Wv(e, t, n, r, o, i) {
  let a = Oe;
  Oe && On();
  var s, l, u = null;
  Oe && Xe.nodeType === 1 && (u = /** @type {Element} */
  Xe, On());
  var c = (
    /** @type {TemplateNode} */
    Oe ? Xe : e
  ), d;
  Nr(() => {
    const f = t() || null;
    var v = f === "svg" ? Bf : null;
    f !== s && (d && (f === null ? Gr(d, () => {
      d = null, l = null;
    }) : f === l ? No(d) : hn(d)), f && f !== l && (d = Kn(() => {
      if (u = Oe ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), qt(u, u), r) {
        Oe && Dv(f) && u.append(document.createComment(""));
        var p = (
          /** @type {TemplateNode} */
          Oe ? /* @__PURE__ */ Ht(u) : u.appendChild(jn())
        );
        Oe && (p === null ? tn(!1) : Lt(p)), r(u, p);
      }
      tt.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, lo), a && (tn(!0), Lt(c));
}
function st(e, t) {
  jo(() => {
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
function Pt(e, t, n) {
  en(() => {
    var r = Vn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      co(() => {
        var a = n();
        J(a), o && xs(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function qu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function jv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qu(e)) && (r && (r += " "), r += t);
  return r;
}
function Ln(e) {
  return typeof e == "object" ? jv(e) : e ?? "";
}
const dl = [...` 	
\r\f \v\uFEFF`];
function Kv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, a = 0; (a = r.indexOf(o, a)) >= 0; ) {
          var s = a + i;
          (a === 0 || dl.includes(r[a - 1])) && (s === r.length || dl.includes(r[s])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(s + 1) : a = s;
        }
  }
  return r === "" ? null : r;
}
function fl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ka(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function qv(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, a = 0, s = !1, l = [];
      r && l.push(...Object.keys(r).map(ka)), o && l.push(...Object.keys(o).map(ka));
      var u = 0, c = -1;
      const b = e.length;
      for (var d = 0; d < b; d++) {
        var f = e[d];
        if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === '"' || f === "'" ? i = f : f === "(" ? a++ : f === ")" && a--, !s && i === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === b - 1) {
            if (c !== -1) {
              var v = ka(e.substring(u, c).trim());
              if (!l.includes(v)) {
                f !== ";" && d++;
                var p = e.substring(u, d).trim();
                n += " " + p + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += fl(r)), o && (n += fl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function At(e, t, n, r, o, i) {
  var a = e.__className;
  if (Oe || a !== n) {
    var s = Kv(n, r, i);
    (!Oe || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Sa(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ct(e, t, n, r) {
  var o = e.__style;
  if (Oe || o !== t) {
    var i = qv(t, r);
    (!Oe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Sa(e, n == null ? void 0 : n[0], r[0]), Sa(e, n == null ? void 0 : n[1], r[1], "important")) : Sa(e, n, r));
  return r;
}
const yo = Symbol("class"), wr = Symbol("style"), Fu = Symbol("is custom element"), Gu = Symbol("is html");
function So(e) {
  if (Oe) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          be(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          be(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Jf(n), Lv();
  }
}
function Ea(e, t) {
  var n = Ps(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Fv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Ps(e);
  Oe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[jf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Uu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function bn(e, t, n, r, o = !1) {
  var i = Ps(e), a = i[Fu], s = !i[Gu];
  let l = Oe && a;
  l && tn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = Ln(n.class) : (r || n[yo]) && (n.class = null), n[wr] && (n.style ?? (n.style = null));
  var f = Uu(e);
  for (const $ in n) {
    let w = n[$];
    if (c && $ === "value" && w == null) {
      e.value = e.__value = "", u[$] = w;
      continue;
    }
    if ($ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      At(e, v, w, r, t == null ? void 0 : t[yo], n[yo]), u[$] = w, u[yo] = n[yo];
      continue;
    }
    if ($ === "style") {
      Ct(e, w, t == null ? void 0 : t[wr], n[wr]), u[$] = w, u[wr] = n[wr];
      continue;
    }
    var p = u[$];
    if (w !== p) {
      u[$] = w;
      var b = $[0] + $[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {}, S = "$$" + $;
          let M = $.slice(2);
          var x = Mv(M);
          if (Sv(M) && (M = M.slice(0, -7), _.capture = !0), !x && p) {
            if (w != null) continue;
            e.removeEventListener(M, u[S], _), u[S] = null;
          }
          if (w != null)
            if (x)
              e[`__${M}`] = w, aa([M]);
            else {
              let P = function(V) {
                u[$].call(this, V);
              };
              u[S] = Xu(M, e, P, _);
            }
          else x && (e[`__${M}`] = void 0);
        } else if ($ === "style")
          be(e, $, w);
        else if ($ === "autofocus")
          zv(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && ($ === "__value" || $ === "value" && w != null))
          e.value = e.__value = w;
        else if ($ === "selected" && c)
          Fv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var C = $;
          s || (C = Ov(C));
          var h = C === "defaultValue" || C === "defaultChecked";
          if (w == null && !a && !h)
            if (i[$] = null, C === "value" || C === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (C === "value") {
                let M = _.defaultValue;
                _.removeAttribute(C), _.defaultValue = M, _.value = _.__value = S ? M : null;
              } else {
                let M = _.defaultChecked;
                _.removeAttribute(C), _.defaultChecked = M, _.checked = S ? M : !1;
              }
            } else
              e.removeAttribute($);
          else h || f.includes(C) && (a || typeof w != "string") ? e[C] = w : typeof w != "function" && be(e, C, w);
        }
    }
  }
  return l && tn(!0), u;
}
function Ps(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Fu]: e.nodeName.includes("-"),
      [Gu]: e.namespaceURI === Rf
    })
  );
}
var vl = /* @__PURE__ */ new Map();
function Uu(e) {
  var t = vl.get(e.nodeName);
  if (t) return t;
  vl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = bu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = bs(r);
  }
  return t;
}
var br, Eo, yi, ja, Ju;
const Ka = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Rr(this, ja), Rr(this, br, /* @__PURE__ */ new WeakMap()), Rr(this, Eo), Rr(this, yi), ki(this, yi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = yt(this, br).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), yt(this, br).set(t, r), Pf(this, ja, Ju).call(this).observe(t, yt(this, yi)), () => {
      var o = yt(this, br).get(t);
      o.delete(n), o.size === 0 && (yt(this, br).delete(t), yt(this, Eo).unobserve(t));
    };
  }
};
br = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakSet(), Ju = function() {
  return yt(this, Eo) ?? ki(this, Eo, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Ka.entries.set(t.target, t);
        for (var n of yt(this, br).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
jt(Ka, "entries", /* @__PURE__ */ new WeakMap());
let Gv = Ka;
var Uv = /* @__PURE__ */ new Gv({
  box: "border-box"
});
function gl(e, t, n) {
  var r = Uv.observe(e, () => n(e[t]));
  en(() => (Vn(() => n(e[t])), r));
}
function hl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Nn(e = {}, t, n, r) {
  return en(() => {
    var o, i;
    return co(() => {
      o = i, i = [], Vn(() => {
        e !== n(...i) && (t(e, ...i), o && hl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      jo(() => {
        i && hl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ma(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Be(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => J(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Fr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(a);
  }
  n.b.length && bv(() => {
    pl(t, r), Po(n.b);
  }), vr(() => {
    const o = Vn(() => n.m.map(Gf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && vr(() => {
    pl(t, r), Po(n.a);
  });
}
function pl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Ze(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Wo(r) ? r.slice() : r == null ? [] : [r];
  for (var i of o)
    i.call(this, t);
}
function sn(e) {
  Qe === null && oa(), so && Qe.l !== null ? Qv(Qe).m.push(e) : vr(() => {
    const t = Vn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Os(e) {
  Qe === null && oa(), sn(() => () => Vn(e));
}
function Jv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function sa() {
  const e = Qe;
  return e === null && oa(), (t, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (i) {
      const a = Wo(i) ? i.slice() : [i], s = Jv(
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
function Qv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Ts(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), $t;
  const r = Vn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ir = [];
function un(e, t) {
  return {
    subscribe: $e(e, t).subscribe
  };
}
function $e(e, t = $t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (xs(e, s) && (e = s, n)) {
      const l = !Ir.length;
      for (const u of r)
        u[1](), Ir.push(u, e);
      if (l) {
        for (let u = 0; u < Ir.length; u += 2)
          Ir[u][0](Ir[u + 1]);
        Ir.length = 0;
      }
    }
  }
  function i(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function a(s, l = $t) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || $t), s(
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
  return un(n, (a, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = $t;
    const f = () => {
      if (c)
        return;
      d();
      const p = t(r ? u[0] : u, a, s);
      i ? a(p) : d = typeof p == "function" ? p : $t;
    }, v = o.map(
      (p, b) => Ts(
        p,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Po(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return Ts(e, (n) => t = n)(), t;
}
let ci = !1, qa = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: $t
  });
  if (r.store !== e && !(qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = $t;
    else {
      var o = !0;
      r.unsubscribe = Ts(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && qa in n ? q(e) : g(r.source);
}
function e1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = $t), e;
}
function Ni(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    _s(() => {
      for (var n in e)
        e[n].unsubscribe();
      Mo(e, qa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function t1(e) {
  var t = ci;
  try {
    return ci = !1, [e(), ci];
  } finally {
    ci = t;
  }
}
const n1 = {
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
function Tt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    n1
  );
}
const r1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
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
      pu
    )), e.special[t](n), al(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), al(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ht(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: qr(0) }, r1);
}
const o1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      mo(o) && (o = o());
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
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Yn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === lr || t === ys) return !1;
    for (let n of e.props)
      if (mo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      mo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function bt(...e) {
  return new Proxy({ props: e }, o1);
}
function ml(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function y(e, t, n, r) {
  var o, i = (n & zf) !== 0, a = !so || (n & Hf) !== 0, s = (n & Lf) !== 0, l = (n & Af) !== 0, u = !1, c;
  s ? [c, u] = t1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || ys in e, f = s && (((o = Yn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((M) => e[t] = M))) || void 0, v = (
    /** @type {V} */
    r
  ), p = !0, b = !1, x = () => (b = !0, p && (p = !1, l ? v = Vn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && ov(), c = x(), f && f(c));
  var C;
  if (a)
    C = () => {
      var M = (
        /** @type {V} */
        e[t]
      );
      return M === void 0 ? x() : (p = !0, b = !1, M);
    };
  else {
    var h = (i ? Fr : we)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Yf, C = () => {
      var M = g(h);
      return M !== void 0 && (v = /** @type {V} */
      void 0), M === void 0 ? v : M;
    };
  }
  if (!(n & pu))
    return C;
  if (f) {
    var $ = e.$$legacy;
    return function(M, P) {
      return arguments.length > 0 ? ((!a || !P || $ || u) && f(P ? C() : M), M) : C();
    };
  }
  var w = !1, _ = /* @__PURE__ */ oe(c), S = /* @__PURE__ */ Fr(() => {
    var M = C(), P = g(_);
    return w ? (w = !1, P) : _.v = M;
  });
  return s && g(S), i || (S.equals = $s), function(M, P) {
    if (arguments.length > 0) {
      const V = P ? g(S) : a && s ? dn(M) : M;
      if (!S.equals(V)) {
        if (w = !0, G(_, V), b && v !== void 0 && (v = V), ml(S))
          return M;
        Vn(() => g(S));
      }
      return M;
    }
    return ml(S) ? S.v : g(S);
  };
}
function i1(e) {
  return new a1(e);
}
var rr, pn;
class a1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Rr(this, rr), Rr(this, pn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ oe(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return g(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === ys ? !0 : (g(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return G(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ki(this, pn, (t.hydrate ? Iv : Yu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && m(), ki(this, rr, i.$$events);
    for (const a of Object.keys(yt(this, pn)))
      a === "$set" || a === "$destroy" || a === "$on" || Mo(this, a, {
        get() {
          return yt(this, pn)[a];
        },
        /** @param {any} value */
        set(s) {
          yt(this, pn)[a] = s;
        },
        enumerable: !0
      });
    yt(this, pn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, yt(this, pn).$destroy = () => {
      Rv(yt(this, pn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    yt(this, pn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    yt(this, rr)[t] = yt(this, rr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return yt(this, rr)[t].push(r), () => {
      yt(this, rr)[t] = yt(this, rr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    yt(this, pn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap();
let Qu;
typeof HTMLElement == "function" && (Qu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), jt(this, "$$ctor"), jt(this, "$$s"), jt(this, "$$c"), jt(this, "$$cn", !1), jt(this, "$$d", {}), jt(this, "$$r", !1), jt(this, "$$p_d", {}), jt(this, "$$l", {}), jt(this, "$$l_u", /* @__PURE__ */ new Map()), jt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          r !== "default" && (i.name = r), L(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = s1(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = wi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = i1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = xv(() => {
        co(() => {
          var r;
          this.$$r = !0;
          for (const o of Mi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = wi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = wi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function wi(e, t, n, r) {
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
function s1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ue(e, t, n, r, o, i) {
  let a = class extends Qu {
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
    Mo(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = wi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Yn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Mo(a.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
function Rt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Rt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var l1 = { value: () => {
} };
function la() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new bi(n);
}
function bi(e) {
  this._ = e;
}
function u1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
bi.prototype = la.prototype = {
  constructor: bi,
  on: function(e, t) {
    var n = this._, r = u1(e + "", n), o, i = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++i < a; ) if ((o = (e = r[i]).type) && (o = c1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < a; )
      if (o = (e = r[i]).type) n[o] = yl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = yl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new bi(e);
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
function c1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function yl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = l1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Fa = "http://www.w3.org/1999/xhtml";
const wl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Fa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ua(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), wl.hasOwnProperty(t) ? { space: wl[t], local: e } : e;
}
function d1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Fa && t.documentElement.namespaceURI === Fa ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function f1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ec(e) {
  var t = ua(e);
  return (t.local ? f1 : d1)(t);
}
function v1() {
}
function Vs(e) {
  return e == null ? v1 : function() {
    return this.querySelector(e);
  };
}
function g1(e) {
  typeof e != "function" && (e = Vs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new an(r, this._parents);
}
function h1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function p1() {
  return [];
}
function tc(e) {
  return e == null ? p1 : function() {
    return this.querySelectorAll(e);
  };
}
function m1(e) {
  return function() {
    return h1(e.apply(this, arguments));
  };
}
function y1(e) {
  typeof e == "function" ? e = m1(e) : e = tc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new an(r, o);
}
function nc(e) {
  return function() {
    return this.matches(e);
  };
}
function rc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var w1 = Array.prototype.find;
function b1(e) {
  return function() {
    return w1.call(this.children, e);
  };
}
function x1() {
  return this.firstElementChild;
}
function $1(e) {
  return this.select(e == null ? x1 : b1(typeof e == "function" ? e : rc(e)));
}
var C1 = Array.prototype.filter;
function _1() {
  return Array.from(this.children);
}
function k1(e) {
  return function() {
    return C1.call(this.children, e);
  };
}
function S1(e) {
  return this.selectAll(e == null ? _1 : k1(typeof e == "function" ? e : rc(e)));
}
function E1(e) {
  typeof e != "function" && (e = nc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new an(r, this._parents);
}
function oc(e) {
  return new Array(e.length);
}
function M1() {
  return new an(this._enter || this._groups.map(oc), this._parents);
}
function Di(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Di.prototype = {
  constructor: Di,
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
function P1(e) {
  return function() {
    return e;
  };
}
function O1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Di(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function T1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new Di(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function V1(e) {
  return e.__data__;
}
function N1(e, t) {
  if (!arguments.length) return Array.from(this, V1);
  var n = t ? T1 : O1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = P1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = D1(e.call(c, c && c.__data__, u, r)), p = v.length, b = s[u] = new Array(p), x = a[u] = new Array(p), C = l[u] = new Array(f);
    n(c, d, b, x, C, v, t);
    for (var h = 0, $ = 0, w, _; h < p; ++h)
      if (w = b[h]) {
        for (h >= $ && ($ = h + 1); !(_ = x[$]) && ++$ < p; ) ;
        w._next = _ || null;
      }
  }
  return a = new an(a, r), a._enter = s, a._exit = l, a;
}
function D1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function z1() {
  return new an(this._exit || this._groups.map(oc), this._parents);
}
function H1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function L1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, p = 0; p < d; ++p)
      (v = u[p] || c[p]) && (f[p] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new an(s, this._parents);
}
function A1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], a; --o >= 0; )
      (a = r[o]) && (i && a.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(a, i), i = a);
  return this;
}
function I1(e) {
  e || (e = R1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var a = n[i], s = a.length, l = o[i] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(t);
  }
  return new an(o, this._parents).order();
}
function R1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function B1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Z1() {
  return Array.from(this);
}
function X1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function Y1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function W1() {
  return !this.node();
}
function j1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function K1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function q1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function F1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function G1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function U1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function J1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Q1(e, t) {
  var n = ua(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? q1 : K1 : typeof t == "function" ? n.local ? J1 : U1 : n.local ? G1 : F1)(n, t));
}
function ic(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function eg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function ng(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function rg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? eg : typeof t == "function" ? ng : tg)(e, t, n ?? "")) : Jr(this.node(), e);
}
function Jr(e, t) {
  return e.style.getPropertyValue(t) || ic(e).getComputedStyle(e, null).getPropertyValue(t);
}
function og(e) {
  return function() {
    delete this[e];
  };
}
function ig(e, t) {
  return function() {
    this[e] = t;
  };
}
function ag(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? og : typeof t == "function" ? ag : ig)(e, t)) : this.node()[e];
}
function ac(e) {
  return e.trim().split(/^|\s+/);
}
function Ns(e) {
  return e.classList || new sc(e);
}
function sc(e) {
  this._node = e, this._names = ac(e.getAttribute("class") || "");
}
sc.prototype = {
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
function lc(e, t) {
  for (var n = Ns(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function uc(e, t) {
  for (var n = Ns(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lg(e) {
  return function() {
    lc(this, e);
  };
}
function ug(e) {
  return function() {
    uc(this, e);
  };
}
function cg(e, t) {
  return function() {
    (t.apply(this, arguments) ? lc : uc)(this, e);
  };
}
function dg(e, t) {
  var n = ac(e + "");
  if (arguments.length < 2) {
    for (var r = Ns(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? cg : t ? lg : ug)(n, t));
}
function fg() {
  this.textContent = "";
}
function vg(e) {
  return function() {
    this.textContent = e;
  };
}
function gg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hg(e) {
  return arguments.length ? this.each(e == null ? fg : (typeof e == "function" ? gg : vg)(e)) : this.node().textContent;
}
function pg() {
  this.innerHTML = "";
}
function mg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function yg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function wg(e) {
  return arguments.length ? this.each(e == null ? pg : (typeof e == "function" ? yg : mg)(e)) : this.node().innerHTML;
}
function bg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xg() {
  return this.each(bg);
}
function $g() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cg() {
  return this.each($g);
}
function _g(e) {
  var t = typeof e == "function" ? e : ec(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kg() {
  return null;
}
function Sg(e, t) {
  var n = typeof e == "function" ? e : ec(e), r = t == null ? kg : typeof t == "function" ? t : Vs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Mg() {
  return this.each(Eg);
}
function Pg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Og() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tg(e) {
  return this.select(e ? Og : Pg);
}
function Vg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Ng(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Dg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function zg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Hg(e, t, n) {
  return function() {
    var r = this.__on, o, i = Ng(t);
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
function Lg(e, t, n) {
  var r = Dg(e + ""), o, i = r.length, a;
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
  for (s = t ? Hg : zg, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function cc(e, t, n) {
  var r = ic(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ag(e, t) {
  return function() {
    return cc(this, e, t);
  };
}
function Ig(e, t) {
  return function() {
    return cc(this, e, t.apply(this, arguments));
  };
}
function Rg(e, t) {
  return this.each((typeof t == "function" ? Ig : Ag)(e, t));
}
function* Bg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var dc = [null];
function an(e, t) {
  this._groups = e, this._parents = t;
}
function qo() {
  return new an([[document.documentElement]], dc);
}
function Zg() {
  return this;
}
an.prototype = qo.prototype = {
  constructor: an,
  select: g1,
  selectAll: y1,
  selectChild: $1,
  selectChildren: S1,
  filter: E1,
  data: N1,
  enter: M1,
  exit: z1,
  join: H1,
  merge: L1,
  selection: Zg,
  order: A1,
  sort: I1,
  call: B1,
  nodes: Z1,
  node: X1,
  size: Y1,
  empty: W1,
  each: j1,
  attr: Q1,
  style: rg,
  property: sg,
  classed: dg,
  text: hg,
  html: wg,
  raise: xg,
  lower: Cg,
  append: _g,
  insert: Sg,
  remove: Mg,
  clone: Tg,
  datum: Vg,
  on: Lg,
  dispatch: Rg,
  [Symbol.iterator]: Bg
};
function fn(e) {
  return typeof e == "string" ? new an([[document.querySelector(e)]], [document.documentElement]) : new an([[e]], dc);
}
function Xg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function mn(e, t) {
  if (e = Xg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Yg = { passive: !1 }, zo = { capture: !0, passive: !1 };
function Pa(e) {
  e.stopImmediatePropagation();
}
function Xr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function fc(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", Xr, zo);
  "onselectstart" in t ? n.on("selectstart.drag", Xr, zo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function vc(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Xr, zo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const di = (e) => () => e;
function Ga(e, {
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
Ga.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Wg(e) {
  return !e.ctrlKey && !e.button;
}
function jg() {
  return this.parentNode;
}
function Kg(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function qg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fg() {
  var e = Wg, t = jg, n = Kg, r = qg, o = {}, i = la("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", C, Yg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, _) {
    if (!(c || !e.call(this, w, _))) {
      var S = $(this, t.call(this, w, _), w, _, "mouse");
      S && (fn(w.view).on("mousemove.drag", p, zo).on("mouseup.drag", b, zo), fc(w.view), Pa(w), u = !1, s = w.clientX, l = w.clientY, S("start", w));
    }
  }
  function p(w) {
    if (Xr(w), !u) {
      var _ = w.clientX - s, S = w.clientY - l;
      u = _ * _ + S * S > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    fn(w.view).on("mousemove.drag mouseup.drag", null), vc(w.view, u), Xr(w), o.mouse("end", w);
  }
  function x(w, _) {
    if (e.call(this, w, _)) {
      var S = w.changedTouches, M = t.call(this, w, _), P = S.length, V, z;
      for (V = 0; V < P; ++V)
        (z = $(this, M, w, _, S[V].identifier, S[V])) && (Pa(w), z("start", w, S[V]));
    }
  }
  function C(w) {
    var _ = w.changedTouches, S = _.length, M, P;
    for (M = 0; M < S; ++M)
      (P = o[_[M].identifier]) && (Xr(w), P("drag", w, _[M]));
  }
  function h(w) {
    var _ = w.changedTouches, S = _.length, M, P;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), M = 0; M < S; ++M)
      (P = o[_[M].identifier]) && (Pa(w), P("end", w, _[M]));
  }
  function $(w, _, S, M, P, V) {
    var z = i.copy(), H = mn(V || S, _), I, R, E;
    if ((E = n.call(w, new Ga("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: P,
      active: a,
      x: H[0],
      y: H[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), M)) != null)
      return I = E.x - H[0] || 0, R = E.y - H[1] || 0, function T(k, O, N) {
        var A = H, X;
        switch (k) {
          case "start":
            o[P] = T, X = a++;
            break;
          case "end":
            delete o[P], --a;
          // falls through
          case "drag":
            H = mn(N || O, _), X = a;
            break;
        }
        z.call(
          k,
          w,
          new Ga(k, {
            sourceEvent: O,
            subject: E,
            target: f,
            identifier: P,
            active: X,
            x: H[0] + I,
            y: H[1] + R,
            dx: H[0] - A[0],
            dy: H[1] - A[1],
            dispatch: z
          }),
          M
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : di(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : di(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : di(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : di(!!w), f) : r;
  }, f.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
  }, f;
}
function Ds(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function gc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Fo() {
}
var Ho = 0.7, zi = 1 / Ho, Yr = "\\s*([+-]?\\d+)\\s*", Lo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", En = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gg = /^#([0-9a-f]{3,8})$/, Ug = new RegExp(`^rgb\\(${Yr},${Yr},${Yr}\\)$`), Jg = new RegExp(`^rgb\\(${En},${En},${En}\\)$`), Qg = new RegExp(`^rgba\\(${Yr},${Yr},${Yr},${Lo}\\)$`), eh = new RegExp(`^rgba\\(${En},${En},${En},${Lo}\\)$`), th = new RegExp(`^hsl\\(${Lo},${En},${En}\\)$`), nh = new RegExp(`^hsla\\(${Lo},${En},${En},${Lo}\\)$`), bl = {
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
Ds(Fo, Ao, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xl,
  // Deprecated! Use color.formatHex.
  formatHex: xl,
  formatHex8: rh,
  formatHsl: oh,
  formatRgb: $l,
  toString: $l
});
function xl() {
  return this.rgb().formatHex();
}
function rh() {
  return this.rgb().formatHex8();
}
function oh() {
  return hc(this).formatHsl();
}
function $l() {
  return this.rgb().formatRgb();
}
function Ao(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Cl(t) : n === 3 ? new Kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ug.exec(e)) ? new Kt(t[1], t[2], t[3], 1) : (t = Jg.exec(e)) ? new Kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qg.exec(e)) ? fi(t[1], t[2], t[3], t[4]) : (t = eh.exec(e)) ? fi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = th.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, 1) : (t = nh.exec(e)) ? Sl(t[1], t[2] / 100, t[3] / 100, t[4]) : bl.hasOwnProperty(e) ? Cl(bl[e]) : e === "transparent" ? new Kt(NaN, NaN, NaN, 0) : null;
}
function Cl(e) {
  return new Kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Kt(e, t, n, r);
}
function ih(e) {
  return e instanceof Fo || (e = Ao(e)), e ? (e = e.rgb(), new Kt(e.r, e.g, e.b, e.opacity)) : new Kt();
}
function Ua(e, t, n, r) {
  return arguments.length === 1 ? ih(e) : new Kt(e, t, n, r ?? 1);
}
function Kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ds(Kt, Ua, gc(Fo, {
  brighter(e) {
    return e = e == null ? zi : Math.pow(zi, e), new Kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ho : Math.pow(Ho, e), new Kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Kt(Cr(this.r), Cr(this.g), Cr(this.b), Hi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _l,
  // Deprecated! Use color.formatHex.
  formatHex: _l,
  formatHex8: ah,
  formatRgb: kl,
  toString: kl
}));
function _l() {
  return `#${xr(this.r)}${xr(this.g)}${xr(this.b)}`;
}
function ah() {
  return `#${xr(this.r)}${xr(this.g)}${xr(this.b)}${xr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kl() {
  const e = Hi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Cr(this.r)}, ${Cr(this.g)}, ${Cr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Hi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Cr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xr(e) {
  return e = Cr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new yn(e, t, n, r);
}
function hc(e) {
  if (e instanceof yn) return new yn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fo || (e = Ao(e)), !e) return new yn();
  if (e instanceof yn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new yn(a, s, l, e.opacity);
}
function sh(e, t, n, r) {
  return arguments.length === 1 ? hc(e) : new yn(e, t, n, r ?? 1);
}
function yn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ds(yn, sh, gc(Fo, {
  brighter(e) {
    return e = e == null ? zi : Math.pow(zi, e), new yn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ho : Math.pow(Ho, e), new yn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Kt(
      Oa(e >= 240 ? e - 240 : e + 120, o, r),
      Oa(e, o, r),
      Oa(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new yn(El(this.h), vi(this.s), vi(this.l), Hi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Hi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${El(this.h)}, ${vi(this.s) * 100}%, ${vi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function El(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function vi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Oa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const pc = (e) => () => e;
function lh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function uh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function ch(e) {
  return (e = +e) == 1 ? mc : function(t, n) {
    return n - t ? uh(t, n, e) : pc(isNaN(t) ? n : t);
  };
}
function mc(e, t) {
  var n = t - e;
  return n ? lh(e, n) : pc(isNaN(e) ? t : e);
}
const Ml = function e(t) {
  var n = ch(t);
  function r(o, i) {
    var a = n((o = Ua(o)).r, (i = Ua(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = mc(o.opacity, i.opacity);
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
var Ja = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ta = new RegExp(Ja.source, "g");
function dh(e) {
  return function() {
    return e;
  };
}
function fh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vh(e, t) {
  var n = Ja.lastIndex = Ta.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ja.exec(e)) && (o = Ta.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = Ta.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fh(l[0].x) : dh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Pl = 180 / Math.PI, yc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wc(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Pl,
    skewX: Math.atan(l) * Pl,
    scaleX: a,
    scaleY: s
  };
}
var gi;
function gh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? yc : wc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hh(e) {
  return e == null || (gi || (gi = document.createElementNS("http://www.w3.org/2000/svg", "g")), gi.setAttribute("transform", e), !(e = gi.transform.baseVal.consolidate())) ? yc : (e = e.matrix, wc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function bc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, p) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      p.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, p) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      p.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var p = -1, b = f.length, x; ++p < b; ) d[(x = f[p]).i] = x.x(v);
      return d.join("");
    };
  };
}
var ph = bc(gh, "px, ", "px)", "deg)"), mh = bc(hh, ", ", ")", ")"), yh = 1e-12;
function Ol(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const xh = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, p = d - l, b = v * v + p * p, x, C;
    if (b < yh)
      C = Math.log(f / u) / t, x = function(M) {
        return [
          s + M * v,
          l + M * p,
          u * Math.exp(t * M * C)
        ];
      };
    else {
      var h = Math.sqrt(b), $ = (f * f - u * u + r * b) / (2 * u * n * h), w = (f * f - u * u - r * b) / (2 * f * n * h), _ = Math.log(Math.sqrt($ * $ + 1) - $), S = Math.log(Math.sqrt(w * w + 1) - w);
      C = (S - _) / t, x = function(M) {
        var P = M * C, V = Ol(_), z = u / (n * h) * (V * bh(t * P + _) - wh(_));
        return [
          s + z * v,
          l + z * p,
          u * V / Ol(t * P + _)
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
var Qr = 0, $o = 0, wo = 0, xc = 1e3, Li, Co, Ai = 0, Sr = 0, ca = 0, Io = typeof performance == "object" && performance.now ? performance : Date, $c = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function zs() {
  return Sr || ($c($h), Sr = Io.now() + ca);
}
function $h() {
  Sr = 0;
}
function Ii() {
  this._call = this._time = this._next = null;
}
Ii.prototype = Cc.prototype = {
  constructor: Ii,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? zs() : +n) + (t == null ? 0 : +t), !this._next && Co !== this && (Co ? Co._next = this : Li = this, Co = this), this._call = e, this._time = n, Qa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qa());
  }
};
function Cc(e, t, n) {
  var r = new Ii();
  return r.restart(e, t, n), r;
}
function Ch() {
  zs(), ++Qr;
  for (var e = Li, t; e; )
    (t = Sr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qr;
}
function Tl() {
  Sr = (Ai = Io.now()) + ca, Qr = $o = 0;
  try {
    Ch();
  } finally {
    Qr = 0, kh(), Sr = 0;
  }
}
function _h() {
  var e = Io.now(), t = e - Ai;
  t > xc && (ca -= t, Ai = e);
}
function kh() {
  for (var e, t = Li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Li = n);
  Co = e, Qa(r);
}
function Qa(e) {
  if (!Qr) {
    $o && ($o = clearTimeout($o));
    var t = e - Sr;
    t > 24 ? (e < 1 / 0 && ($o = setTimeout(Tl, e - Io.now() - ca)), wo && (wo = clearInterval(wo))) : (wo || (Ai = Io.now(), wo = setInterval(_h, xc)), Qr = 1, $c(Tl));
  }
}
function Vl(e, t, n) {
  var r = new Ii();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Sh = la("start", "end", "cancel", "interrupt"), Eh = [], _c = 0, Nl = 1, es = 2, xi = 3, Dl = 4, ts = 5, $i = 6;
function da(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Mh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Sh,
    tween: Eh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: _c
  });
}
function Hs(e, t) {
  var n = Cn(e, t);
  if (n.state > _c) throw new Error("too late; already scheduled");
  return n;
}
function An(e, t) {
  var n = Cn(e, t);
  if (n.state > xi) throw new Error("too late; already running");
  return n;
}
function Cn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Mh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Cc(i, 0, n.time);
  function i(u) {
    n.state = Nl, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== Nl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === xi) return Vl(a);
        v.state === Dl ? (v.state = $i, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = $i, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Vl(function() {
      n.state === xi && (n.state = Dl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = es, n.on.call("start", e, e.__data__, n.index, n.group), n.state === es) {
      for (n.state = xi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ts, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === ts && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = $i, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function Ci(e, t) {
  var n = e.__transition, r, o, i = !0, a;
  if (n) {
    t = t == null ? null : t + "";
    for (a in n) {
      if ((r = n[a]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > es && r.state < ts, r.state = $i, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[a];
    }
    i && delete e.__transition;
  }
}
function Ph(e) {
  return this.each(function() {
    Ci(this, e);
  });
}
function Oh(e, t) {
  var n, r;
  return function() {
    var o = An(this, e), i = o.tween;
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
function Th(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = An(this, e), a = i.tween;
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
function Vh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Cn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Oh : Th)(n, e, t));
}
function Ls(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = An(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Cn(o, r).value[t];
  };
}
function kc(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof Ao ? Ml : (n = Ao(t)) ? (t = n, Ml) : vh)(e, t);
}
function Nh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Dh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function zh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Hh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function Lh(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ah(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ih(e, t) {
  var n = ua(e), r = n === "transform" ? mh : kc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ah : Lh)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? Dh : Nh)(n) : (n.local ? Hh : zh)(n, r, t));
}
function Rh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Bh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Zh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Bh(e, i)), n;
  }
  return o._value = t, o;
}
function Xh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Rh(e, i)), n;
  }
  return o._value = t, o;
}
function Yh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ua(e);
  return this.tween(n, (r.local ? Zh : Xh)(r, t));
}
function Wh(e, t) {
  return function() {
    Hs(this, e).delay = +t.apply(this, arguments);
  };
}
function jh(e, t) {
  return t = +t, function() {
    Hs(this, e).delay = t;
  };
}
function Kh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wh : jh)(t, e)) : Cn(this.node(), t).delay;
}
function qh(e, t) {
  return function() {
    An(this, e).duration = +t.apply(this, arguments);
  };
}
function Fh(e, t) {
  return t = +t, function() {
    An(this, e).duration = t;
  };
}
function Gh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qh : Fh)(t, e)) : Cn(this.node(), t).duration;
}
function Uh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    An(this, e).ease = t;
  };
}
function Jh(e) {
  var t = this._id;
  return arguments.length ? this.each(Uh(t, e)) : Cn(this.node(), t).ease;
}
function Qh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    An(this, e).ease = n;
  };
}
function ep(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Qh(this._id, e));
}
function tp(e) {
  typeof e != "function" && (e = nc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new qn(r, this._parents, this._name, this._id);
}
function np(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new qn(a, this._parents, this._name, this._id);
}
function rp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function op(e, t, n) {
  var r, o, i = rp(t) ? Hs : An;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ip(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Cn(this.node(), n).on.on(e) : this.each(op(n, e, t));
}
function ap(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function sp() {
  return this.on("end.remove", ap(this._id));
}
function lp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Vs(e));
  for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
    for (var s = r[a], l = s.length, u = i[a] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, da(u[f], t, n, f, u, Cn(c, n)));
  return new qn(i, this._parents, t, n);
}
function up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = tc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, p = Cn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && da(v, t, n, b, f, p);
        i.push(f), a.push(c);
      }
  return new qn(i, a, t, n);
}
var cp = qo.prototype.constructor;
function dp() {
  return new cp(this._groups, this._parents);
}
function fp(e, t) {
  var n, r, o;
  return function() {
    var i = Jr(this, e), a = (this.style.removeProperty(e), Jr(this, e));
    return i === a ? null : i === n && a === r ? o : o = t(n = i, r = a);
  };
}
function Sc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vp(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var a = Jr(this, e);
    return a === o ? null : a === r ? i : i = t(r = a, n);
  };
}
function gp(e, t, n) {
  var r, o, i;
  return function() {
    var a = Jr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Jr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function hp(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = An(this, e), u = l.on, c = l.value[i] == null ? s || (s = Sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function pp(e, t, n) {
  var r = (e += "") == "transform" ? ph : kc;
  return t == null ? this.styleTween(e, fp(e, r)).on("end.style." + e, Sc(e)) : typeof t == "function" ? this.styleTween(e, gp(e, r, Ls(this, "style." + e, t))).each(hp(this._id, e)) : this.styleTween(e, vp(e, r, t), n).on("end.style." + e, null);
}
function mp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function yp(e, t, n) {
  var r, o;
  function i() {
    var a = t.apply(this, arguments);
    return a !== o && (r = (o = a) && mp(e, a, n)), r;
  }
  return i._value = t, i;
}
function wp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, yp(e, t, n ?? ""));
}
function bp(e) {
  return function() {
    this.textContent = e;
  };
}
function xp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function $p(e) {
  return this.tween("text", typeof e == "function" ? xp(Ls(this, "text", e)) : bp(e == null ? "" : e + ""));
}
function Cp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function _p(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Cp(o)), t;
  }
  return r._value = e, r;
}
function kp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, _p(e));
}
function Sp() {
  for (var e = this._name, t = this._id, n = Ec(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = Cn(l, t);
        da(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new qn(r, this._parents, e, n);
}
function Ep() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = An(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Mp = 0;
function qn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ec() {
  return ++Mp;
}
var Rn = qo.prototype;
qn.prototype = {
  constructor: qn,
  select: lp,
  selectAll: up,
  selectChild: Rn.selectChild,
  selectChildren: Rn.selectChildren,
  filter: tp,
  merge: np,
  selection: dp,
  transition: Sp,
  call: Rn.call,
  nodes: Rn.nodes,
  node: Rn.node,
  size: Rn.size,
  empty: Rn.empty,
  each: Rn.each,
  on: ip,
  attr: Ih,
  attrTween: Yh,
  style: pp,
  styleTween: wp,
  text: $p,
  textTween: kp,
  remove: sp,
  tween: Vh,
  delay: Kh,
  duration: Gh,
  ease: Jh,
  easeVarying: ep,
  end: Ep,
  [Symbol.iterator]: Rn[Symbol.iterator]
};
function Pp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Op = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Pp
};
function Tp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vp(e) {
  var t, n;
  e instanceof qn ? (t = e._id, e = e._name) : (t = Ec(), (n = Op).time = zs(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && da(l, e, t, u, a, n || Tp(l, t));
  return new qn(r, this._parents, e, t);
}
qo.prototype.interrupt = Ph;
qo.prototype.transition = Vp;
const hi = (e) => () => e;
function Np(e, {
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
var fa = new Bn(1, 0, 0);
Mc.prototype = Bn.prototype;
function Mc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return fa;
  return e.__zoom;
}
function Va(e) {
  e.stopImmediatePropagation();
}
function bo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Dp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function zp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function zl() {
  return this.__zoom || fa;
}
function Hp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Lp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ap(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], a = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
  );
}
function Pc() {
  var e = Dp, t = zp, n = Ap, r = Hp, o = Lp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xh, u = la("start", "zoom", "end"), c, d, f, v = 500, p = 150, b = 0, x = 10;
  function C(E) {
    E.property("__zoom", zl).on("wheel.zoom", P, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", H).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  C.transform = function(E, T, k, O) {
    var N = E.selection ? E.selection() : E;
    N.property("__zoom", zl), E !== N ? _(E, T, k, O) : N.interrupt().each(function() {
      S(this, arguments).event(O).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, C.scaleBy = function(E, T, k, O) {
    C.scaleTo(E, function() {
      var N = this.__zoom.k, A = typeof T == "function" ? T.apply(this, arguments) : T;
      return N * A;
    }, k, O);
  }, C.scaleTo = function(E, T, k, O) {
    C.transform(E, function() {
      var N = t.apply(this, arguments), A = this.__zoom, X = k == null ? w(N) : typeof k == "function" ? k.apply(this, arguments) : k, K = A.invert(X), F = typeof T == "function" ? T.apply(this, arguments) : T;
      return n($(h(A, F), X, K), N, a);
    }, k, O);
  }, C.translateBy = function(E, T, k, O) {
    C.transform(E, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), a);
    }, null, O);
  }, C.translateTo = function(E, T, k, O, N) {
    C.transform(E, function() {
      var A = t.apply(this, arguments), X = this.__zoom, K = O == null ? w(A) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(fa.translate(K[0], K[1]).scale(X.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), A, a);
    }, O, N);
  };
  function h(E, T) {
    return T = Math.max(i[0], Math.min(i[1], T)), T === E.k ? E : new Bn(T, E.x, E.y);
  }
  function $(E, T, k) {
    var O = T[0] - k[0] * E.k, N = T[1] - k[1] * E.k;
    return O === E.x && N === E.y ? E : new Bn(E.k, O, N);
  }
  function w(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function _(E, T, k, O) {
    E.on("start.zoom", function() {
      S(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var N = this, A = arguments, X = S(N, A).event(O), K = t.apply(N, A), F = k == null ? w(K) : typeof k == "function" ? k.apply(N, A) : k, re = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Q = N.__zoom, W = typeof T == "function" ? T.apply(N, A) : T, se = l(Q.invert(F).concat(re / Q.k), W.invert(F).concat(re / W.k));
      return function(xe) {
        if (xe === 1) xe = W;
        else {
          var Ce = se(xe), pe = re / Ce[2];
          xe = new Bn(pe, F[0] - Ce[0] * pe, F[1] - Ce[1] * pe);
        }
        X.zoom(null, xe);
      };
    });
  }
  function S(E, T, k) {
    return !k && E.__zooming || new M(E, T);
  }
  function M(E, T) {
    this.that = E, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, T), this.taps = 0;
  }
  M.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, T) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var T = fn(this.that).datum();
      u.call(
        E,
        this.that,
        new Np(E, {
          sourceEvent: this.sourceEvent,
          target: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        T
      );
    }
  };
  function P(E, ...T) {
    if (!e.apply(this, arguments)) return;
    var k = S(this, T).event(E), O = this.__zoom, N = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), A = mn(E);
    if (k.wheel)
      (k.mouse[0][0] !== A[0] || k.mouse[0][1] !== A[1]) && (k.mouse[1] = O.invert(k.mouse[0] = A)), clearTimeout(k.wheel);
    else {
      if (O.k === N) return;
      k.mouse = [A, O.invert(A)], Ci(this), k.start();
    }
    bo(E), k.wheel = setTimeout(X, p), k.zoom("mouse", n($(h(O, N), k.mouse[0], k.mouse[1]), k.extent, a));
    function X() {
      k.wheel = null, k.end();
    }
  }
  function V(E, ...T) {
    if (f || !e.apply(this, arguments)) return;
    var k = E.currentTarget, O = S(this, T, !0).event(E), N = fn(E.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", re, !0), A = mn(E, k), X = E.clientX, K = E.clientY;
    fc(E.view), Va(E), O.mouse = [A, this.__zoom.invert(A)], Ci(this), O.start();
    function F(Q) {
      if (bo(Q), !O.moved) {
        var W = Q.clientX - X, se = Q.clientY - K;
        O.moved = W * W + se * se > b;
      }
      O.event(Q).zoom("mouse", n($(O.that.__zoom, O.mouse[0] = mn(Q, k), O.mouse[1]), O.extent, a));
    }
    function re(Q) {
      N.on("mousemove.zoom mouseup.zoom", null), vc(Q.view, O.moved), bo(Q), O.event(Q).end();
    }
  }
  function z(E, ...T) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, O = mn(E.changedTouches ? E.changedTouches[0] : E, this), N = k.invert(O), A = k.k * (E.shiftKey ? 0.5 : 2), X = n($(h(k, A), O, N), t.apply(this, T), a);
      bo(E), s > 0 ? fn(this).transition().duration(s).call(_, X, O, E) : fn(this).call(C.transform, X, O, E);
    }
  }
  function H(E, ...T) {
    if (e.apply(this, arguments)) {
      var k = E.touches, O = k.length, N = S(this, T, E.changedTouches.length === O).event(E), A, X, K, F;
      for (Va(E), X = 0; X < O; ++X)
        K = k[X], F = mn(K, this), F = [F, this.__zoom.invert(F), K.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== F[2] && (N.touch1 = F, N.taps = 0) : (N.touch0 = F, A = !0, N.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (N.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, v)), Ci(this), N.start());
    }
  }
  function I(E, ...T) {
    if (this.__zooming) {
      var k = S(this, T).event(E), O = E.changedTouches, N = O.length, A, X, K, F;
      for (bo(E), A = 0; A < N; ++A)
        X = O[A], K = mn(X, this), k.touch0 && k.touch0[2] === X.identifier ? k.touch0[0] = K : k.touch1 && k.touch1[2] === X.identifier && (k.touch1[0] = K);
      if (X = k.that.__zoom, k.touch1) {
        var re = k.touch0[0], Q = k.touch0[1], W = k.touch1[0], se = k.touch1[1], xe = (xe = W[0] - re[0]) * xe + (xe = W[1] - re[1]) * xe, Ce = (Ce = se[0] - Q[0]) * Ce + (Ce = se[1] - Q[1]) * Ce;
        X = h(X, Math.sqrt(xe / Ce)), K = [(re[0] + W[0]) / 2, (re[1] + W[1]) / 2], F = [(Q[0] + se[0]) / 2, (Q[1] + se[1]) / 2];
      } else if (k.touch0) K = k.touch0[0], F = k.touch0[1];
      else return;
      k.zoom("touch", n($(X, K, F), k.extent, a));
    }
  }
  function R(E, ...T) {
    if (this.__zooming) {
      var k = S(this, T).event(E), O = E.changedTouches, N = O.length, A, X;
      for (Va(E), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), A = 0; A < N; ++A)
        X = O[A], k.touch0 && k.touch0[2] === X.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === X.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (X = mn(X, this), Math.hypot(d[0] - X[0], d[1] - X[1]) < x)) {
        var K = fn(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return C.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : hi(+E), C) : r;
  }, C.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : hi(!!E), C) : e;
  }, C.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : hi(!!E), C) : o;
  }, C.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : hi([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), C) : t;
  }, C.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], C) : [i[0], i[1]];
  }, C.translateExtent = function(E) {
    return arguments.length ? (a[0][0] = +E[0][0], a[1][0] = +E[1][0], a[0][1] = +E[0][1], a[1][1] = +E[1][1], C) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, C.constrain = function(E) {
    return arguments.length ? (n = E, C) : n;
  }, C.duration = function(E) {
    return arguments.length ? (s = +E, C) : s;
  }, C.interpolate = function(E) {
    return arguments.length ? (l = E, C) : l;
  }, C.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? C : E;
  }, C.clickDistance = function(E) {
    return arguments.length ? (b = (E = +E) * E, C) : Math.sqrt(b);
  }, C.tapDistance = function(E) {
    return arguments.length ? (x = +E, C) : x;
  }, C;
}
const eo = {
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
}, Ri = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Er;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Er || (Er = {}));
var cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cr || (cr = {}));
var Bi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Bi || (Bi = {}));
const ns = {
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
var Ro;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Ro || (Ro = {}));
var Pe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Pe || (Pe = {}));
const Hl = {
  [Pe.Left]: Pe.Right,
  [Pe.Right]: Pe.Left,
  [Pe.Top]: Pe.Bottom,
  [Pe.Bottom]: Pe.Top
};
function Ip(e, t) {
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
function Ll(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function Rp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Bp = (e) => "id" in e && "source" in e && "target" in e, Zp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), As = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Go = (e, t = [0, 0]) => {
  const { width: n, height: r } = pr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Xp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : As(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Zi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return va(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ga(n);
}, Uo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Zi(r);
      n = va(n, o);
    }
  }), ga(n);
}, Oc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Jo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, p = c.height ?? u.height ?? u.initialHeight ?? null, b = Bo(s, no(u)), x = (v ?? 0) * (p ?? 0), C = i && b > 0;
    (!u.internals.handleBounds || C || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, rs = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Al(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Il({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, a) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Uo(e), l = Rs(s, t, n, (a == null ? void 0 : a.minZoom) ?? o, (a == null ? void 0 : a.maxZoom) ?? i, (a == null ? void 0 : a.padding) ?? 0.1);
  return await r.setViewport(l, { duration: a == null ? void 0 : a.duration }), Promise.resolve(!0);
}
function Yp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", eo.error005());
    else {
      const v = s.measured.width, p = s.measured.height;
      v && p && (d = [
        [l, u],
        [l + v, u + p]
      ]);
    }
  else s && ro(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = ro(d) ? Mr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", eo.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function Tc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((p) => p.id === d.parentId);
    (f || v) && a.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = rs(a, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
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
const to = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Mr = (e = { x: 0, y: 0 }, t, n) => ({
  x: to(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: to(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Vc(e, t, n) {
  const { width: r, height: o } = pr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Mr(e, [
    [i, a],
    [i + r, a + o]
  ], t);
}
const Rl = (e, t, n) => e < t ? to(Math.abs(e - t), 1, t) / t : e > n ? -to(Math.abs(e - n), 1, t) / t : 0, Nc = (e, t, n = 15, r = 40) => {
  const o = Rl(e.x, r, t.width - r) * n, i = Rl(e.y, r, t.height - r) * n;
  return [o, i];
}, va = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), os = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ga = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), no = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = As(e) ? e.internals.positionAbsolute : Go(e, t);
  return {
    x: o,
    y: i,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Zi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: i } = As(e) ? e.internals.positionAbsolute : Go(e, t);
  return {
    x: o,
    y: i,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: i + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Dc = (e, t) => ga(va(os(e), os(t))), Bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Bl = (e) => Zn(e.width) && Zn(e.height) && Zn(e.x) && Zn(e.y), Zn = (e) => !isNaN(e) && isFinite(e), Wp = (e, t) => {
}, Is = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Jo = ({ x: e, y: t }, [n, r, o], i = !1, a = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Is(s, a) : s;
}, zc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Rs = (e, t, n, r, o, i) => {
  const a = t / (e.width * (1 + i)), s = n / (e.height * (1 + i)), l = Math.min(a, s), u = to(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, Xi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ro(e) {
  return e !== void 0 && e !== "parent";
}
function pr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Hc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function jp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Na(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Wn(e), s = Jo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Is(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Bs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Kp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, qp = ["INPUT", "SELECT", "TEXTAREA"];
function Fp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : qp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Lc = (e) => "clientX" in e, Wn = (e, t) => {
  var n, r;
  const o = Lc(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: i - ((t == null ? void 0 : t.left) ?? 0),
    y: a - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Zl = (e, t, n, r, o) => {
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
      ...Bs(a)
    };
  });
};
function Gp({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: a, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + a * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function pi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Xl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Pe.Left:
      return [t - pi(t - r, i), n];
    case Pe.Right:
      return [t + pi(r - t, i), n];
    case Pe.Top:
      return [t, n - pi(n - o, i)];
    case Pe.Bottom:
      return [t, n + pi(o - n, i)];
  }
}
function Ac({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: a = 0.25 }) {
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
  }), [d, f, v, p] = Gp({
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
    f,
    v,
    p
  ];
}
function Ic({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, a = Math.abs(r - t) / 2, s = r < t ? r + a : r - a;
  return [i, s, o, a];
}
function Up({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, a = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? a : 0);
}
function Jp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = va(Zi(e), Zi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const a = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Bo(a, ga(i)) > 0;
}
const Qp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, e0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), t0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Bp(e) ? n = { ...e } : n = {
    ...e,
    id: Qp(e)
  }, e0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function is({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, a, s] = Ic({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Yl = {
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, n0 = ({ source: e, sourcePosition: t = Pe.Bottom, target: n }) => t === Pe.Left || t === Pe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Wl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function r0({ source: e, sourcePosition: t = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i }) {
  const a = Yl[t], s = Yl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = n0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], p, b;
  const x = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [h, $, w, _] = Ic({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    p = o.x ?? h, b = o.y ?? $;
    const S = [
      { x: p, y: l.y },
      { x: p, y: u.y }
    ], M = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? S : M : v = d === "x" ? M : S;
  } else {
    const S = [{ x: l.x, y: u.y }], M = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? M : S : v = a.y === f ? S : M, t === r) {
      const I = Math.abs(e[d] - n[d]);
      if (I <= i) {
        const R = Math.min(i - 1, i - I);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * R : C[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const I = d === "x" ? "y" : "x", R = a[d] === s[I], E = l[I] > u[I], T = l[I] < u[I];
      (a[d] === 1 && (!R && E || R && T) || a[d] !== 1 && (!R && T || R && E)) && (v = d === "x" ? S : M);
    }
    const P = { x: l.x + x.x, y: l.y + x.y }, V = { x: u.x + C.x, y: u.y + C.y }, z = Math.max(Math.abs(P.x - v[0].x), Math.abs(V.x - v[0].x)), H = Math.max(Math.abs(P.y - v[0].y), Math.abs(V.y - v[0].y));
    z >= H ? (p = (P.x + V.x) / 2, b = v[0].y) : (p = v[0].x, b = (P.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + C.x, y: u.y + C.y },
    n
  ], p, b, w, _];
}
function o0(e, t, n, r) {
  const o = Math.min(Wl(e, t) / 2, Wl(t, n) / 2, r), { x: i, y: a } = t;
  if (e.x === i && i === n.x || e.y === a && a === n.y)
    return `L${i} ${a}`;
  if (e.y === a) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${a}Q ${i},${a} ${i},${a + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${a + o * l}Q ${i},${a} ${i + o * s},${a}`;
}
function Yi({ sourceX: e, sourceY: t, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, p] = r0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, C) => {
    let h = "";
    return C > 0 && C < c.length - 1 ? h = o0(c[C - 1], x, c[C + 1], a) : h = `${C === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, f, v, p];
}
function jl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function i0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!jl(n) || !jl(r))
    return null;
  const o = n.internals.handleBounds || Kl(n.handles), i = r.internals.handleBounds || Kl(r.handles), a = ql((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = ql(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Er.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", eo.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Pe.Bottom, u = (s == null ? void 0 : s.position) || Pe.Top, c = Zo(n, a, l), d = Zo(r, s, u);
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
function Zo(e, t, n = Pe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? pr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Pe.Top:
      return { x: o + a / 2, y: i };
    case Pe.Right:
      return { x: o + a, y: i + s / 2 };
    case Pe.Bottom:
      return { x: o + a / 2, y: i + s };
    case Pe.Left:
      return { x: o, y: i + s / 2 };
  }
}
function ql(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function as(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function a0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((a, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = as(l, t);
      i.has(u) || (a.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), a), []).sort((a, s) => a.id.localeCompare(s.id));
}
function s0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let a = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * i, -100];
  switch (n) {
    case Pe.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Pe.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Pe.Left:
      a = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [-100, -100 * i];
      break;
  }
  return `translate(${a[0]}px, ${a[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Zs = {
  nodeOrigin: [0, 0],
  nodeExtent: Ri,
  elevateNodesOnSelect: !0,
  defaults: {}
}, l0 = {
  ...Zs,
  checkEquality: !0
};
function Xs(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function u0(e, t, n) {
  const r = Xs(Zs, n);
  for (const o of e.values())
    if (o.parentId)
      Ys(o, e, t, r);
    else {
      const i = Go(o, r.nodeOrigin), a = ro(o.extent) ? o.extent : r.nodeExtent, s = Mr(i, a, pr(o));
      o.internals.positionAbsolute = s;
    }
}
function Rc(e, t, n, r) {
  var o, i;
  const a = Xs(l0, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Go(u, a.nodeOrigin), f = ro(u.extent) ? u.extent : a.nodeExtent, v = Mr(d, f, pr(u));
      c = {
        ...a.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (i = u.measured) == null ? void 0 : i.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: Bc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ys(c, t, n, r);
  }
}
function c0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ys(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Xs(Zs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  c0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = d0(e, l, i, a, u), { positionAbsolute: v } = e.internals, p = c !== v.x || d !== v.y;
  (p || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: p ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Bc(e, t) {
  return (Zn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function d0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = pr(e), l = Go(e, n), u = ro(e.extent) ? Mr(l, e.extent, s) : l;
  let c = Mr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Vc(c, s, t));
  const d = Bc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function f0(e, t, n, r = [0, 0]) {
  var o;
  const i = [], a = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = a.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? no(l), c = Dc(u, s.rect);
    a.set(s.parentId, { expandedRect: c, parent: l });
  }
  return a.size > 0 && a.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = pr(l), v = l.origin ?? r, p = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), C = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], $ = (C - f.height) * v[1];
    (p > 0 || b > 0 || h || $) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - p + h,
        y: l.position.y - b + $
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((_) => _.id === w.id) || i.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + p,
          y: w.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || p || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (p ? v[0] * p - h : 0),
        height: C + (b ? v[1] * b - $ : 0)
      }
    });
  }), i;
}
function v0(e, t, n, r, o, i) {
  const a = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!a)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(a), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const f of e.values()) {
    const v = t.get(f.id);
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
    const p = Bs(f.nodeElement), b = v.measured.width !== p.width || v.measured.height !== p.height;
    if (p.width && p.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), C = ro(v.extent) ? v.extent : i;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = Vc(h, p, t.get(v.parentId)) : C && (h = Mr(h, C, p));
      const $ = {
        ...v,
        measured: p,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Zl("source", f.nodeElement, x, c, v.id),
            target: Zl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, $), v.parentId && Ys($, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: p
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: no($, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = f0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function g0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Fl(e, t, n, r, o, i) {
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
function Zc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Fl("source", l, c, e, o, a), Fl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function h0(e, t) {
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
function Xc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Xc(n, t) : !1;
}
function Gl(e, t, n) {
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
function p0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, a] of e)
    if ((a.selected || a.id === r) && (!a.parentId || !Xc(a, e)) && (a.draggable || t && typeof a.draggable > "u")) {
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
function Da({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function m0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, a = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function p({ noDragClassName: x, handleSelector: C, domNode: h, isSelectable: $, nodeId: w, nodeClickDistance: _ = 0 }) {
    f = fn(h);
    function S({ x: z, y: H }, I) {
      const { nodeLookup: R, nodeExtent: E, snapGrid: T, snapToGrid: k, nodeOrigin: O, onNodeDrag: N, onSelectionDrag: A, onError: X, updateNodePositions: K } = t();
      i = { x: z, y: H };
      let F = !1, re = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && E) {
        const Q = Uo(s);
        re = os(Q);
      }
      for (const [Q, W] of s) {
        if (!R.has(Q))
          continue;
        let se = { x: z - W.distance.x, y: H - W.distance.y };
        k && (se = Is(se, T));
        let xe = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (s.size > 1 && E && !W.extent) {
          const { positionAbsolute: de } = W.internals, ie = de.x - re.x + E[0][0], ye = de.x + W.measured.width - re.x2 + E[1][0], Ge = de.y - re.y + E[0][1], We = de.y + W.measured.height - re.y2 + E[1][1];
          xe = [
            [ie, Ge],
            [ye, We]
          ];
        }
        const { position: Ce, positionAbsolute: pe } = Yp({
          nodeId: Q,
          nextPosition: se,
          nodeLookup: R,
          nodeExtent: xe,
          nodeOrigin: O,
          onError: X
        });
        F = F || W.position.x !== Ce.x || W.position.y !== Ce.y, W.position = Ce, W.internals.positionAbsolute = pe;
      }
      if (F && (K(s, !0), I && (r || N || !w && A))) {
        const [Q, W] = Da({
          nodeId: w,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(I, s, Q, W), N == null || N(I, Q, W), w || A == null || A(I, W);
      }
    }
    async function M() {
      if (!c)
        return;
      const { transform: z, panBy: H, autoPanSpeed: I, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [E, T] = Nc(u, c, I);
      (E !== 0 || T !== 0) && (i.x = (i.x ?? 0) - E / z[2], i.y = (i.y ?? 0) - T / z[2], await H({ x: E, y: T }) && S(i, null)), a = requestAnimationFrame(M);
    }
    function P(z) {
      var H;
      const { nodeLookup: I, multiSelectionActive: R, nodesDraggable: E, transform: T, snapGrid: k, snapToGrid: O, selectNodesOnDrag: N, onNodeDragStart: A, onSelectionDragStart: X, unselectNodesAndEdges: K } = t();
      d = !0, (!N || !$) && !R && w && ((H = I.get(w)) != null && H.selected || K()), $ && N && w && (e == null || e(w));
      const F = Na(z.sourceEvent, { transform: T, snapGrid: k, snapToGrid: O, containerBounds: c });
      if (i = F, s = p0(I, E, F, w), s.size > 0 && (n || A || !w && X)) {
        const [re, Q] = Da({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        n == null || n(z.sourceEvent, s, re, Q), A == null || A(z.sourceEvent, re, Q), w || X == null || X(z.sourceEvent, Q);
      }
    }
    const V = Fg().clickDistance(_).on("start", (z) => {
      const { domNode: H, nodeDragThreshold: I, transform: R, snapGrid: E, snapToGrid: T } = t();
      c = (H == null ? void 0 : H.getBoundingClientRect()) || null, v = !1, I === 0 && P(z), i = Na(z.sourceEvent, { transform: R, snapGrid: E, snapToGrid: T, containerBounds: c }), u = Wn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: H, transform: I, snapGrid: R, snapToGrid: E, nodeDragThreshold: T, nodeLookup: k } = t(), O = Na(z.sourceEvent, { transform: I, snapGrid: R, snapToGrid: E, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !k.has(w)) && (v = !0), !v) {
        if (!l && H && d && (l = !0, M()), !d) {
          const N = O.xSnapped - (i.x ?? 0), A = O.ySnapped - (i.y ?? 0);
          Math.sqrt(N * N + A * A) > T && P(z);
        }
        (i.x !== O.xSnapped || i.y !== O.ySnapped) && s && d && (u = Wn(z.sourceEvent, c), S(O, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: H, updateNodePositions: I, onNodeDragStop: R, onSelectionDragStop: E } = t();
        if (I(s, !1), o || R || !w && E) {
          const [T, k] = Da({
            nodeId: w,
            dragItems: s,
            nodeLookup: H,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, T, k), R == null || R(z.sourceEvent, T, k), w || E == null || E(z.sourceEvent, k);
        }
      }
    }).filter((z) => {
      const H = z.target;
      return !z.button && (!x || !Gl(H, `.${x}`, h)) && (!C || Gl(H, C, h));
    });
    f.call(V);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: p,
    destroy: b
  };
}
function y0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Bo(o, no(i)) > 0 && r.push(i);
  return r;
}
const w0 = 250;
function b0(e, t, n, r) {
  var o, i;
  let a = [], s = 1 / 0;
  const l = y0(e, n, t + w0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((i = u.internals.handleBounds) == null ? void 0 : i.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = Zo(u, d, d.position, !0), p = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      p > t || (p < s ? (a = [{ ...d, x: f, y: v }], s = p) : p === s && a.push({ ...d, x: f, y: v }));
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
function Yc(e, t, n, r, o, i = !1) {
  var a, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Zo(u, d, d.position, !0) } : d;
}
function Wc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function x0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const jc = () => !0;
function $0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: p, onConnect: b, onConnectEnd: x, isValidConnection: C = jc, onReconnectEnd: h, updateConnection: $, getTransform: w, getFromHandle: _, autoPanSpeed: S }) {
  const M = Kp(e.target);
  let P = 0, V;
  const { x: z, y: H } = Wn(e), I = M == null ? void 0 : M.elementFromPoint(z, H), R = Wc(i, I), E = s == null ? void 0 : s.getBoundingClientRect();
  if (!E || !R)
    return;
  const T = Yc(o, R, r, l, t);
  if (!T)
    return;
  let k = Wn(e, E), O = !1, N = null, A = !1, X = null;
  function K() {
    if (!c || !E)
      return;
    const [Ce, pe] = Nc(k, E, S);
    f({ x: Ce, y: pe }), P = requestAnimationFrame(K);
  }
  const F = {
    ...T,
    nodeId: o,
    type: R,
    position: T.position
  }, re = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Zo(re, F, Pe.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: re,
    to: k,
    toHandle: null,
    toPosition: Hl[F.position],
    toNode: null
  };
  $(Q);
  let W = Q;
  p == null || p(e, { nodeId: o, handleId: r, handleType: R });
  function se(Ce) {
    if (!_() || !F) {
      xe(Ce);
      return;
    }
    const pe = w();
    k = Wn(Ce, E), V = b0(Jo(k, pe, !1, [1, 1]), n, l, F), O || (K(), O = !0);
    const de = Kc(Ce, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: C,
      doc: M,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    X = de.handleDomNode, N = de.connection, A = x0(!!V, de.isValid);
    const ie = {
      // from stays the same
      ...W,
      isValid: A,
      to: V && A ? zc({ x: V.x, y: V.y }, pe) : k,
      toHandle: de.toHandle,
      toPosition: A && de.toHandle ? de.toHandle.position : Hl[F.position],
      toNode: de.toHandle ? l.get(de.toHandle.nodeId) : null
    };
    A && V && W.toHandle && ie.toHandle && W.toHandle.type === ie.toHandle.type && W.toHandle.nodeId === ie.toHandle.nodeId && W.toHandle.id === ie.toHandle.id && W.to.x === ie.to.x && W.to.y === ie.to.y || ($(ie), W = ie);
  }
  function xe(Ce) {
    (V || X) && N && A && (b == null || b(N));
    const { inProgress: pe, ...de } = W, ie = {
      ...de,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(Ce, ie), i && (h == null || h(Ce, ie)), v(), cancelAnimationFrame(P), O = !1, A = !1, N = null, X = null, M.removeEventListener("mousemove", se), M.removeEventListener("mouseup", xe), M.removeEventListener("touchmove", se), M.removeEventListener("touchend", xe);
  }
  M.addEventListener("mousemove", se), M.addEventListener("mouseup", xe), M.addEventListener("touchmove", se), M.addEventListener("touchend", xe);
}
function Kc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = jc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: p } = Wn(e), b = a.elementFromPoint(v, p), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, C = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Wc(void 0, x), $ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), _ = x.classList.contains("connectable"), S = x.classList.contains("connectableend");
    if (!$ || !h)
      return C;
    const M = {
      source: d ? $ : r,
      sourceHandle: d ? w : o,
      target: d ? r : $,
      targetHandle: d ? o : w
    };
    C.connection = M;
    const P = _ && S && (n === Er.Strict ? d && h === "source" || !d && h === "target" : $ !== r || w !== o);
    C.isValid = P && u(M), C.toHandle = Yc($, h, w, c, n, !1);
  }
  return C;
}
const C0 = {
  onPointerDown: $0,
  isValid: Kc
};
function _0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const p = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = w[2] * Math.pow(2, _);
      t.scaleTo(S);
    };
    let b = [0, 0];
    const x = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (b = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, C = ($) => {
      const w = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], S = [_[0] - b[0], _[1] - b[1]];
      b = _;
      const M = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), P = {
        x: w[0] - S[0] * M,
        y: w[1] - S[1] * M
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: P.x,
        y: P.y,
        zoom: w[2]
      }, V, s);
    }, h = Pc().on("start", x).on("zoom", d ? C : null).on("zoom.wheel", f ? p : null);
    o.call(h, {});
  }
  function a() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: a,
    pointer: mn
  };
}
const k0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ha = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), za = ({ x: e, y: t, zoom: n }) => fa.translate(e, t).scale(n), Br = (e, t) => e.target.closest(`.${t}`), qc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ha = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Fc = (e) => {
  const t = e.ctrlKey && Xi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function S0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = mn(c), C = Fc(c), h = d * Math.pow(2, C);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === cr.Vertical ? 0 : c.deltaX * f, p = o === cr.Horizontal ? 0 : c.deltaY * f;
    !Xi() && c.shiftKey && o !== cr.Vertical && (v = c.deltaY * f, p = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(p / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ha(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function E0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Br(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function M0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ha(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function P0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && qc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ha(i.transform)));
  };
}
function O0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && qc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && k0(e.prevViewport, a.transform))) {
      const l = ha(a.transform);
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
function T0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Br(c, `${u}-flow__node`) || Br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || a || Br(c, s) && c.type === "wheel" || Br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const p = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && p;
  };
}
function V0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: a, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = Pc().clickDistance(!Zn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = fn(e).call(f);
  $({
    x: i.x,
    y: i.y,
    zoom: to(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const p = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Fc);
  function x(I, R) {
    return v ? new Promise((E) => {
      f == null || f.transform(Ha(v, R == null ? void 0 : R.duration, () => E(!0)), I);
    }) : Promise.resolve(!1);
  }
  function C({ noWheelClassName: I, noPanClassName: R, onPaneContextMenu: E, userSelectionActive: T, panOnScroll: k, panOnDrag: O, panOnScrollMode: N, panOnScrollSpeed: A, preventScrolling: X, zoomOnPinch: K, zoomOnScroll: F, zoomOnDoubleClick: re, zoomActivationKeyPressed: Q, lib: W, onTransformChange: se }) {
    T && !c.isZoomingOrPanning && h();
    const xe = k && !Q && !T ? S0({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: N,
      panOnScrollSpeed: A,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : E0({
      noWheelClassName: I,
      preventScrolling: X,
      d3ZoomHandler: p
    });
    if (v.on("wheel.zoom", xe, { passive: !1 }), !T) {
      const pe = M0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", pe);
      const de = P0({
        zoomPanValues: c,
        panOnDrag: O,
        onPaneContextMenu: !!E,
        onPanZoom: a,
        onTransformChange: se
      });
      f.on("zoom", de);
      const ie = O0({
        zoomPanValues: c,
        panOnDrag: O,
        panOnScroll: k,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const Ce = T0({
      zoomActivationKeyPressed: Q,
      panOnDrag: O,
      zoomOnScroll: F,
      panOnScroll: k,
      zoomOnDoubleClick: re,
      zoomOnPinch: K,
      userSelectionActive: T,
      noPanClassName: R,
      noWheelClassName: I,
      lib: W
    });
    f.filter(Ce), re ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function $(I, R, E) {
    const T = za(I), k = f == null ? void 0 : f.constrain()(T, R, E);
    return k && await x(k), new Promise((O) => O(k));
  }
  async function w(I, R) {
    const E = za(I);
    return await x(E, R), new Promise((T) => T(E));
  }
  function _(I) {
    if (v) {
      const R = za(I), E = v.property("__zoom");
      (E.k !== I.zoom || E.x !== I.x || E.y !== I.y) && (f == null || f.transform(v, R, null, { sync: !0 }));
    }
  }
  function S() {
    const I = v ? Mc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function M(I, R) {
    return v ? new Promise((E) => {
      f == null || f.scaleTo(Ha(v, R == null ? void 0 : R.duration, () => E(!0)), I);
    }) : Promise.resolve(!1);
  }
  function P(I, R) {
    return v ? new Promise((E) => {
      f == null || f.scaleBy(Ha(v, R == null ? void 0 : R.duration, () => E(!0)), I);
    }) : Promise.resolve(!1);
  }
  function V(I) {
    f == null || f.scaleExtent(I);
  }
  function z(I) {
    f == null || f.translateExtent(I);
  }
  function H(I) {
    const R = !Zn(I) || I < 0 ? 0 : I;
    f == null || f.clickDistance(R);
  }
  return {
    update: C,
    destroy: h,
    setViewport: w,
    setViewportConstrained: $,
    getViewport: S,
    scaleTo: M,
    scaleBy: P,
    setScaleExtent: V,
    setTranslateExtent: z,
    syncViewport: _,
    setClickDistance: H
  };
}
var Ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ul || (Ul = {}));
var N0 = /* @__PURE__ */ ae('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(re, "$connectable", n), i = () => ne(Ce, "$connectionRadius", n), a = () => ne(se, "$domNode", n), s = () => ne(xe, "$nodeLookup", n), l = () => ne(W, "$connectionMode", n), u = () => ne(ie, "$lib", n), c = () => ne(Fe, "$autoPanOnConnect", n), d = () => ne(ze, "$flowId", n), f = () => ne(de, "$isValidConnectionStore", n), v = () => ne(Ge, "$onedgecreate", n), p = () => ne(ce, "$onConnectAction", n), b = () => ne(Se, "$onConnectStartAction", n), x = () => ne(Ke, "$onConnectEndAction", n), C = () => ne(pe, "$viewport", n), h = () => ne(vt, "$connection", n), $ = () => ne(Je, "$edges", n), w = () => ne(le, "$connectionLookup", n), _ = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe(), H = /* @__PURE__ */ oe(), I = /* @__PURE__ */ oe();
  let R = y(t, "id", 12, void 0), E = y(t, "type", 12, "source"), T = y(t, "position", 28, () => Pe.Top), k = y(t, "style", 12, void 0), O = y(t, "isValidConnection", 12, void 0), N = y(t, "onconnect", 12, void 0), A = y(t, "ondisconnect", 12, void 0), X = y(t, "isConnectable", 12, void 0), K = y(t, "class", 12, void 0);
  const F = _r("svelteflow__node_id"), re = _r("svelteflow__node_connectable"), Q = rt(), {
    connectionMode: W,
    domNode: se,
    nodeLookup: xe,
    connectionRadius: Ce,
    viewport: pe,
    isValidConnection: de,
    lib: ie,
    addEdge: ye,
    onedgecreate: Ge,
    panBy: We,
    cancelConnection: Ie,
    updateConnection: ee,
    autoPanOnConnect: Fe,
    edges: Je,
    connectionLookup: le,
    onconnect: ce,
    onconnectstart: Se,
    onconnectend: Ke,
    flowId: ze,
    connection: vt
  } = Q;
  function lt(Ve) {
    const ut = Lc(Ve);
    (ut && Ve.button === 0 || !ut) && C0.onPointerDown(Ve, {
      handleId: g(M),
      nodeId: F,
      isTarget: g(_),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: O() ?? f(),
      updateConnection: ee,
      cancelConnection: Ie,
      panBy: We,
      onConnect: (Re) => {
        var Ae;
        const ct = v() ? v()(Re) : Re;
        ct && (ye(ct), (Ae = p()) == null || Ae(Re));
      },
      onConnectStart: (Re, Ae) => {
        var ct;
        (ct = b()) == null || ct(Re, {
          nodeId: Ae.nodeId,
          handleId: Ae.handleId,
          handleType: Ae.handleType
        });
      },
      onConnectEnd: (Re, Ae) => {
        var ct;
        (ct = x()) == null || ct(Re, Ae);
      },
      getTransform: () => [
        C().x,
        C().y,
        C().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let te = /* @__PURE__ */ oe(null), Le = /* @__PURE__ */ oe();
  he(() => J(E()), () => {
    G(_, E() === "target");
  }), he(
    () => (J(X()), o()),
    () => {
      G(S, X() !== void 0 ? X() : o());
    }
  ), he(() => J(R()), () => {
    G(M, R() || null);
  }), he(
    () => (J(N()), J(A()), $(), w(), J(E()), J(R())),
    () => {
      (N() || A()) && ($(), G(Le, w().get(`${F}-${E()}${R() ? `-${R()}` : ""}`)));
    }
  ), he(
    () => (g(te), g(Le), J(A()), J(N())),
    () => {
      if (g(te) && !Ip(g(Le), g(te))) {
        const Ve = g(Le) ?? /* @__PURE__ */ new Map();
        Ll(g(te), Ve, A()), Ll(Ve, g(te), N());
      }
      G(te, g(Le) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => h(), () => {
    G(P, !!h().fromHandle);
  }), he(
    () => (h(), J(E()), g(M)),
    () => {
      var Ve, ut, Re;
      G(V, ((Ve = h().fromHandle) == null ? void 0 : Ve.nodeId) === F && ((ut = h().fromHandle) == null ? void 0 : ut.type) === E() && ((Re = h().fromHandle) == null ? void 0 : Re.id) === g(M));
    }
  ), he(
    () => (h(), J(E()), g(M)),
    () => {
      var Ve, ut, Re;
      G(z, ((Ve = h().toHandle) == null ? void 0 : Ve.nodeId) === F && ((ut = h().toHandle) == null ? void 0 : ut.type) === E() && ((Re = h().toHandle) == null ? void 0 : Re.id) === g(M));
    }
  ), he(
    () => (l(), h(), J(E()), g(M)),
    () => {
      var Ve, ut, Re;
      G(H, l() === Er.Strict ? ((Ve = h().fromHandle) == null ? void 0 : Ve.type) !== E() : F !== ((ut = h().fromHandle) == null ? void 0 : ut.nodeId) || g(M) !== ((Re = h().fromHandle) == null ? void 0 : Re.id));
    }
  ), he(() => (g(z), h()), () => {
    G(I, g(z) && h().isValid);
  }), kt(), Be();
  var me = N0();
  be(me, "data-nodeid", F);
  let Bt;
  var Zt = j(me);
  Ot(Zt, t, "default", {}), Y(me), Te(
    (Ve, ut) => {
      be(me, "data-handleid", g(M)), be(me, "data-handlepos", T()), be(me, "data-id", `${d() ?? ""}-${F ?? ""}-${R() || ""}-${E() ?? ""}`), Bt = At(me, 1, Ve, null, Bt, ut), Ct(me, k());
    },
    [
      () => Ln(Rt([
        "svelte-flow__handle",
        `svelte-flow__handle-${T()}`,
        "nodrag",
        "nopan",
        T(),
        K()
      ])),
      () => ({
        valid: g(I),
        connectingto: g(z),
        connectingfrom: g(V),
        source: !g(_),
        target: g(_),
        connectablestart: g(S),
        connectableend: g(S),
        connectable: g(S),
        connectionindicator: g(S) && (!g(P) || g(H))
      })
    ],
    we
  ), Ue("mousedown", me, lt), Ue("touchstart", me, lt), L(e, me);
  var ln = ve({
    get id() {
      return R();
    },
    set id(Ve) {
      R(Ve), m();
    },
    get type() {
      return E();
    },
    set type(Ve) {
      E(Ve), m();
    },
    get position() {
      return T();
    },
    set position(Ve) {
      T(Ve), m();
    },
    get style() {
      return k();
    },
    set style(Ve) {
      k(Ve), m();
    },
    get isValidConnection() {
      return O();
    },
    set isValidConnection(Ve) {
      O(Ve), m();
    },
    get onconnect() {
      return N();
    },
    set onconnect(Ve) {
      N(Ve), m();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(Ve) {
      A(Ve), m();
    },
    get isConnectable() {
      return X();
    },
    set isConnectable(Ve) {
      X(Ve), m();
    },
    get class() {
      return K();
    },
    set class(Ve) {
      K(Ve), m();
    }
  });
  return r(), ln;
}
ue(
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
var D0 = /* @__PURE__ */ ae("<!> <!>", 1);
function Wi(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition", "sourcePosition"]), fe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0), i = y(t, "sourcePosition", 12, void 0);
  Be();
  var a = D0(), s = _e(a);
  const l = /* @__PURE__ */ we(() => o() ?? Pe.Top);
  gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ we(() => i() ?? Pe.Bottom);
  return gr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Te(() => {
    var f;
    return rn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), L(e, a), ve({
    get data() {
      return r();
    },
    set data(f) {
      r(f), m();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), m();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), m();
    }
  });
}
ue(
  Wi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var z0 = /* @__PURE__ */ ae(" <!>", 1);
function Gc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "sourcePosition"]), fe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "sourcePosition", 12, void 0);
  Be(), Ne();
  var i = z0(), a = _e(i), s = Z(a);
  const l = /* @__PURE__ */ we(() => o() ?? Pe.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Te(() => {
    var u;
    return rn(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ve({
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
ue(Gc, { data: {}, sourcePosition: {} }, [], [], !0);
var H0 = /* @__PURE__ */ ae(" <!>", 1);
function Uc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, ["data", "targetPosition"]), fe(t, !1);
  let r = y(t, "data", 28, () => ({ label: "Node" })), o = y(t, "targetPosition", 12, void 0);
  Be(), Ne();
  var i = H0(), a = _e(i), s = Z(a);
  const l = /* @__PURE__ */ we(() => o() ?? Pe.Top);
  return gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Te(() => {
    var u;
    return rn(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), ve({
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
ue(Uc, { data: {}, targetPosition: {} }, [], [], !0);
function Jc(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, []);
}
ue(Jc, {}, [], [], !0);
function Jl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function ji(e, { target: t, domNode: n }) {
  return Jl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Jl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var L0 = /* @__PURE__ */ ae("<div><!></div>");
function Qc(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(i, "$domNode", n), { domNode: i } = rt();
  Be();
  var a = L0(), s = j(a);
  Ot(s, t, "default", {}), Y(a), Pt(a, (l, u) => ji == null ? void 0 : ji(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, a), ve(), r();
}
ue(Qc, {}, ["default"], [], !0);
function ed() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: a } = rt();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", eo.error012(s));
      return;
    }
    (l.selectable || q(a) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && i({ nodes: [], edges: [l] }) : o([s]));
  };
}
var A0 = /* @__PURE__ */ ae('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function td(e, t) {
  fe(t, !1);
  let n = y(t, "style", 12, void 0), r = y(t, "x", 12, void 0), o = y(t, "y", 12, void 0);
  const i = ed(), a = _r("svelteflow__edge_id");
  return Be(), Qc(e, {
    children: (s, l) => {
      var u = A0();
      let c;
      var d = j(u);
      Ot(d, t, "default", {}), Y(u), Te(() => c = Ct(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ue("keyup", u, () => {
      }), Ue("click", u, () => {
        a && i(a);
      }), L(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
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
ue(td, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var I0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), R0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Qo(e, t) {
  fe(t, !1);
  let n = y(t, "id", 12, void 0), r = y(t, "path", 12), o = y(t, "label", 12, void 0), i = y(t, "labelX", 12, void 0), a = y(t, "labelY", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "markerStart", 12, void 0), u = y(t, "markerEnd", 12, void 0), c = y(t, "style", 12, void 0), d = y(t, "interactionWidth", 12, 20), f = y(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Be();
  var p = R0(), b = _e(p), x = Z(b);
  {
    var C = (w) => {
      var _ = I0();
      be(_, "stroke-opacity", 0), be(_, "stroke-width", v), Te(() => be(_, "d", r())), L(w, _);
    };
    Ee(x, (w) => {
      v && w(C);
    });
  }
  var h = Z(x);
  {
    var $ = (w) => {
      td(w, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (_, S) => {
          Ne();
          var M = qe();
          Te(() => rn(M, o())), L(_, M);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(h, (w) => {
      o() && w($);
    });
  }
  return Te(
    (w) => {
      be(b, "id", n()), be(b, "d", r()), At(b, 0, w), be(b, "marker-start", l()), be(b, "marker-end", u()), Ct(b, c());
    },
    [
      () => Ln(Rt(["svelte-flow__edge-path", f()]))
    ],
    we
  ), L(e, p), ve({
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
      return f();
    },
    set class(w) {
      f(w), m();
    }
  });
}
ue(
  Qo,
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
function Ki(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return he(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(b()), J(x()), J(p()), J(C())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Ac({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: C()
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), m();
    }
  });
}
ue(
  Ki,
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
function nd(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return he(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(b()), J(x()), J(p()), J(C())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Yi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: C()
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), m();
    }
  });
}
ue(
  nd,
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
function rd(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "targetX", 12), b = y(t, "targetY", 12);
  return he(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(p()), J(b())),
    () => {
      ((x) => (G(r, x[0]), G(o, x[1]), G(i, x[2])))(is({
        sourceX: f(),
        sourceY: v(),
        targetX: p(),
        targetY: b()
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), ve({
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
      return f();
    },
    set sourceX(x) {
      f(x), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), m();
    },
    get targetX() {
      return p();
    },
    set targetX(x) {
      p(x), m();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), m();
    }
  });
}
ue(
  rd,
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
function od(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ht(n, [
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
  ]), fe(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = y(t, "label", 12, void 0), s = y(t, "labelStyle", 12, void 0), l = y(t, "style", 12, void 0), u = y(t, "markerStart", 12, void 0), c = y(t, "markerEnd", 12, void 0), d = y(t, "interactionWidth", 12, void 0), f = y(t, "sourceX", 12), v = y(t, "sourceY", 12), p = y(t, "sourcePosition", 12), b = y(t, "targetX", 12), x = y(t, "targetY", 12), C = y(t, "targetPosition", 12);
  return he(
    () => (g(r), g(o), g(i), J(f()), J(v()), J(b()), J(x()), J(p()), J(C())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(i, h[2])))(Yi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: p(),
        targetPosition: C(),
        borderRadius: 0
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
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
  }), ve({
    get label() {
      return a();
    },
    set label(h) {
      a(h), m();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), m();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), m();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), m();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), m();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), m();
    },
    get sourcePosition() {
      return p();
    },
    set sourcePosition(h) {
      p(h), m();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), m();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), m();
    },
    get targetPosition() {
      return C();
    },
    set targetPosition(h) {
      C(h), m();
    }
  });
}
ue(
  od,
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
function B0(e, t) {
  const n = e.set, r = t.set, o = q(e), i = q(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const s = (l) => {
    const u = n(l);
    return a = u, r(a), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(a));
}
function Z0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const i = (a) => {
    n(a), r(a), o = a;
  };
  e.set = t.set = i, e.update = t.update = (a) => i(a(o));
}
const X0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let a = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, Y0 = (e, t, n, r = [0, 0], o = Ri) => {
  const { subscribe: i, set: a, update: s } = $e([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Rc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, p = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: p
  };
}, W0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = $e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((p) => ({ ...l, ...p })) : f;
    Zc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, id = {
  input: Gc,
  output: Uc,
  default: Wi,
  group: Jc
}, ad = {
  straight: rd,
  smoothstep: nd,
  default: Ki,
  step: od
}, j0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? Ri;
  Rc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Zc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const p = Uo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Rs(p, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: $e(null),
    nodes: Y0(e, s, l, d, f),
    nodeLookup: un(s),
    parentLookup: un(l),
    edgeLookup: un(c),
    visibleNodes: un([]),
    edges: W0(t, u, c),
    visibleEdges: un([]),
    connectionLookup: un(u),
    height: $e(500),
    width: $e(500),
    minZoom: $e(0.5),
    maxZoom: $e(2),
    nodeOrigin: $e(d),
    nodeDragThreshold: $e(1),
    nodeExtent: $e(f),
    translateExtent: $e(Ri),
    autoPanOnNodeDrag: $e(!0),
    autoPanOnConnect: $e(!0),
    fitViewOnInit: $e(!1),
    fitViewOnInitDone: $e(!1),
    fitViewOptions: $e(void 0),
    panZoom: $e(null),
    snapGrid: $e(null),
    dragging: $e(!1),
    selectionRect: $e(null),
    selectionKeyPressed: $e(!1),
    multiselectionKeyPressed: $e(!1),
    deleteKeyPressed: $e(!1),
    panActivationKeyPressed: $e(!1),
    zoomActivationKeyPressed: $e(!1),
    selectionRectMode: $e(null),
    selectionMode: $e(Bi.Partial),
    nodeTypes: $e(id),
    edgeTypes: $e(ad),
    viewport: $e(v),
    connectionMode: $e(Er.Strict),
    domNode: $e(null),
    connection: un(ns),
    connectionLineType: $e(Wr.Bezier),
    connectionRadius: $e(20),
    isValidConnection: $e(() => !0),
    nodesDraggable: $e(!0),
    nodesConnectable: $e(!0),
    elementsSelectable: $e(!0),
    selectNodesOnDrag: $e(!0),
    markers: un([]),
    defaultMarkerColor: $e("#b1b1b7"),
    lib: un("svelte"),
    onlyRenderVisibleElements: $e(!1),
    onerror: $e(Wp),
    ondelete: $e(void 0),
    onedgecreate: $e(void 0),
    onconnect: $e(void 0),
    onconnectstart: $e(void 0),
    onconnectend: $e(void 0),
    onbeforedelete: $e(void 0),
    nodesInitialized: $e(!1),
    edgesInitialized: $e(!1),
    viewportInitialized: $e(!1),
    initialized: un(!1)
  };
};
function K0(e) {
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
    return u && c && Jp({
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
    const c = i0({
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
      zIndex: Up({
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
function q0(e) {
  return ur([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const a = [i.x, i.y, i.zoom];
    return n ? Oc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const pa = Symbol();
function sd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = j0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: a
  });
  function l(k) {
    s.nodeTypes.set({
      ...id,
      ...k
    });
  }
  function u(k) {
    s.edgeTypes.set({
      ...ad,
      ...k
    });
  }
  function c(k) {
    const O = q(s.edges);
    s.edges.set(t0(k, O));
  }
  const d = (k, O = !1) => {
    var N;
    const A = q(s.nodeLookup);
    for (const [X, K] of k) {
      const F = (N = A.get(X)) == null ? void 0 : N.internals.userNode;
      F && (F.position = K.position, F.dragging = O);
    }
    s.nodes.update((X) => X);
  };
  function f(k) {
    var O, N, A;
    const X = q(s.nodeLookup), K = q(s.parentLookup), { changes: F, updatedInternals: re } = v0(k, X, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (re) {
      if (u0(X, K, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), W = p({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of F) {
        const W = (O = X.get(Q.id)) == null ? void 0 : O.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const se = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((N = Q.dimensions) == null ? void 0 : N.width) ?? W.width, W.height = ((A = Q.dimensions) == null ? void 0 : A.height) ?? W.height), W.measured = se;
              break;
            }
            case "position":
              W.position = Q.position ?? W.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(k) {
    const O = q(s.panZoom), N = q(s.domNode);
    if (!O || !N)
      return Promise.resolve(!1);
    const { width: A, height: X } = Bs(N), K = Al(q(s.nodeLookup), k);
    return Il({
      nodes: K,
      width: A,
      height: X,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: O
    }, k);
  }
  function p(k) {
    const O = q(s.panZoom);
    if (!O)
      return !1;
    const N = Al(q(s.nodeLookup), k);
    return Il({
      nodes: N,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: O
    }, k), N.size > 0;
  }
  function b(k, O) {
    const N = q(s.panZoom);
    return N ? N.scaleBy(k, O) : Promise.resolve(!1);
  }
  function x(k) {
    return b(1.2, k);
  }
  function C(k) {
    return b(1 / 1.2, k);
  }
  function h(k) {
    const O = q(s.panZoom);
    O && (O.setScaleExtent([k, q(s.maxZoom)]), s.minZoom.set(k));
  }
  function $(k) {
    const O = q(s.panZoom);
    O && (O.setScaleExtent([q(s.minZoom), k]), s.maxZoom.set(k));
  }
  function w(k) {
    const O = q(s.panZoom);
    O && (O.setTranslateExtent(k), s.translateExtent.set(k));
  }
  function _(k) {
    let O = !1;
    return k.forEach((N) => {
      N.selected && (N.selected = !1, O = !0);
    }), O;
  }
  function S(k) {
    var O;
    (O = q(s.panZoom)) == null || O.setClickDistance(k);
  }
  function M(k) {
    _((k == null ? void 0 : k.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), _((k == null ? void 0 : k.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (k) => {
    var O;
    if (k) {
      const N = q(s.nodes), A = q(s.edges), X = N.filter((Q) => Q.selected), K = A.filter((Q) => Q.selected), { nodes: F, edges: re } = await Tc({
        nodesToRemove: X,
        edgesToRemove: K,
        nodes: N,
        edges: A,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (F.length || re.length) && (s.nodes.update((Q) => Q.filter((W) => !F.some((se) => se.id === W.id))), s.edges.update((Q) => Q.filter((W) => !re.some((se) => se.id === W.id))), (O = q(s.ondelete)) == null || O({
        nodes: F,
        edges: re
      }));
    }
  });
  function P(k) {
    const O = q(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((A) => {
      const X = k.includes(A.id), K = O && A.selected || X;
      return A.selected = K, A;
    })), O || s.edges.update((N) => N.map((A) => (A.selected = !1, A)));
  }
  function V(k) {
    const O = q(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((A) => {
      const X = k.includes(A.id), K = O && A.selected || X;
      return A.selected = K, A;
    })), O || s.nodes.update((N) => N.map((A) => (A.selected = !1, A)));
  }
  function z(k) {
    var O;
    const N = (O = q(s.nodes)) == null ? void 0 : O.find((A) => A.id === k);
    if (!N) {
      console.warn("012", eo.error012(k));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && q(s.multiselectionKeyPressed) && M({ nodes: [N], edges: [] }) : P([k]);
  }
  function H(k) {
    const O = q(s.viewport);
    return g0({
      delta: k,
      panZoom: q(s.panZoom),
      transform: [O.x, O.y, O.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const I = $e(ns), R = (k) => {
    I.set({ ...k });
  };
  function E() {
    I.set(ns);
  }
  function T() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), M(), E();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: K0(s),
    visibleNodes: q0(s),
    connection: ur([I, s.viewport], ([k, O]) => k.inProgress ? {
      ...k,
      to: Jo(k.to, [O.x, O.y, O.zoom])
    } : { ...k }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([k, O, N]) => a0(k, { defaultColor: O, id: N })),
    initialized: (() => {
      let k = !1;
      const O = q(s.nodes).length, N = q(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([A, X, K]) => k || (O === 0 ? k = K : N === 0 ? k = K && A : k = K && A && X, k));
    })(),
    // actions
    syncNodeStores: (k) => B0(s.nodes, k),
    syncEdgeStores: (k) => Z0(s.edges, k),
    syncViewport: (k) => X0(s.panZoom, s.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: C,
    fitView: (k) => v(k),
    setMinZoom: h,
    setMaxZoom: $,
    setTranslateExtent: w,
    setPaneClickDistance: S,
    unselectNodesAndEdges: M,
    addSelectedNodes: P,
    addSelectedEdges: V,
    handleNodeSelection: z,
    panBy: H,
    updateConnection: R,
    cancelConnection: E,
    reset: T
  };
}
function rt() {
  const e = _r(pa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function F0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = sd({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
  return Ur(pa, {
    getStore: () => s
  }), s;
}
function Ql(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: a, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = V0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return a.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var G0 = /* @__PURE__ */ ae('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const U0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function ld(e, t) {
  fe(t, !1), st(e, U0);
  const [n, r] = ft(), o = () => ne(N, "$panActivationKeyPressed", n), i = () => ne(R, "$minZoom", n), a = () => ne(E, "$maxZoom", n), s = () => ne(A, "$zoomActivationKeyPressed", n), l = () => ne(I, "$selectionRect", n), u = () => ne(k, "$translateExtent", n), c = () => ne(O, "$lib", n), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let p = y(t, "initialViewport", 12, void 0), b = y(t, "onMoveStart", 12, void 0), x = y(t, "onMove", 12, void 0), C = y(t, "onMoveEnd", 12, void 0), h = y(t, "panOnScrollMode", 12), $ = y(t, "preventScrolling", 12), w = y(t, "zoomOnScroll", 12), _ = y(t, "zoomOnDoubleClick", 12), S = y(t, "zoomOnPinch", 12), M = y(t, "panOnDrag", 12), P = y(t, "panOnScroll", 12), V = y(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: H,
    selectionRect: I,
    minZoom: R,
    maxZoom: E,
    dragging: T,
    translateExtent: k,
    lib: O,
    panActivationKeyPressed: N,
    zoomActivationKeyPressed: A,
    viewportInitialized: X
  } = rt(), K = (W) => z.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  sn(() => {
    Ni(X, !0);
  }), he(() => J(p()), () => {
    G(d, p() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), J(M())),
    () => {
      G(f, o() || M());
    }
  ), he(
    () => (o(), J(P())),
    () => {
      G(v, o() || P());
    }
  ), kt(), Be();
  var F = G0(), re = j(F);
  Ot(re, t, "default", {}), Y(F), Pt(F, (W, se) => Ql == null ? void 0 : Ql(W, se), () => ({
    viewport: z,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: g(d),
    dragging: T,
    panZoom: H,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: C(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: _(),
    zoomOnPinch: S(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof $() == "boolean" ? $() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: K
  })), L(e, F);
  var Q = ve({
    get initialViewport() {
      return p();
    },
    set initialViewport(W) {
      p(W), m();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(W) {
      b(W), m();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), m();
    },
    get onMoveEnd() {
      return C();
    },
    set onMoveEnd(W) {
      C(W), m();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(W) {
      h(W), m();
    },
    get preventScrolling() {
      return $();
    },
    set preventScrolling(W) {
      $(W), m();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(W) {
      w(W), m();
    },
    get zoomOnDoubleClick() {
      return _();
    },
    set zoomOnDoubleClick(W) {
      _(W), m();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(W) {
      S(W), m();
    },
    get panOnDrag() {
      return M();
    },
    set panOnDrag(W) {
      M(W), m();
    },
    get panOnScroll() {
      return P();
    },
    set panOnScroll(W) {
      P(W), m();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(W) {
      V(W), m();
    }
  });
  return r(), Q;
}
ue(
  ld,
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
function eu(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function tu(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var J0 = /* @__PURE__ */ ae("<div><!></div>");
const Q0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function ud(e, t) {
  fe(t, !1), st(e, Q0);
  const [n, r] = ft(), o = () => ne(E, "$panActivationKeyPressed", n), i = () => ne(I, "$selectionKeyPressed", n), a = () => ne(z, "$selectionRect", n), s = () => ne(V, "$elementsSelectable", n), l = () => ne(H, "$selectionRectMode", n), u = () => ne(S, "$edges", n), c = () => ne(_, "$nodeLookup", n), d = () => ne(M, "$viewport", n), f = () => ne(R, "$selectionMode", n), v = () => ne(P, "$dragging", n), p = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe();
  let C = y(t, "panOnDrag", 12, void 0), h = y(t, "selectionOnDrag", 12, void 0);
  const $ = sa(), {
    nodes: w,
    nodeLookup: _,
    edges: S,
    viewport: M,
    dragging: P,
    elementsSelectable: V,
    selectionRect: z,
    selectionRectMode: H,
    selectionKeyPressed: I,
    selectionMode: R,
    panActivationKeyPressed: E,
    unselectNodesAndEdges: T
  } = rt();
  let k = /* @__PURE__ */ oe(), O = null, N = [], A = !1;
  function X(ie) {
    if (A) {
      A = !1;
      return;
    }
    $("paneclick", { event: ie }), T(), H.set(null);
  }
  function K(ie) {
    var ye, Ge;
    if (O = g(k).getBoundingClientRect(), !V || !g(b) || ie.button !== 0 || ie.target !== g(k) || !O)
      return;
    (Ge = (ye = ie.target) == null ? void 0 : ye.setPointerCapture) == null || Ge.call(ye, ie.pointerId);
    const { x: We, y: Ie } = Wn(ie, O);
    T(), z.set({
      width: 0,
      height: 0,
      startX: We,
      startY: Ie,
      x: We,
      y: Ie
    });
  }
  function F(ie) {
    if (!g(b) || !O || !a())
      return;
    A = !0;
    const ye = Wn(ie, O), Ge = a().startX ?? 0, We = a().startY ?? 0, Ie = {
      ...a(),
      x: ye.x < Ge ? ye.x : Ge,
      y: ye.y < We ? ye.y : We,
      width: Math.abs(ye.x - Ge),
      height: Math.abs(ye.y - We)
    }, ee = N.map((ce) => ce.id), Fe = rs(N, u()).map((ce) => ce.id);
    N = Oc(
      c(),
      Ie,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Bi.Partial,
      !0
    );
    const Je = rs(N, u()).map((ce) => ce.id), le = N.map((ce) => ce.id);
    (ee.length !== le.length || le.some((ce) => !ee.includes(ce))) && w.update((ce) => ce.map(tu(le))), (Fe.length !== Je.length || Je.some((ce) => !Fe.includes(ce))) && S.update((ce) => ce.map(tu(Je))), H.set("user"), z.set(Ie);
  }
  function re(ie) {
    var ye, Ge;
    ie.button === 0 && ((Ge = (ye = ie.target) == null ? void 0 : ye.releasePointerCapture) == null || Ge.call(ye, ie.pointerId), !g(b) && l() === "user" && ie.target === g(k) && (X == null || X(ie)), z.set(null), N.length > 0 && Ni(H, "nodes"), i() && (A = !1));
  }
  const Q = (ie) => {
    var ye;
    if (Array.isArray(g(p)) && (ye = g(p)) != null && ye.includes(2)) {
      ie.preventDefault();
      return;
    }
    $("panecontextmenu", { event: ie });
  };
  he(
    () => (o(), J(C())),
    () => {
      G(p, o() || C());
    }
  ), he(
    () => (i(), a(), J(h()), g(p)),
    () => {
      G(b, i() || a() || h() && g(p) !== !0);
    }
  ), he(
    () => (s(), g(b), l()),
    () => {
      G(x, s() && (g(b) || l() === "user"));
    }
  ), kt(), Be();
  var W = J0(), se = He(() => g(x) ? void 0 : eu(X, g(k))), xe = He(() => eu(Q, g(k)));
  let Ce;
  var pe = j(W);
  Ot(pe, t, "default", {}), Y(W), Nn(W, (ie) => G(k, ie), () => g(k)), Te(
    (ie) => Ce = At(W, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, ie),
    [
      () => ({
        draggable: C() === !0 || Array.isArray(C()) && C().includes(0),
        dragging: v(),
        selection: g(b)
      })
    ],
    we
  ), Ue("click", W, function(...ie) {
    var ye;
    (ye = g(se)) == null || ye.apply(this, ie);
  }), Ue("pointerdown", W, function(...ie) {
    var ye;
    (ye = g(x) ? K : void 0) == null || ye.apply(this, ie);
  }), Ue("pointermove", W, function(...ie) {
    var ye;
    (ye = g(x) ? F : void 0) == null || ye.apply(this, ie);
  }), Ue("pointerup", W, function(...ie) {
    var ye;
    (ye = g(x) ? re : void 0) == null || ye.apply(this, ie);
  }), Ue("contextmenu", W, function(...ie) {
    var ye;
    (ye = g(xe)) == null || ye.apply(this, ie);
  }), L(e, W);
  var de = ve({
    get panOnDrag() {
      return C();
    },
    set panOnDrag(ie) {
      C(ie), m();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(ie) {
      h(ie), m();
    }
  });
  return r(), de;
}
ue(ud, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var em = /* @__PURE__ */ ae('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const tm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function cd(e, t) {
  fe(t, !1), st(e, tm);
  const [n, r] = ft(), o = () => ne(i, "$viewport", n), { viewport: i } = rt();
  Be();
  var a = em(), s = j(a);
  Ot(s, t, "default", {}), Y(a), Te(() => Ct(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, a), ve(), r();
}
ue(cd, {}, ["default"], [], !0);
function qi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: a } = t, s = m0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: a,
    getStoreItems: () => {
      const u = q(n.snapGrid), c = q(n.viewport);
      return {
        nodes: q(n.nodes),
        nodeLookup: q(n.nodeLookup),
        edges: q(n.edges),
        nodeExtent: q(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: q(n.nodeOrigin),
        multiSelectionActive: q(n.multiselectionKeyPressed),
        domNode: q(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: q(n.autoPanOnNodeDrag),
        nodesDraggable: q(n.nodesDraggable),
        selectNodesOnDrag: q(n.selectNodesOnDrag),
        nodeDragThreshold: q(n.nodeDragThreshold),
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
function nm({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
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
var rm = /* @__PURE__ */ ae("<div><!></div>");
function dd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(xe, "$nodeTypes", n), i = () => ne(ye, "$elementsSelectable", n), a = () => ne(Ge, "$nodesDraggable", n), s = () => ne(Fe, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let f = y(t, "node", 13), v = y(t, "id", 13), p = y(t, "data", 29, () => ({})), b = y(t, "selected", 13, !1), x = y(t, "draggable", 13, void 0), C = y(t, "selectable", 13, void 0), h = y(t, "connectable", 13, !0), $ = y(t, "deletable", 13, !0), w = y(t, "hidden", 13, !1), _ = y(t, "dragging", 13, !1), S = y(t, "resizeObserver", 13, null), M = y(t, "style", 13, void 0), P = y(t, "type", 13, "default"), V = y(t, "isParent", 13, !1), z = y(t, "positionX", 13), H = y(t, "positionY", 13), I = y(t, "sourcePosition", 13, void 0), R = y(t, "targetPosition", 13, void 0), E = y(t, "zIndex", 13), T = y(t, "measuredWidth", 13, void 0), k = y(t, "measuredHeight", 13, void 0), O = y(t, "initialWidth", 13, void 0), N = y(t, "initialHeight", 13, void 0), A = y(t, "width", 13, void 0), X = y(t, "height", 13, void 0), K = y(t, "dragHandle", 13, void 0), F = y(t, "initialized", 13, !1), re = y(t, "parentId", 13, void 0), Q = y(t, "nodeClickDistance", 13, void 0), W = y(t, "class", 13, "");
  const se = rt(), {
    nodeTypes: xe,
    nodeDragThreshold: Ce,
    selectNodesOnDrag: pe,
    handleNodeSelection: de,
    updateNodeInternals: ie,
    elementsSelectable: ye,
    nodesDraggable: Ge
  } = se;
  let We = /* @__PURE__ */ oe(void 0, !0), Ie = /* @__PURE__ */ oe(null, !0);
  const ee = sa(), Fe = $e(h());
  let Je = /* @__PURE__ */ oe(void 0, !0), le = /* @__PURE__ */ oe(void 0, !0), ce = /* @__PURE__ */ oe(void 0, !0);
  Ur("svelteflow__node_id", v()), Ur("svelteflow__node_connectable", Fe), Os(() => {
    var te;
    g(Ie) && ((te = S()) == null || te.unobserve(g(Ie)));
  });
  function Se(te) {
    C() && (!q(pe) || !x() || q(Ce) > 0) && de(v()), ee("nodeclick", { node: f().internals.userNode, event: te });
  }
  he(() => J(P()), () => {
    G(l, P() || "default");
  }), he(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), he(
    () => (o(), g(l), Wi),
    () => {
      G(c, o()[g(l)] || Wi);
    }
  ), he(
    () => (g(u), J(P())),
    () => {
      g(u) || console.warn("003", eo.error003(P()));
    }
  ), he(
    () => (J(A()), J(X()), J(O()), J(N()), J(T()), J(k())),
    () => {
      G(d, nm({
        width: A(),
        height: X(),
        initialWidth: O(),
        initialHeight: N(),
        measuredWidth: T(),
        measuredHeight: k()
      }));
    }
  ), he(() => J(h()), () => {
    Fe.set(!!h());
  }), he(
    () => (g(Je), g(l), g(le), J(I()), g(ce), J(R()), J(v()), g(We)),
    () => {
      (g(Je) && g(l) !== g(Je) || g(le) && I() !== g(le) || g(ce) && R() !== g(ce)) && requestAnimationFrame(() => ie(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(We),
            force: !0
          }
        ]
      ]))), G(Je, g(l)), G(le, I()), G(ce, R());
    }
  ), he(
    () => (J(S()), g(We), g(Ie), J(F())),
    () => {
      S() && (g(We) !== g(Ie) || !F()) && (g(Ie) && S().unobserve(g(Ie)), g(We) && S().observe(g(We)), G(Ie, g(We)));
    }
  ), kt(), Be(!0);
  var Ke = dt(), ze = _e(Ke);
  {
    var vt = (te) => {
      var Le = rm();
      let me, Bt;
      var Zt = j(Le);
      const ln = /* @__PURE__ */ we(() => b() ?? !1), Ve = /* @__PURE__ */ we(() => C() ?? i() ?? !0), ut = /* @__PURE__ */ we(() => $() ?? !0), Re = /* @__PURE__ */ we(() => x() ?? a() ?? !0);
      Ku(Zt, () => g(c), (Ae, ct) => {
        ct(Ae, {
          get data() {
            return p();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(ln);
          },
          get selectable() {
            return g(Ve);
          },
          get deletable() {
            return g(ut);
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return _();
          },
          get draggable() {
            return g(Re);
          },
          get dragHandle() {
            return K();
          },
          get parentId() {
            return re();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return z();
          },
          get positionAbsoluteY() {
            return H();
          },
          get width() {
            return A();
          },
          get height() {
            return X();
          }
        });
      }), Y(Le), Pt(Le, (Ae, ct) => qi == null ? void 0 : qi(Ae, ct), () => ({
        nodeId: v(),
        isSelectable: C(),
        disabled: !1,
        handleSelector: K(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: de,
        onDrag: (Ae, ct, Jt, Et) => {
          ee("nodedrag", { event: Ae, targetNode: Jt, nodes: Et });
        },
        onDragStart: (Ae, ct, Jt, Et) => {
          ee("nodedragstart", { event: Ae, targetNode: Jt, nodes: Et });
        },
        onDragStop: (Ae, ct, Jt, Et) => {
          ee("nodedragstop", { event: Ae, targetNode: Jt, nodes: Et });
        },
        store: se
      })), Nn(Le, (Ae) => G(We, Ae), () => g(We)), en(() => Ue("click", Le, Se)), en(() => Ue("mouseenter", Le, (Ae) => ee("nodemouseenter", { node: f(), event: Ae }))), en(() => Ue("mouseleave", Le, (Ae) => ee("nodemouseleave", { node: f(), event: Ae }))), en(() => Ue("mousemove", Le, (Ae) => ee("nodemousemove", { node: f(), event: Ae }))), en(() => Ue("contextmenu", Le, (Ae) => ee("nodecontextmenu", { node: f(), event: Ae }))), Te(
        (Ae, ct) => {
          be(Le, "data-id", v()), me = At(Le, 1, Ae, null, me, ct), Bt = Ct(Le, `${M() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, Bt, {
            "z-index": E(),
            transform: `translate(${z() ?? ""}px, ${H() ?? ""}px)`,
            visibility: F() ? "visible" : "hidden"
          });
        },
        [
          () => Ln(Rt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])),
          () => ({
            dragging: _(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: C(),
            nopan: x(),
            parent: V()
          })
        ],
        we
      ), L(te, Le);
    };
    Ee(ze, (te) => {
      w() || te(vt);
    });
  }
  L(e, Ke);
  var lt = ve({
    get node() {
      return f();
    },
    set node(te) {
      f(te), m();
    },
    get id() {
      return v();
    },
    set id(te) {
      v(te), m();
    },
    get data() {
      return p();
    },
    set data(te) {
      p(te), m();
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
      return h();
    },
    set connectable(te) {
      h(te), m();
    },
    get deletable() {
      return $();
    },
    set deletable(te) {
      $(te), m();
    },
    get hidden() {
      return w();
    },
    set hidden(te) {
      w(te), m();
    },
    get dragging() {
      return _();
    },
    set dragging(te) {
      _(te), m();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(te) {
      S(te), m();
    },
    get style() {
      return M();
    },
    set style(te) {
      M(te), m();
    },
    get type() {
      return P();
    },
    set type(te) {
      P(te), m();
    },
    get isParent() {
      return V();
    },
    set isParent(te) {
      V(te), m();
    },
    get positionX() {
      return z();
    },
    set positionX(te) {
      z(te), m();
    },
    get positionY() {
      return H();
    },
    set positionY(te) {
      H(te), m();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(te) {
      I(te), m();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(te) {
      R(te), m();
    },
    get zIndex() {
      return E();
    },
    set zIndex(te) {
      E(te), m();
    },
    get measuredWidth() {
      return T();
    },
    set measuredWidth(te) {
      T(te), m();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(te) {
      k(te), m();
    },
    get initialWidth() {
      return O();
    },
    set initialWidth(te) {
      O(te), m();
    },
    get initialHeight() {
      return N();
    },
    set initialHeight(te) {
      N(te), m();
    },
    get width() {
      return A();
    },
    set width(te) {
      A(te), m();
    },
    get height() {
      return X();
    },
    set height(te) {
      X(te), m();
    },
    get dragHandle() {
      return K();
    },
    set dragHandle(te) {
      K(te), m();
    },
    get initialized() {
      return F();
    },
    set initialized(te) {
      F(te), m();
    },
    get parentId() {
      return re();
    },
    set parentId(te) {
      re(te), m();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), m();
    },
    get class() {
      return W();
    },
    set class(te) {
      W(te), m();
    }
  });
  return r(), lt;
}
ue(
  dd,
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
var om = /* @__PURE__ */ ae('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const im = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function fd(e, t) {
  fe(t, !1), st(e, im);
  const [n, r] = ft(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), a = () => ne(v, "$elementsSelectable", n), s = () => ne(f, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = y(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: p,
    parentLookup: b
  } = rt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver(($) => {
    const w = /* @__PURE__ */ new Map();
    $.forEach((_) => {
      const S = _.target.getAttribute("data-id");
      w.set(S, { id: S, nodeElement: _.target, force: !0 });
    }), p(w);
  });
  Os(() => {
    x == null || x.disconnect();
  }), Be();
  var C = om();
  Gt(C, 5, o, ($) => $.id, ($, w) => {
    const _ = /* @__PURE__ */ we(() => !!g(w).selected), S = /* @__PURE__ */ we(() => !!g(w).hidden), M = /* @__PURE__ */ we(() => !!(g(w).draggable || i() && typeof g(w).draggable > "u")), P = /* @__PURE__ */ we(() => !!(g(w).selectable || a() && typeof g(w).selectable > "u")), V = /* @__PURE__ */ we(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), z = /* @__PURE__ */ we(() => g(w).deletable ?? !0), H = /* @__PURE__ */ we(() => l().has(g(w).id)), I = /* @__PURE__ */ we(() => g(w).type ?? "default"), R = /* @__PURE__ */ we(() => g(w).internals.z ?? 0), E = /* @__PURE__ */ we(() => Hc(g(w)));
    dd($, {
      get node() {
        return g(w);
      },
      get id() {
        return g(w).id;
      },
      get data() {
        return g(w).data;
      },
      get selected() {
        return g(_);
      },
      get hidden() {
        return g(S);
      },
      get draggable() {
        return g(M);
      },
      get selectable() {
        return g(P);
      },
      get connectable() {
        return g(V);
      },
      get deletable() {
        return g(z);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(H);
      },
      get style() {
        return g(w).style;
      },
      get class() {
        return g(w).class;
      },
      get type() {
        return g(I);
      },
      get sourcePosition() {
        return g(w).sourcePosition;
      },
      get targetPosition() {
        return g(w).targetPosition;
      },
      get dragging() {
        return g(w).dragging;
      },
      get zIndex() {
        return g(R);
      },
      get dragHandle() {
        return g(w).dragHandle;
      },
      get initialized() {
        return g(E);
      },
      get width() {
        return g(w).width;
      },
      get height() {
        return g(w).height;
      },
      get initialWidth() {
        return g(w).initialWidth;
      },
      get initialHeight() {
        return g(w).initialHeight;
      },
      get measuredWidth() {
        return g(w).measured.width;
      },
      get measuredHeight() {
        return g(w).measured.height;
      },
      get parentId() {
        return g(w).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(T) {
          Ze.call(this, t, T);
        },
        nodemouseenter(T) {
          Ze.call(this, t, T);
        },
        nodemousemove(T) {
          Ze.call(this, t, T);
        },
        nodemouseleave(T) {
          Ze.call(this, t, T);
        },
        nodedrag(T) {
          Ze.call(this, t, T);
        },
        nodedragstart(T) {
          Ze.call(this, t, T);
        },
        nodedragstop(T) {
          Ze.call(this, t, T);
        },
        nodecontextmenu(T) {
          Ze.call(this, t, T);
        }
      }
    });
  }), Y(C), L(e, C);
  var h = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance($) {
      u($), m();
    }
  });
  return r(), h;
}
ue(fd, { nodeClickDistance: {} }, [], [], !0);
var am = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function vd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(W, "$edgeTypes", n), i = () => ne(se, "$flowId", n), a = () => ne(xe, "$elementsSelectable", n), s = () => ne(Q, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), f = /* @__PURE__ */ oe(void 0, !0);
  let v = y(t, "id", 13), p = y(t, "type", 13, "default"), b = y(t, "source", 13, ""), x = y(t, "target", 13, ""), C = y(t, "data", 29, () => ({})), h = y(t, "style", 13, void 0), $ = y(t, "zIndex", 13, void 0), w = y(t, "animated", 13, !1), _ = y(t, "selected", 13, !1), S = y(t, "selectable", 13, void 0), M = y(t, "deletable", 13, void 0), P = y(t, "hidden", 13, !1), V = y(t, "label", 13, void 0), z = y(t, "labelStyle", 13, void 0), H = y(t, "markerStart", 13, void 0), I = y(t, "markerEnd", 13, void 0), R = y(t, "sourceHandle", 13, void 0), E = y(t, "targetHandle", 13, void 0), T = y(t, "sourceX", 13), k = y(t, "sourceY", 13), O = y(t, "targetX", 13), N = y(t, "targetY", 13), A = y(t, "sourcePosition", 13), X = y(t, "targetPosition", 13), K = y(t, "ariaLabel", 13, void 0), F = y(t, "interactionWidth", 13, void 0), re = y(t, "class", 13, "");
  Ur("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: se,
    elementsSelectable: xe
  } = rt(), Ce = sa(), pe = ed();
  function de(ee) {
    const Fe = s().get(v());
    Fe && (pe(v()), Ce("edgeclick", { event: ee, edge: Fe }));
  }
  function ie(ee, Fe) {
    const Je = s().get(v());
    Je && Ce(Fe, { event: ee, edge: Je });
  }
  he(() => J(p()), () => {
    G(l, p() || "default");
  }), he(
    () => (o(), g(l), Ki),
    () => {
      G(u, o()[g(l)] || Ki);
    }
  ), he(
    () => (J(H()), i()),
    () => {
      G(c, H() ? `url('#${as(H(), i())}')` : void 0);
    }
  ), he(
    () => (J(I()), i()),
    () => {
      G(d, I() ? `url('#${as(I(), i())}')` : void 0);
    }
  ), he(
    () => (J(S()), a()),
    () => {
      G(f, S() ?? a());
    }
  ), kt(), Be(!0);
  var ye = dt(), Ge = _e(ye);
  {
    var We = (ee) => {
      var Fe = am();
      let Je;
      var le = j(Fe);
      let ce;
      var Se = j(le);
      const Ke = /* @__PURE__ */ we(() => M() ?? !0);
      Ku(Se, () => g(u), (ze, vt) => {
        vt(ze, {
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
            return T();
          },
          get sourceY() {
            return k();
          },
          get targetX() {
            return O();
          },
          get targetY() {
            return N();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return X();
          },
          get animated() {
            return w();
          },
          get selected() {
            return _();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return z();
          },
          get data() {
            return C();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return F();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Ke);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), Y(le), Y(Fe), Te(
        (ze, vt) => {
          Je = Ct(Fe, "", Je, { "z-index": $() }), ce = At(le, 0, ze, null, ce, vt), be(le, "data-id", v()), be(le, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => Ln(Rt(["svelte-flow__edge", re()])),
          () => ({
            animated: w(),
            selected: _(),
            selectable: g(f)
          })
        ],
        we
      ), Ue("click", le, de), Ue("contextmenu", le, (ze) => {
        ie(ze, "edgecontextmenu");
      }), Ue("mouseenter", le, (ze) => {
        ie(ze, "edgemouseenter");
      }), Ue("mouseleave", le, (ze) => {
        ie(ze, "edgemouseleave");
      }), L(ee, Fe);
    };
    Ee(Ge, (ee) => {
      P() || ee(We);
    });
  }
  L(e, ye);
  var Ie = ve({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), m();
    },
    get type() {
      return p();
    },
    set type(ee) {
      p(ee), m();
    },
    get source() {
      return b();
    },
    set source(ee) {
      b(ee), m();
    },
    get target() {
      return x();
    },
    set target(ee) {
      x(ee), m();
    },
    get data() {
      return C();
    },
    set data(ee) {
      C(ee), m();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), m();
    },
    get zIndex() {
      return $();
    },
    set zIndex(ee) {
      $(ee), m();
    },
    get animated() {
      return w();
    },
    set animated(ee) {
      w(ee), m();
    },
    get selected() {
      return _();
    },
    set selected(ee) {
      _(ee), m();
    },
    get selectable() {
      return S();
    },
    set selectable(ee) {
      S(ee), m();
    },
    get deletable() {
      return M();
    },
    set deletable(ee) {
      M(ee), m();
    },
    get hidden() {
      return P();
    },
    set hidden(ee) {
      P(ee), m();
    },
    get label() {
      return V();
    },
    set label(ee) {
      V(ee), m();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(ee) {
      z(ee), m();
    },
    get markerStart() {
      return H();
    },
    set markerStart(ee) {
      H(ee), m();
    },
    get markerEnd() {
      return I();
    },
    set markerEnd(ee) {
      I(ee), m();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(ee) {
      R(ee), m();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(ee) {
      E(ee), m();
    },
    get sourceX() {
      return T();
    },
    set sourceX(ee) {
      T(ee), m();
    },
    get sourceY() {
      return k();
    },
    set sourceY(ee) {
      k(ee), m();
    },
    get targetX() {
      return O();
    },
    set targetX(ee) {
      O(ee), m();
    },
    get targetY() {
      return N();
    },
    set targetY(ee) {
      N(ee), m();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(ee) {
      A(ee), m();
    },
    get targetPosition() {
      return X();
    },
    set targetPosition(ee) {
      X(ee), m();
    },
    get ariaLabel() {
      return K();
    },
    set ariaLabel(ee) {
      K(ee), m();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(ee) {
      F(ee), m();
    },
    get class() {
      return re();
    },
    set class(ee) {
      re(ee), m();
    }
  });
  return r(), Ie;
}
ue(
  vd,
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
function gd(e, t) {
  fe(t, !1);
  let n = y(t, "onMount", 12, void 0), r = y(t, "onDestroy", 12, void 0);
  return sn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Be(), ve({
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
ue(gd, { onMount: {}, onDestroy: {} }, [], [], !0);
var sm = /* @__PURE__ */ ke("<defs></defs>");
function hd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(i, "$markers", n), { markers: i } = rt();
  Be();
  var a = sm();
  Gt(a, 5, o, (s) => s.id, (s, l) => {
    pd(s, bt(() => g(l)));
  }), Y(a), L(e, a), ve(), r();
}
ue(hd, {}, [], [], !0);
var lm = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function pd(e, t) {
  fe(t, !1);
  let n = y(t, "id", 12), r = y(t, "type", 12), o = y(t, "width", 12, 12.5), i = y(t, "height", 12, 12.5), a = y(t, "markerUnits", 12, "strokeWidth"), s = y(t, "orient", 12, "auto-start-reverse"), l = y(t, "color", 12, void 0), u = y(t, "strokeWidth", 12, void 0);
  Be();
  var c = cm(), d = j(c);
  {
    var f = (p) => {
      var b = lm();
      Te(() => {
        be(b, "stroke", l()), be(b, "stroke-width", u());
      }), L(p, b);
    }, v = (p, b) => {
      {
        var x = (C) => {
          var h = um();
          Te(() => {
            be(h, "stroke", l()), be(h, "stroke-width", u()), be(h, "fill", l());
          }), L(C, h);
        };
        Ee(
          p,
          (C) => {
            r() === Ro.ArrowClosed && C(x);
          },
          b
        );
      }
    };
    Ee(d, (p) => {
      r() === Ro.Arrow ? p(f) : p(v, !1);
    });
  }
  return Y(c), Te(() => {
    be(c, "id", n()), be(c, "markerWidth", `${o()}`), be(c, "markerHeight", `${i()}`), be(c, "markerUnits", a()), be(c, "orient", s());
  }), L(e, c), ve({
    get id() {
      return n();
    },
    set id(p) {
      n(p), m();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), m();
    },
    get width() {
      return o();
    },
    set width(p) {
      o(p), m();
    },
    get height() {
      return i();
    },
    set height(p) {
      i(p), m();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(p) {
      a(p), m();
    },
    get orient() {
      return s();
    },
    set orient(p) {
      s(p), m();
    },
    get color() {
      return l();
    },
    set color(p) {
      l(p), m();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(p) {
      u(p), m();
    }
  });
}
ue(
  pd,
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
var dm = /* @__PURE__ */ ae('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function md(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = y(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = rt();
  sn(() => {
    a() && u(a());
  }), Be();
  var d = dm(), f = j(d), v = j(f);
  hd(v, {}), Y(f);
  var p = Z(f, 2);
  Gt(p, 1, o, (h) => h.id, (h, $) => {
    const w = /* @__PURE__ */ we(() => g($).selectable ?? i()), _ = /* @__PURE__ */ we(() => g($).type || "default");
    vd(h, {
      get id() {
        return g($).id;
      },
      get source() {
        return g($).source;
      },
      get target() {
        return g($).target;
      },
      get data() {
        return g($).data;
      },
      get style() {
        return g($).style;
      },
      get animated() {
        return g($).animated;
      },
      get selected() {
        return g($).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g($).deletable;
      },
      get hidden() {
        return g($).hidden;
      },
      get label() {
        return g($).label;
      },
      get labelStyle() {
        return g($).labelStyle;
      },
      get markerStart() {
        return g($).markerStart;
      },
      get markerEnd() {
        return g($).markerEnd;
      },
      get sourceHandle() {
        return g($).sourceHandle;
      },
      get targetHandle() {
        return g($).targetHandle;
      },
      get sourceX() {
        return g($).sourceX;
      },
      get sourceY() {
        return g($).sourceY;
      },
      get targetX() {
        return g($).targetX;
      },
      get targetY() {
        return g($).targetY;
      },
      get sourcePosition() {
        return g($).sourcePosition;
      },
      get targetPosition() {
        return g($).targetPosition;
      },
      get ariaLabel() {
        return g($).ariaLabel;
      },
      get interactionWidth() {
        return g($).interactionWidth;
      },
      get class() {
        return g($).class;
      },
      get type() {
        return g(_);
      },
      get zIndex() {
        return g($).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Ze.call(this, t, S);
        },
        edgecontextmenu(S) {
          Ze.call(this, t, S);
        },
        edgemouseenter(S) {
          Ze.call(this, t, S);
        },
        edgemouseleave(S) {
          Ze.call(this, t, S);
        }
      }
    });
  });
  var b = Z(p, 2);
  {
    var x = (h) => {
      gd(h, {
        onMount: () => {
          Ni(l, !0);
        },
        onDestroy: () => {
          Ni(l, !1);
        }
      });
    };
    Ee(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  Y(d), L(e, d);
  var C = ve({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(h) {
      a(h), m();
    }
  });
  return r(), C;
}
ue(md, { defaultEdgeOptions: {} }, [], [], !0);
var fm = /* @__PURE__ */ ae('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const vm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ws(e, t) {
  fe(t, !1), st(e, vm);
  let n = y(t, "x", 12, 0), r = y(t, "y", 12, 0), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "isVisible", 12, !0);
  var s = dt(), l = _e(s);
  {
    var u = (c) => {
      var d = fm();
      let f;
      Te(() => f = Ct(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), L(c, d);
    };
    Ee(l, (c) => {
      a() && c(u);
    });
  }
  return L(e, s), ve({
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
ue(
  Ws,
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
function yd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = rt();
  Be();
  const l = /* @__PURE__ */ we(() => !!(o() && i() === "user")), u = /* @__PURE__ */ we(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ we(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ we(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ we(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  Ws(e, {
    get isVisible() {
      return g(l);
    },
    get width() {
      return g(u);
    },
    get height() {
      return g(c);
    },
    get x() {
      return g(d);
    },
    get y() {
      return g(f);
    }
  }), ve(), r();
}
ue(yd, {}, [], [], !0);
var gm = /* @__PURE__ */ ae('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const hm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function wd(e, t) {
  fe(t, !1), st(e, hm);
  const [n, r] = ft(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = rt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = sa();
  let f = /* @__PURE__ */ oe(null);
  function v(h) {
    const $ = a().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: $, event: h });
  }
  function p(h) {
    const $ = a().filter((w) => w.selected);
    d("selectionclick", { nodes: $, event: h });
  }
  he(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (G(f, Uo(i(), { filter: (h) => !!h.selected })), a());
    }
  ), kt(), Be();
  var b = dt(), x = _e(b);
  {
    var C = (h) => {
      var $ = gm(), w = j($);
      Ws(w, { width: "100%", height: "100%", x: 0, y: 0 }), Y($), Pt($, (_, S) => qi == null ? void 0 : qi(_, S), () => ({
        disabled: !1,
        store: s,
        onDrag: (_, S, M, P) => {
          d("nodedrag", { event: _, targetNode: null, nodes: P });
        },
        onDragStart: (_, S, M, P) => {
          d("nodedragstart", { event: _, targetNode: null, nodes: P });
        },
        onDragStop: (_, S, M, P) => {
          d("nodedragstop", { event: _, targetNode: null, nodes: P });
        }
      })), en(() => Ue("contextmenu", $, v)), en(() => Ue("click", $, p)), en(() => Ue("keyup", $, () => {
      })), Te(() => Ct($, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), L(h, $);
    };
    Ee(x, (h) => {
      o() === "nodes" && g(f) && Zn(g(f).x) && Zn(g(f).y) && h(C);
    });
  }
  L(e, b), ve(), r();
}
ue(wd, {}, [], [], !0);
function wt(e, t) {
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
      }, { modifier: d, key: f, callback: v, preventDefault: p, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((C) => l[C])
        ))
          continue;
        if (a.key === f) {
          p && a.preventDefault();
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
function bd(e, t) {
  fe(t, !1);
  let n = y(t, "selectionKey", 12, "Shift"), r = y(t, "multiSelectionKey", 28, () => Xi() ? "Meta" : "Control"), o = y(t, "deleteKey", 12, "Backspace"), i = y(t, "panActivationKey", 12, " "), a = y(t, "zoomActivationKey", 28, () => Xi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = rt();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function p(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, $) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const _ = b(w);
      return {
        key: _,
        modifier: p(w),
        enabled: _ !== null,
        callback: $
      };
    });
  }
  function C() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Be(), Ue("blur", Wt, C), Ue("contextmenu", Wt, C), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Fp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), Pt(Wt, (h, $) => wt == null ? void 0 : wt(h, $), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), ve({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), m();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), m();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), m();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(h) {
      i(h), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(h) {
      a(h), m();
    }
  });
}
ue(
  bd,
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
var pm = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), mm = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function xd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(v, "$connection", n), i = () => ne(p, "$connectionLineType", n), a = () => ne(d, "$width", n), s = () => ne(f, "$height", n);
  let l = y(t, "containerStyle", 12, ""), u = y(t, "style", 12, ""), c = y(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: p
  } = rt();
  let b = /* @__PURE__ */ oe(null);
  he(
    () => (o(), J(c()), i(), g(b), is),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: _, fromPosition: S, toPosition: M } = o(), P = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: S,
          targetX: _.x,
          targetY: _.y,
          targetPosition: M
        };
        switch (i()) {
          case Wr.Bezier:
            ((V) => G(b, V[0]))(Ac(P));
            break;
          case Wr.Step:
            ((V) => G(b, V[0]))(Yi({ ...P, borderRadius: 0 }));
            break;
          case Wr.SmoothStep:
            ((V) => G(b, V[0]))(Yi(P));
            break;
          default:
            ((V) => G(b, V[0]))(is(P));
        }
      }
    }
  ), kt(), Be();
  var x = dt(), C = _e(x);
  {
    var h = (w) => {
      var _ = mm(), S = j(_), M = j(S);
      Ot(M, t, "connectionLine", {});
      var P = Z(M);
      {
        var V = (z) => {
          var H = pm();
          Te(() => {
            be(H, "d", g(b)), Ct(H, u());
          }), L(z, H);
        };
        Ee(P, (z) => {
          c() || z(V);
        });
      }
      Y(S), Y(_), Te(
        (z) => {
          be(_, "width", a()), be(_, "height", s()), Ct(_, l()), At(S, 0, z);
        },
        [
          () => Ln(Rt([
            "svelte-flow__connection",
            Rp(o().isValid)
          ]))
        ],
        we
      ), L(w, _);
    };
    Ee(C, (w) => {
      o().inProgress && w(h);
    });
  }
  L(e, x);
  var $ = ve({
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
  return r(), $;
}
ue(
  xd,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var ym = /* @__PURE__ */ ae("<div><!></div>");
function ei(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["position", "style", "class"]);
  fe(t, !1);
  const [o, i] = ft(), a = () => ne(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = y(t, "position", 12, "top-right"), u = y(t, "style", 12, void 0), c = y(t, "class", 12, void 0);
  const { selectionRectMode: d } = rt();
  he(() => J(l()), () => {
    G(s, `${l()}`.split("-"));
  }), kt(), Be();
  var f = ym();
  let v;
  var p = j(f);
  Ot(p, t, "default", {}), Y(f), Te(
    (x) => v = bn(f, v, {
      class: x,
      style: u(),
      ...r,
      [wr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Rt([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    we
  ), L(e, f);
  var b = ve({
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
ue(ei, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var wm = /* @__PURE__ */ ae('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function $d(e, t) {
  fe(t, !1);
  let n = y(t, "proOptions", 12, void 0), r = y(t, "position", 12, "bottom-right");
  Be();
  var o = dt(), i = _e(o);
  {
    var a = (s) => {
      ei(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = wm();
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return L(e, o), ve({
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
ue($d, { proOptions: {}, position: {} }, [], [], !0);
function nu(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: a }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), a !== void 0 && e.setPaneClickDistance(a);
}
const bm = (e) => Object.keys(e);
function ru(e, t) {
  bm(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function xm() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function $m(e = "light") {
  return un("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = xm(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var Cm = /* @__PURE__ */ ae('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), _m = /* @__PURE__ */ ae("<!> <!>", 1), km = /* @__PURE__ */ ae("<div><!> <!> <!> <!></div>");
const Sm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Cd(e, t) {
  const n = Yv(t), r = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = ht(r, [
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
  fe(t, !1), st(e, Sm);
  const [i, a] = ft(), s = () => ne($(), "$viewport", i), l = () => ne(vo, "$initialized", i), u = () => ne(g(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, "1"), f = y(t, "nodes", 12), v = y(t, "edges", 12), p = y(t, "fitView", 12, void 0), b = y(t, "fitViewOptions", 12, void 0), x = y(t, "minZoom", 12, void 0), C = y(t, "maxZoom", 12, void 0), h = y(t, "initialViewport", 12, void 0), $ = y(t, "viewport", 12, void 0), w = y(t, "nodeTypes", 12, void 0), _ = y(t, "edgeTypes", 12, void 0), S = y(t, "selectionKey", 12, void 0), M = y(t, "selectionMode", 12, void 0), P = y(t, "panActivationKey", 12, void 0), V = y(t, "multiSelectionKey", 12, void 0), z = y(t, "zoomActivationKey", 12, void 0), H = y(t, "nodesDraggable", 12, void 0), I = y(t, "nodesConnectable", 12, void 0), R = y(t, "nodeDragThreshold", 12, void 0), E = y(t, "elementsSelectable", 12, void 0), T = y(t, "snapGrid", 12, void 0), k = y(t, "deleteKey", 12, void 0), O = y(t, "connectionRadius", 12, void 0), N = y(t, "connectionLineType", 12, void 0), A = y(t, "connectionMode", 28, () => Er.Strict), X = y(t, "connectionLineStyle", 12, ""), K = y(t, "connectionLineContainerStyle", 12, ""), F = y(t, "onMoveStart", 12, void 0), re = y(t, "onMove", 12, void 0), Q = y(t, "onMoveEnd", 12, void 0), W = y(t, "isValidConnection", 12, void 0), se = y(t, "translateExtent", 12, void 0), xe = y(t, "nodeExtent", 12, void 0), Ce = y(t, "onlyRenderVisibleElements", 12, void 0), pe = y(t, "panOnScrollMode", 28, () => cr.Free), de = y(t, "preventScrolling", 12, !0), ie = y(t, "zoomOnScroll", 12, !0), ye = y(t, "zoomOnDoubleClick", 12, !0), Ge = y(t, "zoomOnPinch", 12, !0), We = y(t, "panOnScroll", 12, !1), Ie = y(t, "panOnDrag", 12, !0), ee = y(t, "selectionOnDrag", 12, void 0), Fe = y(t, "autoPanOnConnect", 12, !0), Je = y(t, "autoPanOnNodeDrag", 12, !0), le = y(t, "onerror", 12, void 0), ce = y(t, "ondelete", 12, void 0), Se = y(t, "onedgecreate", 12, void 0), Ke = y(t, "attributionPosition", 12, void 0), ze = y(t, "proOptions", 12, void 0), vt = y(t, "defaultEdgeOptions", 12, void 0), lt = y(t, "width", 12, void 0), te = y(t, "height", 12, void 0), Le = y(t, "colorMode", 12, "light"), me = y(t, "onconnect", 12, void 0), Bt = y(t, "onconnectstart", 12, void 0), Zt = y(t, "onconnectend", 12, void 0), ln = y(t, "onbeforedelete", 12, void 0), Ve = y(t, "oninit", 12, void 0), ut = y(t, "nodeOrigin", 12, void 0), Re = y(t, "paneClickDistance", 12, 0), Ae = y(t, "nodeClickDistance", 12, 0), ct = y(t, "defaultMarkerColor", 12, "#b1b1b7"), Jt = y(t, "style", 12, void 0), Et = y(t, "class", 12, void 0), Qn = /* @__PURE__ */ oe(), mt = /* @__PURE__ */ oe(), xt = /* @__PURE__ */ oe();
  const kn = s() || h(), ot = _v(pa) ? rt() : F0({
    nodes: q(f()),
    edges: q(v()),
    width: lt(),
    height: te(),
    fitView: p(),
    nodeOrigin: ut(),
    nodeExtent: xe()
  });
  sn(() => (ot.width.set(g(mt)), ot.height.set(g(xt)), ot.domNode.set(g(Qn)), ot.syncNodeStores(f()), ot.syncEdgeStores(v()), ot.syncViewport($()), p() !== void 0 && ot.fitViewOnInit.set(p()), b() && ot.fitViewOptions.set(b()), nu(ot, {
    nodeTypes: w(),
    edgeTypes: _(),
    minZoom: x(),
    maxZoom: C(),
    translateExtent: se(),
    paneClickDistance: Re()
  }), () => {
    ot.reset();
  }));
  const { initialized: vo } = ot;
  let er = /* @__PURE__ */ oe(!1);
  he(
    () => (g(mt), g(xt)),
    () => {
      g(mt) !== void 0 && g(xt) !== void 0 && (ot.width.set(g(mt)), ot.height.set(g(xt)));
    }
  ), he(
    () => (g(er), l(), J(Ve())),
    () => {
      var B;
      !g(er) && l() && ((B = Ve()) == null || B(), G(er, !0));
    }
  ), he(
    () => (J(d()), J(N()), J(O()), J(M()), J(T()), J(ct()), J(H()), J(I()), J(E()), J(Ce()), J(W()), J(Fe()), J(Je()), J(le()), J(ce()), J(Se()), J(A()), J(R()), J(me()), J(Bt()), J(Zt()), J(ln()), J(ut()), ru),
    () => {
      const B = {
        flowId: d(),
        connectionLineType: N(),
        connectionRadius: O(),
        selectionMode: M(),
        snapGrid: T(),
        defaultMarkerColor: ct(),
        nodesDraggable: H(),
        nodesConnectable: I(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: Ce(),
        isValidConnection: W(),
        autoPanOnConnect: Fe(),
        autoPanOnNodeDrag: Je(),
        onerror: le(),
        ondelete: ce(),
        onedgecreate: Se(),
        connectionMode: A(),
        nodeDragThreshold: R(),
        onconnect: me(),
        onconnectstart: Bt(),
        onconnectend: Zt(),
        onbeforedelete: ln(),
        nodeOrigin: ut()
      };
      ru(ot, B);
    }
  ), he(
    () => (J(w()), J(_()), J(x()), J(C()), J(se()), J(Re())),
    () => {
      nu(ot, {
        nodeTypes: w(),
        edgeTypes: _(),
        minZoom: x(),
        maxZoom: C(),
        translateExtent: se(),
        paneClickDistance: Re()
      });
    }
  ), he(
    () => J(Le()),
    () => {
      e1(G(c, $m(Le())), "$colorModeClass", i);
    }
  ), kt(), Be();
  var Vt = km();
  let mr;
  var yr = j(Vt);
  bd(yr, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return P();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Hr = Z(yr, 2);
  const go = /* @__PURE__ */ we(() => pe() === void 0 ? cr.Free : pe()), ii = /* @__PURE__ */ we(() => de() === void 0 ? !0 : de()), ai = /* @__PURE__ */ we(() => ie() === void 0 ? !0 : ie()), xa = /* @__PURE__ */ we(() => ye() === void 0 ? !0 : ye()), $a = /* @__PURE__ */ we(() => Ge() === void 0 ? !0 : Ge()), Ca = /* @__PURE__ */ we(() => We() === void 0 ? !1 : We()), _a = /* @__PURE__ */ we(() => Ie() === void 0 ? !0 : Ie()), D = /* @__PURE__ */ we(() => Re() === void 0 ? 0 : Re());
  ld(Hr, {
    initialViewport: kn,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return re();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return g(go);
    },
    get preventScrolling() {
      return g(ii);
    },
    get zoomOnScroll() {
      return g(ai);
    },
    get zoomOnDoubleClick() {
      return g(xa);
    },
    get zoomOnPinch() {
      return g($a);
    },
    get panOnScroll() {
      return g(Ca);
    },
    get panOnDrag() {
      return g(_a);
    },
    get paneClickDistance() {
      return g(D);
    },
    children: (B, it) => {
      const Ye = /* @__PURE__ */ we(() => Ie() === void 0 ? !0 : Ie());
      ud(B, {
        get panOnDrag() {
          return g(Ye);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(De) {
            Ze.call(this, t, De);
          },
          panecontextmenu(De) {
            Ze.call(this, t, De);
          }
        },
        children: (De, Mt) => {
          var gt = _m(), pt = _e(gt);
          cd(pt, {
            children: (tr, nr) => {
              var _t = Cm(), Lr = _e(_t);
              md(Lr, {
                get defaultEdgeOptions() {
                  return vt();
                },
                $$events: {
                  edgeclick(je) {
                    Ze.call(this, t, je);
                  },
                  edgecontextmenu(je) {
                    Ze.call(this, t, je);
                  },
                  edgemouseenter(je) {
                    Ze.call(this, t, je);
                  },
                  edgemouseleave(je) {
                    Ze.call(this, t, je);
                  }
                }
              });
              var si = Z(Lr, 2);
              xd(si, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return X();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (je, Xw) => {
                    var Us = dt(), wf = _e(Us);
                    Ot(wf, t, "connectionLine", {}), L(je, Us);
                  }
                }
              });
              var li = Z(si, 6);
              fd(li, {
                get nodeClickDistance() {
                  return Ae();
                },
                $$events: {
                  nodeclick(je) {
                    Ze.call(this, t, je);
                  },
                  nodemouseenter(je) {
                    Ze.call(this, t, je);
                  },
                  nodemousemove(je) {
                    Ze.call(this, t, je);
                  },
                  nodemouseleave(je) {
                    Ze.call(this, t, je);
                  },
                  nodedragstart(je) {
                    Ze.call(this, t, je);
                  },
                  nodedrag(je) {
                    Ze.call(this, t, je);
                  },
                  nodedragstop(je) {
                    Ze.call(this, t, je);
                  },
                  nodecontextmenu(je) {
                    Ze.call(this, t, je);
                  }
                }
              });
              var yf = Z(li, 2);
              wd(yf, {
                $$events: {
                  selectionclick(je) {
                    Ze.call(this, t, je);
                  },
                  selectioncontextmenu(je) {
                    Ze.call(this, t, je);
                  },
                  nodedragstart(je) {
                    Ze.call(this, t, je);
                  },
                  nodedrag(je) {
                    Ze.call(this, t, je);
                  },
                  nodedragstop(je) {
                    Ze.call(this, t, je);
                  }
                }
              }), L(tr, _t);
            },
            $$slots: { default: !0 }
          });
          var Xt = Z(pt, 2);
          yd(Xt, {}), L(De, gt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var U = Z(Hr, 2);
  $d(U, {
    get proOptions() {
      return ze();
    },
    get position() {
      return Ke();
    }
  });
  var ge = Z(U, 2);
  Ot(ge, t, "default", {}), Y(Vt), Nn(Vt, (B) => G(Qn, B), () => g(Qn)), Te(
    (B) => mr = bn(
      Vt,
      mr,
      {
        style: Jt(),
        class: B,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Rt([
        "svelte-flow",
        Et(),
        u()
      ])
    ],
    we
  ), gl(Vt, "clientWidth", (B) => G(mt, B)), gl(Vt, "clientHeight", (B) => G(xt, B)), Ue("dragover", Vt, function(B) {
    Ze.call(this, t, B);
  }), Ue("drop", Vt, function(B) {
    Ze.call(this, t, B);
  }), L(e, Vt);
  var Me = ve({
    get id() {
      return d();
    },
    set id(B) {
      d(B), m();
    },
    get nodes() {
      return f();
    },
    set nodes(B) {
      f(B), m();
    },
    get edges() {
      return v();
    },
    set edges(B) {
      v(B), m();
    },
    get fitView() {
      return p();
    },
    set fitView(B) {
      p(B), m();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(B) {
      b(B), m();
    },
    get minZoom() {
      return x();
    },
    set minZoom(B) {
      x(B), m();
    },
    get maxZoom() {
      return C();
    },
    set maxZoom(B) {
      C(B), m();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(B) {
      h(B), m();
    },
    get viewport() {
      return $();
    },
    set viewport(B) {
      $(B), m();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(B) {
      w(B), m();
    },
    get edgeTypes() {
      return _();
    },
    set edgeTypes(B) {
      _(B), m();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(B) {
      S(B), m();
    },
    get selectionMode() {
      return M();
    },
    set selectionMode(B) {
      M(B), m();
    },
    get panActivationKey() {
      return P();
    },
    set panActivationKey(B) {
      P(B), m();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(B) {
      V(B), m();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(B) {
      z(B), m();
    },
    get nodesDraggable() {
      return H();
    },
    set nodesDraggable(B) {
      H(B), m();
    },
    get nodesConnectable() {
      return I();
    },
    set nodesConnectable(B) {
      I(B), m();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(B) {
      R(B), m();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(B) {
      E(B), m();
    },
    get snapGrid() {
      return T();
    },
    set snapGrid(B) {
      T(B), m();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(B) {
      k(B), m();
    },
    get connectionRadius() {
      return O();
    },
    set connectionRadius(B) {
      O(B), m();
    },
    get connectionLineType() {
      return N();
    },
    set connectionLineType(B) {
      N(B), m();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(B) {
      A(B), m();
    },
    get connectionLineStyle() {
      return X();
    },
    set connectionLineStyle(B) {
      X(B), m();
    },
    get connectionLineContainerStyle() {
      return K();
    },
    set connectionLineContainerStyle(B) {
      K(B), m();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(B) {
      F(B), m();
    },
    get onMove() {
      return re();
    },
    set onMove(B) {
      re(B), m();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(B) {
      Q(B), m();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(B) {
      W(B), m();
    },
    get translateExtent() {
      return se();
    },
    set translateExtent(B) {
      se(B), m();
    },
    get nodeExtent() {
      return xe();
    },
    set nodeExtent(B) {
      xe(B), m();
    },
    get onlyRenderVisibleElements() {
      return Ce();
    },
    set onlyRenderVisibleElements(B) {
      Ce(B), m();
    },
    get panOnScrollMode() {
      return pe();
    },
    set panOnScrollMode(B) {
      pe(B), m();
    },
    get preventScrolling() {
      return de();
    },
    set preventScrolling(B) {
      de(B), m();
    },
    get zoomOnScroll() {
      return ie();
    },
    set zoomOnScroll(B) {
      ie(B), m();
    },
    get zoomOnDoubleClick() {
      return ye();
    },
    set zoomOnDoubleClick(B) {
      ye(B), m();
    },
    get zoomOnPinch() {
      return Ge();
    },
    set zoomOnPinch(B) {
      Ge(B), m();
    },
    get panOnScroll() {
      return We();
    },
    set panOnScroll(B) {
      We(B), m();
    },
    get panOnDrag() {
      return Ie();
    },
    set panOnDrag(B) {
      Ie(B), m();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(B) {
      ee(B), m();
    },
    get autoPanOnConnect() {
      return Fe();
    },
    set autoPanOnConnect(B) {
      Fe(B), m();
    },
    get autoPanOnNodeDrag() {
      return Je();
    },
    set autoPanOnNodeDrag(B) {
      Je(B), m();
    },
    get onerror() {
      return le();
    },
    set onerror(B) {
      le(B), m();
    },
    get ondelete() {
      return ce();
    },
    set ondelete(B) {
      ce(B), m();
    },
    get onedgecreate() {
      return Se();
    },
    set onedgecreate(B) {
      Se(B), m();
    },
    get attributionPosition() {
      return Ke();
    },
    set attributionPosition(B) {
      Ke(B), m();
    },
    get proOptions() {
      return ze();
    },
    set proOptions(B) {
      ze(B), m();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(B) {
      vt(B), m();
    },
    get width() {
      return lt();
    },
    set width(B) {
      lt(B), m();
    },
    get height() {
      return te();
    },
    set height(B) {
      te(B), m();
    },
    get colorMode() {
      return Le();
    },
    set colorMode(B) {
      Le(B), m();
    },
    get onconnect() {
      return me();
    },
    set onconnect(B) {
      me(B), m();
    },
    get onconnectstart() {
      return Bt();
    },
    set onconnectstart(B) {
      Bt(B), m();
    },
    get onconnectend() {
      return Zt();
    },
    set onconnectend(B) {
      Zt(B), m();
    },
    get onbeforedelete() {
      return ln();
    },
    set onbeforedelete(B) {
      ln(B), m();
    },
    get oninit() {
      return Ve();
    },
    set oninit(B) {
      Ve(B), m();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(B) {
      ut(B), m();
    },
    get paneClickDistance() {
      return Re();
    },
    set paneClickDistance(B) {
      Re(B), m();
    },
    get nodeClickDistance() {
      return Ae();
    },
    set nodeClickDistance(B) {
      Ae(B), m();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(B) {
      ct(B), m();
    },
    get style() {
      return Jt();
    },
    set style(B) {
      Jt(B), m();
    },
    get class() {
      return Et();
    },
    set class(B) {
      Et(B), m();
    }
  });
  return a(), Me;
}
ue(
  Cd,
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
function _d(e, t) {
  fe(t, !1);
  let n = y(t, "initialNodes", 12, void 0), r = y(t, "initialEdges", 12, void 0), o = y(t, "initialWidth", 12, void 0), i = y(t, "initialHeight", 12, void 0), a = y(t, "fitView", 12, void 0), s = y(t, "nodeOrigin", 12, void 0);
  const l = sd({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Ur(pa, { getStore: () => l }), Os(() => {
    l.reset();
  }), Be();
  var u = dt(), c = _e(u);
  return Ot(c, t, "default", {}), L(e, u), ve({
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
ue(
  _d,
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
var Em = /* @__PURE__ */ ae("<button><!></button>");
function _o(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  fe(t, !1);
  let o = y(t, "class", 12, void 0), i = y(t, "bgColor", 12, void 0), a = y(t, "bgColorHover", 12, void 0), s = y(t, "color", 12, void 0), l = y(t, "colorHover", 12, void 0), u = y(t, "borderColor", 12, void 0);
  Be();
  var c = Em();
  let d;
  var f = j(c);
  return Ot(f, t, "default", { class: "button-svg" }), Y(c), Te(
    (v) => d = bn(c, d, {
      type: "button",
      class: v,
      ...r,
      [wr]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": a(),
        "--xy-controls-button-color-props": s(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => Rt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    we
  ), Ue("click", c, function(v) {
    Ze.call(this, t, v);
  }), L(e, c), ve({
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
ue(
  _o,
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
var Mm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function kd(e) {
  var t = Mm();
  L(e, t);
}
ue(kd, {}, [], [], !0);
var Pm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Sd(e) {
  var t = Pm();
  L(e, t);
}
ue(Sd, {}, [], [], !0);
var Om = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Ed(e) {
  var t = Om();
  L(e, t);
}
ue(Ed, {}, [], [], !0);
var Tm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Md(e) {
  var t = Tm();
  L(e, t);
}
ue(Md, {}, [], [], !0);
var Vm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Pd(e) {
  var t = Vm();
  L(e, t);
}
ue(Pd, {}, [], [], !0);
var Nm = /* @__PURE__ */ ae("<!> <!>", 1), Dm = /* @__PURE__ */ ae("<!> <!> <!> <!> <!> <!>", 1);
function Od(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(N, "$nodesDraggable", n), i = () => ne(A, "$nodesConnectable", n), a = () => ne(X, "$elementsSelectable", n), s = () => ne(T, "$viewport", n), l = () => ne(k, "$minZoom", n), u = () => ne(O, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let p = y(t, "position", 12, "bottom-left"), b = y(t, "showZoom", 12, !0), x = y(t, "showFitView", 12, !0), C = y(t, "showLock", 12, !0), h = y(t, "buttonBgColor", 12, void 0), $ = y(t, "buttonBgColorHover", 12, void 0), w = y(t, "buttonColor", 12, void 0), _ = y(t, "buttonColorHover", 12, void 0), S = y(t, "buttonBorderColor", 12, void 0), M = y(t, "ariaLabel", 12, void 0), P = y(t, "style", 12, void 0), V = y(t, "orientation", 12, "vertical"), z = y(t, "fitViewOptions", 12, void 0), H = y(t, "class", 12, "");
  const {
    zoomIn: I,
    zoomOut: R,
    fitView: E,
    viewport: T,
    minZoom: k,
    maxZoom: O,
    nodesDraggable: N,
    nodesConnectable: A,
    elementsSelectable: X
  } = rt(), K = {
    bgColor: h(),
    bgColorHover: $(),
    color: w(),
    colorHover: _(),
    borderColor: S()
  }, F = () => {
    I();
  }, re = () => {
    R();
  }, Q = () => {
    E(z());
  }, W = () => {
    G(c, !g(c)), N.set(g(c)), A.set(g(c)), X.set(g(c));
  };
  he(
    () => (o(), i(), a()),
    () => {
      G(c, o() || i() || a());
    }
  ), he(() => (s(), l()), () => {
    G(d, s().zoom <= l());
  }), he(() => (s(), u()), () => {
    G(f, s().zoom >= u());
  }), he(() => J(V()), () => {
    G(v, V() === "horizontal" ? "horizontal" : "vertical");
  }), kt(), Be();
  const se = /* @__PURE__ */ we(() => Rt([
    "svelte-flow__controls",
    g(v),
    H()
  ])), xe = /* @__PURE__ */ we(() => M() ?? "Svelte Flow controls");
  ei(e, {
    get class() {
      return g(se);
    },
    get position() {
      return p();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(xe);
    },
    get style() {
      return P();
    },
    children: (pe, de) => {
      var ie = Dm(), ye = _e(ie);
      Ot(ye, t, "before", {});
      var Ge = Z(ye, 2);
      {
        var We = (Se) => {
          var Ke = Nm(), ze = _e(Ke);
          _o(ze, bt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            K,
            {
              $$events: { click: F },
              children: (lt, te) => {
                kd(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var vt = Z(ze, 2);
          _o(vt, bt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            K,
            {
              $$events: { click: re },
              children: (lt, te) => {
                Sd(lt);
              },
              $$slots: { default: !0 }
            }
          )), L(Se, Ke);
        };
        Ee(Ge, (Se) => {
          b() && Se(We);
        });
      }
      var Ie = Z(Ge, 2);
      {
        var ee = (Se) => {
          _o(Se, bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            K,
            {
              $$events: { click: Q },
              children: (Ke, ze) => {
                Ed(Ke);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(Ie, (Se) => {
          x() && Se(ee);
        });
      }
      var Fe = Z(Ie, 2);
      {
        var Je = (Se) => {
          _o(Se, bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            K,
            {
              $$events: { click: W },
              children: (Ke, ze) => {
                var vt = dt(), lt = _e(vt);
                {
                  var te = (me) => {
                    Pd(me);
                  }, Le = (me) => {
                    Md(me);
                  };
                  Ee(lt, (me) => {
                    g(c) ? me(te) : me(Le, !1);
                  });
                }
                L(Ke, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(Fe, (Se) => {
          C() && Se(Je);
        });
      }
      var le = Z(Fe, 2);
      Ot(le, t, "default", {});
      var ce = Z(le, 2);
      Ot(ce, t, "after", {}), L(pe, ie);
    },
    $$slots: { default: !0 }
  });
  var Ce = ve({
    get position() {
      return p();
    },
    set position(pe) {
      p(pe), m();
    },
    get showZoom() {
      return b();
    },
    set showZoom(pe) {
      b(pe), m();
    },
    get showFitView() {
      return x();
    },
    set showFitView(pe) {
      x(pe), m();
    },
    get showLock() {
      return C();
    },
    set showLock(pe) {
      C(pe), m();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(pe) {
      h(pe), m();
    },
    get buttonBgColorHover() {
      return $();
    },
    set buttonBgColorHover(pe) {
      $(pe), m();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(pe) {
      w(pe), m();
    },
    get buttonColorHover() {
      return _();
    },
    set buttonColorHover(pe) {
      _(pe), m();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(pe) {
      S(pe), m();
    },
    get ariaLabel() {
      return M();
    },
    set ariaLabel(pe) {
      M(pe), m();
    },
    get style() {
      return P();
    },
    set style(pe) {
      P(pe), m();
    },
    get orientation() {
      return V();
    },
    set orientation(pe) {
      V(pe), m();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(pe) {
      z(pe), m();
    },
    get class() {
      return H();
    },
    set class(pe) {
      H(pe), m();
    }
  });
  return r(), Ce;
}
ue(
  Od,
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
var zm = /* @__PURE__ */ ke("<circle></circle>");
function Td(e, t) {
  fe(t, !1);
  let n = y(t, "radius", 12, 5), r = y(t, "class", 12, "");
  Be();
  var o = zm();
  return Te(
    (i) => {
      be(o, "cx", n()), be(o, "cy", n()), be(o, "r", n()), At(o, 0, i);
    },
    [
      () => Ln(Rt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    we
  ), L(e, o), ve({
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
ue(Td, { radius: {}, class: {} }, [], [], !0);
var Hm = /* @__PURE__ */ ke("<path></path>");
function Vd(e, t) {
  fe(t, !1);
  let n = y(t, "lineWidth", 12, 1), r = y(t, "dimensions", 12), o = y(t, "variant", 12, void 0), i = y(t, "class", 12, "");
  Be();
  var a = Hm();
  return Te(
    (s) => {
      be(a, "stroke-width", n()), be(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), At(a, 0, s);
    },
    [
      () => Ln(Rt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    we
  ), L(e, a), ve({
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
ue(
  Vd,
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
const Lm = {
  [dr.Dots]: 1,
  [dr.Lines]: 1,
  [dr.Cross]: 6
};
var Am = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Im = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Nd(e, t) {
  fe(t, !1), st(e, Im);
  const [n, r] = ft(), o = () => ne(_, "$flowId", n), i = () => ne(w, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "id", 12, void 0), f = y(t, "variant", 28, () => dr.Dots), v = y(t, "gap", 12, 20), p = y(t, "size", 12, 1), b = y(t, "lineWidth", 12, 1), x = y(t, "bgColor", 12, void 0), C = y(t, "patternColor", 12, void 0), h = y(t, "patternClass", 12, void 0), $ = y(t, "class", 12, "");
  const { viewport: w, flowId: _ } = rt(), S = p() || Lm[f()], M = f() === dr.Dots, P = f() === dr.Cross, V = Array.isArray(v()) ? v() : [v(), v()];
  he(
    () => (o(), J(d())),
    () => {
      G(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    G(s, [
      V[0] * i().zoom || 1,
      V[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    G(l, S * i().zoom);
  }), he(() => (g(l), g(s)), () => {
    G(u, P ? [g(l), g(l)] : g(s));
  }), he(
    () => (g(l), g(u)),
    () => {
      G(c, M ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), kt(), Be();
  var z = Am();
  let H;
  var I = j(z), R = j(I);
  {
    var E = (N) => {
      const A = /* @__PURE__ */ we(() => g(l) / 2);
      Td(N, {
        get radius() {
          return g(A);
        },
        get class() {
          return h();
        }
      });
    }, T = (N) => {
      Vd(N, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return h();
        }
      });
    };
    Ee(R, (N) => {
      M ? N(E) : N(T, !1);
    });
  }
  Y(I);
  var k = Z(I);
  Y(z), Te(
    (N) => {
      At(z, 0, N, "svelte-1r7pe8d"), H = Ct(z, "", H, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": C()
      }), be(I, "id", g(a)), be(I, "x", i().x % g(s)[0]), be(I, "y", i().y % g(s)[1]), be(I, "width", g(s)[0]), be(I, "height", g(s)[1]), be(I, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), be(k, "fill", `url(#${g(a)})`);
    },
    [
      () => Ln(Rt(["svelte-flow__background", $()]))
    ],
    we
  ), L(e, z);
  var O = ve({
    get id() {
      return d();
    },
    set id(N) {
      d(N), m();
    },
    get variant() {
      return f();
    },
    set variant(N) {
      f(N), m();
    },
    get gap() {
      return v();
    },
    set gap(N) {
      v(N), m();
    },
    get size() {
      return p();
    },
    set size(N) {
      p(N), m();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(N) {
      b(N), m();
    },
    get bgColor() {
      return x();
    },
    set bgColor(N) {
      x(N), m();
    },
    get patternColor() {
      return C();
    },
    set patternColor(N) {
      C(N), m();
    },
    get patternClass() {
      return h();
    },
    set patternClass(N) {
      h(N), m();
    },
    get class() {
      return $();
    },
    set class(N) {
      $(N), m();
    }
  });
  return r(), O;
}
ue(
  Nd,
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
var Rm = /* @__PURE__ */ ke("<rect></rect>");
function Dd(e, t) {
  fe(t, !1);
  let n = y(t, "x", 12), r = y(t, "y", 12), o = y(t, "width", 12, 0), i = y(t, "height", 12, 0), a = y(t, "borderRadius", 12, 5), s = y(t, "color", 12, void 0), l = y(t, "shapeRendering", 12), u = y(t, "strokeColor", 12, void 0), c = y(t, "strokeWidth", 12, 2), d = y(t, "selected", 12, !1), f = y(t, "class", 12, "");
  Be();
  var v = Rm();
  let p;
  return Te(
    (b, x) => {
      p = At(v, 0, b, null, p, x), be(v, "x", n()), be(v, "y", r()), be(v, "rx", a()), be(v, "ry", a()), be(v, "width", o()), be(v, "height", i()), Ct(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), be(v, "shape-rendering", l());
    },
    [
      () => Ln(Rt(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    we
  ), L(e, v), ve({
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
      return f();
    },
    set class(b) {
      f(b), m();
    }
  });
}
ue(
  Dd,
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
function ou(e, t) {
  const n = _0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = q(t.viewport);
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
const La = (e) => e instanceof Function ? e : () => e;
var Bm = /* @__PURE__ */ ke("<title> </title>"), Zm = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function zd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne(Ie, "$flowId", n), i = () => ne(ye, "$viewport", n), a = () => ne(Ge, "$containerWidth", n), s = () => ne(We, "$containerHeight", n), l = () => ne(ie, "$nodeLookup", n), u = () => ne(de, "$nodes", n), c = () => ne(ee, "$panZoom", n), d = () => ne(Fe, "$translateExtent", n), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), p = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), h = /* @__PURE__ */ oe(), $ = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), _ = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe(), P = /* @__PURE__ */ oe();
  let V = y(t, "position", 12, "bottom-right"), z = y(t, "ariaLabel", 12, "Mini map"), H = y(t, "nodeStrokeColor", 12, "transparent"), I = y(t, "nodeColor", 12, void 0), R = y(t, "nodeClass", 12, ""), E = y(t, "nodeBorderRadius", 12, 5), T = y(t, "nodeStrokeWidth", 12, 2), k = y(t, "bgColor", 12, void 0), O = y(t, "maskColor", 12, void 0), N = y(t, "maskStrokeColor", 12, void 0), A = y(t, "maskStrokeWidth", 12, void 0), X = y(t, "width", 12, void 0), K = y(t, "height", 12, void 0), F = y(t, "pannable", 12, !0), re = y(t, "zoomable", 12, !0), Q = y(t, "inversePan", 12, void 0), W = y(t, "zoomStep", 12, void 0), se = y(t, "style", 12, ""), xe = y(t, "class", 12, "");
  const Ce = 200, pe = 150, {
    nodes: de,
    nodeLookup: ie,
    viewport: ye,
    width: Ge,
    height: We,
    flowId: Ie,
    panZoom: ee,
    translateExtent: Fe
  } = rt(), Je = I() === void 0 ? void 0 : La(I()), le = La(H()), ce = La(R()), Se = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ke = `svelte-flow__minimap-desc-${o()}`;
  let ze = /* @__PURE__ */ oe(g(f));
  const vt = () => g(C);
  he(
    () => (i(), a(), s()),
    () => {
      G(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), he(
    () => (l(), g(f), u()),
    () => {
      G(ze, l().size > 0 ? Dc(Uo(l()), g(f)) : g(f)), u();
    }
  ), he(() => J(X()), () => {
    G(v, X() ?? Ce);
  }), he(() => J(K()), () => {
    G(p, K() ?? pe);
  }), he(
    () => (g(ze), g(v)),
    () => {
      G(b, g(ze).width / g(v));
    }
  ), he(
    () => (g(ze), g(p)),
    () => {
      G(x, g(ze).height / g(p));
    }
  ), he(
    () => (g(b), g(x)),
    () => {
      G(C, Math.max(g(b), g(x)));
    }
  ), he(() => (g(C), g(v)), () => {
    G(h, g(C) * g(v));
  }), he(
    () => (g(C), g(p)),
    () => {
      G($, g(C) * g(p));
    }
  ), he(() => g(C), () => {
    G(w, 5 * g(C));
  }), he(
    () => (g(ze), g(h), g(w)),
    () => {
      G(_, g(ze).x - (g(h) - g(ze).width) / 2 - g(w));
    }
  ), he(
    () => (g(ze), g($), g(w)),
    () => {
      G(S, g(ze).y - (g($) - g(ze).height) / 2 - g(w));
    }
  ), he(() => (g(h), g(w)), () => {
    G(M, g(h) + g(w) * 2);
  }), he(() => (g($), g(w)), () => {
    G(P, g($) + g(w) * 2);
  }), kt(), Be();
  const lt = /* @__PURE__ */ we(() => se() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), te = /* @__PURE__ */ we(() => Rt(["svelte-flow__minimap", xe()]));
  ei(e, {
    get position() {
      return V();
    },
    get style() {
      return g(lt);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (me, Bt) => {
      var Zt = dt(), ln = _e(Zt);
      {
        var Ve = (ut) => {
          var Re = Zm();
          be(Re, "aria-labelledby", Ke);
          let Ae;
          var ct = j(Re);
          {
            var Jt = (mt) => {
              var xt = Bm();
              be(xt, "id", Ke);
              var kn = j(xt, !0);
              Y(xt), Te(() => rn(kn, z())), L(mt, xt);
            };
            Ee(ct, (mt) => {
              z() && mt(Jt);
            });
          }
          var Et = Z(ct);
          Gt(Et, 1, u, (mt) => mt.id, (mt, xt) => {
            var kn = dt();
            const ot = /* @__PURE__ */ we(() => l().get(g(xt).id));
            var vo = _e(kn);
            {
              var er = (Vt) => {
                const mr = /* @__PURE__ */ we(() => pr(g(ot))), yr = /* @__PURE__ */ we(() => Je == null ? void 0 : Je(g(ot))), Hr = /* @__PURE__ */ we(() => le(g(ot))), go = /* @__PURE__ */ we(() => ce(g(ot)));
                Dd(Vt, bt(
                  {
                    get x() {
                      return g(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => g(mr),
                  {
                    get selected() {
                      return g(ot).selected;
                    },
                    get color() {
                      return g(yr);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return g(Hr);
                    },
                    get strokeWidth() {
                      return T();
                    },
                    shapeRendering: Se,
                    get class() {
                      return g(go);
                    }
                  }
                ));
              };
              Ee(vo, (Vt) => {
                g(ot) && Hc(g(ot)) && Vt(er);
              });
            }
            L(mt, kn);
          });
          var Qn = Z(Et);
          Y(Re), Pt(Re, (mt, xt) => ou == null ? void 0 : ou(mt, xt), () => ({
            panZoom: c(),
            viewport: ye,
            getViewScale: vt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: F(),
            zoomable: re()
          })), Te(() => {
            be(Re, "width", g(v)), be(Re, "height", g(p)), be(Re, "viewBox", `${g(_) ?? ""} ${g(S) ?? ""} ${g(M) ?? ""} ${g(P) ?? ""}`), Ae = Ct(Re, "", Ae, {
              "--xy-minimap-mask-background-color-props": O(),
              "--xy-minimap-mask-stroke-color-props": N(),
              "--xy-minimap-mask-stroke-width-props": A() ? A() * g(C) : void 0
            }), be(Qn, "d", `M${g(_) - g(w)},${g(S) - g(w)}h${g(M) + g(w) * 2}v${g(P) + g(w) * 2}h${-g(M) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), L(ut, Re);
        };
        Ee(ln, (ut) => {
          c() && ut(Ve);
        });
      }
      L(me, Zt);
    },
    $$slots: { default: !0 }
  });
  var Le = ve({
    get position() {
      return V();
    },
    set position(me) {
      V(me), m();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(me) {
      z(me), m();
    },
    get nodeStrokeColor() {
      return H();
    },
    set nodeStrokeColor(me) {
      H(me), m();
    },
    get nodeColor() {
      return I();
    },
    set nodeColor(me) {
      I(me), m();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(me) {
      R(me), m();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(me) {
      E(me), m();
    },
    get nodeStrokeWidth() {
      return T();
    },
    set nodeStrokeWidth(me) {
      T(me), m();
    },
    get bgColor() {
      return k();
    },
    set bgColor(me) {
      k(me), m();
    },
    get maskColor() {
      return O();
    },
    set maskColor(me) {
      O(me), m();
    },
    get maskStrokeColor() {
      return N();
    },
    set maskStrokeColor(me) {
      N(me), m();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(me) {
      A(me), m();
    },
    get width() {
      return X();
    },
    set width(me) {
      X(me), m();
    },
    get height() {
      return K();
    },
    set height(me) {
      K(me), m();
    },
    get pannable() {
      return F();
    },
    set pannable(me) {
      F(me), m();
    },
    get zoomable() {
      return re();
    },
    set zoomable(me) {
      re(me), m();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(me) {
      Q(me), m();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(me) {
      W(me), m();
    },
    get style() {
      return se();
    },
    set style(me) {
      se(me), m();
    },
    get class() {
      return xe();
    },
    set class(me) {
      xe(me), m();
    }
  });
  return r(), Le;
}
ue(
  zd,
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
const iu = (e) => Zp(e);
function Ut() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: p, nodeOrigin: b, edgeLookup: x, connectionLookup: C } = rt(), h = (_) => {
    var S, M;
    const P = q(p), V = iu(_) ? _ : P.get(_.id), z = V.parentId ? jp(V.position, V.measured, V.parentId, P, q(b)) : V.position, H = {
      ...V,
      position: z,
      width: ((S = V.measured) == null ? void 0 : S.width) ?? V.width,
      height: ((M = V.measured) == null ? void 0 : M.height) ?? V.height
    };
    return no(H);
  }, $ = (_, S, M = { replace: !1 }) => {
    var P;
    const V = (P = q(p).get(_)) == null ? void 0 : P.internals.userNode;
    if (!V)
      return;
    const z = typeof S == "function" ? S(V) : S;
    M.replace ? d.update((H) => H.map((I) => I.id === _ ? iu(z) ? z : { ...I, ...z } : I)) : (Object.assign(V, z), d.update((H) => H));
  }, w = (_) => q(p).get(_);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (_) => {
      var S;
      return (S = w(_)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: (_) => _ === void 0 ? q(d) : au(q(p), _),
    getEdge: (_) => q(x).get(_),
    getEdges: (_) => _ === void 0 ? q(f) : au(q(x), _),
    setZoom: (_, S) => {
      const M = q(c);
      return M ? M.scaleTo(_, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (_, S) => {
      const M = q(i), P = q(c);
      return P ? (await P.setViewport({
        x: _.x ?? M.x,
        y: _.y ?? M.y,
        zoom: _.zoom ?? M.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (_, S, M) => {
      const P = typeof (M == null ? void 0 : M.zoom) < "u" ? M.zoom : q(u), V = q(c);
      return V ? (await V.setViewport({
        x: q(a) / 2 - _ * P,
        y: q(s) / 2 - S * P,
        zoom: P
      }, { duration: M == null ? void 0 : M.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (_, S) => {
      const M = q(c);
      if (!M)
        return Promise.resolve(!1);
      const P = Rs(_, q(a), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await M.setViewport(P, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (_, S = !0, M) => {
      const P = Bl(_), V = P ? _ : h(_);
      return V ? (M || q(d)).filter((z) => {
        const H = q(p).get(z.id);
        if (!H || !P && z.id === _.id)
          return !1;
        const I = no(H), R = Bo(I, V);
        return S && R > 0 || R >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (_, S, M = !0) => {
      const P = Bl(_) ? _ : h(_);
      if (!P)
        return !1;
      const V = Bo(P, S);
      return M && V > 0 || V >= P.width * P.height;
    },
    deleteElements: async ({ nodes: _ = [], edges: S = [] }) => {
      const { nodes: M, edges: P } = await Tc({
        nodesToRemove: _,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return M && d.update((V) => V.filter((z) => !M.some(({ id: H }) => H === z.id))), P && f.update((V) => V.filter((z) => !P.some(({ id: H }) => H === z.id))), {
        deletedNodes: M,
        deletedEdges: P
      };
    },
    screenToFlowPosition: (_, S = { snapToGrid: !0 }) => {
      const M = q(v);
      if (!M)
        return _;
      const P = S.snapToGrid ? q(o) : !1, { x: V, y: z, zoom: H } = q(i), { x: I, y: R } = M.getBoundingClientRect(), E = {
        x: _.x - I,
        y: _.y - R
      };
      return Jo(E, [V, z, H], P !== null, P || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (_) => {
      const S = q(v);
      if (!S)
        return _;
      const { x: M, y: P, zoom: V } = q(i), { x: z, y: H } = S.getBoundingClientRect(), I = zc(_, [M, P, V]);
      return {
        x: I.x + z,
        y: I.y + H
      };
    },
    toObject: () => ({
      nodes: q(d).map((_) => ({
        ..._,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ..._.position },
        data: { ..._.data }
      })),
      edges: q(f).map((_) => ({ ..._ })),
      viewport: { ...q(i) }
    }),
    updateNode: $,
    updateNodeData: (_, S, M) => {
      var P;
      const V = (P = q(p).get(_)) == null ? void 0 : P.internals.userNode;
      if (!V)
        return;
      const z = typeof S == "function" ? S(V) : S;
      V.data = M != null && M.replace ? z : { ...V.data, ...z }, d.update((H) => H);
    },
    getNodesBounds: (_) => {
      const S = q(p), M = q(b);
      return Xp(_, { nodeLookup: S, nodeOrigin: M });
    },
    getHandleConnections: ({ type: _, id: S, nodeId: M }) => {
      var P;
      return Array.from(((P = q(C).get(`${M}-${_}-${S ?? null}`)) == null ? void 0 : P.values()) ?? []);
    },
    viewport: i
  };
}
function au(e, t) {
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
var Xm = /* @__PURE__ */ ae('<div class="svelte-flow__node-toolbar"><!></div>');
function Hd(e, t) {
  fe(t, !1);
  const [n, r] = ft(), o = () => ne($, "$nodes", n), i = () => ne(h, "$nodeLookup", n), a = () => ne(C, "$viewport", n), s = () => ne(x, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = y(t, "nodeId", 12, void 0), f = y(t, "position", 12, void 0), v = y(t, "align", 12, void 0), p = y(t, "offset", 12, void 0), b = y(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: C, nodeLookup: h, nodes: $ } = rt(), { getNodesBounds: w } = Ut(), _ = _r("svelteflow__node_id");
  let S = /* @__PURE__ */ oe(), M = /* @__PURE__ */ oe([]), P = p() !== void 0 ? p() : 10, V = f() !== void 0 ? f() : Pe.Top, z = v() !== void 0 ? v() : "center";
  he(
    () => (o(), J(d()), i()),
    () => {
      o();
      const T = Array.isArray(d()) ? d() : [d() || _];
      G(M, T.reduce(
        (k, O) => {
          const N = i().get(O);
          return N && k.push(N), k;
        },
        []
      ));
    }
  ), he(
    () => (g(M), a()),
    () => {
      const T = w(g(M));
      T && G(S, s0(T, a(), V, P, z));
    }
  ), he(() => g(M), () => {
    G(l, g(M).length === 0 ? 1 : Math.max(...g(M).map((T) => (T.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    G(u, o().filter((T) => T.selected).length);
  }), he(
    () => (J(b()), g(M), g(u)),
    () => {
      G(c, typeof b() == "boolean" ? b() : g(M).length === 1 && g(M)[0].selected && g(u) === 1);
    }
  ), kt(), Be();
  var H = dt(), I = _e(H);
  {
    var R = (T) => {
      var k = Xm();
      let O;
      var N = j(k);
      Ot(N, t, "default", {}), Y(k), Pt(k, (A, X) => ji == null ? void 0 : ji(A, X), () => ({ domNode: s() })), Te(
        (A) => {
          be(k, "data-id", A), O = Ct(k, "", O, {
            position: "absolute",
            transform: g(S),
            "z-index": g(l)
          });
        },
        [
          () => g(M).reduce((A, X) => `${A}${X.id} `, "").trim()
        ],
        we
      ), L(T, k);
    };
    Ee(I, (T) => {
      s() && g(c) && g(M) && T(R);
    });
  }
  L(e, H);
  var E = ve({
    get nodeId() {
      return d();
    },
    set nodeId(T) {
      d(T), m();
    },
    get position() {
      return f();
    },
    set position(T) {
      f(T), m();
    },
    get align() {
      return v();
    },
    set align(T) {
      v(T), m();
    },
    get offset() {
      return p();
    },
    set offset(T) {
      p(T), m();
    },
    get isVisible() {
      return b();
    },
    set isVisible(T) {
      b(T), m();
    }
  });
  return r(), E;
}
ue(
  Hd,
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
  const { nodes: t, nodeLookup: n } = rt();
  let r = [], o = !0;
  return ur([t, n], ([, i], a) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = i.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!h0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const su = "tinyflow-component";
class Ym {
  constructor(t) {
    if (jt(this, "options"), jt(this, "rootEl"), jt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(su);
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
    const n = document.createElement(su);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Wm = () => {
  const e = $e([]), t = $e([]), n = $e({ x: 250, y: 100, zoom: 1 });
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
}, _i = Wm();
var jm = /* @__PURE__ */ ae("<button><!></button>");
function nt(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = jm();
  let i;
  var a = j(o);
  return kr(a, () => n() ?? $t), Y(o), Te(() => i = bn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), ve({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ue(nt, { children: {} }, [], [], !0);
var Km = /* @__PURE__ */ ae("<input>");
function Ld(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Km();
  So(r);
  let o;
  Te(() => o = bn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ve();
}
ue(Ld, {}, [], [], !0);
var qm = /* @__PURE__ */ ae("<input>");
function zt(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = qm();
  So(r);
  let o;
  Te(() => o = bn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ve();
}
ue(zt, {}, [], [], !0);
var Fm = /* @__PURE__ */ ae("<textarea></textarea>");
function It(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Fm();
  Hv(r);
  let o;
  Te(() => o = bn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), L(e, r), ve();
}
ue(It, {}, [], [], !0);
var Gm = /* @__PURE__ */ ae('<div role="button"><!></div>'), Um = /* @__PURE__ */ ae("<div></div>");
function Ad(e, t) {
  const n = ht(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ht(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), a = y(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Be();
  var l = Um();
  let u;
  return Gt(l, 5, o, Do, (c, d, f) => {
    var v = Gm();
    be(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(g(d), f));
    };
    var p = j(v);
    {
      var b = (C) => {
        var h = qe();
        Te(() => rn(h, g(d).label)), L(C, h);
      }, x = (C) => {
        var h = dt(), $ = _e(h);
        kr($, () => g(d).label ?? $t), L(C, h);
      };
      Ee(p, (C) => {
        typeof g(d).label == "string" ? C(b) : C(x, !1);
      });
    }
    Y(v), Te(() => At(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), L(c, v);
  }), Y(l), Te(() => u = bn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), ve({
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
aa(["click", "keydown"]);
ue(Ad, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Jm = (e, t, n) => t(g(n)), Qm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, e2 = /* @__PURE__ */ ae('<span class="tf-collapse-item-title-icon"><!></span>'), t2 = /* @__PURE__ */ ae('<div class="tf-collapse-item-description"><!></div>'), n2 = /* @__PURE__ */ ae('<div class="tf-collapse-item-content"><!></div>'), r2 = /* @__PURE__ */ ae('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), o2 = /* @__PURE__ */ ae("<div></div>");
const i2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Id(e, t) {
  fe(t, !0), st(e, i2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => dn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = o2();
  return Gt(a, 21, n, Do, (s, l, u) => {
    var c = r2(), d = j(c);
    be(d, "tabindex", u), d.__click = [Jm, i, l], d.__keydown = [Qm, i, l];
    var f = j(d);
    {
      var v = (w) => {
        var _ = e2(), S = j(_);
        sr(S, {
          get target() {
            return g(l).icon;
          }
        }), Y(_), L(w, _);
      };
      Ee(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var p = Z(f, 2);
    sr(p, {
      get target() {
        return g(l).title;
      }
    });
    var b = Z(p, 2);
    Y(d);
    var x = Z(d, 2);
    {
      var C = (w) => {
        var _ = t2(), S = j(_);
        sr(S, {
          get target() {
            return g(l).description;
          }
        }), Y(_), L(w, _);
      };
      Ee(x, (w) => {
        g(l).description && w(C);
      });
    }
    var h = Z(x, 2);
    {
      var $ = (w) => {
        var _ = n2(), S = j(_);
        sr(S, {
          get target() {
            return g(l).content;
          }
        }), Y(_), L(w, _);
      };
      Ee(h, (w) => {
        o().includes(g(l).key) && w($);
      });
    }
    Y(c), Te((w) => At(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), L(s, c);
  }), Y(a), Te(() => {
    Ct(a, t.style), At(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, a), ve({
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
aa(["click", "keydown"]);
ue(Id, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  fe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = dt(), o = _e(r);
  {
    var i = (s) => {
      var l = dt(), u = _e(l);
      kr(u, () => n() ?? $t), L(s, l);
    }, a = (s) => {
      var l = dt(), u = _e(l);
      Ms(u, n), L(s, l);
    };
    Ee(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return L(e, r), ve({
    get target() {
      return n();
    },
    set target(s) {
      n(s), m();
    }
  });
}
ue(sr, { target: {} }, [], [], !0);
var a2 = (e, t, n) => t(g(n)), s2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), l2 = /* @__PURE__ */ ae('<div class="tf-select-content-children"><!></div>'), u2 = /* @__PURE__ */ ae('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), c2 = /* @__PURE__ */ ae('<div class="tf-select-content nopan nodrag"><!></div>'), d2 = /* @__PURE__ */ ae("<!> <!>", 1), f2 = /* @__PURE__ */ ae('<div class="tf-select-input-placeholder"> </div>'), v2 = /* @__PURE__ */ ae('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), g2 = /* @__PURE__ */ ae("<div><!></div>");
function Dn(e, t) {
  fe(t, !0);
  const n = ($, w = $t) => {
    var _ = dt(), S = _e(_);
    Gt(S, 19, w, (M, P) => `${P}_${M.value}`, (M, P) => {
      var V = u2(), z = _e(V);
      z.__click = [a2, b, P];
      var H = j(z), I = j(H);
      {
        var R = (O) => {
          var N = s2();
          L(O, N);
        };
        Ee(I, (O) => {
          g(P).children && g(P).children.length > 0 && O(R);
        });
      }
      Y(H);
      var E = Z(H, 2);
      sr(E, {
        get target() {
          return g(P).label;
        }
      }), Y(z);
      var T = Z(z, 2);
      {
        var k = (O) => {
          var N = l2(), A = j(N);
          n(A, () => g(P).children), Y(N), L(O, N);
        };
        Ee(T, (O) => {
          g(P).children && g(P).children.length > 0 && (l() || c().includes(g(P).value)) && O(k);
        });
      }
      L(M, V);
    }), L($, _);
  };
  let r = y(t, "items", 7), o = y(t, "onExpand", 7), i = y(t, "onSelect", 7), a = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), l = y(t, "expandAll", 7, !0), u = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), f = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onExpand",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), v = He(() => {
    const $ = [], w = (_) => {
      for (let S of _)
        a().length > 0 ? a().includes(S.value) && $.push(S) : s().includes(S.value) && $.push(S), S.children && S.children.length > 0 && w(S.children);
    };
    return w(r()), $;
  }), p;
  function b($) {
    var w, _;
    if ($.children && $.children.length > 0) {
      (w = o()) == null || w($);
      return;
    } else
      p == null || p.hide(), (_ = i()) == null || _($);
  }
  var x = g2();
  let C;
  var h = j(x);
  return Nn(
    oi(h, {
      floating: ($) => {
        var w = c2(), _ = j(w);
        n(_, r), Y(w), L($, w);
      },
      children: ($, w) => {
        var _ = v2();
        let S;
        var M = j(_);
        Gt(
          M,
          23,
          () => g(v),
          (P, V) => `${V}_${P.value}`,
          (P, V, z) => {
            var H = dt(), I = _e(H);
            {
              var R = (T) => {
                var k = dt(), O = _e(k);
                {
                  var N = (A) => {
                    sr(A, {
                      get target() {
                        return g(V).label;
                      }
                    });
                  };
                  Ee(O, (A) => {
                    g(z) === 0 && A(N);
                  });
                }
                L(T, k);
              }, E = (T) => {
                var k = d2(), O = _e(k);
                sr(O, {
                  get target() {
                    return g(V).label;
                  }
                });
                var N = Z(O, 2);
                {
                  var A = (X) => {
                    var K = qe(",");
                    L(X, K);
                  };
                  Ee(N, (X) => {
                    g(z) < g(v).length - 1 && X(A);
                  });
                }
                L(T, k);
              };
              Ee(I, (T) => {
                u() ? T(E, !1) : T(R);
              });
            }
            L(P, H);
          },
          (P) => {
            var V = f2(), z = j(V, !0);
            Y(V), Te(() => rn(z, d())), L(P, V);
          }
        ), Y(M), Ne(2), Y(_), Te(() => S = bn(_, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), L($, _);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => p = $,
    () => p
  ), Y(x), Te(() => C = bn(x, C, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), L(e, x), ve({
    get items() {
      return r();
    },
    set items($) {
      r($), m();
    },
    get onExpand() {
      return o();
    },
    set onExpand($) {
      o($), m();
    },
    get onSelect() {
      return i();
    },
    set onSelect($) {
      i($), m();
    },
    get value() {
      return a();
    },
    set value($ = []) {
      a($), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue($ = []) {
      s($), m();
    },
    get expandAll() {
      return l();
    },
    set expandAll($ = !0) {
      l($), m();
    },
    get multiple() {
      return u();
    },
    set multiple($ = !1) {
      u($), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue($ = []) {
      c($), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder($) {
      d($), m();
    }
  });
}
aa(["click"]);
ue(
  Dn,
  {
    items: {},
    onExpand: {},
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
const Xo = Math.min, jr = Math.max, Fi = Math.round, Mn = (e) => ({
  x: e,
  y: e
}), h2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, p2 = {
  start: "end",
  end: "start"
};
function ss(e, t, n) {
  return jr(e, Xo(t, n));
}
function ti(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pr(e) {
  return e.split("-")[0];
}
function ni(e) {
  return e.split("-")[1];
}
function Rd(e) {
  return e === "x" ? "y" : "x";
}
function js(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(Pr(e)) ? "y" : "x";
}
function Ks(e) {
  return Rd(oo(e));
}
function m2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ni(e), o = Ks(e), i = js(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Gi(a)), [a, Gi(a)];
}
function y2(e) {
  const t = Gi(e);
  return [ls(e), t, ls(t)];
}
function ls(e) {
  return e.replace(/start|end/g, (t) => p2[t]);
}
function w2(e, t, n) {
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
function b2(e, t, n, r) {
  const o = ni(e);
  let i = w2(Pr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(ls)))), i;
}
function Gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => h2[t]);
}
function x2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bd(e) {
  return typeof e != "number" ? x2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ui(e) {
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
function lu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = oo(t), a = Ks(t), s = js(a), l = Pr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (ni(t)) {
    case "start":
      v[a] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[a] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const $2 = async (e, t, n) => {
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
  } = lu(u, r, l), f = r, v = {}, p = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: C
    } = s[b], {
      x: h,
      y: $,
      data: w,
      reset: _
    } = await C({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = $ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, _ && p <= 50 && (p++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: c,
      y: d
    } = lu(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Zd(e, t) {
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
    altBoundary: f = !1,
    padding: v = 0
  } = ti(t, e), p = Bd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Ui(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), C = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, h = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(h)) ? await (i.getScale == null ? void 0 : i.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ui(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: h,
    strategy: l
  }) : C);
  return {
    top: (x.top - w.top + p.top) / $.y,
    bottom: (w.bottom - x.bottom + p.bottom) / $.y,
    left: (x.left - w.left + p.left) / $.x,
    right: (w.right - x.right + p.right) / $.x
  };
}
const C2 = (e) => ({
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
    } = ti(e, t) || {};
    if (u == null)
      return {};
    const d = Bd(c), f = {
      x: n,
      y: r
    }, v = Ks(o), p = js(v), b = await a.getDimensions(u), x = v === "y", C = x ? "top" : "left", h = x ? "bottom" : "right", $ = x ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[v] - f[v] - i.floating[p], _ = f[v] - i.reference[v], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let M = S ? S[$] : 0;
    (!M || !await (a.isElement == null ? void 0 : a.isElement(S))) && (M = s.floating[$] || i.floating[p]);
    const P = w / 2 - _ / 2, V = M / 2 - b[p] / 2 - 1, z = Xo(d[C], V), H = Xo(d[h], V), I = z, R = M - b[p] - H, E = M / 2 - b[p] / 2 + P, T = ss(I, E, R), k = !l.arrow && ni(o) != null && E !== T && i.reference[p] / 2 - (E < I ? z : H) - b[p] / 2 < 0, O = k ? E < I ? E - I : E - R : 0;
    return {
      [v]: f[v] + O,
      data: {
        [v]: T,
        centerOffset: E - T - O,
        ...k && {
          alignmentOffset: O
        }
      },
      reset: k
    };
  }
}), _2 = function(e) {
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
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: b = !0,
        ...x
      } = ti(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = Pr(o), h = oo(s), $ = Pr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || ($ || !b ? [Gi(s)] : y2(s)), S = p !== "none";
      !f && S && _.push(...b2(s, b, p, w));
      const M = [s, ..._], P = await Zd(t, x), V = [];
      let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(P[C]), d) {
        const E = m2(o, a, w);
        V.push(P[E[0]], P[E[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: V
      }], !V.every((E) => E <= 0)) {
        var H, I;
        const E = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1, T = M[E];
        if (T)
          return {
            data: {
              index: E,
              overflows: z
            },
            reset: {
              placement: T
            }
          };
        let k = (I = z.filter((O) => O.overflows[0] <= 0).sort((O, N) => O.overflows[1] - N.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!k)
          switch (v) {
            case "bestFit": {
              var R;
              const O = (R = z.filter((N) => {
                if (S) {
                  const A = oo(N.placement);
                  return A === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((A) => A > 0).reduce((A, X) => A + X, 0)]).sort((N, A) => N[1] - A[1])[0]) == null ? void 0 : R[0];
              O && (k = O);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (o !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
async function k2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Pr(n), s = ni(n), l = oo(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ti(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof p == "number" && (v = s === "end" ? p * -1 : p), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const S2 = function(e) {
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
      } = t, l = await k2(t, e);
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
}, E2 = function(e) {
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
              y: h
            } = x;
            return {
              x: C,
              y: h
            };
          }
        },
        ...l
      } = ti(e, t), u = {
        x: n,
        y: r
      }, c = await Zd(t, l), d = oo(Pr(o)), f = Rd(d);
      let v = u[f], p = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", C = f === "y" ? "bottom" : "right", h = v + c[x], $ = v - c[C];
        v = ss(h, v, $);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", h = p + c[x], $ = p - c[C];
        p = ss(h, p, $);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: p
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [f]: i,
            [d]: a
          }
        }
      };
    }
  };
};
function ma() {
  return typeof window < "u";
}
function fo(e) {
  return Xd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function on(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (Xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xd(e) {
  return ma() ? e instanceof Node || e instanceof on(e).Node : !1;
}
function xn(e) {
  return ma() ? e instanceof Element || e instanceof on(e).Element : !1;
}
function zn(e) {
  return ma() ? e instanceof HTMLElement || e instanceof on(e).HTMLElement : !1;
}
function uu(e) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof on(e).ShadowRoot;
}
function ri(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $n(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function M2(e) {
  return ["table", "td", "th"].includes(fo(e));
}
function ya(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function qs(e) {
  const t = Fs(), n = xn(e) ? $n(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function P2(e) {
  let t = hr(e);
  for (; zn(t) && !io(t); ) {
    if (qs(t))
      return t;
    if (ya(t))
      return null;
    t = hr(t);
  }
  return null;
}
function Fs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function io(e) {
  return ["html", "body", "#document"].includes(fo(e));
}
function $n(e) {
  return on(e).getComputedStyle(e);
}
function wa(e) {
  return xn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hr(e) {
  if (fo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    uu(e) && e.host || // Fallback.
    Un(e)
  );
  return uu(t) ? t.host : t;
}
function Yd(e) {
  const t = hr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zn(t) && ri(t) ? t : Yd(t);
}
function Wd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Yd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = on(o);
  return i ? (us(a), t.concat(a, a.visualViewport || [], ri(o) ? o : [], [])) : t.concat(o, Wd(o, []));
}
function us(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jd(e) {
  const t = $n(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Fi(n) !== i || Fi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Kd(e) {
  return xn(e) ? e : e.contextElement;
}
function Kr(e) {
  const t = Kd(e);
  if (!zn(t))
    return Mn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = jd(t);
  let a = (i ? Fi(n.width) : n.width) / r, s = (i ? Fi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const O2 = /* @__PURE__ */ Mn(0);
function qd(e) {
  const t = on(e);
  return !Fs() || !t.visualViewport ? O2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function T2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== on(e) ? !1 : t;
}
function Yo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Kd(e);
  let a = Mn(1);
  t && (r ? xn(r) && (a = Kr(r)) : a = Kr(e));
  const s = T2(i, n, r) ? qd(i) : Mn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = on(i), v = r && xn(r) ? on(r) : r;
    let p = f, b = us(p);
    for (; b && r && v !== p; ) {
      const x = Kr(b), C = b.getBoundingClientRect(), h = $n(b), $ = C.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, w = C.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += $, u += w, p = on(b), b = us(p);
    }
  }
  return Ui({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Gs(e, t) {
  const n = wa(e).scrollLeft;
  return t ? t.left + n : Yo(Un(e)).left + n;
}
function Fd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Gs(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function V2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Un(r), s = t ? ya(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Mn(1);
  const c = Mn(0), d = zn(r);
  if ((d || !d && !i) && ((fo(r) !== "body" || ri(a)) && (l = wa(r)), zn(r))) {
    const v = Yo(r);
    u = Kr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Fd(a, l, !0) : Mn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function N2(e) {
  return Array.from(e.getClientRects());
}
function D2(e) {
  const t = Un(e), n = wa(e), r = e.ownerDocument.body, o = jr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = jr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Gs(e);
  const s = -n.scrollTop;
  return $n(r).direction === "rtl" && (a += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function z2(e, t) {
  const n = on(e), r = Un(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const u = Fs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function H2(e, t) {
  const n = Yo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = zn(e) ? Kr(e) : Mn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function cu(e, t, n) {
  let r;
  if (t === "viewport")
    r = z2(e, n);
  else if (t === "document")
    r = D2(Un(e));
  else if (xn(t))
    r = H2(t, n);
  else {
    const o = qd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ui(r);
}
function Gd(e, t) {
  const n = hr(e);
  return n === t || !xn(n) || io(n) ? !1 : $n(n).position === "fixed" || Gd(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wd(e, []).filter((s) => xn(s) && fo(s) !== "body"), o = null;
  const i = $n(e).position === "fixed";
  let a = i ? hr(e) : e;
  for (; xn(a) && !io(a); ) {
    const s = $n(a), l = qs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ri(a) && !l && Gd(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = hr(a);
  }
  return t.set(e, r), r;
}
function A2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ya(t) ? [] : L2(t, this._c) : [].concat(n), r], a = i[0], s = i.reduce((l, u) => {
    const c = cu(t, u, o);
    return l.top = jr(c.top, l.top), l.right = Xo(c.right, l.right), l.bottom = Xo(c.bottom, l.bottom), l.left = jr(c.left, l.left), l;
  }, cu(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function I2(e) {
  const {
    width: t,
    height: n
  } = jd(e);
  return {
    width: t,
    height: n
  };
}
function R2(e, t, n) {
  const r = zn(t), o = Un(t), i = n === "fixed", a = Yo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Mn(0);
  if (r || !r && !i)
    if ((fo(t) !== "body" || ri(o)) && (s = wa(t)), r) {
      const f = Yo(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Gs(o));
  const u = o && !r && !i ? Fd(o, s) : Mn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Aa(e) {
  return $n(e).position === "static";
}
function du(e, t) {
  if (!zn(e) || $n(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function Ud(e, t) {
  const n = on(e);
  if (ya(e))
    return n;
  if (!zn(e)) {
    let o = hr(e);
    for (; o && !io(o); ) {
      if (xn(o) && !Aa(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = du(e, t);
  for (; r && M2(r) && Aa(r); )
    r = du(r, t);
  return r && io(r) && Aa(r) && !qs(r) ? n : r || P2(e) || n;
}
const B2 = async function(e) {
  const t = this.getOffsetParent || Ud, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: R2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Z2(e) {
  return $n(e).direction === "rtl";
}
const X2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: V2,
  getDocumentElement: Un,
  getClippingRect: A2,
  getOffsetParent: Ud,
  getElementRects: B2,
  getClientRects: N2,
  getDimensions: I2,
  getScale: Kr,
  isElement: xn,
  isRTL: Z2
}, Y2 = S2, W2 = E2, j2 = _2, K2 = C2, q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: X2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return $2(e, t, {
    ...o,
    platform: i
  });
}, F2 = ({
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
    q2(e, u, {
      placement: r,
      middleware: [
        Y2(o),
        // 手动偏移配置
        j2(i),
        //自动翻转
        W2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [K2({ element: c })] : []
      ]
    }).then(({ x: C, y: h, placement: $, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${C}px`,
        top: `${h}px`
      }), l) {
        const { x: _, y: S } = w.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [M]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function p() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(C) {
    C.stopPropagation(), f ? p() : v();
  }
  function x(C) {
    u.contains(C.target) || p();
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
      p();
    },
    isVisible() {
      return f;
    }
  };
};
var G2 = /* @__PURE__ */ ae('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function oi(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, a, s;
  sn(() => (s = F2({
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
  var u = G2(), c = j(u), d = j(c);
  kr(d, n), Y(c), Nn(c, (p) => i = p, () => i);
  var f = Z(c, 2), v = j(f);
  return kr(v, r), Y(f), Nn(f, (p) => a = p, () => a), Y(u), L(e, u), ve({
    hide: l,
    get children() {
      return n();
    },
    set children(p) {
      n(p), m();
    },
    get floating() {
      return r();
    },
    set floating(p) {
      r(p), m();
    },
    get placement() {
      return o();
    },
    set placement(p = "bottom") {
      o(p), m();
    }
  });
}
ue(oi, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function at(e, t) {
  fe(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var a = dt(), s = _e(a);
  return Wv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Te(() => c = bn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = dt(), f = _e(d);
    kr(f, () => n() ?? $t), L(u, d);
  }), L(e, a), ve({
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
ue(at, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var U2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const J2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ba(e, t) {
  fe(t, !0), st(e, J2);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  nt(e, bt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = U2();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), ve();
}
ue(ba, {}, [], [], !0);
const Q2 = () => {
  const e = rt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, ao = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, ey = () => {
  const { nodes: e, nodeLookup: t } = rt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const i = ao(), a = {
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
};
var ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ry = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), oy = /* @__PURE__ */ ae('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), iy = /* @__PURE__ */ ae('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ay = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function _n(e, t) {
  fe(t, !0), st(e, ay);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), a = y(t, "children", 7), s = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), c = y(t, "showSourceHandle", 7, !0), d = y(t, "showTargetHandle", 7, !0), f = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: p } = Ut(), b = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: x } = Q2(), { copyNode: C } = ey();
  var h = iy(), $ = _e(h);
  {
    var w = (R) => {
      Hd(R, {
        get position() {
          return Pe.Top;
        },
        align: "end",
        children: (E, T) => {
          var k = oy(), O = j(k);
          {
            var N = (re) => {
              nt(re, {
                class: "tf-node-toolbar-item",
                children: (Q, W) => {
                  var se = ty();
                  L(Q, se);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(O, (re) => {
              s() && re(N);
            });
          }
          var A = Z(O, 2);
          {
            var X = (re) => {
              nt(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (Q, W) => {
                  var se = ny();
                  L(Q, se);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(A, (re) => {
              l() && re(X);
            });
          }
          var K = Z(A, 2);
          {
            var F = (re) => {
              nt(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (Q, W) => {
                  var se = ry();
                  L(Q, se);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(K, (re) => {
              u() && re(F);
            });
          }
          Y(k), L(E, k);
        },
        $$slots: { default: !0 }
      });
    };
    Ee($, (R) => {
      (s() || l() || u()) && R(w);
    });
  }
  var _ = Z($, 2), S = Z(j(_), 2), M = j(S);
  Id(M, {
    items: b,
    activeKeys: v,
    onChange: (R, E) => {
      var T;
      p(r(), { expand: E == null ? void 0 : E.includes("key") }), (T = f()) == null || T(E != null && E.includes("key") ? "key" : "");
    }
  }), Y(S), Y(_);
  var P = Z(_, 2);
  {
    var V = (R) => {
      gr(R, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ee(P, (R) => {
      d() && R(V);
    });
  }
  var z = Z(P, 2);
  {
    var H = (R) => {
      gr(R, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ee(z, (R) => {
      c() && R(H);
    });
  }
  var I = Z(z, 2);
  return kr(I, () => i() ?? $t), L(e, h), ve({
    get data() {
      return n();
    },
    set data(R) {
      n(R), m();
    },
    get id() {
      return r();
    },
    set id(R = "") {
      r(R), m();
    },
    get icon() {
      return o();
    },
    set icon(R) {
      o(R), m();
    },
    get handle() {
      return i();
    },
    set handle(R) {
      i(R), m();
    },
    get children() {
      return a();
    },
    set children(R) {
      a(R), m();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(R = !0) {
      s(R), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(R = !0) {
      l(R), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(R = !0) {
      u(R), m();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(R = !0) {
      c(R), m();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(R = !0) {
      d(R), m();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(R) {
      f(R), m();
    }
  });
}
ue(
  _n,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {},
    showSourceHandle: {},
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
function St() {
  return _r("svelteflow__node_id");
}
const Jd = [
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
], sy = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var ly = /* @__PURE__ */ ae('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), uy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), cy = /* @__PURE__ */ ae('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Qd(e, t) {
  fe(t, !0), st(e, dy);
  const [n, r] = ft(), o = () => ne(g(l), "$node", n), i = y(t, "parameter", 7), a = y(t, "index", 7);
  let s = St(), l = He(() => Dr(s)), u = He(() => {
    var P, V;
    return {
      ...i(),
      ...(V = (P = o()) == null ? void 0 : P.data) == null ? void 0 : V.parameters[a()]
    };
  });
  const { updateNodeData: c } = Ut(), d = (P) => {
    const V = P.target.value;
    c(s, (z) => {
      let H = z.data.parameters;
      return H[a()].name = V, { parameters: H };
    });
  }, f = (P) => {
    const V = P.target.checked;
    c(s, (z) => {
      let H = z.data.parameters;
      return H[a()].required = V, { parameters: H };
    });
  }, v = (P) => {
    const V = P.value;
    V && c(s, (z) => {
      let H = z.data.parameters;
      return H[a()].dataType = V, { parameters: H };
    });
  };
  let p;
  const b = () => {
    c(s, (P) => {
      let V = P.data.parameters;
      return V.splice(a(), 1), { parameters: [...V] };
    }), p == null || p.hide();
  };
  var x = cy(), C = _e(x), h = j(C);
  zt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Y(C);
  var $ = Z(C, 2), w = j($);
  Ld(w, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), Y($);
  var _ = Z($, 2), S = j(_);
  Nn(
    oi(S, {
      placement: "bottom",
      floating: (P) => {
        var V = ly(), z = j(V), H = Z(j(z));
        const I = He(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        Dn(H, {
          items: Jd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(I);
          }
        }), Y(z);
        var R = Z(z, 2), E = Z(j(R));
        It(E, { rows: 1, style: "width: 100%;" }), Y(R);
        var T = Z(R, 2), k = Z(j(T));
        It(k, { rows: 3, style: "width: 100%;" }), Y(T);
        var O = Z(T, 2), N = j(O);
        nt(N, {
          onclick: b,
          children: (A, X) => {
            Ne();
            var K = qe("删除");
            L(A, K);
          },
          $$slots: { default: !0 }
        }), Y(O), Y(V), L(P, V);
      },
      children: (P, V) => {
        nt(P, {
          class: "input-btn-more",
          children: (z, H) => {
            var I = uy();
            L(z, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => p = P,
    () => p
  ), Y(_), L(e, x);
  var M = ve({
    get parameter() {
      return i();
    },
    set parameter(P) {
      i(P), m();
    },
    get index() {
      return a();
    },
    set index(P) {
      a(P), m();
    }
  });
  return r(), M;
}
ue(Qd, { parameter: {}, index: {} }, [], [], !0);
var fy = /* @__PURE__ */ ae('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), vy = /* @__PURE__ */ ae('<div class="none-params svelte-3n0wca">无输入参数</div>'), gy = /* @__PURE__ */ ae('<div class="input-container svelte-3n0wca"><!> <!></div>');
const hy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function ef(e, t) {
  fe(t, !0), st(e, hy);
  const [n, r] = ft(), o = () => ne(g(a), "$node", n);
  let i = St(), a = He(() => Dr(i)), s = He(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = gy(), u = j(l);
  {
    var c = (f) => {
      var v = fy();
      Ne(4), L(f, v);
    };
    Ee(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  Gt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, p) => {
      Qd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(p);
        }
      });
    },
    (f) => {
      var v = vy();
      L(f, v);
    }
  ), Y(l), L(e, l), ve(), r();
}
ue(ef, {}, [], [], !0);
const tf = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ao()), tf(t.children);
  });
}, In = () => {
  const { updateNodeData: e } = Ut();
  return {
    addParameter: (t, n = "parameters", r) => {
      tf(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: ao()
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
var py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), my = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ ae('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function nf(e, t) {
  fe(t, !0), st(e, wy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In();
  return _n(e, bt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (a) => {
      var s = py();
      L(a, s);
    },
    children: (a, s) => {
      var l = yy(), u = _e(l), c = j(u);
      at(c, {
        level: 3,
        children: (v, p) => {
          Ne();
          var b = qe("输入参数");
          L(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      nt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, p) => {
          var b = my();
          L(v, b);
        },
        $$slots: { default: !0 }
      }), Y(u);
      var f = Z(u, 2);
      ef(f, {}), L(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ve({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(nf, { data: {} }, [], [], !0);
const rf = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), rf(e, r.source, n));
}, fu = (e, t) => {
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
}, by = (e = !1) => {
  const t = St(), n = Dr(t), { nodes: r, edges: o } = rt();
  return ur([n, r, o], ([i, a, s]) => {
    const l = [];
    if (e) {
      for (let u of a)
        if (u.parentId === i.id) {
          const c = fu(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      rf(u, t, s);
      for (let c of a)
        if (u.includes(c.id)) {
          const d = fu(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var xy = /* @__PURE__ */ ae('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), $y = /* @__PURE__ */ ae('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Cy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function of(e, t) {
  fe(t, !0), st(e, Cy);
  const [n, r] = ft(), o = () => ne(g(c), "$node", n), i = () => ne(w, "$selectItems", n);
  sn(() => {
    g(d).refType || C({ value: "ref" });
  });
  const a = y(t, "parameter", 7), s = y(t, "index", 7), l = y(t, "dataKeyName", 7);
  let u = St(), c = He(() => Dr(u)), d = He(() => {
    var T;
    return {
      ...a(),
      ...(T = o()) == null ? void 0 : T.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Ut(), v = (T, k) => {
    f(u, (O) => {
      let N = O.data[l()];
      return N[s()] = { ...N[s()], [T]: k }, { [l()]: N };
    });
  }, p = (T) => {
    const k = T.target.value;
    v("name", k);
  }, b = (T) => {
    const k = T.target.value;
    v("value", k);
  }, x = (T) => {
    const k = T.value;
    v("ref", k);
  }, C = (T) => {
    const k = T.value;
    v("refType", k);
  };
  let h;
  const $ = () => {
    f(u, (T) => {
      let k = T.data[l()];
      return k.splice(s(), 1), { [l()]: [...k] };
    }), h == null || h.hide();
  }, w = by();
  var _ = $y(), S = _e(_), M = j(S);
  zt(M, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: p
  }), Y(S);
  var P = Z(S, 2), V = j(P);
  {
    var z = (T) => {
      zt(T, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, H = (T) => {
      const k = He(() => [g(d).ref]);
      Dn(T, {
        get items() {
          return i();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g(k);
        },
        expandAll: !0,
        onSelect: x
      });
    };
    Ee(V, (T) => {
      g(d).refType === "input" ? T(z) : T(H, !1);
    });
  }
  Y(P);
  var I = Z(P, 2), R = j(I);
  Nn(
    oi(R, {
      placement: "bottom",
      floating: (T) => {
        var k = xy(), O = j(k), N = Z(j(O));
        const A = He(() => g(d).refType ? [g(d).refType] : []);
        Dn(N, {
          items: sy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(A);
          },
          onSelect: C
        }), Y(O);
        var X = Z(O, 2), K = Z(j(X));
        It(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (se) => {
            const xe = se.target.value;
            v("defaultValue", xe);
          }
        }), Y(X);
        var F = Z(X, 2), re = Z(j(F));
        It(re, {
          rows: 3,
          style: "width: 100%;",
          onchange: (se) => {
            const xe = se.target.value;
            v("description", xe);
          }
        }), Y(F);
        var Q = Z(F, 2), W = j(Q);
        nt(W, {
          onclick: $,
          children: (se, xe) => {
            Ne();
            var Ce = qe("删除");
            L(se, Ce);
          },
          $$slots: { default: !0 }
        }), Y(Q), Y(k), L(T, k);
      },
      children: (T, k) => {
        ba(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), Y(I), L(e, _);
  var E = ve({
    get parameter() {
      return a();
    },
    set parameter(T) {
      a(T), m();
    },
    get index() {
      return s();
    },
    set index(T) {
      s(T), m();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(T) {
      l(T), m();
    }
  });
  return r(), E;
}
ue(of, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var _y = /* @__PURE__ */ ae('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ ae('<div class="none-params svelte-1sm1mgi"> </div>'), Sy = /* @__PURE__ */ ae('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ey = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nn(e, t) {
  fe(t, !0), st(e, Ey);
  const [n, r] = ft(), o = () => ne(g(l), "$node", n), i = y(t, "noneParameterText", 7, "无输入参数"), a = y(t, "dataKeyName", 7, "parameters");
  let s = St(), l = He(() => Dr(s)), u = He(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = Sy(), d = j(c);
  {
    var f = (b) => {
      var x = _y();
      Ne(4), L(b, x);
    };
    Ee(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = Z(d, 2);
  Gt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, C) => {
      of(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(C);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = ky(), C = j(x, !0);
      Y(x), Te(() => rn(C, i())), L(b, x);
    }
  ), Y(c), L(e, c);
  var p = ve({
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
  return r(), p;
}
ue(nn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var My = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ ae('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Ty = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function af(e, t) {
  fe(t, !0), st(e, Ty);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In();
  return _n(e, bt(
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
        var s = My();
        L(a, s);
      },
      children: (a, s) => {
        var l = Oy(), u = _e(l), c = j(u);
        at(c, {
          level: 3,
          children: (v, p) => {
            Ne();
            var b = qe("输出参数");
            L(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        nt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, p) => {
            var b = Py();
            L(v, b);
          },
          $$slots: { default: !0 }
        }), Y(u);
        var f = Z(u, 2);
        nn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ue(af, { data: {} }, [], [], !0);
const zr = () => _r("tinyflow_options");
var Vy = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Ny = /* @__PURE__ */ ae('<div class="input-more-item svelte-1cfeest"><!></div>'), Dy = /* @__PURE__ */ ae('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), zy = /* @__PURE__ */ ae('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Hy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function sf(e, t) {
  fe(t, !0), st(e, Hy);
  const [n, r] = ft(), o = () => ne(g(u), "$node", n), i = y(t, "parameter", 7), a = y(t, "position", 7), s = y(t, "dataKeyName", 7);
  let l = St(), u = He(() => Dr(l)), c = He(() => {
    var O;
    let N = (O = o()) == null ? void 0 : O.data[s()], A;
    if (N && a().length > 0) {
      let X = N;
      for (let K = 0; K < a().length; K++) {
        const F = a()[K];
        K == a().length - 1 ? A = X[F] : X = X[F].children;
      }
    }
    return { ...i(), ...A };
  });
  const { updateNodeData: d } = Ut(), f = (O, N) => {
    d(l, (A) => {
      const X = A.data[s()];
      if (X && a().length > 0) {
        let K = X;
        for (let F = 0; F < a().length; F++) {
          const re = a()[F];
          F == a().length - 1 ? K[re] = { ...K[re], [O]: N } : K = X[re].children;
        }
      }
      return { [s()]: X };
    });
  }, v = (O) => {
    const N = O.target.value;
    f("name", N);
  }, p = (O) => {
    const N = O.value;
    f("dataType", N);
  };
  let b;
  const x = () => {
    d(l, (O) => {
      let N = O.data[s()];
      if (N && a().length > 0) {
        let A = N;
        for (let X = 0; X < a().length; X++) {
          const K = a()[X];
          X == a().length - 1 ? A.splice(K, 1) : A = A[K].children;
        }
      }
      return { [s()]: [...N] };
    }), b == null || b.hide();
  }, C = () => {
    d(l, (O) => {
      let N = O.data[s()];
      if (N && a().length > 0) {
        let A = N;
        for (let X = 0; X < a().length; X++) {
          const K = a()[X];
          X == a().length - 1 ? A[K].children ? A[K].children.push({
            id: ao(),
            name: "newParam",
            dataType: "String"
          }) : A[K].children = [
            {
              id: ao(),
              name: "newParam",
              dataType: "String"
            }
          ] : A = A[K].children;
        }
      }
      return { [s()]: [...N] };
    });
  };
  var h = zy(), $ = _e(h), w = j($);
  {
    var _ = (O) => {
      var N = dt(), A = _e(N);
      Gt(A, 17, a, Do, (X, K) => {
        Ne();
        var F = qe(" ");
        L(X, F);
      }), L(O, N);
    };
    Ee(w, (O) => {
      a().length > 1 && O(_);
    });
  }
  var S = Z(w, 2);
  const M = He(() => g(c).nameDisabled === !0);
  zt(S, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(M);
    }
  }), Y($);
  var P = Z($, 2), V = j(P);
  const z = He(() => g(c).dataType ? [g(c).dataType] : []), H = He(() => g(c).dataTypeDisabled === !0);
  Dn(V, {
    items: Jd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(z);
    },
    get disabled() {
      return g(H);
    },
    onSelect: p
  });
  var I = Z(V, 2);
  {
    var R = (O) => {
      nt(O, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: C,
        children: (N, A) => {
          var X = Vy();
          L(N, X);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(I, (O) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && O(R);
    });
  }
  Y(P);
  var E = Z(P, 2), T = j(E);
  Nn(
    oi(T, {
      placement: "bottom",
      floating: (O) => {
        var N = Dy(), A = j(N), X = Z(j(A));
        It(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            const se = W.target.value;
            f("defaultValue", se);
          }
        }), Y(A);
        var K = Z(A, 2), F = Z(j(K));
        It(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            const se = W.target.value;
            f("description", se);
          }
        }), Y(K);
        var re = Z(K, 2);
        {
          var Q = (W) => {
            var se = Ny(), xe = j(se);
            nt(xe, {
              onclick: x,
              children: (Ce, pe) => {
                Ne();
                var de = qe("删除");
                L(Ce, de);
              },
              $$slots: { default: !0 }
            }), Y(se), L(W, se);
          };
          Ee(re, (W) => {
            g(c).deleteDisabled !== !0 && W(Q);
          });
        }
        Y(N), L(O, N);
      },
      children: (O, N) => {
        ba(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => b = O,
    () => b
  ), Y(E), L(e, h);
  var k = ve({
    get parameter() {
      return i();
    },
    set parameter(O) {
      i(O), m();
    },
    get position() {
      return a();
    },
    set position(O) {
      a(O), m();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(O) {
      s(O), m();
    }
  });
  return r(), k;
}
ue(sf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ ae("<!> <!>", 1), Ay = /* @__PURE__ */ ae('<div class="none-params svelte-1sm1mgi"> </div>'), Iy = /* @__PURE__ */ ae('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ry = /* @__PURE__ */ ae('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const By = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  fe(t, !0), st(e, By);
  const [n, r] = ft(), o = () => ne(g(u), "$node", n), i = (x, C = $t, h = $t) => {
    var $ = dt(), w = _e($);
    Gt(
      w,
      19,
      C,
      (_) => `${_.id}_${_.children ? _.children.length : 0}`,
      (_, S, M) => {
        var P = Ly(), V = _e(P);
        const z = He(() => [...h(), g(M)]);
        sf(V, {
          get parameter() {
            return g(S);
          },
          get position() {
            return g(z);
          },
          get dataKeyName() {
            return s();
          }
        });
        var H = Z(V, 2);
        {
          var I = (R) => {
            var E = /* @__PURE__ */ we(() => [...h(), g(M)]);
            i(R, () => g(S).children, () => g(E));
          };
          Ee(H, (R) => {
            g(S).children && R(I);
          });
        }
        L(_, P);
      },
      (_) => {
        var S = dt(), M = _e(S);
        {
          var P = (V) => {
            var z = Ay(), H = j(z, !0);
            Y(z), Te(() => rn(H, a())), L(V, z);
          };
          Ee(M, (V) => {
            h().length === 0 && V(P);
          });
        }
        L(_, S);
      }
    ), L(x, $);
  }, a = y(t, "noneParameterText", 7, "无输出参数"), s = y(t, "dataKeyName", 7, "outputDefs");
  let l = St(), u = He(() => Dr(l)), c = He(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Ry(), f = j(d);
  {
    var v = (x) => {
      var C = Iy();
      Ne(4), L(x, C);
    };
    Ee(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var p = Z(f, 2);
  i(p, () => g(c) || [], () => []), Y(d), L(e, d);
  var b = ve({
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
ue(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Xy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ ae('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const jy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function lf(e, t) {
  fe(t, !0), st(e, jy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In(), a = zr();
  let s = Nt(dn([]));
  sn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Zy();
        L(u, c);
      },
      children: (u, c) => {
        var d = Wy(), f = _e(d), v = j(f);
        at(v, {
          level: 3,
          children: (de, ie) => {
            Ne();
            var ye = qe("输入参数");
            L(de, ye);
          },
          $$slots: { default: !0 }
        });
        var p = Z(v, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (de, ie) => {
            var ye = Xy();
            L(de, ye);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var b = Z(f, 2);
        nn(b, {});
        var x = Z(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (de, ie) => {
            Ne();
            var ye = qe("模型设置");
            L(de, ye);
          },
          $$slots: { default: !0 }
        });
        var C = Z(x, 4), h = j(C);
        const $ = He(() => n().llmId ? [n().llmId] : []);
        Dn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (de) => {
            const ie = de.value;
            l(o, () => ({ llmId: ie }));
          },
          get value() {
            return g($);
          }
        });
        var w = Z(h, 2);
        ba(w, {}), Y(C);
        var _ = Z(C, 4), S = j(_), M = j(S), P = j(M);
        Y(M);
        var V = Z(M, 2);
        So(V), Y(S), Y(_);
        var z = Z(_, 2), H = j(z), I = j(H), R = j(I);
        Y(I);
        var E = Z(I, 2);
        So(E), Y(H), Y(z);
        var T = Z(z, 2), k = j(T), O = j(k), N = j(O);
        Y(O);
        var A = Z(O, 2);
        So(A), Y(k), Y(T);
        var X = Z(T, 4), K = j(X);
        const F = He(() => n().systemPrompt || "");
        It(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(F);
          },
          oninput: (de) => {
            l(o, { systemPrompt: de.target.value });
          }
        }), Y(X);
        var re = Z(X, 4), Q = j(re);
        const W = He(() => n().userPrompt || "");
        It(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(W);
          },
          oninput: (de) => {
            l(o, { userPrompt: de.target.value });
          }
        }), Y(re);
        var se = Z(re, 2), xe = j(se);
        at(xe, {
          level: 3,
          mt: "10px",
          children: (de, ie) => {
            Ne();
            var ye = qe("输出参数");
            L(de, ye);
          },
          $$slots: { default: !0 }
        });
        var Ce = Z(xe, 2);
        nt(Ce, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (de, ie) => {
            var ye = Yy();
            L(de, ye);
          },
          $$slots: { default: !0 }
        }), Y(se);
        var pe = Z(se, 2);
        Jn(pe, {}), Te(() => {
          rn(P, `Temperature: ${n().temperature ?? 0.5}`), Ea(V, n().temperature ?? 0.5), rn(R, `Top P: ${n().topP ?? 0.9}`), Ea(E, n().topP ?? 0.9), rn(N, `Top K: ${n().topK ?? 50}`), Ea(A, n().topK ?? 50);
        }), Ue("mousedown", V, Ma(function(de) {
          Ze.call(this, t, de);
        })), Ue("input", V, (de) => l(o, { temperature: parseFloat(de.target.value) })), Ue("mousedown", E, Ma(function(de) {
          Ze.call(this, t, de);
        })), Ue("input", E, (de) => l(o, { topP: parseFloat(de.target.value) })), Ue("mousedown", A, Ma(function(de) {
          Ze.call(this, t, de);
        })), Ue("input", A, (de) => l(o, { topK: parseInt(de.target.value) })), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(lf, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  fe(t, !0), st(e, Uy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  sn(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = St(), { addParameter: i } = In(), { updateNodeData: a } = Ut(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        L(l, u);
      },
      children: (l, u) => {
        var c = Gy(), d = _e(c), f = j(d);
        at(f, {
          level: 3,
          children: (z, H) => {
            Ne();
            var I = qe("输入参数");
            L(z, I);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        nt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (z, H) => {
            var I = qy();
            L(z, I);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var p = Z(d, 2);
        nn(p, {});
        var b = Z(p, 2);
        at(b, {
          level: 3,
          mt: "10px",
          children: (z, H) => {
            Ne();
            var I = qe("代码");
            L(z, I);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 4), C = j(x);
        const h = He(() => n().engine ? [n().engine] : ["qlexpress"]);
        Dn(C, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const H = z.value;
            a(o, () => ({ engine: H }));
          },
          get value() {
            return g(h);
          }
        }), Y(x);
        var $ = Z(x, 4), w = j($);
        const _ = He(() => n().code || "");
        It(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            a(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g(_);
          }
        }), Y($);
        var S = Z($, 2), M = j(S);
        at(M, {
          level: 3,
          mt: "10px",
          children: (z, H) => {
            Ne();
            var I = qe("输出参数");
            L(z, I);
          },
          $$slots: { default: !0 }
        });
        var P = Z(M, 2);
        nt(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (z, H) => {
            var I = Fy();
            L(z, I);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var V = Z(S, 2);
        Jn(V, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(uf, { data: {} }, [], [], !0);
var Jy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  fe(t, !0), st(e, tw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In(), { updateNodeData: a } = Ut();
  return vr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Jy();
        L(s, l);
      },
      children: (s, l) => {
        var u = ew(), c = _e(u), d = j(c);
        at(d, {
          level: 3,
          children: (_, S) => {
            Ne();
            var M = qe("输入参数");
            L(_, M);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        nt(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, S) => {
            var M = Qy();
            L(_, M);
          },
          $$slots: { default: !0 }
        }), Y(c);
        var v = Z(c, 2);
        nn(v, {});
        var p = Z(v, 2);
        at(p, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            Ne();
            var M = qe("代码");
            L(_, M);
          },
          $$slots: { default: !0 }
        });
        var b = Z(p, 4), x = j(b);
        const C = He(() => n().template || "");
        It(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (_) => {
            a(o, () => ({ template: _.target.value }));
          },
          get value() {
            return g(C);
          }
        }), Y(b);
        var h = Z(b, 2), $ = j(h);
        at($, {
          level: 3,
          mt: "10px",
          children: (_, S) => {
            Ne();
            var M = qe("输出参数");
            L(_, M);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var w = Z(h, 2);
        Jn(w, {}), L(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ue(cf, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), rw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ae('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ae('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ae('<div style="width: 100%"><!></div>'), cw = /* @__PURE__ */ ae('<div style="width: 100%"><!></div>'), dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ae('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const vw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function df(e, t) {
  fe(t, !0), st(e, vw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  sn(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = St(), { addParameter: a } = In(), { updateNodeData: s } = Ut();
  return _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = nw();
        L(l, u);
      },
      children: (l, u) => {
        var c = fw(), d = _e(c), f = j(d), v = j(f);
        const p = He(() => n().method ? [n().method] : ["get"]);
        Dn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (le) => {
            const ce = le.value;
            s(i, () => ({ method: ce }));
          },
          get value() {
            return g(p);
          }
        }), Y(f);
        var b = Z(f, 2), x = j(b);
        const C = He(() => n().url || "");
        zt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (le) => {
            s(i, () => ({ url: le.target.value }));
          },
          get value() {
            return g(C);
          }
        }), Y(b), Y(d);
        var h = Z(d, 2), $ = j(h);
        at($, {
          level: 3,
          children: (le, ce) => {
            Ne();
            var Se = qe("Http 头信息");
            L(le, Se);
          },
          $$slots: { default: !0 }
        });
        var w = Z($, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (le, ce) => {
            var Se = rw();
            L(le, Se);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var _ = Z(h, 2);
        nn(_, { dataKeyName: "headers" });
        var S = Z(_, 2), M = j(S);
        at(M, {
          level: 3,
          children: (le, ce) => {
            Ne();
            var Se = qe("参数");
            L(le, Se);
          },
          $$slots: { default: !0 }
        });
        var P = Z(M, 2);
        nt(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (le, ce) => {
            var Se = ow();
            L(le, Se);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var V = Z(S, 2);
        nn(V, { dataKeyName: "urlParameters" });
        var z = Z(V, 2);
        at(z, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            Ne();
            var Se = qe("Body");
            L(le, Se);
          },
          $$slots: { default: !0 }
        });
        var H = Z(z, 2), I = j(H), R = j(I);
        const E = He(() => !n().bodyType);
        zt(R, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(E);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "" });
          }
        }), Ne(), Y(I);
        var T = Z(I, 2), k = j(T);
        const O = He(() => n().bodyType === "form-data");
        zt(k, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(O);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "form-data" });
          }
        }), Ne(), Y(T);
        var N = Z(T, 2), A = j(N);
        const X = He(() => n().bodyType === "x-www-form-urlencoded");
        zt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(X);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), Y(N);
        var K = Z(N, 2), F = j(K);
        const re = He(() => n().bodyType === "json");
        zt(F, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(re);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "json" });
          }
        }), Ne(), Y(K);
        var Q = Z(K, 2), W = j(Q);
        const se = He(() => n().bodyType === "raw");
        zt(W, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(se);
          },
          onchange: (le) => {
            var ce;
            (ce = le.target) != null && ce.checked && s(i, { bodyType: "raw" });
          }
        }), Ne(), Y(Q), Y(H);
        var xe = Z(H, 2);
        {
          var Ce = (le) => {
            var ce = aw(), Se = _e(ce), Ke = j(Se);
            at(Ke, {
              level: 3,
              children: (lt, te) => {
                Ne();
                var Le = qe("参数");
                L(lt, Le);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(Ke, 2);
            nt(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromData");
              },
              children: (lt, te) => {
                var Le = iw();
                L(lt, Le);
              },
              $$slots: { default: !0 }
            }), Y(Se);
            var vt = Z(Se, 2);
            nn(vt, { dataKeyName: "fromData" }), L(le, ce);
          };
          Ee(xe, (le) => {
            n().bodyType === "form-data" && le(Ce);
          });
        }
        var pe = Z(xe, 2);
        {
          var de = (le) => {
            var ce = lw(), Se = _e(ce), Ke = j(Se);
            at(Ke, {
              level: 3,
              children: (lt, te) => {
                Ne();
                var Le = qe("参数");
                L(lt, Le);
              },
              $$slots: { default: !0 }
            });
            var ze = Z(Ke, 2);
            nt(ze, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "fromUrlencoded");
              },
              children: (lt, te) => {
                var Le = sw();
                L(lt, Le);
              },
              $$slots: { default: !0 }
            }), Y(Se);
            var vt = Z(Se, 2);
            nn(vt, { dataKeyName: "fromUrlencoded" }), L(le, ce);
          };
          Ee(pe, (le) => {
            n().bodyType === "x-www-form-urlencoded" && le(de);
          });
        }
        var ie = Z(pe, 2);
        {
          var ye = (le) => {
            var ce = uw(), Se = j(ce);
            It(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ke) => {
                s(i, { bodyJson: Ke.target.value });
              }
            }), Y(ce), L(le, ce);
          };
          Ee(ie, (le) => {
            n().bodyType === "json" && le(ye);
          });
        }
        var Ge = Z(ie, 2);
        {
          var We = (le) => {
            var ce = cw(), Se = j(ce);
            It(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ke) => {
                s(i, { bodyRaw: Ke.target.value });
              }
            }), Y(ce), L(le, ce);
          };
          Ee(Ge, (le) => {
            n().bodyType === "raw" && le(We);
          });
        }
        var Ie = Z(Ge, 2), ee = j(Ie);
        at(ee, {
          level: 3,
          mt: "10px",
          children: (le, ce) => {
            Ne();
            var Se = qe("输出参数");
            L(le, Se);
          },
          $$slots: { default: !0 }
        });
        var Fe = Z(ee, 2);
        nt(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (le, ce) => {
            var Se = dw();
            L(le, Se);
          },
          $$slots: { default: !0 }
        }), Y(Ie);
        var Je = Z(Ie, 2);
        Jn(Je, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(df, { data: {} }, [], [], !0);
var gw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), hw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ff(e, t) {
  fe(t, !0), st(e, mw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In(), a = zr();
  let s = Nt(dn([]));
  sn(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return vr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = gw();
        L(u, c);
      },
      children: (u, c) => {
        var d = pw(), f = _e(d), v = j(f);
        at(v, {
          level: 3,
          children: (V, z) => {
            Ne();
            var H = qe("输入参数");
            L(V, H);
          },
          $$slots: { default: !0 }
        });
        var p = Z(v, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (V, z) => {
            var H = hw();
            L(V, H);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var b = Z(f, 2);
        nn(b, {});
        var x = Z(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Ne();
            var H = qe("知识库设置");
            L(V, H);
          },
          $$slots: { default: !0 }
        });
        var C = Z(x, 4), h = j(C);
        const $ = He(() => n().knowledgeId ? [n().knowledgeId] : []);
        Dn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (V) => {
            const z = V.value;
            l(o, () => ({ knowledgeId: z }));
          },
          get value() {
            return g($);
          }
        }), Y(C);
        var w = Z(C, 4), _ = j(w);
        zt(_, { placeholder: "搜索的数据条数", style: "width: 100%" }), Y(w);
        var S = Z(w, 2), M = j(S);
        at(M, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Ne();
            var H = qe("输出参数");
            L(V, H);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var P = Z(S, 2);
        Jn(P, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(ff, { data: {} }, [], [], !0);
var yw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ww = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const xw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  fe(t, !0), st(e, xw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In(), a = zr();
  let s = Nt(dn([]));
  sn(async () => {
    var u;
    const c = await ((u = a.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = Ut();
  return vr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0
        }
      ]
    });
  }), _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = yw();
        L(u, c);
      },
      children: (u, c) => {
        var d = bw(), f = _e(d), v = j(f);
        at(v, {
          level: 3,
          children: (T, k) => {
            Ne();
            var O = qe("输入参数");
            L(T, O);
          },
          $$slots: { default: !0 }
        });
        var p = Z(v, 2);
        nt(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, k) => {
            var O = ww();
            L(T, O);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var b = Z(f, 2);
        nn(b, {});
        var x = Z(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (T, k) => {
            Ne();
            var O = qe("搜索引擎设置");
            L(T, O);
          },
          $$slots: { default: !0 }
        });
        var C = Z(x, 4), h = j(C);
        const $ = He(() => n().knowledgeId ? [n().knowledgeId] : []);
        Dn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (T) => {
            const k = T.value;
            l(o, () => ({ knowledgeId: k }));
          },
          get value() {
            return g($);
          }
        }), Y(C);
        var w = Z(C, 4), _ = j(w);
        zt(_, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Y(w);
        var S = Z(w, 4), M = j(S);
        zt(M, { placeholder: "请输入关键字", style: "width: 100%" }), Y(S);
        var P = Z(S, 4), V = j(P);
        zt(V, { placeholder: "搜索的数据条数", style: "width: 100%" }), Y(P);
        var z = Z(P, 4), H = j(z);
        It(H, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Y(z);
        var I = Z(z, 2), R = j(I);
        at(R, {
          level: 3,
          mt: "10px",
          children: (T, k) => {
            Ne();
            var O = qe("输出参数");
            L(T, O);
          },
          $$slots: { default: !0 }
        }), Y(I);
        var E = Z(I, 2);
        Jn(E, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
ue(vf, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ae('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const kw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function gf(e, t) {
  fe(t, !0), st(e, kw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = St(), { addParameter: i } = In(), a = zr();
  let s = Nt(dn([]));
  return sn(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), _n(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = $w();
        L(l, u);
      },
      handle: (l) => {
        gr(l, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = _w(), d = _e(c), f = j(d);
        at(f, {
          level: 3,
          children: (h, $) => {
            Ne();
            var w = qe("循环变量");
            L(h, w);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        nt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (h, $) => {
            var w = Cw();
            L(h, w);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var p = Z(d, 2);
        nn(p, {});
        var b = Z(p, 2), x = j(b);
        at(x, {
          level: 3,
          mt: "10px",
          children: (h, $) => {
            Ne();
            var w = qe("输出参数");
            L(h, w);
          },
          $$slots: { default: !0 }
        }), Y(b);
        var C = Z(b, 2);
        Jn(C, {}), L(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ue(gf, { data: {} }, [], [], !0);
const Sw = {
  startNode: nf,
  codeNode: uf,
  llmNode: lf,
  templateNode: cf,
  httpNode: df,
  knowledgeNode: ff,
  searchEngineNode: vf,
  loopNode: gf,
  endNode: af
};
var Ew = /* @__PURE__ */ ae("<!> ", 1);
function cs(e, t) {
  fe(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), a = y(t, "extra", 7);
  return nt(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          systemPrompt: "",
          userPrompt: "",
          ...a()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = Ew(), c = _e(u);
      Ms(c, n);
      var d = Z(c);
      Te(() => rn(d, ` ${r() ?? ""}`)), L(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
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
ue(
  cs,
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
var Mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Ow = /* @__PURE__ */ ae('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function hf(e, t) {
  fe(t, !0);
  let n = Nt("base"), r = Nt("show");
  const o = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "loopNode",
      description: "用于循环执行任务"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      description: "使用大模型处理问题"
    },
    {
      // icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM6.33421 15.8154C6.51032 15.233 6.7072 14.6562 6.93912 14.0327C8.99484 8.50636 12.4197 5.08172 18.0129 4.21479C17.5 5.35838 17.0151 6.15301 16.5858 6.58237C16.2521 6.91603 15.9185 7.24993 15.5848 7.58407L14.1721 8.99878L15.6279 10.4535C14.4976 12.5384 12.2652 14.1979 9.75193 14.512C8.43544 14.6766 7.29345 15.1188 6.33421 15.8154ZM18 9.99658L17 8.99728C17.3331 8.66372 17.6662 8.33039 18.0027 7.99391C19.0018 6.99303 20.0009 4.99392 21 1.99658C6.31105 1.99658 4.08854 15.422 3.06361 21.6132C3.0419 21.7443 3.02074 21.8722 3 21.9966H4.99824C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.9966 18 9.99658Z"></path></svg>',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "knowledgeNode",
      description: "通过知识库获取内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "searchEngineNode",
      description: "通过搜索引擎搜索内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
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
  ], a = [], s = zr().customNodes;
  if (s) {
    const x = Object.keys(s).sort((C, h) => (s[C].sortNo || 0) - (s[h].sortNo || 0));
    for (let C of x)
      a.push({
        icon: s[C].icon,
        title: s[C].title,
        type: C
      });
  }
  var l = Ow(), u = j(l), c = j(u), d = j(c);
  Ad(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      G(n, x.value.toString(), !0);
    }
  }), Y(c);
  var f = Z(c, 2), v = j(f);
  Gt(v, 21, () => o, Do, (x, C) => {
    cs(x, bt(() => g(C)));
  }), Y(v);
  var p = Z(v, 2);
  Gt(p, 21, () => a, Do, (x, C) => {
    cs(x, bt(() => g(C)));
  }), Y(p), Y(f), Y(u);
  var b = Z(u, 2);
  nt(b, {
    onclick: () => {
      G(r, g(r) ? "" : "show", !0);
    },
    children: (x, C) => {
      var h = dt(), $ = _e(h);
      {
        var w = (S) => {
          var M = Mw();
          L(S, M);
        }, _ = (S) => {
          var M = Pw();
          L(S, M);
        };
        Ee($, (S) => {
          g(r) === "show" ? S(w) : S(_, !1);
        });
      }
      L(x, h);
    },
    $$slots: { default: !0 }
  }), Y(l), Te(() => {
    At(l, 1, `tf-toolbar ${g(r) ?? ""}`), Ct(v, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), Ct(p, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, l), ve();
}
ue(hf, {}, [], [], !0);
const Tw = () => {
  const { nodeLookup: e } = rt();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, Vw = () => {
  const { nodes: e } = rt();
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
}, Nw = () => {
  const { edges: e } = rt();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var Dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ ae('<div class="heading svelte-c71dg3"><!> <!></div> <!> <div></div> <div class="heading svelte-c71dg3"><!> <!></div> <!>', 1);
const Lw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function pf(e, t) {
  var n;
  fe(t, !0), st(e, Lw);
  const r = y(t, "data", 7), o = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = St(), { addParameter: a } = In(), s = Ut(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = zr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  vr(() => {
    r().expand && d && d.append(u);
  }), vr(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = He(() => ({
    ...r(),
    description: c.description
  }));
  return _n(e, bt(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var p = dt(), b = _e(p);
        Ms(b, () => c.icon), L(v, p);
      },
      children: (v, p) => {
        var b = Hw(), x = _e(b), C = j(x);
        at(C, {
          level: 3,
          children: (V, z) => {
            Ne();
            var H = qe("输入参数");
            L(V, H);
          },
          $$slots: { default: !0 }
        });
        var h = Z(C, 2);
        nt(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i);
          },
          children: (V, z) => {
            var H = Dw();
            L(V, H);
          },
          $$slots: { default: !0 }
        }), Y(x);
        var $ = Z(x, 2);
        nn($, {});
        var w = Z($, 2);
        Nn(w, (V) => d = V, () => d);
        var _ = Z(w, 2), S = j(_);
        at(S, {
          level: 3,
          mt: "10px",
          children: (V, z) => {
            Ne();
            var H = qe("输出参数");
            L(V, H);
          },
          $$slots: { default: !0 }
        });
        var M = Z(S, 2);
        nt(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (V, z) => {
            var H = zw();
            L(V, H);
          },
          $$slots: { default: !0 }
        }), Y(_);
        var P = Z(_, 2);
        Jn(P, {}), L(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return r();
    },
    set data(v) {
      r(v), m();
    }
  });
}
ue(pf, { data: {} }, [], [], !0);
var Aw = /* @__PURE__ */ ae('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Iw = /* @__PURE__ */ ae("<!> <!> <!> <!>", 1), Rw = /* @__PURE__ */ ae('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Bw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function mf(e, t) {
  fe(t, !0), st(e, Bw);
  const n = y(t, "onInit", 7), r = Ut();
  n()(r);
  let o = Nt(!1);
  const i = (S) => {
    S.preventDefault(), S.dataTransfer && (S.dataTransfer.dropEffect = "move");
  }, a = (S) => {
    var M;
    S.preventDefault();
    const P = r.screenToFlowPosition({
      x: S.clientX - 250,
      y: S.clientY - 100
    }), V = (M = S.dataTransfer) == null ? void 0 : M.getData("application/tinyflow"), z = V ? JSON.parse(V) : {}, H = {
      id: `node_${ao()}`,
      position: P,
      data: {},
      ...z
    };
    _i.addNode(H), _i.selectNodeOnly(H.id);
  }, { getNode: s } = Tw(), l = (S) => {
    const M = s(S.source), P = s(S.target);
    if (S.sourceHandle === "loop_handle" || M.parentId) {
      const V = r.getEdges();
      for (let z of V)
        if (z.target === S.target) {
          const H = s(z.source);
          if (S.sourceHandle === "loop_handle" && H.parentId !== M.id || M.parentId && H.parentId !== M.parentId)
            return !1;
        }
    }
    return !(!M.parentId && P.parentId && P.parentId !== M.id);
  }, { ensureParentInNodesBefore: u } = Vw(), c = (S, M) => {
    if (!M.isValid)
      return;
    const P = M.toNode;
    if (P.parentId)
      return;
    const V = M.fromNode, z = M.fromHandle, H = { position: { ...P.position } };
    if (z.id === "loop_handle" ? H.parentId = V.id : V.parentId && (H.parentId = V.parentId), H.parentId) {
      const I = s(H.parentId);
      H.position = {
        x: P.position.x - I.position.x,
        y: P.position.y - I.position.y
      }, u(H.parentId, P.id), r.updateNode(P.id, H);
    }
  }, { getEdgesByTarget: d } = Nw(), f = (S) => {
    S.edges.forEach((M) => {
      const P = s(M.target);
      if (P.parentId) {
        const V = d(M.target), z = s(P.parentId);
        if (V.length === 0)
          r.updateNode(P.id, {
            parentId: void 0,
            position: {
              x: P.position.x + z.position.x,
              y: P.position.y + z.position.y
            }
          });
        else {
          let H = !1;
          for (let I = 0; I < V.length; I++) {
            const R = V[I], E = s(R.source);
            if (E.parentId || E.type === "loopNode") {
              H = !0;
              break;
            }
          }
          H || r.updateNode(P.id, {
            parentId: void 0,
            position: {
              x: P.position.x + z.position.x,
              y: P.position.y + z.position.y
            }
          });
        }
      }
    });
  }, v = (S, M) => {
    console.log("onconnectstart: ", S, M);
  }, p = (S) => {
    console.log("onconnect: ", S);
  }, b = {}, x = zr().customNodes;
  if (x)
    for (let S of Object.keys(x))
      b[S] = pf;
  var C = Rw(), h = j(C);
  hf(h, {});
  var $ = Z(h, 2);
  const w = He(() => ({ ...Sw, ...b })), _ = He(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Cd($, bt(
    {
      get nodeTypes() {
        return g(w);
      }
    },
    _i,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: p,
      connectionRadius: 50,
      ondelete: f,
      onclick: (S) => {
        const M = S.target;
        M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || G(o, !1);
      },
      get defaultEdgeOptions() {
        return g(_);
      },
      $$events: {
        drop: a,
        dragover: i,
        edgeclick: () => {
          G(o, !0);
        }
      },
      children: (S, M) => {
        var P = Iw(), V = _e(P);
        Nd(V, {});
        var z = Z(V, 2);
        Od(z, {});
        var H = Z(z, 2);
        zd(H, {});
        var I = Z(H, 2);
        {
          var R = (E) => {
            ei(E, {
              children: (T, k) => {
                var O = Aw(), N = Z(j(O), 4), A = j(N);
                It(A, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (X) => {
                  }
                }), Y(N), Y(O), L(T, O);
              },
              $$slots: { default: !0 }
            });
          };
          Ee(I, (E) => {
            g(o) && E(R);
          });
        }
        L(S, P);
      },
      $$slots: { default: !0 }
    }
  )), Y(C), L(e, C), ve({
    get onInit() {
      return n();
    },
    set onInit(S) {
      n(S), m();
    }
  });
}
ue(mf, { onInit: {} }, [], [], !0);
function Zw(e, t) {
  fe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return _i.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Ur("tinyflow_options", n()), _d(e, {
    fitView: !0,
    children: (i, a) => {
      mf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ve({
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
customElements.define("tinyflow-component", ue(Zw, { options: {}, onInit: {} }, [], [], !1));
const jw = bf((e, t) => {
  const n = Js(null), r = Js(null);
  xf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return $f(() => {
    if (n.current) {
      const s = new Ym({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Sf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: a });
});
export {
  jw as Tinyflow
};
//# sourceMappingURL=index.js.map
