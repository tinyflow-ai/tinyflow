import ou, { forwardRef as Kf, useRef as Ra, useImperativeHandle as Zf, useEffect as Yf } from "react";
var Go = { exports: {} }, lo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Xf() {
  if (ja) return lo;
  ja = 1;
  var e = ou, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, f = {}, p = null, h = null;
    u !== void 0 && (p = "" + u), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (f[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: t, type: a, key: p, ref: h, props: f, _owner: o.current };
  }
  return lo.Fragment = n, lo.jsx = s, lo.jsxs = s, lo;
}
var uo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function Ff() {
  return Ba || (Ba = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ou, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function w(H) {
      if (H === null || typeof H != "object")
        return null;
      var oe = g && H[g] || H[y];
      return typeof oe == "function" ? oe : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(H) {
      {
        for (var oe = arguments.length, he = new Array(oe > 1 ? oe - 1 : 0), Se = 1; Se < oe; Se++)
          he[Se - 1] = arguments[Se];
        x("error", H, he);
      }
    }
    function x(H, oe, he) {
      {
        var Se = $.ReactDebugCurrentFrame, Be = Se.getStackAddendum();
        Be !== "" && (oe += "%s", he = he.concat([Be]));
        var We = he.map(function(ze) {
          return String(ze);
        });
        We.unshift("Warning: " + oe), Function.prototype.apply.call(console[H], console, We);
      }
    }
    var S = !1, N = !1, E = !1, O = !1, V = !1, Z;
    Z = Symbol.for("react.module.reference");
    function W(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === i || V || H === o || H === u || H === d || O || H === h || S || N || E || typeof H == "object" && H !== null && (H.$$typeof === p || H.$$typeof === f || H.$$typeof === s || H.$$typeof === a || H.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === Z || H.getModuleId !== void 0));
    }
    function I(H, oe, he) {
      var Se = H.displayName;
      if (Se)
        return Se;
      var Be = oe.displayName || oe.name || "";
      return Be !== "" ? he + "(" + Be + ")" : he;
    }
    function k(H) {
      return H.displayName || "Context";
    }
    function _(H) {
      if (H == null)
        return null;
      if (typeof H.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof H == "function")
        return H.displayName || H.name || null;
      if (typeof H == "string")
        return H;
      switch (H) {
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
      if (typeof H == "object")
        switch (H.$$typeof) {
          case a:
            var oe = H;
            return k(oe) + ".Consumer";
          case s:
            var he = H;
            return k(he._context) + ".Provider";
          case l:
            return I(H, H.render, "ForwardRef");
          case f:
            var Se = H.displayName || null;
            return Se !== null ? Se : _(H.type) || "Memo";
          case p: {
            var Be = H, We = Be._payload, ze = Be._init;
            try {
              return _(ze(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, M = 0, T, R, K, Y, D, J, F;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function z() {
      {
        if (M === 0) {
          T = console.log, R = console.info, K = console.warn, Y = console.error, D = console.group, J = console.groupCollapsed, F = console.groupEnd;
          var H = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: H,
            log: H,
            warn: H,
            error: H,
            group: H,
            groupCollapsed: H,
            groupEnd: H
          });
        }
        M++;
      }
    }
    function q() {
      {
        if (M--, M === 0) {
          var H = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, H, {
              value: T
            }),
            info: b({}, H, {
              value: R
            }),
            warn: b({}, H, {
              value: K
            }),
            error: b({}, H, {
              value: Y
            }),
            group: b({}, H, {
              value: D
            }),
            groupCollapsed: b({}, H, {
              value: J
            }),
            groupEnd: b({}, H, {
              value: F
            })
          });
        }
        M < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = $.ReactCurrentDispatcher, ne;
    function re(H, oe, he) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Be) {
            var Se = Be.stack.trim().match(/\n( *(at )?)/);
            ne = Se && Se[1] || "";
          }
        return `
` + ne + H;
      }
    }
    var ee = !1, ge;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ce();
    }
    function ie(H, oe) {
      if (!H || ee)
        return "";
      {
        var he = ge.get(H);
        if (he !== void 0)
          return he;
      }
      var Se;
      ee = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = U.current, U.current = null, z();
      try {
        if (oe) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (Dt) {
              Se = Dt;
            }
            Reflect.construct(H, [], ze);
          } else {
            try {
              ze.call();
            } catch (Dt) {
              Se = Dt;
            }
            H.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            Se = Dt;
          }
          H();
        }
      } catch (Dt) {
        if (Dt && Se && typeof Dt.stack == "string") {
          for (var Ve = Dt.stack.split(`
`), Nt = Se.stack.split(`
`), rt = Ve.length - 1, at = Nt.length - 1; rt >= 1 && at >= 0 && Ve[rt] !== Nt[at]; )
            at--;
          for (; rt >= 1 && at >= 0; rt--, at--)
            if (Ve[rt] !== Nt[at]) {
              if (rt !== 1 || at !== 1)
                do
                  if (rt--, at--, at < 0 || Ve[rt] !== Nt[at]) {
                    var Xt = `
` + Ve[rt].replace(" at new ", " at ");
                    return H.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", H.displayName)), typeof H == "function" && ge.set(H, Xt), Xt;
                  }
                while (rt >= 1 && at >= 0);
              break;
            }
        }
      } finally {
        ee = !1, U.current = We, q(), Error.prepareStackTrace = Be;
      }
      var Or = H ? H.displayName || H.name : "", dr = Or ? re(Or) : "";
      return typeof H == "function" && ge.set(H, dr), dr;
    }
    function se(H, oe, he) {
      return ie(H, !1);
    }
    function ve(H) {
      var oe = H.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function me(H, oe, he) {
      if (H == null)
        return "";
      if (typeof H == "function")
        return ie(H, ve(H));
      if (typeof H == "string")
        return re(H);
      switch (H) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof H == "object")
        switch (H.$$typeof) {
          case l:
            return se(H.render);
          case f:
            return me(H.type, oe, he);
          case p: {
            var Se = H, Be = Se._payload, We = Se._init;
            try {
              return me(We(Be), oe, he);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, de = {}, _e = $.ReactDebugCurrentFrame;
    function Me(H) {
      if (H) {
        var oe = H._owner, he = me(H.type, H._source, oe ? oe.type : null);
        _e.setExtraStackFrame(he);
      } else
        _e.setExtraStackFrame(null);
    }
    function X(H, oe, he, Se, Be) {
      {
        var We = Function.call.bind(xe);
        for (var ze in H)
          if (We(H, ze)) {
            var Ve = void 0;
            try {
              if (typeof H[ze] != "function") {
                var Nt = Error((Se || "React class") + ": " + he + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof H[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nt.name = "Invariant Violation", Nt;
              }
              Ve = H[ze](oe, ze, Se, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Ve = rt;
            }
            Ve && !(Ve instanceof Error) && (Me(Be), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", he, ze, typeof Ve), Me(null)), Ve instanceof Error && !(Ve.message in de) && (de[Ve.message] = !0, Me(Be), C("Failed %s type: %s", he, Ve.message), Me(null));
          }
      }
    }
    var Ke = Array.isArray;
    function De(H) {
      return Ke(H);
    }
    function je(H) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, he = oe && H[Symbol.toStringTag] || H.constructor.name || "Object";
        return he;
      }
    }
    function Fe(H) {
      try {
        return nt(H), !1;
      } catch {
        return !0;
      }
    }
    function nt(H) {
      return "" + H;
    }
    function _t(H) {
      if (Fe(H))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", je(H)), nt(H);
    }
    var et = $.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ye;
    function yt(H) {
      if (xe.call(H, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(H, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return H.ref !== void 0;
    }
    function tt(H) {
      if (xe.call(H, "key")) {
        var oe = Object.getOwnPropertyDescriptor(H, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return H.key !== void 0;
    }
    function kt(H, oe) {
      typeof H.ref == "string" && et.current;
    }
    function ct(H, oe) {
      {
        var he = function() {
          ye || (ye = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(H, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function dt(H, oe) {
      {
        var he = function() {
          Ye || (Ye = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(H, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var gn = function(H, oe, he, Se, Be, We, ze) {
      var Ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: H,
        key: oe,
        ref: he,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(Ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
    };
    function vn(H, oe, he, Se, Be) {
      {
        var We, ze = {}, Ve = null, Nt = null;
        he !== void 0 && (_t(he), Ve = "" + he), tt(oe) && (_t(oe.key), Ve = "" + oe.key), yt(oe) && (Nt = oe.ref, kt(oe, Be));
        for (We in oe)
          xe.call(oe, We) && !Ze.hasOwnProperty(We) && (ze[We] = oe[We]);
        if (H && H.defaultProps) {
          var rt = H.defaultProps;
          for (We in rt)
            ze[We] === void 0 && (ze[We] = rt[We]);
        }
        if (Ve || Nt) {
          var at = typeof H == "function" ? H.displayName || H.name || "Unknown" : H;
          Ve && ct(ze, at), Nt && dt(ze, at);
        }
        return gn(H, Ve, Nt, Be, Se, et.current, ze);
      }
    }
    var Yn = $.ReactCurrentOwner, cr = $.ReactDebugCurrentFrame;
    function Pn(H) {
      if (H) {
        var oe = H._owner, he = me(H.type, H._source, oe ? oe.type : null);
        cr.setExtraStackFrame(he);
      } else
        cr.setExtraStackFrame(null);
    }
    var ao;
    ao = !1;
    function tn(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function Da() {
      {
        if (Yn.current) {
          var H = _(Yn.current.type);
          if (H)
            return `

Check the render method of \`` + H + "`.";
        }
        return "";
      }
    }
    function Lf(H) {
      return "";
    }
    var Va = {};
    function Df(H) {
      {
        var oe = Da();
        if (!oe) {
          var he = typeof H == "string" ? H : H.displayName || H.name;
          he && (oe = `

Check the top-level render call using <` + he + ">.");
        }
        return oe;
      }
    }
    function Aa(H, oe) {
      {
        if (!H._store || H._store.validated || H.key != null)
          return;
        H._store.validated = !0;
        var he = Df(oe);
        if (Va[he])
          return;
        Va[he] = !0;
        var Se = "";
        H && H._owner && H._owner !== Yn.current && (Se = " It was passed a child from " + _(H._owner.type) + "."), Pn(H), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Se), Pn(null);
      }
    }
    function Ha(H, oe) {
      {
        if (typeof H != "object")
          return;
        if (De(H))
          for (var he = 0; he < H.length; he++) {
            var Se = H[he];
            tn(Se) && Aa(Se, oe);
          }
        else if (tn(H))
          H._store && (H._store.validated = !0);
        else if (H) {
          var Be = w(H);
          if (typeof Be == "function" && Be !== H.entries)
            for (var We = Be.call(H), ze; !(ze = We.next()).done; )
              tn(ze.value) && Aa(ze.value, oe);
        }
      }
    }
    function Vf(H) {
      {
        var oe = H.type;
        if (oe == null || typeof oe == "string")
          return;
        var he;
        if (typeof oe == "function")
          he = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === f))
          he = oe.propTypes;
        else
          return;
        if (he) {
          var Se = _(oe);
          X(he, H.props, "prop", Se, H);
        } else if (oe.PropTypes !== void 0 && !ao) {
          ao = !0;
          var Be = _(oe);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Af(H) {
      {
        for (var oe = Object.keys(H.props), he = 0; he < oe.length; he++) {
          var Se = oe[he];
          if (Se !== "children" && Se !== "key") {
            Pn(H), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Pn(null);
            break;
          }
        }
        H.ref !== null && (Pn(H), C("Invalid attribute `ref` supplied to `React.Fragment`."), Pn(null));
      }
    }
    var za = {};
    function Ia(H, oe, he, Se, Be, We) {
      {
        var ze = W(H);
        if (!ze) {
          var Ve = "";
          (H === void 0 || typeof H == "object" && H !== null && Object.keys(H).length === 0) && (Ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nt = Lf();
          Nt ? Ve += Nt : Ve += Da();
          var rt;
          H === null ? rt = "null" : De(H) ? rt = "array" : H !== void 0 && H.$$typeof === t ? (rt = "<" + (_(H.type) || "Unknown") + " />", Ve = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof H, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, Ve);
        }
        var at = vn(H, oe, he, Be, We);
        if (at == null)
          return at;
        if (ze) {
          var Xt = oe.children;
          if (Xt !== void 0)
            if (Se)
              if (De(Xt)) {
                for (var Or = 0; Or < Xt.length; Or++)
                  Ha(Xt[Or], H);
                Object.freeze && Object.freeze(Xt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ha(Xt, H);
        }
        if (xe.call(oe, "key")) {
          var dr = _(H), Dt = Object.keys(oe).filter(function(Bf) {
            return Bf !== "key";
          }), ts = Dt.length > 0 ? "{key: someKey, " + Dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!za[dr + ts]) {
            var jf = Dt.length > 0 ? "{" + Dt.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ts, dr, jf, dr), za[dr + ts] = !0;
          }
        }
        return H === r ? Af(at) : Vf(at), at;
      }
    }
    function Hf(H, oe, he) {
      return Ia(H, oe, he, !0);
    }
    function zf(H, oe, he) {
      return Ia(H, oe, he, !1);
    }
    var If = zf, Rf = Hf;
    uo.Fragment = r, uo.jsx = If, uo.jsxs = Rf;
  }()), uo;
}
var Ka;
function qf() {
  return Ka || (Ka = 1, process.env.NODE_ENV === "production" ? Go.exports = Xf() : Go.exports = Ff()), Go.exports;
}
var Wf = qf();
const Jf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Jf);
const Zs = 1, Ys = 2, iu = 4, Uf = 8, Gf = 16, Qf = 1, ep = 2, su = 4, tp = 8, np = 16, au = 1, rp = 2, lu = "[", Di = "[!", Xs = "]", br = {}, ht = Symbol(), op = "http://www.w3.org/1999/xhtml", ip = "http://www.w3.org/2000/svg", sp = "@attach", ap = !1;
var Lo = Array.isArray, lp = Array.prototype.indexOf, Fs = Array.from, hi = Object.keys, Br = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, uu = Object.getOwnPropertyDescriptors, cu = Object.prototype, up = Array.prototype, Vi = Object.getPrototypeOf, Za = Object.isExtensible;
function co(e) {
  return typeof e == "function";
}
const Ct = () => {
};
function cp(e) {
  return e();
}
function gi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function dp() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Tt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Do(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Kt = 2, qs = 4, Ai = 8, ro = 16, In = 32, or = 64, Ws = 128, Jt = 256, vi = 512, Et = 1024, Ut = 2048, ir = 4096, an = 8192, Sr = 16384, Js = 32768, Er = 65536, Ya = 1 << 17, fp = 1 << 18, Pr = 1 << 19, du = 1 << 20, ys = 1 << 21, Us = 1 << 22, gr = 1 << 23, xn = Symbol("$state"), Gs = Symbol("legacy props"), pp = Symbol(""), Qs = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), hp = 1, Hi = 3, Nr = 8;
function ea(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function gp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function vp(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function mp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function yp(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function wp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function bp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function xp(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Cp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $p() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function _p() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function kp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Sp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ep() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Ce = !1;
function Ot(e) {
  Ce = e;
}
let Ne;
function ut(e) {
  if (e === null)
    throw Vo(), br;
  return Ne = e;
}
function An() {
  return ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ cn(Ne)
  );
}
function j(e) {
  if (Ce) {
    if (/* @__PURE__ */ cn(Ne) !== null)
      throw Vo(), br;
    Ne = e;
  }
}
function be(e = 1) {
  if (Ce) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n);
    Ne = n;
  }
}
function mi(e = !0) {
  for (var t = 0, n = Ne; ; ) {
    if (n.nodeType === Nr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Xs) {
        if (t === 0) return n;
        t -= 1;
      } else (r === lu || r === Di) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n)
    );
    e && n.remove(), n = o;
  }
}
function fu(e) {
  if (!e || e.nodeType !== Nr)
    throw Vo(), br;
  return (
    /** @type {Comment} */
    e.data
  );
}
function pu(e) {
  return e === this.v;
}
function hu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gu(e) {
  return !hu(e, this.v);
}
let oo = !1, Pp = !1;
function Np() {
  oo = !0;
}
const Tp = [];
function vu(e, t = !1, n = !1) {
  return si(e, /* @__PURE__ */ new Map(), "", Tp, null, n);
}
function si(e, t, n, r, o = null, i = !1) {
  if (typeof e == "object" && e !== null) {
    var s = t.get(e);
    if (s !== void 0) return s;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (Lo(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = si(u, t, n, r, null, i));
      }
      return a;
    }
    if (Vi(e) === cu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = si(
          // @ts-expect-error
          e[d],
          t,
          n,
          r,
          null,
          i
        );
      return a;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function" && !i)
      return si(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
let Qe = null;
function Kr(e) {
  Qe = e;
}
function Qn(e) {
  return (
    /** @type {T} */
    mu().get(e)
  );
}
function Zr(e, t) {
  return mu().set(e, t), t;
}
function fe(e, t = !1, n) {
  Qe = {
    p: Qe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: oo && !t ? { s: null, u: null, $: [] } : null
  };
}
function pe(e) {
  var t = (
    /** @type {ComponentContext} */
    Qe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Au(r);
  }
  return e !== void 0 && (t.x = e), Qe = t.p, e ?? /** @type {T} */
  {};
}
function Ao() {
  return !oo || Qe !== null && Qe.l === null;
}
function mu(e) {
  return Qe === null && ea(), Qe.c ??= new Map(Mp(Qe) || void 0);
}
function Mp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
const Op = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Fn = [], Yr = [];
function yu() {
  var e = Fn;
  Fn = [], gi(e);
}
function wu() {
  var e = Yr;
  Yr = [], gi(e);
}
function Lp() {
  return Fn.length > 0 || Yr.length > 0;
}
function Tr(e) {
  if (Fn.length === 0 && !yo) {
    var t = Fn;
    queueMicrotask(() => {
      t === Fn && yu();
    });
  }
  Fn.push(e);
}
function Dp(e) {
  Yr.length === 0 && Op(wu), Yr.push(e);
}
function Vp() {
  Fn.length > 0 && yu(), Yr.length > 0 && wu();
}
const Ap = /* @__PURE__ */ new WeakMap();
function bu(e) {
  var t = Te;
  if (t === null)
    return Ae.f |= gr, e;
  if ((t.f & Js) === 0) {
    if ((t.f & Ws) === 0)
      throw !t.parent && e instanceof Error && xu(e), e;
    t.b.error(e);
  } else
    Xr(e, t);
}
function Xr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ws) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && xu(e), e;
}
function xu(e) {
  const t = Ap.get(e);
  t && (Br(e, "message", {
    value: t.message
  }), Br(e, "stack", {
    value: t.stack
  }));
}
const ns = /* @__PURE__ */ new Set();
let gt = null, ws = /* @__PURE__ */ new Set(), xr = [], zi = null, bs = !1, yo = !1;
class Cn {
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
  #t = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #a = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #i = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #d = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #f = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    xr = [];
    for (const o of t)
      this.#p(o);
    if (this.#s.length === 0 && this.#a === 0) {
      this.#h();
      var n = this.#n, r = this.#o;
      this.#n = [], this.#o = [], this.#l = [], gt = null, Xa(n), Xa(r), gt === null ? gt = this : ns.delete(this), this.#i?.resolve();
    } else
      this.#u(this.#n), this.#u(this.#o), this.#u(this.#l);
    for (const o of this.#s)
      Hr(o);
    for (const o of this.#r)
      Hr(o);
    this.#s = [], this.#r = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #p(t) {
    t.f ^= Et;
    for (var n = t.first; n !== null; ) {
      var r = n.f, o = (r & (In | or)) !== 0, i = o && (r & Et) !== 0, s = i || (r & an) !== 0 || this.skipped_effects.has(n);
      if (!s && n.fn !== null) {
        if (o)
          n.f ^= Et;
        else if ((r & qs) !== 0)
          this.#o.push(n);
        else if ((r & Et) === 0)
          if ((r & Us) !== 0) {
            var a = n.b?.is_pending() ? this.#r : this.#s;
            a.push(n);
          } else Ri(n) && ((n.f & ro) !== 0 && this.#l.push(n), Hr(n));
        var l = n.first;
        if (l !== null) {
          n = l;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #u(t) {
    for (const n of t)
      ((n.f & Ut) !== 0 ? this.#f : this.#c).push(n), zt(n, Et);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    gt = this;
  }
  deactivate() {
    gt = null;
    for (const t of ws)
      if (ws.delete(t), t(), gt !== null)
        break;
  }
  neuter() {
    this.#d = !0;
  }
  flush() {
    xr.length > 0 ? Cu() : this.#h(), gt === this && (this.#a === 0 && ns.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #h() {
    if (!this.#d)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#a += 1;
  }
  decrement() {
    if (this.#a -= 1, this.#a === 0) {
      for (const t of this.#f)
        zt(t, Ut), Fr(t);
      for (const t of this.#c)
        zt(t, ir), Fr(t);
      this.#n = [], this.#o = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#i ??= dp()).promise;
  }
  static ensure() {
    if (gt === null) {
      const t = gt = new Cn();
      ns.add(gt), yo || Cn.enqueue(() => {
        gt === t && t.flush();
      });
    }
    return gt;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Tr(t);
  }
}
function v(e) {
  var t = yo;
  yo = !0;
  try {
    for (var n; ; ) {
      if (Vp(), xr.length === 0 && !Lp() && (gt?.flush(), xr.length === 0))
        return zi = null, /** @type {T} */
        n;
      Cu();
    }
  } finally {
    yo = t;
  }
}
function Cu() {
  var e = Ar;
  bs = !0;
  try {
    var t = 0;
    for (Ja(!0); xr.length > 0; ) {
      var n = Cn.ensure();
      if (t++ > 1e3) {
        var r, o;
        Hp();
      }
      n.process(xr), Un.clear();
    }
  } finally {
    bs = !1, Ja(e), zi = null;
  }
}
function Hp() {
  try {
    wp();
  } catch (e) {
    Xr(e, zi);
  }
}
let fr = null;
function Xa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Sr | an)) === 0 && Ri(r) && (fr = [], Hr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ju(r) : r.fn = null), fr?.length > 0)) {
        Un.clear();
        for (const o of fr)
          Hr(o);
        fr = [];
      }
    }
    fr = null;
  }
}
function Fr(e) {
  for (var t = zi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (bs && t === Te && (n & ro) !== 0)
      return;
    if ((n & (or | In)) !== 0) {
      if ((n & Et) === 0) return;
      t.f ^= Et;
    }
  }
  xr.push(t);
}
function $u(e) {
  let t = 0, n = er(0), r;
  return () => {
    Jp() && (c(n), zo(() => (t === 0 && (r = bt(() => e(() => wo(n)))), t += 1, () => {
      Tr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, wo(n));
      });
    })));
  };
}
var zp = Er | Pr | Ws;
function Ip(e, t, n) {
  new Rp(e, t, n);
}
class Rp {
  /** @type {Boundary | null} */
  parent;
  #t = !1;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #a = Ce ? Ne : null;
  /** @type {BoundaryProps} */
  #i;
  /** @type {((anchor: Node) => void)} */
  #d;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  #f = 0;
  #c = 0;
  #p = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #u = null;
  #h = () => {
    this.#u && qr(this.#u, this.#f);
  };
  #y = $u(() => (this.#u = er(this.#f), () => {
    this.#u = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#e = t, this.#i = n, this.#d = r, this.parent = /** @type {Effect} */
    Te.b, this.#t = !!this.#i.pending, this.#s = sr(() => {
      if (Te.b = this, Ce) {
        const o = this.#a;
        An(), /** @type {Comment} */
        o.nodeType === Nr && /** @type {Comment} */
        o.data === Di ? this.#b() : this.#w();
      } else {
        try {
          this.#r = wt(() => r(this.#e));
        } catch (o) {
          this.error(o);
        }
        this.#c > 0 ? this.#v() : this.#t = !1;
      }
    }, zp), Ce && (this.#e = Ne);
  }
  #w() {
    try {
      this.#r = wt(() => this.#d(this.#e));
    } catch (t) {
      this.error(t);
    }
    this.#t = !1;
  }
  #b() {
    const t = this.#i.pending;
    t && (this.#n = wt(() => t(this.#e)), Cn.enqueue(() => {
      this.#r = this.#g(() => (Cn.ensure(), wt(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : (Gn(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.#t = !1);
    }));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return this.#t || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!this.#i.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #g(t) {
    var n = Te, r = Ae, o = Qe;
    Qt(this.#s), At(this.#s), Kr(this.#s.ctx);
    try {
      return t();
    } catch (i) {
      return bu(i), null;
    } finally {
      Qt(n), At(r), Kr(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#i.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), jp(this.#r, this.#l)), this.#n === null && (this.#n = wt(() => t(this.#e)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    this.#c += t, this.#c === 0 && (this.#t = !1, this.#n && Gn(this.#n, () => {
      this.#n = null;
    }), this.#l && (this.#e.before(this.#l), this.#l = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#f += t, ws.add(this.#h);
  }
  get_effect_pending() {
    return this.#y(), c(
      /** @type {Source<number>} */
      this.#u
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#i.onerror;
    let r = this.#i.failed;
    if (this.#p || !n && !r)
      throw t;
    this.#r && (vt(this.#r), this.#r = null), this.#n && (vt(this.#n), this.#n = null), this.#o && (vt(this.#o), this.#o = null), Ce && (ut(
      /** @type {TemplateNode} */
      this.#a
    ), be(), ut(mi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Ep();
        return;
      }
      o = !0, i && kp(), Cn.ensure(), this.#f = 0, this.#o !== null && Gn(this.#o, () => {
        this.#o = null;
      }), this.#t = this.has_pending_snippet(), this.#r = this.#g(() => (this.#p = !1, wt(() => this.#d(this.#e)))), this.#c > 0 ? this.#v() : this.#t = !1;
    };
    var a = Ae;
    try {
      At(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Xr(l, this.#s && this.#s.parent);
    } finally {
      At(a);
    }
    r && Tr(() => {
      this.#o = this.#g(() => {
        this.#p = !0;
        try {
          return wt(() => {
            r(
              this.#e,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Xr(
            l,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#p = !1;
        }
      });
    });
  }
}
function jp(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(n)
    );
    t.append(n), n = o;
  }
}
function _u(e, t, n) {
  const r = Ao() ? Ho : ta;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var o = gt, i = (
    /** @type {Effect} */
    Te
  ), s = Bp(), a = Ce;
  Promise.all(t.map((l) => /* @__PURE__ */ Kp(l))).then((l) => {
    o?.activate(), s();
    try {
      n([...e.map(r), ...l]);
    } catch (u) {
      (i.f & Sr) === 0 && Xr(u, i);
    }
    a && Ot(!1), o?.deactivate(), ku();
  }).catch((l) => {
    Xr(l, i);
  });
}
function Bp() {
  var e = Te, t = Ae, n = Qe, r = gt, o = Ce;
  if (o)
    var i = Ne;
  return function() {
    Qt(e), At(t), Kr(n), r?.activate(), o && (Ot(!0), ut(i));
  };
}
function ku() {
  Qt(null), At(null), Kr(null);
}
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  var t = Kt | Ut, n = Ae !== null && (Ae.f & Kt) !== 0 ? (
    /** @type {Derived} */
    Ae
  ) : null;
  return Te === null || n !== null && (n.f & Jt) !== 0 ? t |= Jt : Te.f |= Pr, {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: pu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ht
    ),
    wv: 0,
    parent: n ?? Te,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Kp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Te
  );
  n === null && gp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = er(
    /** @type {V} */
    ht
  ), s = null, a = !Ae;
  return Gp(() => {
    try {
      var l = e();
      s && Promise.resolve(l).catch(() => {
      });
    } catch (h) {
      l = Promise.reject(h);
    }
    var u = () => l;
    o = s?.then(u, u) ?? Promise.resolve(l), s = o;
    var d = (
      /** @type {Batch} */
      gt
    ), f = r.is_pending();
    a && (r.update_pending_count(1), f || d.increment());
    const p = (h, g = void 0) => {
      s = null, f || d.activate(), g ? g !== Qs && (i.f |= gr, qr(i, g)) : ((i.f & gr) !== 0 && (i.f ^= gr), qr(i, h)), a && (r.update_pending_count(-1), f || d.decrement()), ku();
    };
    if (o.then(p, (h) => p(null, h || "unknown")), d)
      return () => {
        queueMicrotask(() => d.neuter());
      };
  }), new Promise((l) => {
    function u(d) {
      function f() {
        d === o ? l(i) : u(o);
      }
      d.then(f, f);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = /* @__PURE__ */ Ho(e);
  return Zu(t), t;
}
// @__NO_SIDE_EFFECTS__
function ta(e) {
  const t = /* @__PURE__ */ Ho(e);
  return t.equals = gu, t;
}
function Su(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      vt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Zp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Kt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function na(e) {
  var t, n = Te;
  Qt(Zp(e));
  try {
    Su(e), t = qu(e);
  } finally {
    Qt(n);
  }
  return t;
}
function Eu(e) {
  var t = na(e);
  if (e.equals(t) || (e.v = t, e.wv = Xu()), !Mr) {
    var n = (qn || (e.f & Jt) !== 0) && e.deps !== null ? ir : Et;
    zt(e, n);
  }
}
const Un = /* @__PURE__ */ new Map();
function er(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: pu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  const n = er(e);
  return Zu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Pu(e, t = !1, n = !0) {
  const r = er(e);
  return t || (r.equals = gu), oo && n && Qe !== null && Qe.l !== null && (Qe.l.s ??= []).push(r), r;
}
function G(e, t, n = !1) {
  Ae !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!rn || (Ae.f & Ya) !== 0) && Ao() && (Ae.f & (Kt | ro | Us | Ya)) !== 0 && !Vn?.includes(e) && _p();
  let r = n ? Wt(t) : t;
  return qr(e, r);
}
function qr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Mr ? Un.set(e, t) : Un.set(e, n), e.v = t;
    var r = Cn.ensure();
    r.capture(e, n), (e.f & Kt) !== 0 && ((e.f & Ut) !== 0 && na(
      /** @type {Derived} */
      e
    ), zt(e, (e.f & Jt) === 0 ? Et : ir)), e.wv = Xu(), Nu(e, Ut), Ao() && Te !== null && (Te.f & Et) !== 0 && (Te.f & (In | or)) === 0 && (Ft === null ? eh([e]) : Ft.push(e));
  }
  return t;
}
function Fa(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return G(e, n), r;
}
function wo(e) {
  G(e, e.v + 1);
}
function Nu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ao(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Te)) {
        var l = (a & Ut) === 0;
        l && zt(s, t), (a & Kt) !== 0 ? Nu(
          /** @type {Derived} */
          s,
          ir
        ) : l && ((a & ro) !== 0 && fr !== null && fr.push(
          /** @type {Effect} */
          s
        ), Fr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Wt(e) {
  if (typeof e != "object" || e === null || xn in e)
    return e;
  const t = Vi(e);
  if (t !== cu && t !== up)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Lo(e), o = /* @__PURE__ */ Le(0), i = vr, s = (a) => {
    if (vr === i)
      return a();
    var l = Ae, u = vr;
    At(null), Ga(i);
    var d = a();
    return At(l), Ga(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Le(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Cp();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var f = /* @__PURE__ */ Le(u.value);
          return n.set(l, f), f;
        }) : G(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Le(ht));
            n.set(l, d), wo(o);
          }
        } else
          G(u, ht), wo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === xn)
          return e;
        var d = n.get(l), f = l in a;
        if (d === void 0 && (!f || Dn(a, l)?.writable) && (d = s(() => {
          var h = Wt(f ? a[l] : ht), g = /* @__PURE__ */ Le(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var p = c(d);
          return p === ht ? void 0 : p;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var f = n.get(l), p = f?.v;
          if (f !== void 0 && p !== ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === xn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== ht || Reflect.has(a, l);
        if (u !== void 0 || Te !== null && (!d || Dn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var p = d ? Wt(a[l]) : ht, h = /* @__PURE__ */ Le(p);
            return h;
          }), n.set(l, u));
          var f = c(u);
          if (f === ht)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var f = n.get(l), p = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? G(g, ht) : h in a && (g = s(() => /* @__PURE__ */ Le(ht)), n.set(h + "", g));
          }
        if (f === void 0)
          (!p || Dn(a, l)?.writable) && (f = s(() => /* @__PURE__ */ Le(void 0)), G(f, Wt(u)), n.set(l, f));
        else {
          p = f.v !== ht;
          var y = s(() => Wt(u));
          G(f, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(d, u), !p) {
          if (r && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              n.get("length")
            ), C = Number(l);
            Number.isInteger(C) && C >= $.v && G($, C + 1);
          }
          wo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((f) => {
          var p = n.get(f);
          return p === void 0 || p.v !== ht;
        });
        for (var [u, d] of n)
          d.v !== ht && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        $p();
      }
    }
  );
}
function qa(e) {
  try {
    if (e !== null && typeof e == "object" && xn in e)
      return e[xn];
  } catch {
  }
  return e;
}
function Yp(e, t) {
  return Object.is(qa(e), qa(t));
}
var Vt, Tu, Mu, Ou;
function xs() {
  if (Vt === void 0) {
    Vt = window, Tu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Mu = Dn(t, "firstChild").get, Ou = Dn(t, "nextSibling").get, Za(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Za(n) && (n.__t = void 0);
  }
}
function Gt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return Mu.call(e);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return Ou.call(e);
}
function B(e, t) {
  if (!Ce)
    return /* @__PURE__ */ ft(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ft(Ne)
  );
  if (n === null)
    n = Ne.appendChild(Gt());
  else if (t && n.nodeType !== Hi) {
    var r = Gt();
    return n?.before(r), ut(r), r;
  }
  return ut(n), n;
}
function ae(e, t = !1) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ft(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ cn(n) : n;
  }
  if (t && Ne?.nodeType !== Hi) {
    var r = Gt();
    return Ne?.before(r), ut(r), r;
  }
  return Ne;
}
function A(e, t = 1, n = !1) {
  let r = Ce ? Ne : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ cn(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== Hi) {
    var i = Gt();
    return r === null ? o?.after(i) : r.before(i), ut(i), i;
  }
  return ut(r), /** @type {TemplateNode} */
  r;
}
function ra(e) {
  e.textContent = "";
}
function Lu() {
  return !1;
}
function Xp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Tr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Fp(e) {
  Ce && /* @__PURE__ */ ft(e) !== null && ra(e);
}
let Wa = !1;
function qp() {
  Wa || (Wa = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function oa(e) {
  var t = Ae, n = Te;
  At(null), Qt(null);
  try {
    return e();
  } finally {
    At(t), Qt(n);
  }
}
function Du(e) {
  Te === null && Ae === null && yp(), Ae !== null && (Ae.f & Jt) !== 0 && Te === null && mp(), Mr && vp();
}
function Wp(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function dn(e, t, n, r = !0) {
  var o = Te;
  o !== null && (o.f & an) !== 0 && (e |= an);
  var i = {
    ctx: Qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ut,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Hr(i), i.f |= Js;
    } catch (l) {
      throw vt(i), l;
    }
  else t !== null && Fr(i);
  if (r) {
    var s = i;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Pr) === 0 && (s = s.first), s !== null && (s.parent = o, o !== null && Wp(s, o), Ae !== null && (Ae.f & Kt) !== 0 && (e & or) === 0)) {
      var a = (
        /** @type {Derived} */
        Ae
      );
      (a.effects ??= []).push(s);
    }
  }
  return i;
}
function Jp() {
  return Ae !== null && !rn;
}
function Vu(e) {
  const t = dn(Ai, null, !1);
  return zt(t, Et), t.teardown = e, t;
}
function ot(e) {
  Du();
  var t = (
    /** @type {Effect} */
    Te.f
  ), n = !Ae && (t & In) !== 0 && (t & Js) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Qe
    );
    (r.e ??= []).push(e);
  } else
    return Au(e);
}
function Au(e) {
  return dn(qs | du, e, !1);
}
function Hu(e) {
  return Du(), dn(Ai | du, e, !0);
}
function ia(e) {
  Cn.ensure();
  const t = dn(or | Pr, e, !0);
  return () => {
    vt(t);
  };
}
function Up(e) {
  Cn.ensure();
  const t = dn(or | Pr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Gn(t, () => {
      vt(t), r(void 0);
    }) : (vt(t), r(void 0));
  });
}
function io(e) {
  return dn(qs, e, !1);
}
function Gp(e) {
  return dn(Us | Pr, e, !0);
}
function zo(e, t = 0) {
  return dn(Ai | t, e, !0);
}
function Ee(e, t = [], n = []) {
  _u(t, n, (r) => {
    dn(Ai, () => e(...r.map(c)), !0);
  });
}
function sr(e, t = 0) {
  var n = dn(ro | t, e, !0);
  return n;
}
function wt(e, t = !0) {
  return dn(In | Pr, e, !0, t);
}
function zu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Mr, r = Ae;
    Ua(!0), At(null);
    try {
      t.call(null);
    } finally {
      Ua(n), At(r);
    }
  }
}
function Iu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && oa(() => {
      o.abort(Qs);
    });
    var r = n.next;
    (n.f & or) !== 0 ? n.parent = null : vt(n, t), n = r;
  }
}
function Qp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & In) === 0 && vt(t), t = n;
  }
}
function vt(e, t = !0) {
  var n = !1;
  (t || (e.f & fp) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Ru(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Iu(e, t && !n), yi(e, 0), zt(e, Sr);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  zu(e);
  var o = e.parent;
  o !== null && o.first !== null && ju(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Ru(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(e)
    );
    e.remove(), e = n;
  }
}
function ju(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Gn(e, t) {
  var n = [];
  sa(e, n, !0), Bu(n, () => {
    vt(e), t && t();
  });
}
function Bu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function sa(e, t, n) {
  if ((e.f & an) === 0) {
    if (e.f ^= an, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Er) !== 0 || (r.f & In) !== 0;
      sa(r, t, i ? n : !1), r = o;
    }
  }
}
function Ii(e) {
  Ku(e, !0);
}
function Ku(e, t) {
  if ((e.f & an) !== 0) {
    e.f ^= an, (e.f & Et) === 0 && (zt(e, Ut), Fr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Er) !== 0 || (n.f & In) !== 0;
      Ku(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Ar = !1;
function Ja(e) {
  Ar = e;
}
let Mr = !1;
function Ua(e) {
  Mr = e;
}
let Ae = null, rn = !1;
function At(e) {
  Ae = e;
}
let Te = null;
function Qt(e) {
  Te = e;
}
let Vn = null;
function Zu(e) {
  Ae !== null && (Vn === null ? Vn = [e] : Vn.push(e));
}
let Mt = null, jt = 0, Ft = null;
function eh(e) {
  Ft = e;
}
let Yu = 1, xo = 0, vr = xo;
function Ga(e) {
  vr = e;
}
let qn = !1;
function Xu() {
  return ++Yu;
}
function Ri(e) {
  var t = e.f;
  if ((t & Ut) !== 0)
    return !0;
  if ((t & ir) !== 0) {
    var n = e.deps, r = (t & Jt) !== 0;
    if (n !== null) {
      var o, i, s = (t & vi) !== 0, a = r && Te !== null && !qn, l = n.length;
      if ((s || a) && (Te === null || (Te.f & Sr) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= vi), a && d !== null && (d.f & Jt) === 0 && (u.f ^= Jt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Ri(
          /** @type {Derived} */
          i
        ) && Eu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Te !== null && !qn) && zt(e, Et);
  }
  return !1;
}
function Fu(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Vn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Kt) !== 0 ? Fu(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? zt(i, Ut) : (i.f & Et) !== 0 && zt(i, ir), Fr(
        /** @type {Effect} */
        i
      ));
    }
}
function qu(e) {
  var t = Mt, n = jt, r = Ft, o = Ae, i = qn, s = Vn, a = Qe, l = rn, u = vr, d = e.f;
  Mt = /** @type {null | Value[]} */
  null, jt = 0, Ft = null, qn = (d & Jt) !== 0 && (rn || !Ar || Ae === null), Ae = (d & (In | or)) === 0 ? e : null, Vn = null, Kr(e.ctx), rn = !1, vr = ++xo, e.ac !== null && (oa(() => {
    e.ac.abort(Qs);
  }), e.ac = null);
  try {
    e.f |= ys;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f(), h = e.deps;
    if (Mt !== null) {
      var g;
      if (yi(e, jt), h !== null && jt > 0)
        for (h.length = jt + Mt.length, g = 0; g < Mt.length; g++)
          h[jt + g] = Mt[g];
      else
        e.deps = h = Mt;
      if (!qn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Kt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = jt; g < h.length; g++)
          (h[g].reactions ??= []).push(e);
    } else h !== null && jt < h.length && (yi(e, jt), h.length = jt);
    if (Ao() && Ft !== null && !rn && h !== null && (e.f & (Kt | ir | Ut)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ft.length; g++)
        Fu(
          Ft[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (xo++, Ft !== null && (r === null ? r = Ft : r.push(.../** @type {Source[]} */
    Ft))), (e.f & gr) !== 0 && (e.f ^= gr), p;
  } catch (y) {
    return bu(y);
  } finally {
    e.f ^= ys, Mt = t, jt = n, Ft = r, Ae = o, qn = i, Vn = s, Kr(a), rn = l, vr = u;
  }
}
function th(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = lp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Kt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Mt === null || !Mt.includes(t)) && (zt(t, ir), (t.f & (Jt | vi)) === 0 && (t.f ^= vi), Su(
    /** @type {Derived} **/
    t
  ), yi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function yi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      th(e, n[r]);
}
function Hr(e) {
  var t = e.f;
  if ((t & Sr) === 0) {
    zt(e, Et);
    var n = Te, r = Ar;
    Te = e, Ar = !0;
    try {
      (t & ro) !== 0 ? Qp(e) : Iu(e), zu(e);
      var o = qu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Yu;
      var i;
      ap && Pp && (e.f & Ut) !== 0 && e.deps;
    } finally {
      Ar = r, Te = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & Kt) !== 0;
  if (Ae !== null && !rn) {
    var r = Te !== null && (Te.f & Sr) !== 0;
    if (!r && !Vn?.includes(e)) {
      var o = Ae.deps;
      if ((Ae.f & ys) !== 0)
        e.rv < xo && (e.rv = xo, Mt === null && o !== null && o[jt] === e ? jt++ : Mt === null ? Mt = [e] : (!qn || !Mt.includes(e)) && Mt.push(e));
      else {
        (Ae.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [Ae] : i.includes(Ae) || i.push(Ae);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), a = s.parent;
    a !== null && (a.f & Jt) === 0 && (s.f ^= Jt);
  }
  if (Mr) {
    if (Un.has(e))
      return Un.get(e);
    if (n) {
      s = /** @type {Derived} */
      e;
      var l = s.v;
      return ((s.f & Et) === 0 && s.reactions !== null || Wu(s)) && (l = na(s)), Un.set(s, l), l;
    }
  } else n && (s = /** @type {Derived} */
  e, Ri(s) && Eu(s));
  if ((e.f & gr) !== 0)
    throw e.v;
  return e.v;
}
function Wu(e) {
  if (e.v === ht) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Un.has(t) || (t.f & Kt) !== 0 && Wu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function bt(e) {
  var t = rn;
  try {
    return rn = !0, e();
  } finally {
    rn = t;
  }
}
const nh = -7169;
function zt(e, t) {
  e.f = e.f & nh | t;
}
function rh(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function aa(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (xn in e)
      Cs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && xn in n && Cs(n);
      }
  }
}
function Cs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Cs(e[r], t);
      } catch {
      }
    const n = Vi(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = uu(n);
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
const Ju = /* @__PURE__ */ new Set(), $s = /* @__PURE__ */ new Set();
function la(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ho.call(t, i), !i.cancelBubble)
      return oa(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Tr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function _s(e, t, n, r = {}) {
  var o = la(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Qa(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = la(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Vu(() => {
    t.removeEventListener(e, s, i);
  });
}
function ar(e) {
  for (var t = 0; t < e.length; t++)
    Ju.add(e[t]);
  for (var n of $s)
    n(e);
}
let el = null;
function ho(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  el = e;
  var s = 0, a = el === e && e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Br(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ae, f = Te;
    At(null), Qt(null);
    try {
      for (var p, h = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Lo(y)) {
              var [w, ...$] = y;
              w.apply(i, [e, ...$]);
            } else
              y.call(i, e);
        } catch (C) {
          p ? h.push(C) : p = C;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (p) {
        for (let C of h)
          queueMicrotask(() => {
            throw C;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, At(d), Qt(f);
    }
  }
}
function ua(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function It(e, t) {
  var n = (
    /** @type {Effect} */
    Te
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & au) !== 0, r = (t & rp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return It(Ne, null), Ne;
    o === void 0 && (o = ua(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ ft(o)));
    var s = (
      /** @type {TemplateNode} */
      r || Tu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      It(a, l);
    } else
      It(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function oh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & au) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return It(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        ua(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ ft(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ ft(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ ft(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ ft(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      It(d, f);
    } else
      It(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ oh(e, t, "svg");
}
function Pe(e = "") {
  if (!Ce) {
    var t = Gt(e + "");
    return It(t, t), t;
  }
  var n = Ne;
  return n.nodeType !== Hi && (n.before(n = Gt()), ut(n)), It(n, n), n;
}
function Oe() {
  if (Ce)
    return It(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Gt();
  return e.append(t, n), It(t, n), e;
}
function L(e, t) {
  if (Ce) {
    Te.nodes_end = Ne, An();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ih(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const sh = [
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
function ah(e) {
  return sh.includes(e);
}
const lh = {
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
function uh(e) {
  return e = e.toLowerCase(), lh[e] ?? e;
}
const ch = ["touchstart", "touchmove"];
function dh(e) {
  return ch.includes(e);
}
const fh = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function ph(e) {
  return fh.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Je(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Uu(e, t) {
  return Gu(e, t);
}
function hh(e, t) {
  xs(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ft(n)
    ); i && (i.nodeType !== Nr || /** @type {Comment} */
    i.data !== lu); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ cn(i);
    if (!i)
      throw br;
    Ot(!0), ut(
      /** @type {Comment} */
      i
    );
    const s = Gu(e, { ...t, anchor: i });
    return Ot(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== br && console.warn("Failed to hydrate: ", s), t.recover === !1 && bp(), xs(), ra(n), Ot(!1), Uu(e, t);
  } finally {
    Ot(r), ut(o);
  }
}
const Lr = /* @__PURE__ */ new Map();
function Gu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  xs();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var p = 0; p < f.length; p++) {
      var h = f[p];
      if (!a.has(h)) {
        a.add(h);
        var g = dh(h);
        t.addEventListener(h, ho, { passive: g });
        var y = Lr.get(h);
        y === void 0 ? (document.addEventListener(h, ho, { passive: g }), Lr.set(h, 1)) : Lr.set(h, y + 1);
      }
    }
  };
  l(Fs(Ju)), $s.add(l);
  var u = void 0, d = Up(() => {
    var f = n ?? t.appendChild(Gt());
    return Ip(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (p) => {
        if (i) {
          fe({});
          var h = (
            /** @type {ComponentContext} */
            Qe
          );
          h.c = i;
        }
        if (o && (r.$$events = o), Ce && It(
          /** @type {TemplateNode} */
          p,
          null
        ), u = e(p, r) || {}, Ce && (Te.nodes_end = Ne, Ne === null || Ne.nodeType !== Nr || /** @type {Comment} */
        Ne.data !== Xs))
          throw Vo(), br;
        i && pe();
      }
    ), () => {
      for (var p of a) {
        t.removeEventListener(p, ho);
        var h = (
          /** @type {number} */
          Lr.get(p)
        );
        --h === 0 ? (document.removeEventListener(p, ho), Lr.delete(p)) : Lr.set(p, h);
      }
      $s.delete(l), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return ks.set(u, d), u;
}
let ks = /* @__PURE__ */ new WeakMap();
function gh(e, t) {
  const n = ks.get(e);
  return n ? (ks.delete(e), n(t)) : Promise.resolve();
}
function it(e, t, ...n) {
  var r = e, o = Ct, i;
  sr(() => {
    o !== (o = t()) && (i && (vt(i), i = null), i = wt(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Er), Ce && (r = Ne);
}
function Rn(e) {
  Qe === null && ea(), oo && Qe.l !== null ? vh(Qe).m.push(e) : ot(() => {
    const t = bt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Io(e) {
  Qe === null && ea(), Rn(() => () => bt(e));
}
function vh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, n = !1) {
  Ce && An();
  var r = e, o = null, i = null, s = ht, a = n ? Er : 0, l = !1;
  const u = (p, h = !0) => {
    l = !0, f(h, p);
  };
  function d() {
    var p = s ? o : i, h = s ? i : o;
    p && Ii(p), h && Gn(h, () => {
      s ? i = null : o = null;
    });
  }
  const f = (p, h) => {
    if (s === (s = p)) return;
    let g = !1;
    if (Ce) {
      const $ = fu(r) === Di;
      !!s === $ && (r = mi(), ut(r), Ot(!1), g = !0);
    }
    var y = Lu(), w = r;
    s ? o ??= h && wt(() => h(w)) : i ??= h && wt(() => h(w)), y || d(), g && Ot(!0);
  };
  sr(() => {
    l = !1, t(u), l || f(null, null);
  }, a), Ce && (r = Ne);
}
function mh(e, t) {
  Ce && ut(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ft(e)
  ), zo(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Wr(e, t) {
  return t;
}
function yh(e, t, n) {
  for (var r = e.items, o = [], i = t.length, s = 0; s < i; s++)
    sa(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ra(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), yn(e, t[0].prev, t[i - 1].next);
  }
  Bu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), yn(e, d.prev, d.next)), vt(d.e, !a);
    }
  });
}
function Pt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & iu) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Ce ? ut(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ft(u)
    ) : u.appendChild(Gt());
  }
  Ce && An();
  var d = null, f = !1, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ ta(() => {
    var $ = n();
    return Lo($) ? $ : $ == null ? [] : Fs($);
  }), g, y;
  function w() {
    wh(
      y,
      g,
      a,
      p,
      s,
      o,
      t,
      r,
      n
    ), i !== null && (g.length === 0 ? d ? Ii(d) : d = wt(() => i(s)) : d !== null && Gn(d, () => {
      d = null;
    }));
  }
  sr(() => {
    y ??= /** @type {Effect} */
    Te, g = /** @type {V[]} */
    c(h);
    var $ = g.length;
    if (f && $ === 0)
      return;
    f = $ === 0;
    let C = !1;
    if (Ce) {
      var x = fu(s) === Di;
      x !== ($ === 0) && (s = mi(), ut(s), Ot(!1), C = !0);
    }
    if (Ce) {
      for (var S = null, N, E = 0; E < $; E++) {
        if (Ne.nodeType === Nr && /** @type {Comment} */
        Ne.data === Xs) {
          s = /** @type {Comment} */
          Ne, C = !0, Ot(!1);
          break;
        }
        var O = g[E], V = r(O, E);
        N = Qu(
          Ne,
          a,
          S,
          null,
          O,
          V,
          E,
          o,
          t,
          n
        ), a.items.set(V, N), S = N;
      }
      $ > 0 && ut(mi());
    }
    Ce ? $ === 0 && i && (d = wt(() => i(s))) : w(), C && Ot(!0), c(h);
  }), Ce && (s = Ne);
}
function wh(e, t, n, r, o, i, s, a, l) {
  var u = (s & Uf) !== 0, d = (s & (Zs | Ys)) !== 0, f = t.length, p = n.items, h = n.first, g = h, y, w = null, $, C = [], x = [], S, N, E, O;
  if (u)
    for (O = 0; O < f; O += 1)
      S = t[O], N = a(S, O), E = p.get(N), E !== void 0 && (E.a?.measure(), ($ ??= /* @__PURE__ */ new Set()).add(E));
  for (O = 0; O < f; O += 1) {
    if (S = t[O], N = a(S, O), E = p.get(N), E === void 0) {
      var V = r.get(N);
      if (V !== void 0) {
        r.delete(N), p.set(N, V);
        var Z = w ? w.next : g;
        yn(n, w, V), yn(n, V, Z), rs(V, Z, o), w = V;
      } else {
        var W = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : o;
        w = Qu(
          W,
          n,
          w,
          w === null ? n.first : w.next,
          S,
          N,
          O,
          i,
          s,
          l
        );
      }
      p.set(N, w), C = [], x = [], g = w.next;
      continue;
    }
    if (d && bh(E, S, O, s), (E.e.f & an) !== 0 && (Ii(E.e), u && (E.a?.unfix(), ($ ??= /* @__PURE__ */ new Set()).delete(E))), E !== g) {
      if (y !== void 0 && y.has(E)) {
        if (C.length < x.length) {
          var I = x[0], k;
          w = I.prev;
          var _ = C[0], b = C[C.length - 1];
          for (k = 0; k < C.length; k += 1)
            rs(C[k], I, o);
          for (k = 0; k < x.length; k += 1)
            y.delete(x[k]);
          yn(n, _.prev, b.next), yn(n, w, _), yn(n, b, I), g = I, w = b, O -= 1, C = [], x = [];
        } else
          y.delete(E), rs(E, g, o), yn(n, E.prev, E.next), yn(n, E, w === null ? n.first : w.next), yn(n, w, E), w = E;
        continue;
      }
      for (C = [], x = []; g !== null && g.k !== N; )
        (g.e.f & an) === 0 && (y ??= /* @__PURE__ */ new Set()).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      E = g;
    }
    C.push(E), w = E, g = E.next;
  }
  if (g !== null || y !== void 0) {
    for (var M = y === void 0 ? [] : Fs(y); g !== null; )
      (g.e.f & an) === 0 && M.push(g), g = g.next;
    var T = M.length;
    if (T > 0) {
      var R = (s & iu) !== 0 && f === 0 ? o : null;
      if (u) {
        for (O = 0; O < T; O += 1)
          M[O].a?.measure();
        for (O = 0; O < T; O += 1)
          M[O].a?.fix();
      }
      yh(n, M, R);
    }
  }
  u && Tr(() => {
    if ($ !== void 0)
      for (E of $)
        E.a?.apply();
  }), e.first = n.first && n.first.e, e.last = w && w.e;
  for (var K of r.values())
    vt(K.e);
  r.clear();
}
function bh(e, t, n, r) {
  (r & Zs) !== 0 && qr(e.v, t), (r & Ys) !== 0 ? qr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Qu(e, t, n, r, o, i, s, a, l, u, d) {
  var f = (l & Zs) !== 0, p = (l & Gf) === 0, h = f ? p ? /* @__PURE__ */ Pu(o, !1, !1) : er(o) : o, g = (l & Ys) === 0 ? s : er(s), y = {
    i: g,
    v: h,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var w = document.createDocumentFragment();
      w.append(e = Gt());
    }
    return y.e = wt(() => a(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), Ce), y.e.prev = n && n.e, y.e.next = r && r.e, n === null ? d || (t.first = y) : (n.next = y, n.e.next = y.e), r !== null && (r.prev = y, r.e.prev = y.e), y;
  } finally {
  }
}
function rs(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ cn(i)
    );
    o.before(i), i = s;
  }
}
function yn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function ca(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ee(() => {
    var a = (
      /** @type {Effect} */
      Te
    );
    if (s === (s = t() ?? "")) {
      Ce && An();
      return;
    }
    if (a.nodes_start !== null && (Ru(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Ne.data;
        for (var l = An(), u = l; l !== null && (l.nodeType !== Nr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ cn(l);
        if (l === null)
          throw Vo(), br;
        It(Ne, u), i = ut(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var f = ua(d);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ ft(f)), It(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ ft(f); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ ft(f)
          );
      else
        i.before(f);
    }
  });
}
function ji(e, t, n) {
  Ce && An();
  var r = e, o, i, s = null, a = null;
  function l() {
    i && (Gn(i), i = null), s && (s.lastChild.remove(), r.before(s), s = null), i = a, a = null;
  }
  sr(() => {
    if (o !== (o = t())) {
      var u = Lu();
      if (o) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = Gt()), i && gt.skipped_effects.add(i)), a = wt(() => n(d, o));
      }
      u ? gt.add_callback(l) : l();
    }
  }, Er), Ce && (r = Ne);
}
function xh(e, t, n, r, o, i) {
  let s = Ce;
  Ce && An();
  var a, l, u = null;
  Ce && Ne.nodeType === hp && (u = /** @type {Element} */
  Ne, An());
  var d = (
    /** @type {TemplateNode} */
    Ce ? Ne : e
  ), f;
  sr(() => {
    const p = t() || null;
    var h = p === "svg" ? ip : null;
    p !== a && (f && (p === null ? Gn(f, () => {
      f = null, l = null;
    }) : p === l ? Ii(f) : vt(f)), p && p !== l && (f = wt(() => {
      if (u = Ce ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, p) : document.createElement(p), It(u, u), r) {
        Ce && ph(p) && u.append(document.createComment(""));
        var g = (
          /** @type {TemplateNode} */
          Ce ? /* @__PURE__ */ ft(u) : u.appendChild(Gt())
        );
        Ce && (g === null ? Ot(!1) : ut(g)), r(u, g);
      }
      Te.nodes_end = u, d.before(u);
    })), a = p, a && (l = a));
  }, Er), s && (Ot(!0), ut(d));
}
function Xe(e, t) {
  io(() => {
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
function St(e, t, n) {
  io(() => {
    var r = bt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      zo(() => {
        var s = n();
        aa(s), o && hu(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ch(e, t) {
  var n = void 0, r;
  sr(() => {
    n !== (n = t()) && (r && (vt(r), r = null), n && (r = wt(() => {
      io(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ec(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ec(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $h() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ec(e)) && (r && (r += " "), r += t);
  return r;
}
function jn(e) {
  return typeof e == "object" ? $h(e) : e ?? "";
}
const tl = [...` 	
\r\f \v\uFEFF`];
function _h(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || tl.includes(r[s - 1])) && (a === r.length || tl.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function nl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function os(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function kh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(os)), o && l.push(...Object.keys(o).map(os));
      var u = 0, d = -1;
      const y = e.length;
      for (var f = 0; f < y; f++) {
        var p = e[f];
        if (a ? p === "/" && e[f - 1] === "*" && (a = !1) : i ? i === p && (i = !1) : p === "/" && e[f + 1] === "*" ? a = !0 : p === '"' || p === "'" ? i = p : p === "(" ? s++ : p === ")" && s--, !a && i === !1 && s === 0) {
          if (p === ":" && d === -1)
            d = f;
          else if (p === ";" || f === y - 1) {
            if (d !== -1) {
              var h = os(e.substring(u, d).trim());
              if (!l.includes(h)) {
                p !== ";" && f++;
                var g = e.substring(u, f).trim();
                n += " " + g + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += nl(r)), o && (n += nl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Rt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Ce || s !== n || s === void 0) {
    var a = _h(n, r, i);
    (!Ce || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function is(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function $t(e, t, n, r) {
  var o = e.__style;
  if (Ce || o !== t) {
    var i = kh(t, r);
    (!Ce || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (is(e, n?.[0], r[0]), is(e, n?.[1], r[1], "important")) : is(e, n, r));
  return r;
}
function Ss(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Lo(t))
      return Sp();
    for (var r of e.options)
      r.selected = t.includes(rl(r));
    return;
  }
  for (r of e.options) {
    var o = rl(r);
    if (Yp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Sh(e) {
  var t = new MutationObserver(() => {
    Ss(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Vu(() => {
    t.disconnect();
  });
}
function rl(e) {
  return "__value" in e ? e.__value : e.value;
}
const Xn = Symbol("class"), bn = Symbol("style"), tc = Symbol("is custom element"), nc = Symbol("is html");
function mr(e) {
  if (Ce) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          ke(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ke(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, Dp(n), qp();
  }
}
function ai(e, t) {
  var n = Bi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ol(e, t) {
  var n = Bi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Eh(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = Bi(e);
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[pp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && rc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Ph(e, t, n, r, o = !1, i = !1) {
  if (Ce && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || mr(s);
  }
  var l = Bi(e), u = l[tc], d = !l[nc];
  let f = Ce && u;
  f && Ot(!1);
  var p = t || {}, h = e.tagName === "OPTION";
  for (var g in t)
    g in n || (n[g] = null);
  n.class ? n.class = jn(n.class) : (r || n[Xn]) && (n.class = null), n[bn] && (n.style ??= null);
  var y = rc(e);
  for (const E in n) {
    let O = n[E];
    if (h && E === "value" && O == null) {
      e.value = e.__value = "", p[E] = O;
      continue;
    }
    if (E === "class") {
      var w = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rt(e, w, O, r, t?.[Xn], n[Xn]), p[E] = O, p[Xn] = n[Xn];
      continue;
    }
    if (E === "style") {
      $t(e, O, t?.[bn], n[bn]), p[E] = O, p[bn] = n[bn];
      continue;
    }
    var $ = p[E];
    if (!(O === $ && !(O === void 0 && e.hasAttribute(E)))) {
      p[E] = O;
      var C = E[0] + E[1];
      if (C !== "$$")
        if (C === "on") {
          const V = {}, Z = "$$" + E;
          let W = E.slice(2);
          var x = ah(W);
          if (ih(W) && (W = W.slice(0, -7), V.capture = !0), !x && $) {
            if (O != null) continue;
            e.removeEventListener(W, p[Z], V), p[Z] = null;
          }
          if (O != null)
            if (x)
              e[`__${W}`] = O, ar([W]);
            else {
              let I = function(k) {
                p[E].call(this, k);
              };
              p[Z] = la(W, e, I, V);
            }
          else x && (e[`__${W}`] = void 0);
        } else if (E === "style")
          ke(e, E, O);
        else if (E === "autofocus")
          Xp(
            /** @type {HTMLElement} */
            e,
            !!O
          );
        else if (!u && (E === "__value" || E === "value" && O != null))
          e.value = e.__value = O;
        else if (E === "selected" && h)
          Eh(
            /** @type {HTMLOptionElement} */
            e,
            O
          );
        else {
          var S = E;
          d || (S = uh(S));
          var N = S === "defaultValue" || S === "defaultChecked";
          if (O == null && !u && !N)
            if (l[E] = null, S === "value" || S === "checked") {
              let V = (
                /** @type {HTMLInputElement} */
                e
              );
              const Z = t === void 0;
              if (S === "value") {
                let W = V.defaultValue;
                V.removeAttribute(S), V.defaultValue = W, V.value = V.__value = Z ? W : null;
              } else {
                let W = V.defaultChecked;
                V.removeAttribute(S), V.defaultChecked = W, V.checked = Z ? W : !1;
              }
            } else
              e.removeAttribute(E);
          else N || y.includes(S) && (u || typeof O != "string") ? (e[S] = O, S in l && (l[S] = ht)) : typeof O != "function" && ke(e, S, O);
        }
    }
  }
  return f && Ot(!0), p;
}
function pt(e, t, n = [], r = [], o, i = !1, s = !1) {
  _u(n, r, (a) => {
    var l = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (sr(() => {
      var h = t(...a.map(c)), g = Ph(
        e,
        l,
        h,
        o,
        i,
        s
      );
      f && d && "value" in h && Ss(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let w of Object.getOwnPropertySymbols(u))
        h[w] || vt(u[w]);
      for (let w of Object.getOwnPropertySymbols(h)) {
        var y = h[w];
        w.description === sp && (!l || y !== l[w]) && (u[w] && vt(u[w]), u[w] = wt(() => Ch(e, () => y))), g[w] = y;
      }
      l = g;
    }), d) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      io(() => {
        Ss(
          p,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Sh(p);
      });
    }
    f = !0;
  });
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [tc]: e.nodeName.includes("-"),
      [nc]: e.namespaceURI === op
    }
  );
}
var il = /* @__PURE__ */ new Map();
function rc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = il.get(t);
  if (n) return n;
  il.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = uu(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Vi(o);
  }
  return n;
}
class da {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #a;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#a = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#i().observe(t, this.#a), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #i() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          da.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Nh = /* @__PURE__ */ new da({
  box: "border-box"
});
function sl(e, t, n) {
  var r = Nh.observe(e, () => n(e[t]));
  io(() => (bt(() => n(e[t])), r));
}
function al(e, t) {
  return e === t || e?.[xn] === t;
}
function Zt(e = {}, t, n, r) {
  return io(() => {
    var o, i;
    return zo(() => {
      o = i, i = [], bt(() => {
        e !== n(...i) && (t(e, ...i), o && al(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Tr(() => {
        i && al(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function oc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), n = t.l.u;
  if (!n) return;
  let r = () => aa(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ho(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && Hu(() => {
    ll(t, r), gi(n.b);
  }), ot(() => {
    const o = bt(() => n.m.map(cp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && ot(() => {
    ll(t, r), gi(n.a);
  });
}
function ll(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Qo = !1;
function Th(e) {
  var t = Qo;
  try {
    return Qo = !1, [e(), Qo];
  } finally {
    Qo = t;
  }
}
const Mh = {
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
function qe(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Mh
  );
}
const Oh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Te;
      try {
        Qt(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          su
        );
      } finally {
        Qt(r);
      }
    }
    return e.special[t](n), Fa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Fa(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function ul(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: er(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Te
      )
    },
    Oh
  );
}
const Lh = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (co(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      co(o) && (o = o());
      const i = Dn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (co(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === xn || t === Gs) return !1;
    for (let n of e.props)
      if (co(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (co(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Ue(...e) {
  return new Proxy({ props: e }, Lh);
}
function m(e, t, n, r) {
  var o = !oo || (n & ep) !== 0, i = (n & tp) !== 0, s = (n & np) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? bt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var f = xn in e || Gs in e;
    d = Dn(e, t)?.set ?? (f && t in e ? (x) => e[t] = x : void 0);
  }
  var p, h = !1;
  i ? [p, h] = Th(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = u(), d && (o && xp(), d(p)));
  var g;
  if (o ? g = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (l = !0, x);
  } : g = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & su) === 0)
    return g;
  if (d) {
    var y = e.$$legacy;
    return (
      /** @type {() => V} */
      function(x, S) {
        return arguments.length > 0 ? ((!o || !S || y || h) && d(S ? g() : x), x) : g();
      }
    );
  }
  var w = !1, $ = ((n & Qf) !== 0 ? Ho : ta)(() => (w = !1, g()));
  i && c($);
  var C = (
    /** @type {Effect} */
    Te
  );
  return (
    /** @type {() => V} */
    function(x, S) {
      if (arguments.length > 0) {
        const N = S ? c($) : o && i ? Wt(x) : x;
        return G($, N), w = !0, a !== void 0 && (a = N), x;
      }
      return Mr && w || (C.f & Sr) !== 0 ? $.v : c($);
    }
  );
}
function Dh(e) {
  return new Vh(e);
}
class Vh {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ Pu(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Gs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return G(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? hh : Uu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || Br(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(s) {
          this.#e[i] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    }, this.#e.$destroy = () => {
      gh(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let ic;
typeof HTMLElement == "function" && (ic = class extends HTMLElement {
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
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
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
      const t = {}, n = Ah(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = li(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Dh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ia(() => {
        zo(() => {
          this.$$r = !0;
          for (const r of hi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = li(
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
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = li(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return hi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function li(e, t, n, r) {
  const o = n[e]?.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function Ah(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, n, r, o, i) {
  let s = class extends ic {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return hi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return hi(t).forEach((a) => {
    Br(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = li(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Dn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    Br(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Hh = { value: () => {
} };
function Ki() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ui(n);
}
function ui(e) {
  this._ = e;
}
function zh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ui.prototype = Ki.prototype = {
  constructor: ui,
  on: function(e, t) {
    var n = this._, r = zh(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Ih(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = cl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = cl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ui(e);
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
function Ih(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function cl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Hh, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Es = "http://www.w3.org/1999/xhtml";
const dl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Es,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), dl.hasOwnProperty(t) ? { space: dl[t], local: e } : e;
}
function Rh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Es && t.documentElement.namespaceURI === Es ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function jh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function sc(e) {
  var t = Zi(e);
  return (t.local ? jh : Rh)(t);
}
function Bh() {
}
function fa(e) {
  return e == null ? Bh : function() {
    return this.querySelector(e);
  };
}
function Kh(e) {
  typeof e != "function" && (e = fa(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Yt(r, this._parents);
}
function Zh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Yh() {
  return [];
}
function ac(e) {
  return e == null ? Yh : function() {
    return this.querySelectorAll(e);
  };
}
function Xh(e) {
  return function() {
    return Zh(e.apply(this, arguments));
  };
}
function Fh(e) {
  typeof e == "function" ? e = Xh(e) : e = ac(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Yt(r, o);
}
function lc(e) {
  return function() {
    return this.matches(e);
  };
}
function uc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var qh = Array.prototype.find;
function Wh(e) {
  return function() {
    return qh.call(this.children, e);
  };
}
function Jh() {
  return this.firstElementChild;
}
function Uh(e) {
  return this.select(e == null ? Jh : Wh(typeof e == "function" ? e : uc(e)));
}
var Gh = Array.prototype.filter;
function Qh() {
  return Array.from(this.children);
}
function eg(e) {
  return function() {
    return Gh.call(this.children, e);
  };
}
function tg(e) {
  return this.selectAll(e == null ? Qh : eg(typeof e == "function" ? e : uc(e)));
}
function ng(e) {
  typeof e != "function" && (e = lc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Yt(r, this._parents);
}
function cc(e) {
  return new Array(e.length);
}
function rg() {
  return new Yt(this._enter || this._groups.map(cc), this._parents);
}
function wi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
wi.prototype = {
  constructor: wi,
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
function og(e) {
  return function() {
    return e;
  };
}
function ig(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new wi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function sg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, f = i.length, p = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (p[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < f; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new wi(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(p[a]) === l && (o[a] = l);
}
function ag(e) {
  return e.__data__;
}
function lg(e, t) {
  if (!arguments.length) return Array.from(this, ag);
  var n = t ? sg : ig, r = this._parents, o = this._groups;
  typeof e != "function" && (e = og(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], f = o[u], p = f.length, h = ug(e.call(d, d && d.__data__, u, r)), g = h.length, y = a[u] = new Array(g), w = s[u] = new Array(g), $ = l[u] = new Array(p);
    n(d, f, y, w, $, h, t);
    for (var C = 0, x = 0, S, N; C < g; ++C)
      if (S = y[C]) {
        for (C >= x && (x = C + 1); !(N = w[x]) && ++x < g; ) ;
        S._next = N || null;
      }
  }
  return s = new Yt(s, r), s._enter = a, s._exit = l, s;
}
function ug(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function cg() {
  return new Yt(this._exit || this._groups.map(cc), this._parents);
}
function dg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function fg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], f = u.length, p = a[l] = new Array(f), h, g = 0; g < f; ++g)
      (h = u[g] || d[g]) && (p[g] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Yt(a, this._parents);
}
function pg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function hg(e) {
  e || (e = gg);
  function t(f, p) {
    return f && p ? e(f.__data__, p.__data__) : !f - !p;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Yt(o, this._parents).order();
}
function gg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function mg() {
  return Array.from(this);
}
function yg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function wg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function bg() {
  return !this.node();
}
function xg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Cg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function $g(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function _g(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function kg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Sg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Eg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Pg(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? $g : Cg : typeof t == "function" ? n.local ? Eg : Sg : n.local ? kg : _g)(n, t));
}
function dc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Ng(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Tg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Mg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Og(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ng : typeof t == "function" ? Mg : Tg)(e, t, n ?? "")) : Jr(this.node(), e);
}
function Jr(e, t) {
  return e.style.getPropertyValue(t) || dc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Lg(e) {
  return function() {
    delete this[e];
  };
}
function Dg(e, t) {
  return function() {
    this[e] = t;
  };
}
function Vg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ag(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Lg : typeof t == "function" ? Vg : Dg)(e, t)) : this.node()[e];
}
function fc(e) {
  return e.trim().split(/^|\s+/);
}
function pa(e) {
  return e.classList || new pc(e);
}
function pc(e) {
  this._node = e, this._names = fc(e.getAttribute("class") || "");
}
pc.prototype = {
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
function hc(e, t) {
  for (var n = pa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function gc(e, t) {
  for (var n = pa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Hg(e) {
  return function() {
    hc(this, e);
  };
}
function zg(e) {
  return function() {
    gc(this, e);
  };
}
function Ig(e, t) {
  return function() {
    (t.apply(this, arguments) ? hc : gc)(this, e);
  };
}
function Rg(e, t) {
  var n = fc(e + "");
  if (arguments.length < 2) {
    for (var r = pa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ig : t ? Hg : zg)(n, t));
}
function jg() {
  this.textContent = "";
}
function Bg(e) {
  return function() {
    this.textContent = e;
  };
}
function Kg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Zg(e) {
  return arguments.length ? this.each(e == null ? jg : (typeof e == "function" ? Kg : Bg)(e)) : this.node().textContent;
}
function Yg() {
  this.innerHTML = "";
}
function Xg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Fg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function qg(e) {
  return arguments.length ? this.each(e == null ? Yg : (typeof e == "function" ? Fg : Xg)(e)) : this.node().innerHTML;
}
function Wg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Jg() {
  return this.each(Wg);
}
function Ug() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Gg() {
  return this.each(Ug);
}
function Qg(e) {
  var t = typeof e == "function" ? e : sc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ev() {
  return null;
}
function tv(e, t) {
  var n = typeof e == "function" ? e : sc(e), r = t == null ? ev : typeof t == "function" ? t : fa(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function nv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function rv() {
  return this.each(nv);
}
function ov() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function iv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function sv(e) {
  return this.select(e ? iv : ov);
}
function av(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function lv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function uv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function cv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function dv(e, t, n) {
  return function() {
    var r = this.__on, o, i = lv(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function fv(e, t, n) {
  var r = uv(e + ""), o, i = r.length, s;
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
  for (a = t ? dv : cv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function vc(e, t, n) {
  var r = dc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function pv(e, t) {
  return function() {
    return vc(this, e, t);
  };
}
function hv(e, t) {
  return function() {
    return vc(this, e, t.apply(this, arguments));
  };
}
function gv(e, t) {
  return this.each((typeof t == "function" ? hv : pv)(e, t));
}
function* vv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var mc = [null];
function Yt(e, t) {
  this._groups = e, this._parents = t;
}
function Ro() {
  return new Yt([[document.documentElement]], mc);
}
function mv() {
  return this;
}
Yt.prototype = Ro.prototype = {
  constructor: Yt,
  select: Kh,
  selectAll: Fh,
  selectChild: Uh,
  selectChildren: tg,
  filter: ng,
  data: lg,
  enter: rg,
  exit: cg,
  join: dg,
  merge: fg,
  selection: mv,
  order: pg,
  sort: hg,
  call: vg,
  nodes: mg,
  node: yg,
  size: wg,
  empty: bg,
  each: xg,
  attr: Pg,
  style: Og,
  property: Ag,
  classed: Rg,
  text: Zg,
  html: qg,
  raise: Jg,
  lower: Gg,
  append: Qg,
  insert: tv,
  remove: rv,
  clone: sv,
  datum: av,
  on: fv,
  dispatch: gv,
  [Symbol.iterator]: vv
};
function qt(e) {
  return typeof e == "string" ? new Yt([[document.querySelector(e)]], [document.documentElement]) : new Yt([[e]], mc);
}
function yv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function nn(e, t) {
  if (e = yv(e), t === void 0 && (t = e.currentTarget), t) {
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
const wv = { passive: !1 }, Co = { capture: !0, passive: !1 };
function ss(e) {
  e.stopImmediatePropagation();
}
function zr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function yc(e) {
  var t = e.document.documentElement, n = qt(e).on("dragstart.drag", zr, Co);
  "onselectstart" in t ? n.on("selectstart.drag", zr, Co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function wc(e, t) {
  var n = e.document.documentElement, r = qt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", zr, Co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ei = (e) => () => e;
function Ps(e, {
  sourceEvent: t,
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
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
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
Ps.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function bv(e) {
  return !e.ctrlKey && !e.button;
}
function xv() {
  return this.parentNode;
}
function Cv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function $v() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _v() {
  var e = bv, t = xv, n = Cv, r = $v, o = {}, i = Ki("start", "drag", "end"), s = 0, a, l, u, d, f = 0;
  function p(S) {
    S.on("mousedown.drag", h).filter(r).on("touchstart.drag", w).on("touchmove.drag", $, wv).on("touchend.drag touchcancel.drag", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(S, N) {
    if (!(d || !e.call(this, S, N))) {
      var E = x(this, t.call(this, S, N), S, N, "mouse");
      E && (qt(S.view).on("mousemove.drag", g, Co).on("mouseup.drag", y, Co), yc(S.view), ss(S), u = !1, a = S.clientX, l = S.clientY, E("start", S));
    }
  }
  function g(S) {
    if (zr(S), !u) {
      var N = S.clientX - a, E = S.clientY - l;
      u = N * N + E * E > f;
    }
    o.mouse("drag", S);
  }
  function y(S) {
    qt(S.view).on("mousemove.drag mouseup.drag", null), wc(S.view, u), zr(S), o.mouse("end", S);
  }
  function w(S, N) {
    if (e.call(this, S, N)) {
      var E = S.changedTouches, O = t.call(this, S, N), V = E.length, Z, W;
      for (Z = 0; Z < V; ++Z)
        (W = x(this, O, S, N, E[Z].identifier, E[Z])) && (ss(S), W("start", S, E[Z]));
    }
  }
  function $(S) {
    var N = S.changedTouches, E = N.length, O, V;
    for (O = 0; O < E; ++O)
      (V = o[N[O].identifier]) && (zr(S), V("drag", S, N[O]));
  }
  function C(S) {
    var N = S.changedTouches, E = N.length, O, V;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), O = 0; O < E; ++O)
      (V = o[N[O].identifier]) && (ss(S), V("end", S, N[O]));
  }
  function x(S, N, E, O, V, Z) {
    var W = i.copy(), I = nn(Z || E, N), k, _, b;
    if ((b = n.call(S, new Ps("beforestart", {
      sourceEvent: E,
      target: p,
      identifier: V,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), O)) != null)
      return k = b.x - I[0] || 0, _ = b.y - I[1] || 0, function M(T, R, K) {
        var Y = I, D;
        switch (T) {
          case "start":
            o[V] = M, D = s++;
            break;
          case "end":
            delete o[V], --s;
          // falls through
          case "drag":
            I = nn(K || R, N), D = s;
            break;
        }
        W.call(
          T,
          S,
          new Ps(T, {
            sourceEvent: R,
            subject: b,
            target: p,
            identifier: V,
            active: D,
            x: I[0] + k,
            y: I[1] + _,
            dx: I[0] - Y[0],
            dy: I[1] - Y[1],
            dispatch: W
          }),
          O
        );
      };
  }
  return p.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : ei(!!S), p) : e;
  }, p.container = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : ei(S), p) : t;
  }, p.subject = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : ei(S), p) : n;
  }, p.touchable = function(S) {
    return arguments.length ? (r = typeof S == "function" ? S : ei(!!S), p) : r;
  }, p.on = function() {
    var S = i.on.apply(i, arguments);
    return S === i ? p : S;
  }, p.clickDistance = function(S) {
    return arguments.length ? (f = (S = +S) * S, p) : Math.sqrt(f);
  }, p;
}
function ha(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function bc(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function jo() {
}
var $o = 0.7, bi = 1 / $o, Ir = "\\s*([+-]?\\d+)\\s*", _o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", kv = /^#([0-9a-f]{3,8})$/, Sv = new RegExp(`^rgb\\(${Ir},${Ir},${Ir}\\)$`), Ev = new RegExp(`^rgb\\(${$n},${$n},${$n}\\)$`), Pv = new RegExp(`^rgba\\(${Ir},${Ir},${Ir},${_o}\\)$`), Nv = new RegExp(`^rgba\\(${$n},${$n},${$n},${_o}\\)$`), Tv = new RegExp(`^hsl\\(${_o},${$n},${$n}\\)$`), Mv = new RegExp(`^hsla\\(${_o},${$n},${$n},${_o}\\)$`), fl = {
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
ha(jo, Cr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: pl,
  // Deprecated! Use color.formatHex.
  formatHex: pl,
  formatHex8: Ov,
  formatHsl: Lv,
  formatRgb: hl,
  toString: hl
});
function pl() {
  return this.rgb().formatHex();
}
function Ov() {
  return this.rgb().formatHex8();
}
function Lv() {
  return xc(this).formatHsl();
}
function hl() {
  return this.rgb().formatRgb();
}
function Cr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = kv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? gl(t) : n === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ti(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ti(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Sv.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = Ev.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Pv.exec(e)) ? ti(t[1], t[2], t[3], t[4]) : (t = Nv.exec(e)) ? ti(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Tv.exec(e)) ? yl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Mv.exec(e)) ? yl(t[1], t[2] / 100, t[3] / 100, t[4]) : fl.hasOwnProperty(e) ? gl(fl[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function gl(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ti(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ht(e, t, n, r);
}
function Dv(e) {
  return e instanceof jo || (e = Cr(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Ns(e, t, n, r) {
  return arguments.length === 1 ? Dv(e) : new Ht(e, t, n, r ?? 1);
}
function Ht(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ha(Ht, Ns, bc(jo, {
  brighter(e) {
    return e = e == null ? bi : Math.pow(bi, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(yr(this.r), yr(this.g), yr(this.b), xi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vl,
  // Deprecated! Use color.formatHex.
  formatHex: vl,
  formatHex8: Vv,
  formatRgb: ml,
  toString: ml
}));
function vl() {
  return `#${pr(this.r)}${pr(this.g)}${pr(this.b)}`;
}
function Vv() {
  return `#${pr(this.r)}${pr(this.g)}${pr(this.b)}${pr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ml() {
  const e = xi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${yr(this.r)}, ${yr(this.g)}, ${yr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function yr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function pr(e) {
  return e = yr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function yl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new on(e, t, n, r);
}
function xc(e) {
  if (e instanceof on) return new on(e.h, e.s, e.l, e.opacity);
  if (e instanceof jo || (e = Cr(e)), !e) return new on();
  if (e instanceof on) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new on(s, a, l, e.opacity);
}
function Av(e, t, n, r) {
  return arguments.length === 1 ? xc(e) : new on(e, t, n, r ?? 1);
}
function on(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ha(on, Av, bc(jo, {
  brighter(e) {
    return e = e == null ? bi : Math.pow(bi, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new on(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ht(
      as(e >= 240 ? e - 240 : e + 120, o, r),
      as(e, o, r),
      as(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new on(wl(this.h), ni(this.s), ni(this.l), xi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = xi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${wl(this.h)}, ${ni(this.s) * 100}%, ${ni(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function wl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ni(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function as(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ga = (e) => () => e;
function Hv(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function zv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Iv(e) {
  return (e = +e) == 1 ? Cc : function(t, n) {
    return n - t ? zv(t, n, e) : ga(isNaN(t) ? n : t);
  };
}
function Cc(e, t) {
  var n = t - e;
  return n ? Hv(e, n) : ga(isNaN(e) ? t : e);
}
const Ci = function e(t) {
  var n = Iv(t);
  function r(o, i) {
    var s = n((o = Ns(o)).r, (i = Ns(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Cc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Rv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function jv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Bv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = bo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Kv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function wn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Zv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = bo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Ts = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ls = new RegExp(Ts.source, "g");
function Yv(e) {
  return function() {
    return e;
  };
}
function Xv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $c(e, t) {
  var n = Ts.lastIndex = ls.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Ts.exec(e)) && (o = ls.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: wn(r, o) })), n = ls.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Xv(l[0].x) : Yv(t) : (t = l.length, function(u) {
    for (var d = 0, f; d < t; ++d) a[(f = l[d]).i] = f.x(u);
    return a.join("");
  });
}
function bo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ga(t) : (n === "number" ? wn : n === "string" ? (r = Cr(t)) ? (t = r, Ci) : $c : t instanceof Cr ? Ci : t instanceof Date ? Kv : jv(t) ? Rv : Array.isArray(t) ? Bv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Zv : wn)(e, t);
}
var bl = 180 / Math.PI, _c = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function kc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * bl,
    skewX: Math.atan(l) * bl,
    scaleX: s,
    scaleY: a
  };
}
var ri;
function Fv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? _c : kc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function qv(e) {
  return e == null || (ri || (ri = document.createElementNS("http://www.w3.org/2000/svg", "g")), ri.setAttribute("transform", e), !(e = ri.transform.baseVal.consolidate())) ? _c : (e = e.matrix, kc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Sc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push("translate(", null, t, null, n);
      g.push({ i: y - 4, x: wn(u, f) }, { i: y - 2, x: wn(d, p) });
    } else (f || p) && h.push("translate(" + f + t + p + n);
  }
  function s(u, d, f, p) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), p.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: wn(u, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function a(u, d, f, p) {
    u !== d ? p.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: wn(u, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function l(u, d, f, p, h, g) {
    if (u !== f || d !== p) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      g.push({ i: y - 4, x: wn(u, f) }, { i: y - 2, x: wn(d, p) });
    } else (f !== 1 || p !== 1) && h.push(o(h) + "scale(" + f + "," + p + ")");
  }
  return function(u, d) {
    var f = [], p = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, f, p), s(u.rotate, d.rotate, f, p), a(u.skewX, d.skewX, f, p), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, f, p), u = d = null, function(h) {
      for (var g = -1, y = p.length, w; ++g < y; ) f[(w = p[g]).i] = w.x(h);
      return f.join("");
    };
  };
}
var Wv = Sc(Fv, "px, ", "px)", "deg)"), Jv = Sc(qv, ", ", ")", ")"), Uv = 1e-12;
function xl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Gv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Qv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const ci = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], f = s[1], p = s[2], h = d - a, g = f - l, y = h * h + g * g, w, $;
    if (y < Uv)
      $ = Math.log(p / u) / t, w = function(O) {
        return [
          a + O * h,
          l + O * g,
          u * Math.exp(t * O * $)
        ];
      };
    else {
      var C = Math.sqrt(y), x = (p * p - u * u + r * y) / (2 * u * n * C), S = (p * p - u * u - r * y) / (2 * p * n * C), N = Math.log(Math.sqrt(x * x + 1) - x), E = Math.log(Math.sqrt(S * S + 1) - S);
      $ = (E - N) / t, w = function(O) {
        var V = O * $, Z = xl(N), W = u / (n * C) * (Z * Qv(t * V + N) - Gv(N));
        return [
          a + W * h,
          l + W * g,
          u * Z / xl(t * V + N)
        ];
      };
    }
    return w.duration = $ * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Ur = 0, go = 0, fo = 0, Ec = 1e3, $i, vo, _i = 0, $r = 0, Yi = 0, ko = typeof performance == "object" && performance.now ? performance : Date, Pc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function va() {
  return $r || (Pc(e1), $r = ko.now() + Yi);
}
function e1() {
  $r = 0;
}
function ki() {
  this._call = this._time = this._next = null;
}
ki.prototype = Nc.prototype = {
  constructor: ki,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? va() : +n) + (t == null ? 0 : +t), !this._next && vo !== this && (vo ? vo._next = this : $i = this, vo = this), this._call = e, this._time = n, Ms();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ms());
  }
};
function Nc(e, t, n) {
  var r = new ki();
  return r.restart(e, t, n), r;
}
function t1() {
  va(), ++Ur;
  for (var e = $i, t; e; )
    (t = $r - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ur;
}
function Cl() {
  $r = (_i = ko.now()) + Yi, Ur = go = 0;
  try {
    t1();
  } finally {
    Ur = 0, r1(), $r = 0;
  }
}
function n1() {
  var e = ko.now(), t = e - _i;
  t > Ec && (Yi -= t, _i = e);
}
function r1() {
  for (var e, t = $i, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : $i = n);
  vo = e, Ms(r);
}
function Ms(e) {
  if (!Ur) {
    go && (go = clearTimeout(go));
    var t = e - $r;
    t > 24 ? (e < 1 / 0 && (go = setTimeout(Cl, e - ko.now() - Yi)), fo && (fo = clearInterval(fo))) : (fo || (_i = ko.now(), fo = setInterval(n1, Ec)), Ur = 1, Pc(Cl));
  }
}
function $l(e, t, n) {
  var r = new ki();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var o1 = Ki("start", "end", "cancel", "interrupt"), i1 = [], Tc = 0, _l = 1, Os = 2, di = 3, kl = 4, Ls = 5, fi = 6;
function Xi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  s1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: o1,
    tween: i1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Tc
  });
}
function ma(e, t) {
  var n = fn(e, t);
  if (n.state > Tc) throw new Error("too late; already scheduled");
  return n;
}
function En(e, t) {
  var n = fn(e, t);
  if (n.state > di) throw new Error("too late; already running");
  return n;
}
function fn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function s1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Nc(i, 0, n.time);
  function i(u) {
    n.state = _l, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, f, p, h;
    if (n.state !== _l) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === di) return $l(s);
        h.state === kl ? (h.state = fi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = fi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if ($l(function() {
      n.state === di && (n.state = kl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Os, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Os) {
      for (n.state = di, o = new Array(p = n.tween.length), d = 0, f = -1; d < p; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Ls, 1), f = -1, p = o.length; ++f < p; )
      o[f].call(e, d);
    n.state === Ls && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = fi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function pi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Os && r.state < Ls, r.state = fi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function a1(e) {
  return this.each(function() {
    pi(this, e);
  });
}
function l1(e, t) {
  var n, r;
  return function() {
    var o = En(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function u1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = En(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === u && o.push(a);
    }
    i.tween = o;
  };
}
function c1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = fn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? l1 : u1)(n, e, t));
}
function ya(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = En(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return fn(o, r).value[t];
  };
}
function Mc(e, t) {
  var n;
  return (typeof t == "number" ? wn : t instanceof Cr ? Ci : (n = Cr(t)) ? (t = n, Ci) : $c)(e, t);
}
function d1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function f1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function p1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function h1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function g1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function v1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function m1(e, t) {
  var n = Zi(e), r = n === "transform" ? Jv : Mc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? v1 : g1)(n, r, ya(this, "attr." + e, t)) : t == null ? (n.local ? f1 : d1)(n) : (n.local ? h1 : p1)(n, r, t));
}
function y1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function w1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function b1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && w1(e, i)), n;
  }
  return o._value = t, o;
}
function x1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && y1(e, i)), n;
  }
  return o._value = t, o;
}
function C1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? b1 : x1)(r, t));
}
function $1(e, t) {
  return function() {
    ma(this, e).delay = +t.apply(this, arguments);
  };
}
function _1(e, t) {
  return t = +t, function() {
    ma(this, e).delay = t;
  };
}
function k1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? $1 : _1)(t, e)) : fn(this.node(), t).delay;
}
function S1(e, t) {
  return function() {
    En(this, e).duration = +t.apply(this, arguments);
  };
}
function E1(e, t) {
  return t = +t, function() {
    En(this, e).duration = t;
  };
}
function P1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? S1 : E1)(t, e)) : fn(this.node(), t).duration;
}
function N1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    En(this, e).ease = t;
  };
}
function T1(e) {
  var t = this._id;
  return arguments.length ? this.each(N1(t, e)) : fn(this.node(), t).ease;
}
function M1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    En(this, e).ease = n;
  };
}
function O1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(M1(this._id, e));
}
function L1(e) {
  typeof e != "function" && (e = lc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Hn(r, this._parents, this._name, this._id);
}
function D1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, f = s[a] = new Array(d), p, h = 0; h < d; ++h)
      (p = l[h] || u[h]) && (f[h] = p);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Hn(s, this._parents, this._name, this._id);
}
function V1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function A1(e, t, n) {
  var r, o, i = V1(t) ? ma : En;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function H1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? fn(this.node(), n).on.on(e) : this.each(A1(n, e, t));
}
function z1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function I1() {
  return this.on("end.remove", z1(this._id));
}
function R1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = fa(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, f, p = 0; p < l; ++p)
      (d = a[p]) && (f = e.call(d, d.__data__, p, a)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Xi(u[p], t, n, p, u, fn(d, n)));
  return new Hn(i, this._parents, t, n);
}
function j1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ac(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, f = 0; f < u; ++f)
      if (d = l[f]) {
        for (var p = e.call(d, d.__data__, f, l), h, g = fn(d, n), y = 0, w = p.length; y < w; ++y)
          (h = p[y]) && Xi(h, t, n, y, p, g);
        i.push(p), s.push(d);
      }
  return new Hn(i, s, t, n);
}
var B1 = Ro.prototype.constructor;
function K1() {
  return new B1(this._groups, this._parents);
}
function Z1(e, t) {
  var n, r, o;
  return function() {
    var i = Jr(this, e), s = (this.style.removeProperty(e), Jr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Oc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Y1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Jr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function X1(e, t, n) {
  var r, o, i;
  return function() {
    var s = Jr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Jr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function F1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = En(this, e), u = l.on, d = l.value[i] == null ? a || (a = Oc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function q1(e, t, n) {
  var r = (e += "") == "transform" ? Wv : Mc;
  return t == null ? this.styleTween(e, Z1(e, r)).on("end.style." + e, Oc(e)) : typeof t == "function" ? this.styleTween(e, X1(e, r, ya(this, "style." + e, t))).each(F1(this._id, e)) : this.styleTween(e, Y1(e, r, t), n).on("end.style." + e, null);
}
function W1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function J1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && W1(e, s, n)), r;
  }
  return i._value = t, i;
}
function U1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, J1(e, t, n ?? ""));
}
function G1(e) {
  return function() {
    this.textContent = e;
  };
}
function Q1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function e0(e) {
  return this.tween("text", typeof e == "function" ? Q1(ya(this, "text", e)) : G1(e == null ? "" : e + ""));
}
function t0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function n0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && t0(o)), t;
  }
  return r._value = e, r;
}
function r0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, n0(e));
}
function o0() {
  for (var e = this._name, t = this._id, n = Lc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = fn(l, t);
        Xi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Hn(r, this._parents, e, n);
}
function i0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = En(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var s0 = 0;
function Hn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Lc() {
  return ++s0;
}
var Nn = Ro.prototype;
Hn.prototype = {
  constructor: Hn,
  select: R1,
  selectAll: j1,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: L1,
  merge: D1,
  selection: K1,
  transition: o0,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: H1,
  attr: m1,
  attrTween: C1,
  style: q1,
  styleTween: U1,
  text: e0,
  textTween: r0,
  remove: I1,
  tween: c1,
  delay: k1,
  duration: P1,
  ease: T1,
  easeVarying: O1,
  end: i0,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function a0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var l0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: a0
};
function u0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function c0(e) {
  var t, n;
  e instanceof Hn ? (t = e._id, e = e._name) : (t = Lc(), (n = l0).time = va(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Xi(l, e, t, u, s, n || u0(l, t));
  return new Hn(r, this._parents, e, t);
}
Ro.prototype.interrupt = a1;
Ro.prototype.transition = c0;
const oi = (e) => () => e;
function d0(e, {
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
function Mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Mn.prototype = {
  constructor: Mn,
  scale: function(e) {
    return e === 1 ? this : new Mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Fi = new Mn(1, 0, 0);
Dc.prototype = Mn.prototype;
function Dc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Fi;
  return e.__zoom;
}
function us(e) {
  e.stopImmediatePropagation();
}
function po(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function f0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function p0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Sl() {
  return this.__zoom || Fi;
}
function h0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function g0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function v0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Vc() {
  var e = f0, t = p0, n = v0, r = h0, o = g0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = ci, u = Ki("start", "zoom", "end"), d, f, p, h = 500, g = 150, y = 0, w = 10;
  function $(b) {
    b.property("__zoom", Sl).on("wheel.zoom", V, { passive: !1 }).on("mousedown.zoom", Z).on("dblclick.zoom", W).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", _).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  $.transform = function(b, M, T, R) {
    var K = b.selection ? b.selection() : b;
    K.property("__zoom", Sl), b !== K ? N(b, M, T, R) : K.interrupt().each(function() {
      E(this, arguments).event(R).start().zoom(null, typeof M == "function" ? M.apply(this, arguments) : M).end();
    });
  }, $.scaleBy = function(b, M, T, R) {
    $.scaleTo(b, function() {
      var K = this.__zoom.k, Y = typeof M == "function" ? M.apply(this, arguments) : M;
      return K * Y;
    }, T, R);
  }, $.scaleTo = function(b, M, T, R) {
    $.transform(b, function() {
      var K = t.apply(this, arguments), Y = this.__zoom, D = T == null ? S(K) : typeof T == "function" ? T.apply(this, arguments) : T, J = Y.invert(D), F = typeof M == "function" ? M.apply(this, arguments) : M;
      return n(x(C(Y, F), D, J), K, s);
    }, T, R);
  }, $.translateBy = function(b, M, T, R) {
    $.transform(b, function() {
      return n(this.__zoom.translate(
        typeof M == "function" ? M.apply(this, arguments) : M,
        typeof T == "function" ? T.apply(this, arguments) : T
      ), t.apply(this, arguments), s);
    }, null, R);
  }, $.translateTo = function(b, M, T, R, K) {
    $.transform(b, function() {
      var Y = t.apply(this, arguments), D = this.__zoom, J = R == null ? S(Y) : typeof R == "function" ? R.apply(this, arguments) : R;
      return n(Fi.translate(J[0], J[1]).scale(D.k).translate(
        typeof M == "function" ? -M.apply(this, arguments) : -M,
        typeof T == "function" ? -T.apply(this, arguments) : -T
      ), Y, s);
    }, R, K);
  };
  function C(b, M) {
    return M = Math.max(i[0], Math.min(i[1], M)), M === b.k ? b : new Mn(M, b.x, b.y);
  }
  function x(b, M, T) {
    var R = M[0] - T[0] * b.k, K = M[1] - T[1] * b.k;
    return R === b.x && K === b.y ? b : new Mn(b.k, R, K);
  }
  function S(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function N(b, M, T, R) {
    b.on("start.zoom", function() {
      E(this, arguments).event(R).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(R).end();
    }).tween("zoom", function() {
      var K = this, Y = arguments, D = E(K, Y).event(R), J = t.apply(K, Y), F = T == null ? S(J) : typeof T == "function" ? T.apply(K, Y) : T, Q = Math.max(J[1][0] - J[0][0], J[1][1] - J[0][1]), z = K.__zoom, q = typeof M == "function" ? M.apply(K, Y) : M, U = l(z.invert(F).concat(Q / z.k), q.invert(F).concat(Q / q.k));
      return function(ne) {
        if (ne === 1) ne = q;
        else {
          var re = U(ne), ee = Q / re[2];
          ne = new Mn(ee, F[0] - re[0] * ee, F[1] - re[1] * ee);
        }
        D.zoom(null, ne);
      };
    });
  }
  function E(b, M, T) {
    return !T && b.__zooming || new O(b, M);
  }
  function O(b, M) {
    this.that = b, this.args = M, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, M), this.taps = 0;
  }
  O.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, M) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = M.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = M.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = M.invert(this.touch1[0])), this.that.__zoom = M, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var M = qt(this.that).datum();
      u.call(
        b,
        this.that,
        new d0(b, {
          sourceEvent: this.sourceEvent,
          target: $,
          transform: this.that.__zoom,
          dispatch: u
        }),
        M
      );
    }
  };
  function V(b, ...M) {
    if (!e.apply(this, arguments)) return;
    var T = E(this, M).event(b), R = this.__zoom, K = Math.max(i[0], Math.min(i[1], R.k * Math.pow(2, r.apply(this, arguments)))), Y = nn(b);
    if (T.wheel)
      (T.mouse[0][0] !== Y[0] || T.mouse[0][1] !== Y[1]) && (T.mouse[1] = R.invert(T.mouse[0] = Y)), clearTimeout(T.wheel);
    else {
      if (R.k === K) return;
      T.mouse = [Y, R.invert(Y)], pi(this), T.start();
    }
    po(b), T.wheel = setTimeout(D, g), T.zoom("mouse", n(x(C(R, K), T.mouse[0], T.mouse[1]), T.extent, s));
    function D() {
      T.wheel = null, T.end();
    }
  }
  function Z(b, ...M) {
    if (p || !e.apply(this, arguments)) return;
    var T = b.currentTarget, R = E(this, M, !0).event(b), K = qt(b.view).on("mousemove.zoom", F, !0).on("mouseup.zoom", Q, !0), Y = nn(b, T), D = b.clientX, J = b.clientY;
    yc(b.view), us(b), R.mouse = [Y, this.__zoom.invert(Y)], pi(this), R.start();
    function F(z) {
      if (po(z), !R.moved) {
        var q = z.clientX - D, U = z.clientY - J;
        R.moved = q * q + U * U > y;
      }
      R.event(z).zoom("mouse", n(x(R.that.__zoom, R.mouse[0] = nn(z, T), R.mouse[1]), R.extent, s));
    }
    function Q(z) {
      K.on("mousemove.zoom mouseup.zoom", null), wc(z.view, R.moved), po(z), R.event(z).end();
    }
  }
  function W(b, ...M) {
    if (e.apply(this, arguments)) {
      var T = this.__zoom, R = nn(b.changedTouches ? b.changedTouches[0] : b, this), K = T.invert(R), Y = T.k * (b.shiftKey ? 0.5 : 2), D = n(x(C(T, Y), R, K), t.apply(this, M), s);
      po(b), a > 0 ? qt(this).transition().duration(a).call(N, D, R, b) : qt(this).call($.transform, D, R, b);
    }
  }
  function I(b, ...M) {
    if (e.apply(this, arguments)) {
      var T = b.touches, R = T.length, K = E(this, M, b.changedTouches.length === R).event(b), Y, D, J, F;
      for (us(b), D = 0; D < R; ++D)
        J = T[D], F = nn(J, this), F = [F, this.__zoom.invert(F), J.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== F[2] && (K.touch1 = F, K.taps = 0) : (K.touch0 = F, Y = !0, K.taps = 1 + !!d);
      d && (d = clearTimeout(d)), Y && (K.taps < 2 && (f = F[0], d = setTimeout(function() {
        d = null;
      }, h)), pi(this), K.start());
    }
  }
  function k(b, ...M) {
    if (this.__zooming) {
      var T = E(this, M).event(b), R = b.changedTouches, K = R.length, Y, D, J, F;
      for (po(b), Y = 0; Y < K; ++Y)
        D = R[Y], J = nn(D, this), T.touch0 && T.touch0[2] === D.identifier ? T.touch0[0] = J : T.touch1 && T.touch1[2] === D.identifier && (T.touch1[0] = J);
      if (D = T.that.__zoom, T.touch1) {
        var Q = T.touch0[0], z = T.touch0[1], q = T.touch1[0], U = T.touch1[1], ne = (ne = q[0] - Q[0]) * ne + (ne = q[1] - Q[1]) * ne, re = (re = U[0] - z[0]) * re + (re = U[1] - z[1]) * re;
        D = C(D, Math.sqrt(ne / re)), J = [(Q[0] + q[0]) / 2, (Q[1] + q[1]) / 2], F = [(z[0] + U[0]) / 2, (z[1] + U[1]) / 2];
      } else if (T.touch0) J = T.touch0[0], F = T.touch0[1];
      else return;
      T.zoom("touch", n(x(D, J, F), T.extent, s));
    }
  }
  function _(b, ...M) {
    if (this.__zooming) {
      var T = E(this, M).event(b), R = b.changedTouches, K = R.length, Y, D;
      for (us(b), p && clearTimeout(p), p = setTimeout(function() {
        p = null;
      }, h), Y = 0; Y < K; ++Y)
        D = R[Y], T.touch0 && T.touch0[2] === D.identifier ? delete T.touch0 : T.touch1 && T.touch1[2] === D.identifier && delete T.touch1;
      if (T.touch1 && !T.touch0 && (T.touch0 = T.touch1, delete T.touch1), T.touch0) T.touch0[1] = this.__zoom.invert(T.touch0[0]);
      else if (T.end(), T.taps === 2 && (D = nn(D, this), Math.hypot(f[0] - D[0], f[1] - D[1]) < w)) {
        var J = qt(this).on("dblclick.zoom");
        J && J.apply(this, arguments);
      }
    }
  }
  return $.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : oi(+b), $) : r;
  }, $.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : oi(!!b), $) : e;
  }, $.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : oi(!!b), $) : o;
  }, $.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : oi([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), $) : t;
  }, $.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], $) : [i[0], i[1]];
  }, $.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], $) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, $.constrain = function(b) {
    return arguments.length ? (n = b, $) : n;
  }, $.duration = function(b) {
    return arguments.length ? (a = +b, $) : a;
  }, $.interpolate = function(b) {
    return arguments.length ? (l = b, $) : l;
  }, $.on = function() {
    var b = u.on.apply(u, arguments);
    return b === u ? $ : b;
  }, $.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, $) : Math.sqrt(y);
  }, $.tapDistance = function(b) {
    return arguments.length ? (w = +b, $) : w;
  }, $;
}
const So = {
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
}, Ds = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Ac = ["Enter", " ", "Escape"], m0 = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
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
var Gr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Gr || (Gr = {}));
var wr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(wr || (wr = {}));
var Si;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Si || (Si = {}));
const Vs = {
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
var Tn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Tn || (Tn = {}));
var Eo;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Eo || (Eo = {}));
var $e;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})($e || ($e = {}));
const El = {
  [$e.Left]: $e.Right,
  [$e.Right]: $e.Left,
  [$e.Top]: $e.Bottom,
  [$e.Bottom]: $e.Top
};
function y0(e, t) {
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
function Pl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function w0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Hc = (e) => "id" in e && "source" in e && "target" in e, b0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), wa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Bo = (e, t = [0, 0]) => {
  const { width: n, height: r } = lr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, x0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : wa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ei(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return qi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Wi(n);
}, Ko = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Ei(r);
      n = qi(n, o);
    }
  }), Wi(n);
}, ba = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Yo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: f = !0, hidden: p = !1 } = u;
    if (s && !f || p)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, g = d.height ?? u.height ?? u.initialHeight ?? null, y = Po(a, eo(u)), w = (h ?? 0) * (g ?? 0), $ = i && y > 0;
    (!u.internals.handleBounds || $ || y >= w || u.dragging) && l.push(u);
  }
  return l;
}, C0 = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function $0(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function _0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = $0(e, s), l = Ko(a), u = xa(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function zc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", So.error005());
    else {
      const h = a.measured.width, g = a.measured.height;
      h && g && (f = [
        [l, u],
        [l + h, u + g]
      ]);
    }
  else a && to(s.extent) && (f = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const p = to(f) ? _r(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", So.error015()), {
    position: {
      x: p.x - l + (s.measured.width ?? 0) * d[0],
      y: p.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: p
  };
}
async function k0({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const p = i.has(f.id), h = !p && f.parentId && s.find((g) => g.id === f.parentId);
    (p || h) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), u = C0(s, l);
  for (const f of l)
    a.has(f.id) && !u.find((p) => p.id === f.id) && u.push(f);
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
const Qr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), _r = (e = { x: 0, y: 0 }, t, n) => ({
  x: Qr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Qr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Ic(e, t, n) {
  const { width: r, height: o } = lr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return _r(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Nl = (e, t, n) => e < t ? Qr(Math.abs(e - t), 1, t) / t : e > n ? -Qr(Math.abs(e - n), 1, t) / t : 0, Rc = (e, t, n = 15, r = 40) => {
  const o = Nl(e.x, r, t.width - r) * n, i = Nl(e.y, r, t.height - r) * n;
  return [o, i];
}, qi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), As = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Wi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), eo = (e, t = [0, 0]) => {
  const { x: n, y: r } = wa(e) ? e.internals.positionAbsolute : Bo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Ei = (e, t = [0, 0]) => {
  const { x: n, y: r } = wa(e) ? e.internals.positionAbsolute : Bo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, jc = (e, t) => Wi(qi(As(e), As(t))), Po = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Tl = (e) => On(e.width) && On(e.height) && On(e.x) && On(e.y), On = (e) => !isNaN(e) && isFinite(e), S0 = (e, t) => {
}, Zo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Yo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Zo(a, s) : a;
}, Pi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Dr(e, t) {
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
function E0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Dr(e, n), o = Dr(e, t);
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
    const r = Dr(e.top ?? e.y ?? 0, n), o = Dr(e.bottom ?? e.y ?? 0, n), i = Dr(e.left ?? e.x ?? 0, t), s = Dr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function P0(e, t, n, r, o, i) {
  const { x: s, y: a } = Pi(e, [t, n, r]), { x: l, y: u } = Pi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, f = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const xa = (e, t, n, r, o, i) => {
  const s = E0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Qr(u, r, o), f = e.x + e.width / 2, p = e.y + e.height / 2, h = t / 2 - f * d, g = n / 2 - p * d, y = P0(e, h, g, d, t, n), w = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - w.left + w.right,
    y: g - w.top + w.bottom,
    zoom: d
  };
}, hr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function to(e) {
  return e != null && e !== "parent";
}
function lr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Bc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function N0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function T0(e) {
  return { ...m0, ...e || {} };
}
function cs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = sn(e), a = Yo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Zo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Kc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Zc = (e) => e?.getRootNode?.() || window?.document, M0 = ["INPUT", "SELECT", "TEXTAREA"];
function Yc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : M0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Xc = (e) => "clientX" in e, sn = (e, t) => {
  const n = Xc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Ml = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...Kc(s)
    };
  });
};
function O0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), f = Math.abs(u - t);
  return [l, u, d, f];
}
function ii(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ol({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case $e.Left:
      return [t - ii(t - r, i), n];
    case $e.Right:
      return [t + ii(r - t, i), n];
    case $e.Top:
      return [t, n - ii(n - o, i)];
    case $e.Bottom:
      return [t, n + ii(o - n, i)];
  }
}
function Fc({ sourceX: e, sourceY: t, sourcePosition: n = $e.Bottom, targetX: r, targetY: o, targetPosition: i = $e.Top, curvature: s = 0.25 }) {
  const [a, l] = Ol({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ol({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, p, h, g] = O0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${u},${d} ${r},${o}`,
    f,
    p,
    h,
    g
  ];
}
function qc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function L0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function D0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = qi(Ei(e), Ei(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Po(s, Wi(i)) > 0;
}
const V0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, A0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), H0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Hc(e) ? n = { ...e } : n = {
    ...e,
    id: V0(e)
  }, A0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Wc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = qc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ll = {
  [$e.Left]: { x: -1, y: 0 },
  [$e.Right]: { x: 1, y: 0 },
  [$e.Top]: { x: 0, y: -1 },
  [$e.Bottom]: { x: 0, y: 1 }
}, z0 = ({ source: e, sourcePosition: t = $e.Bottom, target: n }) => t === $e.Left || t === $e.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Dl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function I0({ source: e, sourcePosition: t = $e.Bottom, target: n, targetPosition: r = $e.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ll[t], l = Ll[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, f = z0({
    source: u,
    sourcePosition: t,
    target: d
  }), p = f.x !== 0 ? "x" : "y", h = f[p];
  let g = [], y, w;
  const $ = { x: 0, y: 0 }, C = { x: 0, y: 0 }, [, , x, S] = qc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[p] * l[p] === -1) {
    p === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, w = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, w = o.y ?? u.y + (d.y - u.y) * s);
    const N = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], E = [
      { x: u.x, y: w },
      { x: d.x, y: w }
    ];
    a[p] === h ? g = p === "x" ? N : E : g = p === "x" ? E : N;
  } else {
    const N = [{ x: u.x, y: d.y }], E = [{ x: d.x, y: u.y }];
    if (p === "x" ? g = a.x === h ? E : N : g = a.y === h ? N : E, t === r) {
      const I = Math.abs(e[p] - n[p]);
      if (I <= i) {
        const k = Math.min(i - 1, i - I);
        a[p] === h ? $[p] = (u[p] > e[p] ? -1 : 1) * k : C[p] = (d[p] > n[p] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const I = p === "x" ? "y" : "x", k = a[p] === l[I], _ = u[I] > d[I], b = u[I] < d[I];
      (a[p] === 1 && (!k && _ || k && b) || a[p] !== 1 && (!k && b || k && _)) && (g = p === "x" ? N : E);
    }
    const O = { x: u.x + $.x, y: u.y + $.y }, V = { x: d.x + C.x, y: d.y + C.y }, Z = Math.max(Math.abs(O.x - g[0].x), Math.abs(V.x - g[0].x)), W = Math.max(Math.abs(O.y - g[0].y), Math.abs(V.y - g[0].y));
    Z >= W ? (y = (O.x + V.x) / 2, w = g[0].y) : (y = g[0].x, w = (O.y + V.y) / 2);
  }
  return [[
    e,
    { x: u.x + $.x, y: u.y + $.y },
    ...g,
    { x: d.x + C.x, y: d.y + C.y },
    n
  ], y, w, x, S];
}
function R0(e, t, n, r) {
  const o = Math.min(Dl(e, t) / 2, Dl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function Ca({ sourceX: e, sourceY: t, sourcePosition: n = $e.Bottom, targetX: r, targetY: o, targetPosition: i = $e.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [f, p, h, g, y] = I0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [f.reduce((w, $, C) => {
    let x = "";
    return C > 0 && C < f.length - 1 ? x = R0(f[C - 1], $, f[C + 1], s) : x = `${C === 0 ? "M" : "L"}${$.x} ${$.y}`, w += x, w;
  }, ""), p, h, g, y];
}
function Vl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function j0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!Vl(t) || !Vl(n))
    return null;
  const r = t.internals.handleBounds || Al(t.handles), o = n.internals.handleBounds || Al(n.handles), i = Hl(r?.source ?? [], e.sourceHandle), s = Hl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Gr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", So.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || $e.Bottom, l = s?.position || $e.Top, u = No(t, i, a), d = No(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Al(e) {
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
function No(e, t, n = $e.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? lr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case $e.Top:
      return { x: o + s / 2, y: i };
    case $e.Right:
      return { x: o + s, y: i + a / 2 };
    case $e.Bottom:
      return { x: o + s / 2, y: i + a };
    case $e.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Hl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Hs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function B0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Hs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function K0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case $e.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case $e.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case $e.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const $a = {
  nodeOrigin: [0, 0],
  nodeExtent: Ds,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Z0 = {
  ...$a,
  checkEquality: !0
};
function _a(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Y0(e, t, n) {
  const r = _a($a, n);
  for (const o of e.values())
    if (o.parentId)
      ka(o, e, t, r);
    else {
      const i = Bo(o, r.nodeOrigin), s = to(o.extent) ? o.extent : r.nodeExtent, a = _r(i, s, lr(o));
      o.internals.positionAbsolute = a;
    }
}
function X0(e, t) {
  if (!e.handles)
    return e.measured ? t?.internals.handleBounds : void 0;
  const n = [], r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
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
function F0(e, t, n, r) {
  const o = _a(Z0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = Bo(l, o.nodeOrigin), f = to(l.extent) ? l.extent : o.nodeExtent, p = _r(d, f, lr(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: p,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: X0(l, u),
          z: Jc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && ka(u, t, n, r);
  }
  return i;
}
function q0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ka(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = _a($a, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  q0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: f, z: p } = W0(e, l, i, s, u), { positionAbsolute: h } = e.internals, g = d !== h.x || f !== h.y;
  (g || p !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: g ? { x: d, y: f } : h,
      z: p
    }
  });
}
function Jc(e, t) {
  return (On(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function W0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = lr(e), l = Bo(e, n), u = to(e.extent) ? _r(l, e.extent, a) : l;
  let d = _r({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Ic(d, a, t));
  const f = Jc(e, o), p = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: p >= f ? p + 1 : f
  };
}
function J0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? eo(a), u = jc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = lr(a), f = a.origin ?? r, p = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, g = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), w = (g - d.width) * f[0], $ = (y - d.height) * f[1];
    (p > 0 || h > 0 || w || $) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - p + w,
        y: a.position.y - h + $
      }
    }), n.get(l)?.forEach((C) => {
      e.some((x) => x.id === C.id) || o.push({
        id: C.id,
        type: "position",
        position: {
          x: C.position.x + p,
          y: C.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || p || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: g + (p ? f[0] * p - w : 0),
        height: y + (h ? f[1] * h - $ : 0)
      }
    });
  }), o;
}
function U0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), f = [];
  for (const p of e.values()) {
    const h = t.get(p.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const g = Kc(p.nodeElement), y = h.measured.width !== g.width || h.measured.height !== g.height;
    if (g.width && g.height && (y || !h.internals.handleBounds || p.force)) {
      const w = p.nodeElement.getBoundingClientRect(), $ = to(h.extent) ? h.extent : i;
      let { positionAbsolute: C } = h.internals;
      h.parentId && h.extent === "parent" ? C = Ic(C, g, t.get(h.parentId)) : $ && (C = _r(C, $, g));
      const x = {
        ...h,
        measured: g,
        internals: {
          ...h.internals,
          positionAbsolute: C,
          handleBounds: {
            source: Ml("source", p.nodeElement, w, d, h.id),
            target: Ml("target", p.nodeElement, w, d, h.id)
          }
        }
      };
      t.set(h.id, x), h.parentId && ka(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: g
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: eo(x, o)
      }));
    }
  }
  if (f.length > 0) {
    const p = J0(f, t, n, o);
    l.push(...p);
  }
  return { changes: l, updatedInternals: a };
}
async function G0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function zl(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Q0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    zl("source", l, d, e, o, s), zl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function em(e, t) {
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
function Uc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Uc(n, t) : !1;
}
function Il(e, t, n) {
  let r = e;
  do {
    if (r?.matches?.(t))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function tm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Uc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
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
function ds({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function nm({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Zo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function rm({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, f = !1, p = null, h = !1, g = !1, y = null;
  function w({ noDragClassName: C, handleSelector: x, domNode: S, isSelectable: N, nodeId: E, nodeClickDistance: O = 0 }) {
    p = qt(S);
    function V({ x: k, y: _ }) {
      const { nodeLookup: b, nodeExtent: M, snapGrid: T, snapToGrid: R, nodeOrigin: K, onNodeDrag: Y, onSelectionDrag: D, onError: J, updateNodePositions: F } = t();
      i = { x: k, y: _ };
      let Q = !1;
      const z = a.size > 1, q = z && M ? As(Ko(a)) : null, U = z && R ? nm({
        dragItems: a,
        snapGrid: T,
        x: k,
        y: _
      }) : null;
      for (const [ne, re] of a) {
        if (!b.has(ne))
          continue;
        let ee = { x: k - re.distance.x, y: _ - re.distance.y };
        R && (ee = U ? {
          x: Math.round(ee.x + U.x),
          y: Math.round(ee.y + U.y)
        } : Zo(ee, T));
        let ge = null;
        if (z && M && !re.extent && q) {
          const { positionAbsolute: se } = re.internals, ve = se.x - q.x + M[0][0], me = se.x + re.measured.width - q.x2 + M[1][0], xe = se.y - q.y + M[0][1], de = se.y + re.measured.height - q.y2 + M[1][1];
          ge = [
            [ve, xe],
            [me, de]
          ];
        }
        const { position: ce, positionAbsolute: ie } = zc({
          nodeId: ne,
          nextPosition: ee,
          nodeLookup: b,
          nodeExtent: ge || M,
          nodeOrigin: K,
          onError: J
        });
        Q = Q || re.position.x !== ce.x || re.position.y !== ce.y, re.position = ce, re.internals.positionAbsolute = ie;
      }
      if (g = g || Q, !!Q && (F(a, !0), y && (r || Y || !E && D))) {
        const [ne, re] = ds({
          nodeId: E,
          dragItems: a,
          nodeLookup: b
        });
        r?.(y, a, ne, re), Y?.(y, ne, re), E || D?.(y, re);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: k, panBy: _, autoPanSpeed: b, autoPanOnNodeDrag: M } = t();
      if (!M) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [T, R] = Rc(u, d, b);
      (T !== 0 || R !== 0) && (i.x = (i.x ?? 0) - T / k[2], i.y = (i.y ?? 0) - R / k[2], await _({ x: T, y: R }) && V(i)), s = requestAnimationFrame(Z);
    }
    function W(k) {
      const { nodeLookup: _, multiSelectionActive: b, nodesDraggable: M, transform: T, snapGrid: R, snapToGrid: K, selectNodesOnDrag: Y, onNodeDragStart: D, onSelectionDragStart: J, unselectNodesAndEdges: F } = t();
      f = !0, (!Y || !N) && !b && E && (_.get(E)?.selected || F()), N && Y && E && e?.(E);
      const Q = cs(k.sourceEvent, { transform: T, snapGrid: R, snapToGrid: K, containerBounds: d });
      if (i = Q, a = tm(_, M, Q, E), a.size > 0 && (n || D || !E && J)) {
        const [z, q] = ds({
          nodeId: E,
          dragItems: a,
          nodeLookup: _
        });
        n?.(k.sourceEvent, a, z, q), D?.(k.sourceEvent, z, q), E || J?.(k.sourceEvent, q);
      }
    }
    const I = _v().clickDistance(O).on("start", (k) => {
      const { domNode: _, nodeDragThreshold: b, transform: M, snapGrid: T, snapToGrid: R } = t();
      d = _?.getBoundingClientRect() || null, h = !1, g = !1, y = k.sourceEvent, b === 0 && W(k), i = cs(k.sourceEvent, { transform: M, snapGrid: T, snapToGrid: R, containerBounds: d }), u = sn(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: _, transform: b, snapGrid: M, snapToGrid: T, nodeDragThreshold: R, nodeLookup: K } = t(), Y = cs(k.sourceEvent, { transform: b, snapGrid: M, snapToGrid: T, containerBounds: d });
      if (y = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      E && !K.has(E)) && (h = !0), !h) {
        if (!l && _ && f && (l = !0, Z()), !f) {
          const D = sn(k.sourceEvent, d), J = D.x - u.x, F = D.y - u.y;
          Math.sqrt(J * J + F * F) > R && W(k);
        }
        (i.x !== Y.xSnapped || i.y !== Y.ySnapped) && a && f && (u = sn(k.sourceEvent, d), V(Y));
      }
    }).on("end", (k) => {
      if (!(!f || h) && (l = !1, f = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: _, updateNodePositions: b, onNodeDragStop: M, onSelectionDragStop: T } = t();
        if (g && (b(a, !1), g = !1), o || M || !E && T) {
          const [R, K] = ds({
            nodeId: E,
            dragItems: a,
            nodeLookup: _,
            dragging: !1
          });
          o?.(k.sourceEvent, a, R, K), M?.(k.sourceEvent, R, K), E || T?.(k.sourceEvent, K);
        }
      }
    }).filter((k) => {
      const _ = k.target;
      return !k.button && (!C || !Il(_, `.${C}`, S)) && (!x || Il(_, x, S));
    });
    p.call(I);
  }
  function $() {
    p?.on(".drag", null);
  }
  return {
    update: w,
    destroy: $
  };
}
function om(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Po(o, eo(i)) > 0 && r.push(i);
  return r;
}
const im = 250;
function sm(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = om(e, n, t + im);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: f } = No(a, u, u.position, !0), p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(f - e.y, 2));
      p > t || (p < i ? (o = [{ ...u, x: d, y: f }], i = p) : p === i && o.push({ ...u, x: d, y: f }));
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
function Gc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...No(s, l, l.position, !0) } : l;
}
function Qc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function am(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ed = () => !0;
function lm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: f, panBy: p, cancelConnection: h, onConnectStart: g, onConnect: y, onConnectEnd: w, isValidConnection: $ = ed, onReconnectEnd: C, updateConnection: x, getTransform: S, getFromHandle: N, autoPanSpeed: E, dragThreshold: O = 1, handleDomNode: V }) {
  const Z = Zc(e.target);
  let W = 0, I;
  const { x: k, y: _ } = sn(e), b = Qc(i, V), M = a?.getBoundingClientRect();
  let T = !1;
  if (!M || !b)
    return;
  const R = Gc(o, b, r, l, t);
  if (!R)
    return;
  let K = sn(e, M), Y = !1, D = null, J = !1, F = null;
  function Q() {
    if (!d || !M)
      return;
    const [ge, ce] = Rc(K, M, E);
    p({ x: ge, y: ce }), W = requestAnimationFrame(Q);
  }
  const z = {
    ...R,
    nodeId: o,
    type: b,
    position: R.position
  }, q = l.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: No(q, z, $e.Left, !0),
    fromHandle: z,
    fromPosition: z.position,
    fromNode: q,
    to: K,
    toHandle: null,
    toPosition: El[z.position],
    toNode: null
  };
  function ne() {
    T = !0, x(U), g?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  O === 0 && ne();
  function re(ge) {
    if (!T) {
      const { x: ve, y: me } = sn(ge), xe = ve - k, de = me - _;
      if (!(xe * xe + de * de > O * O))
        return;
      ne();
    }
    if (!N() || !z) {
      ee(ge);
      return;
    }
    const ce = S();
    K = sn(ge, M), I = sm(Yo(K, ce, !1, [1, 1]), n, l, z), Y || (Q(), Y = !0);
    const ie = td(ge, {
      handle: I,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: $,
      doc: Z,
      lib: u,
      flowId: f,
      nodeLookup: l
    });
    F = ie.handleDomNode, D = ie.connection, J = am(!!I, ie.isValid);
    const se = {
      // from stays the same
      ...U,
      isValid: J,
      to: ie.toHandle && J ? Pi({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : K,
      toHandle: ie.toHandle,
      toPosition: J && ie.toHandle ? ie.toHandle.position : El[z.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null
    };
    J && I && U.toHandle && se.toHandle && U.toHandle.type === se.toHandle.type && U.toHandle.nodeId === se.toHandle.nodeId && U.toHandle.id === se.toHandle.id && U.to.x === se.to.x && U.to.y === se.to.y || (x(se), U = se);
  }
  function ee(ge) {
    if (!("touches" in ge && ge.touches.length > 0)) {
      if (T) {
        (I || F) && D && J && y?.(D);
        const { inProgress: ce, ...ie } = U, se = {
          ...ie,
          toPosition: U.toHandle ? U.toPosition : null
        };
        w?.(ge, se), i && C?.(ge, se);
      }
      h(), cancelAnimationFrame(W), Y = !1, J = !1, D = null, F = null, Z.removeEventListener("mousemove", re), Z.removeEventListener("mouseup", ee), Z.removeEventListener("touchmove", re), Z.removeEventListener("touchend", ee);
    }
  }
  Z.addEventListener("mousemove", re), Z.addEventListener("mouseup", ee), Z.addEventListener("touchmove", re), Z.addEventListener("touchend", ee);
}
function td(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ed, nodeLookup: d }) {
  const f = i === "target", p = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: g } = sn(e), y = s.elementFromPoint(h, g), w = y?.classList.contains(`${a}-flow__handle`) ? y : p, $ = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const C = Qc(void 0, w), x = w.getAttribute("data-nodeid"), S = w.getAttribute("data-handleid"), N = w.classList.contains("connectable"), E = w.classList.contains("connectableend");
    if (!x || !C)
      return $;
    const O = {
      source: f ? x : r,
      sourceHandle: f ? S : o,
      target: f ? r : x,
      targetHandle: f ? o : S
    };
    $.connection = O;
    const V = N && E && (n === Gr.Strict ? f && C === "source" || !f && C === "target" : x !== r || S !== o);
    $.isValid = V && u(O), $.toHandle = Gc(x, C, S, d, n, !0);
  }
  return $;
}
const Rl = {
  onPointerDown: lm,
  isValid: td
};
function um({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: f = !0, zoomable: p = !0, inversePan: h = !1 }) {
    const g = (x) => {
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const S = n(), N = x.sourceEvent.ctrlKey && hr() ? 10 : 1, E = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, O = S[2] * Math.pow(2, E * N);
      t.scaleTo(O);
    };
    let y = [0, 0];
    const w = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, $ = (x) => {
      const S = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const N = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], E = [N[0] - y[0], N[1] - y[1]];
      y = N;
      const O = r() * Math.max(S[2], Math.log(S[2])) * (h ? -1 : 1), V = {
        x: S[0] - E[0] * O,
        y: S[1] - E[1] * O
      }, Z = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: V.x,
        y: V.y,
        zoom: S[2]
      }, Z, a);
    }, C = Vc().on("start", w).on("zoom", f ? $ : null).on("zoom.wheel", p ? g : null);
    o.call(C, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: nn
  };
}
const cm = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ji = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), fs = ({ x: e, y: t, zoom: n }) => Fi.translate(e, t).scale(n), Vr = (e, t) => e.target.closest(`.${t}`), nd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), dm = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, ps = (e, t = 0, n = dm, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, rd = (e) => {
  const t = e.ctrlKey && hr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function fm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Vr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const w = nn(d), $ = rd(d), C = f * Math.pow(2, $);
      r.scaleTo(n, C, w, d);
      return;
    }
    const p = d.deltaMode === 1 ? 20 : 1;
    let h = o === wr.Vertical ? 0 : d.deltaX * p, g = o === wr.Horizontal ? 0 : d.deltaY * p;
    !hr() && d.shiftKey && o !== wr.Vertical && (h = d.deltaY * p, g = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(g / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Ji(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function pm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Vr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function hm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ji(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function gm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && nd(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ji(i.transform));
  };
}
function vm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && nd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && cm(e.prevViewport, s.transform))) {
      const a = Ji(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function mm({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (f) => {
    const p = e || t, h = n && f.ctrlKey, g = f.type === "wheel";
    if (f.button === 1 && f.type === "mousedown" && (Vr(f, `${u}-flow__node`) || Vr(f, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || d && !g || Vr(f, a) && g || Vr(f, l) && (!g || o && g && !e) || !n && f.ctrlKey && g)
      return !1;
    if (!n && f.type === "touchstart" && f.touches?.length > 1)
      return f.preventDefault(), !1;
    if (!p && !o && !h && g || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const y = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || g) && y;
  };
}
function ym({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), p = Vc().clickDistance(!On(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = qt(e).call(p);
  x({
    x: i.x,
    y: i.y,
    zoom: Qr(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const g = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  p.wheelDelta(rd);
  function w(k, _) {
    return h ? new Promise((b) => {
      p?.interpolate(_?.interpolate === "linear" ? bo : ci).transform(ps(h, _?.duration, _?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function $({ noWheelClassName: k, noPanClassName: _, onPaneContextMenu: b, userSelectionActive: M, panOnScroll: T, panOnDrag: R, panOnScrollMode: K, panOnScrollSpeed: Y, preventScrolling: D, zoomOnPinch: J, zoomOnScroll: F, zoomOnDoubleClick: Q, zoomActivationKeyPressed: z, lib: q, onTransformChange: U, connectionInProgress: ne }) {
    M && !d.isZoomingOrPanning && C();
    const re = T && !z && !M ? fm({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: h,
      d3Zoom: p,
      panOnScrollMode: K,
      panOnScrollSpeed: Y,
      zoomOnPinch: J,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : pm({
      noWheelClassName: k,
      preventScrolling: D,
      d3ZoomHandler: g
    });
    if (h.on("wheel.zoom", re, { passive: !1 }), !M) {
      const ge = hm({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      p.on("start", ge);
      const ce = gm({
        zoomPanValues: d,
        panOnDrag: R,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: U
      });
      p.on("zoom", ce);
      const ie = vm({
        zoomPanValues: d,
        panOnDrag: R,
        panOnScroll: T,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      p.on("end", ie);
    }
    const ee = mm({
      zoomActivationKeyPressed: z,
      panOnDrag: R,
      zoomOnScroll: F,
      panOnScroll: T,
      zoomOnDoubleClick: Q,
      zoomOnPinch: J,
      userSelectionActive: M,
      noPanClassName: _,
      noWheelClassName: k,
      lib: q,
      connectionInProgress: ne
    });
    p.filter(ee), Q ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function C() {
    p.on("zoom", null);
  }
  async function x(k, _, b) {
    const M = fs(k), T = p?.constrain()(M, _, b);
    return T && await w(T), new Promise((R) => R(T));
  }
  async function S(k, _) {
    const b = fs(k);
    return await w(b, _), new Promise((M) => M(b));
  }
  function N(k) {
    if (h) {
      const _ = fs(k), b = h.property("__zoom");
      (b.k !== k.zoom || b.x !== k.x || b.y !== k.y) && p?.transform(h, _, null, { sync: !0 });
    }
  }
  function E() {
    const k = h ? Dc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function O(k, _) {
    return h ? new Promise((b) => {
      p?.interpolate(_?.interpolate === "linear" ? bo : ci).scaleTo(ps(h, _?.duration, _?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function V(k, _) {
    return h ? new Promise((b) => {
      p?.interpolate(_?.interpolate === "linear" ? bo : ci).scaleBy(ps(h, _?.duration, _?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function Z(k) {
    p?.scaleExtent(k);
  }
  function W(k) {
    p?.translateExtent(k);
  }
  function I(k) {
    const _ = !On(k) || k < 0 ? 0 : k;
    p?.clickDistance(_);
  }
  return {
    update: $,
    destroy: C,
    setViewport: S,
    setViewportConstrained: x,
    getViewport: E,
    scaleTo: O,
    scaleBy: V,
    setScaleExtent: Z,
    setTranslateExtent: W,
    syncViewport: N,
    setClickDistance: I
  };
}
var jl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(jl || (jl = {}));
var wm = /* @__PURE__ */ te("<div><!></div>");
function tr(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => $e.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), f = m(t, "onconnect", 7), p = m(t, "ondisconnect", 7), h = m(t, "children", 7), g = /* @__PURE__ */ qe(t, [
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
  const y = Qn("svelteflow__node_id"), w = Qn("svelteflow__node_connectable");
  let $ = /* @__PURE__ */ P(() => r() === "target"), C = /* @__PURE__ */ P(() => a() !== void 0 ? a() : w.value), x = pn(), S = /* @__PURE__ */ P(() => x.ariaLabelConfig), N = null;
  Hu(() => {
    if (f() || p()) {
      x.edges;
      let D = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (N && !y0(D, N)) {
        const J = D ?? /* @__PURE__ */ new Map();
        Pl(N, J, p()), Pl(J, N, f());
      }
      N = new Map(D);
    }
  });
  let E = /* @__PURE__ */ P(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: D, toHandle: J, isValid: F } = x.connection, Q = D && D.nodeId === y && D.type === r() && D.id === n(), z = J && J.nodeId === y && J.type === r() && J.id === n(), q = x.connectionMode === Gr.Strict ? D?.type !== r() : y !== D?.nodeId || n() !== D?.id;
    return [
      !0,
      Q,
      z,
      q,
      z && F
    ];
  }), O = /* @__PURE__ */ P(() => Do(c(E), 5)), V = /* @__PURE__ */ P(() => c(O)[0]), Z = /* @__PURE__ */ P(() => c(O)[1]), W = /* @__PURE__ */ P(() => c(O)[2]), I = /* @__PURE__ */ P(() => c(O)[3]), k = /* @__PURE__ */ P(() => c(O)[4]);
  function _(D) {
    const J = x.onbeforeconnect ? x.onbeforeconnect(D) : D;
    J && (x.addEdge(J), x.onconnect?.(D));
  }
  function b(D) {
    const J = Xc(D);
    D.currentTarget && (J && D.button === 0 || !J) && Rl.onPointerDown(D, {
      handleId: n(),
      nodeId: y,
      isTarget: c($),
      connectionRadius: x.connectionRadius,
      domNode: x.domNode,
      nodeLookup: x.nodeLookup,
      connectionMode: x.connectionMode,
      lib: "svelte",
      autoPanOnConnect: x.autoPanOnConnect,
      autoPanSpeed: x.autoPanSpeed,
      flowId: x.flowId,
      isValidConnection: d() ?? x.isValidConnection,
      updateConnection: x.updateConnection,
      cancelConnection: x.cancelConnection,
      panBy: x.panBy,
      onConnect: _,
      onConnectStart: (F, Q) => {
        x.onconnectstart?.(F, {
          nodeId: Q.nodeId,
          handleId: Q.handleId,
          handleType: Q.handleType
        });
      },
      onConnectEnd: (F, Q) => {
        x.onconnectend?.(F, Q);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold,
      handleDomNode: D.currentTarget
    });
  }
  function M(D) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(D, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const J = Zc(D.target), F = d() ?? x.isValidConnection, { connectionMode: Q, clickConnectStartHandle: z, flowId: q, nodeLookup: U } = x, { connection: ne, isValid: re } = Rl.isValid(D, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: Q,
      fromNodeId: z.nodeId,
      fromHandleId: z.id ?? null,
      fromType: z.type,
      isValidConnection: F,
      flowId: q,
      doc: J,
      lib: "svelte",
      nodeLookup: U
    });
    re && ne && _(ne);
    const ee = structuredClone(vu(x.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, x.onclickconnectend?.(D, ee), x.clickConnectStartHandle = null;
  }
  var T = {
    get id() {
      return n();
    },
    set id(D = null) {
      n(D), v();
    },
    get type() {
      return r();
    },
    set type(D = "source") {
      r(D), v();
    },
    get position() {
      return o();
    },
    set position(D = $e.Top) {
      o(D), v();
    },
    get style() {
      return i();
    },
    set style(D) {
      i(D), v();
    },
    get class() {
      return s();
    },
    set class(D) {
      s(D), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(D) {
      a(D), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(D = !0) {
      l(D), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(D = !0) {
      u(D), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(D) {
      d(D), v();
    },
    get onconnect() {
      return f();
    },
    set onconnect(D) {
      f(D), v();
    },
    get ondisconnect() {
      return p();
    },
    set ondisconnect(D) {
      p(D), v();
    },
    get children() {
      return h();
    },
    set children(D) {
      h(D), v();
    }
  }, R = wm(), K = () => {
  };
  pt(
    R,
    (D) => ({
      "data-handleid": n(),
      "data-nodeid": y,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${y ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: b,
      ontouchstart: b,
      onclick: x.clickConnect ? M : void 0,
      onkeypress: K,
      style: i(),
      role: "button",
      "aria-label": c(S)["handle.ariaLabel"],
      tabindex: "-1",
      ...g,
      [Xn]: D
    }),
    [
      () => ({
        valid: c(k),
        connectingto: c(W),
        connectingfrom: c(Z),
        source: !c($),
        target: c($),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(C),
        connectionindicator: c(C) && (!c(V) || c(I)) && (c(V) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var Y = B(R);
  return it(Y, () => h() ?? Ct), j(R), L(e, R), pe(T);
}
le(
  tr,
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
var bm = /* @__PURE__ */ te("<!> <!>", 1);
function Sa(e, t) {
  fe(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => $e.Top), o = m(t, "sourcePosition", 23, () => $e.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = $e.Top) {
      r(d), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = $e.Bottom) {
      o(d), v();
    }
  }, s = bm(), a = ae(s);
  tr(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = A(a), u = A(l);
  return tr(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => Je(l, ` ${n()?.label ?? ""} `)), L(e, s), pe(i);
}
le(Sa, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var xm = /* @__PURE__ */ te(" <!>", 1);
function od(e, t) {
  fe(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => $e.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = $e.Bottom) {
      r(l), v();
    }
  };
  be();
  var i = xm(), s = ae(i), a = A(s);
  return tr(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => Je(s, `${n()?.label ?? ""} `)), L(e, i), pe(o);
}
le(od, { data: {}, sourcePosition: {} }, [], [], !0);
var Cm = /* @__PURE__ */ te(" <!>", 1);
function id(e, t) {
  fe(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => $e.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = $e.Top) {
      r(l), v();
    }
  };
  be();
  var i = Cm(), s = ae(i), a = A(s);
  return tr(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => Je(s, `${n()?.label ?? ""} `)), L(e, i), pe(o);
}
le(id, { data: {}, targetPosition: {} }, [], [], !0);
function sd(e, t) {
}
le(sd, {}, [], [], !0);
function hs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function ad(e, t) {
  const n = /* @__PURE__ */ P(pn), r = /* @__PURE__ */ P(() => c(n).domNode);
  let o;
  return c(r) ? hs(e, c(r), t) : o = ia(() => {
    ot(() => {
      hs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      hs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function ld() {
  let e = /* @__PURE__ */ Le(typeof window > "u");
  if (c(e)) {
    const t = ia(() => {
      ot(() => {
        G(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Bl = (e) => b0(e), $m = (e) => Hc(e);
function kn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Ni = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var _m = /* @__PURE__ */ te("<div><!></div>");
const km = {
  hash: "svelte-yagk5c",
  code: ".transparent.svelte-yagk5c {background:transparent;}"
};
function ud(e, t) {
  fe(t, !0), Xe(e, km);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ qe(t, [
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
  const f = pn(), p = Qn("svelteflow__edge_id");
  let h = /* @__PURE__ */ P(() => f.visible.edges.get(p)?.zIndex);
  var g = {
    get x() {
      return n();
    },
    set x(C = 0) {
      n(C), v();
    },
    get y() {
      return r();
    },
    set y(C = 0) {
      r(C), v();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), v();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(C = !1) {
      s(C), v();
    },
    get transparent() {
      return a();
    },
    set transparent(C = !1) {
      a(C), v();
    },
    get class() {
      return l();
    },
    set class(C) {
      l(C), v();
    },
    get children() {
      return u();
    },
    set children(C) {
      u(C), v();
    }
  }, y = _m(), w = () => {
    s() && p && f.handleEdgeSelection(p);
  };
  pt(
    y,
    (C) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [bn]: C
    }),
    [
      () => ({
        display: ld().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: kn(o()),
        height: kn(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    "svelte-yagk5c"
  );
  var $ = B(y);
  return it($, () => u() ?? Ct), j(y), St(y, (C, x) => ad?.(C, x), () => "edge-labels"), L(e, y), pe(g);
}
le(
  ud,
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
var Sm = /* @__PURE__ */ we("<path></path>"), Em = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Xo(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), f = m(t, "interactionWidth", 7, 20), p = m(t, "class", 7), h = /* @__PURE__ */ qe(t, [
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
  var g = {
    get id() {
      return n();
    },
    set id(N) {
      n(N), v();
    },
    get path() {
      return r();
    },
    set path(N) {
      r(N), v();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), v();
    },
    get labelX() {
      return i();
    },
    set labelX(N) {
      i(N), v();
    },
    get labelY() {
      return s();
    },
    set labelY(N) {
      s(N), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(N) {
      a(N), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(N) {
      l(N), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(N) {
      u(N), v();
    },
    get style() {
      return d();
    },
    set style(N) {
      d(N), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(N = 20) {
      f(N), v();
    },
    get class() {
      return p();
    },
    set class(N) {
      p(N), v();
    }
  }, y = Em(), w = ae(y), $ = A(w);
  {
    var C = (N) => {
      var E = Sm();
      pt(E, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": f(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), L(N, E);
    };
    ue($, (N) => {
      f() > 0 && N(C);
    });
  }
  var x = A($);
  {
    var S = (N) => {
      ud(N, {
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
        children: (E, O) => {
          be();
          var V = Pe();
          Ee(() => Je(V, o())), L(E, V);
        },
        $$slots: { default: !0 }
      });
    };
    ue(x, (N) => {
      o() && N(S);
    });
  }
  return Ee(() => {
    ke(w, "id", n()), ke(w, "d", r()), Rt(w, 0, jn(["svelte-flow__edge-path", p()])), ke(w, "marker-start", l()), ke(w, "marker-end", u()), $t(w, d());
  }), L(e, y), pe(g);
}
le(
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
function Ea(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), f = m(t, "sourceY", 7), p = m(t, "style", 7), h = m(t, "targetPosition", 7), g = m(t, "targetX", 7), y = m(t, "targetY", 7), w = /* @__PURE__ */ P(() => Fc({
    sourceX: d(),
    sourceY: f(),
    targetX: g(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), $ = /* @__PURE__ */ P(() => Do(c(w), 3)), C = /* @__PURE__ */ P(() => c($)[0]), x = /* @__PURE__ */ P(() => c($)[1]), S = /* @__PURE__ */ P(() => c($)[2]);
  var N = {
    get id() {
      return n();
    },
    set id(E) {
      n(E), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(E) {
      r(E), v();
    },
    get label() {
      return o();
    },
    set label(E) {
      o(E), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(E) {
      i(E), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(E) {
      s(E), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(E) {
      a(E), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(E) {
      l(E), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(E) {
      u(E), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(E) {
      d(E), v();
    },
    get sourceY() {
      return f();
    },
    set sourceY(E) {
      f(E), v();
    },
    get style() {
      return p();
    },
    set style(E) {
      p(E), v();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(E) {
      h(E), v();
    },
    get targetX() {
      return g();
    },
    set targetX(E) {
      g(E), v();
    },
    get targetY() {
      return y();
    },
    set targetY(E) {
      y(E), v();
    }
  };
  return Xo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(C);
    },
    get labelX() {
      return c(x);
    },
    get labelY() {
      return c(S);
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
      return p();
    }
  }), pe(N);
}
le(
  Ea,
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
function cd(e, t) {
  fe(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), f = m(t, "targetPosition", 7), p = m(t, "targetX", 7), h = m(t, "targetY", 7), g = /* @__PURE__ */ P(() => Ca({
    sourceX: u(),
    sourceY: d(),
    targetX: p(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: f()
  })), y = /* @__PURE__ */ P(() => Do(c(g), 3)), w = /* @__PURE__ */ P(() => c(y)[0]), $ = /* @__PURE__ */ P(() => c(y)[1]), C = /* @__PURE__ */ P(() => c(y)[2]);
  var x = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(S) {
      n(S), v();
    },
    get label() {
      return r();
    },
    set label(S) {
      r(S), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(S) {
      o(S), v();
    },
    get style() {
      return i();
    },
    set style(S) {
      i(S), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(S) {
      s(S), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(S) {
      a(S), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(S) {
      l(S), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(S) {
      u(S), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(S) {
      d(S), v();
    },
    get targetPosition() {
      return f();
    },
    set targetPosition(S) {
      f(S), v();
    },
    get targetX() {
      return p();
    },
    set targetX(S) {
      p(S), v();
    },
    get targetY() {
      return h();
    },
    set targetY(S) {
      h(S), v();
    }
  };
  return Xo(e, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c($);
    },
    get labelY() {
      return c(C);
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
  }), pe(x);
}
le(
  cd,
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
function dd(e, t) {
  fe(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), f = m(t, "style", 7), p = /* @__PURE__ */ P(() => Wc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => Do(c(p), 3)), g = /* @__PURE__ */ P(() => c(h)[0]), y = /* @__PURE__ */ P(() => c(h)[1]), w = /* @__PURE__ */ P(() => c(h)[2]);
  var $ = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), v();
    },
    get targetX() {
      return o();
    },
    set targetX(C) {
      o(C), v();
    },
    get targetY() {
      return i();
    },
    set targetY(C) {
      i(C), v();
    },
    get label() {
      return s();
    },
    set label(C) {
      s(C), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(C) {
      d(C), v();
    },
    get style() {
      return f();
    },
    set style(C) {
      f(C), v();
    }
  };
  return Xo(e, {
    get path() {
      return c(g);
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
      return f();
    }
  }), pe($);
}
le(
  dd,
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
function fd(e, t) {
  fe(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), f = m(t, "markerEnd", 7), p = m(t, "interactionWidth", 7), h = m(t, "style", 7), g = /* @__PURE__ */ P(() => Ca({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ P(() => Do(c(g), 3)), w = /* @__PURE__ */ P(() => c(y)[0]), $ = /* @__PURE__ */ P(() => c(y)[1]), C = /* @__PURE__ */ P(() => c(y)[2]);
  var x = {
    get sourceX() {
      return n();
    },
    set sourceX(S) {
      n(S), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(S) {
      r(S), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(S) {
      o(S), v();
    },
    get targetX() {
      return i();
    },
    set targetX(S) {
      i(S), v();
    },
    get targetY() {
      return s();
    },
    set targetY(S) {
      s(S), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(S) {
      a(S), v();
    },
    get label() {
      return l();
    },
    set label(S) {
      l(S), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(S) {
      u(S), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(S) {
      d(S), v();
    },
    get markerEnd() {
      return f();
    },
    set markerEnd(S) {
      f(S), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(S) {
      p(S), v();
    },
    get style() {
      return h();
    },
    set style(S) {
      h(S), v();
    }
  };
  return Xo(e, {
    get path() {
      return c(w);
    },
    get labelX() {
      return c($);
    },
    get labelY() {
      return c(C);
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
      return f();
    },
    get interactionWidth() {
      return p();
    },
    get style() {
      return h();
    }
  }), pe(x);
}
le(
  fd,
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
class Pm {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = $u(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Nm = /\(.+\)/, Tm = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Mm extends Pm {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Nm.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Tm.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => _s(o, "change", i)
    );
  }
}
function Om(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ba(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Kl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const f = r.get(d.source), p = r.get(d.target);
    if (!f || !p)
      continue;
    if (a) {
      const { visibleNodes: y, transform: w, width: $, height: C } = e;
      if (D0({
        sourceNode: f,
        targetNode: p,
        width: $,
        height: C,
        transform: w
      }))
        y.set(f.id, f), y.set(p.id, p);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && f == h.sourceNode && p == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const g = j0({
      id: d.id,
      sourceNode: f,
      targetNode: p,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    g && u.set(d.id, {
      ...n,
      ...d,
      ...g,
      zIndex: L0({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: f,
        targetNode: p,
        elevateOnSelect: l
      }),
      sourceNode: f,
      targetNode: p,
      edge: d
    });
  }
  return u;
}
const pd = {
  input: od,
  output: id,
  default: Sa,
  group: sd
}, hd = {
  straight: dd,
  smoothstep: cd,
  default: Ea,
  step: fd
};
function Lm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Ko(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return xa(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Dm(e) {
  class t {
    #t = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      G(this.#t, r);
    }
    #e = /* @__PURE__ */ Le(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      G(this.#e, r);
    }
    #a = /* @__PURE__ */ Le(null);
    get panZoom() {
      return c(this.#a);
    }
    set panZoom(r) {
      G(this.#a, r);
    }
    #i = /* @__PURE__ */ Le(e.width ?? 0);
    get width() {
      return c(this.#i);
    }
    set width(r) {
      G(this.#i, r);
    }
    #d = /* @__PURE__ */ Le(e.height ?? 0);
    get height() {
      return c(this.#d);
    }
    set height(r) {
      G(this.#d, r);
    }
    #s = /* @__PURE__ */ P(() => {
      const r = F0(e.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return c(this.#s);
    }
    set nodesInitialized(r) {
      G(this.#s, r);
    }
    #r = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#r);
    }
    set viewportInitialized(r) {
      G(this.#r, r);
    }
    #n = /* @__PURE__ */ P(() => (Q0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#n);
    }
    set _edges(r) {
      G(this.#n, r);
    }
    get nodes() {
      return this.nodesInitialized, e.nodes;
    }
    set nodes(r) {
      e.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      e.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #o = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#o);
    }
    set selectedNodes(r) {
      G(this.#o, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#l);
    }
    set selectedEdges(r) {
      G(this.#l, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #f = /* @__PURE__ */ P(() => {
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
      let f, p;
      const h = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: g, width: y, height: w } = this, $ = [g.x, g.y, g.zoom];
        f = Om(s, $, y, w), p = Kl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: f,
          transform: $,
          width: y,
          height: w
        });
      } else
        f = this.nodeLookup, p = Kl(h);
      return { nodes: f, edges: p };
    });
    get visible() {
      return c(this.#f);
    }
    set visible(r) {
      G(this.#f, r);
    }
    #c = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#c);
    }
    set nodesDraggable(r) {
      G(this.#c, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#p);
    }
    set nodesConnectable(r) {
      G(this.#p, r);
    }
    #u = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#u);
    }
    set elementsSelectable(r) {
      G(this.#u, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#h);
    }
    set nodesFocusable(r) {
      G(this.#h, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#y);
    }
    set edgesFocusable(r) {
      G(this.#y, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#w);
    }
    set disableKeyboardA11y(r) {
      G(this.#w, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#b);
    }
    set minZoom(r) {
      G(this.#b, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#g);
    }
    set maxZoom(r) {
      G(this.#g, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#v);
    }
    set nodeOrigin(r) {
      G(this.#v, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.nodeExtent ?? Ds);
    get nodeExtent() {
      return c(this.#m);
    }
    set nodeExtent(r) {
      G(this.#m, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.translateExtent ?? Ds);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      G(this.#x, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      G(this.#C, r);
    }
    #$ = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      G(this.#$, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      G(this.#_, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      G(this.#k, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      G(this.#S, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      G(this.#E, r);
    }
    #P = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      G(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      G(this.#N, r);
    }
    #T = /* @__PURE__ */ Le(!1);
    get dragging() {
      return c(this.#T);
    }
    set dragging(r) {
      G(this.#T, r);
    }
    #M = /* @__PURE__ */ Le(null);
    get selectionRect() {
      return c(this.#M);
    }
    set selectionRect(r) {
      G(this.#M, r);
    }
    #O = /* @__PURE__ */ Le(!1);
    get selectionKeyPressed() {
      return c(this.#O);
    }
    set selectionKeyPressed(r) {
      G(this.#O, r);
    }
    #L = /* @__PURE__ */ Le(!1);
    get multiselectionKeyPressed() {
      return c(this.#L);
    }
    set multiselectionKeyPressed(r) {
      G(this.#L, r);
    }
    #D = /* @__PURE__ */ Le(!1);
    get deleteKeyPressed() {
      return c(this.#D);
    }
    set deleteKeyPressed(r) {
      G(this.#D, r);
    }
    #V = /* @__PURE__ */ Le(!1);
    get panActivationKeyPressed() {
      return c(this.#V);
    }
    set panActivationKeyPressed(r) {
      G(this.#V, r);
    }
    #A = /* @__PURE__ */ Le(!1);
    get zoomActivationKeyPressed() {
      return c(this.#A);
    }
    set zoomActivationKeyPressed(r) {
      G(this.#A, r);
    }
    #H = /* @__PURE__ */ Le(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      G(this.#H, r);
    }
    #z = /* @__PURE__ */ Le("");
    get ariaLiveMessage() {
      return c(this.#z);
    }
    set ariaLiveMessage(r) {
      G(this.#z, r);
    }
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? Si.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      G(this.#I, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ...pd, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      G(this.#R, r);
    }
    #j = /* @__PURE__ */ P(() => ({ ...hd, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      G(this.#j, r);
    }
    #B = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      G(this.#B, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      G(this.#K, r);
    }
    #Z = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      G(this.#Z, r);
    }
    #Y = /* @__PURE__ */ P(() => T0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Y);
    }
    set ariaLabelConfig(r) {
      G(this.#Y, r);
    }
    #X = /* @__PURE__ */ Le(Lm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#X);
    }
    set _viewport(r) {
      G(this.#X, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #F = /* @__PURE__ */ Le(
      // _connection is viewport independent and originating from XYHandle
      Vs
    );
    get _connection() {
      return c(this.#F);
    }
    set _connection(r) {
      G(this.#F, r);
    }
    #q = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: Yo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      G(this.#q, r);
    }
    #W = /* @__PURE__ */ P(() => e.props.connectionMode ?? Gr.Strict);
    get connectionMode() {
      return c(this.#W);
    }
    set connectionMode(r) {
      G(this.#W, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#J);
    }
    set connectionRadius(r) {
      G(this.#J, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      G(this.#U, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      G(this.#G, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      G(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => B0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      G(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      G(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? S0);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      G(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      G(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      G(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      G(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      G(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      G(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      G(this.#le, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      G(this.#ue, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      G(this.#ce, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      G(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      G(this.#fe, r);
    }
    #pe = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      G(this.#pe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      G(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      G(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Le(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      G(this.#ve, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      G(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      G(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      G(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await _0(
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
    _prefersDark = new Mm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      G(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Vs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function pn() {
  const e = Qn(Ti);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Ti = Symbol();
function gd(e) {
  const t = Dm(e);
  function n(I) {
    t.nodeTypes = {
      ...pd,
      ...I
    };
  }
  function r(I) {
    t.edgeTypes = {
      ...hd,
      ...I
    };
  }
  function o(I) {
    t.edges = H0(I, t.edges);
  }
  const i = (I, k = !1) => {
    t.nodes = t.nodes.map((_) => {
      const b = I.get(_.id);
      return b ? { ..._, position: b.position, dragging: k } : _;
    });
  };
  function s(I) {
    const { changes: k, updatedInternals: _ } = U0(I, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!_)
      return;
    Y0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const M of k) {
      const T = t.nodeLookup.get(M.id)?.internals.userNode;
      if (!T)
        continue;
      const R = { ...T };
      switch (M.type) {
        case "dimensions": {
          const K = { ...R.measured, ...M.dimensions };
          M.setAttributes && (R.width = M.dimensions?.width ?? R.width, R.height = M.dimensions?.height ?? R.height), R.measured = K;
          break;
        }
        case "position":
          R.position = M.position ?? R.position;
          break;
      }
      b.set(M.id, R);
    }
    t.nodes = t.nodes.map((M) => b.get(M.id) ?? M);
  }
  function a(I) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(I, k, _) {
    const b = typeof _?.zoom < "u" ? _.zoom : t.maxZoom, M = t.panZoom;
    return M ? (await M.setViewport({
      x: t.width / 2 - I * b,
      y: t.height / 2 - k * b,
      zoom: b
    }, { duration: _?.duration, ease: _?.ease, interpolate: _?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(I, k) {
    const _ = t.panZoom;
    return _ ? _.scaleBy(I, k) : Promise.resolve(!1);
  }
  function d(I) {
    return u(1.2, I);
  }
  function f(I) {
    return u(1 / 1.2, I);
  }
  function p(I) {
    const k = t.panZoom;
    k && (k.setScaleExtent([I, t.maxZoom]), t.minZoom = I);
  }
  function h(I) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, I]), t.maxZoom = I);
  }
  function g(I) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(I), t.translateExtent = I);
  }
  function y(I) {
    t.panZoom?.setClickDistance(I);
  }
  function w(I, k = null) {
    let _ = !1;
    const b = I.map((M) => (!k || k.has(M.id)) && M.selected ? (_ = !0, { ...M, selected: !1 }) : M);
    return [_, b];
  }
  function $(I) {
    const k = I?.nodes ? new Set(I.nodes.map((K) => K.id)) : null, [_, b] = w(t.nodes, k);
    _ && (t.nodes = b);
    const M = I?.edges ? new Set(I.edges.map((K) => K.id)) : null, [T, R] = w(t.edges, M);
    T && (t.edges = R);
  }
  function C(I) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((_) => {
      const b = I.includes(_.id), M = k && _.selected || b;
      if (_.selected !== M) {
        const T = t.nodeLookup.get(_.id);
        return T && (T.selected = M), _.selected = M, { ..._ };
      }
      return _;
    }), k || $({ nodes: [] });
  }
  function x(I) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((_) => {
      const b = I.includes(_.id), M = k && _.selected || b;
      return _.selected !== M ? { ..._, selected: M } : _;
    }), k || $({ edges: [] });
  }
  function S(I, k, _) {
    const b = t.nodeLookup.get(I);
    if (!b) {
      console.warn("012", So.error012(I));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (k || b.selected && t.multiselectionKeyPressed) && ($({ nodes: [b], edges: [] }), requestAnimationFrame(() => _?.blur())) : C([I]);
  }
  function N(I) {
    const k = t.edgeLookup.get(I);
    if (!k) {
      console.warn("012", So.error012(I));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && $({ nodes: [], edges: [k] }) : x([I]));
  }
  function E(I, k) {
    const { nodeExtent: _, snapGrid: b, nodeOrigin: M, nodeLookup: T, nodesDraggable: R, onerror: K } = t, Y = /* @__PURE__ */ new Map(), D = b?.[0] ?? 5, J = b?.[1] ?? 5, F = I.x * D * k, Q = I.y * J * k;
    for (const z of T.values()) {
      if (!(z.selected && (z.draggable || R && typeof z.draggable > "u")))
        continue;
      let q = {
        x: z.internals.positionAbsolute.x + F,
        y: z.internals.positionAbsolute.y + Q
      };
      b && (q = Zo(q, b));
      const { position: U, positionAbsolute: ne } = zc({
        nodeId: z.id,
        nextPosition: q,
        nodeLookup: T,
        nodeExtent: _,
        nodeOrigin: M,
        onError: K
      });
      z.position = U, z.internals.positionAbsolute = ne, Y.set(z.id, z);
    }
    i(Y);
  }
  function O(I) {
    return G0({
      delta: I,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const V = (I) => {
    t._connection = { ...I };
  };
  function Z() {
    t._connection = Vs;
  }
  function W() {
    t.resetStoreValues(), $();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: f,
    fitView: a,
    setCenter: l,
    setMinZoom: p,
    setMaxZoom: h,
    setTranslateExtent: g,
    setPaneClickDistance: y,
    unselectNodesAndEdges: $,
    addSelectedNodes: C,
    addSelectedEdges: x,
    handleNodeSelection: S,
    handleEdgeSelection: N,
    moveSelectedNodes: E,
    panBy: O,
    updateConnection: V,
    cancelConnection: Z,
    reset: W
  });
}
function Vm(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: f, onTransformChange: p } = t, h = ym({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: f
  }), g = h.getViewport();
  return (o.x !== g.x || o.y !== g.y || o.zoom !== g.zoom) && p([g.x, g.y, g.zoom]), d(h), h.update(t), {
    update(y) {
      h.update(y);
    }
  };
}
var Am = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function vd(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 7), o = m(t, "preventScrolling", 7), i = m(t, "zoomOnScroll", 7), s = m(t, "zoomOnDoubleClick", 7), a = m(t, "zoomOnPinch", 7), l = m(t, "panOnDrag", 7), u = m(t, "panOnScroll", 7), d = m(t, "panOnScrollSpeed", 7), f = m(t, "paneClickDistance", 7), p = m(t, "onmovestart", 7), h = m(t, "onmove", 7), g = m(t, "onmoveend", 7), y = m(t, "oninit", 7), w = m(t, "children", 7), $ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), C = /* @__PURE__ */ P(() => n().panActivationKeyPressed || u());
  const { viewport: x } = n();
  let S = !1;
  ot(() => {
    !S && n().viewportInitialized && (y()?.(), S = !0);
  });
  var N = {
    get store() {
      return n();
    },
    set store(V) {
      n(V), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(V) {
      r(V), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(V) {
      o(V), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(V) {
      i(V), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(V) {
      s(V), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(V) {
      a(V), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(V) {
      l(V), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(V) {
      u(V), v();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(V) {
      d(V), v();
    },
    get paneClickDistance() {
      return f();
    },
    set paneClickDistance(V) {
      f(V), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(V) {
      p(V), v();
    },
    get onmove() {
      return h();
    },
    set onmove(V) {
      h(V), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(V) {
      g(V), v();
    },
    get oninit() {
      return y();
    },
    set oninit(V) {
      y(V), v();
    },
    get children() {
      return w();
    },
    set children(V) {
      w(V), v();
    }
  }, E = Am(), O = B(E);
  return it(O, w), j(E), St(E, (V, Z) => Vm?.(V, Z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: x,
    onDraggingChange: (V) => {
      n(n().dragging = V, !0);
    },
    setPanZoomInstance: (V) => {
      n(n().panZoom = V, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: h(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(C),
    panOnDrag: c($),
    panOnScrollSpeed: d(),
    panOnScrollMode: r(),
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: f(),
    onTransformChange: (V) => {
      n(n().viewport = { x: V[0], y: V[1], zoom: V[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), L(e, E), pe(N);
}
le(
  vd,
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
function Zl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Yl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Xl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Hm = /* @__PURE__ */ te("<div><!></div>");
function md(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, f = null, p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ P(() => n().selectionKeyPressed || n().selectionRect || o() && c(g) !== !0), w = /* @__PURE__ */ P(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), $ = !1;
  function C(_) {
    if ($ || n().connection.inProgress) {
      $ = !1;
      return;
    }
    i()?.({ event: _ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(_) {
    if (f = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || _.button !== 0 || _.target !== d || !f)
      return;
    _.target?.setPointerCapture?.(_.pointerId);
    const { x: b, y: M } = sn(_, f);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: b, startY: M, x: b, y: M }, !0), a()?.(_);
  }
  function S(_) {
    if (!c(y) || !f || !n().selectionRect)
      return;
    $ = !0;
    const b = sn(_, f), { startX: M = 0, startY: T = 0 } = n().selectionRect, R = {
      ...n().selectionRect,
      x: b.x < M ? b.x : M,
      y: b.y < T ? b.y : T,
      width: Math.abs(b.x - M),
      height: Math.abs(b.y - T)
    }, K = p, Y = h;
    p = new Set(ba(
      n().nodeLookup,
      R,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Si.Partial,
      !0
    ).map((J) => J.id));
    const D = n().defaultEdgeOptions.selectable ?? !0;
    h = /* @__PURE__ */ new Set();
    for (const J of p) {
      const F = n().connectionLookup.get(J);
      if (F)
        for (const { edgeId: Q } of F.values()) {
          const z = n().edgeLookup.get(Q);
          z && (z.selectable ?? D) && h.add(Q);
        }
    }
    Xl(K, p) || n(n().nodes = n().nodes.map(Yl(p)), !0), Xl(Y, h) || n(n().edges = n().edges.map(Yl(h)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = R, !0);
  }
  function N(_) {
    _.button === 0 && (_.target?.releasePointerCapture?.(_.pointerId), !c(y) && n().selectionRectMode === "user" && _.target === d && C?.(_), n(n().selectionRect = null, !0), p.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && ($ = !1), l()?.(_));
  }
  const E = (_) => {
    if (Array.isArray(c(g)) && c(g).includes(2)) {
      _.preventDefault();
      return;
    }
    s()?.({ event: _ });
  };
  var O = {
    get store() {
      return n();
    },
    set store(_) {
      n(_), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(_ = !0) {
      r(_), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(_) {
      o(_), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(_) {
      i(_), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(_) {
      s(_), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(_) {
      a(_), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(_) {
      l(_), v();
    },
    get children() {
      return u();
    },
    set children(_) {
      u(_), v();
    }
  }, V = Hm();
  let Z;
  var W = /* @__PURE__ */ P(() => c(w) ? void 0 : Zl(C, d));
  V.__click = function(..._) {
    c(W)?.apply(this, _);
  }, V.__pointerdown = function(..._) {
    (c(w) ? x : void 0)?.apply(this, _);
  }, V.__pointermove = function(..._) {
    (c(w) ? S : void 0)?.apply(this, _);
  }, V.__pointerup = function(..._) {
    (c(w) ? N : void 0)?.apply(this, _);
  };
  var I = /* @__PURE__ */ P(() => Zl(E, d));
  V.__contextmenu = function(..._) {
    c(I)?.apply(this, _);
  };
  var k = B(V);
  return it(k, u), j(V), Zt(V, (_) => d = _, () => d), Ee((_) => Z = Rt(V, 1, "svelte-flow__pane svelte-flow__container", null, Z, _), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), L(e, V), pe(O);
}
ar([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
le(
  md,
  {
    store: {},
    panOnDrag: {},
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
var zm = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function yd(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), v();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), v();
    }
  }, i = zm();
  let s;
  var a = B(i);
  return it(a, r), j(i), Ee((l) => s = $t(i, "", s, l), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), L(e, i), pe(o);
}
le(yd, { store: {}, children: {} }, [], [], !0);
function wd(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = rm({
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
  return l(e, t), {
    update(u) {
      l(e, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
var Im = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-h8i2bw"> </div>'), Rm = /* @__PURE__ */ te('<div class="a11y-hidden svelte-h8i2bw"> </div> <div class="a11y-hidden svelte-h8i2bw"> </div> <!>', 1);
const jm = {
  hash: "svelte-h8i2bw",
  code: ".a11y-hidden.svelte-h8i2bw {display:none;}.a11y-live-msg.svelte-h8i2bw {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function bd(e, t) {
  fe(t, !0), Xe(e, jm);
  let n = m(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), v();
    }
  }, o = Rm(), i = ae(o), s = B(i, !0);
  j(i);
  var a = A(i, 2), l = B(a, !0);
  j(a);
  var u = A(a, 2);
  {
    var d = (f) => {
      var p = Im(), h = B(p, !0);
      j(p), Ee(() => {
        ke(p, "id", `${Bm}-${n().flowId}`), Je(h, n().ariaLiveMessage);
      }), L(f, p);
    };
    ue(u, (f) => {
      n().disableKeyboardA11y || f(d);
    });
  }
  return Ee(() => {
    ke(i, "id", `${xd}-${n().flowId}`), Je(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ke(a, "id", `${Cd}-${n().flowId}`), Je(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), L(e, o), pe(r);
}
le(bd, { store: {} }, [], [], !0);
const xd = "svelte-flow__node-desc", Cd = "svelte-flow__edge-desc", Bm = "svelte-flow__aria-live";
var Km = /* @__PURE__ */ te("<div><!></div>");
function $d(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), f = m(t, "onnodepointerleave", 7), p = m(t, "onnodepointermove", 7), h = m(t, "onnodecontextmenu", 7), g = /* @__PURE__ */ P(() => Tt(r().data, () => ({}), !0)), y = /* @__PURE__ */ P(() => Tt(r().selected, !1)), w = /* @__PURE__ */ P(() => r().draggable), $ = /* @__PURE__ */ P(() => r().selectable), C = /* @__PURE__ */ P(() => Tt(r().deletable, !0)), x = /* @__PURE__ */ P(() => r().connectable), S = /* @__PURE__ */ P(() => r().focusable), N = /* @__PURE__ */ P(() => Tt(r().hidden, !1)), E = /* @__PURE__ */ P(() => Tt(r().dragging, !1)), O = /* @__PURE__ */ P(() => Tt(r().style, "")), V = /* @__PURE__ */ P(() => r().class), Z = /* @__PURE__ */ P(() => Tt(r().type, "default")), W = /* @__PURE__ */ P(() => r().parentId), I = /* @__PURE__ */ P(() => r().sourcePosition), k = /* @__PURE__ */ P(() => r().targetPosition), _ = /* @__PURE__ */ P(() => Tt(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ P(() => Tt(r().measured, () => ({ width: 0, height: 0 }), !0).height), M = /* @__PURE__ */ P(() => r().initialWidth), T = /* @__PURE__ */ P(() => r().initialHeight), R = /* @__PURE__ */ P(() => r().width), K = /* @__PURE__ */ P(() => r().height), Y = /* @__PURE__ */ P(() => r().dragHandle), D = /* @__PURE__ */ P(() => Tt(r().internals.z, 0)), J = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), F = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), Q = /* @__PURE__ */ P(() => r().internals.userNode), { id: z } = r(), q = /* @__PURE__ */ P(() => c(w) ?? n().nodesDraggable), U = /* @__PURE__ */ P(() => c($) ?? n().elementsSelectable), ne = /* @__PURE__ */ P(() => c(x) ?? n().nodesConnectable), re = /* @__PURE__ */ P(() => Bc(r())), ee = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ P(() => c(re) && c(ee)), ce = /* @__PURE__ */ P(() => c(S) ?? n().nodesFocusable);
  function ie(ye) {
    return n().parentLookup.has(ye);
  }
  let se = /* @__PURE__ */ P(() => ie(z)), ve = /* @__PURE__ */ Le(null), me = null, xe = c(Z), de = c(I), _e = c(k), Me = /* @__PURE__ */ P(() => n().nodeTypes[c(Z)] ?? Sa), X = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Zr("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Zr("svelteflow__node_id", z);
  let Ke = /* @__PURE__ */ P(() => {
    const ye = c(_) === void 0 ? c(R) ?? c(M) : c(R), Ye = c(b) === void 0 ? c(K) ?? c(T) : c(K);
    if (!(ye === void 0 && Ye === void 0 && c(O) === void 0))
      return `${c(O)};${ye ? `width:${kn(ye)};` : ""}${Ye ? `height:${kn(Ye)};` : ""}`;
  });
  ot(() => {
    (c(Z) !== xe || c(I) !== de || c(k) !== _e) && c(ve) !== null && requestAnimationFrame(() => {
      c(ve) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[z, { id: z, nodeElement: c(ve), force: !0 }]]));
    }), xe = c(Z), de = c(I), _e = c(k);
  }), ot(() => {
    o() && (!c(ge) || c(ve) !== me) && (me && o().unobserve(me), c(ve) && o().observe(c(ve)), me = c(ve));
  }), Io(() => {
    me && o()?.unobserve(me);
  });
  function De(ye) {
    c(U) && (!n().selectNodesOnDrag || !c(q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(z), s()?.({ node: c(Q), event: ye });
  }
  function je(ye) {
    if (!(Yc(ye) || n().disableKeyboardA11y))
      if (Ac.includes(ye.key) && c(U)) {
        const Ye = ye.key === "Escape";
        n().handleNodeSelection(z, Ye, c(ve));
      } else c(q) && r().selected && Object.prototype.hasOwnProperty.call(Ni, ye.key) && (ye.preventDefault(), n(
        n().ariaLiveMessage = c(X)["node.a11yDescription.ariaLiveMessage"]({
          direction: ye.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Ni[ye.key], ye.shiftKey ? 4 : 1));
  }
  const Fe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ve)?.matches(":focus-visible"))
      return;
    const { width: ye, height: Ye, viewport: yt } = n();
    ba(/* @__PURE__ */ new Map([[z, r()]]), { x: 0, y: 0, width: ye, height: Ye }, [yt.x, yt.y, yt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: yt.zoom });
  };
  var nt = {
    get store() {
      return n();
    },
    set store(ye) {
      n(ye), v();
    },
    get node() {
      return r();
    },
    set node(ye) {
      r(ye), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ye) {
      o(ye), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ye) {
      i(ye), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ye) {
      s(ye), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ye) {
      a(ye), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ye) {
      l(ye), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ye) {
      u(ye), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ye) {
      d(ye), v();
    },
    get onnodepointerleave() {
      return f();
    },
    set onnodepointerleave(ye) {
      f(ye), v();
    },
    get onnodepointermove() {
      return p();
    },
    set onnodepointermove(ye) {
      p(ye), v();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(ye) {
      h(ye), v();
    }
  }, _t = Oe(), et = ae(_t);
  {
    var Ze = (ye) => {
      var Ye = Km();
      pt(
        Ye,
        (tt, kt) => ({
          "data-id": z,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(Z)}`,
            c(V)
          ],
          style: c(Ke),
          onclick: De,
          onpointerenter: d() ? (ct) => d()({ node: c(Q), event: ct }) : void 0,
          onpointerleave: f() ? (ct) => f()({ node: c(Q), event: ct }) : void 0,
          onpointermove: p() ? (ct) => p()({ node: c(Q), event: ct }) : void 0,
          oncontextmenu: h() ? (ct) => h()({ node: c(Q), event: ct }) : void 0,
          onkeydown: c(ce) ? je : void 0,
          onfocus: c(ce) ? Fe : void 0,
          tabIndex: c(ce) ? 0 : void 0,
          role: r().ariaRole ?? (c(ce) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${xd}-${n().flowId}`,
          ...r().domAttributes,
          [Xn]: tt,
          [bn]: kt
        }),
        [
          () => ({
            dragging: c(E),
            selected: c(y),
            draggable: c(q),
            connectable: c(ne),
            selectable: c(U),
            nopan: c(q),
            parent: c(se)
          }),
          () => ({
            "z-index": c(D),
            transform: `translate(${c(J) ?? ""}px, ${c(F) ?? ""}px)`,
            visibility: c(re) ? "visible" : "hidden"
          })
        ]
      );
      var yt = B(Ye);
      ji(yt, () => c(Me), (tt, kt) => {
        kt(tt, {
          get data() {
            return c(g);
          },
          get id() {
            return z;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(C);
          },
          get sourcePosition() {
            return c(I);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(D);
          },
          get dragging() {
            return c(E);
          },
          get draggable() {
            return c(q);
          },
          get dragHandle() {
            return c(Y);
          },
          get parentId() {
            return c(W);
          },
          get type() {
            return c(Z);
          },
          get isConnectable() {
            return c(ne);
          },
          get positionAbsoluteX() {
            return c(J);
          },
          get positionAbsoluteY() {
            return c(F);
          },
          get width() {
            return c(R);
          },
          get height() {
            return c(K);
          }
        });
      }), j(Ye), St(Ye, (tt, kt) => wd?.(tt, kt), () => ({
        nodeId: z,
        isSelectable: c(U),
        disabled: !c(q),
        handleSelector: c(Y),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (tt, kt, ct, dt) => {
          a()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        onDragStart: (tt, kt, ct, dt) => {
          l()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        onDragStop: (tt, kt, ct, dt) => {
          u()?.({ event: tt, targetNode: ct, nodes: dt });
        },
        store: n()
      })), Zt(Ye, (tt) => G(ve, tt), () => c(ve)), L(ye, Ye);
    };
    ue(et, (ye) => {
      c(N) || ye(Ze);
    });
  }
  return L(e, _t), pe(nt);
}
le(
  $d,
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
var Zm = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function _d(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), f = m(t, "onnodedragstop", 7);
  const p = typeof ResizeObserver > "u" ? null : new ResizeObserver((y) => {
    const w = /* @__PURE__ */ new Map();
    y.forEach(($) => {
      const C = $.target.getAttribute("data-id");
      w.set(C, { id: C, nodeElement: $.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Io(() => {
    p?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(y) {
      r(y), v();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(y) {
      o(y), v();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(y) {
      i(y), v();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(y) {
      s(y), v();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(y) {
      a(y), v();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(y) {
      l(y), v();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(y) {
      u(y), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(y) {
      d(y), v();
    },
    get onnodedragstop() {
      return f();
    },
    set onnodedragstop(y) {
      f(y), v();
    }
  }, g = Zm();
  return Pt(g, 21, () => n().visible.nodes.values(), (y) => y.id, (y, w) => {
    $d(y, {
      get node() {
        return c(w);
      },
      get resizeObserver() {
        return p;
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
        return f();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store($) {
        n($);
      }
    });
  }), j(g), L(e, g), pe(h);
}
le(
  _d,
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
var Ym = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function kd(e, t) {
  fe(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), p = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), g = /* @__PURE__ */ P(() => n().sourcePosition), y = /* @__PURE__ */ P(() => n().targetPosition), w = /* @__PURE__ */ P(() => Tt(n().animated, !1)), $ = /* @__PURE__ */ P(() => Tt(n().selected, !1)), C = /* @__PURE__ */ P(() => n().label), x = /* @__PURE__ */ P(() => n().labelStyle), S = /* @__PURE__ */ P(() => Tt(n().data, () => ({}), !0)), N = /* @__PURE__ */ P(() => n().style), E = /* @__PURE__ */ P(() => n().interactionWidth), O = /* @__PURE__ */ P(() => Tt(n().type, "default")), V = /* @__PURE__ */ P(() => n().sourceHandle), Z = /* @__PURE__ */ P(() => n().targetHandle), W = /* @__PURE__ */ P(() => n().markerStart), I = /* @__PURE__ */ P(() => n().markerEnd), k = /* @__PURE__ */ P(() => n().selectable), _ = /* @__PURE__ */ P(() => n().focusable), b = /* @__PURE__ */ P(() => Tt(n().deletable, !0)), M = /* @__PURE__ */ P(() => n().hidden), T = /* @__PURE__ */ P(() => n().zIndex), R = /* @__PURE__ */ P(() => n().class), K = /* @__PURE__ */ P(() => n().ariaLabel), Y = null;
  const { id: D } = n();
  Zr("svelteflow__edge_id", D);
  let J = /* @__PURE__ */ P(() => c(k) ?? r().elementsSelectable), F = /* @__PURE__ */ P(() => c(_) ?? r().edgesFocusable), Q = /* @__PURE__ */ P(() => r().edgeTypes[c(O)] ?? Ea), z = /* @__PURE__ */ P(() => c(W) ? `url('#${Hs(c(W), r().flowId)}')` : void 0), q = /* @__PURE__ */ P(() => c(I) ? `url('#${Hs(c(I), r().flowId)}')` : void 0);
  function U(se) {
    const ve = r().edgeLookup.get(D);
    ve && (c(J) && r().handleEdgeSelection(D), o()?.({ event: se, edge: ve }));
  }
  function ne(se, ve) {
    const me = r().edgeLookup.get(D);
    me && ve({ event: se, edge: me });
  }
  function re(se) {
    if (!r().disableKeyboardA11y && Ac.includes(se.key) && c(J)) {
      const { unselectNodesAndEdges: ve, addSelectedEdges: me } = r();
      se.key === "Escape" ? (Y?.blur(), ve({ edges: [n()] })) : me([D]);
    }
  }
  var ee = {
    get edge() {
      return n();
    },
    set edge(se) {
      n(se), v();
    },
    get store() {
      return r();
    },
    set store(se) {
      r(se), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(se) {
      o(se), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(se) {
      i(se), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(se) {
      s(se), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(se) {
      a(se), v();
    }
  }, ge = Oe(), ce = ae(ge);
  {
    var ie = (se) => {
      var ve = Ym();
      let me;
      var xe = B(ve);
      pt(
        xe,
        (_e) => ({
          class: ["svelte-flow__edge", c(R)],
          "data-id": D,
          onclick: U,
          oncontextmenu: i() ? (Me) => {
            ne(Me, i());
          } : void 0,
          onpointerenter: s() ? (Me) => {
            ne(Me, s());
          } : void 0,
          onpointerleave: a() ? (Me) => {
            ne(Me, a());
          } : void 0,
          "aria-label": c(K) === null ? void 0 : c(K) ? c(K) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(F) ? `${Cd}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(F) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(F) ? re : void 0,
          tabindex: c(F) ? 0 : void 0,
          ...n().domAttributes,
          [Xn]: _e
        }),
        [
          () => ({
            animated: c(w),
            selected: c($),
            selectable: c(J)
          })
        ]
      );
      var de = B(xe);
      ji(de, () => c(Q), (_e, Me) => {
        Me(_e, {
          get id() {
            return D;
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
            return c(f);
          },
          get targetX() {
            return c(p);
          },
          get targetY() {
            return c(h);
          },
          get sourcePosition() {
            return c(g);
          },
          get targetPosition() {
            return c(y);
          },
          get animated() {
            return c(w);
          },
          get selected() {
            return c($);
          },
          get label() {
            return c(C);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c(S);
          },
          get style() {
            return c(N);
          },
          get interactionWidth() {
            return c(E);
          },
          get selectable() {
            return c(J);
          },
          get deletable() {
            return c(b);
          },
          get type() {
            return c(O);
          },
          get sourceHandleId() {
            return c(V);
          },
          get targetHandleId() {
            return c(Z);
          },
          get markerStart() {
            return c(z);
          },
          get markerEnd() {
            return c(q);
          }
        });
      }), j(xe), Zt(xe, (_e) => Y = _e, () => Y), j(ve), Ee((_e) => me = $t(ve, "", me, _e), [() => ({ "z-index": c(T) })]), L(se, ve);
    };
    ue(ce, (se) => {
      c(M) || se(ie);
    });
  }
  return L(e, ge), pe(ee);
}
le(
  kd,
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
Np();
var Xm = /* @__PURE__ */ we("<defs></defs>");
function Sd(e, t) {
  fe(t, !1);
  const n = pn();
  oc();
  var r = Xm();
  Pt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Ed(o, Ue(() => c(i)));
  }), j(r), L(e, r), pe();
}
le(Sd, {}, [], [], !0);
var Fm = /* @__PURE__ */ we('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), qm = /* @__PURE__ */ we('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Wm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Ed(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7, "none"), u = m(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(y) {
      n(y), v();
    },
    get type() {
      return r();
    },
    set type(y) {
      r(y), v();
    },
    get width() {
      return o();
    },
    set width(y = 12.5) {
      o(y), v();
    },
    get height() {
      return i();
    },
    set height(y = 12.5) {
      i(y), v();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(y = "strokeWidth") {
      s(y), v();
    },
    get orient() {
      return a();
    },
    set orient(y = "auto-start-reverse") {
      a(y), v();
    },
    get color() {
      return l();
    },
    set color(y = "none") {
      l(y), v();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(y) {
      u(y), v();
    }
  }, f = Wm(), p = B(f);
  {
    var h = (y) => {
      var w = Fm();
      let $;
      Ee(
        (C) => {
          ke(w, "stroke-width", u()), $ = $t(w, "", $, C);
        },
        [() => ({ stroke: l() })]
      ), L(y, w);
    }, g = (y) => {
      var w = Oe(), $ = ae(w);
      {
        var C = (x) => {
          var S = qm();
          let N;
          Ee(
            (E) => {
              ke(S, "stroke-width", u()), N = $t(S, "", N, E);
            },
            [() => ({ stroke: l(), fill: l() })]
          ), L(x, S);
        };
        ue(
          $,
          (x) => {
            r() === Eo.ArrowClosed && x(C);
          },
          !0
        );
      }
      L(y, w);
    };
    ue(p, (y) => {
      r() === Eo.Arrow ? y(h) : y(g, !1);
    });
  }
  return j(f), Ee(() => {
    ke(f, "id", n()), ke(f, "markerWidth", `${o()}`), ke(f, "markerHeight", `${i()}`), ke(f, "markerUnits", s()), ke(f, "orient", a());
  }), L(e, f), pe(d);
}
le(
  Ed,
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
var Jm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function Pd(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), v();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), v();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), v();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), v();
    }
  }, l = Jm(), u = B(l), d = B(u);
  Sd(d, {}), j(u);
  var f = A(u, 2);
  return Pt(f, 17, () => n().visible.edges.values(), (p) => p.id, (p, h) => {
    kd(p, {
      get edge() {
        return c(h);
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
      set store(g) {
        n(g);
      }
    });
  }), j(l), L(e, l), pe(a);
}
le(
  Pd,
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
var Um = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-eplraw"></div>');
const Gm = {
  hash: "svelte-eplraw",
  code: ".svelte-flow__selection.svelte-eplraw {position:absolute;top:0;left:0;}"
};
function Pa(e, t) {
  fe(t, !0), Xe(e, Gm);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(f = 0) {
      n(f), v();
    },
    get y() {
      return r();
    },
    set y(f = 0) {
      r(f), v();
    },
    get width() {
      return o();
    },
    set width(f = 0) {
      o(f), v();
    },
    get height() {
      return i();
    },
    set height(f = 0) {
      i(f), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(f = !0) {
      s(f), v();
    }
  }, l = Oe(), u = ae(l);
  {
    var d = (f) => {
      var p = Um();
      let h;
      Ee((g) => h = $t(p, "", h, g), [
        () => ({
          width: typeof o() == "string" ? o() : kn(o()),
          height: typeof i() == "string" ? i() : kn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), L(f, p);
    };
    ue(u, (f) => {
      s() && f(d);
    });
  }
  return L(e, l), pe(a);
}
le(Pa, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Qm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function ey(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var ty = /* @__PURE__ */ te("<div><!></div>");
const ny = {
  hash: "svelte-jl8ebg",
  code: ".svelte-flow__selection-wrapper.svelte-jl8ebg {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function Nd(e, t) {
  fe(t, !0), Xe(e, ny);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Le(void 0);
  ot(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" ? (n().nodes, Ko(n().nodeLookup, { filter: (y) => !!y.selected })) : null);
  function d(y) {
    Object.prototype.hasOwnProperty.call(Ni, y.key) && (y.preventDefault(), n().moveSelectedNodes(Ni[y.key], y.shiftKey ? 4 : 1));
  }
  var f = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(y) {
      r(y), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(y) {
      o(y), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(y) {
      i(y), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(y) {
      s(y), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(y) {
      a(y), v();
    }
  }, p = Oe(), h = ae(p);
  {
    var g = (y) => {
      var w = ty();
      w.__contextmenu = [Qm, n, a], w.__click = [ey, n, s], w.__keydown = function(...x) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, x);
      };
      let $;
      var C = B(w);
      Pa(C, { width: "100%", height: "100%", x: 0, y: 0 }), j(w), St(w, (x, S) => wd?.(x, S), () => ({
        disabled: !1,
        store: n(),
        onDrag: (x, S, N, E) => {
          r()?.({ event: x, targetNode: null, nodes: E });
        },
        onDragStart: (x, S, N, E) => {
          o()?.({ event: x, targetNode: null, nodes: E });
        },
        onDragStop: (x, S, N, E) => {
          i()?.({ event: x, targetNode: null, nodes: E });
        }
      })), Zt(w, (x) => G(l, x), () => c(l)), Ee(
        (x) => {
          Rt(w, 1, jn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-jl8ebg"), ke(w, "role", n().disableKeyboardA11y ? void 0 : "button"), ke(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = $t(w, "", $, x);
        },
        [
          () => ({
            width: kn(c(u).width),
            height: kn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), L(y, w);
    };
    ue(h, (y) => {
      n().selectionRectMode === "nodes" && c(u) && On(c(u).x) && On(c(u).y) && y(g);
    });
  }
  return L(e, p), pe(f);
}
ar(["contextmenu", "click", "keydown"]);
le(
  Nd,
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
function ry(e) {
  switch (e) {
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
function mn(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, f, p) => f ? d | 1 << p : d,
      0
    );
    for (const d of l) {
      const f = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: p, key: h, callback: g, preventDefault: y, enabled: w } = f;
      if (w) {
        if (a.key !== h) continue;
        if (p === null || p === !1) {
          if (u !== 0) continue;
        } else if (p !== void 0 && p?.[0]?.length > 0) {
          const C = Array.isArray(p) ? p : [p];
          let x = !1;
          for (const S of C)
            if ((Array.isArray(S) ? S : [S]).reduce(
              (N, E) => N | ry(E),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        y && a.preventDefault();
        const $ = {
          node: e,
          trigger: f,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: $ })), g?.($);
      }
    }
  }
  let s;
  return n && (s = _s(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = _s(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function mt() {
  const e = /* @__PURE__ */ P(pn), t = (i) => {
    const s = Bl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? N0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return eo(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = bt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Bl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = bt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && $m(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  const o = (i) => c(e).nodeLookup.get(i);
  return {
    zoomIn: c(e).zoomIn,
    zoomOut: c(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? c(e).nodes : Fl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Fl(c(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = c(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => c(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = c(e).viewport;
      return c(e).panZoom ? (await c(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => vu(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = xa(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
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
      const l = Tl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const f = c(e).nodeLookup.get(d.id);
        if (!f || !l && d.id === i.id)
          return !1;
        const p = eo(f), h = Po(p, u);
        return s && h > 0 || h >= p.width * p.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Tl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = Po(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await k0({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = bt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = bt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: f, y: p } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - f, y: i.y - p };
      return Yo(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), f = Pi(i, [s, a, l]);
      return { x: f.x + u, y: f.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...c(e).nodes],
      edges: [...c(e).edges],
      viewport: { ...c(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = c(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const u = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? u : { ...d.data, ...u }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => x0(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Fl(e, t) {
  const n = [];
  for (const r of t) {
    const o = e.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function Td(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => hr() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => hr() ? "Meta" : "Control"), { deleteElements: l } = mt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function f(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function p(w, $) {
    return (Array.isArray(w) ? w : [w]).map((C) => {
      const x = f(C);
      return {
        key: x,
        modifier: d(C),
        enabled: x !== null,
        callback: $
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function g() {
    const w = n().nodes.filter((C) => C.selected), $ = n().edges.filter((C) => C.selected);
    l({ nodes: w, edges: $ });
  }
  var y = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = hr() ? "Meta" : "Control") {
      o(w), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = hr() ? "Meta" : "Control") {
      a(w), v();
    }
  };
  return Qa("blur", Vt, h), Qa("contextmenu", Vt, h), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Yc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), g());
    }),
    type: "keydown"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), St(Vt, (w, $) => mn?.(w, $), () => ({
    trigger: p(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), pe(y);
}
le(
  Td,
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
var oy = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), iy = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Md(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
    if (!n().connection.inProgress)
      return "";
    const p = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case Tn.Bezier: {
        const [h] = Fc(p);
        return h;
      }
      case Tn.Straight: {
        const [h] = Wc(p);
        return h;
      }
      case Tn.Step:
      case Tn.SmoothStep: {
        const [h] = Ca({
          ...p,
          borderRadius: r() === Tn.Step ? 0 : void 0
        });
        return h;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), v();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), v();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), v();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), v();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), v();
    }
  }, u = Oe(), d = ae(u);
  {
    var f = (p) => {
      var h = iy(), g = B(h), y = B(g);
      {
        var w = (C) => {
          var x = Oe(), S = ae(x);
          ji(S, s, (N, E) => {
            E(N, {});
          }), L(C, x);
        }, $ = (C) => {
          var x = oy();
          Ee(() => {
            ke(x, "d", c(a)), $t(x, i());
          }), L(C, x);
        };
        ue(y, (C) => {
          s() ? C(w) : C($, !1);
        });
      }
      j(g), j(h), Ee(
        (C) => {
          ke(h, "width", n().width), ke(h, "height", n().height), $t(h, o()), Rt(g, 0, C);
        },
        [
          () => jn([
            "svelte-flow__connection",
            w0(n().connection.isValid)
          ])
        ]
      ), L(p, h);
    };
    ue(d, (p) => {
      n().connection.inProgress && p(f);
    });
  }
  return L(e, u), pe(l);
}
le(
  Md,
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
var sy = /* @__PURE__ */ te("<div><!></div>");
function Fo(e, t) {
  fe(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ P(() => `${n()}`.split("-"));
  var l = {
    get position() {
      return n();
    },
    set position(f = "top-right") {
      n(f), v();
    },
    get style() {
      return r();
    },
    set style(f) {
      r(f), v();
    },
    get class() {
      return o();
    },
    set class(f) {
      o(f), v();
    },
    get children() {
      return i();
    },
    set children(f) {
      i(f), v();
    }
  }, u = sy();
  pt(u, (f) => ({ class: f, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return it(d, () => i() ?? Ct), j(u), L(e, u), pe(l);
}
le(Fo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var ay = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Od(e, t) {
  fe(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), v();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), v();
    }
  }, i = Oe(), s = ae(i);
  {
    var a = (l) => {
      Fo(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var f = ay();
          L(u, f);
        },
        $$slots: { default: !0 }
      });
    };
    ue(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return L(e, i), pe(o);
}
le(Od, { proOptions: {}, position: {} }, [], [], !0);
var ly = /* @__PURE__ */ te("<div><!></div>");
const uy = {
  hash: "svelte-1q89zv",
  code: ".svelte-flow.svelte-1q89zv {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function Ld(e, t) {
  fe(t, !0), Xe(e, uy);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ P(() => u().class), f = /* @__PURE__ */ P(() => rh(u(), [
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
  function p(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var h = {
    get width() {
      return n();
    },
    set width(w) {
      n(w), v();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), v();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), v();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), v();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), v();
    }
  }, g = ly();
  pt(
    g,
    (w) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: p,
      ...c(f),
      [bn]: w
    }),
    [
      () => ({ width: kn(n()), height: kn(r()) })
    ],
    void 0,
    "svelte-1q89zv"
  );
  var y = B(g);
  return it(y, () => l() ?? Ct), j(g), Zt(g, (w) => i(w), () => i()), sl(g, "clientHeight", a), sl(g, "clientWidth", s), L(e, g), pe(h);
}
le(
  Ld,
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
var cy = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), dy = /* @__PURE__ */ te("<!> <!>", 1), fy = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function Dd(e, t) {
  fe(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), f = m(t, "nodeClickDistance", 7, 1), p = m(t, "onmovestart", 7), h = m(t, "onmoveend", 7), g = m(t, "onmove", 7), y = m(t, "oninit", 7), w = m(t, "onnodeclick", 7), $ = m(t, "onnodecontextmenu", 7), C = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), S = m(t, "onnodedragstop", 7), N = m(t, "onnodepointerenter", 7), E = m(t, "onnodepointermove", 7), O = m(t, "onnodepointerleave", 7), V = m(t, "onselectionclick", 7), Z = m(t, "onselectioncontextmenu", 7), W = m(t, "onselectionstart", 7), I = m(t, "onselectionend", 7), k = m(t, "onedgeclick", 7), _ = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), M = m(t, "onedgepointerleave", 7), T = m(t, "onpaneclick", 7), R = m(t, "onpanecontextmenu", 7), K = m(t, "panOnScrollMode", 23, () => wr.Free), Y = m(t, "preventScrolling", 7, !0), D = m(t, "zoomOnScroll", 7, !0), J = m(t, "zoomOnDoubleClick", 7, !0), F = m(t, "zoomOnPinch", 7, !0), Q = m(t, "panOnScroll", 7, !1), z = m(t, "panOnScrollSpeed", 7, 0.5), q = m(t, "panOnDrag", 7, !0), U = m(t, "selectionOnDrag", 7, !0), ne = m(t, "connectionLineComponent", 7), re = m(t, "connectionLineStyle", 7), ee = m(t, "connectionLineContainerStyle", 7), ge = m(t, "connectionLineType", 23, () => Tn.Bezier), ce = m(t, "attributionPosition", 7), ie = m(t, "children", 7), se = m(t, "nodes", 31, () => Wt([])), ve = m(t, "edges", 31, () => Wt([])), me = m(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ qe(t, [
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
  ]), de = gd({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return se();
    },
    set nodes(X) {
      se(X);
    },
    get edges() {
      return ve();
    },
    set edges(X) {
      ve(X);
    },
    get viewport() {
      return me();
    },
    set viewport(X) {
      me(X);
    }
  });
  const _e = Qn(Ti);
  _e && _e.setStore && _e.setStore(de), Zr(Ti, {
    provider: !1,
    getStore() {
      return de;
    }
  }), ot(() => {
    const X = { nodes: de.selectedNodes, edges: de.selectedEdges };
    bt(() => t.onselectionchange)?.(X);
    for (const Ke of de.selectionChangeHandlers.values())
      Ke(X);
  }), Io(() => {
    de.reset();
  });
  var Me = {
    get width() {
      return n();
    },
    set width(X) {
      n(X), v();
    },
    get height() {
      return r();
    },
    set height(X) {
      r(X), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(X) {
      o(X), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(X) {
      i(X), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(X) {
      s(X), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(X) {
      a(X), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(X) {
      l(X), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(X) {
      u(X), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(X = 1) {
      d(X), v();
    },
    get nodeClickDistance() {
      return f();
    },
    set nodeClickDistance(X = 1) {
      f(X), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(X) {
      p(X), v();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(X) {
      h(X), v();
    },
    get onmove() {
      return g();
    },
    set onmove(X) {
      g(X), v();
    },
    get oninit() {
      return y();
    },
    set oninit(X) {
      y(X), v();
    },
    get onnodeclick() {
      return w();
    },
    set onnodeclick(X) {
      w(X), v();
    },
    get onnodecontextmenu() {
      return $();
    },
    set onnodecontextmenu(X) {
      $(X), v();
    },
    get onnodedrag() {
      return C();
    },
    set onnodedrag(X) {
      C(X), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(X) {
      x(X), v();
    },
    get onnodedragstop() {
      return S();
    },
    set onnodedragstop(X) {
      S(X), v();
    },
    get onnodepointerenter() {
      return N();
    },
    set onnodepointerenter(X) {
      N(X), v();
    },
    get onnodepointermove() {
      return E();
    },
    set onnodepointermove(X) {
      E(X), v();
    },
    get onnodepointerleave() {
      return O();
    },
    set onnodepointerleave(X) {
      O(X), v();
    },
    get onselectionclick() {
      return V();
    },
    set onselectionclick(X) {
      V(X), v();
    },
    get onselectioncontextmenu() {
      return Z();
    },
    set onselectioncontextmenu(X) {
      Z(X), v();
    },
    get onselectionstart() {
      return W();
    },
    set onselectionstart(X) {
      W(X), v();
    },
    get onselectionend() {
      return I();
    },
    set onselectionend(X) {
      I(X), v();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(X) {
      k(X), v();
    },
    get onedgecontextmenu() {
      return _();
    },
    set onedgecontextmenu(X) {
      _(X), v();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(X) {
      b(X), v();
    },
    get onedgepointerleave() {
      return M();
    },
    set onedgepointerleave(X) {
      M(X), v();
    },
    get onpaneclick() {
      return T();
    },
    set onpaneclick(X) {
      T(X), v();
    },
    get onpanecontextmenu() {
      return R();
    },
    set onpanecontextmenu(X) {
      R(X), v();
    },
    get panOnScrollMode() {
      return K();
    },
    set panOnScrollMode(X = wr.Free) {
      K(X), v();
    },
    get preventScrolling() {
      return Y();
    },
    set preventScrolling(X = !0) {
      Y(X), v();
    },
    get zoomOnScroll() {
      return D();
    },
    set zoomOnScroll(X = !0) {
      D(X), v();
    },
    get zoomOnDoubleClick() {
      return J();
    },
    set zoomOnDoubleClick(X = !0) {
      J(X), v();
    },
    get zoomOnPinch() {
      return F();
    },
    set zoomOnPinch(X = !0) {
      F(X), v();
    },
    get panOnScroll() {
      return Q();
    },
    set panOnScroll(X = !1) {
      Q(X), v();
    },
    get panOnScrollSpeed() {
      return z();
    },
    set panOnScrollSpeed(X = 0.5) {
      z(X), v();
    },
    get panOnDrag() {
      return q();
    },
    set panOnDrag(X = !0) {
      q(X), v();
    },
    get selectionOnDrag() {
      return U();
    },
    set selectionOnDrag(X = !0) {
      U(X), v();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(X) {
      ne(X), v();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(X) {
      re(X), v();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(X) {
      ee(X), v();
    },
    get connectionLineType() {
      return ge();
    },
    set connectionLineType(X = Tn.Bezier) {
      ge(X), v();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(X) {
      ce(X), v();
    },
    get children() {
      return ie();
    },
    set children(X) {
      ie(X), v();
    },
    get nodes() {
      return se();
    },
    set nodes(X = []) {
      se(X), v();
    },
    get edges() {
      return ve();
    },
    set edges(X = []) {
      ve(X), v();
    },
    get viewport() {
      return me();
    },
    set viewport(X = void 0) {
      me(X), v();
    }
  };
  return Ld(e, {
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
      return xe;
    },
    get domNode() {
      return de.domNode;
    },
    set domNode(X) {
      de.domNode = X;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(X) {
      de.width = X;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(X) {
      de.height = X;
    },
    children: (X, Ke) => {
      var De = fy(), je = ae(De);
      Td(je, {
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
        set store(Ze) {
          de = Ze;
        }
      });
      var Fe = A(je, 2);
      vd(Fe, {
        get panOnScrollMode() {
          return K();
        },
        get preventScrolling() {
          return Y();
        },
        get zoomOnScroll() {
          return D();
        },
        get zoomOnDoubleClick() {
          return J();
        },
        get zoomOnPinch() {
          return F();
        },
        get panOnScroll() {
          return Q();
        },
        get panOnScrollSpeed() {
          return z();
        },
        get panOnDrag() {
          return q();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return p();
        },
        get onmove() {
          return g();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return y();
        },
        get store() {
          return de;
        },
        set store(Ze) {
          de = Ze;
        },
        children: (Ze, ye) => {
          md(Ze, {
            get onpaneclick() {
              return T();
            },
            get onpanecontextmenu() {
              return R();
            },
            get onselectionstart() {
              return W();
            },
            get onselectionend() {
              return I();
            },
            get panOnDrag() {
              return q();
            },
            get selectionOnDrag() {
              return U();
            },
            get store() {
              return de;
            },
            set store(Ye) {
              de = Ye;
            },
            children: (Ye, yt) => {
              var tt = dy(), kt = ae(tt);
              yd(kt, {
                get store() {
                  return de;
                },
                set store(dt) {
                  de = dt;
                },
                children: (dt, gn) => {
                  var vn = cy(), Yn = A(ae(vn), 2);
                  Pd(Yn, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return _();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return M();
                    },
                    get store() {
                      return de;
                    },
                    set store(tn) {
                      de = tn;
                    }
                  });
                  var cr = A(Yn, 4);
                  Md(cr, {
                    get type() {
                      return ge();
                    },
                    get LineComponent() {
                      return ne();
                    },
                    get containerStyle() {
                      return ee();
                    },
                    get style() {
                      return re();
                    },
                    get store() {
                      return de;
                    },
                    set store(tn) {
                      de = tn;
                    }
                  });
                  var Pn = A(cr, 2);
                  _d(Pn, {
                    get nodeClickDistance() {
                      return f();
                    },
                    get onnodeclick() {
                      return w();
                    },
                    get onnodecontextmenu() {
                      return $();
                    },
                    get onnodepointerenter() {
                      return N();
                    },
                    get onnodepointermove() {
                      return E();
                    },
                    get onnodepointerleave() {
                      return O();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return de;
                    },
                    set store(tn) {
                      de = tn;
                    }
                  });
                  var ao = A(Pn, 2);
                  Nd(ao, {
                    get onselectionclick() {
                      return V();
                    },
                    get onselectioncontextmenu() {
                      return Z();
                    },
                    get onnodedrag() {
                      return C();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return S();
                    },
                    get store() {
                      return de;
                    },
                    set store(tn) {
                      de = tn;
                    }
                  }), be(2), L(dt, vn);
                },
                $$slots: { default: !0 }
              });
              var ct = A(kt, 2);
              {
                let dt = /* @__PURE__ */ P(() => !!(de.selectionRect && de.selectionRectMode === "user")), gn = /* @__PURE__ */ P(() => de.selectionRect?.width), vn = /* @__PURE__ */ P(() => de.selectionRect?.height), Yn = /* @__PURE__ */ P(() => de.selectionRect?.x), cr = /* @__PURE__ */ P(() => de.selectionRect?.y);
                Pa(ct, {
                  get isVisible() {
                    return c(dt);
                  },
                  get width() {
                    return c(gn);
                  },
                  get height() {
                    return c(vn);
                  },
                  get x() {
                    return c(Yn);
                  },
                  get y() {
                    return c(cr);
                  }
                });
              }
              L(Ye, tt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var nt = A(Fe, 2);
      Od(nt, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var _t = A(nt, 2);
      bd(_t, {
        get store() {
          return de;
        }
      });
      var et = A(_t, 2);
      it(et, () => ie() ?? Ct), L(X, De);
    },
    $$slots: { default: !0 }
  }), pe(Me);
}
le(
  Dd,
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
function Vd(e, t) {
  fe(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Le(gd({ props: {}, nodes: [], edges: [] }));
  Zr(Ti, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      G(r, a);
    }
  }), Io(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    }
  }, i = Oe(), s = ae(i);
  return it(s, () => n() ?? Ct), L(e, i), pe(o);
}
le(Vd, { children: {} }, [], [], !0);
var py = /* @__PURE__ */ te("<button><!></button>");
function mo(e, t) {
  fe(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ qe(t, [
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
  var f = {
    get class() {
      return n();
    },
    set class(g) {
      n(g), v();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), v();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), v();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), v();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), v();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), v();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), v();
    },
    get children() {
      return u();
    },
    set children(g) {
      u(g), v();
    }
  }, p = py();
  pt(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [bn]: g
    }),
    [
      () => ({
        "--xy-controls-button-background-color-props": r(),
        "--xy-controls-button-background-color-hover-props": o(),
        "--xy-controls-button-color-props": i(),
        "--xy-controls-button-color-hover-props": s(),
        "--xy-controls-button-border-color-props": a()
      })
    ]
  );
  var h = B(p);
  return it(h, () => u() ?? Ct), j(p), L(e, p), pe(f);
}
le(
  mo,
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
var hy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Ad(e) {
  var t = hy();
  L(e, t);
}
le(Ad, {}, [], [], !0);
var gy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Hd(e) {
  var t = gy();
  L(e, t);
}
le(Hd, {}, [], [], !0);
var vy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function zd(e) {
  var t = vy();
  L(e, t);
}
le(zd, {}, [], [], !0);
var my = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Id(e) {
  var t = my();
  L(e, t);
}
le(Id, {}, [], [], !0);
var yy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function Rd(e) {
  var t = yy();
  L(e, t);
}
le(Rd, {}, [], [], !0);
var wy = /* @__PURE__ */ te("<!> <!>", 1), by = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function jd(e, t) {
  fe(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), f = m(t, "buttonColor", 7), p = m(t, "buttonColorHover", 7), h = m(t, "buttonBorderColor", 7), g = m(t, "fitViewOptions", 7), y = m(t, "children", 7), w = m(t, "before", 7), $ = m(t, "after", 7), C = /* @__PURE__ */ qe(t, [
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
  ]), x = /* @__PURE__ */ P(pn);
  const S = {
    bgColor: u(),
    bgColorHover: d(),
    color: f(),
    colorHover: p(),
    borderColor: h()
  };
  let N = /* @__PURE__ */ P(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), E = /* @__PURE__ */ P(() => c(x).viewport.zoom <= c(x).minZoom), O = /* @__PURE__ */ P(() => c(x).viewport.zoom >= c(x).maxZoom), V = /* @__PURE__ */ P(() => c(x).ariaLabelConfig), Z = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const W = () => {
    c(x).zoomIn();
  }, I = () => {
    c(x).zoomOut();
  }, k = () => {
    c(x).fitView(g());
  }, _ = () => {
    let M = !c(N);
    c(x).nodesDraggable = M, c(x).nodesConnectable = M, c(x).elementsSelectable = M;
  };
  var b = {
    get position() {
      return n();
    },
    set position(M = "bottom-left") {
      n(M), v();
    },
    get orientation() {
      return r();
    },
    set orientation(M = "vertical") {
      r(M), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(M = !0) {
      o(M), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(M = !0) {
      i(M), v();
    },
    get showLock() {
      return s();
    },
    set showLock(M = !0) {
      s(M), v();
    },
    get style() {
      return a();
    },
    set style(M) {
      a(M), v();
    },
    get class() {
      return l();
    },
    set class(M) {
      l(M), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(M) {
      u(M), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(M) {
      d(M), v();
    },
    get buttonColor() {
      return f();
    },
    set buttonColor(M) {
      f(M), v();
    },
    get buttonColorHover() {
      return p();
    },
    set buttonColorHover(M) {
      p(M), v();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(M) {
      h(M), v();
    },
    get fitViewOptions() {
      return g();
    },
    set fitViewOptions(M) {
      g(M), v();
    },
    get children() {
      return y();
    },
    set children(M) {
      y(M), v();
    },
    get before() {
      return w();
    },
    set before(M) {
      w(M), v();
    },
    get after() {
      return $();
    },
    set after(M) {
      $(M), v();
    }
  };
  {
    let M = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      c(Z),
      l()
    ]);
    Fo(e, Ue(
      {
        get class() {
          return c(M);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(V)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => C,
      {
        children: (T, R) => {
          var K = by(), Y = ae(K);
          {
            var D = (ce) => {
              var ie = Oe(), se = ae(ie);
              it(se, w), L(ce, ie);
            };
            ue(Y, (ce) => {
              w() && ce(D);
            });
          }
          var J = A(Y, 2);
          {
            var F = (ce) => {
              var ie = wy(), se = ae(ie);
              mo(se, Ue(
                {
                  onclick: W,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(V)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(O);
                  }
                },
                () => S,
                {
                  children: (me, xe) => {
                    Ad(me);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var ve = A(se, 2);
              mo(ve, Ue(
                {
                  onclick: I,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(V)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(E);
                  }
                },
                () => S,
                {
                  children: (me, xe) => {
                    Hd(me);
                  },
                  $$slots: { default: !0 }
                }
              )), L(ce, ie);
            };
            ue(J, (ce) => {
              o() && ce(F);
            });
          }
          var Q = A(J, 2);
          {
            var z = (ce) => {
              mo(ce, Ue(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(V)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.fitView.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (ie, se) => {
                    zd(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(Q, (ce) => {
              i() && ce(z);
            });
          }
          var q = A(Q, 2);
          {
            var U = (ce) => {
              mo(ce, Ue(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: _,
                  get title() {
                    return c(V)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(V)["controls.interactive.ariaLabel"];
                  }
                },
                () => S,
                {
                  children: (ie, se) => {
                    var ve = Oe(), me = ae(ve);
                    {
                      var xe = (_e) => {
                        Rd(_e);
                      }, de = (_e) => {
                        Id(_e);
                      };
                      ue(me, (_e) => {
                        c(N) ? _e(xe) : _e(de, !1);
                      });
                    }
                    L(ie, ve);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(q, (ce) => {
              s() && ce(U);
            });
          }
          var ne = A(q, 2);
          {
            var re = (ce) => {
              var ie = Oe(), se = ae(ie);
              it(se, y), L(ce, ie);
            };
            ue(ne, (ce) => {
              y() && ce(re);
            });
          }
          var ee = A(ne, 2);
          {
            var ge = (ce) => {
              var ie = Oe(), se = ae(ie);
              it(se, $), L(ce, ie);
            };
            ue(ee, (ce) => {
              $() && ce(ge);
            });
          }
          L(T, K);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return pe(b);
}
le(
  jd,
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
var Ln;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Ln || (Ln = {}));
var xy = /* @__PURE__ */ we("<circle></circle>");
function Bd(e, t) {
  fe(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), v();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), v();
    }
  }, i = xy();
  return Ee(() => {
    ke(i, "cx", n()), ke(i, "cy", n()), ke(i, "r", n()), Rt(i, 0, jn(["svelte-flow__background-pattern", "dots", r()]));
  }), L(e, i), pe(o);
}
le(Bd, { radius: {}, class: {} }, [], [], !0);
var Cy = /* @__PURE__ */ we("<path></path>");
function Kd(e, t) {
  fe(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), v();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), v();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), v();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), v();
    }
  }, a = Cy();
  return Ee(() => {
    ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Rt(a, 0, jn(["svelte-flow__background-pattern", o(), i()]));
  }), L(e, a), pe(s);
}
le(Kd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const $y = {
  [Ln.Dots]: 1,
  [Ln.Lines]: 1,
  [Ln.Cross]: 6
};
var _y = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Zd(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => Ln.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), f = /* @__PURE__ */ P(pn), p = /* @__PURE__ */ P(() => r() === Ln.Dots), h = /* @__PURE__ */ P(() => r() === Ln.Cross), g = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ P(() => `background-pattern-${c(f).flowId}-${n() ?? ""}`), w = /* @__PURE__ */ P(() => [
    c(g)[0] * c(f).viewport.zoom || 1,
    c(g)[1] * c(f).viewport.zoom || 1
  ]), $ = /* @__PURE__ */ P(() => (i() ?? $y[r()]) * c(f).viewport.zoom), C = /* @__PURE__ */ P(() => c(h) ? [c($), c($)] : c(w)), x = /* @__PURE__ */ P(() => c(p) ? [c($) / 2, c($) / 2] : [
    c(C)[0] / 2,
    c(C)[1] / 2
  ]);
  var S = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), v();
    },
    get variant() {
      return r();
    },
    set variant(k = Ln.Dots) {
      r(k), v();
    },
    get gap() {
      return o();
    },
    set gap(k = 20) {
      o(k), v();
    },
    get size() {
      return i();
    },
    set size(k) {
      i(k), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(k = 1) {
      s(k), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(k) {
      a(k), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(k) {
      l(k), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(k) {
      u(k), v();
    },
    get class() {
      return d();
    },
    set class(k) {
      d(k), v();
    }
  }, N = _y();
  let E;
  var O = B(N), V = B(O);
  {
    var Z = (k) => {
      {
        let _ = /* @__PURE__ */ P(() => c($) / 2);
        Bd(k, {
          get radius() {
            return c(_);
          },
          get class() {
            return u();
          }
        });
      }
    }, W = (k) => {
      Kd(k, {
        get dimensions() {
          return c(C);
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
    ue(V, (k) => {
      c(p) ? k(Z) : k(W, !1);
    });
  }
  j(O);
  var I = A(O);
  return j(N), Ee(
    (k) => {
      Rt(N, 0, jn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), E = $t(N, "", E, k), ke(O, "id", c(y)), ke(O, "x", c(f).viewport.x % c(w)[0]), ke(O, "y", c(f).viewport.y % c(w)[1]), ke(O, "width", c(w)[0]), ke(O, "height", c(w)[1]), ke(O, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), ke(I, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), L(e, N), pe(S);
}
le(
  Zd,
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
var ky = /* @__PURE__ */ we("<rect></rect>");
function Yd(e, t) {
  fe(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), f = m(t, "selected", 7), p = m(t, "class", 7), h = m(t, "nodeComponent", 7);
  var g = {
    get x() {
      return n();
    },
    set x(x) {
      n(x), v();
    },
    get y() {
      return r();
    },
    set y(x) {
      r(x), v();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), v();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), v();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(x = 5) {
      s(x), v();
    },
    get color() {
      return a();
    },
    set color(x) {
      a(x), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(x) {
      l(x), v();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(x) {
      u(x), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(x = 2) {
      d(x), v();
    },
    get selected() {
      return f();
    },
    set selected(x) {
      f(x), v();
    },
    get class() {
      return p();
    },
    set class(x) {
      p(x), v();
    },
    get nodeComponent() {
      return h();
    },
    set nodeComponent(x) {
      h(x), v();
    }
  }, y = Oe(), w = ae(y);
  {
    var $ = (x) => {
      const S = /* @__PURE__ */ P(h);
      var N = Oe(), E = ae(N);
      ji(E, () => c(S), (O, V) => {
        V(O, {
          get x() {
            return n();
          },
          get y() {
            return r();
          },
          get width() {
            return o();
          },
          get height() {
            return i();
          },
          get borderRadius() {
            return s();
          },
          get class() {
            return p();
          },
          get color() {
            return a();
          },
          get shapeRendering() {
            return l();
          },
          get strokeColor() {
            return u();
          },
          get strokeWidth() {
            return d();
          },
          get selected() {
            return f();
          }
        });
      }), L(x, N);
    }, C = (x) => {
      var S = ky();
      let N, E;
      Ee(
        (O, V) => {
          N = Rt(S, 0, jn(["svelte-flow__minimap-node", p()]), null, N, O), ke(S, "x", n()), ke(S, "y", r()), ke(S, "rx", s()), ke(S, "ry", s()), ke(S, "width", o()), ke(S, "height", i()), ke(S, "shape-rendering", l()), E = $t(S, "", E, V);
        },
        [
          () => ({ selected: f() }),
          () => ({
            fill: a(),
            stroke: u(),
            "stroke-width": d()
          })
        ]
      ), L(x, S);
    };
    ue(w, (x) => {
      h() ? x($) : x(C, !1);
    });
  }
  return L(e, y), pe(g);
}
le(
  Yd,
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
    class: {},
    nodeComponent: {}
  },
  [],
  [],
  !0
);
function Sy(e, t) {
  const n = um({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const { viewport: o } = t.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  n.update({
    translateExtent: t.translateExtent,
    width: t.width,
    height: t.height,
    inversePan: t.inversePan,
    zoomStep: t.zoomStep,
    pannable: t.pannable,
    zoomable: t.zoomable
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
const gs = (e) => e instanceof Function ? e : () => e;
var Ey = /* @__PURE__ */ we("<title> </title>"), Py = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Ny = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Xd(e, t) {
  fe(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "nodeComponent", 7), d = m(t, "bgColor", 7), f = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), h = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), y = m(t, "height", 7, 150), w = m(t, "pannable", 7, !0), $ = m(t, "zoomable", 7, !0), C = m(t, "inversePan", 7), x = m(t, "zoomStep", 7), S = m(t, "class", 7), N = /* @__PURE__ */ qe(t, [
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
  ]), E = /* @__PURE__ */ P(pn), O = /* @__PURE__ */ P(() => c(E).ariaLabelConfig);
  const V = i() === void 0 ? void 0 : gs(i()), Z = gs(o()), W = gs(s()), I = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${c(E).flowId}`), _ = /* @__PURE__ */ P(() => ({
    x: -c(E).viewport.x / c(E).viewport.zoom,
    y: -c(E).viewport.y / c(E).viewport.zoom,
    width: c(E).width / c(E).viewport.zoom,
    height: c(E).height / c(E).viewport.zoom
  })), b = /* @__PURE__ */ P(() => c(E).nodeLookup.size > 0 ? jc(Ko(c(E).nodeLookup, { filter: (ee) => !ee.hidden }), c(_)) : c(_)), M = /* @__PURE__ */ P(() => c(b).width / g()), T = /* @__PURE__ */ P(() => c(b).height / y()), R = /* @__PURE__ */ P(() => Math.max(c(M), c(T))), K = /* @__PURE__ */ P(() => c(R) * g()), Y = /* @__PURE__ */ P(() => c(R) * y()), D = /* @__PURE__ */ P(() => 5 * c(R)), J = /* @__PURE__ */ P(() => c(b).x - (c(K) - c(b).width) / 2 - c(D)), F = /* @__PURE__ */ P(() => c(b).y - (c(Y) - c(b).height) / 2 - c(D)), Q = /* @__PURE__ */ P(() => c(K) + c(D) * 2), z = /* @__PURE__ */ P(() => c(Y) + c(D) * 2);
  const q = () => c(R);
  var U = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), v();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ee) {
      u(ee), v();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), v();
    },
    get maskColor() {
      return f();
    },
    set maskColor(ee) {
      f(ee), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(ee) {
      p(ee), v();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(ee) {
      h(ee), v();
    },
    get width() {
      return g();
    },
    set width(ee = 200) {
      g(ee), v();
    },
    get height() {
      return y();
    },
    set height(ee = 150) {
      y(ee), v();
    },
    get pannable() {
      return w();
    },
    set pannable(ee = !0) {
      w(ee), v();
    },
    get zoomable() {
      return $();
    },
    set zoomable(ee = !0) {
      $(ee), v();
    },
    get inversePan() {
      return C();
    },
    set inversePan(ee) {
      C(ee), v();
    },
    get zoomStep() {
      return x();
    },
    set zoomStep(ee) {
      x(ee), v();
    },
    get class() {
      return S();
    },
    set class(ee) {
      S(ee), v();
    }
  }, ne = Ny(), re = ae(ne);
  {
    let ee = /* @__PURE__ */ P(() => ["svelte-flow__minimap", S()]);
    mh(re, () => ({ "--xy-minimap-background-color-props": d() })), Fo(re.lastChild, Ue(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => N,
      {
        children: (ge, ce) => {
          var ie = Oe(), se = ae(ie);
          {
            var ve = (me) => {
              var xe = Py();
              let de;
              var _e = B(xe);
              {
                var Me = (De) => {
                  var je = Ey(), Fe = B(je, !0);
                  j(je), Ee(() => {
                    ke(je, "id", c(k)), Je(Fe, r() ?? c(O)["minimap.ariaLabel"]);
                  }), L(De, je);
                };
                ue(_e, (De) => {
                  (r() ?? c(O)["minimap.ariaLabel"]) && De(Me);
                });
              }
              var X = A(_e);
              Pt(X, 17, () => c(E).nodes, (De) => De.id, (De, je) => {
                const Fe = /* @__PURE__ */ P(() => c(E).nodeLookup.get(c(je).id));
                var nt = Oe(), _t = ae(nt);
                {
                  var et = (Ze) => {
                    const ye = /* @__PURE__ */ P(() => lr(c(Fe)));
                    {
                      let Ye = /* @__PURE__ */ P(() => V?.(c(Fe))), yt = /* @__PURE__ */ P(() => Z(c(Fe))), tt = /* @__PURE__ */ P(() => W(c(Fe)));
                      Yd(Ze, Ue(
                        {
                          get x() {
                            return c(Fe).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Fe).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ye),
                        {
                          get selected() {
                            return c(Fe).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(Ye);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(yt);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return I;
                          },
                          get class() {
                            return c(tt);
                          }
                        }
                      ));
                    }
                  };
                  ue(_t, (Ze) => {
                    c(Fe) && Bc(c(Fe)) && Ze(et);
                  });
                }
                L(De, nt);
              });
              var Ke = A(X);
              j(xe), St(xe, (De, je) => Sy?.(De, je), () => ({
                store: c(E),
                panZoom: c(E).panZoom,
                getViewScale: q,
                translateExtent: c(E).translateExtent,
                width: c(E).width,
                height: c(E).height,
                inversePan: C(),
                zoomStep: x(),
                pannable: w(),
                zoomable: $()
              })), Ee(
                (De) => {
                  ke(xe, "width", g()), ke(xe, "height", y()), ke(xe, "viewBox", `${c(J) ?? ""} ${c(F) ?? ""} ${c(Q) ?? ""} ${c(z) ?? ""}`), ke(xe, "aria-labelledby", c(k)), de = $t(xe, "", de, De), ke(Ke, "d", `M${c(J) - c(D)},${c(F) - c(D)}h${c(Q) + c(D) * 2}v${c(z) + c(D) * 2}h${-c(Q) - c(D) * 2}z
      M${c(_).x ?? ""},${c(_).y ?? ""}h${c(_).width ?? ""}v${c(_).height ?? ""}h${-c(_).width}z`);
                },
                [
                  () => ({
                    "--xy-minimap-mask-background-color-props": f(),
                    "--xy-minimap-mask-stroke-color-props": p(),
                    "--xy-minimap-mask-stroke-width-props": h() ? h() * c(R) : void 0
                  })
                ]
              ), L(me, xe);
            };
            ue(se, (me) => {
              c(E).panZoom && me(ve);
            });
          }
          L(ge, ie);
        },
        $$slots: { default: !0 }
      }
    )), j(re);
  }
  return L(e, ne), pe(U);
}
le(
  Xd,
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
var Ty = /* @__PURE__ */ te("<div><!></div>");
function Fd(e, t) {
  fe(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => $e.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ qe(t, [
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
  const u = pn(), { getNodesBounds: d } = mt(), f = Qn("svelteflow__node_id");
  let p = /* @__PURE__ */ P(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? f]).reduce(
    (N, E) => {
      const O = u.nodeLookup.get(E);
      return O && N.push(O), N;
    },
    []
  ))), h = /* @__PURE__ */ P(() => {
    const N = d(c(p));
    return N ? K0(N, u.viewport, r(), i(), o()) : "";
  }), g = /* @__PURE__ */ P(() => c(p).length === 0 ? 1 : Math.max(...c(p).map((N) => (N.internals.z || 5) + 1))), y = /* @__PURE__ */ P(() => u.nodes.filter((N) => N.selected).length), w = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : c(p).length === 1 && c(p)[0].selected && c(y) === 1);
  var $ = {
    get nodeId() {
      return n();
    },
    set nodeId(N) {
      n(N), v();
    },
    get position() {
      return r();
    },
    set position(N = $e.Top) {
      r(N), v();
    },
    get align() {
      return o();
    },
    set align(N = "center") {
      o(N), v();
    },
    get offset() {
      return i();
    },
    set offset(N = 10) {
      i(N), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(N) {
      s(N), v();
    },
    get children() {
      return a();
    },
    set children(N) {
      a(N), v();
    }
  }, C = Oe(), x = ae(C);
  {
    var S = (N) => {
      var E = Ty();
      pt(
        E,
        (V, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": V,
          ...l,
          [bn]: Z
        }),
        [
          () => c(p).reduce((V, Z) => `${V}${Z.id} `, "").trim(),
          () => ({
            display: ld().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(g)
          })
        ]
      );
      var O = B(E);
      it(O, () => a() ?? Ct), j(E), St(E, (V, Z) => ad?.(V, Z), () => "root"), L(N, E);
    };
    ue(x, (N) => {
      u.domNode && c(w) && c(p) && N(S);
    });
  }
  return L(e, C), pe($);
}
le(
  Fd,
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
function Bn(e) {
  const t = /* @__PURE__ */ P(pn), n = /* @__PURE__ */ P(() => c(t).nodes), r = /* @__PURE__ */ P(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = c(r).get(d)?.internals.userNode;
      f && a.push({ id: f.id, type: f.type, data: f.data });
    }
    return (!em(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const ql = "tinyflow-component", My = [
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
], Oy = [
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
], Na = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Ly = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], Dy = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Vy {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(t) {
    if (typeof t.element != "string" && !(t.element instanceof Element))
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
    const t = document.createElement(ql);
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
    const n = document.createElement(ql);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Ay = () => {
  let e = /* @__PURE__ */ Le([]), t = /* @__PURE__ */ Le([]), n = /* @__PURE__ */ Le({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      G(e, r), G(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      G(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      G(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      G(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      G(e, [...c(e), r]);
    },
    removeNode: (r) => {
      G(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      G(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      G(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      G(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      G(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      G(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      G(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      G(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      G(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      G(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Re = Ay();
var Hy = /* @__PURE__ */ te("<button><!></button>");
function He(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = {
    get children() {
      return n();
    },
    set children(l) {
      n(l), v();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), v();
    }
  }, s = Hy();
  pt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return it(a, () => n() ?? Ct), j(s), L(e, s), pe(i);
}
le(He, { children: {}, primary: {} }, [], [], !0);
var zy = /* @__PURE__ */ te("<input/>");
function qd(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = zy();
  pt(
    r,
    () => ({
      type: "checkbox",
      ...n,
      class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    !0
  ), L(e, r), pe();
}
le(qd, {}, [], [], !0);
var Iy = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Ry = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Wd(e, t) {
  fe(t, !0), Xe(e, Ry);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ qe(t, [
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
    set placeholder(h) {
      n(h), v();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), v();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), v();
    }
  }, u = Iy();
  pt(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = B(u);
  mr(d);
  var f = A(d, 2);
  lt(f, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = A(f, 2);
  return He(p, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, g) => {
      be();
      var y = Pe();
      Ee(() => Je(y, i())), L(h, y);
    },
    $$slots: { default: !0 }
  }), j(u), Ee(() => ai(d, o())), L(e, u), pe(l);
}
le(
  Wd,
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
var jy = /* @__PURE__ */ te("<input/>");
function lt(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = jy();
  pt(
    r,
    () => ({
      type: "text",
      spellcheck: "false",
      ...n,
      class: `tf-input  nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    !0
  ), L(e, r), pe();
}
le(lt, {}, [], [], !0);
var By = /* @__PURE__ */ te("<textarea></textarea>");
function Ge(e, t) {
  fe(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = {
    get value() {
      return n();
    },
    set value(s) {
      n(s), v();
    }
  }, i = By();
  return Fp(i), pt(i, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), L(e, i), pe(o);
}
le(Ge, { value: {} }, [], [], !0);
var Ky = /* @__PURE__ */ te('<div role="button"><!></div>'), Zy = /* @__PURE__ */ te("<div></div>");
function Jd(e, t) {
  const n = ul(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = ul(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(d, f) {
    s(f), i()?.(d, f);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), v();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), v();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), v();
    }
  };
  oc();
  var u = Zy();
  return pt(u, () => ({
    ...r,
    class: `tf-tabs ${aa(r), bt(() => r.class) ?? ""}`
  })), Pt(u, 5, o, Wr, (d, f, p) => {
    var h = Ky();
    ke(h, "tabindex", p), h.__click = () => a(c(f), p), h.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(c(f), p));
    };
    var g = B(h);
    {
      var y = ($) => {
        var C = Pe();
        Ee(() => Je(C, (c(f), bt(() => c(f).label)))), L($, C);
      }, w = ($) => {
        var C = Oe(), x = ae(C);
        it(x, () => (c(f), bt(() => c(f).label) ?? Ct)), L($, C);
      };
      ue(g, ($) => {
        c(f), bt(() => typeof c(f).label == "string") ? $(y) : $(w, !1);
      });
    }
    j(h), Ee(() => Rt(h, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), L(d, h);
  }), j(u), L(e, u), pe(l);
}
ar(["click", "keydown"]);
le(Jd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var Yy = (e, t, n) => t(c(n)), Xy = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, Fy = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), qy = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Wy = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Jy = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), Uy = /* @__PURE__ */ te("<div></div>");
const Gy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Ud(e, t) {
  fe(t, !0), Xe(e, Gy);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => Wt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), v();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), v();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), v();
    }
  }, a = Uy();
  return Pt(a, 21, n, Wr, (l, u, d) => {
    var f = Jy(), p = B(f);
    ke(p, "tabindex", d), p.__click = [Yy, i, u], p.__keydown = [Xy, i, u];
    var h = B(p);
    {
      var g = (N) => {
        var E = Fy(), O = B(E);
        Wn(O, {
          get target() {
            return c(u).icon;
          }
        }), j(E), L(N, E);
      };
      ue(h, (N) => {
        c(u).icon && N(g);
      });
    }
    var y = A(h, 2);
    Wn(y, {
      get target() {
        return c(u).title;
      }
    });
    var w = A(y, 2);
    j(p);
    var $ = A(p, 2);
    {
      var C = (N) => {
        var E = qy(), O = B(E);
        Wn(O, {
          get target() {
            return c(u).description;
          }
        }), j(E), L(N, E);
      };
      ue($, (N) => {
        c(u).description && N(C);
      });
    }
    var x = A($, 2);
    {
      var S = (N) => {
        var E = Wy(), O = B(E);
        Wn(O, {
          get target() {
            return c(u).content;
          }
        }), j(E), L(N, E);
      };
      ue(x, (N) => {
        o().includes(c(u).key) && N(S);
      });
    }
    j(f), Ee((N) => Rt(w, 1, `tf-collapse-item-title-arrow ${N ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), L(l, f);
  }), j(a), Ee(() => {
    $t(a, t.style), Rt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), L(e, a), pe(s);
}
ar(["click", "keydown"]);
le(Ud, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Wn(e, t) {
  fe(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), v();
    }
  }, o = Oe(), i = ae(o);
  {
    var s = (l) => {
      var u = Oe(), d = ae(u);
      it(d, () => n() ?? Ct), L(l, u);
    }, a = (l) => {
      var u = Oe(), d = ae(u);
      ca(d, n), L(l, u);
    };
    ue(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return L(e, o), pe(r);
}
le(Wn, { target: {} }, [], [], !0);
var Qy = (e, t, n) => t(c(n)), e2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), t2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), n2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), r2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), o2 = /* @__PURE__ */ te("<!> <!>", 1), i2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), s2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), a2 = /* @__PURE__ */ te("<div><!></div>");
function xt(e, t) {
  fe(t, !0);
  const n = (C, x = Ct) => {
    var S = Oe(), N = ae(S);
    Pt(N, 19, x, (E, O) => `${O}_${E.value}`, (E, O) => {
      var V = n2(), Z = ae(V);
      Z.__click = [Qy, g, O];
      var W = B(Z), I = B(W);
      {
        var k = (T) => {
          var R = e2();
          L(T, R);
        };
        ue(I, (T) => {
          c(O).children && c(O).children.length > 0 && T(k);
        });
      }
      j(W);
      var _ = A(W, 2);
      Wn(_, {
        get target() {
          return c(O).label;
        }
      }), j(Z);
      var b = A(Z, 2);
      {
        var M = (T) => {
          var R = t2(), K = B(R);
          n(K, () => c(O).children), j(R), L(T, R);
        };
        ue(b, (T) => {
          c(O).children && c(O).children.length > 0 && (a() || u().includes(c(O).value)) && T(M);
        });
      }
      L(E, V);
    }), L(C, S);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), f = /* @__PURE__ */ qe(t, [
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
  ]), p = /* @__PURE__ */ P(() => {
    const C = [], x = (S) => {
      for (let N of S)
        i().length > 0 ? i().includes(N.value) && C.push(N) : s().includes(N.value) && C.push(N), N.children && N.children.length > 0 && x(N.children);
    };
    return x(r()), C;
  }), h;
  function g(C) {
    h?.hide(), o()?.(C);
  }
  var y = {
    get items() {
      return r();
    },
    set items(C) {
      r(C), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(C) {
      o(C), v();
    },
    get value() {
      return i();
    },
    set value(C = []) {
      i(C), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(C = []) {
      s(C), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(C = !0) {
      a(C), v();
    },
    get multiple() {
      return l();
    },
    set multiple(C = !1) {
      l(C), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(C = []) {
      u(C), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(C) {
      d(C), v();
    }
  }, w = a2();
  pt(w, () => ({ ...f, class: `tf-select ${f.class ?? ""}` }));
  var $ = B(w);
  return Zt(
    ur($, {
      floating: (C) => {
        var x = r2(), S = B(x);
        n(S, r), j(x), L(C, x);
      },
      children: (C, x) => {
        var S = s2();
        pt(S, () => ({ class: "tf-select-input nopan nodrag", ...f }));
        var N = B(S);
        Pt(
          N,
          23,
          () => c(p),
          (E, O) => `${O}_${E.value}`,
          (E, O, V) => {
            var Z = Oe(), W = ae(Z);
            {
              var I = (_) => {
                var b = Oe(), M = ae(b);
                {
                  var T = (R) => {
                    Wn(R, {
                      get target() {
                        return c(O).label;
                      }
                    });
                  };
                  ue(M, (R) => {
                    c(V) === 0 && R(T);
                  });
                }
                L(_, b);
              }, k = (_) => {
                var b = o2(), M = ae(b);
                Wn(M, {
                  get target() {
                    return c(O).label;
                  }
                });
                var T = A(M, 2);
                {
                  var R = (K) => {
                    var Y = Pe(",");
                    L(K, Y);
                  };
                  ue(T, (K) => {
                    c(V) < c(p).length - 1 && K(R);
                  });
                }
                L(_, b);
              };
              ue(W, (_) => {
                l() ? _(k, !1) : _(I);
              });
            }
            L(E, Z);
          },
          (E) => {
            var O = i2(), V = B(O, !0);
            j(O), Ee(() => Je(V, d())), L(E, O);
          }
        ), j(N), be(2), j(S), L(C, S);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (C) => h = C,
    () => h
  ), j(w), L(e, w), pe(y);
}
ar(["click"]);
le(
  xt,
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
const To = Math.min, Rr = Math.max, Mi = Math.round, _n = (e) => ({
  x: e,
  y: e
}), l2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, u2 = {
  start: "end",
  end: "start"
};
function zs(e, t, n) {
  return Rr(e, To(t, n));
}
function qo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kr(e) {
  return e.split("-")[0];
}
function Wo(e) {
  return e.split("-")[1];
}
function Gd(e) {
  return e === "x" ? "y" : "x";
}
function Ta(e) {
  return e === "y" ? "height" : "width";
}
const c2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Jn(e) {
  return c2.has(kr(e)) ? "y" : "x";
}
function Ma(e) {
  return Gd(Jn(e));
}
function d2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Wo(e), o = Ma(e), i = Ta(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Oi(s)), [s, Oi(s)];
}
function f2(e) {
  const t = Oi(e);
  return [Is(e), t, Is(t)];
}
function Is(e) {
  return e.replace(/start|end/g, (t) => u2[t]);
}
const Wl = ["left", "right"], Jl = ["right", "left"], p2 = ["top", "bottom"], h2 = ["bottom", "top"];
function g2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Jl : Wl : t ? Wl : Jl;
    case "left":
    case "right":
      return t ? p2 : h2;
    default:
      return [];
  }
}
function v2(e, t, n, r) {
  const o = Wo(e);
  let i = g2(kr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Is)))), i;
}
function Oi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => l2[t]);
}
function m2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qd(e) {
  return typeof e != "number" ? m2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Li(e) {
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
  const i = Jn(t), s = Ma(t), a = Ta(s), l = kr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Wo(t)) {
    case "start":
      h[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const y2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Ul(u, r, l), p = r, h = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: w,
      fn: $
    } = a[y], {
      x: C,
      y: x,
      data: S,
      reset: N
    } = await $({
      x: d,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = C ?? d, f = x ?? f, h = {
      ...h,
      [w]: {
        ...h[w],
        ...S
      }
    }, N && g <= 50 && (g++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (u = N.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: d,
      y: f
    } = Ul(u, p, l)), y = -1);
  }
  return {
    x: d,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function ef(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = qo(t, e), g = Qd(h), y = a[p ? f === "floating" ? "reference" : "floating" : f], w = Li(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), $ = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Li(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: $,
    offsetParent: C,
    strategy: l
  }) : $);
  return {
    top: (w.top - S.top + g.top) / x.y,
    bottom: (S.bottom - w.bottom + g.bottom) / x.y,
    left: (w.left - S.left + g.left) / x.x,
    right: (S.right - w.right + g.right) / x.x
  };
}
const w2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: d = 0
    } = qo(e, t) || {};
    if (u == null)
      return {};
    const f = Qd(d), p = {
      x: n,
      y: r
    }, h = Ma(o), g = Ta(h), y = await s.getDimensions(u), w = h === "y", $ = w ? "top" : "left", C = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", S = i.reference[g] + i.reference[h] - p[h] - i.floating[g], N = p[h] - i.reference[h], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let O = E ? E[x] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(E))) && (O = a.floating[x] || i.floating[g]);
    const V = S / 2 - N / 2, Z = O / 2 - y[g] / 2 - 1, W = To(f[$], Z), I = To(f[C], Z), k = W, _ = O - y[g] - I, b = O / 2 - y[g] / 2 + V, M = zs(k, b, _), T = !l.arrow && Wo(o) != null && b !== M && i.reference[g] / 2 - (b < k ? W : I) - y[g] / 2 < 0, R = T ? b < k ? b - k : b - _ : 0;
    return {
      [h]: p[h] + R,
      data: {
        [h]: M,
        centerOffset: b - M - R,
        ...T && {
          alignmentOffset: R
        }
      },
      reset: T
    };
  }
}), b2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: y = !0,
        ...w
      } = qo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = kr(o), C = Jn(a), x = kr(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), N = p || (x || !y ? [Oi(a)] : f2(a)), E = g !== "none";
      !p && E && N.push(...v2(a, y, g, S));
      const O = [a, ...N], V = await ef(t, w), Z = [];
      let W = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Z.push(V[$]), f) {
        const b = d2(o, s, S);
        Z.push(V[b[0]], V[b[1]]);
      }
      if (W = [...W, {
        placement: o,
        overflows: Z
      }], !Z.every((b) => b <= 0)) {
        var I, k;
        const b = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = O[b];
        if (M && (!(f === "alignment" && C !== Jn(M)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        W.every((R) => Jn(R.placement) === C ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: b,
              overflows: W
            },
            reset: {
              placement: M
            }
          };
        let T = (k = W.filter((R) => R.overflows[0] <= 0).sort((R, K) => R.overflows[1] - K.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!T)
          switch (h) {
            case "bestFit": {
              var _;
              const R = (_ = W.filter((K) => {
                if (E) {
                  const Y = Jn(K.placement);
                  return Y === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((K) => [K.placement, K.overflows.filter((Y) => Y > 0).reduce((Y, D) => Y + D, 0)]).sort((K, Y) => K[1] - Y[1])[0]) == null ? void 0 : _[0];
              R && (T = R);
              break;
            }
            case "initialPlacement":
              T = a;
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
}, x2 = /* @__PURE__ */ new Set(["left", "top"]);
async function C2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = kr(n), a = Wo(n), l = Jn(n) === "y", u = x2.has(s) ? -1 : 1, d = i && l ? -1 : 1, f = qo(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * d,
    y: p * u
  } : {
    x: p * u,
    y: h * d
  };
}
const $2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await C2(t, e);
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
}, _2 = function(e) {
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
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x: $,
              y: C
            } = w;
            return {
              x: $,
              y: C
            };
          }
        },
        ...l
      } = qo(e, t), u = {
        x: n,
        y: r
      }, d = await ef(t, l), f = Jn(kr(o)), p = Gd(f);
      let h = u[p], g = u[f];
      if (i) {
        const w = p === "y" ? "top" : "left", $ = p === "y" ? "bottom" : "right", C = h + d[w], x = h - d[$];
        h = zs(C, h, x);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", C = g + d[w], x = g - d[$];
        g = zs(C, g, x);
      }
      const y = a.fn({
        ...t,
        [p]: h,
        [f]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [p]: i,
            [f]: s
          }
        }
      };
    }
  };
};
function Ui() {
  return typeof window < "u";
}
function so(e) {
  return tf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kn(e) {
  var t;
  return (t = (tf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function tf(e) {
  return Ui() ? e instanceof Node || e instanceof Bt(e).Node : !1;
}
function ln(e) {
  return Ui() ? e instanceof Element || e instanceof Bt(e).Element : !1;
}
function Sn(e) {
  return Ui() ? e instanceof HTMLElement || e instanceof Bt(e).HTMLElement : !1;
}
function Gl(e) {
  return !Ui() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
const k2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Jo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = un(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !k2.has(o);
}
const S2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function E2(e) {
  return S2.has(so(e));
}
const P2 = [":popover-open", ":modal"];
function Gi(e) {
  return P2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const N2 = ["transform", "translate", "scale", "rotate", "perspective"], T2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], M2 = ["paint", "layout", "strict", "content"];
function Oa(e) {
  const t = La(), n = ln(e) ? un(e) : e;
  return N2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || T2.some((r) => (n.willChange || "").includes(r)) || M2.some((r) => (n.contain || "").includes(r));
}
function O2(e) {
  let t = nr(e);
  for (; Sn(t) && !no(t); ) {
    if (Oa(t))
      return t;
    if (Gi(t))
      return null;
    t = nr(t);
  }
  return null;
}
function La() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const L2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function no(e) {
  return L2.has(so(e));
}
function un(e) {
  return Bt(e).getComputedStyle(e);
}
function Qi(e) {
  return ln(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function nr(e) {
  if (so(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Gl(e) && e.host || // Fallback.
    Kn(e)
  );
  return Gl(t) ? t.host : t;
}
function nf(e) {
  const t = nr(e);
  return no(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Sn(t) && Jo(t) ? t : nf(t);
}
function rf(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = nf(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Bt(o);
  return i ? (Rs(s), t.concat(s, s.visualViewport || [], Jo(o) ? o : [], [])) : t.concat(o, rf(o, []));
}
function Rs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function of(e) {
  const t = un(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Sn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Mi(n) !== i || Mi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function sf(e) {
  return ln(e) ? e : e.contextElement;
}
function jr(e) {
  const t = sf(e);
  if (!Sn(t))
    return _n(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = of(t);
  let s = (i ? Mi(n.width) : n.width) / r, a = (i ? Mi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const D2 = /* @__PURE__ */ _n(0);
function af(e) {
  const t = Bt(e);
  return !La() || !t.visualViewport ? D2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function V2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function Mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = sf(e);
  let s = _n(1);
  t && (r ? ln(r) && (s = jr(r)) : s = jr(e));
  const a = V2(i, n, r) ? af(i) : _n(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (i) {
    const p = Bt(i), h = r && ln(r) ? Bt(r) : r;
    let g = p, y = Rs(g);
    for (; y && r && h !== g; ) {
      const w = jr(y), $ = y.getBoundingClientRect(), C = un(y), x = $.left + (y.clientLeft + parseFloat(C.paddingLeft)) * w.x, S = $.top + (y.clientTop + parseFloat(C.paddingTop)) * w.y;
      l *= w.x, u *= w.y, d *= w.x, f *= w.y, l += x, u += S, g = Bt(y), y = Rs(g);
    }
  }
  return Li({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function es(e, t) {
  const n = Qi(e).scrollLeft;
  return t ? t.left + n : Mo(Kn(e)).left + n;
}
function lf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - es(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function A2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Kn(r), a = t ? Gi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = _n(1);
  const d = _n(0), f = Sn(r);
  if ((f || !f && !i) && ((so(r) !== "body" || Jo(s)) && (l = Qi(r)), Sn(r))) {
    const h = Mo(r);
    u = jr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const p = s && !f && !i ? lf(s, l) : _n(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + p.y
  };
}
function H2(e) {
  return Array.from(e.getClientRects());
}
function z2(e) {
  const t = Kn(e), n = Qi(e), r = e.ownerDocument.body, o = Rr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Rr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + es(e);
  const a = -n.scrollTop;
  return un(r).direction === "rtl" && (s += Rr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Ql = 25;
function I2(e, t) {
  const n = Bt(e), r = Kn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = La();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = es(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, p = getComputedStyle(f), h = d.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - f.clientWidth - h);
    g <= Ql && (i -= g);
  } else u <= Ql && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const R2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function j2(e, t) {
  const n = Mo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Sn(e) ? jr(e) : _n(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function eu(e, t, n) {
  let r;
  if (t === "viewport")
    r = I2(e, n);
  else if (t === "document")
    r = z2(Kn(e));
  else if (ln(t))
    r = j2(t, n);
  else {
    const o = af(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Li(r);
}
function uf(e, t) {
  const n = nr(e);
  return n === t || !ln(n) || no(n) ? !1 : un(n).position === "fixed" || uf(n, t);
}
function B2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = rf(e, []).filter((a) => ln(a) && so(a) !== "body"), o = null;
  const i = un(e).position === "fixed";
  let s = i ? nr(e) : e;
  for (; ln(s) && !no(s); ) {
    const a = un(s), l = Oa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && R2.has(o.position) || Jo(s) && !l && uf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = nr(s);
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
  const i = [...n === "clippingAncestors" ? Gi(t) ? [] : B2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = eu(t, u, o);
    return l.top = Rr(d.top, l.top), l.right = To(d.right, l.right), l.bottom = To(d.bottom, l.bottom), l.left = Rr(d.left, l.left), l;
  }, eu(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Z2(e) {
  const {
    width: t,
    height: n
  } = of(e);
  return {
    width: t,
    height: n
  };
}
function Y2(e, t, n) {
  const r = Sn(t), o = Kn(t), i = n === "fixed", s = Mo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = _n(0);
  function u() {
    l.x = es(o);
  }
  if (r || !r && !i)
    if ((so(t) !== "body" || Jo(o)) && (a = Qi(t)), r) {
      const h = Mo(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? lf(o, a) : _n(0), f = s.left + a.scrollLeft - l.x - d.x, p = s.top + a.scrollTop - l.y - d.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function vs(e) {
  return un(e).position === "static";
}
function tu(e, t) {
  if (!Sn(e) || un(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Kn(e) === n && (n = n.ownerDocument.body), n;
}
function cf(e, t) {
  const n = Bt(e);
  if (Gi(e))
    return n;
  if (!Sn(e)) {
    let o = nr(e);
    for (; o && !no(o); ) {
      if (ln(o) && !vs(o))
        return o;
      o = nr(o);
    }
    return n;
  }
  let r = tu(e, t);
  for (; r && E2(r) && vs(r); )
    r = tu(r, t);
  return r && no(r) && vs(r) && !Oa(r) ? n : r || O2(e) || n;
}
const X2 = async function(e) {
  const t = this.getOffsetParent || cf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Y2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function F2(e) {
  return un(e).direction === "rtl";
}
const q2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: A2,
  getDocumentElement: Kn,
  getClippingRect: K2,
  getOffsetParent: cf,
  getElementRects: X2,
  getClientRects: H2,
  getDimensions: Z2,
  getScale: jr,
  isElement: ln,
  isRTL: F2
}, W2 = $2, J2 = _2, U2 = b2, G2 = w2, Q2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: q2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return y2(e, t, {
    ...o,
    platform: i
  });
}, ew = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: a,
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
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function f() {
    Q2(e, u, {
      placement: r,
      middleware: [
        W2(o),
        // 手动偏移配置
        U2(i),
        //自动翻转
        J2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [G2({ element: d })] : []
      ]
    }).then(({ x: $, y: C, placement: x, middlewareData: S }) => {
      if (Object.assign(u.style, {
        left: `${$}px`,
        top: `${C}px`
      }), l) {
        const { x: N, y: E } = S.arrow, O = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: N != null ? `${N}px` : "",
          top: E != null ? `${E}px` : "",
          right: "",
          bottom: "",
          [O]: "2px"
        });
      }
    });
  }
  let p = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), p = !0, f();
  }
  function g() {
    u.style.display = "none", l && (d.style.display = "none"), p = !1;
  }
  function y($) {
    $.stopPropagation(), p ? g() : h();
  }
  function w($) {
    u.contains($.target) || g();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach(($) => {
    e.addEventListener($, y);
  }), document.addEventListener("click", w), {
    destroy() {
      t.forEach(($) => {
        e.removeEventListener($, y);
      }), document.removeEventListener("click", w);
    },
    hide() {
      g();
    },
    isVisible() {
      return p;
    }
  };
};
var tw = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function ur(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Rn(() => (a = ew({
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
      n(y), v();
    },
    get floating() {
      return r();
    },
    set floating(y) {
      r(y), v();
    },
    get placement() {
      return o();
    },
    set placement(y = "bottom") {
      o(y), v();
    }
  }, d = tw(), f = B(d), p = B(f);
  it(p, n), j(f), Zt(f, (y) => i = y, () => i);
  var h = A(f, 2), g = B(h);
  return it(g, r), j(h), Zt(h, (y) => s = y, () => s), j(d), L(e, d), pe(u);
}
le(ur, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ie(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), v();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), v();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), v();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), v();
    }
  }, a = Oe(), l = ae(a);
  return xh(l, () => `h${r()}`, !1, (u, d) => {
    pt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var f = Oe(), p = ae(f);
    it(p, () => n() ?? Ct), L(d, f);
  }), L(e, a), pe(s);
}
le(Ie, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const rw = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Uo(e, t) {
  fe(t, !0), Xe(e, rw);
  const n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  He(e, Ue(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = nw();
      L(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
le(Uo, {}, [], [], !0);
const ow = () => ({ deleteNode: (e) => {
  Re.removeNode(e), Re.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), zn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, iw = () => ({ copyNode: (e) => {
  const t = Re.getNode(e);
  if (t) {
    const n = zn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Re.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), st = () => Qn("svelteflow__node_id"), rr = () => Qn("tinyflow_options");
var sw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), aw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), lw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), uw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), cw = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, dw = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, fw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), pw = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), hw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), gw = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), vw = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const mw = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function en(e, t) {
  fe(t, !0), Xe(e, mw);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), f = m(t, "allowSettingOfCondition", 7, !0), p = m(t, "showSourceHandle", 7, !0), h = m(t, "showTargetHandle", 7, !0), g = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: w, getNode: $ } = mt(), C = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = ow(), { copyNode: S } = iw(), N = rr(), E = () => {
    N.onNodeExecute?.($(r()));
  };
  let O = st();
  var V = {
    get data() {
      return n();
    },
    set data(D) {
      n(D), v();
    },
    get id() {
      return r();
    },
    set id(D = "") {
      r(D), v();
    },
    get icon() {
      return o();
    },
    set icon(D) {
      o(D), v();
    },
    get handle() {
      return i();
    },
    set handle(D) {
      i(D), v();
    },
    get children() {
      return s();
    },
    set children(D) {
      s(D), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(D = !0) {
      a(D), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(D = !0) {
      l(D), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(D = !0) {
      u(D), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(D = !0) {
      d(D), v();
    },
    get allowSettingOfCondition() {
      return f();
    },
    set allowSettingOfCondition(D = !0) {
      f(D), v();
    },
    get showSourceHandle() {
      return p();
    },
    set showSourceHandle(D = !0) {
      p(D), v();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(D = !0) {
      h(D), v();
    },
    get onCollapse() {
      return g();
    },
    set onCollapse(D) {
      g(D), v();
    }
  }, Z = vw(), W = ae(Z);
  {
    var I = (D) => {
      Fd(D, {
        get position() {
          return $e.Top;
        },
        align: "start",
        children: (J, F) => {
          var Q = gw(), z = B(Q);
          {
            var q = (ie) => {
              He(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (se, ve) => {
                  var me = sw();
                  L(se, me);
                },
                $$slots: { default: !0 }
              });
            };
            ue(z, (ie) => {
              u() && ie(q);
            });
          }
          var U = A(z, 2);
          {
            var ne = (ie) => {
              He(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  S(r());
                },
                children: (se, ve) => {
                  var me = aw();
                  L(se, me);
                },
                $$slots: { default: !0 }
              });
            };
            ue(U, (ie) => {
              l() && ie(ne);
            });
          }
          var re = A(U, 2);
          {
            var ee = (ie) => {
              He(ie, {
                class: "tf-node-toolbar-item",
                onclick: E,
                children: (se, ve) => {
                  var me = lw();
                  L(se, me);
                },
                $$slots: { default: !0 }
              });
            };
            ue(re, (ie) => {
              a() && ie(ee);
            });
          }
          var ge = A(re, 2);
          {
            var ce = (ie) => {
              ur(ie, {
                placement: "bottom",
                floating: (se) => {
                  var ve = pw(), me = B(ve), xe = A(B(me));
                  lt(xe, {
                    style: "width: 100%;",
                    onchange: (et) => {
                      const Ze = et.target.value;
                      w(O, { title: Ze });
                    },
                    get value() {
                      return n().title;
                    }
                  }), j(me);
                  var de = A(me, 2), _e = A(B(de));
                  Ge(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (et) => {
                      const Ze = et.target.value;
                      w(O, { description: Ze });
                    },
                    get value() {
                      return n().description;
                    }
                  }), j(de);
                  var Me = A(de, 2);
                  {
                    var X = (et) => {
                      var Ze = uw(), ye = A(B(Ze));
                      Ge(ye, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ye) => {
                          const yt = Ye.target.value;
                          w(O, { condition: yt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), j(Ze), L(et, Ze);
                    };
                    ue(Me, (et) => {
                      f() && et(X);
                    });
                  }
                  var Ke = A(Me, 2), De = A(B(Ke), 2);
                  mr(De), De.__change = [cw, w, O], j(Ke);
                  var je = A(Ke, 2), Fe = A(B(je), 2);
                  mr(Fe), Fe.__change = [dw, w, O], j(je);
                  var nt = A(je, 2);
                  {
                    var _t = (et) => {
                      var Ze = fw(), ye = ae(Ze), Ye = A(B(ye));
                      {
                        let dt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        Ge(Ye, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gn) => {
                            const vn = gn.target.value;
                            w(O, { loopIntervalMs: vn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      j(ye);
                      var yt = A(ye, 2), tt = A(B(yt));
                      {
                        let dt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        Ge(tt, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (gn) => {
                            const vn = gn.target.value;
                            w(O, { maxLoopCount: vn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      j(yt);
                      var kt = A(yt, 2), ct = A(B(kt));
                      Ge(ct, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (dt) => {
                          const gn = dt.target.value;
                          w(O, { loopBreakCondition: gn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), j(kt), L(et, Ze);
                    };
                    ue(nt, (et) => {
                      n().loopEnable && et(_t);
                    });
                  }
                  j(ve), Ee(() => {
                    ol(De, !!n().async), ol(Fe, !!n().loopEnable);
                  }), L(se, ve);
                },
                children: (se, ve) => {
                  He(se, {
                    class: "tf-node-toolbar-item",
                    children: (me, xe) => {
                      var de = hw();
                      L(me, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ue(ge, (ie) => {
              d() && ie(ce);
            });
          }
          j(Q), L(J, Q);
        },
        $$slots: { default: !0 }
      });
    };
    ue(W, (D) => {
      (a() || l() || u()) && D(I);
    });
  }
  var k = A(W, 2), _ = A(B(k), 2), b = B(_);
  Ud(b, {
    get items() {
      return c(C);
    },
    get activeKeys() {
      return y;
    },
    onChange: (D, J) => {
      w(r(), { expand: J?.includes("key") }), g()?.(J?.includes("key") ? "key" : "");
    }
  }), j(_), j(k);
  var M = A(k, 2);
  {
    var T = (D) => {
      tr(D, {
        type: "target",
        get position() {
          return $e.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(M, (D) => {
      h() && D(T);
    });
  }
  var R = A(M, 2);
  {
    var K = (D) => {
      tr(D, {
        type: "source",
        get position() {
          return $e.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ue(R, (D) => {
      p() && D(K);
    });
  }
  var Y = A(R, 2);
  return it(Y, () => i() ?? Ct), L(e, Z), pe(V);
}
ar(["change"]);
le(
  en,
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
var yw = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), ww = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), bw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), xw = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const Cw = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function df(e, t) {
  fe(t, !0), Xe(e, Cw);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = st(), i = Bn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = mt(), l = (V, Z) => {
    a(o, (W) => {
      let I = W.data.parameters;
      return I[r()][V] = Z, { parameters: I };
    });
  }, u = (V, Z) => {
    const W = Z.target.value;
    l(V, W);
  }, d = (V) => {
    const Z = V.target.value;
    l("name", Z);
  }, f = (V) => {
    const Z = V.target.checked;
    l("required", Z);
  }, p = (V) => {
    const Z = V.value;
    l("formType", Z);
  }, h = (V) => {
    const Z = V.value;
    l("contentType", Z);
  };
  let g;
  const y = () => {
    a(o, (V) => {
      let Z = V.data.parameters;
      return Z.splice(r(), 1), { parameters: [...Z] };
    }), g?.hide();
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(V) {
      n(V), v();
    },
    get index() {
      return r();
    },
    set index(V) {
      r(V), v();
    }
  }, $ = xw(), C = ae($), x = B(C);
  lt(x, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), j(C);
  var S = A(C, 2), N = B(S);
  qd(N, {
    get checked() {
      return c(s).required;
    },
    onchange: f
  }), j(S);
  var E = A(S, 2), O = B(E);
  return Zt(
    ur(O, {
      placement: "bottom",
      floating: (V) => {
        var Z = ww(), W = B(Z), I = A(B(W));
        {
          let z = /* @__PURE__ */ P(() => c(s).contentType ? [c(s).contentType] : []);
          xt(I, {
            get items() {
              return Na;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(z);
            },
            onSelect: h
          });
        }
        j(W);
        var k = A(W, 2), _ = A(B(k));
        {
          let z = /* @__PURE__ */ P(() => c(s).formType ? [c(s).formType] : []);
          xt(_, {
            get items() {
              return Ly;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(z);
            },
            onSelect: p
          });
        }
        j(k);
        var b = A(k, 2);
        {
          var M = (z) => {
            var q = yw(), U = A(B(q));
            {
              let ne = /* @__PURE__ */ P(() => c(s).enums?.join(`
`));
              Ge(U, {
                rows: 3,
                style: "width: 100%;",
                onchange: (re) => {
                  l("enums", re.target?.value.trim().split(`
`));
                },
                get value() {
                  return c(ne);
                },
                placeholder: "一行一个选项"
              });
            }
            j(q), L(z, q);
          };
          ue(b, (z) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && z(M);
          });
        }
        var T = A(b, 2), R = A(B(T));
        Ge(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (z) => {
            u("formLabel", z);
          },
          get value() {
            return c(s).formLabel;
          }
        }), j(T);
        var K = A(T, 2), Y = A(B(K));
        Ge(Y, {
          rows: 2,
          style: "width: 100%;",
          onchange: (z) => {
            u("formDescription", z);
          },
          get value() {
            return c(s).formDescription;
          }
        }), j(K);
        var D = A(K, 2), J = A(B(D));
        Ge(J, {
          rows: 2,
          style: "width: 100%;",
          onchange: (z) => {
            u("formPlaceholder", z);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), j(D);
        var F = A(D, 2), Q = B(F);
        He(Q, {
          onclick: y,
          children: (z, q) => {
            be();
            var U = Pe("删除");
            L(z, U);
          },
          $$slots: { default: !0 }
        }), j(F), j(Z), L(V, Z);
      },
      children: (V, Z) => {
        He(V, {
          class: "input-btn-more",
          children: (W, I) => {
            var k = bw();
            L(W, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => g = V,
    () => g
  ), j(E), L(e, $), pe(w);
}
le(df, { parameter: {}, index: {} }, [], [], !0);
var $w = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), _w = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), kw = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const Sw = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function ff(e, t) {
  fe(t, !0), Xe(e, Sw);
  let n = st(), r = Bn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = kw(), s = B(i);
  {
    var a = (u) => {
      var d = $w();
      be(4), L(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = A(s, 2);
  Pt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, f) => {
      df(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(f);
        }
      });
    },
    (u) => {
      var d = _w();
      L(u, d);
    }
  ), j(i), L(e, i), pe();
}
le(ff, {}, [], [], !0);
const Oo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = zn()), Oo(t.children);
}), e), hn = () => {
  const { updateNodeData: e } = mt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Oo(s?.children)) : Oo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: zn()
        };
      }
      const i = [];
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), e(t, (s) => {
        let a = s.data[n];
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var Ew = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Pw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const Tw = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function pf(e, t) {
  fe(t, !0), Xe(e, Tw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Ue(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = Ew();
      L(a, l);
    },
    children: (a, l) => {
      var u = Nw(), d = ae(u), f = B(d);
      Ie(f, {
        level: 3,
        children: (g, y) => {
          be();
          var w = Pe("输入参数");
          L(g, w);
        },
        $$slots: { default: !0 }
      });
      var p = A(f, 2);
      He(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (g, y) => {
          var w = Pw();
          L(g, w);
        },
        $$slots: { default: !0 }
      }), j(d);
      var h = A(d, 2);
      ff(h, {}), L(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe(s);
}
le(pf, { data: {} }, [], [], !0);
const hf = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), hf(e, r.source, n));
}, gf = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: gf(r.children, t + "." + r.name, n)
})), nu = (e, t, n) => {
  if (e.type === "startNode") {
    const r = e.data.parameters, o = [];
    if (r) for (const i of r)
      o.push({
        label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
        value: e.id + "." + i.name
      });
    return { label: e.data.title, value: e.id, children: o };
  } else {
    if (e.type === "loopNode" && n.parentId)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          { label: "loopItem", value: e.id + ".loopItem" },
          { label: "index (Number)", value: e.id + ".index" }
        ]
      };
    {
      const r = e.data.outputDefs;
      if (r)
        return {
          label: e.data.title,
          value: e.id,
          children: gf(r, e.id, t)
        };
    }
  }
}, vf = (e = !1) => {
  const t = st(), n = Bn(t), r = /* @__PURE__ */ P(pn), o = /* @__PURE__ */ P(() => c(r).nodes), i = /* @__PURE__ */ P(() => c(r).edges), s = /* @__PURE__ */ P(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const f = d.parentId === n.current.id;
        if (f) {
          const p = nu(d, f, u);
          p && l.push(p);
        }
      }
    else {
      const d = [];
      hf(d, t, c(i));
      for (const f of c(o))
        if (d.includes(f.id)) {
          const p = f.parentId === n.current.id, h = nu(f, p, u);
          h && l.push(h);
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
var Mw = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Ow = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Lw = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Dw = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function mf(e, t) {
  fe(t, !0), Xe(e, Dw), Rn(() => {
    c(u).refType || g({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = st(), l = Bn(a), u = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = mt(), f = (_, b) => {
    d(a, (M) => {
      let T = M.data?.[o()];
      return T[r()] = { ...T[r()], [_]: b }, { [o()]: T };
    });
  }, p = (_, b) => {
    const M = b.target.value;
    f(_, M);
  }, h = (_) => {
    const b = _.value;
    f("ref", b);
  }, g = (_) => {
    const b = _.value;
    f("refType", b);
  }, y = (_) => {
    const b = _.value;
    f("contentType", b);
  };
  let w;
  const $ = () => {
    d(a, (_) => {
      let b = _.data?.[o()];
      return b.splice(r(), 1), { [o()]: [...b] };
    }), w?.hide();
  };
  let C = vf(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), v();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(_) {
      o(_), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(_) {
      i(_), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(_ = !1) {
      s(_), v();
    }
  }, S = Lw(), N = ae(S), E = B(N);
  {
    let _ = /* @__PURE__ */ P(() => c(u).nameDisabled === !0);
    lt(E, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(_);
      },
      oninput: (b) => p("name", b)
    });
  }
  j(N);
  var O = A(N, 2), V = B(O);
  {
    var Z = (_) => {
      lt(_, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (b) => p("value", b)
      });
    }, W = (_) => {
      var b = Oe(), M = ae(b);
      {
        var T = (R) => {
          {
            let K = /* @__PURE__ */ P(() => [c(u).ref]);
            xt(R, {
              get items() {
                return C.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(K);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ue(
          M,
          (R) => {
            c(u).refType !== "input" && R(T);
          },
          !0
        );
      }
      L(_, b);
    };
    ue(V, (_) => {
      c(u).refType === "fixed" ? _(Z) : _(W, !1);
    });
  }
  j(O);
  var I = A(O, 2), k = B(I);
  return Zt(
    ur(k, {
      placement: "bottom",
      floating: (_) => {
        var b = Ow(), M = B(b), T = A(B(M));
        {
          let q = /* @__PURE__ */ P(() => c(u).refType ? [c(u).refType] : []);
          xt(T, {
            get items() {
              return Oy;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(q);
            },
            onSelect: g
          });
        }
        j(M);
        var R = A(M, 2);
        {
          var K = (q) => {
            var U = Mw(), ne = A(B(U));
            {
              let re = /* @__PURE__ */ P(() => c(u).contentType ? [c(u).contentType] : []);
              xt(ne, {
                get items() {
                  return Na;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: y
              });
            }
            j(U), L(q, U);
          };
          ue(R, (q) => {
            s() && q(K);
          });
        }
        var Y = A(R, 2), D = A(B(Y));
        Ge(D, {
          rows: 1,
          style: "width: 100%;",
          onchange: (q) => {
            p("defaultValue", q);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), j(Y);
        var J = A(Y, 2), F = A(B(J));
        Ge(F, {
          rows: 3,
          style: "width: 100%;",
          onchange: (q) => {
            p("description", q);
          },
          get value() {
            return c(u).description;
          }
        }), j(J);
        var Q = A(J, 2), z = B(Q);
        He(z, {
          onclick: $,
          children: (q, U) => {
            be();
            var ne = Pe("删除");
            L(q, ne);
          },
          $$slots: { default: !0 }
        }), j(Q), j(b), L(_, b);
      },
      children: (_, b) => {
        Uo(_, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => w = _,
    () => w
  ), j(I), L(e, S), pe(x);
}
le(
  mf,
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
var Vw = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Aw = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Hw = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const zw = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function Lt(e, t) {
  fe(t, !0), Xe(e, zw);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = st(), a = Bn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(g = "无输入参数") {
      n(g), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(g = "parameters") {
      r(g), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(g) {
      o(g), v();
    },
    get showContentType() {
      return i();
    },
    set showContentType(g = !1) {
      i(g), v();
    }
  }, d = Hw(), f = B(d);
  {
    var p = (g) => {
      var y = Vw();
      be(4), L(g, y);
    };
    ue(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = A(f, 2);
  return Pt(
    h,
    19,
    () => c(l),
    (g) => g.id,
    (g, y, w) => {
      mf(g, {
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
    (g) => {
      var y = Aw(), w = B(y, !0);
      j(y), Ee(() => Je(w, n())), L(g, y);
    }
  ), j(d), L(e, d), pe(u);
}
le(
  Lt,
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
var Iw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Rw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const Bw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function yf(e, t) {
  fe(t, !0), Xe(e, Bw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Ue(
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
        var l = Iw();
        L(a, l);
      },
      children: (a, l) => {
        var u = jw(), d = ae(u), f = B(d);
        Ie(f, {
          level: 3,
          children: (g, y) => {
            be();
            var w = Pe("输出参数");
            L(g, w);
          },
          $$slots: { default: !0 }
        });
        var p = A(f, 2);
        He(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (g, y) => {
            var w = Rw();
            L(g, w);
          },
          $$slots: { default: !0 }
        }), j(d);
        var h = A(d, 2);
        Lt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(s);
}
le(yf, { data: {} }, [], [], !0);
const ms = (e) => JSON.parse(JSON.stringify(e));
var Kw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Zw = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Yw = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Xw = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const Fw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wf(e, t) {
  fe(t, !0), Xe(e, Fw);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = st(), a = Bn(s), l = /* @__PURE__ */ P(() => {
    let k = a?.current?.data?.[o()], _;
    if (k && r().length > 0) {
      let b = k;
      for (let M = 0; M < r().length; M++) {
        const T = r()[M];
        M == r().length - 1 ? _ = b[T] : b = b[T].children;
      }
    }
    return { ...n(), ..._ };
  });
  const { updateNodeData: u } = mt(), d = (k, _) => {
    u(s, (b) => {
      const M = b.data?.[o()];
      if (M && r().length > 0) {
        let T = M;
        for (let R = 0; R < r().length; R++) {
          const K = r()[R];
          R == r().length - 1 ? T[K] = { ...T[K], [k]: _ } : T = T[K].children;
        }
      }
      return { [o()]: [...ms(M)] };
    });
  }, f = (k, _) => {
    const b = _.target.value;
    d(k, b);
  }, p = (k) => {
    const _ = k.value;
    d("dataType", _);
  };
  let h;
  const g = () => {
    u(s, (k) => {
      let _ = k.data?.[o()];
      if (_ && r().length > 0) {
        let b = _;
        for (let M = 0; M < r().length; M++) {
          const T = r()[M];
          M == r().length - 1 ? b.splice(T, 1) : b = b[T].children;
        }
      }
      return { [o()]: [...ms(_)] };
    }), h?.hide();
  }, y = () => {
    u(s, (k) => {
      let _ = k.data?.[o()];
      if (_ && r().length > 0) {
        let b = _;
        for (let M = 0; M < r().length; M++) {
          const T = r()[M];
          M == r().length - 1 ? b[T].children ? b[T].children.push({ id: zn(), name: "newParam", dataType: "String" }) : b[T].children = [{ id: zn(), name: "newParam", dataType: "String" }] : b = b[T].children;
        }
      }
      return { [o()]: [...ms(_)] };
    });
  };
  var w = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), v();
    },
    get position() {
      return r();
    },
    set position(k) {
      r(k), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(k = "请输入参数值") {
      i(k), v();
    }
  }, $ = Xw(), C = ae($), x = B(C);
  {
    var S = (k) => {
      var _ = Oe(), b = ae(_);
      Pt(b, 17, r, Wr, (M, T) => {
        be();
        var R = Pe(" ");
        L(M, R);
      }), L(k, _);
    };
    ue(x, (k) => {
      r().length > 1 && k(S);
    });
  }
  var N = A(x, 2);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    lt(N, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (_) => {
        f("name", _);
      },
      get disabled() {
        return c(k);
      }
    });
  }
  j(C);
  var E = A(C, 2), O = B(E);
  {
    let k = /* @__PURE__ */ P(() => c(l).dataTypeItems || My), _ = /* @__PURE__ */ P(() => c(l).dataType ? [c(l).dataType] : []), b = /* @__PURE__ */ P(() => c(l).dataTypeDisabled === !0);
    xt(O, {
      get items() {
        return c(k);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(_);
      },
      get disabled() {
        return c(b);
      },
      onSelect: p
    });
  }
  var V = A(O, 2);
  {
    var Z = (k) => {
      He(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (_, b) => {
          var M = Kw();
          L(_, M);
        },
        $$slots: { default: !0 }
      });
    };
    ue(V, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(Z);
    });
  }
  j(E);
  var W = A(E, 2), I = B(W);
  return Zt(
    ur(I, {
      placement: "bottom",
      floating: (k) => {
        var _ = Yw(), b = B(_), M = A(B(b));
        {
          let D = /* @__PURE__ */ P(() => c(l).defaultValue || "");
          Ge(M, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(D);
            },
            onchange: (J) => {
              f("defaultValue", J);
            }
          });
        }
        j(b);
        var T = A(b, 2), R = A(B(T));
        {
          let D = /* @__PURE__ */ P(() => c(l).description || "");
          Ge(R, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(D);
            },
            onchange: (J) => {
              f("description", J);
            }
          });
        }
        j(T);
        var K = A(T, 2);
        {
          var Y = (D) => {
            var J = Zw(), F = B(J);
            He(F, {
              onclick: g,
              children: (Q, z) => {
                be();
                var q = Pe("删除");
                L(Q, q);
              },
              $$slots: { default: !0 }
            }), j(J), L(D, J);
          };
          ue(K, (D) => {
            c(l).deleteDisabled !== !0 && D(Y);
          });
        }
        j(_), L(k, _);
      },
      children: (k, _) => {
        Uo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), j(W), L(e, $), pe(w);
}
le(
  wf,
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
var qw = /* @__PURE__ */ te("<!> <!>", 1), Ww = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Jw = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Uw = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Gw = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Zn(e, t) {
  fe(t, !0), Xe(e, Gw);
  const n = (g, y = Ct, w = Ct) => {
    var $ = Oe(), C = ae($);
    Pt(
      C,
      19,
      y,
      (x) => `${x.id}_${x.children ? x.children.length : 0}`,
      (x, S, N) => {
        var E = qw(), O = ae(E);
        {
          let W = /* @__PURE__ */ P(() => [...w(), c(N)]);
          wf(O, {
            get parameter() {
              return c(S);
            },
            get position() {
              return c(W);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var V = A(O, 2);
        {
          var Z = (W) => {
            {
              let I = /* @__PURE__ */ P(() => [...w(), c(N)]);
              n(W, () => c(S).children, () => c(I));
            }
          };
          ue(V, (W) => {
            c(S).children && W(Z);
          });
        }
        L(x, E);
      },
      (x) => {
        var S = Oe(), N = ae(S);
        {
          var E = (O) => {
            var V = Ww(), Z = B(V, !0);
            j(V), Ee(() => Je(Z, r())), L(O, V);
          };
          ue(N, (O) => {
            w().length === 0 && O(E);
          });
        }
        L(x, S);
      }
    ), L(g, $);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = st(), a = Bn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(g = "无输出参数") {
      r(g), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(g = "outputDefs") {
      o(g), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(g = "请输入参数名称") {
      i(g), v();
    }
  }, d = Uw(), f = B(d);
  {
    var p = (g) => {
      var y = Jw();
      be(4), L(g, y);
    };
    ue(f, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var h = A(f, 2);
  return n(h, () => c(l) || [], () => []), j(d), L(e, d), pe(u);
}
le(Zn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nb = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), rb = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), ob = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), ib = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), sb = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const ab = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function bf(e, t) {
  fe(t, !0), Xe(e, ab);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = rr();
  let a = /* @__PURE__ */ Le(Wt([]));
  Rn(async () => {
    const f = await s.provider?.llm?.();
    c(a).push(...f || []);
  });
  const { updateNodeData: l } = mt(), u = (f) => {
    l(o, () => ({ outType: f })), f === "text" ? l(o, {
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
  ot(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(f) {
      n(f), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (f) => {
        var p = Qw();
        L(f, p);
      },
      children: (f, p) => {
        var h = sb(), g = ae(h), y = B(g);
        Ie(y, {
          level: 3,
          children: (K, Y) => {
            be();
            var D = Pe("输入参数");
            L(K, D);
          },
          $$slots: { default: !0 }
        });
        var w = A(y, 2);
        He(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (K, Y) => {
            var D = eb();
            L(K, D);
          },
          $$slots: { default: !0 }
        }), j(g);
        var $ = A(g, 2);
        Lt($, {});
        var C = A($, 2), x = B(C);
        Ie(x, {
          level: 3,
          children: (K, Y) => {
            be();
            var D = Pe("图片识别");
            L(K, D);
          },
          $$slots: { default: !0 }
        });
        var S = A(x, 2);
        He(S, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (K, Y) => {
            var D = tb();
            L(K, D);
          },
          $$slots: { default: !0 }
        }), j(C);
        var N = A(C, 2);
        Lt(N, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var E = A(N, 2);
        Ie(E, {
          level: 3,
          mt: "10px",
          children: (K, Y) => {
            be();
            var D = Pe("模型设置");
            L(K, D);
          },
          $$slots: { default: !0 }
        });
        var O = A(E, 4), V = B(O);
        {
          let K = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          xt(V, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (Y) => {
              const D = Y.value;
              l(o, () => ({ llmId: D }));
            },
            get value() {
              return c(K);
            }
          });
        }
        var Z = A(V, 2);
        ur(Z, {
          placement: "bottom",
          floating: (K) => {
            var Y = ib(), D = A(B(Y), 2), J = B(D), F = B(J), Q = B(F);
            j(F);
            var z = A(F, 2);
            mr(z), z.__input = [nb, l, o], j(J), j(D);
            var q = A(D, 2), U = B(q), ne = B(U), re = B(ne);
            j(ne);
            var ee = A(ne, 2);
            mr(ee), ee.__input = [rb, l, o], j(U), j(q);
            var ge = A(q, 2), ce = B(ge), ie = B(ce), se = B(ie);
            j(ie);
            var ve = A(ie, 2);
            mr(ve), ve.__input = [ob, l, o], j(ce), j(ge), j(Y), Ee(() => {
              Je(Q, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), ai(z, n().temperature ?? 0.7), Je(re, `Top P: ${n().topP ?? 0.9 ?? ""}`), ai(ee, n().topP ?? 0.9), Je(se, `Top K: ${n().topK ?? 50 ?? ""}`), ai(ve, n().topK ?? 50);
            }), L(K, Y);
          },
          children: (K, Y) => {
            Uo(K, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), j(O);
        var W = A(O, 4), I = B(W);
        {
          let K = /* @__PURE__ */ P(() => n().systemPrompt || "");
          Ge(I, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(K);
            },
            oninput: (Y) => {
              l(o, { systemPrompt: Y.target.value });
            }
          });
        }
        j(W);
        var k = A(W, 4), _ = B(k);
        {
          let K = /* @__PURE__ */ P(() => n().userPrompt || "");
          Ge(_, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(K);
            },
            oninput: (Y) => {
              l(o, { userPrompt: Y.target.value });
            }
          });
        }
        j(k);
        var b = A(k, 2), M = B(b);
        Ie(M, {
          level: 3,
          children: (K, Y) => {
            be();
            var D = Pe("输出参数");
            L(K, D);
          },
          $$slots: { default: !0 }
        });
        var T = A(M, 2);
        {
          let K = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          xt(T, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (Y) => {
              u(Y.value);
            },
            get value() {
              return c(K);
            }
          });
        }
        j(b);
        var R = A(b, 2);
        Zn(R, {}), L(f, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(d);
}
ar(["input"]);
le(bf, { data: {} }, [], [], !0);
var lb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), ub = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), db = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const fb = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function xf(e, t) {
  fe(t, !0), Xe(e, fb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Rn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = st(), { addParameter: i } = hn(), { updateNodeData: s } = mt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = lb();
        L(u, d);
      },
      children: (u, d) => {
        var f = db(), p = ae(f), h = B(p);
        Ie(h, {
          level: 3,
          children: (Z, W) => {
            be();
            var I = Pe("输入参数");
            L(Z, I);
          },
          $$slots: { default: !0 }
        });
        var g = A(h, 2);
        He(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Z, W) => {
            var I = ub();
            L(Z, I);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = A(p, 2);
        Lt(y, {});
        var w = A(y, 2);
        Ie(w, {
          level: 3,
          mt: "10px",
          children: (Z, W) => {
            be();
            var I = Pe("代码");
            L(Z, I);
          },
          $$slots: { default: !0 }
        });
        var $ = A(w, 4), C = B($);
        {
          let Z = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          xt(C, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (W) => {
              const I = W.value;
              s(o, () => ({ engine: I }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        j($);
        var x = A($, 4), S = B(x);
        {
          let Z = /* @__PURE__ */ P(() => n().code || "");
          Ge(S, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (W) => {
              s(o, () => ({ code: W.target.value }));
            },
            get value() {
              return c(Z);
            }
          });
        }
        j(x);
        var N = A(x, 2), E = B(N);
        Ie(E, {
          level: 3,
          mt: "10px",
          children: (Z, W) => {
            be();
            var I = Pe("输出参数");
            L(Z, I);
          },
          $$slots: { default: !0 }
        });
        var O = A(E, 2);
        He(O, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (Z, W) => {
            var I = cb();
            L(Z, I);
          },
          $$slots: { default: !0 }
        }), j(N);
        var V = A(N, 2);
        Zn(V, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(xf, { data: {} }, [], [], !0);
var pb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), hb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const vb = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Cf(e, t) {
  fe(t, !0), Xe(e, vb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), { updateNodeData: s } = mt();
  ot(() => {
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
      n(l), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = pb();
        L(l, u);
      },
      children: (l, u) => {
        var d = gb(), f = ae(d), p = B(f);
        Ie(p, {
          level: 3,
          children: (N, E) => {
            be();
            var O = Pe("输入参数");
            L(N, O);
          },
          $$slots: { default: !0 }
        });
        var h = A(p, 2);
        He(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, E) => {
            var O = hb();
            L(N, O);
          },
          $$slots: { default: !0 }
        }), j(f);
        var g = A(f, 2);
        Lt(g, {});
        var y = A(g, 2);
        Ie(y, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (N, E) => {
            be();
            var O = Pe("模板内容");
            L(N, O);
          },
          $$slots: { default: !0 }
        });
        var w = A(y, 2), $ = B(w);
        {
          let N = /* @__PURE__ */ P(() => n().template || "");
          Ge($, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ template: E.target.value }));
            },
            get value() {
              return c(N);
            }
          });
        }
        j(w);
        var C = A(w, 2), x = B(C);
        Ie(x, {
          level: 3,
          mt: "10px",
          children: (N, E) => {
            be();
            var O = Pe("输出参数");
            L(N, O);
          },
          $$slots: { default: !0 }
        }), j(C);
        var S = A(C, 2);
        Zn(S, {}), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Cf, { data: {} }, [], [], !0);
var mb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), yb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bb = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), xb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), $b = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _b = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), kb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Sb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const Nb = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function $f(e, t) {
  fe(t, !0), Xe(e, Nb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Rn(() => {
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
  ], i = st(), { addParameter: s } = hn(), { updateNodeData: a } = mt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = mb();
        L(u, d);
      },
      children: (u, d) => {
        var f = Pb(), p = ae(f), h = B(p);
        Ie(h, {
          level: 3,
          children: (z, q) => {
            be();
            var U = Pe("输入参数");
            L(z, U);
          },
          $$slots: { default: !0 }
        });
        var g = A(h, 2);
        He(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (z, q) => {
            var U = yb();
            L(z, U);
          },
          $$slots: { default: !0 }
        }), j(p);
        var y = A(p, 2);
        Lt(y, {});
        var w = A(y, 2);
        Ie(w, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            be();
            var U = Pe("URL 地址");
            L(z, U);
          },
          $$slots: { default: !0 }
        });
        var $ = A(w, 2), C = B($), x = B(C);
        {
          let z = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          xt(x, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (q) => {
              const U = q.value;
              a(i, () => ({ method: U }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(C);
        var S = A(C, 2), N = B(S);
        {
          let z = /* @__PURE__ */ P(() => n().url || "");
          lt(N, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (q) => {
              a(i, () => ({ url: q.target.value }));
            },
            get value() {
              return c(z);
            }
          });
        }
        j(S), j($);
        var E = A($, 2), O = B(E);
        Ie(O, {
          level: 3,
          children: (z, q) => {
            be();
            var U = Pe("Http 头信息");
            L(z, U);
          },
          $$slots: { default: !0 }
        });
        var V = A(O, 2);
        He(V, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (z, q) => {
            var U = wb();
            L(z, U);
          },
          $$slots: { default: !0 }
        }), j(E);
        var Z = A(E, 2);
        Lt(Z, { dataKeyName: "headers" });
        var W = A(Z, 2);
        {
          var I = (z) => {
            var q = bb(), U = ae(q);
            Ie(U, {
              level: 3,
              mt: "10px",
              children: (_e, Me) => {
                be();
                var X = Pe("Body");
                L(_e, X);
              },
              $$slots: { default: !0 }
            });
            var ne = A(U, 2), re = B(ne), ee = B(re);
            {
              let _e = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              lt(ee, {
                type: "radio",
                name: "bodyType",
                value: "",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            be(), j(re);
            var ge = A(re, 2), ce = B(ge);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              lt(ce, {
                type: "radio",
                name: "bodyType",
                value: "form-data",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            be(), j(ge);
            var ie = A(ge, 2), se = B(ie);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              lt(se, {
                type: "radio",
                name: "bodyType",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            be(), j(ie);
            var ve = A(ie, 2), me = B(ve);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "json");
              lt(me, {
                type: "radio",
                name: "bodyType",
                value: "json",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            be(), j(ve);
            var xe = A(ve, 2), de = B(xe);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "raw");
              lt(de, {
                type: "radio",
                name: "bodyType",
                value: "raw",
                get checked() {
                  return c(_e);
                },
                onchange: (Me) => {
                  Me.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            be(), j(xe), j(ne), L(z, q);
          };
          ue(W, (z) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && z(I);
          });
        }
        var k = A(W, 2);
        {
          var _ = (z) => {
            var q = Cb(), U = ae(q), ne = B(U);
            Ie(ne, {
              level: 3,
              children: (ge, ce) => {
                be();
                var ie = Pe("参数");
                L(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var re = A(ne, 2);
            He(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ge, ce) => {
                var ie = xb();
                L(ge, ie);
              },
              $$slots: { default: !0 }
            }), j(U);
            var ee = A(U, 2);
            Lt(ee, { dataKeyName: "formData" }), L(z, q);
          };
          ue(k, (z) => {
            n().bodyType === "form-data" && z(_);
          });
        }
        var b = A(k, 2);
        {
          var M = (z) => {
            var q = _b(), U = ae(q), ne = B(U);
            Ie(ne, {
              level: 3,
              children: (ge, ce) => {
                be();
                var ie = Pe("Body 参数");
                L(ge, ie);
              },
              $$slots: { default: !0 }
            });
            var re = A(ne, 2);
            He(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ge, ce) => {
                var ie = $b();
                L(ge, ie);
              },
              $$slots: { default: !0 }
            }), j(U);
            var ee = A(U, 2);
            Lt(ee, { dataKeyName: "formUrlencoded" }), L(z, q);
          };
          ue(b, (z) => {
            n().bodyType === "x-www-form-urlencoded" && z(M);
          });
        }
        var T = A(b, 2);
        {
          var R = (z) => {
            var q = kb(), U = B(q);
            Ge(U, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), j(q), L(z, q);
          };
          ue(T, (z) => {
            n().bodyType === "json" && z(R);
          });
        }
        var K = A(T, 2);
        {
          var Y = (z) => {
            var q = Sb(), U = B(q);
            Ge(U, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), j(q), L(z, q);
          };
          ue(K, (z) => {
            n().bodyType === "raw" && z(Y);
          });
        }
        var D = A(K, 2), J = B(D);
        Ie(J, {
          level: 3,
          mt: "10px",
          children: (z, q) => {
            be();
            var U = Pe("输出参数");
            L(z, U);
          },
          $$slots: { default: !0 }
        });
        var F = A(J, 2);
        He(F, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (z, q) => {
            var U = Eb();
            L(z, U);
          },
          $$slots: { default: !0 }
        }), j(D);
        var Q = A(D, 2);
        Zn(Q, {}), L(u, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le($f, { data: {} }, [], [], !0);
var Tb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Mb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ob = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const Lb = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function _f(e, t) {
  fe(t, !0), Xe(e, Lb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = rr();
  let a = /* @__PURE__ */ Le(Wt([]));
  Rn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = mt();
  ot(() => {
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
      n(d), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Tb();
        L(d, f);
      },
      children: (d, f) => {
        var p = Ob(), h = ae(p), g = B(h);
        Ie(g, {
          level: 3,
          children: (I, k) => {
            be();
            var _ = Pe("输入参数");
            L(I, _);
          },
          $$slots: { default: !0 }
        });
        var y = A(g, 2);
        He(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, k) => {
            var _ = Mb();
            L(I, _);
          },
          $$slots: { default: !0 }
        }), j(h);
        var w = A(h, 2);
        Lt(w, {});
        var $ = A(w, 2);
        Ie($, {
          level: 3,
          mt: "10px",
          children: (I, k) => {
            be();
            var _ = Pe("知识库设置");
            L(I, _);
          },
          $$slots: { default: !0 }
        });
        var C = A($, 4), x = B(C);
        {
          let I = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          xt(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const _ = k.value;
              l(o, () => ({ knowledgeId: _ }));
            },
            get value() {
              return c(I);
            }
          });
        }
        j(C);
        var S = A(C, 4), N = B(S);
        lt(N, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const k = I.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), j(S);
        var E = A(S, 4), O = B(E);
        {
          let I = /* @__PURE__ */ P(() => n().limit || "");
          lt(O, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const _ = k.target.value;
              l(o, () => ({ limit: _ }));
            },
            get value() {
              return c(I);
            }
          });
        }
        j(E);
        var V = A(E, 2), Z = B(V);
        Ie(Z, {
          level: 3,
          mt: "10px",
          children: (I, k) => {
            be();
            var _ = Pe("输出参数");
            L(I, _);
          },
          $$slots: { default: !0 }
        }), j(V);
        var W = A(V, 2);
        Zn(W, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(_f, { data: {} }, [], [], !0);
var Db = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Vb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ab = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Hb = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function kf(e, t) {
  fe(t, !0), Xe(e, Hb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = rr();
  let a = /* @__PURE__ */ Le(Wt([]));
  Rn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = mt();
  ot(() => {
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
      n(d), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Db();
        L(d, f);
      },
      children: (d, f) => {
        var p = Ab(), h = ae(p), g = B(h);
        Ie(g, {
          level: 3,
          children: (I, k) => {
            be();
            var _ = Pe("输入参数");
            L(I, _);
          },
          $$slots: { default: !0 }
        });
        var y = A(g, 2);
        He(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, k) => {
            var _ = Vb();
            L(I, _);
          },
          $$slots: { default: !0 }
        }), j(h);
        var w = A(h, 2);
        Lt(w, {});
        var $ = A(w, 2);
        Ie($, {
          level: 3,
          mt: "10px",
          children: (I, k) => {
            be();
            var _ = Pe("搜索引擎设置");
            L(I, _);
          },
          $$slots: { default: !0 }
        });
        var C = A($, 4), x = B(C);
        {
          let I = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          xt(x, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const _ = k.value;
              l(o, () => ({ engine: _ }));
            },
            get value() {
              return c(I);
            }
          });
        }
        j(C);
        var S = A(C, 4), N = B(S);
        lt(N, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (I) => {
            const k = I.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), j(S);
        var E = A(S, 4), O = B(E);
        lt(O, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (I) => {
            const k = I.target.value;
            l(o, () => ({ limit: k }));
          }
        }), j(E);
        var V = A(E, 2), Z = B(V);
        Ie(Z, {
          level: 3,
          mt: "10px",
          children: (I, k) => {
            be();
            var _ = Pe("输出参数");
            L(I, _);
          },
          $$slots: { default: !0 }
        }), j(V);
        var W = A(V, 2);
        Zn(W, {}), L(d, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(kf, { data: {} }, [], [], !0);
var zb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ib = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rb = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const jb = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Sf(e, t) {
  fe(t, !0), Xe(e, jb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn();
  ot(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = zb();
        L(a, l);
      },
      handle: (a) => {
        tr(a, {
          type: "source",
          get position() {
            return $e.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Rb(), d = ae(u), f = B(d);
        Ie(f, {
          level: 3,
          children: ($, C) => {
            be();
            var x = Pe("循环变量");
            L($, x);
          },
          $$slots: { default: !0 }
        }), j(d);
        var p = A(d, 2);
        Lt(p, { dataKeyName: "loopVars" });
        var h = A(p, 2), g = B(h);
        Ie(g, {
          level: 3,
          children: ($, C) => {
            be();
            var x = Pe("输出参数");
            L($, x);
          },
          $$slots: { default: !0 }
        });
        var y = A(g, 2);
        He(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, C) => {
            var x = Ib();
            L($, x);
          },
          $$slots: { default: !0 }
        }), j(h);
        var w = A(h, 2);
        Lt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), L(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe(s);
}
le(Sf, { data: {} }, [], [], !0);
var Bb = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Kb = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Zb = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ef(e, t) {
  fe(t, !0), Xe(e, Zb);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = st(), a = Bn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = mt(), d = (k, _) => {
    u(s, (b) => {
      let M = b.data?.[o()];
      return M[r()] = { ...M[r()], [k]: _ }, { [o()]: M };
    });
  }, f = (k, _) => {
    const b = _.target.value;
    d(k, b);
  }, p = (k) => {
    const _ = k.value;
    d("ref", _);
  }, h = (k) => {
    const _ = k.value;
    d("formType", _);
  }, g = (k) => {
    const _ = k.value;
    d("contentType", _);
  };
  let y;
  const w = () => {
    u(s, (k) => {
      let _ = k.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), y?.hide();
  };
  let $ = vf(i());
  var C = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), v();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(k) {
      i(k), v();
    }
  }, x = Kb(), S = ae(x), N = B(S);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    lt(N, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (_) => f("name", _)
    });
  }
  j(S);
  var E = A(S, 2), O = B(E);
  {
    var V = (k) => {
      lt(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => f("value", _)
      });
    }, Z = (k) => {
      var _ = Oe(), b = ae(_);
      {
        var M = (T) => {
          {
            let R = /* @__PURE__ */ P(() => [c(l).ref]);
            xt(T, {
              get items() {
                return $.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(R);
              },
              expandAll: !0,
              onSelect: p
            });
          }
        };
        ue(
          b,
          (T) => {
            c(l).refType !== "input" && T(M);
          },
          !0
        );
      }
      L(k, _);
    };
    ue(O, (k) => {
      c(l).refType === "fixed" ? k(V) : k(Z, !1);
    });
  }
  j(E);
  var W = A(E, 2), I = B(W);
  return Zt(
    ur(I, {
      placement: "bottom",
      floating: (k) => {
        var _ = Bb(), b = B(_), M = A(B(b));
        {
          let z = /* @__PURE__ */ P(() => c(l).contentType ? [c(l).contentType] : []);
          xt(M, {
            get items() {
              return Na;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(z);
            },
            onSelect: g
          });
        }
        j(b);
        var T = A(b, 2), R = A(B(T));
        {
          let z = /* @__PURE__ */ P(() => c(l).formType ? [c(l).formType] : []);
          xt(R, {
            get items() {
              return Dy;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(z);
            },
            onSelect: h
          });
        }
        j(T);
        var K = A(T, 2), Y = A(B(K));
        Ge(Y, {
          rows: 1,
          style: "width: 100%;",
          onchange: (z) => {
            f("formLabel", z);
          },
          get value() {
            return c(l).formLabel;
          }
        }), j(K);
        var D = A(K, 2), J = A(B(D));
        Ge(J, {
          rows: 2,
          style: "width: 100%;",
          onchange: (z) => {
            f("formDescription", z);
          },
          get value() {
            return c(l).formDescription;
          }
        }), j(D);
        var F = A(D, 2), Q = B(F);
        He(Q, {
          onclick: w,
          children: (z, q) => {
            be();
            var U = Pe("删除");
            L(z, U);
          },
          $$slots: { default: !0 }
        }), j(F), j(_), L(k, _);
      },
      children: (k, _) => {
        Uo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => y = k,
    () => y
  ), j(W), L(e, x), pe(C);
}
le(
  Ef,
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
var Yb = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Xb = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Fb = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const qb = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function Pf(e, t) {
  fe(t, !0), Xe(e, qb);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = st(), s = Bn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), v();
    }
  }, u = Fb(), d = B(u);
  {
    var f = (h) => {
      var g = Yb();
      be(4), L(h, g);
    };
    ue(d, (h) => {
      c(a).length !== 0 && h(f);
    });
  }
  var p = A(d, 2);
  return Pt(
    p,
    19,
    () => c(a),
    (h) => h.id,
    (h, g, y) => {
      Ef(h, {
        get parameter() {
          return c(g);
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
    (h) => {
      var g = Xb(), y = B(g, !0);
      j(g), Ee(() => Je(y, n())), L(h, g);
    }
  ), j(u), L(e, u), pe(l);
}
le(Pf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const js = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!js(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !js(e[s], t[s])) return !1;
    return !0;
  }
};
var Wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Jb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ub = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Gb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nf(e, t) {
  fe(t, !0), Xe(e, Gb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), { updateNodeData: s } = mt();
  ot(() => {
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
      js(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  };
  return en(e, Ue(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Wb();
        L(l, u);
      },
      children: (l, u) => {
        var d = Ub(), f = ae(d), p = B(f);
        Ie(p, {
          level: 3,
          children: (N, E) => {
            be();
            var O = Pe("确认数据");
            L(N, O);
          },
          $$slots: { default: !0 }
        });
        var h = A(p, 2);
        He(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (N, E) => {
            var O = Jb();
            L(N, O);
          },
          $$slots: { default: !0 }
        }), j(f);
        var g = A(f, 2);
        Pf(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var y = A(g, 2);
        Ie(y, {
          level: 3,
          mt: "10px",
          children: (N, E) => {
            be();
            var O = Pe("确认消息");
            L(N, O);
          },
          $$slots: { default: !0 }
        });
        var w = A(y, 4), $ = B(w);
        {
          let N = /* @__PURE__ */ P(() => n().message || "");
          Ge($, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (E) => {
              s(o, () => ({ message: E.target.value }));
            },
            get value() {
              return c(N);
            }
          });
        }
        j(w);
        var C = A(w, 2), x = B(C);
        Ie(x, {
          level: 3,
          mt: "10px",
          children: (N, E) => {
            be();
            var O = Pe("输出参数");
            L(N, O);
          },
          $$slots: { default: !0 }
        }), j(C);
        var S = A(C, 2);
        Zn(S, { placeholder: "" }), L(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Nf, { data: {} }, [], [], !0);
const Qb = {
  startNode: pf,
  codeNode: xf,
  confirmNode: Nf,
  llmNode: bf,
  templateNode: Cf,
  httpNode: $f,
  knowledgeNode: _f,
  searchEngineNode: kf,
  loopNode: Sf,
  endNode: yf
};
var ex = /* @__PURE__ */ te("<!> ", 1);
function Bs(e, t) {
  fe(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7), a = (u) => {
    if (!u.dataTransfer)
      return null;
    const d = {
      type: o(),
      data: { title: r(), description: i(), ...s() }
    };
    u.dataTransfer.setData("application/tinyflow", JSON.stringify(d)), u.dataTransfer.effectAllowed = "move";
  };
  var l = {
    get icon() {
      return n();
    },
    set icon(u) {
      n(u), v();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), v();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), v();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), v();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), v();
    }
  };
  return He(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var f = ex(), p = ae(f);
      ca(p, n);
      var h = A(p);
      Ee(() => Je(h, ` ${r() ?? ""}`)), L(u, f);
    },
    $$slots: { default: !0 }
  }), pe(l);
}
le(Bs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var tx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), nx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), rx = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Tf(e, t) {
  fe(t, !0);
  let n = /* @__PURE__ */ Le("base"), r = /* @__PURE__ */ Le("show");
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
  ], s = [], a = rr(), l = a.customNodes;
  if (l) {
    const $ = Object.keys(l).sort((C, x) => (l[C].sortNo || 0) - (l[x].sortNo || 0));
    for (let C of $)
      l[C].group === "base" ? o.push({ type: C, ...l[C] }) : s.push({
        icon: l[C].icon,
        title: l[C].title,
        type: C
      });
    o.sort((C, x) => (C.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const $ = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray($)) {
      for (let C of $)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === C) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = rx(), d = B(u), f = B(d), p = B(f);
  Jd(p, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: ($) => {
      G(n, $.value.toString(), !0);
    }
  }), j(f);
  var h = A(f, 2), g = B(h);
  Pt(g, 21, () => o, Wr, ($, C) => {
    Bs($, Ue(() => c(C)));
  }), j(g);
  var y = A(g, 2);
  Pt(y, 21, () => s, Wr, ($, C) => {
    Bs($, Ue(() => c(C)));
  }), j(y), j(h), j(d);
  var w = A(d, 2);
  He(w, {
    onclick: () => {
      G(r, c(r) ? "" : "show", !0);
    },
    children: ($, C) => {
      var x = Oe(), S = ae(x);
      {
        var N = (O) => {
          var V = tx();
          L(O, V);
        }, E = (O) => {
          var V = nx();
          L(O, V);
        };
        ue(S, (O) => {
          c(r) === "show" ? O(N) : O(E, !1);
        });
      }
      L($, x);
    },
    $$slots: { default: !0 }
  }), j(u), Ee(() => {
    Rt(u, 1, `tf-toolbar ${c(r) ?? ""}`), $t(g, `display: ${c(n) === "base" ? "flex" : "none"}`), $t(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), L(e, u), pe();
}
le(Tf, {}, [], [], !0);
const ox = () => ({ getNode: (e) => Re.getNode(e) }), ix = () => ({ ensureParentInNodesBefore: (e, t) => {
  Re.updateNodes((n) => {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (n[s].id === e) {
        r = s;
        break;
      }
    if (r <= 0)
      return n;
    let o = -1;
    for (let s = 0; s < r; s++)
      if (n[s].parentId === e || n[s].id === t) {
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
} }), sx = () => ({ getEdgesByTarget: (e) => Re.getEdges().filter((t) => t.target === e) });
var ax = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lx = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), ux = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), cx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), dx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), fx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), px = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), hx = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gx = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), vx = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const mx = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Mf(e, t) {
  fe(t, !0), Xe(e, mx);
  const n = m(t, "data", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = st(), { addParameter: i } = hn(), s = mt(), { updateNodeData: a } = s, l = (w) => {
    a(o, w);
  }, u = (w, $) => {
    l({ [w]: $.target?.value });
  }, d = { ...r, id: o, data: n() }, f = document.createElement("div"), p = rr().customNodes[t.type];
  p.render?.(f, d, s);
  const h = p.forms;
  let g;
  ot(() => {
    n().expand && g && g.append(f);
  }), ot(() => {
    n() && p.onUpdate?.(f, { ...d, data: n() });
  }), ot(() => {
    !n().parameters && p.parameters && l({
      parameters: Oo(JSON.parse(JSON.stringify(p.parameters)))
    });
  }), ot(() => {
    !n().outputDefs && p.outputDefs && l({
      outputDefs: Oo(JSON.parse(JSON.stringify(p.outputDefs)))
    });
  });
  var y = {
    get data() {
      return n();
    },
    set data(w) {
      n(w), v();
    }
  };
  {
    const w = (C) => {
      var x = Oe(), S = ae(x);
      ca(S, () => p.icon), L(C, x);
    };
    let $ = /* @__PURE__ */ P(() => ({ ...n(), description: p.description }));
    en(e, Ue(
      {
        get data() {
          return c($);
        }
      },
      () => r,
      {
        icon: w,
        children: (C, x) => {
          var S = vx(), N = ae(S);
          {
            var E = (k) => {
              var _ = lx(), b = ae(_), M = B(b);
              Ie(M, {
                level: 3,
                children: (Y, D) => {
                  be();
                  var J = Pe("输入参数");
                  L(Y, J);
                },
                $$slots: { default: !0 }
              });
              var T = A(M, 2);
              {
                var R = (Y) => {
                  He(Y, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (D, J) => {
                      var F = ax();
                      L(D, F);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(T, (Y) => {
                  p.parametersAddEnable !== !1 && Y(R);
                });
              }
              j(b);
              var K = A(b, 2);
              Lt(K, {}), L(k, _);
            };
            ue(N, (k) => {
              p.parametersEnable !== !1 && k(E);
            });
          }
          var O = A(N, 2);
          {
            var V = (k) => {
              var _ = Oe(), b = ae(_);
              Pt(b, 17, () => h, Wr, (M, T) => {
                var R = Oe(), K = ae(R);
                {
                  var Y = (J) => {
                    var F = ux(), Q = ae(F), z = B(Q, !0);
                    j(Q);
                    var q = A(Q, 2), U = B(q);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[c(T).name] || c(T).defaultValue);
                      lt(U, Ue(
                        {
                          get placeholder() {
                            return c(T).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(T).attrs,
                        {
                          onchange: (re) => {
                            u(c(T).name, re);
                          }
                        }
                      ));
                    }
                    j(q), Ee(() => Je(z, c(T).label)), L(J, F);
                  }, D = (J) => {
                    var F = Oe(), Q = ae(F);
                    {
                      var z = (U) => {
                        var ne = cx(), re = ae(ne), ee = B(re, !0);
                        j(re);
                        var ge = A(re, 2), ce = B(ge);
                        {
                          let ie = /* @__PURE__ */ P(() => n()[c(T).name] || c(T).defaultValue);
                          Ge(ce, Ue(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(T).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(T).attrs,
                            {
                              onchange: (se) => {
                                u(c(T).name, se);
                              }
                            }
                          ));
                        }
                        j(ge), Ee(() => Je(ee, c(T).label)), L(U, ne);
                      }, q = (U) => {
                        var ne = Oe(), re = ae(ne);
                        {
                          var ee = (ce) => {
                            var ie = dx(), se = ae(ie), ve = B(se, !0);
                            j(se);
                            var me = A(se, 2), xe = B(me), de = B(xe), _e = B(de);
                            j(de);
                            var Me = A(de, 2), X = (Ke) => l({ [c(T).name]: parseFloat(Ke.target.value) });
                            pt(
                              Me,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(T).attrs,
                                value: n()[c(T).name] ?? c(T).defaultValue,
                                oninput: X
                              }),
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), j(xe), j(me), Ee(() => {
                              Je(ve, c(T).label), Je(_e, `${c(T).description ?? ""}: ${n()[c(T).name] ?? c(T).defaultValue ?? ""}`);
                            }), L(ce, ie);
                          }, ge = (ce) => {
                            var ie = Oe(), se = ae(ie);
                            {
                              var ve = (xe) => {
                                var de = fx(), _e = ae(de), Me = B(_e, !0);
                                j(_e);
                                var X = A(_e, 2), Ke = B(X);
                                {
                                  let De = /* @__PURE__ */ P(() => c(T).options || []), je = /* @__PURE__ */ P(() => n()[c(T).name] ? [n()[c(T).name]] : [c(T).defaultValue]);
                                  xt(Ke, {
                                    get items() {
                                      return c(De);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(T).placeholder;
                                    },
                                    onSelect: (Fe) => {
                                      const nt = Fe.value;
                                      l({ [c(T).name]: nt });
                                    },
                                    get value() {
                                      return c(je);
                                    }
                                  });
                                }
                                j(X), Ee(() => Je(Me, c(T).label)), L(xe, de);
                              }, me = (xe) => {
                                var de = Oe(), _e = ae(de);
                                {
                                  var Me = (Ke) => {
                                    var De = px(), je = ae(De), Fe = B(je, !0);
                                    j(je);
                                    var nt = A(je, 2), _t = B(nt);
                                    {
                                      let et = /* @__PURE__ */ P(() => c(T).chosen?.buttonText);
                                      Wd(_t, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(T).placeholder;
                                        },
                                        get buttonText() {
                                          return c(et);
                                        },
                                        onChosen: (Ze, ye, Ye) => {
                                          c(T).chosen?.onChosen?.(l, Ze, ye, Ye);
                                        },
                                        get value() {
                                          return n()[c(T).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(T).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    j(nt), Ee(() => Je(Fe, c(T).label)), L(Ke, De);
                                  }, X = (Ke) => {
                                    var De = Oe(), je = ae(De);
                                    {
                                      var Fe = (nt) => {
                                        Ie(nt, Ue({ level: 3, mt: "10px" }, () => c(T).attrs, {
                                          children: (_t, et) => {
                                            be();
                                            var Ze = Pe();
                                            Ee(() => Je(Ze, c(T).label)), L(_t, Ze);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ue(
                                        je,
                                        (nt) => {
                                          c(T).type === "heading" && nt(Fe);
                                        },
                                        !0
                                      );
                                    }
                                    L(Ke, De);
                                  };
                                  ue(
                                    _e,
                                    (Ke) => {
                                      c(T).type === "chosen" ? Ke(Me) : Ke(X, !1);
                                    },
                                    !0
                                  );
                                }
                                L(xe, de);
                              };
                              ue(
                                se,
                                (xe) => {
                                  c(T).type === "select" ? xe(ve) : xe(me, !1);
                                },
                                !0
                              );
                            }
                            L(ce, ie);
                          };
                          ue(
                            re,
                            (ce) => {
                              c(T).type === "slider" ? ce(ee) : ce(ge, !1);
                            },
                            !0
                          );
                        }
                        L(U, ne);
                      };
                      ue(
                        Q,
                        (U) => {
                          c(T).type === "textarea" ? U(z) : U(q, !1);
                        },
                        !0
                      );
                    }
                    L(J, F);
                  };
                  ue(K, (J) => {
                    c(T).type === "input" ? J(Y) : J(D, !1);
                  });
                }
                L(M, R);
              }), L(k, _);
            };
            ue(O, (k) => {
              h && k(V);
            });
          }
          var Z = A(O, 2);
          Zt(Z, (k) => g = k, () => g);
          var W = A(Z, 2);
          {
            var I = (k) => {
              var _ = gx(), b = ae(_), M = B(b);
              Ie(M, {
                level: 3,
                mt: "10px",
                children: (Y, D) => {
                  be();
                  var J = Pe("输出参数");
                  L(Y, J);
                },
                $$slots: { default: !0 }
              });
              var T = A(M, 2);
              {
                var R = (Y) => {
                  He(Y, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (D, J) => {
                      var F = hx();
                      L(D, F);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(T, (Y) => {
                  p.outputDefsAddEnable !== !1 && Y(R);
                });
              }
              j(b);
              var K = A(b, 2);
              Zn(K, {}), L(k, _);
            };
            ue(W, (k) => {
              p.outputDefsEnable !== !1 && k(I);
            });
          }
          Ee(() => {
            $t(Z, p.rootStyle || ""), Rt(Z, 1, jn(p.rootClass), "svelte-qt4m0r");
          }), L(C, S);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return pe(y);
}
le(Mf, { data: {} }, [], [], !0);
const yx = () => ({ updateEdgeData: (e, t, n) => {
  const r = Re.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Re.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), wx = () => ({ deleteEdge: (e) => {
  Re.removeEdge(e);
} }), bx = () => {
  const e = (t, n) => n.filter(
    // 排除循环节点的子节点，否则在多层循环嵌套时不正确
    (r) => r.source === t && r.sourceHandle !== "loop_handle"
  );
  return { getNodesFromSource: (t) => {
    const n = Re.getEdges(), r = [];
    let o = e(t, n);
    for (; o.length > 0; ) {
      const i = [];
      o.forEach((s) => {
        r.push(Re.getNode(s.target)), i.push(...e(s.target, n));
      }), o = i;
    }
    return r;
  } };
}, xx = () => ({ getNodeRelativePosition: (e) => {
  let t = Re.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Re.getNode(t.parentId) : t = void 0;
  return n;
} });
function Cx(e) {
  const { id: t, type: n, position: r, data: o, parentId: i } = e;
  return {
    id: t,
    type: n,
    position: { x: r.x, y: r.y },
    parentId: i || void 0,
    data: o ? JSON.parse(JSON.stringify(o)) : {},
    ...i !== void 0 && { parentId: i }
  };
}
function $x(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  for (const a of e)
    t.set(a.id, a), n.set(a.id, 0), a.parentId && (n.set(a.id, 1), r.has(a.parentId) || r.set(a.parentId, []), r.get(a.parentId).push(a.id));
  const o = [];
  for (const a of e)
    (!a.parentId || !t.has(a.parentId)) && o.push(a);
  const i = [], s = /* @__PURE__ */ new Set();
  for (; o.length > 0; ) {
    const a = o.shift();
    if (s.has(a.id)) continue;
    s.add(a.id), i.push(a);
    const l = r.get(a.id) || [];
    for (const u of l)
      s.has(u) || o.push(t.get(u));
  }
  for (const a of e)
    s.has(a.id) || i.push(a);
  return i;
}
function _x(e) {
  const { id: t, source: n, target: r, sourceHandle: o, targetHandle: i, type: s, data: a } = e;
  return {
    id: t,
    source: n,
    target: r,
    ...o !== void 0 && { sourceHandle: o },
    ...i !== void 0 && { targetHandle: i },
    ...s !== void 0 && { type: s },
    data: a ? JSON.parse(JSON.stringify(a)) : {}
  };
}
function Ks(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Ks(n, t));
  if (typeof e == "object") {
    if (e.refType === "ref" && typeof e.ref == "string") {
      const r = e.ref.match(/^([^.\s]+)\.(.+)$/);
      if (r) {
        const [o, i, s] = r, a = t.get(i);
        if (a !== void 0)
          return { ...e, ref: `${a}.${s}` };
      }
    }
    const n = {};
    for (const r in e)
      Object.hasOwn(e, r) && (n[r] = Ks(e[r], t));
    return n;
  }
  return e;
}
const kx = () => (mt(), { copyHandler: async (e) => {
  const t = Re.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Re.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(Cx), o = n.map(_x), i = JSON.stringify({
    tinyflowNodes: r,
    tinyflowEdges: o,
    version: "1.0"
  }, null, 0);
  try {
    "clipboardData" in e && e.clipboardData ? (e.clipboardData.setData("text/plain", i), e instanceof ClipboardEvent && e.preventDefault()) : await navigator.clipboard.writeText(i), console.log("Copied nodes and edges to clipboard");
  } catch (s) {
    console.error("Failed to copy:", s);
    try {
      sessionStorage.setItem("tinyflow_clipboard", i);
    } catch {
    }
  }
}, pasteHandler: (e) => {
  const t = e.clipboardData?.getData("text/plain");
  if (!t) return;
  let n = null;
  try {
    n = JSON.parse(t);
  } catch {
    return;
  }
  if (!n?.tinyflowNodes || !Array.isArray(n.tinyflowNodes))
    return;
  e.preventDefault();
  const r = $x(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${zn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, f = Ks(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: f,
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
      id: `edge_${zn()}`,
      source: u,
      target: d
    });
  }
  Re.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Re.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ru = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var Sx = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), Ex = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), Px = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Nx = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Of(e, t) {
  fe(t, !0), Xe(e, Nx);
  const n = m(t, "onInit", 7), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = mt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Le(!1), s = /* @__PURE__ */ Le(null);
  const { updateEdgeData: a } = yx(), l = (F) => {
    F.preventDefault(), F.dataTransfer && (F.dataTransfer.dropEffect = "move");
  }, u = (F) => {
    F.preventDefault();
    const Q = o.screenToFlowPosition({ x: F.clientX - 250, y: F.clientY - 100 }), z = F.dataTransfer?.getData("application/tinyflow");
    if (!z)
      return;
    const q = JSON.parse(z), U = { id: `node_${zn()}`, position: Q, data: {}, ...q };
    Re.addNode(U), Re.selectNodeOnly(U.id);
  }, { getNode: d } = ox(), f = (F) => {
    const Q = d(F.source), z = d(F.target);
    if (F.sourceHandle === "loop_handle" || Q.parentId) {
      const q = o.getEdges();
      for (let U of q)
        if (U.target === F.target) {
          const ne = d(U.source);
          if (F.sourceHandle === "loop_handle" && ne.parentId !== Q.id || Q.parentId && ne.parentId !== Q.parentId)
            return !1;
        }
    }
    return !(!Q.parentId && z.parentId && z.parentId !== Q.id);
  }, { getNodesFromSource: p } = bx(), { getNodeRelativePosition: h } = xx(), { ensureParentInNodesBefore: g } = ix(), y = (F, Q) => {
    if (!Q.isValid)
      return;
    const z = Q.toNode;
    if (z.parentId)
      return;
    const q = Q.fromNode, U = Q.fromHandle, ne = { position: { ...z.position } };
    if (U.id === "loop_handle" ? ne.parentId = q.id : q.parentId && (ne.parentId = q.parentId), ne.parentId) {
      const { x: re, y: ee } = h(ne.parentId);
      ne.position = { x: z.position.x - re, y: z.position.y - ee }, o.updateNode(z.id, ne), p(z.id).forEach((ge) => {
        o.updateNode(ge.id, {
          parentId: ne.parentId,
          position: { x: ge.position.x - re, y: ge.position.y - ee }
        });
      }), g(ne.parentId, z.id);
    }
    setTimeout(() => {
      Re.getEdges().forEach((re) => {
        re.target === z.id && re.source == q.id && (G(i, !0), G(s, re, !0));
      });
    });
  }, { getEdgesByTarget: w } = sx(), $ = (F) => {
    F.edges.forEach((Q) => {
      Q.id === c(s)?.id && (G(s, null), G(i, !1));
      const z = d(Q.target);
      if (z && z.parentId) {
        const q = w(Q.target), { x: U, y: ne } = h(z.parentId);
        if (q.length === 0)
          o.updateNode(z.id, {
            parentId: void 0,
            position: { x: z.position.x + U, y: z.position.y + ne }
          }), p(z.id).forEach((re) => {
            o.updateNode(re.id, {
              parentId: void 0,
              position: { x: re.position.x + U, y: re.position.y + ne }
            });
          });
        else {
          let re = !1;
          for (let ee = 0; ee < q.length; ee++) {
            const ge = q[ee], ce = d(ge.source);
            if (ce.parentId || ce.type === "loopNode") {
              re = !0;
              break;
            }
          }
          re || (o.updateNode(z.id, {
            parentId: void 0,
            position: { x: z.position.x + U, y: z.position.y + ne }
          }), p(z.id).forEach((ee) => {
            o.updateNode(ee.id, {
              parentId: void 0,
              position: { x: ee.position.x + U, y: ee.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: C } = wx(), x = (F, Q) => {
  }, S = (F) => {
  }, { copyHandler: N, pasteHandler: E } = kx(), O = (F) => {
    ru() || ((F.ctrlKey || F.metaKey) && F.key === "c" && (F.preventDefault(), N(F)), (F.ctrlKey || F.metaKey) && F.key === "a" && (F.preventDefault(), Re.updateNodes((Q) => Q.map((z) => ({ ...z, selected: !0 }))), Re.updateEdges((Q) => Q.map((z) => ({ ...z, selected: !0 })))));
  }, V = async (F) => {
    ru() || E(F);
  };
  Rn(() => {
    window.addEventListener("keydown", O), window.addEventListener("paste", V);
  }), Io(() => {
    window.removeEventListener("keydown", O), window.removeEventListener("paste", V);
  });
  const Z = {
    // ...nodeTypes
  }, W = rr().customNodes;
  if (W)
    for (let F of Object.keys(W))
      Z[F] = Mf;
  const I = rr().onDataChange;
  ot(() => {
    I?.({
      nodes: Re.getNodes(),
      edges: Re.getEdges(),
      viewport: Re.getViewport()
    });
  });
  var k = {
    get onInit() {
      return n();
    },
    set onInit(F) {
      n(F), v();
    }
  }, _ = Px(), b = B(_), M = Re.getNodes, T = Re.setNodes, R = Re.getEdges, K = Re.setEdges, Y = Re.getViewport, D = Re.setViewport;
  {
    let F = /* @__PURE__ */ P(() => ({ ...Qb, ...Z })), Q = /* @__PURE__ */ P(() => ({
      markerEnd: { type: Eo.ArrowClosed, width: 20, height: 20 }
    }));
    Dd(b, {
      get nodeTypes() {
        return c(F);
      },
      get nodes() {
        return M();
      },
      set nodes(z) {
        T(z);
      },
      get edges() {
        return R();
      },
      set edges(z) {
        K(z);
      },
      get viewport() {
        return Y();
      },
      set viewport(z) {
        D(z);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: f,
      onconnectend: y,
      onconnectstart: x,
      onconnect: S,
      connectionRadius: 50,
      onedgeclick: (z) => {
        G(i, !0), G(s, z.edge, !0);
      },
      onbeforeconnect: (z) => ({ ...z, id: zn() }),
      ondelete: $,
      onclick: (z) => {
        const q = z.target;
        q.classList.contains("svelte-flow__edge-interaction") || q.classList.contains("panel-content") || q.closest(".panel-content") || (G(i, !1), G(s, null));
      },
      get defaultEdgeOptions() {
        return c(Q);
      },
      children: (z, q) => {
        var U = Ex(), ne = ae(U);
        Zd(ne, {});
        var re = A(ne, 2);
        jd(re, {});
        var ee = A(re, 2);
        Xd(ee, {});
        var ge = A(ee, 2);
        {
          var ce = (ie) => {
            Fo(ie, {
              children: (se, ve) => {
                var me = Sx(), xe = A(B(me), 4), de = B(xe);
                {
                  let Ke = /* @__PURE__ */ P(() => c(s)?.data?.condition);
                  Ge(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ke);
                    },
                    onchange: (De) => {
                      c(s) && a(c(s).id, { condition: De.target?.value });
                    }
                  });
                }
                j(xe);
                var _e = A(xe, 2), Me = B(_e);
                He(Me, {
                  onclick: () => {
                    C(c(s)?.id), G(i, !1);
                  },
                  children: (Ke, De) => {
                    be();
                    var je = Pe("删除");
                    L(Ke, je);
                  },
                  $$slots: { default: !0 }
                });
                var X = A(Me, 2);
                He(X, {
                  primary: !0,
                  onclick: () => {
                    G(i, !1);
                  },
                  children: (Ke, De) => {
                    be();
                    var je = Pe("保存");
                    L(Ke, je);
                  },
                  $$slots: { default: !0 }
                }), j(_e), j(me), L(se, me);
              },
              $$slots: { default: !0 }
            });
          };
          ue(ge, (ie) => {
            c(i) && ie(ce);
          });
        }
        L(z, U);
      },
      $$slots: { default: !0 }
    });
  }
  var J = A(b, 2);
  return Tf(J, {}), j(_), L(e, _), pe(k);
}
le(Of, { onInit: {} }, [], [], !0);
function Tx(e, t) {
  fe(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Re.init(o?.nodes || [], o?.edges || []), Zr("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), v();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), v();
    }
  };
  return Vd(e, {
    children: (s, a) => {
      Of(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), pe(i);
}
customElements.define("tinyflow-component", le(Tx, { options: {}, onInit: {} }, [], [], !1));
const Ox = Kf((e, t) => {
  const n = Ra(null), r = Ra(null);
  Zf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Yf(() => {
    if (n.current) {
      const a = new Vy({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Wf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  Ox as Tinyflow
};
//# sourceMappingURL=index.js.map
