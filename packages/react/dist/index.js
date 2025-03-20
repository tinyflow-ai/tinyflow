import nu, { forwardRef as cf, useRef as Ks, useImperativeHandle as df, useEffect as ff } from "react";
var ii = { exports: {} }, fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function vf() {
  if (Ws) return fo;
  Ws = 1;
  var e = nu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var c, d = {}, f = null, v = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (d[c] = l[c]);
    if (s && s.defaultProps) for (c in l = s.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: t, type: s, key: f, ref: v, props: d, _owner: o.current };
  }
  return fo.Fragment = n, fo.jsx = i, fo.jsxs = i, fo;
}
var vo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function gf() {
  return Xs || (Xs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, b = "@@iterator";
    function x(D) {
      if (D === null || typeof D != "object")
        return null;
      var U = m && D[m] || D[b];
      return typeof U == "function" ? U : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(D) {
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
        var nt = ge.map(function(Ke) {
          return String(Ke);
        });
        nt.unshift("Warning: " + U), Function.prototype.apply.call(console[D], console, nt);
      }
    }
    var p = !1, $ = !1, S = !1, E = !1, T = !1, L;
    L = Symbol.for("react.module.reference");
    function z(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === a || T || D === o || D === u || D === c || E || D === v || p || $ || S || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === d || D.$$typeof === i || D.$$typeof === s || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === L || D.getModuleId !== void 0));
    }
    function I(D, U, ge) {
      var Pe = D.displayName;
      if (Pe)
        return Pe;
      var R = U.displayName || U.name || "";
      return R !== "" ? ge + "(" + R + ")" : ge;
    }
    function N(D) {
      return D.displayName || "Context";
    }
    function B(D) {
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
        case a:
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
            return N(U) + ".Consumer";
          case i:
            var ge = D;
            return N(ge._context) + ".Provider";
          case l:
            return I(D, D.render, "ForwardRef");
          case d:
            var Pe = D.displayName || null;
            return Pe !== null ? Pe : B(D.type) || "Memo";
          case f: {
            var R = D, nt = R._payload, Ke = R._init;
            try {
              return B(Ke(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, H = 0, k, P, O, A, Y, j, F;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function Q() {
      {
        if (H === 0) {
          k = console.log, P = console.info, O = console.warn, A = console.error, Y = console.group, j = console.groupCollapsed, F = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: ae,
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
            log: M({}, D, {
              value: k
            }),
            info: M({}, D, {
              value: P
            }),
            warn: M({}, D, {
              value: O
            }),
            error: M({}, D, {
              value: A
            }),
            group: M({}, D, {
              value: Y
            }),
            groupCollapsed: M({}, D, {
              value: j
            }),
            groupEnd: M({}, D, {
              value: F
            })
          });
        }
        H < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = _.ReactCurrentDispatcher, $e;
    function _e(D, U, ge) {
      {
        if ($e === void 0)
          try {
            throw Error();
          } catch (R) {
            var Pe = R.stack.trim().match(/\n( *(at )?)/);
            $e = Pe && Pe[1] || "";
          }
        return `
` + $e + D;
      }
    }
    var me = !1, de;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      de = new re();
    }
    function we(D, U) {
      if (!D || me)
        return "";
      {
        var ge = de.get(D);
        if (ge !== void 0)
          return ge;
      }
      var Pe;
      me = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = le.current, le.current = null, Q();
      try {
        if (U) {
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
            } catch (Ct) {
              Pe = Ct;
            }
            Reflect.construct(D, [], Ke);
          } else {
            try {
              Ke.call();
            } catch (Ct) {
              Pe = Ct;
            }
            D.call(Ke.prototype);
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
          for (var Ae = Ct.stack.split(`
`), St = Pe.stack.split(`
`), dt = Ae.length - 1, gt = St.length - 1; dt >= 1 && gt >= 0 && Ae[dt] !== St[gt]; )
            gt--;
          for (; dt >= 1 && gt >= 0; dt--, gt--)
            if (Ae[dt] !== St[gt]) {
              if (dt !== 1 || gt !== 1)
                do
                  if (dt--, gt--, gt < 0 || Ae[dt] !== St[gt]) {
                    var Yt = `
` + Ae[dt].replace(" at new ", " at ");
                    return D.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", D.displayName)), typeof D == "function" && de.set(D, Yt), Yt;
                  }
                while (dt >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        me = !1, le.current = nt, W(), Error.prepareStackTrace = R;
      }
      var er = D ? D.displayName || D.name : "", tr = er ? _e(er) : "";
      return typeof D == "function" && de.set(D, tr), tr;
    }
    function qe(D, U, ge) {
      return we(D, !1);
    }
    function We(D) {
      var U = D.prototype;
      return !!(U && U.isReactComponent);
    }
    function Ie(D, U, ge) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return we(D, We(D));
      if (typeof D == "string")
        return _e(D);
      switch (D) {
        case u:
          return _e("Suspense");
        case c:
          return _e("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case l:
            return qe(D.render);
          case d:
            return Ie(D.type, U, ge);
          case f: {
            var Pe = D, R = Pe._payload, nt = Pe._init;
            try {
              return Ie(nt(R), U, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Fe = {}, Re = _.ReactDebugCurrentFrame;
    function ce(D) {
      if (D) {
        var U = D._owner, ge = Ie(D.type, D._source, U ? U.type : null);
        Re.setExtraStackFrame(ge);
      } else
        Re.setExtraStackFrame(null);
    }
    function ue(D, U, ge, Pe, R) {
      {
        var nt = Function.call.bind(ee);
        for (var Ke in D)
          if (nt(D, Ke)) {
            var Ae = void 0;
            try {
              if (typeof D[Ke] != "function") {
                var St = Error((Pe || "React class") + ": " + ge + " type `" + Ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              Ae = D[Ke](U, Ke, Pe, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              Ae = dt;
            }
            Ae && !(Ae instanceof Error) && (ce(R), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", ge, Ke, typeof Ae), ce(null)), Ae instanceof Error && !(Ae.message in Fe) && (Fe[Ae.message] = !0, ce(R), h("Failed %s type: %s", ge, Ae.message), ce(null));
          }
      }
    }
    var Se = Array.isArray;
    function Ne(D) {
      return Se(D);
    }
    function Ge(D) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, ge = U && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return ge;
      }
    }
    function yt(D) {
      try {
        return at(D), !1;
      } catch {
        return !0;
      }
    }
    function at(D) {
      return "" + D;
    }
    function te(D) {
      if (yt(D))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(D)), at(D);
    }
    var Ve = _.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Rt;
    function cn(D) {
      if (ee.call(D, "ref")) {
        var U = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Le(D) {
      if (ee.call(D, "key")) {
        var U = Object.getOwnPropertyDescriptor(D, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function st(D, U) {
      typeof D.ref == "string" && Ve.current;
    }
    function xe(D, U) {
      {
        var ge = function() {
          Qt || (Qt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function ct(D, U) {
      {
        var ge = function() {
          Rt || (Rt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var vt = function(D, U, ge, Pe, R, nt, Ke) {
      var Ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: U,
        ref: ge,
        props: Ke,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(Ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
    };
    function Zt(D, U, ge, Pe, R) {
      {
        var nt, Ke = {}, Ae = null, St = null;
        ge !== void 0 && (te(ge), Ae = "" + ge), Le(U) && (te(U.key), Ae = "" + U.key), cn(U) && (St = U.ref, st(U, R));
        for (nt in U)
          ee.call(U, nt) && !ye.hasOwnProperty(nt) && (Ke[nt] = U[nt]);
        if (D && D.defaultProps) {
          var dt = D.defaultProps;
          for (nt in dt)
            Ke[nt] === void 0 && (Ke[nt] = dt[nt]);
        }
        if (Ae || St) {
          var gt = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Ae && xe(Ke, gt), St && ct(Ke, gt);
        }
        return vt(D, Ae, St, R, Pe, Ve.current, Ke);
      }
    }
    var In = _.ReactCurrentOwner, Et = _.ReactDebugCurrentFrame;
    function pt(D) {
      if (D) {
        var U = D._owner, ge = Ie(D.type, D._source, U ? U.type : null);
        Et.setExtraStackFrame(ge);
      } else
        Et.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Lt(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function wt() {
      {
        if (In.current) {
          var D = B(In.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function co(D) {
      return "";
    }
    var En = {};
    function en(D) {
      {
        var U = wt();
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
        var ge = en(U);
        if (En[ge])
          return;
        En[ge] = !0;
        var Pe = "";
        D && D._owner && D._owner !== In.current && (Pe = " It was passed a child from " + B(D._owner.type) + "."), pt(D), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Pe), pt(null);
      }
    }
    function yr(D, U) {
      {
        if (typeof D != "object")
          return;
        if (Ne(D))
          for (var ge = 0; ge < D.length; ge++) {
            var Pe = D[ge];
            Lt(Pe) && mr(Pe, U);
          }
        else if (Lt(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var R = x(D);
          if (typeof R == "function" && R !== D.entries)
            for (var nt = R.call(D), Ke; !(Ke = nt.next()).done; )
              Lt(Ke.value) && mr(Ke.value, U);
        }
      }
    }
    function Dr(D) {
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
          var Pe = B(U);
          ue(ge, D.props, "prop", Pe, D);
        } else if (U.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var R = B(U);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ma(D) {
      {
        for (var U = Object.keys(D.props), ge = 0; ge < U.length; ge++) {
          var Pe = U[ge];
          if (Pe !== "children" && Pe !== "key") {
            pt(D), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), pt(null);
            break;
          }
        }
        D.ref !== null && (pt(D), h("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    var ti = {};
    function ni(D, U, ge, Pe, R, nt) {
      {
        var Ke = z(D);
        if (!Ke) {
          var Ae = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = co();
          St ? Ae += St : Ae += wt();
          var dt;
          D === null ? dt = "null" : Ne(D) ? dt = "array" : D !== void 0 && D.$$typeof === t ? (dt = "<" + (B(D.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof D, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, Ae);
        }
        var gt = Zt(D, U, ge, R, nt);
        if (gt == null)
          return gt;
        if (Ke) {
          var Yt = U.children;
          if (Yt !== void 0)
            if (Pe)
              if (Ne(Yt)) {
                for (var er = 0; er < Yt.length; er++)
                  yr(Yt[er], D);
                Object.freeze && Object.freeze(Yt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(Yt, D);
        }
        if (ee.call(U, "key")) {
          var tr = B(D), Ct = Object.keys(U).filter(function(oi) {
            return oi !== "key";
          }), Or = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ti[tr + Or]) {
            var ri = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Or, tr, ri, tr), ti[tr + Or] = !0;
          }
        }
        return D === r ? ma(gt) : Dr(gt), gt;
      }
    }
    function ya(D, U, ge) {
      return ni(D, U, ge, !0);
    }
    function wa(D, U, ge) {
      return ni(D, U, ge, !1);
    }
    var ba = wa, xa = ya;
    vo.Fragment = r, vo.jsx = ba, vo.jsxs = xa;
  }()), vo;
}
var js;
function hf() {
  return js || (js = 1, process.env.NODE_ENV === "production" ? ii.exports = vf() : ii.exports = gf()), ii.exports;
}
var pf = hf(), mf = Object.defineProperty, ru = (e) => {
  throw TypeError(e);
}, yf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xt = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n), is = (e, t, n) => t.has(e) || ru("Cannot " + n), mt = (e, t, n) => (is(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ar = (e, t, n) => t.has(e) ? ru("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xi = (e, t, n, r) => (is(e, t, "write to private field"), t.set(e, n), n), wf = (e, t, n) => (is(e, t, "access private method"), n);
const bf = "5";
var Fs;
typeof window < "u" && ((Fs = window.__svelte ?? (window.__svelte = {})).v ?? (Fs.v = /* @__PURE__ */ new Set())).add(bf);
let oo = !1, xf = !1;
function $f() {
  oo = !0;
}
$f();
const as = 1, ss = 2, ou = 4, Cf = 8, _f = 16, kf = 1, Ef = 2, iu = 4, Sf = 8, Mf = 16, au = 1, Pf = 2, ls = "[", us = "[!", cs = "]", Rr = {}, Kt = Symbol(), su = "http://www.w3.org/2000/svg", Tf = !1, wn = 2, lu = 4, Fi = 8, ds = 16, Gn = 32, io = 64, $i = 128, vn = 256, Ci = 512, Tt = 1024, Un = 2048, Tr = 4096, Kn = 8192, qi = 16384, Hf = 32768, ao = 65536, Lf = 1 << 17, zf = 1 << 19, uu = 1 << 20, sr = Symbol("$state"), fs = Symbol("legacy props"), Df = Symbol("");
var Zo = Array.isArray, Of = Array.prototype.indexOf, vs = Array.from, _i = Object.keys, ko = Object.defineProperty, Wn = Object.getOwnPropertyDescriptor, cu = Object.getOwnPropertyDescriptors, Nf = Object.prototype, Vf = Array.prototype, gs = Object.getPrototypeOf;
function go(e) {
  return typeof e == "function";
}
const $t = () => {
};
function Af(e) {
  return e();
}
function Eo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const If = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let So = [], Mo = [];
function du() {
  var e = So;
  So = [], Eo(e);
}
function fu() {
  var e = Mo;
  Mo = [], Eo(e);
}
function Bo(e) {
  So.length === 0 && queueMicrotask(du), So.push(e);
}
function Rf(e) {
  Mo.length === 0 && If(fu), Mo.push(e);
}
function qs() {
  So.length > 0 && du(), Mo.length > 0 && fu();
}
function vu(e) {
  return e === this.v;
}
function hs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ps(e) {
  return !hs(e, this.v);
}
function Zf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Kf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Xf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qf() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Gf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: vu,
    rv: 0,
    wv: 0
  };
  return n;
}
function Cr(e) {
  return /* @__PURE__ */ gu(jt(e));
}
// @__NO_SIDE_EFFECTS__
function Yo(e, t = !1) {
  var n;
  const r = jt(e);
  return t || (r.equals = ps), oo && Je !== null && Je.l !== null && ((n = Je.l).s ?? (n.s = [])).push(r), r;
}
function ie(e, t = !1) {
  return /* @__PURE__ */ gu(/* @__PURE__ */ Yo(e, t));
}
// @__NO_SIDE_EFFECTS__
function gu(e) {
  return ot !== null && !mn && ot.f & wn && (Sn === null ? Qf([e]) : Sn.push(e)), e;
}
function G(e, t) {
  return ot !== null && !mn && ta() && ot.f & (wn | ds) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Sn === null || !Sn.includes(e)) && Gf(), Da(e, t);
}
function Da(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = $u(), hu(e, Un), ta() && Qe !== null && Qe.f & Tt && !(Qe.f & (Gn | io)) && (Zn === null ? ev([e]) : Zn.push(e))), t;
}
function Gs(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function hu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ta(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & Un || !r && i === Qe || (bn(i, t), s & (Tt | vn) && (s & wn ? hu(
        /** @type {Derived} */
        i,
        Tr
      ) : Qi(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  var t = wn | Un, n = ot !== null && ot.f & wn ? (
    /** @type {Derived} */
    ot
  ) : null;
  return Qe === null || n !== null && n.f & vn ? t |= vn : Qe.f |= uu, {
    ctx: Je,
    deps: null,
    effects: null,
    equals: vu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Qe
  };
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = /* @__PURE__ */ Oe(e);
  return t.equals = ps, t;
}
function pu(e) {
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
function Uf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & wn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Jf(e) {
  var t, n = Qe;
  fr(Uf(e));
  try {
    pu(e), t = _u(e);
  } finally {
    fr(n);
  }
  return t;
}
function mu(e) {
  var t = Jf(e), n = (ir || e.f & vn) && e.deps !== null ? Tr : Tt;
  bn(e, n), e.equals(t) || (e.v = t, e.wv = $u());
}
function Gi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ze = !1;
function on(e) {
  ze = e;
}
let Ye;
function Nt(e) {
  if (e === null)
    throw Gi(), Rr;
  return Ye = e;
}
function Tn() {
  return Nt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ On(Ye)
  );
}
function K(e) {
  if (ze) {
    if (/* @__PURE__ */ On(Ye) !== null)
      throw Gi(), Rr;
    Ye = e;
  }
}
function De(e = 1) {
  if (ze) {
    for (var t = e, n = Ye; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ On(n);
    Ye = n;
  }
}
function Oa() {
  for (var e = 0, t = Ye; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === cs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === ls || n === us) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ On(t)
    );
    t.remove(), t = r;
  }
}
function nn(e, t = null, n) {
  if (typeof e != "object" || e === null || sr in e)
    return e;
  const r = gs(e);
  if (r !== Nf && r !== Vf)
    return e;
  var o = /* @__PURE__ */ new Map(), a = Zo(e), i = jt(0);
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
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && jf();
        var d = o.get(u);
        return d === void 0 ? (d = jt(c.value), o.set(u, d)) : G(d, nn(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, jt(Kt));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && G(d, f);
          }
          G(c, Kt), Us(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === sr)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = Wn(l, u)) != null && d.writable) && (f = jt(nn(v ? l[u] : Kt, s)), o.set(u, f)), f !== void 0) {
          var m = g(f);
          return m === Kt ? void 0 : m;
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
          if (f !== void 0 && v !== Kt)
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
        if (u === sr)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== Kt || Reflect.has(l, u);
        if (d !== void 0 || Qe !== null && (!f || (c = Wn(l, u)) != null && c.writable)) {
          d === void 0 && (d = jt(f ? nn(l[u], s) : Kt), o.set(u, d));
          var v = g(d);
          if (v === Kt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), m = u in l;
        if (a && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var x = o.get(b + "");
            x !== void 0 ? G(x, Kt) : b in l && (x = jt(Kt), o.set(b + "", x));
          }
        v === void 0 ? (!m || (f = Wn(l, u)) != null && f.writable) && (v = jt(void 0), G(v, nn(c, s)), o.set(u, v)) : (m = v.v !== Kt, G(v, nn(c, s)));
        var _ = Reflect.getOwnPropertyDescriptor(l, u);
        if (_ != null && _.set && _.set.call(d, c), !m) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), C = Number(u);
            Number.isInteger(C) && C >= h.v && G(h, C + 1);
          }
          Us(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== Kt;
        });
        for (var [c, d] of o)
          d.v !== Kt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Ff();
      }
    }
  );
}
function Us(e, t = 1) {
  G(e, e.v + t);
}
var Wt, yu, wu, bu;
function Na() {
  if (Wt === void 0) {
    Wt = window, yu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    wu = Wn(t, "firstChild").get, bu = Wn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function jn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return wu.call(e);
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return bu.call(e);
}
function X(e, t) {
  if (!ze)
    return /* @__PURE__ */ Ot(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ot(Ye)
  );
  if (n === null)
    n = Ye.appendChild(jn());
  else if (t && n.nodeType !== 3) {
    var r = jn();
    return n == null || n.before(r), Nt(r), r;
  }
  return Nt(n), n;
}
function Ee(e, t) {
  if (!ze) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ot(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ On(n) : n;
  }
  return Ye;
}
function Z(e, t = 1, n = !1) {
  let r = ze ? Ye : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ On(r);
  if (!ze)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = jn();
    return r === null ? o == null || o.after(i) : r.before(i), Nt(i), i;
  }
  return Nt(r), /** @type {TemplateNode} */
  r;
}
function ms(e) {
  e.textContent = "";
}
let vi = !1, ki = !1, Ei = null, xr = !1, ys = !1;
function Js(e) {
  ys = e;
}
let $o = [], ot = null, mn = !1;
function dr(e) {
  ot = e;
}
let Qe = null;
function fr(e) {
  Qe = e;
}
let Sn = null;
function Qf(e) {
  Sn = e;
}
let zt = null, tn = 0, Zn = null;
function ev(e) {
  Zn = e;
}
let xu = 1, Si = 0, ir = !1;
function $u() {
  return ++xu;
}
function so(e) {
  var t, n = e.f;
  if (n & Un)
    return !0;
  if (n & Tr) {
    var r = e.deps, o = (n & vn) !== 0;
    if (r !== null) {
      var a, i, s = (n & Ci) !== 0, l = o && Qe !== null && !ir, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= Ci), l && d !== null && !(d.f & vn) && (c.f ^= vn);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], so(
          /** @type {Derived} */
          i
        ) && mu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || Qe !== null && !ir) && bn(e, Tt);
  }
  return !1;
}
function tv(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & $i)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= $i;
      }
    n = n.parent;
  }
  throw vi = !1, e;
}
function nv(e) {
  return (e.f & qi) === 0 && (e.parent === null || (e.parent.f & $i) === 0);
}
function Ui(e, t, n, r) {
  if (vi) {
    if (n === null && (vi = !1), nv(t))
      throw e;
    return;
  }
  n !== null && (vi = !0);
  {
    tv(e, t);
    return;
  }
}
function Cu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var a = r[o];
      a.f & wn ? Cu(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? bn(a, Un) : a.f & Tt && bn(a, Tr), Qi(
        /** @type {Effect} */
        a
      ));
    }
}
function _u(e) {
  var t, n = zt, r = tn, o = Zn, a = ot, i = ir, s = Sn, l = Je, u = mn, c = e.f;
  zt = /** @type {null | Value[]} */
  null, tn = 0, Zn = null, ir = (c & vn) !== 0 && (mn || !xr || ot === null), ot = c & (Gn | io) ? null : e, Sn = null, Qs(e.ctx), mn = !1, Si++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (zt !== null) {
      var v;
      if (Mi(e, tn), f !== null && tn > 0)
        for (f.length = tn + zt.length, v = 0; v < zt.length; v++)
          f[tn + v] = zt[v];
      else
        e.deps = f = zt;
      if (!ir)
        for (v = tn; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && tn < f.length && (Mi(e, tn), f.length = tn);
    if (ta() && Zn !== null && !mn && f !== null && !(e.f & (wn | Tr | Un)))
      for (v = 0; v < /** @type {Source[]} */
      Zn.length; v++)
        Cu(
          Zn[v],
          /** @type {Effect} */
          e
        );
    return a !== null && Si++, d;
  } finally {
    zt = n, tn = r, Zn = o, ot = a, ir = i, Sn = s, Qs(l), mn = u;
  }
}
function rv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Of.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & wn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (zt === null || !zt.includes(t)) && (bn(t, Tr), t.f & (vn | Ci) || (t.f ^= Ci), pu(
    /** @type {Derived} **/
    t
  ), Mi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Mi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      rv(e, n[r]);
}
function Ji(e) {
  var t = e.f;
  if (!(t & qi)) {
    bn(e, Tt);
    var n = Qe, r = Je, o = xr;
    Qe = e, xr = !0;
    try {
      t & ds ? fv(e) : Pu(e), Mu(e);
      var a = _u(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = xu;
      var i = e.deps, s;
      Tf && xf && e.f & Un;
    } catch (l) {
      Ui(l, e, n, r || e.ctx);
    } finally {
      xr = o, Qe = n;
    }
  }
}
function ov() {
  try {
    Kf();
  } catch (e) {
    if (Ei !== null)
      Ui(e, Ei, null);
    else
      throw e;
  }
}
function ku() {
  var e = xr;
  try {
    var t = 0;
    for (xr = !0; $o.length > 0; ) {
      t++ > 1e3 && ov();
      var n = $o, r = n.length;
      $o = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & Tt || (a.f ^= Tt);
        var i = av(a);
        iv(i);
      }
    }
  } finally {
    ki = !1, xr = e, Ei = null;
  }
}
function iv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (qi | Kn)))
        try {
          so(r) && (Ji(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Tu(r) : r.fn = null));
        } catch (o) {
          Ui(o, r, null, r.ctx);
        }
    }
}
function Qi(e) {
  ki || (ki = !0, queueMicrotask(ku));
  for (var t = Ei = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (io | Gn)) {
      if (!(n & Tt)) return;
      t.f ^= Tt;
    }
  }
  $o.push(t);
}
function av(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & Gn) !== 0, a = o && (r & Tt) !== 0;
    if (!a && !(r & Kn)) {
      if (r & lu)
        t.push(n);
      else if (o)
        n.f ^= Tt;
      else {
        var i = ot;
        try {
          ot = n, so(n) && Ji(n);
        } catch (u) {
          Ui(u, n, null, n.ctx);
        } finally {
          ot = i;
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
  for (qs(); $o.length > 0; )
    ki = !0, ku(), qs();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & wn) !== 0;
  if (ot !== null && !mn) {
    Sn !== null && Sn.includes(e) && qf();
    var r = ot.deps;
    e.rv < Si && (e.rv = Si, zt === null && r !== null && r[tn] === e ? tn++ : zt === null ? zt = [e] : (!ir || !zt.includes(e)) && zt.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && !(a.f & vn) && (o.f ^= vn);
  }
  return n && (o = /** @type {Derived} */
  e, so(o) && mu(o)), e.v;
}
function Hn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const sv = -7169;
function bn(e, t) {
  e.f = e.f & sv | t;
}
function J(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (sr in e)
      Va(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && sr in n && Va(n);
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
    const n = gs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = cu(n);
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
function Eu(e) {
  Qe === null && ot === null && Yf(), ot !== null && ot.f & vn && Qe === null && Bf(), ys && Zf();
}
function lv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Hr(e, t, n, r = !0) {
  var o = (e & io) !== 0, a = Qe, i = {
    ctx: Je,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Un,
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
      Ji(i), i.f |= Hf;
    } catch (u) {
      throw gn(i), u;
    }
  else t !== null && Qi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (uu | $i)) === 0;
  if (!s && !o && r && (a !== null && lv(i, a), ot !== null && ot.f & wn)) {
    var l = (
      /** @type {Derived} */
      ot
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function Su(e) {
  const t = Hr(Fi, null, !1);
  return bn(t, Tt), t.teardown = e, t;
}
function Xr(e) {
  Eu();
  var t = Qe !== null && (Qe.f & Gn) !== 0 && Je !== null && !Je.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Je
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Qe,
      reaction: ot
    });
  } else {
    var r = rn(e);
    return r;
  }
}
function uv(e) {
  return Eu(), lo(e);
}
function cv(e) {
  const t = Hr(io, e, !0);
  return () => {
    gn(t);
  };
}
function dv(e) {
  const t = Hr(io, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? jr(t, () => {
      gn(t), r(void 0);
    }) : (gn(t), r(void 0));
  });
}
function rn(e) {
  return Hr(lu, e, !1);
}
function pe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = lo(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), Hn(t));
  });
}
function _t() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Je
  );
  lo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Tt && bn(n, Tr), so(n) && Ji(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function lo(e) {
  return Hr(Fi, e, !0);
}
function He(e, t = [], n = Oe) {
  const r = t.map(n);
  return Lr(() => e(...r.map(g)));
}
function Lr(e, t = 0) {
  return Hr(Fi | ds | t, e, !0);
}
function Fn(e, t = !0) {
  return Hr(Fi | Gn, e, !0, t);
}
function Mu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ys, r = ot;
    Js(!0), dr(null);
    try {
      t.call(null);
    } finally {
      Js(n), dr(r);
    }
  }
}
function Pu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    gn(n, t), n = r;
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
  if ((t || e.f & zf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ On(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Pu(e, t && !n), Mi(e, 0), bn(e, qi);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  Mu(e);
  var s = e.parent;
  s !== null && s.first !== null && Tu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Tu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jr(e, t) {
  var n = [];
  ws(e, n, !0), Hu(n, () => {
    gn(e), t && t();
  });
}
function Hu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ws(e, t, n) {
  if (!(e.f & Kn)) {
    if (e.f ^= Kn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & ao) !== 0 || (r.f & Gn) !== 0;
      ws(r, t, a ? n : !1), r = o;
    }
  }
}
function Po(e) {
  Lu(e, !0);
}
function Lu(e, t) {
  if (e.f & Kn) {
    e.f ^= Kn, e.f & Tt || (e.f ^= Tt), so(e) && (bn(e, Un), Qi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & ao) !== 0 || (n.f & Gn) !== 0;
      Lu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function ea(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Je = null;
function Qs(e) {
  Je = e;
}
function _r(e) {
  return (
    /** @type {T} */
    bs().get(e)
  );
}
function Fr(e, t) {
  return bs().set(e, t), t;
}
function vv(e) {
  return bs().has(e);
}
function fe(e, t = !1, n) {
  Je = {
    p: Je,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, oo && !t && (Je.l = {
    s: null,
    u: null,
    r1: [],
    r2: jt(!1)
  });
}
function ve(e) {
  const t = Je;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const i = t.e;
    if (i !== null) {
      var n = Qe, r = ot;
      t.e = null;
      try {
        for (var o = 0; o < i.length; o++) {
          var a = i[o];
          fr(a.effect), dr(a.reaction), rn(a.fn);
        }
      } finally {
        fr(n), dr(r);
      }
    }
    Je = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ta() {
  return !oo || Je !== null && Je.l === null;
}
function bs(e) {
  return Je === null && ea(), Je.c ?? (Je.c = new Map(gv(Je) || void 0));
}
function gv(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function hv(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const pv = [
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
function mv(e) {
  return pv.includes(e);
}
const yv = {
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
function wv(e) {
  return e = e.toLowerCase(), yv[e] ?? e;
}
const bv = ["touchstart", "touchmove"];
function xv(e) {
  return bv.includes(e);
}
const $v = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Cv(e) {
  return $v.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function _v(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Bo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function kv(e) {
  ze && /* @__PURE__ */ Ot(e) !== null && ms(e);
}
let el = !1;
function Ev() {
  el || (el = !0, document.addEventListener(
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
function Sv(e) {
  var t = ot, n = Qe;
  dr(null), fr(null);
  try {
    return e();
  } finally {
    dr(t), fr(n);
  }
}
const zu = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Du(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || yo.call(t, a), !a.cancelBubble)
      return Sv(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Bo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ue(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = Du(e, t, n, a);
  (t === document.body || t === window || t === document) && Su(() => {
    t.removeEventListener(e, i, a);
  });
}
function na(e) {
  for (var t = 0; t < e.length; t++)
    zu.add(e[t]);
  for (var n of Aa)
    n(e);
}
function yo(e) {
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
    var d = ot, f = Qe;
    dr(null), fr(null);
    try {
      for (var v, m = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Zo(x)) {
              var [_, ...h] = x;
              _.apply(i, [e, ...h]);
            } else
              x.call(i, e);
        } catch (C) {
          v ? m.push(C) : v = C;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        i = b;
      }
      if (v) {
        for (let C of m)
          queueMicrotask(() => {
            throw C;
          });
        throw v;
      }
    } finally {
      e.__root = n, delete e.currentTarget, dr(d), fr(f);
    }
  }
}
function xs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function qt(e, t) {
  var n = (
    /** @type {Effect} */
    Qe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var n = (t & au) !== 0, r = (t & Pf) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (ze)
      return qt(Ye, null), Ye;
    o === void 0 && (o = xs(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Ot(o)));
    var i = (
      /** @type {TemplateNode} */
      r || yu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ot(i)
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
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & au) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (ze)
      return qt(Ye, null), Ye;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        xs(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Ot(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ Ot(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Ot(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ Ot(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ot(u)
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
  if (!ze) {
    var t = jn(e + "");
    return qt(t, t), t;
  }
  var n = Ye;
  return n.nodeType !== 3 && (n.before(n = jn()), Nt(n)), qt(n, n), n;
}
function lt() {
  if (ze)
    return qt(Ye, null), Ye;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = jn();
  return e.append(t, n), qt(t, n), e;
}
function V(e, t) {
  if (ze) {
    Qe.nodes_end = Ye, Tn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function sn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Ou(e, t) {
  return Nu(e, t);
}
function Mv(e, t) {
  Na(), t.intro = t.intro ?? !1;
  const n = t.target, r = ze, o = Ye;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ot(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== ls); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ On(a);
    if (!a)
      throw Rr;
    on(!0), Nt(
      /** @type {Comment} */
      a
    ), Tn();
    const i = Nu(e, { ...t, anchor: a });
    if (Ye === null || Ye.nodeType !== 8 || /** @type {Comment} */
    Ye.data !== cs)
      throw Gi(), Rr;
    return on(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === Rr)
      return t.recover === !1 && Wf(), Na(), ms(n), on(!1), Ou(e, t);
    throw i;
  } finally {
    on(r), Nt(o);
  }
}
const Nr = /* @__PURE__ */ new Map();
function Nu(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  Na();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var m = xv(v);
        t.addEventListener(v, yo, { passive: m });
        var b = Nr.get(v);
        b === void 0 ? (document.addEventListener(v, yo, { passive: m }), Nr.set(v, 1)) : Nr.set(v, b + 1);
      }
    }
  };
  l(vs(zu)), Aa.add(l);
  var u = void 0, c = dv(() => {
    var d = n ?? t.appendChild(jn());
    return Fn(() => {
      if (a) {
        fe({});
        var f = (
          /** @type {ComponentContext} */
          Je
        );
        f.c = a;
      }
      o && (r.$$events = o), ze && qt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, ze && (Qe.nodes_end = Ye), a && ve();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, yo);
        var m = (
          /** @type {number} */
          Nr.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, yo), Nr.delete(v)) : Nr.set(v, m);
      }
      Aa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Ia.set(u, c), u;
}
let Ia = /* @__PURE__ */ new WeakMap();
function Pv(e, t) {
  const n = Ia.get(e);
  return n ? (Ia.delete(e), n(t)) : Promise.resolve();
}
function Me(e, t, [n, r] = [0, 0]) {
  ze && n === 0 && Tn();
  var o = e, a = null, i = null, s = Kt, l = n > 0 ? ao : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let m = !1;
    if (ze && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === ls ? r = 0 : x === us ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Oa(), Nt(o), on(!1), m = !0, r = -1);
    }
    s ? (a ? Po(a) : v && (a = Fn(() => v(o))), i && jr(i, () => {
      i = null;
    })) : (i ? Po(i) : v && (i = Fn(() => v(o, [n + 1, r]))), a && jr(a, () => {
      a = null;
    })), m && on(!0);
  };
  Lr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), ze && (o = Ye);
}
function To(e, t) {
  return t;
}
function Tv(e, t, n, r) {
  for (var o = [], a = t.length, i = 0; i < a; i++)
    ws(t[i].e, o, !0);
  var s = a > 0 && o.length === 0 && n !== null;
  if (s) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ms(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), rr(e, t[0].prev, t[a - 1].next);
  }
  Hu(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), rr(e, c.prev, c.next)), gn(c.e, !s);
    }
  });
}
function Gt(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & ou) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = ze ? Nt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ot(u)
    ) : u.appendChild(jn());
  }
  ze && Tn();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return Zo(v) ? v : v == null ? [] : vs(v);
  });
  Lr(() => {
    var v = g(f), m = v.length;
    if (d && m === 0)
      return;
    d = m === 0;
    let b = !1;
    if (ze) {
      var x = (
        /** @type {Comment} */
        i.data === us
      );
      x !== (m === 0) && (i = Oa(), Nt(i), on(!1), b = !0);
    }
    if (ze) {
      for (var _ = null, h, C = 0; C < m; C++) {
        if (Ye.nodeType === 8 && /** @type {Comment} */
        Ye.data === cs) {
          i = /** @type {Comment} */
          Ye, b = !0, on(!1);
          break;
        }
        var p = v[C], $ = r(p, C);
        h = Vu(
          Ye,
          s,
          _,
          null,
          p,
          $,
          C,
          o,
          t,
          n
        ), s.items.set($, h), _ = h;
      }
      m > 0 && Nt(Oa());
    }
    ze || Hv(v, s, i, o, t, r, n), a !== null && (m === 0 ? c ? Po(c) : c = Fn(() => a(i)) : c !== null && jr(c, () => {
      c = null;
    })), b && on(!0), g(f);
  }), ze && (i = Ye);
}
function Hv(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & Cf) !== 0, f = (o & (as | ss)) !== 0, v = e.length, m = t.items, b = t.first, x = b, _, h = null, C, p = [], $ = [], S, E, T, L;
  if (d)
    for (L = 0; L < v; L += 1)
      S = e[L], E = a(S, L), T = m.get(E), T !== void 0 && ((s = T.a) == null || s.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(T));
  for (L = 0; L < v; L += 1) {
    if (S = e[L], E = a(S, L), T = m.get(E), T === void 0) {
      var z = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Vu(
        z,
        t,
        h,
        h === null ? t.first : h.next,
        S,
        E,
        L,
        r,
        o,
        i
      ), m.set(E, h), p = [], $ = [], x = h.next;
      continue;
    }
    if (f && Lv(T, S, L, o), T.e.f & Kn && (Po(T.e), d && ((l = T.a) == null || l.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(T))), T !== x) {
      if (_ !== void 0 && _.has(T)) {
        if (p.length < $.length) {
          var I = $[0], N;
          h = I.prev;
          var B = p[0], M = p[p.length - 1];
          for (N = 0; N < p.length; N += 1)
            tl(p[N], I, n);
          for (N = 0; N < $.length; N += 1)
            _.delete($[N]);
          rr(t, B.prev, M.next), rr(t, h, B), rr(t, M, I), x = I, h = M, L -= 1, p = [], $ = [];
        } else
          _.delete(T), tl(T, x, n), rr(t, T.prev, T.next), rr(t, T, h === null ? t.first : h.next), rr(t, h, T), h = T;
        continue;
      }
      for (p = [], $ = []; x !== null && x.k !== E; )
        x.e.f & Kn || (_ ?? (_ = /* @__PURE__ */ new Set())).add(x), $.push(x), x = x.next;
      if (x === null)
        continue;
      T = x;
    }
    p.push(T), h = T, x = T.next;
  }
  if (x !== null || _ !== void 0) {
    for (var H = _ === void 0 ? [] : vs(_); x !== null; )
      x.e.f & Kn || H.push(x), x = x.next;
    var k = H.length;
    if (k > 0) {
      var P = o & ou && v === 0 ? n : null;
      if (d) {
        for (L = 0; L < k; L += 1)
          (u = H[L].a) == null || u.measure();
        for (L = 0; L < k; L += 1)
          (c = H[L].a) == null || c.fix();
      }
      Tv(t, H, P, m);
    }
  }
  d && Bo(() => {
    var O;
    if (C !== void 0)
      for (T of C)
        (O = T.a) == null || O.apply();
  }), Qe.first = t.first && t.first.e, Qe.last = h && h.e;
}
function Lv(e, t, n, r) {
  r & as && Da(e.v, t), r & ss ? Da(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Vu(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & as) !== 0, d = (l & _f) === 0, f = c ? d ? /* @__PURE__ */ Yo(o) : jt(o) : o, v = l & ss ? jt(i) : i, m = {
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
    return m.e = Fn(() => s(e, f, v, u), ze), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? t.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
  }
}
function tl(e, t, n) {
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
      /* @__PURE__ */ On(a)
    );
    o.before(a), a = i;
  }
}
function rr(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Au(e, t, n, r, o) {
  var a = e, i = "", s;
  Lr(() => {
    if (i === (i = t() ?? "")) {
      ze && Tn();
      return;
    }
    s !== void 0 && (gn(s), s = void 0), i !== "" && (s = Fn(() => {
      if (ze) {
        Ye.data;
        for (var l = Tn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ On(l);
        if (l === null)
          throw Gi(), Rr;
        qt(Ye, u), a = Nt(l);
        return;
      }
      var c = i + "", d = xs(c);
      qt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ot(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function Pt(e, t, n, r, o) {
  var a;
  ze && Tn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function zv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function kr(e, t, ...n) {
  var r = e, o = $t, a;
  Lr(() => {
    o !== (o = t()) && (a && (gn(a), a = null), a = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, ao), ze && (r = Ye);
}
function Iu(e, t, n) {
  ze && Tn();
  var r = e, o, a;
  Lr(() => {
    o !== (o = t()) && (a && (jr(a), a = null), o && (a = Fn(() => n(r, o))));
  }, ao), ze && (r = Ye);
}
function Dv(e, t, n, r, o, a) {
  let i = ze;
  ze && Tn();
  var s, l, u = null;
  ze && Ye.nodeType === 1 && (u = /** @type {Element} */
  Ye, Tn());
  var c = (
    /** @type {TemplateNode} */
    ze ? Ye : e
  ), d;
  Lr(() => {
    const f = t() || null;
    var v = f === "svg" ? su : null;
    f !== s && (d && (f === null ? jr(d, () => {
      d = null, l = null;
    }) : f === l ? Po(d) : gn(d)), f && f !== l && (d = Fn(() => {
      if (u = ze ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), qt(u, u), r) {
        ze && Cv(f) && u.append(document.createComment(""));
        var m = (
          /** @type {TemplateNode} */
          ze ? /* @__PURE__ */ Ot(u) : u.appendChild(jn())
        );
        ze && (m === null ? on(!1) : Nt(m)), r(u, m);
      }
      Qe.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, ao), i && (on(!0), Nt(c));
}
function it(e, t) {
  Bo(() => {
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
  rn(() => {
    var r = Hn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && r != null && r.update) {
      var o = !1, a = (
        /** @type {any} */
        {}
      );
      lo(() => {
        var i = n();
        J(i), o && hs(a, i) && (a = i, r.update(i));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ru(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ru(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ov() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ru(e)) && (r && (r += " "), r += t);
  return r;
}
function Nn(e) {
  return typeof e == "object" ? Ov(e) : e ?? "";
}
const nl = [...` 	
\r\f \v\uFEFF`];
function Nv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || nl.includes(r[i - 1])) && (s === r.length || nl.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function Vt(e, t, n, r, o, a) {
  var i = e.__className;
  if (ze || i !== n) {
    var s = Nv(n, r, a);
    (!ze || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const ho = Symbol("class");
function Co(e) {
  if (ze) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          he(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          he(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Rf(n), Ev();
  }
}
function $a(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Vv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function he(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  ze && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Df] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Zu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = ze && a;
  s && on(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = Nn(n.class) : (r || n[ho]) && (n.class = null);
  var d = Zu(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const C in n) {
    let p = n[C];
    if (u && C === "value" && p == null) {
      e.value = e.__value = "", l[C] = p;
      continue;
    }
    if (C === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Vt(e, v, p, r, t == null ? void 0 : t[ho], n[ho]), l[C] = p, l[ho] = n[ho];
      continue;
    }
    var m = l[C];
    if (p !== m) {
      l[C] = p;
      var b = C[0] + C[1];
      if (b !== "$$") {
        if (b === "on") {
          const $ = {}, S = "$$" + C;
          let E = C.slice(2);
          var x = mv(E);
          if (hv(E) && (E = E.slice(0, -7), $.capture = !0), !x && m) {
            if (p != null) continue;
            e.removeEventListener(E, l[S], $), l[S] = null;
          }
          if (p != null)
            if (x)
              e[`__${E}`] = p, na([E]);
            else {
              let T = function(L) {
                l[C].call(this, L);
              };
              l[S] = Du(E, e, T, $);
            }
          else x && (e[`__${E}`] = void 0);
        } else if (C === "style" && p != null)
          e.style.cssText = p + "";
        else if (C === "autofocus")
          _v(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!a && (C === "__value" || C === "value" && p != null))
          e.value = e.__value = p;
        else if (C === "selected" && u)
          Vv(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var _ = C;
          o || (_ = wv(_));
          var h = _ === "defaultValue" || _ === "defaultChecked";
          if (p == null && !a && !h)
            if (f[C] = null, _ === "value" || _ === "checked") {
              let $ = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (_ === "value") {
                let E = $.defaultValue;
                $.removeAttribute(_), $.defaultValue = E, $.value = $.__value = S ? E : null;
              } else {
                let E = $.defaultChecked;
                $.removeAttribute(_), $.defaultChecked = E, $.checked = S ? E : !1;
              }
            } else
              e.removeAttribute(C);
          else h || d.includes(_) && (a || typeof p != "string") ? e[_] = p : typeof p != "function" && he(e, _, p);
        }
        C === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && on(!0), l;
}
var rl = /* @__PURE__ */ new Map();
function Zu(e) {
  var t = rl.get(e.nodeName);
  if (t) return t;
  rl.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = cu(r);
    for (var a in n)
      n[a].set && t.push(a);
    r = gs(r);
  }
  return t;
}
function ht(e, t, n, r) {
  var o = e.__styles ?? (e.__styles = {});
  o[t] !== n && (o[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""));
}
var wr, _o, gi, Ra, Bu;
const Za = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Ar(this, Ra), Ar(this, wr, /* @__PURE__ */ new WeakMap()), Ar(this, _o), Ar(this, gi), xi(this, gi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = mt(this, wr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), mt(this, wr).set(t, r), wf(this, Ra, Bu).call(this).observe(t, mt(this, gi)), () => {
      var o = mt(this, wr).get(t);
      o.delete(n), o.size === 0 && (mt(this, wr).delete(t), mt(this, _o).unobserve(t));
    };
  }
};
wr = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), Ra = /* @__PURE__ */ new WeakSet(), Bu = function() {
  return mt(this, _o) ?? xi(this, _o, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        Za.entries.set(t.target, t);
        for (var n of mt(this, wr).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
Xt(Za, "entries", /* @__PURE__ */ new WeakMap());
let Av = Za;
var Iv = /* @__PURE__ */ new Av({
  box: "border-box"
});
function ol(e, t, n) {
  var r = Iv.observe(e, () => n(e[t]));
  rn(() => (Hn(() => n(e[t])), r));
}
function il(e, t) {
  return e === t || (e == null ? void 0 : e[sr]) === t;
}
function Ln(e = {}, t, n, r) {
  return rn(() => {
    var o, a;
    return lo(() => {
      o = a, a = [], Hn(() => {
        e !== n(...a) && (t(e, ...a), o && il(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Bo(() => {
        a && il(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Ca(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.stopPropagation(), e == null ? void 0 : e.apply(this, t);
  };
}
function Ze(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Je
  ), n = t.l.u;
  if (!n) return;
  let r = () => J(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const i = /* @__PURE__ */ Oe(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(i);
  }
  n.b.length && uv(() => {
    al(t, r), Eo(n.b);
  }), Xr(() => {
    const o = Hn(() => n.m.map(Af));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && Xr(() => {
    al(t, r), Eo(n.a);
  });
}
function al(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Be(e, t) {
  var n, r = (
    /** @type {Record<string, Function[] | Function>} */
    (n = e.$$events) == null ? void 0 : n[t.type]
  ), o = Zo(r) ? r.slice() : r == null ? [] : [r];
  for (var a of o)
    a.call(this, t);
}
function Ut(e) {
  Je === null && ea(), oo && Je.l !== null ? Zv(Je).m.push(e) : Xr(() => {
    const t = Hn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $s(e) {
  Je === null && ea(), Ut(() => () => Hn(e));
}
function Rv(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function ra() {
  const e = Je;
  return e === null && ea(), (t, n, r) => {
    var o;
    const a = (
      /** @type {Record<string, Function | Function[]>} */
      (o = e.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        t
      ]
    );
    if (a) {
      const i = Zo(a) ? a.slice() : [a], s = Rv(
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
function Zv(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Cs(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), $t;
  const r = Hn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Vr = [];
function dn(e, t) {
  return {
    subscribe: Ce(e, t).subscribe
  };
}
function Ce(e, t = $t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (hs(e, s) && (e = s, n)) {
      const l = !Vr.length;
      for (const u of r)
        u[1](), Vr.push(u, e);
      if (l) {
        for (let u = 0; u < Vr.length; u += 2)
          Vr[u][0](Vr[u + 1]);
        Vr.length = 0;
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
function lr(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return dn(n, (i, s) => {
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
      (m, b) => Cs(
        m,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Eo(v), d(), l = !1;
    };
  });
}
function q(e) {
  let t;
  return Cs(e, (n) => t = n)(), t;
}
let ai = !1, Ba = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Yo(void 0),
    unsubscribe: $t
  });
  if (r.store !== e && !(Ba in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = $t;
    else {
      var o = !0;
      r.unsubscribe = Cs(e, (a) => {
        o ? r.source.v = a : G(r.source, a);
      }), o = !1;
    }
  return e && Ba in n ? q(e) : g(r.source);
}
function Bv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = $t), e;
}
function Pi(e, t) {
  return e.set(t), t;
}
function ut() {
  const e = {};
  function t() {
    Su(() => {
      for (var n in e)
        e[n].unsubscribe();
      ko(e, Ba, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Yv(e) {
  var t = ai;
  try {
    return ai = !1, [e(), ai];
  } finally {
    ai = t;
  }
}
const Kv = {
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
function Ht(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Kv
  );
}
const Wv = {
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
      iu
    )), e.special[t](n), Gs(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Gs(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ft(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: jt(0) }, Wv);
}
const Xv = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (go(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      go(o) && (o = o());
      const a = Wn(o, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (go(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Wn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === sr || t === fs) return !1;
    for (let n of e.props)
      if (go(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      go(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function xt(...e) {
  return new Proxy({ props: e }, Xv);
}
function w(e, t, n, r) {
  var o, a = (n & kf) !== 0, i = !oo || (n & Ef) !== 0, s = (n & Sf) !== 0, l = (n & Mf) !== 0, u = !1, c;
  s ? [c, u] = Yv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = sr in e || fs in e, f = s && (((o = Wn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((E) => e[t] = E))) || void 0, v = (
    /** @type {V} */
    r
  ), m = !0, b = !1, x = () => (b = !0, m && (m = !1, l ? v = Hn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && Xf(), c = x(), f && f(c));
  var _;
  if (i)
    _ = () => {
      var E = (
        /** @type {V} */
        e[t]
      );
      return E === void 0 ? x() : (m = !0, b = !1, E);
    };
  else {
    var h = (a ? Oe : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Lf, _ = () => {
      var E = g(h);
      return E !== void 0 && (v = /** @type {V} */
      void 0), E === void 0 ? v : E;
    };
  }
  if (!(n & iu))
    return _;
  if (f) {
    var C = e.$$legacy;
    return function(E, T) {
      return arguments.length > 0 ? ((!i || !T || C || u) && f(T ? _() : E), E) : _();
    };
  }
  var p = !1, $ = /* @__PURE__ */ Yo(c), S = /* @__PURE__ */ Oe(() => {
    var E = _(), T = g($);
    return p ? (p = !1, T) : $.v = E;
  });
  return a || (S.equals = ps), function(E, T) {
    if (arguments.length > 0) {
      const L = T ? g(S) : i && s ? nn(E) : E;
      return S.equals(L) || (p = !0, G($, L), b && v !== void 0 && (v = L), Hn(() => g(S))), E;
    }
    return g(S);
  };
}
function jv(e) {
  return new Fv(e);
}
var nr, hn;
class Fv {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    Ar(this, nr), Ar(this, hn);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ Yo(s);
      return r.set(i, l), l;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return g(r.get(s) ?? o(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === fs ? !0 : (g(r.get(s) ?? o(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, l) {
          return G(r.get(s) ?? o(s, l), l), Reflect.set(i, s, l);
        }
      }
    );
    xi(this, hn, (t.hydrate ? Mv : Ou)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && y(), xi(this, nr, a.$$events);
    for (const i of Object.keys(mt(this, hn)))
      i === "$set" || i === "$destroy" || i === "$on" || ko(this, i, {
        get() {
          return mt(this, hn)[i];
        },
        /** @param {any} value */
        set(s) {
          mt(this, hn)[i] = s;
        },
        enumerable: !0
      });
    mt(this, hn).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(a, i);
    }, mt(this, hn).$destroy = () => {
      Pv(mt(this, hn));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    mt(this, hn).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    mt(this, nr)[t] = mt(this, nr)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return mt(this, nr)[t].push(r), () => {
      mt(this, nr)[t] = mt(this, nr)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    mt(this, hn).$destroy();
  }
}
nr = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap();
let Yu;
typeof HTMLElement == "function" && (Yu = class extends HTMLElement {
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
          r !== "default" && (a.name = r), V(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = qv(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = hi(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = jv({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = cv(() => {
        lo(() => {
          var r;
          this.$$r = !0;
          for (const o of _i(this.$$c)) {
            if (!((r = this.$$p_d[o]) != null && r.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = hi(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = hi(e, n, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
    return _i(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function hi(e, t, n, r) {
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
function qv(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, a) {
  let i = class extends Yu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return _i(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return _i(t).forEach((s) => {
    ko(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = hi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Wn(c, s)) == null ? void 0 : u.get;
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
var Gv = { value: () => {
} };
function oa() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new pi(n);
}
function pi(e) {
  this._ = e;
}
function Uv(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
pi.prototype = oa.prototype = {
  constructor: pi,
  on: function(e, t) {
    var n = this._, r = Uv(e + "", n), o, a = -1, i = r.length;
    if (arguments.length < 2) {
      for (; ++a < i; ) if ((o = (e = r[a]).type) && (o = Jv(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < i; )
      if (o = (e = r[a]).type) n[o] = sl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = sl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new pi(e);
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
function Jv(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function sl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ya = "http://www.w3.org/1999/xhtml";
const ll = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ya,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ia(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ll.hasOwnProperty(t) ? { space: ll[t], local: e } : e;
}
function Qv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ya && t.documentElement.namespaceURI === Ya ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function e1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ku(e) {
  var t = ia(e);
  return (t.local ? e1 : Qv)(t);
}
function t1() {
}
function _s(e) {
  return e == null ? t1 : function() {
    return this.querySelector(e);
  };
}
function n1(e) {
  typeof e != "function" && (e = _s(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new un(r, this._parents);
}
function r1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function o1() {
  return [];
}
function Wu(e) {
  return e == null ? o1 : function() {
    return this.querySelectorAll(e);
  };
}
function i1(e) {
  return function() {
    return r1(e.apply(this, arguments));
  };
}
function a1(e) {
  typeof e == "function" ? e = i1(e) : e = Wu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new un(r, o);
}
function Xu(e) {
  return function() {
    return this.matches(e);
  };
}
function ju(e) {
  return function(t) {
    return t.matches(e);
  };
}
var s1 = Array.prototype.find;
function l1(e) {
  return function() {
    return s1.call(this.children, e);
  };
}
function u1() {
  return this.firstElementChild;
}
function c1(e) {
  return this.select(e == null ? u1 : l1(typeof e == "function" ? e : ju(e)));
}
var d1 = Array.prototype.filter;
function f1() {
  return Array.from(this.children);
}
function v1(e) {
  return function() {
    return d1.call(this.children, e);
  };
}
function g1(e) {
  return this.selectAll(e == null ? f1 : v1(typeof e == "function" ? e : ju(e)));
}
function h1(e) {
  typeof e != "function" && (e = Xu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new un(r, this._parents);
}
function Fu(e) {
  return new Array(e.length);
}
function p1() {
  return new un(this._enter || this._groups.map(Fu), this._parents);
}
function Ti(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ti.prototype = {
  constructor: Ti,
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
function m1(e) {
  return function() {
    return e;
  };
}
function y1(e, t, n, r, o, a) {
  for (var i = 0, s, l = t.length, u = a.length; i < u; ++i)
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new Ti(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function w1(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new Ti(e, a[s]);
  for (s = 0; s < c; ++s)
    (l = t[s]) && u.get(f[s]) === l && (o[s] = l);
}
function b1(e) {
  return e.__data__;
}
function x1(e, t) {
  if (!arguments.length) return Array.from(this, b1);
  var n = t ? w1 : y1, r = this._parents, o = this._groups;
  typeof e != "function" && (e = m1(e));
  for (var a = o.length, i = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = o[u], f = d.length, v = $1(e.call(c, c && c.__data__, u, r)), m = v.length, b = s[u] = new Array(m), x = i[u] = new Array(m), _ = l[u] = new Array(f);
    n(c, d, b, x, _, v, t);
    for (var h = 0, C = 0, p, $; h < m; ++h)
      if (p = b[h]) {
        for (h >= C && (C = h + 1); !($ = x[C]) && ++C < m; ) ;
        p._next = $ || null;
      }
  }
  return i = new un(i, r), i._enter = s, i._exit = l, i;
}
function $1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function C1() {
  return new un(this._exit || this._groups.map(Fu), this._parents);
}
function _1(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function k1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, m = 0; m < d; ++m)
      (v = u[m] || c[m]) && (f[m] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new un(s, this._parents);
}
function E1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function S1(e) {
  e || (e = M1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new un(o, this._parents).order();
}
function M1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function P1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function T1() {
  return Array.from(this);
}
function H1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function L1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function z1() {
  return !this.node();
}
function D1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], a = 0, i = o.length, s; a < i; ++a)
      (s = o[a]) && e.call(s, s.__data__, a, o);
  return this;
}
function O1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function N1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function V1(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function A1(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function I1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function R1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Z1(e, t) {
  var n = ia(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? N1 : O1 : typeof t == "function" ? n.local ? R1 : I1 : n.local ? A1 : V1)(n, t));
}
function qu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function B1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Y1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function K1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function W1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? B1 : typeof t == "function" ? K1 : Y1)(e, t, n ?? "")) : qr(this.node(), e);
}
function qr(e, t) {
  return e.style.getPropertyValue(t) || qu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function X1(e) {
  return function() {
    delete this[e];
  };
}
function j1(e, t) {
  return function() {
    this[e] = t;
  };
}
function F1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function q1(e, t) {
  return arguments.length > 1 ? this.each((t == null ? X1 : typeof t == "function" ? F1 : j1)(e, t)) : this.node()[e];
}
function Gu(e) {
  return e.trim().split(/^|\s+/);
}
function ks(e) {
  return e.classList || new Uu(e);
}
function Uu(e) {
  this._node = e, this._names = Gu(e.getAttribute("class") || "");
}
Uu.prototype = {
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
function Ju(e, t) {
  for (var n = ks(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Qu(e, t) {
  for (var n = ks(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function G1(e) {
  return function() {
    Ju(this, e);
  };
}
function U1(e) {
  return function() {
    Qu(this, e);
  };
}
function J1(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ju : Qu)(this, e);
  };
}
function Q1(e, t) {
  var n = Gu(e + "");
  if (arguments.length < 2) {
    for (var r = ks(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? J1 : t ? G1 : U1)(n, t));
}
function eg() {
  this.textContent = "";
}
function tg(e) {
  return function() {
    this.textContent = e;
  };
}
function ng(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function rg(e) {
  return arguments.length ? this.each(e == null ? eg : (typeof e == "function" ? ng : tg)(e)) : this.node().textContent;
}
function og() {
  this.innerHTML = "";
}
function ig(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ag(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function sg(e) {
  return arguments.length ? this.each(e == null ? og : (typeof e == "function" ? ag : ig)(e)) : this.node().innerHTML;
}
function lg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ug() {
  return this.each(lg);
}
function cg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function dg() {
  return this.each(cg);
}
function fg(e) {
  var t = typeof e == "function" ? e : Ku(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vg() {
  return null;
}
function gg(e, t) {
  var n = typeof e == "function" ? e : Ku(e), r = t == null ? vg : typeof t == "function" ? t : _s(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hg() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function pg() {
  return this.each(hg);
}
function mg() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function yg() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function wg(e) {
  return this.select(e ? yg : mg);
}
function bg(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function xg(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function $g(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Cg(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function _g(e, t, n) {
  return function() {
    var r = this.__on, o, a = xg(t);
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
function kg(e, t, n) {
  var r = $g(e + ""), o, a = r.length, i;
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
  for (s = t ? _g : Cg, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function ec(e, t, n) {
  var r = qu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Eg(e, t) {
  return function() {
    return ec(this, e, t);
  };
}
function Sg(e, t) {
  return function() {
    return ec(this, e, t.apply(this, arguments));
  };
}
function Mg(e, t) {
  return this.each((typeof t == "function" ? Sg : Eg)(e, t));
}
function* Pg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var tc = [null];
function un(e, t) {
  this._groups = e, this._parents = t;
}
function Ko() {
  return new un([[document.documentElement]], tc);
}
function Tg() {
  return this;
}
un.prototype = Ko.prototype = {
  constructor: un,
  select: n1,
  selectAll: a1,
  selectChild: c1,
  selectChildren: g1,
  filter: h1,
  data: x1,
  enter: p1,
  exit: C1,
  join: _1,
  merge: k1,
  selection: Tg,
  order: E1,
  sort: S1,
  call: P1,
  nodes: T1,
  node: H1,
  size: L1,
  empty: z1,
  each: D1,
  attr: Z1,
  style: W1,
  property: q1,
  classed: Q1,
  text: rg,
  html: sg,
  raise: ug,
  lower: dg,
  append: fg,
  insert: gg,
  remove: pg,
  clone: wg,
  datum: bg,
  on: kg,
  dispatch: Mg,
  [Symbol.iterator]: Pg
};
function fn(e) {
  return typeof e == "string" ? new un([[document.querySelector(e)]], [document.documentElement]) : new un([[e]], tc);
}
function Hg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function pn(e, t) {
  if (e = Hg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Lg = { passive: !1 }, Ho = { capture: !0, passive: !1 };
function _a(e) {
  e.stopImmediatePropagation();
}
function Zr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nc(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", Zr, Ho);
  "onselectstart" in t ? n.on("selectstart.drag", Zr, Ho) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rc(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Zr, Ho), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const si = (e) => () => e;
function Ka(e, {
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
Ka.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zg(e) {
  return !e.ctrlKey && !e.button;
}
function Dg() {
  return this.parentNode;
}
function Og(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ng() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Vg() {
  var e = zg, t = Dg, n = Og, r = Ng, o = {}, a = oa("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(p) {
    p.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", _, Lg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(p, $) {
    if (!(c || !e.call(this, p, $))) {
      var S = C(this, t.call(this, p, $), p, $, "mouse");
      S && (fn(p.view).on("mousemove.drag", m, Ho).on("mouseup.drag", b, Ho), nc(p.view), _a(p), u = !1, s = p.clientX, l = p.clientY, S("start", p));
    }
  }
  function m(p) {
    if (Zr(p), !u) {
      var $ = p.clientX - s, S = p.clientY - l;
      u = $ * $ + S * S > d;
    }
    o.mouse("drag", p);
  }
  function b(p) {
    fn(p.view).on("mousemove.drag mouseup.drag", null), rc(p.view, u), Zr(p), o.mouse("end", p);
  }
  function x(p, $) {
    if (e.call(this, p, $)) {
      var S = p.changedTouches, E = t.call(this, p, $), T = S.length, L, z;
      for (L = 0; L < T; ++L)
        (z = C(this, E, p, $, S[L].identifier, S[L])) && (_a(p), z("start", p, S[L]));
    }
  }
  function _(p) {
    var $ = p.changedTouches, S = $.length, E, T;
    for (E = 0; E < S; ++E)
      (T = o[$[E].identifier]) && (Zr(p), T("drag", p, $[E]));
  }
  function h(p) {
    var $ = p.changedTouches, S = $.length, E, T;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < S; ++E)
      (T = o[$[E].identifier]) && (_a(p), T("end", p, $[E]));
  }
  function C(p, $, S, E, T, L) {
    var z = a.copy(), I = pn(L || S, $), N, B, M;
    if ((M = n.call(p, new Ka("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: T,
      active: i,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: z
    }), E)) != null)
      return N = M.x - I[0] || 0, B = M.y - I[1] || 0, function H(k, P, O) {
        var A = I, Y;
        switch (k) {
          case "start":
            o[T] = H, Y = i++;
            break;
          case "end":
            delete o[T], --i;
          // falls through
          case "drag":
            I = pn(O || P, $), Y = i;
            break;
        }
        z.call(
          k,
          p,
          new Ka(k, {
            sourceEvent: P,
            subject: M,
            target: f,
            identifier: T,
            active: Y,
            x: I[0] + N,
            y: I[1] + B,
            dx: I[0] - A[0],
            dy: I[1] - A[1],
            dispatch: z
          }),
          E
        );
      };
  }
  return f.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : si(!!p), f) : e;
  }, f.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : si(p), f) : t;
  }, f.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : si(p), f) : n;
  }, f.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : si(!!p), f) : r;
  }, f.on = function() {
    var p = a.on.apply(a, arguments);
    return p === a ? f : p;
  }, f.clickDistance = function(p) {
    return arguments.length ? (d = (p = +p) * p, f) : Math.sqrt(d);
  }, f;
}
function Es(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function oc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Wo() {
}
var Lo = 0.7, Hi = 1 / Lo, Br = "\\s*([+-]?\\d+)\\s*", zo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ag = /^#([0-9a-f]{3,8})$/, Ig = new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`), Rg = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Zg = new RegExp(`^rgba\\(${Br},${Br},${Br},${zo}\\)$`), Bg = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${zo}\\)$`), Yg = new RegExp(`^hsl\\(${zo},${Mn},${Mn}\\)$`), Kg = new RegExp(`^hsla\\(${zo},${Mn},${Mn},${zo}\\)$`), ul = {
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
Es(Wo, Do, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: cl,
  // Deprecated! Use color.formatHex.
  formatHex: cl,
  formatHex8: Wg,
  formatHsl: Xg,
  formatRgb: dl,
  toString: dl
});
function cl() {
  return this.rgb().formatHex();
}
function Wg() {
  return this.rgb().formatHex8();
}
function Xg() {
  return ic(this).formatHsl();
}
function dl() {
  return this.rgb().formatRgb();
}
function Do(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ag.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? fl(t) : n === 3 ? new Ft(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? li(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? li(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ig.exec(e)) ? new Ft(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Zg.exec(e)) ? li(t[1], t[2], t[3], t[4]) : (t = Bg.exec(e)) ? li(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Yg.exec(e)) ? hl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Kg.exec(e)) ? hl(t[1], t[2] / 100, t[3] / 100, t[4]) : ul.hasOwnProperty(e) ? fl(ul[e]) : e === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function fl(e) {
  return new Ft(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function li(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ft(e, t, n, r);
}
function jg(e) {
  return e instanceof Wo || (e = Do(e)), e ? (e = e.rgb(), new Ft(e.r, e.g, e.b, e.opacity)) : new Ft();
}
function Wa(e, t, n, r) {
  return arguments.length === 1 ? jg(e) : new Ft(e, t, n, r ?? 1);
}
function Ft(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Es(Ft, Wa, oc(Wo, {
  brighter(e) {
    return e = e == null ? Hi : Math.pow(Hi, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lo : Math.pow(Lo, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft($r(this.r), $r(this.g), $r(this.b), Li(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vl,
  // Deprecated! Use color.formatHex.
  formatHex: vl,
  formatHex8: Fg,
  formatRgb: gl,
  toString: gl
}));
function vl() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}`;
}
function Fg() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}${br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function gl() {
  const e = Li(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$r(this.r)}, ${$r(this.g)}, ${$r(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Li(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $r(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function br(e) {
  return e = $r(e), (e < 16 ? "0" : "") + e.toString(16);
}
function hl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new yn(e, t, n, r);
}
function ic(e) {
  if (e instanceof yn) return new yn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wo || (e = Do(e)), !e) return new yn();
  if (e instanceof yn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), a = Math.max(t, n, r), i = NaN, s = a - o, l = (a + o) / 2;
  return s ? (t === a ? i = (n - r) / s + (n < r) * 6 : n === a ? i = (r - t) / s + 2 : i = (t - n) / s + 4, s /= l < 0.5 ? a + o : 2 - a - o, i *= 60) : s = l > 0 && l < 1 ? 0 : i, new yn(i, s, l, e.opacity);
}
function qg(e, t, n, r) {
  return arguments.length === 1 ? ic(e) : new yn(e, t, n, r ?? 1);
}
function yn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Es(yn, qg, oc(Wo, {
  brighter(e) {
    return e = e == null ? Hi : Math.pow(Hi, e), new yn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Lo : Math.pow(Lo, e), new yn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ft(
      ka(e >= 240 ? e - 240 : e + 120, o, r),
      ka(e, o, r),
      ka(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new yn(pl(this.h), ui(this.s), ui(this.l), Li(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Li(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${pl(this.h)}, ${ui(this.s) * 100}%, ${ui(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function pl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ui(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ka(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ac = (e) => () => e;
function Gg(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ug(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Jg(e) {
  return (e = +e) == 1 ? sc : function(t, n) {
    return n - t ? Ug(t, n, e) : ac(isNaN(t) ? n : t);
  };
}
function sc(e, t) {
  var n = t - e;
  return n ? Gg(e, n) : ac(isNaN(e) ? t : e);
}
const ml = function e(t) {
  var n = Jg(t);
  function r(o, a) {
    var i = n((o = Wa(o)).r, (a = Wa(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = sc(o.opacity, a.opacity);
    return function(c) {
      return o.r = i(c), o.g = s(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function or(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ea = new RegExp(Xa.source, "g");
function Qg(e) {
  return function() {
    return e;
  };
}
function eh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function th(e, t) {
  var n = Xa.lastIndex = Ea.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = Xa.exec(e)) && (o = Ea.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: or(r, o) })), n = Ea.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? eh(l[0].x) : Qg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var yl = 180 / Math.PI, lc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function uc(e, t, n, r, o, a) {
  var i, s, l;
  return (i = Math.sqrt(e * e + t * t)) && (e /= i, t /= i), (l = e * n + t * r) && (n -= e * l, r -= t * l), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, l /= s), e * r < t * n && (e = -e, t = -t, l = -l, i = -i), {
    translateX: o,
    translateY: a,
    rotate: Math.atan2(t, e) * yl,
    skewX: Math.atan(l) * yl,
    scaleX: i,
    scaleY: s
  };
}
var ci;
function nh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? lc : uc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function rh(e) {
  return e == null || (ci || (ci = document.createElementNS("http://www.w3.org/2000/svg", "g")), ci.setAttribute("transform", e), !(e = ci.transform.baseVal.consolidate())) ? lc : (e = e.matrix, uc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function cc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      m.push({ i: b - 4, x: or(u, d) }, { i: b - 2, x: or(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: or(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: or(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, m) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      m.push({ i: b - 4, x: or(u, d) }, { i: b - 2, x: or(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var m = -1, b = f.length, x; ++m < b; ) d[(x = f[m]).i] = x.x(v);
      return d.join("");
    };
  };
}
var oh = cc(nh, "px, ", "px)", "deg)"), ih = cc(rh, ", ", ")", ")"), ah = 1e-12;
function wl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function sh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function lh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const uh = function e(t, n, r) {
  function o(a, i) {
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, m = d - l, b = v * v + m * m, x, _;
    if (b < ah)
      _ = Math.log(f / u) / t, x = function(E) {
        return [
          s + E * v,
          l + E * m,
          u * Math.exp(t * E * _)
        ];
      };
    else {
      var h = Math.sqrt(b), C = (f * f - u * u + r * b) / (2 * u * n * h), p = (f * f - u * u - r * b) / (2 * f * n * h), $ = Math.log(Math.sqrt(C * C + 1) - C), S = Math.log(Math.sqrt(p * p + 1) - p);
      _ = (S - $) / t, x = function(E) {
        var T = E * _, L = wl($), z = u / (n * h) * (L * lh(t * T + $) - sh($));
        return [
          s + z * v,
          l + z * m,
          u * L / wl(t * T + $)
        ];
      };
    }
    return x.duration = _ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Gr = 0, wo = 0, po = 0, dc = 1e3, zi, bo, Di = 0, Er = 0, aa = 0, Oo = typeof performance == "object" && performance.now ? performance : Date, fc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ss() {
  return Er || (fc(ch), Er = Oo.now() + aa);
}
function ch() {
  Er = 0;
}
function Oi() {
  this._call = this._time = this._next = null;
}
Oi.prototype = vc.prototype = {
  constructor: Oi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ss() : +n) + (t == null ? 0 : +t), !this._next && bo !== this && (bo ? bo._next = this : zi = this, bo = this), this._call = e, this._time = n, ja();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ja());
  }
};
function vc(e, t, n) {
  var r = new Oi();
  return r.restart(e, t, n), r;
}
function dh() {
  Ss(), ++Gr;
  for (var e = zi, t; e; )
    (t = Er - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Gr;
}
function bl() {
  Er = (Di = Oo.now()) + aa, Gr = wo = 0;
  try {
    dh();
  } finally {
    Gr = 0, vh(), Er = 0;
  }
}
function fh() {
  var e = Oo.now(), t = e - Di;
  t > dc && (aa -= t, Di = e);
}
function vh() {
  for (var e, t = zi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : zi = n);
  bo = e, ja(r);
}
function ja(e) {
  if (!Gr) {
    wo && (wo = clearTimeout(wo));
    var t = e - Er;
    t > 24 ? (e < 1 / 0 && (wo = setTimeout(bl, e - Oo.now() - aa)), po && (po = clearInterval(po))) : (po || (Di = Oo.now(), po = setInterval(fh, dc)), Gr = 1, fc(bl));
  }
}
function xl(e, t, n) {
  var r = new Oi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var gh = oa("start", "end", "cancel", "interrupt"), hh = [], gc = 0, $l = 1, Fa = 2, mi = 3, Cl = 4, qa = 5, yi = 6;
function sa(e, t, n, r, o, a) {
  var i = e.__transition;
  if (!i) e.__transition = {};
  else if (n in i) return;
  ph(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: gh,
    tween: hh,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: gc
  });
}
function Ms(e, t) {
  var n = _n(e, t);
  if (n.state > gc) throw new Error("too late; already scheduled");
  return n;
}
function Vn(e, t) {
  var n = _n(e, t);
  if (n.state > mi) throw new Error("too late; already running");
  return n;
}
function _n(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function ph(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = vc(a, 0, n.time);
  function a(u) {
    n.state = $l, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== $l) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === mi) return xl(i);
        v.state === Cl ? (v.state = yi, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = yi, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if (xl(function() {
      n.state === mi && (n.state = Cl, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = Fa, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Fa) {
      for (n.state = mi, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (v = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = v);
      o.length = d + 1;
    }
  }
  function s(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = qa, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === qa && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = yi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function wi(e, t) {
  var n = e.__transition, r, o, a = !0, i;
  if (n) {
    t = t == null ? null : t + "";
    for (i in n) {
      if ((r = n[i]).name !== t) {
        a = !1;
        continue;
      }
      o = r.state > Fa && r.state < qa, r.state = yi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[i];
    }
    a && delete e.__transition;
  }
}
function mh(e) {
  return this.each(function() {
    wi(this, e);
  });
}
function yh(e, t) {
  var n, r;
  return function() {
    var o = Vn(this, e), a = o.tween;
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
function wh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = Vn(this, e), i = a.tween;
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
function bh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = _n(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? yh : wh)(n, e, t));
}
function Ps(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Vn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return _n(o, r).value[t];
  };
}
function hc(e, t) {
  var n;
  return (typeof t == "number" ? or : t instanceof Do ? ml : (n = Do(t)) ? (t = n, ml) : th)(e, t);
}
function xh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function $h(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ch(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function _h(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttributeNS(e.space, e.local);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function kh(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttribute(e) : (i = this.getAttribute(e), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function Eh(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function Sh(e, t) {
  var n = ia(e), r = n === "transform" ? ih : hc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Eh : kh)(n, r, Ps(this, "attr." + e, t)) : t == null ? (n.local ? $h : xh)(n) : (n.local ? _h : Ch)(n, r, t));
}
function Mh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Ph(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Th(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Ph(e, a)), n;
  }
  return o._value = t, o;
}
function Hh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Mh(e, a)), n;
  }
  return o._value = t, o;
}
function Lh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ia(e);
  return this.tween(n, (r.local ? Th : Hh)(r, t));
}
function zh(e, t) {
  return function() {
    Ms(this, e).delay = +t.apply(this, arguments);
  };
}
function Dh(e, t) {
  return t = +t, function() {
    Ms(this, e).delay = t;
  };
}
function Oh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zh : Dh)(t, e)) : _n(this.node(), t).delay;
}
function Nh(e, t) {
  return function() {
    Vn(this, e).duration = +t.apply(this, arguments);
  };
}
function Vh(e, t) {
  return t = +t, function() {
    Vn(this, e).duration = t;
  };
}
function Ah(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Nh : Vh)(t, e)) : _n(this.node(), t).duration;
}
function Ih(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Vn(this, e).ease = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each(Ih(t, e)) : _n(this.node(), t).ease;
}
function Zh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Vn(this, e).ease = n;
  };
}
function Bh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Zh(this._id, e));
}
function Yh(e) {
  typeof e != "function" && (e = Xu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new qn(r, this._parents, this._name, this._id);
}
function Kh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new qn(i, this._parents, this._name, this._id);
}
function Wh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Xh(e, t, n) {
  var r, o, a = Wh(t) ? Ms : Vn;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function jh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? _n(this.node(), n).on.on(e) : this.each(Xh(n, e, t));
}
function Fh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function qh() {
  return this.on("end.remove", Fh(this._id));
}
function Gh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = _s(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, sa(u[f], t, n, f, u, _n(c, n)));
  return new qn(a, this._parents, t, n);
}
function Uh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Wu(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, m = _n(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && sa(v, t, n, b, f, m);
        a.push(f), i.push(c);
      }
  return new qn(a, i, t, n);
}
var Jh = Ko.prototype.constructor;
function Qh() {
  return new Jh(this._groups, this._parents);
}
function ep(e, t) {
  var n, r, o;
  return function() {
    var a = qr(this, e), i = (this.style.removeProperty(e), qr(this, e));
    return a === i ? null : a === n && i === r ? o : o = t(n = a, r = i);
  };
}
function pc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function tp(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = qr(this, e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function np(e, t, n) {
  var r, o, a;
  return function() {
    var i = qr(this, e), s = n(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(e), qr(this, e))), i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s));
  };
}
function rp(e, t) {
  var n, r, o, a = "style." + t, i = "end." + a, s;
  return function() {
    var l = Vn(this, e), u = l.on, c = l.value[a] == null ? s || (s = pc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function op(e, t, n) {
  var r = (e += "") == "transform" ? oh : hc;
  return t == null ? this.styleTween(e, ep(e, r)).on("end.style." + e, pc(e)) : typeof t == "function" ? this.styleTween(e, np(e, r, Ps(this, "style." + e, t))).each(rp(this._id, e)) : this.styleTween(e, tp(e, r, t), n).on("end.style." + e, null);
}
function ip(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function ap(e, t, n) {
  var r, o;
  function a() {
    var i = t.apply(this, arguments);
    return i !== o && (r = (o = i) && ip(e, i, n)), r;
  }
  return a._value = t, a;
}
function sp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, ap(e, t, n ?? ""));
}
function lp(e) {
  return function() {
    this.textContent = e;
  };
}
function up(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function cp(e) {
  return this.tween("text", typeof e == "function" ? up(Ps(this, "text", e)) : lp(e == null ? "" : e + ""));
}
function dp(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function fp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && dp(o)), t;
  }
  return r._value = e, r;
}
function vp(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, fp(e));
}
function gp() {
  for (var e = this._name, t = this._id, n = mc(), r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      if (l = i[u]) {
        var c = _n(l, t);
        sa(l, e, n, u, i, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new qn(r, this._parents, e, n);
}
function hp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(a, i) {
    var s = { value: i }, l = { value: function() {
      --o === 0 && a();
    } };
    n.each(function() {
      var u = Vn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(l)), u.on = t;
    }), o === 0 && a();
  });
}
var pp = 0;
function qn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function mc() {
  return ++pp;
}
var Rn = Ko.prototype;
qn.prototype = {
  constructor: qn,
  select: Gh,
  selectAll: Uh,
  selectChild: Rn.selectChild,
  selectChildren: Rn.selectChildren,
  filter: Yh,
  merge: Kh,
  selection: Qh,
  transition: gp,
  call: Rn.call,
  nodes: Rn.nodes,
  node: Rn.node,
  size: Rn.size,
  empty: Rn.empty,
  each: Rn.each,
  on: jh,
  attr: Sh,
  attrTween: Lh,
  style: op,
  styleTween: sp,
  text: cp,
  textTween: vp,
  remove: qh,
  tween: bh,
  delay: Oh,
  duration: Ah,
  ease: Rh,
  easeVarying: Bh,
  end: hp,
  [Symbol.iterator]: Rn[Symbol.iterator]
};
function mp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var yp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: mp
};
function wp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function bp(e) {
  var t, n;
  e instanceof qn ? (t = e._id, e = e._name) : (t = mc(), (n = yp).time = Ss(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && sa(l, e, t, u, i, n || wp(l, t));
  return new qn(r, this._parents, e, t);
}
Ko.prototype.interrupt = mh;
Ko.prototype.transition = bp;
const di = (e) => () => e;
function xp(e, {
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
var la = new Bn(1, 0, 0);
yc.prototype = Bn.prototype;
function yc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return la;
  return e.__zoom;
}
function Sa(e) {
  e.stopImmediatePropagation();
}
function mo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function $p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Cp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function _l() {
  return this.__zoom || la;
}
function _p(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function kp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ep(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function wc() {
  var e = $p, t = Cp, n = Ep, r = _p, o = kp, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = uh, u = oa("start", "zoom", "end"), c, d, f, v = 500, m = 150, b = 0, x = 10;
  function _(M) {
    M.property("__zoom", _l).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", z).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(M, H, k, P) {
    var O = M.selection ? M.selection() : M;
    O.property("__zoom", _l), M !== O ? $(M, H, k, P) : O.interrupt().each(function() {
      S(this, arguments).event(P).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end();
    });
  }, _.scaleBy = function(M, H, k, P) {
    _.scaleTo(M, function() {
      var O = this.__zoom.k, A = typeof H == "function" ? H.apply(this, arguments) : H;
      return O * A;
    }, k, P);
  }, _.scaleTo = function(M, H, k, P) {
    _.transform(M, function() {
      var O = t.apply(this, arguments), A = this.__zoom, Y = k == null ? p(O) : typeof k == "function" ? k.apply(this, arguments) : k, j = A.invert(Y), F = typeof H == "function" ? H.apply(this, arguments) : H;
      return n(C(h(A, F), Y, j), O, i);
    }, k, P);
  }, _.translateBy = function(M, H, k, P) {
    _.transform(M, function() {
      return n(this.__zoom.translate(
        typeof H == "function" ? H.apply(this, arguments) : H,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), i);
    }, null, P);
  }, _.translateTo = function(M, H, k, P, O) {
    _.transform(M, function() {
      var A = t.apply(this, arguments), Y = this.__zoom, j = P == null ? p(A) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(la.translate(j[0], j[1]).scale(Y.k).translate(
        typeof H == "function" ? -H.apply(this, arguments) : -H,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), A, i);
    }, P, O);
  };
  function h(M, H) {
    return H = Math.max(a[0], Math.min(a[1], H)), H === M.k ? M : new Bn(H, M.x, M.y);
  }
  function C(M, H, k) {
    var P = H[0] - k[0] * M.k, O = H[1] - k[1] * M.k;
    return P === M.x && O === M.y ? M : new Bn(M.k, P, O);
  }
  function p(M) {
    return [(+M[0][0] + +M[1][0]) / 2, (+M[0][1] + +M[1][1]) / 2];
  }
  function $(M, H, k, P) {
    M.on("start.zoom", function() {
      S(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      S(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var O = this, A = arguments, Y = S(O, A).event(P), j = t.apply(O, A), F = k == null ? p(j) : typeof k == "function" ? k.apply(O, A) : k, ae = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), Q = O.__zoom, W = typeof H == "function" ? H.apply(O, A) : H, le = l(Q.invert(F).concat(ae / Q.k), W.invert(F).concat(ae / W.k));
      return function($e) {
        if ($e === 1) $e = W;
        else {
          var _e = le($e), me = ae / _e[2];
          $e = new Bn(me, F[0] - _e[0] * me, F[1] - _e[1] * me);
        }
        Y.zoom(null, $e);
      };
    });
  }
  function S(M, H, k) {
    return !k && M.__zooming || new E(M, H);
  }
  function E(M, H) {
    this.that = M, this.args = H, this.active = 0, this.sourceEvent = null, this.extent = t.apply(M, H), this.taps = 0;
  }
  E.prototype = {
    event: function(M) {
      return M && (this.sourceEvent = M), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(M, H) {
      return this.mouse && M !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])), this.touch0 && M !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])), this.touch1 && M !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])), this.that.__zoom = H, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(M) {
      var H = fn(this.that).datum();
      u.call(
        M,
        this.that,
        new xp(M, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        H
      );
    }
  };
  function T(M, ...H) {
    if (!e.apply(this, arguments)) return;
    var k = S(this, H).event(M), P = this.__zoom, O = Math.max(a[0], Math.min(a[1], P.k * Math.pow(2, r.apply(this, arguments)))), A = pn(M);
    if (k.wheel)
      (k.mouse[0][0] !== A[0] || k.mouse[0][1] !== A[1]) && (k.mouse[1] = P.invert(k.mouse[0] = A)), clearTimeout(k.wheel);
    else {
      if (P.k === O) return;
      k.mouse = [A, P.invert(A)], wi(this), k.start();
    }
    mo(M), k.wheel = setTimeout(Y, m), k.zoom("mouse", n(C(h(P, O), k.mouse[0], k.mouse[1]), k.extent, i));
    function Y() {
      k.wheel = null, k.end();
    }
  }
  function L(M, ...H) {
    if (f || !e.apply(this, arguments)) return;
    var k = M.currentTarget, P = S(this, H, !0).event(M), O = fn(M.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", ae, !0), A = pn(M, k), Y = M.clientX, j = M.clientY;
    nc(M.view), Sa(M), P.mouse = [A, this.__zoom.invert(A)], wi(this), P.start();
    function F(Q) {
      if (mo(Q), !P.moved) {
        var W = Q.clientX - Y, le = Q.clientY - j;
        P.moved = W * W + le * le > b;
      }
      P.event(Q).zoom("mouse", n(C(P.that.__zoom, P.mouse[0] = pn(Q, k), P.mouse[1]), P.extent, i));
    }
    function ae(Q) {
      O.on("mousemove.zoom mouseup.zoom", null), rc(Q.view, P.moved), mo(Q), P.event(Q).end();
    }
  }
  function z(M, ...H) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, P = pn(M.changedTouches ? M.changedTouches[0] : M, this), O = k.invert(P), A = k.k * (M.shiftKey ? 0.5 : 2), Y = n(C(h(k, A), P, O), t.apply(this, H), i);
      mo(M), s > 0 ? fn(this).transition().duration(s).call($, Y, P, M) : fn(this).call(_.transform, Y, P, M);
    }
  }
  function I(M, ...H) {
    if (e.apply(this, arguments)) {
      var k = M.touches, P = k.length, O = S(this, H, M.changedTouches.length === P).event(M), A, Y, j, F;
      for (Sa(M), Y = 0; Y < P; ++Y)
        j = k[Y], F = pn(j, this), F = [F, this.__zoom.invert(F), j.identifier], O.touch0 ? !O.touch1 && O.touch0[2] !== F[2] && (O.touch1 = F, O.taps = 0) : (O.touch0 = F, A = !0, O.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (O.taps < 2 && (d = F[0], c = setTimeout(function() {
        c = null;
      }, v)), wi(this), O.start());
    }
  }
  function N(M, ...H) {
    if (this.__zooming) {
      var k = S(this, H).event(M), P = M.changedTouches, O = P.length, A, Y, j, F;
      for (mo(M), A = 0; A < O; ++A)
        Y = P[A], j = pn(Y, this), k.touch0 && k.touch0[2] === Y.identifier ? k.touch0[0] = j : k.touch1 && k.touch1[2] === Y.identifier && (k.touch1[0] = j);
      if (Y = k.that.__zoom, k.touch1) {
        var ae = k.touch0[0], Q = k.touch0[1], W = k.touch1[0], le = k.touch1[1], $e = ($e = W[0] - ae[0]) * $e + ($e = W[1] - ae[1]) * $e, _e = (_e = le[0] - Q[0]) * _e + (_e = le[1] - Q[1]) * _e;
        Y = h(Y, Math.sqrt($e / _e)), j = [(ae[0] + W[0]) / 2, (ae[1] + W[1]) / 2], F = [(Q[0] + le[0]) / 2, (Q[1] + le[1]) / 2];
      } else if (k.touch0) j = k.touch0[0], F = k.touch0[1];
      else return;
      k.zoom("touch", n(C(Y, j, F), k.extent, i));
    }
  }
  function B(M, ...H) {
    if (this.__zooming) {
      var k = S(this, H).event(M), P = M.changedTouches, O = P.length, A, Y;
      for (Sa(M), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), A = 0; A < O; ++A)
        Y = P[A], k.touch0 && k.touch0[2] === Y.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === Y.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (Y = pn(Y, this), Math.hypot(d[0] - Y[0], d[1] - Y[1]) < x)) {
        var j = fn(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(M) {
    return arguments.length ? (r = typeof M == "function" ? M : di(+M), _) : r;
  }, _.filter = function(M) {
    return arguments.length ? (e = typeof M == "function" ? M : di(!!M), _) : e;
  }, _.touchable = function(M) {
    return arguments.length ? (o = typeof M == "function" ? M : di(!!M), _) : o;
  }, _.extent = function(M) {
    return arguments.length ? (t = typeof M == "function" ? M : di([[+M[0][0], +M[0][1]], [+M[1][0], +M[1][1]]]), _) : t;
  }, _.scaleExtent = function(M) {
    return arguments.length ? (a[0] = +M[0], a[1] = +M[1], _) : [a[0], a[1]];
  }, _.translateExtent = function(M) {
    return arguments.length ? (i[0][0] = +M[0][0], i[1][0] = +M[1][0], i[0][1] = +M[0][1], i[1][1] = +M[1][1], _) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
  }, _.constrain = function(M) {
    return arguments.length ? (n = M, _) : n;
  }, _.duration = function(M) {
    return arguments.length ? (s = +M, _) : s;
  }, _.interpolate = function(M) {
    return arguments.length ? (l = M, _) : l;
  }, _.on = function() {
    var M = u.on.apply(u, arguments);
    return M === u ? _ : M;
  }, _.clickDistance = function(M) {
    return arguments.length ? (b = (M = +M) * M, _) : Math.sqrt(b);
  }, _.tapDistance = function(M) {
    return arguments.length ? (x = +M, _) : x;
  }, _;
}
const Ur = {
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
}, Ni = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Sr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Sr || (Sr = {}));
var ur;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ur || (ur = {}));
var Vi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Vi || (Vi = {}));
const Ga = {
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
var Yr;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Yr || (Yr = {}));
var No;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(No || (No = {}));
var Te;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Te || (Te = {}));
const kl = {
  [Te.Left]: Te.Right,
  [Te.Right]: Te.Left,
  [Te.Top]: Te.Bottom,
  [Te.Bottom]: Te.Top
};
function Sp(e, t) {
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
function El(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, a) => {
    t != null && t.has(a) || r.push(o);
  }), r.length && n(r);
}
function Mp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Pp = (e) => "id" in e && "source" in e && "target" in e, Tp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ts = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Xo = (e, t = [0, 0]) => {
  const { width: n, height: r } = pr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, Hp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const a = typeof o == "string";
    let i = !t.nodeLookup && !a ? o : void 0;
    t.nodeLookup && (i = a ? t.nodeLookup.get(o) : Ts(o) ? o : t.nodeLookup.get(o.id));
    const s = i ? Ai(i, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ua(r, s);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ca(n);
}, jo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Ai(r);
      n = ua(n, o);
    }
  }), ca(n);
}, bc = (e, t, [n, r, o] = [0, 0, 1], a = !1, i = !1) => {
  const s = {
    ...Fo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (i && !d || f)
      continue;
    const v = c.width ?? u.width ?? u.initialWidth ?? null, m = c.height ?? u.height ?? u.initialHeight ?? null, b = Vo(s, Qr(u)), x = (v ?? 0) * (m ?? 0), _ = a && b > 0;
    (!u.internals.handleBounds || _ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Ua = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Sl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Ml({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = jo(e), l = Ls(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function Lp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", Ur.error005());
    else {
      const v = s.measured.width, m = s.measured.height;
      v && m && (d = [
        [l, u],
        [l + v, u + m]
      ]);
    }
  else s && eo(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = eo(d) ? Mr(t, d, i.measured) : t;
  return (i.measured.width === void 0 || i.measured.height === void 0) && (a == null || a("015", Ur.error015())), {
    position: {
      x: f.x - l + (i.measured.width ?? 0) * c[0],
      y: f.y - u + (i.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function xc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const a = new Set(e.map((d) => d.id)), i = [];
  for (const d of n) {
    if (d.deletable === !1)
      continue;
    const f = a.has(d.id), v = !f && d.parentId && i.find((m) => m.id === d.parentId);
    (f || v) && i.push(d);
  }
  const s = new Set(t.map((d) => d.id)), l = r.filter((d) => d.deletable !== !1), u = Ua(i, l);
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
const Jr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Mr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Jr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Jr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function $c(e, t, n) {
  const { width: r, height: o } = pr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return Mr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Pl = (e, t, n) => e < t ? Jr(Math.abs(e - t), 1, t) / t : e > n ? -Jr(Math.abs(e - n), 1, t) / t : 0, Cc = (e, t, n = 15, r = 40) => {
  const o = Pl(e.x, r, t.width - r) * n, a = Pl(e.y, r, t.height - r) * n;
  return [o, a];
}, ua = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ja = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ca = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Qr = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = Ts(e) ? e.internals.positionAbsolute : Xo(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Ai = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = Ts(e) ? e.internals.positionAbsolute : Xo(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, _c = (e, t) => ca(ua(Ja(e), Ja(t))), Vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Tl = (e) => Yn(e.width) && Yn(e.height) && Yn(e.x) && Yn(e.y), Yn = (e) => !isNaN(e) && isFinite(e), zp = (e, t) => {
}, Hs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Fo = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? Hs(s, i) : s;
}, kc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Ls = (e, t, n, r, o, a) => {
  const i = t / (e.width * (1 + a)), s = n / (e.height * (1 + a)), l = Math.min(i, s), u = Jr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, v = n / 2 - d * u;
  return { x: f, y: v, zoom: u };
}, Ii = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function eo(e) {
  return e !== void 0 && e !== "parent";
}
function pr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ec(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Dp(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function Ma(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = Xn(e), s = Fo({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Hs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const zs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Op = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Np = ["INPUT", "SELECT", "TEXTAREA"];
function Vp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Np.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Sc = (e) => "clientX" in e, Xn = (e, t) => {
  var n, r;
  const o = Sc(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Hl = (e, t, n, r, o) => {
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
      ...zs(i)
    };
  });
};
function Ap({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: a, targetControlX: i, targetControlY: s }) {
  const l = e * 0.125 + o * 0.375 + i * 0.375 + n * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function fi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ll({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Te.Left:
      return [t - fi(t - r, a), n];
    case Te.Right:
      return [t + fi(r - t, a), n];
    case Te.Top:
      return [t, n - fi(n - o, a)];
    case Te.Bottom:
      return [t, n + fi(o - n, a)];
  }
}
function Mc({ sourceX: e, sourceY: t, sourcePosition: n = Te.Bottom, targetX: r, targetY: o, targetPosition: a = Te.Top, curvature: i = 0.25 }) {
  const [s, l] = Ll({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = Ll({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, m] = Ap({
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
function Pc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, a = n < e ? n + o : n - o, i = Math.abs(r - t) / 2, s = r < t ? r + i : r - i;
  return [a, s, o, i];
}
function Ip({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const a = n || t.selected || e.selected, i = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (a ? i : 0);
}
function Rp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const a = ua(Ai(e), Ai(t));
  a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1);
  const i = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Vo(i, ca(a)) > 0;
}
const Zp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Bp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Yp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Pp(e) ? n = { ...e } : n = {
    ...e,
    id: Zp(e)
  }, Bp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Qa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Pc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const zl = {
  [Te.Left]: { x: -1, y: 0 },
  [Te.Right]: { x: 1, y: 0 },
  [Te.Top]: { x: 0, y: -1 },
  [Te.Bottom]: { x: 0, y: 1 }
}, Kp = ({ source: e, sourcePosition: t = Te.Bottom, target: n }) => t === Te.Left || t === Te.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Dl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Wp({ source: e, sourcePosition: t = Te.Bottom, target: n, targetPosition: r = Te.Top, center: o, offset: a }) {
  const i = zl[t], s = zl[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = Kp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], m, b;
  const x = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [h, C, p, $] = Pc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    m = o.x ?? h, b = o.y ?? C;
    const S = [
      { x: m, y: l.y },
      { x: m, y: u.y }
    ], E = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    i[d] === f ? v = d === "x" ? S : E : v = d === "x" ? E : S;
  } else {
    const S = [{ x: l.x, y: u.y }], E = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? E : S : v = i.y === f ? S : E, t === r) {
      const N = Math.abs(e[d] - n[d]);
      if (N <= a) {
        const B = Math.min(a - 1, a - N);
        i[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * B : _[d] = (u[d] > n[d] ? -1 : 1) * B;
      }
    }
    if (t !== r) {
      const N = d === "x" ? "y" : "x", B = i[d] === s[N], M = l[N] > u[N], H = l[N] < u[N];
      (i[d] === 1 && (!B && M || B && H) || i[d] !== 1 && (!B && H || B && M)) && (v = d === "x" ? S : E);
    }
    const T = { x: l.x + x.x, y: l.y + x.y }, L = { x: u.x + _.x, y: u.y + _.y }, z = Math.max(Math.abs(T.x - v[0].x), Math.abs(L.x - v[0].x)), I = Math.max(Math.abs(T.y - v[0].y), Math.abs(L.y - v[0].y));
    z >= I ? (m = (T.x + L.x) / 2, b = v[0].y) : (m = v[0].x, b = (T.y + L.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], m, b, p, $];
}
function Xp(e, t, n, r) {
  const o = Math.min(Dl(e, t) / 2, Dl(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function Ri({ sourceX: e, sourceY: t, sourcePosition: n = Te.Bottom, targetX: r, targetY: o, targetPosition: a = Te.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, m] = Wp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, _) => {
    let h = "";
    return _ > 0 && _ < c.length - 1 ? h = Xp(c[_ - 1], x, c[_ + 1], i) : h = `${_ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, f, v, m];
}
function Ol(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function jp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Ol(n) || !Ol(r))
    return null;
  const o = n.internals.handleBounds || Nl(n.handles), a = r.internals.handleBounds || Nl(r.handles), i = Vl((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Vl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Sr.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", Ur.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Te.Bottom, u = (s == null ? void 0 : s.position) || Te.Top, c = Ao(n, i, l), d = Ao(r, s, u);
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
function Ao(e, t, n = Te.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? pr(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Te.Top:
      return { x: o + i / 2, y: a };
    case Te.Right:
      return { x: o + i, y: a + s / 2 };
    case Te.Bottom:
      return { x: o + i / 2, y: a + s };
    case Te.Left:
      return { x: o, y: a + s / 2 };
  }
}
function Vl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function es(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function Fp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const a = /* @__PURE__ */ new Set();
  return e.reduce((i, s) => ([s.markerStart || r, s.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = es(l, t);
      a.has(u) || (i.push({ id: u, color: l.color || n, ...l }), a.add(u));
    }
  }), i), []).sort((i, s) => i.id.localeCompare(s.id));
}
function qp(e, t, n, r, o) {
  let a = 0.5;
  o === "start" ? a = 0 : o === "end" && (a = 1);
  let i = [
    (e.x + e.width * a) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], s = [-100 * a, -100];
  switch (n) {
    case Te.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case Te.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Te.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Ds = {
  nodeOrigin: [0, 0],
  nodeExtent: Ni,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Gp = {
  ...Ds,
  checkEquality: !0
};
function Os(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Up(e, t, n) {
  const r = Os(Ds, n);
  for (const o of e.values())
    if (o.parentId)
      Ns(o, e, t, r);
    else {
      const a = Xo(o, r.nodeOrigin), i = eo(o.extent) ? o.extent : r.nodeExtent, s = Mr(a, i, pr(o));
      o.internals.positionAbsolute = s;
    }
}
function Tc(e, t, n, r) {
  var o, a;
  const i = Os(Gp, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Xo(u, i.nodeOrigin), f = eo(u.extent) ? u.extent : i.nodeExtent, v = Mr(d, f, pr(u));
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
          z: Hc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ns(c, t, n, r);
  }
}
function Jp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ns(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = Os(Ds, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Jp(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Qp(e, l, a, i, u), { positionAbsolute: v } = e.internals, m = c !== v.x || d !== v.y;
  (m || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Hc(e, t) {
  return (Yn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Qp(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = pr(e), l = Xo(e, n), u = eo(e.extent) ? Mr(l, e.extent, s) : l;
  let c = Mr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = $c(c, s, t));
  const d = Hc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function e0(e, t, n, r = [0, 0]) {
  var o;
  const a = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const l = t.get(s.parentId);
    if (!l)
      continue;
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Qr(l), c = _c(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = pr(l), v = l.origin ?? r, m = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), _ = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], C = (_ - f.height) * v[1];
    (m > 0 || b > 0 || h || C) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - m + h,
        y: l.position.y - b + C
      }
    }), (c = n.get(u)) == null || c.forEach((p) => {
      e.some(($) => $.id === p.id) || a.push({
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
        width: x + (m ? v[0] * m - h : 0),
        height: _ + (b ? v[1] * b - C : 0)
      }
    });
  }), a;
}
function t0(e, t, n, r, o, a) {
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
    const m = zs(f.nodeElement), b = v.measured.width !== m.width || v.measured.height !== m.height;
    if (m.width && m.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), _ = eo(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = $c(h, m, t.get(v.parentId)) : _ && (h = Mr(h, _, m));
      const C = {
        ...v,
        measured: m,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Hl("source", f.nodeElement, x, c, v.id),
            target: Hl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, C), v.parentId && Ns(C, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: m
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Qr(C, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = e0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: s };
}
async function n0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: a }) {
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
function Al(e, t, n, r, o, a) {
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
function Lc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    Al("source", l, c, e, o, i), Al("target", l, u, e, a, s), t.set(r.id, r);
  }
}
function r0(e, t) {
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
function zc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : zc(n, t) : !1;
}
function Il(e, t, n) {
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
function o0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [a, i] of e)
    if ((i.selected || i.id === r) && (!i.parentId || !zc(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
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
function Pa({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function i0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let a = { x: null, y: null }, i = 0, s = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, v = !1;
  function m({ noDragClassName: x, handleSelector: _, domNode: h, isSelectable: C, nodeId: p, nodeClickDistance: $ = 0 }) {
    f = fn(h);
    function S({ x: z, y: I }, N) {
      const { nodeLookup: B, nodeExtent: M, snapGrid: H, snapToGrid: k, nodeOrigin: P, onNodeDrag: O, onSelectionDrag: A, onError: Y, updateNodePositions: j } = t();
      a = { x: z, y: I };
      let F = !1, ae = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && M) {
        const Q = jo(s);
        ae = Ja(Q);
      }
      for (const [Q, W] of s) {
        if (!B.has(Q))
          continue;
        let le = { x: z - W.distance.x, y: I - W.distance.y };
        k && (le = Hs(le, H));
        let $e = [
          [M[0][0], M[0][1]],
          [M[1][0], M[1][1]]
        ];
        if (s.size > 1 && M && !W.extent) {
          const { positionAbsolute: de } = W.internals, re = de.x - ae.x + M[0][0], we = de.x + W.measured.width - ae.x2 + M[1][0], qe = de.y - ae.y + M[0][1], We = de.y + W.measured.height - ae.y2 + M[1][1];
          $e = [
            [re, qe],
            [we, We]
          ];
        }
        const { position: _e, positionAbsolute: me } = Lp({
          nodeId: Q,
          nextPosition: le,
          nodeLookup: B,
          nodeExtent: $e,
          nodeOrigin: P,
          onError: Y
        });
        F = F || W.position.x !== _e.x || W.position.y !== _e.y, W.position = _e, W.internals.positionAbsolute = me;
      }
      if (F && (j(s, !0), N && (r || O || !p && A))) {
        const [Q, W] = Pa({
          nodeId: p,
          dragItems: s,
          nodeLookup: B
        });
        r == null || r(N, s, Q, W), O == null || O(N, Q, W), p || A == null || A(N, W);
      }
    }
    async function E() {
      if (!c)
        return;
      const { transform: z, panBy: I, autoPanSpeed: N, autoPanOnNodeDrag: B } = t();
      if (!B) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [M, H] = Cc(u, c, N);
      (M !== 0 || H !== 0) && (a.x = (a.x ?? 0) - M / z[2], a.y = (a.y ?? 0) - H / z[2], await I({ x: M, y: H }) && S(a, null)), i = requestAnimationFrame(E);
    }
    function T(z) {
      var I;
      const { nodeLookup: N, multiSelectionActive: B, nodesDraggable: M, transform: H, snapGrid: k, snapToGrid: P, selectNodesOnDrag: O, onNodeDragStart: A, onSelectionDragStart: Y, unselectNodesAndEdges: j } = t();
      d = !0, (!O || !C) && !B && p && ((I = N.get(p)) != null && I.selected || j()), C && O && p && (e == null || e(p));
      const F = Ma(z.sourceEvent, { transform: H, snapGrid: k, snapToGrid: P, containerBounds: c });
      if (a = F, s = o0(N, M, F, p), s.size > 0 && (n || A || !p && Y)) {
        const [ae, Q] = Pa({
          nodeId: p,
          dragItems: s,
          nodeLookup: N
        });
        n == null || n(z.sourceEvent, s, ae, Q), A == null || A(z.sourceEvent, ae, Q), p || Y == null || Y(z.sourceEvent, Q);
      }
    }
    const L = Vg().clickDistance($).on("start", (z) => {
      const { domNode: I, nodeDragThreshold: N, transform: B, snapGrid: M, snapToGrid: H } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, v = !1, N === 0 && T(z), a = Ma(z.sourceEvent, { transform: B, snapGrid: M, snapToGrid: H, containerBounds: c }), u = Xn(z.sourceEvent, c);
    }).on("drag", (z) => {
      const { autoPanOnNodeDrag: I, transform: N, snapGrid: B, snapToGrid: M, nodeDragThreshold: H, nodeLookup: k } = t(), P = Ma(z.sourceEvent, { transform: N, snapGrid: B, snapToGrid: M, containerBounds: c });
      if ((z.sourceEvent.type === "touchmove" && z.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !k.has(p)) && (v = !0), !v) {
        if (!l && I && d && (l = !0, E()), !d) {
          const O = P.xSnapped - (a.x ?? 0), A = P.ySnapped - (a.y ?? 0);
          Math.sqrt(O * O + A * A) > H && T(z);
        }
        (a.x !== P.xSnapped || a.y !== P.ySnapped) && s && d && (u = Xn(z.sourceEvent, c), S(P, z.sourceEvent));
      }
    }).on("end", (z) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: I, updateNodePositions: N, onNodeDragStop: B, onSelectionDragStop: M } = t();
        if (N(s, !1), o || B || !p && M) {
          const [H, k] = Pa({
            nodeId: p,
            dragItems: s,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(z.sourceEvent, s, H, k), B == null || B(z.sourceEvent, H, k), p || M == null || M(z.sourceEvent, k);
        }
      }
    }).filter((z) => {
      const I = z.target;
      return !z.button && (!x || !Il(I, `.${x}`, h)) && (!_ || Il(I, _, h));
    });
    f.call(L);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: m,
    destroy: b
  };
}
function a0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const a of t.values())
    Vo(o, Qr(a)) > 0 && r.push(a);
  return r;
}
const s0 = 250;
function l0(e, t, n, r) {
  var o, a;
  let i = [], s = 1 / 0;
  const l = a0(e, n, t + s0);
  for (const u of l) {
    const c = [...((o = u.internals.handleBounds) == null ? void 0 : o.source) ?? [], ...((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: v } = Ao(u, d, d.position, !0), m = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
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
function Dc(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...Ao(u, d, d.position, !0) } : d;
}
function Oc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function u0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Nc = () => !0;
function c0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: m, onConnect: b, onConnectEnd: x, isValidConnection: _ = Nc, onReconnectEnd: h, updateConnection: C, getTransform: p, getFromHandle: $, autoPanSpeed: S }) {
  const E = Op(e.target);
  let T = 0, L;
  const { x: z, y: I } = Xn(e), N = E == null ? void 0 : E.elementFromPoint(z, I), B = Oc(a, N), M = s == null ? void 0 : s.getBoundingClientRect();
  if (!M || !B)
    return;
  const H = Dc(o, B, r, l, t);
  if (!H)
    return;
  let k = Xn(e, M), P = !1, O = null, A = !1, Y = null;
  function j() {
    if (!c || !M)
      return;
    const [_e, me] = Cc(k, M, S);
    f({ x: _e, y: me }), T = requestAnimationFrame(j);
  }
  const F = {
    ...H,
    nodeId: o,
    type: B,
    position: H.position
  }, ae = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Ao(ae, F, Te.Left, !0),
    fromHandle: F,
    fromPosition: F.position,
    fromNode: ae,
    to: k,
    toHandle: null,
    toPosition: kl[F.position],
    toNode: null
  };
  C(Q);
  let W = Q;
  m == null || m(e, { nodeId: o, handleId: r, handleType: B });
  function le(_e) {
    if (!$() || !F) {
      $e(_e);
      return;
    }
    const me = p();
    k = Xn(_e, M), L = l0(Fo(k, me, !1, [1, 1]), n, l, F), P || (j(), P = !0);
    const de = Vc(_e, {
      handle: L,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: _,
      doc: E,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    Y = de.handleDomNode, O = de.connection, A = u0(!!L, de.isValid);
    const re = {
      // from stays the same
      ...W,
      isValid: A,
      to: L && A ? kc({ x: L.x, y: L.y }, me) : k,
      toHandle: de.toHandle,
      toPosition: A && de.toHandle ? de.toHandle.position : kl[F.position],
      toNode: de.toHandle ? l.get(de.toHandle.nodeId) : null
    };
    A && L && W.toHandle && re.toHandle && W.toHandle.type === re.toHandle.type && W.toHandle.nodeId === re.toHandle.nodeId && W.toHandle.id === re.toHandle.id && W.to.x === re.to.x && W.to.y === re.to.y || (C(re), W = re);
  }
  function $e(_e) {
    (L || Y) && O && A && (b == null || b(O));
    const { inProgress: me, ...de } = W, re = {
      ...de,
      toPosition: W.toHandle ? W.toPosition : null
    };
    x == null || x(_e, re), a && (h == null || h(_e, re)), v(), cancelAnimationFrame(T), P = !1, A = !1, O = null, Y = null, E.removeEventListener("mousemove", le), E.removeEventListener("mouseup", $e), E.removeEventListener("touchmove", le), E.removeEventListener("touchend", $e);
  }
  E.addEventListener("mousemove", le), E.addEventListener("mouseup", $e), E.addEventListener("touchmove", le), E.addEventListener("touchend", $e);
}
function Vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = Nc, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y: m } = Xn(e), b = i.elementFromPoint(v, m), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, _ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Oc(void 0, x), C = x.getAttribute("data-nodeid"), p = x.getAttribute("data-handleid"), $ = x.classList.contains("connectable"), S = x.classList.contains("connectableend");
    if (!C || !h)
      return _;
    const E = {
      source: d ? C : r,
      sourceHandle: d ? p : o,
      target: d ? r : C,
      targetHandle: d ? o : p
    };
    _.connection = E;
    const T = $ && S && (n === Sr.Strict ? d && h === "source" || !d && h === "target" : C !== r || p !== o);
    _.isValid = T && u(E), _.toHandle = Dc(C, h, p, c, n, !1);
  }
  return _;
}
const d0 = {
  onPointerDown: c0,
  isValid: Vc
};
function f0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const m = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "wheel" || !t)
        return;
      const $ = -C.sourceEvent.deltaY * (C.sourceEvent.deltaMode === 1 ? 0.05 : C.sourceEvent.deltaMode ? 1 : 2e-3) * c, S = p[2] * Math.pow(2, $);
      t.scaleTo(S);
    };
    let b = [0, 0];
    const x = (C) => {
      (C.sourceEvent.type === "mousedown" || C.sourceEvent.type === "touchstart") && (b = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ]);
    }, _ = (C) => {
      const p = n();
      if (C.sourceEvent.type !== "mousemove" && C.sourceEvent.type !== "touchmove" || !t)
        return;
      const $ = [
        C.sourceEvent.clientX ?? C.sourceEvent.touches[0].clientX,
        C.sourceEvent.clientY ?? C.sourceEvent.touches[0].clientY
      ], S = [$[0] - b[0], $[1] - b[1]];
      b = $;
      const E = r() * Math.max(p[2], Math.log(p[2])) * (v ? -1 : 1), T = {
        x: p[0] - S[0] * E,
        y: p[1] - S[1] * E
      }, L = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: T.x,
        y: T.y,
        zoom: p[2]
      }, L, s);
    }, h = wc().on("start", x).on("zoom", d ? _ : null).on("zoom.wheel", f ? m : null);
    o.call(h, {});
  }
  function i() {
    o.on("zoom", null);
  }
  return {
    update: a,
    destroy: i,
    pointer: pn
  };
}
const v0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, da = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Ta = ({ x: e, y: t, zoom: n }) => la.translate(e, t).scale(n), Ir = (e, t) => e.target.closest(`.${t}`), Ac = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ha = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ic = (e) => {
  const t = e.ctrlKey && Ii() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function g0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Ir(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const x = pn(c), _ = Ic(c), h = d * Math.pow(2, _);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === ur.Vertical ? 0 : c.deltaX * f, m = o === ur.Horizontal ? 0 : c.deltaY * f;
    !Ii() && c.shiftKey && o !== ur.Vertical && (v = c.deltaY * f, m = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(m / d) * a,
      // @ts-ignore
      { internal: !0 }
    );
    const b = da(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, s == null || s(c, b)), e.isPanScrolling && (l == null || l(c, b), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, b), e.isPanScrolling = !1;
    }, 150));
  };
}
function h0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || Ir(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function p0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var o, a, i;
    if ((o = r.sourceEvent) != null && o.internal)
      return;
    const s = da(r.transform);
    e.mouseButton = ((a = r.sourceEvent) == null ? void 0 : a.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = s, ((i = r.sourceEvent) == null ? void 0 : i.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, s));
  };
}
function m0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (a) => {
    var i, s;
    e.usedRightMouseButton = !!(n && Ac(t, e.mouseButton ?? 0)), (i = a.sourceEvent) != null && i.sync || r([a.transform.x, a.transform.y, a.transform.k]), o && !((s = a.sourceEvent) != null && s.internal) && (o == null || o(a.sourceEvent, da(a.transform)));
  };
}
function y0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: a }) {
  return (i) => {
    var s;
    if (!((s = i.sourceEvent) != null && s.internal) && (e.isZoomingOrPanning = !1, a && Ac(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && i.sourceEvent && a(i.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && v0(e.prevViewport, i.transform))) {
      const l = da(i.transform);
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
function w0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: a, userSelectionActive: i, noWheelClassName: s, noPanClassName: l, lib: u }) {
  return (c) => {
    var d;
    const f = e || t, v = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (Ir(c, `${u}-flow__node`) || Ir(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || Ir(c, s) && c.type === "wheel" || Ir(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const m = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && m;
  };
}
function b0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: a, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = wc().clickDistance(!Yn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = fn(e).call(f);
  C({
    x: a.x,
    y: a.y,
    zoom: Jr(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const m = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Ic);
  function x(N, B) {
    return v ? new Promise((M) => {
      f == null || f.transform(Ha(v, B == null ? void 0 : B.duration, () => M(!0)), N);
    }) : Promise.resolve(!1);
  }
  function _({ noWheelClassName: N, noPanClassName: B, onPaneContextMenu: M, userSelectionActive: H, panOnScroll: k, panOnDrag: P, panOnScrollMode: O, panOnScrollSpeed: A, preventScrolling: Y, zoomOnPinch: j, zoomOnScroll: F, zoomOnDoubleClick: ae, zoomActivationKeyPressed: Q, lib: W, onTransformChange: le }) {
    H && !c.isZoomingOrPanning && h();
    const $e = k && !Q && !H ? g0({
      zoomPanValues: c,
      noWheelClassName: N,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: O,
      panOnScrollSpeed: A,
      zoomOnPinch: j,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : h0({
      noWheelClassName: N,
      preventScrolling: Y,
      d3ZoomHandler: m
    });
    if (v.on("wheel.zoom", $e, { passive: !1 }), !H) {
      const me = p0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", me);
      const de = m0({
        zoomPanValues: c,
        panOnDrag: P,
        onPaneContextMenu: !!M,
        onPanZoom: i,
        onTransformChange: le
      });
      f.on("zoom", de);
      const re = y0({
        zoomPanValues: c,
        panOnDrag: P,
        panOnScroll: k,
        onPaneContextMenu: M,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", re);
    }
    const _e = w0({
      zoomActivationKeyPressed: Q,
      panOnDrag: P,
      zoomOnScroll: F,
      panOnScroll: k,
      zoomOnDoubleClick: ae,
      zoomOnPinch: j,
      userSelectionActive: H,
      noPanClassName: B,
      noWheelClassName: N,
      lib: W
    });
    f.filter(_e), ae ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function C(N, B, M) {
    const H = Ta(N), k = f == null ? void 0 : f.constrain()(H, B, M);
    return k && await x(k), new Promise((P) => P(k));
  }
  async function p(N, B) {
    const M = Ta(N);
    return await x(M, B), new Promise((H) => H(M));
  }
  function $(N) {
    if (v) {
      const B = Ta(N), M = v.property("__zoom");
      (M.k !== N.zoom || M.x !== N.x || M.y !== N.y) && (f == null || f.transform(v, B, null, { sync: !0 }));
    }
  }
  function S() {
    const N = v ? yc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: N.x, y: N.y, zoom: N.k };
  }
  function E(N, B) {
    return v ? new Promise((M) => {
      f == null || f.scaleTo(Ha(v, B == null ? void 0 : B.duration, () => M(!0)), N);
    }) : Promise.resolve(!1);
  }
  function T(N, B) {
    return v ? new Promise((M) => {
      f == null || f.scaleBy(Ha(v, B == null ? void 0 : B.duration, () => M(!0)), N);
    }) : Promise.resolve(!1);
  }
  function L(N) {
    f == null || f.scaleExtent(N);
  }
  function z(N) {
    f == null || f.translateExtent(N);
  }
  function I(N) {
    const B = !Yn(N) || N < 0 ? 0 : N;
    f == null || f.clickDistance(B);
  }
  return {
    update: _,
    destroy: h,
    setViewport: p,
    setViewportConstrained: C,
    getViewport: S,
    scaleTo: E,
    scaleBy: T,
    setScaleExtent: L,
    setTranslateExtent: z,
    syncViewport: $,
    setClickDistance: I
  };
}
var Rl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Rl || (Rl = {}));
var x0 = /* @__PURE__ */ oe('<div role="button" tabindex="-1"><!></div>');
function vr(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(ae, "$connectable", n), a = () => ne(_e, "$connectionRadius", n), i = () => ne(le, "$domNode", n), s = () => ne($e, "$nodeLookup", n), l = () => ne(W, "$connectionMode", n), u = () => ne(re, "$lib", n), c = () => ne(Fe, "$autoPanOnConnect", n), d = () => ne(Ge, "$flowId", n), f = () => ne(de, "$isValidConnectionStore", n), v = () => ne(qe, "$onedgecreate", n), m = () => ne(ue, "$onConnectAction", n), b = () => ne(Se, "$onConnectStartAction", n), x = () => ne(Ne, "$onConnectEndAction", n), _ = () => ne(me, "$viewport", n), h = () => ne(yt, "$connection", n), C = () => ne(Re, "$edges", n), p = () => ne(ce, "$connectionLookup", n), $ = ie(), S = ie(), E = ie(), T = ie(), L = ie(), z = ie(), I = ie(), N = ie();
  let B = w(t, "id", 12, void 0), M = w(t, "type", 12, "source"), H = w(t, "position", 28, () => Te.Top), k = w(t, "style", 12, void 0), P = w(t, "isValidConnection", 12, void 0), O = w(t, "onconnect", 12, void 0), A = w(t, "ondisconnect", 12, void 0), Y = w(t, "isConnectable", 12, void 0), j = w(t, "class", 12, void 0);
  const F = _r("svelteflow__node_id"), ae = _r("svelteflow__node_connectable"), Q = tt(), {
    connectionMode: W,
    domNode: le,
    nodeLookup: $e,
    connectionRadius: _e,
    viewport: me,
    isValidConnection: de,
    lib: re,
    addEdge: we,
    onedgecreate: qe,
    panBy: We,
    cancelConnection: Ie,
    updateConnection: ee,
    autoPanOnConnect: Fe,
    edges: Re,
    connectionLookup: ce,
    onconnect: ue,
    onconnectstart: Se,
    onconnectend: Ne,
    flowId: Ge,
    connection: yt
  } = Q;
  function at(Le) {
    const st = Sc(Le);
    (st && Le.button === 0 || !st) && d0.onPointerDown(Le, {
      handleId: g(E),
      nodeId: F,
      isTarget: g($),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: P() ?? f(),
      updateConnection: ee,
      cancelConnection: Ie,
      panBy: We,
      onConnect: (xe) => {
        var ct;
        const vt = v() ? v()(xe) : xe;
        vt && (we(vt), (ct = m()) == null || ct(xe));
      },
      onConnectStart: (xe, ct) => {
        var vt;
        (vt = b()) == null || vt(xe, {
          nodeId: ct.nodeId,
          handleId: ct.handleId,
          handleType: ct.handleType
        });
      },
      onConnectEnd: (xe, ct) => {
        var vt;
        (vt = x()) == null || vt(xe, ct);
      },
      getTransform: () => [
        _().x,
        _().y,
        _().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let te = ie(null), Ve = ie();
  pe(() => J(M()), () => {
    G($, M() === "target");
  }), pe(
    () => (J(Y()), o()),
    () => {
      G(S, Y() !== void 0 ? Y() : o());
    }
  ), pe(() => J(B()), () => {
    G(E, B() || null);
  }), pe(
    () => (J(O()), J(A()), C(), p(), J(M()), J(B())),
    () => {
      (O() || A()) && (C(), G(Ve, p().get(`${F}-${M()}${B() ? `-${B()}` : ""}`)));
    }
  ), pe(
    () => (g(te), g(Ve), J(A()), J(O())),
    () => {
      if (g(te) && !Sp(g(Ve), g(te))) {
        const Le = g(Ve) ?? /* @__PURE__ */ new Map();
        El(g(te), Le, A()), El(Le, g(te), O());
      }
      G(te, g(Ve) ?? /* @__PURE__ */ new Map());
    }
  ), pe(() => h(), () => {
    G(T, !!h().fromHandle);
  }), pe(
    () => (h(), J(M()), g(E)),
    () => {
      var Le, st, xe;
      G(L, ((Le = h().fromHandle) == null ? void 0 : Le.nodeId) === F && ((st = h().fromHandle) == null ? void 0 : st.type) === M() && ((xe = h().fromHandle) == null ? void 0 : xe.id) === g(E));
    }
  ), pe(
    () => (h(), J(M()), g(E)),
    () => {
      var Le, st, xe;
      G(z, ((Le = h().toHandle) == null ? void 0 : Le.nodeId) === F && ((st = h().toHandle) == null ? void 0 : st.type) === M() && ((xe = h().toHandle) == null ? void 0 : xe.id) === g(E));
    }
  ), pe(
    () => (l(), h(), J(M()), g(E)),
    () => {
      var Le, st, xe;
      G(I, l() === Sr.Strict ? ((Le = h().fromHandle) == null ? void 0 : Le.type) !== M() : F !== ((st = h().fromHandle) == null ? void 0 : st.nodeId) || g(E) !== ((xe = h().fromHandle) == null ? void 0 : xe.id));
    }
  ), pe(() => (g(z), h()), () => {
    G(N, g(z) && h().isValid);
  }), _t(), Ze();
  var ye = x0();
  he(ye, "data-nodeid", F);
  let Qt;
  var Rt = X(ye);
  Pt(Rt, t, "default", {}), K(ye), He(
    (Le) => {
      he(ye, "data-handleid", g(E)), he(ye, "data-handlepos", H()), he(ye, "data-id", `${d() ?? ""}-${F ?? ""}-${B() || ""}-${M() ?? ""}`), Qt = Vt(ye, 1, Nn(Le), null, Qt, {
        valid: g(N),
        connectingto: g(z),
        connectingfrom: g(L),
        source: !g($),
        target: g($),
        connectablestart: g(S),
        connectableend: g(S),
        connectable: g(S),
        connectionindicator: g(S) && (!g(T) || g(I))
      }), he(ye, "style", k());
    },
    [
      () => It([
        "svelte-flow__handle",
        `svelte-flow__handle-${H()}`,
        "nodrag",
        "nopan",
        H(),
        j()
      ])
    ],
    be
  ), Ue("mousedown", ye, at), Ue("touchstart", ye, at), V(e, ye);
  var cn = ve({
    get id() {
      return B();
    },
    set id(Le) {
      B(Le), y();
    },
    get type() {
      return M();
    },
    set type(Le) {
      M(Le), y();
    },
    get position() {
      return H();
    },
    set position(Le) {
      H(Le), y();
    },
    get style() {
      return k();
    },
    set style(Le) {
      k(Le), y();
    },
    get isValidConnection() {
      return P();
    },
    set isValidConnection(Le) {
      P(Le), y();
    },
    get onconnect() {
      return O();
    },
    set onconnect(Le) {
      O(Le), y();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(Le) {
      A(Le), y();
    },
    get isConnectable() {
      return Y();
    },
    set isConnectable(Le) {
      Y(Le), y();
    },
    get class() {
      return j();
    },
    set class(Le) {
      j(Le), y();
    }
  });
  return r(), cn;
}
se(
  vr,
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
var $0 = /* @__PURE__ */ oe("<!> <!>", 1);
function Zi(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "targetPosition", "sourcePosition"]), fe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), a = w(t, "sourcePosition", 12, void 0);
  Ze();
  var i = $0(), s = Ee(i);
  const l = /* @__PURE__ */ be(() => o() ?? Te.Top);
  vr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = Z(s), c = Z(u);
  const d = /* @__PURE__ */ be(() => a() ?? Te.Bottom);
  return vr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), He(() => {
    var f;
    return sn(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), V(e, i), ve({
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
se(
  Zi,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var C0 = /* @__PURE__ */ oe(" <!>", 1);
function Rc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "sourcePosition"]), fe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ze(), De();
  var a = C0(), i = Ee(a), s = Z(i);
  const l = /* @__PURE__ */ be(() => o() ?? Te.Bottom);
  return vr(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), He(() => {
    var u;
    return sn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), V(e, a), ve({
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
se(Rc, { data: {}, sourcePosition: {} }, [], [], !0);
var _0 = /* @__PURE__ */ oe(" <!>", 1);
function Zc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "targetPosition"]), fe(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ze(), De();
  var a = _0(), i = Ee(a), s = Z(i);
  const l = /* @__PURE__ */ be(() => o() ?? Te.Top);
  return vr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), He(() => {
    var u;
    return sn(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), V(e, a), ve({
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
se(Zc, { data: {}, targetPosition: {} }, [], [], !0);
function Bc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, []);
}
se(Bc, {}, [], [], !0);
function Zl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Bi(e, { target: t, domNode: n }) {
  return Zl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Zl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var k0 = /* @__PURE__ */ oe("<div><!></div>");
function Yc(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(a, "$domNode", n), { domNode: a } = tt();
  Ze();
  var i = k0(), s = X(i);
  Pt(s, t, "default", {}), K(i), Mt(i, (l, u) => Bi == null ? void 0 : Bi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), V(e, i), ve(), r();
}
se(Yc, {}, ["default"], [], !0);
function Kc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = tt();
  return (s) => {
    const l = q(e).get(s);
    if (!l) {
      console.warn("012", Ur.error012(s));
      return;
    }
    (l.selectable || q(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && q(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var E0 = /* @__PURE__ */ oe('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Wc(e, t) {
  fe(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const a = Kc(), i = _r("svelteflow__edge_id");
  return Ze(), Yc(e, {
    children: (s, l) => {
      var u = E0(), c = X(u);
      Pt(c, t, "default", {}), K(u), He(() => {
        he(u, "style", "pointer-events: all;" + n()), ht(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ue("keyup", u, () => {
      }), Ue("click", u, () => {
        i && a(i);
      }), V(s, u);
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
se(Wc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var S0 = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), M0 = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function qo(e, t) {
  fe(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), a = w(t, "labelX", 12, void 0), i = w(t, "labelY", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ze();
  var m = M0(), b = Ee(m), x = Z(b);
  {
    var _ = (p) => {
      var $ = S0();
      he($, "stroke-opacity", 0), he($, "stroke-width", v), He(() => he($, "d", r())), V(p, $);
    };
    Me(x, (p) => {
      v && p(_);
    });
  }
  var h = Z(x);
  {
    var C = (p) => {
      Wc(p, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: ($, S) => {
          De();
          var E = je();
          He(() => sn(E, o())), V($, E);
        },
        $$slots: { default: !0 }
      });
    };
    Me(h, (p) => {
      o() && p(C);
    });
  }
  return He(
    (p) => {
      he(b, "id", n()), he(b, "d", r()), Vt(b, 0, Nn(p)), he(b, "marker-start", l()), he(b, "marker-end", u()), he(b, "style", c());
    },
    [
      () => It(["svelte-flow__edge-path", f()])
    ],
    be
  ), V(e, m), ve({
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
se(
  qo,
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
function Yi(e, t) {
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
  const r = ie(), o = ie(), a = ie();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), b = w(t, "targetX", 12), x = w(t, "targetY", 12), _ = w(t, "targetPosition", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(b()), J(x()), J(m()), J(_())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(a, h[2])))(Mc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: _()
      }));
    }
  ), _t(), Ze(), qo(e, {
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
      return x();
    },
    set targetY(h) {
      x(h), y();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), y();
    }
  });
}
se(
  Yi,
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
function Xc(e, t) {
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
  const r = ie(), o = ie(), a = ie();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), b = w(t, "targetX", 12), x = w(t, "targetY", 12), _ = w(t, "targetPosition", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(b()), J(x()), J(m()), J(_())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(a, h[2])))(Ri({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: _()
      }));
    }
  ), _t(), Ze(), qo(e, {
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
      return x();
    },
    set targetY(h) {
      x(h), y();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), y();
    }
  });
}
se(
  Xc,
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
function jc(e, t) {
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
  const r = ie(), o = ie(), a = ie();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "targetX", 12), b = w(t, "targetY", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(m()), J(b())),
    () => {
      ((x) => (G(r, x[0]), G(o, x[1]), G(a, x[2])))(Qa({
        sourceX: f(),
        sourceY: v(),
        targetX: m(),
        targetY: b()
      }));
    }
  ), _t(), Ze(), qo(e, {
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
    set label(x) {
      i(x), y();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(x) {
      s(x), y();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), y();
    },
    get sourceY() {
      return v();
    },
    set sourceY(x) {
      v(x), y();
    },
    get targetX() {
      return m();
    },
    set targetX(x) {
      m(x), y();
    },
    get targetY() {
      return b();
    },
    set targetY(x) {
      b(x), y();
    }
  });
}
se(
  jc,
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
function Fc(e, t) {
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
  const r = ie(), o = ie(), a = ie();
  let i = w(t, "label", 12, void 0), s = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), v = w(t, "sourceY", 12), m = w(t, "sourcePosition", 12), b = w(t, "targetX", 12), x = w(t, "targetY", 12), _ = w(t, "targetPosition", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(b()), J(x()), J(m()), J(_())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(a, h[2])))(Ri({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: m(),
        targetPosition: _(),
        borderRadius: 0
      }));
    }
  ), _t(), Ze(), qo(e, {
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
      return x();
    },
    set targetY(h) {
      x(h), y();
    },
    get targetPosition() {
      return _();
    },
    set targetPosition(h) {
      _(h), y();
    }
  });
}
se(
  Fc,
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
function P0(e, t) {
  const n = e.set, r = t.set, o = q(e), a = q(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function T0(e, t) {
  const n = e.set, r = t.set;
  let o = q(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const H0 = (e, t, n) => {
  if (!n)
    return;
  const r = q(e), o = t.set, a = n.set;
  let i = n ? q(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, L0 = (e, t, n, r = [0, 0], o = Ni) => {
  const { subscribe: a, set: i, update: s } = Ce([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Tc(b, t, n, {
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
}, z0 = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = Ce([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((m) => ({ ...l, ...m })) : f;
    Lc(t, n, v), s = v, a(s);
  }, c = (f) => u(f(s)), d = (f) => {
    l = f;
  };
  return u(s), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, qc = {
  input: Rc,
  output: Zc,
  default: Zi,
  group: Bc
}, Gc = {
  straight: jc,
  smoothstep: Xc,
  default: Yi,
  step: Fc
}, D0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? Ni;
  Tc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Lc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const m = jo(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Ls(m, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Ce(null),
    nodes: L0(e, s, l, d, f),
    nodeLookup: dn(s),
    parentLookup: dn(l),
    edgeLookup: dn(c),
    visibleNodes: dn([]),
    edges: z0(t, u, c),
    visibleEdges: dn([]),
    connectionLookup: dn(u),
    height: Ce(500),
    width: Ce(500),
    minZoom: Ce(0.5),
    maxZoom: Ce(2),
    nodeOrigin: Ce(d),
    nodeDragThreshold: Ce(1),
    nodeExtent: Ce(f),
    translateExtent: Ce(Ni),
    autoPanOnNodeDrag: Ce(!0),
    autoPanOnConnect: Ce(!0),
    fitViewOnInit: Ce(!1),
    fitViewOnInitDone: Ce(!1),
    fitViewOptions: Ce(void 0),
    panZoom: Ce(null),
    snapGrid: Ce(null),
    dragging: Ce(!1),
    selectionRect: Ce(null),
    selectionKeyPressed: Ce(!1),
    multiselectionKeyPressed: Ce(!1),
    deleteKeyPressed: Ce(!1),
    panActivationKeyPressed: Ce(!1),
    zoomActivationKeyPressed: Ce(!1),
    selectionRectMode: Ce(null),
    selectionMode: Ce(Vi.Partial),
    nodeTypes: Ce(qc),
    edgeTypes: Ce(Gc),
    viewport: Ce(v),
    connectionMode: Ce(Sr.Strict),
    domNode: Ce(null),
    connection: dn(Ga),
    connectionLineType: Ce(Yr.Bezier),
    connectionRadius: Ce(20),
    isValidConnection: Ce(() => !0),
    nodesDraggable: Ce(!0),
    nodesConnectable: Ce(!0),
    elementsSelectable: Ce(!0),
    selectNodesOnDrag: Ce(!0),
    markers: dn([]),
    defaultMarkerColor: Ce("#b1b1b7"),
    lib: dn("svelte"),
    onlyRenderVisibleElements: Ce(!1),
    onerror: Ce(zp),
    ondelete: Ce(void 0),
    onedgecreate: Ce(void 0),
    onconnect: Ce(void 0),
    onconnectstart: Ce(void 0),
    onconnectend: Ce(void 0),
    onbeforedelete: Ce(void 0),
    nodesInitialized: Ce(!1),
    edgesInitialized: Ce(!1),
    viewportInitialized: Ce(!1),
    initialized: dn(!1)
  };
};
function O0(e) {
  const t = lr([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, a, i, s]) => o && i && s ? n.filter((l) => {
    const u = r.get(l.source), c = r.get(l.target);
    return u && c && Rp({
      sourceNode: u,
      targetNode: c,
      width: i,
      height: s,
      transform: [a.x, a.y, a.zoom]
    });
  }) : n);
  return lr([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, a]) => n.reduce((i, s) => {
    const l = r.get(s.source), u = r.get(s.target);
    if (!l || !u)
      return i;
    const c = jp({
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
      zIndex: Ip({
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
function N0(e) {
  return lr([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, a]) => {
    const i = [a.x, a.y, a.zoom];
    return n ? bc(t, { x: 0, y: 0, width: r, height: o }, i, !0) : Array.from(t.values());
  });
}
const fa = Symbol();
function Uc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = D0({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: a,
    nodeExtent: i
  });
  function l(k) {
    s.nodeTypes.set({
      ...qc,
      ...k
    });
  }
  function u(k) {
    s.edgeTypes.set({
      ...Gc,
      ...k
    });
  }
  function c(k) {
    const P = q(s.edges);
    s.edges.set(Yp(k, P));
  }
  const d = (k, P = !1) => {
    var O;
    const A = q(s.nodeLookup);
    for (const [Y, j] of k) {
      const F = (O = A.get(Y)) == null ? void 0 : O.internals.userNode;
      F && (F.position = j.position, F.dragging = P);
    }
    s.nodes.update((Y) => Y);
  };
  function f(k) {
    var P, O, A;
    const Y = q(s.nodeLookup), j = q(s.parentLookup), { changes: F, updatedInternals: ae } = t0(k, Y, q(s.parentLookup), q(s.domNode), q(s.nodeOrigin));
    if (ae) {
      if (Up(Y, j, { nodeOrigin: a, nodeExtent: i }), !q(s.fitViewOnInitDone) && q(s.fitViewOnInit)) {
        const Q = q(s.fitViewOptions), W = m({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(W);
      }
      for (const Q of F) {
        const W = (P = Y.get(Q.id)) == null ? void 0 : P.internals.userNode;
        if (W)
          switch (Q.type) {
            case "dimensions": {
              const le = { ...W.measured, ...Q.dimensions };
              Q.setAttributes && (W.width = ((O = Q.dimensions) == null ? void 0 : O.width) ?? W.width, W.height = ((A = Q.dimensions) == null ? void 0 : A.height) ?? W.height), W.measured = le;
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
    const P = q(s.panZoom), O = q(s.domNode);
    if (!P || !O)
      return Promise.resolve(!1);
    const { width: A, height: Y } = zs(O), j = Sl(q(s.nodeLookup), k);
    return Ml({
      nodes: j,
      width: A,
      height: Y,
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: P
    }, k);
  }
  function m(k) {
    const P = q(s.panZoom);
    if (!P)
      return !1;
    const O = Sl(q(s.nodeLookup), k);
    return Ml({
      nodes: O,
      width: q(s.width),
      height: q(s.height),
      minZoom: q(s.minZoom),
      maxZoom: q(s.maxZoom),
      panZoom: P
    }, k), O.size > 0;
  }
  function b(k, P) {
    const O = q(s.panZoom);
    return O ? O.scaleBy(k, P) : Promise.resolve(!1);
  }
  function x(k) {
    return b(1.2, k);
  }
  function _(k) {
    return b(1 / 1.2, k);
  }
  function h(k) {
    const P = q(s.panZoom);
    P && (P.setScaleExtent([k, q(s.maxZoom)]), s.minZoom.set(k));
  }
  function C(k) {
    const P = q(s.panZoom);
    P && (P.setScaleExtent([q(s.minZoom), k]), s.maxZoom.set(k));
  }
  function p(k) {
    const P = q(s.panZoom);
    P && (P.setTranslateExtent(k), s.translateExtent.set(k));
  }
  function $(k) {
    let P = !1;
    return k.forEach((O) => {
      O.selected && (O.selected = !1, P = !0);
    }), P;
  }
  function S(k) {
    var P;
    (P = q(s.panZoom)) == null || P.setClickDistance(k);
  }
  function E(k) {
    $((k == null ? void 0 : k.nodes) || q(s.nodes)) && s.nodes.set(q(s.nodes)), $((k == null ? void 0 : k.edges) || q(s.edges)) && s.edges.set(q(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (k) => {
    var P;
    if (k) {
      const O = q(s.nodes), A = q(s.edges), Y = O.filter((Q) => Q.selected), j = A.filter((Q) => Q.selected), { nodes: F, edges: ae } = await xc({
        nodesToRemove: Y,
        edgesToRemove: j,
        nodes: O,
        edges: A,
        onBeforeDelete: q(s.onbeforedelete)
      });
      (F.length || ae.length) && (s.nodes.update((Q) => Q.filter((W) => !F.some((le) => le.id === W.id))), s.edges.update((Q) => Q.filter((W) => !ae.some((le) => le.id === W.id))), (P = q(s.ondelete)) == null || P({
        nodes: F,
        edges: ae
      }));
    }
  });
  function T(k) {
    const P = q(s.multiselectionKeyPressed);
    s.nodes.update((O) => O.map((A) => {
      const Y = k.includes(A.id), j = P && A.selected || Y;
      return A.selected = j, A;
    })), P || s.edges.update((O) => O.map((A) => (A.selected = !1, A)));
  }
  function L(k) {
    const P = q(s.multiselectionKeyPressed);
    s.edges.update((O) => O.map((A) => {
      const Y = k.includes(A.id), j = P && A.selected || Y;
      return A.selected = j, A;
    })), P || s.nodes.update((O) => O.map((A) => (A.selected = !1, A)));
  }
  function z(k) {
    var P;
    const O = (P = q(s.nodes)) == null ? void 0 : P.find((A) => A.id === k);
    if (!O) {
      console.warn("012", Ur.error012(k));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), O.selected ? O.selected && q(s.multiselectionKeyPressed) && E({ nodes: [O], edges: [] }) : T([k]);
  }
  function I(k) {
    const P = q(s.viewport);
    return n0({
      delta: k,
      panZoom: q(s.panZoom),
      transform: [P.x, P.y, P.zoom],
      translateExtent: q(s.translateExtent),
      width: q(s.width),
      height: q(s.height)
    });
  }
  const N = Ce(Ga), B = (k) => {
    N.set({ ...k });
  };
  function M() {
    N.set(Ga);
  }
  function H() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), E(), M();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: O0(s),
    visibleNodes: N0(s),
    connection: lr([N, s.viewport], ([k, P]) => k.inProgress ? {
      ...k,
      to: Fo(k.to, [P.x, P.y, P.zoom])
    } : { ...k }),
    markers: lr([s.edges, s.defaultMarkerColor, s.flowId], ([k, P, O]) => Fp(k, { defaultColor: P, id: O })),
    initialized: (() => {
      let k = !1;
      const P = q(s.nodes).length, O = q(s.edges).length;
      return lr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([A, Y, j]) => k || (P === 0 ? k = j : O === 0 ? k = j && A : k = j && A && Y, k));
    })(),
    // actions
    syncNodeStores: (k) => P0(s.nodes, k),
    syncEdgeStores: (k) => T0(s.edges, k),
    syncViewport: (k) => H0(s.panZoom, s.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: _,
    fitView: (k) => v(k),
    setMinZoom: h,
    setMaxZoom: C,
    setTranslateExtent: p,
    setPaneClickDistance: S,
    unselectNodesAndEdges: E,
    addSelectedNodes: T,
    addSelectedEdges: L,
    handleNodeSelection: z,
    panBy: I,
    updateConnection: B,
    cancelConnection: M,
    reset: H
  };
}
function tt() {
  const e = _r(fa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function V0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = Uc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return Fr(fa, {
    getStore: () => s
  }), s;
}
function Bl(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: a, viewport: i, dragging: s, translateExtent: l, paneClickDistance: u } = t, c = b0({
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
var A0 = /* @__PURE__ */ oe('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const I0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Jc(e, t) {
  fe(t, !1), it(e, I0);
  const [n, r] = ut(), o = () => ne(O, "$panActivationKeyPressed", n), a = () => ne(B, "$minZoom", n), i = () => ne(M, "$maxZoom", n), s = () => ne(A, "$zoomActivationKeyPressed", n), l = () => ne(N, "$selectionRect", n), u = () => ne(k, "$translateExtent", n), c = () => ne(P, "$lib", n), d = ie(), f = ie(), v = ie();
  let m = w(t, "initialViewport", 12, void 0), b = w(t, "onMoveStart", 12, void 0), x = w(t, "onMove", 12, void 0), _ = w(t, "onMoveEnd", 12, void 0), h = w(t, "panOnScrollMode", 12), C = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), $ = w(t, "zoomOnDoubleClick", 12), S = w(t, "zoomOnPinch", 12), E = w(t, "panOnDrag", 12), T = w(t, "panOnScroll", 12), L = w(t, "paneClickDistance", 12);
  const {
    viewport: z,
    panZoom: I,
    selectionRect: N,
    minZoom: B,
    maxZoom: M,
    dragging: H,
    translateExtent: k,
    lib: P,
    panActivationKeyPressed: O,
    zoomActivationKeyPressed: A,
    viewportInitialized: Y
  } = tt(), j = (W) => z.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  Ut(() => {
    Pi(Y, !0);
  }), pe(() => J(m()), () => {
    G(d, m() || { x: 0, y: 0, zoom: 1 });
  }), pe(
    () => (o(), J(E())),
    () => {
      G(f, o() || E());
    }
  ), pe(
    () => (o(), J(T())),
    () => {
      G(v, o() || T());
    }
  ), _t(), Ze();
  var F = A0(), ae = X(F);
  Pt(ae, t, "default", {}), K(F), Mt(F, (W, le) => Bl == null ? void 0 : Bl(W, le), () => ({
    viewport: z,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: g(d),
    dragging: H,
    panZoom: I,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: _(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: $(),
    zoomOnPinch: S(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || ur.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof C() == "boolean" ? C() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: L(),
    onTransformChange: j
  })), V(e, F);
  var Q = ve({
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
      return x();
    },
    set onMove(W) {
      x(W), y();
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
      return C();
    },
    set preventScrolling(W) {
      C(W), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(W) {
      p(W), y();
    },
    get zoomOnDoubleClick() {
      return $();
    },
    set zoomOnDoubleClick(W) {
      $(W), y();
    },
    get zoomOnPinch() {
      return S();
    },
    set zoomOnPinch(W) {
      S(W), y();
    },
    get panOnDrag() {
      return E();
    },
    set panOnDrag(W) {
      E(W), y();
    },
    get panOnScroll() {
      return T();
    },
    set panOnScroll(W) {
      T(W), y();
    },
    get paneClickDistance() {
      return L();
    },
    set paneClickDistance(W) {
      L(W), y();
    }
  });
  return r(), Q;
}
se(
  Jc,
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
function Yl(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Kl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ oe("<div><!></div>");
const Z0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Qc(e, t) {
  fe(t, !1), it(e, Z0);
  const [n, r] = ut(), o = () => ne(M, "$panActivationKeyPressed", n), a = () => ne(N, "$selectionKeyPressed", n), i = () => ne(z, "$selectionRect", n), s = () => ne(L, "$elementsSelectable", n), l = () => ne(I, "$selectionRectMode", n), u = () => ne(S, "$edges", n), c = () => ne($, "$nodeLookup", n), d = () => ne(E, "$viewport", n), f = () => ne(B, "$selectionMode", n), v = () => ne(T, "$dragging", n), m = ie(), b = ie(), x = ie();
  let _ = w(t, "panOnDrag", 12, void 0), h = w(t, "selectionOnDrag", 12, void 0);
  const C = ra(), {
    nodes: p,
    nodeLookup: $,
    edges: S,
    viewport: E,
    dragging: T,
    elementsSelectable: L,
    selectionRect: z,
    selectionRectMode: I,
    selectionKeyPressed: N,
    selectionMode: B,
    panActivationKeyPressed: M,
    unselectNodesAndEdges: H
  } = tt();
  let k = ie(), P = null, O = [], A = !1;
  function Y(re) {
    if (A) {
      A = !1;
      return;
    }
    C("paneclick", { event: re }), H(), I.set(null);
  }
  function j(re) {
    var we, qe;
    if (P = g(k).getBoundingClientRect(), !L || !g(b) || re.button !== 0 || re.target !== g(k) || !P)
      return;
    (qe = (we = re.target) == null ? void 0 : we.setPointerCapture) == null || qe.call(we, re.pointerId);
    const { x: We, y: Ie } = Xn(re, P);
    H(), z.set({
      width: 0,
      height: 0,
      startX: We,
      startY: Ie,
      x: We,
      y: Ie
    });
  }
  function F(re) {
    if (!g(b) || !P || !i())
      return;
    A = !0;
    const we = Xn(re, P), qe = i().startX ?? 0, We = i().startY ?? 0, Ie = {
      ...i(),
      x: we.x < qe ? we.x : qe,
      y: we.y < We ? we.y : We,
      width: Math.abs(we.x - qe),
      height: Math.abs(we.y - We)
    }, ee = O.map((ue) => ue.id), Fe = Ua(O, u()).map((ue) => ue.id);
    O = bc(
      c(),
      Ie,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Vi.Partial,
      !0
    );
    const Re = Ua(O, u()).map((ue) => ue.id), ce = O.map((ue) => ue.id);
    (ee.length !== ce.length || ce.some((ue) => !ee.includes(ue))) && p.update((ue) => ue.map(Kl(ce))), (Fe.length !== Re.length || Re.some((ue) => !Fe.includes(ue))) && S.update((ue) => ue.map(Kl(Re))), I.set("user"), z.set(Ie);
  }
  function ae(re) {
    var we, qe;
    re.button === 0 && ((qe = (we = re.target) == null ? void 0 : we.releasePointerCapture) == null || qe.call(we, re.pointerId), !g(b) && l() === "user" && re.target === g(k) && (Y == null || Y(re)), z.set(null), O.length > 0 && Pi(I, "nodes"), a() && (A = !1));
  }
  const Q = (re) => {
    var we;
    if (Array.isArray(g(m)) && (we = g(m)) != null && we.includes(2)) {
      re.preventDefault();
      return;
    }
    C("panecontextmenu", { event: re });
  };
  pe(
    () => (o(), J(_())),
    () => {
      G(m, o() || _());
    }
  ), pe(
    () => (a(), i(), J(h()), g(m)),
    () => {
      G(b, a() || i() || h() && g(m) !== !0);
    }
  ), pe(
    () => (s(), g(b), l()),
    () => {
      G(x, s() && (g(b) || l() === "user"));
    }
  ), _t(), Ze();
  var W = R0(), le = /* @__PURE__ */ Oe(() => g(x) ? void 0 : Yl(Y, g(k))), $e = /* @__PURE__ */ Oe(() => Yl(Q, g(k)));
  let _e;
  var me = X(W);
  Pt(me, t, "default", {}), K(W), Ln(W, (re) => G(k, re), () => g(k)), He(
    (re) => _e = Vt(W, 1, "svelte-flow__pane svelte-1esy7hx", null, _e, {
      draggable: re,
      dragging: v(),
      selection: g(b)
    }),
    [
      () => _() === !0 || Array.isArray(_()) && _().includes(0)
    ],
    be
  ), Ue("click", W, function(...re) {
    var we;
    (we = g(le)) == null || we.apply(this, re);
  }), Ue("pointerdown", W, function(...re) {
    var we;
    (we = g(x) ? j : void 0) == null || we.apply(this, re);
  }), Ue("pointermove", W, function(...re) {
    var we;
    (we = g(x) ? F : void 0) == null || we.apply(this, re);
  }), Ue("pointerup", W, function(...re) {
    var we;
    (we = g(x) ? ae : void 0) == null || we.apply(this, re);
  }), Ue("contextmenu", W, function(...re) {
    var we;
    (we = g($e)) == null || we.apply(this, re);
  }), V(e, W);
  var de = ve({
    get panOnDrag() {
      return _();
    },
    set panOnDrag(re) {
      _(re), y();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(re) {
      h(re), y();
    }
  });
  return r(), de;
}
se(Qc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var B0 = /* @__PURE__ */ oe('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Y0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function ed(e, t) {
  fe(t, !1), it(e, Y0);
  const [n, r] = ut(), o = () => ne(a, "$viewport", n), { viewport: a } = tt();
  Ze();
  var i = B0(), s = X(i);
  Pt(s, t, "default", {}), K(i), He(() => he(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), V(e, i), ve(), r();
}
se(ed, {}, ["default"], [], !0);
function Ki(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = i0({
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
function K0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var W0 = /* @__PURE__ */ oe("<div><!></div>");
function td(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne($e, "$nodeTypes", n), a = () => ne(we, "$elementsSelectable", n), i = () => ne(qe, "$nodesDraggable", n), s = () => ne(Fe, "$connectableStore", n), l = ie(void 0, !0), u = ie(void 0, !0), c = ie(void 0, !0), d = ie(void 0, !0);
  let f = w(t, "node", 13), v = w(t, "id", 13), m = w(t, "data", 29, () => ({})), b = w(t, "selected", 13, !1), x = w(t, "draggable", 13, void 0), _ = w(t, "selectable", 13, void 0), h = w(t, "connectable", 13, !0), C = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), $ = w(t, "dragging", 13, !1), S = w(t, "resizeObserver", 13, null), E = w(t, "style", 13, void 0), T = w(t, "type", 13, "default"), L = w(t, "isParent", 13, !1), z = w(t, "positionX", 13), I = w(t, "positionY", 13), N = w(t, "sourcePosition", 13, void 0), B = w(t, "targetPosition", 13, void 0), M = w(t, "zIndex", 13), H = w(t, "measuredWidth", 13, void 0), k = w(t, "measuredHeight", 13, void 0), P = w(t, "initialWidth", 13, void 0), O = w(t, "initialHeight", 13, void 0), A = w(t, "width", 13, void 0), Y = w(t, "height", 13, void 0), j = w(t, "dragHandle", 13, void 0), F = w(t, "initialized", 13, !1), ae = w(t, "parentId", 13, void 0), Q = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const le = tt(), {
    nodeTypes: $e,
    nodeDragThreshold: _e,
    selectNodesOnDrag: me,
    handleNodeSelection: de,
    updateNodeInternals: re,
    elementsSelectable: we,
    nodesDraggable: qe
  } = le;
  let We = ie(void 0, !0), Ie = ie(null, !0);
  const ee = ra(), Fe = Ce(h());
  let Re = ie(void 0, !0), ce = ie(void 0, !0), ue = ie(void 0, !0);
  Fr("svelteflow__node_id", v()), Fr("svelteflow__node_connectable", Fe), $s(() => {
    var te;
    g(Ie) && ((te = S()) == null || te.unobserve(g(Ie)));
  });
  function Se(te) {
    _() && (!q(me) || !x() || q(_e) > 0) && de(v()), ee("nodeclick", { node: f().internals.userNode, event: te });
  }
  pe(() => J(T()), () => {
    G(l, T() || "default");
  }), pe(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), pe(
    () => (o(), g(l), Zi),
    () => {
      G(c, o()[g(l)] || Zi);
    }
  ), pe(
    () => (g(u), J(T())),
    () => {
      g(u) || console.warn("003", Ur.error003(T()));
    }
  ), pe(
    () => (J(A()), J(Y()), J(P()), J(O()), J(H()), J(k())),
    () => {
      G(d, K0({
        width: A(),
        height: Y(),
        initialWidth: P(),
        initialHeight: O(),
        measuredWidth: H(),
        measuredHeight: k()
      }));
    }
  ), pe(() => J(h()), () => {
    Fe.set(!!h());
  }), pe(
    () => (g(Re), g(l), g(ce), J(N()), g(ue), J(B()), J(v()), g(We)),
    () => {
      (g(Re) && g(l) !== g(Re) || g(ce) && N() !== g(ce) || g(ue) && B() !== g(ue)) && requestAnimationFrame(() => re(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(We),
            force: !0
          }
        ]
      ]))), G(Re, g(l)), G(ce, N()), G(ue, B());
    }
  ), pe(
    () => (J(S()), g(We), g(Ie), J(F())),
    () => {
      S() && (g(We) !== g(Ie) || !F()) && (g(Ie) && S().unobserve(g(Ie)), g(We) && S().observe(g(We)), G(Ie, g(We)));
    }
  ), _t(), Ze(!0);
  var Ne = lt(), Ge = Ee(Ne);
  {
    var yt = (te) => {
      var Ve = W0();
      let ye;
      var Qt = X(Ve);
      const Rt = /* @__PURE__ */ be(() => b() ?? !1), cn = /* @__PURE__ */ be(() => _() ?? a() ?? !0), Le = /* @__PURE__ */ be(() => C() ?? !0), st = /* @__PURE__ */ be(() => x() ?? i() ?? !0);
      Iu(Qt, () => g(c), (xe, ct) => {
        ct(xe, {
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
            return g(cn);
          },
          get deletable() {
            return g(Le);
          },
          get sourcePosition() {
            return N();
          },
          get targetPosition() {
            return B();
          },
          get zIndex() {
            return M();
          },
          get dragging() {
            return $();
          },
          get draggable() {
            return g(st);
          },
          get dragHandle() {
            return j();
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
            return z();
          },
          get positionAbsoluteY() {
            return I();
          },
          get width() {
            return A();
          },
          get height() {
            return Y();
          }
        });
      }), K(Ve), Mt(Ve, (xe, ct) => Ki == null ? void 0 : Ki(xe, ct), () => ({
        nodeId: v(),
        isSelectable: _(),
        disabled: !1,
        handleSelector: j(),
        noDragClass: "nodrag",
        nodeClickDistance: Q(),
        onNodeMouseDown: de,
        onDrag: (xe, ct, vt, Zt) => {
          ee("nodedrag", { event: xe, targetNode: vt, nodes: Zt });
        },
        onDragStart: (xe, ct, vt, Zt) => {
          ee("nodedragstart", { event: xe, targetNode: vt, nodes: Zt });
        },
        onDragStop: (xe, ct, vt, Zt) => {
          ee("nodedragstop", { event: xe, targetNode: vt, nodes: Zt });
        },
        store: le
      })), Ln(Ve, (xe) => G(We, xe), () => g(We)), rn(() => Ue("click", Ve, Se)), rn(() => Ue("mouseenter", Ve, (xe) => ee("nodemouseenter", { node: f(), event: xe }))), rn(() => Ue("mouseleave", Ve, (xe) => ee("nodemouseleave", { node: f(), event: xe }))), rn(() => Ue("mousemove", Ve, (xe) => ee("nodemousemove", { node: f(), event: xe }))), rn(() => Ue("contextmenu", Ve, (xe) => ee("nodecontextmenu", { node: f(), event: xe }))), He(
        (xe) => {
          he(Ve, "data-id", v()), ye = Vt(Ve, 1, Nn(xe), null, ye, {
            dragging: $(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: _(),
            nopan: x(),
            parent: L()
          }), he(Ve, "style", `${E() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), ht(Ve, "z-index", M()), ht(Ve, "transform", `translate(${z() ?? ""}px, ${I() ?? ""}px)`), ht(Ve, "visibility", F() ? "visible" : "hidden");
        },
        [
          () => It([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])
        ],
        be
      ), V(te, Ve);
    };
    Me(Ge, (te) => {
      p() || te(yt);
    });
  }
  V(e, Ne);
  var at = ve({
    get node() {
      return f();
    },
    set node(te) {
      f(te), y();
    },
    get id() {
      return v();
    },
    set id(te) {
      v(te), y();
    },
    get data() {
      return m();
    },
    set data(te) {
      m(te), y();
    },
    get selected() {
      return b();
    },
    set selected(te) {
      b(te), y();
    },
    get draggable() {
      return x();
    },
    set draggable(te) {
      x(te), y();
    },
    get selectable() {
      return _();
    },
    set selectable(te) {
      _(te), y();
    },
    get connectable() {
      return h();
    },
    set connectable(te) {
      h(te), y();
    },
    get deletable() {
      return C();
    },
    set deletable(te) {
      C(te), y();
    },
    get hidden() {
      return p();
    },
    set hidden(te) {
      p(te), y();
    },
    get dragging() {
      return $();
    },
    set dragging(te) {
      $(te), y();
    },
    get resizeObserver() {
      return S();
    },
    set resizeObserver(te) {
      S(te), y();
    },
    get style() {
      return E();
    },
    set style(te) {
      E(te), y();
    },
    get type() {
      return T();
    },
    set type(te) {
      T(te), y();
    },
    get isParent() {
      return L();
    },
    set isParent(te) {
      L(te), y();
    },
    get positionX() {
      return z();
    },
    set positionX(te) {
      z(te), y();
    },
    get positionY() {
      return I();
    },
    set positionY(te) {
      I(te), y();
    },
    get sourcePosition() {
      return N();
    },
    set sourcePosition(te) {
      N(te), y();
    },
    get targetPosition() {
      return B();
    },
    set targetPosition(te) {
      B(te), y();
    },
    get zIndex() {
      return M();
    },
    set zIndex(te) {
      M(te), y();
    },
    get measuredWidth() {
      return H();
    },
    set measuredWidth(te) {
      H(te), y();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(te) {
      k(te), y();
    },
    get initialWidth() {
      return P();
    },
    set initialWidth(te) {
      P(te), y();
    },
    get initialHeight() {
      return O();
    },
    set initialHeight(te) {
      O(te), y();
    },
    get width() {
      return A();
    },
    set width(te) {
      A(te), y();
    },
    get height() {
      return Y();
    },
    set height(te) {
      Y(te), y();
    },
    get dragHandle() {
      return j();
    },
    set dragHandle(te) {
      j(te), y();
    },
    get initialized() {
      return F();
    },
    set initialized(te) {
      F(te), y();
    },
    get parentId() {
      return ae();
    },
    set parentId(te) {
      ae(te), y();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), y();
    },
    get class() {
      return W();
    },
    set class(te) {
      W(te), y();
    }
  });
  return r(), at;
}
se(
  td,
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
var X0 = /* @__PURE__ */ oe('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const j0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function nd(e, t) {
  fe(t, !1), it(e, j0);
  const [n, r] = ut(), o = () => ne(c, "$visibleNodes", n), a = () => ne(d, "$nodesDraggable", n), i = () => ne(v, "$elementsSelectable", n), s = () => ne(f, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: m,
    parentLookup: b
  } = tt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((C) => {
    const p = /* @__PURE__ */ new Map();
    C.forEach(($) => {
      const S = $.target.getAttribute("data-id");
      p.set(S, { id: S, nodeElement: $.target, force: !0 });
    }), m(p);
  });
  $s(() => {
    x == null || x.disconnect();
  }), Ze();
  var _ = X0();
  Gt(_, 5, o, (C) => C.id, (C, p) => {
    const $ = /* @__PURE__ */ be(() => !!g(p).selected), S = /* @__PURE__ */ be(() => !!g(p).hidden), E = /* @__PURE__ */ be(() => !!(g(p).draggable || a() && typeof g(p).draggable > "u")), T = /* @__PURE__ */ be(() => !!(g(p).selectable || i() && typeof g(p).selectable > "u")), L = /* @__PURE__ */ be(() => !!(g(p).connectable || s() && typeof g(p).connectable > "u")), z = /* @__PURE__ */ be(() => g(p).deletable ?? !0), I = /* @__PURE__ */ be(() => l().has(g(p).id)), N = /* @__PURE__ */ be(() => g(p).type ?? "default"), B = /* @__PURE__ */ be(() => g(p).internals.z ?? 0), M = /* @__PURE__ */ be(() => Ec(g(p)));
    td(C, {
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
        return g($);
      },
      get hidden() {
        return g(S);
      },
      get draggable() {
        return g(E);
      },
      get selectable() {
        return g(T);
      },
      get connectable() {
        return g(L);
      },
      get deletable() {
        return g(z);
      },
      get positionX() {
        return g(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(I);
      },
      get style() {
        return g(p).style;
      },
      get class() {
        return g(p).class;
      },
      get type() {
        return g(N);
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
        return g(M);
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
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(H) {
          Be.call(this, t, H);
        },
        nodemouseenter(H) {
          Be.call(this, t, H);
        },
        nodemousemove(H) {
          Be.call(this, t, H);
        },
        nodemouseleave(H) {
          Be.call(this, t, H);
        },
        nodedrag(H) {
          Be.call(this, t, H);
        },
        nodedragstart(H) {
          Be.call(this, t, H);
        },
        nodedragstop(H) {
          Be.call(this, t, H);
        },
        nodecontextmenu(H) {
          Be.call(this, t, H);
        }
      }
    });
  }), K(_), V(e, _);
  var h = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(C) {
      u(C), y();
    }
  });
  return r(), h;
}
se(nd, { nodeClickDistance: {} }, [], [], !0);
var F0 = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function rd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(W, "$edgeTypes", n), a = () => ne(le, "$flowId", n), i = () => ne($e, "$elementsSelectable", n), s = () => ne(Q, "$edgeLookup", n), l = ie(void 0, !0), u = ie(void 0, !0), c = ie(void 0, !0), d = ie(void 0, !0), f = ie(void 0, !0);
  let v = w(t, "id", 13), m = w(t, "type", 13, "default"), b = w(t, "source", 13, ""), x = w(t, "target", 13, ""), _ = w(t, "data", 29, () => ({})), h = w(t, "style", 13, void 0), C = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), $ = w(t, "selected", 13, !1), S = w(t, "selectable", 13, void 0), E = w(t, "deletable", 13, void 0), T = w(t, "hidden", 13, !1), L = w(t, "label", 13, void 0), z = w(t, "labelStyle", 13, void 0), I = w(t, "markerStart", 13, void 0), N = w(t, "markerEnd", 13, void 0), B = w(t, "sourceHandle", 13, void 0), M = w(t, "targetHandle", 13, void 0), H = w(t, "sourceX", 13), k = w(t, "sourceY", 13), P = w(t, "targetX", 13), O = w(t, "targetY", 13), A = w(t, "sourcePosition", 13), Y = w(t, "targetPosition", 13), j = w(t, "ariaLabel", 13, void 0), F = w(t, "interactionWidth", 13, void 0), ae = w(t, "class", 13, "");
  Fr("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: W,
    flowId: le,
    elementsSelectable: $e
  } = tt(), _e = ra(), me = Kc();
  function de(ee) {
    const Fe = s().get(v());
    Fe && (me(v()), _e("edgeclick", { event: ee, edge: Fe }));
  }
  function re(ee, Fe) {
    const Re = s().get(v());
    Re && _e(Fe, { event: ee, edge: Re });
  }
  pe(() => J(m()), () => {
    G(l, m() || "default");
  }), pe(
    () => (o(), g(l), Yi),
    () => {
      G(u, o()[g(l)] || Yi);
    }
  ), pe(
    () => (J(I()), a()),
    () => {
      G(c, I() ? `url('#${es(I(), a())}')` : void 0);
    }
  ), pe(
    () => (J(N()), a()),
    () => {
      G(d, N() ? `url('#${es(N(), a())}')` : void 0);
    }
  ), pe(
    () => (J(S()), i()),
    () => {
      G(f, S() ?? i());
    }
  ), _t(), Ze(!0);
  var we = lt(), qe = Ee(we);
  {
    var We = (ee) => {
      var Fe = F0(), Re = X(Fe);
      let ce;
      var ue = X(Re);
      const Se = /* @__PURE__ */ be(() => E() ?? !0);
      Iu(ue, () => g(u), (Ne, Ge) => {
        Ge(Ne, {
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
            return k();
          },
          get targetX() {
            return P();
          },
          get targetY() {
            return O();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return Y();
          },
          get animated() {
            return p();
          },
          get selected() {
            return $();
          },
          get label() {
            return L();
          },
          get labelStyle() {
            return z();
          },
          get data() {
            return _();
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
            return g(Se);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return B();
          },
          get targetHandleId() {
            return M();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), K(Re), K(Fe), He(
        (Ne) => {
          ht(Fe, "z-index", C()), ce = Vt(Re, 0, Nn(Ne), null, ce, {
            animated: p(),
            selected: $(),
            selectable: g(f)
          }), he(Re, "data-id", v()), he(Re, "aria-label", j() === null ? void 0 : j() ? j() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => It(["svelte-flow__edge", ae()])
        ],
        be
      ), Ue("click", Re, de), Ue("contextmenu", Re, (Ne) => {
        re(Ne, "edgecontextmenu");
      }), Ue("mouseenter", Re, (Ne) => {
        re(Ne, "edgemouseenter");
      }), Ue("mouseleave", Re, (Ne) => {
        re(Ne, "edgemouseleave");
      }), V(ee, Fe);
    };
    Me(qe, (ee) => {
      T() || ee(We);
    });
  }
  V(e, we);
  var Ie = ve({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), y();
    },
    get type() {
      return m();
    },
    set type(ee) {
      m(ee), y();
    },
    get source() {
      return b();
    },
    set source(ee) {
      b(ee), y();
    },
    get target() {
      return x();
    },
    set target(ee) {
      x(ee), y();
    },
    get data() {
      return _();
    },
    set data(ee) {
      _(ee), y();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), y();
    },
    get zIndex() {
      return C();
    },
    set zIndex(ee) {
      C(ee), y();
    },
    get animated() {
      return p();
    },
    set animated(ee) {
      p(ee), y();
    },
    get selected() {
      return $();
    },
    set selected(ee) {
      $(ee), y();
    },
    get selectable() {
      return S();
    },
    set selectable(ee) {
      S(ee), y();
    },
    get deletable() {
      return E();
    },
    set deletable(ee) {
      E(ee), y();
    },
    get hidden() {
      return T();
    },
    set hidden(ee) {
      T(ee), y();
    },
    get label() {
      return L();
    },
    set label(ee) {
      L(ee), y();
    },
    get labelStyle() {
      return z();
    },
    set labelStyle(ee) {
      z(ee), y();
    },
    get markerStart() {
      return I();
    },
    set markerStart(ee) {
      I(ee), y();
    },
    get markerEnd() {
      return N();
    },
    set markerEnd(ee) {
      N(ee), y();
    },
    get sourceHandle() {
      return B();
    },
    set sourceHandle(ee) {
      B(ee), y();
    },
    get targetHandle() {
      return M();
    },
    set targetHandle(ee) {
      M(ee), y();
    },
    get sourceX() {
      return H();
    },
    set sourceX(ee) {
      H(ee), y();
    },
    get sourceY() {
      return k();
    },
    set sourceY(ee) {
      k(ee), y();
    },
    get targetX() {
      return P();
    },
    set targetX(ee) {
      P(ee), y();
    },
    get targetY() {
      return O();
    },
    set targetY(ee) {
      O(ee), y();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(ee) {
      A(ee), y();
    },
    get targetPosition() {
      return Y();
    },
    set targetPosition(ee) {
      Y(ee), y();
    },
    get ariaLabel() {
      return j();
    },
    set ariaLabel(ee) {
      j(ee), y();
    },
    get interactionWidth() {
      return F();
    },
    set interactionWidth(ee) {
      F(ee), y();
    },
    get class() {
      return ae();
    },
    set class(ee) {
      ae(ee), y();
    }
  });
  return r(), Ie;
}
se(
  rd,
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
function od(e, t) {
  fe(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return Ut(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ze(), ve({
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
se(od, { onMount: {}, onDestroy: {} }, [], [], !0);
var q0 = /* @__PURE__ */ ke("<defs></defs>");
function id(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(a, "$markers", n), { markers: a } = tt();
  Ze();
  var i = q0();
  Gt(i, 5, o, (s) => s.id, (s, l) => {
    ad(s, xt(() => g(l)));
  }), K(i), V(e, i), ve(), r();
}
se(id, {}, [], [], !0);
var G0 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), U0 = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), J0 = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ad(e, t) {
  fe(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), a = w(t, "height", 12, 12.5), i = w(t, "markerUnits", 12, "strokeWidth"), s = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ze();
  var c = J0(), d = X(c);
  {
    var f = (m) => {
      var b = G0();
      He(() => {
        he(b, "stroke", l()), he(b, "stroke-width", u());
      }), V(m, b);
    }, v = (m, b) => {
      {
        var x = (_) => {
          var h = U0();
          He(() => {
            he(h, "stroke", l()), he(h, "stroke-width", u()), he(h, "fill", l());
          }), V(_, h);
        };
        Me(
          m,
          (_) => {
            r() === No.ArrowClosed && _(x);
          },
          b
        );
      }
    };
    Me(d, (m) => {
      r() === No.Arrow ? m(f) : m(v, !1);
    });
  }
  return K(c), He(() => {
    he(c, "id", n()), he(c, "markerWidth", `${o()}`), he(c, "markerHeight", `${a()}`), he(c, "markerUnits", i()), he(c, "orient", s());
  }), V(e, c), ve({
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
se(
  ad,
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
var Q0 = /* @__PURE__ */ oe('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function sd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(s, "$visibleEdges", n), a = () => ne(c, "$elementsSelectable", n);
  let i = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = tt();
  Ut(() => {
    i() && u(i());
  }), Ze();
  var d = Q0(), f = X(d), v = X(f);
  id(v, {}), K(f);
  var m = Z(f, 2);
  Gt(m, 1, o, (h) => h.id, (h, C) => {
    const p = /* @__PURE__ */ be(() => g(C).selectable ?? a()), $ = /* @__PURE__ */ be(() => g(C).type || "default");
    rd(h, {
      get id() {
        return g(C).id;
      },
      get source() {
        return g(C).source;
      },
      get target() {
        return g(C).target;
      },
      get data() {
        return g(C).data;
      },
      get style() {
        return g(C).style;
      },
      get animated() {
        return g(C).animated;
      },
      get selected() {
        return g(C).selected;
      },
      get selectable() {
        return g(p);
      },
      get deletable() {
        return g(C).deletable;
      },
      get hidden() {
        return g(C).hidden;
      },
      get label() {
        return g(C).label;
      },
      get labelStyle() {
        return g(C).labelStyle;
      },
      get markerStart() {
        return g(C).markerStart;
      },
      get markerEnd() {
        return g(C).markerEnd;
      },
      get sourceHandle() {
        return g(C).sourceHandle;
      },
      get targetHandle() {
        return g(C).targetHandle;
      },
      get sourceX() {
        return g(C).sourceX;
      },
      get sourceY() {
        return g(C).sourceY;
      },
      get targetX() {
        return g(C).targetX;
      },
      get targetY() {
        return g(C).targetY;
      },
      get sourcePosition() {
        return g(C).sourcePosition;
      },
      get targetPosition() {
        return g(C).targetPosition;
      },
      get ariaLabel() {
        return g(C).ariaLabel;
      },
      get interactionWidth() {
        return g(C).interactionWidth;
      },
      get class() {
        return g(C).class;
      },
      get type() {
        return g($);
      },
      get zIndex() {
        return g(C).zIndex;
      },
      $$events: {
        edgeclick(S) {
          Be.call(this, t, S);
        },
        edgecontextmenu(S) {
          Be.call(this, t, S);
        },
        edgemouseenter(S) {
          Be.call(this, t, S);
        },
        edgemouseleave(S) {
          Be.call(this, t, S);
        }
      }
    });
  });
  var b = Z(m, 2);
  {
    var x = (h) => {
      od(h, {
        onMount: () => {
          Pi(l, !0);
        },
        onDestroy: () => {
          Pi(l, !1);
        }
      });
    };
    Me(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  K(d), V(e, d);
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
se(sd, { defaultEdgeOptions: {} }, [], [], !0);
var em = /* @__PURE__ */ oe('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const tm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function Vs(e, t) {
  fe(t, !1), it(e, tm);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "isVisible", 12, !0);
  var s = lt(), l = Ee(s);
  {
    var u = (c) => {
      var d = em();
      He(() => {
        ht(d, "width", typeof o() == "string" ? o() : `${o()}px`), ht(d, "height", typeof a() == "string" ? a() : `${a()}px`), ht(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), V(c, d);
    };
    Me(l, (c) => {
      i() && c(u);
    });
  }
  return V(e, s), ve({
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
se(
  Vs,
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
function ld(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(i, "$selectionRect", n), a = () => ne(s, "$selectionRectMode", n), { selectionRect: i, selectionRectMode: s } = tt();
  Ze();
  const l = /* @__PURE__ */ be(() => !!(o() && a() === "user")), u = /* @__PURE__ */ be(() => {
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
  Vs(e, {
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
se(ld, {}, [], [], !0);
var nm = /* @__PURE__ */ oe('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const rm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function ud(e, t) {
  fe(t, !1), it(e, rm);
  const [n, r] = ut(), o = () => ne(l, "$selectionRectMode", n), a = () => ne(c, "$nodeLookup", n), i = () => ne(u, "$nodes", n), s = tt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = ra();
  let f = ie(null);
  function v(h) {
    const C = i().filter((p) => p.selected);
    d("selectioncontextmenu", { nodes: C, event: h });
  }
  function m(h) {
    const C = i().filter((p) => p.selected);
    d("selectionclick", { nodes: C, event: h });
  }
  pe(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (G(f, jo(a(), { filter: (h) => !!h.selected })), i());
    }
  ), _t(), Ze();
  var b = lt(), x = Ee(b);
  {
    var _ = (h) => {
      var C = nm(), p = X(C);
      Vs(p, { width: "100%", height: "100%", x: 0, y: 0 }), K(C), Mt(C, ($, S) => Ki == null ? void 0 : Ki($, S), () => ({
        disabled: !1,
        store: s,
        onDrag: ($, S, E, T) => {
          d("nodedrag", { event: $, targetNode: null, nodes: T });
        },
        onDragStart: ($, S, E, T) => {
          d("nodedragstart", { event: $, targetNode: null, nodes: T });
        },
        onDragStop: ($, S, E, T) => {
          d("nodedragstop", { event: $, targetNode: null, nodes: T });
        }
      })), rn(() => Ue("contextmenu", C, v)), rn(() => Ue("click", C, m)), rn(() => Ue("keyup", C, () => {
      })), He(() => he(C, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), V(h, C);
    };
    Me(x, (h) => {
      o() === "nodes" && g(f) && Yn(g(f).x) && Yn(g(f).y) && h(_);
    });
  }
  V(e, b), ve(), r();
}
se(ud, {}, [], [], !0);
function bt(e, t) {
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
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every((_) => l[_])
        ))
          continue;
        if (i.key === f) {
          m && i.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: i
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), v == null || v(x);
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
function cd(e, t) {
  fe(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Ii() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), a = w(t, "panActivationKey", 12, " "), i = w(t, "zoomActivationKey", 28, () => Ii() ? "Meta" : "Control");
  const {
    selectionKeyPressed: s,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = tt();
  function v(h) {
    return h !== null && typeof h == "object";
  }
  function m(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, C) {
    return (Array.isArray(h) ? h : [h]).map((p) => {
      const $ = b(p);
      return {
        key: $,
        modifier: m(p),
        enabled: $ !== null,
        callback: C
      };
    });
  }
  function _() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ze(), Ue("blur", Wt, _), Ue("contextmenu", Wt, _), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Vp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(a(), () => c.set(!0)),
    type: "keydown"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(a(), () => c.set(!1)),
    type: "keyup"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(i(), () => d.set(!0)),
    type: "keydown"
  })), Mt(Wt, (h, C) => bt == null ? void 0 : bt(h, C), () => ({
    trigger: x(i(), () => d.set(!1)),
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
se(
  cd,
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
var om = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), im = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function dd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(v, "$connection", n), a = () => ne(m, "$connectionLineType", n), i = () => ne(d, "$width", n), s = () => ne(f, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: m
  } = tt();
  let b = ie(null);
  pe(
    () => (o(), J(c()), a(), g(b), Qa),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: $, fromPosition: S, toPosition: E } = o(), T = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: S,
          targetX: $.x,
          targetY: $.y,
          targetPosition: E
        };
        switch (a()) {
          case Yr.Bezier:
            ((L) => G(b, L[0]))(Mc(T));
            break;
          case Yr.Step:
            ((L) => G(b, L[0]))(Ri({ ...T, borderRadius: 0 }));
            break;
          case Yr.SmoothStep:
            ((L) => G(b, L[0]))(Ri(T));
            break;
          default:
            ((L) => G(b, L[0]))(Qa(T));
        }
      }
    }
  ), _t(), Ze();
  var x = lt(), _ = Ee(x);
  {
    var h = (p) => {
      var $ = im(), S = X($), E = X(S);
      Pt(E, t, "connectionLine", {});
      var T = Z(E);
      {
        var L = (z) => {
          var I = om();
          He(() => {
            he(I, "d", g(b)), he(I, "style", u());
          }), V(z, I);
        };
        Me(T, (z) => {
          c() || z(L);
        });
      }
      K(S), K($), He(
        (z) => {
          he($, "width", i()), he($, "height", s()), he($, "style", l()), Vt(S, 0, Nn(z));
        },
        [
          () => It([
            "svelte-flow__connection",
            Mp(o().isValid)
          ])
        ],
        be
      ), V(p, $);
    };
    Me(_, (p) => {
      o().inProgress && p(h);
    });
  }
  V(e, x);
  var C = ve({
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
  return r(), C;
}
se(
  dd,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var am = /* @__PURE__ */ oe("<div><!></div>");
function Go(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ft(n, ["position", "style", "class"]);
  fe(t, !1);
  const [o, a] = ut(), i = () => ne(d, "$selectionRectMode", o), s = ie();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = tt();
  pe(() => J(l()), () => {
    G(s, `${l()}`.split("-"));
  }), _t(), Ze();
  var f = am();
  let v;
  var m = X(f);
  Pt(m, t, "default", {}), K(f), He(
    (x) => {
      v = xn(f, v, {
        class: x,
        style: u(),
        ...r
      }), ht(f, "pointer-events", i() ? "none" : "");
    },
    [
      () => It([
        "svelte-flow__panel",
        c(),
        ...g(s)
      ])
    ],
    be
  ), V(e, f);
  var b = ve({
    get position() {
      return l();
    },
    set position(x) {
      l(x), y();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), y();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), y();
    }
  });
  return a(), b;
}
se(Go, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var sm = /* @__PURE__ */ oe('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function fd(e, t) {
  fe(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ze();
  var o = lt(), a = Ee(o);
  {
    var i = (s) => {
      Go(s, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = sm();
          V(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Me(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return V(e, o), ve({
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
se(fd, { proOptions: {}, position: {} }, [], [], !0);
function Wl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const lm = (e) => Object.keys(e);
function Xl(e, t) {
  lm(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function um() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function cm(e = "light") {
  return dn("light", (t) => {
    if (e !== "system") {
      t(e);
      return;
    }
    const n = um(), r = () => t(n != null && n.matches ? "dark" : "light");
    return t(n != null && n.matches ? "dark" : "light"), n == null || n.addEventListener("change", r), () => {
      n == null || n.removeEventListener("change", r);
    };
  });
}
var dm = /* @__PURE__ */ oe('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), fm = /* @__PURE__ */ oe("<!> <!>", 1), vm = /* @__PURE__ */ oe("<div><!> <!> <!> <!></div>");
const gm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function vd(e, t) {
  const n = zv(t), r = ft(t, [
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
  fe(t, !1), it(e, gm);
  const [a, i] = ut(), s = () => ne(C(), "$viewport", a), l = () => ne(co, "$initialized", a), u = () => ne(g(c), "$colorModeClass", a), c = ie();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), v = w(t, "edges", 12), m = w(t, "fitView", 12, void 0), b = w(t, "fitViewOptions", 12, void 0), x = w(t, "minZoom", 12, void 0), _ = w(t, "maxZoom", 12, void 0), h = w(t, "initialViewport", 12, void 0), C = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), $ = w(t, "edgeTypes", 12, void 0), S = w(t, "selectionKey", 12, void 0), E = w(t, "selectionMode", 12, void 0), T = w(t, "panActivationKey", 12, void 0), L = w(t, "multiSelectionKey", 12, void 0), z = w(t, "zoomActivationKey", 12, void 0), I = w(t, "nodesDraggable", 12, void 0), N = w(t, "nodesConnectable", 12, void 0), B = w(t, "nodeDragThreshold", 12, void 0), M = w(t, "elementsSelectable", 12, void 0), H = w(t, "snapGrid", 12, void 0), k = w(t, "deleteKey", 12, void 0), P = w(t, "connectionRadius", 12, void 0), O = w(t, "connectionLineType", 12, void 0), A = w(t, "connectionMode", 28, () => Sr.Strict), Y = w(t, "connectionLineStyle", 12, ""), j = w(t, "connectionLineContainerStyle", 12, ""), F = w(t, "onMoveStart", 12, void 0), ae = w(t, "onMove", 12, void 0), Q = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), le = w(t, "translateExtent", 12, void 0), $e = w(t, "nodeExtent", 12, void 0), _e = w(t, "onlyRenderVisibleElements", 12, void 0), me = w(t, "panOnScrollMode", 28, () => ur.Free), de = w(t, "preventScrolling", 12, !0), re = w(t, "zoomOnScroll", 12, !0), we = w(t, "zoomOnDoubleClick", 12, !0), qe = w(t, "zoomOnPinch", 12, !0), We = w(t, "panOnScroll", 12, !1), Ie = w(t, "panOnDrag", 12, !0), ee = w(t, "selectionOnDrag", 12, void 0), Fe = w(t, "autoPanOnConnect", 12, !0), Re = w(t, "autoPanOnNodeDrag", 12, !0), ce = w(t, "onerror", 12, void 0), ue = w(t, "ondelete", 12, void 0), Se = w(t, "onedgecreate", 12, void 0), Ne = w(t, "attributionPosition", 12, void 0), Ge = w(t, "proOptions", 12, void 0), yt = w(t, "defaultEdgeOptions", 12, void 0), at = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), Ve = w(t, "colorMode", 12, "light"), ye = w(t, "onconnect", 12, void 0), Qt = w(t, "onconnectstart", 12, void 0), Rt = w(t, "onconnectend", 12, void 0), cn = w(t, "onbeforedelete", 12, void 0), Le = w(t, "oninit", 12, void 0), st = w(t, "nodeOrigin", 12, void 0), xe = w(t, "paneClickDistance", 12, 0), ct = w(t, "nodeClickDistance", 12, 0), vt = w(t, "defaultMarkerColor", 12, "#b1b1b7"), Zt = w(t, "style", 12, void 0), In = w(t, "class", 12, void 0), Et = ie(), pt = ie(), Bt = ie();
  const Lt = s() || h(), wt = vv(fa) ? tt() : V0({
    nodes: q(f()),
    edges: q(v()),
    width: at(),
    height: te(),
    fitView: m(),
    nodeOrigin: st(),
    nodeExtent: $e()
  });
  Ut(() => (wt.width.set(g(pt)), wt.height.set(g(Bt)), wt.domNode.set(g(Et)), wt.syncNodeStores(f()), wt.syncEdgeStores(v()), wt.syncViewport(C()), m() !== void 0 && wt.fitViewOnInit.set(m()), b() && wt.fitViewOptions.set(b()), Wl(wt, {
    nodeTypes: p(),
    edgeTypes: $(),
    minZoom: x(),
    maxZoom: _(),
    translateExtent: le(),
    paneClickDistance: xe()
  }), () => {
    wt.reset();
  }));
  const { initialized: co } = wt;
  let En = ie(!1);
  pe(
    () => (g(pt), g(Bt)),
    () => {
      g(pt) !== void 0 && g(Bt) !== void 0 && (wt.width.set(g(pt)), wt.height.set(g(Bt)));
    }
  ), pe(
    () => (g(En), l(), J(Le())),
    () => {
      var R;
      !g(En) && l() && ((R = Le()) == null || R(), G(En, !0));
    }
  ), pe(
    () => (J(d()), J(O()), J(P()), J(E()), J(H()), J(vt()), J(I()), J(N()), J(M()), J(_e()), J(W()), J(Fe()), J(Re()), J(ce()), J(ue()), J(Se()), J(A()), J(B()), J(ye()), J(Qt()), J(Rt()), J(cn()), J(st()), Xl),
    () => {
      const R = {
        flowId: d(),
        connectionLineType: O(),
        connectionRadius: P(),
        selectionMode: E(),
        snapGrid: H(),
        defaultMarkerColor: vt(),
        nodesDraggable: I(),
        nodesConnectable: N(),
        elementsSelectable: M(),
        onlyRenderVisibleElements: _e(),
        isValidConnection: W(),
        autoPanOnConnect: Fe(),
        autoPanOnNodeDrag: Re(),
        onerror: ce(),
        ondelete: ue(),
        onedgecreate: Se(),
        connectionMode: A(),
        nodeDragThreshold: B(),
        onconnect: ye(),
        onconnectstart: Qt(),
        onconnectend: Rt(),
        onbeforedelete: cn(),
        nodeOrigin: st()
      };
      Xl(wt, R);
    }
  ), pe(
    () => (J(p()), J($()), J(x()), J(_()), J(le()), J(xe())),
    () => {
      Wl(wt, {
        nodeTypes: p(),
        edgeTypes: $(),
        minZoom: x(),
        maxZoom: _(),
        translateExtent: le(),
        paneClickDistance: xe()
      });
    }
  ), pe(
    () => J(Ve()),
    () => {
      Bv(G(c, cm(Ve())), "$colorModeClass", a);
    }
  ), _t(), Ze();
  var en = vm();
  let mr;
  var yr = X(en);
  cd(yr, {
    get selectionKey() {
      return S();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return T();
    },
    get multiSelectionKey() {
      return L();
    },
    get zoomActivationKey() {
      return z();
    }
  });
  var Dr = Z(yr, 2);
  const ma = /* @__PURE__ */ be(() => me() === void 0 ? ur.Free : me()), ti = /* @__PURE__ */ be(() => de() === void 0 ? !0 : de()), ni = /* @__PURE__ */ be(() => re() === void 0 ? !0 : re()), ya = /* @__PURE__ */ be(() => we() === void 0 ? !0 : we()), wa = /* @__PURE__ */ be(() => qe() === void 0 ? !0 : qe()), ba = /* @__PURE__ */ be(() => We() === void 0 ? !1 : We()), xa = /* @__PURE__ */ be(() => Ie() === void 0 ? !0 : Ie()), D = /* @__PURE__ */ be(() => xe() === void 0 ? 0 : xe());
  Jc(Dr, {
    initialViewport: Lt,
    get onMoveStart() {
      return F();
    },
    get onMove() {
      return ae();
    },
    get onMoveEnd() {
      return Q();
    },
    get panOnScrollMode() {
      return g(ma);
    },
    get preventScrolling() {
      return g(ti);
    },
    get zoomOnScroll() {
      return g(ni);
    },
    get zoomOnDoubleClick() {
      return g(ya);
    },
    get zoomOnPinch() {
      return g(wa);
    },
    get panOnScroll() {
      return g(ba);
    },
    get panOnDrag() {
      return g(xa);
    },
    get paneClickDistance() {
      return g(D);
    },
    children: (R, nt) => {
      const Ke = /* @__PURE__ */ be(() => Ie() === void 0 ? !0 : Ie());
      Qc(R, {
        get panOnDrag() {
          return g(Ke);
        },
        get selectionOnDrag() {
          return ee();
        },
        $$events: {
          paneclick(Ae) {
            Be.call(this, t, Ae);
          },
          panecontextmenu(Ae) {
            Be.call(this, t, Ae);
          }
        },
        children: (Ae, St) => {
          var dt = fm(), gt = Ee(dt);
          ed(gt, {
            children: (er, tr) => {
              var Ct = dm(), Or = Ee(Ct);
              sd(Or, {
                get defaultEdgeOptions() {
                  return yt();
                },
                $$events: {
                  edgeclick(Xe) {
                    Be.call(this, t, Xe);
                  },
                  edgecontextmenu(Xe) {
                    Be.call(this, t, Xe);
                  },
                  edgemouseenter(Xe) {
                    Be.call(this, t, Xe);
                  },
                  edgemouseleave(Xe) {
                    Be.call(this, t, Xe);
                  }
                }
              });
              var ri = Z(Or, 2);
              dd(ri, {
                get containerStyle() {
                  return j();
                },
                get style() {
                  return Y();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (Xe, Lw) => {
                    var Ys = lt(), uf = Ee(Ys);
                    Pt(uf, t, "connectionLine", {}), V(Xe, Ys);
                  }
                }
              });
              var oi = Z(ri, 6);
              nd(oi, {
                get nodeClickDistance() {
                  return ct();
                },
                $$events: {
                  nodeclick(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodemouseenter(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodemousemove(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodemouseleave(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodedragstart(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodedrag(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodedragstop(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodecontextmenu(Xe) {
                    Be.call(this, t, Xe);
                  }
                }
              });
              var lf = Z(oi, 2);
              ud(lf, {
                $$events: {
                  selectionclick(Xe) {
                    Be.call(this, t, Xe);
                  },
                  selectioncontextmenu(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodedragstart(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodedrag(Xe) {
                    Be.call(this, t, Xe);
                  },
                  nodedragstop(Xe) {
                    Be.call(this, t, Xe);
                  }
                }
              }), V(er, Ct);
            },
            $$slots: { default: !0 }
          });
          var Yt = Z(gt, 2);
          ld(Yt, {}), V(Ae, dt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var U = Z(Dr, 2);
  fd(U, {
    get proOptions() {
      return Ge();
    },
    get position() {
      return Ne();
    }
  });
  var ge = Z(U, 2);
  Pt(ge, t, "default", {}), K(en), Ln(en, (R) => G(Et, R), () => g(Et)), He(
    (R) => mr = xn(
      en,
      mr,
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
        In(),
        u()
      ])
    ],
    be
  ), ol(en, "clientWidth", (R) => G(pt, R)), ol(en, "clientHeight", (R) => G(Bt, R)), Ue("dragover", en, function(R) {
    Be.call(this, t, R);
  }), Ue("drop", en, function(R) {
    Be.call(this, t, R);
  }), V(e, en);
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
      return x();
    },
    set minZoom(R) {
      x(R), y();
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
      return C();
    },
    set viewport(R) {
      C(R), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(R) {
      p(R), y();
    },
    get edgeTypes() {
      return $();
    },
    set edgeTypes(R) {
      $(R), y();
    },
    get selectionKey() {
      return S();
    },
    set selectionKey(R) {
      S(R), y();
    },
    get selectionMode() {
      return E();
    },
    set selectionMode(R) {
      E(R), y();
    },
    get panActivationKey() {
      return T();
    },
    set panActivationKey(R) {
      T(R), y();
    },
    get multiSelectionKey() {
      return L();
    },
    set multiSelectionKey(R) {
      L(R), y();
    },
    get zoomActivationKey() {
      return z();
    },
    set zoomActivationKey(R) {
      z(R), y();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(R) {
      I(R), y();
    },
    get nodesConnectable() {
      return N();
    },
    set nodesConnectable(R) {
      N(R), y();
    },
    get nodeDragThreshold() {
      return B();
    },
    set nodeDragThreshold(R) {
      B(R), y();
    },
    get elementsSelectable() {
      return M();
    },
    set elementsSelectable(R) {
      M(R), y();
    },
    get snapGrid() {
      return H();
    },
    set snapGrid(R) {
      H(R), y();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(R) {
      k(R), y();
    },
    get connectionRadius() {
      return P();
    },
    set connectionRadius(R) {
      P(R), y();
    },
    get connectionLineType() {
      return O();
    },
    set connectionLineType(R) {
      O(R), y();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(R) {
      A(R), y();
    },
    get connectionLineStyle() {
      return Y();
    },
    set connectionLineStyle(R) {
      Y(R), y();
    },
    get connectionLineContainerStyle() {
      return j();
    },
    set connectionLineContainerStyle(R) {
      j(R), y();
    },
    get onMoveStart() {
      return F();
    },
    set onMoveStart(R) {
      F(R), y();
    },
    get onMove() {
      return ae();
    },
    set onMove(R) {
      ae(R), y();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(R) {
      Q(R), y();
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
      return $e();
    },
    set nodeExtent(R) {
      $e(R), y();
    },
    get onlyRenderVisibleElements() {
      return _e();
    },
    set onlyRenderVisibleElements(R) {
      _e(R), y();
    },
    get panOnScrollMode() {
      return me();
    },
    set panOnScrollMode(R) {
      me(R), y();
    },
    get preventScrolling() {
      return de();
    },
    set preventScrolling(R) {
      de(R), y();
    },
    get zoomOnScroll() {
      return re();
    },
    set zoomOnScroll(R) {
      re(R), y();
    },
    get zoomOnDoubleClick() {
      return we();
    },
    set zoomOnDoubleClick(R) {
      we(R), y();
    },
    get zoomOnPinch() {
      return qe();
    },
    set zoomOnPinch(R) {
      qe(R), y();
    },
    get panOnScroll() {
      return We();
    },
    set panOnScroll(R) {
      We(R), y();
    },
    get panOnDrag() {
      return Ie();
    },
    set panOnDrag(R) {
      Ie(R), y();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(R) {
      ee(R), y();
    },
    get autoPanOnConnect() {
      return Fe();
    },
    set autoPanOnConnect(R) {
      Fe(R), y();
    },
    get autoPanOnNodeDrag() {
      return Re();
    },
    set autoPanOnNodeDrag(R) {
      Re(R), y();
    },
    get onerror() {
      return ce();
    },
    set onerror(R) {
      ce(R), y();
    },
    get ondelete() {
      return ue();
    },
    set ondelete(R) {
      ue(R), y();
    },
    get onedgecreate() {
      return Se();
    },
    set onedgecreate(R) {
      Se(R), y();
    },
    get attributionPosition() {
      return Ne();
    },
    set attributionPosition(R) {
      Ne(R), y();
    },
    get proOptions() {
      return Ge();
    },
    set proOptions(R) {
      Ge(R), y();
    },
    get defaultEdgeOptions() {
      return yt();
    },
    set defaultEdgeOptions(R) {
      yt(R), y();
    },
    get width() {
      return at();
    },
    set width(R) {
      at(R), y();
    },
    get height() {
      return te();
    },
    set height(R) {
      te(R), y();
    },
    get colorMode() {
      return Ve();
    },
    set colorMode(R) {
      Ve(R), y();
    },
    get onconnect() {
      return ye();
    },
    set onconnect(R) {
      ye(R), y();
    },
    get onconnectstart() {
      return Qt();
    },
    set onconnectstart(R) {
      Qt(R), y();
    },
    get onconnectend() {
      return Rt();
    },
    set onconnectend(R) {
      Rt(R), y();
    },
    get onbeforedelete() {
      return cn();
    },
    set onbeforedelete(R) {
      cn(R), y();
    },
    get oninit() {
      return Le();
    },
    set oninit(R) {
      Le(R), y();
    },
    get nodeOrigin() {
      return st();
    },
    set nodeOrigin(R) {
      st(R), y();
    },
    get paneClickDistance() {
      return xe();
    },
    set paneClickDistance(R) {
      xe(R), y();
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
      return In();
    },
    set class(R) {
      In(R), y();
    }
  });
  return i(), Pe;
}
se(
  vd,
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
function gd(e, t) {
  fe(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), a = w(t, "initialHeight", 12, void 0), i = w(t, "fitView", 12, void 0), s = w(t, "nodeOrigin", 12, void 0);
  const l = Uc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  Fr(fa, { getStore: () => l }), $s(() => {
    l.reset();
  }), Ze();
  var u = lt(), c = Ee(u);
  return Pt(c, t, "default", {}), V(e, u), ve({
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
se(
  gd,
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
var hm = /* @__PURE__ */ oe("<button><!></button>");
function xo(e, t) {
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
  Ze();
  var c = hm();
  let d;
  var f = X(c);
  return Pt(f, t, "default", { class: "button-svg" }), K(c), He(
    (v) => {
      d = xn(c, d, { type: "button", class: v, ...r }), ht(c, "--xy-controls-button-background-color-props", a()), ht(c, "--xy-controls-button-background-color-hover-props", i()), ht(c, "--xy-controls-button-color-props", s()), ht(c, "--xy-controls-button-color-hover-props", l()), ht(c, "--xy-controls-button-border-color-props", u());
    },
    [
      () => It([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    be
  ), Ue("click", c, function(v) {
    Be.call(this, t, v);
  }), V(e, c), ve({
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
se(
  xo,
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
var pm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function hd(e) {
  var t = pm();
  V(e, t);
}
se(hd, {}, [], [], !0);
var mm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function pd(e) {
  var t = mm();
  V(e, t);
}
se(pd, {}, [], [], !0);
var ym = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function md(e) {
  var t = ym();
  V(e, t);
}
se(md, {}, [], [], !0);
var wm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function yd(e) {
  var t = wm();
  V(e, t);
}
se(yd, {}, [], [], !0);
var bm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function wd(e) {
  var t = bm();
  V(e, t);
}
se(wd, {}, [], [], !0);
var xm = /* @__PURE__ */ oe("<!> <!>", 1), $m = /* @__PURE__ */ oe("<!> <!> <!> <!> <!> <!>", 1);
function bd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(O, "$nodesDraggable", n), a = () => ne(A, "$nodesConnectable", n), i = () => ne(Y, "$elementsSelectable", n), s = () => ne(H, "$viewport", n), l = () => ne(k, "$minZoom", n), u = () => ne(P, "$maxZoom", n), c = ie(), d = ie(), f = ie(), v = ie();
  let m = w(t, "position", 12, "bottom-left"), b = w(t, "showZoom", 12, !0), x = w(t, "showFitView", 12, !0), _ = w(t, "showLock", 12, !0), h = w(t, "buttonBgColor", 12, void 0), C = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), $ = w(t, "buttonColorHover", 12, void 0), S = w(t, "buttonBorderColor", 12, void 0), E = w(t, "ariaLabel", 12, void 0), T = w(t, "style", 12, void 0), L = w(t, "orientation", 12, "vertical"), z = w(t, "fitViewOptions", 12, void 0), I = w(t, "class", 12, "");
  const {
    zoomIn: N,
    zoomOut: B,
    fitView: M,
    viewport: H,
    minZoom: k,
    maxZoom: P,
    nodesDraggable: O,
    nodesConnectable: A,
    elementsSelectable: Y
  } = tt(), j = {
    bgColor: h(),
    bgColorHover: C(),
    color: p(),
    colorHover: $(),
    borderColor: S()
  }, F = () => {
    N();
  }, ae = () => {
    B();
  }, Q = () => {
    M(z());
  }, W = () => {
    G(c, !g(c)), O.set(g(c)), A.set(g(c)), Y.set(g(c));
  };
  pe(
    () => (o(), a(), i()),
    () => {
      G(c, o() || a() || i());
    }
  ), pe(() => (s(), l()), () => {
    G(d, s().zoom <= l());
  }), pe(() => (s(), u()), () => {
    G(f, s().zoom >= u());
  }), pe(() => J(L()), () => {
    G(v, L() === "horizontal" ? "horizontal" : "vertical");
  }), _t(), Ze();
  const le = /* @__PURE__ */ be(() => It([
    "svelte-flow__controls",
    g(v),
    I()
  ])), $e = /* @__PURE__ */ be(() => E() ?? "Svelte Flow controls");
  Go(e, {
    get class() {
      return g(le);
    },
    get position() {
      return m();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g($e);
    },
    get style() {
      return T();
    },
    children: (me, de) => {
      var re = $m(), we = Ee(re);
      Pt(we, t, "before", {});
      var qe = Z(we, 2);
      {
        var We = (Se) => {
          var Ne = xm(), Ge = Ee(Ne);
          xo(Ge, xt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            j,
            {
              $$events: { click: F },
              children: (at, te) => {
                hd(at);
              },
              $$slots: { default: !0 }
            }
          ));
          var yt = Z(Ge, 2);
          xo(yt, xt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            j,
            {
              $$events: { click: ae },
              children: (at, te) => {
                pd(at);
              },
              $$slots: { default: !0 }
            }
          )), V(Se, Ne);
        };
        Me(qe, (Se) => {
          b() && Se(We);
        });
      }
      var Ie = Z(qe, 2);
      {
        var ee = (Se) => {
          xo(Se, xt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            j,
            {
              $$events: { click: Q },
              children: (Ne, Ge) => {
                md(Ne);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Me(Ie, (Se) => {
          x() && Se(ee);
        });
      }
      var Fe = Z(Ie, 2);
      {
        var Re = (Se) => {
          xo(Se, xt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            j,
            {
              $$events: { click: W },
              children: (Ne, Ge) => {
                var yt = lt(), at = Ee(yt);
                {
                  var te = (ye) => {
                    wd(ye);
                  }, Ve = (ye) => {
                    yd(ye);
                  };
                  Me(at, (ye) => {
                    g(c) ? ye(te) : ye(Ve, !1);
                  });
                }
                V(Ne, yt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Me(Fe, (Se) => {
          _() && Se(Re);
        });
      }
      var ce = Z(Fe, 2);
      Pt(ce, t, "default", {});
      var ue = Z(ce, 2);
      Pt(ue, t, "after", {}), V(me, re);
    },
    $$slots: { default: !0 }
  });
  var _e = ve({
    get position() {
      return m();
    },
    set position(me) {
      m(me), y();
    },
    get showZoom() {
      return b();
    },
    set showZoom(me) {
      b(me), y();
    },
    get showFitView() {
      return x();
    },
    set showFitView(me) {
      x(me), y();
    },
    get showLock() {
      return _();
    },
    set showLock(me) {
      _(me), y();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(me) {
      h(me), y();
    },
    get buttonBgColorHover() {
      return C();
    },
    set buttonBgColorHover(me) {
      C(me), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(me) {
      p(me), y();
    },
    get buttonColorHover() {
      return $();
    },
    set buttonColorHover(me) {
      $(me), y();
    },
    get buttonBorderColor() {
      return S();
    },
    set buttonBorderColor(me) {
      S(me), y();
    },
    get ariaLabel() {
      return E();
    },
    set ariaLabel(me) {
      E(me), y();
    },
    get style() {
      return T();
    },
    set style(me) {
      T(me), y();
    },
    get orientation() {
      return L();
    },
    set orientation(me) {
      L(me), y();
    },
    get fitViewOptions() {
      return z();
    },
    set fitViewOptions(me) {
      z(me), y();
    },
    get class() {
      return I();
    },
    set class(me) {
      I(me), y();
    }
  });
  return r(), _e;
}
se(
  bd,
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
var cr;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(cr || (cr = {}));
var Cm = /* @__PURE__ */ ke("<circle></circle>");
function xd(e, t) {
  fe(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ze();
  var o = Cm();
  return He(
    (a) => {
      he(o, "cx", n()), he(o, "cy", n()), he(o, "r", n()), Vt(o, 0, Nn(a));
    },
    [
      () => It([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    be
  ), V(e, o), ve({
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
se(xd, { radius: {}, class: {} }, [], [], !0);
var _m = /* @__PURE__ */ ke("<path></path>");
function $d(e, t) {
  fe(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), a = w(t, "class", 12, "");
  Ze();
  var i = _m();
  return He(
    (s) => {
      he(i, "stroke-width", n()), he(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Vt(i, 0, Nn(s));
    },
    [
      () => It([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    be
  ), V(e, i), ve({
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
se(
  $d,
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
const km = {
  [cr.Dots]: 1,
  [cr.Lines]: 1,
  [cr.Cross]: 6
};
var Em = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Sm = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function Cd(e, t) {
  fe(t, !1), it(e, Sm);
  const [n, r] = ut(), o = () => ne($, "$flowId", n), a = () => ne(p, "$viewport", n), i = ie(), s = ie(), l = ie(), u = ie(), c = ie();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => cr.Dots), v = w(t, "gap", 12, 20), m = w(t, "size", 12, 1), b = w(t, "lineWidth", 12, 1), x = w(t, "bgColor", 12, void 0), _ = w(t, "patternColor", 12, void 0), h = w(t, "patternClass", 12, void 0), C = w(t, "class", 12, "");
  const { viewport: p, flowId: $ } = tt(), S = m() || km[f()], E = f() === cr.Dots, T = f() === cr.Cross, L = Array.isArray(v()) ? v() : [v(), v()];
  pe(
    () => (o(), J(d())),
    () => {
      G(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), pe(() => a(), () => {
    G(s, [
      L[0] * a().zoom || 1,
      L[1] * a().zoom || 1
    ]);
  }), pe(() => a(), () => {
    G(l, S * a().zoom);
  }), pe(() => (g(l), g(s)), () => {
    G(u, T ? [g(l), g(l)] : g(s));
  }), pe(
    () => (g(l), g(u)),
    () => {
      G(c, E ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), _t(), Ze();
  var z = Em(), I = X(z), N = X(I);
  {
    var B = (P) => {
      const O = /* @__PURE__ */ be(() => g(l) / 2);
      xd(P, {
        get radius() {
          return g(O);
        },
        get class() {
          return h();
        }
      });
    }, M = (P) => {
      $d(P, {
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
    Me(N, (P) => {
      E ? P(B) : P(M, !1);
    });
  }
  K(I);
  var H = Z(I);
  K(z), He(
    (P) => {
      Vt(z, 0, Nn(P), "svelte-1r7pe8d"), ht(z, "--xy-background-color-props", x()), ht(z, "--xy-background-pattern-color-props", _()), he(I, "id", g(i)), he(I, "x", a().x % g(s)[0]), he(I, "y", a().y % g(s)[1]), he(I, "width", g(s)[0]), he(I, "height", g(s)[1]), he(I, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), he(H, "fill", `url(#${g(i)})`);
    },
    [
      () => It(["svelte-flow__background", C()])
    ],
    be
  ), V(e, z);
  var k = ve({
    get id() {
      return d();
    },
    set id(P) {
      d(P), y();
    },
    get variant() {
      return f();
    },
    set variant(P) {
      f(P), y();
    },
    get gap() {
      return v();
    },
    set gap(P) {
      v(P), y();
    },
    get size() {
      return m();
    },
    set size(P) {
      m(P), y();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(P) {
      b(P), y();
    },
    get bgColor() {
      return x();
    },
    set bgColor(P) {
      x(P), y();
    },
    get patternColor() {
      return _();
    },
    set patternColor(P) {
      _(P), y();
    },
    get patternClass() {
      return h();
    },
    set patternClass(P) {
      h(P), y();
    },
    get class() {
      return C();
    },
    set class(P) {
      C(P), y();
    }
  });
  return r(), k;
}
se(
  Cd,
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
var Mm = /* @__PURE__ */ ke("<rect></rect>");
function _d(e, t) {
  fe(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), a = w(t, "height", 12, 0), i = w(t, "borderRadius", 12, 5), s = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  Ze();
  var v = Mm();
  let m;
  return He(
    (b) => {
      m = Vt(v, 0, Nn(b), null, m, { selected: d() }), he(v, "x", n()), he(v, "y", r()), he(v, "rx", i()), he(v, "ry", i()), he(v, "width", o()), he(v, "height", a()), he(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), he(v, "shape-rendering", l());
    },
    [
      () => It(["svelte-flow__minimap-node", f()])
    ],
    be
  ), V(e, v), ve({
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
se(
  _d,
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
function jl(e, t) {
  const n = f0({
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
var Pm = /* @__PURE__ */ ke("<title> </title>"), Tm = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function kd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(Ie, "$flowId", n), a = () => ne(we, "$viewport", n), i = () => ne(qe, "$containerWidth", n), s = () => ne(We, "$containerHeight", n), l = () => ne(re, "$nodeLookup", n), u = () => ne(de, "$nodes", n), c = () => ne(ee, "$panZoom", n), d = () => ne(Fe, "$translateExtent", n), f = ie(), v = ie(), m = ie(), b = ie(), x = ie(), _ = ie(), h = ie(), C = ie(), p = ie(), $ = ie(), S = ie(), E = ie(), T = ie();
  let L = w(t, "position", 12, "bottom-right"), z = w(t, "ariaLabel", 12, "Mini map"), I = w(t, "nodeStrokeColor", 12, "transparent"), N = w(t, "nodeColor", 12, void 0), B = w(t, "nodeClass", 12, ""), M = w(t, "nodeBorderRadius", 12, 5), H = w(t, "nodeStrokeWidth", 12, 2), k = w(t, "bgColor", 12, void 0), P = w(t, "maskColor", 12, void 0), O = w(t, "maskStrokeColor", 12, void 0), A = w(t, "maskStrokeWidth", 12, void 0), Y = w(t, "width", 12, void 0), j = w(t, "height", 12, void 0), F = w(t, "pannable", 12, !0), ae = w(t, "zoomable", 12, !0), Q = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), le = w(t, "style", 12, ""), $e = w(t, "class", 12, "");
  const _e = 200, me = 150, {
    nodes: de,
    nodeLookup: re,
    viewport: we,
    width: qe,
    height: We,
    flowId: Ie,
    panZoom: ee,
    translateExtent: Fe
  } = tt(), Re = N() === void 0 ? void 0 : La(N()), ce = La(I()), ue = La(B()), Se = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Ne = `svelte-flow__minimap-desc-${o()}`;
  let Ge = ie(g(f));
  const yt = () => g(_);
  pe(
    () => (a(), i(), s()),
    () => {
      G(f, {
        x: -a().x / a().zoom,
        y: -a().y / a().zoom,
        width: i() / a().zoom,
        height: s() / a().zoom
      });
    }
  ), pe(
    () => (l(), g(f), u()),
    () => {
      G(Ge, l().size > 0 ? _c(jo(l()), g(f)) : g(f)), u();
    }
  ), pe(() => J(Y()), () => {
    G(v, Y() ?? _e);
  }), pe(() => J(j()), () => {
    G(m, j() ?? me);
  }), pe(
    () => (g(Ge), g(v)),
    () => {
      G(b, g(Ge).width / g(v));
    }
  ), pe(
    () => (g(Ge), g(m)),
    () => {
      G(x, g(Ge).height / g(m));
    }
  ), pe(
    () => (g(b), g(x)),
    () => {
      G(_, Math.max(g(b), g(x)));
    }
  ), pe(() => (g(_), g(v)), () => {
    G(h, g(_) * g(v));
  }), pe(
    () => (g(_), g(m)),
    () => {
      G(C, g(_) * g(m));
    }
  ), pe(() => g(_), () => {
    G(p, 5 * g(_));
  }), pe(
    () => (g(Ge), g(h), g(p)),
    () => {
      G($, g(Ge).x - (g(h) - g(Ge).width) / 2 - g(p));
    }
  ), pe(
    () => (g(Ge), g(C), g(p)),
    () => {
      G(S, g(Ge).y - (g(C) - g(Ge).height) / 2 - g(p));
    }
  ), pe(() => (g(h), g(p)), () => {
    G(E, g(h) + g(p) * 2);
  }), pe(() => (g(C), g(p)), () => {
    G(T, g(C) + g(p) * 2);
  }), _t(), Ze();
  const at = /* @__PURE__ */ be(() => le() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), te = /* @__PURE__ */ be(() => It(["svelte-flow__minimap", $e()]));
  Go(e, {
    get position() {
      return L();
    },
    get style() {
      return g(at);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ye, Qt) => {
      var Rt = lt(), cn = Ee(Rt);
      {
        var Le = (st) => {
          var xe = Tm();
          he(xe, "aria-labelledby", Ne);
          var ct = X(xe);
          {
            var vt = (Et) => {
              var pt = Pm();
              he(pt, "id", Ne);
              var Bt = X(pt, !0);
              K(pt), He(() => sn(Bt, z())), V(Et, pt);
            };
            Me(ct, (Et) => {
              z() && Et(vt);
            });
          }
          var Zt = Z(ct);
          Gt(Zt, 1, u, (Et) => Et.id, (Et, pt) => {
            var Bt = lt();
            const Lt = /* @__PURE__ */ be(() => l().get(g(pt).id));
            var wt = Ee(Bt);
            {
              var co = (En) => {
                const en = /* @__PURE__ */ be(() => pr(g(Lt))), mr = /* @__PURE__ */ be(() => Re == null ? void 0 : Re(g(Lt))), yr = /* @__PURE__ */ be(() => ce(g(Lt))), Dr = /* @__PURE__ */ be(() => ue(g(Lt)));
                _d(En, xt(
                  {
                    get x() {
                      return g(Lt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(Lt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(en),
                  {
                    get selected() {
                      return g(Lt).selected;
                    },
                    get color() {
                      return g(mr);
                    },
                    get borderRadius() {
                      return M();
                    },
                    get strokeColor() {
                      return g(yr);
                    },
                    get strokeWidth() {
                      return H();
                    },
                    shapeRendering: Se,
                    get class() {
                      return g(Dr);
                    }
                  }
                ));
              };
              Me(wt, (En) => {
                g(Lt) && Ec(g(Lt)) && En(co);
              });
            }
            V(Et, Bt);
          });
          var In = Z(Zt);
          K(xe), Mt(xe, (Et, pt) => jl == null ? void 0 : jl(Et, pt), () => ({
            panZoom: c(),
            viewport: we,
            getViewScale: yt,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: Q(),
            zoomStep: W(),
            pannable: F(),
            zoomable: ae()
          })), He(() => {
            he(xe, "width", g(v)), he(xe, "height", g(m)), he(xe, "viewBox", `${g($) ?? ""} ${g(S) ?? ""} ${g(E) ?? ""} ${g(T) ?? ""}`), ht(xe, "--xy-minimap-mask-background-color-props", P()), ht(xe, "--xy-minimap-mask-stroke-color-props", O()), ht(xe, "--xy-minimap-mask-stroke-width-props", A() ? A() * g(_) : void 0), he(In, "d", `M${g($) - g(p)},${g(S) - g(p)}h${g(E) + g(p) * 2}v${g(T) + g(p) * 2}h${-g(E) - g(p) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), V(st, xe);
        };
        Me(cn, (st) => {
          c() && st(Le);
        });
      }
      V(ye, Rt);
    },
    $$slots: { default: !0 }
  });
  var Ve = ve({
    get position() {
      return L();
    },
    set position(ye) {
      L(ye), y();
    },
    get ariaLabel() {
      return z();
    },
    set ariaLabel(ye) {
      z(ye), y();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(ye) {
      I(ye), y();
    },
    get nodeColor() {
      return N();
    },
    set nodeColor(ye) {
      N(ye), y();
    },
    get nodeClass() {
      return B();
    },
    set nodeClass(ye) {
      B(ye), y();
    },
    get nodeBorderRadius() {
      return M();
    },
    set nodeBorderRadius(ye) {
      M(ye), y();
    },
    get nodeStrokeWidth() {
      return H();
    },
    set nodeStrokeWidth(ye) {
      H(ye), y();
    },
    get bgColor() {
      return k();
    },
    set bgColor(ye) {
      k(ye), y();
    },
    get maskColor() {
      return P();
    },
    set maskColor(ye) {
      P(ye), y();
    },
    get maskStrokeColor() {
      return O();
    },
    set maskStrokeColor(ye) {
      O(ye), y();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(ye) {
      A(ye), y();
    },
    get width() {
      return Y();
    },
    set width(ye) {
      Y(ye), y();
    },
    get height() {
      return j();
    },
    set height(ye) {
      j(ye), y();
    },
    get pannable() {
      return F();
    },
    set pannable(ye) {
      F(ye), y();
    },
    get zoomable() {
      return ae();
    },
    set zoomable(ye) {
      ae(ye), y();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(ye) {
      Q(ye), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ye) {
      W(ye), y();
    },
    get style() {
      return le();
    },
    set style(ye) {
      le(ye), y();
    },
    get class() {
      return $e();
    },
    set class(ye) {
      $e(ye), y();
    }
  });
  return r(), Ve;
}
se(
  kd,
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
const Fl = (e) => Tp(e);
function Jt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: m, nodeOrigin: b, edgeLookup: x, connectionLookup: _ } = tt(), h = ($) => {
    var S, E;
    const T = q(m), L = Fl($) ? $ : T.get($.id), z = L.parentId ? Dp(L.position, L.measured, L.parentId, T, q(b)) : L.position, I = {
      ...L,
      position: z,
      width: ((S = L.measured) == null ? void 0 : S.width) ?? L.width,
      height: ((E = L.measured) == null ? void 0 : E.height) ?? L.height
    };
    return Qr(I);
  }, C = ($, S, E = { replace: !1 }) => {
    var T;
    const L = (T = q(m).get($)) == null ? void 0 : T.internals.userNode;
    if (!L)
      return;
    const z = typeof S == "function" ? S(L) : S;
    E.replace ? d.update((I) => I.map((N) => N.id === $ ? Fl(z) ? z : { ...N, ...z } : N)) : (Object.assign(L, z), d.update((I) => I));
  }, p = ($) => q(m).get($);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: ($) => {
      var S;
      return (S = p($)) == null ? void 0 : S.internals.userNode;
    },
    getNodes: ($) => $ === void 0 ? q(d) : ql(q(m), $),
    getEdge: ($) => q(x).get($),
    getEdges: ($) => $ === void 0 ? q(f) : ql(q(x), $),
    setZoom: ($, S) => {
      const E = q(c);
      return E ? E.scaleTo($, { duration: S == null ? void 0 : S.duration }) : Promise.resolve(!1);
    },
    getZoom: () => q(a).zoom,
    setViewport: async ($, S) => {
      const E = q(a), T = q(c);
      return T ? (await T.setViewport({
        x: $.x ?? E.x,
        y: $.y ?? E.y,
        zoom: $.zoom ?? E.zoom
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => q(a),
    setCenter: async ($, S, E) => {
      const T = typeof (E == null ? void 0 : E.zoom) < "u" ? E.zoom : q(u), L = q(c);
      return L ? (await L.setViewport({
        x: q(i) / 2 - $ * T,
        y: q(s) / 2 - S * T,
        zoom: T
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async ($, S) => {
      const E = q(c);
      if (!E)
        return Promise.resolve(!1);
      const T = Ls($, q(i), q(s), q(l), q(u), (S == null ? void 0 : S.padding) ?? 0.1);
      return await E.setViewport(T, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: ($, S = !0, E) => {
      const T = Tl($), L = T ? $ : h($);
      return L ? (E || q(d)).filter((z) => {
        const I = q(m).get(z.id);
        if (!I || !T && z.id === $.id)
          return !1;
        const N = Qr(I), B = Vo(N, L);
        return S && B > 0 || B >= L.width * L.height;
      }) : [];
    },
    isNodeIntersecting: ($, S, E = !0) => {
      const T = Tl($) ? $ : h($);
      if (!T)
        return !1;
      const L = Vo(T, S);
      return E && L > 0 || L >= T.width * T.height;
    },
    deleteElements: async ({ nodes: $ = [], edges: S = [] }) => {
      const { nodes: E, edges: T } = await xc({
        nodesToRemove: $,
        edgesToRemove: S,
        nodes: q(d),
        edges: q(f),
        onBeforeDelete: q(r)
      });
      return E && d.update((L) => L.filter((z) => !E.some(({ id: I }) => I === z.id))), T && f.update((L) => L.filter((z) => !T.some(({ id: I }) => I === z.id))), {
        deletedNodes: E,
        deletedEdges: T
      };
    },
    screenToFlowPosition: ($, S = { snapToGrid: !0 }) => {
      const E = q(v);
      if (!E)
        return $;
      const T = S.snapToGrid ? q(o) : !1, { x: L, y: z, zoom: I } = q(a), { x: N, y: B } = E.getBoundingClientRect(), M = {
        x: $.x - N,
        y: $.y - B
      };
      return Fo(M, [L, z, I], T !== null, T || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: ($) => {
      const S = q(v);
      if (!S)
        return $;
      const { x: E, y: T, zoom: L } = q(a), { x: z, y: I } = S.getBoundingClientRect(), N = kc($, [E, T, L]);
      return {
        x: N.x + z,
        y: N.y + I
      };
    },
    toObject: () => ({
      nodes: q(d).map(($) => ({
        ...$,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...$.position },
        data: { ...$.data }
      })),
      edges: q(f).map(($) => ({ ...$ })),
      viewport: { ...q(a) }
    }),
    updateNode: C,
    updateNodeData: ($, S, E) => {
      var T;
      const L = (T = q(m).get($)) == null ? void 0 : T.internals.userNode;
      if (!L)
        return;
      const z = typeof S == "function" ? S(L) : S;
      L.data = E != null && E.replace ? z : { ...L.data, ...z }, d.update((I) => I);
    },
    getNodesBounds: ($) => {
      const S = q(m), E = q(b);
      return Hp($, { nodeLookup: S, nodeOrigin: E });
    },
    getHandleConnections: ({ type: $, id: S, nodeId: E }) => {
      var T;
      return Array.from(((T = q(_).get(`${E}-${$}-${S ?? null}`)) == null ? void 0 : T.values()) ?? []);
    },
    viewport: a
  };
}
function ql(e, t) {
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
var Hm = /* @__PURE__ */ oe('<div class="svelte-flow__node-toolbar"><!></div>');
function Ed(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(C, "$nodes", n), a = () => ne(h, "$nodeLookup", n), i = () => ne(_, "$viewport", n), s = () => ne(x, "$domNode", n), l = ie(), u = ie(), c = ie();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), v = w(t, "align", 12, void 0), m = w(t, "offset", 12, void 0), b = w(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: _, nodeLookup: h, nodes: C } = tt(), { getNodesBounds: p } = Jt(), $ = _r("svelteflow__node_id");
  let S = ie(), E = ie([]), T = m() !== void 0 ? m() : 10, L = f() !== void 0 ? f() : Te.Top, z = v() !== void 0 ? v() : "center";
  pe(
    () => (o(), J(d()), a()),
    () => {
      o();
      const H = Array.isArray(d()) ? d() : [d() || $];
      G(E, H.reduce(
        (k, P) => {
          const O = a().get(P);
          return O && k.push(O), k;
        },
        []
      ));
    }
  ), pe(
    () => (g(E), i()),
    () => {
      const H = p(g(E));
      H && G(S, qp(H, i(), L, T, z));
    }
  ), pe(() => g(E), () => {
    G(l, g(E).length === 0 ? 1 : Math.max(...g(E).map((H) => (H.internals.z || 5) + 1)));
  }), pe(() => o(), () => {
    G(u, o().filter((H) => H.selected).length);
  }), pe(
    () => (J(b()), g(E), g(u)),
    () => {
      G(c, typeof b() == "boolean" ? b() : g(E).length === 1 && g(E)[0].selected && g(u) === 1);
    }
  ), _t(), Ze();
  var I = lt(), N = Ee(I);
  {
    var B = (H) => {
      var k = Hm(), P = X(k);
      Pt(P, t, "default", {}), K(k), Mt(k, (O, A) => Bi == null ? void 0 : Bi(O, A), () => ({ domNode: s() })), He(
        (O) => {
          he(k, "data-id", O), ht(k, "position", "absolute"), ht(k, "transform", g(S)), ht(k, "z-index", g(l));
        },
        [
          () => g(E).reduce((O, A) => `${O}${A.id} `, "").trim()
        ],
        be
      ), V(H, k);
    };
    Me(N, (H) => {
      s() && g(c) && g(E) && H(B);
    });
  }
  V(e, I);
  var M = ve({
    get nodeId() {
      return d();
    },
    set nodeId(H) {
      d(H), y();
    },
    get position() {
      return f();
    },
    set position(H) {
      f(H), y();
    },
    get align() {
      return v();
    },
    set align(H) {
      v(H), y();
    },
    get offset() {
      return m();
    },
    set offset(H) {
      m(H), y();
    },
    get isVisible() {
      return b();
    },
    set isVisible(H) {
      b(H), y();
    }
  });
  return r(), M;
}
se(
  Ed,
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
function zr(e) {
  const { nodes: t, nodeLookup: n } = tt();
  let r = [], o = !0;
  return lr([t, n], ([, a], i) => {
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
    (!r0(l, r) || o) && (r = l, i(u ? l : l[0] ?? null), o = !1);
  });
}
const Gl = "tinyflow-component";
class Lm {
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
    const t = document.createElement(Gl);
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
    const n = document.createElement(Gl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const zm = () => {
  const e = Ce([]), t = Ce([]), n = Ce({ x: 250, y: 100, zoom: 1 });
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
}, bi = zm();
var Dm = /* @__PURE__ */ oe("<button><!></button>");
function et(e, t) {
  fe(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = Dm();
  let a;
  var i = X(o);
  return kr(i, () => n() ?? $t), K(o), He(() => a = xn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), V(e, o), ve({
    get children() {
      return n();
    },
    set children(s) {
      n(s), y();
    }
  });
}
se(et, { children: {} }, [], [], !0);
var Om = /* @__PURE__ */ oe("<input>");
function Sd(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Om();
  Co(r);
  let o;
  He(() => o = xn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), V(e, r), ve();
}
se(Sd, {}, [], [], !0);
var Nm = /* @__PURE__ */ oe("<input>");
function Dt(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Nm();
  Co(r);
  let o;
  He(() => o = xn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), V(e, r), ve();
}
se(Dt, {}, [], [], !0);
var Vm = /* @__PURE__ */ oe("<textarea></textarea>");
function At(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Vm();
  kv(r);
  let o;
  He(() => o = xn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), V(e, r), ve();
}
se(At, {}, [], [], !0);
var Am = /* @__PURE__ */ oe('<div role="button"><!></div>'), Im = /* @__PURE__ */ oe("<div></div>");
function Md(e, t) {
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
  Ze();
  var l = Im();
  let u;
  return Gt(l, 5, o, To, (c, d, f) => {
    var v = Am();
    he(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = (_) => {
      (_.key === "Enter" || _.key === " ") && (_.preventDefault(), s(g(d), f));
    };
    var m = X(v);
    {
      var b = (_) => {
        var h = je();
        He(() => sn(h, g(d).label)), V(_, h);
      }, x = (_) => {
        var h = lt(), C = Ee(h);
        kr(C, () => g(d).label ?? $t), V(_, h);
      };
      Me(m, (_) => {
        typeof g(d).label == "string" ? _(b) : _(x, !1);
      });
    }
    K(v), He(() => Vt(v, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), V(c, v);
  }), K(l), He(() => u = xn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), V(e, l), ve({
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
na(["click", "keydown"]);
se(Md, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Rm = (e, t, n) => t(g(n)), Zm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Bm = /* @__PURE__ */ oe('<span class="tf-collapse-item-title-icon"><!></span>'), Ym = /* @__PURE__ */ oe('<div class="tf-collapse-item-description"><!></div>'), Km = /* @__PURE__ */ oe('<div class="tf-collapse-item-content"><!></div>'), Wm = /* @__PURE__ */ oe('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Xm = /* @__PURE__ */ oe("<div></div>");
const jm = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Pd(e, t) {
  fe(t, !0), it(e, jm);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => nn([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = Xm();
  return Gt(i, 21, n, To, (s, l, u) => {
    var c = Wm(), d = X(c);
    he(d, "tabindex", u), d.__click = [Rm, a, l], d.__keydown = [Zm, a, l];
    var f = X(d);
    {
      var v = (p) => {
        var $ = Bm(), S = X($);
        ar(S, {
          get target() {
            return g(l).icon;
          }
        }), K($), V(p, $);
      };
      Me(f, (p) => {
        g(l).icon && p(v);
      });
    }
    var m = Z(f, 2);
    ar(m, {
      get target() {
        return g(l).title;
      }
    });
    var b = Z(m, 2);
    K(d);
    var x = Z(d, 2);
    {
      var _ = (p) => {
        var $ = Ym(), S = X($);
        ar(S, {
          get target() {
            return g(l).description;
          }
        }), K($), V(p, $);
      };
      Me(x, (p) => {
        g(l).description && p(_);
      });
    }
    var h = Z(x, 2);
    {
      var C = (p) => {
        var $ = Km(), S = X($);
        ar(S, {
          get target() {
            return g(l).content;
          }
        }), K($), V(p, $);
      };
      Me(h, (p) => {
        o().includes(g(l).key) && p(C);
      });
    }
    K(c), He((p) => Vt(b, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), V(s, c);
  }), K(i), He(() => {
    he(i, "style", t.style), Vt(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), V(e, i), ve({
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
na(["click", "keydown"]);
se(Pd, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function ar(e, t) {
  fe(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = lt(), o = Ee(r);
  {
    var a = (s) => {
      var l = lt(), u = Ee(l);
      kr(u, () => n() ?? $t), V(s, l);
    }, i = (s) => {
      var l = lt(), u = Ee(l);
      Au(u, n), V(s, l);
    };
    Me(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return V(e, r), ve({
    get target() {
      return n();
    },
    set target(s) {
      n(s), y();
    }
  });
}
se(ar, { target: {} }, [], [], !0);
var Fm = (e, t, n) => t(g(n)), qm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Gm = /* @__PURE__ */ oe('<div class="tf-select-content-children"><!></div>'), Um = /* @__PURE__ */ oe('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Jm = /* @__PURE__ */ oe('<div class="tf-select-content nopan nodrag"><!></div>'), Qm = /* @__PURE__ */ oe("<!> <!>", 1), e2 = /* @__PURE__ */ oe('<div class="tf-select-input-placeholder"> </div>'), t2 = /* @__PURE__ */ oe('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), n2 = /* @__PURE__ */ oe("<div><!></div>");
function zn(e, t) {
  fe(t, !0);
  const n = (C, p = $t) => {
    var $ = lt(), S = Ee($);
    Gt(S, 19, p, (E, T) => `${T}_${E.value}`, (E, T) => {
      var L = Um(), z = Ee(L);
      z.__click = [Fm, b, T];
      var I = X(z), N = X(I);
      {
        var B = (P) => {
          var O = qm();
          V(P, O);
        };
        Me(N, (P) => {
          g(T).children && g(T).children.length > 0 && P(B);
        });
      }
      K(I);
      var M = Z(I, 2);
      ar(M, {
        get target() {
          return g(T).label;
        }
      }), K(z);
      var H = Z(z, 2);
      {
        var k = (P) => {
          var O = Gm(), A = X(O);
          n(A, () => g(T).children), K(O), V(P, O);
        };
        Me(H, (P) => {
          g(T).children && g(T).children.length > 0 && (l() || c().includes(g(T).value)) && P(k);
        });
      }
      V(E, L);
    }), V(C, $);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), a = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), f = /* @__PURE__ */ Ht(t, [
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
  ]), v = /* @__PURE__ */ Oe(() => {
    const C = [], p = ($) => {
      for (let S of $)
        i().length > 0 ? i().includes(S.value) && C.push(S) : s().includes(S.value) && C.push(S), S.children && S.children.length > 0 && p(S.children);
    };
    return p(r()), C;
  }), m;
  function b(C) {
    var p, $;
    if (C.children && C.children.length > 0) {
      (p = o()) == null || p(C);
      return;
    } else
      m == null || m.hide(), ($ = a()) == null || $(C);
  }
  var x = n2();
  let _;
  var h = X(x);
  return Ln(
    ei(h, {
      floating: (C) => {
        var p = Jm(), $ = X(p);
        n($, r), K(p), V(C, p);
      },
      children: (C, p) => {
        var $ = t2();
        let S;
        var E = X($);
        Gt(
          E,
          23,
          () => g(v),
          (T, L) => `${L}_${T.value}`,
          (T, L, z) => {
            var I = lt(), N = Ee(I);
            {
              var B = (H) => {
                var k = lt(), P = Ee(k);
                {
                  var O = (A) => {
                    ar(A, {
                      get target() {
                        return g(L).label;
                      }
                    });
                  };
                  Me(P, (A) => {
                    g(z) === 0 && A(O);
                  });
                }
                V(H, k);
              }, M = (H) => {
                var k = Qm(), P = Ee(k);
                ar(P, {
                  get target() {
                    return g(L).label;
                  }
                });
                var O = Z(P, 2);
                {
                  var A = (Y) => {
                    var j = je(",");
                    V(Y, j);
                  };
                  Me(O, (Y) => {
                    g(z) < g(v).length - 1 && Y(A);
                  });
                }
                V(H, k);
              };
              Me(N, (H) => {
                u() ? H(M, !1) : H(B);
              });
            }
            V(T, I);
          },
          (T) => {
            var L = e2(), z = X(L, !0);
            K(L), He(() => sn(z, d())), V(T, L);
          }
        ), K(E), De(2), K($), He(() => S = xn($, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), V(C, $);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => m = C,
    () => m
  ), K(x), He(() => _ = xn(x, _, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), V(e, x), ve({
    get items() {
      return r();
    },
    set items(C) {
      r(C), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(C) {
      o(C), y();
    },
    get onSelect() {
      return a();
    },
    set onSelect(C) {
      a(C), y();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), y();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(C = !0) {
      l(C), y();
    },
    get multiple() {
      return u();
    },
    set multiple(C = !1) {
      u(C), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(C = []) {
      c(C), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), y();
    }
  });
}
na(["click"]);
se(
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
const Io = Math.min, Kr = Math.max, Wi = Math.round, Pn = (e) => ({
  x: e,
  y: e
}), r2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, o2 = {
  start: "end",
  end: "start"
};
function ts(e, t, n) {
  return Kr(e, Io(t, n));
}
function Uo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pr(e) {
  return e.split("-")[0];
}
function Jo(e) {
  return e.split("-")[1];
}
function Td(e) {
  return e === "x" ? "y" : "x";
}
function As(e) {
  return e === "y" ? "height" : "width";
}
function to(e) {
  return ["top", "bottom"].includes(Pr(e)) ? "y" : "x";
}
function Is(e) {
  return Td(to(e));
}
function i2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jo(e), o = Is(e), a = As(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Xi(i)), [i, Xi(i)];
}
function a2(e) {
  const t = Xi(e);
  return [ns(e), t, ns(t)];
}
function ns(e) {
  return e.replace(/start|end/g, (t) => o2[t]);
}
function s2(e, t, n) {
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
function l2(e, t, n, r) {
  const o = Jo(e);
  let a = s2(Pr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(ns)))), a;
}
function Xi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => r2[t]);
}
function u2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hd(e) {
  return typeof e != "number" ? u2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ji(e) {
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
function Ul(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = to(t), i = Is(t), s = As(i), l = Pr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  switch (Jo(t)) {
    case "start":
      v[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      v[i] += f * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const c2 = async (e, t, n) => {
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
  } = Ul(u, r, l), f = r, v = {}, m = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: _
    } = s[b], {
      x: h,
      y: C,
      data: p,
      reset: $
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
    c = h ?? c, d = C ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...p
      }
    }, $ && m <= 50 && (m++, typeof $ == "object" && ($.placement && (f = $.placement), $.rects && (u = $.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: c,
      y: d
    } = Ul(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Ld(e, t) {
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
  } = Uo(t, e), m = Hd(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = ji(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, p = ji(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: h,
    strategy: l
  }) : _);
  return {
    top: (x.top - p.top + m.top) / C.y,
    bottom: (p.bottom - x.bottom + m.bottom) / C.y,
    left: (x.left - p.left + m.left) / C.x,
    right: (p.right - x.right + m.right) / C.x
  };
}
const d2 = (e) => ({
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
    } = Uo(e, t) || {};
    if (u == null)
      return {};
    const d = Hd(c), f = {
      x: n,
      y: r
    }, v = Is(o), m = As(v), b = await i.getDimensions(u), x = v === "y", _ = x ? "top" : "left", h = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", p = a.reference[m] + a.reference[v] - f[v] - a.floating[m], $ = f[v] - a.reference[v], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = S ? S[C] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = s.floating[C] || a.floating[m]);
    const T = p / 2 - $ / 2, L = E / 2 - b[m] / 2 - 1, z = Io(d[_], L), I = Io(d[h], L), N = z, B = E - b[m] - I, M = E / 2 - b[m] / 2 + T, H = ts(N, M, B), k = !l.arrow && Jo(o) != null && M !== H && a.reference[m] / 2 - (M < N ? z : I) - b[m] / 2 < 0, P = k ? M < N ? M - N : M - B : 0;
    return {
      [v]: f[v] + P,
      data: {
        [v]: H,
        centerOffset: M - H - P,
        ...k && {
          alignmentOffset: P
        }
      },
      reset: k
    };
  }
}), f2 = function(e) {
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
        ...x
      } = Uo(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Pr(o), h = to(s), C = Pr(s) === s, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), $ = f || (C || !b ? [Xi(s)] : a2(s)), S = m !== "none";
      !f && S && $.push(...l2(s, b, m, p));
      const E = [s, ...$], T = await Ld(t, x), L = [];
      let z = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && L.push(T[_]), d) {
        const M = i2(o, i, p);
        L.push(T[M[0]], T[M[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: L
      }], !L.every((M) => M <= 0)) {
        var I, N;
        const M = (((I = a.flip) == null ? void 0 : I.index) || 0) + 1, H = E[M];
        if (H)
          return {
            data: {
              index: M,
              overflows: z
            },
            reset: {
              placement: H
            }
          };
        let k = (N = z.filter((P) => P.overflows[0] <= 0).sort((P, O) => P.overflows[1] - O.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!k)
          switch (v) {
            case "bestFit": {
              var B;
              const P = (B = z.filter((O) => {
                if (S) {
                  const A = to(O.placement);
                  return A === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((A) => A > 0).reduce((A, Y) => A + Y, 0)]).sort((O, A) => O[1] - A[1])[0]) == null ? void 0 : B[0];
              P && (k = P);
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
async function v2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Pr(n), s = Jo(n), l = to(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = Uo(t, e);
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
const g2 = function(e) {
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
      } = t, l = await v2(t, e);
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
}, h2 = function(e) {
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
          fn: (x) => {
            let {
              x: _,
              y: h
            } = x;
            return {
              x: _,
              y: h
            };
          }
        },
        ...l
      } = Uo(e, t), u = {
        x: n,
        y: r
      }, c = await Ld(t, l), d = to(Pr(o)), f = Td(d);
      let v = u[f], m = u[d];
      if (a) {
        const x = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", h = v + c[x], C = v - c[_];
        v = ts(h, v, C);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", h = m + c[x], C = m - c[_];
        m = ts(h, m, C);
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
function va() {
  return typeof window < "u";
}
function uo(e) {
  return zd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ln(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Jn(e) {
  var t;
  return (t = (zd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zd(e) {
  return va() ? e instanceof Node || e instanceof ln(e).Node : !1;
}
function $n(e) {
  return va() ? e instanceof Element || e instanceof ln(e).Element : !1;
}
function Dn(e) {
  return va() ? e instanceof HTMLElement || e instanceof ln(e).HTMLElement : !1;
}
function Jl(e) {
  return !va() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ln(e).ShadowRoot;
}
function Qo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function p2(e) {
  return ["table", "td", "th"].includes(uo(e));
}
function ga(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Rs(e) {
  const t = Zs(), n = $n(e) ? Cn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function m2(e) {
  let t = gr(e);
  for (; Dn(t) && !no(t); ) {
    if (Rs(t))
      return t;
    if (ga(t))
      return null;
    t = gr(t);
  }
  return null;
}
function Zs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function no(e) {
  return ["html", "body", "#document"].includes(uo(e));
}
function Cn(e) {
  return ln(e).getComputedStyle(e);
}
function ha(e) {
  return $n(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gr(e) {
  if (uo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jl(e) && e.host || // Fallback.
    Jn(e)
  );
  return Jl(t) ? t.host : t;
}
function Dd(e) {
  const t = gr(e);
  return no(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dn(t) && Qo(t) ? t : Dd(t);
}
function Od(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Dd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ln(o);
  return a ? (rs(i), t.concat(i, i.visualViewport || [], Qo(o) ? o : [], [])) : t.concat(o, Od(o, []));
}
function rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Nd(e) {
  const t = Cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Dn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Wi(n) !== a || Wi(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Vd(e) {
  return $n(e) ? e : e.contextElement;
}
function Wr(e) {
  const t = Vd(e);
  if (!Dn(t))
    return Pn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Nd(t);
  let i = (a ? Wi(n.width) : n.width) / r, s = (a ? Wi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const y2 = /* @__PURE__ */ Pn(0);
function Ad(e) {
  const t = ln(e);
  return !Zs() || !t.visualViewport ? y2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function w2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ln(e) ? !1 : t;
}
function Ro(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Vd(e);
  let i = Pn(1);
  t && (r ? $n(r) && (i = Wr(r)) : i = Wr(e));
  const s = w2(a, n, r) ? Ad(a) : Pn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = ln(a), v = r && $n(r) ? ln(r) : r;
    let m = f, b = rs(m);
    for (; b && r && v !== m; ) {
      const x = Wr(b), _ = b.getBoundingClientRect(), h = Cn(b), C = _.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, p = _.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += C, u += p, m = ln(b), b = rs(m);
    }
  }
  return ji({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Bs(e, t) {
  const n = ha(e).scrollLeft;
  return t ? t.left + n : Ro(Jn(e)).left + n;
}
function Id(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Bs(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function b2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Jn(r), s = t ? ga(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Pn(1);
  const c = Pn(0), d = Dn(r);
  if ((d || !d && !a) && ((uo(r) !== "body" || Qo(i)) && (l = ha(r)), Dn(r))) {
    const v = Ro(r);
    u = Wr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? Id(i, l, !0) : Pn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function x2(e) {
  return Array.from(e.getClientRects());
}
function $2(e) {
  const t = Jn(e), n = ha(e), r = e.ownerDocument.body, o = Kr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Kr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Bs(e);
  const s = -n.scrollTop;
  return Cn(r).direction === "rtl" && (i += Kr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function C2(e, t) {
  const n = ln(e), r = Jn(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Zs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function _2(e, t) {
  const n = Ro(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Dn(e) ? Wr(e) : Pn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function Ql(e, t, n) {
  let r;
  if (t === "viewport")
    r = C2(e, n);
  else if (t === "document")
    r = $2(Jn(e));
  else if ($n(t))
    r = _2(t, n);
  else {
    const o = Ad(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ji(r);
}
function Rd(e, t) {
  const n = gr(e);
  return n === t || !$n(n) || no(n) ? !1 : Cn(n).position === "fixed" || Rd(n, t);
}
function k2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Od(e, []).filter((s) => $n(s) && uo(s) !== "body"), o = null;
  const a = Cn(e).position === "fixed";
  let i = a ? gr(e) : e;
  for (; $n(i) && !no(i); ) {
    const s = Cn(i), l = Rs(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Qo(i) && !l && Rd(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = gr(i);
  }
  return t.set(e, r), r;
}
function E2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? ga(t) ? [] : k2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = Ql(t, u, o);
    return l.top = Kr(c.top, l.top), l.right = Io(c.right, l.right), l.bottom = Io(c.bottom, l.bottom), l.left = Kr(c.left, l.left), l;
  }, Ql(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function S2(e) {
  const {
    width: t,
    height: n
  } = Nd(e);
  return {
    width: t,
    height: n
  };
}
function M2(e, t, n) {
  const r = Dn(t), o = Jn(t), a = n === "fixed", i = Ro(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Pn(0);
  if (r || !r && !a)
    if ((uo(t) !== "body" || Qo(o)) && (s = ha(t)), r) {
      const f = Ro(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Bs(o));
  const u = o && !r && !a ? Id(o, s) : Pn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function za(e) {
  return Cn(e).position === "static";
}
function eu(e, t) {
  if (!Dn(e) || Cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Jn(e) === n && (n = n.ownerDocument.body), n;
}
function Zd(e, t) {
  const n = ln(e);
  if (ga(e))
    return n;
  if (!Dn(e)) {
    let o = gr(e);
    for (; o && !no(o); ) {
      if ($n(o) && !za(o))
        return o;
      o = gr(o);
    }
    return n;
  }
  let r = eu(e, t);
  for (; r && p2(r) && za(r); )
    r = eu(r, t);
  return r && no(r) && za(r) && !Rs(r) ? n : r || m2(e) || n;
}
const P2 = async function(e) {
  const t = this.getOffsetParent || Zd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: M2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function T2(e) {
  return Cn(e).direction === "rtl";
}
const H2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: b2,
  getDocumentElement: Jn,
  getClippingRect: E2,
  getOffsetParent: Zd,
  getElementRects: P2,
  getClientRects: x2,
  getDimensions: S2,
  getScale: Wr,
  isElement: $n,
  isRTL: T2
}, L2 = g2, z2 = h2, D2 = f2, O2 = d2, N2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: H2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return c2(e, t, {
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
    N2(e, u, {
      placement: r,
      middleware: [
        L2(o),
        // 手动偏移配置
        D2(a),
        //自动翻转
        z2(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [O2({ element: c })] : []
      ]
    }).then(({ x: _, y: h, placement: C, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${_}px`,
        top: `${h}px`
      }), l) {
        const { x: $, y: S } = p.arrow, E = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: $ != null ? `${$}px` : "",
          top: S != null ? `${S}px` : "",
          right: "",
          bottom: "",
          [E]: "2px"
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
  function x(_) {
    u.contains(_.target) || m();
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
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var A2 = /* @__PURE__ */ oe('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ei(e, t) {
  fe(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let a, i, s;
  Ut(() => (s = V2({
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
  var u = A2(), c = X(u), d = X(c);
  kr(d, n), K(c), Ln(c, (m) => a = m, () => a);
  var f = Z(c, 2), v = X(f);
  return kr(v, r), K(f), Ln(f, (m) => i = m, () => i), K(u), V(e, u), ve({
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
se(ei, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function rt(e, t) {
  fe(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), a = w(t, "mb", 7);
  var i = lt(), s = Ee(i);
  return Dv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    He(() => c = xn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === su,
      l.nodeName.includes("-")
    ));
    var d = lt(), f = Ee(d);
    kr(f, () => n() ?? $t), V(u, d);
  }), V(e, i), ve({
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
se(rt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var I2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function pa(e, t) {
  fe(t, !0), it(e, R2);
  const n = /* @__PURE__ */ Ht(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  et(e, xt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = I2();
      V(r, a);
    },
    $$slots: { default: !0 }
  })), ve();
}
se(pa, {}, [], [], !0);
const Z2 = () => {
  const e = tt();
  return {
    deleteNode: (t) => {
      e.nodes.update((n) => n.filter((r) => r.id !== t)), e.edges.update(
        (n) => n.filter((r) => r.source !== t && r.target !== t)
      );
    }
  };
}, ro = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, B2 = () => {
  const { nodes: e, nodeLookup: t } = tt();
  return {
    copyNode: (n) => {
      var r;
      const o = (r = q(t).get(n)) == null ? void 0 : r.internals.userNode;
      if (o) {
        const a = ro(), i = {
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
var Y2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), K2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), W2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), X2 = /* @__PURE__ */ oe('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), j2 = /* @__PURE__ */ oe('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const F2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function kn(e, t) {
  fe(t, !0), it(e, F2);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), a = w(t, "handle", 7), i = w(t, "children", 7), s = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "showSourceHandle", 7, !0), d = w(t, "showTargetHandle", 7, !0);
  let f = n().expand ? ["key"] : [];
  const { updateNodeData: v } = Jt(), m = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: b } = Z2(), { copyNode: x } = B2();
  var _ = j2(), h = Ee(_);
  {
    var C = (N) => {
      Ed(N, {
        get position() {
          return Te.Top;
        },
        align: "end",
        children: (B, M) => {
          var H = X2(), k = X(H);
          {
            var P = (F) => {
              et(F, {
                class: "tf-node-toolbar-item",
                children: (ae, Q) => {
                  var W = Y2();
                  V(ae, W);
                },
                $$slots: { default: !0 }
              });
            };
            Me(k, (F) => {
              s() && F(P);
            });
          }
          var O = Z(k, 2);
          {
            var A = (F) => {
              et(F, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ae, Q) => {
                  var W = K2();
                  V(ae, W);
                },
                $$slots: { default: !0 }
              });
            };
            Me(O, (F) => {
              l() && F(A);
            });
          }
          var Y = Z(O, 2);
          {
            var j = (F) => {
              et(F, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (ae, Q) => {
                  var W = W2();
                  V(ae, W);
                },
                $$slots: { default: !0 }
              });
            };
            Me(Y, (F) => {
              u() && F(j);
            });
          }
          K(H), V(B, H);
        },
        $$slots: { default: !0 }
      });
    };
    Me(h, (N) => {
      (s() || l() || u()) && N(C);
    });
  }
  var p = Z(h, 2), $ = Z(X(p), 2), S = X($);
  Pd(S, {
    items: m,
    activeKeys: f,
    onChange: (N, B) => {
      v(r(), { expand: B == null ? void 0 : B.includes("key") });
    }
  }), K($), K(p);
  var E = Z(p, 2);
  {
    var T = (N) => {
      vr(N, {
        type: "target",
        get position() {
          return Te.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Me(E, (N) => {
      d() && N(T);
    });
  }
  var L = Z(E, 2);
  {
    var z = (N) => {
      vr(N, {
        type: "source",
        get position() {
          return Te.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Me(L, (N) => {
      c() && N(z);
    });
  }
  var I = Z(L, 2);
  return kr(I, () => a() ?? $t), V(e, _), ve({
    get data() {
      return n();
    },
    set data(N) {
      n(N), y();
    },
    get id() {
      return r();
    },
    set id(N = "") {
      r(N), y();
    },
    get icon() {
      return o();
    },
    set icon(N) {
      o(N), y();
    },
    get handle() {
      return a();
    },
    set handle(N) {
      a(N), y();
    },
    get children() {
      return i();
    },
    set children(N) {
      i(N), y();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(N = !0) {
      s(N), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(N = !0) {
      l(N), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(N = !0) {
      u(N), y();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(N = !0) {
      c(N), y();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(N = !0) {
      d(N), y();
    }
  });
}
se(
  kn,
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
function kt() {
  return _r("svelteflow__node_id");
}
const Bd = [
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
], q2 = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "input",
    label: "固定值"
  }
];
var G2 = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), U2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), J2 = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Q2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Yd(e, t) {
  fe(t, !0), it(e, Q2);
  const [n, r] = ut(), o = () => ne(g(l), "$node", n), a = w(t, "parameter", 7), i = w(t, "index", 7);
  let s = kt(), l = /* @__PURE__ */ Oe(() => zr(s)), u = /* @__PURE__ */ Oe(() => {
    var T, L;
    return {
      ...a(),
      ...(L = (T = o()) == null ? void 0 : T.data) == null ? void 0 : L.parameters[i()]
    };
  });
  const { updateNodeData: c } = Jt(), d = (T) => {
    const L = T.target.value;
    c(s, (z) => {
      let I = z.data.parameters;
      return I[i()].name = L, { parameters: I };
    });
  }, f = (T) => {
    const L = T.target.checked;
    c(s, (z) => {
      let I = z.data.parameters;
      return I[i()].required = L, { parameters: I };
    });
  }, v = (T) => {
    const L = T.value;
    L && c(s, (z) => {
      let I = z.data.parameters;
      return I[i()].dataType = L, { parameters: I };
    });
  };
  let m;
  const b = () => {
    c(s, (T) => {
      let L = T.data.parameters;
      return L.splice(i(), 1), { parameters: [...L] };
    }), m == null || m.hide();
  };
  var x = J2(), _ = Ee(x), h = X(_);
  Dt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), K(_);
  var C = Z(_, 2), p = X(C);
  Sd(p, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), K(C);
  var $ = Z(C, 2), S = X($);
  Ln(
    ei(S, {
      placement: "bottom",
      floating: (T) => {
        var L = G2(), z = X(L), I = Z(X(z));
        const N = /* @__PURE__ */ Oe(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        zn(I, {
          items: Bd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(N);
          }
        }), K(z);
        var B = Z(z, 2), M = Z(X(B));
        At(M, { rows: 1, style: "width: 100%;" }), K(B);
        var H = Z(B, 2), k = Z(X(H));
        At(k, { rows: 3, style: "width: 100%;" }), K(H);
        var P = Z(H, 2), O = X(P);
        et(O, {
          onclick: b,
          children: (A, Y) => {
            De();
            var j = je("删除");
            V(A, j);
          },
          $$slots: { default: !0 }
        }), K(P), K(L), V(T, L);
      },
      children: (T, L) => {
        et(T, {
          class: "input-btn-more",
          children: (z, I) => {
            var N = U2();
            V(z, N);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => m = T,
    () => m
  ), K($), V(e, x);
  var E = ve({
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
  return r(), E;
}
se(Yd, { parameter: {}, index: {} }, [], [], !0);
var ey = /* @__PURE__ */ oe('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ty = /* @__PURE__ */ oe('<div class="none-params svelte-3n0wca">无输入参数</div>'), ny = /* @__PURE__ */ oe('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ry = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Kd(e, t) {
  fe(t, !0), it(e, ry);
  const [n, r] = ut(), o = () => ne(g(i), "$node", n);
  let a = kt(), i = /* @__PURE__ */ Oe(() => zr(a)), s = /* @__PURE__ */ Oe(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = ny(), u = X(l);
  {
    var c = (f) => {
      var v = ey();
      De(4), V(f, v);
    };
    Me(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = Z(u, 2);
  Gt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, m) => {
      Yd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(m);
        }
      });
    },
    (f) => {
      var v = ty();
      V(f, v);
    }
  ), K(l), V(e, l), ve(), r();
}
se(Kd, {}, [], [], !0);
const Wd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ro()), Wd(t.children);
  });
}, An = () => {
  const { updateNodeData: e } = Jt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Wd(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: ro()
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
var oy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), iy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ay = /* @__PURE__ */ oe('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const sy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Xd(e, t) {
  fe(t, !0), it(e, sy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An();
  return kn(e, xt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    icon: (i) => {
      var s = oy();
      V(i, s);
    },
    children: (i, s) => {
      var l = ay(), u = Ee(l), c = X(u);
      rt(c, {
        level: 3,
        children: (v, m) => {
          De();
          var b = je("输入参数");
          V(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = Z(c, 2);
      et(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, m) => {
          var b = iy();
          V(v, b);
        },
        $$slots: { default: !0 }
      }), K(u);
      var f = Z(u, 2);
      Kd(f, {}), V(i, l);
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
se(Xd, { data: {} }, [], [], !0);
const jd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), jd(e, r.source, n));
}, tu = (e, t) => {
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
}, ly = (e = !1) => {
  const t = kt(), n = zr(t), { nodes: r, edges: o } = tt();
  return lr([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = tu(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      jd(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = tu(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var uy = /* @__PURE__ */ oe('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), cy = /* @__PURE__ */ oe('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  fe(t, !0), it(e, dy);
  const [n, r] = ut(), o = () => ne(g(c), "$node", n), a = () => ne(p, "$selectItems", n);
  Ut(() => {
    g(d).refType || _({ value: "ref" });
  });
  const i = w(t, "parameter", 7), s = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = kt(), c = /* @__PURE__ */ Oe(() => zr(u)), d = /* @__PURE__ */ Oe(() => {
    var H;
    return {
      ...i(),
      ...(H = o()) == null ? void 0 : H.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Jt(), v = (H, k) => {
    f(u, (P) => {
      let O = P.data[l()];
      return O[s()] = { ...O[s()], [H]: k }, { [l()]: O };
    });
  }, m = (H) => {
    const k = H.target.value;
    v("name", k);
  }, b = (H) => {
    const k = H.target.value;
    v("value", k);
  }, x = (H) => {
    const k = H.value;
    v("ref", k);
  }, _ = (H) => {
    const k = H.value;
    v("refType", k);
  };
  let h;
  const C = () => {
    f(u, (H) => {
      let k = H.data[l()];
      return k.splice(s(), 1), { [l()]: [...k] };
    }), h == null || h.hide();
  }, p = ly();
  var $ = cy(), S = Ee($), E = X(S);
  Dt(E, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: m
  }), K(S);
  var T = Z(S, 2), L = X(T);
  {
    var z = (H) => {
      Dt(H, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, I = (H) => {
      const k = /* @__PURE__ */ Oe(() => [g(d).ref]);
      zn(H, {
        get items() {
          return a();
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
    Me(L, (H) => {
      g(d).refType === "input" ? H(z) : H(I, !1);
    });
  }
  K(T);
  var N = Z(T, 2), B = X(N);
  Ln(
    ei(B, {
      placement: "bottom",
      floating: (H) => {
        var k = uy(), P = X(k), O = Z(X(P));
        const A = /* @__PURE__ */ Oe(() => g(d).refType ? [g(d).refType] : []);
        zn(O, {
          items: q2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(A);
          },
          onSelect: _
        }), K(P);
        var Y = Z(P, 2), j = Z(X(Y));
        At(j, {
          rows: 1,
          style: "width: 100%;",
          onchange: (le) => {
            const $e = le.target.value;
            v("defaultValue", $e);
          }
        }), K(Y);
        var F = Z(Y, 2), ae = Z(X(F));
        At(ae, {
          rows: 3,
          style: "width: 100%;",
          onchange: (le) => {
            const $e = le.target.value;
            v("description", $e);
          }
        }), K(F);
        var Q = Z(F, 2), W = X(Q);
        et(W, {
          onclick: C,
          children: (le, $e) => {
            De();
            var _e = je("删除");
            V(le, _e);
          },
          $$slots: { default: !0 }
        }), K(Q), K(k), V(H, k);
      },
      children: (H, k) => {
        pa(H, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (H) => h = H,
    () => h
  ), K(N), V(e, $);
  var M = ve({
    get parameter() {
      return i();
    },
    set parameter(H) {
      i(H), y();
    },
    get index() {
      return s();
    },
    set index(H) {
      s(H), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(H) {
      l(H), y();
    }
  });
  return r(), M;
}
se(Fd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var fy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vy = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), gy = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const hy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function an(e, t) {
  fe(t, !0), it(e, hy);
  const [n, r] = ut(), o = () => ne(g(l), "$node", n), a = w(t, "noneParameterText", 7, "无输入参数"), i = w(t, "dataKeyName", 7, "parameters");
  let s = kt(), l = /* @__PURE__ */ Oe(() => zr(s)), u = /* @__PURE__ */ Oe(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[i()]) || []];
  });
  var c = gy(), d = X(c);
  {
    var f = (b) => {
      var x = fy();
      De(4), V(b, x);
    };
    Me(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = Z(d, 2);
  Gt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, _) => {
      Fd(b, {
        get parameter() {
          return g(x);
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
      var x = vy(), _ = X(x, !0);
      K(x), He(() => sn(_, a())), V(b, x);
    }
  ), K(c), V(e, c);
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
se(an, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), my = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ oe('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  fe(t, !0), it(e, wy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An();
  return kn(e, xt(
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
        var s = py();
        V(i, s);
      },
      children: (i, s) => {
        var l = yy(), u = Ee(l), c = X(u);
        rt(c, {
          level: 3,
          children: (v, m) => {
            De();
            var b = je("输出参数");
            V(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = Z(c, 2);
        et(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, m) => {
            var b = my();
            V(v, b);
          },
          $$slots: { default: !0 }
        }), K(u);
        var f = Z(u, 2);
        an(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), V(i, l);
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
se(qd, { data: {} }, [], [], !0);
const hr = () => _r("tinyflow_options");
var by = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), xy = /* @__PURE__ */ oe('<div class="input-more-item svelte-1cfeest"><!></div>'), $y = /* @__PURE__ */ oe('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), Cy = /* @__PURE__ */ oe('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const _y = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  fe(t, !0), it(e, _y);
  const [n, r] = ut(), o = () => ne(g(u), "$node", n), a = w(t, "parameter", 7), i = w(t, "position", 7), s = w(t, "dataKeyName", 7);
  let l = kt(), u = /* @__PURE__ */ Oe(() => zr(l)), c = /* @__PURE__ */ Oe(() => {
    var P;
    let O = (P = o()) == null ? void 0 : P.data[s()], A;
    if (O && i().length > 0) {
      let Y = O;
      for (let j = 0; j < i().length; j++) {
        const F = i()[j];
        j == i().length - 1 ? A = Y[F] : Y = Y[F].children;
      }
    }
    return { ...a(), ...A };
  });
  const { updateNodeData: d } = Jt(), f = (P, O) => {
    d(l, (A) => {
      const Y = A.data[s()];
      if (Y && i().length > 0) {
        let j = Y;
        for (let F = 0; F < i().length; F++) {
          const ae = i()[F];
          F == i().length - 1 ? j[ae] = { ...j[ae], [P]: O } : j = Y[ae].children;
        }
      }
      return { [s()]: Y };
    });
  }, v = (P) => {
    const O = P.target.value;
    f("name", O);
  }, m = (P) => {
    const O = P.value;
    f("dataType", O);
  };
  let b;
  const x = () => {
    d(l, (P) => {
      let O = P.data[s()];
      if (O && i().length > 0) {
        let A = O;
        for (let Y = 0; Y < i().length; Y++) {
          const j = i()[Y];
          Y == i().length - 1 ? A.splice(j, 1) : A = A[j].children;
        }
      }
      return { [s()]: [...O] };
    }), b == null || b.hide();
  }, _ = () => {
    d(l, (P) => {
      let O = P.data[s()];
      if (O && i().length > 0) {
        let A = O;
        for (let Y = 0; Y < i().length; Y++) {
          const j = i()[Y];
          Y == i().length - 1 ? A[j].children ? A[j].children.push({
            id: ro(),
            name: "newParam",
            dataType: "String"
          }) : A[j].children = [
            {
              id: ro(),
              name: "newParam",
              dataType: "String"
            }
          ] : A = A[j].children;
        }
      }
      return { [s()]: [...O] };
    });
  };
  var h = Cy(), C = Ee(h), p = X(C);
  {
    var $ = (P) => {
      var O = lt(), A = Ee(O);
      Gt(A, 17, i, To, (Y, j) => {
        De();
        var F = je(" ");
        V(Y, F);
      }), V(P, O);
    };
    Me(p, (P) => {
      i().length > 1 && P($);
    });
  }
  var S = Z(p, 2);
  const E = /* @__PURE__ */ Oe(() => g(c).nameDisabled === !0);
  Dt(S, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(E);
    }
  }), K(C);
  var T = Z(C, 2), L = X(T);
  const z = /* @__PURE__ */ Oe(() => g(c).dataType ? [g(c).dataType] : []), I = /* @__PURE__ */ Oe(() => g(c).dataTypeDisabled === !0);
  zn(L, {
    items: Bd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(z);
    },
    get disabled() {
      return g(I);
    },
    onSelect: m
  });
  var N = Z(L, 2);
  {
    var B = (P) => {
      et(P, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: _,
        children: (O, A) => {
          var Y = by();
          V(O, Y);
        },
        $$slots: { default: !0 }
      });
    };
    Me(N, (P) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && P(B);
    });
  }
  K(T);
  var M = Z(T, 2), H = X(M);
  Ln(
    ei(H, {
      placement: "bottom",
      floating: (P) => {
        var O = $y(), A = X(O), Y = Z(X(A));
        At(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (W) => {
            const le = W.target.value;
            f("defaultValue", le);
          }
        }), K(A);
        var j = Z(A, 2), F = Z(X(j));
        At(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (W) => {
            const le = W.target.value;
            f("description", le);
          }
        }), K(j);
        var ae = Z(j, 2);
        {
          var Q = (W) => {
            var le = xy(), $e = X(le);
            et($e, {
              onclick: x,
              children: (_e, me) => {
                De();
                var de = je("删除");
                V(_e, de);
              },
              $$slots: { default: !0 }
            }), K(le), V(W, le);
          };
          Me(ae, (W) => {
            g(c).deleteDisabled !== !0 && W(Q);
          });
        }
        K(O), V(P, O);
      },
      children: (P, O) => {
        pa(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => b = P,
    () => b
  ), K(M), V(e, h);
  var k = ve({
    get parameter() {
      return a();
    },
    set parameter(P) {
      a(P), y();
    },
    get position() {
      return i();
    },
    set position(P) {
      i(P), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(P) {
      s(P), y();
    }
  });
  return r(), k;
}
se(Gd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var ky = /* @__PURE__ */ oe("<!> <!>", 1), Ey = /* @__PURE__ */ oe('<div class="none-params svelte-1sm1mgi"> </div>'), Sy = /* @__PURE__ */ oe('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), My = /* @__PURE__ */ oe('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Py = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  fe(t, !0), it(e, Py);
  const [n, r] = ut(), o = () => ne(g(u), "$node", n), a = (x, _ = $t, h = $t) => {
    var C = lt(), p = Ee(C);
    Gt(
      p,
      19,
      _,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, S, E) => {
        var T = ky(), L = Ee(T);
        const z = /* @__PURE__ */ Oe(() => [...h(), g(E)]);
        Gd(L, {
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
        var I = Z(L, 2);
        {
          var N = (B) => {
            var M = /* @__PURE__ */ be(() => [...h(), g(E)]);
            a(B, () => g(S).children, () => g(M));
          };
          Me(I, (B) => {
            g(S).children && B(N);
          });
        }
        V($, T);
      },
      ($) => {
        var S = lt(), E = Ee(S);
        {
          var T = (L) => {
            var z = Ey(), I = X(z, !0);
            K(z), He(() => sn(I, i())), V(L, z);
          };
          Me(E, (L) => {
            h().length === 0 && L(T);
          });
        }
        V($, S);
      }
    ), V(x, C);
  }, i = w(t, "noneParameterText", 7, "无输出参数"), s = w(t, "dataKeyName", 7, "outputDefs");
  let l = kt(), u = /* @__PURE__ */ Oe(() => zr(l)), c = /* @__PURE__ */ Oe(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = My(), f = X(d);
  {
    var v = (x) => {
      var _ = Sy();
      De(4), V(x, _);
    };
    Me(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var m = Z(f, 2);
  a(m, () => g(c) || [], () => []), K(d), V(e, d);
  var b = ve({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输出参数") {
      i(x), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(x = "outputDefs") {
      s(x), y();
    }
  });
  return r(), b;
}
se(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zy = /* @__PURE__ */ oe('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const Dy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  fe(t, !0), it(e, Dy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = hr();
  let s = Cr(nn([]));
  Ut(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ty();
        V(u, c);
      },
      children: (u, c) => {
        var d = zy(), f = Ee(d), v = X(f);
        rt(v, {
          level: 3,
          children: (de, re) => {
            De();
            var we = je("输入参数");
            V(de, we);
          },
          $$slots: { default: !0 }
        });
        var m = Z(v, 2);
        et(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (de, re) => {
            var we = Hy();
            V(de, we);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = Z(f, 2);
        an(b, {});
        var x = Z(b, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (de, re) => {
            De();
            var we = je("模型设置");
            V(de, we);
          },
          $$slots: { default: !0 }
        });
        var _ = Z(x, 4), h = X(_);
        const C = /* @__PURE__ */ Oe(() => n().llmId ? [n().llmId] : []);
        zn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (de) => {
            const re = de.value;
            l(o, () => ({ llmId: re }));
          },
          get value() {
            return g(C);
          }
        });
        var p = Z(h, 2);
        pa(p, {}), K(_);
        var $ = Z(_, 4), S = X($), E = X(S), T = X(E);
        K(E);
        var L = Z(E, 2);
        Co(L), K(S), K($);
        var z = Z($, 2), I = X(z), N = X(I), B = X(N);
        K(N);
        var M = Z(N, 2);
        Co(M), K(I), K(z);
        var H = Z(z, 2), k = X(H), P = X(k), O = X(P);
        K(P);
        var A = Z(P, 2);
        Co(A), K(k), K(H);
        var Y = Z(H, 4), j = X(Y);
        const F = /* @__PURE__ */ Oe(() => n().systemPrompt || "");
        At(j, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(F);
          },
          oninput: (de) => {
            l(o, { systemPrompt: de.target.value });
          }
        }), K(Y);
        var ae = Z(Y, 4), Q = X(ae);
        const W = /* @__PURE__ */ Oe(() => n().userPrompt || "");
        At(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(W);
          },
          oninput: (de) => {
            l(o, { userPrompt: de.target.value });
          }
        }), K(ae);
        var le = Z(ae, 2), $e = X(le);
        rt($e, {
          level: 3,
          mt: "10px",
          children: (de, re) => {
            De();
            var we = je("输出参数");
            V(de, we);
          },
          $$slots: { default: !0 }
        });
        var _e = Z($e, 2);
        et(_e, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (de, re) => {
            var we = Ly();
            V(de, we);
          },
          $$slots: { default: !0 }
        }), K(le);
        var me = Z(le, 2);
        Qn(me, {}), He(() => {
          sn(T, `Temperature: ${n().temperature ?? 0.5}`), $a(L, n().temperature ?? 0.5), sn(B, `Top P: ${n().topP ?? 0.9}`), $a(M, n().topP ?? 0.9), sn(O, `Top K: ${n().topK ?? 50}`), $a(A, n().topK ?? 50);
        }), Ue("mousedown", L, Ca(function(de) {
          Be.call(this, t, de);
        })), Ue("input", L, (de) => l(o, { temperature: parseFloat(de.target.value) })), Ue("mousedown", M, Ca(function(de) {
          Be.call(this, t, de);
        })), Ue("input", M, (de) => l(o, { topP: parseFloat(de.target.value) })), Ue("mousedown", A, Ca(function(de) {
          Be.call(this, t, de);
        })), Ue("input", A, (de) => l(o, { topK: parseInt(de.target.value) })), V(u, d);
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
se(Ud, { data: {} }, [], [], !0);
var Oy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  fe(t, !0), it(e, Iy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Ut(() => {
    n().engine || i(o, () => ({ engine: "qlexpress" }));
  });
  const o = kt(), { addParameter: a } = An(), { updateNodeData: i } = Jt(), s = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Oy();
        V(l, u);
      },
      children: (l, u) => {
        var c = Ay(), d = Ee(c), f = X(d);
        rt(f, {
          level: 3,
          children: (z, I) => {
            De();
            var N = je("输入参数");
            V(z, N);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        et(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (z, I) => {
            var N = Ny();
            V(z, N);
          },
          $$slots: { default: !0 }
        }), K(d);
        var m = Z(d, 2);
        an(m, {});
        var b = Z(m, 2);
        rt(b, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            De();
            var N = je("代码");
            V(z, N);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 4), _ = X(x);
        const h = /* @__PURE__ */ Oe(() => n().engine ? [n().engine] : ["qlexpress"]);
        zn(_, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (z) => {
            const I = z.value;
            i(o, () => ({ engine: I }));
          },
          get value() {
            return g(h);
          }
        }), K(x);
        var C = Z(x, 4), p = X(C);
        const $ = /* @__PURE__ */ Oe(() => n().code || "");
        At(p, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (z) => {
            i(o, () => ({ code: z.target.value }));
          },
          get value() {
            return g($);
          }
        }), K(C);
        var S = Z(C, 2), E = X(S);
        rt(E, {
          level: 3,
          mt: "10px",
          children: (z, I) => {
            De();
            var N = je("输出参数");
            V(z, N);
          },
          $$slots: { default: !0 }
        });
        var T = Z(E, 2);
        et(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (z, I) => {
            var N = Vy();
            V(z, N);
          },
          $$slots: { default: !0 }
        }), K(S);
        var L = Z(S, 2);
        Qn(L, {}), V(l, c);
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
se(Jd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Yy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  fe(t, !0), it(e, Yy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), { updateNodeData: i } = Jt();
  return Xr(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && a(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var l = Ry();
        V(s, l);
      },
      children: (s, l) => {
        var u = By(), c = Ee(u), d = X(c);
        rt(d, {
          level: 3,
          children: ($, S) => {
            De();
            var E = je("输入参数");
            V($, E);
          },
          $$slots: { default: !0 }
        });
        var f = Z(d, 2);
        et(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: ($, S) => {
            var E = Zy();
            V($, E);
          },
          $$slots: { default: !0 }
        }), K(c);
        var v = Z(c, 2);
        an(v, {});
        var m = Z(v, 2);
        rt(m, {
          level: 3,
          mt: "10px",
          children: ($, S) => {
            De();
            var E = je("代码");
            V($, E);
          },
          $$slots: { default: !0 }
        });
        var b = Z(m, 4), x = X(b);
        const _ = /* @__PURE__ */ Oe(() => n().template || "");
        At(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: ($) => {
            i(o, () => ({ template: $.target.value }));
          },
          get value() {
            return g(_);
          }
        }), K(b);
        var h = Z(b, 2), C = X(h);
        rt(C, {
          level: 3,
          mt: "10px",
          children: ($, S) => {
            De();
            var E = je("输出参数");
            V($, E);
          },
          $$slots: { default: !0 }
        }), K(h);
        var p = Z(h, 2);
        Qn(p, {}), V(s, u);
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
se(Qd, { data: {} }, [], [], !0);
var Ky = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Wy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ oe('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Jy = /* @__PURE__ */ oe('<div style="width: 100%"><!></div>'), Qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ oe('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const tw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function ef(e, t) {
  fe(t, !0), it(e, tw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  Ut(() => {
    n().method || s(a, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], a = kt(), { addParameter: i } = An(), { updateNodeData: s } = Jt();
  return kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ky();
        V(l, u);
      },
      children: (l, u) => {
        var c = ew(), d = Ee(c), f = X(d), v = X(f);
        const m = /* @__PURE__ */ Oe(() => n().method ? [n().method] : ["get"]);
        zn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ce) => {
            const ue = ce.value;
            s(a, () => ({ method: ue }));
          },
          get value() {
            return g(m);
          }
        }), K(f);
        var b = Z(f, 2), x = X(b);
        const _ = /* @__PURE__ */ Oe(() => n().url || "");
        Dt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ce) => {
            s(a, () => ({ url: ce.target.value }));
          },
          get value() {
            return g(_);
          }
        }), K(b), K(d);
        var h = Z(d, 2), C = X(h);
        rt(C, {
          level: 3,
          children: (ce, ue) => {
            De();
            var Se = je("Http 头信息");
            V(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var p = Z(C, 2);
        et(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "headers");
          },
          children: (ce, ue) => {
            var Se = Wy();
            V(ce, Se);
          },
          $$slots: { default: !0 }
        }), K(h);
        var $ = Z(h, 2);
        an($, { dataKeyName: "headers" });
        var S = Z($, 2), E = X(S);
        rt(E, {
          level: 3,
          children: (ce, ue) => {
            De();
            var Se = je("参数");
            V(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var T = Z(E, 2);
        et(T, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "urlParameters");
          },
          children: (ce, ue) => {
            var Se = Xy();
            V(ce, Se);
          },
          $$slots: { default: !0 }
        }), K(S);
        var L = Z(S, 2);
        an(L, { dataKeyName: "urlParameters" });
        var z = Z(L, 2);
        rt(z, {
          level: 3,
          mt: "10px",
          children: (ce, ue) => {
            De();
            var Se = je("Body");
            V(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var I = Z(z, 2), N = X(I), B = X(N);
        const M = /* @__PURE__ */ Oe(() => !n().bodyType);
        Dt(B, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(M);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "" });
          }
        }), De(), K(N);
        var H = Z(N, 2), k = X(H);
        const P = /* @__PURE__ */ Oe(() => n().bodyType === "form-data");
        Dt(k, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "form-data" });
          }
        }), De(), K(H);
        var O = Z(H, 2), A = X(O);
        const Y = /* @__PURE__ */ Oe(() => n().bodyType === "x-www-form-urlencoded");
        Dt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(Y);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "x-www-form-urlencoded" });
          }
        }), De(), K(O);
        var j = Z(O, 2), F = X(j);
        const ae = /* @__PURE__ */ Oe(() => n().bodyType === "json");
        Dt(F, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(ae);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "json" });
          }
        }), De(), K(j);
        var Q = Z(j, 2), W = X(Q);
        const le = /* @__PURE__ */ Oe(() => n().bodyType === "raw");
        Dt(W, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(le);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "raw" });
          }
        }), De(), K(Q), K(I);
        var $e = Z(I, 2);
        {
          var _e = (ce) => {
            var ue = Fy(), Se = Ee(ue), Ne = X(Se);
            rt(Ne, {
              level: 3,
              children: (at, te) => {
                De();
                var Ve = je("参数");
                V(at, Ve);
              },
              $$slots: { default: !0 }
            });
            var Ge = Z(Ne, 2);
            et(Ge, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromData");
              },
              children: (at, te) => {
                var Ve = jy();
                V(at, Ve);
              },
              $$slots: { default: !0 }
            }), K(Se);
            var yt = Z(Se, 2);
            an(yt, { dataKeyName: "fromData" }), V(ce, ue);
          };
          Me($e, (ce) => {
            n().bodyType === "form-data" && ce(_e);
          });
        }
        var me = Z($e, 2);
        {
          var de = (ce) => {
            var ue = Gy(), Se = Ee(ue), Ne = X(Se);
            rt(Ne, {
              level: 3,
              children: (at, te) => {
                De();
                var Ve = je("参数");
                V(at, Ve);
              },
              $$slots: { default: !0 }
            });
            var Ge = Z(Ne, 2);
            et(Ge, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromUrlencoded");
              },
              children: (at, te) => {
                var Ve = qy();
                V(at, Ve);
              },
              $$slots: { default: !0 }
            }), K(Se);
            var yt = Z(Se, 2);
            an(yt, { dataKeyName: "fromUrlencoded" }), V(ce, ue);
          };
          Me(me, (ce) => {
            n().bodyType === "x-www-form-urlencoded" && ce(de);
          });
        }
        var re = Z(me, 2);
        {
          var we = (ce) => {
            var ue = Uy(), Se = X(ue);
            At(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Ne) => {
                s(a, { bodyJson: Ne.target.value });
              }
            }), K(ue), V(ce, ue);
          };
          Me(re, (ce) => {
            n().bodyType === "json" && ce(we);
          });
        }
        var qe = Z(re, 2);
        {
          var We = (ce) => {
            var ue = Jy(), Se = X(ue);
            At(Se, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Ne) => {
                s(a, { bodyRaw: Ne.target.value });
              }
            }), K(ue), V(ce, ue);
          };
          Me(qe, (ce) => {
            n().bodyType === "raw" && ce(We);
          });
        }
        var Ie = Z(qe, 2), ee = X(Ie);
        rt(ee, {
          level: 3,
          mt: "10px",
          children: (ce, ue) => {
            De();
            var Se = je("输出参数");
            V(ce, Se);
          },
          $$slots: { default: !0 }
        });
        var Fe = Z(ee, 2);
        et(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "outputDefs");
          },
          children: (ce, ue) => {
            var Se = Qy();
            V(ce, Se);
          },
          $$slots: { default: !0 }
        }), K(Ie);
        var Re = Z(Ie, 2);
        Qn(Re, {}), V(l, c);
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
se(ef, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), rw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  fe(t, !0), it(e, iw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = hr();
  let s = Cr(nn([]));
  Ut(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Jt();
  return Xr(() => {
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
  }), kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = nw();
        V(u, c);
      },
      children: (u, c) => {
        var d = ow(), f = Ee(d), v = X(f);
        rt(v, {
          level: 3,
          children: (L, z) => {
            De();
            var I = je("输入参数");
            V(L, I);
          },
          $$slots: { default: !0 }
        });
        var m = Z(v, 2);
        et(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (L, z) => {
            var I = rw();
            V(L, I);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = Z(f, 2);
        an(b, {});
        var x = Z(b, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (L, z) => {
            De();
            var I = je("知识库设置");
            V(L, I);
          },
          $$slots: { default: !0 }
        });
        var _ = Z(x, 4), h = X(_);
        const C = /* @__PURE__ */ Oe(() => n().knowledgeId ? [n().knowledgeId] : []);
        zn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (L) => {
            const z = L.value;
            l(o, () => ({ knowledgeId: z }));
          },
          get value() {
            return g(C);
          }
        }), K(_);
        var p = Z(_, 4), $ = X(p);
        Dt($, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(p);
        var S = Z(p, 2), E = X(S);
        rt(E, {
          level: 3,
          mt: "10px",
          children: (L, z) => {
            De();
            var I = je("输出参数");
            V(L, I);
          },
          $$slots: { default: !0 }
        }), K(S);
        var T = Z(S, 2);
        Qn(T, {}), V(u, d);
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
se(tf, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ oe('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  fe(t, !0), it(e, uw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = hr();
  let s = Cr(nn([]));
  Ut(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = Jt();
  return Xr(() => {
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
  }), kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = aw();
        V(u, c);
      },
      children: (u, c) => {
        var d = lw(), f = Ee(d), v = X(f);
        rt(v, {
          level: 3,
          children: (H, k) => {
            De();
            var P = je("输入参数");
            V(H, P);
          },
          $$slots: { default: !0 }
        });
        var m = Z(v, 2);
        et(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (H, k) => {
            var P = sw();
            V(H, P);
          },
          $$slots: { default: !0 }
        }), K(f);
        var b = Z(f, 2);
        an(b, {});
        var x = Z(b, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (H, k) => {
            De();
            var P = je("搜索引擎设置");
            V(H, P);
          },
          $$slots: { default: !0 }
        });
        var _ = Z(x, 4), h = X(_);
        const C = /* @__PURE__ */ Oe(() => n().knowledgeId ? [n().knowledgeId] : []);
        zn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择 API 服务商",
          onSelect: (H) => {
            const k = H.value;
            l(o, () => ({ knowledgeId: k }));
          },
          get value() {
            return g(C);
          }
        }), K(_);
        var p = Z(_, 4), $ = X(p);
        Dt($, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), K(p);
        var S = Z(p, 4), E = X(S);
        Dt(E, { placeholder: "请输入关键字", style: "width: 100%" }), K(S);
        var T = Z(S, 4), L = X(T);
        Dt(L, { placeholder: "搜索的数据条数", style: "width: 100%" }), K(T);
        var z = Z(T, 4), I = X(z);
        At(I, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), K(z);
        var N = Z(z, 2), B = X(N);
        rt(B, {
          level: 3,
          mt: "10px",
          children: (H, k) => {
            De();
            var P = je("输出参数");
            V(H, P);
          },
          $$slots: { default: !0 }
        }), K(N);
        var M = Z(N, 2);
        Qn(M, {}), V(u, d);
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
se(nf, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ oe('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const vw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function rf(e, t) {
  fe(t, !0), it(e, vw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = hr();
  let s = Cr(nn([]));
  return Ut(async () => {
    var l;
    const u = await ((l = i.provider) == null ? void 0 : l.knowledge());
    g(s).push(...u || []);
  }), kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = cw();
        V(l, u);
      },
      handle: (l) => {
        vr(l, {
          type: "source",
          get position() {
            return Te.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = fw(), d = Ee(c), f = X(d);
        rt(f, {
          level: 3,
          children: (h, C) => {
            De();
            var p = je("循环变量");
            V(h, p);
          },
          $$slots: { default: !0 }
        });
        var v = Z(f, 2);
        et(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (h, C) => {
            var p = dw();
            V(h, p);
          },
          $$slots: { default: !0 }
        }), K(d);
        var m = Z(d, 2);
        an(m, {});
        var b = Z(m, 2), x = X(b);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (h, C) => {
            De();
            var p = je("输出参数");
            V(h, p);
          },
          $$slots: { default: !0 }
        }), K(b);
        var _ = Z(b, 2);
        Qn(_, {}), V(l, c);
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
se(rf, { data: {} }, [], [], !0);
const gw = {
  startNode: Xd,
  codeNode: Jd,
  llmNode: Ud,
  templateNode: Qd,
  httpNode: ef,
  knowledgeNode: tf,
  searchEngineNode: nf,
  loopNode: rf,
  endNode: qd
};
var hw = /* @__PURE__ */ oe("<!> ", 1);
function os(e, t) {
  fe(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), a = w(t, "description", 7), i = w(t, "extra", 7);
  return et(e, {
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
      var u = hw(), c = Ee(u);
      Au(c, n);
      var d = Z(c);
      He(() => sn(d, ` ${r() ?? ""}`)), V(s, u);
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
se(
  os,
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
var pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), yw = /* @__PURE__ */ oe('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function of(e, t) {
  fe(t, !0);
  let n = Cr("base"), r = Cr("show");
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
  ], a = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], i = [], s = hr().customNodes;
  if (console.log("options", hr()), console.log("customNodes", s), s)
    for (let x of Object.keys(s))
      i.push({
        icon: s[x].icon,
        title: s[x].name,
        type: x
      });
  var l = yw(), u = X(l), c = X(u), d = X(c);
  Md(d, {
    style: "width: 100%",
    items: a,
    onChange: (x) => {
      G(n, nn(x.value.toString()));
    }
  }), K(c);
  var f = Z(c, 2), v = X(f);
  Gt(v, 21, () => o, To, (x, _) => {
    os(x, xt(() => g(_)));
  }), K(v);
  var m = Z(v, 2);
  Gt(m, 21, () => i, To, (x, _) => {
    os(x, xt(() => g(_)));
  }), K(m), K(f), K(u);
  var b = Z(u, 2);
  et(b, {
    onclick: () => {
      G(r, nn(g(r) ? "" : "show"));
    },
    children: (x, _) => {
      var h = lt(), C = Ee(h);
      {
        var p = (S) => {
          var E = pw();
          V(S, E);
        }, $ = (S) => {
          var E = mw();
          V(S, E);
        };
        Me(C, (S) => {
          g(r) === "show" ? S(p) : S($, !1);
        });
      }
      V(x, h);
    },
    $$slots: { default: !0 }
  }), K(l), He(() => {
    Vt(l, 1, `tf-toolbar ${g(r) ?? ""}`), he(v, "style", `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), he(m, "style", `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), V(e, l), ve();
}
se(of, {}, [], [], !0);
const ww = () => {
  const { nodeLookup: e } = tt();
  return {
    getNode: (t) => {
      var n;
      return (n = q(e).get(t)) == null ? void 0 : n.internals.userNode;
    }
  };
}, bw = () => {
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
}, xw = () => {
  const { edges: e } = tt();
  return {
    getEdgesByTarget: (t) => q(e).filter((n) => n.target === t)
  };
};
var $w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), kw = /* @__PURE__ */ oe('<div class="heading svelte-1anjpai"><!> <!></div> <!> <div></div> <div class="heading svelte-1anjpai"><!> <!></div> <!>', 1);
const Ew = {
  hash: "svelte-1anjpai",
  code: `.heading.svelte-1anjpai {display:flex;margin-bottom:10px;}

    /* 新增样式 */`
};
function af(e, t) {
  fe(t, !0), it(e, Ew);
  const n = w(t, "data", 7), r = /* @__PURE__ */ Ht(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), { updateNodeData: i } = Jt(), s = hr().customNodes[n().type];
  let l;
  function u(d, f) {
    d && d.appendChild(f);
  }
  const c = document.createElement("div");
  return c.textContent = "点击我", c.style.backgroundColor = "green", c.style.color = "white", Ut(() => {
    var d;
    (d = s.render) == null || d.call(s, c), u(l, c);
  }), kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = $w();
        V(d, f);
      },
      children: (d, f) => {
        var v = kw(), m = Ee(v), b = X(m);
        rt(b, {
          level: 3,
          children: (E, T) => {
            De();
            var L = je("输入参数");
            V(E, L);
          },
          $$slots: { default: !0 }
        });
        var x = Z(b, 2);
        et(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (E, T) => {
            var L = Cw();
            V(E, L);
          },
          $$slots: { default: !0 }
        }), K(m);
        var _ = Z(m, 2);
        an(_, {});
        var h = Z(_, 2);
        Ln(h, (E) => l = E, () => l);
        var C = Z(h, 2), p = X(C);
        rt(p, {
          level: 3,
          mt: "10px",
          children: (E, T) => {
            De();
            var L = je("输出参数");
            V(E, L);
          },
          $$slots: { default: !0 }
        });
        var $ = Z(p, 2);
        et($, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (E, T) => {
            var L = _w();
            V(E, L);
          },
          $$slots: { default: !0 }
        }), K(C);
        var S = Z(C, 2);
        Qn(S, {}), V(d, v);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(d) {
      n(d), y();
    }
  });
}
se(af, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ oe('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Mw = /* @__PURE__ */ oe("<!> <!> <!> <!>", 1), Pw = /* @__PURE__ */ oe('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const Tw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function sf(e, t) {
  fe(t, !0), it(e, Tw);
  const n = w(t, "onInit", 7), r = Jt();
  n()(r);
  let o = Cr(!1);
  const a = ($) => {
    $.preventDefault(), $.dataTransfer && ($.dataTransfer.dropEffect = "move");
  }, i = ($) => {
    var S;
    $.preventDefault();
    const E = r.screenToFlowPosition({
      x: $.clientX - 250,
      y: $.clientY - 100
    }), T = (S = $.dataTransfer) == null ? void 0 : S.getData("application/tinyflow"), L = T ? JSON.parse(T) : {}, z = {
      id: `node_${ro()}`,
      position: E,
      data: {},
      ...L
    };
    bi.addNode(z), bi.selectNodeOnly(z.id);
  }, { getNode: s } = ww(), l = ($) => {
    const S = s($.source), E = s($.target);
    if ($.sourceHandle === "loop_handle" || S.parentId) {
      const T = r.getEdges();
      for (let L of T)
        if (L.target === $.target) {
          const z = s(L.source);
          if ($.sourceHandle === "loop_handle" && z.parentId !== S.id || S.parentId && z.parentId !== S.parentId)
            return !1;
        }
    }
    return !(!S.parentId && E.parentId && E.parentId !== S.id);
  }, { ensureParentInNodesBefore: u } = bw(), c = ($, S) => {
    if (!S.isValid)
      return;
    const E = S.toNode;
    if (E.parentId)
      return;
    const T = S.fromNode, L = S.fromHandle, z = { position: { ...E.position } };
    if (L.id === "loop_handle" ? z.parentId = T.id : T.parentId && (z.parentId = T.parentId), z.parentId) {
      const I = s(z.parentId);
      z.position = {
        x: E.position.x - I.position.x,
        y: E.position.y - I.position.y
      }, u(z.parentId, E.id), r.updateNode(E.id, z);
    }
  }, { getEdgesByTarget: d } = xw(), f = ($) => {
    $.edges.forEach((S) => {
      const E = s(S.target);
      if (E.parentId) {
        const T = d(S.target), L = s(E.parentId);
        if (T.length === 0)
          r.updateNode(E.id, {
            parentId: void 0,
            position: {
              x: E.position.x + L.position.x,
              y: E.position.y + L.position.y
            }
          });
        else {
          let z = !1;
          for (let I = 0; I < T.length; I++) {
            const N = T[I], B = s(N.source);
            if (B.parentId || B.type === "loopNode") {
              z = !0;
              break;
            }
          }
          z || r.updateNode(E.id, {
            parentId: void 0,
            position: {
              x: E.position.x + L.position.x,
              y: E.position.y + L.position.y
            }
          });
        }
      }
    });
  }, v = ($, S) => {
    console.log("onconnectstart: ", $, S);
  }, m = ($) => {
    console.log("onconnect: ", $);
  }, b = { ...gw }, x = hr().customNodes;
  if (x)
    for (let $ of Object.keys(x))
      b[$] = af;
  var _ = Pw(), h = X(_);
  of(h, {});
  var C = Z(h, 2);
  const p = /* @__PURE__ */ Oe(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: No.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return vd(C, xt({ nodeTypes: b }, bi, {
    class: "tinyflow-logo",
    isValidConnection: l,
    onconnectend: c,
    onconnectstart: v,
    onconnect: m,
    connectionRadius: 50,
    ondelete: f,
    onclick: ($) => {
      const S = $.target;
      S.classList.contains("svelte-flow__edge-interaction") || S.classList.contains("panel-content") || S.closest(".panel-content") || G(o, !1);
    },
    get defaultEdgeOptions() {
      return g(p);
    },
    $$events: {
      drop: i,
      dragover: a,
      edgeclick: () => {
        G(o, !0);
      }
    },
    children: ($, S) => {
      var E = Mw(), T = Ee(E);
      Cd(T, {});
      var L = Z(T, 2);
      bd(L, {});
      var z = Z(L, 2);
      kd(z, {});
      var I = Z(z, 2);
      {
        var N = (B) => {
          Go(B, {
            children: (M, H) => {
              var k = Sw(), P = Z(X(k), 4), O = X(P);
              At(O, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                oninput: (A) => {
                }
              }), K(P), K(k), V(M, k);
            },
            $$slots: { default: !0 }
          });
        };
        Me(I, (B) => {
          g(o) && B(N);
        });
      }
      V($, E);
    },
    $$slots: { default: !0 }
  })), K(_), V(e, _), ve({
    get onInit() {
      return n();
    },
    set onInit($) {
      n($), y();
    }
  });
}
se(sf, { onInit: {} }, [], [], !0);
function Hw(e, t) {
  fe(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7), { data: o } = n();
  return bi.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Fr("tinyflow_options", n()), gd(e, {
    fitView: !0,
    children: (a, i) => {
      sf(a, {
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
customElements.define("tinyflow-component", se(Hw, { options: {}, onInit: {} }, [], [], !1));
const Ow = cf(({ data: e, style: t, className: n }, r) => {
  const o = Ks(null), a = Ks(null);
  return df(r, () => ({
    getData: () => a.current ? a.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  })), ff(() => {
    if (o.current) {
      const i = new Lm({
        element: o.current,
        data: e
      });
      return a.current = i, () => {
        i.destroy(), a.current = null;
      };
    }
  }, [e]), /* @__PURE__ */ pf.jsx("div", { ref: o, style: { height: "600px", ...t }, className: n });
});
export {
  Ow as Tinyflow
};
//# sourceMappingURL=index.js.map
