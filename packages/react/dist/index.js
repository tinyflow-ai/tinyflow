import ru, { forwardRef as cf, useRef as Xs, useImperativeHandle as df, useEffect as ff } from "react";
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
var js;
function vf() {
  if (js) return fo;
  js = 1;
  var e = ru, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var Ks;
function gf() {
  return Ks || (Ks = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ru, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function x(z) {
      if (z === null || typeof z != "object")
        return null;
      var U = y && z[y] || z[b];
      return typeof U == "function" ? U : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(z) {
      {
        for (var U = arguments.length, ge = new Array(U > 1 ? U - 1 : 0), Me = 1; Me < U; Me++)
          ge[Me - 1] = arguments[Me];
        _("error", z, ge);
      }
    }
    function _(z, U, ge) {
      {
        var Me = $.ReactDebugCurrentFrame, Z = Me.getStackAddendum();
        Z !== "" && (U += "%s", ge = ge.concat([Z]));
        var nt = ge.map(function(Ye) {
          return String(Ye);
        });
        nt.unshift("Warning: " + U), Function.prototype.apply.call(console[z], console, nt);
      }
    }
    var w = !1, C = !1, E = !1, P = !1, O = !1, V;
    V = Symbol.for("react.module.reference");
    function H(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === a || O || z === o || z === u || z === c || P || z === v || w || C || E || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === d || z.$$typeof === i || z.$$typeof === s || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === V || z.getModuleId !== void 0));
    }
    function D(z, U, ge) {
      var Me = z.displayName;
      if (Me)
        return Me;
      var Z = U.displayName || U.name || "";
      return Z !== "" ? ge + "(" + Z + ")" : ge;
    }
    function I(z) {
      return z.displayName || "Context";
    }
    function R(z) {
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
            var U = z;
            return I(U) + ".Consumer";
          case i:
            var ge = z;
            return I(ge._context) + ".Provider";
          case l:
            return D(z, z.render, "ForwardRef");
          case d:
            var Me = z.displayName || null;
            return Me !== null ? Me : R(z.type) || "Memo";
          case f: {
            var Z = z, nt = Z._payload, Ye = Z._init;
            try {
              return R(Ye(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, T = 0, k, M, N, A, W, K, q;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function Q() {
      {
        if (T === 0) {
          k = console.log, M = console.info, N = console.warn, A = console.error, W = console.group, K = console.groupCollapsed, q = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: re,
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
        T++;
      }
    }
    function X() {
      {
        if (T--, T === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, z, {
              value: k
            }),
            info: S({}, z, {
              value: M
            }),
            warn: S({}, z, {
              value: N
            }),
            error: S({}, z, {
              value: A
            }),
            group: S({}, z, {
              value: W
            }),
            groupCollapsed: S({}, z, {
              value: K
            }),
            groupEnd: S({}, z, {
              value: q
            })
          });
        }
        T < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = $.ReactCurrentDispatcher, $e;
    function Ce(z, U, ge) {
      {
        if ($e === void 0)
          try {
            throw Error();
          } catch (Z) {
            var Me = Z.stack.trim().match(/\n( *(at )?)/);
            $e = Me && Me[1] || "";
          }
        return `
` + $e + z;
      }
    }
    var me = !1, de;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      de = new oe();
    }
    function we(z, U) {
      if (!z || me)
        return "";
      {
        var ge = de.get(z);
        if (ge !== void 0)
          return ge;
      }
      var Me;
      me = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = ae.current, ae.current = null, Q();
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
            Reflect.construct(z, [], Ye);
          } else {
            try {
              Ye.call();
            } catch (_t) {
              Me = _t;
            }
            z.call(Ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Me = _t;
          }
          z();
        }
      } catch (_t) {
        if (_t && Me && typeof _t.stack == "string") {
          for (var Ae = _t.stack.split(`
`), Et = Me.stack.split(`
`), dt = Ae.length - 1, gt = Et.length - 1; dt >= 1 && gt >= 0 && Ae[dt] !== Et[gt]; )
            gt--;
          for (; dt >= 1 && gt >= 0; dt--, gt--)
            if (Ae[dt] !== Et[gt]) {
              if (dt !== 1 || gt !== 1)
                do
                  if (dt--, gt--, gt < 0 || Ae[dt] !== Et[gt]) {
                    var Wt = `
` + Ae[dt].replace(" at new ", " at ");
                    return z.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", z.displayName)), typeof z == "function" && de.set(z, Wt), Wt;
                  }
                while (dt >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        me = !1, ae.current = nt, X(), Error.prepareStackTrace = Z;
      }
      var er = z ? z.displayName || z.name : "", tr = er ? Ce(er) : "";
      return typeof z == "function" && de.set(z, tr), tr;
    }
    function qe(z, U, ge) {
      return we(z, !1);
    }
    function Xe(z) {
      var U = z.prototype;
      return !!(U && U.isReactComponent);
    }
    function Ie(z, U, ge) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return we(z, Xe(z));
      if (typeof z == "string")
        return Ce(z);
      switch (z) {
        case u:
          return Ce("Suspense");
        case c:
          return Ce("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return qe(z.render);
          case d:
            return Ie(z.type, U, ge);
          case f: {
            var Me = z, Z = Me._payload, nt = Me._init;
            try {
              return Ie(nt(Z), U, ge);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Fe = {}, Re = $.ReactDebugCurrentFrame;
    function ce(z) {
      if (z) {
        var U = z._owner, ge = Ie(z.type, z._source, U ? U.type : null);
        Re.setExtraStackFrame(ge);
      } else
        Re.setExtraStackFrame(null);
    }
    function ue(z, U, ge, Me, Z) {
      {
        var nt = Function.call.bind(ee);
        for (var Ye in z)
          if (nt(z, Ye)) {
            var Ae = void 0;
            try {
              if (typeof z[Ye] != "function") {
                var Et = Error((Me || "React class") + ": " + ge + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Et.name = "Invariant Violation", Et;
              }
              Ae = z[Ye](U, Ye, Me, ge, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              Ae = dt;
            }
            Ae && !(Ae instanceof Error) && (ce(Z), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", ge, Ye, typeof Ae), ce(null)), Ae instanceof Error && !(Ae.message in Fe) && (Fe[Ae.message] = !0, ce(Z), h("Failed %s type: %s", ge, Ae.message), ce(null));
          }
      }
    }
    var Ee = Array.isArray;
    function De(z) {
      return Ee(z);
    }
    function Ge(z) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, ge = U && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return ge;
      }
    }
    function yt(z) {
      try {
        return at(z), !1;
      } catch {
        return !0;
      }
    }
    function at(z) {
      return "" + z;
    }
    function te(z) {
      if (yt(z))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(z)), at(z);
    }
    var Le = $.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Jt, Rt;
    function cn(z) {
      if (ee.call(z, "ref")) {
        var U = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function Ve(z) {
      if (ee.call(z, "key")) {
        var U = Object.getOwnPropertyDescriptor(z, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function lt(z, U) {
      typeof z.ref == "string" && Le.current;
    }
    function xe(z, U) {
      {
        var ge = function() {
          Jt || (Jt = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: ge,
          configurable: !0
        });
      }
    }
    function ct(z, U) {
      {
        var ge = function() {
          Rt || (Rt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        ge.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: ge,
          configurable: !0
        });
      }
    }
    var vt = function(z, U, ge, Me, Z, nt, Ye) {
      var Ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: U,
        ref: ge,
        props: Ye,
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
        value: Me
      }), Object.defineProperty(Ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
    };
    function Zt(z, U, ge, Me, Z) {
      {
        var nt, Ye = {}, Ae = null, Et = null;
        ge !== void 0 && (te(ge), Ae = "" + ge), Ve(U) && (te(U.key), Ae = "" + U.key), cn(U) && (Et = U.ref, lt(U, Z));
        for (nt in U)
          ee.call(U, nt) && !ye.hasOwnProperty(nt) && (Ye[nt] = U[nt]);
        if (z && z.defaultProps) {
          var dt = z.defaultProps;
          for (nt in dt)
            Ye[nt] === void 0 && (Ye[nt] = dt[nt]);
        }
        if (Ae || Et) {
          var gt = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          Ae && xe(Ye, gt), Et && ct(Ye, gt);
        }
        return vt(z, Ae, Et, Z, Me, Le.current, Ye);
      }
    }
    var In = $.ReactCurrentOwner, St = $.ReactDebugCurrentFrame;
    function pt(z) {
      if (z) {
        var U = z._owner, ge = Ie(z.type, z._source, U ? U.type : null);
        St.setExtraStackFrame(ge);
      } else
        St.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Vt(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function wt() {
      {
        if (In.current) {
          var z = R(In.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function co(z) {
      return "";
    }
    var Sn = {};
    function Qt(z) {
      {
        var U = wt();
        if (!U) {
          var ge = typeof z == "string" ? z : z.displayName || z.name;
          ge && (U = `

Check the top-level render call using <` + ge + ">.");
        }
        return U;
      }
    }
    function mr(z, U) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var ge = Qt(U);
        if (Sn[ge])
          return;
        Sn[ge] = !0;
        var Me = "";
        z && z._owner && z._owner !== In.current && (Me = " It was passed a child from " + R(z._owner.type) + "."), pt(z), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ge, Me), pt(null);
      }
    }
    function yr(z, U) {
      {
        if (typeof z != "object")
          return;
        if (De(z))
          for (var ge = 0; ge < z.length; ge++) {
            var Me = z[ge];
            Vt(Me) && mr(Me, U);
          }
        else if (Vt(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var Z = x(z);
          if (typeof Z == "function" && Z !== z.entries)
            for (var nt = Z.call(z), Ye; !(Ye = nt.next()).done; )
              Vt(Ye.value) && mr(Ye.value, U);
        }
      }
    }
    function Nr(z) {
      {
        var U = z.type;
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
          ue(ge, z.props, "prop", Me, z);
        } else if (U.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var Z = R(U);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ma(z) {
      {
        for (var U = Object.keys(z.props), ge = 0; ge < U.length; ge++) {
          var Me = U[ge];
          if (Me !== "children" && Me !== "key") {
            pt(z), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), pt(null);
            break;
          }
        }
        z.ref !== null && (pt(z), h("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    var ti = {};
    function ni(z, U, ge, Me, Z, nt) {
      {
        var Ye = H(z);
        if (!Ye) {
          var Ae = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = co();
          Et ? Ae += Et : Ae += wt();
          var dt;
          z === null ? dt = "null" : De(z) ? dt = "array" : z !== void 0 && z.$$typeof === t ? (dt = "<" + (R(z.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof z, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, Ae);
        }
        var gt = Zt(z, U, ge, Z, nt);
        if (gt == null)
          return gt;
        if (Ye) {
          var Wt = U.children;
          if (Wt !== void 0)
            if (Me)
              if (De(Wt)) {
                for (var er = 0; er < Wt.length; er++)
                  yr(Wt[er], z);
                Object.freeze && Object.freeze(Wt);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(Wt, z);
        }
        if (ee.call(U, "key")) {
          var tr = R(z), _t = Object.keys(U).filter(function(oi) {
            return oi !== "key";
          }), Dr = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ti[tr + Dr]) {
            var ri = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Dr, tr, ri, tr), ti[tr + Dr] = !0;
          }
        }
        return z === r ? ma(gt) : Nr(gt), gt;
      }
    }
    function ya(z, U, ge) {
      return ni(z, U, ge, !0);
    }
    function wa(z, U, ge) {
      return ni(z, U, ge, !1);
    }
    var ba = wa, xa = ya;
    vo.Fragment = r, vo.jsx = ba, vo.jsxs = xa;
  }()), vo;
}
var Fs;
function hf() {
  return Fs || (Fs = 1, process.env.NODE_ENV === "production" ? ii.exports = vf() : ii.exports = gf()), ii.exports;
}
var pf = hf(), mf = Object.defineProperty, ou = (e) => {
  throw TypeError(e);
}, yf = (e, t, n) => t in e ? mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jt = (e, t, n) => yf(e, typeof t != "symbol" ? t + "" : t, n), is = (e, t, n) => t.has(e) || ou("Cannot " + n), mt = (e, t, n) => (is(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ir = (e, t, n) => t.has(e) ? ou("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xi = (e, t, n, r) => (is(e, t, "write to private field"), t.set(e, n), n), wf = (e, t, n) => (is(e, t, "access private method"), n);
const bf = "5";
var qs;
typeof window < "u" && ((qs = window.__svelte ?? (window.__svelte = {})).v ?? (qs.v = /* @__PURE__ */ new Set())).add(bf);
let oo = !1, xf = !1;
function $f() {
  oo = !0;
}
$f();
const as = 1, ss = 2, iu = 4, _f = 8, Cf = 16, kf = 1, Sf = 2, au = 4, Ef = 8, Pf = 16, su = 1, Mf = 2, ls = "[", us = "[!", cs = "]", Zr = {}, Yt = Symbol(), lu = "http://www.w3.org/2000/svg", Of = !1, wn = 2, uu = 4, Fi = 8, ds = 16, Gn = 32, io = 64, $i = 128, vn = 256, _i = 512, Ot = 1024, Un = 2048, Or = 4096, Yn = 8192, qi = 16384, Tf = 32768, ao = 65536, Vf = 1 << 17, Hf = 1 << 19, cu = 1 << 20, sr = Symbol("$state"), fs = Symbol("legacy props"), zf = Symbol("");
var Zo = Array.isArray, Nf = Array.prototype.indexOf, vs = Array.from, Ci = Object.keys, ko = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, du = Object.getOwnPropertyDescriptors, Df = Object.prototype, Lf = Array.prototype, gs = Object.getPrototypeOf;
function go(e) {
  return typeof e == "function";
}
const $t = () => {
};
function Af(e) {
  return e();
}
function So(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const If = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Eo = [], Po = [];
function fu() {
  var e = Eo;
  Eo = [], So(e);
}
function vu() {
  var e = Po;
  Po = [], So(e);
}
function Bo(e) {
  Eo.length === 0 && queueMicrotask(fu), Eo.push(e);
}
function Rf(e) {
  Po.length === 0 && If(vu), Po.push(e);
}
function Gs() {
  Eo.length > 0 && fu(), Po.length > 0 && vu();
}
function gu(e) {
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
function Wf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function jf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Kf() {
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
function Kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: gu,
    rv: 0,
    wv: 0
  };
  return n;
}
function _r(e) {
  return /* @__PURE__ */ hu(Kt(e));
}
// @__NO_SIDE_EFFECTS__
function Wo(e, t = !1) {
  var n;
  const r = Kt(e);
  return t || (r.equals = ps), oo && Je !== null && Je.l !== null && ((n = Je.l).s ?? (n.s = [])).push(r), r;
}
function se(e, t = !1) {
  return /* @__PURE__ */ hu(/* @__PURE__ */ Wo(e, t));
}
// @__NO_SIDE_EFFECTS__
function hu(e) {
  return ot !== null && !mn && ot.f & wn && (En === null ? Qf([e]) : En.push(e)), e;
}
function G(e, t) {
  return ot !== null && !mn && ta() && ot.f & (wn | ds) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (En === null || !En.includes(e)) && Gf(), za(e, t);
}
function za(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = _u(), pu(e, Un), ta() && Qe !== null && Qe.f & Ot && !(Qe.f & (Gn | io)) && (Zn === null ? ev([e]) : Zn.push(e))), t;
}
function Us(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function pu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ta(), o = n.length, a = 0; a < o; a++) {
      var i = n[a], s = i.f;
      s & Un || !r && i === Qe || (bn(i, t), s & (Ot | vn) && (s & wn ? pu(
        /** @type {Derived} */
        i,
        Or
      ) : Qi(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  var t = wn | Un, n = ot !== null && ot.f & wn ? (
    /** @type {Derived} */
    ot
  ) : null;
  return Qe === null || n !== null && n.f & vn ? t |= vn : Qe.f |= cu, {
    ctx: Je,
    deps: null,
    effects: null,
    equals: gu,
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
  const t = /* @__PURE__ */ ze(e);
  return t.equals = ps, t;
}
function mu(e) {
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
    mu(e), t = ku(e);
  } finally {
    fr(n);
  }
  return t;
}
function yu(e) {
  var t = Jf(e), n = (ir || e.f & vn) && e.deps !== null ? Or : Ot;
  bn(e, n), e.equals(t) || (e.v = t, e.wv = _u());
}
function Gi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let He = !1;
function rn(e) {
  He = e;
}
let We;
function Dt(e) {
  if (e === null)
    throw Gi(), Zr;
  return We = e;
}
function On() {
  return Dt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Nn(We)
  );
}
function Y(e) {
  if (He) {
    if (/* @__PURE__ */ Nn(We) !== null)
      throw Gi(), Zr;
    We = e;
  }
}
function Ne(e = 1) {
  if (He) {
    for (var t = e, n = We; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Nn(n);
    We = n;
  }
}
function Na() {
  for (var e = 0, t = We; ; ) {
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
      /* @__PURE__ */ Nn(t)
    );
    t.remove(), t = r;
  }
}
function tn(e, t = null, n) {
  if (typeof e != "object" || e === null || sr in e)
    return e;
  const r = gs(e);
  if (r !== Df && r !== Lf)
    return e;
  var o = /* @__PURE__ */ new Map(), a = Zo(e), i = Kt(0);
  a && o.set("length", Kt(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Kf();
        var d = o.get(u);
        return d === void 0 ? (d = Kt(c.value), o.set(u, d)) : G(d, tn(c.value, s)), !0;
      },
      deleteProperty(l, u) {
        var c = o.get(u);
        if (c === void 0)
          u in l && o.set(u, Kt(Yt));
        else {
          if (a && typeof u == "string") {
            var d = (
              /** @type {Source<number>} */
              o.get("length")
            ), f = Number(u);
            Number.isInteger(f) && f < d.v && G(d, f);
          }
          G(c, Yt), Js(i);
        }
        return !0;
      },
      get(l, u, c) {
        var d;
        if (u === sr)
          return e;
        var f = o.get(u), v = u in l;
        if (f === void 0 && (!v || (d = Xn(l, u)) != null && d.writable) && (f = Kt(tn(v ? l[u] : Yt, s)), o.set(u, f)), f !== void 0) {
          var y = g(f);
          return y === Yt ? void 0 : y;
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
        if (u === sr)
          return !0;
        var d = o.get(u), f = d !== void 0 && d.v !== Yt || Reflect.has(l, u);
        if (d !== void 0 || Qe !== null && (!f || (c = Xn(l, u)) != null && c.writable)) {
          d === void 0 && (d = Kt(f ? tn(l[u], s) : Yt), o.set(u, d));
          var v = g(d);
          if (v === Yt)
            return !1;
        }
        return f;
      },
      set(l, u, c, d) {
        var f, v = o.get(u), y = u in l;
        if (a && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var x = o.get(b + "");
            x !== void 0 ? G(x, Yt) : b in l && (x = Kt(Yt), o.set(b + "", x));
          }
        v === void 0 ? (!y || (f = Xn(l, u)) != null && f.writable) && (v = Kt(void 0), G(v, tn(c, s)), o.set(u, v)) : (y = v.v !== Yt, G(v, tn(c, s)));
        var $ = Reflect.getOwnPropertyDescriptor(l, u);
        if ($ != null && $.set && $.set.call(d, c), !y) {
          if (a && typeof u == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), _ = Number(u);
            Number.isInteger(_) && _ >= h.v && G(h, _ + 1);
          }
          Js(i);
        }
        return !0;
      },
      ownKeys(l) {
        g(i);
        var u = Reflect.ownKeys(l).filter((f) => {
          var v = o.get(f);
          return v === void 0 || v.v !== Yt;
        });
        for (var [c, d] of o)
          d.v !== Yt && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        Ff();
      }
    }
  );
}
function Js(e, t = 1) {
  G(e, e.v + t);
}
var Xt, wu, bu, xu;
function Da() {
  if (Xt === void 0) {
    Xt = window, wu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    bu = Xn(t, "firstChild").get, xu = Xn(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  return bu.call(e);
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  return xu.call(e);
}
function j(e, t) {
  if (!He)
    return /* @__PURE__ */ Nt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Nt(We)
  );
  if (n === null)
    n = We.appendChild(Kn());
  else if (t && n.nodeType !== 3) {
    var r = Kn();
    return n == null || n.before(r), Dt(r), r;
  }
  return Dt(n), n;
}
function ke(e, t) {
  if (!He) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Nt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Nn(n) : n;
  }
  return We;
}
function B(e, t = 1, n = !1) {
  let r = He ? We : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Nn(r);
  if (!He)
    return r;
  var a = r == null ? void 0 : r.nodeType;
  if (n && a !== 3) {
    var i = Kn();
    return r === null ? o == null || o.after(i) : r.before(i), Dt(i), i;
  }
  return Dt(r), /** @type {TemplateNode} */
  r;
}
function ms(e) {
  e.textContent = "";
}
let vi = !1, ki = !1, Si = null, xr = !1, ys = !1;
function Qs(e) {
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
let En = null;
function Qf(e) {
  En = e;
}
let Ht = null, en = 0, Zn = null;
function ev(e) {
  Zn = e;
}
let $u = 1, Ei = 0, ir = !1;
function _u() {
  return ++$u;
}
function so(e) {
  var t, n = e.f;
  if (n & Un)
    return !0;
  if (n & Or) {
    var r = e.deps, o = (n & vn) !== 0;
    if (r !== null) {
      var a, i, s = (n & _i) !== 0, l = o && Qe !== null && !ir, u = r.length;
      if (s || l) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((t = i == null ? void 0 : i.reactions) != null && t.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        s && (c.f ^= _i), l && d !== null && !(d.f & vn) && (c.f ^= vn);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], so(
          /** @type {Derived} */
          i
        ) && yu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || Qe !== null && !ir) && bn(e, Ot);
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
      ) : t === a && (n ? bn(a, Un) : a.f & Ot && bn(a, Or), Qi(
        /** @type {Effect} */
        a
      ));
    }
}
function ku(e) {
  var t, n = Ht, r = en, o = Zn, a = ot, i = ir, s = En, l = Je, u = mn, c = e.f;
  Ht = /** @type {null | Value[]} */
  null, en = 0, Zn = null, ir = (c & vn) !== 0 && (mn || !xr || ot === null), ot = c & (Gn | io) ? null : e, En = null, el(e.ctx), mn = !1, Ei++;
  try {
    var d = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Ht !== null) {
      var v;
      if (Pi(e, en), f !== null && en > 0)
        for (f.length = en + Ht.length, v = 0; v < Ht.length; v++)
          f[en + v] = Ht[v];
      else
        e.deps = f = Ht;
      if (!ir)
        for (v = en; v < f.length; v++)
          ((t = f[v]).reactions ?? (t.reactions = [])).push(e);
    } else f !== null && en < f.length && (Pi(e, en), f.length = en);
    if (ta() && Zn !== null && !mn && f !== null && !(e.f & (wn | Or | Un)))
      for (v = 0; v < /** @type {Source[]} */
      Zn.length; v++)
        Cu(
          Zn[v],
          /** @type {Effect} */
          e
        );
    return a !== null && Ei++, d;
  } finally {
    Ht = n, en = r, Zn = o, ot = a, ir = i, En = s, el(l), mn = u;
  }
}
function rv(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & wn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ht === null || !Ht.includes(t)) && (bn(t, Or), t.f & (vn | _i) || (t.f ^= _i), mu(
    /** @type {Derived} **/
    t
  ), Pi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Pi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      rv(e, n[r]);
}
function Ji(e) {
  var t = e.f;
  if (!(t & qi)) {
    bn(e, Ot);
    var n = Qe, r = Je, o = xr;
    Qe = e, xr = !0;
    try {
      t & ds ? fv(e) : Ou(e), Mu(e);
      var a = ku(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = $u;
      var i = e.deps, s;
      Of && xf && e.f & Un;
    } catch (l) {
      Ui(l, e, n, r || e.ctx);
    } finally {
      xr = o, Qe = n;
    }
  }
}
function ov() {
  try {
    Yf();
  } catch (e) {
    if (Si !== null)
      Ui(e, Si, null);
    else
      throw e;
  }
}
function Su() {
  var e = xr;
  try {
    var t = 0;
    for (xr = !0; $o.length > 0; ) {
      t++ > 1e3 && ov();
      var n = $o, r = n.length;
      $o = [];
      for (var o = 0; o < r; o++) {
        var a = n[o];
        a.f & Ot || (a.f ^= Ot);
        var i = av(a);
        iv(i);
      }
    }
  } finally {
    ki = !1, xr = e, Si = null;
  }
}
function iv(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (qi | Yn)))
        try {
          so(r) && (Ji(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Tu(r) : r.fn = null));
        } catch (o) {
          Ui(o, r, null, r.ctx);
        }
    }
}
function Qi(e) {
  ki || (ki = !0, queueMicrotask(Su));
  for (var t = Si = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (io | Gn)) {
      if (!(n & Ot)) return;
      t.f ^= Ot;
    }
  }
  $o.push(t);
}
function av(e) {
  for (var t = [], n = e.first; n !== null; ) {
    var r = n.f, o = (r & Gn) !== 0, a = o && (r & Ot) !== 0;
    if (!a && !(r & Yn)) {
      if (r & uu)
        t.push(n);
      else if (o)
        n.f ^= Ot;
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
function p(e) {
  var t;
  for (Gs(); $o.length > 0; )
    ki = !0, Su(), Gs();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & wn) !== 0;
  if (ot !== null && !mn) {
    En !== null && En.includes(e) && qf();
    var r = ot.deps;
    e.rv < Ei && (e.rv = Ei, Ht === null && r !== null && r[en] === e ? en++ : Ht === null ? Ht = [e] : (!ir || !Ht.includes(e)) && Ht.push(e));
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
  e, so(o) && yu(o)), e.v;
}
function Tn(e) {
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
      La(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && sr in n && La(n);
      }
  }
}
function La(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        La(e[r], t);
      } catch {
      }
    const n = gs(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = du(n);
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
  Qe === null && ot === null && Wf(), ot !== null && ot.f & vn && Qe === null && Bf(), ys && Zf();
}
function lv(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Tr(e, t, n, r = !0) {
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
      Ji(i), i.f |= Tf;
    } catch (u) {
      throw gn(i), u;
    }
  else t !== null && Qi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (cu | $i)) === 0;
  if (!s && !o && r && (a !== null && lv(i, a), ot !== null && ot.f & wn)) {
    var l = (
      /** @type {Derived} */
      ot
    );
    (l.effects ?? (l.effects = [])).push(i);
  }
  return i;
}
function Pu(e) {
  const t = Tr(Fi, null, !1);
  return bn(t, Ot), t.teardown = e, t;
}
function vr(e) {
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
    var r = nn(e);
    return r;
  }
}
function uv(e) {
  return Eu(), lo(e);
}
function cv(e) {
  const t = Tr(io, e, !0);
  return () => {
    gn(t);
  };
}
function dv(e) {
  const t = Tr(io, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Kr(t, () => {
      gn(t), r(void 0);
    }) : (gn(t), r(void 0));
  });
}
function nn(e) {
  return Tr(uu, e, !1);
}
function pe(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Je
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = lo(() => {
    e(), !r.ran && (r.ran = !0, G(n.l.r2, !0), Tn(t));
  });
}
function Ct() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Je
  );
  lo(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Ot && bn(n, Or), so(n) && Ji(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function lo(e) {
  return Tr(Fi, e, !0);
}
function Te(e, t = [], n = ze) {
  const r = t.map(n);
  return Vr(() => e(...r.map(g)));
}
function Vr(e, t = 0) {
  return Tr(Fi | ds | t, e, !0);
}
function Fn(e, t = !0) {
  return Tr(Fi | Gn, e, !0, t);
}
function Mu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ys, r = ot;
    Qs(!0), dr(null);
    try {
      t.call(null);
    } finally {
      Qs(n), dr(r);
    }
  }
}
function Ou(e, t = !1) {
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
  if ((t || e.f & Hf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var a = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nn(r)
      );
      r.remove(), r = a;
    }
    n = !0;
  }
  Ou(e, t && !n), Pi(e, 0), bn(e, qi);
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
function Kr(e, t) {
  var n = [];
  ws(e, n, !0), Vu(n, () => {
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
function ws(e, t, n) {
  if (!(e.f & Yn)) {
    if (e.f ^= Yn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, a = (r.f & ao) !== 0 || (r.f & Gn) !== 0;
      ws(r, t, a ? n : !1), r = o;
    }
  }
}
function Mo(e) {
  Hu(e, !0);
}
function Hu(e, t) {
  if (e.f & Yn) {
    e.f ^= Yn, e.f & Ot || (e.f ^= Ot), so(e) && (bn(e, Un), Qi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & ao) !== 0 || (n.f & Gn) !== 0;
      Hu(n, o ? t : !1), n = r;
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
function el(e) {
  Je = e;
}
function Cr(e) {
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
    r2: Kt(!1)
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
          fr(a.effect), dr(a.reaction), nn(a.fn);
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
function _v(e) {
  return $v.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Cv(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Bo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function kv(e) {
  He && /* @__PURE__ */ Nt(e) !== null && ms(e);
}
let tl = !1;
function Sv() {
  tl || (tl = !0, document.addEventListener(
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
function Ev(e) {
  var t = ot, n = Qe;
  dr(null), fr(null);
  try {
    return e();
  } finally {
    dr(t), fr(n);
  }
}
const zu = /* @__PURE__ */ new Set(), Aa = /* @__PURE__ */ new Set();
function Nu(e, t, n, r = {}) {
  function o(a) {
    if (r.capture || yo.call(t, a), !a.cancelBubble)
      return Ev(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Bo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ue(e, t, n, r, o) {
  var a = { capture: r, passive: o }, i = Nu(e, t, n, a);
  (t === document.body || t === window || t === document) && Pu(() => {
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
      for (var v, y = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + o];
          if (x !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Zo(x)) {
              var [$, ...h] = x;
              $.apply(i, [e, ...h]);
            } else
              x.call(i, e);
        } catch (_) {
          v ? y.push(_) : v = _;
        }
        if (e.cancelBubble || b === n || b === null)
          break;
        i = b;
      }
      if (v) {
        for (let _ of y)
          queueMicrotask(() => {
            throw _;
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
function ie(e, t) {
  var n = (t & su) !== 0, r = (t & Mf) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (He)
      return qt(We, null), We;
    o === void 0 && (o = xs(a ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Nt(o)));
    var i = (
      /** @type {TemplateNode} */
      r || wu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(i)
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
function Se(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & su) !== 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (He)
      return qt(We, null), We;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        xs(a)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Nt(s)
      );
      if (o)
        for (i = document.createDocumentFragment(); /* @__PURE__ */ Nt(l); )
          i.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Nt(l)
          );
      else
        i = /** @type {Element} */
        /* @__PURE__ */ Nt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(u)
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
function Ke(e = "") {
  if (!He) {
    var t = Kn(e + "");
    return qt(t, t), t;
  }
  var n = We;
  return n.nodeType !== 3 && (n.before(n = Kn()), Dt(n)), qt(n, n), n;
}
function st() {
  if (He)
    return qt(We, null), We;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), qt(t, n), e;
}
function L(e, t) {
  if (He) {
    Qe.nodes_end = We, On();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function an(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Du(e, t) {
  return Lu(e, t);
}
function Pv(e, t) {
  Da(), t.intro = t.intro ?? !1;
  const n = t.target, r = He, o = We;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Nt(n)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== ls); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Nn(a);
    if (!a)
      throw Zr;
    rn(!0), Dt(
      /** @type {Comment} */
      a
    ), On();
    const i = Lu(e, { ...t, anchor: a });
    if (We === null || We.nodeType !== 8 || /** @type {Comment} */
    We.data !== cs)
      throw Gi(), Zr;
    return rn(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === Zr)
      return t.recover === !1 && Xf(), Da(), ms(n), rn(!1), Du(e, t);
    throw i;
  } finally {
    rn(r), Dt(o);
  }
}
const Lr = /* @__PURE__ */ new Map();
function Lu(e, { target: t, anchor: n, props: r = {}, events: o, context: a, intro: i = !0 }) {
  Da();
  var s = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var v = d[f];
      if (!s.has(v)) {
        s.add(v);
        var y = xv(v);
        t.addEventListener(v, yo, { passive: y });
        var b = Lr.get(v);
        b === void 0 ? (document.addEventListener(v, yo, { passive: y }), Lr.set(v, 1)) : Lr.set(v, b + 1);
      }
    }
  };
  l(vs(zu)), Aa.add(l);
  var u = void 0, c = dv(() => {
    var d = n ?? t.appendChild(Kn());
    return Fn(() => {
      if (a) {
        fe({});
        var f = (
          /** @type {ComponentContext} */
          Je
        );
        f.c = a;
      }
      o && (r.$$events = o), He && qt(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, He && (Qe.nodes_end = We), a && ve();
    }), () => {
      var f;
      for (var v of s) {
        t.removeEventListener(v, yo);
        var y = (
          /** @type {number} */
          Lr.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, yo), Lr.delete(v)) : Lr.set(v, y);
      }
      Aa.delete(l), d !== n && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Ia.set(u, c), u;
}
let Ia = /* @__PURE__ */ new WeakMap();
function Mv(e, t) {
  const n = Ia.get(e);
  return n ? (Ia.delete(e), n(t)) : Promise.resolve();
}
function Pe(e, t, [n, r] = [0, 0]) {
  He && n === 0 && On();
  var o = e, a = null, i = null, s = Yt, l = n > 0 ? ao : 0, u = !1;
  const c = (f, v = !0) => {
    u = !0, d(v, f);
  }, d = (f, v) => {
    if (s === (s = f)) return;
    let y = !1;
    if (He && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === ls ? r = 0 : x === us ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = s ? 1 / 0 : -1));
      }
      const b = r > n;
      !!s === b && (o = Na(), Dt(o), rn(!1), y = !0, r = -1);
    }
    s ? (a ? Mo(a) : v && (a = Fn(() => v(o))), i && Kr(i, () => {
      i = null;
    })) : (i ? Mo(i) : v && (i = Fn(() => v(o, [n + 1, r]))), a && Kr(a, () => {
      a = null;
    })), y && rn(!0);
  };
  Vr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), He && (o = We);
}
function Oo(e, t) {
  return t;
}
function Ov(e, t, n, r) {
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
  Vu(o, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      s || (r.delete(c.k), rr(e, c.prev, c.next)), gn(c.e, !s);
    }
  });
}
function Gt(e, t, n, r, o, a = null) {
  var i = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & iu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    i = He ? Dt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Nt(u)
    ) : u.appendChild(Kn());
  }
  He && On();
  var c = null, d = !1, f = /* @__PURE__ */ be(() => {
    var v = n();
    return Zo(v) ? v : v == null ? [] : vs(v);
  });
  Vr(() => {
    var v = g(f), y = v.length;
    if (d && y === 0)
      return;
    d = y === 0;
    let b = !1;
    if (He) {
      var x = (
        /** @type {Comment} */
        i.data === us
      );
      x !== (y === 0) && (i = Na(), Dt(i), rn(!1), b = !0);
    }
    if (He) {
      for (var $ = null, h, _ = 0; _ < y; _++) {
        if (We.nodeType === 8 && /** @type {Comment} */
        We.data === cs) {
          i = /** @type {Comment} */
          We, b = !0, rn(!1);
          break;
        }
        var w = v[_], C = r(w, _);
        h = Au(
          We,
          s,
          $,
          null,
          w,
          C,
          _,
          o,
          t,
          n
        ), s.items.set(C, h), $ = h;
      }
      y > 0 && Dt(Na());
    }
    He || Tv(v, s, i, o, t, r, n), a !== null && (y === 0 ? c ? Mo(c) : c = Fn(() => a(i)) : c !== null && Kr(c, () => {
      c = null;
    })), b && rn(!0), g(f);
  }), He && (i = We);
}
function Tv(e, t, n, r, o, a, i) {
  var s, l, u, c, d = (o & _f) !== 0, f = (o & (as | ss)) !== 0, v = e.length, y = t.items, b = t.first, x = b, $, h = null, _, w = [], C = [], E, P, O, V;
  if (d)
    for (V = 0; V < v; V += 1)
      E = e[V], P = a(E, V), O = y.get(P), O !== void 0 && ((s = O.a) == null || s.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(O));
  for (V = 0; V < v; V += 1) {
    if (E = e[V], P = a(E, V), O = y.get(P), O === void 0) {
      var H = x ? (
        /** @type {TemplateNode} */
        x.e.nodes_start
      ) : n;
      h = Au(
        H,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        P,
        V,
        r,
        o,
        i
      ), y.set(P, h), w = [], C = [], x = h.next;
      continue;
    }
    if (f && Vv(O, E, V, o), O.e.f & Yn && (Mo(O.e), d && ((l = O.a) == null || l.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(O))), O !== x) {
      if ($ !== void 0 && $.has(O)) {
        if (w.length < C.length) {
          var D = C[0], I;
          h = D.prev;
          var R = w[0], S = w[w.length - 1];
          for (I = 0; I < w.length; I += 1)
            nl(w[I], D, n);
          for (I = 0; I < C.length; I += 1)
            $.delete(C[I]);
          rr(t, R.prev, S.next), rr(t, h, R), rr(t, S, D), x = D, h = S, V -= 1, w = [], C = [];
        } else
          $.delete(O), nl(O, x, n), rr(t, O.prev, O.next), rr(t, O, h === null ? t.first : h.next), rr(t, h, O), h = O;
        continue;
      }
      for (w = [], C = []; x !== null && x.k !== P; )
        x.e.f & Yn || ($ ?? ($ = /* @__PURE__ */ new Set())).add(x), C.push(x), x = x.next;
      if (x === null)
        continue;
      O = x;
    }
    w.push(O), h = O, x = O.next;
  }
  if (x !== null || $ !== void 0) {
    for (var T = $ === void 0 ? [] : vs($); x !== null; )
      x.e.f & Yn || T.push(x), x = x.next;
    var k = T.length;
    if (k > 0) {
      var M = o & iu && v === 0 ? n : null;
      if (d) {
        for (V = 0; V < k; V += 1)
          (u = T[V].a) == null || u.measure();
        for (V = 0; V < k; V += 1)
          (c = T[V].a) == null || c.fix();
      }
      Ov(t, T, M, y);
    }
  }
  d && Bo(() => {
    var N;
    if (_ !== void 0)
      for (O of _)
        (N = O.a) == null || N.apply();
  }), Qe.first = t.first && t.first.e, Qe.last = h && h.e;
}
function Vv(e, t, n, r) {
  r & as && za(e.v, t), r & ss ? za(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Au(e, t, n, r, o, a, i, s, l, u) {
  var c = (l & as) !== 0, d = (l & Cf) === 0, f = c ? d ? /* @__PURE__ */ Wo(o) : Kt(o) : o, v = l & ss ? Kt(i) : i, y = {
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
    return y.e = Fn(() => s(e, f, v, u), He), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? t.first = y : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function nl(e, t, n) {
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
      /* @__PURE__ */ Nn(a)
    );
    o.before(a), a = i;
  }
}
function rr(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function $s(e, t, n, r, o) {
  var a = e, i = "", s;
  Vr(() => {
    if (i === (i = t() ?? "")) {
      He && On();
      return;
    }
    s !== void 0 && (gn(s), s = void 0), i !== "" && (s = Fn(() => {
      if (He) {
        We.data;
        for (var l = On(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ Nn(l);
        if (l === null)
          throw Gi(), Zr;
        qt(We, u), a = Dt(l);
        return;
      }
      var c = i + "", d = xs(c);
      qt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Nt(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function Mt(e, t, n, r, o) {
  var a;
  He && On();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function Hv(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function kr(e, t, ...n) {
  var r = e, o = $t, a;
  Vr(() => {
    o !== (o = t()) && (a && (gn(a), a = null), a = Fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, ao), He && (r = We);
}
function Iu(e, t, n) {
  He && On();
  var r = e, o, a;
  Vr(() => {
    o !== (o = t()) && (a && (Kr(a), a = null), o && (a = Fn(() => n(r, o))));
  }, ao), He && (r = We);
}
function zv(e, t, n, r, o, a) {
  let i = He;
  He && On();
  var s, l, u = null;
  He && We.nodeType === 1 && (u = /** @type {Element} */
  We, On());
  var c = (
    /** @type {TemplateNode} */
    He ? We : e
  ), d;
  Vr(() => {
    const f = t() || null;
    var v = f === "svg" ? lu : null;
    f !== s && (d && (f === null ? Kr(d, () => {
      d = null, l = null;
    }) : f === l ? Mo(d) : gn(d)), f && f !== l && (d = Fn(() => {
      if (u = He ? (
        /** @type {Element} */
        u
      ) : v ? document.createElementNS(v, f) : document.createElement(f), qt(u, u), r) {
        He && _v(f) && u.append(document.createComment(""));
        var y = (
          /** @type {TemplateNode} */
          He ? /* @__PURE__ */ Nt(u) : u.appendChild(Kn())
        );
        He && (y === null ? rn(!1) : Dt(y)), r(u, y);
      }
      Qe.nodes_end = u, c.before(u);
    })), s = f, s && (l = s));
  }, ao), i && (rn(!0), Dt(c));
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
function Pt(e, t, n) {
  nn(() => {
    var r = Tn(() => t(e, n == null ? void 0 : n()) || {});
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
function Nv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ru(e)) && (r && (r += " "), r += t);
  return r;
}
function Dn(e) {
  return typeof e == "object" ? Nv(e) : e ?? "";
}
const rl = [...` 	
\r\f \v\uFEFF`];
function Dv(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var a = o.length, i = 0; (i = r.indexOf(o, i)) >= 0; ) {
          var s = i + a;
          (i === 0 || rl.includes(r[i - 1])) && (s === r.length || rl.includes(r[s])) ? r = (i === 0 ? "" : r.substring(0, i)) + r.substring(s + 1) : i = s;
        }
  }
  return r === "" ? null : r;
}
function Lt(e, t, n, r, o, a) {
  var i = e.__className;
  if (He || i !== n) {
    var s = Dv(n, r, a);
    (!He || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e.__className = n;
  } else if (a)
    for (var l in a) {
      var u = !!a[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return a;
}
const ho = Symbol("class");
function _o(e) {
  if (He) {
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
    e.__on_r = n, Rf(n), Sv();
  }
}
function $a(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Lv(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function he(e, t, n, r) {
  var o = e.__attributes ?? (e.__attributes = {});
  He && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[zf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Zu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xn(e, t, n, r, o = !1, a = !1, i = !1) {
  let s = He && a;
  s && rn(!1);
  var l = t || {}, u = e.tagName === "OPTION";
  for (var c in t)
    c in n || (n[c] = null);
  n.class ? n.class = Dn(n.class) : (r || n[ho]) && (n.class = null);
  var d = Zu(e), f = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  );
  for (const _ in n) {
    let w = n[_];
    if (u && _ === "value" && w == null) {
      e.value = e.__value = "", l[_] = w;
      continue;
    }
    if (_ === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lt(e, v, w, r, t == null ? void 0 : t[ho], n[ho]), l[_] = w, l[ho] = n[ho];
      continue;
    }
    var y = l[_];
    if (w !== y) {
      l[_] = w;
      var b = _[0] + _[1];
      if (b !== "$$") {
        if (b === "on") {
          const C = {}, E = "$$" + _;
          let P = _.slice(2);
          var x = mv(P);
          if (hv(P) && (P = P.slice(0, -7), C.capture = !0), !x && y) {
            if (w != null) continue;
            e.removeEventListener(P, l[E], C), l[E] = null;
          }
          if (w != null)
            if (x)
              e[`__${P}`] = w, na([P]);
            else {
              let O = function(V) {
                l[_].call(this, V);
              };
              l[E] = Nu(P, e, O, C);
            }
          else x && (e[`__${P}`] = void 0);
        } else if (_ === "style" && w != null)
          e.style.cssText = w + "";
        else if (_ === "autofocus")
          Cv(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!a && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && u)
          Lv(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var $ = _;
          o || ($ = wv($));
          var h = $ === "defaultValue" || $ === "defaultChecked";
          if (w == null && !a && !h)
            if (f[_] = null, $ === "value" || $ === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const E = t === void 0;
              if ($ === "value") {
                let P = C.defaultValue;
                C.removeAttribute($), C.defaultValue = P, C.value = C.__value = E ? P : null;
              } else {
                let P = C.defaultChecked;
                C.removeAttribute($), C.defaultChecked = P, C.checked = E ? P : !1;
              }
            } else
              e.removeAttribute(_);
          else h || d.includes($) && (a || typeof w != "string") ? e[$] = w : typeof w != "function" && he(e, $, w);
        }
        _ === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s && rn(!0), l;
}
var ol = /* @__PURE__ */ new Map();
function Zu(e) {
  var t = ol.get(e.nodeName);
  if (t) return t;
  ol.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = du(r);
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
var wr, Co, gi, Ra, Bu;
const Za = class {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    Ir(this, Ra), Ir(this, wr, /* @__PURE__ */ new WeakMap()), Ir(this, Co), Ir(this, gi), xi(this, gi, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = mt(this, wr).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), mt(this, wr).set(t, r), wf(this, Ra, Bu).call(this).observe(t, mt(this, gi)), () => {
      var o = mt(this, wr).get(t);
      o.delete(n), o.size === 0 && (mt(this, wr).delete(t), mt(this, Co).unobserve(t));
    };
  }
};
wr = /* @__PURE__ */ new WeakMap(), Co = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), Ra = /* @__PURE__ */ new WeakSet(), Bu = function() {
  return mt(this, Co) ?? xi(this, Co, new ResizeObserver(
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
jt(Za, "entries", /* @__PURE__ */ new WeakMap());
let Av = Za;
var Iv = /* @__PURE__ */ new Av({
  box: "border-box"
});
function il(e, t, n) {
  var r = Iv.observe(e, () => n(e[t]));
  nn(() => (Tn(() => n(e[t])), r));
}
function al(e, t) {
  return e === t || (e == null ? void 0 : e[sr]) === t;
}
function Vn(e = {}, t, n, r) {
  return nn(() => {
    var o, a;
    return lo(() => {
      o = a, a = [], Tn(() => {
        e !== n(...a) && (t(e, ...a), o && al(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Bo(() => {
        a && al(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function _a(e) {
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
    const i = /* @__PURE__ */ ze(() => {
      let s = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], s = !0);
      return s && o++, o;
    });
    r = () => g(i);
  }
  n.b.length && uv(() => {
    sl(t, r), So(n.b);
  }), vr(() => {
    const o = Tn(() => n.m.map(Af));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), n.a.length && vr(() => {
    sl(t, r), So(n.a);
  });
}
function sl(e, t) {
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
function un(e) {
  Je === null && ea(), oo && Je.l !== null ? Zv(Je).m.push(e) : vr(() => {
    const t = Tn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function _s(e) {
  Je === null && ea(), un(() => () => Tn(e));
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
  const r = Tn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ar = [];
function dn(e, t) {
  return {
    subscribe: _e(e, t).subscribe
  };
}
function _e(e, t = $t) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(s) {
    if (hs(e, s) && (e = s, n)) {
      const l = !Ar.length;
      for (const u of r)
        u[1](), Ar.push(u, e);
      if (l) {
        for (let u = 0; u < Ar.length; u += 2)
          Ar[u][0](Ar[u + 1]);
        Ar.length = 0;
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
      const y = t(r ? u[0] : u, i, s);
      a ? i(y) : d = typeof y == "function" ? y : $t;
    }, v = o.map(
      (y, b) => Cs(
        y,
        (x) => {
          u[b] = x, c &= ~(1 << b), l && f();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      So(v), d(), l = !1;
    };
  });
}
function F(e) {
  let t;
  return Cs(e, (n) => t = n)(), t;
}
let ai = !1, Ba = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ Wo(void 0),
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
  return e && Ba in n ? F(e) : g(r.source);
}
function Bv(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = $t), e;
}
function Mi(e, t) {
  return e.set(t), t;
}
function ut() {
  const e = {};
  function t() {
    Pu(() => {
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
function Wv(e) {
  var t = ai;
  try {
    return ai = !1, [e(), ai];
  } finally {
    ai = t;
  }
}
const Yv = {
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
    Yv
  );
}
const Xv = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
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
      au
    )), e.special[t](n), Us(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Us(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ft(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Kt(0) }, Xv);
}
const jv = {
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
      const a = Xn(o, t);
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
        const o = Xn(r, t);
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
  return new Proxy({ props: e }, jv);
}
function m(e, t, n, r) {
  var o, a = (n & kf) !== 0, i = !oo || (n & Sf) !== 0, s = (n & Ef) !== 0, l = (n & Pf) !== 0, u = !1, c;
  s ? [c, u] = Wv(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var d = sr in e || fs in e, f = s && (((o = Xn(e, t)) == null ? void 0 : o.set) ?? (d && t in e && ((P) => e[t] = P))) || void 0, v = (
    /** @type {V} */
    r
  ), y = !0, b = !1, x = () => (b = !0, y && (y = !1, l ? v = Tn(
    /** @type {() => V} */
    r
  ) : v = /** @type {V} */
  r), v);
  c === void 0 && r !== void 0 && (f && i && jf(), c = x(), f && f(c));
  var $;
  if (i)
    $ = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? x() : (y = !0, b = !1, P);
    };
  else {
    var h = (a ? ze : be)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    h.f |= Vf, $ = () => {
      var P = g(h);
      return P !== void 0 && (v = /** @type {V} */
      void 0), P === void 0 ? v : P;
    };
  }
  if (!(n & au))
    return $;
  if (f) {
    var _ = e.$$legacy;
    return function(P, O) {
      return arguments.length > 0 ? ((!i || !O || _ || u) && f(O ? $() : P), P) : $();
    };
  }
  var w = !1, C = /* @__PURE__ */ Wo(c), E = /* @__PURE__ */ ze(() => {
    var P = $(), O = g(C);
    return w ? (w = !1, O) : C.v = P;
  });
  return a || (E.equals = ps), function(P, O) {
    if (arguments.length > 0) {
      const V = O ? g(E) : i && s ? tn(P) : P;
      return E.equals(V) || (w = !0, G(C, V), b && v !== void 0 && (v = V), Tn(() => g(E))), P;
    }
    return g(E);
  };
}
function Kv(e) {
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
    Ir(this, nr), Ir(this, hn);
    var n, r = /* @__PURE__ */ new Map(), o = (i, s) => {
      var l = /* @__PURE__ */ Wo(s);
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
    xi(this, hn, (t.hydrate ? Pv : Du)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && p(), xi(this, nr, a.$$events);
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
      Mv(mt(this, hn));
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
let Wu;
typeof HTMLElement == "function" && (Wu = class extends HTMLElement {
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
          const a = document.createElement("slot");
          r !== "default" && (a.name = r), L(o, a);
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
      this.$$c = Kv({
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
          for (const o of Ci(this.$$c)) {
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
    return Ci(this.$$p_d).find(
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
function le(e, t, n, r, o, a) {
  let i = class extends Wu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ci(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Ci(t).forEach((s) => {
    ko(i.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var u;
        l = hi(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var d = (u = Xn(c, s)) == null ? void 0 : u.get;
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
      if (o = (e = r[a]).type) n[o] = ll(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ll(n[o], e.name, null);
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
function ll(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Gv, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Wa = "http://www.w3.org/1999/xhtml";
const ul = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wa,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ia(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ul.hasOwnProperty(t) ? { space: ul[t], local: e } : e;
}
function Qv(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Wa && t.documentElement.namespaceURI === Wa ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function e1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Yu(e) {
  var t = ia(e);
  return (t.local ? e1 : Qv)(t);
}
function t1() {
}
function ks(e) {
  return e == null ? t1 : function() {
    return this.querySelector(e);
  };
}
function n1(e) {
  typeof e != "function" && (e = ks(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = new Array(i), l, u, c = 0; c < i; ++c)
      (l = a[c]) && (u = e.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new ln(r, this._parents);
}
function r1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function o1() {
  return [];
}
function Xu(e) {
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
  typeof e == "function" ? e = i1(e) : e = Xu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], a = 0; a < n; ++a)
    for (var i = t[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && (r.push(e.call(l, l.__data__, u, i)), o.push(l));
  return new ln(r, o);
}
function ju(e) {
  return function() {
    return this.matches(e);
  };
}
function Ku(e) {
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
  return this.select(e == null ? u1 : l1(typeof e == "function" ? e : Ku(e)));
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
  return this.selectAll(e == null ? f1 : v1(typeof e == "function" ? e : Ku(e)));
}
function h1(e) {
  typeof e != "function" && (e = ju(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new ln(r, this._parents);
}
function Fu(e) {
  return new Array(e.length);
}
function p1() {
  return new ln(this._enter || this._groups.map(Fu), this._parents);
}
function Oi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Oi.prototype = {
  constructor: Oi,
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
    (s = t[i]) ? (s.__data__ = a[i], r[i] = s) : n[i] = new Oi(e, a[i]);
  for (; i < l; ++i)
    (s = t[i]) && (o[i] = s);
}
function w1(e, t, n, r, o, a, i) {
  var s, l, u = /* @__PURE__ */ new Map(), c = t.length, d = a.length, f = new Array(c), v;
  for (s = 0; s < c; ++s)
    (l = t[s]) && (f[s] = v = i.call(l, l.__data__, s, t) + "", u.has(v) ? o[s] = l : u.set(v, l));
  for (s = 0; s < d; ++s)
    v = i.call(e, a[s], s, a) + "", (l = u.get(v)) ? (r[s] = l, l.__data__ = a[s], u.delete(v)) : n[s] = new Oi(e, a[s]);
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
    var c = r[u], d = o[u], f = d.length, v = $1(e.call(c, c && c.__data__, u, r)), y = v.length, b = s[u] = new Array(y), x = i[u] = new Array(y), $ = l[u] = new Array(f);
    n(c, d, b, x, $, v, t);
    for (var h = 0, _ = 0, w, C; h < y; ++h)
      if (w = b[h]) {
        for (h >= _ && (_ = h + 1); !(C = x[_]) && ++_ < y; ) ;
        w._next = C || null;
      }
  }
  return i = new ln(i, r), i._enter = s, i._exit = l, i;
}
function $1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function _1() {
  return new ln(this._exit || this._groups.map(Fu), this._parents);
}
function C1(e, t, n) {
  var r = this.enter(), o = this, a = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? a.remove() : n(a), r && o ? r.merge(o).order() : o;
}
function k1(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, a = r.length, i = Math.min(o, a), s = new Array(o), l = 0; l < i; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = s[l] = new Array(d), v, y = 0; y < d; ++y)
      (v = u[y] || c[y]) && (f[y] = v);
  for (; l < o; ++l)
    s[l] = n[l];
  return new ln(s, this._parents);
}
function S1() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, a = r[o], i; --o >= 0; )
      (i = r[o]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a), a = i);
  return this;
}
function E1(e) {
  e || (e = P1);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), a = 0; a < r; ++a) {
    for (var i = n[a], s = i.length, l = o[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = i[c]) && (l[c] = u);
    l.sort(t);
  }
  return new ln(o, this._parents).order();
}
function P1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function M1() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function O1() {
  return Array.from(this);
}
function T1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length; o < a; ++o) {
      var i = r[o];
      if (i) return i;
    }
  return null;
}
function V1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function H1() {
  return !this.node();
}
function z1(e) {
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
function D1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function L1(e, t) {
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
  return this.each((t == null ? n.local ? D1 : N1 : typeof t == "function" ? n.local ? R1 : I1 : n.local ? A1 : L1)(n, t));
}
function qu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function B1(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function W1(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Y1(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function X1(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? B1 : typeof t == "function" ? Y1 : W1)(e, t, n ?? "")) : qr(this.node(), e);
}
function qr(e, t) {
  return e.style.getPropertyValue(t) || qu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function j1(e) {
  return function() {
    delete this[e];
  };
}
function K1(e, t) {
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
  return arguments.length > 1 ? this.each((t == null ? j1 : typeof t == "function" ? F1 : K1)(e, t)) : this.node()[e];
}
function Gu(e) {
  return e.trim().split(/^|\s+/);
}
function Ss(e) {
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
  for (var n = Ss(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Qu(e, t) {
  for (var n = Ss(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
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
    for (var r = Ss(this.node()), o = -1, a = n.length; ++o < a; ) if (!r.contains(n[o])) return !1;
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
  var t = typeof e == "function" ? e : Yu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function vg() {
  return null;
}
function gg(e, t) {
  var n = typeof e == "function" ? e : Yu(e), r = t == null ? vg : typeof t == "function" ? t : ks(t);
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
function _g(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, a; n < o; ++n)
        a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Cg(e, t, n) {
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
  for (s = t ? Cg : _g, o = 0; o < a; ++o) this.each(s(r[o], t, n));
  return this;
}
function ec(e, t, n) {
  var r = qu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Sg(e, t) {
  return function() {
    return ec(this, e, t);
  };
}
function Eg(e, t) {
  return function() {
    return ec(this, e, t.apply(this, arguments));
  };
}
function Pg(e, t) {
  return this.each((typeof t == "function" ? Eg : Sg)(e, t));
}
function* Mg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, a = r.length, i; o < a; ++o)
      (i = r[o]) && (yield i);
}
var tc = [null];
function ln(e, t) {
  this._groups = e, this._parents = t;
}
function Yo() {
  return new ln([[document.documentElement]], tc);
}
function Og() {
  return this;
}
ln.prototype = Yo.prototype = {
  constructor: ln,
  select: n1,
  selectAll: a1,
  selectChild: c1,
  selectChildren: g1,
  filter: h1,
  data: x1,
  enter: p1,
  exit: _1,
  join: C1,
  merge: k1,
  selection: Og,
  order: S1,
  sort: E1,
  call: M1,
  nodes: O1,
  node: T1,
  size: V1,
  empty: H1,
  each: z1,
  attr: Z1,
  style: X1,
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
  dispatch: Pg,
  [Symbol.iterator]: Mg
};
function fn(e) {
  return typeof e == "string" ? new ln([[document.querySelector(e)]], [document.documentElement]) : new ln([[e]], tc);
}
function Tg(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function pn(e, t) {
  if (e = Tg(e), t === void 0 && (t = e.currentTarget), t) {
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
const Vg = { passive: !1 }, To = { capture: !0, passive: !1 };
function Ca(e) {
  e.stopImmediatePropagation();
}
function Br(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function nc(e) {
  var t = e.document.documentElement, n = fn(e).on("dragstart.drag", Br, To);
  "onselectstart" in t ? n.on("selectstart.drag", Br, To) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function rc(e, t) {
  var n = e.document.documentElement, r = fn(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Br, To), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const si = (e) => () => e;
function Ya(e, {
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
Ya.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Hg(e) {
  return !e.ctrlKey && !e.button;
}
function zg() {
  return this.parentNode;
}
function Ng(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Dg() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Lg() {
  var e = Hg, t = zg, n = Ng, r = Dg, o = {}, a = oa("start", "drag", "end"), i = 0, s, l, u, c, d = 0;
  function f(w) {
    w.on("mousedown.drag", v).filter(r).on("touchstart.drag", x).on("touchmove.drag", $, Vg).on("touchend.drag touchcancel.drag", h).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function v(w, C) {
    if (!(c || !e.call(this, w, C))) {
      var E = _(this, t.call(this, w, C), w, C, "mouse");
      E && (fn(w.view).on("mousemove.drag", y, To).on("mouseup.drag", b, To), nc(w.view), Ca(w), u = !1, s = w.clientX, l = w.clientY, E("start", w));
    }
  }
  function y(w) {
    if (Br(w), !u) {
      var C = w.clientX - s, E = w.clientY - l;
      u = C * C + E * E > d;
    }
    o.mouse("drag", w);
  }
  function b(w) {
    fn(w.view).on("mousemove.drag mouseup.drag", null), rc(w.view, u), Br(w), o.mouse("end", w);
  }
  function x(w, C) {
    if (e.call(this, w, C)) {
      var E = w.changedTouches, P = t.call(this, w, C), O = E.length, V, H;
      for (V = 0; V < O; ++V)
        (H = _(this, P, w, C, E[V].identifier, E[V])) && (Ca(w), H("start", w, E[V]));
    }
  }
  function $(w) {
    var C = w.changedTouches, E = C.length, P, O;
    for (P = 0; P < E; ++P)
      (O = o[C[P].identifier]) && (Br(w), O("drag", w, C[P]));
  }
  function h(w) {
    var C = w.changedTouches, E = C.length, P, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < E; ++P)
      (O = o[C[P].identifier]) && (Ca(w), O("end", w, C[P]));
  }
  function _(w, C, E, P, O, V) {
    var H = a.copy(), D = pn(V || E, C), I, R, S;
    if ((S = n.call(w, new Ya("beforestart", {
      sourceEvent: E,
      target: f,
      identifier: O,
      active: i,
      x: D[0],
      y: D[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return I = S.x - D[0] || 0, R = S.y - D[1] || 0, function T(k, M, N) {
        var A = D, W;
        switch (k) {
          case "start":
            o[O] = T, W = i++;
            break;
          case "end":
            delete o[O], --i;
          // falls through
          case "drag":
            D = pn(N || M, C), W = i;
            break;
        }
        H.call(
          k,
          w,
          new Ya(k, {
            sourceEvent: M,
            subject: S,
            target: f,
            identifier: O,
            active: W,
            x: D[0] + I,
            y: D[1] + R,
            dx: D[0] - A[0],
            dy: D[1] - A[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return f.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : si(!!w), f) : e;
  }, f.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : si(w), f) : t;
  }, f.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : si(w), f) : n;
  }, f.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : si(!!w), f) : r;
  }, f.on = function() {
    var w = a.on.apply(a, arguments);
    return w === a ? f : w;
  }, f.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, f) : Math.sqrt(d);
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
function Xo() {
}
var Vo = 0.7, Ti = 1 / Vo, Wr = "\\s*([+-]?\\d+)\\s*", Ho = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ag = /^#([0-9a-f]{3,8})$/, Ig = new RegExp(`^rgb\\(${Wr},${Wr},${Wr}\\)$`), Rg = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), Zg = new RegExp(`^rgba\\(${Wr},${Wr},${Wr},${Ho}\\)$`), Bg = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${Ho}\\)$`), Wg = new RegExp(`^hsl\\(${Ho},${Pn},${Pn}\\)$`), Yg = new RegExp(`^hsla\\(${Ho},${Pn},${Pn},${Ho}\\)$`), cl = {
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
Es(Xo, zo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: dl,
  // Deprecated! Use color.formatHex.
  formatHex: dl,
  formatHex8: Xg,
  formatHsl: jg,
  formatRgb: fl,
  toString: fl
});
function dl() {
  return this.rgb().formatHex();
}
function Xg() {
  return this.rgb().formatHex8();
}
function jg() {
  return ic(this).formatHsl();
}
function fl() {
  return this.rgb().formatRgb();
}
function zo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ag.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? vl(t) : n === 3 ? new Ft(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? li(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? li(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ig.exec(e)) ? new Ft(t[1], t[2], t[3], 1) : (t = Rg.exec(e)) ? new Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Zg.exec(e)) ? li(t[1], t[2], t[3], t[4]) : (t = Bg.exec(e)) ? li(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Wg.exec(e)) ? pl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Yg.exec(e)) ? pl(t[1], t[2] / 100, t[3] / 100, t[4]) : cl.hasOwnProperty(e) ? vl(cl[e]) : e === "transparent" ? new Ft(NaN, NaN, NaN, 0) : null;
}
function vl(e) {
  return new Ft(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function li(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ft(e, t, n, r);
}
function Kg(e) {
  return e instanceof Xo || (e = zo(e)), e ? (e = e.rgb(), new Ft(e.r, e.g, e.b, e.opacity)) : new Ft();
}
function Xa(e, t, n, r) {
  return arguments.length === 1 ? Kg(e) : new Ft(e, t, n, r ?? 1);
}
function Ft(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Es(Ft, Xa, oc(Xo, {
  brighter(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vo : Math.pow(Vo, e), new Ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ft($r(this.r), $r(this.g), $r(this.b), Vi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gl,
  // Deprecated! Use color.formatHex.
  formatHex: gl,
  formatHex8: Fg,
  formatRgb: hl,
  toString: hl
}));
function gl() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}`;
}
function Fg() {
  return `#${br(this.r)}${br(this.g)}${br(this.b)}${br((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function hl() {
  const e = Vi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$r(this.r)}, ${$r(this.g)}, ${$r(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Vi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $r(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function br(e) {
  return e = $r(e), (e < 16 ? "0" : "") + e.toString(16);
}
function pl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new yn(e, t, n, r);
}
function ic(e) {
  if (e instanceof yn) return new yn(e.h, e.s, e.l, e.opacity);
  if (e instanceof Xo || (e = zo(e)), !e) return new yn();
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
Es(yn, qg, oc(Xo, {
  brighter(e) {
    return e = e == null ? Ti : Math.pow(Ti, e), new yn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vo : Math.pow(Vo, e), new yn(this.h, this.s, this.l * e, this.opacity);
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
    return new yn(ml(this.h), ui(this.s), ui(this.l), Vi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Vi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ml(this.h)}, ${ui(this.s) * 100}%, ${ui(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ml(e) {
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
const yl = function e(t) {
  var n = Jg(t);
  function r(o, a) {
    var i = n((o = Xa(o)).r, (a = Xa(a)).r), s = n(o.g, a.g), l = n(o.b, a.b), u = sc(o.opacity, a.opacity);
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
var ja = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sa = new RegExp(ja.source, "g");
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
  var n = ja.lastIndex = Sa.lastIndex = 0, r, o, a, i = -1, s = [], l = [];
  for (e = e + "", t = t + ""; (r = ja.exec(e)) && (o = Sa.exec(t)); )
    (a = o.index) > n && (a = t.slice(n, a), s[i] ? s[i] += a : s[++i] = a), (r = r[0]) === (o = o[0]) ? s[i] ? s[i] += o : s[++i] = o : (s[++i] = null, l.push({ i, x: or(r, o) })), n = Sa.lastIndex;
  return n < t.length && (a = t.slice(n), s[i] ? s[i] += a : s[++i] = a), s.length < 2 ? l[0] ? eh(l[0].x) : Qg(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) s[(d = l[c]).i] = d.x(u);
    return s.join("");
  });
}
var wl = 180 / Math.PI, lc = {
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
    rotate: Math.atan2(t, e) * wl,
    skewX: Math.atan(l) * wl,
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
  function a(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var b = v.push("translate(", null, t, null, n);
      y.push({ i: b - 4, x: or(u, d) }, { i: b - 2, x: or(c, f) });
    } else (d || f) && v.push("translate(" + d + t + f + n);
  }
  function i(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: or(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function s(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: or(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, v, y) {
    if (u !== d || c !== f) {
      var b = v.push(o(v) + "scale(", null, ",", null, ")");
      y.push({ i: b - 4, x: or(u, d) }, { i: b - 2, x: or(c, f) });
    } else (d !== 1 || f !== 1) && v.push(o(v) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, f), i(u.rotate, c.rotate, d, f), s(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(v) {
      for (var y = -1, b = f.length, x; ++y < b; ) d[(x = f[y]).i] = x.x(v);
      return d.join("");
    };
  };
}
var oh = cc(nh, "px, ", "px)", "deg)"), ih = cc(rh, ", ", ")", ")"), ah = 1e-12;
function bl(e) {
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
    var s = a[0], l = a[1], u = a[2], c = i[0], d = i[1], f = i[2], v = c - s, y = d - l, b = v * v + y * y, x, $;
    if (b < ah)
      $ = Math.log(f / u) / t, x = function(P) {
        return [
          s + P * v,
          l + P * y,
          u * Math.exp(t * P * $)
        ];
      };
    else {
      var h = Math.sqrt(b), _ = (f * f - u * u + r * b) / (2 * u * n * h), w = (f * f - u * u - r * b) / (2 * f * n * h), C = Math.log(Math.sqrt(_ * _ + 1) - _), E = Math.log(Math.sqrt(w * w + 1) - w);
      $ = (E - C) / t, x = function(P) {
        var O = P * $, V = bl(C), H = u / (n * h) * (V * lh(t * O + C) - sh(C));
        return [
          s + H * v,
          l + H * y,
          u * V / bl(t * O + C)
        ];
      };
    }
    return x.duration = $ * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(a) {
    var i = Math.max(1e-3, +a), s = i * i, l = s * s;
    return e(i, s, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Gr = 0, wo = 0, po = 0, dc = 1e3, Hi, bo, zi = 0, Sr = 0, aa = 0, No = typeof performance == "object" && performance.now ? performance : Date, fc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ps() {
  return Sr || (fc(ch), Sr = No.now() + aa);
}
function ch() {
  Sr = 0;
}
function Ni() {
  this._call = this._time = this._next = null;
}
Ni.prototype = vc.prototype = {
  constructor: Ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ps() : +n) + (t == null ? 0 : +t), !this._next && bo !== this && (bo ? bo._next = this : Hi = this, bo = this), this._call = e, this._time = n, Ka();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ka());
  }
};
function vc(e, t, n) {
  var r = new Ni();
  return r.restart(e, t, n), r;
}
function dh() {
  Ps(), ++Gr;
  for (var e = Hi, t; e; )
    (t = Sr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Gr;
}
function xl() {
  Sr = (zi = No.now()) + aa, Gr = wo = 0;
  try {
    dh();
  } finally {
    Gr = 0, vh(), Sr = 0;
  }
}
function fh() {
  var e = No.now(), t = e - zi;
  t > dc && (aa -= t, zi = e);
}
function vh() {
  for (var e, t = Hi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Hi = n);
  bo = e, Ka(r);
}
function Ka(e) {
  if (!Gr) {
    wo && (wo = clearTimeout(wo));
    var t = e - Sr;
    t > 24 ? (e < 1 / 0 && (wo = setTimeout(xl, e - No.now() - aa)), po && (po = clearInterval(po))) : (po || (zi = No.now(), po = setInterval(fh, dc)), Gr = 1, fc(xl));
  }
}
function $l(e, t, n) {
  var r = new Ni();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var gh = oa("start", "end", "cancel", "interrupt"), hh = [], gc = 0, _l = 1, Fa = 2, mi = 3, Cl = 4, qa = 5, yi = 6;
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
  var n = Cn(e, t);
  if (n.state > gc) throw new Error("too late; already scheduled");
  return n;
}
function Ln(e, t) {
  var n = Cn(e, t);
  if (n.state > mi) throw new Error("too late; already running");
  return n;
}
function Cn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function ph(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = vc(a, 0, n.time);
  function a(u) {
    n.state = _l, n.timer.restart(i, n.delay, n.time), n.delay <= u && i(u - n.delay);
  }
  function i(u) {
    var c, d, f, v;
    if (n.state !== _l) return l();
    for (c in r)
      if (v = r[c], v.name === n.name) {
        if (v.state === mi) return $l(i);
        v.state === Cl ? (v.state = yi, v.timer.stop(), v.on.call("interrupt", e, e.__data__, v.index, v.group), delete r[c]) : +c < t && (v.state = yi, v.timer.stop(), v.on.call("cancel", e, e.__data__, v.index, v.group), delete r[c]);
      }
    if ($l(function() {
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
    var o = Ln(this, e), a = o.tween;
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
    var a = Ln(this, e), i = a.tween;
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
    for (var r = Cn(this.node(), n).tween, o = 0, a = r.length, i; o < a; ++o)
      if ((i = r[o]).name === e)
        return i.value;
    return null;
  }
  return this.each((t == null ? yh : wh)(n, e, t));
}
function Os(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Ln(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Cn(o, r).value[t];
  };
}
function hc(e, t) {
  var n;
  return (typeof t == "number" ? or : t instanceof zo ? yl : (n = zo(t)) ? (t = n, yl) : th)(e, t);
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
function _h(e, t, n) {
  var r, o = n + "", a;
  return function() {
    var i = this.getAttribute(e);
    return i === o ? null : i === r ? a : a = t(r = i, n);
  };
}
function Ch(e, t, n) {
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
function Sh(e, t, n) {
  var r, o, a;
  return function() {
    var i, s = n(this), l;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (i = this.getAttributeNS(e.space, e.local), l = s + "", i === l ? null : i === r && l === o ? a : (o = l, a = t(r = i, s)));
  };
}
function Eh(e, t) {
  var n = ia(e), r = n === "transform" ? ih : hc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Sh : kh)(n, r, Os(this, "attr." + e, t)) : t == null ? (n.local ? $h : xh)(n) : (n.local ? Ch : _h)(n, r, t));
}
function Ph(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Mh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Oh(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Mh(e, a)), n;
  }
  return o._value = t, o;
}
function Th(e, t) {
  var n, r;
  function o() {
    var a = t.apply(this, arguments);
    return a !== r && (n = (r = a) && Ph(e, a)), n;
  }
  return o._value = t, o;
}
function Vh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = ia(e);
  return this.tween(n, (r.local ? Oh : Th)(r, t));
}
function Hh(e, t) {
  return function() {
    Ms(this, e).delay = +t.apply(this, arguments);
  };
}
function zh(e, t) {
  return t = +t, function() {
    Ms(this, e).delay = t;
  };
}
function Nh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Hh : zh)(t, e)) : Cn(this.node(), t).delay;
}
function Dh(e, t) {
  return function() {
    Ln(this, e).duration = +t.apply(this, arguments);
  };
}
function Lh(e, t) {
  return t = +t, function() {
    Ln(this, e).duration = t;
  };
}
function Ah(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Dh : Lh)(t, e)) : Cn(this.node(), t).duration;
}
function Ih(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ln(this, e).ease = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each(Ih(t, e)) : Cn(this.node(), t).ease;
}
function Zh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ln(this, e).ease = n;
  };
}
function Bh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Zh(this._id, e));
}
function Wh(e) {
  typeof e != "function" && (e = ju(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var a = t[o], i = a.length, s = r[o] = [], l, u = 0; u < i; ++u)
      (l = a[u]) && e.call(l, l.__data__, u, a) && s.push(l);
  return new qn(r, this._parents, this._name, this._id);
}
function Yh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, a = Math.min(r, o), i = new Array(r), s = 0; s < a; ++s)
    for (var l = t[s], u = n[s], c = l.length, d = i[s] = new Array(c), f, v = 0; v < c; ++v)
      (f = l[v] || u[v]) && (d[v] = f);
  for (; s < r; ++s)
    i[s] = t[s];
  return new qn(i, this._parents, this._name, this._id);
}
function Xh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function jh(e, t, n) {
  var r, o, a = Xh(t) ? Ms : Ln;
  return function() {
    var i = a(this, e), s = i.on;
    s !== r && (o = (r = s).copy()).on(t, n), i.on = o;
  };
}
function Kh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Cn(this.node(), n).on.on(e) : this.each(jh(n, e, t));
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
  typeof e != "function" && (e = ks(e));
  for (var r = this._groups, o = r.length, a = new Array(o), i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, u = a[i] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = s[f]) && (d = e.call(c, c.__data__, f, s)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, sa(u[f], t, n, f, u, Cn(c, n)));
  return new qn(a, this._parents, t, n);
}
function Uh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Xu(e));
  for (var r = this._groups, o = r.length, a = [], i = [], s = 0; s < o; ++s)
    for (var l = r[s], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), v, y = Cn(c, n), b = 0, x = f.length; b < x; ++b)
          (v = f[b]) && sa(v, t, n, b, f, y);
        a.push(f), i.push(c);
      }
  return new qn(a, i, t, n);
}
var Jh = Yo.prototype.constructor;
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
    var l = Ln(this, e), u = l.on, c = l.value[a] == null ? s || (s = pc(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(i, o = c), l.on = r;
  };
}
function op(e, t, n) {
  var r = (e += "") == "transform" ? oh : hc;
  return t == null ? this.styleTween(e, ep(e, r)).on("end.style." + e, pc(e)) : typeof t == "function" ? this.styleTween(e, np(e, r, Os(this, "style." + e, t))).each(rp(this._id, e)) : this.styleTween(e, tp(e, r, t), n).on("end.style." + e, null);
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
  return this.tween("text", typeof e == "function" ? up(Os(this, "text", e)) : lp(e == null ? "" : e + ""));
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
        var c = Cn(l, t);
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
      var u = Ln(this, r), c = u.on;
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
var Rn = Yo.prototype;
qn.prototype = {
  constructor: qn,
  select: Gh,
  selectAll: Uh,
  selectChild: Rn.selectChild,
  selectChildren: Rn.selectChildren,
  filter: Wh,
  merge: Yh,
  selection: Qh,
  transition: gp,
  call: Rn.call,
  nodes: Rn.nodes,
  node: Rn.node,
  size: Rn.size,
  empty: Rn.empty,
  each: Rn.each,
  on: Kh,
  attr: Eh,
  attrTween: Vh,
  style: op,
  styleTween: sp,
  text: cp,
  textTween: vp,
  remove: qh,
  tween: bh,
  delay: Nh,
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
  e instanceof qn ? (t = e._id, e = e._name) : (t = mc(), (n = yp).time = Ps(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, a = 0; a < o; ++a)
    for (var i = r[a], s = i.length, l, u = 0; u < s; ++u)
      (l = i[u]) && sa(l, e, t, u, i, n || wp(l, t));
  return new qn(r, this._parents, e, t);
}
Yo.prototype.interrupt = mh;
Yo.prototype.transition = bp;
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
function Ea(e) {
  e.stopImmediatePropagation();
}
function mo(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function $p(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function _p() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function kl() {
  return this.__zoom || la;
}
function Cp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function kp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Sp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], i = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    i > a ? (a + i) / 2 : Math.min(0, a) || Math.max(0, i)
  );
}
function wc() {
  var e = $p, t = _p, n = Sp, r = Cp, o = kp, a = [0, 1 / 0], i = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = uh, u = oa("start", "zoom", "end"), c, d, f, v = 500, y = 150, b = 0, x = 10;
  function $(S) {
    S.property("__zoom", kl).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", H).filter(o).on("touchstart.zoom", D).on("touchmove.zoom", I).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(S, T, k, M) {
    var N = S.selection ? S.selection() : S;
    N.property("__zoom", kl), S !== N ? C(S, T, k, M) : N.interrupt().each(function() {
      E(this, arguments).event(M).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, $.scaleBy = function(S, T, k, M) {
    $.scaleTo(S, function() {
      var N = this.__zoom.k, A = typeof T == "function" ? T.apply(this, arguments) : T;
      return N * A;
    }, k, M);
  }, $.scaleTo = function(S, T, k, M) {
    $.transform(S, function() {
      var N = t.apply(this, arguments), A = this.__zoom, W = k == null ? w(N) : typeof k == "function" ? k.apply(this, arguments) : k, K = A.invert(W), q = typeof T == "function" ? T.apply(this, arguments) : T;
      return n(_(h(A, q), W, K), N, i);
    }, k, M);
  }, $.translateBy = function(S, T, k, M) {
    $.transform(S, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof k == "function" ? k.apply(this, arguments) : k
      ), t.apply(this, arguments), i);
    }, null, M);
  }, $.translateTo = function(S, T, k, M, N) {
    $.transform(S, function() {
      var A = t.apply(this, arguments), W = this.__zoom, K = M == null ? w(A) : typeof M == "function" ? M.apply(this, arguments) : M;
      return n(la.translate(K[0], K[1]).scale(W.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof k == "function" ? -k.apply(this, arguments) : -k
      ), A, i);
    }, M, N);
  };
  function h(S, T) {
    return T = Math.max(a[0], Math.min(a[1], T)), T === S.k ? S : new Bn(T, S.x, S.y);
  }
  function _(S, T, k) {
    var M = T[0] - k[0] * S.k, N = T[1] - k[1] * S.k;
    return M === S.x && N === S.y ? S : new Bn(S.k, M, N);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function C(S, T, k, M) {
    S.on("start.zoom", function() {
      E(this, arguments).event(M).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(M).end();
    }).tween("zoom", function() {
      var N = this, A = arguments, W = E(N, A).event(M), K = t.apply(N, A), q = k == null ? w(K) : typeof k == "function" ? k.apply(N, A) : k, re = Math.max(K[1][0] - K[0][0], K[1][1] - K[0][1]), Q = N.__zoom, X = typeof T == "function" ? T.apply(N, A) : T, ae = l(Q.invert(q).concat(re / Q.k), X.invert(q).concat(re / X.k));
      return function($e) {
        if ($e === 1) $e = X;
        else {
          var Ce = ae($e), me = re / Ce[2];
          $e = new Bn(me, q[0] - Ce[0] * me, q[1] - Ce[1] * me);
        }
        W.zoom(null, $e);
      };
    });
  }
  function E(S, T, k) {
    return !k && S.__zooming || new P(S, T);
  }
  function P(S, T) {
    this.that = S, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, T), this.taps = 0;
  }
  P.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, T) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var T = fn(this.that).datum();
      u.call(
        S,
        this.that,
        new xp(S, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        T
      );
    }
  };
  function O(S, ...T) {
    if (!e.apply(this, arguments)) return;
    var k = E(this, T).event(S), M = this.__zoom, N = Math.max(a[0], Math.min(a[1], M.k * Math.pow(2, r.apply(this, arguments)))), A = pn(S);
    if (k.wheel)
      (k.mouse[0][0] !== A[0] || k.mouse[0][1] !== A[1]) && (k.mouse[1] = M.invert(k.mouse[0] = A)), clearTimeout(k.wheel);
    else {
      if (M.k === N) return;
      k.mouse = [A, M.invert(A)], wi(this), k.start();
    }
    mo(S), k.wheel = setTimeout(W, y), k.zoom("mouse", n(_(h(M, N), k.mouse[0], k.mouse[1]), k.extent, i));
    function W() {
      k.wheel = null, k.end();
    }
  }
  function V(S, ...T) {
    if (f || !e.apply(this, arguments)) return;
    var k = S.currentTarget, M = E(this, T, !0).event(S), N = fn(S.view).on("mousemove.zoom", q, !0).on("mouseup.zoom", re, !0), A = pn(S, k), W = S.clientX, K = S.clientY;
    nc(S.view), Ea(S), M.mouse = [A, this.__zoom.invert(A)], wi(this), M.start();
    function q(Q) {
      if (mo(Q), !M.moved) {
        var X = Q.clientX - W, ae = Q.clientY - K;
        M.moved = X * X + ae * ae > b;
      }
      M.event(Q).zoom("mouse", n(_(M.that.__zoom, M.mouse[0] = pn(Q, k), M.mouse[1]), M.extent, i));
    }
    function re(Q) {
      N.on("mousemove.zoom mouseup.zoom", null), rc(Q.view, M.moved), mo(Q), M.event(Q).end();
    }
  }
  function H(S, ...T) {
    if (e.apply(this, arguments)) {
      var k = this.__zoom, M = pn(S.changedTouches ? S.changedTouches[0] : S, this), N = k.invert(M), A = k.k * (S.shiftKey ? 0.5 : 2), W = n(_(h(k, A), M, N), t.apply(this, T), i);
      mo(S), s > 0 ? fn(this).transition().duration(s).call(C, W, M, S) : fn(this).call($.transform, W, M, S);
    }
  }
  function D(S, ...T) {
    if (e.apply(this, arguments)) {
      var k = S.touches, M = k.length, N = E(this, T, S.changedTouches.length === M).event(S), A, W, K, q;
      for (Ea(S), W = 0; W < M; ++W)
        K = k[W], q = pn(K, this), q = [q, this.__zoom.invert(q), K.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== q[2] && (N.touch1 = q, N.taps = 0) : (N.touch0 = q, A = !0, N.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (N.taps < 2 && (d = q[0], c = setTimeout(function() {
        c = null;
      }, v)), wi(this), N.start());
    }
  }
  function I(S, ...T) {
    if (this.__zooming) {
      var k = E(this, T).event(S), M = S.changedTouches, N = M.length, A, W, K, q;
      for (mo(S), A = 0; A < N; ++A)
        W = M[A], K = pn(W, this), k.touch0 && k.touch0[2] === W.identifier ? k.touch0[0] = K : k.touch1 && k.touch1[2] === W.identifier && (k.touch1[0] = K);
      if (W = k.that.__zoom, k.touch1) {
        var re = k.touch0[0], Q = k.touch0[1], X = k.touch1[0], ae = k.touch1[1], $e = ($e = X[0] - re[0]) * $e + ($e = X[1] - re[1]) * $e, Ce = (Ce = ae[0] - Q[0]) * Ce + (Ce = ae[1] - Q[1]) * Ce;
        W = h(W, Math.sqrt($e / Ce)), K = [(re[0] + X[0]) / 2, (re[1] + X[1]) / 2], q = [(Q[0] + ae[0]) / 2, (Q[1] + ae[1]) / 2];
      } else if (k.touch0) K = k.touch0[0], q = k.touch0[1];
      else return;
      k.zoom("touch", n(_(W, K, q), k.extent, i));
    }
  }
  function R(S, ...T) {
    if (this.__zooming) {
      var k = E(this, T).event(S), M = S.changedTouches, N = M.length, A, W;
      for (Ea(S), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, v), A = 0; A < N; ++A)
        W = M[A], k.touch0 && k.touch0[2] === W.identifier ? delete k.touch0 : k.touch1 && k.touch1[2] === W.identifier && delete k.touch1;
      if (k.touch1 && !k.touch0 && (k.touch0 = k.touch1, delete k.touch1), k.touch0) k.touch0[1] = this.__zoom.invert(k.touch0[0]);
      else if (k.end(), k.taps === 2 && (W = pn(W, this), Math.hypot(d[0] - W[0], d[1] - W[1]) < x)) {
        var K = fn(this).on("dblclick.zoom");
        K && K.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : di(+S), $) : r;
  }, $.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : di(!!S), $) : e;
  }, $.touchable = function(S) {
    return arguments.length ? (o = typeof S == "function" ? S : di(!!S), $) : o;
  }, $.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : di([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), $) : t;
  }, $.scaleExtent = function(S) {
    return arguments.length ? (a[0] = +S[0], a[1] = +S[1], $) : [a[0], a[1]];
  }, $.translateExtent = function(S) {
    return arguments.length ? (i[0][0] = +S[0][0], i[1][0] = +S[1][0], i[0][1] = +S[0][1], i[1][1] = +S[1][1], $) : [[i[0][0], i[0][1]], [i[1][0], i[1][1]]];
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
    return arguments.length ? (b = (S = +S) * S, $) : Math.sqrt(b);
  }, $.tapDistance = function(S) {
    return arguments.length ? (x = +S, $) : x;
  }, $;
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
}, Di = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var Er;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Er || (Er = {}));
var ur;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ur || (ur = {}));
var Li;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Li || (Li = {}));
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
var Do;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Do || (Do = {}));
var Oe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Oe || (Oe = {}));
const Sl = {
  [Oe.Left]: Oe.Right,
  [Oe.Right]: Oe.Left,
  [Oe.Top]: Oe.Bottom,
  [Oe.Bottom]: Oe.Top
};
function Ep(e, t) {
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
function Pp(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Mp = (e) => "id" in e && "source" in e && "target" in e, Op = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), Ts = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), jo = (e, t = [0, 0]) => {
  const { width: n, height: r } = pr(e), o = e.origin ?? t, a = n * o[0], i = r * o[1];
  return {
    x: e.position.x - a,
    y: e.position.y - i
  };
}, Tp = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
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
}, Ko = (e, t = {}) => {
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
    const v = c.width ?? u.width ?? u.initialWidth ?? null, y = c.height ?? u.height ?? u.initialHeight ?? null, b = Lo(s, Qr(u)), x = (v ?? 0) * (y ?? 0), $ = a && b > 0;
    (!u.internals.handleBounds || $ || b >= x || u.dragging) && l.push(u);
  }
  return l;
}, Ua = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Pl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t != null && t.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Ml({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: a }, i) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const s = Ko(e), l = Hs(s, t, n, (i == null ? void 0 : i.minZoom) ?? o, (i == null ? void 0 : i.maxZoom) ?? a, (i == null ? void 0 : i.padding) ?? 0.1);
  return await r.setViewport(l, { duration: i == null ? void 0 : i.duration }), Promise.resolve(!0);
}
function Vp({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: a }) {
  const i = n.get(e), s = i.parentId ? n.get(i.parentId) : void 0, { x: l, y: u } = s ? s.internals.positionAbsolute : { x: 0, y: 0 }, c = i.origin ?? r;
  let d = o;
  if (i.extent === "parent" && !i.expandParent)
    if (!s)
      a == null || a("005", Ur.error005());
    else {
      const v = s.measured.width, y = s.measured.height;
      v && y && (d = [
        [l, u],
        [l + v, u + y]
      ]);
    }
  else s && eo(i.extent) && (d = [
    [i.extent[0][0] + l, i.extent[0][1] + u],
    [i.extent[1][0] + l, i.extent[1][1] + u]
  ]);
  const f = eo(d) ? Pr(t, d, i.measured) : t;
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
    const f = a.has(d.id), v = !f && d.parentId && i.find((y) => y.id === d.parentId);
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
const Jr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Pr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Jr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Jr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function $c(e, t, n) {
  const { width: r, height: o } = pr(n), { x: a, y: i } = n.internals.positionAbsolute;
  return Pr(e, [
    [a, i],
    [a + r, i + o]
  ], t);
}
const Ol = (e, t, n) => e < t ? Jr(Math.abs(e - t), 1, t) / t : e > n ? -Jr(Math.abs(e - n), 1, t) / t : 0, _c = (e, t, n = 15, r = 40) => {
  const o = Ol(e.x, r, t.width - r) * n, a = Ol(e.y, r, t.height - r) * n;
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
  const { x: o, y: a } = Ts(e) ? e.internals.positionAbsolute : jo(e, t);
  return {
    x: o,
    y: a,
    width: ((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Ai = (e, t = [0, 0]) => {
  var n, r;
  const { x: o, y: a } = Ts(e) ? e.internals.positionAbsolute : jo(e, t);
  return {
    x: o,
    y: a,
    x2: o + (((n = e.measured) == null ? void 0 : n.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: a + (((r = e.measured) == null ? void 0 : r.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Cc = (e, t) => ca(ua(Ja(e), Ja(t))), Lo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Tl = (e) => Wn(e.width) && Wn(e.height) && Wn(e.x) && Wn(e.y), Wn = (e) => !isNaN(e) && isFinite(e), Hp = (e, t) => {
}, Vs = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Fo = ({ x: e, y: t }, [n, r, o], a = !1, i = [1, 1]) => {
  const s = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return a ? Vs(s, i) : s;
}, kc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), Hs = (e, t, n, r, o, a) => {
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
function Sc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function zp(e, t = { width: 0, height: 0 }, n, r, o) {
  const a = { ...e }, i = r.get(n);
  if (i) {
    const s = i.origin || o;
    a.x += i.internals.positionAbsolute.x - (t.width ?? 0) * s[0], a.y += i.internals.positionAbsolute.y - (t.height ?? 0) * s[1];
  }
  return a;
}
function Pa(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: a, y: i } = jn(e), s = Fo({ x: a - ((o == null ? void 0 : o.left) ?? 0), y: i - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? Vs(s, t) : s;
  return {
    xSnapped: l,
    ySnapped: u,
    ...s
  };
}
const zs = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Np = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Dp = ["INPUT", "SELECT", "TEXTAREA"];
function Lp(e) {
  var t, n;
  const r = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target;
  return (r == null ? void 0 : r.nodeType) !== 1 ? !1 : Dp.includes(r.nodeName) || r.hasAttribute("contenteditable") || !!r.closest(".nokey");
}
const Ec = (e) => "clientX" in e, jn = (e, t) => {
  var n, r;
  const o = Ec(e), a = o ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX, i = o ? e.clientY : (r = e.touches) == null ? void 0 : r[0].clientY;
  return {
    x: a - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Vl = (e, t, n, r, o) => {
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
function Hl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: a }) {
  switch (e) {
    case Oe.Left:
      return [t - fi(t - r, a), n];
    case Oe.Right:
      return [t + fi(r - t, a), n];
    case Oe.Top:
      return [t, n - fi(n - o, a)];
    case Oe.Bottom:
      return [t, n + fi(o - n, a)];
  }
}
function Pc({ sourceX: e, sourceY: t, sourcePosition: n = Oe.Bottom, targetX: r, targetY: o, targetPosition: a = Oe.Top, curvature: i = 0.25 }) {
  const [s, l] = Hl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: i
  }), [u, c] = Hl({
    pos: a,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: i
  }), [d, f, v, y] = Ap({
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
    y
  ];
}
function Mc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  return Lo(i, ca(a)) > 0;
}
const Zp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Bp = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), Wp = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Mp(e) ? n = { ...e } : n = {
    ...e,
    id: Zp(e)
  }, Bp(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Qa({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, a, i, s] = Mc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, a, i, s];
}
const zl = {
  [Oe.Left]: { x: -1, y: 0 },
  [Oe.Right]: { x: 1, y: 0 },
  [Oe.Top]: { x: 0, y: -1 },
  [Oe.Bottom]: { x: 0, y: 1 }
}, Yp = ({ source: e, sourcePosition: t = Oe.Bottom, target: n }) => t === Oe.Left || t === Oe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Nl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function Xp({ source: e, sourcePosition: t = Oe.Bottom, target: n, targetPosition: r = Oe.Top, center: o, offset: a }) {
  const i = zl[t], s = zl[r], l = { x: e.x + i.x * a, y: e.y + i.y * a }, u = { x: n.x + s.x * a, y: n.y + s.y * a }, c = Yp({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let v = [], y, b;
  const x = { x: 0, y: 0 }, $ = { x: 0, y: 0 }, [h, _, w, C] = Mc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (i[d] * s[d] === -1) {
    y = o.x ?? h, b = o.y ?? _;
    const E = [
      { x: y, y: l.y },
      { x: y, y: u.y }
    ], P = [
      { x: l.x, y: b },
      { x: u.x, y: b }
    ];
    i[d] === f ? v = d === "x" ? E : P : v = d === "x" ? P : E;
  } else {
    const E = [{ x: l.x, y: u.y }], P = [{ x: u.x, y: l.y }];
    if (d === "x" ? v = i.x === f ? P : E : v = i.y === f ? E : P, t === r) {
      const I = Math.abs(e[d] - n[d]);
      if (I <= a) {
        const R = Math.min(a - 1, a - I);
        i[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * R : $[d] = (u[d] > n[d] ? -1 : 1) * R;
      }
    }
    if (t !== r) {
      const I = d === "x" ? "y" : "x", R = i[d] === s[I], S = l[I] > u[I], T = l[I] < u[I];
      (i[d] === 1 && (!R && S || R && T) || i[d] !== 1 && (!R && T || R && S)) && (v = d === "x" ? E : P);
    }
    const O = { x: l.x + x.x, y: l.y + x.y }, V = { x: u.x + $.x, y: u.y + $.y }, H = Math.max(Math.abs(O.x - v[0].x), Math.abs(V.x - v[0].x)), D = Math.max(Math.abs(O.y - v[0].y), Math.abs(V.y - v[0].y));
    H >= D ? (y = (O.x + V.x) / 2, b = v[0].y) : (y = v[0].x, b = (O.y + V.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...v,
    { x: u.x + $.x, y: u.y + $.y },
    n
  ], y, b, w, C];
}
function jp(e, t, n, r) {
  const o = Math.min(Nl(e, t) / 2, Nl(t, n) / 2, r), { x: a, y: i } = t;
  if (e.x === a && a === n.x || e.y === i && i === n.y)
    return `L${a} ${i}`;
  if (e.y === i) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${a + o * u},${i}Q ${a},${i} ${a},${i + o * c}`;
  }
  const s = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${a},${i + o * l}Q ${a},${i} ${a + o * s},${i}`;
}
function Ri({ sourceX: e, sourceY: t, sourcePosition: n = Oe.Bottom, targetX: r, targetY: o, targetPosition: a = Oe.Top, borderRadius: i = 5, centerX: s, centerY: l, offset: u = 20 }) {
  const [c, d, f, v, y] = Xp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: a,
    center: { x: s, y: l },
    offset: u
  });
  return [c.reduce((b, x, $) => {
    let h = "";
    return $ > 0 && $ < c.length - 1 ? h = jp(c[$ - 1], x, c[$ + 1], i) : h = `${$ === 0 ? "M" : "L"}${x.x} ${x.y}`, b += h, b;
  }, ""), d, f, v, y];
}
function Dl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Kp(e) {
  var t;
  const { sourceNode: n, targetNode: r } = e;
  if (!Dl(n) || !Dl(r))
    return null;
  const o = n.internals.handleBounds || Ll(n.handles), a = r.internals.handleBounds || Ll(r.handles), i = Al((o == null ? void 0 : o.source) ?? [], e.sourceHandle), s = Al(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Er.Strict ? (a == null ? void 0 : a.target) ?? [] : ((a == null ? void 0 : a.target) ?? []).concat((a == null ? void 0 : a.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (t = e.onError) == null || t.call(e, "008", Ur.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const l = (i == null ? void 0 : i.position) || Oe.Bottom, u = (s == null ? void 0 : s.position) || Oe.Top, c = Ao(n, i, l), d = Ao(r, s, u);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: l,
    targetPosition: u
  };
}
function Ll(e) {
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
function Ao(e, t, n = Oe.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, a = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: i, height: s } = t ?? pr(e);
  if (r)
    return { x: o + i / 2, y: a + s / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case Oe.Top:
      return { x: o + i / 2, y: a };
    case Oe.Right:
      return { x: o + i, y: a + s / 2 };
    case Oe.Bottom:
      return { x: o + i / 2, y: a + s };
    case Oe.Left:
      return { x: o, y: a + s / 2 };
  }
}
function Al(e, t) {
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
    case Oe.Right:
      i = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [0, -100 * a];
      break;
    case Oe.Bottom:
      i[1] = (e.y + e.height) * t.zoom + t.y + r, s[1] = 0;
      break;
    case Oe.Left:
      i = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * a) * t.zoom + t.y
      ], s = [-100, -100 * a];
      break;
  }
  return `translate(${i[0]}px, ${i[1]}px) translate(${s[0]}%, ${s[1]}%)`;
}
const Ns = {
  nodeOrigin: [0, 0],
  nodeExtent: Di,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Gp = {
  ...Ns,
  checkEquality: !0
};
function Ds(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Up(e, t, n) {
  const r = Ds(Ns, n);
  for (const o of e.values())
    if (o.parentId)
      Ls(o, e, t, r);
    else {
      const a = jo(o, r.nodeOrigin), i = eo(o.extent) ? o.extent : r.nodeExtent, s = Pr(a, i, pr(o));
      o.internals.positionAbsolute = s;
    }
}
function Oc(e, t, n, r) {
  var o, a;
  const i = Ds(Gp, r), s = new Map(t), l = i != null && i.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = s.get(u.id);
    if (i.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = jo(u, i.nodeOrigin), f = eo(u.extent) ? u.extent : i.nodeExtent, v = Pr(d, f, pr(u));
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
          z: Tc(u, l),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ls(c, t, n, r);
  }
}
function Jp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ls(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: a, nodeExtent: i } = Ds(Ns, r), s = e.parentId, l = t.get(s);
  if (!l) {
    console.warn(`Parent node ${s} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Jp(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = Qp(e, l, a, i, u), { positionAbsolute: v } = e.internals, y = c !== v.x || d !== v.y;
  (y || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: y ? { x: c, y: d } : v,
      z: f
    }
  });
}
function Tc(e, t) {
  return (Wn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Qp(e, t, n, r, o) {
  const { x: a, y: i } = t.internals.positionAbsolute, s = pr(e), l = jo(e, n), u = eo(e.extent) ? Pr(l, e.extent, s) : l;
  let c = Pr({ x: a + u.x, y: i + u.y }, r, s);
  e.extent === "parent" && (c = $c(c, s, t));
  const d = Tc(e, o), f = t.internals.z ?? 0;
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
    const u = ((o = i.get(s.parentId)) == null ? void 0 : o.expandedRect) ?? Qr(l), c = Cc(u, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: l }, u) => {
    var c;
    const d = l.internals.positionAbsolute, f = pr(l), v = l.origin ?? r, y = s.x < d.x ? Math.round(Math.abs(d.x - s.x)) : 0, b = s.y < d.y ? Math.round(Math.abs(d.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), $ = Math.max(f.height, Math.round(s.height)), h = (x - f.width) * v[0], _ = ($ - f.height) * v[1];
    (y > 0 || b > 0 || h || _) && (a.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - y + h,
        y: l.position.y - b + _
      }
    }), (c = n.get(u)) == null || c.forEach((w) => {
      e.some((C) => C.id === w.id) || a.push({
        id: w.id,
        type: "position",
        position: {
          x: w.position.x + y,
          y: w.position.y + b
        }
      });
    })), (f.width < s.width || f.height < s.height || y || b) && a.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: x + (y ? v[0] * y - h : 0),
        height: $ + (b ? v[1] * b - _ : 0)
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
    const y = zs(f.nodeElement), b = v.measured.width !== y.width || v.measured.height !== y.height;
    if (y.width && y.height && (b || !v.internals.handleBounds || f.force)) {
      const x = f.nodeElement.getBoundingClientRect(), $ = eo(v.extent) ? v.extent : a;
      let { positionAbsolute: h } = v.internals;
      v.parentId && v.extent === "parent" ? h = $c(h, y, t.get(v.parentId)) : $ && (h = Pr(h, $, y));
      const _ = {
        ...v,
        measured: y,
        internals: {
          ...v.internals,
          positionAbsolute: h,
          handleBounds: {
            source: Vl("source", f.nodeElement, x, c, v.id),
            target: Vl("target", f.nodeElement, x, c, v.id)
          }
        }
      };
      t.set(v.id, _), v.parentId && Ls(_, t, n, { nodeOrigin: o }), s = !0, b && (l.push({
        id: v.id,
        type: "dimensions",
        dimensions: y
      }), v.expandParent && v.parentId && d.push({
        id: v.id,
        parentId: v.parentId,
        rect: Qr(_, o)
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
function Il(e, t, n, r, o, a) {
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
function Vc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: a, sourceHandle: i = null, targetHandle: s = null } = r, l = { edgeId: r.id, source: o, target: a, sourceHandle: i, targetHandle: s }, u = `${o}-${i}--${a}-${s}`, c = `${a}-${s}--${o}-${i}`;
    Il("source", l, c, e, o, i), Il("target", l, u, e, a, s), t.set(r.id, r);
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
function Hc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Hc(n, t) : !1;
}
function Rl(e, t, n) {
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
    if ((i.selected || i.id === r) && (!i.parentId || !Hc(i, e)) && (i.draggable || t && typeof i.draggable > "u")) {
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
function Ma({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  function y({ noDragClassName: x, handleSelector: $, domNode: h, isSelectable: _, nodeId: w, nodeClickDistance: C = 0 }) {
    f = fn(h);
    function E({ x: H, y: D }, I) {
      const { nodeLookup: R, nodeExtent: S, snapGrid: T, snapToGrid: k, nodeOrigin: M, onNodeDrag: N, onSelectionDrag: A, onError: W, updateNodePositions: K } = t();
      a = { x: H, y: D };
      let q = !1, re = { x: 0, y: 0, x2: 0, y2: 0 };
      if (s.size > 1 && S) {
        const Q = Ko(s);
        re = Ja(Q);
      }
      for (const [Q, X] of s) {
        if (!R.has(Q))
          continue;
        let ae = { x: H - X.distance.x, y: D - X.distance.y };
        k && (ae = Vs(ae, T));
        let $e = [
          [S[0][0], S[0][1]],
          [S[1][0], S[1][1]]
        ];
        if (s.size > 1 && S && !X.extent) {
          const { positionAbsolute: de } = X.internals, oe = de.x - re.x + S[0][0], we = de.x + X.measured.width - re.x2 + S[1][0], qe = de.y - re.y + S[0][1], Xe = de.y + X.measured.height - re.y2 + S[1][1];
          $e = [
            [oe, qe],
            [we, Xe]
          ];
        }
        const { position: Ce, positionAbsolute: me } = Vp({
          nodeId: Q,
          nextPosition: ae,
          nodeLookup: R,
          nodeExtent: $e,
          nodeOrigin: M,
          onError: W
        });
        q = q || X.position.x !== Ce.x || X.position.y !== Ce.y, X.position = Ce, X.internals.positionAbsolute = me;
      }
      if (q && (K(s, !0), I && (r || N || !w && A))) {
        const [Q, X] = Ma({
          nodeId: w,
          dragItems: s,
          nodeLookup: R
        });
        r == null || r(I, s, Q, X), N == null || N(I, Q, X), w || A == null || A(I, X);
      }
    }
    async function P() {
      if (!c)
        return;
      const { transform: H, panBy: D, autoPanSpeed: I, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(i);
        return;
      }
      const [S, T] = _c(u, c, I);
      (S !== 0 || T !== 0) && (a.x = (a.x ?? 0) - S / H[2], a.y = (a.y ?? 0) - T / H[2], await D({ x: S, y: T }) && E(a, null)), i = requestAnimationFrame(P);
    }
    function O(H) {
      var D;
      const { nodeLookup: I, multiSelectionActive: R, nodesDraggable: S, transform: T, snapGrid: k, snapToGrid: M, selectNodesOnDrag: N, onNodeDragStart: A, onSelectionDragStart: W, unselectNodesAndEdges: K } = t();
      d = !0, (!N || !_) && !R && w && ((D = I.get(w)) != null && D.selected || K()), _ && N && w && (e == null || e(w));
      const q = Pa(H.sourceEvent, { transform: T, snapGrid: k, snapToGrid: M, containerBounds: c });
      if (a = q, s = o0(I, S, q, w), s.size > 0 && (n || A || !w && W)) {
        const [re, Q] = Ma({
          nodeId: w,
          dragItems: s,
          nodeLookup: I
        });
        n == null || n(H.sourceEvent, s, re, Q), A == null || A(H.sourceEvent, re, Q), w || W == null || W(H.sourceEvent, Q);
      }
    }
    const V = Lg().clickDistance(C).on("start", (H) => {
      const { domNode: D, nodeDragThreshold: I, transform: R, snapGrid: S, snapToGrid: T } = t();
      c = (D == null ? void 0 : D.getBoundingClientRect()) || null, v = !1, I === 0 && O(H), a = Pa(H.sourceEvent, { transform: R, snapGrid: S, snapToGrid: T, containerBounds: c }), u = jn(H.sourceEvent, c);
    }).on("drag", (H) => {
      const { autoPanOnNodeDrag: D, transform: I, snapGrid: R, snapToGrid: S, nodeDragThreshold: T, nodeLookup: k } = t(), M = Pa(H.sourceEvent, { transform: I, snapGrid: R, snapToGrid: S, containerBounds: c });
      if ((H.sourceEvent.type === "touchmove" && H.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      w && !k.has(w)) && (v = !0), !v) {
        if (!l && D && d && (l = !0, P()), !d) {
          const N = M.xSnapped - (a.x ?? 0), A = M.ySnapped - (a.y ?? 0);
          Math.sqrt(N * N + A * A) > T && O(H);
        }
        (a.x !== M.xSnapped || a.y !== M.ySnapped) && s && d && (u = jn(H.sourceEvent, c), E(M, H.sourceEvent));
      }
    }).on("end", (H) => {
      if (!(!d || v) && (l = !1, d = !1, cancelAnimationFrame(i), s.size > 0)) {
        const { nodeLookup: D, updateNodePositions: I, onNodeDragStop: R, onSelectionDragStop: S } = t();
        if (I(s, !1), o || R || !w && S) {
          const [T, k] = Ma({
            nodeId: w,
            dragItems: s,
            nodeLookup: D,
            dragging: !1
          });
          o == null || o(H.sourceEvent, s, T, k), R == null || R(H.sourceEvent, T, k), w || S == null || S(H.sourceEvent, k);
        }
      }
    }).filter((H) => {
      const D = H.target;
      return !H.button && (!x || !Rl(D, `.${x}`, h)) && (!$ || Rl(D, $, h));
    });
    f.call(V);
  }
  function b() {
    f == null || f.on(".drag", null);
  }
  return {
    update: y,
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
    Lo(o, Qr(a)) > 0 && r.push(a);
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
      const { x: f, y: v } = Ao(u, d, d.position, !0), y = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(v - e.y, 2));
      y > t || (y < s ? (i = [{ ...d, x: f, y: v }], s = y) : y === s && i.push({ ...d, x: f, y: v }));
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
function zc(e, t, n, r, o, a = !1) {
  var i, s, l;
  const u = r.get(e);
  if (!u)
    return null;
  const c = o === "strict" ? (i = u.internals.handleBounds) == null ? void 0 : i[t] : [...((s = u.internals.handleBounds) == null ? void 0 : s.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c == null ? void 0 : c.find((f) => f.id === n) : c == null ? void 0 : c[0]) ?? null;
  return d && a ? { ...d, ...Ao(u, d, d.position, !0) } : d;
}
function Nc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function u0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Dc = () => !0;
function c0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: a, isTarget: i, domNode: s, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: v, onConnectStart: y, onConnect: b, onConnectEnd: x, isValidConnection: $ = Dc, onReconnectEnd: h, updateConnection: _, getTransform: w, getFromHandle: C, autoPanSpeed: E }) {
  const P = Np(e.target);
  let O = 0, V;
  const { x: H, y: D } = jn(e), I = P == null ? void 0 : P.elementFromPoint(H, D), R = Nc(a, I), S = s == null ? void 0 : s.getBoundingClientRect();
  if (!S || !R)
    return;
  const T = zc(o, R, r, l, t);
  if (!T)
    return;
  let k = jn(e, S), M = !1, N = null, A = !1, W = null;
  function K() {
    if (!c || !S)
      return;
    const [Ce, me] = _c(k, S, E);
    f({ x: Ce, y: me }), O = requestAnimationFrame(K);
  }
  const q = {
    ...T,
    nodeId: o,
    type: R,
    position: T.position
  }, re = l.get(o), Q = {
    inProgress: !0,
    isValid: null,
    from: Ao(re, q, Oe.Left, !0),
    fromHandle: q,
    fromPosition: q.position,
    fromNode: re,
    to: k,
    toHandle: null,
    toPosition: Sl[q.position],
    toNode: null
  };
  _(Q);
  let X = Q;
  y == null || y(e, { nodeId: o, handleId: r, handleType: R });
  function ae(Ce) {
    if (!C() || !q) {
      $e(Ce);
      return;
    }
    const me = w();
    k = jn(Ce, S), V = l0(Fo(k, me, !1, [1, 1]), n, l, q), M || (K(), M = !0);
    const de = Lc(Ce, {
      handle: V,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: i ? "target" : "source",
      isValidConnection: $,
      doc: P,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    W = de.handleDomNode, N = de.connection, A = u0(!!V, de.isValid);
    const oe = {
      // from stays the same
      ...X,
      isValid: A,
      to: V && A ? kc({ x: V.x, y: V.y }, me) : k,
      toHandle: de.toHandle,
      toPosition: A && de.toHandle ? de.toHandle.position : Sl[q.position],
      toNode: de.toHandle ? l.get(de.toHandle.nodeId) : null
    };
    A && V && X.toHandle && oe.toHandle && X.toHandle.type === oe.toHandle.type && X.toHandle.nodeId === oe.toHandle.nodeId && X.toHandle.id === oe.toHandle.id && X.to.x === oe.to.x && X.to.y === oe.to.y || (_(oe), X = oe);
  }
  function $e(Ce) {
    (V || W) && N && A && (b == null || b(N));
    const { inProgress: me, ...de } = X, oe = {
      ...de,
      toPosition: X.toHandle ? X.toPosition : null
    };
    x == null || x(Ce, oe), a && (h == null || h(Ce, oe)), v(), cancelAnimationFrame(O), M = !1, A = !1, N = null, W = null, P.removeEventListener("mousemove", ae), P.removeEventListener("mouseup", $e), P.removeEventListener("touchmove", ae), P.removeEventListener("touchend", $e);
  }
  P.addEventListener("mousemove", ae), P.addEventListener("mouseup", $e), P.addEventListener("touchmove", ae), P.addEventListener("touchend", $e);
}
function Lc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: a, doc: i, lib: s, flowId: l, isValidConnection: u = Dc, nodeLookup: c }) {
  const d = a === "target", f = t ? i.querySelector(`.${s}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: v, y } = jn(e), b = i.elementFromPoint(v, y), x = b != null && b.classList.contains(`${s}-flow__handle`) ? b : f, $ = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const h = Nc(void 0, x), _ = x.getAttribute("data-nodeid"), w = x.getAttribute("data-handleid"), C = x.classList.contains("connectable"), E = x.classList.contains("connectableend");
    if (!_ || !h)
      return $;
    const P = {
      source: d ? _ : r,
      sourceHandle: d ? w : o,
      target: d ? r : _,
      targetHandle: d ? o : w
    };
    $.connection = P;
    const O = C && E && (n === Er.Strict ? d && h === "source" || !d && h === "target" : _ !== r || w !== o);
    $.isValid = O && u(P), $.toHandle = zc(_, h, w, c, n, !1);
  }
  return $;
}
const d0 = {
  onPointerDown: c0,
  isValid: Lc
};
function f0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = fn(e);
  function a({ translateExtent: s, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: v = !1 }) {
    const y = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -_.sourceEvent.deltaY * (_.sourceEvent.deltaMode === 1 ? 0.05 : _.sourceEvent.deltaMode ? 1 : 2e-3) * c, E = w[2] * Math.pow(2, C);
      t.scaleTo(E);
    };
    let b = [0, 0];
    const x = (_) => {
      (_.sourceEvent.type === "mousedown" || _.sourceEvent.type === "touchstart") && (b = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ]);
    }, $ = (_) => {
      const w = n();
      if (_.sourceEvent.type !== "mousemove" && _.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        _.sourceEvent.clientX ?? _.sourceEvent.touches[0].clientX,
        _.sourceEvent.clientY ?? _.sourceEvent.touches[0].clientY
      ], E = [C[0] - b[0], C[1] - b[1]];
      b = C;
      const P = r() * Math.max(w[2], Math.log(w[2])) * (v ? -1 : 1), O = {
        x: w[0] - E[0] * P,
        y: w[1] - E[1] * P
      }, V = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: O.x,
        y: O.y,
        zoom: w[2]
      }, V, s);
    }, h = wc().on("start", x).on("zoom", d ? $ : null).on("zoom.wheel", f ? y : null);
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
}), Oa = ({ x: e, y: t, zoom: n }) => la.translate(e, t).scale(n), Rr = (e, t) => e.target.closest(`.${t}`), Ac = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ta = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Ic = (e) => {
  const t = e.ctrlKey && Ii() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function g0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: a, zoomOnPinch: i, onPanZoomStart: s, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (Rr(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && i) {
      const x = pn(c), $ = Ic(c), h = d * Math.pow(2, $);
      r.scaleTo(n, h, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let v = o === ur.Vertical ? 0 : c.deltaX * f, y = o === ur.Horizontal ? 0 : c.deltaY * f;
    !Ii() && c.shiftKey && o !== ur.Vertical && (v = c.deltaY * f, y = 0), r.translateBy(
      n,
      -(v / d) * a,
      -(y / d) * a,
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
    if (!t && r.type === "wheel" && !r.ctrlKey || Rr(r, e))
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
    if (c.button === 1 && c.type === "mousedown" && (Rr(c, `${u}-flow__node`) || Rr(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !a && !n || i || Rr(c, s) && c.type === "wheel" || Rr(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((d = c.touches) == null ? void 0 : d.length) > 1)
      return c.preventDefault(), !1;
    if (!f && !o && !v && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && y;
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
  }, d = e.getBoundingClientRect(), f = wc().clickDistance(!Wn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), v = fn(e).call(f);
  _({
    x: a.x,
    y: a.y,
    zoom: Jr(a.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const y = v.on("wheel.zoom"), b = v.on("dblclick.zoom");
  f.wheelDelta(Ic);
  function x(I, R) {
    return v ? new Promise((S) => {
      f == null || f.transform(Ta(v, R == null ? void 0 : R.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: I, noPanClassName: R, onPaneContextMenu: S, userSelectionActive: T, panOnScroll: k, panOnDrag: M, panOnScrollMode: N, panOnScrollSpeed: A, preventScrolling: W, zoomOnPinch: K, zoomOnScroll: q, zoomOnDoubleClick: re, zoomActivationKeyPressed: Q, lib: X, onTransformChange: ae }) {
    T && !c.isZoomingOrPanning && h();
    const $e = k && !Q && !T ? g0({
      zoomPanValues: c,
      noWheelClassName: I,
      d3Selection: v,
      d3Zoom: f,
      panOnScrollMode: N,
      panOnScrollSpeed: A,
      zoomOnPinch: K,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: l
    }) : h0({
      noWheelClassName: I,
      preventScrolling: W,
      d3ZoomHandler: y
    });
    if (v.on("wheel.zoom", $e, { passive: !1 }), !T) {
      const me = p0({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: s
      });
      f.on("start", me);
      const de = m0({
        zoomPanValues: c,
        panOnDrag: M,
        onPaneContextMenu: !!S,
        onPanZoom: i,
        onTransformChange: ae
      });
      f.on("zoom", de);
      const oe = y0({
        zoomPanValues: c,
        panOnDrag: M,
        panOnScroll: k,
        onPaneContextMenu: S,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", oe);
    }
    const Ce = w0({
      zoomActivationKeyPressed: Q,
      panOnDrag: M,
      zoomOnScroll: q,
      panOnScroll: k,
      zoomOnDoubleClick: re,
      zoomOnPinch: K,
      userSelectionActive: T,
      noPanClassName: R,
      noWheelClassName: I,
      lib: X
    });
    f.filter(Ce), re ? v.on("dblclick.zoom", b) : v.on("dblclick.zoom", null);
  }
  function h() {
    f.on("zoom", null);
  }
  async function _(I, R, S) {
    const T = Oa(I), k = f == null ? void 0 : f.constrain()(T, R, S);
    return k && await x(k), new Promise((M) => M(k));
  }
  async function w(I, R) {
    const S = Oa(I);
    return await x(S, R), new Promise((T) => T(S));
  }
  function C(I) {
    if (v) {
      const R = Oa(I), S = v.property("__zoom");
      (S.k !== I.zoom || S.x !== I.x || S.y !== I.y) && (f == null || f.transform(v, R, null, { sync: !0 }));
    }
  }
  function E() {
    const I = v ? yc(v.node()) : { x: 0, y: 0, k: 1 };
    return { x: I.x, y: I.y, zoom: I.k };
  }
  function P(I, R) {
    return v ? new Promise((S) => {
      f == null || f.scaleTo(Ta(v, R == null ? void 0 : R.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function O(I, R) {
    return v ? new Promise((S) => {
      f == null || f.scaleBy(Ta(v, R == null ? void 0 : R.duration, () => S(!0)), I);
    }) : Promise.resolve(!1);
  }
  function V(I) {
    f == null || f.scaleExtent(I);
  }
  function H(I) {
    f == null || f.translateExtent(I);
  }
  function D(I) {
    const R = !Wn(I) || I < 0 ? 0 : I;
    f == null || f.clickDistance(R);
  }
  return {
    update: $,
    destroy: h,
    setViewport: w,
    setViewportConstrained: _,
    getViewport: E,
    scaleTo: P,
    scaleBy: O,
    setScaleExtent: V,
    setTranslateExtent: H,
    syncViewport: C,
    setClickDistance: D
  };
}
var Zl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Zl || (Zl = {}));
var x0 = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function gr(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(re, "$connectable", n), a = () => ne(Ce, "$connectionRadius", n), i = () => ne(ae, "$domNode", n), s = () => ne($e, "$nodeLookup", n), l = () => ne(X, "$connectionMode", n), u = () => ne(oe, "$lib", n), c = () => ne(Fe, "$autoPanOnConnect", n), d = () => ne(Ge, "$flowId", n), f = () => ne(de, "$isValidConnectionStore", n), v = () => ne(qe, "$onedgecreate", n), y = () => ne(ue, "$onConnectAction", n), b = () => ne(Ee, "$onConnectStartAction", n), x = () => ne(De, "$onConnectEndAction", n), $ = () => ne(me, "$viewport", n), h = () => ne(yt, "$connection", n), _ = () => ne(Re, "$edges", n), w = () => ne(ce, "$connectionLookup", n), C = se(), E = se(), P = se(), O = se(), V = se(), H = se(), D = se(), I = se();
  let R = m(t, "id", 12, void 0), S = m(t, "type", 12, "source"), T = m(t, "position", 28, () => Oe.Top), k = m(t, "style", 12, void 0), M = m(t, "isValidConnection", 12, void 0), N = m(t, "onconnect", 12, void 0), A = m(t, "ondisconnect", 12, void 0), W = m(t, "isConnectable", 12, void 0), K = m(t, "class", 12, void 0);
  const q = Cr("svelteflow__node_id"), re = Cr("svelteflow__node_connectable"), Q = tt(), {
    connectionMode: X,
    domNode: ae,
    nodeLookup: $e,
    connectionRadius: Ce,
    viewport: me,
    isValidConnection: de,
    lib: oe,
    addEdge: we,
    onedgecreate: qe,
    panBy: Xe,
    cancelConnection: Ie,
    updateConnection: ee,
    autoPanOnConnect: Fe,
    edges: Re,
    connectionLookup: ce,
    onconnect: ue,
    onconnectstart: Ee,
    onconnectend: De,
    flowId: Ge,
    connection: yt
  } = Q;
  function at(Ve) {
    const lt = Ec(Ve);
    (lt && Ve.button === 0 || !lt) && d0.onPointerDown(Ve, {
      handleId: g(P),
      nodeId: q,
      isTarget: g(C),
      connectionRadius: a(),
      domNode: i(),
      nodeLookup: s(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: M() ?? f(),
      updateConnection: ee,
      cancelConnection: Ie,
      panBy: Xe,
      onConnect: (xe) => {
        var ct;
        const vt = v() ? v()(xe) : xe;
        vt && (we(vt), (ct = y()) == null || ct(xe));
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
        $().x,
        $().y,
        $().zoom
      ],
      getFromHandle: () => h().fromHandle
    });
  }
  let te = se(null), Le = se();
  pe(() => J(S()), () => {
    G(C, S() === "target");
  }), pe(
    () => (J(W()), o()),
    () => {
      G(E, W() !== void 0 ? W() : o());
    }
  ), pe(() => J(R()), () => {
    G(P, R() || null);
  }), pe(
    () => (J(N()), J(A()), _(), w(), J(S()), J(R())),
    () => {
      (N() || A()) && (_(), G(Le, w().get(`${q}-${S()}${R() ? `-${R()}` : ""}`)));
    }
  ), pe(
    () => (g(te), g(Le), J(A()), J(N())),
    () => {
      if (g(te) && !Ep(g(Le), g(te))) {
        const Ve = g(Le) ?? /* @__PURE__ */ new Map();
        El(g(te), Ve, A()), El(Ve, g(te), N());
      }
      G(te, g(Le) ?? /* @__PURE__ */ new Map());
    }
  ), pe(() => h(), () => {
    G(O, !!h().fromHandle);
  }), pe(
    () => (h(), J(S()), g(P)),
    () => {
      var Ve, lt, xe;
      G(V, ((Ve = h().fromHandle) == null ? void 0 : Ve.nodeId) === q && ((lt = h().fromHandle) == null ? void 0 : lt.type) === S() && ((xe = h().fromHandle) == null ? void 0 : xe.id) === g(P));
    }
  ), pe(
    () => (h(), J(S()), g(P)),
    () => {
      var Ve, lt, xe;
      G(H, ((Ve = h().toHandle) == null ? void 0 : Ve.nodeId) === q && ((lt = h().toHandle) == null ? void 0 : lt.type) === S() && ((xe = h().toHandle) == null ? void 0 : xe.id) === g(P));
    }
  ), pe(
    () => (l(), h(), J(S()), g(P)),
    () => {
      var Ve, lt, xe;
      G(D, l() === Er.Strict ? ((Ve = h().fromHandle) == null ? void 0 : Ve.type) !== S() : q !== ((lt = h().fromHandle) == null ? void 0 : lt.nodeId) || g(P) !== ((xe = h().fromHandle) == null ? void 0 : xe.id));
    }
  ), pe(() => (g(H), h()), () => {
    G(I, g(H) && h().isValid);
  }), Ct(), Ze();
  var ye = x0();
  he(ye, "data-nodeid", q);
  let Jt;
  var Rt = j(ye);
  Mt(Rt, t, "default", {}), Y(ye), Te(
    (Ve) => {
      he(ye, "data-handleid", g(P)), he(ye, "data-handlepos", T()), he(ye, "data-id", `${d() ?? ""}-${q ?? ""}-${R() || ""}-${S() ?? ""}`), Jt = Lt(ye, 1, Dn(Ve), null, Jt, {
        valid: g(I),
        connectingto: g(H),
        connectingfrom: g(V),
        source: !g(C),
        target: g(C),
        connectablestart: g(E),
        connectableend: g(E),
        connectable: g(E),
        connectionindicator: g(E) && (!g(O) || g(D))
      }), he(ye, "style", k());
    },
    [
      () => It([
        "svelte-flow__handle",
        `svelte-flow__handle-${T()}`,
        "nodrag",
        "nopan",
        T(),
        K()
      ])
    ],
    be
  ), Ue("mousedown", ye, at), Ue("touchstart", ye, at), L(e, ye);
  var cn = ve({
    get id() {
      return R();
    },
    set id(Ve) {
      R(Ve), p();
    },
    get type() {
      return S();
    },
    set type(Ve) {
      S(Ve), p();
    },
    get position() {
      return T();
    },
    set position(Ve) {
      T(Ve), p();
    },
    get style() {
      return k();
    },
    set style(Ve) {
      k(Ve), p();
    },
    get isValidConnection() {
      return M();
    },
    set isValidConnection(Ve) {
      M(Ve), p();
    },
    get onconnect() {
      return N();
    },
    set onconnect(Ve) {
      N(Ve), p();
    },
    get ondisconnect() {
      return A();
    },
    set ondisconnect(Ve) {
      A(Ve), p();
    },
    get isConnectable() {
      return W();
    },
    set isConnectable(Ve) {
      W(Ve), p();
    },
    get class() {
      return K();
    },
    set class(Ve) {
      K(Ve), p();
    }
  });
  return r(), cn;
}
le(
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
var $0 = /* @__PURE__ */ ie("<!> <!>", 1);
function Zi(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "targetPosition", "sourcePosition"]), fe(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0), a = m(t, "sourcePosition", 12, void 0);
  Ze();
  var i = $0(), s = ke(i);
  const l = /* @__PURE__ */ be(() => o() ?? Oe.Top);
  gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(s), c = B(u);
  const d = /* @__PURE__ */ be(() => a() ?? Oe.Bottom);
  return gr(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), Te(() => {
    var f;
    return an(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), L(e, i), ve({
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
      return a();
    },
    set sourcePosition(f) {
      a(f), p();
    }
  });
}
le(
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
var _0 = /* @__PURE__ */ ie(" <!>", 1);
function Rc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "sourcePosition"]), fe(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "sourcePosition", 12, void 0);
  Ze(), Ne();
  var a = _0(), i = ke(a), s = B(i);
  const l = /* @__PURE__ */ be(() => o() ?? Oe.Bottom);
  return gr(s, {
    type: "source",
    get position() {
      return g(l);
    }
  }), Te(() => {
    var u;
    return an(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, a), ve({
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
le(Rc, { data: {}, sourcePosition: {} }, [], [], !0);
var C0 = /* @__PURE__ */ ie(" <!>", 1);
function Zc(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  ft(n, ["data", "targetPosition"]), fe(t, !1);
  let r = m(t, "data", 28, () => ({ label: "Node" })), o = m(t, "targetPosition", 12, void 0);
  Ze(), Ne();
  var a = C0(), i = ke(a), s = B(i);
  const l = /* @__PURE__ */ be(() => o() ?? Oe.Top);
  return gr(s, {
    type: "target",
    get position() {
      return g(l);
    }
  }), Te(() => {
    var u;
    return an(i, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), L(e, a), ve({
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
le(Zc, { data: {}, targetPosition: {} }, [], [], !0);
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
le(Bc, {}, [], [], !0);
function Bl(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Bi(e, { target: t, domNode: n }) {
  return Bl(e, n, t), {
    async update({ target: r, domNode: o }) {
      Bl(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var k0 = /* @__PURE__ */ ie("<div><!></div>");
function Wc(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(a, "$domNode", n), { domNode: a } = tt();
  Ze();
  var i = k0(), s = j(i);
  Mt(s, t, "default", {}), Y(i), Pt(i, (l, u) => Bi == null ? void 0 : Bi(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), L(e, i), ve(), r();
}
le(Wc, {}, ["default"], [], !0);
function Yc() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: a, elementsSelectable: i } = tt();
  return (s) => {
    const l = F(e).get(s);
    if (!l) {
      console.warn("012", Ur.error012(s));
      return;
    }
    (l.selectable || F(i) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && F(r) && a({ nodes: [], edges: [l] }) : o([s]));
  };
}
var S0 = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Xc(e, t) {
  fe(t, !1);
  let n = m(t, "style", 12, void 0), r = m(t, "x", 12, void 0), o = m(t, "y", 12, void 0);
  const a = Yc(), i = Cr("svelteflow__edge_id");
  return Ze(), Wc(e, {
    children: (s, l) => {
      var u = S0(), c = j(u);
      Mt(c, t, "default", {}), Y(u), Te(() => {
        he(u, "style", "pointer-events: all;" + n()), ht(u, "transform", `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`);
      }), Ue("keyup", u, () => {
      }), Ue("click", u, () => {
        i && a(i);
      }), L(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
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
le(Xc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var E0 = /* @__PURE__ */ Se('<path fill="none" class="svelte-flow__edge-interaction"></path>'), P0 = /* @__PURE__ */ Se('<path fill="none"></path><!><!>', 1);
function qo(e, t) {
  fe(t, !1);
  let n = m(t, "id", 12, void 0), r = m(t, "path", 12), o = m(t, "label", 12, void 0), a = m(t, "labelX", 12, void 0), i = m(t, "labelY", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "markerStart", 12, void 0), u = m(t, "markerEnd", 12, void 0), c = m(t, "style", 12, void 0), d = m(t, "interactionWidth", 12, 20), f = m(t, "class", 12, void 0), v = d() === void 0 ? 20 : d();
  Ze();
  var y = P0(), b = ke(y), x = B(b);
  {
    var $ = (w) => {
      var C = E0();
      he(C, "stroke-opacity", 0), he(C, "stroke-width", v), Te(() => he(C, "d", r())), L(w, C);
    };
    Pe(x, (w) => {
      v && w($);
    });
  }
  var h = B(x);
  {
    var _ = (w) => {
      Xc(w, {
        get x() {
          return a();
        },
        get y() {
          return i();
        },
        get style() {
          return s();
        },
        children: (C, E) => {
          Ne();
          var P = Ke();
          Te(() => an(P, o())), L(C, P);
        },
        $$slots: { default: !0 }
      });
    };
    Pe(h, (w) => {
      o() && w(_);
    });
  }
  return Te(
    (w) => {
      he(b, "id", n()), he(b, "d", r()), Lt(b, 0, Dn(w)), he(b, "marker-start", l()), he(b, "marker-end", u()), he(b, "style", c());
    },
    [
      () => It(["svelte-flow__edge-path", f()])
    ],
    be
  ), L(e, y), ve({
    get id() {
      return n();
    },
    set id(w) {
      n(w), p();
    },
    get path() {
      return r();
    },
    set path(w) {
      r(w), p();
    },
    get label() {
      return o();
    },
    set label(w) {
      o(w), p();
    },
    get labelX() {
      return a();
    },
    set labelX(w) {
      a(w), p();
    },
    get labelY() {
      return i();
    },
    set labelY(w) {
      i(w), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(w) {
      s(w), p();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), p();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), p();
    },
    get style() {
      return c();
    },
    set style(w) {
      c(w), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), p();
    },
    get class() {
      return f();
    },
    set class(w) {
      f(w), p();
    }
  });
}
le(
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
function Wi(e, t) {
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
  const r = se(), o = se(), a = se();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), $ = m(t, "targetPosition", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(b()), J(x()), J(y()), J($())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(a, h[2])))(Pc({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: y(),
        targetPosition: $()
      }));
    }
  ), Ct(), Ze(), qo(e, {
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
      i(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), p();
    }
  });
}
le(
  Wi,
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
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), fe(t, !1);
  const r = se(), o = se(), a = se();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), $ = m(t, "targetPosition", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(b()), J(x()), J(y()), J($())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(a, h[2])))(Ri({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: y(),
        targetPosition: $()
      }));
    }
  ), Ct(), Ze(), qo(e, {
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
      i(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), p();
    }
  });
}
le(
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
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
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
    "targetX",
    "targetY"
  ]), fe(t, !1);
  const r = se(), o = se(), a = se();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "targetX", 12), b = m(t, "targetY", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(y()), J(b())),
    () => {
      ((x) => (G(r, x[0]), G(o, x[1]), G(a, x[2])))(Qa({
        sourceX: f(),
        sourceY: v(),
        targetX: y(),
        targetY: b()
      }));
    }
  ), Ct(), Ze(), qo(e, {
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
      i(x), p();
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
      return y();
    },
    set targetX(x) {
      y(x), p();
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
  const r = se(), o = se(), a = se();
  let i = m(t, "label", 12, void 0), s = m(t, "labelStyle", 12, void 0), l = m(t, "style", 12, void 0), u = m(t, "markerStart", 12, void 0), c = m(t, "markerEnd", 12, void 0), d = m(t, "interactionWidth", 12, void 0), f = m(t, "sourceX", 12), v = m(t, "sourceY", 12), y = m(t, "sourcePosition", 12), b = m(t, "targetX", 12), x = m(t, "targetY", 12), $ = m(t, "targetPosition", 12);
  return pe(
    () => (g(r), g(o), g(a), J(f()), J(v()), J(b()), J(x()), J(y()), J($())),
    () => {
      ((h) => (G(r, h[0]), G(o, h[1]), G(a, h[2])))(Ri({
        sourceX: f(),
        sourceY: v(),
        targetX: b(),
        targetY: x(),
        sourcePosition: y(),
        targetPosition: $(),
        borderRadius: 0
      }));
    }
  ), Ct(), Ze(), qo(e, {
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
      i(h), p();
    },
    get labelStyle() {
      return s();
    },
    set labelStyle(h) {
      s(h), p();
    },
    get style() {
      return l();
    },
    set style(h) {
      l(h), p();
    },
    get markerStart() {
      return u();
    },
    set markerStart(h) {
      u(h), p();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(h) {
      c(h), p();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(h) {
      d(h), p();
    },
    get sourceX() {
      return f();
    },
    set sourceX(h) {
      f(h), p();
    },
    get sourceY() {
      return v();
    },
    set sourceY(h) {
      v(h), p();
    },
    get sourcePosition() {
      return y();
    },
    set sourcePosition(h) {
      y(h), p();
    },
    get targetX() {
      return b();
    },
    set targetX(h) {
      b(h), p();
    },
    get targetY() {
      return x();
    },
    set targetY(h) {
      x(h), p();
    },
    get targetPosition() {
      return $();
    },
    set targetPosition(h) {
      $(h), p();
    }
  });
}
le(
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
function M0(e, t) {
  const n = e.set, r = t.set, o = F(e), a = F(t);
  let i = o.length === 0 && a.length > 0 ? a : o;
  e.set(i);
  const s = (l) => {
    const u = n(l);
    return i = u, r(i), u;
  };
  e.set = t.set = s, e.update = t.update = (l) => s(l(i));
}
function O0(e, t) {
  const n = e.set, r = t.set;
  let o = F(t);
  e.set(o);
  const a = (i) => {
    n(i), r(i), o = i;
  };
  e.set = t.set = a, e.update = t.update = (i) => a(i(o));
}
const T0 = (e, t, n) => {
  if (!n)
    return;
  const r = F(e), o = t.set, a = n.set;
  let i = n ? F(n) : { x: 0, y: 0, zoom: 1 };
  t.set(i), t.set = (s) => (o(s), a(s), i = s, s), n.set = (s) => (r == null || r.syncViewport(s), o(s), a(s), i = s, s), t.update = (s) => {
    t.set(s(i));
  }, n.update = (s) => {
    n.set(s(i));
  };
}, V0 = (e, t, n, r = [0, 0], o = Di) => {
  const { subscribe: a, set: i, update: s } = _e([]);
  let l = e, u = {}, c = !0;
  const d = (b) => (Oc(b, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = b, i(l), l), f = (b) => d(b(l)), v = (b) => {
    u = b;
  }, y = (b) => {
    c = b.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: a,
    set: d,
    update: f,
    setDefaultOptions: v,
    setOptions: y
  };
}, H0 = (e, t, n, r) => {
  const { subscribe: o, set: a, update: i } = _e([]);
  let s = e, l = {};
  const u = (f) => {
    const v = l ? f.map((y) => ({ ...l, ...y })) : f;
    Vc(t, n, v), s = v, a(s);
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
  straight: Kc,
  smoothstep: jc,
  default: Wi,
  step: Fc
}, z0 = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) => {
  const s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = a ?? [0, 0], f = i ?? Di;
  Oc(e, s, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Vc(u, c, t);
  let v = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const y = Ko(s, {
      filter: (b) => !!((b.width || b.initialWidth) && (b.height || b.initialHeight))
    });
    v = Hs(y, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: _e(null),
    nodes: V0(e, s, l, d, f),
    nodeLookup: dn(s),
    parentLookup: dn(l),
    edgeLookup: dn(c),
    visibleNodes: dn([]),
    edges: H0(t, u, c),
    visibleEdges: dn([]),
    connectionLookup: dn(u),
    height: _e(500),
    width: _e(500),
    minZoom: _e(0.5),
    maxZoom: _e(2),
    nodeOrigin: _e(d),
    nodeDragThreshold: _e(1),
    nodeExtent: _e(f),
    translateExtent: _e(Di),
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
    selectionMode: _e(Li.Partial),
    nodeTypes: _e(qc),
    edgeTypes: _e(Gc),
    viewport: _e(v),
    connectionMode: _e(Er.Strict),
    domNode: _e(null),
    connection: dn(Ga),
    connectionLineType: _e(Yr.Bezier),
    connectionRadius: _e(20),
    isValidConnection: _e(() => !0),
    nodesDraggable: _e(!0),
    nodesConnectable: _e(!0),
    elementsSelectable: _e(!0),
    selectNodesOnDrag: _e(!0),
    markers: dn([]),
    defaultMarkerColor: _e("#b1b1b7"),
    lib: dn("svelte"),
    onlyRenderVisibleElements: _e(!1),
    onerror: _e(Hp),
    ondelete: _e(void 0),
    onedgecreate: _e(void 0),
    onconnect: _e(void 0),
    onconnectstart: _e(void 0),
    onconnectend: _e(void 0),
    onbeforedelete: _e(void 0),
    nodesInitialized: _e(!1),
    edgesInitialized: _e(!1),
    viewportInitialized: _e(!1),
    initialized: dn(!1)
  };
};
function N0(e) {
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
    const c = Kp({
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
function D0(e) {
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
  const s = z0({
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
    const M = F(s.edges);
    s.edges.set(Wp(k, M));
  }
  const d = (k, M = !1) => {
    var N;
    const A = F(s.nodeLookup);
    for (const [W, K] of k) {
      const q = (N = A.get(W)) == null ? void 0 : N.internals.userNode;
      q && (q.position = K.position, q.dragging = M);
    }
    s.nodes.update((W) => W);
  };
  function f(k) {
    var M, N, A;
    const W = F(s.nodeLookup), K = F(s.parentLookup), { changes: q, updatedInternals: re } = t0(k, W, F(s.parentLookup), F(s.domNode), F(s.nodeOrigin));
    if (re) {
      if (Up(W, K, { nodeOrigin: a, nodeExtent: i }), !F(s.fitViewOnInitDone) && F(s.fitViewOnInit)) {
        const Q = F(s.fitViewOptions), X = y({
          ...Q,
          nodes: Q == null ? void 0 : Q.nodes
        });
        s.fitViewOnInitDone.set(X);
      }
      for (const Q of q) {
        const X = (M = W.get(Q.id)) == null ? void 0 : M.internals.userNode;
        if (X)
          switch (Q.type) {
            case "dimensions": {
              const ae = { ...X.measured, ...Q.dimensions };
              Q.setAttributes && (X.width = ((N = Q.dimensions) == null ? void 0 : N.width) ?? X.width, X.height = ((A = Q.dimensions) == null ? void 0 : A.height) ?? X.height), X.measured = ae;
              break;
            }
            case "position":
              X.position = Q.position ?? X.position;
              break;
          }
      }
      s.nodes.update((Q) => Q), F(s.nodesInitialized) || s.nodesInitialized.set(!0);
    }
  }
  function v(k) {
    const M = F(s.panZoom), N = F(s.domNode);
    if (!M || !N)
      return Promise.resolve(!1);
    const { width: A, height: W } = zs(N), K = Pl(F(s.nodeLookup), k);
    return Ml({
      nodes: K,
      width: A,
      height: W,
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: M
    }, k);
  }
  function y(k) {
    const M = F(s.panZoom);
    if (!M)
      return !1;
    const N = Pl(F(s.nodeLookup), k);
    return Ml({
      nodes: N,
      width: F(s.width),
      height: F(s.height),
      minZoom: F(s.minZoom),
      maxZoom: F(s.maxZoom),
      panZoom: M
    }, k), N.size > 0;
  }
  function b(k, M) {
    const N = F(s.panZoom);
    return N ? N.scaleBy(k, M) : Promise.resolve(!1);
  }
  function x(k) {
    return b(1.2, k);
  }
  function $(k) {
    return b(1 / 1.2, k);
  }
  function h(k) {
    const M = F(s.panZoom);
    M && (M.setScaleExtent([k, F(s.maxZoom)]), s.minZoom.set(k));
  }
  function _(k) {
    const M = F(s.panZoom);
    M && (M.setScaleExtent([F(s.minZoom), k]), s.maxZoom.set(k));
  }
  function w(k) {
    const M = F(s.panZoom);
    M && (M.setTranslateExtent(k), s.translateExtent.set(k));
  }
  function C(k) {
    let M = !1;
    return k.forEach((N) => {
      N.selected && (N.selected = !1, M = !0);
    }), M;
  }
  function E(k) {
    var M;
    (M = F(s.panZoom)) == null || M.setClickDistance(k);
  }
  function P(k) {
    C((k == null ? void 0 : k.nodes) || F(s.nodes)) && s.nodes.set(F(s.nodes)), C((k == null ? void 0 : k.edges) || F(s.edges)) && s.edges.set(F(s.edges));
  }
  s.deleteKeyPressed.subscribe(async (k) => {
    var M;
    if (k) {
      const N = F(s.nodes), A = F(s.edges), W = N.filter((Q) => Q.selected), K = A.filter((Q) => Q.selected), { nodes: q, edges: re } = await xc({
        nodesToRemove: W,
        edgesToRemove: K,
        nodes: N,
        edges: A,
        onBeforeDelete: F(s.onbeforedelete)
      });
      (q.length || re.length) && (s.nodes.update((Q) => Q.filter((X) => !q.some((ae) => ae.id === X.id))), s.edges.update((Q) => Q.filter((X) => !re.some((ae) => ae.id === X.id))), (M = F(s.ondelete)) == null || M({
        nodes: q,
        edges: re
      }));
    }
  });
  function O(k) {
    const M = F(s.multiselectionKeyPressed);
    s.nodes.update((N) => N.map((A) => {
      const W = k.includes(A.id), K = M && A.selected || W;
      return A.selected = K, A;
    })), M || s.edges.update((N) => N.map((A) => (A.selected = !1, A)));
  }
  function V(k) {
    const M = F(s.multiselectionKeyPressed);
    s.edges.update((N) => N.map((A) => {
      const W = k.includes(A.id), K = M && A.selected || W;
      return A.selected = K, A;
    })), M || s.nodes.update((N) => N.map((A) => (A.selected = !1, A)));
  }
  function H(k) {
    var M;
    const N = (M = F(s.nodes)) == null ? void 0 : M.find((A) => A.id === k);
    if (!N) {
      console.warn("012", Ur.error012(k));
      return;
    }
    s.selectionRect.set(null), s.selectionRectMode.set(null), N.selected ? N.selected && F(s.multiselectionKeyPressed) && P({ nodes: [N], edges: [] }) : O([k]);
  }
  function D(k) {
    const M = F(s.viewport);
    return n0({
      delta: k,
      panZoom: F(s.panZoom),
      transform: [M.x, M.y, M.zoom],
      translateExtent: F(s.translateExtent),
      width: F(s.width),
      height: F(s.height)
    });
  }
  const I = _e(Ga), R = (k) => {
    I.set({ ...k });
  };
  function S() {
    I.set(Ga);
  }
  function T() {
    s.fitViewOnInitDone.set(!1), s.selectionRect.set(null), s.selectionRectMode.set(null), s.snapGrid.set(null), s.isValidConnection.set(() => !0), P(), S();
  }
  return {
    // state
    ...s,
    // derived state
    visibleEdges: N0(s),
    visibleNodes: D0(s),
    connection: lr([I, s.viewport], ([k, M]) => k.inProgress ? {
      ...k,
      to: Fo(k.to, [M.x, M.y, M.zoom])
    } : { ...k }),
    markers: lr([s.edges, s.defaultMarkerColor, s.flowId], ([k, M, N]) => Fp(k, { defaultColor: M, id: N })),
    initialized: (() => {
      let k = !1;
      const M = F(s.nodes).length, N = F(s.edges).length;
      return lr([s.nodesInitialized, s.edgesInitialized, s.viewportInitialized], ([A, W, K]) => k || (M === 0 ? k = K : N === 0 ? k = K && A : k = K && A && W, k));
    })(),
    // actions
    syncNodeStores: (k) => M0(s.nodes, k),
    syncEdgeStores: (k) => O0(s.edges, k),
    syncViewport: (k) => T0(s.panZoom, s.viewport, k),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: $,
    fitView: (k) => v(k),
    setMinZoom: h,
    setMaxZoom: _,
    setTranslateExtent: w,
    setPaneClickDistance: E,
    unselectNodesAndEdges: P,
    addSelectedNodes: O,
    addSelectedEdges: V,
    handleNodeSelection: H,
    panBy: D,
    updateConnection: R,
    cancelConnection: S,
    reset: T
  };
}
function tt() {
  const e = Cr(fa);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function L0({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i }) {
  const s = Uc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: a, nodeExtent: i });
  return Fr(fa, {
    getStore: () => s
  }), s;
}
function Wl(e, t) {
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
var A0 = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const I0 = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Jc(e, t) {
  fe(t, !1), it(e, I0);
  const [n, r] = ut(), o = () => ne(N, "$panActivationKeyPressed", n), a = () => ne(R, "$minZoom", n), i = () => ne(S, "$maxZoom", n), s = () => ne(A, "$zoomActivationKeyPressed", n), l = () => ne(I, "$selectionRect", n), u = () => ne(k, "$translateExtent", n), c = () => ne(M, "$lib", n), d = se(), f = se(), v = se();
  let y = m(t, "initialViewport", 12, void 0), b = m(t, "onMoveStart", 12, void 0), x = m(t, "onMove", 12, void 0), $ = m(t, "onMoveEnd", 12, void 0), h = m(t, "panOnScrollMode", 12), _ = m(t, "preventScrolling", 12), w = m(t, "zoomOnScroll", 12), C = m(t, "zoomOnDoubleClick", 12), E = m(t, "zoomOnPinch", 12), P = m(t, "panOnDrag", 12), O = m(t, "panOnScroll", 12), V = m(t, "paneClickDistance", 12);
  const {
    viewport: H,
    panZoom: D,
    selectionRect: I,
    minZoom: R,
    maxZoom: S,
    dragging: T,
    translateExtent: k,
    lib: M,
    panActivationKeyPressed: N,
    zoomActivationKeyPressed: A,
    viewportInitialized: W
  } = tt(), K = (X) => H.set({
    x: X[0],
    y: X[1],
    zoom: X[2]
  });
  un(() => {
    Mi(W, !0);
  }), pe(() => J(y()), () => {
    G(d, y() || { x: 0, y: 0, zoom: 1 });
  }), pe(
    () => (o(), J(P())),
    () => {
      G(f, o() || P());
    }
  ), pe(
    () => (o(), J(O())),
    () => {
      G(v, o() || O());
    }
  ), Ct(), Ze();
  var q = A0(), re = j(q);
  Mt(re, t, "default", {}), Y(q), Pt(q, (X, ae) => Wl == null ? void 0 : Wl(X, ae), () => ({
    viewport: H,
    minZoom: a(),
    maxZoom: i(),
    initialViewport: g(d),
    dragging: T,
    panZoom: D,
    onPanZoomStart: b(),
    onPanZoom: x(),
    onPanZoomEnd: $(),
    zoomOnScroll: w(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: E(),
    panOnScroll: g(v),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: h() || ur.Free,
    zoomActivationKeyPressed: s(),
    preventScrolling: typeof _() == "boolean" ? _() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: V(),
    onTransformChange: K
  })), L(e, q);
  var Q = ve({
    get initialViewport() {
      return y();
    },
    set initialViewport(X) {
      y(X), p();
    },
    get onMoveStart() {
      return b();
    },
    set onMoveStart(X) {
      b(X), p();
    },
    get onMove() {
      return x();
    },
    set onMove(X) {
      x(X), p();
    },
    get onMoveEnd() {
      return $();
    },
    set onMoveEnd(X) {
      $(X), p();
    },
    get panOnScrollMode() {
      return h();
    },
    set panOnScrollMode(X) {
      h(X), p();
    },
    get preventScrolling() {
      return _();
    },
    set preventScrolling(X) {
      _(X), p();
    },
    get zoomOnScroll() {
      return w();
    },
    set zoomOnScroll(X) {
      w(X), p();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(X) {
      C(X), p();
    },
    get zoomOnPinch() {
      return E();
    },
    set zoomOnPinch(X) {
      E(X), p();
    },
    get panOnDrag() {
      return P();
    },
    set panOnDrag(X) {
      P(X), p();
    },
    get panOnScroll() {
      return O();
    },
    set panOnScroll(X) {
      O(X), p();
    },
    get paneClickDistance() {
      return V();
    },
    set paneClickDistance(X) {
      V(X), p();
    }
  });
  return r(), Q;
}
le(
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
function Xl(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var R0 = /* @__PURE__ */ ie("<div><!></div>");
const Z0 = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Qc(e, t) {
  fe(t, !1), it(e, Z0);
  const [n, r] = ut(), o = () => ne(S, "$panActivationKeyPressed", n), a = () => ne(I, "$selectionKeyPressed", n), i = () => ne(H, "$selectionRect", n), s = () => ne(V, "$elementsSelectable", n), l = () => ne(D, "$selectionRectMode", n), u = () => ne(E, "$edges", n), c = () => ne(C, "$nodeLookup", n), d = () => ne(P, "$viewport", n), f = () => ne(R, "$selectionMode", n), v = () => ne(O, "$dragging", n), y = se(), b = se(), x = se();
  let $ = m(t, "panOnDrag", 12, void 0), h = m(t, "selectionOnDrag", 12, void 0);
  const _ = ra(), {
    nodes: w,
    nodeLookup: C,
    edges: E,
    viewport: P,
    dragging: O,
    elementsSelectable: V,
    selectionRect: H,
    selectionRectMode: D,
    selectionKeyPressed: I,
    selectionMode: R,
    panActivationKeyPressed: S,
    unselectNodesAndEdges: T
  } = tt();
  let k = se(), M = null, N = [], A = !1;
  function W(oe) {
    if (A) {
      A = !1;
      return;
    }
    _("paneclick", { event: oe }), T(), D.set(null);
  }
  function K(oe) {
    var we, qe;
    if (M = g(k).getBoundingClientRect(), !V || !g(b) || oe.button !== 0 || oe.target !== g(k) || !M)
      return;
    (qe = (we = oe.target) == null ? void 0 : we.setPointerCapture) == null || qe.call(we, oe.pointerId);
    const { x: Xe, y: Ie } = jn(oe, M);
    T(), H.set({
      width: 0,
      height: 0,
      startX: Xe,
      startY: Ie,
      x: Xe,
      y: Ie
    });
  }
  function q(oe) {
    if (!g(b) || !M || !i())
      return;
    A = !0;
    const we = jn(oe, M), qe = i().startX ?? 0, Xe = i().startY ?? 0, Ie = {
      ...i(),
      x: we.x < qe ? we.x : qe,
      y: we.y < Xe ? we.y : Xe,
      width: Math.abs(we.x - qe),
      height: Math.abs(we.y - Xe)
    }, ee = N.map((ue) => ue.id), Fe = Ua(N, u()).map((ue) => ue.id);
    N = bc(
      c(),
      Ie,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === Li.Partial,
      !0
    );
    const Re = Ua(N, u()).map((ue) => ue.id), ce = N.map((ue) => ue.id);
    (ee.length !== ce.length || ce.some((ue) => !ee.includes(ue))) && w.update((ue) => ue.map(Xl(ce))), (Fe.length !== Re.length || Re.some((ue) => !Fe.includes(ue))) && E.update((ue) => ue.map(Xl(Re))), D.set("user"), H.set(Ie);
  }
  function re(oe) {
    var we, qe;
    oe.button === 0 && ((qe = (we = oe.target) == null ? void 0 : we.releasePointerCapture) == null || qe.call(we, oe.pointerId), !g(b) && l() === "user" && oe.target === g(k) && (W == null || W(oe)), H.set(null), N.length > 0 && Mi(D, "nodes"), a() && (A = !1));
  }
  const Q = (oe) => {
    var we;
    if (Array.isArray(g(y)) && (we = g(y)) != null && we.includes(2)) {
      oe.preventDefault();
      return;
    }
    _("panecontextmenu", { event: oe });
  };
  pe(
    () => (o(), J($())),
    () => {
      G(y, o() || $());
    }
  ), pe(
    () => (a(), i(), J(h()), g(y)),
    () => {
      G(b, a() || i() || h() && g(y) !== !0);
    }
  ), pe(
    () => (s(), g(b), l()),
    () => {
      G(x, s() && (g(b) || l() === "user"));
    }
  ), Ct(), Ze();
  var X = R0(), ae = /* @__PURE__ */ ze(() => g(x) ? void 0 : Yl(W, g(k))), $e = /* @__PURE__ */ ze(() => Yl(Q, g(k)));
  let Ce;
  var me = j(X);
  Mt(me, t, "default", {}), Y(X), Vn(X, (oe) => G(k, oe), () => g(k)), Te(
    (oe) => Ce = Lt(X, 1, "svelte-flow__pane svelte-1esy7hx", null, Ce, {
      draggable: oe,
      dragging: v(),
      selection: g(b)
    }),
    [
      () => $() === !0 || Array.isArray($()) && $().includes(0)
    ],
    be
  ), Ue("click", X, function(...oe) {
    var we;
    (we = g(ae)) == null || we.apply(this, oe);
  }), Ue("pointerdown", X, function(...oe) {
    var we;
    (we = g(x) ? K : void 0) == null || we.apply(this, oe);
  }), Ue("pointermove", X, function(...oe) {
    var we;
    (we = g(x) ? q : void 0) == null || we.apply(this, oe);
  }), Ue("pointerup", X, function(...oe) {
    var we;
    (we = g(x) ? re : void 0) == null || we.apply(this, oe);
  }), Ue("contextmenu", X, function(...oe) {
    var we;
    (we = g($e)) == null || we.apply(this, oe);
  }), L(e, X);
  var de = ve({
    get panOnDrag() {
      return $();
    },
    set panOnDrag(oe) {
      $(oe), p();
    },
    get selectionOnDrag() {
      return h();
    },
    set selectionOnDrag(oe) {
      h(oe), p();
    }
  });
  return r(), de;
}
le(Qc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var B0 = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const W0 = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function ed(e, t) {
  fe(t, !1), it(e, W0);
  const [n, r] = ut(), o = () => ne(a, "$viewport", n), { viewport: a } = tt();
  Ze();
  var i = B0(), s = j(i);
  Mt(s, t, "default", {}), Y(i), Te(() => he(i, "style", `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), L(e, i), ve(), r();
}
le(ed, {}, ["default"], [], !0);
function Yi(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: a, onNodeMouseDown: i } = t, s = i0({
    onDrag: r,
    onDragStart: o,
    onDragStop: a,
    onNodeMouseDown: i,
    getStoreItems: () => {
      const u = F(n.snapGrid), c = F(n.viewport);
      return {
        nodes: F(n.nodes),
        nodeLookup: F(n.nodeLookup),
        edges: F(n.edges),
        nodeExtent: F(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: F(n.nodeOrigin),
        multiSelectionActive: F(n.multiselectionKeyPressed),
        domNode: F(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: F(n.autoPanOnNodeDrag),
        nodesDraggable: F(n.nodesDraggable),
        selectNodesOnDrag: F(n.selectNodesOnDrag),
        nodeDragThreshold: F(n.nodeDragThreshold),
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
function Y0({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: a }) {
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
var X0 = /* @__PURE__ */ ie("<div><!></div>");
function td(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne($e, "$nodeTypes", n), a = () => ne(we, "$elementsSelectable", n), i = () => ne(qe, "$nodesDraggable", n), s = () => ne(Fe, "$connectableStore", n), l = se(void 0, !0), u = se(void 0, !0), c = se(void 0, !0), d = se(void 0, !0);
  let f = m(t, "node", 13), v = m(t, "id", 13), y = m(t, "data", 29, () => ({})), b = m(t, "selected", 13, !1), x = m(t, "draggable", 13, void 0), $ = m(t, "selectable", 13, void 0), h = m(t, "connectable", 13, !0), _ = m(t, "deletable", 13, !0), w = m(t, "hidden", 13, !1), C = m(t, "dragging", 13, !1), E = m(t, "resizeObserver", 13, null), P = m(t, "style", 13, void 0), O = m(t, "type", 13, "default"), V = m(t, "isParent", 13, !1), H = m(t, "positionX", 13), D = m(t, "positionY", 13), I = m(t, "sourcePosition", 13, void 0), R = m(t, "targetPosition", 13, void 0), S = m(t, "zIndex", 13), T = m(t, "measuredWidth", 13, void 0), k = m(t, "measuredHeight", 13, void 0), M = m(t, "initialWidth", 13, void 0), N = m(t, "initialHeight", 13, void 0), A = m(t, "width", 13, void 0), W = m(t, "height", 13, void 0), K = m(t, "dragHandle", 13, void 0), q = m(t, "initialized", 13, !1), re = m(t, "parentId", 13, void 0), Q = m(t, "nodeClickDistance", 13, void 0), X = m(t, "class", 13, "");
  const ae = tt(), {
    nodeTypes: $e,
    nodeDragThreshold: Ce,
    selectNodesOnDrag: me,
    handleNodeSelection: de,
    updateNodeInternals: oe,
    elementsSelectable: we,
    nodesDraggable: qe
  } = ae;
  let Xe = se(void 0, !0), Ie = se(null, !0);
  const ee = ra(), Fe = _e(h());
  let Re = se(void 0, !0), ce = se(void 0, !0), ue = se(void 0, !0);
  Fr("svelteflow__node_id", v()), Fr("svelteflow__node_connectable", Fe), _s(() => {
    var te;
    g(Ie) && ((te = E()) == null || te.unobserve(g(Ie)));
  });
  function Ee(te) {
    $() && (!F(me) || !x() || F(Ce) > 0) && de(v()), ee("nodeclick", { node: f().internals.userNode, event: te });
  }
  pe(() => J(O()), () => {
    G(l, O() || "default");
  }), pe(() => (o(), g(l)), () => {
    G(u, !!o()[g(l)]);
  }), pe(
    () => (o(), g(l), Zi),
    () => {
      G(c, o()[g(l)] || Zi);
    }
  ), pe(
    () => (g(u), J(O())),
    () => {
      g(u) || console.warn("003", Ur.error003(O()));
    }
  ), pe(
    () => (J(A()), J(W()), J(M()), J(N()), J(T()), J(k())),
    () => {
      G(d, Y0({
        width: A(),
        height: W(),
        initialWidth: M(),
        initialHeight: N(),
        measuredWidth: T(),
        measuredHeight: k()
      }));
    }
  ), pe(() => J(h()), () => {
    Fe.set(!!h());
  }), pe(
    () => (g(Re), g(l), g(ce), J(I()), g(ue), J(R()), J(v()), g(Xe)),
    () => {
      (g(Re) && g(l) !== g(Re) || g(ce) && I() !== g(ce) || g(ue) && R() !== g(ue)) && requestAnimationFrame(() => oe(/* @__PURE__ */ new Map([
        [
          v(),
          {
            id: v(),
            nodeElement: g(Xe),
            force: !0
          }
        ]
      ]))), G(Re, g(l)), G(ce, I()), G(ue, R());
    }
  ), pe(
    () => (J(E()), g(Xe), g(Ie), J(q())),
    () => {
      E() && (g(Xe) !== g(Ie) || !q()) && (g(Ie) && E().unobserve(g(Ie)), g(Xe) && E().observe(g(Xe)), G(Ie, g(Xe)));
    }
  ), Ct(), Ze(!0);
  var De = st(), Ge = ke(De);
  {
    var yt = (te) => {
      var Le = X0();
      let ye;
      var Jt = j(Le);
      const Rt = /* @__PURE__ */ be(() => b() ?? !1), cn = /* @__PURE__ */ be(() => $() ?? a() ?? !0), Ve = /* @__PURE__ */ be(() => _() ?? !0), lt = /* @__PURE__ */ be(() => x() ?? i() ?? !0);
      Iu(Jt, () => g(c), (xe, ct) => {
        ct(xe, {
          get data() {
            return y();
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
            return g(Ve);
          },
          get sourcePosition() {
            return I();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return S();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return g(lt);
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
            return H();
          },
          get positionAbsoluteY() {
            return D();
          },
          get width() {
            return A();
          },
          get height() {
            return W();
          }
        });
      }), Y(Le), Pt(Le, (xe, ct) => Yi == null ? void 0 : Yi(xe, ct), () => ({
        nodeId: v(),
        isSelectable: $(),
        disabled: !1,
        handleSelector: K(),
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
        store: ae
      })), Vn(Le, (xe) => G(Xe, xe), () => g(Xe)), nn(() => Ue("click", Le, Ee)), nn(() => Ue("mouseenter", Le, (xe) => ee("nodemouseenter", { node: f(), event: xe }))), nn(() => Ue("mouseleave", Le, (xe) => ee("nodemouseleave", { node: f(), event: xe }))), nn(() => Ue("mousemove", Le, (xe) => ee("nodemousemove", { node: f(), event: xe }))), nn(() => Ue("contextmenu", Le, (xe) => ee("nodecontextmenu", { node: f(), event: xe }))), Te(
        (xe) => {
          he(Le, "data-id", v()), ye = Lt(Le, 1, Dn(xe), null, ye, {
            dragging: C(),
            selected: b(),
            draggable: x(),
            connectable: h(),
            selectable: $(),
            nopan: x(),
            parent: V()
          }), he(Le, "style", `${P() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`), ht(Le, "z-index", S()), ht(Le, "transform", `translate(${H() ?? ""}px, ${D() ?? ""}px)`), ht(Le, "visibility", q() ? "visible" : "hidden");
        },
        [
          () => It([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            X()
          ])
        ],
        be
      ), L(te, Le);
    };
    Pe(Ge, (te) => {
      w() || te(yt);
    });
  }
  L(e, De);
  var at = ve({
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
      return y();
    },
    set data(te) {
      y(te), p();
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
      return $();
    },
    set selectable(te) {
      $(te), p();
    },
    get connectable() {
      return h();
    },
    set connectable(te) {
      h(te), p();
    },
    get deletable() {
      return _();
    },
    set deletable(te) {
      _(te), p();
    },
    get hidden() {
      return w();
    },
    set hidden(te) {
      w(te), p();
    },
    get dragging() {
      return C();
    },
    set dragging(te) {
      C(te), p();
    },
    get resizeObserver() {
      return E();
    },
    set resizeObserver(te) {
      E(te), p();
    },
    get style() {
      return P();
    },
    set style(te) {
      P(te), p();
    },
    get type() {
      return O();
    },
    set type(te) {
      O(te), p();
    },
    get isParent() {
      return V();
    },
    set isParent(te) {
      V(te), p();
    },
    get positionX() {
      return H();
    },
    set positionX(te) {
      H(te), p();
    },
    get positionY() {
      return D();
    },
    set positionY(te) {
      D(te), p();
    },
    get sourcePosition() {
      return I();
    },
    set sourcePosition(te) {
      I(te), p();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(te) {
      R(te), p();
    },
    get zIndex() {
      return S();
    },
    set zIndex(te) {
      S(te), p();
    },
    get measuredWidth() {
      return T();
    },
    set measuredWidth(te) {
      T(te), p();
    },
    get measuredHeight() {
      return k();
    },
    set measuredHeight(te) {
      k(te), p();
    },
    get initialWidth() {
      return M();
    },
    set initialWidth(te) {
      M(te), p();
    },
    get initialHeight() {
      return N();
    },
    set initialHeight(te) {
      N(te), p();
    },
    get width() {
      return A();
    },
    set width(te) {
      A(te), p();
    },
    get height() {
      return W();
    },
    set height(te) {
      W(te), p();
    },
    get dragHandle() {
      return K();
    },
    set dragHandle(te) {
      K(te), p();
    },
    get initialized() {
      return q();
    },
    set initialized(te) {
      q(te), p();
    },
    get parentId() {
      return re();
    },
    set parentId(te) {
      re(te), p();
    },
    get nodeClickDistance() {
      return Q();
    },
    set nodeClickDistance(te) {
      Q(te), p();
    },
    get class() {
      return X();
    },
    set class(te) {
      X(te), p();
    }
  });
  return r(), at;
}
le(
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
var j0 = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const K0 = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function nd(e, t) {
  fe(t, !1), it(e, K0);
  const [n, r] = ut(), o = () => ne(c, "$visibleNodes", n), a = () => ne(d, "$nodesDraggable", n), i = () => ne(v, "$elementsSelectable", n), s = () => ne(f, "$nodesConnectable", n), l = () => ne(b, "$parentLookup", n);
  let u = m(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: v,
    updateNodeInternals: y,
    parentLookup: b
  } = tt(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((_) => {
    const w = /* @__PURE__ */ new Map();
    _.forEach((C) => {
      const E = C.target.getAttribute("data-id");
      w.set(E, { id: E, nodeElement: C.target, force: !0 });
    }), y(w);
  });
  _s(() => {
    x == null || x.disconnect();
  }), Ze();
  var $ = j0();
  Gt($, 5, o, (_) => _.id, (_, w) => {
    const C = /* @__PURE__ */ be(() => !!g(w).selected), E = /* @__PURE__ */ be(() => !!g(w).hidden), P = /* @__PURE__ */ be(() => !!(g(w).draggable || a() && typeof g(w).draggable > "u")), O = /* @__PURE__ */ be(() => !!(g(w).selectable || i() && typeof g(w).selectable > "u")), V = /* @__PURE__ */ be(() => !!(g(w).connectable || s() && typeof g(w).connectable > "u")), H = /* @__PURE__ */ be(() => g(w).deletable ?? !0), D = /* @__PURE__ */ be(() => l().has(g(w).id)), I = /* @__PURE__ */ be(() => g(w).type ?? "default"), R = /* @__PURE__ */ be(() => g(w).internals.z ?? 0), S = /* @__PURE__ */ be(() => Sc(g(w)));
    td(_, {
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
        return g(C);
      },
      get hidden() {
        return g(E);
      },
      get draggable() {
        return g(P);
      },
      get selectable() {
        return g(O);
      },
      get connectable() {
        return g(V);
      },
      get deletable() {
        return g(H);
      },
      get positionX() {
        return g(w).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(w).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(D);
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
        return g(S);
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
          Be.call(this, t, T);
        },
        nodemouseenter(T) {
          Be.call(this, t, T);
        },
        nodemousemove(T) {
          Be.call(this, t, T);
        },
        nodemouseleave(T) {
          Be.call(this, t, T);
        },
        nodedrag(T) {
          Be.call(this, t, T);
        },
        nodedragstart(T) {
          Be.call(this, t, T);
        },
        nodedragstop(T) {
          Be.call(this, t, T);
        },
        nodecontextmenu(T) {
          Be.call(this, t, T);
        }
      }
    });
  }), Y($), L(e, $);
  var h = ve({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(_) {
      u(_), p();
    }
  });
  return r(), h;
}
le(nd, { nodeClickDistance: {} }, [], [], !0);
var F0 = /* @__PURE__ */ Se('<svg><g role="img"><!></g></svg>');
function rd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(X, "$edgeTypes", n), a = () => ne(ae, "$flowId", n), i = () => ne($e, "$elementsSelectable", n), s = () => ne(Q, "$edgeLookup", n), l = se(void 0, !0), u = se(void 0, !0), c = se(void 0, !0), d = se(void 0, !0), f = se(void 0, !0);
  let v = m(t, "id", 13), y = m(t, "type", 13, "default"), b = m(t, "source", 13, ""), x = m(t, "target", 13, ""), $ = m(t, "data", 29, () => ({})), h = m(t, "style", 13, void 0), _ = m(t, "zIndex", 13, void 0), w = m(t, "animated", 13, !1), C = m(t, "selected", 13, !1), E = m(t, "selectable", 13, void 0), P = m(t, "deletable", 13, void 0), O = m(t, "hidden", 13, !1), V = m(t, "label", 13, void 0), H = m(t, "labelStyle", 13, void 0), D = m(t, "markerStart", 13, void 0), I = m(t, "markerEnd", 13, void 0), R = m(t, "sourceHandle", 13, void 0), S = m(t, "targetHandle", 13, void 0), T = m(t, "sourceX", 13), k = m(t, "sourceY", 13), M = m(t, "targetX", 13), N = m(t, "targetY", 13), A = m(t, "sourcePosition", 13), W = m(t, "targetPosition", 13), K = m(t, "ariaLabel", 13, void 0), q = m(t, "interactionWidth", 13, void 0), re = m(t, "class", 13, "");
  Fr("svelteflow__edge_id", v());
  const {
    edgeLookup: Q,
    edgeTypes: X,
    flowId: ae,
    elementsSelectable: $e
  } = tt(), Ce = ra(), me = Yc();
  function de(ee) {
    const Fe = s().get(v());
    Fe && (me(v()), Ce("edgeclick", { event: ee, edge: Fe }));
  }
  function oe(ee, Fe) {
    const Re = s().get(v());
    Re && Ce(Fe, { event: ee, edge: Re });
  }
  pe(() => J(y()), () => {
    G(l, y() || "default");
  }), pe(
    () => (o(), g(l), Wi),
    () => {
      G(u, o()[g(l)] || Wi);
    }
  ), pe(
    () => (J(D()), a()),
    () => {
      G(c, D() ? `url('#${es(D(), a())}')` : void 0);
    }
  ), pe(
    () => (J(I()), a()),
    () => {
      G(d, I() ? `url('#${es(I(), a())}')` : void 0);
    }
  ), pe(
    () => (J(E()), i()),
    () => {
      G(f, E() ?? i());
    }
  ), Ct(), Ze(!0);
  var we = st(), qe = ke(we);
  {
    var Xe = (ee) => {
      var Fe = F0(), Re = j(Fe);
      let ce;
      var ue = j(Re);
      const Ee = /* @__PURE__ */ be(() => P() ?? !0);
      Iu(ue, () => g(u), (De, Ge) => {
        Ge(De, {
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
            return M();
          },
          get targetY() {
            return N();
          },
          get sourcePosition() {
            return A();
          },
          get targetPosition() {
            return W();
          },
          get animated() {
            return w();
          },
          get selected() {
            return C();
          },
          get label() {
            return V();
          },
          get labelStyle() {
            return H();
          },
          get data() {
            return $();
          },
          get style() {
            return h();
          },
          get interactionWidth() {
            return q();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Ee);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return S();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), Y(Re), Y(Fe), Te(
        (De) => {
          ht(Fe, "z-index", _()), ce = Lt(Re, 0, Dn(De), null, ce, {
            animated: w(),
            selected: C(),
            selectable: g(f)
          }), he(Re, "data-id", v()), he(Re, "aria-label", K() === null ? void 0 : K() ? K() : `Edge from ${b()} to ${x()}`);
        },
        [
          () => It(["svelte-flow__edge", re()])
        ],
        be
      ), Ue("click", Re, de), Ue("contextmenu", Re, (De) => {
        oe(De, "edgecontextmenu");
      }), Ue("mouseenter", Re, (De) => {
        oe(De, "edgemouseenter");
      }), Ue("mouseleave", Re, (De) => {
        oe(De, "edgemouseleave");
      }), L(ee, Fe);
    };
    Pe(qe, (ee) => {
      O() || ee(Xe);
    });
  }
  L(e, we);
  var Ie = ve({
    get id() {
      return v();
    },
    set id(ee) {
      v(ee), p();
    },
    get type() {
      return y();
    },
    set type(ee) {
      y(ee), p();
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
      return $();
    },
    set data(ee) {
      $(ee), p();
    },
    get style() {
      return h();
    },
    set style(ee) {
      h(ee), p();
    },
    get zIndex() {
      return _();
    },
    set zIndex(ee) {
      _(ee), p();
    },
    get animated() {
      return w();
    },
    set animated(ee) {
      w(ee), p();
    },
    get selected() {
      return C();
    },
    set selected(ee) {
      C(ee), p();
    },
    get selectable() {
      return E();
    },
    set selectable(ee) {
      E(ee), p();
    },
    get deletable() {
      return P();
    },
    set deletable(ee) {
      P(ee), p();
    },
    get hidden() {
      return O();
    },
    set hidden(ee) {
      O(ee), p();
    },
    get label() {
      return V();
    },
    set label(ee) {
      V(ee), p();
    },
    get labelStyle() {
      return H();
    },
    set labelStyle(ee) {
      H(ee), p();
    },
    get markerStart() {
      return D();
    },
    set markerStart(ee) {
      D(ee), p();
    },
    get markerEnd() {
      return I();
    },
    set markerEnd(ee) {
      I(ee), p();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(ee) {
      R(ee), p();
    },
    get targetHandle() {
      return S();
    },
    set targetHandle(ee) {
      S(ee), p();
    },
    get sourceX() {
      return T();
    },
    set sourceX(ee) {
      T(ee), p();
    },
    get sourceY() {
      return k();
    },
    set sourceY(ee) {
      k(ee), p();
    },
    get targetX() {
      return M();
    },
    set targetX(ee) {
      M(ee), p();
    },
    get targetY() {
      return N();
    },
    set targetY(ee) {
      N(ee), p();
    },
    get sourcePosition() {
      return A();
    },
    set sourcePosition(ee) {
      A(ee), p();
    },
    get targetPosition() {
      return W();
    },
    set targetPosition(ee) {
      W(ee), p();
    },
    get ariaLabel() {
      return K();
    },
    set ariaLabel(ee) {
      K(ee), p();
    },
    get interactionWidth() {
      return q();
    },
    set interactionWidth(ee) {
      q(ee), p();
    },
    get class() {
      return re();
    },
    set class(ee) {
      re(ee), p();
    }
  });
  return r(), Ie;
}
le(
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
  let n = m(t, "onMount", 12, void 0), r = m(t, "onDestroy", 12, void 0);
  return un(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ze(), ve({
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
le(od, { onMount: {}, onDestroy: {} }, [], [], !0);
var q0 = /* @__PURE__ */ Se("<defs></defs>");
function id(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(a, "$markers", n), { markers: a } = tt();
  Ze();
  var i = q0();
  Gt(i, 5, o, (s) => s.id, (s, l) => {
    ad(s, xt(() => g(l)));
  }), Y(i), L(e, i), ve(), r();
}
le(id, {}, [], [], !0);
var G0 = /* @__PURE__ */ Se('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), U0 = /* @__PURE__ */ Se('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), J0 = /* @__PURE__ */ Se('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ad(e, t) {
  fe(t, !1);
  let n = m(t, "id", 12), r = m(t, "type", 12), o = m(t, "width", 12, 12.5), a = m(t, "height", 12, 12.5), i = m(t, "markerUnits", 12, "strokeWidth"), s = m(t, "orient", 12, "auto-start-reverse"), l = m(t, "color", 12, void 0), u = m(t, "strokeWidth", 12, void 0);
  Ze();
  var c = J0(), d = j(c);
  {
    var f = (y) => {
      var b = G0();
      Te(() => {
        he(b, "stroke", l()), he(b, "stroke-width", u());
      }), L(y, b);
    }, v = (y, b) => {
      {
        var x = ($) => {
          var h = U0();
          Te(() => {
            he(h, "stroke", l()), he(h, "stroke-width", u()), he(h, "fill", l());
          }), L($, h);
        };
        Pe(
          y,
          ($) => {
            r() === Do.ArrowClosed && $(x);
          },
          b
        );
      }
    };
    Pe(d, (y) => {
      r() === Do.Arrow ? y(f) : y(v, !1);
    });
  }
  return Y(c), Te(() => {
    he(c, "id", n()), he(c, "markerWidth", `${o()}`), he(c, "markerHeight", `${a()}`), he(c, "markerUnits", i()), he(c, "orient", s());
  }), L(e, c), ve({
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
    set width(y) {
      o(y), p();
    },
    get height() {
      return a();
    },
    set height(y) {
      a(y), p();
    },
    get markerUnits() {
      return i();
    },
    set markerUnits(y) {
      i(y), p();
    },
    get orient() {
      return s();
    },
    set orient(y) {
      s(y), p();
    },
    get color() {
      return l();
    },
    set color(y) {
      l(y), p();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), p();
    }
  });
}
le(
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
var Q0 = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function sd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(s, "$visibleEdges", n), a = () => ne(c, "$elementsSelectable", n);
  let i = m(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: s,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = tt();
  un(() => {
    i() && u(i());
  }), Ze();
  var d = Q0(), f = j(d), v = j(f);
  id(v, {}), Y(f);
  var y = B(f, 2);
  Gt(y, 1, o, (h) => h.id, (h, _) => {
    const w = /* @__PURE__ */ be(() => g(_).selectable ?? a()), C = /* @__PURE__ */ be(() => g(_).type || "default");
    rd(h, {
      get id() {
        return g(_).id;
      },
      get source() {
        return g(_).source;
      },
      get target() {
        return g(_).target;
      },
      get data() {
        return g(_).data;
      },
      get style() {
        return g(_).style;
      },
      get animated() {
        return g(_).animated;
      },
      get selected() {
        return g(_).selected;
      },
      get selectable() {
        return g(w);
      },
      get deletable() {
        return g(_).deletable;
      },
      get hidden() {
        return g(_).hidden;
      },
      get label() {
        return g(_).label;
      },
      get labelStyle() {
        return g(_).labelStyle;
      },
      get markerStart() {
        return g(_).markerStart;
      },
      get markerEnd() {
        return g(_).markerEnd;
      },
      get sourceHandle() {
        return g(_).sourceHandle;
      },
      get targetHandle() {
        return g(_).targetHandle;
      },
      get sourceX() {
        return g(_).sourceX;
      },
      get sourceY() {
        return g(_).sourceY;
      },
      get targetX() {
        return g(_).targetX;
      },
      get targetY() {
        return g(_).targetY;
      },
      get sourcePosition() {
        return g(_).sourcePosition;
      },
      get targetPosition() {
        return g(_).targetPosition;
      },
      get ariaLabel() {
        return g(_).ariaLabel;
      },
      get interactionWidth() {
        return g(_).interactionWidth;
      },
      get class() {
        return g(_).class;
      },
      get type() {
        return g(C);
      },
      get zIndex() {
        return g(_).zIndex;
      },
      $$events: {
        edgeclick(E) {
          Be.call(this, t, E);
        },
        edgecontextmenu(E) {
          Be.call(this, t, E);
        },
        edgemouseenter(E) {
          Be.call(this, t, E);
        },
        edgemouseleave(E) {
          Be.call(this, t, E);
        }
      }
    });
  });
  var b = B(y, 2);
  {
    var x = (h) => {
      od(h, {
        onMount: () => {
          Mi(l, !0);
        },
        onDestroy: () => {
          Mi(l, !1);
        }
      });
    };
    Pe(b, (h) => {
      o().length > 0 && h(x);
    });
  }
  Y(d), L(e, d);
  var $ = ve({
    get defaultEdgeOptions() {
      return i();
    },
    set defaultEdgeOptions(h) {
      i(h), p();
    }
  });
  return r(), $;
}
le(sd, { defaultEdgeOptions: {} }, [], [], !0);
var em = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const tm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function As(e, t) {
  fe(t, !1), it(e, tm);
  let n = m(t, "x", 12, 0), r = m(t, "y", 12, 0), o = m(t, "width", 12, 0), a = m(t, "height", 12, 0), i = m(t, "isVisible", 12, !0);
  var s = st(), l = ke(s);
  {
    var u = (c) => {
      var d = em();
      Te(() => {
        ht(d, "width", typeof o() == "string" ? o() : `${o()}px`), ht(d, "height", typeof a() == "string" ? a() : `${a()}px`), ht(d, "transform", `translate(${n()}px, ${r()}px)`);
      }), L(c, d);
    };
    Pe(l, (c) => {
      i() && c(u);
    });
  }
  return L(e, s), ve({
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
      return a();
    },
    set height(c) {
      a(c), p();
    },
    get isVisible() {
      return i();
    },
    set isVisible(c) {
      i(c), p();
    }
  });
}
le(
  As,
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
  As(e, {
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
le(ld, {}, [], [], !0);
var nm = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const rm = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function ud(e, t) {
  fe(t, !1), it(e, rm);
  const [n, r] = ut(), o = () => ne(l, "$selectionRectMode", n), a = () => ne(c, "$nodeLookup", n), i = () => ne(u, "$nodes", n), s = tt(), { selectionRectMode: l, nodes: u, nodeLookup: c } = s, d = ra();
  let f = se(null);
  function v(h) {
    const _ = i().filter((w) => w.selected);
    d("selectioncontextmenu", { nodes: _, event: h });
  }
  function y(h) {
    const _ = i().filter((w) => w.selected);
    d("selectionclick", { nodes: _, event: h });
  }
  pe(
    () => (o(), a(), i()),
    () => {
      o() === "nodes" && (G(f, Ko(a(), { filter: (h) => !!h.selected })), i());
    }
  ), Ct(), Ze();
  var b = st(), x = ke(b);
  {
    var $ = (h) => {
      var _ = nm(), w = j(_);
      As(w, { width: "100%", height: "100%", x: 0, y: 0 }), Y(_), Pt(_, (C, E) => Yi == null ? void 0 : Yi(C, E), () => ({
        disabled: !1,
        store: s,
        onDrag: (C, E, P, O) => {
          d("nodedrag", { event: C, targetNode: null, nodes: O });
        },
        onDragStart: (C, E, P, O) => {
          d("nodedragstart", { event: C, targetNode: null, nodes: O });
        },
        onDragStop: (C, E, P, O) => {
          d("nodedragstop", { event: C, targetNode: null, nodes: O });
        }
      })), nn(() => Ue("contextmenu", _, v)), nn(() => Ue("click", _, y)), nn(() => Ue("keyup", _, () => {
      })), Te(() => he(_, "style", `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), L(h, _);
    };
    Pe(x, (h) => {
      o() === "nodes" && g(f) && Wn(g(f).x) && Wn(g(f).y) && h($);
    });
  }
  L(e, b), ve(), r();
}
le(ud, {}, [], [], !0);
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
      }, { modifier: d, key: f, callback: v, preventDefault: y, enabled: b } = c;
      if (b) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (x) => typeof x == "string" ? [x] : x
        ).some(
          (x) => x.every(($) => l[$])
        ))
          continue;
        if (i.key === f) {
          y && i.preventDefault();
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
  let n = m(t, "selectionKey", 12, "Shift"), r = m(t, "multiSelectionKey", 28, () => Ii() ? "Meta" : "Control"), o = m(t, "deleteKey", 12, "Backspace"), a = m(t, "panActivationKey", 12, " "), i = m(t, "zoomActivationKey", 28, () => Ii() ? "Meta" : "Control");
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
  function y(h) {
    return v(h) ? h.modifier || [] : [];
  }
  function b(h) {
    return h == null ? "" : v(h) ? h.key : h;
  }
  function x(h, _) {
    return (Array.isArray(h) ? h : [h]).map((w) => {
      const C = b(w);
      return {
        key: C,
        modifier: y(w),
        enabled: C !== null,
        callback: _
      };
    });
  }
  function $() {
    f.set(null), s.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ze(), Ue("blur", Xt, $), Ue("contextmenu", Xt, $), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(n(), () => s.set(!0)),
    type: "keydown"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(n(), () => s.set(!1)),
    type: "keyup"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(o(), (h) => {
      !(h.originalEvent.ctrlKey || h.originalEvent.metaKey || h.originalEvent.shiftKey) && !Lp(h.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(a(), () => c.set(!0)),
    type: "keydown"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(a(), () => c.set(!1)),
    type: "keyup"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(i(), () => d.set(!0)),
    type: "keydown"
  })), Pt(Xt, (h, _) => bt == null ? void 0 : bt(h, _), () => ({
    trigger: x(i(), () => d.set(!1)),
    type: "keyup"
  })), ve({
    get selectionKey() {
      return n();
    },
    set selectionKey(h) {
      n(h), p();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(h) {
      r(h), p();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(h) {
      o(h), p();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(h) {
      a(h), p();
    },
    get zoomActivationKey() {
      return i();
    },
    set zoomActivationKey(h) {
      i(h), p();
    }
  });
}
le(
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
var om = /* @__PURE__ */ Se('<path fill="none" class="svelte-flow__connection-path"></path>'), im = /* @__PURE__ */ Se('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function dd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(v, "$connection", n), a = () => ne(y, "$connectionLineType", n), i = () => ne(d, "$width", n), s = () => ne(f, "$height", n);
  let l = m(t, "containerStyle", 12, ""), u = m(t, "style", 12, ""), c = m(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: v,
    connectionLineType: y
  } = tt();
  let b = se(null);
  pe(
    () => (o(), J(c()), a(), g(b), Qa),
    () => {
      if (o().inProgress && !c()) {
        const { from: w, to: C, fromPosition: E, toPosition: P } = o(), O = {
          sourceX: w.x,
          sourceY: w.y,
          sourcePosition: E,
          targetX: C.x,
          targetY: C.y,
          targetPosition: P
        };
        switch (a()) {
          case Yr.Bezier:
            ((V) => G(b, V[0]))(Pc(O));
            break;
          case Yr.Step:
            ((V) => G(b, V[0]))(Ri({ ...O, borderRadius: 0 }));
            break;
          case Yr.SmoothStep:
            ((V) => G(b, V[0]))(Ri(O));
            break;
          default:
            ((V) => G(b, V[0]))(Qa(O));
        }
      }
    }
  ), Ct(), Ze();
  var x = st(), $ = ke(x);
  {
    var h = (w) => {
      var C = im(), E = j(C), P = j(E);
      Mt(P, t, "connectionLine", {});
      var O = B(P);
      {
        var V = (H) => {
          var D = om();
          Te(() => {
            he(D, "d", g(b)), he(D, "style", u());
          }), L(H, D);
        };
        Pe(O, (H) => {
          c() || H(V);
        });
      }
      Y(E), Y(C), Te(
        (H) => {
          he(C, "width", i()), he(C, "height", s()), he(C, "style", l()), Lt(E, 0, Dn(H));
        },
        [
          () => It([
            "svelte-flow__connection",
            Pp(o().isValid)
          ])
        ],
        be
      ), L(w, C);
    };
    Pe($, (w) => {
      o().inProgress && w(h);
    });
  }
  L(e, x);
  var _ = ve({
    get containerStyle() {
      return l();
    },
    set containerStyle(w) {
      l(w), p();
    },
    get style() {
      return u();
    },
    set style(w) {
      u(w), p();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(w) {
      c(w), p();
    }
  });
  return r(), _;
}
le(
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
var am = /* @__PURE__ */ ie("<div><!></div>");
function Go(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ft(n, ["position", "style", "class"]);
  fe(t, !1);
  const [o, a] = ut(), i = () => ne(d, "$selectionRectMode", o), s = se();
  let l = m(t, "position", 12, "top-right"), u = m(t, "style", 12, void 0), c = m(t, "class", 12, void 0);
  const { selectionRectMode: d } = tt();
  pe(() => J(l()), () => {
    G(s, `${l()}`.split("-"));
  }), Ct(), Ze();
  var f = am();
  let v;
  var y = j(f);
  Mt(y, t, "default", {}), Y(f), Te(
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
  ), L(e, f);
  var b = ve({
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
  return a(), b;
}
le(Go, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var sm = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function fd(e, t) {
  fe(t, !1);
  let n = m(t, "proOptions", 12, void 0), r = m(t, "position", 12, "bottom-right");
  Ze();
  var o = st(), a = ke(o);
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
          L(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    Pe(a, (s) => {
      var l;
      (l = n()) != null && l.hideAttribution || s(i);
    });
  }
  return L(e, o), ve({
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
le(fd, { proOptions: {}, position: {} }, [], [], !0);
function jl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: a, paneClickDistance: i }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), a !== void 0 && e.setTranslateExtent(a), i !== void 0 && e.setPaneClickDistance(i);
}
const lm = (e) => Object.keys(e);
function Kl(e, t) {
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
var dm = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), fm = /* @__PURE__ */ ie("<!> <!>", 1), vm = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const gm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function vd(e, t) {
  const n = Hv(t), r = ft(t, [
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
  const [a, i] = ut(), s = () => ne(_(), "$viewport", a), l = () => ne(co, "$initialized", a), u = () => ne(g(c), "$colorModeClass", a), c = se();
  let d = m(t, "id", 12, "1"), f = m(t, "nodes", 12), v = m(t, "edges", 12), y = m(t, "fitView", 12, void 0), b = m(t, "fitViewOptions", 12, void 0), x = m(t, "minZoom", 12, void 0), $ = m(t, "maxZoom", 12, void 0), h = m(t, "initialViewport", 12, void 0), _ = m(t, "viewport", 12, void 0), w = m(t, "nodeTypes", 12, void 0), C = m(t, "edgeTypes", 12, void 0), E = m(t, "selectionKey", 12, void 0), P = m(t, "selectionMode", 12, void 0), O = m(t, "panActivationKey", 12, void 0), V = m(t, "multiSelectionKey", 12, void 0), H = m(t, "zoomActivationKey", 12, void 0), D = m(t, "nodesDraggable", 12, void 0), I = m(t, "nodesConnectable", 12, void 0), R = m(t, "nodeDragThreshold", 12, void 0), S = m(t, "elementsSelectable", 12, void 0), T = m(t, "snapGrid", 12, void 0), k = m(t, "deleteKey", 12, void 0), M = m(t, "connectionRadius", 12, void 0), N = m(t, "connectionLineType", 12, void 0), A = m(t, "connectionMode", 28, () => Er.Strict), W = m(t, "connectionLineStyle", 12, ""), K = m(t, "connectionLineContainerStyle", 12, ""), q = m(t, "onMoveStart", 12, void 0), re = m(t, "onMove", 12, void 0), Q = m(t, "onMoveEnd", 12, void 0), X = m(t, "isValidConnection", 12, void 0), ae = m(t, "translateExtent", 12, void 0), $e = m(t, "nodeExtent", 12, void 0), Ce = m(t, "onlyRenderVisibleElements", 12, void 0), me = m(t, "panOnScrollMode", 28, () => ur.Free), de = m(t, "preventScrolling", 12, !0), oe = m(t, "zoomOnScroll", 12, !0), we = m(t, "zoomOnDoubleClick", 12, !0), qe = m(t, "zoomOnPinch", 12, !0), Xe = m(t, "panOnScroll", 12, !1), Ie = m(t, "panOnDrag", 12, !0), ee = m(t, "selectionOnDrag", 12, void 0), Fe = m(t, "autoPanOnConnect", 12, !0), Re = m(t, "autoPanOnNodeDrag", 12, !0), ce = m(t, "onerror", 12, void 0), ue = m(t, "ondelete", 12, void 0), Ee = m(t, "onedgecreate", 12, void 0), De = m(t, "attributionPosition", 12, void 0), Ge = m(t, "proOptions", 12, void 0), yt = m(t, "defaultEdgeOptions", 12, void 0), at = m(t, "width", 12, void 0), te = m(t, "height", 12, void 0), Le = m(t, "colorMode", 12, "light"), ye = m(t, "onconnect", 12, void 0), Jt = m(t, "onconnectstart", 12, void 0), Rt = m(t, "onconnectend", 12, void 0), cn = m(t, "onbeforedelete", 12, void 0), Ve = m(t, "oninit", 12, void 0), lt = m(t, "nodeOrigin", 12, void 0), xe = m(t, "paneClickDistance", 12, 0), ct = m(t, "nodeClickDistance", 12, 0), vt = m(t, "defaultMarkerColor", 12, "#b1b1b7"), Zt = m(t, "style", 12, void 0), In = m(t, "class", 12, void 0), St = se(), pt = se(), Bt = se();
  const Vt = s() || h(), wt = vv(fa) ? tt() : L0({
    nodes: F(f()),
    edges: F(v()),
    width: at(),
    height: te(),
    fitView: y(),
    nodeOrigin: lt(),
    nodeExtent: $e()
  });
  un(() => (wt.width.set(g(pt)), wt.height.set(g(Bt)), wt.domNode.set(g(St)), wt.syncNodeStores(f()), wt.syncEdgeStores(v()), wt.syncViewport(_()), y() !== void 0 && wt.fitViewOnInit.set(y()), b() && wt.fitViewOptions.set(b()), jl(wt, {
    nodeTypes: w(),
    edgeTypes: C(),
    minZoom: x(),
    maxZoom: $(),
    translateExtent: ae(),
    paneClickDistance: xe()
  }), () => {
    wt.reset();
  }));
  const { initialized: co } = wt;
  let Sn = se(!1);
  pe(
    () => (g(pt), g(Bt)),
    () => {
      g(pt) !== void 0 && g(Bt) !== void 0 && (wt.width.set(g(pt)), wt.height.set(g(Bt)));
    }
  ), pe(
    () => (g(Sn), l(), J(Ve())),
    () => {
      var Z;
      !g(Sn) && l() && ((Z = Ve()) == null || Z(), G(Sn, !0));
    }
  ), pe(
    () => (J(d()), J(N()), J(M()), J(P()), J(T()), J(vt()), J(D()), J(I()), J(S()), J(Ce()), J(X()), J(Fe()), J(Re()), J(ce()), J(ue()), J(Ee()), J(A()), J(R()), J(ye()), J(Jt()), J(Rt()), J(cn()), J(lt()), Kl),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: N(),
        connectionRadius: M(),
        selectionMode: P(),
        snapGrid: T(),
        defaultMarkerColor: vt(),
        nodesDraggable: D(),
        nodesConnectable: I(),
        elementsSelectable: S(),
        onlyRenderVisibleElements: Ce(),
        isValidConnection: X(),
        autoPanOnConnect: Fe(),
        autoPanOnNodeDrag: Re(),
        onerror: ce(),
        ondelete: ue(),
        onedgecreate: Ee(),
        connectionMode: A(),
        nodeDragThreshold: R(),
        onconnect: ye(),
        onconnectstart: Jt(),
        onconnectend: Rt(),
        onbeforedelete: cn(),
        nodeOrigin: lt()
      };
      Kl(wt, Z);
    }
  ), pe(
    () => (J(w()), J(C()), J(x()), J($()), J(ae()), J(xe())),
    () => {
      jl(wt, {
        nodeTypes: w(),
        edgeTypes: C(),
        minZoom: x(),
        maxZoom: $(),
        translateExtent: ae(),
        paneClickDistance: xe()
      });
    }
  ), pe(
    () => J(Le()),
    () => {
      Bv(G(c, cm(Le())), "$colorModeClass", a);
    }
  ), Ct(), Ze();
  var Qt = vm();
  let mr;
  var yr = j(Qt);
  cd(yr, {
    get selectionKey() {
      return E();
    },
    get deleteKey() {
      return k();
    },
    get panActivationKey() {
      return O();
    },
    get multiSelectionKey() {
      return V();
    },
    get zoomActivationKey() {
      return H();
    }
  });
  var Nr = B(yr, 2);
  const ma = /* @__PURE__ */ be(() => me() === void 0 ? ur.Free : me()), ti = /* @__PURE__ */ be(() => de() === void 0 ? !0 : de()), ni = /* @__PURE__ */ be(() => oe() === void 0 ? !0 : oe()), ya = /* @__PURE__ */ be(() => we() === void 0 ? !0 : we()), wa = /* @__PURE__ */ be(() => qe() === void 0 ? !0 : qe()), ba = /* @__PURE__ */ be(() => Xe() === void 0 ? !1 : Xe()), xa = /* @__PURE__ */ be(() => Ie() === void 0 ? !0 : Ie()), z = /* @__PURE__ */ be(() => xe() === void 0 ? 0 : xe());
  Jc(Nr, {
    initialViewport: Vt,
    get onMoveStart() {
      return q();
    },
    get onMove() {
      return re();
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
      return g(z);
    },
    children: (Z, nt) => {
      const Ye = /* @__PURE__ */ be(() => Ie() === void 0 ? !0 : Ie());
      Qc(Z, {
        get panOnDrag() {
          return g(Ye);
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
        children: (Ae, Et) => {
          var dt = fm(), gt = ke(dt);
          ed(gt, {
            children: (er, tr) => {
              var _t = dm(), Dr = ke(_t);
              sd(Dr, {
                get defaultEdgeOptions() {
                  return yt();
                },
                $$events: {
                  edgeclick(je) {
                    Be.call(this, t, je);
                  },
                  edgecontextmenu(je) {
                    Be.call(this, t, je);
                  },
                  edgemouseenter(je) {
                    Be.call(this, t, je);
                  },
                  edgemouseleave(je) {
                    Be.call(this, t, je);
                  }
                }
              });
              var ri = B(Dr, 2);
              dd(ri, {
                get containerStyle() {
                  return K();
                },
                get style() {
                  return W();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (je, Tw) => {
                    var Ys = st(), uf = ke(Ys);
                    Mt(uf, t, "connectionLine", {}), L(je, Ys);
                  }
                }
              });
              var oi = B(ri, 6);
              nd(oi, {
                get nodeClickDistance() {
                  return ct();
                },
                $$events: {
                  nodeclick(je) {
                    Be.call(this, t, je);
                  },
                  nodemouseenter(je) {
                    Be.call(this, t, je);
                  },
                  nodemousemove(je) {
                    Be.call(this, t, je);
                  },
                  nodemouseleave(je) {
                    Be.call(this, t, je);
                  },
                  nodedragstart(je) {
                    Be.call(this, t, je);
                  },
                  nodedrag(je) {
                    Be.call(this, t, je);
                  },
                  nodedragstop(je) {
                    Be.call(this, t, je);
                  },
                  nodecontextmenu(je) {
                    Be.call(this, t, je);
                  }
                }
              });
              var lf = B(oi, 2);
              ud(lf, {
                $$events: {
                  selectionclick(je) {
                    Be.call(this, t, je);
                  },
                  selectioncontextmenu(je) {
                    Be.call(this, t, je);
                  },
                  nodedragstart(je) {
                    Be.call(this, t, je);
                  },
                  nodedrag(je) {
                    Be.call(this, t, je);
                  },
                  nodedragstop(je) {
                    Be.call(this, t, je);
                  }
                }
              }), L(er, _t);
            },
            $$slots: { default: !0 }
          });
          var Wt = B(gt, 2);
          ld(Wt, {}), L(Ae, dt);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var U = B(Nr, 2);
  fd(U, {
    get proOptions() {
      return Ge();
    },
    get position() {
      return De();
    }
  });
  var ge = B(U, 2);
  Mt(ge, t, "default", {}), Y(Qt), Vn(Qt, (Z) => G(St, Z), () => g(St)), Te(
    (Z) => mr = xn(
      Qt,
      mr,
      {
        style: Zt(),
        class: Z,
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
  ), il(Qt, "clientWidth", (Z) => G(pt, Z)), il(Qt, "clientHeight", (Z) => G(Bt, Z)), Ue("dragover", Qt, function(Z) {
    Be.call(this, t, Z);
  }), Ue("drop", Qt, function(Z) {
    Be.call(this, t, Z);
  }), L(e, Qt);
  var Me = ve({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), p();
    },
    get nodes() {
      return f();
    },
    set nodes(Z) {
      f(Z), p();
    },
    get edges() {
      return v();
    },
    set edges(Z) {
      v(Z), p();
    },
    get fitView() {
      return y();
    },
    set fitView(Z) {
      y(Z), p();
    },
    get fitViewOptions() {
      return b();
    },
    set fitViewOptions(Z) {
      b(Z), p();
    },
    get minZoom() {
      return x();
    },
    set minZoom(Z) {
      x(Z), p();
    },
    get maxZoom() {
      return $();
    },
    set maxZoom(Z) {
      $(Z), p();
    },
    get initialViewport() {
      return h();
    },
    set initialViewport(Z) {
      h(Z), p();
    },
    get viewport() {
      return _();
    },
    set viewport(Z) {
      _(Z), p();
    },
    get nodeTypes() {
      return w();
    },
    set nodeTypes(Z) {
      w(Z), p();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(Z) {
      C(Z), p();
    },
    get selectionKey() {
      return E();
    },
    set selectionKey(Z) {
      E(Z), p();
    },
    get selectionMode() {
      return P();
    },
    set selectionMode(Z) {
      P(Z), p();
    },
    get panActivationKey() {
      return O();
    },
    set panActivationKey(Z) {
      O(Z), p();
    },
    get multiSelectionKey() {
      return V();
    },
    set multiSelectionKey(Z) {
      V(Z), p();
    },
    get zoomActivationKey() {
      return H();
    },
    set zoomActivationKey(Z) {
      H(Z), p();
    },
    get nodesDraggable() {
      return D();
    },
    set nodesDraggable(Z) {
      D(Z), p();
    },
    get nodesConnectable() {
      return I();
    },
    set nodesConnectable(Z) {
      I(Z), p();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(Z) {
      R(Z), p();
    },
    get elementsSelectable() {
      return S();
    },
    set elementsSelectable(Z) {
      S(Z), p();
    },
    get snapGrid() {
      return T();
    },
    set snapGrid(Z) {
      T(Z), p();
    },
    get deleteKey() {
      return k();
    },
    set deleteKey(Z) {
      k(Z), p();
    },
    get connectionRadius() {
      return M();
    },
    set connectionRadius(Z) {
      M(Z), p();
    },
    get connectionLineType() {
      return N();
    },
    set connectionLineType(Z) {
      N(Z), p();
    },
    get connectionMode() {
      return A();
    },
    set connectionMode(Z) {
      A(Z), p();
    },
    get connectionLineStyle() {
      return W();
    },
    set connectionLineStyle(Z) {
      W(Z), p();
    },
    get connectionLineContainerStyle() {
      return K();
    },
    set connectionLineContainerStyle(Z) {
      K(Z), p();
    },
    get onMoveStart() {
      return q();
    },
    set onMoveStart(Z) {
      q(Z), p();
    },
    get onMove() {
      return re();
    },
    set onMove(Z) {
      re(Z), p();
    },
    get onMoveEnd() {
      return Q();
    },
    set onMoveEnd(Z) {
      Q(Z), p();
    },
    get isValidConnection() {
      return X();
    },
    set isValidConnection(Z) {
      X(Z), p();
    },
    get translateExtent() {
      return ae();
    },
    set translateExtent(Z) {
      ae(Z), p();
    },
    get nodeExtent() {
      return $e();
    },
    set nodeExtent(Z) {
      $e(Z), p();
    },
    get onlyRenderVisibleElements() {
      return Ce();
    },
    set onlyRenderVisibleElements(Z) {
      Ce(Z), p();
    },
    get panOnScrollMode() {
      return me();
    },
    set panOnScrollMode(Z) {
      me(Z), p();
    },
    get preventScrolling() {
      return de();
    },
    set preventScrolling(Z) {
      de(Z), p();
    },
    get zoomOnScroll() {
      return oe();
    },
    set zoomOnScroll(Z) {
      oe(Z), p();
    },
    get zoomOnDoubleClick() {
      return we();
    },
    set zoomOnDoubleClick(Z) {
      we(Z), p();
    },
    get zoomOnPinch() {
      return qe();
    },
    set zoomOnPinch(Z) {
      qe(Z), p();
    },
    get panOnScroll() {
      return Xe();
    },
    set panOnScroll(Z) {
      Xe(Z), p();
    },
    get panOnDrag() {
      return Ie();
    },
    set panOnDrag(Z) {
      Ie(Z), p();
    },
    get selectionOnDrag() {
      return ee();
    },
    set selectionOnDrag(Z) {
      ee(Z), p();
    },
    get autoPanOnConnect() {
      return Fe();
    },
    set autoPanOnConnect(Z) {
      Fe(Z), p();
    },
    get autoPanOnNodeDrag() {
      return Re();
    },
    set autoPanOnNodeDrag(Z) {
      Re(Z), p();
    },
    get onerror() {
      return ce();
    },
    set onerror(Z) {
      ce(Z), p();
    },
    get ondelete() {
      return ue();
    },
    set ondelete(Z) {
      ue(Z), p();
    },
    get onedgecreate() {
      return Ee();
    },
    set onedgecreate(Z) {
      Ee(Z), p();
    },
    get attributionPosition() {
      return De();
    },
    set attributionPosition(Z) {
      De(Z), p();
    },
    get proOptions() {
      return Ge();
    },
    set proOptions(Z) {
      Ge(Z), p();
    },
    get defaultEdgeOptions() {
      return yt();
    },
    set defaultEdgeOptions(Z) {
      yt(Z), p();
    },
    get width() {
      return at();
    },
    set width(Z) {
      at(Z), p();
    },
    get height() {
      return te();
    },
    set height(Z) {
      te(Z), p();
    },
    get colorMode() {
      return Le();
    },
    set colorMode(Z) {
      Le(Z), p();
    },
    get onconnect() {
      return ye();
    },
    set onconnect(Z) {
      ye(Z), p();
    },
    get onconnectstart() {
      return Jt();
    },
    set onconnectstart(Z) {
      Jt(Z), p();
    },
    get onconnectend() {
      return Rt();
    },
    set onconnectend(Z) {
      Rt(Z), p();
    },
    get onbeforedelete() {
      return cn();
    },
    set onbeforedelete(Z) {
      cn(Z), p();
    },
    get oninit() {
      return Ve();
    },
    set oninit(Z) {
      Ve(Z), p();
    },
    get nodeOrigin() {
      return lt();
    },
    set nodeOrigin(Z) {
      lt(Z), p();
    },
    get paneClickDistance() {
      return xe();
    },
    set paneClickDistance(Z) {
      xe(Z), p();
    },
    get nodeClickDistance() {
      return ct();
    },
    set nodeClickDistance(Z) {
      ct(Z), p();
    },
    get defaultMarkerColor() {
      return vt();
    },
    set defaultMarkerColor(Z) {
      vt(Z), p();
    },
    get style() {
      return Zt();
    },
    set style(Z) {
      Zt(Z), p();
    },
    get class() {
      return In();
    },
    set class(Z) {
      In(Z), p();
    }
  });
  return i(), Me;
}
le(
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
  let n = m(t, "initialNodes", 12, void 0), r = m(t, "initialEdges", 12, void 0), o = m(t, "initialWidth", 12, void 0), a = m(t, "initialHeight", 12, void 0), i = m(t, "fitView", 12, void 0), s = m(t, "nodeOrigin", 12, void 0);
  const l = Uc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: a(),
    nodeOrigin: s(),
    fitView: i()
  });
  Fr(fa, { getStore: () => l }), _s(() => {
    l.reset();
  }), Ze();
  var u = st(), c = ke(u);
  return Mt(c, t, "default", {}), L(e, u), ve({
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
      return a();
    },
    set initialHeight(d) {
      a(d), p();
    },
    get fitView() {
      return i();
    },
    set fitView(d) {
      i(d), p();
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
var hm = /* @__PURE__ */ ie("<button><!></button>");
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
  let o = m(t, "class", 12, void 0), a = m(t, "bgColor", 12, void 0), i = m(t, "bgColorHover", 12, void 0), s = m(t, "color", 12, void 0), l = m(t, "colorHover", 12, void 0), u = m(t, "borderColor", 12, void 0);
  Ze();
  var c = hm();
  let d;
  var f = j(c);
  return Mt(f, t, "default", { class: "button-svg" }), Y(c), Te(
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
  }), L(e, c), ve({
    get class() {
      return o();
    },
    set class(v) {
      o(v), p();
    },
    get bgColor() {
      return a();
    },
    set bgColor(v) {
      a(v), p();
    },
    get bgColorHover() {
      return i();
    },
    set bgColorHover(v) {
      i(v), p();
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
var pm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function hd(e) {
  var t = pm();
  L(e, t);
}
le(hd, {}, [], [], !0);
var mm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function pd(e) {
  var t = mm();
  L(e, t);
}
le(pd, {}, [], [], !0);
var ym = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function md(e) {
  var t = ym();
  L(e, t);
}
le(md, {}, [], [], !0);
var wm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function yd(e) {
  var t = wm();
  L(e, t);
}
le(yd, {}, [], [], !0);
var bm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function wd(e) {
  var t = bm();
  L(e, t);
}
le(wd, {}, [], [], !0);
var xm = /* @__PURE__ */ ie("<!> <!>", 1), $m = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function bd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(N, "$nodesDraggable", n), a = () => ne(A, "$nodesConnectable", n), i = () => ne(W, "$elementsSelectable", n), s = () => ne(T, "$viewport", n), l = () => ne(k, "$minZoom", n), u = () => ne(M, "$maxZoom", n), c = se(), d = se(), f = se(), v = se();
  let y = m(t, "position", 12, "bottom-left"), b = m(t, "showZoom", 12, !0), x = m(t, "showFitView", 12, !0), $ = m(t, "showLock", 12, !0), h = m(t, "buttonBgColor", 12, void 0), _ = m(t, "buttonBgColorHover", 12, void 0), w = m(t, "buttonColor", 12, void 0), C = m(t, "buttonColorHover", 12, void 0), E = m(t, "buttonBorderColor", 12, void 0), P = m(t, "ariaLabel", 12, void 0), O = m(t, "style", 12, void 0), V = m(t, "orientation", 12, "vertical"), H = m(t, "fitViewOptions", 12, void 0), D = m(t, "class", 12, "");
  const {
    zoomIn: I,
    zoomOut: R,
    fitView: S,
    viewport: T,
    minZoom: k,
    maxZoom: M,
    nodesDraggable: N,
    nodesConnectable: A,
    elementsSelectable: W
  } = tt(), K = {
    bgColor: h(),
    bgColorHover: _(),
    color: w(),
    colorHover: C(),
    borderColor: E()
  }, q = () => {
    I();
  }, re = () => {
    R();
  }, Q = () => {
    S(H());
  }, X = () => {
    G(c, !g(c)), N.set(g(c)), A.set(g(c)), W.set(g(c));
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
  }), pe(() => J(V()), () => {
    G(v, V() === "horizontal" ? "horizontal" : "vertical");
  }), Ct(), Ze();
  const ae = /* @__PURE__ */ be(() => It([
    "svelte-flow__controls",
    g(v),
    D()
  ])), $e = /* @__PURE__ */ be(() => P() ?? "Svelte Flow controls");
  Go(e, {
    get class() {
      return g(ae);
    },
    get position() {
      return y();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g($e);
    },
    get style() {
      return O();
    },
    children: (me, de) => {
      var oe = $m(), we = ke(oe);
      Mt(we, t, "before", {});
      var qe = B(we, 2);
      {
        var Xe = (Ee) => {
          var De = xm(), Ge = ke(De);
          xo(Ge, xt(
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
              $$events: { click: q },
              children: (at, te) => {
                hd(at);
              },
              $$slots: { default: !0 }
            }
          ));
          var yt = B(Ge, 2);
          xo(yt, xt(
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
              children: (at, te) => {
                pd(at);
              },
              $$slots: { default: !0 }
            }
          )), L(Ee, De);
        };
        Pe(qe, (Ee) => {
          b() && Ee(Xe);
        });
      }
      var Ie = B(qe, 2);
      {
        var ee = (Ee) => {
          xo(Ee, xt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            K,
            {
              $$events: { click: Q },
              children: (De, Ge) => {
                md(De);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Pe(Ie, (Ee) => {
          x() && Ee(ee);
        });
      }
      var Fe = B(Ie, 2);
      {
        var Re = (Ee) => {
          xo(Ee, xt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            K,
            {
              $$events: { click: X },
              children: (De, Ge) => {
                var yt = st(), at = ke(yt);
                {
                  var te = (ye) => {
                    wd(ye);
                  }, Le = (ye) => {
                    yd(ye);
                  };
                  Pe(at, (ye) => {
                    g(c) ? ye(te) : ye(Le, !1);
                  });
                }
                L(De, yt);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        Pe(Fe, (Ee) => {
          $() && Ee(Re);
        });
      }
      var ce = B(Fe, 2);
      Mt(ce, t, "default", {});
      var ue = B(ce, 2);
      Mt(ue, t, "after", {}), L(me, oe);
    },
    $$slots: { default: !0 }
  });
  var Ce = ve({
    get position() {
      return y();
    },
    set position(me) {
      y(me), p();
    },
    get showZoom() {
      return b();
    },
    set showZoom(me) {
      b(me), p();
    },
    get showFitView() {
      return x();
    },
    set showFitView(me) {
      x(me), p();
    },
    get showLock() {
      return $();
    },
    set showLock(me) {
      $(me), p();
    },
    get buttonBgColor() {
      return h();
    },
    set buttonBgColor(me) {
      h(me), p();
    },
    get buttonBgColorHover() {
      return _();
    },
    set buttonBgColorHover(me) {
      _(me), p();
    },
    get buttonColor() {
      return w();
    },
    set buttonColor(me) {
      w(me), p();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(me) {
      C(me), p();
    },
    get buttonBorderColor() {
      return E();
    },
    set buttonBorderColor(me) {
      E(me), p();
    },
    get ariaLabel() {
      return P();
    },
    set ariaLabel(me) {
      P(me), p();
    },
    get style() {
      return O();
    },
    set style(me) {
      O(me), p();
    },
    get orientation() {
      return V();
    },
    set orientation(me) {
      V(me), p();
    },
    get fitViewOptions() {
      return H();
    },
    set fitViewOptions(me) {
      H(me), p();
    },
    get class() {
      return D();
    },
    set class(me) {
      D(me), p();
    }
  });
  return r(), Ce;
}
le(
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
var _m = /* @__PURE__ */ Se("<circle></circle>");
function xd(e, t) {
  fe(t, !1);
  let n = m(t, "radius", 12, 5), r = m(t, "class", 12, "");
  Ze();
  var o = _m();
  return Te(
    (a) => {
      he(o, "cx", n()), he(o, "cy", n()), he(o, "r", n()), Lt(o, 0, Dn(a));
    },
    [
      () => It([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ])
    ],
    be
  ), L(e, o), ve({
    get radius() {
      return n();
    },
    set radius(a) {
      n(a), p();
    },
    get class() {
      return r();
    },
    set class(a) {
      r(a), p();
    }
  });
}
le(xd, { radius: {}, class: {} }, [], [], !0);
var Cm = /* @__PURE__ */ Se("<path></path>");
function $d(e, t) {
  fe(t, !1);
  let n = m(t, "lineWidth", 12, 1), r = m(t, "dimensions", 12), o = m(t, "variant", 12, void 0), a = m(t, "class", 12, "");
  Ze();
  var i = Cm();
  return Te(
    (s) => {
      he(i, "stroke-width", n()), he(i, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Lt(i, 0, Dn(s));
    },
    [
      () => It([
        "svelte-flow__background-pattern",
        o(),
        a()
      ])
    ],
    be
  ), L(e, i), ve({
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
      return a();
    },
    set class(s) {
      a(s), p();
    }
  });
}
le(
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
var Sm = /* @__PURE__ */ Se('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const Em = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function _d(e, t) {
  fe(t, !1), it(e, Em);
  const [n, r] = ut(), o = () => ne(C, "$flowId", n), a = () => ne(w, "$viewport", n), i = se(), s = se(), l = se(), u = se(), c = se();
  let d = m(t, "id", 12, void 0), f = m(t, "variant", 28, () => cr.Dots), v = m(t, "gap", 12, 20), y = m(t, "size", 12, 1), b = m(t, "lineWidth", 12, 1), x = m(t, "bgColor", 12, void 0), $ = m(t, "patternColor", 12, void 0), h = m(t, "patternClass", 12, void 0), _ = m(t, "class", 12, "");
  const { viewport: w, flowId: C } = tt(), E = y() || km[f()], P = f() === cr.Dots, O = f() === cr.Cross, V = Array.isArray(v()) ? v() : [v(), v()];
  pe(
    () => (o(), J(d())),
    () => {
      G(i, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), pe(() => a(), () => {
    G(s, [
      V[0] * a().zoom || 1,
      V[1] * a().zoom || 1
    ]);
  }), pe(() => a(), () => {
    G(l, E * a().zoom);
  }), pe(() => (g(l), g(s)), () => {
    G(u, O ? [g(l), g(l)] : g(s));
  }), pe(
    () => (g(l), g(u)),
    () => {
      G(c, P ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), Ct(), Ze();
  var H = Sm(), D = j(H), I = j(D);
  {
    var R = (M) => {
      const N = /* @__PURE__ */ be(() => g(l) / 2);
      xd(M, {
        get radius() {
          return g(N);
        },
        get class() {
          return h();
        }
      });
    }, S = (M) => {
      $d(M, {
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
    Pe(I, (M) => {
      P ? M(R) : M(S, !1);
    });
  }
  Y(D);
  var T = B(D);
  Y(H), Te(
    (M) => {
      Lt(H, 0, Dn(M), "svelte-1r7pe8d"), ht(H, "--xy-background-color-props", x()), ht(H, "--xy-background-pattern-color-props", $()), he(D, "id", g(i)), he(D, "x", a().x % g(s)[0]), he(D, "y", a().y % g(s)[1]), he(D, "width", g(s)[0]), he(D, "height", g(s)[1]), he(D, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), he(T, "fill", `url(#${g(i)})`);
    },
    [
      () => It(["svelte-flow__background", _()])
    ],
    be
  ), L(e, H);
  var k = ve({
    get id() {
      return d();
    },
    set id(M) {
      d(M), p();
    },
    get variant() {
      return f();
    },
    set variant(M) {
      f(M), p();
    },
    get gap() {
      return v();
    },
    set gap(M) {
      v(M), p();
    },
    get size() {
      return y();
    },
    set size(M) {
      y(M), p();
    },
    get lineWidth() {
      return b();
    },
    set lineWidth(M) {
      b(M), p();
    },
    get bgColor() {
      return x();
    },
    set bgColor(M) {
      x(M), p();
    },
    get patternColor() {
      return $();
    },
    set patternColor(M) {
      $(M), p();
    },
    get patternClass() {
      return h();
    },
    set patternClass(M) {
      h(M), p();
    },
    get class() {
      return _();
    },
    set class(M) {
      _(M), p();
    }
  });
  return r(), k;
}
le(
  _d,
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
var Pm = /* @__PURE__ */ Se("<rect></rect>");
function Cd(e, t) {
  fe(t, !1);
  let n = m(t, "x", 12), r = m(t, "y", 12), o = m(t, "width", 12, 0), a = m(t, "height", 12, 0), i = m(t, "borderRadius", 12, 5), s = m(t, "color", 12, void 0), l = m(t, "shapeRendering", 12), u = m(t, "strokeColor", 12, void 0), c = m(t, "strokeWidth", 12, 2), d = m(t, "selected", 12, !1), f = m(t, "class", 12, "");
  Ze();
  var v = Pm();
  let y;
  return Te(
    (b) => {
      y = Lt(v, 0, Dn(b), null, y, { selected: d() }), he(v, "x", n()), he(v, "y", r()), he(v, "rx", i()), he(v, "ry", i()), he(v, "width", o()), he(v, "height", a()), he(v, "style", `${s() ? `fill: ${s()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), he(v, "shape-rendering", l());
    },
    [
      () => It(["svelte-flow__minimap-node", f()])
    ],
    be
  ), L(e, v), ve({
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
      return a();
    },
    set height(b) {
      a(b), p();
    },
    get borderRadius() {
      return i();
    },
    set borderRadius(b) {
      i(b), p();
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
  Cd,
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
function Fl(e, t) {
  const n = f0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = F(t.viewport);
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
const Va = (e) => e instanceof Function ? e : () => e;
var Mm = /* @__PURE__ */ Se("<title> </title>"), Om = /* @__PURE__ */ Se('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function kd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(Ie, "$flowId", n), a = () => ne(we, "$viewport", n), i = () => ne(qe, "$containerWidth", n), s = () => ne(Xe, "$containerHeight", n), l = () => ne(oe, "$nodeLookup", n), u = () => ne(de, "$nodes", n), c = () => ne(ee, "$panZoom", n), d = () => ne(Fe, "$translateExtent", n), f = se(), v = se(), y = se(), b = se(), x = se(), $ = se(), h = se(), _ = se(), w = se(), C = se(), E = se(), P = se(), O = se();
  let V = m(t, "position", 12, "bottom-right"), H = m(t, "ariaLabel", 12, "Mini map"), D = m(t, "nodeStrokeColor", 12, "transparent"), I = m(t, "nodeColor", 12, void 0), R = m(t, "nodeClass", 12, ""), S = m(t, "nodeBorderRadius", 12, 5), T = m(t, "nodeStrokeWidth", 12, 2), k = m(t, "bgColor", 12, void 0), M = m(t, "maskColor", 12, void 0), N = m(t, "maskStrokeColor", 12, void 0), A = m(t, "maskStrokeWidth", 12, void 0), W = m(t, "width", 12, void 0), K = m(t, "height", 12, void 0), q = m(t, "pannable", 12, !0), re = m(t, "zoomable", 12, !0), Q = m(t, "inversePan", 12, void 0), X = m(t, "zoomStep", 12, void 0), ae = m(t, "style", 12, ""), $e = m(t, "class", 12, "");
  const Ce = 200, me = 150, {
    nodes: de,
    nodeLookup: oe,
    viewport: we,
    width: qe,
    height: Xe,
    flowId: Ie,
    panZoom: ee,
    translateExtent: Fe
  } = tt(), Re = I() === void 0 ? void 0 : Va(I()), ce = Va(D()), ue = Va(R()), Ee = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), De = `svelte-flow__minimap-desc-${o()}`;
  let Ge = se(g(f));
  const yt = () => g($);
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
      G(Ge, l().size > 0 ? Cc(Ko(l()), g(f)) : g(f)), u();
    }
  ), pe(() => J(W()), () => {
    G(v, W() ?? Ce);
  }), pe(() => J(K()), () => {
    G(y, K() ?? me);
  }), pe(
    () => (g(Ge), g(v)),
    () => {
      G(b, g(Ge).width / g(v));
    }
  ), pe(
    () => (g(Ge), g(y)),
    () => {
      G(x, g(Ge).height / g(y));
    }
  ), pe(
    () => (g(b), g(x)),
    () => {
      G($, Math.max(g(b), g(x)));
    }
  ), pe(() => (g($), g(v)), () => {
    G(h, g($) * g(v));
  }), pe(
    () => (g($), g(y)),
    () => {
      G(_, g($) * g(y));
    }
  ), pe(() => g($), () => {
    G(w, 5 * g($));
  }), pe(
    () => (g(Ge), g(h), g(w)),
    () => {
      G(C, g(Ge).x - (g(h) - g(Ge).width) / 2 - g(w));
    }
  ), pe(
    () => (g(Ge), g(_), g(w)),
    () => {
      G(E, g(Ge).y - (g(_) - g(Ge).height) / 2 - g(w));
    }
  ), pe(() => (g(h), g(w)), () => {
    G(P, g(h) + g(w) * 2);
  }), pe(() => (g(_), g(w)), () => {
    G(O, g(_) + g(w) * 2);
  }), Ct(), Ze();
  const at = /* @__PURE__ */ be(() => ae() + (k() ? `;--xy-minimap-background-color-props:${k()}` : "")), te = /* @__PURE__ */ be(() => It(["svelte-flow__minimap", $e()]));
  Go(e, {
    get position() {
      return V();
    },
    get style() {
      return g(at);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ye, Jt) => {
      var Rt = st(), cn = ke(Rt);
      {
        var Ve = (lt) => {
          var xe = Om();
          he(xe, "aria-labelledby", De);
          var ct = j(xe);
          {
            var vt = (St) => {
              var pt = Mm();
              he(pt, "id", De);
              var Bt = j(pt, !0);
              Y(pt), Te(() => an(Bt, H())), L(St, pt);
            };
            Pe(ct, (St) => {
              H() && St(vt);
            });
          }
          var Zt = B(ct);
          Gt(Zt, 1, u, (St) => St.id, (St, pt) => {
            var Bt = st();
            const Vt = /* @__PURE__ */ be(() => l().get(g(pt).id));
            var wt = ke(Bt);
            {
              var co = (Sn) => {
                const Qt = /* @__PURE__ */ be(() => pr(g(Vt))), mr = /* @__PURE__ */ be(() => Re == null ? void 0 : Re(g(Vt))), yr = /* @__PURE__ */ be(() => ce(g(Vt))), Nr = /* @__PURE__ */ be(() => ue(g(Vt)));
                Cd(Sn, xt(
                  {
                    get x() {
                      return g(Vt).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(Vt).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Qt),
                  {
                    get selected() {
                      return g(Vt).selected;
                    },
                    get color() {
                      return g(mr);
                    },
                    get borderRadius() {
                      return S();
                    },
                    get strokeColor() {
                      return g(yr);
                    },
                    get strokeWidth() {
                      return T();
                    },
                    shapeRendering: Ee,
                    get class() {
                      return g(Nr);
                    }
                  }
                ));
              };
              Pe(wt, (Sn) => {
                g(Vt) && Sc(g(Vt)) && Sn(co);
              });
            }
            L(St, Bt);
          });
          var In = B(Zt);
          Y(xe), Pt(xe, (St, pt) => Fl == null ? void 0 : Fl(St, pt), () => ({
            panZoom: c(),
            viewport: we,
            getViewScale: yt,
            translateExtent: d(),
            width: i(),
            height: s(),
            inversePan: Q(),
            zoomStep: X(),
            pannable: q(),
            zoomable: re()
          })), Te(() => {
            he(xe, "width", g(v)), he(xe, "height", g(y)), he(xe, "viewBox", `${g(C) ?? ""} ${g(E) ?? ""} ${g(P) ?? ""} ${g(O) ?? ""}`), ht(xe, "--xy-minimap-mask-background-color-props", M()), ht(xe, "--xy-minimap-mask-stroke-color-props", N()), ht(xe, "--xy-minimap-mask-stroke-width-props", A() ? A() * g($) : void 0), he(In, "d", `M${g(C) - g(w)},${g(E) - g(w)}h${g(P) + g(w) * 2}v${g(O) + g(w) * 2}h${-g(P) - g(w) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), L(lt, xe);
        };
        Pe(cn, (lt) => {
          c() && lt(Ve);
        });
      }
      L(ye, Rt);
    },
    $$slots: { default: !0 }
  });
  var Le = ve({
    get position() {
      return V();
    },
    set position(ye) {
      V(ye), p();
    },
    get ariaLabel() {
      return H();
    },
    set ariaLabel(ye) {
      H(ye), p();
    },
    get nodeStrokeColor() {
      return D();
    },
    set nodeStrokeColor(ye) {
      D(ye), p();
    },
    get nodeColor() {
      return I();
    },
    set nodeColor(ye) {
      I(ye), p();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(ye) {
      R(ye), p();
    },
    get nodeBorderRadius() {
      return S();
    },
    set nodeBorderRadius(ye) {
      S(ye), p();
    },
    get nodeStrokeWidth() {
      return T();
    },
    set nodeStrokeWidth(ye) {
      T(ye), p();
    },
    get bgColor() {
      return k();
    },
    set bgColor(ye) {
      k(ye), p();
    },
    get maskColor() {
      return M();
    },
    set maskColor(ye) {
      M(ye), p();
    },
    get maskStrokeColor() {
      return N();
    },
    set maskStrokeColor(ye) {
      N(ye), p();
    },
    get maskStrokeWidth() {
      return A();
    },
    set maskStrokeWidth(ye) {
      A(ye), p();
    },
    get width() {
      return W();
    },
    set width(ye) {
      W(ye), p();
    },
    get height() {
      return K();
    },
    set height(ye) {
      K(ye), p();
    },
    get pannable() {
      return q();
    },
    set pannable(ye) {
      q(ye), p();
    },
    get zoomable() {
      return re();
    },
    set zoomable(ye) {
      re(ye), p();
    },
    get inversePan() {
      return Q();
    },
    set inversePan(ye) {
      Q(ye), p();
    },
    get zoomStep() {
      return X();
    },
    set zoomStep(ye) {
      X(ye), p();
    },
    get style() {
      return ae();
    },
    set style(ye) {
      ae(ye), p();
    },
    get class() {
      return $e();
    },
    set class(ye) {
      $e(ye), p();
    }
  });
  return r(), Le;
}
le(
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
const ql = (e) => Op(e);
function Ut() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: a, width: i, height: s, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: v, nodeLookup: y, nodeOrigin: b, edgeLookup: x, connectionLookup: $ } = tt(), h = (C) => {
    var E, P;
    const O = F(y), V = ql(C) ? C : O.get(C.id), H = V.parentId ? zp(V.position, V.measured, V.parentId, O, F(b)) : V.position, D = {
      ...V,
      position: H,
      width: ((E = V.measured) == null ? void 0 : E.width) ?? V.width,
      height: ((P = V.measured) == null ? void 0 : P.height) ?? V.height
    };
    return Qr(D);
  }, _ = (C, E, P = { replace: !1 }) => {
    var O;
    const V = (O = F(y).get(C)) == null ? void 0 : O.internals.userNode;
    if (!V)
      return;
    const H = typeof E == "function" ? E(V) : E;
    P.replace ? d.update((D) => D.map((I) => I.id === C ? ql(H) ? H : { ...I, ...H } : I)) : (Object.assign(V, H), d.update((D) => D));
  }, w = (C) => F(y).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: w,
    getNode: (C) => {
      var E;
      return (E = w(C)) == null ? void 0 : E.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? F(d) : Gl(F(y), C),
    getEdge: (C) => F(x).get(C),
    getEdges: (C) => C === void 0 ? F(f) : Gl(F(x), C),
    setZoom: (C, E) => {
      const P = F(c);
      return P ? P.scaleTo(C, { duration: E == null ? void 0 : E.duration }) : Promise.resolve(!1);
    },
    getZoom: () => F(a).zoom,
    setViewport: async (C, E) => {
      const P = F(a), O = F(c);
      return O ? (await O.setViewport({
        x: C.x ?? P.x,
        y: C.y ?? P.y,
        zoom: C.zoom ?? P.zoom
      }, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => F(a),
    setCenter: async (C, E, P) => {
      const O = typeof (P == null ? void 0 : P.zoom) < "u" ? P.zoom : F(u), V = F(c);
      return V ? (await V.setViewport({
        x: F(i) / 2 - C * O,
        y: F(s) / 2 - E * O,
        zoom: O
      }, { duration: P == null ? void 0 : P.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, E) => {
      const P = F(c);
      if (!P)
        return Promise.resolve(!1);
      const O = Hs(C, F(i), F(s), F(l), F(u), (E == null ? void 0 : E.padding) ?? 0.1);
      return await P.setViewport(O, { duration: E == null ? void 0 : E.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, E = !0, P) => {
      const O = Tl(C), V = O ? C : h(C);
      return V ? (P || F(d)).filter((H) => {
        const D = F(y).get(H.id);
        if (!D || !O && H.id === C.id)
          return !1;
        const I = Qr(D), R = Lo(I, V);
        return E && R > 0 || R >= V.width * V.height;
      }) : [];
    },
    isNodeIntersecting: (C, E, P = !0) => {
      const O = Tl(C) ? C : h(C);
      if (!O)
        return !1;
      const V = Lo(O, E);
      return P && V > 0 || V >= O.width * O.height;
    },
    deleteElements: async ({ nodes: C = [], edges: E = [] }) => {
      const { nodes: P, edges: O } = await xc({
        nodesToRemove: C,
        edgesToRemove: E,
        nodes: F(d),
        edges: F(f),
        onBeforeDelete: F(r)
      });
      return P && d.update((V) => V.filter((H) => !P.some(({ id: D }) => D === H.id))), O && f.update((V) => V.filter((H) => !O.some(({ id: D }) => D === H.id))), {
        deletedNodes: P,
        deletedEdges: O
      };
    },
    screenToFlowPosition: (C, E = { snapToGrid: !0 }) => {
      const P = F(v);
      if (!P)
        return C;
      const O = E.snapToGrid ? F(o) : !1, { x: V, y: H, zoom: D } = F(a), { x: I, y: R } = P.getBoundingClientRect(), S = {
        x: C.x - I,
        y: C.y - R
      };
      return Fo(S, [V, H, D], O !== null, O || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const E = F(v);
      if (!E)
        return C;
      const { x: P, y: O, zoom: V } = F(a), { x: H, y: D } = E.getBoundingClientRect(), I = kc(C, [P, O, V]);
      return {
        x: I.x + H,
        y: I.y + D
      };
    },
    toObject: () => ({
      nodes: F(d).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: F(f).map((C) => ({ ...C })),
      viewport: { ...F(a) }
    }),
    updateNode: _,
    updateNodeData: (C, E, P) => {
      var O;
      const V = (O = F(y).get(C)) == null ? void 0 : O.internals.userNode;
      if (!V)
        return;
      const H = typeof E == "function" ? E(V) : E;
      V.data = P != null && P.replace ? H : { ...V.data, ...H }, d.update((D) => D);
    },
    getNodesBounds: (C) => {
      const E = F(y), P = F(b);
      return Tp(C, { nodeLookup: E, nodeOrigin: P });
    },
    getHandleConnections: ({ type: C, id: E, nodeId: P }) => {
      var O;
      return Array.from(((O = F($).get(`${P}-${C}-${E ?? null}`)) == null ? void 0 : O.values()) ?? []);
    },
    viewport: a
  };
}
function Gl(e, t) {
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
var Tm = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function Sd(e, t) {
  fe(t, !1);
  const [n, r] = ut(), o = () => ne(_, "$nodes", n), a = () => ne(h, "$nodeLookup", n), i = () => ne($, "$viewport", n), s = () => ne(x, "$domNode", n), l = se(), u = se(), c = se();
  let d = m(t, "nodeId", 12, void 0), f = m(t, "position", 12, void 0), v = m(t, "align", 12, void 0), y = m(t, "offset", 12, void 0), b = m(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: $, nodeLookup: h, nodes: _ } = tt(), { getNodesBounds: w } = Ut(), C = Cr("svelteflow__node_id");
  let E = se(), P = se([]), O = y() !== void 0 ? y() : 10, V = f() !== void 0 ? f() : Oe.Top, H = v() !== void 0 ? v() : "center";
  pe(
    () => (o(), J(d()), a()),
    () => {
      o();
      const T = Array.isArray(d()) ? d() : [d() || C];
      G(P, T.reduce(
        (k, M) => {
          const N = a().get(M);
          return N && k.push(N), k;
        },
        []
      ));
    }
  ), pe(
    () => (g(P), i()),
    () => {
      const T = w(g(P));
      T && G(E, qp(T, i(), V, O, H));
    }
  ), pe(() => g(P), () => {
    G(l, g(P).length === 0 ? 1 : Math.max(...g(P).map((T) => (T.internals.z || 5) + 1)));
  }), pe(() => o(), () => {
    G(u, o().filter((T) => T.selected).length);
  }), pe(
    () => (J(b()), g(P), g(u)),
    () => {
      G(c, typeof b() == "boolean" ? b() : g(P).length === 1 && g(P)[0].selected && g(u) === 1);
    }
  ), Ct(), Ze();
  var D = st(), I = ke(D);
  {
    var R = (T) => {
      var k = Tm(), M = j(k);
      Mt(M, t, "default", {}), Y(k), Pt(k, (N, A) => Bi == null ? void 0 : Bi(N, A), () => ({ domNode: s() })), Te(
        (N) => {
          he(k, "data-id", N), ht(k, "position", "absolute"), ht(k, "transform", g(E)), ht(k, "z-index", g(l));
        },
        [
          () => g(P).reduce((N, A) => `${N}${A.id} `, "").trim()
        ],
        be
      ), L(T, k);
    };
    Pe(I, (T) => {
      s() && g(c) && g(P) && T(R);
    });
  }
  L(e, D);
  var S = ve({
    get nodeId() {
      return d();
    },
    set nodeId(T) {
      d(T), p();
    },
    get position() {
      return f();
    },
    set position(T) {
      f(T), p();
    },
    get align() {
      return v();
    },
    set align(T) {
      v(T), p();
    },
    get offset() {
      return y();
    },
    set offset(T) {
      y(T), p();
    },
    get isVisible() {
      return b();
    },
    set isVisible(T) {
      b(T), p();
    }
  });
  return r(), S;
}
le(
  Sd,
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
function Hr(e) {
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
const Ul = "tinyflow-component";
class Vm {
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
    const t = document.createElement(Ul);
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
    const n = document.createElement(Ul);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Hm = () => {
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
}, bi = Hm();
var zm = /* @__PURE__ */ ie("<button><!></button>");
function et(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = zm();
  let a;
  var i = j(o);
  return kr(i, () => n() ?? $t), Y(o), Te(() => a = xn(o, a, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), L(e, o), ve({
    get children() {
      return n();
    },
    set children(s) {
      n(s), p();
    }
  });
}
le(et, { children: {} }, [], [], !0);
var Nm = /* @__PURE__ */ ie("<input>");
function Ed(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Nm();
  _o(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ve();
}
le(Ed, {}, [], [], !0);
var Dm = /* @__PURE__ */ ie("<input>");
function zt(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Dm();
  _o(r);
  let o;
  Te(() => o = xn(r, o, {
    type: "text",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), L(e, r), ve();
}
le(zt, {}, [], [], !0);
var Lm = /* @__PURE__ */ ie("<textarea></textarea>");
function At(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Lm();
  kv(r);
  let o;
  Te(() => o = xn(r, o, {
    ...n,
    class: `tf-textarea nodrag ${t.class ?? ""}`
  })), L(e, r), ve();
}
le(At, {}, [], [], !0);
var Am = /* @__PURE__ */ ie('<div role="button"><!></div>'), Im = /* @__PURE__ */ ie("<div></div>");
function Pd(e, t) {
  const n = ft(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = ft(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = m(t, "items", 28, () => []), a = m(t, "onChange", 12, () => {
  }), i = m(t, "activeIndex", 12, 0);
  function s(c, d) {
    var f;
    i(d), (f = a()) == null || f(c, d);
  }
  Ze();
  var l = Im();
  let u;
  return Gt(l, 5, o, Oo, (c, d, f) => {
    var v = Am();
    he(v, "tabindex", f), v.__click = () => s(g(d), f), v.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), s(g(d), f));
    };
    var y = j(v);
    {
      var b = ($) => {
        var h = Ke();
        Te(() => an(h, g(d).label)), L($, h);
      }, x = ($) => {
        var h = st(), _ = ke(h);
        kr(_, () => g(d).label ?? $t), L($, h);
      };
      Pe(y, ($) => {
        typeof g(d).label == "string" ? $(b) : $(x, !1);
      });
    }
    Y(v), Te(() => Lt(v, 1, `tf-tabs-item ${(f === i() ? "active" : "") ?? ""}`)), L(c, v);
  }), Y(l), Te(() => u = xn(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), L(e, l), ve({
    get items() {
      return o();
    },
    set items(c) {
      o(c), p();
    },
    get onChange() {
      return a();
    },
    set onChange(c) {
      a(c), p();
    },
    get activeIndex() {
      return i();
    },
    set activeIndex(c) {
      i(c), p();
    }
  });
}
na(["click", "keydown"]);
le(Pd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Rm = (e, t, n) => t(g(n)), Zm = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, Bm = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), Wm = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), Ym = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), Xm = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), jm = /* @__PURE__ */ ie("<div></div>");
const Km = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Md(e, t) {
  fe(t, !0), it(e, Km);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => tn([]));
  function a(s) {
    var l;
    o().includes(s.key) ? o(o().filter((u) => u !== s.key)) : (o().push(s.key), o(o())), (l = r()) == null || l(s, o());
  }
  var i = jm();
  return Gt(i, 21, n, Oo, (s, l, u) => {
    var c = Xm(), d = j(c);
    he(d, "tabindex", u), d.__click = [Rm, a, l], d.__keydown = [Zm, a, l];
    var f = j(d);
    {
      var v = (w) => {
        var C = Bm(), E = j(C);
        ar(E, {
          get target() {
            return g(l).icon;
          }
        }), Y(C), L(w, C);
      };
      Pe(f, (w) => {
        g(l).icon && w(v);
      });
    }
    var y = B(f, 2);
    ar(y, {
      get target() {
        return g(l).title;
      }
    });
    var b = B(y, 2);
    Y(d);
    var x = B(d, 2);
    {
      var $ = (w) => {
        var C = Wm(), E = j(C);
        ar(E, {
          get target() {
            return g(l).description;
          }
        }), Y(C), L(w, C);
      };
      Pe(x, (w) => {
        g(l).description && w($);
      });
    }
    var h = B(x, 2);
    {
      var _ = (w) => {
        var C = Ym(), E = j(C);
        ar(E, {
          get target() {
            return g(l).content;
          }
        }), Y(C), L(w, C);
      };
      Pe(h, (w) => {
        o().includes(g(l).key) && w(_);
      });
    }
    Y(c), Te((w) => Lt(b, 1, `tf-collapse-item-title-arrow ${w ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), L(s, c);
  }), Y(i), Te(() => {
    he(i, "style", t.style), Lt(i, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), L(e, i), ve({
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
na(["click", "keydown"]);
le(Md, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function ar(e, t) {
  fe(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = st(), o = ke(r);
  {
    var a = (s) => {
      var l = st(), u = ke(l);
      kr(u, () => n() ?? $t), L(s, l);
    }, i = (s) => {
      var l = st(), u = ke(l);
      $s(u, n), L(s, l);
    };
    Pe(o, (s) => {
      typeof n() == "function" ? s(a) : s(i, !1);
    });
  }
  return L(e, r), ve({
    get target() {
      return n();
    },
    set target(s) {
      n(s), p();
    }
  });
}
le(ar, { target: {} }, [], [], !0);
var Fm = (e, t, n) => t(g(n)), qm = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Gm = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), Um = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Jm = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), Qm = /* @__PURE__ */ ie("<!> <!>", 1), e2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), t2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), n2 = /* @__PURE__ */ ie("<div><!></div>");
function Hn(e, t) {
  fe(t, !0);
  const n = (_, w = $t) => {
    var C = st(), E = ke(C);
    Gt(E, 19, w, (P, O) => `${O}_${P.value}`, (P, O) => {
      var V = Um(), H = ke(V);
      H.__click = [Fm, b, O];
      var D = j(H), I = j(D);
      {
        var R = (M) => {
          var N = qm();
          L(M, N);
        };
        Pe(I, (M) => {
          g(O).children && g(O).children.length > 0 && M(R);
        });
      }
      Y(D);
      var S = B(D, 2);
      ar(S, {
        get target() {
          return g(O).label;
        }
      }), Y(H);
      var T = B(H, 2);
      {
        var k = (M) => {
          var N = Gm(), A = j(N);
          n(A, () => g(O).children), Y(N), L(M, N);
        };
        Pe(T, (M) => {
          g(O).children && g(O).children.length > 0 && (l() || c().includes(g(O).value)) && M(k);
        });
      }
      L(P, V);
    }), L(_, C);
  };
  let r = m(t, "items", 7), o = m(t, "onExpand", 7), a = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), l = m(t, "expandAll", 7, !0), u = m(t, "multiple", 7, !1), c = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ Tt(t, [
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
    const _ = [], w = (C) => {
      for (let E of C)
        i().length > 0 ? i().includes(E.value) && _.push(E) : s().includes(E.value) && _.push(E), E.children && E.children.length > 0 && w(E.children);
    };
    return w(r()), _;
  }), y;
  function b(_) {
    var w, C;
    if (_.children && _.children.length > 0) {
      (w = o()) == null || w(_);
      return;
    } else
      y == null || y.hide(), (C = a()) == null || C(_);
  }
  var x = n2();
  let $;
  var h = j(x);
  return Vn(
    ei(h, {
      floating: (_) => {
        var w = Jm(), C = j(w);
        n(C, r), Y(w), L(_, w);
      },
      children: (_, w) => {
        var C = t2();
        let E;
        var P = j(C);
        Gt(
          P,
          23,
          () => g(v),
          (O, V) => `${V}_${O.value}`,
          (O, V, H) => {
            var D = st(), I = ke(D);
            {
              var R = (T) => {
                var k = st(), M = ke(k);
                {
                  var N = (A) => {
                    ar(A, {
                      get target() {
                        return g(V).label;
                      }
                    });
                  };
                  Pe(M, (A) => {
                    g(H) === 0 && A(N);
                  });
                }
                L(T, k);
              }, S = (T) => {
                var k = Qm(), M = ke(k);
                ar(M, {
                  get target() {
                    return g(V).label;
                  }
                });
                var N = B(M, 2);
                {
                  var A = (W) => {
                    var K = Ke(",");
                    L(W, K);
                  };
                  Pe(N, (W) => {
                    g(H) < g(v).length - 1 && W(A);
                  });
                }
                L(T, k);
              };
              Pe(I, (T) => {
                u() ? T(S, !1) : T(R);
              });
            }
            L(O, D);
          },
          (O) => {
            var V = e2(), H = j(V, !0);
            Y(V), Te(() => an(H, d())), L(O, V);
          }
        ), Y(P), Ne(2), Y(C), Te(() => E = xn(C, E, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), L(_, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => y = _,
    () => y
  ), Y(x), Te(() => $ = xn(x, $, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), L(e, x), ve({
    get items() {
      return r();
    },
    set items(_) {
      r(_), p();
    },
    get onExpand() {
      return o();
    },
    set onExpand(_) {
      o(_), p();
    },
    get onSelect() {
      return a();
    },
    set onSelect(_) {
      a(_), p();
    },
    get value() {
      return i();
    },
    set value(_ = []) {
      i(_), p();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(_ = []) {
      s(_), p();
    },
    get expandAll() {
      return l();
    },
    set expandAll(_ = !0) {
      l(_), p();
    },
    get multiple() {
      return u();
    },
    set multiple(_ = !1) {
      u(_), p();
    },
    get expandValue() {
      return c();
    },
    set expandValue(_ = []) {
      c(_), p();
    },
    get placeholder() {
      return d();
    },
    set placeholder(_) {
      d(_), p();
    }
  });
}
na(["click"]);
le(
  Hn,
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
const Io = Math.min, Xr = Math.max, Xi = Math.round, Mn = (e) => ({
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
  return Xr(e, Io(t, n));
}
function Uo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mr(e) {
  return e.split("-")[0];
}
function Jo(e) {
  return e.split("-")[1];
}
function Od(e) {
  return e === "x" ? "y" : "x";
}
function Is(e) {
  return e === "y" ? "height" : "width";
}
function to(e) {
  return ["top", "bottom"].includes(Mr(e)) ? "y" : "x";
}
function Rs(e) {
  return Od(to(e));
}
function i2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Jo(e), o = Rs(e), a = Is(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = ji(i)), [i, ji(i)];
}
function a2(e) {
  const t = ji(e);
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
  let a = s2(Mr(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(ns)))), a;
}
function ji(e) {
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
function Td(e) {
  return typeof e != "number" ? u2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ki(e) {
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
function Jl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = to(t), i = Rs(t), s = Is(i), l = Mr(t), u = a === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
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
  } = Jl(u, r, l), f = r, v = {}, y = 0;
  for (let b = 0; b < s.length; b++) {
    const {
      name: x,
      fn: $
    } = s[b], {
      x: h,
      y: _,
      data: w,
      reset: C
    } = await $({
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
    c = h ?? c, d = _ ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, C && y <= 50 && (y++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: d
    } = Jl(u, f, l)), b = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: v
  };
};
async function Vd(e, t) {
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
  } = Uo(t, e), y = Td(v), b = s[f ? d === "floating" ? "reference" : "floating" : d], x = Ki(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), $ = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ki(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: $,
    offsetParent: h,
    strategy: l
  }) : $);
  return {
    top: (x.top - w.top + y.top) / _.y,
    bottom: (w.bottom - x.bottom + y.bottom) / _.y,
    left: (x.left - w.left + y.left) / _.x,
    right: (w.right - x.right + y.right) / _.x
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
    const d = Td(c), f = {
      x: n,
      y: r
    }, v = Rs(o), y = Is(v), b = await i.getDimensions(u), x = v === "y", $ = x ? "top" : "left", h = x ? "bottom" : "right", _ = x ? "clientHeight" : "clientWidth", w = a.reference[y] + a.reference[v] - f[v] - a.floating[y], C = f[v] - a.reference[v], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = E ? E[_] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(E))) && (P = s.floating[_] || a.floating[y]);
    const O = w / 2 - C / 2, V = P / 2 - b[y] / 2 - 1, H = Io(d[$], V), D = Io(d[h], V), I = H, R = P - b[y] - D, S = P / 2 - b[y] / 2 + O, T = ts(I, S, R), k = !l.arrow && Jo(o) != null && S !== T && a.reference[y] / 2 - (S < I ? H : D) - b[y] / 2 < 0, M = k ? S < I ? S - I : S - R : 0;
    return {
      [v]: f[v] + M,
      data: {
        [v]: T,
        centerOffset: S - T - M,
        ...k && {
          alignmentOffset: M
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
        fallbackAxisSideDirection: y = "none",
        flipAlignment: b = !0,
        ...x
      } = Uo(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const $ = Mr(o), h = to(s), _ = Mr(s) === s, w = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || (_ || !b ? [ji(s)] : a2(s)), E = y !== "none";
      !f && E && C.push(...l2(s, b, y, w));
      const P = [s, ...C], O = await Vd(t, x), V = [];
      let H = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (c && V.push(O[$]), d) {
        const S = i2(o, i, w);
        V.push(O[S[0]], O[S[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: V
      }], !V.every((S) => S <= 0)) {
        var D, I;
        const S = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1, T = P[S];
        if (T)
          return {
            data: {
              index: S,
              overflows: H
            },
            reset: {
              placement: T
            }
          };
        let k = (I = H.filter((M) => M.overflows[0] <= 0).sort((M, N) => M.overflows[1] - N.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!k)
          switch (v) {
            case "bestFit": {
              var R;
              const M = (R = H.filter((N) => {
                if (E) {
                  const A = to(N.placement);
                  return A === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((A) => A > 0).reduce((A, W) => A + W, 0)]).sort((N, A) => N[1] - A[1])[0]) == null ? void 0 : R[0];
              M && (k = M);
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
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Mr(n), s = Jo(n), l = to(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, c = a && l ? -1 : 1, d = Uo(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof y == "number" && (v = s === "end" ? y * -1 : y), l ? {
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
              x: $,
              y: h
            } = x;
            return {
              x: $,
              y: h
            };
          }
        },
        ...l
      } = Uo(e, t), u = {
        x: n,
        y: r
      }, c = await Vd(t, l), d = to(Mr(o)), f = Od(d);
      let v = u[f], y = u[d];
      if (a) {
        const x = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", h = v + c[x], _ = v - c[$];
        v = ts(h, v, _);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", h = y + c[x], _ = y - c[$];
        y = ts(h, y, _);
      }
      const b = s.fn({
        ...t,
        [f]: v,
        [d]: y
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
  return Hd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function sn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Jn(e) {
  var t;
  return (t = (Hd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hd(e) {
  return va() ? e instanceof Node || e instanceof sn(e).Node : !1;
}
function $n(e) {
  return va() ? e instanceof Element || e instanceof sn(e).Element : !1;
}
function zn(e) {
  return va() ? e instanceof HTMLElement || e instanceof sn(e).HTMLElement : !1;
}
function Ql(e) {
  return !va() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof sn(e).ShadowRoot;
}
function Qo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = _n(e);
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
function Zs(e) {
  const t = Bs(), n = $n(e) ? _n(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function m2(e) {
  let t = hr(e);
  for (; zn(t) && !no(t); ) {
    if (Zs(t))
      return t;
    if (ga(t))
      return null;
    t = hr(t);
  }
  return null;
}
function Bs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function no(e) {
  return ["html", "body", "#document"].includes(uo(e));
}
function _n(e) {
  return sn(e).getComputedStyle(e);
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
function hr(e) {
  if (uo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ql(e) && e.host || // Fallback.
    Jn(e)
  );
  return Ql(t) ? t.host : t;
}
function zd(e) {
  const t = hr(e);
  return no(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zn(t) && Qo(t) ? t : zd(t);
}
function Nd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = zd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = sn(o);
  return a ? (rs(i), t.concat(i, i.visualViewport || [], Qo(o) ? o : [], [])) : t.concat(o, Nd(o, []));
}
function rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Dd(e) {
  const t = _n(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Xi(n) !== a || Xi(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Ld(e) {
  return $n(e) ? e : e.contextElement;
}
function jr(e) {
  const t = Ld(e);
  if (!zn(t))
    return Mn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Dd(t);
  let i = (a ? Xi(n.width) : n.width) / r, s = (a ? Xi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const y2 = /* @__PURE__ */ Mn(0);
function Ad(e) {
  const t = sn(e);
  return !Bs() || !t.visualViewport ? y2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function w2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== sn(e) ? !1 : t;
}
function Ro(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ld(e);
  let i = Mn(1);
  t && (r ? $n(r) && (i = jr(r)) : i = jr(e));
  const s = w2(a, n, r) ? Ad(a) : Mn(0);
  let l = (o.left + s.x) / i.x, u = (o.top + s.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = sn(a), v = r && $n(r) ? sn(r) : r;
    let y = f, b = rs(y);
    for (; b && r && v !== y; ) {
      const x = jr(b), $ = b.getBoundingClientRect(), h = _n(b), _ = $.left + (b.clientLeft + parseFloat(h.paddingLeft)) * x.x, w = $.top + (b.clientTop + parseFloat(h.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += _, u += w, y = sn(b), b = rs(y);
    }
  }
  return Ki({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Ws(e, t) {
  const n = ha(e).scrollLeft;
  return t ? t.left + n : Ro(Jn(e)).left + n;
}
function Id(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ws(e, r)
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
  }, u = Mn(1);
  const c = Mn(0), d = zn(r);
  if ((d || !d && !a) && ((uo(r) !== "body" || Qo(i)) && (l = ha(r)), zn(r))) {
    const v = Ro(r);
    u = jr(r), c.x = v.x + r.clientLeft, c.y = v.y + r.clientTop;
  }
  const f = i && !d && !a ? Id(i, l, !0) : Mn(0);
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
  const t = Jn(e), n = ha(e), r = e.ownerDocument.body, o = Xr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Xr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ws(e);
  const s = -n.scrollTop;
  return _n(r).direction === "rtl" && (i += Xr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function _2(e, t) {
  const n = sn(e), r = Jn(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = Bs();
    (!u || u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function C2(e, t) {
  const n = Ro(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = zn(e) ? jr(e) : Mn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function eu(e, t, n) {
  let r;
  if (t === "viewport")
    r = _2(e, n);
  else if (t === "document")
    r = $2(Jn(e));
  else if ($n(t))
    r = C2(t, n);
  else {
    const o = Ad(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ki(r);
}
function Rd(e, t) {
  const n = hr(e);
  return n === t || !$n(n) || no(n) ? !1 : _n(n).position === "fixed" || Rd(n, t);
}
function k2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Nd(e, []).filter((s) => $n(s) && uo(s) !== "body"), o = null;
  const a = _n(e).position === "fixed";
  let i = a ? hr(e) : e;
  for (; $n(i) && !no(i); ) {
    const s = _n(i), l = Zs(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && ["absolute", "fixed"].includes(o.position) || Qo(i) && !l && Rd(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = hr(i);
  }
  return t.set(e, r), r;
}
function S2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? ga(t) ? [] : k2(t, this._c) : [].concat(n), r], i = a[0], s = a.reduce((l, u) => {
    const c = eu(t, u, o);
    return l.top = Xr(c.top, l.top), l.right = Io(c.right, l.right), l.bottom = Io(c.bottom, l.bottom), l.left = Xr(c.left, l.left), l;
  }, eu(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function E2(e) {
  const {
    width: t,
    height: n
  } = Dd(e);
  return {
    width: t,
    height: n
  };
}
function P2(e, t, n) {
  const r = zn(t), o = Jn(t), a = n === "fixed", i = Ro(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Mn(0);
  if (r || !r && !a)
    if ((uo(t) !== "body" || Qo(o)) && (s = ha(t)), r) {
      const f = Ro(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Ws(o));
  const u = o && !r && !a ? Id(o, s) : Mn(0), c = i.left + s.scrollLeft - l.x - u.x, d = i.top + s.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Ha(e) {
  return _n(e).position === "static";
}
function tu(e, t) {
  if (!zn(e) || _n(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Jn(e) === n && (n = n.ownerDocument.body), n;
}
function Zd(e, t) {
  const n = sn(e);
  if (ga(e))
    return n;
  if (!zn(e)) {
    let o = hr(e);
    for (; o && !no(o); ) {
      if ($n(o) && !Ha(o))
        return o;
      o = hr(o);
    }
    return n;
  }
  let r = tu(e, t);
  for (; r && p2(r) && Ha(r); )
    r = tu(r, t);
  return r && no(r) && Ha(r) && !Zs(r) ? n : r || m2(e) || n;
}
const M2 = async function(e) {
  const t = this.getOffsetParent || Zd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: P2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function O2(e) {
  return _n(e).direction === "rtl";
}
const T2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: b2,
  getDocumentElement: Jn,
  getClippingRect: S2,
  getOffsetParent: Zd,
  getElementRects: M2,
  getClientRects: x2,
  getDimensions: E2,
  getScale: jr,
  isElement: $n,
  isRTL: O2
}, V2 = g2, H2 = h2, z2 = f2, N2 = d2, D2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: T2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return c2(e, t, {
    ...o,
    platform: a
  });
}, L2 = ({
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
    D2(e, u, {
      placement: r,
      middleware: [
        V2(o),
        // 手动偏移配置
        z2(a),
        //自动翻转
        H2(i),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [N2({ element: c })] : []
      ]
    }).then(({ x: $, y: h, placement: _, middlewareData: w }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${h}px`
      }), l) {
        const { x: C, y: E } = w.arrow, P = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [P]: "2px"
        });
      }
    });
  }
  let f = !1;
  function v() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function y() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function b($) {
    $.stopPropagation(), f ? y() : v();
  }
  function x($) {
    u.contains($.target) || y();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, b);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, b);
      }), document.removeEventListener("click", x);
    },
    hide() {
      y();
    },
    isVisible() {
      return f;
    }
  };
};
var A2 = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ei(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let a, i, s;
  un(() => (s = L2({
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
  var u = A2(), c = j(u), d = j(c);
  kr(d, n), Y(c), Vn(c, (y) => a = y, () => a);
  var f = B(c, 2), v = j(f);
  return kr(v, r), Y(f), Vn(f, (y) => i = y, () => i), Y(u), L(e, u), ve({
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
  });
}
le(ei, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function rt(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), a = m(t, "mb", 7);
  var i = st(), s = ke(i);
  return zv(s, () => `h${r()}`, !1, (l, u) => {
    let c;
    Te(() => c = xn(
      l,
      c,
      {
        class: "tf-heading",
        style: `margin-top:${o() || "0"};margin-bottom:${a() || "0"}`
      },
      void 0,
      l.namespaceURI === lu,
      l.nodeName.includes("-")
    ));
    var d = st(), f = ke(d);
    kr(f, () => n() ?? $t), L(u, d);
  }), L(e, i), ve({
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
      return a();
    },
    set mb(l) {
      a(l), p();
    }
  });
}
le(rt, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var I2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const R2 = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function pa(e, t) {
  fe(t, !0), it(e, R2);
  const n = /* @__PURE__ */ Tt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  et(e, xt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var a = I2();
      L(r, a);
    },
    $$slots: { default: !0 }
  })), ve();
}
le(pa, {}, [], [], !0);
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
      const o = (r = F(t).get(n)) == null ? void 0 : r.internals.userNode;
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
var W2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Y2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), X2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), j2 = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-44dmwv"><!> <!> <!></div>'), K2 = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const F2 = {
  hash: "svelte-44dmwv",
  code: ".tf-node-toolbar.svelte-44dmwv {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}"
};
function kn(e, t) {
  fe(t, !0), it(e, F2);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), a = m(t, "handle", 7), i = m(t, "children", 7), s = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), c = m(t, "showSourceHandle", 7, !0), d = m(t, "showTargetHandle", 7, !0), f = m(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: y } = Ut(), b = [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: i()
    }
  ], { deleteNode: x } = Z2(), { copyNode: $ } = B2();
  var h = K2(), _ = ke(h);
  {
    var w = (R) => {
      Sd(R, {
        get position() {
          return Oe.Top;
        },
        align: "end",
        children: (S, T) => {
          var k = j2(), M = j(k);
          {
            var N = (re) => {
              et(re, {
                class: "tf-node-toolbar-item",
                children: (Q, X) => {
                  var ae = W2();
                  L(Q, ae);
                },
                $$slots: { default: !0 }
              });
            };
            Pe(M, (re) => {
              s() && re(N);
            });
          }
          var A = B(M, 2);
          {
            var W = (re) => {
              et(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (Q, X) => {
                  var ae = Y2();
                  L(Q, ae);
                },
                $$slots: { default: !0 }
              });
            };
            Pe(A, (re) => {
              l() && re(W);
            });
          }
          var K = B(A, 2);
          {
            var q = (re) => {
              et(re, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (Q, X) => {
                  var ae = X2();
                  L(Q, ae);
                },
                $$slots: { default: !0 }
              });
            };
            Pe(K, (re) => {
              u() && re(q);
            });
          }
          Y(k), L(S, k);
        },
        $$slots: { default: !0 }
      });
    };
    Pe(_, (R) => {
      (s() || l() || u()) && R(w);
    });
  }
  var C = B(_, 2), E = B(j(C), 2), P = j(E);
  Md(P, {
    items: b,
    activeKeys: v,
    onChange: (R, S) => {
      var T;
      y(r(), { expand: S == null ? void 0 : S.includes("key") }), (T = f()) == null || T(S != null && S.includes("key") ? "key" : "");
    }
  }), Y(E), Y(C);
  var O = B(C, 2);
  {
    var V = (R) => {
      gr(R, {
        type: "target",
        get position() {
          return Oe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    Pe(O, (R) => {
      d() && R(V);
    });
  }
  var H = B(O, 2);
  {
    var D = (R) => {
      gr(R, {
        type: "source",
        get position() {
          return Oe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    Pe(H, (R) => {
      c() && R(D);
    });
  }
  var I = B(H, 2);
  return kr(I, () => a() ?? $t), L(e, h), ve({
    get data() {
      return n();
    },
    set data(R) {
      n(R), p();
    },
    get id() {
      return r();
    },
    set id(R = "") {
      r(R), p();
    },
    get icon() {
      return o();
    },
    set icon(R) {
      o(R), p();
    },
    get handle() {
      return a();
    },
    set handle(R) {
      a(R), p();
    },
    get children() {
      return i();
    },
    set children(R) {
      i(R), p();
    },
    get allowExecute() {
      return s();
    },
    set allowExecute(R = !0) {
      s(R), p();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(R = !0) {
      l(R), p();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(R = !0) {
      u(R), p();
    },
    get showSourceHandle() {
      return c();
    },
    set showSourceHandle(R = !0) {
      c(R), p();
    },
    get showTargetHandle() {
      return d();
    },
    set showTargetHandle(R = !0) {
      d(R), p();
    },
    get onCollapse() {
      return f();
    },
    set onCollapse(R) {
      f(R), p();
    }
  });
}
le(
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
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
function kt() {
  return Cr("svelteflow__node_id");
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
var G2 = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), U2 = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), J2 = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Q2 = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Wd(e, t) {
  fe(t, !0), it(e, Q2);
  const [n, r] = ut(), o = () => ne(g(l), "$node", n), a = m(t, "parameter", 7), i = m(t, "index", 7);
  let s = kt(), l = /* @__PURE__ */ ze(() => Hr(s)), u = /* @__PURE__ */ ze(() => {
    var O, V;
    return {
      ...a(),
      ...(V = (O = o()) == null ? void 0 : O.data) == null ? void 0 : V.parameters[i()]
    };
  });
  const { updateNodeData: c } = Ut(), d = (O) => {
    const V = O.target.value;
    c(s, (H) => {
      let D = H.data.parameters;
      return D[i()].name = V, { parameters: D };
    });
  }, f = (O) => {
    const V = O.target.checked;
    c(s, (H) => {
      let D = H.data.parameters;
      return D[i()].required = V, { parameters: D };
    });
  }, v = (O) => {
    const V = O.value;
    V && c(s, (H) => {
      let D = H.data.parameters;
      return D[i()].dataType = V, { parameters: D };
    });
  };
  let y;
  const b = () => {
    c(s, (O) => {
      let V = O.data.parameters;
      return V.splice(i(), 1), { parameters: [...V] };
    }), y == null || y.hide();
  };
  var x = J2(), $ = ke(x), h = j($);
  zt(h, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), Y($);
  var _ = B($, 2), w = j(_);
  Ed(w, {
    get checked() {
      return g(u).required;
    },
    onchange: f
  }), Y(_);
  var C = B(_, 2), E = j(C);
  Vn(
    ei(E, {
      placement: "bottom",
      floating: (O) => {
        var V = G2(), H = j(V), D = B(j(H));
        const I = /* @__PURE__ */ ze(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        Hn(D, {
          items: Bd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(I);
          }
        }), Y(H);
        var R = B(H, 2), S = B(j(R));
        At(S, { rows: 1, style: "width: 100%;" }), Y(R);
        var T = B(R, 2), k = B(j(T));
        At(k, { rows: 3, style: "width: 100%;" }), Y(T);
        var M = B(T, 2), N = j(M);
        et(N, {
          onclick: b,
          children: (A, W) => {
            Ne();
            var K = Ke("删除");
            L(A, K);
          },
          $$slots: { default: !0 }
        }), Y(M), Y(V), L(O, V);
      },
      children: (O, V) => {
        et(O, {
          class: "input-btn-more",
          children: (H, D) => {
            var I = U2();
            L(H, I);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => y = O,
    () => y
  ), Y(C), L(e, x);
  var P = ve({
    get parameter() {
      return a();
    },
    set parameter(O) {
      a(O), p();
    },
    get index() {
      return i();
    },
    set index(O) {
      i(O), p();
    }
  });
  return r(), P;
}
le(Wd, { parameter: {}, index: {} }, [], [], !0);
var ey = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), ty = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), ny = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ry = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Yd(e, t) {
  fe(t, !0), it(e, ry);
  const [n, r] = ut(), o = () => ne(g(i), "$node", n);
  let a = kt(), i = /* @__PURE__ */ ze(() => Hr(a)), s = /* @__PURE__ */ ze(() => {
    var f, v;
    return [...((v = (f = o()) == null ? void 0 : f.data) == null ? void 0 : v.parameters) || []];
  });
  var l = ny(), u = j(l);
  {
    var c = (f) => {
      var v = ey();
      Ne(4), L(f, v);
    };
    Pe(u, (f) => {
      g(s).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  Gt(
    d,
    19,
    () => g(s),
    (f) => f.id,
    (f, v, y) => {
      Wd(f, {
        get parameter() {
          return g(v);
        },
        get index() {
          return g(y);
        }
      });
    },
    (f) => {
      var v = ty();
      L(f, v);
    }
  ), Y(l), L(e, l), ve(), r();
}
le(Yd, {}, [], [], !0);
const Xd = (e) => {
  !e || e.length == 0 || e.forEach((t) => {
    t.id || (t.id = ro()), Xd(t.children);
  });
}, An = () => {
  const { updateNodeData: e } = Ut();
  return {
    addParameter: (t, n = "parameters", r) => {
      Xd(r == null ? void 0 : r.children);
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
var oy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), iy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ay = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const sy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function jd(e, t) {
  fe(t, !0), it(e, sy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
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
      L(i, s);
    },
    children: (i, s) => {
      var l = ay(), u = ke(l), c = j(u);
      rt(c, {
        level: 3,
        children: (v, y) => {
          Ne();
          var b = Ke("输入参数");
          L(v, b);
        },
        $$slots: { default: !0 }
      });
      var d = B(c, 2);
      et(d, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          a(o);
        },
        children: (v, y) => {
          var b = iy();
          L(v, b);
        },
        $$slots: { default: !0 }
      }), Y(u);
      var f = B(u, 2);
      Yd(f, {}), L(i, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ve({
    get data() {
      return n();
    },
    set data(i) {
      n(i), p();
    }
  });
}
le(jd, { data: {} }, [], [], !0);
const Kd = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Kd(e, r.source, n));
}, nu = (e, t) => {
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
  const t = kt(), n = Hr(t), { nodes: r, edges: o } = tt();
  return lr([n, r, o], ([a, i, s]) => {
    const l = [];
    if (e) {
      for (let u of i)
        if (u.parentId === a.id) {
          const c = nu(u, u.parentId === a.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Kd(u, t, s);
      for (let c of i)
        if (u.includes(c.id)) {
          const d = nu(c, c.parentId === a.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var uy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), cy = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const dy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Fd(e, t) {
  fe(t, !0), it(e, dy);
  const [n, r] = ut(), o = () => ne(g(c), "$node", n), a = () => ne(w, "$selectItems", n);
  un(() => {
    g(d).refType || $({ value: "ref" });
  });
  const i = m(t, "parameter", 7), s = m(t, "index", 7), l = m(t, "dataKeyName", 7);
  let u = kt(), c = /* @__PURE__ */ ze(() => Hr(u)), d = /* @__PURE__ */ ze(() => {
    var T;
    return {
      ...i(),
      ...(T = o()) == null ? void 0 : T.data[l()][s()]
    };
  });
  const { updateNodeData: f } = Ut(), v = (T, k) => {
    f(u, (M) => {
      let N = M.data[l()];
      return N[s()] = { ...N[s()], [T]: k }, { [l()]: N };
    });
  }, y = (T) => {
    const k = T.target.value;
    v("name", k);
  }, b = (T) => {
    const k = T.target.value;
    v("value", k);
  }, x = (T) => {
    const k = T.value;
    v("ref", k);
  }, $ = (T) => {
    const k = T.value;
    v("refType", k);
  };
  let h;
  const _ = () => {
    f(u, (T) => {
      let k = T.data[l()];
      return k.splice(s(), 1), { [l()]: [...k] };
    }), h == null || h.hide();
  }, w = ly();
  var C = cy(), E = ke(C), P = j(E);
  zt(P, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    oninput: y
  }), Y(E);
  var O = B(E, 2), V = j(O);
  {
    var H = (T) => {
      zt(T, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: b
      });
    }, D = (T) => {
      const k = /* @__PURE__ */ ze(() => [g(d).ref]);
      Hn(T, {
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
    Pe(V, (T) => {
      g(d).refType === "input" ? T(H) : T(D, !1);
    });
  }
  Y(O);
  var I = B(O, 2), R = j(I);
  Vn(
    ei(R, {
      placement: "bottom",
      floating: (T) => {
        var k = uy(), M = j(k), N = B(j(M));
        const A = /* @__PURE__ */ ze(() => g(d).refType ? [g(d).refType] : []);
        Hn(N, {
          items: q2,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(A);
          },
          onSelect: $
        }), Y(M);
        var W = B(M, 2), K = B(j(W));
        At(K, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            const $e = ae.target.value;
            v("defaultValue", $e);
          }
        }), Y(W);
        var q = B(W, 2), re = B(j(q));
        At(re, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            const $e = ae.target.value;
            v("description", $e);
          }
        }), Y(q);
        var Q = B(q, 2), X = j(Q);
        et(X, {
          onclick: _,
          children: (ae, $e) => {
            Ne();
            var Ce = Ke("删除");
            L(ae, Ce);
          },
          $$slots: { default: !0 }
        }), Y(Q), Y(k), L(T, k);
      },
      children: (T, k) => {
        pa(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), Y(I), L(e, C);
  var S = ve({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), p();
    },
    get index() {
      return s();
    },
    set index(T) {
      s(T), p();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(T) {
      l(T), p();
    }
  });
  return r(), S;
}
le(Fd, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var fy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), gy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const hy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function on(e, t) {
  fe(t, !0), it(e, hy);
  const [n, r] = ut(), o = () => ne(g(l), "$node", n), a = m(t, "noneParameterText", 7, "无输入参数"), i = m(t, "dataKeyName", 7, "parameters");
  let s = kt(), l = /* @__PURE__ */ ze(() => Hr(s)), u = /* @__PURE__ */ ze(() => {
    var b;
    return [...((b = o()) == null ? void 0 : b.data[i()]) || []];
  });
  var c = gy(), d = j(c);
  {
    var f = (b) => {
      var x = fy();
      Ne(4), L(b, x);
    };
    Pe(d, (b) => {
      g(u).length !== 0 && b(f);
    });
  }
  var v = B(d, 2);
  Gt(
    v,
    19,
    () => g(u),
    (b) => b.id,
    (b, x, $) => {
      Fd(b, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g($);
        },
        get dataKeyName() {
          return i();
        }
      });
    },
    (b) => {
      var x = vy(), $ = j(x, !0);
      Y(x), Te(() => an($, a())), L(b, x);
    }
  ), Y(c), L(e, c);
  var y = ve({
    get noneParameterText() {
      return a();
    },
    set noneParameterText(b = "无输入参数") {
      a(b), p();
    },
    get dataKeyName() {
      return i();
    },
    set dataKeyName(b = "parameters") {
      i(b), p();
    }
  });
  return r(), y;
}
le(on, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var py = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), my = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yy = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const wy = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function qd(e, t) {
  fe(t, !0), it(e, wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
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
        L(i, s);
      },
      children: (i, s) => {
        var l = yy(), u = ke(l), c = j(u);
        rt(c, {
          level: 3,
          children: (v, y) => {
            Ne();
            var b = Ke("输出参数");
            L(v, b);
          },
          $$slots: { default: !0 }
        });
        var d = B(c, 2);
        et(d, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (v, y) => {
            var b = my();
            L(v, b);
          },
          $$slots: { default: !0 }
        }), Y(u);
        var f = B(u, 2);
        on(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), L(i, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(i) {
      n(i), p();
    }
  });
}
le(qd, { data: {} }, [], [], !0);
const zr = () => Cr("tinyflow_options");
var by = /* @__PURE__ */ Se('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), xy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), $y = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _y = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const Cy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  fe(t, !0), it(e, Cy);
  const [n, r] = ut(), o = () => ne(g(u), "$node", n), a = m(t, "parameter", 7), i = m(t, "position", 7), s = m(t, "dataKeyName", 7);
  let l = kt(), u = /* @__PURE__ */ ze(() => Hr(l)), c = /* @__PURE__ */ ze(() => {
    var M;
    let N = (M = o()) == null ? void 0 : M.data[s()], A;
    if (N && i().length > 0) {
      let W = N;
      for (let K = 0; K < i().length; K++) {
        const q = i()[K];
        K == i().length - 1 ? A = W[q] : W = W[q].children;
      }
    }
    return { ...a(), ...A };
  });
  const { updateNodeData: d } = Ut(), f = (M, N) => {
    d(l, (A) => {
      const W = A.data[s()];
      if (W && i().length > 0) {
        let K = W;
        for (let q = 0; q < i().length; q++) {
          const re = i()[q];
          q == i().length - 1 ? K[re] = { ...K[re], [M]: N } : K = W[re].children;
        }
      }
      return { [s()]: W };
    });
  }, v = (M) => {
    const N = M.target.value;
    f("name", N);
  }, y = (M) => {
    const N = M.value;
    f("dataType", N);
  };
  let b;
  const x = () => {
    d(l, (M) => {
      let N = M.data[s()];
      if (N && i().length > 0) {
        let A = N;
        for (let W = 0; W < i().length; W++) {
          const K = i()[W];
          W == i().length - 1 ? A.splice(K, 1) : A = A[K].children;
        }
      }
      return { [s()]: [...N] };
    }), b == null || b.hide();
  }, $ = () => {
    d(l, (M) => {
      let N = M.data[s()];
      if (N && i().length > 0) {
        let A = N;
        for (let W = 0; W < i().length; W++) {
          const K = i()[W];
          W == i().length - 1 ? A[K].children ? A[K].children.push({
            id: ro(),
            name: "newParam",
            dataType: "String"
          }) : A[K].children = [
            {
              id: ro(),
              name: "newParam",
              dataType: "String"
            }
          ] : A = A[K].children;
        }
      }
      return { [s()]: [...N] };
    });
  };
  var h = _y(), _ = ke(h), w = j(_);
  {
    var C = (M) => {
      var N = st(), A = ke(N);
      Gt(A, 17, i, Oo, (W, K) => {
        Ne();
        var q = Ke(" ");
        L(W, q);
      }), L(M, N);
    };
    Pe(w, (M) => {
      i().length > 1 && M(C);
    });
  }
  var E = B(w, 2);
  const P = /* @__PURE__ */ ze(() => g(c).nameDisabled === !0);
  zt(E, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: v,
    get disabled() {
      return g(P);
    }
  }), Y(_);
  var O = B(_, 2), V = j(O);
  const H = /* @__PURE__ */ ze(() => g(c).dataType ? [g(c).dataType] : []), D = /* @__PURE__ */ ze(() => g(c).dataTypeDisabled === !0);
  Hn(V, {
    items: Bd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(H);
    },
    get disabled() {
      return g(D);
    },
    onSelect: y
  });
  var I = B(V, 2);
  {
    var R = (M) => {
      et(M, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: $,
        children: (N, A) => {
          var W = by();
          L(N, W);
        },
        $$slots: { default: !0 }
      });
    };
    Pe(I, (M) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && M(R);
    });
  }
  Y(O);
  var S = B(O, 2), T = j(S);
  Vn(
    ei(T, {
      placement: "bottom",
      floating: (M) => {
        var N = $y(), A = j(N), W = B(j(A));
        At(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            const ae = X.target.value;
            f("defaultValue", ae);
          }
        }), Y(A);
        var K = B(A, 2), q = B(j(K));
        At(q, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            const ae = X.target.value;
            f("description", ae);
          }
        }), Y(K);
        var re = B(K, 2);
        {
          var Q = (X) => {
            var ae = xy(), $e = j(ae);
            et($e, {
              onclick: x,
              children: (Ce, me) => {
                Ne();
                var de = Ke("删除");
                L(Ce, de);
              },
              $$slots: { default: !0 }
            }), Y(ae), L(X, ae);
          };
          Pe(re, (X) => {
            g(c).deleteDisabled !== !0 && X(Q);
          });
        }
        Y(N), L(M, N);
      },
      children: (M, N) => {
        pa(M, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (M) => b = M,
    () => b
  ), Y(S), L(e, h);
  var k = ve({
    get parameter() {
      return a();
    },
    set parameter(M) {
      a(M), p();
    },
    get position() {
      return i();
    },
    set position(M) {
      i(M), p();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(M) {
      s(M), p();
    }
  });
  return r(), k;
}
le(Gd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var ky = /* @__PURE__ */ ie("<!> <!>", 1), Sy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), Ey = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Py = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const My = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  fe(t, !0), it(e, My);
  const [n, r] = ut(), o = () => ne(g(u), "$node", n), a = (x, $ = $t, h = $t) => {
    var _ = st(), w = ke(_);
    Gt(
      w,
      19,
      $,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, E, P) => {
        var O = ky(), V = ke(O);
        const H = /* @__PURE__ */ ze(() => [...h(), g(P)]);
        Gd(V, {
          get parameter() {
            return g(E);
          },
          get position() {
            return g(H);
          },
          get dataKeyName() {
            return s();
          }
        });
        var D = B(V, 2);
        {
          var I = (R) => {
            var S = /* @__PURE__ */ be(() => [...h(), g(P)]);
            a(R, () => g(E).children, () => g(S));
          };
          Pe(D, (R) => {
            g(E).children && R(I);
          });
        }
        L(C, O);
      },
      (C) => {
        var E = st(), P = ke(E);
        {
          var O = (V) => {
            var H = Sy(), D = j(H, !0);
            Y(H), Te(() => an(D, i())), L(V, H);
          };
          Pe(P, (V) => {
            h().length === 0 && V(O);
          });
        }
        L(C, E);
      }
    ), L(x, _);
  }, i = m(t, "noneParameterText", 7, "无输出参数"), s = m(t, "dataKeyName", 7, "outputDefs");
  let l = kt(), u = /* @__PURE__ */ ze(() => Hr(l)), c = /* @__PURE__ */ ze(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[s()]) || []];
  });
  var d = Py(), f = j(d);
  {
    var v = (x) => {
      var $ = Ey();
      Ne(4), L(x, $);
    };
    Pe(f, (x) => {
      g(c).length !== 0 && x(v);
    });
  }
  var y = B(f, 2);
  a(y, () => g(c) || [], () => []), Y(d), L(e, d);
  var b = ve({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(x = "无输出参数") {
      i(x), p();
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
le(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Oy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Ty = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hy = /* @__PURE__ */ ie('<div class="heading svelte-wn2kra"><!> <!></div> <!> <!> <div class="setting-title svelte-wn2kra">模型</div> <div class="setting-item svelte-wn2kra"><!> <!></div> <div class="setting-title svelte-wn2kra">采样参数</div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="1" step="0.1" class="svelte-wn2kra"></div></div> <div class="setting-item svelte-wn2kra"><div class="slider-container svelte-wn2kra"><label class="svelte-wn2kra"> </label> <input type="range" min="0" max="100" step="1" class="svelte-wn2kra"></div></div> <div class="setting-title svelte-wn2kra">系统提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="setting-title svelte-wn2kra">用户提示词</div> <div class="setting-item svelte-wn2kra"><!></div> <div class="heading svelte-wn2kra"><!> <!></div> <!>', 1);
const zy = {
  hash: "svelte-wn2kra",
  code: `.heading.svelte-wn2kra {display:flex;margin-bottom:10px;}.setting-title.svelte-wn2kra {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-wn2kra {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}
    /* 新增样式 */.slider-container.svelte-wn2kra {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-wn2kra label:where(.svelte-wn2kra) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-wn2kra {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-wn2kra::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Ud(e, t) {
  fe(t, !0), it(e, zy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = zr();
  let s = _r(tn([]));
  un(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.llm) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Oy();
        L(u, c);
      },
      children: (u, c) => {
        var d = Hy(), f = ke(d), v = j(f);
        rt(v, {
          level: 3,
          children: (de, oe) => {
            Ne();
            var we = Ke("输入参数");
            L(de, we);
          },
          $$slots: { default: !0 }
        });
        var y = B(v, 2);
        et(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (de, oe) => {
            var we = Ty();
            L(de, we);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var b = B(f, 2);
        on(b, {});
        var x = B(b, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (de, oe) => {
            Ne();
            var we = Ke("模型设置");
            L(de, we);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), h = j($);
        const _ = /* @__PURE__ */ ze(() => n().llmId ? [n().llmId] : []);
        Hn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (de) => {
            const oe = de.value;
            l(o, () => ({ llmId: oe }));
          },
          get value() {
            return g(_);
          }
        });
        var w = B(h, 2);
        pa(w, {}), Y($);
        var C = B($, 4), E = j(C), P = j(E), O = j(P);
        Y(P);
        var V = B(P, 2);
        _o(V), Y(E), Y(C);
        var H = B(C, 2), D = j(H), I = j(D), R = j(I);
        Y(I);
        var S = B(I, 2);
        _o(S), Y(D), Y(H);
        var T = B(H, 2), k = j(T), M = j(k), N = j(M);
        Y(M);
        var A = B(M, 2);
        _o(A), Y(k), Y(T);
        var W = B(T, 4), K = j(W);
        const q = /* @__PURE__ */ ze(() => n().systemPrompt || "");
        At(K, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(q);
          },
          oninput: (de) => {
            l(o, { systemPrompt: de.target.value });
          }
        }), Y(W);
        var re = B(W, 4), Q = j(re);
        const X = /* @__PURE__ */ ze(() => n().userPrompt || "");
        At(Q, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(X);
          },
          oninput: (de) => {
            l(o, { userPrompt: de.target.value });
          }
        }), Y(re);
        var ae = B(re, 2), $e = j(ae);
        rt($e, {
          level: 3,
          mt: "10px",
          children: (de, oe) => {
            Ne();
            var we = Ke("输出参数");
            L(de, we);
          },
          $$slots: { default: !0 }
        });
        var Ce = B($e, 2);
        et(Ce, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (de, oe) => {
            var we = Vy();
            L(de, we);
          },
          $$slots: { default: !0 }
        }), Y(ae);
        var me = B(ae, 2);
        Qn(me, {}), Te(() => {
          an(O, `Temperature: ${n().temperature ?? 0.5}`), $a(V, n().temperature ?? 0.5), an(R, `Top P: ${n().topP ?? 0.9}`), $a(S, n().topP ?? 0.9), an(N, `Top K: ${n().topK ?? 50}`), $a(A, n().topK ?? 50);
        }), Ue("mousedown", V, _a(function(de) {
          Be.call(this, t, de);
        })), Ue("input", V, (de) => l(o, { temperature: parseFloat(de.target.value) })), Ue("mousedown", S, _a(function(de) {
          Be.call(this, t, de);
        })), Ue("input", S, (de) => l(o, { topP: parseFloat(de.target.value) })), Ue("mousedown", A, _a(function(de) {
          Be.call(this, t, de);
        })), Ue("input", A, (de) => l(o, { topK: parseInt(de.target.value) })), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
le(Ud, { data: {} }, [], [], !0);
var Ny = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Dy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ay = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Iy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Jd(e, t) {
  fe(t, !0), it(e, Iy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  un(() => {
    n().engine || i(o, () => ({ engine: "qlexpress" }));
  });
  const o = kt(), { addParameter: a } = An(), { updateNodeData: i } = Ut(), s = [
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
        var u = Ny();
        L(l, u);
      },
      children: (l, u) => {
        var c = Ay(), d = ke(c), f = j(d);
        rt(f, {
          level: 3,
          children: (H, D) => {
            Ne();
            var I = Ke("输入参数");
            L(H, I);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        et(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (H, D) => {
            var I = Dy();
            L(H, I);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var y = B(d, 2);
        on(y, {});
        var b = B(y, 2);
        rt(b, {
          level: 3,
          mt: "10px",
          children: (H, D) => {
            Ne();
            var I = Ke("代码");
            L(H, I);
          },
          $$slots: { default: !0 }
        });
        var x = B(b, 4), $ = j(x);
        const h = /* @__PURE__ */ ze(() => n().engine ? [n().engine] : ["qlexpress"]);
        Hn($, {
          items: s,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (H) => {
            const D = H.value;
            i(o, () => ({ engine: D }));
          },
          get value() {
            return g(h);
          }
        }), Y(x);
        var _ = B(x, 4), w = j(_);
        const C = /* @__PURE__ */ ze(() => n().code || "");
        At(w, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (H) => {
            i(o, () => ({ code: H.target.value }));
          },
          get value() {
            return g(C);
          }
        }), Y(_);
        var E = B(_, 2), P = j(E);
        rt(P, {
          level: 3,
          mt: "10px",
          children: (H, D) => {
            Ne();
            var I = Ke("输出参数");
            L(H, I);
          },
          $$slots: { default: !0 }
        });
        var O = B(P, 2);
        et(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o, "outputDefs");
          },
          children: (H, D) => {
            var I = Ly();
            L(H, I);
          },
          $$slots: { default: !0 }
        }), Y(E);
        var V = B(E, 2);
        Qn(V, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
le(Jd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Zy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), By = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Wy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Qd(e, t) {
  fe(t, !0), it(e, Wy);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), { updateNodeData: i } = Ut();
  return vr(() => {
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
        L(s, l);
      },
      children: (s, l) => {
        var u = By(), c = ke(u), d = j(c);
        rt(d, {
          level: 3,
          children: (C, E) => {
            Ne();
            var P = Ke("输入参数");
            L(C, P);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        et(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (C, E) => {
            var P = Zy();
            L(C, P);
          },
          $$slots: { default: !0 }
        }), Y(c);
        var v = B(c, 2);
        on(v, {});
        var y = B(v, 2);
        rt(y, {
          level: 3,
          mt: "10px",
          children: (C, E) => {
            Ne();
            var P = Ke("代码");
            L(C, P);
          },
          $$slots: { default: !0 }
        });
        var b = B(y, 4), x = j(b);
        const $ = /* @__PURE__ */ ze(() => n().template || "");
        At(x, {
          rows: 10,
          placeholder: "请输入执行代码",
          style: "width: 100%",
          onchange: (C) => {
            i(o, () => ({ template: C.target.value }));
          },
          get value() {
            return g($);
          }
        }), Y(b);
        var h = B(b, 2), _ = j(h);
        rt(_, {
          level: 3,
          mt: "10px",
          children: (C, E) => {
            Ne();
            var P = Ke("输出参数");
            L(C, P);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var w = B(h, 2);
        Qn(w, {}), L(s, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(s) {
      n(s), p();
    }
  });
}
le(Qd, { data: {} }, [], [], !0);
var Yy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Xy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fy = /* @__PURE__ */ ie('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), qy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gy = /* @__PURE__ */ ie('<div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Jy = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Qy = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ie('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1vtcqdz"><!> <!></div> <!> <div class="heading svelte-1vtcqdz" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1vtcqdz"><label class="svelte-1vtcqdz"><!>none</label> <label class="svelte-1vtcqdz"><!>form-data</label> <label class="svelte-1vtcqdz"><!>x-www-form-urlencoded</label> <label class="svelte-1vtcqdz"><!>json</label> <label class="svelte-1vtcqdz"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1vtcqdz"><!> <!></div> <!>', 1);
const tw = {
  hash: "svelte-1vtcqdz",
  code: ".heading.svelte-1vtcqdz {display:flex;margin-bottom:10px;}.radio-group.svelte-1vtcqdz {display:flex;margin:10px 0;}.radio-group.svelte-1vtcqdz label:where(.svelte-1vtcqdz) {display:flex;font-size:14px;}"
};
function ef(e, t) {
  fe(t, !0), it(e, tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  un(() => {
    n().method || s(a, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], a = kt(), { addParameter: i } = An(), { updateNodeData: s } = Ut();
  return kn(e, xt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Yy();
        L(l, u);
      },
      children: (l, u) => {
        var c = ew(), d = ke(c), f = j(d), v = j(f);
        const y = /* @__PURE__ */ ze(() => n().method ? [n().method] : ["get"]);
        Hn(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ce) => {
            const ue = ce.value;
            s(a, () => ({ method: ue }));
          },
          get value() {
            return g(y);
          }
        }), Y(f);
        var b = B(f, 2), x = j(b);
        const $ = /* @__PURE__ */ ze(() => n().url || "");
        zt(x, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ce) => {
            s(a, () => ({ url: ce.target.value }));
          },
          get value() {
            return g($);
          }
        }), Y(b), Y(d);
        var h = B(d, 2), _ = j(h);
        rt(_, {
          level: 3,
          children: (ce, ue) => {
            Ne();
            var Ee = Ke("Http 头信息");
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        });
        var w = B(_, 2);
        et(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "headers");
          },
          children: (ce, ue) => {
            var Ee = Xy();
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var C = B(h, 2);
        on(C, { dataKeyName: "headers" });
        var E = B(C, 2), P = j(E);
        rt(P, {
          level: 3,
          children: (ce, ue) => {
            Ne();
            var Ee = Ke("参数");
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        });
        var O = B(P, 2);
        et(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "urlParameters");
          },
          children: (ce, ue) => {
            var Ee = jy();
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        }), Y(E);
        var V = B(E, 2);
        on(V, { dataKeyName: "urlParameters" });
        var H = B(V, 2);
        rt(H, {
          level: 3,
          mt: "10px",
          children: (ce, ue) => {
            Ne();
            var Ee = Ke("Body");
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        });
        var D = B(H, 2), I = j(D), R = j(I);
        const S = /* @__PURE__ */ ze(() => !n().bodyType);
        zt(R, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(S);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "" });
          }
        }), Ne(), Y(I);
        var T = B(I, 2), k = j(T);
        const M = /* @__PURE__ */ ze(() => n().bodyType === "form-data");
        zt(k, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(M);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "form-data" });
          }
        }), Ne(), Y(T);
        var N = B(T, 2), A = j(N);
        const W = /* @__PURE__ */ ze(() => n().bodyType === "x-www-form-urlencoded");
        zt(A, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(W);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ne(), Y(N);
        var K = B(N, 2), q = j(K);
        const re = /* @__PURE__ */ ze(() => n().bodyType === "json");
        zt(q, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(re);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "json" });
          }
        }), Ne(), Y(K);
        var Q = B(K, 2), X = j(Q);
        const ae = /* @__PURE__ */ ze(() => n().bodyType === "raw");
        zt(X, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ae);
          },
          onchange: (ce) => {
            var ue;
            (ue = ce.target) != null && ue.checked && s(a, { bodyType: "raw" });
          }
        }), Ne(), Y(Q), Y(D);
        var $e = B(D, 2);
        {
          var Ce = (ce) => {
            var ue = Fy(), Ee = ke(ue), De = j(Ee);
            rt(De, {
              level: 3,
              children: (at, te) => {
                Ne();
                var Le = Ke("参数");
                L(at, Le);
              },
              $$slots: { default: !0 }
            });
            var Ge = B(De, 2);
            et(Ge, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromData");
              },
              children: (at, te) => {
                var Le = Ky();
                L(at, Le);
              },
              $$slots: { default: !0 }
            }), Y(Ee);
            var yt = B(Ee, 2);
            on(yt, { dataKeyName: "fromData" }), L(ce, ue);
          };
          Pe($e, (ce) => {
            n().bodyType === "form-data" && ce(Ce);
          });
        }
        var me = B($e, 2);
        {
          var de = (ce) => {
            var ue = Gy(), Ee = ke(ue), De = j(Ee);
            rt(De, {
              level: 3,
              children: (at, te) => {
                Ne();
                var Le = Ke("参数");
                L(at, Le);
              },
              $$slots: { default: !0 }
            });
            var Ge = B(De, 2);
            et(Ge, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                i(a, "fromUrlencoded");
              },
              children: (at, te) => {
                var Le = qy();
                L(at, Le);
              },
              $$slots: { default: !0 }
            }), Y(Ee);
            var yt = B(Ee, 2);
            on(yt, { dataKeyName: "fromUrlencoded" }), L(ce, ue);
          };
          Pe(me, (ce) => {
            n().bodyType === "x-www-form-urlencoded" && ce(de);
          });
        }
        var oe = B(me, 2);
        {
          var we = (ce) => {
            var ue = Uy(), Ee = j(ue);
            At(Ee, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (De) => {
                s(a, { bodyJson: De.target.value });
              }
            }), Y(ue), L(ce, ue);
          };
          Pe(oe, (ce) => {
            n().bodyType === "json" && ce(we);
          });
        }
        var qe = B(oe, 2);
        {
          var Xe = (ce) => {
            var ue = Jy(), Ee = j(ue);
            At(Ee, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (De) => {
                s(a, { bodyRaw: De.target.value });
              }
            }), Y(ue), L(ce, ue);
          };
          Pe(qe, (ce) => {
            n().bodyType === "raw" && ce(Xe);
          });
        }
        var Ie = B(qe, 2), ee = j(Ie);
        rt(ee, {
          level: 3,
          mt: "10px",
          children: (ce, ue) => {
            Ne();
            var Ee = Ke("输出参数");
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        });
        var Fe = B(ee, 2);
        et(Fe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "outputDefs");
          },
          children: (ce, ue) => {
            var Ee = Qy();
            L(ce, Ee);
          },
          $$slots: { default: !0 }
        }), Y(Ie);
        var Re = B(Ie, 2);
        Qn(Re, {}), L(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
le(ef, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), rw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  fe(t, !0), it(e, iw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = zr();
  let s = _r(tn([]));
  un(async () => {
    var u, c;
    const d = await ((c = (u = i.provider) == null ? void 0 : u.knowledge) == null ? void 0 : c.call(u));
    g(s).push(...d || []);
  });
  const { updateNodeData: l } = Ut();
  return vr(() => {
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
        L(u, c);
      },
      children: (u, c) => {
        var d = ow(), f = ke(d), v = j(f);
        rt(v, {
          level: 3,
          children: (V, H) => {
            Ne();
            var D = Ke("输入参数");
            L(V, D);
          },
          $$slots: { default: !0 }
        });
        var y = B(v, 2);
        et(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (V, H) => {
            var D = rw();
            L(V, D);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var b = B(f, 2);
        on(b, {});
        var x = B(b, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (V, H) => {
            Ne();
            var D = Ke("知识库设置");
            L(V, D);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), h = j($);
        const _ = /* @__PURE__ */ ze(() => n().knowledgeId ? [n().knowledgeId] : []);
        Hn(h, {
          get items() {
            return g(s);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (V) => {
            const H = V.value;
            l(o, () => ({ knowledgeId: H }));
          },
          get value() {
            return g(_);
          }
        }), Y($);
        var w = B($, 4), C = j(w);
        zt(C, { placeholder: "搜索的数据条数", style: "width: 100%" }), Y(w);
        var E = B(w, 2), P = j(E);
        rt(P, {
          level: 3,
          mt: "10px",
          children: (V, H) => {
            Ne();
            var D = Ke("输出参数");
            L(V, D);
          },
          $$slots: { default: !0 }
        }), Y(E);
        var O = B(E, 2);
        Qn(O, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
le(tf, { data: {} }, [], [], !0);
var aw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), sw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">API 服务商</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">API Key</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">其他参数</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  fe(t, !0), it(e, uw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = zr();
  let s = _r(tn([]));
  un(async () => {
    var u;
    const c = await ((u = i.provider) == null ? void 0 : u.knowledge());
    g(s).push(...c || []);
  });
  const { updateNodeData: l } = Ut();
  return vr(() => {
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
        L(u, c);
      },
      children: (u, c) => {
        var d = lw(), f = ke(d), v = j(f);
        rt(v, {
          level: 3,
          children: (T, k) => {
            Ne();
            var M = Ke("输入参数");
            L(T, M);
          },
          $$slots: { default: !0 }
        });
        var y = B(v, 2);
        et(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (T, k) => {
            var M = sw();
            L(T, M);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var b = B(f, 2);
        on(b, {});
        var x = B(b, 2);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (T, k) => {
            Ne();
            var M = Ke("搜索引擎设置");
            L(T, M);
          },
          $$slots: { default: !0 }
        });
        var $ = B(x, 4), h = j($);
        const _ = /* @__PURE__ */ ze(() => n().knowledgeId ? [n().knowledgeId] : []);
        Hn(h, {
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
            return g(_);
          }
        }), Y($);
        var w = B($, 4), C = j(w);
        zt(C, {
          placeholder: "请输入 API Key",
          style: "width: 100%"
        }), Y(w);
        var E = B(w, 4), P = j(E);
        zt(P, { placeholder: "请输入关键字", style: "width: 100%" }), Y(E);
        var O = B(E, 4), V = j(O);
        zt(V, { placeholder: "搜索的数据条数", style: "width: 100%" }), Y(O);
        var H = B(O, 4), D = j(H);
        At(D, {
          rows: 3,
          placeholder: "请输入其他参数（Property 格式）",
          style: "width: 100%"
        }), Y(H);
        var I = B(H, 2), R = j(I);
        rt(R, {
          level: 3,
          mt: "10px",
          children: (T, k) => {
            Ne();
            var M = Ke("输出参数");
            L(T, M);
          },
          $$slots: { default: !0 }
        }), Y(I);
        var S = B(I, 2);
        Qn(S, {}), L(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(u) {
      n(u), p();
    }
  });
}
le(nf, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), dw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const vw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function rf(e, t) {
  fe(t, !0), it(e, vw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = kt(), { addParameter: a } = An(), i = zr();
  let s = _r(tn([]));
  return un(async () => {
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
        L(l, u);
      },
      handle: (l) => {
        gr(l, {
          type: "source",
          get position() {
            return Oe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = fw(), d = ke(c), f = j(d);
        rt(f, {
          level: 3,
          children: (h, _) => {
            Ne();
            var w = Ke("循环变量");
            L(h, w);
          },
          $$slots: { default: !0 }
        });
        var v = B(f, 2);
        et(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            a(o);
          },
          children: (h, _) => {
            var w = dw();
            L(h, w);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var y = B(d, 2);
        on(y, {});
        var b = B(y, 2), x = j(b);
        rt(x, {
          level: 3,
          mt: "10px",
          children: (h, _) => {
            Ne();
            var w = Ke("输出参数");
            L(h, w);
          },
          $$slots: { default: !0 }
        }), Y(b);
        var $ = B(b, 2);
        Qn($, {}), L(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ve({
    get data() {
      return n();
    },
    set data(l) {
      n(l), p();
    }
  });
}
le(rf, { data: {} }, [], [], !0);
const gw = {
  startNode: jd,
  codeNode: Jd,
  llmNode: Ud,
  templateNode: Qd,
  httpNode: ef,
  knowledgeNode: tf,
  searchEngineNode: nf,
  loopNode: rf,
  endNode: qd
};
var hw = /* @__PURE__ */ ie("<!> ", 1);
function os(e, t) {
  fe(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), a = m(t, "description", 7), i = m(t, "extra", 7);
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
      var u = hw(), c = ke(u);
      $s(c, n);
      var d = B(c);
      Te(() => an(d, ` ${r() ?? ""}`)), L(s, u);
    },
    $$slots: { default: !0 }
  }), ve({
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
      return a();
    },
    set description(s) {
      a(s), p();
    },
    get extra() {
      return i();
    },
    set extra(s) {
      i(s), p();
    }
  });
}
le(
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
var pw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), mw = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), yw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function of(e, t) {
  fe(t, !0);
  let n = _r("base"), r = _r("show");
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
  ], i = [], s = zr().customNodes;
  if (s) {
    const x = Object.keys(s).sort(($, h) => (s[$].sortNo || 0) - (s[h].sortNo || 0));
    for (let $ of x)
      i.push({
        icon: s[$].icon,
        title: s[$].title,
        type: $
      });
  }
  var l = yw(), u = j(l), c = j(u), d = j(c);
  Pd(d, {
    style: "width: 100%",
    items: a,
    onChange: (x) => {
      G(n, tn(x.value.toString()));
    }
  }), Y(c);
  var f = B(c, 2), v = j(f);
  Gt(v, 21, () => o, Oo, (x, $) => {
    os(x, xt(() => g($)));
  }), Y(v);
  var y = B(v, 2);
  Gt(y, 21, () => i, Oo, (x, $) => {
    os(x, xt(() => g($)));
  }), Y(y), Y(f), Y(u);
  var b = B(u, 2);
  et(b, {
    onclick: () => {
      G(r, tn(g(r) ? "" : "show"));
    },
    children: (x, $) => {
      var h = st(), _ = ke(h);
      {
        var w = (E) => {
          var P = pw();
          L(E, P);
        }, C = (E) => {
          var P = mw();
          L(E, P);
        };
        Pe(_, (E) => {
          g(r) === "show" ? E(w) : E(C, !1);
        });
      }
      L(x, h);
    },
    $$slots: { default: !0 }
  }), Y(l), Te(() => {
    Lt(l, 1, `tf-toolbar ${g(r) ?? ""}`), he(v, "style", `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), he(y, "style", `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), L(e, l), ve();
}
le(of, {}, [], [], !0);
const ww = () => {
  const { nodeLookup: e } = tt();
  return {
    getNode: (t) => {
      var n;
      return (n = F(e).get(t)) == null ? void 0 : n.internals.userNode;
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
    getEdgesByTarget: (t) => F(e).filter((n) => n.target === t)
  };
};
var $w = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = /* @__PURE__ */ Se('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ie('<div class="heading svelte-c71dg3"><!> <!></div> <!> <div></div> <div class="heading svelte-c71dg3"><!> <!></div> <!>', 1);
const kw = {
  hash: "svelte-c71dg3",
  code: ".heading.svelte-c71dg3 {display:flex;margin-bottom:10px;}"
};
function af(e, t) {
  var n;
  fe(t, !0), it(e, kw);
  const r = m(t, "data", 7), o = /* @__PURE__ */ Tt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), a = kt(), { addParameter: i } = An(), s = Ut(), l = { ...o, id: a, data: r() }, u = document.createElement("div"), c = zr().customNodes[t.type];
  (n = c.render) == null || n.call(c, u, l, s);
  let d;
  vr(() => {
    r().expand && d && d.append(u);
  }), vr(() => {
    var v;
    r() && ((v = c.onUpdate) == null || v.call(c, u, { ...l, data: r() }));
  });
  const f = /* @__PURE__ */ ze(() => ({
    ...r(),
    description: c.description
  }));
  return kn(e, xt(
    {
      get data() {
        return g(f);
      }
    },
    () => o,
    {
      icon: (v) => {
        var y = st(), b = ke(y);
        $s(b, () => c.icon), L(v, y);
      },
      children: (v, y) => {
        var b = Cw(), x = ke(b), $ = j(x);
        rt($, {
          level: 3,
          children: (V, H) => {
            Ne();
            var D = Ke("输入参数");
            L(V, D);
          },
          $$slots: { default: !0 }
        });
        var h = B($, 2);
        et(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a);
          },
          children: (V, H) => {
            var D = $w();
            L(V, D);
          },
          $$slots: { default: !0 }
        }), Y(x);
        var _ = B(x, 2);
        on(_, {});
        var w = B(_, 2);
        Vn(w, (V) => d = V, () => d);
        var C = B(w, 2), E = j(C);
        rt(E, {
          level: 3,
          mt: "10px",
          children: (V, H) => {
            Ne();
            var D = Ke("输出参数");
            L(V, D);
          },
          $$slots: { default: !0 }
        });
        var P = B(E, 2);
        et(P, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(a, "outputDefs");
          },
          children: (V, H) => {
            var D = _w();
            L(V, D);
          },
          $$slots: { default: !0 }
        }), Y(C);
        var O = B(C, 2);
        Qn(O, {}), L(v, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ve({
    get data() {
      return r();
    },
    set data(v) {
      r(v), p();
    }
  });
}
le(af, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Ew = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), Pw = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%"><!> <!></div>');
const Mw = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function sf(e, t) {
  fe(t, !0), it(e, Mw);
  const n = m(t, "onInit", 7), r = Ut();
  n()(r);
  let o = _r(!1);
  const a = (E) => {
    E.preventDefault(), E.dataTransfer && (E.dataTransfer.dropEffect = "move");
  }, i = (E) => {
    var P;
    E.preventDefault();
    const O = r.screenToFlowPosition({
      x: E.clientX - 250,
      y: E.clientY - 100
    }), V = (P = E.dataTransfer) == null ? void 0 : P.getData("application/tinyflow"), H = V ? JSON.parse(V) : {}, D = {
      id: `node_${ro()}`,
      position: O,
      data: {},
      ...H
    };
    bi.addNode(D), bi.selectNodeOnly(D.id);
  }, { getNode: s } = ww(), l = (E) => {
    const P = s(E.source), O = s(E.target);
    if (E.sourceHandle === "loop_handle" || P.parentId) {
      const V = r.getEdges();
      for (let H of V)
        if (H.target === E.target) {
          const D = s(H.source);
          if (E.sourceHandle === "loop_handle" && D.parentId !== P.id || P.parentId && D.parentId !== P.parentId)
            return !1;
        }
    }
    return !(!P.parentId && O.parentId && O.parentId !== P.id);
  }, { ensureParentInNodesBefore: u } = bw(), c = (E, P) => {
    if (!P.isValid)
      return;
    const O = P.toNode;
    if (O.parentId)
      return;
    const V = P.fromNode, H = P.fromHandle, D = { position: { ...O.position } };
    if (H.id === "loop_handle" ? D.parentId = V.id : V.parentId && (D.parentId = V.parentId), D.parentId) {
      const I = s(D.parentId);
      D.position = {
        x: O.position.x - I.position.x,
        y: O.position.y - I.position.y
      }, u(D.parentId, O.id), r.updateNode(O.id, D);
    }
  }, { getEdgesByTarget: d } = xw(), f = (E) => {
    E.edges.forEach((P) => {
      const O = s(P.target);
      if (O.parentId) {
        const V = d(P.target), H = s(O.parentId);
        if (V.length === 0)
          r.updateNode(O.id, {
            parentId: void 0,
            position: {
              x: O.position.x + H.position.x,
              y: O.position.y + H.position.y
            }
          });
        else {
          let D = !1;
          for (let I = 0; I < V.length; I++) {
            const R = V[I], S = s(R.source);
            if (S.parentId || S.type === "loopNode") {
              D = !0;
              break;
            }
          }
          D || r.updateNode(O.id, {
            parentId: void 0,
            position: {
              x: O.position.x + H.position.x,
              y: O.position.y + H.position.y
            }
          });
        }
      }
    });
  }, v = (E, P) => {
    console.log("onconnectstart: ", E, P);
  }, y = (E) => {
    console.log("onconnect: ", E);
  }, b = {}, x = zr().customNodes;
  if (x)
    for (let E of Object.keys(x))
      b[E] = af;
  var $ = Pw(), h = j($);
  of(h, {});
  var _ = B(h, 2);
  const w = /* @__PURE__ */ ze(() => ({ ...gw, ...b })), C = /* @__PURE__ */ ze(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: Do.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  return vd(_, xt(
    {
      get nodeTypes() {
        return g(w);
      }
    },
    bi,
    {
      class: "tinyflow-logo",
      isValidConnection: l,
      onconnectend: c,
      onconnectstart: v,
      onconnect: y,
      connectionRadius: 50,
      ondelete: f,
      onclick: (E) => {
        const P = E.target;
        P.classList.contains("svelte-flow__edge-interaction") || P.classList.contains("panel-content") || P.closest(".panel-content") || G(o, !1);
      },
      get defaultEdgeOptions() {
        return g(C);
      },
      $$events: {
        drop: i,
        dragover: a,
        edgeclick: () => {
          G(o, !0);
        }
      },
      children: (E, P) => {
        var O = Ew(), V = ke(O);
        _d(V, {});
        var H = B(V, 2);
        bd(H, {});
        var D = B(H, 2);
        kd(D, {});
        var I = B(D, 2);
        {
          var R = (S) => {
            Go(S, {
              children: (T, k) => {
                var M = Sw(), N = B(j(M), 4), A = j(N);
                At(A, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  oninput: (W) => {
                  }
                }), Y(N), Y(M), L(T, M);
              },
              $$slots: { default: !0 }
            });
          };
          Pe(I, (S) => {
            g(o) && S(R);
          });
        }
        L(E, O);
      },
      $$slots: { default: !0 }
    }
  )), Y($), L(e, $), ve({
    get onInit() {
      return n();
    },
    set onInit(E) {
      n(E), p();
    }
  });
}
le(sf, { onInit: {} }, [], [], !0);
function Ow(e, t) {
  fe(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7), { data: o } = n();
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
      n(a), p();
    },
    get onInit() {
      return r();
    },
    set onInit(a) {
      r(a), p();
    }
  });
}
customElements.define("tinyflow-component", le(Ow, { options: {}, onInit: {} }, [], [], !1));
const zw = cf((e, t) => {
  const n = Xs(null), r = Xs(null);
  df(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: a, className: i } = e;
  return ff(() => {
    if (n.current) {
      const s = new Vm({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = s, () => {
        s.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ pf.jsx("div", { ref: n, style: { height: "600px", ...a }, className: i });
});
export {
  zw as Tinyflow
};
//# sourceMappingURL=index.js.map
