import vu, { forwardRef as xf, useRef as Js, useImperativeHandle as $f, useEffect as _f } from "react";
var ui = { exports: {} }, go = {};
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
  if (Qs) return go;
  Qs = 1;
  var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return go.Fragment = n, go.jsx = a, go.jsxs = a, go;
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
function kf() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, b = "@@iterator";
    function x(D) {
      if (D === null || typeof D != "object")
        return null;
      var U = w && D[w] || D[b];
      return typeof U == "function" ? U : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(D) {
      {
        for (var U = arguments.length, ge = new Array(U > 1 ? U - 1 : 0), Pe = 1; Pe < U; Pe++)
          ge[Pe - 1] = arguments[Pe];
        C("error", D, ge);
      }
    }
    function C(D, U, ge) {
      {
        var Pe = _.ReactDebugCurrentFrame, R = Pe.getStackAddendum();
        R !== "" && (U += "%s", ge = ge.concat([R]));
        var it = ge.map(function(Xe) {
          return String(Xe);
        });
        it.unshift("Warning: " + U), Function.prototype.apply.call(console[D], console, it);
      }
    }
    var y = !1, k = !1, E = !1, S = !1, V = !1, T;
    T = Symbol.for("react.module.reference");
    function N(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === i || V || D === o || D === u || D === c || S || D === v || y || k || E || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === d || D.$$typeof === a || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === T || D.getModuleId !== void 0));
    }
    function I(D, U, ge) {
      var Pe = D.displayName;
      if (Pe)
        return Pe;
      var R = U.displayName || U.name || "";
      return R !== "" ? ge + "(" + R + ")" : ge;
    }
    function z(D) {
      return D.displayName || "Context";
    }
    function Y(D) {
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
            var U = D;
            return z(U) + ".Consumer";
          case a:
            var ge = D;
            return z(ge._context) + ".Provider";
          case l:
            return I(D, D.render, "ForwardRef");
          case d:
            var Pe = D.displayName || null;
            return Pe !== null ? Pe : Y(D.type) || "Memo";
          case f: {
            var R = D, it = R._payload, Xe = R._init;
            try {
              return Y(Xe(it));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, H = 0, $, M, O, A, Z, j, F;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Q() {
      {
        if (H === 0) {
          $ = console.log, M = console.info, O = console.warn, A = console.error, Z = console.group, j = console.groupCollapsed, F = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: ue,
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
        H++;
      }
    }
    function W() {
      {
        if (H--, H === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, D, {
              value: $
            }),
            info: P({}, D, {
              value: M
            }),
            warn: P({}, D, {
              value: O
            }),
            error: P({}, D, {
              value: A
            }),
            group: P({}, D, {
              value: Z
            }),
            groupCollapsed: P({}, D, {
              value: j
            }),
            groupEnd: P({}, D, {
              value: F
            })
          });
        }
        H < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = _.ReactCurrentDispatcher, we;
    function xe(D, U, ge) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (R) {
            var Pe = R.stack.trim().match(/\n( *(at )?)/);
            we = Pe && Pe[1] || "";
          }
        return `
` + we + D;
      }
    }
    var ce = !1, fe;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new ie();
    }
    function ye(D, U) {
      if (!D || ce)
        return "";
      {
        var ge = fe.get(D);
        if (ge !== void 0)
          return ge;
      }
      var Pe;
      ce = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var it;
      it = re.current, re.current = null, Q();
      try {
        if (U) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (Ct) {
              Pe = Ct;
            }
            Reflect.construct(D, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (Ct) {
              Pe = Ct;
            }
            D.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            Pe = Ct;
          }
          D();
        }
      } catch (Ct) {
        if (Ct && Pe && typeof Ct.stack == "string") {
          for (var Ne = Ct.stack.split(`
`), Pt = Pe.stack.split(`
`), ht = Ne.length - 1, pt = Pt.length - 1; ht >= 1 && pt >= 0 && Ne[ht] !== Pt[pt]; )
            pt--;
          for (; ht >= 1 && pt >= 0; ht--, pt--)
            if (Ne[ht] !== Pt[pt]) {
              if (ht !== 1 || pt !== 1)
                do
                  if (ht--, pt--, pt < 0 || Ne[ht] !== Pt[pt]) {
                    var Xt = `
` + Ne[ht].replace(" at new ", " at ");
                    return D.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", D.displayName)), typeof D == "function" && fe.set(D, Xt), Xt;
                  }
                while (ht >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        ce = !1, re.current = it, W(), Error.prepareStackTrace = R;
      }
      var tr = D ? D.displayName || D.name : "", nr = tr ? xe(tr) : "";
      return typeof D == "function" && fe.set(D, nr), nr;
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
        return xe(D);
      switch (D) {
        case u:
          return xe("Suspense");
        case c:
          return xe("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case l:
            return Ge(D.render);
          case d:
            return Ie(D.type, U, ge);
          case f: {
            var Pe = D, R = Pe._payload, it = Pe._init;
            try {
              return Ie(it(R), U, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Fe = {}, Je = _.ReactDebugCurrentFrame;
    function se(D) {
      if (D) {
        var U = D._owner, ge = Ie(D.type, D._source, U ? U.type : null);
        Je.setExtraStackFrame(ge);
      } else
        Je.setExtraStackFrame(null);
    }
    function de(D, U, ge, Pe, R) {
      {
        var it = Function.call.bind(ee);
        for (var Xe in D)
          if (it(D, Xe)) {
            var Ne = void 0;
            try {
              if (typeof D[Xe] != "function") {
                var Pt = Error((Pe || "React class") + ": " + ge + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              Ne = D[Xe](U, Xe, Pe, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              Ne = ht;
            }
            Ne && !(Ne instanceof Error) && (se(R), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", ge, Xe, typeof Ne), se(null)), Ne instanceof Error && !(Ne.message in Fe) && (Fe[Ne.message] = !0, se(R), g("Failed %s type: %s", ge, Ne.message), se(null));
          }
      }
    }
    var Se = Array.isArray;
    function je(D) {
      return Se(D);
    }
    function De(D) {
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
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(D)), lt(D);
    }
    var Le = _.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, Yt;
    function un(D) {
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
          Zt || (Zt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
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
          Yt || (Yt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var ct = function(D, U, ge, Pe, R, it, Xe) {
      var Ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: U,
        ref: ge,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: it
      };
      return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(Ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
    };
    function Jt(D, U, ge, Pe, R) {
      {
        var it, Xe = {}, Ne = null, Pt = null;
        ge !== void 0 && (te(ge), Ne = "" + ge), Ve(U) && (te(U.key), Ne = "" + U.key), un(U) && (Pt = U.ref, ut(U, R));
        for (it in U)
          ee.call(U, it) && !me.hasOwnProperty(it) && (Xe[it] = U[it]);
        if (D && D.defaultProps) {
          var ht = D.defaultProps;
          for (it in ht)
            Xe[it] === void 0 && (Xe[it] = ht[it]);
        }
        if (Ne || Pt) {
          var pt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ne && Re(Xe, pt), Pt && Ae(Xe, pt);
        }
        return ct(D, Ne, Pt, R, Pe, Le.current, Xe);
      }
    }
    var St = _.ReactCurrentOwner, Qn = _.ReactDebugCurrentFrame;
    function mt(D) {
      if (D) {
        var U = D._owner, ge = Ie(D.type, D._source, U ? U.type : null);
        Qn.setExtraStackFrame(ge);
      } else
        Qn.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function Sn(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ot() {
      {
        if (St.current) {
          var D = Y(St.current.type);
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
    function Ot(D) {
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
    function wr(D, U) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var ge = Ot(U);
        if (er[ge])
          return;
        er[ge] = !0;
        var Pe = "";
        D && D._owner && D._owner !== St.current && (Pe = " It was passed a child from " + Y(D._owner.type) + "."), mt(D), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Pe), mt(null);
      }
    }
    function br(D, U) {
      {
        if (typeof D != "object")
          return;
        if (je(D))
          for (var ge = 0; ge < D.length; ge++) {
            var Pe = D[ge];
            Sn(Pe) && wr(Pe, U);
          }
        else if (Sn(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var R = x(D);
          if (typeof R == "function" && R !== D.entries)
            for (var it = R.call(D), Xe; !(Xe = it.next()).done; )
              Sn(Xe.value) && wr(Xe.value, U);
        }
      }
    }
    function zr(D) {
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
          var Pe = Y(U);
          de(ge, D.props, "prop", Pe, D);
        } else if (U.PropTypes !== void 0 && !$t) {
          $t = !0;
          var R = Y(U);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ho(D) {
      {
        for (var U = Object.keys(D.props), ge = 0; ge < U.length; ge++) {
          var Pe = U[ge];
          if (Pe !== "children" && Pe !== "key") {
            mt(D), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), mt(null);
            break;
          }
        }
        D.ref !== null && (mt(D), g("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var ii = {};
    function ai(D, U, ge, Pe, R, it) {
      {
        var Xe = N(D);
        if (!Xe) {
          var Ne = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = vo();
          Pt ? Ne += Pt : Ne += ot();
          var ht;
          D === null ? ht = "null" : je(D) ? ht = "array" : D !== void 0 && D.$$typeof === t ? (ht = "<" + (Y(D.type) || "Unknown") + " />", Ne = " Did you accidentally export a JSX literal instead of a component?") : ht = typeof D, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ht, Ne);
        }
        var pt = Jt(D, U, ge, R, it);
        if (pt == null)
          return pt;
        if (Xe) {
          var Xt = U.children;
          if (Xt !== void 0)
            if (Pe)
              if (je(Xt)) {
                for (var tr = 0; tr < Xt.length; tr++)
                  br(Xt[tr], D);
                Object.freeze && Object.freeze(Xt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(Xt, D);
        }
        if (ee.call(U, "key")) {
          var nr = Y(D), Ct = Object.keys(U).filter(function(li) {
            return li !== "key";
          }), Lr = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ii[nr + Lr]) {
            var si = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lr, nr, si, nr), ii[nr + Lr] = !0;
          }
        }
        return D === r ? ho(pt) : zr(pt), pt;
      }
    }
    function xa(D, U, ge) {
      return ai(D, U, ge, !0);
    }
    function $a(D, U, ge) {
      return ai(D, U, ge, !1);
    }
    var _a = $a, Ca = xa;
    po.Fragment = r, po.jsx = _a, po.jsxs = Ca;
  }()), po;
}
var tl;
function Ef() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? ui.exports = Cf() : ui.exports = kf()), ui.exports;
}
var Sf = Ef(), Pf = Object.defineProperty, hu = (e) => {
  throw TypeError(e);
}, Mf = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jt = (e, t, n) => Mf(e, typeof t != "symbol" ? t + "" : t, n), ds = (e, t, n) => t.has(e) || hu("Cannot " + n), yt = (e, t, n) => (ds(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => t.has(e) ? hu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ki = (e, t, n, r) => (ds(e, t, "write to private field"), t.set(e, n), n), Tf = (e, t, n) => (ds(e, t, "access private method"), n);
const Hf = "5";
var nl;
typeof window < "u" && ((nl = window.__svelte ?? (window.__svelte = {})).v ?? (nl.v = /* @__PURE__ */ new Set())).add(Hf);
let so = !1, Vf = !1;
function Of() {
  so = !0;
}
Of();
const fs = 1, vs = 2, gu = 4, Nf = 8, Df = 16, zf = 1, Lf = 2, pu = 4, Af = 8, If = 16, mu = 1, Rf = 2, hs = "[", gs = "[!", ps = "]", Zr = {}, Wt = Symbol(), Bf = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/2000/svg", Yf = !1;
function Ji(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Wo = Array.isArray, Xf = Array.prototype.indexOf, ms = Array.from, Ei = Object.keys, Po = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Wf = Object.prototype, Kf = Array.prototype, ys = Object.getPrototypeOf, rl = Object.isExtensible;
function mo(e) {
  return typeof e == "function";
}
const _t = () => {
};
function jf(e) {
  return e();
}
function Mo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const bn = 2, wu = 4, Qi = 8, ws = 16, Gn = 32, Vr = 64, Si = 128, rn = 256, Pi = 512, It = 1024, Hn = 2048, pr = 4096, Wn = 8192, ea = 16384, qf = 32768, lo = 65536, Ff = 1 << 17, Gf = 1 << 19, bu = 1 << 20, Ia = 1 << 21, lr = Symbol("$state"), bs = Symbol("legacy props"), Uf = Symbol("");
function Jf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ev(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function tv() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function nv() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function rv(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ov() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function iv() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function av() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ta(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function tn(e) {
  He = e;
}
let Ye;
function At(e) {
  if (e === null)
    throw ta(), Zr;
  return Ye = e;
}
function Vn() {
  return At(
    /** @type {TemplateNode} */
    /* @__PURE__ */ An(Ye)
  );
}
function X(e) {
  if (He) {
    if (/* @__PURE__ */ An(Ye) !== null)
      throw ta(), Zr;
    Ye = e;
  }
}
function Oe(e = 1) {
  if (He) {
    for (var t = e, n = Ye; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ An(n);
    Ye = n;
  }
}
function Ra() {
  for (var e = 0, t = Ye; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ps) {
        if (e === 0) return t;
        e -= 1;
      } else (n === hs || n === gs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ An(t)
    );
    t.remove(), t = r;
  }
}
function fn(e) {
  if (typeof e != "object" || e === null || lr in e)
    return e;
  const t = ys(e);
  if (t !== Wf && t !== Kf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Wo(e), o = /* @__PURE__ */ Dt(0), i = et, a = (s) => {
    var l = et;
    On(i);
    var u = s();
    return On(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ Dt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && ov();
        var c = n.get(l);
        return c === void 0 ? (c = a(() => /* @__PURE__ */ Dt(u.value)), n.set(l, c)) : G(
          c,
          a(() => fn(u.value))
        ), !0;
      },
      deleteProperty(s, l) {
        var u = n.get(l);
        if (u === void 0)
          l in s && n.set(
            l,
            a(() => /* @__PURE__ */ Dt(Wt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && G(c, d);
          }
          G(u, Wt), ol(o);
        }
        return !0;
      },
      get(s, l, u) {
        var c;
        if (l === lr)
          return e;
        var d = n.get(l), f = l in s;
        if (d === void 0 && (!f || (c = Xn(s, l)) != null && c.writable) && (d = a(() => /* @__PURE__ */ Dt(fn(f ? s[l] : Wt))), n.set(l, d)), d !== void 0) {
          var v = h(d);
          return v === Wt ? void 0 : v;
        }
        return Reflect.get(s, l, u);
      },
      getOwnPropertyDescriptor(s, l) {
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = h(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
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
        if (c !== void 0 || tt !== null && (!d || (u = Xn(s, l)) != null && u.writable)) {
          c === void 0 && (c = a(() => /* @__PURE__ */ Dt(d ? fn(s[l]) : Wt)), n.set(l, c));
          var f = h(c);
          if (f === Wt)
            return !1;
        }
        return d;
      },
      set(s, l, u, c) {
        var d, f = n.get(l), v = l in s;
        if (r && l === "length")
          for (var w = u; w < /** @type {Source<number>} */
          f.v; w += 1) {
            var b = n.get(w + "");
            b !== void 0 ? G(b, Wt) : w in s && (b = a(() => /* @__PURE__ */ Dt(Wt)), n.set(w + "", b));
          }
        f === void 0 ? (!v || (d = Xn(s, l)) != null && d.writable) && (f = a(() => /* @__PURE__ */ Dt(void 0)), G(
          f,
          a(() => fn(u))
        ), n.set(l, f)) : (v = f.v !== Wt, G(
          f,
          a(() => fn(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, l);
        if (x != null && x.set && x.set.call(c, u), !v) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= _.v && G(_, g + 1);
          }
          ol(o);
        }
        return !0;
      },
      ownKeys(s) {
        h(o);
        var l = Reflect.ownKeys(s).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Wt;
        });
        for (var [u, c] of n)
          c.v !== Wt && !(u in s) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        iv();
      }
    }
  );
}
function ol(e, t = 1) {
  G(e, e.v + t);
}
var Kt, xu, $u, _u;
function Ba() {
  if (Kt === void 0) {
    Kt = window, xu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $u = Xn(t, "firstChild").get, _u = Xn(t, "nextSibling").get, rl(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), rl(n) && (n.__t = void 0);
  }
}
function jn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  return $u.call(e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return _u.call(e);
}
function K(e, t) {
  if (!He)
    return /* @__PURE__ */ Lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Lt(Ye)
  );
  if (n === null)
    n = Ye.appendChild(jn());
  else if (t && n.nodeType !== 3) {
    var r = jn();
    return n == null || n.before(r), At(r), r;
  }
  return At(n), n;
}
function Ce(e, t) {
  if (!He) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Lt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ An(n) : n;
  }
  return Ye;
}
function B(e, t = 1, n = !1) {
  let r = He ? Ye : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ An(r);
  if (!He)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var a = jn();
    return r === null ? o == null || o.after(a) : r.before(a), At(a), a;
  }
  return At(r), /** @type {TemplateNode} */
  r;
}
function xs(e) {
  e.textContent = "";
}
function Cu(e) {
  return e === this.v;
}
function $s(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _s(e) {
  return !$s(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var t = bn | Hn, n = et !== null && et.f & bn ? (
    /** @type {Derived} */
    et
  ) : null;
  return tt === null || n !== null && n.f & rn ? t |= rn : tt.f |= bu, {
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
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ qr(e);
  return zu(t), t;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ qr(e);
  return t.equals = _s, t;
}
function ku(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      gn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function sv(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & bn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Eu(e) {
  var t, n = tt;
  vr(sv(e));
  try {
    ku(e), t = Ru(e);
  } finally {
    vr(n);
  }
  return t;
}
function Su(e) {
  var t = Eu(e), n = (ar || e.f & rn) && e.deps !== null ? pr : It;
  pn(e, n), e.equals(t) || (e.v = t, e.wv = Au());
}
function Pu(e) {
  tt === null && et === null && ev(), et !== null && et.f & rn && tt === null && Qf(), jo && Jf();
}
function lv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Or(e, t, n, r = !0) {
  var o = tt, i = {
    ctx: Qe,
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
      ra(i), i.f |= qf;
    } catch (l) {
      throw gn(i), l;
    }
  else t !== null && oa(i);
  var a = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (bu | Si)) === 0;
  if (!a && r && (o !== null && lv(i, o), et !== null && et.f & bn)) {
    var s = (
      /** @type {Derived} */
      et
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return i;
}
function Cs(e) {
  const t = Or(Qi, null, !1);
  return pn(t, It), t.teardown = e, t;
}
function fr(e) {
  Pu();
  var t = tt !== null && (tt.f & Gn) !== 0 && Qe !== null && !Qe.m;
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
function uv(e) {
  return Pu(), uo(e);
}
function cv(e) {
  const t = Or(Vr, e, !0);
  return () => {
    gn(t);
  };
}
function dv(e) {
  const t = Or(Vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Fr(t, () => {
      gn(t), r(void 0);
    }) : (gn(t), r(void 0));
  });
}
function en(e) {
  return Or(wu, e, !1);
}
function pe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = uo(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), Nn(t));
  });
}
function kt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Qe
  );
  uo(() => {
    if (h(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & It && pn(n, pr), co(n) && ra(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function uo(e) {
  return Or(Qi, e, !0);
}
function Te(e, t = [], n = qr) {
  const r = t.map(n);
  return Nr(() => e(...r.map(h)));
}
function Nr(e, t = 0) {
  return Or(Qi | ws | t, e, !0);
}
function qn(e, t = !0) {
  return Or(Qi | Gn, e, !0, t);
}
function Mu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = jo, r = et;
    al(!0), On(null);
    try {
      t.call(null);
    } finally {
      al(n), On(r);
    }
  }
}
function Tu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & Vr ? n.parent = null : gn(n, t), n = r;
  }
}
function fv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Gn || gn(t), t = n;
  }
}
function gn(e, t = !0) {
  var n = !1;
  if ((t || e.f & Gf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ An(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Tu(e, t && !n), Vi(e, 0), pn(e, ea);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Mu(e);
  var s = e.parent;
  s !== null && s.first !== null && Hu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Hu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Fr(e, t) {
  var n = [];
  ks(e, n, !0), Vu(n, () => {
    gn(e), t && t();
  });
}
function Vu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ks(e, t, n) {
  if (!(e.f & Wn)) {
    if (e.f ^= Wn, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || n) && t.push(a);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & lo) !== 0 || (r.f & Gn) !== 0;
      ks(r, t, i ? n : !1), r = o;
    }
  }
}
function To(e) {
  Ou(e, !0);
}
function Ou(e, t) {
  if (e.f & Wn) {
    e.f ^= Wn, e.f & It || (e.f ^= It), co(e) && (pn(e, Hn), oa(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & lo) !== 0 || (n.f & Gn) !== 0;
      Ou(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const vv = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ho = [], Vo = [];
function Nu() {
  var e = Ho;
  Ho = [], Mo(e);
}
function Du() {
  var e = Vo;
  Vo = [], Mo(e);
}
function Ko(e) {
  Ho.length === 0 && queueMicrotask(Nu), Ho.push(e);
}
function hv(e) {
  Vo.length === 0 && vv(Du), Vo.push(e);
}
function il() {
  Ho.length > 0 && Nu(), Vo.length > 0 && Du();
}
let mi = !1, Mi = !1, Ti = null, Cr = !1, jo = !1;
function al(e) {
  jo = e;
}
let ko = [], et = null, Pn = !1;
function On(e) {
  et = e;
}
let tt = null;
function vr(e) {
  tt = e;
}
let hn = null;
function gv(e) {
  hn = e;
}
function zu(e) {
  et !== null && et.f & Ia && (hn === null ? gv([e]) : hn.push(e));
}
let Nt = null, Qt = 0, dn = null;
function pv(e) {
  dn = e;
}
let Lu = 1, Hi = 0, ar = !1;
function Au() {
  return ++Lu;
}
function co(e) {
  var t, n = e.f;
  if (n & Hn)
    return !0;
  if (n & pr) {
    var r = e.deps, o = (n & rn) !== 0;
    if (r !== null) {
      var i, a, s = (n & Pi) !== 0, l = o && tt !== null && !ar, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((t = a == null ? void 0 : a.reactions) != null && t.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Pi), l && d !== null && !(d.f & rn) && (c.f ^= rn);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], co(
          /** @type {Derived} */
          a
        ) && Su(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || tt !== null && !ar) && pn(e, It);
  }
  return !1;
}
function mv(e, t) {
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
function yv(e) {
  return (e.f & ea) === 0 && (e.parent === null || (e.parent.f & Si) === 0);
}
function na(e, t, n, r) {
  if (mi) {
    if (n === null && (mi = !1), yv(t))
      throw e;
    return;
  }
  n !== null && (mi = !0);
  {
    mv(e, t);
    return;
  }
}
function Iu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      hn != null && hn.includes(e) || (i.f & bn ? Iu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Hn) : i.f & It && pn(i, pr), oa(
        /** @type {Effect} */
        i
      )));
    }
}
function Ru(e) {
  var t, n = Nt, r = Qt, o = dn, i = et, a = ar, s = hn, l = Qe, u = Pn, c = e.f;
  Nt = /** @type {null | Value[]} */
  null, Qt = 0, dn = null, ar = (c & rn) !== 0 && (Pn || !Cr || et === null), et = c & (Gn | Vr) ? null : e, hn = null, ll(e.ctx), Pn = !1, Hi++, e.f |= Ia;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Nt !== null) {
      var v;
      if (Vi(e, Qt), f !== null && Qt > 0)
        for (f.length = Qt + Nt.length, v = 0; v < Nt.length; v++)
          f[Qt + v] = Nt[v];
      else
        e.deps = f = Nt;
      if (!ar)
        for (v = Qt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Qt < f.length && (Vi(e, Qt), f.length = Qt);
    if (ia() && dn !== null && !Pn && f !== null && !(e.f & (bn | pr | Hn)))
      for (v = 0; v < /** @type {Source[]} */
      dn.length; v++)
        Iu(
          dn[v],
          /** @type {Effect} */
          e
        );
    return i !== e && (Hi++, dn !== null && (o === null ? o = dn : o.push(.../** @type {Source[]} */
    dn))), d;
  } finally {
    Nt = n, Qt = r, dn = o, et = i, ar = a, hn = s, ll(l), Pn = u, e.f ^= Ia;
  }
}
function wv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Xf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & bn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Nt === null || !Nt.includes(t)) && (pn(t, pr), t.f & (rn | Pi) || (t.f ^= Pi), ku(
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
      wv(e, n[r]);
}
function ra(e) {
  var t = e.f;
  if (!(t & ea)) {
    pn(e, It);
    var n = tt, r = Qe, o = Cr;
    tt = e, Cr = !0;
    try {
      t & ws ? fv(e) : Tu(e), Mu(e);
      var i = Ru(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Lu;
      var a = e.deps, s;
      Yf && Vf && e.f & Hn;
    } catch (l) {
      na(l, e, n, r || e.ctx);
    } finally {
      Cr = o, tt = n;
    }
  }
}
function bv() {
  try {
    tv();
  } catch (e) {
    if (Ti !== null)
      na(e, Ti, null);
    else
      throw e;
  }
}
function Bu() {
  var e = Cr;
  try {
    var t = 0;
    for (Cr = !0; ko.length > 0; ) {
      t++ > 1e3 && bv();
      var n = ko, r = n.length;
      ko = [];
      for (var o = 0; o < r; o++) {
        var i = $v(n[o]);
        xv(i);
      }
      Oo.clear();
    }
  } finally {
    Mi = !1, Cr = e, Ti = null;
  }
}
function xv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (ea | Wn)))
        try {
          co(r) && (ra(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Hu(r) : r.fn = null));
        } catch (o) {
          na(o, r, null, r.ctx);
        }
    }
}
function oa(e) {
  Mi || (Mi = !0, queueMicrotask(Bu));
  for (var t = Ti = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Vr | Gn)) {
      if (!(n & It)) return;
      t.f ^= It;
    }
  }
  ko.push(t);
}
function $v(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Gn | Vr)) !== 0, i = o && (r & It) !== 0;
    if (!i && !(r & Wn)) {
      if (r & wu)
        t.push(n);
      else if (o)
        n.f ^= It;
      else {
        var a = et;
        try {
          et = n, co(n) && ra(n);
        } catch (u) {
          na(u, n, null, n.ctx);
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
function p(e) {
  var t;
  for (il(); ko.length > 0; )
    Mi = !0, Bu(), il();
  return (
    /** @type {T} */
    t
  );
}
function h(e) {
  var t = e.f, n = (t & bn) !== 0;
  if (et !== null && !Pn) {
    if (!(hn != null && hn.includes(e))) {
      var r = et.deps;
      e.rv < Hi && (e.rv = Hi, Nt === null && r !== null && r[Qt] === e ? Qt++ : Nt === null ? Nt = [e] : (!ar || !Nt.includes(e)) && Nt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & rn) && (o.f ^= rn);
  }
  return n && (o = /** @type {Derived} */
  e, co(o) && Su(o)), jo && Oo.has(e) ? Oo.get(e) : e.v;
}
function Nn(e) {
  var t = Pn;
  try {
    return Pn = !0, e();
  } finally {
    Pn = t;
  }
}
const _v = -7169;
function pn(e, t) {
  e.f = e.f & _v | t;
}
function J(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (lr in e)
      Za(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && lr in n && Za(n);
      }
  }
}
function Za(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Za(e[r], t);
      } catch {
      }
    const n = ys(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = yu(n);
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
const Oo = /* @__PURE__ */ new Map();
function Gr(e, t) {
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
// @__NO_SIDE_EFFECTS__
function Dt(e, t) {
  const n = Gr(e);
  return zu(n), n;
}
// @__NO_SIDE_EFFECTS__
function oe(e, t = !1) {
  var n;
  const r = Gr(e);
  return t || (r.equals = _s), so && Qe !== null && Qe.l !== null && ((n = Qe.l).s ?? (n.s = [])).push(r), r;
}
function G(e, t, n = !1) {
  et !== null && !Pn && ia() && et.f & (bn | ws) && !(hn != null && hn.includes(e)) && av();
  let r = n ? fn(t) : t;
  return Ya(e, r);
}
function Ya(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    jo ? Oo.set(e, t) : Oo.set(e, n), e.v = t, e.f & bn && (e.f & Hn && Eu(
      /** @type {Derived} */
      e
    ), pn(e, e.f & rn ? pr : It)), e.wv = Au(), Zu(e, Hn), ia() && tt !== null && tt.f & It && !(tt.f & (Gn | Vr)) && (dn === null ? pv([e]) : dn.push(e));
  }
  return t;
}
function sl(e, t = 1) {
  var n = h(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function Zu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ia(), o = n.length, i = 0; i < o; i++) {
      var a = n[i], s = a.f;
      s & Hn || !r && a === tt || (pn(a, t), s & (It | rn) && (s & bn ? Zu(
        /** @type {Derived} */
        a,
        pr
      ) : oa(
        /** @type {Effect} */
        a
      )));
    }
}
let Qe = null;
function ll(e) {
  Qe = e;
}
function Er(e) {
  return (
    /** @type {T} */
    Es().get(e)
  );
}
function Ur(e, t) {
  return Es().set(e, t), t;
}
function Cv(e) {
  return Es().has(e);
}
function ve(e, t = !1, n) {
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
    r2: Gr(!1)
  }), Cs(() => {
    r.d = !0;
  });
}
function he(e) {
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
          vr(i.effect), On(i.reaction), en(i.fn);
        }
      } finally {
        vr(n), On(r);
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
function Es(e) {
  return Qe === null && Ji(), Qe.c ?? (Qe.c = new Map(kv(Qe) || void 0));
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
function Ev(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Sv = [
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
function Pv(e) {
  return Sv.includes(e);
}
const Mv = {
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
function Tv(e) {
  return e = e.toLowerCase(), Mv[e] ?? e;
}
const Hv = ["touchstart", "touchmove"];
function Vv(e) {
  return Hv.includes(e);
}
const Ov = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Nv(e) {
  return Ov.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Dv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Ko(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function zv(e) {
  He && /* @__PURE__ */ Lt(e) !== null && xs(e);
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
  On(null), vr(null);
  try {
    return e();
  } finally {
    On(t), vr(n);
  }
}
const Yu = /* @__PURE__ */ new Set(), Xa = /* @__PURE__ */ new Set();
function Xu(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || xo.call(t, i), !i.cancelBubble)
      return Av(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ko(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ue(e, t, n, r, o) {
  var i = { capture: r, passive: o }, a = Xu(e, t, n, i);
  (t === document.body || t === window || t === document) && Cs(() => {
    t.removeEventListener(e, a, i);
  });
}
function aa(e) {
  for (var t = 0; t < e.length; t++)
    Yu.add(e[t]);
  for (var n of Xa)
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
    Po(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var d = et, f = tt;
    On(null), vr(null);
    try {
      for (var v, w = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var x = a["__" + o];
          if (x != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Wo(x)) {
              var [_, ...g] = x;
              _.apply(a, [e, ...g]);
            } else
              x.call(a, e);
        } catch (C) {
          v ? w.push(C) : v = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        a = b;
      }
      if (v) {
        for (let C of w)
          queueMicrotask(() => {
            throw C;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, On(d), vr(f);
    }
  }
}
function Ss(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ft(e, t) {
  var n = (
    /** @type {Effect} */
    tt
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  var n = (t & mu) !== 0, r = (t & Rf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (He)
      return Ft(Ye, null), Ye;
    o === void 0 && (o = Ss(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Lt(o)));
    var a = (
      /** @type {TemplateNode} */
      r || xu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ft(s, l);
    } else
      Ft(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & mu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (He)
      return Ft(Ye, null), Ye;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Ss(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Lt(s)
      );
      if (o)
        for (a = document.createDocumentFragment(); /* @__PURE__ */ Lt(l); )
          a.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Lt(l)
          );
      else
        a = /** @type {Element} */
        /* @__PURE__ */ Lt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ft(c, d);
    } else
      Ft(u, u);
    return u;
  };
}
function qe(e = "") {
  if (!He) {
    var t = jn(e + "");
    return Ft(t, t), t;
  }
  var n = Ye;
  return n.nodeType !== 3 && (n.before(n = jn()), At(n)), Ft(n, n), n;
}
function dt() {
  if (He)
    return Ft(Ye, null), Ye;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = jn();
  return e.append(t, n), Ft(t, n), e;
}
function L(e, t) {
  if (He) {
    tt.nodes_end = Ye, Vn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function on(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Wu(e, t) {
  return Ku(e, t);
}
function Iv(e, t) {
  Ba(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = Ye;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Lt(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== hs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ An(i);
    if (!i)
      throw Zr;
    tn(!0), At(
      /** @type {Comment} */
      i
    ), Vn();
    const a = Ku(e, { ...t, anchor: i });
    if (Ye === null || Ye.nodeType !== 8 || /** @type {Comment} */
    Ye.data !== ps)
      throw ta(), Zr;
    return tn(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Zr)
      return t.recover === !1 && nv(), Ba(), xs(n), tn(!1), Wu(e, t);
    throw a;
  } finally {
    tn(r), At(o);
  }
}
const Ar = /* @__PURE__ */ new Map();
function Ku(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: a = !0 }) {
  Ba();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var w = Vv(v);
        t.addEventListener(v, xo, { passive: w });
        var b = Ar.get(v);
        b === void 0 ? (document.addEventListener(v, xo, { passive: w }), Ar.set(v, 1)) : Ar.set(v, b + 1);
      }
    }
  };
  l(ms(Yu)), Xa.add(l);
  var u = void 0, c = dv(() => {
    var d = n ?? t.appendChild(jn());
    return qn(() => {
      if (i) {
        ve({});
        var f = (
          /** @type {ComponentContext} */
          Qe
        );
        f.c = i;
      }
      o && (r.$$events = o), He && Ft(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (tt.nodes_end = Ye), i && he();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, xo);
        var w = (
          /** @type {number} */
          Ar.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, xo), Ar.delete(v)) : Ar.set(v, w);
      }
      Xa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Wa.set(u, c), u;
}
let Wa = /* @__PURE__ */ new WeakMap();
function Rv(e, t) {
  const n = Wa.get(e);
  return n ? (Wa.delete(e), n(t)) : Promise.resolve();
}
function ke(e, t, [n, r] = [0, 0]) {
  He && n === 0 && Vn();
  var o = e, i = null, a = null, s = Wt, l = n > 0 ? lo : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let w = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === hs ? r = 0 : x === gs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Ra(), At(o), tn(!1), w = !0, r = -1);
    }
    s ? (i ? To(i) : v && (i = qn(() => v(o))), a && Fr(a, () => {
      a = null;
    })) : (a ? To(a) : v && (a = qn(() => v(o, [n + 1, r]))), i && Fr(i, () => {
      i = null;
    })), w && tn(!0);
  };
  Nr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = Ye);
}
function No(e, t) {
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
    xs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), or(e, t[0].prev, t[i - 1].next);
  }
  Vu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      s || (r.delete(c.k), or(e, c.prev, c.next)), gn(c.e, !s);
    }
  });
}
function Gt(e, t, n, r, o, i = null) {
  var a = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & gu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    a = He ? At(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Lt(u)
    ) : u.appendChild(jn());
  }
  He && Vn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return Wo(v) ? v : v == null ? [] : ms(v);
  });
  Nr(() => {
    var v = h(f), w = v.length;
    if (d && w === 0)
      return;
    d = w === 0;
    let b = !1;
    if (He) {
      var x = (
        /** @type {Comment} */
        a.data === gs
      );
      x !== (w === 0) && (a = Ra(), At(a), tn(!1), b = !0);
    }
    if (He) {
      for (var _ = null, g, C = 0; C < w; C++) {
        if (Ye.nodeType === 8 && /** @type {Comment} */
        Ye.data === ps) {
          a = /** @type {Comment} */
          Ye, b = !0, tn(!1);
          break;
        }
        var y = v[C], k = r(y, C);
        g = ju(
          Ye,
          s,
          _,
          null,
          y,
          k,
          C,
          o,
          t,
          n
        ), s.items.set(k, g), _ = g;
      }
      w > 0 && At(Ra());
    }
    He || Zv(v, s, a, o, t, r, n), i !== null && (w === 0 ? c ? To(c) : c = qn(() => i(a)) : c !== null && Fr(c, () => {
      c = null;
    })), b && tn(!0), h(f);
  }), He && (a = Ye);
}
function Zv(e, t, n, r, o, i, a) {
  var s, l, u, c, d = (o & Nf) !== 0, f = (o & (fs | vs)) !== 0, v = e.length, w = t.items, b = t.first, x = b, _, g = null, C, y = [], k = [], E, S, V, T;
  if (d)
    for (T = 0; T < v; T += 1)
      E = e[T], S = i(E, T), V = w.get(S), V !== void 0 && ((s = V.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(V));
  for (T = 0; T < v; T += 1) {
    if (E = e[T], S = i(E, T), V = w.get(S), V === void 0) {
      var N = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      g = ju(
        N,
        t,
        g,
        g === null ? t.first : g.next,
        E,
        S,
        T,
        r,
        o,
        a
      ), w.set(S, g), y = [], k = [], x = g.next;
      continue;
    }
    if (f && Yv(V, E, T, o), V.e.f & Wn && (To(V.e), d && ((l = V.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(V))), V !== x) {
      if (_ !== void 0 && _.has(V)) {
        if (y.length < k.length) {
          var I = k[0], z;
          g = I.prev;
          var Y = y[0], P = y[y.length - 1];
          for (z = 0; z < y.length; z += 1)
            cl(y[z], I, n);
          for (z = 0; z < k.length; z += 1)
            _.delete(k[z]);
          or(t, Y.prev, P.next), or(t, g, Y), or(t, P, I), x = I, g = P, T -= 1, y = [], k = [];
        } else
          _.delete(V), cl(V, x, n), or(t, V.prev, V.next), or(t, V, g === null ? t.first : g.next), or(t, g, V), g = V;
        continue;
      }
      for (y = [], k = []; x !== null && x.k !== S; )
        x.e.f & Wn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), k.push(x), x = x.next;
      if (x === null)
        continue;
      V = x;
    }
    y.push(V), g = V, x = V.next;
  }
  if (x !== null || _ !== void 0) {
    for (var H = _ === void 0 ? [] : ms(_); x !== null; )
      x.e.f & Wn || H.push(x), x = x.next;
    var $ = H.length;
    if ($ > 0) {
      var M = o & gu && v === 0 ? n : null;
      if (d) {
        for (T = 0; T < $; T += 1)
          (u = H[T].a) == null || u.measure();
        for (T = 0; T < $; T += 1)
          (c = H[T].a) == null || c.fix();
      }
      Bv(t, H, M, w);
    }
  }
  d && Ko(() => {
    var O;
    if (C !== void 0)
      for (V of C)
        (O = V.a) == null || O.apply();
  }), tt.first = t.first && t.first.e, tt.last = g && g.e;
}
function Yv(e, t, n, r) {
  r & fs && Ya(e.v, t), r & vs ? Ya(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function ju(e, t, n, r, o, i, a, s, l, u) {
  var c = (l & fs) !== 0, d = (l & Df) === 0, f = c ? d ? /* @__PURE__ */ oe(o) : Gr(o) : o, v = l & vs ? Gr(a) : a, w = {
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
    return w.e = qn(() => s(e, f, v, u), He), w.e.prev = n && n.e, w.e.next = r && r.e, n === null ? t.first = w : (n.next = w, n.e.next = w.e), r !== null && (r.prev = w, r.e.prev = w.e), w;
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
      /* @__PURE__ */ An(i)
    );
    o.before(i), i = a;
  }
}
function or(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ps(e, t, n, r, o) {
  var i = e, a = "", s;
  Nr(() => {
    if (a === (a = t() ?? "")) {
      He && Vn();
      return;
    }
    s !== void 0 && (gn(s), s = void 0), a !== "" && (s = qn(() => {
      if (He) {
        Ye.data;
        for (var l = Vn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ An(l);
        if (l === null)
          throw ta(), Zr;
        Ft(Ye, u), i = At(l);
        return;
      }
      var c = a + "", d = Ss(c);
      Ft(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function Tt(e, t, n, r, o) {
  var i;
  He && Vn();
  var a = (i = t.$$slots) == null ? void 0 : i[n], s = !1;
  a === !0 && (a = t[n === "default" ? "children" : n], s = !0), a === void 0 || a(e, s ? () => r : r);
}
function Xv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function Sr(e, t, ...n) {
  var r = e, o = _t, i;
  Nr(() => {
    o !== (o = t()) && (i && (gn(i), i = null), i = qn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, lo), He && (r = Ye);
}
function qu(e, t, n) {
  He && Vn();
  var r = e, o, i;
  Nr(() => {
    o !== (o = t()) && (i && (Fr(i), i = null), o && (i = qn(() => n(r, o))));
  }, lo), He && (r = Ye);
}
function Wv(e, t, n, r, o, i) {
  let a = He;
  He && Vn();
  var s, l, u = null;
  He && Ye.nodeType === 1 && (u = /** @type {Element} */
  Ye, Vn());
  var c = (
    /** @type {TemplateNode} */
    He ? Ye : e
  ), d;
  Nr(() => {
    const f = t() || null;
    var v = f === "svg" ? Zf : null;
    f !== s && (d && (f === null ? Fr(d, () => {
      d = null, l = null;
    }) : f === l ? To(d) : gn(d)), f && f !== l && (d = qn(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), Ft(u, u), r) {
        He && Nv(f) && u.append(document.createComment(""));
        var w = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ Lt(u) : u.appendChild(jn())
        );
        He && (w === null ? tn(!1) : At(w)), r(u, w);
      }
      tt.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, lo), a && (tn(!0), At(c));
}
function st(e, t) {
  Ko(() => {
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
function Mt(e, t, n) {
  en(() => {
    var r = Nn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      uo(() => {
        var a = n();
        J(a), o && $s(i, a) && (i = a, r.update(a));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Fu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Fu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Kv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Fu(e)) && (r && (r += " "), r += t);
  return r;
}
function Cn(e) {
  return typeof e == "object" ? Kv(e) : e ?? "";
}
const dl = [...` 	
\r\f \v\uFEFF`];
function jv(e, t, n) {
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
                var w = e.substring(u, d).trim();
                n += " " + w + ";";
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
function Ht(e, t, n, r, o, i) {
  var a = e.__className;
  if (He || a !== n || a === void 0) {
    var s = jv(n, r, i);
    (!He || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Ea(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function xt(e, t, n, r) {
  var o = e.__style;
  if (He || o !== t) {
    var i = qv(t, r);
    (!He || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Ea(e, n == null ? void 0 : n[0], r[0]), Ea(e, n == null ? void 0 : n[1], r[1], "important")) : Ea(e, n, r));
  return r;
}
const yo = Symbol("class"), xr = Symbol("style"), Gu = Symbol("is custom element"), Uu = Symbol("is html");
function Eo(e) {
  if (He) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          $e(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          $e(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, hv(n), Lv();
  }
}
function Sa(e, t) {
  var n = Ms(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Fv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Ms(e);
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Uf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ju(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1) {
  var i = Ms(e), a = i[Gu], s = !i[Uu];
  let l = He && a;
  l && tn(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = Cn(n.class) : (r || n[yo]) && (n.class = null), n[xr] && (n.style ?? (n.style = null));
  var f = Ju(e);
  for (const C in n) {
    let y = n[C];
    if (c && C === "value" && y == null) {
      e.value = e.__value = "", u[C] = y;
      continue;
    }
    if (C === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ht(e, v, y, r, t == null ? void 0 : t[yo], n[yo]), u[C] = y, u[yo] = n[yo];
      continue;
    }
    if (C === "style") {
      xt(e, y, t == null ? void 0 : t[xr], n[xr]), u[C] = y, u[xr] = n[xr];
      continue;
    }
    var w = u[C];
    if (y !== w) {
      u[C] = y;
      var b = C[0] + C[1];
      if (b !== "$$")
        if (b === "on") {
          const k = {}, E = "$$" + C;
          let S = C.slice(2);
          var x = Pv(S);
          if (Ev(S) && (S = S.slice(0, -7), k.capture = !0), !x && w) {
            if (y != null) continue;
            e.removeEventListener(S, u[E], k), u[E] = null;
          }
          if (y != null)
            if (x)
              e[`__${S}`] = y, aa([S]);
            else {
              let V = function(T) {
                u[C].call(this, T);
              };
              u[E] = Xu(S, e, V, k);
            }
          else x && (e[`__${S}`] = void 0);
        } else if (C === "style")
          $e(e, C, y);
        else if (C === "autofocus")
          Dv(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (C === "__value" || C === "value" && y != null))
          e.value = e.__value = y;
        else if (C === "selected" && c)
          Fv(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var _ = C;
          s || (_ = Tv(_));
          var g = _ === "defaultValue" || _ === "defaultChecked";
          if (y == null && !a && !g)
            if (i[C] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if (_ === "value") {
                let S = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = S, k.value = k.__value = E ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = S, k.checked = E ? S : !1;
              }
            } else
              e.removeAttribute(C);
          else g || f.includes(_) && (a || typeof y != "string") ? e[_] = y : typeof y != "function" && $e(e, _, y);
        }
    }
  }
  return l && tn(!0), u;
}
function Ms(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Gu]: e.nodeName.includes("-"),
      [Uu]: e.namespaceURI === Bf
    })
  );
}
var vl = /* @__PURE__ */ new Map();
function Ju(e) {
  var t = vl.get(e.nodeName);
  if (t) return t;
  vl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = yu(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ys(r);
  }
  return t;
}
var $r, So, yi, Ka, Qu;
const ja = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Rr(this, Ka), Rr(this, $r, /* @__PURE__ */ new WeakMap()), Rr(this, So), Rr(this, yi), ki(this, yi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = yt(this, $r).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), yt(this, $r).set(t, r), Tf(this, Ka, Qu).call(this).observe(t, yt(this, yi)), () => {
      var o = yt(this, $r).get(t);
      o.delete(n), o.size === 0 && (yt(this, $r).delete(t), yt(this, So).unobserve(t));
    };
  }
};
$r = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakSet(), Qu = function() {
  return yt(this, So) ?? ki(this, So, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        ja.entries.set(t.target, t);
        for (var n of yt(this, $r).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
jt(ja, "entries", /* @__PURE__ */ new WeakMap());
let Gv = ja;
var Uv = /* @__PURE__ */ new Gv({
  box: "border-box"
});
function hl(e, t, n) {
  var r = Uv.observe(e, () => n(e[t]));
  en(() => (Nn(() => n(e[t])), r));
}
function gl(e, t) {
  return e === t || (e == null ? void 0 : e[lr]) === t;
}
function Dn(e = {}, t, n, r) {
  return en(() => {
    var o, i;
    return uo(() => {
      o = i, i = [], Nn(() => {
        e !== n(...i) && (t(e, ...i), o && gl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Ko(() => {
        i && gl(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Pa(e) {
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
    const a = /* @__PURE__ */ qr(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => h(a);
  }
  n.b.length && uv(() => {
    pl(t, r), Mo(n.b);
  }), fr(() => {
    const o = Nn(() => n.m.map(jf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && fr(() => {
    pl(t, r), Mo(n.a);
  });
}
function pl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) h(n);
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
function ln(e) {
  Qe === null && Ji(), so && Qe.l !== null ? Qv(Qe).m.push(e) : fr(() => {
    const t = Nn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ts(e) {
  Qe === null && Ji(), ln(() => () => Nn(e));
}
function Jv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function sa() {
  const e = Qe;
  return e === null && Ji(), (t, n, r) => {
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
function Hs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), _t;
  const r = Nn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ir = [];
function cn(e, t) {
  return {
    subscribe: _e(e, t).subscribe
  };
}
function _e(e, t = _t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if ($s(e, s) && (e = s, n)) {
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
  function a(s, l = _t) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || _t), s(
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
    let c = 0, d = _t;
    const f = () => {
      if (c)
        return;
      d();
      const w = t(r ? u[0] : u, a, s);
      i ? a(w) : d = typeof w == "function" ? w : _t;
    }, v = o.map(
      (w, b) => Hs(
        w,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Mo(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return Hs(e, (n) => t = n)(), t;
}
let ci = !1, qa = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ oe(void 0),
    unsubscribe: _t
  });
  if (r.store !== e && !(qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = _t;
    else {
      var o = !0;
      r.unsubscribe = Hs(e, (i) => {
        o ? r.source.v = i : G(r.source, i);
      }), o = !1;
    }
  return e && qa in n ? q(e) : h(r.source);
}
function e1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = _t), e;
}
function Oi(e, t) {
  return e.set(t), t;
}
function ft() {
  const e = {};
  function t() {
    Cs(() => {
      for (var n in e)
        e[n].unsubscribe();
      Po(e, qa, {
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
function Vt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    n1
  );
}
const r1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return h(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = m(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      pu
    )), e.special[t](n), sl(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), sl(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function gt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Gr(0) }, r1);
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
      if (mo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Xn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === lr || t === bs) return !1;
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
function m(e, t, n, r) {
  var o, i = (n & zf) !== 0, a = !so || (n & Lf) !== 0, s = (n & Af) !== 0, l = (n & If) !== 0, u = !1, c;
  s ? [c, u] = t1(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = lr in e || bs in e, f = s && (((o = Xn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, v = (
    /** @type {V} */
    r
  ), w = !0, b = !1, x = () => (b = !0, w && (w = !1, l ? v = Nn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && a && rv(), c = x(), f && f(c));
  var _;
  if (a)
    _ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? x() : (w = !0, b = !1, S);
    };
  else {
    var g = (i ? qr : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    g.f |= Ff, _ = () => {
      var S = h(g);
      return S !== void 0 && (v = /** @type {V} */
      void 0), S === void 0 ? v : S;
    };
  }
  if (!(n & pu))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(S, V) {
      return arguments.length > 0 ? ((!a || !V || C || u) && f(V ? _() : S), S) : _();
    };
  }
  var y = !1, k = /* @__PURE__ */ oe(c), E = /* @__PURE__ */ qr(() => {
    var S = _(), V = h(k);
    return y ? (y = !1, V) : k.v = S;
  });
  return s && h(E), i || (E.equals = _s), function(S, V) {
    if (arguments.length > 0) {
      const T = V ? h(E) : a && s ? fn(S) : S;
      if (!E.equals(T)) {
        if (y = !0, G(k, T), b && v !== void 0 && (v = T), ml(E))
          return S;
        Nn(() => h(E));
      }
      return S;
    }
    return ml(E) ? E.v : h(E);
  };
}
function i1(e) {
  return new a1(e);
}
var rr, mn;
class a1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Rr(this, rr), Rr(this, mn);
    var n, r = /* @__PURE__ */ new Map(), o = (a, s) => {
      var l = /* @__PURE__ */ oe(s);
      return r.set(a, l), l;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return h(r.get(s) ?? o(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === bs ? !0 : (h(r.get(s) ?? o(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return G(r.get(s) ?? o(s, l), l), Reflect.set(a, s, l);
        }
      }
    );
    ki(this, mn, (t.hydrate ? Iv : Wu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), ki(this, rr, i.$$events);
    for (const a of Object.keys(yt(this, mn)))
      a === "$set" || a === "$destroy" || a === "$on" || Po(this, a, {
        get() {
          return yt(this, mn)[a];
        },
        /** @param {any} value */
        set(s) {
          yt(this, mn)[a] = s;
        },
        enumerable: !0
      });
    yt(this, mn).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, yt(this, mn).$destroy = () => {
      Rv(yt(this, mn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    yt(this, mn).$set(t);
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
    yt(this, mn).$destroy();
  }
}
rr = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
let ec;
typeof HTMLElement == "function" && (ec = class extends HTMLElement {
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
      }), this.$$me = cv(() => {
        uo(() => {
          var r;
          this.$$r = !0;
          for (const o of Ei(this.$$c)) {
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
    return Ei(this.$$p_d).find(
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
function le(e, t, n, r, o, i) {
  let a = class extends ec {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ei(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Ei(t).forEach((s) => {
    Po(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = wi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Xn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    Po(a.prototype, s, {
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
function tc(e) {
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
function h1(e) {
  typeof e != "function" && (e = Vs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new sn(r, this._parents);
}
function g1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function p1() {
  return [];
}
function nc(e) {
  return e == null ? p1 : function() {
    return this.querySelectorAll(e);
  };
}
function m1(e) {
  return function() {
    return g1(e.apply(this, arguments));
  };
}
function y1(e) {
  typeof e == "function" ? e = m1(e) : e = nc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var a = t[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(e.call(l, l.__data__, u, a)), o.push(l));
  return new sn(r, o);
}
function rc(e) {
  return function() {
    return this.matches(e);
  };
}
function oc(e) {
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
  return this.select(e == null ? x1 : b1(typeof e == "function" ? e : oc(e)));
}
var _1 = Array.prototype.filter;
function C1() {
  return Array.from(this.children);
}
function k1(e) {
  return function() {
    return _1.call(this.children, e);
  };
}
function E1(e) {
  return this.selectAll(e == null ? C1 : k1(typeof e == "function" ? e : oc(e)));
}
function S1(e) {
  typeof e != "function" && (e = rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new sn(r, this._parents);
}
function ic(e) {
  return new Array(e.length);
}
function P1() {
  return new sn(this._enter || this._groups.map(ic), this._parents);
}
function Ni(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ni.prototype = {
  constructor: Ni,
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
function M1(e) {
  return function() {
    return e;
  };
}
function T1(e, t, n, r, o, i) {
  for (var a = 0, s, l = t.length, u = i.length; a < u; ++a)
    (s = t[a]) ? (s.__data__ = i[a], r[a] = s) : n[a] = new Ni(e, i[a]);
  for (; a < l; ++a)
    (s = t[a]) && (o[a] = s);
}
function H1(e, t, n, r, o, i, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = a.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = a.call(e, i[s], s, i) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = i[s], u.delete(v)) : n[s] = new Ni(e, i[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function V1(e) {
  return e.__data__;
}
function O1(e, t) {
  if (!arguments.length) return Array.from(this, V1);
  var n = t ? H1 : T1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = M1(e));
  for (var i = o.length, a = new Array(i), s = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, v = N1(e.call(c, c && c.__data__, u, r)), w = v.length, b = s[u] = new Array(w), x = a[u] = new Array(w), _ = l[u] = new Array(f);
    n(c, d, b, x, _, v, t);
    for (var g = 0, C = 0, y, k; g < w; ++g)
      if (y = b[g]) {
        for (g >= C && (C = g + 1); !(k = x[C]) && ++C < w; ) ;
        y._next = k || null;
      }
  }
  return a = new sn(a, r), a._enter = s, a._exit = l, a;
}
function N1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function D1() {
  return new sn(this._exit || this._groups.map(ic), this._parents);
}
function z1(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function L1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, a = Math.min(o, i), s = new Array(o), l = 0; l < a; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, w = 0; w < d; ++w)
      (v = u[w] || c[w]) && (f[w] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new sn(s, this._parents);
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
  return new sn(o, this._parents).order();
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
function Y1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var a = r[o];
      if (a) return a;
    }
  return null;
}
function X1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function W1() {
  return !this.node();
}
function K1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, a = o.length, s; i < a; ++i)
      (s = o[i]) && e.call(s, s.__data__, i, o);
  return this;
}
function j1(e) {
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
  return this.each((t == null ? n.local ? q1 : j1 : typeof t == "function" ? n.local ? J1 : U1 : n.local ? G1 : F1)(n, t));
}
function ac(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function eh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function th(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function nh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function rh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? eh : typeof t == "function" ? nh : th)(e, t, n ?? "")) : Jr(this.node(), e);
}
function Jr(e, t) {
  return e.style.getPropertyValue(t) || ac(e).getComputedStyle(e, null).getPropertyValue(t);
}
function oh(e) {
  return function() {
    delete this[e];
  };
}
function ih(e, t) {
  return function() {
    this[e] = t;
  };
}
function ah(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function sh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? oh : typeof t == "function" ? ah : ih)(e, t)) : this.node()[e];
}
function sc(e) {
  return e.trim().split(/^|\s+/);
}
function Os(e) {
  return e.classList || new lc(e);
}
function lc(e) {
  this._node = e, this._names = sc(e.getAttribute("class") || "");
}
lc.prototype = {
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
function uc(e, t) {
  for (var n = Os(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function cc(e, t) {
  for (var n = Os(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lh(e) {
  return function() {
    uc(this, e);
  };
}
function uh(e) {
  return function() {
    cc(this, e);
  };
}
function ch(e, t) {
  return function() {
    (t.apply(this, arguments) ? uc : cc)(this, e);
  };
}
function dh(e, t) {
  var n = sc(e + "");
  if (arguments.length < 2) {
    for (var r = Os(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ch : t ? lh : uh)(n, t));
}
function fh() {
  this.textContent = "";
}
function vh(e) {
  return function() {
    this.textContent = e;
  };
}
function hh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function gh(e) {
  return arguments.length ? this.each(e == null ? fh : (typeof e == "function" ? hh : vh)(e)) : this.node().textContent;
}
function ph() {
  this.innerHTML = "";
}
function mh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function yh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function wh(e) {
  return arguments.length ? this.each(e == null ? ph : (typeof e == "function" ? yh : mh)(e)) : this.node().innerHTML;
}
function bh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xh() {
  return this.each(bh);
}
function $h() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _h() {
  return this.each($h);
}
function Ch(e) {
  var t = typeof e == "function" ? e : tc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function kh() {
  return null;
}
function Eh(e, t) {
  var n = typeof e == "function" ? e : tc(e), r = t == null ? kh : typeof t == "function" ? t : Vs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Sh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ph() {
  return this.each(Sh);
}
function Mh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Th() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Hh(e) {
  return this.select(e ? Th : Mh);
}
function Vh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Oh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Nh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Dh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function zh(e, t, n) {
  return function() {
    var r = this.__on, o, i = Oh(t);
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
function Lh(e, t, n) {
  var r = Nh(e + ""), o, i = r.length, a;
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
  for (s = t ? zh : Dh, o = 0; o < i; ++o) this.each(s(r[o], t, n));
  return this;
}
function dc(e, t, n) {
  var r = ac(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ah(e, t) {
  return function() {
    return dc(this, e, t);
  };
}
function Ih(e, t) {
  return function() {
    return dc(this, e, t.apply(this, arguments));
  };
}
function Rh(e, t) {
  return this.each((typeof t == "function" ? Ih : Ah)(e, t));
}
function* Bh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, a; o < i; ++o)
      (a = r[o]) && (yield a);
}
var fc = [null];
function sn(e, t) {
  this._groups = e, this._parents = t;
}
function qo() {
  return new sn([[document.documentElement]], fc);
}
function Zh() {
  return this;
}
sn.prototype = qo.prototype = {
  constructor: sn,
  select: h1,
  selectAll: y1,
  selectChild: $1,
  selectChildren: E1,
  filter: S1,
  data: O1,
  enter: P1,
  exit: D1,
  join: z1,
  merge: L1,
  selection: Zh,
  order: A1,
  sort: I1,
  call: B1,
  nodes: Z1,
  node: Y1,
  size: X1,
  empty: W1,
  each: K1,
  attr: Q1,
  style: rh,
  property: sh,
  classed: dh,
  text: gh,
  html: wh,
  raise: xh,
  lower: _h,
  append: Ch,
  insert: Eh,
  remove: Ph,
  clone: Hh,
  datum: Vh,
  on: Lh,
  dispatch: Rh,
  [Symbol.iterator]: Bh
};
function vn(e) {
  return typeof e == "string" ? new sn([[document.querySelector(e)]], [document.documentElement]) : new sn([[e]], fc);
}
function Yh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function yn(e, t) {
  if (e = Yh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Xh = { passive: !1 }, Do = { capture: !0, passive: !1 };
function Ma(e) {
  e.stopImmediatePropagation();
}
function Yr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function vc(e) {
  var t = e.document.documentElement, n = vn(e).on("dragstart.drag", Yr, Do);
  "onselectstart" in t ? n.on("selectstart.drag", Yr, Do) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function hc(e, t) {
  var n = e.document.documentElement, r = vn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Yr, Do), setTimeout(function() {
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
function Wh(e) {
  return !e.ctrlKey && !e.button;
}
function Kh() {
  return this.parentNode;
}
function jh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function qh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fh() {
  var e = Wh, t = Kh, n = jh, r = qh, o = {}, i = la("start", "drag", "end"), a = 0, s, l, u, c, d = 0;
  function f(y) {
    y.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, Xh).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(y, k) {
    if (!(c || !e.call(this, y, k))) {
      var E = C(this, t.call(this, y, k), y, k, "mouse");
      E && (vn(y.view).on("mousemove.drag", w, Do).on("mouseup.drag", b, Do), vc(y.view), Ma(y), u = !1, s = y.clientX, l = y.clientY, E("start", y));
    }
  }
  function w(y) {
    if (Yr(y), !u) {
      var k = y.clientX - s, E = y.clientY - l;
      u = k * k + E * E > d;
    }
    o.mouse("drag", y);
  }
  function b(y) {
    vn(y.view).on("mousemove.drag mouseup.drag", null), hc(y.view, u), Yr(y), o.mouse("end", y);
  }
  function x(y, k) {
    if (e.call(this, y, k)) {
      var E = y.changedTouches, S = t.call(this, y, k), V = E.length, T, N;
      for (T = 0; T < V; ++T)
        (N = C(this, S, y, k, E[T].identifier, E[T])) && (Ma(y), N("start", y, E[T]));
    }
  }
  function _(y) {
    var k = y.changedTouches, E = k.length, S, V;
    for (S = 0; S < E; ++S)
      (V = o[k[S].identifier]) && (Yr(y), V("drag", y, k[S]));
  }
  function g(y) {
    var k = y.changedTouches, E = k.length, S, V;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < E; ++S)
      (V = o[k[S].identifier]) && (Ma(y), V("end", y, k[S]));
  }
  function C(y, k, E, S, V, T) {
    var N = i.copy(), I = yn(T || E, k), z, Y, P;
    if ((P = n.call(y, new Ga("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: V,
      active: a,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: N
    }), S)) != null)
      return z = P.x - I[0] || 0, Y = P.y - I[1] || 0, function H($, M, O) {
        var A = I, Z;
        switch ($) {
          case "start":
            o[V] = H, Z = a++;
            break;
          case "end":
            delete o[V], --a;
          // falls through
          case "drag":
            I = yn(O || M, k), Z = a;
            break;
        }
        N.call(
          $,
          y,
          new Ga($, {
            sourceEvent: M,
            subject: P,
            target: f,
            identifier: V,
            active: Z,
            x: I[0] + z,
            y: I[1] + Y,
            dx: I[0] - A[0],
            dy: I[1] - A[1],
            dispatch: N
          }),
          S
        );
      };
  }
  return f.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : di(!!y), f) : e;
  }, f.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : di(y), f) : t;
  }, f.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : di(y), f) : n;
  }, f.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : di(!!y), f) : r;
  }, f.on = function() {
    var y = i.on.apply(i, arguments);
    return y === i ? f : y;
  }, f.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, f) : Math.sqrt(d);
  }, f;
}
function Ns(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function gc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Fo() {
}
var zo = 0.7, Di = 1 / zo, Xr = "\\s*([+-]?\\d+)\\s*", Lo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gh = /^#([0-9a-f]{3,8})$/, Uh = new RegExp(`^rgb\\(${Xr},${Xr},${Xr}\\)$`), Jh = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Qh = new RegExp(`^rgba\\(${Xr},${Xr},${Xr},${Lo}\\)$`), eg = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${Lo}\\)$`), tg = new RegExp(`^hsl\\(${Lo},${Mn},${Mn}\\)$`), ng = new RegExp(`^hsla\\(${Lo},${Mn},${Mn},${Lo}\\)$`), bl = {
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
Ns(Fo, Ao, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xl,
  // Deprecated! Use color.formatHex.
  formatHex: xl,
  formatHex8: rg,
  formatHsl: og,
  formatRgb: $l,
  toString: $l
});
function xl() {
  return this.rgb().formatHex();
}
function rg() {
  return this.rgb().formatHex8();
}
function og() {
  return pc(this).formatHsl();
}
function $l() {
  return this.rgb().formatRgb();
}
function Ao(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Gh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? _l(t) : n === 3 ? new qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? fi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Uh.exec(e)) ? new qt(t[1], t[2], t[3], 1) : (t = Jh.exec(e)) ? new qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qh.exec(e)) ? fi(t[1], t[2], t[3], t[4]) : (t = eg.exec(e)) ? fi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = tg.exec(e)) ? El(t[1], t[2] / 100, t[3] / 100, 1) : (t = ng.exec(e)) ? El(t[1], t[2] / 100, t[3] / 100, t[4]) : bl.hasOwnProperty(e) ? _l(bl[e]) : e === "transparent" ? new qt(NaN, NaN, NaN, 0) : null;
}
function _l(e) {
  return new qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function fi(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new qt(e, t, n, r);
}
function ig(e) {
  return e instanceof Fo || (e = Ao(e)), e ? (e = e.rgb(), new qt(e.r, e.g, e.b, e.opacity)) : new qt();
}
function Ua(e, t, n, r) {
  return arguments.length === 1 ? ig(e) : new qt(e, t, n, r ?? 1);
}
function qt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ns(qt, Ua, gc(Fo, {
  brighter(e) {
    return e = e == null ? Di : Math.pow(Di, e), new qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zo : Math.pow(zo, e), new qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new qt(kr(this.r), kr(this.g), kr(this.b), zi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Cl,
  // Deprecated! Use color.formatHex.
  formatHex: Cl,
  formatHex8: ag,
  formatRgb: kl,
  toString: kl
}));
function Cl() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}`;
}
function ag() {
  return `#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kl() {
  const e = zi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${kr(this.r)}, ${kr(this.g)}, ${kr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function kr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _r(e) {
  return e = kr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function El(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new wn(e, t, n, r);
}
function pc(e) {
  if (e instanceof wn) return new wn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fo || (e = Ao(e)), !e) return new wn();
  if (e instanceof wn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), a = NaN, s = i - o, l = (i + o) / 2;
  return s ? (t === i ? a = (n - r) / s + (n < r) * 6 : n === i ? a = (r - t) / s + 2 : a = (t - n) / s + 4, s /= l < 0.5 ? i + o : 2 - i - o, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new wn(a, s, l, e.opacity);
}
function sg(e, t, n, r) {
  return arguments.length === 1 ? pc(e) : new wn(e, t, n, r ?? 1);
}
function wn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ns(wn, sg, gc(Fo, {
  brighter(e) {
    return e = e == null ? Di : Math.pow(Di, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zo : Math.pow(zo, e), new wn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new qt(
      Ta(e >= 240 ? e - 240 : e + 120, o, r),
      Ta(e, o, r),
      Ta(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new wn(Sl(this.h), vi(this.s), vi(this.l), zi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = zi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Sl(this.h)}, ${vi(this.s) * 100}%, ${vi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Sl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function vi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ta(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const mc = (e) => () => e;
function lg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ug(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function cg(e) {
  return (e = +e) == 1 ? yc : function(t, n) {
    return n - t ? ug(t, n, e) : mc(isNaN(t) ? n : t);
  };
}
function yc(e, t) {
  var n = t - e;
  return n ? lg(e, n) : mc(isNaN(e) ? t : e);
}
const Pl = function e(t) {
  var n = cg(t);
  function r(o, i) {
    var a = n((o = Ua(o)).r, (i = Ua(i)).r), s = n(o.g, i.g), l = n(o.b, i.b), u = yc(o.opacity, i.opacity);
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
var Ja = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ha = new RegExp(Ja.source, "g");
function dg(e) {
  return function() {
    return e;
  };
}
function fg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vg(e, t) {
  var n = Ja.lastIndex = Ha.lastIndex = 0, r, o, i, a = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ja.exec(e)) && (o = Ha.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), s[a] ? s[a] += i : s[++a] = i), (r = r[0]) === (o = o[0]) ? s[a] ? s[a] += o : s[++a] = o : (s[++a] = null, l.push({ i: a, x: ir(r, o) })), n = Ha.lastIndex;
  return n < t.length && (i = t.slice(n), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? l[0] ? fg(l[0].x) : dg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var Ml = 180 / Math.PI, wc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function bc(e, t, n, r, o, i) {
  var a, s, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Ml,
    skewX: Math.atan(l) * Ml,
    scaleX: a,
    scaleY: s
  };
}
var hi;
function hg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? wc : bc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gg(e) {
  return e == null || (hi || (hi = document.createElementNS("http://www.w3.org/2000/svg", "g")), hi.setAttribute("transform", e), !(e = hi.transform.baseVal.consolidate())) ? wc : (e = e.matrix, bc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function xc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      w.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function a(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: ir(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: ir(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, w) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      w.push({ i: b - 4, x: ir(u, d) }, { i: b - 2, x: ir(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), a(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var w = -1, b = f.length, x; ++w < b; ) d[(x = f[w]).i] = x.x(v);
      return d.join("");
    };
  };
}
var pg = xc(hg, "px, ", "px)", "deg)"), mg = xc(gg, ", ", ")", ")"), yg = 1e-12;
function Tl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function wg(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function bg(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const xg = function e(t, n, r) {
  function o(i, a) {
    var s = i[0], l = i[1], u = i[2], c = a[0], d = a[1], f = a[2], v = c - s, w = d - l, b = v * v + w * w, x, _;
    if (b < yg)
      _ = Math.log(f / u) / t, x = function(S) {
        return [
          s + S * v,
          l + S * w,
          u * Math.exp(t * S * _)
        ];
      };
    else {
      var g = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * g), y = (f * f - u * u - r * b) / (2 * f * n * g), k = Math.log(Math.sqrt(C * C + 1) - C), E = Math.log(Math.sqrt(y * y + 1) - y);
      _ = (E - k) / t, x = function(S) {
        var V = S * _, T = Tl(k), N = u / (n * g) * (T * bg(t * V + k) - wg(k));
        return [
          s + N * v,
          l + N * w,
          u * T / Tl(t * V + k)
        ];
      };
    }
    return x.duration = _ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var a = Math.max(1e-3, +i), s = a * a, l = s * s;
    return e(a, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Qr = 0, $o = 0, wo = 0, $c = 1e3, Li, _o, Ai = 0, Pr = 0, ca = 0, Io = typeof performance == "object" && performance.now ? performance : Date, _c = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ds() {
  return Pr || (_c($g), Pr = Io.now() + ca);
}
function $g() {
  Pr = 0;
}
function Ii() {
  this._call = this._time = this._next = null;
}
Ii.prototype = Cc.prototype = {
  constructor: Ii,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ds() : +n) + (t == null ? 0 : +t), !this._next && _o !== this && (_o ? _o._next = this : Li = this, _o = this), this._call = e, this._time = n, Qa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qa());
  }
};
function Cc(e, t, n) {
  var r = new Ii();
  return r.restart(e, t, n), r;
}
function _g() {
  Ds(), ++Qr;
  for (var e = Li, t; e; )
    (t = Pr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Qr;
}
function Hl() {
  Pr = (Ai = Io.now()) + ca, Qr = $o = 0;
  try {
    _g();
  } finally {
    Qr = 0, kg(), Pr = 0;
  }
}
function Cg() {
  var e = Io.now(), t = e - Ai;
  t > $c && (ca -= t, Ai = e);
}
function kg() {
  for (var e, t = Li, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Li = n);
  _o = e, Qa(r);
}
function Qa(e) {
  if (!Qr) {
    $o && ($o = clearTimeout($o));
    var t = e - Pr;
    t > 24 ? (e < 1 / 0 && ($o = setTimeout(Hl, e - Io.now() - ca)), wo && (wo = clearInterval(wo))) : (wo || (Ai = Io.now(), wo = setInterval(Cg, $c)), Qr = 1, _c(Hl));
  }
}
function Vl(e, t, n) {
  var r = new Ii();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var Eg = la("start", "end", "cancel", "interrupt"), Sg = [], kc = 0, Ol = 1, es = 2, xi = 3, Nl = 4, ts = 5, $i = 6;
function da(e, t, n, r, o, i) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (n in a) return;
  Pg(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Eg,
    tween: Sg,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: kc
  });
}
function zs(e, t) {
  var n = kn(e, t);
  if (n.state > kc) throw new Error("too late; already scheduled");
  return n;
}
function In(e, t) {
  var n = kn(e, t);
  if (n.state > xi) throw new Error("too late; already running");
  return n;
}
function kn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Pg(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Cc(i, 0, n.time);
  function i(u) {
    n.state = Ol, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var c, d, f, v;
    if (n.state !== Ol) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === xi) return Vl(a);
        v.state === Nl ? (v.state = $i, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = $i, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (Vl(function() {
      n.state === xi && (n.state = Nl, n.timer.restart(s, n.delay, n.time), s(u));
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
function _i(e, t) {
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
function Mg(e) {
  return this.each(function() {
    _i(this, e);
  });
}
function Tg(e, t) {
  var n, r;
  return function() {
    var o = In(this, e), i = o.tween;
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
    var i = In(this, e), a = i.tween;
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
function Vg(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = kn(this.node(), n).tween, o = 0, i = r.length, a; o < i; ++o)
      if ((a = r[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Tg : Hg)(n, e, t));
}
function Ls(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = In(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return kn(o, r).value[t];
  };
}
function Ec(e, t) {
  var n;
  return (typeof t == "number" ? ir : t instanceof Ao ? Pl : (n = Ao(t)) ? (t = n, Pl) : vg)(e, t);
}
function Og(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ng(e) {
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
function Lg(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ag(e, t, n) {
  var r, o, i;
  return function() {
    var a, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = s + "", a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s)));
  };
}
function Ig(e, t) {
  var n = ua(e), r = n === "transform" ? mg : Ec;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Ag : Lg)(n, r, Ls(this, "attr." + e, t)) : t == null ? (n.local ? Ng : Og)(n) : (n.local ? zg : Dg)(n, r, t));
}
function Rg(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Bg(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Zg(e, t) {
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
    return i !== r && (n = (r = i) && Rg(e, i)), n;
  }
  return o._value = t, o;
}
function Xg(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ua(e);
  return this.tween(n, (r.local ? Zg : Yg)(r, t));
}
function Wg(e, t) {
  return function() {
    zs(this, e).delay = +t.apply(this, arguments);
  };
}
function Kg(e, t) {
  return t = +t, function() {
    zs(this, e).delay = t;
  };
}
function jg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wg : Kg)(t, e)) : kn(this.node(), t).delay;
}
function qg(e, t) {
  return function() {
    In(this, e).duration = +t.apply(this, arguments);
  };
}
function Fg(e, t) {
  return t = +t, function() {
    In(this, e).duration = t;
  };
}
function Gg(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? qg : Fg)(t, e)) : kn(this.node(), t).duration;
}
function Ug(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    In(this, e).ease = t;
  };
}
function Jg(e) {
  var t = this._id;
  return arguments.length ? this.each(Ug(t, e)) : kn(this.node(), t).ease;
}
function Qg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    In(this, e).ease = n;
  };
}
function ep(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Qg(this._id, e));
}
function tp(e) {
  typeof e != "function" && (e = rc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], a = i.length, s = r[o] = [], l, u = 0; u < a; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function np(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = a[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    a[s] = t[s];
  return new Fn(a, this._parents, this._name, this._id);
}
function rp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function op(e, t, n) {
  var r, o, i = rp(t) ? zs : In;
  return function() {
    var a = i(this, e), s = a.on;
    s !== r && (o = (r = s).copy()).on(t, n), a.on = o;
  };
}
function ip(e, t) {
  var n = this._id;
  return arguments.length < 2 ? kn(this.node(), n).on.on(e) : this.each(op(n, e, t));
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
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, da(u[f], t, n, f, u, kn(c, n)));
  return new Fn(i, this._parents, t, n);
}
function up(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = nc(e));
  for (var r = this._groups, o = r.length, i = [], a = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, w = kn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && da(v, t, n, b, f, w);
        i.push(f), a.push(c);
      }
  return new Fn(i, a, t, n);
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
function hp(e, t, n) {
  var r, o, i;
  return function() {
    var a = Jr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Jr(this, e))), a === l ? null : a === r && l === o ? i : (o = l, i = t(r = a, s));
  };
}
function gp(e, t) {
  var n, r, o, i = "style." + t, a = "end." + i, s;
  return function() {
    var l = In(this, e), u = l.on, c = l.value[i] == null ? s || (s = Sc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(a, o = c), l.on = r;
  };
}
function pp(e, t, n) {
  var r = (e += "") == "transform" ? pg : Ec;
  return t == null ? this.styleTween(e, fp(e, r)).on("end.style." + e, Sc(e)) : typeof t == "function" ? this.styleTween(e, hp(e, r, Ls(this, "style." + e, t))).each(gp(this._id, e)) : this.styleTween(e, vp(e, r, t), n).on("end.style." + e, null);
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
function _p(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Cp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && _p(o)), t;
  }
  return r._value = e, r;
}
function kp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Cp(e));
}
function Ep() {
  for (var e = this._name, t = this._id, n = Pc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = kn(l, t);
        da(l, e, n, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Fn(r, this._parents, e, n);
}
function Sp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, a) {
    var s = { value: a }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = In(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Pp = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Pc() {
  return ++Pp;
}
var Bn = qo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: lp,
  selectAll: up,
  selectChild: Bn.selectChild,
  selectChildren: Bn.selectChildren,
  filter: tp,
  merge: np,
  selection: dp,
  transition: Ep,
  call: Bn.call,
  nodes: Bn.nodes,
  node: Bn.node,
  size: Bn.size,
  empty: Bn.empty,
  each: Bn.each,
  on: ip,
  attr: Ig,
  attrTween: Xg,
  style: pp,
  styleTween: wp,
  text: $p,
  textTween: kp,
  remove: sp,
  tween: Vg,
  delay: jg,
  duration: Gg,
  ease: Jg,
  easeVarying: ep,
  end: Sp,
  [Symbol.iterator]: Bn[Symbol.iterator]
};
function Mp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Tp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Mp
};
function Hp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vp(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = Pc(), (n = Tp).time = Ds(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var a = r[i], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && da(l, e, t, u, a, n || Hp(l, t));
  return new Fn(r, this._parents, e, t);
}
qo.prototype.interrupt = Mg;
qo.prototype.transition = Vp;
const gi = (e) => () => e;
function Op(e, {
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
var fa = new Zn(1, 0, 0);
Mc.prototype = Zn.prototype;
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
function Np(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Dp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Dl() {
  return this.__zoom || fa;
}
function zp(e) {
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
function Tc() {
  var e = Np, t = Dp, n = Ap, r = zp, o = Lp, i = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = xg, u = la("start", "zoom", "end"), c, d, f, v = 500, w = 150, b = 0, x = 10;
  function _(P) {
    P.property("__zoom", Dl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", N).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(P, H, $, M) {
    var O = P.selection ? P.selection() : P;
    O.property("__zoom", Dl), P !== O ? k(P, H, $, M) : O.interrupt().each(function() {
      E(this, arguments).event(M).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, _.scaleBy = function(P, H, $, M) {
    _.scaleTo(P, function() {
      var O = this.__zoom.k, A = typeof H == "function" ? H.apply(this, arguments) : H;
      return O * A;
    }, $, M);
  }, _.scaleTo = function(P, H, $, M) {
    _.transform(P, function() {
      var O = t.apply(this, arguments), A = this.__zoom, Z = $ == null ? y(O) : typeof $ == "function" ? $.apply(this, arguments) : $, j = A.invert(Z), F = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(C(g(A, F), Z, j), O, a);
    }, $, M);
  }, _.translateBy = function(P, H, $, M) {
    _.transform(P, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), a);
    }, null, M);
  }, _.translateTo = function(P, H, $, M, O) {
    _.transform(P, function() {
      var A = t.apply(this, arguments), Z = this.__zoom, j = M == null ? y(A) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(fa.translate(j[0], j[1]).scale(Z.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), A, a);
    }, M, O);
  };
  function g(P, H) {
    return H = Math.max(i[0], Math.min(i[1], H)), H === P.k ? P : new Zn(H, P.x, P.y);
  }
  function C(P, H, $) {
    var M = H[0] - $[0] * P.k, O = H[1] - $[1] * P.k;
    return M === P.x && O === P.y ? P : new Zn(P.k, M, O);
  }
  function y(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, H, $, M) {
    P.on("start.zoom", function() {
      E(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var O = this, A = arguments, Z = E(O, A).event(M), j = t.apply(O, A), F = $ == null ? y(j) : typeof $ == "function" ? $.apply(O, A) : $, ue = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), Q = O.__zoom, W = typeof H == "function" ? H.apply(O, A) : H, re = l(Q.invert(F).concat(ue / Q.k), W.invert(F).concat(ue / W.k));
      return function(we) {
        if (we === 1) we = W;
        else {
          var xe = re(we), ce = ue / xe[2];
          we = new Zn(ce, F[0] - xe[0] * ce, F[1] - xe[1] * ce);
        }
        Z.zoom(null, we);
      };
    });
  }
  function E(P, H, $) {
    return !$ && P.__zooming || new S(P, H);
  }
  function S(P, H) {
    this.that = P, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, H), this.taps = 0;
  }
  S.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, H) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var H = vn(this.that).datum();
      u.call(
        P,
        this.that,
        new Op(P, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function V(P, ...H) {
    if (!e.apply(this, arguments)) return;
    var $ = E(this, H).event(P), M = this.__zoom, O = Math.max(i[0], Math.min(i[1], M.k * Math.pow(2, r.apply(this, arguments)))), A = yn(P);
    if ($.wheel)
      ($.mouse[0][0] !== A[0] || $.mouse[0][1] !== A[1]) && ($.mouse[1] = M.invert($.mouse[0] = A)), clearTimeout($.wheel);
    else {
      if (M.k === O) return;
      $.mouse = [A, M.invert(A)], _i(this), $.start();
    }
    bo(P), $.wheel = setTimeout(Z, w), $.zoom("mouse", n(C(g(M, O), $.mouse[0], $.mouse[1]), $.extent, a));
    function Z() {
      $.wheel = null, $.end();
    }
  }
  function T(P, ...H) {
    if (f || !e.apply(this, arguments)) return;
    var $ = P.currentTarget, M = E(this, H, !0).event(P), O = vn(P.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", ue, !0), A = yn(P, $), Z = P.clientX, j = P.clientY;
    vc(P.view), Va(P), M.mouse = [A, this.__zoom.invert(A)], _i(this), M.start();
    function F(Q) {
      if (bo(Q), !M.moved) {
        var W = Q.clientX - Z, re = Q.clientY - j;
        M.moved = W * W + re * re > b;
      }
      M.event(Q).zoom("mouse", n(C(M.that.__zoom, M.mouse[0] = yn(Q, $), M.mouse[1]), M.extent, a));
    }
    function ue(Q) {
      O.on("mousemove.zoom mouseup.zoom", null), hc(Q.view, M.moved), bo(Q), M.event(Q).end();
    }
  }
  function N(P, ...H) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, M = yn(P.changedTouches ? P.changedTouches[0] : P, this), O = $.invert(M), A = $.k * (P.shiftKey ? 0.5 : 2), Z = n(C(g($, A), M, O), t.apply(this, H), a);
      bo(P), s > 0 ? vn(this).transition().duration(s).call(k, Z, M, P) : vn(this).call(_.transform, Z, M, P);
    }
  }
  function I(P, ...H) {
    if (e.apply(this, arguments)) {
      var $ = P.touches, M = $.length, O = E(this, H, P.changedTouches.length === M).event(P), A, Z, j, F;
      for (Va(P), Z = 0; Z < M; ++Z)
        j = $[Z], F = yn(j, this), F = [F, this.__zoom.invert(F), j.identifier], O.touch0 ? !O.touch1 && O.touch0[2] !== F[2] && (O.touch1 = F, O.taps = 0) : (O.touch0 = F, A = !0, O.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (O.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, v)), _i(this), O.start());
    }
  }
  function z(P, ...H) {
    if (this.__zooming) {
      var $ = E(this, H).event(P), M = P.changedTouches, O = M.length, A, Z, j, F;
      for (bo(P), A = 0; A < O; ++A)
        Z = M[A], j = yn(Z, this), $.touch0 && $.touch0[2] === Z.identifier ? $.touch0[0] = j : $.touch1 && $.touch1[2] === Z.identifier && ($.touch1[0] = j);
      if (Z = $.that.__zoom, $.touch1) {
        var ue = $.touch0[0], Q = $.touch0[1], W = $.touch1[0], re = $.touch1[1], we = (we = W[0] - ue[0]) * we + (we = W[1] - ue[1]) * we, xe = (xe = re[0] - Q[0]) * xe + (xe = re[1] - Q[1]) * xe;
        Z = g(Z, Math.sqrt(we / xe)), j = [(ue[0] + W[0]) / 2, (ue[1] + W[1]) / 2], F = [(Q[0] + re[0]) / 2, (Q[1] + re[1]) / 2];
      } else if ($.touch0) j = $.touch0[0], F = $.touch0[1];
      else return;
      $.zoom("touch", n(C(Z, j, F), $.extent, a));
    }
  }
  function Y(P, ...H) {
    if (this.__zooming) {
      var $ = E(this, H).event(P), M = P.changedTouches, O = M.length, A, Z;
      for (Va(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), A = 0; A < O; ++A)
        Z = M[A], $.touch0 && $.touch0[2] === Z.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === Z.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (Z = yn(Z, this), Math.hypot(d[0] - Z[0], d[1] - Z[1]) < x)) {
        var j = vn(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : gi(+P), _) : r;
  }, _.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : gi(!!P), _) : e;
  }, _.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : gi(!!P), _) : o;
  }, _.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : gi([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), _) : t;
  }, _.scaleExtent = function(P) {
    return arguments.length ? (i[0] = +P[0], i[1] = +P[1], _) : [i[0], i[1]];
  }, _.translateExtent = function(P) {
    return arguments.length ? (a[0][0] = +P[0][0], a[1][0] = +P[1][0], a[0][1] = +P[0][1], a[1][1] = +P[1][1], _) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, _.constrain = function(P) {
    return arguments.length ? (n = P, _) : n;
  }, _.duration = function(P) {
    return arguments.length ? (s = +P, _) : s;
  }, _.interpolate = function(P) {
    return arguments.length ? (l = P, _) : l;
  }, _.on = function() {
    var P = u.on.apply(u, arguments);
    return P === u ? _ : P;
  }, _.clickDistance = function(P) {
    return arguments.length ? (b = (P = +P) * P, _) : Math.sqrt(b);
  }, _.tapDistance = function(P) {
    return arguments.length ? (x = +P, _) : x;
  }, _;
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
var Mr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Mr || (Mr = {}));
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
var Me;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Me || (Me = {}));
const zl = {
  [Me.Left]: Me.Right,
  [Me.Right]: Me.Left,
  [Me.Top]: Me.Bottom,
  [Me.Bottom]: Me.Top
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
  const { width: n, height: r } = mr(e), o = e.origin ?? t, i = n * o[0], a = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - a
  };
}, Yp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let a = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (a = i ? t.nodeLookup.get(o) : As(o) ? o : t.nodeLookup.get(o.id));
    const s = a ? Zi(a, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return va(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ha(n);
}, Uo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Zi(r);
      n = va(n, o);
    }
  }), ha(n);
}, Hc = (e, t, [n, r, o] = [0, 0, 1], i = !1, a = !1) => {
  const s = {
    ...Jo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (a && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, w = c.height ?? u.height ?? u.initialHeight ?? null, b = Bo(s, no(u)), x = (v ?? 0) * (w ?? 0), _ = i && b > 0;
    (!u.internals.handleBounds || _ || b >= x || u.dragging) && l.push(u);
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
function Xp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const a = n.get(e), s = a.parentId ? n.get(a.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = a.origin ?? r;
  let d = o;
  if (a.extent === "parent" && !a.expandParent)
    if (!s)
      i == null || i("005", eo.error005());
    else {
      const v = s.measured.width, w = s.measured.height;
      v && w && (d = [
        [l, u],
        [l + v, u + w]
      ]);
    }
  else s && ro(a.extent) && (d = [
    [a.extent[0][0] + l, a.extent[0][1] + u],
    [a.extent[1][0] + l, a.extent[1][1] + u]
  ]);
  const f = ro(d) ? Tr(t, d, a.measured) : t;
  return (a.measured.width === void 0 || a.measured.height === void 0) && (i == null || i("015", eo.error015())), {
    position: {
      x: f.x - l + (a.measured.width ?? 0) * c[0],
      y: f.y - u + (a.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function Vc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((d) => d.id)), a = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = i.has(d.id), v = !f && d.parentId && a.find((w) => w.id === d.parentId);
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
const to = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Tr = (e = { x: 0, y: 0 }, t, n) => ({
  x: to(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: to(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Oc(e, t, n) {
  const { width: r, height: o } = mr(n), { x: i, y: a } = n.internals.positionAbsolute;
  return Tr(e, [
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
}), ha = ({ x: e, y: t, x2: n, y2: r }) => ({
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
}, Dc = (e, t) => ha(va(os(e), os(t))), Bo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Bl = (e) => Yn(e.width) && Yn(e.height) && Yn(e.x) && Yn(e.y), Yn = (e) => !isNaN(e) && isFinite(e), Wp = (e, t) => {
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
}, Yi = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function ro(e) {
  return e !== void 0 && e !== "parent";
}
function mr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Lc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Kp(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, a = r.get(n);
  if (a) {
    const s = a.origin || o;
    i.x += a.internals.positionAbsolute.x - (t.width ?? 0) * s[0], i.y += a.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return i;
}
function Oa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: a } = Kn(e), s = Jo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: a - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Is(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Bs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), jp = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, qp = ["INPUT", "SELECT", "TEXTAREA"];
function Fp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : qp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ac = (e) => "clientX" in e, Kn = (e, t) => {
  var n, r;
  const o = Ac(e), i = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, a = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
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
function Yl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Me.Left:
      return [t - pi(t - r, i), n];
    case Me.Right:
      return [t + pi(r - t, i), n];
    case Me.Top:
      return [t, n - pi(n - o, i)];
    case Me.Bottom:
      return [t, n + pi(o - n, i)];
  }
}
function Ic({ sourceX: e, sourceY: t, sourcePosition: n = Me.Bottom, targetX: r, targetY: o, targetPosition: i = Me.Top, curvature: a = 0.25 }) {
  const [s, l] = Yl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: a
  }), [u, c] = Yl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: a
  }), [d, f, v, w] = Gp({
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
    w
  ];
}
function Rc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  return Bo(a, ha(i)) > 0;
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
  const [o, i, a, s] = Rc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, a, s];
}
const Xl = {
  [Me.Left]: { x: -1, y: 0 },
  [Me.Right]: { x: 1, y: 0 },
  [Me.Top]: { x: 0, y: -1 },
  [Me.Bottom]: { x: 0, y: 1 }
}, n0 = ({ source: e, sourcePosition: t = Me.Bottom, target: n }) => t === Me.Left || t === Me.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Wl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function r0({ source: e, sourcePosition: t = Me.Bottom, target: n, targetPosition: r = Me.Top, center: o, offset: i }) {
  const a = Xl[t], s = Xl[r], l = { x: e.x + a.x * i, y: e.y + a.y * i }, u = { x: n.x + s.x * i, y: n.y + s.y * i }, c = n0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], w, b;
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [g, C, y, k] = Rc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[d] * s[d] === -1) {
    w = o.x ?? g, b = o.y ?? C;
    const E = [
      { x: w, y: l.y },
      { x: w, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    a[d] === f ? v = d === "x" ? E : S : v = d === "x" ? S : E;
  } else {
    const E = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = a.x === f ? S : E : v = a.y === f ? E : S, t === r) {
      const z = Math.abs(e[d] - n[d]);
      if (z <= i) {
        const Y = Math.min(i - 1, i - z);
        a[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * Y : _[d] = (u[d] > n[d] ? -1 : 1) * Y;
      }
    }
    if (t !== r) {
      const z = d === "x" ? "y" : "x", Y = a[d] === s[z], P = l[z] > u[z], H = l[z] < u[z];
      (a[d] === 1 && (!Y && P || Y && H) || a[d] !== 1 && (!Y && H || Y && P)) && (v = d === "x" ? E : S);
    }
    const V = { x: l.x + x.x, y: l.y + x.y }, T = { x: u.x + _.x, y: u.y + _.y }, N = Math.max(Math.abs(V.x - v[0].x), Math.abs(T.x - v[0].x)), I = Math.max(Math.abs(V.y - v[0].y), Math.abs(T.y - v[0].y));
    N >= I ? (w = (V.x + T.x) / 2, b = v[0].y) : (w = v[0].x, b = (V.y + T.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], w, b, y, k];
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
function Xi({ sourceX: e, sourceY: t, sourcePosition: n = Me.Bottom, targetX: r, targetY: o, targetPosition: i = Me.Top, borderRadius: a = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, w] = r0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, _) => {
    let g = "";
    return _ > 0 && _ < c.length - 1 ? g = o0(c[_ - 1], x, c[_ + 1], a) : g = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += g, b;
  }, ""), d, f, v, w];
}
function Kl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function i0(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Kl(n) || !Kl(r))
    return null;
  const o = n.internals.handleBounds || jl(n.handles), i = r.internals.handleBounds || jl(r.handles), a = ql((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = ql(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Mr.Strict ? (i == null ? void 0 : i.target) ?? [] : ((i == null ? void 0 : i.target) ?? []).concat((i == null ? void 0 : i.source) ?? []),
    e.targetHandle
  );
  if (!a || !s)
    return (t = e.onError) == null || t.call(e, "008", eo.error008(a ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (a == null ? void 0 : a.position) || Me.Bottom, u = (s == null ? void 0 : s.position) || Me.Top, c = Zo(n, a, l), d = Zo(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function jl(e) {
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
function Zo(e, t, n = Me.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: a, height: s } = t ?? mr(e);
  if (r)
    return { x: o + a / 2, y: i + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Me.Top:
      return { x: o + a / 2, y: i };
    case Me.Right:
      return { x: o + a, y: i + s / 2 };
    case Me.Bottom:
      return { x: o + a / 2, y: i + s };
    case Me.Left:
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
    case Me.Right:
      a = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], s = [0, -100 * i];
      break;
    case Me.Bottom:
      a[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Me.Left:
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
function Ys(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function u0(e, t, n) {
  const r = Ys(Zs, n);
  for (const o of e.values())
    if (o.parentId)
      Xs(o, e, t, r);
    else {
      const i = Go(o, r.nodeOrigin), a = ro(o.extent) ? o.extent : r.nodeExtent, s = Tr(i, a, mr(o));
      o.internals.positionAbsolute = s;
    }
}
function Bc(e, t, n, r) {
  var o, i;
  const a = Ys(l0, r), s = new Map(t), l = a != null && a.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (a.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Go(u, a.nodeOrigin), f = ro(u.extent) ? u.extent : a.nodeExtent, v = Tr(d, f, mr(u));
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
          z: Zc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Xs(c, t, n, r);
  }
}
function c0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Xs(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: a } = Ys(Zs, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  c0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = d0(e, l, i, a, u), { positionAbsolute: v } = e.internals, w = c !== v.x || d !== v.y;
  (w || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Zc(e, t) {
  return (Yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function d0(e, t, n, r, o) {
  const { x: i, y: a } = t.internals.positionAbsolute, s = mr(e), l = Go(e, n), u = ro(e.extent) ? Tr(l, e.extent, s) : l;
  let c = Tr({ x: i + u.x, y: a + u.y }, r, s);
  e.extent === "parent" && (c = Oc(c, s, t));
  const d = Zc(e, o), f = t.internals.z ?? 0;
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
    const d = l.internals.positionAbsolute, f = mr(l), v = l.origin ?? r, w = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), g = (x - f.width) * v[0], C = (_ - f.height) * v[1];
    (w > 0 || b > 0 || g || C) && (i.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - w + g,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((y) => {
      e.some((k) => k.id === y.id) || i.push({
        id: y.id,
        type: "position",
        position: {
          x: y.position.x + w,
          y: y.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || w || b) && i.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (w ? v[0] * w - g : 0),
        height: _ + (b ? v[1] * b - C : 0)
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
    const w = Bs(f.nodeElement), b = v.measured.width !== w.width || v.measured.height !== w.height;
    if (w.width && w.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), _ = ro(v.extent) ? v.extent : i;
      let { positionAbsolute: g } = v.internals;
      v.parentId && v.extent === "parent" ? g = Oc(g, w, t.get(v.parentId)) : _ && (g = Tr(g, _, w));
      const C = {
        ...v,
        measured: w,
        internals: {
          ...v.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Zl("source", f.nodeElement, x, c, v.id),
            target: Zl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && Xs(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: w
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: no(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = f0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function h0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Yc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: a = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: a, targetHandle: s }, u = `${o}-${a}--${i}-${s}`, c = `${i}-${s}--${o}-${a}`;
    Fl("source", l, c, e, o, a), Fl("target", l, u, e, i, s), t.set(r.id, r);
  }
}
function g0(e, t) {
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
function Na({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  function w({ noDragClassName: x, handleSelector: _, domNode: g, isSelectable: C, nodeId: y, nodeClickDistance: k = 0 }) {
    f = vn(g);
    function E({ x: N, y: I }, z) {
      const { nodeLookup: Y, nodeExtent: P, snapGrid: H, snapToGrid: $, nodeOrigin: M, onNodeDrag: O, onSelectionDrag: A, onError: Z, updateNodePositions: j } = t();
      i = { x: N, y: I };
      let F = !1, ue = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const Q = Uo(s);
        ue = os(Q);
      }
      for (const [Q, W] of s) {
        if (!Y.has(Q))
          continue;
        let re = { x: N - W.distance.x, y: I - W.distance.y };
        $ && (re = Is(re, H));
        let we = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !W.extent) {
          const { positionAbsolute: fe } = W.internals, ie = fe.x - ue.x + P[0][0], ye = fe.x + W.measured.width - ue.x2 + P[1][0], Ge = fe.y - ue.y + P[0][1], We = fe.y + W.measured.height - ue.y2 + P[1][1];
          we = [
            [ie, Ge],
            [ye, We]
          ];
        }
        const { position: xe, positionAbsolute: ce } = Xp({
          nodeId: Q,
          nextPosition: re,
          nodeLookup: Y,
          nodeExtent: we,
          nodeOrigin: M,
          onError: Z
        });
        F = F || W.position.x !== xe.x || W.position.y !== xe.y, W.position = xe, W.internals.positionAbsolute = ce;
      }
      if (F && (j(s, !0), z && (r || O || !y && A))) {
        const [Q, W] = Na({
          nodeId: y,
          dragItems: s,
          nodeLookup: Y
        });
        r == null || r(z, s, Q, W), O == null || O(z, Q, W), y || A == null || A(z, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: N, panBy: I, autoPanSpeed: z, autoPanOnNodeDrag: Y } = t();
      if (!Y) {
        l = !1, cancelAnimationFrame(a);
        return;
      }
      const [P, H] = Nc(u, c, z);
      (P !== 0 || H !== 0) && (i.x = (i.x ?? 0) - P / N[2], i.y = (i.y ?? 0) - H / N[2], await I({ x: P, y: H }) && E(i, null)), a = requestAnimationFrame(S);
    }
    function V(N) {
      var I;
      const { nodeLookup: z, multiSelectionActive: Y, nodesDraggable: P, transform: H, snapGrid: $, snapToGrid: M, selectNodesOnDrag: O, onNodeDragStart: A, onSelectionDragStart: Z, unselectNodesAndEdges: j } = t();
      d = !0, (!O || !C) && !Y && y && ((I = z.get(y)) != null && I.selected || j()), C && O && y && (e == null || e(y));
      const F = Oa(N.sourceEvent, { transform: H, snapGrid: $, snapToGrid: M, containerBounds: c });
      if (i = F, s = p0(z, P, F, y), s.size > 0 && (n || A || !y && Z)) {
        const [ue, Q] = Na({
          nodeId: y,
          dragItems: s,
          nodeLookup: z
        });
        n == null || n(N.sourceEvent, s, ue, Q), A == null || A(N.sourceEvent, ue, Q), y || Z == null || Z(N.sourceEvent, Q);
      }
    }
    const T = Fh().clickDistance(k).on("start", (N) => {
      const { domNode: I, nodeDragThreshold: z, transform: Y, snapGrid: P, snapToGrid: H } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, v = !1, z === 0 && V(N), i = Oa(N.sourceEvent, { transform: Y, snapGrid: P, snapToGrid: H, containerBounds: c }), u = Kn(N.sourceEvent, c);
    }).on("drag", (N) => {
      const { autoPanOnNodeDrag: I, transform: z, snapGrid: Y, snapToGrid: P, nodeDragThreshold: H, nodeLookup: $ } = t(), M = Oa(N.sourceEvent, { transform: z, snapGrid: Y, snapToGrid: P, containerBounds: c });
      if ((N.sourceEvent.type === "touchmove" && N.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !$.has(y)) && (v = !0), !v) {
        if (!l && I && d && (l = !0, S()), !d) {
          const O = M.xSnapped - (i.x ?? 0), A = M.ySnapped - (i.y ?? 0);
          Math.sqrt(O * O + A * A) > H && V(N);
        }
        (i.x !== M.xSnapped || i.y !== M.ySnapped) && s && d && (u = Kn(N.sourceEvent, c), E(M, N.sourceEvent));
      }
    }).on("end", (N) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(a), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: z, onNodeDragStop: Y, onSelectionDragStop: P } = t();
        if (z(s, !1), o || Y || !y && P) {
          const [H, $] = Na({
            nodeId: y,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(N.sourceEvent, s, H, $), Y == null || Y(N.sourceEvent, H, $), y || P == null || P(N.sourceEvent, $);
        }
      }
    }).filter((N) => {
      const I = N.target;
      return !N.button && (!x || !Gl(I, `.${x}`, g)) && (!_ || Gl(I, _, g));
    });
    f.call(T);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: w,
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
      const { x: f, y: v } = Zo(u, d, d.position, !0), w = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      w > t || (w < s ? (a = [{ ...d, x: f, y: v }], s = w) : w === s && a.push({ ...d, x: f, y: v }));
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
  const c = o === "strict" ? (a = u.internals.handleBounds) == null ? void 0 : a[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && i ? { ...d, ...Zo(u, d, d.position, !0) } : d;
}
function Kc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function x0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const jc = () => !0;
function $0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: a, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: w, onConnect: b, onConnectEnd: x, isValidConnection: _ = jc, onReconnectEnd: g, updateConnection: C, getTransform: y, getFromHandle: k, autoPanSpeed: E }) {
  const S = jp(e.target);
  let V = 0, T;
  const { x: N, y: I } = Kn(e), z = S == null ? void 0 : S.elementFromPoint(N, I), Y = Kc(i, z), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !Y)
    return;
  const H = Wc(o, Y, r, l, t);
  if (!H)
    return;
  let $ = Kn(e, P), M = !1, O = null, A = !1, Z = null;
  function j() {
    if (!c || !P)
      return;
    const [xe, ce] = Nc($, P, E);
    f({ x: xe, y: ce }), V = requestAnimationFrame(j);
  }
  const F = {
    ...H,
    nodeId: o,
    type: Y,
    position: H.position
  }, ue = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Zo(ue, F, Me.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: ue,
    to: $,
    toHandle: null,
    toPosition: zl[F.position],
    toNode: null
  };
  C(Q);
  let W = Q;
  w == null || w(e, { nodeId: o, handleId: r, handleType: Y });
  function re(xe) {
    if (!k() || !F) {
      we(xe);
      return;
    }
    const ce = y();
    $ = Kn(xe, P), T = b0(Jo($, ce, !1, [1, 1]), n, l, F), M || (j(), M = !0);
    const fe = qc(xe, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: a ? "target" : "source",
      isValidConnection: _,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Z = fe.handleDomNode, O = fe.connection, A = x0(!!T, fe.isValid);
    const ie = {
      // from stays the same
      ...W,
      isValid: A,
      to: T && A ? zc({ x: T.x, y: T.y }, ce) : $,
      toHandle: fe.toHandle,
      toPosition: A && fe.toHandle ? fe.toHandle.position : zl[F.position],
      toNode: fe.toHandle ? l.get(fe.toHandle.nodeId) : null
    };
    A && T && W.toHandle && ie.toHandle && W.toHandle.type === ie.toHandle.type && W.toHandle.nodeId === ie.toHandle.nodeId && W.toHandle.id === ie.toHandle.id && W.to.x === ie.to.x && W.to.y === ie.to.y || (C(ie), W = ie);
  }
  function we(xe) {
    (T || Z) && O && A && (b == null || b(O));
    const { inProgress: ce, ...fe } = W, ie = {
      ...fe,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(xe, ie), i && (g == null || g(xe, ie)), v(), cancelAnimationFrame(V), M = !1, A = !1, O = null, Z = null, S.removeEventListener("mousemove", re), S.removeEventListener("mouseup", we), S.removeEventListener("touchmove", re), S.removeEventListener("touchend", we);
  }
  S.addEventListener("mousemove", re), S.addEventListener("mouseup", we), S.addEventListener("touchmove", re), S.addEventListener("touchend", we);
}
function qc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: a, lib: s, flowId: l, isValidConnection: u = jc, nodeLookup: c }) {
  const d = i === "target", f = t ? a.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: w } = Kn(e), b = a.elementFromPoint(v, w), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const g = Kc(void 0, x), C = x.getAttribute("data-nodeid"), y = x.getAttribute("data-handleid"), k = x.classList.contains("connectable"), E = x.classList.contains("connectableend");
    if (!C || !g)
      return _;
    const S = {
      source: d ? C : r,
      sourceHandle: d ? y : o,
      target: d ? r : C,
      targetHandle: d ? o : y
    };
    _.connection = S;
    const V = k && E && (n === Mr.Strict ? d && g === "source" || !d && g === "target" : C !== r || y !== o);
    _.isValid = V && u(S), _.toHandle = Wc(C, g, y, c, n, !1);
  }
  return _;
}
const _0 = {
  onPointerDown: $0,
  isValid: qc
};
function C0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = vn(e);
  function i({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const w = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, E = y[2] * Math.pow(2, k);
      t.scaleTo(E);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const y = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], E = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const S = r() * Math.max(y[2], Math.log(y[2])) * (v ? -1 : 1), V = {
        x: y[0] - E[0] * S,
        y: y[1] - E[1] * S
      }, T = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: y[2]
      }, T, s);
    }, g = Tc().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? w : null);
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
const k0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ga = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Da = ({ x: e, y: t, zoom: n }) => fa.translate(e, t).scale(n), Br = (e, t) => e.target.closest(`.${t}`), Fc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), za = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Gc = (e) => {
  const t = e.ctrlKey && Yi() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function E0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: a, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && a) {
      const x = yn(c), _ = Gc(c), g = d * Math.pow(2, _);
      r.scaleTo(n, g, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === cr.Vertical ? 0 : c.deltaX * f, w = o === cr.Horizontal ? 0 : c.deltaY * f;
    !Yi() && c.shiftKey && o !== cr.Vertical && (v = c.deltaY * f, w = 0), r.translateBy(
      n,
      -(v / d) * i,
      -(w / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ga(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function S0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Br(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function P0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, i, a;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ga(r.transform);
    e.mouseButton = ((i = r.sourceEvent) == null ? void 0 : i.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function M0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var a, s;
    e.usedRightMouseButton = !!(n && Fc(t, e.mouseButton ?? 0)), (a = i.sourceEvent) != null && a.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((s = i.sourceEvent) != null && s.internal) && (o == null || o(i.sourceEvent, ga(i.transform)));
  };
}
function T0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (a) => {
    var s;
    if (!((s = a.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, i && Fc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && a.sourceEvent && i(a.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && k0(e.prevViewport, a.transform))) {
      const l = ga(a.transform);
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
function H0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: a, noWheelClassName: s, noPanClassName: l, lib: u }) {
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
    const w = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && w;
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
  }, d = e.getBoundingClientRect(), f = Tc().clickDistance(!Yn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = vn(e).call(f);
  C({
    x: i.x,
    y: i.y,
    zoom: to(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const w = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Gc);
  function x(z, Y) {
    return v ? new Promise((P) => {
      f == null || f.transform(za(v, Y == null ? void 0 : Y.duration, () => P(!0)), z);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: z, noPanClassName: Y, onPaneContextMenu: P, userSelectionActive: H, panOnScroll: $, panOnDrag: M, panOnScrollMode: O, panOnScrollSpeed: A, preventScrolling: Z, zoomOnPinch: j, zoomOnScroll: F, zoomOnDoubleClick: ue, zoomActivationKeyPressed: Q, lib: W, onTransformChange: re }) {
    H && !c.isZoomingOrPanning && g();
    const we = $ && !Q && !H ? E0({
      zoomPanValues: c,
      noWheelClassName: z,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: O,
      panOnScrollSpeed: A,
      zoomOnPinch: j,
      onPanZoomStart: s,
      onPanZoom: a,
      onPanZoomEnd: l
    }) : S0({
      noWheelClassName: z,
      preventScrolling: Z,
      d3ZoomHandler: w
    });
    if (v.on("wheel.zoom", we, { passive: !1 }), !H) {
      const ce = P0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", ce);
      const fe = M0({
        zoomPanValues: c,
        panOnDrag: M,
        onPaneContextMenu: !!P,
        onPanZoom: a,
        onTransformChange: re
      });
      f.on("zoom", fe);
      const ie = T0({
        zoomPanValues: c,
        panOnDrag: M,
        panOnScroll: $,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const xe = H0({
      zoomActivationKeyPressed: Q,
      panOnDrag: M,
      zoomOnScroll: F,
      panOnScroll: $,
      zoomOnDoubleClick: ue,
      zoomOnPinch: j,
      userSelectionActive: H,
      noPanClassName: Y,
      noWheelClassName: z,
      lib: W
    });
    f.filter(xe), ue ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function g() {
    f.on("zoom", null);
  }
  async function C(z, Y, P) {
    const H = Da(z), $ = f == null ? void 0 : f.constrain()(H, Y, P);
    return $ && await x($), new Promise((M) => M($));
  }
  async function y(z, Y) {
    const P = Da(z);
    return await x(P, Y), new Promise((H) => H(P));
  }
  function k(z) {
    if (v) {
      const Y = Da(z), P = v.property("__zoom");
      (P.k !== z.zoom || P.x !== z.x || P.y !== z.y) && (f == null || f.transform(v, Y, null, { sync: !0 }));
    }
  }
  function E() {
    const z = v ? Mc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: z.x, y: z.y, zoom: z.k };
  }
  function S(z, Y) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(za(v, Y == null ? void 0 : Y.duration, () => P(!0)), z);
    }) : Promise.resolve(!1);
  }
  function V(z, Y) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(za(v, Y == null ? void 0 : Y.duration, () => P(!0)), z);
    }) : Promise.resolve(!1);
  }
  function T(z) {
    f == null || f.scaleExtent(z);
  }
  function N(z) {
    f == null || f.translateExtent(z);
  }
  function I(z) {
    const Y = !Yn(z) || z < 0 ? 0 : z;
    f == null || f.clickDistance(Y);
  }
  return {
    update: _,
    destroy: g,
    setViewport: y,
    setViewportConstrained: C,
    getViewport: E,
    scaleTo: S,
    scaleBy: V,
    setScaleExtent: T,
    setTranslateExtent: N,
    syncViewport: k,
    setClickDistance: I
  };
}
var Ul;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Ul || (Ul = {}));
var O0 = /* @__PURE__ */ ae('<div role="button" tabindex="-1"><!></div>');
function hr(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(ue, "$connectable", n), i = () => ne(xe, "$connectionRadius", n), a = () => ne(re, "$domNode", n), s = () => ne(we, "$nodeLookup", n), l = () => ne(W, "$connectionMode", n), u = () => ne(ie, "$lib", n), c = () => ne(Fe, "$autoPanOnConnect", n), d = () => ne(De, "$flowId", n), f = () => ne(fe, "$isValidConnectionStore", n), v = () => ne(Ge, "$onedgecreate", n), w = () => ne(de, "$onConnectAction", n), b = () => ne(Se, "$onConnectStartAction", n), x = () => ne(je, "$onConnectEndAction", n), _ = () => ne(ce, "$viewport", n), g = () => ne(vt, "$connection", n), C = () => ne(Je, "$edges", n), y = () => ne(se, "$connectionLookup", n), k = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe(), T = /* @__PURE__ */ oe(), N = /* @__PURE__ */ oe(), I = /* @__PURE__ */ oe(), z = /* @__PURE__ */ oe();
  let Y = m(t, "id", 12, void 0), P = m(t, "type", 12, "source"), H = m(t, "position", 28, () => Me.Top), $ = m(t, "style", 12, void 0), M = m(t, "isValidConnection", 12, void 0), O = m(t, "onconnect", 12, void 0), A = m(t, "ondisconnect", 12, void 0), Z = m(t, "isConnectable", 12, void 0), j = m(t, "class", 12, void 0);
  const F = Er("svelteflow__node_id"), ue = Er("svelteflow__node_connectable"), Q = rt(), {
    connectionMode: W,
    domNode: re,
    nodeLookup: we,
    connectionRadius: xe,
    viewport: ce,
    isValidConnection: fe,
    lib: ie,
    addEdge: ye,
    onedgecreate: Ge,
    panBy: We,
    cancelConnection: Ie,
    updateConnection: ee,
    autoPanOnConnect: Fe,
    edges: Je,
    connectionLookup: se,
    onconnect: de,
    onconnectstart: Se,
    onconnectend: je,
    flowId: De,
    connection: vt
  } = Q;
  function lt(Ve) {
    const ut = Ac(Ve);
    (ut && Ve.button === 0 || !ut) && _0.onPointerDown(Ve, {
      handleId: h(S),
      nodeId: F,
      isTarget: h(k),
      connectionRadius: i(),
      domNode: a(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: M() ?? f(),
      updateConnection: ee,
      cancelConnection: Ie,
      panBy: We,
      onConnect: (Re) => {
        var Ae;
        const ct = v() ? v()(Re) : Re;
        ct && (ye(ct), (Ae = w()) == null || Ae(Re));
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
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => g().fromHandle
    });
  }
  let te = /* @__PURE__ */ oe(null), Le = /* @__PURE__ */ oe();
  pe(() => J(P()), () => {
    G(k, P() === "target");
  }), pe(
    () => (J(Z()), o()),
    () => {
      G(E, Z() !== void 0 ? Z() : o());
    }
  ), pe(() => J(Y()), () => {
    G(S, Y() || null);
  }), pe(
    () => (J(O()), J(A()), C(), y(), J(P()), J(Y())),
    () => {
      (O() || A()) && (C(), G(Le, y().get(`${F}-${P()}${Y() ? `-${Y()}` : ""}`)));
    }
  ), pe(
    () => (h(te), h(Le), J(A()), J(O())),
    () => {
      if (h(te) && !Ip(h(Le), h(te))) {
        const Ve = h(Le) ?? /* @__PURE__ */ new Map();
        Ll(h(te), Ve, A()), Ll(Ve, h(te), O());
      }
      G(te, h(Le) ?? /* @__PURE__ */ new Map());
    }
  ), pe(() => g(), () => {
    G(V, !!g().fromHandle);
  }), pe(
    () => (g(), J(P()), h(S)),
    () => {
      var Ve, ut, Re;
      G(T, ((Ve = g().fromHandle) == null ? void 0 : Ve.nodeId) === F && ((ut = g().fromHandle) == null ? void 0 : ut.type) === P() && ((Re = g().fromHandle) == null ? void 0 : Re.id) === h(S));
    }
  ), pe(
    () => (g(), J(P()), h(S)),
    () => {
      var Ve, ut, Re;
      G(N, ((Ve = g().toHandle) == null ? void 0 : Ve.nodeId) === F && ((ut = g().toHandle) == null ? void 0 : ut.type) === P() && ((Re = g().toHandle) == null ? void 0 : Re.id) === h(S));
    }
  ), pe(
    () => (l(), g(), J(P()), h(S)),
    () => {
      var Ve, ut, Re;
      G(I, l() === Mr.Strict ? ((Ve = g().fromHandle) == null ? void 0 : Ve.type) !== P() : F !== ((ut = g().fromHandle) == null ? void 0 : ut.nodeId) || h(S) !== ((Re = g().fromHandle) == null ? void 0 : Re.id));
    }
  ), pe(() => (h(N), g()), () => {
    G(z, h(N) && g().isValid);
  }), kt(), Be();
  var me = O0();
  $e(me, "data-nodeid", F);
  let Zt;
  var Yt = K(me);
  Tt(Yt, t, "default", {}), X(me), Te(
    (Ve, ut) => {
      $e(me, "data-handleid", h(S)), $e(me, "data-handlepos", H()), $e(me, "data-id", `${d() ?? ""}-${F ?? ""}-${Y() || ""}-${P() ?? ""}`), Zt = Ht(me, 1, Ve, null, Zt, ut), xt(me, $());
    },
    [
      () => Cn(Bt([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        j()
      ])),
      () => ({
        valid: h(z),
        connectingto: h(N),
        connectingfrom: h(T),
        source: !h(k),
        target: h(k),
        connectablestart: h(E),
        connectableend: h(E),
        connectable: h(E),
        connectionindicator: h(E) && (!h(V) || h(I))
      })
    ],
    be
  ), Ue("mousedown", me, lt), Ue("touchstart", me, lt), L(e, me);
  var un = he({
    get id() {
      return Y();
    },
    set id(Ve) {
      Y(Ve), p();
    },
    get type() {
      return P();
    },
    set type(Ve) {
      P(Ve), p();
    },
    get position() {
      return H();
    },
    set position(Ve) {
      H(Ve), p();
    },
    get style() {
      return $();
    },
    set style(Ve) {
      $(Ve), p();
    },
    get isValidConnection() {
      return M();
    },
    set isValidConnection(Ve) {
      M(Ve), p();
    },
    get onconnect() {
      return O();
    },
    set onconnect(Ve) {
      O(Ve), p();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(Ve) {
      A(Ve), p();
    },
    get isConnectable() {
      return Z();
    },
    set isConnectable(Ve) {
      Z(Ve), p();
    },
    get class() {
      return j();
    },
    set class(Ve) {
      j(Ve), p();
    }
  });
  return r(), un;
}
le(
  hr,
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
var N0 = /* @__PURE__ */ ae("<!> <!>", 1);
function Wi(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition", "sourcePosition"]), ve(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), i = m(t, "sourcePosition", 12, void 0);
  Be();
  var a = N0(), s = Ce(a);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  hr(s, {
    type: "target",
    get position() {
      return h(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ be(() => i() ?? Me.Bottom);
  return hr(c, {
    type: "source",
    get position() {
      return h(d);
    }
  }), Te(() => {
    var f;
    return on(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), L(e, a), he({
    get data() {
      return r();
    },
    set data(f) {
      r(f), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), p();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), p();
    }
  });
}
le(
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
var D0 = /* @__PURE__ */ ae(" <!>", 1);
function Uc(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "sourcePosition"]), ve(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Be(), Oe();
  var i = D0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Bottom);
  return hr(s, {
    type: "source",
    get position() {
      return h(l);
    }
  }), Te(() => {
    var u;
    return on(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), he({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), p();
    }
  });
}
le(Uc, { data: {}, sourcePosition: {} }, [], [], !0);
var z0 = /* @__PURE__ */ ae(" <!>", 1);
function Jc(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, ["data", "targetPosition"]), ve(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Be(), Oe();
  var i = z0(), a = Ce(i), s = B(a);
  const l = /* @__PURE__ */ be(() => o() ?? Me.Top);
  return hr(s, {
    type: "target",
    get position() {
      return h(l);
    }
  }), Te(() => {
    var u;
    return on(a, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, i), he({
    get data() {
      return r();
    },
    set data(u) {
      r(u), p();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), p();
    }
  });
}
le(Jc, { data: {}, targetPosition: {} }, [], [], !0);
function Qc(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  gt(n, []);
}
le(Qc, {}, [], [], !0);
function Jl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ki(e, { target: t, domNode: n }) {
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
function ed(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(i, "$domNode", n), { domNode: i } = rt();
  Be();
  var a = L0(), s = K(a);
  Tt(s, t, "default", {}), X(a), Mt(a, (l, u) => Ki == null ? void 0 : Ki(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, a), he(), r();
}
le(ed, {}, ["default"], [], !0);
function td() {
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
function nd(e, t) {
  ve(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const i = td(), a = Er("svelteflow__edge_id");
  return Be(), ed(e, {
    children: (s, l) => {
      var u = A0();
      let c;
      var d = K(u);
      Tt(d, t, "default", {}), X(u), Te(() => c = xt(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), Ue("keyup", u, () => {
      }), Ue("click", u, () => {
        a && i(a);
      }), L(s, u);
    },
    $$slots: { default: !0 }
  }), he({
    get style() {
      return n();
    },
    set style(s) {
      n(s), p();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), p();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), p();
    }
  });
}
le(nd, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var I0 = /* @__PURE__ */ Ee('<path fill="none" class="svelte-flow__edge-interaction"></path>'), R0 = /* @__PURE__ */ Ee('<path fill="none"></path><!><!>', 1);
function Qo(e, t) {
  ve(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), i = m(t, "labelX", 12, void 0), a = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Be();
  var w = R0(), b = Ce(w), x = B(b);
  {
    var _ = (y) => {
      var k = I0();
      $e(k, "stroke-opacity", 0), $e(k, "stroke-width", v), Te(() => $e(k, "d", r())), L(y, k);
    };
    ke(x, (y) => {
      v && y(_);
    });
  }
  var g = B(x);
  {
    var C = (y) => {
      nd(y, {
        get x() {
          return i();
        },
        get y() {
          return a();
        },
        get style() {
          return s();
        },
        children: (k, E) => {
          Oe();
          var S = qe();
          Te(() => on(S, o())), L(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    ke(g, (y) => {
      o() && y(C);
    });
  }
  return Te(
    (y) => {
      $e(b, "id", n()), $e(b, "d", r()), Ht(b, 0, y), $e(b, "marker-start", l()), $e(b, "marker-end", u()), xt(b, c());
    },
    [
      () => Cn(Bt(["svelte-flow__edge-path", f()]))
    ],
    be
  ), L(e, w), he({
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get path() {
      return r();
    },
    set path(y) {
      r(y), p();
    },
    get label() {
      return o();
    },
    set label(y) {
      o(y), p();
    },
    get labelX() {
      return i();
    },
    set labelX(y) {
      i(y), p();
    },
    get labelY() {
      return a();
    },
    set labelY(y) {
      a(y), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(y) {
      s(y), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(y) {
      l(y), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(y) {
      u(y), p();
    },
    get style() {
      return c();
    },
    set style(y) {
      c(y), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(y) {
      d(y), p();
    },
    get class() {
      return f();
    },
    set class(y) {
      f(y), p();
    }
  });
}
le(
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
function ji(e, t) {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return pe(
    () => (h(r), h(o), h(i), J(f()), J(v()), J(b()), J(x()), J(w()), J(_())),
    () => {
      ((g) => (G(r, g[0]), G(o, g[1]), G(i, g[2])))(Ic({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), he({
    get label() {
      return a();
    },
    set label(g) {
      a(g), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), p();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(g) {
      w(g), p();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), p();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(g) {
      _(g), p();
    }
  });
}
le(
  ji,
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return pe(
    () => (h(r), h(o), h(i), J(f()), J(v()), J(b()), J(x()), J(w()), J(_())),
    () => {
      ((g) => (G(r, g[0]), G(o, g[1]), G(i, g[2])))(Xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _()
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), he({
    get label() {
      return a();
    },
    set label(g) {
      a(g), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), p();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(g) {
      w(g), p();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), p();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(g) {
      _(g), p();
    }
  });
}
le(
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function od(e, t) {
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return pe(
    () => (h(r), h(o), h(i), J(f()), J(v()), J(w()), J(b())),
    () => {
      ((x) => (G(r, x[0]), G(o, x[1]), G(i, x[2])))(is({
        sourceX: f(),
        sourceY: v(),
        targetX: w(),
        targetY: b()
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), he({
    get label() {
      return a();
    },
    set label(x) {
      a(x), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), p();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), p();
    },
    get targetX() {
      return w();
    },
    set targetX(x) {
      w(x), p();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), p();
    }
  });
}
le(
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
    targetX: {},
    targetY: {}
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
  ]), ve(t, !1);
  const r = /* @__PURE__ */ oe(), o = /* @__PURE__ */ oe(), i = /* @__PURE__ */ oe();
  let a = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), w = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), _ = m(t, "targetPosition", 12);
  return pe(
    () => (h(r), h(o), h(i), J(f()), J(v()), J(b()), J(x()), J(w()), J(_())),
    () => {
      ((g) => (G(r, g[0]), G(o, g[1]), G(i, g[2])))(Xi({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: w(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), kt(), Be(), Qo(e, {
    get path() {
      return h(r);
    },
    get labelX() {
      return h(o);
    },
    get labelY() {
      return h(i);
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
  }), he({
    get label() {
      return a();
    },
    set label(g) {
      a(g), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(g) {
      s(g), p();
    },
    get style() {
      return l();
    },
    set style(g) {
      l(g), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(g) {
      u(g), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(g) {
      c(g), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(g) {
      d(g), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(g) {
      f(g), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(g) {
      v(g), p();
    },
    get sourcePosition() {
      return w();
    },
    set sourcePosition(g) {
      w(g), p();
    },
    get targetX() {
      return b();
    },
    set targetX(g) {
      b(g), p();
    },
    get targetY() {
      return x();
    },
    set targetY(g) {
      x(g), p();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(g) {
      _(g), p();
    }
  });
}
le(
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
const Y0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, i = n.set;
  let a = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(a), t.set = (s) => (o(s), i(s), a = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), i(s), a = s, s), t.update = (s) => {
    t.set(s(a));
  }, n.update = (s) => {
    n.set(s(a));
  };
}, X0 = (e, t, n, r = [0, 0], o = Ri) => {
  const { subscribe: i, set: a, update: s } = _e([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Bc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, a(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, w = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: w
  };
}, W0 = (e, t, n, r) => {
  const { subscribe: o, set: i, update: a } = _e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((w) => ({ ...l, ...w })) : f;
    Yc(t, n, v), s = v, i(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, ad = {
  input: Uc,
  output: Jc,
  default: Wi,
  group: Qc
}, sd = {
  straight: od,
  smoothstep: rd,
  default: ji,
  step: id
}, K0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = a ?? Ri;
  Bc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Yc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const w = Uo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Rs(w, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: _e(null),
    nodes: X0(e, s, l, d, f),
    nodeLookup: cn(s),
    parentLookup: cn(l),
    edgeLookup: cn(c),
    visibleNodes: cn([]),
    edges: W0(t, u, c),
    visibleEdges: cn([]),
    connectionLookup: cn(u),
    height: _e(500),
    width: _e(500),
    minZoom: _e(0.5),
    maxZoom: _e(2),
    nodeOrigin: _e(d),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(f),
    translateExtent: _e(Ri),
    autoPanOnNodeDrag: _e(!0),
    autoPanOnConnect: _e(!0),
    fitViewOnInit: _e(!1),
    fitViewOnInitDone: _e(!1),
    fitViewOptions: _e(void 0),
    panZoom: _e(null),
    snapGrid: _e(null),
    dragging: _e(!1),
    selectionRect: _e(null),
    selectionKeyPressed: _e(!1),
    multiselectionKeyPressed: _e(!1),
    deleteKeyPressed: _e(!1),
    panActivationKeyPressed: _e(!1),
    zoomActivationKeyPressed: _e(!1),
    selectionRectMode: _e(null),
    selectionMode: _e(Bi.Partial),
    nodeTypes: _e(ad),
    edgeTypes: _e(sd),
    viewport: _e(v),
    connectionMode: _e(Mr.Strict),
    domNode: _e(null),
    connection: cn(ns),
    connectionLineType: _e(Wr.Bezier),
    connectionRadius: _e(20),
    isValidConnection: _e(() => !0),
    nodesDraggable: _e(!0),
    nodesConnectable: _e(!0),
    elementsSelectable: _e(!0),
    selectNodesOnDrag: _e(!0),
    markers: cn([]),
    defaultMarkerColor: _e("#b1b1b7"),
    lib: cn("svelte"),
    onlyRenderVisibleElements: _e(!1),
    onerror: _e(Wp),
    ondelete: _e(void 0),
    onedgecreate: _e(void 0),
    onconnect: _e(void 0),
    onconnectstart: _e(void 0),
    onconnectend: _e(void 0),
    onbeforedelete: _e(void 0),
    nodesInitialized: _e(!1),
    edgesInitialized: _e(!1),
    viewportInitialized: _e(!1),
    initialized: cn(!1)
  };
};
function j0(e) {
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
    return n ? Hc(t, { x: 0, y: 0, width: r, height: o }, a, !0) : Array.from(t.values());
  });
}
const pa = Symbol();
function ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = K0({
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
      ...ad,
      ...$
    });
  }
  function u($) {
    s.edgeTypes.set({
      ...sd,
      ...$
    });
  }
  function c($) {
    const M = q(s.edges);
    s.edges.set(t0($, M));
  }
  const d = ($, M = !1) => {
    var O;
    const A = q(s.nodeLookup);
    for (const [Z, j] of $) {
      const F = (O = A.get(Z)) == null ? void 0 : O.internals.userNode;
      F && (F.position = j.position, F.dragging = M);
    }
    s.nodes.update((Z) => Z);
  };
  function f($) {
    var M, O, A;
    const Z = q(s.nodeLookup), j = q(s.parentLookup), { changes: F, updatedInternals: ue } = v0($, Z, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ue) {
      if (u0(Z, j, { nodeOrigin: i, nodeExtent: a }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), W = w({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of F) {
        const W = (M = Z.get(Q.id)) == null ? void 0 : M.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const re = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((O = Q.dimensions) == null ? void 0 : O.width) ?? W.width, W.height = ((A = Q.dimensions) == null ? void 0 : A.height) ?? W.height), W.measured = re;
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
  function v($) {
    const M = q(s.panZoom), O = q(s.domNode);
    if (!M || !O)
      return Promise.resolve(!1);
    const { width: A, height: Z } = Bs(O), j = Al(q(s.nodeLookup), $);
    return Il({
      nodes: j,
      width: A,
      height: Z,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: M
    }, $);
  }
  function w($) {
    const M = q(s.panZoom);
    if (!M)
      return !1;
    const O = Al(q(s.nodeLookup), $);
    return Il({
      nodes: O,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: M
    }, $), O.size > 0;
  }
  function b($, M) {
    const O = q(s.panZoom);
    return O ? O.scaleBy($, M) : Promise.resolve(!1);
  }
  function x($) {
    return b(1.2, $);
  }
  function _($) {
    return b(1 / 1.2, $);
  }
  function g($) {
    const M = q(s.panZoom);
    M && (M.setScaleExtent([$, q(s.maxZoom)]), s.minZoom.set($));
  }
  function C($) {
    const M = q(s.panZoom);
    M && (M.setScaleExtent([q(s.minZoom), $]), s.maxZoom.set($));
  }
  function y($) {
    const M = q(s.panZoom);
    M && (M.setTranslateExtent($), s.translateExtent.set($));
  }
  function k($) {
    let M = !1;
    return $.forEach((O) => {
      O.selected && (O.selected = !1, M = !0);
    }), M;
  }
  function E($) {
    var M;
    (M = q(s.panZoom)) == null || M.setClickDistance($);
  }
  function S($) {
    k(($ == null ? void 0 : $.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k(($ == null ? void 0 : $.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async ($) => {
    var M;
    if ($) {
      const O = q(s.nodes), A = q(s.edges), Z = O.filter((Q) => Q.selected), j = A.filter((Q) => Q.selected), { nodes: F, edges: ue } = await Vc({
        nodesToRemove: Z,
        edgesToRemove: j,
        nodes: O,
        edges: A,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (F.length || ue.length) && (s.nodes.update((Q) => Q.filter((W) => !F.some((re) => re.id === W.id))), s.edges.update((Q) => Q.filter((W) => !ue.some((re) => re.id === W.id))), (M = q(s.ondelete)) == null || M({
        nodes: F,
        edges: ue
      }));
    }
  });
  function V($) {
    const M = q(s.multiselectionKeyPressed);
    s.nodes.update((O) => O.map((A) => {
      const Z = $.includes(A.id), j = M && A.selected || Z;
      return A.selected = j, A;
    })), M || s.edges.update((O) => O.map((A) => (A.selected = !1, A)));
  }
  function T($) {
    const M = q(s.multiselectionKeyPressed);
    s.edges.update((O) => O.map((A) => {
      const Z = $.includes(A.id), j = M && A.selected || Z;
      return A.selected = j, A;
    })), M || s.nodes.update((O) => O.map((A) => (A.selected = !1, A)));
  }
  function N($) {
    var M;
    const O = (M = q(s.nodes)) == null ? void 0 : M.find((A) => A.id === $);
    if (!O) {
      console.warn("012", eo.error012($));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), O.selected ? O.selected && q(s.multiselectionKeyPressed) && S({ nodes: [O], edges: [] }) : V([$]);
  }
  function I($) {
    const M = q(s.viewport);
    return h0({
      delta: $,
      panZoom: q(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const z = _e(ns), Y = ($) => {
    z.set({ ...$ });
  };
  function P() {
    z.set(ns);
  }
  function H() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), S(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: j0(s),
    visibleNodes: q0(s),
    connection: ur([z, s.viewport], ([$, M]) => $.inProgress ? {
      ...$,
      to: Jo($.to, [M.x, M.y, M.zoom])
    } : { ...$ }),
    markers: ur([s.edges, s.defaultMarkerColor, s.flowId], ([$, M, O]) => a0($, { defaultColor: M, id: O })),
    initialized: (() => {
      let $ = !1;
      const M = q(s.nodes).length, O = q(s.edges).length;
      return ur([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([A, Z, j]) => $ || (M === 0 ? $ = j : O === 0 ? $ = j && A : $ = j && A && Z, $));
    })(),
    // actions
    syncNodeStores: ($) => B0(s.nodes, $),
    syncEdgeStores: ($) => Z0(s.edges, $),
    syncViewport: ($) => Y0(s.panZoom, s.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: _,
    fitView: ($) => v($),
    setMinZoom: g,
    setMaxZoom: C,
    setTranslateExtent: y,
    setPaneClickDistance: E,
    unselectNodesAndEdges: S,
    addSelectedNodes: V,
    addSelectedEdges: T,
    handleNodeSelection: N,
    panBy: I,
    updateConnection: Y,
    cancelConnection: P,
    reset: H
  };
}
function rt() {
  const e = Er(pa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function F0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a }) {
  const s = ld({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: a });
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
function ud(e, t) {
  ve(t, !1), st(e, U0);
  const [n, r] = ft(), o = () => ne(O, "$panActivationKeyPressed", n), i = () => ne(Y, "$minZoom", n), a = () => ne(P, "$maxZoom", n), s = () => ne(A, "$zoomActivationKeyPressed", n), l = () => ne(z, "$selectionRect", n), u = () => ne($, "$translateExtent", n), c = () => ne(M, "$lib", n), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let w = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), _ = m(t, "onMoveEnd", 12, void 0), g = m(t, "panOnScrollMode", 12), C = m(t, "preventScrolling", 12), y = m(t, "zoomOnScroll", 12), k = m(t, "zoomOnDoubleClick", 12), E = m(t, "zoomOnPinch", 12), S = m(t, "panOnDrag", 12), V = m(t, "panOnScroll", 12), T = m(t, "paneClickDistance", 12);
  const {
    viewport: N,
    panZoom: I,
    selectionRect: z,
    minZoom: Y,
    maxZoom: P,
    dragging: H,
    translateExtent: $,
    lib: M,
    panActivationKeyPressed: O,
    zoomActivationKeyPressed: A,
    viewportInitialized: Z
  } = rt(), j = (W) => N.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  ln(() => {
    Oi(Z, !0);
  }), pe(() => J(w()), () => {
    G(d, w() || { x: 0, y: 0, zoom: 1 });
  }), pe(
    () => (o(), J(S())),
    () => {
      G(f, o() || S());
    }
  ), pe(
    () => (o(), J(V())),
    () => {
      G(v, o() || V());
    }
  ), kt(), Be();
  var F = G0(), ue = K(F);
  Tt(ue, t, "default", {}), X(F), Mt(F, (W, re) => Ql == null ? void 0 : Ql(W, re), () => ({
    viewport: N,
    minZoom: i(),
    maxZoom: a(),
    initialViewport: h(d),
    dragging: H,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: y(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: E(),
    panOnScroll: h(v),
    panOnDrag: h(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: g() || cr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: T(),
    onTransformChange: j
  })), L(e, F);
  var Q = he({
    get initialViewport() {
      return w();
    },
    set initialViewport(W) {
      w(W), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(W) {
      b(W), p();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), p();
    },
    get onMoveEnd() {
      return _();
    },
    set onMoveEnd(W) {
      _(W), p();
    },
    get panOnScrollMode() {
      return g();
    },
    set panOnScrollMode(W) {
      g(W), p();
    },
    get preventScrolling() {
      return C();
    },
    set preventScrolling(W) {
      C(W), p();
    },
    get zoomOnScroll() {
      return y();
    },
    set zoomOnScroll(W) {
      y(W), p();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), p();
    },
    get zoomOnPinch() {
      return E();
    },
    set zoomOnPinch(W) {
      E(W), p();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), p();
    },
    get panOnScroll() {
      return V();
    },
    set panOnScroll(W) {
      V(W), p();
    },
    get paneClickDistance() {
      return T();
    },
    set paneClickDistance(W) {
      T(W), p();
    }
  });
  return r(), Q;
}
le(
  ud,
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
function cd(e, t) {
  ve(t, !1), st(e, Q0);
  const [n, r] = ft(), o = () => ne(P, "$panActivationKeyPressed", n), i = () => ne(z, "$selectionKeyPressed", n), a = () => ne(N, "$selectionRect", n), s = () => ne(T, "$elementsSelectable", n), l = () => ne(I, "$selectionRectMode", n), u = () => ne(E, "$edges", n), c = () => ne(k, "$nodeLookup", n), d = () => ne(S, "$viewport", n), f = () => ne(Y, "$selectionMode", n), v = () => ne(V, "$dragging", n), w = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe();
  let _ = m(t, "panOnDrag", 12, void 0), g = m(t, "selectionOnDrag", 12, void 0);
  const C = sa(), {
    nodes: y,
    nodeLookup: k,
    edges: E,
    viewport: S,
    dragging: V,
    elementsSelectable: T,
    selectionRect: N,
    selectionRectMode: I,
    selectionKeyPressed: z,
    selectionMode: Y,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: H
  } = rt();
  let $ = /* @__PURE__ */ oe(), M = null, O = [], A = !1;
  function Z(ie) {
    if (A) {
      A = !1;
      return;
    }
    C("paneclick", { event: ie }), H(), I.set(null);
  }
  function j(ie) {
    var ye, Ge;
    if (M = h($).getBoundingClientRect(), !T || !h(b) || ie.button !== 0 || ie.target !== h($) || !M)
      return;
    (Ge = (ye = ie.target) == null ? void 0 : ye.setPointerCapture) == null || Ge.call(ye, ie.pointerId);
    const { x: We, y: Ie } = Kn(ie, M);
    H(), N.set({
      width: 0,
      height: 0,
      startX: We,
      startY: Ie,
      x: We,
      y: Ie
    });
  }
  function F(ie) {
    if (!h(b) || !M || !a())
      return;
    A = !0;
    const ye = Kn(ie, M), Ge = a().startX ?? 0, We = a().startY ?? 0, Ie = {
      ...a(),
      x: ye.x < Ge ? ye.x : Ge,
      y: ye.y < We ? ye.y : We,
      width: Math.abs(ye.x - Ge),
      height: Math.abs(ye.y - We)
    }, ee = O.map((de) => de.id), Fe = rs(O, u()).map((de) => de.id);
    O = Hc(
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
    const Je = rs(O, u()).map((de) => de.id), se = O.map((de) => de.id);
    (ee.length !== se.length || se.some((de) => !ee.includes(de))) && y.update((de) => de.map(tu(se))), (Fe.length !== Je.length || Je.some((de) => !Fe.includes(de))) && E.update((de) => de.map(tu(Je))), I.set("user"), N.set(Ie);
  }
  function ue(ie) {
    var ye, Ge;
    ie.button === 0 && ((Ge = (ye = ie.target) == null ? void 0 : ye.releasePointerCapture) == null || Ge.call(ye, ie.pointerId), !h(b) && l() === "user" && ie.target === h($) && (Z == null || Z(ie)), N.set(null), O.length > 0 && Oi(I, "nodes"), i() && (A = !1));
  }
  const Q = (ie) => {
    var ye;
    if (Array.isArray(h(w)) && (ye = h(w)) != null && ye.includes(2)) {
      ie.preventDefault();
      return;
    }
    C("panecontextmenu", { event: ie });
  };
  pe(
    () => (o(), J(_())),
    () => {
      G(w, o() || _());
    }
  ), pe(
    () => (i(), a(), J(g()), h(w)),
    () => {
      G(b, i() || a() || g() && h(w) !== !0);
    }
  ), pe(
    () => (s(), h(b), l()),
    () => {
      G(x, s() && (h(b) || l() === "user"));
    }
  ), kt(), Be();
  var W = J0(), re = /* @__PURE__ */ ze(() => h(x) ? void 0 : eu(Z, h($))), we = /* @__PURE__ */ ze(() => eu(Q, h($)));
  let xe;
  var ce = K(W);
  Tt(ce, t, "default", {}), X(W), Dn(W, (ie) => G($, ie), () => h($)), Te(
    (ie) => xe = Ht(W, 1, "svelte-flow__pane svelte-1esy7hx", null, xe, ie),
    [
      () => ({
        draggable: _() === !0 || Array.isArray(_()) && _().includes(0),
        dragging: v(),
        selection: h(b)
      })
    ],
    be
  ), Ue("click", W, function(...ie) {
    var ye;
    (ye = h(re)) == null || ye.apply(this, ie);
  }), Ue("pointerdown", W, function(...ie) {
    var ye;
    (ye = h(x) ? j : void 0) == null || ye.apply(this, ie);
  }), Ue("pointermove", W, function(...ie) {
    var ye;
    (ye = h(x) ? F : void 0) == null || ye.apply(this, ie);
  }), Ue("pointerup", W, function(...ie) {
    var ye;
    (ye = h(x) ? ue : void 0) == null || ye.apply(this, ie);
  }), Ue("contextmenu", W, function(...ie) {
    var ye;
    (ye = h(we)) == null || ye.apply(this, ie);
  }), L(e, W);
  var fe = he({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(ie) {
      _(ie), p();
    },
    get selectionOnDrag() {
      return g();
    },
    set selectionOnDrag(ie) {
      g(ie), p();
    }
  });
  return r(), fe;
}
le(cd, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var em = /* @__PURE__ */ ae('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const tm = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function dd(e, t) {
  ve(t, !1), st(e, tm);
  const [n, r] = ft(), o = () => ne(i, "$viewport", n), { viewport: i } = rt();
  Be();
  var a = em(), s = K(a);
  Tt(s, t, "default", {}), X(a), Te(() => xt(a, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, a), he(), r();
}
le(dd, {}, ["default"], [], !0);
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
function fd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(we, "$nodeTypes", n), i = () => ne(ye, "$elementsSelectable", n), a = () => ne(Ge, "$nodesDraggable", n), s = () => ne(Fe, "$connectableStore", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), w = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), _ = m(t, "selectable", 13, void 0), g = m(t, "connectable", 13, !0), C = m(t, "deletable", 13, !0), y = m(t, "hidden", 13, !1), k = m(t, "dragging", 13, !1), E = m(t, "resizeObserver", 13, null), S = m(t, "style", 13, void 0), V = m(t, "type", 13, "default"), T = m(t, "isParent", 13, !1), N = m(t, "positionX", 13), I = m(t, "positionY", 13), z = m(t, "sourcePosition", 13, void 0), Y = m(t, "targetPosition", 13, void 0), P = m(t, "zIndex", 13), H = m(t, "measuredWidth", 13, void 0), $ = m(t, "measuredHeight", 13, void 0), M = m(t, "initialWidth", 13, void 0), O = m(t, "initialHeight", 13, void 0), A = m(t, "width", 13, void 0), Z = m(t, "height", 13, void 0), j = m(t, "dragHandle", 13, void 0), F = m(t, "initialized", 13, !1), ue = m(t, "parentId", 13, void 0), Q = m(t, "nodeClickDistance", 13, void 0), W = m(t, "class", 13, "");
  const re = rt(), {
    nodeTypes: we,
    nodeDragThreshold: xe,
    selectNodesOnDrag: ce,
    handleNodeSelection: fe,
    updateNodeInternals: ie,
    elementsSelectable: ye,
    nodesDraggable: Ge
  } = re;
  let We = /* @__PURE__ */ oe(void 0, !0), Ie = /* @__PURE__ */ oe(null, !0);
  const ee = sa(), Fe = _e(g());
  let Je = /* @__PURE__ */ oe(void 0, !0), se = /* @__PURE__ */ oe(void 0, !0), de = /* @__PURE__ */ oe(void 0, !0);
  Ur("svelteflow__node_id", v()), Ur("svelteflow__node_connectable", Fe), Ts(() => {
    var te;
    h(Ie) && ((te = E()) == null || te.unobserve(h(Ie)));
  });
  function Se(te) {
    _() && (!q(ce) || !x() || q(xe) > 0) && fe(v()), ee("nodeclick", { node: f().internals.userNode, event: te });
  }
  pe(() => J(V()), () => {
    G(l, V() || "default");
  }), pe(() => (o(), h(l)), () => {
    G(u, !!o()[h(l)]);
  }), pe(
    () => (o(), h(l), Wi),
    () => {
      G(c, o()[h(l)] || Wi);
    }
  ), pe(
    () => (h(u), J(V())),
    () => {
      h(u) || console.warn("003", eo.error003(V()));
    }
  ), pe(
    () => (J(A()), J(Z()), J(M()), J(O()), J(H()), J($())),
    () => {
      G(d, nm({
        width: A(),
        height: Z(),
        initialWidth: M(),
        initialHeight: O(),
        measuredWidth: H(),
        measuredHeight: $()
      }));
    }
  ), pe(() => J(g()), () => {
    Fe.set(!!g());
  }), pe(
    () => (h(Je), h(l), h(se), J(z()), h(de), J(Y()), J(v()), h(We)),
    () => {
      (h(Je) && h(l) !== h(Je) || h(se) && z() !== h(se) || h(de) && Y() !== h(de)) && requestAnimationFrame(() => ie(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: h(We),
            force: !0
          }
        ]
      ]))), G(Je, h(l)), G(se, z()), G(de, Y());
    }
  ), pe(
    () => (J(E()), h(We), h(Ie), J(F())),
    () => {
      E() && (h(We) !== h(Ie) || !F()) && (h(Ie) && E().unobserve(h(Ie)), h(We) && E().observe(h(We)), G(Ie, h(We)));
    }
  ), kt(), Be(!0);
  var je = dt(), De = Ce(je);
  {
    var vt = (te) => {
      var Le = rm();
      let me, Zt;
      var Yt = K(Le);
      const un = /* @__PURE__ */ be(() => b() ?? !1), Ve = /* @__PURE__ */ be(() => _() ?? i() ?? !0), ut = /* @__PURE__ */ be(() => C() ?? !0), Re = /* @__PURE__ */ be(() => x() ?? a() ?? !0);
      qu(Yt, () => h(c), (Ae, ct) => {
        ct(Ae, {
          get data() {
            return w();
          },
          get id() {
            return v();
          },
          get selected() {
            return h(un);
          },
          get selectable() {
            return h(Ve);
          },
          get deletable() {
            return h(ut);
          },
          get sourcePosition() {
            return z();
          },
          get targetPosition() {
            return Y();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return h(Re);
          },
          get dragHandle() {
            return j();
          },
          get parentId() {
            return ue();
          },
          get type() {
            return h(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return N();
          },
          get positionAbsoluteY() {
            return I();
          },
          get width() {
            return A();
          },
          get height() {
            return Z();
          }
        });
      }), X(Le), Mt(Le, (Ae, ct) => qi == null ? void 0 : qi(Ae, ct), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: j(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: fe,
        onDrag: (Ae, ct, Jt, St) => {
          ee("nodedrag", { event: Ae, targetNode: Jt, nodes: St });
        },
        onDragStart: (Ae, ct, Jt, St) => {
          ee("nodedragstart", { event: Ae, targetNode: Jt, nodes: St });
        },
        onDragStop: (Ae, ct, Jt, St) => {
          ee("nodedragstop", { event: Ae, targetNode: Jt, nodes: St });
        },
        store: re
      })), Dn(Le, (Ae) => G(We, Ae), () => h(We)), en(() => Ue("click", Le, Se)), en(() => Ue("mouseenter", Le, (Ae) => ee("nodemouseenter", { node: f(), event: Ae }))), en(() => Ue("mouseleave", Le, (Ae) => ee("nodemouseleave", { node: f(), event: Ae }))), en(() => Ue("mousemove", Le, (Ae) => ee("nodemousemove", { node: f(), event: Ae }))), en(() => Ue("contextmenu", Le, (Ae) => ee("nodecontextmenu", { node: f(), event: Ae }))), Te(
        (Ae, ct) => {
          $e(Le, "data-id", v()), me = Ht(Le, 1, Ae, null, me, ct), Zt = xt(Le, `${S() ?? ""};${h(d).width ?? ""}${h(d).height ?? ""}`, Zt, {
            "z-index": P(),
            transform: `translate(${N() ?? ""}px, ${I() ?? ""}px)`,
            visibility: F() ? "visible" : "hidden"
          });
        },
        [
          () => Cn(Bt([
            "svelte-flow__node",
            `svelte-flow__node-${h(l)}`,
            W()
          ])),
          () => ({
            dragging: k(),
            selected: b(),
            draggable: x(),
            connectable: g(),
            selectable: _(),
            nopan: x(),
            parent: T()
          })
        ],
        be
      ), L(te, Le);
    };
    ke(De, (te) => {
      y() || te(vt);
    });
  }
  L(e, je);
  var lt = he({
    get node() {
      return f();
    },
    set node(te) {
      f(te), p();
    },
    get id() {
      return v();
    },
    set id(te) {
      v(te), p();
    },
    get data() {
      return w();
    },
    set data(te) {
      w(te), p();
    },
    get selected() {
      return b();
    },
    set selected(te) {
      b(te), p();
    },
    get draggable() {
      return x();
    },
    set draggable(te) {
      x(te), p();
    },
    get selectable() {
      return _();
    },
    set selectable(te) {
      _(te), p();
    },
    get connectable() {
      return g();
    },
    set connectable(te) {
      g(te), p();
    },
    get deletable() {
      return C();
    },
    set deletable(te) {
      C(te), p();
    },
    get hidden() {
      return y();
    },
    set hidden(te) {
      y(te), p();
    },
    get dragging() {
      return k();
    },
    set dragging(te) {
      k(te), p();
    },
    get resizeObserver() {
      return E();
    },
    set resizeObserver(te) {
      E(te), p();
    },
    get style() {
      return S();
    },
    set style(te) {
      S(te), p();
    },
    get type() {
      return V();
    },
    set type(te) {
      V(te), p();
    },
    get isParent() {
      return T();
    },
    set isParent(te) {
      T(te), p();
    },
    get positionX() {
      return N();
    },
    set positionX(te) {
      N(te), p();
    },
    get positionY() {
      return I();
    },
    set positionY(te) {
      I(te), p();
    },
    get sourcePosition() {
      return z();
    },
    set sourcePosition(te) {
      z(te), p();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(te) {
      Y(te), p();
    },
    get zIndex() {
      return P();
    },
    set zIndex(te) {
      P(te), p();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(te) {
      H(te), p();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(te) {
      $(te), p();
    },
    get initialWidth() {
      return M();
    },
    set initialWidth(te) {
      M(te), p();
    },
    get initialHeight() {
      return O();
    },
    set initialHeight(te) {
      O(te), p();
    },
    get width() {
      return A();
    },
    set width(te) {
      A(te), p();
    },
    get height() {
      return Z();
    },
    set height(te) {
      Z(te), p();
    },
    get dragHandle() {
      return j();
    },
    set dragHandle(te) {
      j(te), p();
    },
    get initialized() {
      return F();
    },
    set initialized(te) {
      F(te), p();
    },
    get parentId() {
      return ue();
    },
    set parentId(te) {
      ue(te), p();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), p();
    },
    get class() {
      return W();
    },
    set class(te) {
      W(te), p();
    }
  });
  return r(), lt;
}
le(
  fd,
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
function vd(e, t) {
  ve(t, !1), st(e, im);
  const [n, r] = ft(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), a = () => ne(v, "$elementsSelectable", n), s = () => ne(f, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: w,
    parentLookup: b
  } = rt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const y = /* @__PURE__ */ new Map();
    C.forEach((k) => {
      const E = k.target.getAttribute("data-id");
      y.set(E, { id: E, nodeElement: k.target, force: !0 });
    }), w(y);
  });
  Ts(() => {
    x == null || x.disconnect();
  }), Be();
  var _ = om();
  Gt(_, 5, o, (C) => C.id, (C, y) => {
    const k = /* @__PURE__ */ be(() => !!h(y).selected), E = /* @__PURE__ */ be(() => !!h(y).hidden), S = /* @__PURE__ */ be(() => !!(h(y).draggable || i() && typeof h(y).draggable > "u")), V = /* @__PURE__ */ be(() => !!(h(y).selectable || a() && typeof h(y).selectable > "u")), T = /* @__PURE__ */ be(() => !!(h(y).connectable || s() && typeof h(y).connectable > "u")), N = /* @__PURE__ */ be(() => h(y).deletable ?? !0), I = /* @__PURE__ */ be(() => l().has(h(y).id)), z = /* @__PURE__ */ be(() => h(y).type ?? "default"), Y = /* @__PURE__ */ be(() => h(y).internals.z ?? 0), P = /* @__PURE__ */ be(() => Lc(h(y)));
    fd(C, {
      get node() {
        return h(y);
      },
      get id() {
        return h(y).id;
      },
      get data() {
        return h(y).data;
      },
      get selected() {
        return h(k);
      },
      get hidden() {
        return h(E);
      },
      get draggable() {
        return h(S);
      },
      get selectable() {
        return h(V);
      },
      get connectable() {
        return h(T);
      },
      get deletable() {
        return h(N);
      },
      get positionX() {
        return h(y).internals.positionAbsolute.x;
      },
      get positionY() {
        return h(y).internals.positionAbsolute.y;
      },
      get isParent() {
        return h(I);
      },
      get style() {
        return h(y).style;
      },
      get class() {
        return h(y).class;
      },
      get type() {
        return h(z);
      },
      get sourcePosition() {
        return h(y).sourcePosition;
      },
      get targetPosition() {
        return h(y).targetPosition;
      },
      get dragging() {
        return h(y).dragging;
      },
      get zIndex() {
        return h(Y);
      },
      get dragHandle() {
        return h(y).dragHandle;
      },
      get initialized() {
        return h(P);
      },
      get width() {
        return h(y).width;
      },
      get height() {
        return h(y).height;
      },
      get initialWidth() {
        return h(y).initialWidth;
      },
      get initialHeight() {
        return h(y).initialHeight;
      },
      get measuredWidth() {
        return h(y).measured.width;
      },
      get measuredHeight() {
        return h(y).measured.height;
      },
      get parentId() {
        return h(y).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          Ze.call(this, t, H);
        },
        nodemouseenter(H) {
          Ze.call(this, t, H);
        },
        nodemousemove(H) {
          Ze.call(this, t, H);
        },
        nodemouseleave(H) {
          Ze.call(this, t, H);
        },
        nodedrag(H) {
          Ze.call(this, t, H);
        },
        nodedragstart(H) {
          Ze.call(this, t, H);
        },
        nodedragstop(H) {
          Ze.call(this, t, H);
        },
        nodecontextmenu(H) {
          Ze.call(this, t, H);
        }
      }
    });
  }), X(_), L(e, _);
  var g = he({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), p();
    }
  });
  return r(), g;
}
le(vd, { nodeClickDistance: {} }, [], [], !0);
var am = /* @__PURE__ */ Ee('<svg><g role="img"><!></g></svg>');
function hd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(W, "$edgeTypes", n), i = () => ne(re, "$flowId", n), a = () => ne(we, "$elementsSelectable", n), s = () => ne(Q, "$edgeLookup", n), l = /* @__PURE__ */ oe(void 0, !0), u = /* @__PURE__ */ oe(void 0, !0), c = /* @__PURE__ */ oe(void 0, !0), d = /* @__PURE__ */ oe(void 0, !0), f = /* @__PURE__ */ oe(void 0, !0);
  let v = m(t, "id", 13), w = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), _ = m(t, "data", 29, () => ({})), g = m(t, "style", 13, void 0), C = m(t, "zIndex", 13, void 0), y = m(t, "animated", 13, !1), k = m(t, "selected", 13, !1), E = m(t, "selectable", 13, void 0), S = m(t, "deletable", 13, void 0), V = m(t, "hidden", 13, !1), T = m(t, "label", 13, void 0), N = m(t, "labelStyle", 13, void 0), I = m(t, "markerStart", 13, void 0), z = m(t, "markerEnd", 13, void 0), Y = m(t, "sourceHandle", 13, void 0), P = m(t, "targetHandle", 13, void 0), H = m(t, "sourceX", 13), $ = m(t, "sourceY", 13), M = m(t, "targetX", 13), O = m(t, "targetY", 13), A = m(t, "sourcePosition", 13), Z = m(t, "targetPosition", 13), j = m(t, "ariaLabel", 13, void 0), F = m(t, "interactionWidth", 13, void 0), ue = m(t, "class", 13, "");
  Ur("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: re,
    elementsSelectable: we
  } = rt(), xe = sa(), ce = td();
  function fe(ee) {
    const Fe = s().get(v());
    Fe && (ce(v()), xe("edgeclick", { event: ee, edge: Fe }));
  }
  function ie(ee, Fe) {
    const Je = s().get(v());
    Je && xe(Fe, { event: ee, edge: Je });
  }
  pe(() => J(w()), () => {
    G(l, w() || "default");
  }), pe(
    () => (o(), h(l), ji),
    () => {
      G(u, o()[h(l)] || ji);
    }
  ), pe(
    () => (J(I()), i()),
    () => {
      G(c, I() ? `url('#${as(I(), i())}')` : void 0);
    }
  ), pe(
    () => (J(z()), i()),
    () => {
      G(d, z() ? `url('#${as(z(), i())}')` : void 0);
    }
  ), pe(
    () => (J(E()), a()),
    () => {
      G(f, E() ?? a());
    }
  ), kt(), Be(!0);
  var ye = dt(), Ge = Ce(ye);
  {
    var We = (ee) => {
      var Fe = am();
      let Je;
      var se = K(Fe);
      let de;
      var Se = K(se);
      const je = /* @__PURE__ */ be(() => S() ?? !0);
      qu(Se, () => h(u), (De, vt) => {
        vt(De, {
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
            return H();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return M();
          },
          get targetY() {
            return O();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return Z();
          },
          get animated() {
            return y();
          },
          get selected() {
            return k();
          },
          get label() {
            return T();
          },
          get labelStyle() {
            return N();
          },
          get data() {
            return _();
          },
          get style() {
            return g();
          },
          get interactionWidth() {
            return F();
          },
          get selectable() {
            return h(f);
          },
          get deletable() {
            return h(je);
          },
          get type() {
            return h(l);
          },
          get sourceHandleId() {
            return Y();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return h(c);
          },
          get markerEnd() {
            return h(d);
          }
        });
      }), X(se), X(Fe), Te(
        (De, vt) => {
          Je = xt(Fe, "", Je, { "z-index": C() }), de = Ht(se, 0, De, null, de, vt), $e(se, "data-id", v()), $e(se, "aria-label", j() === null ? void 0 : j() ? j() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => Cn(Bt(["svelte-flow__edge", ue()])),
          () => ({
            animated: y(),
            selected: k(),
            selectable: h(f)
          })
        ],
        be
      ), Ue("click", se, fe), Ue("contextmenu", se, (De) => {
        ie(De, "edgecontextmenu");
      }), Ue("mouseenter", se, (De) => {
        ie(De, "edgemouseenter");
      }), Ue("mouseleave", se, (De) => {
        ie(De, "edgemouseleave");
      }), L(ee, Fe);
    };
    ke(Ge, (ee) => {
      V() || ee(We);
    });
  }
  L(e, ye);
  var Ie = he({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return w();
    },
    set type(ee) {
      w(ee), p();
    },
    get source() {
      return b();
    },
    set source(ee) {
      b(ee), p();
    },
    get target() {
      return x();
    },
    set target(ee) {
      x(ee), p();
    },
    get data() {
      return _();
    },
    set data(ee) {
      _(ee), p();
    },
    get style() {
      return g();
    },
    set style(ee) {
      g(ee), p();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ee) {
      C(ee), p();
    },
    get animated() {
      return y();
    },
    set animated(ee) {
      y(ee), p();
    },
    get selected() {
      return k();
    },
    set selected(ee) {
      k(ee), p();
    },
    get selectable() {
      return E();
    },
    set selectable(ee) {
      E(ee), p();
    },
    get deletable() {
      return S();
    },
    set deletable(ee) {
      S(ee), p();
    },
    get hidden() {
      return V();
    },
    set hidden(ee) {
      V(ee), p();
    },
    get label() {
      return T();
    },
    set label(ee) {
      T(ee), p();
    },
    get labelStyle() {
      return N();
    },
    set labelStyle(ee) {
      N(ee), p();
    },
    get markerStart() {
      return I();
    },
    set markerStart(ee) {
      I(ee), p();
    },
    get markerEnd() {
      return z();
    },
    set markerEnd(ee) {
      z(ee), p();
    },
    get sourceHandle() {
      return Y();
    },
    set sourceHandle(ee) {
      Y(ee), p();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(ee) {
      P(ee), p();
    },
    get sourceX() {
      return H();
    },
    set sourceX(ee) {
      H(ee), p();
    },
    get sourceY() {
      return $();
    },
    set sourceY(ee) {
      $(ee), p();
    },
    get targetX() {
      return M();
    },
    set targetX(ee) {
      M(ee), p();
    },
    get targetY() {
      return O();
    },
    set targetY(ee) {
      O(ee), p();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(ee) {
      A(ee), p();
    },
    get targetPosition() {
      return Z();
    },
    set targetPosition(ee) {
      Z(ee), p();
    },
    get ariaLabel() {
      return j();
    },
    set ariaLabel(ee) {
      j(ee), p();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(ee) {
      F(ee), p();
    },
    get class() {
      return ue();
    },
    set class(ee) {
      ue(ee), p();
    }
  });
  return r(), Ie;
}
le(
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
function gd(e, t) {
  ve(t, !1);
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return ln(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Be(), he({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), p();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), p();
    }
  });
}
le(gd, { onMount: {}, onDestroy: {} }, [], [], !0);
var sm = /* @__PURE__ */ Ee("<defs></defs>");
function pd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(i, "$markers", n), { markers: i } = rt();
  Be();
  var a = sm();
  Gt(a, 5, o, (s) => s.id, (s, l) => {
    md(s, bt(() => h(l)));
  }), X(a), L(e, a), he(), r();
}
le(pd, {}, [], [], !0);
var lm = /* @__PURE__ */ Ee('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), um = /* @__PURE__ */ Ee('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), cm = /* @__PURE__ */ Ee('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function md(e, t) {
  ve(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), i = m(t, "height", 12, 12.5), a = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Be();
  var c = cm(), d = K(c);
  {
    var f = (w) => {
      var b = lm();
      Te(() => {
        $e(b, "stroke", l()), $e(b, "stroke-width", u());
      }), L(w, b);
    }, v = (w, b) => {
      {
        var x = (_) => {
          var g = um();
          Te(() => {
            $e(g, "stroke", l()), $e(g, "stroke-width", u()), $e(g, "fill", l());
          }), L(_, g);
        };
        ke(
          w,
          (_) => {
            r() === Ro.ArrowClosed && _(x);
          },
          b
        );
      }
    };
    ke(d, (w) => {
      r() === Ro.Arrow ? w(f) : w(v, !1);
    });
  }
  return X(c), Te(() => {
    $e(c, "id", n()), $e(c, "markerWidth", `${o()}`), $e(c, "markerHeight", `${i()}`), $e(c, "markerUnits", a()), $e(c, "orient", s());
  }), L(e, c), he({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), p();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), p();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), p();
    },
    get markerUnits() {
      return a();
    },
    set markerUnits(w) {
      a(w), p();
    },
    get orient() {
      return s();
    },
    set orient(w) {
      s(w), p();
    },
    get color() {
      return l();
    },
    set color(w) {
      l(w), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), p();
    }
  });
}
le(
  md,
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
function yd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(s, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let a = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = rt();
  ln(() => {
    a() && u(a());
  }), Be();
  var d = dm(), f = K(d), v = K(f);
  pd(v, {}), X(f);
  var w = B(f, 2);
  Gt(w, 1, o, (g) => g.id, (g, C) => {
    const y = /* @__PURE__ */ be(() => h(C).selectable ?? i()), k = /* @__PURE__ */ be(() => h(C).type || "default");
    hd(g, {
      get id() {
        return h(C).id;
      },
      get source() {
        return h(C).source;
      },
      get target() {
        return h(C).target;
      },
      get data() {
        return h(C).data;
      },
      get style() {
        return h(C).style;
      },
      get animated() {
        return h(C).animated;
      },
      get selected() {
        return h(C).selected;
      },
      get selectable() {
        return h(y);
      },
      get deletable() {
        return h(C).deletable;
      },
      get hidden() {
        return h(C).hidden;
      },
      get label() {
        return h(C).label;
      },
      get labelStyle() {
        return h(C).labelStyle;
      },
      get markerStart() {
        return h(C).markerStart;
      },
      get markerEnd() {
        return h(C).markerEnd;
      },
      get sourceHandle() {
        return h(C).sourceHandle;
      },
      get targetHandle() {
        return h(C).targetHandle;
      },
      get sourceX() {
        return h(C).sourceX;
      },
      get sourceY() {
        return h(C).sourceY;
      },
      get targetX() {
        return h(C).targetX;
      },
      get targetY() {
        return h(C).targetY;
      },
      get sourcePosition() {
        return h(C).sourcePosition;
      },
      get targetPosition() {
        return h(C).targetPosition;
      },
      get ariaLabel() {
        return h(C).ariaLabel;
      },
      get interactionWidth() {
        return h(C).interactionWidth;
      },
      get class() {
        return h(C).class;
      },
      get type() {
        return h(k);
      },
      get zIndex() {
        return h(C).zIndex;
      },
      $$events: {
        edgeclick(E) {
          Ze.call(this, t, E);
        },
        edgecontextmenu(E) {
          Ze.call(this, t, E);
        },
        edgemouseenter(E) {
          Ze.call(this, t, E);
        },
        edgemouseleave(E) {
          Ze.call(this, t, E);
        }
      }
    });
  });
  var b = B(w, 2);
  {
    var x = (g) => {
      gd(g, {
        onMount: () => {
          Oi(l, !0);
        },
        onDestroy: () => {
          Oi(l, !1);
        }
      });
    };
    ke(b, (g) => {
      o().length > 0 && g(x);
    });
  }
  X(d), L(e, d);
  var _ = he({
    get defaultEdgeOptions() {
      return a();
    },
    set defaultEdgeOptions(g) {
      a(g), p();
    }
  });
  return r(), _;
}
le(yd, { defaultEdgeOptions: {} }, [], [], !0);
var fm = /* @__PURE__ */ ae('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const vm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Ws(e, t) {
  ve(t, !1), st(e, vm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "isVisible", 12, !0);
  var s = dt(), l = Ce(s);
  {
    var u = (c) => {
      var d = fm();
      let f;
      Te(() => f = xt(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), L(c, d);
    };
    ke(l, (c) => {
      a() && c(u);
    });
  }
  return L(e, s), he({
    get x() {
      return n();
    },
    set x(c) {
      n(c), p();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), p();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), p();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), p();
    },
    get isVisible() {
      return a();
    },
    set isVisible(c) {
      a(c), p();
    }
  });
}
le(
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
function wd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(a, "$selectionRect", n), i = () => ne(s, "$selectionRectMode", n), { selectionRect: a, selectionRectMode: s } = rt();
  Be();
  const l = /* @__PURE__ */ be(() => !!(o() && i() === "user")), u = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ be(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  Ws(e, {
    get isVisible() {
      return h(l);
    },
    get width() {
      return h(u);
    },
    get height() {
      return h(c);
    },
    get x() {
      return h(d);
    },
    get y() {
      return h(f);
    }
  }), he(), r();
}
le(wd, {}, [], [], !0);
var hm = /* @__PURE__ */ ae('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const gm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function bd(e, t) {
  ve(t, !1), st(e, gm);
  const [n, r] = ft(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), a = () => ne(u, "$nodes", n), s = rt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = sa();
  let f = /* @__PURE__ */ oe(null);
  function v(g) {
    const C = a().filter((y) => y.selected);
    d("selectioncontextmenu", { nodes: C, event: g });
  }
  function w(g) {
    const C = a().filter((y) => y.selected);
    d("selectionclick", { nodes: C, event: g });
  }
  pe(
    () => (o(), i(), a()),
    () => {
      o() === "nodes" && (G(f, Uo(i(), { filter: (g) => !!g.selected })), a());
    }
  ), kt(), Be();
  var b = dt(), x = Ce(b);
  {
    var _ = (g) => {
      var C = hm(), y = K(C);
      Ws(y, { width: "100%", height: "100%", x: 0, y: 0 }), X(C), Mt(C, (k, E) => qi == null ? void 0 : qi(k, E), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, E, S, V) => {
          d("nodedrag", { event: k, targetNode: null, nodes: V });
        },
        onDragStart: (k, E, S, V) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: V });
        },
        onDragStop: (k, E, S, V) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: V });
        }
      })), en(() => Ue("contextmenu", C, v)), en(() => Ue("click", C, w)), en(() => Ue("keyup", C, () => {
      })), Te(() => xt(C, `width: ${h(f).width ?? ""}px; height: ${h(f).height ?? ""}px; transform: translate(${h(f).x ?? ""}px, ${h(f).y ?? ""}px)`)), L(g, C);
    };
    ke(x, (g) => {
      o() === "nodes" && h(f) && Yn(h(f).x) && Yn(h(f).y) && g(_);
    });
  }
  L(e, b), he(), r();
}
le(bd, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: w, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((_) => l[_])
        ))
          continue;
        if (a.key === f) {
          w && a.preventDefault();
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
function xd(e, t) {
  ve(t, !1);
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => Yi() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), i = m(t, "panActivationKey", 12, " "), a = m(t, "zoomActivationKey", 28, () => Yi() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = rt();
  function v(g) {
    return g !== null && typeof g == "object";
  }
  function w(g) {
    return v(g) ? g.modifier || [] : [];
  }
  function b(g) {
    return g == null ? "" : v(g) ? g.key : g;
  }
  function x(g, C) {
    return (Array.isArray(g) ? g : [g]).map((y) => {
      const k = b(y);
      return {
        key: k,
        modifier: w(y),
        enabled: k !== null,
        callback: C
      };
    });
  }
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Be(), Ue("blur", Kt, _), Ue("contextmenu", Kt, _), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(o(), (g) => {
      !(g.originalEvent.ctrlKey || g.originalEvent.metaKey || g.originalEvent.shiftKey) && !Fp(g.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(a(), () => d.set(!0)),
    type: "keydown"
  })), Mt(Kt, (g, C) => wt == null ? void 0 : wt(g, C), () => ({
    trigger: x(a(), () => d.set(!1)),
    type: "keyup"
  })), he({
    get selectionKey() {
      return n();
    },
    set selectionKey(g) {
      n(g), p();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(g) {
      r(g), p();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(g) {
      o(g), p();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(g) {
      i(g), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(g) {
      a(g), p();
    }
  });
}
le(
  xd,
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
var pm = /* @__PURE__ */ Ee('<path fill="none" class="svelte-flow__connection-path"></path>'), mm = /* @__PURE__ */ Ee('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function $d(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(v, "$connection", n), i = () => ne(w, "$connectionLineType", n), a = () => ne(d, "$width", n), s = () => ne(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: w
  } = rt();
  let b = /* @__PURE__ */ oe(null);
  pe(
    () => (o(), J(c()), i(), h(b), is),
    () => {
      if (o().inProgress && !c()) {
        const { from: y, to: k, fromPosition: E, toPosition: S } = o(), V = {
          sourceX: y.x,
          sourceY: y.y,
          sourcePosition: E,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (i()) {
          case Wr.Bezier:
            ((T) => G(b, T[0]))(Ic(V));
            break;
          case Wr.Step:
            ((T) => G(b, T[0]))(Xi({ ...V, borderRadius: 0 }));
            break;
          case Wr.SmoothStep:
            ((T) => G(b, T[0]))(Xi(V));
            break;
          default:
            ((T) => G(b, T[0]))(is(V));
        }
      }
    }
  ), kt(), Be();
  var x = dt(), _ = Ce(x);
  {
    var g = (y) => {
      var k = mm(), E = K(k), S = K(E);
      Tt(S, t, "connectionLine", {});
      var V = B(S);
      {
        var T = (N) => {
          var I = pm();
          Te(() => {
            $e(I, "d", h(b)), xt(I, u());
          }), L(N, I);
        };
        ke(V, (N) => {
          c() || N(T);
        });
      }
      X(E), X(k), Te(
        (N) => {
          $e(k, "width", a()), $e(k, "height", s()), xt(k, l()), Ht(E, 0, N);
        },
        [
          () => Cn(Bt([
            "svelte-flow__connection",
            Rp(o().isValid)
          ]))
        ],
        be
      ), L(y, k);
    };
    ke(_, (y) => {
      o().inProgress && y(g);
    });
  }
  L(e, x);
  var C = he({
    get containerStyle() {
      return l();
    },
    set containerStyle(y) {
      l(y), p();
    },
    get style() {
      return u();
    },
    set style(y) {
      u(y), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(y) {
      c(y), p();
    }
  });
  return r(), C;
}
le(
  $d,
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
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["position", "style", "class"]);
  ve(t, !1);
  const [o, i] = ft(), a = () => ne(d, "$selectionRectMode", o), s = /* @__PURE__ */ oe();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = rt();
  pe(() => J(l()), () => {
    G(s, `${l()}`.split("-"));
  }), kt(), Be();
  var f = ym();
  let v;
  var w = K(f);
  Tt(w, t, "default", {}), X(f), Te(
    (x) => v = xn(f, v, {
      class: x,
      style: u(),
      ...r,
      [xr]: {
        "pointer-events": a() ? "none" : ""
      }
    }),
    [
      () => Bt([
        "svelte-flow__panel",
        c(),
        ...h(s)
      ])
    ],
    be
  ), L(e, f);
  var b = he({
    get position() {
      return l();
    },
    set position(x) {
      l(x), p();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), p();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), p();
    }
  });
  return i(), b;
}
le(ei, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var wm = /* @__PURE__ */ ae('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function _d(e, t) {
  ve(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Be();
  var o = dt(), i = Ce(o);
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
    ke(i, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(a);
    });
  }
  return L(e, o), he({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), p();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), p();
    }
  });
}
le(_d, { proOptions: {}, position: {} }, [], [], !0);
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
  return cn("light", (t) => {
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
var _m = /* @__PURE__ */ ae('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), Cm = /* @__PURE__ */ ae("<!> <!>", 1), km = /* @__PURE__ */ ae("<div><!> <!> <!> <!></div>");
const Em = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Cd(e, t) {
  const n = Xv(t), r = gt(t, [
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
  ve(t, !1), st(e, Em);
  const [i, a] = ft(), s = () => ne(C(), "$viewport", i), l = () => ne(vo, "$initialized", i), u = () => ne(h(c), "$colorModeClass", i), c = /* @__PURE__ */ oe();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), w = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), _ = m(t, "maxZoom", 12, void 0), g = m(t, "initialViewport", 12, void 0), C = m(t, "viewport", 12, void 0), y = m(t, "nodeTypes", 12, void 0), k = m(t, "edgeTypes", 12, void 0), E = m(t, "selectionKey", 12, void 0), S = m(t, "selectionMode", 12, void 0), V = m(t, "panActivationKey", 12, void 0), T = m(t, "multiSelectionKey", 12, void 0), N = m(t, "zoomActivationKey", 12, void 0), I = m(t, "nodesDraggable", 12, void 0), z = m(t, "nodesConnectable", 12, void 0), Y = m(t, "nodeDragThreshold", 12, void 0), P = m(t, "elementsSelectable", 12, void 0), H = m(t, "snapGrid", 12, void 0), $ = m(t, "deleteKey", 12, void 0), M = m(t, "connectionRadius", 12, void 0), O = m(t, "connectionLineType", 12, void 0), A = m(t, "connectionMode", 28, () => Mr.Strict), Z = m(t, "connectionLineStyle", 12, ""), j = m(t, "connectionLineContainerStyle", 12, ""), F = m(t, "onMoveStart", 12, void 0), ue = m(t, "onMove", 12, void 0), Q = m(t, "onMoveEnd", 12, void 0), W = m(t, "isValidConnection", 12, void 0), re = m(t, "translateExtent", 12, void 0), we = m(t, "nodeExtent", 12, void 0), xe = m(t, "onlyRenderVisibleElements", 12, void 0), ce = m(t, "panOnScrollMode", 28, () => cr.Free), fe = m(t, "preventScrolling", 12, !0), ie = m(t, "zoomOnScroll", 12, !0), ye = m(t, "zoomOnDoubleClick", 12, !0), Ge = m(t, "zoomOnPinch", 12, !0), We = m(t, "panOnScroll", 12, !1), Ie = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), Fe = m(t, "autoPanOnConnect", 12, !0), Je = m(t, "autoPanOnNodeDrag", 12, !0), se = m(t, "onerror", 12, void 0), de = m(t, "ondelete", 12, void 0), Se = m(t, "onedgecreate", 12, void 0), je = m(t, "attributionPosition", 12, void 0), De = m(t, "proOptions", 12, void 0), vt = m(t, "defaultEdgeOptions", 12, void 0), lt = m(t, "width", 12, void 0), te = m(t, "height", 12, void 0), Le = m(t, "colorMode", 12, "light"), me = m(t, "onconnect", 12, void 0), Zt = m(t, "onconnectstart", 12, void 0), Yt = m(t, "onconnectend", 12, void 0), un = m(t, "onbeforedelete", 12, void 0), Ve = m(t, "oninit", 12, void 0), ut = m(t, "nodeOrigin", 12, void 0), Re = m(t, "paneClickDistance", 12, 0), Ae = m(t, "nodeClickDistance", 12, 0), ct = m(t, "defaultMarkerColor", 12, "#b1b1b7"), Jt = m(t, "style", 12, void 0), St = m(t, "class", 12, void 0), Qn = /* @__PURE__ */ oe(), mt = /* @__PURE__ */ oe(), $t = /* @__PURE__ */ oe();
  const Sn = s() || g(), ot = Cv(pa) ? rt() : F0({
    nodes: q(f()),
    edges: q(v()),
    width: lt(),
    height: te(),
    fitView: w(),
    nodeOrigin: ut(),
    nodeExtent: we()
  });
  ln(() => (ot.width.set(h(mt)), ot.height.set(h($t)), ot.domNode.set(h(Qn)), ot.syncNodeStores(f()), ot.syncEdgeStores(v()), ot.syncViewport(C()), w() !== void 0 && ot.fitViewOnInit.set(w()), b() && ot.fitViewOptions.set(b()), nu(ot, {
    nodeTypes: y(),
    edgeTypes: k(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: re(),
    paneClickDistance: Re()
  }), () => {
    ot.reset();
  }));
  const { initialized: vo } = ot;
  let er = /* @__PURE__ */ oe(!1);
  pe(
    () => (h(mt), h($t)),
    () => {
      h(mt) !== void 0 && h($t) !== void 0 && (ot.width.set(h(mt)), ot.height.set(h($t)));
    }
  ), pe(
    () => (h(er), l(), J(Ve())),
    () => {
      var R;
      !h(er) && l() && ((R = Ve()) == null || R(), G(er, !0));
    }
  ), pe(
    () => (J(d()), J(O()), J(M()), J(S()), J(H()), J(ct()), J(I()), J(z()), J(P()), J(xe()), J(W()), J(Fe()), J(Je()), J(se()), J(de()), J(Se()), J(A()), J(Y()), J(me()), J(Zt()), J(Yt()), J(un()), J(ut()), ru),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: O(),
        connectionRadius: M(),
        selectionMode: S(),
        snapGrid: H(),
        defaultMarkerColor: ct(),
        nodesDraggable: I(),
        nodesConnectable: z(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: xe(),
        isValidConnection: W(),
        autoPanOnConnect: Fe(),
        autoPanOnNodeDrag: Je(),
        onerror: se(),
        ondelete: de(),
        onedgecreate: Se(),
        connectionMode: A(),
        nodeDragThreshold: Y(),
        onconnect: me(),
        onconnectstart: Zt(),
        onconnectend: Yt(),
        onbeforedelete: un(),
        nodeOrigin: ut()
      };
      ru(ot, R);
    }
  ), pe(
    () => (J(y()), J(k()), J(x()), J(_()), J(re()), J(Re())),
    () => {
      nu(ot, {
        nodeTypes: y(),
        edgeTypes: k(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: re(),
        paneClickDistance: Re()
      });
    }
  ), pe(
    () => J(Le()),
    () => {
      e1(G(c, $m(Le())), "$colorModeClass", i);
    }
  ), kt(), Be();
  var Ot = km();
  let wr;
  var br = K(Ot);
  xd(br, {
    get selectionKey() {
      return E();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return V();
    },
    get multiSelectionKey() {
      return T();
    },
    get zoomActivationKey() {
      return N();
    }
  });
  var zr = B(br, 2);
  const ho = /* @__PURE__ */ be(() => ce() === void 0 ? cr.Free : ce()), ii = /* @__PURE__ */ be(() => fe() === void 0 ? !0 : fe()), ai = /* @__PURE__ */ be(() => ie() === void 0 ? !0 : ie()), xa = /* @__PURE__ */ be(() => ye() === void 0 ? !0 : ye()), $a = /* @__PURE__ */ be(() => Ge() === void 0 ? !0 : Ge()), _a = /* @__PURE__ */ be(() => We() === void 0 ? !1 : We()), Ca = /* @__PURE__ */ be(() => Ie() === void 0 ? !0 : Ie()), D = /* @__PURE__ */ be(() => Re() === void 0 ? 0 : Re());
  ud(zr, {
    initialViewport: Sn,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return ue();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return h(ho);
    },
    get preventScrolling() {
      return h(ii);
    },
    get zoomOnScroll() {
      return h(ai);
    },
    get zoomOnDoubleClick() {
      return h(xa);
    },
    get zoomOnPinch() {
      return h($a);
    },
    get panOnScroll() {
      return h(_a);
    },
    get panOnDrag() {
      return h(Ca);
    },
    get paneClickDistance() {
      return h(D);
    },
    children: (R, it) => {
      const Xe = /* @__PURE__ */ be(() => Ie() === void 0 ? !0 : Ie());
      cd(R, {
        get panOnDrag() {
          return h(Xe);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(Ne) {
            Ze.call(this, t, Ne);
          },
          panecontextmenu(Ne) {
            Ze.call(this, t, Ne);
          }
        },
        children: (Ne, Pt) => {
          var ht = Cm(), pt = Ce(ht);
          dd(pt, {
            children: (tr, nr) => {
              var Ct = _m(), Lr = Ce(Ct);
              yd(Lr, {
                get defaultEdgeOptions() {
                  return vt();
                },
                $$events: {
                  edgeclick(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  edgecontextmenu(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  edgemouseenter(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  edgemouseleave(Ke) {
                    Ze.call(this, t, Ke);
                  }
                }
              });
              var si = B(Lr, 2);
              $d(si, {
                get containerStyle() {
                  return j();
                },
                get style() {
                  return Z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Ke, Ww) => {
                    var Us = dt(), bf = Ce(Us);
                    Tt(bf, t, "connectionLine", {}), L(Ke, Us);
                  }
                }
              });
              var li = B(si, 6);
              vd(li, {
                get nodeClickDistance() {
                  return Ae();
                },
                $$events: {
                  nodeclick(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodemouseenter(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodemousemove(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodemouseleave(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodedragstart(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodedrag(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodedragstop(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodecontextmenu(Ke) {
                    Ze.call(this, t, Ke);
                  }
                }
              });
              var wf = B(li, 2);
              bd(wf, {
                $$events: {
                  selectionclick(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  selectioncontextmenu(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodedragstart(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodedrag(Ke) {
                    Ze.call(this, t, Ke);
                  },
                  nodedragstop(Ke) {
                    Ze.call(this, t, Ke);
                  }
                }
              }), L(tr, Ct);
            },
            $$slots: { default: !0 }
          });
          var Xt = B(pt, 2);
          wd(Xt, {}), L(Ne, ht);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var U = B(zr, 2);
  _d(U, {
    get proOptions() {
      return De();
    },
    get position() {
      return je();
    }
  });
  var ge = B(U, 2);
  Tt(ge, t, "default", {}), X(Ot), Dn(Ot, (R) => G(Qn, R), () => h(Qn)), Te(
    (R) => wr = xn(
      Ot,
      wr,
      {
        style: Jt(),
        class: R,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Bt([
        "svelte-flow",
        St(),
        u()
      ])
    ],
    be
  ), hl(Ot, "clientWidth", (R) => G(mt, R)), hl(Ot, "clientHeight", (R) => G($t, R)), Ue("dragover", Ot, function(R) {
    Ze.call(this, t, R);
  }), Ue("drop", Ot, function(R) {
    Ze.call(this, t, R);
  }), L(e, Ot);
  var Pe = he({
    get id() {
      return d();
    },
    set id(R) {
      d(R), p();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), p();
    },
    get edges() {
      return v();
    },
    set edges(R) {
      v(R), p();
    },
    get fitView() {
      return w();
    },
    set fitView(R) {
      w(R), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), p();
    },
    get minZoom() {
      return x();
    },
    set minZoom(R) {
      x(R), p();
    },
    get maxZoom() {
      return _();
    },
    set maxZoom(R) {
      _(R), p();
    },
    get initialViewport() {
      return g();
    },
    set initialViewport(R) {
      g(R), p();
    },
    get viewport() {
      return C();
    },
    set viewport(R) {
      C(R), p();
    },
    get nodeTypes() {
      return y();
    },
    set nodeTypes(R) {
      y(R), p();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(R) {
      k(R), p();
    },
    get selectionKey() {
      return E();
    },
    set selectionKey(R) {
      E(R), p();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(R) {
      S(R), p();
    },
    get panActivationKey() {
      return V();
    },
    set panActivationKey(R) {
      V(R), p();
    },
    get multiSelectionKey() {
      return T();
    },
    set multiSelectionKey(R) {
      T(R), p();
    },
    get zoomActivationKey() {
      return N();
    },
    set zoomActivationKey(R) {
      N(R), p();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(R) {
      I(R), p();
    },
    get nodesConnectable() {
      return z();
    },
    set nodesConnectable(R) {
      z(R), p();
    },
    get nodeDragThreshold() {
      return Y();
    },
    set nodeDragThreshold(R) {
      Y(R), p();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(R) {
      P(R), p();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(R) {
      H(R), p();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(R) {
      $(R), p();
    },
    get connectionRadius() {
      return M();
    },
    set connectionRadius(R) {
      M(R), p();
    },
    get connectionLineType() {
      return O();
    },
    set connectionLineType(R) {
      O(R), p();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(R) {
      A(R), p();
    },
    get connectionLineStyle() {
      return Z();
    },
    set connectionLineStyle(R) {
      Z(R), p();
    },
    get connectionLineContainerStyle() {
      return j();
    },
    set connectionLineContainerStyle(R) {
      j(R), p();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(R) {
      F(R), p();
    },
    get onMove() {
      return ue();
    },
    set onMove(R) {
      ue(R), p();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(R) {
      Q(R), p();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(R) {
      W(R), p();
    },
    get translateExtent() {
      return re();
    },
    set translateExtent(R) {
      re(R), p();
    },
    get nodeExtent() {
      return we();
    },
    set nodeExtent(R) {
      we(R), p();
    },
    get onlyRenderVisibleElements() {
      return xe();
    },
    set onlyRenderVisibleElements(R) {
      xe(R), p();
    },
    get panOnScrollMode() {
      return ce();
    },
    set panOnScrollMode(R) {
      ce(R), p();
    },
    get preventScrolling() {
      return fe();
    },
    set preventScrolling(R) {
      fe(R), p();
    },
    get zoomOnScroll() {
      return ie();
    },
    set zoomOnScroll(R) {
      ie(R), p();
    },
    get zoomOnDoubleClick() {
      return ye();
    },
    set zoomOnDoubleClick(R) {
      ye(R), p();
    },
    get zoomOnPinch() {
      return Ge();
    },
    set zoomOnPinch(R) {
      Ge(R), p();
    },
    get panOnScroll() {
      return We();
    },
    set panOnScroll(R) {
      We(R), p();
    },
    get panOnDrag() {
      return Ie();
    },
    set panOnDrag(R) {
      Ie(R), p();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(R) {
      ee(R), p();
    },
    get autoPanOnConnect() {
      return Fe();
    },
    set autoPanOnConnect(R) {
      Fe(R), p();
    },
    get autoPanOnNodeDrag() {
      return Je();
    },
    set autoPanOnNodeDrag(R) {
      Je(R), p();
    },
    get onerror() {
      return se();
    },
    set onerror(R) {
      se(R), p();
    },
    get ondelete() {
      return de();
    },
    set ondelete(R) {
      de(R), p();
    },
    get onedgecreate() {
      return Se();
    },
    set onedgecreate(R) {
      Se(R), p();
    },
    get attributionPosition() {
      return je();
    },
    set attributionPosition(R) {
      je(R), p();
    },
    get proOptions() {
      return De();
    },
    set proOptions(R) {
      De(R), p();
    },
    get defaultEdgeOptions() {
      return vt();
    },
    set defaultEdgeOptions(R) {
      vt(R), p();
    },
    get width() {
      return lt();
    },
    set width(R) {
      lt(R), p();
    },
    get height() {
      return te();
    },
    set height(R) {
      te(R), p();
    },
    get colorMode() {
      return Le();
    },
    set colorMode(R) {
      Le(R), p();
    },
    get onconnect() {
      return me();
    },
    set onconnect(R) {
      me(R), p();
    },
    get onconnectstart() {
      return Zt();
    },
    set onconnectstart(R) {
      Zt(R), p();
    },
    get onconnectend() {
      return Yt();
    },
    set onconnectend(R) {
      Yt(R), p();
    },
    get onbeforedelete() {
      return un();
    },
    set onbeforedelete(R) {
      un(R), p();
    },
    get oninit() {
      return Ve();
    },
    set oninit(R) {
      Ve(R), p();
    },
    get nodeOrigin() {
      return ut();
    },
    set nodeOrigin(R) {
      ut(R), p();
    },
    get paneClickDistance() {
      return Re();
    },
    set paneClickDistance(R) {
      Re(R), p();
    },
    get nodeClickDistance() {
      return Ae();
    },
    set nodeClickDistance(R) {
      Ae(R), p();
    },
    get defaultMarkerColor() {
      return ct();
    },
    set defaultMarkerColor(R) {
      ct(R), p();
    },
    get style() {
      return Jt();
    },
    set style(R) {
      Jt(R), p();
    },
    get class() {
      return St();
    },
    set class(R) {
      St(R), p();
    }
  });
  return a(), Pe;
}
le(
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
function kd(e, t) {
  ve(t, !1);
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), i = m(t, "initialHeight", 12, void 0), a = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = ld({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: s(),
    fitView: a()
  });
  Ur(pa, { getStore: () => l }), Ts(() => {
    l.reset();
  }), Be();
  var u = dt(), c = Ce(u);
  return Tt(c, t, "default", {}), L(e, u), he({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), p();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), p();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), p();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), p();
    },
    get fitView() {
      return a();
    },
    set fitView(d) {
      a(d), p();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), p();
    }
  });
}
le(
  kd,
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
var Sm = /* @__PURE__ */ ae("<button><!></button>");
function Co(e, t) {
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
  ve(t, !1);
  let o = m(t, "class", 12, void 0), i = m(t, "bgColor", 12, void 0), a = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Be();
  var c = Sm();
  let d;
  var f = K(c);
  return Tt(f, t, "default", { class: "button-svg" }), X(c), Te(
    (v) => d = xn(c, d, {
      type: "button",
      class: v,
      ...r,
      [xr]: {
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
    be
  ), Ue("click", c, function(v) {
    Ze.call(this, t, v);
  }), L(e, c), he({
    get class() {
      return o();
    },
    set class(v) {
      o(v), p();
    },
    get bgColor() {
      return i();
    },
    set bgColor(v) {
      i(v), p();
    },
    get bgColorHover() {
      return a();
    },
    set bgColorHover(v) {
      a(v), p();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), p();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), p();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), p();
    }
  });
}
le(
  Co,
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
var Pm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Ed(e) {
  var t = Pm();
  L(e, t);
}
le(Ed, {}, [], [], !0);
var Mm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Sd(e) {
  var t = Mm();
  L(e, t);
}
le(Sd, {}, [], [], !0);
var Tm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Pd(e) {
  var t = Tm();
  L(e, t);
}
le(Pd, {}, [], [], !0);
var Hm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Md(e) {
  var t = Hm();
  L(e, t);
}
le(Md, {}, [], [], !0);
var Vm = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Td(e) {
  var t = Vm();
  L(e, t);
}
le(Td, {}, [], [], !0);
var Om = /* @__PURE__ */ ae("<!> <!>", 1), Nm = /* @__PURE__ */ ae("<!> <!> <!> <!> <!> <!>", 1);
function Hd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(O, "$nodesDraggable", n), i = () => ne(A, "$nodesConnectable", n), a = () => ne(Z, "$elementsSelectable", n), s = () => ne(H, "$viewport", n), l = () => ne($, "$minZoom", n), u = () => ne(M, "$maxZoom", n), c = /* @__PURE__ */ oe(), d = /* @__PURE__ */ oe(), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe();
  let w = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), _ = m(t, "showLock", 12, !0), g = m(t, "buttonBgColor", 12, void 0), C = m(t, "buttonBgColorHover", 12, void 0), y = m(t, "buttonColor", 12, void 0), k = m(t, "buttonColorHover", 12, void 0), E = m(t, "buttonBorderColor", 12, void 0), S = m(t, "ariaLabel", 12, void 0), V = m(t, "style", 12, void 0), T = m(t, "orientation", 12, "vertical"), N = m(t, "fitViewOptions", 12, void 0), I = m(t, "class", 12, "");
  const {
    zoomIn: z,
    zoomOut: Y,
    fitView: P,
    viewport: H,
    minZoom: $,
    maxZoom: M,
    nodesDraggable: O,
    nodesConnectable: A,
    elementsSelectable: Z
  } = rt(), j = {
    bgColor: g(),
    bgColorHover: C(),
    color: y(),
    colorHover: k(),
    borderColor: E()
  }, F = () => {
    z();
  }, ue = () => {
    Y();
  }, Q = () => {
    P(N());
  }, W = () => {
    G(c, !h(c)), O.set(h(c)), A.set(h(c)), Z.set(h(c));
  };
  pe(
    () => (o(), i(), a()),
    () => {
      G(c, o() || i() || a());
    }
  ), pe(() => (s(), l()), () => {
    G(d, s().zoom <= l());
  }), pe(() => (s(), u()), () => {
    G(f, s().zoom >= u());
  }), pe(() => J(T()), () => {
    G(v, T() === "horizontal" ? "horizontal" : "vertical");
  }), kt(), Be();
  const re = /* @__PURE__ */ be(() => Bt([
    "svelte-flow__controls",
    h(v),
    I()
  ])), we = /* @__PURE__ */ be(() => S() ?? "Svelte Flow controls");
  ei(e, {
    get class() {
      return h(re);
    },
    get position() {
      return w();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return h(we);
    },
    get style() {
      return V();
    },
    children: (ce, fe) => {
      var ie = Nm(), ye = Ce(ie);
      Tt(ye, t, "before", {});
      var Ge = B(ye, 2);
      {
        var We = (Se) => {
          var je = Om(), De = Ce(je);
          Co(De, bt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return h(f);
              }
            },
            j,
            {
              $$events: { click: F },
              children: (lt, te) => {
                Ed(lt);
              },
              $$slots: { default: !0 }
            }
          ));
          var vt = B(De, 2);
          Co(vt, bt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return h(d);
              }
            },
            j,
            {
              $$events: { click: ue },
              children: (lt, te) => {
                Sd(lt);
              },
              $$slots: { default: !0 }
            }
          )), L(Se, je);
        };
        ke(Ge, (Se) => {
          b() && Se(We);
        });
      }
      var Ie = B(Ge, 2);
      {
        var ee = (Se) => {
          Co(Se, bt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            j,
            {
              $$events: { click: Q },
              children: (je, De) => {
                Pd(je);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Ie, (Se) => {
          x() && Se(ee);
        });
      }
      var Fe = B(Ie, 2);
      {
        var Je = (Se) => {
          Co(Se, bt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            j,
            {
              $$events: { click: W },
              children: (je, De) => {
                var vt = dt(), lt = Ce(vt);
                {
                  var te = (me) => {
                    Td(me);
                  }, Le = (me) => {
                    Md(me);
                  };
                  ke(lt, (me) => {
                    h(c) ? me(te) : me(Le, !1);
                  });
                }
                L(je, vt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        ke(Fe, (Se) => {
          _() && Se(Je);
        });
      }
      var se = B(Fe, 2);
      Tt(se, t, "default", {});
      var de = B(se, 2);
      Tt(de, t, "after", {}), L(ce, ie);
    },
    $$slots: { default: !0 }
  });
  var xe = he({
    get position() {
      return w();
    },
    set position(ce) {
      w(ce), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(ce) {
      b(ce), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(ce) {
      x(ce), p();
    },
    get showLock() {
      return _();
    },
    set showLock(ce) {
      _(ce), p();
    },
    get buttonBgColor() {
      return g();
    },
    set buttonBgColor(ce) {
      g(ce), p();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(ce) {
      C(ce), p();
    },
    get buttonColor() {
      return y();
    },
    set buttonColor(ce) {
      y(ce), p();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(ce) {
      k(ce), p();
    },
    get buttonBorderColor() {
      return E();
    },
    set buttonBorderColor(ce) {
      E(ce), p();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(ce) {
      S(ce), p();
    },
    get style() {
      return V();
    },
    set style(ce) {
      V(ce), p();
    },
    get orientation() {
      return T();
    },
    set orientation(ce) {
      T(ce), p();
    },
    get fitViewOptions() {
      return N();
    },
    set fitViewOptions(ce) {
      N(ce), p();
    },
    get class() {
      return I();
    },
    set class(ce) {
      I(ce), p();
    }
  });
  return r(), xe;
}
le(
  Hd,
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
var Dm = /* @__PURE__ */ Ee("<circle></circle>");
function Vd(e, t) {
  ve(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Be();
  var o = Dm();
  return Te(
    (i) => {
      $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), Ht(o, 0, i);
    },
    [
      () => Cn(Bt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    be
  ), L(e, o), he({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), p();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), p();
    }
  });
}
le(Vd, { radius: {}, class: {} }, [], [], !0);
var zm = /* @__PURE__ */ Ee("<path></path>");
function Od(e, t) {
  ve(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), i = m(t, "class", 12, "");
  Be();
  var a = zm();
  return Te(
    (s) => {
      $e(a, "stroke-width", n()), $e(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ht(a, 0, s);
    },
    [
      () => Cn(Bt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    be
  ), L(e, a), he({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), p();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), p();
    },
    get class() {
      return i();
    },
    set class(s) {
      i(s), p();
    }
  });
}
le(
  Od,
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
var Am = /* @__PURE__ */ Ee('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Im = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Nd(e, t) {
  ve(t, !1), st(e, Im);
  const [n, r] = ft(), o = () => ne(k, "$flowId", n), i = () => ne(y, "$viewport", n), a = /* @__PURE__ */ oe(), s = /* @__PURE__ */ oe(), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => dr.Dots), v = m(t, "gap", 12, 20), w = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), _ = m(t, "patternColor", 12, void 0), g = m(t, "patternClass", 12, void 0), C = m(t, "class", 12, "");
  const { viewport: y, flowId: k } = rt(), E = w() || Lm[f()], S = f() === dr.Dots, V = f() === dr.Cross, T = Array.isArray(v()) ? v() : [v(), v()];
  pe(
    () => (o(), J(d())),
    () => {
      G(a, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), pe(() => i(), () => {
    G(s, [
      T[0] * i().zoom || 1,
      T[1] * i().zoom || 1
    ]);
  }), pe(() => i(), () => {
    G(l, E * i().zoom);
  }), pe(() => (h(l), h(s)), () => {
    G(u, V ? [h(l), h(l)] : h(s));
  }), pe(
    () => (h(l), h(u)),
    () => {
      G(c, S ? [
        h(l) / 2,
        h(l) / 2
      ] : [
        h(u)[0] / 2,
        h(u)[1] / 2
      ]);
    }
  ), kt(), Be();
  var N = Am();
  let I;
  var z = K(N), Y = K(z);
  {
    var P = (O) => {
      const A = /* @__PURE__ */ be(() => h(l) / 2);
      Vd(O, {
        get radius() {
          return h(A);
        },
        get class() {
          return g();
        }
      });
    }, H = (O) => {
      Od(O, {
        get dimensions() {
          return h(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return b();
        },
        get class() {
          return g();
        }
      });
    };
    ke(Y, (O) => {
      S ? O(P) : O(H, !1);
    });
  }
  X(z);
  var $ = B(z);
  X(N), Te(
    (O) => {
      Ht(N, 0, O, "svelte-1r7pe8d"), I = xt(N, "", I, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": _()
      }), $e(z, "id", h(a)), $e(z, "x", i().x % h(s)[0]), $e(z, "y", i().y % h(s)[1]), $e(z, "width", h(s)[0]), $e(z, "height", h(s)[1]), $e(z, "patternTransform", `translate(-${h(c)[0]},-${h(c)[1]})`), $e($, "fill", `url(#${h(a)})`);
    },
    [
      () => Cn(Bt(["svelte-flow__background", C()]))
    ],
    be
  ), L(e, N);
  var M = he({
    get id() {
      return d();
    },
    set id(O) {
      d(O), p();
    },
    get variant() {
      return f();
    },
    set variant(O) {
      f(O), p();
    },
    get gap() {
      return v();
    },
    set gap(O) {
      v(O), p();
    },
    get size() {
      return w();
    },
    set size(O) {
      w(O), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(O) {
      b(O), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(O) {
      x(O), p();
    },
    get patternColor() {
      return _();
    },
    set patternColor(O) {
      _(O), p();
    },
    get patternClass() {
      return g();
    },
    set patternClass(O) {
      g(O), p();
    },
    get class() {
      return C();
    },
    set class(O) {
      C(O), p();
    }
  });
  return r(), M;
}
le(
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
var Rm = /* @__PURE__ */ Ee("<rect></rect>");
function Dd(e, t) {
  ve(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), i = m(t, "height", 12, 0), a = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Be();
  var v = Rm();
  let w;
  return Te(
    (b, x) => {
      w = Ht(v, 0, b, null, w, x), $e(v, "x", n()), $e(v, "y", r()), $e(v, "rx", a()), $e(v, "ry", a()), $e(v, "width", o()), $e(v, "height", i()), xt(v, `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), $e(v, "shape-rendering", l());
    },
    [
      () => Cn(Bt(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    be
  ), L(e, v), he({
    get x() {
      return n();
    },
    set x(b) {
      n(b), p();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), p();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), p();
    },
    get height() {
      return i();
    },
    set height(b) {
      i(b), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(b) {
      a(b), p();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), p();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), p();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), p();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), p();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), p();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), p();
    }
  });
}
le(
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
  const n = C0({
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
var Bm = /* @__PURE__ */ Ee("<title> </title>"), Zm = /* @__PURE__ */ Ee('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function zd(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(Ie, "$flowId", n), i = () => ne(ye, "$viewport", n), a = () => ne(Ge, "$containerWidth", n), s = () => ne(We, "$containerHeight", n), l = () => ne(ie, "$nodeLookup", n), u = () => ne(fe, "$nodes", n), c = () => ne(ee, "$panZoom", n), d = () => ne(Fe, "$translateExtent", n), f = /* @__PURE__ */ oe(), v = /* @__PURE__ */ oe(), w = /* @__PURE__ */ oe(), b = /* @__PURE__ */ oe(), x = /* @__PURE__ */ oe(), _ = /* @__PURE__ */ oe(), g = /* @__PURE__ */ oe(), C = /* @__PURE__ */ oe(), y = /* @__PURE__ */ oe(), k = /* @__PURE__ */ oe(), E = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe(), V = /* @__PURE__ */ oe();
  let T = m(t, "position", 12, "bottom-right"), N = m(t, "ariaLabel", 12, "Mini map"), I = m(t, "nodeStrokeColor", 12, "transparent"), z = m(t, "nodeColor", 12, void 0), Y = m(t, "nodeClass", 12, ""), P = m(t, "nodeBorderRadius", 12, 5), H = m(t, "nodeStrokeWidth", 12, 2), $ = m(t, "bgColor", 12, void 0), M = m(t, "maskColor", 12, void 0), O = m(t, "maskStrokeColor", 12, void 0), A = m(t, "maskStrokeWidth", 12, void 0), Z = m(t, "width", 12, void 0), j = m(t, "height", 12, void 0), F = m(t, "pannable", 12, !0), ue = m(t, "zoomable", 12, !0), Q = m(t, "inversePan", 12, void 0), W = m(t, "zoomStep", 12, void 0), re = m(t, "style", 12, ""), we = m(t, "class", 12, "");
  const xe = 200, ce = 150, {
    nodes: fe,
    nodeLookup: ie,
    viewport: ye,
    width: Ge,
    height: We,
    flowId: Ie,
    panZoom: ee,
    translateExtent: Fe
  } = rt(), Je = z() === void 0 ? void 0 : La(z()), se = La(I()), de = La(Y()), Se = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), je = `svelte-flow__minimap-desc-${o()}`;
  let De = /* @__PURE__ */ oe(h(f));
  const vt = () => h(_);
  pe(
    () => (i(), a(), s()),
    () => {
      G(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: a() / i().zoom,
        height: s() / i().zoom
      });
    }
  ), pe(
    () => (l(), h(f), u()),
    () => {
      G(De, l().size > 0 ? Dc(Uo(l()), h(f)) : h(f)), u();
    }
  ), pe(() => J(Z()), () => {
    G(v, Z() ?? xe);
  }), pe(() => J(j()), () => {
    G(w, j() ?? ce);
  }), pe(
    () => (h(De), h(v)),
    () => {
      G(b, h(De).width / h(v));
    }
  ), pe(
    () => (h(De), h(w)),
    () => {
      G(x, h(De).height / h(w));
    }
  ), pe(
    () => (h(b), h(x)),
    () => {
      G(_, Math.max(h(b), h(x)));
    }
  ), pe(() => (h(_), h(v)), () => {
    G(g, h(_) * h(v));
  }), pe(
    () => (h(_), h(w)),
    () => {
      G(C, h(_) * h(w));
    }
  ), pe(() => h(_), () => {
    G(y, 5 * h(_));
  }), pe(
    () => (h(De), h(g), h(y)),
    () => {
      G(k, h(De).x - (h(g) - h(De).width) / 2 - h(y));
    }
  ), pe(
    () => (h(De), h(C), h(y)),
    () => {
      G(E, h(De).y - (h(C) - h(De).height) / 2 - h(y));
    }
  ), pe(() => (h(g), h(y)), () => {
    G(S, h(g) + h(y) * 2);
  }), pe(() => (h(C), h(y)), () => {
    G(V, h(C) + h(y) * 2);
  }), kt(), Be();
  const lt = /* @__PURE__ */ be(() => re() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), te = /* @__PURE__ */ be(() => Bt(["svelte-flow__minimap", we()]));
  ei(e, {
    get position() {
      return T();
    },
    get style() {
      return h(lt);
    },
    get class() {
      return h(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (me, Zt) => {
      var Yt = dt(), un = Ce(Yt);
      {
        var Ve = (ut) => {
          var Re = Zm();
          $e(Re, "aria-labelledby", je);
          let Ae;
          var ct = K(Re);
          {
            var Jt = (mt) => {
              var $t = Bm();
              $e($t, "id", je);
              var Sn = K($t, !0);
              X($t), Te(() => on(Sn, N())), L(mt, $t);
            };
            ke(ct, (mt) => {
              N() && mt(Jt);
            });
          }
          var St = B(ct);
          Gt(St, 1, u, (mt) => mt.id, (mt, $t) => {
            var Sn = dt();
            const ot = /* @__PURE__ */ be(() => l().get(h($t).id));
            var vo = Ce(Sn);
            {
              var er = (Ot) => {
                const wr = /* @__PURE__ */ be(() => mr(h(ot))), br = /* @__PURE__ */ be(() => Je == null ? void 0 : Je(h(ot))), zr = /* @__PURE__ */ be(() => se(h(ot))), ho = /* @__PURE__ */ be(() => de(h(ot)));
                Dd(Ot, bt(
                  {
                    get x() {
                      return h(ot).internals.positionAbsolute.x;
                    },
                    get y() {
                      return h(ot).internals.positionAbsolute.y;
                    }
                  },
                  () => h(wr),
                  {
                    get selected() {
                      return h(ot).selected;
                    },
                    get color() {
                      return h(br);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return h(zr);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: Se,
                    get class() {
                      return h(ho);
                    }
                  }
                ));
              };
              ke(vo, (Ot) => {
                h(ot) && Lc(h(ot)) && Ot(er);
              });
            }
            L(mt, Sn);
          });
          var Qn = B(St);
          X(Re), Mt(Re, (mt, $t) => ou == null ? void 0 : ou(mt, $t), () => ({
            panZoom: c(),
            viewport: ye,
            getViewScale: vt,
            translateExtent: d(),
            width: a(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: F(),
            zoomable: ue()
          })), Te(() => {
            $e(Re, "width", h(v)), $e(Re, "height", h(w)), $e(Re, "viewBox", `${h(k) ?? ""} ${h(E) ?? ""} ${h(S) ?? ""} ${h(V) ?? ""}`), Ae = xt(Re, "", Ae, {
              "--xy-minimap-mask-background-color-props": M(),
              "--xy-minimap-mask-stroke-color-props": O(),
              "--xy-minimap-mask-stroke-width-props": A() ? A() * h(_) : void 0
            }), $e(Qn, "d", `M${h(k) - h(y)},${h(E) - h(y)}h${h(S) + h(y) * 2}v${h(V) + h(y) * 2}h${-h(S) - h(y) * 2}z
      M${h(f).x ?? ""},${h(f).y ?? ""}h${h(f).width ?? ""}v${h(f).height ?? ""}h${-h(f).width}z`);
          }), L(ut, Re);
        };
        ke(un, (ut) => {
          c() && ut(Ve);
        });
      }
      L(me, Yt);
    },
    $$slots: { default: !0 }
  });
  var Le = he({
    get position() {
      return T();
    },
    set position(me) {
      T(me), p();
    },
    get ariaLabel() {
      return N();
    },
    set ariaLabel(me) {
      N(me), p();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(me) {
      I(me), p();
    },
    get nodeColor() {
      return z();
    },
    set nodeColor(me) {
      z(me), p();
    },
    get nodeClass() {
      return Y();
    },
    set nodeClass(me) {
      Y(me), p();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(me) {
      P(me), p();
    },
    get nodeStrokeWidth() {
      return H();
    },
    set nodeStrokeWidth(me) {
      H(me), p();
    },
    get bgColor() {
      return $();
    },
    set bgColor(me) {
      $(me), p();
    },
    get maskColor() {
      return M();
    },
    set maskColor(me) {
      M(me), p();
    },
    get maskStrokeColor() {
      return O();
    },
    set maskStrokeColor(me) {
      O(me), p();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(me) {
      A(me), p();
    },
    get width() {
      return Z();
    },
    set width(me) {
      Z(me), p();
    },
    get height() {
      return j();
    },
    set height(me) {
      j(me), p();
    },
    get pannable() {
      return F();
    },
    set pannable(me) {
      F(me), p();
    },
    get zoomable() {
      return ue();
    },
    set zoomable(me) {
      ue(me), p();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(me) {
      Q(me), p();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(me) {
      W(me), p();
    },
    get style() {
      return re();
    },
    set style(me) {
      re(me), p();
    },
    get class() {
      return we();
    },
    set class(me) {
      we(me), p();
    }
  });
  return r(), Le;
}
le(
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
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: a, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: w, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = rt(), g = (k) => {
    var E, S;
    const V = q(w), T = iu(k) ? k : V.get(k.id), N = T.parentId ? Kp(T.position, T.measured, T.parentId, V, q(b)) : T.position, I = {
      ...T,
      position: N,
      width: ((E = T.measured) == null ? void 0 : E.width) ?? T.width,
      height: ((S = T.measured) == null ? void 0 : S.height) ?? T.height
    };
    return no(I);
  }, C = (k, E, S = { replace: !1 }) => {
    var V;
    const T = (V = q(w).get(k)) == null ? void 0 : V.internals.userNode;
    if (!T)
      return;
    const N = typeof E == "function" ? E(T) : E;
    S.replace ? d.update((I) => I.map((z) => z.id === k ? iu(N) ? N : { ...z, ...N } : z)) : (Object.assign(T, N), d.update((I) => I));
  }, y = (k) => q(w).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: y,
    getNode: (k) => {
      var E;
      return (E = y(k)) == null ? void 0 : E.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : au(q(w), k),
    getEdge: (k) => q(x).get(k),
    getEdges: (k) => k === void 0 ? q(f) : au(q(x), k),
    setZoom: (k, E) => {
      const S = q(c);
      return S ? S.scaleTo(k, { duration: E == null ? void 0 : E.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(i).zoom,
    setViewport: async (k, E) => {
      const S = q(i), V = q(c);
      return V ? (await V.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(i),
    setCenter: async (k, E, S) => {
      const V = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : q(u), T = q(c);
      return T ? (await T.setViewport({
        x: q(a) / 2 - k * V,
        y: q(s) / 2 - E * V,
        zoom: V
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, E) => {
      const S = q(c);
      if (!S)
        return Promise.resolve(!1);
      const V = Rs(k, q(a), q(s), q(l), q(u), (E == null ? void 0 : E.padding) ?? 0.1);
      return await S.setViewport(V, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, E = !0, S) => {
      const V = Bl(k), T = V ? k : g(k);
      return T ? (S || q(d)).filter((N) => {
        const I = q(w).get(N.id);
        if (!I || !V && N.id === k.id)
          return !1;
        const z = no(I), Y = Bo(z, T);
        return E && Y > 0 || Y >= T.width * T.height;
      }) : [];
    },
    isNodeIntersecting: (k, E, S = !0) => {
      const V = Bl(k) ? k : g(k);
      if (!V)
        return !1;
      const T = Bo(V, E);
      return S && T > 0 || T >= V.width * V.height;
    },
    deleteElements: async ({ nodes: k = [], edges: E = [] }) => {
      const { nodes: S, edges: V } = await Vc({
        nodesToRemove: k,
        edgesToRemove: E,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return S && d.update((T) => T.filter((N) => !S.some(({ id: I }) => I === N.id))), V && f.update((T) => T.filter((N) => !V.some(({ id: I }) => I === N.id))), {
        deletedNodes: S,
        deletedEdges: V
      };
    },
    screenToFlowPosition: (k, E = { snapToGrid: !0 }) => {
      const S = q(v);
      if (!S)
        return k;
      const V = E.snapToGrid ? q(o) : !1, { x: T, y: N, zoom: I } = q(i), { x: z, y: Y } = S.getBoundingClientRect(), P = {
        x: k.x - z,
        y: k.y - Y
      };
      return Jo(P, [T, N, I], V !== null, V || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const E = q(v);
      if (!E)
        return k;
      const { x: S, y: V, zoom: T } = q(i), { x: N, y: I } = E.getBoundingClientRect(), z = zc(k, [S, V, T]);
      return {
        x: z.x + N,
        y: z.y + I
      };
    },
    toObject: () => ({
      nodes: q(d).map((k) => ({
        ...k,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...k.position },
        data: { ...k.data }
      })),
      edges: q(f).map((k) => ({ ...k })),
      viewport: { ...q(i) }
    }),
    updateNode: C,
    updateNodeData: (k, E, S) => {
      var V;
      const T = (V = q(w).get(k)) == null ? void 0 : V.internals.userNode;
      if (!T)
        return;
      const N = typeof E == "function" ? E(T) : E;
      T.data = S != null && S.replace ? N : { ...T.data, ...N }, d.update((I) => I);
    },
    getNodesBounds: (k) => {
      const E = q(w), S = q(b);
      return Yp(k, { nodeLookup: E, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: E, nodeId: S }) => {
      var V;
      return Array.from(((V = q(_).get(`${S}-${k}-${E ?? null}`)) == null ? void 0 : V.values()) ?? []);
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
var Ym = /* @__PURE__ */ ae('<div class="svelte-flow__node-toolbar"><!></div>');
function Ld(e, t) {
  ve(t, !1);
  const [n, r] = ft(), o = () => ne(C, "$nodes", n), i = () => ne(g, "$nodeLookup", n), a = () => ne(_, "$viewport", n), s = () => ne(x, "$domNode", n), l = /* @__PURE__ */ oe(), u = /* @__PURE__ */ oe(), c = /* @__PURE__ */ oe();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), w = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: g, nodes: C } = rt(), { getNodesBounds: y } = Ut(), k = Er("svelteflow__node_id");
  let E = /* @__PURE__ */ oe(), S = /* @__PURE__ */ oe([]), V = w() !== void 0 ? w() : 10, T = f() !== void 0 ? f() : Me.Top, N = v() !== void 0 ? v() : "center";
  pe(
    () => (o(), J(d()), i()),
    () => {
      o();
      const H = Array.isArray(d()) ? d() : [d() || k];
      G(S, H.reduce(
        ($, M) => {
          const O = i().get(M);
          return O && $.push(O), $;
        },
        []
      ));
    }
  ), pe(
    () => (h(S), a()),
    () => {
      const H = y(h(S));
      H && G(E, s0(H, a(), T, V, N));
    }
  ), pe(() => h(S), () => {
    G(l, h(S).length === 0 ? 1 : Math.max(...h(S).map((H) => (H.internals.z || 5) + 1)));
  }), pe(() => o(), () => {
    G(u, o().filter((H) => H.selected).length);
  }), pe(
    () => (J(b()), h(S), h(u)),
    () => {
      G(c, typeof b() == "boolean" ? b() : h(S).length === 1 && h(S)[0].selected && h(u) === 1);
    }
  ), kt(), Be();
  var I = dt(), z = Ce(I);
  {
    var Y = (H) => {
      var $ = Ym();
      let M;
      var O = K($);
      Tt(O, t, "default", {}), X($), Mt($, (A, Z) => Ki == null ? void 0 : Ki(A, Z), () => ({ domNode: s() })), Te(
        (A) => {
          $e($, "data-id", A), M = xt($, "", M, {
            position: "absolute",
            transform: h(E),
            "z-index": h(l)
          });
        },
        [
          () => h(S).reduce((A, Z) => `${A}${Z.id} `, "").trim()
        ],
        be
      ), L(H, $);
    };
    ke(z, (H) => {
      s() && h(c) && h(S) && H(Y);
    });
  }
  L(e, I);
  var P = he({
    get nodeId() {
      return d();
    },
    set nodeId(H) {
      d(H), p();
    },
    get position() {
      return f();
    },
    set position(H) {
      f(H), p();
    },
    get align() {
      return v();
    },
    set align(H) {
      v(H), p();
    },
    get offset() {
      return w();
    },
    set offset(H) {
      w(H), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(H) {
      b(H), p();
    }
  });
  return r(), P;
}
le(
  Ld,
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
    (!g0(l, r) || o) && (r = l, a(u ? l : l[0] ?? null), o = !1);
  });
}
const su = "tinyflow-component";
class Xm {
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
  const e = _e([]), t = _e([]), n = _e({ x: 250, y: 100, zoom: 1 });
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
}, Ci = Wm();
var Km = /* @__PURE__ */ ae("<button><!></button>");
function nt(e, t) {
  ve(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Km();
  let i;
  var a = K(o);
  return Sr(a, () => n() ?? _t), X(o), Te(() => i = xn(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), he({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
le(nt, { children: {} }, [], [], !0);
var jm = /* @__PURE__ */ ae("<input>");
function Ad(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = jm();
  Eo(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), he();
}
le(Ad, {}, [], [], !0);
var qm = /* @__PURE__ */ ae("<input>");
function zt(e, t) {
  ve(t, !0);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = qm();
  Eo(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), he();
}
le(zt, {}, [], [], !0);
var Fm = /* @__PURE__ */ ae("<textarea></textarea>");
function Rt(e, t) {
  ve(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = Fm();
  zv(o);
  let i;
  return Te(() => i = xn(o, i, {
    ...r,
    class: `tf-textarea nodrag ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, o), he({
    get value() {
      return n();
    },
    set value(a) {
      n(a), p();
    }
  });
}
le(Rt, { value: {} }, [], [], !0);
var Gm = /* @__PURE__ */ ae('<div role="button"><!></div>'), Um = /* @__PURE__ */ ae("<div></div>");
function Id(e, t) {
  const n = gt(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = gt(n, ["items", "onChange", "activeIndex"]);
  ve(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), a = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    a(d), (f = i()) == null || f(c, d);
  }
  Be();
  var l = Um();
  let u;
  return Gt(l, 5, o, No, (c, d, f) => {
    var v = Gm();
    $e(v, "tabindex", f), v.__click = () => s(h(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(h(d), f));
    };
    var w = K(v);
    {
      var b = (_) => {
        var g = qe();
        Te(() => on(g, h(d).label)), L(_, g);
      }, x = (_) => {
        var g = dt(), C = Ce(g);
        Sr(C, () => h(d).label ?? _t), L(_, g);
      };
      ke(w, (_) => {
        typeof h(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    X(v), Te(() => Ht(v, 1, `tf-tabs-item ${(f === a() ? "active" : "") ?? ""}`)), L(c, v);
  }), X(l), Te(() => u = xn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), he({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), p();
    },
    get activeIndex() {
      return a();
    },
    set activeIndex(c) {
      a(c), p();
    }
  });
}
aa(["click", "keydown"]);
le(Id, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Jm = (e, t, n) => t(h(n)), Qm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(h(n)));
}, e2 = /* @__PURE__ */ ae('<span class="tf-collapse-item-title-icon"><!></span>'), t2 = /* @__PURE__ */ ae('<div class="tf-collapse-item-description"><!></div>'), n2 = /* @__PURE__ */ ae('<div class="tf-collapse-item-content"><!></div>'), r2 = /* @__PURE__ */ ae('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), o2 = /* @__PURE__ */ ae("<div></div>");
const i2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Rd(e, t) {
  ve(t, !0), st(e, i2);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => fn([]));
  function i(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var a = o2();
  return Gt(a, 21, n, No, (s, l, u) => {
    var c = r2(), d = K(c);
    $e(d, "tabindex", u), d.__click = [Jm, i, l], d.__keydown = [Qm, i, l];
    var f = K(d);
    {
      var v = (y) => {
        var k = e2(), E = K(k);
        sr(E, {
          get target() {
            return h(l).icon;
          }
        }), X(k), L(y, k);
      };
      ke(f, (y) => {
        h(l).icon && y(v);
      });
    }
    var w = B(f, 2);
    sr(w, {
      get target() {
        return h(l).title;
      }
    });
    var b = B(w, 2);
    X(d);
    var x = B(d, 2);
    {
      var _ = (y) => {
        var k = t2(), E = K(k);
        sr(E, {
          get target() {
            return h(l).description;
          }
        }), X(k), L(y, k);
      };
      ke(x, (y) => {
        h(l).description && y(_);
      });
    }
    var g = B(x, 2);
    {
      var C = (y) => {
        var k = n2(), E = K(k);
        sr(E, {
          get target() {
            return h(l).content;
          }
        }), X(k), L(y, k);
      };
      ke(g, (y) => {
        o().includes(h(l).key) && y(C);
      });
    }
    X(c), Te((y) => Ht(b, 1, `tf-collapse-item-title-arrow ${y ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(h(l).key) ? "rotate-90" : ""
    ]), L(s, c);
  }), X(a), Te(() => {
    xt(a, t.style), Ht(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, a), he({
    get items() {
      return n();
    },
    set items(s) {
      n(s), p();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), p();
    }
  });
}
aa(["click", "keydown"]);
le(Rd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function sr(e, t) {
  ve(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = dt(), o = Ce(r);
  {
    var i = (s) => {
      var l = dt(), u = Ce(l);
      Sr(u, () => n() ?? _t), L(s, l);
    }, a = (s) => {
      var l = dt(), u = Ce(l);
      Ps(u, n), L(s, l);
    };
    ke(o, (s) => {
      typeof n() == "function" ? s(i) : s(a, !1);
    });
  }
  return L(e, r), he({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
le(sr, { target: {} }, [], [], !0);
var a2 = (e, t, n) => t(h(n)), s2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), l2 = /* @__PURE__ */ ae('<div class="tf-select-content-children"><!></div>'), u2 = /* @__PURE__ */ ae('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), c2 = /* @__PURE__ */ ae('<div class="tf-select-content nopan nodrag"><!></div>'), d2 = /* @__PURE__ */ ae("<!> <!>", 1), f2 = /* @__PURE__ */ ae('<div class="tf-select-input-placeholder"> </div>'), v2 = /* @__PURE__ */ ae('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), h2 = /* @__PURE__ */ ae("<div><!></div>");
function zn(e, t) {
  ve(t, !0);
  const n = (C, y = _t) => {
    var k = dt(), E = Ce(k);
    Gt(E, 19, y, (S, V) => `${V}_${S.value}`, (S, V) => {
      var T = u2(), N = Ce(T);
      N.__click = [a2, b, V];
      var I = K(N), z = K(I);
      {
        var Y = (M) => {
          var O = s2();
          L(M, O);
        };
        ke(z, (M) => {
          h(V).children && h(V).children.length > 0 && M(Y);
        });
      }
      X(I);
      var P = B(I, 2);
      sr(P, {
        get target() {
          return h(V).label;
        }
      }), X(N);
      var H = B(N, 2);
      {
        var $ = (M) => {
          var O = l2(), A = K(O);
          n(A, () => h(V).children), X(O), L(M, O);
        };
        ke(H, (M) => {
          h(V).children && h(V).children.length > 0 && (l() || c().includes(h(V).value)) && M($);
        });
      }
      L(S, T);
    }), L(C, k);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), i = m(t, "onSelect", 7), a = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ Vt(t, [
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
  ]), v = /* @__PURE__ */ ze(() => {
    const C = [], y = (k) => {
      for (let E of k)
        a().length > 0 ? a().includes(E.value) && C.push(E) : s().includes(E.value) && C.push(E), E.children && E.children.length > 0 && y(E.children);
    };
    return y(r()), C;
  }), w;
  function b(C) {
    var y, k;
    if (C.children && C.children.length > 0) {
      (y = o()) == null || y(C);
      return;
    } else
      w == null || w.hide(), (k = i()) == null || k(C);
  }
  var x = h2();
  let _;
  var g = K(x);
  return Dn(
    oi(g, {
      floating: (C) => {
        var y = c2(), k = K(y);
        n(k, r), X(y), L(C, y);
      },
      children: (C, y) => {
        var k = v2();
        let E;
        var S = K(k);
        Gt(
          S,
          23,
          () => h(v),
          (V, T) => `${T}_${V.value}`,
          (V, T, N) => {
            var I = dt(), z = Ce(I);
            {
              var Y = (H) => {
                var $ = dt(), M = Ce($);
                {
                  var O = (A) => {
                    sr(A, {
                      get target() {
                        return h(T).label;
                      }
                    });
                  };
                  ke(M, (A) => {
                    h(N) === 0 && A(O);
                  });
                }
                L(H, $);
              }, P = (H) => {
                var $ = d2(), M = Ce($);
                sr(M, {
                  get target() {
                    return h(T).label;
                  }
                });
                var O = B(M, 2);
                {
                  var A = (Z) => {
                    var j = qe(",");
                    L(Z, j);
                  };
                  ke(O, (Z) => {
                    h(N) < h(v).length - 1 && Z(A);
                  });
                }
                L(H, $);
              };
              ke(z, (H) => {
                u() ? H(P, !1) : H(Y);
              });
            }
            L(V, I);
          },
          (V) => {
            var T = f2(), N = K(T, !0);
            X(T), Te(() => on(N, d())), L(V, T);
          }
        ), X(S), Oe(2), X(k), Te(() => E = xn(k, E, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), L(C, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => w = C,
    () => w
  ), X(x), Te(() => _ = xn(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), L(e, x), he({
    get items() {
      return r();
    },
    set items(C) {
      r(C), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), p();
    },
    get onSelect() {
      return i();
    },
    set onSelect(C) {
      i(C), p();
    },
    get value() {
      return a();
    },
    set value(C = []) {
      a(C), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), p();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), p();
    }
  });
}
aa(["click"]);
le(
  zn,
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
const Yo = Math.min, Kr = Math.max, Fi = Math.round, Tn = (e) => ({
  x: e,
  y: e
}), g2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, p2 = {
  start: "end",
  end: "start"
};
function ss(e, t, n) {
  return Kr(e, Yo(t, n));
}
function ti(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hr(e) {
  return e.split("-")[0];
}
function ni(e) {
  return e.split("-")[1];
}
function Bd(e) {
  return e === "x" ? "y" : "x";
}
function Ks(e) {
  return e === "y" ? "height" : "width";
}
function oo(e) {
  return ["top", "bottom"].includes(Hr(e)) ? "y" : "x";
}
function js(e) {
  return Bd(oo(e));
}
function m2(e, t, n) {
  n === void 0 && (n = !1);
  const r = ni(e), o = js(e), i = Ks(o);
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
  let i = w2(Hr(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(ls)))), i;
}
function Gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => g2[t]);
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
function Zd(e) {
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
  const i = oo(t), a = js(t), s = Ks(a), l = Hr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  } = lu(u, r, l), f = r, v = {}, w = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: _
    } = s[b], {
      x: g,
      y: C,
      data: y,
      reset: k
    } = await _({
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
    c = g ?? c, d = C ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...y
      }
    }, k && w <= 50 && (w++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
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
    altBoundary: f = !1,
    padding: v = 0
  } = ti(t, e), w = Zd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Ui(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = Ui(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: g,
    strategy: l
  }) : _);
  return {
    top: (x.top - y.top + w.top) / C.y,
    bottom: (y.bottom - x.bottom + w.bottom) / C.y,
    left: (x.left - y.left + w.left) / C.x,
    right: (y.right - x.right + w.right) / C.x
  };
}
const _2 = (e) => ({
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
    const d = Zd(c), f = {
      x: n,
      y: r
    }, v = js(o), w = Ks(v), b = await a.getDimensions(u), x = v === "y", _ = x ? "top" : "left", g = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", y = i.reference[w] + i.reference[v] - f[v] - i.floating[w], k = f[v] - i.reference[v], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = E ? E[C] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(E))) && (S = s.floating[C] || i.floating[w]);
    const V = y / 2 - k / 2, T = S / 2 - b[w] / 2 - 1, N = Yo(d[_], T), I = Yo(d[g], T), z = N, Y = S - b[w] - I, P = S / 2 - b[w] / 2 + V, H = ss(z, P, Y), $ = !l.arrow && ni(o) != null && P !== H && i.reference[w] / 2 - (P < z ? N : I) - b[w] / 2 < 0, M = $ ? P < z ? P - z : P - Y : 0;
    return {
      [v]: f[v] + M,
      data: {
        [v]: H,
        centerOffset: P - H - M,
        ...$ && {
          alignmentOffset: M
        }
      },
      reset: $
    };
  }
}), C2 = function(e) {
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
        fallbackAxisSideDirection: w = "none",
        flipAlignment: b = !0,
        ...x
      } = ti(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Hr(o), g = oo(s), C = Hr(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (C || !b ? [Gi(s)] : y2(s)), E = w !== "none";
      !f && E && k.push(...b2(s, b, w, y));
      const S = [s, ...k], V = await Yd(t, x), T = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && T.push(V[_]), d) {
        const P = m2(o, a, y);
        T.push(V[P[0]], V[P[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: T
      }], !T.every((P) => P <= 0)) {
        var I, z;
        const P = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, H = S[P];
        if (H)
          return {
            data: {
              index: P,
              overflows: N
            },
            reset: {
              placement: H
            }
          };
        let $ = (z = N.filter((M) => M.overflows[0] <= 0).sort((M, O) => M.overflows[1] - O.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var Y;
              const M = (Y = N.filter((O) => {
                if (E) {
                  const A = oo(O.placement);
                  return A === g || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((A) => A > 0).reduce((A, Z) => A + Z, 0)]).sort((O, A) => O[1] - A[1])[0]) == null ? void 0 : Y[0];
              M && ($ = M);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Hr(n), s = ni(n), l = oo(n) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = i && l ? -1 : 1, d = ti(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof w == "number" && (v = s === "end" ? w * -1 : w), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const E2 = function(e) {
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
}, S2 = function(e) {
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
              x: _,
              y: g
            } = x;
            return {
              x: _,
              y: g
            };
          }
        },
        ...l
      } = ti(e, t), u = {
        x: n,
        y: r
      }, c = await Yd(t, l), d = oo(Hr(o)), f = Bd(d);
      let v = u[f], w = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", g = v + c[x], C = v - c[_];
        v = ss(g, v, C);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", g = w + c[x], C = w - c[_];
        w = ss(g, w, C);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: w
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
function an(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (Xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xd(e) {
  return ma() ? e instanceof Node || e instanceof an(e).Node : !1;
}
function $n(e) {
  return ma() ? e instanceof Element || e instanceof an(e).Element : !1;
}
function Ln(e) {
  return ma() ? e instanceof HTMLElement || e instanceof an(e).HTMLElement : !1;
}
function uu(e) {
  return !ma() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof an(e).ShadowRoot;
}
function ri(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = _n(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function P2(e) {
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
  const t = Fs(), n = $n(e) ? _n(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function M2(e) {
  let t = gr(e);
  for (; Ln(t) && !io(t); ) {
    if (qs(t))
      return t;
    if (ya(t))
      return null;
    t = gr(t);
  }
  return null;
}
function Fs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function io(e) {
  return ["html", "body", "#document"].includes(fo(e));
}
function _n(e) {
  return an(e).getComputedStyle(e);
}
function wa(e) {
  return $n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gr(e) {
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
function Wd(e) {
  const t = gr(e);
  return io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ln(t) && ri(t) ? t : Wd(t);
}
function Kd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Wd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = an(o);
  return i ? (us(a), t.concat(a, a.visualViewport || [], ri(o) ? o : [], [])) : t.concat(o, Kd(o, []));
}
function us(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jd(e) {
  const t = _n(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ln(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Fi(n) !== i || Fi(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function qd(e) {
  return $n(e) ? e : e.contextElement;
}
function jr(e) {
  const t = qd(e);
  if (!Ln(t))
    return Tn(1);
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
const T2 = /* @__PURE__ */ Tn(0);
function Fd(e) {
  const t = an(e);
  return !Fs() || !t.visualViewport ? T2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function H2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== an(e) ? !1 : t;
}
function Xo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = qd(e);
  let a = Tn(1);
  t && (r ? $n(r) && (a = jr(r)) : a = jr(e));
  const s = H2(i, n, r) ? Fd(i) : Tn(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = an(i), v = r && $n(r) ? an(r) : r;
    let w = f, b = us(w);
    for (; b && r && v !== w; ) {
      const x = jr(b), _ = b.getBoundingClientRect(), g = _n(b), C = _.left + (b.clientLeft + parseFloat(g.paddingLeft)) * x.x, y = _.top + (b.clientTop + parseFloat(g.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += y, w = an(b), b = us(w);
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
  return t ? t.left + n : Xo(Un(e)).left + n;
}
function Gd(e, t, n) {
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
  }, u = Tn(1);
  const c = Tn(0), d = Ln(r);
  if ((d || !d && !i) && ((fo(r) !== "body" || ri(a)) && (l = wa(r)), Ln(r))) {
    const v = Xo(r);
    u = jr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = a && !d && !i ? Gd(a, l, !0) : Tn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function O2(e) {
  return Array.from(e.getClientRects());
}
function N2(e) {
  const t = Un(e), n = wa(e), r = e.ownerDocument.body, o = Kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Gs(e);
  const s = -n.scrollTop;
  return _n(r).direction === "rtl" && (a += Kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function D2(e, t) {
  const n = an(e), r = Un(e), o = n.visualViewport;
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
function z2(e, t) {
  const n = Xo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ln(e) ? jr(e) : Tn(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = D2(e, n);
  else if (t === "document")
    r = N2(Un(e));
  else if ($n(t))
    r = z2(t, n);
  else {
    const o = Fd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ui(r);
}
function Ud(e, t) {
  const n = gr(e);
  return n === t || !$n(n) || io(n) ? !1 : _n(n).position === "fixed" || Ud(n, t);
}
function L2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Kd(e, []).filter((s) => $n(s) && fo(s) !== "body"), o = null;
  const i = _n(e).position === "fixed";
  let a = i ? gr(e) : e;
  for (; $n(a) && !io(a); ) {
    const s = _n(a), l = qs(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || ri(a) && !l && Ud(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = gr(a);
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
    return l.top = Kr(c.top, l.top), l.right = Yo(c.right, l.right), l.bottom = Yo(c.bottom, l.bottom), l.left = Kr(c.left, l.left), l;
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
  const r = Ln(t), o = Un(t), i = n === "fixed", a = Xo(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Tn(0);
  if (r || !r && !i)
    if ((fo(t) !== "body" || ri(o)) && (s = wa(t)), r) {
      const f = Xo(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Gs(o));
  const u = o && !r && !i ? Gd(o, s) : Tn(0), c = a.left + s.scrollLeft - l.x - u.x, d = a.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: a.width,
    height: a.height
  };
}
function Aa(e) {
  return _n(e).position === "static";
}
function du(e, t) {
  if (!Ln(e) || _n(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function Jd(e, t) {
  const n = an(e);
  if (ya(e))
    return n;
  if (!Ln(e)) {
    let o = gr(e);
    for (; o && !io(o); ) {
      if ($n(o) && !Aa(o))
        return o;
      o = gr(o);
    }
    return n;
  }
  let r = du(e, t);
  for (; r && P2(r) && Aa(r); )
    r = du(r, t);
  return r && io(r) && Aa(r) && !qs(r) ? n : r || M2(e) || n;
}
const B2 = async function(e) {
  const t = this.getOffsetParent || Jd, n = this.getDimensions, r = await n(e.floating);
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
  return _n(e).direction === "rtl";
}
const Y2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: V2,
  getDocumentElement: Un,
  getClippingRect: A2,
  getOffsetParent: Jd,
  getElementRects: B2,
  getClientRects: O2,
  getDimensions: I2,
  getScale: jr,
  isElement: $n,
  isRTL: Z2
}, X2 = E2, W2 = S2, K2 = C2, j2 = _2, q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Y2,
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
    const _ = document.querySelector(e);
    if (_)
      e = _;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const _ = document.querySelector(n);
    if (_)
      u = _;
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
        X2(o),
        // 手动偏移配置
        K2(i),
        //自动翻转
        W2(a),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [j2({ element: c })] : []
      ]
    }).then(({ x: _, y: g, placement: C, middlewareData: y }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${g}px`
      }), l) {
        const { x: k, y: E } = y.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function w() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(_) {
    _.stopPropagation(), f ? w() : v();
  }
  function x(_) {
    u.contains(_.target) || w();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      w();
    },
    isVisible() {
      return f;
    }
  };
};
var G2 = /* @__PURE__ */ ae('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function oi(e, t) {
  ve(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, a, s;
  ln(() => (s = F2({
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
  var u = G2(), c = K(u), d = K(c);
  Sr(d, n), X(c), Dn(c, (w) => i = w, () => i);
  var f = B(c, 2), v = K(f);
  return Sr(v, r), X(f), Dn(f, (w) => a = w, () => a), X(u), L(e, u), he({
    hide: l,
    get children() {
      return n();
    },
    set children(w) {
      n(w), p();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), p();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), p();
    }
  });
}
le(oi, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function at(e, t) {
  ve(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var a = dt(), s = Ce(a);
  return Wv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Te(() => c = xn(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = dt(), f = Ce(d);
    Sr(f, () => n() ?? _t), L(u, d);
  }), L(e, a), he({
    get children() {
      return n();
    },
    set children(l) {
      n(l), p();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), p();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), p();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), p();
    }
  });
}
le(at, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var U2 = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const J2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ba(e, t) {
  ve(t, !0), st(e, J2);
  const n = /* @__PURE__ */ Vt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  nt(e, bt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = U2();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), he();
}
le(ba, {}, [], [], !0);
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
}, yr = () => Er("tinyflow_options");
var ty = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), ny = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ry = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), oy = /* @__PURE__ */ ae('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), iy = /* @__PURE__ */ ae('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const ay = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function En(e, t) {
  ve(t, !0), st(e, ay);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), a = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Ut(), x = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: a()
    }
  ], { deleteNode: _ } = Q2(), { copyNode: g } = ey(), C = yr(), y = () => {
    var $;
    ($ = C.onNodeExecute) == null || $.call(C, b(r()));
  };
  var k = iy(), E = Ce(k);
  {
    var S = ($) => {
      Ld($, {
        get position() {
          return Me.Top;
        },
        align: "end",
        children: (M, O) => {
          var A = oy(), Z = K(A);
          {
            var j = (re) => {
              nt(re, {
                class: "tf-node-toolbar-item",
                onclick: y,
                children: (we, xe) => {
                  var ce = ty();
                  L(we, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ke(Z, (re) => {
              s() && re(j);
            });
          }
          var F = B(Z, 2);
          {
            var ue = (re) => {
              nt(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  g(r());
                },
                children: (we, xe) => {
                  var ce = ny();
                  L(we, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ke(F, (re) => {
              l() && re(ue);
            });
          }
          var Q = B(F, 2);
          {
            var W = (re) => {
              nt(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  _(r());
                },
                children: (we, xe) => {
                  var ce = ry();
                  L(we, ce);
                },
                $$slots: { default: !0 }
              });
            };
            ke(Q, (re) => {
              u() && re(W);
            });
          }
          X(A), L(M, A);
        },
        $$slots: { default: !0 }
      });
    };
    ke(E, ($) => {
      (s() || l() || u()) && $(S);
    });
  }
  var V = B(E, 2), T = B(K(V), 2), N = K(T);
  Rd(N, {
    items: x,
    activeKeys: v,
    onChange: ($, M) => {
      var O;
      w(r(), { expand: M == null ? void 0 : M.includes("key") }), (O = f()) == null || O(M != null && M.includes("key") ? "key" : "");
    }
  }), X(T), X(V);
  var I = B(V, 2);
  {
    var z = ($) => {
      hr($, {
        type: "target",
        get position() {
          return Me.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ke(I, ($) => {
      d() && $(z);
    });
  }
  var Y = B(I, 2);
  {
    var P = ($) => {
      hr($, {
        type: "source",
        get position() {
          return Me.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ke(Y, ($) => {
      c() && $(P);
    });
  }
  var H = B(Y, 2);
  return Sr(H, () => i() ?? _t), L(e, k), he({
    get data() {
      return n();
    },
    set data($) {
      n($), p();
    },
    get id() {
      return r();
    },
    set id($ = "") {
      r($), p();
    },
    get icon() {
      return o();
    },
    set icon($) {
      o($), p();
    },
    get handle() {
      return i();
    },
    set handle($) {
      i($), p();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute($ = !0) {
      s($), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy($ = !0) {
      l($), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete($ = !0) {
      u($), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle($ = !0) {
      c($), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle($ = !0) {
      d($), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse($) {
      f($), p();
    }
  });
}
le(
  En,
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
function Et() {
  return Er("svelteflow__node_id");
}
const Qd = [
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
    value: "fixed",
    label: "固定值"
  }
  // {
  //     value: 'input',
  //     label: '输入'
  // }
];
var ly = /* @__PURE__ */ ae('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), uy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), cy = /* @__PURE__ */ ae('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function ef(e, t) {
  ve(t, !0), st(e, dy);
  const [n, r] = ft(), o = () => ne(h(l), "$node", n), i = m(t, "parameter", 7), a = m(t, "index", 7);
  let s = Et(), l = /* @__PURE__ */ ze(() => Dr(s)), u = /* @__PURE__ */ ze(() => {
    var T, N;
    return {
      ...i(),
      ...(N = (T = o()) == null ? void 0 : T.data) == null ? void 0 : N.parameters[a()]
    };
  });
  const { updateNodeData: c } = Ut(), d = (T, N) => {
    c(s, (I) => {
      let z = I.data.parameters;
      return z[a()][T] = N, { parameters: z };
    });
  }, f = (T) => {
    const N = T.target.value;
    d("name", N);
  }, v = (T) => {
    const N = T.target.checked;
    d("required", N);
  }, w = (T) => {
    const N = T.value;
    N && d("dataType", N);
  };
  let b;
  const x = () => {
    c(s, (T) => {
      let N = T.data.parameters;
      return N.splice(a(), 1), { parameters: [...N] };
    }), b == null || b.hide();
  };
  var _ = cy(), g = Ce(_), C = K(g);
  zt(C, {
    style: "width: 100%;",
    get value() {
      return h(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), X(g);
  var y = B(g, 2), k = K(y);
  Ad(k, {
    get checked() {
      return h(u).required;
    },
    onchange: v
  }), X(y);
  var E = B(y, 2), S = K(E);
  Dn(
    oi(S, {
      placement: "bottom",
      floating: (T) => {
        var N = ly(), I = K(N), z = B(K(I));
        const Y = /* @__PURE__ */ ze(() => h(u).dataType ? [h(u).dataType] : ["String"]);
        zn(z, {
          items: Qd,
          style: "width: 100%",
          onSelect: w,
          get value() {
            return h(Y);
          }
        }), X(I);
        var P = B(I, 2), H = B(K(P));
        Rt(H, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return h(u).defaultValue;
          },
          onchange: (Z) => {
            const j = Z.target.value;
            d("defaultValue", j);
          }
        }), X(P);
        var $ = B(P, 2), M = B(K($));
        Rt(M, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return h(u).description;
          },
          onchange: (Z) => {
            const j = Z.target.value;
            d("description", j);
          }
        }), X($);
        var O = B($, 2), A = K(O);
        nt(A, {
          onclick: x,
          children: (Z, j) => {
            Oe();
            var F = qe("删除");
            L(Z, F);
          },
          $$slots: { default: !0 }
        }), X(O), X(N), L(T, N);
      },
      children: (T, N) => {
        nt(T, {
          class: "input-btn-more",
          children: (I, z) => {
            var Y = uy();
            L(I, Y);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => b = T,
    () => b
  ), X(E), L(e, _);
  var V = he({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), p();
    },
    get index() {
      return a();
    },
    set index(T) {
      a(T), p();
    }
  });
  return r(), V;
}
le(ef, { parameter: {}, index: {} }, [], [], !0);
var fy = /* @__PURE__ */ ae('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), vy = /* @__PURE__ */ ae('<div class="none-params svelte-3n0wca">无输入参数</div>'), hy = /* @__PURE__ */ ae('<div class="input-container svelte-3n0wca"><!> <!></div>');
const gy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function tf(e, t) {
  ve(t, !0), st(e, gy);
  const [n, r] = ft(), o = () => ne(h(a), "$node", n);
  let i = Et(), a = /* @__PURE__ */ ze(() => Dr(i)), s = /* @__PURE__ */ ze(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = hy(), u = K(l);
  {
    var c = (f) => {
      var v = fy();
      Oe(4), L(f, v);
    };
    ke(u, (f) => {
      h(s).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  Gt(
    d,
    19,
    () => h(s),
    (f) => f.id,
    (f, v, w) => {
      ef(f, {
        get parameter() {
          return h(v);
        },
        get index() {
          return h(w);
        }
      });
    },
    (f) => {
      var v = vy();
      L(f, v);
    }
  ), X(l), L(e, l), he(), r();
}
le(tf, {}, [], [], !0);
const nf = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ao()), nf(t.children);
  });
}, Rn = () => {
  const { updateNodeData: e } = Ut();
  return {
    addParameter: (t, n = "parameters", r) => {
      nf(r == null ? void 0 : r.children);
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
var py = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), my = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ ae('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function rf(e, t) {
  ve(t, !0), st(e, wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn();
  return En(e, bt(() => r, {
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
      var l = yy(), u = Ce(l), c = K(u);
      at(c, {
        level: 3,
        children: (v, w) => {
          Oe();
          var b = qe("输入参数");
          L(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(c, 2);
      nt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, w) => {
          var b = my();
          L(v, b);
        },
        $$slots: { default: !0 }
      }), X(u);
      var f = B(u, 2);
      tf(f, {}), L(a, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
le(rf, { data: {} }, [], [], !0);
const of = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), of(e, r.source, n));
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
  const t = Et(), n = Dr(t), { nodes: r, edges: o } = rt();
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
      of(u, t, s);
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
const _y = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function af(e, t) {
  ve(t, !0), st(e, _y);
  const [n, r] = ft(), o = () => ne(h(c), "$node", n), i = () => ne(y, "$selectItems", n);
  ln(() => {
    h(d).refType || _({ value: "ref" });
  });
  const a = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = Et(), c = /* @__PURE__ */ ze(() => Dr(u)), d = /* @__PURE__ */ ze(() => {
    var H;
    return {
      ...a(),
      ...(H = o()) == null ? void 0 : H.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Ut(), v = (H, $) => {
    f(u, (M) => {
      let O = M.data[l()];
      return O[s()] = { ...O[s()], [H]: $ }, { [l()]: O };
    });
  }, w = (H) => {
    const $ = H.target.value;
    v("name", $);
  }, b = (H) => {
    const $ = H.target.value;
    v("value", $);
  }, x = (H) => {
    const $ = H.value;
    v("ref", $);
  }, _ = (H) => {
    const $ = H.value;
    v("refType", $);
  };
  let g;
  const C = () => {
    f(u, (H) => {
      let $ = H.data[l()];
      return $.splice(s(), 1), { [l()]: [...$] };
    }), g == null || g.hide();
  }, y = by();
  var k = $y(), E = Ce(k), S = K(E);
  zt(S, {
    style: "width: 100%;",
    get value() {
      return h(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: w
  }), X(E);
  var V = B(E, 2), T = K(V);
  {
    var N = (H) => {
      zt(H, {
        get value() {
          return h(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, I = (H, $) => {
      {
        var M = (O) => {
          const A = /* @__PURE__ */ ze(() => [h(d).ref]);
          zn(O, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return h(A);
            },
            expandAll: !0,
            onSelect: x
          });
        };
        ke(
          H,
          (O) => {
            h(d).refType !== "input" && O(M);
          },
          $
        );
      }
    };
    ke(T, (H) => {
      h(d).refType === "fixed" ? H(N) : H(I, !1);
    });
  }
  X(V);
  var z = B(V, 2), Y = K(z);
  Dn(
    oi(Y, {
      placement: "bottom",
      floating: (H) => {
        var $ = xy(), M = K($), O = B(K(M));
        const A = /* @__PURE__ */ ze(() => h(d).refType ? [h(d).refType] : []);
        zn(O, {
          items: sy,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return h(A);
          },
          onSelect: _
        }), X(M);
        var Z = B(M, 2), j = B(K(Z));
        Rt(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (re) => {
            const we = re.target.value;
            v("defaultValue", we);
          }
        }), X(Z);
        var F = B(Z, 2), ue = B(K(F));
        Rt(ue, {
          rows: 3,
          style: "width: 100%;",
          onchange: (re) => {
            const we = re.target.value;
            v("description", we);
          }
        }), X(F);
        var Q = B(F, 2), W = K(Q);
        nt(W, {
          onclick: C,
          children: (re, we) => {
            Oe();
            var xe = qe("删除");
            L(re, xe);
          },
          $$slots: { default: !0 }
        }), X(Q), X($), L(H, $);
      },
      children: (H, $) => {
        ba(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => g = H,
    () => g
  ), X(z), L(e, k);
  var P = he({
    get parameter() {
      return a();
    },
    set parameter(H) {
      a(H), p();
    },
    get index() {
      return s();
    },
    set index(H) {
      s(H), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(H) {
      l(H), p();
    }
  });
  return r(), P;
}
le(af, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var Cy = /* @__PURE__ */ ae('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), ky = /* @__PURE__ */ ae('<div class="none-params svelte-1sm1mgi"> </div>'), Ey = /* @__PURE__ */ ae('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Sy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function nn(e, t) {
  ve(t, !0), st(e, Sy);
  const [n, r] = ft(), o = () => ne(h(l), "$node", n), i = m(t, "noneParameterText", 7, "无输入参数"), a = m(t, "dataKeyName", 7, "parameters");
  let s = Et(), l = /* @__PURE__ */ ze(() => Dr(s)), u = /* @__PURE__ */ ze(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[a()]) || []];
  });
  var c = Ey(), d = K(c);
  {
    var f = (b) => {
      var x = Cy();
      Oe(4), L(b, x);
    };
    ke(d, (b) => {
      h(u).length !== 0 && b(f);
    });
  }
  var v = B(d, 2);
  Gt(
    v,
    19,
    () => h(u),
    (b) => b.id,
    (b, x, _) => {
      af(b, {
        get parameter() {
          return h(x);
        },
        get index() {
          return h(_);
        },
        get dataKeyName() {
          return a();
        }
      });
    },
    (b) => {
      var x = ky(), _ = K(x, !0);
      X(x), Te(() => on(_, i())), L(b, x);
    }
  ), X(c), L(e, c);
  var w = he({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(b = "无输入参数") {
      i(b), p();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(b = "parameters") {
      a(b), p();
    }
  });
  return r(), w;
}
le(nn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), My = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ty = /* @__PURE__ */ ae('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const Hy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function sf(e, t) {
  ve(t, !0), st(e, Hy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn();
  return En(e, bt(
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
        var s = Py();
        L(a, s);
      },
      children: (a, s) => {
        var l = Ty(), u = Ce(l), c = K(u);
        at(c, {
          level: 3,
          children: (v, w) => {
            Oe();
            var b = qe("输出参数");
            L(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        nt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, w) => {
            var b = My();
            L(v, b);
          },
          $$slots: { default: !0 }
        }), X(u);
        var f = B(u, 2);
        nn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(a, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  });
}
le(sf, { data: {} }, [], [], !0);
var Vy = /* @__PURE__ */ Ee('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Oy = /* @__PURE__ */ ae('<div class="input-more-item svelte-1cfeest"><!></div>'), Ny = /* @__PURE__ */ ae('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Dy = /* @__PURE__ */ ae('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const zy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function lf(e, t) {
  ve(t, !0), st(e, zy);
  const [n, r] = ft(), o = () => ne(h(u), "$node", n), i = m(t, "parameter", 7), a = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = Et(), u = /* @__PURE__ */ ze(() => Dr(l)), c = /* @__PURE__ */ ze(() => {
    var M;
    let O = (M = o()) == null ? void 0 : M.data[s()], A;
    if (O && a().length > 0) {
      let Z = O;
      for (let j = 0; j < a().length; j++) {
        const F = a()[j];
        j == a().length - 1 ? A = Z[F] : Z = Z[F].children;
      }
    }
    return { ...i(), ...A };
  });
  const { updateNodeData: d } = Ut(), f = (M, O) => {
    d(l, (A) => {
      const Z = A.data[s()];
      if (Z && a().length > 0) {
        let j = Z;
        for (let F = 0; F < a().length; F++) {
          const ue = a()[F];
          F == a().length - 1 ? j[ue] = { ...j[ue], [M]: O } : j = Z[ue].children;
        }
      }
      return { [s()]: Z };
    });
  }, v = (M) => {
    const O = M.target.value;
    f("name", O);
  }, w = (M) => {
    const O = M.value;
    f("dataType", O);
  };
  let b;
  const x = () => {
    d(l, (M) => {
      let O = M.data[s()];
      if (O && a().length > 0) {
        let A = O;
        for (let Z = 0; Z < a().length; Z++) {
          const j = a()[Z];
          Z == a().length - 1 ? A.splice(j, 1) : A = A[j].children;
        }
      }
      return { [s()]: [...O] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (M) => {
      let O = M.data[s()];
      if (O && a().length > 0) {
        let A = O;
        for (let Z = 0; Z < a().length; Z++) {
          const j = a()[Z];
          Z == a().length - 1 ? A[j].children ? A[j].children.push({
            id: ao(),
            name: "newParam",
            dataType: "String"
          }) : A[j].children = [
            {
              id: ao(),
              name: "newParam",
              dataType: "String"
            }
          ] : A = A[j].children;
        }
      }
      return { [s()]: [...O] };
    });
  };
  var g = Dy(), C = Ce(g), y = K(C);
  {
    var k = (M) => {
      var O = dt(), A = Ce(O);
      Gt(A, 17, a, No, (Z, j) => {
        Oe();
        var F = qe(" ");
        L(Z, F);
      }), L(M, O);
    };
    ke(y, (M) => {
      a().length > 1 && M(k);
    });
  }
  var E = B(y, 2);
  const S = /* @__PURE__ */ ze(() => h(c).nameDisabled === !0);
  zt(E, {
    style: "width: 100%;",
    get value() {
      return h(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return h(S);
    }
  }), X(C);
  var V = B(C, 2), T = K(V);
  const N = /* @__PURE__ */ ze(() => h(c).dataType ? [h(c).dataType] : []), I = /* @__PURE__ */ ze(() => h(c).dataTypeDisabled === !0);
  zn(T, {
    items: Qd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return h(N);
    },
    get disabled() {
      return h(I);
    },
    onSelect: w
  });
  var z = B(T, 2);
  {
    var Y = (M) => {
      nt(M, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (O, A) => {
          var Z = Vy();
          L(O, Z);
        },
        $$slots: { default: !0 }
      });
    };
    ke(z, (M) => {
      (h(c).dataType === "Object" || h(c).dataType === "Array") && h(c).addChildDisabled !== !0 && M(Y);
    });
  }
  X(V);
  var P = B(V, 2), H = K(P);
  Dn(
    oi(H, {
      placement: "bottom",
      floating: (M) => {
        var O = Ny(), A = K(O), Z = B(K(A));
        Rt(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            const re = W.target.value;
            f("defaultValue", re);
          }
        }), X(A);
        var j = B(A, 2), F = B(K(j));
        Rt(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            const re = W.target.value;
            f("description", re);
          }
        }), X(j);
        var ue = B(j, 2);
        {
          var Q = (W) => {
            var re = Oy(), we = K(re);
            nt(we, {
              onclick: x,
              children: (xe, ce) => {
                Oe();
                var fe = qe("删除");
                L(xe, fe);
              },
              $$slots: { default: !0 }
            }), X(re), L(W, re);
          };
          ke(ue, (W) => {
            h(c).deleteDisabled !== !0 && W(Q);
          });
        }
        X(O), L(M, O);
      },
      children: (M, O) => {
        ba(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => b = M,
    () => b
  ), X(P), L(e, g);
  var $ = he({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), p();
    },
    get position() {
      return a();
    },
    set position(M) {
      a(M), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(M) {
      s(M), p();
    }
  });
  return r(), $;
}
le(lf, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var Ly = /* @__PURE__ */ ae("<!> <!>", 1), Ay = /* @__PURE__ */ ae('<div class="none-params svelte-1sm1mgi"> </div>'), Iy = /* @__PURE__ */ ae('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Ry = /* @__PURE__ */ ae('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const By = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Jn(e, t) {
  ve(t, !0), st(e, By);
  const [n, r] = ft(), o = () => ne(h(u), "$node", n), i = (x, _ = _t, g = _t) => {
    var C = dt(), y = Ce(C);
    Gt(
      y,
      19,
      _,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, E, S) => {
        var V = Ly(), T = Ce(V);
        const N = /* @__PURE__ */ ze(() => [...g(), h(S)]);
        lf(T, {
          get parameter() {
            return h(E);
          },
          get position() {
            return h(N);
          },
          get dataKeyName() {
            return s();
          }
        });
        var I = B(T, 2);
        {
          var z = (Y) => {
            var P = /* @__PURE__ */ be(() => [...g(), h(S)]);
            i(Y, () => h(E).children, () => h(P));
          };
          ke(I, (Y) => {
            h(E).children && Y(z);
          });
        }
        L(k, V);
      },
      (k) => {
        var E = dt(), S = Ce(E);
        {
          var V = (T) => {
            var N = Ay(), I = K(N, !0);
            X(N), Te(() => on(I, a())), L(T, N);
          };
          ke(S, (T) => {
            g().length === 0 && T(V);
          });
        }
        L(k, E);
      }
    ), L(x, C);
  }, a = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = Et(), u = /* @__PURE__ */ ze(() => Dr(l)), c = /* @__PURE__ */ ze(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Ry(), f = K(d);
  {
    var v = (x) => {
      var _ = Iy();
      Oe(4), L(x, _);
    };
    ke(f, (x) => {
      h(c).length !== 0 && x(v);
    });
  }
  var w = B(f, 2);
  i(w, () => h(c) || [], () => []), X(d), L(e, d);
  var b = he({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(x = "无输出参数") {
      a(x), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), p();
    }
  });
  return r(), b;
}
le(Jn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Zy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Yy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ ae('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const Ky = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function uf(e, t) {
  ve(t, !0), st(e, Ky);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Dt(fn([]));
  ln(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    h(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return En(e, bt(
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
        var d = Wy(), f = Ce(d), v = K(f);
        at(v, {
          level: 3,
          children: (fe, ie) => {
            Oe();
            var ye = qe("输入参数");
            L(fe, ye);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (fe, ie) => {
            var ye = Yy();
            L(fe, ye);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (fe, ie) => {
            Oe();
            var ye = qe("模型设置");
            L(fe, ye);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), g = K(_);
        const C = /* @__PURE__ */ ze(() => n().llmId ? [n().llmId] : []);
        zn(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (fe) => {
            const ie = fe.value;
            l(o, () => ({ llmId: ie }));
          },
          get value() {
            return h(C);
          }
        });
        var y = B(g, 2);
        ba(y, {}), X(_);
        var k = B(_, 4), E = K(k), S = K(E), V = K(S);
        X(S);
        var T = B(S, 2);
        Eo(T), X(E), X(k);
        var N = B(k, 2), I = K(N), z = K(I), Y = K(z);
        X(z);
        var P = B(z, 2);
        Eo(P), X(I), X(N);
        var H = B(N, 2), $ = K(H), M = K($), O = K(M);
        X(M);
        var A = B(M, 2);
        Eo(A), X($), X(H);
        var Z = B(H, 4), j = K(Z);
        const F = /* @__PURE__ */ ze(() => n().systemPrompt || "");
        Rt(j, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return h(F);
          },
          oninput: (fe) => {
            l(o, { systemPrompt: fe.target.value });
          }
        }), X(Z);
        var ue = B(Z, 4), Q = K(ue);
        const W = /* @__PURE__ */ ze(() => n().userPrompt || "");
        Rt(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return h(W);
          },
          oninput: (fe) => {
            l(o, { userPrompt: fe.target.value });
          }
        }), X(ue);
        var re = B(ue, 2), we = K(re);
        at(we, {
          level: 3,
          mt: "10px",
          children: (fe, ie) => {
            Oe();
            var ye = qe("输出参数");
            L(fe, ye);
          },
          $$slots: { default: !0 }
        });
        var xe = B(we, 2);
        nt(xe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (fe, ie) => {
            var ye = Xy();
            L(fe, ye);
          },
          $$slots: { default: !0 }
        }), X(re);
        var ce = B(re, 2);
        Jn(ce, {}), Te(() => {
          on(V, `Temperature: ${n().temperature ?? 0.5}`), Sa(T, n().temperature ?? 0.5), on(Y, `Top P: ${n().topP ?? 0.9}`), Sa(P, n().topP ?? 0.9), on(O, `Top K: ${n().topK ?? 50}`), Sa(A, n().topK ?? 50);
        }), Ue("mousedown", T, Pa(function(fe) {
          Ze.call(this, t, fe);
        })), Ue("input", T, (fe) => l(o, { temperature: parseFloat(fe.target.value) })), Ue("mousedown", P, Pa(function(fe) {
          Ze.call(this, t, fe);
        })), Ue("input", P, (fe) => l(o, { topP: parseFloat(fe.target.value) })), Ue("mousedown", A, Pa(function(fe) {
          Ze.call(this, t, fe);
        })), Ue("input", A, (fe) => l(o, { topK: parseInt(fe.target.value) })), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
le(uf, { data: {} }, [], [], !0);
var jy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), qy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function cf(e, t) {
  ve(t, !0), st(e, Uy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  ln(() => {
    n().engine || a(o, () => ({ engine: "qlexpress" }));
  });
  const o = Et(), { addParameter: i } = Rn(), { updateNodeData: a } = Ut(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = jy();
        L(l, u);
      },
      children: (l, u) => {
        var c = Gy(), d = Ce(c), f = K(d);
        at(f, {
          level: 3,
          children: (N, I) => {
            Oe();
            var z = qe("输入参数");
            L(N, z);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        nt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, I) => {
            var z = qy();
            L(N, z);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = B(d, 2);
        nn(w, {});
        var b = B(w, 2);
        at(b, {
          level: 3,
          mt: "10px",
          children: (N, I) => {
            Oe();
            var z = qe("代码");
            L(N, z);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 4), _ = K(x);
        const g = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : ["qlexpress"]);
        zn(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (N) => {
            const I = N.value;
            a(o, () => ({ engine: I }));
          },
          get value() {
            return h(g);
          }
        }), X(x);
        var C = B(x, 4), y = K(C);
        const k = /* @__PURE__ */ ze(() => n().code || "");
        Rt(y, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (N) => {
            a(o, () => ({ code: N.target.value }));
          },
          get value() {
            return h(k);
          }
        }), X(C);
        var E = B(C, 2), S = K(E);
        at(S, {
          level: 3,
          mt: "10px",
          children: (N, I) => {
            Oe();
            var z = qe("输出参数");
            L(N, z);
          },
          $$slots: { default: !0 }
        });
        var V = B(S, 2);
        nt(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (N, I) => {
            var z = Fy();
            L(N, z);
          },
          $$slots: { default: !0 }
        }), X(E);
        var T = B(E, 2);
        Jn(T, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
le(cf, { data: {} }, [], [], !0);
var Jy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Qy = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function df(e, t) {
  ve(t, !0), st(e, tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), { updateNodeData: a } = Ut();
  return fr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), En(e, bt(
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
        var u = ew(), c = Ce(u), d = K(c);
        at(d, {
          level: 3,
          children: (k, E) => {
            Oe();
            var S = qe("输入参数");
            L(k, S);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        nt(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, E) => {
            var S = Qy();
            L(k, S);
          },
          $$slots: { default: !0 }
        }), X(c);
        var v = B(c, 2);
        nn(v, {});
        var w = B(v, 2);
        at(w, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Oe();
            var S = qe("代码");
            L(k, S);
          },
          $$slots: { default: !0 }
        });
        var b = B(w, 4), x = K(b);
        const _ = /* @__PURE__ */ ze(() => n().template || "");
        Rt(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            a(o, () => ({ template: k.target.value }));
          },
          get value() {
            return h(_);
          }
        }), X(b);
        var g = B(b, 2), C = K(g);
        at(C, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Oe();
            var S = qe("输出参数");
            L(k, S);
          },
          $$slots: { default: !0 }
        }), X(g);
        var y = B(g, 2);
        Jn(y, {}), L(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
le(df, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), rw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), aw = /* @__PURE__ */ ae('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), sw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ae('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), uw = /* @__PURE__ */ ae('<div style="width: 100%"><!></div>'), cw = /* @__PURE__ */ ae('<div style="width: 100%"><!></div>'), dw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ae('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const vw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function ff(e, t) {
  ve(t, !0), st(e, vw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  ln(() => {
    n().method || s(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = Et(), { addParameter: a } = Rn(), { updateNodeData: s } = Ut();
  return En(e, bt(
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
        var c = fw(), d = Ce(c), f = K(d), v = K(f);
        const w = /* @__PURE__ */ ze(() => n().method ? [n().method] : ["get"]);
        zn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (se) => {
            const de = se.value;
            s(i, () => ({ method: de }));
          },
          get value() {
            return h(w);
          }
        }), X(f);
        var b = B(f, 2), x = K(b);
        const _ = /* @__PURE__ */ ze(() => n().url || "");
        zt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (se) => {
            s(i, () => ({ url: se.target.value }));
          },
          get value() {
            return h(_);
          }
        }), X(b), X(d);
        var g = B(d, 2), C = K(g);
        at(C, {
          level: 3,
          children: (se, de) => {
            Oe();
            var Se = qe("Http 头信息");
            L(se, Se);
          },
          $$slots: { default: !0 }
        });
        var y = B(C, 2);
        nt(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "headers");
          },
          children: (se, de) => {
            var Se = rw();
            L(se, Se);
          },
          $$slots: { default: !0 }
        }), X(g);
        var k = B(g, 2);
        nn(k, { dataKeyName: "headers" });
        var E = B(k, 2), S = K(E);
        at(S, {
          level: 3,
          children: (se, de) => {
            Oe();
            var Se = qe("参数");
            L(se, Se);
          },
          $$slots: { default: !0 }
        });
        var V = B(S, 2);
        nt(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "urlParameters");
          },
          children: (se, de) => {
            var Se = ow();
            L(se, Se);
          },
          $$slots: { default: !0 }
        }), X(E);
        var T = B(E, 2);
        nn(T, { dataKeyName: "urlParameters" });
        var N = B(T, 2);
        at(N, {
          level: 3,
          mt: "10px",
          children: (se, de) => {
            Oe();
            var Se = qe("Body");
            L(se, Se);
          },
          $$slots: { default: !0 }
        });
        var I = B(N, 2), z = K(I), Y = K(z);
        const P = /* @__PURE__ */ ze(() => !n().bodyType);
        zt(Y, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return h(P);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "" });
          }
        }), Oe(), X(z);
        var H = B(z, 2), $ = K(H);
        const M = /* @__PURE__ */ ze(() => n().bodyType === "form-data");
        zt($, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return h(M);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "form-data" });
          }
        }), Oe(), X(H);
        var O = B(H, 2), A = K(O);
        const Z = /* @__PURE__ */ ze(() => n().bodyType === "x-www-form-urlencoded");
        zt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return h(Z);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Oe(), X(O);
        var j = B(O, 2), F = K(j);
        const ue = /* @__PURE__ */ ze(() => n().bodyType === "json");
        zt(F, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return h(ue);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "json" });
          }
        }), Oe(), X(j);
        var Q = B(j, 2), W = K(Q);
        const re = /* @__PURE__ */ ze(() => n().bodyType === "raw");
        zt(W, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return h(re);
          },
          onchange: (se) => {
            var de;
            (de = se.target) != null && de.checked && s(i, { bodyType: "raw" });
          }
        }), Oe(), X(Q), X(I);
        var we = B(I, 2);
        {
          var xe = (se) => {
            var de = aw(), Se = Ce(de), je = K(Se);
            at(je, {
              level: 3,
              children: (lt, te) => {
                Oe();
                var Le = qe("参数");
                L(lt, Le);
              },
              $$slots: { default: !0 }
            });
            var De = B(je, 2);
            nt(De, {
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
            }), X(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromData" }), L(se, de);
          };
          ke(we, (se) => {
            n().bodyType === "form-data" && se(xe);
          });
        }
        var ce = B(we, 2);
        {
          var fe = (se) => {
            var de = lw(), Se = Ce(de), je = K(Se);
            at(je, {
              level: 3,
              children: (lt, te) => {
                Oe();
                var Le = qe("参数");
                L(lt, Le);
              },
              $$slots: { default: !0 }
            });
            var De = B(je, 2);
            nt(De, {
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
            }), X(Se);
            var vt = B(Se, 2);
            nn(vt, { dataKeyName: "fromUrlencoded" }), L(se, de);
          };
          ke(ce, (se) => {
            n().bodyType === "x-www-form-urlencoded" && se(fe);
          });
        }
        var ie = B(ce, 2);
        {
          var ye = (se) => {
            var de = uw(), Se = K(de);
            Rt(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (je) => {
                s(i, { bodyJson: je.target.value });
              }
            }), X(de), L(se, de);
          };
          ke(ie, (se) => {
            n().bodyType === "json" && se(ye);
          });
        }
        var Ge = B(ie, 2);
        {
          var We = (se) => {
            var de = cw(), Se = K(de);
            Rt(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (je) => {
                s(i, { bodyRaw: je.target.value });
              }
            }), X(de), L(se, de);
          };
          ke(Ge, (se) => {
            n().bodyType === "raw" && se(We);
          });
        }
        var Ie = B(Ge, 2), ee = K(Ie);
        at(ee, {
          level: 3,
          mt: "10px",
          children: (se, de) => {
            Oe();
            var Se = qe("输出参数");
            L(se, Se);
          },
          $$slots: { default: !0 }
        });
        var Fe = B(ee, 2);
        nt(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(i, "outputDefs");
          },
          children: (se, de) => {
            var Se = dw();
            L(se, Se);
          },
          $$slots: { default: !0 }
        }), X(Ie);
        var Je = B(Ie, 2);
        Jn(Je, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
le(ff, { data: {} }, [], [], !0);
var hw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), gw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pw = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function vf(e, t) {
  ve(t, !0), st(e, mw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Dt(fn([]));
  ln(async () => {
    var u, c;
    const d = await ((c = (u = a.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    h(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return fr(() => {
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
  }), En(e, bt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = hw();
        L(u, c);
      },
      children: (u, c) => {
        var d = pw(), f = Ce(d), v = K(f);
        at(v, {
          level: 3,
          children: (T, N) => {
            Oe();
            var I = qe("输入参数");
            L(T, I);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, N) => {
            var I = gw();
            L(T, I);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (T, N) => {
            Oe();
            var I = qe("知识库设置");
            L(T, I);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), g = K(_);
        const C = /* @__PURE__ */ ze(() => n().knowledgeId ? [n().knowledgeId] : []);
        zn(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (T) => {
            const N = T.value;
            l(o, () => ({ knowledgeId: N }));
          },
          get value() {
            return h(C);
          }
        }), X(_);
        var y = B(_, 4), k = K(y);
        zt(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(y);
        var E = B(y, 2), S = K(E);
        at(S, {
          level: 3,
          mt: "10px",
          children: (T, N) => {
            Oe();
            var I = qe("输出参数");
            L(T, I);
          },
          $$slots: { default: !0 }
        }), X(E);
        var V = B(E, 2);
        Jn(V, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
le(vf, { data: {} }, [], [], !0);
var yw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ww = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = /* @__PURE__ */ ae('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const xw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function hf(e, t) {
  ve(t, !0), st(e, xw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Dt(fn([]));
  ln(async () => {
    var u;
    const c = await ((u = a.provider) == null ? void 0 : u.knowledge());
    h(s).push(...c || []);
  });
  const { updateNodeData: l } = Ut();
  return fr(() => {
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
  }), En(e, bt(
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
        var d = bw(), f = Ce(d), v = K(f);
        at(v, {
          level: 3,
          children: (H, $) => {
            Oe();
            var M = qe("输入参数");
            L(H, M);
          },
          $$slots: { default: !0 }
        });
        var w = B(v, 2);
        nt(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, $) => {
            var M = ww();
            L(H, M);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = B(f, 2);
        nn(b, {});
        var x = B(b, 2);
        at(x, {
          level: 3,
          mt: "10px",
          children: (H, $) => {
            Oe();
            var M = qe("搜索引擎设置");
            L(H, M);
          },
          $$slots: { default: !0 }
        });
        var _ = B(x, 4), g = K(_);
        const C = /* @__PURE__ */ ze(() => n().knowledgeId ? [n().knowledgeId] : []);
        zn(g, {
          get items() {
            return h(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (H) => {
            const $ = H.value;
            l(o, () => ({ knowledgeId: $ }));
          },
          get value() {
            return h(C);
          }
        }), X(_);
        var y = B(_, 4), k = K(y);
        zt(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), X(y);
        var E = B(y, 4), S = K(E);
        zt(S, { placeholder: "请输入关键字", style: "width: 100%" }), X(E);
        var V = B(E, 4), T = K(V);
        zt(T, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(V);
        var N = B(V, 4), I = K(N);
        Rt(I, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), X(N);
        var z = B(N, 2), Y = K(z);
        at(Y, {
          level: 3,
          mt: "10px",
          children: (H, $) => {
            Oe();
            var M = qe("输出参数");
            L(H, M);
          },
          $$slots: { default: !0 }
        }), X(z);
        var P = B(z, 2);
        Jn(P, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
le(hf, { data: {} }, [], [], !0);
var $w = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), _w = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ae('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const kw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function gf(e, t) {
  ve(t, !0), st(e, kw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Et(), { addParameter: i } = Rn(), a = yr();
  let s = /* @__PURE__ */ Dt(fn([]));
  return ln(async () => {
    var l;
    const u = await ((l = a.provider) == null ? void 0 : l.knowledge());
    h(s).push(...u || []);
  }), En(e, bt(
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
        hr(l, {
          type: "source",
          get position() {
            return Me.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = Cw(), d = Ce(c), f = K(d);
        at(f, {
          level: 3,
          children: (g, C) => {
            Oe();
            var y = qe("循环变量");
            L(g, y);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        nt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (g, C) => {
            var y = _w();
            L(g, y);
          },
          $$slots: { default: !0 }
        }), X(d);
        var w = B(d, 2);
        nn(w, {});
        var b = B(w, 2), x = K(b);
        at(x, {
          level: 3,
          mt: "10px",
          children: (g, C) => {
            Oe();
            var y = qe("输出参数");
            L(g, y);
          },
          $$slots: { default: !0 }
        }), X(b);
        var _ = B(b, 2);
        Jn(_, {}), L(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), he({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
le(gf, { data: {} }, [], [], !0);
const Ew = {
  startNode: rf,
  codeNode: cf,
  llmNode: uf,
  templateNode: df,
  httpNode: ff,
  knowledgeNode: vf,
  searchEngineNode: hf,
  loopNode: gf,
  endNode: sf
};
var Sw = /* @__PURE__ */ ae("<!> ", 1);
function cs(e, t) {
  ve(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), a = m(t, "extra", 7);
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
      var u = Sw(), c = Ce(u);
      Ps(c, n);
      var d = B(c);
      Te(() => on(d, ` ${r() ?? ""}`)), L(s, u);
    },
    $$slots: { default: !0 }
  }), he({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), p();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), p();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), p();
    },
    get description() {
      return i();
    },
    set description(s) {
      i(s), p();
    },
    get extra() {
      return a();
    },
    set extra(s) {
      a(s), p();
    }
  });
}
le(
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
var Pw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Mw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Tw = /* @__PURE__ */ ae('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function pf(e, t) {
  ve(t, !0);
  let n = /* @__PURE__ */ Dt("base"), r = /* @__PURE__ */ Dt("show");
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
  ], a = [], s = yr().customNodes;
  if (s) {
    const x = Object.keys(s).sort((_, g) => (s[_].sortNo || 0) - (s[g].sortNo || 0));
    for (let _ of x)
      a.push({
        icon: s[_].icon,
        title: s[_].title,
        type: _
      });
  }
  var l = Tw(), u = K(l), c = K(u), d = K(c);
  Id(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      G(n, x.value.toString(), !0);
    }
  }), X(c);
  var f = B(c, 2), v = K(f);
  Gt(v, 21, () => o, No, (x, _) => {
    cs(x, bt(() => h(_)));
  }), X(v);
  var w = B(v, 2);
  Gt(w, 21, () => a, No, (x, _) => {
    cs(x, bt(() => h(_)));
  }), X(w), X(f), X(u);
  var b = B(u, 2);
  nt(b, {
    onclick: () => {
      G(r, h(r) ? "" : "show", !0);
    },
    children: (x, _) => {
      var g = dt(), C = Ce(g);
      {
        var y = (E) => {
          var S = Pw();
          L(E, S);
        }, k = (E) => {
          var S = Mw();
          L(E, S);
        };
        ke(C, (E) => {
          h(r) === "show" ? E(y) : E(k, !1);
        });
      }
      L(x, g);
    },
    $$slots: { default: !0 }
  }), X(l), Te(() => {
    Ht(l, 1, `tf-toolbar ${h(r) ?? ""}`), xt(v, `display: ${(h(n) === "base" ? "flex" : "none") ?? ""}`), xt(w, `display: ${(h(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, l), he();
}
le(pf, {}, [], [], !0);
const Hw = () => {
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
}, Ow = () => {
  const { edges: e } = rt();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var Nw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ ae('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), zw = /* @__PURE__ */ Ee('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ ae('<div class="heading svelte-c71dg3"><!> <!></div> <!>', 1), Aw = /* @__PURE__ */ ae("<!> <div></div> <!>", 1);
const Iw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function mf(e, t) {
  var n;
  ve(t, !0), st(e, Iw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ Vt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), i = Et(), { addParameter: a } = Rn(), s = Ut(), l = { ...o, id: i, data: r() }, u = document.createElement("div"), c = yr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  fr(() => {
    r().expand && d && d.append(u);
  }), fr(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ ze(() => ({
    ...r(),
    description: c.description
  }));
  return En(e, bt(
    {
      get data() {
        return h(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var w = dt(), b = Ce(w);
        Ps(b, () => c.icon), L(v, w);
      },
      children: (v, w) => {
        var b = Aw(), x = Ce(b);
        {
          var _ = (k) => {
            var E = Dw(), S = Ce(E), V = K(S);
            at(V, {
              level: 3,
              children: (I, z) => {
                Oe();
                var Y = qe("输入参数");
                L(I, Y);
              },
              $$slots: { default: !0 }
            });
            var T = B(V, 2);
            nt(T, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i);
              },
              children: (I, z) => {
                var Y = Nw();
                L(I, Y);
              },
              $$slots: { default: !0 }
            }), X(S);
            var N = B(S, 2);
            nn(N, {}), L(k, E);
          };
          ke(x, (k) => {
            c.parametersEnable !== !1 && k(_);
          });
        }
        var g = B(x, 2);
        Dn(g, (k) => d = k, () => d);
        var C = B(g, 2);
        {
          var y = (k) => {
            var E = Lw(), S = Ce(E), V = K(S);
            at(V, {
              level: 3,
              mt: "10px",
              children: (I, z) => {
                Oe();
                var Y = qe("输出参数");
                L(I, Y);
              },
              $$slots: { default: !0 }
            });
            var T = B(V, 2);
            nt(T, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(i, "outputDefs");
              },
              children: (I, z) => {
                var Y = zw();
                L(I, Y);
              },
              $$slots: { default: !0 }
            }), X(S);
            var N = B(S, 2);
            Jn(N, {}), L(k, E);
          };
          ke(C, (k) => {
            c.outputDefsEnable !== !1 && k(y);
          });
        }
        Te(() => {
          xt(g, c.rootStyle || ""), Ht(g, 1, Cn(c.rootClass), "svelte-c71dg3");
        }), L(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), he({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
le(mf, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ ae('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Bw = /* @__PURE__ */ ae("<!> <!> <!> <!>", 1), Zw = /* @__PURE__ */ ae('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Yw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function yf(e, t) {
  ve(t, !0), st(e, Yw);
  const n = m(t, "onInit", 7), r = Ut();
  n()(r);
  let o = /* @__PURE__ */ Dt(!1);
  const i = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, a = (E) => {
    var S;
    E.preventDefault();
    const V = r.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), T = (S = E.dataTransfer) == null ? void 0 : S.getData("application/tinyflow"), N = T ? JSON.parse(T) : {}, I = {
      id: `node_${ao()}`,
      position: V,
      data: {},
      ...N
    };
    Ci.addNode(I), Ci.selectNodeOnly(I.id);
  }, { getNode: s } = Hw(), l = (E) => {
    const S = s(E.source), V = s(E.target);
    if (E.sourceHandle === "loop_handle" || S.parentId) {
      const T = r.getEdges();
      for (let N of T)
        if (N.target === E.target) {
          const I = s(N.source);
          if (E.sourceHandle === "loop_handle" && I.parentId !== S.id || S.parentId && I.parentId !== S.parentId)
            return !1;
        }
    }
    return !(!S.parentId && V.parentId && V.parentId !== S.id);
  }, { ensureParentInNodesBefore: u } = Vw(), c = (E, S) => {
    if (!S.isValid)
      return;
    const V = S.toNode;
    if (V.parentId)
      return;
    const T = S.fromNode, N = S.fromHandle, I = { position: { ...V.position } };
    if (N.id === "loop_handle" ? I.parentId = T.id : T.parentId && (I.parentId = T.parentId), I.parentId) {
      const z = s(I.parentId);
      I.position = {
        x: V.position.x - z.position.x,
        y: V.position.y - z.position.y
      }, u(I.parentId, V.id), r.updateNode(V.id, I);
    }
  }, { getEdgesByTarget: d } = Ow(), f = (E) => {
    E.edges.forEach((S) => {
      const V = s(S.target);
      if (V.parentId) {
        const T = d(S.target), N = s(V.parentId);
        if (T.length === 0)
          r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + N.position.x,
              y: V.position.y + N.position.y
            }
          });
        else {
          let I = !1;
          for (let z = 0; z < T.length; z++) {
            const Y = T[z], P = s(Y.source);
            if (P.parentId || P.type === "loopNode") {
              I = !0;
              break;
            }
          }
          I || r.updateNode(V.id, {
            parentId: void 0,
            position: {
              x: V.position.x + N.position.x,
              y: V.position.y + N.position.y
            }
          });
        }
      }
    });
  }, v = (E, S) => {
  }, w = (E) => {
  }, b = {}, x = yr().customNodes;
  if (x)
    for (let E of Object.keys(x))
      b[E] = mf;
  var _ = Zw(), g = K(_);
  pf(g, {});
  var C = B(g, 2);
  const y = /* @__PURE__ */ ze(() => ({ ...Ew, ...b })), k = /* @__PURE__ */ ze(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Ro.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return Cd(C, bt(
    {
      get nodeTypes() {
        return h(y);
      }
    },
    Ci,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: w,
      connectionRadius: 50,
      ondelete: f,
      onclick: (E) => {
        const S = E.target;
        S.classList.contains("svelte-flow__edge-interaction") || S.classList.contains("panel-content") || S.closest(".panel-content") || G(o, !1);
      },
      get defaultEdgeOptions() {
        return h(k);
      },
      $$events: {
        drop: a,
        dragover: i,
        edgeclick: () => {
          G(o, !0);
        }
      },
      children: (E, S) => {
        var V = Bw(), T = Ce(V);
        Nd(T, {});
        var N = B(T, 2);
        Hd(N, {});
        var I = B(N, 2);
        zd(I, {});
        var z = B(I, 2);
        {
          var Y = (P) => {
            ei(P, {
              children: (H, $) => {
                var M = Rw(), O = B(K(M), 4), A = K(O);
                Rt(A, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (Z) => {
                  }
                }), X(O), X(M), L(H, M);
              },
              $$slots: { default: !0 }
            });
          };
          ke(z, (P) => {
            h(o) && P(Y);
          });
        }
        L(E, V);
      },
      $$slots: { default: !0 }
    }
  )), X(_), L(e, _), he({
    get onInit() {
      return n();
    },
    set onInit(E) {
      n(E), p();
    }
  });
}
le(yf, { onInit: {} }, [], [], !0);
function Xw(e, t) {
  ve(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ci.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Ur("tinyflow_options", n()), kd(e, {
    fitView: !0,
    children: (i, a) => {
      yf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), he({
    get options() {
      return n();
    },
    set options(i) {
      n(i), p();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), p();
    }
  });
}
customElements.define("tinyflow-component", le(Xw, { options: {}, onInit: {} }, [], [], !1));
const qw = xf((e, t) => {
  const n = Js(null), r = Js(null);
  $f(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: a } = e;
  return _f(() => {
    if (n.current) {
      const s = new Xm({
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
  qw as Tinyflow
};
//# sourceMappingURL=index.js.map
