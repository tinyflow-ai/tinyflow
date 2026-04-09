import dh, { forwardRef as _m, useRef as bc, useImperativeHandle as Em, useEffect as Om } from "react";
var Qi = { exports: {} }, Uo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function Pm() {
  if (xc) return Uo;
  xc = 1;
  var t = dh, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, h = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (h[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: e, type: a, key: f, ref: v, props: h, _owner: o.current };
  }
  return Uo.Fragment = n, Uo.jsx = s, Uo.jsxs = s, Uo;
}
var Jo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc;
function Nm() {
  return kc || (kc = 1, process.env.NODE_ENV !== "production" && function() {
    var t = dh, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function w(K) {
      if (K === null || typeof K != "object")
        return null;
      var pe = m && K[m] || K[y];
      return typeof pe == "function" ? pe : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(K) {
      {
        for (var pe = arguments.length, xe = new Array(pe > 1 ? pe - 1 : 0), Ie = 1; Ie < pe; Ie++)
          xe[Ie - 1] = arguments[Ie];
        E("error", K, xe);
      }
    }
    function E(K, pe, xe) {
      {
        var Ie = b.ReactDebugCurrentFrame, rt = Ie.getStackAddendum();
        rt !== "" && (pe += "%s", xe = xe.concat([rt]));
        var dt = xe.map(function(et) {
          return String(et);
        });
        dt.unshift("Warning: " + pe), Function.prototype.apply.call(console[K], console, dt);
      }
    }
    var C = !1, k = !1, P = !1, V = !1, I = !1, H;
    H = Symbol.for("react.module.reference");
    function D(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === i || I || K === o || K === u || K === d || V || K === v || C || k || P || typeof K == "object" && K !== null && (K.$$typeof === f || K.$$typeof === h || K.$$typeof === s || K.$$typeof === a || K.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === H || K.getModuleId !== void 0));
    }
    function N(K, pe, xe) {
      var Ie = K.displayName;
      if (Ie)
        return Ie;
      var rt = pe.displayName || pe.name || "";
      return rt !== "" ? xe + "(" + rt + ")" : xe;
    }
    function S(K) {
      return K.displayName || "Context";
    }
    function z(K) {
      if (K == null)
        return null;
      if (typeof K.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof K == "function")
        return K.displayName || K.name || null;
      if (typeof K == "string")
        return K;
      switch (K) {
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
        case d:
          return "SuspenseList";
      }
      if (typeof K == "object")
        switch (K.$$typeof) {
          case a:
            var pe = K;
            return S(pe) + ".Consumer";
          case s:
            var xe = K;
            return S(xe._context) + ".Provider";
          case l:
            return N(K, K.render, "ForwardRef");
          case h:
            var Ie = K.displayName || null;
            return Ie !== null ? Ie : z(K.type) || "Memo";
          case f: {
            var rt = K, dt = rt._payload, et = rt._init;
            try {
              return z(et(dt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, O = 0, M, B, q, U, T, G, ee;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function Z() {
      {
        if (O === 0) {
          M = console.log, B = console.info, q = console.warn, U = console.error, T = console.group, G = console.groupCollapsed, ee = console.groupEnd;
          var K = {
            configurable: !0,
            enumerable: !0,
            value: j,
            writable: !0
          };
          Object.defineProperties(console, {
            info: K,
            log: K,
            warn: K,
            error: K,
            group: K,
            groupCollapsed: K,
            groupEnd: K
          });
        }
        O++;
      }
    }
    function X() {
      {
        if (O--, O === 0) {
          var K = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, K, {
              value: M
            }),
            info: $({}, K, {
              value: B
            }),
            warn: $({}, K, {
              value: q
            }),
            error: $({}, K, {
              value: U
            }),
            group: $({}, K, {
              value: T
            }),
            groupCollapsed: $({}, K, {
              value: G
            }),
            groupEnd: $({}, K, {
              value: ee
            })
          });
        }
        O < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, oe;
    function L(K, pe, xe) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (rt) {
            var Ie = rt.stack.trim().match(/\n( *(at )?)/);
            oe = Ie && Ie[1] || "";
          }
        return `
` + oe + K;
      }
    }
    var ne = !1, me;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      me = new fe();
    }
    function ie(K, pe) {
      if (!K || ne)
        return "";
      {
        var xe = me.get(K);
        if (xe !== void 0)
          return xe;
      }
      var Ie;
      ne = !0;
      var rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var dt;
      dt = J.current, J.current = null, Z();
      try {
        if (pe) {
          var et = function() {
            throw Error();
          };
          if (Object.defineProperty(et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(et, []);
            } catch (Qt) {
              Ie = Qt;
            }
            Reflect.construct(K, [], et);
          } else {
            try {
              et.call();
            } catch (Qt) {
              Ie = Qt;
            }
            K.call(et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qt) {
            Ie = Qt;
          }
          K();
        }
      } catch (Qt) {
        if (Qt && Ie && typeof Qt.stack == "string") {
          for (var Ge = Qt.stack.split(`
`), Xt = Ie.stack.split(`
`), Ct = Ge.length - 1, Et = Xt.length - 1; Ct >= 1 && Et >= 0 && Ge[Ct] !== Xt[Et]; )
            Et--;
          for (; Ct >= 1 && Et >= 0; Ct--, Et--)
            if (Ge[Ct] !== Xt[Et]) {
              if (Ct !== 1 || Et !== 1)
                do
                  if (Ct--, Et--, Et < 0 || Ge[Ct] !== Xt[Et]) {
                    var mn = `
` + Ge[Ct].replace(" at new ", " at ");
                    return K.displayName && mn.includes("<anonymous>") && (mn = mn.replace("<anonymous>", K.displayName)), typeof K == "function" && me.set(K, mn), mn;
                  }
                while (Ct >= 1 && Et >= 0);
              break;
            }
        }
      } finally {
        ne = !1, J.current = dt, X(), Error.prepareStackTrace = rt;
      }
      var Co = K ? K.displayName || K.name : "", Yr = Co ? L(Co) : "";
      return typeof K == "function" && me.set(K, Yr), Yr;
    }
    function le(K, pe, xe) {
      return ie(K, !1);
    }
    function ve(K) {
      var pe = K.prototype;
      return !!(pe && pe.isReactComponent);
    }
    function be(K, pe, xe) {
      if (K == null)
        return "";
      if (typeof K == "function")
        return ie(K, ve(K));
      if (typeof K == "string")
        return L(K);
      switch (K) {
        case u:
          return L("Suspense");
        case d:
          return L("SuspenseList");
      }
      if (typeof K == "object")
        switch (K.$$typeof) {
          case l:
            return le(K.render);
          case h:
            return be(K.type, pe, xe);
          case f: {
            var Ie = K, rt = Ie._payload, dt = Ie._init;
            try {
              return be(dt(rt), pe, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, de = {}, Ce = b.ReactDebugCurrentFrame;
    function De(K) {
      if (K) {
        var pe = K._owner, xe = be(K.type, K._source, pe ? pe.type : null);
        Ce.setExtraStackFrame(xe);
      } else
        Ce.setExtraStackFrame(null);
    }
    function te(K, pe, xe, Ie, rt) {
      {
        var dt = Function.call.bind(ke);
        for (var et in K)
          if (dt(K, et)) {
            var Ge = void 0;
            try {
              if (typeof K[et] != "function") {
                var Xt = Error((Ie || "React class") + ": " + xe + " type `" + et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof K[et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xt.name = "Invariant Violation", Xt;
              }
              Ge = K[et](pe, et, Ie, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ct) {
              Ge = Ct;
            }
            Ge && !(Ge instanceof Error) && (De(rt), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ie || "React class", xe, et, typeof Ge), De(null)), Ge instanceof Error && !(Ge.message in de) && (de[Ge.message] = !0, De(rt), x("Failed %s type: %s", xe, Ge.message), De(null));
          }
      }
    }
    var Ve = Array.isArray;
    function Ne(K) {
      return Ve(K);
    }
    function We(K) {
      {
        var pe = typeof Symbol == "function" && Symbol.toStringTag, xe = pe && K[Symbol.toStringTag] || K.constructor.name || "Object";
        return xe;
      }
    }
    function Re(K) {
      try {
        return Ke(K), !1;
      } catch {
        return !0;
      }
    }
    function Ke(K) {
      return "" + K;
    }
    function wt(K) {
      if (Re(K))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(K)), Ke(K);
    }
    var bt = b.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ae;
    function ft(K) {
      if (ke.call(K, "ref")) {
        var pe = Object.getOwnPropertyDescriptor(K, "ref").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return K.ref !== void 0;
    }
    function Be(K) {
      if (ke.call(K, "key")) {
        var pe = Object.getOwnPropertyDescriptor(K, "key").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return K.key !== void 0;
    }
    function st(K, pe) {
      typeof K.ref == "string" && bt.current;
    }
    function kt(K, pe) {
      {
        var xe = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        xe.isReactWarning = !0, Object.defineProperty(K, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function pt(K, pe) {
      {
        var xe = function() {
          Ae || (Ae = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        xe.isReactWarning = !0, Object.defineProperty(K, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var Vt = function(K, pe, xe, Ie, rt, dt, et) {
      var Ge = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: K,
        key: pe,
        ref: xe,
        props: et,
        // Record the component responsible for creating this element.
        _owner: dt
      };
      return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ge, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.defineProperty(Ge, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
    };
    function vt(K, pe, xe, Ie, rt) {
      {
        var dt, et = {}, Ge = null, Xt = null;
        xe !== void 0 && (wt(xe), Ge = "" + xe), Be(pe) && (wt(pe.key), Ge = "" + pe.key), ft(pe) && (Xt = pe.ref, st(pe, rt));
        for (dt in pe)
          ke.call(pe, dt) && !lt.hasOwnProperty(dt) && (et[dt] = pe[dt]);
        if (K && K.defaultProps) {
          var Ct = K.defaultProps;
          for (dt in Ct)
            et[dt] === void 0 && (et[dt] = Ct[dt]);
        }
        if (Ge || Xt) {
          var Et = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
          Ge && kt(et, Et), Xt && pt(et, Et);
        }
        return Vt(K, Ge, Xt, rt, Ie, bt.current, et);
      }
    }
    var mt = b.ReactCurrentOwner, zt = b.ReactDebugCurrentFrame;
    function un(K) {
      if (K) {
        var pe = K._owner, xe = be(K.type, K._source, pe ? pe.type : null);
        zt.setExtraStackFrame(xe);
      } else
        zt.setExtraStackFrame(null);
    }
    var or;
    or = !1;
    function ct(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function Rn() {
      {
        if (mt.current) {
          var K = z(mt.current.type);
          if (K)
            return `

Check the render method of \`` + K + "`.";
        }
        return "";
      }
    }
    function vm(K) {
      return "";
    }
    var gc = {};
    function mm(K) {
      {
        var pe = Rn();
        if (!pe) {
          var xe = typeof K == "string" ? K : K.displayName || K.name;
          xe && (pe = `

Check the top-level render call using <` + xe + ">.");
        }
        return pe;
      }
    }
    function vc(K, pe) {
      {
        if (!K._store || K._store.validated || K.key != null)
          return;
        K._store.validated = !0;
        var xe = mm(pe);
        if (gc[xe])
          return;
        gc[xe] = !0;
        var Ie = "";
        K && K._owner && K._owner !== mt.current && (Ie = " It was passed a child from " + z(K._owner.type) + "."), un(K), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Ie), un(null);
      }
    }
    function mc(K, pe) {
      {
        if (typeof K != "object")
          return;
        if (Ne(K))
          for (var xe = 0; xe < K.length; xe++) {
            var Ie = K[xe];
            ct(Ie) && vc(Ie, pe);
          }
        else if (ct(K))
          K._store && (K._store.validated = !0);
        else if (K) {
          var rt = w(K);
          if (typeof rt == "function" && rt !== K.entries)
            for (var dt = rt.call(K), et; !(et = dt.next()).done; )
              ct(et.value) && vc(et.value, pe);
        }
      }
    }
    function ym(K) {
      {
        var pe = K.type;
        if (pe == null || typeof pe == "string")
          return;
        var xe;
        if (typeof pe == "function")
          xe = pe.propTypes;
        else if (typeof pe == "object" && (pe.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        pe.$$typeof === h))
          xe = pe.propTypes;
        else
          return;
        if (xe) {
          var Ie = z(pe);
          te(xe, K.props, "prop", Ie, K);
        } else if (pe.PropTypes !== void 0 && !or) {
          or = !0;
          var rt = z(pe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof pe.getDefaultProps == "function" && !pe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wm(K) {
      {
        for (var pe = Object.keys(K.props), xe = 0; xe < pe.length; xe++) {
          var Ie = pe[xe];
          if (Ie !== "children" && Ie !== "key") {
            un(K), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ie), un(null);
            break;
          }
        }
        K.ref !== null && (un(K), x("Invalid attribute `ref` supplied to `React.Fragment`."), un(null));
      }
    }
    var yc = {};
    function wc(K, pe, xe, Ie, rt, dt) {
      {
        var et = D(K);
        if (!et) {
          var Ge = "";
          (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (Ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xt = vm();
          Xt ? Ge += Xt : Ge += Rn();
          var Ct;
          K === null ? Ct = "null" : Ne(K) ? Ct = "array" : K !== void 0 && K.$$typeof === e ? (Ct = "<" + (z(K.type) || "Unknown") + " />", Ge = " Did you accidentally export a JSX literal instead of a component?") : Ct = typeof K, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ct, Ge);
        }
        var Et = vt(K, pe, xe, rt, dt);
        if (Et == null)
          return Et;
        if (et) {
          var mn = pe.children;
          if (mn !== void 0)
            if (Ie)
              if (Ne(mn)) {
                for (var Co = 0; Co < mn.length; Co++)
                  mc(mn[Co], K);
                Object.freeze && Object.freeze(mn);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mc(mn, K);
        }
        if (ke.call(pe, "key")) {
          var Yr = z(K), Qt = Object.keys(pe).filter(function(Sm) {
            return Sm !== "key";
          }), La = Qt.length > 0 ? "{key: someKey, " + Qt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yc[Yr + La]) {
            var $m = Qt.length > 0 ? "{" + Qt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, La, Yr, $m, Yr), yc[Yr + La] = !0;
          }
        }
        return K === r ? wm(Et) : ym(Et), Et;
      }
    }
    function bm(K, pe, xe) {
      return wc(K, pe, xe, !0);
    }
    function xm(K, pe, xe) {
      return wc(K, pe, xe, !1);
    }
    var km = xm, Cm = bm;
    Jo.Fragment = r, Jo.jsx = km, Jo.jsxs = Cm;
  }()), Jo;
}
var Cc;
function Mm() {
  return Cc || (Cc = 1, process.env.NODE_ENV === "production" ? Qi.exports = Pm() : Qi.exports = Nm()), Qi.exports;
}
var zm = Mm();
const Tm = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Tm);
const hh = 1, fh = 2, ph = 4, Am = 8, Dm = 16, Vm = 1, Im = 2, gh = 4, Lm = 8, Hm = 16, vh = 1, Rm = 2, mh = "[", ha = "[!", nu = "]", so = {}, Ht = Symbol(), jm = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/2000/svg", yh = "@attach", Km = !1;
var fa = Array.isArray, Fm = Array.prototype.indexOf, ru = Array.from, Ps = Object.keys, Ns = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, wh = Object.getOwnPropertyDescriptors, bh = Object.prototype, Zm = Array.prototype, pa = Object.getPrototypeOf, $c = Object.isExtensible;
function Qo(t) {
  return typeof t == "function";
}
const qe = () => {
};
function Wm(t) {
  return t();
}
function sl(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function xh() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function qt(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function Fo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const jt = 2, ou = 4, ga = 8, kh = 1 << 24, Cr = 16, $r = 32, Kr = 64, va = 128, Mn = 512, Zt = 1024, an = 2048, Sr = 4096, fn = 8192, gr = 16384, ma = 32768, yr = 65536, Sc = 1 << 17, iu = 1 << 18, go = 1 << 19, Ch = 1 << 20, vi = 32768, al = 1 << 21, su = 1 << 22, Ar = 1 << 23, qn = Symbol("$state"), au = Symbol("legacy props"), Xm = Symbol(""), Eo = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), qm = 1, ya = 3, _r = 8;
function lu(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ym() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Gm(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Um() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jm(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qm() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function e1() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function t1(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function n1() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function r1() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function o1() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function i1() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function zi(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function s1() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function a1() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ee = !1;
function Gt(t) {
  Ee = t;
}
let He;
function xt(t) {
  if (t === null)
    throw zi(), so;
  return He = t;
}
function zn() {
  return xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ gn(He)
  );
}
function W(t) {
  if (Ee) {
    if (/* @__PURE__ */ gn(He) !== null)
      throw zi(), so;
    He = t;
  }
}
function Oe(t = 1) {
  if (Ee) {
    for (var e = t, n = He; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(n);
    He = n;
  }
}
function Ms(t = !0) {
  for (var e = 0, n = He; ; ) {
    if (n.nodeType === _r) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === nu) {
        if (e === 0) return n;
        e -= 1;
      } else (r === mh || r === ha) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(n)
    );
    t && n.remove(), n = o;
  }
}
function $h(t) {
  if (!t || t.nodeType !== _r)
    throw zi(), so;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Sh(t) {
  return t === this.v;
}
function _h(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Eh(t) {
  return !_h(t, this.v);
}
let Zo = !1, l1 = !1;
function u1() {
  Zo = !0;
}
const c1 = [];
function uu(t, e = !1, n = !1) {
  return vs(t, /* @__PURE__ */ new Map(), "", c1, null, n);
}
function vs(t, e, n, r, o = null, i = !1) {
  if (typeof t == "object" && t !== null) {
    var s = e.get(t);
    if (s !== void 0) return s;
    if (t instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(t)
    );
    if (t instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(t)
    );
    if (fa(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = vs(u, e, n, r, null, i));
      }
      return a;
    }
    if (pa(t) === bh) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = vs(
          // @ts-expect-error
          t[d],
          e,
          n,
          r,
          null,
          i
        );
      return a;
    }
    if (t instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(t)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    t.toJSON == "function" && !i)
      return vs(
        /** @type {T & { toJSON(): any } } */
        t.toJSON(),
        e,
        n,
        r,
        // Associate the instance with the toJSON clone
        t
      );
  }
  if (t instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      t
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(t)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      t
    );
  }
}
let gt = null;
function To(t) {
  gt = t;
}
function Tn(t) {
  return (
    /** @type {T} */
    wa().get(t)
  );
}
function ao(t, e) {
  return wa().set(t, e), e;
}
function d1(t) {
  return wa().has(t);
}
function h1() {
  return wa();
}
function ue(t, e = !1, n) {
  gt = {
    p: gt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Zo && !e ? { s: null, u: null, $: [] } : null
  };
}
function ce(t) {
  var e = (
    /** @type {ComponentContext} */
    gt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Wh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, gt = e.p, t ?? /** @type {T} */
  {};
}
function Wo() {
  return !Zo || gt !== null && gt.l === null;
}
function wa(t) {
  return gt === null && lu(), gt.c ??= new Map(f1(gt) || void 0);
}
function f1(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Qr = [];
function Oh() {
  var t = Qr;
  Qr = [], sl(t);
}
function Fr(t) {
  if (Qr.length === 0 && !hi) {
    var e = Qr;
    queueMicrotask(() => {
      e === Qr && Oh();
    });
  }
  Qr.push(t);
}
function p1() {
  for (; Qr.length > 0; )
    Oh();
}
function Ph(t) {
  var e = Ue;
  if (e === null)
    return nt.f |= Ar, t;
  if ((e.f & ma) === 0) {
    if ((e.f & va) === 0)
      throw t;
    e.b.error(t);
  } else
    Ao(t, e);
}
function Ao(t, e) {
  for (; e !== null; ) {
    if ((e.f & va) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t;
}
const es = /* @__PURE__ */ new Set();
let at = null, ms = null, bn = null, wn = [], ba = null, ll = !1, hi = !1;
class On {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #r = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #o = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #i = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #a = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#r > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    wn = [], ms = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (ms = this, at = null, _c(n.render_effects), _c(n.effects), ms = null, this.#o?.resolve()), bn = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #s(e, n) {
    e.f ^= Zt;
    for (var r = e.first; r !== null; ) {
      var o = r.f, i = (o & ($r | Kr)) !== 0, s = i && (o & Zt) !== 0, a = s || (o & fn) !== 0 || this.skipped_effects.has(r);
      if ((r.f & va) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Zt : (o & ou) !== 0 ? n.effects.push(r) : Ai(r) && ((r.f & Cr) !== 0 && n.block_effects.push(r), wi(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(e) {
    for (const n of e)
      ((n.f & an) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Wt(n, Zt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & jt) === 0 || (n.f & vi) === 0 || (n.f ^= vi, this.#u(
          /** @type {Derived} */
          n.deps
        ));
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), (e.f & Ar) === 0 && (this.current.set(e, e.v), bn?.set(e, e.v));
  }
  activate() {
    at = this, this.apply();
  }
  deactivate() {
    at === this && (at = null, bn = null);
  }
  flush() {
    if (this.activate(), wn.length > 0) {
      if (Nh(), at !== null && at !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const e of this.#e) e();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (es.size > 1) {
      this.previous.clear();
      var e = bn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of es) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [l, u] of this.current) {
          if (i.current.has(l))
            if (n && u !== i.current.get(l))
              i.current.set(l, u);
            else
              continue;
          s.push(l);
        }
        if (s.length === 0)
          continue;
        const a = [...i.current.keys()].filter((l) => !this.current.has(l));
        if (a.length > 0) {
          var o = wn;
          wn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Mh(d, a, l, u);
          if (wn.length > 0) {
            at = i, i.apply();
            for (const d of wn)
              i.#s(d, r);
            i.deactivate();
          }
          wn = o;
        }
      }
      at = null, bn = e;
    }
    this.committed = !0, es.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const e of this.#i)
      Wt(e, an), lo(e);
    for (const e of this.#a)
      Wt(e, Sr), lo(e);
    this.#i = [], this.#a = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    this.#e.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#o ??= xh()).promise;
  }
  static ensure() {
    if (at === null) {
      const e = at = new On();
      es.add(at), hi || On.enqueue(() => {
        at === e && e.flush();
      });
    }
    return at;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Fr(e);
  }
  apply() {
  }
}
function p(t) {
  var e = hi;
  hi = !0;
  try {
    for (var n; ; ) {
      if (p1(), wn.length === 0 && (at?.flush(), wn.length === 0))
        return ba = null, /** @type {T} */
        n;
      Nh();
    }
  } finally {
    hi = e;
  }
}
function Nh() {
  var t = Vr;
  ll = !0;
  try {
    var e = 0;
    for (Ts(!0); wn.length > 0; ) {
      var n = On.ensure();
      if (e++ > 1e3) {
        var r, o;
        g1();
      }
      n.process(wn), Dr.clear();
    }
  } finally {
    ll = !1, Ts(t), ba = null;
  }
}
function g1() {
  try {
    Qm();
  } catch (t) {
    Ao(t, ba);
  }
}
let ar = null;
function _c(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (gr | fn)) === 0 && Ai(r) && (ar = /* @__PURE__ */ new Set(), wi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Uh(r) : r.fn = null), ar?.size > 0)) {
        Dr.clear();
        for (const o of ar) {
          if ((o.f & (gr | fn)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            ar.has(s) && (ar.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (gr | fn)) === 0 && wi(l);
          }
        }
        ar.clear();
      }
    }
    ar = null;
  }
}
function Mh(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const o of t.reactions) {
      const i = o.f;
      (i & jt) !== 0 ? Mh(
        /** @type {Derived} */
        o,
        e,
        n,
        r
      ) : (i & (su | Cr)) !== 0 && (i & an) === 0 && zh(o, e, r) && (Wt(o, an), lo(
        /** @type {Effect} */
        o
      ));
    }
}
function zh(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & jt) !== 0 && zh(
        /** @type {Derived} */
        o,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function lo(t) {
  for (var e = ba = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ll && e === Ue && (n & Cr) !== 0 && (n & iu) === 0)
      return;
    if ((n & (Kr | $r)) !== 0) {
      if ((n & Zt) === 0) return;
      e.f ^= Zt;
    }
  }
  wn.push(e);
}
function vo(t) {
  let e = 0, n = wr(0), r;
  return () => {
    mi() && (c(n), yo(() => (e === 0 && (r = yt(() => t(() => Kn(n)))), e += 1, () => {
      Fr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Kn(n));
      });
    })));
  };
}
var v1 = yr | go | va;
function m1(t, e, n) {
  new y1(t, e, n);
}
class y1 {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = Ee ? He : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #o;
  /** @type {Effect} */
  #i;
  /** @type {Effect | null} */
  #a = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {Effect | null} */
  #l = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #d = 0;
  #h = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #y = vo(() => (this.#f = wr(this.#d), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Ue.b, this.#e = !!this.#r.pending, this.#i = Zr(() => {
      if (Ue.b = this, Ee) {
        const i = this.#n;
        zn(), /** @type {Comment} */
        i.nodeType === _r && /** @type {Comment} */
        i.data === ha ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = dn(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, v1), Ee && (this.#t = He);
  }
  #v() {
    try {
      this.#a = dn(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = dn(() => e(this.#t)), On.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (On.ensure(), dn(() => this.#o(n)))), this.#h > 0 ? this.#b() : (Po(
        /** @type {Effect} */
        this.#s,
        () => {
          this.#s = null;
        }
      ), this.#e = !1);
    }));
  }
  #m() {
    var e = this.#t;
    return this.#e && (this.#c = Jt(), this.#t.before(this.#c), e = this.#c), e;
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#e || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#r.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #g(e) {
    var n = Ue, r = nt, o = gt;
    kn(this.#i), rn(this.#i), To(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Ph(i), null;
    } finally {
      kn(n), rn(r), To(o);
    }
  }
  #b() {
    const e = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#a !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), ef(this.#a, this.#u)), this.#s === null && (this.#s = dn(() => e(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #x(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(e);
      return;
    }
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && Po(this.#s, () => {
      this.#s = null;
    }), this.#u && (this.#t.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#x(e), this.#d += e, this.#f && Do(this.#f, this.#d);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#p || !n && !r)
      throw e;
    this.#a && (Lt(this.#a), this.#a = null), this.#s && (Lt(this.#s), this.#s = null), this.#l && (Lt(this.#l), this.#l = null), Ee && (xt(
      /** @type {TemplateNode} */
      this.#n
    ), Oe(), xt(Ms()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        a1();
        return;
      }
      o = !0, i && i1(), On.ensure(), this.#d = 0, this.#l !== null && Po(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#p = !1, dn(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = nt;
    try {
      rn(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      Ao(l, this.#i && this.#i.parent);
    } finally {
      rn(a);
    }
    r && Fr(() => {
      this.#l = this.#g(() => {
        On.ensure(), this.#p = !0;
        try {
          return dn(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Ao(
            l,
            /** @type {Effect} */
            this.#i.parent
          ), null;
        } finally {
          this.#p = !1;
        }
      });
    });
  }
}
function uo(t, e) {
  return e;
}
function w1(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    fu(e[i].e, r, !0);
  Jh(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      hu(l), l.append(a), t.items.clear(), Sn(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), Sn(t, d.prev, d.next)), Lt(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function At(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & ph) !== 0, d = (e & hh) !== 0, h = (e & fh) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      t
    );
    s = Ee ? xt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Pt(f)
    ) : f.appendChild(Jt());
  }
  Ee && zn();
  var v = null, m = /* @__PURE__ */ cu(() => {
    var C = n();
    return fa(C) ? C : C == null ? [] : ru(C);
  }), y, w = !0;
  function b() {
    b1(E, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : pu(v.effect), x.first = v.effect) : Po(v.effect, () => {
      v = null;
    }));
  }
  var x = Zr(() => {
    y = /** @type {V[]} */
    c(m);
    var C = y.length;
    let k = !1;
    if (Ee) {
      var P = $h(s) === ha;
      P !== (C === 0) && (s = Ms(), xt(s), Gt(!1), k = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      at
    ), H = null, D = Bh(), N = 0; N < C; N += 1) {
      Ee && He.nodeType === _r && /** @type {Comment} */
      He.data === nu && (s = /** @type {Comment} */
      He, k = !0, Gt(!1));
      var S = y[N], z = r(S, N), $ = w ? null : a.get(z);
      $ ? (d && Do($.v, S), h ? Do(
        /** @type {Value<number>} */
        $.i,
        N
      ) : $.i = N, D && I.skipped_effects.delete($.e)) : ($ = x1(
        w ? s : null,
        H,
        S,
        z,
        N,
        o,
        e,
        n
      ), w && ($.o = !0, H === null ? l = $ : H.next = $, H = $), a.set(z, $)), V.add(z);
    }
    if (C === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: dn(() => i(s))
        };
      else {
        var O = document.createDocumentFragment(), M = Jt();
        O.append(M), v = {
          fragment: O,
          effect: dn(() => i(M))
        };
      }
    if (Ee && C > 0 && xt(Ms()), !w)
      if (D) {
        for (const [B, q] of a)
          V.has(B) || I.skipped_effects.add(q.e);
        I.oncommit(b), I.ondiscard(() => {
        });
      } else
        b();
    k && Gt(!0), c(m);
  }), E = { effect: x, items: a, first: l };
  w = !1, Ee && (s = He);
}
function b1(t, e, n, r, o) {
  var i = (r & Am) !== 0, s = e.length, a = t.items, l = t.first, u, d = null, h, f = [], v = [], m, y, w, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = e[b], y = o(m, b), w = /** @type {EachItem} */
      a.get(y), w.o && (w.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(w));
  for (b = 0; b < s; b += 1) {
    if (m = e[b], y = o(m, b), w = /** @type {EachItem} */
    a.get(y), t.first ??= w, !w.o) {
      w.o = !0;
      var x = d ? d.next : l;
      Sn(t, d, w), Sn(t, w, x), Ha(w, x, n), d = w, f = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & fn) !== 0 && (pu(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (f.length < v.length) {
          var E = v[0], C;
          d = E.prev;
          var k = f[0], P = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            Ha(f[C], E, n);
          for (C = 0; C < v.length; C += 1)
            u.delete(v[C]);
          Sn(t, k.prev, P.next), Sn(t, d, k), Sn(t, P, E), l = E, d = P, b -= 1, f = [], v = [];
        } else
          u.delete(w), Ha(w, l, n), Sn(t, w.prev, w.next), Sn(t, w, d === null ? t.first : d.next), Sn(t, d, w), d = w;
        continue;
      }
      for (f = [], v = []; l !== null && l.k !== y; )
        (l.e.f & fn) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    f.push(w), d = w, l = w.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var I = u === void 0 ? [] : ru(u); l !== null; )
      (l.e.f & fn) === 0 && I.push(l), l = l.next;
    var H = I.length;
    if (V = a.size - H > s, H > 0) {
      var D = (r & ph) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < H; b += 1)
          I[b].a?.measure();
        for (b = 0; b < H; b += 1)
          I[b].a?.fix();
      }
      w1(t, I, D);
    }
  }
  if (V)
    for (const N of a.values())
      N.o || (Sn(t, d, N), d = N);
  t.effect.last = d && d.e, i && Fr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function x1(t, e, n, r, o, i, s, a) {
  var l = (s & hh) !== 0, u = (s & Dm) === 0, d = l ? u ? /* @__PURE__ */ Ih(n, !1, !1) : wr(n) : n, h = (s & fh) === 0 ? o : wr(o), f = {
    i: h,
    v: d,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    o: !1,
    prev: e,
    next: null
  };
  try {
    if (t === null) {
      var v = document.createDocumentFragment();
      v.append(t = Jt());
    }
    return f.e = dn(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = f), f;
  } finally {
  }
}
function Ha(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, o = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); i !== null && i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(i)
    );
    o.before(i), i = s;
  }
}
function Sn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function Th(t, e, n, r) {
  const o = Wo() ? Ti : cu;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = at, s = (
    /** @type {Effect} */
    Ue
  ), a = k1();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ C1(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & gr) === 0 && Ao(d, s);
      }
      i?.deactivate(), zs();
    }).catch((u) => {
      Ao(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), zs();
    }
  }) : l();
}
function k1() {
  var t = Ue, e = nt, n = gt, r = at;
  return function(o = !0) {
    kn(t), rn(e), To(n), o && r?.activate();
  };
}
function zs() {
  kn(null), rn(null), To(null);
}
// @__NO_SIDE_EFFECTS__
function Ti(t) {
  var e = jt | an, n = nt !== null && (nt.f & jt) !== 0 ? (
    /** @type {Derived} */
    nt
  ) : null;
  return Ue !== null && (Ue.f |= go), {
    ctx: gt,
    deps: null,
    effects: null,
    equals: Sh,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ht
    ),
    wv: 0,
    parent: n ?? Ue,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function C1(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ue
  );
  n === null && Ym();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = wr(
    /** @type {V} */
    Ht
  ), s = !nt, a = /* @__PURE__ */ new Map();
  return M1(() => {
    var l = xh();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === at && u.committed && u.deactivate(), zs();
      });
    } catch (f) {
      l.reject(f), zs();
    }
    var u = (
      /** @type {Batch} */
      at
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Eo), a.delete(u), a.set(u, l);
    }
    const h = (f, v = void 0) => {
      if (u.activate(), v)
        v !== Eo && (i.f |= Ar, Do(i, v));
      else {
        (i.f & Ar) !== 0 && (i.f ^= Ar), Do(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(Eo);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), ka(() => {
    for (const l of a.values())
      l.reject(Eo);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === o ? l(i) : u(o);
      }
      d.then(h, h);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function _(t) {
  const e = /* @__PURE__ */ Ti(t);
  return tf(e), e;
}
// @__NO_SIDE_EFFECTS__
function cu(t) {
  const e = /* @__PURE__ */ Ti(t);
  return e.equals = Eh, e;
}
function Ah(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Lt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function $1(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & jt) === 0)
      return (e.f & gr) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function du(t) {
  var e, n = Ue;
  kn($1(t));
  try {
    t.f &= ~vi, Ah(t), e = sf(t);
  } finally {
    kn(n);
  }
  return e;
}
function Dh(t) {
  var e = du(t);
  if (t.equals(e) || (at?.is_fork || (t.v = e), t.wv = rf()), !wo)
    if (bn !== null)
      (mi() || at?.is_fork) && bn.set(t, e);
    else {
      var n = (t.f & Mn) === 0 ? Sr : Zt;
      Wt(t, n);
    }
}
let ul = /* @__PURE__ */ new Set();
const Dr = /* @__PURE__ */ new Map();
let Vh = !1;
function wr(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Sh,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function we(t, e) {
  const n = wr(t);
  return tf(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ih(t, e = !1, n = !0) {
  const r = wr(t);
  return e || (r.equals = Eh), Zo && n && gt !== null && gt.l !== null && (gt.l.s ??= []).push(r), r;
}
function F(t, e, n = !1) {
  nt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Zn || (nt.f & Sc) !== 0) && Wo() && (nt.f & (jt | Cr | su | Sc)) !== 0 && !vr?.includes(t) && o1();
  let r = n ? $t(e) : e;
  return Do(t, r);
}
function Do(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    wo ? Dr.set(t, e) : Dr.set(t, n), t.v = e;
    var r = On.ensure();
    r.capture(t, n), (t.f & jt) !== 0 && ((t.f & an) !== 0 && du(
      /** @type {Derived} */
      t
    ), Wt(t, (t.f & Mn) !== 0 ? Zt : Sr)), t.wv = rf(), Lh(t, an), Wo() && Ue !== null && (Ue.f & Zt) !== 0 && (Ue.f & ($r | Kr)) === 0 && (yn === null ? T1([t]) : yn.push(t)), !r.is_fork && ul.size > 0 && !Vh && S1();
  }
  return e;
}
function S1() {
  Vh = !1;
  var t = Vr;
  Ts(!0);
  const e = Array.from(ul);
  try {
    for (const n of e)
      (n.f & Zt) !== 0 && Wt(n, Sr), Ai(n) && wi(n);
  } finally {
    Ts(t);
  }
  ul.clear();
}
function Ec(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return F(t, n), r;
}
function Kn(t) {
  F(t, t.v + 1);
}
function Lh(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Wo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ue)) {
        var l = (a & an) === 0;
        if (l && Wt(s, e), (a & jt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          bn?.delete(u), (a & vi) === 0 && (a & Mn && (s.f |= vi), Lh(u, Sr));
        } else l && ((a & Cr) !== 0 && ar !== null && ar.add(
          /** @type {Effect} */
          s
        ), lo(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function $t(t) {
  if (typeof t != "object" || t === null || qn in t)
    return t;
  const e = pa(t);
  if (e !== bh && e !== Zm)
    return t;
  var n = /* @__PURE__ */ new Map(), r = fa(t), o = /* @__PURE__ */ we(0), i = mr, s = (a) => {
    if (mr === i)
      return a();
    var l = nt, u = mr;
    rn(null), Mc(i);
    var d = a();
    return rn(l), Mc(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && n1();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ we(u.value);
          return n.set(l, h), h;
        }) : F(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ we(Ht));
            n.set(l, d), Kn(o);
          }
        } else
          F(u, Ht), Kn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === qn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || pr(a, l)?.writable) && (d = s(() => {
          var v = $t(h ? a[l] : Ht), m = /* @__PURE__ */ we(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === Ht ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h?.v;
          if (h !== void 0 && f !== Ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === qn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ht || Reflect.has(a, l);
        if (u !== void 0 || Ue !== null && (!d || pr(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? $t(a[l]) : Ht, v = /* @__PURE__ */ we(f);
            return v;
          }), n.set(l, u));
          var h = c(u);
          if (h === Ht)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var h = n.get(l), f = l in a;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var m = n.get(v + "");
            m !== void 0 ? F(m, Ht) : v in a && (m = s(() => /* @__PURE__ */ we(Ht)), n.set(v + "", m));
          }
        if (h === void 0)
          (!f || pr(a, l)?.writable) && (h = s(() => /* @__PURE__ */ we(void 0)), F(h, $t(u)), n.set(l, h));
        else {
          f = h.v !== Ht;
          var y = s(() => $t(u));
          F(h, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= b.v && F(b, x + 1);
          }
          Kn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ht;
        });
        for (var [u, d] of n)
          d.v !== Ht && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        r1();
      }
    }
  );
}
function Oc(t) {
  try {
    if (t !== null && typeof t == "object" && qn in t)
      return t[qn];
  } catch {
  }
  return t;
}
function _1(t, e) {
  return Object.is(Oc(t), Oc(e));
}
var tn, Hh, Rh, jh;
function cl() {
  if (tn === void 0) {
    tn = window, Hh = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Rh = pr(e, "firstChild").get, jh = pr(e, "nextSibling").get, $c(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), $c(n) && (n.__t = void 0);
  }
}
function Jt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pt(t) {
  return Rh.call(t);
}
// @__NO_SIDE_EFFECTS__
function gn(t) {
  return jh.call(t);
}
function Y(t, e) {
  if (!Ee)
    return /* @__PURE__ */ Pt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(He)
  );
  if (n === null)
    n = He.appendChild(Jt());
  else if (e && n.nodeType !== ya) {
    var r = Jt();
    return n?.before(r), xt(r), r;
  }
  return xt(n), n;
}
function Q(t, e = !1) {
  if (!Ee) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Pt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ gn(n) : n;
  }
  if (e && He?.nodeType !== ya) {
    var r = Jt();
    return He?.before(r), xt(r), r;
  }
  return He;
}
function R(t, e = 1, n = !1) {
  let r = Ee ? He : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ gn(r);
  if (!Ee)
    return r;
  if (n && r?.nodeType !== ya) {
    var i = Jt();
    return r === null ? o?.after(i) : r.before(i), xt(i), i;
  }
  return xt(r), /** @type {TemplateNode} */
  r;
}
function hu(t) {
  t.textContent = "";
}
function Bh() {
  return !1;
}
function E1(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Fr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function O1(t) {
  Ee && /* @__PURE__ */ Pt(t) !== null && hu(t);
}
let Pc = !1;
function Kh() {
  Pc || (Pc = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function xa(t) {
  var e = nt, n = Ue;
  rn(null), kn(null);
  try {
    return t();
  } finally {
    rn(e), kn(n);
  }
}
function Fh(t, e, n, r = n) {
  t.addEventListener(e, () => xa(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), Kh();
}
function Zh(t) {
  Ue === null && (nt === null && Jm(), Um()), wo && Gm();
}
function P1(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Cn(t, e, n) {
  var r = Ue;
  r !== null && (r.f & fn) !== 0 && (t |= fn);
  var o = {
    ctx: gt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | an | Mn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      wi(o), o.f |= ma;
    } catch (a) {
      throw Lt(o), a;
    }
  else e !== null && lo(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & go) === 0 && (i = i.first, (t & Cr) !== 0 && (t & yr) !== 0 && i !== null && (i.f |= yr)), i !== null && (i.parent = r, r !== null && P1(i, r), nt !== null && (nt.f & jt) !== 0 && (t & Kr) === 0)) {
    var s = (
      /** @type {Derived} */
      nt
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function mi() {
  return nt !== null && !Zn;
}
function ka(t) {
  const e = Cn(ga, null, !1);
  return Wt(e, Zt), e.teardown = t, e;
}
function Ze(t) {
  Zh();
  var e = (
    /** @type {Effect} */
    Ue.f
  ), n = !nt && (e & $r) !== 0 && (e & ma) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      gt
    );
    (r.e ??= []).push(t);
  } else
    return Wh(t);
}
function Wh(t) {
  return Cn(ou | Ch, t, !1);
}
function nn(t) {
  return Zh(), Cn(ga | Ch, t, !0);
}
function mo(t) {
  On.ensure();
  const e = Cn(Kr | go, t, !0);
  return () => {
    Lt(e);
  };
}
function N1(t) {
  On.ensure();
  const e = Cn(Kr | go, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Po(e, () => {
      Lt(e), r(void 0);
    }) : (Lt(e), r(void 0));
  });
}
function Xo(t) {
  return Cn(ou, t, !1);
}
function M1(t) {
  return Cn(su | go, t, !0);
}
function yo(t, e = 0) {
  return Cn(ga | e, t, !0);
}
function Te(t, e = [], n = [], r = []) {
  Th(r, e, n, (o) => {
    Cn(ga, () => t(...o.map(c)), !0);
  });
}
function Zr(t, e = 0) {
  var n = Cn(Cr | e, t, !0);
  return n;
}
function Xh(t, e = 0) {
  var n = Cn(kh | e, t, !0);
  return n;
}
function dn(t) {
  return Cn($r | go, t, !0);
}
function qh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = wo, r = nt;
    Nc(!0), rn(null);
    try {
      e.call(null);
    } finally {
      Nc(n), rn(r);
    }
  }
}
function Yh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && xa(() => {
      o.abort(Eo);
    });
    var r = n.next;
    (n.f & Kr) !== 0 ? n.parent = null : Lt(n, e), n = r;
  }
}
function z1(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & $r) === 0 && Lt(e), e = n;
  }
}
function Lt(t, e = !0) {
  var n = !1;
  (e || (t.f & iu) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Gh(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Yh(t, e && !n), As(t, 0), Wt(t, gr);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  qh(t);
  var o = t.parent;
  o !== null && o.first !== null && Uh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Gh(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(t)
    );
    t.remove(), t = n;
  }
}
function Uh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Po(t, e, n = !0) {
  var r = [];
  fu(t, r, !0), Jh(r, () => {
    n && Lt(t), e && e();
  });
}
function Jh(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function fu(t, e, n) {
  if ((t.f & fn) === 0) {
    if (t.f ^= fn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & yr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & $r) !== 0 && (t.f & Cr) !== 0;
      fu(r, e, i ? n : !1), r = o;
    }
  }
}
function pu(t) {
  Qh(t, !0);
}
function Qh(t, e) {
  if ((t.f & fn) !== 0) {
    t.f ^= fn, (t.f & Zt) === 0 && (Wt(t, an), lo(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & yr) !== 0 || (n.f & $r) !== 0;
      Qh(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function ef(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(n)
    );
    e.append(n), n = o;
  }
}
let Vr = !1;
function Ts(t) {
  Vr = t;
}
let wo = !1;
function Nc(t) {
  wo = t;
}
let nt = null, Zn = !1;
function rn(t) {
  nt = t;
}
let Ue = null;
function kn(t) {
  Ue = t;
}
let vr = null;
function tf(t) {
  nt !== null && (vr === null ? vr = [t] : vr.push(t));
}
let Yt = null, cn = 0, yn = null;
function T1(t) {
  yn = t;
}
let nf = 1, yi = 0, mr = yi;
function Mc(t) {
  mr = t;
}
function rf() {
  return ++nf;
}
function Ai(t) {
  var e = t.f;
  if ((e & an) !== 0)
    return !0;
  if (e & jt && (t.f &= -32769), (e & Sr) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Ai(
          /** @type {Derived} */
          i
        ) && Dh(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & Mn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    bn === null && Wt(t, Zt);
  }
  return !1;
}
function of(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !vr?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & jt) !== 0 ? of(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Wt(i, an) : (i.f & Zt) !== 0 && Wt(i, Sr), lo(
        /** @type {Effect} */
        i
      ));
    }
}
function sf(t) {
  var e = Yt, n = cn, r = yn, o = nt, i = vr, s = gt, a = Zn, l = mr, u = t.f;
  Yt = /** @type {null | Value[]} */
  null, cn = 0, yn = null, nt = (u & ($r | Kr)) === 0 ? t : null, vr = null, To(t.ctx), Zn = !1, mr = ++yi, t.ac !== null && (xa(() => {
    t.ac.abort(Eo);
  }), t.ac = null);
  try {
    t.f |= al;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), f = t.deps;
    if (Yt !== null) {
      var v;
      if (As(t, cn), f !== null && cn > 0)
        for (f.length = cn + Yt.length, v = 0; v < Yt.length; v++)
          f[cn + v] = Yt[v];
      else
        t.deps = f = Yt;
      if (Vr && mi() && (t.f & Mn) !== 0)
        for (v = cn; v < f.length; v++)
          (f[v].reactions ??= []).push(t);
    } else f !== null && cn < f.length && (As(t, cn), f.length = cn);
    if (Wo() && yn !== null && !Zn && f !== null && (t.f & (jt | Sr | an)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      yn.length; v++)
        of(
          yn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (yi++, yn !== null && (r === null ? r = yn : r.push(.../** @type {Source[]} */
    yn))), (t.f & Ar) !== 0 && (t.f ^= Ar), h;
  } catch (m) {
    return Ph(m);
  } finally {
    t.f ^= al, Yt = e, cn = n, yn = r, nt = o, vr = i, To(s), Zn = a, mr = l;
  }
}
function A1(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Fm.call(n, t);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = e.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (e.f & jt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !Yt.includes(e)) && (Wt(e, Sr), (e.f & Mn) !== 0 && (e.f ^= Mn, e.f &= -32769), Ah(
    /** @type {Derived} **/
    e
  ), As(
    /** @type {Derived} **/
    e,
    0
  ));
}
function As(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      A1(t, n[r]);
}
function wi(t) {
  var e = t.f;
  if ((e & gr) === 0) {
    Wt(t, Zt);
    var n = Ue, r = Vr;
    Ue = t, Vr = !0;
    try {
      (e & (Cr | kh)) !== 0 ? z1(t) : Yh(t), qh(t);
      var o = sf(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = nf;
      var i;
      Km && l1 && (t.f & an) !== 0 && t.deps;
    } finally {
      Vr = r, Ue = n;
    }
  }
}
async function af() {
  await Promise.resolve(), p();
}
function c(t) {
  var e = t.f, n = (e & jt) !== 0;
  if (nt !== null && !Zn) {
    var r = Ue !== null && (Ue.f & gr) !== 0;
    if (!r && !vr?.includes(t)) {
      var o = nt.deps;
      if ((nt.f & al) !== 0)
        t.rv < yi && (t.rv = yi, Yt === null && o !== null && o[cn] === t ? cn++ : Yt === null ? Yt = [t] : Yt.includes(t) || Yt.push(t));
      else {
        (nt.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [nt] : i.includes(nt) || i.push(nt);
      }
    }
  }
  if (wo) {
    if (Dr.has(t))
      return Dr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Zt) === 0 && s.reactions !== null || uf(s)) && (a = du(s)), Dr.set(s, a), a;
    }
  } else n && (!bn?.has(t) || at?.is_fork && !mi()) && (s = /** @type {Derived} */
  t, Ai(s) && Dh(s), Vr && mi() && (s.f & Mn) === 0 && lf(s));
  if (bn?.has(t))
    return bn.get(t);
  if ((t.f & Ar) !== 0)
    throw t.v;
  return t.v;
}
function lf(t) {
  if (t.deps !== null) {
    t.f ^= Mn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & jt) !== 0 && (e.f & Mn) === 0 && lf(
        /** @type {Derived} */
        e
      );
  }
}
function uf(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Dr.has(e) || (e.f & jt) !== 0 && uf(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function yt(t) {
  var e = Zn;
  try {
    return Zn = !0, t();
  } finally {
    Zn = e;
  }
}
const D1 = -7169;
function Wt(t, e) {
  t.f = t.f & D1 | e;
}
function V1(t, e) {
  var n = {};
  for (var r in t)
    e.includes(r) || (n[r] = t[r]);
  for (var o of Object.getOwnPropertySymbols(t))
    Object.propertyIsEnumerable.call(t, o) && !e.includes(o) && (n[o] = t[o]);
  return n;
}
function gu(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (qn in t)
      dl(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && qn in n && dl(n);
      }
  }
}
function dl(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        dl(t[r], e);
      } catch {
      }
    const n = pa(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wh(n);
      for (let o in r) {
        const i = r[o].get;
        if (i)
          try {
            i.call(t);
          } catch {
          }
      }
    }
  }
}
const cf = /* @__PURE__ */ new Set(), hl = /* @__PURE__ */ new Set();
function vu(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || ii.call(e, i), !i.cancelBubble)
      return xa(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Fr(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function St(t, e, n, r = {}) {
  var o = vu(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function Ds(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = vu(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ka(() => {
    e.removeEventListener(t, s, i);
  });
}
function bo(t) {
  for (var e = 0; e < t.length; e++)
    cf.add(t[e]);
  for (var n of hl)
    n(t);
}
let zc = null;
function ii(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  zc = t;
  var s = 0, a = zc === t && t.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = o.indexOf(e);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || t.target, i !== e) {
    Ns(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = nt, h = Ue;
    rn(null), kn(null);
    try {
      for (var f, v = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i) && y.call(i, t);
        } catch (w) {
          f ? v.push(w) : f = w;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        i = m;
      }
      if (f) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, rn(d), kn(h);
    }
  }
}
function mu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function sn(t, e) {
  var n = (
    /** @type {Effect} */
    Ue
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function re(t, e) {
  var n = (e & vh) !== 0, r = (e & Rm) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Ee)
      return sn(He, null), He;
    o === void 0 && (o = mu(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ Pt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Hh ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      sn(a, l);
    } else
      sn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function I1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & vh) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Ee)
      return sn(He, null), He;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        mu(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Pt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Pt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Pt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Pt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      sn(d, h);
    } else
      sn(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(t, e) {
  return /* @__PURE__ */ I1(t, e, "svg");
}
function Le(t = "") {
  if (!Ee) {
    var e = Jt(t + "");
    return sn(e, e), e;
  }
  var n = He;
  return n.nodeType !== ya && (n.before(n = Jt()), xt(n)), sn(n, n), n;
}
function he() {
  if (Ee)
    return sn(He, null), He;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Jt();
  return t.append(e, n), sn(e, n), t;
}
function A(t, e) {
  if (Ee) {
    var n = (
      /** @type {Effect} */
      Ue
    );
    ((n.f & ma) === 0 || n.nodes_end === null) && (n.nodes_end = He), zn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Di() {
  if (Ee && He && He.nodeType === _r && He.textContent?.startsWith("$")) {
    const t = He.textContent.substring(1);
    return zn(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function L1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const H1 = [
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
function R1(t) {
  return H1.includes(t);
}
const j1 = {
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
function B1(t) {
  return t = t.toLowerCase(), j1[t] ?? t;
}
const K1 = ["touchstart", "touchmove"];
function F1(t) {
  return K1.includes(t);
}
const Z1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function W1(t) {
  return Z1.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    t
  );
}
function ht(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function yu(t, e) {
  return df(t, e);
}
function X1(t, e) {
  cl(), e.intro = e.intro ?? !1;
  const n = e.target, r = Ee, o = He;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(n)
    ); i && (i.nodeType !== _r || /** @type {Comment} */
    i.data !== mh); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(i);
    if (!i)
      throw so;
    Gt(!0), xt(
      /** @type {Comment} */
      i
    );
    const s = df(t, { ...e, anchor: i });
    return Gt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== so && console.warn("Failed to hydrate: ", s), e.recover === !1 && e1(), cl(), hu(n), Gt(!1), yu(t, e);
  } finally {
    Gt(r), xt(o);
  }
}
const $o = /* @__PURE__ */ new Map();
function df(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  cl();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!a.has(v)) {
        a.add(v);
        var m = F1(v);
        e.addEventListener(v, ii, { passive: m });
        var y = $o.get(v);
        y === void 0 ? (document.addEventListener(v, ii, { passive: m }), $o.set(v, 1)) : $o.set(v, y + 1);
      }
    }
  };
  l(ru(cf)), hl.add(l);
  var u = void 0, d = N1(() => {
    var h = n ?? e.appendChild(Jt());
    return m1(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          ue({});
          var v = (
            /** @type {ComponentContext} */
            gt
          );
          v.c = i;
        }
        if (o && (r.$$events = o), Ee && sn(
          /** @type {TemplateNode} */
          f,
          null
        ), u = t(f, r) || {}, Ee && (Ue.nodes_end = He, He === null || He.nodeType !== _r || /** @type {Comment} */
        He.data !== nu))
          throw zi(), so;
        i && ce();
      }
    ), () => {
      for (var f of a) {
        e.removeEventListener(f, ii);
        var v = (
          /** @type {number} */
          $o.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ii), $o.delete(f)) : $o.set(f, v);
      }
      hl.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return fl.set(u, d), u;
}
let fl = /* @__PURE__ */ new WeakMap();
function hf(t, e) {
  const n = fl.get(t);
  return n ? (fl.delete(t), n(e)) : Promise.resolve();
}
class Vi {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #o = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    this.anchor = e, this.#o = n;
  }
  #i = () => {
    var e = (
      /** @type {Batch} */
      at
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        pu(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (Lt(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            ef(s, l), l.append(Jt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            Lt(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), Po(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #a = (e) => {
    this.#e.delete(e);
    const n = Array.from(this.#e.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (Lt(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      at
    ), o = Bh();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      dn(() => n(this.anchor))
    ), this.#e.set(r, e), o || (Ee && (this.anchor = He), this.#i());
  }
}
function ze(t, e, ...n) {
  var r = new Vi(t);
  Zr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, yr);
}
function Vn(t) {
  gt === null && lu(), Zo && gt.l !== null ? q1(gt).m.push(t) : Ze(() => {
    const e = yt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ii(t) {
  gt === null && lu(), Vn(() => () => yt(t));
}
function q1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function Y1() {
  return Symbol(yh);
}
function ae(t, e, n = !1) {
  Ee && zn();
  var r = new Vi(t), o = n ? yr : 0;
  function i(s, a) {
    if (Ee) {
      const u = $h(t) === ha;
      if (s === u) {
        var l = Ms();
        xt(l), r.anchor = l, Gt(!1), r.ensure(s, a), Gt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Zr(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function G1(t, e, n) {
  Ee && zn();
  var r = new Vi(t), o = !Wo();
  Zr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function U1(t, e) {
  Ee && xt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Pt(t)
  ), yo(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function Ca(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  Te(() => {
    var a = (
      /** @type {Effect} */
      Ue
    );
    if (s === (s = e() ?? "")) {
      Ee && zn();
      return;
    }
    if (a.nodes_start !== null && (Gh(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ee) {
        He.data;
        for (var l = zn(), u = l; l !== null && (l.nodeType !== _r || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ gn(l);
        if (l === null)
          throw zi(), so;
        sn(He, u), i = xt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = mu(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ Pt(h)), sn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pt(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Pt(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Pt(h)
          );
      else
        i.before(h);
    }
  });
}
function It(t, e, n) {
  Ee && zn();
  var r = new Vi(t);
  Zr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, yr);
}
function ff(t, e, n, r, o, i) {
  let s = Ee;
  Ee && zn();
  var a = null;
  Ee && He.nodeType === qm && (a = /** @type {Element} */
  He, zn());
  var l = (
    /** @type {TemplateNode} */
    Ee ? He : t
  ), u = new Vi(l, !1);
  Zr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? Bm : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = Ee ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), sn(a, a), r) {
          Ee && W1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            Ee ? /* @__PURE__ */ Pt(a) : a.appendChild(Jt())
          );
          Ee && (v === null ? Gt(!1) : xt(v)), r(a, v);
        }
        Ue.nodes_end = a, f.before(a);
      }
      Ee && xt(f);
    }), () => {
    };
  }, yr), ka(() => {
  }), s && (Gt(!0), xt(l));
}
function J1(t, e) {
  let n = null, r = Ee;
  var o;
  if (Ee) {
    n = He;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Pt(document.head)
    ); i !== null && (i.nodeType !== _r || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(i);
    if (i === null)
      Gt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gn(i)
      );
      i.remove(), xt(s);
    }
  }
  Ee || (o = document.head.appendChild(Jt()));
  try {
    Zr(() => e(o), iu);
  } finally {
    r && (Gt(!0), xt(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function it(t, e) {
  Xo(() => {
    var n = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const o = document.createElement("style");
      o.id = e.hash, o.textContent = e.code, r.appendChild(o);
    }
  });
}
function Ft(t, e, n) {
  Xo(() => {
    var r = yt(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      yo(() => {
        var s = n();
        gu(s), o && _h(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Q1(t, e) {
  var n = void 0, r;
  Xh(() => {
    n !== (n = e()) && (r && (Lt(r), r = null), n && (r = dn(() => {
      Xo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function pf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = pf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function fi() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = pf(t)) && (r && (r += " "), r += e);
  return r;
}
function Er(t) {
  return typeof t == "object" ? fi(t) : t ?? "";
}
const Tc = [...` 	
\r\f \v\uFEFF`];
function e0(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Tc.includes(r[s - 1])) && (a === r.length || Tc.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ac(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ra(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function t0(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ra)), o && l.push(...Object.keys(o).map(Ra));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var f = t[h];
        if (a ? f === "/" && t[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && t[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var v = Ra(t.substring(u, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var m = t.substring(u, h).trim();
                n += " " + m + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Ac(r)), o && (n += Ac(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function ln(t, e, n, r, o, i) {
  var s = t.__className;
  if (Ee || s !== n || s === void 0) {
    var a = e0(n, r, i);
    (!Ee || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function ja(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Bt(t, e, n, r) {
  var o = t.__style;
  if (Ee || o !== e) {
    var i = t0(e, r);
    (!Ee || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (ja(t, n?.[0], r[0]), ja(t, n?.[1], r[1], "important")) : ja(t, n, r));
  return r;
}
function pl(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!fa(e))
      return s1();
    for (var r of t.options)
      r.selected = e.includes(Dc(r));
    return;
  }
  for (r of t.options) {
    var o = Dc(r);
    if (_1(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function n0(t) {
  var e = new MutationObserver(() => {
    pl(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ka(() => {
    e.disconnect();
  });
}
function Dc(t) {
  return "__value" in t ? t.__value : t.value;
}
const zr = Symbol("class"), Fn = Symbol("style"), gf = Symbol("is custom element"), vf = Symbol("is html");
function Ir(t) {
  if (Ee) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Me(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Me(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Fr(n), Kh();
  }
}
function ys(t, e) {
  var n = $a(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Ba(t, e) {
  var n = $a(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function r0(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Me(t, e, n, r) {
  var o = $a(t);
  Ee && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[Xm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && mf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function o0(t, e, n, r, o = !1, i = !1) {
  if (Ee && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Ir(s);
  }
  var l = $a(t), u = l[gf], d = !l[vf];
  let h = Ee && u;
  h && Gt(!1);
  var f = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = Er(n.class) : (r || n[zr]) && (n.class = null), n[Fn] && (n.style ??= null);
  var y = mf(t);
  for (const P in n) {
    let V = n[P];
    if (v && P === "value" && V == null) {
      t.value = t.__value = "", f[P] = V;
      continue;
    }
    if (P === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      ln(t, w, V, r, e?.[zr], n[zr]), f[P] = V, f[zr] = n[zr];
      continue;
    }
    if (P === "style") {
      Bt(t, V, e?.[Fn], n[Fn]), f[P] = V, f[Fn] = n[Fn];
      continue;
    }
    var b = f[P];
    if (!(V === b && !(V === void 0 && t.hasAttribute(P)))) {
      f[P] = V;
      var x = P[0] + P[1];
      if (x !== "$$")
        if (x === "on") {
          const I = {}, H = "$$" + P;
          let D = P.slice(2);
          var E = R1(D);
          if (L1(D) && (D = D.slice(0, -7), I.capture = !0), !E && b) {
            if (V != null) continue;
            t.removeEventListener(D, f[H], I), f[H] = null;
          }
          if (V != null)
            if (E)
              t[`__${D}`] = V, bo([D]);
            else {
              let N = function(S) {
                f[P].call(this, S);
              };
              f[H] = vu(D, t, N, I);
            }
          else E && (t[`__${D}`] = void 0);
        } else if (P === "style")
          Me(t, P, V);
        else if (P === "autofocus")
          E1(
            /** @type {HTMLElement} */
            t,
            !!V
          );
        else if (!u && (P === "__value" || P === "value" && V != null))
          t.value = t.__value = V;
        else if (P === "selected" && v)
          r0(
            /** @type {HTMLOptionElement} */
            t,
            V
          );
        else {
          var C = P;
          d || (C = B1(C));
          var k = C === "defaultValue" || C === "defaultChecked";
          if (V == null && !u && !k)
            if (l[P] = null, C === "value" || C === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                t
              );
              const H = e === void 0;
              if (C === "value") {
                let D = I.defaultValue;
                I.removeAttribute(C), I.defaultValue = D, I.value = I.__value = H ? D : null;
              } else {
                let D = I.defaultChecked;
                I.removeAttribute(C), I.defaultChecked = D, I.checked = H ? D : !1;
              }
            } else
              t.removeAttribute(P);
          else k || y.includes(C) && (u || typeof V != "string") ? (t[C] = V, C in l && (l[C] = Ht)) : typeof V != "function" && Me(t, C, V);
        }
    }
  }
  return h && Gt(!0), f;
}
function ot(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  Th(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", f = !1;
    if (Xh(() => {
      var m = e(...l.map(c)), y = o0(
        t,
        u,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && pl(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || Lt(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === yh && (!u || w !== u[b]) && (d[b] && Lt(d[b]), d[b] = dn(() => Q1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Xo(() => {
        pl(
          v,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), n0(v);
      });
    }
    f = !0;
  });
}
function $a(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [gf]: t.nodeName.includes("-"),
      [vf]: t.namespaceURI === jm
    }
  );
}
var Vc = /* @__PURE__ */ new Map();
function mf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Vc.get(e);
  if (n) return n;
  Vc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = wh(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = pa(o);
  }
  return n;
}
function Vs(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Fh(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = Ka(t) ? Fa(i) : i, n(i), at !== null && r.add(at), await af(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var u = t.value.length;
        s === a && a === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Ee && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  yt(e) == null && t.value) && (n(Ka(t) ? Fa(t.value) : t.value), at !== null && r.add(at)), yo(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        ms ?? at
      );
      if (r.has(i))
        return;
    }
    Ka(t) && o === Fa(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function Ka(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Fa(t) {
  return t === "" ? null : +t;
}
function i0(t, e, n = e) {
  Fh(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Ee && t.files && n(t.files), yo(() => {
    t.files = e();
  });
}
class wu {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(e) {
    this.#n = e;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(e, n) {
    var r = this.#e.get(e) || /* @__PURE__ */ new Set();
    return r.add(n), this.#e.set(e, r), this.#r().observe(e, this.#n), () => {
      var o = this.#e.get(e);
      o.delete(n), o.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (e) => {
        for (var n of e) {
          wu.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var s0 = /* @__PURE__ */ new wu({
  box: "border-box"
});
function Ic(t, e, n) {
  var r = s0.observe(t, () => n(t[e]));
  Xo(() => (yt(() => n(t[e])), r));
}
function Lc(t, e) {
  return t === e || t?.[qn] === e;
}
function Kt(t = {}, e, n, r) {
  return Xo(() => {
    var o, i;
    return yo(() => {
      o = i, i = [], yt(() => {
        t !== n(...i) && (e(t, ...i), o && Lc(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Fr(() => {
        i && Lc(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function bu(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    gt
  ), n = e.l.u;
  if (!n) return;
  let r = () => gu(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ti(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && nn(() => {
    Hc(e, r), sl(n.b);
  }), Ze(() => {
    const o = yt(() => n.m.map(Wm));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Ze(() => {
    Hc(e, r), sl(n.a);
  });
}
function Hc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let ts = !1;
function a0(t) {
  var e = ts;
  try {
    return ts = !1, [t(), ts];
  } finally {
    ts = e;
  }
}
const l0 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function je(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    l0
  );
}
const u0 = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return c(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    if (!(e in t.special)) {
      var r = Ue;
      try {
        kn(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          gh
        );
      } finally {
        kn(r);
      }
    }
    return t.special[e](n), Ec(t.version), !0;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  deleteProperty(t, e) {
    return t.exclude.includes(e) || (t.exclude.push(e), Ec(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Rc(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: wr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ue
      )
    },
    u0
  );
}
const c0 = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Qo(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      Qo(o) && (o = o());
      const i = pr(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Qo(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = pr(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === qn || e === au) return !1;
    for (let n of t.props)
      if (Qo(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Qo(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Xe(...t) {
  return new Proxy({ props: t }, c0);
}
function g(t, e, n, r) {
  var o = !Zo || (n & Im) !== 0, i = (n & Lm) !== 0, s = (n & Hm) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? yt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var h = qn in t || au in t;
    d = pr(t, e)?.set ?? (h && e in t ? (E) => t[e] = E : void 0);
  }
  var f, v = !1;
  i ? [f, v] = a0(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (o && t1(), d(f)));
  var m;
  if (o ? m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E === void 0 ? u() : (l = !0, E);
  } : m = () => {
    var E = (
      /** @type {V} */
      t[e]
    );
    return E !== void 0 && (a = /** @type {V} */
    void 0), E === void 0 ? a : E;
  }, o && (n & gh) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(E, C) {
        return arguments.length > 0 ? ((!o || !C || y || v) && d(C ? m() : E), E) : m();
      }
    );
  }
  var w = !1, b = ((n & Vm) !== 0 ? Ti : cu)(() => (w = !1, m()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Ue
  );
  return (
    /** @type {() => V} */
    function(E, C) {
      if (arguments.length > 0) {
        const k = C ? c(b) : o && i ? $t(E) : E;
        return F(b, k), w = !0, a !== void 0 && (a = k), E;
      }
      return wo && w || (x.f & gr) !== 0 ? b.v : c(b);
    }
  );
}
function d0(t) {
  return new h0(t);
}
class h0 {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ Ih(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === au ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return F(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? X1 : yu)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && p(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Ns(this, i, {
        get() {
          return this.#t[i];
        },
        /** @param {any} value */
        set(s) {
          this.#t[i] = s;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    }, this.#t.$destroy = () => {
      hf(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#t.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    this.#e[e] = this.#e[e] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#e[e].push(r), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let yf;
typeof HTMLElement == "function" && (yf = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, n) {
    super(), this.$$ctor = t, this.$$s = e, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const r = this.$$c.$on(t, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(t, e, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, n) {
    if (super.removeEventListener(t, e, n), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (o) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), A(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = f0(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ws(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = d0({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = mo(() => {
        yo(() => {
          this.$$r = !0;
          for (const r of Ps(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ws(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
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
  attributeChangedCallback(t, e, n) {
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ws(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Ps(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function ws(t, e, n, r) {
  const o = n[t]?.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function f0(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function se(t, e, n, r, o, i) {
  let s = class extends yf {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Ps(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Ps(e).forEach((a) => {
    Ns(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ws(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = pr(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Ns(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var p0 = { value: () => {
} };
function Sa() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new bs(n);
}
function bs(t) {
  this._ = t;
}
function g0(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
bs.prototype = Sa.prototype = {
  constructor: bs,
  on: function(t, e) {
    var n = this._, r = g0(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = v0(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = jc(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = jc(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new bs(t);
  },
  call: function(t, e) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (i = this._[t], r = 0, o = i.length; r < o; ++r) i[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(e, n);
  }
};
function v0(t, e) {
  for (var n = 0, r = t.length, o; n < r; ++n)
    if ((o = t[n]).name === e)
      return o.value;
}
function jc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = p0, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var gl = "http://www.w3.org/1999/xhtml";
const Bc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: gl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _a(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Bc.hasOwnProperty(e) ? { space: Bc[e], local: t } : t;
}
function m0(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === gl && e.documentElement.namespaceURI === gl ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function y0(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function wf(t) {
  var e = _a(t);
  return (e.local ? y0 : m0)(e);
}
function w0() {
}
function xu(t) {
  return t == null ? w0 : function() {
    return this.querySelector(t);
  };
}
function b0(t) {
  typeof t != "function" && (t = xu(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new vn(r, this._parents);
}
function x0(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function k0() {
  return [];
}
function bf(t) {
  return t == null ? k0 : function() {
    return this.querySelectorAll(t);
  };
}
function C0(t) {
  return function() {
    return x0(t.apply(this, arguments));
  };
}
function $0(t) {
  typeof t == "function" ? t = C0(t) : t = bf(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new vn(r, o);
}
function xf(t) {
  return function() {
    return this.matches(t);
  };
}
function kf(t) {
  return function(e) {
    return e.matches(t);
  };
}
var S0 = Array.prototype.find;
function _0(t) {
  return function() {
    return S0.call(this.children, t);
  };
}
function E0() {
  return this.firstElementChild;
}
function O0(t) {
  return this.select(t == null ? E0 : _0(typeof t == "function" ? t : kf(t)));
}
var P0 = Array.prototype.filter;
function N0() {
  return Array.from(this.children);
}
function M0(t) {
  return function() {
    return P0.call(this.children, t);
  };
}
function z0(t) {
  return this.selectAll(t == null ? N0 : M0(typeof t == "function" ? t : kf(t)));
}
function T0(t) {
  typeof t != "function" && (t = xf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new vn(r, this._parents);
}
function Cf(t) {
  return new Array(t.length);
}
function A0() {
  return new vn(this._enter || this._groups.map(Cf), this._parents);
}
function Is(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Is.prototype = {
  constructor: Is,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function D0(t) {
  return function() {
    return t;
  };
}
function V0(t, e, n, r, o, i) {
  for (var s = 0, a, l = e.length, u = i.length; s < u; ++s)
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Is(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function I0(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, f = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (f[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new Is(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(f[a]) === l && (o[a] = l);
}
function L0(t) {
  return t.__data__;
}
function H0(t, e) {
  if (!arguments.length) return Array.from(this, L0);
  var n = e ? I0 : V0, r = this._parents, o = this._groups;
  typeof t != "function" && (t = D0(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, v = R0(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(f);
    n(d, h, y, w, b, v, e);
    for (var x = 0, E = 0, C, k; x < m; ++x)
      if (C = y[x]) {
        for (x >= E && (E = x + 1); !(k = w[E]) && ++E < m; ) ;
        C._next = k || null;
      }
  }
  return s = new vn(s, r), s._enter = a, s._exit = l, s;
}
function R0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function j0() {
  return new vn(this._exit || this._groups.map(Cf), this._parents);
}
function B0(t, e, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (o = e(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function K0(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], h = u.length, f = a[l] = new Array(h), v, m = 0; m < h; ++m)
      (v = u[m] || d[m]) && (f[m] = v);
  for (; l < o; ++l)
    a[l] = n[l];
  return new vn(a, this._parents);
}
function F0() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Z0(t) {
  t || (t = W0);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(e);
  }
  return new vn(o, this._parents).order();
}
function W0(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function X0() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function q0() {
  return Array.from(this);
}
function Y0() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function G0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function U0() {
  return !this.node();
}
function J0(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var o = e[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && t.call(a, a.__data__, i, o);
  return this;
}
function Q0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ey(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ty(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ny(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ry(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function oy(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function iy(t, e) {
  var n = _a(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ey : Q0 : typeof e == "function" ? n.local ? oy : ry : n.local ? ny : ty)(n, e));
}
function $f(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function sy(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ay(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ly(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function uy(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? sy : typeof e == "function" ? ly : ay)(t, e, n ?? "")) : Vo(this.node(), t);
}
function Vo(t, e) {
  return t.style.getPropertyValue(e) || $f(t).getComputedStyle(t, null).getPropertyValue(e);
}
function cy(t) {
  return function() {
    delete this[t];
  };
}
function dy(t, e) {
  return function() {
    this[t] = e;
  };
}
function hy(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function fy(t, e) {
  return arguments.length > 1 ? this.each((e == null ? cy : typeof e == "function" ? hy : dy)(t, e)) : this.node()[t];
}
function Sf(t) {
  return t.trim().split(/^|\s+/);
}
function ku(t) {
  return t.classList || new _f(t);
}
function _f(t) {
  this._node = t, this._names = Sf(t.getAttribute("class") || "");
}
_f.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ef(t, e) {
  for (var n = ku(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Of(t, e) {
  for (var n = ku(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function py(t) {
  return function() {
    Ef(this, t);
  };
}
function gy(t) {
  return function() {
    Of(this, t);
  };
}
function vy(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ef : Of)(this, t);
  };
}
function my(t, e) {
  var n = Sf(t + "");
  if (arguments.length < 2) {
    for (var r = ku(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? vy : e ? py : gy)(n, e));
}
function yy() {
  this.textContent = "";
}
function wy(t) {
  return function() {
    this.textContent = t;
  };
}
function by(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function xy(t) {
  return arguments.length ? this.each(t == null ? yy : (typeof t == "function" ? by : wy)(t)) : this.node().textContent;
}
function ky() {
  this.innerHTML = "";
}
function Cy(t) {
  return function() {
    this.innerHTML = t;
  };
}
function $y(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Sy(t) {
  return arguments.length ? this.each(t == null ? ky : (typeof t == "function" ? $y : Cy)(t)) : this.node().innerHTML;
}
function _y() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ey() {
  return this.each(_y);
}
function Oy() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Py() {
  return this.each(Oy);
}
function Ny(t) {
  var e = typeof t == "function" ? t : wf(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function My() {
  return null;
}
function zy(t, e) {
  var n = typeof t == "function" ? t : wf(t), r = e == null ? My : typeof e == "function" ? e : xu(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ty() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ay() {
  return this.each(Ty);
}
function Dy() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Vy() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Iy(t) {
  return this.select(t ? Vy : Dy);
}
function Ly(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Hy(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ry(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function jy(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, o = e.length, i; n < o; ++n)
        i = e[n], (!t.type || i.type === t.type) && i.name === t.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++r] = i;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function By(t, e, n) {
  return function() {
    var r = this.__on, o, i = Hy(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === t.type && o.name === t.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = e;
          return;
        }
    }
    this.addEventListener(t.type, i, n), o = { type: t.type, name: t.name, value: e, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Ky(t, e, n) {
  var r = Ry(t + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, d; l < u; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = e ? By : jy, o = 0; o < i; ++o) this.each(a(r[o], e, n));
  return this;
}
function Pf(t, e, n) {
  var r = $f(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function Fy(t, e) {
  return function() {
    return Pf(this, t, e);
  };
}
function Zy(t, e) {
  return function() {
    return Pf(this, t, e.apply(this, arguments));
  };
}
function Wy(t, e) {
  return this.each((typeof e == "function" ? Zy : Fy)(t, e));
}
function* Xy() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Nf = [null];
function vn(t, e) {
  this._groups = t, this._parents = e;
}
function Li() {
  return new vn([[document.documentElement]], Nf);
}
function qy() {
  return this;
}
vn.prototype = Li.prototype = {
  constructor: vn,
  select: b0,
  selectAll: $0,
  selectChild: O0,
  selectChildren: z0,
  filter: T0,
  data: H0,
  enter: A0,
  exit: j0,
  join: B0,
  merge: K0,
  selection: qy,
  order: F0,
  sort: Z0,
  call: X0,
  nodes: q0,
  node: Y0,
  size: G0,
  empty: U0,
  each: J0,
  attr: iy,
  style: uy,
  property: fy,
  classed: my,
  text: xy,
  html: Sy,
  raise: Ey,
  lower: Py,
  append: Ny,
  insert: zy,
  remove: Ay,
  clone: Iy,
  datum: Ly,
  on: Ky,
  dispatch: Wy,
  [Symbol.iterator]: Xy
};
function xn(t) {
  return typeof t == "string" ? new vn([[document.querySelector(t)]], [document.documentElement]) : new vn([[t]], Nf);
}
function Yy(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function _n(t, e) {
  if (t = Yy(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect();
      return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Gy = { passive: !1 }, bi = { capture: !0, passive: !1 };
function Za(t) {
  t.stopImmediatePropagation();
}
function No(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Mf(t) {
  var e = t.document.documentElement, n = xn(t).on("dragstart.drag", No, bi);
  "onselectstart" in e ? n.on("selectstart.drag", No, bi) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function zf(t, e) {
  var n = t.document.documentElement, r = xn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", No, bi), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ns = (t) => () => t;
function vl(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: u,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
vl.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Uy(t) {
  return !t.ctrlKey && !t.button;
}
function Jy() {
  return this.parentNode;
}
function Qy(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ew() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function tw() {
  var t = Uy, e = Jy, n = Qy, r = ew, o = {}, i = Sa("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function f(C) {
    C.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Gy).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(C, k) {
    if (!(d || !t.call(this, C, k))) {
      var P = E(this, e.call(this, C, k), C, k, "mouse");
      P && (xn(C.view).on("mousemove.drag", m, bi).on("mouseup.drag", y, bi), Mf(C.view), Za(C), u = !1, a = C.clientX, l = C.clientY, P("start", C));
    }
  }
  function m(C) {
    if (No(C), !u) {
      var k = C.clientX - a, P = C.clientY - l;
      u = k * k + P * P > h;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    xn(C.view).on("mousemove.drag mouseup.drag", null), zf(C.view, u), No(C), o.mouse("end", C);
  }
  function w(C, k) {
    if (t.call(this, C, k)) {
      var P = C.changedTouches, V = e.call(this, C, k), I = P.length, H, D;
      for (H = 0; H < I; ++H)
        (D = E(this, V, C, k, P[H].identifier, P[H])) && (Za(C), D("start", C, P[H]));
    }
  }
  function b(C) {
    var k = C.changedTouches, P = k.length, V, I;
    for (V = 0; V < P; ++V)
      (I = o[k[V].identifier]) && (No(C), I("drag", C, k[V]));
  }
  function x(C) {
    var k = C.changedTouches, P = k.length, V, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < P; ++V)
      (I = o[k[V].identifier]) && (Za(C), I("end", C, k[V]));
  }
  function E(C, k, P, V, I, H) {
    var D = i.copy(), N = _n(H || P, k), S, z, $;
    if (($ = n.call(C, new vl("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: I,
      active: s,
      x: N[0],
      y: N[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), V)) != null)
      return S = $.x - N[0] || 0, z = $.y - N[1] || 0, function O(M, B, q) {
        var U = N, T;
        switch (M) {
          case "start":
            o[I] = O, T = s++;
            break;
          case "end":
            delete o[I], --s;
          // falls through
          case "drag":
            N = _n(q || B, k), T = s;
            break;
        }
        D.call(
          M,
          C,
          new vl(M, {
            sourceEvent: B,
            subject: $,
            target: f,
            identifier: I,
            active: T,
            x: N[0] + S,
            y: N[1] + z,
            dx: N[0] - U[0],
            dy: N[1] - U[1],
            dispatch: D
          }),
          V
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : ns(!!C), f) : t;
  }, f.container = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : ns(C), f) : e;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : ns(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : ns(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (h = (C = +C) * C, f) : Math.sqrt(h);
  }, f;
}
function Cu(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Tf(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Hi() {
}
var xi = 0.7, Ls = 1 / xi, Mo = "\\s*([+-]?\\d+)\\s*", ki = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nw = /^#([0-9a-f]{3,8})$/, rw = new RegExp(`^rgb\\(${Mo},${Mo},${Mo}\\)$`), ow = new RegExp(`^rgb\\(${Yn},${Yn},${Yn}\\)$`), iw = new RegExp(`^rgba\\(${Mo},${Mo},${Mo},${ki}\\)$`), sw = new RegExp(`^rgba\\(${Yn},${Yn},${Yn},${ki}\\)$`), aw = new RegExp(`^hsl\\(${ki},${Yn},${Yn}\\)$`), lw = new RegExp(`^hsla\\(${ki},${Yn},${Yn},${ki}\\)$`), Kc = {
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
Cu(Hi, co, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fc,
  // Deprecated! Use color.formatHex.
  formatHex: Fc,
  formatHex8: uw,
  formatHsl: cw,
  formatRgb: Zc,
  toString: Zc
});
function Fc() {
  return this.rgb().formatHex();
}
function uw() {
  return this.rgb().formatHex8();
}
function cw() {
  return Af(this).formatHsl();
}
function Zc() {
  return this.rgb().formatRgb();
}
function co(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = nw.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Wc(e) : n === 3 ? new on(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? rs(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? rs(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = rw.exec(t)) ? new on(e[1], e[2], e[3], 1) : (e = ow.exec(t)) ? new on(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = iw.exec(t)) ? rs(e[1], e[2], e[3], e[4]) : (e = sw.exec(t)) ? rs(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = aw.exec(t)) ? Yc(e[1], e[2] / 100, e[3] / 100, 1) : (e = lw.exec(t)) ? Yc(e[1], e[2] / 100, e[3] / 100, e[4]) : Kc.hasOwnProperty(t) ? Wc(Kc[t]) : t === "transparent" ? new on(NaN, NaN, NaN, 0) : null;
}
function Wc(t) {
  return new on(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function rs(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new on(t, e, n, r);
}
function dw(t) {
  return t instanceof Hi || (t = co(t)), t ? (t = t.rgb(), new on(t.r, t.g, t.b, t.opacity)) : new on();
}
function ml(t, e, n, r) {
  return arguments.length === 1 ? dw(t) : new on(t, e, n, r ?? 1);
}
function on(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Cu(on, ml, Tf(Hi, {
  brighter(t) {
    return t = t == null ? Ls : Math.pow(Ls, t), new on(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xi : Math.pow(xi, t), new on(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new on(oo(this.r), oo(this.g), oo(this.b), Hs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xc,
  // Deprecated! Use color.formatHex.
  formatHex: Xc,
  formatHex8: hw,
  formatRgb: qc,
  toString: qc
}));
function Xc() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}`;
}
function hw() {
  return `#${eo(this.r)}${eo(this.g)}${eo(this.b)}${eo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qc() {
  const t = Hs(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${oo(this.r)}, ${oo(this.g)}, ${oo(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Hs(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function oo(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function eo(t) {
  return t = oo(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Yc(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new En(t, e, n, r);
}
function Af(t) {
  if (t instanceof En) return new En(t.h, t.s, t.l, t.opacity);
  if (t instanceof Hi || (t = co(t)), !t) return new En();
  if (t instanceof En) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new En(s, a, l, t.opacity);
}
function fw(t, e, n, r) {
  return arguments.length === 1 ? Af(t) : new En(t, e, n, r ?? 1);
}
function En(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Cu(En, fw, Tf(Hi, {
  brighter(t) {
    return t = t == null ? Ls : Math.pow(Ls, t), new En(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xi : Math.pow(xi, t), new En(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new on(
      Wa(t >= 240 ? t - 240 : t + 120, o, r),
      Wa(t, o, r),
      Wa(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new En(Gc(this.h), os(this.s), os(this.l), Hs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Hs(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Gc(this.h)}, ${os(this.s) * 100}%, ${os(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Gc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function os(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Wa(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const $u = (t) => () => t;
function pw(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function gw(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function vw(t) {
  return (t = +t) == 1 ? Df : function(e, n) {
    return n - e ? gw(e, n, t) : $u(isNaN(e) ? n : e);
  };
}
function Df(t, e) {
  var n = e - t;
  return n ? pw(t, n) : $u(isNaN(t) ? e : t);
}
const Rs = function t(e) {
  var n = vw(e);
  function r(o, i) {
    var s = n((o = ml(o)).r, (i = ml(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Df(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = t, r;
}(1);
function mw(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = t[o] * (1 - i) + e[o] * i;
    return r;
  };
}
function yw(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ww(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = pi(t[s], e[s]);
  for (; s < n; ++s) i[s] = e[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function bw(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function Bn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function xw(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = pi(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var yl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xa = new RegExp(yl.source, "g");
function kw(t) {
  return function() {
    return t;
  };
}
function Cw(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Vf(t, e) {
  var n = yl.lastIndex = Xa.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = yl.exec(t)) && (o = Xa.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Bn(r, o) })), n = Xa.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Cw(l[0].x) : kw(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function pi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? $u(e) : (n === "number" ? Bn : n === "string" ? (r = co(e)) ? (e = r, Rs) : Vf : e instanceof co ? Rs : e instanceof Date ? bw : yw(e) ? mw : Array.isArray(e) ? ww : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? xw : Bn)(t, e);
}
var Uc = 180 / Math.PI, If = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Lf(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * Uc,
    skewX: Math.atan(l) * Uc,
    scaleX: s,
    scaleY: a
  };
}
var is;
function $w(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? If : Lf(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Sw(t) {
  return t == null || (is || (is = document.createElementNS("http://www.w3.org/2000/svg", "g")), is.setAttribute("transform", t), !(t = is.transform.baseVal.consolidate())) ? If : (t = t.matrix, Lf(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Hf(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Bn(u, h) }, { i: y - 2, x: Bn(d, f) });
    } else (h || f) && v.push("translate(" + h + e + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: Bn(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: Bn(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Bn(u, h) }, { i: y - 2, x: Bn(d, f) });
    } else (h !== 1 || f !== 1) && v.push(o(v) + "scale(" + h + "," + f + ")");
  }
  return function(u, d) {
    var h = [], f = [];
    return u = t(u), d = t(d), i(u.translateX, u.translateY, d.translateX, d.translateY, h, f), s(u.rotate, d.rotate, h, f), a(u.skewX, d.skewX, h, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, h, f), u = d = null, function(v) {
      for (var m = -1, y = f.length, w; ++m < y; ) h[(w = f[m]).i] = w.x(v);
      return h.join("");
    };
  };
}
var _w = Hf($w, "px, ", "px)", "deg)"), Ew = Hf(Sw, ", ", ")", ")"), Ow = 1e-12;
function Jc(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Pw(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Nw(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const xs = function t(e, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], h = s[1], f = s[2], v = d - a, m = h - l, y = v * v + m * m, w, b;
    if (y < Ow)
      b = Math.log(f / u) / e, w = function(V) {
        return [
          a + V * v,
          l + V * m,
          u * Math.exp(e * V * b)
        ];
      };
    else {
      var x = Math.sqrt(y), E = (f * f - u * u + r * y) / (2 * u * n * x), C = (f * f - u * u - r * y) / (2 * f * n * x), k = Math.log(Math.sqrt(E * E + 1) - E), P = Math.log(Math.sqrt(C * C + 1) - C);
      b = (P - k) / e, w = function(V) {
        var I = V * b, H = Jc(k), D = u / (n * x) * (H * Nw(e * I + k) - Pw(k));
        return [
          a + D * v,
          l + D * m,
          u * H / Jc(e * I + k)
        ];
      };
    }
    return w.duration = b * 1e3 * e / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return t(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Io = 0, si = 0, ei = 0, Rf = 1e3, js, ai, Bs = 0, ho = 0, Ea = 0, Ci = typeof performance == "object" && performance.now ? performance : Date, jf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Su() {
  return ho || (jf(Mw), ho = Ci.now() + Ea);
}
function Mw() {
  ho = 0;
}
function Ks() {
  this._call = this._time = this._next = null;
}
Ks.prototype = Bf.prototype = {
  constructor: Ks,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Su() : +n) + (e == null ? 0 : +e), !this._next && ai !== this && (ai ? ai._next = this : js = this, ai = this), this._call = t, this._time = n, wl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, wl());
  }
};
function Bf(t, e, n) {
  var r = new Ks();
  return r.restart(t, e, n), r;
}
function zw() {
  Su(), ++Io;
  for (var t = js, e; t; )
    (e = ho - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Io;
}
function Qc() {
  ho = (Bs = Ci.now()) + Ea, Io = si = 0;
  try {
    zw();
  } finally {
    Io = 0, Aw(), ho = 0;
  }
}
function Tw() {
  var t = Ci.now(), e = t - Bs;
  e > Rf && (Ea -= e, Bs = t);
}
function Aw() {
  for (var t, e = js, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : js = n);
  ai = t, wl(r);
}
function wl(t) {
  if (!Io) {
    si && (si = clearTimeout(si));
    var e = t - ho;
    e > 24 ? (t < 1 / 0 && (si = setTimeout(Qc, t - Ci.now() - Ea)), ei && (ei = clearInterval(ei))) : (ei || (Bs = Ci.now(), ei = setInterval(Tw, Rf)), Io = 1, jf(Qc));
  }
}
function ed(t, e, n) {
  var r = new Ks();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Dw = Sa("start", "end", "cancel", "interrupt"), Vw = [], Kf = 0, td = 1, bl = 2, ks = 3, nd = 4, xl = 5, Cs = 6;
function Oa(t, e, n, r, o, i) {
  var s = t.__transition;
  if (!s) t.__transition = {};
  else if (n in s) return;
  Iw(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Dw,
    tween: Vw,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Kf
  });
}
function _u(t, e) {
  var n = In(t, e);
  if (n.state > Kf) throw new Error("too late; already scheduled");
  return n;
}
function nr(t, e) {
  var n = In(t, e);
  if (n.state > ks) throw new Error("too late; already running");
  return n;
}
function In(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Iw(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = Bf(i, 0, n.time);
  function i(u) {
    n.state = td, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, v;
    if (n.state !== td) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === ks) return ed(s);
        v.state === nd ? (v.state = Cs, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = Cs, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (ed(function() {
      n.state === ks && (n.state = nd, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = bl, n.on.call("start", t, t.__data__, n.index, n.group), n.state === bl) {
      for (n.state = ks, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = xl, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(t, d);
    n.state === xl && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Cs, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function $s(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > bl && r.state < xl, r.state = Cs, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function Lw(t) {
  return this.each(function() {
    $s(this, t);
  });
}
function Hw(t, e) {
  var n, r;
  return function() {
    var o = nr(this, t), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function Rw(t, e, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = nr(this, t), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: e, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === e) {
          o[l] = a;
          break;
        }
      l === u && o.push(a);
    }
    i.tween = o;
  };
}
function jw(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = In(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Hw : Rw)(n, t, e));
}
function Eu(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = nr(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return In(o, r).value[e];
  };
}
function Ff(t, e) {
  var n;
  return (typeof e == "number" ? Bn : e instanceof co ? Rs : (n = co(e)) ? (e = n, Rs) : Vf)(t, e);
}
function Bw(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Kw(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Zw(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Ww(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function Xw(t, e, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a)));
  };
}
function qw(t, e) {
  var n = _a(t), r = n === "transform" ? Ew : Ff;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Xw : Ww)(n, r, Eu(this, "attr." + t, e)) : e == null ? (n.local ? Kw : Bw)(n) : (n.local ? Zw : Fw)(n, r, e));
}
function Yw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Gw(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Uw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Gw(t, i)), n;
  }
  return o._value = e, o;
}
function Jw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Yw(t, i)), n;
  }
  return o._value = e, o;
}
function Qw(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = _a(t);
  return this.tween(n, (r.local ? Uw : Jw)(r, e));
}
function eb(t, e) {
  return function() {
    _u(this, t).delay = +e.apply(this, arguments);
  };
}
function tb(t, e) {
  return e = +e, function() {
    _u(this, t).delay = e;
  };
}
function nb(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? eb : tb)(e, t)) : In(this.node(), e).delay;
}
function rb(t, e) {
  return function() {
    nr(this, t).duration = +e.apply(this, arguments);
  };
}
function ob(t, e) {
  return e = +e, function() {
    nr(this, t).duration = e;
  };
}
function ib(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rb : ob)(e, t)) : In(this.node(), e).duration;
}
function sb(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    nr(this, t).ease = e;
  };
}
function ab(t) {
  var e = this._id;
  return arguments.length ? this.each(sb(e, t)) : In(this.node(), e).ease;
}
function lb(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    nr(this, t).ease = n;
  };
}
function ub(t) {
  if (typeof t != "function") throw new Error();
  return this.each(lb(this._id, t));
}
function cb(t) {
  typeof t != "function" && (t = xf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new br(r, this._parents, this._name, this._id);
}
function db(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), f, v = 0; v < d; ++v)
      (f = l[v] || u[v]) && (h[v] = f);
  for (; a < r; ++a)
    s[a] = e[a];
  return new br(s, this._parents, this._name, this._id);
}
function hb(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function fb(t, e, n) {
  var r, o, i = hb(e) ? _u : nr;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function pb(t, e) {
  var n = this._id;
  return arguments.length < 2 ? In(this.node(), n).on.on(t) : this.each(fb(n, t, e));
}
function gb(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function vb() {
  return this.on("end.remove", gb(this._id));
}
function mb(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = xu(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = t.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, Oa(u[f], e, n, f, u, In(d, n)));
  return new br(i, this._parents, e, n);
}
function yb(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bf(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var f = t.call(d, d.__data__, h, l), v, m = In(d, n), y = 0, w = f.length; y < w; ++y)
          (v = f[y]) && Oa(v, e, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new br(i, s, e, n);
}
var wb = Li.prototype.constructor;
function bb() {
  return new wb(this._groups, this._parents);
}
function xb(t, e) {
  var n, r, o;
  return function() {
    var i = Vo(this, t), s = (this.style.removeProperty(t), Vo(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function Zf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function kb(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = Vo(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Cb(t, e, n) {
  var r, o, i;
  return function() {
    var s = Vo(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), Vo(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function $b(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = nr(this, t), u = l.on, d = l.value[i] == null ? a || (a = Zf(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Sb(t, e, n) {
  var r = (t += "") == "transform" ? _w : Ff;
  return e == null ? this.styleTween(t, xb(t, r)).on("end.style." + t, Zf(t)) : typeof e == "function" ? this.styleTween(t, Cb(t, r, Eu(this, "style." + t, e))).each($b(this._id, t)) : this.styleTween(t, kb(t, r, e), n).on("end.style." + t, null);
}
function _b(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Eb(t, e, n) {
  var r, o;
  function i() {
    var s = e.apply(this, arguments);
    return s !== o && (r = (o = s) && _b(t, s, n)), r;
  }
  return i._value = e, i;
}
function Ob(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Eb(t, e, n ?? ""));
}
function Pb(t) {
  return function() {
    this.textContent = t;
  };
}
function Nb(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Mb(t) {
  return this.tween("text", typeof t == "function" ? Nb(Eu(this, "text", t)) : Pb(t == null ? "" : t + ""));
}
function zb(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Tb(t) {
  var e, n;
  function r() {
    var o = t.apply(this, arguments);
    return o !== n && (e = (n = o) && zb(o)), e;
  }
  return r._value = t, r;
}
function Ab(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Tb(t));
}
function Db() {
  for (var t = this._name, e = this._id, n = Wf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = In(l, e);
        Oa(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new br(r, this._parents, t, n);
}
function Vb() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = nr(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var Ib = 0;
function br(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Wf() {
  return ++Ib;
}
var ir = Li.prototype;
br.prototype = {
  constructor: br,
  select: mb,
  selectAll: yb,
  selectChild: ir.selectChild,
  selectChildren: ir.selectChildren,
  filter: cb,
  merge: db,
  selection: bb,
  transition: Db,
  call: ir.call,
  nodes: ir.nodes,
  node: ir.node,
  size: ir.size,
  empty: ir.empty,
  each: ir.each,
  on: pb,
  attr: qw,
  attrTween: Qw,
  style: Sb,
  styleTween: Ob,
  text: Mb,
  textTween: Ab,
  remove: vb,
  tween: jw,
  delay: nb,
  duration: ib,
  ease: ab,
  easeVarying: ub,
  end: Vb,
  [Symbol.iterator]: ir[Symbol.iterator]
};
function Lb(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Hb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lb
};
function Rb(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function jb(t) {
  var e, n;
  t instanceof br ? (e = t._id, t = t._name) : (e = Wf(), (n = Hb).time = Su(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Oa(l, t, e, u, s, n || Rb(l, e));
  return new br(r, this._parents, t, e);
}
Li.prototype.interrupt = Lw;
Li.prototype.transition = jb;
const ss = (t) => () => t;
function Bb(t, {
  sourceEvent: e,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function cr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
cr.prototype = {
  constructor: cr,
  scale: function(t) {
    return t === 1 ? this : new cr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new cr(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Pa = new cr(1, 0, 0);
Xf.prototype = cr.prototype;
function Xf(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return Pa;
  return t.__zoom;
}
function qa(t) {
  t.stopImmediatePropagation();
}
function ti(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Kb(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Fb() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function rd() {
  return this.__zoom || Pa;
}
function Zb(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Wb() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xb(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], o = t.invertX(e[1][0]) - n[1][0], i = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function qf() {
  var t = Kb, e = Fb, n = Xb, r = Zb, o = Wb, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = xs, u = Sa("start", "zoom", "end"), d, h, f, v = 500, m = 150, y = 0, w = 10;
  function b($) {
    $.property("__zoom", rd).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", H).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function($, O, M, B) {
    var q = $.selection ? $.selection() : $;
    q.property("__zoom", rd), $ !== q ? k($, O, M, B) : q.interrupt().each(function() {
      P(this, arguments).event(B).start().zoom(null, typeof O == "function" ? O.apply(this, arguments) : O).end();
    });
  }, b.scaleBy = function($, O, M, B) {
    b.scaleTo($, function() {
      var q = this.__zoom.k, U = typeof O == "function" ? O.apply(this, arguments) : O;
      return q * U;
    }, M, B);
  }, b.scaleTo = function($, O, M, B) {
    b.transform($, function() {
      var q = e.apply(this, arguments), U = this.__zoom, T = M == null ? C(q) : typeof M == "function" ? M.apply(this, arguments) : M, G = U.invert(T), ee = typeof O == "function" ? O.apply(this, arguments) : O;
      return n(E(x(U, ee), T, G), q, s);
    }, M, B);
  }, b.translateBy = function($, O, M, B) {
    b.transform($, function() {
      return n(this.__zoom.translate(
        typeof O == "function" ? O.apply(this, arguments) : O,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), e.apply(this, arguments), s);
    }, null, B);
  }, b.translateTo = function($, O, M, B, q) {
    b.transform($, function() {
      var U = e.apply(this, arguments), T = this.__zoom, G = B == null ? C(U) : typeof B == "function" ? B.apply(this, arguments) : B;
      return n(Pa.translate(G[0], G[1]).scale(T.k).translate(
        typeof O == "function" ? -O.apply(this, arguments) : -O,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), U, s);
    }, B, q);
  };
  function x($, O) {
    return O = Math.max(i[0], Math.min(i[1], O)), O === $.k ? $ : new cr(O, $.x, $.y);
  }
  function E($, O, M) {
    var B = O[0] - M[0] * $.k, q = O[1] - M[1] * $.k;
    return B === $.x && q === $.y ? $ : new cr($.k, B, q);
  }
  function C($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function k($, O, M, B) {
    $.on("start.zoom", function() {
      P(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      P(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var q = this, U = arguments, T = P(q, U).event(B), G = e.apply(q, U), ee = M == null ? C(G) : typeof M == "function" ? M.apply(q, U) : M, j = Math.max(G[1][0] - G[0][0], G[1][1] - G[0][1]), Z = q.__zoom, X = typeof O == "function" ? O.apply(q, U) : O, J = l(Z.invert(ee).concat(j / Z.k), X.invert(ee).concat(j / X.k));
      return function(oe) {
        if (oe === 1) oe = X;
        else {
          var L = J(oe), ne = j / L[2];
          oe = new cr(ne, ee[0] - L[0] * ne, ee[1] - L[1] * ne);
        }
        T.zoom(null, oe);
      };
    });
  }
  function P($, O, M) {
    return !M && $.__zooming || new V($, O);
  }
  function V($, O) {
    this.that = $, this.args = O, this.active = 0, this.sourceEvent = null, this.extent = e.apply($, O), this.taps = 0;
  }
  V.prototype = {
    event: function($) {
      return $ && (this.sourceEvent = $), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function($, O) {
      return this.mouse && $ !== "mouse" && (this.mouse[1] = O.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = O.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = O.invert(this.touch1[0])), this.that.__zoom = O, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function($) {
      var O = xn(this.that).datum();
      u.call(
        $,
        this.that,
        new Bb($, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        O
      );
    }
  };
  function I($, ...O) {
    if (!t.apply(this, arguments)) return;
    var M = P(this, O).event($), B = this.__zoom, q = Math.max(i[0], Math.min(i[1], B.k * Math.pow(2, r.apply(this, arguments)))), U = _n($);
    if (M.wheel)
      (M.mouse[0][0] !== U[0] || M.mouse[0][1] !== U[1]) && (M.mouse[1] = B.invert(M.mouse[0] = U)), clearTimeout(M.wheel);
    else {
      if (B.k === q) return;
      M.mouse = [U, B.invert(U)], $s(this), M.start();
    }
    ti($), M.wheel = setTimeout(T, m), M.zoom("mouse", n(E(x(B, q), M.mouse[0], M.mouse[1]), M.extent, s));
    function T() {
      M.wheel = null, M.end();
    }
  }
  function H($, ...O) {
    if (f || !t.apply(this, arguments)) return;
    var M = $.currentTarget, B = P(this, O, !0).event($), q = xn($.view).on("mousemove.zoom", ee, !0).on("mouseup.zoom", j, !0), U = _n($, M), T = $.clientX, G = $.clientY;
    Mf($.view), qa($), B.mouse = [U, this.__zoom.invert(U)], $s(this), B.start();
    function ee(Z) {
      if (ti(Z), !B.moved) {
        var X = Z.clientX - T, J = Z.clientY - G;
        B.moved = X * X + J * J > y;
      }
      B.event(Z).zoom("mouse", n(E(B.that.__zoom, B.mouse[0] = _n(Z, M), B.mouse[1]), B.extent, s));
    }
    function j(Z) {
      q.on("mousemove.zoom mouseup.zoom", null), zf(Z.view, B.moved), ti(Z), B.event(Z).end();
    }
  }
  function D($, ...O) {
    if (t.apply(this, arguments)) {
      var M = this.__zoom, B = _n($.changedTouches ? $.changedTouches[0] : $, this), q = M.invert(B), U = M.k * ($.shiftKey ? 0.5 : 2), T = n(E(x(M, U), B, q), e.apply(this, O), s);
      ti($), a > 0 ? xn(this).transition().duration(a).call(k, T, B, $) : xn(this).call(b.transform, T, B, $);
    }
  }
  function N($, ...O) {
    if (t.apply(this, arguments)) {
      var M = $.touches, B = M.length, q = P(this, O, $.changedTouches.length === B).event($), U, T, G, ee;
      for (qa($), T = 0; T < B; ++T)
        G = M[T], ee = _n(G, this), ee = [ee, this.__zoom.invert(ee), G.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== ee[2] && (q.touch1 = ee, q.taps = 0) : (q.touch0 = ee, U = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), U && (q.taps < 2 && (h = ee[0], d = setTimeout(function() {
        d = null;
      }, v)), $s(this), q.start());
    }
  }
  function S($, ...O) {
    if (this.__zooming) {
      var M = P(this, O).event($), B = $.changedTouches, q = B.length, U, T, G, ee;
      for (ti($), U = 0; U < q; ++U)
        T = B[U], G = _n(T, this), M.touch0 && M.touch0[2] === T.identifier ? M.touch0[0] = G : M.touch1 && M.touch1[2] === T.identifier && (M.touch1[0] = G);
      if (T = M.that.__zoom, M.touch1) {
        var j = M.touch0[0], Z = M.touch0[1], X = M.touch1[0], J = M.touch1[1], oe = (oe = X[0] - j[0]) * oe + (oe = X[1] - j[1]) * oe, L = (L = J[0] - Z[0]) * L + (L = J[1] - Z[1]) * L;
        T = x(T, Math.sqrt(oe / L)), G = [(j[0] + X[0]) / 2, (j[1] + X[1]) / 2], ee = [(Z[0] + J[0]) / 2, (Z[1] + J[1]) / 2];
      } else if (M.touch0) G = M.touch0[0], ee = M.touch0[1];
      else return;
      M.zoom("touch", n(E(T, G, ee), M.extent, s));
    }
  }
  function z($, ...O) {
    if (this.__zooming) {
      var M = P(this, O).event($), B = $.changedTouches, q = B.length, U, T;
      for (qa($), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), U = 0; U < q; ++U)
        T = B[U], M.touch0 && M.touch0[2] === T.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === T.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (T = _n(T, this), Math.hypot(h[0] - T[0], h[1] - T[1]) < w)) {
        var G = xn(this).on("dblclick.zoom");
        G && G.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : ss(+$), b) : r;
  }, b.filter = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : ss(!!$), b) : t;
  }, b.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : ss(!!$), b) : o;
  }, b.extent = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : ss([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), b) : e;
  }, b.scaleExtent = function($) {
    return arguments.length ? (i[0] = +$[0], i[1] = +$[1], b) : [i[0], i[1]];
  }, b.translateExtent = function($) {
    return arguments.length ? (s[0][0] = +$[0][0], s[1][0] = +$[1][0], s[0][1] = +$[0][1], s[1][1] = +$[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function($) {
    return arguments.length ? (n = $, b) : n;
  }, b.duration = function($) {
    return arguments.length ? (a = +$, b) : a;
  }, b.interpolate = function($) {
    return arguments.length ? (l = $, b) : l;
  }, b.on = function() {
    var $ = u.on.apply(u, arguments);
    return $ === u ? b : $;
  }, b.clickDistance = function($) {
    return arguments.length ? (y = ($ = +$) * $, b) : Math.sqrt(y);
  }, b.tapDistance = function($) {
    return arguments.length ? (w = +$, b) : w;
  }, b;
}
const $i = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (t) => `Node type "${t}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (t) => `The old edge with id=${t} does not exist.`,
  error009: (t) => `Marker type "${t}" doesn't exist.`,
  error008: (t, { id: e, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${t} handle id: "${t === "source" ? n : r}", edge id: ${e}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (t) => `Edge type "${t}" not found. Using fallback type "default".`,
  error012: (t) => `Node with id "${t}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (t = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${t}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, kl = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Yf = ["Enter", " ", "Escape"], qb = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: t, x: e, y: n }) => `Moved selected node ${t}. New position, x: ${e}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Lo;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(Lo || (Lo = {}));
var io;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(io || (io = {}));
var Fs;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Fs || (Fs = {}));
const Cl = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null
};
var ur;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(ur || (ur = {}));
var Si;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(Si || (Si = {}));
var Pe;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(Pe || (Pe = {}));
const od = {
  [Pe.Left]: Pe.Right,
  [Pe.Right]: Pe.Left,
  [Pe.Top]: Pe.Bottom,
  [Pe.Bottom]: Pe.Top
};
function Yb(t, e) {
  if (!t && !e)
    return !0;
  if (!t || !e || t.size !== e.size)
    return !1;
  if (!t.size && !e.size)
    return !0;
  for (const n of t.keys())
    if (!e.has(n))
      return !1;
  return !0;
}
function id(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Gb(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Gf = (t) => "id" in t && "source" in t && "target" in t, Ub = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), Ou = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), Ri = (t, e = [0, 0]) => {
  const { width: n, height: r } = Wr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
  return {
    x: t.position.x - i,
    y: t.position.y - s
  };
}, Jb = (t, e = { nodeOrigin: [0, 0] }) => {
  if (t.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = t.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !e.nodeLookup && !i ? o : void 0;
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : Ou(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? Zs(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Na(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ma(n);
}, ji = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = Na(n, Zs(o)), r = !0);
  }), r ? Ma(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Pu = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Ki(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = _i(a, Ro(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
    (!u.internals.handleBounds || b || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, Qb = (t, e) => {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    n.add(r.id);
  }), e.filter((r) => n.has(r.source) || n.has(r.target));
};
function e2(t, e) {
  const n = /* @__PURE__ */ new Map(), r = e?.nodes ? new Set(e.nodes.map((o) => o.id)) : null;
  return t.forEach((o) => {
    o.measured.width && o.measured.height && (e?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function t2({ nodes: t, width: e, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (t.size === 0)
    return Promise.resolve(!0);
  const a = e2(t, s), l = ji(a), u = Nu(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Uf({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", $i.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && jo(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = jo(h) ? fo(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", $i.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function n2({ nodesToRemove: t = [], edgesToRemove: e = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(t.map((h) => h.id)), s = [];
  for (const h of n) {
    if (h.deletable === !1)
      continue;
    const f = i.has(h.id), v = !f && h.parentId && s.find((m) => m.id === h.parentId);
    (f || v) && s.push(h);
  }
  const a = new Set(e.map((h) => h.id)), l = r.filter((h) => h.deletable !== !1), u = Qb(s, l);
  for (const h of l)
    a.has(h.id) && !u.find((f) => f.id === h.id) && u.push(h);
  if (!o)
    return {
      edges: u,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: u
  });
  return typeof d == "boolean" ? d ? { edges: u, nodes: s } : { edges: [], nodes: [] } : d;
}
const Ho = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), fo = (t = { x: 0, y: 0 }, e, n) => ({
  x: Ho(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: Ho(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function Jf(t, e, n) {
  const { width: r, height: o } = Wr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fo(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const sd = (t, e, n) => t < e ? Ho(Math.abs(t - e), 1, e) / e : t > n ? -Ho(Math.abs(t - n), 1, e) / e : 0, Qf = (t, e, n = 15, r = 40) => {
  const o = sd(t.x, r, e.width - r) * n, i = sd(t.y, r, e.height - r) * n;
  return [o, i];
}, Na = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), $l = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), Ma = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), Ro = (t, e = [0, 0]) => {
  const { x: n, y: r } = Ou(t) ? t.internals.positionAbsolute : Ri(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, Zs = (t, e = [0, 0]) => {
  const { x: n, y: r } = Ou(t) ? t.internals.positionAbsolute : Ri(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, ep = (t, e) => Ma(Na($l(t), $l(e))), _i = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, ad = (t) => dr(t.width) && dr(t.height) && dr(t.x) && dr(t.y), dr = (t) => !isNaN(t) && isFinite(t), r2 = (t, e) => {
}, Bi = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Ki = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? Bi(a, s) : a;
}, Ws = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function So(t, e) {
  if (typeof t == "number")
    return Math.floor((e - e / (1 + t)) * 0.5);
  if (typeof t == "string" && t.endsWith("px")) {
    const n = parseFloat(t);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof t == "string" && t.endsWith("%")) {
    const n = parseFloat(t);
    if (!Number.isNaN(n))
      return Math.floor(e * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function o2(t, e, n) {
  if (typeof t == "string" || typeof t == "number") {
    const r = So(t, n), o = So(t, e);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof t == "object") {
    const r = So(t.top ?? t.y ?? 0, n), o = So(t.bottom ?? t.y ?? 0, n), i = So(t.left ?? t.x ?? 0, e), s = So(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function i2(t, e, n, r, o, i) {
  const { x: s, y: a } = Ws(t, [e, n, r]), { x: l, y: u } = Ws({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const Nu = (t, e, n, r, o, i) => {
  const s = o2(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = Ho(u, r, o), h = t.x + t.width / 2, f = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - f * d, y = i2(t, v, m, d, e, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: v - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: d
  };
}, to = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function jo(t) {
  return t != null && t !== "parent";
}
function Wr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function tp(t) {
  return (t.measured?.width ?? t.width ?? t.initialWidth) !== void 0 && (t.measured?.height ?? t.height ?? t.initialHeight) !== void 0;
}
function s2(t, e = { width: 0, height: 0 }, n, r, o) {
  const i = { ...t }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (e.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (e.height ?? 0) * a[1];
  }
  return i;
}
function a2(t) {
  return { ...qb, ...t || {} };
}
function Ya(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Pn(t), a = Ki({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Bi(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const np = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), rp = (t) => t?.getRootNode?.() || window?.document, l2 = ["INPUT", "SELECT", "TEXTAREA"];
function op(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : l2.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const ip = (t) => "clientX" in t, Pn = (t, e) => {
  const n = ip(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, ld = (t, e, n, r, o) => {
  const i = e.querySelectorAll(`.${t}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: t,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...np(s)
    };
  });
};
function u2({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function as(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function ud({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case Pe.Left:
      return [e - as(e - r, i), n];
    case Pe.Right:
      return [e + as(r - e, i), n];
    case Pe.Top:
      return [e, n - as(n - o, i)];
    case Pe.Bottom:
      return [e, n + as(o - n, i)];
  }
}
function sp({ sourceX: t, sourceY: e, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, curvature: s = 0.25 }) {
  const [a, l] = ud({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ud({
    pos: i,
    x1: r,
    y1: o,
    x2: t,
    y2: e,
    c: s
  }), [h, f, v, m] = u2({
    sourceX: t,
    sourceY: e,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${t},${e} C${a},${l} ${u},${d} ${r},${o}`,
    h,
    f,
    v,
    m
  ];
}
function ap({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const o = Math.abs(n - t) / 2, i = n < t ? n + o : n - o, s = Math.abs(r - e) / 2, a = r < e ? r + s : r - s;
  return [i, a, o, s];
}
function c2({ sourceNode: t, targetNode: e, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(t.parentId || o && t.selected ? t.internals.z : 0, e.parentId || o && e.selected ? e.internals.z : 0);
  return i + s;
}
function d2({ sourceNode: t, targetNode: e, width: n, height: r, transform: o }) {
  const i = Na(Zs(t), Zs(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return _i(s, Ma(i)) > 0;
}
const h2 = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, f2 = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), p2 = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Gf(t) ? n = { ...t } : n = {
    ...t,
    id: h2(t)
  }, f2(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function lp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = ap({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const cd = {
  [Pe.Left]: { x: -1, y: 0 },
  [Pe.Right]: { x: 1, y: 0 },
  [Pe.Top]: { x: 0, y: -1 },
  [Pe.Bottom]: { x: 0, y: 1 }
}, g2 = ({ source: t, sourcePosition: e = Pe.Bottom, target: n }) => e === Pe.Left || e === Pe.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, dd = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function v2({ source: t, sourcePosition: e = Pe.Bottom, target: n, targetPosition: r = Pe.Top, center: o, offset: i, stepPosition: s }) {
  const a = cd[e], l = cd[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = g2({
    source: u,
    sourcePosition: e,
    target: d
  }), f = h.x !== 0 ? "x" : "y", v = h[f];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , E, C] = ap({
    sourceX: t.x,
    sourceY: t.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const k = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], P = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === v ? m = f === "x" ? k : P : m = f === "x" ? P : k;
  } else {
    const k = [{ x: u.x, y: d.y }], P = [{ x: d.x, y: u.y }];
    if (f === "x" ? m = a.x === v ? P : k : m = a.y === v ? k : P, e === r) {
      const N = Math.abs(t[f] - n[f]);
      if (N <= i) {
        const S = Math.min(i - 1, i - N);
        a[f] === v ? b[f] = (u[f] > t[f] ? -1 : 1) * S : x[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (e !== r) {
      const N = f === "x" ? "y" : "x", S = a[f] === l[N], z = u[N] > d[N], $ = u[N] < d[N];
      (a[f] === 1 && (!S && z || S && $) || a[f] !== 1 && (!S && $ || S && z)) && (m = f === "x" ? k : P);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, I = { x: d.x + x.x, y: d.y + x.y }, H = Math.max(Math.abs(V.x - m[0].x), Math.abs(I.x - m[0].x)), D = Math.max(Math.abs(V.y - m[0].y), Math.abs(I.y - m[0].y));
    H >= D ? (y = (V.x + I.x) / 2, w = m[0].y) : (y = m[0].x, w = (V.y + I.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], y, w, E, C];
}
function m2(t, e, n, r) {
  const o = Math.min(dd(t, e) / 2, dd(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Mu({ sourceX: t, sourceY: e, sourcePosition: n = Pe.Bottom, targetX: r, targetY: o, targetPosition: i = Pe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [h, f, v, m, y] = v2({
    source: { x: t, y: e },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [h.reduce((w, b, x) => {
    let E = "";
    return x > 0 && x < h.length - 1 ? E = m2(h[x - 1], b, h[x + 1], s) : E = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, w += E, w;
  }, ""), f, v, m, y];
}
function hd(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function y2(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!hd(e) || !hd(n))
    return null;
  const r = e.internals.handleBounds || fd(e.handles), o = n.internals.handleBounds || fd(n.handles), i = pd(r?.source ?? [], t.sourceHandle), s = pd(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === Lo.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", $i.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || Pe.Bottom, l = s?.position || Pe.Top, u = Ei(e, i, a), d = Ei(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function fd(t) {
  if (!t)
    return null;
  const e = [], n = [];
  for (const r of t)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? e.push(r) : r.type === "target" && n.push(r);
  return {
    source: e,
    target: n
  };
}
function Ei(t, e, n = Pe.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Wr(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case Pe.Top:
      return { x: o + s / 2, y: i };
    case Pe.Right:
      return { x: o + s, y: i + a / 2 };
    case Pe.Bottom:
      return { x: o + s / 2, y: i + a };
    case Pe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function pd(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function Sl(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function w2(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Sl(l, e);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function b2(t, e, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (t.x + t.width * i) * e.zoom + e.x,
    t.y * e.zoom + e.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Pe.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case Pe.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case Pe.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const up = 1e3, x2 = 10, zu = {
  nodeOrigin: [0, 0],
  nodeExtent: kl,
  elevateNodesOnSelect: !0,
  defaults: {}
}, k2 = {
  ...zu,
  checkEquality: !0
};
function Tu(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function C2(t, e, n) {
  const r = Tu(zu, n);
  for (const o of t.values())
    if (o.parentId)
      Au(o, t, e, r);
    else {
      const i = Ri(o, r.nodeOrigin), s = jo(o.extent) ? o.extent : r.nodeExtent, a = fo(i, s, Wr(o));
      o.internals.positionAbsolute = a;
    }
}
function $2(t, e) {
  if (!t.handles)
    return t.measured ? e?.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of t.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: t.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return {
    source: n,
    target: r
  };
}
function S2(t, e, n, r) {
  const o = Tu(k2, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? up : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = Ri(u, o.nodeOrigin), f = jo(u.extent) ? u.extent : o.nodeExtent, v = fo(h, f, Wr(u));
      d = {
        ...o.defaults,
        ...u,
        measured: {
          width: u.measured?.width,
          height: u.measured?.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: $2(u, d),
          z: cp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Au(d, e, n, r, i);
  }
  return s;
}
function _2(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function Au(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = Tu(zu, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  _2(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * x2), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? up : 0, { x: h, y: f, z: v } = E2(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || f !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: v
    }
  });
}
function cp(t, e) {
  return (dr(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function E2(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Wr(t), l = Ri(t, n), u = jo(t.extent) ? fo(l, t.extent, a) : l;
  let d = fo({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = Jf(d, a, e));
  const h = cp(t, o), f = e.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= h ? f + 1 : h
  };
}
function O2(t, e, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of t) {
    const a = e.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ro(a), u = ep(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Wr(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (f > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((x) => {
      t.some((E) => E.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + f,
          y: x.position.y + v
        }
      });
    })), (d.width < s.width || d.height < s.height || f || v) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (f ? h[0] * f - w : 0),
        height: y + (v ? h[1] * v - b : 0)
      }
    });
  }), o;
}
function P2(t, e, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), h = [];
  for (const f of t.values()) {
    const v = e.get(f.id);
    if (!v)
      continue;
    if (v.hidden) {
      e.set(v.id, {
        ...v,
        internals: {
          ...v.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const m = np(f.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || f.force)) {
      const w = f.nodeElement.getBoundingClientRect(), b = jo(v.extent) ? v.extent : i;
      let { positionAbsolute: x } = v.internals;
      v.parentId && v.extent === "parent" ? x = Jf(x, m, e.get(v.parentId)) : b && (x = fo(x, b, m));
      const E = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: x,
          handleBounds: {
            source: ld("source", f.nodeElement, w, d, v.id),
            target: ld("target", f.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, E), v.parentId && Au(E, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: Ro(E, o)
      }));
    }
  }
  if (h.length > 0) {
    const f = O2(h, e, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function N2({ delta: t, panZoom: e, transform: n, translateExtent: r, width: o, height: i }) {
  if (!e || !t.x && !t.y)
    return Promise.resolve(!1);
  const s = await e.setViewportConstrained({
    x: n[0] + t.x,
    y: n[1] + t.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function gd(t, e, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, e)), s = `${o}-${t}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, e)), i) {
    s = `${o}-${t}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, e));
  }
}
function M2(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    gd("source", l, d, t, o, s), gd("target", l, u, t, i, a), e.set(r.id, r);
  }
}
function z2(t, e) {
  if (t === null || e === null)
    return !1;
  const n = Array.isArray(t) ? t : [t], r = Array.isArray(e) ? e : [e];
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (n[o].id !== r[o].id || n[o].type !== r[o].type || !Object.is(n[o].data, r[o].data))
      return !1;
  return !0;
}
function dp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : dp(n, e) : !1;
}
function vd(t, e, n) {
  let r = t;
  do {
    if (r?.matches?.(e))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function T2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !dp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
      const a = t.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function Ga({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of e) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!t)
    return [o[0], o];
  const i = n.get(t)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: e.get(t)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function A2({ dragItems: t, snapGrid: e, x: n, y: r }) {
  const o = t.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Bi(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function D2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: x, handleSelector: E, domNode: C, isSelectable: k, nodeId: P, nodeClickDistance: V = 0 }) {
    f = xn(C);
    function I({ x: S, y: z }) {
      const { nodeLookup: $, nodeExtent: O, snapGrid: M, snapToGrid: B, nodeOrigin: q, onNodeDrag: U, onSelectionDrag: T, onError: G, updateNodePositions: ee } = e();
      i = { x: S, y: z };
      let j = !1;
      const Z = a.size > 1, X = Z && O ? $l(ji(a)) : null, J = Z && B ? A2({
        dragItems: a,
        snapGrid: M,
        x: S,
        y: z
      }) : null;
      for (const [oe, L] of a) {
        if (!$.has(oe))
          continue;
        let ne = { x: S - L.distance.x, y: z - L.distance.y };
        B && (ne = J ? {
          x: Math.round(ne.x + J.x),
          y: Math.round(ne.y + J.y)
        } : Bi(ne, M));
        let me = null;
        if (Z && O && !L.extent && X) {
          const { positionAbsolute: le } = L.internals, ve = le.x - X.x + O[0][0], be = le.x + L.measured.width - X.x2 + O[1][0], ke = le.y - X.y + O[0][1], de = le.y + L.measured.height - X.y2 + O[1][1];
          me = [
            [ve, ke],
            [be, de]
          ];
        }
        const { position: fe, positionAbsolute: ie } = Uf({
          nodeId: oe,
          nextPosition: ne,
          nodeLookup: $,
          nodeExtent: me || O,
          nodeOrigin: q,
          onError: G
        });
        j = j || L.position.x !== fe.x || L.position.y !== fe.y, L.position = fe, L.internals.positionAbsolute = ie;
      }
      if (m = m || j, !!j && (ee(a, !0), y && (r || U || !P && T))) {
        const [oe, L] = Ga({
          nodeId: P,
          dragItems: a,
          nodeLookup: $
        });
        r?.(y, a, oe, L), U?.(y, oe, L), P || T?.(y, L);
      }
    }
    async function H() {
      if (!d)
        return;
      const { transform: S, panBy: z, autoPanSpeed: $, autoPanOnNodeDrag: O } = e();
      if (!O) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [M, B] = Qf(u, d, $);
      (M !== 0 || B !== 0) && (i.x = (i.x ?? 0) - M / S[2], i.y = (i.y ?? 0) - B / S[2], await z({ x: M, y: B }) && I(i)), s = requestAnimationFrame(H);
    }
    function D(S) {
      const { nodeLookup: z, multiSelectionActive: $, nodesDraggable: O, transform: M, snapGrid: B, snapToGrid: q, selectNodesOnDrag: U, onNodeDragStart: T, onSelectionDragStart: G, unselectNodesAndEdges: ee } = e();
      h = !0, (!U || !k) && !$ && P && (z.get(P)?.selected || ee()), k && U && P && t?.(P);
      const j = Ya(S.sourceEvent, { transform: M, snapGrid: B, snapToGrid: q, containerBounds: d });
      if (i = j, a = T2(z, O, j, P), a.size > 0 && (n || T || !P && G)) {
        const [Z, X] = Ga({
          nodeId: P,
          dragItems: a,
          nodeLookup: z
        });
        n?.(S.sourceEvent, a, Z, X), T?.(S.sourceEvent, Z, X), P || G?.(S.sourceEvent, X);
      }
    }
    const N = tw().clickDistance(V).on("start", (S) => {
      const { domNode: z, nodeDragThreshold: $, transform: O, snapGrid: M, snapToGrid: B } = e();
      d = z?.getBoundingClientRect() || null, v = !1, m = !1, y = S.sourceEvent, $ === 0 && D(S), i = Ya(S.sourceEvent, { transform: O, snapGrid: M, snapToGrid: B, containerBounds: d }), u = Pn(S.sourceEvent, d);
    }).on("drag", (S) => {
      const { autoPanOnNodeDrag: z, transform: $, snapGrid: O, snapToGrid: M, nodeDragThreshold: B, nodeLookup: q } = e(), U = Ya(S.sourceEvent, { transform: $, snapGrid: O, snapToGrid: M, containerBounds: d });
      if (y = S.sourceEvent, (S.sourceEvent.type === "touchmove" && S.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      P && !q.has(P)) && (v = !0), !v) {
        if (!l && z && h && (l = !0, H()), !h) {
          const T = Pn(S.sourceEvent, d), G = T.x - u.x, ee = T.y - u.y;
          Math.sqrt(G * G + ee * ee) > B && D(S);
        }
        (i.x !== U.xSnapped || i.y !== U.ySnapped) && a && h && (u = Pn(S.sourceEvent, d), I(U));
      }
    }).on("end", (S) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: z, updateNodePositions: $, onNodeDragStop: O, onSelectionDragStop: M } = e();
        if (m && ($(a, !1), m = !1), o || O || !P && M) {
          const [B, q] = Ga({
            nodeId: P,
            dragItems: a,
            nodeLookup: z,
            dragging: !1
          });
          o?.(S.sourceEvent, a, B, q), O?.(S.sourceEvent, B, q), P || M?.(S.sourceEvent, q);
        }
      }
    }).filter((S) => {
      const z = S.target;
      return !S.button && (!x || !vd(z, `.${x}`, C)) && (!E || vd(z, E, C));
    });
    f.call(N);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: b
  };
}
function V2(t, e, n) {
  const r = [], o = {
    x: t.x - n,
    y: t.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of e.values())
    _i(o, Ro(i)) > 0 && r.push(i);
  return r;
}
const I2 = 250;
function L2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = V2(t, n, e + I2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = Ei(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
      f > e || (f < i ? (o = [{ ...u, x: d, y: h }], i = f) : f === i && o.push({ ...u, x: d, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((l) => l.type === a) ?? o[0];
  }
  return o[0];
}
function hp(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Ei(s, l, l.position, !0) } : l;
}
function fp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function H2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const pp = () => !0;
function R2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = pp, onReconnectEnd: x, updateConnection: E, getTransform: C, getFromHandle: k, autoPanSpeed: P, dragThreshold: V = 1, handleDomNode: I }) {
  const H = rp(t.target);
  let D = 0, N;
  const { x: S, y: z } = Pn(t), $ = fp(i, I), O = a?.getBoundingClientRect();
  let M = !1;
  if (!O || !$)
    return;
  const B = hp(o, $, r, l, e);
  if (!B)
    return;
  let q = Pn(t, O), U = !1, T = null, G = !1, ee = null;
  function j() {
    if (!d || !O)
      return;
    const [me, fe] = Qf(q, O, P);
    f({ x: me, y: fe }), D = requestAnimationFrame(j);
  }
  const Z = {
    ...B,
    nodeId: o,
    type: $,
    position: B.position
  }, X = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: Ei(X, Z, Pe.Left, !0),
    fromHandle: Z,
    fromPosition: Z.position,
    fromNode: X,
    to: q,
    toHandle: null,
    toPosition: od[Z.position],
    toNode: null,
    pointer: q
  };
  function oe() {
    M = !0, E(J), m?.(t, { nodeId: o, handleId: r, handleType: $ });
  }
  V === 0 && oe();
  function L(me) {
    if (!M) {
      const { x: ve, y: be } = Pn(me), ke = ve - S, de = be - z;
      if (!(ke * ke + de * de > V * V))
        return;
      oe();
    }
    if (!k() || !Z) {
      ne(me);
      return;
    }
    const fe = C();
    q = Pn(me, O), N = L2(Ki(q, fe, !1, [1, 1]), n, l, Z), U || (j(), U = !0);
    const ie = gp(me, {
      handle: N,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: H,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    ee = ie.handleDomNode, T = ie.connection, G = H2(!!N, ie.isValid);
    const le = {
      // from stays the same
      ...J,
      isValid: G,
      to: ie.toHandle && G ? Ws({ x: ie.toHandle.x, y: ie.toHandle.y }, fe) : q,
      toHandle: ie.toHandle,
      toPosition: G && ie.toHandle ? ie.toHandle.position : od[Z.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: q
    };
    E(le), J = le;
  }
  function ne(me) {
    if (!("touches" in me && me.touches.length > 0)) {
      if (M) {
        (N || ee) && T && G && y?.(T);
        const { inProgress: fe, ...ie } = J, le = {
          ...ie,
          toPosition: J.toHandle ? J.toPosition : null
        };
        w?.(me, le), i && x?.(me, le);
      }
      v(), cancelAnimationFrame(D), U = !1, G = !1, T = null, ee = null, H.removeEventListener("mousemove", L), H.removeEventListener("mouseup", ne), H.removeEventListener("touchmove", L), H.removeEventListener("touchend", ne);
    }
  }
  H.addEventListener("mousemove", L), H.addEventListener("mouseup", ne), H.addEventListener("touchmove", L), H.addEventListener("touchend", ne);
}
function gp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = pp, nodeLookup: d }) {
  const h = i === "target", f = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = Pn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const x = fp(void 0, w), E = w.getAttribute("data-nodeid"), C = w.getAttribute("data-handleid"), k = w.classList.contains("connectable"), P = w.classList.contains("connectableend");
    if (!E || !x)
      return b;
    const V = {
      source: h ? E : r,
      sourceHandle: h ? C : o,
      target: h ? r : E,
      targetHandle: h ? o : C
    };
    b.connection = V;
    const I = k && P && (n === Lo.Strict ? h && x === "source" || !h && x === "target" : E !== r || C !== o);
    b.isValid = I && u(V), b.toHandle = hp(E, x, C, d, n, !0);
  }
  return b;
}
const md = {
  onPointerDown: R2,
  isValid: gp
};
function j2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = xn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (E) => {
      if (E.sourceEvent.type !== "wheel" || !e)
        return;
      const C = n(), k = E.sourceEvent.ctrlKey && to() ? 10 : 1, P = -E.sourceEvent.deltaY * (E.sourceEvent.deltaMode === 1 ? 0.05 : E.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, P * k);
      e.scaleTo(V);
    };
    let y = [0, 0];
    const w = (E) => {
      (E.sourceEvent.type === "mousedown" || E.sourceEvent.type === "touchstart") && (y = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ]);
    }, b = (E) => {
      const C = n();
      if (E.sourceEvent.type !== "mousemove" && E.sourceEvent.type !== "touchmove" || !e)
        return;
      const k = [
        E.sourceEvent.clientX ?? E.sourceEvent.touches[0].clientX,
        E.sourceEvent.clientY ?? E.sourceEvent.touches[0].clientY
      ], P = [k[0] - y[0], k[1] - y[1]];
      y = k;
      const V = r() * Math.max(C[2], Math.log(C[2])) * (v ? -1 : 1), I = {
        x: C[0] - P[0] * V,
        y: C[1] - P[1] * V
      }, H = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: C[2]
      }, H, a);
    }, x = qf().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", f ? m : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: _n
  };
}
const za = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), Ua = ({ x: t, y: e, zoom: n }) => Pa.translate(t, e).scale(n), Oo = (t, e) => t.target.closest(`.${e}`), vp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), B2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, Ja = (t, e = 0, n = B2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, mp = (t) => {
  const e = t.ctrlKey && to() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function K2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Oo(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = _n(d), b = mp(d), x = h * Math.pow(2, b);
      r.scaleTo(n, x, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let v = o === io.Vertical ? 0 : d.deltaX * f, m = o === io.Horizontal ? 0 : d.deltaY * f;
    !to() && d.shiftKey && o !== io.Vertical && (v = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = za(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function F2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = Oo(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Z2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = za(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function W2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && vp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, za(i.transform));
  };
}
function X2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && vp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = za(s.transform);
      t.prevViewport = a, clearTimeout(t.timerId), t.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function q2({ zoomActivationKeyPressed: t, zoomOnScroll: e, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (h) => {
    const f = t || e, v = n && h.ctrlKey, m = h.type === "wheel";
    if (h.button === 1 && h.type === "mousedown" && (Oo(h, `${u}-flow__node`) || Oo(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || Oo(h, a) && m || Oo(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
      return !1;
    if (!n && h.type === "touchstart" && h.touches?.length > 1)
      return h.preventDefault(), !1;
    if (!f && !o && !v && m || !r && (h.type === "mousedown" || h.type === "touchstart") || Array.isArray(r) && !r.includes(h.button) && h.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(h.button) || !h.button || h.button <= 1;
    return (!h.ctrlKey || m) && y;
  };
}
function Y2({ domNode: t, minZoom: e, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = t.getBoundingClientRect(), h = qf().scaleExtent([e, n]).translateExtent(r), f = xn(t).call(h);
  x({
    x: o.x,
    y: o.y,
    zoom: Ho(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(mp);
  function y(N, S) {
    return f ? new Promise((z) => {
      h?.interpolate(S?.interpolate === "linear" ? pi : xs).transform(Ja(f, S?.duration, S?.ease, () => z(!0)), N);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: N, noPanClassName: S, onPaneContextMenu: z, userSelectionActive: $, panOnScroll: O, panOnDrag: M, panOnScrollMode: B, panOnScrollSpeed: q, preventScrolling: U, zoomOnPinch: T, zoomOnScroll: G, zoomOnDoubleClick: ee, zoomActivationKeyPressed: j, lib: Z, onTransformChange: X, connectionInProgress: J, paneClickDistance: oe, selectionOnDrag: L }) {
    $ && !u.isZoomingOrPanning && b();
    const ne = O && !j && !$;
    h.clickDistance(L ? 1 / 0 : !dr(oe) || oe < 0 ? 0 : oe);
    const me = ne ? K2({
      zoomPanValues: u,
      noWheelClassName: N,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: B,
      panOnScrollSpeed: q,
      zoomOnPinch: T,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : F2({
      noWheelClassName: N,
      preventScrolling: U,
      d3ZoomHandler: v
    });
    if (f.on("wheel.zoom", me, { passive: !1 }), !$) {
      const ie = Z2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", ie);
      const le = W2({
        zoomPanValues: u,
        panOnDrag: M,
        onPaneContextMenu: !!z,
        onPanZoom: i,
        onTransformChange: X
      });
      h.on("zoom", le);
      const ve = X2({
        zoomPanValues: u,
        panOnDrag: M,
        panOnScroll: O,
        onPaneContextMenu: z,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ve);
    }
    const fe = q2({
      zoomActivationKeyPressed: j,
      panOnDrag: M,
      zoomOnScroll: G,
      panOnScroll: O,
      zoomOnDoubleClick: ee,
      zoomOnPinch: T,
      userSelectionActive: $,
      noPanClassName: S,
      noWheelClassName: N,
      lib: Z,
      connectionInProgress: J
    });
    h.filter(fe), ee ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function x(N, S, z) {
    const $ = Ua(N), O = h?.constrain()($, S, z);
    return O && await y(O), new Promise((M) => M(O));
  }
  async function E(N, S) {
    const z = Ua(N);
    return await y(z, S), new Promise(($) => $(z));
  }
  function C(N) {
    if (f) {
      const S = Ua(N), z = f.property("__zoom");
      (z.k !== N.zoom || z.x !== N.x || z.y !== N.y) && h?.transform(f, S, null, { sync: !0 });
    }
  }
  function k() {
    const N = f ? Xf(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: N.x, y: N.y, zoom: N.k };
  }
  function P(N, S) {
    return f ? new Promise((z) => {
      h?.interpolate(S?.interpolate === "linear" ? pi : xs).scaleTo(Ja(f, S?.duration, S?.ease, () => z(!0)), N);
    }) : Promise.resolve(!1);
  }
  function V(N, S) {
    return f ? new Promise((z) => {
      h?.interpolate(S?.interpolate === "linear" ? pi : xs).scaleBy(Ja(f, S?.duration, S?.ease, () => z(!0)), N);
    }) : Promise.resolve(!1);
  }
  function I(N) {
    h?.scaleExtent(N);
  }
  function H(N) {
    h?.translateExtent(N);
  }
  function D(N) {
    const S = !dr(N) || N < 0 ? 0 : N;
    h?.clickDistance(S);
  }
  return {
    update: w,
    destroy: b,
    setViewport: E,
    setViewportConstrained: x,
    getViewport: k,
    scaleTo: P,
    scaleBy: V,
    setScaleExtent: I,
    setTranslateExtent: H,
    syncViewport: C,
    setClickDistance: D
  };
}
var yd;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(yd || (yd = {}));
var G2 = /* @__PURE__ */ re("<div><!></div>");
function Hr(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => Pe.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), f = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "type",
    "position",
    "style",
    "class",
    "isConnectable",
    "isConnectableStart",
    "isConnectableEnd",
    "isValidConnection",
    "onconnect",
    "ondisconnect",
    "children"
  ]);
  const y = Tn("svelteflow__node_id"), w = Tn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ _(() => r() === "target"), x = /* @__PURE__ */ _(() => a() !== void 0 ? a() : w.value), E = Ln(), C = /* @__PURE__ */ _(() => E.ariaLabelConfig), k = null;
  nn(() => {
    if (h() || f()) {
      E.edges;
      let T = E.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Yb(T, k)) {
        const G = T ?? /* @__PURE__ */ new Map();
        id(k, G, f()), id(G, k, h());
      }
      k = new Map(T);
    }
  });
  let P = /* @__PURE__ */ _(() => {
    if (!E.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: T, toHandle: G, isValid: ee } = E.connection, j = T && T.nodeId === y && T.type === r() && T.id === n(), Z = G && G.nodeId === y && G.type === r() && G.id === n(), X = E.connectionMode === Lo.Strict ? T?.type !== r() : y !== T?.nodeId || n() !== T?.id;
    return [
      !0,
      j,
      Z,
      X,
      Z && ee
    ];
  }), V = /* @__PURE__ */ _(() => Fo(c(P), 5)), I = /* @__PURE__ */ _(() => c(V)[0]), H = /* @__PURE__ */ _(() => c(V)[1]), D = /* @__PURE__ */ _(() => c(V)[2]), N = /* @__PURE__ */ _(() => c(V)[3]), S = /* @__PURE__ */ _(() => c(V)[4]);
  function z(T) {
    const G = E.onbeforeconnect ? E.onbeforeconnect(T) : T;
    G && (E.addEdge(G), E.onconnect?.(T));
  }
  function $(T) {
    const G = ip(T);
    T.currentTarget && (G && T.button === 0 || !G) && md.onPointerDown(T, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
      connectionRadius: E.connectionRadius,
      domNode: E.domNode,
      nodeLookup: E.nodeLookup,
      connectionMode: E.connectionMode,
      lib: "svelte",
      autoPanOnConnect: E.autoPanOnConnect,
      autoPanSpeed: E.autoPanSpeed,
      flowId: E.flowId,
      isValidConnection: d() ?? E.isValidConnection,
      updateConnection: E.updateConnection,
      cancelConnection: E.cancelConnection,
      panBy: E.panBy,
      onConnect: z,
      onConnectStart: (ee, j) => {
        E.onconnectstart?.(ee, {
          nodeId: j.nodeId,
          handleId: j.handleId,
          handleType: j.handleType
        });
      },
      onConnectEnd: (ee, j) => {
        E.onconnectend?.(ee, j);
      },
      getTransform: () => [E.viewport.x, E.viewport.y, E.viewport.zoom],
      getFromHandle: () => E.connection.fromHandle,
      dragThreshold: E.connectionDragThreshold,
      handleDomNode: T.currentTarget
    });
  }
  function O(T) {
    if (!y || !E.clickConnectStartHandle && !l())
      return;
    if (!E.clickConnectStartHandle) {
      E.onclickconnectstart?.(T, { nodeId: y, handleId: n(), handleType: r() }), E.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const G = rp(T.target), ee = d() ?? E.isValidConnection, { connectionMode: j, clickConnectStartHandle: Z, flowId: X, nodeLookup: J } = E, { connection: oe, isValid: L } = md.isValid(T, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: j,
      fromNodeId: Z.nodeId,
      fromHandleId: Z.id ?? null,
      fromType: Z.type,
      isValidConnection: ee,
      flowId: X,
      doc: G,
      lib: "svelte",
      nodeLookup: J
    });
    L && oe && z(oe);
    const ne = structuredClone(uu(E.connection));
    delete ne.inProgress, ne.toPosition = ne.toHandle ? ne.toHandle.position : null, E.onclickconnectend?.(T, ne), E.clickConnectStartHandle = null;
  }
  var M = {
    get id() {
      return n();
    },
    set id(T = null) {
      n(T), p();
    },
    get type() {
      return r();
    },
    set type(T = "source") {
      r(T), p();
    },
    get position() {
      return o();
    },
    set position(T = Pe.Top) {
      o(T), p();
    },
    get style() {
      return i();
    },
    set style(T) {
      i(T), p();
    },
    get class() {
      return s();
    },
    set class(T) {
      s(T), p();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(T) {
      a(T), p();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(T = !0) {
      l(T), p();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(T = !0) {
      u(T), p();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(T) {
      d(T), p();
    },
    get onconnect() {
      return h();
    },
    set onconnect(T) {
      h(T), p();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(T) {
      f(T), p();
    },
    get children() {
      return v();
    },
    set children(T) {
      v(T), p();
    }
  }, B = G2(), q = () => {
  };
  ot(B, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${E.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      E.noDragClass,
      E.noPanClass,
      o(),
      s()
    ],
    onmousedown: $,
    ontouchstart: $,
    onclick: E.clickConnect ? O : void 0,
    onkeypress: q,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [zr]: {
      valid: c(S),
      connectingto: c(D),
      connectingfrom: c(H),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(I) || c(N)) && (c(I) || E.clickConnectStartHandle ? u() : l())
    }
  }));
  var U = Y(B);
  return ze(U, () => v() ?? qe), W(B), A(t, B), ce(M);
}
se(
  Hr,
  {
    id: {},
    type: {},
    position: {},
    style: {},
    class: {},
    isConnectable: {},
    isConnectableStart: {},
    isConnectableEnd: {},
    isValidConnection: {},
    onconnect: {},
    ondisconnect: {},
    children: {}
  },
  [],
  [],
  !0
);
var U2 = /* @__PURE__ */ re("<!> <!>", 1);
function Du(t, e) {
  ue(e, !0);
  let n = g(e, "data", 7), r = g(e, "targetPosition", 23, () => Pe.Top), o = g(e, "sourcePosition", 23, () => Pe.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = Pe.Top) {
      r(d), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Pe.Bottom) {
      o(d), p();
    }
  }, s = U2(), a = Q(s);
  Hr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = R(a), u = R(l);
  return Hr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Te(() => ht(l, ` ${n()?.label ?? ""} `)), A(t, s), ce(i);
}
se(Du, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var J2 = /* @__PURE__ */ re(" <!>", 1);
function yp(t, e) {
  ue(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "sourcePosition", 23, () => Pe.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), p();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = Pe.Bottom) {
      r(l), p();
    }
  };
  Oe();
  var i = J2(), s = Q(i), a = R(s);
  return Hr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Te(() => ht(s, `${n()?.label ?? ""} `)), A(t, i), ce(o);
}
se(yp, { data: {}, sourcePosition: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ re(" <!>", 1);
function wp(t, e) {
  ue(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "targetPosition", 23, () => Pe.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), p();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = Pe.Top) {
      r(l), p();
    }
  };
  Oe();
  var i = Q2(), s = Q(i), a = R(s);
  return Hr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Te(() => ht(s, `${n()?.label ?? ""} `)), A(t, i), ce(o);
}
se(wp, { data: {}, targetPosition: {} }, [], [], !0);
function bp(t, e) {
}
se(bp, {}, [], [], !0);
function Qa(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function xp(t, e) {
  const n = /* @__PURE__ */ _(Ln), r = /* @__PURE__ */ _(() => c(n).domNode);
  let o;
  return c(r) ? Qa(t, c(r), e) : o = mo(() => {
    Ze(() => {
      Qa(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      Qa(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function kp() {
  let t = /* @__PURE__ */ we(typeof window > "u");
  if (c(t)) {
    const e = mo(() => {
      Ze(() => {
        F(t, !1), e?.();
      });
    });
  }
  return {
    get value() {
      return c(t);
    }
  };
}
const wd = (t) => Ub(t), ex = (t) => Gf(t);
function Jn(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Xs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var tx = /* @__PURE__ */ re("<div><!></div>");
const nx = {
  hash: "svelte-herprs",
  code: ".transparent.svelte-herprs {background:transparent;}"
};
function Cp(t, e) {
  ue(e, !0), it(t, nx);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7), i = g(e, "height", 7), s = g(e, "selectEdgeOnClick", 7, !1), a = g(e, "transparent", 7, !1), l = g(e, "class", 7), u = g(e, "children", 7), d = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "x",
    "y",
    "width",
    "height",
    "selectEdgeOnClick",
    "transparent",
    "class",
    "children"
  ]);
  const h = Ln(), f = Tn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ _(() => h.visible.edges.get(f)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(x = 0) {
      n(x), p();
    },
    get y() {
      return r();
    },
    set y(x = 0) {
      r(x), p();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), p();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), p();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(x = !1) {
      s(x), p();
    },
    get transparent() {
      return a();
    },
    set transparent(x = !1) {
      a(x), p();
    },
    get class() {
      return l();
    },
    set class(x) {
      l(x), p();
    },
    get children() {
      return u();
    },
    set children(x) {
      u(x), p();
    }
  }, y = tx(), w = () => {
    s() && h.handleEdgeSelection(f);
  };
  ot(
    y,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [Fn]: x
    }),
    [
      () => ({
        display: kp().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Jn(o()),
        height: Jn(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = Y(y);
  return ze(b, () => u() ?? qe), W(y), Ft(y, (x, E) => xp?.(x, E), () => "edge-labels"), A(t, y), ce(m);
}
se(
  Cp,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    selectEdgeOnClick: {},
    transparent: {},
    class: {},
    children: {}
  },
  [],
  [],
  !0
);
var rx = /* @__PURE__ */ _e("<path></path>"), ox = /* @__PURE__ */ _e('<path fill="none"></path><!><!>', 1);
function Fi(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7), r = g(e, "path", 7), o = g(e, "label", 7), i = g(e, "labelX", 7), s = g(e, "labelY", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "style", 7), h = g(e, "interactionWidth", 7, 20), f = g(e, "class", 7), v = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "path",
    "label",
    "labelX",
    "labelY",
    "labelStyle",
    "markerStart",
    "markerEnd",
    "style",
    "interactionWidth",
    "class"
  ]);
  var m = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), p();
    },
    get path() {
      return r();
    },
    set path(k) {
      r(k), p();
    },
    get label() {
      return o();
    },
    set label(k) {
      o(k), p();
    },
    get labelX() {
      return i();
    },
    set labelX(k) {
      i(k), p();
    },
    get labelY() {
      return s();
    },
    set labelY(k) {
      s(k), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(k) {
      a(k), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(k) {
      l(k), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(k) {
      u(k), p();
    },
    get style() {
      return d();
    },
    set style(k) {
      d(k), p();
    },
    get interactionWidth() {
      return h();
    },
    set interactionWidth(k = 20) {
      h(k), p();
    },
    get class() {
      return f();
    },
    set class(k) {
      f(k), p();
    }
  }, y = ox(), w = Q(y), b = R(w);
  {
    var x = (k) => {
      var P = rx();
      ot(P, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), A(k, P);
    };
    ae(b, (k) => {
      h() > 0 && k(x);
    });
  }
  var E = R(b);
  {
    var C = (k) => {
      Cp(k, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        selectEdgeOnClick: !0,
        children: (P, V) => {
          Oe();
          var I = Le();
          Te(() => ht(I, o())), A(P, I);
        },
        $$slots: { default: !0 }
      });
    };
    ae(E, (k) => {
      o() && k(C);
    });
  }
  return Te(() => {
    Me(w, "id", n()), Me(w, "d", r()), ln(w, 0, Er(["svelte-flow__edge-path", f()])), Me(w, "marker-start", l()), Me(w, "marker-end", u()), Bt(w, d());
  }), A(t, y), ce(m);
}
se(
  Fi,
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
function Vu(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), f = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ _(() => sp({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ _(() => Fo(c(w), 3)), x = /* @__PURE__ */ _(() => c(b)[0]), E = /* @__PURE__ */ _(() => c(b)[1]), C = /* @__PURE__ */ _(() => c(b)[2]);
  var k = {
    get id() {
      return n();
    },
    set id(P) {
      n(P), p();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(P) {
      r(P), p();
    },
    get label() {
      return o();
    },
    set label(P) {
      o(P), p();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(P) {
      i(P), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(P) {
      s(P), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(P) {
      a(P), p();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(P) {
      l(P), p();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(P) {
      u(P), p();
    },
    get sourceX() {
      return d();
    },
    set sourceX(P) {
      d(P), p();
    },
    get sourceY() {
      return h();
    },
    set sourceY(P) {
      h(P), p();
    },
    get style() {
      return f();
    },
    set style(P) {
      f(P), p();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(P) {
      v(P), p();
    },
    get targetX() {
      return m();
    },
    set targetX(P) {
      m(P), p();
    },
    get targetY() {
      return y();
    },
    set targetY(P) {
      y(P), p();
    }
  };
  return Fi(t, {
    get id() {
      return n();
    },
    get path() {
      return c(x);
    },
    get labelX() {
      return c(E);
    },
    get labelY() {
      return c(C);
    },
    get label() {
      return o();
    },
    get labelStyle() {
      return i();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return s();
    },
    get interactionWidth() {
      return r();
    },
    get style() {
      return f();
    }
  }), ce(k);
}
se(
  Vu,
  {
    id: {},
    interactionWidth: {},
    label: {},
    labelStyle: {},
    markerEnd: {},
    markerStart: {},
    pathOptions: {},
    sourcePosition: {},
    sourceX: {},
    sourceY: {},
    style: {},
    targetPosition: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function $p(t, e) {
  ue(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), f = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ _(() => Mu({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ _(() => Fo(c(m), 3)), w = /* @__PURE__ */ _(() => c(y)[0]), b = /* @__PURE__ */ _(() => c(y)[1]), x = /* @__PURE__ */ _(() => c(y)[2]);
  var E = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(C) {
      n(C), p();
    },
    get label() {
      return r();
    },
    set label(C) {
      r(C), p();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(C) {
      o(C), p();
    },
    get style() {
      return i();
    },
    set style(C) {
      i(C), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(C) {
      s(C), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), p();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(C) {
      l(C), p();
    },
    get sourceX() {
      return u();
    },
    set sourceX(C) {
      u(C), p();
    },
    get sourceY() {
      return d();
    },
    set sourceY(C) {
      d(C), p();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(C) {
      h(C), p();
    },
    get targetX() {
      return f();
    },
    set targetX(C) {
      f(C), p();
    },
    get targetY() {
      return v();
    },
    set targetY(C) {
      v(C), p();
    }
  };
  return Fi(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(x);
    },
    get label() {
      return r();
    },
    get labelStyle() {
      return o();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return s();
    },
    get interactionWidth() {
      return n();
    },
    get style() {
      return i();
    }
  }), ce(E);
}
se(
  $p,
  {
    interactionWidth: {},
    label: {},
    labelStyle: {},
    style: {},
    markerEnd: {},
    markerStart: {},
    sourcePosition: {},
    sourceX: {},
    sourceY: {},
    targetPosition: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Sp(t, e) {
  ue(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), f = /* @__PURE__ */ _(() => lp({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ _(() => Fo(c(f), 3)), m = /* @__PURE__ */ _(() => c(v)[0]), y = /* @__PURE__ */ _(() => c(v)[1]), w = /* @__PURE__ */ _(() => c(v)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), p();
    },
    get targetX() {
      return o();
    },
    set targetX(x) {
      o(x), p();
    },
    get targetY() {
      return i();
    },
    set targetY(x) {
      i(x), p();
    },
    get label() {
      return s();
    },
    set label(x) {
      s(x), p();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(x) {
      u(x), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), p();
    },
    get style() {
      return h();
    },
    set style(x) {
      h(x), p();
    }
  };
  return Fi(t, {
    get path() {
      return c(m);
    },
    get labelX() {
      return c(y);
    },
    get labelY() {
      return c(w);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return l();
    },
    get markerEnd() {
      return u();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return h();
    }
  }), ce(b);
}
se(
  Sp,
  {
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    style: {}
  },
  [],
  [],
  !0
);
function _p(t, e) {
  ue(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), f = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ _(() => Mu({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ _(() => Fo(c(m), 3)), w = /* @__PURE__ */ _(() => c(y)[0]), b = /* @__PURE__ */ _(() => c(y)[1]), x = /* @__PURE__ */ _(() => c(y)[2]);
  var E = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), p();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(C) {
      o(C), p();
    },
    get targetX() {
      return i();
    },
    set targetX(C) {
      i(C), p();
    },
    get targetY() {
      return s();
    },
    set targetY(C) {
      s(C), p();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(C) {
      a(C), p();
    },
    get label() {
      return l();
    },
    set label(C) {
      l(C), p();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(C) {
      u(C), p();
    },
    get markerStart() {
      return d();
    },
    set markerStart(C) {
      d(C), p();
    },
    get markerEnd() {
      return h();
    },
    set markerEnd(C) {
      h(C), p();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(C) {
      f(C), p();
    },
    get style() {
      return v();
    },
    set style(C) {
      v(C), p();
    }
  };
  return Fi(t, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(x);
    },
    get label() {
      return l();
    },
    get labelStyle() {
      return u();
    },
    get markerStart() {
      return d();
    },
    get markerEnd() {
      return h();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return v();
    }
  }), ce(E);
}
se(
  _p,
  {
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    style: {}
  },
  [],
  [],
  !0
);
class ix extends Map {
  /** @type {Map<K, Source<number>>} */
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ we(0);
  #n = /* @__PURE__ */ we(0);
  #r = mr || -1;
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(e) {
    if (super(), e) {
      for (var [n, r] of e)
        super.set(n, r);
      this.#n.v = super.size;
    }
  }
  /**
   * If the source is being created inside the same reaction as the SvelteMap instance,
   * we use `state` so that it will not be a dependency of the reaction. Otherwise we
   * use `source` so it will be.
   *
   * @template T
   * @param {T} value
   * @returns {Source<T>}
   */
  #o(e) {
    return mr === this.#r ? /* @__PURE__ */ we(e) : wr(e);
  }
  /** @param {K} key */
  has(e) {
    var n = this.#e, r = n.get(e);
    if (r === void 0) {
      var o = super.get(e);
      if (o !== void 0)
        r = this.#o(0), n.set(e, r);
      else
        return c(this.#t), !1;
    }
    return c(r), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(e, n) {
    this.#i(), super.forEach(e, n);
  }
  /** @param {K} key */
  get(e) {
    var n = this.#e, r = n.get(e);
    if (r === void 0) {
      var o = super.get(e);
      if (o !== void 0)
        r = this.#o(0), n.set(e, r);
      else {
        c(this.#t);
        return;
      }
    }
    return c(r), super.get(e);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(e, n) {
    var r = this.#e, o = r.get(e), i = super.get(e), s = super.set(e, n), a = this.#t;
    if (o === void 0)
      o = this.#o(0), r.set(e, o), F(this.#n, super.size), Kn(a);
    else if (i !== n) {
      Kn(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && Kn(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), F(this.#n, super.size), F(r, -1), Kn(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      F(this.#n, 0);
      for (var n of e.values())
        F(n, -1);
      Kn(this.#t), e.clear();
    }
  }
  #i() {
    c(this.#t);
    var e = this.#e;
    if (this.#n.v !== e.size) {
      for (var n of super.keys())
        if (!e.has(n)) {
          var r = this.#o(0);
          e.set(n, r);
        }
    }
    for ([, r] of this.#e)
      c(r);
  }
  keys() {
    return c(this.#t), super.keys();
  }
  values() {
    return this.#i(), super.values();
  }
  entries() {
    return this.#i(), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return c(this.#n), super.size;
  }
}
class sx {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, n) {
    this.#e = e, this.#t = vo(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const ax = /\(.+\)/, lx = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Ep extends sx {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, n) {
    let r = ax.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => lx.has(i.trim())) ? e : `(${e})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => St(o, "change", i)
    );
  }
}
function ux(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Pu(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function bd(t) {
  const { edges: e, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = t, u = /* @__PURE__ */ new Map();
  for (const d of e) {
    const h = r.get(d.source), f = r.get(d.target);
    if (!h || !f)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: b, height: x } = t;
      if (d2({
        sourceNode: h,
        targetNode: f,
        width: b,
        height: x,
        transform: w
      }))
        y.set(h.id, h), y.set(f.id, f);
      else
        continue;
    }
    const v = o.get(d.id);
    if (v && d === v.edge && h == v.sourceNode && f == v.targetNode) {
      u.set(d.id, v);
      continue;
    }
    const m = y2({
      id: d.id,
      sourceNode: h,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    m && u.set(d.id, {
      ...n,
      ...d,
      ...m,
      zIndex: c2({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: h,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: h,
      targetNode: f,
      edge: d
    });
  }
  return u;
}
const Op = {
  input: yp,
  output: wp,
  default: Du,
  group: bp
}, Pp = {
  straight: Sp,
  smoothstep: $p,
  default: Vu,
  step: _p
};
function cx(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = ji(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Nu(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function dx(t) {
  class e {
    #e = /* @__PURE__ */ _(() => t.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      F(this.#e, r);
    }
    #t = /* @__PURE__ */ we(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      F(this.#t, r);
    }
    #n = /* @__PURE__ */ we(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      F(this.#n, r);
    }
    #r = /* @__PURE__ */ we(t.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      F(this.#r, r);
    }
    #o = /* @__PURE__ */ we(t.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      F(this.#o, r);
    }
    #i = /* @__PURE__ */ _(() => {
      const r = S2(t.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: t.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return c(this.#i);
    }
    set nodesInitialized(r) {
      F(this.#i, r);
    }
    #a = /* @__PURE__ */ _(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      F(this.#a, r);
    }
    #s = /* @__PURE__ */ _(() => (M2(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
    get _edges() {
      return c(this.#s);
    }
    set _edges(r) {
      F(this.#s, r);
    }
    get nodes() {
      return this.nodesInitialized, t.nodes;
    }
    set nodes(r) {
      t.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      t.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      F(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ _(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      F(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ _(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: u,
        defaultEdgeOptions: d
      } = this;
      let h, f;
      const v = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: t.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: m, width: y, height: w } = this, b = [m.x, m.y, m.zoom];
        h = ux(s, b, y, w), f = bd({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, f = bd(v);
      return { nodes: h, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      F(this.#c, r);
    }
    #d = /* @__PURE__ */ _(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      F(this.#d, r);
    }
    #h = /* @__PURE__ */ _(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      F(this.#h, r);
    }
    #p = /* @__PURE__ */ _(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      F(this.#p, r);
    }
    #f = /* @__PURE__ */ _(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#f);
    }
    set nodesFocusable(r) {
      F(this.#f, r);
    }
    #y = /* @__PURE__ */ _(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      F(this.#y, r);
    }
    #v = /* @__PURE__ */ _(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      F(this.#v, r);
    }
    #w = /* @__PURE__ */ _(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      F(this.#w, r);
    }
    #m = /* @__PURE__ */ _(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      F(this.#m, r);
    }
    #g = /* @__PURE__ */ _(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      F(this.#g, r);
    }
    #b = /* @__PURE__ */ _(() => t.props.nodeExtent ?? kl);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      F(this.#b, r);
    }
    #x = /* @__PURE__ */ _(() => t.props.translateExtent ?? kl);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      F(this.#x, r);
    }
    #k = /* @__PURE__ */ _(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      F(this.#k, r);
    }
    #C = /* @__PURE__ */ _(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      F(this.#C, r);
    }
    #$ = /* @__PURE__ */ _(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      F(this.#$, r);
    }
    #S = /* @__PURE__ */ _(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      F(this.#S, r);
    }
    #_ = /* @__PURE__ */ _(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      F(this.#_, r);
    }
    #E = /* @__PURE__ */ _(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      F(this.#E, r);
    }
    #O = /* @__PURE__ */ _(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#O);
    }
    set connectionDragThreshold(r) {
      F(this.#O, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ _(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      F(this.#P, r);
    }
    #N = /* @__PURE__ */ we(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      F(this.#N, r);
    }
    #M = /* @__PURE__ */ we(null);
    get selectionRect() {
      return c(this.#M);
    }
    set selectionRect(r) {
      F(this.#M, r);
    }
    #z = /* @__PURE__ */ we(!1);
    get selectionKeyPressed() {
      return c(this.#z);
    }
    set selectionKeyPressed(r) {
      F(this.#z, r);
    }
    #T = /* @__PURE__ */ we(!1);
    get multiselectionKeyPressed() {
      return c(this.#T);
    }
    set multiselectionKeyPressed(r) {
      F(this.#T, r);
    }
    #A = /* @__PURE__ */ we(!1);
    get deleteKeyPressed() {
      return c(this.#A);
    }
    set deleteKeyPressed(r) {
      F(this.#A, r);
    }
    #D = /* @__PURE__ */ we(!1);
    get panActivationKeyPressed() {
      return c(this.#D);
    }
    set panActivationKeyPressed(r) {
      F(this.#D, r);
    }
    #V = /* @__PURE__ */ we(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      F(this.#V, r);
    }
    #I = /* @__PURE__ */ we(null);
    get selectionRectMode() {
      return c(this.#I);
    }
    set selectionRectMode(r) {
      F(this.#I, r);
    }
    #L = /* @__PURE__ */ we("");
    get ariaLiveMessage() {
      return c(this.#L);
    }
    set ariaLiveMessage(r) {
      F(this.#L, r);
    }
    #H = /* @__PURE__ */ _(() => t.props.selectionMode ?? Fs.Partial);
    get selectionMode() {
      return c(this.#H);
    }
    set selectionMode(r) {
      F(this.#H, r);
    }
    #R = /* @__PURE__ */ _(() => ({ ...Op, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      F(this.#R, r);
    }
    #j = /* @__PURE__ */ _(() => ({ ...Pp, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      F(this.#j, r);
    }
    #B = /* @__PURE__ */ _(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      F(this.#B, r);
    }
    #K = /* @__PURE__ */ _(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      F(this.#K, r);
    }
    #F = /* @__PURE__ */ _(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#F);
    }
    set noWheelClass(r) {
      F(this.#F, r);
    }
    #Z = /* @__PURE__ */ _(() => a2(t.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Z);
    }
    set ariaLabelConfig(r) {
      F(this.#Z, r);
    }
    #W = /* @__PURE__ */ we(cx(this.nodesInitialized, t.props.fitView, t.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      F(this.#W, r);
    }
    get viewport() {
      return t.viewport ?? this._viewport;
    }
    set viewport(r) {
      t.viewport && (t.viewport = r), this._viewport = r;
    }
    #X = /* @__PURE__ */ we(
      // _connection is viewport independent and originating from XYHandle
      Cl
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      F(this.#X, r);
    }
    #q = /* @__PURE__ */ _(() => this._connection.inProgress ? {
      ...this._connection,
      to: Ki(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      F(this.#q, r);
    }
    #Y = /* @__PURE__ */ _(() => t.props.connectionMode ?? Lo.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      F(this.#Y, r);
    }
    #G = /* @__PURE__ */ _(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#G);
    }
    set connectionRadius(r) {
      F(this.#G, r);
    }
    #U = /* @__PURE__ */ _(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      F(this.#U, r);
    }
    #J = /* @__PURE__ */ _(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      F(this.#J, r);
    }
    #Q = /* @__PURE__ */ _(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      F(this.#Q, r);
    }
    #ee = /* @__PURE__ */ _(() => w2(t.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      F(this.#ee, r);
    }
    #te = /* @__PURE__ */ _(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      F(this.#te, r);
    }
    #ne = /* @__PURE__ */ _(() => t.props.onflowerror ?? r2);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      F(this.#ne, r);
    }
    #re = /* @__PURE__ */ _(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      F(this.#re, r);
    }
    #oe = /* @__PURE__ */ _(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      F(this.#oe, r);
    }
    #ie = /* @__PURE__ */ _(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      F(this.#ie, r);
    }
    #se = /* @__PURE__ */ _(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      F(this.#se, r);
    }
    #ae = /* @__PURE__ */ _(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      F(this.#ae, r);
    }
    #le = /* @__PURE__ */ _(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      F(this.#le, r);
    }
    #ue = /* @__PURE__ */ _(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      F(this.#ue, r);
    }
    #ce = /* @__PURE__ */ _(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      F(this.#ce, r);
    }
    #de = /* @__PURE__ */ _(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      F(this.#de, r);
    }
    #he = /* @__PURE__ */ _(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      F(this.#he, r);
    }
    #fe = /* @__PURE__ */ _(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      F(this.#fe, r);
    }
    #pe = /* @__PURE__ */ _(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      F(this.#pe, r);
    }
    #ge = /* @__PURE__ */ _(() => t.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      F(this.#ge, r);
    }
    #ve = /* @__PURE__ */ we(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      F(this.#ve, r);
    }
    #me = /* @__PURE__ */ _(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      F(this.#me, r);
    }
    #ye = /* @__PURE__ */ _(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      F(this.#ye, r);
    }
    #we = /* @__PURE__ */ _(() => t.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      F(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await t2(
        {
          nodes: this.nodeLookup,
          width: this.width,
          height: this.height,
          panZoom: this.panZoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom
        },
        this.fitViewOptions
      ), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
    };
    _prefersDark = new Ep("(prefers-color-scheme: dark)", t.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ _(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      F(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Cl, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Ln() {
  const t = Tn(qs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const qs = Symbol();
function Np(t) {
  const e = dx(t);
  function n(D) {
    e.nodeTypes = {
      ...Op,
      ...D
    };
  }
  function r(D) {
    e.edgeTypes = {
      ...Pp,
      ...D
    };
  }
  function o(D) {
    e.edges = p2(D, e.edges);
  }
  const i = (D, N = !1) => {
    e.nodes = e.nodes.map((S) => {
      const z = D.get(S.id);
      return z ? { ...S, position: z.position, dragging: N } : S;
    });
  };
  function s(D) {
    const { changes: N, updatedInternals: S } = P2(D, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!S)
      return;
    C2(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const z = /* @__PURE__ */ new Map();
    for (const $ of N) {
      const O = e.nodeLookup.get($.id)?.internals.userNode;
      if (!O)
        continue;
      const M = { ...O };
      switch ($.type) {
        case "dimensions": {
          const B = { ...M.measured, ...$.dimensions };
          $.setAttributes && (M.width = $.dimensions?.width ?? M.width, M.height = $.dimensions?.height ?? M.height), M.measured = B;
          break;
        }
        case "position":
          M.position = $.position ?? M.position;
          break;
      }
      z.set($.id, M);
    }
    e.nodes = e.nodes.map(($) => z.get($.id) ?? $);
  }
  function a(D) {
    const N = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = D, e.fitViewResolver = N, e.nodes = [...e.nodes], N.promise;
  }
  async function l(D, N, S) {
    const z = typeof S?.zoom < "u" ? S.zoom : e.maxZoom, $ = e.panZoom;
    return $ ? (await $.setViewport({
      x: e.width / 2 - D * z,
      y: e.height / 2 - N * z,
      zoom: z
    }, { duration: S?.duration, ease: S?.ease, interpolate: S?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(D, N) {
    const S = e.panZoom;
    return S ? S.scaleBy(D, N) : Promise.resolve(!1);
  }
  function d(D) {
    return u(1.2, D);
  }
  function h(D) {
    return u(1 / 1.2, D);
  }
  function f(D) {
    const N = e.panZoom;
    N && (N.setScaleExtent([D, e.maxZoom]), e.minZoom = D);
  }
  function v(D) {
    const N = e.panZoom;
    N && (N.setScaleExtent([e.minZoom, D]), e.maxZoom = D);
  }
  function m(D) {
    const N = e.panZoom;
    N && (N.setTranslateExtent(D), e.translateExtent = D);
  }
  function y(D, N = null) {
    let S = !1;
    const z = D.map(($) => (!N || N.has($.id)) && $.selected ? (S = !0, { ...$, selected: !1 }) : $);
    return [S, z];
  }
  function w(D) {
    const N = D?.nodes ? new Set(D.nodes.map((B) => B.id)) : null, [S, z] = y(e.nodes, N);
    S && (e.nodes = z);
    const $ = D?.edges ? new Set(D.edges.map((B) => B.id)) : null, [O, M] = y(e.edges, $);
    O && (e.edges = M);
  }
  function b(D) {
    const N = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((S) => {
      const z = D.includes(S.id), $ = N && S.selected || z;
      return !!S.selected !== $ ? { ...S, selected: $ } : S;
    }), N || w({ nodes: [] });
  }
  function x(D) {
    const N = e.multiselectionKeyPressed;
    e.edges = e.edges.map((S) => {
      const z = D.includes(S.id), $ = N && S.selected || z;
      return !!S.selected !== $ ? { ...S, selected: $ } : S;
    }), N || w({ edges: [] });
  }
  function E(D, N, S) {
    const z = e.nodeLookup.get(D);
    if (!z) {
      console.warn("012", $i.error012(D));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, z.selected ? (N || z.selected && e.multiselectionKeyPressed) && (w({ nodes: [z], edges: [] }), requestAnimationFrame(() => S?.blur())) : b([D]);
  }
  function C(D) {
    const N = e.edgeLookup.get(D);
    if (!N) {
      console.warn("012", $i.error012(D));
      return;
    }
    (N.selectable || e.elementsSelectable && typeof N.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, N.selected ? N.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [N] }) : x([D]));
  }
  function k(D, N) {
    const { nodeExtent: S, snapGrid: z, nodeOrigin: $, nodeLookup: O, nodesDraggable: M, onerror: B } = e, q = /* @__PURE__ */ new Map(), U = z?.[0] ?? 5, T = z?.[1] ?? 5, G = D.x * U * N, ee = D.y * T * N;
    for (const j of O.values()) {
      if (!(j.selected && (j.draggable || M && typeof j.draggable > "u")))
        continue;
      let Z = {
        x: j.internals.positionAbsolute.x + G,
        y: j.internals.positionAbsolute.y + ee
      };
      z && (Z = Bi(Z, z));
      const { position: X, positionAbsolute: J } = Uf({
        nodeId: j.id,
        nextPosition: Z,
        nodeLookup: O,
        nodeExtent: S,
        nodeOrigin: $,
        onError: B
      });
      j.position = X, j.internals.positionAbsolute = J, q.set(j.id, j);
    }
    i(q);
  }
  function P(D) {
    return N2({
      delta: D,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const V = (D) => {
    e._connection = { ...D };
  };
  function I() {
    e._connection = Cl;
  }
  function H() {
    e.resetStoreValues(), w();
  }
  return Object.assign(e, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: h,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: v,
    setTranslateExtent: m,
    unselectNodesAndEdges: w,
    addSelectedNodes: b,
    addSelectedEdges: x,
    handleNodeSelection: E,
    handleEdgeSelection: C,
    moveSelectedNodes: k,
    panBy: P,
    updateConnection: V,
    cancelConnection: I,
    reset: H
  });
}
function hx(t, e) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: h } = e, f = Y2({
    domNode: t,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), v = f.getViewport();
  return (o.x !== v.x || o.y !== v.y || o.zoom !== v.zoom) && h([v.x, v.y, v.zoom]), u(f), f.update(e), {
    update(m) {
      f.update(m);
    }
  };
}
var fx = /* @__PURE__ */ re('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Mp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), f = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), x = /* @__PURE__ */ _(() => n().panActivationKeyPressed || l()), E = /* @__PURE__ */ _(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let k = !1;
  Ze(() => {
    !k && n().viewportInitialized && (w()?.(), k = !0);
  });
  var P = {
    get store() {
      return n();
    },
    set store(H) {
      n(H), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(H) {
      r(H), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(H) {
      o(H), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(H) {
      i(H), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(H) {
      s(H), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(H) {
      a(H), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(H) {
      l(H), p();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(H) {
      u(H), p();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(H) {
      d(H), p();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(H) {
      h(H), p();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(H) {
      f(H), p();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(H) {
      v(H), p();
    },
    get onmove() {
      return m();
    },
    set onmove(H) {
      m(H), p();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(H) {
      y(H), p();
    },
    get oninit() {
      return w();
    },
    set oninit(H) {
      w(H), p();
    },
    get children() {
      return b();
    },
    set children(H) {
      b(H), p();
    }
  }, V = fx(), I = Y(V);
  return ze(I, b), W(V), Ft(V, (H, D) => hx?.(H, D), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
    onDraggingChange: (H) => {
      n(n().dragging = H, !0);
    },
    setPanZoomInstance: (H) => {
      n(n().panZoom = H, !0);
    },
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(E),
    panOnDrag: c(x),
    panOnScrollSpeed: d(),
    panOnScrollMode: r(),
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: h(),
    selectionOnDrag: f(),
    onTransformChange: (H) => {
      n(n().viewport = { x: H[0], y: H[1], zoom: H[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), A(t, V), ce(P);
}
se(
  Mp,
  {
    store: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    panOnScrollSpeed: {},
    paneClickDistance: {},
    selectionOnDrag: {},
    onmovestart: {},
    onmove: {},
    onmoveend: {},
    oninit: {},
    children: {}
  },
  [],
  [],
  !0
);
function xd(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function kd(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Cd(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var px = /* @__PURE__ */ re("<div><!></div>");
function zp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, f = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ _(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ _(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ _(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), x = !1;
  function E(O) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const M = O.target === h, B = !M && !!O.target.closest(".nokey"), q = i() && M || n().selectionKeyPressed;
    if (B || !c(w) || !q || O.button !== 0 || !O.isPrimary)
      return;
    O.target?.setPointerCapture?.(O.pointerId), x = !1;
    const { x: U, y: T } = Pn(O, f);
    n(n().selectionRect = { width: 0, height: 0, startX: U, startY: T, x: U, y: T }, !0), M || (O.stopPropagation(), O.preventDefault());
  }
  function C(O) {
    if (!c(w) || !f || !n().selectionRect)
      return;
    const M = Pn(O, f), { startX: B = 0, startY: q = 0 } = n().selectionRect;
    if (!x) {
      const j = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(M.x - B, M.y - q) <= j)
        return;
      n().unselectNodesAndEdges(), l()?.(O);
    }
    x = !0;
    const U = {
      ...n().selectionRect,
      x: M.x < B ? M.x : B,
      y: M.y < q ? M.y : q,
      width: Math.abs(M.x - B),
      height: Math.abs(M.y - q)
    }, T = v, G = m;
    v = new Set(Pu(
      n().nodeLookup,
      U,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Fs.Partial,
      !0
    ).map((j) => j.id));
    const ee = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const j of v) {
      const Z = n().connectionLookup.get(j);
      if (Z)
        for (const { edgeId: X } of Z.values()) {
          const J = n().edgeLookup.get(X);
          J && (J.selectable ?? ee) && m.add(X);
        }
    }
    Cd(T, v) || n(n().nodes = n().nodes.map(kd(v)), !0), Cd(G, m) || n(n().edges = n().edges.map(kd(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = U, !0);
  }
  function k(O) {
    O.button === 0 && (O.target?.releasePointerCapture?.(O.pointerId), !x && O.target === h && I?.(O), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), x && u()?.(O));
  }
  const P = (O) => {
    if (Array.isArray(c(y)) && c(y).includes(2)) {
      O.preventDefault();
      return;
    }
    a()?.({ event: O });
  }, V = (O) => {
    x && (O.stopPropagation(), x = !1);
  };
  function I(O) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: O }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var H = {
    get store() {
      return n();
    },
    set store(O) {
      n(O), p();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(O = !0) {
      r(O), p();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(O = 1) {
      o(O), p();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(O) {
      i(O), p();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(O) {
      s(O), p();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(O) {
      a(O), p();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(O) {
      l(O), p();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(O) {
      u(O), p();
    },
    get children() {
      return d();
    },
    set children(O) {
      d(O), p();
    }
  }, D = px();
  let N;
  var S = /* @__PURE__ */ _(() => c(b) ? void 0 : xd(I, h));
  D.__click = function(...O) {
    c(S)?.apply(this, O);
  }, D.__pointermove = function(...O) {
    (c(b) ? C : void 0)?.apply(this, O);
  }, D.__pointerup = function(...O) {
    (c(b) ? k : void 0)?.apply(this, O);
  };
  var z = /* @__PURE__ */ _(() => xd(P, h));
  D.__contextmenu = function(...O) {
    c(z)?.apply(this, O);
  };
  var $ = Y(D);
  return ze($, d), W(D), Kt(D, (O) => h = O, () => h), Te((O) => N = ln(D, 1, "svelte-flow__pane svelte-flow__container", null, N, O), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), Ds(
    "pointerdown",
    D,
    function(...O) {
      (c(b) ? E : void 0)?.apply(this, O);
    },
    !0
  ), Ds(
    "click",
    D,
    function(...O) {
      (c(b) ? V : void 0)?.apply(this, O);
    },
    !0
  ), A(t, D), ce(H);
}
bo(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  zp,
  {
    store: {},
    panOnDrag: {},
    paneClickDistance: {},
    selectionOnDrag: {},
    onpaneclick: {},
    onpanecontextmenu: {},
    onselectionstart: {},
    onselectionend: {},
    children: {}
  },
  [],
  [],
  !0
);
var gx = /* @__PURE__ */ re('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Tp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), p();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), p();
    }
  }, i = gx();
  let s;
  var a = Y(i);
  return ze(a, r), W(i), Te(() => s = Bt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), A(t, i), ce(o);
}
se(Tp, { store: {}, children: {} }, [], [], !0);
function Ap(t, e) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = e, a = D2({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: u, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: n.nodeOrigin,
        multiSelectionActive: n.multiselectionKeyPressed,
        domNode: n.domNode,
        transform: [d.x, d.y, d.zoom],
        autoPanOnNodeDrag: n.autoPanOnNodeDrag,
        nodesDraggable: n.nodesDraggable,
        selectNodesOnDrag: n.selectNodesOnDrag,
        nodeDragThreshold: n.nodeDragThreshold,
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        onSelectionDrag: n.onselectiondrag,
        onSelectionDragStart: n.onselectiondragstart,
        onSelectionDragStop: n.onselectiondragstop,
        panBy: n.panBy
      };
    }
  });
  function l(u, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: u,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(t, e), {
    update(u) {
      l(t, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
var vx = /* @__PURE__ */ re('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-wlt670"> </div>'), mx = /* @__PURE__ */ re('<div class="a11y-hidden svelte-wlt670"> </div> <div class="a11y-hidden svelte-wlt670"> </div> <!>', 1);
const yx = {
  hash: "svelte-wlt670",
  code: ".a11y-hidden.svelte-wlt670 {display:none;}.a11y-live-msg.svelte-wlt670 {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Dp(t, e) {
  ue(e, !0), it(t, yx);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), p();
    }
  }, o = mx(), i = Q(o), s = Y(i, !0);
  W(i);
  var a = R(i, 2), l = Y(a, !0);
  W(a);
  var u = R(a, 2);
  {
    var d = (h) => {
      var f = vx(), v = Y(f, !0);
      W(f), Te(() => {
        Me(f, "id", `${wx}-${n().flowId}`), ht(v, n().ariaLiveMessage);
      }), A(h, f);
    };
    ae(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return Te(() => {
    Me(i, "id", `${Vp}-${n().flowId}`), ht(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Me(a, "id", `${Ip}-${n().flowId}`), ht(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), A(t, o), ce(r);
}
se(Dp, { store: {} }, [], [], !0);
const Vp = "svelte-flow__node-desc", Ip = "svelte-flow__edge-desc", wx = "svelte-flow__aria-live";
var bx = /* @__PURE__ */ re("<div><!></div>");
function Lp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), f = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ _(() => qt(r().data, () => ({}), !0)), y = /* @__PURE__ */ _(() => qt(r().selected, !1)), w = /* @__PURE__ */ _(() => r().draggable), b = /* @__PURE__ */ _(() => r().selectable), x = /* @__PURE__ */ _(() => qt(r().deletable, !0)), E = /* @__PURE__ */ _(() => r().connectable), C = /* @__PURE__ */ _(() => r().focusable), k = /* @__PURE__ */ _(() => qt(r().hidden, !1)), P = /* @__PURE__ */ _(() => qt(r().dragging, !1)), V = /* @__PURE__ */ _(() => qt(r().style, "")), I = /* @__PURE__ */ _(() => r().class), H = /* @__PURE__ */ _(() => qt(r().type, "default")), D = /* @__PURE__ */ _(() => r().parentId), N = /* @__PURE__ */ _(() => r().sourcePosition), S = /* @__PURE__ */ _(() => r().targetPosition), z = /* @__PURE__ */ _(() => qt(r().measured, () => ({ width: 0, height: 0 }), !0).width), $ = /* @__PURE__ */ _(() => qt(r().measured, () => ({ width: 0, height: 0 }), !0).height), O = /* @__PURE__ */ _(() => r().initialWidth), M = /* @__PURE__ */ _(() => r().initialHeight), B = /* @__PURE__ */ _(() => r().width), q = /* @__PURE__ */ _(() => r().height), U = /* @__PURE__ */ _(() => r().dragHandle), T = /* @__PURE__ */ _(() => qt(r().internals.z, 0)), G = /* @__PURE__ */ _(() => r().internals.positionAbsolute.x), ee = /* @__PURE__ */ _(() => r().internals.positionAbsolute.y), j = /* @__PURE__ */ _(() => r().internals.userNode), { id: Z } = r(), X = /* @__PURE__ */ _(() => c(w) ?? n().nodesDraggable), J = /* @__PURE__ */ _(() => c(b) ?? n().elementsSelectable), oe = /* @__PURE__ */ _(() => c(E) ?? n().nodesConnectable), L = /* @__PURE__ */ _(() => tp(r())), ne = /* @__PURE__ */ _(() => !!r().internals.handleBounds), me = /* @__PURE__ */ _(() => c(L) && c(ne)), fe = /* @__PURE__ */ _(() => c(C) ?? n().nodesFocusable);
  function ie(ye) {
    return n().parentLookup.has(ye);
  }
  let le = /* @__PURE__ */ _(() => ie(Z)), ve = /* @__PURE__ */ we(null), be = null, ke = c(H), de = c(N), Ce = c(S), De = /* @__PURE__ */ _(() => n().nodeTypes[c(H)] ?? Du), te = /* @__PURE__ */ _(() => n().ariaLabelConfig);
  ao("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), ao("svelteflow__node_id", Z);
  let Ve = /* @__PURE__ */ _(() => {
    const ye = c(z) === void 0 ? c(B) ?? c(O) : c(B), Ae = c($) === void 0 ? c(q) ?? c(M) : c(q);
    if (!(ye === void 0 && Ae === void 0 && c(V) === void 0))
      return `${c(V)};${ye ? `width:${Jn(ye)};` : ""}${Ae ? `height:${Jn(Ae)};` : ""}`;
  });
  Ze(() => {
    (c(H) !== ke || c(N) !== de || c(S) !== Ce) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[Z, { id: Z, nodeElement: c(ve), force: !0 }]]));
    }), ke = c(H), de = c(N), Ce = c(S);
  }), Ze(() => {
    o() && (!c(me) || c(ve) !== be) && (be && o().unobserve(be), c(ve) && o().observe(c(ve)), be = c(ve));
  }), Ii(() => {
    be && o()?.unobserve(be);
  });
  function Ne(ye) {
    c(J) && (!n().selectNodesOnDrag || !c(X) || n().nodeDragThreshold > 0) && n().handleNodeSelection(Z), s()?.({ node: c(j), event: ye });
  }
  function We(ye) {
    if (!(op(ye) || n().disableKeyboardA11y))
      if (Yf.includes(ye.key) && c(J)) {
        const Ae = ye.key === "Escape";
        n().handleNodeSelection(Z, Ae, c(ve));
      } else c(X) && r().selected && Object.prototype.hasOwnProperty.call(Xs, ye.key) && (ye.preventDefault(), n(
        n().ariaLiveMessage = c(te)["node.a11yDescription.ariaLiveMessage"]({
          direction: ye.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Xs[ye.key], ye.shiftKey ? 4 : 1));
  }
  const Re = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: ye, height: Ae, viewport: ft } = n();
    Pu(/* @__PURE__ */ new Map([[Z, r()]]), { x: 0, y: 0, width: ye, height: Ae }, [ft.x, ft.y, ft.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ft.zoom });
  };
  var Ke = {
    get store() {
      return n();
    },
    set store(ye) {
      n(ye), p();
    },
    get node() {
      return r();
    },
    set node(ye) {
      r(ye), p();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ye) {
      o(ye), p();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ye) {
      i(ye), p();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ye) {
      s(ye), p();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ye) {
      a(ye), p();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ye) {
      l(ye), p();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ye) {
      u(ye), p();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ye) {
      d(ye), p();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(ye) {
      h(ye), p();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ye) {
      f(ye), p();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(ye) {
      v(ye), p();
    }
  }, wt = he(), bt = Q(wt);
  {
    var lt = (ye) => {
      var Ae = bx();
      ot(Ae, () => ({
        "data-id": Z,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(H)}`,
          c(I)
        ],
        style: c(Ve),
        onclick: Ne,
        onpointerenter: d() ? (Be) => d()({ node: c(j), event: Be }) : void 0,
        onpointerleave: h() ? (Be) => h()({ node: c(j), event: Be }) : void 0,
        onpointermove: f() ? (Be) => f()({ node: c(j), event: Be }) : void 0,
        oncontextmenu: v() ? (Be) => v()({ node: c(j), event: Be }) : void 0,
        onkeydown: c(fe) ? We : void 0,
        onfocus: c(fe) ? Re : void 0,
        tabIndex: c(fe) ? 0 : void 0,
        role: r().ariaRole ?? (c(fe) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Vp}-${n().flowId}`,
        ...r().domAttributes,
        [zr]: {
          dragging: c(P),
          selected: c(y),
          draggable: c(X),
          connectable: c(oe),
          selectable: c(J),
          nopan: c(X),
          parent: c(le)
        },
        [Fn]: {
          "z-index": c(T),
          transform: `translate(${c(G) ?? ""}px, ${c(ee) ?? ""}px)`,
          visibility: c(L) ? "visible" : "hidden"
        }
      }));
      var ft = Y(Ae);
      It(ft, () => c(De), (Be, st) => {
        st(Be, {
          get data() {
            return c(m);
          },
          get id() {
            return Z;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(J);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(N);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(T);
          },
          get dragging() {
            return c(P);
          },
          get draggable() {
            return c(X);
          },
          get dragHandle() {
            return c(U);
          },
          get parentId() {
            return c(D);
          },
          get type() {
            return c(H);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(G);
          },
          get positionAbsoluteY() {
            return c(ee);
          },
          get width() {
            return c(B);
          },
          get height() {
            return c(q);
          }
        });
      }), W(Ae), Ft(Ae, (Be, st) => Ap?.(Be, st), () => ({
        nodeId: Z,
        isSelectable: c(J),
        disabled: !c(X),
        handleSelector: c(U),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Be, st, kt, pt) => {
          a()?.({ event: Be, targetNode: kt, nodes: pt });
        },
        onDragStart: (Be, st, kt, pt) => {
          l()?.({ event: Be, targetNode: kt, nodes: pt });
        },
        onDragStop: (Be, st, kt, pt) => {
          u()?.({ event: Be, targetNode: kt, nodes: pt });
        },
        store: n()
      })), Kt(Ae, (Be) => F(ve, Be), () => c(ve)), A(ye, Ae);
    };
    ae(bt, (ye) => {
      c(k) || ye(lt);
    });
  }
  return A(t, wt), ce(Ke);
}
se(
  Lp,
  {
    store: {},
    node: {},
    resizeObserver: {},
    nodeClickDistance: {},
    onnodeclick: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onnodepointerenter: {},
    onnodepointerleave: {},
    onnodepointermove: {},
    onnodecontextmenu: {}
  },
  [],
  [],
  !0
);
var xx = /* @__PURE__ */ re('<div class="svelte-flow__nodes"></div>');
function Hp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      w.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Ii(() => {
    f?.disconnect();
  });
  var v = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), p();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), p();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), p();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), p();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), p();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), p();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), p();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(y) {
      u(y), p();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), p();
    },
    get onnodedragstop() {
      return h();
    },
    set onnodedragstop(y) {
      h(y), p();
    }
  }, m = xx();
  return At(m, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    Lp(y, {
      get node() {
        return c(w);
      },
      get resizeObserver() {
        return f;
      },
      get nodeClickDistance() {
        return r();
      },
      get onnodeclick() {
        return o();
      },
      get onnodepointerenter() {
        return s();
      },
      get onnodepointermove() {
        return a();
      },
      get onnodepointerleave() {
        return l();
      },
      get onnodedrag() {
        return u();
      },
      get onnodedragstart() {
        return d();
      },
      get onnodedragstop() {
        return h();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store(b) {
        n(b);
      }
    });
  }), W(m), A(t, m), ce(v);
}
se(
  Hp,
  {
    store: {},
    nodeClickDistance: {},
    onnodeclick: {},
    onnodecontextmenu: {},
    onnodepointerenter: {},
    onnodepointermove: {},
    onnodepointerleave: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {}
  },
  [],
  [],
  !0
);
var kx = /* @__PURE__ */ _e('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Rp(t, e) {
  ue(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ _(() => n().source), u = /* @__PURE__ */ _(() => n().target), d = /* @__PURE__ */ _(() => n().sourceX), h = /* @__PURE__ */ _(() => n().sourceY), f = /* @__PURE__ */ _(() => n().targetX), v = /* @__PURE__ */ _(() => n().targetY), m = /* @__PURE__ */ _(() => n().sourcePosition), y = /* @__PURE__ */ _(() => n().targetPosition), w = /* @__PURE__ */ _(() => qt(n().animated, !1)), b = /* @__PURE__ */ _(() => qt(n().selected, !1)), x = /* @__PURE__ */ _(() => n().label), E = /* @__PURE__ */ _(() => n().labelStyle), C = /* @__PURE__ */ _(() => qt(n().data, () => ({}), !0)), k = /* @__PURE__ */ _(() => n().style), P = /* @__PURE__ */ _(() => n().interactionWidth), V = /* @__PURE__ */ _(() => qt(n().type, "default")), I = /* @__PURE__ */ _(() => n().sourceHandle), H = /* @__PURE__ */ _(() => n().targetHandle), D = /* @__PURE__ */ _(() => n().markerStart), N = /* @__PURE__ */ _(() => n().markerEnd), S = /* @__PURE__ */ _(() => n().selectable), z = /* @__PURE__ */ _(() => n().focusable), $ = /* @__PURE__ */ _(() => qt(n().deletable, !0)), O = /* @__PURE__ */ _(() => n().hidden), M = /* @__PURE__ */ _(() => n().zIndex), B = /* @__PURE__ */ _(() => n().class), q = /* @__PURE__ */ _(() => n().ariaLabel), U = null;
  const { id: T } = n();
  ao("svelteflow__edge_id", T);
  let G = /* @__PURE__ */ _(() => c(S) ?? r().elementsSelectable), ee = /* @__PURE__ */ _(() => c(z) ?? r().edgesFocusable), j = /* @__PURE__ */ _(() => r().edgeTypes[c(V)] ?? Vu), Z = /* @__PURE__ */ _(() => c(D) ? `url('#${Sl(c(D), r().flowId)}')` : void 0), X = /* @__PURE__ */ _(() => c(N) ? `url('#${Sl(c(N), r().flowId)}')` : void 0);
  function J(le) {
    const ve = r().edgeLookup.get(T);
    ve && (c(G) && r().handleEdgeSelection(T), o()?.({ event: le, edge: ve }));
  }
  function oe(le, ve) {
    const be = r().edgeLookup.get(T);
    be && ve({ event: le, edge: be });
  }
  function L(le) {
    if (!r().disableKeyboardA11y && Yf.includes(le.key) && c(G)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: be } = r();
      le.key === "Escape" ? (U?.blur(), ve({ edges: [n()] })) : be([T]);
    }
  }
  var ne = {
    get edge() {
      return n();
    },
    set edge(le) {
      n(le), p();
    },
    get store() {
      return r();
    },
    set store(le) {
      r(le), p();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(le) {
      o(le), p();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(le) {
      i(le), p();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(le) {
      s(le), p();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(le) {
      a(le), p();
    }
  }, me = he(), fe = Q(me);
  {
    var ie = (le) => {
      var ve = kx();
      let be;
      var ke = Y(ve);
      ot(ke, () => ({
        class: ["svelte-flow__edge", c(B)],
        "data-id": T,
        onclick: J,
        oncontextmenu: i() ? (Ce) => {
          oe(Ce, i());
        } : void 0,
        onpointerenter: s() ? (Ce) => {
          oe(Ce, s());
        } : void 0,
        onpointerleave: a() ? (Ce) => {
          oe(Ce, a());
        } : void 0,
        "aria-label": c(q) === null ? void 0 : c(q) ? c(q) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(ee) ? `${Ip}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(ee) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(ee) ? L : void 0,
        tabindex: c(ee) ? 0 : void 0,
        ...n().domAttributes,
        [zr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(G)
        }
      }));
      var de = Y(ke);
      It(de, () => c(j), (Ce, De) => {
        De(Ce, {
          get id() {
            return T;
          },
          get source() {
            return c(l);
          },
          get target() {
            return c(u);
          },
          get sourceX() {
            return c(d);
          },
          get sourceY() {
            return c(h);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(v);
          },
          get sourcePosition() {
            return c(m);
          },
          get targetPosition() {
            return c(y);
          },
          get animated() {
            return c(w);
          },
          get selected() {
            return c(b);
          },
          get label() {
            return c(x);
          },
          get labelStyle() {
            return c(E);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(k);
          },
          get interactionWidth() {
            return c(P);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c($);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(I);
          },
          get targetHandleId() {
            return c(H);
          },
          get markerStart() {
            return c(Z);
          },
          get markerEnd() {
            return c(X);
          }
        });
      }), W(ke), Kt(ke, (Ce) => U = Ce, () => U), W(ve), Te(() => be = Bt(ve, "", be, { "z-index": c(M) })), A(le, ve);
    };
    ae(fe, (le) => {
      c(O) || le(ie);
    });
  }
  return A(t, me), ce(ne);
}
se(
  Rp,
  {
    edge: {},
    store: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {}
  },
  [],
  [],
  !0
);
u1();
var Cx = /* @__PURE__ */ _e("<defs></defs>");
function jp(t, e) {
  ue(e, !1);
  const n = Ln();
  bu();
  var r = Cx();
  At(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Bp(o, Xe(() => c(i)));
  }), W(r), A(t, r), ce();
}
se(jp, {}, [], [], !0);
var $x = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Sx = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), _x = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Bp(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7), r = g(e, "type", 7), o = g(e, "width", 7, 12.5), i = g(e, "height", 7, 12.5), s = g(e, "markerUnits", 7, "strokeWidth"), a = g(e, "orient", 7, "auto-start-reverse"), l = g(e, "color", 7, "none"), u = g(e, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), p();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), p();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), p();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), p();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), p();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), p();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), p();
    }
  }, h = _x(), f = Y(h);
  {
    var v = (y) => {
      var w = $x();
      let b;
      Te(() => {
        Me(w, "stroke-width", u()), b = Bt(w, "", b, { stroke: l() });
      }), A(y, w);
    }, m = (y) => {
      var w = he(), b = Q(w);
      {
        var x = (E) => {
          var C = Sx();
          let k;
          Te(() => {
            Me(C, "stroke-width", u()), k = Bt(C, "", k, { stroke: l(), fill: l() });
          }), A(E, C);
        };
        ae(
          b,
          (E) => {
            r() === Si.ArrowClosed && E(x);
          },
          !0
        );
      }
      A(y, w);
    };
    ae(f, (y) => {
      r() === Si.Arrow ? y(v) : y(m, !1);
    });
  }
  return W(h), Te(() => {
    Me(h, "id", n()), Me(h, "markerWidth", `${o()}`), Me(h, "markerHeight", `${i()}`), Me(h, "markerUnits", s()), Me(h, "orient", a());
  }), A(t, h), ce(d);
}
se(
  Bp,
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
var Ex = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Kp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "onedgeclick", 7), o = g(e, "onedgecontextmenu", 7), i = g(e, "onedgepointerenter", 7), s = g(e, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), p();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), p();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), p();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), p();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), p();
    }
  }, l = Ex(), u = Y(l), d = Y(u);
  jp(d, {}), W(u);
  var h = R(u, 2);
  return At(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, v) => {
    Rp(f, {
      get edge() {
        return c(v);
      },
      get onedgeclick() {
        return r();
      },
      get onedgecontextmenu() {
        return o();
      },
      get onedgepointerenter() {
        return i();
      },
      get onedgepointerleave() {
        return s();
      },
      get store() {
        return n();
      },
      set store(m) {
        n(m);
      }
    });
  }), W(l), A(t, l), ce(a);
}
se(
  Kp,
  {
    store: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {}
  },
  [],
  [],
  !0
);
var Ox = /* @__PURE__ */ re('<div class="svelte-flow__selection svelte-1rrpn9s"></div>');
const Px = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function Iu(t, e) {
  ue(e, !0), it(t, Px);
  let n = g(e, "x", 7, 0), r = g(e, "y", 7, 0), o = g(e, "width", 7, 0), i = g(e, "height", 7, 0), s = g(e, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(h = 0) {
      n(h), p();
    },
    get y() {
      return r();
    },
    set y(h = 0) {
      r(h), p();
    },
    get width() {
      return o();
    },
    set width(h = 0) {
      o(h), p();
    },
    get height() {
      return i();
    },
    set height(h = 0) {
      i(h), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(h = !0) {
      s(h), p();
    }
  }, l = he(), u = Q(l);
  {
    var d = (h) => {
      var f = Ox();
      let v;
      Te((m) => v = Bt(f, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Jn(o()),
          height: typeof i() == "string" ? i() : Jn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), A(h, f);
    };
    ae(u, (h) => {
      s() && h(d);
    });
  }
  return A(t, l), ce(a);
}
se(Iu, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Nx = /* @__PURE__ */ re("<div><!></div>");
const Mx = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function Fp(t, e) {
  ue(e, !0), it(t, Mx);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ we(void 0);
  Ze(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ _(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = ji(n().nodeLookup, { filter: (x) => !!x.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const x = n().nodes.filter((E) => E.selected);
    a()?.({ nodes: x, event: b });
  }
  function h(b) {
    const x = n().nodes.filter((E) => E.selected);
    s()?.({ nodes: x, event: b });
  }
  function f(b) {
    Object.prototype.hasOwnProperty.call(Xs, b.key) && (b.preventDefault(), n().moveSelectedNodes(Xs[b.key], b.shiftKey ? 4 : 1));
  }
  var v = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), p();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), p();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), p();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), p();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), p();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), p();
    }
  }, m = he(), y = Q(m);
  {
    var w = (b) => {
      var x = Nx();
      x.__contextmenu = d, x.__click = h, x.__keydown = function(...k) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, k);
      };
      let E;
      var C = Y(x);
      Iu(C, { width: "100%", height: "100%", x: 0, y: 0 }), W(x), Ft(x, (k, P) => Ap?.(k, P), () => ({
        disabled: !1,
        store: n(),
        onDrag: (k, P, V, I) => {
          r()?.({ event: k, targetNode: null, nodes: I });
        },
        onDragStart: (k, P, V, I) => {
          o()?.({ event: k, targetNode: null, nodes: I });
        },
        onDragStop: (k, P, V, I) => {
          i()?.({ event: k, targetNode: null, nodes: I });
        }
      })), Kt(x, (k) => F(l, k), () => c(l)), Te(
        (k) => {
          ln(x, 1, Er(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Me(x, "role", n().disableKeyboardA11y ? void 0 : "button"), Me(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), E = Bt(x, "", E, k);
        },
        [
          () => ({
            width: Jn(c(u).width),
            height: Jn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), A(b, x);
    };
    ae(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && dr(c(u).x) && dr(c(u).y) && b(w);
    });
  }
  return A(t, m), ce(v);
}
bo(["contextmenu", "click", "keydown"]);
se(
  Fp,
  {
    store: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onselectionclick: {},
    onselectioncontextmenu: {}
  },
  [],
  [],
  !0
);
function zx(t) {
  switch (t) {
    case "ctrl":
      return 8;
    case "shift":
      return 4;
    case "alt":
      return 2;
    case "meta":
      return 1;
  }
}
function jn(t, e) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = e;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, h, f) => h ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const h = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: v, callback: m, preventDefault: y, enabled: w } = h;
      if (w) {
        if (a.key !== v) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const x = Array.isArray(f) ? f : [f];
          let E = !1;
          for (const C of x)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (k, P) => k | zx(P),
              0
            ) === u) {
              E = !0;
              break;
            }
          if (!E) continue;
        }
        y && a.preventDefault();
        const b = {
          node: t,
          trigger: h,
          originalEvent: a
        };
        t.dispatchEvent(new CustomEvent("shortcut", { detail: b })), m?.(b);
      }
    }
  }
  let s;
  return n && (s = St(t, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = St(t, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function Dt() {
  const t = /* @__PURE__ */ _(Ln), e = (i) => {
    const s = wd(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? s2(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Ro(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = yt(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && wd(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(t).edges = yt(() => c(t).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && ex(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  const o = (i) => c(t).nodeLookup.get(i);
  return {
    zoomIn: c(t).zoomIn,
    zoomOut: c(t).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(t).nodes : $d(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : $d(c(t).edgeLookup, i),
    setZoom: (i, s) => {
      const a = c(t).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => c(t).viewport.zoom,
    setViewport: async (i, s) => {
      const a = c(t).viewport;
      return c(t).panZoom ? (await c(t).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => uu(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = Nu(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
      return await c(t).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    /**
     * Partial is defined as "the 2 nodes/areas are intersecting partially".
     * If a is contained in b or b is contained in a, they are both
     * considered fully intersecting.
     */
    getIntersectingNodes: (i, s = !0, a) => {
      const l = ad(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Ro(h), v = _i(f, u);
        return s && v > 0 || v >= f.width * f.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = ad(i) ? i : e(i);
      if (!l)
        return !1;
      const u = _i(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await n2({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(t).nodes,
        edges: c(t).edges,
        onBeforeDelete: c(t).onbeforedelete
      });
      return a && (c(t).nodes = yt(() => c(t).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(t).edges = yt(() => c(t).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(t).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(t).domNode)
        return i;
      const a = s.snapToGrid ? c(t).snapGrid : !1, { x: l, y: u, zoom: d } = c(t).viewport, { x: h, y: f } = c(t).domNode.getBoundingClientRect(), v = { x: i.x - h, y: i.y - f };
      return Ki(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Ws(i, [s, a, l]);
      return { x: h.x + u, y: h.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(t).nodes],
      edges: [...c(t).edges],
      viewport: { ...c(t).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = c(t).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const u = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => Jb(i, {
      nodeLookup: c(t).nodeLookup,
      nodeOrigin: c(t).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(t).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function $d(t, e) {
  const n = [];
  for (const r of e) {
    const o = t.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function Zp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => to() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => to() ? "Meta" : "Control"), { deleteElements: l } = Dt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function h(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function f(w, b) {
    return (Array.isArray(w) ? w : [w]).map((x) => {
      const E = h(x);
      return {
        key: E,
        modifier: d(x),
        enabled: E !== null,
        callback: b
      };
    });
  }
  function v() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const w = n().nodes.filter((x) => x.selected), b = n().edges.filter((x) => x.selected);
    l({ nodes: w, edges: b });
  }
  var y = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), p();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), p();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = to() ? "Meta" : "Control") {
      o(w), p();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), p();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), p();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = to() ? "Meta" : "Control") {
      a(w), p();
    }
  };
  return Ds("blur", tn, v), Ds("contextmenu", tn, v), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !op(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ft(tn, (w, b) => jn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce(y);
}
se(
  Zp,
  {
    store: {},
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
var Tx = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), Ax = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Wp(t, e) {
  ue(e, !0);
  let n = g(e, "store", 15), r = g(e, "type", 7), o = g(e, "containerStyle", 7), i = g(e, "style", 7), s = g(e, "LineComponent", 7), a = /* @__PURE__ */ _(() => {
    if (!n().connection.inProgress)
      return "";
    const f = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case ur.Bezier: {
        const [v] = sp(f);
        return v;
      }
      case ur.Straight: {
        const [v] = lp(f);
        return v;
      }
      case ur.Step:
      case ur.SmoothStep: {
        const [v] = Mu({
          ...f,
          borderRadius: r() === ur.Step ? 0 : void 0
        });
        return v;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), p();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), p();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), p();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), p();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), p();
    }
  }, u = he(), d = Q(u);
  {
    var h = (f) => {
      var v = Ax(), m = Y(v), y = Y(m);
      {
        var w = (x) => {
          var E = he(), C = Q(E);
          It(C, s, (k, P) => {
            P(k, {});
          }), A(x, E);
        }, b = (x) => {
          var E = Tx();
          Te(() => {
            Me(E, "d", c(a)), Bt(E, i());
          }), A(x, E);
        };
        ae(y, (x) => {
          s() ? x(w) : x(b, !1);
        });
      }
      W(m), W(v), Te(
        (x) => {
          Me(v, "width", n().width), Me(v, "height", n().height), Bt(v, o()), ln(m, 0, x);
        },
        [
          () => Er([
            "svelte-flow__connection",
            Gb(n().connection.isValid)
          ])
        ]
      ), A(f, v);
    };
    ae(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return A(t, u), ce(l);
}
se(
  Wp,
  {
    store: {},
    type: {},
    containerStyle: {},
    style: {},
    LineComponent: {}
  },
  [],
  [],
  !0
);
var Dx = /* @__PURE__ */ re("<div><!></div>");
function Zi(t, e) {
  ue(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ _(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(h = "top-right") {
      n(h), p();
    },
    get style() {
      return r();
    },
    set style(h) {
      r(h), p();
    },
    get class() {
      return o();
    },
    set class(h) {
      o(h), p();
    },
    get children() {
      return i();
    },
    set children(h) {
      i(h), p();
    }
  }, u = Dx();
  ot(u, (h) => ({ class: h, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = Y(u);
  return ze(d, () => i() ?? qe), W(u), A(t, u), ce(l);
}
se(Zi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Vx = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Xp(t, e) {
  ue(e, !0);
  let n = g(e, "proOptions", 7), r = g(e, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), p();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), p();
    }
  }, i = he(), s = Q(i);
  {
    var a = (l) => {
      Zi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = Vx();
          A(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return A(t, i), ce(o);
}
se(Xp, { proOptions: {}, position: {} }, [], [], !0);
var Ix = /* @__PURE__ */ re("<div><!></div>");
const Lx = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function qp(t, e) {
  ue(e, !0), it(t, Lx);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ _(() => u().class), h = /* @__PURE__ */ _(() => V1(u(), [
    "id",
    "class",
    "nodeTypes",
    "edgeTypes",
    "colorMode",
    "isValidConnection",
    "onmove",
    "onmovestart",
    "onmoveend",
    "onflowerror",
    "ondelete",
    "onbeforedelete",
    "onbeforeconnect",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforereconnect",
    "onreconnect",
    "onreconnectstart",
    "onreconnectend",
    "onclickconnectstart",
    "onclickconnectend",
    "oninit",
    "onselectionchange",
    "onselectiondragstart",
    "onselectiondrag",
    "onselectiondragstop",
    "onselectionstart",
    "onselectionend",
    "clickConnect",
    "fitView",
    "fitViewOptions",
    "nodeOrigin",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "connectionRadius",
    "connectionMode",
    "selectionMode",
    "selectNodesOnDrag",
    "snapGrid",
    "defaultMarkerColor",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "colorModeSSR",
    "defaultEdgeOptions",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "elementsSelectable",
    "nodesFocusable",
    "edgesFocusable",
    "disableKeyboardA11y",
    "noDragClass",
    "noPanClass",
    "noWheelClass",
    "ariaLabelConfig",
    "autoPanSpeed",
    "panOnScrollSpeed"
  ]));
  function f(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var v = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), p();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), p();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), p();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), p();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), p();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), p();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), p();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), p();
    }
  }, m = Ix();
  ot(
    m,
    (w) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...c(h),
      [Fn]: w
    }),
    [
      () => ({ width: Jn(n()), height: Jn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = Y(m);
  return ze(y, () => l() ?? qe), W(m), Kt(m, (w) => i(w), () => i()), Ic(m, "clientHeight", a), Ic(m, "clientWidth", s), A(t, m), ce(v);
}
se(
  qp,
  {
    width: {},
    height: {},
    colorMode: {},
    domNode: {},
    clientWidth: {},
    clientHeight: {},
    children: {},
    rest: {}
  },
  [],
  [],
  !0
);
var Hx = /* @__PURE__ */ re('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Rx = /* @__PURE__ */ re("<!> <!>", 1), jx = /* @__PURE__ */ re("<!> <!> <!> <!> <!>", 1);
function Yp(t, e) {
  ue(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), f = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), x = g(e, "onnodedrag", 7), E = g(e, "onnodedragstart", 7), C = g(e, "onnodedragstop", 7), k = g(e, "onnodepointerenter", 7), P = g(e, "onnodepointermove", 7), V = g(e, "onnodepointerleave", 7), I = g(e, "onselectionclick", 7), H = g(e, "onselectioncontextmenu", 7), D = g(e, "onselectionstart", 7), N = g(e, "onselectionend", 7), S = g(e, "onedgeclick", 7), z = g(e, "onedgecontextmenu", 7), $ = g(e, "onedgepointerenter", 7), O = g(e, "onedgepointerleave", 7), M = g(e, "onpaneclick", 7), B = g(e, "onpanecontextmenu", 7), q = g(e, "panOnScrollMode", 23, () => io.Free), U = g(e, "preventScrolling", 7, !0), T = g(e, "zoomOnScroll", 7, !0), G = g(e, "zoomOnDoubleClick", 7, !0), ee = g(e, "zoomOnPinch", 7, !0), j = g(e, "panOnScroll", 7, !1), Z = g(e, "panOnScrollSpeed", 7, 0.5), X = g(e, "panOnDrag", 7, !0), J = g(e, "selectionOnDrag", 7, !1), oe = g(e, "connectionLineComponent", 7), L = g(e, "connectionLineStyle", 7), ne = g(e, "connectionLineContainerStyle", 7), me = g(e, "connectionLineType", 23, () => ur.Bezier), fe = g(e, "attributionPosition", 7), ie = g(e, "children", 7), le = g(e, "nodes", 31, () => $t([])), ve = g(e, "edges", 31, () => $t([])), be = g(e, "viewport", 31, () => {
  }), ke = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "width",
    "height",
    "proOptions",
    "selectionKey",
    "deleteKey",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "paneClickDistance",
    "nodeClickDistance",
    "onmovestart",
    "onmoveend",
    "onmove",
    "oninit",
    "onnodeclick",
    "onnodecontextmenu",
    "onnodedrag",
    "onnodedragstart",
    "onnodedragstop",
    "onnodepointerenter",
    "onnodepointermove",
    "onnodepointerleave",
    "onselectionclick",
    "onselectioncontextmenu",
    "onselectionstart",
    "onselectionend",
    "onedgeclick",
    "onedgecontextmenu",
    "onedgepointerenter",
    "onedgepointerleave",
    "onpaneclick",
    "onpanecontextmenu",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnScrollSpeed",
    "panOnDrag",
    "selectionOnDrag",
    "connectionLineComponent",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "connectionLineType",
    "attributionPosition",
    "children",
    "nodes",
    "edges",
    "viewport"
  ]), de = Np({
    props: ke,
    width: n(),
    height: r(),
    get nodes() {
      return le();
    },
    set nodes(te) {
      le(te);
    },
    get edges() {
      return ve();
    },
    set edges(te) {
      ve(te);
    },
    get viewport() {
      return be();
    },
    set viewport(te) {
      be(te);
    }
  });
  const Ce = Tn(qs);
  Ce && Ce.setStore && Ce.setStore(de), ao(qs, {
    provider: !1,
    getStore() {
      return de;
    }
  }), Ze(() => {
    const te = { nodes: de.selectedNodes, edges: de.selectedEdges };
    yt(() => e.onselectionchange)?.(te);
    for (const Ve of de.selectionChangeHandlers.values())
      Ve(te);
  }), Ii(() => {
    de.reset();
  });
  var De = {
    get width() {
      return n();
    },
    set width(te) {
      n(te), p();
    },
    get height() {
      return r();
    },
    set height(te) {
      r(te), p();
    },
    get proOptions() {
      return o();
    },
    set proOptions(te) {
      o(te), p();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(te) {
      i(te), p();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(te) {
      s(te), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(te) {
      a(te), p();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(te) {
      l(te), p();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(te) {
      u(te), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(te = 1) {
      d(te), p();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(te = 1) {
      h(te), p();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(te) {
      f(te), p();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(te) {
      v(te), p();
    },
    get onmove() {
      return m();
    },
    set onmove(te) {
      m(te), p();
    },
    get oninit() {
      return y();
    },
    set oninit(te) {
      y(te), p();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(te) {
      w(te), p();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(te) {
      b(te), p();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(te) {
      x(te), p();
    },
    get onnodedragstart() {
      return E();
    },
    set onnodedragstart(te) {
      E(te), p();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(te) {
      C(te), p();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(te) {
      k(te), p();
    },
    get onnodepointermove() {
      return P();
    },
    set onnodepointermove(te) {
      P(te), p();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(te) {
      V(te), p();
    },
    get onselectionclick() {
      return I();
    },
    set onselectionclick(te) {
      I(te), p();
    },
    get onselectioncontextmenu() {
      return H();
    },
    set onselectioncontextmenu(te) {
      H(te), p();
    },
    get onselectionstart() {
      return D();
    },
    set onselectionstart(te) {
      D(te), p();
    },
    get onselectionend() {
      return N();
    },
    set onselectionend(te) {
      N(te), p();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(te) {
      S(te), p();
    },
    get onedgecontextmenu() {
      return z();
    },
    set onedgecontextmenu(te) {
      z(te), p();
    },
    get onedgepointerenter() {
      return $();
    },
    set onedgepointerenter(te) {
      $(te), p();
    },
    get onedgepointerleave() {
      return O();
    },
    set onedgepointerleave(te) {
      O(te), p();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(te) {
      M(te), p();
    },
    get onpanecontextmenu() {
      return B();
    },
    set onpanecontextmenu(te) {
      B(te), p();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(te = io.Free) {
      q(te), p();
    },
    get preventScrolling() {
      return U();
    },
    set preventScrolling(te = !0) {
      U(te), p();
    },
    get zoomOnScroll() {
      return T();
    },
    set zoomOnScroll(te = !0) {
      T(te), p();
    },
    get zoomOnDoubleClick() {
      return G();
    },
    set zoomOnDoubleClick(te = !0) {
      G(te), p();
    },
    get zoomOnPinch() {
      return ee();
    },
    set zoomOnPinch(te = !0) {
      ee(te), p();
    },
    get panOnScroll() {
      return j();
    },
    set panOnScroll(te = !1) {
      j(te), p();
    },
    get panOnScrollSpeed() {
      return Z();
    },
    set panOnScrollSpeed(te = 0.5) {
      Z(te), p();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(te = !0) {
      X(te), p();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(te = !1) {
      J(te), p();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(te) {
      oe(te), p();
    },
    get connectionLineStyle() {
      return L();
    },
    set connectionLineStyle(te) {
      L(te), p();
    },
    get connectionLineContainerStyle() {
      return ne();
    },
    set connectionLineContainerStyle(te) {
      ne(te), p();
    },
    get connectionLineType() {
      return me();
    },
    set connectionLineType(te = ur.Bezier) {
      me(te), p();
    },
    get attributionPosition() {
      return fe();
    },
    set attributionPosition(te) {
      fe(te), p();
    },
    get children() {
      return ie();
    },
    set children(te) {
      ie(te), p();
    },
    get nodes() {
      return le();
    },
    set nodes(te = []) {
      le(te), p();
    },
    get edges() {
      return ve();
    },
    set edges(te = []) {
      ve(te), p();
    },
    get viewport() {
      return be();
    },
    set viewport(te = void 0) {
      be(te), p();
    }
  };
  return qp(t, {
    get colorMode() {
      return de.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ke;
    },
    get domNode() {
      return de.domNode;
    },
    set domNode(te) {
      de.domNode = te;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(te) {
      de.width = te;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(te) {
      de.height = te;
    },
    children: (te, Ve) => {
      var Ne = jx(), We = Q(Ne);
      Zp(We, {
        get selectionKey() {
          return i();
        },
        get deleteKey() {
          return s();
        },
        get panActivationKey() {
          return a();
        },
        get multiSelectionKey() {
          return l();
        },
        get zoomActivationKey() {
          return u();
        },
        get store() {
          return de;
        },
        set store(lt) {
          de = lt;
        }
      });
      var Re = R(We, 2);
      Mp(Re, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return U();
        },
        get zoomOnScroll() {
          return T();
        },
        get zoomOnDoubleClick() {
          return G();
        },
        get zoomOnPinch() {
          return ee();
        },
        get panOnScroll() {
          return j();
        },
        get panOnScrollSpeed() {
          return Z();
        },
        get panOnDrag() {
          return X();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return J();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return m();
        },
        get onmoveend() {
          return v();
        },
        get oninit() {
          return y();
        },
        get store() {
          return de;
        },
        set store(lt) {
          de = lt;
        },
        children: (lt, ye) => {
          zp(lt, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return B();
            },
            get onselectionstart() {
              return D();
            },
            get onselectionend() {
              return N();
            },
            get panOnDrag() {
              return X();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return de;
            },
            set store(Ae) {
              de = Ae;
            },
            children: (Ae, ft) => {
              var Be = Rx(), st = Q(Be);
              Tp(st, {
                get store() {
                  return de;
                },
                set store(pt) {
                  de = pt;
                },
                children: (pt, Vt) => {
                  var vt = Hx(), mt = R(Q(vt), 2);
                  Kp(mt, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return z();
                    },
                    get onedgepointerenter() {
                      return $();
                    },
                    get onedgepointerleave() {
                      return O();
                    },
                    get store() {
                      return de;
                    },
                    set store(ct) {
                      de = ct;
                    }
                  });
                  var zt = R(mt, 4);
                  Wp(zt, {
                    get type() {
                      return me();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return ne();
                    },
                    get style() {
                      return L();
                    },
                    get store() {
                      return de;
                    },
                    set store(ct) {
                      de = ct;
                    }
                  });
                  var un = R(zt, 2);
                  Hp(un, {
                    get nodeClickDistance() {
                      return h();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return P();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(ct) {
                      de = ct;
                    }
                  });
                  var or = R(un, 2);
                  Fp(or, {
                    get onselectionclick() {
                      return I();
                    },
                    get onselectioncontextmenu() {
                      return H();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return E();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(ct) {
                      de = ct;
                    }
                  }), Oe(2), A(pt, vt);
                },
                $$slots: { default: !0 }
              });
              var kt = R(st, 2);
              {
                let pt = /* @__PURE__ */ _(() => !!(de.selectionRect && de.selectionRectMode === "user")), Vt = /* @__PURE__ */ _(() => de.selectionRect?.width), vt = /* @__PURE__ */ _(() => de.selectionRect?.height), mt = /* @__PURE__ */ _(() => de.selectionRect?.x), zt = /* @__PURE__ */ _(() => de.selectionRect?.y);
                Iu(kt, {
                  get isVisible() {
                    return c(pt);
                  },
                  get width() {
                    return c(Vt);
                  },
                  get height() {
                    return c(vt);
                  },
                  get x() {
                    return c(mt);
                  },
                  get y() {
                    return c(zt);
                  }
                });
              }
              A(Ae, Be);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ke = R(Re, 2);
      Xp(Ke, {
        get proOptions() {
          return o();
        },
        get position() {
          return fe();
        }
      });
      var wt = R(Ke, 2);
      Dp(wt, {
        get store() {
          return de;
        }
      });
      var bt = R(wt, 2);
      ze(bt, () => ie() ?? qe), A(te, Ne);
    },
    $$slots: { default: !0 }
  }), ce(De);
}
se(
  Yp,
  {
    width: {},
    height: {},
    proOptions: {},
    selectionKey: {},
    deleteKey: {},
    panActivationKey: {},
    multiSelectionKey: {},
    zoomActivationKey: {},
    paneClickDistance: {},
    nodeClickDistance: {},
    onmovestart: {},
    onmoveend: {},
    onmove: {},
    oninit: {},
    onnodeclick: {},
    onnodecontextmenu: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onnodepointerenter: {},
    onnodepointermove: {},
    onnodepointerleave: {},
    onselectionclick: {},
    onselectioncontextmenu: {},
    onselectionstart: {},
    onselectionend: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {},
    onpaneclick: {},
    onpanecontextmenu: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnScroll: {},
    panOnScrollSpeed: {},
    panOnDrag: {},
    selectionOnDrag: {},
    connectionLineComponent: {},
    connectionLineStyle: {},
    connectionLineContainerStyle: {},
    connectionLineType: {},
    attributionPosition: {},
    children: {},
    nodes: {},
    edges: {},
    viewport: {}
  },
  [],
  [],
  !0
);
function Gp(t, e) {
  ue(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ we(Np({ props: {}, nodes: [], edges: [] }));
  ao(qs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      F(r, a);
    }
  }), Ii(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    }
  }, i = he(), s = Q(i);
  return ze(s, () => n() ?? qe), A(t, i), ce(o);
}
se(Gp, { children: {} }, [], [], !0);
var Bx = /* @__PURE__ */ re("<button><!></button>");
function li(t, e) {
  ue(e, !0);
  let n = g(e, "class", 7), r = g(e, "bgColor", 7), o = g(e, "bgColorHover", 7), i = g(e, "color", 7), s = g(e, "colorHover", 7), a = g(e, "borderColor", 7), l = g(e, "onclick", 7), u = g(e, "children", 7), d = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor",
    "onclick",
    "children"
  ]);
  var h = {
    get class() {
      return n();
    },
    set class(m) {
      n(m), p();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), p();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), p();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), p();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), p();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), p();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), p();
    },
    get children() {
      return u();
    },
    set children(m) {
      u(m), p();
    }
  }, f = Bx();
  ot(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [Fn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = Y(f);
  return ze(v, () => u() ?? qe), W(f), A(t, f), ce(h);
}
se(
  li,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {},
    onclick: {},
    children: {}
  },
  [],
  [],
  !0
);
var Kx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Up(t) {
  var e = Kx();
  A(t, e);
}
se(Up, {}, [], [], !0);
var Fx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Jp(t) {
  var e = Fx();
  A(t, e);
}
se(Jp, {}, [], [], !0);
var Zx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Qp(t) {
  var e = Zx();
  A(t, e);
}
se(Qp, {}, [], [], !0);
var Wx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function eg(t) {
  var e = Wx();
  A(t, e);
}
se(eg, {}, [], [], !0);
var Xx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function tg(t) {
  var e = Xx();
  A(t, e);
}
se(tg, {}, [], [], !0);
var qx = /* @__PURE__ */ re("<!> <!>", 1), Yx = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function ng(t, e) {
  ue(e, !0);
  let n = g(e, "position", 7, "bottom-left"), r = g(e, "orientation", 7, "vertical"), o = g(e, "showZoom", 7, !0), i = g(e, "showFitView", 7, !0), s = g(e, "showLock", 7, !0), a = g(e, "style", 7), l = g(e, "class", 7), u = g(e, "buttonBgColor", 7), d = g(e, "buttonBgColorHover", 7), h = g(e, "buttonColor", 7), f = g(e, "buttonColorHover", 7), v = g(e, "buttonBorderColor", 7), m = g(e, "fitViewOptions", 7), y = g(e, "children", 7), w = g(e, "before", 7), b = g(e, "after", 7), x = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "orientation",
    "showZoom",
    "showFitView",
    "showLock",
    "style",
    "class",
    "buttonBgColor",
    "buttonBgColorHover",
    "buttonColor",
    "buttonColorHover",
    "buttonBorderColor",
    "fitViewOptions",
    "children",
    "before",
    "after"
  ]), E = /* @__PURE__ */ _(Ln);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: v()
  };
  let k = /* @__PURE__ */ _(() => c(E).nodesDraggable || c(E).nodesConnectable || c(E).elementsSelectable), P = /* @__PURE__ */ _(() => c(E).viewport.zoom <= c(E).minZoom), V = /* @__PURE__ */ _(() => c(E).viewport.zoom >= c(E).maxZoom), I = /* @__PURE__ */ _(() => c(E).ariaLabelConfig), H = /* @__PURE__ */ _(() => r() === "horizontal" ? "horizontal" : "vertical");
  const D = () => {
    c(E).zoomIn();
  }, N = () => {
    c(E).zoomOut();
  }, S = () => {
    c(E).fitView(m());
  }, z = () => {
    let O = !c(k);
    c(E).nodesDraggable = O, c(E).nodesConnectable = O, c(E).elementsSelectable = O;
  };
  var $ = {
    get position() {
      return n();
    },
    set position(O = "bottom-left") {
      n(O), p();
    },
    get orientation() {
      return r();
    },
    set orientation(O = "vertical") {
      r(O), p();
    },
    get showZoom() {
      return o();
    },
    set showZoom(O = !0) {
      o(O), p();
    },
    get showFitView() {
      return i();
    },
    set showFitView(O = !0) {
      i(O), p();
    },
    get showLock() {
      return s();
    },
    set showLock(O = !0) {
      s(O), p();
    },
    get style() {
      return a();
    },
    set style(O) {
      a(O), p();
    },
    get class() {
      return l();
    },
    set class(O) {
      l(O), p();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(O) {
      u(O), p();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(O) {
      d(O), p();
    },
    get buttonColor() {
      return h();
    },
    set buttonColor(O) {
      h(O), p();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(O) {
      f(O), p();
    },
    get buttonBorderColor() {
      return v();
    },
    set buttonBorderColor(O) {
      v(O), p();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(O) {
      m(O), p();
    },
    get children() {
      return y();
    },
    set children(O) {
      y(O), p();
    },
    get before() {
      return w();
    },
    set before(O) {
      w(O), p();
    },
    get after() {
      return b();
    },
    set after(O) {
      b(O), p();
    }
  };
  {
    let O = /* @__PURE__ */ _(() => [
      "svelte-flow__controls",
      c(H),
      l()
    ]);
    Zi(t, Xe(
      {
        get class() {
          return c(O);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(I)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (M, B) => {
          var q = Yx(), U = Q(q);
          {
            var T = (fe) => {
              var ie = he(), le = Q(ie);
              ze(le, w), A(fe, ie);
            };
            ae(U, (fe) => {
              w() && fe(T);
            });
          }
          var G = R(U, 2);
          {
            var ee = (fe) => {
              var ie = qx(), le = Q(ie);
              li(le, Xe(
                {
                  onclick: D,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(I)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(V);
                  }
                },
                () => C,
                {
                  children: (be, ke) => {
                    Up(be);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = R(le, 2);
              li(ve, Xe(
                {
                  onclick: N,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(I)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(P);
                  }
                },
                () => C,
                {
                  children: (be, ke) => {
                    Jp(be);
                  },
                  $$slots: { default: !0 }
                }
              )), A(fe, ie);
            };
            ae(G, (fe) => {
              o() && fe(ee);
            });
          }
          var j = R(G, 2);
          {
            var Z = (fe) => {
              li(fe, Xe(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: S,
                  get title() {
                    return c(I)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.fitView.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, le) => {
                    Qp(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(j, (fe) => {
              i() && fe(Z);
            });
          }
          var X = R(j, 2);
          {
            var J = (fe) => {
              li(fe, Xe(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: z,
                  get title() {
                    return c(I)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.interactive.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, le) => {
                    var ve = he(), be = Q(ve);
                    {
                      var ke = (Ce) => {
                        tg(Ce);
                      }, de = (Ce) => {
                        eg(Ce);
                      };
                      ae(be, (Ce) => {
                        c(k) ? Ce(ke) : Ce(de, !1);
                      });
                    }
                    A(ie, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(X, (fe) => {
              s() && fe(J);
            });
          }
          var oe = R(X, 2);
          {
            var L = (fe) => {
              var ie = he(), le = Q(ie);
              ze(le, y), A(fe, ie);
            };
            ae(oe, (fe) => {
              y() && fe(L);
            });
          }
          var ne = R(oe, 2);
          {
            var me = (fe) => {
              var ie = he(), le = Q(ie);
              ze(le, b), A(fe, ie);
            };
            ae(ne, (fe) => {
              b() && fe(me);
            });
          }
          A(M, q);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ce($);
}
se(
  ng,
  {
    position: {},
    orientation: {},
    showZoom: {},
    showFitView: {},
    showLock: {},
    style: {},
    class: {},
    buttonBgColor: {},
    buttonBgColorHover: {},
    buttonColor: {},
    buttonColorHover: {},
    buttonBorderColor: {},
    fitViewOptions: {},
    children: {},
    before: {},
    after: {}
  },
  [],
  [],
  !0
);
var hr;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(hr || (hr = {}));
var Gx = /* @__PURE__ */ _e("<circle></circle>");
function rg(t, e) {
  ue(e, !0);
  let n = g(e, "radius", 7), r = g(e, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), p();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), p();
    }
  }, i = Gx();
  return Te(() => {
    Me(i, "cx", n()), Me(i, "cy", n()), Me(i, "r", n()), ln(i, 0, Er(["svelte-flow__background-pattern", "dots", r()]));
  }), A(t, i), ce(o);
}
se(rg, { radius: {}, class: {} }, [], [], !0);
var Ux = /* @__PURE__ */ _e("<path></path>");
function og(t, e) {
  ue(e, !0);
  let n = g(e, "lineWidth", 7), r = g(e, "dimensions", 7), o = g(e, "variant", 7), i = g(e, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), p();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), p();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), p();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), p();
    }
  }, a = Ux();
  return Te(() => {
    Me(a, "stroke-width", n()), Me(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), ln(a, 0, Er(["svelte-flow__background-pattern", o(), i()]));
  }), A(t, a), ce(s);
}
se(og, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Jx = {
  [hr.Dots]: 1,
  [hr.Lines]: 1,
  [hr.Cross]: 6
};
var Qx = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function ig(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => hr.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ _(Ln), f = /* @__PURE__ */ _(() => r() === hr.Dots), v = /* @__PURE__ */ _(() => r() === hr.Cross), m = /* @__PURE__ */ _(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ _(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ _(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ _(() => (i() ?? Jx[r()]) * c(h).viewport.zoom), x = /* @__PURE__ */ _(() => c(v) ? [c(b), c(b)] : c(w)), E = /* @__PURE__ */ _(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(S) {
      n(S), p();
    },
    get variant() {
      return r();
    },
    set variant(S = hr.Dots) {
      r(S), p();
    },
    get gap() {
      return o();
    },
    set gap(S = 20) {
      o(S), p();
    },
    get size() {
      return i();
    },
    set size(S) {
      i(S), p();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(S = 1) {
      s(S), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(S) {
      a(S), p();
    },
    get patternColor() {
      return l();
    },
    set patternColor(S) {
      l(S), p();
    },
    get patternClass() {
      return u();
    },
    set patternClass(S) {
      u(S), p();
    },
    get class() {
      return d();
    },
    set class(S) {
      d(S), p();
    }
  }, k = Qx();
  let P;
  var V = Y(k), I = Y(V);
  {
    var H = (S) => {
      {
        let z = /* @__PURE__ */ _(() => c(b) / 2);
        rg(S, {
          get radius() {
            return c(z);
          },
          get class() {
            return u();
          }
        });
      }
    }, D = (S) => {
      og(S, {
        get dimensions() {
          return c(x);
        },
        get variant() {
          return r();
        },
        get lineWidth() {
          return s();
        },
        get class() {
          return u();
        }
      });
    };
    ae(I, (S) => {
      c(f) ? S(H) : S(D, !1);
    });
  }
  W(V);
  var N = R(V);
  return W(k), Te(() => {
    ln(k, 0, Er([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), P = Bt(k, "", P, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Me(V, "id", c(y)), Me(V, "x", c(h).viewport.x % c(w)[0]), Me(V, "y", c(h).viewport.y % c(w)[1]), Me(V, "width", c(w)[0]), Me(V, "height", c(w)[1]), Me(V, "patternTransform", `translate(-${c(E)[0]},-${c(E)[1]})`), Me(N, "fill", `url(#${c(y)})`);
  }), A(t, k), ce(C);
}
se(
  ig,
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
var e7 = /* @__PURE__ */ _e("<rect></rect>");
function sg(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7), r = g(e, "x", 7), o = g(e, "y", 7), i = g(e, "width", 7), s = g(e, "height", 7), a = g(e, "borderRadius", 7, 5), l = g(e, "color", 7), u = g(e, "shapeRendering", 7), d = g(e, "strokeColor", 7), h = g(e, "strokeWidth", 7, 2), f = g(e, "selected", 7), v = g(e, "class", 7), m = g(e, "nodeComponent", 7);
  var y = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), p();
    },
    get x() {
      return r();
    },
    set x(C) {
      r(C), p();
    },
    get y() {
      return o();
    },
    set y(C) {
      o(C), p();
    },
    get width() {
      return i();
    },
    set width(C) {
      i(C), p();
    },
    get height() {
      return s();
    },
    set height(C) {
      s(C), p();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(C = 5) {
      a(C), p();
    },
    get color() {
      return l();
    },
    set color(C) {
      l(C), p();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(C) {
      u(C), p();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(C) {
      d(C), p();
    },
    get strokeWidth() {
      return h();
    },
    set strokeWidth(C = 2) {
      h(C), p();
    },
    get selected() {
      return f();
    },
    set selected(C) {
      f(C), p();
    },
    get class() {
      return v();
    },
    set class(C) {
      v(C), p();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(C) {
      m(C), p();
    }
  }, w = he(), b = Q(w);
  {
    var x = (C) => {
      const k = /* @__PURE__ */ _(m);
      var P = he(), V = Q(P);
      It(V, () => c(k), (I, H) => {
        H(I, {
          get id() {
            return n();
          },
          get x() {
            return r();
          },
          get y() {
            return o();
          },
          get width() {
            return i();
          },
          get height() {
            return s();
          },
          get borderRadius() {
            return a();
          },
          get class() {
            return v();
          },
          get color() {
            return l();
          },
          get shapeRendering() {
            return u();
          },
          get strokeColor() {
            return d();
          },
          get strokeWidth() {
            return h();
          },
          get selected() {
            return f();
          }
        });
      }), A(C, P);
    }, E = (C) => {
      var k = e7();
      let P, V;
      Te(() => {
        P = ln(k, 0, Er(["svelte-flow__minimap-node", v()]), null, P, { selected: f() }), Me(k, "x", r()), Me(k, "y", o()), Me(k, "rx", a()), Me(k, "ry", a()), Me(k, "width", i()), Me(k, "height", s()), Me(k, "shape-rendering", u()), V = Bt(k, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), A(C, k);
    };
    ae(b, (C) => {
      m() ? C(x) : C(E, !1);
    });
  }
  return A(t, w), ce(y);
}
se(
  sg,
  {
    id: {},
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
    class: {},
    nodeComponent: {}
  },
  [],
  [],
  !0
);
function t7(t, e) {
  const n = j2({
    domNode: t,
    panZoom: e.panZoom,
    getTransform: () => {
      const { viewport: o } = e.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: e.getViewScale
  });
  n.update({
    translateExtent: e.translateExtent,
    width: e.width,
    height: e.height,
    inversePan: e.inversePan,
    zoomStep: e.zoomStep,
    pannable: e.pannable,
    zoomable: e.zoomable
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
const el = (t) => t instanceof Function ? t : () => t;
var n7 = /* @__PURE__ */ _e("<title> </title>"), r7 = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), o7 = /* @__PURE__ */ re('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ag(t, e) {
  ue(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), f = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), x = g(e, "inversePan", 7), E = g(e, "zoomStep", 7), C = g(e, "class", 7), k = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "ariaLabel",
    "nodeStrokeColor",
    "nodeColor",
    "nodeClass",
    "nodeBorderRadius",
    "nodeStrokeWidth",
    "nodeComponent",
    "bgColor",
    "maskColor",
    "maskStrokeColor",
    "maskStrokeWidth",
    "width",
    "height",
    "pannable",
    "zoomable",
    "inversePan",
    "zoomStep",
    "class"
  ]), P = /* @__PURE__ */ _(Ln), V = /* @__PURE__ */ _(() => c(P).ariaLabelConfig);
  const I = i() === void 0 ? void 0 : el(i()), H = el(o()), D = el(s()), N = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let S = /* @__PURE__ */ _(() => `svelte-flow__minimap-desc-${c(P).flowId}`), z = /* @__PURE__ */ _(() => ({
    x: -c(P).viewport.x / c(P).viewport.zoom,
    y: -c(P).viewport.y / c(P).viewport.zoom,
    width: c(P).width / c(P).viewport.zoom,
    height: c(P).height / c(P).viewport.zoom
  })), $ = /* @__PURE__ */ _(() => ep(ji(c(P).nodeLookup, { filter: (ne) => !ne.hidden }), c(z))), O = /* @__PURE__ */ _(() => c($).width / m()), M = /* @__PURE__ */ _(() => c($).height / y()), B = /* @__PURE__ */ _(() => Math.max(c(O), c(M))), q = /* @__PURE__ */ _(() => c(B) * m()), U = /* @__PURE__ */ _(() => c(B) * y()), T = /* @__PURE__ */ _(() => 5 * c(B)), G = /* @__PURE__ */ _(() => c($).x - (c(q) - c($).width) / 2 - c(T)), ee = /* @__PURE__ */ _(() => c($).y - (c(U) - c($).height) / 2 - c(T)), j = /* @__PURE__ */ _(() => c(q) + c(T) * 2), Z = /* @__PURE__ */ _(() => c(U) + c(T) * 2);
  const X = () => c(B);
  var J = {
    get position() {
      return n();
    },
    set position(ne = "bottom-right") {
      n(ne), p();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ne) {
      r(ne), p();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ne = "transparent") {
      o(ne), p();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ne) {
      i(ne), p();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ne = "") {
      s(ne), p();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ne = 5) {
      a(ne), p();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ne = 2) {
      l(ne), p();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ne) {
      u(ne), p();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ne) {
      d(ne), p();
    },
    get maskColor() {
      return h();
    },
    set maskColor(ne) {
      h(ne), p();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(ne) {
      f(ne), p();
    },
    get maskStrokeWidth() {
      return v();
    },
    set maskStrokeWidth(ne) {
      v(ne), p();
    },
    get width() {
      return m();
    },
    set width(ne = 200) {
      m(ne), p();
    },
    get height() {
      return y();
    },
    set height(ne = 150) {
      y(ne), p();
    },
    get pannable() {
      return w();
    },
    set pannable(ne = !0) {
      w(ne), p();
    },
    get zoomable() {
      return b();
    },
    set zoomable(ne = !0) {
      b(ne), p();
    },
    get inversePan() {
      return x();
    },
    set inversePan(ne) {
      x(ne), p();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(ne) {
      E(ne), p();
    },
    get class() {
      return C();
    },
    set class(ne) {
      C(ne), p();
    }
  }, oe = o7(), L = Q(oe);
  {
    let ne = /* @__PURE__ */ _(() => ["svelte-flow__minimap", C()]);
    U1(L, () => ({ "--xy-minimap-background-color-props": d() })), Zi(L.lastChild, Xe(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ne);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => k,
      {
        children: (me, fe) => {
          var ie = he(), le = Q(ie);
          {
            var ve = (be) => {
              var ke = r7();
              let de;
              var Ce = Y(ke);
              {
                var De = (Ne) => {
                  var We = n7(), Re = Y(We, !0);
                  W(We), Te(() => {
                    Me(We, "id", c(S)), ht(Re, r() ?? c(V)["minimap.ariaLabel"]);
                  }), A(Ne, We);
                };
                ae(Ce, (Ne) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && Ne(De);
                });
              }
              var te = R(Ce);
              At(te, 17, () => c(P).nodes, (Ne) => Ne.id, (Ne, We) => {
                const Re = /* @__PURE__ */ _(() => c(P).nodeLookup.get(c(We).id));
                var Ke = he(), wt = Q(Ke);
                {
                  var bt = (lt) => {
                    const ye = /* @__PURE__ */ _(() => Wr(c(Re)));
                    {
                      let Ae = /* @__PURE__ */ _(() => I?.(c(Re))), ft = /* @__PURE__ */ _(() => H(c(Re))), Be = /* @__PURE__ */ _(() => D(c(Re)));
                      sg(lt, Xe(
                        {
                          get id() {
                            return c(Re).id;
                          },
                          get x() {
                            return c(Re).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Re).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ye),
                        {
                          get selected() {
                            return c(Re).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ae);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(ft);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return N;
                          },
                          get class() {
                            return c(Be);
                          }
                        }
                      ));
                    }
                  };
                  ae(wt, (lt) => {
                    c(Re) && tp(c(Re)) && !c(Re).hidden && lt(bt);
                  });
                }
                A(Ne, Ke);
              });
              var Ve = R(te);
              W(ke), Ft(ke, (Ne, We) => t7?.(Ne, We), () => ({
                store: c(P),
                panZoom: c(P).panZoom,
                getViewScale: X,
                translateExtent: c(P).translateExtent,
                width: c(P).width,
                height: c(P).height,
                inversePan: x(),
                zoomStep: E(),
                pannable: w(),
                zoomable: b()
              })), Te(() => {
                Me(ke, "width", m()), Me(ke, "height", y()), Me(ke, "viewBox", `${c(G) ?? ""} ${c(ee) ?? ""} ${c(j) ?? ""} ${c(Z) ?? ""}`), Me(ke, "aria-labelledby", c(S)), de = Bt(ke, "", de, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(B) : void 0
                }), Me(Ve, "d", `M${c(G) - c(T)},${c(ee) - c(T)}h${c(j) + c(T) * 2}v${c(Z) + c(T) * 2}h${-c(j) - c(T) * 2}z
      M${c(z).x ?? ""},${c(z).y ?? ""}h${c(z).width ?? ""}v${c(z).height ?? ""}h${-c(z).width}z`);
              }), A(be, ke);
            };
            ae(le, (be) => {
              c(P).panZoom && be(ve);
            });
          }
          A(me, ie);
        },
        $$slots: { default: !0 }
      }
    )), W(L);
  }
  return A(t, oe), ce(J);
}
se(
  ag,
  {
    position: {},
    ariaLabel: {},
    nodeStrokeColor: {},
    nodeColor: {},
    nodeClass: {},
    nodeBorderRadius: {},
    nodeStrokeWidth: {},
    nodeComponent: {},
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
    class: {}
  },
  [],
  [],
  !0
);
var i7 = /* @__PURE__ */ re("<div><!></div>");
function lg(t, e) {
  ue(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => Pe.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "nodeId",
    "position",
    "align",
    "offset",
    "isVisible",
    "children"
  ]);
  const u = Ln(), { getNodesBounds: d } = Dt(), h = Tn("svelteflow__node_id");
  let f = /* @__PURE__ */ _(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (k, P) => {
      const V = u.nodeLookup.get(P);
      return V && k.push(V), k;
    },
    []
  ))), v = /* @__PURE__ */ _(() => {
    const k = d(c(f));
    return k ? b2(k, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ _(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((k) => (k.internals.z || 5) + 1))), y = /* @__PURE__ */ _(() => u.nodes.filter((k) => k.selected).length), w = /* @__PURE__ */ _(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(k) {
      n(k), p();
    },
    get position() {
      return r();
    },
    set position(k = Pe.Top) {
      r(k), p();
    },
    get align() {
      return o();
    },
    set align(k = "center") {
      o(k), p();
    },
    get offset() {
      return i();
    },
    set offset(k = 10) {
      i(k), p();
    },
    get isVisible() {
      return s();
    },
    set isVisible(k) {
      s(k), p();
    },
    get children() {
      return a();
    },
    set children(k) {
      a(k), p();
    }
  }, x = he(), E = Q(x);
  {
    var C = (k) => {
      var P = i7();
      ot(
        P,
        (I, H) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": I,
          ...l,
          [Fn]: H
        }),
        [
          () => c(f).reduce((I, H) => `${I}${H.id} `, "").trim(),
          () => ({
            display: kp().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var V = Y(P);
      ze(V, () => a() ?? qe), W(P), Ft(P, (I, H) => xp?.(I, H), () => "root"), A(k, P);
    };
    ae(E, (k) => {
      u.domNode && c(w) && c(f) && k(C);
    });
  }
  return A(t, x), ce(b);
}
se(
  lg,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {},
    children: {}
  },
  [],
  [],
  !0
);
function Or(t) {
  const e = /* @__PURE__ */ _(Ln), n = /* @__PURE__ */ _(() => c(e).nodes), r = /* @__PURE__ */ _(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ _(() => {
    c(n);
    const a = [], l = Array.isArray(t), u = l ? t : [t];
    for (const d of u) {
      const h = c(r).get(d)?.internals.userNode;
      h && a.push({ id: h.id, type: h.type, data: h.data });
    }
    return (!z2(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Sd = "tinyflow-component", s7 = [
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
], a7 = [
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
], Lu = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], l7 = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], u7 = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class c7 {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(e) {
    if (typeof e.element != "string" && !(e.element instanceof Element))
      throw new Error("element must be a string or Element");
    this._setOptions(e), this._init();
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
    const e = document.createElement(Sd);
    e.style.display = "block", e.style.width = "100%", e.style.height = "100%", e.classList.add("tf-theme-light"), e.options = this.options, e.onInit = (n) => {
      this.svelteFlowInstance = n;
    }, this.rootEl.appendChild(e);
  }
  _setOptions(e) {
    this.options = {
      ...e
    };
  }
  getOptions() {
    return this.options;
  }
  getData() {
    return this.svelteFlowInstance.toObject();
  }
  setData(e) {
    this.options.data = e;
    const n = document.createElement(Sd);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const d7 = () => {
  let t = /* @__PURE__ */ we([]), e = /* @__PURE__ */ we([]), n = /* @__PURE__ */ we({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      F(t, r), F(e, o);
    },
    getNodes: () => c(t),
    setNodes: (r) => {
      F(t, r);
    },
    getEdges: () => c(e),
    setEdges: (r) => {
      F(e, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      F(n, r);
    },
    getNode: (r) => c(t).find((o) => o.id === r),
    addNode: (r) => {
      F(t, [...c(t), r]);
    },
    removeNode: (r) => {
      F(t, c(t).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      F(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      F(t, r(c(t)));
    },
    updateNodeData: (r, o) => {
      F(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      F(t, c(t).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(e).find((o) => o.id === r),
    addEdge: (r) => {
      F(e, [...c(e), r]);
    },
    removeEdge: (r) => {
      F(e, c(e).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      F(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      F(e, r(c(e)));
    },
    updateEdgeData: (r, o) => {
      F(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Je = d7(), h7 = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, f7 = (t, e) => ({
  classGroupId: t,
  validator: e
}), ug = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), Ys = "-", _d = [], p7 = "arbitrary..", g7 = (t) => {
  const e = m7(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return v7(o);
      const i = o.split(Ys), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return cg(i, s, e);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? h7(a, s) : s : a || _d;
      }
      return n[o] || _d;
    }
  };
}, cg = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const r = t[e], o = n.nextPart.get(r);
  if (o) {
    const l = cg(t, e + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = e === 0 ? t.join(Ys) : t.slice(e).join(Ys), a = i.length;
  for (let l = 0; l < a; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, v7 = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? p7 + r : void 0;
})(), m7 = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return y7(n, e);
}, y7 = (t, e) => {
  const n = ug();
  for (const r in t) {
    const o = t[r];
    Hu(o, n, r, e);
  }
  return n;
}, Hu = (t, e, n, r) => {
  const o = t.length;
  for (let i = 0; i < o; i++) {
    const s = t[i];
    w7(s, e, n, r);
  }
}, w7 = (t, e, n, r) => {
  if (typeof t == "string") {
    b7(t, e, n);
    return;
  }
  if (typeof t == "function") {
    x7(t, e, n, r);
    return;
  }
  k7(t, e, n, r);
}, b7 = (t, e, n) => {
  const r = t === "" ? e : dg(e, t);
  r.classGroupId = n;
}, x7 = (t, e, n, r) => {
  if (C7(t)) {
    Hu(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(f7(n, t));
}, k7 = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    Hu(l, dg(e, a), n, r);
  }
}, dg = (t, e) => {
  let n = t;
  const r = e.split(Ys), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = ug(), n.nextPart.set(s, a)), n = a;
  }
  return n;
}, C7 = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, $7 = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (i, s) => {
    n[i] = s, e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let s = n[i];
      if (s !== void 0)
        return s;
      if ((s = r[i]) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      i in n ? n[i] = s : o(i, s);
    }
  };
}, _l = "!", Ed = ":", S7 = [], Od = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), _7 = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: n
  } = t;
  let r = (o) => {
    const i = [];
    let s = 0, a = 0, l = 0, u;
    const d = o.length;
    for (let y = 0; y < d; y++) {
      const w = o[y];
      if (s === 0 && a === 0) {
        if (w === Ed) {
          i.push(o.slice(l, y)), l = y + 1;
          continue;
        }
        if (w === "/") {
          u = y;
          continue;
        }
      }
      w === "[" ? s++ : w === "]" ? s-- : w === "(" ? a++ : w === ")" && a--;
    }
    const h = i.length === 0 ? o : o.slice(l);
    let f = h, v = !1;
    h.endsWith(_l) ? (f = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(_l) && (f = h.slice(1), v = !0)
    );
    const m = u && u > l ? u - l : void 0;
    return Od(i, v, f, m);
  };
  if (e) {
    const o = e + Ed, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Od(S7, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, E7 = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((n, r) => {
    e.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i], a = s[0] === "[", l = e.has(s);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, O7 = (t) => ({
  cache: $7(t.cacheSize),
  parseClassName: _7(t),
  sortModifiers: E7(t),
  ...g7(t)
}), P7 = /\s+/, N7 = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(P7);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const d = a[u], {
      isExternal: h,
      modifiers: f,
      hasImportantModifier: v,
      baseClassName: m,
      maybePostfixModifierPosition: y
    } = n(d);
    if (h) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let w = !!y, b = r(w ? m.substring(0, y) : m);
    if (!b) {
      if (!w) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = r(m), !b) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      w = !1;
    }
    const x = f.length === 0 ? "" : f.length === 1 ? f[0] : i(f).join(":"), E = v ? x + _l : x, C = E + b;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const k = o(b, w);
    for (let P = 0; P < k.length; ++P) {
      const V = k[P];
      s.push(E + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, M7 = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = hg(n)) && (o && (o += " "), o += r);
  return o;
}, hg = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = hg(t[r])) && (n && (n += " "), n += e);
  return n;
}, El = (t, ...e) => {
  let n, r, o, i;
  const s = (l) => {
    const u = e.reduce((d, h) => h(d), t());
    return n = O7(u), r = n.cache.get, o = n.cache.set, i = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const d = N7(l, n);
    return o(l, d), d;
  };
  return i = s, (...l) => i(M7(...l));
}, z7 = [], Tt = (t) => {
  const e = (n) => n[t] || z7;
  return e.isThemeGetter = !0, e;
}, fg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, T7 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, A7 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, D7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, V7 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, I7 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, L7 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nr = (t) => T7.test(t), Fe = (t) => !!t && !Number.isNaN(Number(t)), Mr = (t) => !!t && Number.isInteger(Number(t)), tl = (t) => t.endsWith("%") && Fe(t.slice(0, -1)), sr = (t) => A7.test(t), gg = () => !0, H7 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  D7.test(t) && !V7.test(t)
), Ru = () => !1, R7 = (t) => I7.test(t), j7 = (t) => L7.test(t), B7 = (t) => !$e(t) && !Se(t), K7 = (t) => Xr(t, yg, Ru), $e = (t) => fg.test(t), Gr = (t) => Xr(t, wg, H7), Pd = (t) => Xr(t, U7, Fe), F7 = (t) => Xr(t, xg, gg), Z7 = (t) => Xr(t, bg, Ru), Nd = (t) => Xr(t, vg, Ru), W7 = (t) => Xr(t, mg, j7), ls = (t) => Xr(t, kg, R7), Se = (t) => pg.test(t), ni = (t) => xo(t, wg), X7 = (t) => xo(t, bg), Md = (t) => xo(t, vg), q7 = (t) => xo(t, yg), Y7 = (t) => xo(t, mg), us = (t) => xo(t, kg, !0), G7 = (t) => xo(t, xg, !0), Xr = (t, e, n) => {
  const r = fg.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, xo = (t, e, n = !1) => {
  const r = pg.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, vg = (t) => t === "position" || t === "percentage", mg = (t) => t === "image" || t === "url", yg = (t) => t === "length" || t === "size" || t === "bg-size", wg = (t) => t === "length", U7 = (t) => t === "number", bg = (t) => t === "family-name", xg = (t) => t === "number" || t === "weight", kg = (t) => t === "shadow", Ol = () => {
  const t = Tt("color"), e = Tt("font"), n = Tt("text"), r = Tt("font-weight"), o = Tt("tracking"), i = Tt("leading"), s = Tt("breakpoint"), a = Tt("container"), l = Tt("spacing"), u = Tt("radius"), d = Tt("shadow"), h = Tt("inset-shadow"), f = Tt("text-shadow"), v = Tt("drop-shadow"), m = Tt("blur"), y = Tt("perspective"), w = Tt("aspect"), b = Tt("ease"), x = Tt("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], k = () => [...C(), Se, $e], P = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], I = () => [Se, $e, l], H = () => [Nr, "full", "auto", ...I()], D = () => [Mr, "none", "subgrid", Se, $e], N = () => ["auto", {
    span: ["full", Mr, Se, $e]
  }, Mr, Se, $e], S = () => [Mr, "auto", Se, $e], z = () => ["auto", "min", "max", "fr", Se, $e], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], O = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], M = () => ["auto", ...I()], B = () => [Nr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()], q = () => [Nr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...I()], U = () => [Nr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...I()], T = () => [t, Se, $e], G = () => [...C(), Md, Nd, {
    position: [Se, $e]
  }], ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", q7, K7, {
    size: [Se, $e]
  }], Z = () => [tl, ni, Gr], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Se,
    $e
  ], J = () => ["", Fe, ni, Gr], oe = () => ["solid", "dashed", "dotted", "double"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => [Fe, tl, Md, Nd], me = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    Se,
    $e
  ], fe = () => ["none", Fe, Se, $e], ie = () => ["none", Fe, Se, $e], le = () => [Fe, Se, $e], ve = () => [Nr, "full", ...I()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [sr],
      breakpoint: [sr],
      color: [gg],
      container: [sr],
      "drop-shadow": [sr],
      ease: ["in", "out", "in-out"],
      font: [B7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [sr],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [sr],
      shadow: [sr],
      spacing: ["px", Fe],
      text: [sr],
      "text-shadow": [sr],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Nr, $e, Se, w]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Fe, $e, Se, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: H()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": H()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": H()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": H(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: H()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": H(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: H()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": H()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": H()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: H()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: H()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: H()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: H()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Mr, "auto", Se, $e]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Nr, "full", "auto", a, ...I()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Fe, Nr, "auto", "initial", "none", $e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Fe, Se, $e]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Fe, Se, $e]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Mr, "first", "last", "none", Se, $e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: N()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": S()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": S()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: N()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": S()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": S()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": z()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": z()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: I()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": I()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": I()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...O(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...O()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...O(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...O(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...O(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...O()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: I()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: I()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: I()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: I()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: I()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: I()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: I()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: I()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: I()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: I()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: I()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: M()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: M()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: M()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: M()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: M()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: M()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: M()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: M()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: M()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: M()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: M()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": I()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": I()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: B()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...q()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...q()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...q()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...U()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...U()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...U()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...B()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...B()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...B()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...B()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...B()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...B()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ni, Gr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, G7, F7]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tl, $e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [X7, Z7, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [$e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, Se, $e]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Fe, "none", Se, Pd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...I()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Se, $e]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Se, $e]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Fe, "from-font", "auto", Se, Gr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Fe, "auto", Se, $e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Se, $e]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Se, $e]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: G()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ee()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Mr, Se, $e],
          radial: ["", Se, $e],
          conic: [Mr, Se, $e]
        }, Y7, W7]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: X()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": X()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": X()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": X()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": X()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": X()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": X()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": X()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": X()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": X()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": X()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": X()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": X()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": X()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": X()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": J()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": J()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": T()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Fe, Se, $e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Fe, ni, Gr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          us,
          ls
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, us, ls]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Fe, Gr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, us, ls]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Fe, Se, $e]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...L(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Fe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ne()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ne()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ne()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ne()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ne()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ne()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ne()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ne()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ne()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ne()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ne()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ne()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ne()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ne()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [Se, $e]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ne()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ne()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Fe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ne()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ne()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: G()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ee()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: j()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Se, $e]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Se,
          $e
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: me()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Fe, Se, $e]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Fe, Se, $e]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          us,
          ls
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Fe, Se, $e]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Fe, Se, $e]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Fe, Se, $e]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Fe, Se, $e]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Fe, Se, $e]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Se,
          $e
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": me()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Fe, Se, $e]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Fe, Se, $e]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Fe, Se, $e]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Fe, Se, $e]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Fe, Se, $e]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Fe, Se, $e]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Fe, Se, $e]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Fe, Se, $e]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": I()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": I()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": I()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Se, $e]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Fe, "initial", Se, $e]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, Se, $e]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Fe, Se, $e]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, Se, $e]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, Se, $e]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: fe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": fe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": fe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": fe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Se, $e, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ve()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ve()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ve()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ve()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: T()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Se, $e]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": I()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": I()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": I()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Se, $e]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Fe, ni, Gr, Pd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, J7 = (t, {
  cacheSize: e,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: i = {}
}) => (ui(t, "cacheSize", e), ui(t, "prefix", n), ui(t, "experimentalParseClassName", r), cs(t.theme, i.theme), cs(t.classGroups, i.classGroups), cs(t.conflictingClassGroups, i.conflictingClassGroups), cs(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), ui(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), ds(t.theme, o.theme), ds(t.classGroups, o.classGroups), ds(t.conflictingClassGroups, o.conflictingClassGroups), ds(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Cg(t, o, "orderSensitiveModifiers"), t), ui = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, cs = (t, e) => {
  if (e)
    for (const n in e)
      ui(t, n, e[n]);
}, ds = (t, e) => {
  if (e)
    for (const n in e)
      Cg(t, e, n);
}, Cg = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, Q7 = (t, ...e) => typeof t == "function" ? El(Ol, t, ...e) : El(() => J7(Ol(), t), ...e), $g = /* @__PURE__ */ El(Ol);
function Nn(...t) {
  return $g(fi(t));
}
var e5 = /\s+/g, t5 = (t) => typeof t != "string" || !t ? t : t.replace(e5, " ").trim(), Gs = (...t) => {
  const e = [], n = (r) => {
    if (!r && r !== 0 && r !== 0n) return;
    if (Array.isArray(r)) {
      for (let i = 0, s = r.length; i < s; i++) n(r[i]);
      return;
    }
    const o = typeof r;
    if (o === "string" || o === "number" || o === "bigint") {
      if (o === "number" && r !== r) return;
      e.push(String(r));
    } else if (o === "object") {
      const i = Object.keys(r);
      for (let s = 0, a = i.length; s < a; s++) {
        const l = i[s];
        r[l] && e.push(l);
      }
    }
  };
  for (let r = 0, o = t.length; r < o; r++) {
    const i = t[r];
    i != null && n(i);
  }
  return e.length > 0 ? t5(e.join(" ")) : void 0;
}, zd = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, en = (t) => {
  if (!t || typeof t != "object") return !0;
  for (const e in t) return !1;
  return !0;
}, n5 = (t, e) => {
  if (t === e) return !0;
  if (!t || !e) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (!r.includes(i) || t[i] !== e[i]) return !1;
  }
  return !0;
}, r5 = (t, e) => {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const r = e[n];
      n in t ? t[n] = Gs(t[n], r) : t[n] = r;
    }
  return t;
}, Sg = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? Sg(r, e) : r && e.push(r);
  }
}, _g = (...t) => {
  const e = [];
  Sg(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, Pl = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = _g(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = Pl(o, i) : n[r] = i + " " + o;
    } else
      n[r] = o;
  }
  for (const r in e)
    r in t || (n[r] = e[r]);
  return n;
}, o5 = {
  twMerge: !0,
  twMergeConfig: {}
};
function i5() {
  let t = null, e = {}, n = !1;
  return {
    get cachedTwMerge() {
      return t;
    },
    set cachedTwMerge(r) {
      t = r;
    },
    get cachedTwMergeConfig() {
      return e;
    },
    set cachedTwMergeConfig(r) {
      e = r;
    },
    get didTwMergeConfigChange() {
      return n;
    },
    set didTwMergeConfigChange(r) {
      n = r;
    },
    reset() {
      t = null, e = {}, n = !1;
    }
  };
}
var lr = i5(), s5 = (t) => {
  const e = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...o5, ...r }, h = o?.base ? Gs(o.base, n?.base) : n?.base, f = o?.variants && !en(o.variants) ? Pl(s, o.variants) : s, v = o?.defaultVariants && !en(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !en(d.twMergeConfig) && !n5(d.twMergeConfig, lr.cachedTwMergeConfig) && (lr.didTwMergeConfigChange = !0, lr.cachedTwMergeConfig = d.twMergeConfig);
    const m = en(o?.slots), y = en(i) ? {} : {
      // add "base" to the slots object
      base: Gs(n?.base, m && o?.base),
      ...i
    }, w = m ? y : r5(
      { ...o?.slots },
      en(y) ? { base: n?.base } : y
    ), b = en(o?.compoundVariants) ? a : _g(o?.compoundVariants, a), x = (C) => {
      if (en(f) && en(i) && m)
        return t(h, C?.class, C?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const k = (z, $ = f, O = null, M = null) => {
        const B = $[z];
        if (!B || en(B))
          return null;
        const q = M?.[z] ?? C?.[z];
        if (q === null) return null;
        const U = zd(q);
        if (typeof U == "object")
          return null;
        const T = v?.[z], G = U ?? zd(T);
        return B[G || "false"];
      }, P = () => {
        if (!f) return null;
        const z = Object.keys(f), $ = [];
        for (let O = 0; O < z.length; O++) {
          const M = k(z[O], f);
          M && $.push(M);
        }
        return $;
      }, V = (z, $) => {
        if (!f || typeof f != "object") return null;
        const O = [];
        for (const M in f) {
          const B = k(M, f, z, $), q = z === "base" && typeof B == "string" ? B : B && B[z];
          q && O.push(q);
        }
        return O;
      }, I = {};
      for (const z in C) {
        const $ = C[z];
        $ !== void 0 && (I[z] = $);
      }
      const H = (z, $) => {
        const O = typeof C?.[z] == "object" ? {
          [z]: C[z]?.initial
        } : {};
        return {
          ...v,
          ...I,
          ...O,
          ...$
        };
      }, D = (z = [], $) => {
        const O = [], M = z.length;
        for (let B = 0; B < M; B++) {
          const { class: q, className: U, ...T } = z[B];
          let G = !0;
          const ee = H(null, $);
          for (const j in T) {
            const Z = T[j], X = ee[j];
            if (Array.isArray(Z)) {
              if (!Z.includes(X)) {
                G = !1;
                break;
              }
            } else {
              if ((Z == null || Z === !1) && (X == null || X === !1))
                continue;
              if (X !== Z) {
                G = !1;
                break;
              }
            }
          }
          G && (q && O.push(q), U && O.push(U));
        }
        return O;
      }, N = (z) => {
        const $ = D(b, z);
        if (!Array.isArray($)) return $;
        const O = {}, M = t;
        for (let B = 0; B < $.length; B++) {
          const q = $[B];
          if (typeof q == "string")
            O.base = M(O.base, q)(d);
          else if (typeof q == "object")
            for (const U in q)
              O[U] = M(O[U], q[U])(d);
        }
        return O;
      }, S = (z) => {
        if (l.length < 1) return null;
        const $ = {}, O = H(null, z);
        for (let M = 0; M < l.length; M++) {
          const {
            slots: B = [],
            class: q,
            className: U,
            ...T
          } = l[M];
          if (!en(T)) {
            let G = !0;
            for (const ee in T) {
              const j = O[ee], Z = T[ee];
              if (j === void 0 || (Array.isArray(Z) ? !Z.includes(j) : Z !== j)) {
                G = !1;
                break;
              }
            }
            if (!G) continue;
          }
          for (let G = 0; G < B.length; G++) {
            const ee = B[G];
            $[ee] || ($[ee] = []), $[ee].push([q, U]);
          }
        }
        return $;
      };
      if (!en(i) || !m) {
        const z = {};
        if (typeof w == "object" && !en(w)) {
          const $ = t;
          for (const O in w)
            z[O] = (M) => {
              const B = N(M), q = S(M);
              return $(
                w[O],
                V(O, M),
                B ? B[O] : void 0,
                q ? q[O] : void 0,
                M?.class,
                M?.className
              )(d);
            };
        }
        return z;
      }
      return t(
        h,
        P(),
        D(b),
        C?.class,
        C?.className
      )(d);
    }, E = () => {
      if (!(!f || typeof f != "object"))
        return Object.keys(f);
    };
    return x.variantKeys = E(), x.extend = o, x.base = h, x.slots = w, x.variants = f, x.defaultVariants = v, x.compoundSlots = l, x.compoundVariants = b, x;
  };
  return {
    tv: e,
    createTV: (n) => (r, o) => e(r, o ? Pl(n, o) : n)
  };
}, a5 = (t) => en(t) ? $g : Q7({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), l5 = (t, e) => {
  const n = Gs(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!lr.cachedTwMerge || lr.didTwMergeConfigChange) && (lr.didTwMergeConfigChange = !1, lr.cachedTwMerge = a5(lr.cachedTwMergeConfig)), lr.cachedTwMerge(n) || void 0);
}, u5 = (...t) => (e) => l5(t, e), { tv: c5 } = s5(u5);
const Td = c5({
  base: "nopan nodrag focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-sm border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 active:translate-y-px aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
      outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input aria-expanded:bg-muted aria-expanded:text-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
      destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-8",
      "icon-xs": "size-6 rounded-[min(var(--radius-md),6px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
      "icon-lg": "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
var d5 = /* @__PURE__ */ re("<a><!></a>"), h5 = /* @__PURE__ */ re("<button><!></button>");
function Qe(t, e) {
  ue(e, !0);
  let n = g(e, "class", 7), r = g(e, "variant", 7, "outline"), o = g(e, "size", 7, "default"), i = g(e, "ref", 15, null), s = g(e, "href", 23, () => {
  }), a = g(e, "type", 7, "button"), l = g(e, "disabled", 7), u = g(e, "children", 7), d = g(e, "primary", 7), h = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "class",
    "variant",
    "size",
    "ref",
    "href",
    "type",
    "disabled",
    "children",
    "primary"
  ]);
  d() && r("default");
  var f = {
    get class() {
      return n();
    },
    set class(b) {
      n(b), p();
    },
    get variant() {
      return r();
    },
    set variant(b = "outline") {
      r(b), p();
    },
    get size() {
      return o();
    },
    set size(b = "default") {
      o(b), p();
    },
    get ref() {
      return i();
    },
    set ref(b = null) {
      i(b), p();
    },
    get href() {
      return s();
    },
    set href(b = void 0) {
      s(b), p();
    },
    get type() {
      return a();
    },
    set type(b = "button") {
      a(b), p();
    },
    get disabled() {
      return l();
    },
    set disabled(b) {
      l(b), p();
    },
    get children() {
      return u();
    },
    set children(b) {
      u(b), p();
    },
    get primary() {
      return d();
    },
    set primary(b) {
      d(b), p();
    }
  }, v = he(), m = Q(v);
  {
    var y = (b) => {
      var x = d5();
      ot(
        x,
        (C) => ({
          "data-slot": "button",
          class: C,
          href: l() ? void 0 : s(),
          "aria-disabled": l(),
          role: l() ? "link" : void 0,
          tabindex: l() ? -1 : void 0,
          ...h
        }),
        [
          () => Nn(Td({ variant: r(), size: o() }), n())
        ]
      );
      var E = Y(x);
      ze(E, () => u() ?? qe), W(x), Kt(x, (C) => i(C), () => i()), A(b, x);
    }, w = (b) => {
      var x = h5();
      ot(
        x,
        (C) => ({
          "data-slot": "button",
          class: C,
          type: a(),
          disabled: l(),
          ...h
        }),
        [
          () => Nn(Td({ variant: r(), size: o() }), n())
        ]
      );
      var E = Y(x);
      ze(E, () => u() ?? qe), W(x), Kt(x, (C) => i(C), () => i()), A(b, x);
    };
    ae(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return A(t, v), ce(f);
}
se(
  Qe,
  {
    class: {},
    variant: {},
    size: {},
    ref: {},
    href: {},
    type: {},
    disabled: {},
    children: {},
    primary: {}
  },
  [],
  [],
  !0
);
function f5(t) {
  return typeof t == "function";
}
function Wi(t) {
  return t !== null && typeof t == "object";
}
const p5 = ["string", "number", "bigint", "boolean"];
function Nl(t) {
  return t == null || p5.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => Nl(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const Us = Symbol("box"), Eg = Symbol("is-writable");
function ge(t, e) {
  const n = /* @__PURE__ */ _(t);
  return e ? {
    [Us]: !0,
    [Eg]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Us]: !0,
    get current() {
      return t();
    }
  };
}
function Og(t) {
  return Wi(t) && Us in t;
}
function g5(t) {
  return Og(t) ? t : f5(t) ? ge(t) : Wn(t);
}
function Wn(t) {
  let e = /* @__PURE__ */ we($t(t));
  return {
    [Us]: !0,
    [Eg]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function Pg(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var Ad = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, v5 = /\n/g, m5 = /^\s*/, y5 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, w5 = /^:\s*/, b5 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, x5 = /^[;\s]*/, k5 = /^\s+|\s+$/g, C5 = `
`, Dd = "/", Vd = "*", Jr = "", $5 = "comment", S5 = "declaration";
function _5(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function o(m) {
    var y = m.match(v5);
    y && (n += y.length);
    var w = m.lastIndexOf(C5);
    r = ~w ? m.length - w : r + m.length;
  }
  function i() {
    var m = { line: n, column: r };
    return function(y) {
      return y.position = new s(m), u(), y;
    };
  }
  function s(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = e.source;
  }
  s.prototype.content = t;
  function a(m) {
    var y = new Error(
      e.source + ":" + n + ":" + r + ": " + m
    );
    if (y.reason = m, y.filename = e.source, y.line = n, y.column = r, y.source = t, !e.silent) throw y;
  }
  function l(m) {
    var y = m.exec(t);
    if (y) {
      var w = y[0];
      return o(w), t = t.slice(w.length), y;
    }
  }
  function u() {
    l(m5);
  }
  function d(m) {
    var y;
    for (m = m || []; y = h(); )
      y !== !1 && m.push(y);
    return m;
  }
  function h() {
    var m = i();
    if (!(Dd != t.charAt(0) || Vd != t.charAt(1))) {
      for (var y = 2; Jr != t.charAt(y) && (Vd != t.charAt(y) || Dd != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Jr === t.charAt(y - 1))
        return a("End of comment missing");
      var w = t.slice(2, y - 2);
      return r += 2, o(w), t = t.slice(y), r += 2, m({
        type: $5,
        comment: w
      });
    }
  }
  function f() {
    var m = i(), y = l(y5);
    if (y) {
      if (h(), !l(w5)) return a("property missing ':'");
      var w = l(b5), b = m({
        type: S5,
        property: Id(y[0].replace(Ad, Jr)),
        value: w ? Id(w[0].replace(Ad, Jr)) : Jr
      });
      return l(x5), b;
    }
  }
  function v() {
    var m = [];
    d(m);
    for (var y; y = f(); )
      y !== !1 && (m.push(y), d(m));
    return m;
  }
  return u(), v();
}
function Id(t) {
  return t ? t.replace(k5, Jr) : Jr;
}
function E5(t, e) {
  let n = null;
  if (!t || typeof t != "string")
    return n;
  const r = _5(t), o = typeof e == "function";
  return r.forEach((i) => {
    if (i.type !== "declaration")
      return;
    const { property: s, value: a } = i;
    o ? e(s, a, i) : a && (n = n || {}, n[s] = a);
  }), n;
}
const O5 = /\d/, P5 = ["-", "_", "/", "."];
function N5(t = "") {
  if (!O5.test(t))
    return t !== t.toLowerCase();
}
function M5(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = P5.includes(i);
    if (s === !0) {
      e.push(n), n = "", r = void 0;
      continue;
    }
    const a = N5(i);
    if (o === !1) {
      if (r === !1 && a === !0) {
        e.push(n), n = i, r = a;
        continue;
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const l = n.at(-1);
        e.push(n.slice(0, Math.max(0, n.length - 1))), n = l + i, r = a;
        continue;
      }
    }
    n += i, r = a, o = s;
  }
  return e.push(n), e;
}
function Ng(t) {
  return t ? M5(t).map((e) => T5(e)).join("") : "";
}
function z5(t) {
  return A5(Ng(t || ""));
}
function T5(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function A5(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function ci(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[Ng(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[z5(r)] = o;
  }
  return E5(t, n), e;
}
function gi(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function D5(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const V5 = D5(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function I5(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${V5(e)}: ${t[e]};`).join(`
`);
}
function ju(t = {}) {
  return I5(t).replace(`
`, " ");
}
const L5 = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
], H5 = new Set(L5);
function R5(t) {
  return H5.has(t);
}
function Gn(...t) {
  const e = { ...t[0] };
  for (let n = 1; n < t.length; n++) {
    const r = t[n];
    if (r) {
      for (const o of Object.keys(r)) {
        const i = e[o], s = r[o], a = typeof i == "function", l = typeof s == "function";
        if (a && R5(o)) {
          const u = i, d = s;
          e[o] = Pg(u, d);
        } else if (a && l)
          e[o] = gi(i, s);
        else if (o === "class") {
          const u = Nl(i), d = Nl(s);
          u && d ? e[o] = fi(i, s) : u ? e[o] = fi(i) : d && (e[o] = fi(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", f = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && f) {
            const v = ci(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = ci(i);
            e[o] = { ...v, ...s };
          } else if (h && f) {
            const v = ci(i), m = ci(s);
            e[o] = { ...v, ...m };
          } else u ? e[o] = i : d ? e[o] = s : h ? e[o] = i : f && (e[o] = s);
        } else
          e[o] = s !== void 0 ? s : i;
      }
      for (const o of Object.getOwnPropertySymbols(r)) {
        const i = e[o], s = r[o];
        e[o] = s !== void 0 ? s : i;
      }
    }
  }
  return typeof e.style == "object" && (e.style = ju(e.style).replaceAll(`
`, " ")), e.hidden === !1 && (e.hidden = void 0, delete e.hidden), e.disabled === !1 && (e.disabled = void 0, delete e.disabled), e;
}
const j5 = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
}, B5 = ju(j5), Mg = typeof window < "u" ? window : void 0;
function K5(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let F5 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = Mg, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = vo((r) => {
      const o = St(e, "focusin", r), i = St(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? K5(this.#e) : null;
  }
};
new F5();
function Z5(t) {
  return typeof t == "function";
}
class qr {
  #e;
  #t;
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(e) {
    this.#e = e, this.#t = Symbol(e);
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return this.#t;
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return d1(this.#t);
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const e = Tn(this.#t);
    if (e === void 0)
      throw new Error(`Context "${this.#e}" not found`);
    return e;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(e) {
    const n = Tn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return ao(this.#t, e);
  }
}
function W5(t, e) {
  switch (t) {
    case "post":
      Ze(e);
      break;
    case "pre":
      nn(e);
      break;
  }
}
function zg(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  W5(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = yt(() => n(a, s));
    return s = a, l;
  });
}
function Mt(t, e, n) {
  zg(t, "post", e, n);
}
function X5(t, e, n) {
  zg(t, "pre", e, n);
}
Mt.pre = X5;
function Ld(t) {
  return Z5(t) ? t() : t;
}
class q5 {
  // no need to use `$state` here since we are using createSubscriber
  #e = { width: 0, height: 0 };
  #t = !1;
  #n;
  #r;
  #o;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #i = /* @__PURE__ */ _(() => (c(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ _(() => (c(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ _(() => {
    const e = Ld(this.#r);
    if (e)
      return vo((n) => {
        if (!this.#o) return;
        const r = new this.#o.ResizeObserver((o) => {
          this.#t = !0;
          for (const i of o) {
            const s = this.#n.box === "content-box" ? i.contentBoxSize : i.borderBoxSize, a = Array.isArray(s) ? s : [s];
            this.#e.width = a.reduce((l, u) => Math.max(l, u.inlineSize), 0), this.#e.height = a.reduce((l, u) => Math.max(l, u.blockSize), 0);
          }
          n();
        });
        return r.observe(e), () => {
          this.#t = !1, r.disconnect();
        };
      });
  });
  constructor(e, n = { box: "border-box" }) {
    this.#o = n.window ?? Mg, this.#n = n, this.#r = e, this.#e = { width: 0, height: 0 };
  }
  calculateSize() {
    const e = Ld(this.#r);
    if (!e || !this.#o)
      return;
    const n = e.offsetWidth, r = e.offsetHeight;
    if (this.#n.box === "border-box")
      return { width: n, height: r };
    const o = this.#o.getComputedStyle(e), i = parseFloat(o.paddingLeft) + parseFloat(o.paddingRight), s = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom), a = parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), l = parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), u = n - i - a, d = r - s - l;
    return { width: u, height: d };
  }
  getSize() {
    return this.#t ? this.#e : this.calculateSize() ?? this.#e;
  }
  get current() {
    return c(this.#s)?.(), this.getSize();
  }
  get width() {
    return c(this.#i);
  }
  get height() {
    return c(this.#a);
  }
}
class Y5 {
  #e = () => {
  };
  #t = /* @__PURE__ */ _(() => this.#e());
  constructor(e, n) {
    let r;
    n !== void 0 && (r = n), this.#e = () => {
      try {
        return r;
      } finally {
        r = e();
      }
    };
  }
  get current() {
    return c(this.#t);
  }
}
function qo(t) {
  Ze(() => () => {
    t();
  });
}
function G5(t) {
  Ze(() => yt(() => t()));
}
function U5(t, e) {
  return setTimeout(e, t);
}
function Xi(t) {
  af().then(t);
}
const J5 = 1, Q5 = 9, e3 = 11;
function Ml(t) {
  return Wi(t) && t.nodeType === J5 && typeof t.nodeName == "string";
}
function Tg(t) {
  return Wi(t) && t.nodeType === Q5;
}
function t3(t) {
  return Wi(t) && t.constructor?.name === "VisualViewport";
}
function n3(t) {
  return Wi(t) && t.nodeType !== void 0;
}
function Ag(t) {
  return n3(t) && t.nodeType === e3 && "host" in t;
}
function r3(t, e) {
  if (!t || !e || !Ml(t) || !Ml(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && Ag(n)) {
    let r = e;
    for (; r; ) {
      if (t === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function o3(t) {
  return Tg(t) ? t : t3(t) ? t.document : t?.ownerDocument ?? document;
}
function Dg(t) {
  return Ag(t) ? Dg(t.host) : Tg(t) ? t.defaultView ?? window : Ml(t) ? t.ownerDocument?.defaultView ?? window : window;
}
function i3(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class qi {
  element;
  #e = /* @__PURE__ */ _(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    F(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = ge(e) : this.element = e;
  }
  getDocument = () => o3(this.root);
  getWindow = () => this.getDocument().defaultView ?? window;
  getActiveElement = () => i3(this.root);
  isActiveElement = (e) => e === this.getActiveElement();
  getElementById(e) {
    return this.root.getElementById(e);
  }
  querySelector = (e) => this.root ? this.root.querySelector(e) : null;
  querySelectorAll = (e) => this.root ? this.root.querySelectorAll(e) : [];
  setTimeout = (e, n) => this.getWindow().setTimeout(e, n);
  clearTimeout = (e) => this.getWindow().clearTimeout(e);
}
function Lr(t, e) {
  return {
    [Y1()]: (n) => Og(t) ? (t.current = n, yt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), yt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function zl(t) {
  return t ? "true" : "false";
}
function Js(t) {
  return t ? "" : void 0;
}
function Hd(t) {
  return t ? !0 : void 0;
}
function Vg(t) {
  return t ? "open" : "closed";
}
function s3(t, e) {
  return e ? "mixed" : t ? "true" : "false";
}
class a3 {
  #e;
  #t;
  attrs;
  constructor(e) {
    this.#e = e.getVariant ? e.getVariant() : null, this.#t = this.#e ? `data-${this.#e}-` : `data-${e.component}-`, this.getAttr = this.getAttr.bind(this), this.selector = this.selector.bind(this), this.attrs = Object.fromEntries(e.parts.map((n) => [n, this.getAttr(n)]));
  }
  getAttr(e, n) {
    return n ? `data-${n}-${e}` : `${this.#t}${e}`;
  }
  selector(e, n) {
    return `[${this.getAttr(e, n)}]`;
  }
}
function Bu(t) {
  const e = new a3(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const di = "ArrowDown", _o = "ArrowUp", Ig = "End", Tl = "Enter", l3 = "Escape", Lg = "Home", Hg = "PageDown", Rg = "PageUp", Ss = " ", Rd = "Tab", jg = typeof document < "u", Al = u3();
function u3() {
  return jg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Dl(t) {
  return t instanceof HTMLElement;
}
function c3(t) {
  return t instanceof Element || t instanceof SVGElement;
}
function d3(t) {
  return t !== null;
}
class h3 {
  #e;
  #t = null;
  constructor(e) {
    this.#e = e, qo(() => this.#n());
  }
  #n() {
    this.#t && (window.cancelAnimationFrame(this.#t), this.#t = null);
  }
  run(e) {
    this.#n();
    const n = this.#e.ref.current;
    if (n) {
      if (typeof n.getAnimations != "function") {
        this.#r(e);
        return;
      }
      this.#t = window.requestAnimationFrame(() => {
        const r = n.getAnimations();
        if (r.length === 0) {
          this.#r(e);
          return;
        }
        Promise.allSettled(r.map((o) => o.finished)).then(() => {
          this.#r(e);
        });
      });
    }
  }
  #r(e) {
    const n = () => {
      e();
    };
    this.#e.afterTick ? Xi(n) : n();
  }
}
class f3 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ we(!1);
  constructor(e) {
    this.#e = e, F(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new h3({ ref: this.#e.ref, afterTick: this.#e.open }), Mt(() => this.#e.open.current, (n) => {
      n && F(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || F(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function Ye() {
}
function Qn(t, e) {
  return `bits-${t}`;
}
function Bg(t, e) {
  ue(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  }, o = he(), i = Q(o);
  return G1(i, n, (s) => {
    var a = he(), l = Q(a);
    ze(l, () => n() ?? qe), A(s, a);
  }), A(t, o), ce(r);
}
se(Bg, { children: {} }, [], [], !0);
const p3 = new qr("BitsConfig");
function g3() {
  const t = new v3(null, {});
  return p3.getOr(t).opts;
}
class v3 {
  opts;
  constructor(e, n) {
    const r = m3(e, n);
    this.opts = {
      defaultPortalTo: r((o) => o.defaultPortalTo),
      defaultLocale: r((o) => o.defaultLocale)
    };
  }
}
function m3(t, e) {
  return (n) => ge(() => {
    const r = n(e)?.current;
    if (r !== void 0)
      return r;
    if (t !== null)
      return n(t.opts)?.current;
  });
}
function y3(t, e) {
  return (n) => {
    const r = g3();
    return ge(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const w3 = y3((t) => t.defaultPortalTo, "body");
function Vl(t, e) {
  ue(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = w3(() => n()), s = h1();
  let a = /* @__PURE__ */ _(l);
  function l() {
    if (!jg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (hf(u), u = null);
  }
  Mt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = yu(Bg, { target: y, props: { children: r() }, context: s }), () => {
      d();
    };
  });
  var h = {
    get to() {
      return n();
    },
    set to(y) {
      n(y), p();
    },
    get children() {
      return r();
    },
    set children(y) {
      r(y), p();
    },
    get disabled() {
      return o();
    },
    set disabled(y) {
      o(y), p();
    }
  }, f = he(), v = Q(f);
  {
    var m = (y) => {
      var w = he(), b = Q(w);
      ze(b, () => r() ?? qe), A(y, w);
    };
    ae(v, (y) => {
      o() && y(m);
    });
  }
  return A(t, f), ce(h);
}
se(Vl, { to: {}, children: {}, disabled: {} }, [], [], !0);
function jd(t, e = 500) {
  let n = null;
  const r = (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      t(...o);
    }, e);
  };
  return r.destroy = () => {
    n !== null && (clearTimeout(n), n = null);
  }, r;
}
function Kg(t, e) {
  return t === e || t.contains(e);
}
function Fg(t) {
  return t?.ownerDocument ?? document;
}
function b3(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var Zg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Il = /* @__PURE__ */ Zg.join(","), Wg = typeof Element > "u", Bo = Wg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Qs = !Wg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, ea = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : ea(t.parentNode));
  return i;
}, x3 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, Xg = function(t, e, n) {
  if (ea(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(Il));
  return e && Bo.call(t, Il) && r.unshift(t), r = r.filter(n), r;
}, ta = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!ea(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = ta(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = Bo.call(i, Il);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !ea(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var f = ta(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, f) : r.push({
            scopeParent: i,
            candidates: f
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, qg = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Yg = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || x3(t)) && !qg(t) ? 0 : t.tabIndex;
}, k3 = function(t, e) {
  var n = Yg(t);
  return n < 0 && e && !qg(t) ? 0 : n;
}, C3 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, Gg = function(t) {
  return t.tagName === "INPUT";
}, $3 = function(t) {
  return Gg(t) && t.type === "hidden";
}, S3 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, _3 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, E3 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || Qs(t), n = function(i) {
    return e.querySelectorAll('input[type="radio"][name="' + i + '"]');
  }, r;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    r = n(window.CSS.escape(t.name));
  else
    try {
      r = n(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var o = _3(r, t.form);
  return !o || o === t;
}, O3 = function(t) {
  return Gg(t) && t.type === "radio";
}, P3 = function(t) {
  return O3(t) && !E3(t);
}, N3 = function(t) {
  var e, n = t && Qs(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = Qs(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, Bd = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, M3 = function(t, e) {
  var n = e.displayCheck, r = e.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in t) {
    var o = t.checkVisibility({
      // Checking opacity might be desirable for some use cases, but natively,
      // opacity zero elements _are_ focusable and tabbable.
      checkOpacity: !1,
      opacityProperty: !1,
      contentVisibilityAuto: !0,
      visibilityProperty: !0,
      // This is an alias for `visibilityProperty`. Contemporary browsers
      // support both. However, this alias has wider browser support (Chrome
      // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
      // we include it anyway.
      checkVisibilityCSS: !0
    });
    return !o;
  }
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = Bo.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Bo.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = Qs(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return Bd(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (N3(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Bd(t);
  return !1;
}, z3 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return Bo.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, na = function(t, e) {
  return !(e.disabled || $3(e) || M3(e, t) || // For a details element with a summary, the summary element gets the focus
  S3(e) || z3(e));
}, Kd = function(t, e) {
  return !(P3(e) || Yg(e) < 0 || !na(t, e));
}, T3 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, Ug = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = k3(s, i), l = i ? Ug(r.candidates) : s;
    a === 0 ? i ? e.push.apply(e, l) : e.push(s) : n.push({
      documentOrder: o,
      tabIndex: a,
      item: r,
      isScope: i,
      content: l
    });
  }), n.sort(C3).reduce(function(r, o) {
    return o.isScope ? r.push.apply(r, o.content) : r.push(o.content), r;
  }, []).concat(e);
}, A3 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = ta([t], e.includeContainer, {
    filter: Kd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: T3
  }) : n = Xg(t, e.includeContainer, Kd.bind(null, e)), Ug(n);
}, D3 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = ta([t], e.includeContainer, {
    filter: na.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = Xg(t, e.includeContainer, na.bind(null, e)), n;
}, V3 = /* @__PURE__ */ Zg.concat("iframe:not([inert]):not([inert] *)").join(","), I3 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return Bo.call(t, V3) === !1 ? !1 : na(e, t);
};
function L3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function H3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === 0 ? n ? t[t.length - 1] : void 0 : t[e - 1];
}
function R3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e + n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function j3(t, e, n, r = !0) {
  if (t.length === 0 || e < 0 || e >= t.length)
    return;
  let o = e - n;
  return r ? o = (o % t.length + t.length) % t.length : o = Math.max(0, Math.min(o, t.length - 1)), t[o];
}
function Ku(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((f) => f.toLowerCase().startsWith(u)).length <= 1)
      return Ku(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((f) => f.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const f = n ? t.indexOf(n) : -1;
      return Fd(h, Math.max(f, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = Fd(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function Fd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const B3 = { afterMs: 1e4, onChange: Ye };
function Jg(t, e) {
  const { afterMs: n, onChange: r, getWindow: o } = { ...B3, ...e };
  let i = null, s = /* @__PURE__ */ we($t(t));
  function a() {
    return o().setTimeout(
      () => {
        F(s, t, !0), r?.(t);
      },
      n
    );
  }
  return Ze(() => () => {
    i && o().clearTimeout(i);
  }), ge(() => c(s), (l) => {
    F(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class K3 {
  #e;
  #t;
  #n = /* @__PURE__ */ _(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ _(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = Jg("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = Ku(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
    return a && c(this.#n)(a), a;
  }
  resetTypeahead() {
    this.#t.current = "";
  }
  get search() {
    return this.#t.current;
  }
}
const F3 = "data-context-menu-trigger", Z3 = "data-context-menu-content";
Bu({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
class Fu {
  static create(e) {
    return new Fu(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = Ye;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Ze(() => {
      this.#i = Fg(this.opts.ref.current);
    });
    let n = Ye;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    Mt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return U5(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), qo(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Xi(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return gi(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      St(this.#i, "pointerdown", gi(this.#h, this.#f), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      St(this.#i, "pointerdown", gi(this.#p, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      St(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = Zd(e)), this.#e.current(e);
  };
  #d = jd(
    (e) => {
      if (!this.opts.ref.current) {
        this.#s();
        return;
      }
      const n = this.opts.isValidEvent.current(e, this.opts.ref.current) || q3(e, this.opts.ref.current);
      if (!this.#r || this.#w() || !n) {
        this.#s();
        return;
      }
      let r = e;
      if (r.defaultPrevented && (r = Zd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
        this.#s();
        return;
      }
      e.pointerType === "touch" ? (this.#s(), this.#s = St(this.#i, "click", this.#c, { once: !0 })) : this.#e.current(r);
    },
    10
  );
  #h = (e) => {
    this.#n[e.type] = !0;
  };
  #p = (e) => {
    this.#n[e.type] = !1;
  };
  #f = () => {
    this.opts.ref.current && (this.#r = X3(this.opts.ref.current));
  };
  #y = (e) => this.opts.ref.current ? Kg(this.opts.ref.current, e) : !1;
  #v = jd(
    () => {
      for (const e in this.#n)
        this.#n[e] = !1;
      this.#r = !1;
    },
    20
  );
  #w() {
    return Object.values(this.#n).some(Boolean);
  }
  #m = () => {
    this.#o = !0;
  };
  #g = () => {
    this.#o = !1;
  };
  props = {
    onfocuscapture: this.#m,
    onblurcapture: this.#g
  };
}
function W3(t = [...globalThis.bitsDismissableLayers]) {
  return t.findLast(([e, { current: n }]) => n === "close" || n === "ignore");
}
function X3(t) {
  const e = [...globalThis.bitsDismissableLayers], n = W3(e);
  if (n) return n[0].opts.ref.current === t;
  const [r] = e[0];
  return r.opts.ref.current === t;
}
function q3(t, e) {
  const n = t.target;
  if (!c3(n)) return !1;
  const r = !!n.closest(`[${F3}]`);
  if ("button" in t && t.button > 0 && !r) return !1;
  if ("button" in t && t.button === 0 && r) return !0;
  const o = !!e.closest(`[${Z3}]`);
  return r && o ? !1 : Fg(n).documentElement.contains(n) && !Kg(e, n) && b3(t, e);
}
function Zd(t) {
  const e = t.currentTarget, n = t.target;
  let r;
  t instanceof PointerEvent ? r = new PointerEvent(t.type, t) : r = new PointerEvent("pointerdown", t);
  let o = !1;
  return new Proxy(r, {
    get: (i, s) => s === "currentTarget" ? e : s === "target" ? n : s === "preventDefault" ? () => {
      o = !0, typeof i.preventDefault == "function" && i.preventDefault();
    } : s === "defaultPrevented" ? o : s in i ? i[s] : t[s]
  });
}
function Qg(t, e) {
  ue(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, Ye), o = g(e, "onFocusOutside", 7, Ye), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = Fu.create({
    id: ge(() => i()),
    interactOutsideBehavior: ge(() => n()),
    onInteractOutside: ge(() => r()),
    enabled: ge(() => a()),
    onFocusOutside: ge(() => o()),
    isValidEvent: ge(() => l()),
    ref: u()
  });
  var h = {
    get interactOutsideBehavior() {
      return n();
    },
    set interactOutsideBehavior(m = "close") {
      n(m), p();
    },
    get onInteractOutside() {
      return r();
    },
    set onInteractOutside(m = Ye) {
      r(m), p();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = Ye) {
      o(m), p();
    },
    get id() {
      return i();
    },
    set id(m) {
      i(m), p();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), p();
    },
    get enabled() {
      return a();
    },
    set enabled(m) {
      a(m), p();
    },
    get isValidEvent() {
      return l();
    },
    set isValidEvent(m = () => !1) {
      l(m), p();
    },
    get ref() {
      return u();
    },
    set ref(m) {
      u(m), p();
    }
  }, f = he(), v = Q(f);
  return ze(v, () => s() ?? qe, () => ({ props: d.props })), A(t, f), ce(h);
}
se(
  Qg,
  {
    interactOutsideBehavior: {},
    onInteractOutside: {},
    onFocusOutside: {},
    id: {},
    children: {},
    enabled: {},
    isValidEvent: {},
    ref: {}
  },
  [],
  [],
  !0
);
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
class Zu {
  static create(e) {
    return new Zu(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new qi(this.opts.ref);
    let n = Ye;
    Mt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
      n(), globalThis.bitsEscapeLayers.delete(this);
    }));
  }
  #e = () => St(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
  #t = (e) => {
    if (e.key !== l3 || !Y3(this)) return;
    const n = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const r = this.opts.escapeKeydownBehavior.current;
    r !== "close" && r !== "defer-otherwise-close" || this.opts.onEscapeKeydown.current(n);
  };
}
function Y3(t) {
  const e = [...globalThis.bitsEscapeLayers], n = e.findLast(([o, { current: i }]) => i === "close" || i === "ignore");
  if (n) return n[0] === t;
  const [r] = e[0];
  return r === t;
}
function ev(t, e) {
  ue(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, Ye), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  Zu.create({
    escapeKeydownBehavior: ge(() => n()),
    onEscapeKeydown: ge(() => r()),
    enabled: ge(() => i()),
    ref: s()
  });
  var a = {
    get escapeKeydownBehavior() {
      return n();
    },
    set escapeKeydownBehavior(d = "close") {
      n(d), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(d = Ye) {
      r(d), p();
    },
    get children() {
      return o();
    },
    set children(d) {
      o(d), p();
    },
    get enabled() {
      return i();
    },
    set enabled(d) {
      i(d), p();
    },
    get ref() {
      return s();
    },
    set ref(d) {
      s(d), p();
    }
  }, l = he(), u = Q(l);
  return ze(u, () => o() ?? qe), A(t, l), ce(a);
}
se(
  ev,
  {
    escapeKeydownBehavior: {},
    onEscapeKeydown: {},
    children: {},
    enabled: {},
    ref: {}
  },
  [],
  [],
  !0
);
class Wu {
  static instance;
  #e = Wn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Wu()), this.instance;
  }
  register(e) {
    const n = this.getActive();
    n && n !== e && n.pause();
    const r = document.activeElement;
    r && r !== document.body && this.#n.set(e, r), this.#e.current = this.#e.current.filter((o) => o !== e), this.#e.current.unshift(e);
  }
  unregister(e) {
    this.#e.current = this.#e.current.filter((r) => r !== e);
    const n = this.getActive();
    n && n.resume();
  }
  getActive() {
    return this.#e.current[0];
  }
  setFocusMemory(e, n) {
    this.#t.set(e, n);
  }
  getFocusMemory(e) {
    return this.#t.get(e);
  }
  isActiveScope(e) {
    return this.getActive() === e;
  }
  setPreFocusMemory(e, n) {
    this.#n.set(e, n);
  }
  getPreFocusMemory(e) {
    return this.#n.get(e);
  }
  clearPreFocusMemory(e) {
    this.#n.delete(e);
  }
}
class Xu {
  #e = !1;
  #t = null;
  #n = Wu.getInstance();
  #r = [];
  #o;
  constructor(e) {
    this.#o = e;
  }
  get paused() {
    return this.#e;
  }
  pause() {
    this.#e = !0;
  }
  resume() {
    this.#e = !1;
  }
  #i() {
    for (const e of this.#r)
      e();
    this.#r = [];
  }
  mount(e) {
    this.#t && this.unmount(), this.#t = e, this.#n.register(this), this.#l(), this.#a();
  }
  unmount() {
    this.#t && (this.#i(), this.#s(), this.#n.unregister(this), this.#n.clearPreFocusMemory(this), this.#t = null);
  }
  #a() {
    if (!this.#t) return;
    const e = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: !1, cancelable: !0 });
    this.#o.onOpenAutoFocus.current(e), e.defaultPrevented || requestAnimationFrame(() => {
      if (!this.#t) return;
      const n = this.#c();
      n ? (n.focus(), this.#n.setFocusMemory(this, n)) : this.#t.focus();
    });
  }
  #s() {
    const e = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: !1, cancelable: !0 });
    if (this.#o.onCloseAutoFocus.current?.(e), !e.defaultPrevented) {
      const n = this.#n.getPreFocusMemory(this);
      if (n && document.contains(n))
        try {
          n.focus();
        } catch {
          document.body.focus();
        }
    }
  }
  #l() {
    if (!this.#t || !this.#o.trap.current) return;
    const e = this.#t, n = e.ownerDocument, r = (s) => {
      if (this.#e || !this.#n.isActiveScope(this)) return;
      const a = s.target;
      if (a)
        if (e.contains(a))
          this.#n.setFocusMemory(this, a);
        else {
          const l = this.#n.getFocusMemory(this);
          if (l && e.contains(l) && I3(l))
            s.preventDefault(), l.focus();
          else {
            const u = this.#c(), d = this.#d()[0];
            (u || d || e).focus();
          }
        }
    }, o = (s) => {
      if (!this.#o.loop || this.#e || s.key !== "Tab" || !this.#n.isActiveScope(this)) return;
      const a = this.#u();
      if (a.length === 0) return;
      const l = a[0], u = a[a.length - 1];
      !s.shiftKey && n.activeElement === u ? (s.preventDefault(), l.focus()) : s.shiftKey && n.activeElement === l && (s.preventDefault(), u.focus());
    };
    this.#r.push(St(n, "focusin", r, { capture: !0 }), St(e, "keydown", o));
    const i = new MutationObserver(() => {
      const s = this.#n.getFocusMemory(this);
      if (s && !e.contains(s)) {
        const a = this.#c(), l = this.#d()[0], u = a || l;
        u ? (u.focus(), this.#n.setFocusMemory(this, u)) : e.focus();
      }
    });
    i.observe(e, { childList: !0, subtree: !0 }), this.#r.push(() => i.disconnect());
  }
  #u() {
    return this.#t ? A3(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  #c() {
    return this.#u()[0] || null;
  }
  #d() {
    return this.#t ? D3(this.#t, { includeContainer: !1, getShadowRoot: !0 }) : [];
  }
  static use(e) {
    let n = null;
    return Mt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new Xu(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), qo(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function tv(t, e) {
  ue(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, Ye), s = g(e, "onOpenAutoFocus", 7, Ye), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = Xu.use({
    enabled: ge(() => n()),
    trap: ge(() => r()),
    loop: o(),
    onCloseAutoFocus: ge(() => i()),
    onOpenAutoFocus: ge(() => s()),
    ref: l()
  });
  var d = {
    get enabled() {
      return n();
    },
    set enabled(v = !1) {
      n(v), p();
    },
    get trapFocus() {
      return r();
    },
    set trapFocus(v = !1) {
      r(v), p();
    },
    get loop() {
      return o();
    },
    set loop(v = !1) {
      o(v), p();
    },
    get onCloseAutoFocus() {
      return i();
    },
    set onCloseAutoFocus(v = Ye) {
      i(v), p();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = Ye) {
      s(v), p();
    },
    get focusScope() {
      return a();
    },
    set focusScope(v) {
      a(v), p();
    },
    get ref() {
      return l();
    },
    set ref(v) {
      l(v), p();
    }
  }, h = he(), f = Q(h);
  return ze(f, () => a() ?? qe, () => ({ props: u.props })), A(t, h), ce(d);
}
se(
  tv,
  {
    enabled: {},
    trapFocus: {},
    loop: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    focusScope: {},
    ref: {}
  },
  [],
  [],
  !0
);
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
class qu {
  static create(e) {
    return new qu(e);
  }
  opts;
  domContext;
  #e = Ye;
  constructor(e) {
    this.opts = e, this.domContext = new qi(e.ref);
    let n = Ye;
    Mt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return gi(St(this.domContext.getDocument(), "pointerdown", this.#n), St(this.domContext.getDocument(), "pointerup", Pg(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !Dl(n) || !Dl(r) || !this.opts.enabled.current || !U3(this) || !r3(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = G3(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = Ye;
  };
}
const Wd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function G3(t, e) {
  const n = Wd(e), r = Wd(t);
  return hs(e, "none"), hs(t, "text"), () => {
    hs(e, n), hs(t, r);
  };
}
function hs(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function U3(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function nv(t, e) {
  ue(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, Ye), o = g(e, "onPointerUp", 7, Ye), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  qu.create({
    id: ge(() => i()),
    onPointerDown: ge(() => r()),
    onPointerUp: ge(() => o()),
    enabled: ge(() => a() && n()),
    ref: l()
  });
  var u = {
    get preventOverflowTextSelection() {
      return n();
    },
    set preventOverflowTextSelection(f = !0) {
      n(f), p();
    },
    get onPointerDown() {
      return r();
    },
    set onPointerDown(f = Ye) {
      r(f), p();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(f = Ye) {
      o(f), p();
    },
    get id() {
      return i();
    },
    set id(f) {
      i(f), p();
    },
    get children() {
      return s();
    },
    set children(f) {
      s(f), p();
    },
    get enabled() {
      return a();
    },
    set enabled(f) {
      a(f), p();
    },
    get ref() {
      return l();
    },
    set ref(f) {
      l(f), p();
    }
  }, d = he(), h = Q(d);
  return ze(h, () => s() ?? qe), A(t, d), ce(u);
}
se(
  nv,
  {
    preventOverflowTextSelection: {},
    onPointerDown: {},
    onPointerUp: {},
    id: {},
    children: {},
    enabled: {},
    ref: {}
  },
  [],
  [],
  !0
);
globalThis.bitsIdCounter ??= { current: 0 };
function ra(t = "bits") {
  return globalThis.bitsIdCounter.current++, `${t}-${globalThis.bitsIdCounter.current}`;
}
class J3 {
  #e;
  #t = 0;
  #n = /* @__PURE__ */ we();
  #r;
  constructor(e) {
    this.#e = e;
  }
  #o() {
    this.#t -= 1, this.#r && this.#t <= 0 && (this.#r(), F(this.#n, void 0), this.#r = void 0);
  }
  get(...e) {
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = mo(() => {
      F(this.#n, this.#e(...e), !0);
    })), Ze(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const _s = new ix();
let fs = /* @__PURE__ */ we(null), nl = null, ri = null, oi = !1;
const Xd = ge(() => {
  for (const t of _s.values())
    if (t) return !0;
  return !1;
});
let rl = null;
const Q3 = new J3(() => {
  function t() {
    document.body.setAttribute("style", c(fs) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Al && nl?.(), F(fs, null);
  }
  function e() {
    ri !== null && (window.clearTimeout(ri), ri = null);
  }
  function n(o, i) {
    e(), oi = !0, rl = Date.now();
    const s = rl, a = () => {
      ri = null, rl === s && (rv(_s) ? oi = !1 : (oi = !1, i()));
    }, l = o === null ? 24 : o;
    ri = window.setTimeout(a, l);
  }
  function r() {
    c(fs) === null && _s.size === 0 && !oi && F(fs, document.body.getAttribute("style"), !0);
  }
  return Mt(() => Xd.current, () => {
    if (!Xd.current) return;
    r(), oi = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", Al && (nl = St(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), Xi(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), qo(() => () => {
    nl?.();
  }), {
    get lockMap() {
      return _s;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class ek {
  #e = ra();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = Q3.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = ge(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), qo(() => {
      if (this.#r.lockMap.delete(this.#e), rv(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function rv(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function Ll(t, e) {
  ue(e, !0);
  let n = g(e, "preventScroll", 7, !0), r = g(e, "restoreScrollDelay", 7, null);
  n() && new ek(n(), () => r());
  var o = {
    get preventScroll() {
      return n();
    },
    set preventScroll(i = !0) {
      n(i), p();
    },
    get restoreScrollDelay() {
      return r();
    },
    set restoreScrollDelay(i = null) {
      r(i), p();
    }
  };
  return ce(o);
}
se(Ll, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const tk = Bu({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), nk = new qr("Checkbox.Group"), ov = new qr("Checkbox.Root");
class Yu {
  static create(e, n = null) {
    return ov.set(new Yu(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ _(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    F(this.#t, e);
  }
  #n = /* @__PURE__ */ _(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ _(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    F(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = Lr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Mt.pre(
      [
        () => uu(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), Mt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === Tl) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === Ss && (e.preventDefault(), this.#o());
    }
  }
  #o() {
    this.opts.indeterminate.current ? (this.opts.indeterminate.current = !1, this.opts.checked.current = !0) : this.opts.checked.current = !this.opts.checked.current;
  }
  onclick(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (this.opts.type.current === "submit") {
        this.#o();
        return;
      }
      e.preventDefault(), this.#o();
    }
  }
  #i = /* @__PURE__ */ _(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    F(this.#i, e);
  }
  #a = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": s3(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": zl(this.trueRequired),
    "aria-readonly": zl(this.trueReadonly),
    "data-disabled": Js(this.trueDisabled),
    "data-readonly": Js(this.trueReadonly),
    "data-state": rk(this.opts.checked.current, this.opts.indeterminate.current),
    [tk.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return c(this.#a);
  }
  set props(e) {
    F(this.#a, e);
  }
}
class Gu {
  static create() {
    return new Gu(ov.get());
  }
  root;
  #e = /* @__PURE__ */ _(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => !!this.root.trueName);
  get shouldRender() {
    return c(this.#t);
  }
  set shouldRender(e) {
    F(this.#t, e);
  }
  constructor(e) {
    this.root = e, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    Dl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ _(() => ({
    type: "checkbox",
    checked: this.root.opts.checked.current === !0,
    disabled: this.root.trueDisabled,
    required: this.root.trueRequired,
    name: this.root.trueName,
    value: this.root.opts.value.current,
    readonly: this.root.trueReadonly,
    onfocus: this.onfocus
  }));
  get props() {
    return c(this.#n);
  }
  set props(e) {
    F(this.#n, e);
  }
}
function rk(t, e) {
  return e ? "indeterminate" : t ? "checked" : "unchecked";
}
var ok = /* @__PURE__ */ re("<input/>"), ik = /* @__PURE__ */ re("<input/>");
function Uu(t, e) {
  ue(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ _(() => Gn(r, {
    "aria-hidden": "true",
    tabindex: -1,
    style: B5
  }));
  var i = {
    get value() {
      return n();
    },
    set value(d) {
      n(d), p();
    }
  }, s = he(), a = Q(s);
  {
    var l = (d) => {
      var h = ok();
      ot(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), A(d, h);
    }, u = (d) => {
      var h = ik();
      ot(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), Vs(h, n), A(d, h);
    };
    ae(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return A(t, s), ce(i);
}
se(Uu, { value: {} }, [], [], !0);
function iv(t, e) {
  ue(e, !1);
  const n = Gu.create();
  bu();
  var r = he(), o = Q(r);
  {
    var i = (s) => {
      Uu(s, Xe(() => n.props));
    };
    ae(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  A(t, r), ce();
}
se(iv, {}, [], [], !0);
var sk = /* @__PURE__ */ re("<button><!></button>"), ak = /* @__PURE__ */ re("<!> <!>", 1);
function sv(t, e) {
  const n = Di();
  ue(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => Qn(n)), f = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "checked",
    "ref",
    "onCheckedChange",
    "children",
    "disabled",
    "required",
    "name",
    "value",
    "id",
    "indeterminate",
    "onIndeterminateChange",
    "child",
    "type",
    "readonly"
  ]);
  const x = nk.getOr(null);
  x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1)), Mt.pre(() => d(), () => {
    x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const E = Yu.create(
    {
      checked: ge(() => r(), (N) => {
        r(N), i()?.(N);
      }),
      disabled: ge(() => a() ?? !1),
      required: ge(() => l()),
      name: ge(() => u()),
      value: ge(() => d()),
      id: ge(() => h()),
      ref: ge(() => o(), (N) => o(N)),
      indeterminate: ge(() => f(), (N) => {
        f(N), v()?.(N);
      }),
      type: ge(() => y()),
      readonly: ge(() => !!w())
    },
    x
  ), C = /* @__PURE__ */ _(() => Gn({ ...b }, E.props));
  var k = {
    get checked() {
      return r();
    },
    set checked(N = !1) {
      r(N), p();
    },
    get ref() {
      return o();
    },
    set ref(N = null) {
      o(N), p();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(N) {
      i(N), p();
    },
    get children() {
      return s();
    },
    set children(N) {
      s(N), p();
    },
    get disabled() {
      return a();
    },
    set disabled(N = !1) {
      a(N), p();
    },
    get required() {
      return l();
    },
    set required(N = !1) {
      l(N), p();
    },
    get name() {
      return u();
    },
    set name(N = void 0) {
      u(N), p();
    },
    get value() {
      return d();
    },
    set value(N = "on") {
      d(N), p();
    },
    get id() {
      return h();
    },
    set id(N = Qn(n)) {
      h(N), p();
    },
    get indeterminate() {
      return f();
    },
    set indeterminate(N = !1) {
      f(N), p();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(N) {
      v(N), p();
    },
    get child() {
      return m();
    },
    set child(N) {
      m(N), p();
    },
    get type() {
      return y();
    },
    set type(N = "button") {
      y(N), p();
    },
    get readonly() {
      return w();
    },
    set readonly(N) {
      w(N), p();
    }
  }, P = ak(), V = Q(P);
  {
    var I = (N) => {
      var S = he(), z = Q(S);
      {
        let $ = /* @__PURE__ */ _(() => ({ props: c(C), ...E.snippetProps }));
        ze(z, m, () => c($));
      }
      A(N, S);
    }, H = (N) => {
      var S = sk();
      ot(S, () => ({ ...c(C) }));
      var z = Y(S);
      ze(z, () => s() ?? qe, () => E.snippetProps), W(S), A(N, S);
    };
    ae(V, (N) => {
      m() ? N(I) : N(H, !1);
    });
  }
  var D = R(V, 2);
  return iv(D, {}), A(t, P), ce(k);
}
se(
  sv,
  {
    checked: {},
    ref: {},
    onCheckedChange: {},
    children: {},
    disabled: {},
    required: {},
    name: {},
    value: {},
    id: {},
    indeterminate: {},
    onIndeterminateChange: {},
    child: {},
    type: {},
    readonly: {}
  },
  [],
  [],
  !0
);
const lk = ["top", "right", "bottom", "left"], Rr = Math.min, hn = Math.max, oa = Math.round, ps = Math.floor, Un = (t) => ({
  x: t,
  y: t
}), uk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ck = {
  start: "end",
  end: "start"
};
function Hl(t, e, n) {
  return hn(t, Rr(e, n));
}
function xr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function kr(t) {
  return t.split("-")[0];
}
function Yo(t) {
  return t.split("-")[1];
}
function Ju(t) {
  return t === "x" ? "y" : "x";
}
function Qu(t) {
  return t === "y" ? "height" : "width";
}
const dk = /* @__PURE__ */ new Set(["top", "bottom"]);
function Xn(t) {
  return dk.has(kr(t)) ? "y" : "x";
}
function ec(t) {
  return Ju(Xn(t));
}
function hk(t, e, n) {
  n === void 0 && (n = !1);
  const r = Yo(t), o = ec(t), i = Qu(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = ia(s)), [s, ia(s)];
}
function fk(t) {
  const e = ia(t);
  return [Rl(t), e, Rl(e)];
}
function Rl(t) {
  return t.replace(/start|end/g, (e) => ck[e]);
}
const qd = ["left", "right"], Yd = ["right", "left"], pk = ["top", "bottom"], gk = ["bottom", "top"];
function vk(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Yd : qd : e ? qd : Yd;
    case "left":
    case "right":
      return e ? pk : gk;
    default:
      return [];
  }
}
function mk(t, e, n, r) {
  const o = Yo(t);
  let i = vk(kr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(Rl)))), i;
}
function ia(t) {
  return t.replace(/left|right|bottom|top/g, (e) => uk[e]);
}
function yk(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function av(t) {
  return typeof t != "number" ? yk(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function sa(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function Gd(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = Xn(e), s = ec(e), a = Qu(s), l = kr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: h
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: h
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Yo(e)) {
    case "start":
      v[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const wk = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let u = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: h
  } = Gd(u, r, l), f = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x,
      y: E,
      data: C,
      reset: k
    } = await b({
      x: d,
      y: h,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = x ?? d, h = E ?? h, v = {
      ...v,
      [w]: {
        ...v[w],
        ...C
      }
    }, k && m <= 50 && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : k.rects), {
      x: d,
      y: h
    } = Gd(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Oi(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = xr(e, t), m = av(v), y = a[f ? h === "floating" ? "reference" : "floating" : h], w = sa(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), E = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = sa(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + m.top) / E.y,
    bottom: (C.bottom - w.bottom + m.bottom) / E.y,
    left: (w.left - C.left + m.left) / E.x,
    right: (C.right - w.right + m.right) / E.x
  };
}
const bk = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = e, {
      element: u,
      padding: d = 0
    } = xr(t, e) || {};
    if (u == null)
      return {};
    const h = av(d), f = {
      x: n,
      y: r
    }, v = ec(o), m = Qu(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", x = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[v] - f[v] - i.floating[m], k = f[v] - i.reference[v], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = P ? P[E] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(P))) && (V = a.floating[E] || i.floating[m]);
    const I = C / 2 - k / 2, H = V / 2 - y[m] / 2 - 1, D = Rr(h[b], H), N = Rr(h[x], H), S = D, z = V - y[m] - N, $ = V / 2 - y[m] / 2 + I, O = Hl(S, $, z), M = !l.arrow && Yo(o) != null && $ !== O && i.reference[m] / 2 - ($ < S ? D : N) - y[m] / 2 < 0, B = M ? $ < S ? $ - S : $ - z : 0;
    return {
      [v]: f[v] + B,
      data: {
        [v]: O,
        centerOffset: $ - O - B,
        ...M && {
          alignmentOffset: B
        }
      },
      reset: M
    };
  }
}), xk = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = e, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...w
      } = xr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = kr(o), x = Xn(a), E = kr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (E || !y ? [ia(a)] : fk(a)), P = m !== "none";
      !f && P && k.push(...mk(a, y, m, C));
      const V = [a, ...k], I = await Oi(e, w), H = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && H.push(I[b]), h) {
        const $ = hk(o, s, C);
        H.push(I[$[0]], I[$[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: H
      }], !H.every(($) => $ <= 0)) {
        var N, S;
        const $ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, O = V[$];
        if (O && (!(h === "alignment" && x !== Xn(O)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((B) => Xn(B.placement) === x ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: D
            },
            reset: {
              placement: O
            }
          };
        let M = (S = D.filter((B) => B.overflows[0] <= 0).sort((B, q) => B.overflows[1] - q.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!M)
          switch (v) {
            case "bestFit": {
              var z;
              const B = (z = D.filter((q) => {
                if (P) {
                  const U = Xn(q.placement);
                  return U === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((U) => U > 0).reduce((U, T) => U + T, 0)]).sort((q, U) => q[1] - U[1])[0]) == null ? void 0 : z[0];
              B && (M = B);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function Ud(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function Jd(t) {
  return lk.some((e) => t[e] >= 0);
}
const kk = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = xr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await Oi(e, {
            ...o,
            elementContext: "reference"
          }), s = Ud(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Jd(s)
            }
          };
        }
        case "escaped": {
          const i = await Oi(e, {
            ...o,
            altBoundary: !0
          }), s = Ud(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Jd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, lv = /* @__PURE__ */ new Set(["left", "top"]);
async function Ck(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = kr(n), a = Yo(n), l = Xn(n) === "y", u = lv.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = xr(e, t);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return a && typeof m == "number" && (v = a === "end" ? m * -1 : m), l ? {
    x: v * d,
    y: f * u
  } : {
    x: f * u,
    y: v * d
  };
}
const $k = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = e, l = await Ck(e, t);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Sk = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x: b,
              y: x
            } = w;
            return {
              x: b,
              y: x
            };
          }
        },
        ...l
      } = xr(t, e), u = {
        x: n,
        y: r
      }, d = await Oi(e, l), h = Xn(kr(o)), f = Ju(h);
      let v = u[f], m = u[h];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = v + d[w], E = v - d[b];
        v = Hl(x, v, E);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", x = m + d[w], E = m - d[b];
        m = Hl(x, m, E);
      }
      const y = a.fn({
        ...e,
        [f]: v,
        [h]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [h]: s
          }
        }
      };
    }
  };
}, _k = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = e, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = xr(t, e), d = {
        x: n,
        y: r
      }, h = Xn(o), f = Ju(h);
      let v = d[f], m = d[h];
      const y = xr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const E = f === "y" ? "height" : "width", C = i.reference[f] - i.floating[E] + w.mainAxis, k = i.reference[f] + i.reference[E] - w.mainAxis;
        v < C ? v = C : v > k && (v = k);
      }
      if (u) {
        var b, x;
        const E = f === "y" ? "width" : "height", C = lv.has(kr(o)), k = i.reference[h] - i.floating[E] + (C && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (C ? 0 : w.crossAxis), P = i.reference[h] + i.reference[E] + (C ? 0 : ((x = s.offset) == null ? void 0 : x[h]) || 0) - (C ? w.crossAxis : 0);
        m < k ? m = k : m > P && (m = P);
      }
      return {
        [f]: v,
        [h]: m
      };
    }
  };
}, Ek = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = e, {
        apply: l = () => {
        },
        ...u
      } = xr(t, e), d = await Oi(e, u), h = kr(o), f = Yo(o), v = Xn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = f === "end" ? "top" : "bottom");
      const x = y - d.top - d.bottom, E = m - d.left - d.right, C = Rr(y - d[w], x), k = Rr(m - d[b], E), P = !e.middlewareData.shift;
      let V = C, I = k;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (I = E), (r = e.middlewareData.shift) != null && r.enabled.y && (V = x), P && !f) {
        const D = hn(d.left, 0), N = hn(d.right, 0), S = hn(d.top, 0), z = hn(d.bottom, 0);
        v ? I = m - 2 * (D !== 0 || N !== 0 ? D + N : hn(d.left, d.right)) : V = y - 2 * (S !== 0 || z !== 0 ? S + z : hn(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: I,
        availableHeight: V
      });
      const H = await s.getDimensions(a.floating);
      return m !== H.width || y !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ta() {
  return typeof window < "u";
}
function Go(t) {
  return uv(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function pn(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function rr(t) {
  var e;
  return (e = (uv(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function uv(t) {
  return Ta() ? t instanceof Node || t instanceof pn(t).Node : !1;
}
function An(t) {
  return Ta() ? t instanceof Element || t instanceof pn(t).Element : !1;
}
function er(t) {
  return Ta() ? t instanceof HTMLElement || t instanceof pn(t).HTMLElement : !1;
}
function Qd(t) {
  return !Ta() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof pn(t).ShadowRoot;
}
const Ok = /* @__PURE__ */ new Set(["inline", "contents"]);
function Yi(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = Dn(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !Ok.has(o);
}
const Pk = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Nk(t) {
  return Pk.has(Go(t));
}
const Mk = [":popover-open", ":modal"];
function Aa(t) {
  return Mk.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const zk = ["transform", "translate", "scale", "rotate", "perspective"], Tk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ak = ["paint", "layout", "strict", "content"];
function tc(t) {
  const e = nc(), n = An(t) ? Dn(t) : t;
  return zk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Tk.some((r) => (n.willChange || "").includes(r)) || Ak.some((r) => (n.contain || "").includes(r));
}
function Dk(t) {
  let e = jr(t);
  for (; er(e) && !Ko(e); ) {
    if (tc(e))
      return e;
    if (Aa(e))
      return null;
    e = jr(e);
  }
  return null;
}
function nc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Vk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ko(t) {
  return Vk.has(Go(t));
}
function Dn(t) {
  return pn(t).getComputedStyle(t);
}
function Da(t) {
  return An(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function jr(t) {
  if (Go(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Qd(t) && t.host || // Fallback.
    rr(t)
  );
  return Qd(e) ? e.host : e;
}
function cv(t) {
  const e = jr(t);
  return Ko(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : er(e) && Yi(e) ? e : cv(e);
}
function Pi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = cv(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = pn(o);
  if (i) {
    const a = jl(s);
    return e.concat(s, s.visualViewport || [], Yi(o) ? o : [], a && n ? Pi(a) : []);
  }
  return e.concat(o, Pi(o, [], n));
}
function jl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function dv(t) {
  const e = Dn(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = er(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = oa(n) !== i || oa(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function rc(t) {
  return An(t) ? t : t.contextElement;
}
function zo(t) {
  const e = rc(t);
  if (!er(e))
    return Un(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = dv(e);
  let s = (i ? oa(n.width) : n.width) / r, a = (i ? oa(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Ik = /* @__PURE__ */ Un(0);
function hv(t) {
  const e = pn(t);
  return !nc() || !e.visualViewport ? Ik : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Lk(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== pn(t) ? !1 : e;
}
function po(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = rc(t);
  let s = Un(1);
  e && (r ? An(r) && (s = zo(r)) : s = zo(t));
  const a = Lk(i, n, r) ? hv(i) : Un(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = pn(i), v = r && An(r) ? pn(r) : r;
    let m = f, y = jl(m);
    for (; y && r && v !== m; ) {
      const w = zo(y), b = y.getBoundingClientRect(), x = Dn(y), E = b.left + (y.clientLeft + parseFloat(x.paddingLeft)) * w.x, C = b.top + (y.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += E, u += C, m = pn(y), y = jl(m);
    }
  }
  return sa({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function Va(t, e) {
  const n = Da(t).scrollLeft;
  return e ? e.left + n : po(rr(t)).left + n;
}
function fv(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - Va(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Hk(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = rr(r), a = e ? Aa(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Un(1);
  const d = Un(0), h = er(r);
  if ((h || !h && !i) && ((Go(r) !== "body" || Yi(s)) && (l = Da(r)), er(r))) {
    const v = po(r);
    u = zo(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const f = s && !h && !i ? fv(s, l) : Un(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function Rk(t) {
  return Array.from(t.getClientRects());
}
function jk(t) {
  const e = rr(t), n = Da(t), r = t.ownerDocument.body, o = hn(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = hn(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Va(t);
  const a = -n.scrollTop;
  return Dn(r).direction === "rtl" && (s += hn(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const eh = 25;
function Bk(t, e) {
  const n = pn(t), r = rr(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = nc();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Va(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= eh && (i -= m);
  } else u <= eh && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Kk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Fk(t, e) {
  const n = po(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = er(t) ? zo(t) : Un(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function th(t, e, n) {
  let r;
  if (e === "viewport")
    r = Bk(t, n);
  else if (e === "document")
    r = jk(rr(t));
  else if (An(e))
    r = Fk(e, n);
  else {
    const o = hv(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return sa(r);
}
function pv(t, e) {
  const n = jr(t);
  return n === e || !An(n) || Ko(n) ? !1 : Dn(n).position === "fixed" || pv(n, e);
}
function Zk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Pi(t, [], !1).filter((a) => An(a) && Go(a) !== "body"), o = null;
  const i = Dn(t).position === "fixed";
  let s = i ? jr(t) : t;
  for (; An(s) && !Ko(s); ) {
    const a = Dn(s), l = tc(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Kk.has(o.position) || Yi(s) && !l && pv(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = jr(s);
  }
  return e.set(t, r), r;
}
function Wk(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? Aa(e) ? [] : Zk(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = th(e, u, o);
    return l.top = hn(d.top, l.top), l.right = Rr(d.right, l.right), l.bottom = Rr(d.bottom, l.bottom), l.left = hn(d.left, l.left), l;
  }, th(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Xk(t) {
  const {
    width: e,
    height: n
  } = dv(t);
  return {
    width: e,
    height: n
  };
}
function qk(t, e, n) {
  const r = er(e), o = rr(e), i = n === "fixed", s = po(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Un(0);
  function u() {
    l.x = Va(o);
  }
  if (r || !r && !i)
    if ((Go(e) !== "body" || Yi(o)) && (a = Da(e)), r) {
      const v = po(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? fv(o, a) : Un(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ol(t) {
  return Dn(t).position === "static";
}
function nh(t, e) {
  if (!er(t) || Dn(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return rr(t) === n && (n = n.ownerDocument.body), n;
}
function gv(t, e) {
  const n = pn(t);
  if (Aa(t))
    return n;
  if (!er(t)) {
    let o = jr(t);
    for (; o && !Ko(o); ) {
      if (An(o) && !ol(o))
        return o;
      o = jr(o);
    }
    return n;
  }
  let r = nh(t, e);
  for (; r && Nk(r) && ol(r); )
    r = nh(r, e);
  return r && Ko(r) && ol(r) && !tc(r) ? n : r || Dk(t) || n;
}
const Yk = async function(t) {
  const e = this.getOffsetParent || gv, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: qk(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gk(t) {
  return Dn(t).direction === "rtl";
}
const Uk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hk,
  getDocumentElement: rr,
  getClippingRect: Wk,
  getOffsetParent: gv,
  getElementRects: Yk,
  getClientRects: Rk,
  getDimensions: Xk,
  getScale: zo,
  isElement: An,
  isRTL: Gk
};
function vv(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Jk(t, e) {
  let n = null, r;
  const o = rr(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = t.getBoundingClientRect(), {
      left: d,
      top: h,
      width: f,
      height: v
    } = u;
    if (a || e(), !f || !v)
      return;
    const m = ps(h), y = ps(o.clientWidth - (d + f)), w = ps(o.clientHeight - (h + v)), b = ps(d), x = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: hn(0, Rr(1, l)) || 1
    };
    let E = !0;
    function C(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!E)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !vv(u, t.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function Qk(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = rc(t), d = o || i ? [...u ? Pi(u) : [], ...Pi(e)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const h = u && a ? Jk(u, n) : null;
  let f = -1, v = null;
  s && (v = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === u && v && (v.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var E;
      (E = v) == null || E.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? po(t) : null;
  l && w();
  function w() {
    const b = po(t);
    y && !vv(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const mv = $k, yv = Sk, wv = xk, e4 = Ek, t4 = kk, bv = bk, n4 = _k, xv = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Uk,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return wk(t, e, {
    ...o,
    platform: i
  });
};
function Ur(t) {
  return typeof t == "function" ? t() : t;
}
function kv(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rh(t, e) {
  const n = kv(t);
  return Math.round(e * n) / n;
}
function r4(t) {
  return {
    [`--bits-${t}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${t}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${t}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${t}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${t}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function o4(t) {
  const e = t.whileElementsMounted, n = /* @__PURE__ */ _(() => Ur(t.open) ?? !0), r = /* @__PURE__ */ _(() => Ur(t.middleware)), o = /* @__PURE__ */ _(() => Ur(t.transform) ?? !0), i = /* @__PURE__ */ _(() => Ur(t.placement) ?? "bottom"), s = /* @__PURE__ */ _(() => Ur(t.strategy) ?? "absolute"), a = /* @__PURE__ */ _(() => Ur(t.sideOffset) ?? 0), l = /* @__PURE__ */ _(() => Ur(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ we(0), h = /* @__PURE__ */ we(0);
  const f = Wn(null);
  let v = /* @__PURE__ */ we($t(c(s))), m = /* @__PURE__ */ we($t(c(i))), y = /* @__PURE__ */ we($t({})), w = /* @__PURE__ */ we(!1), b = !1, x = 0;
  const E = /* @__PURE__ */ _(() => {
    const D = f.current ? rh(f.current, c(d)) : c(d), N = f.current ? rh(f.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${D}px, ${N}px)`,
      ...f.current && kv(f.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${D}px`,
      top: `${N}px`
    };
  });
  let C;
  function k() {
    if (u.current === null || f.current === null) return;
    const D = u.current, N = f.current, S = ++x;
    xv(D, N, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((z) => {
      if (!(S !== x || u.current !== D || f.current !== N)) {
        if (i4(D)) {
          F(
            y,
            {
              ...c(y),
              hide: {
                // oxlint-disable-next-line no-explicit-any
                ...c(y).hide,
                referenceHidden: !0
              }
            },
            !0
          );
          return;
        }
        if (!c(n) && c(d) !== 0 && c(h) !== 0) {
          const $ = Math.max(Math.abs(c(a)), Math.abs(c(l)), 15);
          if (z.x <= $ && z.y <= $) return;
        }
        F(d, z.x, !0), F(h, z.y, !0), F(v, z.strategy, !0), F(m, z.placement, !0), F(y, z.middlewareData, !0), F(w, !0);
      }
    });
  }
  function P() {
    typeof C == "function" && (C(), C = void 0), x++;
  }
  function V() {
    if (P(), e === void 0) {
      k();
      return;
    }
    c(n) && (u.current === null || f.current === null || (C = e(u.current, f.current, k)));
  }
  function I() {
    !c(n) && f.current === null && F(w, !1);
  }
  function H() {
    return [
      c(r),
      c(i),
      c(s),
      c(a),
      c(l),
      c(n)
    ];
  }
  return Ze(() => {
    e === void 0 && c(n) && k();
  }), Ze(V), Ze(() => {
    if (e !== void 0) {
      if (H(), !c(n)) {
        b = !1;
        return;
      }
      if (!c(w)) {
        b = !1;
        return;
      }
      if (!b) {
        b = !0;
        return;
      }
      k();
    }
  }), Ze(I), Ze(() => P), {
    floating: f,
    reference: u,
    get strategy() {
      return c(v);
    },
    get placement() {
      return c(m);
    },
    get middlewareData() {
      return c(y);
    },
    get isPositioned() {
      return c(w);
    },
    get floatingStyles() {
      return c(E);
    },
    get update() {
      return k;
    }
  };
}
function i4(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const s4 = { top: "bottom", right: "left", bottom: "top", left: "right" }, oc = new qr("Floating.Root"), oh = new qr("Floating.Content"), ic = new qr("Floating.Root");
class aa {
  static create(e = !1) {
    return e ? ic.set(new aa()) : oc.set(new aa());
  }
  anchorNode = Wn(null);
  customAnchorNode = Wn(null);
  triggerNode = Wn(null);
  constructor() {
    Ze(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class la {
  static create(e, n = !1) {
    return n ? oh.set(new la(e, ic.get())) : oh.set(new la(e, oc.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Wn(null);
  wrapperRef = Wn(null);
  arrowRef = Wn(null);
  contentAttachment = Lr(this.contentRef);
  wrapperAttachment = Lr(this.wrapperRef);
  arrowAttachment = Lr(this.arrowRef);
  // ids
  arrowId = Wn(ra());
  #e = /* @__PURE__ */ _(() => {
    if (typeof this.opts.style == "string") return ci(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new q5(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ _(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ _(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ _(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ _(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ _(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    F(this.#s, e);
  }
  #l = /* @__PURE__ */ _(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: c(this.#a).filter(d3),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return c(this.#l);
  }
  set detectOverflowOptions(e) {
    F(this.#l, e);
  }
  #u = /* @__PURE__ */ we(void 0);
  #c = /* @__PURE__ */ we(void 0);
  #d = /* @__PURE__ */ we(void 0);
  #h = /* @__PURE__ */ we(void 0);
  #p = /* @__PURE__ */ _(() => [
    mv({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && yv({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? n4() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && wv({ ...this.detectOverflowOptions }),
    e4({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        F(this.#u, n, !0), F(this.#c, r, !0), F(this.#d, o, !0), F(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && bv({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    a4({
      arrowWidth: c(this.#r),
      arrowHeight: c(this.#o)
    }),
    this.opts.hideWhenDetached.current && t4({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return c(this.#p);
  }
  set middleware(e) {
    F(this.#p, e);
  }
  floating;
  #f = /* @__PURE__ */ _(() => l4(this.floating.placement));
  get placedSide() {
    return c(this.#f);
  }
  set placedSide(e) {
    F(this.#f, e);
  }
  #y = /* @__PURE__ */ _(() => u4(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    F(this.#y, e);
  }
  #v = /* @__PURE__ */ _(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    F(this.#v, e);
  }
  #w = /* @__PURE__ */ _(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    F(this.#w, e);
  }
  #m = /* @__PURE__ */ _(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return c(this.#m);
  }
  set cannotCenterArrow(e) {
    F(this.#m, e);
  }
  #g = /* @__PURE__ */ we();
  get contentZIndex() {
    return c(this.#g);
  }
  set contentZIndex(e) {
    F(this.#g, e, !0);
  }
  #b = /* @__PURE__ */ _(() => s4[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    F(this.#b, e);
  }
  #x = /* @__PURE__ */ _(() => ({
    id: this.opts.wrapperId.current,
    "data-bits-floating-content-wrapper": "",
    style: {
      ...this.floating.floatingStyles,
      transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: this.contentZIndex,
      "--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
      "--bits-floating-available-width": `${c(this.#u)}px`,
      "--bits-floating-available-height": `${c(this.#c)}px`,
      "--bits-floating-anchor-width": `${c(this.#d)}px`,
      "--bits-floating-anchor-height": `${c(this.#h)}px`,
      ...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
      ...c(this.#e)
    },
    dir: this.opts.dir.current,
    ...this.wrapperAttachment
  }));
  get wrapperProps() {
    return c(this.#x);
  }
  set wrapperProps(e) {
    F(this.#x, e);
  }
  #k = /* @__PURE__ */ _(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: ju({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#k);
  }
  set props(e) {
    F(this.#k, e);
  }
  #C = /* @__PURE__ */ _(() => ({
    position: "absolute",
    left: this.arrowX ? `${this.arrowX}px` : void 0,
    top: this.arrowY ? `${this.arrowY}px` : void 0,
    [this.arrowBaseSide]: 0,
    "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
    transform: {
      top: "translateY(100%)",
      right: "translateY(50%) rotate(90deg) translateX(-50%)",
      bottom: "rotate(180deg)",
      left: "translateY(50%) rotate(-90deg) translateX(50%)"
    }[this.placedSide],
    visibility: this.cannotCenterArrow ? "hidden" : void 0
  }));
  get arrowStyle() {
    return c(this.#C);
  }
  set arrowStyle(e) {
    F(this.#C, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Mt(() => e.customAnchor.current, (r) => {
      this.root.customAnchorNode.current = r;
    }), this.floating = o4({
      strategy: () => this.opts.strategy.current,
      placement: () => c(this.#i),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => Qk(...r, {
        animationFrame: this.#t?.current === "always"
      }),
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    }), Ze(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), Mt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = Dg(r), i = o.requestAnimationFrame(() => {
        if (this.contentRef.current !== r || !this.opts.enabled.current) return;
        const s = o.getComputedStyle(r).zIndex;
        s !== this.contentZIndex && (this.contentZIndex = s);
      });
      return () => {
        o.cancelAnimationFrame(i);
      };
    }), Ze(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
}
class ua {
  static create(e, n = !1) {
    return n ? new ua(e, ic.get()) : new ua(e, oc.get());
  }
  opts;
  root;
  constructor(e, n) {
    this.opts = e, this.root = n, e.virtualEl && e.virtualEl.current ? n.triggerNode = g5(e.virtualEl.current) : n.triggerNode = e.ref;
  }
}
function a4(t) {
  return {
    name: "transformOrigin",
    options: t,
    fn(e) {
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = sc(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${f}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${f}px`), { data: { x: v, y: m } };
    }
  };
}
function sc(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function l4(t) {
  return sc(t)[0];
}
function u4(t) {
  return sc(t)[1];
}
function Cv(t, e) {
  ue(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  aa.create(r());
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    },
    get tooltip() {
      return r();
    },
    set tooltip(a = !1) {
      r(a), p();
    }
  }, i = he(), s = Q(i);
  return ze(s, () => n() ?? qe), A(t, i), ce(o);
}
se(Cv, { children: {}, tooltip: {} }, [], [], !0);
class c4 {
  #e;
  #t = /* @__PURE__ */ _(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = Jg("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = Ku(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const d4 = [di, Rg, Lg], h4 = [_o, Hg, Ig], f4 = [...d4, ...h4], p4 = Bu({
  component: "select",
  parts: [
    "trigger",
    "content",
    "item",
    "viewport",
    "scroll-up-button",
    "scroll-down-button",
    "group",
    "group-label",
    "separator",
    "arrow",
    "input",
    "content-wrapper",
    "item-text",
    "value"
  ]
}), Gi = new qr("Select.Root | Combobox.Root"), $v = new qr("Select.Content | Combobox.Content");
class Sv {
  opts;
  #e = /* @__PURE__ */ we(!1);
  get touchedInput() {
    return c(this.#e);
  }
  set touchedInput(e) {
    F(this.#e, e, !0);
  }
  #t = /* @__PURE__ */ we(null);
  get inputNode() {
    return c(this.#t);
  }
  set inputNode(e) {
    F(this.#t, e, !0);
  }
  #n = /* @__PURE__ */ we(null);
  get contentNode() {
    return c(this.#n);
  }
  set contentNode(e) {
    F(this.#n, e, !0);
  }
  contentPresence;
  #r = /* @__PURE__ */ we(null);
  get viewportNode() {
    return c(this.#r);
  }
  set viewportNode(e) {
    F(this.#r, e, !0);
  }
  #o = /* @__PURE__ */ we(null);
  get triggerNode() {
    return c(this.#o);
  }
  set triggerNode(e) {
    F(this.#o, e, !0);
  }
  #i = /* @__PURE__ */ we("");
  get valueId() {
    return c(this.#i);
  }
  set valueId(e) {
    F(this.#i, e, !0);
  }
  #a = /* @__PURE__ */ we(null);
  get highlightedNode() {
    return c(this.#a);
  }
  set highlightedNode(e) {
    F(this.#a, e, !0);
  }
  #s = /* @__PURE__ */ _(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    F(this.#s, e);
  }
  #l = /* @__PURE__ */ _(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    F(this.#l, e);
  }
  #u = /* @__PURE__ */ _(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
  get highlightedLabel() {
    return c(this.#u);
  }
  set highlightedLabel(e) {
    F(this.#u, e);
  }
  #c = /* @__PURE__ */ we(!1);
  get contentIsPositioned() {
    return c(this.#c);
  }
  set contentIsPositioned(e) {
    F(this.#c, e, !0);
  }
  isUsingKeyboard = !1;
  isCombobox = !1;
  domContext = new qi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new f3({
      ref: ge(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), nn(() => {
      this.opts.open.current || this.setHighlightedNode(null);
    });
  }
  setHighlightedNode(e, n = !1) {
    this.highlightedNode = e, e && (this.isUsingKeyboard || n) && this.scrollHighlightedNodeIntoView(e);
  }
  scrollHighlightedNodeIntoView(e) {
    !this.viewportNode || !this.contentIsPositioned || e.scrollIntoView({ block: this.opts.scrollAlignment.current });
  }
  getCandidateNodes() {
    const e = this.contentNode;
    return e ? Array.from(e.querySelectorAll(`[${this.getBitsAttr("item")}]:not([data-disabled])`)) : [];
  }
  setHighlightedToFirstCandidate(e = !1) {
    this.setHighlightedNode(null);
    let n = this.getCandidateNodes();
    if (n.length) {
      if (this.viewportNode) {
        const r = this.viewportNode.getBoundingClientRect();
        n = n.filter((o) => {
          if (!this.viewportNode) return !1;
          const i = o.getBoundingClientRect();
          return i.right <= r.right && i.left >= r.left && i.bottom <= r.bottom && i.top >= r.top;
        });
      }
      this.setHighlightedNode(n[0], e);
    }
  }
  getNodeByValue(e) {
    return this.getCandidateNodes().find((n) => n.dataset.value === e) ?? null;
  }
  setOpen(e) {
    this.opts.open.current = e;
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  handleOpen() {
    this.setOpen(!0);
  }
  handleClose() {
    this.setHighlightedNode(null), this.setOpen(!1);
  }
  toggleMenu() {
    this.toggleOpen();
  }
  getBitsAttr = (e) => p4.getAttr(e, this.isCombobox ? "combobox" : void 0);
}
class g4 extends Sv {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ _(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    F(this.#t, e);
  }
  #n = /* @__PURE__ */ _(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ _(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    F(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Ze(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), Mt(() => this.opts.open.current, () => {
      this.opts.open.current && this.setInitialHighlightedNode();
    });
  }
  includesItem(e) {
    return this.opts.value.current === e;
  }
  toggleItem(e, n = e) {
    const r = this.includesItem(e) ? "" : e;
    this.opts.value.current = r, r !== "" && (this.opts.inputValue.current = n);
  }
  setInitialHighlightedNode() {
    Xi(() => {
      if (!(this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode))) {
        if (this.opts.value.current !== "") {
          const e = this.getNodeByValue(this.opts.value.current);
          if (e) {
            this.setHighlightedNode(e, !0);
            return;
          }
        }
        this.setHighlightedToFirstCandidate(!0);
      }
    });
  }
}
class v4 extends Sv {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ _(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    F(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Ze(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), Mt(() => this.opts.open.current, () => {
      this.opts.open.current && this.setInitialHighlightedNode();
    });
  }
  includesItem(e) {
    return this.opts.value.current.includes(e);
  }
  toggleItem(e, n = e) {
    this.includesItem(e) ? this.opts.value.current = this.opts.value.current.filter((r) => r !== e) : this.opts.value.current = [...this.opts.value.current, e], this.opts.inputValue.current = n;
  }
  setInitialHighlightedNode() {
    Xi(() => {
      if (this.domContext && !(this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode))) {
        if (this.opts.value.current.length && this.opts.value.current[0] !== "") {
          const e = this.getNodeByValue(this.opts.value.current[0]);
          if (e) {
            this.setHighlightedNode(e, !0);
            return;
          }
        }
        this.setHighlightedToFirstCandidate(!0);
      }
    });
  }
}
class m4 {
  static create(e) {
    const { type: n, ...r } = e, o = n === "single" ? new g4(r) : new v4(r);
    return Gi.set(o);
  }
}
class ac {
  static create(e) {
    return new ac(e, Gi.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Lr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new qi(e.ref), this.#e = new K3({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (r) => {
        this.root.setHighlightedNode(r);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    }), this.#t = new c4({
      getCurrentItem: () => this.root.isMulti ? "" : this.root.currentLabel,
      onMatch: (r) => {
        if (this.root.isMulti || !this.root.opts.items.current) return;
        const o = this.root.opts.items.current.find((i) => i.label === r);
        o && (this.root.opts.value.current = o.value);
      },
      enabled: () => !this.root.isMulti && this.root.dataTypeaheadEnabled,
      candidateValues: () => this.root.isMulti ? [] : this.root.candidateLabels,
      getWindow: () => this.root.domContext.getWindow()
    }), this.onkeydown = this.onkeydown.bind(this), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this), this.onclick = this.onclick.bind(this);
  }
  #n() {
    this.root.opts.open.current = !0, this.#t.resetTypeahead(), this.#e.resetTypeahead();
  }
  #r(e) {
    this.#n();
  }
  /**
   * Logic used to handle keyboard selection/deselection.
   *
   * If it returns true, it means the item was selected and whatever is calling
   * this function should return early
   *
   */
  #o() {
    const e = this.root.highlightedValue === this.root.opts.value.current;
    return !this.root.opts.allowDeselect.current && e && !this.root.isMulti ? (this.root.handleClose(), !0) : (this.root.highlightedValue !== null && this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0), !this.root.isMulti && !e ? (this.root.handleClose(), !0) : !1);
  }
  onkeydown(e) {
    if (this.root.isUsingKeyboard = !0, (e.key === _o || e.key === di) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === Tl || e.key === Ss || e.key === di || e.key === _o)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === di) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === _o) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === Rd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === Tl || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === Ss && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === _o && e.altKey && this.root.handleClose(), f4.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === di ? d = L3(s, l, u) : e.key === _o ? d = H3(s, l, u) : e.key === Hg ? d = R3(s, l, 10, u) : e.key === Rg ? d = j3(s, l, 10, u) : e.key === Lg ? d = s[0] : e.key === Ig && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === Ss, i = this.root.getCandidateNodes();
    if (e.key !== Rd) {
      if (!n && (r || o)) {
        !this.#e.handleTypeaheadSearch(e.key, i) && o && (e.preventDefault(), this.#o());
        return;
      }
      this.root.highlightedNode || this.root.setHighlightedToFirstCandidate();
    }
  }
  onclick(e) {
    e.currentTarget.focus();
  }
  onpointerdown(e) {
    if (this.root.opts.disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    const n = e.target;
    n?.hasPointerCapture(e.pointerId) && n?.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && (this.root.opts.open.current === !1 ? this.#r(e) : this.root.handleClose());
  }
  onpointerup(e) {
    this.root.opts.disabled.current || (e.preventDefault(), e.pointerType === "touch" && (this.root.opts.open.current === !1 ? this.#r(e) : this.root.handleClose()));
  }
  #i = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": zl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": Vg(this.root.opts.open.current),
    "data-disabled": Js(this.root.opts.disabled.current),
    "data-placeholder": this.root.hasValue ? void 0 : "",
    [this.root.getBitsAttr("trigger")]: "",
    onpointerdown: this.onpointerdown,
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return c(this.#i);
  }
  set props(e) {
    F(this.#i, e);
  }
}
class lc {
  static create(e) {
    return $v.set(new lc(e, Gi.get()));
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ we(!1);
  get isPositioned() {
    return c(this.#e);
  }
  set isPositioned(e) {
    F(this.#e, e, !0);
  }
  domContext;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Lr(e.ref, (r) => this.root.contentNode = r), this.domContext = new qi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), qo(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), Mt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), Mt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ _(() => r4(this.root.isCombobox ? "combobox" : "select"));
  onInteractOutside = (e) => {
    if (e.target === this.root.triggerNode || e.target === this.root.inputNode) {
      e.preventDefault();
      return;
    }
    this.opts.onInteractOutside.current(e), !e.defaultPrevented && this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current(e), !e.defaultPrevented && this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  #n = /* @__PURE__ */ _(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return c(this.#n);
  }
  set snippetProps(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": Vg(this.root.opts.open.current),
    [this.root.getBitsAttr("content")]: "",
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      boxSizing: "border-box",
      pointerEvents: "auto",
      ...c(this.#t)
    },
    onpointermove: this.onpointermove,
    ...this.attachment
  }));
  get props() {
    return c(this.#r);
  }
  set props(e) {
    F(this.#r, e);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus,
    trapFocus: !1,
    loop: !1,
    onPlaced: () => {
      this.root.opts.open.current && (this.root.contentIsPositioned = !0, this.isPositioned = !0);
    }
  };
}
class uc {
  static create(e) {
    return new uc(e, Gi.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ _(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ _(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return c(this.#t);
  }
  set isHighlighted(e) {
    F(this.#t, e);
  }
  prevHighlighted = new Y5(() => this.isHighlighted);
  #n = /* @__PURE__ */ we(!1);
  get mounted() {
    return c(this.#n);
  }
  set mounted(e) {
    F(this.#n, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Lr(e.ref), Mt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), Mt(() => this.mounted, () => {
      this.mounted && this.root.setInitialHighlightedNode();
    }), this.onpointerdown = this.onpointerdown.bind(this), this.onpointerup = this.onpointerup.bind(this), this.onpointermove = this.onpointermove.bind(this);
  }
  handleSelect() {
    if (this.opts.disabled.current) return;
    const e = this.opts.value.current === this.root.opts.value.current;
    if (!this.root.opts.allowDeselect.current && e && !this.root.isMulti) {
      this.root.handleClose();
      return;
    }
    this.root.toggleItem(this.opts.value.current, this.opts.label.current), !this.root.isMulti && !e && this.root.handleClose();
  }
  #r = /* @__PURE__ */ _(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
  get snippetProps() {
    return c(this.#r);
  }
  set snippetProps(e) {
    F(this.#r, e);
  }
  onpointerdown(e) {
    e.preventDefault();
  }
  /**
   * Using `pointerup` instead of `click` allows power users to pointerdown
   * the trigger, then release pointerup on an item to select it vs having to do
   * multiple clicks.
   */
  onpointerup(e) {
    if (!(e.defaultPrevented || !this.opts.ref.current)) {
      if (e.pointerType === "touch" && !Al) {
        St(
          this.opts.ref.current,
          "click",
          () => {
            this.handleSelect(), this.root.setHighlightedNode(this.opts.ref.current);
          },
          { once: !0 }
        );
        return;
      }
      e.preventDefault(), this.handleSelect(), e.pointerType === "touch" && this.root.setHighlightedNode(this.opts.ref.current);
    }
  }
  onpointermove(e) {
    e.pointerType !== "touch" && this.root.highlightedNode !== this.opts.ref.current && this.root.setHighlightedNode(this.opts.ref.current);
  }
  #o = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": Js(this.opts.disabled.current),
    "data-highlighted": this.root.highlightedValue === this.opts.value.current && !this.opts.disabled.current ? "" : void 0,
    "data-selected": this.root.includesItem(this.opts.value.current) ? "" : void 0,
    "data-label": this.opts.label.current,
    [this.root.getBitsAttr("item")]: "",
    onpointermove: this.onpointermove,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return c(this.#o);
  }
  set props(e) {
    F(this.#o, e);
  }
}
class cc {
  static create(e) {
    return new cc(e, Gi.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ _(() => this.root.opts.name.current !== "");
  get shouldRender() {
    return c(this.#e);
  }
  set shouldRender(e) {
    F(this.#e, e);
  }
  constructor(e, n) {
    this.opts = e, this.root = n, this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault(), this.root.isCombobox ? this.root.inputNode?.focus() : this.root.triggerNode?.focus();
  }
  #t = /* @__PURE__ */ _(() => ({
    disabled: Hd(this.root.opts.disabled.current),
    required: Hd(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return c(this.#t);
  }
  set props(e) {
    F(this.#t, e);
  }
}
class dc {
  static create(e) {
    return new dc(e, $v.get());
  }
  opts;
  content;
  root;
  attachment;
  #e = /* @__PURE__ */ we(0);
  get prevScrollTop() {
    return c(this.#e);
  }
  set prevScrollTop(e) {
    F(this.#e, e, !0);
  }
  constructor(e, n) {
    this.opts = e, this.content = n, this.root = n.root, this.attachment = Lr(e.ref, (r) => {
      this.root.viewportNode = r;
    });
  }
  #t = /* @__PURE__ */ _(() => ({
    id: this.opts.id.current,
    role: "presentation",
    [this.root.getBitsAttr("viewport")]: "",
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto"
    },
    ...this.attachment
  }));
  get props() {
    return c(this.#t);
  }
  set props(e) {
    F(this.#t, e);
  }
}
function Es(t, e) {
  ue(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = cc.create({ value: ge(() => n()) });
  var i = {
    get value() {
      return n();
    },
    set value(u) {
      n(u), p();
    },
    get autocomplete() {
      return r();
    },
    set autocomplete(u) {
      r(u), p();
    }
  }, s = he(), a = Q(s);
  {
    var l = (u) => {
      Uu(u, Xe(() => o.props, {
        get autocomplete() {
          return r();
        },
        get value() {
          return n();
        },
        set value(d) {
          n(d);
        }
      }));
    };
    ae(a, (u) => {
      o.shouldRender && u(l);
    });
  }
  return A(t, s), ce(i);
}
se(Es, { value: {}, autocomplete: {} }, [], [], !0);
function _v(t, e) {
  ue(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  ua.create(
    {
      id: ge(() => n()),
      virtualEl: ge(() => o()),
      ref: i()
    },
    s()
  );
  var a = {
    get id() {
      return n();
    },
    set id(d) {
      n(d), p();
    },
    get children() {
      return r();
    },
    set children(d) {
      r(d), p();
    },
    get virtualEl() {
      return o();
    },
    set virtualEl(d) {
      o(d), p();
    },
    get ref() {
      return i();
    },
    set ref(d) {
      i(d), p();
    },
    get tooltip() {
      return s();
    },
    set tooltip(d = !1) {
      s(d), p();
    }
  }, l = he(), u = Q(l);
  return ze(u, () => r() ?? qe), A(t, l), ce(a);
}
se(_v, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Ev(t, e) {
  ue(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), f = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), x = g(e, "style", 23, () => ({})), E = g(e, "wrapperId", 23, ra), C = g(e, "customAnchor", 7, null), k = g(e, "enabled", 7), P = g(e, "tooltip", 7, !1);
  const V = la.create(
    {
      side: ge(() => r()),
      sideOffset: ge(() => o()),
      align: ge(() => i()),
      alignOffset: ge(() => s()),
      id: ge(() => a()),
      arrowPadding: ge(() => l()),
      avoidCollisions: ge(() => u()),
      collisionBoundary: ge(() => d()),
      collisionPadding: ge(() => h()),
      hideWhenDetached: ge(() => f()),
      onPlaced: ge(() => v()),
      sticky: ge(() => m()),
      updatePositionStrategy: ge(() => y()),
      strategy: ge(() => w()),
      dir: ge(() => b()),
      style: ge(() => x()),
      enabled: ge(() => k()),
      wrapperId: ge(() => E()),
      customAnchor: ge(() => C())
    },
    P()
  ), I = /* @__PURE__ */ _(() => Gn(V.wrapperProps, { style: { pointerEvents: "auto" } }));
  var H = {
    get content() {
      return n();
    },
    set content(S) {
      n(S), p();
    },
    get side() {
      return r();
    },
    set side(S = "bottom") {
      r(S), p();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(S = 0) {
      o(S), p();
    },
    get align() {
      return i();
    },
    set align(S = "center") {
      i(S), p();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(S = 0) {
      s(S), p();
    },
    get id() {
      return a();
    },
    set id(S) {
      a(S), p();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(S = 0) {
      l(S), p();
    },
    get avoidCollisions() {
      return u();
    },
    set avoidCollisions(S = !0) {
      u(S), p();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(S = []) {
      d(S), p();
    },
    get collisionPadding() {
      return h();
    },
    set collisionPadding(S = 0) {
      h(S), p();
    },
    get hideWhenDetached() {
      return f();
    },
    set hideWhenDetached(S = !1) {
      f(S), p();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(S = () => {
    }) {
      v(S), p();
    },
    get sticky() {
      return m();
    },
    set sticky(S = "partial") {
      m(S), p();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(S = "optimized") {
      y(S), p();
    },
    get strategy() {
      return w();
    },
    set strategy(S = "fixed") {
      w(S), p();
    },
    get dir() {
      return b();
    },
    set dir(S = "ltr") {
      b(S), p();
    },
    get style() {
      return x();
    },
    set style(S = {}) {
      x(S), p();
    },
    get wrapperId() {
      return E();
    },
    set wrapperId(S = ra()) {
      E(S), p();
    },
    get customAnchor() {
      return C();
    },
    set customAnchor(S = null) {
      C(S), p();
    },
    get enabled() {
      return k();
    },
    set enabled(S) {
      k(S), p();
    },
    get tooltip() {
      return P();
    },
    set tooltip(S = !1) {
      P(S), p();
    }
  }, D = he(), N = Q(D);
  return ze(N, () => n() ?? qe, () => ({ props: V.props, wrapperProps: c(I) })), A(t, D), ce(H);
}
se(
  Ev,
  {
    content: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    id: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    hideWhenDetached: {},
    onPlaced: {},
    sticky: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    style: {},
    wrapperId: {},
    customAnchor: {},
    enabled: {},
    tooltip: {}
  },
  [],
  [],
  !0
);
function Ov(t, e) {
  ue(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  Vn(() => {
    r()?.();
  });
  var o = {
    get content() {
      return n();
    },
    set content(a) {
      n(a), p();
    },
    get onPlaced() {
      return r();
    },
    set onPlaced(a) {
      r(a), p();
    }
  }, i = he(), s = Q(i);
  return ze(s, () => n() ?? qe, () => ({ props: {}, wrapperProps: {} })), A(t, i), ce(o);
}
se(Ov, { content: {}, onPlaced: {} }, [], [], !0);
function Pv(t, e) {
  ue(e, !0);
  let n = g(e, "content", 7), r = g(e, "isStatic", 7, !1), o = g(e, "onPlaced", 7), i = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "content",
    "isStatic",
    "onPlaced"
  ]);
  var s = {
    get content() {
      return n();
    },
    set content(h) {
      n(h), p();
    },
    get isStatic() {
      return r();
    },
    set isStatic(h = !1) {
      r(h), p();
    },
    get onPlaced() {
      return o();
    },
    set onPlaced(h) {
      o(h), p();
    }
  }, a = he(), l = Q(a);
  {
    var u = (h) => {
      Ov(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      Ev(h, Xe(
        {
          get content() {
            return n();
          },
          get onPlaced() {
            return o();
          }
        },
        () => i
      ));
    };
    ae(l, (h) => {
      r() ? h(u) : h(d, !1);
    });
  }
  return A(t, a), ce(s);
}
se(Pv, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var y4 = /* @__PURE__ */ re("<!> <!>", 1);
function hc(t, e) {
  ue(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), k = g(e, "dir", 7), P = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), I = g(e, "style", 7), H = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), N = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), z = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), O = g(e, "loop", 7), M = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), T = g(e, "enabled", 7), G = g(e, "ref", 7), ee = g(e, "tooltip", 7, !1), j = g(e, "contentPointerEvents", 7, "auto"), Z = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled",
    "ref",
    "tooltip",
    "contentPointerEvents"
  ]);
  const X = /* @__PURE__ */ _(() => P() ?? !0), J = /* @__PURE__ */ _(() => C() ?? (c(X) ? "fixed" : "absolute"));
  var oe = {
    get popper() {
      return n();
    },
    set popper(L) {
      n(L), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(L) {
      r(L), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(L) {
      o(L), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(L) {
      i(L), p();
    },
    get id() {
      return s();
    },
    set id(L) {
      s(L), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(L) {
      a(L), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(L) {
      l(L), p();
    },
    get side() {
      return u();
    },
    set side(L) {
      u(L), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(L) {
      d(L), p();
    },
    get align() {
      return h();
    },
    set align(L) {
      h(L), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(L) {
      f(L), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(L) {
      v(L), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(L) {
      m(L), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(L) {
      y(L), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(L) {
      w(L), p();
    },
    get sticky() {
      return b();
    },
    set sticky(L) {
      b(L), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(L) {
      x(L), p();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(L) {
      E(L), p();
    },
    get strategy() {
      return C();
    },
    set strategy(L) {
      C(L), p();
    },
    get dir() {
      return k();
    },
    set dir(L) {
      k(L), p();
    },
    get preventScroll() {
      return P();
    },
    set preventScroll(L) {
      P(L), p();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(L) {
      V(L), p();
    },
    get style() {
      return I();
    },
    set style(L) {
      I(L), p();
    },
    get onPlaced() {
      return H();
    },
    set onPlaced(L) {
      H(L), p();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(L) {
      D(L), p();
    },
    get onCloseAutoFocus() {
      return N();
    },
    set onCloseAutoFocus(L) {
      N(L), p();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(L) {
      S(L), p();
    },
    get onFocusOutside() {
      return z();
    },
    set onFocusOutside(L) {
      z(L), p();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(L = "close") {
      $(L), p();
    },
    get loop() {
      return O();
    },
    set loop(L) {
      O(L), p();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(L = !0) {
      M(L), p();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(L = () => !1) {
      B(L), p();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(L = null) {
      q(L), p();
    },
    get isStatic() {
      return U();
    },
    set isStatic(L = !1) {
      U(L), p();
    },
    get enabled() {
      return T();
    },
    set enabled(L) {
      T(L), p();
    },
    get ref() {
      return G();
    },
    set ref(L) {
      G(L), p();
    },
    get tooltip() {
      return ee();
    },
    set tooltip(L = !1) {
      ee(L), p();
    },
    get contentPointerEvents() {
      return j();
    },
    set contentPointerEvents(L = "auto") {
      j(L), p();
    }
  };
  return Pv(t, {
    get isStatic() {
      return U();
    },
    get id() {
      return s();
    },
    get side() {
      return u();
    },
    get sideOffset() {
      return d();
    },
    get align() {
      return h();
    },
    get alignOffset() {
      return f();
    },
    get arrowPadding() {
      return v();
    },
    get avoidCollisions() {
      return m();
    },
    get collisionBoundary() {
      return y();
    },
    get collisionPadding() {
      return w();
    },
    get sticky() {
      return b();
    },
    get hideWhenDetached() {
      return x();
    },
    get updatePositionStrategy() {
      return E();
    },
    get strategy() {
      return c(J);
    },
    get dir() {
      return k();
    },
    get wrapperId() {
      return V();
    },
    get style() {
      return I();
    },
    get onPlaced() {
      return H();
    },
    get customAnchor() {
      return q();
    },
    get enabled() {
      return T();
    },
    get tooltip() {
      return ee();
    },
    content: (L, ne) => {
      let me = () => ne?.().props, fe = () => ne?.().wrapperProps;
      var ie = y4(), le = Q(ie);
      {
        var ve = (de) => {
          Ll(de, {
            get preventScroll() {
              return c(X);
            }
          });
        }, be = (de) => {
          var Ce = he(), De = Q(Ce);
          {
            var te = (Ve) => {
              Ll(Ve, {
                get preventScroll() {
                  return c(X);
                }
              });
            };
            ae(
              De,
              (Ve) => {
                e.forceMount || Ve(te);
              },
              !0
            );
          }
          A(de, Ce);
        };
        ae(le, (de) => {
          e.forceMount && T() ? de(ve) : de(be, !1);
        });
      }
      var ke = R(le, 2);
      tv(ke, {
        get onOpenAutoFocus() {
          return S();
        },
        get onCloseAutoFocus() {
          return N();
        },
        get loop() {
          return O();
        },
        get enabled() {
          return T();
        },
        get trapFocus() {
          return M();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return G();
        },
        focusScope: (de, Ce) => {
          let De = () => Ce?.().props;
          ev(de, {
            get onEscapeKeydown() {
              return r();
            },
            get escapeKeydownBehavior() {
              return o();
            },
            get enabled() {
              return T();
            },
            get ref() {
              return G();
            },
            children: (te, Ve) => {
              Qg(te, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return D();
                },
                get onFocusOutside() {
                  return z();
                },
                get interactOutsideBehavior() {
                  return $();
                },
                get isValidEvent() {
                  return B();
                },
                get enabled() {
                  return T();
                },
                get ref() {
                  return G();
                },
                children: (Ne, We) => {
                  let Re = () => We?.().props;
                  nv(Ne, {
                    get id() {
                      return s();
                    },
                    get preventOverflowTextSelection() {
                      return i();
                    },
                    get onPointerDown() {
                      return a();
                    },
                    get onPointerUp() {
                      return l();
                    },
                    get enabled() {
                      return T();
                    },
                    get ref() {
                      return G();
                    },
                    children: (Ke, wt) => {
                      var bt = he(), lt = Q(bt);
                      {
                        let ye = /* @__PURE__ */ _(() => ({
                          props: Gn(Z, me(), Re(), De(), { style: { pointerEvents: j() } }),
                          wrapperProps: fe()
                        }));
                        ze(lt, () => n() ?? qe, () => c(ye));
                      }
                      A(Ke, bt);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { focusScope: !0 }
      }), A(L, ie);
    },
    $$slots: { content: !0 }
  }), ce(oe);
}
se(
  hc,
  {
    popper: {},
    onEscapeKeydown: {},
    escapeKeydownBehavior: {},
    preventOverflowTextSelection: {},
    id: {},
    onPointerDown: {},
    onPointerUp: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    preventScroll: {},
    wrapperId: {},
    style: {},
    onPlaced: {},
    onInteractOutside: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    onFocusOutside: {},
    interactOutsideBehavior: {},
    loop: {},
    trapFocus: {},
    isValidEvent: {},
    customAnchor: {},
    isStatic: {},
    enabled: {},
    ref: {},
    tooltip: {},
    contentPointerEvents: {}
  },
  [],
  [],
  !0
);
function Nv(t, e) {
  ue(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), f = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), x = g(e, "sticky", 7), E = g(e, "hideWhenDetached", 7), C = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), P = g(e, "dir", 7), V = g(e, "preventScroll", 7), I = g(e, "wrapperId", 7), H = g(e, "style", 7), D = g(e, "onPlaced", 7), N = g(e, "onInteractOutside", 7), S = g(e, "onCloseAutoFocus", 7), z = g(e, "onOpenAutoFocus", 7), $ = g(e, "onFocusOutside", 7), O = g(e, "interactOutsideBehavior", 7, "close"), M = g(e, "loop", 7), B = g(e, "trapFocus", 7, !0), q = g(e, "isValidEvent", 7, () => !1), U = g(e, "customAnchor", 7, null), T = g(e, "isStatic", 7, !1), G = g(e, "ref", 7), ee = g(e, "shouldRender", 7), j = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "popper",
    "open",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "ref",
    "shouldRender"
  ]);
  var Z = {
    get popper() {
      return n();
    },
    set popper(L) {
      n(L), p();
    },
    get open() {
      return r();
    },
    set open(L) {
      r(L), p();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(L) {
      o(L), p();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(L) {
      i(L), p();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(L) {
      s(L), p();
    },
    get id() {
      return a();
    },
    set id(L) {
      a(L), p();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(L) {
      l(L), p();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(L) {
      u(L), p();
    },
    get side() {
      return d();
    },
    set side(L) {
      d(L), p();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(L) {
      h(L), p();
    },
    get align() {
      return f();
    },
    set align(L) {
      f(L), p();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(L) {
      v(L), p();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(L) {
      m(L), p();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(L) {
      y(L), p();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(L) {
      w(L), p();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(L) {
      b(L), p();
    },
    get sticky() {
      return x();
    },
    set sticky(L) {
      x(L), p();
    },
    get hideWhenDetached() {
      return E();
    },
    set hideWhenDetached(L) {
      E(L), p();
    },
    get updatePositionStrategy() {
      return C();
    },
    set updatePositionStrategy(L) {
      C(L), p();
    },
    get strategy() {
      return k();
    },
    set strategy(L) {
      k(L), p();
    },
    get dir() {
      return P();
    },
    set dir(L) {
      P(L), p();
    },
    get preventScroll() {
      return V();
    },
    set preventScroll(L) {
      V(L), p();
    },
    get wrapperId() {
      return I();
    },
    set wrapperId(L) {
      I(L), p();
    },
    get style() {
      return H();
    },
    set style(L) {
      H(L), p();
    },
    get onPlaced() {
      return D();
    },
    set onPlaced(L) {
      D(L), p();
    },
    get onInteractOutside() {
      return N();
    },
    set onInteractOutside(L) {
      N(L), p();
    },
    get onCloseAutoFocus() {
      return S();
    },
    set onCloseAutoFocus(L) {
      S(L), p();
    },
    get onOpenAutoFocus() {
      return z();
    },
    set onOpenAutoFocus(L) {
      z(L), p();
    },
    get onFocusOutside() {
      return $();
    },
    set onFocusOutside(L) {
      $(L), p();
    },
    get interactOutsideBehavior() {
      return O();
    },
    set interactOutsideBehavior(L = "close") {
      O(L), p();
    },
    get loop() {
      return M();
    },
    set loop(L) {
      M(L), p();
    },
    get trapFocus() {
      return B();
    },
    set trapFocus(L = !0) {
      B(L), p();
    },
    get isValidEvent() {
      return q();
    },
    set isValidEvent(L = () => !1) {
      q(L), p();
    },
    get customAnchor() {
      return U();
    },
    set customAnchor(L = null) {
      U(L), p();
    },
    get isStatic() {
      return T();
    },
    set isStatic(L = !1) {
      T(L), p();
    },
    get ref() {
      return G();
    },
    set ref(L) {
      G(L), p();
    },
    get shouldRender() {
      return ee();
    },
    set shouldRender(L) {
      ee(L), p();
    }
  }, X = he(), J = Q(X);
  {
    var oe = (L) => {
      hc(L, Xe(
        {
          get popper() {
            return n();
          },
          get onEscapeKeydown() {
            return o();
          },
          get escapeKeydownBehavior() {
            return i();
          },
          get preventOverflowTextSelection() {
            return s();
          },
          get id() {
            return a();
          },
          get onPointerDown() {
            return l();
          },
          get onPointerUp() {
            return u();
          },
          get side() {
            return d();
          },
          get sideOffset() {
            return h();
          },
          get align() {
            return f();
          },
          get alignOffset() {
            return v();
          },
          get arrowPadding() {
            return m();
          },
          get avoidCollisions() {
            return y();
          },
          get collisionBoundary() {
            return w();
          },
          get collisionPadding() {
            return b();
          },
          get sticky() {
            return x();
          },
          get hideWhenDetached() {
            return E();
          },
          get updatePositionStrategy() {
            return C();
          },
          get strategy() {
            return k();
          },
          get dir() {
            return P();
          },
          get preventScroll() {
            return V();
          },
          get wrapperId() {
            return I();
          },
          get style() {
            return H();
          },
          get onPlaced() {
            return D();
          },
          get customAnchor() {
            return U();
          },
          get isStatic() {
            return T();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return N();
          },
          get onCloseAutoFocus() {
            return S();
          },
          get onOpenAutoFocus() {
            return z();
          },
          get interactOutsideBehavior() {
            return O();
          },
          get loop() {
            return M();
          },
          get trapFocus() {
            return B();
          },
          get isValidEvent() {
            return q();
          },
          get onFocusOutside() {
            return $();
          },
          forceMount: !1,
          get ref() {
            return G();
          }
        },
        () => j
      ));
    };
    ae(J, (L) => {
      ee() && L(oe);
    });
  }
  return A(t, X), ce(Z);
}
se(
  Nv,
  {
    popper: {},
    open: {},
    onEscapeKeydown: {},
    escapeKeydownBehavior: {},
    preventOverflowTextSelection: {},
    id: {},
    onPointerDown: {},
    onPointerUp: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    preventScroll: {},
    wrapperId: {},
    style: {},
    onPlaced: {},
    onInteractOutside: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    onFocusOutside: {},
    interactOutsideBehavior: {},
    loop: {},
    trapFocus: {},
    isValidEvent: {},
    customAnchor: {},
    isStatic: {},
    ref: {},
    shouldRender: {}
  },
  [],
  [],
  !0
);
function Mv(t, e) {
  ue(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), E = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), k = g(e, "dir", 7), P = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), I = g(e, "style", 7), H = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), N = g(e, "onCloseAutoFocus", 7), S = g(e, "onOpenAutoFocus", 7), z = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), O = g(e, "loop", 7), M = g(e, "trapFocus", 7, !0), B = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), U = g(e, "isStatic", 7, !1), T = g(e, "enabled", 7), G = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  var ee = {
    get popper() {
      return n();
    },
    set popper(j) {
      n(j), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(j) {
      r(j), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(j) {
      o(j), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(j) {
      i(j), p();
    },
    get id() {
      return s();
    },
    set id(j) {
      s(j), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(j) {
      a(j), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(j) {
      l(j), p();
    },
    get side() {
      return u();
    },
    set side(j) {
      u(j), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(j) {
      d(j), p();
    },
    get align() {
      return h();
    },
    set align(j) {
      h(j), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(j) {
      f(j), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(j) {
      v(j), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(j) {
      m(j), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(j) {
      y(j), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(j) {
      w(j), p();
    },
    get sticky() {
      return b();
    },
    set sticky(j) {
      b(j), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(j) {
      x(j), p();
    },
    get updatePositionStrategy() {
      return E();
    },
    set updatePositionStrategy(j) {
      E(j), p();
    },
    get strategy() {
      return C();
    },
    set strategy(j) {
      C(j), p();
    },
    get dir() {
      return k();
    },
    set dir(j) {
      k(j), p();
    },
    get preventScroll() {
      return P();
    },
    set preventScroll(j) {
      P(j), p();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(j) {
      V(j), p();
    },
    get style() {
      return I();
    },
    set style(j) {
      I(j), p();
    },
    get onPlaced() {
      return H();
    },
    set onPlaced(j) {
      H(j), p();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(j) {
      D(j), p();
    },
    get onCloseAutoFocus() {
      return N();
    },
    set onCloseAutoFocus(j) {
      N(j), p();
    },
    get onOpenAutoFocus() {
      return S();
    },
    set onOpenAutoFocus(j) {
      S(j), p();
    },
    get onFocusOutside() {
      return z();
    },
    set onFocusOutside(j) {
      z(j), p();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(j = "close") {
      $(j), p();
    },
    get loop() {
      return O();
    },
    set loop(j) {
      O(j), p();
    },
    get trapFocus() {
      return M();
    },
    set trapFocus(j = !0) {
      M(j), p();
    },
    get isValidEvent() {
      return B();
    },
    set isValidEvent(j = () => !1) {
      B(j), p();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(j = null) {
      q(j), p();
    },
    get isStatic() {
      return U();
    },
    set isStatic(j = !1) {
      U(j), p();
    },
    get enabled() {
      return T();
    },
    set enabled(j) {
      T(j), p();
    }
  };
  return hc(t, Xe(
    {
      get popper() {
        return n();
      },
      get onEscapeKeydown() {
        return r();
      },
      get escapeKeydownBehavior() {
        return o();
      },
      get preventOverflowTextSelection() {
        return i();
      },
      get id() {
        return s();
      },
      get onPointerDown() {
        return a();
      },
      get onPointerUp() {
        return l();
      },
      get side() {
        return u();
      },
      get sideOffset() {
        return d();
      },
      get align() {
        return h();
      },
      get alignOffset() {
        return f();
      },
      get arrowPadding() {
        return v();
      },
      get avoidCollisions() {
        return m();
      },
      get collisionBoundary() {
        return y();
      },
      get collisionPadding() {
        return w();
      },
      get sticky() {
        return b();
      },
      get hideWhenDetached() {
        return x();
      },
      get updatePositionStrategy() {
        return E();
      },
      get strategy() {
        return C();
      },
      get dir() {
        return k();
      },
      get preventScroll() {
        return P();
      },
      get wrapperId() {
        return V();
      },
      get style() {
        return I();
      },
      get onPlaced() {
        return H();
      },
      get customAnchor() {
        return q();
      },
      get isStatic() {
        return U();
      },
      get enabled() {
        return T();
      },
      get onInteractOutside() {
        return D();
      },
      get onCloseAutoFocus() {
        return N();
      },
      get onOpenAutoFocus() {
        return S();
      },
      get interactOutsideBehavior() {
        return $();
      },
      get loop() {
        return O();
      },
      get trapFocus() {
        return M();
      },
      get isValidEvent() {
        return B();
      },
      get onFocusOutside() {
        return z();
      }
    },
    () => G,
    { forceMount: !0 }
  )), ce(ee);
}
se(
  Mv,
  {
    popper: {},
    onEscapeKeydown: {},
    escapeKeydownBehavior: {},
    preventOverflowTextSelection: {},
    id: {},
    onPointerDown: {},
    onPointerUp: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: {},
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: {},
    updatePositionStrategy: {},
    strategy: {},
    dir: {},
    preventScroll: {},
    wrapperId: {},
    style: {},
    onPlaced: {},
    onInteractOutside: {},
    onCloseAutoFocus: {},
    onOpenAutoFocus: {},
    onFocusOutside: {},
    interactOutsideBehavior: {},
    loop: {},
    trapFocus: {},
    isValidEvent: {},
    customAnchor: {},
    isStatic: {},
    enabled: {}
  },
  [],
  [],
  !0
);
var w4 = /* @__PURE__ */ re("<div><div><!></div></div>"), b4 = /* @__PURE__ */ re("<div><div><!></div></div>");
function Bl(t, e) {
  const n = Di();
  ue(e, !0);
  let r = g(e, "id", 23, () => Qn(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, Ye), l = g(e, "onEscapeKeydown", 7, Ye), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), f = g(e, "style", 7), v = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "forceMount",
    "side",
    "onInteractOutside",
    "onEscapeKeydown",
    "children",
    "child",
    "preventScroll",
    "style"
  ]);
  const m = lc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (k) => o(k)),
    onInteractOutside: ge(() => a()),
    onEscapeKeydown: ge(() => l())
  }), y = /* @__PURE__ */ _(() => Gn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(k = Qn(n)) {
      r(k), p();
    },
    get ref() {
      return o();
    },
    set ref(k = null) {
      o(k), p();
    },
    get forceMount() {
      return i();
    },
    set forceMount(k = !1) {
      i(k), p();
    },
    get side() {
      return s();
    },
    set side(k = "bottom") {
      s(k), p();
    },
    get onInteractOutside() {
      return a();
    },
    set onInteractOutside(k = Ye) {
      a(k), p();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(k = Ye) {
      l(k), p();
    },
    get children() {
      return u();
    },
    set children(k) {
      u(k), p();
    },
    get child() {
      return d();
    },
    set child(k) {
      d(k), p();
    },
    get preventScroll() {
      return h();
    },
    set preventScroll(k = !1) {
      h(k), p();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), p();
    }
  }, b = he(), x = Q(b);
  {
    var E = (k) => {
      Mv(k, Xe(() => c(y), () => m.popperProps, {
        get ref() {
          return m.opts.ref;
        },
        get side() {
          return s();
        },
        get enabled() {
          return m.root.opts.open.current;
        },
        get id() {
          return r();
        },
        get preventScroll() {
          return h();
        },
        forceMount: !0,
        get shouldRender() {
          return m.shouldRender;
        },
        popper: (P, V) => {
          let I = () => V?.().props, H = () => V?.().wrapperProps;
          const D = /* @__PURE__ */ _(() => Gn(I(), { style: m.props.style }, { style: f() }));
          var N = he(), S = Q(N);
          {
            var z = (O) => {
              var M = he(), B = Q(M);
              {
                let q = /* @__PURE__ */ _(() => ({
                  props: c(D),
                  wrapperProps: H(),
                  ...m.snippetProps
                }));
                ze(B, d, () => c(q));
              }
              A(O, M);
            }, $ = (O) => {
              var M = w4();
              ot(M, () => ({ ...H() }));
              var B = Y(M);
              ot(B, () => ({ ...c(D) }));
              var q = Y(B);
              ze(q, () => u() ?? qe), W(B), W(M), A(O, M);
            };
            ae(S, (O) => {
              d() ? O(z) : O($, !1);
            });
          }
          A(P, N);
        },
        $$slots: { popper: !0 }
      }));
    }, C = (k) => {
      var P = he(), V = Q(P);
      {
        var I = (H) => {
          Nv(H, Xe(() => c(y), () => m.popperProps, {
            get ref() {
              return m.opts.ref;
            },
            get side() {
              return s();
            },
            get open() {
              return m.root.opts.open.current;
            },
            get id() {
              return r();
            },
            get preventScroll() {
              return h();
            },
            forceMount: !1,
            get shouldRender() {
              return m.shouldRender;
            },
            popper: (D, N) => {
              let S = () => N?.().props, z = () => N?.().wrapperProps;
              const $ = /* @__PURE__ */ _(() => Gn(S(), { style: m.props.style }, { style: f() }));
              var O = he(), M = Q(O);
              {
                var B = (U) => {
                  var T = he(), G = Q(T);
                  {
                    let ee = /* @__PURE__ */ _(() => ({
                      props: c($),
                      wrapperProps: z(),
                      ...m.snippetProps
                    }));
                    ze(G, d, () => c(ee));
                  }
                  A(U, T);
                }, q = (U) => {
                  var T = b4();
                  ot(T, () => ({ ...z() }));
                  var G = Y(T);
                  ot(G, () => ({ ...c($) }));
                  var ee = Y(G);
                  ze(ee, () => u() ?? qe), W(G), W(T), A(U, T);
                };
                ae(M, (U) => {
                  d() ? U(B) : U(q, !1);
                });
              }
              A(D, O);
            },
            $$slots: { popper: !0 }
          }));
        };
        ae(
          V,
          (H) => {
            i() || H(I);
          },
          !0
        );
      }
      A(k, P);
    };
    ae(x, (k) => {
      i() ? k(E) : k(C, !1);
    });
  }
  return A(t, b), ce(w);
}
se(
  Bl,
  {
    id: {},
    ref: {},
    forceMount: {},
    side: {},
    onInteractOutside: {},
    onEscapeKeydown: {},
    children: {},
    child: {},
    preventScroll: {},
    style: {}
  },
  [],
  [],
  !0
);
function zv(t, e) {
  ue(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, Ye);
  G5(() => (n(!0), r()(!0), () => {
    n(!1), r()(!1);
  }));
  var o = {
    get mounted() {
      return n();
    },
    set mounted(i = !1) {
      n(i), p();
    },
    get onMountedChange() {
      return r();
    },
    set onMountedChange(i = Ye) {
      r(i), p();
    }
  };
  return ce(o);
}
se(zv, { mounted: {}, onMountedChange: {} }, [], [], !0);
var x4 = /* @__PURE__ */ re("<div><!></div>"), k4 = /* @__PURE__ */ re("<!> <!>", 1);
function Kl(t, e) {
  const n = Di();
  ue(e, !0);
  let r = g(e, "id", 23, () => Qn(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, Ye), h = g(e, "onUnhighlight", 7, Ye), f = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "value",
    "label",
    "disabled",
    "children",
    "child",
    "onHighlight",
    "onUnhighlight"
  ]);
  const v = uc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (k) => o(k)),
    value: ge(() => i()),
    disabled: ge(() => a()),
    label: ge(() => s()),
    onHighlight: ge(() => d()),
    onUnhighlight: ge(() => h())
  }), m = /* @__PURE__ */ _(() => Gn(f, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(k = Qn(n)) {
      r(k), p();
    },
    get ref() {
      return o();
    },
    set ref(k = null) {
      o(k), p();
    },
    get value() {
      return i();
    },
    set value(k) {
      i(k), p();
    },
    get label() {
      return s();
    },
    set label(k = i) {
      s(k), p();
    },
    get disabled() {
      return a();
    },
    set disabled(k = !1) {
      a(k), p();
    },
    get children() {
      return l();
    },
    set children(k) {
      l(k), p();
    },
    get child() {
      return u();
    },
    set child(k) {
      u(k), p();
    },
    get onHighlight() {
      return d();
    },
    set onHighlight(k = Ye) {
      d(k), p();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(k = Ye) {
      h(k), p();
    }
  }, w = k4(), b = Q(w);
  {
    var x = (k) => {
      var P = he(), V = Q(P);
      {
        let I = /* @__PURE__ */ _(() => ({ props: c(m), ...v.snippetProps }));
        ze(V, u, () => c(I));
      }
      A(k, P);
    }, E = (k) => {
      var P = x4();
      ot(P, () => ({ ...c(m) }));
      var V = Y(P);
      ze(V, () => l() ?? qe, () => v.snippetProps), W(P), A(k, P);
    };
    ae(b, (k) => {
      u() ? k(x) : k(E, !1);
    });
  }
  var C = R(b, 2);
  return zv(C, {
    get mounted() {
      return v.mounted;
    },
    set mounted(k) {
      v.mounted = k;
    }
  }), A(t, w), ce(y);
}
se(
  Kl,
  {
    id: {},
    ref: {},
    value: {},
    label: {},
    disabled: {},
    children: {},
    child: {},
    onHighlight: {},
    onUnhighlight: {}
  },
  [],
  [],
  !0
);
var C4 = /* @__PURE__ */ re("<div><!></div>");
const $4 = {
  hash: "svelte-1dj2lcd",
  code: `
	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}`
};
function Fl(t, e) {
  const n = Di();
  ue(e, !0), it(t, $4);
  let r = g(e, "id", 23, () => Qn(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = dc.create({
    id: ge(() => r()),
    ref: ge(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ _(() => Gn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = Qn(n)) {
      r(y), p();
    },
    get ref() {
      return o();
    },
    set ref(y = null) {
      o(y), p();
    },
    get children() {
      return i();
    },
    set children(y) {
      i(y), p();
    },
    get child() {
      return s();
    },
    set child(y) {
      s(y), p();
    }
  }, h = he(), f = Q(h);
  {
    var v = (y) => {
      var w = he(), b = Q(w);
      ze(b, s, () => ({ props: c(u) })), A(y, w);
    }, m = (y) => {
      var w = C4();
      ot(w, () => ({ ...c(u) }));
      var b = Y(w);
      ze(b, () => i() ?? qe), W(w), A(y, w);
    };
    ae(f, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return A(t, h), ce(d);
}
se(Fl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var S4 = /* @__PURE__ */ re("<!> <!>", 1);
function Zl(t, e) {
  ue(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, Ye), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, Ye), u = g(e, "onOpenChangeComplete", 7, Ye), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), f = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), Mt.pre(() => n(), () => {
    b();
  });
  let x = /* @__PURE__ */ we("");
  const E = m4.create({
    type: s(),
    value: ge(() => n(), (D) => {
      n(D), r()(D);
    }),
    disabled: ge(() => i()),
    required: ge(() => f()),
    open: ge(() => a(), (D) => {
      a(D), l()(D);
    }),
    loop: ge(() => d()),
    scrollAlignment: ge(() => h()),
    name: ge(() => o()),
    isCombobox: !1,
    items: ge(() => v()),
    allowDeselect: ge(() => m()),
    inputValue: ge(() => c(x), (D) => F(x, D, !0)),
    onOpenChangeComplete: ge(() => u())
  });
  var C = {
    get value() {
      return n();
    },
    set value(D) {
      n(D), p();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(D = Ye) {
      r(D), p();
    },
    get name() {
      return o();
    },
    set name(D = "") {
      o(D), p();
    },
    get disabled() {
      return i();
    },
    set disabled(D = !1) {
      i(D), p();
    },
    get type() {
      return s();
    },
    set type(D) {
      s(D), p();
    },
    get open() {
      return a();
    },
    set open(D = !1) {
      a(D), p();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(D = Ye) {
      l(D), p();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(D = Ye) {
      u(D), p();
    },
    get loop() {
      return d();
    },
    set loop(D = !1) {
      d(D), p();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(D = "nearest") {
      h(D), p();
    },
    get required() {
      return f();
    },
    set required(D = !1) {
      f(D), p();
    },
    get items() {
      return v();
    },
    set items(D = []) {
      v(D), p();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(D = !1) {
      m(D), p();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(D) {
      y(D), p();
    },
    get children() {
      return w();
    },
    set children(D) {
      w(D), p();
    }
  }, k = S4(), P = Q(k);
  Cv(P, {
    children: (D, N) => {
      var S = he(), z = Q(S);
      ze(z, () => w() ?? qe), A(D, S);
    },
    $$slots: { default: !0 }
  });
  var V = R(P, 2);
  {
    var I = (D) => {
      var N = he(), S = Q(N);
      {
        var z = (O) => {
          Es(O, {
            get autocomplete() {
              return y();
            }
          });
        }, $ = (O) => {
          var M = he(), B = Q(M);
          At(B, 16, () => E.opts.value.current, (q) => q, (q, U) => {
            Es(q, {
              get value() {
                return U;
              },
              get autocomplete() {
                return y();
              }
            });
          }), A(O, M);
        };
        ae(S, (O) => {
          E.opts.value.current.length === 0 ? O(z) : O($, !1);
        });
      }
      A(D, N);
    }, H = (D) => {
      Es(D, {
        get autocomplete() {
          return y();
        },
        get value() {
          return E.opts.value.current;
        },
        set value(N) {
          E.opts.value.current = N;
        }
      });
    };
    ae(V, (D) => {
      Array.isArray(E.opts.value.current) ? D(I) : D(H, !1);
    });
  }
  return A(t, k), ce(C);
}
se(
  Zl,
  {
    value: {},
    onValueChange: {},
    name: {},
    disabled: {},
    type: {},
    open: {},
    onOpenChange: {},
    onOpenChangeComplete: {},
    loop: {},
    scrollAlignment: {},
    required: {},
    items: {},
    allowDeselect: {},
    autocomplete: {},
    children: {}
  },
  [],
  [],
  !0
);
var _4 = /* @__PURE__ */ re("<button><!></button>");
function Wl(t, e) {
  const n = Di();
  ue(e, !0);
  let r = g(e, "id", 23, () => Qn(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "child",
    "children",
    "type"
  ]);
  const u = ac.create({
    id: ge(() => r()),
    ref: ge(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ _(() => Gn(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = Qn(n)) {
      r(m), p();
    },
    get ref() {
      return o();
    },
    set ref(m = null) {
      o(m), p();
    },
    get child() {
      return i();
    },
    set child(m) {
      i(m), p();
    },
    get children() {
      return s();
    },
    set children(m) {
      s(m), p();
    },
    get type() {
      return a();
    },
    set type(m = "button") {
      a(m), p();
    }
  }, f = he(), v = Q(f);
  return It(v, () => _v, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var x = he(), E = Q(x);
        {
          var C = (P) => {
            var V = he(), I = Q(V);
            ze(I, i, () => ({ props: c(d) })), A(P, V);
          }, k = (P) => {
            var V = _4();
            ot(V, () => ({ ...c(d) }));
            var I = Y(V);
            ze(I, () => s() ?? qe), W(V), A(P, V);
          };
          ae(E, (P) => {
            i() ? P(C) : P(k, !1);
          });
        }
        A(w, x);
      },
      $$slots: { default: !0 }
    });
  }), A(t, f), ce(h);
}
se(Wl, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const E4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, O4 = (t) => {
  for (const e in t)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
  return !1;
}, P4 = Symbol("lucide-context"), N4 = () => Tn(P4);
var M4 = /* @__PURE__ */ _e("<svg><!><!></svg>");
function Ia(t, e) {
  ue(e, !0);
  const n = N4() ?? {}, r = g(e, "name", 7), o = g(e, "color", 23, () => n.color ?? "currentColor"), i = g(e, "size", 23, () => n.size ?? 24), s = g(e, "strokeWidth", 23, () => n.strokeWidth ?? 2), a = g(e, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), l = g(e, "iconNode", 23, () => []), u = g(e, "children", 7), d = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]), h = /* @__PURE__ */ _(() => a() ? Number(s()) * 24 / Number(i()) : s());
  var f = {
    get name() {
      return r();
    },
    set name(w) {
      r(w), p();
    },
    get color() {
      return o();
    },
    set color(w = n.color ?? "currentColor") {
      o(w), p();
    },
    get size() {
      return i();
    },
    set size(w = n.size ?? 24) {
      i(w), p();
    },
    get strokeWidth() {
      return s();
    },
    set strokeWidth(w = n.strokeWidth ?? 2) {
      s(w), p();
    },
    get absoluteStrokeWidth() {
      return a();
    },
    set absoluteStrokeWidth(w = n.absoluteStrokeWidth ?? !1) {
      a(w), p();
    },
    get iconNode() {
      return l();
    },
    set iconNode(w = []) {
      l(w), p();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), p();
    }
  }, v = M4();
  ot(
    v,
    (w) => ({
      ...E4,
      ...w,
      ...d,
      width: i(),
      height: i(),
      stroke: o(),
      "stroke-width": c(h),
      class: [
        "lucide-icon lucide",
        n.class,
        r() && `lucide-${r()}`,
        e.class
      ]
    }),
    [
      () => !u() && !O4(d) && { "aria-hidden": "true" }
    ]
  );
  var m = Y(v);
  At(m, 17, l, uo, (w, b) => {
    var x = /* @__PURE__ */ _(() => Fo(c(b), 2));
    let E = () => c(x)[0], C = () => c(x)[1];
    var k = he(), P = Q(k);
    ff(P, E, !0, (V, I) => {
      ot(V, () => ({ ...C() }));
    }), A(w, k);
  });
  var y = R(m);
  return ze(y, () => u() ?? qe), W(v), A(t, v), ce(f);
}
se(
  Ia,
  {
    name: {},
    color: {},
    size: {},
    strokeWidth: {},
    absoluteStrokeWidth: {},
    iconNode: {},
    children: {}
  },
  [],
  [],
  !0
);
function Tv(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  Ia(t, Xe({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = he(), a = Q(s);
      ze(a, () => e.children ?? qe), A(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(Tv, {}, [], [], !0);
function Av(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  Ia(t, Xe({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = he(), a = Q(s);
      ze(a, () => e.children ?? qe), A(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(Av, {}, [], [], !0);
var z4 = /* @__PURE__ */ re('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function Dv(t, e) {
  ue(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "checked", 15, !1), o = g(e, "indeterminate", 15, !1), i = g(e, "class", 7), s = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "ref",
    "checked",
    "indeterminate",
    "class"
  ]);
  var a = {
    get ref() {
      return n();
    },
    set ref(d = null) {
      n(d), p();
    },
    get checked() {
      return r();
    },
    set checked(d = !1) {
      r(d), p();
    },
    get indeterminate() {
      return o();
    },
    set indeterminate(d = !1) {
      o(d), p();
    },
    get class() {
      return i();
    },
    set class(d) {
      i(d), p();
    }
  }, l = he(), u = Q(l);
  {
    const d = (f, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = z4(), b = Y(w);
      {
        var x = (C) => {
          Tv(C, {});
        }, E = (C) => {
          var k = he(), P = Q(k);
          {
            var V = (I) => {
              Av(I, {});
            };
            ae(
              P,
              (I) => {
                y() && I(V);
              },
              !0
            );
          }
          A(C, k);
        };
        ae(b, (C) => {
          m() ? C(x) : C(E, !1);
        });
      }
      W(w), A(f, w);
    };
    let h = /* @__PURE__ */ _(() => Nn("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    It(u, () => sv, (f, v) => {
      v(f, Xe(
        {
          "data-slot": "checkbox",
          get class() {
            return c(h);
          }
        },
        () => s,
        {
          get ref() {
            return n();
          },
          set ref(m) {
            n(m);
          },
          get checked() {
            return r();
          },
          set checked(m) {
            r(m);
          },
          get indeterminate() {
            return o();
          },
          set indeterminate(m) {
            o(m);
          },
          children: d,
          $$slots: { default: !0 }
        }
      ));
    });
  }
  return A(t, l), ce(a);
}
se(Dv, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var T4 = /* @__PURE__ */ re('<div><input type="hidden"/> <!> <!></div>');
const A4 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Vv(t, e) {
  ue(e, !0), it(t, A4);
  const n = g(e, "placeholder", 7), r = g(e, "label", 7), o = g(e, "value", 7), i = g(e, "buttonText", 7, "选择..."), s = g(e, "onChosen", 7), a = /* @__PURE__ */ je(e, [
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
  var l = {
    get placeholder() {
      return n();
    },
    set placeholder(v) {
      n(v), p();
    },
    get label() {
      return r();
    },
    set label(v) {
      r(v), p();
    },
    get value() {
      return o();
    },
    set value(v) {
      o(v), p();
    },
    get buttonText() {
      return i();
    },
    set buttonText(v = "选择...") {
      i(v), p();
    },
    get onChosen() {
      return s();
    },
    set onChosen(v) {
      s(v), p();
    }
  }, u = T4();
  ot(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${e.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = Y(u);
  Ir(d);
  var h = R(d, 2);
  Ot(h, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = R(h, 2);
  return Qe(f, {
    variant: "outline",
    onclick: (v) => {
      s()?.(o(), r(), v);
    },
    style: "padding: 3px",
    children: (v, m) => {
      Oe();
      var y = Le();
      Te(() => ht(y, i())), A(v, y);
    },
    $$slots: { default: !0 }
  }), W(u), Te(() => ys(d, o())), A(t, u), ce(l);
}
se(
  Vv,
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
var D4 = /* @__PURE__ */ re("<input/>"), V4 = /* @__PURE__ */ re("<input/>");
function Ot(t, e) {
  ue(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "type", 7), i = g(e, "files", 15), s = g(e, "class", 7), a = g(e, "data-slot", 7, "input"), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "ref",
    "value",
    "type",
    "files",
    "class",
    "data-slot"
  ]);
  var u = {
    get ref() {
      return n();
    },
    set ref(m = null) {
      n(m), p();
    },
    get value() {
      return r();
    },
    set value(m) {
      r(m), p();
    },
    get type() {
      return o();
    },
    set type(m) {
      o(m), p();
    },
    get files() {
      return i();
    },
    set files(m) {
      i(m), p();
    },
    get class() {
      return s();
    },
    set class(m) {
      s(m), p();
    },
    get "data-slot"() {
      return a();
    },
    set "data-slot"(m = "input") {
      a(m), p();
    }
  }, d = he(), h = Q(d);
  {
    var f = (m) => {
      var y = D4();
      ot(
        y,
        (w) => ({
          "data-slot": a(),
          class: w,
          type: "file",
          ...l
        }),
        [
          () => Nn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Kt(y, (w) => n(w), () => n()), i0(y, i), Vs(y, r), A(m, y);
    }, v = (m) => {
      var y = V4();
      ot(
        y,
        (w) => ({
          "data-slot": a(),
          spellcheck: "false",
          class: w,
          type: o(),
          ...l
        }),
        [
          () => Nn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Kt(y, (w) => n(w), () => n()), Vs(y, r), A(m, y);
    };
    ae(h, (m) => {
      o() === "file" ? m(f) : m(v, !1);
    });
  }
  return A(t, d), ce(u);
}
se(
  Ot,
  {
    ref: {},
    value: {},
    type: {},
    files: {},
    class: {},
    "data-slot": {}
  },
  [],
  [],
  !0
);
var I4 = /* @__PURE__ */ re("<textarea></textarea>");
function ut(t, e) {
  ue(e, !0);
  let n = g(e, "ref", 15, null), r = g(e, "value", 15), o = g(e, "class", 7), i = g(e, "data-slot", 7, "textarea"), s = g(e, "height", 7), a = g(e, "autoHeight", 7, !0), l = g(e, "maxHeight", 7), u = g(e, "onHeightChange", 7), d = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "ref",
    "value",
    "class",
    "data-slot",
    "height",
    "autoHeight",
    "maxHeight",
    "onHeightChange"
  ]), h, f;
  function v() {
    if (h && a()) {
      if (s() !== void 0) {
        const E = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = E, h.style.overflowY = "hidden", u()?.(E);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let x = h.scrollHeight;
      if (!f) {
        const E = e.rows || 1, C = getComputedStyle(h);
        f = parseFloat(C.fontSize) * 1.2 * E + parseFloat(C.paddingTop) + parseFloat(C.paddingBottom) + parseFloat(C.borderTopWidth);
      }
      if (x < f && (x = f), l()) {
        const E = typeof l() == "number" ? `${l()}px` : l();
        x > parseInt(E) ? (h.style.height = E, h.style.overflowY = "auto") : h.style.height = `${x}px`;
      } else
        h.style.height = `${x}px`;
      u()?.(h.style.height);
    }
  }
  Ze(() => {
    v();
  });
  var m = {
    get ref() {
      return n();
    },
    set ref(x = null) {
      n(x), p();
    },
    get value() {
      return r();
    },
    set value(x) {
      r(x), p();
    },
    get class() {
      return o();
    },
    set class(x) {
      o(x), p();
    },
    get "data-slot"() {
      return i();
    },
    set "data-slot"(x = "textarea") {
      i(x), p();
    },
    get height() {
      return s();
    },
    set height(x) {
      s(x), p();
    },
    get autoHeight() {
      return a();
    },
    set autoHeight(x = !0) {
      a(x), p();
    },
    get maxHeight() {
      return l();
    },
    set maxHeight(x) {
      l(x), p();
    },
    get onHeightChange() {
      return u();
    },
    set onHeightChange(x) {
      u(x), p();
    }
  }, y = I4();
  O1(y);
  var w = (x) => {
    v(), e.oninput?.(x);
  }, b = (x) => {
    v(), e.onchange?.(x);
  };
  return ot(
    y,
    (x) => ({
      spellcheck: "false",
      ...d,
      "data-slot": i(),
      oninput: w,
      onchange: b,
      class: x
    }),
    [
      () => Nn("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), Kt(y, (x) => h = x, () => h), Vs(y, r), A(t, y), ce(m);
}
se(
  ut,
  {
    ref: {},
    value: {},
    class: {},
    "data-slot": {},
    height: {},
    autoHeight: {},
    maxHeight: {},
    onHeightChange: {}
  },
  [],
  [],
  !0
);
var L4 = /* @__PURE__ */ re('<div role="button"><!></div>'), H4 = /* @__PURE__ */ re("<div></div>");
function Iv(t, e) {
  const n = Rc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Rc(n, ["items", "onChange", "activeIndex"]);
  ue(e, !1);
  let o = g(e, "items", 28, () => []), i = g(e, "onChange", 12, () => {
  }), s = g(e, "activeIndex", 12, 0);
  function a(d, h) {
    s(h), i()?.(d, h);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), p();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), p();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), p();
    }
  };
  bu();
  var u = H4();
  return ot(u, () => ({
    ...r,
    class: `tf-tabs ${gu(r), yt(() => r.class) ?? ""}`
  })), At(u, 5, o, uo, (d, h, f) => {
    var v = L4();
    Me(v, "tabindex", f), v.__click = () => a(c(h), f), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), f));
    };
    var m = Y(v);
    {
      var y = (b) => {
        var x = Le();
        Te(() => ht(x, (c(h), yt(() => c(h).label)))), A(b, x);
      }, w = (b) => {
        var x = he(), E = Q(x);
        ze(E, () => (c(h), yt(() => c(h).label) ?? qe)), A(b, x);
      };
      ae(m, (b) => {
        c(h), yt(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    W(v), Te(() => ln(v, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), A(d, v);
  }), W(u), A(t, u), ce(l);
}
bo(["click", "keydown"]);
se(Iv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var R4 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), j4 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), B4 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), K4 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), F4 = /* @__PURE__ */ re("<div></div>");
const Z4 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Lv(t, e) {
  ue(e, !0), it(t, Z4);
  let n = g(e, "items", 7), r = g(e, "onChange", 7), o = g(e, "activeKeys", 31, () => $t([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), p();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), p();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), p();
    }
  }, a = F4();
  return At(a, 21, n, uo, (l, u, d) => {
    var h = K4(), f = Y(h);
    Me(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), i(c(u)));
    };
    var v = Y(f);
    {
      var m = (k) => {
        var P = R4(), V = Y(P);
        fr(V, {
          get target() {
            return c(u).icon;
          }
        }), W(P), A(k, P);
      };
      ae(v, (k) => {
        c(u).icon && k(m);
      });
    }
    var y = R(v, 2);
    fr(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = R(y, 2);
    W(f);
    var b = R(f, 2);
    {
      var x = (k) => {
        var P = j4(), V = Y(P);
        fr(V, {
          get target() {
            return c(u).description;
          }
        }), W(P), A(k, P);
      };
      ae(b, (k) => {
        c(u).description && k(x);
      });
    }
    var E = R(b, 2);
    {
      var C = (k) => {
        var P = B4(), V = Y(P);
        fr(V, {
          get target() {
            return c(u).content;
          }
        }), W(P), A(k, P);
      };
      ae(E, (k) => {
        o().includes(c(u).key) && k(C);
      });
    }
    W(h), Te((k) => ln(w, 1, `tf-collapse-item-title-arrow ${k ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), A(l, h);
  }), W(a), Te(() => {
    Bt(a, e.style), ln(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), A(t, a), ce(s);
}
bo(["click", "keydown"]);
se(Lv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function fr(t, e) {
  ue(e, !0);
  let n = g(e, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), p();
    }
  }, o = he(), i = Q(o);
  {
    var s = (l) => {
      var u = he(), d = Q(u);
      ze(d, () => n() ?? qe), A(l, u);
    }, a = (l) => {
      var u = he(), d = Q(u);
      Ca(d, n), A(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return A(t, o), ce(r);
}
se(fr, { target: {} }, [], [], !0);
function Xl(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  Ia(t, Xe({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = he(), a = Q(s);
      ze(a, () => e.children ?? qe), A(o, s);
    },
    $$slots: { default: !0 }
  })), ce();
}
se(Xl, {}, [], [], !0);
var W4 = /* @__PURE__ */ re('<span class="mx-1">,</span>'), X4 = /* @__PURE__ */ re("<!> <!>", 1), q4 = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), Y4 = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), G4 = /* @__PURE__ */ re('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), U4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), J4 = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), Q4 = /* @__PURE__ */ re('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), eC = /* @__PURE__ */ re("<!> <!>", 1), tC = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), nC = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), rC = /* @__PURE__ */ re('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), oC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), iC = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), sC = /* @__PURE__ */ re('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), aC = /* @__PURE__ */ re("<!> <!>", 1);
function Rt(t, e) {
  ue(e, !0);
  let n = g(e, "items", 7), r = g(e, "onSelect", 7), o = g(e, "value", 23, () => []), i = g(e, "defaultValue", 23, () => []), s = g(e, "expandAll", 7, !0), a = g(e, "multiple", 7, !1), l = g(e, "expandValue", 23, () => []), u = g(e, "placeholder", 7), d = g(e, "disabled", 7, !1), h = g(e, "class", 7), f = /* @__PURE__ */ je(e, [
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
    "placeholder",
    "disabled",
    "class"
  ]), v = /* @__PURE__ */ _(() => {
    const N = [], S = (z) => {
      for (const $ of z)
        N.push($), $.children?.length && S($.children);
    };
    return S(n()), N;
  }), m = /* @__PURE__ */ _(() => {
    const N = [], S = o().length > 0 ? o() : i();
    for (const z of S) {
      if (z == null) continue;
      const $ = c(v).find((O) => O.value === z);
      $ && N.push($);
    }
    return N;
  }), y = /* @__PURE__ */ _(() => !a() && c(m).length > 0 ? String(c(m)[0].value) : ""), w = /* @__PURE__ */ _(() => a() ? c(m).map((N) => String(N.value)) : []);
  function b(N, S) {
    N.stopPropagation(), r()?.(S);
  }
  function x(N, S = 0) {
    const z = [];
    for (const $ of N) {
      z.push($);
      const O = s() || l().includes($.value);
      $.children?.length && O && z.push(...x($.children, S + 1));
    }
    return z;
  }
  let E = /* @__PURE__ */ _(() => x(n()));
  function C(N) {
    return n().findIndex((S) => S.value === N.value) === -1;
  }
  function k(N) {
    return {
      value: String(N.value),
      label: typeof N.label == "string" ? N.label : String(N.value),
      disabled: !1
    };
  }
  var P = {
    get items() {
      return n();
    },
    set items(N) {
      n(N), p();
    },
    get onSelect() {
      return r();
    },
    set onSelect(N) {
      r(N), p();
    },
    get value() {
      return o();
    },
    set value(N = []) {
      o(N), p();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(N = []) {
      i(N), p();
    },
    get expandAll() {
      return s();
    },
    set expandAll(N = !0) {
      s(N), p();
    },
    get multiple() {
      return a();
    },
    set multiple(N = !1) {
      a(N), p();
    },
    get expandValue() {
      return l();
    },
    set expandValue(N = []) {
      l(N), p();
    },
    get placeholder() {
      return u();
    },
    set placeholder(N) {
      u(N), p();
    },
    get disabled() {
      return d();
    },
    set disabled(N = !1) {
      d(N), p();
    },
    get class() {
      return h();
    },
    set class(N) {
      h(N), p();
    }
  }, V = he(), I = Q(V);
  {
    var H = (N) => {
      var S = he(), z = Q(S);
      It(z, () => Zl, ($, O) => {
        O($, Xe(
          {
            type: "multiple",
            get value() {
              return c(w);
            }
          },
          () => f,
          {
            children: (M, B) => {
              var q = eC(), U = Q(q);
              {
                let G = /* @__PURE__ */ _(() => Nn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                It(U, () => Wl, (ee, j) => {
                  j(ee, {
                    get class() {
                      return c(G);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (Z, X) => {
                      var J = Y4(), oe = Q(J), L = Y(oe);
                      {
                        var ne = (ie) => {
                          var le = he(), ve = Q(le);
                          At(ve, 19, () => c(m), (be) => be.value, (be, ke, de) => {
                            var Ce = X4(), De = Q(Ce);
                            fr(De, {
                              get target() {
                                return c(ke).label;
                              }
                            });
                            var te = R(De, 2);
                            {
                              var Ve = (Ne) => {
                                var We = W4();
                                A(Ne, We);
                              };
                              ae(te, (Ne) => {
                                c(de) < c(m).length - 1 && Ne(Ve);
                              });
                            }
                            A(be, Ce);
                          }), A(ie, le);
                        }, me = (ie) => {
                          var le = q4(), ve = Y(le, !0);
                          W(le), Te(() => ht(ve, u() ?? "")), A(ie, le);
                        };
                        ae(L, (ie) => {
                          c(m).length > 0 ? ie(ne) : ie(me, !1);
                        });
                      }
                      W(oe);
                      var fe = R(oe, 2);
                      Xl(fe, { class: "size-4 opacity-50" }), A(Z, J);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var T = R(U, 2);
              It(T, () => Vl, (G, ee) => {
                ee(G, {
                  children: (j, Z) => {
                    var X = he(), J = Q(X);
                    It(J, () => Bl, (oe, L) => {
                      L(oe, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (ne, me) => {
                          var fe = he(), ie = Q(fe);
                          It(ie, () => Fl, (le, ve) => {
                            ve(le, {
                              class: "p-1",
                              children: (be, ke) => {
                                var de = he(), Ce = Q(de);
                                {
                                  var De = (Ve) => {
                                    var Ne = G4();
                                    A(Ve, Ne);
                                  }, te = (Ve) => {
                                    var Ne = he(), We = Q(Ne);
                                    At(We, 17, () => c(E), (Re) => Re.value, (Re, Ke) => {
                                      const wt = /* @__PURE__ */ _(() => c(Ke).children && c(Ke).children.length > 0), bt = /* @__PURE__ */ _(() => k(c(Ke)));
                                      var lt = he(), ye = Q(lt);
                                      {
                                        const Ae = (Be, st) => {
                                          let kt = () => st?.().selected;
                                          var pt = Q4(), Vt = Q(pt), vt = Y(Vt);
                                          {
                                            var mt = (ct) => {
                                              var Rn = U4();
                                              A(ct, Rn);
                                            };
                                            ae(vt, (ct) => {
                                              c(wt) && ct(mt);
                                            });
                                          }
                                          var zt = R(vt, 2);
                                          fr(zt, {
                                            get target() {
                                              return c(Ke).label;
                                            }
                                          }), W(Vt);
                                          var un = R(Vt, 2);
                                          {
                                            var or = (ct) => {
                                              var Rn = J4();
                                              A(ct, Rn);
                                            };
                                            ae(un, (ct) => {
                                              kt() && ct(or);
                                            });
                                          }
                                          A(Be, pt);
                                        };
                                        let ft = /* @__PURE__ */ _(() => Nn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", C(c(Ke)) && "pl-6"));
                                        It(ye, () => Kl, (Be, st) => {
                                          st(Be, {
                                            get value() {
                                              return c(bt).value;
                                            },
                                            get label() {
                                              return c(bt).label;
                                            },
                                            get class() {
                                              return c(ft);
                                            },
                                            onclick: (kt) => b(kt, c(Ke)),
                                            children: Ae,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      A(Re, lt);
                                    }), A(Ve, Ne);
                                  };
                                  ae(Ce, (Ve) => {
                                    c(E).length === 0 ? Ve(De) : Ve(te, !1);
                                  });
                                }
                                A(be, de);
                              },
                              $$slots: { default: !0 }
                            });
                          }), A(ne, fe);
                        },
                        $$slots: { default: !0 }
                      });
                    }), A(j, X);
                  },
                  $$slots: { default: !0 }
                });
              }), A(M, q);
            },
            $$slots: { default: !0 }
          }
        ));
      }), A(N, S);
    }, D = (N) => {
      var S = he(), z = Q(S);
      It(z, () => Zl, ($, O) => {
        O($, Xe(
          {
            type: "single",
            get value() {
              return c(y);
            }
          },
          () => f,
          {
            children: (M, B) => {
              var q = aC(), U = Q(q);
              {
                let G = /* @__PURE__ */ _(() => Nn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                It(U, () => Wl, (ee, j) => {
                  j(ee, {
                    get class() {
                      return c(G);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (Z, X) => {
                      var J = nC(), oe = Q(J), L = Y(oe);
                      {
                        var ne = (ie) => {
                          fr(ie, {
                            get target() {
                              return c(m)[0].label;
                            }
                          });
                        }, me = (ie) => {
                          var le = tC(), ve = Y(le, !0);
                          W(le), Te(() => ht(ve, u() ?? "")), A(ie, le);
                        };
                        ae(L, (ie) => {
                          c(m).length > 0 ? ie(ne) : ie(me, !1);
                        });
                      }
                      W(oe);
                      var fe = R(oe, 2);
                      Xl(fe, { class: "size-4 opacity-50" }), A(Z, J);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var T = R(U, 2);
              It(T, () => Vl, (G, ee) => {
                ee(G, {
                  children: (j, Z) => {
                    var X = he(), J = Q(X);
                    It(J, () => Bl, (oe, L) => {
                      L(oe, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (ne, me) => {
                          var fe = he(), ie = Q(fe);
                          It(ie, () => Fl, (le, ve) => {
                            ve(le, {
                              class: "p-1",
                              children: (be, ke) => {
                                var de = he(), Ce = Q(de);
                                {
                                  var De = (Ve) => {
                                    var Ne = rC();
                                    A(Ve, Ne);
                                  }, te = (Ve) => {
                                    var Ne = he(), We = Q(Ne);
                                    At(We, 17, () => c(E), (Re) => Re.value, (Re, Ke) => {
                                      const wt = /* @__PURE__ */ _(() => c(Ke).children && c(Ke).children.length > 0), bt = /* @__PURE__ */ _(() => k(c(Ke)));
                                      var lt = he(), ye = Q(lt);
                                      {
                                        const Ae = (Be, st) => {
                                          let kt = () => st?.().selected;
                                          var pt = sC(), Vt = Q(pt), vt = Y(Vt);
                                          {
                                            var mt = (ct) => {
                                              var Rn = oC();
                                              A(ct, Rn);
                                            };
                                            ae(vt, (ct) => {
                                              c(wt) && ct(mt);
                                            });
                                          }
                                          var zt = R(vt, 2);
                                          fr(zt, {
                                            get target() {
                                              return c(Ke).label;
                                            }
                                          }), W(Vt);
                                          var un = R(Vt, 2);
                                          {
                                            var or = (ct) => {
                                              var Rn = iC();
                                              A(ct, Rn);
                                            };
                                            ae(un, (ct) => {
                                              kt() && ct(or);
                                            });
                                          }
                                          A(Be, pt);
                                        };
                                        let ft = /* @__PURE__ */ _(() => Nn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", C(c(Ke)) && "pl-6"));
                                        It(ye, () => Kl, (Be, st) => {
                                          st(Be, {
                                            get value() {
                                              return c(bt).value;
                                            },
                                            get label() {
                                              return c(bt).label;
                                            },
                                            get class() {
                                              return c(ft);
                                            },
                                            onclick: (kt) => b(kt, c(Ke)),
                                            children: Ae,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      A(Re, lt);
                                    }), A(Ve, Ne);
                                  };
                                  ae(Ce, (Ve) => {
                                    c(E).length === 0 ? Ve(De) : Ve(te, !1);
                                  });
                                }
                                A(be, de);
                              },
                              $$slots: { default: !0 }
                            });
                          }), A(ne, fe);
                        },
                        $$slots: { default: !0 }
                      });
                    }), A(j, X);
                  },
                  $$slots: { default: !0 }
                });
              }), A(M, q);
            },
            $$slots: { default: !0 }
          }
        ));
      }), A(N, S);
    };
    ae(I, (N) => {
      a() ? N(H) : N(D, !1);
    });
  }
  return A(t, V), ce(P);
}
se(
  Rt,
  {
    items: {},
    onSelect: {},
    value: {},
    defaultValue: {},
    expandAll: {},
    multiple: {},
    expandValue: {},
    placeholder: {},
    disabled: {},
    class: {}
  },
  [],
  [],
  !0
);
const lC = ({
  trigger: t,
  triggerEvent: e,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: a,
  showArrow: l
}) => {
  if (typeof t == "string") {
    const b = document.querySelector(t);
    if (b)
      t = b;
    else
      throw new Error("element not found by document.querySelector('" + t + "')");
  }
  let u;
  if (typeof n == "string") {
    const b = document.querySelector(n);
    if (b)
      u = b;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function h() {
    xv(t, u, {
      placement: r,
      middleware: [
        mv(o),
        // 手动偏移配置
        wv(i),
        //自动翻转
        yv(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [bv({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: E, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: k, y: P } = C.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[E.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: P != null ? `${P}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, h();
  }
  function m() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function y(b) {
    b.stopPropagation(), f ? m() : v();
  }
  function w(b) {
    u.contains(b.target) || m();
  }
  return (!e || e.length == 0) && (e = ["click"]), e.forEach((b) => {
    t.addEventListener(b, y);
  }), document.addEventListener("click", w), {
    destroy() {
      e.forEach((b) => {
        t.removeEventListener(b, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var uC = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ko(t, e) {
  ue(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  Vn(() => (a = lC({
    trigger: i,
    floatContent: s,
    interactive: !0,
    placement: o()
  }), () => {
    a.destroy();
  }));
  function l() {
    a.hide();
  }
  var u = {
    hide: l,
    get children() {
      return n();
    },
    set children(y) {
      n(y), p();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), p();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), p();
    }
  }, d = uC(), h = Y(d), f = Y(h);
  ze(f, n), W(h), Kt(h, (y) => i = y, () => i);
  var v = R(h, 2), m = Y(v);
  return ze(m, r), W(v), Kt(v, (y) => s = y, () => s), W(d), A(t, d), ce(u);
}
se(ko, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function tt(t, e) {
  ue(e, !0);
  const n = g(e, "children", 7), r = g(e, "level", 7, 1), o = g(e, "mt", 7), i = g(e, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), p();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), p();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), p();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), p();
    }
  }, a = he(), l = Q(a);
  return ff(l, () => `h${r()}`, !1, (u, d) => {
    ot(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = he(), f = Q(h);
    ze(f, () => n() ?? qe), A(d, h);
  }), A(t, a), ce(s);
}
se(tt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var cC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const dC = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function Ui(t, e) {
  ue(e, !0), it(t, dC);
  const n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ _(() => Nn("input-btn-more", e.class));
    Qe(t, Xe(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = cC();
          A(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ce();
}
se(Ui, {}, [], [], !0);
const hC = () => ({ deleteNode: (t) => {
  Je.removeNode(t), Je.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), tr = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, fC = () => ({ copyNode: (t) => {
  const e = Je.getNode(t);
  if (e) {
    const n = tr(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Je.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), _t = () => Tn("svelteflow__node_id"), Br = () => Tn("tinyflow_options");
var pC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), gC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), vC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), mC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), yC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), wC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), bC = /* @__PURE__ */ re('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), xC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), kC = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), CC = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const $C = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function $n(t, e) {
  ue(e, !0), it(t, $C);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), f = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Dt(), x = /* @__PURE__ */ _(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: E } = hC(), { copyNode: C } = fC(), k = Br(), P = () => {
    k.onNodeExecute?.(b(r()));
  };
  let V = _t();
  var I = {
    get data() {
      return n();
    },
    set data(T) {
      n(T), p();
    },
    get id() {
      return r();
    },
    set id(T = "") {
      r(T), p();
    },
    get icon() {
      return o();
    },
    set icon(T) {
      o(T), p();
    },
    get handle() {
      return i();
    },
    set handle(T) {
      i(T), p();
    },
    get children() {
      return s();
    },
    set children(T) {
      s(T), p();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(T = !0) {
      a(T), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(T = !0) {
      l(T), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(T = !0) {
      u(T), p();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(T = !0) {
      d(T), p();
    },
    get allowSettingOfCondition() {
      return h();
    },
    set allowSettingOfCondition(T = !0) {
      h(T), p();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(T = !0) {
      f(T), p();
    },
    get showTargetHandle() {
      return v();
    },
    set showTargetHandle(T = !0) {
      v(T), p();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(T) {
      m(T), p();
    }
  }, H = CC(), D = Q(H);
  {
    var N = (T) => {
      lg(T, {
        get position() {
          return Pe.Top;
        },
        align: "start",
        children: (G, ee) => {
          var j = kC(), Z = Y(j);
          {
            var X = (ie) => {
              Qe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  E(r());
                },
                children: (le, ve) => {
                  var be = pC();
                  A(le, be);
                },
                $$slots: { default: !0 }
              });
            };
            ae(Z, (ie) => {
              u() && ie(X);
            });
          }
          var J = R(Z, 2);
          {
            var oe = (ie) => {
              Qe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (le, ve) => {
                  var be = gC();
                  A(le, be);
                },
                $$slots: { default: !0 }
              });
            };
            ae(J, (ie) => {
              l() && ie(oe);
            });
          }
          var L = R(J, 2);
          {
            var ne = (ie) => {
              Qe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: P,
                children: (le, ve) => {
                  var be = vC();
                  A(le, be);
                },
                $$slots: { default: !0 }
              });
            };
            ae(L, (ie) => {
              a() && ie(ne);
            });
          }
          var me = R(L, 2);
          {
            var fe = (ie) => {
              ko(ie, {
                placement: "bottom",
                floating: (le) => {
                  var ve = bC(), be = Y(ve), ke = R(Y(be));
                  Ot(ke, {
                    style: "width: 100%;",
                    onchange: (ye) => {
                      const Ae = ye.target.value;
                      w(V, { title: Ae });
                    },
                    get value() {
                      return n().title;
                    }
                  }), W(be);
                  var de = R(be, 2), Ce = R(Y(de));
                  ut(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (ye) => {
                      const Ae = ye.target.value;
                      w(V, { description: Ae });
                    },
                    get value() {
                      return n().description;
                    }
                  }), W(de);
                  var De = R(de, 2);
                  {
                    var te = (ye) => {
                      var Ae = mC(), ft = R(Y(Ae));
                      ut(ft, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Be) => {
                          const st = Be.target.value;
                          w(V, { condition: st });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), W(Ae), A(ye, Ae);
                    };
                    ae(De, (ye) => {
                      h() && ye(te);
                    });
                  }
                  var Ve = R(De, 2), Ne = R(Y(Ve), 2);
                  Ir(Ne), Ne.__change = (ye) => {
                    const Ae = ye.target.checked;
                    w(V, { loopEnable: Ae });
                  }, W(Ve);
                  var We = R(Ve, 2);
                  {
                    var Re = (ye) => {
                      var Ae = yC(), ft = Q(Ae), Be = R(Y(ft));
                      {
                        let vt = /* @__PURE__ */ _(() => n().loopIntervalMs || "1000");
                        ut(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const zt = mt.target.value;
                            w(V, { loopIntervalMs: zt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      W(ft);
                      var st = R(ft, 2), kt = R(Y(st));
                      {
                        let vt = /* @__PURE__ */ _(() => n().maxLoopCount || "0");
                        ut(kt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const zt = mt.target.value;
                            w(V, { maxLoopCount: zt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      W(st);
                      var pt = R(st, 2), Vt = R(Y(pt));
                      ut(Vt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (vt) => {
                          const mt = vt.target.value;
                          w(V, { loopBreakCondition: mt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), W(pt), A(ye, Ae);
                    };
                    ae(We, (ye) => {
                      n().loopEnable && ye(Re);
                    });
                  }
                  var Ke = R(We, 2), wt = R(Y(Ke), 2);
                  Ir(wt), wt.__change = (ye) => {
                    const Ae = ye.target.checked;
                    w(V, { retryEnable: Ae });
                  }, W(Ke);
                  var bt = R(Ke, 2);
                  {
                    var lt = (ye) => {
                      var Ae = wC(), ft = Q(Ae), Be = R(Y(ft));
                      {
                        let vt = /* @__PURE__ */ _(() => n().retryIntervalMs || "1000");
                        ut(Be, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const zt = mt.target.value;
                            w(V, { retryIntervalMs: zt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      W(ft);
                      var st = R(ft, 2), kt = R(Y(st));
                      {
                        let vt = /* @__PURE__ */ _(() => n().maxRetryCount || "3");
                        ut(kt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (mt) => {
                            const zt = mt.target.value;
                            w(V, { maxRetryCount: zt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      W(st);
                      var pt = R(st, 2), Vt = R(Y(pt), 2);
                      Ir(Vt), Vt.__change = (vt) => {
                        const mt = vt.target.checked;
                        w(V, { resetRetryCountAfterNormal: mt });
                      }, W(pt), Te(() => Ba(Vt, !!n().resetRetryCountAfterNormal)), A(ye, Ae);
                    };
                    ae(bt, (ye) => {
                      n().retryEnable && ye(lt);
                    });
                  }
                  W(ve), Te(() => {
                    Ba(Ne, !!n().loopEnable), Ba(wt, !!n().retryEnable);
                  }), A(le, ve);
                },
                children: (le, ve) => {
                  Qe(le, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (be, ke) => {
                      var de = xC();
                      A(be, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(me, (ie) => {
              d() && ie(fe);
            });
          }
          W(j), A(G, j);
        },
        $$slots: { default: !0 }
      });
    };
    ae(D, (T) => {
      (a() || l() || u()) && T(N);
    });
  }
  var S = R(D, 2), z = R(Y(S), 2), $ = Y(z);
  Lv($, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return y;
    },
    onChange: (T, G) => {
      w(r(), { expand: G?.includes("key") }), m()?.(G?.includes("key") ? "key" : "");
    }
  }), W(z), W(S);
  var O = R(S, 2);
  {
    var M = (T) => {
      Hr(T, {
        type: "target",
        get position() {
          return Pe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(O, (T) => {
      v() && T(M);
    });
  }
  var B = R(O, 2);
  {
    var q = (T) => {
      Hr(T, {
        type: "source",
        get position() {
          return Pe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(B, (T) => {
      f() && T(q);
    });
  }
  var U = R(B, 2);
  return ze(U, () => i() ?? qe), A(t, H), ce(I);
}
bo(["change"]);
se(
  $n,
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
var SC = /* @__PURE__ */ re('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), _C = /* @__PURE__ */ re('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), EC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), OC = /* @__PURE__ */ re('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const PC = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Hv(t, e) {
  ue(e, !0), it(t, PC);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = _t(), i = Or(o), s = /* @__PURE__ */ _(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = Dt(), l = (I, H) => {
    a(o, (D) => {
      let N = D.data.parameters;
      return N[r()][I] = H, { parameters: N };
    });
  }, u = (I, H) => {
    const D = H.target.value;
    l(I, D);
  }, d = (I) => {
    const H = I.target.value;
    l("name", H);
  }, h = (I) => {
    l("required", I);
  }, f = (I) => {
    const H = I.value;
    l("formType", H);
  }, v = (I) => {
    const H = I.value;
    l("contentType", H);
  };
  let m;
  const y = () => {
    a(o, (I) => {
      let H = I.data.parameters;
      return H.splice(r(), 1), { parameters: [...H] };
    }), m?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(I) {
      n(I), p();
    },
    get index() {
      return r();
    },
    set index(I) {
      r(I), p();
    }
  }, b = OC(), x = Q(b), E = Y(x);
  Ot(E, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), W(x);
  var C = R(x, 2), k = Y(C);
  Dv(k, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: h
  }), W(C);
  var P = R(C, 2), V = Y(P);
  return Kt(
    ko(V, {
      placement: "bottom",
      floating: (I) => {
        var H = _C(), D = Y(H), N = R(Y(D));
        {
          let Z = /* @__PURE__ */ _(() => c(s).contentType ? [c(s).contentType] : []);
          Rt(N, {
            get items() {
              return Lu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: v
          });
        }
        W(D);
        var S = R(D, 2), z = R(Y(S));
        {
          let Z = /* @__PURE__ */ _(() => c(s).formType ? [c(s).formType] : []);
          Rt(z, {
            get items() {
              return l7;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(Z);
            },
            onSelect: f
          });
        }
        W(S);
        var $ = R(S, 2);
        {
          var O = (Z) => {
            var X = SC(), J = R(Y(X));
            {
              let oe = /* @__PURE__ */ _(() => c(s).enums?.join(`
`));
              ut(J, {
                rows: 3,
                style: "width: 100%;",
                onchange: (L) => {
                  l("enums", L.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(oe);
                },
                placeholder: "一行一个选项"
              });
            }
            W(X), A(Z, X);
          };
          ae($, (Z) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && Z(O);
          });
        }
        var M = R($, 2), B = R(Y(M));
        ut(B, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formLabel", Z);
          },
          get value() {
            return c(s).formLabel;
          }
        }), W(M);
        var q = R(M, 2), U = R(Y(q));
        ut(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formDescription", Z);
          },
          get value() {
            return c(s).formDescription;
          }
        }), W(q);
        var T = R(q, 2), G = R(Y(T));
        ut(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formPlaceholder", Z);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), W(T);
        var ee = R(T, 2), j = Y(ee);
        Qe(j, {
          variant: "destructive",
          onclick: y,
          children: (Z, X) => {
            Oe();
            var J = Le("删除");
            A(Z, J);
          },
          $$slots: { default: !0 }
        }), W(ee), W(H), A(I, H);
      },
      children: (I, H) => {
        Qe(I, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (D, N) => {
            var S = EC();
            A(D, S);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (I) => m = I,
    () => m
  ), W(P), A(t, b), ce(w);
}
se(Hv, { parameter: {}, index: {} }, [], [], !0);
var NC = /* @__PURE__ */ re('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), MC = /* @__PURE__ */ re('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), zC = /* @__PURE__ */ re('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const TC = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function Rv(t, e) {
  ue(e, !0), it(t, TC);
  let n = _t(), r = Or(n), o = /* @__PURE__ */ _(() => [...r?.current?.data?.parameters || []]);
  var i = zC(), s = Y(i);
  {
    var a = (u) => {
      var d = NC();
      Oe(4), A(u, d);
    };
    ae(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = R(s, 2);
  At(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, h) => {
      Hv(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(h);
        }
      });
    },
    (u) => {
      var d = MC();
      A(u, d);
    }
  ), W(i), A(t, i), ce();
}
se(Rv, {}, [], [], !0);
const Ni = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = tr()), Ni(e.children);
}), t), Hn = () => {
  const { updateNodeData: t } = Dt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Ni(s?.children)) : Ni(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: tr()
        };
      }
      const i = [];
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), t(e, (s) => {
        let a = s.data[n];
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var AC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), DC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), VC = /* @__PURE__ */ re('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const IC = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function jv(t, e) {
  ue(e, !0), it(t, IC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return $n(t, Xe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = AC();
      A(a, l);
    },
    children: (a, l) => {
      var u = VC(), d = Q(u), h = Y(d);
      tt(h, {
        level: 3,
        children: (m, y) => {
          Oe();
          var w = Le("输入参数");
          A(m, w);
        },
        $$slots: { default: !0 }
      });
      var f = R(h, 2);
      Qe(f, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, y) => {
          var w = DC();
          A(m, w);
        },
        $$slots: { default: !0 }
      }), W(d);
      var v = R(d, 2);
      Rv(v, {}), A(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce(s);
}
se(jv, { data: {} }, [], [], !0);
const Bv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), Bv(t, r.source, n));
}, Kv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: Kv(r.children, e + "." + r.name, n)
})), ih = (t, e, n) => {
  if (t.type === "startNode") {
    const r = t.data.parameters, o = [];
    if (r) for (const i of r)
      o.push({
        label: i.name + (e ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
        value: t.id + "." + i.name
      });
    return { label: t.data.title, value: t.id, children: o };
  } else {
    if (t.type === "loopNode" && n.parentId)
      return {
        label: t.data.title,
        value: t.id,
        children: [
          { label: "loopItem", value: t.id + ".loopItem" },
          { label: "index (Number)", value: t.id + ".index" }
        ]
      };
    {
      const r = t.data.outputDefs;
      if (r)
        return {
          label: t.data.title,
          value: t.id,
          children: Kv(r, t.id, e)
        };
    }
  }
}, Fv = (t = !1) => {
  const e = _t(), n = Or(e), r = /* @__PURE__ */ _(Ln), o = /* @__PURE__ */ _(() => c(r).nodes), i = /* @__PURE__ */ _(() => c(r).edges), s = /* @__PURE__ */ _(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ _(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = ih(d, h, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Bv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, v = ih(h, f, u);
          v && l.push(v);
        }
    }
    return l;
  });
  return {
    get current() {
      return c(a);
    }
  };
};
var LC = /* @__PURE__ */ re('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), HC = /* @__PURE__ */ re('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), RC = /* @__PURE__ */ re('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const jC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Zv(t, e) {
  ue(e, !0), it(t, jC), Vn(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = _t(), l = Or(a), u = /* @__PURE__ */ _(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = Dt(), h = (z, $) => {
    d(a, (O) => {
      let M = O.data?.[o()];
      return M[r()] = { ...M[r()], [z]: $ }, { [o()]: M };
    });
  }, f = (z, $) => {
    const O = $.target.value;
    h(z, O);
  }, v = (z) => {
    const $ = z.value;
    h("ref", $);
  }, m = (z) => {
    const $ = z.value;
    h("refType", $);
  }, y = (z) => {
    const $ = z.value;
    h("contentType", $);
  };
  let w;
  const b = () => {
    d(a, (z) => {
      let $ = z.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), w?.hide();
  };
  let x = Fv(i());
  var E = {
    get parameter() {
      return n();
    },
    set parameter(z) {
      n(z), p();
    },
    get index() {
      return r();
    },
    set index(z) {
      r(z), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(z) {
      o(z), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(z) {
      i(z), p();
    },
    get showContentType() {
      return s();
    },
    set showContentType(z = !1) {
      s(z), p();
    }
  }, C = RC(), k = Q(C), P = Y(k);
  {
    let z = /* @__PURE__ */ _(() => c(u).nameDisabled === !0);
    Ot(P, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(z);
      },
      oninput: ($) => f("name", $)
    });
  }
  W(k);
  var V = R(k, 2), I = Y(V);
  {
    var H = (z) => {
      Ot(z, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => f("value", $)
      });
    }, D = (z) => {
      var $ = he(), O = Q($);
      {
        var M = (B) => {
          {
            let q = /* @__PURE__ */ _(() => [c(u).ref]);
            Rt(B, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(q);
              },
              expandAll: !0,
              onSelect: v
            });
          }
        };
        ae(
          O,
          (B) => {
            c(u).refType !== "input" && B(M);
          },
          !0
        );
      }
      A(z, $);
    };
    ae(I, (z) => {
      c(u).refType === "fixed" ? z(H) : z(D, !1);
    });
  }
  W(V);
  var N = R(V, 2), S = Y(N);
  return Kt(
    ko(S, {
      placement: "bottom",
      floating: (z) => {
        var $ = HC(), O = Y($), M = R(Y(O));
        {
          let X = /* @__PURE__ */ _(() => c(u).refType ? [c(u).refType] : []);
          Rt(M, {
            get items() {
              return a7;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(X);
            },
            onSelect: m
          });
        }
        W(O);
        var B = R(O, 2);
        {
          var q = (X) => {
            var J = LC(), oe = R(Y(J));
            {
              let L = /* @__PURE__ */ _(() => c(u).contentType ? [c(u).contentType] : []);
              Rt(oe, {
                get items() {
                  return Lu;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(L);
                },
                onSelect: y
              });
            }
            W(J), A(X, J);
          };
          ae(B, (X) => {
            s() && X(q);
          });
        }
        var U = R(B, 2), T = R(Y(U));
        ut(T, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            f("defaultValue", X);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), W(U);
        var G = R(U, 2), ee = R(Y(G));
        ut(ee, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            f("description", X);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), W(G);
        var j = R(G, 2), Z = Y(j);
        Qe(Z, {
          variant: "destructive",
          onclick: b,
          children: (X, J) => {
            Oe();
            var oe = Le("删除");
            A(X, oe);
          },
          $$slots: { default: !0 }
        }), W(j), W($), A(z, $);
      },
      children: (z, $) => {
        Ui(z, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (z) => w = z,
    () => w
  ), W(N), A(t, C), ce(E);
}
se(
  Zv,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {},
    showContentType: {}
  },
  [],
  [],
  !0
);
var BC = /* @__PURE__ */ re('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), KC = /* @__PURE__ */ re('<div class="none-params svelte-32f1pk"> </div>'), FC = /* @__PURE__ */ re('<div class="input-container svelte-32f1pk"><!> <!></div>');
const ZC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Ut(t, e) {
  ue(e, !0), it(t, ZC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = _t(), a = Or(s), l = /* @__PURE__ */ _(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), p();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), p();
    }
  }, d = FC(), h = Y(d);
  {
    var f = (m) => {
      var y = BC();
      Oe(4), A(m, y);
    };
    ae(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = R(h, 2);
  return At(
    v,
    19,
    () => c(l),
    (m) => m.id,
    (m, y, w) => {
      Zv(m, {
        get parameter() {
          return c(y);
        },
        get index() {
          return c(w);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        },
        get showContentType() {
          return i();
        }
      });
    },
    (m) => {
      var y = KC(), w = Y(y, !0);
      W(y), Te(() => ht(w, n())), A(m, y);
    }
  ), W(d), A(t, d), ce(u);
}
se(
  Ut,
  {
    noneParameterText: {},
    dataKeyName: {},
    useChildrenOnly: {},
    showContentType: {}
  },
  [],
  [],
  !0
);
var WC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), XC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qC = /* @__PURE__ */ re('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const YC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Wv(t, e) {
  ue(e, !0), it(t, YC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return $n(t, Xe(
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
        var l = WC();
        A(a, l);
      },
      children: (a, l) => {
        var u = qC(), d = Q(u), h = Y(d);
        tt(h, {
          level: 3,
          children: (m, y) => {
            Oe();
            var w = Le("输出参数");
            A(m, w);
          },
          $$slots: { default: !0 }
        });
        var f = R(h, 2);
        Qe(f, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, y) => {
            var w = XC();
            A(m, w);
          },
          $$slots: { default: !0 }
        }), W(d);
        var v = R(d, 2);
        Ut(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), A(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(s);
}
se(Wv, { data: {} }, [], [], !0);
const il = (t) => JSON.parse(JSON.stringify(t));
var GC = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), UC = /* @__PURE__ */ re('<div class="input-more-item svelte-hwmib9"><!></div>'), JC = /* @__PURE__ */ re('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), QC = /* @__PURE__ */ re('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const e$ = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Xv(t, e) {
  ue(e, !0), it(t, e$);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = _t(), a = Or(s), l = /* @__PURE__ */ _(() => {
    let S = a?.current?.data?.[o()], z;
    if (S && r().length > 0) {
      let $ = S;
      for (let O = 0; O < r().length; O++) {
        const M = r()[O];
        O == r().length - 1 ? z = $[M] : $ = $[M].children;
      }
    }
    return { ...n(), ...z };
  });
  const { updateNodeData: u } = Dt(), d = (S, z) => {
    u(s, ($) => {
      const O = $.data?.[o()];
      if (O && r().length > 0) {
        let M = O;
        for (let B = 0; B < r().length; B++) {
          const q = r()[B];
          B == r().length - 1 ? M[q] = { ...M[q], [S]: z } : M = M[q].children;
        }
      }
      return { [o()]: [...il(O)] };
    });
  }, h = (S, z) => {
    const $ = z.target.value;
    d(S, $);
  }, f = (S) => {
    const z = S.value;
    d("dataType", z);
  };
  let v;
  const m = () => {
    u(s, (S) => {
      let z = S.data?.[o()];
      if (z && r().length > 0) {
        let $ = z;
        for (let O = 0; O < r().length; O++) {
          const M = r()[O];
          O == r().length - 1 ? $.splice(M, 1) : $ = $[M].children;
        }
      }
      return { [o()]: [...il(z)] };
    }), v?.hide();
  }, y = () => {
    u(s, (S) => {
      let z = S.data?.[o()];
      if (z && r().length > 0) {
        let $ = z;
        for (let O = 0; O < r().length; O++) {
          const M = r()[O];
          O == r().length - 1 ? $[M].children ? $[M].children.push({ id: tr(), name: "newParam", dataType: "String" }) : $[M].children = [{ id: tr(), name: "newParam", dataType: "String" }] : $ = $[M].children;
        }
      }
      return { [o()]: [...il(z)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), p();
    },
    get position() {
      return r();
    },
    set position(S) {
      r(S), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(S = "请输入参数值") {
      i(S), p();
    }
  }, b = QC(), x = Q(b), E = Y(x);
  {
    var C = (S) => {
      var z = he(), $ = Q(z);
      At($, 17, r, uo, (O, M) => {
        Oe();
        var B = Le(" ");
        A(O, B);
      }), A(S, z);
    };
    ae(E, (S) => {
      r().length > 1 && S(C);
    });
  }
  var k = R(E, 2);
  {
    let S = /* @__PURE__ */ _(() => c(l).nameDisabled === !0);
    Ot(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (z) => {
        h("name", z);
      },
      get disabled() {
        return c(S);
      }
    });
  }
  W(x);
  var P = R(x, 2), V = Y(P);
  {
    let S = /* @__PURE__ */ _(() => c(l).dataTypeItems || s7), z = /* @__PURE__ */ _(() => c(l).dataType ? [c(l).dataType] : []), $ = /* @__PURE__ */ _(() => c(l).dataTypeDisabled === !0);
    Rt(V, {
      get items() {
        return c(S);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(z);
      },
      get disabled() {
        return c($);
      },
      onSelect: f
    });
  }
  var I = R(V, 2);
  {
    var H = (S) => {
      Qe(S, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (z, $) => {
          var O = GC();
          A(z, O);
        },
        $$slots: { default: !0 }
      });
    };
    ae(I, (S) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && S(H);
    });
  }
  W(P);
  var D = R(P, 2), N = Y(D);
  return Kt(
    ko(N, {
      placement: "bottom",
      floating: (S) => {
        var z = JC(), $ = Y(z), O = R(Y($));
        {
          let T = /* @__PURE__ */ _(() => c(l).defaultValue || "");
          ut(O, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (G) => {
              h("defaultValue", G);
            }
          });
        }
        W($);
        var M = R($, 2), B = R(Y(M));
        {
          let T = /* @__PURE__ */ _(() => c(l).description || "");
          ut(B, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (G) => {
              h("description", G);
            }
          });
        }
        W(M);
        var q = R(M, 2);
        {
          var U = (T) => {
            var G = UC(), ee = Y(G);
            Qe(ee, {
              variant: "destructive",
              onclick: m,
              children: (j, Z) => {
                Oe();
                var X = Le("删除");
                A(j, X);
              },
              $$slots: { default: !0 }
            }), W(G), A(T, G);
          };
          ae(q, (T) => {
            c(l).deleteDisabled !== !0 && T(U);
          });
        }
        W(z), A(S, z);
      },
      children: (S, z) => {
        Ui(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => v = S,
    () => v
  ), W(D), A(t, b), ce(w);
}
se(
  Xv,
  {
    parameter: {},
    position: {},
    dataKeyName: {},
    placeholder: {}
  },
  [],
  [],
  !0
);
var t$ = /* @__PURE__ */ re("<!> <!>", 1), n$ = /* @__PURE__ */ re('<div class="none-params svelte-1oz5kx0"> </div>'), r$ = /* @__PURE__ */ re('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), o$ = /* @__PURE__ */ re('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const i$ = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function Pr(t, e) {
  ue(e, !0), it(t, i$);
  const n = (m, y = qe, w = qe) => {
    var b = he(), x = Q(b);
    At(
      x,
      19,
      y,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, C, k) => {
        var P = t$(), V = Q(P);
        {
          let D = /* @__PURE__ */ _(() => [...w(), c(k)]);
          Xv(V, {
            get parameter() {
              return c(C);
            },
            get position() {
              return c(D);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var I = R(V, 2);
        {
          var H = (D) => {
            {
              let N = /* @__PURE__ */ _(() => [...w(), c(k)]);
              n(D, () => c(C).children, () => c(N));
            }
          };
          ae(I, (D) => {
            c(C).children && D(H);
          });
        }
        A(E, P);
      },
      (E) => {
        var C = he(), k = Q(C);
        {
          var P = (V) => {
            var I = n$(), H = Y(I, !0);
            W(I), Te(() => ht(H, r())), A(V, I);
          };
          ae(k, (V) => {
            w().length === 0 && V(P);
          });
        }
        A(E, C);
      }
    ), A(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = _t(), a = Or(s), l = /* @__PURE__ */ _(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), p();
    }
  }, d = o$(), h = Y(d);
  {
    var f = (m) => {
      var y = r$();
      Oe(4), A(m, y);
    };
    ae(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = R(h, 2);
  return n(v, () => c(l) || [], () => []), W(d), A(t, d), ce(u);
}
se(Pr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var s$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), a$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), l$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), u$ = /* @__PURE__ */ re('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), c$ = /* @__PURE__ */ re('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), d$ = /* @__PURE__ */ re('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const h$ = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function qv(t, e) {
  ue(e, !0), it(t, h$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn(), s = Br();
  let a = /* @__PURE__ */ we($t([]));
  Vn(async () => {
    const h = await s.provider?.llm?.();
    c(a).push(...h || []);
  });
  const { updateNodeData: l } = Dt(), u = (h) => {
    l(o, () => ({ outType: h })), h === "text" ? l(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : l(o, {
      outputDefs: [
        {
          name: "root",
          dataType: "Object",
          dataTypeItems: [
            { value: "Object", label: "Object" },
            { value: "Array", label: "Array" }
          ],
          deleteDisabled: !0
        }
      ]
    });
  };
  Ze(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(h) {
      n(h), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = s$();
        A(h, f);
      },
      children: (h, f) => {
        var v = d$(), m = Q(v), y = Y(m);
        tt(y, {
          level: 3,
          children: (T, G) => {
            Oe();
            var ee = Le("输入参数");
            A(T, ee);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2);
        Qe(w, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, G) => {
            var ee = a$();
            A(T, ee);
          },
          $$slots: { default: !0 }
        }), W(m);
        var b = R(m, 2);
        Ut(b, {});
        var x = R(b, 2), E = Y(x);
        tt(E, {
          level: 3,
          children: (T, G) => {
            Oe();
            var ee = Le("图片识别");
            A(T, ee);
          },
          $$slots: { default: !0 }
        });
        var C = R(E, 2);
        Qe(C, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (T, G) => {
            var ee = l$();
            A(T, ee);
          },
          $$slots: { default: !0 }
        }), W(x);
        var k = R(x, 2);
        Ut(k, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var P = R(k, 2);
        tt(P, {
          level: 3,
          mt: "10px",
          children: (T, G) => {
            Oe();
            var ee = Le("模型设置");
            A(T, ee);
          },
          $$slots: { default: !0 }
        });
        var V = R(P, 4), I = Y(V);
        {
          let T = /* @__PURE__ */ _(() => n().llmId ? [n().llmId] : []);
          Rt(I, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (G) => {
              const ee = G.value;
              l(o, () => ({ llmId: ee }));
            },
            get value() {
              return c(T);
            }
          });
        }
        var H = R(I, 2);
        ko(H, {
          placement: "bottom",
          floating: (T) => {
            var G = u$(), ee = R(Y(G), 2), j = Y(ee), Z = Y(j), X = Y(Z);
            W(Z);
            var J = R(Z, 2);
            Ir(J), J.__input = (de) => l(o, { temperature: parseFloat(de.target.value) }), W(j), W(ee);
            var oe = R(ee, 2), L = Y(oe), ne = Y(L), me = Y(ne);
            W(ne);
            var fe = R(ne, 2);
            Ir(fe), fe.__input = (de) => l(o, { topP: parseFloat(de.target.value) }), W(L), W(oe);
            var ie = R(oe, 2), le = Y(ie), ve = Y(le), be = Y(ve);
            W(ve);
            var ke = R(ve, 2);
            Ir(ke), ke.__input = (de) => l(o, { topK: parseInt(de.target.value) }), W(le), W(ie), W(G), Te(() => {
              ht(X, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), ys(J, n().temperature ?? 0.5), ht(me, `Top P: ${n().topP ?? 0.9 ?? ""}`), ys(fe, n().topP ?? 0.9), ht(be, `Top K: ${n().topK ?? 50 ?? ""}`), ys(ke, n().topK ?? 50);
            }), A(T, G);
          },
          children: (T, G) => {
            Ui(T, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), W(V);
        var D = R(V, 4), N = Y(D);
        {
          let T = /* @__PURE__ */ _(() => n().systemPrompt || "");
          ut(N, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(T);
            },
            oninput: (G) => {
              l(o, { systemPrompt: G.target.value });
            }
          });
        }
        W(D);
        var S = R(D, 4), z = Y(S);
        {
          let T = /* @__PURE__ */ _(() => n().userPrompt || "");
          ut(z, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(T);
            },
            oninput: (G) => {
              l(o, { userPrompt: G.target.value });
            }
          });
        }
        W(S);
        var $ = R(S, 2);
        {
          var O = (T) => {
            var G = c$(), ee = R(Q(G), 2), j = Y(ee);
            {
              let Z = /* @__PURE__ */ _(() => n().jsonSchema || "");
              ut(j, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(Z);
                },
                oninput: (X) => {
                  l(o, { jsonSchema: X.target.value });
                }
              });
            }
            W(ee), A(T, G);
          };
          ae($, (T) => {
            n().outType === "json" && T(O);
          });
        }
        var M = R($, 2), B = Y(M);
        tt(B, {
          level: 3,
          children: (T, G) => {
            Oe();
            var ee = Le("输出参数");
            A(T, ee);
          },
          $$slots: { default: !0 }
        });
        var q = R(B, 2);
        {
          let T = /* @__PURE__ */ _(() => n().outType ? [n().outType] : []);
          Rt(q, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (G) => {
              u(G.value);
            },
            get value() {
              return c(T);
            }
          });
        }
        W(M);
        var U = R(M, 2);
        Pr(U, {}), A(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(d);
}
bo(["input"]);
se(qv, { data: {} }, [], [], !0);
var f$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), p$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), v$ = /* @__PURE__ */ re('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const m$ = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yv(t, e) {
  ue(e, !0), it(t, m$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Vn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = _t(), { addParameter: i } = Hn(), { updateNodeData: s } = Dt(), a = [
    { label: "JavaScript", value: "js" },
    { label: "Groovy", value: "groovy" },
    { label: "QLExpress", value: "qlexpress" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = f$();
        A(u, d);
      },
      children: (u, d) => {
        var h = v$(), f = Q(h), v = Y(f);
        tt(v, {
          level: 3,
          children: (H, D) => {
            Oe();
            var N = Le("输入参数");
            A(H, N);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        Qe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, D) => {
            var N = p$();
            A(H, N);
          },
          $$slots: { default: !0 }
        }), W(f);
        var y = R(f, 2);
        Ut(y, {});
        var w = R(y, 2);
        tt(w, {
          level: 3,
          mt: "10px",
          children: (H, D) => {
            Oe();
            var N = Le("代码");
            A(H, N);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 4), x = Y(b);
        {
          let H = /* @__PURE__ */ _(() => n().engine ? [n().engine] : ["qlexpress"]);
          Rt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (D) => {
              const N = D.value;
              s(o, () => ({ engine: N }));
            },
            get value() {
              return c(H);
            }
          });
        }
        W(b);
        var E = R(b, 4), C = Y(E);
        {
          let H = /* @__PURE__ */ _(() => n().code || "");
          ut(C, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (D) => {
              s(o, () => ({ code: D.target.value }));
            },
            get value() {
              return c(H);
            }
          });
        }
        W(E);
        var k = R(E, 2), P = Y(k);
        tt(P, {
          level: 3,
          mt: "10px",
          children: (H, D) => {
            Oe();
            var N = Le("输出参数");
            A(H, N);
          },
          $$slots: { default: !0 }
        });
        var V = R(P, 2);
        Qe(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (H, D) => {
            var N = g$();
            A(H, N);
          },
          $$slots: { default: !0 }
        }), W(k);
        var I = R(k, 2);
        Pr(I, {}), A(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
se(Yv, { data: {} }, [], [], !0);
var y$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), w$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), b$ = /* @__PURE__ */ re('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const x$ = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gv(t, e) {
  ue(e, !0), it(t, x$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn(), { updateNodeData: s } = Dt();
  Ze(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = y$();
        A(l, u);
      },
      children: (l, u) => {
        var d = b$(), h = Q(d), f = Y(h);
        tt(f, {
          level: 3,
          children: (k, P) => {
            Oe();
            var V = Le("输入参数");
            A(k, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(f, 2);
        Qe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, P) => {
            var V = w$();
            A(k, V);
          },
          $$slots: { default: !0 }
        }), W(h);
        var m = R(h, 2);
        Ut(m, {});
        var y = R(m, 2);
        tt(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, P) => {
            Oe();
            var V = Le("模板内容");
            A(k, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2), b = Y(w);
        {
          let k = /* @__PURE__ */ _(() => n().template || "");
          ut(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (P) => {
              s(o, () => ({ template: P.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        W(w);
        var x = R(w, 2), E = Y(x);
        tt(E, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Oe();
            var V = Le("输出参数");
            A(k, V);
          },
          $$slots: { default: !0 }
        }), W(x);
        var C = R(x, 2);
        Pr(C, {}), A(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
se(Gv, { data: {} }, [], [], !0);
var k$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), C$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), $$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), S$ = /* @__PURE__ */ re('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), _$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), E$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), O$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), P$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), N$ = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), M$ = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), z$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const A$ = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Uv(t, e) {
  ue(e, !0), it(t, A$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Vn(() => {
    n().method || a(i, () => ({ method: "get" })), n().outputDefs || s(i, "outputDefs", [
      {
        name: "headers",
        nameDisabled: !0,
        dataType: "Object",
        dataTypeDisabled: !0,
        deleteDisabled: !0
      },
      {
        name: "body",
        nameDisabled: !0,
        dataType: "String",
        deleteDisabled: !0
      },
      {
        name: "statusCode",
        nameDisabled: !0,
        dataType: "Number",
        dataTypeDisabled: !0,
        deleteDisabled: !0
      }
    ]);
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = _t(), { addParameter: s } = Hn(), { updateNodeData: a } = Dt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = k$();
        A(u, d);
      },
      children: (u, d) => {
        var h = T$(), f = Q(h), v = Y(f);
        tt(v, {
          level: 3,
          children: (Z, X) => {
            Oe();
            var J = Le("输入参数");
            A(Z, J);
          },
          $$slots: { default: !0 }
        });
        var m = R(v, 2);
        Qe(m, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (Z, X) => {
            var J = C$();
            A(Z, J);
          },
          $$slots: { default: !0 }
        }), W(f);
        var y = R(f, 2);
        Ut(y, {});
        var w = R(y, 2);
        tt(w, {
          level: 3,
          mt: "10px",
          children: (Z, X) => {
            Oe();
            var J = Le("URL 地址");
            A(Z, J);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 2), x = Y(b), E = Y(x);
        {
          let Z = /* @__PURE__ */ _(() => n().method ? [n().method] : ["get"]);
          Rt(E, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (X) => {
              const J = X.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        W(x);
        var C = R(x, 2), k = Y(C);
        {
          let Z = /* @__PURE__ */ _(() => n().url || "");
          Ot(k, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (X) => {
              a(i, () => ({ url: X.target.value }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        W(C), W(b);
        var P = R(b, 2), V = Y(P);
        tt(V, {
          level: 3,
          children: (Z, X) => {
            Oe();
            var J = Le("Http 头信息");
            A(Z, J);
          },
          $$slots: { default: !0 }
        });
        var I = R(V, 2);
        Qe(I, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (Z, X) => {
            var J = $$();
            A(Z, J);
          },
          $$slots: { default: !0 }
        }), W(P);
        var H = R(P, 2);
        Ut(H, { dataKeyName: "headers" });
        var D = R(H, 2);
        {
          var N = (Z) => {
            var X = S$(), J = Q(X);
            tt(J, {
              level: 3,
              mt: "10px",
              children: (Ce, De) => {
                Oe();
                var te = Le("Body");
                A(Ce, te);
              },
              $$slots: { default: !0 }
            });
            var oe = R(J, 2), L = Y(oe), ne = Y(L);
            {
              let Ce = /* @__PURE__ */ _(() => !n().bodyType || n().bodyType === "");
              Ot(ne, {
                type: "radio",
                value: "",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            Oe(), W(L);
            var me = R(L, 2), fe = Y(me);
            {
              let Ce = /* @__PURE__ */ _(() => n().bodyType === "form-data");
              Ot(fe, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            Oe(), W(me);
            var ie = R(me, 2), le = Y(ie);
            {
              let Ce = /* @__PURE__ */ _(() => n().bodyType === "x-www-form-urlencoded");
              Ot(le, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            Oe(), W(ie);
            var ve = R(ie, 2), be = Y(ve);
            {
              let Ce = /* @__PURE__ */ _(() => n().bodyType === "json");
              Ot(be, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            Oe(), W(ve);
            var ke = R(ve, 2), de = Y(ke);
            {
              let Ce = /* @__PURE__ */ _(() => n().bodyType === "raw");
              Ot(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(Ce);
                },
                onchange: (De) => {
                  De.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            Oe(), W(ke), W(oe), A(Z, X);
          };
          ae(D, (Z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && Z(N);
          });
        }
        var S = R(D, 2);
        {
          var z = (Z) => {
            var X = E$(), J = Q(X), oe = Y(J);
            tt(oe, {
              level: 3,
              children: (me, fe) => {
                Oe();
                var ie = Le("参数");
                A(me, ie);
              },
              $$slots: { default: !0 }
            });
            var L = R(oe, 2);
            Qe(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (me, fe) => {
                var ie = _$();
                A(me, ie);
              },
              $$slots: { default: !0 }
            }), W(J);
            var ne = R(J, 2);
            Ut(ne, { dataKeyName: "formData" }), A(Z, X);
          };
          ae(S, (Z) => {
            n().bodyType === "form-data" && Z(z);
          });
        }
        var $ = R(S, 2);
        {
          var O = (Z) => {
            var X = P$(), J = Q(X), oe = Y(J);
            tt(oe, {
              level: 3,
              children: (me, fe) => {
                Oe();
                var ie = Le("Body 参数");
                A(me, ie);
              },
              $$slots: { default: !0 }
            });
            var L = R(oe, 2);
            Qe(L, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (me, fe) => {
                var ie = O$();
                A(me, ie);
              },
              $$slots: { default: !0 }
            }), W(J);
            var ne = R(J, 2);
            Ut(ne, { dataKeyName: "formUrlencoded" }), A(Z, X);
          };
          ae($, (Z) => {
            n().bodyType === "x-www-form-urlencoded" && Z(O);
          });
        }
        var M = R($, 2);
        {
          var B = (Z) => {
            var X = N$(), J = Y(X);
            ut(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (oe) => {
                a(i, { bodyJson: oe.target.value });
              }
            }), W(X), A(Z, X);
          };
          ae(M, (Z) => {
            n().bodyType === "json" && Z(B);
          });
        }
        var q = R(M, 2);
        {
          var U = (Z) => {
            var X = M$(), J = Y(X);
            ut(J, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (oe) => {
                a(i, { bodyRaw: oe.target.value });
              }
            }), W(X), A(Z, X);
          };
          ae(q, (Z) => {
            n().bodyType === "raw" && Z(U);
          });
        }
        var T = R(q, 2), G = Y(T);
        tt(G, {
          level: 3,
          mt: "10px",
          children: (Z, X) => {
            Oe();
            var J = Le("输出参数");
            A(Z, J);
          },
          $$slots: { default: !0 }
        });
        var ee = R(G, 2);
        Qe(ee, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (Z, X) => {
            var J = z$();
            A(Z, J);
          },
          $$slots: { default: !0 }
        }), W(T);
        var j = R(T, 2);
        Pr(j, {}), A(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(l);
}
se(Uv, { data: {} }, [], [], !0);
var D$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), V$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), I$ = /* @__PURE__ */ re('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const L$ = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jv(t, e) {
  ue(e, !0), it(t, L$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn(), s = Br();
  let a = /* @__PURE__ */ we($t([]));
  Vn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  Ze(() => {
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
  });
  var u = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = D$();
        A(d, h);
      },
      children: (d, h) => {
        var f = I$(), v = Q(f), m = Y(v);
        tt(m, {
          level: 3,
          children: (N, S) => {
            Oe();
            var z = Le("输入参数");
            A(N, z);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var z = V$();
            A(N, z);
          },
          $$slots: { default: !0 }
        }), W(v);
        var w = R(v, 2);
        Ut(w, {});
        var b = R(w, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Oe();
            var z = Le("知识库设置");
            A(N, z);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), E = Y(x);
        {
          let N = /* @__PURE__ */ _(() => n().knowledgeId ? [n().knowledgeId] : []);
          Rt(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (S) => {
              const z = S.value;
              l(o, () => ({ knowledgeId: z }));
            },
            get value() {
              return c(N);
            }
          });
        }
        W(x);
        var C = R(x, 4), k = Y(C);
        Ot(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), W(C);
        var P = R(C, 4), V = Y(P);
        {
          let N = /* @__PURE__ */ _(() => n().limit || "");
          Ot(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (S) => {
              const z = S.target.value;
              l(o, () => ({ limit: z }));
            },
            get value() {
              return c(N);
            }
          });
        }
        W(P);
        var I = R(P, 2), H = Y(I);
        tt(H, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Oe();
            var z = Le("输出参数");
            A(N, z);
          },
          $$slots: { default: !0 }
        }), W(I);
        var D = R(I, 2);
        Pr(D, {}), A(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
se(Jv, { data: {} }, [], [], !0);
var H$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), R$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), j$ = /* @__PURE__ */ re('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const B$ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qv(t, e) {
  ue(e, !0), it(t, B$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn(), s = Br();
  let a = /* @__PURE__ */ we($t([]));
  Vn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  Ze(() => {
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
  });
  var u = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = H$();
        A(d, h);
      },
      children: (d, h) => {
        var f = j$(), v = Q(f), m = Y(v);
        tt(m, {
          level: 3,
          children: (N, S) => {
            Oe();
            var z = Le("输入参数");
            A(N, z);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var z = R$();
            A(N, z);
          },
          $$slots: { default: !0 }
        }), W(v);
        var w = R(v, 2);
        Ut(w, {});
        var b = R(w, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Oe();
            var z = Le("搜索引擎设置");
            A(N, z);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), E = Y(x);
        {
          let N = /* @__PURE__ */ _(() => n().engine ? [n().engine] : []);
          Rt(E, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (S) => {
              const z = S.value;
              l(o, () => ({ engine: z }));
            },
            get value() {
              return c(N);
            }
          });
        }
        W(x);
        var C = R(x, 4), k = Y(C);
        Ot(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), W(C);
        var P = R(C, 4), V = Y(P);
        Ot(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ limit: S }));
          }
        }), W(P);
        var I = R(P, 2), H = Y(I);
        tt(H, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Oe();
            var z = Le("输出参数");
            A(N, z);
          },
          $$slots: { default: !0 }
        }), W(I);
        var D = R(I, 2);
        Pr(D, {}), A(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(u);
}
se(Qv, { data: {} }, [], [], !0);
var K$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), F$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Z$ = /* @__PURE__ */ re('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const W$ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function em(t, e) {
  ue(e, !0), it(t, W$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn();
  Ze(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = K$();
        A(a, l);
      },
      handle: (a) => {
        Hr(a, {
          type: "source",
          get position() {
            return Pe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Z$(), d = Q(u), h = Y(d);
        tt(h, {
          level: 3,
          children: (b, x) => {
            Oe();
            var E = Le("循环变量");
            A(b, E);
          },
          $$slots: { default: !0 }
        }), W(d);
        var f = R(d, 2);
        Ut(f, { dataKeyName: "loopVars" });
        var v = R(f, 2), m = Y(v);
        tt(m, {
          level: 3,
          children: (b, x) => {
            Oe();
            var E = Le("输出参数");
            A(b, E);
          },
          $$slots: { default: !0 }
        });
        var y = R(m, 2);
        Qe(y, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var E = F$();
            A(b, E);
          },
          $$slots: { default: !0 }
        }), W(v);
        var w = R(v, 2);
        Ut(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), A(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce(s);
}
se(em, { data: {} }, [], [], !0);
var X$ = /* @__PURE__ */ re('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), q$ = /* @__PURE__ */ re('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Y$ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function tm(t, e) {
  ue(e, !0), it(t, Y$);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = _t(), a = Or(s), l = /* @__PURE__ */ _(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = Dt(), d = (S, z) => {
    u(s, ($) => {
      let O = $.data?.[o()];
      return O[r()] = { ...O[r()], [S]: z }, { [o()]: O };
    });
  }, h = (S, z) => {
    const $ = z.target.value;
    d(S, $);
  }, f = (S) => {
    const z = S.value;
    d("ref", z);
  }, v = (S) => {
    const z = S.value;
    d("formType", z);
  }, m = (S) => {
    const z = S.value;
    d("contentType", z);
  };
  let y;
  const w = () => {
    u(s, (S) => {
      let z = S.data?.[o()];
      return z.splice(r(), 1), { [o()]: [...z] };
    }), y?.hide();
  };
  let b = Fv(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(S) {
      n(S), p();
    },
    get index() {
      return r();
    },
    set index(S) {
      r(S), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(S) {
      o(S), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(S) {
      i(S), p();
    }
  }, E = q$(), C = Q(E), k = Y(C);
  {
    let S = /* @__PURE__ */ _(() => c(l).nameDisabled === !0);
    Ot(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(S);
      },
      oninput: (z) => h("name", z)
    });
  }
  W(C);
  var P = R(C, 2), V = Y(P);
  {
    var I = (S) => {
      Ot(S, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (z) => h("value", z)
      });
    }, H = (S) => {
      var z = he(), $ = Q(z);
      {
        var O = (M) => {
          {
            let B = /* @__PURE__ */ _(() => [c(l).ref]);
            Rt(M, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(B);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ae(
          $,
          (M) => {
            c(l).refType !== "input" && M(O);
          },
          !0
        );
      }
      A(S, z);
    };
    ae(V, (S) => {
      c(l).refType === "fixed" ? S(I) : S(H, !1);
    });
  }
  W(P);
  var D = R(P, 2), N = Y(D);
  return Kt(
    ko(N, {
      placement: "bottom",
      floating: (S) => {
        var z = X$(), $ = Y(z), O = R(Y($));
        {
          let Z = /* @__PURE__ */ _(() => c(l).contentType ? [c(l).contentType] : []);
          Rt(O, {
            get items() {
              return Lu;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: m
          });
        }
        W($);
        var M = R($, 2), B = R(Y(M));
        {
          let Z = /* @__PURE__ */ _(() => c(l).formType ? [c(l).formType] : []);
          Rt(B, {
            get items() {
              return u7;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(Z);
            },
            onSelect: v
          });
        }
        W(M);
        var q = R(M, 2), U = R(Y(q));
        ut(U, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            h("formLabel", Z);
          },
          get value() {
            return c(l).formLabel;
          }
        }), W(q);
        var T = R(q, 2), G = R(Y(T));
        ut(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            h("formDescription", Z);
          },
          get value() {
            return c(l).formDescription;
          }
        }), W(T);
        var ee = R(T, 2), j = Y(ee);
        Qe(j, {
          variant: "destructive",
          onclick: w,
          children: (Z, X) => {
            Oe();
            var J = Le("删除");
            A(Z, J);
          },
          $$slots: { default: !0 }
        }), W(ee), W(z), A(S, z);
      },
      children: (S, z) => {
        Ui(S, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (S) => y = S,
    () => y
  ), W(D), A(t, E), ce(x);
}
se(
  tm,
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
var G$ = /* @__PURE__ */ re('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), U$ = /* @__PURE__ */ re('<div class="none-params svelte-1fllp9b"> </div>'), J$ = /* @__PURE__ */ re('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Q$ = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function nm(t, e) {
  ue(e, !0), it(t, Q$);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = _t(), s = Or(i), a = /* @__PURE__ */ _(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(v = "无确认数据") {
      n(v), p();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(v = "parameters") {
      r(v), p();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(v) {
      o(v), p();
    }
  }, u = J$(), d = Y(u);
  {
    var h = (v) => {
      var m = G$();
      Oe(4), A(v, m);
    };
    ae(d, (v) => {
      c(a).length !== 0 && v(h);
    });
  }
  var f = R(d, 2);
  return At(
    f,
    19,
    () => c(a),
    (v) => v.id,
    (v, m, y) => {
      tm(v, {
        get parameter() {
          return c(m);
        },
        get index() {
          return c(y);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (v) => {
      var m = U$(), y = Y(m, !0);
      W(m), Te(() => ht(y, n())), A(v, m);
    }
  ), W(u), A(t, u), ce(l);
}
se(nm, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const ql = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!ql(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !ql(t[s], e[s])) return !1;
    return !0;
  }
};
var e6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), t6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), n6 = /* @__PURE__ */ re('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const r6 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rm(t, e) {
  ue(e, !0), it(t, r6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn(), { updateNodeData: s } = Dt();
  Ze(() => {
    if (n().confirms) {
      const l = n().confirms.map((u) => ({
        // id?: string;
        // name?: string;
        // nameDisabled?: boolean;
        // dataType?: string;
        // dataTypeDisabled?: boolean;
        // ref?: string;
        // refType?: string;
        // value?: string;
        // description?: string;
        // required?: boolean;
        // defaultValue?: string;
        // deleteDisabled?: boolean;
        // addChildDisabled?: boolean;
        // children?: Parameter[];
        ...u,
        nameDisabled: !0,
        dataTypeDisabled: !0,
        dataType: u.formType === "checkbox" || u.formType === "select" ? "Array" : "String",
        addChildDisabled: !0
      }));
      ql(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  };
  return $n(t, Xe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = e6();
        A(l, u);
      },
      children: (l, u) => {
        var d = n6(), h = Q(d), f = Y(h);
        tt(f, {
          level: 3,
          children: (k, P) => {
            Oe();
            var V = Le("确认数据");
            A(k, V);
          },
          $$slots: { default: !0 }
        });
        var v = R(f, 2);
        Qe(v, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, P) => {
            var V = t6();
            A(k, V);
          },
          $$slots: { default: !0 }
        }), W(h);
        var m = R(h, 2);
        nm(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = R(m, 2);
        tt(y, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Oe();
            var V = Le("确认消息");
            A(k, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 4), b = Y(w);
        {
          let k = /* @__PURE__ */ _(() => n().message || "");
          ut(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (P) => {
              s(o, () => ({ message: P.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        W(w);
        var x = R(w, 2), E = Y(x);
        tt(E, {
          level: 3,
          mt: "10px",
          children: (k, P) => {
            Oe();
            var V = Le("输出参数");
            A(k, V);
          },
          $$slots: { default: !0 }
        }), W(x);
        var C = R(x, 2);
        Pr(C, { placeholder: "" }), A(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce(a);
}
se(rm, { data: {} }, [], [], !0);
const o6 = {
  startNode: jv,
  codeNode: Yv,
  confirmNode: rm,
  llmNode: qv,
  templateNode: Gv,
  httpNode: Uv,
  knowledgeNode: Jv,
  searchEngineNode: Qv,
  loopNode: em,
  endNode: Wv
};
var i6 = /* @__PURE__ */ re("<!> ", 1);
function Yl(t, e) {
  ue(e, !0);
  const n = g(e, "icon", 7), r = g(e, "title", 7), o = g(e, "type", 7), i = g(e, "description", 7), s = g(e, "extra", 7), a = Dt(), l = (h) => {
    if (!h.dataTransfer)
      return null;
    const f = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    h.dataTransfer.setData("application/tinyflow", JSON.stringify(f)), h.dataTransfer.effectAllowed = "move";
  }, u = () => {
    const h = window.innerWidth, f = window.innerHeight, v = a.screenToFlowPosition({ x: h / 2, y: f / 2 }), m = {
      id: `node_${tr()}`,
      type: o(),
      position: v,
      data: { title: r(), description: i(), ...s() }
    };
    Je.addNode(m), Je.selectNodeOnly(m.id);
  };
  var d = {
    get icon() {
      return n();
    },
    set icon(h) {
      n(h), p();
    },
    get title() {
      return r();
    },
    set title(h) {
      r(h), p();
    },
    get type() {
      return o();
    },
    set type(h) {
      o(h), p();
    },
    get description() {
      return i();
    },
    set description(h) {
      i(h), p();
    },
    get extra() {
      return s();
    },
    set extra(h) {
      s(h), p();
    }
  };
  return Qe(t, {
    draggable: !0,
    ondragstart: l,
    onclick: u,
    get "data-node-type"() {
      return o();
    },
    children: (h, f) => {
      var v = i6(), m = Q(v);
      Ca(m, n);
      var y = R(m);
      Te(() => ht(y, ` ${r() ?? ""}`)), A(h, v);
    },
    $$slots: { default: !0 }
  }), ce(d);
}
se(Yl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var s6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), a6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), l6 = /* @__PURE__ */ re('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function om(t, e) {
  ue(e, !0);
  let n = /* @__PURE__ */ we("base"), r = /* @__PURE__ */ we("show");
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.3873 13.4975L17.9403 20.5117L13.2418 22.2218L10.6889 15.2076L6.79004 17.6529L8.4086 1.63318L19.9457 12.8646L15.3873 13.4975ZM15.3768 19.3163L12.6618 11.8568L15.6212 11.4459L9.98201 5.9561L9.19088 13.7863L11.7221 12.1988L14.4371 19.6583L15.3768 19.3163Z"></path></svg>',
      title: "用户确认",
      type: "confirmNode",
      sortNo: 900,
      description: "确认继续或选择内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 1e3,
      description: "结束定义输出参数"
    }
  ], i = [
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ], s = [], a = Br(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((x, E) => (l[x].sortNo || 0) - (l[E].sortNo || 0));
    for (let x of b)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, E) => (x.sortNo || 0) - (E.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let x of b)
        for (let E = 0; E < o.length; E++)
          if (o[E].type === x) {
            o.splice(E, 1);
            break;
          }
    }
  }
  var u = l6(), d = Y(u), h = Y(d), f = Y(h);
  Iv(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      F(n, b.value.toString(), !0);
    }
  }), W(h);
  var v = R(h, 2), m = Y(v);
  At(m, 21, () => o, uo, (b, x) => {
    Yl(b, Xe(() => c(x)));
  }), W(m);
  var y = R(m, 2);
  At(y, 21, () => s, uo, (b, x) => {
    Yl(b, Xe(() => c(x)));
  }), W(y), W(v), W(d);
  var w = R(d, 2);
  Qe(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      F(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var E = he(), C = Q(E);
      {
        var k = (V) => {
          var I = s6();
          A(V, I);
        }, P = (V) => {
          var I = a6();
          A(V, I);
        };
        ae(C, (V) => {
          c(r) === "show" ? V(k) : V(P, !1);
        });
      }
      A(b, E);
    },
    $$slots: { default: !0 }
  }), W(u), Te(() => {
    ln(u, 1, `tf-toolbar ${c(r) ?? ""}`), Bt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Bt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), A(t, u), ce();
}
se(om, {}, [], [], !0);
const u6 = () => ({ getNode: (t) => Je.getNode(t) }), c6 = () => ({ ensureParentInNodesBefore: (t, e) => {
  Je.updateNodes((n) => {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (n[s].id === t) {
        r = s;
        break;
      }
    if (r <= 0)
      return n;
    let o = -1;
    for (let s = 0; s < r; s++)
      if (n[s].parentId === t || n[s].id === e) {
        o = s;
        break;
      }
    if (o == -1)
      return n;
    const i = n[r];
    for (let s = r; s > o; s--)
      n[s] = n[s - 1];
    return n[o] = i, n;
  });
} }), d6 = () => ({ getEdgesByTarget: (t) => Je.getEdges().filter((e) => e.target === t) });
var h6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), f6 = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), p6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), g6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), v6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), m6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), y6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), w6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), b6 = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), x6 = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const k6 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function im(t, e) {
  ue(e, !0), it(t, k6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = Hn(), s = Dt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), f = Br().customNodes[e.type];
  f.render?.(h, d, s);
  const v = f.forms;
  let m;
  Ze(() => {
    n().expand && m && m.append(h);
  }), Ze(() => {
    n() && f.onUpdate?.(h, { ...d, data: n() });
  }), Ze(() => {
    !n().parameters && f.parameters && l({
      parameters: Ni(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Ze(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Ni(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), p();
    }
  };
  {
    const w = (x) => {
      var E = he(), C = Q(E);
      Ca(C, () => f.icon), A(x, E);
    };
    let b = /* @__PURE__ */ _(() => ({ ...n(), description: f.description }));
    $n(t, Xe(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (x, E) => {
          var C = x6(), k = Q(C);
          {
            var P = (S) => {
              var z = f6(), $ = Q(z), O = Y($);
              tt(O, {
                level: 3,
                children: (U, T) => {
                  Oe();
                  var G = Le("输入参数");
                  A(U, G);
                },
                $$slots: { default: !0 }
              });
              var M = R(O, 2);
              {
                var B = (U) => {
                  Qe(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (T, G) => {
                      var ee = h6();
                      A(T, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(M, (U) => {
                  f.parametersAddEnable !== !1 && U(B);
                });
              }
              W($);
              var q = R($, 2);
              Ut(q, {}), A(S, z);
            };
            ae(k, (S) => {
              f.parametersEnable !== !1 && S(P);
            });
          }
          var V = R(k, 2);
          {
            var I = (S) => {
              var z = he(), $ = Q(z);
              At($, 17, () => v, uo, (O, M) => {
                var B = he(), q = Q(B);
                {
                  var U = (G) => {
                    var ee = p6(), j = Q(ee), Z = Y(j, !0);
                    W(j);
                    var X = R(j, 2), J = Y(X);
                    {
                      let oe = /* @__PURE__ */ _(() => n()[c(M).name] || c(M).defaultValue);
                      Ot(J, Xe(
                        {
                          get placeholder() {
                            return c(M).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(M).attrs,
                        {
                          onchange: (L) => {
                            u(c(M).name, L);
                          }
                        }
                      ));
                    }
                    W(X), Te(() => ht(Z, c(M).label)), A(G, ee);
                  }, T = (G) => {
                    var ee = he(), j = Q(ee);
                    {
                      var Z = (J) => {
                        var oe = g6(), L = Q(oe), ne = Y(L, !0);
                        W(L);
                        var me = R(L, 2), fe = Y(me);
                        {
                          let ie = /* @__PURE__ */ _(() => n()[c(M).name] || c(M).defaultValue);
                          ut(fe, Xe(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(M).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(M).attrs,
                            {
                              onchange: (le) => {
                                u(c(M).name, le);
                              }
                            }
                          ));
                        }
                        W(me), Te(() => ht(ne, c(M).label)), A(J, oe);
                      }, X = (J) => {
                        var oe = he(), L = Q(oe);
                        {
                          var ne = (fe) => {
                            var ie = v6(), le = Q(ie), ve = Y(le, !0);
                            W(le);
                            var be = R(le, 2), ke = Y(be), de = Y(ke), Ce = Y(de);
                            W(de);
                            var De = R(de, 2), te = (Ve) => l({ [c(M).name]: parseFloat(Ve.target.value) });
                            ot(
                              De,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(M).attrs,
                                value: n()[c(M).name] ?? c(M).defaultValue,
                                oninput: te
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), W(ke), W(be), Te(() => {
                              ht(ve, c(M).label), ht(Ce, `${c(M).description ?? ""}: ${n()[c(M).name] ?? c(M).defaultValue ?? ""}`);
                            }), A(fe, ie);
                          }, me = (fe) => {
                            var ie = he(), le = Q(ie);
                            {
                              var ve = (ke) => {
                                var de = m6(), Ce = Q(de), De = Y(Ce, !0);
                                W(Ce);
                                var te = R(Ce, 2), Ve = Y(te);
                                {
                                  let Ne = /* @__PURE__ */ _(() => c(M).options || []), We = /* @__PURE__ */ _(() => n()[c(M).name] ? [n()[c(M).name]] : [c(M).defaultValue]);
                                  Rt(Ve, {
                                    get items() {
                                      return c(Ne);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(M).placeholder;
                                    },
                                    onSelect: (Re) => {
                                      const Ke = Re.value;
                                      l({ [c(M).name]: Ke });
                                    },
                                    get value() {
                                      return c(We);
                                    }
                                  });
                                }
                                W(te), Te(() => ht(De, c(M).label)), A(ke, de);
                              }, be = (ke) => {
                                var de = he(), Ce = Q(de);
                                {
                                  var De = (Ve) => {
                                    var Ne = y6(), We = Q(Ne), Re = Y(We, !0);
                                    W(We);
                                    var Ke = R(We, 2), wt = Y(Ke);
                                    {
                                      let bt = /* @__PURE__ */ _(() => c(M).chosen?.buttonText);
                                      Vv(wt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(M).placeholder;
                                        },
                                        get buttonText() {
                                          return c(bt);
                                        },
                                        onChosen: (lt, ye, Ae) => {
                                          c(M).chosen?.onChosen?.(l, lt, ye, Ae);
                                        },
                                        get value() {
                                          return n()[c(M).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(M).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    W(Ke), Te(() => ht(Re, c(M).label)), A(Ve, Ne);
                                  }, te = (Ve) => {
                                    var Ne = he(), We = Q(Ne);
                                    {
                                      var Re = (Ke) => {
                                        tt(Ke, Xe({ level: 3, mt: "10px" }, () => c(M).attrs, {
                                          children: (wt, bt) => {
                                            Oe();
                                            var lt = Le();
                                            Te(() => ht(lt, c(M).label)), A(wt, lt);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        We,
                                        (Ke) => {
                                          c(M).type === "heading" && Ke(Re);
                                        },
                                        !0
                                      );
                                    }
                                    A(Ve, Ne);
                                  };
                                  ae(
                                    Ce,
                                    (Ve) => {
                                      c(M).type === "chosen" ? Ve(De) : Ve(te, !1);
                                    },
                                    !0
                                  );
                                }
                                A(ke, de);
                              };
                              ae(
                                le,
                                (ke) => {
                                  c(M).type === "select" ? ke(ve) : ke(be, !1);
                                },
                                !0
                              );
                            }
                            A(fe, ie);
                          };
                          ae(
                            L,
                            (fe) => {
                              c(M).type === "slider" ? fe(ne) : fe(me, !1);
                            },
                            !0
                          );
                        }
                        A(J, oe);
                      };
                      ae(
                        j,
                        (J) => {
                          c(M).type === "textarea" ? J(Z) : J(X, !1);
                        },
                        !0
                      );
                    }
                    A(G, ee);
                  };
                  ae(q, (G) => {
                    c(M).type === "input" ? G(U) : G(T, !1);
                  });
                }
                A(O, B);
              }), A(S, z);
            };
            ae(V, (S) => {
              v && S(I);
            });
          }
          var H = R(V, 2);
          Kt(H, (S) => m = S, () => m);
          var D = R(H, 2);
          {
            var N = (S) => {
              var z = b6(), $ = Q(z), O = Y($);
              tt(O, {
                level: 3,
                mt: "10px",
                children: (U, T) => {
                  Oe();
                  var G = Le("输出参数");
                  A(U, G);
                },
                $$slots: { default: !0 }
              });
              var M = R(O, 2);
              {
                var B = (U) => {
                  Qe(U, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (T, G) => {
                      var ee = w6();
                      A(T, ee);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(M, (U) => {
                  f.outputDefsAddEnable !== !1 && U(B);
                });
              }
              W($);
              var q = R($, 2);
              Pr(q, {}), A(S, z);
            };
            ae(D, (S) => {
              f.outputDefsEnable !== !1 && S(N);
            });
          }
          Te(() => {
            Bt(H, f.rootStyle || ""), ln(H, 1, Er(f.rootClass), "svelte-qt4m0r");
          }), A(x, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ce(y);
}
se(im, { data: {} }, [], [], !0);
const C6 = () => ({ updateEdgeData: (t, e, n) => {
  const r = Je.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Je.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), $6 = () => ({ deleteEdge: (t) => {
  Je.removeEdge(t);
} }), S6 = () => {
  const t = (e, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === e && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (e) => {
    const n = Je.getEdges(), r = [];
    let o = t(e, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Je.getNode(s.target)), i.push(...t(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, _6 = () => ({ getNodeRelativePosition: (t) => {
  let e = Je.getNode(t);
  const n = { x: 0, y: 0 };
  for (; e; )
    n.x += e.position.x, n.y += e.position.y, e.parentId ? e = Je.getNode(e.parentId) : e = void 0;
  return n;
} });
function E6(t) {
  const { id: e, type: n, position: r, data: o, parentId: i } = t;
  return {
    id: e,
    type: n,
    position: { x: r.x, y: r.y },
    parentId: i || void 0,
    data: o ? JSON.parse(JSON.stringify(o)) : {},
    ...i !== void 0 && { parentId: i }
  };
}
function O6(t) {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const a of t)
    e.set(a.id, a), n.set(a.id, 0), a.parentId && (n.set(a.id, 1), r.has(a.parentId) || r.set(a.parentId, []), r.get(a.parentId).push(a.id));
  const o = [];
  for (const a of t)
    (!a.parentId || !e.has(a.parentId)) && o.push(a);
  const i = [], s = /* @__PURE__ */ new Set();
  for (; o.length > 0; ) {
    const a = o.shift();
    if (s.has(a.id)) continue;
    s.add(a.id), i.push(a);
    const l = r.get(a.id) || [];
    for (const u of l)
      s.has(u) || o.push(e.get(u));
  }
  for (const a of t)
    s.has(a.id) || i.push(a);
  return i;
}
function P6(t) {
  const { id: e, source: n, target: r, sourceHandle: o, targetHandle: i, type: s, data: a } = t;
  return {
    id: e,
    source: n,
    target: r,
    ...o !== void 0 && { sourceHandle: o },
    ...i !== void 0 && { targetHandle: i },
    ...s !== void 0 && { type: s },
    data: a ? JSON.parse(JSON.stringify(a)) : {}
  };
}
function Gl(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Gl(n, e));
  if (typeof t == "object") {
    if (t.refType === "ref" && typeof t.ref == "string") {
      const r = t.ref.match(/^([^.\s]+)\.(.+)$/);
      if (r) {
        const [o, i, s] = r, a = e.get(i);
        if (a !== void 0)
          return { ...t, ref: `${a}.${s}` };
      }
    }
    const n = {};
    for (const r in t)
      Object.hasOwn(t, r) && (n[r] = Gl(t[r], e));
    return n;
  }
  return t;
}
const N6 = () => (Dt(), { copyHandler: async (t) => {
  const e = Je.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Je.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(E6), o = n.map(P6), i = JSON.stringify({
    tinyflowNodes: r,
    tinyflowEdges: o,
    version: "1.0"
  }, null, 0);
  try {
    "clipboardData" in t && t.clipboardData ? (t.clipboardData.setData("text/plain", i), t instanceof ClipboardEvent && t.preventDefault()) : await navigator.clipboard.writeText(i), console.log("Copied nodes and edges to clipboard");
  } catch (s) {
    console.error("Failed to copy:", s);
    try {
      sessionStorage.setItem("tinyflow_clipboard", i);
    } catch {
    }
  }
}, pasteHandler: (t) => {
  const e = t.clipboardData?.getData("text/plain");
  if (!e) return;
  let n = null;
  try {
    n = JSON.parse(e);
  } catch {
    return;
  }
  if (!n?.tinyflowNodes || !Array.isArray(n.tinyflowNodes))
    return;
  t.preventDefault();
  const r = O6(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${tr()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = Gl(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: h,
      position: {
        x: (l.position?.x ?? 0) + 50,
        y: (l.position?.y ?? 0) + 50
      },
      selected: !0
    });
  }
  const a = [];
  for (const l of o) {
    const u = i.get(l.source), d = i.get(l.target);
    u && d && a.push({
      ...l,
      id: `edge_${tr()}`,
      source: u,
      target: d
    });
  }
  Je.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Je.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), sh = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var M6 = /* @__PURE__ */ re('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), z6 = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), T6 = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const A6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function sm(t, e) {
  ue(e, !0), it(t, A6);
  const n = g(e, "onInit", 7), r = g(e, "colorMode", 7), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "onInit",
    "colorMode"
  ]), i = Dt();
  console.log("props", o), n()(i);
  let s = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(null);
  const { updateEdgeData: l } = C6(), u = (j) => {
    j.preventDefault(), j.dataTransfer && (j.dataTransfer.dropEffect = "move");
  }, d = (j) => {
    j.preventDefault();
    const Z = i.screenToFlowPosition({ x: j.clientX - 250, y: j.clientY - 100 }), X = j.dataTransfer?.getData("application/tinyflow");
    if (!X)
      return;
    const J = JSON.parse(X), oe = { id: `node_${tr()}`, position: Z, data: {}, ...J };
    Je.addNode(oe), Je.selectNodeOnly(oe.id);
  }, { getNode: h } = u6(), f = (j) => {
    const Z = h(j.source), X = h(j.target);
    if (j.sourceHandle === "loop_handle" || Z.parentId) {
      const J = i.getEdges();
      for (let oe of J)
        if (oe.target === j.target) {
          const L = h(oe.source);
          if (j.sourceHandle === "loop_handle" && L.parentId !== Z.id || Z.parentId && L.parentId !== Z.parentId)
            return !1;
        }
    }
    return !(!Z.parentId && X.parentId && X.parentId !== Z.id);
  }, { getNodesFromSource: v } = S6(), { getNodeRelativePosition: m } = _6(), { ensureParentInNodesBefore: y } = c6(), w = (j, Z) => {
    if (!Z.isValid)
      return;
    const X = Z.toNode;
    if (X.parentId)
      return;
    const J = Z.fromNode, oe = Z.fromHandle, L = { position: { ...X.position } };
    if (oe.id === "loop_handle" ? L.parentId = J.id : J.parentId && (L.parentId = J.parentId), L.parentId) {
      const { x: ne, y: me } = m(L.parentId);
      L.position = { x: X.position.x - ne, y: X.position.y - me }, i.updateNode(X.id, L), v(X.id).forEach((fe) => {
        i.updateNode(fe.id, {
          parentId: L.parentId,
          position: { x: fe.position.x - ne, y: fe.position.y - me }
        });
      }), y(L.parentId, X.id);
    }
    setTimeout(() => {
      Je.getEdges().forEach((ne) => {
        ne.target === X.id && ne.source == J.id && (F(s, !0), F(a, ne, !0));
      });
    });
  }, { getEdgesByTarget: b } = d6(), x = (j) => {
    j.edges.forEach((Z) => {
      Z.id === c(a)?.id && (F(a, null), F(s, !1));
      const X = h(Z.target);
      if (X && X.parentId) {
        const J = b(Z.target), { x: oe, y: L } = m(X.parentId);
        if (J.length === 0)
          i.updateNode(X.id, {
            parentId: void 0,
            position: { x: X.position.x + oe, y: X.position.y + L }
          }), v(X.id).forEach((ne) => {
            i.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + oe, y: ne.position.y + L }
            });
          });
        else {
          let ne = !1;
          for (let me = 0; me < J.length; me++) {
            const fe = J[me], ie = h(fe.source);
            if (ie.parentId || ie.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (i.updateNode(X.id, {
            parentId: void 0,
            position: { x: X.position.x + oe, y: X.position.y + L }
          }), v(X.id).forEach((me) => {
            i.updateNode(me.id, {
              parentId: void 0,
              position: { x: me.position.x + oe, y: me.position.y + L }
            });
          }));
        }
      }
    });
  }, { deleteEdge: E } = $6(), C = (j, Z) => {
  }, k = (j) => {
  }, { copyHandler: P, pasteHandler: V } = N6(), I = (j) => {
    sh() || ((j.ctrlKey || j.metaKey) && j.key === "c" && (j.preventDefault(), P(j)), (j.ctrlKey || j.metaKey) && j.key === "a" && (j.preventDefault(), Je.updateNodes((Z) => Z.map((X) => ({ ...X, selected: !0 }))), Je.updateEdges((Z) => Z.map((X) => ({ ...X, selected: !0 })))));
  }, H = async (j) => {
    sh() || V(j);
  };
  Vn(() => {
    window.addEventListener("keydown", I), window.addEventListener("paste", H);
  }), Ii(() => {
    window.removeEventListener("keydown", I), window.removeEventListener("paste", H);
  });
  const D = {
    // ...nodeTypes
  }, N = Br().customNodes;
  if (N)
    for (let j of Object.keys(N))
      D[j] = im;
  const S = Br().onDataChange;
  Ze(() => {
    S?.({
      nodes: Je.getNodes(),
      edges: Je.getEdges(),
      viewport: Je.getViewport()
    });
  });
  var z = {
    get onInit() {
      return n();
    },
    set onInit(j) {
      n(j), p();
    },
    get colorMode() {
      return r();
    },
    set colorMode(j) {
      r(j), p();
    }
  }, $ = T6(), O = Y($), M = Je.getNodes, B = Je.setNodes, q = Je.getEdges, U = Je.setEdges, T = Je.getViewport, G = Je.setViewport;
  {
    let j = /* @__PURE__ */ _(() => ({ ...o6, ...D })), Z = /* @__PURE__ */ _(() => ({
      markerEnd: { type: Si.ArrowClosed, width: 20, height: 20 }
    }));
    Yp(O, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(j);
      },
      get nodes() {
        return M();
      },
      set nodes(X) {
        B(X);
      },
      get edges() {
        return q();
      },
      set edges(X) {
        U(X);
      },
      get viewport() {
        return T();
      },
      set viewport(X) {
        G(X);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: u,
      isValidConnection: f,
      onconnectend: w,
      onconnectstart: C,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (X) => {
        F(s, !0), F(a, X.edge, !0);
      },
      onbeforeconnect: (X) => ({ ...X, id: tr() }),
      ondelete: x,
      onclick: (X) => {
        const J = X.target;
        J.classList.contains("svelte-flow__edge-interaction") || J.classList.contains("panel-content") || J.closest(".panel-content") || (F(s, !1), F(a, null));
      },
      get defaultEdgeOptions() {
        return c(Z);
      },
      children: (X, J) => {
        var oe = z6(), L = Q(oe);
        ig(L, {});
        var ne = R(L, 2);
        ng(ne, {});
        var me = R(ne, 2);
        ag(me, {});
        var fe = R(me, 2);
        {
          var ie = (le) => {
            Zi(le, {
              children: (ve, be) => {
                var ke = M6(), de = R(Y(ke), 4), Ce = Y(de);
                {
                  let Ne = /* @__PURE__ */ _(() => c(a)?.data?.condition);
                  ut(Ce, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ne);
                    },
                    onchange: (We) => {
                      c(a) && l(c(a).id, { condition: We.target?.value });
                    }
                  });
                }
                W(de);
                var De = R(de, 2), te = Y(De);
                Qe(te, {
                  variant: "destructive",
                  onclick: () => {
                    E(c(a)?.id), F(s, !1);
                  },
                  children: (Ne, We) => {
                    Oe();
                    var Re = Le("删除");
                    A(Ne, Re);
                  },
                  $$slots: { default: !0 }
                });
                var Ve = R(te, 2);
                Qe(Ve, {
                  variant: "default",
                  onclick: () => {
                    F(s, !1);
                  },
                  children: (Ne, We) => {
                    Oe();
                    var Re = Le("保存");
                    A(Ne, Re);
                  },
                  $$slots: { default: !0 }
                }), W(De), W(ke), A(ve, ke);
              },
              $$slots: { default: !0 }
            });
          };
          ae(fe, (le) => {
            c(s) && le(ie);
          });
        }
        A(X, oe);
      },
      $$slots: { default: !0 }
    });
  }
  var ee = R(O, 2);
  return om(ee, {}), W($), A(t, $), ce(z);
}
se(sm, { onInit: {}, colorMode: {} }, [], [], !0);
const am = typeof window < "u" ? window : void 0;
function D6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let V6 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = am, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = vo((r) => {
      const o = St(e, "focusin", r), i = St(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? D6(this.#e) : null;
  }
};
new V6();
function I6(t, e) {
  switch (t) {
    case "post":
      Ze(e);
      break;
    case "pre":
      nn(e);
      break;
  }
}
function lm(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  I6(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = yt(() => n(a, s));
    return s = a, l;
  });
}
function fc(t, e, n) {
  lm(t, "post", e, n);
}
function L6(t, e, n) {
  lm(t, "pre", e, n);
}
fc.pre = L6;
function H6(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class um {
  #e;
  #t;
  #n;
  #r;
  #o;
  #i = /* @__PURE__ */ we(0);
  constructor(e, n, r = {}) {
    const {
      storage: o = "local",
      serializer: i = { serialize: JSON.stringify, deserialize: JSON.parse },
      syncTabs: s = !0,
      window: a = am
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = H6(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = vo(() => St(a, "storage", this.#a)));
  }
  get current() {
    this.#o?.(), c(this.#i);
    const e = this.#s(this.#r?.getItem(this.#t)) ?? this.#e, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
      if (o === null || o?.constructor.name === "Date" || typeof o != "object")
        return o;
      let i = n.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(this.#i), r(Reflect.get(s, a))),
        set: (s, a, l) => (F(this.#i, c(this.#i) + 1), Reflect.set(s, a, l), this.#l(e), !0)
      }), n.set(o, i)), i;
    };
    return r(e);
  }
  set current(e) {
    this.#l(e), F(this.#i, c(this.#i) + 1);
  }
  #a = (e) => {
    e.key !== this.#t || e.newValue === null || (this.#e = this.#s(e.newValue), F(this.#i, c(this.#i) + 1));
  };
  #s(e) {
    try {
      return this.#n.deserialize(e);
    } catch (n) {
      console.error(`Error when parsing "${e}" from persisted store "${this.#t}"`, n);
      return;
    }
  }
  #l(e) {
    try {
      e != null && this.#r?.setItem(this.#t, this.#n.serialize(e));
    } catch (n) {
      console.error(`Error when writing value from persisted store "${this.#t}" to ${this.#r}`, n);
    }
  }
}
function ah(t) {
  return t.filter((e) => e.length > 0);
}
const cm = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, Ji = typeof document < "u";
function R6(t) {
  return typeof t == "function";
}
function j6(t) {
  return t !== null && typeof t == "object";
}
const Mi = Symbol("box"), pc = Symbol("is-writable");
function B6(t) {
  return j6(t) && Mi in t;
}
function K6(t) {
  return Nt.isBox(t) && pc in t;
}
function Nt(t) {
  let e = /* @__PURE__ */ we($t(t));
  return {
    [Mi]: !0,
    [pc]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function F6(t, e) {
  const n = /* @__PURE__ */ _(t);
  return e ? {
    [Mi]: !0,
    [pc]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Mi]: !0,
    get current() {
      return t();
    }
  };
}
function Z6(t) {
  return Nt.isBox(t) ? t : R6(t) ? Nt.with(t) : Nt(t);
}
function W6(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => Nt.isBox(r) ? (Nt.isWritableBox(r) ? Object.defineProperty(e, n, {
      get() {
        return r.current;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(o) {
        r.current = o;
      }
    }) : Object.defineProperty(e, n, {
      get() {
        return r.current;
      }
    }), e) : Object.assign(e, { [n]: r }),
    {}
  );
}
function X6(t) {
  return Nt.isWritableBox(t) ? {
    [Mi]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
Nt.from = Z6;
Nt.with = F6;
Nt.flatten = W6;
Nt.readonly = X6;
Nt.isBox = B6;
Nt.isWritableBox = K6;
function q6(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const Y6 = q6(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function G6(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${Y6(e)}: ${t[e]};`).join(`
`);
}
function U6(t = {}) {
  return G6(t).replace(`
`, " ");
}
const J6 = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
U6(J6);
const Q6 = typeof window < "u" ? window : void 0;
function e9(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class t9 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = Q6, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = vo((o) => {
      const i = St(n, "focusin", o), s = St(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? e9(this.#e) : null;
  }
}
new t9();
const no = Nt("mode-watcher-mode"), ro = Nt("mode-watcher-theme"), n9 = ["dark", "light", "system"];
function Ul(t) {
  return typeof t != "string" ? !1 : n9.includes(t);
}
class r9 {
  #e = "system";
  #t = Ji ? localStorage : cm;
  #n = this.#t.getItem(no.current);
  #r = Ul(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ we($t(this.#i()));
  #i(e = this.#r) {
    return new um(no.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => Ul(n) ? n : this.#e
      }
    });
  }
  constructor() {
    mo(() => fc.pre(() => no.current, (e, n) => {
      const r = c(this.#o).current;
      F(this.#o, this.#i(r), !0), n && localStorage.removeItem(n);
    }));
  }
  get current() {
    return c(this.#o).current;
  }
  set current(e) {
    c(this.#o).current = e;
  }
}
class o9 {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ we($t(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Ep("prefers-color-scheme: light") : { current: !1 };
  query() {
    Ji && F(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    mo(() => {
      nn(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const Jl = new r9(), Ql = new o9();
class i9 {
  #e = Ji ? localStorage : cm;
  #t = this.#e.getItem(ro.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ we($t(this.#o()));
  #o(e = this.#n) {
    return new um(ro.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    mo(() => fc.pre(() => ro.current, (e, n) => {
      const r = c(this.#r).current;
      F(this.#r, this.#o(r), !0), n && localStorage.removeItem(n);
    }));
  }
  /**
   * The current theme.
   * @returns The current theme.
   */
  get current() {
    return c(this.#r).current;
  }
  /**
   * Set the current theme.
   * @param newValue The new theme to set.
   */
  set current(e) {
    c(this.#r).current = e;
  }
}
const Os = new i9();
let lh, uh, ch = !1, gs = null;
function s9() {
  return gs || (gs = document.createElement("style"), gs.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), gs);
}
function dm(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!ch) {
    ch = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(lh), clearTimeout(uh);
  const n = s9(), r = () => document.head.appendChild(n), o = () => {
    n.parentNode && document.head.removeChild(n);
  };
  function i() {
    t(), window.requestAnimationFrame(o);
  }
  if (typeof window.requestAnimationFrame < "u") {
    r(), e ? i() : window.requestAnimationFrame(() => {
      i();
    });
    return;
  }
  r(), lh = window.setTimeout(() => {
    t(), uh = window.setTimeout(o, 16);
  }, 16);
}
const Tr = Nt(void 0), ca = Nt(!0), da = Nt(!1), eu = Nt([]), tu = Nt([]);
function a9() {
  const t = /* @__PURE__ */ _(() => {
    if (!Ji) return;
    const e = Jl.current === "system" ? Ql.current : Jl.current, n = ah(eu.current), r = ah(tu.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && Tr.current && s.setAttribute("content", Tr.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && Tr.current && s.setAttribute("content", Tr.current.dark));
    }
    return ca.current ? dm(o, da.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function l9() {
  const t = /* @__PURE__ */ _(() => {
    if (Os.current, !Ji) return;
    function e() {
      document.documentElement.setAttribute("data-theme", Os.current);
    }
    return ca.current ? dm(e, yt(() => da.current)) : e(), Os.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const u9 = a9(), c9 = l9();
function hm(t) {
  Jl.current = t;
}
function d9(t) {
  Os.current = t;
}
function h9({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var f9 = /* @__PURE__ */ re('<meta name="theme-color"/>');
function fm(t, e) {
  ue(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), p();
    }
  }, o = he(), i = Q(o);
  {
    var s = (a) => {
      var l = f9();
      Te(() => Me(l, "content", n().dark)), A(a, l);
    };
    ae(i, (a) => {
      n() && a(s);
    });
  }
  return A(t, o), ce(r);
}
se(fm, { themeColors: {} }, [], [], !0);
var p9 = /* @__PURE__ */ re('<meta name="theme-color"/>'), g9 = /* @__PURE__ */ re("<!> <!>", 1);
function pm(t, e) {
  ue(e, !0);
  let n = g(e, "trueNonce", 7, ""), r = g(e, "initConfig", 7), o = g(e, "themeColors", 7);
  var i = {
    get trueNonce() {
      return n();
    },
    set trueNonce(s = "") {
      n(s), p();
    },
    get initConfig() {
      return r();
    },
    set initConfig(s) {
      r(s), p();
    },
    get themeColors() {
      return o();
    },
    set themeColors(s) {
      o(s), p();
    }
  };
  return J1("171tvz2", (s) => {
    var a = g9(), l = Q(a);
    {
      var u = (h) => {
        var f = p9();
        Te(() => Me(f, "content", o().dark)), A(h, f);
      };
      ae(l, (h) => {
        o() && h(u);
      });
    }
    var d = R(l, 2);
    Ca(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + h9.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), A(s, a);
  }), ce(i);
}
se(pm, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function gm(t, e) {
  ue(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), f = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  no.current = h(), ro.current = d(), eu.current = s(), tu.current = a(), ca.current = i(), Tr.current = o(), da.current = v(), nn(() => {
    da.current = v();
  }), nn(() => {
    ca.current = i();
  }), nn(() => {
    Tr.current = o();
  }), nn(() => {
    eu.current = s();
  }), nn(() => {
    tu.current = a();
  }), nn(() => {
    no.current = h();
  }), nn(() => {
    ro.current = d();
  }), nn(() => {
    u9.current, no.current, ro.current, c9.current;
  }), Vn(() => {
    Ql.tracking(n()), Ql.query();
    const k = localStorage.getItem(no.current);
    hm(Ul(k) ? k : r());
    const P = localStorage.getItem(ro.current);
    d9(P || l());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: h(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ _(() => typeof window > "u" ? u() : "");
  var w = {
    get track() {
      return n();
    },
    set track(k = !0) {
      n(k), p();
    },
    get defaultMode() {
      return r();
    },
    set defaultMode(k = "system") {
      r(k), p();
    },
    get themeColors() {
      return o();
    },
    set themeColors(k) {
      o(k), p();
    },
    get disableTransitions() {
      return i();
    },
    set disableTransitions(k = !0) {
      i(k), p();
    },
    get darkClassNames() {
      return s();
    },
    set darkClassNames(k = ["dark"]) {
      s(k), p();
    },
    get lightClassNames() {
      return a();
    },
    set lightClassNames(k = []) {
      a(k), p();
    },
    get defaultTheme() {
      return l();
    },
    set defaultTheme(k = "") {
      l(k), p();
    },
    get nonce() {
      return u();
    },
    set nonce(k = "") {
      u(k), p();
    },
    get themeStorageKey() {
      return d();
    },
    set themeStorageKey(k = "mode-watcher-theme") {
      d(k), p();
    },
    get modeStorageKey() {
      return h();
    },
    set modeStorageKey(k = "mode-watcher-mode") {
      h(k), p();
    },
    get disableHeadScriptInjection() {
      return f();
    },
    set disableHeadScriptInjection(k = !1) {
      f(k), p();
    },
    get synchronousModeChanges() {
      return v();
    },
    set synchronousModeChanges(k = !1) {
      v(k), p();
    }
  }, b = he(), x = Q(b);
  {
    var E = (k) => {
      fm(k, {
        get themeColors() {
          return Tr.current;
        }
      });
    }, C = (k) => {
      pm(k, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return Tr.current;
        }
      });
    };
    ae(x, (k) => {
      f() ? k(E) : k(C, !1);
    });
  }
  return A(t, b), ce(w);
}
se(
  gm,
  {
    track: {},
    defaultMode: {},
    themeColors: {},
    disableTransitions: {},
    darkClassNames: {},
    lightClassNames: {},
    defaultTheme: {},
    nonce: {},
    themeStorageKey: {},
    modeStorageKey: {},
    disableHeadScriptInjection: {},
    synchronousModeChanges: {}
  },
  [],
  [],
  !0
);
var v9 = /* @__PURE__ */ re("<!> <!>", 1);
function m9(t, e) {
  ue(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (hm(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Je.init(o?.nodes || [], o?.edges || []), ao("tinyflow_options", n());
  var s = {
    get options() {
      return n();
    },
    set options(d) {
      n(d), p();
    },
    get onInit() {
      return r();
    },
    set onInit(d) {
      r(d), p();
    }
  }, a = v9(), l = Q(a);
  gm(l, {});
  var u = R(l, 2);
  return Gp(u, {
    children: (d, h) => {
      sm(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), A(t, a), ce(s);
}
customElements.define("tinyflow-component", se(m9, { options: {}, onInit: {} }, [], [], !1));
const w9 = _m((t, e) => {
  const n = bc(null), r = bc(null);
  Em(e, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
    getInstance: () => r.current ? r.current : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = t;
  return Om(() => {
    if (n.current) {
      const a = new c7({
        ...t,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ zm.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  w9 as Tinyflow
};
//# sourceMappingURL=index.js.map
