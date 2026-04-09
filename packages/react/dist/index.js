import fh, { forwardRef as _m, useRef as kc, useImperativeHandle as Pm, useEffect as Om } from "react";
var ns = { exports: {} }, ei = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function Em() {
  if (Cc) return ei;
  Cc = 1;
  var t = fh, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, h = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (h[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: e, type: a, key: f, ref: v, props: h, _owner: o.current };
  }
  return ei.Fragment = n, ei.jsx = s, ei.jsxs = s, ei;
}
var ti = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $c;
function Nm() {
  return $c || ($c = 1, process.env.NODE_ENV !== "production" && function() {
    var t = fh, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function w(K) {
      if (K === null || typeof K != "object")
        return null;
      var pe = m && K[m] || K[y];
      return typeof pe == "function" ? pe : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(K) {
      {
        for (var pe = arguments.length, xe = new Array(pe > 1 ? pe - 1 : 0), Ae = 1; Ae < pe; Ae++)
          xe[Ae - 1] = arguments[Ae];
        P("error", K, xe);
      }
    }
    function P(K, pe, xe) {
      {
        var Ae = b.ReactDebugCurrentFrame, rt = Ae.getStackAddendum();
        rt !== "" && (pe += "%s", xe = xe.concat([rt]));
        var dt = xe.map(function(et) {
          return String(et);
        });
        dt.unshift("Warning: " + pe), Function.prototype.apply.call(console[K], console, dt);
      }
    }
    var C = !1, k = !1, E = !1, V = !1, I = !1, L;
    L = Symbol.for("react.module.reference");
    function A(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === i || I || K === o || K === u || K === d || V || K === v || C || k || E || typeof K == "object" && K !== null && (K.$$typeof === f || K.$$typeof === h || K.$$typeof === s || K.$$typeof === a || K.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === L || K.getModuleId !== void 0));
    }
    function D(K, pe, xe) {
      var Ae = K.displayName;
      if (Ae)
        return Ae;
      var rt = pe.displayName || pe.name || "";
      return rt !== "" ? xe + "(" + rt + ")" : xe;
    }
    function _(K) {
      return K.displayName || "Context";
    }
    function N(K) {
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
            return _(pe) + ".Consumer";
          case s:
            var xe = K;
            return _(xe._context) + ".Provider";
          case l:
            return D(K, K.render, "ForwardRef");
          case h:
            var Ae = K.displayName || null;
            return Ae !== null ? Ae : N(K.type) || "Memo";
          case f: {
            var rt = K, dt = rt._payload, et = rt._init;
            try {
              return N(et(dt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, O = 0, z, j, q, G, T, U, te;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function Z() {
      {
        if (O === 0) {
          z = console.log, j = console.info, q = console.warn, G = console.error, T = console.group, U = console.groupCollapsed, te = console.groupEnd;
          var K = {
            configurable: !0,
            enumerable: !0,
            value: B,
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
    function W() {
      {
        if (O--, O === 0) {
          var K = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, K, {
              value: z
            }),
            info: $({}, K, {
              value: j
            }),
            warn: $({}, K, {
              value: q
            }),
            error: $({}, K, {
              value: G
            }),
            group: $({}, K, {
              value: T
            }),
            groupCollapsed: $({}, K, {
              value: U
            }),
            groupEnd: $({}, K, {
              value: te
            })
          });
        }
        O < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = b.ReactCurrentDispatcher, oe;
    function H(K, pe, xe) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (rt) {
            var Ae = rt.stack.trim().match(/\n( *(at )?)/);
            oe = Ae && Ae[1] || "";
          }
        return `
` + oe + K;
      }
    }
    var ne = !1, ge;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ce();
    }
    function ie(K, pe) {
      if (!K || ne)
        return "";
      {
        var xe = ge.get(K);
        if (xe !== void 0)
          return xe;
      }
      var Ae;
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
            } catch (en) {
              Ae = en;
            }
            Reflect.construct(K, [], et);
          } else {
            try {
              et.call();
            } catch (en) {
              Ae = en;
            }
            K.call(et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (en) {
            Ae = en;
          }
          K();
        }
      } catch (en) {
        if (en && Ae && typeof en.stack == "string") {
          for (var Ue = en.stack.split(`
`), qt = Ae.stack.split(`
`), Ct = Ue.length - 1, Ot = qt.length - 1; Ct >= 1 && Ot >= 0 && Ue[Ct] !== qt[Ot]; )
            Ot--;
          for (; Ct >= 1 && Ot >= 0; Ct--, Ot--)
            if (Ue[Ct] !== qt[Ot]) {
              if (Ct !== 1 || Ot !== 1)
                do
                  if (Ct--, Ot--, Ot < 0 || Ue[Ct] !== qt[Ot]) {
                    var wn = `
` + Ue[Ct].replace(" at new ", " at ");
                    return K.displayName && wn.includes("<anonymous>") && (wn = wn.replace("<anonymous>", K.displayName)), typeof K == "function" && ge.set(K, wn), wn;
                  }
                while (Ct >= 1 && Ot >= 0);
              break;
            }
        }
      } finally {
        ne = !1, J.current = dt, W(), Error.prepareStackTrace = rt;
      }
      var So = K ? K.displayName || K.name : "", Ur = So ? H(So) : "";
      return typeof K == "function" && ge.set(K, Ur), Ur;
    }
    function de(K, pe, xe) {
      return ie(K, !1);
    }
    function ye(K) {
      var pe = K.prototype;
      return !!(pe && pe.isReactComponent);
    }
    function ke(K, pe, xe) {
      if (K == null)
        return "";
      if (typeof K == "function")
        return ie(K, ye(K));
      if (typeof K == "string")
        return H(K);
      switch (K) {
        case u:
          return H("Suspense");
        case d:
          return H("SuspenseList");
      }
      if (typeof K == "object")
        switch (K.$$typeof) {
          case l:
            return de(K.render);
          case h:
            return ke(K.type, pe, xe);
          case f: {
            var Ae = K, rt = Ae._payload, dt = Ae._init;
            try {
              return ke(dt(rt), pe, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, he = {}, Ce = b.ReactDebugCurrentFrame;
    function De(K) {
      if (K) {
        var pe = K._owner, xe = ke(K.type, K._source, pe ? pe.type : null);
        Ce.setExtraStackFrame(xe);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Q(K, pe, xe, Ae, rt) {
      {
        var dt = Function.call.bind(be);
        for (var et in K)
          if (dt(K, et)) {
            var Ue = void 0;
            try {
              if (typeof K[et] != "function") {
                var qt = Error((Ae || "React class") + ": " + xe + " type `" + et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof K[et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qt.name = "Invariant Violation", qt;
              }
              Ue = K[et](pe, et, Ae, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ct) {
              Ue = Ct;
            }
            Ue && !(Ue instanceof Error) && (De(rt), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ae || "React class", xe, et, typeof Ue), De(null)), Ue instanceof Error && !(Ue.message in he) && (he[Ue.message] = !0, De(rt), x("Failed %s type: %s", xe, Ue.message), De(null));
          }
      }
    }
    var Ve = Array.isArray;
    function Ie(K) {
      return Ve(K);
    }
    function Be(K) {
      {
        var pe = typeof Symbol == "function" && Symbol.toStringTag, xe = pe && K[Symbol.toStringTag] || K.constructor.name || "Object";
        return xe;
      }
    }
    function Re(K) {
      try {
        return Xe(K), !1;
      } catch {
        return !0;
      }
    }
    function Xe(K) {
      return "" + K;
    }
    function wt(K) {
      if (Re(K))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(K)), Xe(K);
    }
    var Pt = b.ReactCurrentOwner, at = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Me;
    function ft(K) {
      if (be.call(K, "ref")) {
        var pe = Object.getOwnPropertyDescriptor(K, "ref").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return K.ref !== void 0;
    }
    function Ye(K) {
      if (be.call(K, "key")) {
        var pe = Object.getOwnPropertyDescriptor(K, "key").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return K.key !== void 0;
    }
    function pt(K, pe) {
      typeof K.ref == "string" && Pt.current;
    }
    function xt(K, pe) {
      {
        var xe = function() {
          me || (me = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        xe.isReactWarning = !0, Object.defineProperty(K, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function ct(K, pe) {
      {
        var xe = function() {
          Me || (Me = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        xe.isReactWarning = !0, Object.defineProperty(K, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var Vt = function(K, pe, xe, Ae, rt, dt, et) {
      var Ue = {
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
      return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.defineProperty(Ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
    };
    function vt(K, pe, xe, Ae, rt) {
      {
        var dt, et = {}, Ue = null, qt = null;
        xe !== void 0 && (wt(xe), Ue = "" + xe), Ye(pe) && (wt(pe.key), Ue = "" + pe.key), ft(pe) && (qt = pe.ref, pt(pe, rt));
        for (dt in pe)
          be.call(pe, dt) && !at.hasOwnProperty(dt) && (et[dt] = pe[dt]);
        if (K && K.defaultProps) {
          var Ct = K.defaultProps;
          for (dt in Ct)
            et[dt] === void 0 && (et[dt] = Ct[dt]);
        }
        if (Ue || qt) {
          var Ot = typeof K == "function" ? K.displayName || K.name || "Unknown" : K;
          Ue && xt(et, Ot), qt && ct(et, Ot);
        }
        return Vt(K, Ue, qt, rt, Ae, Pt.current, et);
      }
    }
    var lt = b.ReactCurrentOwner, kt = b.ReactDebugCurrentFrame;
    function cn(K) {
      if (K) {
        var pe = K._owner, xe = ke(K.type, K._source, pe ? pe.type : null);
        kt.setExtraStackFrame(xe);
      } else
        kt.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function Xt(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function $o() {
      {
        if (lt.current) {
          var K = N(lt.current.type);
          if (K)
            return `

Check the render method of \`` + K + "`.";
        }
        return "";
      }
    }
    function Qo(K) {
      return "";
    }
    var mt = {};
    function dn(K) {
      {
        var pe = $o();
        if (!pe) {
          var xe = typeof K == "string" ? K : K.displayName || K.name;
          xe && (pe = `

Check the top-level render call using <` + xe + ">.");
        }
        return pe;
      }
    }
    function yc(K, pe) {
      {
        if (!K._store || K._store.validated || K.key != null)
          return;
        K._store.validated = !0;
        var xe = dn(pe);
        if (mt[xe])
          return;
        mt[xe] = !0;
        var Ae = "";
        K && K._owner && K._owner !== lt.current && (Ae = " It was passed a child from " + N(K._owner.type) + "."), cn(K), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Ae), cn(null);
      }
    }
    function wc(K, pe) {
      {
        if (typeof K != "object")
          return;
        if (Ie(K))
          for (var xe = 0; xe < K.length; xe++) {
            var Ae = K[xe];
            Xt(Ae) && yc(Ae, pe);
          }
        else if (Xt(K))
          K._store && (K._store.validated = !0);
        else if (K) {
          var rt = w(K);
          if (typeof rt == "function" && rt !== K.entries)
            for (var dt = rt.call(K), et; !(et = dt.next()).done; )
              Xt(et.value) && yc(et.value, pe);
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
          var Ae = N(pe);
          Q(xe, K.props, "prop", Ae, K);
        } else if (pe.PropTypes !== void 0 && !ir) {
          ir = !0;
          var rt = N(pe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof pe.getDefaultProps == "function" && !pe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wm(K) {
      {
        for (var pe = Object.keys(K.props), xe = 0; xe < pe.length; xe++) {
          var Ae = pe[xe];
          if (Ae !== "children" && Ae !== "key") {
            cn(K), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ae), cn(null);
            break;
          }
        }
        K.ref !== null && (cn(K), x("Invalid attribute `ref` supplied to `React.Fragment`."), cn(null));
      }
    }
    var bc = {};
    function xc(K, pe, xe, Ae, rt, dt) {
      {
        var et = A(K);
        if (!et) {
          var Ue = "";
          (K === void 0 || typeof K == "object" && K !== null && Object.keys(K).length === 0) && (Ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qt = Qo();
          qt ? Ue += qt : Ue += $o();
          var Ct;
          K === null ? Ct = "null" : Ie(K) ? Ct = "array" : K !== void 0 && K.$$typeof === e ? (Ct = "<" + (N(K.type) || "Unknown") + " />", Ue = " Did you accidentally export a JSX literal instead of a component?") : Ct = typeof K, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ct, Ue);
        }
        var Ot = vt(K, pe, xe, rt, dt);
        if (Ot == null)
          return Ot;
        if (et) {
          var wn = pe.children;
          if (wn !== void 0)
            if (Ae)
              if (Ie(wn)) {
                for (var So = 0; So < wn.length; So++)
                  wc(wn[So], K);
                Object.freeze && Object.freeze(wn);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wc(wn, K);
        }
        if (be.call(pe, "key")) {
          var Ur = N(K), en = Object.keys(pe).filter(function(Sm) {
            return Sm !== "key";
          }), ja = en.length > 0 ? "{key: someKey, " + en.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!bc[Ur + ja]) {
            var $m = en.length > 0 ? "{" + en.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ja, Ur, $m, Ur), bc[Ur + ja] = !0;
          }
        }
        return K === r ? wm(Ot) : ym(Ot), Ot;
      }
    }
    function bm(K, pe, xe) {
      return xc(K, pe, xe, !0);
    }
    function xm(K, pe, xe) {
      return xc(K, pe, xe, !1);
    }
    var km = xm, Cm = bm;
    ti.Fragment = r, ti.jsx = km, ti.jsxs = Cm;
  }()), ti;
}
var Sc;
function Tm() {
  return Sc || (Sc = 1, process.env.NODE_ENV === "production" ? ns.exports = Em() : ns.exports = Nm()), ns.exports;
}
var zm = Tm();
const Mm = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Mm);
const ph = 1, gh = 2, vh = 4, Am = 8, Dm = 16, Vm = 1, Im = 2, mh = 4, Hm = 8, Lm = 16, yh = 1, Rm = 2, wh = "[", ga = "[!", iu = "]", ao = {}, Lt = Symbol(), jm = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/2000/svg", bh = "@attach", Km = !1;
var va = Array.isArray, Fm = Array.prototype.indexOf, su = Array.from, zs = Object.keys, Ms = Object.defineProperty, gr = Object.getOwnPropertyDescriptor, xh = Object.getOwnPropertyDescriptors, kh = Object.prototype, Zm = Array.prototype, ma = Object.getPrototypeOf, _c = Object.isExtensible;
function ni(t) {
  return typeof t == "function";
}
const We = () => {
};
function Wm(t) {
  return t();
}
function ul(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ch() {
  var t, e, n = new Promise((r, o) => {
    t = r, e = o;
  });
  return { promise: n, resolve: t, reject: e };
}
function Yt(t, e, n = !1) {
  return t === void 0 ? n ? (
    /** @type {() => V} */
    e()
  ) : (
    /** @type {V} */
    e
  ) : t;
}
function Wo(t, e) {
  if (Array.isArray(t))
    return t;
  if (e === void 0 || !(Symbol.iterator in t))
    return Array.from(t);
  const n = [];
  for (const r of t)
    if (n.push(r), n.length === e) break;
  return n;
}
const jt = 2, au = 4, ya = 8, $h = 1 << 24, $r = 16, Sr = 32, Fr = 64, wa = 128, Mn = 512, Zt = 1024, ln = 2048, _r = 4096, gn = 8192, vr = 16384, ba = 32768, wr = 65536, Pc = 1 << 17, lu = 1 << 18, vo = 1 << 19, Sh = 1 << 20, wi = 32768, cl = 1 << 21, uu = 1 << 22, Dr = 1 << 23, Yn = Symbol("$state"), cu = Symbol("legacy props"), Xm = Symbol(""), Eo = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), qm = 1, xa = 3, Pr = 8;
function du(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ym() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Um(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gm() {
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
function Di(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function s1() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function a1() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Pe = !1;
function Gt(t) {
  Pe = t;
}
let Le;
function bt(t) {
  if (t === null)
    throw Di(), ao;
  return Le = t;
}
function An() {
  return bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ mn(Le)
  );
}
function X(t) {
  if (Pe) {
    if (/* @__PURE__ */ mn(Le) !== null)
      throw Di(), ao;
    Le = t;
  }
}
function Oe(t = 1) {
  if (Pe) {
    for (var e = t, n = Le; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ mn(n);
    Le = n;
  }
}
function As(t = !0) {
  for (var e = 0, n = Le; ; ) {
    if (n.nodeType === Pr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === iu) {
        if (e === 0) return n;
        e -= 1;
      } else (r === wh || r === ga) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mn(n)
    );
    t && n.remove(), n = o;
  }
}
function _h(t) {
  if (!t || t.nodeType !== Pr)
    throw Di(), ao;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Ph(t) {
  return t === this.v;
}
function Oh(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Eh(t) {
  return !Oh(t, this.v);
}
let Xo = !1, l1 = !1;
function u1() {
  Xo = !0;
}
const c1 = [];
function hu(t, e = !1, n = !1) {
  return ws(t, /* @__PURE__ */ new Map(), "", c1, null, n);
}
function ws(t, e, n, r, o = null, i = !1) {
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
    if (va(t)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, a), o !== null && e.set(o, a);
      for (var l = 0; l < t.length; l += 1) {
        var u = t[l];
        l in t && (a[l] = ws(u, e, n, r, null, i));
      }
      return a;
    }
    if (ma(t) === kh) {
      a = {}, e.set(t, a), o !== null && e.set(o, a);
      for (var d in t)
        a[d] = ws(
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
      return ws(
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
function Do(t) {
  gt = t;
}
function Dn(t) {
  return (
    /** @type {T} */
    ka().get(t)
  );
}
function lo(t, e) {
  return ka().set(t, e), e;
}
function d1(t) {
  return ka().has(t);
}
function h1() {
  return ka();
}
function le(t, e = !1, n) {
  gt = {
    p: gt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xo && !e ? { s: null, u: null, $: [] } : null
  };
}
function ue(t) {
  var e = (
    /** @type {ComponentContext} */
    gt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      qh(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, gt = e.p, t ?? /** @type {T} */
  {};
}
function qo() {
  return !Xo || gt !== null && gt.l === null;
}
function ka(t) {
  return gt === null && du(), gt.c ??= new Map(f1(gt) || void 0);
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
let eo = [];
function Nh() {
  var t = eo;
  eo = [], ul(t);
}
function Zr(t) {
  if (eo.length === 0 && !gi) {
    var e = eo;
    queueMicrotask(() => {
      e === eo && Nh();
    });
  }
  eo.push(t);
}
function p1() {
  for (; eo.length > 0; )
    Nh();
}
function Th(t) {
  var e = Ge;
  if (e === null)
    return nt.f |= Dr, t;
  if ((e.f & ba) === 0) {
    if ((e.f & wa) === 0)
      throw t;
    e.b.error(t);
  } else
    Vo(t, e);
}
function Vo(t, e) {
  for (; e !== null; ) {
    if ((e.f & wa) !== 0)
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
const rs = /* @__PURE__ */ new Set();
let st = null, bs = null, kn = null, xn = [], Ca = null, dl = !1, gi = !1;
class Nn {
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
    xn = [], bs = null, this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of e)
      this.#s(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#l(n.effects), this.#l(n.render_effects), this.#l(n.block_effects)) : (bs = this, st = null, Oc(n.render_effects), Oc(n.effects), bs = null, this.#o?.resolve()), kn = null;
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
      var o = r.f, i = (o & (Sr | Fr)) !== 0, s = i && (o & Zt) !== 0, a = s || (o & gn) !== 0 || this.skipped_effects.has(r);
      if ((r.f & wa) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= Zt : (o & au) !== 0 ? n.effects.push(r) : Ii(r) && ((r.f & $r) !== 0 && n.block_effects.push(r), ki(r));
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
      ((n.f & ln) !== 0 ? this.#i : this.#a).push(n), this.#u(n.deps), Wt(n, Zt);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(e) {
    if (e !== null)
      for (const n of e)
        (n.f & jt) === 0 || (n.f & wi) === 0 || (n.f ^= wi, this.#u(
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
    this.previous.has(e) || this.previous.set(e, n), (e.f & Dr) === 0 && (this.current.set(e, e.v), kn?.set(e, e.v));
  }
  activate() {
    st = this, this.apply();
  }
  deactivate() {
    st === this && (st = null, kn = null);
  }
  flush() {
    if (this.activate(), xn.length > 0) {
      if (zh(), st !== null && st !== this)
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
    if (rs.size > 1) {
      this.previous.clear();
      var e = kn, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of rs) {
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
          var o = xn;
          xn = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Mh(d, a, l, u);
          if (xn.length > 0) {
            st = i, i.apply();
            for (const d of xn)
              i.#s(d, r);
            i.deactivate();
          }
          xn = o;
        }
      }
      st = null, kn = e;
    }
    this.committed = !0, rs.delete(this);
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
      Wt(e, ln), uo(e);
    for (const e of this.#a)
      Wt(e, _r), uo(e);
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
    return (this.#o ??= Ch()).promise;
  }
  static ensure() {
    if (st === null) {
      const e = st = new Nn();
      rs.add(st), gi || Nn.enqueue(() => {
        st === e && e.flush();
      });
    }
    return st;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Zr(e);
  }
  apply() {
  }
}
function p(t) {
  var e = gi;
  gi = !0;
  try {
    for (var n; ; ) {
      if (p1(), xn.length === 0 && (st?.flush(), xn.length === 0))
        return Ca = null, /** @type {T} */
        n;
      zh();
    }
  } finally {
    gi = e;
  }
}
function zh() {
  var t = Ir;
  dl = !0;
  try {
    var e = 0;
    for (Vs(!0); xn.length > 0; ) {
      var n = Nn.ensure();
      if (e++ > 1e3) {
        var r, o;
        g1();
      }
      n.process(xn), Vr.clear();
    }
  } finally {
    dl = !1, Vs(t), Ca = null;
  }
}
function g1() {
  try {
    Qm();
  } catch (t) {
    Vo(t, Ca);
  }
}
let lr = null;
function Oc(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (vr | gn)) === 0 && Ii(r) && (lr = /* @__PURE__ */ new Set(), ki(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Qh(r) : r.fn = null), lr?.size > 0)) {
        Vr.clear();
        for (const o of lr) {
          if ((o.f & (vr | gn)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            lr.has(s) && (lr.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (vr | gn)) === 0 && ki(l);
          }
        }
        lr.clear();
      }
    }
    lr = null;
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
      ) : (i & (uu | $r)) !== 0 && (i & ln) === 0 && Ah(o, e, r) && (Wt(o, ln), uo(
        /** @type {Effect} */
        o
      ));
    }
}
function Ah(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const o of t.deps) {
      if (e.includes(o))
        return !0;
      if ((o.f & jt) !== 0 && Ah(
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
function uo(t) {
  for (var e = Ca = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (dl && e === Ge && (n & $r) !== 0 && (n & lu) === 0)
      return;
    if ((n & (Fr | Sr)) !== 0) {
      if ((n & Zt) === 0) return;
      e.f ^= Zt;
    }
  }
  xn.push(e);
}
function mo(t) {
  let e = 0, n = br(0), r;
  return () => {
    bi() && (c(n), wo(() => (e === 0 && (r = yt(() => t(() => Fn(n)))), e += 1, () => {
      Zr(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, Fn(n));
      });
    })));
  };
}
var v1 = wr | vo | wa;
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
  #n = Pe ? Le : null;
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
  #y = mo(() => (this.#f = br(this.#d), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    this.#t = e, this.#r = n, this.#o = r, this.parent = /** @type {Effect} */
    Ge.b, this.#e = !!this.#r.pending, this.#i = Wr(() => {
      if (Ge.b = this, Pe) {
        const i = this.#n;
        An(), /** @type {Comment} */
        i.nodeType === Pr && /** @type {Comment} */
        i.data === ga ? this.#w() : this.#v();
      } else {
        var o = this.#m();
        try {
          this.#a = fn(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#h > 0 ? this.#b() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, v1), Pe && (this.#t = Le);
  }
  #v() {
    try {
      this.#a = fn(() => this.#o(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#e = !1;
  }
  #w() {
    const e = this.#r.pending;
    e && (this.#s = fn(() => e(this.#t)), Nn.enqueue(() => {
      var n = this.#m();
      this.#a = this.#g(() => (Nn.ensure(), fn(() => this.#o(n)))), this.#h > 0 ? this.#b() : (To(
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
    return this.#e && (this.#c = Qt(), this.#t.before(this.#c), e = this.#c), e;
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
    var n = Ge, r = nt, o = gt;
    $n(this.#i), on(this.#i), Do(this.#i.ctx);
    try {
      return e();
    } catch (i) {
      return Th(i), null;
    } finally {
      $n(n), on(r), Do(o);
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
    ), nf(this.#a, this.#u)), this.#s === null && (this.#s = fn(() => e(this.#t)));
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
    this.#h += e, this.#h === 0 && (this.#e = !1, this.#s && To(this.#s, () => {
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
    this.#x(e), this.#d += e, this.#f && Io(this.#f, this.#d);
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
    this.#a && (Ht(this.#a), this.#a = null), this.#s && (Ht(this.#s), this.#s = null), this.#l && (Ht(this.#l), this.#l = null), Pe && (bt(
      /** @type {TemplateNode} */
      this.#n
    ), Oe(), bt(As()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        a1();
        return;
      }
      o = !0, i && i1(), Nn.ensure(), this.#d = 0, this.#l !== null && To(this.#l, () => {
        this.#l = null;
      }), this.#e = this.has_pending_snippet(), this.#a = this.#g(() => (this.#p = !1, fn(() => this.#o(this.#t)))), this.#h > 0 ? this.#b() : this.#e = !1;
    };
    var a = nt;
    try {
      on(null), i = !0, n?.(e, s), i = !1;
    } catch (l) {
      Vo(l, this.#i && this.#i.parent);
    } finally {
      on(a);
    }
    r && Zr(() => {
      this.#l = this.#g(() => {
        Nn.ensure(), this.#p = !0;
        try {
          return fn(() => {
            r(
              this.#t,
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Vo(
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
function co(t, e) {
  return e;
}
function w1(t, e, n) {
  for (var r = [], o = e.length, i = 0; i < o; i++)
    vu(e[i].e, r, !0);
  ef(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      gu(l), l.append(a), t.items.clear(), Pn(t, e[0].prev, e[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = e[u];
      s || (t.items.delete(d.k), Pn(t, d.prev, d.next)), Ht(d.e, !s);
    }
    t.first === e[0] && (t.first = e[0].prev);
  });
}
function At(t, e, n, r, o, i = null) {
  var s = t, a = /* @__PURE__ */ new Map(), l = null, u = (e & vh) !== 0, d = (e & ph) !== 0, h = (e & gh) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      t
    );
    s = Pe ? bt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Nt(f)
    ) : f.appendChild(Qt());
  }
  Pe && An();
  var v = null, m = /* @__PURE__ */ fu(() => {
    var C = n();
    return va(C) ? C : C == null ? [] : su(C);
  }), y, w = !0;
  function b() {
    b1(P, y, s, e, r), v !== null && (y.length === 0 ? (v.fragment ? (s.before(v.fragment), v.fragment = null) : mu(v.effect), x.first = v.effect) : To(v.effect, () => {
      v = null;
    }));
  }
  var x = Wr(() => {
    y = /** @type {V[]} */
    c(m);
    var C = y.length;
    let k = !1;
    if (Pe) {
      var E = _h(s) === ga;
      E !== (C === 0) && (s = As(), bt(s), Gt(!1), k = !0);
    }
    for (var V = /* @__PURE__ */ new Set(), I = (
      /** @type {Batch} */
      st
    ), L = null, A = Fh(), D = 0; D < C; D += 1) {
      Pe && Le.nodeType === Pr && /** @type {Comment} */
      Le.data === iu && (s = /** @type {Comment} */
      Le, k = !0, Gt(!1));
      var _ = y[D], N = r(_, D), $ = w ? null : a.get(N);
      $ ? (d && Io($.v, _), h ? Io(
        /** @type {Value<number>} */
        $.i,
        D
      ) : $.i = D, A && I.skipped_effects.delete($.e)) : ($ = x1(
        w ? s : null,
        L,
        _,
        N,
        D,
        o,
        e,
        n
      ), w && ($.o = !0, L === null ? l = $ : L.next = $, L = $), a.set(N, $)), V.add(N);
    }
    if (C === 0 && i && !v)
      if (w)
        v = {
          fragment: null,
          effect: fn(() => i(s))
        };
      else {
        var O = document.createDocumentFragment(), z = Qt();
        O.append(z), v = {
          fragment: O,
          effect: fn(() => i(z))
        };
      }
    if (Pe && C > 0 && bt(As()), !w)
      if (A) {
        for (const [j, q] of a)
          V.has(j) || I.skipped_effects.add(q.e);
        I.oncommit(b), I.ondiscard(() => {
        });
      } else
        b();
    k && Gt(!0), c(m);
  }), P = { effect: x, items: a, first: l };
  w = !1, Pe && (s = Le);
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
      Pn(t, d, w), Pn(t, w, x), Ba(w, x, n), d = w, f = [], v = [], l = d.next;
      continue;
    }
    if ((w.e.f & gn) !== 0 && (mu(w.e), i && (w.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(w))), w !== l) {
      if (u !== void 0 && u.has(w)) {
        if (f.length < v.length) {
          var P = v[0], C;
          d = P.prev;
          var k = f[0], E = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            Ba(f[C], P, n);
          for (C = 0; C < v.length; C += 1)
            u.delete(v[C]);
          Pn(t, k.prev, E.next), Pn(t, d, k), Pn(t, E, P), l = P, d = E, b -= 1, f = [], v = [];
        } else
          u.delete(w), Ba(w, l, n), Pn(t, w.prev, w.next), Pn(t, w, d === null ? t.first : d.next), Pn(t, d, w), d = w;
        continue;
      }
      for (f = [], v = []; l !== null && l.k !== y; )
        (l.e.f & gn) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), v.push(l), l = l.next;
      if (l === null)
        continue;
      w = l;
    }
    f.push(w), d = w, l = w.next;
  }
  let V = a.size > s;
  if (l !== null || u !== void 0) {
    for (var I = u === void 0 ? [] : su(u); l !== null; )
      (l.e.f & gn) === 0 && I.push(l), l = l.next;
    var L = I.length;
    if (V = a.size - L > s, L > 0) {
      var A = (r & vh) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < L; b += 1)
          I[b].a?.measure();
        for (b = 0; b < L; b += 1)
          I[b].a?.fix();
      }
      w1(t, I, A);
    }
  }
  if (V)
    for (const D of a.values())
      D.o || (Pn(t, d, D), d = D);
  t.effect.last = d && d.e, i && Zr(() => {
    if (h !== void 0)
      for (w of h)
        w.a?.apply();
  });
}
function x1(t, e, n, r, o, i, s, a) {
  var l = (s & ph) !== 0, u = (s & Dm) === 0, d = l ? u ? /* @__PURE__ */ Lh(n, !1, !1) : br(n) : n, h = (s & gh) === 0 ? o : br(o), f = {
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
      v.append(t = Qt());
    }
    return f.e = fn(() => i(
      /** @type {Node} */
      t,
      d,
      h,
      a
    )), e !== null && (e.next = f), f;
  } finally {
  }
}
function Ba(t, e, n) {
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
      /* @__PURE__ */ mn(i)
    );
    o.before(i), i = s;
  }
}
function Pn(t, e, n) {
  e === null ? (t.first = n, t.effect.first = n && n.e) : (e.e.next && (e.e.next.prev = null), e.next = n, e.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = e, n.e.prev = e && e.e);
}
function Dh(t, e, n, r) {
  const o = qo() ? Vi : fu;
  if (n.length === 0 && t.length === 0) {
    r(e.map(o));
    return;
  }
  var i = st, s = (
    /** @type {Effect} */
    Ge
  ), a = k1();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ C1(u))).then((u) => {
      a();
      try {
        r([...e.map(o), ...u]);
      } catch (d) {
        (s.f & vr) === 0 && Vo(d, s);
      }
      i?.deactivate(), Ds();
    }).catch((u) => {
      Vo(u, s);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), Ds();
    }
  }) : l();
}
function k1() {
  var t = Ge, e = nt, n = gt, r = st;
  return function(o = !0) {
    $n(t), on(e), Do(n), o && r?.activate();
  };
}
function Ds() {
  $n(null), on(null), Do(null);
}
// @__NO_SIDE_EFFECTS__
function Vi(t) {
  var e = jt | ln, n = nt !== null && (nt.f & jt) !== 0 ? (
    /** @type {Derived} */
    nt
  ) : null;
  return Ge !== null && (Ge.f |= vo), {
    ctx: gt,
    deps: null,
    effects: null,
    equals: Ph,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Lt
    ),
    wv: 0,
    parent: n ?? Ge,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function C1(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ge
  );
  n === null && Ym();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = br(
    /** @type {V} */
    Lt
  ), s = !nt, a = /* @__PURE__ */ new Map();
  return T1(() => {
    var l = Ch();
    o = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        u === st && u.committed && u.deactivate(), Ds();
      });
    } catch (f) {
      l.reject(f), Ds();
    }
    var u = (
      /** @type {Batch} */
      st
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(Eo), a.delete(u), a.set(u, l);
    }
    const h = (f, v = void 0) => {
      if (u.activate(), v)
        v !== Eo && (i.f |= Dr, Io(i, v));
      else {
        (i.f & Dr) !== 0 && (i.f ^= Dr), Io(i, f);
        for (const [m, y] of a) {
          if (a.delete(m), m === u) break;
          y.reject(Eo);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(h, (f) => h(null, f || "unknown"));
  }), Sa(() => {
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
function S(t) {
  const e = /* @__PURE__ */ Vi(t);
  return rf(e), e;
}
// @__NO_SIDE_EFFECTS__
function fu(t) {
  const e = /* @__PURE__ */ Vi(t);
  return e.equals = Eh, e;
}
function Vh(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ht(
        /** @type {Effect} */
        e[n]
      );
  }
}
function $1(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & jt) === 0)
      return (e.f & vr) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function pu(t) {
  var e, n = Ge;
  $n($1(t));
  try {
    t.f &= ~wi, Vh(t), e = lf(t);
  } finally {
    $n(n);
  }
  return e;
}
function Ih(t) {
  var e = pu(t);
  if (t.equals(e) || (st?.is_fork || (t.v = e), t.wv = sf()), !bo)
    if (kn !== null)
      (bi() || st?.is_fork) && kn.set(t, e);
    else {
      var n = (t.f & Mn) === 0 ? _r : Zt;
      Wt(t, n);
    }
}
let hl = /* @__PURE__ */ new Set();
const Vr = /* @__PURE__ */ new Map();
let Hh = !1;
function br(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ph,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function we(t, e) {
  const n = br(t);
  return rf(n), n;
}
// @__NO_SIDE_EFFECTS__
function Lh(t, e = !1, n = !0) {
  const r = br(t);
  return e || (r.equals = Eh), Xo && n && gt !== null && gt.l !== null && (gt.l.s ??= []).push(r), r;
}
function F(t, e, n = !1) {
  nt !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Wn || (nt.f & Pc) !== 0) && qo() && (nt.f & (jt | $r | uu | Pc)) !== 0 && !mr?.includes(t) && o1();
  let r = n ? $t(e) : e;
  return Io(t, r);
}
function Io(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    bo ? Vr.set(t, e) : Vr.set(t, n), t.v = e;
    var r = Nn.ensure();
    r.capture(t, n), (t.f & jt) !== 0 && ((t.f & ln) !== 0 && pu(
      /** @type {Derived} */
      t
    ), Wt(t, (t.f & Mn) !== 0 ? Zt : _r)), t.wv = sf(), Rh(t, ln), qo() && Ge !== null && (Ge.f & Zt) !== 0 && (Ge.f & (Sr | Fr)) === 0 && (bn === null ? M1([t]) : bn.push(t)), !r.is_fork && hl.size > 0 && !Hh && S1();
  }
  return e;
}
function S1() {
  Hh = !1;
  var t = Ir;
  Vs(!0);
  const e = Array.from(hl);
  try {
    for (const n of e)
      (n.f & Zt) !== 0 && Wt(n, _r), Ii(n) && ki(n);
  } finally {
    Vs(t);
  }
  hl.clear();
}
function Ec(t, e = 1) {
  var n = c(t), r = e === 1 ? n++ : n--;
  return F(t, n), r;
}
function Fn(t) {
  F(t, t.v + 1);
}
function Rh(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = qo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Ge)) {
        var l = (a & ln) === 0;
        if (l && Wt(s, e), (a & jt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          kn?.delete(u), (a & wi) === 0 && (a & Mn && (s.f |= wi), Rh(u, _r));
        } else l && ((a & $r) !== 0 && lr !== null && lr.add(
          /** @type {Effect} */
          s
        ), uo(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function $t(t) {
  if (typeof t != "object" || t === null || Yn in t)
    return t;
  const e = ma(t);
  if (e !== kh && e !== Zm)
    return t;
  var n = /* @__PURE__ */ new Map(), r = va(t), o = /* @__PURE__ */ we(0), i = yr, s = (a) => {
    if (yr === i)
      return a();
    var l = nt, u = yr;
    on(null), Mc(i);
    var d = a();
    return on(l), Mc(u), d;
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
            const d = s(() => /* @__PURE__ */ we(Lt));
            n.set(l, d), Fn(o);
          }
        } else
          F(u, Lt), Fn(o);
        return !0;
      },
      get(a, l, u) {
        if (l === Yn)
          return t;
        var d = n.get(l), h = l in a;
        if (d === void 0 && (!h || gr(a, l)?.writable) && (d = s(() => {
          var v = $t(h ? a[l] : Lt), m = /* @__PURE__ */ we(v);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === Lt ? void 0 : f;
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
          if (h !== void 0 && f !== Lt)
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
        if (l === Yn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Lt || Reflect.has(a, l);
        if (u !== void 0 || Ge !== null && (!d || gr(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? $t(a[l]) : Lt, v = /* @__PURE__ */ we(f);
            return v;
          }), n.set(l, u));
          var h = c(u);
          if (h === Lt)
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
            m !== void 0 ? F(m, Lt) : v in a && (m = s(() => /* @__PURE__ */ we(Lt)), n.set(v + "", m));
          }
        if (h === void 0)
          (!f || gr(a, l)?.writable) && (h = s(() => /* @__PURE__ */ we(void 0)), F(h, $t(u)), n.set(l, h));
        else {
          f = h.v !== Lt;
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
          Fn(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Lt;
        });
        for (var [u, d] of n)
          d.v !== Lt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        r1();
      }
    }
  );
}
function Nc(t) {
  try {
    if (t !== null && typeof t == "object" && Yn in t)
      return t[Yn];
  } catch {
  }
  return t;
}
function _1(t, e) {
  return Object.is(Nc(t), Nc(e));
}
var nn, jh, Bh, Kh;
function fl() {
  if (nn === void 0) {
    nn = window, jh = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Bh = gr(e, "firstChild").get, Kh = gr(e, "nextSibling").get, _c(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), _c(n) && (n.__t = void 0);
  }
}
function Qt(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Nt(t) {
  return Bh.call(t);
}
// @__NO_SIDE_EFFECTS__
function mn(t) {
  return Kh.call(t);
}
function Y(t, e) {
  if (!Pe)
    return /* @__PURE__ */ Nt(t);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Nt(Le)
  );
  if (n === null)
    n = Le.appendChild(Qt());
  else if (e && n.nodeType !== xa) {
    var r = Qt();
    return n?.before(r), bt(r), r;
  }
  return bt(n), n;
}
function ee(t, e = !1) {
  if (!Pe) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Nt(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ mn(n) : n;
  }
  if (e && Le?.nodeType !== xa) {
    var r = Qt();
    return Le?.before(r), bt(r), r;
  }
  return Le;
}
function R(t, e = 1, n = !1) {
  let r = Pe ? Le : t;
  for (var o; e--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ mn(r);
  if (!Pe)
    return r;
  if (n && r?.nodeType !== xa) {
    var i = Qt();
    return r === null ? o?.after(i) : r.before(i), bt(i), i;
  }
  return bt(r), /** @type {TemplateNode} */
  r;
}
function gu(t) {
  t.textContent = "";
}
function Fh() {
  return !1;
}
function P1(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Zr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function O1(t) {
  Pe && /* @__PURE__ */ Nt(t) !== null && gu(t);
}
let Tc = !1;
function Zh() {
  Tc || (Tc = !0, document.addEventListener(
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
function $a(t) {
  var e = nt, n = Ge;
  on(null), $n(null);
  try {
    return t();
  } finally {
    on(e), $n(n);
  }
}
function Wh(t, e, n, r = n) {
  t.addEventListener(e, () => $a(n));
  const o = t.__on_r;
  o ? t.__on_r = () => {
    o(), r(!0);
  } : t.__on_r = () => r(!0), Zh();
}
function Xh(t) {
  Ge === null && (nt === null && Jm(), Gm()), bo && Um();
}
function E1(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Sn(t, e, n) {
  var r = Ge;
  r !== null && (r.f & gn) !== 0 && (t |= gn);
  var o = {
    ctx: gt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | ln | Mn,
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
      ki(o), o.f |= ba;
    } catch (a) {
      throw Ht(o), a;
    }
  else e !== null && uo(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & vo) === 0 && (i = i.first, (t & $r) !== 0 && (t & wr) !== 0 && i !== null && (i.f |= wr)), i !== null && (i.parent = r, r !== null && E1(i, r), nt !== null && (nt.f & jt) !== 0 && (t & Fr) === 0)) {
    var s = (
      /** @type {Derived} */
      nt
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function bi() {
  return nt !== null && !Wn;
}
function Sa(t) {
  const e = Sn(ya, null, !1);
  return Wt(e, Zt), e.teardown = t, e;
}
function Fe(t) {
  Xh();
  var e = (
    /** @type {Effect} */
    Ge.f
  ), n = !nt && (e & Sr) !== 0 && (e & ba) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      gt
    );
    (r.e ??= []).push(t);
  } else
    return qh(t);
}
function qh(t) {
  return Sn(au | Sh, t, !1);
}
function rn(t) {
  return Xh(), Sn(ya | Sh, t, !0);
}
function yo(t) {
  Nn.ensure();
  const e = Sn(Fr | vo, t, !0);
  return () => {
    Ht(e);
  };
}
function N1(t) {
  Nn.ensure();
  const e = Sn(Fr | vo, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? To(e, () => {
      Ht(e), r(void 0);
    }) : (Ht(e), r(void 0));
  });
}
function Yo(t) {
  return Sn(au, t, !1);
}
function T1(t) {
  return Sn(uu | vo, t, !0);
}
function wo(t, e = 0) {
  return Sn(ya | e, t, !0);
}
function ze(t, e = [], n = [], r = []) {
  Dh(r, e, n, (o) => {
    Sn(ya, () => t(...o.map(c)), !0);
  });
}
function Wr(t, e = 0) {
  var n = Sn($r | e, t, !0);
  return n;
}
function Yh(t, e = 0) {
  var n = Sn($h | e, t, !0);
  return n;
}
function fn(t) {
  return Sn(Sr | vo, t, !0);
}
function Uh(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = bo, r = nt;
    zc(!0), on(null);
    try {
      e.call(null);
    } finally {
      zc(n), on(r);
    }
  }
}
function Gh(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && $a(() => {
      o.abort(Eo);
    });
    var r = n.next;
    (n.f & Fr) !== 0 ? n.parent = null : Ht(n, e), n = r;
  }
}
function z1(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & Sr) === 0 && Ht(e), e = n;
  }
}
function Ht(t, e = !0) {
  var n = !1;
  (e || (t.f & lu) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (Jh(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Gh(t, e && !n), Is(t, 0), Wt(t, vr);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Uh(t);
  var o = t.parent;
  o !== null && o.first !== null && Qh(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Jh(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mn(t)
    );
    t.remove(), t = n;
  }
}
function Qh(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function To(t, e, n = !0) {
  var r = [];
  vu(t, r, !0), ef(r, () => {
    n && Ht(t), e && e();
  });
}
function ef(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function vu(t, e, n) {
  if ((t.f & gn) === 0) {
    if (t.f ^= gn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var o = r.next, i = (r.f & wr) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Sr) !== 0 && (t.f & $r) !== 0;
      vu(r, e, i ? n : !1), r = o;
    }
  }
}
function mu(t) {
  tf(t, !0);
}
function tf(t, e) {
  if ((t.f & gn) !== 0) {
    t.f ^= gn, (t.f & Zt) === 0 && (Wt(t, ln), uo(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & wr) !== 0 || (n.f & Sr) !== 0;
      tf(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
function nf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ mn(n)
    );
    e.append(n), n = o;
  }
}
let Ir = !1;
function Vs(t) {
  Ir = t;
}
let bo = !1;
function zc(t) {
  bo = t;
}
let nt = null, Wn = !1;
function on(t) {
  nt = t;
}
let Ge = null;
function $n(t) {
  Ge = t;
}
let mr = null;
function rf(t) {
  nt !== null && (mr === null ? mr = [t] : mr.push(t));
}
let Ut = null, hn = 0, bn = null;
function M1(t) {
  bn = t;
}
let of = 1, xi = 0, yr = xi;
function Mc(t) {
  yr = t;
}
function sf() {
  return ++of;
}
function Ii(t) {
  var e = t.f;
  if ((e & ln) !== 0)
    return !0;
  if (e & jt && (t.f &= -32769), (e & _r) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Ii(
          /** @type {Derived} */
          i
        ) && Ih(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
      }
    (e & Mn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    kn === null && Wt(t, Zt);
  }
  return !1;
}
function af(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !mr?.includes(t))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & jt) !== 0 ? af(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? Wt(i, ln) : (i.f & Zt) !== 0 && Wt(i, _r), uo(
        /** @type {Effect} */
        i
      ));
    }
}
function lf(t) {
  var e = Ut, n = hn, r = bn, o = nt, i = mr, s = gt, a = Wn, l = yr, u = t.f;
  Ut = /** @type {null | Value[]} */
  null, hn = 0, bn = null, nt = (u & (Sr | Fr)) === 0 ? t : null, mr = null, Do(t.ctx), Wn = !1, yr = ++xi, t.ac !== null && ($a(() => {
    t.ac.abort(Eo);
  }), t.ac = null);
  try {
    t.f |= cl;
    var d = (
      /** @type {Function} */
      t.fn
    ), h = d(), f = t.deps;
    if (Ut !== null) {
      var v;
      if (Is(t, hn), f !== null && hn > 0)
        for (f.length = hn + Ut.length, v = 0; v < Ut.length; v++)
          f[hn + v] = Ut[v];
      else
        t.deps = f = Ut;
      if (Ir && bi() && (t.f & Mn) !== 0)
        for (v = hn; v < f.length; v++)
          (f[v].reactions ??= []).push(t);
    } else f !== null && hn < f.length && (Is(t, hn), f.length = hn);
    if (qo() && bn !== null && !Wn && f !== null && (t.f & (jt | _r | ln)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      bn.length; v++)
        af(
          bn[v],
          /** @type {Effect} */
          t
        );
    return o !== null && o !== t && (xi++, bn !== null && (r === null ? r = bn : r.push(.../** @type {Source[]} */
    bn))), (t.f & Dr) !== 0 && (t.f ^= Dr), h;
  } catch (m) {
    return Th(m);
  } finally {
    t.f ^= cl, Ut = e, hn = n, bn = r, nt = o, mr = i, Do(s), Wn = a, yr = l;
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
  (Ut === null || !Ut.includes(e)) && (Wt(e, _r), (e.f & Mn) !== 0 && (e.f ^= Mn, e.f &= -32769), Vh(
    /** @type {Derived} **/
    e
  ), Is(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Is(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      A1(t, n[r]);
}
function ki(t) {
  var e = t.f;
  if ((e & vr) === 0) {
    Wt(t, Zt);
    var n = Ge, r = Ir;
    Ge = t, Ir = !0;
    try {
      (e & ($r | $h)) !== 0 ? z1(t) : Gh(t), Uh(t);
      var o = lf(t);
      t.teardown = typeof o == "function" ? o : null, t.wv = of;
      var i;
      Km && l1 && (t.f & ln) !== 0 && t.deps;
    } finally {
      Ir = r, Ge = n;
    }
  }
}
async function uf() {
  await Promise.resolve(), p();
}
function c(t) {
  var e = t.f, n = (e & jt) !== 0;
  if (nt !== null && !Wn) {
    var r = Ge !== null && (Ge.f & vr) !== 0;
    if (!r && !mr?.includes(t)) {
      var o = nt.deps;
      if ((nt.f & cl) !== 0)
        t.rv < xi && (t.rv = xi, Ut === null && o !== null && o[hn] === t ? hn++ : Ut === null ? Ut = [t] : Ut.includes(t) || Ut.push(t));
      else {
        (nt.deps ??= []).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [nt] : i.includes(nt) || i.push(nt);
      }
    }
  }
  if (bo) {
    if (Vr.has(t))
      return Vr.get(t);
    if (n) {
      var s = (
        /** @type {Derived} */
        t
      ), a = s.v;
      return ((s.f & Zt) === 0 && s.reactions !== null || df(s)) && (a = pu(s)), Vr.set(s, a), a;
    }
  } else n && (!kn?.has(t) || st?.is_fork && !bi()) && (s = /** @type {Derived} */
  t, Ii(s) && Ih(s), Ir && bi() && (s.f & Mn) === 0 && cf(s));
  if (kn?.has(t))
    return kn.get(t);
  if ((t.f & Dr) !== 0)
    throw t.v;
  return t.v;
}
function cf(t) {
  if (t.deps !== null) {
    t.f ^= Mn;
    for (const e of t.deps)
      (e.reactions ??= []).push(t), (e.f & jt) !== 0 && (e.f & Mn) === 0 && cf(
        /** @type {Derived} */
        e
      );
  }
}
function df(t) {
  if (t.v === Lt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Vr.has(e) || (e.f & jt) !== 0 && df(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function yt(t) {
  var e = Wn;
  try {
    return Wn = !0, t();
  } finally {
    Wn = e;
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
function yu(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Yn in t)
      pl(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Yn in n && pl(n);
      }
  }
}
function pl(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        pl(t[r], e);
      } catch {
      }
    const n = ma(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = xh(n);
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
const hf = /* @__PURE__ */ new Set(), gl = /* @__PURE__ */ new Set();
function wu(t, e, n, r = {}) {
  function o(i) {
    if (r.capture || li.call(e, i), !i.cancelBubble)
      return $a(() => n?.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Zr(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function St(t, e, n, r = {}) {
  var o = wu(e, t, n, r);
  return () => {
    t.removeEventListener(e, o, r);
  };
}
function Hs(t, e, n, r, o) {
  var i = { capture: r, passive: o }, s = wu(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Sa(() => {
    e.removeEventListener(t, s, i);
  });
}
function xo(t) {
  for (var e = 0; e < t.length; e++)
    hf.add(t[e]);
  for (var n of gl)
    n(t);
}
let Ac = null;
function li(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, o = t.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  Ac = t;
  var s = 0, a = Ac === t && t.__root;
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
    Ms(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = nt, h = Ge;
    on(null), $n(null);
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
      t.__root = e, delete t.currentTarget, on(d), $n(h);
    }
  }
}
function bu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function an(t, e) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function re(t, e) {
  var n = (e & yh) !== 0, r = (e & Rm) !== 0, o, i = !t.startsWith("<!>");
  return () => {
    if (Pe)
      return an(Le, null), Le;
    o === void 0 && (o = bu(i ? t : "<!>" + t), n || (o = /** @type {Node} */
    /* @__PURE__ */ Nt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || jh ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      an(a, l);
    } else
      an(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function I1(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), o = (e & yh) !== 0, i = `<${n}>${r ? t : "<!>" + t}</${n}>`, s;
  return () => {
    if (Pe)
      return an(Le, null), Le;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        bu(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Nt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Nt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Nt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Nt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      an(d, h);
    } else
      an(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function _e(t, e) {
  return /* @__PURE__ */ I1(t, e, "svg");
}
function He(t = "") {
  if (!Pe) {
    var e = Qt(t + "");
    return an(e, e), e;
  }
  var n = Le;
  return n.nodeType !== xa && (n.before(n = Qt()), bt(n)), an(n, n), n;
}
function fe() {
  if (Pe)
    return an(Le, null), Le;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Qt();
  return t.append(e, n), an(e, n), t;
}
function M(t, e) {
  if (Pe) {
    var n = (
      /** @type {Effect} */
      Ge
    );
    ((n.f & ba) === 0 || n.nodes_end === null) && (n.nodes_end = Le), An();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Hi() {
  if (Pe && Le && Le.nodeType === Pr && Le.textContent?.startsWith("$")) {
    const t = Le.textContent.substring(1);
    return An(), t;
  }
  return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function H1(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const L1 = [
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
  return L1.includes(t);
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
function xu(t, e) {
  return ff(t, e);
}
function X1(t, e) {
  fl(), e.intro = e.intro ?? !1;
  const n = e.target, r = Pe, o = Le;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Nt(n)
    ); i && (i.nodeType !== Pr || /** @type {Comment} */
    i.data !== wh); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ mn(i);
    if (!i)
      throw ao;
    Gt(!0), bt(
      /** @type {Comment} */
      i
    );
    const s = ff(t, { ...e, anchor: i });
    return Gt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== ao && console.warn("Failed to hydrate: ", s), e.recover === !1 && e1(), fl(), gu(n), Gt(!1), xu(t, e);
  } finally {
    Gt(r), bt(o);
  }
}
const _o = /* @__PURE__ */ new Map();
function ff(t, { target: e, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  fl();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!a.has(v)) {
        a.add(v);
        var m = F1(v);
        e.addEventListener(v, li, { passive: m });
        var y = _o.get(v);
        y === void 0 ? (document.addEventListener(v, li, { passive: m }), _o.set(v, 1)) : _o.set(v, y + 1);
      }
    }
  };
  l(su(hf)), gl.add(l);
  var u = void 0, d = N1(() => {
    var h = n ?? e.appendChild(Qt());
    return m1(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          le({});
          var v = (
            /** @type {ComponentContext} */
            gt
          );
          v.c = i;
        }
        if (o && (r.$$events = o), Pe && an(
          /** @type {TemplateNode} */
          f,
          null
        ), u = t(f, r) || {}, Pe && (Ge.nodes_end = Le, Le === null || Le.nodeType !== Pr || /** @type {Comment} */
        Le.data !== iu))
          throw Di(), ao;
        i && ue();
      }
    ), () => {
      for (var f of a) {
        e.removeEventListener(f, li);
        var v = (
          /** @type {number} */
          _o.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, li), _o.delete(f)) : _o.set(f, v);
      }
      gl.delete(l), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return vl.set(u, d), u;
}
let vl = /* @__PURE__ */ new WeakMap();
function pf(t, e) {
  const n = vl.get(t);
  return n ? (vl.delete(t), n(e)) : Promise.resolve();
}
class Li {
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
      st
    );
    if (this.#e.has(e)) {
      var n = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(n);
      if (r)
        mu(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === e)
          break;
        const a = this.#n.get(s);
        a && (Ht(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            nf(s, l), l.append(Qt()), this.#n.set(i, { effect: s, fragment: l });
          } else
            Ht(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#o || !r ? (this.#r.add(i), To(s, a, !1)) : a();
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
      n.includes(r) || (Ht(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      st
    ), o = Fh();
    n && !this.#t.has(e) && !this.#n.has(e) && this.#t.set(
      e,
      fn(() => n(this.anchor))
    ), this.#e.set(r, e), o || (Pe && (this.anchor = Le), this.#i());
  }
}
function Te(t, e, ...n) {
  var r = new Li(t);
  Wr(() => {
    const o = e() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, wr);
}
function Hn(t) {
  gt === null && du(), Xo && gt.l !== null ? q1(gt).m.push(t) : Fe(() => {
    const e = yt(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ri(t) {
  gt === null && du(), Hn(() => () => yt(t));
}
function q1(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ??= { a: [], b: [], m: [] };
}
function Y1() {
  return Symbol(bh);
}
function ae(t, e, n = !1) {
  Pe && An();
  var r = new Li(t), o = n ? wr : 0;
  function i(s, a) {
    if (Pe) {
      const u = _h(t) === ga;
      if (s === u) {
        var l = As();
        bt(l), r.anchor = l, Gt(!1), r.ensure(s, a), Gt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  Wr(() => {
    var s = !1;
    e((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function U1(t, e, n) {
  Pe && An();
  var r = new Li(t), o = !qo();
  Wr(() => {
    var i = e();
    o && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), r.ensure(i, n);
  });
}
function G1(t, e) {
  Pe && bt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Nt(t)
  ), wo(() => {
    var n = e();
    for (var r in n) {
      var o = n[r];
      o ? t.style.setProperty(r, o) : t.style.removeProperty(r);
    }
  });
}
function _a(t, e, n = !1, r = !1, o = !1) {
  var i = t, s = "";
  ze(() => {
    var a = (
      /** @type {Effect} */
      Ge
    );
    if (s === (s = e() ?? "")) {
      Pe && An();
      return;
    }
    if (a.nodes_start !== null && (Jh(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Pe) {
        Le.data;
        for (var l = An(), u = l; l !== null && (l.nodeType !== Pr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ mn(l);
        if (l === null)
          throw Di(), ao;
        an(Le, u), i = bt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var h = bu(d);
      if ((n || r) && (h = /** @type {Element} */
      /* @__PURE__ */ Nt(h)), an(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Nt(h); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ Nt(h)
          );
      else
        i.before(h);
    }
  });
}
function It(t, e, n) {
  Pe && An();
  var r = new Li(t);
  Wr(() => {
    var o = e() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, wr);
}
function gf(t, e, n, r, o, i) {
  let s = Pe;
  Pe && An();
  var a = null;
  Pe && Le.nodeType === qm && (a = /** @type {Element} */
  Le, An());
  var l = (
    /** @type {TemplateNode} */
    Pe ? Le : t
  ), u = new Li(l, !1);
  Wr(() => {
    const d = e() || null;
    var h = n || d === "svg" ? Bm : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = Pe ? (
          /** @type {Element} */
          a
        ) : h ? document.createElementNS(h, d) : document.createElement(d), an(a, a), r) {
          Pe && W1(d) && a.append(document.createComment(""));
          var v = (
            /** @type {TemplateNode} */
            Pe ? /* @__PURE__ */ Nt(a) : a.appendChild(Qt())
          );
          Pe && (v === null ? Gt(!1) : bt(v)), r(a, v);
        }
        Ge.nodes_end = a, f.before(a);
      }
      Pe && bt(f);
    }), () => {
    };
  }, wr), Sa(() => {
  }), s && (Gt(!0), bt(l));
}
function J1(t, e) {
  let n = null, r = Pe;
  var o;
  if (Pe) {
    n = Le;
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Nt(document.head)
    ); i !== null && (i.nodeType !== Pr || /** @type {Comment} */
    i.data !== t); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ mn(i);
    if (i === null)
      Gt(!1);
    else {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ mn(i)
      );
      i.remove(), bt(s);
    }
  }
  Pe || (o = document.head.appendChild(Qt()));
  try {
    Wr(() => e(o), lu);
  } finally {
    r && (Gt(!0), bt(
      /** @type {TemplateNode} */
      n
    ));
  }
}
function it(t, e) {
  Yo(() => {
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
  Yo(() => {
    var r = yt(() => e(t, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      wo(() => {
        var s = n();
        yu(s), o && Oh(i, s) && (i = s, r.update(s));
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
  Yh(() => {
    n !== (n = e()) && (r && (Ht(r), r = null), n && (r = fn(() => {
      Yo(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function vf(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = vf(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function vi() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = vf(t)) && (r && (r += " "), r += e);
  return r;
}
function Or(t) {
  return typeof t == "object" ? vi(t) : t ?? "";
}
const Dc = [...` 	
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
          (s === 0 || Dc.includes(r[s - 1])) && (a === r.length || Dc.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Vc(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var o in t) {
    var i = t[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function Ka(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function t0(t, e) {
  if (e) {
    var n = "", r, o;
    if (Array.isArray(e) ? (r = e[0], o = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(Ka)), o && l.push(...Object.keys(o).map(Ka));
      var u = 0, d = -1;
      const y = t.length;
      for (var h = 0; h < y; h++) {
        var f = t[h];
        if (a ? f === "/" && t[h - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && t[h + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === y - 1) {
            if (d !== -1) {
              var v = Ka(t.substring(u, d).trim());
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
    return r && (n += Vc(r)), o && (n += Vc(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function un(t, e, n, r, o, i) {
  var s = t.__className;
  if (Pe || s !== n || s === void 0) {
    var a = e0(n, r, i);
    (!Pe || a !== t.getAttribute("class")) && (a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a)), t.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && t.classList.toggle(l, u);
    }
  return i;
}
function Fa(t, e = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    e[o] !== i && (n[o] == null ? t.style.removeProperty(o) : t.style.setProperty(o, i, r));
  }
}
function Bt(t, e, n, r) {
  var o = t.__style;
  if (Pe || o !== e) {
    var i = t0(e, r);
    (!Pe || i !== t.getAttribute("style")) && (i == null ? t.removeAttribute("style") : t.style.cssText = i), t.__style = e;
  } else r && (Array.isArray(r) ? (Fa(t, n?.[0], r[0]), Fa(t, n?.[1], r[1], "important")) : Fa(t, n, r));
  return r;
}
function ml(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!va(e))
      return s1();
    for (var r of t.options)
      r.selected = e.includes(Ic(r));
    return;
  }
  for (r of t.options) {
    var o = Ic(r);
    if (_1(o, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function n0(t) {
  var e = new MutationObserver(() => {
    ml(t, t.__value);
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
  }), Sa(() => {
    e.disconnect();
  });
}
function Ic(t) {
  return "__value" in t ? t.__value : t.value;
}
const Mr = Symbol("class"), Zn = Symbol("style"), mf = Symbol("is custom element"), yf = Symbol("is html");
function Hr(t) {
  if (Pe) {
    var e = !1, n = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var r = t.value;
          Ne(t, "value", null), t.value = r;
        }
        if (t.hasAttribute("checked")) {
          var o = t.checked;
          Ne(t, "checked", null), t.checked = o;
        }
      }
    };
    t.__on_r = n, Zr(n), Zh();
  }
}
function xs(t, e) {
  var n = Pa(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Za(t, e) {
  var n = Pa(t);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (t.checked = e);
}
function r0(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ne(t, e, n, r) {
  var o = Pa(t);
  Pe && (o[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || o[e] !== (o[e] = n) && (e === "loading" && (t[Xm] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && wf(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function o0(t, e, n, r, o = !1, i = !1) {
  if (Pe && o && t.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      t
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || Hr(s);
  }
  var l = Pa(t), u = l[mf], d = !l[yf];
  let h = Pe && u;
  h && Gt(!1);
  var f = e || {}, v = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = Or(n.class) : (r || n[Mr]) && (n.class = null), n[Zn] && (n.style ??= null);
  var y = wf(t);
  for (const E in n) {
    let V = n[E];
    if (v && E === "value" && V == null) {
      t.value = t.__value = "", f[E] = V;
      continue;
    }
    if (E === "class") {
      var w = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      un(t, w, V, r, e?.[Mr], n[Mr]), f[E] = V, f[Mr] = n[Mr];
      continue;
    }
    if (E === "style") {
      Bt(t, V, e?.[Zn], n[Zn]), f[E] = V, f[Zn] = n[Zn];
      continue;
    }
    var b = f[E];
    if (!(V === b && !(V === void 0 && t.hasAttribute(E)))) {
      f[E] = V;
      var x = E[0] + E[1];
      if (x !== "$$")
        if (x === "on") {
          const I = {}, L = "$$" + E;
          let A = E.slice(2);
          var P = R1(A);
          if (H1(A) && (A = A.slice(0, -7), I.capture = !0), !P && b) {
            if (V != null) continue;
            t.removeEventListener(A, f[L], I), f[L] = null;
          }
          if (V != null)
            if (P)
              t[`__${A}`] = V, xo([A]);
            else {
              let D = function(_) {
                f[E].call(this, _);
              };
              f[L] = wu(A, t, D, I);
            }
          else P && (t[`__${A}`] = void 0);
        } else if (E === "style")
          Ne(t, E, V);
        else if (E === "autofocus")
          P1(
            /** @type {HTMLElement} */
            t,
            !!V
          );
        else if (!u && (E === "__value" || E === "value" && V != null))
          t.value = t.__value = V;
        else if (E === "selected" && v)
          r0(
            /** @type {HTMLOptionElement} */
            t,
            V
          );
        else {
          var C = E;
          d || (C = B1(C));
          var k = C === "defaultValue" || C === "defaultChecked";
          if (V == null && !u && !k)
            if (l[E] = null, C === "value" || C === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                t
              );
              const L = e === void 0;
              if (C === "value") {
                let A = I.defaultValue;
                I.removeAttribute(C), I.defaultValue = A, I.value = I.__value = L ? A : null;
              } else {
                let A = I.defaultChecked;
                I.removeAttribute(C), I.defaultChecked = A, I.checked = L ? A : !1;
              }
            } else
              t.removeAttribute(E);
          else k || y.includes(C) && (u || typeof V != "string") ? (t[C] = V, C in l && (l[C] = Lt)) : typeof V != "function" && Ne(t, C, V);
        }
    }
  }
  return h && Gt(!0), f;
}
function ot(t, e, n = [], r = [], o = [], i, s = !1, a = !1) {
  Dh(o, n, r, (l) => {
    var u = void 0, d = {}, h = t.nodeName === "SELECT", f = !1;
    if (Yh(() => {
      var m = e(...l.map(c)), y = o0(
        t,
        u,
        m,
        i,
        s,
        a
      );
      f && h && "value" in m && ml(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || Ht(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var w = m[b];
        b.description === bh && (!u || w !== u[b]) && (d[b] && Ht(d[b]), d[b] = fn(() => Q1(t, () => w))), y[b] = w;
      }
      u = y;
    }), h) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Yo(() => {
        ml(
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
function Pa(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [mf]: t.nodeName.includes("-"),
      [yf]: t.namespaceURI === jm
    }
  );
}
var Hc = /* @__PURE__ */ new Map();
function wf(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Hc.get(e);
  if (n) return n;
  Hc.set(e, n = []);
  for (var r, o = t, i = Element.prototype; i !== o; ) {
    r = xh(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = ma(o);
  }
  return n;
}
function Ls(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Wh(t, "input", async (o) => {
    var i = o ? t.defaultValue : t.value;
    if (i = Wa(t) ? Xa(i) : i, n(i), st !== null && r.add(st), await uf(), i !== (i = e())) {
      var s = t.selectionStart, a = t.selectionEnd, l = t.value.length;
      if (t.value = i ?? "", a !== null) {
        var u = t.value.length;
        s === a && a === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (Pe && t.defaultValue !== t.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  yt(e) == null && t.value) && (n(Wa(t) ? Xa(t.value) : t.value), st !== null && r.add(st)), wo(() => {
    var o = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        bs ?? st
      );
      if (r.has(i))
        return;
    }
    Wa(t) && o === Xa(t.value) || t.type === "date" && !o && !t.value || o !== t.value && (t.value = o ?? "");
  });
}
function Wa(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Xa(t) {
  return t === "" ? null : +t;
}
function i0(t, e, n = e) {
  Wh(t, "change", () => {
    n(t.files);
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  Pe && t.files && n(t.files), wo(() => {
    t.files = e();
  });
}
class ku {
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
          ku.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var s0 = /* @__PURE__ */ new ku({
  box: "border-box"
});
function Lc(t, e, n) {
  var r = s0.observe(t, () => n(t[e]));
  Yo(() => (yt(() => n(t[e])), r));
}
function Rc(t, e) {
  return t === e || t?.[Yn] === e;
}
function Kt(t = {}, e, n, r) {
  return Yo(() => {
    var o, i;
    return wo(() => {
      o = i, i = [], yt(() => {
        t !== n(...i) && (e(t, ...i), o && Rc(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Zr(() => {
        i && Rc(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Cu(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    gt
  ), n = e.l.u;
  if (!n) return;
  let r = () => yu(e.s);
  if (t) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Vi(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && rn(() => {
    jc(e, r), ul(n.b);
  }), Fe(() => {
    const o = yt(() => n.m.map(Wm));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && Fe(() => {
    jc(e, r), ul(n.a);
  });
}
function jc(t, e) {
  if (t.l.s)
    for (const n of t.l.s) c(n);
  e();
}
let os = !1;
function a0(t) {
  var e = os;
  try {
    return os = !1, [t(), os];
  } finally {
    os = e;
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
      var r = Ge;
      try {
        $n(t.parent_effect), t.special[e] = g(
          {
            get [e]() {
              return t.props[e];
            }
          },
          /** @type {string} */
          e,
          mh
        );
      } finally {
        $n(r);
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
function Bc(t, e) {
  return new Proxy(
    {
      props: t,
      exclude: e,
      special: {},
      version: br(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ge
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
      if (ni(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let o = t.props[r];
      ni(o) && (o = o());
      const i = gr(o, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ni(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const o = gr(r, e);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(t, e) {
    if (e === Yn || e === cu) return !1;
    for (let n of t.props)
      if (ni(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ni(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Ze(...t) {
  return new Proxy({ props: t }, c0);
}
function g(t, e, n, r) {
  var o = !Xo || (n & Im) !== 0, i = (n & Hm) !== 0, s = (n & Lm) !== 0, a = (
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
    var h = Yn in t || cu in t;
    d = gr(t, e)?.set ?? (h && e in t ? (P) => t[e] = P : void 0);
  }
  var f, v = !1;
  i ? [f, v] = a0(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (o && t1(), d(f)));
  var m;
  if (o ? m = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P === void 0 ? u() : (l = !0, P);
  } : m = () => {
    var P = (
      /** @type {V} */
      t[e]
    );
    return P !== void 0 && (a = /** @type {V} */
    void 0), P === void 0 ? a : P;
  }, o && (n & mh) === 0)
    return m;
  if (d) {
    var y = t.$$legacy;
    return (
      /** @type {() => V} */
      function(P, C) {
        return arguments.length > 0 ? ((!o || !C || y || v) && d(C ? m() : P), P) : m();
      }
    );
  }
  var w = !1, b = ((n & Vm) !== 0 ? Vi : fu)(() => (w = !1, m()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Ge
  );
  return (
    /** @type {() => V} */
    function(P, C) {
      if (arguments.length > 0) {
        const k = C ? c(b) : o && i ? $t(P) : P;
        return F(b, k), w = !0, a !== void 0 && (a = k), P;
      }
      return bo && w || (x.f & vr) !== 0 ? b.v : c(b);
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
      var a = /* @__PURE__ */ Lh(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === cu ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return F(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (e.hydrate ? X1 : xu)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    }), (!e?.props?.$$host || e.sync === !1) && p(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || Ms(this, i, {
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
      pf(this.#t);
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
let bf;
typeof HTMLElement == "function" && (bf = class extends HTMLElement {
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
          r !== "default" && (i.name = r), M(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, n = f0(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), e.default = !0) : e[r] = t(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ks(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = yo(() => {
        wo(() => {
          this.$$r = !0;
          for (const r of zs(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ks(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ks(t, n, this.$$p_d, "toProp"), this.$$c?.$set({ [t]: this.$$d[t] }));
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
    return zs(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function ks(t, e, n, r) {
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
  let s = class extends bf {
    constructor() {
      super(t, n, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return zs(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return zs(e).forEach((a) => {
    Ms(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ks(a, l, e), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = gr(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Ms(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), t.element = /** @type {any} */
  s, s;
}
var p0 = { value: () => {
} };
function Oa() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Cs(n);
}
function Cs(t) {
  this._ = t;
}
function g0(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Cs.prototype = Oa.prototype = {
  constructor: Cs,
  on: function(t, e) {
    var n = this._, r = g0(t + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (t = r[i]).type) && (o = v0(n[o], t.name))) return o;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (o = (t = r[i]).type) n[o] = Kc(n[o], t.name, e);
      else if (e == null) for (o in n) n[o] = Kc(n[o], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Cs(t);
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
function Kc(t, e, n) {
  for (var r = 0, o = t.length; r < o; ++r)
    if (t[r].name === e) {
      t[r] = p0, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var yl = "http://www.w3.org/1999/xhtml";
const Fc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: yl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ea(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Fc.hasOwnProperty(e) ? { space: Fc[e], local: t } : t;
}
function m0(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === yl && e.documentElement.namespaceURI === yl ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function y0(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function xf(t) {
  var e = Ea(t);
  return (e.local ? y0 : m0)(e);
}
function w0() {
}
function $u(t) {
  return t == null ? w0 : function() {
    return this.querySelector(t);
  };
}
function b0(t) {
  typeof t != "function" && (t = $u(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = t.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new yn(r, this._parents);
}
function x0(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function k0() {
  return [];
}
function kf(t) {
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
  typeof t == "function" ? t = C0(t) : t = kf(t);
  for (var e = this._groups, n = e.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = e[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(t.call(l, l.__data__, u, s)), o.push(l));
  return new yn(r, o);
}
function Cf(t) {
  return function() {
    return this.matches(t);
  };
}
function $f(t) {
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
function P0() {
  return this.firstElementChild;
}
function O0(t) {
  return this.select(t == null ? P0 : _0(typeof t == "function" ? t : $f(t)));
}
var E0 = Array.prototype.filter;
function N0() {
  return Array.from(this.children);
}
function T0(t) {
  return function() {
    return E0.call(this.children, t);
  };
}
function z0(t) {
  return this.selectAll(t == null ? N0 : T0(typeof t == "function" ? t : $f(t)));
}
function M0(t) {
  typeof t != "function" && (t = Cf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new yn(r, this._parents);
}
function Sf(t) {
  return new Array(t.length);
}
function A0() {
  return new yn(this._enter || this._groups.map(Sf), this._parents);
}
function Rs(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Rs.prototype = {
  constructor: Rs,
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
    (a = e[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Rs(t, i[s]);
  for (; s < l; ++s)
    (a = e[s]) && (o[s] = a);
}
function I0(t, e, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = e.length, h = i.length, f = new Array(d), v;
  for (a = 0; a < d; ++a)
    (l = e[a]) && (f[a] = v = s.call(l, l.__data__, a, e) + "", u.has(v) ? o[a] = l : u.set(v, l));
  for (a = 0; a < h; ++a)
    v = s.call(t, i[a], a, i) + "", (l = u.get(v)) ? (r[a] = l, l.__data__ = i[a], u.delete(v)) : n[a] = new Rs(t, i[a]);
  for (a = 0; a < d; ++a)
    (l = e[a]) && u.get(f[a]) === l && (o[a] = l);
}
function H0(t) {
  return t.__data__;
}
function L0(t, e) {
  if (!arguments.length) return Array.from(this, H0);
  var n = e ? I0 : V0, r = this._parents, o = this._groups;
  typeof t != "function" && (t = D0(t));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], h = o[u], f = h.length, v = R0(t.call(d, d && d.__data__, u, r)), m = v.length, y = a[u] = new Array(m), w = s[u] = new Array(m), b = l[u] = new Array(f);
    n(d, h, y, w, b, v, e);
    for (var x = 0, P = 0, C, k; x < m; ++x)
      if (C = y[x]) {
        for (x >= P && (P = x + 1); !(k = w[P]) && ++P < m; ) ;
        C._next = k || null;
      }
  }
  return s = new yn(s, r), s._enter = a, s._exit = l, s;
}
function R0(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function j0() {
  return new yn(this._exit || this._groups.map(Sf), this._parents);
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
  return new yn(a, this._parents);
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
  return new yn(o, this._parents).order();
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
function U0() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function G0() {
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
  var n = Ea(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ey : Q0 : typeof e == "function" ? n.local ? oy : ry : n.local ? ny : ty)(n, e));
}
function _f(t) {
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
  return arguments.length > 1 ? this.each((e == null ? sy : typeof e == "function" ? ly : ay)(t, e, n ?? "")) : Ho(this.node(), t);
}
function Ho(t, e) {
  return t.style.getPropertyValue(e) || _f(t).getComputedStyle(t, null).getPropertyValue(e);
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
function Pf(t) {
  return t.trim().split(/^|\s+/);
}
function Su(t) {
  return t.classList || new Of(t);
}
function Of(t) {
  this._node = t, this._names = Pf(t.getAttribute("class") || "");
}
Of.prototype = {
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
  for (var n = Su(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
}
function Nf(t, e) {
  for (var n = Su(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
}
function py(t) {
  return function() {
    Ef(this, t);
  };
}
function gy(t) {
  return function() {
    Nf(this, t);
  };
}
function vy(t, e) {
  return function() {
    (e.apply(this, arguments) ? Ef : Nf)(this, t);
  };
}
function my(t, e) {
  var n = Pf(t + "");
  if (arguments.length < 2) {
    for (var r = Su(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
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
function Py() {
  return this.each(_y);
}
function Oy() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ey() {
  return this.each(Oy);
}
function Ny(t) {
  var e = typeof t == "function" ? t : xf(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ty() {
  return null;
}
function zy(t, e) {
  var n = typeof t == "function" ? t : xf(t), r = e == null ? Ty : typeof e == "function" ? e : $u(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function My() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ay() {
  return this.each(My);
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
function Hy(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ly(t) {
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
    var r = this.__on, o, i = Ly(e);
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
function Tf(t, e, n) {
  var r = _f(t), o = r.CustomEvent;
  typeof o == "function" ? o = new o(e, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(e, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(e, !1, !1)), t.dispatchEvent(o);
}
function Fy(t, e) {
  return function() {
    return Tf(this, t, e);
  };
}
function Zy(t, e) {
  return function() {
    return Tf(this, t, e.apply(this, arguments));
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
var zf = [null];
function yn(t, e) {
  this._groups = t, this._parents = e;
}
function ji() {
  return new yn([[document.documentElement]], zf);
}
function qy() {
  return this;
}
yn.prototype = ji.prototype = {
  constructor: yn,
  select: b0,
  selectAll: $0,
  selectChild: O0,
  selectChildren: z0,
  filter: M0,
  data: L0,
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
  size: U0,
  empty: G0,
  each: J0,
  attr: iy,
  style: uy,
  property: fy,
  classed: my,
  text: xy,
  html: Sy,
  raise: Py,
  lower: Ey,
  append: Ny,
  insert: zy,
  remove: Ay,
  clone: Iy,
  datum: Hy,
  on: Ky,
  dispatch: Wy,
  [Symbol.iterator]: Xy
};
function Cn(t) {
  return typeof t == "string" ? new yn([[document.querySelector(t)]], [document.documentElement]) : new yn([[t]], zf);
}
function Yy(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function On(t, e) {
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
const Uy = { passive: !1 }, Ci = { capture: !0, passive: !1 };
function qa(t) {
  t.stopImmediatePropagation();
}
function zo(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Mf(t) {
  var e = t.document.documentElement, n = Cn(t).on("dragstart.drag", zo, Ci);
  "onselectstart" in e ? n.on("selectstart.drag", zo, Ci) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Af(t, e) {
  var n = t.document.documentElement, r = Cn(t).on("dragstart.drag", null);
  e && (r.on("click.drag", zo, Ci), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const is = (t) => () => t;
function wl(t, {
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
wl.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Gy(t) {
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
  var t = Gy, e = Jy, n = Qy, r = ew, o = {}, i = Oa("start", "drag", "end"), s = 0, a, l, u, d, h = 0;
  function f(C) {
    C.on("mousedown.drag", v).filter(r).on("touchstart.drag", w).on("touchmove.drag", b, Uy).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(C, k) {
    if (!(d || !t.call(this, C, k))) {
      var E = P(this, e.call(this, C, k), C, k, "mouse");
      E && (Cn(C.view).on("mousemove.drag", m, Ci).on("mouseup.drag", y, Ci), Mf(C.view), qa(C), u = !1, a = C.clientX, l = C.clientY, E("start", C));
    }
  }
  function m(C) {
    if (zo(C), !u) {
      var k = C.clientX - a, E = C.clientY - l;
      u = k * k + E * E > h;
    }
    o.mouse("drag", C);
  }
  function y(C) {
    Cn(C.view).on("mousemove.drag mouseup.drag", null), Af(C.view, u), zo(C), o.mouse("end", C);
  }
  function w(C, k) {
    if (t.call(this, C, k)) {
      var E = C.changedTouches, V = e.call(this, C, k), I = E.length, L, A;
      for (L = 0; L < I; ++L)
        (A = P(this, V, C, k, E[L].identifier, E[L])) && (qa(C), A("start", C, E[L]));
    }
  }
  function b(C) {
    var k = C.changedTouches, E = k.length, V, I;
    for (V = 0; V < E; ++V)
      (I = o[k[V].identifier]) && (zo(C), I("drag", C, k[V]));
  }
  function x(C) {
    var k = C.changedTouches, E = k.length, V, I;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < E; ++V)
      (I = o[k[V].identifier]) && (qa(C), I("end", C, k[V]));
  }
  function P(C, k, E, V, I, L) {
    var A = i.copy(), D = On(L || E, k), _, N, $;
    if (($ = n.call(C, new wl("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: I,
      active: s,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), V)) != null)
      return _ = $.x - D[0] || 0, N = $.y - D[1] || 0, function O(z, j, q) {
        var G = D, T;
        switch (z) {
          case "start":
            o[I] = O, T = s++;
            break;
          case "end":
            delete o[I], --s;
          // falls through
          case "drag":
            D = On(q || j, k), T = s;
            break;
        }
        A.call(
          z,
          C,
          new wl(z, {
            sourceEvent: j,
            subject: $,
            target: f,
            identifier: I,
            active: T,
            x: D[0] + _,
            y: D[1] + N,
            dx: D[0] - G[0],
            dy: D[1] - G[1],
            dispatch: A
          }),
          V
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : is(!!C), f) : t;
  }, f.container = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : is(C), f) : e;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : is(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : is(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (h = (C = +C) * C, f) : Math.sqrt(h);
  }, f;
}
function _u(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Df(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Bi() {
}
var $i = 0.7, js = 1 / $i, Mo = "\\s*([+-]?\\d+)\\s*", Si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", nw = /^#([0-9a-f]{3,8})$/, rw = new RegExp(`^rgb\\(${Mo},${Mo},${Mo}\\)$`), ow = new RegExp(`^rgb\\(${Un},${Un},${Un}\\)$`), iw = new RegExp(`^rgba\\(${Mo},${Mo},${Mo},${Si}\\)$`), sw = new RegExp(`^rgba\\(${Un},${Un},${Un},${Si}\\)$`), aw = new RegExp(`^hsl\\(${Si},${Un},${Un}\\)$`), lw = new RegExp(`^hsla\\(${Si},${Un},${Un},${Si}\\)$`), Zc = {
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
_u(Bi, ho, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wc,
  // Deprecated! Use color.formatHex.
  formatHex: Wc,
  formatHex8: uw,
  formatHsl: cw,
  formatRgb: Xc,
  toString: Xc
});
function Wc() {
  return this.rgb().formatHex();
}
function uw() {
  return this.rgb().formatHex8();
}
function cw() {
  return Vf(this).formatHsl();
}
function Xc() {
  return this.rgb().formatRgb();
}
function ho(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = nw.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? qc(e) : n === 3 ? new sn(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ss(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ss(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = rw.exec(t)) ? new sn(e[1], e[2], e[3], 1) : (e = ow.exec(t)) ? new sn(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = iw.exec(t)) ? ss(e[1], e[2], e[3], e[4]) : (e = sw.exec(t)) ? ss(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = aw.exec(t)) ? Gc(e[1], e[2] / 100, e[3] / 100, 1) : (e = lw.exec(t)) ? Gc(e[1], e[2] / 100, e[3] / 100, e[4]) : Zc.hasOwnProperty(t) ? qc(Zc[t]) : t === "transparent" ? new sn(NaN, NaN, NaN, 0) : null;
}
function qc(t) {
  return new sn(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ss(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new sn(t, e, n, r);
}
function dw(t) {
  return t instanceof Bi || (t = ho(t)), t ? (t = t.rgb(), new sn(t.r, t.g, t.b, t.opacity)) : new sn();
}
function bl(t, e, n, r) {
  return arguments.length === 1 ? dw(t) : new sn(t, e, n, r ?? 1);
}
function sn(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
_u(sn, bl, Df(Bi, {
  brighter(t) {
    return t = t == null ? js : Math.pow(js, t), new sn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? $i : Math.pow($i, t), new sn(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new sn(io(this.r), io(this.g), io(this.b), Bs(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yc,
  // Deprecated! Use color.formatHex.
  formatHex: Yc,
  formatHex8: hw,
  formatRgb: Uc,
  toString: Uc
}));
function Yc() {
  return `#${to(this.r)}${to(this.g)}${to(this.b)}`;
}
function hw() {
  return `#${to(this.r)}${to(this.g)}${to(this.b)}${to((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Uc() {
  const t = Bs(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${io(this.r)}, ${io(this.g)}, ${io(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Bs(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function io(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function to(t) {
  return t = io(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Gc(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new En(t, e, n, r);
}
function Vf(t) {
  if (t instanceof En) return new En(t.h, t.s, t.l, t.opacity);
  if (t instanceof Bi || (t = ho(t)), !t) return new En();
  if (t instanceof En) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, o = Math.min(e, n, r), i = Math.max(e, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (e === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - e) / a + 2 : s = (e - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new En(s, a, l, t.opacity);
}
function fw(t, e, n, r) {
  return arguments.length === 1 ? Vf(t) : new En(t, e, n, r ?? 1);
}
function En(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
_u(En, fw, Df(Bi, {
  brighter(t) {
    return t = t == null ? js : Math.pow(js, t), new En(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? $i : Math.pow($i, t), new En(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, o = 2 * n - r;
    return new sn(
      Ya(t >= 240 ? t - 240 : t + 120, o, r),
      Ya(t, o, r),
      Ya(t < 120 ? t + 240 : t - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new En(Jc(this.h), as(this.s), as(this.l), Bs(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Bs(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Jc(this.h)}, ${as(this.s) * 100}%, ${as(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Jc(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function as(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ya(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Pu = (t) => () => t;
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
  return (t = +t) == 1 ? If : function(e, n) {
    return n - e ? gw(e, n, t) : Pu(isNaN(e) ? n : e);
  };
}
function If(t, e) {
  var n = e - t;
  return n ? pw(t, n) : Pu(isNaN(t) ? e : t);
}
const Ks = function t(e) {
  var n = vw(e);
  function r(o, i) {
    var s = n((o = bl(o)).r, (i = bl(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = If(o.opacity, i.opacity);
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
  for (s = 0; s < r; ++s) o[s] = mi(t[s], e[s]);
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
function Kn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function xw(t, e) {
  var n = {}, r = {}, o;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (o in e)
    o in t ? n[o] = mi(t[o], e[o]) : r[o] = e[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var xl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ua = new RegExp(xl.source, "g");
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
function Hf(t, e) {
  var n = xl.lastIndex = Ua.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (t = t + "", e = e + ""; (r = xl.exec(t)) && (o = Ua.exec(e)); )
    (i = o.index) > n && (i = e.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Kn(r, o) })), n = Ua.lastIndex;
  return n < e.length && (i = e.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Cw(l[0].x) : kw(e) : (e = l.length, function(u) {
    for (var d = 0, h; d < e; ++d) a[(h = l[d]).i] = h.x(u);
    return a.join("");
  });
}
function mi(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Pu(e) : (n === "number" ? Kn : n === "string" ? (r = ho(e)) ? (e = r, Ks) : Hf : e instanceof ho ? Ks : e instanceof Date ? bw : yw(e) ? mw : Array.isArray(e) ? ww : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? xw : Kn)(t, e);
}
var Qc = 180 / Math.PI, Lf = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Rf(t, e, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (l = t * n + e * r) && (n -= t * l, r -= e * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), t * r < e * n && (t = -t, e = -e, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(e, t) * Qc,
    skewX: Math.atan(l) * Qc,
    scaleX: s,
    scaleY: a
  };
}
var ls;
function $w(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Lf : Rf(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Sw(t) {
  return t == null || (ls || (ls = document.createElementNS("http://www.w3.org/2000/svg", "g")), ls.setAttribute("transform", t), !(t = ls.transform.baseVal.consolidate())) ? Lf : (t = t.matrix, Rf(t.a, t.b, t.c, t.d, t.e, t.f));
}
function jf(t, e, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push("translate(", null, e, null, n);
      m.push({ i: y - 4, x: Kn(u, h) }, { i: y - 2, x: Kn(d, f) });
    } else (h || f) && v.push("translate(" + h + e + f + n);
  }
  function s(u, d, h, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: h.push(o(h) + "rotate(", null, r) - 2, x: Kn(u, d) })) : d && h.push(o(h) + "rotate(" + d + r);
  }
  function a(u, d, h, f) {
    u !== d ? f.push({ i: h.push(o(h) + "skewX(", null, r) - 2, x: Kn(u, d) }) : d && h.push(o(h) + "skewX(" + d + r);
  }
  function l(u, d, h, f, v, m) {
    if (u !== h || d !== f) {
      var y = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: y - 4, x: Kn(u, h) }, { i: y - 2, x: Kn(d, f) });
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
var _w = jf($w, "px, ", "px)", "deg)"), Pw = jf(Sw, ", ", ")", ")"), Ow = 1e-12;
function ed(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Ew(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Nw(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const $s = function t(e, n, r) {
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
      var x = Math.sqrt(y), P = (f * f - u * u + r * y) / (2 * u * n * x), C = (f * f - u * u - r * y) / (2 * f * n * x), k = Math.log(Math.sqrt(P * P + 1) - P), E = Math.log(Math.sqrt(C * C + 1) - C);
      b = (E - k) / e, w = function(V) {
        var I = V * b, L = ed(k), A = u / (n * x) * (L * Nw(e * I + k) - Ew(k));
        return [
          a + A * v,
          l + A * m,
          u * L / ed(e * I + k)
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
var Lo = 0, ui = 0, ri = 0, Bf = 1e3, Fs, ci, Zs = 0, fo = 0, Na = 0, _i = typeof performance == "object" && performance.now ? performance : Date, Kf = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ou() {
  return fo || (Kf(Tw), fo = _i.now() + Na);
}
function Tw() {
  fo = 0;
}
function Ws() {
  this._call = this._time = this._next = null;
}
Ws.prototype = Ff.prototype = {
  constructor: Ws,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ou() : +n) + (e == null ? 0 : +e), !this._next && ci !== this && (ci ? ci._next = this : Fs = this, ci = this), this._call = t, this._time = n, kl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, kl());
  }
};
function Ff(t, e, n) {
  var r = new Ws();
  return r.restart(t, e, n), r;
}
function zw() {
  Ou(), ++Lo;
  for (var t = Fs, e; t; )
    (e = fo - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Lo;
}
function td() {
  fo = (Zs = _i.now()) + Na, Lo = ui = 0;
  try {
    zw();
  } finally {
    Lo = 0, Aw(), fo = 0;
  }
}
function Mw() {
  var t = _i.now(), e = t - Zs;
  e > Bf && (Na -= e, Zs = t);
}
function Aw() {
  for (var t, e = Fs, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Fs = n);
  ci = t, kl(r);
}
function kl(t) {
  if (!Lo) {
    ui && (ui = clearTimeout(ui));
    var e = t - fo;
    e > 24 ? (t < 1 / 0 && (ui = setTimeout(td, t - _i.now() - Na)), ri && (ri = clearInterval(ri))) : (ri || (Zs = _i.now(), ri = setInterval(Mw, Bf)), Lo = 1, Kf(td));
  }
}
function nd(t, e, n) {
  var r = new Ws();
  return e = e == null ? 0 : +e, r.restart((o) => {
    r.stop(), t(o + e);
  }, e, n), r;
}
var Dw = Oa("start", "end", "cancel", "interrupt"), Vw = [], Zf = 0, rd = 1, Cl = 2, Ss = 3, od = 4, $l = 5, _s = 6;
function Ta(t, e, n, r, o, i) {
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
    state: Zf
  });
}
function Eu(t, e) {
  var n = Ln(t, e);
  if (n.state > Zf) throw new Error("too late; already scheduled");
  return n;
}
function rr(t, e) {
  var n = Ln(t, e);
  if (n.state > Ss) throw new Error("too late; already running");
  return n;
}
function Ln(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Iw(t, e, n) {
  var r = t.__transition, o;
  r[e] = n, n.timer = Ff(i, 0, n.time);
  function i(u) {
    n.state = rd, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, h, f, v;
    if (n.state !== rd) return l();
    for (d in r)
      if (v = r[d], v.name === n.name) {
        if (v.state === Ss) return nd(s);
        v.state === od ? (v.state = _s, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete r[d]) : +d < e && (v.state = _s, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete r[d]);
      }
    if (nd(function() {
      n.state === Ss && (n.state = od, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Cl, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Cl) {
      for (n.state = Ss, o = new Array(f = n.tween.length), d = 0, h = -1; d < f; ++d)
        (v = n.tween[d].value.call(t, t.__data__, n.index, n.group)) && (o[++h] = v);
      o.length = h + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = $l, 1), h = -1, f = o.length; ++h < f; )
      o[h].call(t, d);
    n.state === $l && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = _s, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Ps(t, e) {
  var n = t.__transition, r, o, i = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((r = n[s]).name !== e) {
        i = !1;
        continue;
      }
      o = r.state > Cl && r.state < $l, r.state = _s, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[s];
    }
    i && delete t.__transition;
  }
}
function Hw(t) {
  return this.each(function() {
    Ps(this, t);
  });
}
function Lw(t, e) {
  var n, r;
  return function() {
    var o = rr(this, t), i = o.tween;
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
    var i = rr(this, t), s = i.tween;
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
    for (var r = Ln(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Lw : Rw)(n, t, e));
}
function Nu(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var o = rr(this, r);
    (o.value || (o.value = {}))[e] = n.apply(this, arguments);
  }), function(o) {
    return Ln(o, r).value[e];
  };
}
function Wf(t, e) {
  var n;
  return (typeof e == "number" ? Kn : e instanceof ho ? Ks : (n = ho(e)) ? (e = n, Ks) : Hf)(t, e);
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
  var n = Ea(t), r = n === "transform" ? Pw : Wf;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Xw : Ww)(n, r, Nu(this, "attr." + t, e)) : e == null ? (n.local ? Kw : Bw)(n) : (n.local ? Zw : Fw)(n, r, e));
}
function Yw(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Uw(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Gw(t, e) {
  var n, r;
  function o() {
    var i = e.apply(this, arguments);
    return i !== r && (n = (r = i) && Uw(t, i)), n;
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
  var r = Ea(t);
  return this.tween(n, (r.local ? Gw : Jw)(r, e));
}
function eb(t, e) {
  return function() {
    Eu(this, t).delay = +e.apply(this, arguments);
  };
}
function tb(t, e) {
  return e = +e, function() {
    Eu(this, t).delay = e;
  };
}
function nb(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? eb : tb)(e, t)) : Ln(this.node(), e).delay;
}
function rb(t, e) {
  return function() {
    rr(this, t).duration = +e.apply(this, arguments);
  };
}
function ob(t, e) {
  return e = +e, function() {
    rr(this, t).duration = e;
  };
}
function ib(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? rb : ob)(e, t)) : Ln(this.node(), e).duration;
}
function sb(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    rr(this, t).ease = e;
  };
}
function ab(t) {
  var e = this._id;
  return arguments.length ? this.each(sb(e, t)) : Ln(this.node(), e).ease;
}
function lb(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    rr(this, t).ease = n;
  };
}
function ub(t) {
  if (typeof t != "function") throw new Error();
  return this.each(lb(this._id, t));
}
function cb(t) {
  typeof t != "function" && (t = Cf(t));
  for (var e = this._groups, n = e.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = e[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && t.call(l, l.__data__, u, i) && a.push(l);
  return new xr(r, this._parents, this._name, this._id);
}
function db(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = e[a], u = n[a], d = l.length, h = s[a] = new Array(d), f, v = 0; v < d; ++v)
      (f = l[v] || u[v]) && (h[v] = f);
  for (; a < r; ++a)
    s[a] = e[a];
  return new xr(s, this._parents, this._name, this._id);
}
function hb(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function fb(t, e, n) {
  var r, o, i = hb(e) ? Eu : rr;
  return function() {
    var s = i(this, t), a = s.on;
    a !== r && (o = (r = a).copy()).on(e, n), s.on = o;
  };
}
function pb(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Ln(this.node(), n).on.on(t) : this.each(fb(n, t, e));
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
  typeof t != "function" && (t = $u(t));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, h, f = 0; f < l; ++f)
      (d = a[f]) && (h = t.call(d, d.__data__, f, a)) && ("__data__" in d && (h.__data__ = d.__data__), u[f] = h, Ta(u[f], e, n, f, u, Ln(d, n)));
  return new xr(i, this._parents, e, n);
}
function yb(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = kf(t));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, h = 0; h < u; ++h)
      if (d = l[h]) {
        for (var f = t.call(d, d.__data__, h, l), v, m = Ln(d, n), y = 0, w = f.length; y < w; ++y)
          (v = f[y]) && Ta(v, e, n, y, f, m);
        i.push(f), s.push(d);
      }
  return new xr(i, s, e, n);
}
var wb = ji.prototype.constructor;
function bb() {
  return new wb(this._groups, this._parents);
}
function xb(t, e) {
  var n, r, o;
  return function() {
    var i = Ho(this, t), s = (this.style.removeProperty(t), Ho(this, t));
    return i === s ? null : i === n && s === r ? o : o = e(n = i, r = s);
  };
}
function Xf(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function kb(t, e, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ho(this, t);
    return s === o ? null : s === r ? i : i = e(r = s, n);
  };
}
function Cb(t, e, n) {
  var r, o, i;
  return function() {
    var s = Ho(this, t), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t), Ho(this, t))), s === l ? null : s === r && l === o ? i : (o = l, i = e(r = s, a));
  };
}
function $b(t, e) {
  var n, r, o, i = "style." + e, s = "end." + i, a;
  return function() {
    var l = rr(this, t), u = l.on, d = l.value[i] == null ? a || (a = Xf(e)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function Sb(t, e, n) {
  var r = (t += "") == "transform" ? _w : Wf;
  return e == null ? this.styleTween(t, xb(t, r)).on("end.style." + t, Xf(t)) : typeof e == "function" ? this.styleTween(t, Cb(t, r, Nu(this, "style." + t, e))).each($b(this._id, t)) : this.styleTween(t, kb(t, r, e), n).on("end.style." + t, null);
}
function _b(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Pb(t, e, n) {
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
  return this.tween(r, Pb(t, e, n ?? ""));
}
function Eb(t) {
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
function Tb(t) {
  return this.tween("text", typeof t == "function" ? Nb(Nu(this, "text", t)) : Eb(t == null ? "" : t + ""));
}
function zb(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Mb(t) {
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
  return this.tween(e, Mb(t));
}
function Db() {
  for (var t = this._name, e = this._id, n = qf(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Ln(l, e);
        Ta(l, t, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new xr(r, this._parents, t, n);
}
function Vb() {
  var t, e, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = rr(this, r), d = u.on;
      d !== t && (e = (t = d).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), u.on = e;
    }), o === 0 && i();
  });
}
var Ib = 0;
function xr(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function qf() {
  return ++Ib;
}
var sr = ji.prototype;
xr.prototype = {
  constructor: xr,
  select: mb,
  selectAll: yb,
  selectChild: sr.selectChild,
  selectChildren: sr.selectChildren,
  filter: cb,
  merge: db,
  selection: bb,
  transition: Db,
  call: sr.call,
  nodes: sr.nodes,
  node: sr.node,
  size: sr.size,
  empty: sr.empty,
  each: sr.each,
  on: pb,
  attr: qw,
  attrTween: Qw,
  style: Sb,
  styleTween: Ob,
  text: Tb,
  textTween: Ab,
  remove: vb,
  tween: jw,
  delay: nb,
  duration: ib,
  ease: ab,
  easeVarying: ub,
  end: Vb,
  [Symbol.iterator]: sr[Symbol.iterator]
};
function Hb(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Lb = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Hb
};
function Rb(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function jb(t) {
  var e, n;
  t instanceof xr ? (e = t._id, t = t._name) : (e = qf(), (n = Lb).time = Ou(), t = t == null ? null : t + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Ta(l, t, e, u, s, n || Rb(l, e));
  return new xr(r, this._parents, t, e);
}
ji.prototype.interrupt = Hw;
ji.prototype.transition = jb;
const us = (t) => () => t;
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
function dr(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
dr.prototype = {
  constructor: dr,
  scale: function(t) {
    return t === 1 ? this : new dr(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new dr(this.k, this.x + this.k * t, this.y + this.k * e);
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
var za = new dr(1, 0, 0);
Yf.prototype = dr.prototype;
function Yf(t) {
  for (; !t.__zoom; ) if (!(t = t.parentNode)) return za;
  return t.__zoom;
}
function Ga(t) {
  t.stopImmediatePropagation();
}
function oi(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Kb(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Fb() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function id() {
  return this.__zoom || za;
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
function Uf() {
  var t = Kb, e = Fb, n = Xb, r = Zb, o = Wb, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = $s, u = Oa("start", "zoom", "end"), d, h, f, v = 500, m = 150, y = 0, w = 10;
  function b($) {
    $.property("__zoom", id).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", N).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function($, O, z, j) {
    var q = $.selection ? $.selection() : $;
    q.property("__zoom", id), $ !== q ? k($, O, z, j) : q.interrupt().each(function() {
      E(this, arguments).event(j).start().zoom(null, typeof O == "function" ? O.apply(this, arguments) : O).end();
    });
  }, b.scaleBy = function($, O, z, j) {
    b.scaleTo($, function() {
      var q = this.__zoom.k, G = typeof O == "function" ? O.apply(this, arguments) : O;
      return q * G;
    }, z, j);
  }, b.scaleTo = function($, O, z, j) {
    b.transform($, function() {
      var q = e.apply(this, arguments), G = this.__zoom, T = z == null ? C(q) : typeof z == "function" ? z.apply(this, arguments) : z, U = G.invert(T), te = typeof O == "function" ? O.apply(this, arguments) : O;
      return n(P(x(G, te), T, U), q, s);
    }, z, j);
  }, b.translateBy = function($, O, z, j) {
    b.transform($, function() {
      return n(this.__zoom.translate(
        typeof O == "function" ? O.apply(this, arguments) : O,
        typeof z == "function" ? z.apply(this, arguments) : z
      ), e.apply(this, arguments), s);
    }, null, j);
  }, b.translateTo = function($, O, z, j, q) {
    b.transform($, function() {
      var G = e.apply(this, arguments), T = this.__zoom, U = j == null ? C(G) : typeof j == "function" ? j.apply(this, arguments) : j;
      return n(za.translate(U[0], U[1]).scale(T.k).translate(
        typeof O == "function" ? -O.apply(this, arguments) : -O,
        typeof z == "function" ? -z.apply(this, arguments) : -z
      ), G, s);
    }, j, q);
  };
  function x($, O) {
    return O = Math.max(i[0], Math.min(i[1], O)), O === $.k ? $ : new dr(O, $.x, $.y);
  }
  function P($, O, z) {
    var j = O[0] - z[0] * $.k, q = O[1] - z[1] * $.k;
    return j === $.x && q === $.y ? $ : new dr($.k, j, q);
  }
  function C($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function k($, O, z, j) {
    $.on("start.zoom", function() {
      E(this, arguments).event(j).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(j).end();
    }).tween("zoom", function() {
      var q = this, G = arguments, T = E(q, G).event(j), U = e.apply(q, G), te = z == null ? C(U) : typeof z == "function" ? z.apply(q, G) : z, B = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), Z = q.__zoom, W = typeof O == "function" ? O.apply(q, G) : O, J = l(Z.invert(te).concat(B / Z.k), W.invert(te).concat(B / W.k));
      return function(oe) {
        if (oe === 1) oe = W;
        else {
          var H = J(oe), ne = B / H[2];
          oe = new dr(ne, te[0] - H[0] * ne, te[1] - H[1] * ne);
        }
        T.zoom(null, oe);
      };
    });
  }
  function E($, O, z) {
    return !z && $.__zooming || new V($, O);
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
      var O = Cn(this.that).datum();
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
    var z = E(this, O).event($), j = this.__zoom, q = Math.max(i[0], Math.min(i[1], j.k * Math.pow(2, r.apply(this, arguments)))), G = On($);
    if (z.wheel)
      (z.mouse[0][0] !== G[0] || z.mouse[0][1] !== G[1]) && (z.mouse[1] = j.invert(z.mouse[0] = G)), clearTimeout(z.wheel);
    else {
      if (j.k === q) return;
      z.mouse = [G, j.invert(G)], Ps(this), z.start();
    }
    oi($), z.wheel = setTimeout(T, m), z.zoom("mouse", n(P(x(j, q), z.mouse[0], z.mouse[1]), z.extent, s));
    function T() {
      z.wheel = null, z.end();
    }
  }
  function L($, ...O) {
    if (f || !t.apply(this, arguments)) return;
    var z = $.currentTarget, j = E(this, O, !0).event($), q = Cn($.view).on("mousemove.zoom", te, !0).on("mouseup.zoom", B, !0), G = On($, z), T = $.clientX, U = $.clientY;
    Mf($.view), Ga($), j.mouse = [G, this.__zoom.invert(G)], Ps(this), j.start();
    function te(Z) {
      if (oi(Z), !j.moved) {
        var W = Z.clientX - T, J = Z.clientY - U;
        j.moved = W * W + J * J > y;
      }
      j.event(Z).zoom("mouse", n(P(j.that.__zoom, j.mouse[0] = On(Z, z), j.mouse[1]), j.extent, s));
    }
    function B(Z) {
      q.on("mousemove.zoom mouseup.zoom", null), Af(Z.view, j.moved), oi(Z), j.event(Z).end();
    }
  }
  function A($, ...O) {
    if (t.apply(this, arguments)) {
      var z = this.__zoom, j = On($.changedTouches ? $.changedTouches[0] : $, this), q = z.invert(j), G = z.k * ($.shiftKey ? 0.5 : 2), T = n(P(x(z, G), j, q), e.apply(this, O), s);
      oi($), a > 0 ? Cn(this).transition().duration(a).call(k, T, j, $) : Cn(this).call(b.transform, T, j, $);
    }
  }
  function D($, ...O) {
    if (t.apply(this, arguments)) {
      var z = $.touches, j = z.length, q = E(this, O, $.changedTouches.length === j).event($), G, T, U, te;
      for (Ga($), T = 0; T < j; ++T)
        U = z[T], te = On(U, this), te = [te, this.__zoom.invert(te), U.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== te[2] && (q.touch1 = te, q.taps = 0) : (q.touch0 = te, G = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), G && (q.taps < 2 && (h = te[0], d = setTimeout(function() {
        d = null;
      }, v)), Ps(this), q.start());
    }
  }
  function _($, ...O) {
    if (this.__zooming) {
      var z = E(this, O).event($), j = $.changedTouches, q = j.length, G, T, U, te;
      for (oi($), G = 0; G < q; ++G)
        T = j[G], U = On(T, this), z.touch0 && z.touch0[2] === T.identifier ? z.touch0[0] = U : z.touch1 && z.touch1[2] === T.identifier && (z.touch1[0] = U);
      if (T = z.that.__zoom, z.touch1) {
        var B = z.touch0[0], Z = z.touch0[1], W = z.touch1[0], J = z.touch1[1], oe = (oe = W[0] - B[0]) * oe + (oe = W[1] - B[1]) * oe, H = (H = J[0] - Z[0]) * H + (H = J[1] - Z[1]) * H;
        T = x(T, Math.sqrt(oe / H)), U = [(B[0] + W[0]) / 2, (B[1] + W[1]) / 2], te = [(Z[0] + J[0]) / 2, (Z[1] + J[1]) / 2];
      } else if (z.touch0) U = z.touch0[0], te = z.touch0[1];
      else return;
      z.zoom("touch", n(P(T, U, te), z.extent, s));
    }
  }
  function N($, ...O) {
    if (this.__zooming) {
      var z = E(this, O).event($), j = $.changedTouches, q = j.length, G, T;
      for (Ga($), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), G = 0; G < q; ++G)
        T = j[G], z.touch0 && z.touch0[2] === T.identifier ? delete z.touch0 : z.touch1 && z.touch1[2] === T.identifier && delete z.touch1;
      if (z.touch1 && !z.touch0 && (z.touch0 = z.touch1, delete z.touch1), z.touch0) z.touch0[1] = this.__zoom.invert(z.touch0[0]);
      else if (z.end(), z.taps === 2 && (T = On(T, this), Math.hypot(h[0] - T[0], h[1] - T[1]) < w)) {
        var U = Cn(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : us(+$), b) : r;
  }, b.filter = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : us(!!$), b) : t;
  }, b.touchable = function($) {
    return arguments.length ? (o = typeof $ == "function" ? $ : us(!!$), b) : o;
  }, b.extent = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : us([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), b) : e;
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
const Pi = {
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
}, Sl = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Gf = ["Enter", " ", "Escape"], qb = {
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
var Ro;
(function(t) {
  t.Strict = "strict", t.Loose = "loose";
})(Ro || (Ro = {}));
var so;
(function(t) {
  t.Free = "free", t.Vertical = "vertical", t.Horizontal = "horizontal";
})(so || (so = {}));
var Xs;
(function(t) {
  t.Partial = "partial", t.Full = "full";
})(Xs || (Xs = {}));
const _l = {
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
var cr;
(function(t) {
  t.Bezier = "default", t.Straight = "straight", t.Step = "step", t.SmoothStep = "smoothstep", t.SimpleBezier = "simplebezier";
})(cr || (cr = {}));
var Oi;
(function(t) {
  t.Arrow = "arrow", t.ArrowClosed = "arrowclosed";
})(Oi || (Oi = {}));
var Ee;
(function(t) {
  t.Left = "left", t.Top = "top", t.Right = "right", t.Bottom = "bottom";
})(Ee || (Ee = {}));
const sd = {
  [Ee.Left]: Ee.Right,
  [Ee.Right]: Ee.Left,
  [Ee.Top]: Ee.Bottom,
  [Ee.Bottom]: Ee.Top
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
function ad(t, e, n) {
  if (!n)
    return;
  const r = [];
  t.forEach((o, i) => {
    e?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Ub(t) {
  return t === null ? null : t ? "valid" : "invalid";
}
const Jf = (t) => "id" in t && "source" in t && "target" in t, Gb = (t) => "id" in t && "position" in t && !("source" in t) && !("target" in t), Tu = (t) => "id" in t && "internals" in t && !("source" in t) && !("target" in t), Ki = (t, e = [0, 0]) => {
  const { width: n, height: r } = Xr(t), o = t.origin ?? e, i = n * o[0], s = r * o[1];
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
    e.nodeLookup && (s = i ? e.nodeLookup.get(o) : Tu(o) ? o : e.nodeLookup.get(o.id));
    const a = s ? qs(s, e.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ma(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Aa(n);
}, Fi = (t, e = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return t.forEach((o) => {
    (e.filter === void 0 || e.filter(o)) && (n = Ma(n, qs(o)), r = !0);
  }), r ? Aa(n) : { x: 0, y: 0, width: 0, height: 0 };
}, zu = (t, e, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Wi(e, [n, r, o]),
    width: e.width / o,
    height: e.height / o
  }, l = [];
  for (const u of t.values()) {
    const { measured: d, selectable: h = !0, hidden: f = !1 } = u;
    if (s && !h || f)
      continue;
    const v = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, y = Ei(a, Bo(u)), w = (v ?? 0) * (m ?? 0), b = i && y > 0;
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
  const a = e2(t, s), l = Fi(a), u = Mu(l, e, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Qf({ nodeId: t, nextPosition: e, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(t), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let h = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Pi.error005());
    else {
      const v = a.measured.width, m = a.measured.height;
      v && m && (h = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else a && Ko(s.extent) && (h = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Ko(h) ? po(e, h, s.measured) : e;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Pi.error015()), {
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
const jo = (t, e = 0, n = 1) => Math.min(Math.max(t, e), n), po = (t = { x: 0, y: 0 }, e, n) => ({
  x: jo(t.x, e[0][0], e[1][0] - (n?.width ?? 0)),
  y: jo(t.y, e[0][1], e[1][1] - (n?.height ?? 0))
});
function ep(t, e, n) {
  const { width: r, height: o } = Xr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return po(t, [
    [i, s],
    [i + r, s + o]
  ], e);
}
const ld = (t, e, n) => t < e ? jo(Math.abs(t - e), 1, e) / e : t > n ? -jo(Math.abs(t - n), 1, e) / e : 0, tp = (t, e, n = 15, r = 40) => {
  const o = ld(t.x, r, e.width - r) * n, i = ld(t.y, r, e.height - r) * n;
  return [o, i];
}, Ma = (t, e) => ({
  x: Math.min(t.x, e.x),
  y: Math.min(t.y, e.y),
  x2: Math.max(t.x2, e.x2),
  y2: Math.max(t.y2, e.y2)
}), Pl = ({ x: t, y: e, width: n, height: r }) => ({
  x: t,
  y: e,
  x2: t + n,
  y2: e + r
}), Aa = ({ x: t, y: e, x2: n, y2: r }) => ({
  x: t,
  y: e,
  width: n - t,
  height: r - e
}), Bo = (t, e = [0, 0]) => {
  const { x: n, y: r } = Tu(t) ? t.internals.positionAbsolute : Ki(t, e);
  return {
    x: n,
    y: r,
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}, qs = (t, e = [0, 0]) => {
  const { x: n, y: r } = Tu(t) ? t.internals.positionAbsolute : Ki(t, e);
  return {
    x: n,
    y: r,
    x2: n + (t.measured?.width ?? t.width ?? t.initialWidth ?? 0),
    y2: r + (t.measured?.height ?? t.height ?? t.initialHeight ?? 0)
  };
}, np = (t, e) => Aa(Ma(Pl(t), Pl(e))), Ei = (t, e) => {
  const n = Math.max(0, Math.min(t.x + t.width, e.x + e.width) - Math.max(t.x, e.x)), r = Math.max(0, Math.min(t.y + t.height, e.y + e.height) - Math.max(t.y, e.y));
  return Math.ceil(n * r);
}, ud = (t) => hr(t.width) && hr(t.height) && hr(t.x) && hr(t.y), hr = (t) => !isNaN(t) && isFinite(t), r2 = (t, e) => {
}, Zi = (t, e = [1, 1]) => ({
  x: e[0] * Math.round(t.x / e[0]),
  y: e[1] * Math.round(t.y / e[1])
}), Wi = ({ x: t, y: e }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (t - n) / o,
    y: (e - r) / o
  };
  return i ? Zi(a, s) : a;
}, Ys = ({ x: t, y: e }, [n, r, o]) => ({
  x: t * o + n,
  y: e * o + r
});
function Po(t, e) {
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
    const r = Po(t, n), o = Po(t, e);
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
    const r = Po(t.top ?? t.y ?? 0, n), o = Po(t.bottom ?? t.y ?? 0, n), i = Po(t.left ?? t.x ?? 0, e), s = Po(t.right ?? t.x ?? 0, e);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function i2(t, e, n, r, o, i) {
  const { x: s, y: a } = Ys(t, [e, n, r]), { x: l, y: u } = Ys({ x: t.x + t.width, y: t.y + t.height }, [e, n, r]), d = o - l, h = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(h)
  };
}
const Mu = (t, e, n, r, o, i) => {
  const s = o2(i, e, n), a = (e - s.x) / t.width, l = (n - s.y) / t.height, u = Math.min(a, l), d = jo(u, r, o), h = t.x + t.width / 2, f = t.y + t.height / 2, v = e / 2 - h * d, m = n / 2 - f * d, y = i2(t, v, m, d, e, n), w = {
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
}, no = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ko(t) {
  return t != null && t !== "parent";
}
function Xr(t) {
  return {
    width: t.measured?.width ?? t.width ?? t.initialWidth ?? 0,
    height: t.measured?.height ?? t.height ?? t.initialHeight ?? 0
  };
}
function rp(t) {
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
function Ja(t, { snapGrid: e = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = Tn(t), a = Wi({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Zi(a, e) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const op = (t) => ({
  width: t.offsetWidth,
  height: t.offsetHeight
}), ip = (t) => t?.getRootNode?.() || window?.document, l2 = ["INPUT", "SELECT", "TEXTAREA"];
function sp(t) {
  const e = t.composedPath?.()?.[0] || t.target;
  return e?.nodeType !== 1 ? !1 : l2.includes(e.nodeName) || e.hasAttribute("contenteditable") || !!e.closest(".nokey");
}
const ap = (t) => "clientX" in t, Tn = (t, e) => {
  const n = ap(t), r = n ? t.clientX : t.touches?.[0].clientX, o = n ? t.clientY : t.touches?.[0].clientY;
  return {
    x: r - (e?.left ?? 0),
    y: o - (e?.top ?? 0)
  };
}, cd = (t, e, n, r, o) => {
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
      ...op(s)
    };
  });
};
function u2({ sourceX: t, sourceY: e, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = t * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = e * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - t), h = Math.abs(u - e);
  return [l, u, d, h];
}
function cs(t, e) {
  return t >= 0 ? 0.5 * t : e * 25 * Math.sqrt(-t);
}
function dd({ pos: t, x1: e, y1: n, x2: r, y2: o, c: i }) {
  switch (t) {
    case Ee.Left:
      return [e - cs(e - r, i), n];
    case Ee.Right:
      return [e + cs(r - e, i), n];
    case Ee.Top:
      return [e, n - cs(n - o, i)];
    case Ee.Bottom:
      return [e, n + cs(o - n, i)];
  }
}
function lp({ sourceX: t, sourceY: e, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, curvature: s = 0.25 }) {
  const [a, l] = dd({
    pos: n,
    x1: t,
    y1: e,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = dd({
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
function up({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
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
  const i = Ma(qs(t), qs(e));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Ei(s, Aa(i)) > 0;
}
const h2 = ({ source: t, sourceHandle: e, target: n, targetHandle: r }) => `xy-edge__${t}${e || ""}-${n}${r || ""}`, f2 = (t, e) => e.some((n) => n.source === t.source && n.target === t.target && (n.sourceHandle === t.sourceHandle || !n.sourceHandle && !t.sourceHandle) && (n.targetHandle === t.targetHandle || !n.targetHandle && !t.targetHandle)), p2 = (t, e) => {
  if (!t.source || !t.target)
    return e;
  let n;
  return Jf(t) ? n = { ...t } : n = {
    ...t,
    id: h2(t)
  }, f2(n, e) ? e : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, e.concat(n));
};
function cp({ sourceX: t, sourceY: e, targetX: n, targetY: r }) {
  const [o, i, s, a] = up({
    sourceX: t,
    sourceY: e,
    targetX: n,
    targetY: r
  });
  return [`M ${t},${e}L ${n},${r}`, o, i, s, a];
}
const hd = {
  [Ee.Left]: { x: -1, y: 0 },
  [Ee.Right]: { x: 1, y: 0 },
  [Ee.Top]: { x: 0, y: -1 },
  [Ee.Bottom]: { x: 0, y: 1 }
}, g2 = ({ source: t, sourcePosition: e = Ee.Bottom, target: n }) => e === Ee.Left || e === Ee.Right ? t.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : t.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, fd = (t, e) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
function v2({ source: t, sourcePosition: e = Ee.Bottom, target: n, targetPosition: r = Ee.Top, center: o, offset: i, stepPosition: s }) {
  const a = hd[e], l = hd[r], u = { x: t.x + a.x * i, y: t.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, h = g2({
    source: u,
    sourcePosition: e,
    target: d
  }), f = h.x !== 0 ? "x" : "y", v = h[f];
  let m = [], y, w;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , P, C] = up({
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
    ], E = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[f] === v ? m = f === "x" ? k : E : m = f === "x" ? E : k;
  } else {
    const k = [{ x: u.x, y: d.y }], E = [{ x: d.x, y: u.y }];
    if (f === "x" ? m = a.x === v ? E : k : m = a.y === v ? k : E, e === r) {
      const D = Math.abs(t[f] - n[f]);
      if (D <= i) {
        const _ = Math.min(i - 1, i - D);
        a[f] === v ? b[f] = (u[f] > t[f] ? -1 : 1) * _ : x[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (e !== r) {
      const D = f === "x" ? "y" : "x", _ = a[f] === l[D], N = u[D] > d[D], $ = u[D] < d[D];
      (a[f] === 1 && (!_ && N || _ && $) || a[f] !== 1 && (!_ && $ || _ && N)) && (m = f === "x" ? k : E);
    }
    const V = { x: u.x + b.x, y: u.y + b.y }, I = { x: d.x + x.x, y: d.y + x.y }, L = Math.max(Math.abs(V.x - m[0].x), Math.abs(I.x - m[0].x)), A = Math.max(Math.abs(V.y - m[0].y), Math.abs(I.y - m[0].y));
    L >= A ? (y = (V.x + I.x) / 2, w = m[0].y) : (y = m[0].x, w = (V.y + I.y) / 2);
  }
  return [[
    t,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], y, w, P, C];
}
function m2(t, e, n, r) {
  const o = Math.min(fd(t, e) / 2, fd(e, n) / 2, r), { x: i, y: s } = e;
  if (t.x === i && i === n.x || t.y === s && s === n.y)
    return `L${i} ${s}`;
  if (t.y === s) {
    const u = t.x < n.x ? -1 : 1, d = t.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = t.x < n.x ? 1 : -1, l = t.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Au({ sourceX: t, sourceY: e, sourcePosition: n = Ee.Bottom, targetX: r, targetY: o, targetPosition: i = Ee.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
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
    let P = "";
    return x > 0 && x < h.length - 1 ? P = m2(h[x - 1], b, h[x + 1], s) : P = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, w += P, w;
  }, ""), f, v, m, y];
}
function pd(t) {
  return t && !!(t.internals.handleBounds || t.handles?.length) && !!(t.measured.width || t.width || t.initialWidth);
}
function y2(t) {
  const { sourceNode: e, targetNode: n } = t;
  if (!pd(e) || !pd(n))
    return null;
  const r = e.internals.handleBounds || gd(e.handles), o = n.internals.handleBounds || gd(n.handles), i = vd(r?.source ?? [], t.sourceHandle), s = vd(
    // when connection type is loose we can define all handles as sources and connect source -> source
    t.connectionMode === Ro.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    t.targetHandle
  );
  if (!i || !s)
    return t.onError?.("008", Pi.error008(i ? "target" : "source", {
      id: t.id,
      sourceHandle: t.sourceHandle,
      targetHandle: t.targetHandle
    })), null;
  const a = i?.position || Ee.Bottom, l = s?.position || Ee.Top, u = Ni(e, i, a), d = Ni(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function gd(t) {
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
function Ni(t, e, n = Ee.Left, r = !1) {
  const o = (e?.x ?? 0) + t.internals.positionAbsolute.x, i = (e?.y ?? 0) + t.internals.positionAbsolute.y, { width: s, height: a } = e ?? Xr(t);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (e?.position ?? n) {
    case Ee.Top:
      return { x: o + s / 2, y: i };
    case Ee.Right:
      return { x: o + s, y: i + a / 2 };
    case Ee.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ee.Left:
      return { x: o, y: i + a / 2 };
  }
}
function vd(t, e) {
  return t && (e ? t.find((n) => n.id === e) : t[0]) || null;
}
function Ol(t, e) {
  return t ? typeof t == "string" ? t : `${e ? `${e}__` : ""}${Object.keys(t).sort().map((n) => `${n}=${t[n]}`).join("&")}` : "";
}
function w2(t, { id: e, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return t.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ol(l, e);
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
    case Ee.Right:
      s = [
        (t.x + t.width) * e.zoom + e.x + r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [0, -100 * i];
      break;
    case Ee.Bottom:
      s[1] = (t.y + t.height) * e.zoom + e.y + r, a[1] = 0;
      break;
    case Ee.Left:
      s = [
        t.x * e.zoom + e.x - r,
        (t.y + t.height * i) * e.zoom + e.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const dp = 1e3, x2 = 10, Du = {
  nodeOrigin: [0, 0],
  nodeExtent: Sl,
  elevateNodesOnSelect: !0,
  defaults: {}
}, k2 = {
  ...Du,
  checkEquality: !0
};
function Vu(t, e) {
  const n = { ...t };
  for (const r in e)
    e[r] !== void 0 && (n[r] = e[r]);
  return n;
}
function C2(t, e, n) {
  const r = Vu(Du, n);
  for (const o of t.values())
    if (o.parentId)
      Iu(o, t, e, r);
    else {
      const i = Ki(o, r.nodeOrigin), s = Ko(o.extent) ? o.extent : r.nodeExtent, a = po(i, s, Xr(o));
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
  const o = Vu(k2, r);
  let i = { i: -1 }, s = t.length > 0;
  const a = new Map(e), l = o?.elevateNodesOnSelect ? dp : 0;
  e.clear(), n.clear();
  for (const u of t) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      e.set(u.id, d);
    else {
      const h = Ki(u, o.nodeOrigin), f = Ko(u.extent) ? u.extent : o.nodeExtent, v = po(h, f, Xr(u));
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
          z: hp(u, l),
          userNode: u
        }
      }, e.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Iu(d, e, n, r, i);
  }
  return s;
}
function _2(t, e) {
  if (!t.parentId)
    return;
  const n = e.get(t.parentId);
  n ? n.set(t.id, t) : e.set(t.parentId, /* @__PURE__ */ new Map([[t.id, t]]));
}
function Iu(t, e, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = Vu(Du, r), l = t.parentId, u = e.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  _2(t, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * x2), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? dp : 0, { x: h, y: f, z: v } = P2(t, u, s, a, d), { positionAbsolute: m } = t.internals, y = h !== m.x || f !== m.y;
  (y || v !== t.internals.z) && e.set(t.id, {
    ...t,
    internals: {
      ...t.internals,
      positionAbsolute: y ? { x: h, y: f } : m,
      z: v
    }
  });
}
function hp(t, e) {
  return (hr(t.zIndex) ? t.zIndex : 0) + (t.selected ? e : 0);
}
function P2(t, e, n, r, o) {
  const { x: i, y: s } = e.internals.positionAbsolute, a = Xr(t), l = Ki(t, n), u = Ko(t.extent) ? po(l, t.extent, a) : l;
  let d = po({ x: i + u.x, y: s + u.y }, r, a);
  t.extent === "parent" && (d = ep(d, a, e));
  const h = hp(t, o), f = e.internals.z ?? 0;
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
    const l = i.get(s.parentId)?.expandedRect ?? Bo(a), u = np(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Xr(a), h = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, v = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (m - d.width) * h[0], b = (y - d.height) * h[1];
    (f > 0 || v > 0 || w || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + w,
        y: a.position.y - v + b
      }
    }), n.get(l)?.forEach((x) => {
      t.some((P) => P.id === x.id) || o.push({
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
function E2(t, e, n, r, o, i) {
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
    const m = op(f.nodeElement), y = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (y || !v.internals.handleBounds || f.force)) {
      const w = f.nodeElement.getBoundingClientRect(), b = Ko(v.extent) ? v.extent : i;
      let { positionAbsolute: x } = v.internals;
      v.parentId && v.extent === "parent" ? x = ep(x, m, e.get(v.parentId)) : b && (x = po(x, b, m));
      const P = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: x,
          handleBounds: {
            source: cd("source", f.nodeElement, w, d, v.id),
            target: cd("target", f.nodeElement, w, d, v.id)
          }
        }
      };
      e.set(v.id, P), v.parentId && Iu(P, e, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && h.push({
        id: v.id,
        parentId: v.parentId,
        rect: Bo(P, o)
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
function md(t, e, n, r, o, i) {
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
function T2(t, e, n) {
  t.clear(), e.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    md("source", l, d, t, o, s), md("target", l, u, t, i, a), e.set(r.id, r);
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
function fp(t, e) {
  if (!t.parentId)
    return !1;
  const n = e.get(t.parentId);
  return n ? n.selected ? !0 : fp(n, e) : !1;
}
function yd(t, e, n) {
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
function M2(t, e, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of t)
    if ((s.selected || s.id === r) && (!s.parentId || !fp(s, t)) && (s.draggable || e && typeof s.draggable > "u")) {
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
function Qa({ nodeId: t, dragItems: e, nodeLookup: n, dragging: r = !0 }) {
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
  }, s = Zi(i, e);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function D2({ onNodeMouseDown: t, getStoreItems: e, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, h = !1, f = null, v = !1, m = !1, y = null;
  function w({ noDragClassName: x, handleSelector: P, domNode: C, isSelectable: k, nodeId: E, nodeClickDistance: V = 0 }) {
    f = Cn(C);
    function I({ x: _, y: N }) {
      const { nodeLookup: $, nodeExtent: O, snapGrid: z, snapToGrid: j, nodeOrigin: q, onNodeDrag: G, onSelectionDrag: T, onError: U, updateNodePositions: te } = e();
      i = { x: _, y: N };
      let B = !1;
      const Z = a.size > 1, W = Z && O ? Pl(Fi(a)) : null, J = Z && j ? A2({
        dragItems: a,
        snapGrid: z,
        x: _,
        y: N
      }) : null;
      for (const [oe, H] of a) {
        if (!$.has(oe))
          continue;
        let ne = { x: _ - H.distance.x, y: N - H.distance.y };
        j && (ne = J ? {
          x: Math.round(ne.x + J.x),
          y: Math.round(ne.y + J.y)
        } : Zi(ne, z));
        let ge = null;
        if (Z && O && !H.extent && W) {
          const { positionAbsolute: de } = H.internals, ye = de.x - W.x + O[0][0], ke = de.x + H.measured.width - W.x2 + O[1][0], be = de.y - W.y + O[0][1], he = de.y + H.measured.height - W.y2 + O[1][1];
          ge = [
            [ye, be],
            [ke, he]
          ];
        }
        const { position: ce, positionAbsolute: ie } = Qf({
          nodeId: oe,
          nextPosition: ne,
          nodeLookup: $,
          nodeExtent: ge || O,
          nodeOrigin: q,
          onError: U
        });
        B = B || H.position.x !== ce.x || H.position.y !== ce.y, H.position = ce, H.internals.positionAbsolute = ie;
      }
      if (m = m || B, !!B && (te(a, !0), y && (r || G || !E && T))) {
        const [oe, H] = Qa({
          nodeId: E,
          dragItems: a,
          nodeLookup: $
        });
        r?.(y, a, oe, H), G?.(y, oe, H), E || T?.(y, H);
      }
    }
    async function L() {
      if (!d)
        return;
      const { transform: _, panBy: N, autoPanSpeed: $, autoPanOnNodeDrag: O } = e();
      if (!O) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [z, j] = tp(u, d, $);
      (z !== 0 || j !== 0) && (i.x = (i.x ?? 0) - z / _[2], i.y = (i.y ?? 0) - j / _[2], await N({ x: z, y: j }) && I(i)), s = requestAnimationFrame(L);
    }
    function A(_) {
      const { nodeLookup: N, multiSelectionActive: $, nodesDraggable: O, transform: z, snapGrid: j, snapToGrid: q, selectNodesOnDrag: G, onNodeDragStart: T, onSelectionDragStart: U, unselectNodesAndEdges: te } = e();
      h = !0, (!G || !k) && !$ && E && (N.get(E)?.selected || te()), k && G && E && t?.(E);
      const B = Ja(_.sourceEvent, { transform: z, snapGrid: j, snapToGrid: q, containerBounds: d });
      if (i = B, a = M2(N, O, B, E), a.size > 0 && (n || T || !E && U)) {
        const [Z, W] = Qa({
          nodeId: E,
          dragItems: a,
          nodeLookup: N
        });
        n?.(_.sourceEvent, a, Z, W), T?.(_.sourceEvent, Z, W), E || U?.(_.sourceEvent, W);
      }
    }
    const D = tw().clickDistance(V).on("start", (_) => {
      const { domNode: N, nodeDragThreshold: $, transform: O, snapGrid: z, snapToGrid: j } = e();
      d = N?.getBoundingClientRect() || null, v = !1, m = !1, y = _.sourceEvent, $ === 0 && A(_), i = Ja(_.sourceEvent, { transform: O, snapGrid: z, snapToGrid: j, containerBounds: d }), u = Tn(_.sourceEvent, d);
    }).on("drag", (_) => {
      const { autoPanOnNodeDrag: N, transform: $, snapGrid: O, snapToGrid: z, nodeDragThreshold: j, nodeLookup: q } = e(), G = Ja(_.sourceEvent, { transform: $, snapGrid: O, snapToGrid: z, containerBounds: d });
      if (y = _.sourceEvent, (_.sourceEvent.type === "touchmove" && _.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !q.has(E)) && (v = !0), !v) {
        if (!l && N && h && (l = !0, L()), !h) {
          const T = Tn(_.sourceEvent, d), U = T.x - u.x, te = T.y - u.y;
          Math.sqrt(U * U + te * te) > j && A(_);
        }
        (i.x !== G.xSnapped || i.y !== G.ySnapped) && a && h && (u = Tn(_.sourceEvent, d), I(G));
      }
    }).on("end", (_) => {
      if (!(!h || v) && (l = !1, h = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: N, updateNodePositions: $, onNodeDragStop: O, onSelectionDragStop: z } = e();
        if (m && ($(a, !1), m = !1), o || O || !E && z) {
          const [j, q] = Qa({
            nodeId: E,
            dragItems: a,
            nodeLookup: N,
            dragging: !1
          });
          o?.(_.sourceEvent, a, j, q), O?.(_.sourceEvent, j, q), E || z?.(_.sourceEvent, q);
        }
      }
    }).filter((_) => {
      const N = _.target;
      return !_.button && (!x || !yd(N, `.${x}`, C)) && (!P || yd(N, P, C));
    });
    f.call(D);
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
    Ei(o, Bo(i)) > 0 && r.push(i);
  return r;
}
const I2 = 250;
function H2(t, e, n, r) {
  let o = [], i = 1 / 0;
  const s = V2(t, n, e + I2);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: h } = Ni(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - t.x, 2) + Math.pow(h - t.y, 2));
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
function pp(t, e, n, r, o, i = !1) {
  const s = r.get(t);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[e] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Ni(s, l, l.position, !0) } : l;
}
function gp(t, e) {
  return t || (e?.classList.contains("target") ? "target" : e?.classList.contains("source") ? "source" : null);
}
function L2(t, e) {
  let n = null;
  return e ? n = !0 : t && !e && (n = !1), n;
}
const vp = () => !0;
function R2(t, { connectionMode: e, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: h, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: y, onConnectEnd: w, isValidConnection: b = vp, onReconnectEnd: x, updateConnection: P, getTransform: C, getFromHandle: k, autoPanSpeed: E, dragThreshold: V = 1, handleDomNode: I }) {
  const L = ip(t.target);
  let A = 0, D;
  const { x: _, y: N } = Tn(t), $ = gp(i, I), O = a?.getBoundingClientRect();
  let z = !1;
  if (!O || !$)
    return;
  const j = pp(o, $, r, l, e);
  if (!j)
    return;
  let q = Tn(t, O), G = !1, T = null, U = !1, te = null;
  function B() {
    if (!d || !O)
      return;
    const [ge, ce] = tp(q, O, E);
    f({ x: ge, y: ce }), A = requestAnimationFrame(B);
  }
  const Z = {
    ...j,
    nodeId: o,
    type: $,
    position: j.position
  }, W = l.get(o);
  let J = {
    inProgress: !0,
    isValid: null,
    from: Ni(W, Z, Ee.Left, !0),
    fromHandle: Z,
    fromPosition: Z.position,
    fromNode: W,
    to: q,
    toHandle: null,
    toPosition: sd[Z.position],
    toNode: null,
    pointer: q
  };
  function oe() {
    z = !0, P(J), m?.(t, { nodeId: o, handleId: r, handleType: $ });
  }
  V === 0 && oe();
  function H(ge) {
    if (!z) {
      const { x: ye, y: ke } = Tn(ge), be = ye - _, he = ke - N;
      if (!(be * be + he * he > V * V))
        return;
      oe();
    }
    if (!k() || !Z) {
      ne(ge);
      return;
    }
    const ce = C();
    q = Tn(ge, O), D = H2(Wi(q, ce, !1, [1, 1]), n, l, Z), G || (B(), G = !0);
    const ie = mp(ge, {
      handle: D,
      connectionMode: e,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: L,
      lib: u,
      flowId: h,
      nodeLookup: l
    });
    te = ie.handleDomNode, T = ie.connection, U = L2(!!D, ie.isValid);
    const de = {
      // from stays the same
      ...J,
      isValid: U,
      to: ie.toHandle && U ? Ys({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : q,
      toHandle: ie.toHandle,
      toPosition: U && ie.toHandle ? ie.toHandle.position : sd[Z.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: q
    };
    P(de), J = de;
  }
  function ne(ge) {
    if (!("touches" in ge && ge.touches.length > 0)) {
      if (z) {
        (D || te) && T && U && y?.(T);
        const { inProgress: ce, ...ie } = J, de = {
          ...ie,
          toPosition: J.toHandle ? J.toPosition : null
        };
        w?.(ge, de), i && x?.(ge, de);
      }
      v(), cancelAnimationFrame(A), G = !1, U = !1, T = null, te = null, L.removeEventListener("mousemove", H), L.removeEventListener("mouseup", ne), L.removeEventListener("touchmove", H), L.removeEventListener("touchend", ne);
    }
  }
  L.addEventListener("mousemove", H), L.addEventListener("mouseup", ne), L.addEventListener("touchmove", H), L.addEventListener("touchend", ne);
}
function mp(t, { handle: e, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = vp, nodeLookup: d }) {
  const h = i === "target", f = e ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`) : null, { x: v, y: m } = Tn(t), y = s.elementFromPoint(v, m), w = y?.classList.contains(`${a}-flow__handle`) ? y : f, b = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const x = gp(void 0, w), P = w.getAttribute("data-nodeid"), C = w.getAttribute("data-handleid"), k = w.classList.contains("connectable"), E = w.classList.contains("connectableend");
    if (!P || !x)
      return b;
    const V = {
      source: h ? P : r,
      sourceHandle: h ? C : o,
      target: h ? r : P,
      targetHandle: h ? o : C
    };
    b.connection = V;
    const I = k && E && (n === Ro.Strict ? h && x === "source" || !h && x === "target" : P !== r || C !== o);
    b.isValid = I && u(V), b.toHandle = pp(P, x, C, d, n, !0);
  }
  return b;
}
const wd = {
  onPointerDown: R2,
  isValid: mp
};
function j2({ domNode: t, panZoom: e, getTransform: n, getViewScale: r }) {
  const o = Cn(t);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: h = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (P) => {
      if (P.sourceEvent.type !== "wheel" || !e)
        return;
      const C = n(), k = P.sourceEvent.ctrlKey && no() ? 10 : 1, E = -P.sourceEvent.deltaY * (P.sourceEvent.deltaMode === 1 ? 0.05 : P.sourceEvent.deltaMode ? 1 : 2e-3) * d, V = C[2] * Math.pow(2, E * k);
      e.scaleTo(V);
    };
    let y = [0, 0];
    const w = (P) => {
      (P.sourceEvent.type === "mousedown" || P.sourceEvent.type === "touchstart") && (y = [
        P.sourceEvent.clientX ?? P.sourceEvent.touches[0].clientX,
        P.sourceEvent.clientY ?? P.sourceEvent.touches[0].clientY
      ]);
    }, b = (P) => {
      const C = n();
      if (P.sourceEvent.type !== "mousemove" && P.sourceEvent.type !== "touchmove" || !e)
        return;
      const k = [
        P.sourceEvent.clientX ?? P.sourceEvent.touches[0].clientX,
        P.sourceEvent.clientY ?? P.sourceEvent.touches[0].clientY
      ], E = [k[0] - y[0], k[1] - y[1]];
      y = k;
      const V = r() * Math.max(C[2], Math.log(C[2])) * (v ? -1 : 1), I = {
        x: C[0] - E[0] * V,
        y: C[1] - E[1] * V
      }, L = [
        [0, 0],
        [l, u]
      ];
      e.setViewportConstrained({
        x: I.x,
        y: I.y,
        zoom: C[2]
      }, L, a);
    }, x = Uf().on("start", w).on("zoom", h ? b : null).on("zoom.wheel", f ? m : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: On
  };
}
const Da = (t) => ({
  x: t.x,
  y: t.y,
  zoom: t.k
}), el = ({ x: t, y: e, zoom: n }) => za.translate(t, e).scale(n), No = (t, e) => t.target.closest(`.${e}`), yp = (t, e) => e === 2 && Array.isArray(t) && t.includes(2), B2 = (t) => ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2, tl = (t, e = 0, n = B2, r = () => {
}) => {
  const o = typeof e == "number" && e > 0;
  return o || r(), o ? t.transition().duration(e).ease(n).on("end", r) : t;
}, wp = (t) => {
  const e = t.ctrlKey && no() ? 10 : 1;
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * e;
};
function K2({ zoomPanValues: t, noWheelClassName: e, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (No(d, e))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const h = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = On(d), b = wp(d), x = h * Math.pow(2, b);
      r.scaleTo(n, x, w, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let v = o === so.Vertical ? 0 : d.deltaX * f, m = o === so.Horizontal ? 0 : d.deltaY * f;
    !no() && d.shiftKey && o !== so.Vertical && (v = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / h) * i,
      -(m / h) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Da(n.property("__zoom"));
    clearTimeout(t.panScrollTimeout), t.isPanScrolling ? (l?.(d, y), t.panScrollTimeout = setTimeout(() => {
      u?.(d, y), t.isPanScrolling = !1;
    }, 150)) : (t.isPanScrolling = !0, a?.(d, y));
  };
}
function F2({ noWheelClassName: t, preventScrolling: e, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !e && i && !r.ctrlKey, a = No(r, t);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function Z2({ zoomPanValues: t, onDraggingChange: e, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Da(r.transform);
    t.mouseButton = r.sourceEvent?.button || 0, t.isZoomingOrPanning = !0, t.prevViewport = o, r.sourceEvent?.type === "mousedown" && e(!0), n && n?.(r.sourceEvent, o);
  };
}
function W2({ zoomPanValues: t, panOnDrag: e, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    t.usedRightMouseButton = !!(n && yp(e, t.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Da(i.transform));
  };
}
function X2({ zoomPanValues: t, panOnDrag: e, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (t.isZoomingOrPanning = !1, i && yp(e, t.mouseButton ?? 0) && !t.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), t.usedRightMouseButton = !1, r(!1), o)) {
      const a = Da(s.transform);
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
    if (h.button === 1 && h.type === "mousedown" && (No(h, `${u}-flow__node`) || No(h, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || No(h, a) && m || No(h, l) && (!m || o && m && !t) || !n && h.ctrlKey && m)
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
  }, d = t.getBoundingClientRect(), h = Uf().scaleExtent([e, n]).translateExtent(r), f = Cn(t).call(h);
  x({
    x: o.x,
    y: o.y,
    zoom: jo(o.zoom, e, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const v = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  h.wheelDelta(wp);
  function y(D, _) {
    return f ? new Promise((N) => {
      h?.interpolate(_?.interpolate === "linear" ? mi : $s).transform(tl(f, _?.duration, _?.ease, () => N(!0)), D);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: D, noPanClassName: _, onPaneContextMenu: N, userSelectionActive: $, panOnScroll: O, panOnDrag: z, panOnScrollMode: j, panOnScrollSpeed: q, preventScrolling: G, zoomOnPinch: T, zoomOnScroll: U, zoomOnDoubleClick: te, zoomActivationKeyPressed: B, lib: Z, onTransformChange: W, connectionInProgress: J, paneClickDistance: oe, selectionOnDrag: H }) {
    $ && !u.isZoomingOrPanning && b();
    const ne = O && !B && !$;
    h.clickDistance(H ? 1 / 0 : !hr(oe) || oe < 0 ? 0 : oe);
    const ge = ne ? K2({
      zoomPanValues: u,
      noWheelClassName: D,
      d3Selection: f,
      d3Zoom: h,
      panOnScrollMode: j,
      panOnScrollSpeed: q,
      zoomOnPinch: T,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : F2({
      noWheelClassName: D,
      preventScrolling: G,
      d3ZoomHandler: v
    });
    if (f.on("wheel.zoom", ge, { passive: !1 }), !$) {
      const ie = Z2({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      h.on("start", ie);
      const de = W2({
        zoomPanValues: u,
        panOnDrag: z,
        onPaneContextMenu: !!N,
        onPanZoom: i,
        onTransformChange: W
      });
      h.on("zoom", de);
      const ye = X2({
        zoomPanValues: u,
        panOnDrag: z,
        panOnScroll: O,
        onPaneContextMenu: N,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      h.on("end", ye);
    }
    const ce = q2({
      zoomActivationKeyPressed: B,
      panOnDrag: z,
      zoomOnScroll: U,
      panOnScroll: O,
      zoomOnDoubleClick: te,
      zoomOnPinch: T,
      userSelectionActive: $,
      noPanClassName: _,
      noWheelClassName: D,
      lib: Z,
      connectionInProgress: J
    });
    h.filter(ce), te ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function b() {
    h.on("zoom", null);
  }
  async function x(D, _, N) {
    const $ = el(D), O = h?.constrain()($, _, N);
    return O && await y(O), new Promise((z) => z(O));
  }
  async function P(D, _) {
    const N = el(D);
    return await y(N, _), new Promise(($) => $(N));
  }
  function C(D) {
    if (f) {
      const _ = el(D), N = f.property("__zoom");
      (N.k !== D.zoom || N.x !== D.x || N.y !== D.y) && h?.transform(f, _, null, { sync: !0 });
    }
  }
  function k() {
    const D = f ? Yf(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function E(D, _) {
    return f ? new Promise((N) => {
      h?.interpolate(_?.interpolate === "linear" ? mi : $s).scaleTo(tl(f, _?.duration, _?.ease, () => N(!0)), D);
    }) : Promise.resolve(!1);
  }
  function V(D, _) {
    return f ? new Promise((N) => {
      h?.interpolate(_?.interpolate === "linear" ? mi : $s).scaleBy(tl(f, _?.duration, _?.ease, () => N(!0)), D);
    }) : Promise.resolve(!1);
  }
  function I(D) {
    h?.scaleExtent(D);
  }
  function L(D) {
    h?.translateExtent(D);
  }
  function A(D) {
    const _ = !hr(D) || D < 0 ? 0 : D;
    h?.clickDistance(_);
  }
  return {
    update: w,
    destroy: b,
    setViewport: P,
    setViewportConstrained: x,
    getViewport: k,
    scaleTo: E,
    scaleBy: V,
    setScaleExtent: I,
    setTranslateExtent: L,
    syncViewport: C,
    setClickDistance: A
  };
}
var bd;
(function(t) {
  t.Line = "line", t.Handle = "handle";
})(bd || (bd = {}));
var U2 = /* @__PURE__ */ re("<div><!></div>");
function Rr(t, e) {
  le(e, !0);
  let n = g(e, "id", 7, null), r = g(e, "type", 7, "source"), o = g(e, "position", 23, () => Ee.Top), i = g(e, "style", 7), s = g(e, "class", 7), a = g(e, "isConnectable", 7), l = g(e, "isConnectableStart", 7, !0), u = g(e, "isConnectableEnd", 7, !0), d = g(e, "isValidConnection", 7), h = g(e, "onconnect", 7), f = g(e, "ondisconnect", 7), v = g(e, "children", 7), m = /* @__PURE__ */ je(e, [
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
  const y = Dn("svelteflow__node_id"), w = Dn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ S(() => r() === "target"), x = /* @__PURE__ */ S(() => a() !== void 0 ? a() : w.value), P = Rn(), C = /* @__PURE__ */ S(() => P.ariaLabelConfig), k = null;
  rn(() => {
    if (h() || f()) {
      P.edges;
      let T = P.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Yb(T, k)) {
        const U = T ?? /* @__PURE__ */ new Map();
        ad(k, U, f()), ad(U, k, h());
      }
      k = new Map(T);
    }
  });
  let E = /* @__PURE__ */ S(() => {
    if (!P.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: T, toHandle: U, isValid: te } = P.connection, B = T && T.nodeId === y && T.type === r() && T.id === n(), Z = U && U.nodeId === y && U.type === r() && U.id === n(), W = P.connectionMode === Ro.Strict ? T?.type !== r() : y !== T?.nodeId || n() !== T?.id;
    return [
      !0,
      B,
      Z,
      W,
      Z && te
    ];
  }), V = /* @__PURE__ */ S(() => Wo(c(E), 5)), I = /* @__PURE__ */ S(() => c(V)[0]), L = /* @__PURE__ */ S(() => c(V)[1]), A = /* @__PURE__ */ S(() => c(V)[2]), D = /* @__PURE__ */ S(() => c(V)[3]), _ = /* @__PURE__ */ S(() => c(V)[4]);
  function N(T) {
    const U = P.onbeforeconnect ? P.onbeforeconnect(T) : T;
    U && (P.addEdge(U), P.onconnect?.(T));
  }
  function $(T) {
    const U = ap(T);
    T.currentTarget && (U && T.button === 0 || !U) && wd.onPointerDown(T, {
      handleId: n(),
      nodeId: y,
      isTarget: c(b),
      connectionRadius: P.connectionRadius,
      domNode: P.domNode,
      nodeLookup: P.nodeLookup,
      connectionMode: P.connectionMode,
      lib: "svelte",
      autoPanOnConnect: P.autoPanOnConnect,
      autoPanSpeed: P.autoPanSpeed,
      flowId: P.flowId,
      isValidConnection: d() ?? P.isValidConnection,
      updateConnection: P.updateConnection,
      cancelConnection: P.cancelConnection,
      panBy: P.panBy,
      onConnect: N,
      onConnectStart: (te, B) => {
        P.onconnectstart?.(te, {
          nodeId: B.nodeId,
          handleId: B.handleId,
          handleType: B.handleType
        });
      },
      onConnectEnd: (te, B) => {
        P.onconnectend?.(te, B);
      },
      getTransform: () => [P.viewport.x, P.viewport.y, P.viewport.zoom],
      getFromHandle: () => P.connection.fromHandle,
      dragThreshold: P.connectionDragThreshold,
      handleDomNode: T.currentTarget
    });
  }
  function O(T) {
    if (!y || !P.clickConnectStartHandle && !l())
      return;
    if (!P.clickConnectStartHandle) {
      P.onclickconnectstart?.(T, { nodeId: y, handleId: n(), handleType: r() }), P.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const U = ip(T.target), te = d() ?? P.isValidConnection, { connectionMode: B, clickConnectStartHandle: Z, flowId: W, nodeLookup: J } = P, { connection: oe, isValid: H } = wd.isValid(T, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: B,
      fromNodeId: Z.nodeId,
      fromHandleId: Z.id ?? null,
      fromType: Z.type,
      isValidConnection: te,
      flowId: W,
      doc: U,
      lib: "svelte",
      nodeLookup: J
    });
    H && oe && N(oe);
    const ne = structuredClone(hu(P.connection));
    delete ne.inProgress, ne.toPosition = ne.toHandle ? ne.toHandle.position : null, P.onclickconnectend?.(T, ne), P.clickConnectStartHandle = null;
  }
  var z = {
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
    set position(T = Ee.Top) {
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
  }, j = U2(), q = () => {
  };
  ot(j, () => ({
    "data-handleid": n(),
    "data-nodeid": y,
    "data-handlepos": o(),
    "data-id": `${P.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      P.noDragClass,
      P.noPanClass,
      o(),
      s()
    ],
    onmousedown: $,
    ontouchstart: $,
    onclick: P.clickConnect ? O : void 0,
    onkeypress: q,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [Mr]: {
      valid: c(_),
      connectingto: c(A),
      connectingfrom: c(L),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(I) || c(D)) && (c(I) || P.clickConnectStartHandle ? u() : l())
    }
  }));
  var G = Y(j);
  return Te(G, () => v() ?? We), X(j), M(t, j), ue(z);
}
se(
  Rr,
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
var G2 = /* @__PURE__ */ re("<!> <!>", 1);
function Hu(t, e) {
  le(e, !0);
  let n = g(e, "data", 7), r = g(e, "targetPosition", 23, () => Ee.Top), o = g(e, "sourcePosition", 23, () => Ee.Bottom);
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
    set targetPosition(d = Ee.Top) {
      r(d), p();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Ee.Bottom) {
      o(d), p();
    }
  }, s = G2(), a = ee(s);
  Rr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = R(a), u = R(l);
  return Rr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), ze(() => ht(l, ` ${n()?.label ?? ""} `)), M(t, s), ue(i);
}
se(Hu, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var J2 = /* @__PURE__ */ re(" <!>", 1);
function bp(t, e) {
  le(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "sourcePosition", 23, () => Ee.Bottom);
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
    set sourcePosition(l = Ee.Bottom) {
      r(l), p();
    }
  };
  Oe();
  var i = J2(), s = ee(i), a = R(s);
  return Rr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), ze(() => ht(s, `${n()?.label ?? ""} `)), M(t, i), ue(o);
}
se(bp, { data: {}, sourcePosition: {} }, [], [], !0);
var Q2 = /* @__PURE__ */ re(" <!>", 1);
function xp(t, e) {
  le(e, !0);
  let n = g(e, "data", 23, () => ({ label: "Node" })), r = g(e, "targetPosition", 23, () => Ee.Top);
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
    set targetPosition(l = Ee.Top) {
      r(l), p();
    }
  };
  Oe();
  var i = Q2(), s = ee(i), a = R(s);
  return Rr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), ze(() => ht(s, `${n()?.label ?? ""} `)), M(t, i), ue(o);
}
se(xp, { data: {}, targetPosition: {} }, [], [], !0);
function kp(t, e) {
}
se(kp, {}, [], [], !0);
function nl(t, e, n) {
  if (!n || !e)
    return;
  const r = n === "root" ? e : e.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(t);
}
function Cp(t, e) {
  const n = /* @__PURE__ */ S(Rn), r = /* @__PURE__ */ S(() => c(n).domNode);
  let o;
  return c(r) ? nl(t, c(r), e) : o = yo(() => {
    Fe(() => {
      nl(t, c(r), e), o?.();
    });
  }), {
    async update(i) {
      nl(t, c(r), i);
    },
    destroy() {
      t.parentNode && t.parentNode.removeChild(t), o?.();
    }
  };
}
function $p() {
  let t = /* @__PURE__ */ we(typeof window > "u");
  if (c(t)) {
    const e = yo(() => {
      Fe(() => {
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
const xd = (t) => Gb(t), ex = (t) => Jf(t);
function Qn(t) {
  return t === void 0 ? void 0 : `${t}px`;
}
const Us = {
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
function Sp(t, e) {
  le(e, !0), it(t, nx);
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
  const h = Rn(), f = Dn("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let v = /* @__PURE__ */ S(() => h.visible.edges.get(f)?.zIndex);
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
      [Zn]: x
    }),
    [
      () => ({
        display: $p().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: Qn(o()),
        height: Qn(i()),
        "z-index": c(v)
      })
    ],
    void 0,
    void 0,
    "svelte-herprs"
  );
  var b = Y(y);
  return Te(b, () => u() ?? We), X(y), Ft(y, (x, P) => Cp?.(x, P), () => "edge-labels"), M(t, y), ue(m);
}
se(
  Sp,
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
function Xi(t, e) {
  le(e, !0);
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
  }, y = ox(), w = ee(y), b = R(w);
  {
    var x = (k) => {
      var E = rx();
      ot(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": h(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...v
      })), M(k, E);
    };
    ae(b, (k) => {
      h() > 0 && k(x);
    });
  }
  var P = R(b);
  {
    var C = (k) => {
      Sp(k, {
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
        children: (E, V) => {
          Oe();
          var I = He();
          ze(() => ht(I, o())), M(E, I);
        },
        $$slots: { default: !0 }
      });
    };
    ae(P, (k) => {
      o() && k(C);
    });
  }
  return ze(() => {
    Ne(w, "id", n()), Ne(w, "d", r()), un(w, 0, Or(["svelte-flow__edge-path", f()])), Ne(w, "marker-start", l()), Ne(w, "marker-end", u()), Bt(w, d());
  }), M(t, y), ue(m);
}
se(
  Xi,
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
function Lu(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "interactionWidth", 7), o = g(e, "label", 7), i = g(e, "labelStyle", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "pathOptions", 7), u = g(e, "sourcePosition", 7), d = g(e, "sourceX", 7), h = g(e, "sourceY", 7), f = g(e, "style", 7), v = g(e, "targetPosition", 7), m = g(e, "targetX", 7), y = g(e, "targetY", 7), w = /* @__PURE__ */ S(() => lp({
    sourceX: d(),
    sourceY: h(),
    targetX: m(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: v(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ S(() => Wo(c(w), 3)), x = /* @__PURE__ */ S(() => c(b)[0]), P = /* @__PURE__ */ S(() => c(b)[1]), C = /* @__PURE__ */ S(() => c(b)[2]);
  var k = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), p();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(E) {
      r(E), p();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), p();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(E) {
      i(E), p();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), p();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), p();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(E) {
      l(E), p();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(E) {
      u(E), p();
    },
    get sourceX() {
      return d();
    },
    set sourceX(E) {
      d(E), p();
    },
    get sourceY() {
      return h();
    },
    set sourceY(E) {
      h(E), p();
    },
    get style() {
      return f();
    },
    set style(E) {
      f(E), p();
    },
    get targetPosition() {
      return v();
    },
    set targetPosition(E) {
      v(E), p();
    },
    get targetX() {
      return m();
    },
    set targetX(E) {
      m(E), p();
    },
    get targetY() {
      return y();
    },
    set targetY(E) {
      y(E), p();
    }
  };
  return Xi(t, {
    get id() {
      return n();
    },
    get path() {
      return c(x);
    },
    get labelX() {
      return c(P);
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
  }), ue(k);
}
se(
  Lu,
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
function _p(t, e) {
  le(e, !0);
  let n = g(e, "interactionWidth", 7), r = g(e, "label", 7), o = g(e, "labelStyle", 7), i = g(e, "style", 7), s = g(e, "markerEnd", 7), a = g(e, "markerStart", 7), l = g(e, "sourcePosition", 7), u = g(e, "sourceX", 7), d = g(e, "sourceY", 7), h = g(e, "targetPosition", 7), f = g(e, "targetX", 7), v = g(e, "targetY", 7), m = /* @__PURE__ */ S(() => Au({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: v(),
    sourcePosition: l(),
    targetPosition: h()
  })), y = /* @__PURE__ */ S(() => Wo(c(m), 3)), w = /* @__PURE__ */ S(() => c(y)[0]), b = /* @__PURE__ */ S(() => c(y)[1]), x = /* @__PURE__ */ S(() => c(y)[2]);
  var P = {
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
  return Xi(t, {
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
  }), ue(P);
}
se(
  _p,
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
function Pp(t, e) {
  le(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "targetX", 7), i = g(e, "targetY", 7), s = g(e, "label", 7), a = g(e, "labelStyle", 7), l = g(e, "markerStart", 7), u = g(e, "markerEnd", 7), d = g(e, "interactionWidth", 7), h = g(e, "style", 7), f = /* @__PURE__ */ S(() => cp({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), v = /* @__PURE__ */ S(() => Wo(c(f), 3)), m = /* @__PURE__ */ S(() => c(v)[0]), y = /* @__PURE__ */ S(() => c(v)[1]), w = /* @__PURE__ */ S(() => c(v)[2]);
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
  return Xi(t, {
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
  }), ue(b);
}
se(
  Pp,
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
function Op(t, e) {
  le(e, !0);
  let n = g(e, "sourceX", 7), r = g(e, "sourceY", 7), o = g(e, "sourcePosition", 7), i = g(e, "targetX", 7), s = g(e, "targetY", 7), a = g(e, "targetPosition", 7), l = g(e, "label", 7), u = g(e, "labelStyle", 7), d = g(e, "markerStart", 7), h = g(e, "markerEnd", 7), f = g(e, "interactionWidth", 7), v = g(e, "style", 7), m = /* @__PURE__ */ S(() => Au({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ S(() => Wo(c(m), 3)), w = /* @__PURE__ */ S(() => c(y)[0]), b = /* @__PURE__ */ S(() => c(y)[1]), x = /* @__PURE__ */ S(() => c(y)[2]);
  var P = {
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
  return Xi(t, {
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
  }), ue(P);
}
se(
  Op,
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
  #r = yr || -1;
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
    return yr === this.#r ? /* @__PURE__ */ we(e) : br(e);
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
      o = this.#o(0), r.set(e, o), F(this.#n, super.size), Fn(a);
    else if (i !== n) {
      Fn(o);
      var l = a.reactions === null ? null : new Set(a.reactions), u = l === null || !o.reactions?.every(
        (d) => (
          /** @type {NonNullable<typeof v_reactions>} */
          l.has(d)
        )
      );
      u && Fn(a);
    }
    return s;
  }
  /** @param {K} key */
  delete(e) {
    var n = this.#e, r = n.get(e), o = super.delete(e);
    return r !== void 0 && (n.delete(e), F(this.#n, super.size), F(r, -1), Fn(this.#t)), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      F(this.#n, 0);
      for (var n of e.values())
        F(n, -1);
      Fn(this.#t), e.clear();
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
    this.#e = e, this.#t = mo(n);
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
  return zu(t, { x: 0, y: 0, width: n, height: r }, e, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function kd(t) {
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
const Np = {
  input: bp,
  output: xp,
  default: Hu,
  group: kp
}, Tp = {
  straight: Pp,
  smoothstep: _p,
  default: Lu,
  step: Op
};
function cx(t, e, n, r, o, i) {
  if (e && !n && r && o) {
    const s = Fi(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return Mu(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function dx(t) {
  class e {
    #e = /* @__PURE__ */ S(() => t.props.id ?? "1");
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
    #i = /* @__PURE__ */ S(() => {
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
    #a = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#a);
    }
    set viewportInitialized(r) {
      F(this.#a, r);
    }
    #s = /* @__PURE__ */ S(() => (T2(this.connectionLookup, this.edgeLookup, t.edges), t.edges));
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
    #l = /* @__PURE__ */ S(() => {
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
    #u = /* @__PURE__ */ S(() => {
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
    #c = /* @__PURE__ */ S(() => {
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
        h = ux(s, b, y, w), f = kd({
          ...v,
          onlyRenderVisible: !0,
          visibleNodes: h,
          transform: b,
          width: y,
          height: w
        });
      } else
        h = this.nodeLookup, f = kd(v);
      return { nodes: h, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      F(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => t.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      F(this.#d, r);
    }
    #h = /* @__PURE__ */ S(() => t.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#h);
    }
    set nodesConnectable(r) {
      F(this.#h, r);
    }
    #p = /* @__PURE__ */ S(() => t.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      F(this.#p, r);
    }
    #f = /* @__PURE__ */ S(() => t.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#f);
    }
    set nodesFocusable(r) {
      F(this.#f, r);
    }
    #y = /* @__PURE__ */ S(() => t.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      F(this.#y, r);
    }
    #v = /* @__PURE__ */ S(() => t.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      F(this.#v, r);
    }
    #w = /* @__PURE__ */ S(() => t.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#w);
    }
    set minZoom(r) {
      F(this.#w, r);
    }
    #m = /* @__PURE__ */ S(() => t.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      F(this.#m, r);
    }
    #g = /* @__PURE__ */ S(() => t.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      F(this.#g, r);
    }
    #b = /* @__PURE__ */ S(() => t.props.nodeExtent ?? Sl);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      F(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => t.props.translateExtent ?? Sl);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      F(this.#x, r);
    }
    #k = /* @__PURE__ */ S(() => t.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#k);
    }
    set defaultEdgeOptions(r) {
      F(this.#k, r);
    }
    #C = /* @__PURE__ */ S(() => t.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      F(this.#C, r);
    }
    #$ = /* @__PURE__ */ S(() => t.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      F(this.#$, r);
    }
    #S = /* @__PURE__ */ S(() => t.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#S);
    }
    set autoPanOnConnect(r) {
      F(this.#S, r);
    }
    #_ = /* @__PURE__ */ S(() => t.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#_);
    }
    set autoPanOnNodeFocus(r) {
      F(this.#_, r);
    }
    #P = /* @__PURE__ */ S(() => t.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#P);
    }
    set autoPanSpeed(r) {
      F(this.#P, r);
    }
    #O = /* @__PURE__ */ S(() => t.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#O);
    }
    set connectionDragThreshold(r) {
      F(this.#O, r);
    }
    fitViewQueued = t.props.fitView ?? !1;
    fitViewOptions = t.props.fitViewOptions;
    fitViewResolver = null;
    #E = /* @__PURE__ */ S(() => t.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#E);
    }
    set snapGrid(r) {
      F(this.#E, r);
    }
    #N = /* @__PURE__ */ we(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      F(this.#N, r);
    }
    #T = /* @__PURE__ */ we(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      F(this.#T, r);
    }
    #z = /* @__PURE__ */ we(!1);
    get selectionKeyPressed() {
      return c(this.#z);
    }
    set selectionKeyPressed(r) {
      F(this.#z, r);
    }
    #M = /* @__PURE__ */ we(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      F(this.#M, r);
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
    #H = /* @__PURE__ */ we("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      F(this.#H, r);
    }
    #L = /* @__PURE__ */ S(() => t.props.selectionMode ?? Xs.Partial);
    get selectionMode() {
      return c(this.#L);
    }
    set selectionMode(r) {
      F(this.#L, r);
    }
    #R = /* @__PURE__ */ S(() => ({ ...Np, ...t.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      F(this.#R, r);
    }
    #j = /* @__PURE__ */ S(() => ({ ...Tp, ...t.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      F(this.#j, r);
    }
    #B = /* @__PURE__ */ S(() => t.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      F(this.#B, r);
    }
    #K = /* @__PURE__ */ S(() => t.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      F(this.#K, r);
    }
    #F = /* @__PURE__ */ S(() => t.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#F);
    }
    set noWheelClass(r) {
      F(this.#F, r);
    }
    #Z = /* @__PURE__ */ S(() => a2(t.props.ariaLabelConfig));
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
      _l
    );
    get _connection() {
      return c(this.#X);
    }
    set _connection(r) {
      F(this.#X, r);
    }
    #q = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: Wi(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      F(this.#q, r);
    }
    #Y = /* @__PURE__ */ S(() => t.props.connectionMode ?? Ro.Strict);
    get connectionMode() {
      return c(this.#Y);
    }
    set connectionMode(r) {
      F(this.#Y, r);
    }
    #U = /* @__PURE__ */ S(() => t.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      F(this.#U, r);
    }
    #G = /* @__PURE__ */ S(() => t.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      F(this.#G, r);
    }
    #J = /* @__PURE__ */ S(() => t.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      F(this.#J, r);
    }
    #Q = /* @__PURE__ */ S(() => t.props.defaultMarkerColor === void 0 ? "#b1b1b7" : t.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      F(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => w2(t.edges, {
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
    #te = /* @__PURE__ */ S(() => t.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      F(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => t.props.onflowerror ?? r2);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      F(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => t.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      F(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => t.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      F(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => t.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      F(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => t.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      F(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => t.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      F(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => t.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      F(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => t.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      F(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => t.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      F(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => t.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      F(this.#de, r);
    }
    #he = /* @__PURE__ */ S(() => t.props.onreconnectend);
    get onreconnectend() {
      return c(this.#he);
    }
    set onreconnectend(r) {
      F(this.#he, r);
    }
    #fe = /* @__PURE__ */ S(() => t.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      F(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => t.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      F(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => t.props.onclickconnectend);
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
    #me = /* @__PURE__ */ S(() => t.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      F(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => t.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      F(this.#ye, r);
    }
    #we = /* @__PURE__ */ S(() => t.props.onselectiondragstop);
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
    #be = /* @__PURE__ */ S(() => t.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : t.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      F(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = _l, this.clickConnectStartHandle = null, this.viewport = t.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new e();
}
function Rn() {
  const t = Dn(Gs);
  if (!t)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return t.getStore();
}
const Gs = Symbol();
function zp(t) {
  const e = dx(t);
  function n(A) {
    e.nodeTypes = {
      ...Np,
      ...A
    };
  }
  function r(A) {
    e.edgeTypes = {
      ...Tp,
      ...A
    };
  }
  function o(A) {
    e.edges = p2(A, e.edges);
  }
  const i = (A, D = !1) => {
    e.nodes = e.nodes.map((_) => {
      const N = A.get(_.id);
      return N ? { ..._, position: N.position, dragging: D } : _;
    });
  };
  function s(A) {
    const { changes: D, updatedInternals: _ } = E2(A, e.nodeLookup, e.parentLookup, e.domNode, e.nodeOrigin);
    if (!_)
      return;
    C2(e.nodeLookup, e.parentLookup, {
      nodeOrigin: e.nodeOrigin,
      nodeExtent: e.nodeExtent
    }), e.fitViewQueued && e.resolveFitView();
    const N = /* @__PURE__ */ new Map();
    for (const $ of D) {
      const O = e.nodeLookup.get($.id)?.internals.userNode;
      if (!O)
        continue;
      const z = { ...O };
      switch ($.type) {
        case "dimensions": {
          const j = { ...z.measured, ...$.dimensions };
          $.setAttributes && (z.width = $.dimensions?.width ?? z.width, z.height = $.dimensions?.height ?? z.height), z.measured = j;
          break;
        }
        case "position":
          z.position = $.position ?? z.position;
          break;
      }
      N.set($.id, z);
    }
    e.nodes = e.nodes.map(($) => N.get($.id) ?? $);
  }
  function a(A) {
    const D = e.fitViewResolver ?? Promise.withResolvers();
    return e.fitViewQueued = !0, e.fitViewOptions = A, e.fitViewResolver = D, e.nodes = [...e.nodes], D.promise;
  }
  async function l(A, D, _) {
    const N = typeof _?.zoom < "u" ? _.zoom : e.maxZoom, $ = e.panZoom;
    return $ ? (await $.setViewport({
      x: e.width / 2 - A * N,
      y: e.height / 2 - D * N,
      zoom: N
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(A, D) {
    const _ = e.panZoom;
    return _ ? _.scaleBy(A, D) : Promise.resolve(!1);
  }
  function d(A) {
    return u(1.2, A);
  }
  function h(A) {
    return u(1 / 1.2, A);
  }
  function f(A) {
    const D = e.panZoom;
    D && (D.setScaleExtent([A, e.maxZoom]), e.minZoom = A);
  }
  function v(A) {
    const D = e.panZoom;
    D && (D.setScaleExtent([e.minZoom, A]), e.maxZoom = A);
  }
  function m(A) {
    const D = e.panZoom;
    D && (D.setTranslateExtent(A), e.translateExtent = A);
  }
  function y(A, D = null) {
    let _ = !1;
    const N = A.map(($) => (!D || D.has($.id)) && $.selected ? (_ = !0, { ...$, selected: !1 }) : $);
    return [_, N];
  }
  function w(A) {
    const D = A?.nodes ? new Set(A.nodes.map((j) => j.id)) : null, [_, N] = y(e.nodes, D);
    _ && (e.nodes = N);
    const $ = A?.edges ? new Set(A.edges.map((j) => j.id)) : null, [O, z] = y(e.edges, $);
    O && (e.edges = z);
  }
  function b(A) {
    const D = e.multiselectionKeyPressed;
    e.nodes = e.nodes.map((_) => {
      const N = A.includes(_.id), $ = D && _.selected || N;
      return !!_.selected !== $ ? { ..._, selected: $ } : _;
    }), D || w({ nodes: [] });
  }
  function x(A) {
    const D = e.multiselectionKeyPressed;
    e.edges = e.edges.map((_) => {
      const N = A.includes(_.id), $ = D && _.selected || N;
      return !!_.selected !== $ ? { ..._, selected: $ } : _;
    }), D || w({ edges: [] });
  }
  function P(A, D, _) {
    const N = e.nodeLookup.get(A);
    if (!N) {
      console.warn("012", Pi.error012(A));
      return;
    }
    e.selectionRect = null, e.selectionRectMode = null, N.selected ? (D || N.selected && e.multiselectionKeyPressed) && (w({ nodes: [N], edges: [] }), requestAnimationFrame(() => _?.blur())) : b([A]);
  }
  function C(A) {
    const D = e.edgeLookup.get(A);
    if (!D) {
      console.warn("012", Pi.error012(A));
      return;
    }
    (D.selectable || e.elementsSelectable && typeof D.selectable > "u") && (e.selectionRect = null, e.selectionRectMode = null, D.selected ? D.selected && e.multiselectionKeyPressed && w({ nodes: [], edges: [D] }) : x([A]));
  }
  function k(A, D) {
    const { nodeExtent: _, snapGrid: N, nodeOrigin: $, nodeLookup: O, nodesDraggable: z, onerror: j } = e, q = /* @__PURE__ */ new Map(), G = N?.[0] ?? 5, T = N?.[1] ?? 5, U = A.x * G * D, te = A.y * T * D;
    for (const B of O.values()) {
      if (!(B.selected && (B.draggable || z && typeof B.draggable > "u")))
        continue;
      let Z = {
        x: B.internals.positionAbsolute.x + U,
        y: B.internals.positionAbsolute.y + te
      };
      N && (Z = Zi(Z, N));
      const { position: W, positionAbsolute: J } = Qf({
        nodeId: B.id,
        nextPosition: Z,
        nodeLookup: O,
        nodeExtent: _,
        nodeOrigin: $,
        onError: j
      });
      B.position = W, B.internals.positionAbsolute = J, q.set(B.id, B);
    }
    i(q);
  }
  function E(A) {
    return N2({
      delta: A,
      panZoom: e.panZoom,
      transform: [e.viewport.x, e.viewport.y, e.viewport.zoom],
      translateExtent: e.translateExtent,
      width: e.width,
      height: e.height
    });
  }
  const V = (A) => {
    e._connection = { ...A };
  };
  function I() {
    e._connection = _l;
  }
  function L() {
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
    handleNodeSelection: P,
    handleEdgeSelection: C,
    moveSelectedNodes: k,
    panBy: E,
    updateConnection: V,
    cancelConnection: I,
    reset: L
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
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnScrollMode", 7), o = g(e, "preventScrolling", 7), i = g(e, "zoomOnScroll", 7), s = g(e, "zoomOnDoubleClick", 7), a = g(e, "zoomOnPinch", 7), l = g(e, "panOnDrag", 7), u = g(e, "panOnScroll", 7), d = g(e, "panOnScrollSpeed", 7), h = g(e, "paneClickDistance", 7), f = g(e, "selectionOnDrag", 7), v = g(e, "onmovestart", 7), m = g(e, "onmove", 7), y = g(e, "onmoveend", 7), w = g(e, "oninit", 7), b = g(e, "children", 7), x = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), P = /* @__PURE__ */ S(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let k = !1;
  Fe(() => {
    !k && n().viewportInitialized && (w()?.(), k = !0);
  });
  var E = {
    get store() {
      return n();
    },
    set store(L) {
      n(L), p();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(L) {
      r(L), p();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(L) {
      o(L), p();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(L) {
      i(L), p();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(L) {
      s(L), p();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(L) {
      a(L), p();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(L) {
      l(L), p();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(L) {
      u(L), p();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(L) {
      d(L), p();
    },
    get paneClickDistance() {
      return h();
    },
    set paneClickDistance(L) {
      h(L), p();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(L) {
      f(L), p();
    },
    get onmovestart() {
      return v();
    },
    set onmovestart(L) {
      v(L), p();
    },
    get onmove() {
      return m();
    },
    set onmove(L) {
      m(L), p();
    },
    get onmoveend() {
      return y();
    },
    set onmoveend(L) {
      y(L), p();
    },
    get oninit() {
      return w();
    },
    set oninit(L) {
      w(L), p();
    },
    get children() {
      return b();
    },
    set children(L) {
      b(L), p();
    }
  }, V = fx(), I = Y(V);
  return Te(I, b), X(V), Ft(V, (L, A) => hx?.(L, A), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
    onDraggingChange: (L) => {
      n(n().dragging = L, !0);
    },
    setPanZoomInstance: (L) => {
      n(n().panZoom = L, !0);
    },
    onPanZoomStart: v(),
    onPanZoom: m(),
    onPanZoomEnd: y(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(P),
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
    onTransformChange: (L) => {
      n(n().viewport = { x: L[0], y: L[1], zoom: L[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), M(t, V), ue(E);
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
function Cd(t, e) {
  return (n) => {
    n.target === e && t?.(n);
  };
}
function $d(t) {
  return (e) => {
    const n = t.has(e.id);
    return !!e.selected !== n ? { ...e, selected: n } : e;
  };
}
function Sd(t, e) {
  if (t.size !== e.size)
    return !1;
  for (const n of t)
    if (!e.has(n))
      return !1;
  return !0;
}
var px = /* @__PURE__ */ re("<div><!></div>");
function Ap(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "panOnDrag", 7, !0), o = g(e, "paneClickDistance", 7, 1), i = g(e, "selectionOnDrag", 7), s = g(e, "onpaneclick", 7), a = g(e, "onpanecontextmenu", 7), l = g(e, "onselectionstart", 7), u = g(e, "onselectionend", 7), d = g(e, "children", 7), h, f = null, v = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ S(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(y) !== !0), b = /* @__PURE__ */ S(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), x = !1;
  function P(O) {
    if (f = h?.getBoundingClientRect(), !f) return;
    const z = O.target === h, j = !z && !!O.target.closest(".nokey"), q = i() && z || n().selectionKeyPressed;
    if (j || !c(w) || !q || O.button !== 0 || !O.isPrimary)
      return;
    O.target?.setPointerCapture?.(O.pointerId), x = !1;
    const { x: G, y: T } = Tn(O, f);
    n(n().selectionRect = { width: 0, height: 0, startX: G, startY: T, x: G, y: T }, !0), z || (O.stopPropagation(), O.preventDefault());
  }
  function C(O) {
    if (!c(w) || !f || !n().selectionRect)
      return;
    const z = Tn(O, f), { startX: j = 0, startY: q = 0 } = n().selectionRect;
    if (!x) {
      const B = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(z.x - j, z.y - q) <= B)
        return;
      n().unselectNodesAndEdges(), l()?.(O);
    }
    x = !0;
    const G = {
      ...n().selectionRect,
      x: z.x < j ? z.x : j,
      y: z.y < q ? z.y : q,
      width: Math.abs(z.x - j),
      height: Math.abs(z.y - q)
    }, T = v, U = m;
    v = new Set(zu(
      n().nodeLookup,
      G,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Xs.Partial,
      !0
    ).map((B) => B.id));
    const te = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const B of v) {
      const Z = n().connectionLookup.get(B);
      if (Z)
        for (const { edgeId: W } of Z.values()) {
          const J = n().edgeLookup.get(W);
          J && (J.selectable ?? te) && m.add(W);
        }
    }
    Sd(T, v) || n(n().nodes = n().nodes.map($d(v)), !0), Sd(U, m) || n(n().edges = n().edges.map($d(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = G, !0);
  }
  function k(O) {
    O.button === 0 && (O.target?.releasePointerCapture?.(O.pointerId), !x && O.target === h && I?.(O), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = v.size > 0 ? "nodes" : null, !0), x && u()?.(O));
  }
  const E = (O) => {
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
  var L = {
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
  }, A = px();
  let D;
  var _ = /* @__PURE__ */ S(() => c(b) ? void 0 : Cd(I, h));
  A.__click = function(...O) {
    c(_)?.apply(this, O);
  }, A.__pointermove = function(...O) {
    (c(b) ? C : void 0)?.apply(this, O);
  }, A.__pointerup = function(...O) {
    (c(b) ? k : void 0)?.apply(this, O);
  };
  var N = /* @__PURE__ */ S(() => Cd(E, h));
  A.__contextmenu = function(...O) {
    c(N)?.apply(this, O);
  };
  var $ = Y(A);
  return Te($, d), X(A), Kt(A, (O) => h = O, () => h), ze((O) => D = un(A, 1, "svelte-flow__pane svelte-flow__container", null, D, O), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), Hs(
    "pointerdown",
    A,
    function(...O) {
      (c(b) ? P : void 0)?.apply(this, O);
    },
    !0
  ), Hs(
    "click",
    A,
    function(...O) {
      (c(b) ? V : void 0)?.apply(this, O);
    },
    !0
  ), M(t, A), ue(L);
}
xo(["click", "pointermove", "pointerup", "contextmenu"]);
se(
  Ap,
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
function Dp(t, e) {
  le(e, !0);
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
  return Te(a, r), X(i), ze(() => s = Bt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), M(t, i), ue(o);
}
se(Dp, { store: {}, children: {} }, [], [], !0);
function Vp(t, e) {
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
function Ip(t, e) {
  le(e, !0), it(t, yx);
  let n = g(e, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(h) {
      n(h), p();
    }
  }, o = mx(), i = ee(o), s = Y(i, !0);
  X(i);
  var a = R(i, 2), l = Y(a, !0);
  X(a);
  var u = R(a, 2);
  {
    var d = (h) => {
      var f = vx(), v = Y(f, !0);
      X(f), ze(() => {
        Ne(f, "id", `${wx}-${n().flowId}`), ht(v, n().ariaLiveMessage);
      }), M(h, f);
    };
    ae(u, (h) => {
      n().disableKeyboardA11y || h(d);
    });
  }
  return ze(() => {
    Ne(i, "id", `${Hp}-${n().flowId}`), ht(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Ne(a, "id", `${Lp}-${n().flowId}`), ht(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), M(t, o), ue(r);
}
se(Ip, { store: {} }, [], [], !0);
const Hp = "svelte-flow__node-desc", Lp = "svelte-flow__edge-desc", wx = "svelte-flow__aria-live";
var bx = /* @__PURE__ */ re("<div><!></div>");
function Rp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "node", 7), o = g(e, "resizeObserver", 7), i = g(e, "nodeClickDistance", 7), s = g(e, "onnodeclick", 7), a = g(e, "onnodedrag", 7), l = g(e, "onnodedragstart", 7), u = g(e, "onnodedragstop", 7), d = g(e, "onnodepointerenter", 7), h = g(e, "onnodepointerleave", 7), f = g(e, "onnodepointermove", 7), v = g(e, "onnodecontextmenu", 7), m = /* @__PURE__ */ S(() => Yt(r().data, () => ({}), !0)), y = /* @__PURE__ */ S(() => Yt(r().selected, !1)), w = /* @__PURE__ */ S(() => r().draggable), b = /* @__PURE__ */ S(() => r().selectable), x = /* @__PURE__ */ S(() => Yt(r().deletable, !0)), P = /* @__PURE__ */ S(() => r().connectable), C = /* @__PURE__ */ S(() => r().focusable), k = /* @__PURE__ */ S(() => Yt(r().hidden, !1)), E = /* @__PURE__ */ S(() => Yt(r().dragging, !1)), V = /* @__PURE__ */ S(() => Yt(r().style, "")), I = /* @__PURE__ */ S(() => r().class), L = /* @__PURE__ */ S(() => Yt(r().type, "default")), A = /* @__PURE__ */ S(() => r().parentId), D = /* @__PURE__ */ S(() => r().sourcePosition), _ = /* @__PURE__ */ S(() => r().targetPosition), N = /* @__PURE__ */ S(() => Yt(r().measured, () => ({ width: 0, height: 0 }), !0).width), $ = /* @__PURE__ */ S(() => Yt(r().measured, () => ({ width: 0, height: 0 }), !0).height), O = /* @__PURE__ */ S(() => r().initialWidth), z = /* @__PURE__ */ S(() => r().initialHeight), j = /* @__PURE__ */ S(() => r().width), q = /* @__PURE__ */ S(() => r().height), G = /* @__PURE__ */ S(() => r().dragHandle), T = /* @__PURE__ */ S(() => Yt(r().internals.z, 0)), U = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), te = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), B = /* @__PURE__ */ S(() => r().internals.userNode), { id: Z } = r(), W = /* @__PURE__ */ S(() => c(w) ?? n().nodesDraggable), J = /* @__PURE__ */ S(() => c(b) ?? n().elementsSelectable), oe = /* @__PURE__ */ S(() => c(P) ?? n().nodesConnectable), H = /* @__PURE__ */ S(() => rp(r())), ne = /* @__PURE__ */ S(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ S(() => c(H) && c(ne)), ce = /* @__PURE__ */ S(() => c(C) ?? n().nodesFocusable);
  function ie(me) {
    return n().parentLookup.has(me);
  }
  let de = /* @__PURE__ */ S(() => ie(Z)), ye = /* @__PURE__ */ we(null), ke = null, be = c(L), he = c(D), Ce = c(_), De = /* @__PURE__ */ S(() => n().nodeTypes[c(L)] ?? Hu), Q = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  lo("svelteflow__node_connectable", {
    get value() {
      return c(oe);
    }
  }), lo("svelteflow__node_id", Z);
  let Ve = /* @__PURE__ */ S(() => {
    const me = c(N) === void 0 ? c(j) ?? c(O) : c(j), Me = c($) === void 0 ? c(q) ?? c(z) : c(q);
    if (!(me === void 0 && Me === void 0 && c(V) === void 0))
      return `${c(V)};${me ? `width:${Qn(me)};` : ""}${Me ? `height:${Qn(Me)};` : ""}`;
  });
  Fe(() => {
    (c(L) !== be || c(D) !== he || c(_) !== Ce) && c(ye) !== null && requestAnimationFrame(() => {
      c(ye) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[Z, { id: Z, nodeElement: c(ye), force: !0 }]]));
    }), be = c(L), he = c(D), Ce = c(_);
  }), Fe(() => {
    o() && (!c(ge) || c(ye) !== ke) && (ke && o().unobserve(ke), c(ye) && o().observe(c(ye)), ke = c(ye));
  }), Ri(() => {
    ke && o()?.unobserve(ke);
  });
  function Ie(me) {
    c(J) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(Z), s()?.({ node: c(B), event: me });
  }
  function Be(me) {
    if (!(sp(me) || n().disableKeyboardA11y))
      if (Gf.includes(me.key) && c(J)) {
        const Me = me.key === "Escape";
        n().handleNodeSelection(Z, Me, c(ye));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(Us, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = c(Q)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Us[me.key], me.shiftKey ? 4 : 1));
  }
  const Re = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ye)?.matches(":focus-visible"))
      return;
    const { width: me, height: Me, viewport: ft } = n();
    zu(/* @__PURE__ */ new Map([[Z, r()]]), { x: 0, y: 0, width: me, height: Me }, [ft.x, ft.y, ft.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ft.zoom });
  };
  var Xe = {
    get store() {
      return n();
    },
    set store(me) {
      n(me), p();
    },
    get node() {
      return r();
    },
    set node(me) {
      r(me), p();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(me) {
      o(me), p();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(me) {
      i(me), p();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(me) {
      s(me), p();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(me) {
      a(me), p();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(me) {
      l(me), p();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(me) {
      u(me), p();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(me) {
      d(me), p();
    },
    get onnodepointerleave() {
      return h();
    },
    set onnodepointerleave(me) {
      h(me), p();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(me) {
      f(me), p();
    },
    get onnodecontextmenu() {
      return v();
    },
    set onnodecontextmenu(me) {
      v(me), p();
    }
  }, wt = fe(), Pt = ee(wt);
  {
    var at = (me) => {
      var Me = bx();
      ot(Me, () => ({
        "data-id": Z,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(L)}`,
          c(I)
        ],
        style: c(Ve),
        onclick: Ie,
        onpointerenter: d() ? (Ye) => d()({ node: c(B), event: Ye }) : void 0,
        onpointerleave: h() ? (Ye) => h()({ node: c(B), event: Ye }) : void 0,
        onpointermove: f() ? (Ye) => f()({ node: c(B), event: Ye }) : void 0,
        oncontextmenu: v() ? (Ye) => v()({ node: c(B), event: Ye }) : void 0,
        onkeydown: c(ce) ? Be : void 0,
        onfocus: c(ce) ? Re : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Hp}-${n().flowId}`,
        ...r().domAttributes,
        [Mr]: {
          dragging: c(E),
          selected: c(y),
          draggable: c(W),
          connectable: c(oe),
          selectable: c(J),
          nopan: c(W),
          parent: c(de)
        },
        [Zn]: {
          "z-index": c(T),
          transform: `translate(${c(U) ?? ""}px, ${c(te) ?? ""}px)`,
          visibility: c(H) ? "visible" : "hidden"
        }
      }));
      var ft = Y(Me);
      It(ft, () => c(De), (Ye, pt) => {
        pt(Ye, {
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
            return c(D);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(T);
          },
          get dragging() {
            return c(E);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(G);
          },
          get parentId() {
            return c(A);
          },
          get type() {
            return c(L);
          },
          get isConnectable() {
            return c(oe);
          },
          get positionAbsoluteX() {
            return c(U);
          },
          get positionAbsoluteY() {
            return c(te);
          },
          get width() {
            return c(j);
          },
          get height() {
            return c(q);
          }
        });
      }), X(Me), Ft(Me, (Ye, pt) => Vp?.(Ye, pt), () => ({
        nodeId: Z,
        isSelectable: c(J),
        disabled: !c(W),
        handleSelector: c(G),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Ye, pt, xt, ct) => {
          a()?.({ event: Ye, targetNode: xt, nodes: ct });
        },
        onDragStart: (Ye, pt, xt, ct) => {
          l()?.({ event: Ye, targetNode: xt, nodes: ct });
        },
        onDragStop: (Ye, pt, xt, ct) => {
          u()?.({ event: Ye, targetNode: xt, nodes: ct });
        },
        store: n()
      })), Kt(Me, (Ye) => F(ye, Ye), () => c(ye)), M(me, Me);
    };
    ae(Pt, (me) => {
      c(k) || me(at);
    });
  }
  return M(t, wt), ue(Xe);
}
se(
  Rp,
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
function jp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "nodeClickDistance", 7), o = g(e, "onnodeclick", 7), i = g(e, "onnodecontextmenu", 7), s = g(e, "onnodepointerenter", 7), a = g(e, "onnodepointermove", 7), l = g(e, "onnodepointerleave", 7), u = g(e, "onnodedrag", 7), d = g(e, "onnodedragstart", 7), h = g(e, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      w.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Ri(() => {
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
    Rp(y, {
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
  }), X(m), M(t, m), ue(v);
}
se(
  jp,
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
function Bp(t, e) {
  le(e, !0);
  const n = g(e, "edge", 7), r = g(e, "store", 15), o = g(e, "onedgeclick", 7), i = g(e, "onedgecontextmenu", 7), s = g(e, "onedgepointerenter", 7), a = g(e, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), u = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), h = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), v = /* @__PURE__ */ S(() => n().targetY), m = /* @__PURE__ */ S(() => n().sourcePosition), y = /* @__PURE__ */ S(() => n().targetPosition), w = /* @__PURE__ */ S(() => Yt(n().animated, !1)), b = /* @__PURE__ */ S(() => Yt(n().selected, !1)), x = /* @__PURE__ */ S(() => n().label), P = /* @__PURE__ */ S(() => n().labelStyle), C = /* @__PURE__ */ S(() => Yt(n().data, () => ({}), !0)), k = /* @__PURE__ */ S(() => n().style), E = /* @__PURE__ */ S(() => n().interactionWidth), V = /* @__PURE__ */ S(() => Yt(n().type, "default")), I = /* @__PURE__ */ S(() => n().sourceHandle), L = /* @__PURE__ */ S(() => n().targetHandle), A = /* @__PURE__ */ S(() => n().markerStart), D = /* @__PURE__ */ S(() => n().markerEnd), _ = /* @__PURE__ */ S(() => n().selectable), N = /* @__PURE__ */ S(() => n().focusable), $ = /* @__PURE__ */ S(() => Yt(n().deletable, !0)), O = /* @__PURE__ */ S(() => n().hidden), z = /* @__PURE__ */ S(() => n().zIndex), j = /* @__PURE__ */ S(() => n().class), q = /* @__PURE__ */ S(() => n().ariaLabel), G = null;
  const { id: T } = n();
  lo("svelteflow__edge_id", T);
  let U = /* @__PURE__ */ S(() => c(_) ?? r().elementsSelectable), te = /* @__PURE__ */ S(() => c(N) ?? r().edgesFocusable), B = /* @__PURE__ */ S(() => r().edgeTypes[c(V)] ?? Lu), Z = /* @__PURE__ */ S(() => c(A) ? `url('#${Ol(c(A), r().flowId)}')` : void 0), W = /* @__PURE__ */ S(() => c(D) ? `url('#${Ol(c(D), r().flowId)}')` : void 0);
  function J(de) {
    const ye = r().edgeLookup.get(T);
    ye && (c(U) && r().handleEdgeSelection(T), o()?.({ event: de, edge: ye }));
  }
  function oe(de, ye) {
    const ke = r().edgeLookup.get(T);
    ke && ye({ event: de, edge: ke });
  }
  function H(de) {
    if (!r().disableKeyboardA11y && Gf.includes(de.key) && c(U)) {
      const { unselectNodesAndEdges: ye, addSelectedEdges: ke } = r();
      de.key === "Escape" ? (G?.blur(), ye({ edges: [n()] })) : ke([T]);
    }
  }
  var ne = {
    get edge() {
      return n();
    },
    set edge(de) {
      n(de), p();
    },
    get store() {
      return r();
    },
    set store(de) {
      r(de), p();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(de) {
      o(de), p();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(de) {
      i(de), p();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(de) {
      s(de), p();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(de) {
      a(de), p();
    }
  }, ge = fe(), ce = ee(ge);
  {
    var ie = (de) => {
      var ye = kx();
      let ke;
      var be = Y(ye);
      ot(be, () => ({
        class: ["svelte-flow__edge", c(j)],
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
        "aria-describedby": c(te) ? `${Lp}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(te) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(te) ? H : void 0,
        tabindex: c(te) ? 0 : void 0,
        ...n().domAttributes,
        [Mr]: {
          animated: c(w),
          selected: c(b),
          selectable: c(U)
        }
      }));
      var he = Y(be);
      It(he, () => c(B), (Ce, De) => {
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
            return c(P);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(k);
          },
          get interactionWidth() {
            return c(E);
          },
          get selectable() {
            return c(U);
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
            return c(L);
          },
          get markerStart() {
            return c(Z);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), X(be), Kt(be, (Ce) => G = Ce, () => G), X(ye), ze(() => ke = Bt(ye, "", ke, { "z-index": c(z) })), M(de, ye);
    };
    ae(ce, (de) => {
      c(O) || de(ie);
    });
  }
  return M(t, ge), ue(ne);
}
se(
  Bp,
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
function Kp(t, e) {
  le(e, !1);
  const n = Rn();
  Cu();
  var r = Cx();
  At(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Fp(o, Ze(() => c(i)));
  }), X(r), M(t, r), ue();
}
se(Kp, {}, [], [], !0);
var $x = /* @__PURE__ */ _e('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Sx = /* @__PURE__ */ _e('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), _x = /* @__PURE__ */ _e('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Fp(t, e) {
  le(e, !0);
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
      ze(() => {
        Ne(w, "stroke-width", u()), b = Bt(w, "", b, { stroke: l() });
      }), M(y, w);
    }, m = (y) => {
      var w = fe(), b = ee(w);
      {
        var x = (P) => {
          var C = Sx();
          let k;
          ze(() => {
            Ne(C, "stroke-width", u()), k = Bt(C, "", k, { stroke: l(), fill: l() });
          }), M(P, C);
        };
        ae(
          b,
          (P) => {
            r() === Oi.ArrowClosed && P(x);
          },
          !0
        );
      }
      M(y, w);
    };
    ae(f, (y) => {
      r() === Oi.Arrow ? y(v) : y(m, !1);
    });
  }
  return X(h), ze(() => {
    Ne(h, "id", n()), Ne(h, "markerWidth", `${o()}`), Ne(h, "markerHeight", `${i()}`), Ne(h, "markerUnits", s()), Ne(h, "orient", a());
  }), M(t, h), ue(d);
}
se(
  Fp,
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
var Px = /* @__PURE__ */ re('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Zp(t, e) {
  le(e, !0);
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
  }, l = Px(), u = Y(l), d = Y(u);
  Kp(d, {}), X(u);
  var h = R(u, 2);
  return At(h, 17, () => n().visible.edges.values(), (f) => f.id, (f, v) => {
    Bp(f, {
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
  }), X(l), M(t, l), ue(a);
}
se(
  Zp,
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
const Ex = {
  hash: "svelte-1rrpn9s",
  code: ".svelte-flow__selection.svelte-1rrpn9s {position:absolute;top:0;left:0;}"
};
function Ru(t, e) {
  le(e, !0), it(t, Ex);
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
  }, l = fe(), u = ee(l);
  {
    var d = (h) => {
      var f = Ox();
      let v;
      ze((m) => v = Bt(f, "", v, m), [
        () => ({
          width: typeof o() == "string" ? o() : Qn(o()),
          height: typeof i() == "string" ? i() : Qn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), M(h, f);
    };
    ae(u, (h) => {
      s() && h(d);
    });
  }
  return M(t, l), ue(a);
}
se(Ru, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var Nx = /* @__PURE__ */ re("<div><!></div>");
const Tx = {
  hash: "svelte-ceq0zw",
  code: `.svelte-flow__selection-wrapper.svelte-ceq0zw {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-ceq0zw:focus,
  .svelte-flow__selection-wrapper.svelte-ceq0zw:focus-visible {outline:none;}`
};
function Wp(t, e) {
  le(e, !0), it(t, Tx);
  let n = g(e, "store", 15), r = g(e, "onnodedrag", 7), o = g(e, "onnodedragstart", 7), i = g(e, "onnodedragstop", 7), s = g(e, "onselectionclick", 7), a = g(e, "onselectioncontextmenu", 7), l = /* @__PURE__ */ we(void 0);
  Fe(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ S(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Fi(n().nodeLookup, { filter: (x) => !!x.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const x = n().nodes.filter((P) => P.selected);
    a()?.({ nodes: x, event: b });
  }
  function h(b) {
    const x = n().nodes.filter((P) => P.selected);
    s()?.({ nodes: x, event: b });
  }
  function f(b) {
    Object.prototype.hasOwnProperty.call(Us, b.key) && (b.preventDefault(), n().moveSelectedNodes(Us[b.key], b.shiftKey ? 4 : 1));
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
  }, m = fe(), y = ee(m);
  {
    var w = (b) => {
      var x = Nx();
      x.__contextmenu = d, x.__click = h, x.__keydown = function(...k) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, k);
      };
      let P;
      var C = Y(x);
      Ru(C, { width: "100%", height: "100%", x: 0, y: 0 }), X(x), Ft(x, (k, E) => Vp?.(k, E), () => ({
        disabled: !1,
        store: n(),
        onDrag: (k, E, V, I) => {
          r()?.({ event: k, targetNode: null, nodes: I });
        },
        onDragStart: (k, E, V, I) => {
          o()?.({ event: k, targetNode: null, nodes: I });
        },
        onDragStop: (k, E, V, I) => {
          i()?.({ event: k, targetNode: null, nodes: I });
        }
      })), Kt(x, (k) => F(l, k), () => c(l)), ze(
        (k) => {
          un(x, 1, Or(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-ceq0zw"), Ne(x, "role", n().disableKeyboardA11y ? void 0 : "button"), Ne(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), P = Bt(x, "", P, k);
        },
        [
          () => ({
            width: Qn(c(u).width),
            height: Qn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), M(b, x);
    };
    ae(y, (b) => {
      n().selectionRectMode === "nodes" && c(u) && hr(c(u).x) && hr(c(u).y) && b(w);
    });
  }
  return M(t, m), ue(v);
}
xo(["contextmenu", "click", "keydown"]);
se(
  Wp,
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
function Bn(t, e) {
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
          let P = !1;
          for (const C of x)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (k, E) => k | zx(E),
              0
            ) === u) {
              P = !0;
              break;
            }
          if (!P) continue;
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
  const t = /* @__PURE__ */ S(Rn), e = (i) => {
    const s = xd(i) ? i : c(t).nodeLookup.get(i.id), a = s.parentId ? s2(s.position, s.measured, s.parentId, c(t).nodeLookup, c(t).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Bo(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(t).nodes = yt(() => c(t).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && xd(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(t).nodes : _d(c(t).nodeLookup, i),
    getEdge: (i) => c(t).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(t).edges : _d(c(t).edgeLookup, i),
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
    getViewport: () => hu(c(t).viewport),
    setCenter: async (i, s, a) => c(t).setCenter(i, s, a),
    fitView: (i) => c(t).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(t).panZoom)
        return Promise.resolve(!1);
      const a = Mu(i, c(t).width, c(t).height, c(t).minZoom, c(t).maxZoom, s?.padding ?? 0.1);
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
      const l = ud(i), u = l ? i : e(i);
      return u ? (a || c(t).nodes).filter((d) => {
        const h = c(t).nodeLookup.get(d.id);
        if (!h || !l && d.id === i.id)
          return !1;
        const f = Bo(h), v = Ei(f, u);
        return s && v > 0 || v >= f.width * f.height || v >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = ud(i) ? i : e(i);
      if (!l)
        return !1;
      const u = Ei(l, s);
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
      return Wi(v, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(t).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(t).viewport, { x: u, y: d } = c(t).domNode.getBoundingClientRect(), h = Ys(i, [s, a, l]);
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
function _d(t, e) {
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
function Xp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "selectionKey", 7, "Shift"), o = g(e, "multiSelectionKey", 23, () => no() ? "Meta" : "Control"), i = g(e, "deleteKey", 7, "Backspace"), s = g(e, "panActivationKey", 7, " "), a = g(e, "zoomActivationKey", 23, () => no() ? "Meta" : "Control"), { deleteElements: l } = Dt();
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
      const P = h(x);
      return {
        key: P,
        modifier: d(x),
        enabled: P !== null,
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
    set multiSelectionKey(w = no() ? "Meta" : "Control") {
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
    set zoomActivationKey(w = no() ? "Meta" : "Control") {
      a(w), p();
    }
  };
  return Hs("blur", nn, v), Hs("contextmenu", nn, v), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !sp(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ft(nn, (w, b) => Bn?.(w, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ue(y);
}
se(
  Xp,
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
var Mx = /* @__PURE__ */ _e('<path fill="none" class="svelte-flow__connection-path"></path>'), Ax = /* @__PURE__ */ _e('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function qp(t, e) {
  le(e, !0);
  let n = g(e, "store", 15), r = g(e, "type", 7), o = g(e, "containerStyle", 7), i = g(e, "style", 7), s = g(e, "LineComponent", 7), a = /* @__PURE__ */ S(() => {
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
      case cr.Bezier: {
        const [v] = lp(f);
        return v;
      }
      case cr.Straight: {
        const [v] = cp(f);
        return v;
      }
      case cr.Step:
      case cr.SmoothStep: {
        const [v] = Au({
          ...f,
          borderRadius: r() === cr.Step ? 0 : void 0
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
  }, u = fe(), d = ee(u);
  {
    var h = (f) => {
      var v = Ax(), m = Y(v), y = Y(m);
      {
        var w = (x) => {
          var P = fe(), C = ee(P);
          It(C, s, (k, E) => {
            E(k, {});
          }), M(x, P);
        }, b = (x) => {
          var P = Mx();
          ze(() => {
            Ne(P, "d", c(a)), Bt(P, i());
          }), M(x, P);
        };
        ae(y, (x) => {
          s() ? x(w) : x(b, !1);
        });
      }
      X(m), X(v), ze(
        (x) => {
          Ne(v, "width", n().width), Ne(v, "height", n().height), Bt(v, o()), un(m, 0, x);
        },
        [
          () => Or([
            "svelte-flow__connection",
            Ub(n().connection.isValid)
          ])
        ]
      ), M(f, v);
    };
    ae(d, (f) => {
      n().connection.inProgress && f(h);
    });
  }
  return M(t, u), ue(l);
}
se(
  qp,
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
function qi(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "top-right"), r = g(e, "style", 7), o = g(e, "class", 7), i = g(e, "children", 7), s = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
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
  return Te(d, () => i() ?? We), X(u), M(t, u), ue(l);
}
se(qi, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Vx = /* @__PURE__ */ re('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Yp(t, e) {
  le(e, !0);
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
  }, i = fe(), s = ee(i);
  {
    var a = (l) => {
      qi(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var h = Vx();
          M(u, h);
        },
        $$slots: { default: !0 }
      });
    };
    ae(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return M(t, i), ue(o);
}
se(Yp, { proOptions: {}, position: {} }, [], [], !0);
var Ix = /* @__PURE__ */ re("<div><!></div>");
const Hx = {
  hash: "svelte-152mfj7",
  code: ".svelte-flow.svelte-152mfj7 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Up(t, e) {
  le(e, !0), it(t, Hx);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "colorMode", 7), i = g(e, "domNode", 15), s = g(e, "clientWidth", 15), a = g(e, "clientHeight", 15), l = g(e, "children", 7), u = g(e, "rest", 7), d = /* @__PURE__ */ S(() => u().class), h = /* @__PURE__ */ S(() => V1(u(), [
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
      [Zn]: w
    }),
    [
      () => ({ width: Qn(n()), height: Qn(r()) })
    ],
    void 0,
    void 0,
    "svelte-152mfj7"
  );
  var y = Y(m);
  return Te(y, () => l() ?? We), X(m), Kt(m, (w) => i(w), () => i()), Lc(m, "clientHeight", a), Lc(m, "clientWidth", s), M(t, m), ue(v);
}
se(
  Up,
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
var Lx = /* @__PURE__ */ re('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Rx = /* @__PURE__ */ re("<!> <!>", 1), jx = /* @__PURE__ */ re("<!> <!> <!> <!> <!>", 1);
function Gp(t, e) {
  le(e, !0);
  let n = g(e, "width", 7), r = g(e, "height", 7), o = g(e, "proOptions", 7), i = g(e, "selectionKey", 7), s = g(e, "deleteKey", 7), a = g(e, "panActivationKey", 7), l = g(e, "multiSelectionKey", 7), u = g(e, "zoomActivationKey", 7), d = g(e, "paneClickDistance", 7, 1), h = g(e, "nodeClickDistance", 7, 1), f = g(e, "onmovestart", 7), v = g(e, "onmoveend", 7), m = g(e, "onmove", 7), y = g(e, "oninit", 7), w = g(e, "onnodeclick", 7), b = g(e, "onnodecontextmenu", 7), x = g(e, "onnodedrag", 7), P = g(e, "onnodedragstart", 7), C = g(e, "onnodedragstop", 7), k = g(e, "onnodepointerenter", 7), E = g(e, "onnodepointermove", 7), V = g(e, "onnodepointerleave", 7), I = g(e, "onselectionclick", 7), L = g(e, "onselectioncontextmenu", 7), A = g(e, "onselectionstart", 7), D = g(e, "onselectionend", 7), _ = g(e, "onedgeclick", 7), N = g(e, "onedgecontextmenu", 7), $ = g(e, "onedgepointerenter", 7), O = g(e, "onedgepointerleave", 7), z = g(e, "onpaneclick", 7), j = g(e, "onpanecontextmenu", 7), q = g(e, "panOnScrollMode", 23, () => so.Free), G = g(e, "preventScrolling", 7, !0), T = g(e, "zoomOnScroll", 7, !0), U = g(e, "zoomOnDoubleClick", 7, !0), te = g(e, "zoomOnPinch", 7, !0), B = g(e, "panOnScroll", 7, !1), Z = g(e, "panOnScrollSpeed", 7, 0.5), W = g(e, "panOnDrag", 7, !0), J = g(e, "selectionOnDrag", 7, !1), oe = g(e, "connectionLineComponent", 7), H = g(e, "connectionLineStyle", 7), ne = g(e, "connectionLineContainerStyle", 7), ge = g(e, "connectionLineType", 23, () => cr.Bezier), ce = g(e, "attributionPosition", 7), ie = g(e, "children", 7), de = g(e, "nodes", 31, () => $t([])), ye = g(e, "edges", 31, () => $t([])), ke = g(e, "viewport", 31, () => {
  }), be = /* @__PURE__ */ je(e, [
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
  ]), he = zp({
    props: be,
    width: n(),
    height: r(),
    get nodes() {
      return de();
    },
    set nodes(Q) {
      de(Q);
    },
    get edges() {
      return ye();
    },
    set edges(Q) {
      ye(Q);
    },
    get viewport() {
      return ke();
    },
    set viewport(Q) {
      ke(Q);
    }
  });
  const Ce = Dn(Gs);
  Ce && Ce.setStore && Ce.setStore(he), lo(Gs, {
    provider: !1,
    getStore() {
      return he;
    }
  }), Fe(() => {
    const Q = { nodes: he.selectedNodes, edges: he.selectedEdges };
    yt(() => e.onselectionchange)?.(Q);
    for (const Ve of he.selectionChangeHandlers.values())
      Ve(Q);
  }), Ri(() => {
    he.reset();
  });
  var De = {
    get width() {
      return n();
    },
    set width(Q) {
      n(Q), p();
    },
    get height() {
      return r();
    },
    set height(Q) {
      r(Q), p();
    },
    get proOptions() {
      return o();
    },
    set proOptions(Q) {
      o(Q), p();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(Q) {
      i(Q), p();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(Q) {
      s(Q), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(Q) {
      a(Q), p();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(Q) {
      l(Q), p();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(Q) {
      u(Q), p();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(Q = 1) {
      d(Q), p();
    },
    get nodeClickDistance() {
      return h();
    },
    set nodeClickDistance(Q = 1) {
      h(Q), p();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(Q) {
      f(Q), p();
    },
    get onmoveend() {
      return v();
    },
    set onmoveend(Q) {
      v(Q), p();
    },
    get onmove() {
      return m();
    },
    set onmove(Q) {
      m(Q), p();
    },
    get oninit() {
      return y();
    },
    set oninit(Q) {
      y(Q), p();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(Q) {
      w(Q), p();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(Q) {
      b(Q), p();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(Q) {
      x(Q), p();
    },
    get onnodedragstart() {
      return P();
    },
    set onnodedragstart(Q) {
      P(Q), p();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(Q) {
      C(Q), p();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(Q) {
      k(Q), p();
    },
    get onnodepointermove() {
      return E();
    },
    set onnodepointermove(Q) {
      E(Q), p();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(Q) {
      V(Q), p();
    },
    get onselectionclick() {
      return I();
    },
    set onselectionclick(Q) {
      I(Q), p();
    },
    get onselectioncontextmenu() {
      return L();
    },
    set onselectioncontextmenu(Q) {
      L(Q), p();
    },
    get onselectionstart() {
      return A();
    },
    set onselectionstart(Q) {
      A(Q), p();
    },
    get onselectionend() {
      return D();
    },
    set onselectionend(Q) {
      D(Q), p();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(Q) {
      _(Q), p();
    },
    get onedgecontextmenu() {
      return N();
    },
    set onedgecontextmenu(Q) {
      N(Q), p();
    },
    get onedgepointerenter() {
      return $();
    },
    set onedgepointerenter(Q) {
      $(Q), p();
    },
    get onedgepointerleave() {
      return O();
    },
    set onedgepointerleave(Q) {
      O(Q), p();
    },
    get onpaneclick() {
      return z();
    },
    set onpaneclick(Q) {
      z(Q), p();
    },
    get onpanecontextmenu() {
      return j();
    },
    set onpanecontextmenu(Q) {
      j(Q), p();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(Q = so.Free) {
      q(Q), p();
    },
    get preventScrolling() {
      return G();
    },
    set preventScrolling(Q = !0) {
      G(Q), p();
    },
    get zoomOnScroll() {
      return T();
    },
    set zoomOnScroll(Q = !0) {
      T(Q), p();
    },
    get zoomOnDoubleClick() {
      return U();
    },
    set zoomOnDoubleClick(Q = !0) {
      U(Q), p();
    },
    get zoomOnPinch() {
      return te();
    },
    set zoomOnPinch(Q = !0) {
      te(Q), p();
    },
    get panOnScroll() {
      return B();
    },
    set panOnScroll(Q = !1) {
      B(Q), p();
    },
    get panOnScrollSpeed() {
      return Z();
    },
    set panOnScrollSpeed(Q = 0.5) {
      Z(Q), p();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(Q = !0) {
      W(Q), p();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(Q = !1) {
      J(Q), p();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(Q) {
      oe(Q), p();
    },
    get connectionLineStyle() {
      return H();
    },
    set connectionLineStyle(Q) {
      H(Q), p();
    },
    get connectionLineContainerStyle() {
      return ne();
    },
    set connectionLineContainerStyle(Q) {
      ne(Q), p();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(Q = cr.Bezier) {
      ge(Q), p();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(Q) {
      ce(Q), p();
    },
    get children() {
      return ie();
    },
    set children(Q) {
      ie(Q), p();
    },
    get nodes() {
      return de();
    },
    set nodes(Q = []) {
      de(Q), p();
    },
    get edges() {
      return ye();
    },
    set edges(Q = []) {
      ye(Q), p();
    },
    get viewport() {
      return ke();
    },
    set viewport(Q = void 0) {
      ke(Q), p();
    }
  };
  return Up(t, {
    get colorMode() {
      return he.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return be;
    },
    get domNode() {
      return he.domNode;
    },
    set domNode(Q) {
      he.domNode = Q;
    },
    get clientWidth() {
      return he.width;
    },
    set clientWidth(Q) {
      he.width = Q;
    },
    get clientHeight() {
      return he.height;
    },
    set clientHeight(Q) {
      he.height = Q;
    },
    children: (Q, Ve) => {
      var Ie = jx(), Be = ee(Ie);
      Xp(Be, {
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
          return he;
        },
        set store(at) {
          he = at;
        }
      });
      var Re = R(Be, 2);
      Mp(Re, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return G();
        },
        get zoomOnScroll() {
          return T();
        },
        get zoomOnDoubleClick() {
          return U();
        },
        get zoomOnPinch() {
          return te();
        },
        get panOnScroll() {
          return B();
        },
        get panOnScrollSpeed() {
          return Z();
        },
        get panOnDrag() {
          return W();
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
          return he;
        },
        set store(at) {
          he = at;
        },
        children: (at, me) => {
          Ap(at, {
            get onpaneclick() {
              return z();
            },
            get onpanecontextmenu() {
              return j();
            },
            get onselectionstart() {
              return A();
            },
            get onselectionend() {
              return D();
            },
            get panOnDrag() {
              return W();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return he;
            },
            set store(Me) {
              he = Me;
            },
            children: (Me, ft) => {
              var Ye = Rx(), pt = ee(Ye);
              Dp(pt, {
                get store() {
                  return he;
                },
                set store(ct) {
                  he = ct;
                },
                children: (ct, Vt) => {
                  var vt = Lx(), lt = R(ee(vt), 2);
                  Zp(lt, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return N();
                    },
                    get onedgepointerenter() {
                      return $();
                    },
                    get onedgepointerleave() {
                      return O();
                    },
                    get store() {
                      return he;
                    },
                    set store(Xt) {
                      he = Xt;
                    }
                  });
                  var kt = R(lt, 4);
                  qp(kt, {
                    get type() {
                      return ge();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return ne();
                    },
                    get style() {
                      return H();
                    },
                    get store() {
                      return he;
                    },
                    set store(Xt) {
                      he = Xt;
                    }
                  });
                  var cn = R(kt, 2);
                  jp(cn, {
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
                      return E();
                    },
                    get onnodepointerleave() {
                      return V();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return P();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return he;
                    },
                    set store(Xt) {
                      he = Xt;
                    }
                  });
                  var ir = R(cn, 2);
                  Wp(ir, {
                    get onselectionclick() {
                      return I();
                    },
                    get onselectioncontextmenu() {
                      return L();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return P();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return he;
                    },
                    set store(Xt) {
                      he = Xt;
                    }
                  }), Oe(2), M(ct, vt);
                },
                $$slots: { default: !0 }
              });
              var xt = R(pt, 2);
              {
                let ct = /* @__PURE__ */ S(() => !!(he.selectionRect && he.selectionRectMode === "user")), Vt = /* @__PURE__ */ S(() => he.selectionRect?.width), vt = /* @__PURE__ */ S(() => he.selectionRect?.height), lt = /* @__PURE__ */ S(() => he.selectionRect?.x), kt = /* @__PURE__ */ S(() => he.selectionRect?.y);
                Ru(xt, {
                  get isVisible() {
                    return c(ct);
                  },
                  get width() {
                    return c(Vt);
                  },
                  get height() {
                    return c(vt);
                  },
                  get x() {
                    return c(lt);
                  },
                  get y() {
                    return c(kt);
                  }
                });
              }
              M(Me, Ye);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Xe = R(Re, 2);
      Yp(Xe, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var wt = R(Xe, 2);
      Ip(wt, {
        get store() {
          return he;
        }
      });
      var Pt = R(wt, 2);
      Te(Pt, () => ie() ?? We), M(Q, Ie);
    },
    $$slots: { default: !0 }
  }), ue(De);
}
se(
  Gp,
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
function Jp(t, e) {
  le(e, !0);
  let n = g(e, "children", 7), r = /* @__PURE__ */ we(zp({ props: {}, nodes: [], edges: [] }));
  lo(Gs, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      F(r, a);
    }
  }), Ri(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), p();
    }
  }, i = fe(), s = ee(i);
  return Te(s, () => n() ?? We), M(t, i), ue(o);
}
se(Jp, { children: {} }, [], [], !0);
var Bx = /* @__PURE__ */ re("<button><!></button>");
function di(t, e) {
  le(e, !0);
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
    [Zn]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var v = Y(f);
  return Te(v, () => u() ?? We), X(f), M(t, f), ue(h);
}
se(
  di,
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
function Qp(t) {
  var e = Kx();
  M(t, e);
}
se(Qp, {}, [], [], !0);
var Fx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function eg(t) {
  var e = Fx();
  M(t, e);
}
se(eg, {}, [], [], !0);
var Zx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function tg(t) {
  var e = Zx();
  M(t, e);
}
se(tg, {}, [], [], !0);
var Wx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ng(t) {
  var e = Wx();
  M(t, e);
}
se(ng, {}, [], [], !0);
var Xx = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function rg(t) {
  var e = Xx();
  M(t, e);
}
se(rg, {}, [], [], !0);
var qx = /* @__PURE__ */ re("<!> <!>", 1), Yx = /* @__PURE__ */ re("<!> <!> <!> <!> <!> <!>", 1);
function og(t, e) {
  le(e, !0);
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
  ]), P = /* @__PURE__ */ S(Rn);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: h(),
    colorHover: f(),
    borderColor: v()
  };
  let k = /* @__PURE__ */ S(() => c(P).nodesDraggable || c(P).nodesConnectable || c(P).elementsSelectable), E = /* @__PURE__ */ S(() => c(P).viewport.zoom <= c(P).minZoom), V = /* @__PURE__ */ S(() => c(P).viewport.zoom >= c(P).maxZoom), I = /* @__PURE__ */ S(() => c(P).ariaLabelConfig), L = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const A = () => {
    c(P).zoomIn();
  }, D = () => {
    c(P).zoomOut();
  }, _ = () => {
    c(P).fitView(m());
  }, N = () => {
    let O = !c(k);
    c(P).nodesDraggable = O, c(P).nodesConnectable = O, c(P).elementsSelectable = O;
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
    let O = /* @__PURE__ */ S(() => [
      "svelte-flow__controls",
      c(L),
      l()
    ]);
    qi(t, Ze(
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
        children: (z, j) => {
          var q = Yx(), G = ee(q);
          {
            var T = (ce) => {
              var ie = fe(), de = ee(ie);
              Te(de, w), M(ce, ie);
            };
            ae(G, (ce) => {
              w() && ce(T);
            });
          }
          var U = R(G, 2);
          {
            var te = (ce) => {
              var ie = qx(), de = ee(ie);
              di(de, Ze(
                {
                  onclick: A,
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
                  children: (ke, be) => {
                    Qp(ke);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ye = R(de, 2);
              di(ye, Ze(
                {
                  onclick: D,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(I)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(E);
                  }
                },
                () => C,
                {
                  children: (ke, be) => {
                    eg(ke);
                  },
                  $$slots: { default: !0 }
                }
              )), M(ce, ie);
            };
            ae(U, (ce) => {
              o() && ce(te);
            });
          }
          var B = R(U, 2);
          {
            var Z = (ce) => {
              di(ce, Ze(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: _,
                  get title() {
                    return c(I)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.fitView.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, de) => {
                    tg(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(B, (ce) => {
              i() && ce(Z);
            });
          }
          var W = R(B, 2);
          {
            var J = (ce) => {
              di(ce, Ze(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: N,
                  get title() {
                    return c(I)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(I)["controls.interactive.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, de) => {
                    var ye = fe(), ke = ee(ye);
                    {
                      var be = (Ce) => {
                        rg(Ce);
                      }, he = (Ce) => {
                        ng(Ce);
                      };
                      ae(ke, (Ce) => {
                        c(k) ? Ce(be) : Ce(he, !1);
                      });
                    }
                    M(ie, ye);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ae(W, (ce) => {
              s() && ce(J);
            });
          }
          var oe = R(W, 2);
          {
            var H = (ce) => {
              var ie = fe(), de = ee(ie);
              Te(de, y), M(ce, ie);
            };
            ae(oe, (ce) => {
              y() && ce(H);
            });
          }
          var ne = R(oe, 2);
          {
            var ge = (ce) => {
              var ie = fe(), de = ee(ie);
              Te(de, b), M(ce, ie);
            };
            ae(ne, (ce) => {
              b() && ce(ge);
            });
          }
          M(z, q);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return ue($);
}
se(
  og,
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
var fr;
(function(t) {
  t.Lines = "lines", t.Dots = "dots", t.Cross = "cross";
})(fr || (fr = {}));
var Ux = /* @__PURE__ */ _e("<circle></circle>");
function ig(t, e) {
  le(e, !0);
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
  }, i = Ux();
  return ze(() => {
    Ne(i, "cx", n()), Ne(i, "cy", n()), Ne(i, "r", n()), un(i, 0, Or(["svelte-flow__background-pattern", "dots", r()]));
  }), M(t, i), ue(o);
}
se(ig, { radius: {}, class: {} }, [], [], !0);
var Gx = /* @__PURE__ */ _e("<path></path>");
function sg(t, e) {
  le(e, !0);
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
  }, a = Gx();
  return ze(() => {
    Ne(a, "stroke-width", n()), Ne(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), un(a, 0, Or(["svelte-flow__background-pattern", o(), i()]));
  }), M(t, a), ue(s);
}
se(sg, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Jx = {
  [fr.Dots]: 1,
  [fr.Lines]: 1,
  [fr.Cross]: 6
};
var Qx = /* @__PURE__ */ _e('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function ag(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "variant", 23, () => fr.Dots), o = g(e, "gap", 7, 20), i = g(e, "size", 7), s = g(e, "lineWidth", 7, 1), a = g(e, "bgColor", 7), l = g(e, "patternColor", 7), u = g(e, "patternClass", 7), d = g(e, "class", 7), h = /* @__PURE__ */ S(Rn), f = /* @__PURE__ */ S(() => r() === fr.Dots), v = /* @__PURE__ */ S(() => r() === fr.Cross), m = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ S(() => `background-pattern-${c(h).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ S(() => [
    c(m)[0] * c(h).viewport.zoom || 1,
    c(m)[1] * c(h).viewport.zoom || 1
  ]), b = /* @__PURE__ */ S(() => (i() ?? Jx[r()]) * c(h).viewport.zoom), x = /* @__PURE__ */ S(() => c(v) ? [c(b), c(b)] : c(w)), P = /* @__PURE__ */ S(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(_) {
      n(_), p();
    },
    get variant() {
      return r();
    },
    set variant(_ = fr.Dots) {
      r(_), p();
    },
    get gap() {
      return o();
    },
    set gap(_ = 20) {
      o(_), p();
    },
    get size() {
      return i();
    },
    set size(_) {
      i(_), p();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(_ = 1) {
      s(_), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(_) {
      a(_), p();
    },
    get patternColor() {
      return l();
    },
    set patternColor(_) {
      l(_), p();
    },
    get patternClass() {
      return u();
    },
    set patternClass(_) {
      u(_), p();
    },
    get class() {
      return d();
    },
    set class(_) {
      d(_), p();
    }
  }, k = Qx();
  let E;
  var V = Y(k), I = Y(V);
  {
    var L = (_) => {
      {
        let N = /* @__PURE__ */ S(() => c(b) / 2);
        ig(_, {
          get radius() {
            return c(N);
          },
          get class() {
            return u();
          }
        });
      }
    }, A = (_) => {
      sg(_, {
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
    ae(I, (_) => {
      c(f) ? _(L) : _(A, !1);
    });
  }
  X(V);
  var D = R(V);
  return X(k), ze(() => {
    un(k, 0, Or([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), E = Bt(k, "", E, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), Ne(V, "id", c(y)), Ne(V, "x", c(h).viewport.x % c(w)[0]), Ne(V, "y", c(h).viewport.y % c(w)[1]), Ne(V, "width", c(w)[0]), Ne(V, "height", c(w)[1]), Ne(V, "patternTransform", `translate(-${c(P)[0]},-${c(P)[1]})`), Ne(D, "fill", `url(#${c(y)})`);
  }), M(t, k), ue(C);
}
se(
  ag,
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
function lg(t, e) {
  le(e, !0);
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
  }, w = fe(), b = ee(w);
  {
    var x = (C) => {
      const k = /* @__PURE__ */ S(m);
      var E = fe(), V = ee(E);
      It(V, () => c(k), (I, L) => {
        L(I, {
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
      }), M(C, E);
    }, P = (C) => {
      var k = e7();
      let E, V;
      ze(() => {
        E = un(k, 0, Or(["svelte-flow__minimap-node", v()]), null, E, { selected: f() }), Ne(k, "x", r()), Ne(k, "y", o()), Ne(k, "rx", a()), Ne(k, "ry", a()), Ne(k, "width", i()), Ne(k, "height", s()), Ne(k, "shape-rendering", u()), V = Bt(k, "", V, {
          fill: l(),
          stroke: d(),
          "stroke-width": h()
        });
      }), M(C, k);
    };
    ae(b, (C) => {
      m() ? C(x) : C(P, !1);
    });
  }
  return M(t, w), ue(y);
}
se(
  lg,
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
const rl = (t) => t instanceof Function ? t : () => t;
var n7 = /* @__PURE__ */ _e("<title> </title>"), r7 = /* @__PURE__ */ _e('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), o7 = /* @__PURE__ */ re('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ug(t, e) {
  le(e, !0);
  let n = g(e, "position", 7, "bottom-right"), r = g(e, "ariaLabel", 7), o = g(e, "nodeStrokeColor", 7, "transparent"), i = g(e, "nodeColor", 7), s = g(e, "nodeClass", 7, ""), a = g(e, "nodeBorderRadius", 7, 5), l = g(e, "nodeStrokeWidth", 7, 2), u = g(e, "nodeComponent", 7), d = g(e, "bgColor", 7), h = g(e, "maskColor", 7), f = g(e, "maskStrokeColor", 7), v = g(e, "maskStrokeWidth", 7), m = g(e, "width", 7, 200), y = g(e, "height", 7, 150), w = g(e, "pannable", 7, !0), b = g(e, "zoomable", 7, !0), x = g(e, "inversePan", 7), P = g(e, "zoomStep", 7), C = g(e, "class", 7), k = /* @__PURE__ */ je(e, [
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
  ]), E = /* @__PURE__ */ S(Rn), V = /* @__PURE__ */ S(() => c(E).ariaLabelConfig);
  const I = i() === void 0 ? void 0 : rl(i()), L = rl(o()), A = rl(s()), D = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let _ = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${c(E).flowId}`), N = /* @__PURE__ */ S(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), $ = /* @__PURE__ */ S(() => np(Fi(c(E).nodeLookup, { filter: (ne) => !ne.hidden }), c(N))), O = /* @__PURE__ */ S(() => c($).width / m()), z = /* @__PURE__ */ S(() => c($).height / y()), j = /* @__PURE__ */ S(() => Math.max(c(O), c(z))), q = /* @__PURE__ */ S(() => c(j) * m()), G = /* @__PURE__ */ S(() => c(j) * y()), T = /* @__PURE__ */ S(() => 5 * c(j)), U = /* @__PURE__ */ S(() => c($).x - (c(q) - c($).width) / 2 - c(T)), te = /* @__PURE__ */ S(() => c($).y - (c(G) - c($).height) / 2 - c(T)), B = /* @__PURE__ */ S(() => c(q) + c(T) * 2), Z = /* @__PURE__ */ S(() => c(G) + c(T) * 2);
  const W = () => c(j);
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
      return P();
    },
    set zoomStep(ne) {
      P(ne), p();
    },
    get class() {
      return C();
    },
    set class(ne) {
      C(ne), p();
    }
  }, oe = o7(), H = ee(oe);
  {
    let ne = /* @__PURE__ */ S(() => ["svelte-flow__minimap", C()]);
    G1(H, () => ({ "--xy-minimap-background-color-props": d() })), qi(H.lastChild, Ze(
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
        children: (ge, ce) => {
          var ie = fe(), de = ee(ie);
          {
            var ye = (ke) => {
              var be = r7();
              let he;
              var Ce = Y(be);
              {
                var De = (Ie) => {
                  var Be = n7(), Re = Y(Be, !0);
                  X(Be), ze(() => {
                    Ne(Be, "id", c(_)), ht(Re, r() ?? c(V)["minimap.ariaLabel"]);
                  }), M(Ie, Be);
                };
                ae(Ce, (Ie) => {
                  (r() ?? c(V)["minimap.ariaLabel"]) && Ie(De);
                });
              }
              var Q = R(Ce);
              At(Q, 17, () => c(E).nodes, (Ie) => Ie.id, (Ie, Be) => {
                const Re = /* @__PURE__ */ S(() => c(E).nodeLookup.get(c(Be).id));
                var Xe = fe(), wt = ee(Xe);
                {
                  var Pt = (at) => {
                    const me = /* @__PURE__ */ S(() => Xr(c(Re)));
                    {
                      let Me = /* @__PURE__ */ S(() => I?.(c(Re))), ft = /* @__PURE__ */ S(() => L(c(Re))), Ye = /* @__PURE__ */ S(() => A(c(Re)));
                      lg(at, Ze(
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
                        () => c(me),
                        {
                          get selected() {
                            return c(Re).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Me);
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
                            return D;
                          },
                          get class() {
                            return c(Ye);
                          }
                        }
                      ));
                    }
                  };
                  ae(wt, (at) => {
                    c(Re) && rp(c(Re)) && !c(Re).hidden && at(Pt);
                  });
                }
                M(Ie, Xe);
              });
              var Ve = R(Q);
              X(be), Ft(be, (Ie, Be) => t7?.(Ie, Be), () => ({
                store: c(E),
                panZoom: c(E).panZoom,
                getViewScale: W,
                translateExtent: c(E).translateExtent,
                width: c(E).width,
                height: c(E).height,
                inversePan: x(),
                zoomStep: P(),
                pannable: w(),
                zoomable: b()
              })), ze(() => {
                Ne(be, "width", m()), Ne(be, "height", y()), Ne(be, "viewBox", `${c(U) ?? ""} ${c(te) ?? ""} ${c(B) ?? ""} ${c(Z) ?? ""}`), Ne(be, "aria-labelledby", c(_)), he = Bt(be, "", he, {
                  "--xy-minimap-mask-background-color-props": h(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": v() ? v() * c(j) : void 0
                }), Ne(Ve, "d", `M${c(U) - c(T)},${c(te) - c(T)}h${c(B) + c(T) * 2}v${c(Z) + c(T) * 2}h${-c(B) - c(T) * 2}z
      M${c(N).x ?? ""},${c(N).y ?? ""}h${c(N).width ?? ""}v${c(N).height ?? ""}h${-c(N).width}z`);
              }), M(ke, be);
            };
            ae(de, (ke) => {
              c(E).panZoom && ke(ye);
            });
          }
          M(ge, ie);
        },
        $$slots: { default: !0 }
      }
    )), X(H);
  }
  return M(t, oe), ue(J);
}
se(
  ug,
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
function cg(t, e) {
  le(e, !0);
  let n = g(e, "nodeId", 7), r = g(e, "position", 23, () => Ee.Top), o = g(e, "align", 7, "center"), i = g(e, "offset", 7, 10), s = g(e, "isVisible", 7), a = g(e, "children", 7), l = /* @__PURE__ */ je(e, [
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
  const u = Rn(), { getNodesBounds: d } = Dt(), h = Dn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? h]).reduce(
    (k, E) => {
      const V = u.nodeLookup.get(E);
      return V && k.push(V), k;
    },
    []
  ))), v = /* @__PURE__ */ S(() => {
    const k = d(c(f));
    return k ? b2(k, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ S(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((k) => (k.internals.z || 5) + 1))), y = /* @__PURE__ */ S(() => u.nodes.filter((k) => k.selected).length), w = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
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
    set position(k = Ee.Top) {
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
  }, x = fe(), P = ee(x);
  {
    var C = (k) => {
      var E = i7();
      ot(
        E,
        (I, L) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": I,
          ...l,
          [Zn]: L
        }),
        [
          () => c(f).reduce((I, L) => `${I}${L.id} `, "").trim(),
          () => ({
            display: $p().value ? "none" : void 0,
            position: "absolute",
            transform: c(v),
            "z-index": c(m)
          })
        ]
      );
      var V = Y(E);
      Te(V, () => a() ?? We), X(E), Ft(E, (I, L) => Cp?.(I, L), () => "root"), M(k, E);
    };
    ae(P, (k) => {
      u.domNode && c(w) && c(f) && k(C);
    });
  }
  return M(t, x), ue(b);
}
se(
  cg,
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
function Er(t) {
  const e = /* @__PURE__ */ S(Rn), n = /* @__PURE__ */ S(() => c(e).nodes), r = /* @__PURE__ */ S(() => c(e).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
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
const Pd = "tinyflow-component", s7 = [
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
], ju = [
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
    const e = document.createElement(Pd);
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
    const n = document.createElement(Pd);
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
}), dg = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), Js = "-", Od = [], p7 = "arbitrary..", g7 = (t) => {
  const e = m7(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return v7(o);
      const i = o.split(Js), s = i[0] === "" && i.length > 1 ? 1 : 0;
      return hg(i, s, e);
    },
    getConflictingClassGroupIds: (o, i) => {
      if (i) {
        const s = r[o], a = n[o];
        return s ? a ? h7(a, s) : s : a || Od;
      }
      return n[o] || Od;
    }
  };
}, hg = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const r = t[e], o = n.nextPart.get(r);
  if (o) {
    const l = hg(t, e + 1, o);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = e === 0 ? t.join(Js) : t.slice(e).join(Js), a = i.length;
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
  const n = dg();
  for (const r in t) {
    const o = t[r];
    Bu(o, n, r, e);
  }
  return n;
}, Bu = (t, e, n, r) => {
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
  const r = t === "" ? e : fg(e, t);
  r.classGroupId = n;
}, x7 = (t, e, n, r) => {
  if (C7(t)) {
    Bu(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(f7(n, t));
}, k7 = (t, e, n, r) => {
  const o = Object.entries(t), i = o.length;
  for (let s = 0; s < i; s++) {
    const [a, l] = o[s];
    Bu(l, fg(e, a), n, r);
  }
}, fg = (t, e) => {
  let n = t;
  const r = e.split(Js), o = r.length;
  for (let i = 0; i < o; i++) {
    const s = r[i];
    let a = n.nextPart.get(s);
    a || (a = dg(), n.nextPart.set(s, a)), n = a;
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
}, El = "!", Ed = ":", S7 = [], Nd = (t, e, n, r, o) => ({
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
    h.endsWith(El) ? (f = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(El) && (f = h.slice(1), v = !0)
    );
    const m = u && u > l ? u - l : void 0;
    return Nd(i, v, f, m);
  };
  if (e) {
    const o = e + Ed, i = r;
    r = (s) => s.startsWith(o) ? i(s.slice(o.length)) : Nd(S7, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (i) => n({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, P7 = (t) => {
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
  sortModifiers: P7(t),
  ...g7(t)
}), E7 = /\s+/, N7 = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = e, s = [], a = t.trim().split(E7);
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
    const x = f.length === 0 ? "" : f.length === 1 ? f[0] : i(f).join(":"), P = v ? x + El : x, C = P + b;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const k = o(b, w);
    for (let E = 0; E < k.length; ++E) {
      const V = k[E];
      s.push(P + V);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
}, T7 = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = pg(n)) && (o && (o += " "), o += r);
  return o;
}, pg = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = pg(t[r])) && (n && (n += " "), n += e);
  return n;
}, Nl = (t, ...e) => {
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
  return i = s, (...l) => i(T7(...l));
}, z7 = [], Mt = (t) => {
  const e = (n) => n[t] || z7;
  return e.isThemeGetter = !0, e;
}, gg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, vg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, M7 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, A7 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, D7 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, V7 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, I7 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, H7 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tr = (t) => M7.test(t), Ke = (t) => !!t && !Number.isNaN(Number(t)), zr = (t) => !!t && Number.isInteger(Number(t)), ol = (t) => t.endsWith("%") && Ke(t.slice(0, -1)), ar = (t) => A7.test(t), mg = () => !0, L7 = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  D7.test(t) && !V7.test(t)
), Ku = () => !1, R7 = (t) => I7.test(t), j7 = (t) => H7.test(t), B7 = (t) => !$e(t) && !Se(t), K7 = (t) => qr(t, bg, Ku), $e = (t) => gg.test(t), Gr = (t) => qr(t, xg, L7), Td = (t) => qr(t, G7, Ke), F7 = (t) => qr(t, Cg, mg), Z7 = (t) => qr(t, kg, Ku), zd = (t) => qr(t, yg, Ku), W7 = (t) => qr(t, wg, j7), ds = (t) => qr(t, $g, R7), Se = (t) => vg.test(t), ii = (t) => ko(t, xg), X7 = (t) => ko(t, kg), Md = (t) => ko(t, yg), q7 = (t) => ko(t, bg), Y7 = (t) => ko(t, wg), hs = (t) => ko(t, $g, !0), U7 = (t) => ko(t, Cg, !0), qr = (t, e, n) => {
  const r = gg.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, ko = (t, e, n = !1) => {
  const r = vg.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, yg = (t) => t === "position" || t === "percentage", wg = (t) => t === "image" || t === "url", bg = (t) => t === "length" || t === "size" || t === "bg-size", xg = (t) => t === "length", G7 = (t) => t === "number", kg = (t) => t === "family-name", Cg = (t) => t === "number" || t === "weight", $g = (t) => t === "shadow", Tl = () => {
  const t = Mt("color"), e = Mt("font"), n = Mt("text"), r = Mt("font-weight"), o = Mt("tracking"), i = Mt("leading"), s = Mt("breakpoint"), a = Mt("container"), l = Mt("spacing"), u = Mt("radius"), d = Mt("shadow"), h = Mt("inset-shadow"), f = Mt("text-shadow"), v = Mt("drop-shadow"), m = Mt("blur"), y = Mt("perspective"), w = Mt("aspect"), b = Mt("ease"), x = Mt("animate"), P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], k = () => [...C(), Se, $e], E = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", "contain", "none"], I = () => [Se, $e, l], L = () => [Tr, "full", "auto", ...I()], A = () => [zr, "none", "subgrid", Se, $e], D = () => ["auto", {
    span: ["full", zr, Se, $e]
  }, zr, Se, $e], _ = () => [zr, "auto", Se, $e], N = () => ["auto", "min", "max", "fr", Se, $e], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], O = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], z = () => ["auto", ...I()], j = () => [Tr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()], q = () => [Tr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...I()], G = () => [Tr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...I()], T = () => [t, Se, $e], U = () => [...C(), Md, zd, {
    position: [Se, $e]
  }], te = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], B = () => ["auto", "cover", "contain", q7, K7, {
    size: [Se, $e]
  }], Z = () => [ol, ii, Gr], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Se,
    $e
  ], J = () => ["", Ke, ii, Gr], oe = () => ["solid", "dashed", "dotted", "double"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ne = () => [Ke, ol, Md, zd], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    Se,
    $e
  ], ce = () => ["none", Ke, Se, $e], ie = () => ["none", Ke, Se, $e], de = () => [Ke, Se, $e], ye = () => [Tr, "full", ...I()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ar],
      breakpoint: [ar],
      color: [mg],
      container: [ar],
      "drop-shadow": [ar],
      ease: ["in", "out", "in-out"],
      font: [B7],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ar],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ar],
      shadow: [ar],
      spacing: ["px", Ke],
      text: [ar],
      "text-shadow": [ar],
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
        aspect: ["auto", "square", Tr, $e, Se, w]
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
        columns: [Ke, $e, Se, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
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
        inset: L()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: L()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": L(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: L()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": L()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [zr, "auto", Se, $e]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Tr, "full", "auto", a, ...I()]
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
        flex: [Ke, Tr, "auto", "initial", "none", $e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ke, Se, $e]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ke, Se, $e]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [zr, "first", "last", "none", Se, $e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: D()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: D()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": N()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": N()
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
        m: z()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: z()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: z()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: z()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: z()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: z()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: z()
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
        size: j()
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
        block: ["auto", ...G()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...G()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...G()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...j()]
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
          ...j()
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
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ii, Gr]
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
        font: [r, U7, F7]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ol, $e]
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
        "line-clamp": [Ke, "none", Se, Td]
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
        decoration: [Ke, "from-font", "auto", Se, Gr]
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
        "underline-offset": [Ke, "auto", Se, $e]
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
        bg: U()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: te()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: B()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, zr, Se, $e],
          radial: ["", Se, $e],
          conic: [zr, Se, $e]
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
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
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
        "outline-offset": [Ke, Se, $e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ke, ii, Gr]
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
          hs,
          ds
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
        "inset-shadow": ["none", h, hs, ds]
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
        "ring-offset": [Ke, Gr]
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
        "text-shadow": ["none", f, hs, ds]
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
        opacity: [Ke, Se, $e]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
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
        "mask-linear": [Ke]
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
        "mask-conic": [Ke]
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
        mask: U()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: te()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: B()
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
        blur: ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ke, Se, $e]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ke, Se, $e]
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
          hs,
          ds
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
        grayscale: ["", Ke, Se, $e]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ke, Se, $e]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ke, Se, $e]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ke, Se, $e]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ke, Se, $e]
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
        "backdrop-blur": ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ke, Se, $e]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ke, Se, $e]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ke, Se, $e]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ke, Se, $e]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ke, Se, $e]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ke, Se, $e]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ke, Se, $e]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ke, Se, $e]
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
        duration: [Ke, "initial", Se, $e]
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
        delay: [Ke, Se, $e]
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
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
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
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
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
        translate: ye()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ye()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ye()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ye()
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
        stroke: [Ke, ii, Gr, Td]
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
}) => (hi(t, "cacheSize", e), hi(t, "prefix", n), hi(t, "experimentalParseClassName", r), fs(t.theme, i.theme), fs(t.classGroups, i.classGroups), fs(t.conflictingClassGroups, i.conflictingClassGroups), fs(t.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), hi(t, "orderSensitiveModifiers", i.orderSensitiveModifiers), ps(t.theme, o.theme), ps(t.classGroups, o.classGroups), ps(t.conflictingClassGroups, o.conflictingClassGroups), ps(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Sg(t, o, "orderSensitiveModifiers"), t), hi = (t, e, n) => {
  n !== void 0 && (t[e] = n);
}, fs = (t, e) => {
  if (e)
    for (const n in e)
      hi(t, n, e[n]);
}, ps = (t, e) => {
  if (e)
    for (const n in e)
      Sg(t, e, n);
}, Sg = (t, e, n) => {
  const r = e[n];
  r !== void 0 && (t[n] = t[n] ? t[n].concat(r) : r);
}, Q7 = (t, ...e) => typeof t == "function" ? Nl(Tl, t, ...e) : Nl(() => J7(Tl(), t), ...e), _g = /* @__PURE__ */ Nl(Tl);
function zn(...t) {
  return _g(vi(t));
}
var e5 = /\s+/g, t5 = (t) => typeof t != "string" || !t ? t : t.replace(e5, " ").trim(), Qs = (...t) => {
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
}, Ad = (t) => t === !1 ? "false" : t === !0 ? "true" : t === 0 ? "0" : t, tn = (t) => {
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
      n in t ? t[n] = Qs(t[n], r) : t[n] = r;
    }
  return t;
}, Pg = (t, e) => {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    Array.isArray(r) ? Pg(r, e) : r && e.push(r);
  }
}, Og = (...t) => {
  const e = [];
  Pg(t, e);
  const n = [];
  for (let r = 0; r < e.length; r++)
    e[r] && n.push(e[r]);
  return n;
}, zl = (t, e) => {
  const n = {};
  for (const r in t) {
    const o = t[r];
    if (r in e) {
      const i = e[r];
      Array.isArray(o) || Array.isArray(i) ? n[r] = Og(i, o) : typeof o == "object" && typeof i == "object" && o && i ? n[r] = zl(o, i) : n[r] = i + " " + o;
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
var ur = i5(), s5 = (t) => {
  const e = (n, r) => {
    const {
      extend: o = null,
      slots: i = {},
      variants: s = {},
      compoundVariants: a = [],
      compoundSlots: l = [],
      defaultVariants: u = {}
    } = n, d = { ...o5, ...r }, h = o?.base ? Qs(o.base, n?.base) : n?.base, f = o?.variants && !tn(o.variants) ? zl(s, o.variants) : s, v = o?.defaultVariants && !tn(o.defaultVariants) ? { ...o.defaultVariants, ...u } : u;
    !tn(d.twMergeConfig) && !n5(d.twMergeConfig, ur.cachedTwMergeConfig) && (ur.didTwMergeConfigChange = !0, ur.cachedTwMergeConfig = d.twMergeConfig);
    const m = tn(o?.slots), y = tn(i) ? {} : {
      // add "base" to the slots object
      base: Qs(n?.base, m && o?.base),
      ...i
    }, w = m ? y : r5(
      { ...o?.slots },
      tn(y) ? { base: n?.base } : y
    ), b = tn(o?.compoundVariants) ? a : Og(o?.compoundVariants, a), x = (C) => {
      if (tn(f) && tn(i) && m)
        return t(h, C?.class, C?.className)(d);
      if (b && !Array.isArray(b))
        throw new TypeError(
          `The "compoundVariants" prop must be an array. Received: ${typeof b}`
        );
      if (l && !Array.isArray(l))
        throw new TypeError(
          `The "compoundSlots" prop must be an array. Received: ${typeof l}`
        );
      const k = (N, $ = f, O = null, z = null) => {
        const j = $[N];
        if (!j || tn(j))
          return null;
        const q = z?.[N] ?? C?.[N];
        if (q === null) return null;
        const G = Ad(q);
        if (typeof G == "object")
          return null;
        const T = v?.[N], U = G ?? Ad(T);
        return j[U || "false"];
      }, E = () => {
        if (!f) return null;
        const N = Object.keys(f), $ = [];
        for (let O = 0; O < N.length; O++) {
          const z = k(N[O], f);
          z && $.push(z);
        }
        return $;
      }, V = (N, $) => {
        if (!f || typeof f != "object") return null;
        const O = [];
        for (const z in f) {
          const j = k(z, f, N, $), q = N === "base" && typeof j == "string" ? j : j && j[N];
          q && O.push(q);
        }
        return O;
      }, I = {};
      for (const N in C) {
        const $ = C[N];
        $ !== void 0 && (I[N] = $);
      }
      const L = (N, $) => {
        const O = typeof C?.[N] == "object" ? {
          [N]: C[N]?.initial
        } : {};
        return {
          ...v,
          ...I,
          ...O,
          ...$
        };
      }, A = (N = [], $) => {
        const O = [], z = N.length;
        for (let j = 0; j < z; j++) {
          const { class: q, className: G, ...T } = N[j];
          let U = !0;
          const te = L(null, $);
          for (const B in T) {
            const Z = T[B], W = te[B];
            if (Array.isArray(Z)) {
              if (!Z.includes(W)) {
                U = !1;
                break;
              }
            } else {
              if ((Z == null || Z === !1) && (W == null || W === !1))
                continue;
              if (W !== Z) {
                U = !1;
                break;
              }
            }
          }
          U && (q && O.push(q), G && O.push(G));
        }
        return O;
      }, D = (N) => {
        const $ = A(b, N);
        if (!Array.isArray($)) return $;
        const O = {}, z = t;
        for (let j = 0; j < $.length; j++) {
          const q = $[j];
          if (typeof q == "string")
            O.base = z(O.base, q)(d);
          else if (typeof q == "object")
            for (const G in q)
              O[G] = z(O[G], q[G])(d);
        }
        return O;
      }, _ = (N) => {
        if (l.length < 1) return null;
        const $ = {}, O = L(null, N);
        for (let z = 0; z < l.length; z++) {
          const {
            slots: j = [],
            class: q,
            className: G,
            ...T
          } = l[z];
          if (!tn(T)) {
            let U = !0;
            for (const te in T) {
              const B = O[te], Z = T[te];
              if (B === void 0 || (Array.isArray(Z) ? !Z.includes(B) : Z !== B)) {
                U = !1;
                break;
              }
            }
            if (!U) continue;
          }
          for (let U = 0; U < j.length; U++) {
            const te = j[U];
            $[te] || ($[te] = []), $[te].push([q, G]);
          }
        }
        return $;
      };
      if (!tn(i) || !m) {
        const N = {};
        if (typeof w == "object" && !tn(w)) {
          const $ = t;
          for (const O in w)
            N[O] = (z) => {
              const j = D(z), q = _(z);
              return $(
                w[O],
                V(O, z),
                j ? j[O] : void 0,
                q ? q[O] : void 0,
                z?.class,
                z?.className
              )(d);
            };
        }
        return N;
      }
      return t(
        h,
        E(),
        A(b),
        C?.class,
        C?.className
      )(d);
    }, P = () => {
      if (!(!f || typeof f != "object"))
        return Object.keys(f);
    };
    return x.variantKeys = P(), x.extend = o, x.base = h, x.slots = w, x.variants = f, x.defaultVariants = v, x.compoundSlots = l, x.compoundVariants = b, x;
  };
  return {
    tv: e,
    createTV: (n) => (r, o) => e(r, o ? zl(n, o) : n)
  };
}, a5 = (t) => tn(t) ? _g : Q7({
  ...t,
  extend: {
    theme: t.theme,
    classGroups: t.classGroups,
    conflictingClassGroupModifiers: t.conflictingClassGroupModifiers,
    conflictingClassGroups: t.conflictingClassGroups,
    ...t.extend
  }
}), l5 = (t, e) => {
  const n = Qs(t);
  return !n || !(e?.twMerge ?? !0) ? n : ((!ur.cachedTwMerge || ur.didTwMergeConfigChange) && (ur.didTwMergeConfigChange = !1, ur.cachedTwMerge = a5(ur.cachedTwMergeConfig)), ur.cachedTwMerge(n) || void 0);
}, u5 = (...t) => (e) => l5(t, e), { tv: c5 } = s5(u5);
const Dd = c5({
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
  le(e, !0);
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
  }, v = fe(), m = ee(v);
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
          () => zn(Dd({ variant: r(), size: o() }), n())
        ]
      );
      var P = Y(x);
      Te(P, () => u() ?? We), X(x), Kt(x, (C) => i(C), () => i()), M(b, x);
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
          () => zn(Dd({ variant: r(), size: o() }), n())
        ]
      );
      var P = Y(x);
      Te(P, () => u() ?? We), X(x), Kt(x, (C) => i(C), () => i()), M(b, x);
    };
    ae(m, (b) => {
      s() ? b(y) : b(w, !1);
    });
  }
  return M(t, v), ue(f);
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
function Yi(t) {
  return t !== null && typeof t == "object";
}
const p5 = ["string", "number", "bigint", "boolean"];
function Ml(t) {
  return t == null || p5.includes(typeof t) ? !0 : Array.isArray(t) ? t.every((e) => Ml(e)) : typeof t == "object" ? Object.getPrototypeOf(t) === Object.prototype : !1;
}
const ea = Symbol("box"), Eg = Symbol("is-writable");
function ve(t, e) {
  const n = /* @__PURE__ */ S(t);
  return e ? {
    [ea]: !0,
    [Eg]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [ea]: !0,
    get current() {
      return t();
    }
  };
}
function Ng(t) {
  return Yi(t) && ea in t;
}
function g5(t) {
  return Ng(t) ? t : f5(t) ? ve(t) : Xn(t);
}
function Xn(t) {
  let e = /* @__PURE__ */ we($t(t));
  return {
    [ea]: !0,
    [Eg]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function Tg(...t) {
  return function(e) {
    for (const n of t)
      if (n) {
        if (e.defaultPrevented)
          return;
        typeof n == "function" ? n.call(this, e) : n.current?.call(this, e);
      }
  };
}
var Vd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, v5 = /\n/g, m5 = /^\s*/, y5 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, w5 = /^:\s*/, b5 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, x5 = /^[;\s]*/, k5 = /^\s+|\s+$/g, C5 = `
`, Id = "/", Hd = "*", Qr = "", $5 = "comment", S5 = "declaration";
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
    if (!(Id != t.charAt(0) || Hd != t.charAt(1))) {
      for (var y = 2; Qr != t.charAt(y) && (Hd != t.charAt(y) || Id != t.charAt(y + 1)); )
        ++y;
      if (y += 2, Qr === t.charAt(y - 1))
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
        property: Ld(y[0].replace(Vd, Qr)),
        value: w ? Ld(w[0].replace(Vd, Qr)) : Qr
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
function Ld(t) {
  return t ? t.replace(k5, Qr) : Qr;
}
function P5(t, e) {
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
const O5 = /\d/, E5 = ["-", "_", "/", "."];
function N5(t = "") {
  if (!O5.test(t))
    return t !== t.toLowerCase();
}
function T5(t) {
  const e = [];
  let n = "", r, o;
  for (const i of t) {
    const s = E5.includes(i);
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
function zg(t) {
  return t ? T5(t).map((e) => M5(e)).join("") : "";
}
function z5(t) {
  return A5(zg(t || ""));
}
function M5(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
function A5(t) {
  return t ? t[0].toLowerCase() + t.slice(1) : "";
}
function fi(t) {
  if (!t)
    return {};
  const e = {};
  function n(r, o) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      e[zg(r)] = o;
      return;
    }
    if (r.startsWith("--")) {
      e[r] = o;
      return;
    }
    e[z5(r)] = o;
  }
  return P5(t, n), e;
}
function yi(...t) {
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
function Fu(t = {}) {
  return I5(t).replace(`
`, " ");
}
const H5 = [
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
], L5 = new Set(H5);
function R5(t) {
  return L5.has(t);
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
          e[o] = Tg(u, d);
        } else if (a && l)
          e[o] = yi(i, s);
        else if (o === "class") {
          const u = Ml(i), d = Ml(s);
          u && d ? e[o] = vi(i, s) : u ? e[o] = vi(i) : d && (e[o] = vi(s));
        } else if (o === "style") {
          const u = typeof i == "object", d = typeof s == "object", h = typeof i == "string", f = typeof s == "string";
          if (u && d)
            e[o] = { ...i, ...s };
          else if (u && f) {
            const v = fi(s);
            e[o] = { ...i, ...v };
          } else if (h && d) {
            const v = fi(i);
            e[o] = { ...v, ...s };
          } else if (h && f) {
            const v = fi(i), m = fi(s);
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
  return typeof e.style == "object" && (e.style = Fu(e.style).replaceAll(`
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
}, B5 = Fu(j5), Mg = typeof window < "u" ? window : void 0;
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
    e !== void 0 && (this.#e = n, this.#t = mo((r) => {
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
class Yr {
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
    const e = Dn(this.#t);
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
    const n = Dn(this.#t);
    return n === void 0 ? e : n;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(e) {
    return lo(this.#t, e);
  }
}
function W5(t, e) {
  switch (t) {
    case "post":
      Fe(e);
      break;
    case "pre":
      rn(e);
      break;
  }
}
function Ag(t, e, n, r = {}) {
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
function zt(t, e, n) {
  Ag(t, "post", e, n);
}
function X5(t, e, n) {
  Ag(t, "pre", e, n);
}
zt.pre = X5;
function Rd(t) {
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
  #i = /* @__PURE__ */ S(() => (c(this.#s)?.(), this.getSize().width));
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #a = /* @__PURE__ */ S(() => (c(this.#s)?.(), this.getSize().height));
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #s = /* @__PURE__ */ S(() => {
    const e = Rd(this.#r);
    if (e)
      return mo((n) => {
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
    const e = Rd(this.#r);
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
  #t = /* @__PURE__ */ S(() => this.#e());
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
function Uo(t) {
  Fe(() => () => {
    t();
  });
}
function U5(t) {
  Fe(() => yt(() => t()));
}
function G5(t, e) {
  return setTimeout(e, t);
}
function Ui(t) {
  uf().then(t);
}
const J5 = 1, Q5 = 9, e3 = 11;
function Al(t) {
  return Yi(t) && t.nodeType === J5 && typeof t.nodeName == "string";
}
function Dg(t) {
  return Yi(t) && t.nodeType === Q5;
}
function t3(t) {
  return Yi(t) && t.constructor?.name === "VisualViewport";
}
function n3(t) {
  return Yi(t) && t.nodeType !== void 0;
}
function Vg(t) {
  return n3(t) && t.nodeType === e3 && "host" in t;
}
function r3(t, e) {
  if (!t || !e || !Al(t) || !Al(e))
    return !1;
  const n = e.getRootNode?.();
  if (t === e || t.contains(e))
    return !0;
  if (n && Vg(n)) {
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
  return Dg(t) ? t : t3(t) ? t.document : t?.ownerDocument ?? document;
}
function Ig(t) {
  return Vg(t) ? Ig(t.host) : Dg(t) ? t.defaultView ?? window : Al(t) ? t.ownerDocument?.defaultView ?? window : window;
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
class Gi {
  element;
  #e = /* @__PURE__ */ S(() => this.element.current ? this.element.current.getRootNode() ?? document : document);
  get root() {
    return c(this.#e);
  }
  set root(e) {
    F(this.#e, e);
  }
  constructor(e) {
    typeof e == "function" ? this.element = ve(e) : this.element = e;
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
    [Y1()]: (n) => Ng(t) ? (t.current = n, yt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t.current = null, e?.(null));
    }) : (t(n), yt(() => e?.(n)), () => {
      "isConnected" in n && n.isConnected || (t(null), e?.(null));
    })
  };
}
function Dl(t) {
  return t ? "true" : "false";
}
function ta(t) {
  return t ? "" : void 0;
}
function jd(t) {
  return t ? !0 : void 0;
}
function Hg(t) {
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
function Zu(t) {
  const e = new a3(t);
  return {
    ...e.attrs,
    selector: e.selector,
    getAttr: e.getAttr
  };
}
const pi = "ArrowDown", Oo = "ArrowUp", Lg = "End", Vl = "Enter", l3 = "Escape", Rg = "Home", jg = "PageDown", Bg = "PageUp", Os = " ", Bd = "Tab", Kg = typeof document < "u", Il = u3();
function u3() {
  return Kg && window?.navigator?.userAgent && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Hl(t) {
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
    this.#e = e, Uo(() => this.#n());
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
    this.#e.afterTick ? Ui(n) : n();
  }
}
class f3 {
  #e;
  #t;
  #n;
  #r = /* @__PURE__ */ we(!1);
  constructor(e) {
    this.#e = e, F(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new h3({ ref: this.#e.ref, afterTick: this.#e.open }), zt(() => this.#e.open.current, (n) => {
      n && F(this.#r, !0), this.#t && this.#n.run(() => {
        n === this.#e.open.current && (this.#e.open.current || F(this.#r, !1), this.#e.onComplete?.());
      });
    });
  }
  get shouldRender() {
    return c(this.#r);
  }
}
function qe() {
}
function er(t, e) {
  return `bits-${t}`;
}
function Fg(t, e) {
  le(e, !0);
  const n = g(e, "children", 7);
  var r = {
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  }, o = fe(), i = ee(o);
  return U1(i, n, (s) => {
    var a = fe(), l = ee(a);
    Te(l, () => n() ?? We), M(s, a);
  }), M(t, o), ue(r);
}
se(Fg, { children: {} }, [], [], !0);
const p3 = new Yr("BitsConfig");
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
  return (n) => ve(() => {
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
    return ve(() => {
      const o = n();
      if (o !== void 0)
        return o;
      const i = t(r).current;
      return i !== void 0 ? i : e;
    });
  };
}
const w3 = y3((t) => t.defaultPortalTo, "body");
function Ll(t, e) {
  le(e, !0);
  let n = g(e, "to", 7), r = g(e, "children", 7), o = g(e, "disabled", 7);
  const i = w3(() => n()), s = h1();
  let a = /* @__PURE__ */ S(l);
  function l() {
    if (!Kg || o()) return null;
    let y = null;
    return typeof i.current == "string" ? y = document.querySelector(i.current) : y = i.current, y;
  }
  let u;
  function d() {
    u && (pf(u), u = null);
  }
  zt([() => c(a), () => o()], ([y, w]) => {
    if (!y || w) {
      d();
      return;
    }
    return u = xu(Fg, { target: y, props: { children: r() }, context: s }), () => {
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
  }, f = fe(), v = ee(f);
  {
    var m = (y) => {
      var w = fe(), b = ee(w);
      Te(b, () => r() ?? We), M(y, w);
    };
    ae(v, (y) => {
      o() && y(m);
    });
  }
  return M(t, f), ue(h);
}
se(Ll, { to: {}, children: {}, disabled: {} }, [], [], !0);
function Kd(t, e = 500) {
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
function Zg(t, e) {
  return t === e || t.contains(e);
}
function Wg(t) {
  return t?.ownerDocument ?? document;
}
function b3(t, e) {
  const { clientX: n, clientY: r } = t, o = e.getBoundingClientRect();
  return n < o.left || n > o.right || r < o.top || r > o.bottom;
}
var Xg = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Rl = /* @__PURE__ */ Xg.join(","), qg = typeof Element > "u", Fo = qg ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, na = !qg && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t?.ownerDocument;
}, ra = function(t, e) {
  var n;
  e === void 0 && (e = !0);
  var r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), o = r === "" || r === "true", i = o || e && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : ra(t.parentNode));
  return i;
}, x3 = function(t) {
  var e, n = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return n === "" || n === "true";
}, Yg = function(t, e, n) {
  if (ra(t))
    return [];
  var r = Array.prototype.slice.apply(t.querySelectorAll(Rl));
  return e && Fo.call(t, Rl) && r.unshift(t), r = r.filter(n), r;
}, oa = function(t, e, n) {
  for (var r = [], o = Array.from(t); o.length; ) {
    var i = o.shift();
    if (!ra(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), a = s.length ? s : i.children, l = oa(a, !0, n);
        n.flatten ? r.push.apply(r, l) : r.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var u = Fo.call(i, Rl);
        u && n.filter(i) && (e || !t.includes(i)) && r.push(i);
        var d = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), h = !ra(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (d && h) {
          var f = oa(d === !0 ? i.children : d.children, !0, n);
          n.flatten ? r.push.apply(r, f) : r.push({
            scopeParent: i,
            candidates: f
          });
        } else
          o.unshift.apply(o, i.children);
      }
  }
  return r;
}, Ug = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Gg = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || x3(t)) && !Ug(t) ? 0 : t.tabIndex;
}, k3 = function(t, e) {
  var n = Gg(t);
  return n < 0 && e && !Ug(t) ? 0 : n;
}, C3 = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, Jg = function(t) {
  return t.tagName === "INPUT";
}, $3 = function(t) {
  return Jg(t) && t.type === "hidden";
}, S3 = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return e;
}, _3 = function(t, e) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === e)
      return t[n];
}, P3 = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || na(t), n = function(i) {
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
  return Jg(t) && t.type === "radio";
}, E3 = function(t) {
  return O3(t) && !P3(t);
}, N3 = function(t) {
  var e, n = t && na(t), r = (e = n) === null || e === void 0 ? void 0 : e.host, o = !1;
  if (n && n !== t) {
    var i, s, a;
    for (o = !!((i = r) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(r) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !o && r; ) {
      var l, u, d;
      n = na(r), r = (l = n) === null || l === void 0 ? void 0 : l.host, o = !!((u = r) !== null && u !== void 0 && (d = u.ownerDocument) !== null && d !== void 0 && d.contains(r));
    }
  }
  return o;
}, Fd = function(t) {
  var e = t.getBoundingClientRect(), n = e.width, r = e.height;
  return n === 0 && r === 0;
}, T3 = function(t, e) {
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
  var i = Fo.call(t, "details>summary:first-of-type"), s = i ? t.parentElement : t;
  if (Fo.call(s, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof r == "function") {
      for (var a = t; t; ) {
        var l = t.parentElement, u = na(t);
        if (l && !l.shadowRoot && r(l) === !0)
          return Fd(t);
        t.assignedSlot ? t = t.assignedSlot : !l && u !== t.ownerDocument ? t = u.host : t = l;
      }
      t = a;
    }
    if (N3(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Fd(t);
  return !1;
}, z3 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children.item(n);
          if (r.tagName === "LEGEND")
            return Fo.call(e, "fieldset[disabled] *") ? !0 : !r.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, ia = function(t, e) {
  return !(e.disabled || $3(e) || T3(e, t) || // For a details element with a summary, the summary element gets the focus
  S3(e) || z3(e));
}, Zd = function(t, e) {
  return !(E3(e) || Gg(e) < 0 || !ia(t, e));
}, M3 = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, Qg = function(t) {
  var e = [], n = [];
  return t.forEach(function(r, o) {
    var i = !!r.scopeParent, s = i ? r.scopeParent : r, a = k3(s, i), l = i ? Qg(r.candidates) : s;
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
  return e.getShadowRoot ? n = oa([t], e.includeContainer, {
    filter: Zd.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: M3
  }) : n = Yg(t, e.includeContainer, Zd.bind(null, e)), Qg(n);
}, D3 = function(t, e) {
  e = e || {};
  var n;
  return e.getShadowRoot ? n = oa([t], e.includeContainer, {
    filter: ia.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : n = Yg(t, e.includeContainer, ia.bind(null, e)), n;
}, V3 = /* @__PURE__ */ Xg.concat("iframe:not([inert]):not([inert] *)").join(","), I3 = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return Fo.call(t, V3) === !1 ? !1 : ia(e, t);
};
function H3(t, e, n = !0) {
  if (!(t.length === 0 || e < 0 || e >= t.length))
    return t.length === 1 && e === 0 ? t[0] : e === t.length - 1 ? n ? t[0] : void 0 : t[e + 1];
}
function L3(t, e, n = !0) {
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
function Wu(t, e, n) {
  const r = e.toLowerCase();
  if (r.endsWith(" ")) {
    const u = r.slice(0, -1);
    if (t.filter((f) => f.toLowerCase().startsWith(u)).length <= 1)
      return Wu(t, u, n);
    const d = n?.toLowerCase();
    if (d && d.startsWith(u) && d.charAt(u.length) === " " && e.trim() === u)
      return n;
    const h = t.filter((f) => f.toLowerCase().startsWith(r));
    if (h.length > 0) {
      const f = n ? t.indexOf(n) : -1;
      return Wd(h, Math.max(f, 0)).find((v) => v !== n) || n;
    }
  }
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, i = o.toLowerCase(), s = n ? t.indexOf(n) : -1;
  let a = Wd(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const l = a.find((u) => u?.toLowerCase().startsWith(i));
  return l !== n ? l : void 0;
}
function Wd(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
const B3 = { afterMs: 1e4, onChange: qe };
function ev(t, e) {
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
  return Fe(() => () => {
    i && o().clearTimeout(i);
  }), ve(() => c(s), (l) => {
    F(s, l, !0), r?.(l), i && o().clearTimeout(i), i = a();
  });
}
class K3 {
  #e;
  #t;
  #n = /* @__PURE__ */ S(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
  #r = /* @__PURE__ */ S(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
  constructor(e) {
    this.#e = e, this.#t = ev("", { afterMs: 1e3, getWindow: e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e, n) {
    if (!n.length) return;
    this.#t.current = this.#t.current + e;
    const r = c(this.#r)(), o = n.find((l) => l === r)?.textContent?.trim() ?? "", i = n.map((l) => l.textContent?.trim() ?? ""), s = Wu(i, this.#t.current, o), a = n.find((l) => l.textContent?.trim() === s);
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
Zu({
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
class Xu {
  static create(e) {
    return new Xu(e);
  }
  opts;
  #e;
  #t;
  #n = { pointerdown: !1 };
  #r = !1;
  #o = !1;
  #i = void 0;
  #a;
  #s = qe;
  constructor(e) {
    this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#a = e.onFocusOutside, Fe(() => {
      this.#i = Wg(this.opts.ref.current);
    });
    let n = qe;
    const r = () => {
      this.#v(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), n();
    };
    zt([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!(!this.opts.enabled.current || !this.opts.ref.current))
        return G5(1, () => {
          this.opts.ref.current && (globalThis.bitsDismissableLayers.set(this, this.#t), n(), n = this.#u());
        }), r;
    }), Uo(() => {
      this.#v.destroy(), globalThis.bitsDismissableLayers.delete(this), this.#d.destroy(), this.#s(), n();
    });
  }
  #l = (e) => {
    e.defaultPrevented || this.opts.ref.current && Ui(() => {
      !this.opts.ref.current || this.#y(e.target) || e.target && !this.#o && this.#a.current?.(e);
    });
  };
  #u() {
    return yi(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      St(this.#i, "pointerdown", yi(this.#h, this.#f), { capture: !0 }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      St(this.#i, "pointerdown", yi(this.#p, this.#d)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      St(this.#i, "focusin", this.#l)
    );
  }
  #c = (e) => {
    let n = e;
    n.defaultPrevented && (n = Xd(e)), this.#e.current(e);
  };
  #d = Kd(
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
      if (r.defaultPrevented && (r = Xd(r)), this.#t.current !== "close" && this.#t.current !== "defer-otherwise-close") {
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
  #y = (e) => this.opts.ref.current ? Zg(this.opts.ref.current, e) : !1;
  #v = Kd(
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
  return r && o ? !1 : Wg(n).documentElement.contains(n) && !Zg(e, n) && b3(t, e);
}
function Xd(t) {
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
function tv(t, e) {
  le(e, !0);
  let n = g(e, "interactOutsideBehavior", 7, "close"), r = g(e, "onInteractOutside", 7, qe), o = g(e, "onFocusOutside", 7, qe), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "isValidEvent", 7, () => !1), u = g(e, "ref", 7);
  const d = Xu.create({
    id: ve(() => i()),
    interactOutsideBehavior: ve(() => n()),
    onInteractOutside: ve(() => r()),
    enabled: ve(() => a()),
    onFocusOutside: ve(() => o()),
    isValidEvent: ve(() => l()),
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
    set onInteractOutside(m = qe) {
      r(m), p();
    },
    get onFocusOutside() {
      return o();
    },
    set onFocusOutside(m = qe) {
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
  }, f = fe(), v = ee(f);
  return Te(v, () => s() ?? We, () => ({ props: d.props })), M(t, f), ue(h);
}
se(
  tv,
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
class qu {
  static create(e) {
    return new qu(e);
  }
  opts;
  domContext;
  constructor(e) {
    this.opts = e, this.domContext = new Gi(this.opts.ref);
    let n = qe;
    zt(() => e.enabled.current, (r) => (r && (globalThis.bitsEscapeLayers.set(this, e.escapeKeydownBehavior), n = this.#e()), () => {
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
function nv(t, e) {
  le(e, !0);
  let n = g(e, "escapeKeydownBehavior", 7, "close"), r = g(e, "onEscapeKeydown", 7, qe), o = g(e, "children", 7), i = g(e, "enabled", 7), s = g(e, "ref", 7);
  qu.create({
    escapeKeydownBehavior: ve(() => n()),
    onEscapeKeydown: ve(() => r()),
    enabled: ve(() => i()),
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
    set onEscapeKeydown(d = qe) {
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
  }, l = fe(), u = ee(l);
  return Te(u, () => o() ?? We), M(t, l), ue(a);
}
se(
  nv,
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
class Yu {
  static instance;
  #e = Xn([]);
  #t = /* @__PURE__ */ new WeakMap();
  #n = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    return this.instance || (this.instance = new Yu()), this.instance;
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
class Uu {
  #e = !1;
  #t = null;
  #n = Yu.getInstance();
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
    return zt([() => e.ref.current, () => e.enabled.current], ([r, o]) => {
      r && o ? (n || (n = new Uu(e)), n.mount(r)) : n && (n.unmount(), n = null);
    }), Uo(() => {
      n?.unmount();
    }), {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function rv(t, e) {
  le(e, !0);
  let n = g(e, "enabled", 7, !1), r = g(e, "trapFocus", 7, !1), o = g(e, "loop", 7, !1), i = g(e, "onCloseAutoFocus", 7, qe), s = g(e, "onOpenAutoFocus", 7, qe), a = g(e, "focusScope", 7), l = g(e, "ref", 7);
  const u = Uu.use({
    enabled: ve(() => n()),
    trap: ve(() => r()),
    loop: o(),
    onCloseAutoFocus: ve(() => i()),
    onOpenAutoFocus: ve(() => s()),
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
    set onCloseAutoFocus(v = qe) {
      i(v), p();
    },
    get onOpenAutoFocus() {
      return s();
    },
    set onOpenAutoFocus(v = qe) {
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
  }, h = fe(), f = ee(h);
  return Te(f, () => a() ?? We, () => ({ props: u.props })), M(t, h), ue(d);
}
se(
  rv,
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
class Gu {
  static create(e) {
    return new Gu(e);
  }
  opts;
  domContext;
  #e = qe;
  constructor(e) {
    this.opts = e, this.domContext = new Gi(e.ref);
    let n = qe;
    zt(() => this.opts.enabled.current, (r) => (r && (globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled), n(), n = this.#t()), () => {
      n(), this.#r(), globalThis.bitsTextSelectionLayers.delete(this);
    }));
  }
  #t() {
    return yi(St(this.domContext.getDocument(), "pointerdown", this.#n), St(this.domContext.getDocument(), "pointerup", Tg(this.#r, this.opts.onPointerUp.current)));
  }
  #n = (e) => {
    const n = this.opts.ref.current, r = e.target;
    !Hl(n) || !Hl(r) || !this.opts.enabled.current || !G3(this) || !r3(n, r) || (this.opts.onPointerDown.current(e), !e.defaultPrevented && (this.#e = U3(n, this.domContext.getDocument().body)));
  };
  #r = () => {
    this.#e(), this.#e = qe;
  };
}
const qd = (t) => t.style.userSelect || t.style.webkitUserSelect;
function U3(t, e) {
  const n = qd(e), r = qd(t);
  return gs(e, "none"), gs(t, "text"), () => {
    gs(e, n), gs(t, r);
  };
}
function gs(t, e) {
  t.style.userSelect = e, t.style.webkitUserSelect = e;
}
function G3(t) {
  const e = [...globalThis.bitsTextSelectionLayers];
  if (!e.length) return !1;
  const n = e.at(-1);
  return n ? n[0] === t : !1;
}
function ov(t, e) {
  le(e, !0);
  let n = g(e, "preventOverflowTextSelection", 7, !0), r = g(e, "onPointerDown", 7, qe), o = g(e, "onPointerUp", 7, qe), i = g(e, "id", 7), s = g(e, "children", 7), a = g(e, "enabled", 7), l = g(e, "ref", 7);
  Gu.create({
    id: ve(() => i()),
    onPointerDown: ve(() => r()),
    onPointerUp: ve(() => o()),
    enabled: ve(() => a() && n()),
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
    set onPointerDown(f = qe) {
      r(f), p();
    },
    get onPointerUp() {
      return o();
    },
    set onPointerUp(f = qe) {
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
  }, d = fe(), h = ee(d);
  return Te(h, () => s() ?? We), M(t, d), ue(u);
}
se(
  ov,
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
function sa(t = "bits") {
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
    return this.#t += 1, c(this.#n) === void 0 && (this.#r = yo(() => {
      F(this.#n, this.#e(...e), !0);
    })), Fe(() => () => {
      this.#o();
    }), c(this.#n);
  }
}
const Es = new ix();
let vs = /* @__PURE__ */ we(null), il = null, si = null, ai = !1;
const Yd = ve(() => {
  for (const t of Es.values())
    if (t) return !0;
  return !1;
});
let sl = null;
const Q3 = new J3(() => {
  function t() {
    document.body.setAttribute("style", c(vs) ?? ""), document.body.style.removeProperty("--scrollbar-width"), Il && il?.(), F(vs, null);
  }
  function e() {
    si !== null && (window.clearTimeout(si), si = null);
  }
  function n(o, i) {
    e(), ai = !0, sl = Date.now();
    const s = sl, a = () => {
      si = null, sl === s && (iv(Es) ? ai = !1 : (ai = !1, i()));
    }, l = o === null ? 24 : o;
    si = window.setTimeout(a, l);
  }
  function r() {
    c(vs) === null && Es.size === 0 && !ai && F(vs, document.body.getAttribute("style"), !0);
  }
  return zt(() => Yd.current, () => {
    if (!Yd.current) return;
    r(), ai = !1;
    const o = getComputedStyle(document.documentElement), i = getComputedStyle(document.body), s = o.scrollbarGutter?.includes("stable") || i.scrollbarGutter?.includes("stable"), a = window.innerWidth - document.documentElement.clientWidth, l = {
      padding: Number.parseInt(i.paddingRight ?? "0", 10) + a,
      margin: Number.parseInt(i.marginRight ?? "0", 10)
    };
    a > 0 && !s && (document.body.style.paddingRight = `${l.padding}px`, document.body.style.marginRight = `${l.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`)), document.body.style.overflow = "hidden", Il && (il = St(
      document,
      "touchmove",
      (u) => {
        u.target === document.documentElement && (u.touches.length > 1 || u.preventDefault());
      },
      { passive: !1 }
    )), Ui(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }), Uo(() => () => {
    il?.();
  }), {
    get lockMap() {
      return Es;
    },
    resetBodyStyle: t,
    scheduleCleanupIfNoNewLocks: n,
    cancelPendingCleanup: e,
    ensureInitialStyleCaptured: r
  };
});
class ek {
  #e = sa();
  #t;
  #n = () => null;
  #r;
  locked;
  constructor(e, n = () => null) {
    this.#t = e, this.#n = n, this.#r = Q3.get(), this.#r && (this.#r.cancelPendingCleanup(), this.#r.ensureInitialStyleCaptured(), this.#r.lockMap.set(this.#e, this.#t ?? !1), this.locked = ve(() => this.#r.lockMap.get(this.#e) ?? !1, (r) => this.#r.lockMap.set(this.#e, r)), Uo(() => {
      if (this.#r.lockMap.delete(this.#e), iv(this.#r.lockMap)) return;
      const r = this.#n();
      this.#r.scheduleCleanupIfNoNewLocks(r, () => {
        this.#r.resetBodyStyle();
      });
    }));
  }
}
function iv(t) {
  for (const [e, n] of t)
    if (n) return !0;
  return !1;
}
function jl(t, e) {
  le(e, !0);
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
  return ue(o);
}
se(jl, { preventScroll: {}, restoreScrollDelay: {} }, [], [], !0);
const tk = Zu({
  component: "checkbox",
  parts: ["root", "group", "group-label", "input"]
}), nk = new Yr("Checkbox.Group"), sv = new Yr("Checkbox.Root");
class Ju {
  static create(e, n = null) {
    return sv.set(new Ju(e, n));
  }
  opts;
  group;
  #e = /* @__PURE__ */ S(() => this.group && this.group.opts.name.current ? this.group.opts.name.current : this.opts.name.current);
  get trueName() {
    return c(this.#e);
  }
  set trueName(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => this.group && this.group.opts.required.current ? !0 : this.opts.required.current);
  get trueRequired() {
    return c(this.#t);
  }
  set trueRequired(e) {
    F(this.#t, e);
  }
  #n = /* @__PURE__ */ S(() => this.group && this.group.opts.disabled.current ? !0 : this.opts.disabled.current);
  get trueDisabled() {
    return c(this.#n);
  }
  set trueDisabled(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ S(() => this.group && this.group.opts.readonly.current ? !0 : this.opts.readonly.current);
  get trueReadonly() {
    return c(this.#r);
  }
  set trueReadonly(e) {
    F(this.#r, e);
  }
  attachment;
  constructor(e, n) {
    this.opts = e, this.group = n, this.attachment = Lr(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), zt.pre(
      [
        () => hu(this.group?.opts.value.current),
        () => this.opts.value.current
      ],
      ([r, o]) => {
        !r || !o || (this.opts.checked.current = r.includes(o));
      }
    ), zt.pre(() => this.opts.checked.current, (r) => {
      this.group && (r ? this.group?.addValue(this.opts.value.current) : this.group?.removeValue(this.opts.value.current));
    });
  }
  onkeydown(e) {
    if (!(this.trueDisabled || this.trueReadonly)) {
      if (e.key === Vl) {
        e.preventDefault(), this.opts.type.current === "submit" && e.currentTarget.closest("form")?.requestSubmit();
        return;
      }
      e.key === Os && (e.preventDefault(), this.#o());
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
  #i = /* @__PURE__ */ S(() => ({
    checked: this.opts.checked.current,
    indeterminate: this.opts.indeterminate.current
  }));
  get snippetProps() {
    return c(this.#i);
  }
  set snippetProps(e) {
    F(this.#i, e);
  }
  #a = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "checkbox",
    type: this.opts.type.current,
    disabled: this.trueDisabled,
    "aria-checked": s3(this.opts.checked.current, this.opts.indeterminate.current),
    "aria-required": Dl(this.trueRequired),
    "aria-readonly": Dl(this.trueReadonly),
    "data-disabled": ta(this.trueDisabled),
    "data-readonly": ta(this.trueReadonly),
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
class Qu {
  static create() {
    return new Qu(sv.get());
  }
  root;
  #e = /* @__PURE__ */ S(() => this.root.group ? !!(this.root.opts.value.current !== void 0 && this.root.group.opts.value.current.includes(this.root.opts.value.current)) : this.root.opts.checked.current);
  get trueChecked() {
    return c(this.#e);
  }
  set trueChecked(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => !!this.root.trueName);
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
    Hl(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
  }
  #n = /* @__PURE__ */ S(() => ({
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
function ec(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  const o = /* @__PURE__ */ S(() => Gn(r, {
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
  }, s = fe(), a = ee(s);
  {
    var l = (d) => {
      var h = ok();
      ot(h, () => ({ ...c(o), value: n() }), void 0, void 0, void 0, void 0, !0), M(d, h);
    }, u = (d) => {
      var h = ik();
      ot(h, () => ({ ...c(o) }), void 0, void 0, void 0, void 0, !0), Ls(h, n), M(d, h);
    };
    ae(a, (d) => {
      c(o).type === "checkbox" ? d(l) : d(u, !1);
    });
  }
  return M(t, s), ue(i);
}
se(ec, { value: {} }, [], [], !0);
function av(t, e) {
  le(e, !1);
  const n = Qu.create();
  Cu();
  var r = fe(), o = ee(r);
  {
    var i = (s) => {
      ec(s, Ze(() => n.props));
    };
    ae(o, (s) => {
      n.shouldRender && s(i);
    });
  }
  M(t, r), ue();
}
se(av, {}, [], [], !0);
var sk = /* @__PURE__ */ re("<button><!></button>"), ak = /* @__PURE__ */ re("<!> <!>", 1);
function lv(t, e) {
  const n = Hi();
  le(e, !0);
  let r = g(e, "checked", 15, !1), o = g(e, "ref", 15, null), i = g(e, "onCheckedChange", 7), s = g(e, "children", 7), a = g(e, "disabled", 7, !1), l = g(e, "required", 7, !1), u = g(e, "name", 23, () => {
  }), d = g(e, "value", 7, "on"), h = g(e, "id", 23, () => er(n)), f = g(e, "indeterminate", 15, !1), v = g(e, "onIndeterminateChange", 7), m = g(e, "child", 7), y = g(e, "type", 7, "button"), w = g(e, "readonly", 7), b = /* @__PURE__ */ je(e, [
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
  x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1)), zt.pre(() => d(), () => {
    x && d() && (x.opts.value.current.includes(d()) ? r(!0) : r(!1));
  });
  const P = Ju.create(
    {
      checked: ve(() => r(), (D) => {
        r(D), i()?.(D);
      }),
      disabled: ve(() => a() ?? !1),
      required: ve(() => l()),
      name: ve(() => u()),
      value: ve(() => d()),
      id: ve(() => h()),
      ref: ve(() => o(), (D) => o(D)),
      indeterminate: ve(() => f(), (D) => {
        f(D), v()?.(D);
      }),
      type: ve(() => y()),
      readonly: ve(() => !!w())
    },
    x
  ), C = /* @__PURE__ */ S(() => Gn({ ...b }, P.props));
  var k = {
    get checked() {
      return r();
    },
    set checked(D = !1) {
      r(D), p();
    },
    get ref() {
      return o();
    },
    set ref(D = null) {
      o(D), p();
    },
    get onCheckedChange() {
      return i();
    },
    set onCheckedChange(D) {
      i(D), p();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), p();
    },
    get disabled() {
      return a();
    },
    set disabled(D = !1) {
      a(D), p();
    },
    get required() {
      return l();
    },
    set required(D = !1) {
      l(D), p();
    },
    get name() {
      return u();
    },
    set name(D = void 0) {
      u(D), p();
    },
    get value() {
      return d();
    },
    set value(D = "on") {
      d(D), p();
    },
    get id() {
      return h();
    },
    set id(D = er(n)) {
      h(D), p();
    },
    get indeterminate() {
      return f();
    },
    set indeterminate(D = !1) {
      f(D), p();
    },
    get onIndeterminateChange() {
      return v();
    },
    set onIndeterminateChange(D) {
      v(D), p();
    },
    get child() {
      return m();
    },
    set child(D) {
      m(D), p();
    },
    get type() {
      return y();
    },
    set type(D = "button") {
      y(D), p();
    },
    get readonly() {
      return w();
    },
    set readonly(D) {
      w(D), p();
    }
  }, E = ak(), V = ee(E);
  {
    var I = (D) => {
      var _ = fe(), N = ee(_);
      {
        let $ = /* @__PURE__ */ S(() => ({ props: c(C), ...P.snippetProps }));
        Te(N, m, () => c($));
      }
      M(D, _);
    }, L = (D) => {
      var _ = sk();
      ot(_, () => ({ ...c(C) }));
      var N = Y(_);
      Te(N, () => s() ?? We, () => P.snippetProps), X(_), M(D, _);
    };
    ae(V, (D) => {
      m() ? D(I) : D(L, !1);
    });
  }
  var A = R(V, 2);
  return av(A, {}), M(t, E), ue(k);
}
se(
  lv,
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
const lk = ["top", "right", "bottom", "left"], jr = Math.min, pn = Math.max, aa = Math.round, ms = Math.floor, Jn = (t) => ({
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
function Bl(t, e, n) {
  return pn(t, jr(e, n));
}
function kr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Cr(t) {
  return t.split("-")[0];
}
function Go(t) {
  return t.split("-")[1];
}
function tc(t) {
  return t === "x" ? "y" : "x";
}
function nc(t) {
  return t === "y" ? "height" : "width";
}
const dk = /* @__PURE__ */ new Set(["top", "bottom"]);
function qn(t) {
  return dk.has(Cr(t)) ? "y" : "x";
}
function rc(t) {
  return tc(qn(t));
}
function hk(t, e, n) {
  n === void 0 && (n = !1);
  const r = Go(t), o = rc(t), i = nc(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = la(s)), [s, la(s)];
}
function fk(t) {
  const e = la(t);
  return [Kl(t), e, Kl(e)];
}
function Kl(t) {
  return t.replace(/start|end/g, (e) => ck[e]);
}
const Ud = ["left", "right"], Gd = ["right", "left"], pk = ["top", "bottom"], gk = ["bottom", "top"];
function vk(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Gd : Ud : e ? Ud : Gd;
    case "left":
    case "right":
      return e ? pk : gk;
    default:
      return [];
  }
}
function mk(t, e, n, r) {
  const o = Go(t);
  let i = vk(Cr(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(Kl)))), i;
}
function la(t) {
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
function uv(t) {
  return typeof t != "number" ? yk(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ua(t) {
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
function Jd(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = qn(e), s = rc(e), a = nc(s), l = Cr(e), u = i === "y", d = r.x + r.width / 2 - o.width / 2, h = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Go(e)) {
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
  } = Jd(u, r, l), f = r, v = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: b
    } = a[y], {
      x,
      y: P,
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
    d = x ?? d, h = P ?? h, v = {
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
    } = Jd(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Ti(t, e) {
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
  } = kr(e, t), m = uv(v), y = a[f ? h === "floating" ? "reference" : "floating" : h], w = ua(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), P = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ua(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + m.top) / P.y,
    bottom: (C.bottom - w.bottom + m.bottom) / P.y,
    left: (w.left - C.left + m.left) / P.x,
    right: (C.right - w.right + m.right) / P.x
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
    } = kr(t, e) || {};
    if (u == null)
      return {};
    const h = uv(d), f = {
      x: n,
      y: r
    }, v = rc(o), m = nc(v), y = await s.getDimensions(u), w = v === "y", b = w ? "top" : "left", x = w ? "bottom" : "right", P = w ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[v] - f[v] - i.floating[m], k = f[v] - i.reference[v], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = E ? E[P] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(E))) && (V = a.floating[P] || i.floating[m]);
    const I = C / 2 - k / 2, L = V / 2 - y[m] / 2 - 1, A = jr(h[b], L), D = jr(h[x], L), _ = A, N = V - y[m] - D, $ = V / 2 - y[m] / 2 + I, O = Bl(_, $, N), z = !l.arrow && Go(o) != null && $ !== O && i.reference[m] / 2 - ($ < _ ? A : D) - y[m] / 2 < 0, j = z ? $ < _ ? $ - _ : $ - N : 0;
    return {
      [v]: f[v] + j,
      data: {
        [v]: O,
        centerOffset: $ - O - j,
        ...z && {
          alignmentOffset: j
        }
      },
      reset: z
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
      } = kr(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Cr(o), x = qn(a), P = Cr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (P || !y ? [la(a)] : fk(a)), E = m !== "none";
      !f && E && k.push(...mk(a, y, m, C));
      const V = [a, ...k], I = await Ti(e, w), L = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && L.push(I[b]), h) {
        const $ = hk(o, s, C);
        L.push(I[$[0]], I[$[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: L
      }], !L.every(($) => $ <= 0)) {
        var D, _;
        const $ = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, O = V[$];
        if (O && (!(h === "alignment" && x !== qn(O)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((j) => qn(j.placement) === x ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: A
            },
            reset: {
              placement: O
            }
          };
        let z = (_ = A.filter((j) => j.overflows[0] <= 0).sort((j, q) => j.overflows[1] - q.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!z)
          switch (v) {
            case "bestFit": {
              var N;
              const j = (N = A.filter((q) => {
                if (E) {
                  const G = qn(q.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((G) => G > 0).reduce((G, T) => G + T, 0)]).sort((q, G) => q[1] - G[1])[0]) == null ? void 0 : N[0];
              j && (z = j);
              break;
            }
            case "initialPlacement":
              z = a;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function Qd(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function eh(t) {
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
      } = kr(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await Ti(e, {
            ...o,
            elementContext: "reference"
          }), s = Qd(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: eh(s)
            }
          };
        }
        case "escaped": {
          const i = await Ti(e, {
            ...o,
            altBoundary: !0
          }), s = Qd(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: eh(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, cv = /* @__PURE__ */ new Set(["left", "top"]);
async function Ck(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Cr(n), a = Go(n), l = qn(n) === "y", u = cv.has(s) ? -1 : 1, d = i && l ? -1 : 1, h = kr(e, t);
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
      } = kr(t, e), u = {
        x: n,
        y: r
      }, d = await Ti(e, l), h = qn(Cr(o)), f = tc(h);
      let v = u[f], m = u[h];
      if (i) {
        const w = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = v + d[w], P = v - d[b];
        v = Bl(x, v, P);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", x = m + d[w], P = m - d[b];
        m = Bl(x, m, P);
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
      } = kr(t, e), d = {
        x: n,
        y: r
      }, h = qn(o), f = tc(h);
      let v = d[f], m = d[h];
      const y = kr(a, e), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const P = f === "y" ? "height" : "width", C = i.reference[f] - i.floating[P] + w.mainAxis, k = i.reference[f] + i.reference[P] - w.mainAxis;
        v < C ? v = C : v > k && (v = k);
      }
      if (u) {
        var b, x;
        const P = f === "y" ? "width" : "height", C = cv.has(Cr(o)), k = i.reference[h] - i.floating[P] + (C && ((b = s.offset) == null ? void 0 : b[h]) || 0) + (C ? 0 : w.crossAxis), E = i.reference[h] + i.reference[P] + (C ? 0 : ((x = s.offset) == null ? void 0 : x[h]) || 0) - (C ? w.crossAxis : 0);
        m < k ? m = k : m > E && (m = E);
      }
      return {
        [f]: v,
        [h]: m
      };
    }
  };
}, Pk = function(t) {
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
      } = kr(t, e), d = await Ti(e, u), h = Cr(o), f = Go(o), v = qn(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let w, b;
      h === "top" || h === "bottom" ? (w = h, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = h, w = f === "end" ? "top" : "bottom");
      const x = y - d.top - d.bottom, P = m - d.left - d.right, C = jr(y - d[w], x), k = jr(m - d[b], P), E = !e.middlewareData.shift;
      let V = C, I = k;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (I = P), (r = e.middlewareData.shift) != null && r.enabled.y && (V = x), E && !f) {
        const A = pn(d.left, 0), D = pn(d.right, 0), _ = pn(d.top, 0), N = pn(d.bottom, 0);
        v ? I = m - 2 * (A !== 0 || D !== 0 ? A + D : pn(d.left, d.right)) : V = y - 2 * (_ !== 0 || N !== 0 ? _ + N : pn(d.top, d.bottom));
      }
      await l({
        ...e,
        availableWidth: I,
        availableHeight: V
      });
      const L = await s.getDimensions(a.floating);
      return m !== L.width || y !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Va() {
  return typeof window < "u";
}
function Jo(t) {
  return dv(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function vn(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function or(t) {
  var e;
  return (e = (dv(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function dv(t) {
  return Va() ? t instanceof Node || t instanceof vn(t).Node : !1;
}
function Vn(t) {
  return Va() ? t instanceof Element || t instanceof vn(t).Element : !1;
}
function tr(t) {
  return Va() ? t instanceof HTMLElement || t instanceof vn(t).HTMLElement : !1;
}
function th(t) {
  return !Va() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof vn(t).ShadowRoot;
}
const Ok = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ji(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = In(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !Ok.has(o);
}
const Ek = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Nk(t) {
  return Ek.has(Jo(t));
}
const Tk = [":popover-open", ":modal"];
function Ia(t) {
  return Tk.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const zk = ["transform", "translate", "scale", "rotate", "perspective"], Mk = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ak = ["paint", "layout", "strict", "content"];
function oc(t) {
  const e = ic(), n = Vn(t) ? In(t) : t;
  return zk.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || Mk.some((r) => (n.willChange || "").includes(r)) || Ak.some((r) => (n.contain || "").includes(r));
}
function Dk(t) {
  let e = Br(t);
  for (; tr(e) && !Zo(e); ) {
    if (oc(e))
      return e;
    if (Ia(e))
      return null;
    e = Br(e);
  }
  return null;
}
function ic() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Vk = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Zo(t) {
  return Vk.has(Jo(t));
}
function In(t) {
  return vn(t).getComputedStyle(t);
}
function Ha(t) {
  return Vn(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function Br(t) {
  if (Jo(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    th(t) && t.host || // Fallback.
    or(t)
  );
  return th(e) ? e.host : e;
}
function hv(t) {
  const e = Br(t);
  return Zo(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : tr(e) && Ji(e) ? e : hv(e);
}
function zi(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = hv(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = vn(o);
  if (i) {
    const a = Fl(s);
    return e.concat(s, s.visualViewport || [], Ji(o) ? o : [], a && n ? zi(a) : []);
  }
  return e.concat(o, zi(o, [], n));
}
function Fl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function fv(t) {
  const e = In(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = tr(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = aa(n) !== i || aa(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function sc(t) {
  return Vn(t) ? t : t.contextElement;
}
function Ao(t) {
  const e = sc(t);
  if (!tr(e))
    return Jn(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = fv(e);
  let s = (i ? aa(n.width) : n.width) / r, a = (i ? aa(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Ik = /* @__PURE__ */ Jn(0);
function pv(t) {
  const e = vn(t);
  return !ic() || !e.visualViewport ? Ik : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Hk(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== vn(t) ? !1 : e;
}
function go(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = sc(t);
  let s = Jn(1);
  e && (r ? Vn(r) && (s = Ao(r)) : s = Ao(t));
  const a = Hk(i, n, r) ? pv(i) : Jn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, h = o.height / s.y;
  if (i) {
    const f = vn(i), v = r && Vn(r) ? vn(r) : r;
    let m = f, y = Fl(m);
    for (; y && r && v !== m; ) {
      const w = Ao(y), b = y.getBoundingClientRect(), x = In(y), P = b.left + (y.clientLeft + parseFloat(x.paddingLeft)) * w.x, C = b.top + (y.clientTop + parseFloat(x.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, h *= w.y, l += P, u += C, m = vn(y), y = Fl(m);
    }
  }
  return ua({
    width: d,
    height: h,
    x: l,
    y: u
  });
}
function La(t, e) {
  const n = Ha(t).scrollLeft;
  return e ? e.left + n : go(or(t)).left + n;
}
function gv(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - La(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Lk(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = or(r), a = e ? Ia(e.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Jn(1);
  const d = Jn(0), h = tr(r);
  if ((h || !h && !i) && ((Jo(r) !== "body" || Ji(s)) && (l = Ha(r)), tr(r))) {
    const v = go(r);
    u = Ao(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const f = s && !h && !i ? gv(s, l) : Jn(0);
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
  const e = or(t), n = Ha(t), r = t.ownerDocument.body, o = pn(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = pn(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + La(t);
  const a = -n.scrollTop;
  return In(r).direction === "rtl" && (s += pn(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const nh = 25;
function Bk(t, e) {
  const n = vn(t), r = or(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = ic();
    (!d || d && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = La(r);
  if (u <= 0) {
    const d = r.ownerDocument, h = d.body, f = getComputedStyle(h), v = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - h.clientWidth - v);
    m <= nh && (i -= m);
  } else u <= nh && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const Kk = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Fk(t, e) {
  const n = go(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = tr(t) ? Ao(t) : Jn(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function rh(t, e, n) {
  let r;
  if (e === "viewport")
    r = Bk(t, n);
  else if (e === "document")
    r = jk(or(t));
  else if (Vn(e))
    r = Fk(e, n);
  else {
    const o = pv(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return ua(r);
}
function vv(t, e) {
  const n = Br(t);
  return n === e || !Vn(n) || Zo(n) ? !1 : In(n).position === "fixed" || vv(n, e);
}
function Zk(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = zi(t, [], !1).filter((a) => Vn(a) && Jo(a) !== "body"), o = null;
  const i = In(t).position === "fixed";
  let s = i ? Br(t) : t;
  for (; Vn(s) && !Zo(s); ) {
    const a = In(s), l = oc(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && Kk.has(o.position) || Ji(s) && !l && vv(t, s)) ? r = r.filter((u) => u !== s) : o = a, s = Br(s);
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
  const i = [...n === "clippingAncestors" ? Ia(e) ? [] : Zk(e, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = rh(e, u, o);
    return l.top = pn(d.top, l.top), l.right = jr(d.right, l.right), l.bottom = jr(d.bottom, l.bottom), l.left = pn(d.left, l.left), l;
  }, rh(e, s, o));
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
  } = fv(t);
  return {
    width: e,
    height: n
  };
}
function qk(t, e, n) {
  const r = tr(e), o = or(e), i = n === "fixed", s = go(t, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Jn(0);
  function u() {
    l.x = La(o);
  }
  if (r || !r && !i)
    if ((Jo(e) !== "body" || Ji(o)) && (a = Ha(e)), r) {
      const v = go(e, !0, i, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? gv(o, a) : Jn(0), h = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: h,
    y: f,
    width: s.width,
    height: s.height
  };
}
function al(t) {
  return In(t).position === "static";
}
function oh(t, e) {
  if (!tr(t) || In(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return or(t) === n && (n = n.ownerDocument.body), n;
}
function mv(t, e) {
  const n = vn(t);
  if (Ia(t))
    return n;
  if (!tr(t)) {
    let o = Br(t);
    for (; o && !Zo(o); ) {
      if (Vn(o) && !al(o))
        return o;
      o = Br(o);
    }
    return n;
  }
  let r = oh(t, e);
  for (; r && Nk(r) && al(r); )
    r = oh(r, e);
  return r && Zo(r) && al(r) && !oc(r) ? n : r || Dk(t) || n;
}
const Yk = async function(t) {
  const e = this.getOffsetParent || mv, n = this.getDimensions, r = await n(t.floating);
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
function Uk(t) {
  return In(t).direction === "rtl";
}
const Gk = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lk,
  getDocumentElement: or,
  getClippingRect: Wk,
  getOffsetParent: mv,
  getElementRects: Yk,
  getClientRects: Rk,
  getDimensions: Xk,
  getScale: Ao,
  isElement: Vn,
  isRTL: Uk
};
function yv(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Jk(t, e) {
  let n = null, r;
  const o = or(t);
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
    const m = ms(h), y = ms(o.clientWidth - (d + f)), w = ms(o.clientHeight - (h + v)), b = ms(d), x = {
      rootMargin: -m + "px " + -y + "px " + -w + "px " + -b + "px",
      threshold: pn(0, jr(1, l)) || 1
    };
    let P = !0;
    function C(k) {
      const E = k[0].intersectionRatio;
      if (E !== l) {
        if (!P)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !yv(u, t.getBoundingClientRect()) && s(), P = !1;
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
  } = r, u = sc(t), d = o || i ? [...u ? zi(u) : [], ...zi(e)] : [];
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
      var P;
      (P = v) == null || P.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, y = l ? go(t) : null;
  l && w();
  function w() {
    const b = go(t);
    y && !yv(y, b) && n(), y = b, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), h?.(), (b = v) == null || b.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const wv = $k, bv = Sk, xv = xk, e4 = Pk, t4 = kk, kv = bk, n4 = _k, Cv = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Gk,
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
function Jr(t) {
  return typeof t == "function" ? t() : t;
}
function $v(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ih(t, e) {
  const n = $v(t);
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
  const e = t.whileElementsMounted, n = /* @__PURE__ */ S(() => Jr(t.open) ?? !0), r = /* @__PURE__ */ S(() => Jr(t.middleware)), o = /* @__PURE__ */ S(() => Jr(t.transform) ?? !0), i = /* @__PURE__ */ S(() => Jr(t.placement) ?? "bottom"), s = /* @__PURE__ */ S(() => Jr(t.strategy) ?? "absolute"), a = /* @__PURE__ */ S(() => Jr(t.sideOffset) ?? 0), l = /* @__PURE__ */ S(() => Jr(t.alignOffset) ?? 0), u = t.reference;
  let d = /* @__PURE__ */ we(0), h = /* @__PURE__ */ we(0);
  const f = Xn(null);
  let v = /* @__PURE__ */ we($t(c(s))), m = /* @__PURE__ */ we($t(c(i))), y = /* @__PURE__ */ we($t({})), w = /* @__PURE__ */ we(!1), b = !1, x = 0;
  const P = /* @__PURE__ */ S(() => {
    const A = f.current ? ih(f.current, c(d)) : c(d), D = f.current ? ih(f.current, c(h)) : c(h);
    return c(o) ? {
      position: c(v),
      left: "0",
      top: "0",
      transform: `translate(${A}px, ${D}px)`,
      ...f.current && $v(f.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: c(v),
      left: `${A}px`,
      top: `${D}px`
    };
  });
  let C;
  function k() {
    if (u.current === null || f.current === null) return;
    const A = u.current, D = f.current, _ = ++x;
    Cv(A, D, {
      middleware: c(r),
      placement: c(i),
      strategy: c(s)
    }).then((N) => {
      if (!(_ !== x || u.current !== A || f.current !== D)) {
        if (i4(A)) {
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
          if (N.x <= $ && N.y <= $) return;
        }
        F(d, N.x, !0), F(h, N.y, !0), F(v, N.strategy, !0), F(m, N.placement, !0), F(y, N.middlewareData, !0), F(w, !0);
      }
    });
  }
  function E() {
    typeof C == "function" && (C(), C = void 0), x++;
  }
  function V() {
    if (E(), e === void 0) {
      k();
      return;
    }
    c(n) && (u.current === null || f.current === null || (C = e(u.current, f.current, k)));
  }
  function I() {
    !c(n) && f.current === null && F(w, !1);
  }
  function L() {
    return [
      c(r),
      c(i),
      c(s),
      c(a),
      c(l),
      c(n)
    ];
  }
  return Fe(() => {
    e === void 0 && c(n) && k();
  }), Fe(V), Fe(() => {
    if (e !== void 0) {
      if (L(), !c(n)) {
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
  }), Fe(I), Fe(() => E), {
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
      return c(P);
    },
    get update() {
      return k;
    }
  };
}
function i4(t) {
  return t instanceof Element ? !t.isConnected || t instanceof HTMLElement && t.hidden ? !0 : t.getClientRects().length === 0 : !1;
}
const s4 = { top: "bottom", right: "left", bottom: "top", left: "right" }, ac = new Yr("Floating.Root"), sh = new Yr("Floating.Content"), lc = new Yr("Floating.Root");
class ca {
  static create(e = !1) {
    return e ? lc.set(new ca()) : ac.set(new ca());
  }
  anchorNode = Xn(null);
  customAnchorNode = Xn(null);
  triggerNode = Xn(null);
  constructor() {
    Fe(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
class da {
  static create(e, n = !1) {
    return n ? sh.set(new da(e, lc.get())) : sh.set(new da(e, ac.get()));
  }
  opts;
  root;
  // nodes
  contentRef = Xn(null);
  wrapperRef = Xn(null);
  arrowRef = Xn(null);
  contentAttachment = Lr(this.contentRef);
  wrapperAttachment = Lr(this.wrapperRef);
  arrowAttachment = Lr(this.arrowRef);
  // ids
  arrowId = Xn(sa());
  #e = /* @__PURE__ */ S(() => {
    if (typeof this.opts.style == "string") return fi(this.opts.style);
    if (!this.opts.style) return {};
  });
  #t = void 0;
  #n = new q5(() => this.arrowRef.current ?? void 0);
  #r = /* @__PURE__ */ S(() => this.#n?.width ?? 0);
  #o = /* @__PURE__ */ S(() => this.#n?.height ?? 0);
  #i = /* @__PURE__ */ S(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #a = /* @__PURE__ */ S(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #s = /* @__PURE__ */ S(() => c(this.#a).length > 0);
  get hasExplicitBoundaries() {
    return c(this.#s);
  }
  set hasExplicitBoundaries(e) {
    F(this.#s, e);
  }
  #l = /* @__PURE__ */ S(() => ({
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
  #p = /* @__PURE__ */ S(() => [
    wv({
      mainAxis: this.opts.sideOffset.current + c(this.#o),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && bv({
      mainAxis: !0,
      crossAxis: !1,
      limiter: this.opts.sticky.current === "partial" ? n4() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && xv({ ...this.detectOverflowOptions }),
    e4({
      ...this.detectOverflowOptions,
      apply: ({ rects: e, availableWidth: n, availableHeight: r }) => {
        const { width: o, height: i } = e.reference;
        F(this.#u, n, !0), F(this.#c, r, !0), F(this.#d, o, !0), F(this.#h, i, !0);
      }
    }),
    this.arrowRef.current && kv({
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
  #f = /* @__PURE__ */ S(() => l4(this.floating.placement));
  get placedSide() {
    return c(this.#f);
  }
  set placedSide(e) {
    F(this.#f, e);
  }
  #y = /* @__PURE__ */ S(() => u4(this.floating.placement));
  get placedAlign() {
    return c(this.#y);
  }
  set placedAlign(e) {
    F(this.#y, e);
  }
  #v = /* @__PURE__ */ S(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return c(this.#v);
  }
  set arrowX(e) {
    F(this.#v, e);
  }
  #w = /* @__PURE__ */ S(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return c(this.#w);
  }
  set arrowY(e) {
    F(this.#w, e);
  }
  #m = /* @__PURE__ */ S(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
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
  #b = /* @__PURE__ */ S(() => s4[this.placedSide]);
  get arrowBaseSide() {
    return c(this.#b);
  }
  set arrowBaseSide(e) {
    F(this.#b, e);
  }
  #x = /* @__PURE__ */ S(() => ({
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
  #k = /* @__PURE__ */ S(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: Fu({ ...c(this.#e) }),
    ...this.contentAttachment
  }));
  get props() {
    return c(this.#k);
  }
  set props(e) {
    F(this.#k, e);
  }
  #C = /* @__PURE__ */ S(() => ({
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
    this.opts = e, this.root = n, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), zt(() => e.customAnchor.current, (r) => {
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
    }), Fe(() => {
      this.floating.isPositioned && this.opts.onPlaced?.current();
    }), zt(() => this.contentRef.current, (r) => {
      if (!r || !this.opts.enabled.current) return;
      const o = Ig(r), i = o.requestAnimationFrame(() => {
        if (this.contentRef.current !== r || !this.opts.enabled.current) return;
        const s = o.getComputedStyle(r).zIndex;
        s !== this.contentZIndex && (this.contentZIndex = s);
      });
      return () => {
        o.cancelAnimationFrame(i);
      };
    }), Fe(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
}
class ha {
  static create(e, n = !1) {
    return n ? new ha(e, lc.get()) : new ha(e, ac.get());
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
      const { placement: n, rects: r, middlewareData: o } = e, i = o.arrow?.centerOffset !== 0, s = i ? 0 : t.arrowWidth, a = i ? 0 : t.arrowHeight, [l, u] = uc(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = i ? d : `${h}px`, m = `${-a}px`) : l === "top" ? (v = i ? d : `${h}px`, m = `${r.floating.height + a}px`) : l === "right" ? (v = `${-a}px`, m = i ? d : `${f}px`) : l === "left" && (v = `${r.floating.width + a}px`, m = i ? d : `${f}px`), { data: { x: v, y: m } };
    }
  };
}
function uc(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function l4(t) {
  return uc(t)[0];
}
function u4(t) {
  return uc(t)[1];
}
function Sv(t, e) {
  le(e, !0);
  let n = g(e, "children", 7), r = g(e, "tooltip", 7, !1);
  ca.create(r());
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
  }, i = fe(), s = ee(i);
  return Te(s, () => n() ?? We), M(t, i), ue(o);
}
se(Sv, { children: {}, tooltip: {} }, [], [], !0);
class c4 {
  #e;
  #t = /* @__PURE__ */ S(() => this.#e.candidateValues());
  #n;
  constructor(e) {
    this.#e = e, this.#n = ev("", { afterMs: 1e3, getWindow: this.#e.getWindow }), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(e) {
    if (!this.#e.enabled() || !c(this.#t).length) return;
    this.#n.current = this.#n.current + e;
    const n = this.#e.getCurrentItem(), r = c(this.#t).find((a) => a === n) ?? "", o = c(this.#t).map((a) => a ?? ""), i = Wu(o, this.#n.current, r), s = c(this.#t).find((a) => a === i);
    return s && this.#e.onMatch(s), s;
  }
  resetTypeahead() {
    this.#n.current = "";
  }
}
const d4 = [pi, Bg, Rg], h4 = [Oo, jg, Lg], f4 = [...d4, ...h4], p4 = Zu({
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
}), Qi = new Yr("Select.Root | Combobox.Root"), _v = new Yr("Select.Content | Combobox.Content");
class Pv {
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
  #s = /* @__PURE__ */ S(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-value") : null);
  get highlightedValue() {
    return c(this.#s);
  }
  set highlightedValue(e) {
    F(this.#s, e);
  }
  #l = /* @__PURE__ */ S(() => {
    if (this.highlightedNode)
      return this.highlightedNode.id;
  });
  get highlightedId() {
    return c(this.#l);
  }
  set highlightedId(e) {
    F(this.#l, e);
  }
  #u = /* @__PURE__ */ S(() => this.highlightedNode ? this.highlightedNode.getAttribute("data-label") : null);
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
  domContext = new Gi(() => null);
  constructor(e) {
    this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new f3({
      ref: ve(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    }), rn(() => {
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
class g4 extends Pv {
  opts;
  isMulti = !1;
  #e = /* @__PURE__ */ S(() => this.opts.value.current !== "");
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => this.opts.items.current.length ? this.opts.items.current.find((e) => e.value === this.opts.value.current)?.label ?? "" : "");
  get currentLabel() {
    return c(this.#t);
  }
  set currentLabel(e) {
    F(this.#t, e);
  }
  #n = /* @__PURE__ */ S(() => this.opts.items.current.length ? this.opts.items.current.filter((e) => !e.disabled).map((e) => e.label) : []);
  get candidateLabels() {
    return c(this.#n);
  }
  set candidateLabels(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ S(() => !(this.isMulti || this.opts.items.current.length === 0));
  get dataTypeaheadEnabled() {
    return c(this.#r);
  }
  set dataTypeaheadEnabled(e) {
    F(this.#r, e);
  }
  constructor(e) {
    super(e), this.opts = e, Fe(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), zt(() => this.opts.open.current, () => {
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
    Ui(() => {
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
class v4 extends Pv {
  opts;
  isMulti = !0;
  #e = /* @__PURE__ */ S(() => this.opts.value.current.length > 0);
  get hasValue() {
    return c(this.#e);
  }
  set hasValue(e) {
    F(this.#e, e);
  }
  constructor(e) {
    super(e), this.opts = e, Fe(() => {
      !this.opts.open.current && this.highlightedNode && this.setHighlightedNode(null);
    }), zt(() => this.opts.open.current, () => {
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
    Ui(() => {
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
    return Qi.set(o);
  }
}
class cc {
  static create(e) {
    return new cc(e, Qi.get());
  }
  opts;
  root;
  attachment;
  #e;
  #t;
  constructor(e, n) {
    this.opts = e, this.root = n, this.attachment = Lr(e.ref, (r) => this.root.triggerNode = r), this.root.domContext = new Gi(e.ref), this.#e = new K3({
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
    if (this.root.isUsingKeyboard = !0, (e.key === Oo || e.key === pi) && e.preventDefault(), !this.root.opts.open.current) {
      if (e.key === Vl || e.key === Os || e.key === pi || e.key === Oo)
        e.preventDefault(), this.root.handleOpen();
      else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#t.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const s = this.root.getCandidateNodes();
      if (!s.length) return;
      if (e.key === pi) {
        const a = s[0];
        this.root.setHighlightedNode(a);
      } else if (e.key === Oo) {
        const a = s[s.length - 1];
        this.root.setHighlightedNode(a);
      }
      return;
    }
    if (e.key === Bd) {
      this.root.handleClose();
      return;
    }
    if ((e.key === Vl || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === Os && this.#e.search === "") && !e.isComposing && (e.preventDefault(), this.#o()))
      return;
    if (e.key === Oo && e.altKey && this.root.handleClose(), f4.includes(e.key)) {
      e.preventDefault();
      const s = this.root.getCandidateNodes(), a = this.root.highlightedNode, l = a ? s.indexOf(a) : -1, u = this.root.opts.loop.current;
      let d;
      if (e.key === pi ? d = H3(s, l, u) : e.key === Oo ? d = L3(s, l, u) : e.key === jg ? d = R3(s, l, 10, u) : e.key === Bg ? d = j3(s, l, 10, u) : e.key === Rg ? d = s[0] : e.key === Lg && (d = s[s.length - 1]), !d) return;
      this.root.setHighlightedNode(d);
      return;
    }
    const n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1, o = e.key === Os, i = this.root.getCandidateNodes();
    if (e.key !== Bd) {
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
  #i = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? !0 : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": Dl(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": Hg(this.root.opts.open.current),
    "data-disabled": ta(this.root.opts.disabled.current),
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
class dc {
  static create(e) {
    return _v.set(new dc(e, Qi.get()));
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
    this.opts = e, this.root = n, this.attachment = Lr(e.ref, (r) => this.root.contentNode = r), this.domContext = new Gi(this.opts.ref), this.root.domContext === null && (this.root.domContext = this.domContext), Uo(() => {
      this.root.contentNode = null, this.root.contentIsPositioned = !1, this.isPositioned = !1;
    }), zt(() => this.root.opts.open.current, () => {
      this.root.opts.open.current || (this.root.contentIsPositioned = !1, this.isPositioned = !1);
    }), zt([() => this.isPositioned, () => this.root.highlightedNode], () => {
      !this.isPositioned || !this.root.highlightedNode || this.root.scrollHighlightedNodeIntoView(this.root.highlightedNode);
    }), this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(e) {
    this.root.isUsingKeyboard = !1;
  }
  #t = /* @__PURE__ */ S(() => r4(this.root.isCombobox ? "combobox" : "select"));
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
  #n = /* @__PURE__ */ S(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return c(this.#n);
  }
  set snippetProps(e) {
    F(this.#n, e);
  }
  #r = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": Hg(this.root.opts.open.current),
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
class hc {
  static create(e) {
    return new hc(e, Qi.get());
  }
  opts;
  root;
  attachment;
  #e = /* @__PURE__ */ S(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return c(this.#e);
  }
  set isSelected(e) {
    F(this.#e, e);
  }
  #t = /* @__PURE__ */ S(() => this.root.highlightedValue === this.opts.value.current);
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
    this.opts = e, this.root = n, this.attachment = Lr(e.ref), zt([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      this.isHighlighted ? this.opts.onHighlight.current() : this.prevHighlighted.current && this.opts.onUnhighlight.current();
    }), zt(() => this.mounted, () => {
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
  #r = /* @__PURE__ */ S(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
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
      if (e.pointerType === "touch" && !Il) {
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
  #o = /* @__PURE__ */ S(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": ta(this.opts.disabled.current),
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
class fc {
  static create(e) {
    return new fc(e, Qi.get());
  }
  opts;
  root;
  #e = /* @__PURE__ */ S(() => this.root.opts.name.current !== "");
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
  #t = /* @__PURE__ */ S(() => ({
    disabled: jd(this.root.opts.disabled.current),
    required: jd(this.root.opts.required.current),
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
class pc {
  static create(e) {
    return new pc(e, _v.get());
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
  #t = /* @__PURE__ */ S(() => ({
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
function Ns(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = g(e, "autocomplete", 7);
  const o = fc.create({ value: ve(() => n()) });
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
  }, s = fe(), a = ee(s);
  {
    var l = (u) => {
      ec(u, Ze(() => o.props, {
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
  return M(t, s), ue(i);
}
se(Ns, { value: {}, autocomplete: {} }, [], [], !0);
function Ov(t, e) {
  le(e, !0);
  let n = g(e, "id", 7), r = g(e, "children", 7), o = g(e, "virtualEl", 7), i = g(e, "ref", 7), s = g(e, "tooltip", 7, !1);
  ha.create(
    {
      id: ve(() => n()),
      virtualEl: ve(() => o()),
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
  }, l = fe(), u = ee(l);
  return Te(u, () => r() ?? We), M(t, l), ue(a);
}
se(Ov, { id: {}, children: {}, virtualEl: {}, ref: {}, tooltip: {} }, [], [], !0);
function Ev(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "side", 7, "bottom"), o = g(e, "sideOffset", 7, 0), i = g(e, "align", 7, "center"), s = g(e, "alignOffset", 7, 0), a = g(e, "id", 7), l = g(e, "arrowPadding", 7, 0), u = g(e, "avoidCollisions", 7, !0), d = g(e, "collisionBoundary", 23, () => []), h = g(e, "collisionPadding", 7, 0), f = g(e, "hideWhenDetached", 7, !1), v = g(e, "onPlaced", 7, () => {
  }), m = g(e, "sticky", 7, "partial"), y = g(e, "updatePositionStrategy", 7, "optimized"), w = g(e, "strategy", 7, "fixed"), b = g(e, "dir", 7, "ltr"), x = g(e, "style", 23, () => ({})), P = g(e, "wrapperId", 23, sa), C = g(e, "customAnchor", 7, null), k = g(e, "enabled", 7), E = g(e, "tooltip", 7, !1);
  const V = da.create(
    {
      side: ve(() => r()),
      sideOffset: ve(() => o()),
      align: ve(() => i()),
      alignOffset: ve(() => s()),
      id: ve(() => a()),
      arrowPadding: ve(() => l()),
      avoidCollisions: ve(() => u()),
      collisionBoundary: ve(() => d()),
      collisionPadding: ve(() => h()),
      hideWhenDetached: ve(() => f()),
      onPlaced: ve(() => v()),
      sticky: ve(() => m()),
      updatePositionStrategy: ve(() => y()),
      strategy: ve(() => w()),
      dir: ve(() => b()),
      style: ve(() => x()),
      enabled: ve(() => k()),
      wrapperId: ve(() => P()),
      customAnchor: ve(() => C())
    },
    E()
  ), I = /* @__PURE__ */ S(() => Gn(V.wrapperProps, { style: { pointerEvents: "auto" } }));
  var L = {
    get content() {
      return n();
    },
    set content(_) {
      n(_), p();
    },
    get side() {
      return r();
    },
    set side(_ = "bottom") {
      r(_), p();
    },
    get sideOffset() {
      return o();
    },
    set sideOffset(_ = 0) {
      o(_), p();
    },
    get align() {
      return i();
    },
    set align(_ = "center") {
      i(_), p();
    },
    get alignOffset() {
      return s();
    },
    set alignOffset(_ = 0) {
      s(_), p();
    },
    get id() {
      return a();
    },
    set id(_) {
      a(_), p();
    },
    get arrowPadding() {
      return l();
    },
    set arrowPadding(_ = 0) {
      l(_), p();
    },
    get avoidCollisions() {
      return u();
    },
    set avoidCollisions(_ = !0) {
      u(_), p();
    },
    get collisionBoundary() {
      return d();
    },
    set collisionBoundary(_ = []) {
      d(_), p();
    },
    get collisionPadding() {
      return h();
    },
    set collisionPadding(_ = 0) {
      h(_), p();
    },
    get hideWhenDetached() {
      return f();
    },
    set hideWhenDetached(_ = !1) {
      f(_), p();
    },
    get onPlaced() {
      return v();
    },
    set onPlaced(_ = () => {
    }) {
      v(_), p();
    },
    get sticky() {
      return m();
    },
    set sticky(_ = "partial") {
      m(_), p();
    },
    get updatePositionStrategy() {
      return y();
    },
    set updatePositionStrategy(_ = "optimized") {
      y(_), p();
    },
    get strategy() {
      return w();
    },
    set strategy(_ = "fixed") {
      w(_), p();
    },
    get dir() {
      return b();
    },
    set dir(_ = "ltr") {
      b(_), p();
    },
    get style() {
      return x();
    },
    set style(_ = {}) {
      x(_), p();
    },
    get wrapperId() {
      return P();
    },
    set wrapperId(_ = sa()) {
      P(_), p();
    },
    get customAnchor() {
      return C();
    },
    set customAnchor(_ = null) {
      C(_), p();
    },
    get enabled() {
      return k();
    },
    set enabled(_) {
      k(_), p();
    },
    get tooltip() {
      return E();
    },
    set tooltip(_ = !1) {
      E(_), p();
    }
  }, A = fe(), D = ee(A);
  return Te(D, () => n() ?? We, () => ({ props: V.props, wrapperProps: c(I) })), M(t, A), ue(L);
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
function Nv(t, e) {
  le(e, !0);
  let n = g(e, "content", 7), r = g(e, "onPlaced", 7);
  Hn(() => {
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
  }, i = fe(), s = ee(i);
  return Te(s, () => n() ?? We, () => ({ props: {}, wrapperProps: {} })), M(t, i), ue(o);
}
se(Nv, { content: {}, onPlaced: {} }, [], [], !0);
function Tv(t, e) {
  le(e, !0);
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
  }, a = fe(), l = ee(a);
  {
    var u = (h) => {
      Nv(h, {
        get content() {
          return n();
        },
        get onPlaced() {
          return o();
        }
      });
    }, d = (h) => {
      Ev(h, Ze(
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
  return M(t, a), ue(s);
}
se(Tv, { content: {}, isStatic: {}, onPlaced: {} }, [], [], !0);
var y4 = /* @__PURE__ */ re("<!> <!>", 1);
function gc(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), P = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), k = g(e, "dir", 7), E = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), I = g(e, "style", 7), L = g(e, "onPlaced", 7), A = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), N = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), O = g(e, "loop", 7), z = g(e, "trapFocus", 7, !0), j = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), T = g(e, "enabled", 7), U = g(e, "ref", 7), te = g(e, "tooltip", 7, !1), B = g(e, "contentPointerEvents", 7, "auto"), Z = /* @__PURE__ */ je(e, [
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
  const W = /* @__PURE__ */ S(() => E() ?? !0), J = /* @__PURE__ */ S(() => C() ?? (c(W) ? "fixed" : "absolute"));
  var oe = {
    get popper() {
      return n();
    },
    set popper(H) {
      n(H), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(H) {
      r(H), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(H) {
      o(H), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(H) {
      i(H), p();
    },
    get id() {
      return s();
    },
    set id(H) {
      s(H), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(H) {
      a(H), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(H) {
      l(H), p();
    },
    get side() {
      return u();
    },
    set side(H) {
      u(H), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(H) {
      d(H), p();
    },
    get align() {
      return h();
    },
    set align(H) {
      h(H), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(H) {
      f(H), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(H) {
      v(H), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(H) {
      m(H), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(H) {
      y(H), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(H) {
      w(H), p();
    },
    get sticky() {
      return b();
    },
    set sticky(H) {
      b(H), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(H) {
      x(H), p();
    },
    get updatePositionStrategy() {
      return P();
    },
    set updatePositionStrategy(H) {
      P(H), p();
    },
    get strategy() {
      return C();
    },
    set strategy(H) {
      C(H), p();
    },
    get dir() {
      return k();
    },
    set dir(H) {
      k(H), p();
    },
    get preventScroll() {
      return E();
    },
    set preventScroll(H) {
      E(H), p();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(H) {
      V(H), p();
    },
    get style() {
      return I();
    },
    set style(H) {
      I(H), p();
    },
    get onPlaced() {
      return L();
    },
    set onPlaced(H) {
      L(H), p();
    },
    get onInteractOutside() {
      return A();
    },
    set onInteractOutside(H) {
      A(H), p();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(H) {
      D(H), p();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(H) {
      _(H), p();
    },
    get onFocusOutside() {
      return N();
    },
    set onFocusOutside(H) {
      N(H), p();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(H = "close") {
      $(H), p();
    },
    get loop() {
      return O();
    },
    set loop(H) {
      O(H), p();
    },
    get trapFocus() {
      return z();
    },
    set trapFocus(H = !0) {
      z(H), p();
    },
    get isValidEvent() {
      return j();
    },
    set isValidEvent(H = () => !1) {
      j(H), p();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(H = null) {
      q(H), p();
    },
    get isStatic() {
      return G();
    },
    set isStatic(H = !1) {
      G(H), p();
    },
    get enabled() {
      return T();
    },
    set enabled(H) {
      T(H), p();
    },
    get ref() {
      return U();
    },
    set ref(H) {
      U(H), p();
    },
    get tooltip() {
      return te();
    },
    set tooltip(H = !1) {
      te(H), p();
    },
    get contentPointerEvents() {
      return B();
    },
    set contentPointerEvents(H = "auto") {
      B(H), p();
    }
  };
  return Tv(t, {
    get isStatic() {
      return G();
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
      return P();
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
      return L();
    },
    get customAnchor() {
      return q();
    },
    get enabled() {
      return T();
    },
    get tooltip() {
      return te();
    },
    content: (H, ne) => {
      let ge = () => ne?.().props, ce = () => ne?.().wrapperProps;
      var ie = y4(), de = ee(ie);
      {
        var ye = (he) => {
          jl(he, {
            get preventScroll() {
              return c(W);
            }
          });
        }, ke = (he) => {
          var Ce = fe(), De = ee(Ce);
          {
            var Q = (Ve) => {
              jl(Ve, {
                get preventScroll() {
                  return c(W);
                }
              });
            };
            ae(
              De,
              (Ve) => {
                e.forceMount || Ve(Q);
              },
              !0
            );
          }
          M(he, Ce);
        };
        ae(de, (he) => {
          e.forceMount && T() ? he(ye) : he(ke, !1);
        });
      }
      var be = R(de, 2);
      rv(be, {
        get onOpenAutoFocus() {
          return _();
        },
        get onCloseAutoFocus() {
          return D();
        },
        get loop() {
          return O();
        },
        get enabled() {
          return T();
        },
        get trapFocus() {
          return z();
        },
        get forceMount() {
          return e.forceMount;
        },
        get ref() {
          return U();
        },
        focusScope: (he, Ce) => {
          let De = () => Ce?.().props;
          nv(he, {
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
              return U();
            },
            children: (Q, Ve) => {
              tv(Q, {
                get id() {
                  return s();
                },
                get onInteractOutside() {
                  return A();
                },
                get onFocusOutside() {
                  return N();
                },
                get interactOutsideBehavior() {
                  return $();
                },
                get isValidEvent() {
                  return j();
                },
                get enabled() {
                  return T();
                },
                get ref() {
                  return U();
                },
                children: (Ie, Be) => {
                  let Re = () => Be?.().props;
                  ov(Ie, {
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
                      return U();
                    },
                    children: (Xe, wt) => {
                      var Pt = fe(), at = ee(Pt);
                      {
                        let me = /* @__PURE__ */ S(() => ({
                          props: Gn(Z, ge(), Re(), De(), { style: { pointerEvents: B() } }),
                          wrapperProps: ce()
                        }));
                        Te(at, () => n() ?? We, () => c(me));
                      }
                      M(Xe, Pt);
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
      }), M(H, ie);
    },
    $$slots: { content: !0 }
  }), ue(oe);
}
se(
  gc,
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
function zv(t, e) {
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "open", 7), o = g(e, "onEscapeKeydown", 7), i = g(e, "escapeKeydownBehavior", 7), s = g(e, "preventOverflowTextSelection", 7), a = g(e, "id", 7), l = g(e, "onPointerDown", 7), u = g(e, "onPointerUp", 7), d = g(e, "side", 7), h = g(e, "sideOffset", 7), f = g(e, "align", 7), v = g(e, "alignOffset", 7), m = g(e, "arrowPadding", 7), y = g(e, "avoidCollisions", 7), w = g(e, "collisionBoundary", 7), b = g(e, "collisionPadding", 7), x = g(e, "sticky", 7), P = g(e, "hideWhenDetached", 7), C = g(e, "updatePositionStrategy", 7), k = g(e, "strategy", 7), E = g(e, "dir", 7), V = g(e, "preventScroll", 7), I = g(e, "wrapperId", 7), L = g(e, "style", 7), A = g(e, "onPlaced", 7), D = g(e, "onInteractOutside", 7), _ = g(e, "onCloseAutoFocus", 7), N = g(e, "onOpenAutoFocus", 7), $ = g(e, "onFocusOutside", 7), O = g(e, "interactOutsideBehavior", 7, "close"), z = g(e, "loop", 7), j = g(e, "trapFocus", 7, !0), q = g(e, "isValidEvent", 7, () => !1), G = g(e, "customAnchor", 7, null), T = g(e, "isStatic", 7, !1), U = g(e, "ref", 7), te = g(e, "shouldRender", 7), B = /* @__PURE__ */ je(e, [
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
    set popper(H) {
      n(H), p();
    },
    get open() {
      return r();
    },
    set open(H) {
      r(H), p();
    },
    get onEscapeKeydown() {
      return o();
    },
    set onEscapeKeydown(H) {
      o(H), p();
    },
    get escapeKeydownBehavior() {
      return i();
    },
    set escapeKeydownBehavior(H) {
      i(H), p();
    },
    get preventOverflowTextSelection() {
      return s();
    },
    set preventOverflowTextSelection(H) {
      s(H), p();
    },
    get id() {
      return a();
    },
    set id(H) {
      a(H), p();
    },
    get onPointerDown() {
      return l();
    },
    set onPointerDown(H) {
      l(H), p();
    },
    get onPointerUp() {
      return u();
    },
    set onPointerUp(H) {
      u(H), p();
    },
    get side() {
      return d();
    },
    set side(H) {
      d(H), p();
    },
    get sideOffset() {
      return h();
    },
    set sideOffset(H) {
      h(H), p();
    },
    get align() {
      return f();
    },
    set align(H) {
      f(H), p();
    },
    get alignOffset() {
      return v();
    },
    set alignOffset(H) {
      v(H), p();
    },
    get arrowPadding() {
      return m();
    },
    set arrowPadding(H) {
      m(H), p();
    },
    get avoidCollisions() {
      return y();
    },
    set avoidCollisions(H) {
      y(H), p();
    },
    get collisionBoundary() {
      return w();
    },
    set collisionBoundary(H) {
      w(H), p();
    },
    get collisionPadding() {
      return b();
    },
    set collisionPadding(H) {
      b(H), p();
    },
    get sticky() {
      return x();
    },
    set sticky(H) {
      x(H), p();
    },
    get hideWhenDetached() {
      return P();
    },
    set hideWhenDetached(H) {
      P(H), p();
    },
    get updatePositionStrategy() {
      return C();
    },
    set updatePositionStrategy(H) {
      C(H), p();
    },
    get strategy() {
      return k();
    },
    set strategy(H) {
      k(H), p();
    },
    get dir() {
      return E();
    },
    set dir(H) {
      E(H), p();
    },
    get preventScroll() {
      return V();
    },
    set preventScroll(H) {
      V(H), p();
    },
    get wrapperId() {
      return I();
    },
    set wrapperId(H) {
      I(H), p();
    },
    get style() {
      return L();
    },
    set style(H) {
      L(H), p();
    },
    get onPlaced() {
      return A();
    },
    set onPlaced(H) {
      A(H), p();
    },
    get onInteractOutside() {
      return D();
    },
    set onInteractOutside(H) {
      D(H), p();
    },
    get onCloseAutoFocus() {
      return _();
    },
    set onCloseAutoFocus(H) {
      _(H), p();
    },
    get onOpenAutoFocus() {
      return N();
    },
    set onOpenAutoFocus(H) {
      N(H), p();
    },
    get onFocusOutside() {
      return $();
    },
    set onFocusOutside(H) {
      $(H), p();
    },
    get interactOutsideBehavior() {
      return O();
    },
    set interactOutsideBehavior(H = "close") {
      O(H), p();
    },
    get loop() {
      return z();
    },
    set loop(H) {
      z(H), p();
    },
    get trapFocus() {
      return j();
    },
    set trapFocus(H = !0) {
      j(H), p();
    },
    get isValidEvent() {
      return q();
    },
    set isValidEvent(H = () => !1) {
      q(H), p();
    },
    get customAnchor() {
      return G();
    },
    set customAnchor(H = null) {
      G(H), p();
    },
    get isStatic() {
      return T();
    },
    set isStatic(H = !1) {
      T(H), p();
    },
    get ref() {
      return U();
    },
    set ref(H) {
      U(H), p();
    },
    get shouldRender() {
      return te();
    },
    set shouldRender(H) {
      te(H), p();
    }
  }, W = fe(), J = ee(W);
  {
    var oe = (H) => {
      gc(H, Ze(
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
            return P();
          },
          get updatePositionStrategy() {
            return C();
          },
          get strategy() {
            return k();
          },
          get dir() {
            return E();
          },
          get preventScroll() {
            return V();
          },
          get wrapperId() {
            return I();
          },
          get style() {
            return L();
          },
          get onPlaced() {
            return A();
          },
          get customAnchor() {
            return G();
          },
          get isStatic() {
            return T();
          },
          get enabled() {
            return r();
          },
          get onInteractOutside() {
            return D();
          },
          get onCloseAutoFocus() {
            return _();
          },
          get onOpenAutoFocus() {
            return N();
          },
          get interactOutsideBehavior() {
            return O();
          },
          get loop() {
            return z();
          },
          get trapFocus() {
            return j();
          },
          get isValidEvent() {
            return q();
          },
          get onFocusOutside() {
            return $();
          },
          forceMount: !1,
          get ref() {
            return U();
          }
        },
        () => B
      ));
    };
    ae(J, (H) => {
      te() && H(oe);
    });
  }
  return M(t, W), ue(Z);
}
se(
  zv,
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
  le(e, !0);
  let n = g(e, "popper", 7), r = g(e, "onEscapeKeydown", 7), o = g(e, "escapeKeydownBehavior", 7), i = g(e, "preventOverflowTextSelection", 7), s = g(e, "id", 7), a = g(e, "onPointerDown", 7), l = g(e, "onPointerUp", 7), u = g(e, "side", 7), d = g(e, "sideOffset", 7), h = g(e, "align", 7), f = g(e, "alignOffset", 7), v = g(e, "arrowPadding", 7), m = g(e, "avoidCollisions", 7), y = g(e, "collisionBoundary", 7), w = g(e, "collisionPadding", 7), b = g(e, "sticky", 7), x = g(e, "hideWhenDetached", 7), P = g(e, "updatePositionStrategy", 7), C = g(e, "strategy", 7), k = g(e, "dir", 7), E = g(e, "preventScroll", 7), V = g(e, "wrapperId", 7), I = g(e, "style", 7), L = g(e, "onPlaced", 7), A = g(e, "onInteractOutside", 7), D = g(e, "onCloseAutoFocus", 7), _ = g(e, "onOpenAutoFocus", 7), N = g(e, "onFocusOutside", 7), $ = g(e, "interactOutsideBehavior", 7, "close"), O = g(e, "loop", 7), z = g(e, "trapFocus", 7, !0), j = g(e, "isValidEvent", 7, () => !1), q = g(e, "customAnchor", 7, null), G = g(e, "isStatic", 7, !1), T = g(e, "enabled", 7), U = /* @__PURE__ */ je(e, [
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
  var te = {
    get popper() {
      return n();
    },
    set popper(B) {
      n(B), p();
    },
    get onEscapeKeydown() {
      return r();
    },
    set onEscapeKeydown(B) {
      r(B), p();
    },
    get escapeKeydownBehavior() {
      return o();
    },
    set escapeKeydownBehavior(B) {
      o(B), p();
    },
    get preventOverflowTextSelection() {
      return i();
    },
    set preventOverflowTextSelection(B) {
      i(B), p();
    },
    get id() {
      return s();
    },
    set id(B) {
      s(B), p();
    },
    get onPointerDown() {
      return a();
    },
    set onPointerDown(B) {
      a(B), p();
    },
    get onPointerUp() {
      return l();
    },
    set onPointerUp(B) {
      l(B), p();
    },
    get side() {
      return u();
    },
    set side(B) {
      u(B), p();
    },
    get sideOffset() {
      return d();
    },
    set sideOffset(B) {
      d(B), p();
    },
    get align() {
      return h();
    },
    set align(B) {
      h(B), p();
    },
    get alignOffset() {
      return f();
    },
    set alignOffset(B) {
      f(B), p();
    },
    get arrowPadding() {
      return v();
    },
    set arrowPadding(B) {
      v(B), p();
    },
    get avoidCollisions() {
      return m();
    },
    set avoidCollisions(B) {
      m(B), p();
    },
    get collisionBoundary() {
      return y();
    },
    set collisionBoundary(B) {
      y(B), p();
    },
    get collisionPadding() {
      return w();
    },
    set collisionPadding(B) {
      w(B), p();
    },
    get sticky() {
      return b();
    },
    set sticky(B) {
      b(B), p();
    },
    get hideWhenDetached() {
      return x();
    },
    set hideWhenDetached(B) {
      x(B), p();
    },
    get updatePositionStrategy() {
      return P();
    },
    set updatePositionStrategy(B) {
      P(B), p();
    },
    get strategy() {
      return C();
    },
    set strategy(B) {
      C(B), p();
    },
    get dir() {
      return k();
    },
    set dir(B) {
      k(B), p();
    },
    get preventScroll() {
      return E();
    },
    set preventScroll(B) {
      E(B), p();
    },
    get wrapperId() {
      return V();
    },
    set wrapperId(B) {
      V(B), p();
    },
    get style() {
      return I();
    },
    set style(B) {
      I(B), p();
    },
    get onPlaced() {
      return L();
    },
    set onPlaced(B) {
      L(B), p();
    },
    get onInteractOutside() {
      return A();
    },
    set onInteractOutside(B) {
      A(B), p();
    },
    get onCloseAutoFocus() {
      return D();
    },
    set onCloseAutoFocus(B) {
      D(B), p();
    },
    get onOpenAutoFocus() {
      return _();
    },
    set onOpenAutoFocus(B) {
      _(B), p();
    },
    get onFocusOutside() {
      return N();
    },
    set onFocusOutside(B) {
      N(B), p();
    },
    get interactOutsideBehavior() {
      return $();
    },
    set interactOutsideBehavior(B = "close") {
      $(B), p();
    },
    get loop() {
      return O();
    },
    set loop(B) {
      O(B), p();
    },
    get trapFocus() {
      return z();
    },
    set trapFocus(B = !0) {
      z(B), p();
    },
    get isValidEvent() {
      return j();
    },
    set isValidEvent(B = () => !1) {
      j(B), p();
    },
    get customAnchor() {
      return q();
    },
    set customAnchor(B = null) {
      q(B), p();
    },
    get isStatic() {
      return G();
    },
    set isStatic(B = !1) {
      G(B), p();
    },
    get enabled() {
      return T();
    },
    set enabled(B) {
      T(B), p();
    }
  };
  return gc(t, Ze(
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
        return P();
      },
      get strategy() {
        return C();
      },
      get dir() {
        return k();
      },
      get preventScroll() {
        return E();
      },
      get wrapperId() {
        return V();
      },
      get style() {
        return I();
      },
      get onPlaced() {
        return L();
      },
      get customAnchor() {
        return q();
      },
      get isStatic() {
        return G();
      },
      get enabled() {
        return T();
      },
      get onInteractOutside() {
        return A();
      },
      get onCloseAutoFocus() {
        return D();
      },
      get onOpenAutoFocus() {
        return _();
      },
      get interactOutsideBehavior() {
        return $();
      },
      get loop() {
        return O();
      },
      get trapFocus() {
        return z();
      },
      get isValidEvent() {
        return j();
      },
      get onFocusOutside() {
        return N();
      }
    },
    () => U,
    { forceMount: !0 }
  )), ue(te);
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
function Zl(t, e) {
  const n = Hi();
  le(e, !0);
  let r = g(e, "id", 23, () => er(n)), o = g(e, "ref", 15, null), i = g(e, "forceMount", 7, !1), s = g(e, "side", 7, "bottom"), a = g(e, "onInteractOutside", 7, qe), l = g(e, "onEscapeKeydown", 7, qe), u = g(e, "children", 7), d = g(e, "child", 7), h = g(e, "preventScroll", 7, !1), f = g(e, "style", 7), v = /* @__PURE__ */ je(e, [
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
  const m = dc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (k) => o(k)),
    onInteractOutside: ve(() => a()),
    onEscapeKeydown: ve(() => l())
  }), y = /* @__PURE__ */ S(() => Gn(v, m.props));
  var w = {
    get id() {
      return r();
    },
    set id(k = er(n)) {
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
    set onInteractOutside(k = qe) {
      a(k), p();
    },
    get onEscapeKeydown() {
      return l();
    },
    set onEscapeKeydown(k = qe) {
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
  }, b = fe(), x = ee(b);
  {
    var P = (k) => {
      Mv(k, Ze(() => c(y), () => m.popperProps, {
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
        popper: (E, V) => {
          let I = () => V?.().props, L = () => V?.().wrapperProps;
          const A = /* @__PURE__ */ S(() => Gn(I(), { style: m.props.style }, { style: f() }));
          var D = fe(), _ = ee(D);
          {
            var N = (O) => {
              var z = fe(), j = ee(z);
              {
                let q = /* @__PURE__ */ S(() => ({
                  props: c(A),
                  wrapperProps: L(),
                  ...m.snippetProps
                }));
                Te(j, d, () => c(q));
              }
              M(O, z);
            }, $ = (O) => {
              var z = w4();
              ot(z, () => ({ ...L() }));
              var j = Y(z);
              ot(j, () => ({ ...c(A) }));
              var q = Y(j);
              Te(q, () => u() ?? We), X(j), X(z), M(O, z);
            };
            ae(_, (O) => {
              d() ? O(N) : O($, !1);
            });
          }
          M(E, D);
        },
        $$slots: { popper: !0 }
      }));
    }, C = (k) => {
      var E = fe(), V = ee(E);
      {
        var I = (L) => {
          zv(L, Ze(() => c(y), () => m.popperProps, {
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
            popper: (A, D) => {
              let _ = () => D?.().props, N = () => D?.().wrapperProps;
              const $ = /* @__PURE__ */ S(() => Gn(_(), { style: m.props.style }, { style: f() }));
              var O = fe(), z = ee(O);
              {
                var j = (G) => {
                  var T = fe(), U = ee(T);
                  {
                    let te = /* @__PURE__ */ S(() => ({
                      props: c($),
                      wrapperProps: N(),
                      ...m.snippetProps
                    }));
                    Te(U, d, () => c(te));
                  }
                  M(G, T);
                }, q = (G) => {
                  var T = b4();
                  ot(T, () => ({ ...N() }));
                  var U = Y(T);
                  ot(U, () => ({ ...c($) }));
                  var te = Y(U);
                  Te(te, () => u() ?? We), X(U), X(T), M(G, T);
                };
                ae(z, (G) => {
                  d() ? G(j) : G(q, !1);
                });
              }
              M(A, O);
            },
            $$slots: { popper: !0 }
          }));
        };
        ae(
          V,
          (L) => {
            i() || L(I);
          },
          !0
        );
      }
      M(k, E);
    };
    ae(x, (k) => {
      i() ? k(P) : k(C, !1);
    });
  }
  return M(t, b), ue(w);
}
se(
  Zl,
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
function Av(t, e) {
  le(e, !0);
  let n = g(e, "mounted", 15, !1), r = g(e, "onMountedChange", 7, qe);
  U5(() => (n(!0), r()(!0), () => {
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
    set onMountedChange(i = qe) {
      r(i), p();
    }
  };
  return ue(o);
}
se(Av, { mounted: {}, onMountedChange: {} }, [], [], !0);
var x4 = /* @__PURE__ */ re("<div><!></div>"), k4 = /* @__PURE__ */ re("<!> <!>", 1);
function Wl(t, e) {
  const n = Hi();
  le(e, !0);
  let r = g(e, "id", 23, () => er(n)), o = g(e, "ref", 15, null), i = g(e, "value", 7), s = g(e, "label", 23, i), a = g(e, "disabled", 7, !1), l = g(e, "children", 7), u = g(e, "child", 7), d = g(e, "onHighlight", 7, qe), h = g(e, "onUnhighlight", 7, qe), f = /* @__PURE__ */ je(e, [
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
  const v = hc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (k) => o(k)),
    value: ve(() => i()),
    disabled: ve(() => a()),
    label: ve(() => s()),
    onHighlight: ve(() => d()),
    onUnhighlight: ve(() => h())
  }), m = /* @__PURE__ */ S(() => Gn(f, v.props));
  var y = {
    get id() {
      return r();
    },
    set id(k = er(n)) {
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
    set onHighlight(k = qe) {
      d(k), p();
    },
    get onUnhighlight() {
      return h();
    },
    set onUnhighlight(k = qe) {
      h(k), p();
    }
  }, w = k4(), b = ee(w);
  {
    var x = (k) => {
      var E = fe(), V = ee(E);
      {
        let I = /* @__PURE__ */ S(() => ({ props: c(m), ...v.snippetProps }));
        Te(V, u, () => c(I));
      }
      M(k, E);
    }, P = (k) => {
      var E = x4();
      ot(E, () => ({ ...c(m) }));
      var V = Y(E);
      Te(V, () => l() ?? We, () => v.snippetProps), X(E), M(k, E);
    };
    ae(b, (k) => {
      u() ? k(x) : k(P, !1);
    });
  }
  var C = R(b, 2);
  return Av(C, {
    get mounted() {
      return v.mounted;
    },
    set mounted(k) {
      v.mounted = k;
    }
  }), M(t, w), ue(y);
}
se(
  Wl,
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
function Xl(t, e) {
  const n = Hi();
  le(e, !0), it(t, $4);
  let r = g(e, "id", 23, () => er(n)), o = g(e, "ref", 15, null), i = g(e, "children", 7), s = g(e, "child", 7), a = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "ref",
    "children",
    "child"
  ]);
  const l = pc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (y) => o(y))
  }), u = /* @__PURE__ */ S(() => Gn(a, l.props));
  var d = {
    get id() {
      return r();
    },
    set id(y = er(n)) {
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
  }, h = fe(), f = ee(h);
  {
    var v = (y) => {
      var w = fe(), b = ee(w);
      Te(b, s, () => ({ props: c(u) })), M(y, w);
    }, m = (y) => {
      var w = C4();
      ot(w, () => ({ ...c(u) }));
      var b = Y(w);
      Te(b, () => i() ?? We), X(w), M(y, w);
    };
    ae(f, (y) => {
      s() ? y(v) : y(m, !1);
    });
  }
  return M(t, h), ue(d);
}
se(Xl, { id: {}, ref: {}, children: {}, child: {} }, [], [], !0);
var S4 = /* @__PURE__ */ re("<!> <!>", 1);
function ql(t, e) {
  le(e, !0);
  let n = g(e, "value", 15), r = g(e, "onValueChange", 7, qe), o = g(e, "name", 7, ""), i = g(e, "disabled", 7, !1), s = g(e, "type", 7), a = g(e, "open", 15, !1), l = g(e, "onOpenChange", 7, qe), u = g(e, "onOpenChangeComplete", 7, qe), d = g(e, "loop", 7, !1), h = g(e, "scrollAlignment", 7, "nearest"), f = g(e, "required", 7, !1), v = g(e, "items", 23, () => []), m = g(e, "allowDeselect", 7, !1), y = g(e, "autocomplete", 7), w = g(e, "children", 7);
  function b() {
    n() === void 0 && n(s() === "single" ? "" : []);
  }
  b(), zt.pre(() => n(), () => {
    b();
  });
  let x = /* @__PURE__ */ we("");
  const P = m4.create({
    type: s(),
    value: ve(() => n(), (A) => {
      n(A), r()(A);
    }),
    disabled: ve(() => i()),
    required: ve(() => f()),
    open: ve(() => a(), (A) => {
      a(A), l()(A);
    }),
    loop: ve(() => d()),
    scrollAlignment: ve(() => h()),
    name: ve(() => o()),
    isCombobox: !1,
    items: ve(() => v()),
    allowDeselect: ve(() => m()),
    inputValue: ve(() => c(x), (A) => F(x, A, !0)),
    onOpenChangeComplete: ve(() => u())
  });
  var C = {
    get value() {
      return n();
    },
    set value(A) {
      n(A), p();
    },
    get onValueChange() {
      return r();
    },
    set onValueChange(A = qe) {
      r(A), p();
    },
    get name() {
      return o();
    },
    set name(A = "") {
      o(A), p();
    },
    get disabled() {
      return i();
    },
    set disabled(A = !1) {
      i(A), p();
    },
    get type() {
      return s();
    },
    set type(A) {
      s(A), p();
    },
    get open() {
      return a();
    },
    set open(A = !1) {
      a(A), p();
    },
    get onOpenChange() {
      return l();
    },
    set onOpenChange(A = qe) {
      l(A), p();
    },
    get onOpenChangeComplete() {
      return u();
    },
    set onOpenChangeComplete(A = qe) {
      u(A), p();
    },
    get loop() {
      return d();
    },
    set loop(A = !1) {
      d(A), p();
    },
    get scrollAlignment() {
      return h();
    },
    set scrollAlignment(A = "nearest") {
      h(A), p();
    },
    get required() {
      return f();
    },
    set required(A = !1) {
      f(A), p();
    },
    get items() {
      return v();
    },
    set items(A = []) {
      v(A), p();
    },
    get allowDeselect() {
      return m();
    },
    set allowDeselect(A = !1) {
      m(A), p();
    },
    get autocomplete() {
      return y();
    },
    set autocomplete(A) {
      y(A), p();
    },
    get children() {
      return w();
    },
    set children(A) {
      w(A), p();
    }
  }, k = S4(), E = ee(k);
  Sv(E, {
    children: (A, D) => {
      var _ = fe(), N = ee(_);
      Te(N, () => w() ?? We), M(A, _);
    },
    $$slots: { default: !0 }
  });
  var V = R(E, 2);
  {
    var I = (A) => {
      var D = fe(), _ = ee(D);
      {
        var N = (O) => {
          Ns(O, {
            get autocomplete() {
              return y();
            }
          });
        }, $ = (O) => {
          var z = fe(), j = ee(z);
          At(j, 16, () => P.opts.value.current, (q) => q, (q, G) => {
            Ns(q, {
              get value() {
                return G;
              },
              get autocomplete() {
                return y();
              }
            });
          }), M(O, z);
        };
        ae(_, (O) => {
          P.opts.value.current.length === 0 ? O(N) : O($, !1);
        });
      }
      M(A, D);
    }, L = (A) => {
      Ns(A, {
        get autocomplete() {
          return y();
        },
        get value() {
          return P.opts.value.current;
        },
        set value(D) {
          P.opts.value.current = D;
        }
      });
    };
    ae(V, (A) => {
      Array.isArray(P.opts.value.current) ? A(I) : A(L, !1);
    });
  }
  return M(t, k), ue(C);
}
se(
  ql,
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
function Yl(t, e) {
  const n = Hi();
  le(e, !0);
  let r = g(e, "id", 23, () => er(n)), o = g(e, "ref", 15, null), i = g(e, "child", 7), s = g(e, "children", 7), a = g(e, "type", 7, "button"), l = /* @__PURE__ */ je(e, [
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
  const u = cc.create({
    id: ve(() => r()),
    ref: ve(() => o(), (m) => o(m))
  }), d = /* @__PURE__ */ S(() => Gn(l, u.props, { type: a() }));
  var h = {
    get id() {
      return r();
    },
    set id(m = er(n)) {
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
  }, f = fe(), v = ee(f);
  return It(v, () => Ov, (m, y) => {
    y(m, {
      get id() {
        return r();
      },
      get ref() {
        return u.opts.ref;
      },
      children: (w, b) => {
        var x = fe(), P = ee(x);
        {
          var C = (E) => {
            var V = fe(), I = ee(V);
            Te(I, i, () => ({ props: c(d) })), M(E, V);
          }, k = (E) => {
            var V = _4();
            ot(V, () => ({ ...c(d) }));
            var I = Y(V);
            Te(I, () => s() ?? We), X(V), M(E, V);
          };
          ae(P, (E) => {
            i() ? E(C) : E(k, !1);
          });
        }
        M(w, x);
      },
      $$slots: { default: !0 }
    });
  }), M(t, f), ue(h);
}
se(Yl, { id: {}, ref: {}, child: {}, children: {}, type: {} }, [], [], !0);
const P4 = {
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
}, E4 = Symbol("lucide-context"), N4 = () => Dn(E4);
var T4 = /* @__PURE__ */ _e("<svg><!><!></svg>");
function Ra(t, e) {
  le(e, !0);
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
  ]), h = /* @__PURE__ */ S(() => a() ? Number(s()) * 24 / Number(i()) : s());
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
  }, v = T4();
  ot(
    v,
    (w) => ({
      ...P4,
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
  At(m, 17, l, co, (w, b) => {
    var x = /* @__PURE__ */ S(() => Wo(c(b), 2));
    let P = () => c(x)[0], C = () => c(x)[1];
    var k = fe(), E = ee(k);
    gf(E, P, !0, (V, I) => {
      ot(V, () => ({ ...C() }));
    }), M(w, k);
  });
  var y = R(m);
  return Te(y, () => u() ?? We), X(v), M(t, v), ue(f);
}
se(
  Ra,
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
function Dv(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M20 6 9 17l-5-5" }]];
  Ra(t, Ze({ name: "check" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = ee(s);
      Te(a, () => e.children ?? We), M(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Dv, {}, [], [], !0);
function Vv(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "M5 12h14" }]];
  Ra(t, Ze({ name: "minus" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = ee(s);
      Te(a, () => e.children ?? We), M(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Vv, {}, [], [], !0);
var z4 = /* @__PURE__ */ re('<div data-slot="checkbox-indicator" class="[&amp;>svg]:size-3.5 grid place-content-center text-current transition-none"><!></div>');
function Iv(t, e) {
  le(e, !0);
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
  }, l = fe(), u = ee(l);
  {
    const d = (f, v) => {
      let m = () => v?.().checked, y = () => v?.().indeterminate;
      var w = z4(), b = Y(w);
      {
        var x = (C) => {
          Dv(C, {});
        }, P = (C) => {
          var k = fe(), E = ee(k);
          {
            var V = (I) => {
              Vv(I, {});
            };
            ae(
              E,
              (I) => {
                y() && I(V);
              },
              !0
            );
          }
          M(C, k);
        };
        ae(b, (C) => {
          m() ? C(x) : C(P, !1);
        });
      }
      X(w), M(f, w);
    };
    let h = /* @__PURE__ */ S(() => zn("nopan nodrag border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border shadow-xs transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", i()));
    It(u, () => lv, (f, v) => {
      v(f, Ze(
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
  return M(t, l), ue(a);
}
se(Iv, { ref: {}, checked: {}, indeterminate: {}, class: {} }, [], [], !0);
var M4 = /* @__PURE__ */ re('<div><input type="hidden"/> <!> <!></div>');
const A4 = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Hv(t, e) {
  le(e, !0), it(t, A4);
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
  }, u = M4();
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
  Hr(d);
  var h = R(d, 2);
  Et(h, {
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
      var y = He();
      ze(() => ht(y, i())), M(v, y);
    },
    $$slots: { default: !0 }
  }), X(u), ze(() => xs(d, o())), M(t, u), ue(l);
}
se(
  Hv,
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
function Et(t, e) {
  le(e, !0);
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
  }, d = fe(), h = ee(d);
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
          () => zn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Kt(y, (w) => n(w), () => n()), i0(y, i), Ls(y, r), M(m, y);
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
          () => zn("nopan nodrag dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", s())
        ],
        void 0,
        void 0,
        void 0,
        !0
      ), Kt(y, (w) => n(w), () => n()), Ls(y, r), M(m, y);
    };
    ae(h, (m) => {
      o() === "file" ? m(f) : m(v, !1);
    });
  }
  return M(t, d), ue(u);
}
se(
  Et,
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
  le(e, !0);
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
        const P = typeof s() == "number" ? `${s()}px` : s();
        h.style.height = P, h.style.overflowY = "hidden", u()?.(P);
        return;
      }
      h.style.height = "auto", h.style.overflowY = "hidden";
      let x = h.scrollHeight;
      if (!f) {
        const P = e.rows || 1, C = getComputedStyle(h);
        f = parseFloat(C.fontSize) * 1.2 * P + parseFloat(C.paddingTop) + parseFloat(C.paddingBottom) + parseFloat(C.borderTopWidth);
      }
      if (x < f && (x = f), l()) {
        const P = typeof l() == "number" ? `${l()}px` : l();
        x > parseInt(P) ? (h.style.height = P, h.style.overflowY = "auto") : h.style.height = `${x}px`;
      } else
        h.style.height = `${x}px`;
      u()?.(h.style.height);
    }
  }
  Fe(() => {
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
      () => zn("nodrag nowheel border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50", o())
    ]
  ), Kt(y, (x) => h = x, () => h), Ls(y, r), M(t, y), ue(m);
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
var H4 = /* @__PURE__ */ re('<div role="button"><!></div>'), L4 = /* @__PURE__ */ re("<div></div>");
function Lv(t, e) {
  const n = Bc(e, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Bc(n, ["items", "onChange", "activeIndex"]);
  le(e, !1);
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
  Cu();
  var u = L4();
  return ot(u, () => ({
    ...r,
    class: `tf-tabs ${yu(r), yt(() => r.class) ?? ""}`
  })), At(u, 5, o, co, (d, h, f) => {
    var v = H4();
    Ne(v, "tabindex", f), v.__click = () => a(c(h), f), v.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(h), f));
    };
    var m = Y(v);
    {
      var y = (b) => {
        var x = He();
        ze(() => ht(x, (c(h), yt(() => c(h).label)))), M(b, x);
      }, w = (b) => {
        var x = fe(), P = ee(x);
        Te(P, () => (c(h), yt(() => c(h).label) ?? We)), M(b, x);
      };
      ae(m, (b) => {
        c(h), yt(() => typeof c(h).label == "string") ? b(y) : b(w, !1);
      });
    }
    X(v), ze(() => un(v, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), M(d, v);
  }), X(u), M(t, u), ue(l);
}
xo(["click", "keydown"]);
se(Lv, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var R4 = /* @__PURE__ */ re('<span class="tf-collapse-item-title-icon"><!></span>'), j4 = /* @__PURE__ */ re('<div class="tf-collapse-item-description"><!></div>'), B4 = /* @__PURE__ */ re('<div class="tf-collapse-item-content"><!></div>'), K4 = /* @__PURE__ */ re('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), F4 = /* @__PURE__ */ re("<div></div>");
const Z4 = {
  hash: "svelte-ynwjxt",
  code: `\r
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Rv(t, e) {
  le(e, !0), it(t, Z4);
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
  return At(a, 21, n, co, (l, u, d) => {
    var h = K4(), f = Y(h);
    Ne(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), i(c(u)));
    };
    var v = Y(f);
    {
      var m = (k) => {
        var E = R4(), V = Y(E);
        pr(V, {
          get target() {
            return c(u).icon;
          }
        }), X(E), M(k, E);
      };
      ae(v, (k) => {
        c(u).icon && k(m);
      });
    }
    var y = R(v, 2);
    pr(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = R(y, 2);
    X(f);
    var b = R(f, 2);
    {
      var x = (k) => {
        var E = j4(), V = Y(E);
        pr(V, {
          get target() {
            return c(u).description;
          }
        }), X(E), M(k, E);
      };
      ae(b, (k) => {
        c(u).description && k(x);
      });
    }
    var P = R(b, 2);
    {
      var C = (k) => {
        var E = B4(), V = Y(E);
        pr(V, {
          get target() {
            return c(u).content;
          }
        }), X(E), M(k, E);
      };
      ae(P, (k) => {
        o().includes(c(u).key) && k(C);
      });
    }
    X(h), ze((k) => un(w, 1, `tf-collapse-item-title-arrow ${k ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), M(l, h);
  }), X(a), ze(() => {
    Bt(a, e.style), un(a, 1, `tf-collapse ${e.class ?? ""}`, "svelte-ynwjxt");
  }), M(t, a), ue(s);
}
xo(["click", "keydown"]);
se(Rv, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function pr(t, e) {
  le(e, !0);
  let n = g(e, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), p();
    }
  }, o = fe(), i = ee(o);
  {
    var s = (l) => {
      var u = fe(), d = ee(u);
      Te(d, () => n() ?? We), M(l, u);
    }, a = (l) => {
      var u = fe(), d = ee(u);
      _a(d, n), M(l, u);
    };
    ae(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return M(t, o), ue(r);
}
se(pr, { target: {} }, [], [], !0);
function Ul(t, e) {
  le(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  const r = [["path", { d: "m6 9 6 6 6-6" }]];
  Ra(t, Ze({ name: "chevron-down" }, () => n, {
    get iconNode() {
      return r;
    },
    children: (o, i) => {
      var s = fe(), a = ee(s);
      Te(a, () => e.children ?? We), M(o, s);
    },
    $$slots: { default: !0 }
  })), ue();
}
se(Ul, {}, [], [], !0);
var W4 = /* @__PURE__ */ re('<span class="mx-1">,</span>'), X4 = /* @__PURE__ */ re("<!> <!>", 1), q4 = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), Y4 = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), U4 = /* @__PURE__ */ re('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), G4 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), J4 = /* @__PURE__ */ re('<span class="size-4"></span>'), Q4 = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), eC = /* @__PURE__ */ re('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), tC = /* @__PURE__ */ re("<!> <!>", 1), nC = /* @__PURE__ */ re('<span class="text-muted-foreground"> </span>'), rC = /* @__PURE__ */ re('<span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left"><!></span> <!>', 1), oC = /* @__PURE__ */ re('<div class="py-6 text-center text-sm text-muted-foreground">暂无数据</div>'), iC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), sC = /* @__PURE__ */ re('<span class="size-4"></span>'), aC = /* @__PURE__ */ re('<span class="absolute right-2 flex size-3.5 items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg></span>'), lC = /* @__PURE__ */ re('<span class="flex items-center gap-2 whitespace-nowrap"><!> <!></span> <!>', 1), uC = /* @__PURE__ */ re("<!> <!>", 1);
function Rt(t, e) {
  le(e, !0);
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
  ]), v = /* @__PURE__ */ S(() => {
    const A = [], D = (_) => {
      for (const N of _)
        A.push(N), N.children?.length && D(N.children);
    };
    return D(n()), A;
  }), m = /* @__PURE__ */ S(() => {
    const A = [], D = o().length > 0 ? o() : i();
    for (const _ of D) {
      if (_ == null) continue;
      const N = c(v).find(($) => $.value === _);
      N && A.push(N);
    }
    return A;
  }), y = /* @__PURE__ */ S(() => !a() && c(m).length > 0 ? String(c(m)[0].value) : ""), w = /* @__PURE__ */ S(() => a() ? c(m).map((A) => String(A.value)) : []);
  function b(A, D) {
    A.stopPropagation(), r()?.(D);
  }
  function x(A, D = 0) {
    const _ = [];
    for (const N of A) {
      _.push({ item: N, level: D });
      const $ = s() || l().includes(N.value);
      N.children?.length && $ && _.push(...x(N.children, D + 1));
    }
    return _;
  }
  let P = /* @__PURE__ */ S(() => x(n()));
  function C(A) {
    return {
      value: String(A.value),
      label: typeof A.label == "string" ? A.label : String(A.value),
      disabled: !1
    };
  }
  var k = {
    get items() {
      return n();
    },
    set items(A) {
      n(A), p();
    },
    get onSelect() {
      return r();
    },
    set onSelect(A) {
      r(A), p();
    },
    get value() {
      return o();
    },
    set value(A = []) {
      o(A), p();
    },
    get defaultValue() {
      return i();
    },
    set defaultValue(A = []) {
      i(A), p();
    },
    get expandAll() {
      return s();
    },
    set expandAll(A = !0) {
      s(A), p();
    },
    get multiple() {
      return a();
    },
    set multiple(A = !1) {
      a(A), p();
    },
    get expandValue() {
      return l();
    },
    set expandValue(A = []) {
      l(A), p();
    },
    get placeholder() {
      return u();
    },
    set placeholder(A) {
      u(A), p();
    },
    get disabled() {
      return d();
    },
    set disabled(A = !1) {
      d(A), p();
    },
    get class() {
      return h();
    },
    set class(A) {
      h(A), p();
    }
  }, E = fe(), V = ee(E);
  {
    var I = (A) => {
      var D = fe(), _ = ee(D);
      It(_, () => ql, (N, $) => {
        $(N, Ze(
          {
            type: "multiple",
            get value() {
              return c(w);
            }
          },
          () => f,
          {
            children: (O, z) => {
              var j = tC(), q = ee(j);
              {
                let T = /* @__PURE__ */ S(() => zn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                It(q, () => Yl, (U, te) => {
                  te(U, {
                    get class() {
                      return c(T);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (B, Z) => {
                      var W = Y4(), J = ee(W), oe = Y(J);
                      {
                        var H = (ce) => {
                          var ie = fe(), de = ee(ie);
                          At(de, 19, () => c(m), (ye) => ye.value, (ye, ke, be) => {
                            var he = X4(), Ce = ee(he);
                            pr(Ce, {
                              get target() {
                                return c(ke).label;
                              }
                            });
                            var De = R(Ce, 2);
                            {
                              var Q = (Ve) => {
                                var Ie = W4();
                                M(Ve, Ie);
                              };
                              ae(De, (Ve) => {
                                c(be) < c(m).length - 1 && Ve(Q);
                              });
                            }
                            M(ye, he);
                          }), M(ce, ie);
                        }, ne = (ce) => {
                          var ie = q4(), de = Y(ie, !0);
                          X(ie), ze(() => ht(de, u() ?? "")), M(ce, ie);
                        };
                        ae(oe, (ce) => {
                          c(m).length > 0 ? ce(H) : ce(ne, !1);
                        });
                      }
                      X(J);
                      var ge = R(J, 2);
                      Ul(ge, { class: "size-4 opacity-50" }), M(B, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var G = R(q, 2);
              It(G, () => Ll, (T, U) => {
                U(T, {
                  children: (te, B) => {
                    var Z = fe(), W = ee(Z);
                    It(W, () => Zl, (J, oe) => {
                      oe(J, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (H, ne) => {
                          var ge = fe(), ce = ee(ge);
                          It(ce, () => Xl, (ie, de) => {
                            de(ie, {
                              class: "p-1",
                              children: (ye, ke) => {
                                var be = fe(), he = ee(be);
                                {
                                  var Ce = (Q) => {
                                    var Ve = U4();
                                    M(Q, Ve);
                                  }, De = (Q) => {
                                    var Ve = fe(), Ie = ee(Ve);
                                    At(Ie, 17, () => c(P), ({ item: Be, level: Re }) => Be.value, (Be, Re) => {
                                      let Xe = () => c(Re).item, wt = () => c(Re).level;
                                      const Pt = /* @__PURE__ */ S(() => Xe().children && Xe().children.length > 0), at = /* @__PURE__ */ S(() => C(Xe()));
                                      var me = fe(), Me = ee(me);
                                      {
                                        const ft = (xt, ct) => {
                                          let Vt = () => ct?.().selected;
                                          var vt = eC(), lt = ee(vt), kt = Y(lt);
                                          {
                                            var cn = (mt) => {
                                              var dn = G4();
                                              M(mt, dn);
                                            }, ir = (mt) => {
                                              var dn = J4();
                                              M(mt, dn);
                                            };
                                            ae(kt, (mt) => {
                                              c(Pt) ? mt(cn) : mt(ir, !1);
                                            });
                                          }
                                          var Xt = R(kt, 2);
                                          pr(Xt, {
                                            get target() {
                                              return Xe().label;
                                            }
                                          }), X(lt);
                                          var $o = R(lt, 2);
                                          {
                                            var Qo = (mt) => {
                                              var dn = Q4();
                                              M(mt, dn);
                                            };
                                            ae($o, (mt) => {
                                              Vt() && mt(Qo);
                                            });
                                          }
                                          M(xt, vt);
                                        };
                                        let Ye = /* @__PURE__ */ S(() => zn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50")), pt = /* @__PURE__ */ S(() => wt() * 4);
                                        It(Me, () => Wl, (xt, ct) => {
                                          ct(xt, {
                                            get value() {
                                              return c(at).value;
                                            },
                                            get label() {
                                              return c(at).label;
                                            },
                                            get class() {
                                              return c(Ye);
                                            },
                                            get style() {
                                              return `padding-left: ${c(pt) ?? ""}px`;
                                            },
                                            onclick: (Vt) => b(Vt, Xe()),
                                            children: ft,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      M(Be, me);
                                    }), M(Q, Ve);
                                  };
                                  ae(he, (Q) => {
                                    c(P).length === 0 ? Q(Ce) : Q(De, !1);
                                  });
                                }
                                M(ye, be);
                              },
                              $$slots: { default: !0 }
                            });
                          }), M(H, ge);
                        },
                        $$slots: { default: !0 }
                      });
                    }), M(te, Z);
                  },
                  $$slots: { default: !0 }
                });
              }), M(O, j);
            },
            $$slots: { default: !0 }
          }
        ));
      }), M(A, D);
    }, L = (A) => {
      var D = fe(), _ = ee(D);
      It(_, () => ql, (N, $) => {
        $(N, Ze(
          {
            type: "single",
            get value() {
              return c(y);
            }
          },
          () => f,
          {
            children: (O, z) => {
              var j = uC(), q = ee(j);
              {
                let T = /* @__PURE__ */ S(() => zn("nopan nodrag border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-3 aria-invalid:ring-3 md:text-sm", d() && "cursor-not-allowed bg-muted/50 text-muted-foreground opacity-60", h()));
                It(q, () => Yl, (U, te) => {
                  te(U, {
                    get class() {
                      return c(T);
                    },
                    get disabled() {
                      return d();
                    },
                    children: (B, Z) => {
                      var W = rC(), J = ee(W), oe = Y(J);
                      {
                        var H = (ce) => {
                          pr(ce, {
                            get target() {
                              return c(m)[0].label;
                            }
                          });
                        }, ne = (ce) => {
                          var ie = nC(), de = Y(ie, !0);
                          X(ie), ze(() => ht(de, u() ?? "")), M(ce, ie);
                        };
                        ae(oe, (ce) => {
                          c(m).length > 0 ? ce(H) : ce(ne, !1);
                        });
                      }
                      X(J);
                      var ge = R(J, 2);
                      Ul(ge, { class: "size-4 opacity-50" }), M(B, W);
                    },
                    $$slots: { default: !0 }
                  });
                });
              }
              var G = R(q, 2);
              It(G, () => Ll, (T, U) => {
                U(T, {
                  children: (te, B) => {
                    var Z = fe(), W = ee(Z);
                    It(W, () => Zl, (J, oe) => {
                      oe(J, {
                        class: "nopan nodrag nowheel data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-96 min-w-(--bits-select-anchor-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
                        children: (H, ne) => {
                          var ge = fe(), ce = ee(ge);
                          It(ce, () => Xl, (ie, de) => {
                            de(ie, {
                              class: "p-1",
                              children: (ye, ke) => {
                                var be = fe(), he = ee(be);
                                {
                                  var Ce = (Q) => {
                                    var Ve = oC();
                                    M(Q, Ve);
                                  }, De = (Q) => {
                                    var Ve = fe(), Ie = ee(Ve);
                                    At(Ie, 17, () => c(P), ({ item: Be, level: Re }) => Be.value, (Be, Re) => {
                                      let Xe = () => c(Re).item, wt = () => c(Re).level;
                                      const Pt = /* @__PURE__ */ S(() => Xe().children && Xe().children.length > 0), at = /* @__PURE__ */ S(() => C(Xe()));
                                      var me = fe(), Me = ee(me);
                                      {
                                        const ft = (xt, ct) => {
                                          let Vt = () => ct?.().selected;
                                          var vt = lC(), lt = ee(vt), kt = Y(lt);
                                          {
                                            var cn = (mt) => {
                                              var dn = iC();
                                              M(mt, dn);
                                            }, ir = (mt) => {
                                              var dn = sC();
                                              M(mt, dn);
                                            };
                                            ae(kt, (mt) => {
                                              c(Pt) ? mt(cn) : mt(ir, !1);
                                            });
                                          }
                                          var Xt = R(kt, 2);
                                          pr(Xt, {
                                            get target() {
                                              return Xe().label;
                                            }
                                          }), X(lt);
                                          var $o = R(lt, 2);
                                          {
                                            var Qo = (mt) => {
                                              var dn = aC();
                                              M(mt, dn);
                                            };
                                            ae($o, (mt) => {
                                              Vt() && mt(Qo);
                                            });
                                          }
                                          M(xt, vt);
                                        };
                                        let Ye = /* @__PURE__ */ S(() => zn("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50")), pt = /* @__PURE__ */ S(() => wt() * 4);
                                        It(Me, () => Wl, (xt, ct) => {
                                          ct(xt, {
                                            get value() {
                                              return c(at).value;
                                            },
                                            get label() {
                                              return c(at).label;
                                            },
                                            get class() {
                                              return c(Ye);
                                            },
                                            get style() {
                                              return `padding-left: ${c(pt) ?? ""}px`;
                                            },
                                            onclick: (Vt) => b(Vt, Xe()),
                                            children: ft,
                                            $$slots: { default: !0 }
                                          });
                                        });
                                      }
                                      M(Be, me);
                                    }), M(Q, Ve);
                                  };
                                  ae(he, (Q) => {
                                    c(P).length === 0 ? Q(Ce) : Q(De, !1);
                                  });
                                }
                                M(ye, be);
                              },
                              $$slots: { default: !0 }
                            });
                          }), M(H, ge);
                        },
                        $$slots: { default: !0 }
                      });
                    }), M(te, Z);
                  },
                  $$slots: { default: !0 }
                });
              }), M(O, j);
            },
            $$slots: { default: !0 }
          }
        ));
      }), M(A, D);
    };
    ae(V, (A) => {
      a() ? A(I) : A(L, !1);
    });
  }
  return M(t, E), ue(k);
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
const cC = ({
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
    Cv(t, u, {
      placement: r,
      middleware: [
        wv(o),
        // 手动偏移配置
        xv(i),
        //自动翻转
        bv(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [kv({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: P, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: k, y: E } = C.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[P.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: E != null ? `${E}px` : "",
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
var dC = /* @__PURE__ */ re('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Co(t, e) {
  le(e, !0);
  const n = g(e, "children", 7), r = g(e, "floating", 7), o = g(e, "placement", 7, "bottom");
  let i, s, a;
  Hn(() => (a = cC({
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
  }, d = dC(), h = Y(d), f = Y(h);
  Te(f, n), X(h), Kt(h, (y) => i = y, () => i);
  var v = R(h, 2), m = Y(v);
  return Te(m, r), X(v), Kt(v, (y) => s = y, () => s), X(d), M(t, d), ue(u);
}
se(Co, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function tt(t, e) {
  le(e, !0);
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
  }, a = fe(), l = ee(a);
  return gf(l, () => `h${r()}`, !1, (u, d) => {
    ot(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var h = fe(), f = ee(h);
    Te(f, () => n() ?? We), M(d, h);
  }), M(t, a), ue(s);
}
se(tt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var hC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const fC = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:var(--input);border:1px solid transparent;}}"
};
function es(t, e) {
  le(e, !0), it(t, fC);
  const n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host"]);
  {
    let r = /* @__PURE__ */ S(() => zn("input-btn-more", e.class));
    Qe(t, Ze(
      {
        size: "icon-xs",
        get class() {
          return c(r);
        }
      },
      () => n,
      {
        children: (o, i) => {
          var s = hC();
          M(o, s);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  ue();
}
se(es, {}, [], [], !0);
const pC = () => ({ deleteNode: (t) => {
  Je.removeNode(t), Je.updateEdges((e) => e.filter((n) => n.source !== t && n.target !== t));
} }), nr = (t = 16) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(t);
  return crypto.getRandomValues(n), Array.from(n, (r) => e[r % e.length]).join("");
}, gC = () => ({ copyNode: (t) => {
  const e = Je.getNode(t);
  if (e) {
    const n = nr(), r = {
      ...e,
      id: n,
      position: { x: e.position.x + 50, y: e.position.y + 50 }
    };
    Je.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), _t = () => Dn("svelteflow__node_id"), Kr = () => Dn("tinyflow_options");
var vC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), mC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), yC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), wC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), bC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), xC = /* @__PURE__ */ re('<div class="input-item svelte-ana6zl">错误重试间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大重试次数： <!></div> <label class="input-item-inline svelte-ana6zl"><span>正常后重置重试次数记录：</span> <input type="checkbox"/></label>', 1), kC = /* @__PURE__ */ re('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!> <label class="input-item-inline svelte-ana6zl"><span>错误重试：</span> <input type="checkbox"/></label> <!></div>'), CC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), $C = /* @__PURE__ */ re('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), SC = /* @__PURE__ */ re('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const _C = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--background);border:1px solid var(--border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--muted-foreground);}"
};
function _n(t, e) {
  le(e, !0), it(t, _C);
  const n = g(e, "data", 7), r = g(e, "id", 7, ""), o = g(e, "icon", 7), i = g(e, "handle", 7), s = g(e, "children", 7), a = g(e, "allowExecute", 7, !0), l = g(e, "allowCopy", 7, !0), u = g(e, "allowDelete", 7, !0), d = g(e, "allowSetting", 7, !0), h = g(e, "allowSettingOfCondition", 7, !0), f = g(e, "showSourceHandle", 7, !0), v = g(e, "showTargetHandle", 7, !0), m = g(e, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: b } = Dt(), x = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: P } = pC(), { copyNode: C } = gC(), k = Kr(), E = () => {
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
  }, L = SC(), A = ee(L);
  {
    var D = (T) => {
      cg(T, {
        get position() {
          return Ee.Top;
        },
        align: "start",
        children: (U, te) => {
          var B = $C(), Z = Y(B);
          {
            var W = (ie) => {
              Qe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: () => {
                  P(r());
                },
                children: (de, ye) => {
                  var ke = vC();
                  M(de, ke);
                },
                $$slots: { default: !0 }
              });
            };
            ae(Z, (ie) => {
              u() && ie(W);
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
                children: (de, ye) => {
                  var ke = mC();
                  M(de, ke);
                },
                $$slots: { default: !0 }
              });
            };
            ae(J, (ie) => {
              l() && ie(oe);
            });
          }
          var H = R(J, 2);
          {
            var ne = (ie) => {
              Qe(ie, {
                size: "icon",
                class: "tf-node-toolbar-item",
                onclick: E,
                children: (de, ye) => {
                  var ke = yC();
                  M(de, ke);
                },
                $$slots: { default: !0 }
              });
            };
            ae(H, (ie) => {
              a() && ie(ne);
            });
          }
          var ge = R(H, 2);
          {
            var ce = (ie) => {
              Co(ie, {
                placement: "bottom",
                floating: (de) => {
                  var ye = kC(), ke = Y(ye), be = R(Y(ke));
                  Et(be, {
                    style: "width: 100%;",
                    onchange: (me) => {
                      const Me = me.target.value;
                      w(V, { title: Me });
                    },
                    get value() {
                      return n().title;
                    }
                  }), X(ke);
                  var he = R(ke, 2), Ce = R(Y(he));
                  ut(Ce, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (me) => {
                      const Me = me.target.value;
                      w(V, { description: Me });
                    },
                    get value() {
                      return n().description;
                    }
                  }), X(he);
                  var De = R(he, 2);
                  {
                    var Q = (me) => {
                      var Me = wC(), ft = R(Y(Me));
                      ut(ft, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ye) => {
                          const pt = Ye.target.value;
                          w(V, { condition: pt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), X(Me), M(me, Me);
                    };
                    ae(De, (me) => {
                      h() && me(Q);
                    });
                  }
                  var Ve = R(De, 2), Ie = R(Y(Ve), 2);
                  Hr(Ie), Ie.__change = (me) => {
                    const Me = me.target.checked;
                    w(V, { loopEnable: Me });
                  }, X(Ve);
                  var Be = R(Ve, 2);
                  {
                    var Re = (me) => {
                      var Me = bC(), ft = ee(Me), Ye = R(Y(ft));
                      {
                        let vt = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                        ut(Ye, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const kt = lt.target.value;
                            w(V, { loopIntervalMs: kt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      X(ft);
                      var pt = R(ft, 2), xt = R(Y(pt));
                      {
                        let vt = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                        ut(xt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const kt = lt.target.value;
                            w(V, { maxLoopCount: kt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      X(pt);
                      var ct = R(pt, 2), Vt = R(Y(ct));
                      ut(Vt, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (vt) => {
                          const lt = vt.target.value;
                          w(V, { loopBreakCondition: lt });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), X(ct), M(me, Me);
                    };
                    ae(Be, (me) => {
                      n().loopEnable && me(Re);
                    });
                  }
                  var Xe = R(Be, 2), wt = R(Y(Xe), 2);
                  Hr(wt), wt.__change = (me) => {
                    const Me = me.target.checked;
                    w(V, { retryEnable: Me });
                  }, X(Xe);
                  var Pt = R(Xe, 2);
                  {
                    var at = (me) => {
                      var Me = xC(), ft = ee(Me), Ye = R(Y(ft));
                      {
                        let vt = /* @__PURE__ */ S(() => n().retryIntervalMs || "1000");
                        ut(Ye, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const kt = lt.target.value;
                            w(V, { retryIntervalMs: kt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      X(ft);
                      var pt = R(ft, 2), xt = R(Y(pt));
                      {
                        let vt = /* @__PURE__ */ S(() => n().maxRetryCount || "3");
                        ut(xt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (lt) => {
                            const kt = lt.target.value;
                            w(V, { maxRetryCount: kt });
                          },
                          get value() {
                            return c(vt);
                          }
                        });
                      }
                      X(pt);
                      var ct = R(pt, 2), Vt = R(Y(ct), 2);
                      Hr(Vt), Vt.__change = (vt) => {
                        const lt = vt.target.checked;
                        w(V, { resetRetryCountAfterNormal: lt });
                      }, X(ct), ze(() => Za(Vt, !!n().resetRetryCountAfterNormal)), M(me, Me);
                    };
                    ae(Pt, (me) => {
                      n().retryEnable && me(at);
                    });
                  }
                  X(ye), ze(() => {
                    Za(Ie, !!n().loopEnable), Za(wt, !!n().retryEnable);
                  }), M(de, ye);
                },
                children: (de, ye) => {
                  Qe(de, {
                    size: "icon",
                    class: "tf-node-toolbar-item",
                    children: (ke, be) => {
                      var he = CC();
                      M(ke, he);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ae(ge, (ie) => {
              d() && ie(ce);
            });
          }
          X(B), M(U, B);
        },
        $$slots: { default: !0 }
      });
    };
    ae(A, (T) => {
      (a() || l() || u()) && T(D);
    });
  }
  var _ = R(A, 2), N = R(Y(_), 2), $ = Y(N);
  Rv($, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return y;
    },
    onChange: (T, U) => {
      w(r(), { expand: U?.includes("key") }), m()?.(U?.includes("key") ? "key" : "");
    }
  }), X(N), X(_);
  var O = R(_, 2);
  {
    var z = (T) => {
      Rr(T, {
        type: "target",
        get position() {
          return Ee.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ae(O, (T) => {
      v() && T(z);
    });
  }
  var j = R(O, 2);
  {
    var q = (T) => {
      Rr(T, {
        type: "source",
        get position() {
          return Ee.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ae(j, (T) => {
      f() && T(q);
    });
  }
  var G = R(j, 2);
  return Te(G, () => i() ?? We), M(t, L), ue(I);
}
xo(["change"]);
se(
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
var PC = /* @__PURE__ */ re('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), OC = /* @__PURE__ */ re('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), EC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), NC = /* @__PURE__ */ re('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const TC = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function jv(t, e) {
  le(e, !0), it(t, TC);
  const n = g(e, "parameter", 7), r = g(e, "index", 7);
  let o = _t(), i = Er(o), s = /* @__PURE__ */ S(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = Dt(), l = (I, L) => {
    a(o, (A) => {
      let D = A.data.parameters;
      return D[r()][I] = L, { parameters: D };
    });
  }, u = (I, L) => {
    const A = L.target.value;
    l(I, A);
  }, d = (I) => {
    const L = I.target.value;
    l("name", L);
  }, h = (I) => {
    l("required", I);
  }, f = (I) => {
    const L = I.value;
    l("formType", L);
  }, v = (I) => {
    const L = I.value;
    l("contentType", L);
  };
  let m;
  const y = () => {
    a(o, (I) => {
      let L = I.data.parameters;
      return L.splice(r(), 1), { parameters: [...L] };
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
  }, b = NC(), x = ee(b), P = Y(x);
  Et(P, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), X(x);
  var C = R(x, 2), k = Y(C);
  Iv(k, {
    get checked() {
      return c(s).required;
    },
    onCheckedChange: h
  }), X(C);
  var E = R(C, 2), V = Y(E);
  return Kt(
    Co(V, {
      placement: "bottom",
      floating: (I) => {
        var L = OC(), A = Y(L), D = R(Y(A));
        {
          let Z = /* @__PURE__ */ S(() => c(s).contentType ? [c(s).contentType] : []);
          Rt(D, {
            get items() {
              return ju;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: v
          });
        }
        X(A);
        var _ = R(A, 2), N = R(Y(_));
        {
          let Z = /* @__PURE__ */ S(() => c(s).formType ? [c(s).formType] : []);
          Rt(N, {
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
        X(_);
        var $ = R(_, 2);
        {
          var O = (Z) => {
            var W = PC(), J = R(Y(W));
            {
              let oe = /* @__PURE__ */ S(() => c(s).enums?.join(`
`));
              ut(J, {
                rows: 3,
                style: "width: 100%;",
                onchange: (H) => {
                  l("enums", H.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(oe);
                },
                placeholder: "一行一个选项"
              });
            }
            X(W), M(Z, W);
          };
          ae($, (Z) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && Z(O);
          });
        }
        var z = R($, 2), j = R(Y(z));
        ut(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formLabel", Z);
          },
          get value() {
            return c(s).formLabel;
          }
        }), X(z);
        var q = R(z, 2), G = R(Y(q));
        ut(G, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formDescription", Z);
          },
          get value() {
            return c(s).formDescription;
          }
        }), X(q);
        var T = R(q, 2), U = R(Y(T));
        ut(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            u("formPlaceholder", Z);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), X(T);
        var te = R(T, 2), B = Y(te);
        Qe(B, {
          variant: "destructive",
          onclick: y,
          children: (Z, W) => {
            Oe();
            var J = He("删除");
            M(Z, J);
          },
          $$slots: { default: !0 }
        }), X(te), X(L), M(I, L);
      },
      children: (I, L) => {
        Qe(I, {
          size: "icon-xs",
          class: "input-btn-more",
          children: (A, D) => {
            var _ = EC();
            M(A, _);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (I) => m = I,
    () => m
  ), X(E), M(t, b), ue(w);
}
se(jv, { parameter: {}, index: {} }, [], [], !0);
var zC = /* @__PURE__ */ re('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), MC = /* @__PURE__ */ re('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), AC = /* @__PURE__ */ re('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const DC = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--muted-foreground);}`
};
function Bv(t, e) {
  le(e, !0), it(t, DC);
  let n = _t(), r = Er(n), o = /* @__PURE__ */ S(() => [...r?.current?.data?.parameters || []]);
  var i = AC(), s = Y(i);
  {
    var a = (u) => {
      var d = zC();
      Oe(4), M(u, d);
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
      jv(u, {
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
      M(u, d);
    }
  ), X(i), M(t, i), ue();
}
se(Bv, {}, [], [], !0);
const Mi = (t) => (!t || t.length == 0 || t.forEach((e) => {
  e.id || (e.id = nr()), Mi(e.children);
}), t), jn = () => {
  const { updateNodeData: t } = Dt();
  return {
    addParameter: (e, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Mi(s?.children)) : Mi(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: nr()
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
var VC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), IC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), HC = /* @__PURE__ */ re('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const LC = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--muted);border:1px solid transparent;}"
};
function Kv(t, e) {
  le(e, !0), it(t, LC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return _n(t, Ze(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = VC();
      M(a, l);
    },
    children: (a, l) => {
      var u = HC(), d = ee(u), h = Y(d);
      tt(h, {
        level: 3,
        children: (m, y) => {
          Oe();
          var w = He("输入参数");
          M(m, w);
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
          var w = IC();
          M(m, w);
        },
        $$slots: { default: !0 }
      }), X(d);
      var v = R(d, 2);
      Bv(v, {}), M(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), ue(s);
}
se(Kv, { data: {} }, [], [], !0);
const Fv = (t, e, n) => {
  for (const r of n)
    r.target === e && r.source && (t.push(r.source), Fv(t, r.source, n));
}, Zv = (t, e, n) => !t || t.length === 0 ? [] : t.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: e + "." + r.name,
  children: Zv(r.children, e + "." + r.name, n)
})), ah = (t, e, n) => {
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
          children: Zv(r, t.id, e)
        };
    }
  }
}, Wv = (t = !1) => {
  const e = _t(), n = Er(e), r = /* @__PURE__ */ S(Rn), o = /* @__PURE__ */ S(() => c(r).nodes), i = /* @__PURE__ */ S(() => c(r).edges), s = /* @__PURE__ */ S(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(e);
    if (t)
      for (const d of c(o)) {
        const h = d.parentId === n.current.id;
        if (h) {
          const f = ah(d, h, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Fv(d, e, c(i));
      for (const h of c(o))
        if (d.includes(h.id)) {
          const f = h.parentId === n.current.id, v = ah(h, f, u);
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
var RC = /* @__PURE__ */ re('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), jC = /* @__PURE__ */ re('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), BC = /* @__PURE__ */ re('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const KC = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Xv(t, e) {
  le(e, !0), it(t, KC), Hn(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7), s = g(e, "showContentType", 7, !1);
  let a = _t(), l = Er(a), u = /* @__PURE__ */ S(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = Dt(), h = (N, $) => {
    d(a, (O) => {
      let z = O.data?.[o()];
      return z[r()] = { ...z[r()], [N]: $ }, { [o()]: z };
    });
  }, f = (N, $) => {
    const O = $.target.value;
    h(N, O);
  }, v = (N) => {
    const $ = N.value;
    h("ref", $);
  }, m = (N) => {
    const $ = N.value;
    h("refType", $);
  }, y = (N) => {
    const $ = N.value;
    h("contentType", $);
  };
  let w;
  const b = () => {
    d(a, (N) => {
      let $ = N.data?.[o()];
      return $.splice(r(), 1), { [o()]: [...$] };
    }), w?.hide();
  };
  let x = Wv(i());
  var P = {
    get parameter() {
      return n();
    },
    set parameter(N) {
      n(N), p();
    },
    get index() {
      return r();
    },
    set index(N) {
      r(N), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(N) {
      o(N), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(N) {
      i(N), p();
    },
    get showContentType() {
      return s();
    },
    set showContentType(N = !1) {
      s(N), p();
    }
  }, C = BC(), k = ee(C), E = Y(k);
  {
    let N = /* @__PURE__ */ S(() => c(u).nameDisabled === !0);
    Et(E, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(N);
      },
      oninput: ($) => f("name", $)
    });
  }
  X(k);
  var V = R(k, 2), I = Y(V);
  {
    var L = (N) => {
      Et(N, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => f("value", $)
      });
    }, A = (N) => {
      var $ = fe(), O = ee($);
      {
        var z = (j) => {
          {
            let q = /* @__PURE__ */ S(() => [c(u).ref]);
            Rt(j, {
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
          (j) => {
            c(u).refType !== "input" && j(z);
          },
          !0
        );
      }
      M(N, $);
    };
    ae(I, (N) => {
      c(u).refType === "fixed" ? N(L) : N(A, !1);
    });
  }
  X(V);
  var D = R(V, 2), _ = Y(D);
  return Kt(
    Co(_, {
      placement: "bottom",
      floating: (N) => {
        var $ = jC(), O = Y($), z = R(Y(O));
        {
          let W = /* @__PURE__ */ S(() => c(u).refType ? [c(u).refType] : []);
          Rt(z, {
            get items() {
              return a7;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(W);
            },
            onSelect: m
          });
        }
        X(O);
        var j = R(O, 2);
        {
          var q = (W) => {
            var J = RC(), oe = R(Y(J));
            {
              let H = /* @__PURE__ */ S(() => c(u).contentType ? [c(u).contentType] : []);
              Rt(oe, {
                get items() {
                  return ju;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(H);
                },
                onSelect: y
              });
            }
            X(J), M(W, J);
          };
          ae(j, (W) => {
            s() && W(q);
          });
        }
        var G = R(j, 2), T = R(Y(G));
        ut(T, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            f("defaultValue", W);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), X(G);
        var U = R(G, 2), te = R(Y(U));
        ut(te, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            f("description", W);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), X(U);
        var B = R(U, 2), Z = Y(B);
        Qe(Z, {
          variant: "destructive",
          onclick: b,
          children: (W, J) => {
            Oe();
            var oe = He("删除");
            M(W, oe);
          },
          $$slots: { default: !0 }
        }), X(B), X($), M(N, $);
      },
      children: (N, $) => {
        es(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => w = N,
    () => w
  ), X(D), M(t, C), ue(P);
}
se(
  Xv,
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
var FC = /* @__PURE__ */ re('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), ZC = /* @__PURE__ */ re('<div class="none-params svelte-32f1pk"> </div>'), WC = /* @__PURE__ */ re('<div class="input-container svelte-32f1pk"><!> <!></div>');
const XC = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--muted-foreground);}`
};
function Jt(t, e) {
  le(e, !0), it(t, XC);
  const n = g(e, "noneParameterText", 7, "无输入参数"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7), i = g(e, "showContentType", 7, !1);
  let s = _t(), a = Er(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[r()] || []]);
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
  }, d = WC(), h = Y(d);
  {
    var f = (m) => {
      var y = FC();
      Oe(4), M(m, y);
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
      Xv(m, {
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
      var y = ZC(), w = Y(y, !0);
      X(y), ze(() => ht(w, n())), M(m, y);
    }
  ), X(d), M(t, d), ue(u);
}
se(
  Jt,
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
var qC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), YC = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), UC = /* @__PURE__ */ re('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const GC = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function qv(t, e) {
  le(e, !0), it(t, GC);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), p();
    }
  };
  return _n(t, Ze(
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
        var l = qC();
        M(a, l);
      },
      children: (a, l) => {
        var u = UC(), d = ee(u), h = Y(d);
        tt(h, {
          level: 3,
          children: (m, y) => {
            Oe();
            var w = He("输出参数");
            M(m, w);
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
            var w = YC();
            M(m, w);
          },
          $$slots: { default: !0 }
        }), X(d);
        var v = R(d, 2);
        Jt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(s);
}
se(qv, { data: {} }, [], [], !0);
const ll = (t) => JSON.parse(JSON.stringify(t));
var JC = /* @__PURE__ */ _e('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), QC = /* @__PURE__ */ re('<div class="input-more-item svelte-hwmib9"><!></div>'), e$ = /* @__PURE__ */ re('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), t$ = /* @__PURE__ */ re('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const n$ = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function Yv(t, e) {
  le(e, !0), it(t, n$);
  const n = g(e, "parameter", 7), r = g(e, "position", 7), o = g(e, "dataKeyName", 7), i = g(e, "placeholder", 7, "请输入参数值");
  let s = _t(), a = Er(s), l = /* @__PURE__ */ S(() => {
    let _ = a?.current?.data?.[o()], N;
    if (_ && r().length > 0) {
      let $ = _;
      for (let O = 0; O < r().length; O++) {
        const z = r()[O];
        O == r().length - 1 ? N = $[z] : $ = $[z].children;
      }
    }
    return { ...n(), ...N };
  });
  const { updateNodeData: u } = Dt(), d = (_, N) => {
    u(s, ($) => {
      const O = $.data?.[o()];
      if (O && r().length > 0) {
        let z = O;
        for (let j = 0; j < r().length; j++) {
          const q = r()[j];
          j == r().length - 1 ? z[q] = { ...z[q], [_]: N } : z = z[q].children;
        }
      }
      return { [o()]: [...ll(O)] };
    });
  }, h = (_, N) => {
    const $ = N.target.value;
    d(_, $);
  }, f = (_) => {
    const N = _.value;
    d("dataType", N);
  };
  let v;
  const m = () => {
    u(s, (_) => {
      let N = _.data?.[o()];
      if (N && r().length > 0) {
        let $ = N;
        for (let O = 0; O < r().length; O++) {
          const z = r()[O];
          O == r().length - 1 ? $.splice(z, 1) : $ = $[z].children;
        }
      }
      return { [o()]: [...ll(N)] };
    }), v?.hide();
  }, y = () => {
    u(s, (_) => {
      let N = _.data?.[o()];
      if (N && r().length > 0) {
        let $ = N;
        for (let O = 0; O < r().length; O++) {
          const z = r()[O];
          O == r().length - 1 ? $[z].children ? $[z].children.push({ id: nr(), name: "newParam", dataType: "String" }) : $[z].children = [{ id: nr(), name: "newParam", dataType: "String" }] : $ = $[z].children;
        }
      }
      return { [o()]: [...ll(N)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), p();
    },
    get position() {
      return r();
    },
    set position(_) {
      r(_), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), p();
    },
    get placeholder() {
      return i();
    },
    set placeholder(_ = "请输入参数值") {
      i(_), p();
    }
  }, b = t$(), x = ee(b), P = Y(x);
  {
    var C = (_) => {
      var N = fe(), $ = ee(N);
      At($, 17, r, co, (O, z) => {
        Oe();
        var j = He(" ");
        M(O, j);
      }), M(_, N);
    };
    ae(P, (_) => {
      r().length > 1 && _(C);
    });
  }
  var k = R(P, 2);
  {
    let _ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
    Et(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (N) => {
        h("name", N);
      },
      get disabled() {
        return c(_);
      }
    });
  }
  X(x);
  var E = R(x, 2), V = Y(E);
  {
    let _ = /* @__PURE__ */ S(() => c(l).dataTypeItems || s7), N = /* @__PURE__ */ S(() => c(l).dataType ? [c(l).dataType] : []), $ = /* @__PURE__ */ S(() => c(l).dataTypeDisabled === !0);
    Rt(V, {
      get items() {
        return c(_);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(N);
      },
      get disabled() {
        return c($);
      },
      onSelect: f
    });
  }
  var I = R(V, 2);
  {
    var L = (_) => {
      Qe(_, {
        size: "icon-xs",
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (N, $) => {
          var O = JC();
          M(N, O);
        },
        $$slots: { default: !0 }
      });
    };
    ae(I, (_) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && _(L);
    });
  }
  X(E);
  var A = R(E, 2), D = Y(A);
  return Kt(
    Co(D, {
      placement: "bottom",
      floating: (_) => {
        var N = e$(), $ = Y(N), O = R(Y($));
        {
          let T = /* @__PURE__ */ S(() => c(l).defaultValue || "");
          ut(O, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (U) => {
              h("defaultValue", U);
            }
          });
        }
        X($);
        var z = R($, 2), j = R(Y(z));
        {
          let T = /* @__PURE__ */ S(() => c(l).description || "");
          ut(j, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(T);
            },
            onchange: (U) => {
              h("description", U);
            }
          });
        }
        X(z);
        var q = R(z, 2);
        {
          var G = (T) => {
            var U = QC(), te = Y(U);
            Qe(te, {
              variant: "destructive",
              onclick: m,
              children: (B, Z) => {
                Oe();
                var W = He("删除");
                M(B, W);
              },
              $$slots: { default: !0 }
            }), X(U), M(T, U);
          };
          ae(q, (T) => {
            c(l).deleteDisabled !== !0 && T(G);
          });
        }
        X(N), M(_, N);
      },
      children: (_, N) => {
        es(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => v = _,
    () => v
  ), X(A), M(t, b), ue(w);
}
se(
  Yv,
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
var r$ = /* @__PURE__ */ re("<!> <!>", 1), o$ = /* @__PURE__ */ re('<div class="none-params svelte-1oz5kx0"> </div>'), i$ = /* @__PURE__ */ re('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), s$ = /* @__PURE__ */ re('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const a$ = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--muted-foreground);}`
};
function Nr(t, e) {
  le(e, !0), it(t, a$);
  const n = (m, y = We, w = We) => {
    var b = fe(), x = ee(b);
    At(
      x,
      19,
      y,
      (P) => `${P.id}_${P.children ? P.children.length : 0}`,
      (P, C, k) => {
        var E = r$(), V = ee(E);
        {
          let A = /* @__PURE__ */ S(() => [...w(), c(k)]);
          Yv(V, {
            get parameter() {
              return c(C);
            },
            get position() {
              return c(A);
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
          var L = (A) => {
            {
              let D = /* @__PURE__ */ S(() => [...w(), c(k)]);
              n(A, () => c(C).children, () => c(D));
            }
          };
          ae(I, (A) => {
            c(C).children && A(L);
          });
        }
        M(P, E);
      },
      (P) => {
        var C = fe(), k = ee(C);
        {
          var E = (V) => {
            var I = o$(), L = Y(I, !0);
            X(I), ze(() => ht(L, r())), M(V, I);
          };
          ae(k, (V) => {
            w().length === 0 && V(E);
          });
        }
        M(P, C);
      }
    ), M(m, b);
  }, r = g(e, "noneParameterText", 7, "无输出参数"), o = g(e, "dataKeyName", 7, "outputDefs"), i = g(e, "placeholder", 7, "请输入参数名称");
  let s = _t(), a = Er(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[o()] || []]);
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
  }, d = s$(), h = Y(d);
  {
    var f = (m) => {
      var y = i$();
      Oe(4), M(m, y);
    };
    ae(h, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var v = R(h, 2);
  return n(v, () => c(l) || [], () => []), X(d), M(t, d), ue(u);
}
se(Nr, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var l$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), u$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), c$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), d$ = /* @__PURE__ */ re('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), h$ = /* @__PURE__ */ re('<div class="setting-title svelte-j81vcl">JSON Schema</div> <div class="setting-item svelte-j81vcl"><!></div>', 1), f$ = /* @__PURE__ */ re('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <!> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const p$ = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function Uv(t, e) {
  le(e, !0), it(t, p$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn(), s = Kr();
  let a = /* @__PURE__ */ we($t([]));
  Hn(async () => {
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
  Fe(() => {
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (h) => {
        var f = l$();
        M(h, f);
      },
      children: (h, f) => {
        var v = f$(), m = ee(v), y = Y(m);
        tt(y, {
          level: 3,
          children: (T, U) => {
            Oe();
            var te = He("输入参数");
            M(T, te);
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
          children: (T, U) => {
            var te = u$();
            M(T, te);
          },
          $$slots: { default: !0 }
        }), X(m);
        var b = R(m, 2);
        Jt(b, {});
        var x = R(b, 2), P = Y(x);
        tt(P, {
          level: 3,
          children: (T, U) => {
            Oe();
            var te = He("图片识别");
            M(T, te);
          },
          $$slots: { default: !0 }
        });
        var C = R(P, 2);
        Qe(C, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (T, U) => {
            var te = c$();
            M(T, te);
          },
          $$slots: { default: !0 }
        }), X(x);
        var k = R(x, 2);
        Jt(k, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var E = R(k, 2);
        tt(E, {
          level: 3,
          mt: "10px",
          children: (T, U) => {
            Oe();
            var te = He("模型设置");
            M(T, te);
          },
          $$slots: { default: !0 }
        });
        var V = R(E, 4), I = Y(V);
        {
          let T = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
          Rt(I, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (U) => {
              const te = U.value;
              l(o, () => ({ llmId: te }));
            },
            get value() {
              return c(T);
            }
          });
        }
        var L = R(I, 2);
        Co(L, {
          placement: "bottom",
          floating: (T) => {
            var U = d$(), te = R(Y(U), 2), B = Y(te), Z = Y(B), W = Y(Z);
            X(Z);
            var J = R(Z, 2);
            Hr(J), J.__input = (he) => l(o, { temperature: parseFloat(he.target.value) }), X(B), X(te);
            var oe = R(te, 2), H = Y(oe), ne = Y(H), ge = Y(ne);
            X(ne);
            var ce = R(ne, 2);
            Hr(ce), ce.__input = (he) => l(o, { topP: parseFloat(he.target.value) }), X(H), X(oe);
            var ie = R(oe, 2), de = Y(ie), ye = Y(de), ke = Y(ye);
            X(ye);
            var be = R(ye, 2);
            Hr(be), be.__input = (he) => l(o, { topK: parseInt(he.target.value) }), X(de), X(ie), X(U), ze(() => {
              ht(W, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), xs(J, n().temperature ?? 0.5), ht(ge, `Top P: ${n().topP ?? 0.9 ?? ""}`), xs(ce, n().topP ?? 0.9), ht(ke, `Top K: ${n().topK ?? 50 ?? ""}`), xs(be, n().topK ?? 50);
            }), M(T, U);
          },
          children: (T, U) => {
            es(T, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), X(V);
        var A = R(V, 4), D = Y(A);
        {
          let T = /* @__PURE__ */ S(() => n().systemPrompt || "");
          ut(D, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(T);
            },
            oninput: (U) => {
              l(o, { systemPrompt: U.target.value });
            }
          });
        }
        X(A);
        var _ = R(A, 4), N = Y(_);
        {
          let T = /* @__PURE__ */ S(() => n().userPrompt || "");
          ut(N, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(T);
            },
            oninput: (U) => {
              l(o, { userPrompt: U.target.value });
            }
          });
        }
        X(_);
        var $ = R(_, 2);
        {
          var O = (T) => {
            var U = h$(), te = R(ee(U), 2), B = Y(te);
            {
              let Z = /* @__PURE__ */ S(() => n().jsonSchema || "");
              ut(B, {
                rows: 5,
                placeholder: "请输入 SON Schema",
                style: "width: 100%",
                get value() {
                  return c(Z);
                },
                oninput: (W) => {
                  l(o, { jsonSchema: W.target.value });
                }
              });
            }
            X(te), M(T, U);
          };
          ae($, (T) => {
            n().outType === "json" && T(O);
          });
        }
        var z = R($, 2), j = Y(z);
        tt(j, {
          level: 3,
          children: (T, U) => {
            Oe();
            var te = He("输出参数");
            M(T, te);
          },
          $$slots: { default: !0 }
        });
        var q = R(j, 2);
        {
          let T = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
          Rt(q, {
            class: "w-25 ml-auto",
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            onSelect: (U) => {
              u(U.value);
            },
            get value() {
              return c(T);
            }
          });
        }
        X(z);
        var G = R(z, 2);
        Nr(G, {}), M(h, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(d);
}
xo(["input"]);
se(Uv, { data: {} }, [], [], !0);
var g$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), v$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), m$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), y$ = /* @__PURE__ */ re('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const w$ = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gv(t, e) {
  le(e, !0), it(t, w$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = _t(), { addParameter: i } = jn(), { updateNodeData: s } = Dt(), a = [
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = g$();
        M(u, d);
      },
      children: (u, d) => {
        var h = y$(), f = ee(h), v = Y(f);
        tt(v, {
          level: 3,
          children: (L, A) => {
            Oe();
            var D = He("输入参数");
            M(L, D);
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
          children: (L, A) => {
            var D = v$();
            M(L, D);
          },
          $$slots: { default: !0 }
        }), X(f);
        var y = R(f, 2);
        Jt(y, {});
        var w = R(y, 2);
        tt(w, {
          level: 3,
          mt: "10px",
          children: (L, A) => {
            Oe();
            var D = He("代码");
            M(L, D);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 4), x = Y(b);
        {
          let L = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
          Rt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (A) => {
              const D = A.value;
              s(o, () => ({ engine: D }));
            },
            get value() {
              return c(L);
            }
          });
        }
        X(b);
        var P = R(b, 4), C = Y(P);
        {
          let L = /* @__PURE__ */ S(() => n().code || "");
          ut(C, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (A) => {
              s(o, () => ({ code: A.target.value }));
            },
            get value() {
              return c(L);
            }
          });
        }
        X(P);
        var k = R(P, 2), E = Y(k);
        tt(E, {
          level: 3,
          mt: "10px",
          children: (L, A) => {
            Oe();
            var D = He("输出参数");
            M(L, D);
          },
          $$slots: { default: !0 }
        });
        var V = R(E, 2);
        Qe(V, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (L, A) => {
            var D = m$();
            M(L, D);
          },
          $$slots: { default: !0 }
        }), X(k);
        var I = R(k, 2);
        Nr(I, {}), M(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Gv, { data: {} }, [], [], !0);
var b$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), x$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), k$ = /* @__PURE__ */ re('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const C$ = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jv(t, e) {
  le(e, !0), it(t, C$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn(), { updateNodeData: s } = Dt();
  Fe(() => {
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = b$();
        M(l, u);
      },
      children: (l, u) => {
        var d = k$(), h = ee(d), f = Y(h);
        tt(f, {
          level: 3,
          children: (k, E) => {
            Oe();
            var V = He("输入参数");
            M(k, V);
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
          children: (k, E) => {
            var V = x$();
            M(k, V);
          },
          $$slots: { default: !0 }
        }), X(h);
        var m = R(h, 2);
        Jt(m, {});
        var y = R(m, 2);
        tt(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, E) => {
            Oe();
            var V = He("模板内容");
            M(k, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 2), b = Y(w);
        {
          let k = /* @__PURE__ */ S(() => n().template || "");
          ut(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ template: E.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        X(w);
        var x = R(w, 2), P = Y(x);
        tt(P, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Oe();
            var V = He("输出参数");
            M(k, V);
          },
          $$slots: { default: !0 }
        }), X(x);
        var C = R(x, 2);
        Nr(C, {}), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(Jv, { data: {} }, [], [], !0);
var $$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), S$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), P$ = /* @__PURE__ */ re('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), O$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), E$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), N$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), T$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), z$ = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), M$ = /* @__PURE__ */ re('<div style="width: 100%"><!></div>'), A$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), D$ = /* @__PURE__ */ re('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const V$ = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Qv(t, e) {
  le(e, !0), it(t, V$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Hn(() => {
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
  ], i = _t(), { addParameter: s } = jn(), { updateNodeData: a } = Dt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  };
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = $$();
        M(u, d);
      },
      children: (u, d) => {
        var h = D$(), f = ee(h), v = Y(f);
        tt(v, {
          level: 3,
          children: (Z, W) => {
            Oe();
            var J = He("输入参数");
            M(Z, J);
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
          children: (Z, W) => {
            var J = S$();
            M(Z, J);
          },
          $$slots: { default: !0 }
        }), X(f);
        var y = R(f, 2);
        Jt(y, {});
        var w = R(y, 2);
        tt(w, {
          level: 3,
          mt: "10px",
          children: (Z, W) => {
            Oe();
            var J = He("URL 地址");
            M(Z, J);
          },
          $$slots: { default: !0 }
        });
        var b = R(w, 2), x = Y(b), P = Y(x);
        {
          let Z = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
          Rt(P, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (W) => {
              const J = W.value;
              a(i, () => ({ method: J }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        X(x);
        var C = R(x, 2), k = Y(C);
        {
          let Z = /* @__PURE__ */ S(() => n().url || "");
          Et(k, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (W) => {
              a(i, () => ({ url: W.target.value }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        X(C), X(b);
        var E = R(b, 2), V = Y(E);
        tt(V, {
          level: 3,
          children: (Z, W) => {
            Oe();
            var J = He("Http 头信息");
            M(Z, J);
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
          children: (Z, W) => {
            var J = _$();
            M(Z, J);
          },
          $$slots: { default: !0 }
        }), X(E);
        var L = R(E, 2);
        Jt(L, { dataKeyName: "headers" });
        var A = R(L, 2);
        {
          var D = (Z) => {
            var W = P$(), J = ee(W);
            tt(J, {
              level: 3,
              mt: "10px",
              children: (Ce, De) => {
                Oe();
                var Q = He("Body");
                M(Ce, Q);
              },
              $$slots: { default: !0 }
            });
            var oe = R(J, 2), H = Y(oe), ne = Y(H);
            {
              let Ce = /* @__PURE__ */ S(() => !n().bodyType || n().bodyType === "");
              Et(ne, {
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
            Oe(), X(H);
            var ge = R(H, 2), ce = Y(ge);
            {
              let Ce = /* @__PURE__ */ S(() => n().bodyType === "form-data");
              Et(ce, {
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
            Oe(), X(ge);
            var ie = R(ge, 2), de = Y(ie);
            {
              let Ce = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
              Et(de, {
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
            Oe(), X(ie);
            var ye = R(ie, 2), ke = Y(ye);
            {
              let Ce = /* @__PURE__ */ S(() => n().bodyType === "json");
              Et(ke, {
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
            Oe(), X(ye);
            var be = R(ye, 2), he = Y(be);
            {
              let Ce = /* @__PURE__ */ S(() => n().bodyType === "raw");
              Et(he, {
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
            Oe(), X(be), X(oe), M(Z, W);
          };
          ae(A, (Z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && Z(D);
          });
        }
        var _ = R(A, 2);
        {
          var N = (Z) => {
            var W = E$(), J = ee(W), oe = Y(J);
            tt(oe, {
              level: 3,
              children: (ge, ce) => {
                Oe();
                var ie = He("参数");
                M(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var H = R(oe, 2);
            Qe(H, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ge, ce) => {
                var ie = O$();
                M(ge, ie);
              },
              $$slots: { default: !0 }
            }), X(J);
            var ne = R(J, 2);
            Jt(ne, { dataKeyName: "formData" }), M(Z, W);
          };
          ae(_, (Z) => {
            n().bodyType === "form-data" && Z(N);
          });
        }
        var $ = R(_, 2);
        {
          var O = (Z) => {
            var W = T$(), J = ee(W), oe = Y(J);
            tt(oe, {
              level: 3,
              children: (ge, ce) => {
                Oe();
                var ie = He("Body 参数");
                M(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var H = R(oe, 2);
            Qe(H, {
              size: "icon-xs",
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ge, ce) => {
                var ie = N$();
                M(ge, ie);
              },
              $$slots: { default: !0 }
            }), X(J);
            var ne = R(J, 2);
            Jt(ne, { dataKeyName: "formUrlencoded" }), M(Z, W);
          };
          ae($, (Z) => {
            n().bodyType === "x-www-form-urlencoded" && Z(O);
          });
        }
        var z = R($, 2);
        {
          var j = (Z) => {
            var W = z$(), J = Y(W);
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
            }), X(W), M(Z, W);
          };
          ae(z, (Z) => {
            n().bodyType === "json" && Z(j);
          });
        }
        var q = R(z, 2);
        {
          var G = (Z) => {
            var W = M$(), J = Y(W);
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
            }), X(W), M(Z, W);
          };
          ae(q, (Z) => {
            n().bodyType === "raw" && Z(G);
          });
        }
        var T = R(q, 2), U = Y(T);
        tt(U, {
          level: 3,
          mt: "10px",
          children: (Z, W) => {
            Oe();
            var J = He("输出参数");
            M(Z, J);
          },
          $$slots: { default: !0 }
        });
        var te = R(U, 2);
        Qe(te, {
          size: "icon-xs",
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (Z, W) => {
            var J = A$();
            M(Z, J);
          },
          $$slots: { default: !0 }
        }), X(T);
        var B = R(T, 2);
        Nr(B, {}), M(u, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(l);
}
se(Qv, { data: {} }, [], [], !0);
var I$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), H$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), L$ = /* @__PURE__ */ re('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const R$ = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function em(t, e) {
  le(e, !0), it(t, R$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn(), s = Kr();
  let a = /* @__PURE__ */ we($t([]));
  Hn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  Fe(() => {
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = I$();
        M(d, h);
      },
      children: (d, h) => {
        var f = L$(), v = ee(f), m = Y(v);
        tt(m, {
          level: 3,
          children: (D, _) => {
            Oe();
            var N = He("输入参数");
            M(D, N);
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
          children: (D, _) => {
            var N = H$();
            M(D, N);
          },
          $$slots: { default: !0 }
        }), X(v);
        var w = R(v, 2);
        Jt(w, {});
        var b = R(w, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("知识库设置");
            M(D, N);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), P = Y(x);
        {
          let D = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
          Rt(P, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (_) => {
              const N = _.value;
              l(o, () => ({ knowledgeId: N }));
            },
            get value() {
              return c(D);
            }
          });
        }
        X(x);
        var C = R(x, 4), k = Y(C);
        Et(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), X(C);
        var E = R(C, 4), V = Y(E);
        {
          let D = /* @__PURE__ */ S(() => n().limit || "");
          Et(V, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (_) => {
              const N = _.target.value;
              l(o, () => ({ limit: N }));
            },
            get value() {
              return c(D);
            }
          });
        }
        X(E);
        var I = R(E, 2), L = Y(I);
        tt(L, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("输出参数");
            M(D, N);
          },
          $$slots: { default: !0 }
        }), X(I);
        var A = R(I, 2);
        Nr(A, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(em, { data: {} }, [], [], !0);
var j$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), B$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), K$ = /* @__PURE__ */ re('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const F$ = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tm(t, e) {
  le(e, !0), it(t, F$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn(), s = Kr();
  let a = /* @__PURE__ */ we($t([]));
  Hn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = Dt();
  Fe(() => {
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var h = j$();
        M(d, h);
      },
      children: (d, h) => {
        var f = K$(), v = ee(f), m = Y(v);
        tt(m, {
          level: 3,
          children: (D, _) => {
            Oe();
            var N = He("输入参数");
            M(D, N);
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
          children: (D, _) => {
            var N = B$();
            M(D, N);
          },
          $$slots: { default: !0 }
        }), X(v);
        var w = R(v, 2);
        Jt(w, {});
        var b = R(w, 2);
        tt(b, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("搜索引擎设置");
            M(D, N);
          },
          $$slots: { default: !0 }
        });
        var x = R(b, 4), P = Y(x);
        {
          let D = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
          Rt(P, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (_) => {
              const N = _.value;
              l(o, () => ({ engine: N }));
            },
            get value() {
              return c(D);
            }
          });
        }
        X(x);
        var C = R(x, 4), k = Y(C);
        Et(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), X(C);
        var E = R(C, 4), V = Y(E);
        Et(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (D) => {
            const _ = D.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), X(E);
        var I = R(E, 2), L = Y(I);
        tt(L, {
          level: 3,
          mt: "10px",
          children: (D, _) => {
            Oe();
            var N = He("输出参数");
            M(D, N);
          },
          $$slots: { default: !0 }
        }), X(I);
        var A = R(I, 2);
        Nr(A, {}), M(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(u);
}
se(tm, { data: {} }, [], [], !0);
var Z$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), W$ = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), X$ = /* @__PURE__ */ re('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const q$ = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--primary);color:var(--primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function nm(t, e) {
  le(e, !0), it(t, q$);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn();
  Fe(() => {
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Z$();
        M(a, l);
      },
      handle: (a) => {
        Rr(a, {
          type: "source",
          get position() {
            return Ee.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = X$(), d = ee(u), h = Y(d);
        tt(h, {
          level: 3,
          children: (b, x) => {
            Oe();
            var P = He("循环变量");
            M(b, P);
          },
          $$slots: { default: !0 }
        }), X(d);
        var f = R(d, 2);
        Jt(f, { dataKeyName: "loopVars" });
        var v = R(f, 2), m = Y(v);
        tt(m, {
          level: 3,
          children: (b, x) => {
            Oe();
            var P = He("输出参数");
            M(b, P);
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
            var P = W$();
            M(b, P);
          },
          $$slots: { default: !0 }
        }), X(v);
        var w = R(v, 2);
        Jt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), M(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ue(s);
}
se(nm, { data: {} }, [], [], !0);
var Y$ = /* @__PURE__ */ re('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), U$ = /* @__PURE__ */ re('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const G$ = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--background);border:1px solid var(--border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--muted-foreground);}"
};
function rm(t, e) {
  le(e, !0), it(t, G$);
  const n = g(e, "parameter", 7), r = g(e, "index", 7), o = g(e, "dataKeyName", 7), i = g(e, "useChildrenOnly", 7);
  let s = _t(), a = Er(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = Dt(), d = (_, N) => {
    u(s, ($) => {
      let O = $.data?.[o()];
      return O[r()] = { ...O[r()], [_]: N }, { [o()]: O };
    });
  }, h = (_, N) => {
    const $ = N.target.value;
    d(_, $);
  }, f = (_) => {
    const N = _.value;
    d("ref", N);
  }, v = (_) => {
    const N = _.value;
    d("formType", N);
  }, m = (_) => {
    const N = _.value;
    d("contentType", N);
  };
  let y;
  const w = () => {
    u(s, (_) => {
      let N = _.data?.[o()];
      return N.splice(r(), 1), { [o()]: [...N] };
    }), y?.hide();
  };
  let b = Wv(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), p();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), p();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), p();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), p();
    }
  }, P = U$(), C = ee(P), k = Y(C);
  {
    let _ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
    Et(k, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: (N) => h("name", N)
    });
  }
  X(C);
  var E = R(C, 2), V = Y(E);
  {
    var I = (_) => {
      Et(_, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (N) => h("value", N)
      });
    }, L = (_) => {
      var N = fe(), $ = ee(N);
      {
        var O = (z) => {
          {
            let j = /* @__PURE__ */ S(() => [c(l).ref]);
            Rt(z, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(j);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ae(
          $,
          (z) => {
            c(l).refType !== "input" && z(O);
          },
          !0
        );
      }
      M(_, N);
    };
    ae(V, (_) => {
      c(l).refType === "fixed" ? _(I) : _(L, !1);
    });
  }
  X(E);
  var A = R(E, 2), D = Y(A);
  return Kt(
    Co(D, {
      placement: "bottom",
      floating: (_) => {
        var N = Y$(), $ = Y(N), O = R(Y($));
        {
          let Z = /* @__PURE__ */ S(() => c(l).contentType ? [c(l).contentType] : []);
          Rt(O, {
            get items() {
              return ju;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(Z);
            },
            onSelect: m
          });
        }
        X($);
        var z = R($, 2), j = R(Y(z));
        {
          let Z = /* @__PURE__ */ S(() => c(l).formType ? [c(l).formType] : []);
          Rt(j, {
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
        X(z);
        var q = R(z, 2), G = R(Y(q));
        ut(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Z) => {
            h("formLabel", Z);
          },
          get value() {
            return c(l).formLabel;
          }
        }), X(q);
        var T = R(q, 2), U = R(Y(T));
        ut(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (Z) => {
            h("formDescription", Z);
          },
          get value() {
            return c(l).formDescription;
          }
        }), X(T);
        var te = R(T, 2), B = Y(te);
        Qe(B, {
          variant: "destructive",
          onclick: w,
          children: (Z, W) => {
            Oe();
            var J = He("删除");
            M(Z, J);
          },
          $$slots: { default: !0 }
        }), X(te), X(N), M(_, N);
      },
      children: (_, N) => {
        es(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), X(A), M(t, P), ue(x);
}
se(
  rm,
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
var J$ = /* @__PURE__ */ re('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Q$ = /* @__PURE__ */ re('<div class="none-params svelte-1fllp9b"> </div>'), e6 = /* @__PURE__ */ re('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const t6 = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--muted-foreground);}`
};
function om(t, e) {
  le(e, !0), it(t, t6);
  const n = g(e, "noneParameterText", 7, "无确认数据"), r = g(e, "dataKeyName", 7, "parameters"), o = g(e, "useChildrenOnly", 7);
  let i = _t(), s = Er(i), a = /* @__PURE__ */ S(() => [...s?.current?.data?.[r()] || []]);
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
  }, u = e6(), d = Y(u);
  {
    var h = (v) => {
      var m = J$();
      Oe(4), M(v, m);
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
      rm(v, {
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
      var m = Q$(), y = Y(m, !0);
      X(m), ze(() => ht(y, n())), M(v, m);
    }
  ), X(u), M(t, u), ue(l);
}
se(om, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Gl = (t, e) => {
  if (t === e) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  const n = Array.isArray(t), r = Array.isArray(e);
  if (n !== r) return !1;
  if (n && r) {
    if (t.length !== e.length) return !1;
    for (let o = 0; o < t.length; o++)
      if (!Gl(t[o], e[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(t), i = Object.keys(e);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in e) || !Gl(t[s], e[s])) return !1;
    return !0;
  }
};
var n6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), r6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), o6 = /* @__PURE__ */ re('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const i6 = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function im(t, e) {
  le(e, !0), it(t, i6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn(), { updateNodeData: s } = Dt();
  Fe(() => {
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
      Gl(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
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
  return _n(t, Ze(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = n6();
        M(l, u);
      },
      children: (l, u) => {
        var d = o6(), h = ee(d), f = Y(h);
        tt(f, {
          level: 3,
          children: (k, E) => {
            Oe();
            var V = He("确认数据");
            M(k, V);
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
          children: (k, E) => {
            var V = r6();
            M(k, V);
          },
          $$slots: { default: !0 }
        }), X(h);
        var m = R(h, 2);
        om(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = R(m, 2);
        tt(y, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Oe();
            var V = He("确认消息");
            M(k, V);
          },
          $$slots: { default: !0 }
        });
        var w = R(y, 4), b = Y(w);
        {
          let k = /* @__PURE__ */ S(() => n().message || "");
          ut(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ message: E.target.value }));
            },
            get value() {
              return c(k);
            }
          });
        }
        X(w);
        var x = R(w, 2), P = Y(x);
        tt(P, {
          level: 3,
          mt: "10px",
          children: (k, E) => {
            Oe();
            var V = He("输出参数");
            M(k, V);
          },
          $$slots: { default: !0 }
        }), X(x);
        var C = R(x, 2);
        Nr(C, { placeholder: "" }), M(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ue(a);
}
se(im, { data: {} }, [], [], !0);
const s6 = {
  startNode: Kv,
  codeNode: Gv,
  confirmNode: im,
  llmNode: Uv,
  templateNode: Jv,
  httpNode: Qv,
  knowledgeNode: em,
  searchEngineNode: tm,
  loopNode: nm,
  endNode: qv
};
var a6 = /* @__PURE__ */ re("<!> ", 1);
function Jl(t, e) {
  le(e, !0);
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
      id: `node_${nr()}`,
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
      var v = a6(), m = ee(v);
      _a(m, n);
      var y = R(m);
      ze(() => ht(y, ` ${r() ?? ""}`)), M(h, v);
    },
    $$slots: { default: !0 }
  }), ue(d);
}
se(Jl, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var l6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), u6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), c6 = /* @__PURE__ */ re('<div><div class="tf-toolbar-container"><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function sm(t, e) {
  le(e, !0);
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
  ], s = [], a = Kr(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((x, P) => (l[x].sortNo || 0) - (l[P].sortNo || 0));
    for (let x of b)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, P) => (x.sortNo || 0) - (P.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let x of b)
        for (let P = 0; P < o.length; P++)
          if (o[P].type === x) {
            o.splice(P, 1);
            break;
          }
    }
  }
  var u = c6(), d = Y(u), h = Y(d), f = Y(h);
  Lv(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      F(n, b.value.toString(), !0);
    }
  }), X(h);
  var v = R(h, 2), m = Y(v);
  At(m, 21, () => o, co, (b, x) => {
    Jl(b, Ze(() => c(x)));
  }), X(m);
  var y = R(m, 2);
  At(y, 21, () => s, co, (b, x) => {
    Jl(b, Ze(() => c(x)));
  }), X(y), X(v), X(d);
  var w = R(d, 2);
  Qe(w, {
    size: "icon",
    variant: "outline",
    onclick: () => {
      F(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var P = fe(), C = ee(P);
      {
        var k = (V) => {
          var I = l6();
          M(V, I);
        }, E = (V) => {
          var I = u6();
          M(V, I);
        };
        ae(C, (V) => {
          c(r) === "show" ? V(k) : V(E, !1);
        });
      }
      M(b, P);
    },
    $$slots: { default: !0 }
  }), X(u), ze(() => {
    un(u, 1, `tf-toolbar ${c(r) ?? ""}`), Bt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), Bt(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), M(t, u), ue();
}
se(sm, {}, [], [], !0);
const d6 = () => ({ getNode: (t) => Je.getNode(t) }), h6 = () => ({ ensureParentInNodesBefore: (t, e) => {
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
} }), f6 = () => ({ getEdgesByTarget: (t) => Je.getEdges().filter((e) => e.target === t) });
var p6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), g6 = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), v6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), m6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), y6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), w6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), b6 = /* @__PURE__ */ re('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), x6 = /* @__PURE__ */ _e('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), k6 = /* @__PURE__ */ re('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), C6 = /* @__PURE__ */ re("<!> <!> <div></div> <!>", 1);
const $6 = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\r
\r
    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--primary);border-radius:50%;cursor:pointer;}`
};
function am(t, e) {
  le(e, !0), it(t, $6);
  const n = g(e, "data", 7), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = _t(), { addParameter: i } = jn(), s = Dt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, b) => {
    l({ [w]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, h = document.createElement("div"), f = Kr().customNodes[e.type];
  f.render?.(h, d, s);
  const v = f.forms;
  let m;
  Fe(() => {
    n().expand && m && m.append(h);
  }), Fe(() => {
    n() && f.onUpdate?.(h, { ...d, data: n() });
  }), Fe(() => {
    !n().parameters && f.parameters && l({
      parameters: Mi(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), Fe(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Mi(JSON.parse(JSON.stringify(f.outputDefs)))
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
      var P = fe(), C = ee(P);
      _a(C, () => f.icon), M(x, P);
    };
    let b = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
    _n(t, Ze(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: w,
        children: (x, P) => {
          var C = C6(), k = ee(C);
          {
            var E = (_) => {
              var N = g6(), $ = ee(N), O = Y($);
              tt(O, {
                level: 3,
                children: (G, T) => {
                  Oe();
                  var U = He("输入参数");
                  M(G, U);
                },
                $$slots: { default: !0 }
              });
              var z = R(O, 2);
              {
                var j = (G) => {
                  Qe(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (T, U) => {
                      var te = p6();
                      M(T, te);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(z, (G) => {
                  f.parametersAddEnable !== !1 && G(j);
                });
              }
              X($);
              var q = R($, 2);
              Jt(q, {}), M(_, N);
            };
            ae(k, (_) => {
              f.parametersEnable !== !1 && _(E);
            });
          }
          var V = R(k, 2);
          {
            var I = (_) => {
              var N = fe(), $ = ee(N);
              At($, 17, () => v, co, (O, z) => {
                var j = fe(), q = ee(j);
                {
                  var G = (U) => {
                    var te = v6(), B = ee(te), Z = Y(B, !0);
                    X(B);
                    var W = R(B, 2), J = Y(W);
                    {
                      let oe = /* @__PURE__ */ S(() => n()[c(z).name] || c(z).defaultValue);
                      Et(J, Ze(
                        {
                          get placeholder() {
                            return c(z).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(oe);
                          }
                        },
                        () => c(z).attrs,
                        {
                          onchange: (H) => {
                            u(c(z).name, H);
                          }
                        }
                      ));
                    }
                    X(W), ze(() => ht(Z, c(z).label)), M(U, te);
                  }, T = (U) => {
                    var te = fe(), B = ee(te);
                    {
                      var Z = (J) => {
                        var oe = m6(), H = ee(oe), ne = Y(H, !0);
                        X(H);
                        var ge = R(H, 2), ce = Y(ge);
                        {
                          let ie = /* @__PURE__ */ S(() => n()[c(z).name] || c(z).defaultValue);
                          ut(ce, Ze(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(z).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(z).attrs,
                            {
                              onchange: (de) => {
                                u(c(z).name, de);
                              }
                            }
                          ));
                        }
                        X(ge), ze(() => ht(ne, c(z).label)), M(J, oe);
                      }, W = (J) => {
                        var oe = fe(), H = ee(oe);
                        {
                          var ne = (ce) => {
                            var ie = y6(), de = ee(ie), ye = Y(de, !0);
                            X(de);
                            var ke = R(de, 2), be = Y(ke), he = Y(be), Ce = Y(he);
                            X(he);
                            var De = R(he, 2), Q = (Ve) => l({ [c(z).name]: parseFloat(Ve.target.value) });
                            ot(
                              De,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(z).attrs,
                                value: n()[c(z).name] ?? c(z).defaultValue,
                                oninput: Q
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), X(be), X(ke), ze(() => {
                              ht(ye, c(z).label), ht(Ce, `${c(z).description ?? ""}: ${n()[c(z).name] ?? c(z).defaultValue ?? ""}`);
                            }), M(ce, ie);
                          }, ge = (ce) => {
                            var ie = fe(), de = ee(ie);
                            {
                              var ye = (be) => {
                                var he = w6(), Ce = ee(he), De = Y(Ce, !0);
                                X(Ce);
                                var Q = R(Ce, 2), Ve = Y(Q);
                                {
                                  let Ie = /* @__PURE__ */ S(() => c(z).options || []), Be = /* @__PURE__ */ S(() => n()[c(z).name] ? [n()[c(z).name]] : [c(z).defaultValue]);
                                  Rt(Ve, {
                                    get items() {
                                      return c(Ie);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(z).placeholder;
                                    },
                                    onSelect: (Re) => {
                                      const Xe = Re.value;
                                      l({ [c(z).name]: Xe });
                                    },
                                    get value() {
                                      return c(Be);
                                    }
                                  });
                                }
                                X(Q), ze(() => ht(De, c(z).label)), M(be, he);
                              }, ke = (be) => {
                                var he = fe(), Ce = ee(he);
                                {
                                  var De = (Ve) => {
                                    var Ie = b6(), Be = ee(Ie), Re = Y(Be, !0);
                                    X(Be);
                                    var Xe = R(Be, 2), wt = Y(Xe);
                                    {
                                      let Pt = /* @__PURE__ */ S(() => c(z).chosen?.buttonText);
                                      Hv(wt, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(z).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Pt);
                                        },
                                        onChosen: (at, me, Me) => {
                                          c(z).chosen?.onChosen?.(l, at, me, Me);
                                        },
                                        get value() {
                                          return n()[c(z).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(z).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    X(Xe), ze(() => ht(Re, c(z).label)), M(Ve, Ie);
                                  }, Q = (Ve) => {
                                    var Ie = fe(), Be = ee(Ie);
                                    {
                                      var Re = (Xe) => {
                                        tt(Xe, Ze({ level: 3, mt: "10px" }, () => c(z).attrs, {
                                          children: (wt, Pt) => {
                                            Oe();
                                            var at = He();
                                            ze(() => ht(at, c(z).label)), M(wt, at);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ae(
                                        Be,
                                        (Xe) => {
                                          c(z).type === "heading" && Xe(Re);
                                        },
                                        !0
                                      );
                                    }
                                    M(Ve, Ie);
                                  };
                                  ae(
                                    Ce,
                                    (Ve) => {
                                      c(z).type === "chosen" ? Ve(De) : Ve(Q, !1);
                                    },
                                    !0
                                  );
                                }
                                M(be, he);
                              };
                              ae(
                                de,
                                (be) => {
                                  c(z).type === "select" ? be(ye) : be(ke, !1);
                                },
                                !0
                              );
                            }
                            M(ce, ie);
                          };
                          ae(
                            H,
                            (ce) => {
                              c(z).type === "slider" ? ce(ne) : ce(ge, !1);
                            },
                            !0
                          );
                        }
                        M(J, oe);
                      };
                      ae(
                        B,
                        (J) => {
                          c(z).type === "textarea" ? J(Z) : J(W, !1);
                        },
                        !0
                      );
                    }
                    M(U, te);
                  };
                  ae(q, (U) => {
                    c(z).type === "input" ? U(G) : U(T, !1);
                  });
                }
                M(O, j);
              }), M(_, N);
            };
            ae(V, (_) => {
              v && _(I);
            });
          }
          var L = R(V, 2);
          Kt(L, (_) => m = _, () => m);
          var A = R(L, 2);
          {
            var D = (_) => {
              var N = k6(), $ = ee(N), O = Y($);
              tt(O, {
                level: 3,
                mt: "10px",
                children: (G, T) => {
                  Oe();
                  var U = He("输出参数");
                  M(G, U);
                },
                $$slots: { default: !0 }
              });
              var z = R(O, 2);
              {
                var j = (G) => {
                  Qe(G, {
                    size: "icon-xs",
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (T, U) => {
                      var te = x6();
                      M(T, te);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(z, (G) => {
                  f.outputDefsAddEnable !== !1 && G(j);
                });
              }
              X($);
              var q = R($, 2);
              Nr(q, {}), M(_, N);
            };
            ae(A, (_) => {
              f.outputDefsEnable !== !1 && _(D);
            });
          }
          ze(() => {
            Bt(L, f.rootStyle || ""), un(L, 1, Or(f.rootClass), "svelte-qt4m0r");
          }), M(x, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return ue(y);
}
se(am, { data: {} }, [], [], !0);
const S6 = () => ({ updateEdgeData: (t, e, n) => {
  const r = Je.getEdge(t);
  if (!r)
    return;
  const o = typeof e == "function" ? e(r) : e;
  r.data = n?.replace ? o : { ...r.data, ...o }, Je.updateEdges((i) => i.map((s) => s.id === t ? r : s));
} }), _6 = () => ({ deleteEdge: (t) => {
  Je.removeEdge(t);
} }), P6 = () => {
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
}, O6 = () => ({ getNodeRelativePosition: (t) => {
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
function N6(t) {
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
function T6(t) {
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
function Ql(t, e) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    return t.map((n) => Ql(n, e));
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
      Object.hasOwn(t, r) && (n[r] = Ql(t[r], e));
    return n;
  }
  return t;
}
const z6 = () => (Dt(), { copyHandler: async (t) => {
  const e = Je.getNodes().filter((s) => s.selected);
  if (e.length === 0) return;
  const n = Je.getEdges().filter((s) => e.some((a) => a.id === s.source) && e.some((a) => a.id === s.target)), r = e.map(E6), o = n.map(T6), i = JSON.stringify({
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
  const r = N6(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${nr()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, h = Ql(l.data, i);
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
      id: `edge_${nr()}`,
      source: u,
      target: d
    });
  }
  Je.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Je.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), lh = () => {
  const t = document.activeElement;
  return !t || !(t instanceof HTMLElement) ? !1 : t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t.isContentEditable;
};
var M6 = /* @__PURE__ */ re('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), A6 = /* @__PURE__ */ re("<!> <!> <!> <!>", 1), D6 = /* @__PURE__ */ re('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const V6 = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function lm(t, e) {
  le(e, !0), it(t, V6);
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
  const { updateEdgeData: l } = S6(), u = (B) => {
    B.preventDefault(), B.dataTransfer && (B.dataTransfer.dropEffect = "move");
  }, d = (B) => {
    B.preventDefault();
    const Z = i.screenToFlowPosition({ x: B.clientX - 250, y: B.clientY - 100 }), W = B.dataTransfer?.getData("application/tinyflow");
    if (!W)
      return;
    const J = JSON.parse(W), oe = { id: `node_${nr()}`, position: Z, data: {}, ...J };
    Je.addNode(oe), Je.selectNodeOnly(oe.id);
  }, { getNode: h } = d6(), f = (B) => {
    const Z = h(B.source), W = h(B.target);
    if (B.sourceHandle === "loop_handle" || Z.parentId) {
      const J = i.getEdges();
      for (let oe of J)
        if (oe.target === B.target) {
          const H = h(oe.source);
          if (B.sourceHandle === "loop_handle" && H.parentId !== Z.id || Z.parentId && H.parentId !== Z.parentId)
            return !1;
        }
    }
    return !(!Z.parentId && W.parentId && W.parentId !== Z.id);
  }, { getNodesFromSource: v } = P6(), { getNodeRelativePosition: m } = O6(), { ensureParentInNodesBefore: y } = h6(), w = (B, Z) => {
    if (!Z.isValid)
      return;
    const W = Z.toNode;
    if (W.parentId)
      return;
    const J = Z.fromNode, oe = Z.fromHandle, H = { position: { ...W.position } };
    if (oe.id === "loop_handle" ? H.parentId = J.id : J.parentId && (H.parentId = J.parentId), H.parentId) {
      const { x: ne, y: ge } = m(H.parentId);
      H.position = { x: W.position.x - ne, y: W.position.y - ge }, i.updateNode(W.id, H), v(W.id).forEach((ce) => {
        i.updateNode(ce.id, {
          parentId: H.parentId,
          position: { x: ce.position.x - ne, y: ce.position.y - ge }
        });
      }), y(H.parentId, W.id);
    }
    setTimeout(() => {
      Je.getEdges().forEach((ne) => {
        ne.target === W.id && ne.source == J.id && (F(s, !0), F(a, ne, !0));
      });
    });
  }, { getEdgesByTarget: b } = f6(), x = (B) => {
    B.edges.forEach((Z) => {
      Z.id === c(a)?.id && (F(a, null), F(s, !1));
      const W = h(Z.target);
      if (W && W.parentId) {
        const J = b(Z.target), { x: oe, y: H } = m(W.parentId);
        if (J.length === 0)
          i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + oe, y: W.position.y + H }
          }), v(W.id).forEach((ne) => {
            i.updateNode(ne.id, {
              parentId: void 0,
              position: { x: ne.position.x + oe, y: ne.position.y + H }
            });
          });
        else {
          let ne = !1;
          for (let ge = 0; ge < J.length; ge++) {
            const ce = J[ge], ie = h(ce.source);
            if (ie.parentId || ie.type === "loopNode") {
              ne = !0;
              break;
            }
          }
          ne || (i.updateNode(W.id, {
            parentId: void 0,
            position: { x: W.position.x + oe, y: W.position.y + H }
          }), v(W.id).forEach((ge) => {
            i.updateNode(ge.id, {
              parentId: void 0,
              position: { x: ge.position.x + oe, y: ge.position.y + H }
            });
          }));
        }
      }
    });
  }, { deleteEdge: P } = _6(), C = (B, Z) => {
  }, k = (B) => {
  }, { copyHandler: E, pasteHandler: V } = z6(), I = (B) => {
    lh() || ((B.ctrlKey || B.metaKey) && B.key === "c" && (B.preventDefault(), E(B)), (B.ctrlKey || B.metaKey) && B.key === "a" && (B.preventDefault(), Je.updateNodes((Z) => Z.map((W) => ({ ...W, selected: !0 }))), Je.updateEdges((Z) => Z.map((W) => ({ ...W, selected: !0 })))));
  }, L = async (B) => {
    lh() || V(B);
  };
  Hn(() => {
    window.addEventListener("keydown", I), window.addEventListener("paste", L);
  }), Ri(() => {
    window.removeEventListener("keydown", I), window.removeEventListener("paste", L);
  });
  const A = {
    // ...nodeTypes
  }, D = Kr().customNodes;
  if (D)
    for (let B of Object.keys(D))
      A[B] = am;
  const _ = Kr().onDataChange;
  Fe(() => {
    _?.({
      nodes: Je.getNodes(),
      edges: Je.getEdges(),
      viewport: Je.getViewport()
    });
  });
  var N = {
    get onInit() {
      return n();
    },
    set onInit(B) {
      n(B), p();
    },
    get colorMode() {
      return r();
    },
    set colorMode(B) {
      r(B), p();
    }
  }, $ = D6(), O = Y($), z = Je.getNodes, j = Je.setNodes, q = Je.getEdges, G = Je.setEdges, T = Je.getViewport, U = Je.setViewport;
  {
    let B = /* @__PURE__ */ S(() => ({ ...s6, ...A })), Z = /* @__PURE__ */ S(() => ({
      markerEnd: { type: Oi.ArrowClosed, width: 20, height: 20 }
    }));
    Gp(O, {
      get colorMode() {
        return r();
      },
      get nodeTypes() {
        return c(B);
      },
      get nodes() {
        return z();
      },
      set nodes(W) {
        j(W);
      },
      get edges() {
        return q();
      },
      set edges(W) {
        G(W);
      },
      get viewport() {
        return T();
      },
      set viewport(W) {
        U(W);
      },
      class: "tinyflow-logo",
      ondrop: d,
      ondragover: u,
      isValidConnection: f,
      onconnectend: w,
      onconnectstart: C,
      onconnect: k,
      connectionRadius: 50,
      onedgeclick: (W) => {
        F(s, !0), F(a, W.edge, !0);
      },
      onbeforeconnect: (W) => ({ ...W, id: nr() }),
      ondelete: x,
      onclick: (W) => {
        const J = W.target;
        J.classList.contains("svelte-flow__edge-interaction") || J.classList.contains("panel-content") || J.closest(".panel-content") || (F(s, !1), F(a, null));
      },
      get defaultEdgeOptions() {
        return c(Z);
      },
      children: (W, J) => {
        var oe = A6(), H = ee(oe);
        ag(H, {});
        var ne = R(H, 2);
        og(ne, {});
        var ge = R(ne, 2);
        ug(ge, {});
        var ce = R(ge, 2);
        {
          var ie = (de) => {
            qi(de, {
              children: (ye, ke) => {
                var be = M6(), he = R(Y(be), 4), Ce = Y(he);
                {
                  let Ie = /* @__PURE__ */ S(() => c(a)?.data?.condition);
                  ut(Ce, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ie);
                    },
                    onchange: (Be) => {
                      c(a) && l(c(a).id, { condition: Be.target?.value });
                    }
                  });
                }
                X(he);
                var De = R(he, 2), Q = Y(De);
                Qe(Q, {
                  variant: "destructive",
                  onclick: () => {
                    P(c(a)?.id), F(s, !1);
                  },
                  children: (Ie, Be) => {
                    Oe();
                    var Re = He("删除");
                    M(Ie, Re);
                  },
                  $$slots: { default: !0 }
                });
                var Ve = R(Q, 2);
                Qe(Ve, {
                  variant: "default",
                  onclick: () => {
                    F(s, !1);
                  },
                  children: (Ie, Be) => {
                    Oe();
                    var Re = He("保存");
                    M(Ie, Re);
                  },
                  $$slots: { default: !0 }
                }), X(De), X(be), M(ye, be);
              },
              $$slots: { default: !0 }
            });
          };
          ae(ce, (de) => {
            c(s) && de(ie);
          });
        }
        M(W, oe);
      },
      $$slots: { default: !0 }
    });
  }
  var te = R(O, 2);
  return sm(te, {}), X($), M(t, $), ue(N);
}
se(lm, { onInit: {}, colorMode: {} }, [], [], !0);
const um = typeof window < "u" ? window : void 0;
function I6(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
let H6 = class {
  #e;
  #t;
  constructor(t = {}) {
    const { window: e = um, document: n = e?.document } = t;
    e !== void 0 && (this.#e = n, this.#t = mo((r) => {
      const o = St(e, "focusin", r), i = St(e, "focusout", r);
      return () => {
        o(), i();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? I6(this.#e) : null;
  }
};
new H6();
function L6(t, e) {
  switch (t) {
    case "post":
      Fe(e);
      break;
    case "pre":
      rn(e);
      break;
  }
}
function cm(t, e, n, r = {}) {
  const { lazy: o = !1 } = r;
  let i = !o, s = Array.isArray(t) ? [] : void 0;
  L6(e, () => {
    const a = Array.isArray(t) ? t.map((u) => u()) : t();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = yt(() => n(a, s));
    return s = a, l;
  });
}
function vc(t, e, n) {
  cm(t, "post", e, n);
}
function R6(t, e, n) {
  cm(t, "pre", e, n);
}
vc.pre = R6;
function j6(t, e) {
  switch (t) {
    case "local":
      return e.localStorage;
    case "session":
      return e.sessionStorage;
  }
}
class dm {
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
      window: a = um
    } = r;
    if (this.#e = n, this.#t = e, this.#n = i, a === void 0) return;
    const l = j6(o, a);
    this.#r = l;
    const u = l.getItem(e);
    u !== null ? this.#e = this.#s(u) : this.#l(n), s && o === "local" && (this.#o = mo(() => St(a, "storage", this.#a)));
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
function uh(t) {
  return t.filter((e) => e.length > 0);
}
const hm = {
  getItem: (t) => null,
  setItem: (t, e) => {
  }
}, ts = typeof document < "u";
function B6(t) {
  return typeof t == "function";
}
function K6(t) {
  return t !== null && typeof t == "object";
}
const Ai = Symbol("box"), mc = Symbol("is-writable");
function F6(t) {
  return K6(t) && Ai in t;
}
function Z6(t) {
  return Tt.isBox(t) && mc in t;
}
function Tt(t) {
  let e = /* @__PURE__ */ we($t(t));
  return {
    [Ai]: !0,
    [mc]: !0,
    get current() {
      return c(e);
    },
    set current(n) {
      F(e, n, !0);
    }
  };
}
function W6(t, e) {
  const n = /* @__PURE__ */ S(t);
  return e ? {
    [Ai]: !0,
    [mc]: !0,
    get current() {
      return c(n);
    },
    set current(r) {
      e(r);
    }
  } : {
    [Ai]: !0,
    get current() {
      return t();
    }
  };
}
function X6(t) {
  return Tt.isBox(t) ? t : B6(t) ? Tt.with(t) : Tt(t);
}
function q6(t) {
  return Object.entries(t).reduce(
    (e, [n, r]) => Tt.isBox(r) ? (Tt.isWritableBox(r) ? Object.defineProperty(e, n, {
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
function Y6(t) {
  return Tt.isWritableBox(t) ? {
    [Ai]: !0,
    get current() {
      return t.current;
    }
  } : t;
}
Tt.from = X6;
Tt.with = W6;
Tt.flatten = q6;
Tt.readonly = Y6;
Tt.isBox = F6;
Tt.isWritableBox = Z6;
function U6(t, e) {
  const n = RegExp(t, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, e) : r;
  };
}
const G6 = U6(/[A-Z]/, (t) => `-${t.toLowerCase()}`);
function J6(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new TypeError(`expected an argument of type object, but got ${typeof t}`);
  return Object.keys(t).map((e) => `${G6(e)}: ${t[e]};`).join(`
`);
}
function Q6(t = {}) {
  return J6(t).replace(`
`, " ");
}
const e9 = {
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
Q6(e9);
const t9 = typeof window < "u" ? window : void 0;
function n9(t) {
  let e = t.activeElement;
  for (; e?.shadowRoot; ) {
    const n = e.shadowRoot.activeElement;
    if (n === e)
      break;
    e = n;
  }
  return e;
}
class r9 {
  #e;
  #t;
  constructor(e = {}) {
    const { window: n = t9, document: r = n?.document } = e;
    n !== void 0 && (this.#e = r, this.#t = mo((o) => {
      const i = St(n, "focusin", o), s = St(n, "focusout", o);
      return () => {
        i(), s();
      };
    }));
  }
  get current() {
    return this.#t?.(), this.#e ? n9(this.#e) : null;
  }
}
new r9();
const ro = Tt("mode-watcher-mode"), oo = Tt("mode-watcher-theme"), o9 = ["dark", "light", "system"];
function eu(t) {
  return typeof t != "string" ? !1 : o9.includes(t);
}
class i9 {
  #e = "system";
  #t = ts ? localStorage : hm;
  #n = this.#t.getItem(ro.current);
  #r = eu(this.#n) ? this.#n : this.#e;
  #o = /* @__PURE__ */ we($t(this.#i()));
  #i(e = this.#r) {
    return new dm(ro.current, e, {
      serializer: {
        serialize: (n) => n,
        deserialize: (n) => eu(n) ? n : this.#e
      }
    });
  }
  constructor() {
    yo(() => vc.pre(() => ro.current, (e, n) => {
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
class s9 {
  #e = void 0;
  #t = !0;
  #n = /* @__PURE__ */ we($t(this.#e));
  #r = typeof window < "u" && typeof window.matchMedia == "function" ? new Ep("prefers-color-scheme: light") : { current: !1 };
  query() {
    ts && F(this.#n, this.#r.current ? "light" : "dark", !0);
  }
  tracking(e) {
    this.#t = e;
  }
  constructor() {
    yo(() => {
      rn(() => {
        this.#t && this.query();
      });
    }), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
  }
  get current() {
    return c(this.#n);
  }
}
const tu = new i9(), nu = new s9();
class a9 {
  #e = ts ? localStorage : hm;
  #t = this.#e.getItem(oo.current);
  #n = this.#t === null || this.#t === void 0 ? "" : this.#t;
  #r = /* @__PURE__ */ we($t(this.#o()));
  #o(e = this.#n) {
    return new dm(oo.current, e, {
      serializer: {
        serialize: (n) => typeof n != "string" ? "" : n,
        deserialize: (n) => n
      }
    });
  }
  constructor() {
    yo(() => vc.pre(() => oo.current, (e, n) => {
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
const Ts = new a9();
let ch, dh, hh = !1, ys = null;
function l9() {
  return ys || (ys = document.createElement("style"), ys.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`)), ys);
}
function fm(t, e = !1) {
  if (typeof document > "u")
    return;
  if (!hh) {
    hh = !0, t();
    return;
  }
  if (typeof process < "u" && process.env?.NODE_ENV === "test" || typeof window < "u" && window.__vitest_worker__) {
    t();
    return;
  }
  clearTimeout(ch), clearTimeout(dh);
  const n = l9(), r = () => document.head.appendChild(n), o = () => {
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
  r(), ch = window.setTimeout(() => {
    t(), dh = window.setTimeout(o, 16);
  }, 16);
}
const Ar = Tt(void 0), fa = Tt(!0), pa = Tt(!1), ru = Tt([]), ou = Tt([]);
function u9() {
  const t = /* @__PURE__ */ S(() => {
    if (!ts) return;
    const e = tu.current === "system" ? nu.current : tu.current, n = uh(ru.current), r = uh(ou.current);
    function o() {
      const i = document.documentElement, s = document.querySelector('meta[name="theme-color"]');
      e === "light" ? (n.length && i.classList.remove(...n), r.length && i.classList.add(...r), i.style.colorScheme = "light", s && Ar.current && s.setAttribute("content", Ar.current.light)) : (r.length && i.classList.remove(...r), n.length && i.classList.add(...n), i.style.colorScheme = "dark", s && Ar.current && s.setAttribute("content", Ar.current.dark));
    }
    return fa.current ? fm(o, pa.current) : o(), e;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
function c9() {
  const t = /* @__PURE__ */ S(() => {
    if (Ts.current, !ts) return;
    function e() {
      document.documentElement.setAttribute("data-theme", Ts.current);
    }
    return fa.current ? fm(e, yt(() => pa.current)) : e(), Ts.current;
  });
  return {
    get current() {
      return c(t);
    }
  };
}
const d9 = u9(), h9 = c9();
function pm(t) {
  tu.current = t;
}
function f9(t) {
  Ts.current = t;
}
function p9({ defaultMode: t = "system", themeColors: e, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: o = "", modeStorageKey: i = "mode-watcher-mode", themeStorageKey: s = "mode-watcher-theme" }) {
  const a = document.documentElement, l = localStorage.getItem(i) ?? t, u = localStorage.getItem(s) ?? o, d = l === "light" || l === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (d ? (n.length && a.classList.remove(...n.filter(Boolean)), r.length && a.classList.add(...r.filter(Boolean))) : (r.length && a.classList.remove(...r.filter(Boolean)), n.length && a.classList.add(...n.filter(Boolean))), a.style.colorScheme = d ? "light" : "dark", e) {
    const h = document.querySelector('meta[name="theme-color"]');
    h && h.setAttribute("content", l === "light" ? e.light : e.dark);
  }
  u && (a.setAttribute("data-theme", u), localStorage.setItem(s, u)), localStorage.setItem(i, l);
}
var g9 = /* @__PURE__ */ re('<meta name="theme-color"/>');
function gm(t, e) {
  le(e, !0);
  let n = g(e, "themeColors", 7);
  var r = {
    get themeColors() {
      return n();
    },
    set themeColors(a) {
      n(a), p();
    }
  }, o = fe(), i = ee(o);
  {
    var s = (a) => {
      var l = g9();
      ze(() => Ne(l, "content", n().dark)), M(a, l);
    };
    ae(i, (a) => {
      n() && a(s);
    });
  }
  return M(t, o), ue(r);
}
se(gm, { themeColors: {} }, [], [], !0);
var v9 = /* @__PURE__ */ re('<meta name="theme-color"/>'), m9 = /* @__PURE__ */ re("<!> <!>", 1);
function vm(t, e) {
  le(e, !0);
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
    var a = m9(), l = ee(a);
    {
      var u = (h) => {
        var f = v9();
        ze(() => Ne(f, "content", o().dark)), M(h, f);
      };
      ae(l, (h) => {
        o() && h(u);
      });
    }
    var d = R(l, 2);
    _a(d, () => `<script${n() ? ` nonce=${n()}` : ""}>(` + p9.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), M(s, a);
  }), ue(i);
}
se(vm, { trueNonce: {}, initConfig: {}, themeColors: {} }, [], [], !0);
function mm(t, e) {
  le(e, !0);
  let n = g(e, "track", 7, !0), r = g(e, "defaultMode", 7, "system"), o = g(e, "themeColors", 7), i = g(e, "disableTransitions", 7, !0), s = g(e, "darkClassNames", 23, () => ["dark"]), a = g(e, "lightClassNames", 23, () => []), l = g(e, "defaultTheme", 7, ""), u = g(e, "nonce", 7, ""), d = g(e, "themeStorageKey", 7, "mode-watcher-theme"), h = g(e, "modeStorageKey", 7, "mode-watcher-mode"), f = g(e, "disableHeadScriptInjection", 7, !1), v = g(e, "synchronousModeChanges", 7, !1);
  ro.current = h(), oo.current = d(), ru.current = s(), ou.current = a(), fa.current = i(), Ar.current = o(), pa.current = v(), rn(() => {
    pa.current = v();
  }), rn(() => {
    fa.current = i();
  }), rn(() => {
    Ar.current = o();
  }), rn(() => {
    ru.current = s();
  }), rn(() => {
    ou.current = a();
  }), rn(() => {
    ro.current = h();
  }), rn(() => {
    oo.current = d();
  }), rn(() => {
    d9.current, ro.current, oo.current, h9.current;
  }), Hn(() => {
    nu.tracking(n()), nu.query();
    const k = localStorage.getItem(ro.current);
    pm(eu(k) ? k : r());
    const E = localStorage.getItem(oo.current);
    f9(E || l());
  });
  const m = {
    defaultMode: r(),
    themeColors: o(),
    darkClassNames: s(),
    lightClassNames: a(),
    defaultTheme: l(),
    modeStorageKey: h(),
    themeStorageKey: d()
  }, y = /* @__PURE__ */ S(() => typeof window > "u" ? u() : "");
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
  }, b = fe(), x = ee(b);
  {
    var P = (k) => {
      gm(k, {
        get themeColors() {
          return Ar.current;
        }
      });
    }, C = (k) => {
      vm(k, {
        get trueNonce() {
          return c(y);
        },
        get initConfig() {
          return m;
        },
        get themeColors() {
          return Ar.current;
        }
      });
    };
    ae(x, (k) => {
      f() ? k(P) : k(C, !1);
    });
  }
  return M(t, b), ue(w);
}
se(
  mm,
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
var y9 = /* @__PURE__ */ re("<!> <!>", 1);
function w9(t, e) {
  le(e, !0);
  const n = g(e, "options", 7), r = g(e, "onInit", 7);
  let { data: o, theme: i = "system" } = n();
  if (pm(i), typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Je.init(o?.nodes || [], o?.edges || []), lo("tinyflow_options", n());
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
  }, a = y9(), l = ee(a);
  mm(l, {});
  var u = R(l, 2);
  return Jp(u, {
    children: (d, h) => {
      lm(d, {
        get onInit() {
          return r();
        },
        get colorMode() {
          return i;
        }
      });
    },
    $$slots: { default: !0 }
  }), M(t, a), ue(s);
}
customElements.define("tinyflow-component", se(w9, { options: {}, onInit: {} }, [], [], !1));
const x9 = _m((t, e) => {
  const n = kc(null), r = kc(null);
  Pm(e, () => ({
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
  x9 as Tinyflow
};
//# sourceMappingURL=index.js.map
