import ql, { forwardRef as $f, useRef as Pa, useImperativeHandle as kf, useEffect as Cf } from "react";
var Io = { exports: {} }, Wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function _f() {
  if (La) return Wr;
  La = 1;
  var e = ql, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, p = {}, f = null, g = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: f, ref: g, props: p, _owner: o.current };
  }
  return Wr.Fragment = n, Wr.jsx = s, Wr.jsxs = s, Wr;
}
var Yr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function Sf() {
  return Oa || (Oa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ql, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, w = "@@iterator";
    function C(M) {
      if (M === null || typeof M != "object")
        return null;
      var ne = h && M[h] || M[w];
      return typeof ne == "function" ? ne : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(M) {
      {
        for (var ne = arguments.length, he = new Array(ne > 1 ? ne - 1 : 0), Ce = 1; Ce < ne; Ce++)
          he[Ce - 1] = arguments[Ce];
        x("error", M, he);
      }
    }
    function x(M, ne, he) {
      {
        var Ce = b.ReactDebugCurrentFrame, ze = Ce.getStackAddendum();
        ze !== "" && (ne += "%s", he = he.concat([ze]));
        var Be = he.map(function(Ne) {
          return String(Ne);
        });
        Be.unshift("Warning: " + ne), Function.prototype.apply.call(console[M], console, Be);
      }
    }
    var $ = !1, k = !1, D = !1, A = !1, q = !1, Q;
    Q = Symbol.for("react.module.reference");
    function j(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === i || q || M === o || M === u || M === d || A || M === g || $ || k || D || typeof M == "object" && M !== null && (M.$$typeof === f || M.$$typeof === p || M.$$typeof === s || M.$$typeof === a || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === Q || M.getModuleId !== void 0));
    }
    function O(M, ne, he) {
      var Ce = M.displayName;
      if (Ce)
        return Ce;
      var ze = ne.displayName || ne.name || "";
      return ze !== "" ? he + "(" + ze + ")" : he;
    }
    function _(M) {
      return M.displayName || "Context";
    }
    function H(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
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
      if (typeof M == "object")
        switch (M.$$typeof) {
          case a:
            var ne = M;
            return _(ne) + ".Consumer";
          case s:
            var he = M;
            return _(he._context) + ".Provider";
          case l:
            return O(M, M.render, "ForwardRef");
          case p:
            var Ce = M.displayName || null;
            return Ce !== null ? Ce : H(M.type) || "Memo";
          case f: {
            var ze = M, Be = ze._payload, Ne = ze._init;
            try {
              return H(Ne(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var v = Object.assign, P = 0, L, T, R, N, Z, X, G;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function Y() {
      {
        if (P === 0) {
          L = console.log, T = console.info, R = console.warn, N = console.error, Z = console.group, X = console.groupCollapsed, G = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        P++;
      }
    }
    function J() {
      {
        if (P--, P === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: v({}, M, {
              value: L
            }),
            info: v({}, M, {
              value: T
            }),
            warn: v({}, M, {
              value: R
            }),
            error: v({}, M, {
              value: N
            }),
            group: v({}, M, {
              value: Z
            }),
            groupCollapsed: v({}, M, {
              value: X
            }),
            groupEnd: v({}, M, {
              value: G
            })
          });
        }
        P < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = b.ReactCurrentDispatcher, te;
    function F(M, ne, he) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (ze) {
            var Ce = ze.stack.trim().match(/\n( *(at )?)/);
            te = Ce && Ce[1] || "";
          }
        return `
` + te + M;
      }
    }
    var ye = !1, ue;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ie();
    }
    function re(M, ne) {
      if (!M || ye)
        return "";
      {
        var he = ue.get(M);
        if (he !== void 0)
          return he;
      }
      var Ce;
      ye = !0;
      var ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = U.current, U.current = null, Y();
      try {
        if (ne) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (_t) {
              Ce = _t;
            }
            Reflect.construct(M, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (_t) {
              Ce = _t;
            }
            M.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            Ce = _t;
          }
          M();
        }
      } catch (_t) {
        if (_t && Ce && typeof _t.stack == "string") {
          for (var Oe = _t.stack.split(`
`), wt = Ce.stack.split(`
`), tt = Oe.length - 1, it = wt.length - 1; tt >= 1 && it >= 0 && Oe[tt] !== wt[it]; )
            it--;
          for (; tt >= 1 && it >= 0; tt--, it--)
            if (Oe[tt] !== wt[it]) {
              if (tt !== 1 || it !== 1)
                do
                  if (tt--, it--, it < 0 || Oe[tt] !== wt[it]) {
                    var qt = `
` + Oe[tt].replace(" at new ", " at ");
                    return M.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", M.displayName)), typeof M == "function" && ue.set(M, qt), qt;
                  }
                while (tt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        ye = !1, U.current = Be, J(), Error.prepareStackTrace = ze;
      }
      var br = M ? M.displayName || M.name : "", nr = br ? F(br) : "";
      return typeof M == "function" && ue.set(M, nr), nr;
    }
    function ce(M, ne, he) {
      return re(M, !1);
    }
    function oe(M) {
      var ne = M.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function ve(M, ne, he) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return re(M, oe(M));
      if (typeof M == "string")
        return F(M);
      switch (M) {
        case u:
          return F("Suspense");
        case d:
          return F("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case l:
            return ce(M.render);
          case p:
            return ve(M.type, ne, he);
          case f: {
            var Ce = M, ze = Ce._payload, Be = Ce._init;
            try {
              return ve(Be(ze), ne, he);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, _e = {}, K = b.ReactDebugCurrentFrame;
    function Ge(M) {
      if (M) {
        var ne = M._owner, he = ve(M.type, M._source, ne ? ne.type : null);
        K.setExtraStackFrame(he);
      } else
        K.setExtraStackFrame(null);
    }
    function Ae(M, ne, he, Ce, ze) {
      {
        var Be = Function.call.bind(se);
        for (var Ne in M)
          if (Be(M, Ne)) {
            var Oe = void 0;
            try {
              if (typeof M[Ne] != "function") {
                var wt = Error((Ce || "React class") + ": " + he + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wt.name = "Invariant Violation", wt;
              }
              Oe = M[Ne](ne, Ne, Ce, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Oe = tt;
            }
            Oe && !(Oe instanceof Error) && (Ge(ze), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", he, Ne, typeof Oe), Ge(null)), Oe instanceof Error && !(Oe.message in _e) && (_e[Oe.message] = !0, Ge(ze), E("Failed %s type: %s", he, Oe.message), Ge(null));
          }
      }
    }
    var Re = Array.isArray;
    function et(M) {
      return Re(M);
    }
    function We(M) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, he = ne && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return he;
      }
    }
    function Ye(M) {
      try {
        return Rt(M), !1;
      } catch {
        return !0;
      }
    }
    function Rt(M) {
      return "" + M;
    }
    function Ie(M) {
      if (Ye(M))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(M)), Rt(M);
    }
    var ct = b.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, dt;
    function Qe(M) {
      if (se.call(M, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Ct(M) {
      if (se.call(M, "key")) {
        var ne = Object.getOwnPropertyDescriptor(M, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function at(M, ne) {
      typeof M.ref == "string" && ct.current;
    }
    function Bt(M, ne) {
      {
        var he = function() {
          Fe || (Fe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        he.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function Kr(M, ne) {
      {
        var he = function() {
          dt || (dt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        he.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var yn = function(M, ne, he, Ce, ze, Be, Ne) {
      var Oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: ne,
        ref: he,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(Oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ze
      }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
    };
    function wn(M, ne, he, Ce, ze) {
      {
        var Be, Ne = {}, Oe = null, wt = null;
        he !== void 0 && (Ie(he), Oe = "" + he), Ct(ne) && (Ie(ne.key), Oe = "" + ne.key), Qe(ne) && (wt = ne.ref, at(ne, ze));
        for (Be in ne)
          se.call(ne, Be) && !me.hasOwnProperty(Be) && (Ne[Be] = ne[Be]);
        if (M && M.defaultProps) {
          var tt = M.defaultProps;
          for (Be in tt)
            Ne[Be] === void 0 && (Ne[Be] = tt[Be]);
        }
        if (Oe || wt) {
          var it = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Oe && Bt(Ne, it), wt && Kr(Ne, it);
        }
        return yn(M, Oe, wt, ze, Ce, ct.current, Ne);
      }
    }
    var tr = b.ReactCurrentOwner, qi = b.ReactDebugCurrentFrame;
    function bn(M) {
      if (M) {
        var ne = M._owner, he = ve(M.type, M._source, ne ? ne.type : null);
        qi.setExtraStackFrame(he);
      } else
        qi.setExtraStackFrame(null);
    }
    var yr;
    yr = !1;
    function wr(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function jr() {
      {
        if (tr.current) {
          var M = H(tr.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Zi(M) {
      return "";
    }
    var tn = {};
    function pf(M) {
      {
        var ne = jr();
        if (!ne) {
          var he = typeof M == "string" ? M : M.displayName || M.name;
          he && (ne = `

Check the top-level render call using <` + he + ">.");
        }
        return ne;
      }
    }
    function Ca(M, ne) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var he = pf(ne);
        if (tn[he])
          return;
        tn[he] = !0;
        var Ce = "";
        M && M._owner && M._owner !== tr.current && (Ce = " It was passed a child from " + H(M._owner.type) + "."), bn(M), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Ce), bn(null);
      }
    }
    function _a(M, ne) {
      {
        if (typeof M != "object")
          return;
        if (et(M))
          for (var he = 0; he < M.length; he++) {
            var Ce = M[he];
            wr(Ce) && Ca(Ce, ne);
          }
        else if (wr(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var ze = C(M);
          if (typeof ze == "function" && ze !== M.entries)
            for (var Be = ze.call(M), Ne; !(Ne = Be.next()).done; )
              wr(Ne.value) && Ca(Ne.value, ne);
        }
      }
    }
    function gf(M) {
      {
        var ne = M.type;
        if (ne == null || typeof ne == "string")
          return;
        var he;
        if (typeof ne == "function")
          he = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === p))
          he = ne.propTypes;
        else
          return;
        if (he) {
          var Ce = H(ne);
          Ae(he, M.props, "prop", Ce, M);
        } else if (ne.PropTypes !== void 0 && !yr) {
          yr = !0;
          var ze = H(ne);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ze || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hf(M) {
      {
        for (var ne = Object.keys(M.props), he = 0; he < ne.length; he++) {
          var Ce = ne[he];
          if (Ce !== "children" && Ce !== "key") {
            bn(M), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), bn(null);
            break;
          }
        }
        M.ref !== null && (bn(M), E("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    var Sa = {};
    function Ea(M, ne, he, Ce, ze, Be) {
      {
        var Ne = j(M);
        if (!Ne) {
          var Oe = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wt = Zi();
          wt ? Oe += wt : Oe += jr();
          var tt;
          M === null ? tt = "null" : et(M) ? tt = "array" : M !== void 0 && M.$$typeof === t ? (tt = "<" + (H(M.type) || "Unknown") + " />", Oe = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof M, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Oe);
        }
        var it = wn(M, ne, he, ze, Be);
        if (it == null)
          return it;
        if (Ne) {
          var qt = ne.children;
          if (qt !== void 0)
            if (Ce)
              if (et(qt)) {
                for (var br = 0; br < qt.length; br++)
                  _a(qt[br], M);
                Object.freeze && Object.freeze(qt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _a(qt, M);
        }
        if (se.call(ne, "key")) {
          var nr = H(M), _t = Object.keys(ne).filter(function(xf) {
            return xf !== "key";
          }), Ki = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Sa[nr + Ki]) {
            var bf = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ki, nr, bf, nr), Sa[nr + Ki] = !0;
          }
        }
        return M === r ? hf(it) : gf(it), it;
      }
    }
    function vf(M, ne, he) {
      return Ea(M, ne, he, !0);
    }
    function mf(M, ne, he) {
      return Ea(M, ne, he, !1);
    }
    var yf = mf, wf = vf;
    Yr.Fragment = r, Yr.jsx = yf, Yr.jsxs = wf;
  }()), Yr;
}
var Da;
function Ef() {
  return Da || (Da = 1, process.env.NODE_ENV === "production" ? Io.exports = _f() : Io.exports = Sf()), Io.exports;
}
var Pf = Ef();
const Lf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Lf);
const Ds = 1, Ns = 2, Zl = 4, Of = 8, Df = 16, Nf = 1, Vf = 2, Kl = 4, Tf = 8, Mf = 16, jl = 1, zf = 2, Vs = "[", Ts = "[!", Ms = "]", or = {}, ht = Symbol(), Af = "http://www.w3.org/1999/xhtml", Hf = "http://www.w3.org/2000/svg", If = "@attach", Rf = !1;
var xo = Array.isArray, Bf = Array.prototype.indexOf, zs = Array.from, ni = Object.keys, ri = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Wl = Object.getOwnPropertyDescriptors, Yl = Object.prototype, qf = Array.prototype, ki = Object.getPrototypeOf, Na = Object.isExtensible;
function Fr(e) {
  return typeof e == "function";
}
const pt = () => {
};
function Zf(e) {
  return e();
}
function oi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function bt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function $o(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const zt = 2, As = 4, ko = 8, Hs = 16, Vn = 32, hr = 64, Is = 128, Tt = 256, ii = 512, At = 1024, Ln = 2048, vr = 4096, En = 8192, Ci = 16384, Fl = 32768, Rr = 65536, Va = 1 << 17, Kf = 1 << 18, Xl = 1 << 19, is = 1 << 20, Rs = 1 << 21, an = Symbol("$state"), Bs = Symbol("legacy props"), jf = Symbol(""), Ul = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Wf = 1, qs = 3, Lr = 8;
function Jl(e) {
  return e === this.v;
}
function Gl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ql(e) {
  return !Gl(e, this.v);
}
function Yf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ff() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Uf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ep() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function tp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Br = !1, np = !1;
function rp() {
  Br = !0;
}
const op = [];
function eu(e, t = !1) {
  return Yo(e, /* @__PURE__ */ new Map(), "", op);
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
    if (ki(e) === Yl) {
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
function Zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Xe = null;
function Ta(e) {
  Xe = e;
}
function jn(e) {
  return (
    /** @type {T} */
    tu().get(e)
  );
}
function Or(e, t) {
  return tu().set(e, t), t;
}
function pe(e, t = !1, n) {
  Xe = {
    p: Xe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, Br && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: ur(!1)
  });
}
function ge(e) {
  var t = (
    /** @type {ComponentContext} */
    Xe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      fu(r);
  }
  return e !== void 0 && (t.x = e), Xe = t.p, e ?? /** @type {T} */
  {};
}
function _i() {
  return !Br || Xe !== null && Xe.l === null;
}
function tu(e) {
  return Xe === null && Zs(), Xe.c ??= new Map(ip(Xe) || void 0);
}
function ip(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function jt(e) {
  if (typeof e != "object" || e === null || an in e)
    return e;
  const t = ki(e);
  if (t !== Yl && t !== qf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = xo(e), o = /* @__PURE__ */ Pe(0), i = ar, s = (a) => {
    if (ar === i)
      return a();
    var l = qe, u = ar;
    Yn(null), Ha(i);
    var d = a();
    return Yn(l), Ha(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Pe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Qf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Pe(u.value);
          return n.set(l, p), p;
        }) : W(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Pe(ht));
            n.set(l, f), Fo(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && W(d, p);
          }
          W(u, ht), Fo(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === an)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Sn(a, l)?.writable) && (d = s(() => {
          var g = jt(p ? a[l] : ht), h = /* @__PURE__ */ Pe(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === ht ? void 0 : f;
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
          if (p !== void 0 && f !== ht)
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
        if (l === an)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== ht || Reflect.has(a, l);
        if (u !== void 0 || Te !== null && (!d || Sn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? jt(a[l]) : ht, g = /* @__PURE__ */ Pe(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === ht)
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
            h !== void 0 ? W(h, ht) : g in a && (h = s(() => /* @__PURE__ */ Pe(ht)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || Sn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Pe(void 0)), W(p, jt(u)), n.set(l, p));
        else {
          f = p.v !== ht;
          var w = s(() => jt(u));
          W(p, w);
        }
        var C = Reflect.getOwnPropertyDescriptor(a, l);
        if (C?.set && C.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= b.v && W(b, E + 1);
          }
          Fo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== ht;
        });
        for (var [u, d] of n)
          d.v !== ht && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ep();
      }
    }
  );
}
function Ma(e) {
  try {
    if (e !== null && typeof e == "object" && an in e)
      return e[an];
  } catch {
  }
  return e;
}
function sp(e, t) {
  return Object.is(Ma(e), Ma(t));
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var t = zt | Ln, n = qe !== null && (qe.f & zt) !== 0 ? (
    /** @type {Derived} */
    qe
  ) : null;
  return Te === null || n !== null && (n.f & Tt) !== 0 ? t |= Tt : Te.f |= Xl, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: Jl,
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
function S(e) {
  const t = /* @__PURE__ */ qr(e);
  return ku(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const t = /* @__PURE__ */ qr(e);
  return t.equals = Ql, t;
}
function nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ot(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ap(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & zt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function js(e) {
  var t, n = Te;
  Fn(ap(e));
  try {
    nu(e), t = Su(e);
  } finally {
    Fn(n);
  }
  return t;
}
function ru(e) {
  var t = js(e);
  if (e.equals(t) || (e.v = t, e.wv = Cu()), !Wn) {
    var n = (qn || (e.f & Tt) !== 0) && e.deps !== null ? vr : At;
    pn(e, n);
  }
}
const ir = /* @__PURE__ */ new Map();
function ur(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Jl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t) {
  const n = ur(e);
  return ku(n), n;
}
// @__NO_SIDE_EFFECTS__
function ou(e, t = !1, n = !0) {
  const r = ur(e);
  return t || (r.equals = Ql), Br && n && Xe !== null && Xe.l !== null && (Xe.l.s ??= []).push(r), r;
}
function W(e, t, n = !1) {
  qe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ft || (qe.f & Va) !== 0) && _i() && (qe.f & (zt | Hs | Va)) !== 0 && !Pn?.includes(e) && tp();
  let r = n ? jt(t) : t;
  return ss(e, r);
}
function ss(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Wn ? ir.set(e, t) : ir.set(e, n), e.v = t, (e.f & zt) !== 0 && ((e.f & Ln) !== 0 && js(
      /** @type {Derived} */
      e
    ), pn(e, (e.f & Tt) === 0 ? At : vr)), e.wv = Cu(), iu(e, Ln), _i() && Te !== null && (Te.f & At) !== 0 && (Te.f & (Vn | hr)) === 0 && (Zt === null ? mp([e]) : Zt.push(e));
  }
  return t;
}
function za(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return W(e, n), r;
}
function Fo(e) {
  W(e, e.v + 1);
}
function iu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = _i(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & Ln) === 0 && (!r && s === Te || (pn(s, t), (a & (At | Tt)) !== 0 && ((a & zt) !== 0 ? iu(
        /** @type {Derived} */
        s,
        vr
      ) : Ei(
        /** @type {Effect} */
        s
      ))));
    }
}
function Co(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function lp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let ke = !1;
function Vt(e) {
  ke = e;
}
let Le;
function mt(e) {
  if (e === null)
    throw Co(), or;
  return Le = e;
}
function On() {
  return mt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ vn(Le)
  );
}
function I(e) {
  if (ke) {
    if (/* @__PURE__ */ vn(Le) !== null)
      throw Co(), or;
    Le = e;
  }
}
function be(e = 1) {
  if (ke) {
    for (var t = e, n = Le; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(n);
    Le = n;
  }
}
function as() {
  for (var e = 0, t = Le; ; ) {
    if (t.nodeType === Lr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Ms) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Vs || n === Ts) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(t)
    );
    t.remove(), t = r;
  }
}
function su(e) {
  if (!e || e.nodeType !== Lr)
    throw Co(), or;
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
    lu = Sn(t, "firstChild").get, uu = Sn(t, "nextSibling").get, Na(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Na(n) && (n.__t = void 0);
  }
}
function Dn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return lu.call(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return uu.call(e);
}
function B(e, t) {
  if (!ke)
    return /* @__PURE__ */ lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ lt(Le)
  );
  if (n === null)
    n = Le.appendChild(Dn());
  else if (t && n.nodeType !== qs) {
    var r = Dn();
    return n?.before(r), mt(r), r;
  }
  return mt(n), n;
}
function fe(e, t) {
  if (!ke) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ lt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ vn(n) : n;
  }
  return Le;
}
function z(e, t = 1, n = !1) {
  let r = ke ? Le : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(r);
  if (!ke)
    return r;
  if (n && r?.nodeType !== qs) {
    var i = Dn();
    return r === null ? o?.after(i) : r.before(i), mt(i), i;
  }
  return mt(r), /** @type {TemplateNode} */
  r;
}
function Ws(e) {
  e.textContent = "";
}
function cu(e) {
  Te === null && qe === null && Xf(), qe !== null && (qe.f & Tt) !== 0 && Te === null && Ff(), Wn && Yf();
}
function up(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Tn(e, t, n, r = !0) {
  var o = Te, i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
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
      Xs(i), i.f |= Fl;
    } catch (l) {
      throw Ot(i), l;
    }
  else t !== null && Ei(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Xl | Is)) === 0;
  if (!s && r && (o !== null && up(i, o), qe !== null && (qe.f & zt) !== 0)) {
    var a = (
      /** @type {Derived} */
      qe
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function cp() {
  return qe !== null && !Ft;
}
function du(e) {
  const t = Tn(ko, null, !1);
  return pn(t, At), t.teardown = e, t;
}
function nt(e) {
  if (cu(), !qe && Te && (Te.f & Vn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Xe
    );
    (t.e ??= []).push(e);
  } else
    return fu(e);
}
function fu(e) {
  return Tn(As | Rs, e, !1);
}
function pu(e) {
  return cu(), Tn(ko | Rs, e, !0);
}
function Ys(e) {
  const t = Tn(hr, e, !0);
  return () => {
    Ot(t);
  };
}
function dp(e) {
  const t = Tn(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(t, () => {
      Ot(t), r(void 0);
    }) : (Ot(t), r(void 0));
  });
}
function _o(e) {
  return Tn(As, e, !1);
}
function So(e) {
  return Tn(ko, e, !0);
}
function Se(e, t = [], n = qr) {
  const r = t.map(n);
  return Gn(() => e(...r.map(c)));
}
function Gn(e, t = 0) {
  var n = Tn(ko | Hs | t, e, !0);
  return n;
}
function fn(e, t = !0) {
  return Tn(ko | Vn, e, !0, t);
}
function gu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Wn, r = qe;
    Aa(!0), Yn(null);
    try {
      t.call(null);
    } finally {
      Aa(n), Yn(r);
    }
  }
}
function hu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(Ul);
    var r = n.next;
    (n.f & hr) !== 0 ? n.parent = null : Ot(n, t), n = r;
  }
}
function fp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Vn) === 0 && Ot(t), t = n;
  }
}
function Ot(e, t = !0) {
  var n = !1;
  (t || (e.f & Kf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (vu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), hu(e, t && !n), ai(e, 0), pn(e, Ci);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  gu(e);
  var o = e.parent;
  o !== null && o.first !== null && mu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function vu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(e)
    );
    e.remove(), e = n;
  }
}
function mu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Dr(e, t) {
  var n = [];
  Fs(e, n, !0), yu(n, () => {
    Ot(e), t && t();
  });
}
function yu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Fs(e, t, n) {
  if ((e.f & En) === 0) {
    if (e.f ^= En, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rr) !== 0 || (r.f & Vn) !== 0;
      Fs(r, t, i ? n : !1), r = o;
    }
  }
}
function ro(e) {
  wu(e, !0);
}
function wu(e, t) {
  if ((e.f & En) !== 0) {
    e.f ^= En;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & Vn) !== 0;
      wu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const pp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let oo = [], io = [];
function bu() {
  var e = oo;
  oo = [], oi(e);
}
function xu() {
  var e = io;
  io = [], oi(e);
}
function Eo(e) {
  oo.length === 0 && queueMicrotask(bu), oo.push(e);
}
function gp(e) {
  io.length === 0 && pp(xu), io.push(e);
}
function hp() {
  oo.length > 0 && bu(), io.length > 0 && xu();
}
function vp(e) {
  var t = (
    /** @type {Effect} */
    Te
  );
  if ((t.f & Fl) === 0) {
    if ((t.f & Is) === 0)
      throw e;
    t.fn(e);
  } else
    $u(e, t);
}
function $u(e, t) {
  for (; t !== null; ) {
    if ((t.f & Is) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let so = !1, ao = null, sr = !1, Wn = !1;
function Aa(e) {
  Wn = e;
}
let to = [], qe = null, Ft = !1;
function Yn(e) {
  qe = e;
}
let Te = null;
function Fn(e) {
  Te = e;
}
let Pn = null;
function ku(e) {
  qe !== null && qe.f & is && (Pn === null ? Pn = [e] : Pn.push(e));
}
let xt = null, Nt = 0, Zt = null;
function mp(e) {
  Zt = e;
}
let si = 1, lo = 0, ar = lo;
function Ha(e) {
  ar = e;
}
let qn = !1;
function Cu() {
  return ++si;
}
function Si(e) {
  var t = e.f;
  if ((t & Ln) !== 0)
    return !0;
  if ((t & vr) !== 0) {
    var n = e.deps, r = (t & Tt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ii) !== 0, a = r && Te !== null && !qn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= ii), a && d !== null && (d.f & Tt) === 0 && (u.f ^= Tt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Si(
          /** @type {Derived} */
          i
        ) && ru(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Te !== null && !qn) && pn(e, At);
  }
  return !1;
}
function _u(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Pn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & zt) !== 0 ? _u(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Ln) : (i.f & At) !== 0 && pn(i, vr), Ei(
        /** @type {Effect} */
        i
      ));
    }
}
function Su(e) {
  var t = xt, n = Nt, r = Zt, o = qe, i = qn, s = Pn, a = Xe, l = Ft, u = ar, d = e.f;
  xt = /** @type {null | Value[]} */
  null, Nt = 0, Zt = null, qn = (d & Tt) !== 0 && (Ft || !sr || qe === null), qe = (d & (Vn | hr)) === 0 ? e : null, Pn = null, Ta(e.ctx), Ft = !1, ar = ++lo, e.f |= is, e.ac !== null && (e.ac.abort(Ul), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (xt !== null) {
      var g;
      if (ai(e, Nt), f !== null && Nt > 0)
        for (f.length = Nt + xt.length, g = 0; g < xt.length; g++)
          f[Nt + g] = xt[g];
      else
        e.deps = f = xt;
      if (!qn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & zt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Nt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Nt < f.length && (ai(e, Nt), f.length = Nt);
    if (_i() && Zt !== null && !Ft && f !== null && (e.f & (zt | vr | Ln)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Zt.length; g++)
        _u(
          Zt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (lo++, Zt !== null && (r === null ? r = Zt : r.push(.../** @type {Source[]} */
    Zt))), p;
  } catch (h) {
    vp(h);
  } finally {
    xt = t, Nt = n, Zt = r, qe = o, qn = i, Pn = s, Ta(a), Ft = l, ar = u, e.f ^= is;
  }
}
function yp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & zt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (xt === null || !xt.includes(t)) && (pn(t, vr), (t.f & (Tt | ii)) === 0 && (t.f ^= ii), nu(
    /** @type {Derived} **/
    t
  ), ai(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ai(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      yp(e, n[r]);
}
function Xs(e) {
  var t = e.f;
  if ((t & Ci) === 0) {
    pn(e, At);
    var n = Te, r = sr;
    Te = e, sr = !0;
    try {
      (t & Hs) !== 0 ? fp(e) : hu(e), gu(e);
      var o = Su(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = si;
      var i;
      Rf && np && (e.f & Ln) !== 0 && e.deps;
    } finally {
      sr = r, Te = n;
    }
  }
}
function wp() {
  try {
    Uf();
  } catch (e) {
    if (ao !== null)
      $u(e, ao);
    else
      throw e;
  }
}
function Eu() {
  var e = sr;
  try {
    var t = 0;
    for (sr = !0; to.length > 0; ) {
      t++ > 1e3 && wp();
      var n = to, r = n.length;
      to = [];
      for (var o = 0; o < r; o++) {
        var i = xp(n[o]);
        bp(i);
      }
      ir.clear();
    }
  } finally {
    so = !1, sr = e, ao = null;
  }
}
function bp(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Ci | En)) === 0 && Si(r)) {
        var o = si;
        if (Xs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? mu(r) : r.fn = null), si > o && (r.f & Rs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      Ei(e[n]);
  }
}
function Ei(e) {
  so || (so = !0, queueMicrotask(Eu));
  for (var t = ao = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | Vn)) !== 0) {
      if ((n & At) === 0) return;
      t.f ^= At;
    }
  }
  to.push(t);
}
function xp(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Vn | hr)) !== 0, i = o && (r & At) !== 0;
    if (!i && (r & En) === 0) {
      (r & As) !== 0 ? t.push(n) : o ? n.f ^= At : Si(n) && Xs(n);
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
function m(e) {
  for (var t; ; ) {
    if (hp(), to.length === 0)
      return so = !1, ao = null, /** @type {T} */
      t;
    so = !0, Eu();
  }
}
async function $p() {
  await Promise.resolve(), m();
}
function c(e) {
  var t = e.f, n = (t & zt) !== 0;
  if (qe !== null && !Ft) {
    if (!Pn?.includes(e)) {
      var r = qe.deps;
      e.rv < lo && (e.rv = lo, xt === null && r !== null && r[Nt] === e ? Nt++ : xt === null ? xt = [e] : (!qn || !xt.includes(e)) && xt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Tt) === 0 && (o.f ^= Tt);
  }
  if (n && !Wn && (o = /** @type {Derived} */
  e, Si(o) && ru(o)), Wn) {
    if (ir.has(e))
      return ir.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & At) !== 0 || Pu(o)) && (s = js(o)), ir.set(o, s), s;
    }
  }
  return e.v;
}
function Pu(e) {
  if (e.v === ht) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ir.has(t) || (t.f & zt) !== 0 && Pu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ft(e) {
  var t = Ft;
  try {
    return Ft = !0, e();
  } finally {
    Ft = t;
  }
}
const kp = -7169;
function pn(e, t) {
  e.f = e.f & kp | t;
}
function Cp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Us(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (an in e)
      us(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && an in n && us(n);
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
    const n = ki(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Wl(n);
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
function _p(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Eo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Sp(e) {
  ke && /* @__PURE__ */ lt(e) !== null && Ws(e);
}
let Ia = !1;
function Ep() {
  Ia || (Ia = !0, document.addEventListener(
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
function Pp(e) {
  var t = qe, n = Te;
  Yn(null), Fn(null);
  try {
    return e();
  } finally {
    Yn(t), Fn(n);
  }
}
const Lu = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set();
function Js(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Jr.call(t, i), !i.cancelBubble)
      return Pp(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Eo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ds(e, t, n, r = {}) {
  var o = Js(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ra(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Js(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && du(() => {
    t.removeEventListener(e, s, i);
  });
}
function Mn(e) {
  for (var t = 0; t < e.length; t++)
    Lu.add(e[t]);
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
    ri(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = qe, p = Te;
    Yn(null), Fn(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          if (w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (xo(w)) {
              var [C, ...b] = w;
              C.apply(i, [e, ...b]);
            } else
              w.call(i, e);
        } catch (E) {
          f ? g.push(E) : f = E;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let E of g)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Yn(d), Fn(p);
    }
  }
}
function Gs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Lt(e, t) {
  var n = (
    /** @type {Effect} */
    Te
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  var n = (t & jl) !== 0, r = (t & zf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (ke)
      return Lt(Le, null), Le;
    o === void 0 && (o = Gs(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ lt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || au ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Lt(a, l);
    } else
      Lt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Lp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (ke)
      return Lt(Le, null), Le;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Gs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ lt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ lt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ lt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ lt(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Lt(d, p);
    } else
      Lt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ Lp(e, t, "svg");
}
function Ee(e = "") {
  if (!ke) {
    var t = Dn(e + "");
    return Lt(t, t), t;
  }
  var n = Le;
  return n.nodeType !== qs && (n.before(n = Dn()), mt(n)), Lt(n, n), n;
}
function Me() {
  if (ke)
    return Lt(Le, null), Le;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Dn();
  return e.append(t, n), Lt(t, n), e;
}
function V(e, t) {
  if (ke) {
    Te.nodes_end = Le, On();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Op(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Dp = [
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
  return Dp.includes(e);
}
const Vp = {
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
  return e = e.toLowerCase(), Vp[e] ?? e;
}
const Mp = ["touchstart", "touchmove"];
function zp(e) {
  return Mp.includes(e);
}
const Ap = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Hp(e) {
  return Ap.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ke(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Ou(e, t) {
  return Du(e, t);
}
function Ip(e, t) {
  ls(), t.intro = t.intro ?? !1;
  const n = t.target, r = ke, o = Le;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(n)
    ); i && (i.nodeType !== Lr || /** @type {Comment} */
    i.data !== Vs); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(i);
    if (!i)
      throw or;
    Vt(!0), mt(
      /** @type {Comment} */
      i
    ), On();
    const s = Du(e, { ...t, anchor: i });
    if (Le === null || Le.nodeType !== Lr || /** @type {Comment} */
    Le.data !== Ms)
      throw Co(), or;
    return Vt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === or)
      return t.recover === !1 && Jf(), ls(), Ws(n), Vt(!1), Ou(e, t);
    throw s;
  } finally {
    Vt(r), mt(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function Du(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ls();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = zp(g);
        t.addEventListener(g, Jr, { passive: h });
        var w = xr.get(g);
        w === void 0 ? (document.addEventListener(g, Jr, { passive: h }), xr.set(g, 1)) : xr.set(g, w + 1);
      }
    }
  };
  l(zs(Lu)), cs.add(l);
  var u = void 0, d = dp(() => {
    var p = n ?? t.appendChild(Dn());
    return fn(() => {
      if (i) {
        pe({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), ke && Lt(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, ke && (Te.nodes_end = Le), i && ge();
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
function Rp(e, t) {
  const n = fs.get(e);
  return n ? (fs.delete(e), n(t)) : Promise.resolve();
}
function rt(e, t, ...n) {
  var r = e, o = pt, i;
  Gn(() => {
    o !== (o = t()) && (i && (Ot(i), i = null), i = fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), ke && (r = Le);
}
function Qn(e) {
  Xe === null && Zs(), Br && Xe.l !== null ? Bp(Xe).m.push(e) : nt(() => {
    const t = ft(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pi(e) {
  Xe === null && Zs(), Qn(() => () => ft(e));
}
function Bp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function de(e, t, [n, r] = [0, 0]) {
  ke && n === 0 && On();
  var o = e, i = null, s = null, a = ht, l = n > 0 ? Rr : 0, u = !1;
  const d = (f, g = !0) => {
    u = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (ke && r !== -1) {
      if (n === 0) {
        const C = su(o);
        C === Vs ? r = 0 : C === Ts ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const w = r > n;
      !!a === w && (o = as(), mt(o), Vt(!1), h = !0, r = -1);
    }
    a ? (i ? ro(i) : g && (i = fn(() => g(o))), s && Dr(s, () => {
      s = null;
    })) : (s ? ro(s) : g && (s = fn(() => g(o, [n + 1, r]))), i && Dr(i, () => {
      i = null;
    })), h && Vt(!0);
  };
  Gn(() => {
    u = !1, t(d), u || p(null, null);
  }, l), ke && (o = Le);
}
function qp(e, t) {
  ke && mt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ lt(e)
  ), So(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Nr(e, t) {
  return t;
}
function Zp(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Fs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ws(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  yu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), Rn(e, d.prev, d.next)), Ot(d.e, !a);
    }
  });
}
function yt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Zl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = ke ? mt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ lt(u)
    ) : u.appendChild(Dn());
  }
  ke && On();
  var d = null, p = !1, f = /* @__PURE__ */ Ks(() => {
    var g = n();
    return xo(g) ? g : g == null ? [] : zs(g);
  });
  Gn(() => {
    var g = c(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let w = !1;
    if (ke) {
      var C = su(s) === Ts;
      C !== (h === 0) && (s = as(), mt(s), Vt(!1), w = !0);
    }
    if (ke) {
      for (var b = null, E, x = 0; x < h; x++) {
        if (Le.nodeType === Lr && /** @type {Comment} */
        Le.data === Ms) {
          s = /** @type {Comment} */
          Le, w = !0, Vt(!1);
          break;
        }
        var $ = g[x], k = r($, x);
        E = Nu(
          Le,
          a,
          b,
          null,
          $,
          k,
          x,
          o,
          t,
          n
        ), a.items.set(k, E), b = E;
      }
      h > 0 && mt(as());
    }
    ke || Kp(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? ro(d) : d = fn(() => i(s)) : d !== null && Dr(d, () => {
      d = null;
    })), w && Vt(!0), c(f);
  }), ke && (s = Le);
}
function Kp(e, t, n, r, o, i, s) {
  var a = (o & Of) !== 0, l = (o & (Ds | Ns)) !== 0, u = e.length, d = t.items, p = t.first, f = p, g, h = null, w, C = [], b = [], E, x, $, k;
  if (a)
    for (k = 0; k < u; k += 1)
      E = e[k], x = i(E, k), $ = d.get(x), $ !== void 0 && ($.a?.measure(), (w ??= /* @__PURE__ */ new Set()).add($));
  for (k = 0; k < u; k += 1) {
    if (E = e[k], x = i(E, k), $ = d.get(x), $ === void 0) {
      var D = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Nu(
        D,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        x,
        k,
        r,
        o,
        s
      ), d.set(x, h), C = [], b = [], f = h.next;
      continue;
    }
    if (l && jp($, E, k, o), ($.e.f & En) !== 0 && (ro($.e), a && ($.a?.unfix(), (w ??= /* @__PURE__ */ new Set()).delete($))), $ !== f) {
      if (g !== void 0 && g.has($)) {
        if (C.length < b.length) {
          var A = b[0], q;
          h = A.prev;
          var Q = C[0], j = C[C.length - 1];
          for (q = 0; q < C.length; q += 1)
            Ba(C[q], A, n);
          for (q = 0; q < b.length; q += 1)
            g.delete(b[q]);
          Rn(t, Q.prev, j.next), Rn(t, h, Q), Rn(t, j, A), f = A, h = j, k -= 1, C = [], b = [];
        } else
          g.delete($), Ba($, f, n), Rn(t, $.prev, $.next), Rn(t, $, h === null ? t.first : h.next), Rn(t, h, $), h = $;
        continue;
      }
      for (C = [], b = []; f !== null && f.k !== x; )
        (f.e.f & En) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), b.push(f), f = f.next;
      if (f === null)
        continue;
      $ = f;
    }
    C.push($), h = $, f = $.next;
  }
  if (f !== null || g !== void 0) {
    for (var O = g === void 0 ? [] : zs(g); f !== null; )
      (f.e.f & En) === 0 && O.push(f), f = f.next;
    var _ = O.length;
    if (_ > 0) {
      var H = (o & Zl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (k = 0; k < _; k += 1)
          O[k].a?.measure();
        for (k = 0; k < _; k += 1)
          O[k].a?.fix();
      }
      Zp(t, O, H, d);
    }
  }
  a && Eo(() => {
    if (w !== void 0)
      for ($ of w)
        $.a?.apply();
  }), Te.first = t.first && t.first.e, Te.last = h && h.e;
}
function jp(e, t, n, r) {
  (r & Ds) !== 0 && ss(e.v, t), (r & Ns) !== 0 ? ss(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Nu(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & Ds) !== 0, p = (l & Df) === 0, f = d ? p ? /* @__PURE__ */ ou(o, !1, !1) : ur(o) : o, g = (l & Ns) === 0 ? s : ur(s), h = {
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
    return h.e = fn(() => a(e, f, g, u), ke), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Ba(e, t, n) {
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
      /* @__PURE__ */ vn(i)
    );
    o.before(i), i = s;
  }
}
function Rn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Se(() => {
    var a = (
      /** @type {Effect} */
      Te
    );
    if (s === (s = t() ?? "")) {
      ke && On();
      return;
    }
    if (a.nodes_start !== null && (vu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (ke) {
        Le.data;
        for (var l = On(), u = l; l !== null && (l.nodeType !== Lr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ vn(l);
        if (l === null)
          throw Co(), or;
        Lt(Le, u), i = mt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Gs(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ lt(p)), Lt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ lt(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ lt(p)
          );
      else
        i.before(p);
    }
  });
}
function ea(e, t, n) {
  ke && On();
  var r = e, o, i;
  Gn(() => {
    o !== (o = t()) && (i && (Dr(i), i = null), o && (i = fn(() => n(r, o))));
  }, Rr), ke && (r = Le);
}
function Wp(e, t, n, r, o, i) {
  let s = ke;
  ke && On();
  var a, l, u = null;
  ke && Le.nodeType === Wf && (u = /** @type {Element} */
  Le, On());
  var d = (
    /** @type {TemplateNode} */
    ke ? Le : e
  ), p;
  Gn(() => {
    const f = t() || null;
    var g = f === "svg" ? Hf : null;
    f !== a && (p && (f === null ? Dr(p, () => {
      p = null, l = null;
    }) : f === l ? ro(p) : Ot(p)), f && f !== l && (p = fn(() => {
      if (u = ke ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Lt(u, u), r) {
        ke && Hp(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          ke ? /* @__PURE__ */ lt(u) : u.appendChild(Dn())
        );
        ke && (h === null ? Vt(!1) : mt(h)), r(u, h);
      }
      Te.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, Rr), s && (Vt(!0), mt(d));
}
function He(e, t) {
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
function vt(e, t, n) {
  _o(() => {
    var r = ft(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      So(() => {
        var s = n();
        Us(s), o && Gl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Yp(e, t) {
  var n = void 0, r;
  Gn(() => {
    n !== (n = t()) && (r && (Ot(r), r = null), n && (r = fn(() => {
      _o(() => (
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
function Fp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Vu(e)) && (r && (r += " "), r += t);
  return r;
}
function zn(e) {
  return typeof e == "object" ? Fp(e) : e ?? "";
}
const qa = [...` 	
\r\f \v\uFEFF`];
function Xp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || qa.includes(r[s - 1])) && (a === r.length || qa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Za(e, t = !1) {
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
function Up(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ji)), o && l.push(...Object.keys(o).map(ji));
      var u = 0, d = -1;
      const w = e.length;
      for (var p = 0; p < w; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === w - 1) {
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
    return r && (n += Za(r)), o && (n += Za(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Dt(e, t, n, r, o, i) {
  var s = e.__className;
  if (ke || s !== n || s === void 0) {
    var a = Xp(n, r, i);
    (!ke || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function Wi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function kt(e, t, n, r) {
  var o = e.__style;
  if (ke || o !== t) {
    var i = Up(t, r);
    (!ke || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Wi(e, n?.[0], r[0]), Wi(e, n?.[1], r[1], "important")) : Wi(e, n, r));
  return r;
}
function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!xo(t))
      return lp();
    for (var r of e.options)
      r.selected = t.includes(Ka(r));
    return;
  }
  for (r of e.options) {
    var o = Ka(r);
    if (sp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Jp(e) {
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
  }), du(() => {
    t.disconnect();
  });
}
function Ka(e) {
  return "__value" in e ? e.__value : e.value;
}
const Bn = Symbol("class"), on = Symbol("style"), Tu = Symbol("is custom element"), Mu = Symbol("is html");
function ln(e) {
  if (ke) {
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
    e.__on_r = n, gp(n), Ep();
  }
}
function Xo(e, t) {
  var n = Li(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function gs(e, t) {
  var n = Li(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Gp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Li(e);
  ke && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[jf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && zu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qp(e, t, n, r, o = !1) {
  var i = Li(e), s = i[Tu], a = !i[Mu];
  let l = ke && s;
  l && Vt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = zn(n.class) : (r || n[Bn]) && (n.class = null), n[on] && (n.style ??= null);
  var f = zu(e);
  for (const x in n) {
    let $ = n[x];
    if (d && x === "value" && $ == null) {
      e.value = e.__value = "", u[x] = $;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Dt(e, g, $, r, t?.[Bn], n[Bn]), u[x] = $, u[Bn] = n[Bn];
      continue;
    }
    if (x === "style") {
      kt(e, $, t?.[on], n[on]), u[x] = $, u[on] = n[on];
      continue;
    }
    var h = u[x];
    if (!($ === h && !($ === void 0 && e.hasAttribute(x)))) {
      u[x] = $;
      var w = x[0] + x[1];
      if (w !== "$$")
        if (w === "on") {
          const k = {}, D = "$$" + x;
          let A = x.slice(2);
          var C = Np(A);
          if (Op(A) && (A = A.slice(0, -7), k.capture = !0), !C && h) {
            if ($ != null) continue;
            e.removeEventListener(A, u[D], k), u[D] = null;
          }
          if ($ != null)
            if (C)
              e[`__${A}`] = $, Mn([A]);
            else {
              let q = function(Q) {
                u[x].call(this, Q);
              };
              u[D] = Js(A, e, q, k);
            }
          else C && (e[`__${A}`] = void 0);
        } else if (x === "style")
          $e(e, x, $);
        else if (x === "autofocus")
          _p(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!s && (x === "__value" || x === "value" && $ != null))
          e.value = e.__value = $;
        else if (x === "selected" && d)
          Gp(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var b = x;
          a || (b = Tp(b));
          var E = b === "defaultValue" || b === "defaultChecked";
          if ($ == null && !s && !E)
            if (i[x] = null, b === "value" || b === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const D = t === void 0;
              if (b === "value") {
                let A = k.defaultValue;
                k.removeAttribute(b), k.defaultValue = A, k.value = k.__value = D ? A : null;
              } else {
                let A = k.defaultChecked;
                k.removeAttribute(b), k.defaultChecked = A, k.checked = D ? A : !1;
              }
            } else
              e.removeAttribute(x);
          else E || f.includes(b) && (s || typeof $ != "string") ? e[b] = $ : typeof $ != "function" && $e(e, b, $);
        }
    }
  }
  return l && Vt(!0), u;
}
function ut(e, t, n = [], r, o = !1, i = qr) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if (Gn(() => {
    var f = t(...s.map(c)), g = Qp(e, a, f, r, o);
    d && u && "value" in f && ps(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let w of Object.getOwnPropertySymbols(l))
      f[w] || Ot(l[w]);
    for (let w of Object.getOwnPropertySymbols(f)) {
      var h = f[w];
      w.description === If && (!a || h !== a[w]) && (l[w] && Ot(l[w]), l[w] = fn(() => Yp(e, () => h))), g[w] = h;
    }
    a = g;
  }), u) {
    var p = (
      /** @type {HTMLSelectElement} */
      e
    );
    _o(() => {
      ps(
        p,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), Jp(p);
    });
  }
  d = !0;
}
function Li(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Tu]: e.nodeName.includes("-"),
      [Mu]: e.namespaceURI === Af
    }
  );
}
var ja = /* @__PURE__ */ new Map();
function zu(e) {
  var t = ja.get(e.nodeName);
  if (t) return t;
  ja.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Wl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ki(r);
  }
  return t;
}
class ta {
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
          ta.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var eg = /* @__PURE__ */ new ta({
  box: "border-box"
});
function Wa(e, t, n) {
  var r = eg.observe(e, () => n(e[t]));
  _o(() => (ft(() => n(e[t])), r));
}
function Ya(e, t) {
  return e === t || e?.[an] === t;
}
function Ht(e = {}, t, n, r) {
  return _o(() => {
    var o, i;
    return So(() => {
      o = i, i = [], ft(() => {
        e !== n(...i) && (t(e, ...i), o && Ya(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Eo(() => {
        i && Ya(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Au(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => Us(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ qr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && pu(() => {
    Fa(t, r), oi(n.b);
  }), nt(() => {
    const o = ft(() => n.m.map(Zf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && nt(() => {
    Fa(t, r), oi(n.a);
  });
}
function Fa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let Ro = !1;
function tg(e) {
  var t = Ro;
  try {
    return Ro = !1, [e(), Ro];
  } finally {
    Ro = t;
  }
}
const ng = {
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
function Ze(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    ng
  );
}
const rg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Te;
      try {
        Fn(e.parent_effect), e.special[t] = y(
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
        Fn(r);
      }
    }
    return e.special[t](n), za(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), za(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Xa(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: ur(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Te
      )
    },
    rg
  );
}
const og = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Fr(o) && (o = o());
      const i = Sn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Fr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === an || t === Bs) return !1;
    for (let n of e.props)
      if (Fr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Fr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function je(...e) {
  return new Proxy({ props: e }, og);
}
function y(e, t, n, r) {
  var o = !Br || (n & Vf) !== 0, i = (n & Tf) !== 0, s = (n & Mf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, a = s ? ft(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = an in e || Bs in e;
    d = Sn(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = tg(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && Gf(), d(f)));
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
    var w = e.$$legacy;
    return function(x, $) {
      return arguments.length > 0 ? ((!o || !$ || w || g) && d($ ? h() : x), x) : h();
    };
  }
  var C = !1, b = ((n & Nf) !== 0 ? qr : Ks)(() => (C = !1, h()));
  i && c(b);
  var E = (
    /** @type {Effect} */
    Te
  );
  return function(x, $) {
    if (arguments.length > 0) {
      const k = $ ? c(b) : o && i ? jt(x) : x;
      return W(b, k), C = !0, a !== void 0 && (a = k), x;
    }
    return Wn && C || (E.f & Ci) !== 0 ? b.v : c(b);
  };
}
function ig(e) {
  return new sg(e);
}
class sg {
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
          return s === Bs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return W(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Ip : Ou)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ri(this, i, {
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
      Rp(this.#e);
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
let Hu;
typeof HTMLElement == "function" && (Hu = class extends HTMLElement {
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
      const t = {}, n = ag(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Uo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ig({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Ys(() => {
        So(() => {
          this.$$r = !0;
          for (const r of ni(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Uo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Uo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return ni(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Uo(e, t, n, r) {
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
function ag(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, n, r, o, i) {
  let s = class extends Hu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ni(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ni(t).forEach((a) => {
    ri(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Uo(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Sn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ri(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var lg = { value: () => {
} };
function Oi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Jo(n);
}
function Jo(e) {
  this._ = e;
}
function ug(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Jo.prototype = Oi.prototype = {
  constructor: Jo,
  on: function(e, t) {
    var n = this._, r = ug(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = cg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ua(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ua(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Jo(e);
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
function cg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ua(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = lg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var hs = "http://www.w3.org/1999/xhtml";
const Ja = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: hs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Di(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ja.hasOwnProperty(t) ? { space: Ja[t], local: e } : e;
}
function dg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === hs && t.documentElement.namespaceURI === hs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function fg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Iu(e) {
  var t = Di(e);
  return (t.local ? fg : dg)(t);
}
function pg() {
}
function na(e) {
  return e == null ? pg : function() {
    return this.querySelector(e);
  };
}
function gg(e) {
  typeof e != "function" && (e = na(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new It(r, this._parents);
}
function hg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function vg() {
  return [];
}
function Ru(e) {
  return e == null ? vg : function() {
    return this.querySelectorAll(e);
  };
}
function mg(e) {
  return function() {
    return hg(e.apply(this, arguments));
  };
}
function yg(e) {
  typeof e == "function" ? e = mg(e) : e = Ru(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new It(r, o);
}
function Bu(e) {
  return function() {
    return this.matches(e);
  };
}
function qu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var wg = Array.prototype.find;
function bg(e) {
  return function() {
    return wg.call(this.children, e);
  };
}
function xg() {
  return this.firstElementChild;
}
function $g(e) {
  return this.select(e == null ? xg : bg(typeof e == "function" ? e : qu(e)));
}
var kg = Array.prototype.filter;
function Cg() {
  return Array.from(this.children);
}
function _g(e) {
  return function() {
    return kg.call(this.children, e);
  };
}
function Sg(e) {
  return this.selectAll(e == null ? Cg : _g(typeof e == "function" ? e : qu(e)));
}
function Eg(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new It(r, this._parents);
}
function Zu(e) {
  return new Array(e.length);
}
function Pg() {
  return new It(this._enter || this._groups.map(Zu), this._parents);
}
function li(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
li.prototype = {
  constructor: li,
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
function Lg(e) {
  return function() {
    return e;
  };
}
function Og(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new li(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Dg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? o[a] = l : u.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = u.get(g)) ? (r[a] = l, l.__data__ = i[a], u.delete(g)) : n[a] = new li(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function Ng(e) {
  return e.__data__;
}
function Vg(e, t) {
  if (!arguments.length) return Array.from(this, Ng);
  var n = t ? Dg : Og, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Lg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = Tg(e.call(d, d && d.__data__, u, r)), h = g.length, w = a[u] = new Array(h), C = s[u] = new Array(h), b = l[u] = new Array(f);
    n(d, p, w, C, b, g, t);
    for (var E = 0, x = 0, $, k; E < h; ++E)
      if ($ = w[E]) {
        for (E >= x && (x = E + 1); !(k = C[x]) && ++x < h; ) ;
        $._next = k || null;
      }
  }
  return s = new It(s, r), s._enter = a, s._exit = l, s;
}
function Tg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Mg() {
  return new It(this._exit || this._groups.map(Zu), this._parents);
}
function zg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Ag(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new It(a, this._parents);
}
function Hg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Ig(e) {
  e || (e = Rg);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new It(o, this._parents).order();
}
function Rg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Bg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function qg() {
  return Array.from(this);
}
function Zg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Kg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function jg() {
  return !this.node();
}
function Wg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Yg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Fg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Xg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ug(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Jg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Gg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Qg(e, t) {
  var n = Di(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Fg : Yg : typeof t == "function" ? n.local ? Gg : Jg : n.local ? Ug : Xg)(n, t));
}
function Ku(e) {
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
  return arguments.length > 1 ? this.each((t == null ? eh : typeof t == "function" ? nh : th)(e, t, n ?? "")) : Vr(this.node(), e);
}
function Vr(e, t) {
  return e.style.getPropertyValue(t) || Ku(e).getComputedStyle(e, null).getPropertyValue(t);
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
function sh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ah(e, t) {
  return arguments.length > 1 ? this.each((t == null ? oh : typeof t == "function" ? sh : ih)(e, t)) : this.node()[e];
}
function ju(e) {
  return e.trim().split(/^|\s+/);
}
function ra(e) {
  return e.classList || new Wu(e);
}
function Wu(e) {
  this._node = e, this._names = ju(e.getAttribute("class") || "");
}
Wu.prototype = {
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
function Yu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Fu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lh(e) {
  return function() {
    Yu(this, e);
  };
}
function uh(e) {
  return function() {
    Fu(this, e);
  };
}
function ch(e, t) {
  return function() {
    (t.apply(this, arguments) ? Yu : Fu)(this, e);
  };
}
function dh(e, t) {
  var n = ju(e + "");
  if (arguments.length < 2) {
    for (var r = ra(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ch : t ? lh : uh)(n, t));
}
function fh() {
  this.textContent = "";
}
function ph(e) {
  return function() {
    this.textContent = e;
  };
}
function gh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hh(e) {
  return arguments.length ? this.each(e == null ? fh : (typeof e == "function" ? gh : ph)(e)) : this.node().textContent;
}
function vh() {
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
  return arguments.length ? this.each(e == null ? vh : (typeof e == "function" ? yh : mh)(e)) : this.node().innerHTML;
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
function kh() {
  return this.each($h);
}
function Ch(e) {
  var t = typeof e == "function" ? e : Iu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function _h() {
  return null;
}
function Sh(e, t) {
  var n = typeof e == "function" ? e : Iu(e), r = t == null ? _h : typeof t == "function" ? t : na(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ph() {
  return this.each(Eh);
}
function Lh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Oh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Dh(e) {
  return this.select(e ? Oh : Lh);
}
function Nh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Vh(e) {
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
function Mh(e) {
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
    var r = this.__on, o, i = Vh(t);
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
function Ah(e, t, n) {
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
  for (a = t ? zh : Mh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Ku(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Hh(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function Ih(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Rh(e, t) {
  return this.each((typeof t == "function" ? Ih : Hh)(e, t));
}
function* Bh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Uu = [null];
function It(e, t) {
  this._groups = e, this._parents = t;
}
function Po() {
  return new It([[document.documentElement]], Uu);
}
function qh() {
  return this;
}
It.prototype = Po.prototype = {
  constructor: It,
  select: gg,
  selectAll: yg,
  selectChild: $g,
  selectChildren: Sg,
  filter: Eg,
  data: Vg,
  enter: Pg,
  exit: Mg,
  join: zg,
  merge: Ag,
  selection: qh,
  order: Hg,
  sort: Ig,
  call: Bg,
  nodes: qg,
  node: Zg,
  size: Kg,
  empty: jg,
  each: Wg,
  attr: Qg,
  style: rh,
  property: ah,
  classed: dh,
  text: hh,
  html: wh,
  raise: xh,
  lower: kh,
  append: Ch,
  insert: Sh,
  remove: Ph,
  clone: Dh,
  datum: Nh,
  on: Ah,
  dispatch: Rh,
  [Symbol.iterator]: Bh
};
function Kt(e) {
  return typeof e == "string" ? new It([[document.querySelector(e)]], [document.documentElement]) : new It([[e]], Uu);
}
function Zh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Yt(e, t) {
  if (e = Zh(e), t === void 0 && (t = e.currentTarget), t) {
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
const Kh = { passive: !1 }, uo = { capture: !0, passive: !1 };
function Yi(e) {
  e.stopImmediatePropagation();
}
function _r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ju(e) {
  var t = e.document.documentElement, n = Kt(e).on("dragstart.drag", _r, uo);
  "onselectstart" in t ? n.on("selectstart.drag", _r, uo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Gu(e, t) {
  var n = e.document.documentElement, r = Kt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", _r, uo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Bo = (e) => () => e;
function vs(e, {
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
vs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function jh(e) {
  return !e.ctrlKey && !e.button;
}
function Wh() {
  return this.parentNode;
}
function Yh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Fh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xh() {
  var e = jh, t = Wh, n = Yh, r = Fh, o = {}, i = Oi("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f($) {
    $.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", b, Kh).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g($, k) {
    if (!(d || !e.call(this, $, k))) {
      var D = x(this, t.call(this, $, k), $, k, "mouse");
      D && (Kt($.view).on("mousemove.drag", h, uo).on("mouseup.drag", w, uo), Ju($.view), Yi($), u = !1, a = $.clientX, l = $.clientY, D("start", $));
    }
  }
  function h($) {
    if (_r($), !u) {
      var k = $.clientX - a, D = $.clientY - l;
      u = k * k + D * D > p;
    }
    o.mouse("drag", $);
  }
  function w($) {
    Kt($.view).on("mousemove.drag mouseup.drag", null), Gu($.view, u), _r($), o.mouse("end", $);
  }
  function C($, k) {
    if (e.call(this, $, k)) {
      var D = $.changedTouches, A = t.call(this, $, k), q = D.length, Q, j;
      for (Q = 0; Q < q; ++Q)
        (j = x(this, A, $, k, D[Q].identifier, D[Q])) && (Yi($), j("start", $, D[Q]));
    }
  }
  function b($) {
    var k = $.changedTouches, D = k.length, A, q;
    for (A = 0; A < D; ++A)
      (q = o[k[A].identifier]) && (_r($), q("drag", $, k[A]));
  }
  function E($) {
    var k = $.changedTouches, D = k.length, A, q;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), A = 0; A < D; ++A)
      (q = o[k[A].identifier]) && (Yi($), q("end", $, k[A]));
  }
  function x($, k, D, A, q, Q) {
    var j = i.copy(), O = Yt(Q || D, k), _, H, v;
    if ((v = n.call($, new vs("beforestart", {
      sourceEvent: D,
      target: f,
      identifier: q,
      active: s,
      x: O[0],
      y: O[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), A)) != null)
      return _ = v.x - O[0] || 0, H = v.y - O[1] || 0, function P(L, T, R) {
        var N = O, Z;
        switch (L) {
          case "start":
            o[q] = P, Z = s++;
            break;
          case "end":
            delete o[q], --s;
          // falls through
          case "drag":
            O = Yt(R || T, k), Z = s;
            break;
        }
        j.call(
          L,
          $,
          new vs(L, {
            sourceEvent: T,
            subject: v,
            target: f,
            identifier: q,
            active: Z,
            x: O[0] + _,
            y: O[1] + H,
            dx: O[0] - N[0],
            dy: O[1] - N[1],
            dispatch: j
          }),
          A
        );
      };
  }
  return f.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : Bo(!!$), f) : e;
  }, f.container = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : Bo($), f) : t;
  }, f.subject = function($) {
    return arguments.length ? (n = typeof $ == "function" ? $ : Bo($), f) : n;
  }, f.touchable = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : Bo(!!$), f) : r;
  }, f.on = function() {
    var $ = i.on.apply(i, arguments);
    return $ === i ? f : $;
  }, f.clickDistance = function($) {
    return arguments.length ? (p = ($ = +$) * $, f) : Math.sqrt(p);
  }, f;
}
function oa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Lo() {
}
var co = 0.7, ui = 1 / co, Sr = "\\s*([+-]?\\d+)\\s*", fo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Uh = /^#([0-9a-f]{3,8})$/, Jh = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Gh = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), Qh = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${fo}\\)$`), e1 = new RegExp(`^rgba\\(${un},${un},${un},${fo}\\)$`), t1 = new RegExp(`^hsl\\(${fo},${un},${un}\\)$`), n1 = new RegExp(`^hsla\\(${fo},${un},${un},${fo}\\)$`), Ga = {
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
oa(Lo, cr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qa,
  // Deprecated! Use color.formatHex.
  formatHex: Qa,
  formatHex8: r1,
  formatHsl: o1,
  formatRgb: el,
  toString: el
});
function Qa() {
  return this.rgb().formatHex();
}
function r1() {
  return this.rgb().formatHex8();
}
function o1() {
  return ec(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function cr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Uh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Et(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? qo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? qo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Jh.exec(e)) ? new Et(t[1], t[2], t[3], 1) : (t = Gh.exec(e)) ? new Et(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qh.exec(e)) ? qo(t[1], t[2], t[3], t[4]) : (t = e1.exec(e)) ? qo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = t1.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = n1.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Ga.hasOwnProperty(e) ? tl(Ga[e]) : e === "transparent" ? new Et(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Et(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function qo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Et(e, t, n, r);
}
function i1(e) {
  return e instanceof Lo || (e = cr(e)), e ? (e = e.rgb(), new Et(e.r, e.g, e.b, e.opacity)) : new Et();
}
function ms(e, t, n, r) {
  return arguments.length === 1 ? i1(e) : new Et(e, t, n, r ?? 1);
}
function Et(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
oa(Et, ms, Qu(Lo, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? co : Math.pow(co, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Et(lr(this.r), lr(this.g), lr(this.b), ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: s1,
  formatRgb: rl,
  toString: rl
}));
function nl() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function s1() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rl() {
  const e = ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, n, r);
}
function ec(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Lo || (e = cr(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Xt(s, a, l, e.opacity);
}
function a1(e, t, n, r) {
  return arguments.length === 1 ? ec(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
oa(Xt, a1, Qu(Lo, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? co : Math.pow(co, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Et(
      Fi(e >= 240 ? e - 240 : e + 120, o, r),
      Fi(e, o, r),
      Fi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Xt(il(this.h), Zo(this.s), Zo(this.l), ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${il(this.h)}, ${Zo(this.s) * 100}%, ${Zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function il(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Fi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ia = (e) => () => e;
function l1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function u1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function c1(e) {
  return (e = +e) == 1 ? tc : function(t, n) {
    return n - t ? u1(t, n, e) : ia(isNaN(t) ? n : t);
  };
}
function tc(e, t) {
  var n = t - e;
  return n ? l1(e, n) : ia(isNaN(e) ? t : e);
}
const di = function e(t) {
  var n = c1(t);
  function r(o, i) {
    var s = n((o = ms(o)).r, (i = ms(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = tc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function d1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function f1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function p1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = no(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function g1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function h1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = no(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ys = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(ys.source, "g");
function v1(e) {
  return function() {
    return e;
  };
}
function m1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function nc(e, t) {
  var n = ys.lastIndex = Xi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ys.exec(e)) && (o = Xi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: rn(r, o) })), n = Xi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? m1(l[0].x) : v1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function no(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ia(t) : (n === "number" ? rn : n === "string" ? (r = cr(t)) ? (t = r, di) : nc : t instanceof cr ? di : t instanceof Date ? g1 : f1(t) ? d1 : Array.isArray(t) ? p1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? h1 : rn)(e, t);
}
var sl = 180 / Math.PI, rc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function oc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * sl,
    skewX: Math.atan(l) * sl,
    scaleX: s,
    scaleY: a
  };
}
var Ko;
function y1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? rc : oc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function w1(e) {
  return e == null || (Ko || (Ko = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ko.setAttribute("transform", e), !(e = Ko.transform.baseVal.consolidate())) ? rc : (e = e.matrix, oc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ic(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var w = g.push("translate(", null, t, null, n);
      h.push({ i: w - 4, x: rn(u, p) }, { i: w - 2, x: rn(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: rn(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: rn(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var w = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: w - 4, x: rn(u, p) }, { i: w - 2, x: rn(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, w = f.length, C; ++h < w; ) p[(C = f[h]).i] = C.x(g);
      return p.join("");
    };
  };
}
var b1 = ic(y1, "px, ", "px)", "deg)"), x1 = ic(w1, ", ", ")", ")"), $1 = 1e-12;
function al(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function k1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function C1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Go = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, w = g * g + h * h, C, b;
    if (w < $1)
      b = Math.log(f / u) / t, C = function(A) {
        return [
          a + A * g,
          l + A * h,
          u * Math.exp(t * A * b)
        ];
      };
    else {
      var E = Math.sqrt(w), x = (f * f - u * u + r * w) / (2 * u * n * E), $ = (f * f - u * u - r * w) / (2 * f * n * E), k = Math.log(Math.sqrt(x * x + 1) - x), D = Math.log(Math.sqrt($ * $ + 1) - $);
      b = (D - k) / t, C = function(A) {
        var q = A * b, Q = al(k), j = u / (n * E) * (Q * C1(t * q + k) - k1(k));
        return [
          a + j * g,
          l + j * h,
          u * Q / al(t * q + k)
        ];
      };
    }
    return C.duration = b * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Tr = 0, Gr = 0, Xr = 0, sc = 1e3, fi, Qr, pi = 0, dr = 0, Ni = 0, po = typeof performance == "object" && performance.now ? performance : Date, ac = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function sa() {
  return dr || (ac(_1), dr = po.now() + Ni);
}
function _1() {
  dr = 0;
}
function gi() {
  this._call = this._time = this._next = null;
}
gi.prototype = lc.prototype = {
  constructor: gi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? sa() : +n) + (t == null ? 0 : +t), !this._next && Qr !== this && (Qr ? Qr._next = this : fi = this, Qr = this), this._call = e, this._time = n, ws();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ws());
  }
};
function lc(e, t, n) {
  var r = new gi();
  return r.restart(e, t, n), r;
}
function S1() {
  sa(), ++Tr;
  for (var e = fi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Tr;
}
function ll() {
  dr = (pi = po.now()) + Ni, Tr = Gr = 0;
  try {
    S1();
  } finally {
    Tr = 0, P1(), dr = 0;
  }
}
function E1() {
  var e = po.now(), t = e - pi;
  t > sc && (Ni -= t, pi = e);
}
function P1() {
  for (var e, t = fi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : fi = n);
  Qr = e, ws(r);
}
function ws(e) {
  if (!Tr) {
    Gr && (Gr = clearTimeout(Gr));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (Gr = setTimeout(ll, e - po.now() - Ni)), Xr && (Xr = clearInterval(Xr))) : (Xr || (pi = po.now(), Xr = setInterval(E1, sc)), Tr = 1, ac(ll));
  }
}
function ul(e, t, n) {
  var r = new gi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var L1 = Oi("start", "end", "cancel", "interrupt"), O1 = [], uc = 0, cl = 1, bs = 2, Qo = 3, dl = 4, xs = 5, ei = 6;
function Vi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  D1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: L1,
    tween: O1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: uc
  });
}
function aa(e, t) {
  var n = Gt(e, t);
  if (n.state > uc) throw new Error("too late; already scheduled");
  return n;
}
function mn(e, t) {
  var n = Gt(e, t);
  if (n.state > Qo) throw new Error("too late; already running");
  return n;
}
function Gt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function D1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = lc(i, 0, n.time);
  function i(u) {
    n.state = cl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== cl) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Qo) return ul(s);
        g.state === dl ? (g.state = ei, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = ei, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ul(function() {
      n.state === Qo && (n.state = dl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = bs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === bs) {
      for (n.state = Qo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = xs, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === xs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ei, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function ti(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > bs && r.state < xs, r.state = ei, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function N1(e) {
  return this.each(function() {
    ti(this, e);
  });
}
function V1(e, t) {
  var n, r;
  return function() {
    var o = mn(this, e), i = o.tween;
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
    var i = mn(this, e), s = i.tween;
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
function M1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Gt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? V1 : T1)(n, e, t));
}
function la(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Gt(o, r).value[t];
  };
}
function cc(e, t) {
  var n;
  return (typeof t == "number" ? rn : t instanceof cr ? di : (n = cr(t)) ? (t = n, di) : nc)(e, t);
}
function z1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function A1(e) {
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
function I1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function R1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function B1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function q1(e, t) {
  var n = Di(e), r = n === "transform" ? x1 : cc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? B1 : R1)(n, r, la(this, "attr." + e, t)) : t == null ? (n.local ? A1 : z1)(n) : (n.local ? I1 : H1)(n, r, t));
}
function Z1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function K1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function j1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && K1(e, i)), n;
  }
  return o._value = t, o;
}
function W1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Z1(e, i)), n;
  }
  return o._value = t, o;
}
function Y1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Di(e);
  return this.tween(n, (r.local ? j1 : W1)(r, t));
}
function F1(e, t) {
  return function() {
    aa(this, e).delay = +t.apply(this, arguments);
  };
}
function X1(e, t) {
  return t = +t, function() {
    aa(this, e).delay = t;
  };
}
function U1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? F1 : X1)(t, e)) : Gt(this.node(), t).delay;
}
function J1(e, t) {
  return function() {
    mn(this, e).duration = +t.apply(this, arguments);
  };
}
function G1(e, t) {
  return t = +t, function() {
    mn(this, e).duration = t;
  };
}
function Q1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? J1 : G1)(t, e)) : Gt(this.node(), t).duration;
}
function ev(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    mn(this, e).ease = t;
  };
}
function tv(e) {
  var t = this._id;
  return arguments.length ? this.each(ev(t, e)) : Gt(this.node(), t).ease;
}
function nv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    mn(this, e).ease = n;
  };
}
function rv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(nv(this._id, e));
}
function ov(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Nn(r, this._parents, this._name, this._id);
}
function iv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || u[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Nn(s, this._parents, this._name, this._id);
}
function sv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function av(e, t, n) {
  var r, o, i = sv(t) ? aa : mn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function lv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Gt(this.node(), n).on.on(e) : this.each(av(n, e, t));
}
function uv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function cv() {
  return this.on("end.remove", uv(this._id));
}
function dv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = na(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Vi(u[f], t, n, f, u, Gt(d, n)));
  return new Nn(i, this._parents, t, n);
}
function fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Ru(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = Gt(d, n), w = 0, C = f.length; w < C; ++w)
          (g = f[w]) && Vi(g, t, n, w, f, h);
        i.push(f), s.push(d);
      }
  return new Nn(i, s, t, n);
}
var pv = Po.prototype.constructor;
function gv() {
  return new pv(this._groups, this._parents);
}
function hv(e, t) {
  var n, r, o;
  return function() {
    var i = Vr(this, e), s = (this.style.removeProperty(e), Vr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function dc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Vr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function mv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Vr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Vr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function yv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = mn(this, e), u = l.on, d = l.value[i] == null ? a || (a = dc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function wv(e, t, n) {
  var r = (e += "") == "transform" ? b1 : cc;
  return t == null ? this.styleTween(e, hv(e, r)).on("end.style." + e, dc(e)) : typeof t == "function" ? this.styleTween(e, mv(e, r, la(this, "style." + e, t))).each(yv(this._id, e)) : this.styleTween(e, vv(e, r, t), n).on("end.style." + e, null);
}
function bv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function xv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && bv(e, s, n)), r;
  }
  return i._value = t, i;
}
function $v(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, xv(e, t, n ?? ""));
}
function kv(e) {
  return function() {
    this.textContent = e;
  };
}
function Cv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function _v(e) {
  return this.tween("text", typeof e == "function" ? Cv(la(this, "text", e)) : kv(e == null ? "" : e + ""));
}
function Sv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ev(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Sv(o)), t;
  }
  return r._value = e, r;
}
function Pv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Ev(e));
}
function Lv() {
  for (var e = this._name, t = this._id, n = fc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Gt(l, t);
        Vi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Nn(r, this._parents, e, n);
}
function Ov() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = mn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var Dv = 0;
function Nn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function fc() {
  return ++Dv;
}
var xn = Po.prototype;
Nn.prototype = {
  constructor: Nn,
  select: dv,
  selectAll: fv,
  selectChild: xn.selectChild,
  selectChildren: xn.selectChildren,
  filter: ov,
  merge: iv,
  selection: gv,
  transition: Lv,
  call: xn.call,
  nodes: xn.nodes,
  node: xn.node,
  size: xn.size,
  empty: xn.empty,
  each: xn.each,
  on: lv,
  attr: q1,
  attrTween: Y1,
  style: wv,
  styleTween: $v,
  text: _v,
  textTween: Pv,
  remove: cv,
  tween: M1,
  delay: U1,
  duration: Q1,
  ease: tv,
  easeVarying: rv,
  end: Ov,
  [Symbol.iterator]: xn[Symbol.iterator]
};
function Nv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Vv = {
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
function Mv(e) {
  var t, n;
  e instanceof Nn ? (t = e._id, e = e._name) : (t = fc(), (n = Vv).time = sa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Vi(l, e, t, u, s, n || Tv(l, t));
  return new Nn(r, this._parents, e, t);
}
Po.prototype.interrupt = N1;
Po.prototype.transition = Mv;
const jo = (e) => () => e;
function zv(e, {
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
function kn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
kn.prototype = {
  constructor: kn,
  scale: function(e) {
    return e === 1 ? this : new kn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new kn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Ti = new kn(1, 0, 0);
pc.prototype = kn.prototype;
function pc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Ti;
  return e.__zoom;
}
function Ui(e) {
  e.stopImmediatePropagation();
}
function Ur(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Av(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Hv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function fl() {
  return this.__zoom || Ti;
}
function Iv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Rv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function gc() {
  var e = Av, t = Hv, n = Bv, r = Iv, o = Rv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Go, u = Oi("start", "zoom", "end"), d, p, f, g = 500, h = 150, w = 0, C = 10;
  function b(v) {
    v.property("__zoom", fl).on("wheel.zoom", q, { passive: !1 }).on("mousedown.zoom", Q).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", O).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(v, P, L, T) {
    var R = v.selection ? v.selection() : v;
    R.property("__zoom", fl), v !== R ? k(v, P, L, T) : R.interrupt().each(function() {
      D(this, arguments).event(T).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, b.scaleBy = function(v, P, L, T) {
    b.scaleTo(v, function() {
      var R = this.__zoom.k, N = typeof P == "function" ? P.apply(this, arguments) : P;
      return R * N;
    }, L, T);
  }, b.scaleTo = function(v, P, L, T) {
    b.transform(v, function() {
      var R = t.apply(this, arguments), N = this.__zoom, Z = L == null ? $(R) : typeof L == "function" ? L.apply(this, arguments) : L, X = N.invert(Z), G = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(E(N, G), Z, X), R, s);
    }, L, T);
  }, b.translateBy = function(v, P, L, T) {
    b.transform(v, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof L == "function" ? L.apply(this, arguments) : L
      ), t.apply(this, arguments), s);
    }, null, T);
  }, b.translateTo = function(v, P, L, T, R) {
    b.transform(v, function() {
      var N = t.apply(this, arguments), Z = this.__zoom, X = T == null ? $(N) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Ti.translate(X[0], X[1]).scale(Z.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof L == "function" ? -L.apply(this, arguments) : -L
      ), N, s);
    }, T, R);
  };
  function E(v, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === v.k ? v : new kn(P, v.x, v.y);
  }
  function x(v, P, L) {
    var T = P[0] - L[0] * v.k, R = P[1] - L[1] * v.k;
    return T === v.x && R === v.y ? v : new kn(v.k, T, R);
  }
  function $(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function k(v, P, L, T) {
    v.on("start.zoom", function() {
      D(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      D(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var R = this, N = arguments, Z = D(R, N).event(T), X = t.apply(R, N), G = L == null ? $(X) : typeof L == "function" ? L.apply(R, N) : L, ae = Math.max(X[1][0] - X[0][0], X[1][1] - X[0][1]), Y = R.__zoom, J = typeof P == "function" ? P.apply(R, N) : P, U = l(Y.invert(G).concat(ae / Y.k), J.invert(G).concat(ae / J.k));
      return function(te) {
        if (te === 1) te = J;
        else {
          var F = U(te), ye = ae / F[2];
          te = new kn(ye, G[0] - F[0] * ye, G[1] - F[1] * ye);
        }
        Z.zoom(null, te);
      };
    });
  }
  function D(v, P, L) {
    return !L && v.__zooming || new A(v, P);
  }
  function A(v, P) {
    this.that = v, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(v, P), this.taps = 0;
  }
  A.prototype = {
    event: function(v) {
      return v && (this.sourceEvent = v), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(v, P) {
      return this.mouse && v !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && v !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && v !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(v) {
      var P = Kt(this.that).datum();
      u.call(
        v,
        this.that,
        new zv(v, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function q(v, ...P) {
    if (!e.apply(this, arguments)) return;
    var L = D(this, P).event(v), T = this.__zoom, R = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), N = Yt(v);
    if (L.wheel)
      (L.mouse[0][0] !== N[0] || L.mouse[0][1] !== N[1]) && (L.mouse[1] = T.invert(L.mouse[0] = N)), clearTimeout(L.wheel);
    else {
      if (T.k === R) return;
      L.mouse = [N, T.invert(N)], ti(this), L.start();
    }
    Ur(v), L.wheel = setTimeout(Z, h), L.zoom("mouse", n(x(E(T, R), L.mouse[0], L.mouse[1]), L.extent, s));
    function Z() {
      L.wheel = null, L.end();
    }
  }
  function Q(v, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var L = v.currentTarget, T = D(this, P, !0).event(v), R = Kt(v.view).on("mousemove.zoom", G, !0).on("mouseup.zoom", ae, !0), N = Yt(v, L), Z = v.clientX, X = v.clientY;
    Ju(v.view), Ui(v), T.mouse = [N, this.__zoom.invert(N)], ti(this), T.start();
    function G(Y) {
      if (Ur(Y), !T.moved) {
        var J = Y.clientX - Z, U = Y.clientY - X;
        T.moved = J * J + U * U > w;
      }
      T.event(Y).zoom("mouse", n(x(T.that.__zoom, T.mouse[0] = Yt(Y, L), T.mouse[1]), T.extent, s));
    }
    function ae(Y) {
      R.on("mousemove.zoom mouseup.zoom", null), Gu(Y.view, T.moved), Ur(Y), T.event(Y).end();
    }
  }
  function j(v, ...P) {
    if (e.apply(this, arguments)) {
      var L = this.__zoom, T = Yt(v.changedTouches ? v.changedTouches[0] : v, this), R = L.invert(T), N = L.k * (v.shiftKey ? 0.5 : 2), Z = n(x(E(L, N), T, R), t.apply(this, P), s);
      Ur(v), a > 0 ? Kt(this).transition().duration(a).call(k, Z, T, v) : Kt(this).call(b.transform, Z, T, v);
    }
  }
  function O(v, ...P) {
    if (e.apply(this, arguments)) {
      var L = v.touches, T = L.length, R = D(this, P, v.changedTouches.length === T).event(v), N, Z, X, G;
      for (Ui(v), Z = 0; Z < T; ++Z)
        X = L[Z], G = Yt(X, this), G = [G, this.__zoom.invert(G), X.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== G[2] && (R.touch1 = G, R.taps = 0) : (R.touch0 = G, N = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), N && (R.taps < 2 && (p = G[0], d = setTimeout(function() {
        d = null;
      }, g)), ti(this), R.start());
    }
  }
  function _(v, ...P) {
    if (this.__zooming) {
      var L = D(this, P).event(v), T = v.changedTouches, R = T.length, N, Z, X, G;
      for (Ur(v), N = 0; N < R; ++N)
        Z = T[N], X = Yt(Z, this), L.touch0 && L.touch0[2] === Z.identifier ? L.touch0[0] = X : L.touch1 && L.touch1[2] === Z.identifier && (L.touch1[0] = X);
      if (Z = L.that.__zoom, L.touch1) {
        var ae = L.touch0[0], Y = L.touch0[1], J = L.touch1[0], U = L.touch1[1], te = (te = J[0] - ae[0]) * te + (te = J[1] - ae[1]) * te, F = (F = U[0] - Y[0]) * F + (F = U[1] - Y[1]) * F;
        Z = E(Z, Math.sqrt(te / F)), X = [(ae[0] + J[0]) / 2, (ae[1] + J[1]) / 2], G = [(Y[0] + U[0]) / 2, (Y[1] + U[1]) / 2];
      } else if (L.touch0) X = L.touch0[0], G = L.touch0[1];
      else return;
      L.zoom("touch", n(x(Z, X, G), L.extent, s));
    }
  }
  function H(v, ...P) {
    if (this.__zooming) {
      var L = D(this, P).event(v), T = v.changedTouches, R = T.length, N, Z;
      for (Ui(v), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), N = 0; N < R; ++N)
        Z = T[N], L.touch0 && L.touch0[2] === Z.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === Z.identifier && delete L.touch1;
      if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0) L.touch0[1] = this.__zoom.invert(L.touch0[0]);
      else if (L.end(), L.taps === 2 && (Z = Yt(Z, this), Math.hypot(p[0] - Z[0], p[1] - Z[1]) < C)) {
        var X = Kt(this).on("dblclick.zoom");
        X && X.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : jo(+v), b) : r;
  }, b.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : jo(!!v), b) : e;
  }, b.touchable = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : jo(!!v), b) : o;
  }, b.extent = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : jo([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), b) : t;
  }, b.scaleExtent = function(v) {
    return arguments.length ? (i[0] = +v[0], i[1] = +v[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(v) {
    return arguments.length ? (s[0][0] = +v[0][0], s[1][0] = +v[1][0], s[0][1] = +v[0][1], s[1][1] = +v[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(v) {
    return arguments.length ? (n = v, b) : n;
  }, b.duration = function(v) {
    return arguments.length ? (a = +v, b) : a;
  }, b.interpolate = function(v) {
    return arguments.length ? (l = v, b) : l;
  }, b.on = function() {
    var v = u.on.apply(u, arguments);
    return v === u ? b : v;
  }, b.clickDistance = function(v) {
    return arguments.length ? (w = (v = +v) * v, b) : Math.sqrt(w);
  }, b.tapDistance = function(v) {
    return arguments.length ? (C = +v, b) : C;
  }, b;
}
const go = {
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
}, $s = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], hc = ["Enter", " ", "Escape"], qv = {
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
var Mr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Mr || (Mr = {}));
var cn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cn || (cn = {}));
var hi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hi || (hi = {}));
const ks = {
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
var $n;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})($n || ($n = {}));
var ho;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ho || (ho = {}));
var xe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(xe || (xe = {}));
const pl = {
  [xe.Left]: xe.Right,
  [xe.Right]: xe.Left,
  [xe.Top]: xe.Bottom,
  [xe.Bottom]: xe.Top
};
function Zv(e, t) {
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
function gl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Kv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const vc = (e) => "id" in e && "source" in e && "target" in e, jv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ua = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Oo = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Wv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ua(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? vi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Mi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return zi(n);
}, Do = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = vi(r);
      n = Mi(n, o);
    }
  }), zi(n);
}, ca = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...No(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, w = vo(a, Ar(u)), C = (g ?? 0) * (h ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= C || u.dragging) && l.push(u);
  }
  return l;
}, Yv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Fv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Xv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Fv(e, s), l = Do(a), u = da(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function mc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", go.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && Hr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Hr(p) ? fr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", go.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Uv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Yv(s, l);
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
const zr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: zr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: zr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function yc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const hl = (e, t, n) => e < t ? zr(Math.abs(e - t), 1, t) / t : e > n ? -zr(Math.abs(e - n), 1, t) / t : 0, wc = (e, t, n = 15, r = 40) => {
  const o = hl(e.x, r, t.width - r) * n, i = hl(e.y, r, t.height - r) * n;
  return [o, i];
}, Mi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Cs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Ar = (e, t = [0, 0]) => {
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, vi = (e, t = [0, 0]) => {
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : Oo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, bc = (e, t) => zi(Mi(Cs(e), Cs(t))), vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, vl = (e) => Cn(e.width) && Cn(e.height) && Cn(e.x) && Cn(e.y), Cn = (e) => !isNaN(e) && isFinite(e), Jv = (e, t) => {
}, Ai = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), No = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Ai(a, s) : a;
}, mi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function $r(e, t) {
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
function Gv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = $r(e, n), o = $r(e, t);
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
    const r = $r(e.top ?? e.y ?? 0, n), o = $r(e.bottom ?? e.y ?? 0, n), i = $r(e.left ?? e.x ?? 0, t), s = $r(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Qv(e, t, n, r, o, i) {
  const { x: s, y: a } = mi(e, [t, n, r]), { x: l, y: u } = mi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const da = (e, t, n, r, o, i) => {
  const s = Gv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = zr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, w = Qv(e, g, h, d, t, n), C = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: g - C.left + C.right,
    y: h - C.top + C.bottom,
    zoom: d
  };
}, kr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Hr(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function xc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function e0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function t0(e) {
  return { ...qv, ...e || {} };
}
function Ji(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = sn(e), a = No({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Ai(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const $c = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), kc = (e) => e?.getRootNode?.() || window?.document, n0 = ["INPUT", "SELECT", "TEXTAREA"];
function Cc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : n0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const _c = (e) => "clientX" in e, sn = (e, t) => {
  const n = _c(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ml = (e, t, n, r, o) => {
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
      ...$c(s)
    };
  });
};
function r0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function Wo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function yl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case xe.Left:
      return [t - Wo(t - r, i), n];
    case xe.Right:
      return [t + Wo(r - t, i), n];
    case xe.Top:
      return [t, n - Wo(n - o, i)];
    case xe.Bottom:
      return [t, n + Wo(o - n, i)];
  }
}
function Sc({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, curvature: s = 0.25 }) {
  const [a, l] = yl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = yl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = r0({
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
function Ec({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function o0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function i0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Mi(vi(e), vi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return vo(s, zi(i)) > 0;
}
const s0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, a0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), l0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return vc(e) ? n = { ...e } : n = {
    ...e,
    id: s0(e)
  }, a0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Pc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Ec({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const wl = {
  [xe.Left]: { x: -1, y: 0 },
  [xe.Right]: { x: 1, y: 0 },
  [xe.Top]: { x: 0, y: -1 },
  [xe.Bottom]: { x: 0, y: 1 }
}, u0 = ({ source: e, sourcePosition: t = xe.Bottom, target: n }) => t === xe.Left || t === xe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, bl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function c0({ source: e, sourcePosition: t = xe.Bottom, target: n, targetPosition: r = xe.Top, center: o, offset: i, stepPosition: s }) {
  const a = wl[t], l = wl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = u0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], w, C;
  const b = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [, , x, $] = Ec({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (w = o.x ?? u.x + (d.x - u.x) * s, C = o.y ?? (u.y + d.y) / 2) : (w = o.x ?? (u.x + d.x) / 2, C = o.y ?? u.y + (d.y - u.y) * s);
    const k = [
      { x: w, y: u.y },
      { x: w, y: d.y }
    ], D = [
      { x: u.x, y: C },
      { x: d.x, y: C }
    ];
    a[f] === g ? h = f === "x" ? k : D : h = f === "x" ? D : k;
  } else {
    const k = [{ x: u.x, y: d.y }], D = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? D : k : h = a.y === g ? k : D, t === r) {
      const O = Math.abs(e[f] - n[f]);
      if (O <= i) {
        const _ = Math.min(i - 1, i - O);
        a[f] === g ? b[f] = (u[f] > e[f] ? -1 : 1) * _ : E[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const O = f === "x" ? "y" : "x", _ = a[f] === l[O], H = u[O] > d[O], v = u[O] < d[O];
      (a[f] === 1 && (!_ && H || _ && v) || a[f] !== 1 && (!_ && v || _ && H)) && (h = f === "x" ? k : D);
    }
    const A = { x: u.x + b.x, y: u.y + b.y }, q = { x: d.x + E.x, y: d.y + E.y }, Q = Math.max(Math.abs(A.x - h[0].x), Math.abs(q.x - h[0].x)), j = Math.max(Math.abs(A.y - h[0].y), Math.abs(q.y - h[0].y));
    Q >= j ? (w = (A.x + q.x) / 2, C = h[0].y) : (w = h[0].x, C = (A.y + q.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...h,
    { x: d.x + E.x, y: d.y + E.y },
    n
  ], w, C, x, $];
}
function d0(e, t, n, r) {
  const o = Math.min(bl(e, t) / 2, bl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function fa({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, w] = c0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((C, b, E) => {
    let x = "";
    return E > 0 && E < p.length - 1 ? x = d0(p[E - 1], b, p[E + 1], s) : x = `${E === 0 ? "M" : "L"}${b.x} ${b.y}`, C += x, C;
  }, ""), f, g, h, w];
}
function xl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function f0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!xl(t) || !xl(n))
    return null;
  const r = t.internals.handleBounds || $l(t.handles), o = n.internals.handleBounds || $l(n.handles), i = kl(r?.source ?? [], e.sourceHandle), s = kl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Mr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", go.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || xe.Bottom, l = s?.position || xe.Top, u = mo(t, i, a), d = mo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function $l(e) {
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
function mo(e, t, n = xe.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? er(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case xe.Top:
      return { x: o + s / 2, y: i };
    case xe.Right:
      return { x: o + s, y: i + a / 2 };
    case xe.Bottom:
      return { x: o + s / 2, y: i + a };
    case xe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function kl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _s(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function p0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = _s(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function g0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case xe.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case xe.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case xe.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const pa = {
  nodeOrigin: [0, 0],
  nodeExtent: $s,
  elevateNodesOnSelect: !0,
  defaults: {}
}, h0 = {
  ...pa,
  checkEquality: !0
};
function ga(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function v0(e, t, n) {
  const r = ga(pa, n);
  for (const o of e.values())
    if (o.parentId)
      ha(o, e, t, r);
    else {
      const i = Oo(o, r.nodeOrigin), s = Hr(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, er(o));
      o.internals.positionAbsolute = a;
    }
}
function m0(e, t, n, r) {
  const o = ga(h0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let u = s.get(l.id);
    if (o.checkEquality && l === u?.internals.userNode)
      t.set(l.id, u);
    else {
      const d = Oo(l, o.nodeOrigin), p = Hr(l.extent) ? l.extent : o.nodeExtent, f = fr(d, p, er(l));
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
          z: Lc(l, a),
          userNode: l
        }
      }, t.set(l.id, u);
    }
    (u.measured === void 0 || u.measured.width === void 0 || u.measured.height === void 0) && !u.hidden && (i = !1), l.parentId && ha(u, t, n, r);
  }
  return i;
}
function y0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ha(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ga(pa, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  y0(e, n);
  const u = o ? 1e3 : 0, { x: d, y: p, z: f } = w0(e, l, i, s, u), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function Lc(e, t) {
  return (Cn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function w0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = er(e), l = Oo(e, n), u = Hr(e.extent) ? fr(l, e.extent, a) : l;
  let d = fr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = yc(d, a, t));
  const p = Lc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function b0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Ar(a), u = bc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = er(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), C = (h - d.width) * p[0], b = (w - d.height) * p[1];
    (f > 0 || g > 0 || C || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + C,
        y: a.position.y - g + b
      }
    }), n.get(l)?.forEach((E) => {
      e.some((x) => x.id === E.id) || o.push({
        id: E.id,
        type: "position",
        position: {
          x: E.position.x + f,
          y: E.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - C : 0),
        height: w + (g ? p[1] * g - b : 0)
      }
    });
  }), o;
}
function x0(e, t, n, r, o, i) {
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
    const h = $c(f.nodeElement), w = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (w || !g.internals.handleBounds || f.force)) {
      const C = f.nodeElement.getBoundingClientRect(), b = Hr(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = yc(E, h, t.get(g.parentId)) : b && (E = fr(E, b, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: ml("source", f.nodeElement, C, d, g.id),
            target: ml("target", f.nodeElement, C, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && ha(x, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
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
    const f = b0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function $0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Cl(e, t, n, r, o, i) {
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
function k0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Cl("source", l, d, e, o, s), Cl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function C0(e, t) {
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
function _0(e, t, n, r) {
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
function Gi({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function S0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function w({ noDragClassName: b, handleSelector: E, domNode: x, isSelectable: $, nodeId: k, nodeClickDistance: D = 0 }) {
    f = Kt(x);
    function A({ x: O, y: _ }, H) {
      const { nodeLookup: v, nodeExtent: P, snapGrid: L, snapToGrid: T, nodeOrigin: R, onNodeDrag: N, onSelectionDrag: Z, onError: X, updateNodePositions: G } = t();
      i = { x: O, y: _ };
      let ae = !1, Y = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const J = Do(a);
        Y = Cs(J);
      }
      for (const [J, U] of a) {
        if (!v.has(J))
          continue;
        let te = { x: O - U.distance.x, y: _ - U.distance.y };
        T && (te = Ai(te, L));
        let F = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !U.extent) {
          const { positionAbsolute: ie } = U.internals, re = ie.x - Y.x + P[0][0], ce = ie.x + U.measured.width - Y.x2 + P[1][0], oe = ie.y - Y.y + P[0][1], ve = ie.y + U.measured.height - Y.y2 + P[1][1];
          F = [
            [re, oe],
            [ce, ve]
          ];
        }
        const { position: ye, positionAbsolute: ue } = mc({
          nodeId: J,
          nextPosition: te,
          nodeLookup: v,
          nodeExtent: F,
          nodeOrigin: R,
          onError: X
        });
        ae = ae || U.position.x !== ye.x || U.position.y !== ye.y, U.position = ye, U.internals.positionAbsolute = ue;
      }
      if (h = h || ae, !!ae && (G(a, !0), H && (r || N || !k && Z))) {
        const [J, U] = Gi({
          nodeId: k,
          dragItems: a,
          nodeLookup: v
        });
        r?.(H, a, J, U), N?.(H, J, U), k || Z?.(H, U);
      }
    }
    async function q() {
      if (!d)
        return;
      const { transform: O, panBy: _, autoPanSpeed: H, autoPanOnNodeDrag: v } = t();
      if (!v) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, L] = wc(u, d, H);
      (P !== 0 || L !== 0) && (i.x = (i.x ?? 0) - P / O[2], i.y = (i.y ?? 0) - L / O[2], await _({ x: P, y: L }) && A(i, null)), s = requestAnimationFrame(q);
    }
    function Q(O) {
      const { nodeLookup: _, multiSelectionActive: H, nodesDraggable: v, transform: P, snapGrid: L, snapToGrid: T, selectNodesOnDrag: R, onNodeDragStart: N, onSelectionDragStart: Z, unselectNodesAndEdges: X } = t();
      p = !0, (!R || !$) && !H && k && (_.get(k)?.selected || X()), $ && R && k && e?.(k);
      const G = Ji(O.sourceEvent, { transform: P, snapGrid: L, snapToGrid: T, containerBounds: d });
      if (i = G, a = _0(_, v, G, k), a.size > 0 && (n || N || !k && Z)) {
        const [ae, Y] = Gi({
          nodeId: k,
          dragItems: a,
          nodeLookup: _
        });
        n?.(O.sourceEvent, a, ae, Y), N?.(O.sourceEvent, ae, Y), k || Z?.(O.sourceEvent, Y);
      }
    }
    const j = Xh().clickDistance(D).on("start", (O) => {
      const { domNode: _, nodeDragThreshold: H, transform: v, snapGrid: P, snapToGrid: L } = t();
      d = _?.getBoundingClientRect() || null, g = !1, h = !1, H === 0 && Q(O), i = Ji(O.sourceEvent, { transform: v, snapGrid: P, snapToGrid: L, containerBounds: d }), u = sn(O.sourceEvent, d);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: _, transform: H, snapGrid: v, snapToGrid: P, nodeDragThreshold: L, nodeLookup: T } = t(), R = Ji(O.sourceEvent, { transform: H, snapGrid: v, snapToGrid: P, containerBounds: d });
      if ((O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !T.has(k)) && (g = !0), !g) {
        if (!l && _ && p && (l = !0, q()), !p) {
          const N = R.xSnapped - (i.x ?? 0), Z = R.ySnapped - (i.y ?? 0);
          Math.sqrt(N * N + Z * Z) > L && Q(O);
        }
        (i.x !== R.xSnapped || i.y !== R.ySnapped) && a && p && (u = sn(O.sourceEvent, d), A(R, O.sourceEvent));
      }
    }).on("end", (O) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: _, updateNodePositions: H, onNodeDragStop: v, onSelectionDragStop: P } = t();
        if (h && (H(a, !1), h = !1), o || v || !k && P) {
          const [L, T] = Gi({
            nodeId: k,
            dragItems: a,
            nodeLookup: _,
            dragging: !1
          });
          o?.(O.sourceEvent, a, L, T), v?.(O.sourceEvent, L, T), k || P?.(O.sourceEvent, T);
        }
      }
    }).filter((O) => {
      const _ = O.target;
      return !O.button && (!b || !_l(_, `.${b}`, x)) && (!E || _l(_, E, x));
    });
    f.call(j);
  }
  function C() {
    f?.on(".drag", null);
  }
  return {
    update: w,
    destroy: C
  };
}
function E0(e, t, n) {
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
const P0 = 250;
function L0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = E0(e, n, t + P0);
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
function Nc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function O0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Vc = () => !0;
function D0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: w, onConnectEnd: C, isValidConnection: b = Vc, onReconnectEnd: E, updateConnection: x, getTransform: $, getFromHandle: k, autoPanSpeed: D, dragThreshold: A = 1 }) {
  const q = kc(e.target);
  let Q = 0, j;
  const { x: O, y: _ } = sn(e), H = q?.elementFromPoint(O, _), v = Nc(i, H), P = a?.getBoundingClientRect();
  let L = !1;
  if (!P || !v)
    return;
  const T = Dc(o, v, r, l, t);
  if (!T)
    return;
  let R = sn(e, P), N = !1, Z = null, X = !1, G = null;
  function ae() {
    if (!d || !P)
      return;
    const [ue, ie] = wc(R, P, D);
    f({ x: ue, y: ie }), Q = requestAnimationFrame(ae);
  }
  const Y = {
    ...T,
    nodeId: o,
    type: v,
    position: T.position
  }, J = l.get(o);
  let U = {
    inProgress: !0,
    isValid: null,
    from: mo(J, Y, xe.Left, !0),
    fromHandle: Y,
    fromPosition: Y.position,
    fromNode: J,
    to: R,
    toHandle: null,
    toPosition: pl[Y.position],
    toNode: null
  };
  function te() {
    L = !0, x(U), h?.(e, { nodeId: o, handleId: r, handleType: v });
  }
  A === 0 && te();
  function F(ue) {
    if (!L) {
      const { x: oe, y: ve } = sn(ue), se = oe - O, _e = ve - _;
      if (!(se * se + _e * _e > A * A))
        return;
      te();
    }
    if (!k() || !Y) {
      ye(ue);
      return;
    }
    const ie = $();
    R = sn(ue, P), j = L0(No(R, ie, !1, [1, 1]), n, l, Y), N || (ae(), N = !0);
    const re = Tc(ue, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: q,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    G = re.handleDomNode, Z = re.connection, X = O0(!!j, re.isValid);
    const ce = {
      // from stays the same
      ...U,
      isValid: X,
      to: re.toHandle && X ? mi({ x: re.toHandle.x, y: re.toHandle.y }, ie) : R,
      toHandle: re.toHandle,
      toPosition: X && re.toHandle ? re.toHandle.position : pl[Y.position],
      toNode: re.toHandle ? l.get(re.toHandle.nodeId) : null
    };
    X && j && U.toHandle && ce.toHandle && U.toHandle.type === ce.toHandle.type && U.toHandle.nodeId === ce.toHandle.nodeId && U.toHandle.id === ce.toHandle.id && U.to.x === ce.to.x && U.to.y === ce.to.y || (x(ce), U = ce);
  }
  function ye(ue) {
    if (L) {
      (j || G) && Z && X && w?.(Z);
      const { inProgress: ie, ...re } = U, ce = {
        ...re,
        toPosition: U.toHandle ? U.toPosition : null
      };
      C?.(ue, ce), i && E?.(ue, ce);
    }
    g(), cancelAnimationFrame(Q), N = !1, X = !1, Z = null, G = null, q.removeEventListener("mousemove", F), q.removeEventListener("mouseup", ye), q.removeEventListener("touchmove", F), q.removeEventListener("touchend", ye);
  }
  q.addEventListener("mousemove", F), q.addEventListener("mouseup", ye), q.addEventListener("touchmove", F), q.addEventListener("touchend", ye);
}
function Tc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Vc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = sn(e), w = s.elementFromPoint(g, h), C = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const E = Nc(void 0, C), x = C.getAttribute("data-nodeid"), $ = C.getAttribute("data-handleid"), k = C.classList.contains("connectable"), D = C.classList.contains("connectableend");
    if (!x || !E)
      return b;
    const A = {
      source: p ? x : r,
      sourceHandle: p ? $ : o,
      target: p ? r : x,
      targetHandle: p ? o : $
    };
    b.connection = A;
    const q = k && D && (n === Mr.Strict ? p && E === "source" || !p && E === "target" : x !== r || $ !== o);
    b.isValid = q && u(A), b.toHandle = Dc(x, E, $, d, n, !0);
  }
  return b;
}
const Sl = {
  onPointerDown: D0,
  isValid: Tc
};
function N0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Kt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, D = $[2] * Math.pow(2, k);
      t.scaleTo(D);
    };
    let w = [0, 0];
    const C = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (w = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, b = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], D = [k[0] - w[0], k[1] - w[1]];
      w = k;
      const A = r() * Math.max($[2], Math.log($[2])) * (g ? -1 : 1), q = {
        x: $[0] - D[0] * A,
        y: $[1] - D[1] * A
      }, Q = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: q.x,
        y: q.y,
        zoom: $[2]
      }, Q, a);
    }, E = gc().on("start", C).on("zoom", p ? b : null).on("zoom.wheel", f ? h : null);
    o.call(E, {});
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
const V0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Hi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Qi = ({ x: e, y: t, zoom: n }) => Ti.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Mc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), T0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, es = (e, t = 0, n = T0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, zc = (e) => {
  const t = e.ctrlKey && kr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function M0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Cr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const C = Yt(d), b = zc(d), E = p * Math.pow(2, b);
      r.scaleTo(n, E, C, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === cn.Vertical ? 0 : d.deltaX * f, h = o === cn.Horizontal ? 0 : d.deltaY * f;
    !kr() && d.shiftKey && o !== cn.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = Hi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, w)), e.isPanScrolling && (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      u?.(d, w), e.isPanScrolling = !1;
    }, 150));
  };
}
function z0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Cr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function A0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Hi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function H0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Mc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Hi(i.transform));
  };
}
function I0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Mc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && V0(e.prevViewport, s.transform))) {
      const a = Hi(s.transform);
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
function R0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (Cr(d, `${u}-flow__node`) || Cr(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || Cr(d, a) && d.type === "wheel" || Cr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function B0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = gc().clickDistance(!Cn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Kt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: zr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), w = g.on("dblclick.zoom");
  f.wheelDelta(zc);
  function C(_, H) {
    return g ? new Promise((v) => {
      f?.interpolate(H?.interpolate === "linear" ? no : Go).transform(es(g, H?.duration, H?.ease, () => v(!0)), _);
    }) : Promise.resolve(!1);
  }
  function b({ noWheelClassName: _, noPanClassName: H, onPaneContextMenu: v, userSelectionActive: P, panOnScroll: L, panOnDrag: T, panOnScrollMode: R, panOnScrollSpeed: N, preventScrolling: Z, zoomOnPinch: X, zoomOnScroll: G, zoomOnDoubleClick: ae, zoomActivationKeyPressed: Y, lib: J, onTransformChange: U }) {
    P && !d.isZoomingOrPanning && E();
    const te = L && !Y && !P ? M0({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: R,
      panOnScrollSpeed: N,
      zoomOnPinch: X,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : z0({
      noWheelClassName: _,
      preventScrolling: Z,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", te, { passive: !1 }), !P) {
      const ye = A0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ye);
      const ue = H0({
        zoomPanValues: d,
        panOnDrag: T,
        onPaneContextMenu: !!v,
        onPanZoom: s,
        onTransformChange: U
      });
      f.on("zoom", ue);
      const ie = I0({
        zoomPanValues: d,
        panOnDrag: T,
        panOnScroll: L,
        onPaneContextMenu: v,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ie);
    }
    const F = R0({
      zoomActivationKeyPressed: Y,
      panOnDrag: T,
      zoomOnScroll: G,
      panOnScroll: L,
      zoomOnDoubleClick: ae,
      zoomOnPinch: X,
      userSelectionActive: P,
      noPanClassName: H,
      noWheelClassName: _,
      lib: J
    });
    f.filter(F), ae ? g.on("dblclick.zoom", w) : g.on("dblclick.zoom", null);
  }
  function E() {
    f.on("zoom", null);
  }
  async function x(_, H, v) {
    const P = Qi(_), L = f?.constrain()(P, H, v);
    return L && await C(L), new Promise((T) => T(L));
  }
  async function $(_, H) {
    const v = Qi(_);
    return await C(v, H), new Promise((P) => P(v));
  }
  function k(_) {
    if (g) {
      const H = Qi(_), v = g.property("__zoom");
      (v.k !== _.zoom || v.x !== _.x || v.y !== _.y) && f?.transform(g, H, null, { sync: !0 });
    }
  }
  function D() {
    const _ = g ? pc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function A(_, H) {
    return g ? new Promise((v) => {
      f?.interpolate(H?.interpolate === "linear" ? no : Go).scaleTo(es(g, H?.duration, H?.ease, () => v(!0)), _);
    }) : Promise.resolve(!1);
  }
  function q(_, H) {
    return g ? new Promise((v) => {
      f?.interpolate(H?.interpolate === "linear" ? no : Go).scaleBy(es(g, H?.duration, H?.ease, () => v(!0)), _);
    }) : Promise.resolve(!1);
  }
  function Q(_) {
    f?.scaleExtent(_);
  }
  function j(_) {
    f?.translateExtent(_);
  }
  function O(_) {
    const H = !Cn(_) || _ < 0 ? 0 : _;
    f?.clickDistance(H);
  }
  return {
    update: b,
    destroy: E,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: D,
    scaleTo: A,
    scaleBy: q,
    setScaleExtent: Q,
    setTranslateExtent: j,
    syncViewport: k,
    setClickDistance: O
  };
}
var El;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(El || (El = {}));
var q0 = /* @__PURE__ */ ee("<div><!></div>");
function Xn(e, t) {
  pe(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => xe.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), u = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), p = y(t, "onconnect", 7), f = y(t, "ondisconnect", 7), g = y(t, "children", 7), h = /* @__PURE__ */ Ze(t, [
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
  const w = jn("svelteflow__node_id"), C = jn("svelteflow__node_connectable");
  let b = /* @__PURE__ */ S(() => r() === "target"), E = /* @__PURE__ */ S(() => a() !== void 0 ? a() : C.value), x = Qt(), $ = /* @__PURE__ */ S(() => x.ariaLabelConfig), k = null;
  pu(() => {
    if (p() || f()) {
      x.edges;
      let N = x.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Zv(N, k)) {
        const Z = N ?? /* @__PURE__ */ new Map();
        gl(k, Z, f()), gl(Z, k, p());
      }
      k = new Map(N);
    }
  });
  let D = /* @__PURE__ */ S(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: N, toHandle: Z, isValid: X } = x.connection, G = N && N.nodeId === w && N.type === r() && N.id === n(), ae = Z && Z.nodeId === w && Z.type === r() && Z.id === n(), Y = x.connectionMode === Mr.Strict ? N?.type !== r() : w !== N?.nodeId || n() !== N?.id;
    return [
      !0,
      G,
      ae,
      Y,
      ae && X
    ];
  }), A = /* @__PURE__ */ S(() => $o(c(D), 5)), q = /* @__PURE__ */ S(() => c(A)[0]), Q = /* @__PURE__ */ S(() => c(A)[1]), j = /* @__PURE__ */ S(() => c(A)[2]), O = /* @__PURE__ */ S(() => c(A)[3]), _ = /* @__PURE__ */ S(() => c(A)[4]);
  function H(N) {
    const Z = x.onbeforeconnect?.(N) ?? N;
    Z && (x.addEdge(Z), x.onconnect?.(N));
  }
  function v(N) {
    const Z = _c(N);
    (Z && N.button === 0 || !Z) && Sl.onPointerDown(N, {
      handleId: n(),
      nodeId: w,
      isTarget: c(b),
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
      onConnect: H,
      onConnectStart: (X, G) => {
        x.onconnectstart?.(X, {
          nodeId: G.nodeId,
          handleId: G.handleId,
          handleType: G.handleType
        });
      },
      onConnectEnd: (X, G) => {
        x.onconnectend?.(X, G);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function P(N) {
    if (!w || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(N, { nodeId: w, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const Z = kc(N.target), X = d() ?? x.isValidConnection, { connectionMode: G, clickConnectStartHandle: ae, flowId: Y, nodeLookup: J } = x, { connection: U, isValid: te } = Sl.isValid(N, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: G,
      fromNodeId: ae.nodeId,
      fromHandleId: ae.id ?? null,
      fromType: ae.type,
      isValidConnection: X,
      flowId: Y,
      doc: Z,
      lib: "svelte",
      nodeLookup: J
    });
    te && U && H(U);
    const F = structuredClone(eu(x.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, x.onclickconnectend?.(N, F), x.clickConnectStartHandle = null;
  }
  var L = q0(), T = () => {
  };
  ut(
    L,
    (N) => ({
      "data-handleid": n(),
      "data-nodeid": w,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${w ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: v,
      ontouchstart: v,
      onclick: x.clickConnect ? P : void 0,
      onkeypress: T,
      style: i(),
      role: "button",
      "aria-label": c($)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Bn]: N
    }),
    [
      () => ({
        valid: c(_),
        connectingto: c(j),
        connectingfrom: c(Q),
        source: !c(b),
        target: c(b),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(E),
        connectionindicator: c(E) && (!c(q) || c(O)) && (c(q) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var R = B(L);
  return rt(R, () => g() ?? pt), I(L), V(e, L), ge({
    get id() {
      return n();
    },
    set id(N = null) {
      n(N), m();
    },
    get type() {
      return r();
    },
    set type(N = "source") {
      r(N), m();
    },
    get position() {
      return o();
    },
    set position(N = xe.Top) {
      o(N), m();
    },
    get style() {
      return i();
    },
    set style(N) {
      i(N), m();
    },
    get class() {
      return s();
    },
    set class(N) {
      s(N), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(N) {
      a(N), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(N = !0) {
      l(N), m();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(N = !0) {
      u(N), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(N) {
      d(N), m();
    },
    get onconnect() {
      return p();
    },
    set onconnect(N) {
      p(N), m();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(N) {
      f(N), m();
    },
    get children() {
      return g();
    },
    set children(N) {
      g(N), m();
    }
  });
}
le(
  Xn,
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
var Z0 = /* @__PURE__ */ ee("<!> <!>", 1);
function va(e, t) {
  pe(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => xe.Top), o = y(t, "sourcePosition", 23, () => xe.Bottom);
  var i = Z0(), s = fe(i);
  Xn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = z(s), l = z(a);
  return Xn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), Se(() => Ke(a, ` ${n()?.label ?? ""} `)), V(e, i), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = xe.Top) {
      r(u), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u = xe.Bottom) {
      o(u), m();
    }
  });
}
le(va, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var K0 = /* @__PURE__ */ ee(" <!>", 1);
function Ac(e, t) {
  pe(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => xe.Bottom);
  be();
  var o = K0(), i = fe(o), s = z(i);
  return Xn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), Se(() => Ke(i, `${n()?.label ?? ""} `)), V(e, o), ge({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), m();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = xe.Bottom) {
      r(a), m();
    }
  });
}
le(Ac, { data: {}, sourcePosition: {} }, [], [], !0);
var j0 = /* @__PURE__ */ ee(" <!>", 1);
function Hc(e, t) {
  pe(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => xe.Top);
  be();
  var o = j0(), i = fe(o), s = z(i);
  return Xn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), Se(() => Ke(i, `${n()?.label ?? ""} `)), V(e, o), ge({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = xe.Top) {
      r(a), m();
    }
  });
}
le(Hc, { data: {}, targetPosition: {} }, [], [], !0);
function Ic(e, t) {
}
le(Ic, {}, [], [], !0);
function ts(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Rc(e, t) {
  const n = /* @__PURE__ */ S(Qt), r = /* @__PURE__ */ S(() => c(n).domNode);
  let o;
  return c(r) ? ts(e, c(r), t) : o = Ys(() => {
    nt(() => {
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
function Bc() {
  let e = /* @__PURE__ */ Pe(typeof window > "u");
  if (c(e)) {
    const t = Ys(() => {
      nt(() => {
        W(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Pl = (e) => jv(e), W0 = (e) => vc(e);
function gn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const yi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Y0 = /* @__PURE__ */ ee("<div><!></div>");
const F0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function qc(e, t) {
  pe(t, !0), He(e, F0);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), u = y(t, "children", 7), d = /* @__PURE__ */ Ze(t, [
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
  const p = Qt(), f = jn("svelteflow__edge_id");
  let g = /* @__PURE__ */ S(() => p.visible.edges.get(f)?.zIndex);
  var h = Y0(), w = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  ut(
    h,
    (b) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: w,
      ...d,
      [on]: b
    }),
    [
      () => ({
        display: Bc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: gn(o()),
        height: gn(i()),
        "z-index": c(g)
      })
    ],
    "svelte-w2n27y"
  );
  var C = B(h);
  return rt(C, () => u() ?? pt), I(h), vt(h, (b, E) => Rc?.(b, E), () => "edge-labels"), V(e, h), ge({
    get x() {
      return n();
    },
    set x(b = 0) {
      n(b), m();
    },
    get y() {
      return r();
    },
    set y(b = 0) {
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
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(b = !1) {
      s(b), m();
    },
    get transparent() {
      return a();
    },
    set transparent(b = !1) {
      a(b), m();
    },
    get class() {
      return l();
    },
    set class(b) {
      l(b), m();
    },
    get children() {
      return u();
    },
    set children(b) {
      u(b), m();
    }
  });
}
le(
  qc,
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
var X0 = /* @__PURE__ */ we("<path></path>"), U0 = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Vo(e, t) {
  pe(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "style", 7), p = y(t, "interactionWidth", 7, 20), f = y(t, "class", 7), g = /* @__PURE__ */ Ze(t, [
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
  var h = U0(), w = fe(h), C = z(w);
  {
    var b = ($) => {
      var k = X0();
      ut(k, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), V($, k);
    };
    de(C, ($) => {
      p() > 0 && $(b);
    });
  }
  var E = z(C);
  {
    var x = ($) => {
      qc($, {
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
        children: (k, D) => {
          be();
          var A = Ee();
          Se(() => Ke(A, o())), V(k, A);
        },
        $$slots: { default: !0 }
      });
    };
    de(E, ($) => {
      o() && $(x);
    });
  }
  return Se(() => {
    $e(w, "id", n()), $e(w, "d", r()), Dt(w, 0, zn(["svelte-flow__edge-path", f()])), $e(w, "marker-start", l()), $e(w, "marker-end", u()), kt(w, d());
  }), V(e, h), ge({
    get id() {
      return n();
    },
    set id($) {
      n($), m();
    },
    get path() {
      return r();
    },
    set path($) {
      r($), m();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), m();
    },
    get labelX() {
      return i();
    },
    set labelX($) {
      i($), m();
    },
    get labelY() {
      return s();
    },
    set labelY($) {
      s($), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd($) {
      u($), m();
    },
    get style() {
      return d();
    },
    set style($) {
      d($), m();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth($ = 20) {
      p($), m();
    },
    get class() {
      return f();
    },
    set class($) {
      f($), m();
    }
  });
}
le(
  Vo,
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
function ma(e, t) {
  pe(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), u = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), p = y(t, "sourceY", 7), f = y(t, "style", 7), g = y(t, "targetPosition", 7), h = y(t, "targetX", 7), w = y(t, "targetY", 7), C = /* @__PURE__ */ S(() => Sc({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ S(() => $o(c(C), 3)), E = /* @__PURE__ */ S(() => c(b)[0]), x = /* @__PURE__ */ S(() => c(b)[1]), $ = /* @__PURE__ */ S(() => c(b)[2]);
  return Vo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(E);
    },
    get labelX() {
      return c(x);
    },
    get labelY() {
      return c($);
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
  }), ge({
    get id() {
      return n();
    },
    set id(k) {
      n(k), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(k) {
      r(k), m();
    },
    get label() {
      return o();
    },
    set label(k) {
      o(k), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(k) {
      i(k), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(k) {
      l(k), m();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(k) {
      u(k), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(k) {
      d(k), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(k) {
      p(k), m();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(k) {
      g(k), m();
    },
    get targetX() {
      return h();
    },
    set targetX(k) {
      h(k), m();
    },
    get targetY() {
      return w();
    },
    set targetY(k) {
      w(k), m();
    }
  });
}
le(
  ma,
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
function Zc(e, t) {
  pe(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), u = y(t, "sourceX", 7), d = y(t, "sourceY", 7), p = y(t, "targetPosition", 7), f = y(t, "targetX", 7), g = y(t, "targetY", 7), h = /* @__PURE__ */ S(() => fa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ S(() => $o(c(h), 3)), C = /* @__PURE__ */ S(() => c(w)[0]), b = /* @__PURE__ */ S(() => c(w)[1]), E = /* @__PURE__ */ S(() => c(w)[2]);
  return Vo(e, {
    get path() {
      return c(C);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(E);
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
  }), ge({
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), m();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), m();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), m();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), m();
    },
    get sourceX() {
      return u();
    },
    set sourceX(x) {
      u(x), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), m();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(x) {
      p(x), m();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), m();
    },
    get targetY() {
      return g();
    },
    set targetY(x) {
      g(x), m();
    }
  });
}
le(
  Zc,
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
function Kc(e, t) {
  pe(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), u = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), p = y(t, "style", 7), f = /* @__PURE__ */ S(() => Pc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ S(() => $o(c(f), 3)), h = /* @__PURE__ */ S(() => c(g)[0]), w = /* @__PURE__ */ S(() => c(g)[1]), C = /* @__PURE__ */ S(() => c(g)[2]);
  return Vo(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(C);
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
  }), ge({
    get sourceX() {
      return n();
    },
    set sourceX(b) {
      n(b), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(b) {
      r(b), m();
    },
    get targetX() {
      return o();
    },
    set targetX(b) {
      o(b), m();
    },
    get targetY() {
      return i();
    },
    set targetY(b) {
      i(b), m();
    },
    get label() {
      return s();
    },
    set label(b) {
      s(b), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(b) {
      a(b), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(b) {
      l(b), m();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(b) {
      u(b), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(b) {
      d(b), m();
    },
    get style() {
      return p();
    },
    set style(b) {
      p(b), m();
    }
  });
}
le(
  Kc,
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
function jc(e, t) {
  pe(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), u = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), p = y(t, "markerEnd", 7), f = y(t, "interactionWidth", 7), g = y(t, "style", 7), h = /* @__PURE__ */ S(() => fa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ S(() => $o(c(h), 3)), C = /* @__PURE__ */ S(() => c(w)[0]), b = /* @__PURE__ */ S(() => c(w)[1]), E = /* @__PURE__ */ S(() => c(w)[2]);
  return Vo(e, {
    get path() {
      return c(C);
    },
    get labelX() {
      return c(b);
    },
    get labelY() {
      return c(E);
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
  }), ge({
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), m();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), m();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), m();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), m();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(x) {
      u(x), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), m();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(x) {
      p(x), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), m();
    },
    get style() {
      return g();
    },
    set style(x) {
      g(x), m();
    }
  });
}
le(
  jc,
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
function J0(e) {
  let t = 0, n = ur(0), r;
  return () => {
    cp() && (c(n), So(() => (t === 0 && (r = ft(() => e(() => Fo(n)))), t += 1, () => {
      $p().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class G0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = J0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Q0 = /\(.+\)/, em = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class tm extends G0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Q0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => em.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ds(o, "change", i)
    );
  }
}
function nm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ca(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Ll(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: w, transform: C, width: b, height: E } = e;
      if (i0({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: E,
        transform: C
      }))
        w.set(p.id, p), w.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      u.set(d.id, g);
      continue;
    }
    const h = f0({
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
      zIndex: o0({
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
  input: Ac,
  output: Hc,
  default: va,
  group: Ic
}, Yc = {
  straight: Kc,
  smoothstep: Zc,
  default: ma,
  step: jc
};
function rm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Do(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return da(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function om(e) {
  class t {
    #t = /* @__PURE__ */ S(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#t);
    }
    set flowId(r) {
      W(this.#t, r);
    }
    #e = /* @__PURE__ */ Pe(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      W(this.#e, r);
    }
    #n = /* @__PURE__ */ Pe(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      W(this.#n, r);
    }
    #r = /* @__PURE__ */ Pe(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      W(this.#r, r);
    }
    #o = /* @__PURE__ */ Pe(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      W(this.#o, r);
    }
    #i = /* @__PURE__ */ S(() => {
      const r = m0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      W(this.#i, r);
    }
    #s = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      W(this.#s, r);
    }
    #a = /* @__PURE__ */ S(() => (k0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      W(this.#a, r);
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
    #l = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#l);
    }
    set selectedNodes(r) {
      W(this.#l, r);
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
      W(this.#u, r);
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
        const { viewport: h, width: w, height: C } = this, b = [h.x, h.y, h.zoom];
        p = nm(s, b, w, C), f = Ll({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: w,
          height: C
        });
      } else
        p = this.nodeLookup, f = Ll(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      W(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      W(this.#d, r);
    }
    #f = /* @__PURE__ */ S(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      W(this.#f, r);
    }
    #p = /* @__PURE__ */ S(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      W(this.#p, r);
    }
    #g = /* @__PURE__ */ S(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#g);
    }
    set nodesFocusable(r) {
      W(this.#g, r);
    }
    #h = /* @__PURE__ */ S(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      W(this.#h, r);
    }
    #v = /* @__PURE__ */ S(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      W(this.#v, r);
    }
    #m = /* @__PURE__ */ S(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      W(this.#m, r);
    }
    #y = /* @__PURE__ */ S(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      W(this.#y, r);
    }
    #w = /* @__PURE__ */ S(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      W(this.#w, r);
    }
    #b = /* @__PURE__ */ S(() => e.props.nodeExtent ?? $s);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      W(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => e.props.translateExtent ?? $s);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      W(this.#x, r);
    }
    #$ = /* @__PURE__ */ S(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      W(this.#$, r);
    }
    #k = /* @__PURE__ */ S(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#k);
    }
    set nodeDragThreshold(r) {
      W(this.#k, r);
    }
    #C = /* @__PURE__ */ S(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#C);
    }
    set autoPanOnNodeDrag(r) {
      W(this.#C, r);
    }
    #_ = /* @__PURE__ */ S(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      W(this.#_, r);
    }
    #S = /* @__PURE__ */ S(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      W(this.#S, r);
    }
    #E = /* @__PURE__ */ S(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      W(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ S(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      W(this.#P, r);
    }
    #L = /* @__PURE__ */ Pe(!1);
    get dragging() {
      return c(this.#L);
    }
    set dragging(r) {
      W(this.#L, r);
    }
    #O = /* @__PURE__ */ Pe(null);
    get selectionRect() {
      return c(this.#O);
    }
    set selectionRect(r) {
      W(this.#O, r);
    }
    #D = /* @__PURE__ */ Pe(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      W(this.#D, r);
    }
    #N = /* @__PURE__ */ Pe(!1);
    get multiselectionKeyPressed() {
      return c(this.#N);
    }
    set multiselectionKeyPressed(r) {
      W(this.#N, r);
    }
    #V = /* @__PURE__ */ Pe(!1);
    get deleteKeyPressed() {
      return c(this.#V);
    }
    set deleteKeyPressed(r) {
      W(this.#V, r);
    }
    #T = /* @__PURE__ */ Pe(!1);
    get panActivationKeyPressed() {
      return c(this.#T);
    }
    set panActivationKeyPressed(r) {
      W(this.#T, r);
    }
    #M = /* @__PURE__ */ Pe(!1);
    get zoomActivationKeyPressed() {
      return c(this.#M);
    }
    set zoomActivationKeyPressed(r) {
      W(this.#M, r);
    }
    #z = /* @__PURE__ */ Pe(null);
    get selectionRectMode() {
      return c(this.#z);
    }
    set selectionRectMode(r) {
      W(this.#z, r);
    }
    #A = /* @__PURE__ */ Pe("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      W(this.#A, r);
    }
    #H = /* @__PURE__ */ S(() => e.props.selectionMode ?? hi.Partial);
    get selectionMode() {
      return c(this.#H);
    }
    set selectionMode(r) {
      W(this.#H, r);
    }
    #I = /* @__PURE__ */ S(() => ({ ...Wc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      W(this.#I, r);
    }
    #R = /* @__PURE__ */ S(() => ({ ...Yc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      W(this.#R, r);
    }
    #B = /* @__PURE__ */ S(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#B);
    }
    set noPanClass(r) {
      W(this.#B, r);
    }
    #q = /* @__PURE__ */ S(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#q);
    }
    set noDragClass(r) {
      W(this.#q, r);
    }
    #Z = /* @__PURE__ */ S(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#Z);
    }
    set noWheelClass(r) {
      W(this.#Z, r);
    }
    #K = /* @__PURE__ */ S(() => t0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#K);
    }
    set ariaLabelConfig(r) {
      W(this.#K, r);
    }
    #j = /* @__PURE__ */ Pe(rm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#j);
    }
    set _viewport(r) {
      W(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #W = /* @__PURE__ */ Pe(
      // _connection is viewport independent and originating from XYHandle
      ks
    );
    get _connection() {
      return c(this.#W);
    }
    set _connection(r) {
      W(this.#W, r);
    }
    #Y = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: No(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#Y);
    }
    set connection(r) {
      W(this.#Y, r);
    }
    #F = /* @__PURE__ */ S(() => e.props.connectionMode ?? Mr.Strict);
    get connectionMode() {
      return c(this.#F);
    }
    set connectionMode(r) {
      W(this.#F, r);
    }
    #X = /* @__PURE__ */ S(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#X);
    }
    set connectionRadius(r) {
      W(this.#X, r);
    }
    #U = /* @__PURE__ */ S(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#U);
    }
    set isValidConnection(r) {
      W(this.#U, r);
    }
    #J = /* @__PURE__ */ S(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      W(this.#J, r);
    }
    #G = /* @__PURE__ */ S(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#G);
    }
    set defaultMarkerColor(r) {
      W(this.#G, r);
    }
    #Q = /* @__PURE__ */ S(() => p0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#Q);
    }
    set markers(r) {
      W(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      W(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => e.props.onflowerror ?? Jv);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      W(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      W(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      W(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      W(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      W(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      W(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      W(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      W(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      W(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      W(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      W(this.#de, r);
    }
    #fe = /* @__PURE__ */ S(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      W(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      W(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      W(this.#ge, r);
    }
    #he = /* @__PURE__ */ Pe(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      W(this.#he, r);
    }
    #ve = /* @__PURE__ */ S(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      W(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      W(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      W(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Xv(
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
    _prefersDark = new tm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ S(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#we);
    }
    set colorMode(r) {
      W(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ks, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Qt() {
  const e = jn(wi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const wi = Symbol();
function Fc(e) {
  const t = om(e);
  function n(O) {
    t.nodeTypes = {
      ...Wc,
      ...O
    };
  }
  function r(O) {
    t.edgeTypes = {
      ...Yc,
      ...O
    };
  }
  function o(O) {
    t.edges = l0(O, t.edges);
  }
  const i = (O, _ = !1) => {
    t.nodes = t.nodes.map((H) => {
      const v = O.get(H.id);
      return v ? { ...H, position: v.position, dragging: _ } : H;
    });
  };
  function s(O) {
    const { changes: _, updatedInternals: H } = x0(O, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!H)
      return;
    v0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const v = /* @__PURE__ */ new Map();
    for (const P of _) {
      const L = t.nodeLookup.get(P.id)?.internals.userNode;
      if (!L)
        continue;
      const T = { ...L };
      switch (P.type) {
        case "dimensions": {
          const R = { ...T.measured, ...P.dimensions };
          P.setAttributes && (T.width = P.dimensions?.width ?? T.width, T.height = P.dimensions?.height ?? T.height), T.measured = R;
          break;
        }
        case "position":
          T.position = P.position ?? T.position;
          break;
      }
      v.set(P.id, T);
    }
    t.nodes = t.nodes.map((P) => v.get(P.id) ?? P);
  }
  function a(O) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = O, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(O, _, H) {
    const v = typeof H?.zoom < "u" ? H.zoom : t.maxZoom, P = t.panZoom;
    return P ? (await P.setViewport({
      x: t.width / 2 - O * v,
      y: t.height / 2 - _ * v,
      zoom: v
    }, { duration: H?.duration, ease: H?.ease, interpolate: H?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(O, _) {
    const H = t.panZoom;
    return H ? H.scaleBy(O, _) : Promise.resolve(!1);
  }
  function d(O) {
    return u(1.2, O);
  }
  function p(O) {
    return u(1 / 1.2, O);
  }
  function f(O) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([O, t.maxZoom]), t.minZoom = O);
  }
  function g(O) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, O]), t.maxZoom = O);
  }
  function h(O) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(O), t.translateExtent = O);
  }
  function w(O) {
    t.panZoom?.setClickDistance(O);
  }
  function C(O, _ = null) {
    let H = !1;
    const v = O.map((P) => (!_ || _.has(P.id)) && P.selected ? (H = !0, { ...P, selected: !1 }) : P);
    return [H, v];
  }
  function b(O) {
    const _ = O?.nodes ? new Set(O.nodes.map((R) => R.id)) : null, [H, v] = C(t.nodes, _);
    H && (t.nodes = v);
    const P = O?.edges ? new Set(O.edges.map((R) => R.id)) : null, [L, T] = C(t.edges, P);
    L && (t.edges = T);
  }
  function E(O) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((H) => {
      const v = O.includes(H.id), P = _ && H.selected || v;
      if (H.selected !== P) {
        const L = t.nodeLookup.get(H.id);
        return L && (L.selected = P), H.selected = P, { ...H };
      }
      return H;
    }), _ || b({ nodes: [] });
  }
  function x(O) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((H) => {
      const v = O.includes(H.id), P = _ && H.selected || v;
      return H.selected !== P ? { ...H, selected: P } : H;
    }), _ || b({ edges: [] });
  }
  function $(O, _, H) {
    const v = t.nodeLookup.get(O);
    if (!v) {
      console.warn("012", go.error012(O));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, v.selected ? (_ || v.selected && t.multiselectionKeyPressed) && (b({ nodes: [v], edges: [] }), requestAnimationFrame(() => H?.blur())) : E([O]);
  }
  function k(O) {
    const _ = t.edgeLookup.get(O);
    if (!_) {
      console.warn("012", go.error012(O));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && b({ nodes: [], edges: [_] }) : x([O]));
  }
  function D(O, _) {
    const { nodeExtent: H, snapGrid: v, nodeOrigin: P, nodeLookup: L, nodesDraggable: T, onerror: R } = t, N = /* @__PURE__ */ new Map(), Z = v?.[0] ?? 5, X = v?.[1] ?? 5, G = O.x * Z * _, ae = O.y * X * _;
    for (const Y of L.values()) {
      if (!(Y.selected && (Y.draggable || T && typeof Y.draggable > "u")))
        continue;
      let J = {
        x: Y.internals.positionAbsolute.x + G,
        y: Y.internals.positionAbsolute.y + ae
      };
      v && (J = Ai(J, v));
      const { position: U, positionAbsolute: te } = mc({
        nodeId: Y.id,
        nextPosition: J,
        nodeLookup: L,
        nodeExtent: H,
        nodeOrigin: P,
        onError: R
      });
      Y.position = U, Y.internals.positionAbsolute = te, N.set(Y.id, Y);
    }
    i(N);
  }
  function A(O) {
    return $0({
      delta: O,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const q = (O) => {
    t._connection = { ...O };
  };
  function Q() {
    t._connection = ks;
  }
  function j() {
    t.resetStoreValues(), b();
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
    setPaneClickDistance: w,
    unselectNodesAndEdges: b,
    addSelectedNodes: E,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: k,
    moveSelectedNodes: D,
    panBy: A,
    updateConnection: q,
    cancelConnection: Q,
    reset: j
  });
}
function im(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = B0({
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
    update(w) {
      g.update(w);
    }
  };
}
var sm = /* @__PURE__ */ ee('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Xc(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 23, () => cn.Free), o = y(t, "preventScrolling", 7, !0), i = y(t, "zoomOnScroll", 7, !0), s = y(t, "zoomOnDoubleClick", 7, !0), a = y(t, "zoomOnPinch", 7, !0), l = y(t, "panOnDrag", 7, !0), u = y(t, "panOnScroll", 7, !1), d = y(t, "paneClickDistance", 7, 1), p = y(t, "onmovestart", 7), f = y(t, "onmove", 7), g = y(t, "onmoveend", 7), h = y(t, "oninit", 7), w = y(t, "children", 7), C = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), b = /* @__PURE__ */ S(() => n().panActivationKeyPressed || u());
  const { viewport: E } = n();
  let x = !1;
  nt(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var $ = sm(), k = B($);
  return rt(k, w), I($), vt($, (D, A) => im?.(D, A), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: E,
    onDraggingChange: (D) => {
      n(n().dragging = D, !0);
    },
    setPanZoomInstance: (D) => {
      n(n().panZoom = D, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(b),
    panOnDrag: c(C),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || cn.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (D) => {
      n(n().viewport = { x: D[0], y: D[1], zoom: D[2] }, !0);
    }
  })), V(e, $), ge({
    get store() {
      return n();
    },
    set store(D) {
      n(D), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(D = cn.Free) {
      r(D), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(D = !0) {
      o(D), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(D = !0) {
      i(D), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(D = !0) {
      s(D), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(D = !0) {
      a(D), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(D = !0) {
      l(D), m();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(D = !1) {
      u(D), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(D = 1) {
      d(D), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(D) {
      p(D), m();
    },
    get onmove() {
      return f();
    },
    set onmove(D) {
      f(D), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(D) {
      g(D), m();
    },
    get oninit() {
      return h();
    },
    set oninit(D) {
      h(D), m();
    },
    get children() {
      return w();
    },
    set children(D) {
      w(D), m();
    }
  });
}
le(
  Xc,
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
function Ol(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Dl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Nl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var am = /* @__PURE__ */ ee("<div><!></div>");
function Uc(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), u = y(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), w = /* @__PURE__ */ S(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), C = /* @__PURE__ */ S(() => n().elementsSelectable && (c(w) || n().selectionRectMode === "user")), b = !1;
  function E(_) {
    if (b || n().connection.inProgress) {
      b = !1;
      return;
    }
    i()?.({ event: _ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(_) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(w) || _.button !== 0 || _.target !== d || !p)
      return;
    _.target?.setPointerCapture?.(_.pointerId);
    const { x: H, y: v } = sn(_, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: H, startY: v, x: H, y: v }, !0), a()?.(_);
  }
  function $(_) {
    if (!c(w) || !p || !n().selectionRect)
      return;
    b = !0;
    const H = sn(_, p), { startX: v = 0, startY: P = 0 } = n().selectionRect, L = {
      ...n().selectionRect,
      x: H.x < v ? H.x : v,
      y: H.y < P ? H.y : P,
      width: Math.abs(H.x - v),
      height: Math.abs(H.y - P)
    }, T = f, R = g;
    f = new Set(ca(
      n().nodeLookup,
      L,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === hi.Partial,
      !0
    ).map((Z) => Z.id));
    const N = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const Z of f) {
      const X = n().connectionLookup.get(Z);
      if (X)
        for (const { edgeId: G } of X.values()) {
          const ae = n().edgeLookup.get(G);
          ae && (ae.selectable ?? N) && g.add(G);
        }
    }
    Nl(T, f) || n(n().nodes = n().nodes.map(Dl(f)), !0), Nl(R, g) || n(n().edges = n().edges.map(Dl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = L, !0);
  }
  function k(_) {
    _.button === 0 && (_.target?.releasePointerCapture?.(_.pointerId), !c(w) && n().selectionRectMode === "user" && _.target === d && E?.(_), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (b = !1), l()?.(_));
  }
  const D = (_) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      _.preventDefault();
      return;
    }
    s()?.({ event: _ });
  };
  var A = am();
  let q;
  var Q = /* @__PURE__ */ S(() => c(C) ? void 0 : Ol(E, d));
  A.__click = function(..._) {
    c(Q)?.apply(this, _);
  }, A.__pointerdown = function(..._) {
    (c(C) ? x : void 0)?.apply(this, _);
  }, A.__pointermove = function(..._) {
    (c(C) ? $ : void 0)?.apply(this, _);
  }, A.__pointerup = function(..._) {
    (c(C) ? k : void 0)?.apply(this, _);
  };
  var j = /* @__PURE__ */ S(() => Ol(D, d));
  A.__contextmenu = function(..._) {
    c(j)?.apply(this, _);
  };
  var O = B(A);
  return rt(O, u), I(A), Ht(A, (_) => d = _, () => d), Se((_) => q = Dt(A, 1, "svelte-flow__pane svelte-flow__container", null, q, _), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(w)
    })
  ]), V(e, A), ge({
    get store() {
      return n();
    },
    set store(_) {
      n(_), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(_ = !0) {
      r(_), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(_) {
      o(_), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(_) {
      i(_), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(_) {
      s(_), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(_) {
      a(_), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(_) {
      l(_), m();
    },
    get children() {
      return u();
    },
    set children(_) {
      u(_), m();
    }
  });
}
Mn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
le(
  Uc,
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
var lm = /* @__PURE__ */ ee('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Jc(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "children", 7);
  var o = lm();
  let i;
  var s = B(o);
  return rt(s, r), I(o), Se((a) => i = kt(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), V(e, o), ge({
    get store() {
      return n();
    },
    set store(a) {
      n(a), m();
    },
    get children() {
      return r();
    },
    set children(a) {
      r(a), m();
    }
  });
}
le(Jc, { store: {}, children: {} }, [], [], !0);
function Gc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = S0({
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
var um = /* @__PURE__ */ ee('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), cm = /* @__PURE__ */ ee('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const dm = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Qc(e, t) {
  pe(t, !0), He(e, dm);
  let n = y(t, "store", 7);
  var r = cm(), o = fe(r), i = B(o, !0);
  I(o);
  var s = z(o, 2), a = B(s, !0);
  I(s);
  var l = z(s, 2);
  {
    var u = (d) => {
      var p = um(), f = B(p, !0);
      I(p), Se(() => {
        $e(p, "id", `${fm}-${n().flowId}`), Ke(f, n().ariaLiveMessage);
      }), V(d, p);
    };
    de(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return Se(() => {
    $e(o, "id", `${ed}-${n().flowId}`), Ke(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), $e(s, "id", `${td}-${n().flowId}`), Ke(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), V(e, r), ge({
    get store() {
      return n();
    },
    set store(d) {
      n(d), m();
    }
  });
}
le(Qc, { store: {} }, [], [], !0);
const ed = "svelte-flow__node-desc", td = "svelte-flow__edge-desc", fm = "svelte-flow__aria-live";
var pm = /* @__PURE__ */ ee("<div><!></div>");
function nd(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), u = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), p = y(t, "onnodepointerleave", 7), f = y(t, "onnodepointermove", 7), g = y(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ S(() => bt(r().data, () => ({}), !0)), w = /* @__PURE__ */ S(() => bt(r().selected, !1)), C = /* @__PURE__ */ S(() => r().draggable), b = /* @__PURE__ */ S(() => r().selectable), E = /* @__PURE__ */ S(() => bt(r().deletable, !0)), x = /* @__PURE__ */ S(() => r().connectable), $ = /* @__PURE__ */ S(() => r().focusable), k = /* @__PURE__ */ S(() => bt(r().hidden, !1)), D = /* @__PURE__ */ S(() => bt(r().dragging, !1)), A = /* @__PURE__ */ S(() => bt(r().style, "")), q = /* @__PURE__ */ S(() => r().class), Q = /* @__PURE__ */ S(() => bt(r().type, "default")), j = /* @__PURE__ */ S(() => r().parentId), O = /* @__PURE__ */ S(() => r().sourcePosition), _ = /* @__PURE__ */ S(() => r().targetPosition), H = /* @__PURE__ */ S(() => bt(r().measured, () => ({ width: 0, height: 0 }), !0).width), v = /* @__PURE__ */ S(() => bt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ S(() => r().initialWidth), L = /* @__PURE__ */ S(() => r().initialHeight), T = /* @__PURE__ */ S(() => r().width), R = /* @__PURE__ */ S(() => r().height), N = /* @__PURE__ */ S(() => r().dragHandle), Z = /* @__PURE__ */ S(() => bt(r().internals.z, 0)), X = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), G = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), ae = /* @__PURE__ */ S(() => r().internals.userNode), { id: Y } = r(), J = /* @__PURE__ */ S(() => c(C) ?? n().nodesDraggable), U = /* @__PURE__ */ S(() => c(b) ?? n().elementsSelectable), te = /* @__PURE__ */ S(() => c(x) ?? n().nodesConnectable), F = /* @__PURE__ */ S(() => xc(r())), ye = /* @__PURE__ */ S(() => !!r().internals.handleBounds), ue = /* @__PURE__ */ S(() => c(F) && c(ye)), ie = /* @__PURE__ */ S(() => c($) ?? n().nodesFocusable);
  function re(me) {
    return n().parentLookup.has(me);
  }
  let ce = /* @__PURE__ */ S(() => re(Y)), oe = /* @__PURE__ */ Pe(null), ve = null, se = c(Q), _e = c(O), K = c(_), Ge = /* @__PURE__ */ S(() => n().nodeTypes[c(Q)] ?? va), Ae = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  Or("svelteflow__node_connectable", {
    get value() {
      return c(te);
    }
  }), Or("svelteflow__node_id", Y);
  let Re = /* @__PURE__ */ S(() => {
    const me = c(H) === void 0 ? c(T) ?? c(P) : c(T), Fe = c(v) === void 0 ? c(R) ?? c(L) : c(R);
    if (!(me === void 0 && Fe === void 0 && c(A) === void 0))
      return `${c(A)};${me ? `width:${gn(me)};` : ""}${Fe ? `height:${gn(Fe)};` : ""}`;
  });
  nt(() => {
    (c(Q) !== se || c(O) !== _e || c(_) !== K) && c(oe) !== null && requestAnimationFrame(() => {
      c(oe) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[Y, { id: Y, nodeElement: c(oe), force: !0 }]]));
    }), se = c(Q), _e = c(O), K = c(_);
  }), nt(() => {
    o() && (!c(ue) || c(oe) !== ve) && (ve && o().unobserve(ve), c(oe) && o().observe(c(oe)), ve = c(oe));
  }), Pi(() => {
    ve && o()?.unobserve(ve);
  });
  function et(me) {
    c(U) && (!n().selectNodesOnDrag || !c(J) || n().nodeDragThreshold > 0) && n().handleNodeSelection(Y), s()?.({ node: c(ae), event: me });
  }
  function We(me) {
    if (!(Cc(me) || n().disableKeyboardA11y))
      if (hc.includes(me.key) && c(U)) {
        const Fe = me.key === "Escape";
        n().handleNodeSelection(Y, Fe, c(oe));
      } else c(J) && r().selected && Object.prototype.hasOwnProperty.call(yi, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = c(Ae)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(yi[me.key], me.shiftKey ? 4 : 1));
  }
  const Ye = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(oe)?.matches(":focus-visible"))
      return;
    const { width: me, height: Fe, viewport: dt } = n();
    ca(/* @__PURE__ */ new Map([[Y, r()]]), { x: 0, y: 0, width: me, height: Fe }, [dt.x, dt.y, dt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: dt.zoom });
  };
  var Rt = Me(), Ie = fe(Rt);
  {
    var ct = (me) => {
      var Fe = pm();
      ut(
        Fe,
        (Qe, Ct) => ({
          "data-id": Y,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(Q)}`,
            c(q)
          ],
          style: c(Re),
          onclick: et,
          onpointerenter: d() ? (at) => d()({ node: c(ae), event: at }) : void 0,
          onpointerleave: p() ? (at) => p()({ node: c(ae), event: at }) : void 0,
          onpointermove: f() ? (at) => f()({ node: c(ae), event: at }) : void 0,
          oncontextmenu: g() ? (at) => g()({ node: c(ae), event: at }) : void 0,
          onkeydown: c(ie) ? We : void 0,
          onfocus: c(ie) ? Ye : void 0,
          tabIndex: c(ie) ? 0 : void 0,
          role: r().ariaRole ?? (c(ie) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${ed}-${n().flowId}`,
          ...r().domAttributes,
          [Bn]: Qe,
          [on]: Ct
        }),
        [
          () => ({
            dragging: c(D),
            selected: c(w),
            draggable: c(J),
            connectable: c(te),
            selectable: c(U),
            nopan: c(J),
            parent: c(ce)
          }),
          () => ({
            "z-index": c(Z),
            transform: `translate(${c(X) ?? ""}px, ${c(G) ?? ""}px)`,
            visibility: c(F) ? "visible" : "hidden"
          })
        ]
      );
      var dt = B(Fe);
      ea(dt, () => c(Ge), (Qe, Ct) => {
        Ct(Qe, {
          get data() {
            return c(h);
          },
          get id() {
            return Y;
          },
          get selected() {
            return c(w);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(E);
          },
          get sourcePosition() {
            return c(O);
          },
          get targetPosition() {
            return c(_);
          },
          get zIndex() {
            return c(Z);
          },
          get dragging() {
            return c(D);
          },
          get draggable() {
            return c(J);
          },
          get dragHandle() {
            return c(N);
          },
          get parentId() {
            return c(j);
          },
          get type() {
            return c(Q);
          },
          get isConnectable() {
            return c(te);
          },
          get positionAbsoluteX() {
            return c(X);
          },
          get positionAbsoluteY() {
            return c(G);
          },
          get width() {
            return c(T);
          },
          get height() {
            return c(R);
          }
        });
      }), I(Fe), vt(Fe, (Qe, Ct) => Gc?.(Qe, Ct), () => ({
        nodeId: Y,
        isSelectable: c(U),
        disabled: !c(J),
        handleSelector: c(N),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Qe, Ct, at, Bt) => {
          a()?.({ event: Qe, targetNode: at, nodes: Bt });
        },
        onDragStart: (Qe, Ct, at, Bt) => {
          l()?.({ event: Qe, targetNode: at, nodes: Bt });
        },
        onDragStop: (Qe, Ct, at, Bt) => {
          u()?.({ event: Qe, targetNode: at, nodes: Bt });
        },
        store: n()
      })), Ht(Fe, (Qe) => W(oe, Qe), () => c(oe)), V(me, Fe);
    };
    de(Ie, (me) => {
      c(k) || me(ct);
    });
  }
  return V(e, Rt), ge({
    get store() {
      return n();
    },
    set store(me) {
      n(me), m();
    },
    get node() {
      return r();
    },
    set node(me) {
      r(me), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(me) {
      o(me), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(me) {
      i(me), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(me) {
      s(me), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(me) {
      a(me), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(me) {
      l(me), m();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(me) {
      u(me), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(me) {
      d(me), m();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(me) {
      p(me), m();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(me) {
      f(me), m();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(me) {
      g(me), m();
    }
  });
}
le(
  nd,
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
var gm = /* @__PURE__ */ ee('<div class="svelte-flow__nodes"></div>');
function rd(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), u = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), p = y(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const w = /* @__PURE__ */ new Map();
    h.forEach((C) => {
      const b = C.target.getAttribute("data-id");
      w.set(b, { id: b, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(w);
  });
  Pi(() => {
    f?.disconnect();
  });
  var g = gm();
  return yt(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, w) => {
    nd(h, {
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
        return p();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store(C) {
        n(C);
      }
    });
  }), I(g), V(e, g), ge({
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(h) {
      r(h), m();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(h) {
      o(h), m();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(h) {
      i(h), m();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(h) {
      s(h), m();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(h) {
      a(h), m();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(h) {
      l(h), m();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(h) {
      u(h), m();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(h) {
      d(h), m();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(h) {
      p(h), m();
    }
  });
}
le(
  rd,
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
var hm = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function od(e, t) {
  pe(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), u = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), p = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), g = /* @__PURE__ */ S(() => n().targetY), h = /* @__PURE__ */ S(() => n().sourcePosition), w = /* @__PURE__ */ S(() => n().targetPosition), C = /* @__PURE__ */ S(() => bt(n().animated, !1)), b = /* @__PURE__ */ S(() => bt(n().selected, !1)), E = /* @__PURE__ */ S(() => n().label), x = /* @__PURE__ */ S(() => n().labelStyle), $ = /* @__PURE__ */ S(() => bt(n().data, () => ({}), !0)), k = /* @__PURE__ */ S(() => n().style), D = /* @__PURE__ */ S(() => n().interactionWidth), A = /* @__PURE__ */ S(() => bt(n().type, "default")), q = /* @__PURE__ */ S(() => n().sourceHandle), Q = /* @__PURE__ */ S(() => n().targetHandle), j = /* @__PURE__ */ S(() => n().markerStart), O = /* @__PURE__ */ S(() => n().markerEnd), _ = /* @__PURE__ */ S(() => n().selectable), H = /* @__PURE__ */ S(() => n().focusable), v = /* @__PURE__ */ S(() => bt(n().deletable, !0)), P = /* @__PURE__ */ S(() => n().hidden), L = /* @__PURE__ */ S(() => n().zIndex), T = /* @__PURE__ */ S(() => n().class), R = /* @__PURE__ */ S(() => n().ariaLabel), N = null;
  const { id: Z } = n();
  Or("svelteflow__edge_id", Z);
  let X = /* @__PURE__ */ S(() => c(_) ?? r().elementsSelectable), G = /* @__PURE__ */ S(() => c(H) ?? r().edgesFocusable), ae = /* @__PURE__ */ S(() => r().edgeTypes[c(A)] ?? ma), Y = /* @__PURE__ */ S(() => c(j) ? `url('#${_s(c(j), r().flowId)}')` : void 0), J = /* @__PURE__ */ S(() => c(O) ? `url('#${_s(c(O), r().flowId)}')` : void 0);
  function U(re) {
    const ce = r().edgeLookup.get(Z);
    ce && (c(X) && r().handleEdgeSelection(Z), o()?.({ event: re, edge: ce }));
  }
  function te(re, ce) {
    const oe = r().edgeLookup.get(Z);
    oe && ce({ event: re, edge: oe });
  }
  function F(re) {
    if (!r().disableKeyboardA11y && hc.includes(re.key) && c(X)) {
      const { unselectNodesAndEdges: ce, addSelectedEdges: oe } = r();
      re.key === "Escape" ? (N?.blur(), ce({ edges: [n()] })) : oe([Z]);
    }
  }
  var ye = Me(), ue = fe(ye);
  {
    var ie = (re) => {
      var ce = hm();
      let oe;
      var ve = B(ce);
      ut(
        ve,
        (_e) => ({
          class: ["svelte-flow__edge", c(T)],
          "data-id": Z,
          onclick: U,
          oncontextmenu: i() ? (K) => {
            te(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            te(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            te(K, a());
          } : void 0,
          "aria-label": c(R) === null ? void 0 : c(R) ? c(R) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(G) ? `${td}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(G) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(G) ? F : void 0,
          tabindex: c(G) ? 0 : void 0,
          ...n().domAttributes,
          [Bn]: _e
        }),
        [
          () => ({
            animated: c(C),
            selected: c(b),
            selectable: c(X)
          })
        ]
      );
      var se = B(ve);
      ea(se, () => c(ae), (_e, K) => {
        K(_e, {
          get id() {
            return Z;
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
            return c(w);
          },
          get animated() {
            return c(C);
          },
          get selected() {
            return c(b);
          },
          get label() {
            return c(E);
          },
          get labelStyle() {
            return c(x);
          },
          get data() {
            return c($);
          },
          get style() {
            return c(k);
          },
          get interactionWidth() {
            return c(D);
          },
          get selectable() {
            return c(X);
          },
          get deletable() {
            return c(v);
          },
          get type() {
            return c(A);
          },
          get sourceHandleId() {
            return c(q);
          },
          get targetHandleId() {
            return c(Q);
          },
          get markerStart() {
            return c(Y);
          },
          get markerEnd() {
            return c(J);
          }
        });
      }), I(ve), Ht(ve, (_e) => N = _e, () => N), I(ce), Se((_e) => oe = kt(ce, "", oe, _e), [() => ({ "z-index": c(L) })]), V(re, ce);
    };
    de(ue, (re) => {
      c(P) || re(ie);
    });
  }
  return V(e, ye), ge({
    get edge() {
      return n();
    },
    set edge(re) {
      n(re), m();
    },
    get store() {
      return r();
    },
    set store(re) {
      r(re), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(re) {
      o(re), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(re) {
      i(re), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(re) {
      s(re), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(re) {
      a(re), m();
    }
  });
}
le(
  od,
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
rp();
var vm = /* @__PURE__ */ we("<defs></defs>");
function id(e, t) {
  pe(t, !1);
  const n = Qt();
  Au();
  var r = vm();
  yt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    sd(o, je(() => c(i)));
  }), I(r), V(e, r), ge();
}
le(id, {}, [], [], !0);
var mm = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), ym = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), wm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function sd(e, t) {
  pe(t, !0);
  let n = y(t, "id", 7), r = y(t, "type", 7), o = y(t, "width", 7, 12.5), i = y(t, "height", 7, 12.5), s = y(t, "markerUnits", 7, "strokeWidth"), a = y(t, "orient", 7, "auto-start-reverse"), l = y(t, "color", 7), u = y(t, "strokeWidth", 7);
  var d = wm(), p = B(d);
  {
    var f = (h) => {
      var w = mm();
      Se(() => {
        $e(w, "stroke", l()), $e(w, "stroke-width", u());
      }), V(h, w);
    }, g = (h, w) => {
      {
        var C = (b) => {
          var E = ym();
          Se(() => {
            $e(E, "stroke", l()), $e(E, "stroke-width", u()), $e(E, "fill", l());
          }), V(b, E);
        };
        de(
          h,
          (b) => {
            r() === ho.ArrowClosed && b(C);
          },
          w
        );
      }
    };
    de(p, (h) => {
      r() === ho.Arrow ? h(f) : h(g, !1);
    });
  }
  return I(d), Se(() => {
    $e(d, "id", n()), $e(d, "markerWidth", `${o()}`), $e(d, "markerHeight", `${i()}`), $e(d, "markerUnits", s()), $e(d, "orient", a());
  }), V(e, d), ge({
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
    set width(h = 12.5) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h = 12.5) {
      i(h), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(h = "strokeWidth") {
      s(h), m();
    },
    get orient() {
      return a();
    },
    set orient(h = "auto-start-reverse") {
      a(h), m();
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
le(
  sd,
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
var bm = /* @__PURE__ */ ee('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ad(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "onedgeclick", 7), o = y(t, "onedgecontextmenu", 7), i = y(t, "onedgepointerenter", 7), s = y(t, "onedgepointerleave", 7);
  var a = bm(), l = B(a), u = B(l);
  id(u, {}), I(l);
  var d = z(l, 2);
  return yt(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    od(p, {
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
  }), I(a), V(e, a), ge({
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), m();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), m();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), m();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), m();
    }
  });
}
le(
  ad,
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
var xm = /* @__PURE__ */ ee('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const $m = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ya(e, t) {
  pe(t, !0), He(e, $m);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = Me(), l = fe(a);
  {
    var u = (d) => {
      var p = xm();
      let f;
      Se((g) => f = kt(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : gn(o()),
          height: typeof i() == "string" ? i() : gn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), V(d, p);
    };
    de(l, (d) => {
      s() && d(u);
    });
  }
  return V(e, a), ge({
    get x() {
      return n();
    },
    set x(d = 0) {
      n(d), m();
    },
    get y() {
      return r();
    },
    set y(d = 0) {
      r(d), m();
    },
    get width() {
      return o();
    },
    set width(d = 0) {
      o(d), m();
    },
    get height() {
      return i();
    },
    set height(d = 0) {
      i(d), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(d = !0) {
      s(d), m();
    }
  });
}
le(ya, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function km(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function Cm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var _m = /* @__PURE__ */ ee("<div><!></div>");
const Sm = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function ld(e, t) {
  pe(t, !0), He(e, Sm);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Pe(void 0);
  nt(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ S(() => n().selectionRectMode === "nodes" ? (n().nodes, Do(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(yi, h.key) && (h.preventDefault(), n().moveSelectedNodes(yi[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Me(), f = fe(p);
  {
    var g = (h) => {
      var w = _m();
      w.__contextmenu = [km, n, a], w.__click = [Cm, n, s], w.__keydown = function(...E) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, E);
      };
      let C;
      var b = B(w);
      ya(b, { width: "100%", height: "100%", x: 0, y: 0 }), I(w), vt(w, (E, x) => Gc?.(E, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (E, x, $, k) => {
          r()?.({ event: E, targetNode: null, nodes: k });
        },
        onDragStart: (E, x, $, k) => {
          o()?.({ event: E, targetNode: null, nodes: k });
        },
        onDragStop: (E, x, $, k) => {
          i()?.({ event: E, targetNode: null, nodes: k });
        }
      })), Ht(w, (E) => W(l, E), () => c(l)), Se(
        (E) => {
          Dt(w, 1, zn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), $e(w, "role", n().disableKeyboardA11y ? void 0 : "button"), $e(w, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = kt(w, "", C, E);
        },
        [
          () => ({
            width: gn(c(u).width),
            height: gn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), V(h, w);
    };
    de(f, (h) => {
      n().selectionRectMode === "nodes" && c(u) && Cn(c(u).x) && Cn(c(u).y) && h(g);
    });
  }
  return V(e, p), ge({
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(h) {
      r(h), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(h) {
      o(h), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(h) {
      i(h), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(h) {
      s(h), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(h) {
      a(h), m();
    }
  });
}
Mn(["contextmenu", "click", "keydown"]);
le(
  ld,
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
function Em(e) {
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
function nn(e, t) {
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
      }, { modifier: f, key: g, callback: h, preventDefault: w, enabled: C } = p;
      if (C) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const E = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const $ of E)
            if ((Array.isArray($) ? $ : [$]).reduce(
              (k, D) => k | Em(D),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        w && a.preventDefault();
        const b = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), h?.(b);
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
function gt() {
  const e = /* @__PURE__ */ S(Qt), t = (i) => {
    const s = Pl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? e0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Ar(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = ft(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Pl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = ft(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && W0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : Vl(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Vl(c(e).edgeLookup, i),
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
      const a = da(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
      return await c(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = vl(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Ar(p), g = vo(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = vl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = vo(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Uv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = ft(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = ft(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return No(g, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = mi(i, [s, a, l]);
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
    getNodesBounds: (i) => Wv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Vl(e, t) {
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
function ud(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => kr() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => kr() ? "Meta" : "Control"), { deleteElements: l } = gt();
  function u(w) {
    return w !== null && typeof w == "object";
  }
  function d(w) {
    return u(w) ? w.modifier || [] : [];
  }
  function p(w) {
    return w == null ? "" : u(w) ? w.key : w;
  }
  function f(w, C) {
    return (Array.isArray(w) ? w : [w]).map((b) => {
      const E = p(b);
      return {
        key: E,
        modifier: d(b),
        enabled: E !== null,
        callback: C
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const w = n().nodes.filter((x) => x.selected), C = n().edges.filter((x) => x.selected), { deletedNodes: b, deletedEdges: E } = await l({ nodes: w, edges: C });
    (b.length > 0 || E.length > 0) && n().ondelete?.({ nodes: b, edges: E });
  }
  return Ra("blur", St, g), Ra("contextmenu", St, g), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(i(), (w) => {
      !(w.originalEvent.ctrlKey || w.originalEvent.metaKey || w.originalEvent.shiftKey) && !Cc(w.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), vt(St, (w, C) => nn?.(w, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ge({
    get store() {
      return n();
    },
    set store(w) {
      n(w), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(w = "Shift") {
      r(w), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(w = kr() ? "Meta" : "Control") {
      o(w), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(w = "Backspace") {
      i(w), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(w = " ") {
      s(w), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(w = kr() ? "Meta" : "Control") {
      a(w), m();
    }
  });
}
le(
  ud,
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
var Pm = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), Lm = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function cd(e, t) {
  pe(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ S(() => {
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
      case $n.Bezier: {
        const [f] = Sc(p);
        return f;
      }
      case $n.Straight: {
        const [f] = Pc(p);
        return f;
      }
      case $n.Step:
      case $n.SmoothStep: {
        const [f] = fa({
          ...p,
          borderRadius: r() === $n.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Me(), u = fe(l);
  {
    var d = (p) => {
      var f = Lm(), g = B(f), h = B(g);
      {
        var w = (b) => {
          var E = Me(), x = fe(E);
          ea(x, s, ($, k) => {
            k($, {});
          }), V(b, E);
        }, C = (b) => {
          var E = Pm();
          Se(() => {
            $e(E, "d", c(a)), kt(E, i());
          }), V(b, E);
        };
        de(h, (b) => {
          s() ? b(w) : b(C, !1);
        });
      }
      I(g), I(f), Se(
        (b) => {
          $e(f, "width", n().width), $e(f, "height", n().height), kt(f, o()), Dt(g, 0, b);
        },
        [
          () => zn([
            "svelte-flow__connection",
            Kv(n().connection.isValid)
          ])
        ]
      ), V(p, f);
    };
    de(u, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return V(e, l), ge({
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), m();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), m();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), m();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), m();
    }
  });
}
le(
  cd,
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
var Om = /* @__PURE__ */ ee("<div><!></div>");
function To(e, t) {
  pe(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ Ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = Om();
  ut(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = B(l);
  return rt(u, () => i() ?? pt), I(l), V(e, l), ge({
    get position() {
      return n();
    },
    set position(d = "top-right") {
      n(d), m();
    },
    get style() {
      return r();
    },
    set style(d) {
      r(d), m();
    },
    get class() {
      return o();
    },
    set class(d) {
      o(d), m();
    },
    get children() {
      return i();
    },
    set children(d) {
      i(d), m();
    }
  });
}
le(To, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Dm = /* @__PURE__ */ ee('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function dd(e, t) {
  pe(t, !0);
  let n = y(t, "proOptions", 7), r = y(t, "position", 7, "bottom-right");
  var o = Me(), i = fe(o);
  {
    var s = (a) => {
      To(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var d = Dm();
          V(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    de(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return V(e, o), ge({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), m();
    },
    get position() {
      return r();
    },
    set position(a = "bottom-right") {
      r(a), m();
    }
  });
}
le(dd, { proOptions: {}, position: {} }, [], [], !0);
var Nm = /* @__PURE__ */ ee("<div><!></div>");
const Vm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function fd(e, t) {
  pe(t, !0), He(e, Vm);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), u = y(t, "rest", 7), d = /* @__PURE__ */ S(() => u().class), p = /* @__PURE__ */ S(() => Cp(u(), [
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
  function f(w) {
    w.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(w);
  }
  var g = Nm();
  ut(
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
      onscroll: f,
      ...c(p),
      [on]: w
    }),
    [
      () => ({ width: gn(n()), height: gn(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = B(g);
  return rt(h, () => l() ?? pt), I(g), Ht(g, (w) => i(w), () => i()), Wa(g, "clientHeight", a), Wa(g, "clientWidth", s), V(e, g), ge({
    get width() {
      return n();
    },
    set width(w) {
      n(w), m();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(w) {
      o(w), m();
    },
    get domNode() {
      return i();
    },
    set domNode(w) {
      i(w), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(w) {
      s(w), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(w) {
      a(w), m();
    },
    get children() {
      return l();
    },
    set children(w) {
      l(w), m();
    },
    get rest() {
      return u();
    },
    set rest(w) {
      u(w), m();
    }
  });
}
le(
  fd,
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
var Tm = /* @__PURE__ */ ee('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Mm = /* @__PURE__ */ ee("<!> <!>", 1), zm = /* @__PURE__ */ ee("<!> <!> <!> <!> <!>", 1);
function pd(e, t) {
  pe(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), u = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), p = y(t, "nodeClickDistance", 7, 1), f = y(t, "onmovestart", 7), g = y(t, "onmoveend", 7), h = y(t, "onmove", 7), w = y(t, "oninit", 7), C = y(t, "onnodeclick", 7), b = y(t, "onnodecontextmenu", 7), E = y(t, "onnodedrag", 7), x = y(t, "onnodedragstart", 7), $ = y(t, "onnodedragstop", 7), k = y(t, "onnodepointerenter", 7), D = y(t, "onnodepointermove", 7), A = y(t, "onnodepointerleave", 7), q = y(t, "onselectionclick", 7), Q = y(t, "onselectioncontextmenu", 7), j = y(t, "onselectionstart", 7), O = y(t, "onselectionend", 7), _ = y(t, "onedgeclick", 7), H = y(t, "onedgecontextmenu", 7), v = y(t, "onedgepointerenter", 7), P = y(t, "onedgepointerleave", 7), L = y(t, "onpaneclick", 7), T = y(t, "onpanecontextmenu", 7), R = y(t, "panOnScrollMode", 23, () => cn.Free), N = y(t, "preventScrolling", 7, !0), Z = y(t, "zoomOnScroll", 7, !0), X = y(t, "zoomOnDoubleClick", 7, !0), G = y(t, "zoomOnPinch", 7, !0), ae = y(t, "panOnScroll", 7, !1), Y = y(t, "panOnDrag", 7, !0), J = y(t, "selectionOnDrag", 7, !0), U = y(t, "connectionLineComponent", 7), te = y(t, "connectionLineStyle", 7), F = y(t, "connectionLineContainerStyle", 7), ye = y(t, "connectionLineType", 23, () => $n.Bezier), ue = y(t, "attributionPosition", 7), ie = y(t, "children", 7), re = y(t, "nodes", 31, () => jt([])), ce = y(t, "edges", 31, () => jt([])), oe = y(t, "viewport", 31, () => {
  }), ve = /* @__PURE__ */ Ze(t, [
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
  ]), se = Fc({
    props: ve,
    width: n(),
    height: r(),
    get nodes() {
      return re();
    },
    set nodes(K) {
      re(K);
    },
    get edges() {
      return ce();
    },
    set edges(K) {
      ce(K);
    },
    get viewport() {
      return oe();
    },
    set viewport(K) {
      oe(K);
    }
  });
  const _e = jn(wi);
  return _e && _e.setStore && _e.setStore(se), Or(wi, {
    provider: !1,
    getStore() {
      return se;
    }
  }), nt(() => {
    const K = { nodes: se.selectedNodes, edges: se.selectedEdges };
    ft(() => t.onselectionchange)?.(K);
    for (const Ge of se.selectionChangeHandlers.values())
      Ge(K);
  }), Pi(() => {
    se.reset();
  }), fd(e, {
    get colorMode() {
      return se.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ve;
    },
    get domNode() {
      return se.domNode;
    },
    set domNode(K) {
      se.domNode = K;
    },
    get clientWidth() {
      return se.width;
    },
    set clientWidth(K) {
      se.width = K;
    },
    get clientHeight() {
      return se.height;
    },
    set clientHeight(K) {
      se.height = K;
    },
    children: (K, Ge) => {
      var Ae = zm(), Re = fe(Ae);
      ud(Re, {
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
          return se;
        },
        set store(Ie) {
          se = Ie;
        }
      });
      var et = z(Re, 2);
      Xc(et, {
        get panOnScrollMode() {
          return R();
        },
        get preventScrolling() {
          return N();
        },
        get zoomOnScroll() {
          return Z();
        },
        get zoomOnDoubleClick() {
          return X();
        },
        get zoomOnPinch() {
          return G();
        },
        get panOnScroll() {
          return ae();
        },
        get panOnDrag() {
          return Y();
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
          return w();
        },
        get store() {
          return se;
        },
        set store(Ie) {
          se = Ie;
        },
        children: (Ie, ct) => {
          Uc(Ie, {
            get onpaneclick() {
              return L();
            },
            get onpanecontextmenu() {
              return T();
            },
            get onselectionstart() {
              return j();
            },
            get onselectionend() {
              return O();
            },
            get panOnDrag() {
              return Y();
            },
            get selectionOnDrag() {
              return J();
            },
            get store() {
              return se;
            },
            set store(me) {
              se = me;
            },
            children: (me, Fe) => {
              var dt = Mm(), Qe = fe(dt);
              Jc(Qe, {
                get store() {
                  return se;
                },
                set store(tr) {
                  se = tr;
                },
                children: (tr, qi) => {
                  var bn = Tm(), yr = z(fe(bn), 2);
                  ad(yr, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return H();
                    },
                    get onedgepointerenter() {
                      return v();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return se;
                    },
                    set store(tn) {
                      se = tn;
                    }
                  });
                  var wr = z(yr, 4);
                  cd(wr, {
                    get type() {
                      return ye();
                    },
                    get LineComponent() {
                      return U();
                    },
                    get containerStyle() {
                      return F();
                    },
                    get style() {
                      return te();
                    },
                    get store() {
                      return se;
                    },
                    set store(tn) {
                      se = tn;
                    }
                  });
                  var jr = z(wr, 2);
                  rd(jr, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return C();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return D();
                    },
                    get onnodepointerleave() {
                      return A();
                    },
                    get onnodedrag() {
                      return E();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return se;
                    },
                    set store(tn) {
                      se = tn;
                    }
                  });
                  var Zi = z(jr, 2);
                  ld(Zi, {
                    get onselectionclick() {
                      return q();
                    },
                    get onselectioncontextmenu() {
                      return Q();
                    },
                    get onnodedrag() {
                      return E();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return se;
                    },
                    set store(tn) {
                      se = tn;
                    }
                  }), be(2), V(tr, bn);
                },
                $$slots: { default: !0 }
              });
              var Ct = z(Qe, 2);
              const at = /* @__PURE__ */ S(() => !!(se.selectionRect && se.selectionRectMode === "user")), Bt = /* @__PURE__ */ S(() => se.selectionRect?.width), Kr = /* @__PURE__ */ S(() => se.selectionRect?.height), yn = /* @__PURE__ */ S(() => se.selectionRect?.x), wn = /* @__PURE__ */ S(() => se.selectionRect?.y);
              ya(Ct, {
                get isVisible() {
                  return c(at);
                },
                get width() {
                  return c(Bt);
                },
                get height() {
                  return c(Kr);
                },
                get x() {
                  return c(yn);
                },
                get y() {
                  return c(wn);
                }
              }), V(me, dt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var We = z(et, 2);
      dd(We, {
        get proOptions() {
          return o();
        },
        get position() {
          return ue();
        }
      });
      var Ye = z(We, 2);
      Qc(Ye, {
        get store() {
          return se;
        }
      });
      var Rt = z(Ye, 2);
      rt(Rt, () => ie() ?? pt), V(K, Ae);
    },
    $$slots: { default: !0 }
  }), ge({
    get width() {
      return n();
    },
    set width(K) {
      n(K), m();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), m();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(K) {
      u(K), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), m();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(K = 1) {
      p(K), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(K) {
      g(K), m();
    },
    get onmove() {
      return h();
    },
    set onmove(K) {
      h(K), m();
    },
    get oninit() {
      return w();
    },
    set oninit(K) {
      w(K), m();
    },
    get onnodeclick() {
      return C();
    },
    set onnodeclick(K) {
      C(K), m();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(K) {
      b(K), m();
    },
    get onnodedrag() {
      return E();
    },
    set onnodedrag(K) {
      E(K), m();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), m();
    },
    get onnodedragstop() {
      return $();
    },
    set onnodedragstop(K) {
      $(K), m();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(K) {
      k(K), m();
    },
    get onnodepointermove() {
      return D();
    },
    set onnodepointermove(K) {
      D(K), m();
    },
    get onnodepointerleave() {
      return A();
    },
    set onnodepointerleave(K) {
      A(K), m();
    },
    get onselectionclick() {
      return q();
    },
    set onselectionclick(K) {
      q(K), m();
    },
    get onselectioncontextmenu() {
      return Q();
    },
    set onselectioncontextmenu(K) {
      Q(K), m();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(K) {
      j(K), m();
    },
    get onselectionend() {
      return O();
    },
    set onselectionend(K) {
      O(K), m();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(K) {
      _(K), m();
    },
    get onedgecontextmenu() {
      return H();
    },
    set onedgecontextmenu(K) {
      H(K), m();
    },
    get onedgepointerenter() {
      return v();
    },
    set onedgepointerenter(K) {
      v(K), m();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(K) {
      P(K), m();
    },
    get onpaneclick() {
      return L();
    },
    set onpaneclick(K) {
      L(K), m();
    },
    get onpanecontextmenu() {
      return T();
    },
    set onpanecontextmenu(K) {
      T(K), m();
    },
    get panOnScrollMode() {
      return R();
    },
    set panOnScrollMode(K = cn.Free) {
      R(K), m();
    },
    get preventScrolling() {
      return N();
    },
    set preventScrolling(K = !0) {
      N(K), m();
    },
    get zoomOnScroll() {
      return Z();
    },
    set zoomOnScroll(K = !0) {
      Z(K), m();
    },
    get zoomOnDoubleClick() {
      return X();
    },
    set zoomOnDoubleClick(K = !0) {
      X(K), m();
    },
    get zoomOnPinch() {
      return G();
    },
    set zoomOnPinch(K = !0) {
      G(K), m();
    },
    get panOnScroll() {
      return ae();
    },
    set panOnScroll(K = !1) {
      ae(K), m();
    },
    get panOnDrag() {
      return Y();
    },
    set panOnDrag(K = !0) {
      Y(K), m();
    },
    get selectionOnDrag() {
      return J();
    },
    set selectionOnDrag(K = !0) {
      J(K), m();
    },
    get connectionLineComponent() {
      return U();
    },
    set connectionLineComponent(K) {
      U(K), m();
    },
    get connectionLineStyle() {
      return te();
    },
    set connectionLineStyle(K) {
      te(K), m();
    },
    get connectionLineContainerStyle() {
      return F();
    },
    set connectionLineContainerStyle(K) {
      F(K), m();
    },
    get connectionLineType() {
      return ye();
    },
    set connectionLineType(K = $n.Bezier) {
      ye(K), m();
    },
    get attributionPosition() {
      return ue();
    },
    set attributionPosition(K) {
      ue(K), m();
    },
    get children() {
      return ie();
    },
    set children(K) {
      ie(K), m();
    },
    get nodes() {
      return re();
    },
    set nodes(K = []) {
      re(K), m();
    },
    get edges() {
      return ce();
    },
    set edges(K = []) {
      ce(K), m();
    },
    get viewport() {
      return oe();
    },
    set viewport(K = void 0) {
      oe(K), m();
    }
  });
}
le(
  pd,
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
function gd(e, t) {
  pe(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Pe(Fc({ props: {}, nodes: [], edges: [] }));
  Or(wi, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      W(r, s);
    }
  }), Pi(() => {
    c(r).reset();
  });
  var o = Me(), i = fe(o);
  return rt(i, () => n() ?? pt), V(e, o), ge({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
le(gd, { children: {} }, [], [], !0);
var Am = /* @__PURE__ */ ee("<button><!></button>");
function eo(e, t) {
  pe(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), u = y(t, "children", 7), d = /* @__PURE__ */ Ze(t, [
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
  var p = Am();
  ut(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [on]: g
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
  var f = B(p);
  return rt(f, () => u() ?? pt), I(p), V(e, p), ge({
    get class() {
      return n();
    },
    set class(g) {
      n(g), m();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), m();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), m();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), m();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), m();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), m();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), m();
    },
    get children() {
      return u();
    },
    set children(g) {
      u(g), m();
    }
  });
}
le(
  eo,
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
function hd(e) {
  var t = Hm();
  V(e, t);
}
le(hd, {}, [], [], !0);
var Im = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function vd(e) {
  var t = Im();
  V(e, t);
}
le(vd, {}, [], [], !0);
var Rm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function md(e) {
  var t = Rm();
  V(e, t);
}
le(md, {}, [], [], !0);
var Bm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function yd(e) {
  var t = Bm();
  V(e, t);
}
le(yd, {}, [], [], !0);
var qm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function wd(e) {
  var t = qm();
  V(e, t);
}
le(wd, {}, [], [], !0);
var Zm = /* @__PURE__ */ ee("<!> <!>", 1), Km = /* @__PURE__ */ ee("<!> <!> <!> <!> <!> <!>", 1);
function bd(e, t) {
  pe(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), u = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), p = y(t, "buttonColor", 7), f = y(t, "buttonColorHover", 7), g = y(t, "buttonBorderColor", 7), h = y(t, "fitViewOptions", 7), w = y(t, "children", 7), C = y(t, "before", 7), b = y(t, "after", 7), E = /* @__PURE__ */ Ze(t, [
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
  ]), x = /* @__PURE__ */ S(Qt);
  const $ = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let k = /* @__PURE__ */ S(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), D = /* @__PURE__ */ S(() => c(x).viewport.zoom <= c(x).minZoom), A = /* @__PURE__ */ S(() => c(x).viewport.zoom >= c(x).maxZoom), q = /* @__PURE__ */ S(() => c(x).ariaLabelConfig), Q = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    c(x).zoomIn();
  }, O = () => {
    c(x).zoomOut();
  }, _ = () => {
    c(x).fitView(h());
  }, H = () => {
    let P = !c(k);
    c(x).nodesDraggable = P, c(x).nodesConnectable = P, c(x).elementsSelectable = P;
  }, v = /* @__PURE__ */ S(() => [
    "svelte-flow__controls",
    c(Q),
    l()
  ]);
  return To(e, je(
    {
      get class() {
        return c(v);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return c(q)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => E,
    {
      children: (P, L) => {
        var T = Km(), R = fe(T);
        {
          var N = (ue) => {
            var ie = Me(), re = fe(ie);
            rt(re, C), V(ue, ie);
          };
          de(R, (ue) => {
            C() && ue(N);
          });
        }
        var Z = z(R, 2);
        {
          var X = (ue) => {
            var ie = Zm(), re = fe(ie);
            eo(re, je(
              {
                onclick: j,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return c(q)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return c(A);
                }
              },
              () => $,
              {
                children: (oe, ve) => {
                  hd(oe);
                },
                $$slots: { default: !0 }
              }
            ));
            var ce = z(re, 2);
            eo(ce, je(
              {
                onclick: O,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return c(q)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return c(D);
                }
              },
              () => $,
              {
                children: (oe, ve) => {
                  vd(oe);
                },
                $$slots: { default: !0 }
              }
            )), V(ue, ie);
          };
          de(Z, (ue) => {
            o() && ue(X);
          });
        }
        var G = z(Z, 2);
        {
          var ae = (ue) => {
            eo(ue, je(
              {
                class: "svelte-flow__controls-fitview",
                onclick: _,
                get title() {
                  return c(q)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.fitView.ariaLabel"];
                }
              },
              () => $,
              {
                children: (ie, re) => {
                  md(ie);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          de(G, (ue) => {
            i() && ue(ae);
          });
        }
        var Y = z(G, 2);
        {
          var J = (ue) => {
            eo(ue, je(
              {
                class: "svelte-flow__controls-interactive",
                onclick: H,
                get title() {
                  return c(q)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(q)["controls.interactive.ariaLabel"];
                }
              },
              () => $,
              {
                children: (ie, re) => {
                  var ce = Me(), oe = fe(ce);
                  {
                    var ve = (_e) => {
                      wd(_e);
                    }, se = (_e) => {
                      yd(_e);
                    };
                    de(oe, (_e) => {
                      c(k) ? _e(ve) : _e(se, !1);
                    });
                  }
                  V(ie, ce);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          de(Y, (ue) => {
            s() && ue(J);
          });
        }
        var U = z(Y, 2);
        {
          var te = (ue) => {
            var ie = Me(), re = fe(ie);
            rt(re, w), V(ue, ie);
          };
          de(U, (ue) => {
            w() && ue(te);
          });
        }
        var F = z(U, 2);
        {
          var ye = (ue) => {
            var ie = Me(), re = fe(ie);
            rt(re, b), V(ue, ie);
          };
          de(F, (ue) => {
            b() && ue(ye);
          });
        }
        V(P, T);
      },
      $$slots: { default: !0 }
    }
  )), ge({
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), m();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), m();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), m();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), m();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), m();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(P) {
      u(P), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), m();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(P) {
      p(P), m();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), m();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(P) {
      g(P), m();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(P) {
      h(P), m();
    },
    get children() {
      return w();
    },
    set children(P) {
      w(P), m();
    },
    get before() {
      return C();
    },
    set before(P) {
      C(P), m();
    },
    get after() {
      return b();
    },
    set after(P) {
      b(P), m();
    }
  });
}
le(
  bd,
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
var jm = /* @__PURE__ */ we("<circle></circle>");
function xd(e, t) {
  pe(t, !0);
  let n = y(t, "radius", 7), r = y(t, "class", 7);
  var o = jm();
  return Se(() => {
    $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), Dt(o, 0, zn(["svelte-flow__background-pattern", "dots", r()]));
  }), V(e, o), ge({
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
le(xd, { radius: {}, class: {} }, [], [], !0);
var Wm = /* @__PURE__ */ we("<path></path>");
function $d(e, t) {
  pe(t, !0);
  let n = y(t, "lineWidth", 7), r = y(t, "dimensions", 7), o = y(t, "variant", 7), i = y(t, "class", 7);
  var s = Wm();
  return Se(() => {
    $e(s, "stroke-width", n()), $e(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Dt(s, 0, zn(["svelte-flow__background-pattern", o(), i()]));
  }), V(e, s), ge({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), m();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), m();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), m();
    }
  });
}
le($d, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Ym = {
  [_n.Dots]: 1,
  [_n.Lines]: 1,
  [_n.Cross]: 6
};
var Fm = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function kd(e, t) {
  pe(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => _n.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), u = y(t, "patternClass", 7), d = y(t, "class", 7), p = /* @__PURE__ */ S(Qt), f = /* @__PURE__ */ S(() => r() === _n.Dots), g = /* @__PURE__ */ S(() => r() === _n.Cross), h = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ S(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), C = /* @__PURE__ */ S(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ S(() => (i() ?? Ym[r()]) * c(p).viewport.zoom), E = /* @__PURE__ */ S(() => c(g) ? [c(b), c(b)] : c(C)), x = /* @__PURE__ */ S(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(E)[0] / 2,
    c(E)[1] / 2
  ]);
  var $ = Fm();
  let k;
  var D = B($), A = B(D);
  {
    var q = (O) => {
      const _ = /* @__PURE__ */ S(() => c(b) / 2);
      xd(O, {
        get radius() {
          return c(_);
        },
        get class() {
          return u();
        }
      });
    }, Q = (O) => {
      $d(O, {
        get dimensions() {
          return c(E);
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
    de(A, (O) => {
      c(f) ? O(q) : O(Q, !1);
    });
  }
  I(D);
  var j = z(D);
  return I($), Se(
    (O) => {
      Dt($, 0, zn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), k = kt($, "", k, O), $e(D, "id", c(w)), $e(D, "x", c(p).viewport.x % c(C)[0]), $e(D, "y", c(p).viewport.y % c(C)[1]), $e(D, "width", c(C)[0]), $e(D, "height", c(C)[1]), $e(D, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), $e(j, "fill", `url(#${c(w)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), V(e, $), ge({
    get id() {
      return n();
    },
    set id(O) {
      n(O), m();
    },
    get variant() {
      return r();
    },
    set variant(O = _n.Dots) {
      r(O), m();
    },
    get gap() {
      return o();
    },
    set gap(O = 20) {
      o(O), m();
    },
    get size() {
      return i();
    },
    set size(O) {
      i(O), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(O = 1) {
      s(O), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(O) {
      a(O), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(O) {
      l(O), m();
    },
    get patternClass() {
      return u();
    },
    set patternClass(O) {
      u(O), m();
    },
    get class() {
      return d();
    },
    set class(O) {
      d(O), m();
    }
  });
}
le(
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
var Xm = /* @__PURE__ */ we("<rect></rect>");
function Cd(e, t) {
  pe(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), u = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), p = y(t, "selected", 7), f = y(t, "class", 7);
  var g = Xm();
  let h, w;
  return Se(
    (C, b) => {
      h = Dt(g, 0, zn(["svelte-flow__minimap-node", f()]), null, h, C), $e(g, "x", n()), $e(g, "y", r()), $e(g, "rx", s()), $e(g, "ry", s()), $e(g, "width", o()), $e(g, "height", i()), $e(g, "shape-rendering", l()), w = kt(g, "", w, b);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), V(e, g), ge({
    get x() {
      return n();
    },
    set x(C) {
      n(C), m();
    },
    get y() {
      return r();
    },
    set y(C) {
      r(C), m();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), m();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(C = 5) {
      s(C), m();
    },
    get color() {
      return a();
    },
    set color(C) {
      a(C), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(C) {
      l(C), m();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(C) {
      u(C), m();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(C = 2) {
      d(C), m();
    },
    get selected() {
      return p();
    },
    set selected(C) {
      p(C), m();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), m();
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
function Um(e, t) {
  const n = N0({
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
var Jm = /* @__PURE__ */ we("<title> </title>"), Gm = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Qm = /* @__PURE__ */ ee('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function _d(e, t) {
  pe(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), u = y(t, "bgColor", 7), d = y(t, "maskColor", 7), p = y(t, "maskStrokeColor", 7), f = y(t, "maskStrokeWidth", 7), g = y(t, "width", 7, 200), h = y(t, "height", 7, 150), w = y(t, "pannable", 7, !0), C = y(t, "zoomable", 7, !0), b = y(t, "inversePan", 7), E = y(t, "zoomStep", 7), x = y(t, "class", 7), $ = /* @__PURE__ */ Ze(t, [
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
  ]), k = /* @__PURE__ */ S(Qt), D = /* @__PURE__ */ S(() => c(k).ariaLabelConfig);
  const A = i() === void 0 ? void 0 : ns(i()), q = ns(o()), Q = ns(s()), j = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let O = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${c(k).flowId}`), _ = /* @__PURE__ */ S(() => ({
    x: -c(k).viewport.x / c(k).viewport.zoom,
    y: -c(k).viewport.y / c(k).viewport.zoom,
    width: c(k).width / c(k).viewport.zoom,
    height: c(k).height / c(k).viewport.zoom
  })), H = /* @__PURE__ */ S(() => c(k).nodeLookup.size > 0 ? bc(Do(c(k).nodeLookup, { filter: (F) => !F.hidden }), c(_)) : c(_)), v = /* @__PURE__ */ S(() => c(H).width / g()), P = /* @__PURE__ */ S(() => c(H).height / h()), L = /* @__PURE__ */ S(() => Math.max(c(v), c(P))), T = /* @__PURE__ */ S(() => c(L) * g()), R = /* @__PURE__ */ S(() => c(L) * h()), N = /* @__PURE__ */ S(() => 5 * c(L)), Z = /* @__PURE__ */ S(() => c(H).x - (c(T) - c(H).width) / 2 - c(N)), X = /* @__PURE__ */ S(() => c(H).y - (c(R) - c(H).height) / 2 - c(N)), G = /* @__PURE__ */ S(() => c(T) + c(N) * 2), ae = /* @__PURE__ */ S(() => c(R) + c(N) * 2);
  const Y = () => c(L);
  var J = Qm(), U = fe(J);
  const te = /* @__PURE__ */ S(() => ["svelte-flow__minimap", x()]);
  return qp(U, () => ({ "--xy-minimap-background-color-props": u() })), To(U.lastChild, je(
    {
      get position() {
        return n();
      },
      get class() {
        return c(te);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => $,
    {
      children: (F, ye) => {
        var ue = Me(), ie = fe(ue);
        {
          var re = (ce) => {
            var oe = Gm();
            let ve;
            var se = B(oe);
            {
              var _e = (Ae) => {
                var Re = Jm(), et = B(Re, !0);
                I(Re), Se(() => {
                  $e(Re, "id", c(O)), Ke(et, r() ?? c(D)["minimap.ariaLabel"]);
                }), V(Ae, Re);
              };
              de(se, (Ae) => {
                (r() ?? c(D)["minimap.ariaLabel"]) && Ae(_e);
              });
            }
            var K = z(se);
            yt(K, 17, () => c(k).nodes, (Ae) => Ae.id, (Ae, Re) => {
              var et = Me();
              const We = /* @__PURE__ */ S(() => c(k).nodeLookup.get(c(Re).id));
              var Ye = fe(et);
              {
                var Rt = (Ie) => {
                  const ct = /* @__PURE__ */ S(() => er(c(We))), me = /* @__PURE__ */ S(() => A?.(c(We))), Fe = /* @__PURE__ */ S(() => q(c(We))), dt = /* @__PURE__ */ S(() => Q(c(We)));
                  Cd(Ie, je(
                    {
                      get x() {
                        return c(We).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(We).internals.positionAbsolute.y;
                      }
                    },
                    () => c(ct),
                    {
                      get selected() {
                        return c(We).selected;
                      },
                      get color() {
                        return c(me);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(Fe);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return j;
                      },
                      get class() {
                        return c(dt);
                      }
                    }
                  ));
                };
                de(Ye, (Ie) => {
                  c(We) && xc(c(We)) && Ie(Rt);
                });
              }
              V(Ae, et);
            });
            var Ge = z(K);
            I(oe), vt(oe, (Ae, Re) => Um?.(Ae, Re), () => ({
              store: c(k),
              panZoom: c(k).panZoom,
              getViewScale: Y,
              translateExtent: c(k).translateExtent,
              width: c(k).width,
              height: c(k).height,
              inversePan: b(),
              zoomStep: E(),
              pannable: w(),
              zoomable: C()
            })), Se(
              (Ae) => {
                $e(oe, "width", g()), $e(oe, "height", h()), $e(oe, "viewBox", `${c(Z) ?? ""} ${c(X) ?? ""} ${c(G) ?? ""} ${c(ae) ?? ""}`), $e(oe, "aria-labelledby", c(O)), ve = kt(oe, "", ve, Ae), $e(Ge, "d", `M${c(Z) - c(N)},${c(X) - c(N)}h${c(G) + c(N) * 2}v${c(ae) + c(N) * 2}h${-c(G) - c(N) * 2}z
      M${c(_).x ?? ""},${c(_).y ?? ""}h${c(_).width ?? ""}v${c(_).height ?? ""}h${-c(_).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(L) : void 0
                })
              ]
            ), V(ce, oe);
          };
          de(ie, (ce) => {
            c(k).panZoom && ce(re);
          });
        }
        V(F, ue);
      },
      $$slots: { default: !0 }
    }
  )), I(U), V(e, J), ge({
    get position() {
      return n();
    },
    set position(F = "bottom-right") {
      n(F), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(F) {
      r(F), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(F = "transparent") {
      o(F), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(F) {
      i(F), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(F = "") {
      s(F), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(F = 5) {
      a(F), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(F = 2) {
      l(F), m();
    },
    get bgColor() {
      return u();
    },
    set bgColor(F) {
      u(F), m();
    },
    get maskColor() {
      return d();
    },
    set maskColor(F) {
      d(F), m();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(F) {
      p(F), m();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(F) {
      f(F), m();
    },
    get width() {
      return g();
    },
    set width(F = 200) {
      g(F), m();
    },
    get height() {
      return h();
    },
    set height(F = 150) {
      h(F), m();
    },
    get pannable() {
      return w();
    },
    set pannable(F = !0) {
      w(F), m();
    },
    get zoomable() {
      return C();
    },
    set zoomable(F = !0) {
      C(F), m();
    },
    get inversePan() {
      return b();
    },
    set inversePan(F) {
      b(F), m();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(F) {
      E(F), m();
    },
    get class() {
      return x();
    },
    set class(F) {
      x(F), m();
    }
  });
}
le(
  _d,
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
var e2 = /* @__PURE__ */ ee("<div><!></div>");
function Sd(e, t) {
  pe(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => xe.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ Ze(t, [
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
  const u = Qt(), { getNodesBounds: d } = gt(), p = jn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    ($, k) => {
      const D = u.nodeLookup.get(k);
      return D && $.push(D), $;
    },
    []
  ))), g = /* @__PURE__ */ S(() => {
    const $ = d(c(f));
    return $ ? g0($, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ S(() => c(f).length === 0 ? 1 : Math.max(...c(f).map(($) => ($.internals.z || 5) + 1))), w = /* @__PURE__ */ S(() => u.nodes.filter(($) => $.selected).length), C = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(w) === 1);
  var b = Me(), E = fe(b);
  {
    var x = ($) => {
      var k = e2();
      ut(
        k,
        (A, q) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": A,
          ...l,
          [on]: q
        }),
        [
          () => c(f).reduce((A, q) => `${A}${q.id} `, "").trim(),
          () => ({
            display: Bc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var D = B(k);
      rt(D, () => a() ?? pt), I(k), vt(k, (A, q) => Rc?.(A, q), () => "root"), V($, k);
    };
    de(E, ($) => {
      u.domNode && c(C) && c(f) && $(x);
    });
  }
  return V(e, b), ge({
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), m();
    },
    get position() {
      return r();
    },
    set position($ = xe.Top) {
      r($), m();
    },
    get align() {
      return o();
    },
    set align($ = "center") {
      o($), m();
    },
    get offset() {
      return i();
    },
    set offset($ = 10) {
      i($), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible($) {
      s($), m();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), m();
    }
  });
}
le(
  Sd,
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
function An(e) {
  const t = /* @__PURE__ */ S(Qt), n = /* @__PURE__ */ S(() => c(t).nodes), r = /* @__PURE__ */ S(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!C0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Tl = "tinyflow-component";
class t2 {
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
    const t = document.createElement(Tl);
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
    const n = document.createElement(Tl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const n2 = () => {
  let e = /* @__PURE__ */ Pe([]), t = /* @__PURE__ */ Pe([]), n = /* @__PURE__ */ Pe({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      W(e, r), W(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      W(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      W(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      W(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      W(e, [...c(e), r]);
    },
    removeNode: (r) => {
      W(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      W(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      W(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      W(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      W(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      W(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      W(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      W(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      W(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      W(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ue = n2();
var r2 = /* @__PURE__ */ ee("<button><!></button>");
function De(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ Ze(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = r2();
  ut(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = B(i);
  return rt(s, () => n() ?? pt), I(i), V(e, i), ge({
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    },
    get primary() {
      return r();
    },
    set primary(a) {
      r(a), m();
    }
  });
}
le(De, { children: {}, primary: {} }, [], [], !0);
var o2 = /* @__PURE__ */ ee("<input/>");
function Ed(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = o2();
  ln(r), ut(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), V(e, r), ge();
}
le(Ed, {}, [], [], !0);
var i2 = /* @__PURE__ */ ee('<div><input type="hidden"/> <!> <!></div>');
const s2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Pd(e, t) {
  pe(t, !0), He(e, s2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ Ze(t, [
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
  var l = i2();
  ut(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = B(l);
  ln(u);
  var d = z(u, 2);
  st(d, {
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
  return De(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      be();
      var h = Ee();
      Se(() => Ke(h, i())), V(f, h);
    },
    $$slots: { default: !0 }
  }), I(l), Se(() => Xo(u, o())), V(e, l), ge({
    get placeholder() {
      return n();
    },
    set placeholder(f) {
      n(f), m();
    },
    get label() {
      return r();
    },
    set label(f) {
      r(f), m();
    },
    get value() {
      return o();
    },
    set value(f) {
      o(f), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(f = "选择...") {
      i(f), m();
    },
    get onChosen() {
      return s();
    },
    set onChosen(f) {
      s(f), m();
    }
  });
}
le(
  Pd,
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
var a2 = /* @__PURE__ */ ee("<input/>");
function st(e, t) {
  pe(t, !0);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = a2();
  ln(r), ut(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), V(e, r), ge();
}
le(st, {}, [], [], !0);
var l2 = /* @__PURE__ */ ee("<textarea></textarea>");
function Je(e, t) {
  pe(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = l2();
  return Sp(o), ut(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), V(e, o), ge({
    get value() {
      return n();
    },
    set value(i) {
      n(i), m();
    }
  });
}
le(Je, { value: {} }, [], [], !0);
var u2 = /* @__PURE__ */ ee('<div role="button"><!></div>'), c2 = /* @__PURE__ */ ee("<div></div>");
function Ld(e, t) {
  const n = Xa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Xa(n, ["items", "onChange", "activeIndex"]);
  pe(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  Au();
  var l = c2();
  return ut(l, () => ({
    ...r,
    class: `tf-tabs ${Us(r), ft(() => r.class) ?? ""}`
  })), yt(l, 5, o, Nr, (u, d, p) => {
    var f = u2();
    $e(f, "tabindex", p), f.__click = () => a(c(d), p), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(c(d), p));
    };
    var g = B(f);
    {
      var h = (C) => {
        var b = Ee();
        Se(() => Ke(b, (c(d), ft(() => c(d).label)))), V(C, b);
      }, w = (C) => {
        var b = Me(), E = fe(b);
        rt(E, () => (c(d), ft(() => c(d).label) ?? pt)), V(C, b);
      };
      de(g, (C) => {
        c(d), ft(() => typeof c(d).label == "string") ? C(h) : C(w, !1);
      });
    }
    I(f), Se(() => Dt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), V(u, f);
  }), I(l), V(e, l), ge({
    get items() {
      return o();
    },
    set items(u) {
      o(u), m();
    },
    get onChange() {
      return i();
    },
    set onChange(u) {
      i(u), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(u) {
      s(u), m();
    }
  });
}
Mn(["click", "keydown"]);
le(Ld, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var d2 = (e, t, n) => t(c(n)), f2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, p2 = /* @__PURE__ */ ee('<span class="tf-collapse-item-title-icon"><!></span>'), g2 = /* @__PURE__ */ ee('<div class="tf-collapse-item-description"><!></div>'), h2 = /* @__PURE__ */ ee('<div class="tf-collapse-item-content"><!></div>'), v2 = /* @__PURE__ */ ee('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), m2 = /* @__PURE__ */ ee("<div></div>");
const y2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Od(e, t) {
  pe(t, !0), He(e, y2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => jt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = m2();
  return yt(s, 21, n, Nr, (a, l, u) => {
    var d = v2(), p = B(d);
    $e(p, "tabindex", u), p.__click = [d2, i, l], p.__keydown = [f2, i, l];
    var f = B(p);
    {
      var g = ($) => {
        var k = p2(), D = B(k);
        Zn(D, {
          get target() {
            return c(l).icon;
          }
        }), I(k), V($, k);
      };
      de(f, ($) => {
        c(l).icon && $(g);
      });
    }
    var h = z(f, 2);
    Zn(h, {
      get target() {
        return c(l).title;
      }
    });
    var w = z(h, 2);
    I(p);
    var C = z(p, 2);
    {
      var b = ($) => {
        var k = g2(), D = B(k);
        Zn(D, {
          get target() {
            return c(l).description;
          }
        }), I(k), V($, k);
      };
      de(C, ($) => {
        c(l).description && $(b);
      });
    }
    var E = z(C, 2);
    {
      var x = ($) => {
        var k = h2(), D = B(k);
        Zn(D, {
          get target() {
            return c(l).content;
          }
        }), I(k), V($, k);
      };
      de(E, ($) => {
        o().includes(c(l).key) && $(x);
      });
    }
    I(d), Se(($) => Dt(w, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), V(a, d);
  }), I(s), Se(() => {
    kt(s, t.style), Dt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), V(e, s), ge({
    get items() {
      return n();
    },
    set items(a) {
      n(a), m();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), m();
    }
  });
}
Mn(["click", "keydown"]);
le(Od, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Zn(e, t) {
  pe(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Me(), o = fe(r);
  {
    var i = (a) => {
      var l = Me(), u = fe(l);
      rt(u, () => n() ?? pt), V(a, l);
    }, s = (a) => {
      var l = Me(), u = fe(l);
      Qs(u, n), V(a, l);
    };
    de(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return V(e, r), ge({
    get target() {
      return n();
    },
    set target(a) {
      n(a), m();
    }
  });
}
le(Zn, { target: {} }, [], [], !0);
var w2 = (e, t, n) => t(c(n)), b2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), x2 = /* @__PURE__ */ ee('<div class="tf-select-content-children"><!></div>'), $2 = /* @__PURE__ */ ee('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), k2 = /* @__PURE__ */ ee('<div class="tf-select-content nopan nodrag"><!></div>'), C2 = /* @__PURE__ */ ee("<!> <!>", 1), _2 = /* @__PURE__ */ ee('<div class="tf-select-input-placeholder"> </div>'), S2 = /* @__PURE__ */ ee('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), E2 = /* @__PURE__ */ ee("<div><!></div>");
function $t(e, t) {
  pe(t, !0);
  const n = (b, E = pt) => {
    var x = Me(), $ = fe(x);
    yt($, 19, E, (k, D) => `${D}_${k.value}`, (k, D) => {
      var A = $2(), q = fe(A);
      q.__click = [w2, h, D];
      var Q = B(q), j = B(Q);
      {
        var O = (P) => {
          var L = b2();
          V(P, L);
        };
        de(j, (P) => {
          c(D).children && c(D).children.length > 0 && P(O);
        });
      }
      I(Q);
      var _ = z(Q, 2);
      Zn(_, {
        get target() {
          return c(D).label;
        }
      }), I(q);
      var H = z(q, 2);
      {
        var v = (P) => {
          var L = x2(), T = B(L);
          n(T, () => c(D).children), I(L), V(P, L);
        };
        de(H, (P) => {
          c(D).children && c(D).children.length > 0 && (a() || u().includes(c(D).value)) && P(v);
        });
      }
      V(k, A);
    }), V(b, x);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), u = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), p = /* @__PURE__ */ Ze(t, [
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
  ]), f = /* @__PURE__ */ S(() => {
    const b = [], E = (x) => {
      for (let $ of x)
        i().length > 0 ? i().includes($.value) && b.push($) : s().includes($.value) && b.push($), $.children && $.children.length > 0 && E($.children);
    };
    return E(r()), b;
  }), g;
  function h(b) {
    g?.hide(), o()?.(b);
  }
  var w = E2();
  ut(w, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var C = B(w);
  return Ht(
    mr(C, {
      floating: (b) => {
        var E = k2(), x = B(E);
        n(x, r), I(E), V(b, E);
      },
      children: (b, E) => {
        var x = S2();
        ut(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var $ = B(x);
        yt(
          $,
          23,
          () => c(f),
          (k, D) => `${D}_${k.value}`,
          (k, D, A) => {
            var q = Me(), Q = fe(q);
            {
              var j = (_) => {
                var H = Me(), v = fe(H);
                {
                  var P = (L) => {
                    Zn(L, {
                      get target() {
                        return c(D).label;
                      }
                    });
                  };
                  de(v, (L) => {
                    c(A) === 0 && L(P);
                  });
                }
                V(_, H);
              }, O = (_) => {
                var H = C2(), v = fe(H);
                Zn(v, {
                  get target() {
                    return c(D).label;
                  }
                });
                var P = z(v, 2);
                {
                  var L = (T) => {
                    var R = Ee(",");
                    V(T, R);
                  };
                  de(P, (T) => {
                    c(A) < c(f).length - 1 && T(L);
                  });
                }
                V(_, H);
              };
              de(Q, (_) => {
                l() ? _(O, !1) : _(j);
              });
            }
            V(k, q);
          },
          (k) => {
            var D = _2(), A = B(D, !0);
            I(D), Se(() => Ke(A, d())), V(k, D);
          }
        ), I($), be(2), I(x), V(b, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => g = b,
    () => g
  ), I(w), V(e, w), ge({
    get items() {
      return r();
    },
    set items(b) {
      r(b), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(b) {
      o(b), m();
    },
    get value() {
      return i();
    },
    set value(b = []) {
      i(b), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(b = []) {
      s(b), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(b = !0) {
      a(b), m();
    },
    get multiple() {
      return l();
    },
    set multiple(b = !1) {
      l(b), m();
    },
    get expandValue() {
      return u();
    },
    set expandValue(b = []) {
      u(b), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(b) {
      d(b), m();
    }
  });
}
Mn(["click"]);
le(
  $t,
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
const yo = Math.min, Er = Math.max, bi = Math.round, dn = (e) => ({
  x: e,
  y: e
}), P2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, L2 = {
  start: "end",
  end: "start"
};
function Ss(e, t, n) {
  return Er(e, yo(t, n));
}
function Mo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pr(e) {
  return e.split("-")[0];
}
function zo(e) {
  return e.split("-")[1];
}
function Dd(e) {
  return e === "x" ? "y" : "x";
}
function wa(e) {
  return e === "y" ? "height" : "width";
}
const O2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Kn(e) {
  return O2.has(pr(e)) ? "y" : "x";
}
function ba(e) {
  return Dd(Kn(e));
}
function D2(e, t, n) {
  n === void 0 && (n = !1);
  const r = zo(e), o = ba(e), i = wa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = xi(s)), [s, xi(s)];
}
function N2(e) {
  const t = xi(e);
  return [Es(e), t, Es(t)];
}
function Es(e) {
  return e.replace(/start|end/g, (t) => L2[t]);
}
const Ml = ["left", "right"], zl = ["right", "left"], V2 = ["top", "bottom"], T2 = ["bottom", "top"];
function M2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zl : Ml : t ? Ml : zl;
    case "left":
    case "right":
      return t ? V2 : T2;
    default:
      return [];
  }
}
function z2(e, t, n, r) {
  const o = zo(e);
  let i = M2(pr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Es)))), i;
}
function xi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => P2[t]);
}
function A2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nd(e) {
  return typeof e != "number" ? A2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $i(e) {
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
  const i = Kn(t), s = ba(t), a = wa(s), l = pr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (zo(t)) {
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
  for (let w = 0; w < a.length; w++) {
    const {
      name: C,
      fn: b
    } = a[w], {
      x: E,
      y: x,
      data: $,
      reset: k
    } = await b({
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
    d = E ?? d, p = x ?? p, g = {
      ...g,
      [C]: {
        ...g[C],
        ...$
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: d,
      y: p
    } = Al(u, f, l)), w = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Vd(e, t) {
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
  } = Mo(t, e), h = Nd(g), w = a[f ? p === "floating" ? "reference" : "floating" : p], C = $i(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = $i(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: E,
    strategy: l
  }) : b);
  return {
    top: (C.top - $.top + h.top) / x.y,
    bottom: ($.bottom - C.bottom + h.bottom) / x.y,
    left: (C.left - $.left + h.left) / x.x,
    right: ($.right - C.right + h.right) / x.x
  };
}
const I2 = (e) => ({
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
    } = Mo(e, t) || {};
    if (u == null)
      return {};
    const p = Nd(d), f = {
      x: n,
      y: r
    }, g = ba(o), h = wa(g), w = await s.getDimensions(u), C = g === "y", b = C ? "top" : "left", E = C ? "bottom" : "right", x = C ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[g] - f[g] - i.floating[h], k = f[g] - i.reference[g], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let A = D ? D[x] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(D))) && (A = a.floating[x] || i.floating[h]);
    const q = $ / 2 - k / 2, Q = A / 2 - w[h] / 2 - 1, j = yo(p[b], Q), O = yo(p[E], Q), _ = j, H = A - w[h] - O, v = A / 2 - w[h] / 2 + q, P = Ss(_, v, H), L = !l.arrow && zo(o) != null && v !== P && i.reference[h] / 2 - (v < _ ? j : O) - w[h] / 2 < 0, T = L ? v < _ ? v - _ : v - H : 0;
    return {
      [g]: f[g] + T,
      data: {
        [g]: P,
        centerOffset: v - P - T,
        ...L && {
          alignmentOffset: T
        }
      },
      reset: L
    };
  }
}), R2 = function(e) {
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
        flipAlignment: w = !0,
        ...C
      } = Mo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = pr(o), E = Kn(a), x = pr(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), k = f || (x || !w ? [xi(a)] : N2(a)), D = h !== "none";
      !f && D && k.push(...z2(a, w, h, $));
      const A = [a, ...k], q = await Vd(t, C), Q = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && Q.push(q[b]), p) {
        const v = D2(o, s, $);
        Q.push(q[v[0]], q[v[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: Q
      }], !Q.every((v) => v <= 0)) {
        var O, _;
        const v = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, P = A[v];
        if (P && (!(p === "alignment" && E !== Kn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((T) => T.overflows[0] > 0 && Kn(T.placement) === E)))
          return {
            data: {
              index: v,
              overflows: j
            },
            reset: {
              placement: P
            }
          };
        let L = (_ = j.filter((T) => T.overflows[0] <= 0).sort((T, R) => T.overflows[1] - R.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var H;
              const T = (H = j.filter((R) => {
                if (D) {
                  const N = Kn(R.placement);
                  return N === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((N) => N > 0).reduce((N, Z) => N + Z, 0)]).sort((R, N) => R[1] - N[1])[0]) == null ? void 0 : H[0];
              T && (L = T);
              break;
            }
            case "initialPlacement":
              L = a;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
}, B2 = /* @__PURE__ */ new Set(["left", "top"]);
async function q2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pr(n), a = zo(n), l = Kn(n) === "y", u = B2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Mo(t, e);
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
const Z2 = function(e) {
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
      } = t, l = await q2(t, e);
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
}, K2 = function(e) {
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
          fn: (C) => {
            let {
              x: b,
              y: E
            } = C;
            return {
              x: b,
              y: E
            };
          }
        },
        ...l
      } = Mo(e, t), u = {
        x: n,
        y: r
      }, d = await Vd(t, l), p = Kn(pr(o)), f = Dd(p);
      let g = u[f], h = u[p];
      if (i) {
        const C = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", E = g + d[C], x = g - d[b];
        g = Ss(E, g, x);
      }
      if (s) {
        const C = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", E = h + d[C], x = h - d[b];
        h = Ss(E, h, x);
      }
      const w = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...w,
        data: {
          x: w.x - n,
          y: w.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function Ii() {
  return typeof window < "u";
}
function Zr(e) {
  return Td(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Hn(e) {
  var t;
  return (t = (Td(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Td(e) {
  return Ii() ? e instanceof Node || e instanceof Mt(e).Node : !1;
}
function Ut(e) {
  return Ii() ? e instanceof Element || e instanceof Mt(e).Element : !1;
}
function hn(e) {
  return Ii() ? e instanceof HTMLElement || e instanceof Mt(e).HTMLElement : !1;
}
function Hl(e) {
  return !Ii() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Mt(e).ShadowRoot;
}
const j2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ao(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !j2.has(o);
}
const W2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Y2(e) {
  return W2.has(Zr(e));
}
const F2 = [":popover-open", ":modal"];
function Ri(e) {
  return F2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const X2 = ["transform", "translate", "scale", "rotate", "perspective"], U2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], J2 = ["paint", "layout", "strict", "content"];
function xa(e) {
  const t = $a(), n = Ut(e) ? Jt(e) : e;
  return X2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || U2.some((r) => (n.willChange || "").includes(r)) || J2.some((r) => (n.contain || "").includes(r));
}
function G2(e) {
  let t = Un(e);
  for (; hn(t) && !Ir(t); ) {
    if (xa(t))
      return t;
    if (Ri(t))
      return null;
    t = Un(t);
  }
  return null;
}
function $a() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Q2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ir(e) {
  return Q2.has(Zr(e));
}
function Jt(e) {
  return Mt(e).getComputedStyle(e);
}
function Bi(e) {
  return Ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Un(e) {
  if (Zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hl(e) && e.host || // Fallback.
    Hn(e)
  );
  return Hl(t) ? t.host : t;
}
function Md(e) {
  const t = Un(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && Ao(t) ? t : Md(t);
}
function zd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Md(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Mt(o);
  return i ? (Ps(s), t.concat(s, s.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, zd(o, []));
}
function Ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ad(e) {
  const t = Jt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = hn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = bi(n) !== i || bi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Hd(e) {
  return Ut(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Hd(e);
  if (!hn(t))
    return dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ad(t);
  let s = (i ? bi(n.width) : n.width) / r, a = (i ? bi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const ey = /* @__PURE__ */ dn(0);
function Id(e) {
  const t = Mt(e);
  return !$a() || !t.visualViewport ? ey : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ty(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Mt(e) ? !1 : t;
}
function wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Hd(e);
  let s = dn(1);
  t && (r ? Ut(r) && (s = Pr(r)) : s = Pr(e));
  const a = ty(i, n, r) ? Id(i) : dn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Mt(i), g = r && Ut(r) ? Mt(r) : r;
    let h = f, w = Ps(h);
    for (; w && r && g !== h; ) {
      const C = Pr(w), b = w.getBoundingClientRect(), E = Jt(w), x = b.left + (w.clientLeft + parseFloat(E.paddingLeft)) * C.x, $ = b.top + (w.clientTop + parseFloat(E.paddingTop)) * C.y;
      l *= C.x, u *= C.y, d *= C.x, p *= C.y, l += x, u += $, h = Mt(w), w = Ps(h);
    }
  }
  return $i({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function ka(e, t) {
  const n = Bi(e).scrollLeft;
  return t ? t.left + n : wo(Hn(e)).left + n;
}
function Rd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ka(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function ny(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Hn(r), a = t ? Ri(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = dn(1);
  const d = dn(0), p = hn(r);
  if ((p || !p && !i) && ((Zr(r) !== "body" || Ao(s)) && (l = Bi(r)), hn(r))) {
    const g = wo(r);
    u = Pr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? Rd(s, l, !0) : dn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function ry(e) {
  return Array.from(e.getClientRects());
}
function oy(e) {
  const t = Hn(e), n = Bi(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ka(e);
  const a = -n.scrollTop;
  return Jt(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function iy(e, t) {
  const n = Mt(e), r = Hn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = $a();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const sy = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ay(e, t) {
  const n = wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = hn(e) ? Pr(e) : dn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
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
    r = iy(e, n);
  else if (t === "document")
    r = oy(Hn(e));
  else if (Ut(t))
    r = ay(t, n);
  else {
    const o = Id(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $i(r);
}
function Bd(e, t) {
  const n = Un(e);
  return n === t || !Ut(n) || Ir(n) ? !1 : Jt(n).position === "fixed" || Bd(n, t);
}
function ly(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = zd(e, []).filter((a) => Ut(a) && Zr(a) !== "body"), o = null;
  const i = Jt(e).position === "fixed";
  let s = i ? Un(e) : e;
  for (; Ut(s) && !Ir(s); ) {
    const a = Jt(s), l = xa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && sy.has(o.position) || Ao(s) && !l && Bd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Un(s);
  }
  return t.set(e, r), r;
}
function uy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ri(t) ? [] : ly(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Il(t, u, o);
    return l.top = Er(d.top, l.top), l.right = yo(d.right, l.right), l.bottom = yo(d.bottom, l.bottom), l.left = Er(d.left, l.left), l;
  }, Il(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function cy(e) {
  const {
    width: t,
    height: n
  } = Ad(e);
  return {
    width: t,
    height: n
  };
}
function dy(e, t, n) {
  const r = hn(t), o = Hn(t), i = n === "fixed", s = wo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  function u() {
    l.x = ka(o);
  }
  if (r || !r && !i)
    if ((Zr(t) !== "body" || Ao(o)) && (a = Bi(t)), r) {
      const g = wo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Rd(o, a) : dn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function rs(e) {
  return Jt(e).position === "static";
}
function Rl(e, t) {
  if (!hn(e) || Jt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Hn(e) === n && (n = n.ownerDocument.body), n;
}
function qd(e, t) {
  const n = Mt(e);
  if (Ri(e))
    return n;
  if (!hn(e)) {
    let o = Un(e);
    for (; o && !Ir(o); ) {
      if (Ut(o) && !rs(o))
        return o;
      o = Un(o);
    }
    return n;
  }
  let r = Rl(e, t);
  for (; r && Y2(r) && rs(r); )
    r = Rl(r, t);
  return r && Ir(r) && rs(r) && !xa(r) ? n : r || G2(e) || n;
}
const fy = async function(e) {
  const t = this.getOffsetParent || qd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: dy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function py(e) {
  return Jt(e).direction === "rtl";
}
const gy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ny,
  getDocumentElement: Hn,
  getClippingRect: uy,
  getOffsetParent: qd,
  getElementRects: fy,
  getClientRects: ry,
  getDimensions: cy,
  getScale: Pr,
  isElement: Ut,
  isRTL: py
}, hy = Z2, vy = K2, my = R2, yy = I2, wy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: gy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return H2(e, t, {
    ...o,
    platform: i
  });
}, by = ({
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
    const b = document.querySelector(e);
    if (b)
      e = b;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
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
  function p() {
    wy(e, u, {
      placement: r,
      middleware: [
        hy(o),
        // 手动偏移配置
        my(i),
        //自动翻转
        vy(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [yy({ element: d })] : []
      ]
    }).then(({ x: b, y: E, placement: x, middlewareData: $ }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${E}px`
      }), l) {
        const { x: k, y: D } = $.arrow, A = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: D != null ? `${D}px` : "",
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
  function w(b) {
    b.stopPropagation(), f ? h() : g();
  }
  function C(b) {
    u.contains(b.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, w);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, w);
      }), document.removeEventListener("click", C);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var xy = /* @__PURE__ */ ee('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mr(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Qn(() => (a = by({
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
  var u = xy(), d = B(u), p = B(d);
  rt(p, n), I(d), Ht(d, (h) => i = h, () => i);
  var f = z(d, 2), g = B(f);
  return rt(g, r), I(f), Ht(f, (h) => s = h, () => s), I(u), V(e, u), ge({
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
le(mr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ve(e, t) {
  pe(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = Me(), a = fe(s);
  return Wp(a, () => `h${r()}`, !1, (l, u) => {
    ut(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Me(), p = fe(d);
    rt(p, () => n() ?? pt), V(u, d);
  }), V(e, s), ge({
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
le(Ve, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var $y = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const ky = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ho(e, t) {
  pe(t, !0), He(e, ky);
  const n = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  De(e, je(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = $y();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), ge();
}
le(Ho, {}, [], [], !0);
const Cy = () => ({ deleteNode: (e) => {
  Ue.removeNode(e), Ue.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), gr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, _y = () => ({ copyNode: (e) => {
  const t = Ue.getNode(e);
  if (t) {
    const n = gr(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ue.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ot = () => jn("svelteflow__node_id"), Jn = () => jn("tinyflow_options");
var Sy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Ey = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Py = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Ly = /* @__PURE__ */ ee('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Oy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Dy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, Ny = /* @__PURE__ */ ee('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), Vy = /* @__PURE__ */ ee('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Ty = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), My = /* @__PURE__ */ ee('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), zy = /* @__PURE__ */ ee('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Ay = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Wt(e, t) {
  pe(t, !0), He(e, Ay);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), u = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), p = y(t, "allowSettingOfCondition", 7, !0), f = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: C, getNode: b } = gt(), E = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = Cy(), { copyNode: $ } = _y(), k = Jn(), D = () => {
    k.onNodeExecute?.(b(r()));
  };
  let A = ot();
  var q = zy(), Q = fe(q);
  {
    var j = (N) => {
      Sd(N, {
        get position() {
          return xe.Top;
        },
        align: "end",
        children: (Z, X) => {
          var G = My(), ae = B(G);
          {
            var Y = (ie) => {
              De(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (re, ce) => {
                  var oe = Sy();
                  V(re, oe);
                },
                $$slots: { default: !0 }
              });
            };
            de(ae, (ie) => {
              u() && ie(Y);
            });
          }
          var J = z(ae, 2);
          {
            var U = (ie) => {
              De(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (re, ce) => {
                  var oe = Ey();
                  V(re, oe);
                },
                $$slots: { default: !0 }
              });
            };
            de(J, (ie) => {
              l() && ie(U);
            });
          }
          var te = z(J, 2);
          {
            var F = (ie) => {
              De(ie, {
                class: "tf-node-toolbar-item",
                onclick: D,
                children: (re, ce) => {
                  var oe = Py();
                  V(re, oe);
                },
                $$slots: { default: !0 }
              });
            };
            de(te, (ie) => {
              a() && ie(F);
            });
          }
          var ye = z(te, 2);
          {
            var ue = (ie) => {
              mr(ie, {
                placement: "bottom",
                floating: (re) => {
                  var ce = Vy(), oe = B(ce), ve = z(B(oe));
                  st(ve, {
                    style: "width: 100%;",
                    onchange: (Ie) => {
                      const ct = Ie.target.value;
                      C(A, { title: ct });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(oe);
                  var se = z(oe, 2), _e = z(B(se));
                  Je(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ie) => {
                      const ct = Ie.target.value;
                      C(A, { description: ct });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(se);
                  var K = z(se, 2);
                  {
                    var Ge = (Ie) => {
                      var ct = Ly(), me = z(B(ct));
                      Je(me, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Fe) => {
                          const dt = Fe.target.value;
                          C(A, { condition: dt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(ct), V(Ie, ct);
                    };
                    de(K, (Ie) => {
                      p() && Ie(Ge);
                    });
                  }
                  var Ae = z(K, 2), Re = z(B(Ae), 2);
                  ln(Re), Re.__change = [Oy, C, A], I(Ae);
                  var et = z(Ae, 2), We = z(B(et), 2);
                  ln(We), We.__change = [Dy, C, A], I(et);
                  var Ye = z(et, 2);
                  {
                    var Rt = (Ie) => {
                      var ct = Ny(), me = fe(ct), Fe = z(B(me));
                      const dt = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                      Je(Fe, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(A, { loopIntervalMs: wn });
                        },
                        get value() {
                          return c(dt);
                        }
                      }), I(me);
                      var Qe = z(me, 2), Ct = z(B(Qe));
                      const at = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                      Je(Ct, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(A, { maxLoopCount: wn });
                        },
                        get value() {
                          return c(at);
                        }
                      }), I(Qe);
                      var Bt = z(Qe, 2), Kr = z(B(Bt));
                      Je(Kr, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(A, { loopBreakCondition: wn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(Bt), V(Ie, ct);
                    };
                    de(Ye, (Ie) => {
                      n().loopEnable && Ie(Rt);
                    });
                  }
                  I(ce), Se(() => {
                    gs(Re, !!n().async), gs(We, !!n().loopEnable);
                  }), V(re, ce);
                },
                children: (re, ce) => {
                  De(re, {
                    class: "tf-node-toolbar-item",
                    children: (oe, ve) => {
                      var se = Ty();
                      V(oe, se);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            de(ye, (ie) => {
              d() && ie(ue);
            });
          }
          I(G), V(Z, G);
        },
        $$slots: { default: !0 }
      });
    };
    de(Q, (N) => {
      (a() || l() || u()) && N(j);
    });
  }
  var O = z(Q, 2), _ = z(B(O), 2), H = B(_);
  Od(H, {
    get items() {
      return c(E);
    },
    get activeKeys() {
      return w;
    },
    onChange: (N, Z) => {
      C(r(), { expand: Z?.includes("key") }), h()?.(Z?.includes("key") ? "key" : "");
    }
  }), I(_), I(O);
  var v = z(O, 2);
  {
    var P = (N) => {
      Xn(N, {
        type: "target",
        get position() {
          return xe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    de(v, (N) => {
      g() && N(P);
    });
  }
  var L = z(v, 2);
  {
    var T = (N) => {
      Xn(N, {
        type: "source",
        get position() {
          return xe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    de(L, (N) => {
      f() && N(T);
    });
  }
  var R = z(L, 2);
  return rt(R, () => i() ?? pt), V(e, q), ge({
    get data() {
      return n();
    },
    set data(N) {
      n(N), m();
    },
    get id() {
      return r();
    },
    set id(N = "") {
      r(N), m();
    },
    get icon() {
      return o();
    },
    set icon(N) {
      o(N), m();
    },
    get handle() {
      return i();
    },
    set handle(N) {
      i(N), m();
    },
    get children() {
      return s();
    },
    set children(N) {
      s(N), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(N = !0) {
      a(N), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(N = !0) {
      l(N), m();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(N = !0) {
      u(N), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(N = !0) {
      d(N), m();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(N = !0) {
      p(N), m();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(N = !0) {
      f(N), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(N = !0) {
      g(N), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(N) {
      h(N), m();
    }
  });
}
Mn(["change"]);
le(
  Wt,
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
const Zd = [
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
var Iy = /* @__PURE__ */ ee('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Ry = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), By = /* @__PURE__ */ ee('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const qy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Kd(e, t) {
  pe(t, !0), He(e, qy);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = ot(), i = /* @__PURE__ */ S(() => An(o)), s = /* @__PURE__ */ S(() => ({
    ...n(),
    ...c(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = gt(), l = (k, D) => {
    a(o, (A) => {
      let q = A.data.parameters;
      return q[r()][k] = D, { parameters: q };
    });
  }, u = (k) => {
    const D = k.target.value;
    l("name", D);
  }, d = (k) => {
    const D = k.target.checked;
    l("required", D);
  }, p = (k) => {
    const D = k.value;
    D && l("dataType", D);
  };
  let f;
  const g = () => {
    a(o, (k) => {
      let D = k.data.parameters;
      return D.splice(r(), 1), { parameters: [...D] };
    }), f?.hide();
  };
  var h = By(), w = fe(h), C = B(w);
  st(C, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: u
  }), I(w);
  var b = z(w, 2), E = B(b);
  Ed(E, {
    get checked() {
      return c(s).required;
    },
    onchange: d
  }), I(b);
  var x = z(b, 2), $ = B(x);
  return Ht(
    mr($, {
      placement: "bottom",
      floating: (k) => {
        var D = Iy(), A = B(D), q = z(B(A));
        const Q = /* @__PURE__ */ S(() => c(s).dataType ? [c(s).dataType] : ["String"]);
        $t(q, {
          get items() {
            return Zd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return c(Q);
          }
        }), I(A);
        var j = z(A, 2), O = z(B(j));
        Je(O, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(s).defaultValue;
          },
          onchange: (L) => {
            const T = L.target.value;
            l("defaultValue", T);
          }
        }), I(j);
        var _ = z(j, 2), H = z(B(_));
        Je(H, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(s).description;
          },
          onchange: (L) => {
            const T = L.target.value;
            l("description", T);
          }
        }), I(_);
        var v = z(_, 2), P = B(v);
        De(P, {
          onclick: g,
          children: (L, T) => {
            be();
            var R = Ee("删除");
            V(L, R);
          },
          $$slots: { default: !0 }
        }), I(v), I(D), V(k, D);
      },
      children: (k, D) => {
        De(k, {
          class: "input-btn-more",
          children: (A, q) => {
            var Q = Ry();
            V(A, Q);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => f = k,
    () => f
  ), I(x), V(e, h), ge({
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), m();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), m();
    }
  });
}
le(Kd, { parameter: {}, index: {} }, [], [], !0);
var Zy = /* @__PURE__ */ ee('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Ky = /* @__PURE__ */ ee('<div class="none-params svelte-3n0wca">无输入参数</div>'), jy = /* @__PURE__ */ ee('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Wy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function jd(e, t) {
  pe(t, !0), He(e, Wy);
  let n = ot(), r = /* @__PURE__ */ S(() => An(n)), o = /* @__PURE__ */ S(() => [...c(r)?.current?.data?.parameters || []]);
  var i = jy(), s = B(i);
  {
    var a = (u) => {
      var d = Zy();
      be(4), V(u, d);
    };
    de(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = z(s, 2);
  yt(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      Kd(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = Ky();
      V(u, d);
    }
  ), I(i), V(e, i), ge();
}
le(jd, {}, [], [], !0);
const bo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = gr()), bo(t.children);
}), e), en = () => {
  const { updateNodeData: e } = gt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => bo(s?.children)) : bo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: gr()
        };
      }
      const i = [];
      Array.isArray(r) ? i.push(...r.map(o)) : i.push(o(r)), e(t, (s) => {
        let a = s.data[n];
        return a ? a.push(i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var Yy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Fy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ee('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Wd(e, t) {
  pe(t, !0), He(e, Uy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return Wt(e, je(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = Yy();
      V(s, a);
    },
    children: (s, a) => {
      var l = Xy(), u = fe(l), d = B(u);
      Ve(d, {
        level: 3,
        children: (g, h) => {
          be();
          var w = Ee("输入参数");
          V(g, w);
        },
        $$slots: { default: !0 }
      });
      var p = z(d, 2);
      De(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var w = Fy();
          V(g, w);
        },
        $$slots: { default: !0 }
      }), I(u);
      var f = z(u, 2);
      jd(f, {}), V(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ge({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
le(Wd, { data: {} }, [], [], !0);
const Yd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Yd(e, r.source, n));
}, Fd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Fd(r.children, t + "." + r.name, n)
})), Bl = (e, t, n) => {
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
          children: Fd(r, e.id, t)
        };
    }
  }
}, Xd = (e = !1) => {
  const t = ot(), n = An(t), r = /* @__PURE__ */ S(Qt), o = /* @__PURE__ */ S(() => c(r).nodes), i = /* @__PURE__ */ S(() => c(r).edges), s = /* @__PURE__ */ S(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = Bl(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Yd(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = Bl(p, f, u);
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
var Jy = /* @__PURE__ */ ee('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Gy = /* @__PURE__ */ ee('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Qy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ud(e, t) {
  pe(t, !0), He(e, Qy), Qn(() => {
    c(l).refType || g({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = ot(), a = /* @__PURE__ */ S(() => An(s)), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...c(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = gt(), d = (O, _) => {
    u(s, (H) => {
      let v = H.data?.[o()];
      return v[r()] = { ...v[r()], [O]: _ }, { [o()]: v };
    });
  }, p = (O, _) => {
    const H = _.target.value;
    d(O, H);
  }, f = (O) => {
    const _ = O.value;
    d("ref", _);
  }, g = (O) => {
    const _ = O.value;
    d("refType", _);
  };
  let h;
  const w = () => {
    u(s, (O) => {
      let _ = O.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), h?.hide();
  };
  let C = Xd(i());
  var b = Gy(), E = fe(b), x = B(E);
  const $ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  st(x, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c($);
    },
    oninput: (O) => p("name", O)
  }), I(E);
  var k = z(E, 2), D = B(k);
  {
    var A = (O) => {
      st(O, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, q = (O, _) => {
      {
        var H = (v) => {
          const P = /* @__PURE__ */ S(() => [c(l).ref]);
          $t(v, {
            get items() {
              return C.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(P);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        de(
          O,
          (v) => {
            c(l).refType !== "input" && v(H);
          },
          _
        );
      }
    };
    de(D, (O) => {
      c(l).refType === "fixed" ? O(A) : O(q, !1);
    });
  }
  I(k);
  var Q = z(k, 2), j = B(Q);
  return Ht(
    mr(j, {
      placement: "bottom",
      floating: (O) => {
        var _ = Jy(), H = B(_), v = z(B(H));
        const P = /* @__PURE__ */ S(() => c(l).refType ? [c(l).refType] : []);
        $t(v, {
          get items() {
            return Hy;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(P);
          },
          onSelect: g
        }), I(H);
        var L = z(H, 2), T = z(B(L));
        Je(T, {
          rows: 1,
          style: "width: 100%;",
          onchange: (G) => {
            p("defaultValue", G);
          },
          get value() {
            return c(l).defaultValue;
          }
        }), I(L);
        var R = z(L, 2), N = z(B(R));
        Je(N, {
          rows: 3,
          style: "width: 100%;",
          onchange: (G) => {
            p("description", G);
          },
          get value() {
            return c(l).description;
          }
        }), I(R);
        var Z = z(R, 2), X = B(Z);
        De(X, {
          onclick: w,
          children: (G, ae) => {
            be();
            var Y = Ee("删除");
            V(G, Y);
          },
          $$slots: { default: !0 }
        }), I(Z), I(_), V(O, _);
      },
      children: (O, _) => {
        Ho(O, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (O) => h = O,
    () => h
  ), I(Q), V(e, b), ge({
    get parameter() {
      return n();
    },
    set parameter(O) {
      n(O), m();
    },
    get index() {
      return r();
    },
    set index(O) {
      r(O), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(O) {
      o(O), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(O) {
      i(O), m();
    }
  });
}
le(
  Ud,
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
var ew = /* @__PURE__ */ ee('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), tw = /* @__PURE__ */ ee('<div class="none-params svelte-1sm1mgi"> </div>'), nw = /* @__PURE__ */ ee('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const rw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Pt(e, t) {
  pe(t, !0), He(e, rw);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = ot(), s = /* @__PURE__ */ S(() => An(i)), a = /* @__PURE__ */ S(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = nw(), u = B(l);
  {
    var d = (f) => {
      var g = ew();
      be(4), V(f, g);
    };
    de(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = z(u, 2);
  return yt(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      Ud(f, {
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
      var g = tw(), h = B(g, !0);
      I(g), Se(() => Ke(h, n())), V(f, g);
    }
  ), I(l), V(e, l), ge({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
      n(f), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), m();
    }
  });
}
le(Pt, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var ow = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), iw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ ee('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const aw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Jd(e, t) {
  pe(t, !0), He(e, aw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return Wt(e, je(
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
        var a = ow();
        V(s, a);
      },
      children: (s, a) => {
        var l = sw(), u = fe(l), d = B(u);
        Ve(d, {
          level: 3,
          children: (g, h) => {
            be();
            var w = Ee("输出参数");
            V(g, w);
          },
          $$slots: { default: !0 }
        });
        var p = z(d, 2);
        De(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var w = iw();
            V(g, w);
          },
          $$slots: { default: !0 }
        }), I(u);
        var f = z(u, 2);
        Pt(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), V(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
le(Jd, { data: {} }, [], [], !0);
const os = (e) => JSON.parse(JSON.stringify(e));
var lw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), uw = /* @__PURE__ */ ee('<div class="input-more-item svelte-1cfeest"><!></div>'), cw = /* @__PURE__ */ ee('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), dw = /* @__PURE__ */ ee('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const fw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Gd(e, t) {
  pe(t, !0), He(e, fw);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7), i = y(t, "placeholder", 7, "请输入参数值");
  let s = ot(), a = /* @__PURE__ */ S(() => An(s)), l = /* @__PURE__ */ S(() => {
    let v = c(a)?.current?.data?.[o()], P;
    if (v && r().length > 0) {
      let L = v;
      for (let T = 0; T < r().length; T++) {
        const R = r()[T];
        T == r().length - 1 ? P = L[R] : L = L[R].children;
      }
    }
    return { ...n(), ...P };
  });
  const { updateNodeData: u } = gt(), d = (v, P) => {
    u(s, (L) => {
      const T = L.data?.[o()];
      if (T && r().length > 0) {
        let R = T;
        for (let N = 0; N < r().length; N++) {
          const Z = r()[N];
          N == r().length - 1 ? R[Z] = { ...R[Z], [v]: P } : R = R[Z].children;
        }
      }
      return { [o()]: [...os(T)] };
    });
  }, p = (v, P) => {
    const L = P.target.value;
    d(v, L);
  }, f = (v) => {
    const P = v.value;
    d("dataType", P);
  };
  let g;
  const h = () => {
    u(s, (v) => {
      let P = v.data?.[o()];
      if (P && r().length > 0) {
        let L = P;
        for (let T = 0; T < r().length; T++) {
          const R = r()[T];
          T == r().length - 1 ? L.splice(R, 1) : L = L[R].children;
        }
      }
      return { [o()]: [...os(P)] };
    }), g?.hide();
  }, w = () => {
    u(s, (v) => {
      let P = v.data?.[o()];
      if (P && r().length > 0) {
        let L = P;
        for (let T = 0; T < r().length; T++) {
          const R = r()[T];
          T == r().length - 1 ? L[R].children ? L[R].children.push({ id: gr(), name: "newParam", dataType: "String" }) : L[R].children = [{ id: gr(), name: "newParam", dataType: "String" }] : L = L[R].children;
        }
      }
      return { [o()]: [...os(P)] };
    });
  };
  var C = dw(), b = fe(C), E = B(b);
  {
    var x = (v) => {
      var P = Me(), L = fe(P);
      yt(L, 17, r, Nr, (T, R) => {
        be();
        var N = Ee(" ");
        V(T, N);
      }), V(v, P);
    };
    de(E, (v) => {
      r().length > 1 && v(x);
    });
  }
  var $ = z(E, 2);
  const k = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  st($, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    get placeholder() {
      return i();
    },
    oninput: (v) => {
      p("name", v);
    },
    get disabled() {
      return c(k);
    }
  }), I(b);
  var D = z(b, 2), A = B(D);
  const q = /* @__PURE__ */ S(() => c(l).dataType ? [c(l).dataType] : []), Q = /* @__PURE__ */ S(() => c(l).dataTypeDisabled === !0);
  $t(A, {
    get items() {
      return Zd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(q);
    },
    get disabled() {
      return c(Q);
    },
    onSelect: f
  });
  var j = z(A, 2);
  {
    var O = (v) => {
      De(v, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (P, L) => {
          var T = lw();
          V(P, T);
        },
        $$slots: { default: !0 }
      });
    };
    de(j, (v) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && v(O);
    });
  }
  I(D);
  var _ = z(D, 2), H = B(_);
  return Ht(
    mr(H, {
      placement: "bottom",
      floating: (v) => {
        var P = cw(), L = B(P), T = z(B(L));
        const R = /* @__PURE__ */ S(() => c(l).defaultValue || "");
        Je(T, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(R);
          },
          onchange: (Y) => {
            p("defaultValue", Y);
          }
        }), I(L);
        var N = z(L, 2), Z = z(B(N));
        const X = /* @__PURE__ */ S(() => c(l).description || "");
        Je(Z, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(X);
          },
          onchange: (Y) => {
            p("description", Y);
          }
        }), I(N);
        var G = z(N, 2);
        {
          var ae = (Y) => {
            var J = uw(), U = B(J);
            De(U, {
              onclick: h,
              children: (te, F) => {
                be();
                var ye = Ee("删除");
                V(te, ye);
              },
              $$slots: { default: !0 }
            }), I(J), V(Y, J);
          };
          de(G, (Y) => {
            c(l).deleteDisabled !== !0 && Y(ae);
          });
        }
        I(P), V(v, P);
      },
      children: (v, P) => {
        Ho(v, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (v) => g = v,
    () => g
  ), I(_), V(e, C), ge({
    get parameter() {
      return n();
    },
    set parameter(v) {
      n(v), m();
    },
    get position() {
      return r();
    },
    set position(v) {
      r(v), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(v) {
      o(v), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(v = "请输入参数值") {
      i(v), m();
    }
  });
}
le(
  Gd,
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
var pw = /* @__PURE__ */ ee("<!> <!>", 1), gw = /* @__PURE__ */ ee('<div class="none-params svelte-1sm1mgi"> </div>'), hw = /* @__PURE__ */ ee('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vw = /* @__PURE__ */ ee('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const mw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  pe(t, !0), He(e, mw);
  const n = (g, h = pt, w = pt) => {
    var C = Me(), b = fe(C);
    yt(
      b,
      19,
      h,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, x, $) => {
        var k = pw(), D = fe(k);
        const A = /* @__PURE__ */ S(() => [...w(), c($)]);
        Gd(D, {
          get parameter() {
            return c(x);
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
        var q = z(D, 2);
        {
          var Q = (j) => {
            var O = /* @__PURE__ */ Ks(() => [...w(), c($)]);
            n(j, () => c(x).children, () => c(O));
          };
          de(q, (j) => {
            c(x).children && j(Q);
          });
        }
        V(E, k);
      },
      (E) => {
        var x = Me(), $ = fe(x);
        {
          var k = (D) => {
            var A = gw(), q = B(A, !0);
            I(A), Se(() => Ke(q, r())), V(D, A);
          };
          de($, (D) => {
            w().length === 0 && D(k);
          });
        }
        V(E, x);
      }
    ), V(g, C);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs"), i = y(t, "placeholder", 7, "请输入参数名称");
  let s = ot(), a = /* @__PURE__ */ S(() => An(s)), l = /* @__PURE__ */ S(() => [...c(a)?.current?.data?.[o()] || []]);
  var u = vw(), d = B(u);
  {
    var p = (g) => {
      var h = hw();
      be(4), V(g, h);
    };
    de(d, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var f = z(d, 2);
  return n(f, () => c(l) || [], () => []), I(u), V(e, u), ge({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(g = "无输出参数") {
      r(g), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(g = "outputDefs") {
      o(g), m();
    },
    get placeholder() {
      return i();
    },
    set placeholder(g = "请输入参数名称") {
      i(g), m();
    }
  });
}
le(In, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var yw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ww = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), xw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), $w = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), kw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ee('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const _w = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Qd(e, t) {
  pe(t, !0), He(e, _w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Jn();
  let a = /* @__PURE__ */ Pe(jt([]));
  Qn(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = gt(), u = (d) => {
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
  return nt(() => {
    n().outType || u("text");
  }), Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = yw();
        V(d, p);
      },
      children: (d, p) => {
        var f = Cw(), g = fe(f), h = B(g);
        Ve(h, {
          level: 3,
          children: (oe, ve) => {
            be();
            var se = Ee("输入参数");
            V(oe, se);
          },
          $$slots: { default: !0 }
        });
        var w = z(h, 2);
        De(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (oe, ve) => {
            var se = ww();
            V(oe, se);
          },
          $$slots: { default: !0 }
        }), I(g);
        var C = z(g, 2);
        Pt(C, {});
        var b = z(C, 2);
        Ve(b, {
          level: 3,
          mt: "10px",
          children: (oe, ve) => {
            be();
            var se = Ee("模型设置");
            V(oe, se);
          },
          $$slots: { default: !0 }
        });
        var E = z(b, 4), x = B(E);
        const $ = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
        $t(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (oe) => {
            const ve = oe.value;
            l(o, () => ({ llmId: ve }));
          },
          get value() {
            return c($);
          }
        });
        var k = z(x, 2);
        Ho(k, {}), I(E);
        var D = z(E, 4), A = B(D), q = B(A), Q = B(q);
        I(q);
        var j = z(q, 2);
        ln(j), j.__input = [bw, l, o], I(A), I(D);
        var O = z(D, 2), _ = B(O), H = B(_), v = B(H);
        I(H);
        var P = z(H, 2);
        ln(P), P.__input = [xw, l, o], I(_), I(O);
        var L = z(O, 2), T = B(L), R = B(T), N = B(R);
        I(R);
        var Z = z(R, 2);
        ln(Z), Z.__input = [$w, l, o], I(T), I(L);
        var X = z(L, 4), G = B(X);
        const ae = /* @__PURE__ */ S(() => n().systemPrompt || "");
        Je(G, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(ae);
          },
          oninput: (oe) => {
            l(o, { systemPrompt: oe.target.value });
          }
        }), I(X);
        var Y = z(X, 4), J = B(Y);
        const U = /* @__PURE__ */ S(() => n().userPrompt || "");
        Je(J, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(U);
          },
          oninput: (oe) => {
            l(o, { userPrompt: oe.target.value });
          }
        }), I(Y);
        var te = z(Y, 2), F = B(te);
        Ve(F, {
          level: 3,
          mt: "10px",
          children: (oe, ve) => {
            be();
            var se = Ee("输出参数");
            V(oe, se);
          },
          $$slots: { default: !0 }
        });
        var ye = z(F, 2);
        const ue = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
        $t(ye, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (oe) => {
            u(oe.value);
          },
          get value() {
            return c(ue);
          }
        });
        var ie = z(ye, 2);
        {
          var re = (oe) => {
            De(oe, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ve, se) => {
                var _e = kw();
                V(ve, _e);
              },
              $$slots: { default: !0 }
            });
          };
          de(ie, (oe) => {
            n().outType === "json" && oe(re);
          });
        }
        I(te);
        var ce = z(te, 2);
        In(ce, {}), Se(() => {
          Ke(Q, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Xo(j, n().temperature ?? 0.5), Ke(v, `Top P: ${n().topP ?? 0.9 ?? ""}`), Xo(P, n().topP ?? 0.9), Ke(N, `Top K: ${n().topK ?? 50 ?? ""}`), Xo(Z, n().topK ?? 50);
        }), V(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  });
}
Mn(["input"]);
le(Qd, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ew = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Ow = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  pe(t, !0), He(e, Ow);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Qn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ot(), { addParameter: i } = en(), { updateNodeData: s } = gt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Sw();
        V(l, u);
      },
      children: (l, u) => {
        var d = Lw(), p = fe(d), f = B(p);
        Ve(f, {
          level: 3,
          children: (j, O) => {
            be();
            var _ = Ee("输入参数");
            V(j, _);
          },
          $$slots: { default: !0 }
        });
        var g = z(f, 2);
        De(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, O) => {
            var _ = Ew();
            V(j, _);
          },
          $$slots: { default: !0 }
        }), I(p);
        var h = z(p, 2);
        Pt(h, {});
        var w = z(h, 2);
        Ve(w, {
          level: 3,
          mt: "10px",
          children: (j, O) => {
            be();
            var _ = Ee("代码");
            V(j, _);
          },
          $$slots: { default: !0 }
        });
        var C = z(w, 4), b = B(C);
        const E = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
        $t(b, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (j) => {
            const O = j.value;
            s(o, () => ({ engine: O }));
          },
          get value() {
            return c(E);
          }
        }), I(C);
        var x = z(C, 4), $ = B(x);
        const k = /* @__PURE__ */ S(() => n().code || "");
        Je($, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (j) => {
            s(o, () => ({ code: j.target.value }));
          },
          get value() {
            return c(k);
          }
        }), I(x);
        var D = z(x, 2), A = B(D);
        Ve(A, {
          level: 3,
          mt: "10px",
          children: (j, O) => {
            be();
            var _ = Ee("输出参数");
            V(j, _);
          },
          $$slots: { default: !0 }
        });
        var q = z(A, 2);
        De(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (j, O) => {
            var _ = Pw();
            V(j, _);
          },
          $$slots: { default: !0 }
        }), I(D);
        var Q = z(D, 2);
        In(Q, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
le(ef, { data: {} }, [], [], !0);
var Dw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  pe(t, !0), He(e, Tw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), { updateNodeData: s } = gt();
  return nt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Dw();
        V(a, l);
      },
      children: (a, l) => {
        var u = Vw(), d = fe(u), p = B(d);
        Ve(p, {
          level: 3,
          children: (k, D) => {
            be();
            var A = Ee("输入参数");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var f = z(p, 2);
        De(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, D) => {
            var A = Nw();
            V(k, A);
          },
          $$slots: { default: !0 }
        }), I(d);
        var g = z(d, 2);
        Pt(g, {});
        var h = z(g, 2);
        Ve(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, D) => {
            be();
            var A = Ee("模板内容");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var w = z(h, 2), C = B(w);
        const b = /* @__PURE__ */ S(() => n().template || "");
        Je(C, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ template: k.target.value }));
          },
          get value() {
            return c(b);
          }
        }), I(w);
        var E = z(w, 2), x = B(E);
        Ve(x, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            be();
            var A = Ee("输出参数");
            V(k, A);
          },
          $$slots: { default: !0 }
        }), I(E);
        var $ = z(E, 2);
        In($, {}), V(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
le(tf, { data: {} }, [], [], !0);
var Mw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), zw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ ee('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), Iw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ ee('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Bw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qw = /* @__PURE__ */ ee('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Zw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), Kw = /* @__PURE__ */ ee('<div style="width: 100%"><!></div>'), jw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ww = /* @__PURE__ */ ee('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const Yw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function nf(e, t) {
  pe(t, !0), He(e, Yw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Qn(() => {
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
  ], i = ot(), { addParameter: s } = en(), { updateNodeData: a } = gt();
  return Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Mw();
        V(l, u);
      },
      children: (l, u) => {
        var d = Ww(), p = fe(d), f = B(p);
        Ve(f, {
          level: 3,
          children: (J, U) => {
            be();
            var te = Ee("输入参数");
            V(J, te);
          },
          $$slots: { default: !0 }
        });
        var g = z(f, 2);
        De(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (J, U) => {
            var te = zw();
            V(J, te);
          },
          $$slots: { default: !0 }
        }), I(p);
        var h = z(p, 2);
        Pt(h, {});
        var w = z(h, 2);
        Ve(w, {
          level: 3,
          mt: "10px",
          children: (J, U) => {
            be();
            var te = Ee("URL 地址");
            V(J, te);
          },
          $$slots: { default: !0 }
        });
        var C = z(w, 2), b = B(C), E = B(b);
        const x = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
        $t(E, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (J) => {
            const U = J.value;
            a(i, () => ({ method: U }));
          },
          get value() {
            return c(x);
          }
        }), I(b);
        var $ = z(b, 2), k = B($);
        const D = /* @__PURE__ */ S(() => n().url || "");
        st(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (J) => {
            a(i, () => ({ url: J.target.value }));
          },
          get value() {
            return c(D);
          }
        }), I($), I(C);
        var A = z(C, 2), q = B(A);
        Ve(q, {
          level: 3,
          children: (J, U) => {
            be();
            var te = Ee("Http 头信息");
            V(J, te);
          },
          $$slots: { default: !0 }
        });
        var Q = z(q, 2);
        De(Q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (J, U) => {
            var te = Aw();
            V(J, te);
          },
          $$slots: { default: !0 }
        }), I(A);
        var j = z(A, 2);
        Pt(j, { dataKeyName: "headers" });
        var O = z(j, 2);
        {
          var _ = (J) => {
            var U = Hw(), te = fe(U);
            Ve(te, {
              level: 3,
              mt: "10px",
              children: (Ye, Rt) => {
                be();
                var Ie = Ee("Body");
                V(Ye, Ie);
              },
              $$slots: { default: !0 }
            });
            var F = z(te, 2), ye = B(F), ue = B(ye);
            const ie = /* @__PURE__ */ S(() => !n().bodyType || n().bodyType === "");
            st(ue, {
              type: "radio",
              name: "bodyType",
              value: "",
              get checked() {
                return c(ie);
              },
              onchange: (Ye) => {
                Ye.target?.checked && a(i, { bodyType: "" });
              }
            }), be(), I(ye);
            var re = z(ye, 2), ce = B(re);
            const oe = /* @__PURE__ */ S(() => n().bodyType === "form-data");
            st(ce, {
              type: "radio",
              name: "bodyType",
              value: "form-data",
              get checked() {
                return c(oe);
              },
              onchange: (Ye) => {
                Ye.target?.checked && a(i, { bodyType: "form-data" });
              }
            }), be(), I(re);
            var ve = z(re, 2), se = B(ve);
            const _e = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
            st(se, {
              type: "radio",
              name: "bodyType",
              value: "x-www-form-urlencoded",
              get checked() {
                return c(_e);
              },
              onchange: (Ye) => {
                Ye.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
              }
            }), be(), I(ve);
            var K = z(ve, 2), Ge = B(K);
            const Ae = /* @__PURE__ */ S(() => n().bodyType === "json");
            st(Ge, {
              type: "radio",
              name: "bodyType",
              value: "json",
              get checked() {
                return c(Ae);
              },
              onchange: (Ye) => {
                Ye.target?.checked && a(i, { bodyType: "json" });
              }
            }), be(), I(K);
            var Re = z(K, 2), et = B(Re);
            const We = /* @__PURE__ */ S(() => n().bodyType === "raw");
            st(et, {
              type: "radio",
              name: "bodyType",
              value: "raw",
              get checked() {
                return c(We);
              },
              onchange: (Ye) => {
                Ye.target?.checked && a(i, { bodyType: "raw" });
              }
            }), be(), I(Re), I(F), V(J, U);
          };
          de(O, (J) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && J(_);
          });
        }
        var H = z(O, 2);
        {
          var v = (J) => {
            var U = Rw(), te = fe(U), F = B(te);
            Ve(F, {
              level: 3,
              children: (ie, re) => {
                be();
                var ce = Ee("参数");
                V(ie, ce);
              },
              $$slots: { default: !0 }
            });
            var ye = z(F, 2);
            De(ye, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ie, re) => {
                var ce = Iw();
                V(ie, ce);
              },
              $$slots: { default: !0 }
            }), I(te);
            var ue = z(te, 2);
            Pt(ue, { dataKeyName: "formData" }), V(J, U);
          };
          de(H, (J) => {
            n().bodyType === "form-data" && J(v);
          });
        }
        var P = z(H, 2);
        {
          var L = (J) => {
            var U = qw(), te = fe(U), F = B(te);
            Ve(F, {
              level: 3,
              children: (ie, re) => {
                be();
                var ce = Ee("Body 参数");
                V(ie, ce);
              },
              $$slots: { default: !0 }
            });
            var ye = z(F, 2);
            De(ye, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ie, re) => {
                var ce = Bw();
                V(ie, ce);
              },
              $$slots: { default: !0 }
            }), I(te);
            var ue = z(te, 2);
            Pt(ue, { dataKeyName: "formUrlencoded" }), V(J, U);
          };
          de(P, (J) => {
            n().bodyType === "x-www-form-urlencoded" && J(L);
          });
        }
        var T = z(P, 2);
        {
          var R = (J) => {
            var U = Zw(), te = B(U);
            Je(te, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (F) => {
                a(i, { bodyJson: F.target.value });
              }
            }), I(U), V(J, U);
          };
          de(T, (J) => {
            n().bodyType === "json" && J(R);
          });
        }
        var N = z(T, 2);
        {
          var Z = (J) => {
            var U = Kw(), te = B(U);
            Je(te, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (F) => {
                a(i, { bodyRaw: F.target.value });
              }
            }), I(U), V(J, U);
          };
          de(N, (J) => {
            n().bodyType === "raw" && J(Z);
          });
        }
        var X = z(N, 2), G = B(X);
        Ve(G, {
          level: 3,
          mt: "10px",
          children: (J, U) => {
            be();
            var te = Ee("输出参数");
            V(J, te);
          },
          $$slots: { default: !0 }
        });
        var ae = z(G, 2);
        De(ae, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (J, U) => {
            var te = jw();
            V(J, te);
          },
          $$slots: { default: !0 }
        }), I(X);
        var Y = z(X, 2);
        In(Y, {}), V(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
le(nf, { data: {} }, [], [], !0);
var Fw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Xw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Jw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rf(e, t) {
  pe(t, !0), He(e, Jw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Jn();
  let a = /* @__PURE__ */ Pe(jt([]));
  Qn(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = gt();
  return nt(() => {
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
  }), Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Fw();
        V(u, d);
      },
      children: (u, d) => {
        var p = Uw(), f = fe(p), g = B(f);
        Ve(g, {
          level: 3,
          children: (_, H) => {
            be();
            var v = Ee("输入参数");
            V(_, v);
          },
          $$slots: { default: !0 }
        });
        var h = z(g, 2);
        De(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, H) => {
            var v = Xw();
            V(_, v);
          },
          $$slots: { default: !0 }
        }), I(f);
        var w = z(f, 2);
        Pt(w, {});
        var C = z(w, 2);
        Ve(C, {
          level: 3,
          mt: "10px",
          children: (_, H) => {
            be();
            var v = Ee("知识库设置");
            V(_, v);
          },
          $$slots: { default: !0 }
        });
        var b = z(C, 4), E = B(b);
        const x = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
        $t(E, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (_) => {
            const H = _.value;
            l(o, () => ({ knowledgeId: H }));
          },
          get value() {
            return c(x);
          }
        }), I(b);
        var $ = z(b, 4), k = B($);
        st(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (_) => {
            const H = _.target.value;
            l(o, () => ({ keyword: H }));
          }
        }), I($);
        var D = z($, 4), A = B(D);
        const q = /* @__PURE__ */ S(() => n().limit || "");
        st(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (_) => {
            const H = _.target.value;
            l(o, () => ({ limit: H }));
          },
          get value() {
            return c(q);
          }
        }), I(D);
        var Q = z(D, 2), j = B(Q);
        Ve(j, {
          level: 3,
          mt: "10px",
          children: (_, H) => {
            be();
            var v = Ee("输出参数");
            V(_, v);
          },
          $$slots: { default: !0 }
        }), I(Q);
        var O = z(Q, 2);
        In(O, {}), V(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
le(rf, { data: {} }, [], [], !0);
var Gw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), eb = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const tb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function of(e, t) {
  pe(t, !0), He(e, tb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Jn();
  let a = /* @__PURE__ */ Pe(jt([]));
  Qn(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = gt();
  return nt(() => {
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
  }), Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Gw();
        V(u, d);
      },
      children: (u, d) => {
        var p = eb(), f = fe(p), g = B(f);
        Ve(g, {
          level: 3,
          children: (O, _) => {
            be();
            var H = Ee("输入参数");
            V(O, H);
          },
          $$slots: { default: !0 }
        });
        var h = z(g, 2);
        De(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, _) => {
            var H = Qw();
            V(O, H);
          },
          $$slots: { default: !0 }
        }), I(f);
        var w = z(f, 2);
        Pt(w, {});
        var C = z(w, 2);
        Ve(C, {
          level: 3,
          mt: "10px",
          children: (O, _) => {
            be();
            var H = Ee("搜索引擎设置");
            V(O, H);
          },
          $$slots: { default: !0 }
        });
        var b = z(C, 4), E = B(b);
        const x = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
        $t(E, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (O) => {
            const _ = O.value;
            l(o, () => ({ engine: _ }));
          },
          get value() {
            return c(x);
          }
        }), I(b);
        var $ = z(b, 4), k = B($);
        st(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (O) => {
            const _ = O.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), I($);
        var D = z($, 4), A = B(D);
        st(A, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (O) => {
            const _ = O.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), I(D);
        var q = z(D, 2), Q = B(q);
        Ve(Q, {
          level: 3,
          mt: "10px",
          children: (O, _) => {
            be();
            var H = Ee("输出参数");
            V(O, H);
          },
          $$slots: { default: !0 }
        }), I(q);
        var j = z(q, 2);
        In(j, {}), V(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(u) {
      n(u), m();
    }
  });
}
le(of, { data: {} }, [], [], !0);
var nb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), rb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ob = /* @__PURE__ */ ee('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const ib = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function sf(e, t) {
  pe(t, !0), He(e, ib);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return nt(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = nb();
        V(s, a);
      },
      handle: (s) => {
        Xn(s, {
          type: "source",
          get position() {
            return xe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (s, a) => {
        var l = ob(), u = fe(l), d = B(u);
        Ve(d, {
          level: 3,
          children: (C, b) => {
            be();
            var E = Ee("循环变量");
            V(C, E);
          },
          $$slots: { default: !0 }
        }), I(u);
        var p = z(u, 2);
        Pt(p, { dataKeyName: "loopVars" });
        var f = z(p, 2), g = B(f);
        Ve(g, {
          level: 3,
          children: (C, b) => {
            be();
            var E = Ee("输出参数");
            V(C, E);
          },
          $$slots: { default: !0 }
        });
        var h = z(g, 2);
        De(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, b) => {
            var E = rb();
            V(C, E);
          },
          $$slots: { default: !0 }
        }), I(f);
        var w = z(f, 2);
        Pt(w, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), V(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
le(sf, { data: {} }, [], [], !0);
const sb = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var ab = /* @__PURE__ */ ee('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据类型： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), lb = /* @__PURE__ */ ee('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const ub = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function af(e, t) {
  pe(t, !0), He(e, ub);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = ot(), a = An(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = gt(), d = (v, P) => {
    u(s, (L) => {
      let T = L.data?.[o()];
      return T[r()] = { ...T[r()], [v]: P }, { [o()]: T };
    });
  }, p = (v, P) => {
    const L = P.target.value;
    d(v, L);
  }, f = (v) => {
    const P = v.value;
    d("ref", P);
  }, g = (v) => {
    const P = v.value;
    d("selectionMode", P);
  }, h = (v) => {
    const P = v.value;
    d("selectionDataType", P);
  };
  let w;
  const C = () => {
    u(s, (v) => {
      let P = v.data?.[o()];
      return P.splice(r(), 1), { [o()]: [...P] };
    }), w?.hide();
  };
  let b = Xd(i());
  const E = [
    { label: "文字", value: "text" },
    { label: "图片", value: "image" },
    { label: "视频", value: "video" },
    { label: "音频", value: "audio" },
    { label: "文件", value: "file" },
    { label: "其他", value: "other" }
  ], x = [
    { label: "单选", value: "single" },
    { label: "多选", value: "multiple" }
  ];
  var $ = lb(), k = fe($), D = B(k);
  const A = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  st(D, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(A);
    },
    oninput: (v) => p("name", v)
  }), I(k);
  var q = z(k, 2), Q = B(q);
  {
    var j = (v) => {
      st(v, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => p("value", P)
      });
    }, O = (v, P) => {
      {
        var L = (T) => {
          const R = /* @__PURE__ */ S(() => [c(l).ref]);
          $t(T, {
            get items() {
              return b.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(R);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        de(
          v,
          (T) => {
            c(l).refType !== "input" && T(L);
          },
          P
        );
      }
    };
    de(Q, (v) => {
      c(l).refType === "fixed" ? v(j) : v(O, !1);
    });
  }
  I(q);
  var _ = z(q, 2), H = B(_);
  return Ht(
    mr(H, {
      placement: "bottom",
      floating: (v) => {
        var P = ab(), L = B(P), T = z(B(L));
        const R = /* @__PURE__ */ S(() => c(l).selectionDataType ? [c(l).selectionDataType] : []);
        $t(T, {
          get items() {
            return E;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(R);
          },
          onSelect: h
        }), I(L);
        var N = z(L, 2), Z = z(B(N));
        const X = /* @__PURE__ */ S(() => c(l).selectionMode ? [c(l).selectionMode] : []);
        $t(Z, {
          get items() {
            return x;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return c(X);
          },
          onSelect: g
        }), I(N);
        var G = z(N, 2), ae = z(B(G));
        Je(ae, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ue) => {
            p("formLabel", ue);
          },
          get value() {
            return c(l).formLabel;
          }
        }), I(G);
        var Y = z(G, 2), J = z(B(Y));
        Je(J, {
          rows: 2,
          style: "width: 100%;",
          onchange: (ue) => {
            p("formDescription", ue);
          },
          get value() {
            return c(l).formDescription;
          }
        }), I(Y);
        var U = z(Y, 2), te = z(B(U), 2);
        ln(te), gs(te, !1), te.__change = [sb, d], I(U);
        var F = z(U, 2), ye = B(F);
        De(ye, {
          onclick: C,
          children: (ue, ie) => {
            be();
            var re = Ee("删除");
            V(ue, re);
          },
          $$slots: { default: !0 }
        }), I(F), I(P), V(v, P);
      },
      children: (v, P) => {
        Ho(v, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (v) => w = v,
    () => w
  ), I(_), V(e, $), ge({
    get parameter() {
      return n();
    },
    set parameter(v) {
      n(v), m();
    },
    get index() {
      return r();
    },
    set index(v) {
      r(v), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(v) {
      o(v), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(v) {
      i(v), m();
    }
  });
}
Mn(["change"]);
le(
  af,
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
var cb = /* @__PURE__ */ ee('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), db = /* @__PURE__ */ ee('<div class="none-params svelte-1sm1mgi"> </div>'), fb = /* @__PURE__ */ ee('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const pb = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function lf(e, t) {
  pe(t, !0), He(e, pb);
  const n = y(t, "noneParameterText", 7, "无确认数据"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = ot(), s = /* @__PURE__ */ S(() => An(i)), a = /* @__PURE__ */ S(() => [...c(s)?.current?.data?.[r()] || []]);
  var l = fb(), u = B(l);
  {
    var d = (f) => {
      var g = cb();
      be(4), V(f, g);
    };
    de(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = z(u, 2);
  return yt(
    p,
    19,
    () => c(a),
    (f) => f.id,
    (f, g, h) => {
      af(f, {
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
      var g = db(), h = B(g, !0);
      I(g), Se(() => Ke(h, n())), V(f, g);
    }
  ), I(l), V(e, l), ge({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无确认数据") {
      n(f), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), m();
    }
  });
}
le(lf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ls = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ls(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ls(e[s], t[s])) return !1;
    return !0;
  }
};
var gb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), hb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vb = /* @__PURE__ */ ee('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const mb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  pe(t, !0), He(e, mb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), { updateNodeData: s } = gt();
  return nt(() => {
    if (n().confirms) {
      const a = n().confirms.map((l) => ({
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
        ...l,
        nameDisabled: !0,
        dataTypeDisabled: !0,
        dataType: l.selectionMode === "multiple" ? "Array" : "String",
        addChildDisabled: !0
      }));
      Ls(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Wt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = gb();
        V(a, l);
      },
      children: (a, l) => {
        var u = vb(), d = fe(u), p = B(d);
        Ve(p, {
          level: 3,
          children: (k, D) => {
            be();
            var A = Ee("确认数据");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var f = z(p, 2);
        De(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, D) => {
            var A = hb();
            V(k, A);
          },
          $$slots: { default: !0 }
        }), I(d);
        var g = z(d, 2);
        lf(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var h = z(g, 2);
        Ve(h, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            be();
            var A = Ee("确认消息");
            V(k, A);
          },
          $$slots: { default: !0 }
        });
        var w = z(h, 4), C = B(w);
        const b = /* @__PURE__ */ S(() => n().message || "");
        Je(C, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ message: k.target.value }));
          },
          get value() {
            return c(b);
          }
        }), I(w);
        var E = z(w, 2), x = B(E);
        Ve(x, {
          level: 3,
          mt: "10px",
          children: (k, D) => {
            be();
            var A = Ee("输出参数");
            V(k, A);
          },
          $$slots: { default: !0 }
        }), I(E);
        var $ = z(E, 2);
        In($, { placeholder: "" }), V(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
le(uf, { data: {} }, [], [], !0);
const yb = {
  startNode: Wd,
  codeNode: ef,
  confirmNode: uf,
  llmNode: Qd,
  templateNode: tf,
  httpNode: nf,
  knowledgeNode: rf,
  searchEngineNode: of,
  loopNode: sf,
  endNode: Jd
};
var wb = /* @__PURE__ */ ee("<!> ", 1);
function Os(e, t) {
  pe(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7);
  return De(e, {
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
      var u = wb(), d = fe(u);
      Qs(d, n);
      var p = z(d);
      Se(() => Ke(p, ` ${r() ?? ""}`)), V(a, u);
    },
    $$slots: { default: !0 }
  }), ge({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), m();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), m();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), m();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), m();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), m();
    }
  });
}
le(Os, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var bb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), xb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), $b = /* @__PURE__ */ ee('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function cf(e, t) {
  pe(t, !0);
  let n = /* @__PURE__ */ Pe("base"), r = /* @__PURE__ */ Pe("show");
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
  ], s = [], a = Jn(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((E, x) => (l[E].sortNo || 0) - (l[x].sortNo || 0));
    for (let E of b)
      l[E].group === "base" ? o.push({ type: E, ...l[E] }) : s.push({
        icon: l[E].icon,
        title: l[E].title,
        type: E
      });
    o.sort((E, x) => (E.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let E of b)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === E) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = $b(), d = B(u), p = B(d), f = B(p);
  Ld(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      W(n, b.value.toString(), !0);
    }
  }), I(p);
  var g = z(p, 2), h = B(g);
  yt(h, 21, () => o, Nr, (b, E) => {
    Os(b, je(() => c(E)));
  }), I(h);
  var w = z(h, 2);
  yt(w, 21, () => s, Nr, (b, E) => {
    Os(b, je(() => c(E)));
  }), I(w), I(g), I(d);
  var C = z(d, 2);
  De(C, {
    onclick: () => {
      W(r, c(r) ? "" : "show", !0);
    },
    children: (b, E) => {
      var x = Me(), $ = fe(x);
      {
        var k = (A) => {
          var q = bb();
          V(A, q);
        }, D = (A) => {
          var q = xb();
          V(A, q);
        };
        de($, (A) => {
          c(r) === "show" ? A(k) : A(D, !1);
        });
      }
      V(b, x);
    },
    $$slots: { default: !0 }
  }), I(u), Se(() => {
    Dt(u, 1, `tf-toolbar ${c(r) ?? ""}`), kt(h, `display: ${c(n) === "base" ? "flex" : "none"}`), kt(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), V(e, u), ge();
}
le(cf, {}, [], [], !0);
const kb = () => ({ getNode: (e) => Ue.getNode(e) }), Cb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ue.updateNodes((n) => {
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
} }), _b = () => ({ getEdgesByTarget: (e) => Ue.getEdges().filter((t) => t.target === e) });
var Sb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Eb = /* @__PURE__ */ ee('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Pb = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lb = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ob = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Db = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Nb = /* @__PURE__ */ ee('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tb = /* @__PURE__ */ ee('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Mb = /* @__PURE__ */ ee("<!> <!> <div></div> <!>", 1);
const zb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function df(e, t) {
  pe(t, !0), He(e, zb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ Ze(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = gt(), { updateNodeData: a } = s, l = (C) => {
    a(o, C);
  }, u = (C, b) => {
    l({ [C]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Jn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  nt(() => {
    n().expand && h && h.append(p);
  }), nt(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), nt(() => {
    !n().parameters && f.parameters && l({
      parameters: bo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), nt(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: bo(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const w = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
  return Wt(e, je(
    {
      get data() {
        return c(w);
      }
    },
    () => r,
    {
      icon: (C) => {
        var b = Me(), E = fe(b);
        Qs(E, () => f.icon), V(C, b);
      },
      children: (C, b) => {
        var E = Mb(), x = fe(E);
        {
          var $ = (j) => {
            var O = Eb(), _ = fe(O), H = B(_);
            Ve(H, {
              level: 3,
              children: (T, R) => {
                be();
                var N = Ee("输入参数");
                V(T, N);
              },
              $$slots: { default: !0 }
            });
            var v = z(H, 2);
            {
              var P = (T) => {
                De(T, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (R, N) => {
                    var Z = Sb();
                    V(R, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              de(v, (T) => {
                f.parametersAddEnable !== !1 && T(P);
              });
            }
            I(_);
            var L = z(_, 2);
            Pt(L, {}), V(j, O);
          };
          de(x, (j) => {
            f.parametersEnable !== !1 && j($);
          });
        }
        var k = z(x, 2);
        {
          var D = (j) => {
            var O = Me(), _ = fe(O);
            yt(_, 17, () => g, Nr, (H, v) => {
              var P = Me(), L = fe(P);
              {
                var T = (N) => {
                  var Z = Pb(), X = fe(Z), G = B(X, !0);
                  I(X);
                  var ae = z(X, 2), Y = B(ae);
                  const J = /* @__PURE__ */ S(() => n()[c(v).name] || c(v).defaultValue);
                  st(Y, je(
                    {
                      get placeholder() {
                        return c(v).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(J);
                      }
                    },
                    () => c(v).attrs,
                    {
                      onchange: (U) => {
                        u(c(v).name, U);
                      }
                    }
                  )), I(ae), Se(() => Ke(G, c(v).label)), V(N, Z);
                }, R = (N, Z) => {
                  {
                    var X = (ae) => {
                      var Y = Lb(), J = fe(Y), U = B(J, !0);
                      I(J);
                      var te = z(J, 2), F = B(te);
                      const ye = /* @__PURE__ */ S(() => n()[c(v).name] || c(v).defaultValue);
                      Je(F, je(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(v).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ye);
                          }
                        },
                        () => c(v).attrs,
                        {
                          onchange: (ue) => {
                            u(c(v).name, ue);
                          }
                        }
                      )), I(te), Se(() => Ke(U, c(v).label)), V(ae, Y);
                    }, G = (ae, Y) => {
                      {
                        var J = (te) => {
                          var F = Ob(), ye = fe(F), ue = B(ye, !0);
                          I(ye);
                          var ie = z(ye, 2), re = B(ie), ce = B(re), oe = B(ce);
                          I(ce);
                          var ve = z(ce, 2);
                          ln(ve);
                          var se = (_e) => l({ [c(v).name]: parseFloat(_e.target.value) });
                          ut(
                            ve,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(v).attrs,
                              value: n()[c(v).name] ?? c(v).defaultValue,
                              oninput: se
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), I(re), I(ie), Se(() => {
                            Ke(ue, c(v).label), Ke(oe, `${c(v).description ?? ""}: ${n()[c(v).name] ?? c(v).defaultValue ?? ""}`);
                          }), V(te, F);
                        }, U = (te, F) => {
                          {
                            var ye = (ie) => {
                              var re = Db(), ce = fe(re), oe = B(ce, !0);
                              I(ce);
                              var ve = z(ce, 2), se = B(ve);
                              const _e = /* @__PURE__ */ S(() => c(v).options || []), K = /* @__PURE__ */ S(() => n()[c(v).name] ? [n()[c(v).name]] : [c(v).defaultValue]);
                              $t(se, {
                                get items() {
                                  return c(_e);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(v).placeholder;
                                },
                                onSelect: (Ge) => {
                                  const Ae = Ge.value;
                                  l({ [c(v).name]: Ae });
                                },
                                get value() {
                                  return c(K);
                                }
                              }), I(ve), Se(() => Ke(oe, c(v).label)), V(ie, re);
                            }, ue = (ie, re) => {
                              {
                                var ce = (ve) => {
                                  var se = Nb(), _e = fe(se), K = B(_e, !0);
                                  I(_e);
                                  var Ge = z(_e, 2), Ae = B(Ge);
                                  const Re = /* @__PURE__ */ S(() => c(v).chosen?.buttonText);
                                  Pd(Ae, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(v).placeholder;
                                    },
                                    get buttonText() {
                                      return c(Re);
                                    },
                                    onChosen: (et, We, Ye) => {
                                      c(v).chosen?.onChosen?.(l, et, We, Ye);
                                    },
                                    get value() {
                                      return n()[c(v).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(v).chosen?.labelDataKey || ""];
                                    }
                                  }), I(Ge), Se(() => Ke(K, c(v).label)), V(ve, se);
                                }, oe = (ve, se) => {
                                  {
                                    var _e = (K) => {
                                      Ve(K, je({ level: 3, mt: "10px" }, () => c(v).attrs, {
                                        children: (Ge, Ae) => {
                                          be();
                                          var Re = Ee();
                                          Se(() => Ke(Re, c(v).label)), V(Ge, Re);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    de(
                                      ve,
                                      (K) => {
                                        c(v).type === "heading" && K(_e);
                                      },
                                      se
                                    );
                                  }
                                };
                                de(
                                  ie,
                                  (ve) => {
                                    c(v).type === "chosen" ? ve(ce) : ve(oe, !1);
                                  },
                                  re
                                );
                              }
                            };
                            de(
                              te,
                              (ie) => {
                                c(v).type === "select" ? ie(ye) : ie(ue, !1);
                              },
                              F
                            );
                          }
                        };
                        de(
                          ae,
                          (te) => {
                            c(v).type === "slider" ? te(J) : te(U, !1);
                          },
                          Y
                        );
                      }
                    };
                    de(
                      N,
                      (ae) => {
                        c(v).type === "textarea" ? ae(X) : ae(G, !1);
                      },
                      Z
                    );
                  }
                };
                de(L, (N) => {
                  c(v).type === "input" ? N(T) : N(R, !1);
                });
              }
              V(H, P);
            }), V(j, O);
          };
          de(k, (j) => {
            g && j(D);
          });
        }
        var A = z(k, 2);
        Ht(A, (j) => h = j, () => h);
        var q = z(A, 2);
        {
          var Q = (j) => {
            var O = Tb(), _ = fe(O), H = B(_);
            Ve(H, {
              level: 3,
              mt: "10px",
              children: (T, R) => {
                be();
                var N = Ee("输出参数");
                V(T, N);
              },
              $$slots: { default: !0 }
            });
            var v = z(H, 2);
            {
              var P = (T) => {
                De(T, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (R, N) => {
                    var Z = Vb();
                    V(R, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              de(v, (T) => {
                f.outputDefsAddEnable !== !1 && T(P);
              });
            }
            I(_);
            var L = z(_, 2);
            In(L, {}), V(j, O);
          };
          de(q, (j) => {
            f.outputDefsEnable !== !1 && j(Q);
          });
        }
        Se(() => {
          kt(A, f.rootStyle || ""), Dt(A, 1, zn(f.rootClass), "svelte-q0cqsa");
        }), V(C, E);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ge({
    get data() {
      return n();
    },
    set data(C) {
      n(C), m();
    }
  });
}
le(df, { data: {} }, [], [], !0);
const Ab = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ue.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ue.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Hb = () => ({ deleteEdge: (e) => {
  Ue.removeEdge(e);
} });
var Ib = /* @__PURE__ */ ee('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Rb = /* @__PURE__ */ ee("<!> <!> <!> <!>", 1), Bb = /* @__PURE__ */ ee('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const qb = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function ff(e, t) {
  pe(t, !0), He(e, qb);
  const n = y(t, "onInit", 7), r = gt();
  n()(r);
  let o = /* @__PURE__ */ Pe(!1), i = /* @__PURE__ */ Pe(null);
  const { updateEdgeData: s } = Ab(), a = (L) => {
    L.preventDefault(), L.dataTransfer && (L.dataTransfer.dropEffect = "move");
  }, l = (L) => {
    L.preventDefault();
    const T = r.screenToFlowPosition({ x: L.clientX - 250, y: L.clientY - 100 }), R = L.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const N = JSON.parse(R), Z = { id: `node_${gr()}`, position: T, data: {}, ...N };
    Ue.addNode(Z), Ue.selectNodeOnly(Z.id);
  }, { getNode: u } = kb(), d = (L) => {
    const T = u(L.source), R = u(L.target);
    if (L.sourceHandle === "loop_handle" || T.parentId) {
      const N = r.getEdges();
      for (let Z of N)
        if (Z.target === L.target) {
          const X = u(Z.source);
          if (L.sourceHandle === "loop_handle" && X.parentId !== T.id || T.parentId && X.parentId !== T.parentId)
            return !1;
        }
    }
    return !(!T.parentId && R.parentId && R.parentId !== T.id);
  }, { ensureParentInNodesBefore: p } = Cb(), f = (L, T) => {
    if (!T.isValid)
      return;
    const R = T.toNode;
    if (R.parentId)
      return;
    const N = T.fromNode, Z = T.fromHandle, X = { position: { ...R.position } };
    if (Z.id === "loop_handle" ? X.parentId = N.id : N.parentId && (X.parentId = N.parentId), X.parentId) {
      const G = u(X.parentId);
      X.position = {
        x: R.position.x - G.position.x,
        y: R.position.y - G.position.y
      }, p(X.parentId, R.id), r.updateNode(R.id, X);
    }
    setTimeout(() => {
      Ue.getEdges().forEach((G) => {
        G.target === R.id && G.source == N.id && (W(o, !0), W(i, G, !0));
      });
    });
  }, { getEdgesByTarget: g } = _b(), h = (L) => {
    L.edges.forEach((T) => {
      T.id === c(i)?.id && (W(i, null), W(o, !1));
      const R = u(T.target);
      if (R && R.parentId) {
        const N = g(T.target), Z = u(R.parentId);
        if (N.length === 0)
          r.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + Z.position.x,
              y: R.position.y + Z.position.y
            }
          });
        else {
          let X = !1;
          for (let G = 0; G < N.length; G++) {
            const ae = N[G], Y = u(ae.source);
            if (Y.parentId || Y.type === "loopNode") {
              X = !0;
              break;
            }
          }
          X || r.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + Z.position.x,
              y: R.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: w } = Hb(), C = (L, T) => {
  }, b = (L) => {
  }, E = {
    // ...nodeTypes
  }, x = Jn().customNodes;
  if (x)
    for (let L of Object.keys(x))
      E[L] = df;
  const $ = Jn().onDataChange;
  nt(() => {
    $?.({
      nodes: Ue.getNodes(),
      edges: Ue.getEdges(),
      viewport: Ue.getViewport()
    });
  });
  var k = Bb(), D = B(k);
  const A = /* @__PURE__ */ S(() => ({ ...yb, ...E }));
  var q = Ue.getNodes, Q = Ue.setNodes, j = Ue.getEdges, O = Ue.setEdges, _ = Ue.getViewport, H = Ue.setViewport;
  const v = /* @__PURE__ */ S(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ho.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  pd(D, {
    get nodeTypes() {
      return c(A);
    },
    get nodes() {
      return q();
    },
    set nodes(L) {
      Q(L);
    },
    get edges() {
      return j();
    },
    set edges(L) {
      O(L);
    },
    get viewport() {
      return _();
    },
    set viewport(L) {
      H(L);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: C,
    onconnect: b,
    connectionRadius: 50,
    onedgeclick: (L) => {
      W(o, !0), W(i, L.edge, !0);
    },
    onbeforeconnect: (L) => ({ ...L, id: gr() }),
    ondelete: h,
    onclick: (L) => {
      const T = L.target;
      T.classList.contains("svelte-flow__edge-interaction") || T.classList.contains("panel-content") || T.closest(".panel-content") || (W(o, !1), W(i, null));
    },
    get defaultEdgeOptions() {
      return c(v);
    },
    children: (L, T) => {
      var R = Rb(), N = fe(R);
      kd(N, {});
      var Z = z(N, 2);
      bd(Z, {});
      var X = z(Z, 2);
      _d(X, {});
      var G = z(X, 2);
      {
        var ae = (Y) => {
          To(Y, {
            children: (J, U) => {
              var te = Ib(), F = z(B(te), 4), ye = B(F);
              const ue = /* @__PURE__ */ S(() => c(i)?.data?.condition);
              Je(ye, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(ue);
                },
                onchange: (oe) => {
                  c(i) && s(c(i).id, { condition: oe.target?.value });
                }
              }), I(F);
              var ie = z(F, 2), re = B(ie);
              De(re, {
                onclick: () => {
                  w(c(i)?.id), W(o, !1);
                },
                children: (oe, ve) => {
                  be();
                  var se = Ee("删除");
                  V(oe, se);
                },
                $$slots: { default: !0 }
              });
              var ce = z(re, 2);
              De(ce, {
                primary: !0,
                onclick: () => {
                  W(o, !1);
                },
                children: (oe, ve) => {
                  be();
                  var se = Ee("保存");
                  V(oe, se);
                },
                $$slots: { default: !0 }
              }), I(ie), I(te), V(J, te);
            },
            $$slots: { default: !0 }
          });
        };
        de(G, (Y) => {
          c(o) && Y(ae);
        });
      }
      V(L, R);
    },
    $$slots: { default: !0 }
  });
  var P = z(D, 2);
  return cf(P, {}), I(k), V(e, k), ge({
    get onInit() {
      return n();
    },
    set onInit(L) {
      n(L), m();
    }
  });
}
le(ff, { onInit: {} }, [], [], !0);
function Zb(e, t) {
  pe(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ue.init(o?.nodes || [], o?.edges || []), Or("tinyflow_options", n()), gd(e, {
    children: (i, s) => {
      ff(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ge({
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
customElements.define("tinyflow-component", le(Zb, { options: {}, onInit: {} }, [], [], !1));
const jb = $f((e, t) => {
  const n = Pa(null), r = Pa(null);
  kf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Cf(() => {
    if (n.current) {
      const a = new t2({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Pf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  jb as Tinyflow
};
//# sourceMappingURL=index.js.map
