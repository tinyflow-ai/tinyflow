import Bl, { forwardRef as bf, useRef as Sa, useImperativeHandle as xf, useEffect as Cf } from "react";
var zo = { exports: {} }, Fr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function $f() {
  if (Ea) return Fr;
  Ea = 1;
  var e = Bl, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, p = {}, f = null, g = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: f, ref: g, props: p, _owner: o.current };
  }
  return Fr.Fragment = n, Fr.jsx = s, Fr.jsxs = s, Fr;
}
var Wr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function _f() {
  return Pa || (Pa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bl, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function $(H) {
      if (H === null || typeof H != "object")
        return null;
      var J = h && H[h] || H[v];
      return typeof J == "function" ? J : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(H) {
      {
        for (var J = arguments.length, me = new Array(J > 1 ? J - 1 : 0), Pe = 1; Pe < J; Pe++)
          me[Pe - 1] = arguments[Pe];
        x("error", H, me);
      }
    }
    function x(H, J, me) {
      {
        var Pe = m.ReactDebugCurrentFrame, Re = Pe.getStackAddendum();
        Re !== "" && (J += "%s", me = me.concat([Re]));
        var Be = me.map(function(He) {
          return String(He);
        });
        Be.unshift("Warning: " + J), Function.prototype.apply.call(console[H], console, Be);
      }
    }
    var C = !1, _ = !1, T = !1, A = !1, Z = !1, F;
    F = Symbol.for("react.module.reference");
    function j(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === i || Z || H === o || H === u || H === d || A || H === g || C || _ || T || typeof H == "object" && H !== null && (H.$$typeof === f || H.$$typeof === p || H.$$typeof === s || H.$$typeof === a || H.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === F || H.getModuleId !== void 0));
    }
    function N(H, J, me) {
      var Pe = H.displayName;
      if (Pe)
        return Pe;
      var Re = J.displayName || J.name || "";
      return Re !== "" ? me + "(" + Re + ")" : me;
    }
    function S(H) {
      return H.displayName || "Context";
    }
    function D(H) {
      if (H == null)
        return null;
      if (typeof H.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof H == "function")
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
            var J = H;
            return S(J) + ".Consumer";
          case s:
            var me = H;
            return S(me._context) + ".Provider";
          case l:
            return N(H, H.render, "ForwardRef");
          case p:
            var Pe = H.displayName || null;
            return Pe !== null ? Pe : D(H.type) || "Memo";
          case f: {
            var Re = H, Be = Re._payload, He = Re._init;
            try {
              return D(He(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, k = 0, M, L, q, O, B, W, G;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function X() {
      {
        if (k === 0) {
          M = console.log, L = console.info, q = console.warn, O = console.error, B = console.group, W = console.groupCollapsed, G = console.groupEnd;
          var H = {
            configurable: !0,
            enumerable: !0,
            value: ee,
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
        k++;
      }
    }
    function pe() {
      {
        if (k--, k === 0) {
          var H = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, H, {
              value: M
            }),
            info: b({}, H, {
              value: L
            }),
            warn: b({}, H, {
              value: q
            }),
            error: b({}, H, {
              value: O
            }),
            group: b({}, H, {
              value: B
            }),
            groupCollapsed: b({}, H, {
              value: W
            }),
            groupEnd: b({}, H, {
              value: G
            })
          });
        }
        k < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = m.ReactCurrentDispatcher, he;
    function U(H, J, me) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (Re) {
            var Pe = Re.stack.trim().match(/\n( *(at )?)/);
            he = Pe && Pe[1] || "";
          }
        return `
` + he + H;
      }
    }
    var $e = !1, ge;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ie();
    }
    function ne(H, J) {
      if (!H || $e)
        return "";
      {
        var me = ge.get(H);
        if (me !== void 0)
          return me;
      }
      var Pe;
      $e = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = re.current, re.current = null, X();
      try {
        if (J) {
          var He = function() {
            throw Error();
          };
          if (Object.defineProperty(He.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(He, []);
            } catch (kt) {
              Pe = kt;
            }
            Reflect.construct(H, [], He);
          } else {
            try {
              He.call();
            } catch (kt) {
              Pe = kt;
            }
            H.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Pe = kt;
          }
          H();
        }
      } catch (kt) {
        if (kt && Pe && typeof kt.stack == "string") {
          for (var De = kt.stack.split(`
`), yt = Pe.stack.split(`
`), Qe = De.length - 1, tt = yt.length - 1; Qe >= 1 && tt >= 0 && De[Qe] !== yt[tt]; )
            tt--;
          for (; Qe >= 1 && tt >= 0; Qe--, tt--)
            if (De[Qe] !== yt[tt]) {
              if (Qe !== 1 || tt !== 1)
                do
                  if (Qe--, tt--, tt < 0 || De[Qe] !== yt[tt]) {
                    var Rt = `
` + De[Qe].replace(" at new ", " at ");
                    return H.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", H.displayName)), typeof H == "function" && ge.set(H, Rt), Rt;
                  }
                while (Qe >= 1 && tt >= 0);
              break;
            }
        }
      } finally {
        $e = !1, re.current = Be, pe(), Error.prepareStackTrace = Re;
      }
      var br = H ? H.displayName || H.name : "", tr = br ? U(br) : "";
      return typeof H == "function" && ge.set(H, tr), tr;
    }
    function le(H, J, me) {
      return ne(H, !1);
    }
    function te(H) {
      var J = H.prototype;
      return !!(J && J.isReactComponent);
    }
    function ye(H, J, me) {
      if (H == null)
        return "";
      if (typeof H == "function")
        return ne(H, te(H));
      if (typeof H == "string")
        return U(H);
      switch (H) {
        case u:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof H == "object")
        switch (H.$$typeof) {
          case l:
            return le(H.render);
          case p:
            return ye(H.type, J, me);
          case f: {
            var Pe = H, Re = Pe._payload, Be = Pe._init;
            try {
              return ye(Be(Re), J, me);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Ee = {}, K = m.ReactDebugCurrentFrame;
    function Ue(H) {
      if (H) {
        var J = H._owner, me = ye(H.type, H._source, J ? J.type : null);
        K.setExtraStackFrame(me);
      } else
        K.setExtraStackFrame(null);
    }
    function ae(H, J, me, Pe, Re) {
      {
        var Be = Function.call.bind(oe);
        for (var He in H)
          if (Be(H, He)) {
            var De = void 0;
            try {
              if (typeof H[He] != "function") {
                var yt = Error((Pe || "React class") + ": " + me + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof H[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              De = H[He](J, He, Pe, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qe) {
              De = Qe;
            }
            De && !(De instanceof Error) && (Ue(Re), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", me, He, typeof De), Ue(null)), De instanceof Error && !(De.message in Ee) && (Ee[De.message] = !0, Ue(Re), P("Failed %s type: %s", me, De.message), Ue(null));
          }
      }
    }
    var _e = Array.isArray;
    function ke(H) {
      return _e(H);
    }
    function ze(H) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, me = J && H[Symbol.toStringTag] || H.constructor.name || "Object";
        return me;
      }
    }
    function pt(H) {
      try {
        return mt(H), !1;
      } catch {
        return !0;
      }
    }
    function mt(H) {
      return "" + H;
    }
    function Ve(H) {
      if (pt(H))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(H)), mt(H);
    }
    var Ge = m.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, lt;
    function Je(H) {
      if (oe.call(H, "ref")) {
        var J = Object.getOwnPropertyDescriptor(H, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return H.ref !== void 0;
    }
    function _t(H) {
      if (oe.call(H, "key")) {
        var J = Object.getOwnPropertyDescriptor(H, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return H.key !== void 0;
    }
    function it(H, J) {
      typeof H.ref == "string" && Ge.current;
    }
    function It(H, J) {
      {
        var me = function() {
          Ye || (Ye = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        me.isReactWarning = !0, Object.defineProperty(H, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function jr(H, J) {
      {
        var me = function() {
          lt || (lt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        me.isReactWarning = !0, Object.defineProperty(H, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var mn = function(H, J, me, Pe, Re, Be, He) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: H,
        key: J,
        ref: me,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Be
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
        value: Pe
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function yn(H, J, me, Pe, Re) {
      {
        var Be, He = {}, De = null, yt = null;
        me !== void 0 && (Ve(me), De = "" + me), _t(J) && (Ve(J.key), De = "" + J.key), Je(J) && (yt = J.ref, it(J, Re));
        for (Be in J)
          oe.call(J, Be) && !ve.hasOwnProperty(Be) && (He[Be] = J[Be]);
        if (H && H.defaultProps) {
          var Qe = H.defaultProps;
          for (Be in Qe)
            He[Be] === void 0 && (He[Be] = Qe[Be]);
        }
        if (De || yt) {
          var tt = typeof H == "function" ? H.displayName || H.name || "Unknown" : H;
          De && It(He, tt), yt && jr(He, tt);
        }
        return mn(H, De, yt, Re, Pe, Ge.current, He);
      }
    }
    var er = m.ReactCurrentOwner, Bi = m.ReactDebugCurrentFrame;
    function wn(H) {
      if (H) {
        var J = H._owner, me = ye(H.type, H._source, J ? J.type : null);
        Bi.setExtraStackFrame(me);
      } else
        Bi.setExtraStackFrame(null);
    }
    var yr;
    yr = !1;
    function wr(H) {
      return typeof H == "object" && H !== null && H.$$typeof === t;
    }
    function Yr() {
      {
        if (er.current) {
          var H = D(er.current.type);
          if (H)
            return `

Check the render method of \`` + H + "`.";
        }
        return "";
      }
    }
    function Zi(H) {
      return "";
    }
    var en = {};
    function df(H) {
      {
        var J = Yr();
        if (!J) {
          var me = typeof H == "string" ? H : H.displayName || H.name;
          me && (J = `

Check the top-level render call using <` + me + ">.");
        }
        return J;
      }
    }
    function Ca(H, J) {
      {
        if (!H._store || H._store.validated || H.key != null)
          return;
        H._store.validated = !0;
        var me = df(J);
        if (en[me])
          return;
        en[me] = !0;
        var Pe = "";
        H && H._owner && H._owner !== er.current && (Pe = " It was passed a child from " + D(H._owner.type) + "."), wn(H), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Pe), wn(null);
      }
    }
    function $a(H, J) {
      {
        if (typeof H != "object")
          return;
        if (ke(H))
          for (var me = 0; me < H.length; me++) {
            var Pe = H[me];
            wr(Pe) && Ca(Pe, J);
          }
        else if (wr(H))
          H._store && (H._store.validated = !0);
        else if (H) {
          var Re = $(H);
          if (typeof Re == "function" && Re !== H.entries)
            for (var Be = Re.call(H), He; !(He = Be.next()).done; )
              wr(He.value) && Ca(He.value, J);
        }
      }
    }
    function ff(H) {
      {
        var J = H.type;
        if (J == null || typeof J == "string")
          return;
        var me;
        if (typeof J == "function")
          me = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === p))
          me = J.propTypes;
        else
          return;
        if (me) {
          var Pe = D(J);
          ae(me, H.props, "prop", Pe, H);
        } else if (J.PropTypes !== void 0 && !yr) {
          yr = !0;
          var Re = D(J);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pf(H) {
      {
        for (var J = Object.keys(H.props), me = 0; me < J.length; me++) {
          var Pe = J[me];
          if (Pe !== "children" && Pe !== "key") {
            wn(H), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), wn(null);
            break;
          }
        }
        H.ref !== null && (wn(H), P("Invalid attribute `ref` supplied to `React.Fragment`."), wn(null));
      }
    }
    var _a = {};
    function ka(H, J, me, Pe, Re, Be) {
      {
        var He = j(H);
        if (!He) {
          var De = "";
          (H === void 0 || typeof H == "object" && H !== null && Object.keys(H).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = Zi();
          yt ? De += yt : De += Yr();
          var Qe;
          H === null ? Qe = "null" : ke(H) ? Qe = "array" : H !== void 0 && H.$$typeof === t ? (Qe = "<" + (D(H.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof H, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, De);
        }
        var tt = yn(H, J, me, Re, Be);
        if (tt == null)
          return tt;
        if (He) {
          var Rt = J.children;
          if (Rt !== void 0)
            if (Pe)
              if (ke(Rt)) {
                for (var br = 0; br < Rt.length; br++)
                  $a(Rt[br], H);
                Object.freeze && Object.freeze(Rt);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $a(Rt, H);
        }
        if (oe.call(J, "key")) {
          var tr = D(H), kt = Object.keys(J).filter(function(wf) {
            return wf !== "key";
          }), Ki = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_a[tr + Ki]) {
            var yf = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ki, tr, yf, tr), _a[tr + Ki] = !0;
          }
        }
        return H === r ? pf(tt) : ff(tt), tt;
      }
    }
    function gf(H, J, me) {
      return ka(H, J, me, !0);
    }
    function hf(H, J, me) {
      return ka(H, J, me, !1);
    }
    var vf = hf, mf = gf;
    Wr.Fragment = r, Wr.jsx = vf, Wr.jsxs = mf;
  }()), Wr;
}
var Na;
function kf() {
  return Na || (Na = 1, process.env.NODE_ENV === "production" ? zo.exports = $f() : zo.exports = _f()), zo.exports;
}
var Sf = kf();
const Ef = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ef);
const Ns = 1, Ms = 2, Zl = 4, Pf = 8, Nf = 16, Mf = 1, Tf = 2, Kl = 4, Of = 8, Df = 16, jl = 1, Vf = 2, Ts = "[", Os = "[!", Ds = "]", rr = {}, gt = Symbol(), Hf = "http://www.w3.org/1999/xhtml", Lf = "http://www.w3.org/2000/svg", Af = "@attach", zf = !1;
var xo = Array.isArray, If = Array.prototype.indexOf, Vs = Array.from, ti = Object.keys, ni = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, Yl = Object.getOwnPropertyDescriptors, Fl = Object.prototype, Rf = Array.prototype, Ci = Object.getPrototypeOf, Ma = Object.isExtensible;
function Xr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function qf(e) {
  return e();
}
function ri(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function wt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Co(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Lt = 2, Hs = 4, $o = 8, Ls = 16, Vn = 32, hr = 64, As = 128, Vt = 256, oi = 512, At = 1024, Nn = 2048, vr = 4096, Sn = 8192, $i = 16384, Wl = 32768, Rr = 65536, Ta = 1 << 17, Bf = 1 << 18, Xl = 1 << 19, is = 1 << 20, zs = 1 << 21, sn = Symbol("$state"), Is = Symbol("legacy props"), Zf = Symbol(""), Ul = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Kf = 1, Rs = 3, Nr = 8;
function Gl(e) {
  return e === this.v;
}
function Jl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ql(e) {
  return !Jl(e, this.v);
}
function jf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ff(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Uf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let qr = !1, ep = !1;
function tp() {
  qr = !0;
}
const np = [];
function eu(e, t = !1) {
  return Yo(e, /* @__PURE__ */ new Map(), "", np);
}
function Yo(e, t, n, r, o = null) {
  if (typeof e == "object" && e !== null) {
    var i = t.get(e);
    if (i !== void 0) return i;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (xo(e)) {
      var s = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, s), o !== null && t.set(o, s);
      for (var a = 0; a < e.length; a += 1) {
        var l = e[a];
        a in e && (s[a] = Yo(l, t, n, r));
      }
      return s;
    }
    if (Ci(e) === Fl) {
      s = {}, t.set(e, s), o !== null && t.set(o, s);
      for (var u in e)
        s[u] = Yo(e[u], t, n, r);
      return s;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function")
      return Yo(
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
function qs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Xe = null;
function Oa(e) {
  Xe = e;
}
function Mn(e) {
  return (
    /** @type {T} */
    tu().get(e)
  );
}
function Mr(e, t) {
  return tu().set(e, t), t;
}
function de(e, t = !1, n) {
  Xe = {
    p: Xe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, qr && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: lr(!1)
  });
}
function fe(e) {
  var t = (
    /** @type {ComponentContext} */
    Xe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      pu(r);
  }
  return e !== void 0 && (t.x = e), Xe = t.p, e ?? /** @type {T} */
  {};
}
function _i() {
  return !qr || Xe !== null && Xe.l === null;
}
function tu(e) {
  return Xe === null && qs(), Xe.c ??= new Map(rp(Xe) || void 0);
}
function rp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function Zt(e) {
  if (typeof e != "object" || e === null || sn in e)
    return e;
  const t = Ci(e);
  if (t !== Fl && t !== Rf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = xo(e), o = /* @__PURE__ */ Te(0), i = sr, s = (a) => {
    if (sr === i)
      return a();
    var l = Ze, u = sr;
    Kn(null), La(i);
    var d = a();
    return Kn(l), La(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Gf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Te(u.value);
          return n.set(l, p), p;
        }) : Y(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Te(gt));
            n.set(l, f), Fo(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && Y(d, p);
          }
          Y(u, gt), Fo(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === sn)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || kn(a, l)?.writable) && (d = s(() => {
          var g = Zt(p ? a[l] : gt), h = /* @__PURE__ */ Te(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === gt ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var p = n.get(l), f = p?.v;
          if (p !== void 0 && f !== gt)
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
        if (l === sn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== gt || Reflect.has(a, l);
        if (u !== void 0 || Ae !== null && (!d || kn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Zt(a[l]) : gt, g = /* @__PURE__ */ Te(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === gt)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = u; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? Y(h, gt) : g in a && (h = s(() => /* @__PURE__ */ Te(gt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || kn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Te(void 0)), Y(p, Zt(u)), n.set(l, p));
        else {
          f = p.v !== gt;
          var v = s(() => Zt(u));
          Y(p, v);
        }
        var $ = Reflect.getOwnPropertyDescriptor(a, l);
        if ($?.set && $.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var m = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= m.v && Y(m, P + 1);
          }
          Fo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== gt;
        });
        for (var [u, d] of n)
          d.v !== gt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Jf();
      }
    }
  );
}
function Da(e) {
  try {
    if (e !== null && typeof e == "object" && sn in e)
      return e[sn];
  } catch {
  }
  return e;
}
function op(e, t) {
  return Object.is(Da(e), Da(t));
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  var t = Lt | Nn, n = Ze !== null && (Ze.f & Lt) !== 0 ? (
    /** @type {Derived} */
    Ze
  ) : null;
  return Ae === null || n !== null && (n.f & Vt) !== 0 ? t |= Vt : Ae.f |= Xl, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: Gl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gt
    ),
    wv: 0,
    parent: n ?? Ae,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function E(e) {
  const t = /* @__PURE__ */ Br(e);
  return _u(t), t;
}
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  const t = /* @__PURE__ */ Br(e);
  return t.equals = Ql, t;
}
function nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Mt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ip(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Lt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Zs(e) {
  var t, n = Ae;
  jn(ip(e));
  try {
    nu(e), t = Eu(e);
  } finally {
    jn(n);
  }
  return t;
}
function ru(e) {
  var t = Zs(e);
  if (e.equals(t) || (e.v = t, e.wv = ku()), !Zn) {
    var n = (Rn || (e.f & Vt) !== 0) && e.deps !== null ? vr : At;
    dn(e, n);
  }
}
const or = /* @__PURE__ */ new Map();
function lr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  const n = lr(e);
  return _u(n), n;
}
// @__NO_SIDE_EFFECTS__
function ou(e, t = !1, n = !0) {
  const r = lr(e);
  return t || (r.equals = Ql), qr && n && Xe !== null && Xe.l !== null && (Xe.l.s ??= []).push(r), r;
}
function Y(e, t, n = !1) {
  Ze !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ft || (Ze.f & Ta) !== 0) && _i() && (Ze.f & (Lt | Ls | Ta)) !== 0 && !En?.includes(e) && Qf();
  let r = n ? Zt(t) : t;
  return ss(e, r);
}
function ss(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Zn ? or.set(e, t) : or.set(e, n), e.v = t, (e.f & Lt) !== 0 && ((e.f & Nn) !== 0 && Zs(
      /** @type {Derived} */
      e
    ), dn(e, (e.f & Vt) === 0 ? At : vr)), e.wv = ku(), iu(e, Nn), _i() && Ae !== null && (Ae.f & At) !== 0 && (Ae.f & (Vn | hr)) === 0 && (qt === null ? gp([e]) : qt.push(e));
  }
  return t;
}
function Va(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Y(e, n), r;
}
function Fo(e) {
  Y(e, e.v + 1);
}
function iu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = _i(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & Nn) === 0 && (!r && s === Ae || (dn(s, t), (a & (At | Vt)) !== 0 && ((a & Lt) !== 0 ? iu(
        /** @type {Derived} */
        s,
        vr
      ) : Si(
        /** @type {Effect} */
        s
      ))));
    }
}
function _o(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function sp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Se = !1;
function Dt(e) {
  Se = e;
}
let Oe;
function vt(e) {
  if (e === null)
    throw _o(), rr;
  return Oe = e;
}
function Tn() {
  return vt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ gn(Oe)
  );
}
function I(e) {
  if (Se) {
    if (/* @__PURE__ */ gn(Oe) !== null)
      throw _o(), rr;
    Oe = e;
  }
}
function Ce(e = 1) {
  if (Se) {
    for (var t = e, n = Oe; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(n);
    Oe = n;
  }
}
function as() {
  for (var e = 0, t = Oe; ; ) {
    if (t.nodeType === Nr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ds) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ts || n === Os) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(t)
    );
    t.remove(), t = r;
  }
}
function su(e) {
  if (!e || e.nodeType !== Nr)
    throw _o(), rr;
  return (
    /** @type {Comment} */
    e.data
  );
}
var St, au, lu, uu;
function ls() {
  if (St === void 0) {
    St = window, au = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    lu = kn(t, "firstChild").get, uu = kn(t, "nextSibling").get, Ma(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ma(n) && (n.__t = void 0);
  }
}
function On(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return lu.call(e);
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return uu.call(e);
}
function R(e, t) {
  if (!Se)
    return /* @__PURE__ */ st(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ st(Oe)
  );
  if (n === null)
    n = Oe.appendChild(On());
  else if (t && n.nodeType !== Rs) {
    var r = On();
    return n?.before(r), vt(r), r;
  }
  return vt(n), n;
}
function ue(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ st(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ gn(n) : n;
  }
  return Oe;
}
function z(e, t = 1, n = !1) {
  let r = Se ? Oe : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ gn(r);
  if (!Se)
    return r;
  if (n && r?.nodeType !== Rs) {
    var i = On();
    return r === null ? o?.after(i) : r.before(i), vt(i), i;
  }
  return vt(r), /** @type {TemplateNode} */
  r;
}
function Ks(e) {
  e.textContent = "";
}
function cu(e) {
  Ae === null && Ze === null && Ff(), Ze !== null && (Ze.f & Vt) !== 0 && Ae === null && Yf(), Zn && jf();
}
function ap(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Hn(e, t, n, r = !0) {
  var o = Ae, i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Nn,
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
      Fs(i), i.f |= Wl;
    } catch (l) {
      throw Mt(i), l;
    }
  else t !== null && Si(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Xl | As)) === 0;
  if (!s && r && (o !== null && ap(i, o), Ze !== null && (Ze.f & Lt) !== 0)) {
    var a = (
      /** @type {Derived} */
      Ze
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function du() {
  return Ze !== null && !Ft;
}
function fu(e) {
  const t = Hn($o, null, !1);
  return dn(t, At), t.teardown = e, t;
}
function ot(e) {
  if (cu(), !Ze && Ae && (Ae.f & Vn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Xe
    );
    (t.e ??= []).push(e);
  } else
    return pu(e);
}
function pu(e) {
  return Hn(Hs | zs, e, !1);
}
function gu(e) {
  return cu(), Hn($o | zs, e, !0);
}
function js(e) {
  const t = Hn(hr, e, !0);
  return () => {
    Mt(t);
  };
}
function lp(e) {
  const t = Hn(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tr(t, () => {
      Mt(t), r(void 0);
    }) : (Mt(t), r(void 0));
  });
}
function ko(e) {
  return Hn(Hs, e, !1);
}
function So(e) {
  return Hn($o, e, !0);
}
function Ne(e, t = [], n = Br) {
  const r = t.map(n);
  return Xn(() => e(...r.map(c)));
}
function Xn(e, t = 0) {
  var n = Hn($o | Ls | t, e, !0);
  return n;
}
function cn(e, t = !0) {
  return Hn($o | Vn, e, !0, t);
}
function hu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Zn, r = Ze;
    Ha(!0), Kn(null);
    try {
      t.call(null);
    } finally {
      Ha(n), Kn(r);
    }
  }
}
function vu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(Ul);
    var r = n.next;
    (n.f & hr) !== 0 ? n.parent = null : Mt(n, t), n = r;
  }
}
function up(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Vn) === 0 && Mt(t), t = n;
  }
}
function Mt(e, t = !0) {
  var n = !1;
  (t || (e.f & Bf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (mu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), vu(e, t && !n), si(e, 0), dn(e, $i);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  hu(e);
  var o = e.parent;
  o !== null && o.first !== null && yu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function mu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(e)
    );
    e.remove(), e = n;
  }
}
function yu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Tr(e, t) {
  var n = [];
  Ys(e, n, !0), wu(n, () => {
    Mt(e), t && t();
  });
}
function wu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ys(e, t, n) {
  if ((e.f & Sn) === 0) {
    if (e.f ^= Sn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rr) !== 0 || (r.f & Vn) !== 0;
      Ys(r, t, i ? n : !1), r = o;
    }
  }
}
function oo(e) {
  bu(e, !0);
}
function bu(e, t) {
  if ((e.f & Sn) !== 0) {
    e.f ^= Sn;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & Vn) !== 0;
      bu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const cp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let io = [], so = [];
function xu() {
  var e = io;
  io = [], ri(e);
}
function Cu() {
  var e = so;
  so = [], ri(e);
}
function Eo(e) {
  io.length === 0 && queueMicrotask(xu), io.push(e);
}
function dp(e) {
  so.length === 0 && cp(Cu), so.push(e);
}
function fp() {
  io.length > 0 && xu(), so.length > 0 && Cu();
}
function pp(e) {
  var t = (
    /** @type {Effect} */
    Ae
  );
  if ((t.f & Wl) === 0) {
    if ((t.f & As) === 0)
      throw e;
    t.fn(e);
  } else
    $u(e, t);
}
function $u(e, t) {
  for (; t !== null; ) {
    if ((t.f & As) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let ao = !1, lo = null, ir = !1, Zn = !1;
function Ha(e) {
  Zn = e;
}
let no = [], Ze = null, Ft = !1;
function Kn(e) {
  Ze = e;
}
let Ae = null;
function jn(e) {
  Ae = e;
}
let En = null;
function _u(e) {
  Ze !== null && Ze.f & is && (En === null ? En = [e] : En.push(e));
}
let bt = null, Ot = 0, qt = null;
function gp(e) {
  qt = e;
}
let ii = 1, uo = 0, sr = uo;
function La(e) {
  sr = e;
}
let Rn = !1;
function ku() {
  return ++ii;
}
function ki(e) {
  var t = e.f;
  if ((t & Nn) !== 0)
    return !0;
  if ((t & vr) !== 0) {
    var n = e.deps, r = (t & Vt) !== 0;
    if (n !== null) {
      var o, i, s = (t & oi) !== 0, a = r && Ae !== null && !Rn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= oi), a && d !== null && (d.f & Vt) === 0 && (u.f ^= Vt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], ki(
          /** @type {Derived} */
          i
        ) && ru(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Ae !== null && !Rn) && dn(e, At);
  }
  return !1;
}
function Su(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !En?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Lt) !== 0 ? Su(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? dn(i, Nn) : (i.f & At) !== 0 && dn(i, vr), Si(
        /** @type {Effect} */
        i
      ));
    }
}
function Eu(e) {
  var t = bt, n = Ot, r = qt, o = Ze, i = Rn, s = En, a = Xe, l = Ft, u = sr, d = e.f;
  bt = /** @type {null | Value[]} */
  null, Ot = 0, qt = null, Rn = (d & Vt) !== 0 && (Ft || !ir || Ze === null), Ze = (d & (Vn | hr)) === 0 ? e : null, En = null, Oa(e.ctx), Ft = !1, sr = ++uo, e.f |= is, e.ac !== null && (e.ac.abort(Ul), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (bt !== null) {
      var g;
      if (si(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + bt.length, g = 0; g < bt.length; g++)
          f[Ot + g] = bt[g];
      else
        e.deps = f = bt;
      if (!Rn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Lt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Ot; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ot < f.length && (si(e, Ot), f.length = Ot);
    if (_i() && qt !== null && !Ft && f !== null && (e.f & (Lt | vr | Nn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      qt.length; g++)
        Su(
          qt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (uo++, qt !== null && (r === null ? r = qt : r.push(.../** @type {Source[]} */
    qt))), p;
  } catch (h) {
    pp(h);
  } finally {
    bt = t, Ot = n, qt = r, Ze = o, Rn = i, En = s, Oa(a), Ft = l, sr = u, e.f ^= is;
  }
}
function hp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = If.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Lt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (bt === null || !bt.includes(t)) && (dn(t, vr), (t.f & (Vt | oi)) === 0 && (t.f ^= oi), nu(
    /** @type {Derived} **/
    t
  ), si(
    /** @type {Derived} **/
    t,
    0
  ));
}
function si(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      hp(e, n[r]);
}
function Fs(e) {
  var t = e.f;
  if ((t & $i) === 0) {
    dn(e, At);
    var n = Ae, r = ir;
    Ae = e, ir = !0;
    try {
      (t & Ls) !== 0 ? up(e) : vu(e), hu(e);
      var o = Eu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ii;
      var i;
      zf && ep && (e.f & Nn) !== 0 && e.deps;
    } finally {
      ir = r, Ae = n;
    }
  }
}
function vp() {
  try {
    Wf();
  } catch (e) {
    if (lo !== null)
      $u(e, lo);
    else
      throw e;
  }
}
function Pu() {
  var e = ir;
  try {
    var t = 0;
    for (ir = !0; no.length > 0; ) {
      t++ > 1e3 && vp();
      var n = no, r = n.length;
      no = [];
      for (var o = 0; o < r; o++) {
        var i = yp(n[o]);
        mp(i);
      }
      or.clear();
    }
  } finally {
    ao = !1, ir = e, lo = null;
  }
}
function mp(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & ($i | Sn)) === 0 && ki(r)) {
        var o = ii;
        if (Fs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? yu(r) : r.fn = null), ii > o && (r.f & zs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      Si(e[n]);
  }
}
function Si(e) {
  ao || (ao = !0, queueMicrotask(Pu));
  for (var t = lo = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | Vn)) !== 0) {
      if ((n & At) === 0) return;
      t.f ^= At;
    }
  }
  no.push(t);
}
function yp(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Vn | hr)) !== 0, i = o && (r & At) !== 0;
    if (!i && (r & Sn) === 0) {
      (r & Hs) !== 0 ? t.push(n) : o ? n.f ^= At : ki(n) && Fs(n);
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function y(e) {
  for (var t; ; ) {
    if (fp(), no.length === 0)
      return ao = !1, lo = null, /** @type {T} */
      t;
    ao = !0, Pu();
  }
}
async function wp() {
  await Promise.resolve(), y();
}
function c(e) {
  var t = e.f, n = (t & Lt) !== 0;
  if (Ze !== null && !Ft) {
    if (!En?.includes(e)) {
      var r = Ze.deps;
      e.rv < uo && (e.rv = uo, bt === null && r !== null && r[Ot] === e ? Ot++ : bt === null ? bt = [e] : (!Rn || !bt.includes(e)) && bt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Vt) === 0 && (o.f ^= Vt);
  }
  if (n && !Zn && (o = /** @type {Derived} */
  e, ki(o) && ru(o)), Zn) {
    if (or.has(e))
      return or.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & At) !== 0 || Nu(o)) && (s = Zs(o)), or.set(o, s), s;
    }
  }
  return e.v;
}
function Nu(e) {
  if (e.v === gt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (or.has(t) || (t.f & Lt) !== 0 && Nu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function dt(e) {
  var t = Ft;
  try {
    return Ft = !0, e();
  } finally {
    Ft = t;
  }
}
const bp = -7169;
function dn(e, t) {
  e.f = e.f & bp | t;
}
function xp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ws(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (sn in e)
      us(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && sn in n && us(n);
      }
  }
}
function us(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        us(e[r], t);
      } catch {
      }
    const n = Ci(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Yl(n);
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
function Cp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Eo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function $p(e) {
  Se && /* @__PURE__ */ st(e) !== null && Ks(e);
}
let Aa = !1;
function _p() {
  Aa || (Aa = !0, document.addEventListener(
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
function kp(e) {
  var t = Ze, n = Ae;
  Kn(null), jn(null);
  try {
    return e();
  } finally {
    Kn(t), jn(n);
  }
}
const Mu = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set();
function Xs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Jr.call(t, i), !i.cancelBubble)
      return kp(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Eo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ds(e, t, n, r = {}) {
  var o = Xs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function za(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Xs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && fu(() => {
    t.removeEventListener(e, s, i);
  });
}
function Un(e) {
  for (var t = 0; t < e.length; t++)
    Mu.add(e[t]);
  for (var n of cs)
    n(e);
}
function Jr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, a = e.__root;
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
    ni(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ze, p = Ae;
    Kn(null), jn(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var v = i["__" + r];
          if (v != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (xo(v)) {
              var [$, ...m] = v;
              $.apply(i, [e, ...m]);
            } else
              v.call(i, e);
        } catch (P) {
          f ? g.push(P) : f = P;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let P of g)
          queueMicrotask(() => {
            throw P;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Kn(d), jn(p);
    }
  }
}
function Us(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Nt(e, t) {
  var n = (
    /** @type {Effect} */
    Ae
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & jl) !== 0, r = (t & Vf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Nt(Oe, null), Oe;
    o === void 0 && (o = Us(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ st(o)));
    var s = (
      /** @type {TemplateNode} */
      r || au ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Nt(a, l);
    } else
      Nt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Sp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Se)
      return Nt(Oe, null), Oe;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Us(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ st(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ st(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ st(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ st(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Nt(d, p);
    } else
      Nt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ Sp(e, t, "svg");
}
function Me(e = "") {
  if (!Se) {
    var t = On(e + "");
    return Nt(t, t), t;
  }
  var n = Oe;
  return n.nodeType !== Rs && (n.before(n = On()), vt(n)), Nt(n, n), n;
}
function Ie() {
  if (Se)
    return Nt(Oe, null), Oe;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Nt(t, n), e;
}
function V(e, t) {
  if (Se) {
    Ae.nodes_end = Oe, Tn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ep(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Pp = [
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
function Np(e) {
  return Pp.includes(e);
}
const Mp = {
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
function Tp(e) {
  return e = e.toLowerCase(), Mp[e] ?? e;
}
const Op = ["touchstart", "touchmove"];
function Dp(e) {
  return Op.includes(e);
}
const Vp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Hp(e) {
  return Vp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Fe(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Tu(e, t) {
  return Ou(e, t);
}
function Lp(e, t) {
  ls(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = Oe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ st(n)
    ); i && (i.nodeType !== Nr || /** @type {Comment} */
    i.data !== Ts); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ gn(i);
    if (!i)
      throw rr;
    Dt(!0), vt(
      /** @type {Comment} */
      i
    ), Tn();
    const s = Ou(e, { ...t, anchor: i });
    if (Oe === null || Oe.nodeType !== Nr || /** @type {Comment} */
    Oe.data !== Ds)
      throw _o(), rr;
    return Dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === rr)
      return t.recover === !1 && Xf(), ls(), Ks(n), Dt(!1), Tu(e, t);
    throw s;
  } finally {
    Dt(r), vt(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function Ou(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ls();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = Dp(g);
        t.addEventListener(g, Jr, { passive: h });
        var v = xr.get(g);
        v === void 0 ? (document.addEventListener(g, Jr, { passive: h }), xr.set(g, 1)) : xr.set(g, v + 1);
      }
    }
  };
  l(Vs(Mu)), cs.add(l);
  var u = void 0, d = lp(() => {
    var p = n ?? t.appendChild(On());
    return cn(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), Se && Nt(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, Se && (Ae.nodes_end = Oe), i && fe();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Jr);
        var g = (
          /** @type {number} */
          xr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Jr), xr.delete(f)) : xr.set(f, g);
      }
      cs.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return fs.set(u, d), u;
}
let fs = /* @__PURE__ */ new WeakMap();
function Ap(e, t) {
  const n = fs.get(e);
  return n ? (fs.delete(e), n(t)) : Promise.resolve();
}
function et(e, t, ...n) {
  var r = e, o = ft, i;
  Xn(() => {
    o !== (o = t()) && (i && (Mt(i), i = null), i = cn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), Se && (r = Oe);
}
function Gn(e) {
  Xe === null && qs(), qr && Xe.l !== null ? zp(Xe).m.push(e) : ot(() => {
    const t = dt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ei(e) {
  Xe === null && qs(), Gn(() => () => dt(e));
}
function zp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ce(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && Tn();
  var o = e, i = null, s = null, a = gt, l = n > 0 ? Rr : 0, u = !1;
  const d = (f, g = !0) => {
    u = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const $ = su(o);
        $ === Ts ? r = 0 : $ === Os ? r = 1 / 0 : (r = parseInt($.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const v = r > n;
      !!a === v && (o = as(), vt(o), Dt(!1), h = !0, r = -1);
    }
    a ? (i ? oo(i) : g && (i = cn(() => g(o))), s && Tr(s, () => {
      s = null;
    })) : (s ? oo(s) : g && (s = cn(() => g(o, [n + 1, r]))), i && Tr(i, () => {
      i = null;
    })), h && Dt(!0);
  };
  Xn(() => {
    u = !1, t(d), u || p(null, null);
  }, l), Se && (o = Oe);
}
function Ip(e, t) {
  Se && vt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ st(e)
  ), So(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Or(e, t) {
  return t;
}
function Rp(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Ys(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ks(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), zn(e, t[0].prev, t[i - 1].next);
  }
  wu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), zn(e, d.prev, d.next)), Mt(d.e, !a);
    }
  });
}
function xt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Zl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Se ? vt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ st(u)
    ) : u.appendChild(On());
  }
  Se && Tn();
  var d = null, p = !1, f = /* @__PURE__ */ Bs(() => {
    var g = n();
    return xo(g) ? g : g == null ? [] : Vs(g);
  });
  Xn(() => {
    var g = c(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let v = !1;
    if (Se) {
      var $ = su(s) === Os;
      $ !== (h === 0) && (s = as(), vt(s), Dt(!1), v = !0);
    }
    if (Se) {
      for (var m = null, P, x = 0; x < h; x++) {
        if (Oe.nodeType === Nr && /** @type {Comment} */
        Oe.data === Ds) {
          s = /** @type {Comment} */
          Oe, v = !0, Dt(!1);
          break;
        }
        var C = g[x], _ = r(C, x);
        P = Du(
          Oe,
          a,
          m,
          null,
          C,
          _,
          x,
          o,
          t,
          n
        ), a.items.set(_, P), m = P;
      }
      h > 0 && vt(as());
    }
    Se || qp(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? oo(d) : d = cn(() => i(s)) : d !== null && Tr(d, () => {
      d = null;
    })), v && Dt(!0), c(f);
  }), Se && (s = Oe);
}
function qp(e, t, n, r, o, i, s) {
  var a = (o & Pf) !== 0, l = (o & (Ns | Ms)) !== 0, u = e.length, d = t.items, p = t.first, f = p, g, h = null, v, $ = [], m = [], P, x, C, _;
  if (a)
    for (_ = 0; _ < u; _ += 1)
      P = e[_], x = i(P, _), C = d.get(x), C !== void 0 && (C.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add(C));
  for (_ = 0; _ < u; _ += 1) {
    if (P = e[_], x = i(P, _), C = d.get(x), C === void 0) {
      var T = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Du(
        T,
        t,
        h,
        h === null ? t.first : h.next,
        P,
        x,
        _,
        r,
        o,
        s
      ), d.set(x, h), $ = [], m = [], f = h.next;
      continue;
    }
    if (l && Bp(C, P, _, o), (C.e.f & Sn) !== 0 && (oo(C.e), a && (C.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete(C))), C !== f) {
      if (g !== void 0 && g.has(C)) {
        if ($.length < m.length) {
          var A = m[0], Z;
          h = A.prev;
          var F = $[0], j = $[$.length - 1];
          for (Z = 0; Z < $.length; Z += 1)
            Ia($[Z], A, n);
          for (Z = 0; Z < m.length; Z += 1)
            g.delete(m[Z]);
          zn(t, F.prev, j.next), zn(t, h, F), zn(t, j, A), f = A, h = j, _ -= 1, $ = [], m = [];
        } else
          g.delete(C), Ia(C, f, n), zn(t, C.prev, C.next), zn(t, C, h === null ? t.first : h.next), zn(t, h, C), h = C;
        continue;
      }
      for ($ = [], m = []; f !== null && f.k !== x; )
        (f.e.f & Sn) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), m.push(f), f = f.next;
      if (f === null)
        continue;
      C = f;
    }
    $.push(C), h = C, f = C.next;
  }
  if (f !== null || g !== void 0) {
    for (var N = g === void 0 ? [] : Vs(g); f !== null; )
      (f.e.f & Sn) === 0 && N.push(f), f = f.next;
    var S = N.length;
    if (S > 0) {
      var D = (o & Zl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < S; _ += 1)
          N[_].a?.measure();
        for (_ = 0; _ < S; _ += 1)
          N[_].a?.fix();
      }
      Rp(t, N, D, d);
    }
  }
  a && Eo(() => {
    if (v !== void 0)
      for (C of v)
        C.a?.apply();
  }), Ae.first = t.first && t.first.e, Ae.last = h && h.e;
}
function Bp(e, t, n, r) {
  (r & Ns) !== 0 && ss(e.v, t), (r & Ms) !== 0 ? ss(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Du(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & Ns) !== 0, p = (l & Nf) === 0, f = d ? p ? /* @__PURE__ */ ou(o, !1, !1) : lr(o) : o, g = (l & Ms) === 0 ? s : lr(s), h = {
    i: g,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = cn(() => a(e, f, g, u), Se), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Ia(e, t, n) {
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
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ gn(i)
    );
    o.before(i), i = s;
  }
}
function zn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Gs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ne(() => {
    var a = (
      /** @type {Effect} */
      Ae
    );
    if (s === (s = t() ?? "")) {
      Se && Tn();
      return;
    }
    if (a.nodes_start !== null && (mu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Se) {
        Oe.data;
        for (var l = Tn(), u = l; l !== null && (l.nodeType !== Nr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ gn(l);
        if (l === null)
          throw _o(), rr;
        Nt(Oe, u), i = vt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Us(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ st(p)), Nt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ st(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ st(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ st(p)
          );
      else
        i.before(p);
    }
  });
}
function Js(e, t, n) {
  Se && Tn();
  var r = e, o, i;
  Xn(() => {
    o !== (o = t()) && (i && (Tr(i), i = null), o && (i = cn(() => n(r, o))));
  }, Rr), Se && (r = Oe);
}
function Zp(e, t, n, r, o, i) {
  let s = Se;
  Se && Tn();
  var a, l, u = null;
  Se && Oe.nodeType === Kf && (u = /** @type {Element} */
  Oe, Tn());
  var d = (
    /** @type {TemplateNode} */
    Se ? Oe : e
  ), p;
  Xn(() => {
    const f = t() || null;
    var g = f === "svg" ? Lf : null;
    f !== a && (p && (f === null ? Tr(p, () => {
      p = null, l = null;
    }) : f === l ? oo(p) : Mt(p)), f && f !== l && (p = cn(() => {
      if (u = Se ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Nt(u, u), r) {
        Se && Hp(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ st(u) : u.appendChild(On())
        );
        Se && (h === null ? Dt(!1) : vt(h)), r(u, h);
      }
      Ae.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, Rr), s && (Dt(!0), vt(d));
}
function Ke(e, t) {
  Eo(() => {
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
function ht(e, t, n) {
  ko(() => {
    var r = dt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      So(() => {
        var s = n();
        Ws(s), o && Jl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Kp(e, t) {
  var n = void 0, r;
  Xn(() => {
    n !== (n = t()) && (r && (Mt(r), r = null), n && (r = cn(() => {
      ko(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Vu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Vu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function jp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vu(e)) && (r && (r += " "), r += t);
  return r;
}
function Ln(e) {
  return typeof e == "object" ? jp(e) : e ?? "";
}
const Ra = [...` 	
\r\f \v\uFEFF`];
function Yp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ra.includes(r[s - 1])) && (a === r.length || Ra.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function qa(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ji(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Fp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ji)), o && l.push(...Object.keys(o).map(ji));
      var u = 0, d = -1;
      const v = e.length;
      for (var p = 0; p < v; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === v - 1) {
            if (d !== -1) {
              var g = ji(e.substring(u, d).trim());
              if (!l.includes(g)) {
                f !== ";" && p++;
                var h = e.substring(u, p).trim();
                n += " " + h + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += qa(r)), o && (n += qa(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Tt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Se || s !== n || s === void 0) {
    var a = Yp(n, r, i);
    (!Se || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Yi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ct(e, t, n, r) {
  var o = e.__style;
  if (Se || o !== t) {
    var i = Fp(t, r);
    (!Se || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Yi(e, n?.[0], r[0]), Yi(e, n?.[1], r[1], "important")) : Yi(e, n, r));
  return r;
}
function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!xo(t))
      return sp();
    for (var r of e.options)
      r.selected = t.includes(Ba(r));
    return;
  }
  for (r of e.options) {
    var o = Ba(r);
    if (op(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Wp(e) {
  var t = new MutationObserver(() => {
    ps(e, e.__value);
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
  }), fu(() => {
    t.disconnect();
  });
}
function Ba(e) {
  return "__value" in e ? e.__value : e.value;
}
const In = Symbol("class"), rn = Symbol("style"), Hu = Symbol("is custom element"), Lu = Symbol("is html");
function Pn(e) {
  if (Se) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          xe(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          xe(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, dp(n), _p();
  }
}
function Wo(e, t) {
  var n = Pi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Za(e, t) {
  var n = Pi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Xp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function xe(e, t, n, r) {
  var o = Pi(e);
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Zf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Up(e, t, n, r, o = !1) {
  var i = Pi(e), s = i[Hu], a = !i[Lu];
  let l = Se && s;
  l && Dt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = Ln(n.class) : (r || n[In]) && (n.class = null), n[rn] && (n.style ??= null);
  var f = Au(e);
  for (const x in n) {
    let C = n[x];
    if (d && x === "value" && C == null) {
      e.value = e.__value = "", u[x] = C;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Tt(e, g, C, r, t?.[In], n[In]), u[x] = C, u[In] = n[In];
      continue;
    }
    if (x === "style") {
      Ct(e, C, t?.[rn], n[rn]), u[x] = C, u[rn] = n[rn];
      continue;
    }
    var h = u[x];
    if (!(C === h && !(C === void 0 && e.hasAttribute(x)))) {
      u[x] = C;
      var v = x[0] + x[1];
      if (v !== "$$")
        if (v === "on") {
          const _ = {}, T = "$$" + x;
          let A = x.slice(2);
          var $ = Np(A);
          if (Ep(A) && (A = A.slice(0, -7), _.capture = !0), !$ && h) {
            if (C != null) continue;
            e.removeEventListener(A, u[T], _), u[T] = null;
          }
          if (C != null)
            if ($)
              e[`__${A}`] = C, Un([A]);
            else {
              let Z = function(F) {
                u[x].call(this, F);
              };
              u[T] = Xs(A, e, Z, _);
            }
          else $ && (e[`__${A}`] = void 0);
        } else if (x === "style")
          xe(e, x, C);
        else if (x === "autofocus")
          Cp(
            /** @type {HTMLElement} */
            e,
            !!C
          );
        else if (!s && (x === "__value" || x === "value" && C != null))
          e.value = e.__value = C;
        else if (x === "selected" && d)
          Xp(
            /** @type {HTMLOptionElement} */
            e,
            C
          );
        else {
          var m = x;
          a || (m = Tp(m));
          var P = m === "defaultValue" || m === "defaultChecked";
          if (C == null && !s && !P)
            if (i[x] = null, m === "value" || m === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const T = t === void 0;
              if (m === "value") {
                let A = _.defaultValue;
                _.removeAttribute(m), _.defaultValue = A, _.value = _.__value = T ? A : null;
              } else {
                let A = _.defaultChecked;
                _.removeAttribute(m), _.defaultChecked = A, _.checked = T ? A : !1;
              }
            } else
              e.removeAttribute(x);
          else P || f.includes(m) && (s || typeof C != "string") ? e[m] = C : typeof C != "function" && xe(e, m, C);
        }
    }
  }
  return l && Dt(!0), u;
}
function at(e, t, n = [], r, o = !1, i = Br) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if (Xn(() => {
    var f = t(...s.map(c)), g = Up(e, a, f, r, o);
    d && u && "value" in f && ps(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let v of Object.getOwnPropertySymbols(l))
      f[v] || Mt(l[v]);
    for (let v of Object.getOwnPropertySymbols(f)) {
      var h = f[v];
      v.description === Af && (!a || h !== a[v]) && (l[v] && Mt(l[v]), l[v] = cn(() => Kp(e, () => h))), g[v] = h;
    }
    a = g;
  }), u) {
    var p = (
      /** @type {HTMLSelectElement} */
      e
    );
    ko(() => {
      ps(
        p,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), Wp(p);
    });
  }
  d = !0;
}
function Pi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Hu]: e.nodeName.includes("-"),
      [Lu]: e.namespaceURI === Hf
    }
  );
}
var Ka = /* @__PURE__ */ new Map();
function Au(e) {
  var t = Ka.get(e.nodeName);
  if (t) return t;
  Ka.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Yl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ci(r);
  }
  return t;
}
class Qs {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#n = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #r() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          Qs.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Gp = /* @__PURE__ */ new Qs({
  box: "border-box"
});
function ja(e, t, n) {
  var r = Gp.observe(e, () => n(e[t]));
  ko(() => (dt(() => n(e[t])), r));
}
function Ya(e, t) {
  return e === t || e?.[sn] === t;
}
function Kt(e = {}, t, n, r) {
  return ko(() => {
    var o, i;
    return So(() => {
      o = i, i = [], dt(() => {
        e !== n(...i) && (t(e, ...i), o && Ya(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Eo(() => {
        i && Ya(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function zu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => Ws(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Br(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && gu(() => {
    Fa(t, r), ri(n.b);
  }), ot(() => {
    const o = dt(() => n.m.map(qf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && ot(() => {
    Fa(t, r), ri(n.a);
  });
}
function Fa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Io = !1;
function Jp(e) {
  var t = Io;
  try {
    return Io = !1, [e(), Io];
  } finally {
    Io = t;
  }
}
const Qp = {
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
function je(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Qp
  );
}
const eg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Ae;
      try {
        jn(e.parent_effect), e.special[t] = w(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Kl
        );
      } finally {
        jn(r);
      }
    }
    return e.special[t](n), Va(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Va(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Wa(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: lr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Ae
      )
    },
    eg
  );
}
const tg = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Xr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Xr(o) && (o = o());
      const i = kn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Xr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = kn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === sn || t === Is) return !1;
    for (let n of e.props)
      if (Xr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Xr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function We(...e) {
  return new Proxy({ props: e }, tg);
}
function w(e, t, n, r) {
  var o = !qr || (n & Tf) !== 0, i = (n & Of) !== 0, s = (n & Df) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? dt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = sn in e || Is in e;
    d = kn(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = Jp(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && Uf(), d(f)));
  var h;
  if (o ? h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? u() : (l = !0, x);
  } : h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & Kl) === 0)
    return h;
  if (d) {
    var v = e.$$legacy;
    return function(x, C) {
      return arguments.length > 0 ? ((!o || !C || v || g) && d(C ? h() : x), x) : h();
    };
  }
  var $ = !1, m = ((n & Mf) !== 0 ? Br : Bs)(() => ($ = !1, h()));
  i && c(m);
  var P = (
    /** @type {Effect} */
    Ae
  );
  return function(x, C) {
    if (arguments.length > 0) {
      const _ = C ? c(m) : o && i ? Zt(x) : x;
      return Y(m, _), $ = !0, a !== void 0 && (a = _), x;
    }
    return Zn && $ || (P.f & $i) !== 0 ? m.v : c(m);
  };
}
function ng(e) {
  return new rg(e);
}
class rg {
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
      var a = /* @__PURE__ */ ou(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Is ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Y(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Lp : Tu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && y(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ni(this, i, {
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
      Ap(this.#e);
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
let Iu;
typeof HTMLElement == "function" && (Iu = class extends HTMLElement {
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
          r !== "default" && (i.name = r), V(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = og(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Xo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ng({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = js(() => {
        So(() => {
          this.$$r = !0;
          for (const r of ti(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Xo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Xo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return ti(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Xo(e, t, n, r) {
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
function og(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, n, r, o, i) {
  let s = class extends Iu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ti(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ti(t).forEach((a) => {
    ni(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Xo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = kn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ni(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var ig = { value: () => {
} };
function Ni() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Uo(n);
}
function Uo(e) {
  this._ = e;
}
function sg(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Uo.prototype = Ni.prototype = {
  constructor: Uo,
  on: function(e, t) {
    var n = this._, r = sg(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = ag(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Xa(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Xa(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Uo(e);
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
function ag(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Xa(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = ig, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var gs = "http://www.w3.org/1999/xhtml";
const Ua = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: gs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ua.hasOwnProperty(t) ? { space: Ua[t], local: e } : e;
}
function lg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === gs && t.documentElement.namespaceURI === gs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function ug(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ru(e) {
  var t = Mi(e);
  return (t.local ? ug : lg)(t);
}
function cg() {
}
function ea(e) {
  return e == null ? cg : function() {
    return this.querySelector(e);
  };
}
function dg(e) {
  typeof e != "function" && (e = ea(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new zt(r, this._parents);
}
function fg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function pg() {
  return [];
}
function qu(e) {
  return e == null ? pg : function() {
    return this.querySelectorAll(e);
  };
}
function gg(e) {
  return function() {
    return fg(e.apply(this, arguments));
  };
}
function hg(e) {
  typeof e == "function" ? e = gg(e) : e = qu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new zt(r, o);
}
function Bu(e) {
  return function() {
    return this.matches(e);
  };
}
function Zu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var vg = Array.prototype.find;
function mg(e) {
  return function() {
    return vg.call(this.children, e);
  };
}
function yg() {
  return this.firstElementChild;
}
function wg(e) {
  return this.select(e == null ? yg : mg(typeof e == "function" ? e : Zu(e)));
}
var bg = Array.prototype.filter;
function xg() {
  return Array.from(this.children);
}
function Cg(e) {
  return function() {
    return bg.call(this.children, e);
  };
}
function $g(e) {
  return this.selectAll(e == null ? xg : Cg(typeof e == "function" ? e : Zu(e)));
}
function _g(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new zt(r, this._parents);
}
function Ku(e) {
  return new Array(e.length);
}
function kg() {
  return new zt(this._enter || this._groups.map(Ku), this._parents);
}
function ai(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ai.prototype = {
  constructor: ai,
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
function Sg(e) {
  return function() {
    return e;
  };
}
function Eg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ai(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Pg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new ai(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Ng(e) {
  return e.__data__;
}
function Mg(e, t) {
  if (!arguments.length) return Array.from(this, Ng);
  var n = t ? Pg : Eg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Sg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = Tg(e.call(d, d && d.__data__, u, r)), h = g.length, v = a[u] = new Array(h), $ = s[u] = new Array(h), m = l[u] = new Array(f);
    n(d, p, v, $, m, g, t);
    for (var P = 0, x = 0, C, _; P < h; ++P)
      if (C = v[P]) {
        for (P >= x && (x = P + 1); !(_ = $[x]) && ++x < h; ) ;
        C._next = _ || null;
      }
  }
  return s = new zt(s, r), s._enter = a, s._exit = l, s;
}
function Tg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Og() {
  return new zt(this._exit || this._groups.map(Ku), this._parents);
}
function Dg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Vg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new zt(a, this._parents);
}
function Hg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Lg(e) {
  e || (e = Ag);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new zt(o, this._parents).order();
}
function Ag(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function zg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Ig() {
  return Array.from(this);
}
function Rg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function qg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Bg() {
  return !this.node();
}
function Zg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Kg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function jg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Yg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Fg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Wg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Xg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ug(e, t) {
  var n = Mi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? jg : Kg : typeof t == "function" ? n.local ? Xg : Wg : n.local ? Fg : Yg)(n, t));
}
function ju(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Gg(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Jg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Qg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function eh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Gg : typeof t == "function" ? Qg : Jg)(e, t, n ?? "")) : Dr(this.node(), e);
}
function Dr(e, t) {
  return e.style.getPropertyValue(t) || ju(e).getComputedStyle(e, null).getPropertyValue(t);
}
function th(e) {
  return function() {
    delete this[e];
  };
}
function nh(e, t) {
  return function() {
    this[e] = t;
  };
}
function rh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function oh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? th : typeof t == "function" ? rh : nh)(e, t)) : this.node()[e];
}
function Yu(e) {
  return e.trim().split(/^|\s+/);
}
function ta(e) {
  return e.classList || new Fu(e);
}
function Fu(e) {
  this._node = e, this._names = Yu(e.getAttribute("class") || "");
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
function Wu(e, t) {
  for (var n = ta(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Xu(e, t) {
  for (var n = ta(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function ih(e) {
  return function() {
    Wu(this, e);
  };
}
function sh(e) {
  return function() {
    Xu(this, e);
  };
}
function ah(e, t) {
  return function() {
    (t.apply(this, arguments) ? Wu : Xu)(this, e);
  };
}
function lh(e, t) {
  var n = Yu(e + "");
  if (arguments.length < 2) {
    for (var r = ta(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ah : t ? ih : sh)(n, t));
}
function uh() {
  this.textContent = "";
}
function ch(e) {
  return function() {
    this.textContent = e;
  };
}
function dh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function fh(e) {
  return arguments.length ? this.each(e == null ? uh : (typeof e == "function" ? dh : ch)(e)) : this.node().textContent;
}
function ph() {
  this.innerHTML = "";
}
function gh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function hh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function vh(e) {
  return arguments.length ? this.each(e == null ? ph : (typeof e == "function" ? hh : gh)(e)) : this.node().innerHTML;
}
function mh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function yh() {
  return this.each(mh);
}
function wh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function bh() {
  return this.each(wh);
}
function xh(e) {
  var t = typeof e == "function" ? e : Ru(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Ch() {
  return null;
}
function $h(e, t) {
  var n = typeof e == "function" ? e : Ru(e), r = t == null ? Ch : typeof t == "function" ? t : ea(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function _h() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function kh() {
  return this.each(_h);
}
function Sh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Eh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ph(e) {
  return this.select(e ? Eh : Sh);
}
function Nh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Mh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Th(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Oh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Dh(e, t, n) {
  return function() {
    var r = this.__on, o, i = Mh(t);
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
function Vh(e, t, n) {
  var r = Th(e + ""), o, i = r.length, s;
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
  for (a = t ? Dh : Oh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Uu(e, t, n) {
  var r = ju(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hh(e, t) {
  return function() {
    return Uu(this, e, t);
  };
}
function Lh(e, t) {
  return function() {
    return Uu(this, e, t.apply(this, arguments));
  };
}
function Ah(e, t) {
  return this.each((typeof t == "function" ? Lh : Hh)(e, t));
}
function* zh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Gu = [null];
function zt(e, t) {
  this._groups = e, this._parents = t;
}
function Po() {
  return new zt([[document.documentElement]], Gu);
}
function Ih() {
  return this;
}
zt.prototype = Po.prototype = {
  constructor: zt,
  select: dg,
  selectAll: hg,
  selectChild: wg,
  selectChildren: $g,
  filter: _g,
  data: Mg,
  enter: kg,
  exit: Og,
  join: Dg,
  merge: Vg,
  selection: Ih,
  order: Hg,
  sort: Lg,
  call: zg,
  nodes: Ig,
  node: Rg,
  size: qg,
  empty: Bg,
  each: Zg,
  attr: Ug,
  style: eh,
  property: oh,
  classed: lh,
  text: fh,
  html: vh,
  raise: yh,
  lower: bh,
  append: xh,
  insert: $h,
  remove: kh,
  clone: Ph,
  datum: Nh,
  on: Vh,
  dispatch: Ah,
  [Symbol.iterator]: zh
};
function Bt(e) {
  return typeof e == "string" ? new zt([[document.querySelector(e)]], [document.documentElement]) : new zt([[e]], Gu);
}
function Rh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Yt(e, t) {
  if (e = Rh(e), t === void 0 && (t = e.currentTarget), t) {
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
const qh = { passive: !1 }, co = { capture: !0, passive: !1 };
function Fi(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ju(e) {
  var t = e.document.documentElement, n = Bt(e).on("dragstart.drag", kr, co);
  "onselectstart" in t ? n.on("selectstart.drag", kr, co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Qu(e, t) {
  var n = e.document.documentElement, r = Bt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ro = (e) => () => e;
function hs(e, {
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
hs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Bh(e) {
  return !e.ctrlKey && !e.button;
}
function Zh() {
  return this.parentNode;
}
function Kh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function jh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Yh() {
  var e = Bh, t = Zh, n = Kh, r = jh, o = {}, i = Ni("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(C) {
    C.on("mousedown.drag", g).filter(r).on("touchstart.drag", $).on("touchmove.drag", m, qh).on("touchend.drag touchcancel.drag", P).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(C, _) {
    if (!(d || !e.call(this, C, _))) {
      var T = x(this, t.call(this, C, _), C, _, "mouse");
      T && (Bt(C.view).on("mousemove.drag", h, co).on("mouseup.drag", v, co), Ju(C.view), Fi(C), u = !1, a = C.clientX, l = C.clientY, T("start", C));
    }
  }
  function h(C) {
    if (kr(C), !u) {
      var _ = C.clientX - a, T = C.clientY - l;
      u = _ * _ + T * T > p;
    }
    o.mouse("drag", C);
  }
  function v(C) {
    Bt(C.view).on("mousemove.drag mouseup.drag", null), Qu(C.view, u), kr(C), o.mouse("end", C);
  }
  function $(C, _) {
    if (e.call(this, C, _)) {
      var T = C.changedTouches, A = t.call(this, C, _), Z = T.length, F, j;
      for (F = 0; F < Z; ++F)
        (j = x(this, A, C, _, T[F].identifier, T[F])) && (Fi(C), j("start", C, T[F]));
    }
  }
  function m(C) {
    var _ = C.changedTouches, T = _.length, A, Z;
    for (A = 0; A < T; ++A)
      (Z = o[_[A].identifier]) && (kr(C), Z("drag", C, _[A]));
  }
  function P(C) {
    var _ = C.changedTouches, T = _.length, A, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < T; ++A)
      (Z = o[_[A].identifier]) && (Fi(C), Z("end", C, _[A]));
  }
  function x(C, _, T, A, Z, F) {
    var j = i.copy(), N = Yt(F || T, _), S, D, b;
    if ((b = n.call(C, new hs("beforestart", {
      sourceEvent: T,
      target: f,
      identifier: Z,
      active: s,
      x: N[0],
      y: N[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), A)) != null)
      return S = b.x - N[0] || 0, D = b.y - N[1] || 0, function k(M, L, q) {
        var O = N, B;
        switch (M) {
          case "start":
            o[Z] = k, B = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            N = Yt(q || L, _), B = s;
            break;
        }
        j.call(
          M,
          C,
          new hs(M, {
            sourceEvent: L,
            subject: b,
            target: f,
            identifier: Z,
            active: B,
            x: N[0] + S,
            y: N[1] + D,
            dx: N[0] - O[0],
            dy: N[1] - O[1],
            dispatch: j
          }),
          A
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : Ro(!!C), f) : e;
  }, f.container = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : Ro(C), f) : t;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : Ro(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : Ro(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (p = (C = +C) * C, f) : Math.sqrt(p);
  }, f;
}
function na(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ec(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function No() {
}
var fo = 0.7, li = 1 / fo, Sr = "\\s*([+-]?\\d+)\\s*", po = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", an = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fh = /^#([0-9a-f]{3,8})$/, Wh = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Xh = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Uh = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${po}\\)$`), Gh = new RegExp(`^rgba\\(${an},${an},${an},${po}\\)$`), Jh = new RegExp(`^hsl\\(${po},${an},${an}\\)$`), Qh = new RegExp(`^hsla\\(${po},${an},${an},${po}\\)$`), Ga = {
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
na(No, ur, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ja,
  // Deprecated! Use color.formatHex.
  formatHex: Ja,
  formatHex8: e1,
  formatHsl: t1,
  formatRgb: Qa,
  toString: Qa
});
function Ja() {
  return this.rgb().formatHex();
}
function e1() {
  return this.rgb().formatHex8();
}
function t1() {
  return tc(this).formatHsl();
}
function Qa() {
  return this.rgb().formatRgb();
}
function ur(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Fh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? el(t) : n === 3 ? new Et(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? qo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? qo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Wh.exec(e)) ? new Et(t[1], t[2], t[3], 1) : (t = Xh.exec(e)) ? new Et(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Uh.exec(e)) ? qo(t[1], t[2], t[3], t[4]) : (t = Gh.exec(e)) ? qo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Jh.exec(e)) ? rl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Qh.exec(e)) ? rl(t[1], t[2] / 100, t[3] / 100, t[4]) : Ga.hasOwnProperty(e) ? el(Ga[e]) : e === "transparent" ? new Et(NaN, NaN, NaN, 0) : null;
}
function el(e) {
  return new Et(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Et(e, t, n, r);
}
function n1(e) {
  return e instanceof No || (e = ur(e)), e ? (e = e.rgb(), new Et(e.r, e.g, e.b, e.opacity)) : new Et();
}
function vs(e, t, n, r) {
  return arguments.length === 1 ? n1(e) : new Et(e, t, n, r ?? 1);
}
function Et(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
na(Et, vs, ec(No, {
  brighter(e) {
    return e = e == null ? li : Math.pow(li, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Et(ar(this.r), ar(this.g), ar(this.b), ui(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: tl,
  // Deprecated! Use color.formatHex.
  formatHex: tl,
  formatHex8: r1,
  formatRgb: nl,
  toString: nl
}));
function tl() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}`;
}
function r1() {
  return `#${nr(this.r)}${nr(this.g)}${nr(this.b)}${nr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nl() {
  const e = ui(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ar(this.r)}, ${ar(this.g)}, ${ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ui(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nr(e) {
  return e = ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function rl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Wt(e, t, n, r);
}
function tc(e) {
  if (e instanceof Wt) return new Wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof No || (e = ur(e)), !e) return new Wt();
  if (e instanceof Wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Wt(s, a, l, e.opacity);
}
function o1(e, t, n, r) {
  return arguments.length === 1 ? tc(e) : new Wt(e, t, n, r ?? 1);
}
function Wt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
na(Wt, o1, ec(No, {
  brighter(e) {
    return e = e == null ? li : Math.pow(li, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fo : Math.pow(fo, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Et(
      Wi(e >= 240 ? e - 240 : e + 120, o, r),
      Wi(e, o, r),
      Wi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Wt(ol(this.h), Bo(this.s), Bo(this.l), ui(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ui(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ol(this.h)}, ${Bo(this.s) * 100}%, ${Bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ol(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ra = (e) => () => e;
function i1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function s1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function a1(e) {
  return (e = +e) == 1 ? nc : function(t, n) {
    return n - t ? s1(t, n, e) : ra(isNaN(t) ? n : t);
  };
}
function nc(e, t) {
  var n = t - e;
  return n ? i1(e, n) : ra(isNaN(e) ? t : e);
}
const ci = function e(t) {
  var n = a1(t);
  function r(o, i) {
    var s = n((o = vs(o)).r, (i = vs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = nc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function l1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function u1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function c1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = ro(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function d1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function nn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function f1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = ro(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(ms.source, "g");
function p1(e) {
  return function() {
    return e;
  };
}
function g1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function rc(e, t) {
  var n = ms.lastIndex = Xi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ms.exec(e)) && (o = Xi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: nn(r, o) })), n = Xi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? g1(l[0].x) : p1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function ro(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ra(t) : (n === "number" ? nn : n === "string" ? (r = ur(t)) ? (t = r, ci) : rc : t instanceof ur ? ci : t instanceof Date ? d1 : u1(t) ? l1 : Array.isArray(t) ? c1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? f1 : nn)(e, t);
}
var il = 180 / Math.PI, oc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ic(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * il,
    skewX: Math.atan(l) * il,
    scaleX: s,
    scaleY: a
  };
}
var Zo;
function h1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? oc : ic(t.a, t.b, t.c, t.d, t.e, t.f);
}
function v1(e) {
  return e == null || (Zo || (Zo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zo.setAttribute("transform", e), !(e = Zo.transform.baseVal.consolidate())) ? oc : (e = e.matrix, ic(e.a, e.b, e.c, e.d, e.e, e.f));
}
function sc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var v = g.push("translate(", null, t, null, n);
      h.push({ i: v - 4, x: nn(u, p) }, { i: v - 2, x: nn(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: nn(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: nn(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var v = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: v - 4, x: nn(u, p) }, { i: v - 2, x: nn(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, v = f.length, $; ++h < v; ) p[($ = f[h]).i] = $.x(g);
      return p.join("");
    };
  };
}
var m1 = sc(h1, "px, ", "px)", "deg)"), y1 = sc(v1, ", ", ")", ")"), w1 = 1e-12;
function sl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function b1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function x1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Go = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, v = g * g + h * h, $, m;
    if (v < w1)
      m = Math.log(f / u) / t, $ = function(A) {
        return [
          a + A * g,
          l + A * h,
          u * Math.exp(t * A * m)
        ];
      };
    else {
      var P = Math.sqrt(v), x = (f * f - u * u + r * v) / (2 * u * n * P), C = (f * f - u * u - r * v) / (2 * f * n * P), _ = Math.log(Math.sqrt(x * x + 1) - x), T = Math.log(Math.sqrt(C * C + 1) - C);
      m = (T - _) / t, $ = function(A) {
        var Z = A * m, F = sl(_), j = u / (n * P) * (F * x1(t * Z + _) - b1(_));
        return [
          a + j * g,
          l + j * h,
          u * F / sl(t * Z + _)
        ];
      };
    }
    return $.duration = m * 1e3 * t / Math.SQRT2, $;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Vr = 0, Qr = 0, Ur = 0, ac = 1e3, di, eo, fi = 0, cr = 0, Ti = 0, go = typeof performance == "object" && performance.now ? performance : Date, lc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function oa() {
  return cr || (lc(C1), cr = go.now() + Ti);
}
function C1() {
  cr = 0;
}
function pi() {
  this._call = this._time = this._next = null;
}
pi.prototype = uc.prototype = {
  constructor: pi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? oa() : +n) + (t == null ? 0 : +t), !this._next && eo !== this && (eo ? eo._next = this : di = this, eo = this), this._call = e, this._time = n, ys();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ys());
  }
};
function uc(e, t, n) {
  var r = new pi();
  return r.restart(e, t, n), r;
}
function $1() {
  oa(), ++Vr;
  for (var e = di, t; e; )
    (t = cr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Vr;
}
function al() {
  cr = (fi = go.now()) + Ti, Vr = Qr = 0;
  try {
    $1();
  } finally {
    Vr = 0, k1(), cr = 0;
  }
}
function _1() {
  var e = go.now(), t = e - fi;
  t > ac && (Ti -= t, fi = e);
}
function k1() {
  for (var e, t = di, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : di = n);
  eo = e, ys(r);
}
function ys(e) {
  if (!Vr) {
    Qr && (Qr = clearTimeout(Qr));
    var t = e - cr;
    t > 24 ? (e < 1 / 0 && (Qr = setTimeout(al, e - go.now() - Ti)), Ur && (Ur = clearInterval(Ur))) : (Ur || (fi = go.now(), Ur = setInterval(_1, ac)), Vr = 1, lc(al));
  }
}
function ll(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var S1 = Ni("start", "end", "cancel", "interrupt"), E1 = [], cc = 0, ul = 1, ws = 2, Jo = 3, cl = 4, bs = 5, Qo = 6;
function Oi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  P1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: S1,
    tween: E1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: cc
  });
}
function ia(e, t) {
  var n = Gt(e, t);
  if (n.state > cc) throw new Error("too late; already scheduled");
  return n;
}
function hn(e, t) {
  var n = Gt(e, t);
  if (n.state > Jo) throw new Error("too late; already running");
  return n;
}
function Gt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function P1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = uc(i, 0, n.time);
  function i(u) {
    n.state = ul, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== ul) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Jo) return ll(s);
        g.state === cl ? (g.state = Qo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Qo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ll(function() {
      n.state === Jo && (n.state = cl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ws, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ws) {
      for (n.state = Jo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = bs, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === bs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Qo, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ei(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > ws && r.state < bs, r.state = Qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function N1(e) {
  return this.each(function() {
    ei(this, e);
  });
}
function M1(e, t) {
  var n, r;
  return function() {
    var o = hn(this, e), i = o.tween;
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
function T1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = hn(this, e), s = i.tween;
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
function O1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Gt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? M1 : T1)(n, e, t));
}
function sa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = hn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Gt(o, r).value[t];
  };
}
function dc(e, t) {
  var n;
  return (typeof t == "number" ? nn : t instanceof ur ? ci : (n = ur(t)) ? (t = n, ci) : rc)(e, t);
}
function D1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function V1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function H1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function L1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function A1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function z1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function I1(e, t) {
  var n = Mi(e), r = n === "transform" ? y1 : dc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? z1 : A1)(n, r, sa(this, "attr." + e, t)) : t == null ? (n.local ? V1 : D1)(n) : (n.local ? L1 : H1)(n, r, t));
}
function R1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function q1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function B1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && q1(e, i)), n;
  }
  return o._value = t, o;
}
function Z1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && R1(e, i)), n;
  }
  return o._value = t, o;
}
function K1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Mi(e);
  return this.tween(n, (r.local ? B1 : Z1)(r, t));
}
function j1(e, t) {
  return function() {
    ia(this, e).delay = +t.apply(this, arguments);
  };
}
function Y1(e, t) {
  return t = +t, function() {
    ia(this, e).delay = t;
  };
}
function F1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? j1 : Y1)(t, e)) : Gt(this.node(), t).delay;
}
function W1(e, t) {
  return function() {
    hn(this, e).duration = +t.apply(this, arguments);
  };
}
function X1(e, t) {
  return t = +t, function() {
    hn(this, e).duration = t;
  };
}
function U1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? W1 : X1)(t, e)) : Gt(this.node(), t).duration;
}
function G1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    hn(this, e).ease = t;
  };
}
function J1(e) {
  var t = this._id;
  return arguments.length ? this.each(G1(t, e)) : Gt(this.node(), t).ease;
}
function Q1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    hn(this, e).ease = n;
  };
}
function ev(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Q1(this._id, e));
}
function tv(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Dn(r, this._parents, this._name, this._id);
}
function nv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Dn(s, this._parents, this._name, this._id);
}
function rv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ov(e, t, n) {
  var r, o, i = rv(t) ? ia : hn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function iv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Gt(this.node(), n).on.on(e) : this.each(ov(n, e, t));
}
function sv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function av() {
  return this.on("end.remove", sv(this._id));
}
function lv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ea(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Oi(u[f], t, n, f, u, Gt(d, n)));
  return new Dn(i, this._parents, t, n);
}
function uv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = qu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = Gt(d, n), v = 0, $ = f.length; v < $; ++v)
          (g = f[v]) && Oi(g, t, n, v, f, h);
        i.push(f), s.push(d);
      }
  return new Dn(i, s, t, n);
}
var cv = Po.prototype.constructor;
function dv() {
  return new cv(this._groups, this._parents);
}
function fv(e, t) {
  var n, r, o;
  return function() {
    var i = Dr(this, e), s = (this.style.removeProperty(e), Dr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function fc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function pv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Dr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function gv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Dr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Dr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function hv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = hn(this, e), u = l.on, d = l.value[i] == null ? a || (a = fc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function vv(e, t, n) {
  var r = (e += "") == "transform" ? m1 : dc;
  return t == null ? this.styleTween(e, fv(e, r)).on("end.style." + e, fc(e)) : typeof t == "function" ? this.styleTween(e, gv(e, r, sa(this, "style." + e, t))).each(hv(this._id, e)) : this.styleTween(e, pv(e, r, t), n).on("end.style." + e, null);
}
function mv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function yv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && mv(e, s, n)), r;
  }
  return i._value = t, i;
}
function wv(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, yv(e, t, n ?? ""));
}
function bv(e) {
  return function() {
    this.textContent = e;
  };
}
function xv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Cv(e) {
  return this.tween("text", typeof e == "function" ? xv(sa(this, "text", e)) : bv(e == null ? "" : e + ""));
}
function $v(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function _v(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && $v(o)), t;
  }
  return r._value = e, r;
}
function kv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, _v(e));
}
function Sv() {
  for (var e = this._name, t = this._id, n = pc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Gt(l, t);
        Oi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Dn(r, this._parents, e, n);
}
function Ev() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = hn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Pv = 0;
function Dn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function pc() {
  return ++Pv;
}
var bn = Po.prototype;
Dn.prototype = {
  constructor: Dn,
  select: lv,
  selectAll: uv,
  selectChild: bn.selectChild,
  selectChildren: bn.selectChildren,
  filter: tv,
  merge: nv,
  selection: dv,
  transition: Sv,
  call: bn.call,
  nodes: bn.nodes,
  node: bn.node,
  size: bn.size,
  empty: bn.empty,
  each: bn.each,
  on: iv,
  attr: I1,
  attrTween: K1,
  style: vv,
  styleTween: wv,
  text: Cv,
  textTween: kv,
  remove: av,
  tween: O1,
  delay: F1,
  duration: U1,
  ease: J1,
  easeVarying: ev,
  end: Ev,
  [Symbol.iterator]: bn[Symbol.iterator]
};
function Nv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Mv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Nv
};
function Tv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Ov(e) {
  var t, n;
  e instanceof Dn ? (t = e._id, e = e._name) : (t = pc(), (n = Mv).time = oa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Oi(l, e, t, u, s, n || Tv(l, t));
  return new Dn(r, this._parents, e, t);
}
Po.prototype.interrupt = N1;
Po.prototype.transition = Ov;
const Ko = (e) => () => e;
function Dv(e, {
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
function Cn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Cn.prototype = {
  constructor: Cn,
  scale: function(e) {
    return e === 1 ? this : new Cn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Cn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Di = new Cn(1, 0, 0);
gc.prototype = Cn.prototype;
function gc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Di;
  return e.__zoom;
}
function Ui(e) {
  e.stopImmediatePropagation();
}
function Gr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Vv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Hv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function dl() {
  return this.__zoom || Di;
}
function Lv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Av() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function zv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function hc() {
  var e = Vv, t = Hv, n = zv, r = Lv, o = Av, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Go, u = Ni("start", "zoom", "end"), d, p, f, g = 500, h = 150, v = 0, $ = 10;
  function m(b) {
    b.property("__zoom", dl).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", F).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", D).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  m.transform = function(b, k, M, L) {
    var q = b.selection ? b.selection() : b;
    q.property("__zoom", dl), b !== q ? _(b, k, M, L) : q.interrupt().each(function() {
      T(this, arguments).event(L).start().zoom(null, typeof k == "function" ? k.apply(this, arguments) : k).end();
    });
  }, m.scaleBy = function(b, k, M, L) {
    m.scaleTo(b, function() {
      var q = this.__zoom.k, O = typeof k == "function" ? k.apply(this, arguments) : k;
      return q * O;
    }, M, L);
  }, m.scaleTo = function(b, k, M, L) {
    m.transform(b, function() {
      var q = t.apply(this, arguments), O = this.__zoom, B = M == null ? C(q) : typeof M == "function" ? M.apply(this, arguments) : M, W = O.invert(B), G = typeof k == "function" ? k.apply(this, arguments) : k;
      return n(x(P(O, G), B, W), q, s);
    }, M, L);
  }, m.translateBy = function(b, k, M, L) {
    m.transform(b, function() {
      return n(this.__zoom.translate(
        typeof k == "function" ? k.apply(this, arguments) : k,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), s);
    }, null, L);
  }, m.translateTo = function(b, k, M, L, q) {
    m.transform(b, function() {
      var O = t.apply(this, arguments), B = this.__zoom, W = L == null ? C(O) : typeof L == "function" ? L.apply(this, arguments) : L;
      return n(Di.translate(W[0], W[1]).scale(B.k).translate(
        typeof k == "function" ? -k.apply(this, arguments) : -k,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), O, s);
    }, L, q);
  };
  function P(b, k) {
    return k = Math.max(i[0], Math.min(i[1], k)), k === b.k ? b : new Cn(k, b.x, b.y);
  }
  function x(b, k, M) {
    var L = k[0] - M[0] * b.k, q = k[1] - M[1] * b.k;
    return L === b.x && q === b.y ? b : new Cn(b.k, L, q);
  }
  function C(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function _(b, k, M, L) {
    b.on("start.zoom", function() {
      T(this, arguments).event(L).start();
    }).on("interrupt.zoom end.zoom", function() {
      T(this, arguments).event(L).end();
    }).tween("zoom", function() {
      var q = this, O = arguments, B = T(q, O).event(L), W = t.apply(q, O), G = M == null ? C(W) : typeof M == "function" ? M.apply(q, O) : M, ee = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), X = q.__zoom, pe = typeof k == "function" ? k.apply(q, O) : k, re = l(X.invert(G).concat(ee / X.k), pe.invert(G).concat(ee / pe.k));
      return function(he) {
        if (he === 1) he = pe;
        else {
          var U = re(he), $e = ee / U[2];
          he = new Cn($e, G[0] - U[0] * $e, G[1] - U[1] * $e);
        }
        B.zoom(null, he);
      };
    });
  }
  function T(b, k, M) {
    return !M && b.__zooming || new A(b, k);
  }
  function A(b, k) {
    this.that = b, this.args = k, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, k), this.taps = 0;
  }
  A.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, k) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = k.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = k.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = k.invert(this.touch1[0])), this.that.__zoom = k, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var k = Bt(this.that).datum();
      u.call(
        b,
        this.that,
        new Dv(b, {
          sourceEvent: this.sourceEvent,
          target: m,
          transform: this.that.__zoom,
          dispatch: u
        }),
        k
      );
    }
  };
  function Z(b, ...k) {
    if (!e.apply(this, arguments)) return;
    var M = T(this, k).event(b), L = this.__zoom, q = Math.max(i[0], Math.min(i[1], L.k * Math.pow(2, r.apply(this, arguments)))), O = Yt(b);
    if (M.wheel)
      (M.mouse[0][0] !== O[0] || M.mouse[0][1] !== O[1]) && (M.mouse[1] = L.invert(M.mouse[0] = O)), clearTimeout(M.wheel);
    else {
      if (L.k === q) return;
      M.mouse = [O, L.invert(O)], ei(this), M.start();
    }
    Gr(b), M.wheel = setTimeout(B, h), M.zoom("mouse", n(x(P(L, q), M.mouse[0], M.mouse[1]), M.extent, s));
    function B() {
      M.wheel = null, M.end();
    }
  }
  function F(b, ...k) {
    if (f || !e.apply(this, arguments)) return;
    var M = b.currentTarget, L = T(this, k, !0).event(b), q = Bt(b.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", ee, !0), O = Yt(b, M), B = b.clientX, W = b.clientY;
    Ju(b.view), Ui(b), L.mouse = [O, this.__zoom.invert(O)], ei(this), L.start();
    function G(X) {
      if (Gr(X), !L.moved) {
        var pe = X.clientX - B, re = X.clientY - W;
        L.moved = pe * pe + re * re > v;
      }
      L.event(X).zoom("mouse", n(x(L.that.__zoom, L.mouse[0] = Yt(X, M), L.mouse[1]), L.extent, s));
    }
    function ee(X) {
      q.on("mousemove.zoom mouseup.zoom", null), Qu(X.view, L.moved), Gr(X), L.event(X).end();
    }
  }
  function j(b, ...k) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, L = Yt(b.changedTouches ? b.changedTouches[0] : b, this), q = M.invert(L), O = M.k * (b.shiftKey ? 0.5 : 2), B = n(x(P(M, O), L, q), t.apply(this, k), s);
      Gr(b), a > 0 ? Bt(this).transition().duration(a).call(_, B, L, b) : Bt(this).call(m.transform, B, L, b);
    }
  }
  function N(b, ...k) {
    if (e.apply(this, arguments)) {
      var M = b.touches, L = M.length, q = T(this, k, b.changedTouches.length === L).event(b), O, B, W, G;
      for (Ui(b), B = 0; B < L; ++B)
        W = M[B], G = Yt(W, this), G = [G, this.__zoom.invert(G), W.identifier], q.touch0 ? !q.touch1 && q.touch0[2] !== G[2] && (q.touch1 = G, q.taps = 0) : (q.touch0 = G, O = !0, q.taps = 1 + !!d);
      d && (d = clearTimeout(d)), O && (q.taps < 2 && (p = G[0], d = setTimeout(function() {
        d = null;
      }, g)), ei(this), q.start());
    }
  }
  function S(b, ...k) {
    if (this.__zooming) {
      var M = T(this, k).event(b), L = b.changedTouches, q = L.length, O, B, W, G;
      for (Gr(b), O = 0; O < q; ++O)
        B = L[O], W = Yt(B, this), M.touch0 && M.touch0[2] === B.identifier ? M.touch0[0] = W : M.touch1 && M.touch1[2] === B.identifier && (M.touch1[0] = W);
      if (B = M.that.__zoom, M.touch1) {
        var ee = M.touch0[0], X = M.touch0[1], pe = M.touch1[0], re = M.touch1[1], he = (he = pe[0] - ee[0]) * he + (he = pe[1] - ee[1]) * he, U = (U = re[0] - X[0]) * U + (U = re[1] - X[1]) * U;
        B = P(B, Math.sqrt(he / U)), W = [(ee[0] + pe[0]) / 2, (ee[1] + pe[1]) / 2], G = [(X[0] + re[0]) / 2, (X[1] + re[1]) / 2];
      } else if (M.touch0) W = M.touch0[0], G = M.touch0[1];
      else return;
      M.zoom("touch", n(x(B, W, G), M.extent, s));
    }
  }
  function D(b, ...k) {
    if (this.__zooming) {
      var M = T(this, k).event(b), L = b.changedTouches, q = L.length, O, B;
      for (Ui(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), O = 0; O < q; ++O)
        B = L[O], M.touch0 && M.touch0[2] === B.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === B.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (B = Yt(B, this), Math.hypot(p[0] - B[0], p[1] - B[1]) < $)) {
        var W = Bt(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return m.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Ko(+b), m) : r;
  }, m.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Ko(!!b), m) : e;
  }, m.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : Ko(!!b), m) : o;
  }, m.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Ko([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), m) : t;
  }, m.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], m) : [i[0], i[1]];
  }, m.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], m) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, m.constrain = function(b) {
    return arguments.length ? (n = b, m) : n;
  }, m.duration = function(b) {
    return arguments.length ? (a = +b, m) : a;
  }, m.interpolate = function(b) {
    return arguments.length ? (l = b, m) : l;
  }, m.on = function() {
    var b = u.on.apply(u, arguments);
    return b === u ? m : b;
  }, m.clickDistance = function(b) {
    return arguments.length ? (v = (b = +b) * b, m) : Math.sqrt(v);
  }, m.tapDistance = function(b) {
    return arguments.length ? ($ = +b, m) : $;
  }, m;
}
const dr = {
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
}, xs = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], vc = ["Enter", " ", "Escape"], Iv = {
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
var Hr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Hr || (Hr = {}));
var ln;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(ln || (ln = {}));
var gi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(gi || (gi = {}));
const Cs = {
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
var xn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(xn || (xn = {}));
var ho;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ho || (ho = {}));
var be;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(be || (be = {}));
const fl = {
  [be.Left]: be.Right,
  [be.Right]: be.Left,
  [be.Top]: be.Bottom,
  [be.Bottom]: be.Top
};
function Rv(e, t) {
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
function pl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function qv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const mc = (e) => "id" in e && "source" in e && "target" in e, Bv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), aa = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Mo = (e, t = [0, 0]) => {
  const { width: n, height: r } = Jn(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Zv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : aa(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? hi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Vi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Hi(n);
}, To = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = hi(r);
      n = Vi(n, o);
    }
  }), Hi(n);
}, la = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Oo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, v = vo(a, Ar(u)), $ = (g ?? 0) * (h ?? 0), m = i && v > 0;
    (!u.internals.handleBounds || m || v >= $ || u.dragging) && l.push(u);
  }
  return l;
}, Kv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function jv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Yv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = jv(e, s), l = To(a), u = ua(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function yc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", dr.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && zr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = zr(p) ? fr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", dr.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Fv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Kv(s, l);
  for (const p of l)
    a.has(p.id) && !u.find((f) => f.id === p.id) && u.push(p);
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
const Lr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Lr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Lr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function wc(e, t, n) {
  const { width: r, height: o } = Jn(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const gl = (e, t, n) => e < t ? Lr(Math.abs(e - t), 1, t) / t : e > n ? -Lr(Math.abs(e - n), 1, t) / t : 0, bc = (e, t, n = 15, r = 40) => {
  const o = gl(e.x, r, t.width - r) * n, i = gl(e.y, r, t.height - r) * n;
  return [o, i];
}, Vi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), $s = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Hi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ar = (e, t = [0, 0]) => {
  const { x: n, y: r } = aa(e) ? e.internals.positionAbsolute : Mo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, hi = (e, t = [0, 0]) => {
  const { x: n, y: r } = aa(e) ? e.internals.positionAbsolute : Mo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, xc = (e, t) => Hi(Vi($s(e), $s(t))), vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, hl = (e) => $n(e.width) && $n(e.height) && $n(e.x) && $n(e.y), $n = (e) => !isNaN(e) && isFinite(e), Cc = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, Li = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Oo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Li(a, s) : a;
}, vi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Cr(e, t) {
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
function Wv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Cr(e, n), o = Cr(e, t);
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
    const r = Cr(e.top ?? e.y ?? 0, n), o = Cr(e.bottom ?? e.y ?? 0, n), i = Cr(e.left ?? e.x ?? 0, t), s = Cr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Xv(e, t, n, r, o, i) {
  const { x: s, y: a } = vi(e, [t, n, r]), { x: l, y: u } = vi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const ua = (e, t, n, r, o, i) => {
  const s = Wv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Lr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, v = Xv(e, g, h, d, t, n), $ = {
    left: Math.min(v.left - s.left, 0),
    top: Math.min(v.top - s.top, 0),
    right: Math.min(v.right - s.right, 0),
    bottom: Math.min(v.bottom - s.bottom, 0)
  };
  return {
    x: g - $.left + $.right,
    y: h - $.top + $.bottom,
    zoom: d
  };
}, $r = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function zr(e) {
  return e !== void 0 && e !== "parent";
}
function Jn(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function $c(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function Uv(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function Gv(e) {
  return { ...Iv, ...e || {} };
}
function Gi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = on(e), a = Oo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Li(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _c = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), kc = (e) => e?.getRootNode?.() || window?.document, Jv = ["INPUT", "SELECT", "TEXTAREA"];
function Sc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : Jv.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Ec = (e) => "clientX" in e, on = (e, t) => {
  const n = Ec(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, vl = (e, t, n, r, o) => {
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
      ..._c(s)
    };
  });
};
function Qv({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function ml({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case be.Left:
      return [t - jo(t - r, i), n];
    case be.Right:
      return [t + jo(r - t, i), n];
    case be.Top:
      return [t, n - jo(n - o, i)];
    case be.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function Pc({ sourceX: e, sourceY: t, sourcePosition: n = be.Bottom, targetX: r, targetY: o, targetPosition: i = be.Top, curvature: s = 0.25 }) {
  const [a, l] = ml({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = ml({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = Qv({
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
    p,
    f,
    g,
    h
  ];
}
function Nc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function e0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function t0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Vi(hi(e), hi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return vo(s, Hi(i)) > 0;
}
const n0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, r0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), o0 = (e, t) => {
  if (!e.source || !e.target)
    return Cc("006", dr.error006()), t;
  let n;
  return mc(e) ? n = { ...e } : n = {
    ...e,
    id: n0(e)
  }, r0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Mc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Nc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const yl = {
  [be.Left]: { x: -1, y: 0 },
  [be.Right]: { x: 1, y: 0 },
  [be.Top]: { x: 0, y: -1 },
  [be.Bottom]: { x: 0, y: 1 }
}, i0 = ({ source: e, sourcePosition: t = be.Bottom, target: n }) => t === be.Left || t === be.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, wl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function s0({ source: e, sourcePosition: t = be.Bottom, target: n, targetPosition: r = be.Top, center: o, offset: i, stepPosition: s }) {
  const a = yl[t], l = yl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = i0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], v, $;
  const m = { x: 0, y: 0 }, P = { x: 0, y: 0 }, [, , x, C] = Nc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (v = o.x ?? u.x + (d.x - u.x) * s, $ = o.y ?? (u.y + d.y) / 2) : (v = o.x ?? (u.x + d.x) / 2, $ = o.y ?? u.y + (d.y - u.y) * s);
    const _ = [
      { x: v, y: u.y },
      { x: v, y: d.y }
    ], T = [
      { x: u.x, y: $ },
      { x: d.x, y: $ }
    ];
    a[f] === g ? h = f === "x" ? _ : T : h = f === "x" ? T : _;
  } else {
    const _ = [{ x: u.x, y: d.y }], T = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? T : _ : h = a.y === g ? _ : T, t === r) {
      const N = Math.abs(e[f] - n[f]);
      if (N <= i) {
        const S = Math.min(i - 1, i - N);
        a[f] === g ? m[f] = (u[f] > e[f] ? -1 : 1) * S : P[f] = (d[f] > n[f] ? -1 : 1) * S;
      }
    }
    if (t !== r) {
      const N = f === "x" ? "y" : "x", S = a[f] === l[N], D = u[N] > d[N], b = u[N] < d[N];
      (a[f] === 1 && (!S && D || S && b) || a[f] !== 1 && (!S && b || S && D)) && (h = f === "x" ? _ : T);
    }
    const A = { x: u.x + m.x, y: u.y + m.y }, Z = { x: d.x + P.x, y: d.y + P.y }, F = Math.max(Math.abs(A.x - h[0].x), Math.abs(Z.x - h[0].x)), j = Math.max(Math.abs(A.y - h[0].y), Math.abs(Z.y - h[0].y));
    F >= j ? (v = (A.x + Z.x) / 2, $ = h[0].y) : (v = h[0].x, $ = (A.y + Z.y) / 2);
  }
  return [[
    e,
    { x: u.x + m.x, y: u.y + m.y },
    ...h,
    { x: d.x + P.x, y: d.y + P.y },
    n
  ], v, $, x, C];
}
function a0(e, t, n, r) {
  const o = Math.min(wl(e, t) / 2, wl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ca({ sourceX: e, sourceY: t, sourcePosition: n = be.Bottom, targetX: r, targetY: o, targetPosition: i = be.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, v] = s0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce(($, m, P) => {
    let x = "";
    return P > 0 && P < p.length - 1 ? x = a0(p[P - 1], m, p[P + 1], s) : x = `${P === 0 ? "M" : "L"}${m.x} ${m.y}`, $ += x, $;
  }, ""), f, g, h, v];
}
function bl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function l0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!bl(t) || !bl(n))
    return null;
  const r = t.internals.handleBounds || xl(t.handles), o = n.internals.handleBounds || xl(n.handles), i = Cl(r?.source ?? [], e.sourceHandle), s = Cl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Hr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", dr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || be.Bottom, l = s?.position || be.Top, u = mo(t, i, a), d = mo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function xl(e) {
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
function mo(e, t, n = be.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? Jn(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case be.Top:
      return { x: o + s / 2, y: i };
    case be.Right:
      return { x: o + s, y: i + a / 2 };
    case be.Bottom:
      return { x: o + s / 2, y: i + a };
    case be.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Cl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _s(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function u0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = _s(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function c0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case be.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case be.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case be.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const da = {
  nodeOrigin: [0, 0],
  nodeExtent: xs,
  elevateNodesOnSelect: !0,
  defaults: {}
}, d0 = {
  ...da,
  checkEquality: !0
};
function fa(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function f0(e, t, n) {
  const r = fa(da, n);
  for (const o of e.values())
    if (o.parentId)
      pa(o, e, t, r);
    else {
      const i = Mo(o, r.nodeOrigin), s = zr(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, Jn(o));
      o.internals.positionAbsolute = a;
    }
}
function p0(e, t, n, r) {
  const o = fa(d0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = Mo(l, o.nodeOrigin), p = zr(l.extent) ? l.extent : o.nodeExtent, f = fr(d, p, Jn(l));
      u = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? u?.internals.handleBounds : void 0,
          z: Tc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && pa(u, t, n, r);
  }
  return i;
}
function g0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function pa(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = fa(da, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  g0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: p, z: f } = h0(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function Tc(e, t) {
  return ($n(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function h0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = Jn(e), l = Mo(e, n), u = zr(e.extent) ? fr(l, e.extent, a) : l;
  let d = fr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = wc(d, a, t));
  const p = Tc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function v0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ar(a), u = xc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = Jn(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), v = Math.max(d.height, Math.round(s.height)), $ = (h - d.width) * p[0], m = (v - d.height) * p[1];
    (f > 0 || g > 0 || $ || m) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + $,
        y: a.position.y - g + m
      }
    }), n.get(l)?.forEach((P) => {
      e.some((x) => x.id === P.id) || o.push({
        id: P.id,
        type: "position",
        position: {
          x: P.position.x + f,
          y: P.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - $ : 0),
        height: v + (g ? p[1] * g - m : 0)
      }
    });
  }), o;
}
function m0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), p = [];
  for (const f of e.values()) {
    const g = t.get(f.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const h = _c(f.nodeElement), v = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (v || !g.internals.handleBounds || f.force)) {
      const $ = f.nodeElement.getBoundingClientRect(), m = zr(g.extent) ? g.extent : i;
      let { positionAbsolute: P } = g.internals;
      g.parentId && g.extent === "parent" ? P = wc(P, h, t.get(g.parentId)) : m && (P = fr(P, m, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: P,
          handleBounds: {
            source: vl("source", f.nodeElement, $, d, g.id),
            target: vl("target", f.nodeElement, $, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && pa(x, t, n, { nodeOrigin: o }), a = !0, v && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: Ar(x, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = v0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function y0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function $l(e, t, n, r, o, i) {
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
function w0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    $l("source", l, d, e, o, s), $l("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function b0(e, t) {
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
function _l(e, t, n) {
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
function x0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Oc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Ji({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function C0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function v({ noDragClassName: m, handleSelector: P, domNode: x, isSelectable: C, nodeId: _, nodeClickDistance: T = 0 }) {
    f = Bt(x);
    function A({ x: N, y: S }, D) {
      const { nodeLookup: b, nodeExtent: k, snapGrid: M, snapToGrid: L, nodeOrigin: q, onNodeDrag: O, onSelectionDrag: B, onError: W, updateNodePositions: G } = t();
      i = { x: N, y: S };
      let ee = !1, X = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && k) {
        const pe = To(a);
        X = $s(pe);
      }
      for (const [pe, re] of a) {
        if (!b.has(pe))
          continue;
        let he = { x: N - re.distance.x, y: S - re.distance.y };
        L && (he = Li(he, M));
        let U = [
          [k[0][0], k[0][1]],
          [k[1][0], k[1][1]]
        ];
        if (a.size > 1 && k && !re.extent) {
          const { positionAbsolute: ie } = re.internals, ne = ie.x - X.x + k[0][0], le = ie.x + re.measured.width - X.x2 + k[1][0], te = ie.y - X.y + k[0][1], ye = ie.y + re.measured.height - X.y2 + k[1][1];
          U = [
            [ne, te],
            [le, ye]
          ];
        }
        const { position: $e, positionAbsolute: ge } = yc({
          nodeId: pe,
          nextPosition: he,
          nodeLookup: b,
          nodeExtent: U,
          nodeOrigin: q,
          onError: W
        });
        ee = ee || re.position.x !== $e.x || re.position.y !== $e.y, re.position = $e, re.internals.positionAbsolute = ge;
      }
      if (h = h || ee, !!ee && (G(a, !0), D && (r || O || !_ && B))) {
        const [pe, re] = Ji({
          nodeId: _,
          dragItems: a,
          nodeLookup: b
        });
        r?.(D, a, pe, re), O?.(D, pe, re), _ || B?.(D, re);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: N, panBy: S, autoPanSpeed: D, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [k, M] = bc(u, d, D);
      (k !== 0 || M !== 0) && (i.x = (i.x ?? 0) - k / N[2], i.y = (i.y ?? 0) - M / N[2], await S({ x: k, y: M }) && A(i, null)), s = requestAnimationFrame(Z);
    }
    function F(N) {
      const { nodeLookup: S, multiSelectionActive: D, nodesDraggable: b, transform: k, snapGrid: M, snapToGrid: L, selectNodesOnDrag: q, onNodeDragStart: O, onSelectionDragStart: B, unselectNodesAndEdges: W } = t();
      p = !0, (!q || !C) && !D && _ && (S.get(_)?.selected || W()), C && q && _ && e?.(_);
      const G = Gi(N.sourceEvent, { transform: k, snapGrid: M, snapToGrid: L, containerBounds: d });
      if (i = G, a = x0(S, b, G, _), a.size > 0 && (n || O || !_ && B)) {
        const [ee, X] = Ji({
          nodeId: _,
          dragItems: a,
          nodeLookup: S
        });
        n?.(N.sourceEvent, a, ee, X), O?.(N.sourceEvent, ee, X), _ || B?.(N.sourceEvent, X);
      }
    }
    const j = Yh().clickDistance(T).on("start", (N) => {
      const { domNode: S, nodeDragThreshold: D, transform: b, snapGrid: k, snapToGrid: M } = t();
      d = S?.getBoundingClientRect() || null, g = !1, h = !1, D === 0 && F(N), i = Gi(N.sourceEvent, { transform: b, snapGrid: k, snapToGrid: M, containerBounds: d }), u = on(N.sourceEvent, d);
    }).on("drag", (N) => {
      const { autoPanOnNodeDrag: S, transform: D, snapGrid: b, snapToGrid: k, nodeDragThreshold: M, nodeLookup: L } = t(), q = Gi(N.sourceEvent, { transform: D, snapGrid: b, snapToGrid: k, containerBounds: d });
      if ((N.sourceEvent.type === "touchmove" && N.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      _ && !L.has(_)) && (g = !0), !g) {
        if (!l && S && p && (l = !0, Z()), !p) {
          const O = q.xSnapped - (i.x ?? 0), B = q.ySnapped - (i.y ?? 0);
          Math.sqrt(O * O + B * B) > M && F(N);
        }
        (i.x !== q.xSnapped || i.y !== q.ySnapped) && a && p && (u = on(N.sourceEvent, d), A(q, N.sourceEvent));
      }
    }).on("end", (N) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: S, updateNodePositions: D, onNodeDragStop: b, onSelectionDragStop: k } = t();
        if (h && (D(a, !1), h = !1), o || b || !_ && k) {
          const [M, L] = Ji({
            nodeId: _,
            dragItems: a,
            nodeLookup: S,
            dragging: !1
          });
          o?.(N.sourceEvent, a, M, L), b?.(N.sourceEvent, M, L), _ || k?.(N.sourceEvent, L);
        }
      }
    }).filter((N) => {
      const S = N.target;
      return !N.button && (!m || !_l(S, `.${m}`, x)) && (!P || _l(S, P, x));
    });
    f.call(j);
  }
  function $() {
    f?.on(".drag", null);
  }
  return {
    update: v,
    destroy: $
  };
}
function $0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    vo(o, Ar(i)) > 0 && r.push(i);
  return r;
}
const _0 = 250;
function k0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = $0(e, n, t + _0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = mo(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
      f > t || (f < i ? (o = [{ ...u, x: d, y: p }], i = f) : f === i && o.push({ ...u, x: d, y: p }));
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
function Dc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...mo(s, l, l.position, !0) } : l;
}
function Vc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function S0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Hc = () => !0;
function E0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: v, onConnectEnd: $, isValidConnection: m = Hc, onReconnectEnd: P, updateConnection: x, getTransform: C, getFromHandle: _, autoPanSpeed: T, dragThreshold: A = 1 }) {
  const Z = kc(e.target);
  let F = 0, j;
  const { x: N, y: S } = on(e), D = Z?.elementFromPoint(N, S), b = Vc(i, D), k = a?.getBoundingClientRect();
  let M = !1;
  if (!k || !b)
    return;
  const L = Dc(o, b, r, l, t);
  if (!L)
    return;
  let q = on(e, k), O = !1, B = null, W = !1, G = null;
  function ee() {
    if (!d || !k)
      return;
    const [ge, ie] = bc(q, k, T);
    f({ x: ge, y: ie }), F = requestAnimationFrame(ee);
  }
  const X = {
    ...L,
    nodeId: o,
    type: b,
    position: L.position
  }, pe = l.get(o);
  let re = {
    inProgress: !0,
    isValid: null,
    from: mo(pe, X, be.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: pe,
    to: q,
    toHandle: null,
    toPosition: fl[X.position],
    toNode: null
  };
  function he() {
    M = !0, x(re), h?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  A === 0 && he();
  function U(ge) {
    if (!M) {
      const { x: te, y: ye } = on(ge), oe = te - N, Ee = ye - S;
      if (!(oe * oe + Ee * Ee > A * A))
        return;
      he();
    }
    if (!_() || !X) {
      $e(ge);
      return;
    }
    const ie = C();
    q = on(ge, k), j = k0(Oo(q, ie, !1, [1, 1]), n, l, X), O || (ee(), O = !0);
    const ne = Lc(ge, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: m,
      doc: Z,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    G = ne.handleDomNode, B = ne.connection, W = S0(!!j, ne.isValid);
    const le = {
      // from stays the same
      ...re,
      isValid: W,
      to: ne.toHandle && W ? vi({ x: ne.toHandle.x, y: ne.toHandle.y }, ie) : q,
      toHandle: ne.toHandle,
      toPosition: W && ne.toHandle ? ne.toHandle.position : fl[X.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null
    };
    W && j && re.toHandle && le.toHandle && re.toHandle.type === le.toHandle.type && re.toHandle.nodeId === le.toHandle.nodeId && re.toHandle.id === le.toHandle.id && re.to.x === le.to.x && re.to.y === le.to.y || (x(le), re = le);
  }
  function $e(ge) {
    if (M) {
      (j || G) && B && W && v?.(B);
      const { inProgress: ie, ...ne } = re, le = {
        ...ne,
        toPosition: re.toHandle ? re.toPosition : null
      };
      $?.(ge, le), i && P?.(ge, le);
    }
    g(), cancelAnimationFrame(F), O = !1, W = !1, B = null, G = null, Z.removeEventListener("mousemove", U), Z.removeEventListener("mouseup", $e), Z.removeEventListener("touchmove", U), Z.removeEventListener("touchend", $e);
  }
  Z.addEventListener("mousemove", U), Z.addEventListener("mouseup", $e), Z.addEventListener("touchmove", U), Z.addEventListener("touchend", $e);
}
function Lc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Hc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = on(e), v = s.elementFromPoint(g, h), $ = v?.classList.contains(`${a}-flow__handle`) ? v : f, m = {
    handleDomNode: $,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if ($) {
    const P = Vc(void 0, $), x = $.getAttribute("data-nodeid"), C = $.getAttribute("data-handleid"), _ = $.classList.contains("connectable"), T = $.classList.contains("connectableend");
    if (!x || !P)
      return m;
    const A = {
      source: p ? x : r,
      sourceHandle: p ? C : o,
      target: p ? r : x,
      targetHandle: p ? o : C
    };
    m.connection = A;
    const Z = _ && T && (n === Hr.Strict ? p && P === "source" || !p && P === "target" : x !== r || C !== o);
    m.isValid = Z && u(A), m.toHandle = Dc(x, P, C, d, n, !0);
  }
  return m;
}
const kl = {
  onPointerDown: E0,
  isValid: Lc
};
function P0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Bt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const C = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, T = C[2] * Math.pow(2, _);
      t.scaleTo(T);
    };
    let v = [0, 0];
    const $ = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (v = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, m = (x) => {
      const C = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], T = [_[0] - v[0], _[1] - v[1]];
      v = _;
      const A = r() * Math.max(C[2], Math.log(C[2])) * (g ? -1 : 1), Z = {
        x: C[0] - T[0] * A,
        y: C[1] - T[1] * A
      }, F = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: C[2]
      }, F, a);
    }, P = hc().on("start", $).on("zoom", p ? m : null).on("zoom.wheel", f ? h : null);
    o.call(P, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Yt
  };
}
const N0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ai = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Qi = ({ x: e, y: t, zoom: n }) => Di.translate(e, t).scale(n), _r = (e, t) => e.target.closest(`.${t}`), Ac = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), M0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, es = (e, t = 0, n = M0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, zc = (e) => {
  const t = e.ctrlKey && $r() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function T0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (_r(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const $ = Yt(d), m = zc(d), P = p * Math.pow(2, m);
      r.scaleTo(n, P, $, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === ln.Vertical ? 0 : d.deltaX * f, h = o === ln.Horizontal ? 0 : d.deltaY * f;
    !$r() && d.shiftKey && o !== ln.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const v = Ai(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, v)), e.isPanScrolling && (l?.(d, v), e.panScrollTimeout = setTimeout(() => {
      u?.(d, v), e.isPanScrolling = !1;
    }, 150));
  };
}
function O0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = _r(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function D0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ai(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function V0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Ac(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ai(i.transform));
  };
}
function H0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Ac(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && N0(e.prevViewport, s.transform))) {
      const a = Ai(s.transform);
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
function L0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (_r(d, `${u}-flow__node`) || _r(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || _r(d, a) && d.type === "wheel" || _r(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function A0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = hc().clickDistance(!$n(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Bt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: Lr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), v = g.on("dblclick.zoom");
  f.wheelDelta(zc);
  function $(S, D) {
    return g ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? ro : Go).transform(es(g, D?.duration, D?.ease, () => b(!0)), S);
    }) : Promise.resolve(!1);
  }
  function m({ noWheelClassName: S, noPanClassName: D, onPaneContextMenu: b, userSelectionActive: k, panOnScroll: M, panOnDrag: L, panOnScrollMode: q, panOnScrollSpeed: O, preventScrolling: B, zoomOnPinch: W, zoomOnScroll: G, zoomOnDoubleClick: ee, zoomActivationKeyPressed: X, lib: pe, onTransformChange: re }) {
    k && !d.isZoomingOrPanning && P();
    const he = M && !X && !k ? T0({
      zoomPanValues: d,
      noWheelClassName: S,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: q,
      panOnScrollSpeed: O,
      zoomOnPinch: W,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : O0({
      noWheelClassName: S,
      preventScrolling: B,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", he, { passive: !1 }), !k) {
      const $e = D0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", $e);
      const ge = V0({
        zoomPanValues: d,
        panOnDrag: L,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: re
      });
      f.on("zoom", ge);
      const ie = H0({
        zoomPanValues: d,
        panOnDrag: L,
        panOnScroll: M,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const U = L0({
      zoomActivationKeyPressed: X,
      panOnDrag: L,
      zoomOnScroll: G,
      panOnScroll: M,
      zoomOnDoubleClick: ee,
      zoomOnPinch: W,
      userSelectionActive: k,
      noPanClassName: D,
      noWheelClassName: S,
      lib: pe
    });
    f.filter(U), ee ? g.on("dblclick.zoom", v) : g.on("dblclick.zoom", null);
  }
  function P() {
    f.on("zoom", null);
  }
  async function x(S, D, b) {
    const k = Qi(S), M = f?.constrain()(k, D, b);
    return M && await $(M), new Promise((L) => L(M));
  }
  async function C(S, D) {
    const b = Qi(S);
    return await $(b, D), new Promise((k) => k(b));
  }
  function _(S) {
    if (g) {
      const D = Qi(S), b = g.property("__zoom");
      (b.k !== S.zoom || b.x !== S.x || b.y !== S.y) && f?.transform(g, D, null, { sync: !0 });
    }
  }
  function T() {
    const S = g ? gc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: S.x, y: S.y, zoom: S.k };
  }
  function A(S, D) {
    return g ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? ro : Go).scaleTo(es(g, D?.duration, D?.ease, () => b(!0)), S);
    }) : Promise.resolve(!1);
  }
  function Z(S, D) {
    return g ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? ro : Go).scaleBy(es(g, D?.duration, D?.ease, () => b(!0)), S);
    }) : Promise.resolve(!1);
  }
  function F(S) {
    f?.scaleExtent(S);
  }
  function j(S) {
    f?.translateExtent(S);
  }
  function N(S) {
    const D = !$n(S) || S < 0 ? 0 : S;
    f?.clickDistance(D);
  }
  return {
    update: m,
    destroy: P,
    setViewport: C,
    setViewportConstrained: x,
    getViewport: T,
    scaleTo: A,
    scaleBy: Z,
    setScaleExtent: F,
    setTranslateExtent: j,
    syncViewport: _,
    setClickDistance: N
  };
}
var Sl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Sl || (Sl = {}));
var z0 = /* @__PURE__ */ Q("<div><!></div>");
function Yn(e, t) {
  de(t, !0);
  let n = w(t, "id", 7, null), r = w(t, "type", 7, "source"), o = w(t, "position", 23, () => be.Top), i = w(t, "style", 7), s = w(t, "class", 7), a = w(t, "isConnectable", 7), l = w(t, "isConnectableStart", 7, !0), u = w(t, "isConnectableEnd", 7, !0), d = w(t, "isValidConnection", 7), p = w(t, "onconnect", 7), f = w(t, "ondisconnect", 7), g = w(t, "children", 7), h = /* @__PURE__ */ je(t, [
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
  const v = Mn("svelteflow__node_id"), $ = Mn("svelteflow__node_connectable");
  let m = /* @__PURE__ */ E(() => r() === "target"), P = /* @__PURE__ */ E(() => a() !== void 0 ? a() : $.value), x = Jt(), C = /* @__PURE__ */ E(() => x.ariaLabelConfig), _ = null;
  gu(() => {
    if (p() || f()) {
      x.edges;
      let O = x.connectionLookup.get(`${v}-${r()}${n() ? `-${n()}` : ""}`);
      if (_ && !Rv(O, _)) {
        const B = O ?? /* @__PURE__ */ new Map();
        pl(_, B, f()), pl(B, _, p());
      }
      _ = new Map(O);
    }
  });
  let T = /* @__PURE__ */ E(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: O, toHandle: B, isValid: W } = x.connection, G = O && O.nodeId === v && O.type === r() && O.id === n(), ee = B && B.nodeId === v && B.type === r() && B.id === n(), X = x.connectionMode === Hr.Strict ? O?.type !== r() : v !== O?.nodeId || n() !== O?.id;
    return [
      !0,
      G,
      ee,
      X,
      ee && W
    ];
  }), A = /* @__PURE__ */ E(() => Co(c(T), 5)), Z = /* @__PURE__ */ E(() => c(A)[0]), F = /* @__PURE__ */ E(() => c(A)[1]), j = /* @__PURE__ */ E(() => c(A)[2]), N = /* @__PURE__ */ E(() => c(A)[3]), S = /* @__PURE__ */ E(() => c(A)[4]);
  function D(O) {
    const B = x.onbeforeconnect?.(O) ?? O;
    B && (x.addEdge(B), x.onconnect?.(O));
  }
  function b(O) {
    const B = Ec(O);
    (B && O.button === 0 || !B) && kl.onPointerDown(O, {
      handleId: n(),
      nodeId: v,
      isTarget: c(m),
      connectionRadius: x.connectionRadius,
      domNode: x.domNode,
      nodeLookup: x.nodeLookup,
      connectionMode: x.connectionMode,
      lib: "svelte",
      autoPanOnConnect: x.autoPanOnConnect,
      flowId: x.flowId,
      isValidConnection: d() ?? x.isValidConnection,
      updateConnection: x.updateConnection,
      cancelConnection: x.cancelConnection,
      panBy: x.panBy,
      onConnect: D,
      onConnectStart: (W, G) => {
        x.onconnectstart?.(W, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (W, G) => {
        x.onconnectend?.(W, G);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function k(O) {
    if (!v || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(O, { nodeId: v, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: v, type: r(), id: n() };
      return;
    }
    const B = kc(O.target), W = d() ?? x.isValidConnection, { connectionMode: G, clickConnectStartHandle: ee, flowId: X, nodeLookup: pe } = x, { connection: re, isValid: he } = kl.isValid(O, {
      handle: { nodeId: v, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: ee.nodeId,
      fromHandleId: ee.id ?? null,
      fromType: ee.type,
      isValidConnection: W,
      flowId: X,
      doc: B,
      lib: "svelte",
      nodeLookup: pe
    });
    he && re && D(re);
    const U = structuredClone(eu(x.connection));
    delete U.inProgress, U.toPosition = U.toHandle ? U.toHandle.position : null, x.onclickconnectend?.(O, U), x.clickConnectStartHandle = null;
  }
  var M = z0(), L = () => {
  };
  at(
    M,
    (O) => ({
      "data-handleid": n(),
      "data-nodeid": v,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${v ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
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
      onclick: x.clickConnect ? k : void 0,
      onkeypress: L,
      style: i(),
      role: "button",
      "aria-label": c(C)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [In]: O
    }),
    [
      () => ({
        valid: c(S),
        connectingto: c(j),
        connectingfrom: c(F),
        source: !c(m),
        target: c(m),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(P),
        connectionindicator: c(P) && (!c(Z) || c(N)) && (c(Z) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var q = R(M);
  return et(q, () => g() ?? ft), I(M), V(e, M), fe({
    get id() {
      return n();
    },
    set id(O = null) {
      n(O), y();
    },
    get type() {
      return r();
    },
    set type(O = "source") {
      r(O), y();
    },
    get position() {
      return o();
    },
    set position(O = be.Top) {
      o(O), y();
    },
    get style() {
      return i();
    },
    set style(O) {
      i(O), y();
    },
    get class() {
      return s();
    },
    set class(O) {
      s(O), y();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(O) {
      a(O), y();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(O = !0) {
      l(O), y();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(O = !0) {
      u(O), y();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(O) {
      d(O), y();
    },
    get onconnect() {
      return p();
    },
    set onconnect(O) {
      p(O), y();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(O) {
      f(O), y();
    },
    get children() {
      return g();
    },
    set children(O) {
      g(O), y();
    }
  });
}
se(
  Yn,
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
var I0 = /* @__PURE__ */ Q("<!> <!>", 1);
function ga(e, t) {
  de(t, !0);
  let n = w(t, "data", 7), r = w(t, "targetPosition", 23, () => be.Top), o = w(t, "sourcePosition", 23, () => be.Bottom);
  var i = I0(), s = ue(i);
  Yn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = z(s), l = z(a);
  return Yn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), Ne(() => Fe(a, ` ${n()?.label ?? ""} `)), V(e, i), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = be.Top) {
      r(u), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u = be.Bottom) {
      o(u), y();
    }
  });
}
se(ga, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var R0 = /* @__PURE__ */ Q(" <!>", 1);
function Ic(e, t) {
  de(t, !0);
  let n = w(t, "data", 23, () => ({ label: "Node" })), r = w(t, "sourcePosition", 23, () => be.Bottom);
  Ce();
  var o = R0(), i = ue(o), s = z(i);
  return Yn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), Ne(() => Fe(i, `${n()?.label ?? ""} `)), V(e, o), fe({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), y();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = be.Bottom) {
      r(a), y();
    }
  });
}
se(Ic, { data: {}, sourcePosition: {} }, [], [], !0);
var q0 = /* @__PURE__ */ Q(" <!>", 1);
function Rc(e, t) {
  de(t, !0);
  let n = w(t, "data", 23, () => ({ label: "Node" })), r = w(t, "targetPosition", 23, () => be.Top);
  Ce();
  var o = q0(), i = ue(o), s = z(i);
  return Yn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), Ne(() => Fe(i, `${n()?.label ?? ""} `)), V(e, o), fe({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), y();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = be.Top) {
      r(a), y();
    }
  });
}
se(Rc, { data: {}, targetPosition: {} }, [], [], !0);
function qc(e, t) {
}
se(qc, {}, [], [], !0);
function ts(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Bc(e, t) {
  const n = /* @__PURE__ */ E(Jt), r = /* @__PURE__ */ E(() => c(n).domNode);
  let o;
  return c(r) ? ts(e, c(r), t) : o = js(() => {
    ot(() => {
      ts(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      ts(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Zc() {
  let e = /* @__PURE__ */ Te(typeof window > "u");
  if (c(e)) {
    const t = js(() => {
      ot(() => {
        Y(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const El = (e) => Bv(e), B0 = (e) => mc(e);
function fn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const mi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Z0 = /* @__PURE__ */ Q("<div><!></div>");
const K0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function Kc(e, t) {
  de(t, !0), Ke(e, K0);
  let n = w(t, "x", 7, 0), r = w(t, "y", 7, 0), o = w(t, "width", 7), i = w(t, "height", 7), s = w(t, "selectEdgeOnClick", 7, !1), a = w(t, "transparent", 7, !1), l = w(t, "class", 7), u = w(t, "children", 7), d = /* @__PURE__ */ je(t, [
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
  const p = Jt(), f = Mn("svelteflow__edge_id");
  let g = /* @__PURE__ */ E(() => p.visible.edges.get(f)?.zIndex);
  var h = Z0(), v = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  at(
    h,
    (m) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: v,
      ...d,
      [rn]: m
    }),
    [
      () => ({
        display: Zc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: fn(o()),
        height: fn(i()),
        "z-index": c(g)
      })
    ],
    "svelte-w2n27y"
  );
  var $ = R(h);
  return et($, () => u() ?? ft), I(h), ht(h, (m, P) => Bc?.(m, P), () => "edge-labels"), V(e, h), fe({
    get x() {
      return n();
    },
    set x(m = 0) {
      n(m), y();
    },
    get y() {
      return r();
    },
    set y(m = 0) {
      r(m), y();
    },
    get width() {
      return o();
    },
    set width(m) {
      o(m), y();
    },
    get height() {
      return i();
    },
    set height(m) {
      i(m), y();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(m = !1) {
      s(m), y();
    },
    get transparent() {
      return a();
    },
    set transparent(m = !1) {
      a(m), y();
    },
    get class() {
      return l();
    },
    set class(m) {
      l(m), y();
    },
    get children() {
      return u();
    },
    set children(m) {
      u(m), y();
    }
  });
}
se(
  Kc,
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
var j0 = /* @__PURE__ */ we("<path></path>"), Y0 = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Do(e, t) {
  de(t, !0);
  let n = w(t, "id", 7), r = w(t, "path", 7), o = w(t, "label", 7), i = w(t, "labelX", 7), s = w(t, "labelY", 7), a = w(t, "labelStyle", 7), l = w(t, "markerStart", 7), u = w(t, "markerEnd", 7), d = w(t, "style", 7), p = w(t, "interactionWidth", 7, 20), f = w(t, "class", 7), g = /* @__PURE__ */ je(t, [
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
  var h = Y0(), v = ue(h), $ = z(v);
  {
    var m = (C) => {
      var _ = j0();
      at(_, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), V(C, _);
    };
    ce($, (C) => {
      p() > 0 && C(m);
    });
  }
  var P = z($);
  {
    var x = (C) => {
      Kc(C, {
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
        children: (_, T) => {
          Ce();
          var A = Me();
          Ne(() => Fe(A, o())), V(_, A);
        },
        $$slots: { default: !0 }
      });
    };
    ce(P, (C) => {
      o() && C(x);
    });
  }
  return Ne(() => {
    xe(v, "id", n()), xe(v, "d", r()), Tt(v, 0, Ln(["svelte-flow__edge-path", f()])), xe(v, "marker-start", l()), xe(v, "marker-end", u()), Ct(v, d());
  }), V(e, h), fe({
    get id() {
      return n();
    },
    set id(C) {
      n(C), y();
    },
    get path() {
      return r();
    },
    set path(C) {
      r(C), y();
    },
    get label() {
      return o();
    },
    set label(C) {
      o(C), y();
    },
    get labelX() {
      return i();
    },
    set labelX(C) {
      i(C), y();
    },
    get labelY() {
      return s();
    },
    set labelY(C) {
      s(C), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(C) {
      a(C), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(C) {
      l(C), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(C) {
      u(C), y();
    },
    get style() {
      return d();
    },
    set style(C) {
      d(C), y();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(C = 20) {
      p(C), y();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), y();
    }
  });
}
se(
  Do,
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
function ha(e, t) {
  de(t, !0);
  let n = w(t, "id", 7), r = w(t, "interactionWidth", 7), o = w(t, "label", 7), i = w(t, "labelStyle", 7), s = w(t, "markerEnd", 7), a = w(t, "markerStart", 7), l = w(t, "pathOptions", 7), u = w(t, "sourcePosition", 7), d = w(t, "sourceX", 7), p = w(t, "sourceY", 7), f = w(t, "style", 7), g = w(t, "targetPosition", 7), h = w(t, "targetX", 7), v = w(t, "targetY", 7), $ = /* @__PURE__ */ E(() => Pc({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: v(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), m = /* @__PURE__ */ E(() => Co(c($), 3)), P = /* @__PURE__ */ E(() => c(m)[0]), x = /* @__PURE__ */ E(() => c(m)[1]), C = /* @__PURE__ */ E(() => c(m)[2]);
  return Do(e, {
    get id() {
      return n();
    },
    get path() {
      return c(P);
    },
    get labelX() {
      return c(x);
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
  }), fe({
    get id() {
      return n();
    },
    set id(_) {
      n(_), y();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(_) {
      r(_), y();
    },
    get label() {
      return o();
    },
    set label(_) {
      o(_), y();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(_) {
      i(_), y();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), y();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), y();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(_) {
      l(_), y();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(_) {
      u(_), y();
    },
    get sourceX() {
      return d();
    },
    set sourceX(_) {
      d(_), y();
    },
    get sourceY() {
      return p();
    },
    set sourceY(_) {
      p(_), y();
    },
    get style() {
      return f();
    },
    set style(_) {
      f(_), y();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(_) {
      g(_), y();
    },
    get targetX() {
      return h();
    },
    set targetX(_) {
      h(_), y();
    },
    get targetY() {
      return v();
    },
    set targetY(_) {
      v(_), y();
    }
  });
}
se(
  ha,
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
function jc(e, t) {
  de(t, !0);
  let n = w(t, "interactionWidth", 7), r = w(t, "label", 7), o = w(t, "labelStyle", 7), i = w(t, "style", 7), s = w(t, "markerEnd", 7), a = w(t, "markerStart", 7), l = w(t, "sourcePosition", 7), u = w(t, "sourceX", 7), d = w(t, "sourceY", 7), p = w(t, "targetPosition", 7), f = w(t, "targetX", 7), g = w(t, "targetY", 7), h = /* @__PURE__ */ E(() => ca({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), v = /* @__PURE__ */ E(() => Co(c(h), 3)), $ = /* @__PURE__ */ E(() => c(v)[0]), m = /* @__PURE__ */ E(() => c(v)[1]), P = /* @__PURE__ */ E(() => c(v)[2]);
  return Do(e, {
    get path() {
      return c($);
    },
    get labelX() {
      return c(m);
    },
    get labelY() {
      return c(P);
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
  }), fe({
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), y();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), y();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), y();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), y();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), y();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), y();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), y();
    },
    get sourceX() {
      return u();
    },
    set sourceX(x) {
      u(x), y();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), y();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(x) {
      p(x), y();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), y();
    },
    get targetY() {
      return g();
    },
    set targetY(x) {
      g(x), y();
    }
  });
}
se(
  jc,
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
function Yc(e, t) {
  de(t, !0);
  let n = w(t, "sourceX", 7), r = w(t, "sourceY", 7), o = w(t, "targetX", 7), i = w(t, "targetY", 7), s = w(t, "label", 7), a = w(t, "labelStyle", 7), l = w(t, "markerStart", 7), u = w(t, "markerEnd", 7), d = w(t, "interactionWidth", 7), p = w(t, "style", 7), f = /* @__PURE__ */ E(() => Mc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ E(() => Co(c(f), 3)), h = /* @__PURE__ */ E(() => c(g)[0]), v = /* @__PURE__ */ E(() => c(g)[1]), $ = /* @__PURE__ */ E(() => c(g)[2]);
  return Do(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(v);
    },
    get labelY() {
      return c($);
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
      return p();
    }
  }), fe({
    get sourceX() {
      return n();
    },
    set sourceX(m) {
      n(m), y();
    },
    get sourceY() {
      return r();
    },
    set sourceY(m) {
      r(m), y();
    },
    get targetX() {
      return o();
    },
    set targetX(m) {
      o(m), y();
    },
    get targetY() {
      return i();
    },
    set targetY(m) {
      i(m), y();
    },
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(m) {
      l(m), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(m) {
      u(m), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), y();
    },
    get style() {
      return p();
    },
    set style(m) {
      p(m), y();
    }
  });
}
se(
  Yc,
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
function Fc(e, t) {
  de(t, !0);
  let n = w(t, "sourceX", 7), r = w(t, "sourceY", 7), o = w(t, "sourcePosition", 7), i = w(t, "targetX", 7), s = w(t, "targetY", 7), a = w(t, "targetPosition", 7), l = w(t, "label", 7), u = w(t, "labelStyle", 7), d = w(t, "markerStart", 7), p = w(t, "markerEnd", 7), f = w(t, "interactionWidth", 7), g = w(t, "style", 7), h = /* @__PURE__ */ E(() => ca({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), v = /* @__PURE__ */ E(() => Co(c(h), 3)), $ = /* @__PURE__ */ E(() => c(v)[0]), m = /* @__PURE__ */ E(() => c(v)[1]), P = /* @__PURE__ */ E(() => c(v)[2]);
  return Do(e, {
    get path() {
      return c($);
    },
    get labelX() {
      return c(m);
    },
    get labelY() {
      return c(P);
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
      return p();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return g();
    }
  }), fe({
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), y();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), y();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), y();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), y();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), y();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), y();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(x) {
      u(x), y();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), y();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(x) {
      p(x), y();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), y();
    },
    get style() {
      return g();
    },
    set style(x) {
      g(x), y();
    }
  });
}
se(
  Fc,
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
function F0(e) {
  let t = 0, n = lr(0), r;
  return () => {
    du() && (c(n), So(() => (t === 0 && (r = dt(() => e(() => Fo(n)))), t += 1, () => {
      wp().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class W0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = F0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const X0 = /\(.+\)/, U0 = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class G0 extends W0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = X0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => U0.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ds(o, "change", i)
    );
  }
}
function J0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return la(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Pl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: v, transform: $, width: m, height: P } = e;
      if (t0({
        sourceNode: p,
        targetNode: f,
        width: m,
        height: P,
        transform: $
      }))
        v.set(p.id, p), v.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      u.set(d.id, g);
      continue;
    }
    const h = l0({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    h && u.set(d.id, {
      ...n,
      ...d,
      ...h,
      zIndex: e0({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: p,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: p,
      targetNode: f,
      edge: d
    });
  }
  return u;
}
const Wc = {
  input: Ic,
  output: Rc,
  default: ga,
  group: qc
}, Xc = {
  straight: Yc,
  smoothstep: jc,
  default: ha,
  step: Fc
};
function Q0(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = To(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return ua(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function em(e) {
  class t {
    #t = /* @__PURE__ */ E(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      Y(this.#t, r);
    }
    #e = /* @__PURE__ */ Te(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      Y(this.#e, r);
    }
    #n = /* @__PURE__ */ Te(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      Y(this.#n, r);
    }
    #r = /* @__PURE__ */ Te(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      Y(this.#r, r);
    }
    #o = /* @__PURE__ */ Te(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      Y(this.#o, r);
    }
    #i = /* @__PURE__ */ E(() => {
      const r = p0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#i);
    }
    set nodesInitialized(r) {
      Y(this.#i, r);
    }
    #s = /* @__PURE__ */ E(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      Y(this.#s, r);
    }
    #a = /* @__PURE__ */ E(() => (w0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      Y(this.#a, r);
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
    #l = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      Y(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ E(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      Y(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ E(() => {
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
      let p, f;
      const g = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (u) {
        const { viewport: h, width: v, height: $ } = this, m = [h.x, h.y, h.zoom];
        p = J0(s, m, v, $), f = Pl({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: m,
          width: v,
          height: $
        });
      } else
        p = this.nodeLookup, f = Pl(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      Y(this.#c, r);
    }
    #d = /* @__PURE__ */ E(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      Y(this.#d, r);
    }
    #f = /* @__PURE__ */ E(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      Y(this.#f, r);
    }
    #p = /* @__PURE__ */ E(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      Y(this.#p, r);
    }
    #g = /* @__PURE__ */ E(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#g);
    }
    set nodesFocusable(r) {
      Y(this.#g, r);
    }
    #h = /* @__PURE__ */ E(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      Y(this.#h, r);
    }
    #v = /* @__PURE__ */ E(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      Y(this.#v, r);
    }
    #m = /* @__PURE__ */ E(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      Y(this.#m, r);
    }
    #y = /* @__PURE__ */ E(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      Y(this.#y, r);
    }
    #w = /* @__PURE__ */ E(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      Y(this.#w, r);
    }
    #b = /* @__PURE__ */ E(() => e.props.nodeExtent ?? xs);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      Y(this.#b, r);
    }
    #x = /* @__PURE__ */ E(() => e.props.translateExtent ?? xs);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      Y(this.#x, r);
    }
    #C = /* @__PURE__ */ E(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#C);
    }
    set defaultEdgeOptions(r) {
      Y(this.#C, r);
    }
    #$ = /* @__PURE__ */ E(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#$);
    }
    set nodeDragThreshold(r) {
      Y(this.#$, r);
    }
    #_ = /* @__PURE__ */ E(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#_);
    }
    set autoPanOnNodeDrag(r) {
      Y(this.#_, r);
    }
    #k = /* @__PURE__ */ E(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      Y(this.#k, r);
    }
    #S = /* @__PURE__ */ E(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Y(this.#S, r);
    }
    #E = /* @__PURE__ */ E(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      Y(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ E(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      Y(this.#P, r);
    }
    #N = /* @__PURE__ */ Te(!1);
    get dragging() {
      return c(this.#N);
    }
    set dragging(r) {
      Y(this.#N, r);
    }
    #M = /* @__PURE__ */ Te(null);
    get selectionRect() {
      return c(this.#M);
    }
    set selectionRect(r) {
      Y(this.#M, r);
    }
    #T = /* @__PURE__ */ Te(!1);
    get selectionKeyPressed() {
      return c(this.#T);
    }
    set selectionKeyPressed(r) {
      Y(this.#T, r);
    }
    #O = /* @__PURE__ */ Te(!1);
    get multiselectionKeyPressed() {
      return c(this.#O);
    }
    set multiselectionKeyPressed(r) {
      Y(this.#O, r);
    }
    #D = /* @__PURE__ */ Te(!1);
    get deleteKeyPressed() {
      return c(this.#D);
    }
    set deleteKeyPressed(r) {
      Y(this.#D, r);
    }
    #V = /* @__PURE__ */ Te(!1);
    get panActivationKeyPressed() {
      return c(this.#V);
    }
    set panActivationKeyPressed(r) {
      Y(this.#V, r);
    }
    #H = /* @__PURE__ */ Te(!1);
    get zoomActivationKeyPressed() {
      return c(this.#H);
    }
    set zoomActivationKeyPressed(r) {
      Y(this.#H, r);
    }
    #L = /* @__PURE__ */ Te(null);
    get selectionRectMode() {
      return c(this.#L);
    }
    set selectionRectMode(r) {
      Y(this.#L, r);
    }
    #A = /* @__PURE__ */ Te("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      Y(this.#A, r);
    }
    #z = /* @__PURE__ */ E(() => e.props.selectionMode ?? gi.Partial);
    get selectionMode() {
      return c(this.#z);
    }
    set selectionMode(r) {
      Y(this.#z, r);
    }
    #I = /* @__PURE__ */ E(() => ({ ...Wc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      Y(this.#I, r);
    }
    #R = /* @__PURE__ */ E(() => ({ ...Xc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      Y(this.#R, r);
    }
    #q = /* @__PURE__ */ E(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#q);
    }
    set noPanClass(r) {
      Y(this.#q, r);
    }
    #B = /* @__PURE__ */ E(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#B);
    }
    set noDragClass(r) {
      Y(this.#B, r);
    }
    #Z = /* @__PURE__ */ E(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      Y(this.#Z, r);
    }
    #K = /* @__PURE__ */ E(() => Gv(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#K);
    }
    set ariaLabelConfig(r) {
      Y(this.#K, r);
    }
    #j = /* @__PURE__ */ Te(Q0(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#j);
    }
    set _viewport(r) {
      Y(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Te(
      // _connection is viewport independent and originating from XYHandle
      Cs
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      Y(this.#Y, r);
    }
    #F = /* @__PURE__ */ E(() => this._connection.inProgress ? {
      ...this._connection,
      to: Oo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#F);
    }
    set connection(r) {
      Y(this.#F, r);
    }
    #W = /* @__PURE__ */ E(() => e.props.connectionMode ?? Hr.Strict);
    get connectionMode() {
      return c(this.#W);
    }
    set connectionMode(r) {
      Y(this.#W, r);
    }
    #X = /* @__PURE__ */ E(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#X);
    }
    set connectionRadius(r) {
      Y(this.#X, r);
    }
    #U = /* @__PURE__ */ E(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      Y(this.#U, r);
    }
    #G = /* @__PURE__ */ E(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      Y(this.#G, r);
    }
    #J = /* @__PURE__ */ E(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#J);
    }
    set defaultMarkerColor(r) {
      Y(this.#J, r);
    }
    #Q = /* @__PURE__ */ E(() => u0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      Y(this.#Q, r);
    }
    #ee = /* @__PURE__ */ E(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      Y(this.#ee, r);
    }
    #te = /* @__PURE__ */ E(() => e.props.onflowerror ?? Cc);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      Y(this.#te, r);
    }
    #ne = /* @__PURE__ */ E(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      Y(this.#ne, r);
    }
    #re = /* @__PURE__ */ E(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      Y(this.#re, r);
    }
    #oe = /* @__PURE__ */ E(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      Y(this.#oe, r);
    }
    #ie = /* @__PURE__ */ E(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      Y(this.#ie, r);
    }
    #se = /* @__PURE__ */ E(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      Y(this.#se, r);
    }
    #ae = /* @__PURE__ */ E(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      Y(this.#ae, r);
    }
    #le = /* @__PURE__ */ E(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      Y(this.#le, r);
    }
    #ue = /* @__PURE__ */ E(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      Y(this.#ue, r);
    }
    #ce = /* @__PURE__ */ E(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      Y(this.#ce, r);
    }
    #de = /* @__PURE__ */ E(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      Y(this.#de, r);
    }
    #fe = /* @__PURE__ */ E(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      Y(this.#fe, r);
    }
    #pe = /* @__PURE__ */ E(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      Y(this.#pe, r);
    }
    #ge = /* @__PURE__ */ E(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      Y(this.#ge, r);
    }
    #he = /* @__PURE__ */ Te(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      Y(this.#he, r);
    }
    #ve = /* @__PURE__ */ E(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      Y(this.#ve, r);
    }
    #me = /* @__PURE__ */ E(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      Y(this.#me, r);
    }
    #ye = /* @__PURE__ */ E(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      Y(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Yv(
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
    _prefersDark = new G0("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ E(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      Y(this.#we, r);
    }
    constructor() {
      process.env.NODE_ENV === "development" && (Nl(e.nodes, "nodes"), Nl(e.edges, "edges"));
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Cs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Nl(e, t) {
  try {
    e && e.length > 0 && structuredClone(e[0]);
  } catch {
    console.warn(`Use $state.raw for ${t} to prevent performance issues.`);
  }
}
function tm(e) {
  const t = Mn(yo);
  if (!t)
    throw new Error(`In order to use ${e}() you need to wrap your component in a <SvelteFlowProvider />`);
  if (t.provider && typeof window == "object" && !du())
    throw new Error(`Use $derived(${e}()) to receive updates when values change.`);
}
function Jt() {
  const e = Mn(yo);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return process.env.NODE_ENV === "development" && tm("useStore"), e.getStore();
}
const yo = Symbol();
function Uc(e) {
  const t = em(e);
  function n(N) {
    t.nodeTypes = {
      ...Wc,
      ...N
    };
  }
  function r(N) {
    t.edgeTypes = {
      ...Xc,
      ...N
    };
  }
  function o(N) {
    t.edges = o0(N, t.edges);
  }
  const i = (N, S = !1) => {
    t.nodes = t.nodes.map((D) => {
      const b = N.get(D.id);
      return b ? { ...D, position: b.position, dragging: S } : D;
    });
  };
  function s(N) {
    const { changes: S, updatedInternals: D } = m0(N, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!D)
      return;
    f0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const k of S) {
      const M = t.nodeLookup.get(k.id)?.internals.userNode;
      if (!M)
        continue;
      const L = { ...M };
      switch (k.type) {
        case "dimensions": {
          const q = { ...L.measured, ...k.dimensions };
          k.setAttributes && (L.width = k.dimensions?.width ?? L.width, L.height = k.dimensions?.height ?? L.height), L.measured = q;
          break;
        }
        case "position":
          L.position = k.position ?? L.position;
          break;
      }
      b.set(k.id, L);
    }
    t.nodes = t.nodes.map((k) => b.get(k.id) ?? k);
  }
  function a(N) {
    const S = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = N, t.fitViewResolver = S, t.nodes = [...t.nodes], S.promise;
  }
  async function l(N, S, D) {
    const b = typeof D?.zoom < "u" ? D.zoom : t.maxZoom, k = t.panZoom;
    return k ? (await k.setViewport({
      x: t.width / 2 - N * b,
      y: t.height / 2 - S * b,
      zoom: b
    }, { duration: D?.duration, ease: D?.ease, interpolate: D?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(N, S) {
    const D = t.panZoom;
    return D ? D.scaleBy(N, S) : Promise.resolve(!1);
  }
  function d(N) {
    return u(1.2, N);
  }
  function p(N) {
    return u(1 / 1.2, N);
  }
  function f(N) {
    const S = t.panZoom;
    S && (S.setScaleExtent([N, t.maxZoom]), t.minZoom = N);
  }
  function g(N) {
    const S = t.panZoom;
    S && (S.setScaleExtent([t.minZoom, N]), t.maxZoom = N);
  }
  function h(N) {
    const S = t.panZoom;
    S && (S.setTranslateExtent(N), t.translateExtent = N);
  }
  function v(N) {
    t.panZoom?.setClickDistance(N);
  }
  function $(N, S = null) {
    let D = !1;
    const b = N.map((k) => (!S || S.has(k.id)) && k.selected ? (D = !0, { ...k, selected: !1 }) : k);
    return [D, b];
  }
  function m(N) {
    const S = N?.nodes ? new Set(N.nodes.map((q) => q.id)) : null, [D, b] = $(t.nodes, S);
    D && (t.nodes = b);
    const k = N?.edges ? new Set(N.edges.map((q) => q.id)) : null, [M, L] = $(t.edges, k);
    M && (t.edges = L);
  }
  function P(N) {
    const S = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((D) => {
      const b = N.includes(D.id), k = S && D.selected || b;
      if (D.selected !== k) {
        const M = t.nodeLookup.get(D.id);
        return M && (M.selected = k), D.selected = k, { ...D };
      }
      return D;
    }), S || m({ nodes: [] });
  }
  function x(N) {
    const S = t.multiselectionKeyPressed;
    t.edges = t.edges.map((D) => {
      const b = N.includes(D.id), k = S && D.selected || b;
      return D.selected !== k ? { ...D, selected: k } : D;
    }), S || m({ edges: [] });
  }
  function C(N, S, D) {
    const b = t.nodeLookup.get(N);
    if (!b) {
      console.warn("012", dr.error012(N));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (S || b.selected && t.multiselectionKeyPressed) && (m({ nodes: [b], edges: [] }), requestAnimationFrame(() => D?.blur())) : P([N]);
  }
  function _(N) {
    const S = t.edgeLookup.get(N);
    if (!S) {
      console.warn("012", dr.error012(N));
      return;
    }
    (S.selectable || t.elementsSelectable && typeof S.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, S.selected ? S.selected && t.multiselectionKeyPressed && m({ nodes: [], edges: [S] }) : x([N]));
  }
  function T(N, S) {
    const { nodeExtent: D, snapGrid: b, nodeOrigin: k, nodeLookup: M, nodesDraggable: L, onerror: q } = t, O = /* @__PURE__ */ new Map(), B = b?.[0] ?? 5, W = b?.[1] ?? 5, G = N.x * B * S, ee = N.y * W * S;
    for (const X of M.values()) {
      if (!(X.selected && (X.draggable || L && typeof X.draggable > "u")))
        continue;
      let pe = {
        x: X.internals.positionAbsolute.x + G,
        y: X.internals.positionAbsolute.y + ee
      };
      b && (pe = Li(pe, b));
      const { position: re, positionAbsolute: he } = yc({
        nodeId: X.id,
        nextPosition: pe,
        nodeLookup: M,
        nodeExtent: D,
        nodeOrigin: k,
        onError: q
      });
      X.position = re, X.internals.positionAbsolute = he, O.set(X.id, X);
    }
    i(O);
  }
  function A(N) {
    return y0({
      delta: N,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const Z = (N) => {
    t._connection = { ...N };
  };
  function F() {
    t._connection = Cs;
  }
  function j() {
    t.resetStoreValues(), m();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: p,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: h,
    setPaneClickDistance: v,
    unselectNodesAndEdges: m,
    addSelectedNodes: P,
    addSelectedEdges: x,
    handleNodeSelection: C,
    handleEdgeSelection: _,
    moveSelectedNodes: T,
    panBy: A,
    updateConnection: Z,
    cancelConnection: F,
    reset: j
  });
}
function nm(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = A0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: u,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: p
  }), h = g.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), d(g), g.update(t), {
    update(v) {
      g.update(v);
    }
  };
}
var rm = /* @__PURE__ */ Q('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Gc(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "panOnScrollMode", 23, () => ln.Free), o = w(t, "preventScrolling", 7, !0), i = w(t, "zoomOnScroll", 7, !0), s = w(t, "zoomOnDoubleClick", 7, !0), a = w(t, "zoomOnPinch", 7, !0), l = w(t, "panOnDrag", 7, !0), u = w(t, "panOnScroll", 7, !1), d = w(t, "paneClickDistance", 7, 1), p = w(t, "onmovestart", 7), f = w(t, "onmove", 7), g = w(t, "onmoveend", 7), h = w(t, "oninit", 7), v = w(t, "children", 7), $ = /* @__PURE__ */ E(() => n().panActivationKeyPressed || l()), m = /* @__PURE__ */ E(() => n().panActivationKeyPressed || u());
  const { viewport: P } = n();
  let x = !1;
  ot(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var C = rm(), _ = R(C);
  return et(_, v), I(C), ht(C, (T, A) => nm?.(T, A), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: P,
    onDraggingChange: (T) => {
      n(n().dragging = T, !0);
    },
    setPanZoomInstance: (T) => {
      n(n().panZoom = T, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(m),
    panOnDrag: c($),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || ln.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (T) => {
      n(n().viewport = { x: T[0], y: T[1], zoom: T[2] }, !0);
    }
  })), V(e, C), fe({
    get store() {
      return n();
    },
    set store(T) {
      n(T), y();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(T = ln.Free) {
      r(T), y();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(T = !0) {
      o(T), y();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(T = !0) {
      i(T), y();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(T = !0) {
      s(T), y();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(T = !0) {
      a(T), y();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(T = !0) {
      l(T), y();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(T = !1) {
      u(T), y();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(T = 1) {
      d(T), y();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(T) {
      p(T), y();
    },
    get onmove() {
      return f();
    },
    set onmove(T) {
      f(T), y();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(T) {
      g(T), y();
    },
    get oninit() {
      return h();
    },
    set oninit(T) {
      h(T), y();
    },
    get children() {
      return v();
    },
    set children(T) {
      v(T), y();
    }
  });
}
se(
  Gc,
  {
    store: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
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
function Ml(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Tl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Ol(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var om = /* @__PURE__ */ Q("<div><!></div>");
function Jc(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "panOnDrag", 7, !0), o = w(t, "selectionOnDrag", 7), i = w(t, "onpaneclick", 7), s = w(t, "onpanecontextmenu", 7), a = w(t, "onselectionstart", 7), l = w(t, "onselectionend", 7), u = w(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ E(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ E(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), $ = /* @__PURE__ */ E(() => n().elementsSelectable && (c(v) || n().selectionRectMode === "user")), m = !1;
  function P(S) {
    if (m || n().connection.inProgress) {
      m = !1;
      return;
    }
    i()?.({ event: S }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(S) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(v) || S.button !== 0 || S.target !== d || !p)
      return;
    S.target?.setPointerCapture?.(S.pointerId);
    const { x: D, y: b } = on(S, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: D, startY: b, x: D, y: b }, !0), a()?.(S);
  }
  function C(S) {
    if (!c(v) || !p || !n().selectionRect)
      return;
    m = !0;
    const D = on(S, p), { startX: b = 0, startY: k = 0 } = n().selectionRect, M = {
      ...n().selectionRect,
      x: D.x < b ? D.x : b,
      y: D.y < k ? D.y : k,
      width: Math.abs(D.x - b),
      height: Math.abs(D.y - k)
    }, L = f, q = g;
    f = new Set(la(
      n().nodeLookup,
      M,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === gi.Partial,
      !0
    ).map((B) => B.id));
    const O = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const B of f) {
      const W = n().connectionLookup.get(B);
      if (W)
        for (const { edgeId: G } of W.values()) {
          const ee = n().edgeLookup.get(G);
          ee && (ee.selectable ?? O) && g.add(G);
        }
    }
    Ol(L, f) || n(n().nodes = n().nodes.map(Tl(f)), !0), Ol(q, g) || n(n().edges = n().edges.map(Tl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = M, !0);
  }
  function _(S) {
    S.button === 0 && (S.target?.releasePointerCapture?.(S.pointerId), !c(v) && n().selectionRectMode === "user" && S.target === d && P?.(S), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (m = !1), l()?.(S));
  }
  const T = (S) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      S.preventDefault();
      return;
    }
    s()?.({ event: S });
  };
  var A = om();
  let Z;
  var F = /* @__PURE__ */ E(() => c($) ? void 0 : Ml(P, d));
  A.__click = function(...S) {
    c(F)?.apply(this, S);
  }, A.__pointerdown = function(...S) {
    (c($) ? x : void 0)?.apply(this, S);
  }, A.__pointermove = function(...S) {
    (c($) ? C : void 0)?.apply(this, S);
  }, A.__pointerup = function(...S) {
    (c($) ? _ : void 0)?.apply(this, S);
  };
  var j = /* @__PURE__ */ E(() => Ml(T, d));
  A.__contextmenu = function(...S) {
    c(j)?.apply(this, S);
  };
  var N = R(A);
  return et(N, u), I(A), Kt(A, (S) => d = S, () => d), Ne((S) => Z = Tt(A, 1, "svelte-flow__pane svelte-flow__container", null, Z, S), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(v)
    })
  ]), V(e, A), fe({
    get store() {
      return n();
    },
    set store(S) {
      n(S), y();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(S = !0) {
      r(S), y();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(S) {
      o(S), y();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(S) {
      i(S), y();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(S) {
      s(S), y();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(S) {
      a(S), y();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(S) {
      l(S), y();
    },
    get children() {
      return u();
    },
    set children(S) {
      u(S), y();
    }
  });
}
Un([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
se(
  Jc,
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
var im = /* @__PURE__ */ Q('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Qc(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "children", 7);
  var o = im();
  let i;
  var s = R(o);
  return et(s, r), I(o), Ne((a) => i = Ct(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), V(e, o), fe({
    get store() {
      return n();
    },
    set store(a) {
      n(a), y();
    },
    get children() {
      return r();
    },
    set children(a) {
      r(a), y();
    }
  });
}
se(Qc, { store: {}, children: {} }, [], [], !0);
function ed(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = C0({
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
var sm = /* @__PURE__ */ Q('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), am = /* @__PURE__ */ Q('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const lm = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function td(e, t) {
  de(t, !0), Ke(e, lm);
  let n = w(t, "store", 7);
  var r = am(), o = ue(r), i = R(o, !0);
  I(o);
  var s = z(o, 2), a = R(s, !0);
  I(s);
  var l = z(s, 2);
  {
    var u = (d) => {
      var p = sm(), f = R(p, !0);
      I(p), Ne(() => {
        xe(p, "id", `${um}-${n().flowId}`), Fe(f, n().ariaLiveMessage);
      }), V(d, p);
    };
    ce(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return Ne(() => {
    xe(o, "id", `${nd}-${n().flowId}`), Fe(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), xe(s, "id", `${rd}-${n().flowId}`), Fe(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, r), fe({
    get store() {
      return n();
    },
    set store(d) {
      n(d), y();
    }
  });
}
se(td, { store: {} }, [], [], !0);
const nd = "svelte-flow__node-desc", rd = "svelte-flow__edge-desc", um = "svelte-flow__aria-live";
var cm = /* @__PURE__ */ Q("<div><!></div>");
function od(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "node", 7), o = w(t, "resizeObserver", 7), i = w(t, "nodeClickDistance", 7), s = w(t, "onnodeclick", 7), a = w(t, "onnodedrag", 7), l = w(t, "onnodedragstart", 7), u = w(t, "onnodedragstop", 7), d = w(t, "onnodepointerenter", 7), p = w(t, "onnodepointerleave", 7), f = w(t, "onnodepointermove", 7), g = w(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ E(() => wt(r().data, () => ({}), !0)), v = /* @__PURE__ */ E(() => wt(r().selected, !1)), $ = /* @__PURE__ */ E(() => r().draggable), m = /* @__PURE__ */ E(() => r().selectable), P = /* @__PURE__ */ E(() => wt(r().deletable, !0)), x = /* @__PURE__ */ E(() => r().connectable), C = /* @__PURE__ */ E(() => r().focusable), _ = /* @__PURE__ */ E(() => wt(r().hidden, !1)), T = /* @__PURE__ */ E(() => wt(r().dragging, !1)), A = /* @__PURE__ */ E(() => wt(r().style, "")), Z = /* @__PURE__ */ E(() => r().class), F = /* @__PURE__ */ E(() => wt(r().type, "default")), j = /* @__PURE__ */ E(() => r().parentId), N = /* @__PURE__ */ E(() => r().sourcePosition), S = /* @__PURE__ */ E(() => r().targetPosition), D = /* @__PURE__ */ E(() => wt(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ E(() => wt(r().measured, () => ({ width: 0, height: 0 }), !0).height), k = /* @__PURE__ */ E(() => r().initialWidth), M = /* @__PURE__ */ E(() => r().initialHeight), L = /* @__PURE__ */ E(() => r().width), q = /* @__PURE__ */ E(() => r().height), O = /* @__PURE__ */ E(() => r().dragHandle), B = /* @__PURE__ */ E(() => wt(r().internals.z, 0)), W = /* @__PURE__ */ E(() => r().internals.positionAbsolute.x), G = /* @__PURE__ */ E(() => r().internals.positionAbsolute.y), ee = /* @__PURE__ */ E(() => r().internals.userNode), { id: X } = r(), pe = /* @__PURE__ */ E(() => c($) ?? n().nodesDraggable), re = /* @__PURE__ */ E(() => c(m) ?? n().elementsSelectable), he = /* @__PURE__ */ E(() => c(x) ?? n().nodesConnectable), U = /* @__PURE__ */ E(() => $c(r())), $e = /* @__PURE__ */ E(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ E(() => c(U) && c($e)), ie = /* @__PURE__ */ E(() => c(C) ?? n().nodesFocusable);
  function ne(ve) {
    return n().parentLookup.has(ve);
  }
  let le = /* @__PURE__ */ E(() => ne(X)), te = /* @__PURE__ */ Te(null), ye = null, oe = c(F), Ee = c(N), K = c(S), Ue = /* @__PURE__ */ E(() => n().nodeTypes[c(F)] ?? ga), ae = /* @__PURE__ */ E(() => n().ariaLabelConfig);
  Mr("svelteflow__node_connectable", {
    get value() {
      return c(he);
    }
  }), Mr("svelteflow__node_id", X), process.env.NODE_ENV === "development" && ot(() => {
    n().nodeTypes[c(F)] || console.warn("003", dr.error003(c(F)));
  });
  let _e = /* @__PURE__ */ E(() => {
    const ve = c(D) === void 0 ? c(L) ?? c(k) : c(L), Ye = c(b) === void 0 ? c(q) ?? c(M) : c(q);
    if (!(ve === void 0 && Ye === void 0 && c(A) === void 0))
      return `${c(A)};${ve ? `width:${fn(ve)};` : ""}${Ye ? `height:${fn(Ye)};` : ""}`;
  });
  ot(() => {
    (c(F) !== oe || c(N) !== Ee || c(S) !== K) && c(te) !== null && requestAnimationFrame(() => {
      c(te) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[X, { id: X, nodeElement: c(te), force: !0 }]]));
    }), oe = c(F), Ee = c(N), K = c(S);
  }), ot(() => {
    o() && (!c(ge) || c(te) !== ye) && (ye && o().unobserve(ye), c(te) && o().observe(c(te)), ye = c(te));
  }), Ei(() => {
    ye && o()?.unobserve(ye);
  });
  function ke(ve) {
    c(re) && (!n().selectNodesOnDrag || !c(pe) || n().nodeDragThreshold > 0) && n().handleNodeSelection(X), s()?.({ node: c(ee), event: ve });
  }
  function ze(ve) {
    if (!(Sc(ve) || n().disableKeyboardA11y))
      if (vc.includes(ve.key) && c(re)) {
        const Ye = ve.key === "Escape";
        n().handleNodeSelection(X, Ye, c(te));
      } else c(pe) && r().selected && Object.prototype.hasOwnProperty.call(mi, ve.key) && (ve.preventDefault(), n(
        n().ariaLiveMessage = c(ae)["node.a11yDescription.ariaLiveMessage"]({
          direction: ve.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(mi[ve.key], ve.shiftKey ? 4 : 1));
  }
  const pt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(te)?.matches(":focus-visible"))
      return;
    const { width: ve, height: Ye, viewport: lt } = n();
    la(/* @__PURE__ */ new Map([[X, r()]]), { x: 0, y: 0, width: ve, height: Ye }, [lt.x, lt.y, lt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: lt.zoom });
  };
  var mt = Ie(), Ve = ue(mt);
  {
    var Ge = (ve) => {
      var Ye = cm();
      at(
        Ye,
        (Je, _t) => ({
          "data-id": X,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(F)}`,
            c(Z)
          ],
          style: c(_e),
          onclick: ke,
          onpointerenter: d() ? (it) => d()({ node: c(ee), event: it }) : void 0,
          onpointerleave: p() ? (it) => p()({ node: c(ee), event: it }) : void 0,
          onpointermove: f() ? (it) => f()({ node: c(ee), event: it }) : void 0,
          oncontextmenu: g() ? (it) => g()({ node: c(ee), event: it }) : void 0,
          onkeydown: c(ie) ? ze : void 0,
          onfocus: c(ie) ? pt : void 0,
          tabIndex: c(ie) ? 0 : void 0,
          role: r().ariaRole ?? (c(ie) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${nd}-${n().flowId}`,
          ...r().domAttributes,
          [In]: Je,
          [rn]: _t
        }),
        [
          () => ({
            dragging: c(T),
            selected: c(v),
            draggable: c(pe),
            connectable: c(he),
            selectable: c(re),
            nopan: c(pe),
            parent: c(le)
          }),
          () => ({
            "z-index": c(B),
            transform: `translate(${c(W) ?? ""}px, ${c(G) ?? ""}px)`,
            visibility: c(U) ? "visible" : "hidden"
          })
        ]
      );
      var lt = R(Ye);
      Js(lt, () => c(Ue), (Je, _t) => {
        _t(Je, {
          get data() {
            return c(h);
          },
          get id() {
            return X;
          },
          get selected() {
            return c(v);
          },
          get selectable() {
            return c(re);
          },
          get deletable() {
            return c(P);
          },
          get sourcePosition() {
            return c(N);
          },
          get targetPosition() {
            return c(S);
          },
          get zIndex() {
            return c(B);
          },
          get dragging() {
            return c(T);
          },
          get draggable() {
            return c(pe);
          },
          get dragHandle() {
            return c(O);
          },
          get parentId() {
            return c(j);
          },
          get type() {
            return c(F);
          },
          get isConnectable() {
            return c(he);
          },
          get positionAbsoluteX() {
            return c(W);
          },
          get positionAbsoluteY() {
            return c(G);
          },
          get width() {
            return c(L);
          },
          get height() {
            return c(q);
          }
        });
      }), I(Ye), ht(Ye, (Je, _t) => ed?.(Je, _t), () => ({
        nodeId: X,
        isSelectable: c(re),
        disabled: !c(pe),
        handleSelector: c(O),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Je, _t, it, It) => {
          a()?.({ event: Je, targetNode: it, nodes: It });
        },
        onDragStart: (Je, _t, it, It) => {
          l()?.({ event: Je, targetNode: it, nodes: It });
        },
        onDragStop: (Je, _t, it, It) => {
          u()?.({ event: Je, targetNode: it, nodes: It });
        },
        store: n()
      })), Kt(Ye, (Je) => Y(te, Je), () => c(te)), V(ve, Ye);
    };
    ce(Ve, (ve) => {
      c(_) || ve(Ge);
    });
  }
  return V(e, mt), fe({
    get store() {
      return n();
    },
    set store(ve) {
      n(ve), y();
    },
    get node() {
      return r();
    },
    set node(ve) {
      r(ve), y();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ve) {
      o(ve), y();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ve) {
      i(ve), y();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ve) {
      s(ve), y();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ve) {
      a(ve), y();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ve) {
      l(ve), y();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ve) {
      u(ve), y();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ve) {
      d(ve), y();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(ve) {
      p(ve), y();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ve) {
      f(ve), y();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(ve) {
      g(ve), y();
    }
  });
}
se(
  od,
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
var dm = /* @__PURE__ */ Q('<div class="svelte-flow__nodes"></div>');
function id(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "nodeClickDistance", 7), o = w(t, "onnodeclick", 7), i = w(t, "onnodecontextmenu", 7), s = w(t, "onnodepointerenter", 7), a = w(t, "onnodepointermove", 7), l = w(t, "onnodepointerleave", 7), u = w(t, "onnodedrag", 7), d = w(t, "onnodedragstart", 7), p = w(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const v = /* @__PURE__ */ new Map();
    h.forEach(($) => {
      const m = $.target.getAttribute("data-id");
      v.set(m, { id: m, nodeElement: $.target, force: !0 });
    }), n().updateNodeInternals(v);
  });
  Ei(() => {
    f?.disconnect();
  });
  var g = dm();
  return xt(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, v) => {
    od(h, {
      get node() {
        return c(v);
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
        return p();
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
  }), I(g), V(e, g), fe({
    get store() {
      return n();
    },
    set store(h) {
      n(h), y();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(h) {
      r(h), y();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(h) {
      o(h), y();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(h) {
      i(h), y();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(h) {
      s(h), y();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(h) {
      a(h), y();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(h) {
      l(h), y();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(h) {
      u(h), y();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(h) {
      d(h), y();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(h) {
      p(h), y();
    }
  });
}
se(
  id,
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
var fm = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function sd(e, t) {
  de(t, !0);
  const n = w(t, "edge", 7), r = w(t, "store", 15), o = w(t, "onedgeclick", 7), i = w(t, "onedgecontextmenu", 7), s = w(t, "onedgepointerenter", 7), a = w(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ E(() => n().source), u = /* @__PURE__ */ E(() => n().target), d = /* @__PURE__ */ E(() => n().sourceX), p = /* @__PURE__ */ E(() => n().sourceY), f = /* @__PURE__ */ E(() => n().targetX), g = /* @__PURE__ */ E(() => n().targetY), h = /* @__PURE__ */ E(() => n().sourcePosition), v = /* @__PURE__ */ E(() => n().targetPosition), $ = /* @__PURE__ */ E(() => wt(n().animated, !1)), m = /* @__PURE__ */ E(() => wt(n().selected, !1)), P = /* @__PURE__ */ E(() => n().label), x = /* @__PURE__ */ E(() => n().labelStyle), C = /* @__PURE__ */ E(() => wt(n().data, () => ({}), !0)), _ = /* @__PURE__ */ E(() => n().style), T = /* @__PURE__ */ E(() => n().interactionWidth), A = /* @__PURE__ */ E(() => wt(n().type, "default")), Z = /* @__PURE__ */ E(() => n().sourceHandle), F = /* @__PURE__ */ E(() => n().targetHandle), j = /* @__PURE__ */ E(() => n().markerStart), N = /* @__PURE__ */ E(() => n().markerEnd), S = /* @__PURE__ */ E(() => n().selectable), D = /* @__PURE__ */ E(() => n().focusable), b = /* @__PURE__ */ E(() => wt(n().deletable, !0)), k = /* @__PURE__ */ E(() => n().hidden), M = /* @__PURE__ */ E(() => n().zIndex), L = /* @__PURE__ */ E(() => n().class), q = /* @__PURE__ */ E(() => n().ariaLabel), O = null;
  const { id: B } = n();
  Mr("svelteflow__edge_id", B);
  let W = /* @__PURE__ */ E(() => c(S) ?? r().elementsSelectable), G = /* @__PURE__ */ E(() => c(D) ?? r().edgesFocusable), ee = /* @__PURE__ */ E(() => r().edgeTypes[c(A)] ?? ha), X = /* @__PURE__ */ E(() => c(j) ? `url('#${_s(c(j), r().flowId)}')` : void 0), pe = /* @__PURE__ */ E(() => c(N) ? `url('#${_s(c(N), r().flowId)}')` : void 0);
  function re(ne) {
    const le = r().edgeLookup.get(B);
    le && (c(W) && r().handleEdgeSelection(B), o()?.({ event: ne, edge: le }));
  }
  function he(ne, le) {
    const te = r().edgeLookup.get(B);
    te && le({ event: ne, edge: te });
  }
  function U(ne) {
    if (!r().disableKeyboardA11y && vc.includes(ne.key) && c(W)) {
      const { unselectNodesAndEdges: le, addSelectedEdges: te } = r();
      ne.key === "Escape" ? (O?.blur(), le({ edges: [n()] })) : te([B]);
    }
  }
  var $e = Ie(), ge = ue($e);
  {
    var ie = (ne) => {
      var le = fm();
      let te;
      var ye = R(le);
      at(
        ye,
        (Ee) => ({
          class: ["svelte-flow__edge", c(L)],
          "data-id": B,
          onclick: re,
          oncontextmenu: i() ? (K) => {
            he(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            he(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            he(K, a());
          } : void 0,
          "aria-label": c(q) === null ? void 0 : c(q) ? c(q) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(G) ? `${rd}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(G) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(G) ? U : void 0,
          tabindex: c(G) ? 0 : void 0,
          ...n().domAttributes,
          [In]: Ee
        }),
        [
          () => ({
            animated: c($),
            selected: c(m),
            selectable: c(W)
          })
        ]
      );
      var oe = R(ye);
      Js(oe, () => c(ee), (Ee, K) => {
        K(Ee, {
          get id() {
            return B;
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
            return c(p);
          },
          get targetX() {
            return c(f);
          },
          get targetY() {
            return c(g);
          },
          get sourcePosition() {
            return c(h);
          },
          get targetPosition() {
            return c(v);
          },
          get animated() {
            return c($);
          },
          get selected() {
            return c(m);
          },
          get label() {
            return c(P);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(_);
          },
          get interactionWidth() {
            return c(T);
          },
          get selectable() {
            return c(W);
          },
          get deletable() {
            return c(b);
          },
          get type() {
            return c(A);
          },
          get sourceHandleId() {
            return c(Z);
          },
          get targetHandleId() {
            return c(F);
          },
          get markerStart() {
            return c(X);
          },
          get markerEnd() {
            return c(pe);
          }
        });
      }), I(ye), Kt(ye, (Ee) => O = Ee, () => O), I(le), Ne((Ee) => te = Ct(le, "", te, Ee), [() => ({ "z-index": c(M) })]), V(ne, le);
    };
    ce(ge, (ne) => {
      c(k) || ne(ie);
    });
  }
  return V(e, $e), fe({
    get edge() {
      return n();
    },
    set edge(ne) {
      n(ne), y();
    },
    get store() {
      return r();
    },
    set store(ne) {
      r(ne), y();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ne) {
      o(ne), y();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ne) {
      i(ne), y();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ne) {
      s(ne), y();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ne) {
      a(ne), y();
    }
  });
}
se(
  sd,
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
tp();
var pm = /* @__PURE__ */ we("<defs></defs>");
function ad(e, t) {
  de(t, !1);
  const n = Jt();
  zu();
  var r = pm();
  xt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    ld(o, We(() => c(i)));
  }), I(r), V(e, r), fe();
}
se(ad, {}, [], [], !0);
var gm = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), hm = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), vm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ld(e, t) {
  de(t, !0);
  let n = w(t, "id", 7), r = w(t, "type", 7), o = w(t, "width", 7, 12.5), i = w(t, "height", 7, 12.5), s = w(t, "markerUnits", 7, "strokeWidth"), a = w(t, "orient", 7, "auto-start-reverse"), l = w(t, "color", 7), u = w(t, "strokeWidth", 7);
  var d = vm(), p = R(d);
  {
    var f = (h) => {
      var v = gm();
      Ne(() => {
        xe(v, "stroke", l()), xe(v, "stroke-width", u());
      }), V(h, v);
    }, g = (h, v) => {
      {
        var $ = (m) => {
          var P = hm();
          Ne(() => {
            xe(P, "stroke", l()), xe(P, "stroke-width", u()), xe(P, "fill", l());
          }), V(m, P);
        };
        ce(
          h,
          (m) => {
            r() === ho.ArrowClosed && m($);
          },
          v
        );
      }
    };
    ce(p, (h) => {
      r() === ho.Arrow ? h(f) : h(g, !1);
    });
  }
  return I(d), Ne(() => {
    xe(d, "id", n()), xe(d, "markerWidth", `${o()}`), xe(d, "markerHeight", `${i()}`), xe(d, "markerUnits", s()), xe(d, "orient", a());
  }), V(e, d), fe({
    get id() {
      return n();
    },
    set id(h) {
      n(h), y();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), y();
    },
    get width() {
      return o();
    },
    set width(h = 12.5) {
      o(h), y();
    },
    get height() {
      return i();
    },
    set height(h = 12.5) {
      i(h), y();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(h = "strokeWidth") {
      s(h), y();
    },
    get orient() {
      return a();
    },
    set orient(h = "auto-start-reverse") {
      a(h), y();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(h) {
      u(h), y();
    }
  });
}
se(
  ld,
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
var mm = /* @__PURE__ */ Q('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ud(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "onedgeclick", 7), o = w(t, "onedgecontextmenu", 7), i = w(t, "onedgepointerenter", 7), s = w(t, "onedgepointerleave", 7);
  var a = mm(), l = R(a), u = R(l);
  ad(u, {}), I(l);
  var d = z(l, 2);
  return xt(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    sd(p, {
      get edge() {
        return c(f);
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
  }), I(a), V(e, a), fe({
    get store() {
      return n();
    },
    set store(p) {
      n(p), y();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), y();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), y();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), y();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), y();
    }
  });
}
se(
  ud,
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
var ym = /* @__PURE__ */ Q('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const wm = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function va(e, t) {
  de(t, !0), Ke(e, wm);
  let n = w(t, "x", 7, 0), r = w(t, "y", 7, 0), o = w(t, "width", 7, 0), i = w(t, "height", 7, 0), s = w(t, "isVisible", 7, !0);
  var a = Ie(), l = ue(a);
  {
    var u = (d) => {
      var p = ym();
      let f;
      Ne((g) => f = Ct(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : fn(o()),
          height: typeof i() == "string" ? i() : fn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, p);
    };
    ce(l, (d) => {
      s() && d(u);
    });
  }
  return V(e, a), fe({
    get x() {
      return n();
    },
    set x(d = 0) {
      n(d), y();
    },
    get y() {
      return r();
    },
    set y(d = 0) {
      r(d), y();
    },
    get width() {
      return o();
    },
    set width(d = 0) {
      o(d), y();
    },
    get height() {
      return i();
    },
    set height(d = 0) {
      i(d), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(d = !0) {
      s(d), y();
    }
  });
}
se(va, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function bm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function xm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var Cm = /* @__PURE__ */ Q("<div><!></div>");
const $m = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function cd(e, t) {
  de(t, !0), Ke(e, $m);
  let n = w(t, "store", 15), r = w(t, "onnodedrag", 7), o = w(t, "onnodedragstart", 7), i = w(t, "onnodedragstop", 7), s = w(t, "onselectionclick", 7), a = w(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Te(void 0);
  ot(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ E(() => n().selectionRectMode === "nodes" ? (n().nodes, To(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(mi, h.key) && (h.preventDefault(), n().moveSelectedNodes(mi[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Ie(), f = ue(p);
  {
    var g = (h) => {
      var v = Cm();
      v.__contextmenu = [bm, n, a], v.__click = [xm, n, s], v.__keydown = function(...P) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, P);
      };
      let $;
      var m = R(v);
      va(m, { width: "100%", height: "100%", x: 0, y: 0 }), I(v), ht(v, (P, x) => ed?.(P, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (P, x, C, _) => {
          r()?.({ event: P, targetNode: null, nodes: _ });
        },
        onDragStart: (P, x, C, _) => {
          o()?.({ event: P, targetNode: null, nodes: _ });
        },
        onDragStop: (P, x, C, _) => {
          i()?.({ event: P, targetNode: null, nodes: _ });
        }
      })), Kt(v, (P) => Y(l, P), () => c(l)), Ne(
        (P) => {
          Tt(v, 1, Ln(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), xe(v, "role", n().disableKeyboardA11y ? void 0 : "button"), xe(v, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = Ct(v, "", $, P);
        },
        [
          () => ({
            width: fn(c(u).width),
            height: fn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), V(h, v);
    };
    ce(f, (h) => {
      n().selectionRectMode === "nodes" && c(u) && $n(c(u).x) && $n(c(u).y) && h(g);
    });
  }
  return V(e, p), fe({
    get store() {
      return n();
    },
    set store(h) {
      n(h), y();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(h) {
      r(h), y();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(h) {
      o(h), y();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(h) {
      i(h), y();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(h) {
      s(h), y();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(h) {
      a(h), y();
    }
  });
}
Un(["contextmenu", "click", "keydown"]);
se(
  cd,
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
function _m(e) {
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
function tn(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], u = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, p, f) => p ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const p = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: h, preventDefault: v, enabled: $ } = p;
      if ($) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const P = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const C of P)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (_, T) => _ | _m(T),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        v && a.preventDefault();
        const m = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: m })), h?.(m);
      }
    }
  }
  let s;
  return n && (s = ds(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = ds(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function $t() {
  const e = /* @__PURE__ */ E(Jt), t = (i) => {
    const s = El(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? Uv(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Ar(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = dt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && El(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = dt(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && B0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : Dl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Dl(c(e).edgeLookup, i),
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
    getViewport: () => eu(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = ua(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = hl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Ar(p), g = vo(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = hl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = vo(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Fv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = dt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = dt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return Oo(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = vi(i, [s, a, l]);
      return { x: p.x + u, y: p.y + d };
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
    getNodesBounds: (i) => Zv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Dl(e, t) {
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
function dd(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "selectionKey", 7, "Shift"), o = w(t, "multiSelectionKey", 23, () => $r() ? "Meta" : "Control"), i = w(t, "deleteKey", 7, "Backspace"), s = w(t, "panActivationKey", 7, " "), a = w(t, "zoomActivationKey", 23, () => $r() ? "Meta" : "Control"), { deleteElements: l } = $t();
  function u(v) {
    return v !== null && typeof v == "object";
  }
  function d(v) {
    return u(v) ? v.modifier || [] : [];
  }
  function p(v) {
    return v == null ? "" : u(v) ? v.key : v;
  }
  function f(v, $) {
    return (Array.isArray(v) ? v : [v]).map((m) => {
      const P = p(m);
      return {
        key: P,
        modifier: d(m),
        enabled: P !== null,
        callback: $
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const v = n().nodes.filter((x) => x.selected), $ = n().edges.filter((x) => x.selected), { deletedNodes: m, deletedEdges: P } = await l({ nodes: v, edges: $ });
    (m.length > 0 || P.length > 0) && n().ondelete?.({ nodes: m, edges: P });
  }
  return za("blur", St, g), za("contextmenu", St, g), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(i(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !Sc(v.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), ht(St, (v, $) => tn?.(v, $), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), fe({
    get store() {
      return n();
    },
    set store(v) {
      n(v), y();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(v = "Shift") {
      r(v), y();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(v = $r() ? "Meta" : "Control") {
      o(v), y();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(v = "Backspace") {
      i(v), y();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(v = " ") {
      s(v), y();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(v = $r() ? "Meta" : "Control") {
      a(v), y();
    }
  });
}
se(
  dd,
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
var km = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), Sm = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function fd(e, t) {
  de(t, !0);
  let n = w(t, "store", 15), r = w(t, "type", 7), o = w(t, "containerStyle", 7), i = w(t, "style", 7), s = w(t, "LineComponent", 7), a = /* @__PURE__ */ E(() => {
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
      case xn.Bezier: {
        const [f] = Pc(p);
        return f;
      }
      case xn.Straight: {
        const [f] = Mc(p);
        return f;
      }
      case xn.Step:
      case xn.SmoothStep: {
        const [f] = ca({
          ...p,
          borderRadius: r() === xn.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Ie(), u = ue(l);
  {
    var d = (p) => {
      var f = Sm(), g = R(f), h = R(g);
      {
        var v = (m) => {
          var P = Ie(), x = ue(P);
          Js(x, s, (C, _) => {
            _(C, {});
          }), V(m, P);
        }, $ = (m) => {
          var P = km();
          Ne(() => {
            xe(P, "d", c(a)), Ct(P, i());
          }), V(m, P);
        };
        ce(h, (m) => {
          s() ? m(v) : m($, !1);
        });
      }
      I(g), I(f), Ne(
        (m) => {
          xe(f, "width", n().width), xe(f, "height", n().height), Ct(f, o()), Tt(g, 0, m);
        },
        [
          () => Ln([
            "svelte-flow__connection",
            qv(n().connection.isValid)
          ])
        ]
      ), V(p, f);
    };
    ce(u, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return V(e, l), fe({
    get store() {
      return n();
    },
    set store(p) {
      n(p), y();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), y();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), y();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), y();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), y();
    }
  });
}
se(
  fd,
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
var Em = /* @__PURE__ */ Q("<div><!></div>");
function Vo(e, t) {
  de(t, !0);
  let n = w(t, "position", 7, "top-right"), r = w(t, "style", 7), o = w(t, "class", 7), i = w(t, "children", 7), s = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ E(() => `${n()}`.split("-"));
  var l = Em();
  at(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = R(l);
  return et(u, () => i() ?? ft), I(l), V(e, l), fe({
    get position() {
      return n();
    },
    set position(d = "top-right") {
      n(d), y();
    },
    get style() {
      return r();
    },
    set style(d) {
      r(d), y();
    },
    get class() {
      return o();
    },
    set class(d) {
      o(d), y();
    },
    get children() {
      return i();
    },
    set children(d) {
      i(d), y();
    }
  });
}
se(Vo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Pm = /* @__PURE__ */ Q('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function pd(e, t) {
  de(t, !0);
  let n = w(t, "proOptions", 7), r = w(t, "position", 7, "bottom-right");
  var o = Ie(), i = ue(o);
  {
    var s = (a) => {
      Vo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var d = Pm();
          V(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ce(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return V(e, o), fe({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), y();
    },
    get position() {
      return r();
    },
    set position(a = "bottom-right") {
      r(a), y();
    }
  });
}
se(pd, { proOptions: {}, position: {} }, [], [], !0);
var Nm = /* @__PURE__ */ Q("<div><!></div>");
const Mm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function gd(e, t) {
  de(t, !0), Ke(e, Mm);
  let n = w(t, "width", 7), r = w(t, "height", 7), o = w(t, "colorMode", 7), i = w(t, "domNode", 15), s = w(t, "clientWidth", 15), a = w(t, "clientHeight", 15), l = w(t, "children", 7), u = w(t, "rest", 7), d = /* @__PURE__ */ E(() => u().class), p = /* @__PURE__ */ E(() => xp(u(), [
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
    "style",
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
    "ariaLabelConfig"
  ]));
  function f(v) {
    v.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(v);
  }
  var g = Nm();
  at(
    g,
    (v) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        c(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...c(p),
      [rn]: v
    }),
    [
      () => ({ width: fn(n()), height: fn(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = R(g);
  return et(h, () => l() ?? ft), I(g), Kt(g, (v) => i(v), () => i()), ja(g, "clientHeight", a), ja(g, "clientWidth", s), V(e, g), fe({
    get width() {
      return n();
    },
    set width(v) {
      n(v), y();
    },
    get height() {
      return r();
    },
    set height(v) {
      r(v), y();
    },
    get colorMode() {
      return o();
    },
    set colorMode(v) {
      o(v), y();
    },
    get domNode() {
      return i();
    },
    set domNode(v) {
      i(v), y();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(v) {
      s(v), y();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(v) {
      a(v), y();
    },
    get children() {
      return l();
    },
    set children(v) {
      l(v), y();
    },
    get rest() {
      return u();
    },
    set rest(v) {
      u(v), y();
    }
  });
}
se(
  gd,
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
var Tm = /* @__PURE__ */ Q('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Om = /* @__PURE__ */ Q("<!> <!>", 1), Dm = /* @__PURE__ */ Q("<!> <!> <!> <!> <!>", 1);
function hd(e, t) {
  de(t, !0);
  let n = w(t, "width", 7), r = w(t, "height", 7), o = w(t, "proOptions", 7), i = w(t, "selectionKey", 7), s = w(t, "deleteKey", 7), a = w(t, "panActivationKey", 7), l = w(t, "multiSelectionKey", 7), u = w(t, "zoomActivationKey", 7), d = w(t, "paneClickDistance", 7, 1), p = w(t, "nodeClickDistance", 7, 1), f = w(t, "onmovestart", 7), g = w(t, "onmoveend", 7), h = w(t, "onmove", 7), v = w(t, "oninit", 7), $ = w(t, "onnodeclick", 7), m = w(t, "onnodecontextmenu", 7), P = w(t, "onnodedrag", 7), x = w(t, "onnodedragstart", 7), C = w(t, "onnodedragstop", 7), _ = w(t, "onnodepointerenter", 7), T = w(t, "onnodepointermove", 7), A = w(t, "onnodepointerleave", 7), Z = w(t, "onselectionclick", 7), F = w(t, "onselectioncontextmenu", 7), j = w(t, "onselectionstart", 7), N = w(t, "onselectionend", 7), S = w(t, "onedgeclick", 7), D = w(t, "onedgecontextmenu", 7), b = w(t, "onedgepointerenter", 7), k = w(t, "onedgepointerleave", 7), M = w(t, "onpaneclick", 7), L = w(t, "onpanecontextmenu", 7), q = w(t, "panOnScrollMode", 23, () => ln.Free), O = w(t, "preventScrolling", 7, !0), B = w(t, "zoomOnScroll", 7, !0), W = w(t, "zoomOnDoubleClick", 7, !0), G = w(t, "zoomOnPinch", 7, !0), ee = w(t, "panOnScroll", 7, !1), X = w(t, "panOnDrag", 7, !0), pe = w(t, "selectionOnDrag", 7, !0), re = w(t, "connectionLineComponent", 7), he = w(t, "connectionLineStyle", 7), U = w(t, "connectionLineContainerStyle", 7), $e = w(t, "connectionLineType", 23, () => xn.Bezier), ge = w(t, "attributionPosition", 7), ie = w(t, "children", 7), ne = w(t, "nodes", 31, () => Zt([])), le = w(t, "edges", 31, () => Zt([])), te = w(t, "viewport", 31, () => {
  }), ye = /* @__PURE__ */ je(t, [
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
  ]), oe = Uc({
    props: ye,
    width: n(),
    height: r(),
    get nodes() {
      return ne();
    },
    set nodes(K) {
      ne(K);
    },
    get edges() {
      return le();
    },
    set edges(K) {
      le(K);
    },
    get viewport() {
      return te();
    },
    set viewport(K) {
      te(K);
    }
  });
  const Ee = Mn(yo);
  return Ee && Ee.setStore && Ee.setStore(oe), Mr(yo, {
    provider: !1,
    getStore() {
      return oe;
    }
  }), ot(() => {
    const K = { nodes: oe.selectedNodes, edges: oe.selectedEdges };
    dt(() => t.onselectionchange)?.(K);
    for (const Ue of oe.selectionChangeHandlers.values())
      Ue(K);
  }), Ei(() => {
    oe.reset();
  }), gd(e, {
    get colorMode() {
      return oe.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ye;
    },
    get domNode() {
      return oe.domNode;
    },
    set domNode(K) {
      oe.domNode = K;
    },
    get clientWidth() {
      return oe.width;
    },
    set clientWidth(K) {
      oe.width = K;
    },
    get clientHeight() {
      return oe.height;
    },
    set clientHeight(K) {
      oe.height = K;
    },
    children: (K, Ue) => {
      var ae = Dm(), _e = ue(ae);
      dd(_e, {
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
          return oe;
        },
        set store(Ve) {
          oe = Ve;
        }
      });
      var ke = z(_e, 2);
      Gc(ke, {
        get panOnScrollMode() {
          return q();
        },
        get preventScrolling() {
          return O();
        },
        get zoomOnScroll() {
          return B();
        },
        get zoomOnDoubleClick() {
          return W();
        },
        get zoomOnPinch() {
          return G();
        },
        get panOnScroll() {
          return ee();
        },
        get panOnDrag() {
          return X();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return h();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return v();
        },
        get store() {
          return oe;
        },
        set store(Ve) {
          oe = Ve;
        },
        children: (Ve, Ge) => {
          Jc(Ve, {
            get onpaneclick() {
              return M();
            },
            get onpanecontextmenu() {
              return L();
            },
            get onselectionstart() {
              return j();
            },
            get onselectionend() {
              return N();
            },
            get panOnDrag() {
              return X();
            },
            get selectionOnDrag() {
              return pe();
            },
            get store() {
              return oe;
            },
            set store(ve) {
              oe = ve;
            },
            children: (ve, Ye) => {
              var lt = Om(), Je = ue(lt);
              Qc(Je, {
                get store() {
                  return oe;
                },
                set store(er) {
                  oe = er;
                },
                children: (er, Bi) => {
                  var wn = Tm(), yr = z(ue(wn), 2);
                  ud(yr, {
                    get onedgeclick() {
                      return S();
                    },
                    get onedgecontextmenu() {
                      return D();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return k();
                    },
                    get store() {
                      return oe;
                    },
                    set store(en) {
                      oe = en;
                    }
                  });
                  var wr = z(yr, 4);
                  fd(wr, {
                    get type() {
                      return $e();
                    },
                    get LineComponent() {
                      return re();
                    },
                    get containerStyle() {
                      return U();
                    },
                    get style() {
                      return he();
                    },
                    get store() {
                      return oe;
                    },
                    set store(en) {
                      oe = en;
                    }
                  });
                  var Yr = z(wr, 2);
                  id(Yr, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return $();
                    },
                    get onnodecontextmenu() {
                      return m();
                    },
                    get onnodepointerenter() {
                      return _();
                    },
                    get onnodepointermove() {
                      return T();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return P();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return oe;
                    },
                    set store(en) {
                      oe = en;
                    }
                  });
                  var Zi = z(Yr, 2);
                  cd(Zi, {
                    get onselectionclick() {
                      return Z();
                    },
                    get onselectioncontextmenu() {
                      return F();
                    },
                    get onnodedrag() {
                      return P();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return oe;
                    },
                    set store(en) {
                      oe = en;
                    }
                  }), Ce(2), V(er, wn);
                },
                $$slots: { default: !0 }
              });
              var _t = z(Je, 2);
              const it = /* @__PURE__ */ E(() => !!(oe.selectionRect && oe.selectionRectMode === "user")), It = /* @__PURE__ */ E(() => oe.selectionRect?.width), jr = /* @__PURE__ */ E(() => oe.selectionRect?.height), mn = /* @__PURE__ */ E(() => oe.selectionRect?.x), yn = /* @__PURE__ */ E(() => oe.selectionRect?.y);
              va(_t, {
                get isVisible() {
                  return c(it);
                },
                get width() {
                  return c(It);
                },
                get height() {
                  return c(jr);
                },
                get x() {
                  return c(mn);
                },
                get y() {
                  return c(yn);
                }
              }), V(ve, lt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var ze = z(ke, 2);
      pd(ze, {
        get proOptions() {
          return o();
        },
        get position() {
          return ge();
        }
      });
      var pt = z(ze, 2);
      td(pt, {
        get store() {
          return oe;
        }
      });
      var mt = z(pt, 2);
      et(mt, () => ie() ?? ft), V(K, ae);
    },
    $$slots: { default: !0 }
  }), fe({
    get width() {
      return n();
    },
    set width(K) {
      n(K), y();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), y();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), y();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), y();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), y();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), y();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), y();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(K) {
      u(K), y();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), y();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(K = 1) {
      p(K), y();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), y();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(K) {
      g(K), y();
    },
    get onmove() {
      return h();
    },
    set onmove(K) {
      h(K), y();
    },
    get oninit() {
      return v();
    },
    set oninit(K) {
      v(K), y();
    },
    get onnodeclick() {
      return $();
    },
    set onnodeclick(K) {
      $(K), y();
    },
    get onnodecontextmenu() {
      return m();
    },
    set onnodecontextmenu(K) {
      m(K), y();
    },
    get onnodedrag() {
      return P();
    },
    set onnodedrag(K) {
      P(K), y();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), y();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(K) {
      C(K), y();
    },
    get onnodepointerenter() {
      return _();
    },
    set onnodepointerenter(K) {
      _(K), y();
    },
    get onnodepointermove() {
      return T();
    },
    set onnodepointermove(K) {
      T(K), y();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(K) {
      A(K), y();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(K) {
      Z(K), y();
    },
    get onselectioncontextmenu() {
      return F();
    },
    set onselectioncontextmenu(K) {
      F(K), y();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(K) {
      j(K), y();
    },
    get onselectionend() {
      return N();
    },
    set onselectionend(K) {
      N(K), y();
    },
    get onedgeclick() {
      return S();
    },
    set onedgeclick(K) {
      S(K), y();
    },
    get onedgecontextmenu() {
      return D();
    },
    set onedgecontextmenu(K) {
      D(K), y();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(K) {
      b(K), y();
    },
    get onedgepointerleave() {
      return k();
    },
    set onedgepointerleave(K) {
      k(K), y();
    },
    get onpaneclick() {
      return M();
    },
    set onpaneclick(K) {
      M(K), y();
    },
    get onpanecontextmenu() {
      return L();
    },
    set onpanecontextmenu(K) {
      L(K), y();
    },
    get panOnScrollMode() {
      return q();
    },
    set panOnScrollMode(K = ln.Free) {
      q(K), y();
    },
    get preventScrolling() {
      return O();
    },
    set preventScrolling(K = !0) {
      O(K), y();
    },
    get zoomOnScroll() {
      return B();
    },
    set zoomOnScroll(K = !0) {
      B(K), y();
    },
    get zoomOnDoubleClick() {
      return W();
    },
    set zoomOnDoubleClick(K = !0) {
      W(K), y();
    },
    get zoomOnPinch() {
      return G();
    },
    set zoomOnPinch(K = !0) {
      G(K), y();
    },
    get panOnScroll() {
      return ee();
    },
    set panOnScroll(K = !1) {
      ee(K), y();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(K = !0) {
      X(K), y();
    },
    get selectionOnDrag() {
      return pe();
    },
    set selectionOnDrag(K = !0) {
      pe(K), y();
    },
    get connectionLineComponent() {
      return re();
    },
    set connectionLineComponent(K) {
      re(K), y();
    },
    get connectionLineStyle() {
      return he();
    },
    set connectionLineStyle(K) {
      he(K), y();
    },
    get connectionLineContainerStyle() {
      return U();
    },
    set connectionLineContainerStyle(K) {
      U(K), y();
    },
    get connectionLineType() {
      return $e();
    },
    set connectionLineType(K = xn.Bezier) {
      $e(K), y();
    },
    get attributionPosition() {
      return ge();
    },
    set attributionPosition(K) {
      ge(K), y();
    },
    get children() {
      return ie();
    },
    set children(K) {
      ie(K), y();
    },
    get nodes() {
      return ne();
    },
    set nodes(K = []) {
      ne(K), y();
    },
    get edges() {
      return le();
    },
    set edges(K = []) {
      le(K), y();
    },
    get viewport() {
      return te();
    },
    set viewport(K = void 0) {
      te(K), y();
    }
  });
}
se(
  hd,
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
function vd(e, t) {
  de(t, !0);
  let n = w(t, "children", 7), r = /* @__PURE__ */ Te(Uc({ props: {}, nodes: [], edges: [] }));
  Mr(yo, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      Y(r, s);
    }
  }), Ei(() => {
    c(r).reset();
  });
  var o = Ie(), i = ue(o);
  return et(i, () => n() ?? ft), V(e, o), fe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), y();
    }
  });
}
se(vd, { children: {} }, [], [], !0);
var Vm = /* @__PURE__ */ Q("<button><!></button>");
function to(e, t) {
  de(t, !0);
  let n = w(t, "class", 7), r = w(t, "bgColor", 7), o = w(t, "bgColorHover", 7), i = w(t, "color", 7), s = w(t, "colorHover", 7), a = w(t, "borderColor", 7), l = w(t, "onclick", 7), u = w(t, "children", 7), d = /* @__PURE__ */ je(t, [
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
  var p = Vm();
  at(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [rn]: g
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
  var f = R(p);
  return et(f, () => u() ?? ft), I(p), V(e, p), fe({
    get class() {
      return n();
    },
    set class(g) {
      n(g), y();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), y();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), y();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), y();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), y();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), y();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), y();
    },
    get children() {
      return u();
    },
    set children(g) {
      u(g), y();
    }
  });
}
se(
  to,
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
var Hm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function md(e) {
  var t = Hm();
  V(e, t);
}
se(md, {}, [], [], !0);
var Lm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function yd(e) {
  var t = Lm();
  V(e, t);
}
se(yd, {}, [], [], !0);
var Am = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function wd(e) {
  var t = Am();
  V(e, t);
}
se(wd, {}, [], [], !0);
var zm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function bd(e) {
  var t = zm();
  V(e, t);
}
se(bd, {}, [], [], !0);
var Im = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function xd(e) {
  var t = Im();
  V(e, t);
}
se(xd, {}, [], [], !0);
var Rm = /* @__PURE__ */ Q("<!> <!>", 1), qm = /* @__PURE__ */ Q("<!> <!> <!> <!> <!> <!>", 1);
function Cd(e, t) {
  de(t, !0);
  let n = w(t, "position", 7, "bottom-left"), r = w(t, "orientation", 7, "vertical"), o = w(t, "showZoom", 7, !0), i = w(t, "showFitView", 7, !0), s = w(t, "showLock", 7, !0), a = w(t, "style", 7), l = w(t, "class", 7), u = w(t, "buttonBgColor", 7), d = w(t, "buttonBgColorHover", 7), p = w(t, "buttonColor", 7), f = w(t, "buttonColorHover", 7), g = w(t, "buttonBorderColor", 7), h = w(t, "fitViewOptions", 7), v = w(t, "children", 7), $ = w(t, "before", 7), m = w(t, "after", 7), P = /* @__PURE__ */ je(t, [
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
  ]), x = /* @__PURE__ */ E(Jt);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let _ = /* @__PURE__ */ E(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), T = /* @__PURE__ */ E(() => c(x).viewport.zoom <= c(x).minZoom), A = /* @__PURE__ */ E(() => c(x).viewport.zoom >= c(x).maxZoom), Z = /* @__PURE__ */ E(() => c(x).ariaLabelConfig), F = /* @__PURE__ */ E(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    c(x).zoomIn();
  }, N = () => {
    c(x).zoomOut();
  }, S = () => {
    c(x).fitView(h());
  }, D = () => {
    let k = !c(_);
    c(x).nodesDraggable = k, c(x).nodesConnectable = k, c(x).elementsSelectable = k;
  }, b = /* @__PURE__ */ E(() => [
    "svelte-flow__controls",
    c(F),
    l()
  ]);
  return Vo(e, We(
    {
      get class() {
        return c(b);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return c(Z)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => P,
    {
      children: (k, M) => {
        var L = qm(), q = ue(L);
        {
          var O = (ge) => {
            var ie = Ie(), ne = ue(ie);
            et(ne, $), V(ge, ie);
          };
          ce(q, (ge) => {
            $() && ge(O);
          });
        }
        var B = z(q, 2);
        {
          var W = (ge) => {
            var ie = Rm(), ne = ue(ie);
            to(ne, We(
              {
                onclick: j,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(Z)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(A);
                }
              },
              () => C,
              {
                children: (te, ye) => {
                  md(te);
                },
                $$slots: { default: !0 }
              }
            ));
            var le = z(ne, 2);
            to(le, We(
              {
                onclick: N,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return c(Z)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return c(T);
                }
              },
              () => C,
              {
                children: (te, ye) => {
                  yd(te);
                },
                $$slots: { default: !0 }
              }
            )), V(ge, ie);
          };
          ce(B, (ge) => {
            o() && ge(W);
          });
        }
        var G = z(B, 2);
        {
          var ee = (ge) => {
            to(ge, We(
              {
                class: "svelte-flow__controls-fitview",
                onclick: S,
                get title() {
                  return c(Z)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.fitView.ariaLabel"];
                }
              },
              () => C,
              {
                children: (ie, ne) => {
                  wd(ie);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ce(G, (ge) => {
            i() && ge(ee);
          });
        }
        var X = z(G, 2);
        {
          var pe = (ge) => {
            to(ge, We(
              {
                class: "svelte-flow__controls-interactive",
                onclick: D,
                get title() {
                  return c(Z)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.interactive.ariaLabel"];
                }
              },
              () => C,
              {
                children: (ie, ne) => {
                  var le = Ie(), te = ue(le);
                  {
                    var ye = (Ee) => {
                      xd(Ee);
                    }, oe = (Ee) => {
                      bd(Ee);
                    };
                    ce(te, (Ee) => {
                      c(_) ? Ee(ye) : Ee(oe, !1);
                    });
                  }
                  V(ie, le);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ce(X, (ge) => {
            s() && ge(pe);
          });
        }
        var re = z(X, 2);
        {
          var he = (ge) => {
            var ie = Ie(), ne = ue(ie);
            et(ne, v), V(ge, ie);
          };
          ce(re, (ge) => {
            v() && ge(he);
          });
        }
        var U = z(re, 2);
        {
          var $e = (ge) => {
            var ie = Ie(), ne = ue(ie);
            et(ne, m), V(ge, ie);
          };
          ce(U, (ge) => {
            m() && ge($e);
          });
        }
        V(k, L);
      },
      $$slots: { default: !0 }
    }
  )), fe({
    get position() {
      return n();
    },
    set position(k = "bottom-left") {
      n(k), y();
    },
    get orientation() {
      return r();
    },
    set orientation(k = "vertical") {
      r(k), y();
    },
    get showZoom() {
      return o();
    },
    set showZoom(k = !0) {
      o(k), y();
    },
    get showFitView() {
      return i();
    },
    set showFitView(k = !0) {
      i(k), y();
    },
    get showLock() {
      return s();
    },
    set showLock(k = !0) {
      s(k), y();
    },
    get style() {
      return a();
    },
    set style(k) {
      a(k), y();
    },
    get class() {
      return l();
    },
    set class(k) {
      l(k), y();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(k) {
      u(k), y();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(k) {
      d(k), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(k) {
      p(k), y();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(k) {
      f(k), y();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(k) {
      g(k), y();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(k) {
      h(k), y();
    },
    get children() {
      return v();
    },
    set children(k) {
      v(k), y();
    },
    get before() {
      return $();
    },
    set before(k) {
      $(k), y();
    },
    get after() {
      return m();
    },
    set after(k) {
      m(k), y();
    }
  });
}
se(
  Cd,
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
var _n;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(_n || (_n = {}));
var Bm = /* @__PURE__ */ we("<circle></circle>");
function $d(e, t) {
  de(t, !0);
  let n = w(t, "radius", 7), r = w(t, "class", 7);
  var o = Bm();
  return Ne(() => {
    xe(o, "cx", n()), xe(o, "cy", n()), xe(o, "r", n()), Tt(o, 0, Ln(["svelte-flow__background-pattern", "dots", r()]));
  }), V(e, o), fe({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), y();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), y();
    }
  });
}
se($d, { radius: {}, class: {} }, [], [], !0);
var Zm = /* @__PURE__ */ we("<path></path>");
function _d(e, t) {
  de(t, !0);
  let n = w(t, "lineWidth", 7), r = w(t, "dimensions", 7), o = w(t, "variant", 7), i = w(t, "class", 7);
  var s = Zm();
  return Ne(() => {
    xe(s, "stroke-width", n()), xe(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Tt(s, 0, Ln(["svelte-flow__background-pattern", o(), i()]));
  }), V(e, s), fe({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), y();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), y();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), y();
    }
  });
}
se(_d, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Km = {
  [_n.Dots]: 1,
  [_n.Lines]: 1,
  [_n.Cross]: 6
};
var jm = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function kd(e, t) {
  de(t, !0);
  let n = w(t, "id", 7), r = w(t, "variant", 23, () => _n.Dots), o = w(t, "gap", 7, 20), i = w(t, "size", 7), s = w(t, "lineWidth", 7, 1), a = w(t, "bgColor", 7), l = w(t, "patternColor", 7), u = w(t, "patternClass", 7), d = w(t, "class", 7), p = /* @__PURE__ */ E(Jt), f = /* @__PURE__ */ E(() => r() === _n.Dots), g = /* @__PURE__ */ E(() => r() === _n.Cross), h = /* @__PURE__ */ E(() => Array.isArray(o()) ? o() : [o(), o()]), v = /* @__PURE__ */ E(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), $ = /* @__PURE__ */ E(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), m = /* @__PURE__ */ E(() => (i() ?? Km[r()]) * c(p).viewport.zoom), P = /* @__PURE__ */ E(() => c(g) ? [c(m), c(m)] : c($)), x = /* @__PURE__ */ E(() => c(f) ? [c(m) / 2, c(m) / 2] : [
    c(P)[0] / 2,
    c(P)[1] / 2
  ]);
  var C = jm();
  let _;
  var T = R(C), A = R(T);
  {
    var Z = (N) => {
      const S = /* @__PURE__ */ E(() => c(m) / 2);
      $d(N, {
        get radius() {
          return c(S);
        },
        get class() {
          return u();
        }
      });
    }, F = (N) => {
      _d(N, {
        get dimensions() {
          return c(P);
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
    ce(A, (N) => {
      c(f) ? N(Z) : N(F, !1);
    });
  }
  I(T);
  var j = z(T);
  return I(C), Ne(
    (N) => {
      Tt(C, 0, Ln([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), _ = Ct(C, "", _, N), xe(T, "id", c(v)), xe(T, "x", c(p).viewport.x % c($)[0]), xe(T, "y", c(p).viewport.y % c($)[1]), xe(T, "width", c($)[0]), xe(T, "height", c($)[1]), xe(T, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), xe(j, "fill", `url(#${c(v)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), V(e, C), fe({
    get id() {
      return n();
    },
    set id(N) {
      n(N), y();
    },
    get variant() {
      return r();
    },
    set variant(N = _n.Dots) {
      r(N), y();
    },
    get gap() {
      return o();
    },
    set gap(N = 20) {
      o(N), y();
    },
    get size() {
      return i();
    },
    set size(N) {
      i(N), y();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(N = 1) {
      s(N), y();
    },
    get bgColor() {
      return a();
    },
    set bgColor(N) {
      a(N), y();
    },
    get patternColor() {
      return l();
    },
    set patternColor(N) {
      l(N), y();
    },
    get patternClass() {
      return u();
    },
    set patternClass(N) {
      u(N), y();
    },
    get class() {
      return d();
    },
    set class(N) {
      d(N), y();
    }
  });
}
se(
  kd,
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
var Ym = /* @__PURE__ */ we("<rect></rect>");
function Sd(e, t) {
  de(t, !0);
  let n = w(t, "x", 7), r = w(t, "y", 7), o = w(t, "width", 7), i = w(t, "height", 7), s = w(t, "borderRadius", 7, 5), a = w(t, "color", 7), l = w(t, "shapeRendering", 7), u = w(t, "strokeColor", 7), d = w(t, "strokeWidth", 7, 2), p = w(t, "selected", 7), f = w(t, "class", 7);
  var g = Ym();
  let h, v;
  return Ne(
    ($, m) => {
      h = Tt(g, 0, Ln(["svelte-flow__minimap-node", f()]), null, h, $), xe(g, "x", n()), xe(g, "y", r()), xe(g, "rx", s()), xe(g, "ry", s()), xe(g, "width", o()), xe(g, "height", i()), xe(g, "shape-rendering", l()), v = Ct(g, "", v, m);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), V(e, g), fe({
    get x() {
      return n();
    },
    set x($) {
      n($), y();
    },
    get y() {
      return r();
    },
    set y($) {
      r($), y();
    },
    get width() {
      return o();
    },
    set width($) {
      o($), y();
    },
    get height() {
      return i();
    },
    set height($) {
      i($), y();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius($ = 5) {
      s($), y();
    },
    get color() {
      return a();
    },
    set color($) {
      a($), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering($) {
      l($), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor($) {
      u($), y();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth($ = 2) {
      d($), y();
    },
    get selected() {
      return p();
    },
    set selected($) {
      p($), y();
    },
    get class() {
      return f();
    },
    set class($) {
      f($), y();
    }
  });
}
se(
  Sd,
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
function Fm(e, t) {
  const n = P0({
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
const ns = (e) => e instanceof Function ? e : () => e;
var Wm = /* @__PURE__ */ we("<title> </title>"), Xm = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Um = /* @__PURE__ */ Q('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Ed(e, t) {
  de(t, !0);
  let n = w(t, "position", 7, "bottom-right"), r = w(t, "ariaLabel", 7), o = w(t, "nodeStrokeColor", 7, "transparent"), i = w(t, "nodeColor", 7), s = w(t, "nodeClass", 7, ""), a = w(t, "nodeBorderRadius", 7, 5), l = w(t, "nodeStrokeWidth", 7, 2), u = w(t, "bgColor", 7), d = w(t, "maskColor", 7), p = w(t, "maskStrokeColor", 7), f = w(t, "maskStrokeWidth", 7), g = w(t, "width", 7, 200), h = w(t, "height", 7, 150), v = w(t, "pannable", 7, !0), $ = w(t, "zoomable", 7, !0), m = w(t, "inversePan", 7), P = w(t, "zoomStep", 7), x = w(t, "class", 7), C = /* @__PURE__ */ je(t, [
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
  ]), _ = /* @__PURE__ */ E(Jt), T = /* @__PURE__ */ E(() => c(_).ariaLabelConfig);
  const A = i() === void 0 ? void 0 : ns(i()), Z = ns(o()), F = ns(s()), j = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let N = /* @__PURE__ */ E(() => `svelte-flow__minimap-desc-${c(_).flowId}`), S = /* @__PURE__ */ E(() => ({
    x: -c(_).viewport.x / c(_).viewport.zoom,
    y: -c(_).viewport.y / c(_).viewport.zoom,
    width: c(_).width / c(_).viewport.zoom,
    height: c(_).height / c(_).viewport.zoom
  })), D = /* @__PURE__ */ E(() => c(_).nodeLookup.size > 0 ? xc(To(c(_).nodeLookup, { filter: (U) => !U.hidden }), c(S)) : c(S)), b = /* @__PURE__ */ E(() => c(D).width / g()), k = /* @__PURE__ */ E(() => c(D).height / h()), M = /* @__PURE__ */ E(() => Math.max(c(b), c(k))), L = /* @__PURE__ */ E(() => c(M) * g()), q = /* @__PURE__ */ E(() => c(M) * h()), O = /* @__PURE__ */ E(() => 5 * c(M)), B = /* @__PURE__ */ E(() => c(D).x - (c(L) - c(D).width) / 2 - c(O)), W = /* @__PURE__ */ E(() => c(D).y - (c(q) - c(D).height) / 2 - c(O)), G = /* @__PURE__ */ E(() => c(L) + c(O) * 2), ee = /* @__PURE__ */ E(() => c(q) + c(O) * 2);
  const X = () => c(M);
  var pe = Um(), re = ue(pe);
  const he = /* @__PURE__ */ E(() => ["svelte-flow__minimap", x()]);
  return Ip(re, () => ({ "--xy-minimap-background-color-props": u() })), Vo(re.lastChild, We(
    {
      get position() {
        return n();
      },
      get class() {
        return c(he);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => C,
    {
      children: (U, $e) => {
        var ge = Ie(), ie = ue(ge);
        {
          var ne = (le) => {
            var te = Xm();
            let ye;
            var oe = R(te);
            {
              var Ee = (ae) => {
                var _e = Wm(), ke = R(_e, !0);
                I(_e), Ne(() => {
                  xe(_e, "id", c(N)), Fe(ke, r() ?? c(T)["minimap.ariaLabel"]);
                }), V(ae, _e);
              };
              ce(oe, (ae) => {
                (r() ?? c(T)["minimap.ariaLabel"]) && ae(Ee);
              });
            }
            var K = z(oe);
            xt(K, 17, () => c(_).nodes, (ae) => ae.id, (ae, _e) => {
              var ke = Ie();
              const ze = /* @__PURE__ */ E(() => c(_).nodeLookup.get(c(_e).id));
              var pt = ue(ke);
              {
                var mt = (Ve) => {
                  const Ge = /* @__PURE__ */ E(() => Jn(c(ze))), ve = /* @__PURE__ */ E(() => A?.(c(ze))), Ye = /* @__PURE__ */ E(() => Z(c(ze))), lt = /* @__PURE__ */ E(() => F(c(ze)));
                  Sd(Ve, We(
                    {
                      get x() {
                        return c(ze).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(ze).internals.positionAbsolute.y;
                      }
                    },
                    () => c(Ge),
                    {
                      get selected() {
                        return c(ze).selected;
                      },
                      get color() {
                        return c(ve);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(Ye);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return j;
                      },
                      get class() {
                        return c(lt);
                      }
                    }
                  ));
                };
                ce(pt, (Ve) => {
                  c(ze) && $c(c(ze)) && Ve(mt);
                });
              }
              V(ae, ke);
            });
            var Ue = z(K);
            I(te), ht(te, (ae, _e) => Fm?.(ae, _e), () => ({
              store: c(_),
              panZoom: c(_).panZoom,
              getViewScale: X,
              translateExtent: c(_).translateExtent,
              width: c(_).width,
              height: c(_).height,
              inversePan: m(),
              zoomStep: P(),
              pannable: v(),
              zoomable: $()
            })), Ne(
              (ae) => {
                xe(te, "width", g()), xe(te, "height", h()), xe(te, "viewBox", `${c(B) ?? ""} ${c(W) ?? ""} ${c(G) ?? ""} ${c(ee) ?? ""}`), xe(te, "aria-labelledby", c(N)), ye = Ct(te, "", ye, ae), xe(Ue, "d", `M${c(B) - c(O)},${c(W) - c(O)}h${c(G) + c(O) * 2}v${c(ee) + c(O) * 2}h${-c(G) - c(O) * 2}z
      M${c(S).x ?? ""},${c(S).y ?? ""}h${c(S).width ?? ""}v${c(S).height ?? ""}h${-c(S).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(M) : void 0
                })
              ]
            ), V(le, te);
          };
          ce(ie, (le) => {
            c(_).panZoom && le(ne);
          });
        }
        V(U, ge);
      },
      $$slots: { default: !0 }
    }
  )), I(re), V(e, pe), fe({
    get position() {
      return n();
    },
    set position(U = "bottom-right") {
      n(U), y();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(U) {
      r(U), y();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(U = "transparent") {
      o(U), y();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(U) {
      i(U), y();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(U = "") {
      s(U), y();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(U = 5) {
      a(U), y();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(U = 2) {
      l(U), y();
    },
    get bgColor() {
      return u();
    },
    set bgColor(U) {
      u(U), y();
    },
    get maskColor() {
      return d();
    },
    set maskColor(U) {
      d(U), y();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(U) {
      p(U), y();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(U) {
      f(U), y();
    },
    get width() {
      return g();
    },
    set width(U = 200) {
      g(U), y();
    },
    get height() {
      return h();
    },
    set height(U = 150) {
      h(U), y();
    },
    get pannable() {
      return v();
    },
    set pannable(U = !0) {
      v(U), y();
    },
    get zoomable() {
      return $();
    },
    set zoomable(U = !0) {
      $(U), y();
    },
    get inversePan() {
      return m();
    },
    set inversePan(U) {
      m(U), y();
    },
    get zoomStep() {
      return P();
    },
    set zoomStep(U) {
      P(U), y();
    },
    get class() {
      return x();
    },
    set class(U) {
      x(U), y();
    }
  });
}
se(
  Ed,
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
    class: {}
  },
  [],
  [],
  !0
);
var Gm = /* @__PURE__ */ Q("<div><!></div>");
function Pd(e, t) {
  de(t, !0);
  let n = w(t, "nodeId", 7), r = w(t, "position", 23, () => be.Top), o = w(t, "align", 7, "center"), i = w(t, "offset", 7, 10), s = w(t, "isVisible", 7), a = w(t, "children", 7), l = /* @__PURE__ */ je(t, [
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
  const u = Jt(), { getNodesBounds: d } = $t(), p = Mn("svelteflow__node_id");
  let f = /* @__PURE__ */ E(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (C, _) => {
      const T = u.nodeLookup.get(_);
      return T && C.push(T), C;
    },
    []
  ))), g = /* @__PURE__ */ E(() => {
    const C = d(c(f));
    return C ? c0(C, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ E(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((C) => (C.internals.z || 5) + 1))), v = /* @__PURE__ */ E(() => u.nodes.filter((C) => C.selected).length), $ = /* @__PURE__ */ E(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(v) === 1);
  var m = Ie(), P = ue(m);
  {
    var x = (C) => {
      var _ = Gm();
      at(
        _,
        (A, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": A,
          ...l,
          [rn]: Z
        }),
        [
          () => c(f).reduce((A, Z) => `${A}${Z.id} `, "").trim(),
          () => ({
            display: Zc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var T = R(_);
      et(T, () => a() ?? ft), I(_), ht(_, (A, Z) => Bc?.(A, Z), () => "root"), V(C, _);
    };
    ce(P, (C) => {
      u.domNode && c($) && c(f) && C(x);
    });
  }
  return V(e, m), fe({
    get nodeId() {
      return n();
    },
    set nodeId(C) {
      n(C), y();
    },
    get position() {
      return r();
    },
    set position(C = be.Top) {
      r(C), y();
    },
    get align() {
      return o();
    },
    set align(C = "center") {
      o(C), y();
    },
    get offset() {
      return i();
    },
    set offset(C = 10) {
      i(C), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(C) {
      s(C), y();
    },
    get children() {
      return a();
    },
    set children(C) {
      a(C), y();
    }
  });
}
se(
  Pd,
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
function mr(e) {
  const t = /* @__PURE__ */ E(Jt), n = /* @__PURE__ */ E(() => c(t).nodes), r = /* @__PURE__ */ E(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ E(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!b0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Vl = "tinyflow-component";
class Jm {
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
    const t = document.createElement(Vl);
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
    const n = document.createElement(Vl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const Qm = () => {
  let e = /* @__PURE__ */ Te([]), t = /* @__PURE__ */ Te([]), n = /* @__PURE__ */ Te({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Y(e, r), Y(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      Y(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      Y(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      Y(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      Y(e, [...c(e), r]);
    },
    removeNode: (r) => {
      Y(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Y(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Y(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      Y(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Y(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      Y(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      Y(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Y(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Y(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      Y(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, nt = Qm();
var e2 = /* @__PURE__ */ Q("<button><!></button>");
function Le(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "primary", 7), o = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = e2();
  at(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = R(i);
  return et(s, () => n() ?? ft), I(i), V(e, i), fe({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    },
    get primary() {
      return r();
    },
    set primary(a) {
      r(a), y();
    }
  });
}
se(Le, { children: {}, primary: {} }, [], [], !0);
var t2 = /* @__PURE__ */ Q("<input/>");
function Nd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = t2();
  Pn(r), at(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), V(e, r), fe();
}
se(Nd, {}, [], [], !0);
var n2 = /* @__PURE__ */ Q('<div><input type="hidden"/> <!> <!></div>');
const r2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Md(e, t) {
  de(t, !0), Ke(e, r2);
  const n = w(t, "placeholder", 7), r = w(t, "label", 7), o = w(t, "value", 7), i = w(t, "buttonText", 7, "选择..."), s = w(t, "onChosen", 7), a = /* @__PURE__ */ je(t, [
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
  var l = n2();
  at(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = R(l);
  Pn(u);
  var d = z(u, 2);
  ut(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = z(d, 2);
  return Le(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      Ce();
      var h = Me();
      Ne(() => Fe(h, i())), V(f, h);
    },
    $$slots: { default: !0 }
  }), I(l), Ne(() => Wo(u, o())), V(e, l), fe({
    get placeholder() {
      return n();
    },
    set placeholder(f) {
      n(f), y();
    },
    get label() {
      return r();
    },
    set label(f) {
      r(f), y();
    },
    get value() {
      return o();
    },
    set value(f) {
      o(f), y();
    },
    get buttonText() {
      return i();
    },
    set buttonText(f = "选择...") {
      i(f), y();
    },
    get onChosen() {
      return s();
    },
    set onChosen(f) {
      s(f), y();
    }
  });
}
se(
  Md,
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
var o2 = /* @__PURE__ */ Q("<input/>");
function ut(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = o2();
  Pn(r), at(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), V(e, r), fe();
}
se(ut, {}, [], [], !0);
var i2 = /* @__PURE__ */ Q("<textarea></textarea>");
function rt(e, t) {
  de(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = i2();
  return $p(o), at(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), V(e, o), fe({
    get value() {
      return n();
    },
    set value(i) {
      n(i), y();
    }
  });
}
se(rt, { value: {} }, [], [], !0);
var s2 = /* @__PURE__ */ Q('<div role="button"><!></div>'), a2 = /* @__PURE__ */ Q("<div></div>");
function Td(e, t) {
  const n = Wa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Wa(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  zu();
  var l = a2();
  return at(l, () => ({
    ...r,
    class: `tf-tabs ${Ws(r), dt(() => r.class) ?? ""}`
  })), xt(l, 5, o, Or, (u, d, p) => {
    var f = s2();
    xe(f, "tabindex", p), f.__click = () => a(c(d), p), f.__keydown = ($) => {
      ($.key === "Enter" || $.key === " ") && ($.preventDefault(), a(c(d), p));
    };
    var g = R(f);
    {
      var h = ($) => {
        var m = Me();
        Ne(() => Fe(m, (c(d), dt(() => c(d).label)))), V($, m);
      }, v = ($) => {
        var m = Ie(), P = ue(m);
        et(P, () => (c(d), dt(() => c(d).label) ?? ft)), V($, m);
      };
      ce(g, ($) => {
        c(d), dt(() => typeof c(d).label == "string") ? $(h) : $(v, !1);
      });
    }
    I(f), Ne(() => Tt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), V(u, f);
  }), I(l), V(e, l), fe({
    get items() {
      return o();
    },
    set items(u) {
      o(u), y();
    },
    get onChange() {
      return i();
    },
    set onChange(u) {
      i(u), y();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(u) {
      s(u), y();
    }
  });
}
Un(["click", "keydown"]);
se(Td, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var l2 = (e, t, n) => t(c(n)), u2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, c2 = /* @__PURE__ */ Q('<span class="tf-collapse-item-title-icon"><!></span>'), d2 = /* @__PURE__ */ Q('<div class="tf-collapse-item-description"><!></div>'), f2 = /* @__PURE__ */ Q('<div class="tf-collapse-item-content"><!></div>'), p2 = /* @__PURE__ */ Q('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), g2 = /* @__PURE__ */ Q("<div></div>");
const h2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Od(e, t) {
  de(t, !0), Ke(e, h2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => Zt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = g2();
  return xt(s, 21, n, Or, (a, l, u) => {
    var d = p2(), p = R(d);
    xe(p, "tabindex", u), p.__click = [l2, i, l], p.__keydown = [u2, i, l];
    var f = R(p);
    {
      var g = (C) => {
        var _ = c2(), T = R(_);
        qn(T, {
          get target() {
            return c(l).icon;
          }
        }), I(_), V(C, _);
      };
      ce(f, (C) => {
        c(l).icon && C(g);
      });
    }
    var h = z(f, 2);
    qn(h, {
      get target() {
        return c(l).title;
      }
    });
    var v = z(h, 2);
    I(p);
    var $ = z(p, 2);
    {
      var m = (C) => {
        var _ = d2(), T = R(_);
        qn(T, {
          get target() {
            return c(l).description;
          }
        }), I(_), V(C, _);
      };
      ce($, (C) => {
        c(l).description && C(m);
      });
    }
    var P = z($, 2);
    {
      var x = (C) => {
        var _ = f2(), T = R(_);
        qn(T, {
          get target() {
            return c(l).content;
          }
        }), I(_), V(C, _);
      };
      ce(P, (C) => {
        o().includes(c(l).key) && C(x);
      });
    }
    I(d), Ne((C) => Tt(v, 1, `tf-collapse-item-title-arrow ${C ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), V(a, d);
  }), I(s), Ne(() => {
    Ct(s, t.style), Tt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), V(e, s), fe({
    get items() {
      return n();
    },
    set items(a) {
      n(a), y();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), y();
    }
  });
}
Un(["click", "keydown"]);
se(Od, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function qn(e, t) {
  de(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ie(), o = ue(r);
  {
    var i = (a) => {
      var l = Ie(), u = ue(l);
      et(u, () => n() ?? ft), V(a, l);
    }, s = (a) => {
      var l = Ie(), u = ue(l);
      Gs(u, n), V(a, l);
    };
    ce(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return V(e, r), fe({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
se(qn, { target: {} }, [], [], !0);
var v2 = (e, t, n) => t(c(n)), m2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), y2 = /* @__PURE__ */ Q('<div class="tf-select-content-children"><!></div>'), w2 = /* @__PURE__ */ Q('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), b2 = /* @__PURE__ */ Q('<div class="tf-select-content nopan nodrag"><!></div>'), x2 = /* @__PURE__ */ Q("<!> <!>", 1), C2 = /* @__PURE__ */ Q('<div class="tf-select-input-placeholder"> </div>'), $2 = /* @__PURE__ */ Q('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), _2 = /* @__PURE__ */ Q("<div><!></div>");
function jt(e, t) {
  de(t, !0);
  const n = (m, P = ft) => {
    var x = Ie(), C = ue(x);
    xt(C, 19, P, (_, T) => `${T}_${_.value}`, (_, T) => {
      var A = w2(), Z = ue(A);
      Z.__click = [v2, h, T];
      var F = R(Z), j = R(F);
      {
        var N = (k) => {
          var M = m2();
          V(k, M);
        };
        ce(j, (k) => {
          c(T).children && c(T).children.length > 0 && k(N);
        });
      }
      I(F);
      var S = z(F, 2);
      qn(S, {
        get target() {
          return c(T).label;
        }
      }), I(Z);
      var D = z(Z, 2);
      {
        var b = (k) => {
          var M = y2(), L = R(M);
          n(L, () => c(T).children), I(M), V(k, M);
        };
        ce(D, (k) => {
          c(T).children && c(T).children.length > 0 && (a() || u().includes(c(T).value)) && k(b);
        });
      }
      V(_, A);
    }), V(m, x);
  };
  let r = w(t, "items", 7), o = w(t, "onSelect", 7), i = w(t, "value", 23, () => []), s = w(t, "defaultValue", 23, () => []), a = w(t, "expandAll", 7, !0), l = w(t, "multiple", 7, !1), u = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), p = /* @__PURE__ */ je(t, [
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
  ]), f = /* @__PURE__ */ E(() => {
    const m = [], P = (x) => {
      for (let C of x)
        i().length > 0 ? i().includes(C.value) && m.push(C) : s().includes(C.value) && m.push(C), C.children && C.children.length > 0 && P(C.children);
    };
    return P(r()), m;
  }), g;
  function h(m) {
    g?.hide(), o()?.(m);
  }
  var v = _2();
  at(v, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var $ = R(v);
  return Kt(
    Kr($, {
      floating: (m) => {
        var P = b2(), x = R(P);
        n(x, r), I(P), V(m, P);
      },
      children: (m, P) => {
        var x = $2();
        at(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var C = R(x);
        xt(
          C,
          23,
          () => c(f),
          (_, T) => `${T}_${_.value}`,
          (_, T, A) => {
            var Z = Ie(), F = ue(Z);
            {
              var j = (S) => {
                var D = Ie(), b = ue(D);
                {
                  var k = (M) => {
                    qn(M, {
                      get target() {
                        return c(T).label;
                      }
                    });
                  };
                  ce(b, (M) => {
                    c(A) === 0 && M(k);
                  });
                }
                V(S, D);
              }, N = (S) => {
                var D = x2(), b = ue(D);
                qn(b, {
                  get target() {
                    return c(T).label;
                  }
                });
                var k = z(b, 2);
                {
                  var M = (L) => {
                    var q = Me(",");
                    V(L, q);
                  };
                  ce(k, (L) => {
                    c(A) < c(f).length - 1 && L(M);
                  });
                }
                V(S, D);
              };
              ce(F, (S) => {
                l() ? S(N, !1) : S(j);
              });
            }
            V(_, Z);
          },
          (_) => {
            var T = C2(), A = R(T, !0);
            I(T), Ne(() => Fe(A, d())), V(_, T);
          }
        ), I(C), Ce(2), I(x), V(m, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (m) => g = m,
    () => g
  ), I(v), V(e, v), fe({
    get items() {
      return r();
    },
    set items(m) {
      r(m), y();
    },
    get onSelect() {
      return o();
    },
    set onSelect(m) {
      o(m), y();
    },
    get value() {
      return i();
    },
    set value(m = []) {
      i(m), y();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(m = []) {
      s(m), y();
    },
    get expandAll() {
      return a();
    },
    set expandAll(m = !0) {
      a(m), y();
    },
    get multiple() {
      return l();
    },
    set multiple(m = !1) {
      l(m), y();
    },
    get expandValue() {
      return u();
    },
    set expandValue(m = []) {
      u(m), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder(m) {
      d(m), y();
    }
  });
}
Un(["click"]);
se(
  jt,
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
const wo = Math.min, Er = Math.max, yi = Math.round, un = (e) => ({
  x: e,
  y: e
}), k2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, S2 = {
  start: "end",
  end: "start"
};
function ks(e, t, n) {
  return Er(e, wo(t, n));
}
function Ho(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pr(e) {
  return e.split("-")[0];
}
function Lo(e) {
  return e.split("-")[1];
}
function Dd(e) {
  return e === "x" ? "y" : "x";
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
const E2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Bn(e) {
  return E2.has(pr(e)) ? "y" : "x";
}
function ya(e) {
  return Dd(Bn(e));
}
function P2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Lo(e), o = ya(e), i = ma(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = wi(s)), [s, wi(s)];
}
function N2(e) {
  const t = wi(e);
  return [Ss(e), t, Ss(t)];
}
function Ss(e) {
  return e.replace(/start|end/g, (t) => S2[t]);
}
const Hl = ["left", "right"], Ll = ["right", "left"], M2 = ["top", "bottom"], T2 = ["bottom", "top"];
function O2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ll : Hl : t ? Hl : Ll;
    case "left":
    case "right":
      return t ? M2 : T2;
    default:
      return [];
  }
}
function D2(e, t, n, r) {
  const o = Lo(e);
  let i = O2(pr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ss)))), i;
}
function wi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => k2[t]);
}
function V2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vd(e) {
  return typeof e != "number" ? V2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function bi(e) {
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
function Al(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Bn(t), s = ya(t), a = ma(s), l = pr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Lo(t)) {
    case "start":
      g[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const H2 = async (e, t, n) => {
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
    y: p
  } = Al(u, r, l), f = r, g = {}, h = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: $,
      fn: m
    } = a[v], {
      x: P,
      y: x,
      data: C,
      reset: _
    } = await m({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = P ?? d, p = x ?? p, g = {
      ...g,
      [$]: {
        ...g[$],
        ...C
      }
    }, _ && h <= 50 && (h++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: p
    } = Al(u, f, l)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Hd(e, t) {
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
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Ho(t, e), h = Vd(g), v = a[f ? p === "floating" ? "reference" : "floating" : p], $ = bi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), m = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(P)) ? await (i.getScale == null ? void 0 : i.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = bi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: P,
    strategy: l
  }) : m);
  return {
    top: ($.top - C.top + h.top) / x.y,
    bottom: (C.bottom - $.bottom + h.bottom) / x.y,
    left: ($.left - C.left + h.left) / x.x,
    right: (C.right - $.right + h.right) / x.x
  };
}
const L2 = (e) => ({
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
    } = Ho(e, t) || {};
    if (u == null)
      return {};
    const p = Vd(d), f = {
      x: n,
      y: r
    }, g = ya(o), h = ma(g), v = await s.getDimensions(u), $ = g === "y", m = $ ? "top" : "left", P = $ ? "bottom" : "right", x = $ ? "clientHeight" : "clientWidth", C = i.reference[h] + i.reference[g] - f[g] - i.floating[h], _ = f[g] - i.reference[g], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let A = T ? T[x] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = a.floating[x] || i.floating[h]);
    const Z = C / 2 - _ / 2, F = A / 2 - v[h] / 2 - 1, j = wo(p[m], F), N = wo(p[P], F), S = j, D = A - v[h] - N, b = A / 2 - v[h] / 2 + Z, k = ks(S, b, D), M = !l.arrow && Lo(o) != null && b !== k && i.reference[h] / 2 - (b < S ? j : N) - v[h] / 2 < 0, L = M ? b < S ? b - S : b - D : 0;
    return {
      [g]: f[g] + L,
      data: {
        [g]: k,
        centerOffset: b - k - L,
        ...M && {
          alignmentOffset: L
        }
      },
      reset: M
    };
  }
}), A2 = function(e) {
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
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...$
      } = Ho(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const m = pr(o), P = Bn(a), x = pr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (x || !v ? [wi(a)] : N2(a)), T = h !== "none";
      !f && T && _.push(...D2(a, v, h, C));
      const A = [a, ..._], Z = await Hd(t, $), F = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && F.push(Z[m]), p) {
        const b = P2(o, s, C);
        F.push(Z[b[0]], Z[b[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: F
      }], !F.every((b) => b <= 0)) {
        var N, S;
        const b = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, k = A[b];
        if (k && (!(p === "alignment" && P !== Bn(k)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((L) => L.overflows[0] > 0 && Bn(L.placement) === P)))
          return {
            data: {
              index: b,
              overflows: j
            },
            reset: {
              placement: k
            }
          };
        let M = (S = j.filter((L) => L.overflows[0] <= 0).sort((L, q) => L.overflows[1] - q.overflows[1])[0]) == null ? void 0 : S.placement;
        if (!M)
          switch (g) {
            case "bestFit": {
              var D;
              const L = (D = j.filter((q) => {
                if (T) {
                  const O = Bn(q.placement);
                  return O === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((O) => O > 0).reduce((O, B) => O + B, 0)]).sort((q, O) => q[1] - O[1])[0]) == null ? void 0 : D[0];
              L && (M = L);
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
}, z2 = /* @__PURE__ */ new Set(["left", "top"]);
async function I2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pr(n), a = Lo(n), l = Bn(n) === "y", u = z2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Ho(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), l ? {
    x: g * d,
    y: f * u
  } : {
    x: f * u,
    y: g * d
  };
}
const R2 = function(e) {
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
      } = t, l = await I2(t, e);
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
}, q2 = function(e) {
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
          fn: ($) => {
            let {
              x: m,
              y: P
            } = $;
            return {
              x: m,
              y: P
            };
          }
        },
        ...l
      } = Ho(e, t), u = {
        x: n,
        y: r
      }, d = await Hd(t, l), p = Bn(pr(o)), f = Dd(p);
      let g = u[f], h = u[p];
      if (i) {
        const $ = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", P = g + d[$], x = g - d[m];
        g = ks(P, g, x);
      }
      if (s) {
        const $ = p === "y" ? "top" : "left", m = p === "y" ? "bottom" : "right", P = h + d[$], x = h - d[m];
        h = ks(P, h, x);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function zi() {
  return typeof window < "u";
}
function Zr(e) {
  return Ld(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (Ld(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ld(e) {
  return zi() ? e instanceof Node || e instanceof Ht(e).Node : !1;
}
function Xt(e) {
  return zi() ? e instanceof Element || e instanceof Ht(e).Element : !1;
}
function pn(e) {
  return zi() ? e instanceof HTMLElement || e instanceof Ht(e).HTMLElement : !1;
}
function zl(e) {
  return !zi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ht(e).ShadowRoot;
}
const B2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ao(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !B2.has(o);
}
const Z2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function K2(e) {
  return Z2.has(Zr(e));
}
const j2 = [":popover-open", ":modal"];
function Ii(e) {
  return j2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Y2 = ["transform", "translate", "scale", "rotate", "perspective"], F2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], W2 = ["paint", "layout", "strict", "content"];
function wa(e) {
  const t = ba(), n = Xt(e) ? Ut(e) : e;
  return Y2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || F2.some((r) => (n.willChange || "").includes(r)) || W2.some((r) => (n.contain || "").includes(r));
}
function X2(e) {
  let t = Fn(e);
  for (; pn(t) && !Ir(t); ) {
    if (wa(t))
      return t;
    if (Ii(t))
      return null;
    t = Fn(t);
  }
  return null;
}
function ba() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const U2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ir(e) {
  return U2.has(Zr(e));
}
function Ut(e) {
  return Ht(e).getComputedStyle(e);
}
function Ri(e) {
  return Xt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fn(e) {
  if (Zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    zl(e) && e.host || // Fallback.
    An(e)
  );
  return zl(t) ? t.host : t;
}
function Ad(e) {
  const t = Fn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pn(t) && Ao(t) ? t : Ad(t);
}
function zd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Ad(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ht(o);
  return i ? (Es(s), t.concat(s, s.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, zd(o, []));
}
function Es(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Id(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = pn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = yi(n) !== i || yi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Rd(e) {
  return Xt(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Rd(e);
  if (!pn(t))
    return un(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Id(t);
  let s = (i ? yi(n.width) : n.width) / r, a = (i ? yi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const G2 = /* @__PURE__ */ un(0);
function qd(e) {
  const t = Ht(e);
  return !ba() || !t.visualViewport ? G2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function J2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ht(e) ? !1 : t;
}
function bo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Rd(e);
  let s = un(1);
  t && (r ? Xt(r) && (s = Pr(r)) : s = Pr(e));
  const a = J2(i, n, r) ? qd(i) : un(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Ht(i), g = r && Xt(r) ? Ht(r) : r;
    let h = f, v = Es(h);
    for (; v && r && g !== h; ) {
      const $ = Pr(v), m = v.getBoundingClientRect(), P = Ut(v), x = m.left + (v.clientLeft + parseFloat(P.paddingLeft)) * $.x, C = m.top + (v.clientTop + parseFloat(P.paddingTop)) * $.y;
      l *= $.x, u *= $.y, d *= $.x, p *= $.y, l += x, u += C, h = Ht(v), v = Es(h);
    }
  }
  return bi({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function xa(e, t) {
  const n = Ri(e).scrollLeft;
  return t ? t.left + n : bo(An(e)).left + n;
}
function Bd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    xa(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function Q2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = An(r), a = t ? Ii(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = un(1);
  const d = un(0), p = pn(r);
  if ((p || !p && !i) && ((Zr(r) !== "body" || Ao(s)) && (l = Ri(r)), pn(r))) {
    const g = bo(r);
    u = Pr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? Bd(s, l, !0) : un(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function ey(e) {
  return Array.from(e.getClientRects());
}
function ty(e) {
  const t = An(e), n = Ri(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + xa(e);
  const a = -n.scrollTop;
  return Ut(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ny(e, t) {
  const n = Ht(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = ba();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const ry = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function oy(e, t) {
  const n = bo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = pn(e) ? Pr(e) : un(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Il(e, t, n) {
  let r;
  if (t === "viewport")
    r = ny(e, n);
  else if (t === "document")
    r = ty(An(e));
  else if (Xt(t))
    r = oy(t, n);
  else {
    const o = qd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return bi(r);
}
function Zd(e, t) {
  const n = Fn(e);
  return n === t || !Xt(n) || Ir(n) ? !1 : Ut(n).position === "fixed" || Zd(n, t);
}
function iy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = zd(e, []).filter((a) => Xt(a) && Zr(a) !== "body"), o = null;
  const i = Ut(e).position === "fixed";
  let s = i ? Fn(e) : e;
  for (; Xt(s) && !Ir(s); ) {
    const a = Ut(s), l = wa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && ry.has(o.position) || Ao(s) && !l && Zd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Fn(s);
  }
  return t.set(e, r), r;
}
function sy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ii(t) ? [] : iy(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Il(t, u, o);
    return l.top = Er(d.top, l.top), l.right = wo(d.right, l.right), l.bottom = wo(d.bottom, l.bottom), l.left = Er(d.left, l.left), l;
  }, Il(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ay(e) {
  const {
    width: t,
    height: n
  } = Id(e);
  return {
    width: t,
    height: n
  };
}
function ly(e, t, n) {
  const r = pn(t), o = An(t), i = n === "fixed", s = bo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = un(0);
  function u() {
    l.x = xa(o);
  }
  if (r || !r && !i)
    if ((Zr(t) !== "body" || Ao(o)) && (a = Ri(t)), r) {
      const g = bo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Bd(o, a) : un(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function rs(e) {
  return Ut(e).position === "static";
}
function Rl(e, t) {
  if (!pn(e) || Ut(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Kd(e, t) {
  const n = Ht(e);
  if (Ii(e))
    return n;
  if (!pn(e)) {
    let o = Fn(e);
    for (; o && !Ir(o); ) {
      if (Xt(o) && !rs(o))
        return o;
      o = Fn(o);
    }
    return n;
  }
  let r = Rl(e, t);
  for (; r && K2(r) && rs(r); )
    r = Rl(r, t);
  return r && Ir(r) && rs(r) && !wa(r) ? n : r || X2(e) || n;
}
const uy = async function(e) {
  const t = this.getOffsetParent || Kd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ly(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cy(e) {
  return Ut(e).direction === "rtl";
}
const dy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Q2,
  getDocumentElement: An,
  getClippingRect: sy,
  getOffsetParent: Kd,
  getElementRects: uy,
  getClientRects: ey,
  getDimensions: ay,
  getScale: Pr,
  isElement: Xt,
  isRTL: cy
}, fy = R2, py = q2, gy = A2, hy = L2, vy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: dy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return H2(e, t, {
    ...o,
    platform: i
  });
}, my = ({
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
    const m = document.querySelector(e);
    if (m)
      e = m;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const m = document.querySelector(n);
    if (m)
      u = m;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function p() {
    vy(e, u, {
      placement: r,
      middleware: [
        fy(o),
        // 手动偏移配置
        gy(i),
        //自动翻转
        py(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [hy({ element: d })] : []
      ]
    }).then(({ x: m, y: P, placement: x, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${m}px`,
        top: `${P}px`
      }), l) {
        const { x: _, y: T } = C.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: T != null ? `${T}px` : "",
          right: "",
          bottom: "",
          [A]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function h() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function v(m) {
    m.stopPropagation(), f ? h() : g();
  }
  function $(m) {
    u.contains(m.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((m) => {
    e.addEventListener(m, v);
  }), document.addEventListener("click", $), {
    destroy() {
      t.forEach((m) => {
        e.removeEventListener(m, v);
      }), document.removeEventListener("click", $);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var yy = /* @__PURE__ */ Q('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Kr(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  Gn(() => (a = my({
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
  var u = yy(), d = R(u), p = R(d);
  et(p, n), I(d), Kt(d, (h) => i = h, () => i);
  var f = z(d, 2), g = R(f);
  return et(g, r), I(f), Kt(f, (h) => s = h, () => s), I(u), V(e, u), fe({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), y();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), y();
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), y();
    }
  });
}
se(Kr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function qe(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = Ie(), a = ue(s);
  return Zp(a, () => `h${r()}`, !1, (l, u) => {
    at(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ie(), p = ue(d);
    et(p, () => n() ?? ft), V(u, d);
  }), V(e, s), fe({
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
      return i();
    },
    set mb(l) {
      i(l), y();
    }
  });
}
se(qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var wy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const by = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function qi(e, t) {
  de(t, !0), Ke(e, by);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Le(e, We(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = wy();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
se(qi, {}, [], [], !0);
const xy = () => ({ deleteNode: (e) => {
  nt.removeNode(e), nt.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), gr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Cy = () => ({ copyNode: (e) => {
  const t = nt.getNode(e);
  if (t) {
    const n = gr(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    nt.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ct = () => Mn("svelteflow__node_id"), Wn = () => Mn("tinyflow_options");
var $y = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), _y = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ky = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Sy = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Ey = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Py = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, Ny = /* @__PURE__ */ Q('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), My = /* @__PURE__ */ Q('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Ty = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Oy = /* @__PURE__ */ Q('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Dy = /* @__PURE__ */ Q('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Vy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Qt(e, t) {
  de(t, !0), Ke(e, Vy);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), d = w(t, "allowSetting", 7, !0), p = w(t, "allowSettingOfCondition", 7, !0), f = w(t, "showSourceHandle", 7, !0), g = w(t, "showTargetHandle", 7, !0), h = w(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: $, getNode: m } = $t(), P = /* @__PURE__ */ E(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = xy(), { copyNode: C } = Cy(), _ = Wn(), T = () => {
    _.onNodeExecute?.(m(r()));
  };
  let A = ct();
  var Z = Dy(), F = ue(Z);
  {
    var j = (O) => {
      Pd(O, {
        get position() {
          return be.Top;
        },
        align: "end",
        children: (B, W) => {
          var G = Oy(), ee = R(G);
          {
            var X = (ie) => {
              Le(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ne, le) => {
                  var te = $y();
                  V(ne, te);
                },
                $$slots: { default: !0 }
              });
            };
            ce(ee, (ie) => {
              u() && ie(X);
            });
          }
          var pe = z(ee, 2);
          {
            var re = (ie) => {
              Le(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ne, le) => {
                  var te = _y();
                  V(ne, te);
                },
                $$slots: { default: !0 }
              });
            };
            ce(pe, (ie) => {
              l() && ie(re);
            });
          }
          var he = z(pe, 2);
          {
            var U = (ie) => {
              Le(ie, {
                class: "tf-node-toolbar-item",
                onclick: T,
                children: (ne, le) => {
                  var te = ky();
                  V(ne, te);
                },
                $$slots: { default: !0 }
              });
            };
            ce(he, (ie) => {
              a() && ie(U);
            });
          }
          var $e = z(he, 2);
          {
            var ge = (ie) => {
              Kr(ie, {
                placement: "bottom",
                floating: (ne) => {
                  var le = My(), te = R(le), ye = z(R(te));
                  ut(ye, {
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Ge = Ve.target.value;
                      $(A, { title: Ge });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(te);
                  var oe = z(te, 2), Ee = z(R(oe));
                  rt(Ee, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Ge = Ve.target.value;
                      $(A, { description: Ge });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(oe);
                  var K = z(oe, 2);
                  {
                    var Ue = (Ve) => {
                      var Ge = Sy(), ve = z(R(Ge));
                      rt(ve, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Ye) => {
                          const lt = Ye.target.value;
                          $(A, { condition: lt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(Ge), V(Ve, Ge);
                    };
                    ce(K, (Ve) => {
                      p() && Ve(Ue);
                    });
                  }
                  var ae = z(K, 2), _e = z(R(ae), 2);
                  Pn(_e), _e.__change = [Ey, $, A], I(ae);
                  var ke = z(ae, 2), ze = z(R(ke), 2);
                  Pn(ze), ze.__change = [Py, $, A], I(ke);
                  var pt = z(ke, 2);
                  {
                    var mt = (Ve) => {
                      var Ge = Ny(), ve = ue(Ge), Ye = z(R(ve));
                      const lt = /* @__PURE__ */ E(() => n().loopIntervalMs || "1000");
                      rt(Ye, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (mn) => {
                          const yn = mn.target.value;
                          $(A, { loopIntervalMs: yn });
                        },
                        get value() {
                          return c(lt);
                        }
                      }), I(ve);
                      var Je = z(ve, 2), _t = z(R(Je));
                      const it = /* @__PURE__ */ E(() => n().maxLoopCount || "0");
                      rt(_t, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (mn) => {
                          const yn = mn.target.value;
                          $(A, { maxLoopCount: yn });
                        },
                        get value() {
                          return c(it);
                        }
                      }), I(Je);
                      var It = z(Je, 2), jr = z(R(It));
                      rt(jr, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (mn) => {
                          const yn = mn.target.value;
                          $(A, { loopBreakCondition: yn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(It), V(Ve, Ge);
                    };
                    ce(pt, (Ve) => {
                      n().loopEnable && Ve(mt);
                    });
                  }
                  I(le), Ne(() => {
                    Za(_e, !!n().async), Za(ze, !!n().loopEnable);
                  }), V(ne, le);
                },
                children: (ne, le) => {
                  Le(ne, {
                    class: "tf-node-toolbar-item",
                    children: (te, ye) => {
                      var oe = Ty();
                      V(te, oe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ce($e, (ie) => {
              d() && ie(ge);
            });
          }
          I(G), V(B, G);
        },
        $$slots: { default: !0 }
      });
    };
    ce(F, (O) => {
      (a() || l() || u()) && O(j);
    });
  }
  var N = z(F, 2), S = z(R(N), 2), D = R(S);
  Od(D, {
    get items() {
      return c(P);
    },
    get activeKeys() {
      return v;
    },
    onChange: (O, B) => {
      $(r(), { expand: B?.includes("key") }), h()?.(B?.includes("key") ? "key" : "");
    }
  }), I(S), I(N);
  var b = z(N, 2);
  {
    var k = (O) => {
      Yn(O, {
        type: "target",
        get position() {
          return be.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ce(b, (O) => {
      g() && O(k);
    });
  }
  var M = z(b, 2);
  {
    var L = (O) => {
      Yn(O, {
        type: "source",
        get position() {
          return be.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ce(M, (O) => {
      f() && O(L);
    });
  }
  var q = z(M, 2);
  return et(q, () => i() ?? ft), V(e, Z), fe({
    get data() {
      return n();
    },
    set data(O) {
      n(O), y();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), y();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), y();
    },
    get handle() {
      return i();
    },
    set handle(O) {
      i(O), y();
    },
    get children() {
      return s();
    },
    set children(O) {
      s(O), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(O = !0) {
      a(O), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(O = !0) {
      u(O), y();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(O = !0) {
      d(O), y();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(O = !0) {
      p(O), y();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(O = !0) {
      f(O), y();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(O = !0) {
      g(O), y();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(O) {
      h(O), y();
    }
  });
}
Un(["change"]);
se(
  Qt,
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
const jd = [
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
], Hy = [
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
var Ly = /* @__PURE__ */ Q('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ay = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), zy = /* @__PURE__ */ Q('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Iy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Yd(e, t) {
  de(t, !0), Ke(e, Iy);
  const n = w(t, "parameter", 7), r = w(t, "index", 7);
  let o = ct(), i = /* @__PURE__ */ E(() => mr(o)), s = /* @__PURE__ */ E(() => ({
    ...n(),
    ...c(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = $t(), l = (_, T) => {
    a(o, (A) => {
      let Z = A.data.parameters;
      return Z[r()][_] = T, { parameters: Z };
    });
  }, u = (_) => {
    const T = _.target.value;
    l("name", T);
  }, d = (_) => {
    const T = _.target.checked;
    l("required", T);
  }, p = (_) => {
    const T = _.value;
    T && l("dataType", T);
  };
  let f;
  const g = () => {
    a(o, (_) => {
      let T = _.data.parameters;
      return T.splice(r(), 1), { parameters: [...T] };
    }), f?.hide();
  };
  var h = zy(), v = ue(h), $ = R(v);
  ut($, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: u
  }), I(v);
  var m = z(v, 2), P = R(m);
  Nd(P, {
    get checked() {
      return c(s).required;
    },
    onchange: d
  }), I(m);
  var x = z(m, 2), C = R(x);
  return Kt(
    Kr(C, {
      placement: "bottom",
      floating: (_) => {
        var T = Ly(), A = R(T), Z = z(R(A));
        const F = /* @__PURE__ */ E(() => c(s).dataType ? [c(s).dataType] : ["String"]);
        jt(Z, {
          get items() {
            return jd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return c(F);
          }
        }), I(A);
        var j = z(A, 2), N = z(R(j));
        rt(N, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(s).defaultValue;
          },
          onchange: (M) => {
            const L = M.target.value;
            l("defaultValue", L);
          }
        }), I(j);
        var S = z(j, 2), D = z(R(S));
        rt(D, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(s).description;
          },
          onchange: (M) => {
            const L = M.target.value;
            l("description", L);
          }
        }), I(S);
        var b = z(S, 2), k = R(b);
        Le(k, {
          onclick: g,
          children: (M, L) => {
            Ce();
            var q = Me("删除");
            V(M, q);
          },
          $$slots: { default: !0 }
        }), I(b), I(T), V(_, T);
      },
      children: (_, T) => {
        Le(_, {
          class: "input-btn-more",
          children: (A, Z) => {
            var F = Ay();
            V(A, F);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (_) => f = _,
    () => f
  ), I(x), V(e, h), fe({
    get parameter() {
      return n();
    },
    set parameter(_) {
      n(_), y();
    },
    get index() {
      return r();
    },
    set index(_) {
      r(_), y();
    }
  });
}
se(Yd, { parameter: {}, index: {} }, [], [], !0);
var Ry = /* @__PURE__ */ Q('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), qy = /* @__PURE__ */ Q('<div class="none-params svelte-3n0wca">无输入参数</div>'), By = /* @__PURE__ */ Q('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Zy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Fd(e, t) {
  de(t, !0), Ke(e, Zy);
  let n = ct(), r = /* @__PURE__ */ E(() => mr(n)), o = /* @__PURE__ */ E(() => [...c(r)?.current?.data?.parameters || []]);
  var i = By(), s = R(i);
  {
    var a = (u) => {
      var d = Ry();
      Ce(4), V(u, d);
    };
    ce(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = z(s, 2);
  xt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      Yd(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = qy();
      V(u, d);
    }
  ), I(i), V(e, i), fe();
}
se(Fd, {}, [], [], !0);
const xi = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = gr()), xi(t.children);
}), e), vn = () => {
  const { updateNodeData: e } = $t();
  return {
    addParameter: (t, n = "parameters", r) => {
      xi(r?.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: gr()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], { [n]: [...s] };
      });
    }
  };
};
var Ky = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), jy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Yy = /* @__PURE__ */ Q('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Fy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Wd(e, t) {
  de(t, !0), Ke(e, Fy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn();
  return Qt(e, We(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = Ky();
      V(s, a);
    },
    children: (s, a) => {
      var l = Yy(), u = ue(l), d = R(u);
      qe(d, {
        level: 3,
        children: (g, h) => {
          Ce();
          var v = Me("输入参数");
          V(g, v);
        },
        $$slots: { default: !0 }
      });
      var p = z(d, 2);
      Le(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var v = jy();
          V(g, v);
        },
        $$slots: { default: !0 }
      }), I(u);
      var f = z(u, 2);
      Fd(f, {}), V(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
se(Wd, { data: {} }, [], [], !0);
const Xd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Xd(e, r.source, n));
}, Ud = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Ud(r.children, t + "." + r.name, n)
})), ql = (e, t, n) => {
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
          children: Ud(r, e.id, t)
        };
    }
  }
}, Wy = (e = !1) => {
  const t = ct(), n = mr(t), r = /* @__PURE__ */ E(Jt), o = /* @__PURE__ */ E(() => c(r).nodes), i = /* @__PURE__ */ E(() => c(r).edges), s = /* @__PURE__ */ E(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ E(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = ql(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Xd(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = ql(p, f, u);
          g && l.push(g);
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
var Xy = /* @__PURE__ */ Q('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Uy = /* @__PURE__ */ Q('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Gy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  de(t, !0), Ke(e, Gy), Gn(() => {
    c(l).refType || g({ value: "ref" });
  });
  const n = w(t, "parameter", 7), r = w(t, "index", 7), o = w(t, "dataKeyName", 7), i = w(t, "useChildrenOnly", 7);
  let s = ct(), a = /* @__PURE__ */ E(() => mr(s)), l = /* @__PURE__ */ E(() => ({
    ...n(),
    ...c(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = $t(), d = (N, S) => {
    u(s, (D) => {
      let b = D.data?.[o()];
      return b[r()] = { ...b[r()], [N]: S }, { [o()]: b };
    });
  }, p = (N, S) => {
    const D = S.target.value;
    d(N, D);
  }, f = (N) => {
    const S = N.value;
    d("ref", S);
  }, g = (N) => {
    const S = N.value;
    d("refType", S);
  };
  let h;
  const v = () => {
    u(s, (N) => {
      let S = N.data?.[o()];
      return S.splice(r(), 1), { [o()]: [...S] };
    }), h?.hide();
  };
  let $ = Wy(i());
  var m = Uy(), P = ue(m), x = R(P);
  const C = /* @__PURE__ */ E(() => c(l).nameDisabled === !0);
  ut(x, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(C);
    },
    oninput: (N) => p("name", N)
  }), I(P);
  var _ = z(P, 2), T = R(_);
  {
    var A = (N) => {
      ut(N, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (S) => p("value", S)
      });
    }, Z = (N, S) => {
      {
        var D = (b) => {
          const k = /* @__PURE__ */ E(() => [c(l).ref]);
          jt(b, {
            get items() {
              return $.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(k);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ce(
          N,
          (b) => {
            c(l).refType !== "input" && b(D);
          },
          S
        );
      }
    };
    ce(T, (N) => {
      c(l).refType === "fixed" ? N(A) : N(Z, !1);
    });
  }
  I(_);
  var F = z(_, 2), j = R(F);
  return Kt(
    Kr(j, {
      placement: "bottom",
      floating: (N) => {
        var S = Xy(), D = R(S), b = z(R(D));
        const k = /* @__PURE__ */ E(() => c(l).refType ? [c(l).refType] : []);
        jt(b, {
          get items() {
            return Hy;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(k);
          },
          onSelect: g
        }), I(D);
        var M = z(D, 2), L = z(R(M));
        rt(L, {
          rows: 1,
          style: "width: 100%;",
          onchange: (G) => {
            p("defaultValue", G);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), I(M);
        var q = z(M, 2), O = z(R(q));
        rt(O, {
          rows: 3,
          style: "width: 100%;",
          onchange: (G) => {
            p("description", G);
          },
          get value() {
            return c(l).description;
          }
        }), I(q);
        var B = z(q, 2), W = R(B);
        Le(W, {
          onclick: v,
          children: (G, ee) => {
            Ce();
            var X = Me("删除");
            V(G, X);
          },
          $$slots: { default: !0 }
        }), I(B), I(S), V(N, S);
      },
      children: (N, S) => {
        qi(N, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (N) => h = N,
    () => h
  ), I(F), V(e, m), fe({
    get parameter() {
      return n();
    },
    set parameter(N) {
      n(N), y();
    },
    get index() {
      return r();
    },
    set index(N) {
      r(N), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(N) {
      o(N), y();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(N) {
      i(N), y();
    }
  });
}
se(
  Gd,
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
var Jy = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), Qy = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), ew = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const tw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Pt(e, t) {
  de(t, !0), Ke(e, tw);
  const n = w(t, "noneParameterText", 7, "无输入参数"), r = w(t, "dataKeyName", 7, "parameters"), o = w(t, "useChildrenOnly", 7);
  let i = ct(), s = /* @__PURE__ */ E(() => mr(i)), a = /* @__PURE__ */ E(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = ew(), u = R(l);
  {
    var d = (f) => {
      var g = Jy();
      Ce(4), V(f, g);
    };
    ce(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = z(u, 2);
  return xt(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      Gd(f, {
        get parameter() {
          return c(g);
        },
        get index() {
          return c(h);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (f) => {
      var g = Qy(), h = R(g, !0);
      I(g), Ne(() => Fe(h, n())), V(f, g);
    }
  ), I(l), V(e, l), fe({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
      n(f), y();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), y();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), y();
    }
  });
}
se(Pt, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), rw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ Q('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const iw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Jd(e, t) {
  de(t, !0), Ke(e, iw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn();
  return Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (s) => {
        var a = nw();
        V(s, a);
      },
      children: (s, a) => {
        var l = ow(), u = ue(l), d = R(u);
        qe(d, {
          level: 3,
          children: (g, h) => {
            Ce();
            var v = Me("输出参数");
            V(g, v);
          },
          $$slots: { default: !0 }
        });
        var p = z(d, 2);
        Le(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var v = rw();
            V(g, v);
          },
          $$slots: { default: !0 }
        }), I(u);
        var f = z(u, 2);
        Pt(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), V(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
se(Jd, { data: {} }, [], [], !0);
const os = (e) => JSON.parse(JSON.stringify(e));
var sw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), aw = /* @__PURE__ */ Q('<div class="input-more-item svelte-1cfeest"><!></div>'), lw = /* @__PURE__ */ Q('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), uw = /* @__PURE__ */ Q('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const cw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Qd(e, t) {
  de(t, !0), Ke(e, cw);
  const n = w(t, "parameter", 7), r = w(t, "position", 7), o = w(t, "dataKeyName", 7);
  let i = ct(), s = /* @__PURE__ */ E(() => mr(i)), a = /* @__PURE__ */ E(() => {
    let D = c(s)?.current?.data?.[o()], b;
    if (D && r().length > 0) {
      let k = D;
      for (let M = 0; M < r().length; M++) {
        const L = r()[M];
        M == r().length - 1 ? b = k[L] : k = k[L].children;
      }
    }
    return { ...n(), ...b };
  });
  const { updateNodeData: l } = $t(), u = (D, b) => {
    l(i, (k) => {
      const M = k.data?.[o()];
      if (M && r().length > 0) {
        let L = M;
        for (let q = 0; q < r().length; q++) {
          const O = r()[q];
          q == r().length - 1 ? L[O] = { ...L[O], [D]: b } : L = L[O].children;
        }
      }
      return { [o()]: [...os(M)] };
    });
  }, d = (D, b) => {
    const k = b.target.value;
    u(D, k);
  }, p = (D) => {
    const b = D.value;
    u("dataType", b);
  };
  let f;
  const g = () => {
    l(i, (D) => {
      let b = D.data?.[o()];
      if (b && r().length > 0) {
        let k = b;
        for (let M = 0; M < r().length; M++) {
          const L = r()[M];
          M == r().length - 1 ? k.splice(L, 1) : k = k[L].children;
        }
      }
      return { [o()]: [...os(b)] };
    }), f?.hide();
  }, h = () => {
    l(i, (D) => {
      let b = D.data?.[o()];
      if (b && r().length > 0) {
        let k = b;
        for (let M = 0; M < r().length; M++) {
          const L = r()[M];
          M == r().length - 1 ? k[L].children ? k[L].children.push({ id: gr(), name: "newParam", dataType: "String" }) : k[L].children = [{ id: gr(), name: "newParam", dataType: "String" }] : k = k[L].children;
        }
      }
      return { [o()]: [...os(b)] };
    });
  };
  var v = uw(), $ = ue(v), m = R($);
  {
    var P = (D) => {
      var b = Ie(), k = ue(b);
      xt(k, 17, r, Or, (M, L) => {
        Ce();
        var q = Me(" ");
        V(M, q);
      }), V(D, b);
    };
    ce(m, (D) => {
      r().length > 1 && D(P);
    });
  }
  var x = z(m, 2);
  const C = /* @__PURE__ */ E(() => c(a).nameDisabled === !0);
  ut(x, {
    style: "width: 100%;",
    get value() {
      return c(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (D) => {
      d("name", D);
    },
    get disabled() {
      return c(C);
    }
  }), I($);
  var _ = z($, 2), T = R(_);
  const A = /* @__PURE__ */ E(() => c(a).dataType ? [c(a).dataType] : []), Z = /* @__PURE__ */ E(() => c(a).dataTypeDisabled === !0);
  jt(T, {
    get items() {
      return jd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(A);
    },
    get disabled() {
      return c(Z);
    },
    onSelect: p
  });
  var F = z(T, 2);
  {
    var j = (D) => {
      Le(D, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: h,
        children: (b, k) => {
          var M = sw();
          V(b, M);
        },
        $$slots: { default: !0 }
      });
    };
    ce(F, (D) => {
      (c(a).dataType === "Object" || c(a).dataType === "Array") && c(a).addChildDisabled !== !0 && D(j);
    });
  }
  I(_);
  var N = z(_, 2), S = R(N);
  return Kt(
    Kr(S, {
      placement: "bottom",
      floating: (D) => {
        var b = lw(), k = R(b), M = z(R(k));
        const L = /* @__PURE__ */ E(() => c(a).defaultValue || "");
        rt(M, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(L);
          },
          onchange: (ee) => {
            d("defaultValue", ee);
          }
        }), I(k);
        var q = z(k, 2), O = z(R(q));
        const B = /* @__PURE__ */ E(() => c(a).description || "");
        rt(O, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(B);
          },
          onchange: (ee) => {
            d("description", ee);
          }
        }), I(q);
        var W = z(q, 2);
        {
          var G = (ee) => {
            var X = aw(), pe = R(X);
            Le(pe, {
              onclick: g,
              children: (re, he) => {
                Ce();
                var U = Me("删除");
                V(re, U);
              },
              $$slots: { default: !0 }
            }), I(X), V(ee, X);
          };
          ce(W, (ee) => {
            c(a).deleteDisabled !== !0 && ee(G);
          });
        }
        I(b), V(D, b);
      },
      children: (D, b) => {
        qi(D, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => f = D,
    () => f
  ), I(N), V(e, v), fe({
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), y();
    },
    get position() {
      return r();
    },
    set position(D) {
      r(D), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(D) {
      o(D), y();
    }
  });
}
se(Qd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var dw = /* @__PURE__ */ Q("<!> <!>", 1), fw = /* @__PURE__ */ Q('<div class="none-params svelte-1sm1mgi"> </div>'), pw = /* @__PURE__ */ Q('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), gw = /* @__PURE__ */ Q('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const hw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Qn(e, t) {
  de(t, !0), Ke(e, hw);
  const n = (f, g = ft, h = ft) => {
    var v = Ie(), $ = ue(v);
    xt(
      $,
      19,
      g,
      (m) => `${m.id}_${m.children ? m.children.length : 0}`,
      (m, P, x) => {
        var C = dw(), _ = ue(C);
        const T = /* @__PURE__ */ E(() => [...h(), c(x)]);
        Qd(_, {
          get parameter() {
            return c(P);
          },
          get position() {
            return c(T);
          },
          get dataKeyName() {
            return o();
          }
        });
        var A = z(_, 2);
        {
          var Z = (F) => {
            var j = /* @__PURE__ */ Bs(() => [...h(), c(x)]);
            n(F, () => c(P).children, () => c(j));
          };
          ce(A, (F) => {
            c(P).children && F(Z);
          });
        }
        V(m, C);
      },
      (m) => {
        var P = Ie(), x = ue(P);
        {
          var C = (_) => {
            var T = fw(), A = R(T, !0);
            I(T), Ne(() => Fe(A, r())), V(_, T);
          };
          ce(x, (_) => {
            h().length === 0 && _(C);
          });
        }
        V(m, P);
      }
    ), V(f, v);
  }, r = w(t, "noneParameterText", 7, "无输出参数"), o = w(t, "dataKeyName", 7, "outputDefs");
  let i = ct(), s = /* @__PURE__ */ E(() => mr(i)), a = /* @__PURE__ */ E(() => [...c(s)?.current?.data?.[o()] || []]);
  var l = gw(), u = R(l);
  {
    var d = (f) => {
      var g = pw();
      Ce(4), V(f, g);
    };
    ce(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = z(u, 2);
  return n(p, () => c(a) || [], () => []), I(l), V(e, l), fe({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(f = "无输出参数") {
      r(f), y();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(f = "outputDefs") {
      o(f), y();
    }
  });
}
se(Qn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var vw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), mw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), yw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), ww = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), bw = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), xw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const $w = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function ef(e, t) {
  de(t, !0), Ke(e, $w);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn(), s = Wn();
  let a = /* @__PURE__ */ Te(Zt([]));
  Gn(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = $t(), u = (d) => {
    l(o, () => ({ outType: d })), d === "text" ? l(o, {
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
  return ot(() => {
    n().outType || u("text");
  }), Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = vw();
        V(d, p);
      },
      children: (d, p) => {
        var f = Cw(), g = ue(f), h = R(g);
        qe(h, {
          level: 3,
          children: (te, ye) => {
            Ce();
            var oe = Me("输入参数");
            V(te, oe);
          },
          $$slots: { default: !0 }
        });
        var v = z(h, 2);
        Le(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (te, ye) => {
            var oe = mw();
            V(te, oe);
          },
          $$slots: { default: !0 }
        }), I(g);
        var $ = z(g, 2);
        Pt($, {});
        var m = z($, 2);
        qe(m, {
          level: 3,
          mt: "10px",
          children: (te, ye) => {
            Ce();
            var oe = Me("模型设置");
            V(te, oe);
          },
          $$slots: { default: !0 }
        });
        var P = z(m, 4), x = R(P);
        const C = /* @__PURE__ */ E(() => n().llmId ? [n().llmId] : []);
        jt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (te) => {
            const ye = te.value;
            l(o, () => ({ llmId: ye }));
          },
          get value() {
            return c(C);
          }
        });
        var _ = z(x, 2);
        qi(_, {}), I(P);
        var T = z(P, 4), A = R(T), Z = R(A), F = R(Z);
        I(Z);
        var j = z(Z, 2);
        Pn(j), j.__input = [yw, l, o], I(A), I(T);
        var N = z(T, 2), S = R(N), D = R(S), b = R(D);
        I(D);
        var k = z(D, 2);
        Pn(k), k.__input = [ww, l, o], I(S), I(N);
        var M = z(N, 2), L = R(M), q = R(L), O = R(q);
        I(q);
        var B = z(q, 2);
        Pn(B), B.__input = [bw, l, o], I(L), I(M);
        var W = z(M, 4), G = R(W);
        const ee = /* @__PURE__ */ E(() => n().systemPrompt || "");
        rt(G, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(ee);
          },
          oninput: (te) => {
            l(o, { systemPrompt: te.target.value });
          }
        }), I(W);
        var X = z(W, 4), pe = R(X);
        const re = /* @__PURE__ */ E(() => n().userPrompt || "");
        rt(pe, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(re);
          },
          oninput: (te) => {
            l(o, { userPrompt: te.target.value });
          }
        }), I(X);
        var he = z(X, 2), U = R(he);
        qe(U, {
          level: 3,
          mt: "10px",
          children: (te, ye) => {
            Ce();
            var oe = Me("输出参数");
            V(te, oe);
          },
          $$slots: { default: !0 }
        });
        var $e = z(U, 2);
        const ge = /* @__PURE__ */ E(() => n().outType ? [n().outType] : []);
        jt($e, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (te) => {
            u(te.value);
          },
          get value() {
            return c(ge);
          }
        });
        var ie = z($e, 2);
        {
          var ne = (te) => {
            Le(te, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ye, oe) => {
                var Ee = xw();
                V(ye, Ee);
              },
              $$slots: { default: !0 }
            });
          };
          ce(ie, (te) => {
            n().outType === "json" && te(ne);
          });
        }
        I(he);
        var le = z(he, 2);
        Qn(le, {}), Ne(() => {
          Fe(F, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Wo(j, n().temperature ?? 0.5), Fe(b, `Top P: ${n().topP ?? 0.9 ?? ""}`), Wo(k, n().topP ?? 0.9), Fe(O, `Top K: ${n().topK ?? 50 ?? ""}`), Wo(B, n().topK ?? 50);
        }), V(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(d) {
      n(d), y();
    }
  });
}
Un(["input"]);
se(ef, { data: {} }, [], [], !0);
var _w = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), kw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ew = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Pw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  de(t, !0), Ke(e, Pw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Gn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ct(), { addParameter: i } = vn(), { updateNodeData: s } = $t(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = _w();
        V(l, u);
      },
      children: (l, u) => {
        var d = Ew(), p = ue(d), f = R(p);
        qe(f, {
          level: 3,
          children: (j, N) => {
            Ce();
            var S = Me("输入参数");
            V(j, S);
          },
          $$slots: { default: !0 }
        });
        var g = z(f, 2);
        Le(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, N) => {
            var S = kw();
            V(j, S);
          },
          $$slots: { default: !0 }
        }), I(p);
        var h = z(p, 2);
        Pt(h, {});
        var v = z(h, 2);
        qe(v, {
          level: 3,
          mt: "10px",
          children: (j, N) => {
            Ce();
            var S = Me("代码");
            V(j, S);
          },
          $$slots: { default: !0 }
        });
        var $ = z(v, 4), m = R($);
        const P = /* @__PURE__ */ E(() => n().engine ? [n().engine] : ["qlexpress"]);
        jt(m, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (j) => {
            const N = j.value;
            s(o, () => ({ engine: N }));
          },
          get value() {
            return c(P);
          }
        }), I($);
        var x = z($, 4), C = R(x);
        const _ = /* @__PURE__ */ E(() => n().code || "");
        rt(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (j) => {
            s(o, () => ({ code: j.target.value }));
          },
          get value() {
            return c(_);
          }
        }), I(x);
        var T = z(x, 2), A = R(T);
        qe(A, {
          level: 3,
          mt: "10px",
          children: (j, N) => {
            Ce();
            var S = Me("输出参数");
            V(j, S);
          },
          $$slots: { default: !0 }
        });
        var Z = z(A, 2);
        Le(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (j, N) => {
            var S = Sw();
            V(j, S);
          },
          $$slots: { default: !0 }
        }), I(T);
        var F = z(T, 2);
        Qn(F, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
se(tf, { data: {} }, [], [], !0);
var Nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Mw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ow = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function nf(e, t) {
  de(t, !0), Ke(e, Ow);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn(), { updateNodeData: s } = $t();
  return ot(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Nw();
        V(a, l);
      },
      children: (a, l) => {
        var u = Tw(), d = ue(u), p = R(d);
        qe(p, {
          level: 3,
          children: (_, T) => {
            Ce();
            var A = Me("输入参数");
            V(_, A);
          },
          $$slots: { default: !0 }
        });
        var f = z(p, 2);
        Le(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, T) => {
            var A = Mw();
            V(_, A);
          },
          $$slots: { default: !0 }
        }), I(d);
        var g = z(d, 2);
        Pt(g, {});
        var h = z(g, 2);
        qe(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (_, T) => {
            Ce();
            var A = Me("模板内容");
            V(_, A);
          },
          $$slots: { default: !0 }
        });
        var v = z(h, 2), $ = R(v);
        const m = /* @__PURE__ */ E(() => n().template || "");
        rt($, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (_) => {
            s(o, () => ({ template: _.target.value }));
          },
          get value() {
            return c(m);
          }
        }), I(v);
        var P = z(v, 2), x = R(P);
        qe(x, {
          level: 3,
          mt: "10px",
          children: (_, T) => {
            Ce();
            var A = Me("输出参数");
            V(_, A);
          },
          $$slots: { default: !0 }
        }), I(P);
        var C = z(P, 2);
        Qn(C, {}), V(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
se(nf, { data: {} }, [], [], !0);
var Dw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Vw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ Q('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), zw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iw = /* @__PURE__ */ Q('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Rw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), qw = /* @__PURE__ */ Q('<div style="width: 100%"><!></div>'), Bw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zw = /* @__PURE__ */ Q('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Kw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function rf(e, t) {
  de(t, !0), Ke(e, Kw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Gn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ct(), { addParameter: s } = vn(), { updateNodeData: a } = $t();
  return Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Dw();
        V(l, u);
      },
      children: (l, u) => {
        var d = Zw(), p = ue(d), f = R(p);
        qe(f, {
          level: 3,
          children: (ae, _e) => {
            Ce();
            var ke = Me("输入参数");
            V(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var g = z(f, 2);
        Le(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (ae, _e) => {
            var ke = Vw();
            V(ae, ke);
          },
          $$slots: { default: !0 }
        }), I(p);
        var h = z(p, 2);
        Pt(h, {});
        var v = z(h, 2);
        qe(v, {
          level: 3,
          mt: "10px",
          children: (ae, _e) => {
            Ce();
            var ke = Me("URL 地址");
            V(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var $ = z(v, 2), m = R($), P = R(m);
        const x = /* @__PURE__ */ E(() => n().method ? [n().method] : ["get"]);
        jt(P, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ae) => {
            const _e = ae.value;
            a(i, () => ({ method: _e }));
          },
          get value() {
            return c(x);
          }
        }), I(m);
        var C = z(m, 2), _ = R(C);
        const T = /* @__PURE__ */ E(() => n().url || "");
        ut(_, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ae) => {
            a(i, () => ({ url: ae.target.value }));
          },
          get value() {
            return c(T);
          }
        }), I(C), I($);
        var A = z($, 2), Z = R(A);
        qe(Z, {
          level: 3,
          children: (ae, _e) => {
            Ce();
            var ke = Me("Http 头信息");
            V(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var F = z(Z, 2);
        Le(F, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ae, _e) => {
            var ke = Hw();
            V(ae, ke);
          },
          $$slots: { default: !0 }
        }), I(A);
        var j = z(A, 2);
        Pt(j, { dataKeyName: "headers" });
        var N = z(j, 2);
        qe(N, {
          level: 3,
          mt: "10px",
          children: (ae, _e) => {
            Ce();
            var ke = Me("Body");
            V(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var S = z(N, 2), D = R(S), b = R(D);
        const k = /* @__PURE__ */ E(() => !n().bodyType);
        ut(b, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return c(k);
          },
          onchange: (ae) => {
            ae.target?.checked && a(i, { bodyType: "" });
          }
        }), Ce(), I(D);
        var M = z(D, 2), L = R(M);
        const q = /* @__PURE__ */ E(() => n().bodyType === "form-data");
        ut(L, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return c(q);
          },
          onchange: (ae) => {
            ae.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), Ce(), I(M);
        var O = z(M, 2), B = R(O);
        const W = /* @__PURE__ */ E(() => n().bodyType === "x-www-form-urlencoded");
        ut(B, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return c(W);
          },
          onchange: (ae) => {
            ae.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ce(), I(O);
        var G = z(O, 2), ee = R(G);
        const X = /* @__PURE__ */ E(() => n().bodyType === "json");
        ut(ee, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return c(X);
          },
          onchange: (ae) => {
            ae.target?.checked && a(i, { bodyType: "json" });
          }
        }), Ce(), I(G);
        var pe = z(G, 2), re = R(pe);
        const he = /* @__PURE__ */ E(() => n().bodyType === "raw");
        ut(re, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return c(he);
          },
          onchange: (ae) => {
            ae.target?.checked && a(i, { bodyType: "raw" });
          }
        }), Ce(), I(pe), I(S);
        var U = z(S, 2);
        {
          var $e = (ae) => {
            var _e = Aw(), ke = ue(_e), ze = R(ke);
            qe(ze, {
              level: 3,
              children: (Ve, Ge) => {
                Ce();
                var ve = Me("参数");
                V(Ve, ve);
              },
              $$slots: { default: !0 }
            });
            var pt = z(ze, 2);
            Le(pt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Ve, Ge) => {
                var ve = Lw();
                V(Ve, ve);
              },
              $$slots: { default: !0 }
            }), I(ke);
            var mt = z(ke, 2);
            Pt(mt, { dataKeyName: "formData" }), V(ae, _e);
          };
          ce(U, (ae) => {
            n().bodyType === "form-data" && ae($e);
          });
        }
        var ge = z(U, 2);
        {
          var ie = (ae) => {
            var _e = Iw(), ke = ue(_e), ze = R(ke);
            qe(ze, {
              level: 3,
              children: (Ve, Ge) => {
                Ce();
                var ve = Me("Body 参数");
                V(Ve, ve);
              },
              $$slots: { default: !0 }
            });
            var pt = z(ze, 2);
            Le(pt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Ve, Ge) => {
                var ve = zw();
                V(Ve, ve);
              },
              $$slots: { default: !0 }
            }), I(ke);
            var mt = z(ke, 2);
            Pt(mt, { dataKeyName: "formUrlencoded" }), V(ae, _e);
          };
          ce(ge, (ae) => {
            n().bodyType === "x-www-form-urlencoded" && ae(ie);
          });
        }
        var ne = z(ge, 2);
        {
          var le = (ae) => {
            var _e = Rw(), ke = R(_e);
            rt(ke, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ze) => {
                a(i, { bodyJson: ze.target.value });
              }
            }), I(_e), V(ae, _e);
          };
          ce(ne, (ae) => {
            n().bodyType === "json" && ae(le);
          });
        }
        var te = z(ne, 2);
        {
          var ye = (ae) => {
            var _e = qw(), ke = R(_e);
            rt(ke, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ze) => {
                a(i, { bodyRaw: ze.target.value });
              }
            }), I(_e), V(ae, _e);
          };
          ce(te, (ae) => {
            n().bodyType === "raw" && ae(ye);
          });
        }
        var oe = z(te, 2), Ee = R(oe);
        qe(Ee, {
          level: 3,
          mt: "10px",
          children: (ae, _e) => {
            Ce();
            var ke = Me("输出参数");
            V(ae, ke);
          },
          $$slots: { default: !0 }
        });
        var K = z(Ee, 2);
        Le(K, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ae, _e) => {
            var ke = Bw();
            V(ae, ke);
          },
          $$slots: { default: !0 }
        }), I(oe);
        var Ue = z(oe, 2);
        Qn(Ue, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
se(rf, { data: {} }, [], [], !0);
var jw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Yw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Ww = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function of(e, t) {
  de(t, !0), Ke(e, Ww);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn(), s = Wn();
  let a = /* @__PURE__ */ Te(Zt([]));
  Gn(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = $t();
  return ot(() => {
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
  }), Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = jw();
        V(u, d);
      },
      children: (u, d) => {
        var p = Fw(), f = ue(p), g = R(f);
        qe(g, {
          level: 3,
          children: (S, D) => {
            Ce();
            var b = Me("输入参数");
            V(S, b);
          },
          $$slots: { default: !0 }
        });
        var h = z(g, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, D) => {
            var b = Yw();
            V(S, b);
          },
          $$slots: { default: !0 }
        }), I(f);
        var v = z(f, 2);
        Pt(v, {});
        var $ = z(v, 2);
        qe($, {
          level: 3,
          mt: "10px",
          children: (S, D) => {
            Ce();
            var b = Me("知识库设置");
            V(S, b);
          },
          $$slots: { default: !0 }
        });
        var m = z($, 4), P = R(m);
        const x = /* @__PURE__ */ E(() => n().knowledgeId ? [n().knowledgeId] : []);
        jt(P, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (S) => {
            const D = S.value;
            l(o, () => ({ knowledgeId: D }));
          },
          get value() {
            return c(x);
          }
        }), I(m);
        var C = z(m, 4), _ = R(C);
        ut(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (S) => {
            const D = S.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), I(C);
        var T = z(C, 4), A = R(T);
        const Z = /* @__PURE__ */ E(() => n().limit || "");
        ut(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (S) => {
            const D = S.target.value;
            l(o, () => ({ limit: D }));
          },
          get value() {
            return c(Z);
          }
        }), I(T);
        var F = z(T, 2), j = R(F);
        qe(j, {
          level: 3,
          mt: "10px",
          children: (S, D) => {
            Ce();
            var b = Me("输出参数");
            V(S, b);
          },
          $$slots: { default: !0 }
        }), I(F);
        var N = z(F, 2);
        Qn(N, {}), V(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
se(of, { data: {} }, [], [], !0);
var Xw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Uw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ Q('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function sf(e, t) {
  de(t, !0), Ke(e, Jw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn(), s = Wn();
  let a = /* @__PURE__ */ Te(Zt([]));
  Gn(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = $t();
  return ot(() => {
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
  }), Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Xw();
        V(u, d);
      },
      children: (u, d) => {
        var p = Gw(), f = ue(p), g = R(f);
        qe(g, {
          level: 3,
          children: (N, S) => {
            Ce();
            var D = Me("输入参数");
            V(N, D);
          },
          $$slots: { default: !0 }
        });
        var h = z(g, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, S) => {
            var D = Uw();
            V(N, D);
          },
          $$slots: { default: !0 }
        }), I(f);
        var v = z(f, 2);
        Pt(v, {});
        var $ = z(v, 2);
        qe($, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Ce();
            var D = Me("搜索引擎设置");
            V(N, D);
          },
          $$slots: { default: !0 }
        });
        var m = z($, 4), P = R(m);
        const x = /* @__PURE__ */ E(() => n().engine ? [n().engine] : []);
        jt(P, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (N) => {
            const S = N.value;
            l(o, () => ({ engine: S }));
          },
          get value() {
            return c(x);
          }
        }), I(m);
        var C = z(m, 4), _ = R(C);
        ut(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ keyword: S }));
          }
        }), I(C);
        var T = z(C, 4), A = R(T);
        ut(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const S = N.target.value;
            l(o, () => ({ limit: S }));
          }
        }), I(T);
        var Z = z(T, 2), F = R(Z);
        qe(F, {
          level: 3,
          mt: "10px",
          children: (N, S) => {
            Ce();
            var D = Me("输出参数");
            V(N, D);
          },
          $$slots: { default: !0 }
        }), I(Z);
        var j = z(Z, 2);
        Qn(j, {}), V(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
se(sf, { data: {} }, [], [], !0);
var Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ Q('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const nb = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function af(e, t) {
  de(t, !0), Ke(e, nb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn();
  return ot(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Qt(e, We(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = Qw();
        V(s, a);
      },
      handle: (s) => {
        Yn(s, {
          type: "source",
          get position() {
            return be.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (s, a) => {
        var l = tb(), u = ue(l), d = R(u);
        qe(d, {
          level: 3,
          children: ($, m) => {
            Ce();
            var P = Me("循环变量");
            V($, P);
          },
          $$slots: { default: !0 }
        }), I(u);
        var p = z(u, 2);
        Pt(p, { dataKeyName: "loopVars" });
        var f = z(p, 2), g = R(f);
        qe(g, {
          level: 3,
          children: ($, m) => {
            Ce();
            var P = Me("输出参数");
            V($, P);
          },
          $$slots: { default: !0 }
        });
        var h = z(g, 2);
        Le(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: ($, m) => {
            var P = eb();
            V($, P);
          },
          $$slots: { default: !0 }
        }), I(f);
        var v = z(f, 2);
        Pt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), V(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
se(af, { data: {} }, [], [], !0);
const rb = {
  startNode: Wd,
  codeNode: tf,
  llmNode: ef,
  templateNode: nf,
  httpNode: rf,
  knowledgeNode: of,
  searchEngineNode: sf,
  loopNode: af,
  endNode: Jd
};
var ob = /* @__PURE__ */ Q("<!> ", 1);
function Ps(e, t) {
  de(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return Le(e, {
    draggable: !0,
    ondragstart: (a) => {
      if (!a.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: { title: r(), description: i(), ...s() }
      };
      a.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), a.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (a, l) => {
      var u = ob(), d = ue(u);
      Gs(d, n);
      var p = z(d);
      Ne(() => Fe(p, ` ${r() ?? ""}`)), V(a, u);
    },
    $$slots: { default: !0 }
  }), fe({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), y();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), y();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), y();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), y();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), y();
    }
  });
}
se(Ps, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var ib = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), sb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), ab = /* @__PURE__ */ Q('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function lf(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ Te("base"), r = /* @__PURE__ */ Te("show");
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
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ], s = [], a = Wn(), l = a.customNodes;
  if (l) {
    const m = Object.keys(l).sort((P, x) => (l[P].sortNo || 0) - (l[x].sortNo || 0));
    for (let P of m)
      l[P].group === "base" ? o.push({ type: P, ...l[P] }) : s.push({
        icon: l[P].icon,
        title: l[P].title,
        type: P
      });
    o.sort((P, x) => (P.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const m = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(m)) {
      for (let P of m)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === P) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = ab(), d = R(u), p = R(d), f = R(p);
  Td(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (m) => {
      Y(n, m.value.toString(), !0);
    }
  }), I(p);
  var g = z(p, 2), h = R(g);
  xt(h, 21, () => o, Or, (m, P) => {
    Ps(m, We(() => c(P)));
  }), I(h);
  var v = z(h, 2);
  xt(v, 21, () => s, Or, (m, P) => {
    Ps(m, We(() => c(P)));
  }), I(v), I(g), I(d);
  var $ = z(d, 2);
  Le($, {
    onclick: () => {
      Y(r, c(r) ? "" : "show", !0);
    },
    children: (m, P) => {
      var x = Ie(), C = ue(x);
      {
        var _ = (A) => {
          var Z = ib();
          V(A, Z);
        }, T = (A) => {
          var Z = sb();
          V(A, Z);
        };
        ce(C, (A) => {
          c(r) === "show" ? A(_) : A(T, !1);
        });
      }
      V(m, x);
    },
    $$slots: { default: !0 }
  }), I(u), Ne(() => {
    Tt(u, 1, `tf-toolbar ${c(r) ?? ""}`), Ct(h, `display: ${c(n) === "base" ? "flex" : "none"}`), Ct(v, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), V(e, u), fe();
}
se(lf, {}, [], [], !0);
const lb = () => ({ getNode: (e) => nt.getNode(e) }), ub = () => ({ ensureParentInNodesBefore: (e, t) => {
  nt.updateNodes((n) => {
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
} }), cb = () => ({ getEdgesByTarget: (e) => nt.getEdges().filter((t) => t.target === e) });
var db = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fb = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), pb = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), gb = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), hb = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), vb = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), mb = /* @__PURE__ */ Q('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), yb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wb = /* @__PURE__ */ Q('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), bb = /* @__PURE__ */ Q("<!> <!> <div></div> <!>", 1);
const xb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function uf(e, t) {
  de(t, !0), Ke(e, xb);
  const n = w(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ct(), { addParameter: i } = vn(), s = $t(), { updateNodeData: a } = s, l = ($) => {
    a(o, $);
  }, u = ($, m) => {
    l({ [$]: m.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Wn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  ot(() => {
    n().expand && h && h.append(p);
  }), ot(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), ot(() => {
    !n().parameters && f.parameters && l({
      parameters: xi(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), ot(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: xi(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const v = /* @__PURE__ */ E(() => ({ ...n(), description: f.description }));
  return Qt(e, We(
    {
      get data() {
        return c(v);
      }
    },
    () => r,
    {
      icon: ($) => {
        var m = Ie(), P = ue(m);
        Gs(P, () => f.icon), V($, m);
      },
      children: ($, m) => {
        var P = bb(), x = ue(P);
        {
          var C = (j) => {
            var N = fb(), S = ue(N), D = R(S);
            qe(D, {
              level: 3,
              children: (L, q) => {
                Ce();
                var O = Me("输入参数");
                V(L, O);
              },
              $$slots: { default: !0 }
            });
            var b = z(D, 2);
            {
              var k = (L) => {
                Le(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (q, O) => {
                    var B = db();
                    V(q, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ce(b, (L) => {
                f.parametersAddEnable !== !1 && L(k);
              });
            }
            I(S);
            var M = z(S, 2);
            Pt(M, {}), V(j, N);
          };
          ce(x, (j) => {
            f.parametersEnable !== !1 && j(C);
          });
        }
        var _ = z(x, 2);
        {
          var T = (j) => {
            var N = Ie(), S = ue(N);
            xt(S, 17, () => g, Or, (D, b) => {
              var k = Ie(), M = ue(k);
              {
                var L = (O) => {
                  var B = pb(), W = ue(B), G = R(W, !0);
                  I(W);
                  var ee = z(W, 2), X = R(ee);
                  const pe = /* @__PURE__ */ E(() => n()[c(b).name] || c(b).defaultValue);
                  ut(X, We(
                    {
                      get placeholder() {
                        return c(b).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(pe);
                      }
                    },
                    () => c(b).attrs,
                    {
                      onchange: (re) => {
                        u(c(b).name, re);
                      }
                    }
                  )), I(ee), Ne(() => Fe(G, c(b).label)), V(O, B);
                }, q = (O, B) => {
                  {
                    var W = (ee) => {
                      var X = gb(), pe = ue(X), re = R(pe, !0);
                      I(pe);
                      var he = z(pe, 2), U = R(he);
                      const $e = /* @__PURE__ */ E(() => n()[c(b).name] || c(b).defaultValue);
                      rt(U, We(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(b).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c($e);
                          }
                        },
                        () => c(b).attrs,
                        {
                          onchange: (ge) => {
                            u(c(b).name, ge);
                          }
                        }
                      )), I(he), Ne(() => Fe(re, c(b).label)), V(ee, X);
                    }, G = (ee, X) => {
                      {
                        var pe = (he) => {
                          var U = hb(), $e = ue(U), ge = R($e, !0);
                          I($e);
                          var ie = z($e, 2), ne = R(ie), le = R(ne), te = R(le);
                          I(le);
                          var ye = z(le, 2);
                          Pn(ye);
                          var oe = (Ee) => l({ [c(b).name]: parseFloat(Ee.target.value) });
                          at(
                            ye,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(b).attrs,
                              value: n()[c(b).name] ?? c(b).defaultValue,
                              oninput: oe
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), I(ne), I(ie), Ne(() => {
                            Fe(ge, c(b).label), Fe(te, `${c(b).description ?? ""}: ${n()[c(b).name] ?? c(b).defaultValue ?? ""}`);
                          }), V(he, U);
                        }, re = (he, U) => {
                          {
                            var $e = (ie) => {
                              var ne = vb(), le = ue(ne), te = R(le, !0);
                              I(le);
                              var ye = z(le, 2), oe = R(ye);
                              const Ee = /* @__PURE__ */ E(() => c(b).options || []), K = /* @__PURE__ */ E(() => n()[c(b).name] ? [n()[c(b).name]] : [c(b).defaultValue]);
                              jt(oe, {
                                get items() {
                                  return c(Ee);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(b).placeholder;
                                },
                                onSelect: (Ue) => {
                                  const ae = Ue.value;
                                  l({ [c(b).name]: ae });
                                },
                                get value() {
                                  return c(K);
                                }
                              }), I(ye), Ne(() => Fe(te, c(b).label)), V(ie, ne);
                            }, ge = (ie, ne) => {
                              {
                                var le = (ye) => {
                                  var oe = mb(), Ee = ue(oe), K = R(Ee, !0);
                                  I(Ee);
                                  var Ue = z(Ee, 2), ae = R(Ue);
                                  const _e = /* @__PURE__ */ E(() => c(b).chosen?.buttonText);
                                  Md(ae, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(b).placeholder;
                                    },
                                    get buttonText() {
                                      return c(_e);
                                    },
                                    onChosen: (ke, ze, pt) => {
                                      c(b).chosen?.onChosen?.(l, ke, ze, pt);
                                    },
                                    get value() {
                                      return n()[c(b).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(b).chosen?.labelDataKey || ""];
                                    }
                                  }), I(Ue), Ne(() => Fe(K, c(b).label)), V(ye, oe);
                                }, te = (ye, oe) => {
                                  {
                                    var Ee = (K) => {
                                      qe(K, We({ level: 3, mt: "10px" }, () => c(b).attrs, {
                                        children: (Ue, ae) => {
                                          Ce();
                                          var _e = Me();
                                          Ne(() => Fe(_e, c(b).label)), V(Ue, _e);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ce(
                                      ye,
                                      (K) => {
                                        c(b).type === "heading" && K(Ee);
                                      },
                                      oe
                                    );
                                  }
                                };
                                ce(
                                  ie,
                                  (ye) => {
                                    c(b).type === "chosen" ? ye(le) : ye(te, !1);
                                  },
                                  ne
                                );
                              }
                            };
                            ce(
                              he,
                              (ie) => {
                                c(b).type === "select" ? ie($e) : ie(ge, !1);
                              },
                              U
                            );
                          }
                        };
                        ce(
                          ee,
                          (he) => {
                            c(b).type === "slider" ? he(pe) : he(re, !1);
                          },
                          X
                        );
                      }
                    };
                    ce(
                      O,
                      (ee) => {
                        c(b).type === "textarea" ? ee(W) : ee(G, !1);
                      },
                      B
                    );
                  }
                };
                ce(M, (O) => {
                  c(b).type === "input" ? O(L) : O(q, !1);
                });
              }
              V(D, k);
            }), V(j, N);
          };
          ce(_, (j) => {
            g && j(T);
          });
        }
        var A = z(_, 2);
        Kt(A, (j) => h = j, () => h);
        var Z = z(A, 2);
        {
          var F = (j) => {
            var N = wb(), S = ue(N), D = R(S);
            qe(D, {
              level: 3,
              mt: "10px",
              children: (L, q) => {
                Ce();
                var O = Me("输出参数");
                V(L, O);
              },
              $$slots: { default: !0 }
            });
            var b = z(D, 2);
            {
              var k = (L) => {
                Le(L, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (q, O) => {
                    var B = yb();
                    V(q, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ce(b, (L) => {
                f.outputDefsAddEnable !== !1 && L(k);
              });
            }
            I(S);
            var M = z(S, 2);
            Qn(M, {}), V(j, N);
          };
          ce(Z, (j) => {
            f.outputDefsEnable !== !1 && j(F);
          });
        }
        Ne(() => {
          Ct(A, f.rootStyle || ""), Tt(A, 1, Ln(f.rootClass), "svelte-q0cqsa");
        }), V($, P);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data($) {
      n($), y();
    }
  });
}
se(uf, { data: {} }, [], [], !0);
const Cb = () => ({ updateEdgeData: (e, t, n) => {
  const r = nt.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, nt.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), $b = () => ({ deleteEdge: (e) => {
  nt.removeEdge(e);
} });
var _b = /* @__PURE__ */ Q('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), kb = /* @__PURE__ */ Q("<!> <!> <!> <!>", 1), Sb = /* @__PURE__ */ Q('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Eb = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function cf(e, t) {
  de(t, !0), Ke(e, Eb);
  const n = w(t, "onInit", 7), r = $t();
  n()(r);
  let o = /* @__PURE__ */ Te(!1), i = /* @__PURE__ */ Te(null);
  const { updateEdgeData: s } = Cb(), a = (k) => {
    k.preventDefault(), k.dataTransfer && (k.dataTransfer.dropEffect = "move");
  }, l = (k) => {
    k.preventDefault();
    const M = r.screenToFlowPosition({ x: k.clientX - 250, y: k.clientY - 100 }), L = k.dataTransfer?.getData("application/tinyflow");
    if (!L)
      return;
    const q = JSON.parse(L), O = { id: `node_${gr()}`, position: M, data: {}, ...q };
    nt.addNode(O), nt.selectNodeOnly(O.id);
  }, { getNode: u } = lb(), d = (k) => {
    const M = u(k.source), L = u(k.target);
    if (k.sourceHandle === "loop_handle" || M.parentId) {
      const q = r.getEdges();
      for (let O of q)
        if (O.target === k.target) {
          const B = u(O.source);
          if (k.sourceHandle === "loop_handle" && B.parentId !== M.id || M.parentId && B.parentId !== M.parentId)
            return !1;
        }
    }
    return !(!M.parentId && L.parentId && L.parentId !== M.id);
  }, { ensureParentInNodesBefore: p } = ub(), f = (k, M) => {
    if (!M.isValid)
      return;
    const L = M.toNode;
    if (L.parentId)
      return;
    const q = M.fromNode, O = M.fromHandle, B = { position: { ...L.position } };
    if (O.id === "loop_handle" ? B.parentId = q.id : q.parentId && (B.parentId = q.parentId), B.parentId) {
      const W = u(B.parentId);
      B.position = {
        x: L.position.x - W.position.x,
        y: L.position.y - W.position.y
      }, p(B.parentId, L.id), r.updateNode(L.id, B);
    }
    setTimeout(() => {
      nt.getEdges().forEach((W) => {
        W.target === L.id && W.source == q.id && (Y(o, !0), Y(i, W, !0));
      });
    });
  }, { getEdgesByTarget: g } = cb(), h = (k) => {
    k.edges.forEach((M) => {
      M.id === c(i)?.id && (Y(i, null), Y(o, !1));
      const L = u(M.target);
      if (L && L.parentId) {
        const q = g(M.target), O = u(L.parentId);
        if (q.length === 0)
          r.updateNode(L.id, {
            parentId: void 0,
            position: {
              x: L.position.x + O.position.x,
              y: L.position.y + O.position.y
            }
          });
        else {
          let B = !1;
          for (let W = 0; W < q.length; W++) {
            const G = q[W], ee = u(G.source);
            if (ee.parentId || ee.type === "loopNode") {
              B = !0;
              break;
            }
          }
          B || r.updateNode(L.id, {
            parentId: void 0,
            position: {
              x: L.position.x + O.position.x,
              y: L.position.y + O.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: v } = $b(), $ = (k, M) => {
  }, m = (k) => {
  }, P = {
    // ...nodeTypes
  }, x = Wn().customNodes;
  if (x)
    for (let k of Object.keys(x))
      P[k] = uf;
  Wn().onDataChange;
  var C = Sb(), _ = R(C);
  const T = /* @__PURE__ */ E(() => ({ ...rb, ...P }));
  var A = nt.getNodes, Z = nt.setNodes, F = nt.getEdges, j = nt.setEdges, N = nt.getViewport, S = nt.setViewport;
  const D = /* @__PURE__ */ E(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ho.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  hd(_, {
    get nodeTypes() {
      return c(T);
    },
    get nodes() {
      return A();
    },
    set nodes(k) {
      Z(k);
    },
    get edges() {
      return F();
    },
    set edges(k) {
      j(k);
    },
    get viewport() {
      return N();
    },
    set viewport(k) {
      S(k);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: $,
    onconnect: m,
    connectionRadius: 50,
    onedgeclick: (k) => {
      Y(o, !0), Y(i, k.edge, !0);
    },
    onbeforeconnect: (k) => ({ ...k, id: gr() }),
    ondelete: h,
    onclick: (k) => {
      const M = k.target;
      M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || (Y(o, !1), Y(i, null));
    },
    get defaultEdgeOptions() {
      return c(D);
    },
    children: (k, M) => {
      var L = kb(), q = ue(L);
      kd(q, {});
      var O = z(q, 2);
      Cd(O, {});
      var B = z(O, 2);
      Ed(B, {});
      var W = z(B, 2);
      {
        var G = (ee) => {
          Vo(ee, {
            children: (X, pe) => {
              var re = _b(), he = z(R(re), 4), U = R(he);
              const $e = /* @__PURE__ */ E(() => c(i)?.data?.condition);
              rt(U, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c($e);
                },
                onchange: (le) => {
                  c(i) && s(c(i).id, { condition: le.target?.value });
                }
              }), I(he);
              var ge = z(he, 2), ie = R(ge);
              Le(ie, {
                onclick: () => {
                  v(c(i)?.id), Y(o, !1);
                },
                children: (le, te) => {
                  Ce();
                  var ye = Me("删除");
                  V(le, ye);
                },
                $$slots: { default: !0 }
              });
              var ne = z(ie, 2);
              Le(ne, {
                primary: !0,
                onclick: () => {
                  Y(o, !1);
                },
                children: (le, te) => {
                  Ce();
                  var ye = Me("保存");
                  V(le, ye);
                },
                $$slots: { default: !0 }
              }), I(ge), I(re), V(X, re);
            },
            $$slots: { default: !0 }
          });
        };
        ce(W, (ee) => {
          c(o) && ee(G);
        });
      }
      V(k, L);
    },
    $$slots: { default: !0 }
  });
  var b = z(_, 2);
  return lf(b, {}), I(C), V(e, C), fe({
    get onInit() {
      return n();
    },
    set onInit(k) {
      n(k), y();
    }
  });
}
se(cf, { onInit: {} }, [], [], !0);
function Pb(e, t) {
  de(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return nt.init(o?.nodes || [], o?.edges || []), Mr("tinyflow_options", n()), vd(e, {
    children: (i, s) => {
      cf(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), fe({
    get options() {
      return n();
    },
    set options(i) {
      n(i), y();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), y();
    }
  });
}
customElements.define("tinyflow-component", se(Pb, { options: {}, onInit: {} }, [], [], !1));
const Mb = bf((e, t) => {
  const n = Sa(null), r = Sa(null);
  xf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Cf(() => {
    if (n.current) {
      const a = new Jm({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Sf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  Mb as Tinyflow
};
//# sourceMappingURL=index.js.map
