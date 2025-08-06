import Bl, { forwardRef as $f, useRef as Ta, useImperativeHandle as Cf, useEffect as kf } from "react";
var Io = { exports: {} }, Yr = {};
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
  if (La) return Yr;
  La = 1;
  var e = Bl, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, p = {}, f = null, g = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: f, ref: g, props: p, _owner: o.current };
  }
  return Yr.Fragment = n, Yr.jsx = s, Yr.jsxs = s, Yr;
}
var Fr = {};
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
    var e = Bl, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, y = "@@iterator";
    function C(z) {
      if (z === null || typeof z != "object")
        return null;
      var ne = h && z[h] || z[y];
      return typeof ne == "function" ? ne : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(z) {
      {
        for (var ne = arguments.length, he = new Array(ne > 1 ? ne - 1 : 0), ke = 1; ke < ne; ke++)
          he[ke - 1] = arguments[ke];
        x("error", z, he);
      }
    }
    function x(z, ne, he) {
      {
        var ke = w.ReactDebugCurrentFrame, ze = ke.getStackAddendum();
        ze !== "" && (ne += "%s", he = he.concat([ze]));
        var qe = he.map(function(Ne) {
          return String(Ne);
        });
        qe.unshift("Warning: " + ne), Function.prototype.apply.call(console[z], console, qe);
      }
    }
    var $ = !1, _ = !1, M = !1, V = !1, Z = !1, U;
    U = Symbol.for("react.module.reference");
    function j(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || Z || z === o || z === u || z === d || V || z === g || $ || _ || M || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === p || z.$$typeof === s || z.$$typeof === a || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === U || z.getModuleId !== void 0));
    }
    function N(z, ne, he) {
      var ke = z.displayName;
      if (ke)
        return ke;
      var ze = ne.displayName || ne.name || "";
      return ze !== "" ? he + "(" + ze + ")" : he;
    }
    function k(z) {
      return z.displayName || "Context";
    }
    function L(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
        return z.displayName || z.name || null;
      if (typeof z == "string")
        return z;
      switch (z) {
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
      if (typeof z == "object")
        switch (z.$$typeof) {
          case a:
            var ne = z;
            return k(ne) + ".Consumer";
          case s:
            var he = z;
            return k(he._context) + ".Provider";
          case l:
            return N(z, z.render, "ForwardRef");
          case p:
            var ke = z.displayName || null;
            return ke !== null ? ke : L(z.type) || "Memo";
          case f: {
            var ze = z, qe = ze._payload, Ne = ze._init;
            try {
              return L(Ne(qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, P = 0, T, A, R, O, B, G, Q;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function X() {
      {
        if (P === 0) {
          T = console.log, A = console.info, R = console.warn, O = console.error, B = console.group, G = console.groupCollapsed, Q = console.groupEnd;
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
        P++;
      }
    }
    function W() {
      {
        if (P--, P === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, z, {
              value: T
            }),
            info: b({}, z, {
              value: A
            }),
            warn: b({}, z, {
              value: R
            }),
            error: b({}, z, {
              value: O
            }),
            group: b({}, z, {
              value: B
            }),
            groupCollapsed: b({}, z, {
              value: G
            }),
            groupEnd: b({}, z, {
              value: Q
            })
          });
        }
        P < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, ee;
    function F(z, ne, he) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (ze) {
            var ke = ze.stack.trim().match(/\n( *(at )?)/);
            ee = ke && ke[1] || "";
          }
        return `
` + ee + z;
      }
    }
    var ye = !1, ge;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ae();
    }
    function oe(z, ne) {
      if (!z || ye)
        return "";
      {
        var he = ge.get(z);
        if (he !== void 0)
          return he;
      }
      var ke;
      ye = !0;
      var ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var qe;
      qe = Y.current, Y.current = null, X();
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
              ke = _t;
            }
            Reflect.construct(z, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (_t) {
              ke = _t;
            }
            z.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            ke = _t;
          }
          z();
        }
      } catch (_t) {
        if (_t && ke && typeof _t.stack == "string") {
          for (var Le = _t.stack.split(`
`), bt = ke.stack.split(`
`), tt = Le.length - 1, it = bt.length - 1; tt >= 1 && it >= 0 && Le[tt] !== bt[it]; )
            it--;
          for (; tt >= 1 && it >= 0; tt--, it--)
            if (Le[tt] !== bt[it]) {
              if (tt !== 1 || it !== 1)
                do
                  if (tt--, it--, it < 0 || Le[tt] !== bt[it]) {
                    var Zt = `
` + Le[tt].replace(" at new ", " at ");
                    return z.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", z.displayName)), typeof z == "function" && ge.set(z, Zt), Zt;
                  }
                while (tt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        ye = !1, Y.current = qe, W(), Error.prepareStackTrace = ze;
      }
      var br = z ? z.displayName || z.name : "", nr = br ? F(br) : "";
      return typeof z == "function" && ge.set(z, nr), nr;
    }
    function ce(z, ne, he) {
      return oe(z, !1);
    }
    function ie(z) {
      var ne = z.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function ve(z, ne, he) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return oe(z, ie(z));
      if (typeof z == "string")
        return F(z);
      switch (z) {
        case u:
          return F("Suspense");
        case d:
          return F("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return ce(z.render);
          case p:
            return ve(z.type, ne, he);
          case f: {
            var ke = z, ze = ke._payload, qe = ke._init;
            try {
              return ve(qe(ze), ne, he);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, _e = {}, K = w.ReactDebugCurrentFrame;
    function Ue(z) {
      if (z) {
        var ne = z._owner, he = ve(z.type, z._source, ne ? ne.type : null);
        K.setExtraStackFrame(he);
      } else
        K.setExtraStackFrame(null);
    }
    function He(z, ne, he, ke, ze) {
      {
        var qe = Function.call.bind(se);
        for (var Ne in z)
          if (qe(z, Ne)) {
            var Le = void 0;
            try {
              if (typeof z[Ne] != "function") {
                var bt = Error((ke || "React class") + ": " + he + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              Le = z[Ne](ne, Ne, ke, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Le = tt;
            }
            Le && !(Le instanceof Error) && (Ue(ze), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", he, Ne, typeof Le), Ue(null)), Le instanceof Error && !(Le.message in _e) && (_e[Le.message] = !0, Ue(ze), E("Failed %s type: %s", he, Le.message), Ue(null));
          }
      }
    }
    var Re = Array.isArray;
    function et(z) {
      return Re(z);
    }
    function Ye(z) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, he = ne && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return he;
      }
    }
    function Fe(z) {
      try {
        return Rt(z), !1;
      } catch {
        return !0;
      }
    }
    function Rt(z) {
      return "" + z;
    }
    function Ie(z) {
      if (Fe(z))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(z)), Rt(z);
    }
    var ct = w.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, dt;
    function Qe(z) {
      if (se.call(z, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function kt(z) {
      if (se.call(z, "key")) {
        var ne = Object.getOwnPropertyDescriptor(z, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function at(z, ne) {
      typeof z.ref == "string" && ct.current;
    }
    function qt(z, ne) {
      {
        var he = function() {
          Xe || (Xe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        he.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function Kr(z, ne) {
      {
        var he = function() {
          dt || (dt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        he.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var yn = function(z, ne, he, ke, ze, qe, Ne) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: ne,
        ref: he,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: qe
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ze
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function wn(z, ne, he, ke, ze) {
      {
        var qe, Ne = {}, Le = null, bt = null;
        he !== void 0 && (Ie(he), Le = "" + he), kt(ne) && (Ie(ne.key), Le = "" + ne.key), Qe(ne) && (bt = ne.ref, at(ne, ze));
        for (qe in ne)
          se.call(ne, qe) && !me.hasOwnProperty(qe) && (Ne[qe] = ne[qe]);
        if (z && z.defaultProps) {
          var tt = z.defaultProps;
          for (qe in tt)
            Ne[qe] === void 0 && (Ne[qe] = tt[qe]);
        }
        if (Le || bt) {
          var it = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          Le && qt(Ne, it), bt && Kr(Ne, it);
        }
        return yn(z, Le, bt, ze, ke, ct.current, Ne);
      }
    }
    var tr = w.ReactCurrentOwner, Zi = w.ReactDebugCurrentFrame;
    function bn(z) {
      if (z) {
        var ne = z._owner, he = ve(z.type, z._source, ne ? ne.type : null);
        Zi.setExtraStackFrame(he);
      } else
        Zi.setExtraStackFrame(null);
    }
    var yr;
    yr = !1;
    function wr(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function jr() {
      {
        if (tr.current) {
          var z = L(tr.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function Bi(z) {
      return "";
    }
    var tn = {};
    function pf(z) {
      {
        var ne = jr();
        if (!ne) {
          var he = typeof z == "string" ? z : z.displayName || z.name;
          he && (ne = `

Check the top-level render call using <` + he + ">.");
        }
        return ne;
      }
    }
    function _a(z, ne) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var he = pf(ne);
        if (tn[he])
          return;
        tn[he] = !0;
        var ke = "";
        z && z._owner && z._owner !== tr.current && (ke = " It was passed a child from " + L(z._owner.type) + "."), bn(z), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, ke), bn(null);
      }
    }
    function Sa(z, ne) {
      {
        if (typeof z != "object")
          return;
        if (et(z))
          for (var he = 0; he < z.length; he++) {
            var ke = z[he];
            wr(ke) && _a(ke, ne);
          }
        else if (wr(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var ze = C(z);
          if (typeof ze == "function" && ze !== z.entries)
            for (var qe = ze.call(z), Ne; !(Ne = qe.next()).done; )
              wr(Ne.value) && _a(Ne.value, ne);
        }
      }
    }
    function gf(z) {
      {
        var ne = z.type;
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
          var ke = L(ne);
          He(he, z.props, "prop", ke, z);
        } else if (ne.PropTypes !== void 0 && !yr) {
          yr = !0;
          var ze = L(ne);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ze || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hf(z) {
      {
        for (var ne = Object.keys(z.props), he = 0; he < ne.length; he++) {
          var ke = ne[he];
          if (ke !== "children" && ke !== "key") {
            bn(z), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), bn(null);
            break;
          }
        }
        z.ref !== null && (bn(z), E("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    var Ea = {};
    function Pa(z, ne, he, ke, ze, qe) {
      {
        var Ne = j(z);
        if (!Ne) {
          var Le = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = Bi();
          bt ? Le += bt : Le += jr();
          var tt;
          z === null ? tt = "null" : et(z) ? tt = "array" : z !== void 0 && z.$$typeof === t ? (tt = "<" + (L(z.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof z, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Le);
        }
        var it = wn(z, ne, he, ze, qe);
        if (it == null)
          return it;
        if (Ne) {
          var Zt = ne.children;
          if (Zt !== void 0)
            if (ke)
              if (et(Zt)) {
                for (var br = 0; br < Zt.length; br++)
                  Sa(Zt[br], z);
                Object.freeze && Object.freeze(Zt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sa(Zt, z);
        }
        if (se.call(ne, "key")) {
          var nr = L(z), _t = Object.keys(ne).filter(function(xf) {
            return xf !== "key";
          }), Ki = _t.length > 0 ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ea[nr + Ki]) {
            var bf = _t.length > 0 ? "{" + _t.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ki, nr, bf, nr), Ea[nr + Ki] = !0;
          }
        }
        return z === r ? hf(it) : gf(it), it;
      }
    }
    function vf(z, ne, he) {
      return Pa(z, ne, he, !0);
    }
    function mf(z, ne, he) {
      return Pa(z, ne, he, !1);
    }
    var yf = mf, wf = vf;
    Fr.Fragment = r, Fr.jsx = yf, Fr.jsxs = wf;
  }()), Fr;
}
var Na;
function Ef() {
  return Na || (Na = 1, process.env.NODE_ENV === "production" ? Io.exports = _f() : Io.exports = Sf()), Io.exports;
}
var Pf = Ef();
const Tf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Tf);
const Os = 1, Ns = 2, Kl = 4, Lf = 8, Of = 16, Nf = 1, Df = 2, jl = 4, Mf = 8, Vf = 16, Yl = 1, zf = 2, Ds = "[", Ms = "[!", Vs = "]", or = {}, vt = Symbol(), Hf = "http://www.w3.org/1999/xhtml", Af = "http://www.w3.org/2000/svg", If = "@attach", Rf = !1;
var xo = Array.isArray, qf = Array.prototype.indexOf, zs = Array.from, ni = Object.keys, ri = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Fl = Object.getOwnPropertyDescriptors, Xl = Object.prototype, Zf = Array.prototype, Ci = Object.getPrototypeOf, Da = Object.isExtensible;
function Xr(e) {
  return typeof e == "function";
}
const gt = () => {
};
function Bf(e) {
  return e();
}
function oi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xt(e, t, n = !1) {
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
const zt = 2, Hs = 4, Co = 8, As = 16, Dn = 32, hr = 64, Is = 128, Mt = 256, ii = 512, Ht = 1024, Tn = 2048, vr = 4096, En = 8192, ki = 16384, Wl = 32768, Rr = 65536, Ma = 1 << 17, Kf = 1 << 18, Jl = 1 << 19, is = 1 << 20, Rs = 1 << 21, an = Symbol("$state"), qs = Symbol("legacy props"), jf = Symbol(""), Gl = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Yf = 1, Zs = 3, Tr = 8;
function Ul(e) {
  return e === this.v;
}
function Ql(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function eu(e) {
  return !Ql(e, this.v);
}
function Ff(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Jf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Uf(e) {
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
let qr = !1, np = !1;
function rp() {
  qr = !0;
}
const op = [];
function tu(e, t = !1) {
  return Fo(e, /* @__PURE__ */ new Map(), "", op);
}
function Fo(e, t, n, r, o = null) {
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
        a in e && (s[a] = Fo(l, t, n, r));
      }
      return s;
    }
    if (Ci(e) === Xl) {
      s = {}, t.set(e, s), o !== null && t.set(o, s);
      for (var u in e)
        s[u] = Fo(e[u], t, n, r);
      return s;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function")
      return Fo(
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
function Bs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Je = null;
function Va(e) {
  Je = e;
}
function jn(e) {
  return (
    /** @type {T} */
    nu().get(e)
  );
}
function Lr(e, t) {
  return nu().set(e, t), t;
}
function fe(e, t = !1, n) {
  Je = {
    p: Je,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, qr && !t && (Je.l = {
    s: null,
    u: null,
    r1: [],
    r2: ur(!1)
  });
}
function pe(e) {
  var t = (
    /** @type {ComponentContext} */
    Je
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      pu(r);
  }
  return e !== void 0 && (t.x = e), Je = t.p, e ?? /** @type {T} */
  {};
}
function _i() {
  return !qr || Je !== null && Je.l === null;
}
function nu(e) {
  return Je === null && Bs(), Je.c ??= new Map(ip(Je) || void 0);
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
  const t = Ci(e);
  if (t !== Xl && t !== Zf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = xo(e), o = /* @__PURE__ */ Pe(0), i = ar, s = (a) => {
    if (ar === i)
      return a();
    var l = Ze, u = ar;
    Fn(null), Ia(i);
    var d = a();
    return Fn(l), Ia(u), d;
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
        }) : J(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Pe(vt));
            n.set(l, f), Xo(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && J(d, p);
          }
          J(u, vt), Xo(o);
        }
        return !0;
      },
      get(a, l, u) {
        if (l === an)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Sn(a, l)?.writable) && (d = s(() => {
          var g = jt(p ? a[l] : vt), h = /* @__PURE__ */ Pe(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === vt ? void 0 : f;
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
          if (p !== void 0 && f !== vt)
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
        var u = n.get(l), d = u !== void 0 && u.v !== vt || Reflect.has(a, l);
        if (u !== void 0 || Me !== null && (!d || Sn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? jt(a[l]) : vt, g = /* @__PURE__ */ Pe(f);
            return g;
          }), n.set(l, u));
          var p = c(u);
          if (p === vt)
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
            h !== void 0 ? J(h, vt) : g in a && (h = s(() => /* @__PURE__ */ Pe(vt)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || Sn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Pe(void 0)), J(p, jt(u)), n.set(l, p));
        else {
          f = p.v !== vt;
          var y = s(() => jt(u));
          J(p, y);
        }
        var C = Reflect.getOwnPropertyDescriptor(a, l);
        if (C?.set && C.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= w.v && J(w, E + 1);
          }
          Xo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== vt;
        });
        for (var [u, d] of n)
          d.v !== vt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        ep();
      }
    }
  );
}
function za(e) {
  try {
    if (e !== null && typeof e == "object" && an in e)
      return e[an];
  } catch {
  }
  return e;
}
function sp(e, t) {
  return Object.is(za(e), za(t));
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  var t = zt | Tn, n = Ze !== null && (Ze.f & zt) !== 0 ? (
    /** @type {Derived} */
    Ze
  ) : null;
  return Me === null || n !== null && (n.f & Mt) !== 0 ? t |= Mt : Me.f |= Jl, {
    ctx: Je,
    deps: null,
    effects: null,
    equals: Ul,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      vt
    ),
    wv: 0,
    parent: n ?? Me,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ Zr(e);
  return ku(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const t = /* @__PURE__ */ Zr(e);
  return t.equals = eu, t;
}
function ru(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Lt(
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
  var t, n = Me;
  Xn(ap(e));
  try {
    ru(e), t = Eu(e);
  } finally {
    Xn(n);
  }
  return t;
}
function ou(e) {
  var t = js(e);
  if (e.equals(t) || (e.v = t, e.wv = _u()), !Yn) {
    var n = (Zn || (e.f & Mt) !== 0) && e.deps !== null ? vr : Ht;
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
    equals: Ul,
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
function iu(e, t = !1, n = !0) {
  const r = ur(e);
  return t || (r.equals = eu), qr && n && Je !== null && Je.l !== null && (Je.l.s ??= []).push(r), r;
}
function J(e, t, n = !1) {
  Ze !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xt || (Ze.f & Ma) !== 0) && _i() && (Ze.f & (zt | As | Ma)) !== 0 && !Pn?.includes(e) && tp();
  let r = n ? jt(t) : t;
  return ss(e, r);
}
function ss(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Yn ? ir.set(e, t) : ir.set(e, n), e.v = t, (e.f & zt) !== 0 && ((e.f & Tn) !== 0 && js(
      /** @type {Derived} */
      e
    ), pn(e, (e.f & Mt) === 0 ? Ht : vr)), e.wv = _u(), su(e, Tn), _i() && Me !== null && (Me.f & Ht) !== 0 && (Me.f & (Dn | hr)) === 0 && (Bt === null ? mp([e]) : Bt.push(e));
  }
  return t;
}
function Ha(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function Xo(e) {
  J(e, e.v + 1);
}
function su(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = _i(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & Tn) === 0 && (!r && s === Me || (pn(s, t), (a & (Ht | Mt)) !== 0 && ((a & zt) !== 0 ? su(
        /** @type {Derived} */
        s,
        vr
      ) : Ei(
        /** @type {Effect} */
        s
      ))));
    }
}
function ko(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function lp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Ce = !1;
function Dt(e) {
  Ce = e;
}
let Te;
function yt(e) {
  if (e === null)
    throw ko(), or;
  return Te = e;
}
function Ln() {
  return yt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ vn(Te)
  );
}
function I(e) {
  if (Ce) {
    if (/* @__PURE__ */ vn(Te) !== null)
      throw ko(), or;
    Te = e;
  }
}
function be(e = 1) {
  if (Ce) {
    for (var t = e, n = Te; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(n);
    Te = n;
  }
}
function as() {
  for (var e = 0, t = Te; ; ) {
    if (t.nodeType === Tr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Vs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ds || n === Ms) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(t)
    );
    t.remove(), t = r;
  }
}
function au(e) {
  if (!e || e.nodeType !== Tr)
    throw ko(), or;
  return (
    /** @type {Comment} */
    e.data
  );
}
var St, lu, uu, cu;
function ls() {
  if (St === void 0) {
    St = window, lu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    uu = Sn(t, "firstChild").get, cu = Sn(t, "nextSibling").get, Da(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Da(n) && (n.__t = void 0);
  }
}
function On(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return uu.call(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return cu.call(e);
}
function q(e, t) {
  if (!Ce)
    return /* @__PURE__ */ lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ lt(Te)
  );
  if (n === null)
    n = Te.appendChild(On());
  else if (t && n.nodeType !== Zs) {
    var r = On();
    return n?.before(r), yt(r), r;
  }
  return yt(n), n;
}
function de(e, t) {
  if (!Ce) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ lt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ vn(n) : n;
  }
  return Te;
}
function H(e, t = 1, n = !1) {
  let r = Ce ? Te : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(r);
  if (!Ce)
    return r;
  if (n && r?.nodeType !== Zs) {
    var i = On();
    return r === null ? o?.after(i) : r.before(i), yt(i), i;
  }
  return yt(r), /** @type {TemplateNode} */
  r;
}
function Ys(e) {
  e.textContent = "";
}
function du(e) {
  Me === null && Ze === null && Wf(), Ze !== null && (Ze.f & Mt) !== 0 && Me === null && Xf(), Yn && Ff();
}
function up(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Mn(e, t, n, r = !0) {
  var o = Me, i = {
    ctx: Je,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Tn,
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
      Ws(i), i.f |= Wl;
    } catch (l) {
      throw Lt(i), l;
    }
  else t !== null && Ei(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Jl | Is)) === 0;
  if (!s && r && (o !== null && up(i, o), Ze !== null && (Ze.f & zt) !== 0)) {
    var a = (
      /** @type {Derived} */
      Ze
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function cp() {
  return Ze !== null && !Xt;
}
function fu(e) {
  const t = Mn(Co, null, !1);
  return pn(t, Ht), t.teardown = e, t;
}
function nt(e) {
  if (du(), !Ze && Me && (Me.f & Dn) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Je
    );
    (t.e ??= []).push(e);
  } else
    return pu(e);
}
function pu(e) {
  return Mn(Hs | Rs, e, !1);
}
function gu(e) {
  return du(), Mn(Co | Rs, e, !0);
}
function Fs(e) {
  const t = Mn(hr, e, !0);
  return () => {
    Lt(t);
  };
}
function dp(e) {
  const t = Mn(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Or(t, () => {
      Lt(t), r(void 0);
    }) : (Lt(t), r(void 0));
  });
}
function _o(e) {
  return Mn(Hs, e, !1);
}
function So(e) {
  return Mn(Co, e, !0);
}
function Se(e, t = [], n = Zr) {
  const r = t.map(n);
  return Un(() => e(...r.map(c)));
}
function Un(e, t = 0) {
  var n = Mn(Co | As | t, e, !0);
  return n;
}
function fn(e, t = !0) {
  return Mn(Co | Dn, e, !0, t);
}
function hu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Yn, r = Ze;
    Aa(!0), Fn(null);
    try {
      t.call(null);
    } finally {
      Aa(n), Fn(r);
    }
  }
}
function vu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(Gl);
    var r = n.next;
    (n.f & hr) !== 0 ? n.parent = null : Lt(n, t), n = r;
  }
}
function fp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Dn) === 0 && Lt(t), t = n;
  }
}
function Lt(e, t = !0) {
  var n = !1;
  (t || (e.f & Kf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (mu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), vu(e, t && !n), ai(e, 0), pn(e, ki);
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
      /* @__PURE__ */ vn(e)
    );
    e.remove(), e = n;
  }
}
function yu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Or(e, t) {
  var n = [];
  Xs(e, n, !0), wu(n, () => {
    Lt(e), t && t();
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
function Xs(e, t, n) {
  if ((e.f & En) === 0) {
    if (e.f ^= En, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rr) !== 0 || (r.f & Dn) !== 0;
      Xs(r, t, i ? n : !1), r = o;
    }
  }
}
function ro(e) {
  bu(e, !0);
}
function bu(e, t) {
  if ((e.f & En) !== 0) {
    e.f ^= En;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rr) !== 0 || (n.f & Dn) !== 0;
      bu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const pp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let oo = [], io = [];
function xu() {
  var e = oo;
  oo = [], oi(e);
}
function $u() {
  var e = io;
  io = [], oi(e);
}
function Eo(e) {
  oo.length === 0 && queueMicrotask(xu), oo.push(e);
}
function gp(e) {
  io.length === 0 && pp($u), io.push(e);
}
function hp() {
  oo.length > 0 && xu(), io.length > 0 && $u();
}
function vp(e) {
  var t = (
    /** @type {Effect} */
    Me
  );
  if ((t.f & Wl) === 0) {
    if ((t.f & Is) === 0)
      throw e;
    t.fn(e);
  } else
    Cu(e, t);
}
function Cu(e, t) {
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
let so = !1, ao = null, sr = !1, Yn = !1;
function Aa(e) {
  Yn = e;
}
let to = [], Ze = null, Xt = !1;
function Fn(e) {
  Ze = e;
}
let Me = null;
function Xn(e) {
  Me = e;
}
let Pn = null;
function ku(e) {
  Ze !== null && Ze.f & is && (Pn === null ? Pn = [e] : Pn.push(e));
}
let $t = null, Nt = 0, Bt = null;
function mp(e) {
  Bt = e;
}
let si = 1, lo = 0, ar = lo;
function Ia(e) {
  ar = e;
}
let Zn = !1;
function _u() {
  return ++si;
}
function Si(e) {
  var t = e.f;
  if ((t & Tn) !== 0)
    return !0;
  if ((t & vr) !== 0) {
    var n = e.deps, r = (t & Mt) !== 0;
    if (n !== null) {
      var o, i, s = (t & ii) !== 0, a = r && Me !== null && !Zn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        s && (u.f ^= ii), a && d !== null && (d.f & Mt) === 0 && (u.f ^= Mt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Si(
          /** @type {Derived} */
          i
        ) && ou(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Me !== null && !Zn) && pn(e, Ht);
  }
  return !1;
}
function Su(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Pn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & zt) !== 0 ? Su(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Tn) : (i.f & Ht) !== 0 && pn(i, vr), Ei(
        /** @type {Effect} */
        i
      ));
    }
}
function Eu(e) {
  var t = $t, n = Nt, r = Bt, o = Ze, i = Zn, s = Pn, a = Je, l = Xt, u = ar, d = e.f;
  $t = /** @type {null | Value[]} */
  null, Nt = 0, Bt = null, Zn = (d & Mt) !== 0 && (Xt || !sr || Ze === null), Ze = (d & (Dn | hr)) === 0 ? e : null, Pn = null, Va(e.ctx), Xt = !1, ar = ++lo, e.f |= is, e.ac !== null && (e.ac.abort(Gl), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if ($t !== null) {
      var g;
      if (ai(e, Nt), f !== null && Nt > 0)
        for (f.length = Nt + $t.length, g = 0; g < $t.length; g++)
          f[Nt + g] = $t[g];
      else
        e.deps = f = $t;
      if (!Zn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & zt) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Nt; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Nt < f.length && (ai(e, Nt), f.length = Nt);
    if (_i() && Bt !== null && !Xt && f !== null && (e.f & (zt | vr | Tn)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Bt.length; g++)
        Su(
          Bt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (lo++, Bt !== null && (r === null ? r = Bt : r.push(.../** @type {Source[]} */
    Bt))), p;
  } catch (h) {
    vp(h);
  } finally {
    $t = t, Nt = n, Bt = r, Ze = o, Zn = i, Pn = s, Va(a), Xt = l, ar = u, e.f ^= is;
  }
}
function yp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = qf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & zt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($t === null || !$t.includes(t)) && (pn(t, vr), (t.f & (Mt | ii)) === 0 && (t.f ^= ii), ru(
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
function Ws(e) {
  var t = e.f;
  if ((t & ki) === 0) {
    pn(e, Ht);
    var n = Me, r = sr;
    Me = e, sr = !0;
    try {
      (t & As) !== 0 ? fp(e) : vu(e), hu(e);
      var o = Eu(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = si;
      var i;
      Rf && np && (e.f & Tn) !== 0 && e.deps;
    } finally {
      sr = r, Me = n;
    }
  }
}
function wp() {
  try {
    Jf();
  } catch (e) {
    if (ao !== null)
      Cu(e, ao);
    else
      throw e;
  }
}
function Pu() {
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
      if ((r.f & (ki | En)) === 0 && Si(r)) {
        var o = si;
        if (Ws(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? yu(r) : r.fn = null), si > o && (r.f & Rs) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      Ei(e[n]);
  }
}
function Ei(e) {
  so || (so = !0, queueMicrotask(Pu));
  for (var t = ao = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | Dn)) !== 0) {
      if ((n & Ht) === 0) return;
      t.f ^= Ht;
    }
  }
  to.push(t);
}
function xp(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (Dn | hr)) !== 0, i = o && (r & Ht) !== 0;
    if (!i && (r & En) === 0) {
      (r & Hs) !== 0 ? t.push(n) : o ? n.f ^= Ht : Si(n) && Ws(n);
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
function v(e) {
  for (var t; ; ) {
    if (hp(), to.length === 0)
      return so = !1, ao = null, /** @type {T} */
      t;
    so = !0, Pu();
  }
}
async function $p() {
  await Promise.resolve(), v();
}
function c(e) {
  var t = e.f, n = (t & zt) !== 0;
  if (Ze !== null && !Xt) {
    if (!Pn?.includes(e)) {
      var r = Ze.deps;
      e.rv < lo && (e.rv = lo, $t === null && r !== null && r[Nt] === e ? Nt++ : $t === null ? $t = [e] : (!Zn || !$t.includes(e)) && $t.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Mt) === 0 && (o.f ^= Mt);
  }
  if (n && !Yn && (o = /** @type {Derived} */
  e, Si(o) && ou(o)), Yn) {
    if (ir.has(e))
      return ir.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & Ht) !== 0 || Tu(o)) && (s = js(o)), ir.set(o, s), s;
    }
  }
  return e.v;
}
function Tu(e) {
  if (e.v === vt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ir.has(t) || (t.f & zt) !== 0 && Tu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ft(e) {
  var t = Xt;
  try {
    return Xt = !0, e();
  } finally {
    Xt = t;
  }
}
const Cp = -7169;
function pn(e, t) {
  e.f = e.f & Cp | t;
}
function kp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Js(e) {
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
    const n = Ci(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Fl(n);
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
  Ce && /* @__PURE__ */ lt(e) !== null && Ys(e);
}
let Ra = !1;
function Ep() {
  Ra || (Ra = !0, document.addEventListener(
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
  var t = Ze, n = Me;
  Fn(null), Xn(null);
  try {
    return e();
  } finally {
    Fn(t), Xn(n);
  }
}
const Lu = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set();
function Gs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Gr.call(t, i), !i.cancelBubble)
      return Pp(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Eo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ds(e, t, n, r = {}) {
  var o = Gs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function qa(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Gs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && fu(() => {
    t.removeEventListener(e, s, i);
  });
}
function Vn(e) {
  for (var t = 0; t < e.length; t++)
    Lu.add(e[t]);
  for (var n of cs)
    n(e);
}
function Gr(e) {
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
    var d = Ze, p = Me;
    Fn(null), Xn(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var y = i["__" + r];
          if (y != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (xo(y)) {
              var [C, ...w] = y;
              C.apply(i, [e, ...w]);
            } else
              y.call(i, e);
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
      e.__root = t, delete e.currentTarget, Fn(d), Xn(p);
    }
  }
}
function Us(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    Me
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & Yl) !== 0, r = (t & zf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Ce)
      return Tt(Te, null), Te;
    o === void 0 && (o = Us(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ lt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || lu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Tt(a, l);
    } else
      Tt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Tp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Yl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Ce)
      return Tt(Te, null), Te;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Us(i)
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
      Tt(d, p);
    } else
      Tt(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ Tp(e, t, "svg");
}
function Ee(e = "") {
  if (!Ce) {
    var t = On(e + "");
    return Tt(t, t), t;
  }
  var n = Te;
  return n.nodeType !== Zs && (n.before(n = On()), yt(n)), Tt(n, n), n;
}
function Ve() {
  if (Ce)
    return Tt(Te, null), Te;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Tt(t, n), e;
}
function D(e, t) {
  if (Ce) {
    Me.nodes_end = Te, Ln();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Lp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Op = [
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
  return Op.includes(e);
}
const Dp = {
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
function Mp(e) {
  return e = e.toLowerCase(), Dp[e] ?? e;
}
const Vp = ["touchstart", "touchmove"];
function zp(e) {
  return Vp.includes(e);
}
const Hp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function Ap(e) {
  return Hp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ke(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Ou(e, t) {
  return Nu(e, t);
}
function Ip(e, t) {
  ls(), t.intro = t.intro ?? !1;
  const n = t.target, r = Ce, o = Te;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(n)
    ); i && (i.nodeType !== Tr || /** @type {Comment} */
    i.data !== Ds); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(i);
    if (!i)
      throw or;
    Dt(!0), yt(
      /** @type {Comment} */
      i
    ), Ln();
    const s = Nu(e, { ...t, anchor: i });
    if (Te === null || Te.nodeType !== Tr || /** @type {Comment} */
    Te.data !== Vs)
      throw ko(), or;
    return Dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === or)
      return t.recover === !1 && Gf(), ls(), Ys(n), Dt(!1), Ou(e, t);
    throw s;
  } finally {
    Dt(r), yt(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function Nu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ls();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = zp(g);
        t.addEventListener(g, Gr, { passive: h });
        var y = xr.get(g);
        y === void 0 ? (document.addEventListener(g, Gr, { passive: h }), xr.set(g, 1)) : xr.set(g, y + 1);
      }
    }
  };
  l(zs(Lu)), cs.add(l);
  var u = void 0, d = dp(() => {
    var p = n ?? t.appendChild(On());
    return fn(() => {
      if (i) {
        fe({});
        var f = (
          /** @type {ComponentContext} */
          Je
        );
        f.c = i;
      }
      o && (r.$$events = o), Ce && Tt(
        /** @type {TemplateNode} */
        p,
        null
      ), u = e(p, r) || {}, Ce && (Me.nodes_end = Te), i && pe();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Gr);
        var g = (
          /** @type {number} */
          xr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Gr), xr.delete(f)) : xr.set(f, g);
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
  var r = e, o = gt, i;
  Un(() => {
    o !== (o = t()) && (i && (Lt(i), i = null), i = fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Rr), Ce && (r = Te);
}
function Qn(e) {
  Je === null && Bs(), qr && Je.l !== null ? qp(Je).m.push(e) : nt(() => {
    const t = ft(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pi(e) {
  Je === null && Bs(), Qn(() => () => ft(e));
}
function qp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, [n, r] = [0, 0]) {
  Ce && n === 0 && Ln();
  var o = e, i = null, s = null, a = vt, l = n > 0 ? Rr : 0, u = !1;
  const d = (f, g = !0) => {
    u = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (Ce && r !== -1) {
      if (n === 0) {
        const C = au(o);
        C === Ds ? r = 0 : C === Ms ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const y = r > n;
      !!a === y && (o = as(), yt(o), Dt(!1), h = !0, r = -1);
    }
    a ? (i ? ro(i) : g && (i = fn(() => g(o))), s && Or(s, () => {
      s = null;
    })) : (s ? ro(s) : g && (s = fn(() => g(o, [n + 1, r]))), i && Or(i, () => {
      i = null;
    })), h && Dt(!0);
  };
  Un(() => {
    u = !1, t(d), u || p(null, null);
  }, l), Ce && (o = Te);
}
function Zp(e, t) {
  Ce && yt(
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
function Bp(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Xs(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ys(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Rn(e, t[0].prev, t[i - 1].next);
  }
  wu(o, () => {
    for (var u = 0; u < i; u++) {
      var d = t[u];
      a || (r.delete(d.k), Rn(e, d.prev, d.next)), Lt(d.e, !a);
    }
  });
}
function wt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Kl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = Ce ? yt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ lt(u)
    ) : u.appendChild(On());
  }
  Ce && Ln();
  var d = null, p = !1, f = /* @__PURE__ */ Ks(() => {
    var g = n();
    return xo(g) ? g : g == null ? [] : zs(g);
  });
  Un(() => {
    var g = c(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let y = !1;
    if (Ce) {
      var C = au(s) === Ms;
      C !== (h === 0) && (s = as(), yt(s), Dt(!1), y = !0);
    }
    if (Ce) {
      for (var w = null, E, x = 0; x < h; x++) {
        if (Te.nodeType === Tr && /** @type {Comment} */
        Te.data === Vs) {
          s = /** @type {Comment} */
          Te, y = !0, Dt(!1);
          break;
        }
        var $ = g[x], _ = r($, x);
        E = Du(
          Te,
          a,
          w,
          null,
          $,
          _,
          x,
          o,
          t,
          n
        ), a.items.set(_, E), w = E;
      }
      h > 0 && yt(as());
    }
    Ce || Kp(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? ro(d) : d = fn(() => i(s)) : d !== null && Or(d, () => {
      d = null;
    })), y && Dt(!0), c(f);
  }), Ce && (s = Te);
}
function Kp(e, t, n, r, o, i, s) {
  var a = (o & Lf) !== 0, l = (o & (Os | Ns)) !== 0, u = e.length, d = t.items, p = t.first, f = p, g, h = null, y, C = [], w = [], E, x, $, _;
  if (a)
    for (_ = 0; _ < u; _ += 1)
      E = e[_], x = i(E, _), $ = d.get(x), $ !== void 0 && ($.a?.measure(), (y ??= /* @__PURE__ */ new Set()).add($));
  for (_ = 0; _ < u; _ += 1) {
    if (E = e[_], x = i(E, _), $ = d.get(x), $ === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Du(
        M,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        x,
        _,
        r,
        o,
        s
      ), d.set(x, h), C = [], w = [], f = h.next;
      continue;
    }
    if (l && jp($, E, _, o), ($.e.f & En) !== 0 && (ro($.e), a && ($.a?.unfix(), (y ??= /* @__PURE__ */ new Set()).delete($))), $ !== f) {
      if (g !== void 0 && g.has($)) {
        if (C.length < w.length) {
          var V = w[0], Z;
          h = V.prev;
          var U = C[0], j = C[C.length - 1];
          for (Z = 0; Z < C.length; Z += 1)
            Za(C[Z], V, n);
          for (Z = 0; Z < w.length; Z += 1)
            g.delete(w[Z]);
          Rn(t, U.prev, j.next), Rn(t, h, U), Rn(t, j, V), f = V, h = j, _ -= 1, C = [], w = [];
        } else
          g.delete($), Za($, f, n), Rn(t, $.prev, $.next), Rn(t, $, h === null ? t.first : h.next), Rn(t, h, $), h = $;
        continue;
      }
      for (C = [], w = []; f !== null && f.k !== x; )
        (f.e.f & En) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      $ = f;
    }
    C.push($), h = $, f = $.next;
  }
  if (f !== null || g !== void 0) {
    for (var N = g === void 0 ? [] : zs(g); f !== null; )
      (f.e.f & En) === 0 && N.push(f), f = f.next;
    var k = N.length;
    if (k > 0) {
      var L = (o & Kl) !== 0 && u === 0 ? n : null;
      if (a) {
        for (_ = 0; _ < k; _ += 1)
          N[_].a?.measure();
        for (_ = 0; _ < k; _ += 1)
          N[_].a?.fix();
      }
      Bp(t, N, L, d);
    }
  }
  a && Eo(() => {
    if (y !== void 0)
      for ($ of y)
        $.a?.apply();
  }), Me.first = t.first && t.first.e, Me.last = h && h.e;
}
function jp(e, t, n, r) {
  (r & Os) !== 0 && ss(e.v, t), (r & Ns) !== 0 ? ss(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Du(e, t, n, r, o, i, s, a, l, u) {
  var d = (l & Os) !== 0, p = (l & Of) === 0, f = d ? p ? /* @__PURE__ */ iu(o, !1, !1) : ur(o) : o, g = (l & Ns) === 0 ? s : ur(s), h = {
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
    return h.e = fn(() => a(e, f, g, u), Ce), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Za(e, t, n) {
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
      Me
    );
    if (s === (s = t() ?? "")) {
      Ce && Ln();
      return;
    }
    if (a.nodes_start !== null && (mu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Ce) {
        Te.data;
        for (var l = Ln(), u = l; l !== null && (l.nodeType !== Tr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ vn(l);
        if (l === null)
          throw ko(), or;
        Tt(Te, u), i = yt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Us(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ lt(p)), Tt(
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
  Ce && Ln();
  var r = e, o, i;
  Un(() => {
    o !== (o = t()) && (i && (Or(i), i = null), o && (i = fn(() => n(r, o))));
  }, Rr), Ce && (r = Te);
}
function Yp(e, t, n, r, o, i) {
  let s = Ce;
  Ce && Ln();
  var a, l, u = null;
  Ce && Te.nodeType === Yf && (u = /** @type {Element} */
  Te, Ln());
  var d = (
    /** @type {TemplateNode} */
    Ce ? Te : e
  ), p;
  Un(() => {
    const f = t() || null;
    var g = f === "svg" ? Af : null;
    f !== a && (p && (f === null ? Or(p, () => {
      p = null, l = null;
    }) : f === l ? ro(p) : Lt(p)), f && f !== l && (p = fn(() => {
      if (u = Ce ? (
        /** @type {Element} */
        u
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Tt(u, u), r) {
        Ce && Ap(f) && u.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Ce ? /* @__PURE__ */ lt(u) : u.appendChild(On())
        );
        Ce && (h === null ? Dt(!1) : yt(h)), r(u, h);
      }
      Me.nodes_end = u, d.before(u);
    })), a = f, a && (l = a));
  }, Rr), s && (Dt(!0), yt(d));
}
function Ae(e, t) {
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
function mt(e, t, n) {
  _o(() => {
    var r = ft(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      So(() => {
        var s = n();
        Js(s), o && Ql(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Fp(e, t) {
  var n = void 0, r;
  Un(() => {
    n !== (n = t()) && (r && (Lt(r), r = null), n && (r = fn(() => {
      _o(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Mu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Mu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Xp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Mu(e)) && (r && (r += " "), r += t);
  return r;
}
function zn(e) {
  return typeof e == "object" ? Xp(e) : e ?? "";
}
const Ba = [...` 	
\r\f \v\uFEFF`];
function Wp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ba.includes(r[s - 1])) && (a === r.length || Ba.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Ka(e, t = !1) {
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
function Jp(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ji)), o && l.push(...Object.keys(o).map(ji));
      var u = 0, d = -1;
      const y = e.length;
      for (var p = 0; p < y; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === y - 1) {
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
    return r && (n += Ka(r)), o && (n += Ka(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Ot(e, t, n, r, o, i) {
  var s = e.__className;
  if (Ce || s !== n || s === void 0) {
    var a = Wp(n, r, i);
    (!Ce || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
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
  if (Ce || o !== t) {
    var i = Jp(t, r);
    (!Ce || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Yi(e, n?.[0], r[0]), Yi(e, n?.[1], r[1], "important")) : Yi(e, n, r));
  return r;
}
function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!xo(t))
      return lp();
    for (var r of e.options)
      r.selected = t.includes(ja(r));
    return;
  }
  for (r of e.options) {
    var o = ja(r);
    if (sp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Gp(e) {
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
function ja(e) {
  return "__value" in e ? e.__value : e.value;
}
const qn = Symbol("class"), on = Symbol("style"), Vu = Symbol("is custom element"), zu = Symbol("is html");
function ln(e) {
  if (Ce) {
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
function Wo(e, t) {
  var n = Ti(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function gs(e, t) {
  var n = Ti(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Up(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Ti(e);
  Ce && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[jf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Hu(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qp(e, t, n, r, o = !1) {
  var i = Ti(e), s = i[Vu], a = !i[zu];
  let l = Ce && s;
  l && Dt(!1);
  var u = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = zn(n.class) : (r || n[qn]) && (n.class = null), n[on] && (n.style ??= null);
  var f = Hu(e);
  for (const x in n) {
    let $ = n[x];
    if (d && x === "value" && $ == null) {
      e.value = e.__value = "", u[x] = $;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ot(e, g, $, r, t?.[qn], n[qn]), u[x] = $, u[qn] = n[qn];
      continue;
    }
    if (x === "style") {
      Ct(e, $, t?.[on], n[on]), u[x] = $, u[on] = n[on];
      continue;
    }
    var h = u[x];
    if (!($ === h && !($ === void 0 && e.hasAttribute(x)))) {
      u[x] = $;
      var y = x[0] + x[1];
      if (y !== "$$")
        if (y === "on") {
          const _ = {}, M = "$$" + x;
          let V = x.slice(2);
          var C = Np(V);
          if (Lp(V) && (V = V.slice(0, -7), _.capture = !0), !C && h) {
            if ($ != null) continue;
            e.removeEventListener(V, u[M], _), u[M] = null;
          }
          if ($ != null)
            if (C)
              e[`__${V}`] = $, Vn([V]);
            else {
              let Z = function(U) {
                u[x].call(this, U);
              };
              u[M] = Gs(V, e, Z, _);
            }
          else C && (e[`__${V}`] = void 0);
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
          Up(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var w = x;
          a || (w = Mp(w));
          var E = w === "defaultValue" || w === "defaultChecked";
          if ($ == null && !s && !E)
            if (i[x] = null, w === "value" || w === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (w === "value") {
                let V = _.defaultValue;
                _.removeAttribute(w), _.defaultValue = V, _.value = _.__value = M ? V : null;
              } else {
                let V = _.defaultChecked;
                _.removeAttribute(w), _.defaultChecked = V, _.checked = M ? V : !1;
              }
            } else
              e.removeAttribute(x);
          else E || f.includes(w) && (s || typeof $ != "string") ? e[w] = $ : typeof $ != "function" && $e(e, w, $);
        }
    }
  }
  return l && Dt(!0), u;
}
function ut(e, t, n = [], r, o = !1, i = Zr) {
  const s = n.map(i);
  var a = void 0, l = {}, u = e.nodeName === "SELECT", d = !1;
  if (Un(() => {
    var f = t(...s.map(c)), g = Qp(e, a, f, r, o);
    d && u && "value" in f && ps(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let y of Object.getOwnPropertySymbols(l))
      f[y] || Lt(l[y]);
    for (let y of Object.getOwnPropertySymbols(f)) {
      var h = f[y];
      y.description === If && (!a || h !== a[y]) && (l[y] && Lt(l[y]), l[y] = fn(() => Fp(e, () => h))), g[y] = h;
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
      ), Gp(p);
    });
  }
  d = !0;
}
function Ti(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Vu]: e.nodeName.includes("-"),
      [zu]: e.namespaceURI === Hf
    }
  );
}
var Ya = /* @__PURE__ */ new Map();
function Hu(e) {
  var t = Ya.get(e.nodeName);
  if (t) return t;
  Ya.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Fl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ci(r);
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
function Fa(e, t, n) {
  var r = eg.observe(e, () => n(e[t]));
  _o(() => (ft(() => n(e[t])), r));
}
function Xa(e, t) {
  return e === t || e?.[an] === t;
}
function At(e = {}, t, n, r) {
  return _o(() => {
    var o, i;
    return So(() => {
      o = i, i = [], ft(() => {
        e !== n(...i) && (t(e, ...i), o && Xa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Eo(() => {
        i && Xa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Au(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Je
  ), n = t.l.u;
  if (!n) return;
  let r = () => Js(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Zr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => c(s);
  }
  n.b.length && gu(() => {
    Wa(t, r), oi(n.b);
  }), nt(() => {
    const o = ft(() => n.m.map(Bf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && nt(() => {
    Wa(t, r), oi(n.a);
  });
}
function Wa(e, t) {
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
function Be(e, t, n) {
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
      var r = Me;
      try {
        Xn(e.parent_effect), e.special[t] = m(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          jl
        );
      } finally {
        Xn(r);
      }
    }
    return e.special[t](n), Ha(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ha(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Ja(e, t) {
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
        Me
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
      if (Xr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Xr(o) && (o = o());
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
      if (Xr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === an || t === qs) return !1;
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
function je(...e) {
  return new Proxy({ props: e }, og);
}
function m(e, t, n, r) {
  var o = !qr || (n & Df) !== 0, i = (n & Mf) !== 0, s = (n & Vf) !== 0, a = (
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
    var p = an in e || qs in e;
    d = Sn(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = tg(() => (
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
  }, o && (n & jl) === 0)
    return h;
  if (d) {
    var y = e.$$legacy;
    return function(x, $) {
      return arguments.length > 0 ? ((!o || !$ || y || g) && d($ ? h() : x), x) : h();
    };
  }
  var C = !1, w = ((n & Nf) !== 0 ? Zr : Ks)(() => (C = !1, h()));
  i && c(w);
  var E = (
    /** @type {Effect} */
    Me
  );
  return function(x, $) {
    if (arguments.length > 0) {
      const _ = $ ? c(w) : o && i ? jt(x) : x;
      return J(w, _), C = !0, a !== void 0 && (a = _), x;
    }
    return Yn && C || (E.f & ki) !== 0 ? w.v : c(w);
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
      var a = /* @__PURE__ */ iu(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === qs ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return J(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
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
    }), (!t?.props?.$$host || t.sync === !1) && v(), this.#t = o.$$events;
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
          r !== "default" && (i.name = r), D(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = ag(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Jo(o, r.value, this.$$p_d, "toProp"));
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
      }), this.$$me = Fs(() => {
        So(() => {
          this.$$r = !0;
          for (const r of ni(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Jo(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Jo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
function Jo(e, t, n, r) {
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
  let s = class extends Iu {
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
        l = Jo(a, l, t), this.$$d[a] = l;
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
function Li() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Go(n);
}
function Go(e) {
  this._ = e;
}
function ug(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Go.prototype = Li.prototype = {
  constructor: Go,
  on: function(e, t) {
    var n = this._, r = ug(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = cg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ga(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ga(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Go(e);
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
function Ga(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = lg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var hs = "http://www.w3.org/1999/xhtml";
const Ua = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: hs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Oi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ua.hasOwnProperty(t) ? { space: Ua[t], local: e } : e;
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
function Ru(e) {
  var t = Oi(e);
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
function qu(e) {
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
  typeof e == "function" ? e = mg(e) : e = qu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new It(r, o);
}
function Zu(e) {
  return function() {
    return this.matches(e);
  };
}
function Bu(e) {
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
  return this.select(e == null ? xg : bg(typeof e == "function" ? e : Bu(e)));
}
var Cg = Array.prototype.filter;
function kg() {
  return Array.from(this.children);
}
function _g(e) {
  return function() {
    return Cg.call(this.children, e);
  };
}
function Sg(e) {
  return this.selectAll(e == null ? kg : _g(typeof e == "function" ? e : Bu(e)));
}
function Eg(e) {
  typeof e != "function" && (e = Zu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new It(r, this._parents);
}
function Ku(e) {
  return new Array(e.length);
}
function Pg() {
  return new It(this._enter || this._groups.map(Ku), this._parents);
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
function Tg(e) {
  return function() {
    return e;
  };
}
function Lg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new li(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Og(e, t, n, r, o, i, s) {
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
function Dg(e, t) {
  if (!arguments.length) return Array.from(this, Ng);
  var n = t ? Og : Lg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Tg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, g = Mg(e.call(d, d && d.__data__, u, r)), h = g.length, y = a[u] = new Array(h), C = s[u] = new Array(h), w = l[u] = new Array(f);
    n(d, p, y, C, w, g, t);
    for (var E = 0, x = 0, $, _; E < h; ++E)
      if ($ = y[E]) {
        for (E >= x && (x = E + 1); !(_ = C[x]) && ++x < h; ) ;
        $._next = _ || null;
      }
  }
  return s = new It(s, r), s._enter = a, s._exit = l, s;
}
function Mg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vg() {
  return new It(this._exit || this._groups.map(Ku), this._parents);
}
function zg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Hg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = u[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new It(a, this._parents);
}
function Ag() {
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
function qg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Zg() {
  return Array.from(this);
}
function Bg() {
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
function Yg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Fg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Xg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Wg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Jg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Gg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Ug(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Qg(e, t) {
  var n = Oi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Xg : Fg : typeof t == "function" ? n.local ? Ug : Gg : n.local ? Jg : Wg)(n, t));
}
function ju(e) {
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
  return arguments.length > 1 ? this.each((t == null ? eh : typeof t == "function" ? nh : th)(e, t, n ?? "")) : Dr(this.node(), e);
}
function Dr(e, t) {
  return e.style.getPropertyValue(t) || ju(e).getComputedStyle(e, null).getPropertyValue(t);
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
function Yu(e) {
  return e.trim().split(/^|\s+/);
}
function ra(e) {
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
function Xu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Wu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lh(e) {
  return function() {
    Xu(this, e);
  };
}
function uh(e) {
  return function() {
    Wu(this, e);
  };
}
function ch(e, t) {
  return function() {
    (t.apply(this, arguments) ? Xu : Wu)(this, e);
  };
}
function dh(e, t) {
  var n = Yu(e + "");
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
function Ch() {
  return this.each($h);
}
function kh(e) {
  var t = typeof e == "function" ? e : Ru(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function _h() {
  return null;
}
function Sh(e, t) {
  var n = typeof e == "function" ? e : Ru(e), r = t == null ? _h : typeof t == "function" ? t : na(t);
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
function Th() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Lh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Oh(e) {
  return this.select(e ? Lh : Th);
}
function Nh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Dh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Mh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Vh(e) {
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
    var r = this.__on, o, i = Dh(t);
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
function Hh(e, t, n) {
  var r = Mh(e + ""), o, i = r.length, s;
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
  for (a = t ? zh : Vh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Ju(e, t, n) {
  var r = ju(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Ah(e, t) {
  return function() {
    return Ju(this, e, t);
  };
}
function Ih(e, t) {
  return function() {
    return Ju(this, e, t.apply(this, arguments));
  };
}
function Rh(e, t) {
  return this.each((typeof t == "function" ? Ih : Ah)(e, t));
}
function* qh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Gu = [null];
function It(e, t) {
  this._groups = e, this._parents = t;
}
function Po() {
  return new It([[document.documentElement]], Gu);
}
function Zh() {
  return this;
}
It.prototype = Po.prototype = {
  constructor: It,
  select: gg,
  selectAll: yg,
  selectChild: $g,
  selectChildren: Sg,
  filter: Eg,
  data: Dg,
  enter: Pg,
  exit: Vg,
  join: zg,
  merge: Hg,
  selection: Zh,
  order: Ag,
  sort: Ig,
  call: qg,
  nodes: Zg,
  node: Bg,
  size: Kg,
  empty: jg,
  each: Yg,
  attr: Qg,
  style: rh,
  property: ah,
  classed: dh,
  text: hh,
  html: wh,
  raise: xh,
  lower: Ch,
  append: kh,
  insert: Sh,
  remove: Ph,
  clone: Oh,
  datum: Nh,
  on: Hh,
  dispatch: Rh,
  [Symbol.iterator]: qh
};
function Kt(e) {
  return typeof e == "string" ? new It([[document.querySelector(e)]], [document.documentElement]) : new It([[e]], Gu);
}
function Bh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ft(e, t) {
  if (e = Bh(e), t === void 0 && (t = e.currentTarget), t) {
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
function Fi(e) {
  e.stopImmediatePropagation();
}
function _r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Uu(e) {
  var t = e.document.documentElement, n = Kt(e).on("dragstart.drag", _r, uo);
  "onselectstart" in t ? n.on("selectstart.drag", _r, uo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Qu(e, t) {
  var n = e.document.documentElement, r = Kt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", _r, uo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const qo = (e) => () => e;
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
function Yh() {
  return this.parentNode;
}
function Fh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Xh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Wh() {
  var e = jh, t = Yh, n = Fh, r = Xh, o = {}, i = Li("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f($) {
    $.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", w, Kh).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g($, _) {
    if (!(d || !e.call(this, $, _))) {
      var M = x(this, t.call(this, $, _), $, _, "mouse");
      M && (Kt($.view).on("mousemove.drag", h, uo).on("mouseup.drag", y, uo), Uu($.view), Fi($), u = !1, a = $.clientX, l = $.clientY, M("start", $));
    }
  }
  function h($) {
    if (_r($), !u) {
      var _ = $.clientX - a, M = $.clientY - l;
      u = _ * _ + M * M > p;
    }
    o.mouse("drag", $);
  }
  function y($) {
    Kt($.view).on("mousemove.drag mouseup.drag", null), Qu($.view, u), _r($), o.mouse("end", $);
  }
  function C($, _) {
    if (e.call(this, $, _)) {
      var M = $.changedTouches, V = t.call(this, $, _), Z = M.length, U, j;
      for (U = 0; U < Z; ++U)
        (j = x(this, V, $, _, M[U].identifier, M[U])) && (Fi($), j("start", $, M[U]));
    }
  }
  function w($) {
    var _ = $.changedTouches, M = _.length, V, Z;
    for (V = 0; V < M; ++V)
      (Z = o[_[V].identifier]) && (_r($), Z("drag", $, _[V]));
  }
  function E($) {
    var _ = $.changedTouches, M = _.length, V, Z;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), V = 0; V < M; ++V)
      (Z = o[_[V].identifier]) && (Fi($), Z("end", $, _[V]));
  }
  function x($, _, M, V, Z, U) {
    var j = i.copy(), N = Ft(U || M, _), k, L, b;
    if ((b = n.call($, new vs("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: Z,
      active: s,
      x: N[0],
      y: N[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), V)) != null)
      return k = b.x - N[0] || 0, L = b.y - N[1] || 0, function P(T, A, R) {
        var O = N, B;
        switch (T) {
          case "start":
            o[Z] = P, B = s++;
            break;
          case "end":
            delete o[Z], --s;
          // falls through
          case "drag":
            N = Ft(R || A, _), B = s;
            break;
        }
        j.call(
          T,
          $,
          new vs(T, {
            sourceEvent: A,
            subject: b,
            target: f,
            identifier: Z,
            active: B,
            x: N[0] + k,
            y: N[1] + L,
            dx: N[0] - O[0],
            dy: N[1] - O[1],
            dispatch: j
          }),
          V
        );
      };
  }
  return f.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : qo(!!$), f) : e;
  }, f.container = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : qo($), f) : t;
  }, f.subject = function($) {
    return arguments.length ? (n = typeof $ == "function" ? $ : qo($), f) : n;
  }, f.touchable = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : qo(!!$), f) : r;
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
function ec(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function To() {
}
var co = 0.7, ui = 1 / co, Sr = "\\s*([+-]?\\d+)\\s*", fo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Jh = /^#([0-9a-f]{3,8})$/, Gh = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Uh = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), Qh = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${fo}\\)$`), e1 = new RegExp(`^rgba\\(${un},${un},${un},${fo}\\)$`), t1 = new RegExp(`^hsl\\(${fo},${un},${un}\\)$`), n1 = new RegExp(`^hsla\\(${fo},${un},${un},${fo}\\)$`), Qa = {
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
oa(To, cr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: el,
  // Deprecated! Use color.formatHex.
  formatHex: el,
  formatHex8: r1,
  formatHsl: o1,
  formatRgb: tl,
  toString: tl
});
function el() {
  return this.rgb().formatHex();
}
function r1() {
  return this.rgb().formatHex8();
}
function o1() {
  return tc(this).formatHsl();
}
function tl() {
  return this.rgb().formatRgb();
}
function cr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Jh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? nl(t) : n === 3 ? new Et(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Gh.exec(e)) ? new Et(t[1], t[2], t[3], 1) : (t = Uh.exec(e)) ? new Et(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qh.exec(e)) ? Zo(t[1], t[2], t[3], t[4]) : (t = e1.exec(e)) ? Zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = t1.exec(e)) ? il(t[1], t[2] / 100, t[3] / 100, 1) : (t = n1.exec(e)) ? il(t[1], t[2] / 100, t[3] / 100, t[4]) : Qa.hasOwnProperty(e) ? nl(Qa[e]) : e === "transparent" ? new Et(NaN, NaN, NaN, 0) : null;
}
function nl(e) {
  return new Et(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Zo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Et(e, t, n, r);
}
function i1(e) {
  return e instanceof To || (e = cr(e)), e ? (e = e.rgb(), new Et(e.r, e.g, e.b, e.opacity)) : new Et();
}
function ms(e, t, n, r) {
  return arguments.length === 1 ? i1(e) : new Et(e, t, n, r ?? 1);
}
function Et(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
oa(Et, ms, ec(To, {
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
  hex: rl,
  // Deprecated! Use color.formatHex.
  formatHex: rl,
  formatHex8: s1,
  formatRgb: ol,
  toString: ol
}));
function rl() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function s1() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ol() {
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
function il(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Wt(e, t, n, r);
}
function tc(e) {
  if (e instanceof Wt) return new Wt(e.h, e.s, e.l, e.opacity);
  if (e instanceof To || (e = cr(e)), !e) return new Wt();
  if (e instanceof Wt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Wt(s, a, l, e.opacity);
}
function a1(e, t, n, r) {
  return arguments.length === 1 ? tc(e) : new Wt(e, t, n, r ?? 1);
}
function Wt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
oa(Wt, a1, ec(To, {
  brighter(e) {
    return e = e == null ? ui : Math.pow(ui, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? co : Math.pow(co, e), new Wt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Et(
      Xi(e >= 240 ? e - 240 : e + 120, o, r),
      Xi(e, o, r),
      Xi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Wt(sl(this.h), Bo(this.s), Bo(this.l), ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${sl(this.h)}, ${Bo(this.s) * 100}%, ${Bo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function sl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Xi(e, t, n) {
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
  return (e = +e) == 1 ? nc : function(t, n) {
    return n - t ? u1(t, n, e) : ia(isNaN(t) ? n : t);
  };
}
function nc(e, t) {
  var n = t - e;
  return n ? l1(e, n) : ia(isNaN(e) ? t : e);
}
const di = function e(t) {
  var n = c1(t);
  function r(o, i) {
    var s = n((o = ms(o)).r, (i = ms(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = nc(o.opacity, i.opacity);
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
var ys = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wi = new RegExp(ys.source, "g");
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
function rc(e, t) {
  var n = ys.lastIndex = Wi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ys.exec(e)) && (o = Wi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: rn(r, o) })), n = Wi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? m1(l[0].x) : v1(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function no(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ia(t) : (n === "number" ? rn : n === "string" ? (r = cr(t)) ? (t = r, di) : rc : t instanceof cr ? di : t instanceof Date ? g1 : f1(t) ? d1 : Array.isArray(t) ? p1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? h1 : rn)(e, t);
}
var al = 180 / Math.PI, oc = {
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
    rotate: Math.atan2(t, e) * al,
    skewX: Math.atan(l) * al,
    scaleX: s,
    scaleY: a
  };
}
var Ko;
function y1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? oc : ic(t.a, t.b, t.c, t.d, t.e, t.f);
}
function w1(e) {
  return e == null || (Ko || (Ko = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ko.setAttribute("transform", e), !(e = Ko.transform.baseVal.consolidate())) ? oc : (e = e.matrix, ic(e.a, e.b, e.c, e.d, e.e, e.f));
}
function sc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, g, h) {
    if (u !== p || d !== f) {
      var y = g.push("translate(", null, t, null, n);
      h.push({ i: y - 4, x: rn(u, p) }, { i: y - 2, x: rn(d, f) });
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
      var y = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: y - 4, x: rn(u, p) }, { i: y - 2, x: rn(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(g) {
      for (var h = -1, y = f.length, C; ++h < y; ) p[(C = f[h]).i] = C.x(g);
      return p.join("");
    };
  };
}
var b1 = sc(y1, "px, ", "px)", "deg)"), x1 = sc(w1, ", ", ")", ")"), $1 = 1e-12;
function ll(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function C1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function k1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Uo = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, y = g * g + h * h, C, w;
    if (y < $1)
      w = Math.log(f / u) / t, C = function(V) {
        return [
          a + V * g,
          l + V * h,
          u * Math.exp(t * V * w)
        ];
      };
    else {
      var E = Math.sqrt(y), x = (f * f - u * u + r * y) / (2 * u * n * E), $ = (f * f - u * u - r * y) / (2 * f * n * E), _ = Math.log(Math.sqrt(x * x + 1) - x), M = Math.log(Math.sqrt($ * $ + 1) - $);
      w = (M - _) / t, C = function(V) {
        var Z = V * w, U = ll(_), j = u / (n * E) * (U * k1(t * Z + _) - C1(_));
        return [
          a + j * g,
          l + j * h,
          u * U / ll(t * Z + _)
        ];
      };
    }
    return C.duration = w * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Mr = 0, Ur = 0, Wr = 0, ac = 1e3, fi, Qr, pi = 0, dr = 0, Ni = 0, po = typeof performance == "object" && performance.now ? performance : Date, lc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function sa() {
  return dr || (lc(_1), dr = po.now() + Ni);
}
function _1() {
  dr = 0;
}
function gi() {
  this._call = this._time = this._next = null;
}
gi.prototype = uc.prototype = {
  constructor: gi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? sa() : +n) + (t == null ? 0 : +t), !this._next && Qr !== this && (Qr ? Qr._next = this : fi = this, Qr = this), this._call = e, this._time = n, ws();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ws());
  }
};
function uc(e, t, n) {
  var r = new gi();
  return r.restart(e, t, n), r;
}
function S1() {
  sa(), ++Mr;
  for (var e = fi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Mr;
}
function ul() {
  dr = (pi = po.now()) + Ni, Mr = Ur = 0;
  try {
    S1();
  } finally {
    Mr = 0, P1(), dr = 0;
  }
}
function E1() {
  var e = po.now(), t = e - pi;
  t > ac && (Ni -= t, pi = e);
}
function P1() {
  for (var e, t = fi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : fi = n);
  Qr = e, ws(r);
}
function ws(e) {
  if (!Mr) {
    Ur && (Ur = clearTimeout(Ur));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (Ur = setTimeout(ul, e - po.now() - Ni)), Wr && (Wr = clearInterval(Wr))) : (Wr || (pi = po.now(), Wr = setInterval(E1, ac)), Mr = 1, lc(ul));
  }
}
function cl(e, t, n) {
  var r = new gi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var T1 = Li("start", "end", "cancel", "interrupt"), L1 = [], cc = 0, dl = 1, bs = 2, Qo = 3, fl = 4, xs = 5, ei = 6;
function Di(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  O1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: T1,
    tween: L1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: cc
  });
}
function aa(e, t) {
  var n = Ut(e, t);
  if (n.state > cc) throw new Error("too late; already scheduled");
  return n;
}
function mn(e, t) {
  var n = Ut(e, t);
  if (n.state > Qo) throw new Error("too late; already running");
  return n;
}
function Ut(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function O1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = uc(i, 0, n.time);
  function i(u) {
    n.state = dl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, g;
    if (n.state !== dl) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Qo) return cl(s);
        g.state === fl ? (g.state = ei, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = ei, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (cl(function() {
      n.state === Qo && (n.state = fl, n.timer.restart(a, n.delay, n.time), a(u));
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
function D1(e, t) {
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
function M1(e, t, n) {
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
function V1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Ut(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? D1 : M1)(n, e, t));
}
function la(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Ut(o, r).value[t];
  };
}
function dc(e, t) {
  var n;
  return (typeof t == "number" ? rn : t instanceof cr ? di : (n = cr(t)) ? (t = n, di) : rc)(e, t);
}
function z1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function H1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function A1(e, t, n) {
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
function q1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function Z1(e, t) {
  var n = Oi(e), r = n === "transform" ? x1 : dc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? q1 : R1)(n, r, la(this, "attr." + e, t)) : t == null ? (n.local ? H1 : z1)(n) : (n.local ? I1 : A1)(n, r, t));
}
function B1(e, t) {
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
function Y1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && B1(e, i)), n;
  }
  return o._value = t, o;
}
function F1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Oi(e);
  return this.tween(n, (r.local ? j1 : Y1)(r, t));
}
function X1(e, t) {
  return function() {
    aa(this, e).delay = +t.apply(this, arguments);
  };
}
function W1(e, t) {
  return t = +t, function() {
    aa(this, e).delay = t;
  };
}
function J1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? X1 : W1)(t, e)) : Ut(this.node(), t).delay;
}
function G1(e, t) {
  return function() {
    mn(this, e).duration = +t.apply(this, arguments);
  };
}
function U1(e, t) {
  return t = +t, function() {
    mn(this, e).duration = t;
  };
}
function Q1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? G1 : U1)(t, e)) : Ut(this.node(), t).duration;
}
function ev(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    mn(this, e).ease = t;
  };
}
function tv(e) {
  var t = this._id;
  return arguments.length ? this.each(ev(t, e)) : Ut(this.node(), t).ease;
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
  typeof e != "function" && (e = Zu(e));
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
  return arguments.length < 2 ? Ut(this.node(), n).on.on(e) : this.each(av(n, e, t));
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
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Di(u[f], t, n, f, u, Ut(d, n)));
  return new Nn(i, this._parents, t, n);
}
function fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = qu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = Ut(d, n), y = 0, C = f.length; y < C; ++y)
          (g = f[y]) && Di(g, t, n, y, f, h);
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
    var i = Dr(this, e), s = (this.style.removeProperty(e), Dr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function fc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Dr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function mv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Dr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Dr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function yv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = mn(this, e), u = l.on, d = l.value[i] == null ? a || (a = fc(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function wv(e, t, n) {
  var r = (e += "") == "transform" ? b1 : dc;
  return t == null ? this.styleTween(e, hv(e, r)).on("end.style." + e, fc(e)) : typeof t == "function" ? this.styleTween(e, mv(e, r, la(this, "style." + e, t))).each(yv(this._id, e)) : this.styleTween(e, vv(e, r, t), n).on("end.style." + e, null);
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
function Cv(e) {
  return function() {
    this.textContent = e;
  };
}
function kv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function _v(e) {
  return this.tween("text", typeof e == "function" ? kv(la(this, "text", e)) : Cv(e == null ? "" : e + ""));
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
function Tv() {
  for (var e = this._name, t = this._id, n = pc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = Ut(l, t);
        Di(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Nn(r, this._parents, e, n);
}
function Lv() {
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
var Ov = 0;
function Nn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function pc() {
  return ++Ov;
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
  transition: Tv,
  call: xn.call,
  nodes: xn.nodes,
  node: xn.node,
  size: xn.size,
  empty: xn.empty,
  each: xn.each,
  on: lv,
  attr: Z1,
  attrTween: F1,
  style: wv,
  styleTween: $v,
  text: _v,
  textTween: Pv,
  remove: cv,
  tween: V1,
  delay: J1,
  duration: Q1,
  ease: tv,
  easeVarying: rv,
  end: Lv,
  [Symbol.iterator]: xn[Symbol.iterator]
};
function Nv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Dv = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Nv
};
function Mv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vv(e) {
  var t, n;
  e instanceof Nn ? (t = e._id, e = e._name) : (t = pc(), (n = Dv).time = sa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Di(l, e, t, u, s, n || Mv(l, t));
  return new Nn(r, this._parents, e, t);
}
Po.prototype.interrupt = N1;
Po.prototype.transition = Vv;
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
var Mi = new Cn(1, 0, 0);
gc.prototype = Cn.prototype;
function gc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Mi;
  return e.__zoom;
}
function Ji(e) {
  e.stopImmediatePropagation();
}
function Jr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Av() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function pl() {
  return this.__zoom || Mi;
}
function Iv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Rv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function hc() {
  var e = Hv, t = Av, n = qv, r = Iv, o = Rv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Uo, u = Li("start", "zoom", "end"), d, p, f, g = 500, h = 150, y = 0, C = 10;
  function w(b) {
    b.property("__zoom", pl).on("wheel.zoom", Z, { passive: !1 }).on("mousedown.zoom", U).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", N).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", L).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, P, T, A) {
    var R = b.selection ? b.selection() : b;
    R.property("__zoom", pl), b !== R ? _(b, P, T, A) : R.interrupt().each(function() {
      M(this, arguments).event(A).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(b, P, T, A) {
    w.scaleTo(b, function() {
      var R = this.__zoom.k, O = typeof P == "function" ? P.apply(this, arguments) : P;
      return R * O;
    }, T, A);
  }, w.scaleTo = function(b, P, T, A) {
    w.transform(b, function() {
      var R = t.apply(this, arguments), O = this.__zoom, B = T == null ? $(R) : typeof T == "function" ? T.apply(this, arguments) : T, G = O.invert(B), Q = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(E(O, Q), B, G), R, s);
    }, T, A);
  }, w.translateBy = function(b, P, T, A) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof T == "function" ? T.apply(this, arguments) : T
      ), t.apply(this, arguments), s);
    }, null, A);
  }, w.translateTo = function(b, P, T, A, R) {
    w.transform(b, function() {
      var O = t.apply(this, arguments), B = this.__zoom, G = A == null ? $(O) : typeof A == "function" ? A.apply(this, arguments) : A;
      return n(Mi.translate(G[0], G[1]).scale(B.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof T == "function" ? -T.apply(this, arguments) : -T
      ), O, s);
    }, A, R);
  };
  function E(b, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === b.k ? b : new Cn(P, b.x, b.y);
  }
  function x(b, P, T) {
    var A = P[0] - T[0] * b.k, R = P[1] - T[1] * b.k;
    return A === b.x && R === b.y ? b : new Cn(b.k, A, R);
  }
  function $(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function _(b, P, T, A) {
    b.on("start.zoom", function() {
      M(this, arguments).event(A).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(A).end();
    }).tween("zoom", function() {
      var R = this, O = arguments, B = M(R, O).event(A), G = t.apply(R, O), Q = T == null ? $(G) : typeof T == "function" ? T.apply(R, O) : T, re = Math.max(G[1][0] - G[0][0], G[1][1] - G[0][1]), X = R.__zoom, W = typeof P == "function" ? P.apply(R, O) : P, Y = l(X.invert(Q).concat(re / X.k), W.invert(Q).concat(re / W.k));
      return function(ee) {
        if (ee === 1) ee = W;
        else {
          var F = Y(ee), ye = re / F[2];
          ee = new Cn(ye, Q[0] - F[0] * ye, Q[1] - F[1] * ye);
        }
        B.zoom(null, ee);
      };
    });
  }
  function M(b, P, T) {
    return !T && b.__zooming || new V(b, P);
  }
  function V(b, P) {
    this.that = b, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, P), this.taps = 0;
  }
  V.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, P) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var P = Kt(this.that).datum();
      u.call(
        b,
        this.that,
        new zv(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function Z(b, ...P) {
    if (!e.apply(this, arguments)) return;
    var T = M(this, P).event(b), A = this.__zoom, R = Math.max(i[0], Math.min(i[1], A.k * Math.pow(2, r.apply(this, arguments)))), O = Ft(b);
    if (T.wheel)
      (T.mouse[0][0] !== O[0] || T.mouse[0][1] !== O[1]) && (T.mouse[1] = A.invert(T.mouse[0] = O)), clearTimeout(T.wheel);
    else {
      if (A.k === R) return;
      T.mouse = [O, A.invert(O)], ti(this), T.start();
    }
    Jr(b), T.wheel = setTimeout(B, h), T.zoom("mouse", n(x(E(A, R), T.mouse[0], T.mouse[1]), T.extent, s));
    function B() {
      T.wheel = null, T.end();
    }
  }
  function U(b, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var T = b.currentTarget, A = M(this, P, !0).event(b), R = Kt(b.view).on("mousemove.zoom", Q, !0).on("mouseup.zoom", re, !0), O = Ft(b, T), B = b.clientX, G = b.clientY;
    Uu(b.view), Ji(b), A.mouse = [O, this.__zoom.invert(O)], ti(this), A.start();
    function Q(X) {
      if (Jr(X), !A.moved) {
        var W = X.clientX - B, Y = X.clientY - G;
        A.moved = W * W + Y * Y > y;
      }
      A.event(X).zoom("mouse", n(x(A.that.__zoom, A.mouse[0] = Ft(X, T), A.mouse[1]), A.extent, s));
    }
    function re(X) {
      R.on("mousemove.zoom mouseup.zoom", null), Qu(X.view, A.moved), Jr(X), A.event(X).end();
    }
  }
  function j(b, ...P) {
    if (e.apply(this, arguments)) {
      var T = this.__zoom, A = Ft(b.changedTouches ? b.changedTouches[0] : b, this), R = T.invert(A), O = T.k * (b.shiftKey ? 0.5 : 2), B = n(x(E(T, O), A, R), t.apply(this, P), s);
      Jr(b), a > 0 ? Kt(this).transition().duration(a).call(_, B, A, b) : Kt(this).call(w.transform, B, A, b);
    }
  }
  function N(b, ...P) {
    if (e.apply(this, arguments)) {
      var T = b.touches, A = T.length, R = M(this, P, b.changedTouches.length === A).event(b), O, B, G, Q;
      for (Ji(b), B = 0; B < A; ++B)
        G = T[B], Q = Ft(G, this), Q = [Q, this.__zoom.invert(Q), G.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== Q[2] && (R.touch1 = Q, R.taps = 0) : (R.touch0 = Q, O = !0, R.taps = 1 + !!d);
      d && (d = clearTimeout(d)), O && (R.taps < 2 && (p = Q[0], d = setTimeout(function() {
        d = null;
      }, g)), ti(this), R.start());
    }
  }
  function k(b, ...P) {
    if (this.__zooming) {
      var T = M(this, P).event(b), A = b.changedTouches, R = A.length, O, B, G, Q;
      for (Jr(b), O = 0; O < R; ++O)
        B = A[O], G = Ft(B, this), T.touch0 && T.touch0[2] === B.identifier ? T.touch0[0] = G : T.touch1 && T.touch1[2] === B.identifier && (T.touch1[0] = G);
      if (B = T.that.__zoom, T.touch1) {
        var re = T.touch0[0], X = T.touch0[1], W = T.touch1[0], Y = T.touch1[1], ee = (ee = W[0] - re[0]) * ee + (ee = W[1] - re[1]) * ee, F = (F = Y[0] - X[0]) * F + (F = Y[1] - X[1]) * F;
        B = E(B, Math.sqrt(ee / F)), G = [(re[0] + W[0]) / 2, (re[1] + W[1]) / 2], Q = [(X[0] + Y[0]) / 2, (X[1] + Y[1]) / 2];
      } else if (T.touch0) G = T.touch0[0], Q = T.touch0[1];
      else return;
      T.zoom("touch", n(x(B, G, Q), T.extent, s));
    }
  }
  function L(b, ...P) {
    if (this.__zooming) {
      var T = M(this, P).event(b), A = b.changedTouches, R = A.length, O, B;
      for (Ji(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), O = 0; O < R; ++O)
        B = A[O], T.touch0 && T.touch0[2] === B.identifier ? delete T.touch0 : T.touch1 && T.touch1[2] === B.identifier && delete T.touch1;
      if (T.touch1 && !T.touch0 && (T.touch0 = T.touch1, delete T.touch1), T.touch0) T.touch0[1] = this.__zoom.invert(T.touch0[0]);
      else if (T.end(), T.taps === 2 && (B = Ft(B, this), Math.hypot(p[0] - B[0], p[1] - B[1]) < C)) {
        var G = Kt(this).on("dblclick.zoom");
        G && G.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : jo(+b), w) : r;
  }, w.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : jo(!!b), w) : e;
  }, w.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : jo(!!b), w) : o;
  }, w.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : jo([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), w) : t;
  }, w.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(b) {
    return arguments.length ? (n = b, w) : n;
  }, w.duration = function(b) {
    return arguments.length ? (a = +b, w) : a;
  }, w.interpolate = function(b) {
    return arguments.length ? (l = b, w) : l;
  }, w.on = function() {
    var b = u.on.apply(u, arguments);
    return b === u ? w : b;
  }, w.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, w) : Math.sqrt(y);
  }, w.tapDistance = function(b) {
    return arguments.length ? (C = +b, w) : C;
  }, w;
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
], vc = ["Enter", " ", "Escape"], Zv = {
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
var Vr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Vr || (Vr = {}));
var cn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cn || (cn = {}));
var hi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(hi || (hi = {}));
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
const gl = {
  [xe.Left]: xe.Right,
  [xe.Right]: xe.Left,
  [xe.Top]: xe.Bottom,
  [xe.Bottom]: xe.Top
};
function Bv(e, t) {
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
function hl(e, t, n) {
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
const mc = (e) => "id" in e && "source" in e && "target" in e, jv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ua = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Lo = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Yv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ua(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? vi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Vi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return zi(n);
}, Oo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = vi(r);
      n = Vi(n, o);
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
    const g = d.width ?? u.width ?? u.initialWidth ?? null, h = d.height ?? u.height ?? u.initialHeight ?? null, y = vo(a, Hr(u)), C = (g ?? 0) * (h ?? 0), w = i && y > 0;
    (!u.internals.handleBounds || w || y >= C || u.dragging) && l.push(u);
  }
  return l;
}, Fv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Xv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Wv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Xv(e, s), l = Oo(a), u = da(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
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
      i?.("005", go.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, u],
        [l + g, u + h]
      ]);
    }
  else a && Ar(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Ar(p) ? fr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", go.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Jv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = Fv(s, l);
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
function wc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const vl = (e, t, n) => e < t ? zr(Math.abs(e - t), 1, t) / t : e > n ? -zr(Math.abs(e - n), 1, t) / t : 0, bc = (e, t, n = 15, r = 40) => {
  const o = vl(e.x, r, t.width - r) * n, i = vl(e.y, r, t.height - r) * n;
  return [o, i];
}, Vi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), ks = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), zi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Hr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : Lo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, vi = (e, t = [0, 0]) => {
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : Lo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, xc = (e, t) => zi(Vi(ks(e), ks(t))), vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, ml = (e) => kn(e.width) && kn(e.height) && kn(e.x) && kn(e.y), kn = (e) => !isNaN(e) && isFinite(e), Gv = (e, t) => {
}, Hi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), No = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Hi(a, s) : a;
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
function Uv(e, t, n) {
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
  const s = Uv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = zr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, y = Qv(e, g, h, d, t, n), C = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: g - C.left + C.right,
    y: h - C.top + C.bottom,
    zoom: d
  };
}, Cr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Ar(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function $c(e) {
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
  return { ...Zv, ...e || {} };
}
function Gi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = sn(e), a = No({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Hi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Cc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), kc = (e) => e?.getRootNode?.() || window?.document, n0 = ["INPUT", "SELECT", "TEXTAREA"];
function _c(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : n0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Sc = (e) => "clientX" in e, sn = (e, t) => {
  const n = Sc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, yl = (e, t, n, r, o) => {
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
      ...Cc(s)
    };
  });
};
function r0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function Yo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function wl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case xe.Left:
      return [t - Yo(t - r, i), n];
    case xe.Right:
      return [t + Yo(r - t, i), n];
    case xe.Top:
      return [t, n - Yo(n - o, i)];
    case xe.Bottom:
      return [t, n + Yo(o - n, i)];
  }
}
function Ec({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, curvature: s = 0.25 }) {
  const [a, l] = wl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = wl({
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
function Pc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
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
  const i = Vi(vi(e), vi(t));
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
  return mc(e) ? n = { ...e } : n = {
    ...e,
    id: s0(e)
  }, a0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Tc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Pc({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const bl = {
  [xe.Left]: { x: -1, y: 0 },
  [xe.Right]: { x: 1, y: 0 },
  [xe.Top]: { x: 0, y: -1 },
  [xe.Bottom]: { x: 0, y: 1 }
}, u0 = ({ source: e, sourcePosition: t = xe.Bottom, target: n }) => t === xe.Left || t === xe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, xl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function c0({ source: e, sourcePosition: t = xe.Bottom, target: n, targetPosition: r = xe.Top, center: o, offset: i, stepPosition: s }) {
  const a = bl[t], l = bl[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = u0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], y, C;
  const w = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [, , x, $] = Pc({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (y = o.x ?? u.x + (d.x - u.x) * s, C = o.y ?? (u.y + d.y) / 2) : (y = o.x ?? (u.x + d.x) / 2, C = o.y ?? u.y + (d.y - u.y) * s);
    const _ = [
      { x: y, y: u.y },
      { x: y, y: d.y }
    ], M = [
      { x: u.x, y: C },
      { x: d.x, y: C }
    ];
    a[f] === g ? h = f === "x" ? _ : M : h = f === "x" ? M : _;
  } else {
    const _ = [{ x: u.x, y: d.y }], M = [{ x: d.x, y: u.y }];
    if (f === "x" ? h = a.x === g ? M : _ : h = a.y === g ? _ : M, t === r) {
      const N = Math.abs(e[f] - n[f]);
      if (N <= i) {
        const k = Math.min(i - 1, i - N);
        a[f] === g ? w[f] = (u[f] > e[f] ? -1 : 1) * k : E[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const N = f === "x" ? "y" : "x", k = a[f] === l[N], L = u[N] > d[N], b = u[N] < d[N];
      (a[f] === 1 && (!k && L || k && b) || a[f] !== 1 && (!k && b || k && L)) && (h = f === "x" ? _ : M);
    }
    const V = { x: u.x + w.x, y: u.y + w.y }, Z = { x: d.x + E.x, y: d.y + E.y }, U = Math.max(Math.abs(V.x - h[0].x), Math.abs(Z.x - h[0].x)), j = Math.max(Math.abs(V.y - h[0].y), Math.abs(Z.y - h[0].y));
    U >= j ? (y = (V.x + Z.x) / 2, C = h[0].y) : (y = h[0].x, C = (V.y + Z.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...h,
    { x: d.x + E.x, y: d.y + E.y },
    n
  ], y, C, x, $];
}
function d0(e, t, n, r) {
  const o = Math.min(xl(e, t) / 2, xl(t, n) / 2, r), { x: i, y: s } = t;
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
  const [p, f, g, h, y] = c0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((C, w, E) => {
    let x = "";
    return E > 0 && E < p.length - 1 ? x = d0(p[E - 1], w, p[E + 1], s) : x = `${E === 0 ? "M" : "L"}${w.x} ${w.y}`, C += x, C;
  }, ""), f, g, h, y];
}
function $l(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function f0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!$l(t) || !$l(n))
    return null;
  const r = t.internals.handleBounds || Cl(t.handles), o = n.internals.handleBounds || Cl(n.handles), i = kl(r?.source ?? [], e.sourceHandle), s = kl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Vr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
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
function Cl(e) {
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
      const i = Lo(o, r.nodeOrigin), s = Ar(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, er(o));
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
      const d = Lo(l, o.nodeOrigin), p = Ar(l.extent) ? l.extent : o.nodeExtent, f = fr(d, p, er(l));
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
  return (kn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function w0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = er(e), l = Lo(e, n), u = Ar(e.extent) ? fr(l, e.extent, a) : l;
  let d = fr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = wc(d, a, t));
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
    const l = i.get(s.parentId)?.expandedRect ?? Hr(a), u = xc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = er(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, g = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), y = Math.max(d.height, Math.round(s.height)), C = (h - d.width) * p[0], w = (y - d.height) * p[1];
    (f > 0 || g > 0 || C || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + C,
        y: a.position.y - g + w
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
        height: y + (g ? p[1] * g - w : 0)
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
    const h = Cc(f.nodeElement), y = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (y || !g.internals.handleBounds || f.force)) {
      const C = f.nodeElement.getBoundingClientRect(), w = Ar(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = wc(E, h, t.get(g.parentId)) : w && (E = fr(E, w, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: yl("source", f.nodeElement, C, d, g.id),
            target: yl("target", f.nodeElement, C, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && ha(x, t, n, { nodeOrigin: o }), a = !0, y && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: Hr(x, o)
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
function _l(e, t, n, r, o, i) {
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
function C0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    _l("source", l, d, e, o, s), _l("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function k0(e, t) {
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
function Sl(e, t, n) {
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
function Ui({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
  function y({ noDragClassName: w, handleSelector: E, domNode: x, isSelectable: $, nodeId: _, nodeClickDistance: M = 0 }) {
    f = Kt(x);
    function V({ x: N, y: k }, L) {
      const { nodeLookup: b, nodeExtent: P, snapGrid: T, snapToGrid: A, nodeOrigin: R, onNodeDrag: O, onSelectionDrag: B, onError: G, updateNodePositions: Q } = t();
      i = { x: N, y: k };
      let re = !1, X = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const W = Oo(a);
        X = ks(W);
      }
      for (const [W, Y] of a) {
        if (!b.has(W))
          continue;
        let ee = { x: N - Y.distance.x, y: k - Y.distance.y };
        A && (ee = Hi(ee, T));
        let F = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !Y.extent) {
          const { positionAbsolute: ae } = Y.internals, oe = ae.x - X.x + P[0][0], ce = ae.x + Y.measured.width - X.x2 + P[1][0], ie = ae.y - X.y + P[0][1], ve = ae.y + Y.measured.height - X.y2 + P[1][1];
          F = [
            [oe, ie],
            [ce, ve]
          ];
        }
        const { position: ye, positionAbsolute: ge } = yc({
          nodeId: W,
          nextPosition: ee,
          nodeLookup: b,
          nodeExtent: F,
          nodeOrigin: R,
          onError: G
        });
        re = re || Y.position.x !== ye.x || Y.position.y !== ye.y, Y.position = ye, Y.internals.positionAbsolute = ge;
      }
      if (h = h || re, !!re && (Q(a, !0), L && (r || O || !_ && B))) {
        const [W, Y] = Ui({
          nodeId: _,
          dragItems: a,
          nodeLookup: b
        });
        r?.(L, a, W, Y), O?.(L, W, Y), _ || B?.(L, Y);
      }
    }
    async function Z() {
      if (!d)
        return;
      const { transform: N, panBy: k, autoPanSpeed: L, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, T] = bc(u, d, L);
      (P !== 0 || T !== 0) && (i.x = (i.x ?? 0) - P / N[2], i.y = (i.y ?? 0) - T / N[2], await k({ x: P, y: T }) && V(i, null)), s = requestAnimationFrame(Z);
    }
    function U(N) {
      const { nodeLookup: k, multiSelectionActive: L, nodesDraggable: b, transform: P, snapGrid: T, snapToGrid: A, selectNodesOnDrag: R, onNodeDragStart: O, onSelectionDragStart: B, unselectNodesAndEdges: G } = t();
      p = !0, (!R || !$) && !L && _ && (k.get(_)?.selected || G()), $ && R && _ && e?.(_);
      const Q = Gi(N.sourceEvent, { transform: P, snapGrid: T, snapToGrid: A, containerBounds: d });
      if (i = Q, a = _0(k, b, Q, _), a.size > 0 && (n || O || !_ && B)) {
        const [re, X] = Ui({
          nodeId: _,
          dragItems: a,
          nodeLookup: k
        });
        n?.(N.sourceEvent, a, re, X), O?.(N.sourceEvent, re, X), _ || B?.(N.sourceEvent, X);
      }
    }
    const j = Wh().clickDistance(M).on("start", (N) => {
      const { domNode: k, nodeDragThreshold: L, transform: b, snapGrid: P, snapToGrid: T } = t();
      d = k?.getBoundingClientRect() || null, g = !1, h = !1, L === 0 && U(N), i = Gi(N.sourceEvent, { transform: b, snapGrid: P, snapToGrid: T, containerBounds: d }), u = sn(N.sourceEvent, d);
    }).on("drag", (N) => {
      const { autoPanOnNodeDrag: k, transform: L, snapGrid: b, snapToGrid: P, nodeDragThreshold: T, nodeLookup: A } = t(), R = Gi(N.sourceEvent, { transform: L, snapGrid: b, snapToGrid: P, containerBounds: d });
      if ((N.sourceEvent.type === "touchmove" && N.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      _ && !A.has(_)) && (g = !0), !g) {
        if (!l && k && p && (l = !0, Z()), !p) {
          const O = R.xSnapped - (i.x ?? 0), B = R.ySnapped - (i.y ?? 0);
          Math.sqrt(O * O + B * B) > T && U(N);
        }
        (i.x !== R.xSnapped || i.y !== R.ySnapped) && a && p && (u = sn(N.sourceEvent, d), V(R, N.sourceEvent));
      }
    }).on("end", (N) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: k, updateNodePositions: L, onNodeDragStop: b, onSelectionDragStop: P } = t();
        if (h && (L(a, !1), h = !1), o || b || !_ && P) {
          const [T, A] = Ui({
            nodeId: _,
            dragItems: a,
            nodeLookup: k,
            dragging: !1
          });
          o?.(N.sourceEvent, a, T, A), b?.(N.sourceEvent, T, A), _ || P?.(N.sourceEvent, A);
        }
      }
    }).filter((N) => {
      const k = N.target;
      return !N.button && (!w || !Sl(k, `.${w}`, x)) && (!E || Sl(k, E, x));
    });
    f.call(j);
  }
  function C() {
    f?.on(".drag", null);
  }
  return {
    update: y,
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
    vo(o, Hr(i)) > 0 && r.push(i);
  return r;
}
const P0 = 250;
function T0(e, t, n, r) {
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
function Nc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...mo(s, l, l.position, !0) } : l;
}
function Dc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function L0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Mc = () => !0;
function O0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: y, onConnectEnd: C, isValidConnection: w = Mc, onReconnectEnd: E, updateConnection: x, getTransform: $, getFromHandle: _, autoPanSpeed: M, dragThreshold: V = 1 }) {
  const Z = kc(e.target);
  let U = 0, j;
  const { x: N, y: k } = sn(e), L = Z?.elementFromPoint(N, k), b = Dc(i, L), P = a?.getBoundingClientRect();
  let T = !1;
  if (!P || !b)
    return;
  const A = Nc(o, b, r, l, t);
  if (!A)
    return;
  let R = sn(e, P), O = !1, B = null, G = !1, Q = null;
  function re() {
    if (!d || !P)
      return;
    const [ge, ae] = bc(R, P, M);
    f({ x: ge, y: ae }), U = requestAnimationFrame(re);
  }
  const X = {
    ...A,
    nodeId: o,
    type: b,
    position: A.position
  }, W = l.get(o);
  let Y = {
    inProgress: !0,
    isValid: null,
    from: mo(W, X, xe.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: W,
    to: R,
    toHandle: null,
    toPosition: gl[X.position],
    toNode: null
  };
  function ee() {
    T = !0, x(Y), h?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  V === 0 && ee();
  function F(ge) {
    if (!T) {
      const { x: ie, y: ve } = sn(ge), se = ie - N, _e = ve - k;
      if (!(se * se + _e * _e > V * V))
        return;
      ee();
    }
    if (!_() || !X) {
      ye(ge);
      return;
    }
    const ae = $();
    R = sn(ge, P), j = T0(No(R, ae, !1, [1, 1]), n, l, X), O || (re(), O = !0);
    const oe = Vc(ge, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: Z,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    Q = oe.handleDomNode, B = oe.connection, G = L0(!!j, oe.isValid);
    const ce = {
      // from stays the same
      ...Y,
      isValid: G,
      to: oe.toHandle && G ? mi({ x: oe.toHandle.x, y: oe.toHandle.y }, ae) : R,
      toHandle: oe.toHandle,
      toPosition: G && oe.toHandle ? oe.toHandle.position : gl[X.position],
      toNode: oe.toHandle ? l.get(oe.toHandle.nodeId) : null
    };
    G && j && Y.toHandle && ce.toHandle && Y.toHandle.type === ce.toHandle.type && Y.toHandle.nodeId === ce.toHandle.nodeId && Y.toHandle.id === ce.toHandle.id && Y.to.x === ce.to.x && Y.to.y === ce.to.y || (x(ce), Y = ce);
  }
  function ye(ge) {
    if (T) {
      (j || Q) && B && G && y?.(B);
      const { inProgress: ae, ...oe } = Y, ce = {
        ...oe,
        toPosition: Y.toHandle ? Y.toPosition : null
      };
      C?.(ge, ce), i && E?.(ge, ce);
    }
    g(), cancelAnimationFrame(U), O = !1, G = !1, B = null, Q = null, Z.removeEventListener("mousemove", F), Z.removeEventListener("mouseup", ye), Z.removeEventListener("touchmove", F), Z.removeEventListener("touchend", ye);
  }
  Z.addEventListener("mousemove", F), Z.addEventListener("mouseup", ye), Z.addEventListener("touchmove", F), Z.addEventListener("touchend", ye);
}
function Vc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Mc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = sn(e), y = s.elementFromPoint(g, h), C = y?.classList.contains(`${a}-flow__handle`) ? y : f, w = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const E = Dc(void 0, C), x = C.getAttribute("data-nodeid"), $ = C.getAttribute("data-handleid"), _ = C.classList.contains("connectable"), M = C.classList.contains("connectableend");
    if (!x || !E)
      return w;
    const V = {
      source: p ? x : r,
      sourceHandle: p ? $ : o,
      target: p ? r : x,
      targetHandle: p ? o : $
    };
    w.connection = V;
    const Z = _ && M && (n === Vr.Strict ? p && E === "source" || !p && E === "target" : x !== r || $ !== o);
    w.isValid = Z && u(V), w.toHandle = Nc(x, E, $, d, n, !0);
  }
  return w;
}
const El = {
  onPointerDown: O0,
  isValid: Vc
};
function N0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Kt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const _ = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = $[2] * Math.pow(2, _);
      t.scaleTo(M);
    };
    let y = [0, 0];
    const C = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (y = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, w = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const _ = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], M = [_[0] - y[0], _[1] - y[1]];
      y = _;
      const V = r() * Math.max($[2], Math.log($[2])) * (g ? -1 : 1), Z = {
        x: $[0] - M[0] * V,
        y: $[1] - M[1] * V
      }, U = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: Z.x,
        y: Z.y,
        zoom: $[2]
      }, U, a);
    }, E = hc().on("start", C).on("zoom", p ? w : null).on("zoom.wheel", f ? h : null);
    o.call(E, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Ft
  };
}
const D0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Ai = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Qi = ({ x: e, y: t, zoom: n }) => Mi.translate(e, t).scale(n), kr = (e, t) => e.target.closest(`.${t}`), zc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), M0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, es = (e, t = 0, n = M0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Hc = (e) => {
  const t = e.ctrlKey && Cr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function V0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (kr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const C = Ft(d), w = Hc(d), E = p * Math.pow(2, w);
      r.scaleTo(n, E, C, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === cn.Vertical ? 0 : d.deltaX * f, h = o === cn.Horizontal ? 0 : d.deltaY * f;
    !Cr() && d.shiftKey && o !== cn.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Ai(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, y)), e.isPanScrolling && (l?.(d, y), e.panScrollTimeout = setTimeout(() => {
      u?.(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function z0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = kr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function H0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = Ai(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function A0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && zc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, Ai(i.transform));
  };
}
function I0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && zc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && D0(e.prevViewport, s.transform))) {
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
function R0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (kr(d, `${u}-flow__node`) || kr(d, `${u}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || kr(d, a) && d.type === "wheel" || kr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function q0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = hc().clickDistance(!kn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Kt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: zr(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), y = g.on("dblclick.zoom");
  f.wheelDelta(Hc);
  function C(k, L) {
    return g ? new Promise((b) => {
      f?.interpolate(L?.interpolate === "linear" ? no : Uo).transform(es(g, L?.duration, L?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: k, noPanClassName: L, onPaneContextMenu: b, userSelectionActive: P, panOnScroll: T, panOnDrag: A, panOnScrollMode: R, panOnScrollSpeed: O, preventScrolling: B, zoomOnPinch: G, zoomOnScroll: Q, zoomOnDoubleClick: re, zoomActivationKeyPressed: X, lib: W, onTransformChange: Y }) {
    P && !d.isZoomingOrPanning && E();
    const ee = T && !X && !P ? V0({
      zoomPanValues: d,
      noWheelClassName: k,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: R,
      panOnScrollSpeed: O,
      zoomOnPinch: G,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : z0({
      noWheelClassName: k,
      preventScrolling: B,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", ee, { passive: !1 }), !P) {
      const ye = H0({
        zoomPanValues: d,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", ye);
      const ge = A0({
        zoomPanValues: d,
        panOnDrag: A,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: Y
      });
      f.on("zoom", ge);
      const ae = I0({
        zoomPanValues: d,
        panOnDrag: A,
        panOnScroll: T,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", ae);
    }
    const F = R0({
      zoomActivationKeyPressed: X,
      panOnDrag: A,
      zoomOnScroll: Q,
      panOnScroll: T,
      zoomOnDoubleClick: re,
      zoomOnPinch: G,
      userSelectionActive: P,
      noPanClassName: L,
      noWheelClassName: k,
      lib: W
    });
    f.filter(F), re ? g.on("dblclick.zoom", y) : g.on("dblclick.zoom", null);
  }
  function E() {
    f.on("zoom", null);
  }
  async function x(k, L, b) {
    const P = Qi(k), T = f?.constrain()(P, L, b);
    return T && await C(T), new Promise((A) => A(T));
  }
  async function $(k, L) {
    const b = Qi(k);
    return await C(b, L), new Promise((P) => P(b));
  }
  function _(k) {
    if (g) {
      const L = Qi(k), b = g.property("__zoom");
      (b.k !== k.zoom || b.x !== k.x || b.y !== k.y) && f?.transform(g, L, null, { sync: !0 });
    }
  }
  function M() {
    const k = g ? gc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: k.x, y: k.y, zoom: k.k };
  }
  function V(k, L) {
    return g ? new Promise((b) => {
      f?.interpolate(L?.interpolate === "linear" ? no : Uo).scaleTo(es(g, L?.duration, L?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function Z(k, L) {
    return g ? new Promise((b) => {
      f?.interpolate(L?.interpolate === "linear" ? no : Uo).scaleBy(es(g, L?.duration, L?.ease, () => b(!0)), k);
    }) : Promise.resolve(!1);
  }
  function U(k) {
    f?.scaleExtent(k);
  }
  function j(k) {
    f?.translateExtent(k);
  }
  function N(k) {
    const L = !kn(k) || k < 0 ? 0 : k;
    f?.clickDistance(L);
  }
  return {
    update: w,
    destroy: E,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: M,
    scaleTo: V,
    scaleBy: Z,
    setScaleExtent: U,
    setTranslateExtent: j,
    syncViewport: _,
    setClickDistance: N
  };
}
var Pl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Pl || (Pl = {}));
var Z0 = /* @__PURE__ */ te("<div><!></div>");
function Wn(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7, null), r = m(t, "type", 7, "source"), o = m(t, "position", 23, () => xe.Top), i = m(t, "style", 7), s = m(t, "class", 7), a = m(t, "isConnectable", 7), l = m(t, "isConnectableStart", 7, !0), u = m(t, "isConnectableEnd", 7, !0), d = m(t, "isValidConnection", 7), p = m(t, "onconnect", 7), f = m(t, "ondisconnect", 7), g = m(t, "children", 7), h = /* @__PURE__ */ Be(t, [
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
  const y = jn("svelteflow__node_id"), C = jn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ S(() => r() === "target"), E = /* @__PURE__ */ S(() => a() !== void 0 ? a() : C.value), x = Qt(), $ = /* @__PURE__ */ S(() => x.ariaLabelConfig), _ = null;
  gu(() => {
    if (p() || f()) {
      x.edges;
      let O = x.connectionLookup.get(`${y}-${r()}${n() ? `-${n()}` : ""}`);
      if (_ && !Bv(O, _)) {
        const B = O ?? /* @__PURE__ */ new Map();
        hl(_, B, f()), hl(B, _, p());
      }
      _ = new Map(O);
    }
  });
  let M = /* @__PURE__ */ S(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: O, toHandle: B, isValid: G } = x.connection, Q = O && O.nodeId === y && O.type === r() && O.id === n(), re = B && B.nodeId === y && B.type === r() && B.id === n(), X = x.connectionMode === Vr.Strict ? O?.type !== r() : y !== O?.nodeId || n() !== O?.id;
    return [
      !0,
      Q,
      re,
      X,
      re && G
    ];
  }), V = /* @__PURE__ */ S(() => $o(c(M), 5)), Z = /* @__PURE__ */ S(() => c(V)[0]), U = /* @__PURE__ */ S(() => c(V)[1]), j = /* @__PURE__ */ S(() => c(V)[2]), N = /* @__PURE__ */ S(() => c(V)[3]), k = /* @__PURE__ */ S(() => c(V)[4]);
  function L(O) {
    const B = x.onbeforeconnect?.(O) ?? O;
    B && (x.addEdge(B), x.onconnect?.(O));
  }
  function b(O) {
    const B = Sc(O);
    (B && O.button === 0 || !B) && El.onPointerDown(O, {
      handleId: n(),
      nodeId: y,
      isTarget: c(w),
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
      onConnect: L,
      onConnectStart: (G, Q) => {
        x.onconnectstart?.(G, {
          nodeId: Q.nodeId,
          handleId: Q.handleId,
          handleType: Q.handleType
        });
      },
      onConnectEnd: (G, Q) => {
        x.onconnectend?.(G, Q);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function P(O) {
    if (!y || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(O, { nodeId: y, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: y, type: r(), id: n() };
      return;
    }
    const B = kc(O.target), G = d() ?? x.isValidConnection, { connectionMode: Q, clickConnectStartHandle: re, flowId: X, nodeLookup: W } = x, { connection: Y, isValid: ee } = El.isValid(O, {
      handle: { nodeId: y, id: n(), type: r() },
      connectionMode: Q,
      fromNodeId: re.nodeId,
      fromHandleId: re.id ?? null,
      fromType: re.type,
      isValidConnection: G,
      flowId: X,
      doc: B,
      lib: "svelte",
      nodeLookup: W
    });
    ee && Y && L(Y);
    const F = structuredClone(tu(x.connection));
    delete F.inProgress, F.toPosition = F.toHandle ? F.toHandle.position : null, x.onclickconnectend?.(O, F), x.clickConnectStartHandle = null;
  }
  var T = Z0(), A = () => {
  };
  ut(
    T,
    (O) => ({
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
      onclick: x.clickConnect ? P : void 0,
      onkeypress: A,
      style: i(),
      role: "button",
      "aria-label": c($)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [qn]: O
    }),
    [
      () => ({
        valid: c(k),
        connectingto: c(j),
        connectingfrom: c(U),
        source: !c(w),
        target: c(w),
        connectablestart: l(),
        connectableend: u(),
        connectable: c(E),
        connectionindicator: c(E) && (!c(Z) || c(N)) && (c(Z) || x.clickConnectStartHandle ? u() : l())
      })
    ]
  );
  var R = q(T);
  return rt(R, () => g() ?? gt), I(T), D(e, T), pe({
    get id() {
      return n();
    },
    set id(O = null) {
      n(O), v();
    },
    get type() {
      return r();
    },
    set type(O = "source") {
      r(O), v();
    },
    get position() {
      return o();
    },
    set position(O = xe.Top) {
      o(O), v();
    },
    get style() {
      return i();
    },
    set style(O) {
      i(O), v();
    },
    get class() {
      return s();
    },
    set class(O) {
      s(O), v();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(O) {
      a(O), v();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(O = !0) {
      l(O), v();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(O = !0) {
      u(O), v();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(O) {
      d(O), v();
    },
    get onconnect() {
      return p();
    },
    set onconnect(O) {
      p(O), v();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(O) {
      f(O), v();
    },
    get children() {
      return g();
    },
    set children(O) {
      g(O), v();
    }
  });
}
le(
  Wn,
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
var B0 = /* @__PURE__ */ te("<!> <!>", 1);
function va(e, t) {
  fe(t, !0);
  let n = m(t, "data", 7), r = m(t, "targetPosition", 23, () => xe.Top), o = m(t, "sourcePosition", 23, () => xe.Bottom);
  var i = B0(), s = de(i);
  Wn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = H(s), l = H(a);
  return Wn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), Se(() => Ke(a, ` ${n()?.label ?? ""} `)), D(e, i), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(u = xe.Top) {
      r(u), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u = xe.Bottom) {
      o(u), v();
    }
  });
}
le(va, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var K0 = /* @__PURE__ */ te(" <!>", 1);
function Ac(e, t) {
  fe(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "sourcePosition", 23, () => xe.Bottom);
  be();
  var o = K0(), i = de(o), s = H(i);
  return Wn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), Se(() => Ke(i, `${n()?.label ?? ""} `)), D(e, o), pe({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = xe.Bottom) {
      r(a), v();
    }
  });
}
le(Ac, { data: {}, sourcePosition: {} }, [], [], !0);
var j0 = /* @__PURE__ */ te(" <!>", 1);
function Ic(e, t) {
  fe(t, !0);
  let n = m(t, "data", 23, () => ({ label: "Node" })), r = m(t, "targetPosition", 23, () => xe.Top);
  be();
  var o = j0(), i = de(o), s = H(i);
  return Wn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), Se(() => Ke(i, `${n()?.label ?? ""} `)), D(e, o), pe({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), v();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = xe.Top) {
      r(a), v();
    }
  });
}
le(Ic, { data: {}, targetPosition: {} }, [], [], !0);
function Rc(e, t) {
}
le(Rc, {}, [], [], !0);
function ts(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function qc(e, t) {
  const n = /* @__PURE__ */ S(Qt), r = /* @__PURE__ */ S(() => c(n).domNode);
  let o;
  return c(r) ? ts(e, c(r), t) : o = Fs(() => {
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
function Zc() {
  let e = /* @__PURE__ */ Pe(typeof window > "u");
  if (c(e)) {
    const t = Fs(() => {
      nt(() => {
        J(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Tl = (e) => jv(e), Y0 = (e) => mc(e);
function gn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const yi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var F0 = /* @__PURE__ */ te("<div><!></div>");
const X0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function Bc(e, t) {
  fe(t, !0), Ae(e, X0);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "selectEdgeOnClick", 7, !1), a = m(t, "transparent", 7, !1), l = m(t, "class", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Be(t, [
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
  var h = F0(), y = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  ut(
    h,
    (w) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: y,
      ...d,
      [on]: w
    }),
    [
      () => ({
        display: Zc().value ? "none" : void 0,
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
  var C = q(h);
  return rt(C, () => u() ?? gt), I(h), mt(h, (w, E) => qc?.(w, E), () => "edge-labels"), D(e, h), pe({
    get x() {
      return n();
    },
    set x(w = 0) {
      n(w), v();
    },
    get y() {
      return r();
    },
    set y(w = 0) {
      r(w), v();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), v();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), v();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(w = !1) {
      s(w), v();
    },
    get transparent() {
      return a();
    },
    set transparent(w = !1) {
      a(w), v();
    },
    get class() {
      return l();
    },
    set class(w) {
      l(w), v();
    },
    get children() {
      return u();
    },
    set children(w) {
      u(w), v();
    }
  });
}
le(
  Bc,
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
var W0 = /* @__PURE__ */ we("<path></path>"), J0 = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Do(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "path", 7), o = m(t, "label", 7), i = m(t, "labelX", 7), s = m(t, "labelY", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "style", 7), p = m(t, "interactionWidth", 7, 20), f = m(t, "class", 7), g = /* @__PURE__ */ Be(t, [
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
  var h = J0(), y = de(h), C = H(y);
  {
    var w = ($) => {
      var _ = W0();
      ut(_, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), D($, _);
    };
    ue(C, ($) => {
      p() > 0 && $(w);
    });
  }
  var E = H(C);
  {
    var x = ($) => {
      Bc($, {
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
        children: (_, M) => {
          be();
          var V = Ee();
          Se(() => Ke(V, o())), D(_, V);
        },
        $$slots: { default: !0 }
      });
    };
    ue(E, ($) => {
      o() && $(x);
    });
  }
  return Se(() => {
    $e(y, "id", n()), $e(y, "d", r()), Ot(y, 0, zn(["svelte-flow__edge-path", f()])), $e(y, "marker-start", l()), $e(y, "marker-end", u()), Ct(y, d());
  }), D(e, h), pe({
    get id() {
      return n();
    },
    set id($) {
      n($), v();
    },
    get path() {
      return r();
    },
    set path($) {
      r($), v();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), v();
    },
    get labelX() {
      return i();
    },
    set labelX($) {
      i($), v();
    },
    get labelY() {
      return s();
    },
    set labelY($) {
      s($), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd($) {
      u($), v();
    },
    get style() {
      return d();
    },
    set style($) {
      d($), v();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth($ = 20) {
      p($), v();
    },
    get class() {
      return f();
    },
    set class($) {
      f($), v();
    }
  });
}
le(
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
function ma(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "interactionWidth", 7), o = m(t, "label", 7), i = m(t, "labelStyle", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "pathOptions", 7), u = m(t, "sourcePosition", 7), d = m(t, "sourceX", 7), p = m(t, "sourceY", 7), f = m(t, "style", 7), g = m(t, "targetPosition", 7), h = m(t, "targetX", 7), y = m(t, "targetY", 7), C = /* @__PURE__ */ S(() => Ec({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: y(),
    sourcePosition: u(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ S(() => $o(c(C), 3)), E = /* @__PURE__ */ S(() => c(w)[0]), x = /* @__PURE__ */ S(() => c(w)[1]), $ = /* @__PURE__ */ S(() => c(w)[2]);
  return Do(e, {
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
  }), pe({
    get id() {
      return n();
    },
    set id(_) {
      n(_), v();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(_) {
      r(_), v();
    },
    get label() {
      return o();
    },
    set label(_) {
      o(_), v();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(_) {
      i(_), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(_) {
      s(_), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(_) {
      a(_), v();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(_) {
      l(_), v();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(_) {
      u(_), v();
    },
    get sourceX() {
      return d();
    },
    set sourceX(_) {
      d(_), v();
    },
    get sourceY() {
      return p();
    },
    set sourceY(_) {
      p(_), v();
    },
    get style() {
      return f();
    },
    set style(_) {
      f(_), v();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(_) {
      g(_), v();
    },
    get targetX() {
      return h();
    },
    set targetX(_) {
      h(_), v();
    },
    get targetY() {
      return y();
    },
    set targetY(_) {
      y(_), v();
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
function Kc(e, t) {
  fe(t, !0);
  let n = m(t, "interactionWidth", 7), r = m(t, "label", 7), o = m(t, "labelStyle", 7), i = m(t, "style", 7), s = m(t, "markerEnd", 7), a = m(t, "markerStart", 7), l = m(t, "sourcePosition", 7), u = m(t, "sourceX", 7), d = m(t, "sourceY", 7), p = m(t, "targetPosition", 7), f = m(t, "targetX", 7), g = m(t, "targetY", 7), h = /* @__PURE__ */ S(() => fa({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), y = /* @__PURE__ */ S(() => $o(c(h), 3)), C = /* @__PURE__ */ S(() => c(y)[0]), w = /* @__PURE__ */ S(() => c(y)[1]), E = /* @__PURE__ */ S(() => c(y)[2]);
  return Do(e, {
    get path() {
      return c(C);
    },
    get labelX() {
      return c(w);
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
  }), pe({
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), v();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), v();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), v();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), v();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), v();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), v();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), v();
    },
    get sourceX() {
      return u();
    },
    set sourceX(x) {
      u(x), v();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), v();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(x) {
      p(x), v();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), v();
    },
    get targetY() {
      return g();
    },
    set targetY(x) {
      g(x), v();
    }
  });
}
le(
  Kc,
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
function jc(e, t) {
  fe(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "targetX", 7), i = m(t, "targetY", 7), s = m(t, "label", 7), a = m(t, "labelStyle", 7), l = m(t, "markerStart", 7), u = m(t, "markerEnd", 7), d = m(t, "interactionWidth", 7), p = m(t, "style", 7), f = /* @__PURE__ */ S(() => Tc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ S(() => $o(c(f), 3)), h = /* @__PURE__ */ S(() => c(g)[0]), y = /* @__PURE__ */ S(() => c(g)[1]), C = /* @__PURE__ */ S(() => c(g)[2]);
  return Do(e, {
    get path() {
      return c(h);
    },
    get labelX() {
      return c(y);
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
  }), pe({
    get sourceX() {
      return n();
    },
    set sourceX(w) {
      n(w), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(w) {
      r(w), v();
    },
    get targetX() {
      return o();
    },
    set targetX(w) {
      o(w), v();
    },
    get targetY() {
      return i();
    },
    set targetY(w) {
      i(w), v();
    },
    get label() {
      return s();
    },
    set label(w) {
      s(w), v();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(w) {
      a(w), v();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), v();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(w) {
      u(w), v();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), v();
    },
    get style() {
      return p();
    },
    set style(w) {
      p(w), v();
    }
  });
}
le(
  jc,
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
function Yc(e, t) {
  fe(t, !0);
  let n = m(t, "sourceX", 7), r = m(t, "sourceY", 7), o = m(t, "sourcePosition", 7), i = m(t, "targetX", 7), s = m(t, "targetY", 7), a = m(t, "targetPosition", 7), l = m(t, "label", 7), u = m(t, "labelStyle", 7), d = m(t, "markerStart", 7), p = m(t, "markerEnd", 7), f = m(t, "interactionWidth", 7), g = m(t, "style", 7), h = /* @__PURE__ */ S(() => fa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), y = /* @__PURE__ */ S(() => $o(c(h), 3)), C = /* @__PURE__ */ S(() => c(y)[0]), w = /* @__PURE__ */ S(() => c(y)[1]), E = /* @__PURE__ */ S(() => c(y)[2]);
  return Do(e, {
    get path() {
      return c(C);
    },
    get labelX() {
      return c(w);
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
  }), pe({
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), v();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), v();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), v();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), v();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), v();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), v();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), v();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(x) {
      u(x), v();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), v();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(x) {
      p(x), v();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), v();
    },
    get style() {
      return g();
    },
    set style(x) {
      g(x), v();
    }
  });
}
le(
  Yc,
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
function G0(e) {
  let t = 0, n = ur(0), r;
  return () => {
    cp() && (c(n), So(() => (t === 0 && (r = ft(() => e(() => Xo(n)))), t += 1, () => {
      $p().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class U0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = G0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Q0 = /\(.+\)/, em = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class tm extends U0 {
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
      const { visibleNodes: y, transform: C, width: w, height: E } = e;
      if (i0({
        sourceNode: p,
        targetNode: f,
        width: w,
        height: E,
        transform: C
      }))
        y.set(p.id, p), y.set(f.id, f);
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
const Fc = {
  input: Ac,
  output: Ic,
  default: va,
  group: Rc
}, Xc = {
  straight: jc,
  smoothstep: Kc,
  default: ma,
  step: Yc
};
function rm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Oo(i, {
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
      J(this.#t, r);
    }
    #e = /* @__PURE__ */ Pe(null);
    get domNode() {
      return c(this.#e);
    }
    set domNode(r) {
      J(this.#e, r);
    }
    #n = /* @__PURE__ */ Pe(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      J(this.#n, r);
    }
    #r = /* @__PURE__ */ Pe(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      J(this.#r, r);
    }
    #o = /* @__PURE__ */ Pe(e.height ?? 0);
    get height() {
      return c(this.#o);
    }
    set height(r) {
      J(this.#o, r);
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
      J(this.#i, r);
    }
    #s = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#s);
    }
    set viewportInitialized(r) {
      J(this.#s, r);
    }
    #a = /* @__PURE__ */ S(() => (C0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#a);
    }
    set _edges(r) {
      J(this.#a, r);
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
      J(this.#l, r);
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
      J(this.#u, r);
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
        const { viewport: h, width: y, height: C } = this, w = [h.x, h.y, h.zoom];
        p = nm(s, w, y, C), f = Ll({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: w,
          width: y,
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
      J(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      J(this.#d, r);
    }
    #f = /* @__PURE__ */ S(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      J(this.#f, r);
    }
    #p = /* @__PURE__ */ S(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#p);
    }
    set elementsSelectable(r) {
      J(this.#p, r);
    }
    #g = /* @__PURE__ */ S(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#g);
    }
    set nodesFocusable(r) {
      J(this.#g, r);
    }
    #h = /* @__PURE__ */ S(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#h);
    }
    set edgesFocusable(r) {
      J(this.#h, r);
    }
    #v = /* @__PURE__ */ S(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#v);
    }
    set disableKeyboardA11y(r) {
      J(this.#v, r);
    }
    #m = /* @__PURE__ */ S(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#m);
    }
    set minZoom(r) {
      J(this.#m, r);
    }
    #y = /* @__PURE__ */ S(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#y);
    }
    set maxZoom(r) {
      J(this.#y, r);
    }
    #w = /* @__PURE__ */ S(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#w);
    }
    set nodeOrigin(r) {
      J(this.#w, r);
    }
    #b = /* @__PURE__ */ S(() => e.props.nodeExtent ?? $s);
    get nodeExtent() {
      return c(this.#b);
    }
    set nodeExtent(r) {
      J(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => e.props.translateExtent ?? $s);
    get translateExtent() {
      return c(this.#x);
    }
    set translateExtent(r) {
      J(this.#x, r);
    }
    #$ = /* @__PURE__ */ S(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#$);
    }
    set defaultEdgeOptions(r) {
      J(this.#$, r);
    }
    #C = /* @__PURE__ */ S(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      J(this.#C, r);
    }
    #k = /* @__PURE__ */ S(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#k);
    }
    set autoPanOnNodeDrag(r) {
      J(this.#k, r);
    }
    #_ = /* @__PURE__ */ S(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#_);
    }
    set autoPanOnConnect(r) {
      J(this.#_, r);
    }
    #S = /* @__PURE__ */ S(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      J(this.#S, r);
    }
    #E = /* @__PURE__ */ S(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#E);
    }
    set connectionDragThreshold(r) {
      J(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ S(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#P);
    }
    set snapGrid(r) {
      J(this.#P, r);
    }
    #T = /* @__PURE__ */ Pe(!1);
    get dragging() {
      return c(this.#T);
    }
    set dragging(r) {
      J(this.#T, r);
    }
    #L = /* @__PURE__ */ Pe(null);
    get selectionRect() {
      return c(this.#L);
    }
    set selectionRect(r) {
      J(this.#L, r);
    }
    #O = /* @__PURE__ */ Pe(!1);
    get selectionKeyPressed() {
      return c(this.#O);
    }
    set selectionKeyPressed(r) {
      J(this.#O, r);
    }
    #N = /* @__PURE__ */ Pe(!1);
    get multiselectionKeyPressed() {
      return c(this.#N);
    }
    set multiselectionKeyPressed(r) {
      J(this.#N, r);
    }
    #D = /* @__PURE__ */ Pe(!1);
    get deleteKeyPressed() {
      return c(this.#D);
    }
    set deleteKeyPressed(r) {
      J(this.#D, r);
    }
    #M = /* @__PURE__ */ Pe(!1);
    get panActivationKeyPressed() {
      return c(this.#M);
    }
    set panActivationKeyPressed(r) {
      J(this.#M, r);
    }
    #V = /* @__PURE__ */ Pe(!1);
    get zoomActivationKeyPressed() {
      return c(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      J(this.#V, r);
    }
    #z = /* @__PURE__ */ Pe(null);
    get selectionRectMode() {
      return c(this.#z);
    }
    set selectionRectMode(r) {
      J(this.#z, r);
    }
    #H = /* @__PURE__ */ Pe("");
    get ariaLiveMessage() {
      return c(this.#H);
    }
    set ariaLiveMessage(r) {
      J(this.#H, r);
    }
    #A = /* @__PURE__ */ S(() => e.props.selectionMode ?? hi.Partial);
    get selectionMode() {
      return c(this.#A);
    }
    set selectionMode(r) {
      J(this.#A, r);
    }
    #I = /* @__PURE__ */ S(() => ({ ...Fc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#I);
    }
    set nodeTypes(r) {
      J(this.#I, r);
    }
    #R = /* @__PURE__ */ S(() => ({ ...Xc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#R);
    }
    set edgeTypes(r) {
      J(this.#R, r);
    }
    #q = /* @__PURE__ */ S(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#q);
    }
    set noPanClass(r) {
      J(this.#q, r);
    }
    #Z = /* @__PURE__ */ S(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#Z);
    }
    set noDragClass(r) {
      J(this.#Z, r);
    }
    #B = /* @__PURE__ */ S(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      J(this.#B, r);
    }
    #K = /* @__PURE__ */ S(() => t0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#K);
    }
    set ariaLabelConfig(r) {
      J(this.#K, r);
    }
    #j = /* @__PURE__ */ Pe(rm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#j);
    }
    set _viewport(r) {
      J(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Pe(
      // _connection is viewport independent and originating from XYHandle
      Cs
    );
    get _connection() {
      return c(this.#Y);
    }
    set _connection(r) {
      J(this.#Y, r);
    }
    #F = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: No(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#F);
    }
    set connection(r) {
      J(this.#F, r);
    }
    #X = /* @__PURE__ */ S(() => e.props.connectionMode ?? Vr.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      J(this.#X, r);
    }
    #W = /* @__PURE__ */ S(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#W);
    }
    set connectionRadius(r) {
      J(this.#W, r);
    }
    #J = /* @__PURE__ */ S(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#J);
    }
    set isValidConnection(r) {
      J(this.#J, r);
    }
    #G = /* @__PURE__ */ S(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#G);
    }
    set selectNodesOnDrag(r) {
      J(this.#G, r);
    }
    #U = /* @__PURE__ */ S(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return c(this.#U);
    }
    set defaultMarkerColor(r) {
      J(this.#U, r);
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
      J(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      J(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => e.props.onflowerror ?? Gv);
    get onerror() {
      return c(this.#te);
    }
    set onerror(r) {
      J(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => e.props.ondelete);
    get ondelete() {
      return c(this.#ne);
    }
    set ondelete(r) {
      J(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#re);
    }
    set onbeforedelete(r) {
      J(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#oe);
    }
    set onbeforeconnect(r) {
      J(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => e.props.onconnect);
    get onconnect() {
      return c(this.#ie);
    }
    set onconnect(r) {
      J(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#se);
    }
    set onconnectstart(r) {
      J(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#ae);
    }
    set onconnectend(r) {
      J(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#le);
    }
    set onbeforereconnect(r) {
      J(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ue);
    }
    set onreconnect(r) {
      J(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#ce);
    }
    set onreconnectstart(r) {
      J(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#de);
    }
    set onreconnectend(r) {
      J(this.#de, r);
    }
    #fe = /* @__PURE__ */ S(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#fe);
    }
    set clickConnect(r) {
      J(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#pe);
    }
    set onclickconnectstart(r) {
      J(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      J(this.#ge, r);
    }
    #he = /* @__PURE__ */ Pe(null);
    get clickConnectStartHandle() {
      return c(this.#he);
    }
    set clickConnectStartHandle(r) {
      J(this.#he, r);
    }
    #ve = /* @__PURE__ */ S(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#ve);
    }
    set onselectiondrag(r) {
      J(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#me);
    }
    set onselectiondragstart(r) {
      J(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#ye);
    }
    set onselectiondragstop(r) {
      J(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Wv(
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
      J(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Cs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
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
function Wc(e) {
  const t = om(e);
  function n(N) {
    t.nodeTypes = {
      ...Fc,
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
    t.edges = l0(N, t.edges);
  }
  const i = (N, k = !1) => {
    t.nodes = t.nodes.map((L) => {
      const b = N.get(L.id);
      return b ? { ...L, position: b.position, dragging: k } : L;
    });
  };
  function s(N) {
    const { changes: k, updatedInternals: L } = x0(N, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!L)
      return;
    v0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const P of k) {
      const T = t.nodeLookup.get(P.id)?.internals.userNode;
      if (!T)
        continue;
      const A = { ...T };
      switch (P.type) {
        case "dimensions": {
          const R = { ...A.measured, ...P.dimensions };
          P.setAttributes && (A.width = P.dimensions?.width ?? A.width, A.height = P.dimensions?.height ?? A.height), A.measured = R;
          break;
        }
        case "position":
          A.position = P.position ?? A.position;
          break;
      }
      b.set(P.id, A);
    }
    t.nodes = t.nodes.map((P) => b.get(P.id) ?? P);
  }
  function a(N) {
    const k = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = N, t.fitViewResolver = k, t.nodes = [...t.nodes], k.promise;
  }
  async function l(N, k, L) {
    const b = typeof L?.zoom < "u" ? L.zoom : t.maxZoom, P = t.panZoom;
    return P ? (await P.setViewport({
      x: t.width / 2 - N * b,
      y: t.height / 2 - k * b,
      zoom: b
    }, { duration: L?.duration, ease: L?.ease, interpolate: L?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(N, k) {
    const L = t.panZoom;
    return L ? L.scaleBy(N, k) : Promise.resolve(!1);
  }
  function d(N) {
    return u(1.2, N);
  }
  function p(N) {
    return u(1 / 1.2, N);
  }
  function f(N) {
    const k = t.panZoom;
    k && (k.setScaleExtent([N, t.maxZoom]), t.minZoom = N);
  }
  function g(N) {
    const k = t.panZoom;
    k && (k.setScaleExtent([t.minZoom, N]), t.maxZoom = N);
  }
  function h(N) {
    const k = t.panZoom;
    k && (k.setTranslateExtent(N), t.translateExtent = N);
  }
  function y(N) {
    t.panZoom?.setClickDistance(N);
  }
  function C(N, k = null) {
    let L = !1;
    const b = N.map((P) => (!k || k.has(P.id)) && P.selected ? (L = !0, { ...P, selected: !1 }) : P);
    return [L, b];
  }
  function w(N) {
    const k = N?.nodes ? new Set(N.nodes.map((R) => R.id)) : null, [L, b] = C(t.nodes, k);
    L && (t.nodes = b);
    const P = N?.edges ? new Set(N.edges.map((R) => R.id)) : null, [T, A] = C(t.edges, P);
    T && (t.edges = A);
  }
  function E(N) {
    const k = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((L) => {
      const b = N.includes(L.id), P = k && L.selected || b;
      if (L.selected !== P) {
        const T = t.nodeLookup.get(L.id);
        return T && (T.selected = P), L.selected = P, { ...L };
      }
      return L;
    }), k || w({ nodes: [] });
  }
  function x(N) {
    const k = t.multiselectionKeyPressed;
    t.edges = t.edges.map((L) => {
      const b = N.includes(L.id), P = k && L.selected || b;
      return L.selected !== P ? { ...L, selected: P } : L;
    }), k || w({ edges: [] });
  }
  function $(N, k, L) {
    const b = t.nodeLookup.get(N);
    if (!b) {
      console.warn("012", go.error012(N));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (k || b.selected && t.multiselectionKeyPressed) && (w({ nodes: [b], edges: [] }), requestAnimationFrame(() => L?.blur())) : E([N]);
  }
  function _(N) {
    const k = t.edgeLookup.get(N);
    if (!k) {
      console.warn("012", go.error012(N));
      return;
    }
    (k.selectable || t.elementsSelectable && typeof k.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, k.selected ? k.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [k] }) : x([N]));
  }
  function M(N, k) {
    const { nodeExtent: L, snapGrid: b, nodeOrigin: P, nodeLookup: T, nodesDraggable: A, onerror: R } = t, O = /* @__PURE__ */ new Map(), B = b?.[0] ?? 5, G = b?.[1] ?? 5, Q = N.x * B * k, re = N.y * G * k;
    for (const X of T.values()) {
      if (!(X.selected && (X.draggable || A && typeof X.draggable > "u")))
        continue;
      let W = {
        x: X.internals.positionAbsolute.x + Q,
        y: X.internals.positionAbsolute.y + re
      };
      b && (W = Hi(W, b));
      const { position: Y, positionAbsolute: ee } = yc({
        nodeId: X.id,
        nextPosition: W,
        nodeLookup: T,
        nodeExtent: L,
        nodeOrigin: P,
        onError: R
      });
      X.position = Y, X.internals.positionAbsolute = ee, O.set(X.id, X);
    }
    i(O);
  }
  function V(N) {
    return $0({
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
  function U() {
    t._connection = Cs;
  }
  function j() {
    t.resetStoreValues(), w();
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
    setPaneClickDistance: y,
    unselectNodesAndEdges: w,
    addSelectedNodes: E,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: _,
    moveSelectedNodes: M,
    panBy: V,
    updateConnection: Z,
    cancelConnection: U,
    reset: j
  });
}
function im(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: u, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = q0({
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
    update(y) {
      g.update(y);
    }
  };
}
var sm = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Jc(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnScrollMode", 23, () => cn.Free), o = m(t, "preventScrolling", 7, !0), i = m(t, "zoomOnScroll", 7, !0), s = m(t, "zoomOnDoubleClick", 7, !0), a = m(t, "zoomOnPinch", 7, !0), l = m(t, "panOnDrag", 7, !0), u = m(t, "panOnScroll", 7, !1), d = m(t, "paneClickDistance", 7, 1), p = m(t, "onmovestart", 7), f = m(t, "onmove", 7), g = m(t, "onmoveend", 7), h = m(t, "oninit", 7), y = m(t, "children", 7), C = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ S(() => n().panActivationKeyPressed || u());
  const { viewport: E } = n();
  let x = !1;
  nt(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var $ = sm(), _ = q($);
  return rt(_, y), I($), mt($, (M, V) => im?.(M, V), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: E,
    onDraggingChange: (M) => {
      n(n().dragging = M, !0);
    },
    setPanZoomInstance: (M) => {
      n(n().panZoom = M, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c(w),
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
    onTransformChange: (M) => {
      n(n().viewport = { x: M[0], y: M[1], zoom: M[2] }, !0);
    }
  })), D(e, $), pe({
    get store() {
      return n();
    },
    set store(M) {
      n(M), v();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M = cn.Free) {
      r(M), v();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(M = !0) {
      o(M), v();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(M = !0) {
      i(M), v();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(M = !0) {
      s(M), v();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(M = !0) {
      a(M), v();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(M = !0) {
      l(M), v();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(M = !1) {
      u(M), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(M = 1) {
      d(M), v();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(M) {
      p(M), v();
    },
    get onmove() {
      return f();
    },
    set onmove(M) {
      f(M), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(M) {
      g(M), v();
    },
    get oninit() {
      return h();
    },
    set oninit(M) {
      h(M), v();
    },
    get children() {
      return y();
    },
    set children(M) {
      y(M), v();
    }
  });
}
le(
  Jc,
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
function Nl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Dl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var am = /* @__PURE__ */ te("<div><!></div>");
function Gc(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "panOnDrag", 7, !0), o = m(t, "selectionOnDrag", 7), i = m(t, "onpaneclick", 7), s = m(t, "onpanecontextmenu", 7), a = m(t, "onselectionstart", 7), l = m(t, "onselectionend", 7), u = m(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ S(() => n().selectionKeyPressed || n().selectionRect || o() && c(h) !== !0), C = /* @__PURE__ */ S(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), w = !1;
  function E(k) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: k }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(k) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !c(y) || k.button !== 0 || k.target !== d || !p)
      return;
    k.target?.setPointerCapture?.(k.pointerId);
    const { x: L, y: b } = sn(k, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: L, startY: b, x: L, y: b }, !0), a()?.(k);
  }
  function $(k) {
    if (!c(y) || !p || !n().selectionRect)
      return;
    w = !0;
    const L = sn(k, p), { startX: b = 0, startY: P = 0 } = n().selectionRect, T = {
      ...n().selectionRect,
      x: L.x < b ? L.x : b,
      y: L.y < P ? L.y : P,
      width: Math.abs(L.x - b),
      height: Math.abs(L.y - P)
    }, A = f, R = g;
    f = new Set(ca(
      n().nodeLookup,
      T,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === hi.Partial,
      !0
    ).map((B) => B.id));
    const O = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const B of f) {
      const G = n().connectionLookup.get(B);
      if (G)
        for (const { edgeId: Q } of G.values()) {
          const re = n().edgeLookup.get(Q);
          re && (re.selectable ?? O) && g.add(Q);
        }
    }
    Dl(A, f) || n(n().nodes = n().nodes.map(Nl(f)), !0), Dl(R, g) || n(n().edges = n().edges.map(Nl(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = T, !0);
  }
  function _(k) {
    k.button === 0 && (k.target?.releasePointerCapture?.(k.pointerId), !c(y) && n().selectionRectMode === "user" && k.target === d && E?.(k), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(k));
  }
  const M = (k) => {
    if (Array.isArray(c(h)) && c(h).includes(2)) {
      k.preventDefault();
      return;
    }
    s()?.({ event: k });
  };
  var V = am();
  let Z;
  var U = /* @__PURE__ */ S(() => c(C) ? void 0 : Ol(E, d));
  V.__click = function(...k) {
    c(U)?.apply(this, k);
  }, V.__pointerdown = function(...k) {
    (c(C) ? x : void 0)?.apply(this, k);
  }, V.__pointermove = function(...k) {
    (c(C) ? $ : void 0)?.apply(this, k);
  }, V.__pointerup = function(...k) {
    (c(C) ? _ : void 0)?.apply(this, k);
  };
  var j = /* @__PURE__ */ S(() => Ol(M, d));
  V.__contextmenu = function(...k) {
    c(j)?.apply(this, k);
  };
  var N = q(V);
  return rt(N, u), I(V), At(V, (k) => d = k, () => d), Se((k) => Z = Ot(V, 1, "svelte-flow__pane svelte-flow__container", null, Z, k), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), D(e, V), pe({
    get store() {
      return n();
    },
    set store(k) {
      n(k), v();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(k = !0) {
      r(k), v();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(k) {
      o(k), v();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(k) {
      i(k), v();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(k) {
      s(k), v();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(k) {
      a(k), v();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(k) {
      l(k), v();
    },
    get children() {
      return u();
    },
    set children(k) {
      u(k), v();
    }
  });
}
Vn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
le(
  Gc,
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
var lm = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Uc(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "children", 7);
  var o = lm();
  let i;
  var s = q(o);
  return rt(s, r), I(o), Se((a) => i = Ct(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), D(e, o), pe({
    get store() {
      return n();
    },
    set store(a) {
      n(a), v();
    },
    get children() {
      return r();
    },
    set children(a) {
      r(a), v();
    }
  });
}
le(Uc, { store: {}, children: {} }, [], [], !0);
function Qc(e, t) {
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
var um = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), cm = /* @__PURE__ */ te('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const dm = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function ed(e, t) {
  fe(t, !0), Ae(e, dm);
  let n = m(t, "store", 7);
  var r = cm(), o = de(r), i = q(o, !0);
  I(o);
  var s = H(o, 2), a = q(s, !0);
  I(s);
  var l = H(s, 2);
  {
    var u = (d) => {
      var p = um(), f = q(p, !0);
      I(p), Se(() => {
        $e(p, "id", `${fm}-${n().flowId}`), Ke(f, n().ariaLiveMessage);
      }), D(d, p);
    };
    ue(l, (d) => {
      n().disableKeyboardA11y || d(u);
    });
  }
  return Se(() => {
    $e(o, "id", `${td}-${n().flowId}`), Ke(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), $e(s, "id", `${nd}-${n().flowId}`), Ke(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, r), pe({
    get store() {
      return n();
    },
    set store(d) {
      n(d), v();
    }
  });
}
le(ed, { store: {} }, [], [], !0);
const td = "svelte-flow__node-desc", nd = "svelte-flow__edge-desc", fm = "svelte-flow__aria-live";
var pm = /* @__PURE__ */ te("<div><!></div>");
function rd(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "node", 7), o = m(t, "resizeObserver", 7), i = m(t, "nodeClickDistance", 7), s = m(t, "onnodeclick", 7), a = m(t, "onnodedrag", 7), l = m(t, "onnodedragstart", 7), u = m(t, "onnodedragstop", 7), d = m(t, "onnodepointerenter", 7), p = m(t, "onnodepointerleave", 7), f = m(t, "onnodepointermove", 7), g = m(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ S(() => xt(r().data, () => ({}), !0)), y = /* @__PURE__ */ S(() => xt(r().selected, !1)), C = /* @__PURE__ */ S(() => r().draggable), w = /* @__PURE__ */ S(() => r().selectable), E = /* @__PURE__ */ S(() => xt(r().deletable, !0)), x = /* @__PURE__ */ S(() => r().connectable), $ = /* @__PURE__ */ S(() => r().focusable), _ = /* @__PURE__ */ S(() => xt(r().hidden, !1)), M = /* @__PURE__ */ S(() => xt(r().dragging, !1)), V = /* @__PURE__ */ S(() => xt(r().style, "")), Z = /* @__PURE__ */ S(() => r().class), U = /* @__PURE__ */ S(() => xt(r().type, "default")), j = /* @__PURE__ */ S(() => r().parentId), N = /* @__PURE__ */ S(() => r().sourcePosition), k = /* @__PURE__ */ S(() => r().targetPosition), L = /* @__PURE__ */ S(() => xt(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ S(() => xt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ S(() => r().initialWidth), T = /* @__PURE__ */ S(() => r().initialHeight), A = /* @__PURE__ */ S(() => r().width), R = /* @__PURE__ */ S(() => r().height), O = /* @__PURE__ */ S(() => r().dragHandle), B = /* @__PURE__ */ S(() => xt(r().internals.z, 0)), G = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), Q = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), re = /* @__PURE__ */ S(() => r().internals.userNode), { id: X } = r(), W = /* @__PURE__ */ S(() => c(C) ?? n().nodesDraggable), Y = /* @__PURE__ */ S(() => c(w) ?? n().elementsSelectable), ee = /* @__PURE__ */ S(() => c(x) ?? n().nodesConnectable), F = /* @__PURE__ */ S(() => $c(r())), ye = /* @__PURE__ */ S(() => !!r().internals.handleBounds), ge = /* @__PURE__ */ S(() => c(F) && c(ye)), ae = /* @__PURE__ */ S(() => c($) ?? n().nodesFocusable);
  function oe(me) {
    return n().parentLookup.has(me);
  }
  let ce = /* @__PURE__ */ S(() => oe(X)), ie = /* @__PURE__ */ Pe(null), ve = null, se = c(U), _e = c(N), K = c(k), Ue = /* @__PURE__ */ S(() => n().nodeTypes[c(U)] ?? va), He = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  Lr("svelteflow__node_connectable", {
    get value() {
      return c(ee);
    }
  }), Lr("svelteflow__node_id", X);
  let Re = /* @__PURE__ */ S(() => {
    const me = c(L) === void 0 ? c(A) ?? c(P) : c(A), Xe = c(b) === void 0 ? c(R) ?? c(T) : c(R);
    if (!(me === void 0 && Xe === void 0 && c(V) === void 0))
      return `${c(V)};${me ? `width:${gn(me)};` : ""}${Xe ? `height:${gn(Xe)};` : ""}`;
  });
  nt(() => {
    (c(U) !== se || c(N) !== _e || c(k) !== K) && c(ie) !== null && requestAnimationFrame(() => {
      c(ie) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[X, { id: X, nodeElement: c(ie), force: !0 }]]));
    }), se = c(U), _e = c(N), K = c(k);
  }), nt(() => {
    o() && (!c(ge) || c(ie) !== ve) && (ve && o().unobserve(ve), c(ie) && o().observe(c(ie)), ve = c(ie));
  }), Pi(() => {
    ve && o()?.unobserve(ve);
  });
  function et(me) {
    c(Y) && (!n().selectNodesOnDrag || !c(W) || n().nodeDragThreshold > 0) && n().handleNodeSelection(X), s()?.({ node: c(re), event: me });
  }
  function Ye(me) {
    if (!(_c(me) || n().disableKeyboardA11y))
      if (vc.includes(me.key) && c(Y)) {
        const Xe = me.key === "Escape";
        n().handleNodeSelection(X, Xe, c(ie));
      } else c(W) && r().selected && Object.prototype.hasOwnProperty.call(yi, me.key) && (me.preventDefault(), n(
        n().ariaLiveMessage = c(He)["node.a11yDescription.ariaLiveMessage"]({
          direction: me.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(yi[me.key], me.shiftKey ? 4 : 1));
  }
  const Fe = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(ie)?.matches(":focus-visible"))
      return;
    const { width: me, height: Xe, viewport: dt } = n();
    ca(/* @__PURE__ */ new Map([[X, r()]]), { x: 0, y: 0, width: me, height: Xe }, [dt.x, dt.y, dt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: dt.zoom });
  };
  var Rt = Ve(), Ie = de(Rt);
  {
    var ct = (me) => {
      var Xe = pm();
      ut(
        Xe,
        (Qe, kt) => ({
          "data-id": X,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${c(U)}`,
            c(Z)
          ],
          style: c(Re),
          onclick: et,
          onpointerenter: d() ? (at) => d()({ node: c(re), event: at }) : void 0,
          onpointerleave: p() ? (at) => p()({ node: c(re), event: at }) : void 0,
          onpointermove: f() ? (at) => f()({ node: c(re), event: at }) : void 0,
          oncontextmenu: g() ? (at) => g()({ node: c(re), event: at }) : void 0,
          onkeydown: c(ae) ? Ye : void 0,
          onfocus: c(ae) ? Fe : void 0,
          tabIndex: c(ae) ? 0 : void 0,
          role: r().ariaRole ?? (c(ae) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${td}-${n().flowId}`,
          ...r().domAttributes,
          [qn]: Qe,
          [on]: kt
        }),
        [
          () => ({
            dragging: c(M),
            selected: c(y),
            draggable: c(W),
            connectable: c(ee),
            selectable: c(Y),
            nopan: c(W),
            parent: c(ce)
          }),
          () => ({
            "z-index": c(B),
            transform: `translate(${c(G) ?? ""}px, ${c(Q) ?? ""}px)`,
            visibility: c(F) ? "visible" : "hidden"
          })
        ]
      );
      var dt = q(Xe);
      ea(dt, () => c(Ue), (Qe, kt) => {
        kt(Qe, {
          get data() {
            return c(h);
          },
          get id() {
            return X;
          },
          get selected() {
            return c(y);
          },
          get selectable() {
            return c(Y);
          },
          get deletable() {
            return c(E);
          },
          get sourcePosition() {
            return c(N);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(B);
          },
          get dragging() {
            return c(M);
          },
          get draggable() {
            return c(W);
          },
          get dragHandle() {
            return c(O);
          },
          get parentId() {
            return c(j);
          },
          get type() {
            return c(U);
          },
          get isConnectable() {
            return c(ee);
          },
          get positionAbsoluteX() {
            return c(G);
          },
          get positionAbsoluteY() {
            return c(Q);
          },
          get width() {
            return c(A);
          },
          get height() {
            return c(R);
          }
        });
      }), I(Xe), mt(Xe, (Qe, kt) => Qc?.(Qe, kt), () => ({
        nodeId: X,
        isSelectable: c(Y),
        disabled: !c(W),
        handleSelector: c(O),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (Qe, kt, at, qt) => {
          a()?.({ event: Qe, targetNode: at, nodes: qt });
        },
        onDragStart: (Qe, kt, at, qt) => {
          l()?.({ event: Qe, targetNode: at, nodes: qt });
        },
        onDragStop: (Qe, kt, at, qt) => {
          u()?.({ event: Qe, targetNode: at, nodes: qt });
        },
        store: n()
      })), At(Xe, (Qe) => J(ie, Qe), () => c(ie)), D(me, Xe);
    };
    ue(Ie, (me) => {
      c(_) || me(ct);
    });
  }
  return D(e, Rt), pe({
    get store() {
      return n();
    },
    set store(me) {
      n(me), v();
    },
    get node() {
      return r();
    },
    set node(me) {
      r(me), v();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(me) {
      o(me), v();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(me) {
      i(me), v();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(me) {
      s(me), v();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(me) {
      a(me), v();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(me) {
      l(me), v();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(me) {
      u(me), v();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(me) {
      d(me), v();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(me) {
      p(me), v();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(me) {
      f(me), v();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(me) {
      g(me), v();
    }
  });
}
le(
  rd,
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
var gm = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function od(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "nodeClickDistance", 7), o = m(t, "onnodeclick", 7), i = m(t, "onnodecontextmenu", 7), s = m(t, "onnodepointerenter", 7), a = m(t, "onnodepointermove", 7), l = m(t, "onnodepointerleave", 7), u = m(t, "onnodedrag", 7), d = m(t, "onnodedragstart", 7), p = m(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const y = /* @__PURE__ */ new Map();
    h.forEach((C) => {
      const w = C.target.getAttribute("data-id");
      y.set(w, { id: w, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  Pi(() => {
    f?.disconnect();
  });
  var g = gm();
  return wt(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, y) => {
    rd(h, {
      get node() {
        return c(y);
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
  }), I(g), D(e, g), pe({
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(h) {
      r(h), v();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(h) {
      o(h), v();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(h) {
      i(h), v();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(h) {
      s(h), v();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(h) {
      a(h), v();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(h) {
      l(h), v();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(h) {
      u(h), v();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(h) {
      d(h), v();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(h) {
      p(h), v();
    }
  });
}
le(
  od,
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
function id(e, t) {
  fe(t, !0);
  const n = m(t, "edge", 7), r = m(t, "store", 15), o = m(t, "onedgeclick", 7), i = m(t, "onedgecontextmenu", 7), s = m(t, "onedgepointerenter", 7), a = m(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), u = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), p = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), g = /* @__PURE__ */ S(() => n().targetY), h = /* @__PURE__ */ S(() => n().sourcePosition), y = /* @__PURE__ */ S(() => n().targetPosition), C = /* @__PURE__ */ S(() => xt(n().animated, !1)), w = /* @__PURE__ */ S(() => xt(n().selected, !1)), E = /* @__PURE__ */ S(() => n().label), x = /* @__PURE__ */ S(() => n().labelStyle), $ = /* @__PURE__ */ S(() => xt(n().data, () => ({}), !0)), _ = /* @__PURE__ */ S(() => n().style), M = /* @__PURE__ */ S(() => n().interactionWidth), V = /* @__PURE__ */ S(() => xt(n().type, "default")), Z = /* @__PURE__ */ S(() => n().sourceHandle), U = /* @__PURE__ */ S(() => n().targetHandle), j = /* @__PURE__ */ S(() => n().markerStart), N = /* @__PURE__ */ S(() => n().markerEnd), k = /* @__PURE__ */ S(() => n().selectable), L = /* @__PURE__ */ S(() => n().focusable), b = /* @__PURE__ */ S(() => xt(n().deletable, !0)), P = /* @__PURE__ */ S(() => n().hidden), T = /* @__PURE__ */ S(() => n().zIndex), A = /* @__PURE__ */ S(() => n().class), R = /* @__PURE__ */ S(() => n().ariaLabel), O = null;
  const { id: B } = n();
  Lr("svelteflow__edge_id", B);
  let G = /* @__PURE__ */ S(() => c(k) ?? r().elementsSelectable), Q = /* @__PURE__ */ S(() => c(L) ?? r().edgesFocusable), re = /* @__PURE__ */ S(() => r().edgeTypes[c(V)] ?? ma), X = /* @__PURE__ */ S(() => c(j) ? `url('#${_s(c(j), r().flowId)}')` : void 0), W = /* @__PURE__ */ S(() => c(N) ? `url('#${_s(c(N), r().flowId)}')` : void 0);
  function Y(oe) {
    const ce = r().edgeLookup.get(B);
    ce && (c(G) && r().handleEdgeSelection(B), o()?.({ event: oe, edge: ce }));
  }
  function ee(oe, ce) {
    const ie = r().edgeLookup.get(B);
    ie && ce({ event: oe, edge: ie });
  }
  function F(oe) {
    if (!r().disableKeyboardA11y && vc.includes(oe.key) && c(G)) {
      const { unselectNodesAndEdges: ce, addSelectedEdges: ie } = r();
      oe.key === "Escape" ? (O?.blur(), ce({ edges: [n()] })) : ie([B]);
    }
  }
  var ye = Ve(), ge = de(ye);
  {
    var ae = (oe) => {
      var ce = hm();
      let ie;
      var ve = q(ce);
      ut(
        ve,
        (_e) => ({
          class: ["svelte-flow__edge", c(A)],
          "data-id": B,
          onclick: Y,
          oncontextmenu: i() ? (K) => {
            ee(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            ee(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            ee(K, a());
          } : void 0,
          "aria-label": c(R) === null ? void 0 : c(R) ? c(R) : `Edge from ${c(l)} to ${c(u)}`,
          "aria-describedby": c(Q) ? `${nd}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (c(Q) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: c(Q) ? F : void 0,
          tabindex: c(Q) ? 0 : void 0,
          ...n().domAttributes,
          [qn]: _e
        }),
        [
          () => ({
            animated: c(C),
            selected: c(w),
            selectable: c(G)
          })
        ]
      );
      var se = q(ve);
      ea(se, () => c(re), (_e, K) => {
        K(_e, {
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
            return c(y);
          },
          get animated() {
            return c(C);
          },
          get selected() {
            return c(w);
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
            return c(_);
          },
          get interactionWidth() {
            return c(M);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c(b);
          },
          get type() {
            return c(V);
          },
          get sourceHandleId() {
            return c(Z);
          },
          get targetHandleId() {
            return c(U);
          },
          get markerStart() {
            return c(X);
          },
          get markerEnd() {
            return c(W);
          }
        });
      }), I(ve), At(ve, (_e) => O = _e, () => O), I(ce), Se((_e) => ie = Ct(ce, "", ie, _e), [() => ({ "z-index": c(T) })]), D(oe, ce);
    };
    ue(ge, (oe) => {
      c(P) || oe(ae);
    });
  }
  return D(e, ye), pe({
    get edge() {
      return n();
    },
    set edge(oe) {
      n(oe), v();
    },
    get store() {
      return r();
    },
    set store(oe) {
      r(oe), v();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(oe) {
      o(oe), v();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(oe) {
      i(oe), v();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(oe) {
      s(oe), v();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(oe) {
      a(oe), v();
    }
  });
}
le(
  id,
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
function sd(e, t) {
  fe(t, !1);
  const n = Qt();
  Au();
  var r = vm();
  wt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    ad(o, je(() => c(i)));
  }), I(r), D(e, r), pe();
}
le(sd, {}, [], [], !0);
var mm = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), ym = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), wm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function ad(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "type", 7), o = m(t, "width", 7, 12.5), i = m(t, "height", 7, 12.5), s = m(t, "markerUnits", 7, "strokeWidth"), a = m(t, "orient", 7, "auto-start-reverse"), l = m(t, "color", 7), u = m(t, "strokeWidth", 7);
  var d = wm(), p = q(d);
  {
    var f = (h) => {
      var y = mm();
      Se(() => {
        $e(y, "stroke", l()), $e(y, "stroke-width", u());
      }), D(h, y);
    }, g = (h, y) => {
      {
        var C = (w) => {
          var E = ym();
          Se(() => {
            $e(E, "stroke", l()), $e(E, "stroke-width", u()), $e(E, "fill", l());
          }), D(w, E);
        };
        ue(
          h,
          (w) => {
            r() === ho.ArrowClosed && w(C);
          },
          y
        );
      }
    };
    ue(p, (h) => {
      r() === ho.Arrow ? h(f) : h(g, !1);
    });
  }
  return I(d), Se(() => {
    $e(d, "id", n()), $e(d, "markerWidth", `${o()}`), $e(d, "markerHeight", `${i()}`), $e(d, "markerUnits", s()), $e(d, "orient", a());
  }), D(e, d), pe({
    get id() {
      return n();
    },
    set id(h) {
      n(h), v();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), v();
    },
    get width() {
      return o();
    },
    set width(h = 12.5) {
      o(h), v();
    },
    get height() {
      return i();
    },
    set height(h = 12.5) {
      i(h), v();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(h = "strokeWidth") {
      s(h), v();
    },
    get orient() {
      return a();
    },
    set orient(h = "auto-start-reverse") {
      a(h), v();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), v();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(h) {
      u(h), v();
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
var bm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ld(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "onedgeclick", 7), o = m(t, "onedgecontextmenu", 7), i = m(t, "onedgepointerenter", 7), s = m(t, "onedgepointerleave", 7);
  var a = bm(), l = q(a), u = q(l);
  sd(u, {}), I(l);
  var d = H(l, 2);
  return wt(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    id(p, {
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
  }), I(a), D(e, a), pe({
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
  });
}
le(
  ld,
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
var xm = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const $m = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ya(e, t) {
  fe(t, !0), Ae(e, $m);
  let n = m(t, "x", 7, 0), r = m(t, "y", 7, 0), o = m(t, "width", 7, 0), i = m(t, "height", 7, 0), s = m(t, "isVisible", 7, !0);
  var a = Ve(), l = de(a);
  {
    var u = (d) => {
      var p = xm();
      let f;
      Se((g) => f = Ct(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : gn(o()),
          height: typeof i() == "string" ? i() : gn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(d, p);
    };
    ue(l, (d) => {
      s() && d(u);
    });
  }
  return D(e, a), pe({
    get x() {
      return n();
    },
    set x(d = 0) {
      n(d), v();
    },
    get y() {
      return r();
    },
    set y(d = 0) {
      r(d), v();
    },
    get width() {
      return o();
    },
    set width(d = 0) {
      o(d), v();
    },
    get height() {
      return i();
    },
    set height(d = 0) {
      i(d), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible(d = !0) {
      s(d), v();
    }
  });
}
le(ya, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function Cm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function km(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var _m = /* @__PURE__ */ te("<div><!></div>");
const Sm = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function ud(e, t) {
  fe(t, !0), Ae(e, Sm);
  let n = m(t, "store", 15), r = m(t, "onnodedrag", 7), o = m(t, "onnodedragstart", 7), i = m(t, "onnodedragstop", 7), s = m(t, "onselectionclick", 7), a = m(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Pe(void 0);
  nt(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ S(() => n().selectionRectMode === "nodes" ? (n().nodes, Oo(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(yi, h.key) && (h.preventDefault(), n().moveSelectedNodes(yi[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Ve(), f = de(p);
  {
    var g = (h) => {
      var y = _m();
      y.__contextmenu = [Cm, n, a], y.__click = [km, n, s], y.__keydown = function(...E) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, E);
      };
      let C;
      var w = q(y);
      ya(w, { width: "100%", height: "100%", x: 0, y: 0 }), I(y), mt(y, (E, x) => Qc?.(E, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (E, x, $, _) => {
          r()?.({ event: E, targetNode: null, nodes: _ });
        },
        onDragStart: (E, x, $, _) => {
          o()?.({ event: E, targetNode: null, nodes: _ });
        },
        onDragStop: (E, x, $, _) => {
          i()?.({ event: E, targetNode: null, nodes: _ });
        }
      })), At(y, (E) => J(l, E), () => c(l)), Se(
        (E) => {
          Ot(y, 1, zn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), $e(y, "role", n().disableKeyboardA11y ? void 0 : "button"), $e(y, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = Ct(y, "", C, E);
        },
        [
          () => ({
            width: gn(c(u).width),
            height: gn(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), D(h, y);
    };
    ue(f, (h) => {
      n().selectionRectMode === "nodes" && c(u) && kn(c(u).x) && kn(c(u).y) && h(g);
    });
  }
  return D(e, p), pe({
    get store() {
      return n();
    },
    set store(h) {
      n(h), v();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(h) {
      r(h), v();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(h) {
      o(h), v();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(h) {
      i(h), v();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(h) {
      s(h), v();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(h) {
      a(h), v();
    }
  });
}
Vn(["contextmenu", "click", "keydown"]);
le(
  ud,
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
      }, { modifier: f, key: g, callback: h, preventDefault: y, enabled: C } = p;
      if (C) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const E = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const $ of E)
            if ((Array.isArray($) ? $ : [$]).reduce(
              (_, M) => _ | Em(M),
              0
            ) === u) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        y && a.preventDefault();
        const w = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), h?.(w);
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
function ht() {
  const e = /* @__PURE__ */ S(Qt), t = (i) => {
    const s = Tl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? e0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Hr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = ft(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Tl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = ft(() => c(e).edges).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a.replace && Y0(u) ? u : { ...l, ...u };
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
    getNodes: (i) => i === void 0 ? c(e).nodes : Ml(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : Ml(c(e).edgeLookup, i),
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
    getViewport: () => tu(c(e).viewport),
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
      const l = ml(i), u = l ? i : t(i);
      return u ? (a || c(e).nodes).filter((d) => {
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Hr(p), g = vo(f, u);
        return s && g > 0 || g >= f.width * f.height || g >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = ml(i) ? i : t(i);
      if (!l)
        return !1;
      const u = vo(l, s);
      return a && u > 0 || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Jv({
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
    getNodesBounds: (i) => Yv(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Ml(e, t) {
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
function cd(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "selectionKey", 7, "Shift"), o = m(t, "multiSelectionKey", 23, () => Cr() ? "Meta" : "Control"), i = m(t, "deleteKey", 7, "Backspace"), s = m(t, "panActivationKey", 7, " "), a = m(t, "zoomActivationKey", 23, () => Cr() ? "Meta" : "Control"), { deleteElements: l } = ht();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function f(y, C) {
    return (Array.isArray(y) ? y : [y]).map((w) => {
      const E = p(w);
      return {
        key: E,
        modifier: d(w),
        enabled: E !== null,
        callback: C
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const y = n().nodes.filter((x) => x.selected), C = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: E } = await l({ nodes: y, edges: C });
    (w.length > 0 || E.length > 0) && n().ondelete?.({ nodes: w, edges: E });
  }
  return qa("blur", St, g), qa("contextmenu", St, g), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !_c(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), mt(St, (y, C) => nn?.(y, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), pe({
    get store() {
      return n();
    },
    set store(y) {
      n(y), v();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(y = "Shift") {
      r(y), v();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(y = Cr() ? "Meta" : "Control") {
      o(y), v();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(y = "Backspace") {
      i(y), v();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(y = " ") {
      s(y), v();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(y = Cr() ? "Meta" : "Control") {
      a(y), v();
    }
  });
}
le(
  cd,
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
var Pm = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), Tm = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function dd(e, t) {
  fe(t, !0);
  let n = m(t, "store", 15), r = m(t, "type", 7), o = m(t, "containerStyle", 7), i = m(t, "style", 7), s = m(t, "LineComponent", 7), a = /* @__PURE__ */ S(() => {
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
        const [f] = Ec(p);
        return f;
      }
      case $n.Straight: {
        const [f] = Tc(p);
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
  var l = Ve(), u = de(l);
  {
    var d = (p) => {
      var f = Tm(), g = q(f), h = q(g);
      {
        var y = (w) => {
          var E = Ve(), x = de(E);
          ea(x, s, ($, _) => {
            _($, {});
          }), D(w, E);
        }, C = (w) => {
          var E = Pm();
          Se(() => {
            $e(E, "d", c(a)), Ct(E, i());
          }), D(w, E);
        };
        ue(h, (w) => {
          s() ? w(y) : w(C, !1);
        });
      }
      I(g), I(f), Se(
        (w) => {
          $e(f, "width", n().width), $e(f, "height", n().height), Ct(f, o()), Ot(g, 0, w);
        },
        [
          () => zn([
            "svelte-flow__connection",
            Kv(n().connection.isValid)
          ])
        ]
      ), D(p, f);
    };
    ue(u, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return D(e, l), pe({
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
  });
}
le(
  dd,
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
var Lm = /* @__PURE__ */ te("<div><!></div>");
function Mo(e, t) {
  fe(t, !0);
  let n = m(t, "position", 7, "top-right"), r = m(t, "style", 7), o = m(t, "class", 7), i = m(t, "children", 7), s = /* @__PURE__ */ Be(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = Lm();
  ut(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var u = q(l);
  return rt(u, () => i() ?? gt), I(l), D(e, l), pe({
    get position() {
      return n();
    },
    set position(d = "top-right") {
      n(d), v();
    },
    get style() {
      return r();
    },
    set style(d) {
      r(d), v();
    },
    get class() {
      return o();
    },
    set class(d) {
      o(d), v();
    },
    get children() {
      return i();
    },
    set children(d) {
      i(d), v();
    }
  });
}
le(Mo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Om = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function fd(e, t) {
  fe(t, !0);
  let n = m(t, "proOptions", 7), r = m(t, "position", 7, "bottom-right");
  var o = Ve(), i = de(o);
  {
    var s = (a) => {
      Mo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var d = Om();
          D(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    ue(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return D(e, o), pe({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), v();
    },
    get position() {
      return r();
    },
    set position(a = "bottom-right") {
      r(a), v();
    }
  });
}
le(fd, { proOptions: {}, position: {} }, [], [], !0);
var Nm = /* @__PURE__ */ te("<div><!></div>");
const Dm = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function pd(e, t) {
  fe(t, !0), Ae(e, Dm);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "colorMode", 7), i = m(t, "domNode", 15), s = m(t, "clientWidth", 15), a = m(t, "clientHeight", 15), l = m(t, "children", 7), u = m(t, "rest", 7), d = /* @__PURE__ */ S(() => u().class), p = /* @__PURE__ */ S(() => kp(u(), [
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
  function f(y) {
    y.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(y);
  }
  var g = Nm();
  ut(
    g,
    (y) => ({
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
      [on]: y
    }),
    [
      () => ({ width: gn(n()), height: gn(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = q(g);
  return rt(h, () => l() ?? gt), I(g), At(g, (y) => i(y), () => i()), Fa(g, "clientHeight", a), Fa(g, "clientWidth", s), D(e, g), pe({
    get width() {
      return n();
    },
    set width(y) {
      n(y), v();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), v();
    },
    get colorMode() {
      return o();
    },
    set colorMode(y) {
      o(y), v();
    },
    get domNode() {
      return i();
    },
    set domNode(y) {
      i(y), v();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(y) {
      s(y), v();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(y) {
      a(y), v();
    },
    get children() {
      return l();
    },
    set children(y) {
      l(y), v();
    },
    get rest() {
      return u();
    },
    set rest(y) {
      u(y), v();
    }
  });
}
le(
  pd,
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
var Mm = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Vm = /* @__PURE__ */ te("<!> <!>", 1), zm = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function gd(e, t) {
  fe(t, !0);
  let n = m(t, "width", 7), r = m(t, "height", 7), o = m(t, "proOptions", 7), i = m(t, "selectionKey", 7), s = m(t, "deleteKey", 7), a = m(t, "panActivationKey", 7), l = m(t, "multiSelectionKey", 7), u = m(t, "zoomActivationKey", 7), d = m(t, "paneClickDistance", 7, 1), p = m(t, "nodeClickDistance", 7, 1), f = m(t, "onmovestart", 7), g = m(t, "onmoveend", 7), h = m(t, "onmove", 7), y = m(t, "oninit", 7), C = m(t, "onnodeclick", 7), w = m(t, "onnodecontextmenu", 7), E = m(t, "onnodedrag", 7), x = m(t, "onnodedragstart", 7), $ = m(t, "onnodedragstop", 7), _ = m(t, "onnodepointerenter", 7), M = m(t, "onnodepointermove", 7), V = m(t, "onnodepointerleave", 7), Z = m(t, "onselectionclick", 7), U = m(t, "onselectioncontextmenu", 7), j = m(t, "onselectionstart", 7), N = m(t, "onselectionend", 7), k = m(t, "onedgeclick", 7), L = m(t, "onedgecontextmenu", 7), b = m(t, "onedgepointerenter", 7), P = m(t, "onedgepointerleave", 7), T = m(t, "onpaneclick", 7), A = m(t, "onpanecontextmenu", 7), R = m(t, "panOnScrollMode", 23, () => cn.Free), O = m(t, "preventScrolling", 7, !0), B = m(t, "zoomOnScroll", 7, !0), G = m(t, "zoomOnDoubleClick", 7, !0), Q = m(t, "zoomOnPinch", 7, !0), re = m(t, "panOnScroll", 7, !1), X = m(t, "panOnDrag", 7, !0), W = m(t, "selectionOnDrag", 7, !0), Y = m(t, "connectionLineComponent", 7), ee = m(t, "connectionLineStyle", 7), F = m(t, "connectionLineContainerStyle", 7), ye = m(t, "connectionLineType", 23, () => $n.Bezier), ge = m(t, "attributionPosition", 7), ae = m(t, "children", 7), oe = m(t, "nodes", 31, () => jt([])), ce = m(t, "edges", 31, () => jt([])), ie = m(t, "viewport", 31, () => {
  }), ve = /* @__PURE__ */ Be(t, [
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
  ]), se = Wc({
    props: ve,
    width: n(),
    height: r(),
    get nodes() {
      return oe();
    },
    set nodes(K) {
      oe(K);
    },
    get edges() {
      return ce();
    },
    set edges(K) {
      ce(K);
    },
    get viewport() {
      return ie();
    },
    set viewport(K) {
      ie(K);
    }
  });
  const _e = jn(wi);
  return _e && _e.setStore && _e.setStore(se), Lr(wi, {
    provider: !1,
    getStore() {
      return se;
    }
  }), nt(() => {
    const K = { nodes: se.selectedNodes, edges: se.selectedEdges };
    ft(() => t.onselectionchange)?.(K);
    for (const Ue of se.selectionChangeHandlers.values())
      Ue(K);
  }), Pi(() => {
    se.reset();
  }), pd(e, {
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
    children: (K, Ue) => {
      var He = zm(), Re = de(He);
      cd(Re, {
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
      var et = H(Re, 2);
      Jc(et, {
        get panOnScrollMode() {
          return R();
        },
        get preventScrolling() {
          return O();
        },
        get zoomOnScroll() {
          return B();
        },
        get zoomOnDoubleClick() {
          return G();
        },
        get zoomOnPinch() {
          return Q();
        },
        get panOnScroll() {
          return re();
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
          return y();
        },
        get store() {
          return se;
        },
        set store(Ie) {
          se = Ie;
        },
        children: (Ie, ct) => {
          Gc(Ie, {
            get onpaneclick() {
              return T();
            },
            get onpanecontextmenu() {
              return A();
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
              return W();
            },
            get store() {
              return se;
            },
            set store(me) {
              se = me;
            },
            children: (me, Xe) => {
              var dt = Vm(), Qe = de(dt);
              Uc(Qe, {
                get store() {
                  return se;
                },
                set store(tr) {
                  se = tr;
                },
                children: (tr, Zi) => {
                  var bn = Mm(), yr = H(de(bn), 2);
                  ld(yr, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return L();
                    },
                    get onedgepointerenter() {
                      return b();
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
                  var wr = H(yr, 4);
                  dd(wr, {
                    get type() {
                      return ye();
                    },
                    get LineComponent() {
                      return Y();
                    },
                    get containerStyle() {
                      return F();
                    },
                    get style() {
                      return ee();
                    },
                    get store() {
                      return se;
                    },
                    set store(tn) {
                      se = tn;
                    }
                  });
                  var jr = H(wr, 2);
                  od(jr, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return C();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return _();
                    },
                    get onnodepointermove() {
                      return M();
                    },
                    get onnodepointerleave() {
                      return V();
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
                  var Bi = H(jr, 2);
                  ud(Bi, {
                    get onselectionclick() {
                      return Z();
                    },
                    get onselectioncontextmenu() {
                      return U();
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
                  }), be(2), D(tr, bn);
                },
                $$slots: { default: !0 }
              });
              var kt = H(Qe, 2);
              const at = /* @__PURE__ */ S(() => !!(se.selectionRect && se.selectionRectMode === "user")), qt = /* @__PURE__ */ S(() => se.selectionRect?.width), Kr = /* @__PURE__ */ S(() => se.selectionRect?.height), yn = /* @__PURE__ */ S(() => se.selectionRect?.x), wn = /* @__PURE__ */ S(() => se.selectionRect?.y);
              ya(kt, {
                get isVisible() {
                  return c(at);
                },
                get width() {
                  return c(qt);
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
              }), D(me, dt);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Ye = H(et, 2);
      fd(Ye, {
        get proOptions() {
          return o();
        },
        get position() {
          return ge();
        }
      });
      var Fe = H(Ye, 2);
      ed(Fe, {
        get store() {
          return se;
        }
      });
      var Rt = H(Fe, 2);
      rt(Rt, () => ae() ?? gt), D(K, He);
    },
    $$slots: { default: !0 }
  }), pe({
    get width() {
      return n();
    },
    set width(K) {
      n(K), v();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), v();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), v();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), v();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), v();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), v();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), v();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(K) {
      u(K), v();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), v();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(K = 1) {
      p(K), v();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), v();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(K) {
      g(K), v();
    },
    get onmove() {
      return h();
    },
    set onmove(K) {
      h(K), v();
    },
    get oninit() {
      return y();
    },
    set oninit(K) {
      y(K), v();
    },
    get onnodeclick() {
      return C();
    },
    set onnodeclick(K) {
      C(K), v();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(K) {
      w(K), v();
    },
    get onnodedrag() {
      return E();
    },
    set onnodedrag(K) {
      E(K), v();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), v();
    },
    get onnodedragstop() {
      return $();
    },
    set onnodedragstop(K) {
      $(K), v();
    },
    get onnodepointerenter() {
      return _();
    },
    set onnodepointerenter(K) {
      _(K), v();
    },
    get onnodepointermove() {
      return M();
    },
    set onnodepointermove(K) {
      M(K), v();
    },
    get onnodepointerleave() {
      return V();
    },
    set onnodepointerleave(K) {
      V(K), v();
    },
    get onselectionclick() {
      return Z();
    },
    set onselectionclick(K) {
      Z(K), v();
    },
    get onselectioncontextmenu() {
      return U();
    },
    set onselectioncontextmenu(K) {
      U(K), v();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(K) {
      j(K), v();
    },
    get onselectionend() {
      return N();
    },
    set onselectionend(K) {
      N(K), v();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(K) {
      k(K), v();
    },
    get onedgecontextmenu() {
      return L();
    },
    set onedgecontextmenu(K) {
      L(K), v();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(K) {
      b(K), v();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(K) {
      P(K), v();
    },
    get onpaneclick() {
      return T();
    },
    set onpaneclick(K) {
      T(K), v();
    },
    get onpanecontextmenu() {
      return A();
    },
    set onpanecontextmenu(K) {
      A(K), v();
    },
    get panOnScrollMode() {
      return R();
    },
    set panOnScrollMode(K = cn.Free) {
      R(K), v();
    },
    get preventScrolling() {
      return O();
    },
    set preventScrolling(K = !0) {
      O(K), v();
    },
    get zoomOnScroll() {
      return B();
    },
    set zoomOnScroll(K = !0) {
      B(K), v();
    },
    get zoomOnDoubleClick() {
      return G();
    },
    set zoomOnDoubleClick(K = !0) {
      G(K), v();
    },
    get zoomOnPinch() {
      return Q();
    },
    set zoomOnPinch(K = !0) {
      Q(K), v();
    },
    get panOnScroll() {
      return re();
    },
    set panOnScroll(K = !1) {
      re(K), v();
    },
    get panOnDrag() {
      return X();
    },
    set panOnDrag(K = !0) {
      X(K), v();
    },
    get selectionOnDrag() {
      return W();
    },
    set selectionOnDrag(K = !0) {
      W(K), v();
    },
    get connectionLineComponent() {
      return Y();
    },
    set connectionLineComponent(K) {
      Y(K), v();
    },
    get connectionLineStyle() {
      return ee();
    },
    set connectionLineStyle(K) {
      ee(K), v();
    },
    get connectionLineContainerStyle() {
      return F();
    },
    set connectionLineContainerStyle(K) {
      F(K), v();
    },
    get connectionLineType() {
      return ye();
    },
    set connectionLineType(K = $n.Bezier) {
      ye(K), v();
    },
    get attributionPosition() {
      return ge();
    },
    set attributionPosition(K) {
      ge(K), v();
    },
    get children() {
      return ae();
    },
    set children(K) {
      ae(K), v();
    },
    get nodes() {
      return oe();
    },
    set nodes(K = []) {
      oe(K), v();
    },
    get edges() {
      return ce();
    },
    set edges(K = []) {
      ce(K), v();
    },
    get viewport() {
      return ie();
    },
    set viewport(K = void 0) {
      ie(K), v();
    }
  });
}
le(
  gd,
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
function hd(e, t) {
  fe(t, !0);
  let n = m(t, "children", 7), r = /* @__PURE__ */ Pe(Wc({ props: {}, nodes: [], edges: [] }));
  Lr(wi, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (s) => {
      J(r, s);
    }
  }), Pi(() => {
    c(r).reset();
  });
  var o = Ve(), i = de(o);
  return rt(i, () => n() ?? gt), D(e, o), pe({
    get children() {
      return n();
    },
    set children(s) {
      n(s), v();
    }
  });
}
le(hd, { children: {} }, [], [], !0);
var Hm = /* @__PURE__ */ te("<button><!></button>");
function eo(e, t) {
  fe(t, !0);
  let n = m(t, "class", 7), r = m(t, "bgColor", 7), o = m(t, "bgColorHover", 7), i = m(t, "color", 7), s = m(t, "colorHover", 7), a = m(t, "borderColor", 7), l = m(t, "onclick", 7), u = m(t, "children", 7), d = /* @__PURE__ */ Be(t, [
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
  var p = Hm();
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
  var f = q(p);
  return rt(f, () => u() ?? gt), I(p), D(e, p), pe({
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
var Am = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function vd(e) {
  var t = Am();
  D(e, t);
}
le(vd, {}, [], [], !0);
var Im = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function md(e) {
  var t = Im();
  D(e, t);
}
le(md, {}, [], [], !0);
var Rm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function yd(e) {
  var t = Rm();
  D(e, t);
}
le(yd, {}, [], [], !0);
var qm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function wd(e) {
  var t = qm();
  D(e, t);
}
le(wd, {}, [], [], !0);
var Zm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function bd(e) {
  var t = Zm();
  D(e, t);
}
le(bd, {}, [], [], !0);
var Bm = /* @__PURE__ */ te("<!> <!>", 1), Km = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function xd(e, t) {
  fe(t, !0);
  let n = m(t, "position", 7, "bottom-left"), r = m(t, "orientation", 7, "vertical"), o = m(t, "showZoom", 7, !0), i = m(t, "showFitView", 7, !0), s = m(t, "showLock", 7, !0), a = m(t, "style", 7), l = m(t, "class", 7), u = m(t, "buttonBgColor", 7), d = m(t, "buttonBgColorHover", 7), p = m(t, "buttonColor", 7), f = m(t, "buttonColorHover", 7), g = m(t, "buttonBorderColor", 7), h = m(t, "fitViewOptions", 7), y = m(t, "children", 7), C = m(t, "before", 7), w = m(t, "after", 7), E = /* @__PURE__ */ Be(t, [
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
  let _ = /* @__PURE__ */ S(() => c(x).nodesDraggable || c(x).nodesConnectable || c(x).elementsSelectable), M = /* @__PURE__ */ S(() => c(x).viewport.zoom <= c(x).minZoom), V = /* @__PURE__ */ S(() => c(x).viewport.zoom >= c(x).maxZoom), Z = /* @__PURE__ */ S(() => c(x).ariaLabelConfig), U = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    c(x).zoomIn();
  }, N = () => {
    c(x).zoomOut();
  }, k = () => {
    c(x).fitView(h());
  }, L = () => {
    let P = !c(_);
    c(x).nodesDraggable = P, c(x).nodesConnectable = P, c(x).elementsSelectable = P;
  }, b = /* @__PURE__ */ S(() => [
    "svelte-flow__controls",
    c(U),
    l()
  ]);
  return Mo(e, je(
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
    () => E,
    {
      children: (P, T) => {
        var A = Km(), R = de(A);
        {
          var O = (ge) => {
            var ae = Ve(), oe = de(ae);
            rt(oe, C), D(ge, ae);
          };
          ue(R, (ge) => {
            C() && ge(O);
          });
        }
        var B = H(R, 2);
        {
          var G = (ge) => {
            var ae = Bm(), oe = de(ae);
            eo(oe, je(
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
                  return c(V);
                }
              },
              () => $,
              {
                children: (ie, ve) => {
                  vd(ie);
                },
                $$slots: { default: !0 }
              }
            ));
            var ce = H(oe, 2);
            eo(ce, je(
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
                  return c(M);
                }
              },
              () => $,
              {
                children: (ie, ve) => {
                  md(ie);
                },
                $$slots: { default: !0 }
              }
            )), D(ge, ae);
          };
          ue(B, (ge) => {
            o() && ge(G);
          });
        }
        var Q = H(B, 2);
        {
          var re = (ge) => {
            eo(ge, je(
              {
                class: "svelte-flow__controls-fitview",
                onclick: k,
                get title() {
                  return c(Z)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.fitView.ariaLabel"];
                }
              },
              () => $,
              {
                children: (ae, oe) => {
                  yd(ae);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ue(Q, (ge) => {
            i() && ge(re);
          });
        }
        var X = H(Q, 2);
        {
          var W = (ge) => {
            eo(ge, je(
              {
                class: "svelte-flow__controls-interactive",
                onclick: L,
                get title() {
                  return c(Z)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return c(Z)["controls.interactive.ariaLabel"];
                }
              },
              () => $,
              {
                children: (ae, oe) => {
                  var ce = Ve(), ie = de(ce);
                  {
                    var ve = (_e) => {
                      bd(_e);
                    }, se = (_e) => {
                      wd(_e);
                    };
                    ue(ie, (_e) => {
                      c(_) ? _e(ve) : _e(se, !1);
                    });
                  }
                  D(ae, ce);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          ue(X, (ge) => {
            s() && ge(W);
          });
        }
        var Y = H(X, 2);
        {
          var ee = (ge) => {
            var ae = Ve(), oe = de(ae);
            rt(oe, y), D(ge, ae);
          };
          ue(Y, (ge) => {
            y() && ge(ee);
          });
        }
        var F = H(Y, 2);
        {
          var ye = (ge) => {
            var ae = Ve(), oe = de(ae);
            rt(oe, w), D(ge, ae);
          };
          ue(F, (ge) => {
            w() && ge(ye);
          });
        }
        D(P, A);
      },
      $$slots: { default: !0 }
    }
  )), pe({
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), v();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), v();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), v();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), v();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), v();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), v();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), v();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(P) {
      u(P), v();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), v();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(P) {
      p(P), v();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), v();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(P) {
      g(P), v();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(P) {
      h(P), v();
    },
    get children() {
      return y();
    },
    set children(P) {
      y(P), v();
    },
    get before() {
      return C();
    },
    set before(P) {
      C(P), v();
    },
    get after() {
      return w();
    },
    set after(P) {
      w(P), v();
    }
  });
}
le(
  xd,
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
function $d(e, t) {
  fe(t, !0);
  let n = m(t, "radius", 7), r = m(t, "class", 7);
  var o = jm();
  return Se(() => {
    $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), Ot(o, 0, zn(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, o), pe({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), v();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), v();
    }
  });
}
le($d, { radius: {}, class: {} }, [], [], !0);
var Ym = /* @__PURE__ */ we("<path></path>");
function Cd(e, t) {
  fe(t, !0);
  let n = m(t, "lineWidth", 7), r = m(t, "dimensions", 7), o = m(t, "variant", 7), i = m(t, "class", 7);
  var s = Ym();
  return Se(() => {
    $e(s, "stroke-width", n()), $e(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Ot(s, 0, zn(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, s), pe({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), v();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), v();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), v();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), v();
    }
  });
}
le(Cd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Fm = {
  [_n.Dots]: 1,
  [_n.Lines]: 1,
  [_n.Cross]: 6
};
var Xm = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function kd(e, t) {
  fe(t, !0);
  let n = m(t, "id", 7), r = m(t, "variant", 23, () => _n.Dots), o = m(t, "gap", 7, 20), i = m(t, "size", 7), s = m(t, "lineWidth", 7, 1), a = m(t, "bgColor", 7), l = m(t, "patternColor", 7), u = m(t, "patternClass", 7), d = m(t, "class", 7), p = /* @__PURE__ */ S(Qt), f = /* @__PURE__ */ S(() => r() === _n.Dots), g = /* @__PURE__ */ S(() => r() === _n.Cross), h = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), y = /* @__PURE__ */ S(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), C = /* @__PURE__ */ S(() => [
    c(h)[0] * c(p).viewport.zoom || 1,
    c(h)[1] * c(p).viewport.zoom || 1
  ]), w = /* @__PURE__ */ S(() => (i() ?? Fm[r()]) * c(p).viewport.zoom), E = /* @__PURE__ */ S(() => c(g) ? [c(w), c(w)] : c(C)), x = /* @__PURE__ */ S(() => c(f) ? [c(w) / 2, c(w) / 2] : [
    c(E)[0] / 2,
    c(E)[1] / 2
  ]);
  var $ = Xm();
  let _;
  var M = q($), V = q(M);
  {
    var Z = (N) => {
      const k = /* @__PURE__ */ S(() => c(w) / 2);
      $d(N, {
        get radius() {
          return c(k);
        },
        get class() {
          return u();
        }
      });
    }, U = (N) => {
      Cd(N, {
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
    ue(V, (N) => {
      c(f) ? N(Z) : N(U, !1);
    });
  }
  I(M);
  var j = H(M);
  return I($), Se(
    (N) => {
      Ot($, 0, zn([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), _ = Ct($, "", _, N), $e(M, "id", c(y)), $e(M, "x", c(p).viewport.x % c(C)[0]), $e(M, "y", c(p).viewport.y % c(C)[1]), $e(M, "width", c(C)[0]), $e(M, "height", c(C)[1]), $e(M, "patternTransform", `translate(-${c(x)[0]},-${c(x)[1]})`), $e(j, "fill", `url(#${c(y)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), D(e, $), pe({
    get id() {
      return n();
    },
    set id(N) {
      n(N), v();
    },
    get variant() {
      return r();
    },
    set variant(N = _n.Dots) {
      r(N), v();
    },
    get gap() {
      return o();
    },
    set gap(N = 20) {
      o(N), v();
    },
    get size() {
      return i();
    },
    set size(N) {
      i(N), v();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(N = 1) {
      s(N), v();
    },
    get bgColor() {
      return a();
    },
    set bgColor(N) {
      a(N), v();
    },
    get patternColor() {
      return l();
    },
    set patternColor(N) {
      l(N), v();
    },
    get patternClass() {
      return u();
    },
    set patternClass(N) {
      u(N), v();
    },
    get class() {
      return d();
    },
    set class(N) {
      d(N), v();
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
var Wm = /* @__PURE__ */ we("<rect></rect>");
function _d(e, t) {
  fe(t, !0);
  let n = m(t, "x", 7), r = m(t, "y", 7), o = m(t, "width", 7), i = m(t, "height", 7), s = m(t, "borderRadius", 7, 5), a = m(t, "color", 7), l = m(t, "shapeRendering", 7), u = m(t, "strokeColor", 7), d = m(t, "strokeWidth", 7, 2), p = m(t, "selected", 7), f = m(t, "class", 7);
  var g = Wm();
  let h, y;
  return Se(
    (C, w) => {
      h = Ot(g, 0, zn(["svelte-flow__minimap-node", f()]), null, h, C), $e(g, "x", n()), $e(g, "y", r()), $e(g, "rx", s()), $e(g, "ry", s()), $e(g, "width", o()), $e(g, "height", i()), $e(g, "shape-rendering", l()), y = Ct(g, "", y, w);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: u(),
        "stroke-width": d()
      })
    ]
  ), D(e, g), pe({
    get x() {
      return n();
    },
    set x(C) {
      n(C), v();
    },
    get y() {
      return r();
    },
    set y(C) {
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
    get borderRadius() {
      return s();
    },
    set borderRadius(C = 5) {
      s(C), v();
    },
    get color() {
      return a();
    },
    set color(C) {
      a(C), v();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(C) {
      l(C), v();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(C) {
      u(C), v();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(C = 2) {
      d(C), v();
    },
    get selected() {
      return p();
    },
    set selected(C) {
      p(C), v();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), v();
    }
  });
}
le(
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
function Jm(e, t) {
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
var Gm = /* @__PURE__ */ we("<title> </title>"), Um = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Qm = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function Sd(e, t) {
  fe(t, !0);
  let n = m(t, "position", 7, "bottom-right"), r = m(t, "ariaLabel", 7), o = m(t, "nodeStrokeColor", 7, "transparent"), i = m(t, "nodeColor", 7), s = m(t, "nodeClass", 7, ""), a = m(t, "nodeBorderRadius", 7, 5), l = m(t, "nodeStrokeWidth", 7, 2), u = m(t, "bgColor", 7), d = m(t, "maskColor", 7), p = m(t, "maskStrokeColor", 7), f = m(t, "maskStrokeWidth", 7), g = m(t, "width", 7, 200), h = m(t, "height", 7, 150), y = m(t, "pannable", 7, !0), C = m(t, "zoomable", 7, !0), w = m(t, "inversePan", 7), E = m(t, "zoomStep", 7), x = m(t, "class", 7), $ = /* @__PURE__ */ Be(t, [
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
  ]), _ = /* @__PURE__ */ S(Qt), M = /* @__PURE__ */ S(() => c(_).ariaLabelConfig);
  const V = i() === void 0 ? void 0 : ns(i()), Z = ns(o()), U = ns(s()), j = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let N = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${c(_).flowId}`), k = /* @__PURE__ */ S(() => ({
    x: -c(_).viewport.x / c(_).viewport.zoom,
    y: -c(_).viewport.y / c(_).viewport.zoom,
    width: c(_).width / c(_).viewport.zoom,
    height: c(_).height / c(_).viewport.zoom
  })), L = /* @__PURE__ */ S(() => c(_).nodeLookup.size > 0 ? xc(Oo(c(_).nodeLookup, { filter: (F) => !F.hidden }), c(k)) : c(k)), b = /* @__PURE__ */ S(() => c(L).width / g()), P = /* @__PURE__ */ S(() => c(L).height / h()), T = /* @__PURE__ */ S(() => Math.max(c(b), c(P))), A = /* @__PURE__ */ S(() => c(T) * g()), R = /* @__PURE__ */ S(() => c(T) * h()), O = /* @__PURE__ */ S(() => 5 * c(T)), B = /* @__PURE__ */ S(() => c(L).x - (c(A) - c(L).width) / 2 - c(O)), G = /* @__PURE__ */ S(() => c(L).y - (c(R) - c(L).height) / 2 - c(O)), Q = /* @__PURE__ */ S(() => c(A) + c(O) * 2), re = /* @__PURE__ */ S(() => c(R) + c(O) * 2);
  const X = () => c(T);
  var W = Qm(), Y = de(W);
  const ee = /* @__PURE__ */ S(() => ["svelte-flow__minimap", x()]);
  return Zp(Y, () => ({ "--xy-minimap-background-color-props": u() })), Mo(Y.lastChild, je(
    {
      get position() {
        return n();
      },
      get class() {
        return c(ee);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => $,
    {
      children: (F, ye) => {
        var ge = Ve(), ae = de(ge);
        {
          var oe = (ce) => {
            var ie = Um();
            let ve;
            var se = q(ie);
            {
              var _e = (He) => {
                var Re = Gm(), et = q(Re, !0);
                I(Re), Se(() => {
                  $e(Re, "id", c(N)), Ke(et, r() ?? c(M)["minimap.ariaLabel"]);
                }), D(He, Re);
              };
              ue(se, (He) => {
                (r() ?? c(M)["minimap.ariaLabel"]) && He(_e);
              });
            }
            var K = H(se);
            wt(K, 17, () => c(_).nodes, (He) => He.id, (He, Re) => {
              var et = Ve();
              const Ye = /* @__PURE__ */ S(() => c(_).nodeLookup.get(c(Re).id));
              var Fe = de(et);
              {
                var Rt = (Ie) => {
                  const ct = /* @__PURE__ */ S(() => er(c(Ye))), me = /* @__PURE__ */ S(() => V?.(c(Ye))), Xe = /* @__PURE__ */ S(() => Z(c(Ye))), dt = /* @__PURE__ */ S(() => U(c(Ye)));
                  _d(Ie, je(
                    {
                      get x() {
                        return c(Ye).internals.positionAbsolute.x;
                      },
                      get y() {
                        return c(Ye).internals.positionAbsolute.y;
                      }
                    },
                    () => c(ct),
                    {
                      get selected() {
                        return c(Ye).selected;
                      },
                      get color() {
                        return c(me);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return c(Xe);
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
                ue(Fe, (Ie) => {
                  c(Ye) && $c(c(Ye)) && Ie(Rt);
                });
              }
              D(He, et);
            });
            var Ue = H(K);
            I(ie), mt(ie, (He, Re) => Jm?.(He, Re), () => ({
              store: c(_),
              panZoom: c(_).panZoom,
              getViewScale: X,
              translateExtent: c(_).translateExtent,
              width: c(_).width,
              height: c(_).height,
              inversePan: w(),
              zoomStep: E(),
              pannable: y(),
              zoomable: C()
            })), Se(
              (He) => {
                $e(ie, "width", g()), $e(ie, "height", h()), $e(ie, "viewBox", `${c(B) ?? ""} ${c(G) ?? ""} ${c(Q) ?? ""} ${c(re) ?? ""}`), $e(ie, "aria-labelledby", c(N)), ve = Ct(ie, "", ve, He), $e(Ue, "d", `M${c(B) - c(O)},${c(G) - c(O)}h${c(Q) + c(O) * 2}v${c(re) + c(O) * 2}h${-c(Q) - c(O) * 2}z
      M${c(k).x ?? ""},${c(k).y ?? ""}h${c(k).width ?? ""}v${c(k).height ?? ""}h${-c(k).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * c(T) : void 0
                })
              ]
            ), D(ce, ie);
          };
          ue(ae, (ce) => {
            c(_).panZoom && ce(oe);
          });
        }
        D(F, ge);
      },
      $$slots: { default: !0 }
    }
  )), I(Y), D(e, W), pe({
    get position() {
      return n();
    },
    set position(F = "bottom-right") {
      n(F), v();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(F) {
      r(F), v();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(F = "transparent") {
      o(F), v();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(F) {
      i(F), v();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(F = "") {
      s(F), v();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(F = 5) {
      a(F), v();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(F = 2) {
      l(F), v();
    },
    get bgColor() {
      return u();
    },
    set bgColor(F) {
      u(F), v();
    },
    get maskColor() {
      return d();
    },
    set maskColor(F) {
      d(F), v();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(F) {
      p(F), v();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(F) {
      f(F), v();
    },
    get width() {
      return g();
    },
    set width(F = 200) {
      g(F), v();
    },
    get height() {
      return h();
    },
    set height(F = 150) {
      h(F), v();
    },
    get pannable() {
      return y();
    },
    set pannable(F = !0) {
      y(F), v();
    },
    get zoomable() {
      return C();
    },
    set zoomable(F = !0) {
      C(F), v();
    },
    get inversePan() {
      return w();
    },
    set inversePan(F) {
      w(F), v();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(F) {
      E(F), v();
    },
    get class() {
      return x();
    },
    set class(F) {
      x(F), v();
    }
  });
}
le(
  Sd,
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
var e2 = /* @__PURE__ */ te("<div><!></div>");
function Ed(e, t) {
  fe(t, !0);
  let n = m(t, "nodeId", 7), r = m(t, "position", 23, () => xe.Top), o = m(t, "align", 7, "center"), i = m(t, "offset", 7, 10), s = m(t, "isVisible", 7), a = m(t, "children", 7), l = /* @__PURE__ */ Be(t, [
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
  const u = Qt(), { getNodesBounds: d } = ht(), p = jn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    ($, _) => {
      const M = u.nodeLookup.get(_);
      return M && $.push(M), $;
    },
    []
  ))), g = /* @__PURE__ */ S(() => {
    const $ = d(c(f));
    return $ ? g0($, u.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ S(() => c(f).length === 0 ? 1 : Math.max(...c(f).map(($) => ($.internals.z || 5) + 1))), y = /* @__PURE__ */ S(() => u.nodes.filter(($) => $.selected).length), C = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(y) === 1);
  var w = Ve(), E = de(w);
  {
    var x = ($) => {
      var _ = e2();
      ut(
        _,
        (V, Z) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": V,
          ...l,
          [on]: Z
        }),
        [
          () => c(f).reduce((V, Z) => `${V}${Z.id} `, "").trim(),
          () => ({
            display: Zc().value ? "none" : void 0,
            position: "absolute",
            transform: c(g),
            "z-index": c(h)
          })
        ]
      );
      var M = q(_);
      rt(M, () => a() ?? gt), I(_), mt(_, (V, Z) => qc?.(V, Z), () => "root"), D($, _);
    };
    ue(E, ($) => {
      u.domNode && c(C) && c(f) && $(x);
    });
  }
  return D(e, w), pe({
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), v();
    },
    get position() {
      return r();
    },
    set position($ = xe.Top) {
      r($), v();
    },
    get align() {
      return o();
    },
    set align($ = "center") {
      o($), v();
    },
    get offset() {
      return i();
    },
    set offset($ = 10) {
      i($), v();
    },
    get isVisible() {
      return s();
    },
    set isVisible($) {
      s($), v();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), v();
    }
  });
}
le(
  Ed,
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
function Hn(e) {
  const t = /* @__PURE__ */ S(Qt), n = /* @__PURE__ */ S(() => c(t).nodes), r = /* @__PURE__ */ S(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!k0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Vl = "tinyflow-component", t2 = [
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
], n2 = [
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
], wa = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], r2 = [
  { label: "当行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], o2 = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class i2 {
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
const s2 = () => {
  let e = /* @__PURE__ */ Pe([]), t = /* @__PURE__ */ Pe([]), n = /* @__PURE__ */ Pe({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      J(e, r), J(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      J(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      J(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      J(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      J(e, [...c(e), r]);
    },
    removeNode: (r) => {
      J(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      J(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      J(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      J(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      J(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      J(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      J(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      J(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      J(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      J(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ge = s2();
var a2 = /* @__PURE__ */ te("<button><!></button>");
function Oe(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "primary", 7), o = /* @__PURE__ */ Be(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = a2();
  ut(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = q(i);
  return rt(s, () => n() ?? gt), I(i), D(e, i), pe({
    get children() {
      return n();
    },
    set children(a) {
      n(a), v();
    },
    get primary() {
      return r();
    },
    set primary(a) {
      r(a), v();
    }
  });
}
le(Oe, { children: {}, primary: {} }, [], [], !0);
var l2 = /* @__PURE__ */ te("<input/>");
function Pd(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = l2();
  ln(r), ut(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), D(e, r), pe();
}
le(Pd, {}, [], [], !0);
var u2 = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const c2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Td(e, t) {
  fe(t, !0), Ae(e, c2);
  const n = m(t, "placeholder", 7), r = m(t, "label", 7), o = m(t, "value", 7), i = m(t, "buttonText", 7, "选择..."), s = m(t, "onChosen", 7), a = /* @__PURE__ */ Be(t, [
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
  var l = u2();
  ut(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var u = q(l);
  ln(u);
  var d = H(u, 2);
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
  var p = H(d, 2);
  return Oe(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      be();
      var h = Ee();
      Se(() => Ke(h, i())), D(f, h);
    },
    $$slots: { default: !0 }
  }), I(l), Se(() => Wo(u, o())), D(e, l), pe({
    get placeholder() {
      return n();
    },
    set placeholder(f) {
      n(f), v();
    },
    get label() {
      return r();
    },
    set label(f) {
      r(f), v();
    },
    get value() {
      return o();
    },
    set value(f) {
      o(f), v();
    },
    get buttonText() {
      return i();
    },
    set buttonText(f = "选择...") {
      i(f), v();
    },
    get onChosen() {
      return s();
    },
    set onChosen(f) {
      s(f), v();
    }
  });
}
le(
  Td,
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
var d2 = /* @__PURE__ */ te("<input/>");
function st(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = d2();
  ln(r), ut(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), D(e, r), pe();
}
le(st, {}, [], [], !0);
var f2 = /* @__PURE__ */ te("<textarea></textarea>");
function We(e, t) {
  fe(t, !0);
  const n = m(t, "value", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = f2();
  return Sp(o), ut(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), D(e, o), pe({
    get value() {
      return n();
    },
    set value(i) {
      n(i), v();
    }
  });
}
le(We, { value: {} }, [], [], !0);
var p2 = /* @__PURE__ */ te('<div role="button"><!></div>'), g2 = /* @__PURE__ */ te("<div></div>");
function Ld(e, t) {
  const n = Ja(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Ja(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = m(t, "items", 28, () => []), i = m(t, "onChange", 12, () => {
  }), s = m(t, "activeIndex", 12, 0);
  function a(u, d) {
    s(d), i()?.(u, d);
  }
  Au();
  var l = g2();
  return ut(l, () => ({
    ...r,
    class: `tf-tabs ${Js(r), ft(() => r.class) ?? ""}`
  })), wt(l, 5, o, Nr, (u, d, p) => {
    var f = p2();
    $e(f, "tabindex", p), f.__click = () => a(c(d), p), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(c(d), p));
    };
    var g = q(f);
    {
      var h = (C) => {
        var w = Ee();
        Se(() => Ke(w, (c(d), ft(() => c(d).label)))), D(C, w);
      }, y = (C) => {
        var w = Ve(), E = de(w);
        rt(E, () => (c(d), ft(() => c(d).label) ?? gt)), D(C, w);
      };
      ue(g, (C) => {
        c(d), ft(() => typeof c(d).label == "string") ? C(h) : C(y, !1);
      });
    }
    I(f), Se(() => Ot(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), D(u, f);
  }), I(l), D(e, l), pe({
    get items() {
      return o();
    },
    set items(u) {
      o(u), v();
    },
    get onChange() {
      return i();
    },
    set onChange(u) {
      i(u), v();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(u) {
      s(u), v();
    }
  });
}
Vn(["click", "keydown"]);
le(Ld, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var h2 = (e, t, n) => t(c(n)), v2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(c(n)));
}, m2 = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), y2 = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), w2 = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), b2 = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), x2 = /* @__PURE__ */ te("<div></div>");
const $2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Od(e, t) {
  fe(t, !0), Ae(e, $2);
  let n = m(t, "items", 7), r = m(t, "onChange", 7), o = m(t, "activeKeys", 31, () => jt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = x2();
  return wt(s, 21, n, Nr, (a, l, u) => {
    var d = b2(), p = q(d);
    $e(p, "tabindex", u), p.__click = [h2, i, l], p.__keydown = [v2, i, l];
    var f = q(p);
    {
      var g = ($) => {
        var _ = m2(), M = q(_);
        Bn(M, {
          get target() {
            return c(l).icon;
          }
        }), I(_), D($, _);
      };
      ue(f, ($) => {
        c(l).icon && $(g);
      });
    }
    var h = H(f, 2);
    Bn(h, {
      get target() {
        return c(l).title;
      }
    });
    var y = H(h, 2);
    I(p);
    var C = H(p, 2);
    {
      var w = ($) => {
        var _ = y2(), M = q(_);
        Bn(M, {
          get target() {
            return c(l).description;
          }
        }), I(_), D($, _);
      };
      ue(C, ($) => {
        c(l).description && $(w);
      });
    }
    var E = H(C, 2);
    {
      var x = ($) => {
        var _ = w2(), M = q(_);
        Bn(M, {
          get target() {
            return c(l).content;
          }
        }), I(_), D($, _);
      };
      ue(E, ($) => {
        o().includes(c(l).key) && $(x);
      });
    }
    I(d), Se(($) => Ot(y, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(c(l).key) ? "rotate-90" : ""
    ]), D(a, d);
  }), I(s), Se(() => {
    Ct(s, t.style), Ot(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), D(e, s), pe({
    get items() {
      return n();
    },
    set items(a) {
      n(a), v();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), v();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), v();
    }
  });
}
Vn(["click", "keydown"]);
le(Od, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Bn(e, t) {
  fe(t, !0);
  let n = m(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ve(), o = de(r);
  {
    var i = (a) => {
      var l = Ve(), u = de(l);
      rt(u, () => n() ?? gt), D(a, l);
    }, s = (a) => {
      var l = Ve(), u = de(l);
      Qs(u, n), D(a, l);
    };
    ue(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return D(e, r), pe({
    get target() {
      return n();
    },
    set target(a) {
      n(a), v();
    }
  });
}
le(Bn, { target: {} }, [], [], !0);
var C2 = (e, t, n) => t(c(n)), k2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), _2 = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), S2 = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), E2 = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag"><!></div>'), P2 = /* @__PURE__ */ te("<!> <!>", 1), T2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), L2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), O2 = /* @__PURE__ */ te("<div><!></div>");
function pt(e, t) {
  fe(t, !0);
  const n = (w, E = gt) => {
    var x = Ve(), $ = de(x);
    wt($, 19, E, (_, M) => `${M}_${_.value}`, (_, M) => {
      var V = S2(), Z = de(V);
      Z.__click = [C2, h, M];
      var U = q(Z), j = q(U);
      {
        var N = (P) => {
          var T = k2();
          D(P, T);
        };
        ue(j, (P) => {
          c(M).children && c(M).children.length > 0 && P(N);
        });
      }
      I(U);
      var k = H(U, 2);
      Bn(k, {
        get target() {
          return c(M).label;
        }
      }), I(Z);
      var L = H(Z, 2);
      {
        var b = (P) => {
          var T = _2(), A = q(T);
          n(A, () => c(M).children), I(T), D(P, T);
        };
        ue(L, (P) => {
          c(M).children && c(M).children.length > 0 && (a() || u().includes(c(M).value)) && P(b);
        });
      }
      D(_, V);
    }), D(w, x);
  };
  let r = m(t, "items", 7), o = m(t, "onSelect", 7), i = m(t, "value", 23, () => []), s = m(t, "defaultValue", 23, () => []), a = m(t, "expandAll", 7, !0), l = m(t, "multiple", 7, !1), u = m(t, "expandValue", 23, () => []), d = m(t, "placeholder", 7), p = /* @__PURE__ */ Be(t, [
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
    const w = [], E = (x) => {
      for (let $ of x)
        i().length > 0 ? i().includes($.value) && w.push($) : s().includes($.value) && w.push($), $.children && $.children.length > 0 && E($.children);
    };
    return E(r()), w;
  }), g;
  function h(w) {
    g?.hide(), o()?.(w);
  }
  var y = O2();
  ut(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var C = q(y);
  return At(
    mr(C, {
      floating: (w) => {
        var E = E2(), x = q(E);
        n(x, r), I(E), D(w, E);
      },
      children: (w, E) => {
        var x = L2();
        ut(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var $ = q(x);
        wt(
          $,
          23,
          () => c(f),
          (_, M) => `${M}_${_.value}`,
          (_, M, V) => {
            var Z = Ve(), U = de(Z);
            {
              var j = (k) => {
                var L = Ve(), b = de(L);
                {
                  var P = (T) => {
                    Bn(T, {
                      get target() {
                        return c(M).label;
                      }
                    });
                  };
                  ue(b, (T) => {
                    c(V) === 0 && T(P);
                  });
                }
                D(k, L);
              }, N = (k) => {
                var L = P2(), b = de(L);
                Bn(b, {
                  get target() {
                    return c(M).label;
                  }
                });
                var P = H(b, 2);
                {
                  var T = (A) => {
                    var R = Ee(",");
                    D(A, R);
                  };
                  ue(P, (A) => {
                    c(V) < c(f).length - 1 && A(T);
                  });
                }
                D(k, L);
              };
              ue(U, (k) => {
                l() ? k(N, !1) : k(j);
              });
            }
            D(_, Z);
          },
          (_) => {
            var M = T2(), V = q(M, !0);
            I(M), Se(() => Ke(V, d())), D(_, M);
          }
        ), I($), be(2), I(x), D(w, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), I(y), D(e, y), pe({
    get items() {
      return r();
    },
    set items(w) {
      r(w), v();
    },
    get onSelect() {
      return o();
    },
    set onSelect(w) {
      o(w), v();
    },
    get value() {
      return i();
    },
    set value(w = []) {
      i(w), v();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(w = []) {
      s(w), v();
    },
    get expandAll() {
      return a();
    },
    set expandAll(w = !0) {
      a(w), v();
    },
    get multiple() {
      return l();
    },
    set multiple(w = !1) {
      l(w), v();
    },
    get expandValue() {
      return u();
    },
    set expandValue(w = []) {
      u(w), v();
    },
    get placeholder() {
      return d();
    },
    set placeholder(w) {
      d(w), v();
    }
  });
}
Vn(["click"]);
le(
  pt,
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
}), N2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, D2 = {
  start: "end",
  end: "start"
};
function Ss(e, t, n) {
  return Er(e, yo(t, n));
}
function Vo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pr(e) {
  return e.split("-")[0];
}
function zo(e) {
  return e.split("-")[1];
}
function Nd(e) {
  return e === "x" ? "y" : "x";
}
function ba(e) {
  return e === "y" ? "height" : "width";
}
const M2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Kn(e) {
  return M2.has(pr(e)) ? "y" : "x";
}
function xa(e) {
  return Nd(Kn(e));
}
function V2(e, t, n) {
  n === void 0 && (n = !1);
  const r = zo(e), o = xa(e), i = ba(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = xi(s)), [s, xi(s)];
}
function z2(e) {
  const t = xi(e);
  return [Es(e), t, Es(t)];
}
function Es(e) {
  return e.replace(/start|end/g, (t) => D2[t]);
}
const zl = ["left", "right"], Hl = ["right", "left"], H2 = ["top", "bottom"], A2 = ["bottom", "top"];
function I2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Hl : zl : t ? zl : Hl;
    case "left":
    case "right":
      return t ? H2 : A2;
    default:
      return [];
  }
}
function R2(e, t, n, r) {
  const o = zo(e);
  let i = I2(pr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Es)))), i;
}
function xi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => N2[t]);
}
function q2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dd(e) {
  return typeof e != "number" ? q2(e) : {
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
  const i = Kn(t), s = xa(t), a = ba(s), l = pr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const Z2 = async (e, t, n) => {
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
  for (let y = 0; y < a.length; y++) {
    const {
      name: C,
      fn: w
    } = a[y], {
      x: E,
      y: x,
      data: $,
      reset: _
    } = await w({
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
    }, _ && h <= 50 && (h++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (u = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : _.rects), {
      x: d,
      y: p
    } = Al(u, f, l)), y = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Md(e, t) {
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
  } = Vo(t, e), h = Dd(g), y = a[f ? p === "floating" ? "reference" : "floating" : p], C = $i(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(y))) == null || n ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
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
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (C.top - $.top + h.top) / x.y,
    bottom: ($.bottom - C.bottom + h.bottom) / x.y,
    left: (C.left - $.left + h.left) / x.x,
    right: ($.right - C.right + h.right) / x.x
  };
}
const B2 = (e) => ({
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
    } = Vo(e, t) || {};
    if (u == null)
      return {};
    const p = Dd(d), f = {
      x: n,
      y: r
    }, g = xa(o), h = ba(g), y = await s.getDimensions(u), C = g === "y", w = C ? "top" : "left", E = C ? "bottom" : "right", x = C ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[g] - f[g] - i.floating[h], _ = f[g] - i.reference[g], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let V = M ? M[x] : 0;
    (!V || !await (s.isElement == null ? void 0 : s.isElement(M))) && (V = a.floating[x] || i.floating[h]);
    const Z = $ / 2 - _ / 2, U = V / 2 - y[h] / 2 - 1, j = yo(p[w], U), N = yo(p[E], U), k = j, L = V - y[h] - N, b = V / 2 - y[h] / 2 + Z, P = Ss(k, b, L), T = !l.arrow && zo(o) != null && b !== P && i.reference[h] / 2 - (b < k ? j : N) - y[h] / 2 < 0, A = T ? b < k ? b - k : b - L : 0;
    return {
      [g]: f[g] + A,
      data: {
        [g]: P,
        centerOffset: b - P - A,
        ...T && {
          alignmentOffset: A
        }
      },
      reset: T
    };
  }
}), K2 = function(e) {
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
        flipAlignment: y = !0,
        ...C
      } = Vo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = pr(o), E = Kn(a), x = pr(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), _ = f || (x || !y ? [xi(a)] : z2(a)), M = h !== "none";
      !f && M && _.push(...R2(a, y, h, $));
      const V = [a, ..._], Z = await Md(t, C), U = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && U.push(Z[w]), p) {
        const b = V2(o, s, $);
        U.push(Z[b[0]], Z[b[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: U
      }], !U.every((b) => b <= 0)) {
        var N, k;
        const b = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, P = V[b];
        if (P && (!(p === "alignment" && E !== Kn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((A) => A.overflows[0] > 0 && Kn(A.placement) === E)))
          return {
            data: {
              index: b,
              overflows: j
            },
            reset: {
              placement: P
            }
          };
        let T = (k = j.filter((A) => A.overflows[0] <= 0).sort((A, R) => A.overflows[1] - R.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var L;
              const A = (L = j.filter((R) => {
                if (M) {
                  const O = Kn(R.placement);
                  return O === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((O) => O > 0).reduce((O, B) => O + B, 0)]).sort((R, O) => R[1] - O[1])[0]) == null ? void 0 : L[0];
              A && (T = A);
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
}, j2 = /* @__PURE__ */ new Set(["left", "top"]);
async function Y2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pr(n), a = zo(n), l = Kn(n) === "y", u = j2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Vo(t, e);
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
const F2 = function(e) {
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
      } = t, l = await Y2(t, e);
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
}, X2 = function(e) {
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
              x: w,
              y: E
            } = C;
            return {
              x: w,
              y: E
            };
          }
        },
        ...l
      } = Vo(e, t), u = {
        x: n,
        y: r
      }, d = await Md(t, l), p = Kn(pr(o)), f = Nd(p);
      let g = u[f], h = u[p];
      if (i) {
        const C = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", E = g + d[C], x = g - d[w];
        g = Ss(E, g, x);
      }
      if (s) {
        const C = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", E = h + d[C], x = h - d[w];
        h = Ss(E, h, x);
      }
      const y = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
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
function Br(e) {
  return Vd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (Vd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vd(e) {
  return Ii() ? e instanceof Node || e instanceof Vt(e).Node : !1;
}
function Jt(e) {
  return Ii() ? e instanceof Element || e instanceof Vt(e).Element : !1;
}
function hn(e) {
  return Ii() ? e instanceof HTMLElement || e instanceof Vt(e).HTMLElement : !1;
}
function Il(e) {
  return !Ii() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Vt(e).ShadowRoot;
}
const W2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ho(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !W2.has(o);
}
const J2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function G2(e) {
  return J2.has(Br(e));
}
const U2 = [":popover-open", ":modal"];
function Ri(e) {
  return U2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Q2 = ["transform", "translate", "scale", "rotate", "perspective"], ey = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ty = ["paint", "layout", "strict", "content"];
function $a(e) {
  const t = Ca(), n = Jt(e) ? Gt(e) : e;
  return Q2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ey.some((r) => (n.willChange || "").includes(r)) || ty.some((r) => (n.contain || "").includes(r));
}
function ny(e) {
  let t = Jn(e);
  for (; hn(t) && !Ir(t); ) {
    if ($a(t))
      return t;
    if (Ri(t))
      return null;
    t = Jn(t);
  }
  return null;
}
function Ca() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ry = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ir(e) {
  return ry.has(Br(e));
}
function Gt(e) {
  return Vt(e).getComputedStyle(e);
}
function qi(e) {
  return Jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Jn(e) {
  if (Br(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Il(e) && e.host || // Fallback.
    An(e)
  );
  return Il(t) ? t.host : t;
}
function zd(e) {
  const t = Jn(e);
  return Ir(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && Ho(t) ? t : zd(t);
}
function Hd(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = zd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Vt(o);
  return i ? (Ps(s), t.concat(s, s.visualViewport || [], Ho(o) ? o : [], [])) : t.concat(o, Hd(o, []));
}
function Ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ad(e) {
  const t = Gt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = hn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = bi(n) !== i || bi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Id(e) {
  return Jt(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = Id(e);
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
const oy = /* @__PURE__ */ dn(0);
function Rd(e) {
  const t = Vt(e);
  return !Ca() || !t.visualViewport ? oy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function iy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Vt(e) ? !1 : t;
}
function wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Id(e);
  let s = dn(1);
  t && (r ? Jt(r) && (s = Pr(r)) : s = Pr(e));
  const a = iy(i, n, r) ? Rd(i) : dn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Vt(i), g = r && Jt(r) ? Vt(r) : r;
    let h = f, y = Ps(h);
    for (; y && r && g !== h; ) {
      const C = Pr(y), w = y.getBoundingClientRect(), E = Gt(y), x = w.left + (y.clientLeft + parseFloat(E.paddingLeft)) * C.x, $ = w.top + (y.clientTop + parseFloat(E.paddingTop)) * C.y;
      l *= C.x, u *= C.y, d *= C.x, p *= C.y, l += x, u += $, h = Vt(y), y = Ps(h);
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
  const n = qi(e).scrollLeft;
  return t ? t.left + n : wo(An(e)).left + n;
}
function qd(e, t, n) {
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
function sy(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = An(r), a = t ? Ri(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = dn(1);
  const d = dn(0), p = hn(r);
  if ((p || !p && !i) && ((Br(r) !== "body" || Ho(s)) && (l = qi(r)), hn(r))) {
    const g = wo(r);
    u = Pr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? qd(s, l, !0) : dn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function ay(e) {
  return Array.from(e.getClientRects());
}
function ly(e) {
  const t = An(e), n = qi(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ka(e);
  const a = -n.scrollTop;
  return Gt(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function uy(e, t) {
  const n = Vt(e), r = An(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Ca();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const cy = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function dy(e, t) {
  const n = wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = hn(e) ? Pr(e) : dn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Rl(e, t, n) {
  let r;
  if (t === "viewport")
    r = uy(e, n);
  else if (t === "document")
    r = ly(An(e));
  else if (Jt(t))
    r = dy(t, n);
  else {
    const o = Rd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return $i(r);
}
function Zd(e, t) {
  const n = Jn(e);
  return n === t || !Jt(n) || Ir(n) ? !1 : Gt(n).position === "fixed" || Zd(n, t);
}
function fy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Hd(e, []).filter((a) => Jt(a) && Br(a) !== "body"), o = null;
  const i = Gt(e).position === "fixed";
  let s = i ? Jn(e) : e;
  for (; Jt(s) && !Ir(s); ) {
    const a = Gt(s), l = $a(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && cy.has(o.position) || Ho(s) && !l && Zd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Jn(s);
  }
  return t.set(e, r), r;
}
function py(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ri(t) ? [] : fy(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = Rl(t, u, o);
    return l.top = Er(d.top, l.top), l.right = yo(d.right, l.right), l.bottom = yo(d.bottom, l.bottom), l.left = Er(d.left, l.left), l;
  }, Rl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function gy(e) {
  const {
    width: t,
    height: n
  } = Ad(e);
  return {
    width: t,
    height: n
  };
}
function hy(e, t, n) {
  const r = hn(t), o = An(t), i = n === "fixed", s = wo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  function u() {
    l.x = ka(o);
  }
  if (r || !r && !i)
    if ((Br(t) !== "body" || Ho(o)) && (a = qi(t)), r) {
      const g = wo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? qd(o, a) : dn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function rs(e) {
  return Gt(e).position === "static";
}
function ql(e, t) {
  if (!hn(e) || Gt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return An(e) === n && (n = n.ownerDocument.body), n;
}
function Bd(e, t) {
  const n = Vt(e);
  if (Ri(e))
    return n;
  if (!hn(e)) {
    let o = Jn(e);
    for (; o && !Ir(o); ) {
      if (Jt(o) && !rs(o))
        return o;
      o = Jn(o);
    }
    return n;
  }
  let r = ql(e, t);
  for (; r && G2(r) && rs(r); )
    r = ql(r, t);
  return r && Ir(r) && rs(r) && !$a(r) ? n : r || ny(e) || n;
}
const vy = async function(e) {
  const t = this.getOffsetParent || Bd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: hy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function my(e) {
  return Gt(e).direction === "rtl";
}
const yy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sy,
  getDocumentElement: An,
  getClippingRect: py,
  getOffsetParent: Bd,
  getElementRects: vy,
  getClientRects: ay,
  getDimensions: gy,
  getScale: Pr,
  isElement: Jt,
  isRTL: my
}, wy = F2, by = X2, xy = K2, $y = B2, Cy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Z2(e, t, {
    ...o,
    platform: i
  });
}, ky = ({
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
    const w = document.querySelector(e);
    if (w)
      e = w;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const w = document.querySelector(n);
    if (w)
      u = w;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", u.firstElementChild.before(d));
  function p() {
    Cy(e, u, {
      placement: r,
      middleware: [
        wy(o),
        // 手动偏移配置
        xy(i),
        //自动翻转
        by(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [$y({ element: d })] : []
      ]
    }).then(({ x: w, y: E, placement: x, middlewareData: $ }) => {
      if (Object.assign(u.style, {
        left: `${w}px`,
        top: `${E}px`
      }), l) {
        const { x: _, y: M } = $.arrow, V = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: _ != null ? `${_}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [V]: "2px"
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
  function y(w) {
    w.stopPropagation(), f ? h() : g();
  }
  function C(w) {
    u.contains(w.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, y);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, y);
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
var _y = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mr(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "floating", 7), o = m(t, "placement", 7, "bottom");
  let i, s, a;
  Qn(() => (a = ky({
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
  var u = _y(), d = q(u), p = q(d);
  rt(p, n), I(d), At(d, (h) => i = h, () => i);
  var f = H(d, 2), g = q(f);
  return rt(g, r), I(f), At(f, (h) => s = h, () => s), I(u), D(e, u), pe({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), v();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), v();
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), v();
    }
  });
}
le(mr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function De(e, t) {
  fe(t, !0);
  const n = m(t, "children", 7), r = m(t, "level", 7, 1), o = m(t, "mt", 7), i = m(t, "mb", 7);
  var s = Ve(), a = de(s);
  return Yp(a, () => `h${r()}`, !1, (l, u) => {
    ut(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ve(), p = de(d);
    rt(p, () => n() ?? gt), D(u, d);
  }), D(e, s), pe({
    get children() {
      return n();
    },
    set children(l) {
      n(l), v();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), v();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), v();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), v();
    }
  });
}
le(De, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Sy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Ey = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ao(e, t) {
  fe(t, !0), Ae(e, Ey);
  const n = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Oe(e, je(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Sy();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
le(Ao, {}, [], [], !0);
const Py = () => ({ deleteNode: (e) => {
  Ge.removeNode(e), Ge.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), gr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Ty = () => ({ copyNode: (e) => {
  const t = Ge.getNode(e);
  if (t) {
    const n = gr(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ge.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ot = () => jn("svelteflow__node_id"), Gn = () => jn("tinyflow_options");
var Ly = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Oy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Ny = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Dy = /* @__PURE__ */ te('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), My = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Vy = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, zy = /* @__PURE__ */ te('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), Hy = /* @__PURE__ */ te('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Ay = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Iy = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Ry = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const qy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Yt(e, t) {
  fe(t, !0), Ae(e, qy);
  const n = m(t, "data", 7), r = m(t, "id", 7, ""), o = m(t, "icon", 7), i = m(t, "handle", 7), s = m(t, "children", 7), a = m(t, "allowExecute", 7, !0), l = m(t, "allowCopy", 7, !0), u = m(t, "allowDelete", 7, !0), d = m(t, "allowSetting", 7, !0), p = m(t, "allowSettingOfCondition", 7, !0), f = m(t, "showSourceHandle", 7, !0), g = m(t, "showTargetHandle", 7, !0), h = m(t, "onCollapse", 7);
  let y = n().expand ? ["key"] : [];
  const { updateNodeData: C, getNode: w } = ht(), E = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = Py(), { copyNode: $ } = Ty(), _ = Gn(), M = () => {
    _.onNodeExecute?.(w(r()));
  };
  let V = ot();
  var Z = Ry(), U = de(Z);
  {
    var j = (O) => {
      Ed(O, {
        get position() {
          return xe.Top;
        },
        align: "start",
        children: (B, G) => {
          var Q = Iy(), re = q(Q);
          {
            var X = (ae) => {
              Oe(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (oe, ce) => {
                  var ie = Ly();
                  D(oe, ie);
                },
                $$slots: { default: !0 }
              });
            };
            ue(re, (ae) => {
              u() && ae(X);
            });
          }
          var W = H(re, 2);
          {
            var Y = (ae) => {
              Oe(ae, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (oe, ce) => {
                  var ie = Oy();
                  D(oe, ie);
                },
                $$slots: { default: !0 }
              });
            };
            ue(W, (ae) => {
              l() && ae(Y);
            });
          }
          var ee = H(W, 2);
          {
            var F = (ae) => {
              Oe(ae, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (oe, ce) => {
                  var ie = Ny();
                  D(oe, ie);
                },
                $$slots: { default: !0 }
              });
            };
            ue(ee, (ae) => {
              a() && ae(F);
            });
          }
          var ye = H(ee, 2);
          {
            var ge = (ae) => {
              mr(ae, {
                placement: "bottom",
                floating: (oe) => {
                  var ce = Hy(), ie = q(ce), ve = H(q(ie));
                  st(ve, {
                    style: "width: 100%;",
                    onchange: (Ie) => {
                      const ct = Ie.target.value;
                      C(V, { title: ct });
                    },
                    get value() {
                      return n().title;
                    }
                  }), I(ie);
                  var se = H(ie, 2), _e = H(q(se));
                  We(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ie) => {
                      const ct = Ie.target.value;
                      C(V, { description: ct });
                    },
                    get value() {
                      return n().description;
                    }
                  }), I(se);
                  var K = H(se, 2);
                  {
                    var Ue = (Ie) => {
                      var ct = Dy(), me = H(q(ct));
                      We(me, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (Xe) => {
                          const dt = Xe.target.value;
                          C(V, { condition: dt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), I(ct), D(Ie, ct);
                    };
                    ue(K, (Ie) => {
                      p() && Ie(Ue);
                    });
                  }
                  var He = H(K, 2), Re = H(q(He), 2);
                  ln(Re), Re.__change = [My, C, V], I(He);
                  var et = H(He, 2), Ye = H(q(et), 2);
                  ln(Ye), Ye.__change = [Vy, C, V], I(et);
                  var Fe = H(et, 2);
                  {
                    var Rt = (Ie) => {
                      var ct = zy(), me = de(ct), Xe = H(q(me));
                      const dt = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                      We(Xe, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(V, { loopIntervalMs: wn });
                        },
                        get value() {
                          return c(dt);
                        }
                      }), I(me);
                      var Qe = H(me, 2), kt = H(q(Qe));
                      const at = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                      We(kt, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(V, { maxLoopCount: wn });
                        },
                        get value() {
                          return c(at);
                        }
                      }), I(Qe);
                      var qt = H(Qe, 2), Kr = H(q(qt));
                      We(Kr, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(V, { loopBreakCondition: wn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), I(qt), D(Ie, ct);
                    };
                    ue(Fe, (Ie) => {
                      n().loopEnable && Ie(Rt);
                    });
                  }
                  I(ce), Se(() => {
                    gs(Re, !!n().async), gs(Ye, !!n().loopEnable);
                  }), D(oe, ce);
                },
                children: (oe, ce) => {
                  Oe(oe, {
                    class: "tf-node-toolbar-item",
                    children: (ie, ve) => {
                      var se = Ay();
                      D(ie, se);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ue(ye, (ae) => {
              d() && ae(ge);
            });
          }
          I(Q), D(B, Q);
        },
        $$slots: { default: !0 }
      });
    };
    ue(U, (O) => {
      (a() || l() || u()) && O(j);
    });
  }
  var N = H(U, 2), k = H(q(N), 2), L = q(k);
  Od(L, {
    get items() {
      return c(E);
    },
    get activeKeys() {
      return y;
    },
    onChange: (O, B) => {
      C(r(), { expand: B?.includes("key") }), h()?.(B?.includes("key") ? "key" : "");
    }
  }), I(k), I(N);
  var b = H(N, 2);
  {
    var P = (O) => {
      Wn(O, {
        type: "target",
        get position() {
          return xe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(b, (O) => {
      g() && O(P);
    });
  }
  var T = H(b, 2);
  {
    var A = (O) => {
      Wn(O, {
        type: "source",
        get position() {
          return xe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ue(T, (O) => {
      f() && O(A);
    });
  }
  var R = H(T, 2);
  return rt(R, () => i() ?? gt), D(e, Z), pe({
    get data() {
      return n();
    },
    set data(O) {
      n(O), v();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), v();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), v();
    },
    get handle() {
      return i();
    },
    set handle(O) {
      i(O), v();
    },
    get children() {
      return s();
    },
    set children(O) {
      s(O), v();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(O = !0) {
      a(O), v();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), v();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(O = !0) {
      u(O), v();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(O = !0) {
      d(O), v();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(O = !0) {
      p(O), v();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(O = !0) {
      f(O), v();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(O = !0) {
      g(O), v();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(O) {
      h(O), v();
    }
  });
}
Vn(["change"]);
le(
  Yt,
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
var Zy = /* @__PURE__ */ te('<div class="input-more-item svelte-2f9bnc">数据选项： <!></div>'), By = /* @__PURE__ */ te('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">输入方式： <!></div> <!> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), Ky = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), jy = /* @__PURE__ */ te('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const Yy = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Kd(e, t) {
  fe(t, !0), Ae(e, Yy);
  const n = m(t, "parameter", 7), r = m(t, "index", 7);
  let o = ot(), i = Hn(o), s = /* @__PURE__ */ S(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = ht(), l = (V, Z) => {
    a(o, (U) => {
      let j = U.data.parameters;
      return j[r()][V] = Z, { parameters: j };
    });
  }, u = (V, Z) => {
    const U = Z.target.value;
    l(V, U);
  }, d = (V) => {
    const Z = V.target.value;
    l("name", Z);
  }, p = (V) => {
    const Z = V.target.checked;
    l("required", Z);
  }, f = (V) => {
    const Z = V.value;
    l("formType", Z);
  }, g = (V) => {
    const Z = V.value;
    l("contentType", Z);
  };
  let h;
  const y = () => {
    a(o, (V) => {
      let Z = V.data.parameters;
      return Z.splice(r(), 1), { parameters: [...Z] };
    }), h?.hide();
  };
  var C = jy(), w = de(C), E = q(w);
  st(E, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), I(w);
  var x = H(w, 2), $ = q(x);
  Pd($, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), I(x);
  var _ = H(x, 2), M = q(_);
  return At(
    mr(M, {
      placement: "bottom",
      floating: (V) => {
        var Z = By(), U = q(Z), j = H(q(U));
        const N = /* @__PURE__ */ S(() => c(s).contentType ? [c(s).contentType] : []);
        pt(j, {
          get items() {
            return wa;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(N);
          },
          onSelect: g
        }), I(U);
        var k = H(U, 2), L = H(q(k));
        const b = /* @__PURE__ */ S(() => c(s).formType ? [c(s).formType] : []);
        pt(L, {
          get items() {
            return r2;
          },
          style: "width: 100%",
          defaultValue: ["input"],
          get value() {
            return c(b);
          },
          onSelect: f
        }), I(k);
        var P = H(k, 2);
        {
          var T = (re) => {
            var X = Zy(), W = H(q(X));
            const Y = /* @__PURE__ */ S(() => c(s).enums?.join(`
`));
            We(W, {
              rows: 3,
              style: "width: 100%;",
              onchange: (ee) => {
                l("enums", ee.target?.value.trim().split(`
`));
              },
              get value() {
                return c(Y);
              },
              placeholder: "一行一个选项"
            }), I(X), D(re, X);
          };
          ue(P, (re) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && re(T);
          });
        }
        var A = H(P, 2), R = H(q(A));
        We(R, {
          rows: 1,
          style: "width: 100%;",
          onchange: (re) => {
            u("formLabel", re);
          },
          get value() {
            return c(s).formLabel;
          }
        }), I(A);
        var O = H(A, 2), B = H(q(O));
        We(B, {
          rows: 2,
          style: "width: 100%;",
          onchange: (re) => {
            u("formDescription", re);
          },
          get value() {
            return c(s).formDescription;
          }
        }), I(O);
        var G = H(O, 2), Q = q(G);
        Oe(Q, {
          onclick: y,
          children: (re, X) => {
            be();
            var W = Ee("删除");
            D(re, W);
          },
          $$slots: { default: !0 }
        }), I(G), I(Z), D(V, Z);
      },
      children: (V, Z) => {
        Oe(V, {
          class: "input-btn-more",
          children: (U, j) => {
            var N = Ky();
            D(U, N);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (V) => h = V,
    () => h
  ), I(_), D(e, C), pe({
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
  });
}
le(Kd, { parameter: {}, index: {} }, [], [], !0);
var Fy = /* @__PURE__ */ te('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Xy = /* @__PURE__ */ te('<div class="none-params svelte-3n0wca">无输入参数</div>'), Wy = /* @__PURE__ */ te('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Jy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function jd(e, t) {
  fe(t, !0), Ae(e, Jy);
  let n = ot(), r = Hn(n), o = /* @__PURE__ */ S(() => [...r?.current?.data?.parameters || []]);
  var i = Wy(), s = q(i);
  {
    var a = (u) => {
      var d = Fy();
      be(4), D(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = H(s, 2);
  wt(
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
      var d = Xy();
      D(u, d);
    }
  ), I(i), D(e, i), pe();
}
le(jd, {}, [], [], !0);
const bo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = gr()), bo(t.children);
}), e), en = () => {
  const { updateNodeData: e } = ht();
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
        return a ? a.push(...i) : a = [...i], { [n]: [...a] };
      });
    }
  };
};
var Gy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Uy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qy = /* @__PURE__ */ te('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const ew = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Yd(e, t) {
  fe(t, !0), Ae(e, ew);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return Yt(e, je(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = Gy();
      D(s, a);
    },
    children: (s, a) => {
      var l = Qy(), u = de(l), d = q(u);
      De(d, {
        level: 3,
        children: (g, h) => {
          be();
          var y = Ee("输入参数");
          D(g, y);
        },
        $$slots: { default: !0 }
      });
      var p = H(d, 2);
      Oe(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var y = Uy();
          D(g, y);
        },
        $$slots: { default: !0 }
      }), I(u);
      var f = H(u, 2);
      jd(f, {}), D(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
le(Yd, { data: {} }, [], [], !0);
const Fd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Fd(e, r.source, n));
}, Xd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Xd(r.children, t + "." + r.name, n)
})), Zl = (e, t, n) => {
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
          children: Xd(r, e.id, t)
        };
    }
  }
}, Wd = (e = !1) => {
  const t = ot(), n = Hn(t), r = /* @__PURE__ */ S(Qt), o = /* @__PURE__ */ S(() => c(r).nodes), i = /* @__PURE__ */ S(() => c(r).edges), s = /* @__PURE__ */ S(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = Zl(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Fd(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = Zl(p, f, u);
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
var tw = /* @__PURE__ */ te('<div class="input-more-item svelte-laou7w">数据内容： <!></div>'), nw = /* @__PURE__ */ te('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <!> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), rw = /* @__PURE__ */ te('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ow = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Jd(e, t) {
  fe(t, !0), Ae(e, ow), Qn(() => {
    c(u).refType || h({ value: "ref" });
  });
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7), s = m(t, "showContentType", 7, !1);
  let a = ot(), l = Hn(a), u = /* @__PURE__ */ S(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = ht(), p = (L, b) => {
    d(a, (P) => {
      let T = P.data?.[o()];
      return T[r()] = { ...T[r()], [L]: b }, { [o()]: T };
    });
  }, f = (L, b) => {
    const P = b.target.value;
    p(L, P);
  }, g = (L) => {
    const b = L.value;
    p("ref", b);
  }, h = (L) => {
    const b = L.value;
    p("refType", b);
  }, y = (L) => {
    const b = L.value;
    p("contentType", b);
  };
  let C;
  const w = () => {
    d(a, (L) => {
      let b = L.data?.[o()];
      return b.splice(r(), 1), { [o()]: [...b] };
    }), C?.hide();
  };
  let E = Wd(i());
  var x = rw(), $ = de(x), _ = q($);
  const M = /* @__PURE__ */ S(() => c(u).nameDisabled === !0);
  st(_, {
    style: "width: 100%;",
    get value() {
      return c(u).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(M);
    },
    oninput: (L) => f("name", L)
  }), I($);
  var V = H($, 2), Z = q(V);
  {
    var U = (L) => {
      st(L, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (b) => f("value", b)
      });
    }, j = (L, b) => {
      {
        var P = (T) => {
          const A = /* @__PURE__ */ S(() => [c(u).ref]);
          pt(T, {
            get items() {
              return E.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(A);
            },
            expandAll: !0,
            onSelect: g
          });
        };
        ue(
          L,
          (T) => {
            c(u).refType !== "input" && T(P);
          },
          b
        );
      }
    };
    ue(Z, (L) => {
      c(u).refType === "fixed" ? L(U) : L(j, !1);
    });
  }
  I(V);
  var N = H(V, 2), k = q(N);
  return At(
    mr(k, {
      placement: "bottom",
      floating: (L) => {
        var b = nw(), P = q(b), T = H(q(P));
        const A = /* @__PURE__ */ S(() => c(u).refType ? [c(u).refType] : []);
        pt(T, {
          get items() {
            return n2;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return c(A);
          },
          onSelect: h
        }), I(P);
        var R = H(P, 2);
        {
          var O = (Y) => {
            var ee = tw(), F = H(q(ee));
            const ye = /* @__PURE__ */ S(() => c(u).contentType ? [c(u).contentType] : []);
            pt(F, {
              get items() {
                return wa;
              },
              style: "width: 100%",
              defaultValue: ["text"],
              get value() {
                return c(ye);
              },
              onSelect: y
            }), I(ee), D(Y, ee);
          };
          ue(R, (Y) => {
            s() && Y(O);
          });
        }
        var B = H(R, 2), G = H(q(B));
        We(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (Y) => {
            f("defaultValue", Y);
          },
          get value() {
            return c(u).defaultValue;
          }
        }), I(B);
        var Q = H(B, 2), re = H(q(Q));
        We(re, {
          rows: 3,
          style: "width: 100%;",
          onchange: (Y) => {
            f("description", Y);
          },
          get value() {
            return c(u).description;
          }
        }), I(Q);
        var X = H(Q, 2), W = q(X);
        Oe(W, {
          onclick: w,
          children: (Y, ee) => {
            be();
            var F = Ee("删除");
            D(Y, F);
          },
          $$slots: { default: !0 }
        }), I(X), I(b), D(L, b);
      },
      children: (L, b) => {
        Ao(L, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (L) => C = L,
    () => C
  ), I(N), D(e, x), pe({
    get parameter() {
      return n();
    },
    set parameter(L) {
      n(L), v();
    },
    get index() {
      return r();
    },
    set index(L) {
      r(L), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(L) {
      o(L), v();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(L) {
      i(L), v();
    },
    get showContentType() {
      return s();
    },
    set showContentType(L = !1) {
      s(L), v();
    }
  });
}
le(
  Jd,
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
var iw = /* @__PURE__ */ te('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), sw = /* @__PURE__ */ te('<div class="none-params svelte-1sm1mgi"> </div>'), aw = /* @__PURE__ */ te('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const lw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Pt(e, t) {
  fe(t, !0), Ae(e, lw);
  const n = m(t, "noneParameterText", 7, "无输入参数"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7), i = m(t, "showContentType", 7, !1);
  let s = ot(), a = Hn(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[r()] || []]);
  var u = aw(), d = q(u);
  {
    var p = (g) => {
      var h = iw();
      be(4), D(g, h);
    };
    ue(d, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var f = H(d, 2);
  return wt(
    f,
    19,
    () => c(l),
    (g) => g.id,
    (g, h, y) => {
      Jd(g, {
        get parameter() {
          return c(h);
        },
        get index() {
          return c(y);
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
      var h = sw(), y = q(h, !0);
      I(h), Se(() => Ke(y, n())), D(g, h);
    }
  ), I(u), D(e, u), pe({
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
  });
}
le(
  Pt,
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
var uw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), cw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), dw = /* @__PURE__ */ te('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const fw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Gd(e, t) {
  fe(t, !0), Ae(e, fw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return Yt(e, je(
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
        var a = uw();
        D(s, a);
      },
      children: (s, a) => {
        var l = dw(), u = de(l), d = q(u);
        De(d, {
          level: 3,
          children: (g, h) => {
            be();
            var y = Ee("输出参数");
            D(g, y);
          },
          $$slots: { default: !0 }
        });
        var p = H(d, 2);
        Oe(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var y = cw();
            D(g, y);
          },
          $$slots: { default: !0 }
        }), I(u);
        var f = H(u, 2);
        Pt(f, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
le(Gd, { data: {} }, [], [], !0);
const os = (e) => JSON.parse(JSON.stringify(e));
var pw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), gw = /* @__PURE__ */ te('<div class="input-more-item svelte-1cfeest"><!></div>'), hw = /* @__PURE__ */ te('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), vw = /* @__PURE__ */ te('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const mw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ud(e, t) {
  fe(t, !0), Ae(e, mw);
  const n = m(t, "parameter", 7), r = m(t, "position", 7), o = m(t, "dataKeyName", 7), i = m(t, "placeholder", 7, "请输入参数值");
  let s = ot(), a = Hn(s), l = /* @__PURE__ */ S(() => {
    let b = a?.current?.data?.[o()], P;
    if (b && r().length > 0) {
      let T = b;
      for (let A = 0; A < r().length; A++) {
        const R = r()[A];
        A == r().length - 1 ? P = T[R] : T = T[R].children;
      }
    }
    return { ...n(), ...P };
  });
  const { updateNodeData: u } = ht(), d = (b, P) => {
    u(s, (T) => {
      const A = T.data?.[o()];
      if (A && r().length > 0) {
        let R = A;
        for (let O = 0; O < r().length; O++) {
          const B = r()[O];
          O == r().length - 1 ? R[B] = { ...R[B], [b]: P } : R = R[B].children;
        }
      }
      return { [o()]: [...os(A)] };
    });
  }, p = (b, P) => {
    const T = P.target.value;
    d(b, T);
  }, f = (b) => {
    const P = b.value;
    d("dataType", P);
  };
  let g;
  const h = () => {
    u(s, (b) => {
      let P = b.data?.[o()];
      if (P && r().length > 0) {
        let T = P;
        for (let A = 0; A < r().length; A++) {
          const R = r()[A];
          A == r().length - 1 ? T.splice(R, 1) : T = T[R].children;
        }
      }
      return { [o()]: [...os(P)] };
    }), g?.hide();
  }, y = () => {
    u(s, (b) => {
      let P = b.data?.[o()];
      if (P && r().length > 0) {
        let T = P;
        for (let A = 0; A < r().length; A++) {
          const R = r()[A];
          A == r().length - 1 ? T[R].children ? T[R].children.push({ id: gr(), name: "newParam", dataType: "String" }) : T[R].children = [{ id: gr(), name: "newParam", dataType: "String" }] : T = T[R].children;
        }
      }
      return { [o()]: [...os(P)] };
    });
  };
  var C = vw(), w = de(C), E = q(w);
  {
    var x = (b) => {
      var P = Ve(), T = de(P);
      wt(T, 17, r, Nr, (A, R) => {
        be();
        var O = Ee(" ");
        D(A, O);
      }), D(b, P);
    };
    ue(E, (b) => {
      r().length > 1 && b(x);
    });
  }
  var $ = H(E, 2);
  const _ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  st($, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    get placeholder() {
      return i();
    },
    oninput: (b) => {
      p("name", b);
    },
    get disabled() {
      return c(_);
    }
  }), I(w);
  var M = H(w, 2), V = q(M);
  const Z = /* @__PURE__ */ S(() => c(l).dataType ? [c(l).dataType] : []), U = /* @__PURE__ */ S(() => c(l).dataTypeDisabled === !0);
  pt(V, {
    get items() {
      return t2;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return c(Z);
    },
    get disabled() {
      return c(U);
    },
    onSelect: f
  });
  var j = H(V, 2);
  {
    var N = (b) => {
      Oe(b, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: y,
        children: (P, T) => {
          var A = pw();
          D(P, A);
        },
        $$slots: { default: !0 }
      });
    };
    ue(j, (b) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && b(N);
    });
  }
  I(M);
  var k = H(M, 2), L = q(k);
  return At(
    mr(L, {
      placement: "bottom",
      floating: (b) => {
        var P = hw(), T = q(P), A = H(q(T));
        const R = /* @__PURE__ */ S(() => c(l).defaultValue || "");
        We(A, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return c(R);
          },
          onchange: (X) => {
            p("defaultValue", X);
          }
        }), I(T);
        var O = H(T, 2), B = H(q(O));
        const G = /* @__PURE__ */ S(() => c(l).description || "");
        We(B, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return c(G);
          },
          onchange: (X) => {
            p("description", X);
          }
        }), I(O);
        var Q = H(O, 2);
        {
          var re = (X) => {
            var W = gw(), Y = q(W);
            Oe(Y, {
              onclick: h,
              children: (ee, F) => {
                be();
                var ye = Ee("删除");
                D(ee, ye);
              },
              $$slots: { default: !0 }
            }), I(W), D(X, W);
          };
          ue(Q, (X) => {
            c(l).deleteDisabled !== !0 && X(re);
          });
        }
        I(P), D(b, P);
      },
      children: (b, P) => {
        Ao(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => g = b,
    () => g
  ), I(k), D(e, C), pe({
    get parameter() {
      return n();
    },
    set parameter(b) {
      n(b), v();
    },
    get position() {
      return r();
    },
    set position(b) {
      r(b), v();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(b) {
      o(b), v();
    },
    get placeholder() {
      return i();
    },
    set placeholder(b = "请输入参数值") {
      i(b), v();
    }
  });
}
le(
  Ud,
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
var yw = /* @__PURE__ */ te("<!> <!>", 1), ww = /* @__PURE__ */ te('<div class="none-params svelte-1sm1mgi"> </div>'), bw = /* @__PURE__ */ te('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), xw = /* @__PURE__ */ te('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const $w = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function In(e, t) {
  fe(t, !0), Ae(e, $w);
  const n = (g, h = gt, y = gt) => {
    var C = Ve(), w = de(C);
    wt(
      w,
      19,
      h,
      (E) => `${E.id}_${E.children ? E.children.length : 0}`,
      (E, x, $) => {
        var _ = yw(), M = de(_);
        const V = /* @__PURE__ */ S(() => [...y(), c($)]);
        Ud(M, {
          get parameter() {
            return c(x);
          },
          get position() {
            return c(V);
          },
          get dataKeyName() {
            return o();
          },
          get placeholder() {
            return i();
          }
        });
        var Z = H(M, 2);
        {
          var U = (j) => {
            var N = /* @__PURE__ */ Ks(() => [...y(), c($)]);
            n(j, () => c(x).children, () => c(N));
          };
          ue(Z, (j) => {
            c(x).children && j(U);
          });
        }
        D(E, _);
      },
      (E) => {
        var x = Ve(), $ = de(x);
        {
          var _ = (M) => {
            var V = ww(), Z = q(V, !0);
            I(V), Se(() => Ke(Z, r())), D(M, V);
          };
          ue($, (M) => {
            y().length === 0 && M(_);
          });
        }
        D(E, x);
      }
    ), D(g, C);
  }, r = m(t, "noneParameterText", 7, "无输出参数"), o = m(t, "dataKeyName", 7, "outputDefs"), i = m(t, "placeholder", 7, "请输入参数名称");
  let s = ot(), a = Hn(s), l = /* @__PURE__ */ S(() => [...a?.current?.data?.[o()] || []]);
  var u = xw(), d = q(u);
  {
    var p = (g) => {
      var h = bw();
      be(4), D(g, h);
    };
    ue(d, (g) => {
      c(l).length !== 0 && g(p);
    });
  }
  var f = H(d, 2);
  return n(f, () => c(l) || [], () => []), I(u), D(e, u), pe({
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
  });
}
le(In, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Cw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), kw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), _w = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Sw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), Ew = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Pw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tw = /* @__PURE__ */ te('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Lw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Qd(e, t) {
  fe(t, !0), Ae(e, Lw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Gn();
  let a = /* @__PURE__ */ Pe(jt([]));
  Qn(async () => {
    const d = await s.provider?.llm?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = ht(), u = (d) => {
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
  }), Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = Cw();
        D(d, p);
      },
      children: (d, p) => {
        var f = Tw(), g = de(f), h = q(g);
        De(h, {
          level: 3,
          children: (ie, ve) => {
            be();
            var se = Ee("输入参数");
            D(ie, se);
          },
          $$slots: { default: !0 }
        });
        var y = H(h, 2);
        Oe(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ie, ve) => {
            var se = kw();
            D(ie, se);
          },
          $$slots: { default: !0 }
        }), I(g);
        var C = H(g, 2);
        Pt(C, {});
        var w = H(C, 2);
        De(w, {
          level: 3,
          mt: "10px",
          children: (ie, ve) => {
            be();
            var se = Ee("模型设置");
            D(ie, se);
          },
          $$slots: { default: !0 }
        });
        var E = H(w, 4), x = q(E);
        const $ = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
        pt(x, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ie) => {
            const ve = ie.value;
            l(o, () => ({ llmId: ve }));
          },
          get value() {
            return c($);
          }
        });
        var _ = H(x, 2);
        Ao(_, {}), I(E);
        var M = H(E, 4), V = q(M), Z = q(V), U = q(Z);
        I(Z);
        var j = H(Z, 2);
        ln(j), j.__input = [_w, l, o], I(V), I(M);
        var N = H(M, 2), k = q(N), L = q(k), b = q(L);
        I(L);
        var P = H(L, 2);
        ln(P), P.__input = [Sw, l, o], I(k), I(N);
        var T = H(N, 2), A = q(T), R = q(A), O = q(R);
        I(R);
        var B = H(R, 2);
        ln(B), B.__input = [Ew, l, o], I(A), I(T);
        var G = H(T, 4), Q = q(G);
        const re = /* @__PURE__ */ S(() => n().systemPrompt || "");
        We(Q, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return c(re);
          },
          oninput: (ie) => {
            l(o, { systemPrompt: ie.target.value });
          }
        }), I(G);
        var X = H(G, 4), W = q(X);
        const Y = /* @__PURE__ */ S(() => n().userPrompt || "");
        We(W, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return c(Y);
          },
          oninput: (ie) => {
            l(o, { userPrompt: ie.target.value });
          }
        }), I(X);
        var ee = H(X, 2), F = q(ee);
        De(F, {
          level: 3,
          children: (ie, ve) => {
            be();
            var se = Ee("输出参数");
            D(ie, se);
          },
          $$slots: { default: !0 }
        });
        var ye = H(F, 2);
        const ge = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
        pt(ye, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ie) => {
            u(ie.value);
          },
          get value() {
            return c(ge);
          }
        });
        var ae = H(ye, 2);
        {
          var oe = (ie) => {
            Oe(ie, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ve, se) => {
                var _e = Pw();
                D(ve, _e);
              },
              $$slots: { default: !0 }
            });
          };
          ue(ae, (ie) => {
            n().outType === "json" && ie(oe);
          });
        }
        I(ee);
        var ce = H(ee, 2);
        In(ce, {}), Se(() => {
          Ke(U, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Wo(j, n().temperature ?? 0.5), Ke(b, `Top P: ${n().topP ?? 0.9 ?? ""}`), Wo(P, n().topP ?? 0.9), Ke(O, `Top K: ${n().topK ?? 50 ?? ""}`), Wo(B, n().topK ?? 50);
        }), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(d) {
      n(d), v();
    }
  });
}
Vn(["input"]);
le(Qd, { data: {} }, [], [], !0);
var Ow = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Mw = /* @__PURE__ */ te('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Vw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  fe(t, !0), Ae(e, Vw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Qn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ot(), { addParameter: i } = en(), { updateNodeData: s } = ht(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ow();
        D(l, u);
      },
      children: (l, u) => {
        var d = Mw(), p = de(d), f = q(p);
        De(f, {
          level: 3,
          children: (j, N) => {
            be();
            var k = Ee("输入参数");
            D(j, k);
          },
          $$slots: { default: !0 }
        });
        var g = H(f, 2);
        Oe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, N) => {
            var k = Nw();
            D(j, k);
          },
          $$slots: { default: !0 }
        }), I(p);
        var h = H(p, 2);
        Pt(h, {});
        var y = H(h, 2);
        De(y, {
          level: 3,
          mt: "10px",
          children: (j, N) => {
            be();
            var k = Ee("代码");
            D(j, k);
          },
          $$slots: { default: !0 }
        });
        var C = H(y, 4), w = q(C);
        const E = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
        pt(w, {
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
            return c(E);
          }
        }), I(C);
        var x = H(C, 4), $ = q(x);
        const _ = /* @__PURE__ */ S(() => n().code || "");
        We($, {
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
        var M = H(x, 2), V = q(M);
        De(V, {
          level: 3,
          mt: "10px",
          children: (j, N) => {
            be();
            var k = Ee("输出参数");
            D(j, k);
          },
          $$slots: { default: !0 }
        });
        var Z = H(V, 2);
        Oe(Z, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (j, N) => {
            var k = Dw();
            D(j, k);
          },
          $$slots: { default: !0 }
        }), I(M);
        var U = H(M, 2);
        In(U, {}), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
le(ef, { data: {} }, [], [], !0);
var zw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Hw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Aw = /* @__PURE__ */ te('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  fe(t, !0), Ae(e, Iw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), { updateNodeData: s } = ht();
  return nt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = zw();
        D(a, l);
      },
      children: (a, l) => {
        var u = Aw(), d = de(u), p = q(d);
        De(p, {
          level: 3,
          children: (_, M) => {
            be();
            var V = Ee("输入参数");
            D(_, V);
          },
          $$slots: { default: !0 }
        });
        var f = H(p, 2);
        Oe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, M) => {
            var V = Hw();
            D(_, V);
          },
          $$slots: { default: !0 }
        }), I(d);
        var g = H(d, 2);
        Pt(g, {});
        var h = H(g, 2);
        De(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (_, M) => {
            be();
            var V = Ee("模板内容");
            D(_, V);
          },
          $$slots: { default: !0 }
        });
        var y = H(h, 2), C = q(y);
        const w = /* @__PURE__ */ S(() => n().template || "");
        We(C, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (_) => {
            s(o, () => ({ template: _.target.value }));
          },
          get value() {
            return c(w);
          }
        }), I(y);
        var E = H(y, 2), x = q(E);
        De(x, {
          level: 3,
          mt: "10px",
          children: (_, M) => {
            be();
            var V = Ee("输出参数");
            D(_, V);
          },
          $$slots: { default: !0 }
        }), I(E);
        var $ = H(E, 2);
        In($, {}), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
le(tf, { data: {} }, [], [], !0);
var Rw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ te('<!> <div class="radio-group svelte-1dxz5e"><label class="svelte-1dxz5e"><!>none</label> <label class="svelte-1dxz5e"><!>form-data</label> <label class="svelte-1dxz5e"><!>x-www-form-urlencoded</label> <label class="svelte-1dxz5e"><!>json</label> <label class="svelte-1dxz5e"><!>raw</label></div>', 1), Kw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ te('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Yw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Fw = /* @__PURE__ */ te('<div class="heading svelte-1dxz5e" style="padding-top: 10px"><!> <!></div> <!>', 1), Xw = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Ww = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), Jw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Gw = /* @__PURE__ */ te('<div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1dxz5e"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-1dxz5e"><!> <!></div> <!>', 1);
const Uw = {
  hash: "svelte-1dxz5e",
  code: ".heading.svelte-1dxz5e {display:flex;margin-bottom:10px;}.radio-group.svelte-1dxz5e {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-1dxz5e label:where(.svelte-1dxz5e) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function nf(e, t) {
  fe(t, !0), Ae(e, Uw);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
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
  ], i = ot(), { addParameter: s } = en(), { updateNodeData: a } = ht();
  return Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Rw();
        D(l, u);
      },
      children: (l, u) => {
        var d = Gw(), p = de(d), f = q(p);
        De(f, {
          level: 3,
          children: (W, Y) => {
            be();
            var ee = Ee("输入参数");
            D(W, ee);
          },
          $$slots: { default: !0 }
        });
        var g = H(f, 2);
        Oe(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (W, Y) => {
            var ee = qw();
            D(W, ee);
          },
          $$slots: { default: !0 }
        }), I(p);
        var h = H(p, 2);
        Pt(h, {});
        var y = H(h, 2);
        De(y, {
          level: 3,
          mt: "10px",
          children: (W, Y) => {
            be();
            var ee = Ee("URL 地址");
            D(W, ee);
          },
          $$slots: { default: !0 }
        });
        var C = H(y, 2), w = q(C), E = q(w);
        const x = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
        pt(E, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (W) => {
            const Y = W.value;
            a(i, () => ({ method: Y }));
          },
          get value() {
            return c(x);
          }
        }), I(w);
        var $ = H(w, 2), _ = q($);
        const M = /* @__PURE__ */ S(() => n().url || "");
        st(_, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (W) => {
            a(i, () => ({ url: W.target.value }));
          },
          get value() {
            return c(M);
          }
        }), I($), I(C);
        var V = H(C, 2), Z = q(V);
        De(Z, {
          level: 3,
          children: (W, Y) => {
            be();
            var ee = Ee("Http 头信息");
            D(W, ee);
          },
          $$slots: { default: !0 }
        });
        var U = H(Z, 2);
        Oe(U, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (W, Y) => {
            var ee = Zw();
            D(W, ee);
          },
          $$slots: { default: !0 }
        }), I(V);
        var j = H(V, 2);
        Pt(j, { dataKeyName: "headers" });
        var N = H(j, 2);
        {
          var k = (W) => {
            var Y = Bw(), ee = de(Y);
            De(ee, {
              level: 3,
              mt: "10px",
              children: (Fe, Rt) => {
                be();
                var Ie = Ee("Body");
                D(Fe, Ie);
              },
              $$slots: { default: !0 }
            });
            var F = H(ee, 2), ye = q(F), ge = q(ye);
            const ae = /* @__PURE__ */ S(() => !n().bodyType || n().bodyType === "");
            st(ge, {
              type: "radio",
              name: "bodyType",
              value: "",
              get checked() {
                return c(ae);
              },
              onchange: (Fe) => {
                Fe.target?.checked && a(i, { bodyType: "" });
              }
            }), be(), I(ye);
            var oe = H(ye, 2), ce = q(oe);
            const ie = /* @__PURE__ */ S(() => n().bodyType === "form-data");
            st(ce, {
              type: "radio",
              name: "bodyType",
              value: "form-data",
              get checked() {
                return c(ie);
              },
              onchange: (Fe) => {
                Fe.target?.checked && a(i, { bodyType: "form-data" });
              }
            }), be(), I(oe);
            var ve = H(oe, 2), se = q(ve);
            const _e = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
            st(se, {
              type: "radio",
              name: "bodyType",
              value: "x-www-form-urlencoded",
              get checked() {
                return c(_e);
              },
              onchange: (Fe) => {
                Fe.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
              }
            }), be(), I(ve);
            var K = H(ve, 2), Ue = q(K);
            const He = /* @__PURE__ */ S(() => n().bodyType === "json");
            st(Ue, {
              type: "radio",
              name: "bodyType",
              value: "json",
              get checked() {
                return c(He);
              },
              onchange: (Fe) => {
                Fe.target?.checked && a(i, { bodyType: "json" });
              }
            }), be(), I(K);
            var Re = H(K, 2), et = q(Re);
            const Ye = /* @__PURE__ */ S(() => n().bodyType === "raw");
            st(et, {
              type: "radio",
              name: "bodyType",
              value: "raw",
              get checked() {
                return c(Ye);
              },
              onchange: (Fe) => {
                Fe.target?.checked && a(i, { bodyType: "raw" });
              }
            }), be(), I(Re), I(F), D(W, Y);
          };
          ue(N, (W) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && W(k);
          });
        }
        var L = H(N, 2);
        {
          var b = (W) => {
            var Y = jw(), ee = de(Y), F = q(ee);
            De(F, {
              level: 3,
              children: (ae, oe) => {
                be();
                var ce = Ee("参数");
                D(ae, ce);
              },
              $$slots: { default: !0 }
            });
            var ye = H(F, 2);
            Oe(ye, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ae, oe) => {
                var ce = Kw();
                D(ae, ce);
              },
              $$slots: { default: !0 }
            }), I(ee);
            var ge = H(ee, 2);
            Pt(ge, { dataKeyName: "formData" }), D(W, Y);
          };
          ue(L, (W) => {
            n().bodyType === "form-data" && W(b);
          });
        }
        var P = H(L, 2);
        {
          var T = (W) => {
            var Y = Fw(), ee = de(Y), F = q(ee);
            De(F, {
              level: 3,
              children: (ae, oe) => {
                be();
                var ce = Ee("Body 参数");
                D(ae, ce);
              },
              $$slots: { default: !0 }
            });
            var ye = H(F, 2);
            Oe(ye, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ae, oe) => {
                var ce = Yw();
                D(ae, ce);
              },
              $$slots: { default: !0 }
            }), I(ee);
            var ge = H(ee, 2);
            Pt(ge, { dataKeyName: "formUrlencoded" }), D(W, Y);
          };
          ue(P, (W) => {
            n().bodyType === "x-www-form-urlencoded" && W(T);
          });
        }
        var A = H(P, 2);
        {
          var R = (W) => {
            var Y = Xw(), ee = q(Y);
            We(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (F) => {
                a(i, { bodyJson: F.target.value });
              }
            }), I(Y), D(W, Y);
          };
          ue(A, (W) => {
            n().bodyType === "json" && W(R);
          });
        }
        var O = H(A, 2);
        {
          var B = (W) => {
            var Y = Ww(), ee = q(Y);
            We(ee, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (F) => {
                a(i, { bodyRaw: F.target.value });
              }
            }), I(Y), D(W, Y);
          };
          ue(O, (W) => {
            n().bodyType === "raw" && W(B);
          });
        }
        var G = H(O, 2), Q = q(G);
        De(Q, {
          level: 3,
          mt: "10px",
          children: (W, Y) => {
            be();
            var ee = Ee("输出参数");
            D(W, ee);
          },
          $$slots: { default: !0 }
        });
        var re = H(Q, 2);
        Oe(re, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (W, Y) => {
            var ee = Jw();
            D(W, ee);
          },
          $$slots: { default: !0 }
        }), I(G);
        var X = H(G, 2);
        In(X, {}), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), v();
    }
  });
}
le(nf, { data: {} }, [], [], !0);
var Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ te('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const nb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rf(e, t) {
  fe(t, !0), Ae(e, nb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Gn();
  let a = /* @__PURE__ */ Pe(jt([]));
  Qn(async () => {
    const u = await s.provider?.knowledge?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ht();
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
  }), Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = Qw();
        D(u, d);
      },
      children: (u, d) => {
        var p = tb(), f = de(p), g = q(f);
        De(g, {
          level: 3,
          children: (k, L) => {
            be();
            var b = Ee("输入参数");
            D(k, b);
          },
          $$slots: { default: !0 }
        });
        var h = H(g, 2);
        Oe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, L) => {
            var b = eb();
            D(k, b);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = H(f, 2);
        Pt(y, {});
        var C = H(y, 2);
        De(C, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            be();
            var b = Ee("知识库设置");
            D(k, b);
          },
          $$slots: { default: !0 }
        });
        var w = H(C, 4), E = q(w);
        const x = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
        pt(E, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (k) => {
            const L = k.value;
            l(o, () => ({ knowledgeId: L }));
          },
          get value() {
            return c(x);
          }
        }), I(w);
        var $ = H(w, 4), _ = q($);
        st(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (k) => {
            const L = k.target.value;
            l(o, () => ({ keyword: L }));
          }
        }), I($);
        var M = H($, 4), V = q(M);
        const Z = /* @__PURE__ */ S(() => n().limit || "");
        st(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (k) => {
            const L = k.target.value;
            l(o, () => ({ limit: L }));
          },
          get value() {
            return c(Z);
          }
        }), I(M);
        var U = H(M, 2), j = q(U);
        De(j, {
          level: 3,
          mt: "10px",
          children: (k, L) => {
            be();
            var b = Ee("输出参数");
            D(k, b);
          },
          $$slots: { default: !0 }
        }), I(U);
        var N = H(U, 2);
        In(N, {}), D(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  });
}
le(rf, { data: {} }, [], [], !0);
var rb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), ob = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ib = /* @__PURE__ */ te('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const sb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function of(e, t) {
  fe(t, !0), Ae(e, sb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Gn();
  let a = /* @__PURE__ */ Pe(jt([]));
  Qn(async () => {
    const u = await s.provider?.searchEngine?.();
    c(a).push(...u || []);
  });
  const { updateNodeData: l } = ht();
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
  }), Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = rb();
        D(u, d);
      },
      children: (u, d) => {
        var p = ib(), f = de(p), g = q(f);
        De(g, {
          level: 3,
          children: (N, k) => {
            be();
            var L = Ee("输入参数");
            D(N, L);
          },
          $$slots: { default: !0 }
        });
        var h = H(g, 2);
        Oe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (N, k) => {
            var L = ob();
            D(N, L);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = H(f, 2);
        Pt(y, {});
        var C = H(y, 2);
        De(C, {
          level: 3,
          mt: "10px",
          children: (N, k) => {
            be();
            var L = Ee("搜索引擎设置");
            D(N, L);
          },
          $$slots: { default: !0 }
        });
        var w = H(C, 4), E = q(w);
        const x = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
        pt(E, {
          get items() {
            return c(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (N) => {
            const k = N.value;
            l(o, () => ({ engine: k }));
          },
          get value() {
            return c(x);
          }
        }), I(w);
        var $ = H(w, 4), _ = q($);
        st(_, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (N) => {
            const k = N.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), I($);
        var M = H($, 4), V = q(M);
        st(V, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (N) => {
            const k = N.target.value;
            l(o, () => ({ limit: k }));
          }
        }), I(M);
        var Z = H(M, 2), U = q(Z);
        De(U, {
          level: 3,
          mt: "10px",
          children: (N, k) => {
            be();
            var L = Ee("输出参数");
            D(N, L);
          },
          $$slots: { default: !0 }
        }), I(Z);
        var j = H(Z, 2);
        In(j, {}), D(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), v();
    }
  });
}
le(of, { data: {} }, [], [], !0);
var ab = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), lb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ub = /* @__PURE__ */ te('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const cb = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function sf(e, t) {
  fe(t, !0), Ae(e, cb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return nt(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = ab();
        D(s, a);
      },
      handle: (s) => {
        Wn(s, {
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
        var l = ub(), u = de(l), d = q(u);
        De(d, {
          level: 3,
          children: (C, w) => {
            be();
            var E = Ee("循环变量");
            D(C, E);
          },
          $$slots: { default: !0 }
        }), I(u);
        var p = H(u, 2);
        Pt(p, { dataKeyName: "loopVars" });
        var f = H(p, 2), g = q(f);
        De(g, {
          level: 3,
          children: (C, w) => {
            be();
            var E = Ee("输出参数");
            D(C, E);
          },
          $$slots: { default: !0 }
        });
        var h = H(g, 2);
        Oe(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, w) => {
            var E = lb();
            D(C, E);
          },
          $$slots: { default: !0 }
        }), I(f);
        var y = H(f, 2);
        Pt(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), v();
    }
  });
}
le(sf, { data: {} }, [], [], !0);
const db = (e, t) => {
  const n = e.target.checked;
  t("required", n);
};
var fb = /* @__PURE__ */ te('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据内容： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <div class="input-more-item svelte-2f9bnc">数据标题： <!></div> <div class="input-more-item svelte-2f9bnc">数据描述： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), pb = /* @__PURE__ */ te('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const gb = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function af(e, t) {
  fe(t, !0), Ae(e, gb);
  const n = m(t, "parameter", 7), r = m(t, "index", 7), o = m(t, "dataKeyName", 7), i = m(t, "useChildrenOnly", 7);
  let s = ot(), a = Hn(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = ht(), d = (k, L) => {
    u(s, (b) => {
      let P = b.data?.[o()];
      return P[r()] = { ...P[r()], [k]: L }, { [o()]: P };
    });
  }, p = (k, L) => {
    const b = L.target.value;
    d(k, b);
  }, f = (k) => {
    const L = k.value;
    d("ref", L);
  }, g = (k) => {
    const L = k.value;
    d("formType", L);
  }, h = (k) => {
    const L = k.value;
    d("contentType", L);
  };
  let y;
  const C = () => {
    u(s, (k) => {
      let L = k.data?.[o()];
      return L.splice(r(), 1), { [o()]: [...L] };
    }), y?.hide();
  };
  let w = Wd(i());
  var E = pb(), x = de(E), $ = q(x);
  const _ = /* @__PURE__ */ S(() => c(l).nameDisabled === !0);
  st($, {
    style: "width: 100%;",
    get value() {
      return c(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return c(_);
    },
    oninput: (k) => p("name", k)
  }), I(x);
  var M = H(x, 2), V = q(M);
  {
    var Z = (k) => {
      st(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (L) => p("value", L)
      });
    }, U = (k, L) => {
      {
        var b = (P) => {
          const T = /* @__PURE__ */ S(() => [c(l).ref]);
          pt(P, {
            get items() {
              return w.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(T);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        ue(
          k,
          (P) => {
            c(l).refType !== "input" && P(b);
          },
          L
        );
      }
    };
    ue(V, (k) => {
      c(l).refType === "fixed" ? k(Z) : k(U, !1);
    });
  }
  I(M);
  var j = H(M, 2), N = q(j);
  return At(
    mr(N, {
      placement: "bottom",
      floating: (k) => {
        var L = fb(), b = q(L), P = H(q(b));
        const T = /* @__PURE__ */ S(() => c(l).contentType ? [c(l).contentType] : []);
        pt(P, {
          get items() {
            return wa;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return c(T);
          },
          onSelect: h
        }), I(b);
        var A = H(b, 2), R = H(q(A));
        const O = /* @__PURE__ */ S(() => c(l).formType ? [c(l).formType] : []);
        pt(R, {
          get items() {
            return o2;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return c(O);
          },
          onSelect: g
        }), I(A);
        var B = H(A, 2), G = H(q(B));
        We(G, {
          rows: 1,
          style: "width: 100%;",
          onchange: (F) => {
            p("formLabel", F);
          },
          get value() {
            return c(l).formLabel;
          }
        }), I(B);
        var Q = H(B, 2), re = H(q(Q));
        We(re, {
          rows: 2,
          style: "width: 100%;",
          onchange: (F) => {
            p("formDescription", F);
          },
          get value() {
            return c(l).formDescription;
          }
        }), I(Q);
        var X = H(Q, 2), W = H(q(X), 2);
        ln(W), gs(W, !1), W.__change = [db, d], I(X);
        var Y = H(X, 2), ee = q(Y);
        Oe(ee, {
          onclick: C,
          children: (F, ye) => {
            be();
            var ge = Ee("删除");
            D(F, ge);
          },
          $$slots: { default: !0 }
        }), I(Y), I(L), D(k, L);
      },
      children: (k, L) => {
        Ao(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => y = k,
    () => y
  ), I(j), D(e, E), pe({
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
  });
}
Vn(["change"]);
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
var hb = /* @__PURE__ */ te('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vb = /* @__PURE__ */ te('<div class="none-params svelte-1sm1mgi"> </div>'), mb = /* @__PURE__ */ te('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const yb = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function lf(e, t) {
  fe(t, !0), Ae(e, yb);
  const n = m(t, "noneParameterText", 7, "无确认数据"), r = m(t, "dataKeyName", 7, "parameters"), o = m(t, "useChildrenOnly", 7);
  let i = ot(), s = Hn(i), a = /* @__PURE__ */ S(() => [...s?.current?.data?.[r()] || []]);
  var l = mb(), u = q(l);
  {
    var d = (f) => {
      var g = hb();
      be(4), D(f, g);
    };
    ue(u, (f) => {
      c(a).length !== 0 && f(d);
    });
  }
  var p = H(u, 2);
  return wt(
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
      var g = vb(), h = q(g, !0);
      I(g), Se(() => Ke(h, n())), D(f, g);
    }
  ), I(l), D(e, l), pe({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无确认数据") {
      n(f), v();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), v();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), v();
    }
  });
}
le(lf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ts = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ts(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ts(e[s], t[s])) return !1;
    return !0;
  }
};
var wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), bb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), xb = /* @__PURE__ */ te('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const $b = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  fe(t, !0), Ae(e, $b);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), { updateNodeData: s } = ht();
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
        dataType: l.formType === "checkbox" || l.formType === "select" ? "Array" : "String",
        addChildDisabled: !0
      }));
      Ts(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Yt(e, je(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = wb();
        D(a, l);
      },
      children: (a, l) => {
        var u = xb(), d = de(u), p = q(d);
        De(p, {
          level: 3,
          children: (_, M) => {
            be();
            var V = Ee("确认数据");
            D(_, V);
          },
          $$slots: { default: !0 }
        });
        var f = H(p, 2);
        Oe(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (_, M) => {
            var V = bb();
            D(_, V);
          },
          $$slots: { default: !0 }
        }), I(d);
        var g = H(d, 2);
        lf(g, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var h = H(g, 2);
        De(h, {
          level: 3,
          mt: "10px",
          children: (_, M) => {
            be();
            var V = Ee("确认消息");
            D(_, V);
          },
          $$slots: { default: !0 }
        });
        var y = H(h, 4), C = q(y);
        const w = /* @__PURE__ */ S(() => n().message || "");
        We(C, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (_) => {
            s(o, () => ({ message: _.target.value }));
          },
          get value() {
            return c(w);
          }
        }), I(y);
        var E = H(y, 2), x = q(E);
        De(x, {
          level: 3,
          mt: "10px",
          children: (_, M) => {
            be();
            var V = Ee("输出参数");
            D(_, V);
          },
          $$slots: { default: !0 }
        }), I(E);
        var $ = H(E, 2);
        In($, { placeholder: "" }), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), v();
    }
  });
}
le(uf, { data: {} }, [], [], !0);
const Cb = {
  startNode: Yd,
  codeNode: ef,
  confirmNode: uf,
  llmNode: Qd,
  templateNode: tf,
  httpNode: nf,
  knowledgeNode: rf,
  searchEngineNode: of,
  loopNode: sf,
  endNode: Gd
};
var kb = /* @__PURE__ */ te("<!> ", 1);
function Ls(e, t) {
  fe(t, !0);
  const n = m(t, "icon", 7), r = m(t, "title", 7), o = m(t, "type", 7), i = m(t, "description", 7), s = m(t, "extra", 7);
  return Oe(e, {
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
      var u = kb(), d = de(u);
      Qs(d, n);
      var p = H(d);
      Se(() => Ke(p, ` ${r() ?? ""}`)), D(a, u);
    },
    $$slots: { default: !0 }
  }), pe({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), v();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), v();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), v();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), v();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), v();
    }
  });
}
le(Ls, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var _b = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Sb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), Eb = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function cf(e, t) {
  fe(t, !0);
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
  ], s = [], a = Gn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((E, x) => (l[E].sortNo || 0) - (l[x].sortNo || 0));
    for (let E of w)
      l[E].group === "base" ? o.push({ type: E, ...l[E] }) : s.push({
        icon: l[E].icon,
        title: l[E].title,
        type: E
      });
    o.sort((E, x) => (E.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let E of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === E) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var u = Eb(), d = q(u), p = q(d), f = q(p);
  Ld(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      J(n, w.value.toString(), !0);
    }
  }), I(p);
  var g = H(p, 2), h = q(g);
  wt(h, 21, () => o, Nr, (w, E) => {
    Ls(w, je(() => c(E)));
  }), I(h);
  var y = H(h, 2);
  wt(y, 21, () => s, Nr, (w, E) => {
    Ls(w, je(() => c(E)));
  }), I(y), I(g), I(d);
  var C = H(d, 2);
  Oe(C, {
    onclick: () => {
      J(r, c(r) ? "" : "show", !0);
    },
    children: (w, E) => {
      var x = Ve(), $ = de(x);
      {
        var _ = (V) => {
          var Z = _b();
          D(V, Z);
        }, M = (V) => {
          var Z = Sb();
          D(V, Z);
        };
        ue($, (V) => {
          c(r) === "show" ? V(_) : V(M, !1);
        });
      }
      D(w, x);
    },
    $$slots: { default: !0 }
  }), I(u), Se(() => {
    Ot(u, 1, `tf-toolbar ${c(r) ?? ""}`), Ct(h, `display: ${c(n) === "base" ? "flex" : "none"}`), Ct(y, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), pe();
}
le(cf, {}, [], [], !0);
const Pb = () => ({ getNode: (e) => Ge.getNode(e) }), Tb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ge.updateNodes((n) => {
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
} }), Lb = () => ({ getEdgesByTarget: (e) => Ge.getEdges().filter((t) => t.target === e) });
var Ob = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nb = /* @__PURE__ */ te('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Db = /* @__PURE__ */ te('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Mb = /* @__PURE__ */ te('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Vb = /* @__PURE__ */ te('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), zb = /* @__PURE__ */ te('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Hb = /* @__PURE__ */ te('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ab = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ib = /* @__PURE__ */ te('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Rb = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const qb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function df(e, t) {
  fe(t, !0), Ae(e, qb);
  const n = m(t, "data", 7), r = /* @__PURE__ */ Be(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = ht(), { updateNodeData: a } = s, l = (C) => {
    a(o, C);
  }, u = (C, w) => {
    l({ [C]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Gn().customNodes[t.type];
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
  const y = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
  return Yt(e, je(
    {
      get data() {
        return c(y);
      }
    },
    () => r,
    {
      icon: (C) => {
        var w = Ve(), E = de(w);
        Qs(E, () => f.icon), D(C, w);
      },
      children: (C, w) => {
        var E = Rb(), x = de(E);
        {
          var $ = (j) => {
            var N = Nb(), k = de(N), L = q(k);
            De(L, {
              level: 3,
              children: (A, R) => {
                be();
                var O = Ee("输入参数");
                D(A, O);
              },
              $$slots: { default: !0 }
            });
            var b = H(L, 2);
            {
              var P = (A) => {
                Oe(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (R, O) => {
                    var B = Ob();
                    D(R, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ue(b, (A) => {
                f.parametersAddEnable !== !1 && A(P);
              });
            }
            I(k);
            var T = H(k, 2);
            Pt(T, {}), D(j, N);
          };
          ue(x, (j) => {
            f.parametersEnable !== !1 && j($);
          });
        }
        var _ = H(x, 2);
        {
          var M = (j) => {
            var N = Ve(), k = de(N);
            wt(k, 17, () => g, Nr, (L, b) => {
              var P = Ve(), T = de(P);
              {
                var A = (O) => {
                  var B = Db(), G = de(B), Q = q(G, !0);
                  I(G);
                  var re = H(G, 2), X = q(re);
                  const W = /* @__PURE__ */ S(() => n()[c(b).name] || c(b).defaultValue);
                  st(X, je(
                    {
                      get placeholder() {
                        return c(b).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return c(W);
                      }
                    },
                    () => c(b).attrs,
                    {
                      onchange: (Y) => {
                        u(c(b).name, Y);
                      }
                    }
                  )), I(re), Se(() => Ke(Q, c(b).label)), D(O, B);
                }, R = (O, B) => {
                  {
                    var G = (re) => {
                      var X = Mb(), W = de(X), Y = q(W, !0);
                      I(W);
                      var ee = H(W, 2), F = q(ee);
                      const ye = /* @__PURE__ */ S(() => n()[c(b).name] || c(b).defaultValue);
                      We(F, je(
                        {
                          rows: 3,
                          get placeholder() {
                            return c(b).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ye);
                          }
                        },
                        () => c(b).attrs,
                        {
                          onchange: (ge) => {
                            u(c(b).name, ge);
                          }
                        }
                      )), I(ee), Se(() => Ke(Y, c(b).label)), D(re, X);
                    }, Q = (re, X) => {
                      {
                        var W = (ee) => {
                          var F = Vb(), ye = de(F), ge = q(ye, !0);
                          I(ye);
                          var ae = H(ye, 2), oe = q(ae), ce = q(oe), ie = q(ce);
                          I(ce);
                          var ve = H(ce, 2);
                          ln(ve);
                          var se = (_e) => l({ [c(b).name]: parseFloat(_e.target.value) });
                          ut(
                            ve,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...c(b).attrs,
                              value: n()[c(b).name] ?? c(b).defaultValue,
                              oninput: se
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), I(oe), I(ae), Se(() => {
                            Ke(ge, c(b).label), Ke(ie, `${c(b).description ?? ""}: ${n()[c(b).name] ?? c(b).defaultValue ?? ""}`);
                          }), D(ee, F);
                        }, Y = (ee, F) => {
                          {
                            var ye = (ae) => {
                              var oe = zb(), ce = de(oe), ie = q(ce, !0);
                              I(ce);
                              var ve = H(ce, 2), se = q(ve);
                              const _e = /* @__PURE__ */ S(() => c(b).options || []), K = /* @__PURE__ */ S(() => n()[c(b).name] ? [n()[c(b).name]] : [c(b).defaultValue]);
                              pt(se, {
                                get items() {
                                  return c(_e);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return c(b).placeholder;
                                },
                                onSelect: (Ue) => {
                                  const He = Ue.value;
                                  l({ [c(b).name]: He });
                                },
                                get value() {
                                  return c(K);
                                }
                              }), I(ve), Se(() => Ke(ie, c(b).label)), D(ae, oe);
                            }, ge = (ae, oe) => {
                              {
                                var ce = (ve) => {
                                  var se = Hb(), _e = de(se), K = q(_e, !0);
                                  I(_e);
                                  var Ue = H(_e, 2), He = q(Ue);
                                  const Re = /* @__PURE__ */ S(() => c(b).chosen?.buttonText);
                                  Td(He, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(b).placeholder;
                                    },
                                    get buttonText() {
                                      return c(Re);
                                    },
                                    onChosen: (et, Ye, Fe) => {
                                      c(b).chosen?.onChosen?.(l, et, Ye, Fe);
                                    },
                                    get value() {
                                      return n()[c(b).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[c(b).chosen?.labelDataKey || ""];
                                    }
                                  }), I(Ue), Se(() => Ke(K, c(b).label)), D(ve, se);
                                }, ie = (ve, se) => {
                                  {
                                    var _e = (K) => {
                                      De(K, je({ level: 3, mt: "10px" }, () => c(b).attrs, {
                                        children: (Ue, He) => {
                                          be();
                                          var Re = Ee();
                                          Se(() => Ke(Re, c(b).label)), D(Ue, Re);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    ue(
                                      ve,
                                      (K) => {
                                        c(b).type === "heading" && K(_e);
                                      },
                                      se
                                    );
                                  }
                                };
                                ue(
                                  ae,
                                  (ve) => {
                                    c(b).type === "chosen" ? ve(ce) : ve(ie, !1);
                                  },
                                  oe
                                );
                              }
                            };
                            ue(
                              ee,
                              (ae) => {
                                c(b).type === "select" ? ae(ye) : ae(ge, !1);
                              },
                              F
                            );
                          }
                        };
                        ue(
                          re,
                          (ee) => {
                            c(b).type === "slider" ? ee(W) : ee(Y, !1);
                          },
                          X
                        );
                      }
                    };
                    ue(
                      O,
                      (re) => {
                        c(b).type === "textarea" ? re(G) : re(Q, !1);
                      },
                      B
                    );
                  }
                };
                ue(T, (O) => {
                  c(b).type === "input" ? O(A) : O(R, !1);
                });
              }
              D(L, P);
            }), D(j, N);
          };
          ue(_, (j) => {
            g && j(M);
          });
        }
        var V = H(_, 2);
        At(V, (j) => h = j, () => h);
        var Z = H(V, 2);
        {
          var U = (j) => {
            var N = Ib(), k = de(N), L = q(k);
            De(L, {
              level: 3,
              mt: "10px",
              children: (A, R) => {
                be();
                var O = Ee("输出参数");
                D(A, O);
              },
              $$slots: { default: !0 }
            });
            var b = H(L, 2);
            {
              var P = (A) => {
                Oe(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (R, O) => {
                    var B = Ab();
                    D(R, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ue(b, (A) => {
                f.outputDefsAddEnable !== !1 && A(P);
              });
            }
            I(k);
            var T = H(k, 2);
            In(T, {}), D(j, N);
          };
          ue(Z, (j) => {
            f.outputDefsEnable !== !1 && j(U);
          });
        }
        Se(() => {
          Ct(V, f.rootStyle || ""), Ot(V, 1, zn(f.rootClass), "svelte-q0cqsa");
        }), D(C, E);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe({
    get data() {
      return n();
    },
    set data(C) {
      n(C), v();
    }
  });
}
le(df, { data: {} }, [], [], !0);
const Zb = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ge.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ge.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Bb = () => ({ deleteEdge: (e) => {
  Ge.removeEdge(e);
} });
var Kb = /* @__PURE__ */ te('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), jb = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), Yb = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Fb = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function ff(e, t) {
  fe(t, !0), Ae(e, Fb);
  const n = m(t, "onInit", 7), r = ht();
  n()(r);
  let o = /* @__PURE__ */ Pe(!1), i = /* @__PURE__ */ Pe(null);
  const { updateEdgeData: s } = Zb(), a = (T) => {
    T.preventDefault(), T.dataTransfer && (T.dataTransfer.dropEffect = "move");
  }, l = (T) => {
    T.preventDefault();
    const A = r.screenToFlowPosition({ x: T.clientX - 250, y: T.clientY - 100 }), R = T.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const O = JSON.parse(R), B = { id: `node_${gr()}`, position: A, data: {}, ...O };
    Ge.addNode(B), Ge.selectNodeOnly(B.id);
  }, { getNode: u } = Pb(), d = (T) => {
    const A = u(T.source), R = u(T.target);
    if (T.sourceHandle === "loop_handle" || A.parentId) {
      const O = r.getEdges();
      for (let B of O)
        if (B.target === T.target) {
          const G = u(B.source);
          if (T.sourceHandle === "loop_handle" && G.parentId !== A.id || A.parentId && G.parentId !== A.parentId)
            return !1;
        }
    }
    return !(!A.parentId && R.parentId && R.parentId !== A.id);
  }, { ensureParentInNodesBefore: p } = Tb(), f = (T, A) => {
    if (!A.isValid)
      return;
    const R = A.toNode;
    if (R.parentId)
      return;
    const O = A.fromNode, B = A.fromHandle, G = { position: { ...R.position } };
    if (B.id === "loop_handle" ? G.parentId = O.id : O.parentId && (G.parentId = O.parentId), G.parentId) {
      const Q = u(G.parentId);
      G.position = {
        x: R.position.x - Q.position.x,
        y: R.position.y - Q.position.y
      }, p(G.parentId, R.id), r.updateNode(R.id, G);
    }
    setTimeout(() => {
      Ge.getEdges().forEach((Q) => {
        Q.target === R.id && Q.source == O.id && (J(o, !0), J(i, Q, !0));
      });
    });
  }, { getEdgesByTarget: g } = Lb(), h = (T) => {
    T.edges.forEach((A) => {
      A.id === c(i)?.id && (J(i, null), J(o, !1));
      const R = u(A.target);
      if (R && R.parentId) {
        const O = g(A.target), B = u(R.parentId);
        if (O.length === 0)
          r.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + B.position.x,
              y: R.position.y + B.position.y
            }
          });
        else {
          let G = !1;
          for (let Q = 0; Q < O.length; Q++) {
            const re = O[Q], X = u(re.source);
            if (X.parentId || X.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || r.updateNode(R.id, {
            parentId: void 0,
            position: {
              x: R.position.x + B.position.x,
              y: R.position.y + B.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: y } = Bb(), C = (T, A) => {
  }, w = (T) => {
  }, E = {
    // ...nodeTypes
  }, x = Gn().customNodes;
  if (x)
    for (let T of Object.keys(x))
      E[T] = df;
  const $ = Gn().onDataChange;
  nt(() => {
    $?.({
      nodes: Ge.getNodes(),
      edges: Ge.getEdges(),
      viewport: Ge.getViewport()
    });
  });
  var _ = Yb(), M = q(_);
  const V = /* @__PURE__ */ S(() => ({ ...Cb, ...E }));
  var Z = Ge.getNodes, U = Ge.setNodes, j = Ge.getEdges, N = Ge.setEdges, k = Ge.getViewport, L = Ge.setViewport;
  const b = /* @__PURE__ */ S(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ho.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  gd(M, {
    get nodeTypes() {
      return c(V);
    },
    get nodes() {
      return Z();
    },
    set nodes(T) {
      U(T);
    },
    get edges() {
      return j();
    },
    set edges(T) {
      N(T);
    },
    get viewport() {
      return k();
    },
    set viewport(T) {
      L(T);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: C,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (T) => {
      J(o, !0), J(i, T.edge, !0);
    },
    onbeforeconnect: (T) => ({ ...T, id: gr() }),
    ondelete: h,
    onclick: (T) => {
      const A = T.target;
      A.classList.contains("svelte-flow__edge-interaction") || A.classList.contains("panel-content") || A.closest(".panel-content") || (J(o, !1), J(i, null));
    },
    get defaultEdgeOptions() {
      return c(b);
    },
    children: (T, A) => {
      var R = jb(), O = de(R);
      kd(O, {});
      var B = H(O, 2);
      xd(B, {});
      var G = H(B, 2);
      Sd(G, {});
      var Q = H(G, 2);
      {
        var re = (X) => {
          Mo(X, {
            children: (W, Y) => {
              var ee = Kb(), F = H(q(ee), 4), ye = q(F);
              const ge = /* @__PURE__ */ S(() => c(i)?.data?.condition);
              We(ye, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return c(ge);
                },
                onchange: (ie) => {
                  c(i) && s(c(i).id, { condition: ie.target?.value });
                }
              }), I(F);
              var ae = H(F, 2), oe = q(ae);
              Oe(oe, {
                onclick: () => {
                  y(c(i)?.id), J(o, !1);
                },
                children: (ie, ve) => {
                  be();
                  var se = Ee("删除");
                  D(ie, se);
                },
                $$slots: { default: !0 }
              });
              var ce = H(oe, 2);
              Oe(ce, {
                primary: !0,
                onclick: () => {
                  J(o, !1);
                },
                children: (ie, ve) => {
                  be();
                  var se = Ee("保存");
                  D(ie, se);
                },
                $$slots: { default: !0 }
              }), I(ae), I(ee), D(W, ee);
            },
            $$slots: { default: !0 }
          });
        };
        ue(Q, (X) => {
          c(o) && X(re);
        });
      }
      D(T, R);
    },
    $$slots: { default: !0 }
  });
  var P = H(M, 2);
  return cf(P, {}), I(_), D(e, _), pe({
    get onInit() {
      return n();
    },
    set onInit(T) {
      n(T), v();
    }
  });
}
le(ff, { onInit: {} }, [], [], !0);
function Xb(e, t) {
  fe(t, !0);
  const n = m(t, "options", 7), r = m(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ge.init(o?.nodes || [], o?.edges || []), Lr("tinyflow_options", n()), hd(e, {
    children: (i, s) => {
      ff(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), pe({
    get options() {
      return n();
    },
    set options(i) {
      n(i), v();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), v();
    }
  });
}
customElements.define("tinyflow-component", le(Xb, { options: {}, onInit: {} }, [], [], !1));
const Jb = $f((e, t) => {
  const n = Ta(null), r = Ta(null);
  Cf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return kf(() => {
    if (n.current) {
      const a = new i2({
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
  Jb as Tinyflow
};
//# sourceMappingURL=index.js.map
