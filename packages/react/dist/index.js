import Jl, { forwardRef as sf, useRef as Rs, useImperativeHandle as lf, useEffect as uf } from "react";
var ni = { exports: {} }, co = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function cf() {
  if (Zs) return co;
  Zs = 1;
  var e = Jl, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return co.Fragment = n, co.jsx = i, co.jsxs = i, co;
}
var fo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function df() {
  return Bs || (Bs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Jl, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function $(z) {
      if (z === null || typeof z != "object")
        return null;
      var J = m && z[m] || z[b];
      return typeof J == "function" ? J : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(z) {
      {
        for (var J = arguments.length, ue = new Array(J > 1 ? J - 1 : 0), Pe = 1; Pe < J; Pe++)
          ue[Pe - 1] = arguments[Pe];
        x("error", z, ue);
      }
    }
    function x(z, J, ue) {
      {
        var Pe = _.ReactDebugCurrentFrame, R = Pe.getStackAddendum();
        R !== "" && (J += "%s", ue = ue.concat([R]));
        var et = ue.map(function(Be) {
          return String(Be);
        });
        et.unshift("Warning: " + J), Function.prototype.apply.call(console[z], console, et);
      }
    }
    var p = !1, k = !1, O = !1, S = !1, T = !1, N;
    N = Symbol.for("react.module.reference");
    function D(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === a || T || z === o || z === u || z === c || S || z === v || p || k || O || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === d || z.$$typeof === i || z.$$typeof === s || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === N || z.getModuleId !== void 0));
    }
    function L(z, J, ue) {
      var Pe = z.displayName;
      if (Pe)
        return Pe;
      var R = J.displayName || J.name || "";
      return R !== "" ? ue + "(" + R + ")" : ue;
    }
    function H(z) {
      return z.displayName || "Context";
    }
    function B(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case s:
            var J = z;
            return H(J) + ".Consumer";
          case i:
            var ue = z;
            return H(ue._context) + ".Provider";
          case l:
            return L(z, z.render, "ForwardRef");
          case d:
            var Pe = z.displayName || null;
            return Pe !== null ? Pe : B(z.type) || "Memo";
          case f: {
            var R = z, et = R._payload, Be = R._init;
            try {
              return B(Be(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, C, E, V, I, Y, F, G;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function ee() {
      {
        if (M === 0) {
          C = console.log, E = console.info, V = console.warn, I = console.error, Y = console.group, F = console.groupCollapsed, G = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: z,
            log: z,
            warn: z,
            error: z,
            group: z,
            groupCollapsed: z,
            groupEnd: z
          });
        }
        M++;
      }
    }
    function W() {
      {
        if (M--, M === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, z, {
              value: C
            }),
            info: P({}, z, {
              value: E
            }),
            warn: P({}, z, {
              value: V
            }),
            error: P({}, z, {
              value: I
            }),
            group: P({}, z, {
              value: Y
            }),
            groupCollapsed: P({}, z, {
              value: F
            }),
            groupEnd: P({}, z, {
              value: G
            })
          });
        }
        M < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = _.ReactCurrentDispatcher, ke;
    function $e(z, J, ue) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (R) {
            var Pe = R.stack.trim().match(/\n( *(at )?)/);
            ke = Pe && Pe[1] || "";
          }
        return `
` + ke + z;
      }
    }
    var he = !1, Ne;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new se();
    }
    function be(z, J) {
      if (!z || he)
        return "";
      {
        var ue = Ne.get(z);
        if (ue !== void 0)
          return ue;
      }
      var Pe;
      he = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = le.current, le.current = null, ee();
      try {
        if (J) {
          var Be = function() {
            throw Error();
          };
          if (Object.defineProperty(Be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Be, []);
            } catch (kt) {
              Pe = kt;
            }
            Reflect.construct(z, [], Be);
          } else {
            try {
              Be.call();
            } catch (kt) {
              Pe = kt;
            }
            z.call(Be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Pe = kt;
          }
          z();
        }
      } catch (kt) {
        if (kt && Pe && typeof kt.stack == "string") {
          for (var ze = kt.stack.split(`
`), Et = Pe.stack.split(`
`), dt = ze.length - 1, gt = Et.length - 1; dt >= 1 && gt >= 0 && ze[dt] !== Et[gt]; )
            gt--;
          for (; dt >= 1 && gt >= 0; dt--, gt--)
            if (ze[dt] !== Et[gt]) {
              if (dt !== 1 || gt !== 1)
                do
                  if (dt--, gt--, gt < 0 || ze[dt] !== Et[gt]) {
                    var Yt = `
` + ze[dt].replace(" at new ", " at ");
                    return z.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", z.displayName)), typeof z == "function" && Ne.set(z, Yt), Yt;
                  }
                while (dt >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        he = !1, le.current = et, W(), Error.prepareStackTrace = R;
      }
      var Qn = z ? z.displayName || z.name : "", er = Qn ? $e(Qn) : "";
      return typeof z == "function" && Ne.set(z, er), er;
    }
    function Fe(z, J, ue) {
      return be(z, !1);
    }
    function Ye(z) {
      var J = z.prototype;
      return !!(J && J.isReactComponent);
    }
    function Ze(z, J, ue) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return be(z, Ye(z));
      if (typeof z == "string")
        return $e(z);
      switch (z) {
        case u:
          return $e("Suspense");
        case c:
          return $e("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return Fe(z.render);
          case d:
            return Ze(z.type, J, ue);
          case f: {
            var Pe = z, R = Pe._payload, et = Pe._init;
            try {
              return Ze(et(R), J, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, pe = {}, me = _.ReactDebugCurrentFrame;
    function Le(z) {
      if (z) {
        var J = z._owner, ue = Ze(z.type, z._source, J ? J.type : null);
        me.setExtraStackFrame(ue);
      } else
        me.setExtraStackFrame(null);
    }
    function Ae(z, J, ue, Pe, R) {
      {
        var et = Function.call.bind(K);
        for (var Be in z)
          if (et(z, Be)) {
            var ze = void 0;
            try {
              if (typeof z[Be] != "function") {
                var Et = Error((Pe || "React class") + ": " + ue + " type `" + Be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[Be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Et.name = "Invariant Violation", Et;
              }
              ze = z[Be](J, Be, Pe, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              ze = dt;
            }
            ze && !(ze instanceof Error) && (Le(R), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", ue, Be, typeof ze), Le(null)), ze instanceof Error && !(ze.message in pe) && (pe[ze.message] = !0, Le(R), h("Failed %s type: %s", ue, ze.message), Le(null));
          }
      }
    }
    var Ue = Array.isArray;
    function De(z) {
      return Ue(z);
    }
    function qe(z) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, ue = J && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return ue;
      }
    }
    function ut(z) {
      try {
        return bt(z), !1;
      } catch {
        return !0;
      }
    }
    function bt(z) {
      return "" + z;
    }
    function ne(z) {
      if (ut(z))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(z)), bt(z);
    }
    var Ke = _.ReactCurrentOwner, ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gt, Rt;
    function sn(z) {
      if (K.call(z, "ref")) {
        var J = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Me(z) {
      if (K.call(z, "key")) {
        var J = Object.getOwnPropertyDescriptor(z, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function at(z, J) {
      typeof z.ref == "string" && Ke.current;
    }
    function we(z, J) {
      {
        var ue = function() {
          Gt || (Gt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ue.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function ct(z, J) {
      {
        var ue = function() {
          Rt || (Rt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ue.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var vt = function(z, J, ue, Pe, R, et, Be) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: J,
        ref: ue,
        props: Be,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function Zt(z, J, ue, Pe, R) {
      {
        var et, Be = {}, ze = null, Et = null;
        ue !== void 0 && (ne(ue), ze = "" + ue), Me(J) && (ne(J.key), ze = "" + J.key), sn(J) && (Et = J.ref, at(J, R));
        for (et in J)
          K.call(J, et) && !ge.hasOwnProperty(et) && (Be[et] = J[et]);
        if (z && z.defaultProps) {
          var dt = z.defaultProps;
          for (et in dt)
            Be[et] === void 0 && (Be[et] = dt[et]);
        }
        if (ze || Et) {
          var gt = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          ze && we(Be, gt), Et && ct(Be, gt);
        }
        return vt(z, ze, Et, R, Pe, Ke.current, Be);
      }
    }
    var An = _.ReactCurrentOwner, Ct = _.ReactDebugCurrentFrame;
    function ht(z) {
      if (z) {
        var J = z._owner, ue = Ze(z.type, z._source, J ? J.type : null);
        Ct.setExtraStackFrame(ue);
      } else
        Ct.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Tt(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function yt() {
      {
        if (An.current) {
          var z = B(An.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function uo(z) {
      return "";
    }
    var kn = {};
    function Ut(z) {
      {
        var J = yt();
        if (!J) {
          var ue = typeof z == "string" ? z : z.displayName || z.name;
          ue && (J = `

Check the top-level render call using <` + ue + ">.");
        }
        return J;
      }
    }
    function hr(z, J) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var ue = Ut(J);
        if (kn[ue])
          return;
        kn[ue] = !0;
        var Pe = "";
        z && z._owner && z._owner !== An.current && (Pe = " It was passed a child from " + B(z._owner.type) + "."), ht(z), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, Pe), ht(null);
      }
    }
    function mr(z, J) {
      {
        if (typeof z != "object")
          return;
        if (De(z))
          for (var ue = 0; ue < z.length; ue++) {
            var Pe = z[ue];
            Tt(Pe) && hr(Pe, J);
          }
        else if (Tt(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var R = $(z);
          if (typeof R == "function" && R !== z.entries)
            for (var et = R.call(z), Be; !(Be = et.next()).done; )
              Tt(Be.value) && hr(Be.value, J);
        }
      }
    }
    function zr(z) {
      {
        var J = z.type;
        if (J == null || typeof J == "string")
          return;
        var ue;
        if (typeof J == "function")
          ue = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === d))
          ue = J.propTypes;
        else
          return;
        if (ue) {
          var Pe = B(J);
          Ae(ue, z.props, "prop", Pe, z);
        } else if (J.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var R = B(J);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ha(z) {
      {
        for (var J = Object.keys(z.props), ue = 0; ue < J.length; ue++) {
          var Pe = J[ue];
          if (Pe !== "children" && Pe !== "key") {
            ht(z), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), ht(null);
            break;
          }
        }
        z.ref !== null && (ht(z), h("Invalid attribute `ref` supplied to `React.Fragment`."), ht(null));
      }
    }
    var Jo = {};
    function Qo(z, J, ue, Pe, R, et) {
      {
        var Be = D(z);
        if (!Be) {
          var ze = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = uo();
          Et ? ze += Et : ze += yt();
          var dt;
          z === null ? dt = "null" : De(z) ? dt = "array" : z !== void 0 && z.$$typeof === t ? (dt = "<" + (B(z.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof z, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, ze);
        }
        var gt = Zt(z, J, ue, R, et);
        if (gt == null)
          return gt;
        if (Be) {
          var Yt = J.children;
          if (Yt !== void 0)
            if (Pe)
              if (De(Yt)) {
                for (var Qn = 0; Qn < Yt.length; Qn++)
                  mr(Yt[Qn], z);
                Object.freeze && Object.freeze(Yt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mr(Yt, z);
        }
        if (K.call(J, "key")) {
          var er = B(z), kt = Object.keys(J).filter(function(ti) {
            return ti !== "key";
          }), Vr = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Jo[er + Vr]) {
            var ei = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vr, er, ei, er), Jo[er + Vr] = !0;
          }
        }
        return z === r ? ha(gt) : zr(gt), gt;
      }
    }
    function ma(z, J, ue) {
      return Qo(z, J, ue, !0);
    }
    function ya(z, J, ue) {
      return Qo(z, J, ue, !1);
    }
    var wa = ya, ba = ma;
    fo.Fragment = r, fo.jsx = wa, fo.jsxs = ba;
  }()), fo;
}
var Ys;
function ff() {
  return Ys || (Ys = 1, process.env.NODE_ENV === "production" ? ni.exports = cf() : ni.exports = df()), ni.exports;
}
var vf = ff(), gf = Object.defineProperty, Ql = (e) => {
  throw TypeError(e);
}, pf = (e, t, n) => t in e ? gf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xt = (e, t, n) => pf(e, typeof t != "symbol" ? t + "" : t, n), ts = (e, t, n) => t.has(e) || Ql("Cannot " + n), mt = (e, t, n) => (ts(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ar = (e, t, n) => t.has(e) ? Ql("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), yi = (e, t, n, r) => (ts(e, t, "write to private field"), t.set(e, n), n), hf = (e, t, n) => (ts(e, t, "access private method"), n);
const mf = "5";
var Ws;
typeof window < "u" && ((Ws = window.__svelte ?? (window.__svelte = {})).v ?? (Ws.v = /* @__PURE__ */ new Set())).add(mf);
let ro = !1, yf = !1;
function wf() {
  ro = !0;
}
wf();
const ns = 1, rs = 2, eu = 4, bf = 8, xf = 16, $f = 1, kf = 2, tu = 4, _f = 8, Cf = 16, nu = 1, Ef = 2, os = "[", is = "[!", as = "]", Ir = {}, Wt = Symbol(), ru = "http://www.w3.org/2000/svg", Pf = !1, mn = 2, ou = 4, Ki = 8, ss = 16, qn = 32, oo = 64, wi = 128, dn = 256, bi = 512, Mt = 1024, Gn = 2048, Mr = 4096, Bn = 8192, Xi = 16384, Sf = 32768, io = 65536, Mf = 1 << 17, Of = 1 << 19, iu = 1 << 20, ar = Symbol("$state"), ls = Symbol("legacy props"), Tf = Symbol("");
var Lo = Array.isArray, Nf = Array.prototype.indexOf, us = Array.from, xi = Object.keys, ko = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, au = Object.getOwnPropertyDescriptors, zf = Object.prototype, Vf = Array.prototype, cs = Object.getPrototypeOf;
function vo(e) {
  return typeof e == "function";
}
const $t = () => {
};
function Hf(e) {
  return e();
}
function _o(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Df = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Co = [], Eo = [];
function su() {
  var e = Co;
  Co = [], _o(e);
}
function lu() {
  var e = Eo;
  Eo = [], _o(e);
}
function Io(e) {
  Co.length === 0 && queueMicrotask(su), Co.push(e);
}
function Af(e) {
  Eo.length === 0 && Df(lu), Eo.push(e);
}
function Ks() {
  Co.length > 0 && su(), Eo.length > 0 && lu();
}
function uu(e) {
  return e === this.v;
}
function ds(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function fs(e) {
  return !ds(e, this.v);
}
function Lf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function If() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Yf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Kf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function jf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: uu,
    rv: 0,
    wv: 0
  };
  return n;
}
function $r(e) {
  return /* @__PURE__ */ cu(jt(e));
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t = !1) {
  var n;
  const r = jt(e);
  return t || (r.equals = fs), ro && Ge !== null && Ge.l !== null && ((n = Ge.l).s ?? (n.s = [])).push(r), r;
}
function re(e, t = !1) {
  return /* @__PURE__ */ cu(/* @__PURE__ */ Ro(e, t));
}
// @__NO_SIDE_EFFECTS__
function cu(e) {
  return nt !== null && !pn && nt.f & mn && (_n === null ? Gf([e]) : _n.push(e)), e;
}
function U(e, t) {
  return nt !== null && !pn && Ji() && nt.f & (mn | ss) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (_n === null || !_n.includes(e)) && jf(), Ta(e, t);
}
function Ta(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = yu(), du(e, Gn), Ji() && Je !== null && Je.f & Mt && !(Je.f & (qn | oo)) && (In === null ? Uf([e]) : In.push(e))), t;
}
function Xs(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return U(e, n), r;
}
function du(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ji(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & Gn || !r && i === Je || (yn(i, t), s & (Mt | dn) && (s & mn ? du(
        /** @type {Derived} */
        i,
        Mr
      ) : Gi(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = mn | Gn, n = nt !== null && nt.f & mn ? (
    /** @type {Derived} */
    nt
  ) : null;
  return Je === null || n !== null && n.f & dn ? t |= dn : Je.f |= iu, {
    ctx: Ge,
    deps: null,
    effects: null,
    equals: uu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Je
  };
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = fs, t;
}
function fu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      fn(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ff(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & mn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function qf(e) {
  var t, n = Je;
  dr(Ff(e));
  try {
    fu(e), t = bu(e);
  } finally {
    dr(n);
  }
  return t;
}
function vu(e) {
  var t = qf(e), n = (or || e.f & dn) && e.deps !== null ? Mr : Mt;
  yn(e, n), e.equals(t) || (e.v = t, e.wv = yu());
}
function ji(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let Te = !1;
function tn(e) {
  Te = e;
}
let Re;
function Ht(e) {
  if (e === null)
    throw ji(), Ir;
  return Re = e;
}
function Pn() {
  return Ht(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Tn(Re)
  );
}
function X(e) {
  if (Te) {
    if (/* @__PURE__ */ Tn(Re) !== null)
      throw ji(), Ir;
    Re = e;
  }
}
function Ve(e = 1) {
  if (Te) {
    for (var t = e, n = Re; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Tn(n);
    Re = n;
  }
}
function Na() {
  for (var e = 0, t = Re; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === as) {
        if (e === 0) return t;
        e -= 1;
      } else (n === os || n === is) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Tn(t)
    );
    t.remove(), t = r;
  }
}
function Qt(e, t = null, n) {
  if (typeof e != "object" || e === null || ar in e)
    return e;
  const r = cs(e);
  if (r !== zf && r !== Vf)
    return e;
  var o = /* @__PURE__ */ new Map(), a = Lo(e), i = jt(0);
  a && o.set("length", jt(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Wf();
        var d = o.get(u);
        return d === void 0 ? (d = jt(c.value), o.set(u, d)) : U(d, Qt(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, jt(Wt));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && U(d, f);
          }
          U(c, Wt), js(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === ar)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = Yn(l, u)) != null && d.writable) && (f = jt(Qt(v ? l[u] : Wt, s)), o.set(u, f)), f !== void 0) {
          var m = g(f);
          return m === Wt ? void 0 : m;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var d = o.get(u);
          d && (c.value = g(d));
        } else if (c === void 0) {
          var f = o.get(u), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== Wt)
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
        if (u === ar)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== Wt || Reflect.has(l, u);
        if (d !== void 0 || Je !== null && (!f || (c = Yn(l, u)) != null && c.writable)) {
          d === void 0 && (d = jt(f ? Qt(l[u], s) : Wt), o.set(u, d));
          var v = g(d);
          if (v === Wt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), m = u in l;
        if (a && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var $ = o.get(b + "");
            $ !== void 0 ? U($, Wt) : b in l && ($ = jt(Wt), o.set(b + "", $));
          }
        v === void 0 ? (!m || (f = Yn(l, u)) != null && f.writable) && (v = jt(void 0), U(v, Qt(c, s)), o.set(u, v)) : (m = v.v !== Wt, U(v, Qt(c, s)));
        var _ = Reflect.getOwnPropertyDescriptor(l, u);
        if (_ != null && _.set && _.set.call(d, c), !m) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), x = Number(u);
            Number.isInteger(x) && x >= h.v && U(h, x + 1);
          }
          js(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== Wt;
        });
        for (var [c, d] of o)
          d.v !== Wt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Kf();
      }
    }
  );
}
function js(e, t = 1) {
  U(e, e.v + t);
}
var Kt, gu, pu, hu;
function za() {
  if (Kt === void 0) {
    Kt = window, gu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    pu = Yn(t, "firstChild").get, hu = Yn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return pu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return hu.call(e);
}
function j(e, t) {
  if (!Te)
    return /* @__PURE__ */ Vt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Vt(Re)
  );
  if (n === null)
    n = Re.appendChild(Kn());
  else if (t && n.nodeType !== 3) {
    var r = Kn();
    return n == null || n.before(r), Ht(r), r;
  }
  return Ht(n), n;
}
function _e(e, t) {
  if (!Te) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Vt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Tn(n) : n;
  }
  return Re;
}
function Z(e, t = 1, n = !1) {
  let r = Te ? Re : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Tn(r);
  if (!Te)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = Kn();
    return r === null ? o == null || o.after(i) : r.before(i), Ht(i), i;
  }
  return Ht(r), /** @type {TemplateNode} */
  r;
}
function vs(e) {
  e.textContent = "";
}
let ci = !1, $i = !1, ki = null, br = !1, gs = !1;
function Fs(e) {
  gs = e;
}
let xo = [], nt = null, pn = !1;
function cr(e) {
  nt = e;
}
let Je = null;
function dr(e) {
  Je = e;
}
let _n = null;
function Gf(e) {
  _n = e;
}
let Nt = null, Jt = 0, In = null;
function Uf(e) {
  In = e;
}
let mu = 1, _i = 0, or = !1;
function yu() {
  return ++mu;
}
function ao(e) {
  var t, n = e.f;
  if (n & Gn)
    return !0;
  if (n & Mr) {
    var r = e.deps, o = (n & dn) !== 0;
    if (r !== null) {
      var a, i, s = (n & bi) !== 0, l = o && Je !== null && !or, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= bi), l && d !== null && !(d.f & dn) && (c.f ^= dn);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], ao(
          /** @type {Derived} */
          i
        ) && vu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || Je !== null && !or) && yn(e, Mt);
  }
  return !1;
}
function Jf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & wi)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= wi;
      }
    n = n.parent;
  }
  throw ci = !1, e;
}
function Qf(e) {
  return (e.f & Xi) === 0 && (e.parent === null || (e.parent.f & wi) === 0);
}
function Fi(e, t, n, r) {
  if (ci) {
    if (n === null && (ci = !1), Qf(t))
      throw e;
    return;
  }
  n !== null && (ci = !0);
  {
    Jf(e, t);
    return;
  }
}
function wu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & mn ? wu(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? yn(a, Gn) : a.f & Mt && yn(a, Mr), Gi(
        /** @type {Effect} */
        a
      ));
    }
}
function bu(e) {
  var t, n = Nt, r = Jt, o = In, a = nt, i = or, s = _n, l = Ge, u = pn, c = e.f;
  Nt = /** @type {null | Value[]} */
  null, Jt = 0, In = null, or = (c & dn) !== 0 && (pn || !br || nt === null), nt = c & (qn | oo) ? null : e, _n = null, qs(e.ctx), pn = !1, _i++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Nt !== null) {
      var v;
      if (Ci(e, Jt), f !== null && Jt > 0)
        for (f.length = Jt + Nt.length, v = 0; v < Nt.length; v++)
          f[Jt + v] = Nt[v];
      else
        e.deps = f = Nt;
      if (!or)
        for (v = Jt; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && Jt < f.length && (Ci(e, Jt), f.length = Jt);
    if (Ji() && In !== null && !pn && f !== null && !(e.f & (mn | Mr | Gn)))
      for (v = 0; v < /** @type {Source[]} */
      In.length; v++)
        wu(
          In[v],
          /** @type {Effect} */
          e
        );
    return a !== null && _i++, d;
  } finally {
    Nt = n, Jt = r, In = o, nt = a, or = i, _n = s, qs(l), pn = u;
  }
}
function ev(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & mn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Nt === null || !Nt.includes(t)) && (yn(t, Mr), t.f & (dn | bi) || (t.f ^= bi), fu(
    /** @type {Derived} **/
    t
  ), Ci(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ci(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ev(e, n[r]);
}
function qi(e) {
  var t = e.f;
  if (!(t & Xi)) {
    yn(e, Mt);
    var n = Je, r = Ge, o = br;
    Je = e, br = !0;
    try {
      t & ss ? uv(e) : Cu(e), _u(e);
      var a = bu(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = mu;
      var i = e.deps, s;
      Pf && yf && e.f & Gn;
    } catch (l) {
      Fi(l, e, n, r || e.ctx);
    } finally {
      br = o, Je = n;
    }
  }
}
function tv() {
  try {
    Zf();
  } catch (e) {
    if (ki !== null)
      Fi(e, ki, null);
    else
      throw e;
  }
}
function xu() {
  var e = br;
  try {
    var t = 0;
    for (br = !0; xo.length > 0; ) {
      t++ > 1e3 && tv();
      var n = xo, r = n.length;
      xo = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & Mt || (a.f ^= Mt);
        var i = rv(a);
        nv(i);
      }
    }
  } finally {
    $i = !1, br = e, ki = null;
  }
}
function nv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Xi | Bn)))
        try {
          ao(r) && (qi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Eu(r) : r.fn = null));
        } catch (o) {
          Fi(o, r, null, r.ctx);
        }
    }
}
function Gi(e) {
  $i || ($i = !0, queueMicrotask(xu));
  for (var t = ki = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (oo | qn)) {
      if (!(n & Mt)) return;
      t.f ^= Mt;
    }
  }
  xo.push(t);
}
function rv(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & qn) !== 0, a = o && (r & Mt) !== 0;
    if (!a && !(r & Bn)) {
      if (r & ou)
        t.push(n);
      else if (o)
        n.f ^= Mt;
      else {
        var i = nt;
        try {
          nt = n, ao(n) && qi(n);
        } catch (u) {
          Fi(u, n, null, n.ctx);
        } finally {
          nt = i;
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
function y(e) {
  var t;
  for (Ks(); xo.length > 0; )
    $i = !0, xu(), Ks();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & mn) !== 0;
  if (nt !== null && !pn) {
    _n !== null && _n.includes(e) && Xf();
    var r = nt.deps;
    e.rv < _i && (e.rv = _i, Nt === null && r !== null && r[Jt] === e ? Jt++ : Nt === null ? Nt = [e] : (!or || !Nt.includes(e)) && Nt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & dn) && (o.f ^= dn);
  }
  return n && (o = /** @type {Derived} */
  e, ao(o) && vu(o)), e.v;
}
function Sn(e) {
  var t = pn;
  try {
    return pn = !0, e();
  } finally {
    pn = t;
  }
}
const ov = -7169;
function yn(e, t) {
  e.f = e.f & ov | t;
}
function Q(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ar in e)
      Va(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ar in n && Va(n);
      }
  }
}
function Va(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Va(e[r], t);
      } catch {
      }
    const n = cs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = au(n);
      for (let o in r) {
        const a = r[o].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
function $u(e) {
  Je === null && nt === null && Rf(), nt !== null && nt.f & dn && Je === null && If(), gs && Lf();
}
function iv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Or(e, t, n, r = !0) {
  var o = (e & oo) !== 0, a = Je, i = {
    ctx: Ge,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Gn,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      qi(i), i.f |= Sf;
    } catch (u) {
      throw fn(i), u;
    }
  else t !== null && Gi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (iu | wi)) === 0;
  if (!s && !o && r && (a !== null && iv(i, a), nt !== null && nt.f & mn)) {
    var l = (
      /** @type {Derived} */
      nt
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function ku(e) {
  const t = Or(Ki, null, !1);
  return yn(t, Mt), t.teardown = e, t;
}
function Kr(e) {
  $u();
  var t = Je !== null && (Je.f & qn) !== 0 && Ge !== null && !Ge.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Ge
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Je,
      reaction: nt
    });
  } else {
    var r = en(e);
    return r;
  }
}
function av(e) {
  return $u(), so(e);
}
function sv(e) {
  const t = Or(oo, e, !0);
  return () => {
    fn(t);
  };
}
function lv(e) {
  const t = Or(oo, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Xr(t, () => {
      fn(t), r(void 0);
    }) : (fn(t), r(void 0));
  });
}
function en(e) {
  return Or(ou, e, !1);
}
function de(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Ge
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = so(() => {
    e(), !r.ran && (r.ran = !0, U(n.l.r2, !0), Sn(t));
  });
}
function _t() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Ge
  );
  so(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Mt && yn(n, Mr), ao(n) && qi(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function so(e) {
  return Or(Ki, e, !0);
}
function Oe(e, t = [], n = He) {
  const r = t.map(n);
  return Tr(() => e(...r.map(g)));
}
function Tr(e, t = 0) {
  return Or(Ki | ss | t, e, !0);
}
function Xn(e, t = !0) {
  return Or(Ki | qn, e, !0, t);
}
function _u(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = gs, r = nt;
    Fs(!0), cr(null);
    try {
      t.call(null);
    } finally {
      Fs(n), cr(r);
    }
  }
}
function Cu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    fn(n, t), n = r;
  }
}
function uv(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & qn || fn(t), t = n;
  }
}
function fn(e, t = !0) {
  var n = !1;
  if ((t || e.f & Of) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Cu(e, t && !n), Ci(e, 0), yn(e, Xi);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  _u(e);
  var s = e.parent;
  s !== null && s.first !== null && Eu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Eu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Xr(e, t) {
  var n = [];
  ps(e, n, !0), Pu(n, () => {
    fn(e), t && t();
  });
}
function Pu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ps(e, t, n) {
  if (!(e.f & Bn)) {
    if (e.f ^= Bn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & io) !== 0 || (r.f & qn) !== 0;
      ps(r, t, a ? n : !1), r = o;
    }
  }
}
function Po(e) {
  Su(e, !0);
}
function Su(e, t) {
  if (e.f & Bn) {
    e.f ^= Bn, e.f & Mt || (e.f ^= Mt), ao(e) && (yn(e, Gn), Gi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & io) !== 0 || (n.f & qn) !== 0;
      Su(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Ge = null;
function qs(e) {
  Ge = e;
}
function kr(e) {
  return (
    /** @type {T} */
    hs().get(e)
  );
}
function jr(e, t) {
  return hs().set(e, t), t;
}
function cv(e) {
  return hs().has(e);
}
function fe(e, t = !1, n) {
  Ge = {
    p: Ge,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, ro && !t && (Ge.l = {
    s: null,
    u: null,
    r1: [],
    r2: jt(!1)
  });
}
function ve(e) {
  const t = Ge;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = Je, r = nt;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          dr(a.effect), cr(a.reaction), en(a.fn);
        }
      } finally {
        dr(n), cr(r);
      }
    }
    Ge = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ji() {
  return !ro || Ge !== null && Ge.l === null;
}
function hs(e) {
  return Ge === null && Ui(), Ge.c ?? (Ge.c = new Map(dv(Ge) || void 0));
}
function dv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function fv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const vv = [
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
function gv(e) {
  return vv.includes(e);
}
const pv = {
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
function hv(e) {
  return e = e.toLowerCase(), pv[e] ?? e;
}
const mv = ["touchstart", "touchmove"];
function yv(e) {
  return mv.includes(e);
}
const wv = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function bv(e) {
  return wv.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function xv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Io(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function $v(e) {
  Te && /* @__PURE__ */ Vt(e) !== null && vs(e);
}
let Gs = !1;
function kv() {
  Gs || (Gs = !0, document.addEventListener(
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
function _v(e) {
  var t = nt, n = Je;
  cr(null), dr(null);
  try {
    return e();
  } finally {
    cr(t), dr(n);
  }
}
const Mu = /* @__PURE__ */ new Set(), Ha = /* @__PURE__ */ new Set();
function Ou(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || mo.call(t, a), !a.cancelBubble)
      return _v(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Io(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function it(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = Ou(e, t, n, a);
  (t === document.body || t === window || t === document) && ku(() => {
    t.removeEventListener(e, i, a);
  });
}
function Qi(e) {
  for (var t = 0; t < e.length; t++)
    Mu.add(e[t]);
  for (var n of Ha)
    n(e);
}
function mo(e) {
  var t, n = this, r = (
    /** @type {Node} */
    n.ownerDocument
  ), o = e.type, a = ((t = e.composedPath) == null ? void 0 : t.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, l = e.__root;
  if (l) {
    var u = a.indexOf(l);
    if (u !== -1 && (n === document || n === /** @type {any} */
    window)) {
      e.__root = n;
      return;
    }
    var c = a.indexOf(n);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== n) {
    ko(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var d = nt, f = Je;
    cr(null), dr(null);
    try {
      for (var v, m = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = i["__" + o];
          if ($ !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Lo($)) {
              var [_, ...h] = $;
              _.apply(i, [e, ...h]);
            } else
              $.call(i, e);
        } catch (x) {
          v ? m.push(x) : v = x;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        i = b;
      }
      if (v) {
        for (let x of m)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, cr(d), dr(f);
    }
  }
}
function ms(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function qt(e, t) {
  var n = (
    /** @type {Effect} */
    Je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & nu) !== 0, r = (t & Ef) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (Te)
      return qt(Re, null), Re;
    o === void 0 && (o = ms(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Vt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || gu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vt(i)
      ), l = (
        /** @type {TemplateNode} */
        i.lastChild
      );
      qt(s, l);
    } else
      qt(i, i);
    return i;
  };
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & nu) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (Te)
      return qt(Re, null), Re;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        ms(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Vt(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ Vt(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Vt(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ Vt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vt(u)
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
function je(e = "") {
  if (!Te) {
    var t = Kn(e + "");
    return qt(t, t), t;
  }
  var n = Re;
  return n.nodeType !== 3 && (n.before(n = Kn()), Ht(n)), qt(n, n), n;
}
function st() {
  if (Te)
    return qt(Re, null), Re;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), qt(t, n), e;
}
function A(e, t) {
  if (Te) {
    Je.nodes_end = Re, Pn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Nn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Tu(e, t) {
  return Nu(e, t);
}
function Cv(e, t) {
  za(), t.intro = t.intro ?? !1;
  const n = t.target, r = Te, o = Re;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Vt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== os); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Tn(a);
    if (!a)
      throw Ir;
    tn(!0), Ht(
      /** @type {Comment} */
      a
    ), Pn();
    const i = Nu(e, { ...t, anchor: a });
    if (Re === null || Re.nodeType !== 8 || /** @type {Comment} */
    Re.data !== as)
      throw ji(), Ir;
    return tn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === Ir)
      return t.recover === !1 && Bf(), za(), vs(n), tn(!1), Tu(e, t);
    throw i;
  } finally {
    tn(r), Ht(o);
  }
}
const Hr = /* @__PURE__ */ new Map();
function Nu(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  za();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var m = yv(v);
        t.addEventListener(v, mo, { passive: m });
        var b = Hr.get(v);
        b === void 0 ? (document.addEventListener(v, mo, { passive: m }), Hr.set(v, 1)) : Hr.set(v, b + 1);
      }
    }
  };
  l(us(Mu)), Ha.add(l);
  var u = void 0, c = lv(() => {
    var d = n ?? t.appendChild(Kn());
    return Xn(() => {
      if (a) {
        fe({});
        var f = (
          /** @type {ComponentContext} */
          Ge
        );
        f.c = a;
      }
      o && (r.$$events = o), Te && qt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, Te && (Je.nodes_end = Re), a && ve();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, mo);
        var m = (
          /** @type {number} */
          Hr.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, mo), Hr.delete(v)) : Hr.set(v, m);
      }
      Ha.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Da.set(u, c), u;
}
let Da = /* @__PURE__ */ new WeakMap();
function Ev(e, t) {
  const n = Da.get(e);
  return n ? (Da.delete(e), n(t)) : Promise.resolve();
}
function Ee(e, t, [n, r] = [0, 0]) {
  Te && n === 0 && Pn();
  var o = e, a = null, i = null, s = Wt, l = n > 0 ? io : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let m = !1;
    if (Te && r !== -1) {
      if (n === 0) {
        const $ = (
          /** @type {Comment} */
          o.data
        );
        $ === os ? r = 0 : $ === is ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Na(), Ht(o), tn(!1), m = !0, r = -1);
    }
    s ? (a ? Po(a) : v && (a = Xn(() => v(o))), i && Xr(i, () => {
      i = null;
    })) : (i ? Po(i) : v && (i = Xn(() => v(o, [n + 1, r]))), a && Xr(a, () => {
      a = null;
    })), m && tn(!0);
  };
  Tr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), Te && (o = Re);
}
function ea(e, t) {
  return t;
}
function Pv(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    ps(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    vs(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), nr(e, t[0].prev, t[a - 1].next);
  }
  Pu(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), nr(e, c.prev, c.next)), fn(c.e, !s);
    }
  });
}
function rn(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & eu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = Te ? Ht(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Vt(u)
    ) : u.appendChild(Kn());
  }
  Te && Pn();
  var c = null, d = !1, f = /* @__PURE__ */ ye(() => {
    var v = n();
    return Lo(v) ? v : v == null ? [] : us(v);
  });
  Tr(() => {
    var v = g(f), m = v.length;
    if (d && m === 0)
      return;
    d = m === 0;
    let b = !1;
    if (Te) {
      var $ = (
        /** @type {Comment} */
        i.data === is
      );
      $ !== (m === 0) && (i = Na(), Ht(i), tn(!1), b = !0);
    }
    if (Te) {
      for (var _ = null, h, x = 0; x < m; x++) {
        if (Re.nodeType === 8 && /** @type {Comment} */
        Re.data === as) {
          i = /** @type {Comment} */
          Re, b = !0, tn(!1);
          break;
        }
        var p = v[x], k = r(p, x);
        h = zu(
          Re,
          s,
          _,
          null,
          p,
          k,
          x,
          o,
          t,
          n
        ), s.items.set(k, h), _ = h;
      }
      m > 0 && Ht(Na());
    }
    Te || Sv(v, s, i, o, t, r, n), a !== null && (m === 0 ? c ? Po(c) : c = Xn(() => a(i)) : c !== null && Xr(c, () => {
      c = null;
    })), b && tn(!0), g(f);
  }), Te && (i = Re);
}
function Sv(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & bf) !== 0, f = (o & (ns | rs)) !== 0, v = e.length, m = t.items, b = t.first, $ = b, _, h = null, x, p = [], k = [], O, S, T, N;
  if (d)
    for (N = 0; N < v; N += 1)
      O = e[N], S = a(O, N), T = m.get(S), T !== void 0 && ((s = T.a) == null || s.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(T));
  for (N = 0; N < v; N += 1) {
    if (O = e[N], S = a(O, N), T = m.get(S), T === void 0) {
      var D = $ ? (
        /** @type {TemplateNode} */
        $.e.nodes_start
      ) : n;
      h = zu(
        D,
        t,
        h,
        h === null ? t.first : h.next,
        O,
        S,
        N,
        r,
        o,
        i
      ), m.set(S, h), p = [], k = [], $ = h.next;
      continue;
    }
    if (f && Mv(T, O, N, o), T.e.f & Bn && (Po(T.e), d && ((l = T.a) == null || l.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(T))), T !== $) {
      if (_ !== void 0 && _.has(T)) {
        if (p.length < k.length) {
          var L = k[0], H;
          h = L.prev;
          var B = p[0], P = p[p.length - 1];
          for (H = 0; H < p.length; H += 1)
            Us(p[H], L, n);
          for (H = 0; H < k.length; H += 1)
            _.delete(k[H]);
          nr(t, B.prev, P.next), nr(t, h, B), nr(t, P, L), $ = L, h = P, N -= 1, p = [], k = [];
        } else
          _.delete(T), Us(T, $, n), nr(t, T.prev, T.next), nr(t, T, h === null ? t.first : h.next), nr(t, h, T), h = T;
        continue;
      }
      for (p = [], k = []; $ !== null && $.k !== S; )
        $.e.f & Bn || (_ ?? (_ = /* @__PURE__ */ new Set())).add($), k.push($), $ = $.next;
      if ($ === null)
        continue;
      T = $;
    }
    p.push(T), h = T, $ = T.next;
  }
  if ($ !== null || _ !== void 0) {
    for (var M = _ === void 0 ? [] : us(_); $ !== null; )
      $.e.f & Bn || M.push($), $ = $.next;
    var C = M.length;
    if (C > 0) {
      var E = o & eu && v === 0 ? n : null;
      if (d) {
        for (N = 0; N < C; N += 1)
          (u = M[N].a) == null || u.measure();
        for (N = 0; N < C; N += 1)
          (c = M[N].a) == null || c.fix();
      }
      Pv(t, M, E, m);
    }
  }
  d && Io(() => {
    var V;
    if (x !== void 0)
      for (T of x)
        (V = T.a) == null || V.apply();
  }), Je.first = t.first && t.first.e, Je.last = h && h.e;
}
function Mv(e, t, n, r) {
  r & ns && Ta(e.v, t), r & rs ? Ta(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function zu(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & ns) !== 0, d = (l & xf) === 0, f = c ? d ? /* @__PURE__ */ Ro(o) : jt(o) : o, v = l & rs ? jt(i) : i, m = {
    i: v,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return m.e = Xn(() => s(e, f, v, u), Te), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? t.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function Us(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== r; ) {
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Tn(a)
    );
    o.before(a), a = i;
  }
}
function nr(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Vu(e, t, n, r, o) {
  var a = e, i = "", s;
  Tr(() => {
    if (i === (i = t() ?? "")) {
      Te && Pn();
      return;
    }
    s !== void 0 && (fn(s), s = void 0), i !== "" && (s = Xn(() => {
      if (Te) {
        Re.data;
        for (var l = Pn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Tn(l);
        if (l === null)
          throw ji(), Ir;
        qt(Re, u), a = Ht(l);
        return;
      }
      var c = i + "", d = ms(c);
      qt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function St(e, t, n, r, o) {
  var a;
  Te && Pn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function Ov(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function _r(e, t, ...n) {
  var r = e, o = $t, a;
  Tr(() => {
    o !== (o = t()) && (a && (fn(a), a = null), a = Xn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, io), Te && (r = Re);
}
function Hu(e, t, n) {
  Te && Pn();
  var r = e, o, a;
  Tr(() => {
    o !== (o = t()) && (a && (Xr(a), a = null), o && (a = Xn(() => n(r, o))));
  }, io), Te && (r = Re);
}
function Tv(e, t, n, r, o, a) {
  let i = Te;
  Te && Pn();
  var s, l, u = null;
  Te && Re.nodeType === 1 && (u = /** @type {Element} */
  Re, Pn());
  var c = (
    /** @type {TemplateNode} */
    Te ? Re : e
  ), d;
  Tr(() => {
    const f = t() || null;
    var v = f === "svg" ? ru : null;
    f !== s && (d && (f === null ? Xr(d, () => {
      d = null, l = null;
    }) : f === l ? Po(d) : fn(d)), f && f !== l && (d = Xn(() => {
      if (u = Te ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), qt(u, u), r) {
        Te && bv(f) && u.append(document.createComment(""));
        var m = (
          /** @type {TemplateNode} */
          Te ? /* @__PURE__ */ Vt(u) : u.appendChild(Kn())
        );
        Te && (m === null ? tn(!1) : Ht(m)), r(u, m);
      }
      Je.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, io), i && (tn(!0), Ht(c));
}
function rt(e, t) {
  Io(() => {
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
    var r = Sn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      so(() => {
        var i = n();
        Q(i), o && ds(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Du(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Du(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Nv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Du(e)) && (r && (r += " "), r += t);
  return r;
}
function zn(e) {
  return typeof e == "object" ? Nv(e) : e ?? "";
}
const Js = [...` 	
\r\f \v\uFEFF`];
function zv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || Js.includes(r[i - 1])) && (s === r.length || Js.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function Dt(e, t, n, r, o, a) {
  var i = e.__className;
  if (Te || i !== n) {
    var s = zv(n, r, a);
    (!Te || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const go = Symbol("class");
function Au(e) {
  if (Te) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ce(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Af(n), kv();
  }
}
function Vv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ce(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  Te && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Tf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Lu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function wn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = Te && a;
  s && tn(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = zn(n.class) : (r || n[go]) && (n.class = null);
  var d = Lu(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const x in n) {
    let p = n[x];
    if (u && x === "value" && p == null) {
      e.value = e.__value = "", l[x] = p;
      continue;
    }
    if (x === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Dt(e, v, p, r, t == null ? void 0 : t[go], n[go]), l[x] = p, l[go] = n[go];
      continue;
    }
    var m = l[x];
    if (p !== m) {
      l[x] = p;
      var b = x[0] + x[1];
      if (b !== "$$") {
        if (b === "on") {
          const k = {}, O = "$$" + x;
          let S = x.slice(2);
          var $ = gv(S);
          if (fv(S) && (S = S.slice(0, -7), k.capture = !0), !$ && m) {
            if (p != null) continue;
            e.removeEventListener(S, l[O], k), l[O] = null;
          }
          if (p != null)
            if ($)
              e[`__${S}`] = p, Qi([S]);
            else {
              let T = function(N) {
                l[x].call(this, N);
              };
              l[O] = Ou(S, e, T, k);
            }
          else $ && (e[`__${S}`] = void 0);
        } else if (x === "style" && p != null)
          e.style.cssText = p + "";
        else if (x === "autofocus")
          xv(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!a && (x === "__value" || x === "value" && p != null))
          e.value = e.__value = p;
        else if (x === "selected" && u)
          Vv(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var _ = x;
          o || (_ = hv(_));
          var h = _ === "defaultValue" || _ === "defaultChecked";
          if (p == null && !a && !h)
            if (f[x] = null, _ === "value" || _ === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const O = t === void 0;
              if (_ === "value") {
                let S = k.defaultValue;
                k.removeAttribute(_), k.defaultValue = S, k.value = k.__value = O ? S : null;
              } else {
                let S = k.defaultChecked;
                k.removeAttribute(_), k.defaultChecked = S, k.checked = O ? S : !1;
              }
            } else
              e.removeAttribute(x);
          else h || d.includes(_) && (a || typeof p != "string") ? e[_] = p : typeof p != "function" && ce(e, _, p);
        }
        x === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && tn(!0), l;
}
var Qs = /* @__PURE__ */ new Map();
function Lu(e) {
  var t = Qs.get(e.nodeName);
  if (t) return t;
  Qs.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = au(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = cs(r);
  }
  return t;
}
function pt(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var yr, $o, di, Aa, Iu;
const La = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Ar(this, Aa), Ar(this, yr, /* @__PURE__ */ new WeakMap()), Ar(this, $o), Ar(this, di), yi(this, di, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = mt(this, yr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), mt(this, yr).set(t, r), hf(this, Aa, Iu).call(this).observe(t, mt(this, di)), () => {
      var o = mt(this, yr).get(t);
      o.delete(n), o.size === 0 && (mt(this, yr).delete(t), mt(this, $o).unobserve(t));
    };
  }
};
yr = /* @__PURE__ */ new WeakMap(), $o = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakSet(), Iu = function() {
  return mt(this, $o) ?? yi(this, $o, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        La.entries.set(t.target, t);
        for (var n of mt(this, yr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Xt(La, "entries", /* @__PURE__ */ new WeakMap());
let Hv = La;
var Dv = /* @__PURE__ */ new Hv({
  box: "border-box"
});
function el(e, t, n) {
  var r = Dv.observe(e, () => n(e[t]));
  en(() => (Sn(() => n(e[t])), r));
}
function tl(e, t) {
  return e === t || (e == null ? void 0 : e[ar]) === t;
}
function jn(e = {}, t, n, r) {
  return en(() => {
    var o, a;
    return so(() => {
      o = a, a = [], Sn(() => {
        e !== n(...a) && (t(e, ...a), o && tl(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Io(() => {
        a && tl(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Ie(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Ge
  ), n = t.l.u;
  if (!n) return;
  let r = () => Q(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ He(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(i);
  }
  n.b.length && av(() => {
    nl(t, r), _o(n.b);
  }), Kr(() => {
    const o = Sn(() => n.m.map(Hf));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && Kr(() => {
    nl(t, r), _o(n.a);
  });
}
function nl(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Xe(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Lo(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function Vn(e) {
  Ge === null && Ui(), ro && Ge.l !== null ? Lv(Ge).m.push(e) : Kr(() => {
    const t = Sn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ys(e) {
  Ge === null && Ui(), Vn(() => () => Sn(e));
}
function Av(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function ta() {
  const e = Ge;
  return e === null && Ui(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = Lo(a) ? a.slice() : [a], s = Av(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of i)
        l.call(e.x, s);
      return !s.defaultPrevented;
    }
    return !0;
  };
}
function Lv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ws(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), $t;
  const r = Sn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Dr = [];
function ln(e, t) {
  return {
    subscribe: xe(e, t).subscribe
  };
}
function xe(e, t = $t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (ds(e, s) && (e = s, n)) {
      const l = !Dr.length;
      for (const u of r)
        u[1](), Dr.push(u, e);
      if (l) {
        for (let u = 0; u < Dr.length; u += 2)
          Dr[u][0](Dr[u + 1]);
        Dr.length = 0;
      }
    }
  }
  function a(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function i(s, l = $t) {
    const u = [s, l];
    return r.add(u), r.size === 1 && (n = t(o, a) || $t), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: a, subscribe: i };
}
function sr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return ln(n, (i, s) => {
    let l = !1;
    const u = [];
    let c = 0, d = $t;
    const f = () => {
      if (c)
        return;
      d();
      const m = t(r ? u[0] : u, i, s);
      a ? i(m) : d = typeof m == "function" ? m : $t;
    }, v = o.map(
      (m, b) => ws(
        m,
        ($) => {
          u[b] = $, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      _o(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return ws(e, (n) => t = n)(), t;
}
let ri = !1, Ia = Symbol();
function te(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Ro(void 0),
    unsubscribe: $t
  });
  if (r.store !== e && !(Ia in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = $t;
    else {
      var o = !0;
      r.unsubscribe = ws(e, (a) => {
        o ? r.source.v = a : U(r.source, a);
      }), o = !1;
    }
  return e && Ia in n ? q(e) : g(r.source);
}
function Iv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = $t), e;
}
function Ei(e, t) {
  return e.set(t), t;
}
function lt() {
  const e = {};
  function t() {
    ku(() => {
      for (var n in e)
        e[n].unsubscribe();
      ko(e, Ia, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Rv(e) {
  var t = ri;
  try {
    return ri = !1, [e(), ri];
  } finally {
    ri = t;
  }
}
const Zv = {
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
function Lt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Zv
  );
}
const Bv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = w(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      tu
    )), e.special[t](n), Xs(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Xs(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ft(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: jt(0) }, Bv);
}
const Yv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (vo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      vo(o) && (o = o());
      const a = Yn(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (vo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Yn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === ar || t === ls) return !1;
    for (let n of e.props)
      if (vo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      vo(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function xt(...e) {
  return new Proxy({ props: e }, Yv);
}
function w(e, t, n, r) {
  var o, a = (n & $f) !== 0, i = !ro || (n & kf) !== 0, s = (n & _f) !== 0, l = (n & Cf) !== 0, u = !1, c;
  s ? [c, u] = Rv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = ar in e || ls in e, f = s && (((o = Yn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((S) => e[t] = S))) || void 0, v = (
    /** @type {V} */
    r
  ), m = !0, b = !1, $ = () => (b = !0, m && (m = !1, l ? v = Sn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && Yf(), c = $(), f && f(c));
  var _;
  if (i)
    _ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? $() : (m = !0, b = !1, S);
    };
  else {
    var h = (a ? He : ye)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Mf, _ = () => {
      var S = g(h);
      return S !== void 0 && (v = /** @type {V} */
      void 0), S === void 0 ? v : S;
    };
  }
  if (!(n & tu))
    return _;
  if (f) {
    var x = e.$$legacy;
    return function(S, T) {
      return arguments.length > 0 ? ((!i || !T || x || u) && f(T ? _() : S), S) : _();
    };
  }
  var p = !1, k = /* @__PURE__ */ Ro(c), O = /* @__PURE__ */ He(() => {
    var S = _(), T = g(k);
    return p ? (p = !1, T) : k.v = S;
  });
  return a || (O.equals = fs), function(S, T) {
    if (arguments.length > 0) {
      const N = T ? g(O) : i && s ? Qt(S) : S;
      return O.equals(N) || (p = !0, U(k, N), b && v !== void 0 && (v = N), Sn(() => g(O))), S;
    }
    return g(O);
  };
}
function Wv(e) {
  return new Kv(e);
}
var tr, vn;
class Kv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Ar(this, tr), Ar(this, vn);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ Ro(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return g(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === ls ? !0 : (g(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return U(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    yi(this, vn, (t.hydrate ? Cv : Tu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && y(), yi(this, tr, a.$$events);
    for (const i of Object.keys(mt(this, vn)))
      i === "$set" || i === "$destroy" || i === "$on" || ko(this, i, {
        get() {
          return mt(this, vn)[i];
        },
        /** @param {any} value */
        set(s) {
          mt(this, vn)[i] = s;
        },
        enumerable: !0
      });
    mt(this, vn).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, mt(this, vn).$destroy = () => {
      Ev(mt(this, vn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    mt(this, vn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    mt(this, tr)[t] = mt(this, tr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return mt(this, tr)[t].push(r), () => {
      mt(this, tr)[t] = mt(this, tr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    mt(this, vn).$destroy();
  }
}
tr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap();
let Ru;
typeof HTMLElement == "function" && (Ru = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), Xt(this, "$$ctor"), Xt(this, "$$s"), Xt(this, "$$c"), Xt(this, "$$cn", !1), Xt(this, "$$d", {}), Xt(this, "$$r", !1), Xt(this, "$$p_d", {}), Xt(this, "$$l", {}), Xt(this, "$$l_u", /* @__PURE__ */ new Map()), Xt(this, "$$me"), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), A(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Xv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = fi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Wv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = sv(() => {
        so(() => {
          var r;
          this.$$r = !0;
          for (const o of xi(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = fi(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const a = this.$$c.$on(r, o);
          this.$$l_u.set(o, a);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = fi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return xi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function fi(e, t, n, r) {
  var o;
  const a = (o = n[e]) == null ? void 0 : o.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function Xv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, a) {
  let i = class extends Ru {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return xi(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return xi(t).forEach((s) => {
    ko(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = fi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Yn(c, s)) == null ? void 0 : u.get;
          d ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), r.forEach((s) => {
    ko(i.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
function It(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = It(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var jv = { value: () => {
} };
function na() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new vi(n);
}
function vi(e) {
  this._ = e;
}
function Fv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
vi.prototype = na.prototype = {
  constructor: vi,
  on: function(e, t) {
    var n = this._, r = Fv(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = qv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = rl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = rl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new vi(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, a; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], r = 0, o = a.length; r < o; ++r) a[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, a = r.length; o < a; ++o) r[o].value.apply(t, n);
  }
};
function qv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function rl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = jv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ra = "http://www.w3.org/1999/xhtml";
const ol = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ra,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ra(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ol.hasOwnProperty(t) ? { space: ol[t], local: e } : e;
}
function Gv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ra && t.documentElement.namespaceURI === Ra ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Uv(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Zu(e) {
  var t = ra(e);
  return (t.local ? Uv : Gv)(t);
}
function Jv() {
}
function bs(e) {
  return e == null ? Jv : function() {
    return this.querySelector(e);
  };
}
function Qv(e) {
  typeof e != "function" && (e = bs(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new on(r, this._parents);
}
function e1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function t1() {
  return [];
}
function Bu(e) {
  return e == null ? t1 : function() {
    return this.querySelectorAll(e);
  };
}
function n1(e) {
  return function() {
    return e1(e.apply(this, arguments));
  };
}
function r1(e) {
  typeof e == "function" ? e = n1(e) : e = Bu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new on(r, o);
}
function Yu(e) {
  return function() {
    return this.matches(e);
  };
}
function Wu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var o1 = Array.prototype.find;
function i1(e) {
  return function() {
    return o1.call(this.children, e);
  };
}
function a1() {
  return this.firstElementChild;
}
function s1(e) {
  return this.select(e == null ? a1 : i1(typeof e == "function" ? e : Wu(e)));
}
var l1 = Array.prototype.filter;
function u1() {
  return Array.from(this.children);
}
function c1(e) {
  return function() {
    return l1.call(this.children, e);
  };
}
function d1(e) {
  return this.selectAll(e == null ? u1 : c1(typeof e == "function" ? e : Wu(e)));
}
function f1(e) {
  typeof e != "function" && (e = Yu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new on(r, this._parents);
}
function Ku(e) {
  return new Array(e.length);
}
function v1() {
  return new on(this._enter || this._groups.map(Ku), this._parents);
}
function Pi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Pi.prototype = {
  constructor: Pi,
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
function g1(e) {
  return function() {
    return e;
  };
}
function p1(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new Pi(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function h1(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new Pi(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function m1(e) {
  return e.__data__;
}
function y1(e, t) {
  if (!arguments.length) return Array.from(this, m1);
  var n = t ? h1 : p1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = g1(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = w1(e.call(c, c && c.__data__, u, r)), m = v.length, b = s[u] = new Array(m), $ = i[u] = new Array(m), _ = l[u] = new Array(f);
    n(c, d, b, $, _, v, t);
    for (var h = 0, x = 0, p, k; h < m; ++h)
      if (p = b[h]) {
        for (h >= x && (x = h + 1); !(k = $[x]) && ++x < m; ) ;
        p._next = k || null;
      }
  }
  return i = new on(i, r), i._enter = s, i._exit = l, i;
}
function w1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function b1() {
  return new on(this._exit || this._groups.map(Ku), this._parents);
}
function x1(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function $1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, m = 0; m < d; ++m)
      (v = u[m] || c[m]) && (f[m] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new on(s, this._parents);
}
function k1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function _1(e) {
  e || (e = C1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new on(o, this._parents).order();
}
function C1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function E1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function P1() {
  return Array.from(this);
}
function S1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function M1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function O1() {
  return !this.node();
}
function T1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function N1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function z1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function V1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function H1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function D1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function A1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function L1(e, t) {
  var n = ra(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? z1 : N1 : typeof t == "function" ? n.local ? A1 : D1 : n.local ? H1 : V1)(n, t));
}
function Xu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function I1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function R1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Z1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function B1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? I1 : typeof t == "function" ? Z1 : R1)(e, t, n ?? "")) : Fr(this.node(), e);
}
function Fr(e, t) {
  return e.style.getPropertyValue(t) || Xu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Y1(e) {
  return function() {
    delete this[e];
  };
}
function W1(e, t) {
  return function() {
    this[e] = t;
  };
}
function K1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function X1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Y1 : typeof t == "function" ? K1 : W1)(e, t)) : this.node()[e];
}
function ju(e) {
  return e.trim().split(/^|\s+/);
}
function xs(e) {
  return e.classList || new Fu(e);
}
function Fu(e) {
  this._node = e, this._names = ju(e.getAttribute("class") || "");
}
Fu.prototype = {
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
function qu(e, t) {
  for (var n = xs(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Gu(e, t) {
  for (var n = xs(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function j1(e) {
  return function() {
    qu(this, e);
  };
}
function F1(e) {
  return function() {
    Gu(this, e);
  };
}
function q1(e, t) {
  return function() {
    (t.apply(this, arguments) ? qu : Gu)(this, e);
  };
}
function G1(e, t) {
  var n = ju(e + "");
  if (arguments.length < 2) {
    for (var r = xs(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? q1 : t ? j1 : F1)(n, t));
}
function U1() {
  this.textContent = "";
}
function J1(e) {
  return function() {
    this.textContent = e;
  };
}
function Q1(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function eg(e) {
  return arguments.length ? this.each(e == null ? U1 : (typeof e == "function" ? Q1 : J1)(e)) : this.node().textContent;
}
function tg() {
  this.innerHTML = "";
}
function ng(e) {
  return function() {
    this.innerHTML = e;
  };
}
function rg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function og(e) {
  return arguments.length ? this.each(e == null ? tg : (typeof e == "function" ? rg : ng)(e)) : this.node().innerHTML;
}
function ig() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ag() {
  return this.each(ig);
}
function sg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lg() {
  return this.each(sg);
}
function ug(e) {
  var t = typeof e == "function" ? e : Zu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function cg() {
  return null;
}
function dg(e, t) {
  var n = typeof e == "function" ? e : Zu(e), r = t == null ? cg : typeof t == "function" ? t : bs(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function fg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function vg() {
  return this.each(fg);
}
function gg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function pg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hg(e) {
  return this.select(e ? pg : gg);
}
function mg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function yg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function wg(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function bg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function xg(e, t, n) {
  return function() {
    var r = this.__on, o, a = yg(t);
    if (r) {
      for (var i = 0, s = r.length; i < s; ++i)
        if ((o = r[i]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = a, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, n), o = { type: e.type, name: e.name, value: t, listener: a, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function $g(e, t, n) {
  var r = wg(e + ""), o, a = r.length, i;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (o = 0, c = s[l]; o < a; ++o)
          if ((i = r[o]).type === c.type && i.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = t ? xg : bg, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function Uu(e, t, n) {
  var r = Xu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function kg(e, t) {
  return function() {
    return Uu(this, e, t);
  };
}
function _g(e, t) {
  return function() {
    return Uu(this, e, t.apply(this, arguments));
  };
}
function Cg(e, t) {
  return this.each((typeof t == "function" ? _g : kg)(e, t));
}
function* Eg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var Ju = [null];
function on(e, t) {
  this._groups = e, this._parents = t;
}
function Zo() {
  return new on([[document.documentElement]], Ju);
}
function Pg() {
  return this;
}
on.prototype = Zo.prototype = {
  constructor: on,
  select: Qv,
  selectAll: r1,
  selectChild: s1,
  selectChildren: d1,
  filter: f1,
  data: y1,
  enter: v1,
  exit: b1,
  join: x1,
  merge: $1,
  selection: Pg,
  order: k1,
  sort: _1,
  call: E1,
  nodes: P1,
  node: S1,
  size: M1,
  empty: O1,
  each: T1,
  attr: L1,
  style: B1,
  property: X1,
  classed: G1,
  text: eg,
  html: og,
  raise: ag,
  lower: lg,
  append: ug,
  insert: dg,
  remove: vg,
  clone: hg,
  datum: mg,
  on: $g,
  dispatch: Cg,
  [Symbol.iterator]: Eg
};
function un(e) {
  return typeof e == "string" ? new on([[document.querySelector(e)]], [document.documentElement]) : new on([[e]], Ju);
}
function Sg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function gn(e, t) {
  if (e = Sg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Mg = { passive: !1 }, So = { capture: !0, passive: !1 };
function xa(e) {
  e.stopImmediatePropagation();
}
function Rr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Qu(e) {
  var t = e.document.documentElement, n = un(e).on("dragstart.drag", Rr, So);
  "onselectstart" in t ? n.on("selectstart.drag", Rr, So) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ec(e, t) {
  var n = e.document.documentElement, r = un(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Rr, So), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const oi = (e) => () => e;
function Za(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: a,
  x: i,
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
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: i, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Za.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Og(e) {
  return !e.ctrlKey && !e.button;
}
function Tg() {
  return this.parentNode;
}
function Ng(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function zg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vg() {
  var e = Og, t = Tg, n = Ng, r = zg, o = {}, a = na("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(p) {
    p.on("mousedown.drag", v).filter(r).on("touchstart.drag", $).on("touchmove.drag", _, Mg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(p, k) {
    if (!(c || !e.call(this, p, k))) {
      var O = x(this, t.call(this, p, k), p, k, "mouse");
      O && (un(p.view).on("mousemove.drag", m, So).on("mouseup.drag", b, So), Qu(p.view), xa(p), u = !1, s = p.clientX, l = p.clientY, O("start", p));
    }
  }
  function m(p) {
    if (Rr(p), !u) {
      var k = p.clientX - s, O = p.clientY - l;
      u = k * k + O * O > d;
    }
    o.mouse("drag", p);
  }
  function b(p) {
    un(p.view).on("mousemove.drag mouseup.drag", null), ec(p.view, u), Rr(p), o.mouse("end", p);
  }
  function $(p, k) {
    if (e.call(this, p, k)) {
      var O = p.changedTouches, S = t.call(this, p, k), T = O.length, N, D;
      for (N = 0; N < T; ++N)
        (D = x(this, S, p, k, O[N].identifier, O[N])) && (xa(p), D("start", p, O[N]));
    }
  }
  function _(p) {
    var k = p.changedTouches, O = k.length, S, T;
    for (S = 0; S < O; ++S)
      (T = o[k[S].identifier]) && (Rr(p), T("drag", p, k[S]));
  }
  function h(p) {
    var k = p.changedTouches, O = k.length, S, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < O; ++S)
      (T = o[k[S].identifier]) && (xa(p), T("end", p, k[S]));
  }
  function x(p, k, O, S, T, N) {
    var D = a.copy(), L = gn(N || O, k), H, B, P;
    if ((P = n.call(p, new Za("beforestart", {
      sourceEvent: O,
      target: f,
      identifier: T,
      active: i,
      x: L[0],
      y: L[1],
      dx: 0,
      dy: 0,
      dispatch: D
    }), S)) != null)
      return H = P.x - L[0] || 0, B = P.y - L[1] || 0, function M(C, E, V) {
        var I = L, Y;
        switch (C) {
          case "start":
            o[T] = M, Y = i++;
            break;
          case "end":
            delete o[T], --i;
          // falls through
          case "drag":
            L = gn(V || E, k), Y = i;
            break;
        }
        D.call(
          C,
          p,
          new Za(C, {
            sourceEvent: E,
            subject: P,
            target: f,
            identifier: T,
            active: Y,
            x: L[0] + H,
            y: L[1] + B,
            dx: L[0] - I[0],
            dy: L[1] - I[1],
            dispatch: D
          }),
          S
        );
      };
  }
  return f.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : oi(!!p), f) : e;
  }, f.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : oi(p), f) : t;
  }, f.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : oi(p), f) : n;
  }, f.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : oi(!!p), f) : r;
  }, f.on = function() {
    var p = a.on.apply(a, arguments);
    return p === a ? f : p;
  }, f.clickDistance = function(p) {
    return arguments.length ? (d = (p = +p) * p, f) : Math.sqrt(d);
  }, f;
}
function $s(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function tc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Bo() {
}
var Mo = 0.7, Si = 1 / Mo, Zr = "\\s*([+-]?\\d+)\\s*", Oo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hg = /^#([0-9a-f]{3,8})$/, Dg = new RegExp(`^rgb\\(${Zr},${Zr},${Zr}\\)$`), Ag = new RegExp(`^rgb\\(${Cn},${Cn},${Cn}\\)$`), Lg = new RegExp(`^rgba\\(${Zr},${Zr},${Zr},${Oo}\\)$`), Ig = new RegExp(`^rgba\\(${Cn},${Cn},${Cn},${Oo}\\)$`), Rg = new RegExp(`^hsl\\(${Oo},${Cn},${Cn}\\)$`), Zg = new RegExp(`^hsla\\(${Oo},${Cn},${Cn},${Oo}\\)$`), il = {
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
$s(Bo, To, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: al,
  // Deprecated! Use color.formatHex.
  formatHex: al,
  formatHex8: Bg,
  formatHsl: Yg,
  formatRgb: sl,
  toString: sl
});
function al() {
  return this.rgb().formatHex();
}
function Bg() {
  return this.rgb().formatHex8();
}
function Yg() {
  return nc(this).formatHsl();
}
function sl() {
  return this.rgb().formatRgb();
}
function To(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hg.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ll(t) : n === 3 ? new Ft(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ii(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ii(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Dg.exec(e)) ? new Ft(t[1], t[2], t[3], 1) : (t = Ag.exec(e)) ? new Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lg.exec(e)) ? ii(t[1], t[2], t[3], t[4]) : (t = Ig.exec(e)) ? ii(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Rg.exec(e)) ? dl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Zg.exec(e)) ? dl(t[1], t[2] / 100, t[3] / 100, t[4]) : il.hasOwnProperty(e) ? ll(il[e]) : e === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function ll(e) {
  return new Ft(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ii(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ft(e, t, n, r);
}
function Wg(e) {
  return e instanceof Bo || (e = To(e)), e ? (e = e.rgb(), new Ft(e.r, e.g, e.b, e.opacity)) : new Ft();
}
function Ba(e, t, n, r) {
  return arguments.length === 1 ? Wg(e) : new Ft(e, t, n, r ?? 1);
}
function Ft(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
$s(Ft, Ba, tc(Bo, {
  brighter(e) {
    return e = e == null ? Si : Math.pow(Si, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Mo : Math.pow(Mo, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft(xr(this.r), xr(this.g), xr(this.b), Mi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ul,
  // Deprecated! Use color.formatHex.
  formatHex: ul,
  formatHex8: Kg,
  formatRgb: cl,
  toString: cl
}));
function ul() {
  return `#${wr(this.r)}${wr(this.g)}${wr(this.b)}`;
}
function Kg() {
  return `#${wr(this.r)}${wr(this.g)}${wr(this.b)}${wr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cl() {
  const e = Mi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${xr(this.r)}, ${xr(this.g)}, ${xr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Mi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function xr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function wr(e) {
  return e = xr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function dl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new hn(e, t, n, r);
}
function nc(e) {
  if (e instanceof hn) return new hn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Bo || (e = To(e)), !e) return new hn();
  if (e instanceof hn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new hn(i, s, l, e.opacity);
}
function Xg(e, t, n, r) {
  return arguments.length === 1 ? nc(e) : new hn(e, t, n, r ?? 1);
}
function hn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
$s(hn, Xg, tc(Bo, {
  brighter(e) {
    return e = e == null ? Si : Math.pow(Si, e), new hn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Mo : Math.pow(Mo, e), new hn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ft(
      $a(e >= 240 ? e - 240 : e + 120, o, r),
      $a(e, o, r),
      $a(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new hn(fl(this.h), ai(this.s), ai(this.l), Mi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Mi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${fl(this.h)}, ${ai(this.s) * 100}%, ${ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function fl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $a(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const rc = (e) => () => e;
function jg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Fg(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function qg(e) {
  return (e = +e) == 1 ? oc : function(t, n) {
    return n - t ? Fg(t, n, e) : rc(isNaN(t) ? n : t);
  };
}
function oc(e, t) {
  var n = t - e;
  return n ? jg(e, n) : rc(isNaN(e) ? t : e);
}
const vl = function e(t) {
  var n = qg(t);
  function r(o, a) {
    var i = n((o = Ba(o)).r, (a = Ba(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = oc(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function rr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Ya = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ka = new RegExp(Ya.source, "g");
function Gg(e) {
  return function() {
    return e;
  };
}
function Ug(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Jg(e, t) {
  var n = Ya.lastIndex = ka.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Ya.exec(e)) && (o = ka.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: rr(r, o) })), n = ka.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? Ug(l[0].x) : Gg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var gl = 180 / Math.PI, ic = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ac(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * gl,
    skewX: Math.atan(l) * gl,
    scaleX: i,
    scaleY: s
  };
}
var si;
function Qg(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ic : ac(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ep(e) {
  return e == null || (si || (si = document.createElementNS("http://www.w3.org/2000/svg", "g")), si.setAttribute("transform", e), !(e = si.transform.baseVal.consolidate())) ? ic : (e = e.matrix, ac(e.a, e.b, e.c, e.d, e.e, e.f));
}
function sc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      m.push({ i: b - 4, x: rr(u, d) }, { i: b - 2, x: rr(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: rr(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: rr(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: b - 4, x: rr(u, d) }, { i: b - 2, x: rr(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var m = -1, b = f.length, $; ++m < b; ) d[($ = f[m]).i] = $.x(v);
      return d.join("");
    };
  };
}
var tp = sc(Qg, "px, ", "px)", "deg)"), np = sc(ep, ", ", ")", ")"), rp = 1e-12;
function pl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function op(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ip(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const ap = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, m = d - l, b = v * v + m * m, $, _;
    if (b < rp)
      _ = Math.log(f / u) / t, $ = function(S) {
        return [
          s + S * v,
          l + S * m,
          u * Math.exp(t * S * _)
        ];
      };
    else {
      var h = Math.sqrt(b), x = (f * f - u * u + r * b) / (2 * u * n * h), p = (f * f - u * u - r * b) / (2 * f * n * h), k = Math.log(Math.sqrt(x * x + 1) - x), O = Math.log(Math.sqrt(p * p + 1) - p);
      _ = (O - k) / t, $ = function(S) {
        var T = S * _, N = pl(k), D = u / (n * h) * (N * ip(t * T + k) - op(k));
        return [
          s + D * v,
          l + D * m,
          u * N / pl(t * T + k)
        ];
      };
    }
    return $.duration = _ * 1e3 * t / Math.SQRT2, $;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var qr = 0, yo = 0, po = 0, lc = 1e3, Oi, wo, Ti = 0, Cr = 0, oa = 0, No = typeof performance == "object" && performance.now ? performance : Date, uc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ks() {
  return Cr || (uc(sp), Cr = No.now() + oa);
}
function sp() {
  Cr = 0;
}
function Ni() {
  this._call = this._time = this._next = null;
}
Ni.prototype = cc.prototype = {
  constructor: Ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ks() : +n) + (t == null ? 0 : +t), !this._next && wo !== this && (wo ? wo._next = this : Oi = this, wo = this), this._call = e, this._time = n, Wa();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Wa());
  }
};
function cc(e, t, n) {
  var r = new Ni();
  return r.restart(e, t, n), r;
}
function lp() {
  ks(), ++qr;
  for (var e = Oi, t; e; )
    (t = Cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --qr;
}
function hl() {
  Cr = (Ti = No.now()) + oa, qr = yo = 0;
  try {
    lp();
  } finally {
    qr = 0, cp(), Cr = 0;
  }
}
function up() {
  var e = No.now(), t = e - Ti;
  t > lc && (oa -= t, Ti = e);
}
function cp() {
  for (var e, t = Oi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Oi = n);
  wo = e, Wa(r);
}
function Wa(e) {
  if (!qr) {
    yo && (yo = clearTimeout(yo));
    var t = e - Cr;
    t > 24 ? (e < 1 / 0 && (yo = setTimeout(hl, e - No.now() - oa)), po && (po = clearInterval(po))) : (po || (Ti = No.now(), po = setInterval(up, lc)), qr = 1, uc(hl));
  }
}
function ml(e, t, n) {
  var r = new Ni();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var dp = na("start", "end", "cancel", "interrupt"), fp = [], dc = 0, yl = 1, Ka = 2, gi = 3, wl = 4, Xa = 5, pi = 6;
function ia(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  vp(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: dp,
    tween: fp,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: dc
  });
}
function _s(e, t) {
  var n = $n(e, t);
  if (n.state > dc) throw new Error("too late; already scheduled");
  return n;
}
function Hn(e, t) {
  var n = $n(e, t);
  if (n.state > gi) throw new Error("too late; already running");
  return n;
}
function $n(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function vp(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = cc(a, 0, n.time);
  function a(u) {
    n.state = yl, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== yl) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === gi) return ml(i);
        v.state === wl ? (v.state = pi, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = pi, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (ml(function() {
      n.state === gi && (n.state = wl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Ka, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Ka) {
      for (n.state = gi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Xa, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Xa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = pi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function hi(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Ka && r.state < Xa, r.state = pi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function gp(e) {
  return this.each(function() {
    hi(this, e);
  });
}
function pp(e, t) {
  var n, r;
  return function() {
    var o = Hn(this, e), a = o.tween;
    if (a !== n) {
      r = n = a;
      for (var i = 0, s = r.length; i < s; ++i)
        if (r[i].name === t) {
          r = r.slice(), r.splice(i, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function hp(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = Hn(this, e), i = a.tween;
    if (i !== r) {
      o = (r = i).slice();
      for (var s = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = s;
          break;
        }
      l === u && o.push(s);
    }
    a.tween = o;
  };
}
function mp(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = $n(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? pp : hp)(n, e, t));
}
function Cs(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Hn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return $n(o, r).value[t];
  };
}
function fc(e, t) {
  var n;
  return (typeof t == "number" ? rr : t instanceof To ? vl : (n = To(t)) ? (t = n, vl) : Jg)(e, t);
}
function yp(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function wp(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function bp(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function xp(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function $p(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function kp(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function _p(e, t) {
  var n = ra(e), r = n === "transform" ? np : fc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? kp : $p)(n, r, Cs(this, "attr." + e, t)) : t == null ? (n.local ? wp : yp)(n) : (n.local ? xp : bp)(n, r, t));
}
function Cp(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Ep(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Pp(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Ep(e, a)), n;
  }
  return o._value = t, o;
}
function Sp(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Cp(e, a)), n;
  }
  return o._value = t, o;
}
function Mp(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ra(e);
  return this.tween(n, (r.local ? Pp : Sp)(r, t));
}
function Op(e, t) {
  return function() {
    _s(this, e).delay = +t.apply(this, arguments);
  };
}
function Tp(e, t) {
  return t = +t, function() {
    _s(this, e).delay = t;
  };
}
function Np(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Op : Tp)(t, e)) : $n(this.node(), t).delay;
}
function zp(e, t) {
  return function() {
    Hn(this, e).duration = +t.apply(this, arguments);
  };
}
function Vp(e, t) {
  return t = +t, function() {
    Hn(this, e).duration = t;
  };
}
function Hp(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zp : Vp)(t, e)) : $n(this.node(), t).duration;
}
function Dp(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Hn(this, e).ease = t;
  };
}
function Ap(e) {
  var t = this._id;
  return arguments.length ? this.each(Dp(t, e)) : $n(this.node(), t).ease;
}
function Lp(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Hn(this, e).ease = n;
  };
}
function Ip(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Lp(this._id, e));
}
function Rp(e) {
  typeof e != "function" && (e = Yu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new Fn(r, this._parents, this._name, this._id);
}
function Zp(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new Fn(i, this._parents, this._name, this._id);
}
function Bp(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Yp(e, t, n) {
  var r, o, a = Bp(t) ? _s : Hn;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function Wp(e, t) {
  var n = this._id;
  return arguments.length < 2 ? $n(this.node(), n).on.on(e) : this.each(Yp(n, e, t));
}
function Kp(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Xp() {
  return this.on("end.remove", Kp(this._id));
}
function jp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = bs(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, ia(u[f], t, n, f, u, $n(c, n)));
  return new Fn(a, this._parents, t, n);
}
function Fp(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Bu(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, m = $n(c, n), b = 0, $ = f.length; b < $; ++b)
          (v = f[b]) && ia(v, t, n, b, f, m);
        a.push(f), i.push(c);
      }
  return new Fn(a, i, t, n);
}
var qp = Zo.prototype.constructor;
function Gp() {
  return new qp(this._groups, this._parents);
}
function Up(e, t) {
  var n, r, o;
  return function() {
    var a = Fr(this, e), i = (this.style.removeProperty(e), Fr(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function vc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Jp(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = Fr(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Qp(e, t, n) {
  var r, o, a;
  return function() {
    var i = Fr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), Fr(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function eh(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = Hn(this, e), u = l.on, c = l.value[a] == null ? s || (s = vc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function th(e, t, n) {
  var r = (e += "") == "transform" ? tp : fc;
  return t == null ? this.styleTween(e, Up(e, r)).on("end.style." + e, vc(e)) : typeof t == "function" ? this.styleTween(e, Qp(e, r, Cs(this, "style." + e, t))).each(eh(this._id, e)) : this.styleTween(e, Jp(e, r, t), n).on("end.style." + e, null);
}
function nh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function rh(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && nh(e, i, n)), r;
  }
  return a._value = t, a;
}
function oh(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, rh(e, t, n ?? ""));
}
function ih(e) {
  return function() {
    this.textContent = e;
  };
}
function ah(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function sh(e) {
  return this.tween("text", typeof e == "function" ? ah(Cs(this, "text", e)) : ih(e == null ? "" : e + ""));
}
function lh(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function uh(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && lh(o)), t;
  }
  return r._value = e, r;
}
function ch(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, uh(e));
}
function dh() {
  for (var e = this._name, t = this._id, n = gc(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = $n(l, t);
        ia(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Fn(r, this._parents, e, n);
}
function fh() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = Hn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var vh = 0;
function Fn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function gc() {
  return ++vh;
}
var Ln = Zo.prototype;
Fn.prototype = {
  constructor: Fn,
  select: jp,
  selectAll: Fp,
  selectChild: Ln.selectChild,
  selectChildren: Ln.selectChildren,
  filter: Rp,
  merge: Zp,
  selection: Gp,
  transition: dh,
  call: Ln.call,
  nodes: Ln.nodes,
  node: Ln.node,
  size: Ln.size,
  empty: Ln.empty,
  each: Ln.each,
  on: Wp,
  attr: _p,
  attrTween: Mp,
  style: th,
  styleTween: oh,
  text: sh,
  textTween: ch,
  remove: Xp,
  tween: mp,
  delay: Np,
  duration: Hp,
  ease: Ap,
  easeVarying: Ip,
  end: fh,
  [Symbol.iterator]: Ln[Symbol.iterator]
};
function gh(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var ph = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: gh
};
function hh(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function mh(e) {
  var t, n;
  e instanceof Fn ? (t = e._id, e = e._name) : (t = gc(), (n = ph).time = ks(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && ia(l, e, t, u, i, n || hh(l, t));
  return new Fn(r, this._parents, e, t);
}
Zo.prototype.interrupt = gp;
Zo.prototype.transition = mh;
const li = (e) => () => e;
function yh(e, {
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
function Rn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Rn.prototype = {
  constructor: Rn,
  scale: function(e) {
    return e === 1 ? this : new Rn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Rn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var aa = new Rn(1, 0, 0);
pc.prototype = Rn.prototype;
function pc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return aa;
  return e.__zoom;
}
function _a(e) {
  e.stopImmediatePropagation();
}
function ho(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function wh(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function bh() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function bl() {
  return this.__zoom || aa;
}
function xh(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function $h() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function kh(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function hc() {
  var e = wh, t = bh, n = kh, r = xh, o = $h, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = ap, u = na("start", "zoom", "end"), c, d, f, v = 500, m = 150, b = 0, $ = 10;
  function _(P) {
    P.property("__zoom", bl).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", N).on("dblclick.zoom", D).filter(o).on("touchstart.zoom", L).on("touchmove.zoom", H).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(P, M, C, E) {
    var V = P.selection ? P.selection() : P;
    V.property("__zoom", bl), P !== V ? k(P, M, C, E) : V.interrupt().each(function() {
      O(this, arguments).event(E).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, _.scaleBy = function(P, M, C, E) {
    _.scaleTo(P, function() {
      var V = this.__zoom.k, I = typeof M == "function" ? M.apply(this, arguments) : M;
      return V * I;
    }, C, E);
  }, _.scaleTo = function(P, M, C, E) {
    _.transform(P, function() {
      var V = t.apply(this, arguments), I = this.__zoom, Y = C == null ? p(V) : typeof C == "function" ? C.apply(this, arguments) : C, F = I.invert(Y), G = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(x(h(I, G), Y, F), V, i);
    }, C, E);
  }, _.translateBy = function(P, M, C, E) {
    _.transform(P, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), i);
    }, null, E);
  }, _.translateTo = function(P, M, C, E, V) {
    _.transform(P, function() {
      var I = t.apply(this, arguments), Y = this.__zoom, F = E == null ? p(I) : typeof E == "function" ? E.apply(this, arguments) : E;
      return n(aa.translate(F[0], F[1]).scale(Y.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), I, i);
    }, E, V);
  };
  function h(P, M) {
    return M = Math.max(a[0], Math.min(a[1], M)), M === P.k ? P : new Rn(M, P.x, P.y);
  }
  function x(P, M, C) {
    var E = M[0] - C[0] * P.k, V = M[1] - C[1] * P.k;
    return E === P.x && V === P.y ? P : new Rn(P.k, E, V);
  }
  function p(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function k(P, M, C, E) {
    P.on("start.zoom", function() {
      O(this, arguments).event(E).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(E).end();
    }).tween("zoom", function() {
      var V = this, I = arguments, Y = O(V, I).event(E), F = t.apply(V, I), G = C == null ? p(F) : typeof C == "function" ? C.apply(V, I) : C, ae = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), ee = V.__zoom, W = typeof M == "function" ? M.apply(V, I) : M, le = l(ee.invert(G).concat(ae / ee.k), W.invert(G).concat(ae / W.k));
      return function(ke) {
        if (ke === 1) ke = W;
        else {
          var $e = le(ke), he = ae / $e[2];
          ke = new Rn(he, G[0] - $e[0] * he, G[1] - $e[1] * he);
        }
        Y.zoom(null, ke);
      };
    });
  }
  function O(P, M, C) {
    return !C && P.__zooming || new S(P, M);
  }
  function S(P, M) {
    this.that = P, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(P, M), this.taps = 0;
  }
  S.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, M) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var M = un(this.that).datum();
      u.call(
        P,
        this.that,
        new yh(P, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function T(P, ...M) {
    if (!e.apply(this, arguments)) return;
    var C = O(this, M).event(P), E = this.__zoom, V = Math.max(a[0], Math.min(a[1], E.k * Math.pow(2, r.apply(this, arguments)))), I = gn(P);
    if (C.wheel)
      (C.mouse[0][0] !== I[0] || C.mouse[0][1] !== I[1]) && (C.mouse[1] = E.invert(C.mouse[0] = I)), clearTimeout(C.wheel);
    else {
      if (E.k === V) return;
      C.mouse = [I, E.invert(I)], hi(this), C.start();
    }
    ho(P), C.wheel = setTimeout(Y, m), C.zoom("mouse", n(x(h(E, V), C.mouse[0], C.mouse[1]), C.extent, i));
    function Y() {
      C.wheel = null, C.end();
    }
  }
  function N(P, ...M) {
    if (f || !e.apply(this, arguments)) return;
    var C = P.currentTarget, E = O(this, M, !0).event(P), V = un(P.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", ae, !0), I = gn(P, C), Y = P.clientX, F = P.clientY;
    Qu(P.view), _a(P), E.mouse = [I, this.__zoom.invert(I)], hi(this), E.start();
    function G(ee) {
      if (ho(ee), !E.moved) {
        var W = ee.clientX - Y, le = ee.clientY - F;
        E.moved = W * W + le * le > b;
      }
      E.event(ee).zoom("mouse", n(x(E.that.__zoom, E.mouse[0] = gn(ee, C), E.mouse[1]), E.extent, i));
    }
    function ae(ee) {
      V.on("mousemove.zoom mouseup.zoom", null), ec(ee.view, E.moved), ho(ee), E.event(ee).end();
    }
  }
  function D(P, ...M) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, E = gn(P.changedTouches ? P.changedTouches[0] : P, this), V = C.invert(E), I = C.k * (P.shiftKey ? 0.5 : 2), Y = n(x(h(C, I), E, V), t.apply(this, M), i);
      ho(P), s > 0 ? un(this).transition().duration(s).call(k, Y, E, P) : un(this).call(_.transform, Y, E, P);
    }
  }
  function L(P, ...M) {
    if (e.apply(this, arguments)) {
      var C = P.touches, E = C.length, V = O(this, M, P.changedTouches.length === E).event(P), I, Y, F, G;
      for (_a(P), Y = 0; Y < E; ++Y)
        F = C[Y], G = gn(F, this), G = [G, this.__zoom.invert(G), F.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== G[2] && (V.touch1 = G, V.taps = 0) : (V.touch0 = G, I = !0, V.taps = 1 + !!c);
      c && (c = clearTimeout(c)), I && (V.taps < 2 && (d = G[0], c = setTimeout(function() {
        c = null;
      }, v)), hi(this), V.start());
    }
  }
  function H(P, ...M) {
    if (this.__zooming) {
      var C = O(this, M).event(P), E = P.changedTouches, V = E.length, I, Y, F, G;
      for (ho(P), I = 0; I < V; ++I)
        Y = E[I], F = gn(Y, this), C.touch0 && C.touch0[2] === Y.identifier ? C.touch0[0] = F : C.touch1 && C.touch1[2] === Y.identifier && (C.touch1[0] = F);
      if (Y = C.that.__zoom, C.touch1) {
        var ae = C.touch0[0], ee = C.touch0[1], W = C.touch1[0], le = C.touch1[1], ke = (ke = W[0] - ae[0]) * ke + (ke = W[1] - ae[1]) * ke, $e = ($e = le[0] - ee[0]) * $e + ($e = le[1] - ee[1]) * $e;
        Y = h(Y, Math.sqrt(ke / $e)), F = [(ae[0] + W[0]) / 2, (ae[1] + W[1]) / 2], G = [(ee[0] + le[0]) / 2, (ee[1] + le[1]) / 2];
      } else if (C.touch0) F = C.touch0[0], G = C.touch0[1];
      else return;
      C.zoom("touch", n(x(Y, F, G), C.extent, i));
    }
  }
  function B(P, ...M) {
    if (this.__zooming) {
      var C = O(this, M).event(P), E = P.changedTouches, V = E.length, I, Y;
      for (_a(P), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), I = 0; I < V; ++I)
        Y = E[I], C.touch0 && C.touch0[2] === Y.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === Y.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0) C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && (Y = gn(Y, this), Math.hypot(d[0] - Y[0], d[1] - Y[1]) < $)) {
        var F = un(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : li(+P), _) : r;
  }, _.filter = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : li(!!P), _) : e;
  }, _.touchable = function(P) {
    return arguments.length ? (o = typeof P == "function" ? P : li(!!P), _) : o;
  }, _.extent = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : li([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), _) : t;
  }, _.scaleExtent = function(P) {
    return arguments.length ? (a[0] = +P[0], a[1] = +P[1], _) : [a[0], a[1]];
  }, _.translateExtent = function(P) {
    return arguments.length ? (i[0][0] = +P[0][0], i[1][0] = +P[1][0], i[0][1] = +P[0][1], i[1][1] = +P[1][1], _) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
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
    return arguments.length ? ($ = +P, _) : $;
  }, _;
}
const Gr = {
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
}, zi = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Er;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Er || (Er = {}));
var lr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(lr || (lr = {}));
var Vi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Vi || (Vi = {}));
const ja = {
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
var Br;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Br || (Br = {}));
var zo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(zo || (zo = {}));
var Se;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Se || (Se = {}));
const xl = {
  [Se.Left]: Se.Right,
  [Se.Right]: Se.Left,
  [Se.Top]: Se.Bottom,
  [Se.Bottom]: Se.Top
};
function _h(e, t) {
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
function $l(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, a) => {
    t != null && t.has(a) || r.push(o);
  }), r.length && n(r);
}
function Ch(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Eh = (e) => "id" in e && "source" in e && "target" in e, Ph = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Es = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Yo = (e, t = [0, 0]) => {
  const { width: n, height: r } = gr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, Sh = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : Es(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? Hi(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return sa(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return la(n);
}, Wo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Hi(r);
      n = sa(n, o);
    }
  }), la(n);
}, mc = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ...Ko(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, m = c.height ?? u.height ?? u.initialHeight ?? null, b = Vo(s, Jr(u)), $ = (v ?? 0) * (m ?? 0), _ = a && b > 0;
    (!u.internals.handleBounds || _ || b >= $ || u.dragging) && l.push(u);
  }
  return l;
}, Fa = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function kl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function _l({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Wo(e), l = Ss(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function Mh({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", Gr.error005());
    else {
      const v = s.measured.width, m = s.measured.height;
      v && m && (d = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else s && Qr(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = Qr(d) ? Pr(t, d, i.measured) : t;
  return (i.measured.width === void 0 || i.measured.height === void 0) && (a == null || a("015", Gr.error015())), {
    position: {
      x: f.x - l + (i.measured.width ?? 0) * c[0],
      y: f.y - u + (i.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function yc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((m) => m.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Fa(i, l);
  for (const d of l)
    s.has(d.id) && !u.find((f) => f.id === d.id) && u.push(d);
  if (!o)
    return {
      edges: u,
      nodes: i
    };
  const c = await o({
    nodes: i,
    edges: u
  });
  return typeof c == "boolean" ? c ? { edges: u, nodes: i } : { edges: [], nodes: [] } : c;
}
const Ur = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Pr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ur(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Ur(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function wc(e, t, n) {
  const { width: r, height: o } = gr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return Pr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Cl = (e, t, n) => e < t ? Ur(Math.abs(e - t), 1, t) / t : e > n ? -Ur(Math.abs(e - n), 1, t) / t : 0, bc = (e, t, n = 15, r = 40) => {
  const o = Cl(e.x, r, t.width - r) * n, a = Cl(e.y, r, t.height - r) * n;
  return [o, a];
}, sa = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), qa = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), la = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Jr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = Es(e) ? e.internals.positionAbsolute : Yo(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Hi = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = Es(e) ? e.internals.positionAbsolute : Yo(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, xc = (e, t) => la(sa(qa(e), qa(t))), Vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, El = (e) => Zn(e.width) && Zn(e.height) && Zn(e.x) && Zn(e.y), Zn = (e) => !isNaN(e) && isFinite(e), Oh = (e, t) => {
}, Ps = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Ko = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? Ps(s, i) : s;
}, $c = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Ss = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = Ur(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, Di = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Qr(e) {
  return e !== void 0 && e !== "parent";
}
function gr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function kc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Th(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function Ca(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = Wn(e), s = Ko({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Ps(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const Ms = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Nh = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, zh = ["INPUT", "SELECT", "TEXTAREA"];
function Vh(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : zh.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const _c = (e) => "clientX" in e, Wn = (e, t) => {
  var n, r;
  const o = _c(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Pl = (e, t, n, r, o) => {
  const a = t.querySelectorAll(`.${e}`);
  return !a || !a.length ? null : Array.from(a).map((i) => {
    const s = i.getBoundingClientRect();
    return {
      id: i.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: i.getAttribute("data-handlepos"),
      x: (s.left - n.left) / r,
      y: (s.top - n.top) / r,
      ...Ms(i)
    };
  });
};
function Hh({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function ui(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Sl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Se.Left:
      return [t - ui(t - r, a), n];
    case Se.Right:
      return [t + ui(r - t, a), n];
    case Se.Top:
      return [t, n - ui(n - o, a)];
    case Se.Bottom:
      return [t, n + ui(o - n, a)];
  }
}
function Cc({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: r, targetY: o, targetPosition: a = Se.Top, curvature: i = 0.25 }) {
  const [s, l] = Sl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = Sl({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, m] = Hh({
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
    m
  ];
}
function Ec({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function Dh({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function Ah({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = sa(Hi(e), Hi(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Vo(i, la(a)) > 0;
}
const Lh = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Ih = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Rh = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Eh(e) ? n = { ...e } : n = {
    ...e,
    id: Lh(e)
  }, Ih(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ga({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Ec({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const Ml = {
  [Se.Left]: { x: -1, y: 0 },
  [Se.Right]: { x: 1, y: 0 },
  [Se.Top]: { x: 0, y: -1 },
  [Se.Bottom]: { x: 0, y: 1 }
}, Zh = ({ source: e, sourcePosition: t = Se.Bottom, target: n }) => t === Se.Left || t === Se.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ol = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Bh({ source: e, sourcePosition: t = Se.Bottom, target: n, targetPosition: r = Se.Top, center: o, offset: a }) {
  const i = Ml[t], s = Ml[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = Zh({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], m, b;
  const $ = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [h, x, p, k] = Ec({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    m = o.x ?? h, b = o.y ?? x;
    const O = [
      { x: m, y: l.y },
      { x: m, y: u.y }
    ], S = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    i[d] === f ? v = d === "x" ? O : S : v = d === "x" ? S : O;
  } else {
    const O = [{ x: l.x, y: u.y }], S = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? S : O : v = i.y === f ? O : S, t === r) {
      const H = Math.abs(e[d] - n[d]);
      if (H <= a) {
        const B = Math.min(a - 1, a - H);
        i[d] === f ? $[d] = (l[d] > e[d] ? -1 : 1) * B : _[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const H = d === "x" ? "y" : "x", B = i[d] === s[H], P = l[H] > u[H], M = l[H] < u[H];
      (i[d] === 1 && (!B && P || B && M) || i[d] !== 1 && (!B && M || B && P)) && (v = d === "x" ? O : S);
    }
    const T = { x: l.x + $.x, y: l.y + $.y }, N = { x: u.x + _.x, y: u.y + _.y }, D = Math.max(Math.abs(T.x - v[0].x), Math.abs(N.x - v[0].x)), L = Math.max(Math.abs(T.y - v[0].y), Math.abs(N.y - v[0].y));
    D >= L ? (m = (T.x + N.x) / 2, b = v[0].y) : (m = v[0].x, b = (T.y + N.y) / 2);
  }
  return [[
    e,
    { x: l.x + $.x, y: l.y + $.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], m, b, p, k];
}
function Yh(e, t, n, r) {
  const o = Math.min(Ol(e, t) / 2, Ol(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function Ai({ sourceX: e, sourceY: t, sourcePosition: n = Se.Bottom, targetX: r, targetY: o, targetPosition: a = Se.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, m] = Bh({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, $, _) => {
    let h = "";
    return _ > 0 && _ < c.length - 1 ? h = Yh(c[_ - 1], $, c[_ + 1], i) : h = `${_ === 0 ? "M" : "L"}${$.x} ${$.y}`, b += h, b;
  }, ""), d, f, v, m];
}
function Tl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Wh(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Tl(n) || !Tl(r))
    return null;
  const o = n.internals.handleBounds || Nl(n.handles), a = r.internals.handleBounds || Nl(r.handles), i = zl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = zl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Er.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", Gr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Se.Bottom, u = (s == null ? void 0 : s.position) || Se.Top, c = Ho(n, i, l), d = Ho(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Nl(e) {
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
function Ho(e, t, n = Se.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? gr(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Se.Top:
      return { x: o + i / 2, y: a };
    case Se.Right:
      return { x: o + i, y: a + s / 2 };
    case Se.Bottom:
      return { x: o + i / 2, y: a + s };
    case Se.Left:
      return { x: o, y: a + s / 2 };
  }
}
function zl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Ua(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Kh(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Ua(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function Xh(e, t, n, r, o) {
  let a = 0.5;
  o === "start" ? a = 0 : o === "end" && (a = 1);
  let i = [
    (e.x + e.width * a) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * a, -100];
  switch (n) {
    case Se.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case Se.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Se.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Os = {
  nodeOrigin: [0, 0],
  nodeExtent: zi,
  elevateNodesOnSelect: !0,
  defaults: {}
}, jh = {
  ...Os,
  checkEquality: !0
};
function Ts(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Fh(e, t, n) {
  const r = Ts(Os, n);
  for (const o of e.values())
    if (o.parentId)
      Ns(o, e, t, r);
    else {
      const a = Yo(o, r.nodeOrigin), i = Qr(o.extent) ? o.extent : r.nodeExtent, s = Pr(a, i, gr(o));
      o.internals.positionAbsolute = s;
    }
}
function Pc(e, t, n, r) {
  var o, a;
  const i = Ts(jh, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Yo(u, i.nodeOrigin), f = Qr(u.extent) ? u.extent : i.nodeExtent, v = Pr(d, f, gr(u));
      c = {
        ...i.defaults,
        ...u,
        measured: {
          width: (o = u.measured) == null ? void 0 : o.width,
          height: (a = u.measured) == null ? void 0 : a.height
        },
        internals: {
          positionAbsolute: v,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: Sc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ns(c, t, n, r);
  }
}
function qh(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ns(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = Ts(Os, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  qh(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Gh(e, l, a, i, u), { positionAbsolute: v } = e.internals, m = c !== v.x || d !== v.y;
  (m || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Sc(e, t) {
  return (Zn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Gh(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = gr(e), l = Yo(e, n), u = Qr(e.extent) ? Pr(l, e.extent, s) : l;
  let c = Pr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = wc(c, s, t));
  const d = Sc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function Uh(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Jr(l), c = xc(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = gr(l), v = l.origin ?? r, m = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, $ = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), h = ($ - f.width) * v[0], x = (_ - f.height) * v[1];
    (m > 0 || b > 0 || h || x) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - m + h,
        y: l.position.y - b + x
      }
    }), (c = n.get(u)) == null || c.forEach((p) => {
      e.some((k) => k.id === p.id) || a.push({
        id: p.id,
        type: "position",
        position: {
          x: p.position.x + m,
          y: p.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || m || b) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: $ + (m ? v[0] * m - h : 0),
        height: _ + (b ? v[1] * b - x : 0)
      }
    });
  }), a;
}
function Jh(e, t, n, r, o, a) {
  const i = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let s = !1;
  if (!i)
    return { changes: [], updatedInternals: s };
  const l = [], u = window.getComputedStyle(i), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
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
    const m = Ms(f.nodeElement), b = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (b || !v.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), _ = Qr(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = wc(h, m, t.get(v.parentId)) : _ && (h = Pr(h, _, m));
      const x = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Pl("source", f.nodeElement, $, c, v.id),
            target: Pl("target", f.nodeElement, $, c, v.id)
          }
        }
      };
      t.set(v.id, x), v.parentId && Ns(x, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Jr(x, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = Uh(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function Qh({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const i = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, a]
  ], r), s = !!i && (i.x !== n[0] || i.y !== n[1] || i.k !== n[2]);
  return Promise.resolve(s);
}
function Vl(e, t, n, r, o, a) {
  let i = o;
  const s = r.get(i) || /* @__PURE__ */ new Map();
  r.set(i, s.set(n, t)), i = `${o}-${e}`;
  const l = r.get(i) || /* @__PURE__ */ new Map();
  if (r.set(i, l.set(n, t)), a) {
    i = `${o}-${e}-${a}`;
    const u = r.get(i) || /* @__PURE__ */ new Map();
    r.set(i, u.set(n, t));
  }
}
function Mc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    Vl("source", l, c, e, o, i), Vl("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function e0(e, t) {
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
function Oc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Oc(n, t) : !1;
}
function Hl(e, t, n) {
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
function t0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [a, i] of e)
    if ((i.selected || i.id === r) && (!i.parentId || !Oc(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
      const s = e.get(a);
      s && o.set(a, {
        id: a,
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
function Ea({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var o, a, i;
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
  const l = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    l ? {
      ...l,
      position: ((i = t.get(e)) == null ? void 0 : i.position) || l.position,
      dragging: r
    } : s[0],
    s
  ];
}
function n0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function m({ noDragClassName: $, handleSelector: _, domNode: h, isSelectable: x, nodeId: p, nodeClickDistance: k = 0 }) {
    f = un(h);
    function O({ x: D, y: L }, H) {
      const { nodeLookup: B, nodeExtent: P, snapGrid: M, snapToGrid: C, nodeOrigin: E, onNodeDrag: V, onSelectionDrag: I, onError: Y, updateNodePositions: F } = t();
      a = { x: D, y: L };
      let G = !1, ae = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && P) {
        const ee = Wo(s);
        ae = qa(ee);
      }
      for (const [ee, W] of s) {
        if (!B.has(ee))
          continue;
        let le = { x: D - W.distance.x, y: L - W.distance.y };
        C && (le = Ps(le, M));
        let ke = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (s.size > 1 && P && !W.extent) {
          const { positionAbsolute: Ne } = W.internals, se = Ne.x - ae.x + P[0][0], be = Ne.x + W.measured.width - ae.x2 + P[1][0], Fe = Ne.y - ae.y + P[0][1], Ye = Ne.y + W.measured.height - ae.y2 + P[1][1];
          ke = [
            [se, Fe],
            [be, Ye]
          ];
        }
        const { position: $e, positionAbsolute: he } = Mh({
          nodeId: ee,
          nextPosition: le,
          nodeLookup: B,
          nodeExtent: ke,
          nodeOrigin: E,
          onError: Y
        });
        G = G || W.position.x !== $e.x || W.position.y !== $e.y, W.position = $e, W.internals.positionAbsolute = he;
      }
      if (G && (F(s, !0), H && (r || V || !p && I))) {
        const [ee, W] = Ea({
          nodeId: p,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(H, s, ee, W), V == null || V(H, ee, W), p || I == null || I(H, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: D, panBy: L, autoPanSpeed: H, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [P, M] = bc(u, c, H);
      (P !== 0 || M !== 0) && (a.x = (a.x ?? 0) - P / D[2], a.y = (a.y ?? 0) - M / D[2], await L({ x: P, y: M }) && O(a, null)), i = requestAnimationFrame(S);
    }
    function T(D) {
      var L;
      const { nodeLookup: H, multiSelectionActive: B, nodesDraggable: P, transform: M, snapGrid: C, snapToGrid: E, selectNodesOnDrag: V, onNodeDragStart: I, onSelectionDragStart: Y, unselectNodesAndEdges: F } = t();
      d = !0, (!V || !x) && !B && p && ((L = H.get(p)) != null && L.selected || F()), x && V && p && (e == null || e(p));
      const G = Ca(D.sourceEvent, { transform: M, snapGrid: C, snapToGrid: E, containerBounds: c });
      if (a = G, s = t0(H, P, G, p), s.size > 0 && (n || I || !p && Y)) {
        const [ae, ee] = Ea({
          nodeId: p,
          dragItems: s,
          nodeLookup: H
        });
        n == null || n(D.sourceEvent, s, ae, ee), I == null || I(D.sourceEvent, ae, ee), p || Y == null || Y(D.sourceEvent, ee);
      }
    }
    const N = Vg().clickDistance(k).on("start", (D) => {
      const { domNode: L, nodeDragThreshold: H, transform: B, snapGrid: P, snapToGrid: M } = t();
      c = (L == null ? void 0 : L.getBoundingClientRect()) || null, v = !1, H === 0 && T(D), a = Ca(D.sourceEvent, { transform: B, snapGrid: P, snapToGrid: M, containerBounds: c }), u = Wn(D.sourceEvent, c);
    }).on("drag", (D) => {
      const { autoPanOnNodeDrag: L, transform: H, snapGrid: B, snapToGrid: P, nodeDragThreshold: M, nodeLookup: C } = t(), E = Ca(D.sourceEvent, { transform: H, snapGrid: B, snapToGrid: P, containerBounds: c });
      if ((D.sourceEvent.type === "touchmove" && D.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !C.has(p)) && (v = !0), !v) {
        if (!l && L && d && (l = !0, S()), !d) {
          const V = E.xSnapped - (a.x ?? 0), I = E.ySnapped - (a.y ?? 0);
          Math.sqrt(V * V + I * I) > M && T(D);
        }
        (a.x !== E.xSnapped || a.y !== E.ySnapped) && s && d && (u = Wn(D.sourceEvent, c), O(E, D.sourceEvent));
      }
    }).on("end", (D) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: L, updateNodePositions: H, onNodeDragStop: B, onSelectionDragStop: P } = t();
        if (H(s, !1), o || B || !p && P) {
          const [M, C] = Ea({
            nodeId: p,
            dragItems: s,
            nodeLookup: L,
            dragging: !1
          });
          o == null || o(D.sourceEvent, s, M, C), B == null || B(D.sourceEvent, M, C), p || P == null || P(D.sourceEvent, C);
        }
      }
    }).filter((D) => {
      const L = D.target;
      return !D.button && (!$ || !Hl(L, `.${$}`, h)) && (!_ || Hl(L, _, h));
    });
    f.call(N);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: m,
    destroy: b
  };
}
function r0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    Vo(o, Jr(a)) > 0 && r.push(a);
  return r;
}
const o0 = 250;
function i0(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = r0(e, n, t + o0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = Ho(u, d, d.position, !0), m = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      m > t || (m < s ? (i = [{ ...d, x: f, y: v }], s = m) : m === s && i.push({ ...d, x: f, y: v }));
    }
  }
  if (!i.length)
    return null;
  if (i.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return i.find((c) => c.type === u) ?? i[0];
  }
  return i[0];
}
function Tc(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...Ho(u, d, d.position, !0) } : d;
}
function Nc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function a0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const zc = () => !0;
function s0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: b, onConnectEnd: $, isValidConnection: _ = zc, onReconnectEnd: h, updateConnection: x, getTransform: p, getFromHandle: k, autoPanSpeed: O }) {
  const S = Nh(e.target);
  let T = 0, N;
  const { x: D, y: L } = Wn(e), H = S == null ? void 0 : S.elementFromPoint(D, L), B = Nc(a, H), P = s == null ? void 0 : s.getBoundingClientRect();
  if (!P || !B)
    return;
  const M = Tc(o, B, r, l, t);
  if (!M)
    return;
  let C = Wn(e, P), E = !1, V = null, I = !1, Y = null;
  function F() {
    if (!c || !P)
      return;
    const [$e, he] = bc(C, P, O);
    f({ x: $e, y: he }), T = requestAnimationFrame(F);
  }
  const G = {
    ...M,
    nodeId: o,
    type: B,
    position: M.position
  }, ae = l.get(o), ee = {
    inProgress: !0,
    isValid: null,
    from: Ho(ae, G, Se.Left, !0),
    fromHandle: G,
    fromPosition: G.position,
    fromNode: ae,
    to: C,
    toHandle: null,
    toPosition: xl[G.position],
    toNode: null
  };
  x(ee);
  let W = ee;
  m == null || m(e, { nodeId: o, handleId: r, handleType: B });
  function le($e) {
    if (!k() || !G) {
      ke($e);
      return;
    }
    const he = p();
    C = Wn($e, P), N = i0(Ko(C, he, !1, [1, 1]), n, l, G), E || (F(), E = !0);
    const Ne = Vc($e, {
      handle: N,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: _,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Y = Ne.handleDomNode, V = Ne.connection, I = a0(!!N, Ne.isValid);
    const se = {
      // from stays the same
      ...W,
      isValid: I,
      to: N && I ? $c({ x: N.x, y: N.y }, he) : C,
      toHandle: Ne.toHandle,
      toPosition: I && Ne.toHandle ? Ne.toHandle.position : xl[G.position],
      toNode: Ne.toHandle ? l.get(Ne.toHandle.nodeId) : null
    };
    I && N && W.toHandle && se.toHandle && W.toHandle.type === se.toHandle.type && W.toHandle.nodeId === se.toHandle.nodeId && W.toHandle.id === se.toHandle.id && W.to.x === se.to.x && W.to.y === se.to.y || (x(se), W = se);
  }
  function ke($e) {
    (N || Y) && V && I && (b == null || b(V));
    const { inProgress: he, ...Ne } = W, se = {
      ...Ne,
      toPosition: W.toHandle ? W.toPosition : null
    };
    $ == null || $($e, se), a && (h == null || h($e, se)), v(), cancelAnimationFrame(T), E = !1, I = !1, V = null, Y = null, S.removeEventListener("mousemove", le), S.removeEventListener("mouseup", ke), S.removeEventListener("touchmove", le), S.removeEventListener("touchend", ke);
  }
  S.addEventListener("mousemove", le), S.addEventListener("mouseup", ke), S.addEventListener("touchmove", le), S.addEventListener("touchend", ke);
}
function Vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = zc, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: m } = Wn(e), b = i.elementFromPoint(v, m), $ = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const h = Nc(void 0, $), x = $.getAttribute("data-nodeid"), p = $.getAttribute("data-handleid"), k = $.classList.contains("connectable"), O = $.classList.contains("connectableend");
    if (!x || !h)
      return _;
    const S = {
      source: d ? x : r,
      sourceHandle: d ? p : o,
      target: d ? r : x,
      targetHandle: d ? o : p
    };
    _.connection = S;
    const T = k && O && (n === Er.Strict ? d && h === "source" || !d && h === "target" : x !== r || p !== o);
    _.isValid = T && u(S), _.toHandle = Tc(x, h, p, c, n, !1);
  }
  return _;
}
const l0 = {
  onPointerDown: s0,
  isValid: Vc
};
function u0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = un(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (x) => {
      const p = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * c, O = p[2] * Math.pow(2, k);
      t.scaleTo(O);
    };
    let b = [0, 0];
    const $ = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (b = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, _ = (x) => {
      const p = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], O = [k[0] - b[0], k[1] - b[1]];
      b = k;
      const S = r() * Math.max(p[2], Math.log(p[2])) * (v ? -1 : 1), T = {
        x: p[0] - O[0] * S,
        y: p[1] - O[1] * S
      }, N = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: p[2]
      }, N, s);
    }, h = hc().on("start", $).on("zoom", d ? _ : null).on("zoom.wheel", f ? m : null);
    o.call(h, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: gn
  };
}
const c0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ua = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Pa = ({ x: e, y: t, zoom: n }) => aa.translate(e, t).scale(n), Lr = (e, t) => e.target.closest(`.${t}`), Hc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Sa = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Dc = (e) => {
  const t = e.ctrlKey && Di() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function d0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Lr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const $ = gn(c), _ = Dc(c), h = d * Math.pow(2, _);
      r.scaleTo(n, h, $, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === lr.Vertical ? 0 : c.deltaX * f, m = o === lr.Horizontal ? 0 : c.deltaY * f;
    !Di() && c.shiftKey && o !== lr.Vertical && (v = c.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(m / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const b = ua(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function f0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Lr(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function v0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = ua(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function g0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && Hc(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, ua(a.transform)));
  };
}
function p0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && Hc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && c0(e.prevViewport, i.transform))) {
      const l = ua(i.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(i.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function h0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Lr(c, `${u}-flow__node`) || Lr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || Lr(c, s) && c.type === "wheel" || Lr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const m = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && m;
  };
}
function m0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = hc().clickDistance(!Zn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = un(e).call(f);
  x({
    x: a.x,
    y: a.y,
    zoom: Ur(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const m = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Dc);
  function $(H, B) {
    return v ? new Promise((P) => {
      f == null || f.transform(Sa(v, B == null ? void 0 : B.duration, () => P(!0)), H);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: H, noPanClassName: B, onPaneContextMenu: P, userSelectionActive: M, panOnScroll: C, panOnDrag: E, panOnScrollMode: V, panOnScrollSpeed: I, preventScrolling: Y, zoomOnPinch: F, zoomOnScroll: G, zoomOnDoubleClick: ae, zoomActivationKeyPressed: ee, lib: W, onTransformChange: le }) {
    M && !c.isZoomingOrPanning && h();
    const ke = C && !ee && !M ? d0({
      zoomPanValues: c,
      noWheelClassName: H,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: V,
      panOnScrollSpeed: I,
      zoomOnPinch: F,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : f0({
      noWheelClassName: H,
      preventScrolling: Y,
      d3ZoomHandler: m
    });
    if (v.on("wheel.zoom", ke, { passive: !1 }), !M) {
      const he = v0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", he);
      const Ne = g0({
        zoomPanValues: c,
        panOnDrag: E,
        onPaneContextMenu: !!P,
        onPanZoom: i,
        onTransformChange: le
      });
      f.on("zoom", Ne);
      const se = p0({
        zoomPanValues: c,
        panOnDrag: E,
        panOnScroll: C,
        onPaneContextMenu: P,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", se);
    }
    const $e = h0({
      zoomActivationKeyPressed: ee,
      panOnDrag: E,
      zoomOnScroll: G,
      panOnScroll: C,
      zoomOnDoubleClick: ae,
      zoomOnPinch: F,
      userSelectionActive: M,
      noPanClassName: B,
      noWheelClassName: H,
      lib: W
    });
    f.filter($e), ae ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function x(H, B, P) {
    const M = Pa(H), C = f == null ? void 0 : f.constrain()(M, B, P);
    return C && await $(C), new Promise((E) => E(C));
  }
  async function p(H, B) {
    const P = Pa(H);
    return await $(P, B), new Promise((M) => M(P));
  }
  function k(H) {
    if (v) {
      const B = Pa(H), P = v.property("__zoom");
      (P.k !== H.zoom || P.x !== H.x || P.y !== H.y) && (f == null || f.transform(v, B, null, { sync: !0 }));
    }
  }
  function O() {
    const H = v ? pc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: H.x, y: H.y, zoom: H.k };
  }
  function S(H, B) {
    return v ? new Promise((P) => {
      f == null || f.scaleTo(Sa(v, B == null ? void 0 : B.duration, () => P(!0)), H);
    }) : Promise.resolve(!1);
  }
  function T(H, B) {
    return v ? new Promise((P) => {
      f == null || f.scaleBy(Sa(v, B == null ? void 0 : B.duration, () => P(!0)), H);
    }) : Promise.resolve(!1);
  }
  function N(H) {
    f == null || f.scaleExtent(H);
  }
  function D(H) {
    f == null || f.translateExtent(H);
  }
  function L(H) {
    const B = !Zn(H) || H < 0 ? 0 : H;
    f == null || f.clickDistance(B);
  }
  return {
    update: _,
    destroy: h,
    setViewport: p,
    setViewportConstrained: x,
    getViewport: O,
    scaleTo: S,
    scaleBy: T,
    setScaleExtent: N,
    setTranslateExtent: D,
    syncViewport: k,
    setClickDistance: L
  };
}
var Dl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Dl || (Dl = {}));
var y0 = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function fr(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(ae, "$connectable", n), a = () => te($e, "$connectionRadius", n), i = () => te(le, "$domNode", n), s = () => te(ke, "$nodeLookup", n), l = () => te(W, "$connectionMode", n), u = () => te(se, "$lib", n), c = () => te(pe, "$autoPanOnConnect", n), d = () => te(qe, "$flowId", n), f = () => te(Ne, "$isValidConnectionStore", n), v = () => te(Fe, "$onedgecreate", n), m = () => te(Ae, "$onConnectAction", n), b = () => te(Ue, "$onConnectStartAction", n), $ = () => te(De, "$onConnectEndAction", n), _ = () => te(he, "$viewport", n), h = () => te(ut, "$connection", n), x = () => te(me, "$edges", n), p = () => te(Le, "$connectionLookup", n), k = re(), O = re(), S = re(), T = re(), N = re(), D = re(), L = re(), H = re();
  let B = w(t, "id", 12, void 0), P = w(t, "type", 12, "source"), M = w(t, "position", 28, () => Se.Top), C = w(t, "style", 12, void 0), E = w(t, "isValidConnection", 12, void 0), V = w(t, "onconnect", 12, void 0), I = w(t, "ondisconnect", 12, void 0), Y = w(t, "isConnectable", 12, void 0), F = w(t, "class", 12, void 0);
  const G = kr("svelteflow__node_id"), ae = kr("svelteflow__node_connectable"), ee = Qe(), {
    connectionMode: W,
    domNode: le,
    nodeLookup: ke,
    connectionRadius: $e,
    viewport: he,
    isValidConnection: Ne,
    lib: se,
    addEdge: be,
    onedgecreate: Fe,
    panBy: Ye,
    cancelConnection: Ze,
    updateConnection: K,
    autoPanOnConnect: pe,
    edges: me,
    connectionLookup: Le,
    onconnect: Ae,
    onconnectstart: Ue,
    onconnectend: De,
    flowId: qe,
    connection: ut
  } = ee;
  function bt(Me) {
    const at = _c(Me);
    (at && Me.button === 0 || !at) && l0.onPointerDown(Me, {
      handleId: g(S),
      nodeId: G,
      isTarget: g(k),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: E() ?? f(),
      updateConnection: K,
      cancelConnection: Ze,
      panBy: Ye,
      onConnect: (we) => {
        var ct;
        const vt = v() ? v()(we) : we;
        vt && (be(vt), (ct = m()) == null || ct(we));
      },
      onConnectStart: (we, ct) => {
        var vt;
        (vt = b()) == null || vt(we, {
          nodeId: ct.nodeId,
          handleId: ct.handleId,
          handleType: ct.handleType
        });
      },
      onConnectEnd: (we, ct) => {
        var vt;
        (vt = $()) == null || vt(we, ct);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let ne = re(null), Ke = re();
  de(() => Q(P()), () => {
    U(k, P() === "target");
  }), de(
    () => (Q(Y()), o()),
    () => {
      U(O, Y() !== void 0 ? Y() : o());
    }
  ), de(() => Q(B()), () => {
    U(S, B() || null);
  }), de(
    () => (Q(V()), Q(I()), x(), p(), Q(P()), Q(B())),
    () => {
      (V() || I()) && (x(), U(Ke, p().get(`${G}-${P()}${B() ? `-${B()}` : ""}`)));
    }
  ), de(
    () => (g(ne), g(Ke), Q(I()), Q(V())),
    () => {
      if (g(ne) && !_h(g(Ke), g(ne))) {
        const Me = g(Ke) ?? /* @__PURE__ */ new Map();
        $l(g(ne), Me, I()), $l(Me, g(ne), V());
      }
      U(ne, g(Ke) ?? /* @__PURE__ */ new Map());
    }
  ), de(() => h(), () => {
    U(T, !!h().fromHandle);
  }), de(
    () => (h(), Q(P()), g(S)),
    () => {
      var Me, at, we;
      U(N, ((Me = h().fromHandle) == null ? void 0 : Me.nodeId) === G && ((at = h().fromHandle) == null ? void 0 : at.type) === P() && ((we = h().fromHandle) == null ? void 0 : we.id) === g(S));
    }
  ), de(
    () => (h(), Q(P()), g(S)),
    () => {
      var Me, at, we;
      U(D, ((Me = h().toHandle) == null ? void 0 : Me.nodeId) === G && ((at = h().toHandle) == null ? void 0 : at.type) === P() && ((we = h().toHandle) == null ? void 0 : we.id) === g(S));
    }
  ), de(
    () => (l(), h(), Q(P()), g(S)),
    () => {
      var Me, at, we;
      U(L, l() === Er.Strict ? ((Me = h().fromHandle) == null ? void 0 : Me.type) !== P() : G !== ((at = h().fromHandle) == null ? void 0 : at.nodeId) || g(S) !== ((we = h().fromHandle) == null ? void 0 : we.id));
    }
  ), de(() => (g(D), h()), () => {
    U(H, g(D) && h().isValid);
  }), _t(), Ie();
  var ge = y0();
  ce(ge, "data-nodeid", G);
  let Gt;
  var Rt = j(ge);
  St(Rt, t, "default", {}), X(ge), Oe(
    (Me) => {
      ce(ge, "data-handleid", g(S)), ce(ge, "data-handlepos", M()), ce(ge, "data-id", `${d() ?? ""}-${G ?? ""}-${B() || ""}-${P() ?? ""}`), Gt = Dt(ge, 1, zn(Me), null, Gt, {
        valid: g(H),
        connectingto: g(D),
        connectingfrom: g(N),
        source: !g(k),
        target: g(k),
        connectablestart: g(O),
        connectableend: g(O),
        connectable: g(O),
        connectionindicator: g(O) && (!g(T) || g(L))
      }), ce(ge, "style", C());
    },
    [
      () => It([
        "svelte-flow__handle",
        `svelte-flow__handle-${M()}`,
        "nodrag",
        "nopan",
        M(),
        F()
      ])
    ],
    ye
  ), it("mousedown", ge, bt), it("touchstart", ge, bt), A(e, ge);
  var sn = ve({
    get id() {
      return B();
    },
    set id(Me) {
      B(Me), y();
    },
    get type() {
      return P();
    },
    set type(Me) {
      P(Me), y();
    },
    get position() {
      return M();
    },
    set position(Me) {
      M(Me), y();
    },
    get style() {
      return C();
    },
    set style(Me) {
      C(Me), y();
    },
    get isValidConnection() {
      return E();
    },
    set isValidConnection(Me) {
      E(Me), y();
    },
    get onconnect() {
      return V();
    },
    set onconnect(Me) {
      V(Me), y();
    },
    get ondisconnect() {
      return I();
    },
    set ondisconnect(Me) {
      I(Me), y();
    },
    get isConnectable() {
      return Y();
    },
    set isConnectable(Me) {
      Y(Me), y();
    },
    get class() {
      return F();
    },
    set class(Me) {
      F(Me), y();
    }
  });
  return r(), sn;
}
ie(
  fr,
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
var w0 = /* @__PURE__ */ oe("<!> <!>", 1);
function Li(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "targetPosition", "sourcePosition"]), fe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), a = w(t, "sourcePosition", 12, void 0);
  Ie();
  var i = w0(), s = _e(i);
  const l = /* @__PURE__ */ ye(() => o() ?? Se.Top);
  fr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ ye(() => a() ?? Se.Bottom);
  return fr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Oe(() => {
    var f;
    return Nn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), A(e, i), ve({
    get data() {
      return r();
    },
    set data(f) {
      r(f), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), y();
    },
    get sourcePosition() {
      return a();
    },
    set sourcePosition(f) {
      a(f), y();
    }
  });
}
ie(
  Li,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var b0 = /* @__PURE__ */ oe(" <!>", 1);
function Ac(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "sourcePosition"]), fe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ie(), Ve();
  var a = b0(), i = _e(a), s = Z(i);
  const l = /* @__PURE__ */ ye(() => o() ?? Se.Bottom);
  return fr(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Oe(() => {
    var u;
    return Nn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, a), ve({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), y();
    }
  });
}
ie(Ac, { data: {}, sourcePosition: {} }, [], [], !0);
var x0 = /* @__PURE__ */ oe(" <!>", 1);
function Lc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "targetPosition"]), fe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ie(), Ve();
  var a = x0(), i = _e(a), s = Z(i);
  const l = /* @__PURE__ */ ye(() => o() ?? Se.Top);
  return fr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Oe(() => {
    var u;
    return Nn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), A(e, a), ve({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), y();
    }
  });
}
ie(Lc, { data: {}, targetPosition: {} }, [], [], !0);
function Ic(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, []);
}
ie(Ic, {}, [], [], !0);
function Al(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Ii(e, { target: t, domNode: n }) {
  return Al(e, n, t), {
    async update({ target: r, domNode: o }) {
      Al(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var $0 = /* @__PURE__ */ oe("<div><!></div>");
function Rc(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(a, "$domNode", n), { domNode: a } = Qe();
  Ie();
  var i = $0(), s = j(i);
  St(s, t, "default", {}), X(i), Pt(i, (l, u) => Ii == null ? void 0 : Ii(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), A(e, i), ve(), r();
}
ie(Rc, {}, ["default"], [], !0);
function Zc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = Qe();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Gr.error012(s));
      return;
    }
    (l.selectable || q(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var k0 = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Bc(e, t) {
  fe(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const a = Zc(), i = kr("svelteflow__edge_id");
  return Ie(), Rc(e, {
    children: (s, l) => {
      var u = k0(), c = j(u);
      St(c, t, "default", {}), X(u), Oe(() => {
        ce(u, "style", "pointer-events: all;" + n()), pt(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), it("keyup", u, () => {
      }), it("click", u, () => {
        i && a(i);
      }), A(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
    get style() {
      return n();
    },
    set style(s) {
      n(s), y();
    },
    get x() {
      return r();
    },
    set x(s) {
      r(s), y();
    },
    get y() {
      return o();
    },
    set y(s) {
      o(s), y();
    }
  });
}
ie(Bc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var _0 = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__edge-interaction"></path>'), C0 = /* @__PURE__ */ Ce('<path fill="none"></path><!><!>', 1);
function Xo(e, t) {
  fe(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), a = w(t, "labelX", 12, void 0), i = w(t, "labelY", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ie();
  var m = C0(), b = _e(m), $ = Z(b);
  {
    var _ = (p) => {
      var k = _0();
      ce(k, "stroke-opacity", 0), ce(k, "stroke-width", v), Oe(() => ce(k, "d", r())), A(p, k);
    };
    Ee($, (p) => {
      v && p(_);
    });
  }
  var h = Z($);
  {
    var x = (p) => {
      Bc(p, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (k, O) => {
          Ve();
          var S = je();
          Oe(() => Nn(S, o())), A(k, S);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(h, (p) => {
      o() && p(x);
    });
  }
  return Oe(
    (p) => {
      ce(b, "id", n()), ce(b, "d", r()), Dt(b, 0, zn(p)), ce(b, "marker-start", l()), ce(b, "marker-end", u()), ce(b, "style", c());
    },
    [
      () => It(["svelte-flow__edge-path", f()])
    ],
    ye
  ), A(e, m), ve({
    get id() {
      return n();
    },
    set id(p) {
      n(p), y();
    },
    get path() {
      return r();
    },
    set path(p) {
      r(p), y();
    },
    get label() {
      return o();
    },
    set label(p) {
      o(p), y();
    },
    get labelX() {
      return a();
    },
    set labelX(p) {
      a(p), y();
    },
    get labelY() {
      return i();
    },
    set labelY(p) {
      i(p), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(p) {
      s(p), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(p) {
      l(p), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(p) {
      u(p), y();
    },
    get style() {
      return c();
    },
    set style(p) {
      c(p), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(p) {
      d(p), y();
    },
    get class() {
      return f();
    },
    set class(p) {
      f(p), y();
    }
  });
}
ie(
  Xo,
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
function Ri(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, [
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
  const r = re(), o = re(), a = re();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), b = w(t, "targetX", 12), $ = w(t, "targetY", 12), _ = w(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), Q(f()), Q(v()), Q(b()), Q($()), Q(m()), Q(_())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(a, h[2])))(Cc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: m(),
        targetPosition: _()
      }));
    }
  ), _t(), Ie(), Xo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
    },
    get label() {
      return i();
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
      return i();
    },
    set label(h) {
      i(h), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), y();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), y();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(h) {
      m(h), y();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), y();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), y();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), y();
    }
  });
}
ie(
  Ri,
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
function Yc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, [
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
  const r = re(), o = re(), a = re();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), b = w(t, "targetX", 12), $ = w(t, "targetY", 12), _ = w(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), Q(f()), Q(v()), Q(b()), Q($()), Q(m()), Q(_())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(a, h[2])))(Ai({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: m(),
        targetPosition: _()
      }));
    }
  ), _t(), Ie(), Xo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
    },
    get label() {
      return i();
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
      return i();
    },
    set label(h) {
      i(h), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), y();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), y();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(h) {
      m(h), y();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), y();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), y();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), y();
    }
  });
}
ie(
  Yc,
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
function Wc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, [
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
  const r = re(), o = re(), a = re();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "targetX", 12), b = w(t, "targetY", 12);
  return de(
    () => (g(r), g(o), g(a), Q(f()), Q(v()), Q(m()), Q(b())),
    () => {
      (($) => (U(r, $[0]), U(o, $[1]), U(a, $[2])))(Ga({
        sourceX: f(),
        sourceY: v(),
        targetX: m(),
        targetY: b()
      }));
    }
  ), _t(), Ie(), Xo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
    },
    get label() {
      return i();
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
      return i();
    },
    set label($) {
      i($), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle($) {
      s($), y();
    },
    get style() {
      return l();
    },
    set style($) {
      l($), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart($) {
      u($), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth($) {
      d($), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX($) {
      f($), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY($) {
      v($), y();
    },
    get targetX() {
      return m();
    },
    set targetX($) {
      m($), y();
    },
    get targetY() {
      return b();
    },
    set targetY($) {
      b($), y();
    }
  });
}
ie(
  Wc,
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
function Kc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, [
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
  const r = re(), o = re(), a = re();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), b = w(t, "targetX", 12), $ = w(t, "targetY", 12), _ = w(t, "targetPosition", 12);
  return de(
    () => (g(r), g(o), g(a), Q(f()), Q(v()), Q(b()), Q($()), Q(m()), Q(_())),
    () => {
      ((h) => (U(r, h[0]), U(o, h[1]), U(a, h[2])))(Ai({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: $(),
        sourcePosition: m(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), _t(), Ie(), Xo(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(a);
    },
    get label() {
      return i();
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
      return i();
    },
    set label(h) {
      i(h), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), y();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), y();
    },
    get sourcePosition() {
      return m();
    },
    set sourcePosition(h) {
      m(h), y();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), y();
    },
    get targetY() {
      return $();
    },
    set targetY(h) {
      $(h), y();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), y();
    }
  });
}
ie(
  Kc,
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
function E0(e, t) {
  const n = e.set, r = t.set, o = q(e), a = q(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function P0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const S0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, a = n.set;
  let i = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, M0 = (e, t, n, r = [0, 0], o = zi) => {
  const { subscribe: a, set: i, update: s } = xe([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Pc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, i(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, m = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: m
  };
}, O0 = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = xe([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((m) => ({ ...l, ...m })) : f;
    Mc(t, n, v), s = v, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Xc = {
  input: Ac,
  output: Lc,
  default: Li,
  group: Ic
}, jc = {
  straight: Wc,
  smoothstep: Yc,
  default: Ri,
  step: Kc
}, T0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? zi;
  Pc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Mc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const m = Wo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Ss(m, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: xe(null),
    nodes: M0(e, s, l, d, f),
    nodeLookup: ln(s),
    parentLookup: ln(l),
    edgeLookup: ln(c),
    visibleNodes: ln([]),
    edges: O0(t, u, c),
    visibleEdges: ln([]),
    connectionLookup: ln(u),
    height: xe(500),
    width: xe(500),
    minZoom: xe(0.5),
    maxZoom: xe(2),
    nodeOrigin: xe(d),
    nodeDragThreshold: xe(1),
    nodeExtent: xe(f),
    translateExtent: xe(zi),
    autoPanOnNodeDrag: xe(!0),
    autoPanOnConnect: xe(!0),
    fitViewOnInit: xe(!1),
    fitViewOnInitDone: xe(!1),
    fitViewOptions: xe(void 0),
    panZoom: xe(null),
    snapGrid: xe(null),
    dragging: xe(!1),
    selectionRect: xe(null),
    selectionKeyPressed: xe(!1),
    multiselectionKeyPressed: xe(!1),
    deleteKeyPressed: xe(!1),
    panActivationKeyPressed: xe(!1),
    zoomActivationKeyPressed: xe(!1),
    selectionRectMode: xe(null),
    selectionMode: xe(Vi.Partial),
    nodeTypes: xe(Xc),
    edgeTypes: xe(jc),
    viewport: xe(v),
    connectionMode: xe(Er.Strict),
    domNode: xe(null),
    connection: ln(ja),
    connectionLineType: xe(Br.Bezier),
    connectionRadius: xe(20),
    isValidConnection: xe(() => !0),
    nodesDraggable: xe(!0),
    nodesConnectable: xe(!0),
    elementsSelectable: xe(!0),
    selectNodesOnDrag: xe(!0),
    markers: ln([]),
    defaultMarkerColor: xe("#b1b1b7"),
    lib: ln("svelte"),
    onlyRenderVisibleElements: xe(!1),
    onerror: xe(Oh),
    ondelete: xe(void 0),
    onedgecreate: xe(void 0),
    onconnect: xe(void 0),
    onconnectstart: xe(void 0),
    onconnectend: xe(void 0),
    onbeforedelete: xe(void 0),
    nodesInitialized: xe(!1),
    edgesInitialized: xe(!1),
    viewportInitialized: xe(!1),
    initialized: ln(!1)
  };
};
function N0(e) {
  const t = sr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Ah({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return sr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = Wh({
      id: s.id,
      sourceNode: l,
      targetNode: u,
      sourceHandle: s.sourceHandle || null,
      targetHandle: s.targetHandle || null,
      connectionMode: o,
      onError: a
    });
    return c && i.push({
      ...s,
      zIndex: Dh({
        selected: s.selected,
        zIndex: s.zIndex,
        sourceNode: l,
        targetNode: u,
        elevateOnSelect: !1
      }),
      ...c
    }), i;
  }, []));
}
function z0(e) {
  return sr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? mc(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const ca = Symbol();
function Fc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = T0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(C) {
    s.nodeTypes.set({
      ...Xc,
      ...C
    });
  }
  function u(C) {
    s.edgeTypes.set({
      ...jc,
      ...C
    });
  }
  function c(C) {
    const E = q(s.edges);
    s.edges.set(Rh(C, E));
  }
  const d = (C, E = !1) => {
    var V;
    const I = q(s.nodeLookup);
    for (const [Y, F] of C) {
      const G = (V = I.get(Y)) == null ? void 0 : V.internals.userNode;
      G && (G.position = F.position, G.dragging = E);
    }
    s.nodes.update((Y) => Y);
  };
  function f(C) {
    var E, V, I;
    const Y = q(s.nodeLookup), F = q(s.parentLookup), { changes: G, updatedInternals: ae } = Jh(C, Y, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ae) {
      if (Fh(Y, F, { nodeOrigin: a, nodeExtent: i }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const ee = q(s.fitViewOptions), W = m({
          ...ee,
          nodes: ee == null ? void 0 : ee.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const ee of G) {
        const W = (E = Y.get(ee.id)) == null ? void 0 : E.internals.userNode;
        if (W)
          switch (ee.type) {
            case "dimensions": {
              const le = { ...W.measured, ...ee.dimensions };
              ee.setAttributes && (W.width = ((V = ee.dimensions) == null ? void 0 : V.width) ?? W.width, W.height = ((I = ee.dimensions) == null ? void 0 : I.height) ?? W.height), W.measured = le;
              break;
            }
            case "position":
              W.position = ee.position ?? W.position;
              break;
          }
      }
      s.nodes.update((ee) => ee), q(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(C) {
    const E = q(s.panZoom), V = q(s.domNode);
    if (!E || !V)
      return Promise.resolve(!1);
    const { width: I, height: Y } = Ms(V), F = kl(q(s.nodeLookup), C);
    return _l({
      nodes: F,
      width: I,
      height: Y,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: E
    }, C);
  }
  function m(C) {
    const E = q(s.panZoom);
    if (!E)
      return !1;
    const V = kl(q(s.nodeLookup), C);
    return _l({
      nodes: V,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: E
    }, C), V.size > 0;
  }
  function b(C, E) {
    const V = q(s.panZoom);
    return V ? V.scaleBy(C, E) : Promise.resolve(!1);
  }
  function $(C) {
    return b(1.2, C);
  }
  function _(C) {
    return b(1 / 1.2, C);
  }
  function h(C) {
    const E = q(s.panZoom);
    E && (E.setScaleExtent([C, q(s.maxZoom)]), s.minZoom.set(C));
  }
  function x(C) {
    const E = q(s.panZoom);
    E && (E.setScaleExtent([q(s.minZoom), C]), s.maxZoom.set(C));
  }
  function p(C) {
    const E = q(s.panZoom);
    E && (E.setTranslateExtent(C), s.translateExtent.set(C));
  }
  function k(C) {
    let E = !1;
    return C.forEach((V) => {
      V.selected && (V.selected = !1, E = !0);
    }), E;
  }
  function O(C) {
    var E;
    (E = q(s.panZoom)) == null || E.setClickDistance(C);
  }
  function S(C) {
    k((C == null ? void 0 : C.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), k((C == null ? void 0 : C.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (C) => {
    var E;
    if (C) {
      const V = q(s.nodes), I = q(s.edges), Y = V.filter((ee) => ee.selected), F = I.filter((ee) => ee.selected), { nodes: G, edges: ae } = await yc({
        nodesToRemove: Y,
        edgesToRemove: F,
        nodes: V,
        edges: I,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (G.length || ae.length) && (s.nodes.update((ee) => ee.filter((W) => !G.some((le) => le.id === W.id))), s.edges.update((ee) => ee.filter((W) => !ae.some((le) => le.id === W.id))), (E = q(s.ondelete)) == null || E({
        nodes: G,
        edges: ae
      }));
    }
  });
  function T(C) {
    const E = q(s.multiselectionKeyPressed);
    s.nodes.update((V) => V.map((I) => {
      const Y = C.includes(I.id), F = E && I.selected || Y;
      return I.selected = F, I;
    })), E || s.edges.update((V) => V.map((I) => (I.selected = !1, I)));
  }
  function N(C) {
    const E = q(s.multiselectionKeyPressed);
    s.edges.update((V) => V.map((I) => {
      const Y = C.includes(I.id), F = E && I.selected || Y;
      return I.selected = F, I;
    })), E || s.nodes.update((V) => V.map((I) => (I.selected = !1, I)));
  }
  function D(C) {
    var E;
    const V = (E = q(s.nodes)) == null ? void 0 : E.find((I) => I.id === C);
    if (!V) {
      console.warn("012", Gr.error012(C));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), V.selected ? V.selected && q(s.multiselectionKeyPressed) && S({ nodes: [V], edges: [] }) : T([C]);
  }
  function L(C) {
    const E = q(s.viewport);
    return Qh({
      delta: C,
      panZoom: q(s.panZoom),
      transform: [E.x, E.y, E.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const H = xe(ja), B = (C) => {
    H.set({ ...C });
  };
  function P() {
    H.set(ja);
  }
  function M() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), S(), P();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: N0(s),
    visibleNodes: z0(s),
    connection: sr([H, s.viewport], ([C, E]) => C.inProgress ? {
      ...C,
      to: Ko(C.to, [E.x, E.y, E.zoom])
    } : { ...C }),
    markers: sr([s.edges, s.defaultMarkerColor, s.flowId], ([C, E, V]) => Kh(C, { defaultColor: E, id: V })),
    initialized: (() => {
      let C = !1;
      const E = q(s.nodes).length, V = q(s.edges).length;
      return sr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([I, Y, F]) => C || (E === 0 ? C = F : V === 0 ? C = F && I : C = F && I && Y, C));
    })(),
    // actions
    syncNodeStores: (C) => E0(s.nodes, C),
    syncEdgeStores: (C) => P0(s.edges, C),
    syncViewport: (C) => S0(s.panZoom, s.viewport, C),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: $,
    zoomOut: _,
    fitView: (C) => v(C),
    setMinZoom: h,
    setMaxZoom: x,
    setTranslateExtent: p,
    setPaneClickDistance: O,
    unselectNodesAndEdges: S,
    addSelectedNodes: T,
    addSelectedEdges: N,
    handleNodeSelection: D,
    panBy: L,
    updateConnection: B,
    cancelConnection: P,
    reset: M
  };
}
function Qe() {
  const e = kr(ca);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function V0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = Fc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return jr(ca, {
    getStore: () => s
  }), s;
}
function Ll(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = m0({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: a,
    paneClickDistance: u,
    onDraggingChange: s.set
  }), d = c.getViewport();
  return i.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var H0 = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const D0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function qc(e, t) {
  fe(t, !1), rt(e, D0);
  const [n, r] = lt(), o = () => te(V, "$panActivationKeyPressed", n), a = () => te(B, "$minZoom", n), i = () => te(P, "$maxZoom", n), s = () => te(I, "$zoomActivationKeyPressed", n), l = () => te(H, "$selectionRect", n), u = () => te(C, "$translateExtent", n), c = () => te(E, "$lib", n), d = re(), f = re(), v = re();
  let m = w(t, "initialViewport", 12, void 0), b = w(t, "onMoveStart", 12, void 0), $ = w(t, "onMove", 12, void 0), _ = w(t, "onMoveEnd", 12, void 0), h = w(t, "panOnScrollMode", 12), x = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), k = w(t, "zoomOnDoubleClick", 12), O = w(t, "zoomOnPinch", 12), S = w(t, "panOnDrag", 12), T = w(t, "panOnScroll", 12), N = w(t, "paneClickDistance", 12);
  const {
    viewport: D,
    panZoom: L,
    selectionRect: H,
    minZoom: B,
    maxZoom: P,
    dragging: M,
    translateExtent: C,
    lib: E,
    panActivationKeyPressed: V,
    zoomActivationKeyPressed: I,
    viewportInitialized: Y
  } = Qe(), F = (W) => D.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Vn(() => {
    Ei(Y, !0);
  }), de(() => Q(m()), () => {
    U(d, m() || { x: 0, y: 0, zoom: 1 });
  }), de(
    () => (o(), Q(S())),
    () => {
      U(f, o() || S());
    }
  ), de(
    () => (o(), Q(T())),
    () => {
      U(v, o() || T());
    }
  ), _t(), Ie();
  var G = H0(), ae = j(G);
  St(ae, t, "default", {}), X(G), Pt(G, (W, le) => Ll == null ? void 0 : Ll(W, le), () => ({
    viewport: D,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: g(d),
    dragging: M,
    panZoom: L,
    onPanZoomStart: b(),
    onPanZoom: $(),
    onPanZoomEnd: _(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: k(),
    zoomOnPinch: O(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || lr.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof x() == "boolean" ? x() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: N(),
    onTransformChange: F
  })), A(e, G);
  var ee = ve({
    get initialViewport() {
      return m();
    },
    set initialViewport(W) {
      m(W), y();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(W) {
      b(W), y();
    },
    get onMove() {
      return $();
    },
    set onMove(W) {
      $(W), y();
    },
    get onMoveEnd() {
      return _();
    },
    set onMoveEnd(W) {
      _(W), y();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(W) {
      h(W), y();
    },
    get preventScrolling() {
      return x();
    },
    set preventScrolling(W) {
      x(W), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(W) {
      p(W), y();
    },
    get zoomOnDoubleClick() {
      return k();
    },
    set zoomOnDoubleClick(W) {
      k(W), y();
    },
    get zoomOnPinch() {
      return O();
    },
    set zoomOnPinch(W) {
      O(W), y();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), y();
    },
    get panOnScroll() {
      return T();
    },
    set panOnScroll(W) {
      T(W), y();
    },
    get paneClickDistance() {
      return N();
    },
    set paneClickDistance(W) {
      N(W), y();
    }
  });
  return r(), ee;
}
ie(
  qc,
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
function Il(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Rl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var A0 = /* @__PURE__ */ oe("<div><!></div>");
const L0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Gc(e, t) {
  fe(t, !1), rt(e, L0);
  const [n, r] = lt(), o = () => te(P, "$panActivationKeyPressed", n), a = () => te(H, "$selectionKeyPressed", n), i = () => te(D, "$selectionRect", n), s = () => te(N, "$elementsSelectable", n), l = () => te(L, "$selectionRectMode", n), u = () => te(O, "$edges", n), c = () => te(k, "$nodeLookup", n), d = () => te(S, "$viewport", n), f = () => te(B, "$selectionMode", n), v = () => te(T, "$dragging", n), m = re(), b = re(), $ = re();
  let _ = w(t, "panOnDrag", 12, void 0), h = w(t, "selectionOnDrag", 12, void 0);
  const x = ta(), {
    nodes: p,
    nodeLookup: k,
    edges: O,
    viewport: S,
    dragging: T,
    elementsSelectable: N,
    selectionRect: D,
    selectionRectMode: L,
    selectionKeyPressed: H,
    selectionMode: B,
    panActivationKeyPressed: P,
    unselectNodesAndEdges: M
  } = Qe();
  let C = re(), E = null, V = [], I = !1;
  function Y(se) {
    if (I) {
      I = !1;
      return;
    }
    x("paneclick", { event: se }), M(), L.set(null);
  }
  function F(se) {
    var be, Fe;
    if (E = g(C).getBoundingClientRect(), !N || !g(b) || se.button !== 0 || se.target !== g(C) || !E)
      return;
    (Fe = (be = se.target) == null ? void 0 : be.setPointerCapture) == null || Fe.call(be, se.pointerId);
    const { x: Ye, y: Ze } = Wn(se, E);
    M(), D.set({
      width: 0,
      height: 0,
      startX: Ye,
      startY: Ze,
      x: Ye,
      y: Ze
    });
  }
  function G(se) {
    if (!g(b) || !E || !i())
      return;
    I = !0;
    const be = Wn(se, E), Fe = i().startX ?? 0, Ye = i().startY ?? 0, Ze = {
      ...i(),
      x: be.x < Fe ? be.x : Fe,
      y: be.y < Ye ? be.y : Ye,
      width: Math.abs(be.x - Fe),
      height: Math.abs(be.y - Ye)
    }, K = V.map((Ae) => Ae.id), pe = Fa(V, u()).map((Ae) => Ae.id);
    V = mc(
      c(),
      Ze,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Vi.Partial,
      !0
    );
    const me = Fa(V, u()).map((Ae) => Ae.id), Le = V.map((Ae) => Ae.id);
    (K.length !== Le.length || Le.some((Ae) => !K.includes(Ae))) && p.update((Ae) => Ae.map(Rl(Le))), (pe.length !== me.length || me.some((Ae) => !pe.includes(Ae))) && O.update((Ae) => Ae.map(Rl(me))), L.set("user"), D.set(Ze);
  }
  function ae(se) {
    var be, Fe;
    se.button === 0 && ((Fe = (be = se.target) == null ? void 0 : be.releasePointerCapture) == null || Fe.call(be, se.pointerId), !g(b) && l() === "user" && se.target === g(C) && (Y == null || Y(se)), D.set(null), V.length > 0 && Ei(L, "nodes"), a() && (I = !1));
  }
  const ee = (se) => {
    var be;
    if (Array.isArray(g(m)) && (be = g(m)) != null && be.includes(2)) {
      se.preventDefault();
      return;
    }
    x("panecontextmenu", { event: se });
  };
  de(
    () => (o(), Q(_())),
    () => {
      U(m, o() || _());
    }
  ), de(
    () => (a(), i(), Q(h()), g(m)),
    () => {
      U(b, a() || i() || h() && g(m) !== !0);
    }
  ), de(
    () => (s(), g(b), l()),
    () => {
      U($, s() && (g(b) || l() === "user"));
    }
  ), _t(), Ie();
  var W = A0(), le = /* @__PURE__ */ He(() => g($) ? void 0 : Il(Y, g(C))), ke = /* @__PURE__ */ He(() => Il(ee, g(C)));
  let $e;
  var he = j(W);
  St(he, t, "default", {}), X(W), jn(W, (se) => U(C, se), () => g(C)), Oe(
    (se) => $e = Dt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, $e, {
      draggable: se,
      dragging: v(),
      selection: g(b)
    }),
    [
      () => _() === !0 || Array.isArray(_()) && _().includes(0)
    ],
    ye
  ), it("click", W, function(...se) {
    var be;
    (be = g(le)) == null || be.apply(this, se);
  }), it("pointerdown", W, function(...se) {
    var be;
    (be = g($) ? F : void 0) == null || be.apply(this, se);
  }), it("pointermove", W, function(...se) {
    var be;
    (be = g($) ? G : void 0) == null || be.apply(this, se);
  }), it("pointerup", W, function(...se) {
    var be;
    (be = g($) ? ae : void 0) == null || be.apply(this, se);
  }), it("contextmenu", W, function(...se) {
    var be;
    (be = g(ke)) == null || be.apply(this, se);
  }), A(e, W);
  var Ne = ve({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(se) {
      _(se), y();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(se) {
      h(se), y();
    }
  });
  return r(), Ne;
}
ie(Gc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var I0 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const R0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Uc(e, t) {
  fe(t, !1), rt(e, R0);
  const [n, r] = lt(), o = () => te(a, "$viewport", n), { viewport: a } = Qe();
  Ie();
  var i = I0(), s = j(i);
  St(s, t, "default", {}), X(i), Oe(() => ce(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), A(e, i), ve(), r();
}
ie(Uc, {}, ["default"], [], !0);
function Zi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = n0({
    onDrag: r,
    onDragStart: o,
    onDragStop: a,
    onNodeMouseDown: i,
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
function Z0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
  if (o === void 0 && a === void 0) {
    const i = e ?? n, s = t ?? r;
    return {
      width: i ? `width:${i}px;` : "",
      height: s ? `height:${s}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var B0 = /* @__PURE__ */ oe("<div><!></div>");
function Jc(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(ke, "$nodeTypes", n), a = () => te(be, "$elementsSelectable", n), i = () => te(Fe, "$nodesDraggable", n), s = () => te(pe, "$connectableStore", n), l = re(void 0, !0), u = re(void 0, !0), c = re(void 0, !0), d = re(void 0, !0);
  let f = w(t, "node", 13), v = w(t, "id", 13), m = w(t, "data", 29, () => ({})), b = w(t, "selected", 13, !1), $ = w(t, "draggable", 13, void 0), _ = w(t, "selectable", 13, void 0), h = w(t, "connectable", 13, !0), x = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), k = w(t, "dragging", 13, !1), O = w(t, "resizeObserver", 13, null), S = w(t, "style", 13, void 0), T = w(t, "type", 13, "default"), N = w(t, "isParent", 13, !1), D = w(t, "positionX", 13), L = w(t, "positionY", 13), H = w(t, "sourcePosition", 13, void 0), B = w(t, "targetPosition", 13, void 0), P = w(t, "zIndex", 13), M = w(t, "measuredWidth", 13, void 0), C = w(t, "measuredHeight", 13, void 0), E = w(t, "initialWidth", 13, void 0), V = w(t, "initialHeight", 13, void 0), I = w(t, "width", 13, void 0), Y = w(t, "height", 13, void 0), F = w(t, "dragHandle", 13, void 0), G = w(t, "initialized", 13, !1), ae = w(t, "parentId", 13, void 0), ee = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const le = Qe(), {
    nodeTypes: ke,
    nodeDragThreshold: $e,
    selectNodesOnDrag: he,
    handleNodeSelection: Ne,
    updateNodeInternals: se,
    elementsSelectable: be,
    nodesDraggable: Fe
  } = le;
  let Ye = re(void 0, !0), Ze = re(null, !0);
  const K = ta(), pe = xe(h());
  let me = re(void 0, !0), Le = re(void 0, !0), Ae = re(void 0, !0);
  jr("svelteflow__node_id", v()), jr("svelteflow__node_connectable", pe), ys(() => {
    var ne;
    g(Ze) && ((ne = O()) == null || ne.unobserve(g(Ze)));
  });
  function Ue(ne) {
    _() && (!q(he) || !$() || q($e) > 0) && Ne(v()), K("nodeclick", { node: f().internals.userNode, event: ne });
  }
  de(() => Q(T()), () => {
    U(l, T() || "default");
  }), de(() => (o(), g(l)), () => {
    U(u, !!o()[g(l)]);
  }), de(
    () => (o(), g(l), Li),
    () => {
      U(c, o()[g(l)] || Li);
    }
  ), de(
    () => (g(u), Q(T())),
    () => {
      g(u) || console.warn("003", Gr.error003(T()));
    }
  ), de(
    () => (Q(I()), Q(Y()), Q(E()), Q(V()), Q(M()), Q(C())),
    () => {
      U(d, Z0({
        width: I(),
        height: Y(),
        initialWidth: E(),
        initialHeight: V(),
        measuredWidth: M(),
        measuredHeight: C()
      }));
    }
  ), de(() => Q(h()), () => {
    pe.set(!!h());
  }), de(
    () => (g(me), g(l), g(Le), Q(H()), g(Ae), Q(B()), Q(v()), g(Ye)),
    () => {
      (g(me) && g(l) !== g(me) || g(Le) && H() !== g(Le) || g(Ae) && B() !== g(Ae)) && requestAnimationFrame(() => se(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Ye),
            force: !0
          }
        ]
      ]))), U(me, g(l)), U(Le, H()), U(Ae, B());
    }
  ), de(
    () => (Q(O()), g(Ye), g(Ze), Q(G())),
    () => {
      O() && (g(Ye) !== g(Ze) || !G()) && (g(Ze) && O().unobserve(g(Ze)), g(Ye) && O().observe(g(Ye)), U(Ze, g(Ye)));
    }
  ), _t(), Ie(!0);
  var De = st(), qe = _e(De);
  {
    var ut = (ne) => {
      var Ke = B0();
      let ge;
      var Gt = j(Ke);
      const Rt = /* @__PURE__ */ ye(() => b() ?? !1), sn = /* @__PURE__ */ ye(() => _() ?? a() ?? !0), Me = /* @__PURE__ */ ye(() => x() ?? !0), at = /* @__PURE__ */ ye(() => $() ?? i() ?? !0);
      Hu(Gt, () => g(c), (we, ct) => {
        ct(we, {
          get data() {
            return m();
          },
          get id() {
            return v();
          },
          get selected() {
            return g(Rt);
          },
          get selectable() {
            return g(sn);
          },
          get deletable() {
            return g(Me);
          },
          get sourcePosition() {
            return H();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return P();
          },
          get dragging() {
            return k();
          },
          get draggable() {
            return g(at);
          },
          get dragHandle() {
            return F();
          },
          get parentId() {
            return ae();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return s();
          },
          get positionAbsoluteX() {
            return D();
          },
          get positionAbsoluteY() {
            return L();
          },
          get width() {
            return I();
          },
          get height() {
            return Y();
          }
        });
      }), X(Ke), Pt(Ke, (we, ct) => Zi == null ? void 0 : Zi(we, ct), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: F(),
        noDragClass: "nodrag",
        nodeClickDistance: ee(),
        onNodeMouseDown: Ne,
        onDrag: (we, ct, vt, Zt) => {
          K("nodedrag", { event: we, targetNode: vt, nodes: Zt });
        },
        onDragStart: (we, ct, vt, Zt) => {
          K("nodedragstart", { event: we, targetNode: vt, nodes: Zt });
        },
        onDragStop: (we, ct, vt, Zt) => {
          K("nodedragstop", { event: we, targetNode: vt, nodes: Zt });
        },
        store: le
      })), jn(Ke, (we) => U(Ye, we), () => g(Ye)), en(() => it("click", Ke, Ue)), en(() => it("mouseenter", Ke, (we) => K("nodemouseenter", { node: f(), event: we }))), en(() => it("mouseleave", Ke, (we) => K("nodemouseleave", { node: f(), event: we }))), en(() => it("mousemove", Ke, (we) => K("nodemousemove", { node: f(), event: we }))), en(() => it("contextmenu", Ke, (we) => K("nodecontextmenu", { node: f(), event: we }))), Oe(
        (we) => {
          ce(Ke, "data-id", v()), ge = Dt(Ke, 1, zn(we), null, ge, {
            dragging: k(),
            selected: b(),
            draggable: $(),
            connectable: h(),
            selectable: _(),
            nopan: $(),
            parent: N()
          }), ce(Ke, "style", `${S() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), pt(Ke, "z-index", P()), pt(Ke, "transform", `translate(${D() ?? ""}px, ${L() ?? ""}px)`), pt(Ke, "visibility", G() ? "visible" : "hidden");
        },
        [
          () => It([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])
        ],
        ye
      ), A(ne, Ke);
    };
    Ee(qe, (ne) => {
      p() || ne(ut);
    });
  }
  A(e, De);
  var bt = ve({
    get node() {
      return f();
    },
    set node(ne) {
      f(ne), y();
    },
    get id() {
      return v();
    },
    set id(ne) {
      v(ne), y();
    },
    get data() {
      return m();
    },
    set data(ne) {
      m(ne), y();
    },
    get selected() {
      return b();
    },
    set selected(ne) {
      b(ne), y();
    },
    get draggable() {
      return $();
    },
    set draggable(ne) {
      $(ne), y();
    },
    get selectable() {
      return _();
    },
    set selectable(ne) {
      _(ne), y();
    },
    get connectable() {
      return h();
    },
    set connectable(ne) {
      h(ne), y();
    },
    get deletable() {
      return x();
    },
    set deletable(ne) {
      x(ne), y();
    },
    get hidden() {
      return p();
    },
    set hidden(ne) {
      p(ne), y();
    },
    get dragging() {
      return k();
    },
    set dragging(ne) {
      k(ne), y();
    },
    get resizeObserver() {
      return O();
    },
    set resizeObserver(ne) {
      O(ne), y();
    },
    get style() {
      return S();
    },
    set style(ne) {
      S(ne), y();
    },
    get type() {
      return T();
    },
    set type(ne) {
      T(ne), y();
    },
    get isParent() {
      return N();
    },
    set isParent(ne) {
      N(ne), y();
    },
    get positionX() {
      return D();
    },
    set positionX(ne) {
      D(ne), y();
    },
    get positionY() {
      return L();
    },
    set positionY(ne) {
      L(ne), y();
    },
    get sourcePosition() {
      return H();
    },
    set sourcePosition(ne) {
      H(ne), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(ne) {
      B(ne), y();
    },
    get zIndex() {
      return P();
    },
    set zIndex(ne) {
      P(ne), y();
    },
    get measuredWidth() {
      return M();
    },
    set measuredWidth(ne) {
      M(ne), y();
    },
    get measuredHeight() {
      return C();
    },
    set measuredHeight(ne) {
      C(ne), y();
    },
    get initialWidth() {
      return E();
    },
    set initialWidth(ne) {
      E(ne), y();
    },
    get initialHeight() {
      return V();
    },
    set initialHeight(ne) {
      V(ne), y();
    },
    get width() {
      return I();
    },
    set width(ne) {
      I(ne), y();
    },
    get height() {
      return Y();
    },
    set height(ne) {
      Y(ne), y();
    },
    get dragHandle() {
      return F();
    },
    set dragHandle(ne) {
      F(ne), y();
    },
    get initialized() {
      return G();
    },
    set initialized(ne) {
      G(ne), y();
    },
    get parentId() {
      return ae();
    },
    set parentId(ne) {
      ae(ne), y();
    },
    get nodeClickDistance() {
      return ee();
    },
    set nodeClickDistance(ne) {
      ee(ne), y();
    },
    get class() {
      return W();
    },
    set class(ne) {
      W(ne), y();
    }
  });
  return r(), bt;
}
ie(
  Jc,
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
var Y0 = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const W0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Qc(e, t) {
  fe(t, !1), rt(e, W0);
  const [n, r] = lt(), o = () => te(c, "$visibleNodes", n), a = () => te(d, "$nodesDraggable", n), i = () => te(v, "$elementsSelectable", n), s = () => te(f, "$nodesConnectable", n), l = () => te(b, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: m,
    parentLookup: b
  } = Qe(), $ = typeof ResizeObserver > "u" ? null : new ResizeObserver((x) => {
    const p = /* @__PURE__ */ new Map();
    x.forEach((k) => {
      const O = k.target.getAttribute("data-id");
      p.set(O, { id: O, nodeElement: k.target, force: !0 });
    }), m(p);
  });
  ys(() => {
    $ == null || $.disconnect();
  }), Ie();
  var _ = Y0();
  rn(_, 5, o, (x) => x.id, (x, p) => {
    const k = /* @__PURE__ */ ye(() => !!g(p).selected), O = /* @__PURE__ */ ye(() => !!g(p).hidden), S = /* @__PURE__ */ ye(() => !!(g(p).draggable || a() && typeof g(p).draggable > "u")), T = /* @__PURE__ */ ye(() => !!(g(p).selectable || i() && typeof g(p).selectable > "u")), N = /* @__PURE__ */ ye(() => !!(g(p).connectable || s() && typeof g(p).connectable > "u")), D = /* @__PURE__ */ ye(() => g(p).deletable ?? !0), L = /* @__PURE__ */ ye(() => l().has(g(p).id)), H = /* @__PURE__ */ ye(() => g(p).type ?? "default"), B = /* @__PURE__ */ ye(() => g(p).internals.z ?? 0), P = /* @__PURE__ */ ye(() => kc(g(p)));
    Jc(x, {
      get node() {
        return g(p);
      },
      get id() {
        return g(p).id;
      },
      get data() {
        return g(p).data;
      },
      get selected() {
        return g(k);
      },
      get hidden() {
        return g(O);
      },
      get draggable() {
        return g(S);
      },
      get selectable() {
        return g(T);
      },
      get connectable() {
        return g(N);
      },
      get deletable() {
        return g(D);
      },
      get positionX() {
        return g(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(L);
      },
      get style() {
        return g(p).style;
      },
      get class() {
        return g(p).class;
      },
      get type() {
        return g(H);
      },
      get sourcePosition() {
        return g(p).sourcePosition;
      },
      get targetPosition() {
        return g(p).targetPosition;
      },
      get dragging() {
        return g(p).dragging;
      },
      get zIndex() {
        return g(B);
      },
      get dragHandle() {
        return g(p).dragHandle;
      },
      get initialized() {
        return g(P);
      },
      get width() {
        return g(p).width;
      },
      get height() {
        return g(p).height;
      },
      get initialWidth() {
        return g(p).initialWidth;
      },
      get initialHeight() {
        return g(p).initialHeight;
      },
      get measuredWidth() {
        return g(p).measured.width;
      },
      get measuredHeight() {
        return g(p).measured.height;
      },
      get parentId() {
        return g(p).parentId;
      },
      resizeObserver: $,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(M) {
          Xe.call(this, t, M);
        },
        nodemouseenter(M) {
          Xe.call(this, t, M);
        },
        nodemousemove(M) {
          Xe.call(this, t, M);
        },
        nodemouseleave(M) {
          Xe.call(this, t, M);
        },
        nodedrag(M) {
          Xe.call(this, t, M);
        },
        nodedragstart(M) {
          Xe.call(this, t, M);
        },
        nodedragstop(M) {
          Xe.call(this, t, M);
        },
        nodecontextmenu(M) {
          Xe.call(this, t, M);
        }
      }
    });
  }), X(_), A(e, _);
  var h = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(x) {
      u(x), y();
    }
  });
  return r(), h;
}
ie(Qc, { nodeClickDistance: {} }, [], [], !0);
var K0 = /* @__PURE__ */ Ce('<svg><g role="img"><!></g></svg>');
function ed(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(W, "$edgeTypes", n), a = () => te(le, "$flowId", n), i = () => te(ke, "$elementsSelectable", n), s = () => te(ee, "$edgeLookup", n), l = re(void 0, !0), u = re(void 0, !0), c = re(void 0, !0), d = re(void 0, !0), f = re(void 0, !0);
  let v = w(t, "id", 13), m = w(t, "type", 13, "default"), b = w(t, "source", 13, ""), $ = w(t, "target", 13, ""), _ = w(t, "data", 29, () => ({})), h = w(t, "style", 13, void 0), x = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), k = w(t, "selected", 13, !1), O = w(t, "selectable", 13, void 0), S = w(t, "deletable", 13, void 0), T = w(t, "hidden", 13, !1), N = w(t, "label", 13, void 0), D = w(t, "labelStyle", 13, void 0), L = w(t, "markerStart", 13, void 0), H = w(t, "markerEnd", 13, void 0), B = w(t, "sourceHandle", 13, void 0), P = w(t, "targetHandle", 13, void 0), M = w(t, "sourceX", 13), C = w(t, "sourceY", 13), E = w(t, "targetX", 13), V = w(t, "targetY", 13), I = w(t, "sourcePosition", 13), Y = w(t, "targetPosition", 13), F = w(t, "ariaLabel", 13, void 0), G = w(t, "interactionWidth", 13, void 0), ae = w(t, "class", 13, "");
  jr("svelteflow__edge_id", v());
  const {
    edgeLookup: ee,
    edgeTypes: W,
    flowId: le,
    elementsSelectable: ke
  } = Qe(), $e = ta(), he = Zc();
  function Ne(K) {
    const pe = s().get(v());
    pe && (he(v()), $e("edgeclick", { event: K, edge: pe }));
  }
  function se(K, pe) {
    const me = s().get(v());
    me && $e(pe, { event: K, edge: me });
  }
  de(() => Q(m()), () => {
    U(l, m() || "default");
  }), de(
    () => (o(), g(l), Ri),
    () => {
      U(u, o()[g(l)] || Ri);
    }
  ), de(
    () => (Q(L()), a()),
    () => {
      U(c, L() ? `url('#${Ua(L(), a())}')` : void 0);
    }
  ), de(
    () => (Q(H()), a()),
    () => {
      U(d, H() ? `url('#${Ua(H(), a())}')` : void 0);
    }
  ), de(
    () => (Q(O()), i()),
    () => {
      U(f, O() ?? i());
    }
  ), _t(), Ie(!0);
  var be = st(), Fe = _e(be);
  {
    var Ye = (K) => {
      var pe = K0(), me = j(pe);
      let Le;
      var Ae = j(me);
      const Ue = /* @__PURE__ */ ye(() => S() ?? !0);
      Hu(Ae, () => g(u), (De, qe) => {
        qe(De, {
          get id() {
            return v();
          },
          get source() {
            return b();
          },
          get target() {
            return $();
          },
          get sourceX() {
            return M();
          },
          get sourceY() {
            return C();
          },
          get targetX() {
            return E();
          },
          get targetY() {
            return V();
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return Y();
          },
          get animated() {
            return p();
          },
          get selected() {
            return k();
          },
          get label() {
            return N();
          },
          get labelStyle() {
            return D();
          },
          get data() {
            return _();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return G();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Ue);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return B();
          },
          get targetHandleId() {
            return P();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), X(me), X(pe), Oe(
        (De) => {
          pt(pe, "z-index", x()), Le = Dt(me, 0, zn(De), null, Le, {
            animated: p(),
            selected: k(),
            selectable: g(f)
          }), ce(me, "data-id", v()), ce(me, "aria-label", F() === null ? void 0 : F() ? F() : `Edge from ${b()} to ${$()}`);
        },
        [
          () => It(["svelte-flow__edge", ae()])
        ],
        ye
      ), it("click", me, Ne), it("contextmenu", me, (De) => {
        se(De, "edgecontextmenu");
      }), it("mouseenter", me, (De) => {
        se(De, "edgemouseenter");
      }), it("mouseleave", me, (De) => {
        se(De, "edgemouseleave");
      }), A(K, pe);
    };
    Ee(Fe, (K) => {
      T() || K(Ye);
    });
  }
  A(e, be);
  var Ze = ve({
    get id() {
      return v();
    },
    set id(K) {
      v(K), y();
    },
    get type() {
      return m();
    },
    set type(K) {
      m(K), y();
    },
    get source() {
      return b();
    },
    set source(K) {
      b(K), y();
    },
    get target() {
      return $();
    },
    set target(K) {
      $(K), y();
    },
    get data() {
      return _();
    },
    set data(K) {
      _(K), y();
    },
    get style() {
      return h();
    },
    set style(K) {
      h(K), y();
    },
    get zIndex() {
      return x();
    },
    set zIndex(K) {
      x(K), y();
    },
    get animated() {
      return p();
    },
    set animated(K) {
      p(K), y();
    },
    get selected() {
      return k();
    },
    set selected(K) {
      k(K), y();
    },
    get selectable() {
      return O();
    },
    set selectable(K) {
      O(K), y();
    },
    get deletable() {
      return S();
    },
    set deletable(K) {
      S(K), y();
    },
    get hidden() {
      return T();
    },
    set hidden(K) {
      T(K), y();
    },
    get label() {
      return N();
    },
    set label(K) {
      N(K), y();
    },
    get labelStyle() {
      return D();
    },
    set labelStyle(K) {
      D(K), y();
    },
    get markerStart() {
      return L();
    },
    set markerStart(K) {
      L(K), y();
    },
    get markerEnd() {
      return H();
    },
    set markerEnd(K) {
      H(K), y();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(K) {
      B(K), y();
    },
    get targetHandle() {
      return P();
    },
    set targetHandle(K) {
      P(K), y();
    },
    get sourceX() {
      return M();
    },
    set sourceX(K) {
      M(K), y();
    },
    get sourceY() {
      return C();
    },
    set sourceY(K) {
      C(K), y();
    },
    get targetX() {
      return E();
    },
    set targetX(K) {
      E(K), y();
    },
    get targetY() {
      return V();
    },
    set targetY(K) {
      V(K), y();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(K) {
      I(K), y();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(K) {
      Y(K), y();
    },
    get ariaLabel() {
      return F();
    },
    set ariaLabel(K) {
      F(K), y();
    },
    get interactionWidth() {
      return G();
    },
    set interactionWidth(K) {
      G(K), y();
    },
    get class() {
      return ae();
    },
    set class(K) {
      ae(K), y();
    }
  });
  return r(), Ze;
}
ie(
  ed,
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
function td(e, t) {
  fe(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Vn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ie(), ve({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), y();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), y();
    }
  });
}
ie(td, { onMount: {}, onDestroy: {} }, [], [], !0);
var X0 = /* @__PURE__ */ Ce("<defs></defs>");
function nd(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(a, "$markers", n), { markers: a } = Qe();
  Ie();
  var i = X0();
  rn(i, 5, o, (s) => s.id, (s, l) => {
    rd(s, xt(() => g(l)));
  }), X(i), A(e, i), ve(), r();
}
ie(nd, {}, [], [], !0);
var j0 = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), F0 = /* @__PURE__ */ Ce('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), q0 = /* @__PURE__ */ Ce('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function rd(e, t) {
  fe(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), a = w(t, "height", 12, 12.5), i = w(t, "markerUnits", 12, "strokeWidth"), s = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ie();
  var c = q0(), d = j(c);
  {
    var f = (m) => {
      var b = j0();
      Oe(() => {
        ce(b, "stroke", l()), ce(b, "stroke-width", u());
      }), A(m, b);
    }, v = (m, b) => {
      {
        var $ = (_) => {
          var h = F0();
          Oe(() => {
            ce(h, "stroke", l()), ce(h, "stroke-width", u()), ce(h, "fill", l());
          }), A(_, h);
        };
        Ee(
          m,
          (_) => {
            r() === zo.ArrowClosed && _($);
          },
          b
        );
      }
    };
    Ee(d, (m) => {
      r() === zo.Arrow ? m(f) : m(v, !1);
    });
  }
  return X(c), Oe(() => {
    ce(c, "id", n()), ce(c, "markerWidth", `${o()}`), ce(c, "markerHeight", `${a()}`), ce(c, "markerUnits", i()), ce(c, "orient", s());
  }), A(e, c), ve({
    get id() {
      return n();
    },
    set id(m) {
      n(m), y();
    },
    get type() {
      return r();
    },
    set type(m) {
      r(m), y();
    },
    get width() {
      return o();
    },
    set width(m) {
      o(m), y();
    },
    get height() {
      return a();
    },
    set height(m) {
      a(m), y();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(m) {
      i(m), y();
    },
    get orient() {
      return s();
    },
    set orient(m) {
      s(m), y();
    },
    get color() {
      return l();
    },
    set color(m) {
      l(m), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(m) {
      u(m), y();
    }
  });
}
ie(
  rd,
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
var G0 = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function od(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(s, "$visibleEdges", n), a = () => te(c, "$elementsSelectable", n);
  let i = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = Qe();
  Vn(() => {
    i() && u(i());
  }), Ie();
  var d = G0(), f = j(d), v = j(f);
  nd(v, {}), X(f);
  var m = Z(f, 2);
  rn(m, 1, o, (h) => h.id, (h, x) => {
    const p = /* @__PURE__ */ ye(() => g(x).selectable ?? a()), k = /* @__PURE__ */ ye(() => g(x).type || "default");
    ed(h, {
      get id() {
        return g(x).id;
      },
      get source() {
        return g(x).source;
      },
      get target() {
        return g(x).target;
      },
      get data() {
        return g(x).data;
      },
      get style() {
        return g(x).style;
      },
      get animated() {
        return g(x).animated;
      },
      get selected() {
        return g(x).selected;
      },
      get selectable() {
        return g(p);
      },
      get deletable() {
        return g(x).deletable;
      },
      get hidden() {
        return g(x).hidden;
      },
      get label() {
        return g(x).label;
      },
      get labelStyle() {
        return g(x).labelStyle;
      },
      get markerStart() {
        return g(x).markerStart;
      },
      get markerEnd() {
        return g(x).markerEnd;
      },
      get sourceHandle() {
        return g(x).sourceHandle;
      },
      get targetHandle() {
        return g(x).targetHandle;
      },
      get sourceX() {
        return g(x).sourceX;
      },
      get sourceY() {
        return g(x).sourceY;
      },
      get targetX() {
        return g(x).targetX;
      },
      get targetY() {
        return g(x).targetY;
      },
      get sourcePosition() {
        return g(x).sourcePosition;
      },
      get targetPosition() {
        return g(x).targetPosition;
      },
      get ariaLabel() {
        return g(x).ariaLabel;
      },
      get interactionWidth() {
        return g(x).interactionWidth;
      },
      get class() {
        return g(x).class;
      },
      get type() {
        return g(k);
      },
      get zIndex() {
        return g(x).zIndex;
      },
      $$events: {
        edgeclick(O) {
          Xe.call(this, t, O);
        },
        edgecontextmenu(O) {
          Xe.call(this, t, O);
        },
        edgemouseenter(O) {
          Xe.call(this, t, O);
        },
        edgemouseleave(O) {
          Xe.call(this, t, O);
        }
      }
    });
  });
  var b = Z(m, 2);
  {
    var $ = (h) => {
      td(h, {
        onMount: () => {
          Ei(l, !0);
        },
        onDestroy: () => {
          Ei(l, !1);
        }
      });
    };
    Ee(b, (h) => {
      o().length > 0 && h($);
    });
  }
  X(d), A(e, d);
  var _ = ve({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(h) {
      i(h), y();
    }
  });
  return r(), _;
}
ie(od, { defaultEdgeOptions: {} }, [], [], !0);
var U0 = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const J0 = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function zs(e, t) {
  fe(t, !1), rt(e, J0);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "isVisible", 12, !0);
  var s = st(), l = _e(s);
  {
    var u = (c) => {
      var d = U0();
      Oe(() => {
        pt(d, "width", typeof o() == "string" ? o() : `${o()}px`), pt(d, "height", typeof a() == "string" ? a() : `${a()}px`), pt(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), A(c, d);
    };
    Ee(l, (c) => {
      i() && c(u);
    });
  }
  return A(e, s), ve({
    get x() {
      return n();
    },
    set x(c) {
      n(c), y();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), y();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), y();
    },
    get height() {
      return a();
    },
    set height(c) {
      a(c), y();
    },
    get isVisible() {
      return i();
    },
    set isVisible(c) {
      i(c), y();
    }
  });
}
ie(
  zs,
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
function id(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(i, "$selectionRect", n), a = () => te(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = Qe();
  Ie();
  const l = /* @__PURE__ */ ye(() => !!(o() && a() === "user")), u = /* @__PURE__ */ ye(() => {
    var v;
    return (v = o()) == null ? void 0 : v.width;
  }), c = /* @__PURE__ */ ye(() => {
    var v;
    return (v = o()) == null ? void 0 : v.height;
  }), d = /* @__PURE__ */ ye(() => {
    var v;
    return (v = o()) == null ? void 0 : v.x;
  }), f = /* @__PURE__ */ ye(() => {
    var v;
    return (v = o()) == null ? void 0 : v.y;
  });
  zs(e, {
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
ie(id, {}, [], [], !0);
var Q0 = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const em = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function ad(e, t) {
  fe(t, !1), rt(e, em);
  const [n, r] = lt(), o = () => te(l, "$selectionRectMode", n), a = () => te(c, "$nodeLookup", n), i = () => te(u, "$nodes", n), s = Qe(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = ta();
  let f = re(null);
  function v(h) {
    const x = i().filter((p) => p.selected);
    d("selectioncontextmenu", { nodes: x, event: h });
  }
  function m(h) {
    const x = i().filter((p) => p.selected);
    d("selectionclick", { nodes: x, event: h });
  }
  de(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (U(f, Wo(a(), { filter: (h) => !!h.selected })), i());
    }
  ), _t(), Ie();
  var b = st(), $ = _e(b);
  {
    var _ = (h) => {
      var x = Q0(), p = j(x);
      zs(p, { width: "100%", height: "100%", x: 0, y: 0 }), X(x), Pt(x, (k, O) => Zi == null ? void 0 : Zi(k, O), () => ({
        disabled: !1,
        store: s,
        onDrag: (k, O, S, T) => {
          d("nodedrag", { event: k, targetNode: null, nodes: T });
        },
        onDragStart: (k, O, S, T) => {
          d("nodedragstart", { event: k, targetNode: null, nodes: T });
        },
        onDragStop: (k, O, S, T) => {
          d("nodedragstop", { event: k, targetNode: null, nodes: T });
        }
      })), en(() => it("contextmenu", x, v)), en(() => it("click", x, m)), en(() => it("keyup", x, () => {
      })), Oe(() => ce(x, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), A(h, x);
    };
    Ee($, (h) => {
      o() === "nodes" && g(f) && Zn(g(f).x) && Zn(g(f).y) && h(_);
    });
  }
  A(e, b), ve(), r();
}
ie(ad, {}, [], [], !0);
function wt(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function a(i) {
    const s = Array.isArray(r) ? r : [r], l = {
      alt: i.altKey,
      ctrl: i.ctrlKey,
      shift: i.shiftKey,
      meta: i.metaKey
    };
    for (const u of s) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: v, preventDefault: m, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          ($) => typeof $ == "string" ? [$] : $
        ).some(
          ($) => $.every((_) => l[_])
        ))
          continue;
        if (i.key === f) {
          m && i.preventDefault();
          const $ = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: $ })), v == null || v($);
        }
      }
    }
  }
  return n && e.addEventListener(o, a), {
    update: (i) => {
      const { enabled: s = !0, type: l = "keydown" } = i;
      n && (!s || o !== l) ? e.removeEventListener(o, a) : !n && s && e.addEventListener(l, a), n = s, o = l, r = i.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, a);
    }
  };
}
function sd(e, t) {
  fe(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Di() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), a = w(t, "panActivationKey", 12, " "), i = w(t, "zoomActivationKey", 28, () => Di() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = Qe();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function m(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function $(h, x) {
    return (Array.isArray(h) ? h : [h]).map((p) => {
      const k = b(p);
      return {
        key: k,
        modifier: m(p),
        enabled: k !== null,
        callback: x
      };
    });
  }
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ie(), it("blur", Kt, _), it("contextmenu", Kt, _), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(n(), () => s.set(!0)),
    type: "keydown"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(n(), () => s.set(!1)),
    type: "keyup"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(r(), () => l.set(!0)),
    type: "keydown"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(r(), () => l.set(!1)),
    type: "keyup"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Vh(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(o(), () => u.set(!1)),
    type: "keyup"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(a(), () => c.set(!0)),
    type: "keydown"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(a(), () => c.set(!1)),
    type: "keyup"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(i(), () => d.set(!0)),
    type: "keydown"
  })), Pt(Kt, (h, x) => wt == null ? void 0 : wt(h, x), () => ({
    trigger: $(i(), () => d.set(!1)),
    type: "keyup"
  })), ve({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), y();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(h) {
      a(h), y();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(h) {
      i(h), y();
    }
  });
}
ie(
  sd,
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
var tm = /* @__PURE__ */ Ce('<path fill="none" class="svelte-flow__connection-path"></path>'), nm = /* @__PURE__ */ Ce('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function ld(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(v, "$connection", n), a = () => te(m, "$connectionLineType", n), i = () => te(d, "$width", n), s = () => te(f, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: m
  } = Qe();
  let b = re(null);
  de(
    () => (o(), Q(c()), a(), g(b), Ga),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: k, fromPosition: O, toPosition: S } = o(), T = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: O,
          targetX: k.x,
          targetY: k.y,
          targetPosition: S
        };
        switch (a()) {
          case Br.Bezier:
            ((N) => U(b, N[0]))(Cc(T));
            break;
          case Br.Step:
            ((N) => U(b, N[0]))(Ai({ ...T, borderRadius: 0 }));
            break;
          case Br.SmoothStep:
            ((N) => U(b, N[0]))(Ai(T));
            break;
          default:
            ((N) => U(b, N[0]))(Ga(T));
        }
      }
    }
  ), _t(), Ie();
  var $ = st(), _ = _e($);
  {
    var h = (p) => {
      var k = nm(), O = j(k), S = j(O);
      St(S, t, "connectionLine", {});
      var T = Z(S);
      {
        var N = (D) => {
          var L = tm();
          Oe(() => {
            ce(L, "d", g(b)), ce(L, "style", u());
          }), A(D, L);
        };
        Ee(T, (D) => {
          c() || D(N);
        });
      }
      X(O), X(k), Oe(
        (D) => {
          ce(k, "width", i()), ce(k, "height", s()), ce(k, "style", l()), Dt(O, 0, zn(D));
        },
        [
          () => It([
            "svelte-flow__connection",
            Ch(o().isValid)
          ])
        ],
        ye
      ), A(p, k);
    };
    Ee(_, (p) => {
      o().inProgress && p(h);
    });
  }
  A(e, $);
  var x = ve({
    get containerStyle() {
      return l();
    },
    set containerStyle(p) {
      l(p), y();
    },
    get style() {
      return u();
    },
    set style(p) {
      u(p), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(p) {
      c(p), y();
    }
  });
  return r(), x;
}
ie(
  ld,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var rm = /* @__PURE__ */ oe("<div><!></div>");
function jo(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ft(n, ["position", "style", "class"]);
  fe(t, !1);
  const [o, a] = lt(), i = () => te(d, "$selectionRectMode", o), s = re();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = Qe();
  de(() => Q(l()), () => {
    U(s, `${l()}`.split("-"));
  }), _t(), Ie();
  var f = rm();
  let v;
  var m = j(f);
  St(m, t, "default", {}), X(f), Oe(
    ($) => {
      v = wn(f, v, {
        class: $,
        style: u(),
        ...r
      }), pt(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => It([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    ye
  ), A(e, f);
  var b = ve({
    get position() {
      return l();
    },
    set position($) {
      l($), y();
    },
    get style() {
      return u();
    },
    set style($) {
      u($), y();
    },
    get class() {
      return c();
    },
    set class($) {
      c($), y();
    }
  });
  return a(), b;
}
ie(jo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var om = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function ud(e, t) {
  fe(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ie();
  var o = st(), a = _e(o);
  {
    var i = (s) => {
      jo(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = om();
          A(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return A(e, o), ve({
    get proOptions() {
      return n();
    },
    set proOptions(s) {
      n(s), y();
    },
    get position() {
      return r();
    },
    set position(s) {
      r(s), y();
    }
  });
}
ie(ud, { proOptions: {}, position: {} }, [], [], !0);
function Zl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const im = (e) => Object.keys(e);
function Bl(e, t) {
  im(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function am() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function sm(e = "light") {
  return ln("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = am(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var lm = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), um = /* @__PURE__ */ oe("<!> <!>", 1), cm = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const dm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function cd(e, t) {
  const n = Ov(t), r = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = ft(r, [
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
  fe(t, !1), rt(e, dm);
  const [a, i] = lt(), s = () => te(x(), "$viewport", a), l = () => te(uo, "$initialized", a), u = () => te(g(c), "$colorModeClass", a), c = re();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), v = w(t, "edges", 12), m = w(t, "fitView", 12, void 0), b = w(t, "fitViewOptions", 12, void 0), $ = w(t, "minZoom", 12, void 0), _ = w(t, "maxZoom", 12, void 0), h = w(t, "initialViewport", 12, void 0), x = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), k = w(t, "edgeTypes", 12, void 0), O = w(t, "selectionKey", 12, void 0), S = w(t, "selectionMode", 12, void 0), T = w(t, "panActivationKey", 12, void 0), N = w(t, "multiSelectionKey", 12, void 0), D = w(t, "zoomActivationKey", 12, void 0), L = w(t, "nodesDraggable", 12, void 0), H = w(t, "nodesConnectable", 12, void 0), B = w(t, "nodeDragThreshold", 12, void 0), P = w(t, "elementsSelectable", 12, void 0), M = w(t, "snapGrid", 12, void 0), C = w(t, "deleteKey", 12, void 0), E = w(t, "connectionRadius", 12, void 0), V = w(t, "connectionLineType", 12, void 0), I = w(t, "connectionMode", 28, () => Er.Strict), Y = w(t, "connectionLineStyle", 12, ""), F = w(t, "connectionLineContainerStyle", 12, ""), G = w(t, "onMoveStart", 12, void 0), ae = w(t, "onMove", 12, void 0), ee = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), le = w(t, "translateExtent", 12, void 0), ke = w(t, "nodeExtent", 12, void 0), $e = w(t, "onlyRenderVisibleElements", 12, void 0), he = w(t, "panOnScrollMode", 28, () => lr.Free), Ne = w(t, "preventScrolling", 12, !0), se = w(t, "zoomOnScroll", 12, !0), be = w(t, "zoomOnDoubleClick", 12, !0), Fe = w(t, "zoomOnPinch", 12, !0), Ye = w(t, "panOnScroll", 12, !1), Ze = w(t, "panOnDrag", 12, !0), K = w(t, "selectionOnDrag", 12, void 0), pe = w(t, "autoPanOnConnect", 12, !0), me = w(t, "autoPanOnNodeDrag", 12, !0), Le = w(t, "onerror", 12, void 0), Ae = w(t, "ondelete", 12, void 0), Ue = w(t, "onedgecreate", 12, void 0), De = w(t, "attributionPosition", 12, void 0), qe = w(t, "proOptions", 12, void 0), ut = w(t, "defaultEdgeOptions", 12, void 0), bt = w(t, "width", 12, void 0), ne = w(t, "height", 12, void 0), Ke = w(t, "colorMode", 12, "light"), ge = w(t, "onconnect", 12, void 0), Gt = w(t, "onconnectstart", 12, void 0), Rt = w(t, "onconnectend", 12, void 0), sn = w(t, "onbeforedelete", 12, void 0), Me = w(t, "oninit", 12, void 0), at = w(t, "nodeOrigin", 12, void 0), we = w(t, "paneClickDistance", 12, 0), ct = w(t, "nodeClickDistance", 12, 0), vt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Zt = w(t, "style", 12, void 0), An = w(t, "class", 12, void 0), Ct = re(), ht = re(), Bt = re();
  const Tt = s() || h(), yt = cv(ca) ? Qe() : V0({
    nodes: q(f()),
    edges: q(v()),
    width: bt(),
    height: ne(),
    fitView: m(),
    nodeOrigin: at(),
    nodeExtent: ke()
  });
  Vn(() => (yt.width.set(g(ht)), yt.height.set(g(Bt)), yt.domNode.set(g(Ct)), yt.syncNodeStores(f()), yt.syncEdgeStores(v()), yt.syncViewport(x()), m() !== void 0 && yt.fitViewOnInit.set(m()), b() && yt.fitViewOptions.set(b()), Zl(yt, {
    nodeTypes: p(),
    edgeTypes: k(),
    minZoom: $(),
    maxZoom: _(),
    translateExtent: le(),
    paneClickDistance: we()
  }), () => {
    yt.reset();
  }));
  const { initialized: uo } = yt;
  let kn = re(!1);
  de(
    () => (g(ht), g(Bt)),
    () => {
      g(ht) !== void 0 && g(Bt) !== void 0 && (yt.width.set(g(ht)), yt.height.set(g(Bt)));
    }
  ), de(
    () => (g(kn), l(), Q(Me())),
    () => {
      var R;
      !g(kn) && l() && ((R = Me()) == null || R(), U(kn, !0));
    }
  ), de(
    () => (Q(d()), Q(V()), Q(E()), Q(S()), Q(M()), Q(vt()), Q(L()), Q(H()), Q(P()), Q($e()), Q(W()), Q(pe()), Q(me()), Q(Le()), Q(Ae()), Q(Ue()), Q(I()), Q(B()), Q(ge()), Q(Gt()), Q(Rt()), Q(sn()), Q(at()), Bl),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: V(),
        connectionRadius: E(),
        selectionMode: S(),
        snapGrid: M(),
        defaultMarkerColor: vt(),
        nodesDraggable: L(),
        nodesConnectable: H(),
        elementsSelectable: P(),
        onlyRenderVisibleElements: $e(),
        isValidConnection: W(),
        autoPanOnConnect: pe(),
        autoPanOnNodeDrag: me(),
        onerror: Le(),
        ondelete: Ae(),
        onedgecreate: Ue(),
        connectionMode: I(),
        nodeDragThreshold: B(),
        onconnect: ge(),
        onconnectstart: Gt(),
        onconnectend: Rt(),
        onbeforedelete: sn(),
        nodeOrigin: at()
      };
      Bl(yt, R);
    }
  ), de(
    () => (Q(p()), Q(k()), Q($()), Q(_()), Q(le()), Q(we())),
    () => {
      Zl(yt, {
        nodeTypes: p(),
        edgeTypes: k(),
        minZoom: $(),
        maxZoom: _(),
        translateExtent: le(),
        paneClickDistance: we()
      });
    }
  ), de(
    () => Q(Ke()),
    () => {
      Iv(U(c, sm(Ke())), "$colorModeClass", a);
    }
  ), _t(), Ie();
  var Ut = cm();
  let hr;
  var mr = j(Ut);
  sd(mr, {
    get selectionKey() {
      return O();
    },
    get deleteKey() {
      return C();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return N();
    },
    get zoomActivationKey() {
      return D();
    }
  });
  var zr = Z(mr, 2);
  const ha = /* @__PURE__ */ ye(() => he() === void 0 ? lr.Free : he()), Jo = /* @__PURE__ */ ye(() => Ne() === void 0 ? !0 : Ne()), Qo = /* @__PURE__ */ ye(() => se() === void 0 ? !0 : se()), ma = /* @__PURE__ */ ye(() => be() === void 0 ? !0 : be()), ya = /* @__PURE__ */ ye(() => Fe() === void 0 ? !0 : Fe()), wa = /* @__PURE__ */ ye(() => Ye() === void 0 ? !1 : Ye()), ba = /* @__PURE__ */ ye(() => Ze() === void 0 ? !0 : Ze()), z = /* @__PURE__ */ ye(() => we() === void 0 ? 0 : we());
  qc(zr, {
    initialViewport: Tt,
    get onMoveStart() {
      return G();
    },
    get onMove() {
      return ae();
    },
    get onMoveEnd() {
      return ee();
    },
    get panOnScrollMode() {
      return g(ha);
    },
    get preventScrolling() {
      return g(Jo);
    },
    get zoomOnScroll() {
      return g(Qo);
    },
    get zoomOnDoubleClick() {
      return g(ma);
    },
    get zoomOnPinch() {
      return g(ya);
    },
    get panOnScroll() {
      return g(wa);
    },
    get panOnDrag() {
      return g(ba);
    },
    get paneClickDistance() {
      return g(z);
    },
    children: (R, et) => {
      const Be = /* @__PURE__ */ ye(() => Ze() === void 0 ? !0 : Ze());
      Gc(R, {
        get panOnDrag() {
          return g(Be);
        },
        get selectionOnDrag() {
          return K();
        },
        $$events: {
          paneclick(ze) {
            Xe.call(this, t, ze);
          },
          panecontextmenu(ze) {
            Xe.call(this, t, ze);
          }
        },
        children: (ze, Et) => {
          var dt = um(), gt = _e(dt);
          Uc(gt, {
            children: (Qn, er) => {
              var kt = lm(), Vr = _e(kt);
              od(Vr, {
                get defaultEdgeOptions() {
                  return ut();
                },
                $$events: {
                  edgeclick(We) {
                    Xe.call(this, t, We);
                  },
                  edgecontextmenu(We) {
                    Xe.call(this, t, We);
                  },
                  edgemouseenter(We) {
                    Xe.call(this, t, We);
                  },
                  edgemouseleave(We) {
                    Xe.call(this, t, We);
                  }
                }
              });
              var ei = Z(Vr, 2);
              ld(ei, {
                get containerStyle() {
                  return F();
                },
                get style() {
                  return Y();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (We, _w) => {
                    var Is = st(), af = _e(Is);
                    St(af, t, "connectionLine", {}), A(We, Is);
                  }
                }
              });
              var ti = Z(ei, 6);
              Qc(ti, {
                get nodeClickDistance() {
                  return ct();
                },
                $$events: {
                  nodeclick(We) {
                    Xe.call(this, t, We);
                  },
                  nodemouseenter(We) {
                    Xe.call(this, t, We);
                  },
                  nodemousemove(We) {
                    Xe.call(this, t, We);
                  },
                  nodemouseleave(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstart(We) {
                    Xe.call(this, t, We);
                  },
                  nodedrag(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstop(We) {
                    Xe.call(this, t, We);
                  },
                  nodecontextmenu(We) {
                    Xe.call(this, t, We);
                  }
                }
              });
              var of = Z(ti, 2);
              ad(of, {
                $$events: {
                  selectionclick(We) {
                    Xe.call(this, t, We);
                  },
                  selectioncontextmenu(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstart(We) {
                    Xe.call(this, t, We);
                  },
                  nodedrag(We) {
                    Xe.call(this, t, We);
                  },
                  nodedragstop(We) {
                    Xe.call(this, t, We);
                  }
                }
              }), A(Qn, kt);
            },
            $$slots: { default: !0 }
          });
          var Yt = Z(gt, 2);
          id(Yt, {}), A(ze, dt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var J = Z(zr, 2);
  ud(J, {
    get proOptions() {
      return qe();
    },
    get position() {
      return De();
    }
  });
  var ue = Z(J, 2);
  St(ue, t, "default", {}), X(Ut), jn(Ut, (R) => U(Ct, R), () => g(Ct)), Oe(
    (R) => hr = wn(
      Ut,
      hr,
      {
        style: Zt(),
        class: R,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => It([
        "svelte-flow",
        An(),
        u()
      ])
    ],
    ye
  ), el(Ut, "clientWidth", (R) => U(ht, R)), el(Ut, "clientHeight", (R) => U(Bt, R)), it("dragover", Ut, function(R) {
    Xe.call(this, t, R);
  }), it("drop", Ut, function(R) {
    Xe.call(this, t, R);
  }), A(e, Ut);
  var Pe = ve({
    get id() {
      return d();
    },
    set id(R) {
      d(R), y();
    },
    get nodes() {
      return f();
    },
    set nodes(R) {
      f(R), y();
    },
    get edges() {
      return v();
    },
    set edges(R) {
      v(R), y();
    },
    get fitView() {
      return m();
    },
    set fitView(R) {
      m(R), y();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(R) {
      b(R), y();
    },
    get minZoom() {
      return $();
    },
    set minZoom(R) {
      $(R), y();
    },
    get maxZoom() {
      return _();
    },
    set maxZoom(R) {
      _(R), y();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(R) {
      h(R), y();
    },
    get viewport() {
      return x();
    },
    set viewport(R) {
      x(R), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(R) {
      p(R), y();
    },
    get edgeTypes() {
      return k();
    },
    set edgeTypes(R) {
      k(R), y();
    },
    get selectionKey() {
      return O();
    },
    set selectionKey(R) {
      O(R), y();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(R) {
      S(R), y();
    },
    get panActivationKey() {
      return T();
    },
    set panActivationKey(R) {
      T(R), y();
    },
    get multiSelectionKey() {
      return N();
    },
    set multiSelectionKey(R) {
      N(R), y();
    },
    get zoomActivationKey() {
      return D();
    },
    set zoomActivationKey(R) {
      D(R), y();
    },
    get nodesDraggable() {
      return L();
    },
    set nodesDraggable(R) {
      L(R), y();
    },
    get nodesConnectable() {
      return H();
    },
    set nodesConnectable(R) {
      H(R), y();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(R) {
      B(R), y();
    },
    get elementsSelectable() {
      return P();
    },
    set elementsSelectable(R) {
      P(R), y();
    },
    get snapGrid() {
      return M();
    },
    set snapGrid(R) {
      M(R), y();
    },
    get deleteKey() {
      return C();
    },
    set deleteKey(R) {
      C(R), y();
    },
    get connectionRadius() {
      return E();
    },
    set connectionRadius(R) {
      E(R), y();
    },
    get connectionLineType() {
      return V();
    },
    set connectionLineType(R) {
      V(R), y();
    },
    get connectionMode() {
      return I();
    },
    set connectionMode(R) {
      I(R), y();
    },
    get connectionLineStyle() {
      return Y();
    },
    set connectionLineStyle(R) {
      Y(R), y();
    },
    get connectionLineContainerStyle() {
      return F();
    },
    set connectionLineContainerStyle(R) {
      F(R), y();
    },
    get onMoveStart() {
      return G();
    },
    set onMoveStart(R) {
      G(R), y();
    },
    get onMove() {
      return ae();
    },
    set onMove(R) {
      ae(R), y();
    },
    get onMoveEnd() {
      return ee();
    },
    set onMoveEnd(R) {
      ee(R), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(R) {
      W(R), y();
    },
    get translateExtent() {
      return le();
    },
    set translateExtent(R) {
      le(R), y();
    },
    get nodeExtent() {
      return ke();
    },
    set nodeExtent(R) {
      ke(R), y();
    },
    get onlyRenderVisibleElements() {
      return $e();
    },
    set onlyRenderVisibleElements(R) {
      $e(R), y();
    },
    get panOnScrollMode() {
      return he();
    },
    set panOnScrollMode(R) {
      he(R), y();
    },
    get preventScrolling() {
      return Ne();
    },
    set preventScrolling(R) {
      Ne(R), y();
    },
    get zoomOnScroll() {
      return se();
    },
    set zoomOnScroll(R) {
      se(R), y();
    },
    get zoomOnDoubleClick() {
      return be();
    },
    set zoomOnDoubleClick(R) {
      be(R), y();
    },
    get zoomOnPinch() {
      return Fe();
    },
    set zoomOnPinch(R) {
      Fe(R), y();
    },
    get panOnScroll() {
      return Ye();
    },
    set panOnScroll(R) {
      Ye(R), y();
    },
    get panOnDrag() {
      return Ze();
    },
    set panOnDrag(R) {
      Ze(R), y();
    },
    get selectionOnDrag() {
      return K();
    },
    set selectionOnDrag(R) {
      K(R), y();
    },
    get autoPanOnConnect() {
      return pe();
    },
    set autoPanOnConnect(R) {
      pe(R), y();
    },
    get autoPanOnNodeDrag() {
      return me();
    },
    set autoPanOnNodeDrag(R) {
      me(R), y();
    },
    get onerror() {
      return Le();
    },
    set onerror(R) {
      Le(R), y();
    },
    get ondelete() {
      return Ae();
    },
    set ondelete(R) {
      Ae(R), y();
    },
    get onedgecreate() {
      return Ue();
    },
    set onedgecreate(R) {
      Ue(R), y();
    },
    get attributionPosition() {
      return De();
    },
    set attributionPosition(R) {
      De(R), y();
    },
    get proOptions() {
      return qe();
    },
    set proOptions(R) {
      qe(R), y();
    },
    get defaultEdgeOptions() {
      return ut();
    },
    set defaultEdgeOptions(R) {
      ut(R), y();
    },
    get width() {
      return bt();
    },
    set width(R) {
      bt(R), y();
    },
    get height() {
      return ne();
    },
    set height(R) {
      ne(R), y();
    },
    get colorMode() {
      return Ke();
    },
    set colorMode(R) {
      Ke(R), y();
    },
    get onconnect() {
      return ge();
    },
    set onconnect(R) {
      ge(R), y();
    },
    get onconnectstart() {
      return Gt();
    },
    set onconnectstart(R) {
      Gt(R), y();
    },
    get onconnectend() {
      return Rt();
    },
    set onconnectend(R) {
      Rt(R), y();
    },
    get onbeforedelete() {
      return sn();
    },
    set onbeforedelete(R) {
      sn(R), y();
    },
    get oninit() {
      return Me();
    },
    set oninit(R) {
      Me(R), y();
    },
    get nodeOrigin() {
      return at();
    },
    set nodeOrigin(R) {
      at(R), y();
    },
    get paneClickDistance() {
      return we();
    },
    set paneClickDistance(R) {
      we(R), y();
    },
    get nodeClickDistance() {
      return ct();
    },
    set nodeClickDistance(R) {
      ct(R), y();
    },
    get defaultMarkerColor() {
      return vt();
    },
    set defaultMarkerColor(R) {
      vt(R), y();
    },
    get style() {
      return Zt();
    },
    set style(R) {
      Zt(R), y();
    },
    get class() {
      return An();
    },
    set class(R) {
      An(R), y();
    }
  });
  return i(), Pe;
}
ie(
  cd,
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
function dd(e, t) {
  fe(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), a = w(t, "initialHeight", 12, void 0), i = w(t, "fitView", 12, void 0), s = w(t, "nodeOrigin", 12, void 0);
  const l = Fc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  jr(ca, { getStore: () => l }), ys(() => {
    l.reset();
  }), Ie();
  var u = st(), c = _e(u);
  return St(c, t, "default", {}), A(e, u), ve({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), y();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), y();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), y();
    },
    get initialHeight() {
      return a();
    },
    set initialHeight(d) {
      a(d), y();
    },
    get fitView() {
      return i();
    },
    set fitView(d) {
      i(d), y();
    },
    get nodeOrigin() {
      return s();
    },
    set nodeOrigin(d) {
      s(d), y();
    }
  });
}
ie(
  dd,
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
var fm = /* @__PURE__ */ oe("<button><!></button>");
function bo(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ft(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  fe(t, !1);
  let o = w(t, "class", 12, void 0), a = w(t, "bgColor", 12, void 0), i = w(t, "bgColorHover", 12, void 0), s = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Ie();
  var c = fm();
  let d;
  var f = j(c);
  return St(f, t, "default", { class: "button-svg" }), X(c), Oe(
    (v) => {
      d = wn(c, d, { type: "button", class: v, ...r }), pt(c, "--xy-controls-button-background-color-props", a()), pt(c, "--xy-controls-button-background-color-hover-props", i()), pt(c, "--xy-controls-button-color-props", s()), pt(c, "--xy-controls-button-color-hover-props", l()), pt(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => It([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    ye
  ), it("click", c, function(v) {
    Xe.call(this, t, v);
  }), A(e, c), ve({
    get class() {
      return o();
    },
    set class(v) {
      o(v), y();
    },
    get bgColor() {
      return a();
    },
    set bgColor(v) {
      a(v), y();
    },
    get bgColorHover() {
      return i();
    },
    set bgColorHover(v) {
      i(v), y();
    },
    get color() {
      return s();
    },
    set color(v) {
      s(v), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(v) {
      l(v), y();
    },
    get borderColor() {
      return u();
    },
    set borderColor(v) {
      u(v), y();
    }
  });
}
ie(
  bo,
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
var vm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function fd(e) {
  var t = vm();
  A(e, t);
}
ie(fd, {}, [], [], !0);
var gm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function vd(e) {
  var t = gm();
  A(e, t);
}
ie(vd, {}, [], [], !0);
var pm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function gd(e) {
  var t = pm();
  A(e, t);
}
ie(gd, {}, [], [], !0);
var hm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function pd(e) {
  var t = hm();
  A(e, t);
}
ie(pd, {}, [], [], !0);
var mm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function hd(e) {
  var t = mm();
  A(e, t);
}
ie(hd, {}, [], [], !0);
var ym = /* @__PURE__ */ oe("<!> <!>", 1), wm = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function md(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(V, "$nodesDraggable", n), a = () => te(I, "$nodesConnectable", n), i = () => te(Y, "$elementsSelectable", n), s = () => te(M, "$viewport", n), l = () => te(C, "$minZoom", n), u = () => te(E, "$maxZoom", n), c = re(), d = re(), f = re(), v = re();
  let m = w(t, "position", 12, "bottom-left"), b = w(t, "showZoom", 12, !0), $ = w(t, "showFitView", 12, !0), _ = w(t, "showLock", 12, !0), h = w(t, "buttonBgColor", 12, void 0), x = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), k = w(t, "buttonColorHover", 12, void 0), O = w(t, "buttonBorderColor", 12, void 0), S = w(t, "ariaLabel", 12, void 0), T = w(t, "style", 12, void 0), N = w(t, "orientation", 12, "vertical"), D = w(t, "fitViewOptions", 12, void 0), L = w(t, "class", 12, "");
  const {
    zoomIn: H,
    zoomOut: B,
    fitView: P,
    viewport: M,
    minZoom: C,
    maxZoom: E,
    nodesDraggable: V,
    nodesConnectable: I,
    elementsSelectable: Y
  } = Qe(), F = {
    bgColor: h(),
    bgColorHover: x(),
    color: p(),
    colorHover: k(),
    borderColor: O()
  }, G = () => {
    H();
  }, ae = () => {
    B();
  }, ee = () => {
    P(D());
  }, W = () => {
    U(c, !g(c)), V.set(g(c)), I.set(g(c)), Y.set(g(c));
  };
  de(
    () => (o(), a(), i()),
    () => {
      U(c, o() || a() || i());
    }
  ), de(() => (s(), l()), () => {
    U(d, s().zoom <= l());
  }), de(() => (s(), u()), () => {
    U(f, s().zoom >= u());
  }), de(() => Q(N()), () => {
    U(v, N() === "horizontal" ? "horizontal" : "vertical");
  }), _t(), Ie();
  const le = /* @__PURE__ */ ye(() => It([
    "svelte-flow__controls",
    g(v),
    L()
  ])), ke = /* @__PURE__ */ ye(() => S() ?? "Svelte Flow controls");
  jo(e, {
    get class() {
      return g(le);
    },
    get position() {
      return m();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ke);
    },
    get style() {
      return T();
    },
    children: (he, Ne) => {
      var se = wm(), be = _e(se);
      St(be, t, "before", {});
      var Fe = Z(be, 2);
      {
        var Ye = (Ue) => {
          var De = ym(), qe = _e(De);
          bo(qe, xt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            F,
            {
              $$events: { click: G },
              children: (bt, ne) => {
                fd(bt);
              },
              $$slots: { default: !0 }
            }
          ));
          var ut = Z(qe, 2);
          bo(ut, xt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            F,
            {
              $$events: { click: ae },
              children: (bt, ne) => {
                vd(bt);
              },
              $$slots: { default: !0 }
            }
          )), A(Ue, De);
        };
        Ee(Fe, (Ue) => {
          b() && Ue(Ye);
        });
      }
      var Ze = Z(Fe, 2);
      {
        var K = (Ue) => {
          bo(Ue, xt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            F,
            {
              $$events: { click: ee },
              children: (De, qe) => {
                gd(De);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(Ze, (Ue) => {
          $() && Ue(K);
        });
      }
      var pe = Z(Ze, 2);
      {
        var me = (Ue) => {
          bo(Ue, xt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            F,
            {
              $$events: { click: W },
              children: (De, qe) => {
                var ut = st(), bt = _e(ut);
                {
                  var ne = (ge) => {
                    hd(ge);
                  }, Ke = (ge) => {
                    pd(ge);
                  };
                  Ee(bt, (ge) => {
                    g(c) ? ge(ne) : ge(Ke, !1);
                  });
                }
                A(De, ut);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Ee(pe, (Ue) => {
          _() && Ue(me);
        });
      }
      var Le = Z(pe, 2);
      St(Le, t, "default", {});
      var Ae = Z(Le, 2);
      St(Ae, t, "after", {}), A(he, se);
    },
    $$slots: { default: !0 }
  });
  var $e = ve({
    get position() {
      return m();
    },
    set position(he) {
      m(he), y();
    },
    get showZoom() {
      return b();
    },
    set showZoom(he) {
      b(he), y();
    },
    get showFitView() {
      return $();
    },
    set showFitView(he) {
      $(he), y();
    },
    get showLock() {
      return _();
    },
    set showLock(he) {
      _(he), y();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(he) {
      h(he), y();
    },
    get buttonBgColorHover() {
      return x();
    },
    set buttonBgColorHover(he) {
      x(he), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(he) {
      p(he), y();
    },
    get buttonColorHover() {
      return k();
    },
    set buttonColorHover(he) {
      k(he), y();
    },
    get buttonBorderColor() {
      return O();
    },
    set buttonBorderColor(he) {
      O(he), y();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(he) {
      S(he), y();
    },
    get style() {
      return T();
    },
    set style(he) {
      T(he), y();
    },
    get orientation() {
      return N();
    },
    set orientation(he) {
      N(he), y();
    },
    get fitViewOptions() {
      return D();
    },
    set fitViewOptions(he) {
      D(he), y();
    },
    get class() {
      return L();
    },
    set class(he) {
      L(he), y();
    }
  });
  return r(), $e;
}
ie(
  md,
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
var ur;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(ur || (ur = {}));
var bm = /* @__PURE__ */ Ce("<circle></circle>");
function yd(e, t) {
  fe(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ie();
  var o = bm();
  return Oe(
    (a) => {
      ce(o, "cx", n()), ce(o, "cy", n()), ce(o, "r", n()), Dt(o, 0, zn(a));
    },
    [
      () => It([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    ye
  ), A(e, o), ve({
    get radius() {
      return n();
    },
    set radius(a) {
      n(a), y();
    },
    get class() {
      return r();
    },
    set class(a) {
      r(a), y();
    }
  });
}
ie(yd, { radius: {}, class: {} }, [], [], !0);
var xm = /* @__PURE__ */ Ce("<path></path>");
function wd(e, t) {
  fe(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), a = w(t, "class", 12, "");
  Ie();
  var i = xm();
  return Oe(
    (s) => {
      ce(i, "stroke-width", n()), ce(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Dt(i, 0, zn(s));
    },
    [
      () => It([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    ye
  ), A(e, i), ve({
    get lineWidth() {
      return n();
    },
    set lineWidth(s) {
      n(s), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(s) {
      r(s), y();
    },
    get variant() {
      return o();
    },
    set variant(s) {
      o(s), y();
    },
    get class() {
      return a();
    },
    set class(s) {
      a(s), y();
    }
  });
}
ie(
  wd,
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
const $m = {
  [ur.Dots]: 1,
  [ur.Lines]: 1,
  [ur.Cross]: 6
};
var km = /* @__PURE__ */ Ce('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const _m = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function bd(e, t) {
  fe(t, !1), rt(e, _m);
  const [n, r] = lt(), o = () => te(k, "$flowId", n), a = () => te(p, "$viewport", n), i = re(), s = re(), l = re(), u = re(), c = re();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => ur.Dots), v = w(t, "gap", 12, 20), m = w(t, "size", 12, 1), b = w(t, "lineWidth", 12, 1), $ = w(t, "bgColor", 12, void 0), _ = w(t, "patternColor", 12, void 0), h = w(t, "patternClass", 12, void 0), x = w(t, "class", 12, "");
  const { viewport: p, flowId: k } = Qe(), O = m() || $m[f()], S = f() === ur.Dots, T = f() === ur.Cross, N = Array.isArray(v()) ? v() : [v(), v()];
  de(
    () => (o(), Q(d())),
    () => {
      U(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), de(() => a(), () => {
    U(s, [
      N[0] * a().zoom || 1,
      N[1] * a().zoom || 1
    ]);
  }), de(() => a(), () => {
    U(l, O * a().zoom);
  }), de(() => (g(l), g(s)), () => {
    U(u, T ? [g(l), g(l)] : g(s));
  }), de(
    () => (g(l), g(u)),
    () => {
      U(c, S ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), _t(), Ie();
  var D = km(), L = j(D), H = j(L);
  {
    var B = (E) => {
      const V = /* @__PURE__ */ ye(() => g(l) / 2);
      yd(E, {
        get radius() {
          return g(V);
        },
        get class() {
          return h();
        }
      });
    }, P = (E) => {
      wd(E, {
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
    Ee(H, (E) => {
      S ? E(B) : E(P, !1);
    });
  }
  X(L);
  var M = Z(L);
  X(D), Oe(
    (E) => {
      Dt(D, 0, zn(E), "svelte-1r7pe8d"), pt(D, "--xy-background-color-props", $()), pt(D, "--xy-background-pattern-color-props", _()), ce(L, "id", g(i)), ce(L, "x", a().x % g(s)[0]), ce(L, "y", a().y % g(s)[1]), ce(L, "width", g(s)[0]), ce(L, "height", g(s)[1]), ce(L, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), ce(M, "fill", `url(#${g(i)})`);
    },
    [
      () => It(["svelte-flow__background", x()])
    ],
    ye
  ), A(e, D);
  var C = ve({
    get id() {
      return d();
    },
    set id(E) {
      d(E), y();
    },
    get variant() {
      return f();
    },
    set variant(E) {
      f(E), y();
    },
    get gap() {
      return v();
    },
    set gap(E) {
      v(E), y();
    },
    get size() {
      return m();
    },
    set size(E) {
      m(E), y();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(E) {
      b(E), y();
    },
    get bgColor() {
      return $();
    },
    set bgColor(E) {
      $(E), y();
    },
    get patternColor() {
      return _();
    },
    set patternColor(E) {
      _(E), y();
    },
    get patternClass() {
      return h();
    },
    set patternClass(E) {
      h(E), y();
    },
    get class() {
      return x();
    },
    set class(E) {
      x(E), y();
    }
  });
  return r(), C;
}
ie(
  bd,
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
var Cm = /* @__PURE__ */ Ce("<rect></rect>");
function xd(e, t) {
  fe(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "borderRadius", 12, 5), s = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  Ie();
  var v = Cm();
  let m;
  return Oe(
    (b) => {
      m = Dt(v, 0, zn(b), null, m, { selected: d() }), ce(v, "x", n()), ce(v, "y", r()), ce(v, "rx", i()), ce(v, "ry", i()), ce(v, "width", o()), ce(v, "height", a()), ce(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), ce(v, "shape-rendering", l());
    },
    [
      () => It(["svelte-flow__minimap-node", f()])
    ],
    ye
  ), A(e, v), ve({
    get x() {
      return n();
    },
    set x(b) {
      n(b), y();
    },
    get y() {
      return r();
    },
    set y(b) {
      r(b), y();
    },
    get width() {
      return o();
    },
    set width(b) {
      o(b), y();
    },
    get height() {
      return a();
    },
    set height(b) {
      a(b), y();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(b) {
      i(b), y();
    },
    get color() {
      return s();
    },
    set color(b) {
      s(b), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(b) {
      l(b), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(b) {
      u(b), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(b) {
      c(b), y();
    },
    get selected() {
      return d();
    },
    set selected(b) {
      d(b), y();
    },
    get class() {
      return f();
    },
    set class(b) {
      f(b), y();
    }
  });
}
ie(
  xd,
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
function Yl(e, t) {
  const n = u0({
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
const Ma = (e) => e instanceof Function ? e : () => e;
var Em = /* @__PURE__ */ Ce("<title> </title>"), Pm = /* @__PURE__ */ Ce('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function $d(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(Ze, "$flowId", n), a = () => te(be, "$viewport", n), i = () => te(Fe, "$containerWidth", n), s = () => te(Ye, "$containerHeight", n), l = () => te(se, "$nodeLookup", n), u = () => te(Ne, "$nodes", n), c = () => te(K, "$panZoom", n), d = () => te(pe, "$translateExtent", n), f = re(), v = re(), m = re(), b = re(), $ = re(), _ = re(), h = re(), x = re(), p = re(), k = re(), O = re(), S = re(), T = re();
  let N = w(t, "position", 12, "bottom-right"), D = w(t, "ariaLabel", 12, "Mini map"), L = w(t, "nodeStrokeColor", 12, "transparent"), H = w(t, "nodeColor", 12, void 0), B = w(t, "nodeClass", 12, ""), P = w(t, "nodeBorderRadius", 12, 5), M = w(t, "nodeStrokeWidth", 12, 2), C = w(t, "bgColor", 12, void 0), E = w(t, "maskColor", 12, void 0), V = w(t, "maskStrokeColor", 12, void 0), I = w(t, "maskStrokeWidth", 12, void 0), Y = w(t, "width", 12, void 0), F = w(t, "height", 12, void 0), G = w(t, "pannable", 12, !0), ae = w(t, "zoomable", 12, !0), ee = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), le = w(t, "style", 12, ""), ke = w(t, "class", 12, "");
  const $e = 200, he = 150, {
    nodes: Ne,
    nodeLookup: se,
    viewport: be,
    width: Fe,
    height: Ye,
    flowId: Ze,
    panZoom: K,
    translateExtent: pe
  } = Qe(), me = H() === void 0 ? void 0 : Ma(H()), Le = Ma(L()), Ae = Ma(B()), Ue = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), De = `svelte-flow__minimap-desc-${o()}`;
  let qe = re(g(f));
  const ut = () => g(_);
  de(
    () => (a(), i(), s()),
    () => {
      U(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), de(
    () => (l(), g(f), u()),
    () => {
      U(qe, l().size > 0 ? xc(Wo(l()), g(f)) : g(f)), u();
    }
  ), de(() => Q(Y()), () => {
    U(v, Y() ?? $e);
  }), de(() => Q(F()), () => {
    U(m, F() ?? he);
  }), de(
    () => (g(qe), g(v)),
    () => {
      U(b, g(qe).width / g(v));
    }
  ), de(
    () => (g(qe), g(m)),
    () => {
      U($, g(qe).height / g(m));
    }
  ), de(
    () => (g(b), g($)),
    () => {
      U(_, Math.max(g(b), g($)));
    }
  ), de(() => (g(_), g(v)), () => {
    U(h, g(_) * g(v));
  }), de(
    () => (g(_), g(m)),
    () => {
      U(x, g(_) * g(m));
    }
  ), de(() => g(_), () => {
    U(p, 5 * g(_));
  }), de(
    () => (g(qe), g(h), g(p)),
    () => {
      U(k, g(qe).x - (g(h) - g(qe).width) / 2 - g(p));
    }
  ), de(
    () => (g(qe), g(x), g(p)),
    () => {
      U(O, g(qe).y - (g(x) - g(qe).height) / 2 - g(p));
    }
  ), de(() => (g(h), g(p)), () => {
    U(S, g(h) + g(p) * 2);
  }), de(() => (g(x), g(p)), () => {
    U(T, g(x) + g(p) * 2);
  }), _t(), Ie();
  const bt = /* @__PURE__ */ ye(() => le() + (C() ? `;--xy-minimap-background-color-props:${C()}` : "")), ne = /* @__PURE__ */ ye(() => It(["svelte-flow__minimap", ke()]));
  jo(e, {
    get position() {
      return N();
    },
    get style() {
      return g(bt);
    },
    get class() {
      return g(ne);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ge, Gt) => {
      var Rt = st(), sn = _e(Rt);
      {
        var Me = (at) => {
          var we = Pm();
          ce(we, "aria-labelledby", De);
          var ct = j(we);
          {
            var vt = (Ct) => {
              var ht = Em();
              ce(ht, "id", De);
              var Bt = j(ht, !0);
              X(ht), Oe(() => Nn(Bt, D())), A(Ct, ht);
            };
            Ee(ct, (Ct) => {
              D() && Ct(vt);
            });
          }
          var Zt = Z(ct);
          rn(Zt, 1, u, (Ct) => Ct.id, (Ct, ht) => {
            var Bt = st();
            const Tt = /* @__PURE__ */ ye(() => l().get(g(ht).id));
            var yt = _e(Bt);
            {
              var uo = (kn) => {
                const Ut = /* @__PURE__ */ ye(() => gr(g(Tt))), hr = /* @__PURE__ */ ye(() => me == null ? void 0 : me(g(Tt))), mr = /* @__PURE__ */ ye(() => Le(g(Tt))), zr = /* @__PURE__ */ ye(() => Ae(g(Tt)));
                xd(kn, xt(
                  {
                    get x() {
                      return g(Tt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(Tt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Ut),
                  {
                    get selected() {
                      return g(Tt).selected;
                    },
                    get color() {
                      return g(hr);
                    },
                    get borderRadius() {
                      return P();
                    },
                    get strokeColor() {
                      return g(mr);
                    },
                    get strokeWidth() {
                      return M();
                    },
                    shapeRendering: Ue,
                    get class() {
                      return g(zr);
                    }
                  }
                ));
              };
              Ee(yt, (kn) => {
                g(Tt) && kc(g(Tt)) && kn(uo);
              });
            }
            A(Ct, Bt);
          });
          var An = Z(Zt);
          X(we), Pt(we, (Ct, ht) => Yl == null ? void 0 : Yl(Ct, ht), () => ({
            panZoom: c(),
            viewport: be,
            getViewScale: ut,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: ee(),
            zoomStep: W(),
            pannable: G(),
            zoomable: ae()
          })), Oe(() => {
            ce(we, "width", g(v)), ce(we, "height", g(m)), ce(we, "viewBox", `${g(k) ?? ""} ${g(O) ?? ""} ${g(S) ?? ""} ${g(T) ?? ""}`), pt(we, "--xy-minimap-mask-background-color-props", E()), pt(we, "--xy-minimap-mask-stroke-color-props", V()), pt(we, "--xy-minimap-mask-stroke-width-props", I() ? I() * g(_) : void 0), ce(An, "d", `M${g(k) - g(p)},${g(O) - g(p)}h${g(S) + g(p) * 2}v${g(T) + g(p) * 2}h${-g(S) - g(p) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), A(at, we);
        };
        Ee(sn, (at) => {
          c() && at(Me);
        });
      }
      A(ge, Rt);
    },
    $$slots: { default: !0 }
  });
  var Ke = ve({
    get position() {
      return N();
    },
    set position(ge) {
      N(ge), y();
    },
    get ariaLabel() {
      return D();
    },
    set ariaLabel(ge) {
      D(ge), y();
    },
    get nodeStrokeColor() {
      return L();
    },
    set nodeStrokeColor(ge) {
      L(ge), y();
    },
    get nodeColor() {
      return H();
    },
    set nodeColor(ge) {
      H(ge), y();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(ge) {
      B(ge), y();
    },
    get nodeBorderRadius() {
      return P();
    },
    set nodeBorderRadius(ge) {
      P(ge), y();
    },
    get nodeStrokeWidth() {
      return M();
    },
    set nodeStrokeWidth(ge) {
      M(ge), y();
    },
    get bgColor() {
      return C();
    },
    set bgColor(ge) {
      C(ge), y();
    },
    get maskColor() {
      return E();
    },
    set maskColor(ge) {
      E(ge), y();
    },
    get maskStrokeColor() {
      return V();
    },
    set maskStrokeColor(ge) {
      V(ge), y();
    },
    get maskStrokeWidth() {
      return I();
    },
    set maskStrokeWidth(ge) {
      I(ge), y();
    },
    get width() {
      return Y();
    },
    set width(ge) {
      Y(ge), y();
    },
    get height() {
      return F();
    },
    set height(ge) {
      F(ge), y();
    },
    get pannable() {
      return G();
    },
    set pannable(ge) {
      G(ge), y();
    },
    get zoomable() {
      return ae();
    },
    set zoomable(ge) {
      ae(ge), y();
    },
    get inversePan() {
      return ee();
    },
    set inversePan(ge) {
      ee(ge), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ge) {
      W(ge), y();
    },
    get style() {
      return le();
    },
    set style(ge) {
      le(ge), y();
    },
    get class() {
      return ke();
    },
    set class(ge) {
      ke(ge), y();
    }
  });
  return r(), Ke;
}
ie(
  $d,
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
const Wl = (e) => Ph(e);
function an() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: m, nodeOrigin: b, edgeLookup: $, connectionLookup: _ } = Qe(), h = (k) => {
    var O, S;
    const T = q(m), N = Wl(k) ? k : T.get(k.id), D = N.parentId ? Th(N.position, N.measured, N.parentId, T, q(b)) : N.position, L = {
      ...N,
      position: D,
      width: ((O = N.measured) == null ? void 0 : O.width) ?? N.width,
      height: ((S = N.measured) == null ? void 0 : S.height) ?? N.height
    };
    return Jr(L);
  }, x = (k, O, S = { replace: !1 }) => {
    var T;
    const N = (T = q(m).get(k)) == null ? void 0 : T.internals.userNode;
    if (!N)
      return;
    const D = typeof O == "function" ? O(N) : O;
    S.replace ? d.update((L) => L.map((H) => H.id === k ? Wl(D) ? D : { ...H, ...D } : H)) : (Object.assign(N, D), d.update((L) => L));
  }, p = (k) => q(m).get(k);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (k) => {
      var O;
      return (O = p(k)) == null ? void 0 : O.internals.userNode;
    },
    getNodes: (k) => k === void 0 ? q(d) : Kl(q(m), k),
    getEdge: (k) => q($).get(k),
    getEdges: (k) => k === void 0 ? q(f) : Kl(q($), k),
    setZoom: (k, O) => {
      const S = q(c);
      return S ? S.scaleTo(k, { duration: O == null ? void 0 : O.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(a).zoom,
    setViewport: async (k, O) => {
      const S = q(a), T = q(c);
      return T ? (await T.setViewport({
        x: k.x ?? S.x,
        y: k.y ?? S.y,
        zoom: k.zoom ?? S.zoom
      }, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(a),
    setCenter: async (k, O, S) => {
      const T = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : q(u), N = q(c);
      return N ? (await N.setViewport({
        x: q(i) / 2 - k * T,
        y: q(s) / 2 - O * T,
        zoom: T
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (k, O) => {
      const S = q(c);
      if (!S)
        return Promise.resolve(!1);
      const T = Ss(k, q(i), q(s), q(l), q(u), (O == null ? void 0 : O.padding) ?? 0.1);
      return await S.setViewport(T, { duration: O == null ? void 0 : O.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (k, O = !0, S) => {
      const T = El(k), N = T ? k : h(k);
      return N ? (S || q(d)).filter((D) => {
        const L = q(m).get(D.id);
        if (!L || !T && D.id === k.id)
          return !1;
        const H = Jr(L), B = Vo(H, N);
        return O && B > 0 || B >= N.width * N.height;
      }) : [];
    },
    isNodeIntersecting: (k, O, S = !0) => {
      const T = El(k) ? k : h(k);
      if (!T)
        return !1;
      const N = Vo(T, O);
      return S && N > 0 || N >= T.width * T.height;
    },
    deleteElements: async ({ nodes: k = [], edges: O = [] }) => {
      const { nodes: S, edges: T } = await yc({
        nodesToRemove: k,
        edgesToRemove: O,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return S && d.update((N) => N.filter((D) => !S.some(({ id: L }) => L === D.id))), T && f.update((N) => N.filter((D) => !T.some(({ id: L }) => L === D.id))), {
        deletedNodes: S,
        deletedEdges: T
      };
    },
    screenToFlowPosition: (k, O = { snapToGrid: !0 }) => {
      const S = q(v);
      if (!S)
        return k;
      const T = O.snapToGrid ? q(o) : !1, { x: N, y: D, zoom: L } = q(a), { x: H, y: B } = S.getBoundingClientRect(), P = {
        x: k.x - H,
        y: k.y - B
      };
      return Ko(P, [N, D, L], T !== null, T || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (k) => {
      const O = q(v);
      if (!O)
        return k;
      const { x: S, y: T, zoom: N } = q(a), { x: D, y: L } = O.getBoundingClientRect(), H = $c(k, [S, T, N]);
      return {
        x: H.x + D,
        y: H.y + L
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
      viewport: { ...q(a) }
    }),
    updateNode: x,
    updateNodeData: (k, O, S) => {
      var T;
      const N = (T = q(m).get(k)) == null ? void 0 : T.internals.userNode;
      if (!N)
        return;
      const D = typeof O == "function" ? O(N) : O;
      N.data = S != null && S.replace ? D : { ...N.data, ...D }, d.update((L) => L);
    },
    getNodesBounds: (k) => {
      const O = q(m), S = q(b);
      return Sh(k, { nodeLookup: O, nodeOrigin: S });
    },
    getHandleConnections: ({ type: k, id: O, nodeId: S }) => {
      var T;
      return Array.from(((T = q(_).get(`${S}-${k}-${O ?? null}`)) == null ? void 0 : T.values()) ?? []);
    },
    viewport: a
  };
}
function Kl(e, t) {
  var n;
  const r = [];
  for (const o of t) {
    const a = e.get(o);
    if (a) {
      const i = "internals" in a ? (n = a.internals) == null ? void 0 : n.userNode : a;
      r.push(i);
    }
  }
  return r;
}
var Sm = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function kd(e, t) {
  fe(t, !1);
  const [n, r] = lt(), o = () => te(x, "$nodes", n), a = () => te(h, "$nodeLookup", n), i = () => te(_, "$viewport", n), s = () => te($, "$domNode", n), l = re(), u = re(), c = re();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), v = w(t, "align", 12, void 0), m = w(t, "offset", 12, void 0), b = w(t, "isVisible", 12, void 0);
  const { domNode: $, viewport: _, nodeLookup: h, nodes: x } = Qe(), { getNodesBounds: p } = an(), k = kr("svelteflow__node_id");
  let O = re(), S = re([]), T = m() !== void 0 ? m() : 10, N = f() !== void 0 ? f() : Se.Top, D = v() !== void 0 ? v() : "center";
  de(
    () => (o(), Q(d()), a()),
    () => {
      o();
      const M = Array.isArray(d()) ? d() : [d() || k];
      U(S, M.reduce(
        (C, E) => {
          const V = a().get(E);
          return V && C.push(V), C;
        },
        []
      ));
    }
  ), de(
    () => (g(S), i()),
    () => {
      const M = p(g(S));
      M && U(O, Xh(M, i(), N, T, D));
    }
  ), de(() => g(S), () => {
    U(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((M) => (M.internals.z || 5) + 1)));
  }), de(() => o(), () => {
    U(u, o().filter((M) => M.selected).length);
  }), de(
    () => (Q(b()), g(S), g(u)),
    () => {
      U(c, typeof b() == "boolean" ? b() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), _t(), Ie();
  var L = st(), H = _e(L);
  {
    var B = (M) => {
      var C = Sm(), E = j(C);
      St(E, t, "default", {}), X(C), Pt(C, (V, I) => Ii == null ? void 0 : Ii(V, I), () => ({ domNode: s() })), Oe(
        (V) => {
          ce(C, "data-id", V), pt(C, "position", "absolute"), pt(C, "transform", g(O)), pt(C, "z-index", g(l));
        },
        [
          () => g(S).reduce((V, I) => `${V}${I.id} `, "").trim()
        ],
        ye
      ), A(M, C);
    };
    Ee(H, (M) => {
      s() && g(c) && g(S) && M(B);
    });
  }
  A(e, L);
  var P = ve({
    get nodeId() {
      return d();
    },
    set nodeId(M) {
      d(M), y();
    },
    get position() {
      return f();
    },
    set position(M) {
      f(M), y();
    },
    get align() {
      return v();
    },
    set align(M) {
      v(M), y();
    },
    get offset() {
      return m();
    },
    set offset(M) {
      m(M), y();
    },
    get isVisible() {
      return b();
    },
    set isVisible(M) {
      b(M), y();
    }
  });
  return r(), P;
}
ie(
  kd,
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
function Nr(e) {
  const { nodes: t, nodeLookup: n } = Qe();
  let r = [], o = !0;
  return sr([t, n], ([, a], i) => {
    var s;
    const l = [], u = Array.isArray(e), c = u ? e : [e];
    for (const d of c) {
      const f = (s = a.get(d)) == null ? void 0 : s.internals.userNode;
      f && l.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!e0(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const Xl = "tinyflow-component";
class Mm {
  constructor(t) {
    if (Xt(this, "options"), Xt(this, "rootEl"), Xt(this, "svelteFlowInstance"), typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(Xl);
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
    const n = document.createElement(Xl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Om = () => {
  const e = xe([]), t = xe([]), n = xe({ x: 250, y: 100, zoom: 1 });
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
      e.update((o) => o.filter((a) => a.id !== r));
    },
    updateNode: (r, o) => {
      e.update((a) => a.map((i) => i.id === r ? o : i));
    },
    updateNodeData: (r, o) => {
      e.update(
        (a) => a.map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (a) => a.id === r ? { ...a, selected: !0 } : { ...a, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((a) => a.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((a) => a.map((i) => i.id === r ? o : i));
    },
    updateEdgeData: (r, o) => {
      t.update((a) => a.map((i) => i.id === r ? { ...i, data: o } : i));
    }
  };
}, mi = Om();
var Tm = /* @__PURE__ */ oe("<button><!></button>");
function tt(e, t) {
  fe(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Tm();
  let a;
  var i = j(o);
  return _r(i, () => n() ?? $t), X(o), Oe(() => a = wn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), A(e, o), ve({
    get children() {
      return n();
    },
    set children(s) {
      n(s), y();
    }
  });
}
ie(tt, { children: {} }, [], [], !0);
var Nm = /* @__PURE__ */ oe("<input>");
function _d(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Lt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Nm();
  Au(r);
  let o;
  Oe(() => o = wn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), A(e, r), ve();
}
ie(_d, {}, [], [], !0);
var zm = /* @__PURE__ */ oe("<input>");
function zt(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Lt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zm();
  Au(r);
  let o;
  Oe(() => o = wn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), A(e, r), ve();
}
ie(zt, {}, [], [], !0);
var Vm = /* @__PURE__ */ oe("<textarea></textarea>");
function At(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Lt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Vm();
  $v(r);
  let o;
  Oe(() => o = wn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), A(e, r), ve();
}
ie(At, {}, [], [], !0);
var Hm = /* @__PURE__ */ oe('<div role="button"><!></div>'), Dm = /* @__PURE__ */ oe("<div></div>");
function Cd(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ft(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = w(t, "items", 28, () => []), a = w(t, "onChange", 12, () => {
  }), i = w(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  Ie();
  var l = Dm();
  let u;
  return rn(l, 5, o, ea, (c, d, f) => {
    var v = Hm();
    ce(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(g(d), f));
    };
    var m = j(v);
    {
      var b = (_) => {
        var h = je();
        Oe(() => Nn(h, g(d).label)), A(_, h);
      }, $ = (_) => {
        var h = st(), x = _e(h);
        _r(x, () => g(d).label ?? $t), A(_, h);
      };
      Ee(m, (_) => {
        typeof g(d).label == "string" ? _(b) : _($, !1);
      });
    }
    X(v), Oe(() => Dt(v, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), A(c, v);
  }), X(l), Oe(() => u = wn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), A(e, l), ve({
    get items() {
      return o();
    },
    set items(c) {
      o(c), y();
    },
    get onChange() {
      return a();
    },
    set onChange(c) {
      a(c), y();
    },
    get activeIndex() {
      return i();
    },
    set activeIndex(c) {
      i(c), y();
    }
  });
}
Qi(["click", "keydown"]);
ie(Cd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Am = (e, t, n) => t(g(n)), Lm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Im = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), Rm = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), Zm = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), Bm = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Ym = /* @__PURE__ */ oe("<div></div>");
const Wm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Ed(e, t) {
  fe(t, !0), rt(e, Wm);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Qt([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = Ym();
  return rn(i, 21, n, ea, (s, l, u) => {
    var c = Bm(), d = j(c);
    ce(d, "tabindex", u), d.__click = [Am, a, l], d.__keydown = [Lm, a, l];
    var f = j(d);
    {
      var v = (p) => {
        var k = Im(), O = j(k);
        ir(O, {
          get target() {
            return g(l).icon;
          }
        }), X(k), A(p, k);
      };
      Ee(f, (p) => {
        g(l).icon && p(v);
      });
    }
    var m = Z(f, 2);
    ir(m, {
      get target() {
        return g(l).title;
      }
    });
    var b = Z(m, 2);
    X(d);
    var $ = Z(d, 2);
    {
      var _ = (p) => {
        var k = Rm(), O = j(k);
        ir(O, {
          get target() {
            return g(l).description;
          }
        }), X(k), A(p, k);
      };
      Ee($, (p) => {
        g(l).description && p(_);
      });
    }
    var h = Z($, 2);
    {
      var x = (p) => {
        var k = Zm(), O = j(k);
        ir(O, {
          get target() {
            return g(l).content;
          }
        }), X(k), A(p, k);
      };
      Ee(h, (p) => {
        o().includes(g(l).key) && p(x);
      });
    }
    X(c), Oe((p) => Dt(b, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), A(s, c);
  }), X(i), Oe(() => {
    ce(i, "style", t.style), Dt(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), A(e, i), ve({
    get items() {
      return n();
    },
    set items(s) {
      n(s), y();
    },
    get onChange() {
      return r();
    },
    set onChange(s) {
      r(s), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(s = []) {
      o(s), y();
    }
  });
}
Qi(["click", "keydown"]);
ie(Ed, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function ir(e, t) {
  fe(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = st(), o = _e(r);
  {
    var a = (s) => {
      var l = st(), u = _e(l);
      _r(u, () => n() ?? $t), A(s, l);
    }, i = (s) => {
      var l = st(), u = _e(l);
      Vu(u, n), A(s, l);
    };
    Ee(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return A(e, r), ve({
    get target() {
      return n();
    },
    set target(s) {
      n(s), y();
    }
  });
}
ie(ir, { target: {} }, [], [], !0);
var Km = (e, t, n) => t(g(n)), Xm = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), jm = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), Fm = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), qm = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), Gm = /* @__PURE__ */ oe("<!> <!>", 1), Um = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), Jm = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), Qm = /* @__PURE__ */ oe("<div><!></div>");
function Mn(e, t) {
  fe(t, !0);
  const n = (x, p = $t) => {
    var k = st(), O = _e(k);
    rn(O, 19, p, (S, T) => `${T}_${S.value}`, (S, T) => {
      var N = Fm(), D = _e(N);
      D.__click = [Km, b, T];
      var L = j(D), H = j(L);
      {
        var B = (E) => {
          var V = Xm();
          A(E, V);
        };
        Ee(H, (E) => {
          g(T).children && g(T).children.length > 0 && E(B);
        });
      }
      X(L);
      var P = Z(L, 2);
      ir(P, {
        get target() {
          return g(T).label;
        }
      }), X(D);
      var M = Z(D, 2);
      {
        var C = (E) => {
          var V = jm(), I = j(V);
          n(I, () => g(T).children), X(V), A(E, V);
        };
        Ee(M, (E) => {
          g(T).children && g(T).children.length > 0 && (l() || c().includes(g(T).value)) && E(C);
        });
      }
      A(S, N);
    }), A(x, k);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), a = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), f = /* @__PURE__ */ Lt(t, [
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
  ]), v = /* @__PURE__ */ He(() => {
    const x = [], p = (k) => {
      for (let O of k)
        i().length > 0 ? i().includes(O.value) && x.push(O) : s().includes(O.value) && x.push(O), O.children && O.children.length > 0 && p(O.children);
    };
    return p(r()), x;
  }), m;
  function b(x) {
    var p, k;
    if (x.children && x.children.length > 0) {
      (p = o()) == null || p(x);
      return;
    } else
      m == null || m.hide(), (k = a()) == null || k(x);
  }
  var $ = Qm();
  let _;
  var h = j($);
  return jn(
    Uo(h, {
      floating: (x) => {
        var p = qm(), k = j(p);
        n(k, r), X(p), A(x, p);
      },
      children: (x, p) => {
        var k = Jm();
        let O;
        var S = j(k);
        rn(
          S,
          23,
          () => g(v),
          (T, N) => `${N}_${T.value}`,
          (T, N, D) => {
            var L = st(), H = _e(L);
            {
              var B = (M) => {
                var C = st(), E = _e(C);
                {
                  var V = (I) => {
                    ir(I, {
                      get target() {
                        return g(N).label;
                      }
                    });
                  };
                  Ee(E, (I) => {
                    g(D) === 0 && I(V);
                  });
                }
                A(M, C);
              }, P = (M) => {
                var C = Gm(), E = _e(C);
                ir(E, {
                  get target() {
                    return g(N).label;
                  }
                });
                var V = Z(E, 2);
                {
                  var I = (Y) => {
                    var F = je(",");
                    A(Y, F);
                  };
                  Ee(V, (Y) => {
                    g(D) < g(v).length - 1 && Y(I);
                  });
                }
                A(M, C);
              };
              Ee(H, (M) => {
                u() ? M(P, !1) : M(B);
              });
            }
            A(T, L);
          },
          (T) => {
            var N = Um(), D = j(N, !0);
            X(N), Oe(() => Nn(D, d())), A(T, N);
          }
        ), X(S), Ve(2), X(k), Oe(() => O = wn(k, O, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), A(x, k);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => m = x,
    () => m
  ), X($), Oe(() => _ = wn($, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), A(e, $), ve({
    get items() {
      return r();
    },
    set items(x) {
      r(x), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(x) {
      o(x), y();
    },
    get onSelect() {
      return a();
    },
    set onSelect(x) {
      a(x), y();
    },
    get value() {
      return i();
    },
    set value(x = []) {
      i(x), y();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(x = []) {
      s(x), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(x = !0) {
      l(x), y();
    },
    get multiple() {
      return u();
    },
    set multiple(x = !1) {
      u(x), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(x = []) {
      c(x), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder(x) {
      d(x), y();
    }
  });
}
Qi(["click"]);
ie(
  Mn,
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
const Do = Math.min, Yr = Math.max, Bi = Math.round, En = (e) => ({
  x: e,
  y: e
}), e2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, t2 = {
  start: "end",
  end: "start"
};
function Ja(e, t, n) {
  return Yr(e, Do(t, n));
}
function Fo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sr(e) {
  return e.split("-")[0];
}
function qo(e) {
  return e.split("-")[1];
}
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function Vs(e) {
  return e === "y" ? "height" : "width";
}
function eo(e) {
  return ["top", "bottom"].includes(Sr(e)) ? "y" : "x";
}
function Hs(e) {
  return Pd(eo(e));
}
function n2(e, t, n) {
  n === void 0 && (n = !1);
  const r = qo(e), o = Hs(e), a = Vs(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Yi(i)), [i, Yi(i)];
}
function r2(e) {
  const t = Yi(e);
  return [Qa(e), t, Qa(t)];
}
function Qa(e) {
  return e.replace(/start|end/g, (t) => t2[t]);
}
function o2(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function i2(e, t, n, r) {
  const o = qo(e);
  let a = o2(Sr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(Qa)))), a;
}
function Yi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => e2[t]);
}
function a2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sd(e) {
  return typeof e != "number" ? a2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Wi(e) {
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
function jl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = eo(t), i = Hs(t), s = Vs(i), l = Sr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (qo(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const s2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = jl(u, r, l), f = r, v = {}, m = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: $,
      fn: _
    } = s[b], {
      x: h,
      y: x,
      data: p,
      reset: k
    } = await _({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = h ?? c, d = x ?? d, v = {
      ...v,
      [$]: {
        ...v[$],
        ...p
      }
    }, k && m <= 50 && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = jl(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Md(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = Fo(t, e), m = Sd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], $ = Wi(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), x = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, p = Wi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: h,
    strategy: l
  }) : _);
  return {
    top: ($.top - p.top + m.top) / x.y,
    bottom: (p.bottom - $.bottom + m.bottom) / x.y,
    left: ($.left - p.left + m.left) / x.x,
    right: (p.right - $.right + m.right) / x.x
  };
}
const l2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Fo(e, t) || {};
    if (u == null)
      return {};
    const d = Sd(c), f = {
      x: n,
      y: r
    }, v = Hs(o), m = Vs(v), b = await i.getDimensions(u), $ = v === "y", _ = $ ? "top" : "left", h = $ ? "bottom" : "right", x = $ ? "clientHeight" : "clientWidth", p = a.reference[m] + a.reference[v] - f[v] - a.floating[m], k = f[v] - a.reference[v], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let S = O ? O[x] : 0;
    (!S || !await (i.isElement == null ? void 0 : i.isElement(O))) && (S = s.floating[x] || a.floating[m]);
    const T = p / 2 - k / 2, N = S / 2 - b[m] / 2 - 1, D = Do(d[_], N), L = Do(d[h], N), H = D, B = S - b[m] - L, P = S / 2 - b[m] / 2 + T, M = Ja(H, P, B), C = !l.arrow && qo(o) != null && P !== M && a.reference[m] / 2 - (P < H ? D : L) - b[m] / 2 < 0, E = C ? P < H ? P - H : P - B : 0;
    return {
      [v]: f[v] + E,
      data: {
        [v]: M,
        centerOffset: P - M - E,
        ...C && {
          alignmentOffset: E
        }
      },
      reset: C
    };
  }
}), u2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: b = !0,
        ...$
      } = Fo(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Sr(o), h = eo(s), x = Sr(s) === s, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (x || !b ? [Yi(s)] : r2(s)), O = m !== "none";
      !f && O && k.push(...i2(s, b, m, p));
      const S = [s, ...k], T = await Md(t, $), N = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(T[_]), d) {
        const P = n2(o, i, p);
        N.push(T[P[0]], T[P[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: N
      }], !N.every((P) => P <= 0)) {
        var L, H;
        const P = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1, M = S[P];
        if (M)
          return {
            data: {
              index: P,
              overflows: D
            },
            reset: {
              placement: M
            }
          };
        let C = (H = D.filter((E) => E.overflows[0] <= 0).sort((E, V) => E.overflows[1] - V.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!C)
          switch (v) {
            case "bestFit": {
              var B;
              const E = (B = D.filter((V) => {
                if (O) {
                  const I = eo(V.placement);
                  return I === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((I) => I > 0).reduce((I, Y) => I + Y, 0)]).sort((V, I) => V[1] - I[1])[0]) == null ? void 0 : B[0];
              E && (C = E);
              break;
            }
            case "initialPlacement":
              C = s;
              break;
          }
        if (o !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
async function c2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Sr(n), s = qo(n), l = eo(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = Fo(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof m == "number" && (v = s === "end" ? m * -1 : m), l ? {
    x: v * c,
    y: f * u
  } : {
    x: f * u,
    y: v * c
  };
}
const d2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await c2(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, f2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: ($) => {
            let {
              x: _,
              y: h
            } = $;
            return {
              x: _,
              y: h
            };
          }
        },
        ...l
      } = Fo(e, t), u = {
        x: n,
        y: r
      }, c = await Md(t, l), d = eo(Sr(o)), f = Pd(d);
      let v = u[f], m = u[d];
      if (a) {
        const $ = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", h = v + c[$], x = v - c[_];
        v = Ja(h, v, x);
      }
      if (i) {
        const $ = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", h = m + c[$], x = m - c[_];
        m = Ja(h, m, x);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: m
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [f]: a,
            [d]: i
          }
        }
      };
    }
  };
};
function da() {
  return typeof window < "u";
}
function lo(e) {
  return Od(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (Od(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Od(e) {
  return da() ? e instanceof Node || e instanceof nn(e).Node : !1;
}
function bn(e) {
  return da() ? e instanceof Element || e instanceof nn(e).Element : !1;
}
function On(e) {
  return da() ? e instanceof HTMLElement || e instanceof nn(e).HTMLElement : !1;
}
function Fl(e) {
  return !da() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nn(e).ShadowRoot;
}
function Go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = xn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function v2(e) {
  return ["table", "td", "th"].includes(lo(e));
}
function fa(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ds(e) {
  const t = As(), n = bn(e) ? xn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function g2(e) {
  let t = vr(e);
  for (; On(t) && !to(t); ) {
    if (Ds(t))
      return t;
    if (fa(t))
      return null;
    t = vr(t);
  }
  return null;
}
function As() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function to(e) {
  return ["html", "body", "#document"].includes(lo(e));
}
function xn(e) {
  return nn(e).getComputedStyle(e);
}
function va(e) {
  return bn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function vr(e) {
  if (lo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fl(e) && e.host || // Fallback.
    Un(e)
  );
  return Fl(t) ? t.host : t;
}
function Td(e) {
  const t = vr(e);
  return to(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : On(t) && Go(t) ? t : Td(t);
}
function Nd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Td(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = nn(o);
  return a ? (es(i), t.concat(i, i.visualViewport || [], Go(o) ? o : [], [])) : t.concat(o, Nd(o, []));
}
function es(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zd(e) {
  const t = xn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = On(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Bi(n) !== a || Bi(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Vd(e) {
  return bn(e) ? e : e.contextElement;
}
function Wr(e) {
  const t = Vd(e);
  if (!On(t))
    return En(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = zd(t);
  let i = (a ? Bi(n.width) : n.width) / r, s = (a ? Bi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const p2 = /* @__PURE__ */ En(0);
function Hd(e) {
  const t = nn(e);
  return !As() || !t.visualViewport ? p2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function h2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== nn(e) ? !1 : t;
}
function Ao(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Vd(e);
  let i = En(1);
  t && (r ? bn(r) && (i = Wr(r)) : i = Wr(e));
  const s = h2(a, n, r) ? Hd(a) : En(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = nn(a), v = r && bn(r) ? nn(r) : r;
    let m = f, b = es(m);
    for (; b && r && v !== m; ) {
      const $ = Wr(b), _ = b.getBoundingClientRect(), h = xn(b), x = _.left + (b.clientLeft + parseFloat(h.paddingLeft)) * $.x, p = _.top + (b.clientTop + parseFloat(h.paddingTop)) * $.y;
      l *= $.x, u *= $.y, c *= $.x, d *= $.y, l += x, u += p, m = nn(b), b = es(m);
    }
  }
  return Wi({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Ls(e, t) {
  const n = va(e).scrollLeft;
  return t ? t.left + n : Ao(Un(e)).left + n;
}
function Dd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ls(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function m2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Un(r), s = t ? fa(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = En(1);
  const c = En(0), d = On(r);
  if ((d || !d && !a) && ((lo(r) !== "body" || Go(i)) && (l = va(r)), On(r))) {
    const v = Ao(r);
    u = Wr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? Dd(i, l, !0) : En(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function y2(e) {
  return Array.from(e.getClientRects());
}
function w2(e) {
  const t = Un(e), n = va(e), r = e.ownerDocument.body, o = Yr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Yr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ls(e);
  const s = -n.scrollTop;
  return xn(r).direction === "rtl" && (i += Yr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function b2(e, t) {
  const n = nn(e), r = Un(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = As();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function x2(e, t) {
  const n = Ao(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = On(e) ? Wr(e) : En(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function ql(e, t, n) {
  let r;
  if (t === "viewport")
    r = b2(e, n);
  else if (t === "document")
    r = w2(Un(e));
  else if (bn(t))
    r = x2(t, n);
  else {
    const o = Hd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Wi(r);
}
function Ad(e, t) {
  const n = vr(e);
  return n === t || !bn(n) || to(n) ? !1 : xn(n).position === "fixed" || Ad(n, t);
}
function $2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nd(e, []).filter((s) => bn(s) && lo(s) !== "body"), o = null;
  const a = xn(e).position === "fixed";
  let i = a ? vr(e) : e;
  for (; bn(i) && !to(i); ) {
    const s = xn(i), l = Ds(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Go(i) && !l && Ad(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = vr(i);
  }
  return t.set(e, r), r;
}
function k2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? fa(t) ? [] : $2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = ql(t, u, o);
    return l.top = Yr(c.top, l.top), l.right = Do(c.right, l.right), l.bottom = Do(c.bottom, l.bottom), l.left = Yr(c.left, l.left), l;
  }, ql(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function _2(e) {
  const {
    width: t,
    height: n
  } = zd(e);
  return {
    width: t,
    height: n
  };
}
function C2(e, t, n) {
  const r = On(t), o = Un(t), a = n === "fixed", i = Ao(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = En(0);
  if (r || !r && !a)
    if ((lo(t) !== "body" || Go(o)) && (s = va(t)), r) {
      const f = Ao(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Ls(o));
  const u = o && !r && !a ? Dd(o, s) : En(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Oa(e) {
  return xn(e).position === "static";
}
function Gl(e, t) {
  if (!On(e) || xn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function Ld(e, t) {
  const n = nn(e);
  if (fa(e))
    return n;
  if (!On(e)) {
    let o = vr(e);
    for (; o && !to(o); ) {
      if (bn(o) && !Oa(o))
        return o;
      o = vr(o);
    }
    return n;
  }
  let r = Gl(e, t);
  for (; r && v2(r) && Oa(r); )
    r = Gl(r, t);
  return r && to(r) && Oa(r) && !Ds(r) ? n : r || g2(e) || n;
}
const E2 = async function(e) {
  const t = this.getOffsetParent || Ld, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: C2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function P2(e) {
  return xn(e).direction === "rtl";
}
const S2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m2,
  getDocumentElement: Un,
  getClippingRect: k2,
  getOffsetParent: Ld,
  getElementRects: E2,
  getClientRects: y2,
  getDimensions: _2,
  getScale: Wr,
  isElement: bn,
  isRTL: P2
}, M2 = d2, O2 = f2, T2 = u2, N2 = l2, z2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: S2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return s2(e, t, {
    ...o,
    platform: a
  });
}, V2 = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: a,
  shiftOptions: i,
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
    z2(e, u, {
      placement: r,
      middleware: [
        M2(o),
        // 手动偏移配置
        T2(a),
        //自动翻转
        O2(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [N2({ element: c })] : []
      ]
    }).then(({ x: _, y: h, placement: x, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${h}px`
      }), l) {
        const { x: k, y: O } = p.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: O != null ? `${O}px` : "",
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
  function m() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b(_) {
    _.stopPropagation(), f ? m() : v();
  }
  function $(_) {
    u.contains(_.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((_) => {
    e.addEventListener(_, b);
  }), document.addEventListener("click", $), {
    destroy() {
      t.forEach((_) => {
        e.removeEventListener(_, b);
      }), document.removeEventListener("click", $);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var H2 = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Uo(e, t) {
  fe(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let a, i, s;
  Vn(() => (s = V2({
    trigger: a,
    floatContent: i,
    interactive: !0,
    placement: o()
  }), () => {
    s.destroy();
  }));
  function l() {
    s.hide();
  }
  var u = H2(), c = j(u), d = j(c);
  _r(d, n), X(c), jn(c, (m) => a = m, () => a);
  var f = Z(c, 2), v = j(f);
  return _r(v, r), X(f), jn(f, (m) => i = m, () => i), X(u), A(e, u), ve({
    hide: l,
    get children() {
      return n();
    },
    set children(m) {
      n(m), y();
    },
    get floating() {
      return r();
    },
    set floating(m) {
      r(m), y();
    },
    get placement() {
      return o();
    },
    set placement(m = "bottom") {
      o(m), y();
    }
  });
}
ie(Uo, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function ot(e, t) {
  fe(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), a = w(t, "mb", 7);
  var i = st(), s = _e(i);
  return Tv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Oe(() => c = wn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === ru,
      l.nodeName.includes("-")
    ));
    var d = st(), f = _e(d);
    _r(f, () => n() ?? $t), A(u, d);
  }), A(e, i), ve({
    get children() {
      return n();
    },
    set children(l) {
      n(l), y();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), y();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), y();
    },
    get mb() {
      return a();
    },
    set mb(l) {
      a(l), y();
    }
  });
}
ie(ot, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var D2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const A2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ga(e, t) {
  fe(t, !0), rt(e, A2);
  const n = /* @__PURE__ */ Lt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  tt(e, xt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = D2();
      A(r, a);
    },
    $$slots: { default: !0 }
  })), ve();
}
ie(ga, {}, [], [], !0);
const L2 = () => {
  const e = Qe();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, no = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, I2 = () => {
  const { nodes: e, nodeLookup: t } = Qe();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = no(), i = {
          ...o,
          id: a,
          position: {
            x: o.position.x + 50,
            y: o.position.y + 50
          }
        };
        e.update((s) => [...s, i]), e.update(
          (s) => s.map(
            (l) => l.id === a ? { ...l, selected: !0 } : { ...l, selected: !1 }
          )
        );
      }
    }
  };
};
var R2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Z2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), B2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Y2 = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), W2 = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const K2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function Dn(e, t) {
  fe(t, !0), rt(e, K2);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), a = w(t, "handle", 7), i = w(t, "children", 7), s = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), d = w(t, "showTargetHandle", 7, !0);
  let f = n().expand ? ["key"] : [];
  const { updateNodeData: v } = an(), m = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: b } = L2(), { copyNode: $ } = I2();
  var _ = W2(), h = _e(_);
  {
    var x = (H) => {
      kd(H, {
        get position() {
          return Se.Top;
        },
        align: "end",
        children: (B, P) => {
          var M = Y2(), C = j(M);
          {
            var E = (G) => {
              tt(G, {
                class: "tf-node-toolbar-item",
                children: (ae, ee) => {
                  var W = R2();
                  A(ae, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(C, (G) => {
              s() && G(E);
            });
          }
          var V = Z(C, 2);
          {
            var I = (G) => {
              tt(G, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ae, ee) => {
                  var W = Z2();
                  A(ae, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(V, (G) => {
              l() && G(I);
            });
          }
          var Y = Z(V, 2);
          {
            var F = (G) => {
              tt(G, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ae, ee) => {
                  var W = B2();
                  A(ae, W);
                },
                $$slots: { default: !0 }
              });
            };
            Ee(Y, (G) => {
              u() && G(F);
            });
          }
          X(M), A(B, M);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(h, (H) => {
      (s() || l() || u()) && H(x);
    });
  }
  var p = Z(h, 2), k = Z(j(p), 2), O = j(k);
  Ed(O, {
    items: m,
    activeKeys: f,
    onChange: (H, B) => {
      v(r(), { expand: B == null ? void 0 : B.includes("key") });
    }
  }), X(k), X(p);
  var S = Z(p, 2);
  {
    var T = (H) => {
      fr(H, {
        type: "target",
        get position() {
          return Se.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Ee(S, (H) => {
      d() && H(T);
    });
  }
  var N = Z(S, 2);
  {
    var D = (H) => {
      fr(H, {
        type: "source",
        get position() {
          return Se.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Ee(N, (H) => {
      c() && H(D);
    });
  }
  var L = Z(N, 2);
  return _r(L, () => a() ?? $t), A(e, _), ve({
    get data() {
      return n();
    },
    set data(H) {
      n(H), y();
    },
    get id() {
      return r();
    },
    set id(H = "") {
      r(H), y();
    },
    get icon() {
      return o();
    },
    set icon(H) {
      o(H), y();
    },
    get handle() {
      return a();
    },
    set handle(H) {
      a(H), y();
    },
    get children() {
      return i();
    },
    set children(H) {
      i(H), y();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(H = !0) {
      s(H), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(H = !0) {
      l(H), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(H = !0) {
      u(H), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(H = !0) {
      c(H), y();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(H = !0) {
      d(H), y();
    }
  });
}
ie(
  Dn,
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
    showTargetHandle: {}
  },
  [],
  [],
  !0
);
function Ot() {
  return kr("svelteflow__node_id");
}
const Id = [
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
], X2 = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var j2 = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), F2 = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), q2 = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const G2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  fe(t, !0), rt(e, G2);
  const [n, r] = lt(), o = () => te(g(l), "$node", n), a = w(t, "parameter", 7), i = w(t, "index", 7);
  let s = Ot(), l = /* @__PURE__ */ He(() => Nr(s)), u = /* @__PURE__ */ He(() => {
    var T, N;
    return {
      ...a(),
      ...(N = (T = o()) == null ? void 0 : T.data) == null ? void 0 : N.parameters[i()]
    };
  });
  const { updateNodeData: c } = an(), d = (T) => {
    const N = T.target.value;
    c(s, (D) => {
      let L = D.data.parameters;
      return L[i()].name = N, { parameters: L };
    });
  }, f = (T) => {
    const N = T.target.checked;
    c(s, (D) => {
      let L = D.data.parameters;
      return L[i()].required = N, { parameters: L };
    });
  }, v = (T) => {
    const N = T.value;
    N && c(s, (D) => {
      let L = D.data.parameters;
      return L[i()].dataType = N, { parameters: L };
    });
  };
  let m;
  const b = () => {
    c(s, (T) => {
      let N = T.data.parameters;
      return N.splice(i(), 1), { parameters: [...N] };
    }), m == null || m.hide();
  };
  var $ = q2(), _ = _e($), h = j(_);
  zt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), X(_);
  var x = Z(_, 2), p = j(x);
  _d(p, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), X(x);
  var k = Z(x, 2), O = j(k);
  jn(
    Uo(O, {
      placement: "bottom",
      floating: (T) => {
        var N = j2(), D = j(N), L = Z(j(D));
        const H = /* @__PURE__ */ He(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        Mn(L, {
          items: Id,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(H);
          }
        }), X(D);
        var B = Z(D, 2), P = Z(j(B));
        At(P, { rows: 1, style: "width: 100%;" }), X(B);
        var M = Z(B, 2), C = Z(j(M));
        At(C, { rows: 3, style: "width: 100%;" }), X(M);
        var E = Z(M, 2), V = j(E);
        tt(V, {
          onclick: b,
          children: (I, Y) => {
            Ve();
            var F = je("删除");
            A(I, F);
          },
          $$slots: { default: !0 }
        }), X(E), X(N), A(T, N);
      },
      children: (T, N) => {
        tt(T, {
          class: "input-btn-more",
          children: (D, L) => {
            var H = F2();
            A(D, H);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => m = T,
    () => m
  ), X(k), A(e, $);
  var S = ve({
    get parameter() {
      return a();
    },
    set parameter(T) {
      a(T), y();
    },
    get index() {
      return i();
    },
    set index(T) {
      i(T), y();
    }
  });
  return r(), S;
}
ie(Rd, { parameter: {}, index: {} }, [], [], !0);
var U2 = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), J2 = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), Q2 = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ey = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Zd(e, t) {
  fe(t, !0), rt(e, ey);
  const [n, r] = lt(), o = () => te(g(i), "$node", n);
  let a = Ot(), i = /* @__PURE__ */ He(() => Nr(a)), s = /* @__PURE__ */ He(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = Q2(), u = j(l);
  {
    var c = (f) => {
      var v = U2();
      Ve(4), A(f, v);
    };
    Ee(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  rn(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, m) => {
      Rd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(m);
        }
      });
    },
    (f) => {
      var v = J2();
      A(f, v);
    }
  ), X(l), A(e, l), ve(), r();
}
ie(Zd, {}, [], [], !0);
const Bd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = no()), Bd(t.children);
  });
}, Jn = () => {
  const { updateNodeData: e } = an();
  return {
    addParameter: (t, n = "parameters", r) => {
      Bd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: no()
      };
      e(t, (a) => {
        let i = a.data[n];
        return i ? i.push(o) : i = [o], {
          [n]: [...i]
        };
      });
    }
  };
};
var ty = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ny = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ry = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const oy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Yd(e, t) {
  fe(t, !0), rt(e, oy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn();
  return Dn(e, xt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (i) => {
      var s = ty();
      A(i, s);
    },
    children: (i, s) => {
      var l = ry(), u = _e(l), c = j(u);
      ot(c, {
        level: 3,
        children: (v, m) => {
          Ve();
          var b = je("输入参数");
          A(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      tt(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, m) => {
          var b = ny();
          A(v, b);
        },
        $$slots: { default: !0 }
      }), X(u);
      var f = Z(u, 2);
      Zd(f, {}), A(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ve({
    get data() {
      return n();
    },
    set data(i) {
      n(i), y();
    }
  });
}
ie(Yd, { data: {} }, [], [], !0);
const Wd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Wd(e, r.source, n));
}, Ul = (e, t) => {
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
        const r = (o, a) => !o || o.length === 0 ? [] : o.map((i) => ({
          label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
          // label: param.name ,
          value: a + "." + i.name,
          children: r(i.children, a + "." + i.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, iy = (e = !1) => {
  const t = Ot(), n = Nr(t), { nodes: r, edges: o } = Qe();
  return sr([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = Ul(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Wd(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = Ul(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var ay = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), sy = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ly = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Kd(e, t) {
  fe(t, !0), rt(e, ly);
  const [n, r] = lt(), o = () => te(g(c), "$node", n), a = () => te(p, "$selectItems", n), i = w(t, "parameter", 7), s = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = Ot(), c = /* @__PURE__ */ He(() => Nr(u)), d = /* @__PURE__ */ He(() => {
    var M;
    return {
      ...i(),
      ...(M = o()) == null ? void 0 : M.data[l()][s()]
    };
  });
  const { updateNodeData: f } = an(), v = (M, C) => {
    f(u, (E) => {
      let V = E.data[l()];
      return V[s()] = { ...V[s()], [M]: C }, { [l()]: V };
    });
  }, m = (M) => {
    const C = M.target.value;
    v("name", C);
  }, b = (M) => {
    const C = M.target.value;
    v("value", C);
  }, $ = (M) => {
    const C = M.value;
    v("ref", C);
  }, _ = (M) => {
    const C = M.value;
    v("refType", C);
  };
  let h;
  const x = () => {
    f(u, (M) => {
      let C = M.data[l()];
      return C.splice(s(), 1), { [l()]: [...C] };
    }), h == null || h.hide();
  }, p = iy();
  var k = sy(), O = _e(k), S = j(O);
  zt(S, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: m
  }), X(O);
  var T = Z(O, 2), N = j(T);
  {
    var D = (M) => {
      zt(M, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, L = (M) => {
      const C = /* @__PURE__ */ He(() => [g(d).ref]);
      Mn(M, {
        get items() {
          return a();
        },
        style: "width: 100%",
        defaultValue: ["ref"],
        get value() {
          return g(C);
        },
        expandAll: !0,
        onSelect: $
      });
    };
    Ee(N, (M) => {
      g(d).refType === "input" ? M(D) : M(L, !1);
    });
  }
  X(T);
  var H = Z(T, 2), B = j(H);
  jn(
    Uo(B, {
      placement: "bottom",
      floating: (M) => {
        var C = ay(), E = j(C), V = Z(j(E));
        const I = /* @__PURE__ */ He(() => g(d).refType ? [g(d).refType] : []);
        Mn(V, {
          items: X2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(I);
          },
          onSelect: _
        }), X(E);
        var Y = Z(E, 2), F = Z(j(Y));
        At(F, {
          rows: 1,
          style: "width: 100%;",
          onchange: (le) => {
            const ke = le.target.value;
            v("defaultValue", ke);
          }
        }), X(Y);
        var G = Z(Y, 2), ae = Z(j(G));
        At(ae, {
          rows: 3,
          style: "width: 100%;",
          onchange: (le) => {
            const ke = le.target.value;
            v("description", ke);
          }
        }), X(G);
        var ee = Z(G, 2), W = j(ee);
        tt(W, {
          onclick: x,
          children: (le, ke) => {
            Ve();
            var $e = je("删除");
            A(le, $e);
          },
          $$slots: { default: !0 }
        }), X(ee), X(C), A(M, C);
      },
      children: (M, C) => {
        ga(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => h = M,
    () => h
  ), X(H), A(e, k);
  var P = ve({
    get parameter() {
      return i();
    },
    set parameter(M) {
      i(M), y();
    },
    get index() {
      return s();
    },
    set index(M) {
      s(M), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(M) {
      l(M), y();
    }
  });
  return r(), P;
}
ie(Kd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var uy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), cy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), dy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const fy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function cn(e, t) {
  fe(t, !0), rt(e, fy);
  const [n, r] = lt(), o = () => te(g(l), "$node", n), a = w(t, "noneParameterText", 7, "无输入参数"), i = w(t, "dataKeyName", 7, "parameters");
  let s = Ot(), l = /* @__PURE__ */ He(() => Nr(s)), u = /* @__PURE__ */ He(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[i()]) || []];
  });
  var c = dy(), d = j(c);
  {
    var f = (b) => {
      var $ = uy();
      Ve(4), A(b, $);
    };
    Ee(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = Z(d, 2);
  rn(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, $, _) => {
      Kd(b, {
        get parameter() {
          return g($);
        },
        get index() {
          return g(_);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (b) => {
      var $ = cy(), _ = j($, !0);
      X($), Oe(() => Nn(_, a())), A(b, $);
    }
  ), X(c), A(e, c);
  var m = ve({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输入参数") {
      a(b), y();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(b = "parameters") {
      i(b), y();
    }
  });
  return r(), m;
}
ie(cn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var vy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), gy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), py = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const hy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Xd(e, t) {
  fe(t, !0), rt(e, hy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn();
  return Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (i) => {
        var s = vy();
        A(i, s);
      },
      children: (i, s) => {
        var l = py(), u = _e(l), c = j(u);
        ot(c, {
          level: 3,
          children: (v, m) => {
            Ve();
            var b = je("输出参数");
            A(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        tt(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, m) => {
            var b = gy();
            A(v, b);
          },
          $$slots: { default: !0 }
        }), X(u);
        var f = Z(u, 2);
        cn(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), A(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(i) {
      n(i), y();
    }
  });
}
ie(Xd, { data: {} }, [], [], !0);
const pa = () => kr("tinyflow_options");
var my = /* @__PURE__ */ Ce('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), yy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), wy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), by = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const xy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function jd(e, t) {
  fe(t, !0), rt(e, xy);
  const [n, r] = lt(), o = () => te(g(u), "$node", n), a = w(t, "parameter", 7), i = w(t, "position", 7), s = w(t, "dataKeyName", 7);
  let l = Ot(), u = /* @__PURE__ */ He(() => Nr(l)), c = /* @__PURE__ */ He(() => {
    var E;
    let V = (E = o()) == null ? void 0 : E.data[s()], I;
    if (V && i().length > 0) {
      let Y = V;
      for (let F = 0; F < i().length; F++) {
        const G = i()[F];
        F == i().length - 1 ? I = Y[G] : Y = Y[G].children;
      }
    }
    return { ...a(), ...I };
  });
  const { updateNodeData: d } = an(), f = (E, V) => {
    d(l, (I) => {
      const Y = I.data[s()];
      if (Y && i().length > 0) {
        let F = Y;
        for (let G = 0; G < i().length; G++) {
          const ae = i()[G];
          G == i().length - 1 ? F[ae] = { ...F[ae], [E]: V } : F = Y[ae].children;
        }
      }
      return { [s()]: Y };
    });
  }, v = (E) => {
    const V = E.target.value;
    f("name", V);
  }, m = (E) => {
    const V = E.value;
    f("dataType", V);
  };
  let b;
  const $ = () => {
    d(l, (E) => {
      let V = E.data[s()];
      if (V && i().length > 0) {
        let I = V;
        for (let Y = 0; Y < i().length; Y++) {
          const F = i()[Y];
          Y == i().length - 1 ? I.splice(F, 1) : I = I[F].children;
        }
      }
      return { [s()]: [...V] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (E) => {
      let V = E.data[s()];
      if (V && i().length > 0) {
        let I = V;
        for (let Y = 0; Y < i().length; Y++) {
          const F = i()[Y];
          Y == i().length - 1 ? I[F].children ? I[F].children.push({
            id: no(),
            name: "newParam",
            dataType: "String"
          }) : I[F].children = [
            {
              id: no(),
              name: "newParam",
              dataType: "String"
            }
          ] : I = I[F].children;
        }
      }
      return { [s()]: [...V] };
    });
  };
  var h = by(), x = _e(h), p = j(x);
  {
    var k = (E) => {
      var V = st(), I = _e(V);
      rn(I, 17, i, ea, (Y, F) => {
        Ve();
        var G = je(" ");
        A(Y, G);
      }), A(E, V);
    };
    Ee(p, (E) => {
      i().length > 1 && E(k);
    });
  }
  var O = Z(p, 2);
  const S = /* @__PURE__ */ He(() => g(c).nameDisabled === !0);
  zt(O, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(S);
    }
  }), X(x);
  var T = Z(x, 2), N = j(T);
  const D = /* @__PURE__ */ He(() => g(c).dataType ? [g(c).dataType] : []), L = /* @__PURE__ */ He(() => g(c).dataTypeDisabled === !0);
  Mn(N, {
    items: Id,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(D);
    },
    get disabled() {
      return g(L);
    },
    onSelect: m
  });
  var H = Z(N, 2);
  {
    var B = (E) => {
      tt(E, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (V, I) => {
          var Y = my();
          A(V, Y);
        },
        $$slots: { default: !0 }
      });
    };
    Ee(H, (E) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && E(B);
    });
  }
  X(T);
  var P = Z(T, 2), M = j(P);
  jn(
    Uo(M, {
      placement: "bottom",
      floating: (E) => {
        var V = wy(), I = j(V), Y = Z(j(I));
        At(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            const le = W.target.value;
            f("defaultValue", le);
          }
        }), X(I);
        var F = Z(I, 2), G = Z(j(F));
        At(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            const le = W.target.value;
            f("description", le);
          }
        }), X(F);
        var ae = Z(F, 2);
        {
          var ee = (W) => {
            var le = yy(), ke = j(le);
            tt(ke, {
              onclick: $,
              children: ($e, he) => {
                Ve();
                var Ne = je("删除");
                A($e, Ne);
              },
              $$slots: { default: !0 }
            }), X(le), A(W, le);
          };
          Ee(ae, (W) => {
            g(c).deleteDisabled !== !0 && W(ee);
          });
        }
        X(V), A(E, V);
      },
      children: (E, V) => {
        ga(E, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (E) => b = E,
    () => b
  ), X(P), A(e, h);
  var C = ve({
    get parameter() {
      return a();
    },
    set parameter(E) {
      a(E), y();
    },
    get position() {
      return i();
    },
    set position(E) {
      i(E), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(E) {
      s(E), y();
    }
  });
  return r(), C;
}
ie(jd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var $y = /* @__PURE__ */ oe("<!> <!>", 1), ky = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), _y = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Cy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ey = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function pr(e, t) {
  fe(t, !0), rt(e, Ey);
  const [n, r] = lt(), o = () => te(g(u), "$node", n), a = ($, _ = $t, h = $t) => {
    var x = st(), p = _e(x);
    rn(
      p,
      19,
      _,
      (k) => `${k.id}_${k.children ? k.children.length : 0}`,
      (k, O, S) => {
        var T = $y(), N = _e(T);
        const D = /* @__PURE__ */ He(() => [...h(), g(S)]);
        jd(N, {
          get parameter() {
            return g(O);
          },
          get position() {
            return g(D);
          },
          get dataKeyName() {
            return s();
          }
        });
        var L = Z(N, 2);
        {
          var H = (B) => {
            var P = /* @__PURE__ */ ye(() => [...h(), g(S)]);
            a(B, () => g(O).children, () => g(P));
          };
          Ee(L, (B) => {
            g(O).children && B(H);
          });
        }
        A(k, T);
      },
      (k) => {
        var O = st(), S = _e(O);
        {
          var T = (N) => {
            var D = ky(), L = j(D, !0);
            X(D), Oe(() => Nn(L, i())), A(N, D);
          };
          Ee(S, (N) => {
            h().length === 0 && N(T);
          });
        }
        A(k, O);
      }
    ), A($, x);
  }, i = w(t, "noneParameterText", 7, "无输出参数"), s = w(t, "dataKeyName", 7, "outputDefs");
  let l = Ot(), u = /* @__PURE__ */ He(() => Nr(l)), c = /* @__PURE__ */ He(() => {
    var $;
    return [...(($ = o()) == null ? void 0 : $.data[s()]) || []];
  });
  var d = Cy(), f = j(d);
  {
    var v = ($) => {
      var _ = _y();
      Ve(4), A($, _);
    };
    Ee(f, ($) => {
      g(c).length !== 0 && $(v);
    });
  }
  var m = Z(f, 2);
  a(m, () => g(c) || [], () => []), X(d), A(e, d);
  var b = ve({
    get noneParameterText() {
      return i();
    },
    set noneParameterText($ = "无输出参数") {
      i($), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName($ = "outputDefs") {
      s($), y();
    }
  });
  return r(), b;
}
ie(pr, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Py = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Sy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), My = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Oy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">模型</div> <div class="setting-item svelte-15t2v24"><!> <!></div> <div class="setting-title svelte-15t2v24">系统提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">用户提示词</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ty = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Fd(e, t) {
  fe(t, !0), rt(e, Ty);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), i = pa();
  let s = $r(Qt([]));
  Vn(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = an();
  return Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Py();
        A(u, c);
      },
      children: (u, c) => {
        var d = Oy(), f = _e(d), v = j(f);
        ot(v, {
          level: 3,
          children: (M, C) => {
            Ve();
            var E = je("输入参数");
            A(M, E);
          },
          $$slots: { default: !0 }
        });
        var m = Z(v, 2);
        tt(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (M, C) => {
            var E = Sy();
            A(M, E);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = Z(f, 2);
        cn(b, {});
        var $ = Z(b, 2);
        ot($, {
          level: 3,
          mt: "10px",
          children: (M, C) => {
            Ve();
            var E = je("模型设置");
            A(M, E);
          },
          $$slots: { default: !0 }
        });
        var _ = Z($, 4), h = j(_);
        const x = /* @__PURE__ */ He(() => n().llmId ? [n().llmId] : []);
        Mn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (M) => {
            const C = M.value;
            l(o, () => ({ llmId: C }));
          },
          get value() {
            return g(x);
          }
        });
        var p = Z(h, 2);
        ga(p, {}), X(_);
        var k = Z(_, 4), O = j(k);
        const S = /* @__PURE__ */ He(() => n().systemPrompt || "");
        At(O, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(S);
          },
          oninput: (M) => {
            l(o, { systemPrompt: M.target.value });
          }
        }), X(k);
        var T = Z(k, 4), N = j(T);
        const D = /* @__PURE__ */ He(() => n().userPrompt || "");
        At(N, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(D);
          },
          oninput: (M) => {
            l(o, { userPrompt: M.target.value });
          }
        }), X(T);
        var L = Z(T, 2), H = j(L);
        ot(H, {
          level: 3,
          mt: "10px",
          children: (M, C) => {
            Ve();
            var E = je("输出参数");
            A(M, E);
          },
          $$slots: { default: !0 }
        });
        var B = Z(H, 2);
        tt(B, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (M, C) => {
            var E = My();
            A(M, E);
          },
          $$slots: { default: !0 }
        }), X(L);
        var P = Z(L, 2);
        pr(P, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ie(Fd, { data: {} }, [], [], !0);
var Ny = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), zy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  fe(t, !0), rt(e, Dy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), { updateNodeData: i } = an(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" }
  ];
  return Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ny();
        A(l, u);
      },
      children: (l, u) => {
        var c = Hy(), d = _e(c), f = j(d);
        ot(f, {
          level: 3,
          children: (D, L) => {
            Ve();
            var H = je("输入参数");
            A(D, H);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        tt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (D, L) => {
            var H = zy();
            A(D, H);
          },
          $$slots: { default: !0 }
        }), X(d);
        var m = Z(d, 2);
        cn(m, {});
        var b = Z(m, 2);
        ot(b, {
          level: 3,
          mt: "10px",
          children: (D, L) => {
            Ve();
            var H = je("代码");
            A(D, H);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(b, 4), _ = j($);
        const h = /* @__PURE__ */ He(() => n().engine ? [n().engine] : ["qlexpress"]);
        Mn(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (D) => {
            const L = D.value;
            i(o, () => ({ engine: L }));
          },
          get value() {
            return g(h);
          }
        }), X($);
        var x = Z($, 4), p = j(x);
        const k = /* @__PURE__ */ He(() => n().code || "");
        At(p, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (D) => {
            i(o, () => ({ code: D.target.value }));
          },
          get value() {
            return g(k);
          }
        }), X(x);
        var O = Z(x, 2), S = j(O);
        ot(S, {
          level: 3,
          mt: "10px",
          children: (D, L) => {
            Ve();
            var H = je("输出参数");
            A(D, H);
          },
          $$slots: { default: !0 }
        });
        var T = Z(S, 2);
        tt(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (D, L) => {
            var H = Vy();
            A(D, H);
          },
          $$slots: { default: !0 }
        }), X(O);
        var N = Z(O, 2);
        pr(N, {}), A(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ie(qd, { data: {} }, [], [], !0);
var Ay = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Ly = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ry = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Gd(e, t) {
  fe(t, !0), rt(e, Ry);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), { updateNodeData: i } = an();
  return Kr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Ay();
        A(s, l);
      },
      children: (s, l) => {
        var u = Iy(), c = _e(u), d = j(c);
        ot(d, {
          level: 3,
          children: (k, O) => {
            Ve();
            var S = je("输入参数");
            A(k, S);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        tt(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (k, O) => {
            var S = Ly();
            A(k, S);
          },
          $$slots: { default: !0 }
        }), X(c);
        var v = Z(c, 2);
        cn(v, {});
        var m = Z(v, 2);
        ot(m, {
          level: 3,
          mt: "10px",
          children: (k, O) => {
            Ve();
            var S = je("代码");
            A(k, S);
          },
          $$slots: { default: !0 }
        });
        var b = Z(m, 4), $ = j(b);
        const _ = /* @__PURE__ */ He(() => n().template || "");
        At($, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (k) => {
            i(o, () => ({ template: k.target.value }));
          },
          get value() {
            return g(_);
          }
        }), X(b);
        var h = Z(b, 2), x = j(h);
        ot(x, {
          level: 3,
          mt: "10px",
          children: (k, O) => {
            Ve();
            var S = je("输出参数");
            A(k, S);
          },
          $$slots: { default: !0 }
        }), X(h);
        var p = Z(h, 2);
        pr(p, {}), A(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ie(Gd, { data: {} }, [], [], !0);
var Zy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), By = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Xy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Fy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), qy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Gy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uy = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const Jy = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function Ud(e, t) {
  fe(t, !0), rt(e, Jy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), { updateNodeData: i } = an();
  return Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Zy();
        A(s, l);
      },
      children: (s, l) => {
        var u = Uy(), c = _e(u), d = j(c), f = j(d);
        Mn(f, {
          items: [
            { value: "get", label: "GET" },
            { value: "post", label: "POST" },
            { value: "put", label: "PUT" },
            { value: "delete", label: "DELETE" },
            { value: "head", label: "HEAD" },
            { value: "patch", label: "PATCH" }
          ],
          style: "width: 100%",
          placeholder: "请选择模型",
          value: ["get"]
        }), X(d);
        var v = Z(d, 2), m = j(v);
        zt(m, { placeholder: "请输入url", style: "width: 100%" }), X(v), X(c);
        var b = Z(c, 2), $ = j(b);
        ot($, {
          level: 3,
          children: (K, pe) => {
            Ve();
            var me = je("Http 头信息");
            A(K, me);
          },
          $$slots: { default: !0 }
        });
        var _ = Z($, 2);
        tt(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "headers");
          },
          children: (K, pe) => {
            var me = By();
            A(K, me);
          },
          $$slots: { default: !0 }
        }), X(b);
        var h = Z(b, 2);
        cn(h, { dataKeyName: "headers" });
        var x = Z(h, 2), p = j(x);
        ot(p, {
          level: 3,
          children: (K, pe) => {
            Ve();
            var me = je("参数");
            A(K, me);
          },
          $$slots: { default: !0 }
        });
        var k = Z(p, 2);
        tt(k, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "urlParameters");
          },
          children: (K, pe) => {
            var me = Yy();
            A(K, me);
          },
          $$slots: { default: !0 }
        }), X(x);
        var O = Z(x, 2);
        cn(O, { dataKeyName: "urlParameters" });
        var S = Z(O, 2);
        ot(S, {
          level: 3,
          mt: "10px",
          children: (K, pe) => {
            Ve();
            var me = je("Body");
            A(K, me);
          },
          $$slots: { default: !0 }
        });
        var T = Z(S, 2), N = j(T), D = j(N);
        const L = /* @__PURE__ */ He(() => !n().bodyType);
        zt(D, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(L);
          },
          onchange: (K) => {
            var pe;
            (pe = K.target) != null && pe.checked && i(o, { bodyType: "" });
          }
        }), Ve(), X(N);
        var H = Z(N, 2), B = j(H);
        const P = /* @__PURE__ */ He(() => n().bodyType === "form-data");
        zt(B, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (K) => {
            var pe;
            (pe = K.target) != null && pe.checked && i(o, { bodyType: "form-data" });
          }
        }), Ve(), X(H);
        var M = Z(H, 2), C = j(M);
        const E = /* @__PURE__ */ He(() => n().bodyType === "x-www-form-urlencoded");
        zt(C, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(E);
          },
          onchange: (K) => {
            var pe;
            (pe = K.target) != null && pe.checked && i(o, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ve(), X(M);
        var V = Z(M, 2), I = j(V);
        const Y = /* @__PURE__ */ He(() => n().bodyType === "json");
        zt(I, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(Y);
          },
          onchange: (K) => {
            var pe;
            (pe = K.target) != null && pe.checked && i(o, { bodyType: "json" });
          }
        }), Ve(), X(V);
        var F = Z(V, 2), G = j(F);
        const ae = /* @__PURE__ */ He(() => n().bodyType === "raw");
        zt(G, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ae);
          },
          onchange: (K) => {
            var pe;
            (pe = K.target) != null && pe.checked && i(o, { bodyType: "raw" });
          }
        }), Ve(), X(F), X(T);
        var ee = Z(T, 2);
        {
          var W = (K) => {
            var pe = Ky(), me = _e(pe), Le = j(me);
            ot(Le, {
              level: 3,
              children: (De, qe) => {
                Ve();
                var ut = je("参数");
                A(De, ut);
              },
              $$slots: { default: !0 }
            });
            var Ae = Z(Le, 2);
            tt(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromData");
              },
              children: (De, qe) => {
                var ut = Wy();
                A(De, ut);
              },
              $$slots: { default: !0 }
            }), X(me);
            var Ue = Z(me, 2);
            cn(Ue, { dataKeyName: "fromData" }), A(K, pe);
          };
          Ee(ee, (K) => {
            n().bodyType === "form-data" && K(W);
          });
        }
        var le = Z(ee, 2);
        {
          var ke = (K) => {
            var pe = jy(), me = _e(pe), Le = j(me);
            ot(Le, {
              level: 3,
              children: (De, qe) => {
                Ve();
                var ut = je("参数");
                A(De, ut);
              },
              $$slots: { default: !0 }
            });
            var Ae = Z(Le, 2);
            tt(Ae, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                a(o, "fromUrlencoded");
              },
              children: (De, qe) => {
                var ut = Xy();
                A(De, ut);
              },
              $$slots: { default: !0 }
            }), X(me);
            var Ue = Z(me, 2);
            cn(Ue, { dataKeyName: "fromUrlencoded" }), A(K, pe);
          };
          Ee(le, (K) => {
            n().bodyType === "x-www-form-urlencoded" && K(ke);
          });
        }
        var $e = Z(le, 2);
        {
          var he = (K) => {
            var pe = Fy(), me = j(pe);
            At(me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Le) => {
                i(o, { bodyJson: Le.target.value });
              }
            }), X(pe), A(K, pe);
          };
          Ee($e, (K) => {
            n().bodyType === "json" && K(he);
          });
        }
        var Ne = Z($e, 2);
        {
          var se = (K) => {
            var pe = qy(), me = j(pe);
            At(me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Le) => {
                i(o, { bodyRaw: Le.target.value });
              }
            }), X(pe), A(K, pe);
          };
          Ee(Ne, (K) => {
            n().bodyType === "raw" && K(se);
          });
        }
        var be = Z(Ne, 2), Fe = j(be);
        ot(Fe, {
          level: 3,
          mt: "10px",
          children: (K, pe) => {
            Ve();
            var me = je("输出参数");
            A(K, me);
          },
          $$slots: { default: !0 }
        });
        var Ye = Z(Fe, 2);
        tt(Ye, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (K, pe) => {
            var me = Gy();
            A(K, me);
          },
          $$slots: { default: !0 }
        }), X(be);
        var Ze = Z(be, 2);
        pr(Ze, {}), A(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ie(Ud, { data: {} }, [], [], !0);
var Qy = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), ew = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const nw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  fe(t, !0), rt(e, nw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), i = pa();
  let s = $r(Qt([]));
  Vn(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = an();
  return Kr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
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
  }), Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Qy();
        A(u, c);
      },
      children: (u, c) => {
        var d = tw(), f = _e(d), v = j(f);
        ot(v, {
          level: 3,
          children: (N, D) => {
            Ve();
            var L = je("输入参数");
            A(N, L);
          },
          $$slots: { default: !0 }
        });
        var m = Z(v, 2);
        tt(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (N, D) => {
            var L = ew();
            A(N, L);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = Z(f, 2);
        cn(b, {});
        var $ = Z(b, 2);
        ot($, {
          level: 3,
          mt: "10px",
          children: (N, D) => {
            Ve();
            var L = je("知识库设置");
            A(N, L);
          },
          $$slots: { default: !0 }
        });
        var _ = Z($, 4), h = j(_);
        const x = /* @__PURE__ */ He(() => n().knowledgeId ? [n().knowledgeId] : []);
        Mn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (N) => {
            const D = N.value;
            l(o, () => ({ knowledgeId: D }));
          },
          get value() {
            return g(x);
          }
        }), X(_);
        var p = Z(_, 4), k = j(p);
        zt(k, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(p);
        var O = Z(p, 2), S = j(O);
        ot(S, {
          level: 3,
          mt: "10px",
          children: (N, D) => {
            Ve();
            var L = je("输出参数");
            A(N, L);
          },
          $$slots: { default: !0 }
        }), X(O);
        var T = Z(O, 2);
        pr(T, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ie(Jd, { data: {} }, [], [], !0);
var rw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ow = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), iw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const aw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  fe(t, !0), rt(e, aw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), i = pa();
  let s = $r(Qt([]));
  Vn(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = an();
  return Kr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
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
  }), Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = rw();
        A(u, c);
      },
      children: (u, c) => {
        var d = iw(), f = _e(d), v = j(f);
        ot(v, {
          level: 3,
          children: (M, C) => {
            Ve();
            var E = je("输入参数");
            A(M, E);
          },
          $$slots: { default: !0 }
        });
        var m = Z(v, 2);
        tt(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (M, C) => {
            var E = ow();
            A(M, E);
          },
          $$slots: { default: !0 }
        }), X(f);
        var b = Z(f, 2);
        cn(b, {});
        var $ = Z(b, 2);
        ot($, {
          level: 3,
          mt: "10px",
          children: (M, C) => {
            Ve();
            var E = je("搜索引擎设置");
            A(M, E);
          },
          $$slots: { default: !0 }
        });
        var _ = Z($, 4), h = j(_);
        const x = /* @__PURE__ */ He(() => n().knowledgeId ? [n().knowledgeId] : []);
        Mn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (M) => {
            const C = M.value;
            l(o, () => ({ knowledgeId: C }));
          },
          get value() {
            return g(x);
          }
        }), X(_);
        var p = Z(_, 4), k = j(p);
        zt(k, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), X(p);
        var O = Z(p, 4), S = j(O);
        zt(S, { placeholder: "请输入关键字", style: "width: 100%" }), X(O);
        var T = Z(O, 4), N = j(T);
        zt(N, { placeholder: "搜索的数据条数", style: "width: 100%" }), X(T);
        var D = Z(T, 4), L = j(D);
        At(L, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), X(D);
        var H = Z(D, 2), B = j(H);
        ot(B, {
          level: 3,
          mt: "10px",
          children: (M, C) => {
            Ve();
            var E = je("输出参数");
            A(M, E);
          },
          $$slots: { default: !0 }
        }), X(H);
        var P = Z(H, 2);
        pr(P, {}), A(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ie(Qd, { data: {} }, [], [], !0);
var sw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), lw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), uw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const cw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function ef(e, t) {
  fe(t, !0), rt(e, cw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Lt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = Ot(), { addParameter: a } = Jn(), i = pa();
  let s = $r(Qt([]));
  return Vn(async () => {
    var l;
    const u = await ((l = i.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), Dn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = sw();
        A(l, u);
      },
      handle: (l) => {
        fr(l, {
          type: "source",
          get position() {
            return Se.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = uw(), d = _e(c), f = j(d);
        ot(f, {
          level: 3,
          children: (h, x) => {
            Ve();
            var p = je("循环变量");
            A(h, p);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        tt(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (h, x) => {
            var p = lw();
            A(h, p);
          },
          $$slots: { default: !0 }
        }), X(d);
        var m = Z(d, 2);
        cn(m, {});
        var b = Z(m, 2), $ = j(b);
        ot($, {
          level: 3,
          mt: "10px",
          children: (h, x) => {
            Ve();
            var p = je("输出参数");
            A(h, p);
          },
          $$slots: { default: !0 }
        }), X(b);
        var _ = Z(b, 2);
        pr(_, {}), A(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ie(ef, { data: {} }, [], [], !0);
const dw = {
  startNode: Yd,
  codeNode: qd,
  llmNode: Fd,
  templateNode: Gd,
  httpNode: Ud,
  knowledgeNode: Jd,
  searchEngineNode: Qd,
  loopNode: ef,
  endNode: Xd
};
var fw = /* @__PURE__ */ oe("<!> ", 1);
function tf(e, t) {
  fe(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), a = w(t, "description", 7), i = w(t, "extra", 7);
  return tt(e, {
    draggable: !0,
    ondragstart: (s) => {
      if (!s.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: {
          title: r(),
          description: a(),
          systemPrompt: "",
          userPrompt: "",
          ...i()
        }
      };
      s.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), s.dataTransfer.effectAllowed = "move";
    },
    children: (s, l) => {
      var u = fw(), c = _e(u);
      Vu(c, n);
      var d = Z(c);
      Oe(() => Nn(d, ` ${r() ?? ""}`)), A(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
    get icon() {
      return n();
    },
    set icon(s) {
      n(s), y();
    },
    get title() {
      return r();
    },
    set title(s) {
      r(s), y();
    },
    get type() {
      return o();
    },
    set type(s) {
      o(s), y();
    },
    get description() {
      return a();
    },
    set description(s) {
      a(s), y();
    },
    get extra() {
      return i();
    },
    set extra(s) {
      i(s), y();
    }
  });
}
ie(
  tf,
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
var vw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), gw = /* @__PURE__ */ Ce('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), pw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"><!></div></div></div> <!></div>');
function nf(e) {
  let t = $r("base"), n = $r("show");
  const r = [
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
  ], o = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ];
  var a = pw(), i = j(a), s = j(i), l = j(s);
  Cd(l, {
    style: "width: 100%",
    items: o,
    onChange: (m) => {
      U(t, Qt(m.value.toString()));
    }
  }), X(s);
  var u = Z(s, 2), c = j(u);
  rn(c, 21, () => r, ea, (m, b) => {
    tf(m, xt(() => g(b)));
  }), X(c);
  var d = Z(c, 2), f = j(d);
  tt(f, {
    children: (m, b) => {
      Ve();
      var $ = je("测试业务按钮");
      A(m, $);
    },
    $$slots: { default: !0 }
  }), X(d), X(u), X(i);
  var v = Z(i, 2);
  tt(v, {
    onclick: () => {
      U(n, Qt(g(n) ? "" : "show"));
    },
    children: (m, b) => {
      var $ = st(), _ = _e($);
      {
        var h = (p) => {
          var k = vw();
          A(p, k);
        }, x = (p) => {
          var k = gw();
          A(p, k);
        };
        Ee(_, (p) => {
          g(n) === "show" ? p(h) : p(x, !1);
        });
      }
      A(m, $);
    },
    $$slots: { default: !0 }
  }), X(a), Oe(() => {
    Dt(a, 1, `tf-toolbar ${g(n) ?? ""}`), ce(c, "style", `display: ${(g(t) === "base" ? "flex" : "none") ?? ""}`), ce(d, "style", `display: ${(g(t) !== "base" ? "flex" : "none") ?? ""}`);
  }), A(e, a);
}
ie(nf, {}, [], [], !0);
const hw = () => {
  const { nodeLookup: e } = Qe();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, mw = () => {
  const { nodes: e } = Qe();
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
        let a = -1;
        for (let s = 0; s < o; s++)
          if (r[s].parentId === t || r[s].id === n) {
            a = s;
            break;
          }
        if (a == -1)
          return r;
        const i = r[o];
        for (let s = o; s > a; s--)
          r[s] = r[s - 1];
        return r[a] = i, r;
      });
    }
  };
}, yw = () => {
  const { edges: e } = Qe();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var ww = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), bw = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), xw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const $w = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function rf(e, t) {
  fe(t, !0), rt(e, $w);
  const n = w(t, "onInit", 7), r = an();
  n()(r);
  let o = $r(!1);
  const a = (x) => {
    x.preventDefault(), x.dataTransfer && (x.dataTransfer.dropEffect = "move");
  }, i = (x) => {
    var p;
    x.preventDefault();
    const k = r.screenToFlowPosition({
      x: x.clientX - 250,
      y: x.clientY - 100
    }), O = (p = x.dataTransfer) == null ? void 0 : p.getData("application/tinyflow"), S = O ? JSON.parse(O) : {}, T = {
      id: `node_${no()}`,
      position: k,
      data: {},
      ...S
    };
    mi.addNode(T), mi.selectNodeOnly(T.id);
  }, { getNode: s } = hw(), l = (x) => {
    const p = s(x.source), k = s(x.target);
    if (x.sourceHandle === "loop_handle" || p.parentId) {
      const O = r.getEdges();
      for (let S of O)
        if (S.target === x.target) {
          const T = s(S.source);
          if (x.sourceHandle === "loop_handle" && T.parentId !== p.id || p.parentId && T.parentId !== p.parentId)
            return !1;
        }
    }
    return !(!p.parentId && k.parentId && k.parentId !== p.id);
  }, { ensureParentInNodesBefore: u } = mw(), c = (x, p) => {
    if (!p.isValid)
      return;
    const k = p.toNode;
    if (k.parentId)
      return;
    const O = p.fromNode, S = p.fromHandle, T = { position: { ...k.position } };
    if (S.id === "loop_handle" ? T.parentId = O.id : O.parentId && (T.parentId = O.parentId), T.parentId) {
      const N = s(T.parentId);
      T.position = {
        x: k.position.x - N.position.x,
        y: k.position.y - N.position.y
      }, u(T.parentId, k.id), r.updateNode(k.id, T);
    }
  }, { getEdgesByTarget: d } = yw(), f = (x) => {
    x.edges.forEach((p) => {
      const k = s(p.target);
      if (k.parentId) {
        const O = d(p.target), S = s(k.parentId);
        if (O.length === 0)
          r.updateNode(k.id, {
            parentId: void 0,
            position: {
              x: k.position.x + S.position.x,
              y: k.position.y + S.position.y
            }
          });
        else {
          let T = !1;
          for (let N = 0; N < O.length; N++) {
            const D = O[N], L = s(D.source);
            if (L.parentId || L.type === "loopNode") {
              T = !0;
              break;
            }
          }
          T || r.updateNode(k.id, {
            parentId: void 0,
            position: {
              x: k.position.x + S.position.x,
              y: k.position.y + S.position.y
            }
          });
        }
      }
    });
  }, v = (x, p) => {
    console.log("onconnectstart: ", x, p);
  }, m = (x) => {
    console.log("onconnect: ", x);
  };
  var b = xw(), $ = j(b);
  nf($);
  var _ = Z($, 2);
  const h = /* @__PURE__ */ He(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: zo.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return cd(_, xt({ nodeTypes: dw }, mi, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: v,
    onconnect: m,
    connectionRadius: 50,
    ondelete: f,
    onclick: (x) => {
      const p = x.target;
      p.classList.contains("svelte-flow__edge-interaction") || p.classList.contains("panel-content") || p.closest(".panel-content") || U(o, !1);
    },
    get defaultEdgeOptions() {
      return g(h);
    },
    $$events: {
      drop: i,
      dragover: a,
      edgeclick: () => {
        U(o, !0);
      }
    },
    children: (x, p) => {
      var k = bw(), O = _e(k);
      bd(O, {});
      var S = Z(O, 2);
      md(S, {});
      var T = Z(S, 2);
      $d(T, {});
      var N = Z(T, 2);
      {
        var D = (L) => {
          jo(L, {
            children: (H, B) => {
              var P = ww(), M = Z(j(P), 4), C = j(M);
              At(C, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (E) => {
                }
              }), X(M), X(P), A(H, P);
            },
            $$slots: { default: !0 }
          });
        };
        Ee(N, (L) => {
          g(o) && L(D);
        });
      }
      A(x, k);
    },
    $$slots: { default: !0 }
  })), X(b), A(e, b), ve({
    get onInit() {
      return n();
    },
    set onInit(x) {
      n(x), y();
    }
  });
}
ie(rf, { onInit: {} }, [], [], !0);
function kw(e, t) {
  fe(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return mi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), jr("tinyflow_options", n()), dd(e, {
    fitView: !0,
    children: (a, i) => {
      rf(a, {
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
    set options(a) {
      n(a), y();
    },
    get onInit() {
      return r();
    },
    set onInit(a) {
      r(a), y();
    }
  });
}
customElements.define("tinyflow-component", ie(kw, { options: {}, onInit: {} }, [], [], !1));
const Pw = sf(({ data: e, style: t, className: n }, r) => {
  const o = Rs(null), a = Rs(null);
  return lf(r, () => ({
    getData: () => a.current ? a.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  })), uf(() => {
    if (o.current) {
      const i = new Mm({
        element: o.current,
        data: e
      });
      return a.current = i, () => {
        i.destroy(), a.current = null;
      };
    }
  }, [e]), /* @__PURE__ */ vf.jsx("div", { ref: o, style: { height: "600px", ...t }, className: n });
});
export {
  Pw as Tinyflow
};
//# sourceMappingURL=index.js.map
