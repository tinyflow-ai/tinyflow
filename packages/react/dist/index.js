import iu, { forwardRef as Gf, useRef as Ka, useImperativeHandle as Jf, useEffect as Qf } from "react";
var Qo = { exports: {} }, so = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ba;
function ep() {
  if (Ba) return so;
  Ba = 1;
  var e = iu, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var d, p = {}, f = null, h = null;
    u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: f, ref: h, props: p, _owner: o.current };
  }
  return so.Fragment = n, so.jsx = s, so.jsxs = s, so;
}
var ao = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function tp() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && function() {
    var e = iu, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, w = "@@iterator";
    function y(z) {
      if (z === null || typeof z != "object")
        return null;
      var oe = m && z[m] || z[w];
      return typeof oe == "function" ? oe : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(z) {
      {
        for (var oe = arguments.length, he = new Array(oe > 1 ? oe - 1 : 0), Se = 1; Se < oe; Se++)
          he[Se - 1] = arguments[Se];
        $("error", z, he);
      }
    }
    function $(z, oe, he) {
      {
        var Se = b.ReactDebugCurrentFrame, Be = Se.getStackAddendum();
        Be !== "" && (oe += "%s", he = he.concat([Be]));
        var Ge = he.map(function(He) {
          return String(He);
        });
        Ge.unshift("Warning: " + oe), Function.prototype.apply.call(console[z], console, Ge);
      }
    }
    var C = !1, S = !1, N = !1, M = !1, j = !1, A;
    A = Symbol.for("react.module.reference");
    function I(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || j || z === o || z === u || z === d || M || z === h || C || S || N || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === p || z.$$typeof === s || z.$$typeof === a || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === A || z.getModuleId !== void 0));
    }
    function H(z, oe, he) {
      var Se = z.displayName;
      if (Se)
        return Se;
      var Be = oe.displayName || oe.name || "";
      return Be !== "" ? he + "(" + Be + ")" : he;
    }
    function k(z) {
      return z.displayName || "Context";
    }
    function T(z) {
      if (z == null)
        return null;
      if (typeof z.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof z == "function")
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
            var oe = z;
            return k(oe) + ".Consumer";
          case s:
            var he = z;
            return k(he._context) + ".Provider";
          case l:
            return H(z, z.render, "ForwardRef");
          case p:
            var Se = z.displayName || null;
            return Se !== null ? Se : T(z.type) || "Memo";
          case f: {
            var Be = z, Ge = Be._payload, He = Be._init;
            try {
              return T(He(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, E = 0, O, Z, Y, W, L, U, X;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function R() {
      {
        if (E === 0) {
          O = console.log, Z = console.info, Y = console.warn, W = console.error, L = console.group, U = console.groupCollapsed, X = console.groupEnd;
          var z = {
            configurable: !0,
            enumerable: !0,
            value: J,
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
        E++;
      }
    }
    function q() {
      {
        if (E--, E === 0) {
          var z = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, z, {
              value: O
            }),
            info: _({}, z, {
              value: Z
            }),
            warn: _({}, z, {
              value: Y
            }),
            error: _({}, z, {
              value: W
            }),
            group: _({}, z, {
              value: L
            }),
            groupCollapsed: _({}, z, {
              value: U
            }),
            groupEnd: _({}, z, {
              value: X
            })
          });
        }
        E < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = b.ReactCurrentDispatcher, ne;
    function re(z, oe, he) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Be) {
            var Se = Be.stack.trim().match(/\n( *(at )?)/);
            ne = Se && Se[1] || "";
          }
        return `
` + ne + z;
      }
    }
    var ee = !1, ve;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new ce();
    }
    function ie(z, oe) {
      if (!z || ee)
        return "";
      {
        var he = ve.get(z);
        if (he !== void 0)
          return he;
      }
      var Se;
      ee = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = G.current, G.current = null, R();
      try {
        if (oe) {
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
            } catch (Mt) {
              Se = Mt;
            }
            Reflect.construct(z, [], He);
          } else {
            try {
              He.call();
            } catch (Mt) {
              Se = Mt;
            }
            z.call(He.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mt) {
            Se = Mt;
          }
          z();
        }
      } catch (Mt) {
        if (Mt && Se && typeof Mt.stack == "string") {
          for (var De = Mt.stack.split(`
`), Pt = Se.stack.split(`
`), it = De.length - 1, lt = Pt.length - 1; it >= 1 && lt >= 0 && De[it] !== Pt[lt]; )
            lt--;
          for (; it >= 1 && lt >= 0; it--, lt--)
            if (De[it] !== Pt[lt]) {
              if (it !== 1 || lt !== 1)
                do
                  if (it--, lt--, lt < 0 || De[it] !== Pt[lt]) {
                    var qt = `
` + De[it].replace(" at new ", " at ");
                    return z.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", z.displayName)), typeof z == "function" && ve.set(z, qt), qt;
                  }
                while (it >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        ee = !1, G.current = Ge, q(), Error.prepareStackTrace = Be;
      }
      var Mr = z ? z.displayName || z.name : "", vr = Mr ? re(Mr) : "";
      return typeof z == "function" && ve.set(z, vr), vr;
    }
    function ae(z, oe, he) {
      return ie(z, !1);
    }
    function me(z) {
      var oe = z.prototype;
      return !!(oe && oe.isReactComponent);
    }
    function ge(z, oe, he) {
      if (z == null)
        return "";
      if (typeof z == "function")
        return ie(z, me(z));
      if (typeof z == "string")
        return re(z);
      switch (z) {
        case u:
          return re("Suspense");
        case d:
          return re("SuspenseList");
      }
      if (typeof z == "object")
        switch (z.$$typeof) {
          case l:
            return ae(z.render);
          case p:
            return ge(z.type, oe, he);
          case f: {
            var Se = z, Be = Se._payload, Ge = Se._init;
            try {
              return ge(Ge(Be), oe, he);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, de = {}, _e = b.ReactDebugCurrentFrame;
    function Le(z) {
      if (z) {
        var oe = z._owner, he = ge(z.type, z._source, oe ? oe.type : null);
        _e.setExtraStackFrame(he);
      } else
        _e.setExtraStackFrame(null);
    }
    function F(z, oe, he, Se, Be) {
      {
        var Ge = Function.call.bind(xe);
        for (var He in z)
          if (Ge(z, He)) {
            var De = void 0;
            try {
              if (typeof z[He] != "function") {
                var Pt = Error((Se || "React class") + ": " + he + " type `" + He + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof z[He] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              De = z[He](oe, He, Se, he, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (it) {
              De = it;
            }
            De && !(De instanceof Error) && (Le(Be), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", he, He, typeof De), Le(null)), De instanceof Error && !(De.message in de) && (de[De.message] = !0, Le(Be), x("Failed %s type: %s", he, De.message), Le(null));
          }
      }
    }
    var Ye = Array.isArray;
    function ze(z) {
      return Ye(z);
    }
    function Ze(z) {
      {
        var oe = typeof Symbol == "function" && Symbol.toStringTag, he = oe && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return he;
      }
    }
    function Ke(z) {
      try {
        return ot(z), !1;
      } catch {
        return !0;
      }
    }
    function ot(z) {
      return "" + z;
    }
    function _t(z) {
      if (Ke(z))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(z)), ot(z);
    }
    var Ue = b.ReactCurrentOwner, Ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, We;
    function vt(z) {
      if (xe.call(z, "ref")) {
        var oe = Object.getOwnPropertyDescriptor(z, "ref").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return z.ref !== void 0;
    }
    function qe(z) {
      if (xe.call(z, "key")) {
        var oe = Object.getOwnPropertyDescriptor(z, "key").get;
        if (oe && oe.isReactWarning)
          return !1;
      }
      return z.key !== void 0;
    }
    function Dt(z, oe) {
      typeof z.ref == "string" && Ue.current;
    }
    function rn(z, oe) {
      {
        var he = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(z, "key", {
          get: he,
          configurable: !0
        });
      }
    }
    function dt(z, oe) {
      {
        var he = function() {
          We || (We = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", oe));
        };
        he.isReactWarning = !0, Object.defineProperty(z, "ref", {
          get: he,
          configurable: !0
        });
      }
    }
    var yn = function(z, oe, he, Se, Be, Ge, He) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: z,
        key: oe,
        ref: he,
        props: He,
        // Record the component responsible for creating this element.
        _owner: Ge
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
        value: Se
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function wn(z, oe, he, Se, Be) {
      {
        var Ge, He = {}, De = null, Pt = null;
        he !== void 0 && (_t(he), De = "" + he), qe(oe) && (_t(oe.key), De = "" + oe.key), vt(oe) && (Pt = oe.ref, Dt(oe, Be));
        for (Ge in oe)
          xe.call(oe, Ge) && !Ie.hasOwnProperty(Ge) && (He[Ge] = oe[Ge]);
        if (z && z.defaultProps) {
          var it = z.defaultProps;
          for (Ge in it)
            He[Ge] === void 0 && (He[Ge] = it[Ge]);
        }
        if (De || Pt) {
          var lt = typeof z == "function" ? z.displayName || z.name || "Unknown" : z;
          De && rn(He, lt), Pt && dt(He, lt);
        }
        return yn(z, De, Pt, Be, Se, Ue.current, He);
      }
    }
    var Jn = b.ReactCurrentOwner, gr = b.ReactDebugCurrentFrame;
    function On(z) {
      if (z) {
        var oe = z._owner, he = ge(z.type, z._source, oe ? oe.type : null);
        gr.setExtraStackFrame(he);
      } else
        gr.setExtraStackFrame(null);
    }
    var io;
    io = !1;
    function on(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function Ha() {
      {
        if (Jn.current) {
          var z = T(Jn.current.type);
          if (z)
            return `

Check the render method of \`` + z + "`.";
        }
        return "";
      }
    }
    function jf(z) {
      return "";
    }
    var Aa = {};
    function Zf(z) {
      {
        var oe = Ha();
        if (!oe) {
          var he = typeof z == "string" ? z : z.displayName || z.name;
          he && (oe = `

Check the top-level render call using <` + he + ">.");
        }
        return oe;
      }
    }
    function Ia(z, oe) {
      {
        if (!z._store || z._store.validated || z.key != null)
          return;
        z._store.validated = !0;
        var he = Zf(oe);
        if (Aa[he])
          return;
        Aa[he] = !0;
        var Se = "";
        z && z._owner && z._owner !== Jn.current && (Se = " It was passed a child from " + T(z._owner.type) + "."), On(z), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', he, Se), On(null);
      }
    }
    function Ra(z, oe) {
      {
        if (typeof z != "object")
          return;
        if (ze(z))
          for (var he = 0; he < z.length; he++) {
            var Se = z[he];
            on(Se) && Ia(Se, oe);
          }
        else if (on(z))
          z._store && (z._store.validated = !0);
        else if (z) {
          var Be = y(z);
          if (typeof Be == "function" && Be !== z.entries)
            for (var Ge = Be.call(z), He; !(He = Ge.next()).done; )
              on(He.value) && Ia(He.value, oe);
        }
      }
    }
    function Kf(z) {
      {
        var oe = z.type;
        if (oe == null || typeof oe == "string")
          return;
        var he;
        if (typeof oe == "function")
          he = oe.propTypes;
        else if (typeof oe == "object" && (oe.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        oe.$$typeof === p))
          he = oe.propTypes;
        else
          return;
        if (he) {
          var Se = T(oe);
          F(he, z.props, "prop", Se, z);
        } else if (oe.PropTypes !== void 0 && !io) {
          io = !0;
          var Be = T(oe);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof oe.getDefaultProps == "function" && !oe.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bf(z) {
      {
        for (var oe = Object.keys(z.props), he = 0; he < oe.length; he++) {
          var Se = oe[he];
          if (Se !== "children" && Se !== "key") {
            On(z), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), On(null);
            break;
          }
        }
        z.ref !== null && (On(z), x("Invalid attribute `ref` supplied to `React.Fragment`."), On(null));
      }
    }
    var ja = {};
    function Za(z, oe, he, Se, Be, Ge) {
      {
        var He = I(z);
        if (!He) {
          var De = "";
          (z === void 0 || typeof z == "object" && z !== null && Object.keys(z).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = jf();
          Pt ? De += Pt : De += Ha();
          var it;
          z === null ? it = "null" : ze(z) ? it = "array" : z !== void 0 && z.$$typeof === t ? (it = "<" + (T(z.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : it = typeof z, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", it, De);
        }
        var lt = wn(z, oe, he, Be, Ge);
        if (lt == null)
          return lt;
        if (He) {
          var qt = oe.children;
          if (qt !== void 0)
            if (Se)
              if (ze(qt)) {
                for (var Mr = 0; Mr < qt.length; Mr++)
                  Ra(qt[Mr], z);
                Object.freeze && Object.freeze(qt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ra(qt, z);
        }
        if (xe.call(oe, "key")) {
          var vr = T(z), Mt = Object.keys(oe).filter(function(Uf) {
            return Uf !== "key";
          }), ls = Mt.length > 0 ? "{key: someKey, " + Mt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ja[vr + ls]) {
            var Xf = Mt.length > 0 ? "{" + Mt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ls, vr, Xf, vr), ja[vr + ls] = !0;
          }
        }
        return z === r ? Bf(lt) : Kf(lt), lt;
      }
    }
    function Yf(z, oe, he) {
      return Za(z, oe, he, !0);
    }
    function Wf(z, oe, he) {
      return Za(z, oe, he, !1);
    }
    var Ff = Wf, qf = Yf;
    ao.Fragment = r, ao.jsx = Ff, ao.jsxs = qf;
  }()), ao;
}
var Wa;
function np() {
  return Wa || (Wa = 1, process.env.NODE_ENV === "production" ? Qo.exports = ep() : Qo.exports = tp()), Qo.exports;
}
var rp = np();
const op = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(op);
const su = 1, au = 2, lu = 4, ip = 8, sp = 16, ap = 1, lp = 2, uu = 4, up = 8, cp = 16, cu = 1, dp = 2, du = "[", Ai = "[!", Gs = "]", $r = {}, mt = Symbol(), fp = "http://www.w3.org/1999/xhtml", pp = "http://www.w3.org/2000/svg", hp = "@attach", gp = !1;
var Ii = Array.isArray, vp = Array.prototype.indexOf, Js = Array.from, vi = Object.keys, mi = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, fu = Object.getOwnPropertyDescriptors, pu = Object.prototype, mp = Array.prototype, Ri = Object.getPrototypeOf, Fa = Object.isExtensible;
function lo(e) {
  return typeof e == "function";
}
const St = () => {
};
function yp(e) {
  return e();
}
function $s(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function hu() {
  var e, t, n = new Promise((r, o) => {
    e = r, t = o;
  });
  return { promise: n, resolve: e, reject: t };
}
function Nt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function Lo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const bt = 2, Qs = 4, ji = 8, gu = 1 << 24, Bn = 16, Yn = 32, cr = 64, Zi = 128, dn = 512, $t = 1024, At = 2048, Wn = 4096, Yt = 8192, An = 16384, Ki = 32768, Rn = 65536, qa = 1 << 17, vu = 1 << 18, Or = 1 << 19, mu = 1 << 20, wo = 32768, ks = 1 << 21, ea = 1 << 22, nr = 1 << 23, $n = Symbol("$state"), ta = Symbol("legacy props"), wp = Symbol(""), zr = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), bp = 1, Bi = 3, Tr = 8;
function na(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function xp() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function _p(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cp() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $p(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kp() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sp() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ep(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pp() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Np() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Op() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tp() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Vo(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Dp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Mp() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $e = !1;
function Bt(e) {
  $e = e;
}
let Te;
function ct(e) {
  if (e === null)
    throw Vo(), $r;
  return Te = e;
}
function jn() {
  return ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ hn(Te)
  );
}
function K(e) {
  if ($e) {
    if (/* @__PURE__ */ hn(Te) !== null)
      throw Vo(), $r;
    Te = e;
  }
}
function be(e = 1) {
  if ($e) {
    for (var t = e, n = Te; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n);
    Te = n;
  }
}
function yi(e = !0) {
  for (var t = 0, n = Te; ; ) {
    if (n.nodeType === Tr) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === Gs) {
        if (t === 0) return n;
        t -= 1;
      } else (r === du || r === Ai) && (t += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n)
    );
    e && n.remove(), n = o;
  }
}
function yu(e) {
  if (!e || e.nodeType !== Tr)
    throw Vo(), $r;
  return (
    /** @type {Comment} */
    e.data
  );
}
function wu(e) {
  return e === this.v;
}
function bu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xu(e) {
  return !bu(e, this.v);
}
let to = !1, Lp = !1;
function Vp() {
  to = !0;
}
const zp = [];
function _u(e, t = !1, n = !1) {
  return li(e, /* @__PURE__ */ new Map(), "", zp, null, n);
}
function li(e, t, n, r, o = null, i = !1) {
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
    if (Ii(e)) {
      var a = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, a), o !== null && t.set(o, a);
      for (var l = 0; l < e.length; l += 1) {
        var u = e[l];
        l in e && (a[l] = li(u, t, n, r, null, i));
      }
      return a;
    }
    if (Ri(e) === pu) {
      a = {}, t.set(e, a), o !== null && t.set(o, a);
      for (var d in e)
        a[d] = li(
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
      return li(
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
let tt = null;
function Kr(e) {
  tt = e;
}
function ir(e) {
  return (
    /** @type {T} */
    Cu().get(e)
  );
}
function Br(e, t) {
  return Cu().set(e, t), t;
}
function fe(e, t = !1, n) {
  tt = {
    p: tt,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: to && !t ? { s: null, u: null, $: [] } : null
  };
}
function pe(e) {
  var t = (
    /** @type {ComponentContext} */
    tt
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ju(r);
  }
  return e !== void 0 && (t.x = e), t.i = !0, tt = t.p, e ?? /** @type {T} */
  {};
}
function zo() {
  return !to || tt !== null && tt.l === null;
}
function Cu(e) {
  return tt === null && na(), tt.c ??= new Map(Hp(tt) || void 0);
}
function Hp(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let mr = [];
function $u() {
  var e = mr;
  mr = [], $s(e);
}
function dr(e) {
  if (mr.length === 0 && !vo) {
    var t = mr;
    queueMicrotask(() => {
      t === mr && $u();
    });
  }
  mr.push(e);
}
function Ap() {
  for (; mr.length > 0; )
    $u();
}
function ku(e) {
  var t = Me;
  if (t === null)
    return je.f |= nr, e;
  if ((t.f & Ki) === 0) {
    if ((t.f & Zi) === 0)
      throw e;
    t.b.error(e);
  } else
    Yr(e, t);
}
function Yr(e, t) {
  for (; t !== null; ) {
    if ((t.f & Zi) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const ei = /* @__PURE__ */ new Set();
let nt = null, Gt = null, Ut = [], Yi = null, Ss = !1, vo = !1;
class un {
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
  #l = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #a = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #o = [];
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
  process(t) {
    Ut = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      this.#i(r, n);
    this.is_fork || this.#c(), this.is_deferred() ? (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects)) : (nt = null, Xa(n.render_effects), Xa(n.effects), this.#l?.resolve()), Gt = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {EffectTarget} target
   */
  #i(t, n) {
    t.f ^= $t;
    for (var r = t.first; r !== null; ) {
      var o = r.f, i = (o & (Yn | cr)) !== 0, s = i && (o & $t) !== 0, a = s || (o & Yt) !== 0 || this.skipped_effects.has(r);
      if ((r.f & Zi) !== 0 && r.b?.is_pending() && (n = {
        parent: n,
        effect: r,
        effects: [],
        render_effects: [],
        block_effects: []
      }), !a && r.fn !== null) {
        i ? r.f ^= $t : (o & Qs) !== 0 ? n.effects.push(r) : Io(r) && ((r.f & Bn) !== 0 && n.block_effects.push(r), _o(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        u === n.effect && (this.#s(n.effects), this.#s(n.render_effects), this.#s(n.block_effects), n = /** @type {EffectTarget} */
        n.parent), r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(t) {
    for (const n of t)
      ((n.f & At) !== 0 ? this.#a : this.#o).push(n), this.#u(n.deps), kt(n, $t);
  }
  /**
   * @param {Value[] | null} deps
   */
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & bt) === 0 || (n.f & wo) === 0 || (n.f ^= wo, this.#u(
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
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & nr) === 0 && (this.current.set(t, t.v), Gt?.set(t, t.v));
  }
  activate() {
    nt = this, this.apply();
  }
  deactivate() {
    nt === this && (nt = null, Gt = null);
  }
  flush() {
    if (this.activate(), Ut.length > 0) {
      if (Su(), nt !== null && nt !== this)
        return;
    } else this.#n === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#t) t(this);
    this.#t.clear();
  }
  #c() {
    if (this.#r === 0) {
      for (const t of this.#e) t();
      this.#e.clear();
    }
    this.#n === 0 && this.#d();
  }
  #d() {
    if (ei.size > 1) {
      this.previous.clear();
      var t = Gt, n = !0, r = {
        parent: null,
        effect: null,
        effects: [],
        render_effects: [],
        block_effects: []
      };
      for (const i of ei) {
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
          var o = Ut;
          Ut = [];
          const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
          for (const d of s)
            Eu(d, a, l, u);
          if (Ut.length > 0) {
            nt = i, i.apply();
            for (const d of Ut)
              i.#i(d, r);
            i.deactivate();
          }
          Ut = o;
        }
      }
      nt = null, Gt = t;
    }
    this.committed = !0, ei.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#n += 1, t && (this.#r += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#n -= 1, t && (this.#r -= 1), this.revive();
  }
  revive() {
    for (const t of this.#a)
      kt(t, At), kr(t);
    for (const t of this.#o)
      kt(t, Wn), kr(t);
    this.#a = [], this.#o = [], this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#e.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#t.add(t);
  }
  settled() {
    return (this.#l ??= hu()).promise;
  }
  static ensure() {
    if (nt === null) {
      const t = nt = new un();
      ei.add(nt), vo || un.enqueue(() => {
        nt === t && t.flush();
      });
    }
    return nt;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    dr(t);
  }
  apply() {
  }
}
function g(e) {
  var t = vo;
  vo = !0;
  try {
    for (var n; ; ) {
      if (Ap(), Ut.length === 0 && (nt?.flush(), Ut.length === 0))
        return Yi = null, /** @type {T} */
        n;
      Su();
    }
  } finally {
    vo = t;
  }
}
function Su() {
  var e = or;
  Ss = !0;
  try {
    var t = 0;
    for (bi(!0); Ut.length > 0; ) {
      var n = un.ensure();
      if (t++ > 1e3) {
        var r, o;
        Ip();
      }
      n.process(Ut), rr.clear();
    }
  } finally {
    Ss = !1, bi(e), Yi = null;
  }
}
function Ip() {
  try {
    kp();
  } catch (e) {
    Yr(e, Yi);
  }
}
let Dn = null;
function Xa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (An | Yt)) === 0 && Io(r) && (Dn = /* @__PURE__ */ new Set(), _o(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Fu(r) : r.fn = null), Dn?.size > 0)) {
        rr.clear();
        for (const o of Dn) {
          if ((o.f & (An | Yt)) !== 0) continue;
          const i = [o];
          let s = o.parent;
          for (; s !== null; )
            Dn.has(s) && (Dn.delete(s), i.push(s)), s = s.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const l = i[a];
            (l.f & (An | Yt)) === 0 && _o(l);
          }
        }
        Dn.clear();
      }
    }
    Dn = null;
  }
}
function Eu(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const o of e.reactions) {
      const i = o.f;
      (i & bt) !== 0 ? Eu(
        /** @type {Derived} */
        o,
        t,
        n,
        r
      ) : (i & (ea | Bn)) !== 0 && (i & At) === 0 && Pu(o, t, r) && (kt(o, At), kr(
        /** @type {Effect} */
        o
      ));
    }
}
function Pu(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const o of e.deps) {
      if (t.includes(o))
        return !0;
      if ((o.f & bt) !== 0 && Pu(
        /** @type {Derived} */
        o,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          o,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function kr(e) {
  for (var t = Yi = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ss && t === Me && (n & Bn) !== 0 && (n & vu) === 0)
      return;
    if ((n & (cr | Yn)) !== 0) {
      if ((n & $t) === 0) return;
      t.f ^= $t;
    }
  }
  Ut.push(t);
}
function Nu(e) {
  let t = 0, n = sr(0), r;
  return () => {
    bo() && (c(n), Ao(() => (t === 0 && (r = yt(() => e(() => mo(n)))), t += 1, () => {
      dr(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, mo(n));
      });
    })));
  };
}
var Rp = Rn | Or | Zi;
function jp(e, t, n) {
  new Zp(e, t, n);
}
class Zp {
  /** @type {Boundary | null} */
  parent;
  #e = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #n = $e ? Te : null;
  /** @type {BoundaryProps} */
  #r;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #a;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #u = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #d = 0;
  #f = 0;
  #h = !1;
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #p = null;
  #w = Nu(() => (this.#p = sr(this.#d), () => {
    this.#p = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#r = n, this.#l = r, this.parent = /** @type {Effect} */
    Me.b, this.#e = !!this.#r.pending, this.#a = ro(() => {
      if (Me.b = this, $e) {
        const i = this.#n;
        jn(), /** @type {Comment} */
        i.nodeType === Tr && /** @type {Comment} */
        i.data === Ai ? this.#x() : this.#b();
      } else {
        var o = this.#m();
        try {
          this.#o = Kt(() => r(o));
        } catch (i) {
          this.error(i);
        }
        this.#f > 0 ? this.#v() : this.#e = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, Rp), $e && (this.#t = Te);
  }
  #b() {
    try {
      this.#o = Kt(() => this.#l(this.#t));
    } catch (t) {
      this.error(t);
    }
    this.#e = !1;
  }
  #x() {
    const t = this.#r.pending;
    t && (this.#i = Kt(() => t(this.#t)), un.enqueue(() => {
      var n = this.#m();
      this.#o = this.#g(() => (un.ensure(), Kt(() => this.#l(n)))), this.#f > 0 ? this.#v() : (Ar(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#e = !1);
    }));
  }
  #m() {
    var t = this.#t;
    return this.#e && (this.#c = It(), this.#t.before(this.#c), t = this.#c), t;
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
  #g(t) {
    var n = Me, r = je, o = tt;
    en(this.#a), Vt(this.#a), Kr(this.#a.ctx);
    try {
      return t();
    } catch (i) {
      return ku(i), null;
    } finally {
      en(n), Vt(r), Kr(o);
    }
  }
  #v() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#r.pending
    );
    this.#o !== null && (this.#u = document.createDocumentFragment(), this.#u.append(
      /** @type {TemplateNode} */
      this.#c
    ), Uu(this.#o, this.#u)), this.#i === null && (this.#i = Kt(() => t(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #y(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(t);
      return;
    }
    this.#f += t, this.#f === 0 && (this.#e = !1, this.#i && Ar(this.#i, () => {
      this.#i = null;
    }), this.#u && (this.#t.before(this.#u), this.#u = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#y(t), this.#d += t, this.#p && Fr(this.#p, this.#d);
  }
  get_effect_pending() {
    return this.#w(), c(
      /** @type {Source<number>} */
      this.#p
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#r.onerror;
    let r = this.#r.failed;
    if (this.#h || !n && !r)
      throw t;
    this.#o && (ht(this.#o), this.#o = null), this.#i && (ht(this.#i), this.#i = null), this.#s && (ht(this.#s), this.#s = null), $e && (ct(
      /** @type {TemplateNode} */
      this.#n
    ), be(), ct(yi()));
    var o = !1, i = !1;
    const s = () => {
      if (o) {
        Mp();
        return;
      }
      o = !0, i && Tp(), un.ensure(), this.#d = 0, this.#s !== null && Ar(this.#s, () => {
        this.#s = null;
      }), this.#e = this.has_pending_snippet(), this.#o = this.#g(() => (this.#h = !1, Kt(() => this.#l(this.#t)))), this.#f > 0 ? this.#v() : this.#e = !1;
    };
    var a = je;
    try {
      Vt(null), i = !0, n?.(t, s), i = !1;
    } catch (l) {
      Yr(l, this.#a && this.#a.parent);
    } finally {
      Vt(a);
    }
    r && dr(() => {
      this.#s = this.#g(() => {
        un.ensure(), this.#h = !0;
        try {
          return Kt(() => {
            r(
              this.#t,
              () => t,
              () => s
            );
          });
        } catch (l) {
          return Yr(
            l,
            /** @type {Effect} */
            this.#a.parent
          ), null;
        } finally {
          this.#h = !1;
        }
      });
    });
  }
}
function Wr(e, t) {
  return t;
}
function Kp(e, t, n) {
  for (var r = [], o = t.length, i = 0; i < o; i++)
    la(t[i].e, r, !0);
  qu(r, () => {
    var s = r.length === 0 && n !== null;
    if (s) {
      var a = (
        /** @type {Element} */
        n
      ), l = (
        /** @type {Element} */
        a.parentNode
      );
      ia(l), l.append(a), e.items.clear(), sn(e, t[0].prev, t[o - 1].next);
    }
    for (var u = 0; u < o; u++) {
      var d = t[u];
      s || (e.items.delete(d.k), sn(e, d.prev, d.next)), ht(d.e, !s);
    }
    e.first === t[0] && (e.first = t[0].prev);
  });
}
function Et(e, t, n, r, o, i = null) {
  var s = e, a = /* @__PURE__ */ new Map(), l = null, u = (t & lu) !== 0, d = (t & su) !== 0, p = (t & au) !== 0;
  if (u) {
    var f = (
      /** @type {Element} */
      e
    );
    s = $e ? ct(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ft(f)
    ) : f.appendChild(It());
  }
  $e && jn();
  var h = null, m = /* @__PURE__ */ ra(() => {
    var C = n();
    return Ii(C) ? C : C == null ? [] : Js(C);
  }), w, y = !0;
  function b() {
    Bp($, w, s, t, r), h !== null && (w.length === 0 ? (h.fragment ? (s.before(h.fragment), h.fragment = null) : ua(h.effect), x.first = h.effect) : Ar(h.effect, () => {
      h = null;
    }));
  }
  var x = ro(() => {
    w = /** @type {V[]} */
    c(m);
    var C = w.length;
    let S = !1;
    if ($e) {
      var N = yu(s) === Ai;
      N !== (C === 0) && (s = yi(), ct(s), Bt(!1), S = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), j = (
      /** @type {Batch} */
      nt
    ), A = null, I = Iu(), H = 0; H < C; H += 1) {
      $e && Te.nodeType === Tr && /** @type {Comment} */
      Te.data === Gs && (s = /** @type {Comment} */
      Te, S = !0, Bt(!1));
      var k = w[H], T = r(k, H), _ = y ? null : a.get(T);
      _ ? (d && Fr(_.v, k), p ? Fr(
        /** @type {Value<number>} */
        _.i,
        H
      ) : _.i = H, I && j.skipped_effects.delete(_.e)) : (_ = Yp(
        y ? s : null,
        A,
        k,
        T,
        H,
        o,
        t,
        n
      ), y && (_.o = !0, A === null ? l = _ : A.next = _, A = _), a.set(T, _)), M.add(T);
    }
    if (C === 0 && i && !h)
      if (y)
        h = {
          fragment: null,
          effect: Kt(() => i(s))
        };
      else {
        var E = document.createDocumentFragment(), O = It();
        E.append(O), h = {
          fragment: E,
          effect: Kt(() => i(O))
        };
      }
    if ($e && C > 0 && ct(yi()), !y)
      if (I) {
        for (const [Z, Y] of a)
          M.has(Z) || j.skipped_effects.add(Y.e);
        j.oncommit(b), j.ondiscard(() => {
        });
      } else
        b();
    S && Bt(!0), c(m);
  }), $ = { effect: x, items: a, first: l };
  y = !1, $e && (s = Te);
}
function Bp(e, t, n, r, o) {
  var i = (r & ip) !== 0, s = t.length, a = e.items, l = e.first, u, d = null, p, f = [], h = [], m, w, y, b;
  if (i)
    for (b = 0; b < s; b += 1)
      m = t[b], w = o(m, b), y = /** @type {EachItem} */
      a.get(w), y.o && (y.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(y));
  for (b = 0; b < s; b += 1) {
    if (m = t[b], w = o(m, b), y = /** @type {EachItem} */
    a.get(w), e.first ??= y, !y.o) {
      y.o = !0;
      var x = d ? d.next : l;
      sn(e, d, y), sn(e, y, x), us(y, x, n), d = y, f = [], h = [], l = d.next;
      continue;
    }
    if ((y.e.f & Yt) !== 0 && (ua(y.e), i && (y.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(y))), y !== l) {
      if (u !== void 0 && u.has(y)) {
        if (f.length < h.length) {
          var $ = h[0], C;
          d = $.prev;
          var S = f[0], N = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            us(f[C], $, n);
          for (C = 0; C < h.length; C += 1)
            u.delete(h[C]);
          sn(e, S.prev, N.next), sn(e, d, S), sn(e, N, $), l = $, d = N, b -= 1, f = [], h = [];
        } else
          u.delete(y), us(y, l, n), sn(e, y.prev, y.next), sn(e, y, d === null ? e.first : d.next), sn(e, d, y), d = y;
        continue;
      }
      for (f = [], h = []; l !== null && l.k !== w; )
        (l.e.f & Yt) === 0 && (u ??= /* @__PURE__ */ new Set()).add(l), h.push(l), l = l.next;
      if (l === null)
        continue;
      y = l;
    }
    f.push(y), d = y, l = y.next;
  }
  let M = a.size > s;
  if (l !== null || u !== void 0) {
    for (var j = u === void 0 ? [] : Js(u); l !== null; )
      (l.e.f & Yt) === 0 && j.push(l), l = l.next;
    var A = j.length;
    if (M = a.size - A > s, A > 0) {
      var I = (r & lu) !== 0 && s === 0 ? n : null;
      if (i) {
        for (b = 0; b < A; b += 1)
          j[b].a?.measure();
        for (b = 0; b < A; b += 1)
          j[b].a?.fix();
      }
      Kp(e, j, I);
    }
  }
  if (M)
    for (const H of a.values())
      H.o || (sn(e, d, H), d = H);
  e.effect.last = d && d.e, i && dr(() => {
    if (p !== void 0)
      for (y of p)
        y.a?.apply();
  });
}
function Yp(e, t, n, r, o, i, s, a) {
  var l = (s & su) !== 0, u = (s & sp) === 0, d = l ? u ? /* @__PURE__ */ Lu(n, !1, !1) : sr(n) : n, p = (s & au) === 0 ? o : sr(o), f = {
    i: p,
    v: d,
    k: r,
    a: null,
    // @ts-expect-error
    e: null,
    o: !1,
    prev: t,
    next: null
  };
  try {
    if (e === null) {
      var h = document.createDocumentFragment();
      h.append(e = It());
    }
    return f.e = Kt(() => i(
      /** @type {Node} */
      e,
      d,
      p,
      a
    )), t !== null && (t.next = f), f;
  } finally {
  }
}
function us(e, t, n) {
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
      /* @__PURE__ */ hn(i)
    );
    o.before(i), i = s;
  }
}
function sn(e, t, n) {
  t === null ? (e.first = n, e.effect.first = n && n.e) : (t.e.next && (t.e.next.prev = null), t.next = n, t.e.next = n && n.e), n !== null && (n.e.prev && (n.e.prev.next = null), n.prev = t, n.e.prev = t && t.e);
}
function Ou(e, t, n, r) {
  const o = zo() ? Ho : ra;
  if (n.length === 0 && e.length === 0) {
    r(t.map(o));
    return;
  }
  var i = nt, s = (
    /** @type {Effect} */
    Me
  ), a = Wp();
  function l() {
    Promise.all(n.map((u) => /* @__PURE__ */ Fp(u))).then((u) => {
      a();
      try {
        r([...t.map(o), ...u]);
      } catch (d) {
        (s.f & An) === 0 && Yr(d, s);
      }
      i?.deactivate(), wi();
    }).catch((u) => {
      Yr(u, s);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    a();
    try {
      return l();
    } finally {
      i?.deactivate(), wi();
    }
  }) : l();
}
function Wp() {
  var e = Me, t = je, n = tt, r = nt;
  return function(o = !0) {
    en(e), Vt(t), Kr(n), o && r?.activate();
  };
}
function wi() {
  en(null), Vt(null), Kr(null);
}
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  var t = bt | At, n = je !== null && (je.f & bt) !== 0 ? (
    /** @type {Derived} */
    je
  ) : null;
  return Me !== null && (Me.f |= Or), {
    ctx: tt,
    deps: null,
    effects: null,
    equals: wu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      mt
    ),
    wv: 0,
    parent: n ?? Me,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Fp(e, t) {
  let n = (
    /** @type {Effect | null} */
    Me
  );
  n === null && xp();
  var r = (
    /** @type {Boundary} */
    n.b
  ), o = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = sr(
    /** @type {V} */
    mt
  ), s = !je, a = /* @__PURE__ */ new Map();
  return nh(() => {
    var l = hu();
    o = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        u === nt && u.committed && u.deactivate(), wi();
      });
    } catch (f) {
      l.reject(f), wi();
    }
    var u = (
      /** @type {Batch} */
      nt
    );
    if (s) {
      var d = !r.is_pending();
      r.update_pending_count(1), u.increment(d), a.get(u)?.reject(zr), a.delete(u), a.set(u, l);
    }
    const p = (f, h = void 0) => {
      if (u.activate(), h)
        h !== zr && (i.f |= nr, Fr(i, h));
      else {
        (i.f & nr) !== 0 && (i.f ^= nr), Fr(i, f);
        for (const [m, w] of a) {
          if (a.delete(m), m === u) break;
          w.reject(zr);
        }
      }
      s && (r.update_pending_count(-1), u.decrement(d));
    };
    l.promise.then(p, (f) => p(null, f || "unknown"));
  }), Wi(() => {
    for (const l of a.values())
      l.reject(zr);
  }), new Promise((l) => {
    function u(d) {
      function p() {
        d === o ? l(i) : u(o);
      }
      d.then(p, p);
    }
    u(o);
  });
}
// @__NO_SIDE_EFFECTS__
function P(e) {
  const t = /* @__PURE__ */ Ho(e);
  return Gu(t), t;
}
// @__NO_SIDE_EFFECTS__
function ra(e) {
  const t = /* @__PURE__ */ Ho(e);
  return t.equals = xu, t;
}
function Tu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ht(
        /** @type {Effect} */
        t[n]
      );
  }
}
function qp(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & bt) === 0)
      return (t.f & An) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function oa(e) {
  var t, n = Me;
  en(qp(e));
  try {
    e.f &= ~wo, Tu(e), t = tc(e);
  } finally {
    en(n);
  }
  return t;
}
function Du(e) {
  var t = oa(e);
  if (e.equals(t) || (nt?.is_fork || (e.v = t), e.wv = Qu()), !Dr)
    if (Gt !== null)
      (bo() || nt?.is_fork) && Gt.set(e, t);
    else {
      var n = (e.f & dn) === 0 ? Wn : $t;
      kt(e, n);
    }
}
let Es = /* @__PURE__ */ new Set();
const rr = /* @__PURE__ */ new Map();
let Mu = !1;
function sr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Oe(e, t) {
  const n = sr(e);
  return Gu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Lu(e, t = !1, n = !0) {
  const r = sr(e);
  return t || (r.equals = xu), to && n && tt !== null && tt.l !== null && (tt.l.s ??= []).push(r), r;
}
function Q(e, t, n = !1) {
  je !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Cn || (je.f & qa) !== 0) && zo() && (je.f & (bt | Bn | ea | qa)) !== 0 && !In?.includes(e) && Op();
  let r = n ? Qt(t) : t;
  return Fr(e, r);
}
function Fr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Dr ? rr.set(e, t) : rr.set(e, n), e.v = t;
    var r = un.ensure();
    r.capture(e, n), (e.f & bt) !== 0 && ((e.f & At) !== 0 && oa(
      /** @type {Derived} */
      e
    ), kt(e, (e.f & dn) !== 0 ? $t : Wn)), e.wv = Qu(), Vu(e, At), zo() && Me !== null && (Me.f & $t) !== 0 && (Me.f & (Yn | cr)) === 0 && (Xt === null ? oh([e]) : Xt.push(e)), !r.is_fork && Es.size > 0 && !Mu && Xp();
  }
  return t;
}
function Xp() {
  Mu = !1;
  var e = or;
  bi(!0);
  const t = Array.from(Es);
  try {
    for (const n of t)
      (n.f & $t) !== 0 && kt(n, Wn), Io(n) && _o(n);
  } finally {
    bi(e);
  }
  Es.clear();
}
function Ua(e, t = 1) {
  var n = c(e), r = t === 1 ? n++ : n--;
  return Q(e, n), r;
}
function mo(e) {
  Q(e, e.v + 1);
}
function Vu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = zo(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      if (!(!r && s === Me)) {
        var l = (a & At) === 0;
        if (l && kt(s, t), (a & bt) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          Gt?.delete(u), (a & wo) === 0 && (a & dn && (s.f |= wo), Vu(u, Wn));
        } else l && ((a & Bn) !== 0 && Dn !== null && Dn.add(
          /** @type {Effect} */
          s
        ), kr(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Qt(e) {
  if (typeof e != "object" || e === null || $n in e)
    return e;
  const t = Ri(e);
  if (t !== pu && t !== mp)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Ii(e), o = /* @__PURE__ */ Oe(0), i = br, s = (a) => {
    if (br === i)
      return a();
    var l = je, u = br;
    Vt(null), el(i);
    var d = a();
    return Vt(l), el(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Oe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Pp();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Oe(u.value);
          return n.set(l, p), p;
        }) : Q(d, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in a) {
            const d = s(() => /* @__PURE__ */ Oe(mt));
            n.set(l, d), mo(o);
          }
        } else
          Q(u, mt), mo(o);
        return !0;
      },
      get(a, l, u) {
        if (l === $n)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Hn(a, l)?.writable) && (d = s(() => {
          var h = Qt(p ? a[l] : mt), m = /* @__PURE__ */ Oe(h);
          return m;
        }), n.set(l, d)), d !== void 0) {
          var f = c(d);
          return f === mt ? void 0 : f;
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
          if (p !== void 0 && f !== mt)
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
        if (l === $n)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== mt || Reflect.has(a, l);
        if (u !== void 0 || Me !== null && (!d || Hn(a, l)?.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? Qt(a[l]) : mt, h = /* @__PURE__ */ Oe(f);
            return h;
          }), n.set(l, u));
          var p = c(u);
          if (p === mt)
            return !1;
        }
        return d;
      },
      set(a, l, u, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          p.v; h += 1) {
            var m = n.get(h + "");
            m !== void 0 ? Q(m, mt) : h in a && (m = s(() => /* @__PURE__ */ Oe(mt)), n.set(h + "", m));
          }
        if (p === void 0)
          (!f || Hn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Oe(void 0)), Q(p, Qt(u)), n.set(l, p));
        else {
          f = p.v !== mt;
          var w = s(() => Qt(u));
          Q(p, w);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, l);
        if (y?.set && y.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), x = Number(l);
            Number.isInteger(x) && x >= b.v && Q(b, x + 1);
          }
          mo(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== mt;
        });
        for (var [u, d] of n)
          d.v !== mt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Np();
      }
    }
  );
}
function Ga(e) {
  try {
    if (e !== null && typeof e == "object" && $n in e)
      return e[$n];
  } catch {
  }
  return e;
}
function Up(e, t) {
  return Object.is(Ga(e), Ga(t));
}
var Lt, zu, Hu, Au;
function Ps() {
  if (Lt === void 0) {
    Lt = window, zu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Hu = Hn(t, "firstChild").get, Au = Hn(t, "nextSibling").get, Fa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fa(n) && (n.__t = void 0);
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return Hu.call(e);
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return Au.call(e);
}
function B(e, t) {
  if (!$e)
    return /* @__PURE__ */ ft(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ft(Te)
  );
  if (n === null)
    n = Te.appendChild(It());
  else if (t && n.nodeType !== Bi) {
    var r = It();
    return n?.before(r), ct(r), r;
  }
  return ct(n), n;
}
function se(e, t = !1) {
  if (!$e) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ft(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ hn(n) : n;
  }
  if (t && Te?.nodeType !== Bi) {
    var r = It();
    return Te?.before(r), ct(r), r;
  }
  return Te;
}
function V(e, t = 1, n = !1) {
  let r = $e ? Te : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ hn(r);
  if (!$e)
    return r;
  if (n && r?.nodeType !== Bi) {
    var i = It();
    return r === null ? o?.after(i) : r.before(i), ct(i), i;
  }
  return ct(r), /** @type {TemplateNode} */
  r;
}
function ia(e) {
  e.textContent = "";
}
function Iu() {
  return !1;
}
function Gp(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, dr(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Jp(e) {
  $e && /* @__PURE__ */ ft(e) !== null && ia(e);
}
let Ja = !1;
function Qp() {
  Ja || (Ja = !0, document.addEventListener(
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
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function sa(e) {
  var t = je, n = Me;
  Vt(null), en(null);
  try {
    return e();
  } finally {
    Vt(t), en(n);
  }
}
function Ru(e) {
  Me === null && (je === null && $p(), Cp()), Dr && _p();
}
function eh(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function tn(e, t, n) {
  var r = Me;
  r !== null && (r.f & Yt) !== 0 && (e |= Yt);
  var o = {
    ctx: tt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | At | dn,
    first: null,
    fn: t,
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
      _o(o), o.f |= Ki;
    } catch (a) {
      throw ht(o), a;
    }
  else t !== null && kr(o);
  var i = o;
  if (n && i.deps === null && i.teardown === null && i.nodes_start === null && i.first === i.last && // either `null`, or a singular child
  (i.f & Or) === 0 && (i = i.first, (e & Bn) !== 0 && (e & Rn) !== 0 && i !== null && (i.f |= Rn)), i !== null && (i.parent = r, r !== null && eh(i, r), je !== null && (je.f & bt) !== 0 && (e & cr) === 0)) {
    var s = (
      /** @type {Derived} */
      je
    );
    (s.effects ??= []).push(i);
  }
  return o;
}
function bo() {
  return je !== null && !Cn;
}
function Wi(e) {
  const t = tn(ji, null, !1);
  return kt(t, $t), t.teardown = e, t;
}
function rt(e) {
  Ru();
  var t = (
    /** @type {Effect} */
    Me.f
  ), n = !je && (t & Yn) !== 0 && (t & Ki) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      tt
    );
    (r.e ??= []).push(e);
  } else
    return ju(e);
}
function ju(e) {
  return tn(Qs | mu, e, !1);
}
function Zu(e) {
  return Ru(), tn(ji | mu, e, !0);
}
function aa(e) {
  un.ensure();
  const t = tn(cr | Or, e, !0);
  return () => {
    ht(t);
  };
}
function th(e) {
  un.ensure();
  const t = tn(cr | Or, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ar(t, () => {
      ht(t), r(void 0);
    }) : (ht(t), r(void 0));
  });
}
function no(e) {
  return tn(Qs, e, !1);
}
function nh(e) {
  return tn(ea | Or, e, !0);
}
function Ao(e, t = 0) {
  return tn(ji | t, e, !0);
}
function Ee(e, t = [], n = [], r = []) {
  Ou(r, t, n, (o) => {
    tn(ji, () => e(...o.map(c)), !0);
  });
}
function ro(e, t = 0) {
  var n = tn(Bn | t, e, !0);
  return n;
}
function Ku(e, t = 0) {
  var n = tn(gu | t, e, !0);
  return n;
}
function Kt(e) {
  return tn(Yn | Or, e, !0);
}
function Bu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Dr, r = je;
    Qa(!0), Vt(null);
    try {
      t.call(null);
    } finally {
      Qa(n), Vt(r);
    }
  }
}
function Yu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const o = n.ac;
    o !== null && sa(() => {
      o.abort(zr);
    });
    var r = n.next;
    (n.f & cr) !== 0 ? n.parent = null : ht(n, t), n = r;
  }
}
function rh(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Yn) === 0 && ht(t), t = n;
  }
}
function ht(e, t = !0) {
  var n = !1;
  (t || (e.f & vu) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Wu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Yu(e, t && !n), xi(e, 0), kt(e, An);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  Bu(e);
  var o = e.parent;
  o !== null && o.first !== null && Fu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Wu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(e)
    );
    e.remove(), e = n;
  }
}
function Fu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ar(e, t, n = !0) {
  var r = [];
  la(e, r, !0), qu(r, () => {
    n && ht(e), t && t();
  });
}
function qu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function la(e, t, n) {
  if ((e.f & Yt) === 0) {
    if (e.f ^= Yt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Rn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Yn) !== 0 && (e.f & Bn) !== 0;
      la(r, t, i ? n : !1), r = o;
    }
  }
}
function ua(e) {
  Xu(e, !0);
}
function Xu(e, t) {
  if ((e.f & Yt) !== 0) {
    e.f ^= Yt, (e.f & $t) === 0 && (kt(e, At), kr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Rn) !== 0 || (n.f & Yn) !== 0;
      Xu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Uu(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var o = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ hn(n)
    );
    t.append(n), n = o;
  }
}
let or = !1;
function bi(e) {
  or = e;
}
let Dr = !1;
function Qa(e) {
  Dr = e;
}
let je = null, Cn = !1;
function Vt(e) {
  je = e;
}
let Me = null;
function en(e) {
  Me = e;
}
let In = null;
function Gu(e) {
  je !== null && (In === null ? In = [e] : In.push(e));
}
let Ot = null, Zt = 0, Xt = null;
function oh(e) {
  Xt = e;
}
let Ju = 1, xo = 0, br = xo;
function el(e) {
  br = e;
}
function Qu() {
  return ++Ju;
}
function Io(e) {
  var t = e.f;
  if ((t & At) !== 0)
    return !0;
  if (t & bt && (e.f &= -32769), (t & Wn) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, o = 0; o < r; o++) {
        var i = n[o];
        if (Io(
          /** @type {Derived} */
          i
        ) && Du(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
      }
    (t & dn) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Gt === null && kt(e, $t);
  }
  return !1;
}
function ec(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !In?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & bt) !== 0 ? ec(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? kt(i, At) : (i.f & $t) !== 0 && kt(i, Wn), kr(
        /** @type {Effect} */
        i
      ));
    }
}
function tc(e) {
  var t = Ot, n = Zt, r = Xt, o = je, i = In, s = tt, a = Cn, l = br, u = e.f;
  Ot = /** @type {null | Value[]} */
  null, Zt = 0, Xt = null, je = (u & (Yn | cr)) === 0 ? e : null, In = null, Kr(e.ctx), Cn = !1, br = ++xo, e.ac !== null && (sa(() => {
    e.ac.abort(zr);
  }), e.ac = null);
  try {
    e.f |= ks;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), f = e.deps;
    if (Ot !== null) {
      var h;
      if (xi(e, Zt), f !== null && Zt > 0)
        for (f.length = Zt + Ot.length, h = 0; h < Ot.length; h++)
          f[Zt + h] = Ot[h];
      else
        e.deps = f = Ot;
      if (or && bo() && (e.f & dn) !== 0)
        for (h = Zt; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && Zt < f.length && (xi(e, Zt), f.length = Zt);
    if (zo() && Xt !== null && !Cn && f !== null && (e.f & (bt | Wn | At)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Xt.length; h++)
        ec(
          Xt[h],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (xo++, Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
    Xt))), (e.f & nr) !== 0 && (e.f ^= nr), p;
  } catch (m) {
    return ku(m);
  } finally {
    e.f ^= ks, Ot = t, Zt = n, Xt = r, je = o, In = i, Kr(s), Cn = a, br = l;
  }
}
function ih(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = vp.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & bt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ot === null || !Ot.includes(t)) && (kt(t, Wn), (t.f & dn) !== 0 && (t.f ^= dn, t.f &= -32769), Tu(
    /** @type {Derived} **/
    t
  ), xi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function xi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ih(e, n[r]);
}
function _o(e) {
  var t = e.f;
  if ((t & An) === 0) {
    kt(e, $t);
    var n = Me, r = or;
    Me = e, or = !0;
    try {
      (t & (Bn | gu)) !== 0 ? rh(e) : Yu(e), Bu(e);
      var o = tc(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ju;
      var i;
      gp && Lp && (e.f & At) !== 0 && e.deps;
    } finally {
      or = r, Me = n;
    }
  }
}
function c(e) {
  var t = e.f, n = (t & bt) !== 0;
  if (je !== null && !Cn) {
    var r = Me !== null && (Me.f & An) !== 0;
    if (!r && !In?.includes(e)) {
      var o = je.deps;
      if ((je.f & ks) !== 0)
        e.rv < xo && (e.rv = xo, Ot === null && o !== null && o[Zt] === e ? Zt++ : Ot === null ? Ot = [e] : Ot.includes(e) || Ot.push(e));
      else {
        (je.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [je] : i.includes(je) || i.push(je);
      }
    }
  }
  if (Dr) {
    if (rr.has(e))
      return rr.get(e);
    if (n) {
      var s = (
        /** @type {Derived} */
        e
      ), a = s.v;
      return ((s.f & $t) === 0 && s.reactions !== null || rc(s)) && (a = oa(s)), rr.set(s, a), a;
    }
  } else n && (!Gt?.has(e) || nt?.is_fork && !bo()) && (s = /** @type {Derived} */
  e, Io(s) && Du(s), or && bo() && (s.f & dn) === 0 && nc(s));
  if (Gt?.has(e))
    return Gt.get(e);
  if ((e.f & nr) !== 0)
    throw e.v;
  return e.v;
}
function nc(e) {
  if (e.deps !== null) {
    e.f ^= dn;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & bt) !== 0 && (t.f & dn) === 0 && nc(
        /** @type {Derived} */
        t
      );
  }
}
function rc(e) {
  if (e.v === mt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (rr.has(t) || (t.f & bt) !== 0 && rc(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function yt(e) {
  var t = Cn;
  try {
    return Cn = !0, e();
  } finally {
    Cn = t;
  }
}
const sh = -7169;
function kt(e, t) {
  e.f = e.f & sh | t;
}
function ah(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  for (var o of Object.getOwnPropertySymbols(e))
    Object.propertyIsEnumerable.call(e, o) && !t.includes(o) && (n[o] = e[o]);
  return n;
}
function ca(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if ($n in e)
      Ns(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && $n in n && Ns(n);
      }
  }
}
function Ns(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ns(e[r], t);
      } catch {
      }
    const n = Ri(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = fu(n);
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
const oc = /* @__PURE__ */ new Set(), Os = /* @__PURE__ */ new Set();
function da(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || fo.call(t, i), !i.cancelBubble)
      return sa(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? dr(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function Ts(e, t, n, r = {}) {
  var o = da(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function _i(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = da(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && Wi(() => {
    t.removeEventListener(e, s, i);
  });
}
function fr(e) {
  for (var t = 0; t < e.length; t++)
    oc.add(e[t]);
  for (var n of Os)
    n(e);
}
let tl = null;
function fo(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  tl = e;
  var s = 0, a = tl === e && e.__root;
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
    mi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = je, p = Me;
    Vt(null), en(null);
    try {
      for (var f, h = []; i !== null; ) {
        var m = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + r];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && w.call(i, e);
        } catch (y) {
          f ? h.push(y) : f = y;
        }
        if (e.cancelBubble || m === t || m === null)
          break;
        i = m;
      }
      if (f) {
        for (let y of h)
          queueMicrotask(() => {
            throw y;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Vt(d), en(p);
    }
  }
}
function fa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ht(e, t) {
  var n = (
    /** @type {Effect} */
    Me
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var n = (t & cu) !== 0, r = (t & dp) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if ($e)
      return Ht(Te, null), Te;
    o === void 0 && (o = fa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ ft(o)));
    var s = (
      /** @type {TemplateNode} */
      r || zu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ht(a, l);
    } else
      Ht(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & cu) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if ($e)
      return Ht(Te, null), Te;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        fa(i)
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
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ht(d, p);
    } else
      Ht(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ lh(e, t, "svg");
}
function Pe(e = "") {
  if (!$e) {
    var t = It(e + "");
    return Ht(t, t), t;
  }
  var n = Te;
  return n.nodeType !== Bi && (n.before(n = It()), ct(n)), Ht(n, n), n;
}
function Ne() {
  if ($e)
    return Ht(Te, null), Te;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = It();
  return e.append(t, n), Ht(t, n), e;
}
function D(e, t) {
  if ($e) {
    var n = (
      /** @type {Effect} */
      Me
    );
    ((n.f & Ki) === 0 || n.nodes_end === null) && (n.nodes_end = Te), jn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function uh(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ch = [
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
function dh(e) {
  return ch.includes(e);
}
const fh = {
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
function ph(e) {
  return e = e.toLowerCase(), fh[e] ?? e;
}
const hh = ["touchstart", "touchmove"];
function gh(e) {
  return hh.includes(e);
}
const vh = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function mh(e) {
  return vh.includes(
    /** @type {typeof RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Je(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function ic(e, t) {
  return sc(e, t);
}
function yh(e, t) {
  Ps(), t.intro = t.intro ?? !1;
  const n = t.target, r = $e, o = Te;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ft(n)
    ); i && (i.nodeType !== Tr || /** @type {Comment} */
    i.data !== du); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ hn(i);
    if (!i)
      throw $r;
    Bt(!0), ct(
      /** @type {Comment} */
      i
    );
    const s = sc(e, { ...t, anchor: i });
    return Bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s instanceof Error && s.message.split(`
`).some((a) => a.startsWith("https://svelte.dev/e/")))
      throw s;
    return s !== $r && console.warn("Failed to hydrate: ", s), t.recover === !1 && Sp(), Ps(), ia(n), Bt(!1), ic(e, t);
  } finally {
    Bt(r), ct(o);
  }
}
const Lr = /* @__PURE__ */ new Map();
function sc(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  Ps();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var h = p[f];
      if (!a.has(h)) {
        a.add(h);
        var m = gh(h);
        t.addEventListener(h, fo, { passive: m });
        var w = Lr.get(h);
        w === void 0 ? (document.addEventListener(h, fo, { passive: m }), Lr.set(h, 1)) : Lr.set(h, w + 1);
      }
    }
  };
  l(Js(oc)), Os.add(l);
  var u = void 0, d = th(() => {
    var p = n ?? t.appendChild(It());
    return jp(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (f) => {
        if (i) {
          fe({});
          var h = (
            /** @type {ComponentContext} */
            tt
          );
          h.c = i;
        }
        if (o && (r.$$events = o), $e && Ht(
          /** @type {TemplateNode} */
          f,
          null
        ), u = e(f, r) || {}, $e && (Me.nodes_end = Te, Te === null || Te.nodeType !== Tr || /** @type {Comment} */
        Te.data !== Gs))
          throw Vo(), $r;
        i && pe();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, fo);
        var h = (
          /** @type {number} */
          Lr.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, fo), Lr.delete(f)) : Lr.set(f, h);
      }
      Os.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return Ds.set(u, d), u;
}
let Ds = /* @__PURE__ */ new WeakMap();
function wh(e, t) {
  const n = Ds.get(e);
  return n ? (Ds.delete(e), n(t)) : Promise.resolve();
}
class Fi {
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
  #l = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#l = n;
  }
  #a = () => {
    var t = (
      /** @type {Batch} */
      nt
    );
    if (this.#e.has(t)) {
      var n = (
        /** @type {Key} */
        this.#e.get(t)
      ), r = this.#t.get(n);
      if (r)
        ua(r), this.#r.delete(n);
      else {
        var o = this.#n.get(n);
        o && (this.#t.set(n, o.effect), this.#n.delete(n), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), r = o.effect);
      }
      for (const [i, s] of this.#e) {
        if (this.#e.delete(i), i === t)
          break;
        const a = this.#n.get(s);
        a && (ht(a.effect), this.#n.delete(s));
      }
      for (const [i, s] of this.#t) {
        if (i === n || this.#r.has(i)) continue;
        const a = () => {
          if (Array.from(this.#e.values()).includes(i)) {
            var l = document.createDocumentFragment();
            Uu(s, l), l.append(It()), this.#n.set(i, { effect: s, fragment: l });
          } else
            ht(s);
          this.#r.delete(i), this.#t.delete(i);
        };
        this.#l || !r ? (this.#r.add(i), Ar(s, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #o = (t) => {
    this.#e.delete(t);
    const n = Array.from(this.#e.values());
    for (const [r, o] of this.#n)
      n.includes(r) || (ht(o.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      nt
    ), o = Iu();
    n && !this.#t.has(t) && !this.#n.has(t) && this.#t.set(
      t,
      Kt(() => n(this.anchor))
    ), this.#e.set(r, t), o || ($e && (this.anchor = Te), this.#a());
  }
}
function st(e, t, ...n) {
  var r = new Fi(e);
  ro(() => {
    const o = t() ?? null;
    r.ensure(o, o && ((i) => o(i, ...n)));
  }, Rn);
}
function Fn(e) {
  tt === null && na(), to && tt.l !== null ? bh(tt).m.push(e) : rt(() => {
    const t = yt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ro(e) {
  tt === null && na(), Fn(() => () => yt(e));
}
function bh(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function ue(e, t, n = !1) {
  $e && jn();
  var r = new Fi(e), o = n ? Rn : 0;
  function i(s, a) {
    if ($e) {
      const u = yu(e) === Ai;
      if (s === u) {
        var l = yi();
        ct(l), r.anchor = l, Bt(!1), r.ensure(s, a), Bt(!0);
        return;
      }
    }
    r.ensure(s, a);
  }
  ro(() => {
    var s = !1;
    t((a, l = !0) => {
      s = !0, i(l, a);
    }), s || i(!1, null);
  }, o);
}
function xh(e, t) {
  $e && ct(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ft(e)
  ), Ao(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function pa(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Ee(() => {
    var a = (
      /** @type {Effect} */
      Me
    );
    if (s === (s = t() ?? "")) {
      $e && jn();
      return;
    }
    if (a.nodes_start !== null && (Wu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if ($e) {
        Te.data;
        for (var l = jn(), u = l; l !== null && (l.nodeType !== Tr || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ hn(l);
        if (l === null)
          throw Vo(), $r;
        Ht(Te, u), i = ct(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = fa(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ ft(p)), Ht(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ ft(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ ft(p)
          );
      else
        i.before(p);
    }
  });
}
function qi(e, t, n) {
  $e && jn();
  var r = new Fi(e);
  ro(() => {
    var o = t() ?? null;
    r.ensure(o, o && ((i) => n(i, o)));
  }, Rn);
}
function _h(e, t, n, r, o, i) {
  let s = $e;
  $e && jn();
  var a = null;
  $e && Te.nodeType === bp && (a = /** @type {Element} */
  Te, jn());
  var l = (
    /** @type {TemplateNode} */
    $e ? Te : e
  ), u = new Fi(l, !1);
  ro(() => {
    const d = t() || null;
    var p = d === "svg" ? pp : null;
    if (d === null) {
      u.ensure(null, null);
      return;
    }
    return u.ensure(d, (f) => {
      if (d) {
        if (a = $e ? (
          /** @type {Element} */
          a
        ) : p ? document.createElementNS(p, d) : document.createElement(d), Ht(a, a), r) {
          $e && mh(d) && a.append(document.createComment(""));
          var h = (
            /** @type {TemplateNode} */
            $e ? /* @__PURE__ */ ft(a) : a.appendChild(It())
          );
          $e && (h === null ? Bt(!1) : ct(h)), r(a, h);
        }
        Me.nodes_end = a, f.before(a);
      }
      $e && ct(f);
    }), () => {
    };
  }, Rn), Wi(() => {
  }), s && (Bt(!0), ct(l));
}
function Fe(e, t) {
  no(() => {
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
function Ct(e, t, n) {
  no(() => {
    var r = yt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Ao(() => {
        var s = n();
        ca(s), o && bu(i, s) && (i = s, r.update(s));
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
  Ku(() => {
    n !== (n = t()) && (r && (ht(r), r = null), n && (r = Kt(() => {
      no(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function ac(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ac(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $h() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ac(e)) && (r && (r += " "), r += t);
  return r;
}
function qn(e) {
  return typeof e == "object" ? $h(e) : e ?? "";
}
const nl = [...` 	
\r\f \v\uFEFF`];
function kh(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || nl.includes(r[s - 1])) && (a === r.length || nl.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function rl(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function cs(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Sh(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(cs)), o && l.push(...Object.keys(o).map(cs));
      var u = 0, d = -1;
      const w = e.length;
      for (var p = 0; p < w; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === w - 1) {
            if (d !== -1) {
              var h = cs(e.substring(u, d).trim());
              if (!l.includes(h)) {
                f !== ";" && p++;
                var m = e.substring(u, p).trim();
                n += " " + m + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += rl(r)), o && (n += rl(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Rt(e, t, n, r, o, i) {
  var s = e.__className;
  if ($e || s !== n || s === void 0) {
    var a = kh(n, r, i);
    (!$e || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ds(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function xt(e, t, n, r) {
  var o = e.__style;
  if ($e || o !== t) {
    var i = Sh(t, r);
    (!$e || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ds(e, n?.[0], r[0]), ds(e, n?.[1], r[1], "important")) : ds(e, n, r));
  return r;
}
function Ms(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ii(t))
      return Dp();
    for (var r of e.options)
      r.selected = t.includes(ol(r));
    return;
  }
  for (r of e.options) {
    var o = ol(r);
    if (Up(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Eh(e) {
  var t = new MutationObserver(() => {
    Ms(e, e.__value);
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
  }), Wi(() => {
    t.disconnect();
  });
}
function ol(e) {
  return "__value" in e ? e.__value : e.value;
}
const Qn = Symbol("class"), _n = Symbol("style"), lc = Symbol("is custom element"), uc = Symbol("is html");
function xr(e) {
  if ($e) {
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
    e.__on_r = n, dr(n), Qp();
  }
}
function ui(e, t) {
  var n = Xi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function il(e, t) {
  var n = Xi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Ph(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ke(e, t, n, r) {
  var o = Xi(e);
  $e && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[wp] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && cc(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Nh(e, t, n, r, o = !1, i = !1) {
  if ($e && o && e.tagName === "INPUT") {
    var s = (
      /** @type {HTMLInputElement} */
      e
    ), a = s.type === "checkbox" ? "defaultChecked" : "defaultValue";
    a in n || xr(s);
  }
  var l = Xi(e), u = l[lc], d = !l[uc];
  let p = $e && u;
  p && Bt(!1);
  var f = t || {}, h = e.tagName === "OPTION";
  for (var m in t)
    m in n || (n[m] = null);
  n.class ? n.class = qn(n.class) : (r || n[Qn]) && (n.class = null), n[_n] && (n.style ??= null);
  var w = cc(e);
  for (const N in n) {
    let M = n[N];
    if (h && N === "value" && M == null) {
      e.value = e.__value = "", f[N] = M;
      continue;
    }
    if (N === "class") {
      var y = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rt(e, y, M, r, t?.[Qn], n[Qn]), f[N] = M, f[Qn] = n[Qn];
      continue;
    }
    if (N === "style") {
      xt(e, M, t?.[_n], n[_n]), f[N] = M, f[_n] = n[_n];
      continue;
    }
    var b = f[N];
    if (!(M === b && !(M === void 0 && e.hasAttribute(N)))) {
      f[N] = M;
      var x = N[0] + N[1];
      if (x !== "$$")
        if (x === "on") {
          const j = {}, A = "$$" + N;
          let I = N.slice(2);
          var $ = dh(I);
          if (uh(I) && (I = I.slice(0, -7), j.capture = !0), !$ && b) {
            if (M != null) continue;
            e.removeEventListener(I, f[A], j), f[A] = null;
          }
          if (M != null)
            if ($)
              e[`__${I}`] = M, fr([I]);
            else {
              let H = function(k) {
                f[N].call(this, k);
              };
              f[A] = da(I, e, H, j);
            }
          else $ && (e[`__${I}`] = void 0);
        } else if (N === "style")
          ke(e, N, M);
        else if (N === "autofocus")
          Gp(
            /** @type {HTMLElement} */
            e,
            !!M
          );
        else if (!u && (N === "__value" || N === "value" && M != null))
          e.value = e.__value = M;
        else if (N === "selected" && h)
          Ph(
            /** @type {HTMLOptionElement} */
            e,
            M
          );
        else {
          var C = N;
          d || (C = ph(C));
          var S = C === "defaultValue" || C === "defaultChecked";
          if (M == null && !u && !S)
            if (l[N] = null, C === "value" || C === "checked") {
              let j = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (C === "value") {
                let I = j.defaultValue;
                j.removeAttribute(C), j.defaultValue = I, j.value = j.__value = A ? I : null;
              } else {
                let I = j.defaultChecked;
                j.removeAttribute(C), j.defaultChecked = I, j.checked = A ? I : !1;
              }
            } else
              e.removeAttribute(N);
          else S || w.includes(C) && (u || typeof M != "string") ? (e[C] = M, C in l && (l[C] = mt)) : typeof M != "function" && ke(e, C, M);
        }
    }
  }
  return p && Bt(!0), f;
}
function pt(e, t, n = [], r = [], o = [], i, s = !1, a = !1) {
  Ou(o, n, r, (l) => {
    var u = void 0, d = {}, p = e.nodeName === "SELECT", f = !1;
    if (Ku(() => {
      var m = t(...l.map(c)), w = Nh(
        e,
        u,
        m,
        i,
        s,
        a
      );
      f && p && "value" in m && Ms(
        /** @type {HTMLSelectElement} */
        e,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(d))
        m[b] || ht(d[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var y = m[b];
        b.description === hp && (!u || y !== u[b]) && (d[b] && ht(d[b]), d[b] = Kt(() => Ch(e, () => y))), w[b] = y;
      }
      u = w;
    }), p) {
      var h = (
        /** @type {HTMLSelectElement} */
        e
      );
      no(() => {
        Ms(
          h,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), Eh(h);
      });
    }
    f = !0;
  });
}
function Xi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [lc]: e.nodeName.includes("-"),
      [uc]: e.namespaceURI === fp
    }
  );
}
var sl = /* @__PURE__ */ new Map();
function cc(e) {
  var t = e.getAttribute("is") || e.nodeName, n = sl.get(t);
  if (n) return n;
  sl.set(t, n = []);
  for (var r, o = e, i = Element.prototype; i !== o; ) {
    r = fu(o);
    for (var s in r)
      r[s].set && n.push(s);
    o = Ri(o);
  }
  return n;
}
class ha {
  /** */
  #e = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #t;
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
    var r = this.#e.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#e.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#e.get(t);
      o.delete(n), o.size === 0 && (this.#e.delete(t), this.#t.unobserve(t));
    };
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          ha.entries.set(n.target, n);
          for (var r of this.#e.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var Oh = /* @__PURE__ */ new ha({
  box: "border-box"
});
function al(e, t, n) {
  var r = Oh.observe(e, () => n(e[t]));
  no(() => (yt(() => n(e[t])), r));
}
function ll(e, t) {
  return e === t || e?.[$n] === t;
}
function jt(e = {}, t, n, r) {
  return no(() => {
    var o, i;
    return Ao(() => {
      o = i, i = [], yt(() => {
        e !== n(...i) && (t(e, ...i), o && ll(n(...o), e) && t(null, ...o));
      });
    }), () => {
      dr(() => {
        i && ll(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function dc(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    tt
  ), n = t.l.u;
  if (!n) return;
  let r = () => ca(t.s);
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
  n.b.length && Zu(() => {
    ul(t, r), $s(n.b);
  }), rt(() => {
    const o = yt(() => n.m.map(yp));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && rt(() => {
    ul(t, r), $s(n.a);
  });
}
function ul(e, t) {
  if (e.l.s)
    for (const n of e.l.s) c(n);
  t();
}
let ti = !1;
function Th(e) {
  var t = ti;
  try {
    return ti = !1, [e(), ti];
  } finally {
    ti = t;
  }
}
const Dh = {
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
function Xe(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Dh
  );
}
const Mh = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return c(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = Me;
      try {
        en(e.parent_effect), e.special[t] = v(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          uu
        );
      } finally {
        en(r);
      }
    }
    return e.special[t](n), Ua(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Ua(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function cl(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: sr(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        Me
      )
    },
    Mh
  );
}
const Lh = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (lo(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      lo(o) && (o = o());
      const i = Hn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (lo(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Hn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === $n || t === ta) return !1;
    for (let n of e.props)
      if (lo(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (lo(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Qe(...e) {
  return new Proxy({ props: e }, Lh);
}
function v(e, t, n, r) {
  var o = !to || (n & lp) !== 0, i = (n & up) !== 0, s = (n & cp) !== 0, a = (
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
    var p = $n in e || ta in e;
    d = Hn(e, t)?.set ?? (p && t in e ? ($) => e[t] = $ : void 0);
  }
  var f, h = !1;
  i ? [f, h] = Th(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (o && Ep(), d(f)));
  var m;
  if (o ? m = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ === void 0 ? u() : (l = !0, $);
  } : m = () => {
    var $ = (
      /** @type {V} */
      e[t]
    );
    return $ !== void 0 && (a = /** @type {V} */
    void 0), $ === void 0 ? a : $;
  }, o && (n & uu) === 0)
    return m;
  if (d) {
    var w = e.$$legacy;
    return (
      /** @type {() => V} */
      function($, C) {
        return arguments.length > 0 ? ((!o || !C || w || h) && d(C ? m() : $), $) : m();
      }
    );
  }
  var y = !1, b = ((n & ap) !== 0 ? Ho : ra)(() => (y = !1, m()));
  i && c(b);
  var x = (
    /** @type {Effect} */
    Me
  );
  return (
    /** @type {() => V} */
    function($, C) {
      if (arguments.length > 0) {
        const S = C ? c(b) : o && i ? Qt($) : $;
        return Q(b, S), y = !0, a !== void 0 && (a = S), $;
      }
      return Dr && y || (x.f & An) !== 0 ? b.v : c(b);
    }
  );
}
function Vh(e) {
  return new zh(e);
}
class zh {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ Lu(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return c(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === ta ? !0 : (c(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Q(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#t = (t.hydrate ? yh : ic)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && g(), this.#e = o.$$events;
    for (const i of Object.keys(this.#t))
      i === "$set" || i === "$destroy" || i === "$on" || mi(this, i, {
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
      wh(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#t.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#e[t] = this.#e[t] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#e[t].push(r), () => {
      this.#e[t] = this.#e[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let fc;
typeof HTMLElement == "function" && (fc = class extends HTMLElement {
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
      const t = {}, n = Hh(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = ci(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Vh({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = aa(() => {
        Ao(() => {
          this.$$r = !0;
          for (const r of vi(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = ci(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ci(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return vi(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function ci(e, t, n, r) {
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
function Hh(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function le(e, t, n, r, o, i) {
  let s = class extends fc {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return vi(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return vi(t).forEach((a) => {
    mi(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = ci(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var d = Hn(u, a)?.get;
          d ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    mi(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var Ah = { value: () => {
} };
function Ui() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new di(n);
}
function di(e) {
  this._ = e;
}
function Ih(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
di.prototype = Ui.prototype = {
  constructor: di,
  on: function(e, t) {
    var n = this._, r = Ih(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Rh(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = dl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = dl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new di(e);
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
function Rh(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function dl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Ah, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ls = "http://www.w3.org/1999/xhtml";
const fl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ls,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Gi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), fl.hasOwnProperty(t) ? { space: fl[t], local: e } : e;
}
function jh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ls && t.documentElement.namespaceURI === Ls ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Zh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function pc(e) {
  var t = Gi(e);
  return (t.local ? Zh : jh)(t);
}
function Kh() {
}
function ga(e) {
  return e == null ? Kh : function() {
    return this.querySelector(e);
  };
}
function Bh(e) {
  typeof e != "function" && (e = ga(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, d = 0; d < s; ++d)
      (l = i[d]) && (u = e.call(l, l.__data__, d, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[d] = u);
  return new Ft(r, this._parents);
}
function Yh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Wh() {
  return [];
}
function hc(e) {
  return e == null ? Wh : function() {
    return this.querySelectorAll(e);
  };
}
function Fh(e) {
  return function() {
    return Yh(e.apply(this, arguments));
  };
}
function qh(e) {
  typeof e == "function" ? e = Fh(e) : e = hc(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ft(r, o);
}
function gc(e) {
  return function() {
    return this.matches(e);
  };
}
function vc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Xh = Array.prototype.find;
function Uh(e) {
  return function() {
    return Xh.call(this.children, e);
  };
}
function Gh() {
  return this.firstElementChild;
}
function Jh(e) {
  return this.select(e == null ? Gh : Uh(typeof e == "function" ? e : vc(e)));
}
var Qh = Array.prototype.filter;
function eg() {
  return Array.from(this.children);
}
function tg(e) {
  return function() {
    return Qh.call(this.children, e);
  };
}
function ng(e) {
  return this.selectAll(e == null ? eg : tg(typeof e == "function" ? e : vc(e)));
}
function rg(e) {
  typeof e != "function" && (e = gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ft(r, this._parents);
}
function mc(e) {
  return new Array(e.length);
}
function og() {
  return new Ft(this._enter || this._groups.map(mc), this._parents);
}
function Ci(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ci.prototype = {
  constructor: Ci,
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
function ig(e) {
  return function() {
    return e;
  };
}
function sg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new Ci(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function ag(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), h;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < p; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new Ci(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function lg(e) {
  return e.__data__;
}
function ug(e, t) {
  if (!arguments.length) return Array.from(this, lg);
  var n = t ? ag : sg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = ig(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var d = r[u], p = o[u], f = p.length, h = cg(e.call(d, d && d.__data__, u, r)), m = h.length, w = a[u] = new Array(m), y = s[u] = new Array(m), b = l[u] = new Array(f);
    n(d, p, w, y, b, h, t);
    for (var x = 0, $ = 0, C, S; x < m; ++x)
      if (C = w[x]) {
        for (x >= $ && ($ = x + 1); !(S = y[$]) && ++$ < m; ) ;
        C._next = S || null;
      }
  }
  return s = new Ft(s, r), s._enter = a, s._exit = l, s;
}
function cg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function dg() {
  return new Ft(this._exit || this._groups.map(mc), this._parents);
}
function fg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function pg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], d = r[l], p = u.length, f = a[l] = new Array(p), h, m = 0; m < p; ++m)
      (h = u[m] || d[m]) && (f[m] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ft(a, this._parents);
}
function hg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function gg(e) {
  e || (e = vg);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, d = 0; d < a; ++d)
      (u = s[d]) && (l[d] = u);
    l.sort(t);
  }
  return new Ft(o, this._parents).order();
}
function vg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function yg() {
  return Array.from(this);
}
function wg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function bg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function xg() {
  return !this.node();
}
function _g(e) {
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
function kg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Sg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Eg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Pg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ng(e, t) {
  var n = Gi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? $g : Cg : typeof t == "function" ? n.local ? Pg : Eg : n.local ? Sg : kg)(n, t));
}
function yc(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Og(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Tg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Dg(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Mg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Og : typeof t == "function" ? Dg : Tg)(e, t, n ?? "")) : qr(this.node(), e);
}
function qr(e, t) {
  return e.style.getPropertyValue(t) || yc(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Lg(e) {
  return function() {
    delete this[e];
  };
}
function Vg(e, t) {
  return function() {
    this[e] = t;
  };
}
function zg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Hg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Lg : typeof t == "function" ? zg : Vg)(e, t)) : this.node()[e];
}
function wc(e) {
  return e.trim().split(/^|\s+/);
}
function va(e) {
  return e.classList || new bc(e);
}
function bc(e) {
  this._node = e, this._names = wc(e.getAttribute("class") || "");
}
bc.prototype = {
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
function xc(e, t) {
  for (var n = va(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function _c(e, t) {
  for (var n = va(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Ag(e) {
  return function() {
    xc(this, e);
  };
}
function Ig(e) {
  return function() {
    _c(this, e);
  };
}
function Rg(e, t) {
  return function() {
    (t.apply(this, arguments) ? xc : _c)(this, e);
  };
}
function jg(e, t) {
  var n = wc(e + "");
  if (arguments.length < 2) {
    for (var r = va(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Rg : t ? Ag : Ig)(n, t));
}
function Zg() {
  this.textContent = "";
}
function Kg(e) {
  return function() {
    this.textContent = e;
  };
}
function Bg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Yg(e) {
  return arguments.length ? this.each(e == null ? Zg : (typeof e == "function" ? Bg : Kg)(e)) : this.node().textContent;
}
function Wg() {
  this.innerHTML = "";
}
function Fg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function qg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Xg(e) {
  return arguments.length ? this.each(e == null ? Wg : (typeof e == "function" ? qg : Fg)(e)) : this.node().innerHTML;
}
function Ug() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Gg() {
  return this.each(Ug);
}
function Jg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Qg() {
  return this.each(Jg);
}
function ev(e) {
  var t = typeof e == "function" ? e : pc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function tv() {
  return null;
}
function nv(e, t) {
  var n = typeof e == "function" ? e : pc(e), r = t == null ? tv : typeof t == "function" ? t : ga(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function rv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ov() {
  return this.each(rv);
}
function iv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function sv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function av(e) {
  return this.select(e ? sv : iv);
}
function lv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function uv(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function cv(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function dv(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function fv(e, t, n) {
  return function() {
    var r = this.__on, o, i = uv(t);
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
function pv(e, t, n) {
  var r = cv(e + ""), o, i = r.length, s;
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
  for (a = t ? fv : dv, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Cc(e, t, n) {
  var r = yc(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function hv(e, t) {
  return function() {
    return Cc(this, e, t);
  };
}
function gv(e, t) {
  return function() {
    return Cc(this, e, t.apply(this, arguments));
  };
}
function vv(e, t) {
  return this.each((typeof t == "function" ? gv : hv)(e, t));
}
function* mv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var $c = [null];
function Ft(e, t) {
  this._groups = e, this._parents = t;
}
function jo() {
  return new Ft([[document.documentElement]], $c);
}
function yv() {
  return this;
}
Ft.prototype = jo.prototype = {
  constructor: Ft,
  select: Bh,
  selectAll: qh,
  selectChild: Jh,
  selectChildren: ng,
  filter: rg,
  data: ug,
  enter: og,
  exit: dg,
  join: fg,
  merge: pg,
  selection: yv,
  order: hg,
  sort: gg,
  call: mg,
  nodes: yg,
  node: wg,
  size: bg,
  empty: xg,
  each: _g,
  attr: Ng,
  style: Mg,
  property: Hg,
  classed: jg,
  text: Yg,
  html: Xg,
  raise: Gg,
  lower: Qg,
  append: ev,
  insert: nv,
  remove: ov,
  clone: av,
  datum: lv,
  on: pv,
  dispatch: vv,
  [Symbol.iterator]: mv
};
function Jt(e) {
  return typeof e == "string" ? new Ft([[document.querySelector(e)]], [document.documentElement]) : new Ft([[e]], $c);
}
function wv(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function an(e, t) {
  if (e = wv(e), t === void 0 && (t = e.currentTarget), t) {
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
const bv = { passive: !1 }, Co = { capture: !0, passive: !1 };
function fs(e) {
  e.stopImmediatePropagation();
}
function Ir(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function kc(e) {
  var t = e.document.documentElement, n = Jt(e).on("dragstart.drag", Ir, Co);
  "onselectstart" in t ? n.on("selectstart.drag", Ir, Co) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Sc(e, t) {
  var n = e.document.documentElement, r = Jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", Ir, Co), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ni = (e) => () => e;
function Vs(e, {
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
Vs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function xv(e) {
  return !e.ctrlKey && !e.button;
}
function _v() {
  return this.parentNode;
}
function Cv(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function $v() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function kv() {
  var e = xv, t = _v, n = Cv, r = $v, o = {}, i = Ui("start", "drag", "end"), s = 0, a, l, u, d, p = 0;
  function f(C) {
    C.on("mousedown.drag", h).filter(r).on("touchstart.drag", y).on("touchmove.drag", b, bv).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(C, S) {
    if (!(d || !e.call(this, C, S))) {
      var N = $(this, t.call(this, C, S), C, S, "mouse");
      N && (Jt(C.view).on("mousemove.drag", m, Co).on("mouseup.drag", w, Co), kc(C.view), fs(C), u = !1, a = C.clientX, l = C.clientY, N("start", C));
    }
  }
  function m(C) {
    if (Ir(C), !u) {
      var S = C.clientX - a, N = C.clientY - l;
      u = S * S + N * N > p;
    }
    o.mouse("drag", C);
  }
  function w(C) {
    Jt(C.view).on("mousemove.drag mouseup.drag", null), Sc(C.view, u), Ir(C), o.mouse("end", C);
  }
  function y(C, S) {
    if (e.call(this, C, S)) {
      var N = C.changedTouches, M = t.call(this, C, S), j = N.length, A, I;
      for (A = 0; A < j; ++A)
        (I = $(this, M, C, S, N[A].identifier, N[A])) && (fs(C), I("start", C, N[A]));
    }
  }
  function b(C) {
    var S = C.changedTouches, N = S.length, M, j;
    for (M = 0; M < N; ++M)
      (j = o[S[M].identifier]) && (Ir(C), j("drag", C, S[M]));
  }
  function x(C) {
    var S = C.changedTouches, N = S.length, M, j;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), M = 0; M < N; ++M)
      (j = o[S[M].identifier]) && (fs(C), j("end", C, S[M]));
  }
  function $(C, S, N, M, j, A) {
    var I = i.copy(), H = an(A || N, S), k, T, _;
    if ((_ = n.call(C, new Vs("beforestart", {
      sourceEvent: N,
      target: f,
      identifier: j,
      active: s,
      x: H[0],
      y: H[1],
      dx: 0,
      dy: 0,
      dispatch: I
    }), M)) != null)
      return k = _.x - H[0] || 0, T = _.y - H[1] || 0, function E(O, Z, Y) {
        var W = H, L;
        switch (O) {
          case "start":
            o[j] = E, L = s++;
            break;
          case "end":
            delete o[j], --s;
          // falls through
          case "drag":
            H = an(Y || Z, S), L = s;
            break;
        }
        I.call(
          O,
          C,
          new Vs(O, {
            sourceEvent: Z,
            subject: _,
            target: f,
            identifier: j,
            active: L,
            x: H[0] + k,
            y: H[1] + T,
            dx: H[0] - W[0],
            dy: H[1] - W[1],
            dispatch: I
          }),
          M
        );
      };
  }
  return f.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : ni(!!C), f) : e;
  }, f.container = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : ni(C), f) : t;
  }, f.subject = function(C) {
    return arguments.length ? (n = typeof C == "function" ? C : ni(C), f) : n;
  }, f.touchable = function(C) {
    return arguments.length ? (r = typeof C == "function" ? C : ni(!!C), f) : r;
  }, f.on = function() {
    var C = i.on.apply(i, arguments);
    return C === i ? f : C;
  }, f.clickDistance = function(C) {
    return arguments.length ? (p = (C = +C) * C, f) : Math.sqrt(p);
  }, f;
}
function ma(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ec(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Zo() {
}
var $o = 0.7, $i = 1 / $o, Rr = "\\s*([+-]?\\d+)\\s*", ko = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Sv = /^#([0-9a-f]{3,8})$/, Ev = new RegExp(`^rgb\\(${Rr},${Rr},${Rr}\\)$`), Pv = new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`), Nv = new RegExp(`^rgba\\(${Rr},${Rr},${Rr},${ko}\\)$`), Ov = new RegExp(`^rgba\\(${kn},${kn},${kn},${ko}\\)$`), Tv = new RegExp(`^hsl\\(${ko},${kn},${kn}\\)$`), Dv = new RegExp(`^hsla\\(${ko},${kn},${kn},${ko}\\)$`), pl = {
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
ma(Zo, Sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: hl,
  // Deprecated! Use color.formatHex.
  formatHex: hl,
  formatHex8: Mv,
  formatHsl: Lv,
  formatRgb: gl,
  toString: gl
});
function hl() {
  return this.rgb().formatHex();
}
function Mv() {
  return this.rgb().formatHex8();
}
function Lv() {
  return Pc(this).formatHsl();
}
function gl() {
  return this.rgb().formatRgb();
}
function Sr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Sv.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? vl(t) : n === 3 ? new zt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ri(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ri(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ev.exec(e)) ? new zt(t[1], t[2], t[3], 1) : (t = Pv.exec(e)) ? new zt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Nv.exec(e)) ? ri(t[1], t[2], t[3], t[4]) : (t = Ov.exec(e)) ? ri(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Tv.exec(e)) ? wl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Dv.exec(e)) ? wl(t[1], t[2] / 100, t[3] / 100, t[4]) : pl.hasOwnProperty(e) ? vl(pl[e]) : e === "transparent" ? new zt(NaN, NaN, NaN, 0) : null;
}
function vl(e) {
  return new zt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ri(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new zt(e, t, n, r);
}
function Vv(e) {
  return e instanceof Zo || (e = Sr(e)), e ? (e = e.rgb(), new zt(e.r, e.g, e.b, e.opacity)) : new zt();
}
function zs(e, t, n, r) {
  return arguments.length === 1 ? Vv(e) : new zt(e, t, n, r ?? 1);
}
function zt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ma(zt, zs, Ec(Zo, {
  brighter(e) {
    return e = e == null ? $i : Math.pow($i, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new zt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new zt(_r(this.r), _r(this.g), _r(this.b), ki(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ml,
  // Deprecated! Use color.formatHex.
  formatHex: ml,
  formatHex8: zv,
  formatRgb: yl,
  toString: yl
}));
function ml() {
  return `#${yr(this.r)}${yr(this.g)}${yr(this.b)}`;
}
function zv() {
  return `#${yr(this.r)}${yr(this.g)}${yr(this.b)}${yr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yl() {
  const e = ki(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${_r(this.r)}, ${_r(this.g)}, ${_r(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ki(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function _r(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function yr(e) {
  return e = _r(e), (e < 16 ? "0" : "") + e.toString(16);
}
function wl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ln(e, t, n, r);
}
function Pc(e) {
  if (e instanceof ln) return new ln(e.h, e.s, e.l, e.opacity);
  if (e instanceof Zo || (e = Sr(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new ln(s, a, l, e.opacity);
}
function Hv(e, t, n, r) {
  return arguments.length === 1 ? Pc(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ma(ln, Hv, Ec(Zo, {
  brighter(e) {
    return e = e == null ? $i : Math.pow($i, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $o : Math.pow($o, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new zt(
      ps(e >= 240 ? e - 240 : e + 120, o, r),
      ps(e, o, r),
      ps(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ln(bl(this.h), oi(this.s), oi(this.l), ki(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ki(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${bl(this.h)}, ${oi(this.s) * 100}%, ${oi(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function bl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function oi(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ps(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ya = (e) => () => e;
function Av(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Iv(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Rv(e) {
  return (e = +e) == 1 ? Nc : function(t, n) {
    return n - t ? Iv(t, n, e) : ya(isNaN(t) ? n : t);
  };
}
function Nc(e, t) {
  var n = t - e;
  return n ? Av(e, n) : ya(isNaN(e) ? t : e);
}
const Si = function e(t) {
  var n = Rv(t);
  function r(o, i) {
    var s = n((o = zs(o)).r, (i = zs(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Nc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = u(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function jv(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function Zv(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kv(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = yo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Bv(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function xn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Yv(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = yo(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Hs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, hs = new RegExp(Hs.source, "g");
function Wv(e) {
  return function() {
    return e;
  };
}
function Fv(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Oc(e, t) {
  var n = Hs.lastIndex = hs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Hs.exec(e)) && (o = hs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: xn(r, o) })), n = hs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Fv(l[0].x) : Wv(t) : (t = l.length, function(u) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(u);
    return a.join("");
  });
}
function yo(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ya(t) : (n === "number" ? xn : n === "string" ? (r = Sr(t)) ? (t = r, Si) : Oc : t instanceof Sr ? Si : t instanceof Date ? Bv : Zv(t) ? jv : Array.isArray(t) ? Kv : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Yv : xn)(e, t);
}
var xl = 180 / Math.PI, Tc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Dc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * xl,
    skewX: Math.atan(l) * xl,
    scaleX: s,
    scaleY: a
  };
}
var ii;
function qv(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Tc : Dc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Xv(e) {
  return e == null || (ii || (ii = document.createElementNS("http://www.w3.org/2000/svg", "g")), ii.setAttribute("transform", e), !(e = ii.transform.baseVal.consolidate())) ? Tc : (e = e.matrix, Dc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Mc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, d, p, f, h, m) {
    if (u !== p || d !== f) {
      var w = h.push("translate(", null, t, null, n);
      m.push({ i: w - 4, x: xn(u, p) }, { i: w - 2, x: xn(d, f) });
    } else (p || f) && h.push("translate(" + p + t + f + n);
  }
  function s(u, d, p, f) {
    u !== d ? (u - d > 180 ? d += 360 : d - u > 180 && (u += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: xn(u, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(u, d, p, f) {
    u !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: xn(u, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(u, d, p, f, h, m) {
    if (u !== p || d !== f) {
      var w = h.push(o(h) + "scale(", null, ",", null, ")");
      m.push({ i: w - 4, x: xn(u, p) }, { i: w - 2, x: xn(d, f) });
    } else (p !== 1 || f !== 1) && h.push(o(h) + "scale(" + p + "," + f + ")");
  }
  return function(u, d) {
    var p = [], f = [];
    return u = e(u), d = e(d), i(u.translateX, u.translateY, d.translateX, d.translateY, p, f), s(u.rotate, d.rotate, p, f), a(u.skewX, d.skewX, p, f), l(u.scaleX, u.scaleY, d.scaleX, d.scaleY, p, f), u = d = null, function(h) {
      for (var m = -1, w = f.length, y; ++m < w; ) p[(y = f[m]).i] = y.x(h);
      return p.join("");
    };
  };
}
var Uv = Mc(qv, "px, ", "px)", "deg)"), Gv = Mc(Xv, ", ", ")", ")"), Jv = 1e-12;
function _l(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Qv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function e1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const fi = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], d = s[0], p = s[1], f = s[2], h = d - a, m = p - l, w = h * h + m * m, y, b;
    if (w < Jv)
      b = Math.log(f / u) / t, y = function(M) {
        return [
          a + M * h,
          l + M * m,
          u * Math.exp(t * M * b)
        ];
      };
    else {
      var x = Math.sqrt(w), $ = (f * f - u * u + r * w) / (2 * u * n * x), C = (f * f - u * u - r * w) / (2 * f * n * x), S = Math.log(Math.sqrt($ * $ + 1) - $), N = Math.log(Math.sqrt(C * C + 1) - C);
      b = (N - S) / t, y = function(M) {
        var j = M * b, A = _l(S), I = u / (n * x) * (A * e1(t * j + S) - Qv(S));
        return [
          a + I * h,
          l + I * m,
          u * A / _l(t * j + S)
        ];
      };
    }
    return y.duration = b * 1e3 * t / Math.SQRT2, y;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Xr = 0, po = 0, uo = 0, Lc = 1e3, Ei, ho, Pi = 0, Er = 0, Ji = 0, So = typeof performance == "object" && performance.now ? performance : Date, Vc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function wa() {
  return Er || (Vc(t1), Er = So.now() + Ji);
}
function t1() {
  Er = 0;
}
function Ni() {
  this._call = this._time = this._next = null;
}
Ni.prototype = zc.prototype = {
  constructor: Ni,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? wa() : +n) + (t == null ? 0 : +t), !this._next && ho !== this && (ho ? ho._next = this : Ei = this, ho = this), this._call = e, this._time = n, As();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, As());
  }
};
function zc(e, t, n) {
  var r = new Ni();
  return r.restart(e, t, n), r;
}
function n1() {
  wa(), ++Xr;
  for (var e = Ei, t; e; )
    (t = Er - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Xr;
}
function Cl() {
  Er = (Pi = So.now()) + Ji, Xr = po = 0;
  try {
    n1();
  } finally {
    Xr = 0, o1(), Er = 0;
  }
}
function r1() {
  var e = So.now(), t = e - Pi;
  t > Lc && (Ji -= t, Pi = e);
}
function o1() {
  for (var e, t = Ei, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ei = n);
  ho = e, As(r);
}
function As(e) {
  if (!Xr) {
    po && (po = clearTimeout(po));
    var t = e - Er;
    t > 24 ? (e < 1 / 0 && (po = setTimeout(Cl, e - So.now() - Ji)), uo && (uo = clearInterval(uo))) : (uo || (Pi = So.now(), uo = setInterval(r1, Lc)), Xr = 1, Vc(Cl));
  }
}
function $l(e, t, n) {
  var r = new Ni();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var i1 = Ui("start", "end", "cancel", "interrupt"), s1 = [], Hc = 0, kl = 1, Is = 2, pi = 3, Sl = 4, Rs = 5, hi = 6;
function Qi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  a1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: i1,
    tween: s1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Hc
  });
}
function ba(e, t) {
  var n = gn(e, t);
  if (n.state > Hc) throw new Error("too late; already scheduled");
  return n;
}
function Nn(e, t) {
  var n = gn(e, t);
  if (n.state > pi) throw new Error("too late; already running");
  return n;
}
function gn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function a1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = zc(i, 0, n.time);
  function i(u) {
    n.state = kl, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var d, p, f, h;
    if (n.state !== kl) return l();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === pi) return $l(s);
        h.state === Sl ? (h.state = hi, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = hi, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if ($l(function() {
      n.state === pi && (n.state = Sl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Is, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Is) {
      for (n.state = pi, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = h);
      o.length = p + 1;
    }
  }
  function a(u) {
    for (var d = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Rs, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === Rs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = hi, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function gi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Is && r.state < Rs, r.state = hi, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function l1(e) {
  return this.each(function() {
    gi(this, e);
  });
}
function u1(e, t) {
  var n, r;
  return function() {
    var o = Nn(this, e), i = o.tween;
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
function c1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Nn(this, e), s = i.tween;
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
function d1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = gn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? u1 : c1)(n, e, t));
}
function xa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Nn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return gn(o, r).value[t];
  };
}
function Ac(e, t) {
  var n;
  return (typeof t == "number" ? xn : t instanceof Sr ? Si : (n = Sr(t)) ? (t = n, Si) : Oc)(e, t);
}
function f1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function p1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function h1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function g1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function v1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function m1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function y1(e, t) {
  var n = Gi(e), r = n === "transform" ? Gv : Ac;
  return this.attrTween(e, typeof t == "function" ? (n.local ? m1 : v1)(n, r, xa(this, "attr." + e, t)) : t == null ? (n.local ? p1 : f1)(n) : (n.local ? g1 : h1)(n, r, t));
}
function w1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function b1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function x1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && b1(e, i)), n;
  }
  return o._value = t, o;
}
function _1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && w1(e, i)), n;
  }
  return o._value = t, o;
}
function C1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Gi(e);
  return this.tween(n, (r.local ? x1 : _1)(r, t));
}
function $1(e, t) {
  return function() {
    ba(this, e).delay = +t.apply(this, arguments);
  };
}
function k1(e, t) {
  return t = +t, function() {
    ba(this, e).delay = t;
  };
}
function S1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? $1 : k1)(t, e)) : gn(this.node(), t).delay;
}
function E1(e, t) {
  return function() {
    Nn(this, e).duration = +t.apply(this, arguments);
  };
}
function P1(e, t) {
  return t = +t, function() {
    Nn(this, e).duration = t;
  };
}
function N1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? E1 : P1)(t, e)) : gn(this.node(), t).duration;
}
function O1(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Nn(this, e).ease = t;
  };
}
function T1(e) {
  var t = this._id;
  return arguments.length ? this.each(O1(t, e)) : gn(this.node(), t).ease;
}
function D1(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Nn(this, e).ease = n;
  };
}
function M1(e) {
  if (typeof e != "function") throw new Error();
  return this.each(D1(this._id, e));
}
function L1(e) {
  typeof e != "function" && (e = gc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Zn(r, this._parents, this._name, this._id);
}
function V1(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], d = l.length, p = s[a] = new Array(d), f, h = 0; h < d; ++h)
      (f = l[h] || u[h]) && (p[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Zn(s, this._parents, this._name, this._id);
}
function z1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function H1(e, t, n) {
  var r, o, i = z1(t) ? ba : Nn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function A1(e, t) {
  var n = this._id;
  return arguments.length < 2 ? gn(this.node(), n).on.on(e) : this.each(H1(n, e, t));
}
function I1(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function R1() {
  return this.on("end.remove", I1(this._id));
}
function j1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ga(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), u[f] = p, Qi(u[f], t, n, f, u, gn(d, n)));
  return new Zn(i, this._parents, t, n);
}
function Z1(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = hc(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, d, p = 0; p < u; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), h, m = gn(d, n), w = 0, y = f.length; w < y; ++w)
          (h = f[w]) && Qi(h, t, n, w, f, m);
        i.push(f), s.push(d);
      }
  return new Zn(i, s, t, n);
}
var K1 = jo.prototype.constructor;
function B1() {
  return new K1(this._groups, this._parents);
}
function Y1(e, t) {
  var n, r, o;
  return function() {
    var i = qr(this, e), s = (this.style.removeProperty(e), qr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Ic(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function W1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = qr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function F1(e, t, n) {
  var r, o, i;
  return function() {
    var s = qr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), qr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function q1(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Nn(this, e), u = l.on, d = l.value[i] == null ? a || (a = Ic(t)) : void 0;
    (u !== n || o !== d) && (r = (n = u).copy()).on(s, o = d), l.on = r;
  };
}
function X1(e, t, n) {
  var r = (e += "") == "transform" ? Uv : Ac;
  return t == null ? this.styleTween(e, Y1(e, r)).on("end.style." + e, Ic(e)) : typeof t == "function" ? this.styleTween(e, F1(e, r, xa(this, "style." + e, t))).each(q1(this._id, e)) : this.styleTween(e, W1(e, r, t), n).on("end.style." + e, null);
}
function U1(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function G1(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && U1(e, s, n)), r;
  }
  return i._value = t, i;
}
function J1(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, G1(e, t, n ?? ""));
}
function Q1(e) {
  return function() {
    this.textContent = e;
  };
}
function e0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function t0(e) {
  return this.tween("text", typeof e == "function" ? e0(xa(this, "text", e)) : Q1(e == null ? "" : e + ""));
}
function n0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function r0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && n0(o)), t;
  }
  return r._value = e, r;
}
function o0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, r0(e));
}
function i0() {
  for (var e = this._name, t = this._id, n = Rc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var d = gn(l, t);
        Qi(l, e, n, u, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Zn(r, this._parents, e, n);
}
function s0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Nn(this, r), d = u.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var a0 = 0;
function Zn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Rc() {
  return ++a0;
}
var Tn = jo.prototype;
Zn.prototype = {
  constructor: Zn,
  select: j1,
  selectAll: Z1,
  selectChild: Tn.selectChild,
  selectChildren: Tn.selectChildren,
  filter: L1,
  merge: V1,
  selection: B1,
  transition: i0,
  call: Tn.call,
  nodes: Tn.nodes,
  node: Tn.node,
  size: Tn.size,
  empty: Tn.empty,
  each: Tn.each,
  on: A1,
  attr: y1,
  attrTween: C1,
  style: X1,
  styleTween: J1,
  text: t0,
  textTween: o0,
  remove: R1,
  tween: d1,
  delay: S1,
  duration: N1,
  ease: T1,
  easeVarying: M1,
  end: s0,
  [Symbol.iterator]: Tn[Symbol.iterator]
};
function l0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var u0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: l0
};
function c0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function d0(e) {
  var t, n;
  e instanceof Zn ? (t = e._id, e = e._name) : (t = Rc(), (n = u0).time = wa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Qi(l, e, t, u, s, n || c0(l, t));
  return new Zn(r, this._parents, e, t);
}
jo.prototype.interrupt = l1;
jo.prototype.transition = d0;
const si = (e) => () => e;
function f0(e, {
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
function Ln(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Ln.prototype = {
  constructor: Ln,
  scale: function(e) {
    return e === 1 ? this : new Ln(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Ln(this.k, this.x + this.k * e, this.y + this.k * t);
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
var es = new Ln(1, 0, 0);
jc.prototype = Ln.prototype;
function jc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return es;
  return e.__zoom;
}
function gs(e) {
  e.stopImmediatePropagation();
}
function co(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function p0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function h0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function El() {
  return this.__zoom || es;
}
function g0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function v0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function m0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function Zc() {
  var e = p0, t = h0, n = m0, r = g0, o = v0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = fi, u = Ui("start", "zoom", "end"), d, p, f, h = 500, m = 150, w = 0, y = 10;
  function b(_) {
    _.property("__zoom", El).on("wheel.zoom", j, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", I).filter(o).on("touchstart.zoom", H).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", T).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(_, E, O, Z) {
    var Y = _.selection ? _.selection() : _;
    Y.property("__zoom", El), _ !== Y ? S(_, E, O, Z) : Y.interrupt().each(function() {
      N(this, arguments).event(Z).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, b.scaleBy = function(_, E, O, Z) {
    b.scaleTo(_, function() {
      var Y = this.__zoom.k, W = typeof E == "function" ? E.apply(this, arguments) : E;
      return Y * W;
    }, O, Z);
  }, b.scaleTo = function(_, E, O, Z) {
    b.transform(_, function() {
      var Y = t.apply(this, arguments), W = this.__zoom, L = O == null ? C(Y) : typeof O == "function" ? O.apply(this, arguments) : O, U = W.invert(L), X = typeof E == "function" ? E.apply(this, arguments) : E;
      return n($(x(W, X), L, U), Y, s);
    }, O, Z);
  }, b.translateBy = function(_, E, O, Z) {
    b.transform(_, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), t.apply(this, arguments), s);
    }, null, Z);
  }, b.translateTo = function(_, E, O, Z, Y) {
    b.transform(_, function() {
      var W = t.apply(this, arguments), L = this.__zoom, U = Z == null ? C(W) : typeof Z == "function" ? Z.apply(this, arguments) : Z;
      return n(es.translate(U[0], U[1]).scale(L.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), W, s);
    }, Z, Y);
  };
  function x(_, E) {
    return E = Math.max(i[0], Math.min(i[1], E)), E === _.k ? _ : new Ln(E, _.x, _.y);
  }
  function $(_, E, O) {
    var Z = E[0] - O[0] * _.k, Y = E[1] - O[1] * _.k;
    return Z === _.x && Y === _.y ? _ : new Ln(_.k, Z, Y);
  }
  function C(_) {
    return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
  }
  function S(_, E, O, Z) {
    _.on("start.zoom", function() {
      N(this, arguments).event(Z).start();
    }).on("interrupt.zoom end.zoom", function() {
      N(this, arguments).event(Z).end();
    }).tween("zoom", function() {
      var Y = this, W = arguments, L = N(Y, W).event(Z), U = t.apply(Y, W), X = O == null ? C(U) : typeof O == "function" ? O.apply(Y, W) : O, J = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), R = Y.__zoom, q = typeof E == "function" ? E.apply(Y, W) : E, G = l(R.invert(X).concat(J / R.k), q.invert(X).concat(J / q.k));
      return function(ne) {
        if (ne === 1) ne = q;
        else {
          var re = G(ne), ee = J / re[2];
          ne = new Ln(ee, X[0] - re[0] * ee, X[1] - re[1] * ee);
        }
        L.zoom(null, ne);
      };
    });
  }
  function N(_, E, O) {
    return !O && _.__zooming || new M(_, E);
  }
  function M(_, E) {
    this.that = _, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(_, E), this.taps = 0;
  }
  M.prototype = {
    event: function(_) {
      return _ && (this.sourceEvent = _), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(_, E) {
      return this.mouse && _ !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && _ !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && _ !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(_) {
      var E = Jt(this.that).datum();
      u.call(
        _,
        this.that,
        new f0(_, {
          sourceEvent: this.sourceEvent,
          target: b,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function j(_, ...E) {
    if (!e.apply(this, arguments)) return;
    var O = N(this, E).event(_), Z = this.__zoom, Y = Math.max(i[0], Math.min(i[1], Z.k * Math.pow(2, r.apply(this, arguments)))), W = an(_);
    if (O.wheel)
      (O.mouse[0][0] !== W[0] || O.mouse[0][1] !== W[1]) && (O.mouse[1] = Z.invert(O.mouse[0] = W)), clearTimeout(O.wheel);
    else {
      if (Z.k === Y) return;
      O.mouse = [W, Z.invert(W)], gi(this), O.start();
    }
    co(_), O.wheel = setTimeout(L, m), O.zoom("mouse", n($(x(Z, Y), O.mouse[0], O.mouse[1]), O.extent, s));
    function L() {
      O.wheel = null, O.end();
    }
  }
  function A(_, ...E) {
    if (f || !e.apply(this, arguments)) return;
    var O = _.currentTarget, Z = N(this, E, !0).event(_), Y = Jt(_.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", J, !0), W = an(_, O), L = _.clientX, U = _.clientY;
    kc(_.view), gs(_), Z.mouse = [W, this.__zoom.invert(W)], gi(this), Z.start();
    function X(R) {
      if (co(R), !Z.moved) {
        var q = R.clientX - L, G = R.clientY - U;
        Z.moved = q * q + G * G > w;
      }
      Z.event(R).zoom("mouse", n($(Z.that.__zoom, Z.mouse[0] = an(R, O), Z.mouse[1]), Z.extent, s));
    }
    function J(R) {
      Y.on("mousemove.zoom mouseup.zoom", null), Sc(R.view, Z.moved), co(R), Z.event(R).end();
    }
  }
  function I(_, ...E) {
    if (e.apply(this, arguments)) {
      var O = this.__zoom, Z = an(_.changedTouches ? _.changedTouches[0] : _, this), Y = O.invert(Z), W = O.k * (_.shiftKey ? 0.5 : 2), L = n($(x(O, W), Z, Y), t.apply(this, E), s);
      co(_), a > 0 ? Jt(this).transition().duration(a).call(S, L, Z, _) : Jt(this).call(b.transform, L, Z, _);
    }
  }
  function H(_, ...E) {
    if (e.apply(this, arguments)) {
      var O = _.touches, Z = O.length, Y = N(this, E, _.changedTouches.length === Z).event(_), W, L, U, X;
      for (gs(_), L = 0; L < Z; ++L)
        U = O[L], X = an(U, this), X = [X, this.__zoom.invert(X), U.identifier], Y.touch0 ? !Y.touch1 && Y.touch0[2] !== X[2] && (Y.touch1 = X, Y.taps = 0) : (Y.touch0 = X, W = !0, Y.taps = 1 + !!d);
      d && (d = clearTimeout(d)), W && (Y.taps < 2 && (p = X[0], d = setTimeout(function() {
        d = null;
      }, h)), gi(this), Y.start());
    }
  }
  function k(_, ...E) {
    if (this.__zooming) {
      var O = N(this, E).event(_), Z = _.changedTouches, Y = Z.length, W, L, U, X;
      for (co(_), W = 0; W < Y; ++W)
        L = Z[W], U = an(L, this), O.touch0 && O.touch0[2] === L.identifier ? O.touch0[0] = U : O.touch1 && O.touch1[2] === L.identifier && (O.touch1[0] = U);
      if (L = O.that.__zoom, O.touch1) {
        var J = O.touch0[0], R = O.touch0[1], q = O.touch1[0], G = O.touch1[1], ne = (ne = q[0] - J[0]) * ne + (ne = q[1] - J[1]) * ne, re = (re = G[0] - R[0]) * re + (re = G[1] - R[1]) * re;
        L = x(L, Math.sqrt(ne / re)), U = [(J[0] + q[0]) / 2, (J[1] + q[1]) / 2], X = [(R[0] + G[0]) / 2, (R[1] + G[1]) / 2];
      } else if (O.touch0) U = O.touch0[0], X = O.touch0[1];
      else return;
      O.zoom("touch", n($(L, U, X), O.extent, s));
    }
  }
  function T(_, ...E) {
    if (this.__zooming) {
      var O = N(this, E).event(_), Z = _.changedTouches, Y = Z.length, W, L;
      for (gs(_), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), W = 0; W < Y; ++W)
        L = Z[W], O.touch0 && O.touch0[2] === L.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === L.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (L = an(L, this), Math.hypot(p[0] - L[0], p[1] - L[1]) < y)) {
        var U = Jt(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : si(+_), b) : r;
  }, b.filter = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : si(!!_), b) : e;
  }, b.touchable = function(_) {
    return arguments.length ? (o = typeof _ == "function" ? _ : si(!!_), b) : o;
  }, b.extent = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : si([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), b) : t;
  }, b.scaleExtent = function(_) {
    return arguments.length ? (i[0] = +_[0], i[1] = +_[1], b) : [i[0], i[1]];
  }, b.translateExtent = function(_) {
    return arguments.length ? (s[0][0] = +_[0][0], s[1][0] = +_[1][0], s[0][1] = +_[0][1], s[1][1] = +_[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(_) {
    return arguments.length ? (n = _, b) : n;
  }, b.duration = function(_) {
    return arguments.length ? (a = +_, b) : a;
  }, b.interpolate = function(_) {
    return arguments.length ? (l = _, b) : l;
  }, b.on = function() {
    var _ = u.on.apply(u, arguments);
    return _ === u ? b : _;
  }, b.clickDistance = function(_) {
    return arguments.length ? (w = (_ = +_) * _, b) : Math.sqrt(w);
  }, b.tapDistance = function(_) {
    return arguments.length ? (y = +_, b) : y;
  }, b;
}
const Eo = {
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
}, js = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], Kc = ["Enter", " ", "Escape"], y0 = {
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
var Ur;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Ur || (Ur = {}));
var Cr;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Cr || (Cr = {}));
var Oi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Oi || (Oi = {}));
const Zs = {
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
var Mn;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Mn || (Mn = {}));
var Po;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Po || (Po = {}));
var Ce;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Ce || (Ce = {}));
const Pl = {
  [Ce.Left]: Ce.Right,
  [Ce.Right]: Ce.Left,
  [Ce.Top]: Ce.Bottom,
  [Ce.Bottom]: Ce.Top
};
function w0(e, t) {
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
function Nl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function b0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const Bc = (e) => "id" in e && "source" in e && "target" in e, x0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), _a = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ko = (e, t = [0, 0]) => {
  const { width: n, height: r } = pr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, _0 = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : _a(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? Ti(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ts(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return ns(n);
}, Bo = (e, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, r = !1;
  return e.forEach((o) => {
    (t.filter === void 0 || t.filter(o)) && (n = ts(n, Ti(o)), r = !0);
  }), r ? ns(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Ca = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Wo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = u;
    if (s && !p || f)
      continue;
    const h = d.width ?? u.width ?? u.initialWidth ?? null, m = d.height ?? u.height ?? u.initialHeight ?? null, w = No(a, Jr(u)), y = (h ?? 0) * (m ?? 0), b = i && w > 0;
    (!u.internals.handleBounds || b || w >= y || u.dragging) && l.push(u);
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
async function k0({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = $0(e, s), l = Bo(a), u = $a(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(u, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function Yc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", Eo.error005());
    else {
      const h = a.measured.width, m = a.measured.height;
      h && m && (p = [
        [l, u],
        [l + h, u + m]
      ]);
    }
  else a && Qr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = Qr(p) ? Pr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", Eo.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - u + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function S0({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), h = !f && p.parentId && s.find((m) => m.id === p.parentId);
    (f || h) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), u = C0(s, l);
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
const Gr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), Pr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Gr(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Gr(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function Wc(e, t, n) {
  const { width: r, height: o } = pr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Pr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Ol = (e, t, n) => e < t ? Gr(Math.abs(e - t), 1, t) / t : e > n ? -Gr(Math.abs(e - n), 1, t) / t : 0, Fc = (e, t, n = 15, r = 40) => {
  const o = Ol(e.x, r, t.width - r) * n, i = Ol(e.y, r, t.height - r) * n;
  return [o, i];
}, ts = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Ks = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), ns = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Jr = (e, t = [0, 0]) => {
  const { x: n, y: r } = _a(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, Ti = (e, t = [0, 0]) => {
  const { x: n, y: r } = _a(e) ? e.internals.positionAbsolute : Ko(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, qc = (e, t) => ns(ts(Ks(e), Ks(t))), No = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Tl = (e) => Vn(e.width) && Vn(e.height) && Vn(e.x) && Vn(e.y), Vn = (e) => !isNaN(e) && isFinite(e), E0 = (e, t) => {
}, Yo = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Wo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Yo(a, s) : a;
}, Di = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Vr(e, t) {
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
function P0(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Vr(e, n), o = Vr(e, t);
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
    const r = Vr(e.top ?? e.y ?? 0, n), o = Vr(e.bottom ?? e.y ?? 0, n), i = Vr(e.left ?? e.x ?? 0, t), s = Vr(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function N0(e, t, n, r, o, i) {
  const { x: s, y: a } = Di(e, [t, n, r]), { x: l, y: u } = Di({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const $a = (e, t, n, r, o, i) => {
  const s = P0(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, u = Math.min(a, l), d = Gr(u, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, h = t / 2 - p * d, m = n / 2 - f * d, w = N0(e, h, m, d, t, n), y = {
    left: Math.min(w.left - s.left, 0),
    top: Math.min(w.top - s.top, 0),
    right: Math.min(w.right - s.right, 0),
    bottom: Math.min(w.bottom - s.bottom, 0)
  };
  return {
    x: h - y.left + y.right,
    y: m - y.top + y.bottom,
    zoom: d
  };
}, wr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Qr(e) {
  return e != null && e !== "parent";
}
function pr(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function Xc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function O0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function T0(e) {
  return { ...y0, ...e || {} };
}
function vs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = cn(e), a = Wo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: u } = n ? Yo(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const Uc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Gc = (e) => e?.getRootNode?.() || window?.document, D0 = ["INPUT", "SELECT", "TEXTAREA"];
function Jc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : D0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Qc = (e) => "clientX" in e, cn = (e, t) => {
  const n = Qc(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, Dl = (e, t, n, r, o) => {
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
      ...Uc(s)
    };
  });
};
function M0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(u - t);
  return [l, u, d, p];
}
function ai(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ml({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case Ce.Left:
      return [t - ai(t - r, i), n];
    case Ce.Right:
      return [t + ai(r - t, i), n];
    case Ce.Top:
      return [t, n - ai(n - o, i)];
    case Ce.Bottom:
      return [t, n + ai(o - n, i)];
  }
}
function ed({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, curvature: s = 0.25 }) {
  const [a, l] = Ml({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, d] = Ml({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, h, m] = M0({
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
    h,
    m
  ];
}
function td({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function L0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId || o && e.selected ? e.internals.z : 0, t.parentId || o && t.selected ? t.internals.z : 0);
  return i + s;
}
function V0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ts(Ti(e), Ti(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return No(s, ns(i)) > 0;
}
const z0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, H0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), A0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return Bc(e) ? n = { ...e } : n = {
    ...e,
    id: z0(e)
  }, H0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function nd({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = td({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Ll = {
  [Ce.Left]: { x: -1, y: 0 },
  [Ce.Right]: { x: 1, y: 0 },
  [Ce.Top]: { x: 0, y: -1 },
  [Ce.Bottom]: { x: 0, y: 1 }
}, I0 = ({ source: e, sourcePosition: t = Ce.Bottom, target: n }) => t === Ce.Left || t === Ce.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Vl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function R0({ source: e, sourcePosition: t = Ce.Bottom, target: n, targetPosition: r = Ce.Top, center: o, offset: i, stepPosition: s }) {
  const a = Ll[t], l = Ll[r], u = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = I0({
    source: u,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", h = p[f];
  let m = [], w, y;
  const b = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [, , $, C] = td({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (w = o.x ?? u.x + (d.x - u.x) * s, y = o.y ?? (u.y + d.y) / 2) : (w = o.x ?? (u.x + d.x) / 2, y = o.y ?? u.y + (d.y - u.y) * s);
    const S = [
      { x: w, y: u.y },
      { x: w, y: d.y }
    ], N = [
      { x: u.x, y },
      { x: d.x, y }
    ];
    a[f] === h ? m = f === "x" ? S : N : m = f === "x" ? N : S;
  } else {
    const S = [{ x: u.x, y: d.y }], N = [{ x: d.x, y: u.y }];
    if (f === "x" ? m = a.x === h ? N : S : m = a.y === h ? S : N, t === r) {
      const H = Math.abs(e[f] - n[f]);
      if (H <= i) {
        const k = Math.min(i - 1, i - H);
        a[f] === h ? b[f] = (u[f] > e[f] ? -1 : 1) * k : x[f] = (d[f] > n[f] ? -1 : 1) * k;
      }
    }
    if (t !== r) {
      const H = f === "x" ? "y" : "x", k = a[f] === l[H], T = u[H] > d[H], _ = u[H] < d[H];
      (a[f] === 1 && (!k && T || k && _) || a[f] !== 1 && (!k && _ || k && T)) && (m = f === "x" ? S : N);
    }
    const M = { x: u.x + b.x, y: u.y + b.y }, j = { x: d.x + x.x, y: d.y + x.y }, A = Math.max(Math.abs(M.x - m[0].x), Math.abs(j.x - m[0].x)), I = Math.max(Math.abs(M.y - m[0].y), Math.abs(j.y - m[0].y));
    A >= I ? (w = (M.x + j.x) / 2, y = m[0].y) : (w = m[0].x, y = (M.y + j.y) / 2);
  }
  return [[
    e,
    { x: u.x + b.x, y: u.y + b.y },
    ...m,
    { x: d.x + x.x, y: d.y + x.y },
    n
  ], w, y, $, C];
}
function j0(e, t, n, r) {
  const o = Math.min(Vl(e, t) / 2, Vl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ka({ sourceX: e, sourceY: t, sourcePosition: n = Ce.Bottom, targetX: r, targetY: o, targetPosition: i = Ce.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20, stepPosition: d = 0.5 }) {
  const [p, f, h, m, w] = R0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u,
    stepPosition: d
  });
  return [p.reduce((y, b, x) => {
    let $ = "";
    return x > 0 && x < p.length - 1 ? $ = j0(p[x - 1], b, p[x + 1], s) : $ = `${x === 0 ? "M" : "L"}${b.x} ${b.y}`, y += $, y;
  }, ""), f, h, m, w];
}
function zl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Z0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!zl(t) || !zl(n))
    return null;
  const r = t.internals.handleBounds || Hl(t.handles), o = n.internals.handleBounds || Hl(n.handles), i = Al(r?.source ?? [], e.sourceHandle), s = Al(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Ur.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", Eo.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || Ce.Bottom, l = s?.position || Ce.Top, u = Oo(t, i, a), d = Oo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Hl(e) {
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
function Oo(e, t, n = Ce.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? pr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case Ce.Top:
      return { x: o + s / 2, y: i };
    case Ce.Right:
      return { x: o + s, y: i + a / 2 };
    case Ce.Bottom:
      return { x: o + s / 2, y: i + a };
    case Ce.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Al(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Bs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function K0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Bs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function B0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case Ce.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case Ce.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case Ce.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const rd = 1e3, Y0 = 10, Sa = {
  nodeOrigin: [0, 0],
  nodeExtent: js,
  elevateNodesOnSelect: !0,
  defaults: {}
}, W0 = {
  ...Sa,
  checkEquality: !0
};
function Ea(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function F0(e, t, n) {
  const r = Ea(Sa, n);
  for (const o of e.values())
    if (o.parentId)
      Pa(o, e, t, r);
    else {
      const i = Ko(o, r.nodeOrigin), s = Qr(o.extent) ? o.extent : r.nodeExtent, a = Pr(i, s, pr(o));
      o.internals.positionAbsolute = a;
    }
}
function q0(e, t) {
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
function X0(e, t, n, r) {
  const o = Ea(W0, r);
  let i = { i: -1 }, s = e.length > 0;
  const a = new Map(t), l = o?.elevateNodesOnSelect ? rd : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let d = a.get(u.id);
    if (o.checkEquality && u === d?.internals.userNode)
      t.set(u.id, d);
    else {
      const p = Ko(u, o.nodeOrigin), f = Qr(u.extent) ? u.extent : o.nodeExtent, h = Pr(p, f, pr(u));
      d = {
        ...o.defaults,
        ...u,
        measured: {
          width: u.measured?.width,
          height: u.measured?.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: q0(u, d),
          z: od(u, l),
          userNode: u
        }
      }, t.set(u.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (s = !1), u.parentId && Pa(d, t, n, r, i);
  }
  return s;
}
function U0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Pa(e, t, n, r, o) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: a } = Ea(Sa, r), l = e.parentId, u = t.get(l);
  if (!u) {
    console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  U0(e, n), o && !u.parentId && u.internals.rootParentIndex === void 0 && (u.internals.rootParentIndex = ++o.i, u.internals.z = u.internals.z + o.i * Y0), o && u.internals.rootParentIndex !== void 0 && (o.i = u.internals.rootParentIndex);
  const d = i ? rd : 0, { x: p, y: f, z: h } = G0(e, u, s, a, d), { positionAbsolute: m } = e.internals, w = p !== m.x || f !== m.y;
  (w || h !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: p, y: f } : m,
      z: h
    }
  });
}
function od(e, t) {
  return (Vn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function G0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = pr(e), l = Ko(e, n), u = Qr(e.extent) ? Pr(l, e.extent, a) : l;
  let d = Pr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (d = Wc(d, a, t));
  const p = od(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function J0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Jr(a), u = qc(l, s.rect);
    i.set(s.parentId, { expandedRect: u, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const u = a.internals.positionAbsolute, d = pr(a), p = a.origin ?? r, f = s.x < u.x ? Math.round(Math.abs(u.x - s.x)) : 0, h = s.y < u.y ? Math.round(Math.abs(u.y - s.y)) : 0, m = Math.max(d.width, Math.round(s.width)), w = Math.max(d.height, Math.round(s.height)), y = (m - d.width) * p[0], b = (w - d.height) * p[1];
    (f > 0 || h > 0 || y || b) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + y,
        y: a.position.y - h + b
      }
    }), n.get(l)?.forEach((x) => {
      e.some(($) => $.id === x.id) || o.push({
        id: x.id,
        type: "position",
        position: {
          x: x.position.x + f,
          y: x.position.y + h
        }
      });
    })), (d.width < s.width || d.height < s.height || f || h) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: m + (f ? p[0] * f - y : 0),
        height: w + (h ? p[1] * h - b : 0)
      }
    });
  }), o;
}
function Q0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(u.transform), p = [];
  for (const f of e.values()) {
    const h = t.get(f.id);
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
    const m = Uc(f.nodeElement), w = h.measured.width !== m.width || h.measured.height !== m.height;
    if (m.width && m.height && (w || !h.internals.handleBounds || f.force)) {
      const y = f.nodeElement.getBoundingClientRect(), b = Qr(h.extent) ? h.extent : i;
      let { positionAbsolute: x } = h.internals;
      h.parentId && h.extent === "parent" ? x = Wc(x, m, t.get(h.parentId)) : b && (x = Pr(x, b, m));
      const $ = {
        ...h,
        measured: m,
        internals: {
          ...h.internals,
          positionAbsolute: x,
          handleBounds: {
            source: Dl("source", f.nodeElement, y, d, h.id),
            target: Dl("target", f.nodeElement, y, d, h.id)
          }
        }
      };
      t.set(h.id, $), h.parentId && Pa($, t, n, { nodeOrigin: o }), a = !0, w && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: m
      }), h.expandParent && h.parentId && p.push({
        id: h.id,
        parentId: h.parentId,
        rect: Jr($, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = J0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function em({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Il(e, t, n, r, o, i) {
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
function tm(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Il("source", l, d, e, o, s), Il("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function nm(e, t) {
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
function id(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : id(n, t) : !1;
}
function Rl(e, t, n) {
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
function rm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !id(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function ms({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function om({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o)
    return null;
  const i = {
    x: n - o.distance.x,
    y: r - o.distance.y
  }, s = Yo(i, t);
  return {
    x: s.x - i.x,
    y: s.y - i.y
  };
}
function im({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, d = null, p = !1, f = null, h = !1, m = !1, w = null;
  function y({ noDragClassName: x, handleSelector: $, domNode: C, isSelectable: S, nodeId: N, nodeClickDistance: M = 0 }) {
    f = Jt(C);
    function j({ x: k, y: T }) {
      const { nodeLookup: _, nodeExtent: E, snapGrid: O, snapToGrid: Z, nodeOrigin: Y, onNodeDrag: W, onSelectionDrag: L, onError: U, updateNodePositions: X } = t();
      i = { x: k, y: T };
      let J = !1;
      const R = a.size > 1, q = R && E ? Ks(Bo(a)) : null, G = R && Z ? om({
        dragItems: a,
        snapGrid: O,
        x: k,
        y: T
      }) : null;
      for (const [ne, re] of a) {
        if (!_.has(ne))
          continue;
        let ee = { x: k - re.distance.x, y: T - re.distance.y };
        Z && (ee = G ? {
          x: Math.round(ee.x + G.x),
          y: Math.round(ee.y + G.y)
        } : Yo(ee, O));
        let ve = null;
        if (R && E && !re.extent && q) {
          const { positionAbsolute: ae } = re.internals, me = ae.x - q.x + E[0][0], ge = ae.x + re.measured.width - q.x2 + E[1][0], xe = ae.y - q.y + E[0][1], de = ae.y + re.measured.height - q.y2 + E[1][1];
          ve = [
            [me, xe],
            [ge, de]
          ];
        }
        const { position: ce, positionAbsolute: ie } = Yc({
          nodeId: ne,
          nextPosition: ee,
          nodeLookup: _,
          nodeExtent: ve || E,
          nodeOrigin: Y,
          onError: U
        });
        J = J || re.position.x !== ce.x || re.position.y !== ce.y, re.position = ce, re.internals.positionAbsolute = ie;
      }
      if (m = m || J, !!J && (X(a, !0), w && (r || W || !N && L))) {
        const [ne, re] = ms({
          nodeId: N,
          dragItems: a,
          nodeLookup: _
        });
        r?.(w, a, ne, re), W?.(w, ne, re), N || L?.(w, re);
      }
    }
    async function A() {
      if (!d)
        return;
      const { transform: k, panBy: T, autoPanSpeed: _, autoPanOnNodeDrag: E } = t();
      if (!E) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [O, Z] = Fc(u, d, _);
      (O !== 0 || Z !== 0) && (i.x = (i.x ?? 0) - O / k[2], i.y = (i.y ?? 0) - Z / k[2], await T({ x: O, y: Z }) && j(i)), s = requestAnimationFrame(A);
    }
    function I(k) {
      const { nodeLookup: T, multiSelectionActive: _, nodesDraggable: E, transform: O, snapGrid: Z, snapToGrid: Y, selectNodesOnDrag: W, onNodeDragStart: L, onSelectionDragStart: U, unselectNodesAndEdges: X } = t();
      p = !0, (!W || !S) && !_ && N && (T.get(N)?.selected || X()), S && W && N && e?.(N);
      const J = vs(k.sourceEvent, { transform: O, snapGrid: Z, snapToGrid: Y, containerBounds: d });
      if (i = J, a = rm(T, E, J, N), a.size > 0 && (n || L || !N && U)) {
        const [R, q] = ms({
          nodeId: N,
          dragItems: a,
          nodeLookup: T
        });
        n?.(k.sourceEvent, a, R, q), L?.(k.sourceEvent, R, q), N || U?.(k.sourceEvent, q);
      }
    }
    const H = kv().clickDistance(M).on("start", (k) => {
      const { domNode: T, nodeDragThreshold: _, transform: E, snapGrid: O, snapToGrid: Z } = t();
      d = T?.getBoundingClientRect() || null, h = !1, m = !1, w = k.sourceEvent, _ === 0 && I(k), i = vs(k.sourceEvent, { transform: E, snapGrid: O, snapToGrid: Z, containerBounds: d }), u = cn(k.sourceEvent, d);
    }).on("drag", (k) => {
      const { autoPanOnNodeDrag: T, transform: _, snapGrid: E, snapToGrid: O, nodeDragThreshold: Z, nodeLookup: Y } = t(), W = vs(k.sourceEvent, { transform: _, snapGrid: E, snapToGrid: O, containerBounds: d });
      if (w = k.sourceEvent, (k.sourceEvent.type === "touchmove" && k.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      N && !Y.has(N)) && (h = !0), !h) {
        if (!l && T && p && (l = !0, A()), !p) {
          const L = cn(k.sourceEvent, d), U = L.x - u.x, X = L.y - u.y;
          Math.sqrt(U * U + X * X) > Z && I(k);
        }
        (i.x !== W.xSnapped || i.y !== W.ySnapped) && a && p && (u = cn(k.sourceEvent, d), j(W));
      }
    }).on("end", (k) => {
      if (!(!p || h) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: T, updateNodePositions: _, onNodeDragStop: E, onSelectionDragStop: O } = t();
        if (m && (_(a, !1), m = !1), o || E || !N && O) {
          const [Z, Y] = ms({
            nodeId: N,
            dragItems: a,
            nodeLookup: T,
            dragging: !1
          });
          o?.(k.sourceEvent, a, Z, Y), E?.(k.sourceEvent, Z, Y), N || O?.(k.sourceEvent, Y);
        }
      }
    }).filter((k) => {
      const T = k.target;
      return !k.button && (!x || !Rl(T, `.${x}`, C)) && (!$ || Rl(T, $, C));
    });
    f.call(H);
  }
  function b() {
    f?.on(".drag", null);
  }
  return {
    update: y,
    destroy: b
  };
}
function sm(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    No(o, Jr(i)) > 0 && r.push(i);
  return r;
}
const am = 250;
function lm(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = sm(e, n, t + am);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const u of l) {
      if (r.nodeId === u.nodeId && r.type === u.type && r.id === u.id)
        continue;
      const { x: d, y: p } = Oo(a, u, u.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
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
function sd(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((u) => u.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...Oo(s, l, l.position, !0) } : l;
}
function ad(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function um(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ld = () => !0;
function cm(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: h, onConnectStart: m, onConnect: w, onConnectEnd: y, isValidConnection: b = ld, onReconnectEnd: x, updateConnection: $, getTransform: C, getFromHandle: S, autoPanSpeed: N, dragThreshold: M = 1, handleDomNode: j }) {
  const A = Gc(e.target);
  let I = 0, H;
  const { x: k, y: T } = cn(e), _ = ad(i, j), E = a?.getBoundingClientRect();
  let O = !1;
  if (!E || !_)
    return;
  const Z = sd(o, _, r, l, t);
  if (!Z)
    return;
  let Y = cn(e, E), W = !1, L = null, U = !1, X = null;
  function J() {
    if (!d || !E)
      return;
    const [ve, ce] = Fc(Y, E, N);
    f({ x: ve, y: ce }), I = requestAnimationFrame(J);
  }
  const R = {
    ...Z,
    nodeId: o,
    type: _,
    position: Z.position
  }, q = l.get(o);
  let G = {
    inProgress: !0,
    isValid: null,
    from: Oo(q, R, Ce.Left, !0),
    fromHandle: R,
    fromPosition: R.position,
    fromNode: q,
    to: Y,
    toHandle: null,
    toPosition: Pl[R.position],
    toNode: null,
    pointer: Y
  };
  function ne() {
    O = !0, $(G), m?.(e, { nodeId: o, handleId: r, handleType: _ });
  }
  M === 0 && ne();
  function re(ve) {
    if (!O) {
      const { x: me, y: ge } = cn(ve), xe = me - k, de = ge - T;
      if (!(xe * xe + de * de > M * M))
        return;
      ne();
    }
    if (!S() || !R) {
      ee(ve);
      return;
    }
    const ce = C();
    Y = cn(ve, E), H = lm(Wo(Y, ce, !1, [1, 1]), n, l, R), W || (J(), W = !0);
    const ie = ud(ve, {
      handle: H,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: b,
      doc: A,
      lib: u,
      flowId: p,
      nodeLookup: l
    });
    X = ie.handleDomNode, L = ie.connection, U = um(!!H, ie.isValid);
    const ae = {
      // from stays the same
      ...G,
      isValid: U,
      to: ie.toHandle && U ? Di({ x: ie.toHandle.x, y: ie.toHandle.y }, ce) : Y,
      toHandle: ie.toHandle,
      toPosition: U && ie.toHandle ? ie.toHandle.position : Pl[R.position],
      toNode: ie.toHandle ? l.get(ie.toHandle.nodeId) : null,
      pointer: Y
    };
    $(ae), G = ae;
  }
  function ee(ve) {
    if (!("touches" in ve && ve.touches.length > 0)) {
      if (O) {
        (H || X) && L && U && w?.(L);
        const { inProgress: ce, ...ie } = G, ae = {
          ...ie,
          toPosition: G.toHandle ? G.toPosition : null
        };
        y?.(ve, ae), i && x?.(ve, ae);
      }
      h(), cancelAnimationFrame(I), W = !1, U = !1, L = null, X = null, A.removeEventListener("mousemove", re), A.removeEventListener("mouseup", ee), A.removeEventListener("touchmove", re), A.removeEventListener("touchend", ee);
    }
  }
  A.addEventListener("mousemove", re), A.addEventListener("mouseup", ee), A.addEventListener("touchmove", re), A.addEventListener("touchend", ee);
}
function ud(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = ld, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: h, y: m } = cn(e), w = s.elementFromPoint(h, m), y = w?.classList.contains(`${a}-flow__handle`) ? w : f, b = {
    handleDomNode: y,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (y) {
    const x = ad(void 0, y), $ = y.getAttribute("data-nodeid"), C = y.getAttribute("data-handleid"), S = y.classList.contains("connectable"), N = y.classList.contains("connectableend");
    if (!$ || !x)
      return b;
    const M = {
      source: p ? $ : r,
      sourceHandle: p ? C : o,
      target: p ? r : $,
      targetHandle: p ? o : C
    };
    b.connection = M;
    const j = S && N && (n === Ur.Strict ? p && x === "source" || !p && x === "target" : $ !== r || C !== o);
    b.isValid = j && u(M), b.toHandle = sd($, x, C, d, n, !0);
  }
  return b;
}
const jl = {
  onPointerDown: cm,
  isValid: ud
};
function dm({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: d = 1, pannable: p = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const m = ($) => {
      if ($.sourceEvent.type !== "wheel" || !t)
        return;
      const C = n(), S = $.sourceEvent.ctrlKey && wr() ? 10 : 1, N = -$.sourceEvent.deltaY * ($.sourceEvent.deltaMode === 1 ? 0.05 : $.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = C[2] * Math.pow(2, N * S);
      t.scaleTo(M);
    };
    let w = [0, 0];
    const y = ($) => {
      ($.sourceEvent.type === "mousedown" || $.sourceEvent.type === "touchstart") && (w = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ]);
    }, b = ($) => {
      const C = n();
      if ($.sourceEvent.type !== "mousemove" && $.sourceEvent.type !== "touchmove" || !t)
        return;
      const S = [
        $.sourceEvent.clientX ?? $.sourceEvent.touches[0].clientX,
        $.sourceEvent.clientY ?? $.sourceEvent.touches[0].clientY
      ], N = [S[0] - w[0], S[1] - w[1]];
      w = S;
      const M = r() * Math.max(C[2], Math.log(C[2])) * (h ? -1 : 1), j = {
        x: C[0] - N[0] * M,
        y: C[1] - N[1] * M
      }, A = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: j.x,
        y: j.y,
        zoom: C[2]
      }, A, a);
    }, x = Zc().on("start", y).on("zoom", p ? b : null).on("zoom.wheel", f ? m : null);
    o.call(x, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: an
  };
}
const rs = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), ys = ({ x: e, y: t, zoom: n }) => es.translate(e, t).scale(n), Hr = (e, t) => e.target.closest(`.${t}`), cd = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), fm = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, ws = (e, t = 0, n = fm, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, dd = (e) => {
  const t = e.ctrlKey && wr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function pm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (d) => {
    if (Hr(d, t))
      return d.ctrlKey && d.preventDefault(), !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const y = an(d), b = dd(d), x = p * Math.pow(2, b);
      r.scaleTo(n, x, y, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let h = o === Cr.Vertical ? 0 : d.deltaX * f, m = o === Cr.Horizontal ? 0 : d.deltaY * f;
    !wr() && d.shiftKey && o !== Cr.Vertical && (h = d.deltaY * f, m = 0), r.translateBy(
      n,
      -(h / p) * i,
      -(m / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const w = rs(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling ? (l?.(d, w), e.panScrollTimeout = setTimeout(() => {
      u?.(d, w), e.isPanScrolling = !1;
    }, 150)) : (e.isPanScrolling = !0, a?.(d, w));
  };
}
function hm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Hr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function gm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = rs(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function vm({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && cd(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, rs(i.transform));
  };
}
function mm({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && cd(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o)) {
      const a = rs(s.transform);
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
function ym({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u, connectionInProgress: d }) {
  return (p) => {
    const f = e || t, h = n && p.ctrlKey, m = p.type === "wheel";
    if (p.button === 1 && p.type === "mousedown" && (Hr(p, `${u}-flow__node`) || Hr(p, `${u}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || d && !m || Hr(p, a) && m || Hr(p, l) && (!m || o && m && !e) || !n && p.ctrlKey && m)
      return !1;
    if (!n && p.type === "touchstart" && p.touches?.length > 1)
      return p.preventDefault(), !1;
    if (!f && !o && !h && m || !r && (p.type === "mousedown" || p.type === "touchstart") || Array.isArray(r) && !r.includes(p.button) && p.type === "mousedown")
      return !1;
    const w = Array.isArray(r) && r.includes(p.button) || !p.button || p.button <= 1;
    return (!p.ctrlKey || m) && w;
  };
}
function wm({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: o, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: a, onDraggingChange: l }) {
  const u = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: {},
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), p = Zc().scaleExtent([t, n]).translateExtent(r), f = Jt(e).call(p);
  x({
    x: o.x,
    y: o.y,
    zoom: Gr(o.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], r);
  const h = f.on("wheel.zoom"), m = f.on("dblclick.zoom");
  p.wheelDelta(dd);
  function w(H, k) {
    return f ? new Promise((T) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : fi).transform(ws(f, k?.duration, k?.ease, () => T(!0)), H);
    }) : Promise.resolve(!1);
  }
  function y({ noWheelClassName: H, noPanClassName: k, onPaneContextMenu: T, userSelectionActive: _, panOnScroll: E, panOnDrag: O, panOnScrollMode: Z, panOnScrollSpeed: Y, preventScrolling: W, zoomOnPinch: L, zoomOnScroll: U, zoomOnDoubleClick: X, zoomActivationKeyPressed: J, lib: R, onTransformChange: q, connectionInProgress: G, paneClickDistance: ne, selectionOnDrag: re }) {
    _ && !u.isZoomingOrPanning && b();
    const ee = E && !J && !_;
    p.clickDistance(re ? 1 / 0 : !Vn(ne) || ne < 0 ? 0 : ne);
    const ve = ee ? pm({
      zoomPanValues: u,
      noWheelClassName: H,
      d3Selection: f,
      d3Zoom: p,
      panOnScrollMode: Z,
      panOnScrollSpeed: Y,
      zoomOnPinch: L,
      onPanZoomStart: s,
      onPanZoom: i,
      onPanZoomEnd: a
    }) : hm({
      noWheelClassName: H,
      preventScrolling: W,
      d3ZoomHandler: h
    });
    if (f.on("wheel.zoom", ve, { passive: !1 }), !_) {
      const ie = gm({
        zoomPanValues: u,
        onDraggingChange: l,
        onPanZoomStart: s
      });
      p.on("start", ie);
      const ae = vm({
        zoomPanValues: u,
        panOnDrag: O,
        onPaneContextMenu: !!T,
        onPanZoom: i,
        onTransformChange: q
      });
      p.on("zoom", ae);
      const me = mm({
        zoomPanValues: u,
        panOnDrag: O,
        panOnScroll: E,
        onPaneContextMenu: T,
        onPanZoomEnd: a,
        onDraggingChange: l
      });
      p.on("end", me);
    }
    const ce = ym({
      zoomActivationKeyPressed: J,
      panOnDrag: O,
      zoomOnScroll: U,
      panOnScroll: E,
      zoomOnDoubleClick: X,
      zoomOnPinch: L,
      userSelectionActive: _,
      noPanClassName: k,
      noWheelClassName: H,
      lib: R,
      connectionInProgress: G
    });
    p.filter(ce), X ? f.on("dblclick.zoom", m) : f.on("dblclick.zoom", null);
  }
  function b() {
    p.on("zoom", null);
  }
  async function x(H, k, T) {
    const _ = ys(H), E = p?.constrain()(_, k, T);
    return E && await w(E), new Promise((O) => O(E));
  }
  async function $(H, k) {
    const T = ys(H);
    return await w(T, k), new Promise((_) => _(T));
  }
  function C(H) {
    if (f) {
      const k = ys(H), T = f.property("__zoom");
      (T.k !== H.zoom || T.x !== H.x || T.y !== H.y) && p?.transform(f, k, null, { sync: !0 });
    }
  }
  function S() {
    const H = f ? jc(f.node()) : { x: 0, y: 0, k: 1 };
    return { x: H.x, y: H.y, zoom: H.k };
  }
  function N(H, k) {
    return f ? new Promise((T) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : fi).scaleTo(ws(f, k?.duration, k?.ease, () => T(!0)), H);
    }) : Promise.resolve(!1);
  }
  function M(H, k) {
    return f ? new Promise((T) => {
      p?.interpolate(k?.interpolate === "linear" ? yo : fi).scaleBy(ws(f, k?.duration, k?.ease, () => T(!0)), H);
    }) : Promise.resolve(!1);
  }
  function j(H) {
    p?.scaleExtent(H);
  }
  function A(H) {
    p?.translateExtent(H);
  }
  function I(H) {
    const k = !Vn(H) || H < 0 ? 0 : H;
    p?.clickDistance(k);
  }
  return {
    update: y,
    destroy: b,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: S,
    scaleTo: N,
    scaleBy: M,
    setScaleExtent: j,
    setTranslateExtent: A,
    syncViewport: C,
    setClickDistance: I
  };
}
var Zl;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Zl || (Zl = {}));
var bm = /* @__PURE__ */ te("<div><!></div>");
function ar(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7, null), r = v(t, "type", 7, "source"), o = v(t, "position", 23, () => Ce.Top), i = v(t, "style", 7), s = v(t, "class", 7), a = v(t, "isConnectable", 7), l = v(t, "isConnectableStart", 7, !0), u = v(t, "isConnectableEnd", 7, !0), d = v(t, "isValidConnection", 7), p = v(t, "onconnect", 7), f = v(t, "ondisconnect", 7), h = v(t, "children", 7), m = /* @__PURE__ */ Xe(t, [
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
  const w = ir("svelteflow__node_id"), y = ir("svelteflow__node_connectable");
  let b = /* @__PURE__ */ P(() => r() === "target"), x = /* @__PURE__ */ P(() => a() !== void 0 ? a() : y.value), $ = vn(), C = /* @__PURE__ */ P(() => $.ariaLabelConfig), S = null;
  Zu(() => {
    if (p() || f()) {
      $.edges;
      let L = $.connectionLookup.get(`${w}-${r()}${n() ? `-${n()}` : ""}`);
      if (S && !w0(L, S)) {
        const U = L ?? /* @__PURE__ */ new Map();
        Nl(S, U, f()), Nl(U, S, p());
      }
      S = new Map(L);
    }
  });
  let N = /* @__PURE__ */ P(() => {
    if (!$.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: L, toHandle: U, isValid: X } = $.connection, J = L && L.nodeId === w && L.type === r() && L.id === n(), R = U && U.nodeId === w && U.type === r() && U.id === n(), q = $.connectionMode === Ur.Strict ? L?.type !== r() : w !== L?.nodeId || n() !== L?.id;
    return [
      !0,
      J,
      R,
      q,
      R && X
    ];
  }), M = /* @__PURE__ */ P(() => Lo(c(N), 5)), j = /* @__PURE__ */ P(() => c(M)[0]), A = /* @__PURE__ */ P(() => c(M)[1]), I = /* @__PURE__ */ P(() => c(M)[2]), H = /* @__PURE__ */ P(() => c(M)[3]), k = /* @__PURE__ */ P(() => c(M)[4]);
  function T(L) {
    const U = $.onbeforeconnect ? $.onbeforeconnect(L) : L;
    U && ($.addEdge(U), $.onconnect?.(L));
  }
  function _(L) {
    const U = Qc(L);
    L.currentTarget && (U && L.button === 0 || !U) && jl.onPointerDown(L, {
      handleId: n(),
      nodeId: w,
      isTarget: c(b),
      connectionRadius: $.connectionRadius,
      domNode: $.domNode,
      nodeLookup: $.nodeLookup,
      connectionMode: $.connectionMode,
      lib: "svelte",
      autoPanOnConnect: $.autoPanOnConnect,
      autoPanSpeed: $.autoPanSpeed,
      flowId: $.flowId,
      isValidConnection: d() ?? $.isValidConnection,
      updateConnection: $.updateConnection,
      cancelConnection: $.cancelConnection,
      panBy: $.panBy,
      onConnect: T,
      onConnectStart: (X, J) => {
        $.onconnectstart?.(X, {
          nodeId: J.nodeId,
          handleId: J.handleId,
          handleType: J.handleType
        });
      },
      onConnectEnd: (X, J) => {
        $.onconnectend?.(X, J);
      },
      getTransform: () => [$.viewport.x, $.viewport.y, $.viewport.zoom],
      getFromHandle: () => $.connection.fromHandle,
      dragThreshold: $.connectionDragThreshold,
      handleDomNode: L.currentTarget
    });
  }
  function E(L) {
    if (!w || !$.clickConnectStartHandle && !l())
      return;
    if (!$.clickConnectStartHandle) {
      $.onclickconnectstart?.(L, { nodeId: w, handleId: n(), handleType: r() }), $.clickConnectStartHandle = { nodeId: w, type: r(), id: n() };
      return;
    }
    const U = Gc(L.target), X = d() ?? $.isValidConnection, { connectionMode: J, clickConnectStartHandle: R, flowId: q, nodeLookup: G } = $, { connection: ne, isValid: re } = jl.isValid(L, {
      handle: { nodeId: w, id: n(), type: r() },
      connectionMode: J,
      fromNodeId: R.nodeId,
      fromHandleId: R.id ?? null,
      fromType: R.type,
      isValidConnection: X,
      flowId: q,
      doc: U,
      lib: "svelte",
      nodeLookup: G
    });
    re && ne && T(ne);
    const ee = structuredClone(_u($.connection));
    delete ee.inProgress, ee.toPosition = ee.toHandle ? ee.toHandle.position : null, $.onclickconnectend?.(L, ee), $.clickConnectStartHandle = null;
  }
  var O = {
    get id() {
      return n();
    },
    set id(L = null) {
      n(L), g();
    },
    get type() {
      return r();
    },
    set type(L = "source") {
      r(L), g();
    },
    get position() {
      return o();
    },
    set position(L = Ce.Top) {
      o(L), g();
    },
    get style() {
      return i();
    },
    set style(L) {
      i(L), g();
    },
    get class() {
      return s();
    },
    set class(L) {
      s(L), g();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(L) {
      a(L), g();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(L = !0) {
      l(L), g();
    },
    get isConnectableEnd() {
      return u();
    },
    set isConnectableEnd(L = !0) {
      u(L), g();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(L) {
      d(L), g();
    },
    get onconnect() {
      return p();
    },
    set onconnect(L) {
      p(L), g();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(L) {
      f(L), g();
    },
    get children() {
      return h();
    },
    set children(L) {
      h(L), g();
    }
  }, Z = bm(), Y = () => {
  };
  pt(Z, () => ({
    "data-handleid": n(),
    "data-nodeid": w,
    "data-handlepos": o(),
    "data-id": `${$.flowId ?? ""}-${w ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
    class: [
      "svelte-flow__handle",
      `svelte-flow__handle-${o()}`,
      $.noDragClass,
      $.noPanClass,
      o(),
      s()
    ],
    onmousedown: _,
    ontouchstart: _,
    onclick: $.clickConnect ? E : void 0,
    onkeypress: Y,
    style: i(),
    role: "button",
    "aria-label": c(C)["handle.ariaLabel"],
    tabindex: "-1",
    ...m,
    [Qn]: {
      valid: c(k),
      connectingto: c(I),
      connectingfrom: c(A),
      source: !c(b),
      target: c(b),
      connectablestart: l(),
      connectableend: u(),
      connectable: c(x),
      connectionindicator: c(x) && (!c(j) || c(H)) && (c(j) || $.clickConnectStartHandle ? u() : l())
    }
  }));
  var W = B(Z);
  return st(W, () => h() ?? St), K(Z), D(e, Z), pe(O);
}
le(
  ar,
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
var xm = /* @__PURE__ */ te("<!> <!>", 1);
function Na(e, t) {
  fe(t, !0);
  let n = v(t, "data", 7), r = v(t, "targetPosition", 23, () => Ce.Top), o = v(t, "sourcePosition", 23, () => Ce.Bottom);
  var i = {
    get data() {
      return n();
    },
    set data(d) {
      n(d), g();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(d = Ce.Top) {
      r(d), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(d = Ce.Bottom) {
      o(d), g();
    }
  }, s = xm(), a = se(s);
  ar(a, {
    type: "target",
    get position() {
      return r();
    }
  });
  var l = V(a), u = V(l);
  return ar(u, {
    type: "source",
    get position() {
      return o();
    }
  }), Ee(() => Je(l, ` ${n()?.label ?? ""} `)), D(e, s), pe(i);
}
le(Na, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var _m = /* @__PURE__ */ te(" <!>", 1);
function fd(e, t) {
  fe(t, !0);
  let n = v(t, "data", 23, () => ({ label: "Node" })), r = v(t, "sourcePosition", 23, () => Ce.Bottom);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), g();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(l = Ce.Bottom) {
      r(l), g();
    }
  };
  be();
  var i = _m(), s = se(i), a = V(s);
  return ar(a, {
    type: "source",
    get position() {
      return r();
    }
  }), Ee(() => Je(s, `${n()?.label ?? ""} `)), D(e, i), pe(o);
}
le(fd, { data: {}, sourcePosition: {} }, [], [], !0);
var Cm = /* @__PURE__ */ te(" <!>", 1);
function pd(e, t) {
  fe(t, !0);
  let n = v(t, "data", 23, () => ({ label: "Node" })), r = v(t, "targetPosition", 23, () => Ce.Top);
  var o = {
    get data() {
      return n();
    },
    set data(l = { label: "Node" }) {
      n(l), g();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(l = Ce.Top) {
      r(l), g();
    }
  };
  be();
  var i = Cm(), s = se(i), a = V(s);
  return ar(a, {
    type: "target",
    get position() {
      return r();
    }
  }), Ee(() => Je(s, `${n()?.label ?? ""} `)), D(e, i), pe(o);
}
le(pd, { data: {}, targetPosition: {} }, [], [], !0);
function hd(e, t) {
}
le(hd, {}, [], [], !0);
function bs(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function gd(e, t) {
  const n = /* @__PURE__ */ P(vn), r = /* @__PURE__ */ P(() => c(n).domNode);
  let o;
  return c(r) ? bs(e, c(r), t) : o = aa(() => {
    rt(() => {
      bs(e, c(r), t), o?.();
    });
  }), {
    async update(i) {
      bs(e, c(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function vd() {
  let e = /* @__PURE__ */ Oe(typeof window > "u");
  if (c(e)) {
    const t = aa(() => {
      rt(() => {
        Q(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return c(e);
    }
  };
}
const Kl = (e) => x0(e), $m = (e) => Bc(e);
function En(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const Mi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var km = /* @__PURE__ */ te("<div><!></div>");
const Sm = {
  hash: "svelte-1ix3cbb",
  code: ".transparent.svelte-1ix3cbb {background:transparent;}"
};
function md(e, t) {
  fe(t, !0), Fe(e, Sm);
  let n = v(t, "x", 7, 0), r = v(t, "y", 7, 0), o = v(t, "width", 7), i = v(t, "height", 7), s = v(t, "selectEdgeOnClick", 7, !1), a = v(t, "transparent", 7, !1), l = v(t, "class", 7), u = v(t, "children", 7), d = /* @__PURE__ */ Xe(t, [
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
  const p = vn(), f = ir("svelteflow__edge_id");
  if (!f)
    throw new Error("EdgeLabel must be used within an edge");
  let h = /* @__PURE__ */ P(() => p.visible.edges.get(f)?.zIndex);
  var m = {
    get x() {
      return n();
    },
    set x(x = 0) {
      n(x), g();
    },
    get y() {
      return r();
    },
    set y(x = 0) {
      r(x), g();
    },
    get width() {
      return o();
    },
    set width(x) {
      o(x), g();
    },
    get height() {
      return i();
    },
    set height(x) {
      i(x), g();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(x = !1) {
      s(x), g();
    },
    get transparent() {
      return a();
    },
    set transparent(x = !1) {
      a(x), g();
    },
    get class() {
      return l();
    },
    set class(x) {
      l(x), g();
    },
    get children() {
      return u();
    },
    set children(x) {
      u(x), g();
    }
  }, w = km(), y = () => {
    s() && p.handleEdgeSelection(f);
  };
  pt(
    w,
    (x) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: y,
      ...d,
      [_n]: x
    }),
    [
      () => ({
        display: vd().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: En(o()),
        height: En(i()),
        "z-index": c(h)
      })
    ],
    void 0,
    void 0,
    "svelte-1ix3cbb"
  );
  var b = B(w);
  return st(b, () => u() ?? St), K(w), Ct(w, (x, $) => gd?.(x, $), () => "edge-labels"), D(e, w), pe(m);
}
le(
  md,
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
var Em = /* @__PURE__ */ we("<path></path>"), Pm = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function Fo(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "path", 7), o = v(t, "label", 7), i = v(t, "labelX", 7), s = v(t, "labelY", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "style", 7), p = v(t, "interactionWidth", 7, 20), f = v(t, "class", 7), h = /* @__PURE__ */ Xe(t, [
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
    set id(S) {
      n(S), g();
    },
    get path() {
      return r();
    },
    set path(S) {
      r(S), g();
    },
    get label() {
      return o();
    },
    set label(S) {
      o(S), g();
    },
    get labelX() {
      return i();
    },
    set labelX(S) {
      i(S), g();
    },
    get labelY() {
      return s();
    },
    set labelY(S) {
      s(S), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(S) {
      a(S), g();
    },
    get markerStart() {
      return l();
    },
    set markerStart(S) {
      l(S), g();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(S) {
      u(S), g();
    },
    get style() {
      return d();
    },
    set style(S) {
      d(S), g();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth(S = 20) {
      p(S), g();
    },
    get class() {
      return f();
    },
    set class(S) {
      f(S), g();
    }
  }, w = Pm(), y = se(w), b = V(y);
  {
    var x = (S) => {
      var N = Em();
      pt(N, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...h
      })), D(S, N);
    };
    ue(b, (S) => {
      p() > 0 && S(x);
    });
  }
  var $ = V(b);
  {
    var C = (S) => {
      md(S, {
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
        children: (N, M) => {
          be();
          var j = Pe();
          Ee(() => Je(j, o())), D(N, j);
        },
        $$slots: { default: !0 }
      });
    };
    ue($, (S) => {
      o() && S(C);
    });
  }
  return Ee(() => {
    ke(y, "id", n()), ke(y, "d", r()), Rt(y, 0, qn(["svelte-flow__edge-path", f()])), ke(y, "marker-start", l()), ke(y, "marker-end", u()), xt(y, d());
  }), D(e, w), pe(m);
}
le(
  Fo,
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
function Oa(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "interactionWidth", 7), o = v(t, "label", 7), i = v(t, "labelStyle", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "pathOptions", 7), u = v(t, "sourcePosition", 7), d = v(t, "sourceX", 7), p = v(t, "sourceY", 7), f = v(t, "style", 7), h = v(t, "targetPosition", 7), m = v(t, "targetX", 7), w = v(t, "targetY", 7), y = /* @__PURE__ */ P(() => ed({
    sourceX: d(),
    sourceY: p(),
    targetX: m(),
    targetY: w(),
    sourcePosition: u(),
    targetPosition: h(),
    curvature: l()?.curvature
  })), b = /* @__PURE__ */ P(() => Lo(c(y), 3)), x = /* @__PURE__ */ P(() => c(b)[0]), $ = /* @__PURE__ */ P(() => c(b)[1]), C = /* @__PURE__ */ P(() => c(b)[2]);
  var S = {
    get id() {
      return n();
    },
    set id(N) {
      n(N), g();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(N) {
      r(N), g();
    },
    get label() {
      return o();
    },
    set label(N) {
      o(N), g();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(N) {
      i(N), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(N) {
      s(N), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(N) {
      a(N), g();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(N) {
      l(N), g();
    },
    get sourcePosition() {
      return u();
    },
    set sourcePosition(N) {
      u(N), g();
    },
    get sourceX() {
      return d();
    },
    set sourceX(N) {
      d(N), g();
    },
    get sourceY() {
      return p();
    },
    set sourceY(N) {
      p(N), g();
    },
    get style() {
      return f();
    },
    set style(N) {
      f(N), g();
    },
    get targetPosition() {
      return h();
    },
    set targetPosition(N) {
      h(N), g();
    },
    get targetX() {
      return m();
    },
    set targetX(N) {
      m(N), g();
    },
    get targetY() {
      return w();
    },
    set targetY(N) {
      w(N), g();
    }
  };
  return Fo(e, {
    get id() {
      return n();
    },
    get path() {
      return c(x);
    },
    get labelX() {
      return c($);
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
  }), pe(S);
}
le(
  Oa,
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
function yd(e, t) {
  fe(t, !0);
  let n = v(t, "interactionWidth", 7), r = v(t, "label", 7), o = v(t, "labelStyle", 7), i = v(t, "style", 7), s = v(t, "markerEnd", 7), a = v(t, "markerStart", 7), l = v(t, "sourcePosition", 7), u = v(t, "sourceX", 7), d = v(t, "sourceY", 7), p = v(t, "targetPosition", 7), f = v(t, "targetX", 7), h = v(t, "targetY", 7), m = /* @__PURE__ */ P(() => ka({
    sourceX: u(),
    sourceY: d(),
    targetX: f(),
    targetY: h(),
    sourcePosition: l(),
    targetPosition: p()
  })), w = /* @__PURE__ */ P(() => Lo(c(m), 3)), y = /* @__PURE__ */ P(() => c(w)[0]), b = /* @__PURE__ */ P(() => c(w)[1]), x = /* @__PURE__ */ P(() => c(w)[2]);
  var $ = {
    get interactionWidth() {
      return n();
    },
    set interactionWidth(C) {
      n(C), g();
    },
    get label() {
      return r();
    },
    set label(C) {
      r(C), g();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(C) {
      o(C), g();
    },
    get style() {
      return i();
    },
    set style(C) {
      i(C), g();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(C) {
      s(C), g();
    },
    get markerStart() {
      return a();
    },
    set markerStart(C) {
      a(C), g();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(C) {
      l(C), g();
    },
    get sourceX() {
      return u();
    },
    set sourceX(C) {
      u(C), g();
    },
    get sourceY() {
      return d();
    },
    set sourceY(C) {
      d(C), g();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(C) {
      p(C), g();
    },
    get targetX() {
      return f();
    },
    set targetX(C) {
      f(C), g();
    },
    get targetY() {
      return h();
    },
    set targetY(C) {
      h(C), g();
    }
  };
  return Fo(e, {
    get path() {
      return c(y);
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
  }), pe($);
}
le(
  yd,
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
function wd(e, t) {
  fe(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "targetX", 7), i = v(t, "targetY", 7), s = v(t, "label", 7), a = v(t, "labelStyle", 7), l = v(t, "markerStart", 7), u = v(t, "markerEnd", 7), d = v(t, "interactionWidth", 7), p = v(t, "style", 7), f = /* @__PURE__ */ P(() => nd({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), h = /* @__PURE__ */ P(() => Lo(c(f), 3)), m = /* @__PURE__ */ P(() => c(h)[0]), w = /* @__PURE__ */ P(() => c(h)[1]), y = /* @__PURE__ */ P(() => c(h)[2]);
  var b = {
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), g();
    },
    get targetX() {
      return o();
    },
    set targetX(x) {
      o(x), g();
    },
    get targetY() {
      return i();
    },
    set targetY(x) {
      i(x), g();
    },
    get label() {
      return s();
    },
    set label(x) {
      s(x), g();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), g();
    },
    get markerStart() {
      return l();
    },
    set markerStart(x) {
      l(x), g();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(x) {
      u(x), g();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), g();
    },
    get style() {
      return p();
    },
    set style(x) {
      p(x), g();
    }
  };
  return Fo(e, {
    get path() {
      return c(m);
    },
    get labelX() {
      return c(w);
    },
    get labelY() {
      return c(y);
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
  }), pe(b);
}
le(
  wd,
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
function bd(e, t) {
  fe(t, !0);
  let n = v(t, "sourceX", 7), r = v(t, "sourceY", 7), o = v(t, "sourcePosition", 7), i = v(t, "targetX", 7), s = v(t, "targetY", 7), a = v(t, "targetPosition", 7), l = v(t, "label", 7), u = v(t, "labelStyle", 7), d = v(t, "markerStart", 7), p = v(t, "markerEnd", 7), f = v(t, "interactionWidth", 7), h = v(t, "style", 7), m = /* @__PURE__ */ P(() => ka({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), w = /* @__PURE__ */ P(() => Lo(c(m), 3)), y = /* @__PURE__ */ P(() => c(w)[0]), b = /* @__PURE__ */ P(() => c(w)[1]), x = /* @__PURE__ */ P(() => c(w)[2]);
  var $ = {
    get sourceX() {
      return n();
    },
    set sourceX(C) {
      n(C), g();
    },
    get sourceY() {
      return r();
    },
    set sourceY(C) {
      r(C), g();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(C) {
      o(C), g();
    },
    get targetX() {
      return i();
    },
    set targetX(C) {
      i(C), g();
    },
    get targetY() {
      return s();
    },
    set targetY(C) {
      s(C), g();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(C) {
      a(C), g();
    },
    get label() {
      return l();
    },
    set label(C) {
      l(C), g();
    },
    get labelStyle() {
      return u();
    },
    set labelStyle(C) {
      u(C), g();
    },
    get markerStart() {
      return d();
    },
    set markerStart(C) {
      d(C), g();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(C) {
      p(C), g();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(C) {
      f(C), g();
    },
    get style() {
      return h();
    },
    set style(C) {
      h(C), g();
    }
  };
  return Fo(e, {
    get path() {
      return c(y);
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
      return p();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return h();
    }
  }), pe($);
}
le(
  bd,
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
class Nm {
  #e;
  #t;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#e = t, this.#t = Nu(n);
  }
  get current() {
    return this.#t(), this.#e();
  }
}
const Om = /\(.+\)/, Tm = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Dm extends Nm {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Om.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => Tm.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => Ts(o, "change", i)
    );
  }
}
function Mm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return Ca(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Bl(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, u = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: w, transform: y, width: b, height: x } = e;
      if (V0({
        sourceNode: p,
        targetNode: f,
        width: b,
        height: x,
        transform: y
      }))
        w.set(p.id, p), w.set(f.id, f);
      else
        continue;
    }
    const h = o.get(d.id);
    if (h && d === h.edge && p == h.sourceNode && f == h.targetNode) {
      u.set(d.id, h);
      continue;
    }
    const m = Z0({
      id: d.id,
      sourceNode: p,
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
      zIndex: L0({
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
const xd = {
  input: fd,
  output: pd,
  default: Na,
  group: hd
}, _d = {
  straight: wd,
  smoothstep: yd,
  default: Oa,
  step: bd
};
function Lm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = Bo(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return $a(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function Vm(e) {
  class t {
    #e = /* @__PURE__ */ P(() => e.props.id ?? "1");
    get flowId() {
      return c(this.#e);
    }
    set flowId(r) {
      Q(this.#e, r);
    }
    #t = /* @__PURE__ */ Oe(null);
    get domNode() {
      return c(this.#t);
    }
    set domNode(r) {
      Q(this.#t, r);
    }
    #n = /* @__PURE__ */ Oe(null);
    get panZoom() {
      return c(this.#n);
    }
    set panZoom(r) {
      Q(this.#n, r);
    }
    #r = /* @__PURE__ */ Oe(e.width ?? 0);
    get width() {
      return c(this.#r);
    }
    set width(r) {
      Q(this.#r, r);
    }
    #l = /* @__PURE__ */ Oe(e.height ?? 0);
    get height() {
      return c(this.#l);
    }
    set height(r) {
      Q(this.#l, r);
    }
    #a = /* @__PURE__ */ P(() => {
      const r = X0(e.nodes, this.nodeLookup, this.parentLookup, {
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
      return c(this.#a);
    }
    set nodesInitialized(r) {
      Q(this.#a, r);
    }
    #o = /* @__PURE__ */ P(() => this.panZoom !== null);
    get viewportInitialized() {
      return c(this.#o);
    }
    set viewportInitialized(r) {
      Q(this.#o, r);
    }
    #i = /* @__PURE__ */ P(() => (tm(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return c(this.#i);
    }
    set _edges(r) {
      Q(this.#i, r);
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
    #s = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return c(this.#s);
    }
    set selectedNodes(r) {
      Q(this.#s, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ P(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return c(this.#u);
    }
    set selectedEdges(r) {
      Q(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ P(() => {
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
        const { viewport: m, width: w, height: y } = this, b = [m.x, m.y, m.zoom];
        p = Mm(s, b, w, y), f = Bl({
          ...h,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: b,
          width: w,
          height: y
        });
      } else
        p = this.nodeLookup, f = Bl(h);
      return { nodes: p, edges: f };
    });
    get visible() {
      return c(this.#c);
    }
    set visible(r) {
      Q(this.#c, r);
    }
    #d = /* @__PURE__ */ P(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return c(this.#d);
    }
    set nodesDraggable(r) {
      Q(this.#d, r);
    }
    #f = /* @__PURE__ */ P(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return c(this.#f);
    }
    set nodesConnectable(r) {
      Q(this.#f, r);
    }
    #h = /* @__PURE__ */ P(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return c(this.#h);
    }
    set elementsSelectable(r) {
      Q(this.#h, r);
    }
    #p = /* @__PURE__ */ P(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return c(this.#p);
    }
    set nodesFocusable(r) {
      Q(this.#p, r);
    }
    #w = /* @__PURE__ */ P(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return c(this.#w);
    }
    set edgesFocusable(r) {
      Q(this.#w, r);
    }
    #b = /* @__PURE__ */ P(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return c(this.#b);
    }
    set disableKeyboardA11y(r) {
      Q(this.#b, r);
    }
    #x = /* @__PURE__ */ P(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return c(this.#x);
    }
    set minZoom(r) {
      Q(this.#x, r);
    }
    #m = /* @__PURE__ */ P(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return c(this.#m);
    }
    set maxZoom(r) {
      Q(this.#m, r);
    }
    #g = /* @__PURE__ */ P(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return c(this.#g);
    }
    set nodeOrigin(r) {
      Q(this.#g, r);
    }
    #v = /* @__PURE__ */ P(() => e.props.nodeExtent ?? js);
    get nodeExtent() {
      return c(this.#v);
    }
    set nodeExtent(r) {
      Q(this.#v, r);
    }
    #y = /* @__PURE__ */ P(() => e.props.translateExtent ?? js);
    get translateExtent() {
      return c(this.#y);
    }
    set translateExtent(r) {
      Q(this.#y, r);
    }
    #_ = /* @__PURE__ */ P(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return c(this.#_);
    }
    set defaultEdgeOptions(r) {
      Q(this.#_, r);
    }
    #C = /* @__PURE__ */ P(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return c(this.#C);
    }
    set nodeDragThreshold(r) {
      Q(this.#C, r);
    }
    #$ = /* @__PURE__ */ P(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return c(this.#$);
    }
    set autoPanOnNodeDrag(r) {
      Q(this.#$, r);
    }
    #k = /* @__PURE__ */ P(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return c(this.#k);
    }
    set autoPanOnConnect(r) {
      Q(this.#k, r);
    }
    #S = /* @__PURE__ */ P(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return c(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Q(this.#S, r);
    }
    #E = /* @__PURE__ */ P(() => e.props.autoPanSpeed ?? 15);
    get autoPanSpeed() {
      return c(this.#E);
    }
    set autoPanSpeed(r) {
      Q(this.#E, r);
    }
    #P = /* @__PURE__ */ P(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return c(this.#P);
    }
    set connectionDragThreshold(r) {
      Q(this.#P, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #N = /* @__PURE__ */ P(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return c(this.#N);
    }
    set snapGrid(r) {
      Q(this.#N, r);
    }
    #O = /* @__PURE__ */ Oe(!1);
    get dragging() {
      return c(this.#O);
    }
    set dragging(r) {
      Q(this.#O, r);
    }
    #T = /* @__PURE__ */ Oe(null);
    get selectionRect() {
      return c(this.#T);
    }
    set selectionRect(r) {
      Q(this.#T, r);
    }
    #D = /* @__PURE__ */ Oe(!1);
    get selectionKeyPressed() {
      return c(this.#D);
    }
    set selectionKeyPressed(r) {
      Q(this.#D, r);
    }
    #M = /* @__PURE__ */ Oe(!1);
    get multiselectionKeyPressed() {
      return c(this.#M);
    }
    set multiselectionKeyPressed(r) {
      Q(this.#M, r);
    }
    #L = /* @__PURE__ */ Oe(!1);
    get deleteKeyPressed() {
      return c(this.#L);
    }
    set deleteKeyPressed(r) {
      Q(this.#L, r);
    }
    #V = /* @__PURE__ */ Oe(!1);
    get panActivationKeyPressed() {
      return c(this.#V);
    }
    set panActivationKeyPressed(r) {
      Q(this.#V, r);
    }
    #z = /* @__PURE__ */ Oe(!1);
    get zoomActivationKeyPressed() {
      return c(this.#z);
    }
    set zoomActivationKeyPressed(r) {
      Q(this.#z, r);
    }
    #H = /* @__PURE__ */ Oe(null);
    get selectionRectMode() {
      return c(this.#H);
    }
    set selectionRectMode(r) {
      Q(this.#H, r);
    }
    #A = /* @__PURE__ */ Oe("");
    get ariaLiveMessage() {
      return c(this.#A);
    }
    set ariaLiveMessage(r) {
      Q(this.#A, r);
    }
    #I = /* @__PURE__ */ P(() => e.props.selectionMode ?? Oi.Partial);
    get selectionMode() {
      return c(this.#I);
    }
    set selectionMode(r) {
      Q(this.#I, r);
    }
    #R = /* @__PURE__ */ P(() => ({ ...xd, ...e.props.nodeTypes }));
    get nodeTypes() {
      return c(this.#R);
    }
    set nodeTypes(r) {
      Q(this.#R, r);
    }
    #j = /* @__PURE__ */ P(() => ({ ..._d, ...e.props.edgeTypes }));
    get edgeTypes() {
      return c(this.#j);
    }
    set edgeTypes(r) {
      Q(this.#j, r);
    }
    #Z = /* @__PURE__ */ P(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return c(this.#Z);
    }
    set noPanClass(r) {
      Q(this.#Z, r);
    }
    #K = /* @__PURE__ */ P(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return c(this.#K);
    }
    set noDragClass(r) {
      Q(this.#K, r);
    }
    #B = /* @__PURE__ */ P(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return c(this.#B);
    }
    set noWheelClass(r) {
      Q(this.#B, r);
    }
    #Y = /* @__PURE__ */ P(() => T0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return c(this.#Y);
    }
    set ariaLabelConfig(r) {
      Q(this.#Y, r);
    }
    #W = /* @__PURE__ */ Oe(Lm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return c(this.#W);
    }
    set _viewport(r) {
      Q(this.#W, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #F = /* @__PURE__ */ Oe(
      // _connection is viewport independent and originating from XYHandle
      Zs
    );
    get _connection() {
      return c(this.#F);
    }
    set _connection(r) {
      Q(this.#F, r);
    }
    #q = /* @__PURE__ */ P(() => this._connection.inProgress ? {
      ...this._connection,
      to: Wo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return c(this.#q);
    }
    set connection(r) {
      Q(this.#q, r);
    }
    #X = /* @__PURE__ */ P(() => e.props.connectionMode ?? Ur.Strict);
    get connectionMode() {
      return c(this.#X);
    }
    set connectionMode(r) {
      Q(this.#X, r);
    }
    #U = /* @__PURE__ */ P(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return c(this.#U);
    }
    set connectionRadius(r) {
      Q(this.#U, r);
    }
    #G = /* @__PURE__ */ P(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return c(this.#G);
    }
    set isValidConnection(r) {
      Q(this.#G, r);
    }
    #J = /* @__PURE__ */ P(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return c(this.#J);
    }
    set selectNodesOnDrag(r) {
      Q(this.#J, r);
    }
    #Q = /* @__PURE__ */ P(() => e.props.defaultMarkerColor === void 0 ? "#b1b1b7" : e.props.defaultMarkerColor);
    get defaultMarkerColor() {
      return c(this.#Q);
    }
    set defaultMarkerColor(r) {
      Q(this.#Q, r);
    }
    #ee = /* @__PURE__ */ P(() => K0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return c(this.#ee);
    }
    set markers(r) {
      Q(this.#ee, r);
    }
    #te = /* @__PURE__ */ P(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return c(this.#te);
    }
    set onlyRenderVisibleElements(r) {
      Q(this.#te, r);
    }
    #ne = /* @__PURE__ */ P(() => e.props.onflowerror ?? E0);
    get onerror() {
      return c(this.#ne);
    }
    set onerror(r) {
      Q(this.#ne, r);
    }
    #re = /* @__PURE__ */ P(() => e.props.ondelete);
    get ondelete() {
      return c(this.#re);
    }
    set ondelete(r) {
      Q(this.#re, r);
    }
    #oe = /* @__PURE__ */ P(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return c(this.#oe);
    }
    set onbeforedelete(r) {
      Q(this.#oe, r);
    }
    #ie = /* @__PURE__ */ P(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return c(this.#ie);
    }
    set onbeforeconnect(r) {
      Q(this.#ie, r);
    }
    #se = /* @__PURE__ */ P(() => e.props.onconnect);
    get onconnect() {
      return c(this.#se);
    }
    set onconnect(r) {
      Q(this.#se, r);
    }
    #ae = /* @__PURE__ */ P(() => e.props.onconnectstart);
    get onconnectstart() {
      return c(this.#ae);
    }
    set onconnectstart(r) {
      Q(this.#ae, r);
    }
    #le = /* @__PURE__ */ P(() => e.props.onconnectend);
    get onconnectend() {
      return c(this.#le);
    }
    set onconnectend(r) {
      Q(this.#le, r);
    }
    #ue = /* @__PURE__ */ P(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return c(this.#ue);
    }
    set onbeforereconnect(r) {
      Q(this.#ue, r);
    }
    #ce = /* @__PURE__ */ P(() => e.props.onreconnect);
    get onreconnect() {
      return c(this.#ce);
    }
    set onreconnect(r) {
      Q(this.#ce, r);
    }
    #de = /* @__PURE__ */ P(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return c(this.#de);
    }
    set onreconnectstart(r) {
      Q(this.#de, r);
    }
    #fe = /* @__PURE__ */ P(() => e.props.onreconnectend);
    get onreconnectend() {
      return c(this.#fe);
    }
    set onreconnectend(r) {
      Q(this.#fe, r);
    }
    #pe = /* @__PURE__ */ P(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return c(this.#pe);
    }
    set clickConnect(r) {
      Q(this.#pe, r);
    }
    #he = /* @__PURE__ */ P(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return c(this.#he);
    }
    set onclickconnectstart(r) {
      Q(this.#he, r);
    }
    #ge = /* @__PURE__ */ P(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return c(this.#ge);
    }
    set onclickconnectend(r) {
      Q(this.#ge, r);
    }
    #ve = /* @__PURE__ */ Oe(null);
    get clickConnectStartHandle() {
      return c(this.#ve);
    }
    set clickConnectStartHandle(r) {
      Q(this.#ve, r);
    }
    #me = /* @__PURE__ */ P(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return c(this.#me);
    }
    set onselectiondrag(r) {
      Q(this.#me, r);
    }
    #ye = /* @__PURE__ */ P(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return c(this.#ye);
    }
    set onselectiondragstart(r) {
      Q(this.#ye, r);
    }
    #we = /* @__PURE__ */ P(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return c(this.#we);
    }
    set onselectiondragstop(r) {
      Q(this.#we, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await k0(
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
    _prefersDark = new Dm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #be = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return c(this.#be);
    }
    set colorMode(r) {
      Q(this.#be, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Zs, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function vn() {
  const e = ir(Li);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const Li = Symbol();
function Cd(e) {
  const t = Vm(e);
  function n(I) {
    t.nodeTypes = {
      ...xd,
      ...I
    };
  }
  function r(I) {
    t.edgeTypes = {
      ..._d,
      ...I
    };
  }
  function o(I) {
    t.edges = A0(I, t.edges);
  }
  const i = (I, H = !1) => {
    t.nodes = t.nodes.map((k) => {
      const T = I.get(k.id);
      return T ? { ...k, position: T.position, dragging: H } : k;
    });
  };
  function s(I) {
    const { changes: H, updatedInternals: k } = Q0(I, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!k)
      return;
    F0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const T = /* @__PURE__ */ new Map();
    for (const _ of H) {
      const E = t.nodeLookup.get(_.id)?.internals.userNode;
      if (!E)
        continue;
      const O = { ...E };
      switch (_.type) {
        case "dimensions": {
          const Z = { ...O.measured, ..._.dimensions };
          _.setAttributes && (O.width = _.dimensions?.width ?? O.width, O.height = _.dimensions?.height ?? O.height), O.measured = Z;
          break;
        }
        case "position":
          O.position = _.position ?? O.position;
          break;
      }
      T.set(_.id, O);
    }
    t.nodes = t.nodes.map((_) => T.get(_.id) ?? _);
  }
  function a(I) {
    const H = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = I, t.fitViewResolver = H, t.nodes = [...t.nodes], H.promise;
  }
  async function l(I, H, k) {
    const T = typeof k?.zoom < "u" ? k.zoom : t.maxZoom, _ = t.panZoom;
    return _ ? (await _.setViewport({
      x: t.width / 2 - I * T,
      y: t.height / 2 - H * T,
      zoom: T
    }, { duration: k?.duration, ease: k?.ease, interpolate: k?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function u(I, H) {
    const k = t.panZoom;
    return k ? k.scaleBy(I, H) : Promise.resolve(!1);
  }
  function d(I) {
    return u(1.2, I);
  }
  function p(I) {
    return u(1 / 1.2, I);
  }
  function f(I) {
    const H = t.panZoom;
    H && (H.setScaleExtent([I, t.maxZoom]), t.minZoom = I);
  }
  function h(I) {
    const H = t.panZoom;
    H && (H.setScaleExtent([t.minZoom, I]), t.maxZoom = I);
  }
  function m(I) {
    const H = t.panZoom;
    H && (H.setTranslateExtent(I), t.translateExtent = I);
  }
  function w(I, H = null) {
    let k = !1;
    const T = I.map((_) => (!H || H.has(_.id)) && _.selected ? (k = !0, { ..._, selected: !1 }) : _);
    return [k, T];
  }
  function y(I) {
    const H = I?.nodes ? new Set(I.nodes.map((Z) => Z.id)) : null, [k, T] = w(t.nodes, H);
    k && (t.nodes = T);
    const _ = I?.edges ? new Set(I.edges.map((Z) => Z.id)) : null, [E, O] = w(t.edges, _);
    E && (t.edges = O);
  }
  function b(I) {
    const H = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((k) => {
      const T = I.includes(k.id), _ = H && k.selected || T;
      return !!k.selected !== _ ? { ...k, selected: _ } : k;
    }), H || y({ nodes: [] });
  }
  function x(I) {
    const H = t.multiselectionKeyPressed;
    t.edges = t.edges.map((k) => {
      const T = I.includes(k.id), _ = H && k.selected || T;
      return !!k.selected !== _ ? { ...k, selected: _ } : k;
    }), H || y({ edges: [] });
  }
  function $(I, H, k) {
    const T = t.nodeLookup.get(I);
    if (!T) {
      console.warn("012", Eo.error012(I));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, T.selected ? (H || T.selected && t.multiselectionKeyPressed) && (y({ nodes: [T], edges: [] }), requestAnimationFrame(() => k?.blur())) : b([I]);
  }
  function C(I) {
    const H = t.edgeLookup.get(I);
    if (!H) {
      console.warn("012", Eo.error012(I));
      return;
    }
    (H.selectable || t.elementsSelectable && typeof H.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, H.selected ? H.selected && t.multiselectionKeyPressed && y({ nodes: [], edges: [H] }) : x([I]));
  }
  function S(I, H) {
    const { nodeExtent: k, snapGrid: T, nodeOrigin: _, nodeLookup: E, nodesDraggable: O, onerror: Z } = t, Y = /* @__PURE__ */ new Map(), W = T?.[0] ?? 5, L = T?.[1] ?? 5, U = I.x * W * H, X = I.y * L * H;
    for (const J of E.values()) {
      if (!(J.selected && (J.draggable || O && typeof J.draggable > "u")))
        continue;
      let R = {
        x: J.internals.positionAbsolute.x + U,
        y: J.internals.positionAbsolute.y + X
      };
      T && (R = Yo(R, T));
      const { position: q, positionAbsolute: G } = Yc({
        nodeId: J.id,
        nextPosition: R,
        nodeLookup: E,
        nodeExtent: k,
        nodeOrigin: _,
        onError: Z
      });
      J.position = q, J.internals.positionAbsolute = G, Y.set(J.id, J);
    }
    i(Y);
  }
  function N(I) {
    return em({
      delta: I,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const M = (I) => {
    t._connection = { ...I };
  };
  function j() {
    t._connection = Zs;
  }
  function A() {
    t.resetStoreValues(), y();
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
    setMaxZoom: h,
    setTranslateExtent: m,
    unselectNodesAndEdges: y,
    addSelectedNodes: b,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: C,
    moveSelectedNodes: S,
    panBy: N,
    updateConnection: M,
    cancelConnection: j,
    reset: A
  });
}
function zm(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, setPanZoomInstance: u, onDraggingChange: d, onTransformChange: p } = t, f = wm({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: d
  }), h = f.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && p([h.x, h.y, h.zoom]), u(f), f.update(t), {
    update(m) {
      f.update(m);
    }
  };
}
var Hm = /* @__PURE__ */ te('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function $d(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnScrollMode", 7), o = v(t, "preventScrolling", 7), i = v(t, "zoomOnScroll", 7), s = v(t, "zoomOnDoubleClick", 7), a = v(t, "zoomOnPinch", 7), l = v(t, "panOnDrag", 7), u = v(t, "panOnScroll", 7), d = v(t, "panOnScrollSpeed", 7), p = v(t, "paneClickDistance", 7), f = v(t, "selectionOnDrag", 7), h = v(t, "onmovestart", 7), m = v(t, "onmove", 7), w = v(t, "onmoveend", 7), y = v(t, "oninit", 7), b = v(t, "children", 7), x = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), $ = /* @__PURE__ */ P(() => n().panActivationKeyPressed || u());
  const { viewport: C } = n();
  let S = !1;
  rt(() => {
    !S && n().viewportInitialized && (y()?.(), S = !0);
  });
  var N = {
    get store() {
      return n();
    },
    set store(A) {
      n(A), g();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(A) {
      r(A), g();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(A) {
      o(A), g();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(A) {
      i(A), g();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(A) {
      s(A), g();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(A) {
      a(A), g();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(A) {
      l(A), g();
    },
    get panOnScroll() {
      return u();
    },
    set panOnScroll(A) {
      u(A), g();
    },
    get panOnScrollSpeed() {
      return d();
    },
    set panOnScrollSpeed(A) {
      d(A), g();
    },
    get paneClickDistance() {
      return p();
    },
    set paneClickDistance(A) {
      p(A), g();
    },
    get selectionOnDrag() {
      return f();
    },
    set selectionOnDrag(A) {
      f(A), g();
    },
    get onmovestart() {
      return h();
    },
    set onmovestart(A) {
      h(A), g();
    },
    get onmove() {
      return m();
    },
    set onmove(A) {
      m(A), g();
    },
    get onmoveend() {
      return w();
    },
    set onmoveend(A) {
      w(A), g();
    },
    get oninit() {
      return y();
    },
    set oninit(A) {
      y(A), g();
    },
    get children() {
      return b();
    },
    set children(A) {
      b(A), g();
    }
  }, M = Hm(), j = B(M);
  return st(j, b), K(M), Ct(M, (A, I) => zm?.(A, I), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: C,
    onDraggingChange: (A) => {
      n(n().dragging = A, !0);
    },
    setPanZoomInstance: (A) => {
      n(n().panZoom = A, !0);
    },
    onPanZoomStart: h(),
    onPanZoom: m(),
    onPanZoomEnd: w(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: c($),
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
    paneClickDistance: p(),
    selectionOnDrag: f(),
    onTransformChange: (A) => {
      n(n().viewport = { x: A[0], y: A[1], zoom: A[2] }, !0);
    },
    connectionInProgress: n().connection.inProgress
  })), D(e, M), pe(N);
}
le(
  $d,
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
function Yl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Wl(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Fl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var Am = /* @__PURE__ */ te("<div><!></div>");
function kd(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "panOnDrag", 7, !0), o = v(t, "paneClickDistance", 7, 1), i = v(t, "selectionOnDrag", 7), s = v(t, "onpaneclick", 7), a = v(t, "onpanecontextmenu", 7), l = v(t, "onselectionstart", 7), u = v(t, "onselectionend", 7), d = v(t, "children", 7), p, f = null, h = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ P(() => n().panActivationKeyPressed || r()), y = /* @__PURE__ */ P(() => n().selectionKeyPressed || !!n().selectionRect || i() && c(w) !== !0), b = /* @__PURE__ */ P(() => n().elementsSelectable && (c(y) || n().selectionRectMode === "user")), x = !1;
  function $(E) {
    if (f = p?.getBoundingClientRect(), !f) return;
    const O = E.target === p, Z = !O && !!E.target.closest(".nokey"), Y = i() && O || n().selectionKeyPressed;
    if (Z || !c(y) || !Y || E.button !== 0 || !E.isPrimary)
      return;
    E.target?.setPointerCapture?.(E.pointerId), x = !1;
    const { x: W, y: L } = cn(E, f);
    n(n().selectionRect = { width: 0, height: 0, startX: W, startY: L, x: W, y: L }, !0), O || (E.stopPropagation(), E.preventDefault());
  }
  function C(E) {
    if (!c(y) || !f || !n().selectionRect)
      return;
    const O = cn(E, f), { startX: Z = 0, startY: Y = 0 } = n().selectionRect;
    if (!x) {
      const J = n().selectionKeyPressed ? 0 : o();
      if (Math.hypot(O.x - Z, O.y - Y) <= J)
        return;
      n().unselectNodesAndEdges(), l()?.(E);
    }
    x = !0;
    const W = {
      ...n().selectionRect,
      x: O.x < Z ? O.x : Z,
      y: O.y < Y ? O.y : Y,
      width: Math.abs(O.x - Z),
      height: Math.abs(O.y - Y)
    }, L = h, U = m;
    h = new Set(Ca(
      n().nodeLookup,
      W,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === Oi.Partial,
      !0
    ).map((J) => J.id));
    const X = n().defaultEdgeOptions.selectable ?? !0;
    m = /* @__PURE__ */ new Set();
    for (const J of h) {
      const R = n().connectionLookup.get(J);
      if (R)
        for (const { edgeId: q } of R.values()) {
          const G = n().edgeLookup.get(q);
          G && (G.selectable ?? X) && m.add(q);
        }
    }
    Fl(L, h) || n(n().nodes = n().nodes.map(Wl(h)), !0), Fl(U, m) || n(n().edges = n().edges.map(Wl(m)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = W, !0);
  }
  function S(E) {
    E.button === 0 && (E.target?.releasePointerCapture?.(E.pointerId), !x && E.target === p && j?.(E), n(n().selectionRect = null, !0), x && n(n().selectionRectMode = h.size > 0 ? "nodes" : null, !0), x && u()?.(E));
  }
  const N = (E) => {
    if (Array.isArray(c(w)) && c(w).includes(2)) {
      E.preventDefault();
      return;
    }
    a()?.({ event: E });
  }, M = (E) => {
    x && (E.stopPropagation(), x = !1);
  };
  function j(E) {
    if (x || n().connection.inProgress) {
      x = !1;
      return;
    }
    s()?.({ event: E }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0), n(n().selectionRect = null, !0);
  }
  var A = {
    get store() {
      return n();
    },
    set store(E) {
      n(E), g();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(E = !0) {
      r(E), g();
    },
    get paneClickDistance() {
      return o();
    },
    set paneClickDistance(E = 1) {
      o(E), g();
    },
    get selectionOnDrag() {
      return i();
    },
    set selectionOnDrag(E) {
      i(E), g();
    },
    get onpaneclick() {
      return s();
    },
    set onpaneclick(E) {
      s(E), g();
    },
    get onpanecontextmenu() {
      return a();
    },
    set onpanecontextmenu(E) {
      a(E), g();
    },
    get onselectionstart() {
      return l();
    },
    set onselectionstart(E) {
      l(E), g();
    },
    get onselectionend() {
      return u();
    },
    set onselectionend(E) {
      u(E), g();
    },
    get children() {
      return d();
    },
    set children(E) {
      d(E), g();
    }
  }, I = Am();
  let H;
  var k = /* @__PURE__ */ P(() => c(b) ? void 0 : Yl(j, p));
  I.__click = function(...E) {
    c(k)?.apply(this, E);
  }, I.__pointermove = function(...E) {
    (c(b) ? C : void 0)?.apply(this, E);
  }, I.__pointerup = function(...E) {
    (c(b) ? S : void 0)?.apply(this, E);
  };
  var T = /* @__PURE__ */ P(() => Yl(N, p));
  I.__contextmenu = function(...E) {
    c(T)?.apply(this, E);
  };
  var _ = B(I);
  return st(_, d), K(I), jt(I, (E) => p = E, () => p), Ee((E) => H = Rt(I, 1, "svelte-flow__pane svelte-flow__container", null, H, E), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: c(y)
    })
  ]), _i(
    "pointerdown",
    I,
    function(...E) {
      (c(b) ? $ : void 0)?.apply(this, E);
    },
    !0
  ), _i(
    "click",
    I,
    function(...E) {
      (c(b) ? M : void 0)?.apply(this, E);
    },
    !0
  ), D(e, I), pe(A);
}
fr(["click", "pointermove", "pointerup", "contextmenu"]);
le(
  kd,
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
var Im = /* @__PURE__ */ te('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Sd(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "children", 7);
  var o = {
    get store() {
      return n();
    },
    set store(l) {
      n(l), g();
    },
    get children() {
      return r();
    },
    set children(l) {
      r(l), g();
    }
  }, i = Im();
  let s;
  var a = B(i);
  return st(a, r), K(i), Ee(() => s = xt(i, "", s, {
    transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
  })), D(e, i), pe(o);
}
le(Sd, { store: {}, children: {} }, [], [], !0);
function Ed(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = im({
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
var Rm = /* @__PURE__ */ te('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-1u4lacj"> </div>'), jm = /* @__PURE__ */ te('<div class="a11y-hidden svelte-1u4lacj"> </div> <div class="a11y-hidden svelte-1u4lacj"> </div> <!>', 1);
const Zm = {
  hash: "svelte-1u4lacj",
  code: ".a11y-hidden.svelte-1u4lacj {display:none;}.a11y-live-msg.svelte-1u4lacj {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Pd(e, t) {
  fe(t, !0), Fe(e, Zm);
  let n = v(t, "store", 7);
  var r = {
    get store() {
      return n();
    },
    set store(p) {
      n(p), g();
    }
  }, o = jm(), i = se(o), s = B(i, !0);
  K(i);
  var a = V(i, 2), l = B(a, !0);
  K(a);
  var u = V(a, 2);
  {
    var d = (p) => {
      var f = Rm(), h = B(f, !0);
      K(f), Ee(() => {
        ke(f, "id", `${Km}-${n().flowId}`), Je(h, n().ariaLiveMessage);
      }), D(p, f);
    };
    ue(u, (p) => {
      n().disableKeyboardA11y || p(d);
    });
  }
  return Ee(() => {
    ke(i, "id", `${Nd}-${n().flowId}`), Je(s, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), ke(a, "id", `${Od}-${n().flowId}`), Je(l, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), D(e, o), pe(r);
}
le(Pd, { store: {} }, [], [], !0);
const Nd = "svelte-flow__node-desc", Od = "svelte-flow__edge-desc", Km = "svelte-flow__aria-live";
var Bm = /* @__PURE__ */ te("<div><!></div>");
function Td(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "node", 7), o = v(t, "resizeObserver", 7), i = v(t, "nodeClickDistance", 7), s = v(t, "onnodeclick", 7), a = v(t, "onnodedrag", 7), l = v(t, "onnodedragstart", 7), u = v(t, "onnodedragstop", 7), d = v(t, "onnodepointerenter", 7), p = v(t, "onnodepointerleave", 7), f = v(t, "onnodepointermove", 7), h = v(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ P(() => Nt(r().data, () => ({}), !0)), w = /* @__PURE__ */ P(() => Nt(r().selected, !1)), y = /* @__PURE__ */ P(() => r().draggable), b = /* @__PURE__ */ P(() => r().selectable), x = /* @__PURE__ */ P(() => Nt(r().deletable, !0)), $ = /* @__PURE__ */ P(() => r().connectable), C = /* @__PURE__ */ P(() => r().focusable), S = /* @__PURE__ */ P(() => Nt(r().hidden, !1)), N = /* @__PURE__ */ P(() => Nt(r().dragging, !1)), M = /* @__PURE__ */ P(() => Nt(r().style, "")), j = /* @__PURE__ */ P(() => r().class), A = /* @__PURE__ */ P(() => Nt(r().type, "default")), I = /* @__PURE__ */ P(() => r().parentId), H = /* @__PURE__ */ P(() => r().sourcePosition), k = /* @__PURE__ */ P(() => r().targetPosition), T = /* @__PURE__ */ P(() => Nt(r().measured, () => ({ width: 0, height: 0 }), !0).width), _ = /* @__PURE__ */ P(() => Nt(r().measured, () => ({ width: 0, height: 0 }), !0).height), E = /* @__PURE__ */ P(() => r().initialWidth), O = /* @__PURE__ */ P(() => r().initialHeight), Z = /* @__PURE__ */ P(() => r().width), Y = /* @__PURE__ */ P(() => r().height), W = /* @__PURE__ */ P(() => r().dragHandle), L = /* @__PURE__ */ P(() => Nt(r().internals.z, 0)), U = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), J = /* @__PURE__ */ P(() => r().internals.userNode), { id: R } = r(), q = /* @__PURE__ */ P(() => c(y) ?? n().nodesDraggable), G = /* @__PURE__ */ P(() => c(b) ?? n().elementsSelectable), ne = /* @__PURE__ */ P(() => c($) ?? n().nodesConnectable), re = /* @__PURE__ */ P(() => Xc(r())), ee = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ve = /* @__PURE__ */ P(() => c(re) && c(ee)), ce = /* @__PURE__ */ P(() => c(C) ?? n().nodesFocusable);
  function ie(ye) {
    return n().parentLookup.has(ye);
  }
  let ae = /* @__PURE__ */ P(() => ie(R)), me = /* @__PURE__ */ Oe(null), ge = null, xe = c(A), de = c(H), _e = c(k), Le = /* @__PURE__ */ P(() => n().nodeTypes[c(A)] ?? Na), F = /* @__PURE__ */ P(() => n().ariaLabelConfig);
  Br("svelteflow__node_connectable", {
    get value() {
      return c(ne);
    }
  }), Br("svelteflow__node_id", R);
  let Ye = /* @__PURE__ */ P(() => {
    const ye = c(T) === void 0 ? c(Z) ?? c(E) : c(Z), We = c(_) === void 0 ? c(Y) ?? c(O) : c(Y);
    if (!(ye === void 0 && We === void 0 && c(M) === void 0))
      return `${c(M)};${ye ? `width:${En(ye)};` : ""}${We ? `height:${En(We)};` : ""}`;
  });
  rt(() => {
    (c(A) !== xe || c(H) !== de || c(k) !== _e) && c(me) !== null && requestAnimationFrame(() => {
      c(me) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[R, { id: R, nodeElement: c(me), force: !0 }]]));
    }), xe = c(A), de = c(H), _e = c(k);
  }), rt(() => {
    o() && (!c(ve) || c(me) !== ge) && (ge && o().unobserve(ge), c(me) && o().observe(c(me)), ge = c(me));
  }), Ro(() => {
    ge && o()?.unobserve(ge);
  });
  function ze(ye) {
    c(G) && (!n().selectNodesOnDrag || !c(q) || n().nodeDragThreshold > 0) && n().handleNodeSelection(R), s()?.({ node: c(J), event: ye });
  }
  function Ze(ye) {
    if (!(Jc(ye) || n().disableKeyboardA11y))
      if (Kc.includes(ye.key) && c(G)) {
        const We = ye.key === "Escape";
        n().handleNodeSelection(R, We, c(me));
      } else c(q) && r().selected && Object.prototype.hasOwnProperty.call(Mi, ye.key) && (ye.preventDefault(), n(
        n().ariaLiveMessage = c(F)["node.a11yDescription.ariaLiveMessage"]({
          direction: ye.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(Mi[ye.key], ye.shiftKey ? 4 : 1));
  }
  const Ke = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !c(me)?.matches(":focus-visible"))
      return;
    const { width: ye, height: We, viewport: vt } = n();
    Ca(/* @__PURE__ */ new Map([[R, r()]]), { x: 0, y: 0, width: ye, height: We }, [vt.x, vt.y, vt.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: vt.zoom });
  };
  var ot = {
    get store() {
      return n();
    },
    set store(ye) {
      n(ye), g();
    },
    get node() {
      return r();
    },
    set node(ye) {
      r(ye), g();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(ye) {
      o(ye), g();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(ye) {
      i(ye), g();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(ye) {
      s(ye), g();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(ye) {
      a(ye), g();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(ye) {
      l(ye), g();
    },
    get onnodedragstop() {
      return u();
    },
    set onnodedragstop(ye) {
      u(ye), g();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(ye) {
      d(ye), g();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(ye) {
      p(ye), g();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(ye) {
      f(ye), g();
    },
    get onnodecontextmenu() {
      return h();
    },
    set onnodecontextmenu(ye) {
      h(ye), g();
    }
  }, _t = Ne(), Ue = se(_t);
  {
    var Ie = (ye) => {
      var We = Bm();
      pt(We, () => ({
        "data-id": R,
        class: [
          "svelte-flow__node",
          `svelte-flow__node-${c(A)}`,
          c(j)
        ],
        style: c(Ye),
        onclick: ze,
        onpointerenter: d() ? (qe) => d()({ node: c(J), event: qe }) : void 0,
        onpointerleave: p() ? (qe) => p()({ node: c(J), event: qe }) : void 0,
        onpointermove: f() ? (qe) => f()({ node: c(J), event: qe }) : void 0,
        oncontextmenu: h() ? (qe) => h()({ node: c(J), event: qe }) : void 0,
        onkeydown: c(ce) ? Ze : void 0,
        onfocus: c(ce) ? Ke : void 0,
        tabIndex: c(ce) ? 0 : void 0,
        role: r().ariaRole ?? (c(ce) ? "group" : void 0),
        "aria-roledescription": "node",
        "aria-describedby": n().disableKeyboardA11y ? void 0 : `${Nd}-${n().flowId}`,
        ...r().domAttributes,
        [Qn]: {
          dragging: c(N),
          selected: c(w),
          draggable: c(q),
          connectable: c(ne),
          selectable: c(G),
          nopan: c(q),
          parent: c(ae)
        },
        [_n]: {
          "z-index": c(L),
          transform: `translate(${c(U) ?? ""}px, ${c(X) ?? ""}px)`,
          visibility: c(re) ? "visible" : "hidden"
        }
      }));
      var vt = B(We);
      qi(vt, () => c(Le), (qe, Dt) => {
        Dt(qe, {
          get data() {
            return c(m);
          },
          get id() {
            return R;
          },
          get selected() {
            return c(w);
          },
          get selectable() {
            return c(G);
          },
          get deletable() {
            return c(x);
          },
          get sourcePosition() {
            return c(H);
          },
          get targetPosition() {
            return c(k);
          },
          get zIndex() {
            return c(L);
          },
          get dragging() {
            return c(N);
          },
          get draggable() {
            return c(q);
          },
          get dragHandle() {
            return c(W);
          },
          get parentId() {
            return c(I);
          },
          get type() {
            return c(A);
          },
          get isConnectable() {
            return c(ne);
          },
          get positionAbsoluteX() {
            return c(U);
          },
          get positionAbsoluteY() {
            return c(X);
          },
          get width() {
            return c(Z);
          },
          get height() {
            return c(Y);
          }
        });
      }), K(We), Ct(We, (qe, Dt) => Ed?.(qe, Dt), () => ({
        nodeId: R,
        isSelectable: c(G),
        disabled: !c(q),
        handleSelector: c(W),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (qe, Dt, rn, dt) => {
          a()?.({ event: qe, targetNode: rn, nodes: dt });
        },
        onDragStart: (qe, Dt, rn, dt) => {
          l()?.({ event: qe, targetNode: rn, nodes: dt });
        },
        onDragStop: (qe, Dt, rn, dt) => {
          u()?.({ event: qe, targetNode: rn, nodes: dt });
        },
        store: n()
      })), jt(We, (qe) => Q(me, qe), () => c(me)), D(ye, We);
    };
    ue(Ue, (ye) => {
      c(S) || ye(Ie);
    });
  }
  return D(e, _t), pe(ot);
}
le(
  Td,
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
var Ym = /* @__PURE__ */ te('<div class="svelte-flow__nodes"></div>');
function Dd(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "nodeClickDistance", 7), o = v(t, "onnodeclick", 7), i = v(t, "onnodecontextmenu", 7), s = v(t, "onnodepointerenter", 7), a = v(t, "onnodepointermove", 7), l = v(t, "onnodepointerleave", 7), u = v(t, "onnodedrag", 7), d = v(t, "onnodedragstart", 7), p = v(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((w) => {
    const y = /* @__PURE__ */ new Map();
    w.forEach((b) => {
      const x = b.target.getAttribute("data-id");
      y.set(x, { id: x, nodeElement: b.target, force: !0 });
    }), n().updateNodeInternals(y);
  });
  Ro(() => {
    f?.disconnect();
  });
  var h = {
    get store() {
      return n();
    },
    set store(w) {
      n(w), g();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(w) {
      r(w), g();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(w) {
      o(w), g();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(w) {
      i(w), g();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(w) {
      s(w), g();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(w) {
      a(w), g();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(w) {
      l(w), g();
    },
    get onnodedrag() {
      return u();
    },
    set onnodedrag(w) {
      u(w), g();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(w) {
      d(w), g();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(w) {
      p(w), g();
    }
  }, m = Ym();
  return Et(m, 21, () => n().visible.nodes.values(), (w) => w.id, (w, y) => {
    Td(w, {
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
      set store(b) {
        n(b);
      }
    });
  }), K(m), D(e, m), pe(h);
}
le(
  Dd,
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
var Wm = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function Md(e, t) {
  fe(t, !0);
  const n = v(t, "edge", 7), r = v(t, "store", 15), o = v(t, "onedgeclick", 7), i = v(t, "onedgecontextmenu", 7), s = v(t, "onedgepointerenter", 7), a = v(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), p = /* @__PURE__ */ P(() => n().sourceY), f = /* @__PURE__ */ P(() => n().targetX), h = /* @__PURE__ */ P(() => n().targetY), m = /* @__PURE__ */ P(() => n().sourcePosition), w = /* @__PURE__ */ P(() => n().targetPosition), y = /* @__PURE__ */ P(() => Nt(n().animated, !1)), b = /* @__PURE__ */ P(() => Nt(n().selected, !1)), x = /* @__PURE__ */ P(() => n().label), $ = /* @__PURE__ */ P(() => n().labelStyle), C = /* @__PURE__ */ P(() => Nt(n().data, () => ({}), !0)), S = /* @__PURE__ */ P(() => n().style), N = /* @__PURE__ */ P(() => n().interactionWidth), M = /* @__PURE__ */ P(() => Nt(n().type, "default")), j = /* @__PURE__ */ P(() => n().sourceHandle), A = /* @__PURE__ */ P(() => n().targetHandle), I = /* @__PURE__ */ P(() => n().markerStart), H = /* @__PURE__ */ P(() => n().markerEnd), k = /* @__PURE__ */ P(() => n().selectable), T = /* @__PURE__ */ P(() => n().focusable), _ = /* @__PURE__ */ P(() => Nt(n().deletable, !0)), E = /* @__PURE__ */ P(() => n().hidden), O = /* @__PURE__ */ P(() => n().zIndex), Z = /* @__PURE__ */ P(() => n().class), Y = /* @__PURE__ */ P(() => n().ariaLabel), W = null;
  const { id: L } = n();
  Br("svelteflow__edge_id", L);
  let U = /* @__PURE__ */ P(() => c(k) ?? r().elementsSelectable), X = /* @__PURE__ */ P(() => c(T) ?? r().edgesFocusable), J = /* @__PURE__ */ P(() => r().edgeTypes[c(M)] ?? Oa), R = /* @__PURE__ */ P(() => c(I) ? `url('#${Bs(c(I), r().flowId)}')` : void 0), q = /* @__PURE__ */ P(() => c(H) ? `url('#${Bs(c(H), r().flowId)}')` : void 0);
  function G(ae) {
    const me = r().edgeLookup.get(L);
    me && (c(U) && r().handleEdgeSelection(L), o()?.({ event: ae, edge: me }));
  }
  function ne(ae, me) {
    const ge = r().edgeLookup.get(L);
    ge && me({ event: ae, edge: ge });
  }
  function re(ae) {
    if (!r().disableKeyboardA11y && Kc.includes(ae.key) && c(U)) {
      const { unselectNodesAndEdges: me, addSelectedEdges: ge } = r();
      ae.key === "Escape" ? (W?.blur(), me({ edges: [n()] })) : ge([L]);
    }
  }
  var ee = {
    get edge() {
      return n();
    },
    set edge(ae) {
      n(ae), g();
    },
    get store() {
      return r();
    },
    set store(ae) {
      r(ae), g();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ae) {
      o(ae), g();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ae) {
      i(ae), g();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ae) {
      s(ae), g();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ae) {
      a(ae), g();
    }
  }, ve = Ne(), ce = se(ve);
  {
    var ie = (ae) => {
      var me = Wm();
      let ge;
      var xe = B(me);
      pt(xe, () => ({
        class: ["svelte-flow__edge", c(Z)],
        "data-id": L,
        onclick: G,
        oncontextmenu: i() ? (_e) => {
          ne(_e, i());
        } : void 0,
        onpointerenter: s() ? (_e) => {
          ne(_e, s());
        } : void 0,
        onpointerleave: a() ? (_e) => {
          ne(_e, a());
        } : void 0,
        "aria-label": c(Y) === null ? void 0 : c(Y) ? c(Y) : `Edge from ${c(l)} to ${c(u)}`,
        "aria-describedby": c(X) ? `${Od}-${r().flowId}` : void 0,
        role: n().ariaRole ?? (c(X) ? "group" : "img"),
        "aria-roledescription": "edge",
        onkeydown: c(X) ? re : void 0,
        tabindex: c(X) ? 0 : void 0,
        ...n().domAttributes,
        [Qn]: {
          animated: c(y),
          selected: c(b),
          selectable: c(U)
        }
      }));
      var de = B(xe);
      qi(de, () => c(J), (_e, Le) => {
        Le(_e, {
          get id() {
            return L;
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
            return c(h);
          },
          get sourcePosition() {
            return c(m);
          },
          get targetPosition() {
            return c(w);
          },
          get animated() {
            return c(y);
          },
          get selected() {
            return c(b);
          },
          get label() {
            return c(x);
          },
          get labelStyle() {
            return c($);
          },
          get data() {
            return c(C);
          },
          get style() {
            return c(S);
          },
          get interactionWidth() {
            return c(N);
          },
          get selectable() {
            return c(U);
          },
          get deletable() {
            return c(_);
          },
          get type() {
            return c(M);
          },
          get sourceHandleId() {
            return c(j);
          },
          get targetHandleId() {
            return c(A);
          },
          get markerStart() {
            return c(R);
          },
          get markerEnd() {
            return c(q);
          }
        });
      }), K(xe), jt(xe, (_e) => W = _e, () => W), K(me), Ee(() => ge = xt(me, "", ge, { "z-index": c(O) })), D(ae, me);
    };
    ue(ce, (ae) => {
      c(E) || ae(ie);
    });
  }
  return D(e, ve), pe(ee);
}
le(
  Md,
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
Vp();
var Fm = /* @__PURE__ */ we("<defs></defs>");
function Ld(e, t) {
  fe(t, !1);
  const n = vn();
  dc();
  var r = Fm();
  Et(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    Vd(o, Qe(() => c(i)));
  }), K(r), D(e, r), pe();
}
le(Ld, {}, [], [], !0);
var qm = /* @__PURE__ */ we('<polyline class="arrow" fill="none" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4"></polyline>'), Xm = /* @__PURE__ */ we('<polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Um = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Vd(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "type", 7), o = v(t, "width", 7, 12.5), i = v(t, "height", 7, 12.5), s = v(t, "markerUnits", 7, "strokeWidth"), a = v(t, "orient", 7, "auto-start-reverse"), l = v(t, "color", 7, "none"), u = v(t, "strokeWidth", 7);
  var d = {
    get id() {
      return n();
    },
    set id(w) {
      n(w), g();
    },
    get type() {
      return r();
    },
    set type(w) {
      r(w), g();
    },
    get width() {
      return o();
    },
    set width(w = 12.5) {
      o(w), g();
    },
    get height() {
      return i();
    },
    set height(w = 12.5) {
      i(w), g();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(w = "strokeWidth") {
      s(w), g();
    },
    get orient() {
      return a();
    },
    set orient(w = "auto-start-reverse") {
      a(w), g();
    },
    get color() {
      return l();
    },
    set color(w = "none") {
      l(w), g();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(w) {
      u(w), g();
    }
  }, p = Um(), f = B(p);
  {
    var h = (w) => {
      var y = qm();
      let b;
      Ee(() => {
        ke(y, "stroke-width", u()), b = xt(y, "", b, { stroke: l() });
      }), D(w, y);
    }, m = (w) => {
      var y = Ne(), b = se(y);
      {
        var x = ($) => {
          var C = Xm();
          let S;
          Ee(() => {
            ke(C, "stroke-width", u()), S = xt(C, "", S, { stroke: l(), fill: l() });
          }), D($, C);
        };
        ue(
          b,
          ($) => {
            r() === Po.ArrowClosed && $(x);
          },
          !0
        );
      }
      D(w, y);
    };
    ue(f, (w) => {
      r() === Po.Arrow ? w(h) : w(m, !1);
    });
  }
  return K(p), Ee(() => {
    ke(p, "id", n()), ke(p, "markerWidth", `${o()}`), ke(p, "markerHeight", `${i()}`), ke(p, "markerUnits", s()), ke(p, "orient", a());
  }), D(e, p), pe(d);
}
le(
  Vd,
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
var Gm = /* @__PURE__ */ te('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function zd(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "onedgeclick", 7), o = v(t, "onedgecontextmenu", 7), i = v(t, "onedgepointerenter", 7), s = v(t, "onedgepointerleave", 7);
  var a = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), g();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(f) {
      r(f), g();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(f) {
      o(f), g();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(f) {
      i(f), g();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(f) {
      s(f), g();
    }
  }, l = Gm(), u = B(l), d = B(u);
  Ld(d, {}), K(u);
  var p = V(u, 2);
  return Et(p, 17, () => n().visible.edges.values(), (f) => f.id, (f, h) => {
    Md(f, {
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
      set store(m) {
        n(m);
      }
    });
  }), K(l), D(e, l), pe(a);
}
le(
  zd,
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
var Jm = /* @__PURE__ */ te('<div class="svelte-flow__selection svelte-qtk83j"></div>');
const Qm = {
  hash: "svelte-qtk83j",
  code: ".svelte-flow__selection.svelte-qtk83j {position:absolute;top:0;left:0;}"
};
function Ta(e, t) {
  fe(t, !0), Fe(e, Qm);
  let n = v(t, "x", 7, 0), r = v(t, "y", 7, 0), o = v(t, "width", 7, 0), i = v(t, "height", 7, 0), s = v(t, "isVisible", 7, !0);
  var a = {
    get x() {
      return n();
    },
    set x(p = 0) {
      n(p), g();
    },
    get y() {
      return r();
    },
    set y(p = 0) {
      r(p), g();
    },
    get width() {
      return o();
    },
    set width(p = 0) {
      o(p), g();
    },
    get height() {
      return i();
    },
    set height(p = 0) {
      i(p), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(p = !0) {
      s(p), g();
    }
  }, l = Ne(), u = se(l);
  {
    var d = (p) => {
      var f = Jm();
      let h;
      Ee((m) => h = xt(f, "", h, m), [
        () => ({
          width: typeof o() == "string" ? o() : En(o()),
          height: typeof i() == "string" ? i() : En(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), D(p, f);
    };
    ue(u, (p) => {
      s() && p(d);
    });
  }
  return D(e, l), pe(a);
}
le(Ta, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
var ey = /* @__PURE__ */ te("<div><!></div>");
const ty = {
  hash: "svelte-c7g5lf",
  code: `.svelte-flow__selection-wrapper.svelte-c7g5lf {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-c7g5lf:focus,
  .svelte-flow__selection-wrapper.svelte-c7g5lf:focus-visible {outline:none;}`
};
function Hd(e, t) {
  fe(t, !0), Fe(e, ty);
  let n = v(t, "store", 15), r = v(t, "onnodedrag", 7), o = v(t, "onnodedragstart", 7), i = v(t, "onnodedragstop", 7), s = v(t, "onselectionclick", 7), a = v(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Oe(void 0);
  rt(() => {
    n().disableKeyboardA11y || c(l)?.focus({ preventScroll: !0 });
  });
  let u = /* @__PURE__ */ P(() => {
    if (n().selectionRectMode === "nodes") {
      n().nodes;
      const b = Bo(n().nodeLookup, { filter: (x) => !!x.selected });
      if (b.width > 0 && b.height > 0)
        return b;
    }
    return null;
  });
  function d(b) {
    const x = n().nodes.filter(($) => $.selected);
    a()?.({ nodes: x, event: b });
  }
  function p(b) {
    const x = n().nodes.filter(($) => $.selected);
    s()?.({ nodes: x, event: b });
  }
  function f(b) {
    Object.prototype.hasOwnProperty.call(Mi, b.key) && (b.preventDefault(), n().moveSelectedNodes(Mi[b.key], b.shiftKey ? 4 : 1));
  }
  var h = {
    get store() {
      return n();
    },
    set store(b) {
      n(b), g();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(b) {
      r(b), g();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(b) {
      o(b), g();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(b) {
      i(b), g();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(b) {
      s(b), g();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(b) {
      a(b), g();
    }
  }, m = Ne(), w = se(m);
  {
    var y = (b) => {
      var x = ey();
      x.__contextmenu = d, x.__click = p, x.__keydown = function(...S) {
        (n().disableKeyboardA11y ? void 0 : f)?.apply(this, S);
      };
      let $;
      var C = B(x);
      Ta(C, { width: "100%", height: "100%", x: 0, y: 0 }), K(x), Ct(x, (S, N) => Ed?.(S, N), () => ({
        disabled: !1,
        store: n(),
        onDrag: (S, N, M, j) => {
          r()?.({ event: S, targetNode: null, nodes: j });
        },
        onDragStart: (S, N, M, j) => {
          o()?.({ event: S, targetNode: null, nodes: j });
        },
        onDragStop: (S, N, M, j) => {
          i()?.({ event: S, targetNode: null, nodes: j });
        }
      })), jt(x, (S) => Q(l, S), () => c(l)), Ee(
        (S) => {
          Rt(x, 1, qn(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-c7g5lf"), ke(x, "role", n().disableKeyboardA11y ? void 0 : "button"), ke(x, "tabindex", n().disableKeyboardA11y ? void 0 : -1), $ = xt(x, "", $, S);
        },
        [
          () => ({
            width: En(c(u).width),
            height: En(c(u).height),
            transform: `translate(${c(u).x ?? ""}px, ${c(u).y ?? ""}px)`
          })
        ]
      ), D(b, x);
    };
    ue(w, (b) => {
      n().selectionRectMode === "nodes" && c(u) && Vn(c(u).x) && Vn(c(u).y) && b(y);
    });
  }
  return D(e, m), pe(h);
}
fr(["contextmenu", "click", "keydown"]);
le(
  Hd,
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
function ny(e) {
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
function bn(e, t) {
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
      }, { modifier: f, key: h, callback: m, preventDefault: w, enabled: y } = p;
      if (y) {
        if (a.key !== h) continue;
        if (f === null || f === !1) {
          if (u !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const x = Array.isArray(f) ? f : [f];
          let $ = !1;
          for (const C of x)
            if ((Array.isArray(C) ? C : [C]).reduce(
              (S, N) => S | ny(N),
              0
            ) === u) {
              $ = !0;
              break;
            }
          if (!$) continue;
        }
        w && a.preventDefault();
        const b = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: b })), m?.(b);
      }
    }
  }
  let s;
  return n && (s = Ts(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: u = "keydown" } = a;
      n && (!l || o !== u) ? s?.() : !n && l && (s = Ts(e, u, i)), n = l, o = u, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function gt() {
  const e = /* @__PURE__ */ P(vn), t = (i) => {
    const s = Kl(i) ? i : c(e).nodeLookup.get(i.id), a = s.parentId ? O0(s.position, s.measured, s.parentId, c(e).nodeLookup, c(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Jr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    c(e).nodes = yt(() => c(e).nodes).map((l) => {
      if (l.id === i) {
        const u = typeof s == "function" ? s(l) : s;
        return a?.replace && Kl(u) ? u : { ...l, ...u };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    c(e).edges = yt(() => c(e).edges).map((l) => {
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
    getNodes: (i) => i === void 0 ? c(e).nodes : ql(c(e).nodeLookup, i),
    getEdge: (i) => c(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? c(e).edges : ql(c(e).edgeLookup, i),
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
    getViewport: () => _u(c(e).viewport),
    setCenter: async (i, s, a) => c(e).setCenter(i, s, a),
    fitView: (i) => c(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!c(e).panZoom)
        return Promise.resolve(!1);
      const a = $a(i, c(e).width, c(e).height, c(e).minZoom, c(e).maxZoom, s?.padding ?? 0.1);
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
        const p = c(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Jr(p), h = No(f, u);
        return s && h > 0 || h >= f.width * f.height || h >= u.width * u.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = Tl(i) ? i : t(i);
      if (!l)
        return !1;
      const u = No(l, s);
      return a && u > 0 || u >= s.width * s.height || u >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await S0({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: c(e).nodes,
        edges: c(e).edges,
        onBeforeDelete: c(e).onbeforedelete
      });
      return a && (c(e).nodes = yt(() => c(e).nodes).filter((u) => !a.some(({ id: d }) => d === u.id))), l && (c(e).edges = yt(() => c(e).edges).filter((u) => !l.some(({ id: d }) => d === u.id))), (a.length > 0 || l.length > 0) && c(e).ondelete?.({ nodes: a, edges: l }), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!c(e).domNode)
        return i;
      const a = s.snapToGrid ? c(e).snapGrid : !1, { x: l, y: u, zoom: d } = c(e).viewport, { x: p, y: f } = c(e).domNode.getBoundingClientRect(), h = { x: i.x - p, y: i.y - f };
      return Wo(h, [l, u, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!c(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = c(e).viewport, { x: u, y: d } = c(e).domNode.getBoundingClientRect(), p = Di(i, [s, a, l]);
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
    getNodesBounds: (i) => _0(i, {
      nodeLookup: c(e).nodeLookup,
      nodeOrigin: c(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(c(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function ql(e, t) {
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
function Ad(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "selectionKey", 7, "Shift"), o = v(t, "multiSelectionKey", 23, () => wr() ? "Meta" : "Control"), i = v(t, "deleteKey", 7, "Backspace"), s = v(t, "panActivationKey", 7, " "), a = v(t, "zoomActivationKey", 23, () => wr() ? "Meta" : "Control"), { deleteElements: l } = gt();
  function u(y) {
    return y !== null && typeof y == "object";
  }
  function d(y) {
    return u(y) ? y.modifier || [] : [];
  }
  function p(y) {
    return y == null ? "" : u(y) ? y.key : y;
  }
  function f(y, b) {
    return (Array.isArray(y) ? y : [y]).map((x) => {
      const $ = p(x);
      return {
        key: $,
        modifier: d(x),
        enabled: $ !== null,
        callback: b
      };
    });
  }
  function h() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  function m() {
    const y = n().nodes.filter((x) => x.selected), b = n().edges.filter((x) => x.selected);
    l({ nodes: y, edges: b });
  }
  var w = {
    get store() {
      return n();
    },
    set store(y) {
      n(y), g();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(y = "Shift") {
      r(y), g();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(y = wr() ? "Meta" : "Control") {
      o(y), g();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(y = "Backspace") {
      i(y), g();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(y = " ") {
      s(y), g();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(y = wr() ? "Meta" : "Control") {
      a(y), g();
    }
  };
  return _i("blur", Lt, h), _i("contextmenu", Lt, h), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(i(), (y) => {
      !(y.originalEvent.ctrlKey || y.originalEvent.metaKey || y.originalEvent.shiftKey) && !Jc(y.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
    }),
    type: "keydown"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), Ct(Lt, (y, b) => bn?.(y, b), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), pe(w);
}
le(
  Ad,
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
var ry = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), oy = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function Id(e, t) {
  fe(t, !0);
  let n = v(t, "store", 15), r = v(t, "type", 7), o = v(t, "containerStyle", 7), i = v(t, "style", 7), s = v(t, "LineComponent", 7), a = /* @__PURE__ */ P(() => {
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
      case Mn.Bezier: {
        const [h] = ed(f);
        return h;
      }
      case Mn.Straight: {
        const [h] = nd(f);
        return h;
      }
      case Mn.Step:
      case Mn.SmoothStep: {
        const [h] = ka({
          ...f,
          borderRadius: r() === Mn.Step ? 0 : void 0
        });
        return h;
      }
    }
  });
  var l = {
    get store() {
      return n();
    },
    set store(f) {
      n(f), g();
    },
    get type() {
      return r();
    },
    set type(f) {
      r(f), g();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(f) {
      o(f), g();
    },
    get style() {
      return i();
    },
    set style(f) {
      i(f), g();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(f) {
      s(f), g();
    }
  }, u = Ne(), d = se(u);
  {
    var p = (f) => {
      var h = oy(), m = B(h), w = B(m);
      {
        var y = (x) => {
          var $ = Ne(), C = se($);
          qi(C, s, (S, N) => {
            N(S, {});
          }), D(x, $);
        }, b = (x) => {
          var $ = ry();
          Ee(() => {
            ke($, "d", c(a)), xt($, i());
          }), D(x, $);
        };
        ue(w, (x) => {
          s() ? x(y) : x(b, !1);
        });
      }
      K(m), K(h), Ee(
        (x) => {
          ke(h, "width", n().width), ke(h, "height", n().height), xt(h, o()), Rt(m, 0, x);
        },
        [
          () => qn([
            "svelte-flow__connection",
            b0(n().connection.isValid)
          ])
        ]
      ), D(f, h);
    };
    ue(d, (f) => {
      n().connection.inProgress && f(p);
    });
  }
  return D(e, u), pe(l);
}
le(
  Id,
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
var iy = /* @__PURE__ */ te("<div><!></div>");
function qo(e, t) {
  fe(t, !0);
  let n = v(t, "position", 7, "top-right"), r = v(t, "style", 7), o = v(t, "class", 7), i = v(t, "children", 7), s = /* @__PURE__ */ Xe(t, [
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
    set position(p = "top-right") {
      n(p), g();
    },
    get style() {
      return r();
    },
    set style(p) {
      r(p), g();
    },
    get class() {
      return o();
    },
    set class(p) {
      o(p), g();
    },
    get children() {
      return i();
    },
    set children(p) {
      i(p), g();
    }
  }, u = iy();
  pt(u, (p) => ({ class: p, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...c(a)]
  ]);
  var d = B(u);
  return st(d, () => i() ?? St), K(u), D(e, u), pe(l);
}
le(qo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var sy = /* @__PURE__ */ te('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function Rd(e, t) {
  fe(t, !0);
  let n = v(t, "proOptions", 7), r = v(t, "position", 7, "bottom-right");
  var o = {
    get proOptions() {
      return n();
    },
    set proOptions(l) {
      n(l), g();
    },
    get position() {
      return r();
    },
    set position(l = "bottom-right") {
      r(l), g();
    }
  }, i = Ne(), s = se(i);
  {
    var a = (l) => {
      qo(l, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (u, d) => {
          var p = sy();
          D(u, p);
        },
        $$slots: { default: !0 }
      });
    };
    ue(s, (l) => {
      n()?.hideAttribution || l(a);
    });
  }
  return D(e, i), pe(o);
}
le(Rd, { proOptions: {}, position: {} }, [], [], !0);
var ay = /* @__PURE__ */ te("<div><!></div>");
const ly = {
  hash: "svelte-15m40wc",
  code: ".svelte-flow.svelte-15m40wc {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function jd(e, t) {
  fe(t, !0), Fe(e, ly);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "colorMode", 7), i = v(t, "domNode", 15), s = v(t, "clientWidth", 15), a = v(t, "clientHeight", 15), l = v(t, "children", 7), u = v(t, "rest", 7), d = /* @__PURE__ */ P(() => u().class), p = /* @__PURE__ */ P(() => ah(u(), [
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
  function f(y) {
    y.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), u().onscroll && u().onscroll(y);
  }
  var h = {
    get width() {
      return n();
    },
    set width(y) {
      n(y), g();
    },
    get height() {
      return r();
    },
    set height(y) {
      r(y), g();
    },
    get colorMode() {
      return o();
    },
    set colorMode(y) {
      o(y), g();
    },
    get domNode() {
      return i();
    },
    set domNode(y) {
      i(y), g();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(y) {
      s(y), g();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(y) {
      a(y), g();
    },
    get children() {
      return l();
    },
    set children(y) {
      l(y), g();
    },
    get rest() {
      return u();
    },
    set rest(y) {
      u(y), g();
    }
  }, m = ay();
  pt(
    m,
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
      [_n]: y
    }),
    [
      () => ({ width: En(n()), height: En(r()) })
    ],
    void 0,
    void 0,
    "svelte-15m40wc"
  );
  var w = B(m);
  return st(w, () => l() ?? St), K(m), jt(m, (y) => i(y), () => i()), al(m, "clientHeight", a), al(m, "clientWidth", s), D(e, m), pe(h);
}
le(
  jd,
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
var uy = /* @__PURE__ */ te('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), cy = /* @__PURE__ */ te("<!> <!>", 1), dy = /* @__PURE__ */ te("<!> <!> <!> <!> <!>", 1);
function Zd(e, t) {
  fe(t, !0);
  let n = v(t, "width", 7), r = v(t, "height", 7), o = v(t, "proOptions", 7), i = v(t, "selectionKey", 7), s = v(t, "deleteKey", 7), a = v(t, "panActivationKey", 7), l = v(t, "multiSelectionKey", 7), u = v(t, "zoomActivationKey", 7), d = v(t, "paneClickDistance", 7, 1), p = v(t, "nodeClickDistance", 7, 1), f = v(t, "onmovestart", 7), h = v(t, "onmoveend", 7), m = v(t, "onmove", 7), w = v(t, "oninit", 7), y = v(t, "onnodeclick", 7), b = v(t, "onnodecontextmenu", 7), x = v(t, "onnodedrag", 7), $ = v(t, "onnodedragstart", 7), C = v(t, "onnodedragstop", 7), S = v(t, "onnodepointerenter", 7), N = v(t, "onnodepointermove", 7), M = v(t, "onnodepointerleave", 7), j = v(t, "onselectionclick", 7), A = v(t, "onselectioncontextmenu", 7), I = v(t, "onselectionstart", 7), H = v(t, "onselectionend", 7), k = v(t, "onedgeclick", 7), T = v(t, "onedgecontextmenu", 7), _ = v(t, "onedgepointerenter", 7), E = v(t, "onedgepointerleave", 7), O = v(t, "onpaneclick", 7), Z = v(t, "onpanecontextmenu", 7), Y = v(t, "panOnScrollMode", 23, () => Cr.Free), W = v(t, "preventScrolling", 7, !0), L = v(t, "zoomOnScroll", 7, !0), U = v(t, "zoomOnDoubleClick", 7, !0), X = v(t, "zoomOnPinch", 7, !0), J = v(t, "panOnScroll", 7, !1), R = v(t, "panOnScrollSpeed", 7, 0.5), q = v(t, "panOnDrag", 7, !0), G = v(t, "selectionOnDrag", 7, !1), ne = v(t, "connectionLineComponent", 7), re = v(t, "connectionLineStyle", 7), ee = v(t, "connectionLineContainerStyle", 7), ve = v(t, "connectionLineType", 23, () => Mn.Bezier), ce = v(t, "attributionPosition", 7), ie = v(t, "children", 7), ae = v(t, "nodes", 31, () => Qt([])), me = v(t, "edges", 31, () => Qt([])), ge = v(t, "viewport", 31, () => {
  }), xe = /* @__PURE__ */ Xe(t, [
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
  ]), de = Cd({
    props: xe,
    width: n(),
    height: r(),
    get nodes() {
      return ae();
    },
    set nodes(F) {
      ae(F);
    },
    get edges() {
      return me();
    },
    set edges(F) {
      me(F);
    },
    get viewport() {
      return ge();
    },
    set viewport(F) {
      ge(F);
    }
  });
  const _e = ir(Li);
  _e && _e.setStore && _e.setStore(de), Br(Li, {
    provider: !1,
    getStore() {
      return de;
    }
  }), rt(() => {
    const F = { nodes: de.selectedNodes, edges: de.selectedEdges };
    yt(() => t.onselectionchange)?.(F);
    for (const Ye of de.selectionChangeHandlers.values())
      Ye(F);
  }), Ro(() => {
    de.reset();
  });
  var Le = {
    get width() {
      return n();
    },
    set width(F) {
      n(F), g();
    },
    get height() {
      return r();
    },
    set height(F) {
      r(F), g();
    },
    get proOptions() {
      return o();
    },
    set proOptions(F) {
      o(F), g();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(F) {
      i(F), g();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(F) {
      s(F), g();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(F) {
      a(F), g();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(F) {
      l(F), g();
    },
    get zoomActivationKey() {
      return u();
    },
    set zoomActivationKey(F) {
      u(F), g();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(F = 1) {
      d(F), g();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(F = 1) {
      p(F), g();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(F) {
      f(F), g();
    },
    get onmoveend() {
      return h();
    },
    set onmoveend(F) {
      h(F), g();
    },
    get onmove() {
      return m();
    },
    set onmove(F) {
      m(F), g();
    },
    get oninit() {
      return w();
    },
    set oninit(F) {
      w(F), g();
    },
    get onnodeclick() {
      return y();
    },
    set onnodeclick(F) {
      y(F), g();
    },
    get onnodecontextmenu() {
      return b();
    },
    set onnodecontextmenu(F) {
      b(F), g();
    },
    get onnodedrag() {
      return x();
    },
    set onnodedrag(F) {
      x(F), g();
    },
    get onnodedragstart() {
      return $();
    },
    set onnodedragstart(F) {
      $(F), g();
    },
    get onnodedragstop() {
      return C();
    },
    set onnodedragstop(F) {
      C(F), g();
    },
    get onnodepointerenter() {
      return S();
    },
    set onnodepointerenter(F) {
      S(F), g();
    },
    get onnodepointermove() {
      return N();
    },
    set onnodepointermove(F) {
      N(F), g();
    },
    get onnodepointerleave() {
      return M();
    },
    set onnodepointerleave(F) {
      M(F), g();
    },
    get onselectionclick() {
      return j();
    },
    set onselectionclick(F) {
      j(F), g();
    },
    get onselectioncontextmenu() {
      return A();
    },
    set onselectioncontextmenu(F) {
      A(F), g();
    },
    get onselectionstart() {
      return I();
    },
    set onselectionstart(F) {
      I(F), g();
    },
    get onselectionend() {
      return H();
    },
    set onselectionend(F) {
      H(F), g();
    },
    get onedgeclick() {
      return k();
    },
    set onedgeclick(F) {
      k(F), g();
    },
    get onedgecontextmenu() {
      return T();
    },
    set onedgecontextmenu(F) {
      T(F), g();
    },
    get onedgepointerenter() {
      return _();
    },
    set onedgepointerenter(F) {
      _(F), g();
    },
    get onedgepointerleave() {
      return E();
    },
    set onedgepointerleave(F) {
      E(F), g();
    },
    get onpaneclick() {
      return O();
    },
    set onpaneclick(F) {
      O(F), g();
    },
    get onpanecontextmenu() {
      return Z();
    },
    set onpanecontextmenu(F) {
      Z(F), g();
    },
    get panOnScrollMode() {
      return Y();
    },
    set panOnScrollMode(F = Cr.Free) {
      Y(F), g();
    },
    get preventScrolling() {
      return W();
    },
    set preventScrolling(F = !0) {
      W(F), g();
    },
    get zoomOnScroll() {
      return L();
    },
    set zoomOnScroll(F = !0) {
      L(F), g();
    },
    get zoomOnDoubleClick() {
      return U();
    },
    set zoomOnDoubleClick(F = !0) {
      U(F), g();
    },
    get zoomOnPinch() {
      return X();
    },
    set zoomOnPinch(F = !0) {
      X(F), g();
    },
    get panOnScroll() {
      return J();
    },
    set panOnScroll(F = !1) {
      J(F), g();
    },
    get panOnScrollSpeed() {
      return R();
    },
    set panOnScrollSpeed(F = 0.5) {
      R(F), g();
    },
    get panOnDrag() {
      return q();
    },
    set panOnDrag(F = !0) {
      q(F), g();
    },
    get selectionOnDrag() {
      return G();
    },
    set selectionOnDrag(F = !1) {
      G(F), g();
    },
    get connectionLineComponent() {
      return ne();
    },
    set connectionLineComponent(F) {
      ne(F), g();
    },
    get connectionLineStyle() {
      return re();
    },
    set connectionLineStyle(F) {
      re(F), g();
    },
    get connectionLineContainerStyle() {
      return ee();
    },
    set connectionLineContainerStyle(F) {
      ee(F), g();
    },
    get connectionLineType() {
      return ve();
    },
    set connectionLineType(F = Mn.Bezier) {
      ve(F), g();
    },
    get attributionPosition() {
      return ce();
    },
    set attributionPosition(F) {
      ce(F), g();
    },
    get children() {
      return ie();
    },
    set children(F) {
      ie(F), g();
    },
    get nodes() {
      return ae();
    },
    set nodes(F = []) {
      ae(F), g();
    },
    get edges() {
      return me();
    },
    set edges(F = []) {
      me(F), g();
    },
    get viewport() {
      return ge();
    },
    set viewport(F = void 0) {
      ge(F), g();
    }
  };
  return jd(e, {
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
    set domNode(F) {
      de.domNode = F;
    },
    get clientWidth() {
      return de.width;
    },
    set clientWidth(F) {
      de.width = F;
    },
    get clientHeight() {
      return de.height;
    },
    set clientHeight(F) {
      de.height = F;
    },
    children: (F, Ye) => {
      var ze = dy(), Ze = se(ze);
      Ad(Ze, {
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
        set store(Ie) {
          de = Ie;
        }
      });
      var Ke = V(Ze, 2);
      $d(Ke, {
        get panOnScrollMode() {
          return Y();
        },
        get preventScrolling() {
          return W();
        },
        get zoomOnScroll() {
          return L();
        },
        get zoomOnDoubleClick() {
          return U();
        },
        get zoomOnPinch() {
          return X();
        },
        get panOnScroll() {
          return J();
        },
        get panOnScrollSpeed() {
          return R();
        },
        get panOnDrag() {
          return q();
        },
        get paneClickDistance() {
          return d();
        },
        get selectionOnDrag() {
          return G();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return m();
        },
        get onmoveend() {
          return h();
        },
        get oninit() {
          return w();
        },
        get store() {
          return de;
        },
        set store(Ie) {
          de = Ie;
        },
        children: (Ie, ye) => {
          kd(Ie, {
            get onpaneclick() {
              return O();
            },
            get onpanecontextmenu() {
              return Z();
            },
            get onselectionstart() {
              return I();
            },
            get onselectionend() {
              return H();
            },
            get panOnDrag() {
              return q();
            },
            get paneClickDistance() {
              return d();
            },
            get selectionOnDrag() {
              return G();
            },
            get store() {
              return de;
            },
            set store(We) {
              de = We;
            },
            children: (We, vt) => {
              var qe = cy(), Dt = se(qe);
              Sd(Dt, {
                get store() {
                  return de;
                },
                set store(dt) {
                  de = dt;
                },
                children: (dt, yn) => {
                  var wn = uy(), Jn = V(se(wn), 2);
                  zd(Jn, {
                    get onedgeclick() {
                      return k();
                    },
                    get onedgecontextmenu() {
                      return T();
                    },
                    get onedgepointerenter() {
                      return _();
                    },
                    get onedgepointerleave() {
                      return E();
                    },
                    get store() {
                      return de;
                    },
                    set store(on) {
                      de = on;
                    }
                  });
                  var gr = V(Jn, 4);
                  Id(gr, {
                    get type() {
                      return ve();
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
                    set store(on) {
                      de = on;
                    }
                  });
                  var On = V(gr, 2);
                  Dd(On, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return y();
                    },
                    get onnodecontextmenu() {
                      return b();
                    },
                    get onnodepointerenter() {
                      return S();
                    },
                    get onnodepointermove() {
                      return N();
                    },
                    get onnodepointerleave() {
                      return M();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(on) {
                      de = on;
                    }
                  });
                  var io = V(On, 2);
                  Hd(io, {
                    get onselectionclick() {
                      return j();
                    },
                    get onselectioncontextmenu() {
                      return A();
                    },
                    get onnodedrag() {
                      return x();
                    },
                    get onnodedragstart() {
                      return $();
                    },
                    get onnodedragstop() {
                      return C();
                    },
                    get store() {
                      return de;
                    },
                    set store(on) {
                      de = on;
                    }
                  }), be(2), D(dt, wn);
                },
                $$slots: { default: !0 }
              });
              var rn = V(Dt, 2);
              {
                let dt = /* @__PURE__ */ P(() => !!(de.selectionRect && de.selectionRectMode === "user")), yn = /* @__PURE__ */ P(() => de.selectionRect?.width), wn = /* @__PURE__ */ P(() => de.selectionRect?.height), Jn = /* @__PURE__ */ P(() => de.selectionRect?.x), gr = /* @__PURE__ */ P(() => de.selectionRect?.y);
                Ta(rn, {
                  get isVisible() {
                    return c(dt);
                  },
                  get width() {
                    return c(yn);
                  },
                  get height() {
                    return c(wn);
                  },
                  get x() {
                    return c(Jn);
                  },
                  get y() {
                    return c(gr);
                  }
                });
              }
              D(We, qe);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var ot = V(Ke, 2);
      Rd(ot, {
        get proOptions() {
          return o();
        },
        get position() {
          return ce();
        }
      });
      var _t = V(ot, 2);
      Pd(_t, {
        get store() {
          return de;
        }
      });
      var Ue = V(_t, 2);
      st(Ue, () => ie() ?? St), D(F, ze);
    },
    $$slots: { default: !0 }
  }), pe(Le);
}
le(
  Zd,
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
function Kd(e, t) {
  fe(t, !0);
  let n = v(t, "children", 7), r = /* @__PURE__ */ Oe(Cd({ props: {}, nodes: [], edges: [] }));
  Br(Li, {
    provider: !0,
    getStore() {
      return c(r);
    },
    setStore: (a) => {
      Q(r, a);
    }
  }), Ro(() => {
    c(r).reset();
  });
  var o = {
    get children() {
      return n();
    },
    set children(a) {
      n(a), g();
    }
  }, i = Ne(), s = se(i);
  return st(s, () => n() ?? St), D(e, i), pe(o);
}
le(Kd, { children: {} }, [], [], !0);
var fy = /* @__PURE__ */ te("<button><!></button>");
function go(e, t) {
  fe(t, !0);
  let n = v(t, "class", 7), r = v(t, "bgColor", 7), o = v(t, "bgColorHover", 7), i = v(t, "color", 7), s = v(t, "colorHover", 7), a = v(t, "borderColor", 7), l = v(t, "onclick", 7), u = v(t, "children", 7), d = /* @__PURE__ */ Xe(t, [
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
  var p = {
    get class() {
      return n();
    },
    set class(m) {
      n(m), g();
    },
    get bgColor() {
      return r();
    },
    set bgColor(m) {
      r(m), g();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(m) {
      o(m), g();
    },
    get color() {
      return i();
    },
    set color(m) {
      i(m), g();
    },
    get colorHover() {
      return s();
    },
    set colorHover(m) {
      s(m), g();
    },
    get borderColor() {
      return a();
    },
    set borderColor(m) {
      a(m), g();
    },
    get onclick() {
      return l();
    },
    set onclick(m) {
      l(m), g();
    },
    get children() {
      return u();
    },
    set children(m) {
      u(m), g();
    }
  }, f = fy();
  pt(f, () => ({
    type: "button",
    onclick: l(),
    class: ["svelte-flow__controls-button", n()],
    ...d,
    [_n]: {
      "--xy-controls-button-background-color-props": r(),
      "--xy-controls-button-background-color-hover-props": o(),
      "--xy-controls-button-color-props": i(),
      "--xy-controls-button-color-hover-props": s(),
      "--xy-controls-button-border-color-props": a()
    }
  }));
  var h = B(f);
  return st(h, () => u() ?? St), K(f), D(e, f), pe(p);
}
le(
  go,
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
var py = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function Bd(e) {
  var t = py();
  D(e, t);
}
le(Bd, {}, [], [], !0);
var hy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function Yd(e) {
  var t = hy();
  D(e, t);
}
le(Yd, {}, [], [], !0);
var gy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function Wd(e) {
  var t = gy();
  D(e, t);
}
le(Wd, {}, [], [], !0);
var vy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function Fd(e) {
  var t = vy();
  D(e, t);
}
le(Fd, {}, [], [], !0);
var my = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function qd(e) {
  var t = my();
  D(e, t);
}
le(qd, {}, [], [], !0);
var yy = /* @__PURE__ */ te("<!> <!>", 1), wy = /* @__PURE__ */ te("<!> <!> <!> <!> <!> <!>", 1);
function Xd(e, t) {
  fe(t, !0);
  let n = v(t, "position", 7, "bottom-left"), r = v(t, "orientation", 7, "vertical"), o = v(t, "showZoom", 7, !0), i = v(t, "showFitView", 7, !0), s = v(t, "showLock", 7, !0), a = v(t, "style", 7), l = v(t, "class", 7), u = v(t, "buttonBgColor", 7), d = v(t, "buttonBgColorHover", 7), p = v(t, "buttonColor", 7), f = v(t, "buttonColorHover", 7), h = v(t, "buttonBorderColor", 7), m = v(t, "fitViewOptions", 7), w = v(t, "children", 7), y = v(t, "before", 7), b = v(t, "after", 7), x = /* @__PURE__ */ Xe(t, [
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
  ]), $ = /* @__PURE__ */ P(vn);
  const C = {
    bgColor: u(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: h()
  };
  let S = /* @__PURE__ */ P(() => c($).nodesDraggable || c($).nodesConnectable || c($).elementsSelectable), N = /* @__PURE__ */ P(() => c($).viewport.zoom <= c($).minZoom), M = /* @__PURE__ */ P(() => c($).viewport.zoom >= c($).maxZoom), j = /* @__PURE__ */ P(() => c($).ariaLabelConfig), A = /* @__PURE__ */ P(() => r() === "horizontal" ? "horizontal" : "vertical");
  const I = () => {
    c($).zoomIn();
  }, H = () => {
    c($).zoomOut();
  }, k = () => {
    c($).fitView(m());
  }, T = () => {
    let E = !c(S);
    c($).nodesDraggable = E, c($).nodesConnectable = E, c($).elementsSelectable = E;
  };
  var _ = {
    get position() {
      return n();
    },
    set position(E = "bottom-left") {
      n(E), g();
    },
    get orientation() {
      return r();
    },
    set orientation(E = "vertical") {
      r(E), g();
    },
    get showZoom() {
      return o();
    },
    set showZoom(E = !0) {
      o(E), g();
    },
    get showFitView() {
      return i();
    },
    set showFitView(E = !0) {
      i(E), g();
    },
    get showLock() {
      return s();
    },
    set showLock(E = !0) {
      s(E), g();
    },
    get style() {
      return a();
    },
    set style(E) {
      a(E), g();
    },
    get class() {
      return l();
    },
    set class(E) {
      l(E), g();
    },
    get buttonBgColor() {
      return u();
    },
    set buttonBgColor(E) {
      u(E), g();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(E) {
      d(E), g();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(E) {
      p(E), g();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(E) {
      f(E), g();
    },
    get buttonBorderColor() {
      return h();
    },
    set buttonBorderColor(E) {
      h(E), g();
    },
    get fitViewOptions() {
      return m();
    },
    set fitViewOptions(E) {
      m(E), g();
    },
    get children() {
      return w();
    },
    set children(E) {
      w(E), g();
    },
    get before() {
      return y();
    },
    set before(E) {
      y(E), g();
    },
    get after() {
      return b();
    },
    set after(E) {
      b(E), g();
    }
  };
  {
    let E = /* @__PURE__ */ P(() => [
      "svelte-flow__controls",
      c(A),
      l()
    ]);
    qo(e, Qe(
      {
        get class() {
          return c(E);
        },
        get position() {
          return n();
        },
        "data-testid": "svelte-flow__controls",
        get "aria-label"() {
          return c(j)["controls.ariaLabel"];
        },
        get style() {
          return a();
        }
      },
      () => x,
      {
        children: (O, Z) => {
          var Y = wy(), W = se(Y);
          {
            var L = (ce) => {
              var ie = Ne(), ae = se(ie);
              st(ae, y), D(ce, ie);
            };
            ue(W, (ce) => {
              y() && ce(L);
            });
          }
          var U = V(W, 2);
          {
            var X = (ce) => {
              var ie = yy(), ae = se(ie);
              go(ae, Qe(
                {
                  onclick: I,
                  class: "svelte-flow__controls-zoomin",
                  get title() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.zoomIn.ariaLabel"];
                  },
                  get disabled() {
                    return c(M);
                  }
                },
                () => C,
                {
                  children: (ge, xe) => {
                    Bd(ge);
                  },
                  $$slots: { default: !0 }
                }
              ));
              var me = V(ae, 2);
              go(me, Qe(
                {
                  onclick: H,
                  class: "svelte-flow__controls-zoomout",
                  get title() {
                    return c(j)["controls.zoomOut.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.zoomOut.ariaLabel"];
                  },
                  get disabled() {
                    return c(N);
                  }
                },
                () => C,
                {
                  children: (ge, xe) => {
                    Yd(ge);
                  },
                  $$slots: { default: !0 }
                }
              )), D(ce, ie);
            };
            ue(U, (ce) => {
              o() && ce(X);
            });
          }
          var J = V(U, 2);
          {
            var R = (ce) => {
              go(ce, Qe(
                {
                  class: "svelte-flow__controls-fitview",
                  onclick: k,
                  get title() {
                    return c(j)["controls.fitView.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.fitView.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, ae) => {
                    Wd(ie);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(J, (ce) => {
              i() && ce(R);
            });
          }
          var q = V(J, 2);
          {
            var G = (ce) => {
              go(ce, Qe(
                {
                  class: "svelte-flow__controls-interactive",
                  onclick: T,
                  get title() {
                    return c(j)["controls.interactive.ariaLabel"];
                  },
                  get "aria-label"() {
                    return c(j)["controls.interactive.ariaLabel"];
                  }
                },
                () => C,
                {
                  children: (ie, ae) => {
                    var me = Ne(), ge = se(me);
                    {
                      var xe = (_e) => {
                        qd(_e);
                      }, de = (_e) => {
                        Fd(_e);
                      };
                      ue(ge, (_e) => {
                        c(S) ? _e(xe) : _e(de, !1);
                      });
                    }
                    D(ie, me);
                  },
                  $$slots: { default: !0 }
                }
              ));
            };
            ue(q, (ce) => {
              s() && ce(G);
            });
          }
          var ne = V(q, 2);
          {
            var re = (ce) => {
              var ie = Ne(), ae = se(ie);
              st(ae, w), D(ce, ie);
            };
            ue(ne, (ce) => {
              w() && ce(re);
            });
          }
          var ee = V(ne, 2);
          {
            var ve = (ce) => {
              var ie = Ne(), ae = se(ie);
              st(ae, b), D(ce, ie);
            };
            ue(ee, (ce) => {
              b() && ce(ve);
            });
          }
          D(O, Y);
        },
        $$slots: { default: !0 }
      }
    ));
  }
  return pe(_);
}
le(
  Xd,
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
var zn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(zn || (zn = {}));
var by = /* @__PURE__ */ we("<circle></circle>");
function Ud(e, t) {
  fe(t, !0);
  let n = v(t, "radius", 7), r = v(t, "class", 7);
  var o = {
    get radius() {
      return n();
    },
    set radius(s) {
      n(s), g();
    },
    get class() {
      return r();
    },
    set class(s) {
      r(s), g();
    }
  }, i = by();
  return Ee(() => {
    ke(i, "cx", n()), ke(i, "cy", n()), ke(i, "r", n()), Rt(i, 0, qn(["svelte-flow__background-pattern", "dots", r()]));
  }), D(e, i), pe(o);
}
le(Ud, { radius: {}, class: {} }, [], [], !0);
var xy = /* @__PURE__ */ we("<path></path>");
function Gd(e, t) {
  fe(t, !0);
  let n = v(t, "lineWidth", 7), r = v(t, "dimensions", 7), o = v(t, "variant", 7), i = v(t, "class", 7);
  var s = {
    get lineWidth() {
      return n();
    },
    set lineWidth(l) {
      n(l), g();
    },
    get dimensions() {
      return r();
    },
    set dimensions(l) {
      r(l), g();
    },
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), g();
    },
    get class() {
      return i();
    },
    set class(l) {
      i(l), g();
    }
  }, a = xy();
  return Ee(() => {
    ke(a, "stroke-width", n()), ke(a, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Rt(a, 0, qn(["svelte-flow__background-pattern", o(), i()]));
  }), D(e, a), pe(s);
}
le(Gd, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const _y = {
  [zn.Dots]: 1,
  [zn.Lines]: 1,
  [zn.Cross]: 6
};
var Cy = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function Jd(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "variant", 23, () => zn.Dots), o = v(t, "gap", 7, 20), i = v(t, "size", 7), s = v(t, "lineWidth", 7, 1), a = v(t, "bgColor", 7), l = v(t, "patternColor", 7), u = v(t, "patternClass", 7), d = v(t, "class", 7), p = /* @__PURE__ */ P(vn), f = /* @__PURE__ */ P(() => r() === zn.Dots), h = /* @__PURE__ */ P(() => r() === zn.Cross), m = /* @__PURE__ */ P(() => Array.isArray(o()) ? o() : [o(), o()]), w = /* @__PURE__ */ P(() => `background-pattern-${c(p).flowId}-${n() ?? ""}`), y = /* @__PURE__ */ P(() => [
    c(m)[0] * c(p).viewport.zoom || 1,
    c(m)[1] * c(p).viewport.zoom || 1
  ]), b = /* @__PURE__ */ P(() => (i() ?? _y[r()]) * c(p).viewport.zoom), x = /* @__PURE__ */ P(() => c(h) ? [c(b), c(b)] : c(y)), $ = /* @__PURE__ */ P(() => c(f) ? [c(b) / 2, c(b) / 2] : [
    c(x)[0] / 2,
    c(x)[1] / 2
  ]);
  var C = {
    get id() {
      return n();
    },
    set id(k) {
      n(k), g();
    },
    get variant() {
      return r();
    },
    set variant(k = zn.Dots) {
      r(k), g();
    },
    get gap() {
      return o();
    },
    set gap(k = 20) {
      o(k), g();
    },
    get size() {
      return i();
    },
    set size(k) {
      i(k), g();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(k = 1) {
      s(k), g();
    },
    get bgColor() {
      return a();
    },
    set bgColor(k) {
      a(k), g();
    },
    get patternColor() {
      return l();
    },
    set patternColor(k) {
      l(k), g();
    },
    get patternClass() {
      return u();
    },
    set patternClass(k) {
      u(k), g();
    },
    get class() {
      return d();
    },
    set class(k) {
      d(k), g();
    }
  }, S = Cy();
  let N;
  var M = B(S), j = B(M);
  {
    var A = (k) => {
      {
        let T = /* @__PURE__ */ P(() => c(b) / 2);
        Ud(k, {
          get radius() {
            return c(T);
          },
          get class() {
            return u();
          }
        });
      }
    }, I = (k) => {
      Gd(k, {
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
    ue(j, (k) => {
      c(f) ? k(A) : k(I, !1);
    });
  }
  K(M);
  var H = V(M);
  return K(S), Ee(() => {
    Rt(S, 0, qn([
      "svelte-flow__background",
      "svelte-flow__container",
      d()
    ])), N = xt(S, "", N, {
      "--xy-background-color-props": a(),
      "--xy-background-pattern-color-props": l()
    }), ke(M, "id", c(w)), ke(M, "x", c(p).viewport.x % c(y)[0]), ke(M, "y", c(p).viewport.y % c(y)[1]), ke(M, "width", c(y)[0]), ke(M, "height", c(y)[1]), ke(M, "patternTransform", `translate(-${c($)[0]},-${c($)[1]})`), ke(H, "fill", `url(#${c(w)})`);
  }), D(e, S), pe(C);
}
le(
  Jd,
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
var $y = /* @__PURE__ */ we("<rect></rect>");
function Qd(e, t) {
  fe(t, !0);
  let n = v(t, "id", 7), r = v(t, "x", 7), o = v(t, "y", 7), i = v(t, "width", 7), s = v(t, "height", 7), a = v(t, "borderRadius", 7, 5), l = v(t, "color", 7), u = v(t, "shapeRendering", 7), d = v(t, "strokeColor", 7), p = v(t, "strokeWidth", 7, 2), f = v(t, "selected", 7), h = v(t, "class", 7), m = v(t, "nodeComponent", 7);
  var w = {
    get id() {
      return n();
    },
    set id(C) {
      n(C), g();
    },
    get x() {
      return r();
    },
    set x(C) {
      r(C), g();
    },
    get y() {
      return o();
    },
    set y(C) {
      o(C), g();
    },
    get width() {
      return i();
    },
    set width(C) {
      i(C), g();
    },
    get height() {
      return s();
    },
    set height(C) {
      s(C), g();
    },
    get borderRadius() {
      return a();
    },
    set borderRadius(C = 5) {
      a(C), g();
    },
    get color() {
      return l();
    },
    set color(C) {
      l(C), g();
    },
    get shapeRendering() {
      return u();
    },
    set shapeRendering(C) {
      u(C), g();
    },
    get strokeColor() {
      return d();
    },
    set strokeColor(C) {
      d(C), g();
    },
    get strokeWidth() {
      return p();
    },
    set strokeWidth(C = 2) {
      p(C), g();
    },
    get selected() {
      return f();
    },
    set selected(C) {
      f(C), g();
    },
    get class() {
      return h();
    },
    set class(C) {
      h(C), g();
    },
    get nodeComponent() {
      return m();
    },
    set nodeComponent(C) {
      m(C), g();
    }
  }, y = Ne(), b = se(y);
  {
    var x = (C) => {
      const S = /* @__PURE__ */ P(m);
      var N = Ne(), M = se(N);
      qi(M, () => c(S), (j, A) => {
        A(j, {
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
            return h();
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
            return p();
          },
          get selected() {
            return f();
          }
        });
      }), D(C, N);
    }, $ = (C) => {
      var S = $y();
      let N, M;
      Ee(() => {
        N = Rt(S, 0, qn(["svelte-flow__minimap-node", h()]), null, N, { selected: f() }), ke(S, "x", r()), ke(S, "y", o()), ke(S, "rx", a()), ke(S, "ry", a()), ke(S, "width", i()), ke(S, "height", s()), ke(S, "shape-rendering", u()), M = xt(S, "", M, {
          fill: l(),
          stroke: d(),
          "stroke-width": p()
        });
      }), D(C, S);
    };
    ue(b, (C) => {
      m() ? C(x) : C($, !1);
    });
  }
  return D(e, y), pe(w);
}
le(
  Qd,
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
function ky(e, t) {
  const n = dm({
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
const xs = (e) => e instanceof Function ? e : () => e;
var Sy = /* @__PURE__ */ we("<title> </title>"), Ey = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Py = /* @__PURE__ */ te('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function ef(e, t) {
  fe(t, !0);
  let n = v(t, "position", 7, "bottom-right"), r = v(t, "ariaLabel", 7), o = v(t, "nodeStrokeColor", 7, "transparent"), i = v(t, "nodeColor", 7), s = v(t, "nodeClass", 7, ""), a = v(t, "nodeBorderRadius", 7, 5), l = v(t, "nodeStrokeWidth", 7, 2), u = v(t, "nodeComponent", 7), d = v(t, "bgColor", 7), p = v(t, "maskColor", 7), f = v(t, "maskStrokeColor", 7), h = v(t, "maskStrokeWidth", 7), m = v(t, "width", 7, 200), w = v(t, "height", 7, 150), y = v(t, "pannable", 7, !0), b = v(t, "zoomable", 7, !0), x = v(t, "inversePan", 7), $ = v(t, "zoomStep", 7), C = v(t, "class", 7), S = /* @__PURE__ */ Xe(t, [
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
  ]), N = /* @__PURE__ */ P(vn), M = /* @__PURE__ */ P(() => c(N).ariaLabelConfig);
  const j = i() === void 0 ? void 0 : xs(i()), A = xs(o()), I = xs(s()), H = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let k = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${c(N).flowId}`), T = /* @__PURE__ */ P(() => ({
    x: -c(N).viewport.x / c(N).viewport.zoom,
    y: -c(N).viewport.y / c(N).viewport.zoom,
    width: c(N).width / c(N).viewport.zoom,
    height: c(N).height / c(N).viewport.zoom
  })), _ = /* @__PURE__ */ P(() => qc(Bo(c(N).nodeLookup, { filter: (ee) => !ee.hidden }), c(T))), E = /* @__PURE__ */ P(() => c(_).width / m()), O = /* @__PURE__ */ P(() => c(_).height / w()), Z = /* @__PURE__ */ P(() => Math.max(c(E), c(O))), Y = /* @__PURE__ */ P(() => c(Z) * m()), W = /* @__PURE__ */ P(() => c(Z) * w()), L = /* @__PURE__ */ P(() => 5 * c(Z)), U = /* @__PURE__ */ P(() => c(_).x - (c(Y) - c(_).width) / 2 - c(L)), X = /* @__PURE__ */ P(() => c(_).y - (c(W) - c(_).height) / 2 - c(L)), J = /* @__PURE__ */ P(() => c(Y) + c(L) * 2), R = /* @__PURE__ */ P(() => c(W) + c(L) * 2);
  const q = () => c(Z);
  var G = {
    get position() {
      return n();
    },
    set position(ee = "bottom-right") {
      n(ee), g();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(ee) {
      r(ee), g();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(ee = "transparent") {
      o(ee), g();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(ee) {
      i(ee), g();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(ee = "") {
      s(ee), g();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(ee = 5) {
      a(ee), g();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(ee = 2) {
      l(ee), g();
    },
    get nodeComponent() {
      return u();
    },
    set nodeComponent(ee) {
      u(ee), g();
    },
    get bgColor() {
      return d();
    },
    set bgColor(ee) {
      d(ee), g();
    },
    get maskColor() {
      return p();
    },
    set maskColor(ee) {
      p(ee), g();
    },
    get maskStrokeColor() {
      return f();
    },
    set maskStrokeColor(ee) {
      f(ee), g();
    },
    get maskStrokeWidth() {
      return h();
    },
    set maskStrokeWidth(ee) {
      h(ee), g();
    },
    get width() {
      return m();
    },
    set width(ee = 200) {
      m(ee), g();
    },
    get height() {
      return w();
    },
    set height(ee = 150) {
      w(ee), g();
    },
    get pannable() {
      return y();
    },
    set pannable(ee = !0) {
      y(ee), g();
    },
    get zoomable() {
      return b();
    },
    set zoomable(ee = !0) {
      b(ee), g();
    },
    get inversePan() {
      return x();
    },
    set inversePan(ee) {
      x(ee), g();
    },
    get zoomStep() {
      return $();
    },
    set zoomStep(ee) {
      $(ee), g();
    },
    get class() {
      return C();
    },
    set class(ee) {
      C(ee), g();
    }
  }, ne = Py(), re = se(ne);
  {
    let ee = /* @__PURE__ */ P(() => ["svelte-flow__minimap", C()]);
    xh(re, () => ({ "--xy-minimap-background-color-props": d() })), qo(re.lastChild, Qe(
      {
        get position() {
          return n();
        },
        get class() {
          return c(ee);
        },
        "data-testid": "svelte-flow__minimap"
      },
      () => S,
      {
        children: (ve, ce) => {
          var ie = Ne(), ae = se(ie);
          {
            var me = (ge) => {
              var xe = Ey();
              let de;
              var _e = B(xe);
              {
                var Le = (ze) => {
                  var Ze = Sy(), Ke = B(Ze, !0);
                  K(Ze), Ee(() => {
                    ke(Ze, "id", c(k)), Je(Ke, r() ?? c(M)["minimap.ariaLabel"]);
                  }), D(ze, Ze);
                };
                ue(_e, (ze) => {
                  (r() ?? c(M)["minimap.ariaLabel"]) && ze(Le);
                });
              }
              var F = V(_e);
              Et(F, 17, () => c(N).nodes, (ze) => ze.id, (ze, Ze) => {
                const Ke = /* @__PURE__ */ P(() => c(N).nodeLookup.get(c(Ze).id));
                var ot = Ne(), _t = se(ot);
                {
                  var Ue = (Ie) => {
                    const ye = /* @__PURE__ */ P(() => pr(c(Ke)));
                    {
                      let We = /* @__PURE__ */ P(() => j?.(c(Ke))), vt = /* @__PURE__ */ P(() => A(c(Ke))), qe = /* @__PURE__ */ P(() => I(c(Ke)));
                      Qd(Ie, Qe(
                        {
                          get id() {
                            return c(Ke).id;
                          },
                          get x() {
                            return c(Ke).internals.positionAbsolute.x;
                          },
                          get y() {
                            return c(Ke).internals.positionAbsolute.y;
                          }
                        },
                        () => c(ye),
                        {
                          get selected() {
                            return c(Ke).selected;
                          },
                          get nodeComponent() {
                            return u();
                          },
                          get color() {
                            return c(We);
                          },
                          get borderRadius() {
                            return a();
                          },
                          get strokeColor() {
                            return c(vt);
                          },
                          get strokeWidth() {
                            return l();
                          },
                          get shapeRendering() {
                            return H;
                          },
                          get class() {
                            return c(qe);
                          }
                        }
                      ));
                    }
                  };
                  ue(_t, (Ie) => {
                    c(Ke) && Xc(c(Ke)) && !c(Ke).hidden && Ie(Ue);
                  });
                }
                D(ze, ot);
              });
              var Ye = V(F);
              K(xe), Ct(xe, (ze, Ze) => ky?.(ze, Ze), () => ({
                store: c(N),
                panZoom: c(N).panZoom,
                getViewScale: q,
                translateExtent: c(N).translateExtent,
                width: c(N).width,
                height: c(N).height,
                inversePan: x(),
                zoomStep: $(),
                pannable: y(),
                zoomable: b()
              })), Ee(() => {
                ke(xe, "width", m()), ke(xe, "height", w()), ke(xe, "viewBox", `${c(U) ?? ""} ${c(X) ?? ""} ${c(J) ?? ""} ${c(R) ?? ""}`), ke(xe, "aria-labelledby", c(k)), de = xt(xe, "", de, {
                  "--xy-minimap-mask-background-color-props": p(),
                  "--xy-minimap-mask-stroke-color-props": f(),
                  "--xy-minimap-mask-stroke-width-props": h() ? h() * c(Z) : void 0
                }), ke(Ye, "d", `M${c(U) - c(L)},${c(X) - c(L)}h${c(J) + c(L) * 2}v${c(R) + c(L) * 2}h${-c(J) - c(L) * 2}z
      M${c(T).x ?? ""},${c(T).y ?? ""}h${c(T).width ?? ""}v${c(T).height ?? ""}h${-c(T).width}z`);
              }), D(ge, xe);
            };
            ue(ae, (ge) => {
              c(N).panZoom && ge(me);
            });
          }
          D(ve, ie);
        },
        $$slots: { default: !0 }
      }
    )), K(re);
  }
  return D(e, ne), pe(G);
}
le(
  ef,
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
var Ny = /* @__PURE__ */ te("<div><!></div>");
function tf(e, t) {
  fe(t, !0);
  let n = v(t, "nodeId", 7), r = v(t, "position", 23, () => Ce.Top), o = v(t, "align", 7, "center"), i = v(t, "offset", 7, 10), s = v(t, "isVisible", 7), a = v(t, "children", 7), l = /* @__PURE__ */ Xe(t, [
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
  const u = vn(), { getNodesBounds: d } = gt(), p = ir("svelteflow__node_id");
  let f = /* @__PURE__ */ P(() => (u.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    (S, N) => {
      const M = u.nodeLookup.get(N);
      return M && S.push(M), S;
    },
    []
  ))), h = /* @__PURE__ */ P(() => {
    const S = d(c(f));
    return S ? B0(S, u.viewport, r(), i(), o()) : "";
  }), m = /* @__PURE__ */ P(() => c(f).length === 0 ? 1 : Math.max(...c(f).map((S) => (S.internals.z || 5) + 1))), w = /* @__PURE__ */ P(() => u.nodes.filter((S) => S.selected).length), y = /* @__PURE__ */ P(() => typeof s() == "boolean" ? s() : c(f).length === 1 && c(f)[0].selected && c(w) === 1);
  var b = {
    get nodeId() {
      return n();
    },
    set nodeId(S) {
      n(S), g();
    },
    get position() {
      return r();
    },
    set position(S = Ce.Top) {
      r(S), g();
    },
    get align() {
      return o();
    },
    set align(S = "center") {
      o(S), g();
    },
    get offset() {
      return i();
    },
    set offset(S = 10) {
      i(S), g();
    },
    get isVisible() {
      return s();
    },
    set isVisible(S) {
      s(S), g();
    },
    get children() {
      return a();
    },
    set children(S) {
      a(S), g();
    }
  }, x = Ne(), $ = se(x);
  {
    var C = (S) => {
      var N = Ny();
      pt(
        N,
        (j, A) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": j,
          ...l,
          [_n]: A
        }),
        [
          () => c(f).reduce((j, A) => `${j}${A.id} `, "").trim(),
          () => ({
            display: vd().value ? "none" : void 0,
            position: "absolute",
            transform: c(h),
            "z-index": c(m)
          })
        ]
      );
      var M = B(N);
      st(M, () => a() ?? St), K(N), Ct(N, (j, A) => gd?.(j, A), () => "root"), D(S, N);
    };
    ue($, (S) => {
      u.domNode && c(y) && c(f) && S(C);
    });
  }
  return D(e, x), pe(b);
}
le(
  tf,
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
function Xn(e) {
  const t = /* @__PURE__ */ P(vn), n = /* @__PURE__ */ P(() => c(t).nodes), r = /* @__PURE__ */ P(() => c(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ P(() => {
    c(n);
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const p = c(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!nm(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return c(s);
    }
  };
}
const Xl = "tinyflow-component", Oy = [
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
], Ty = [
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
], Da = [
  { label: "文字", value: "text" },
  { label: "图片", value: "image" },
  { label: "视频", value: "video" },
  { label: "音频", value: "audio" },
  { label: "文件", value: "file" },
  { label: "其他", value: "other" }
], Dy = [
  { label: "单行输入框", value: "input" },
  { label: "多行输入框", value: "textarea" },
  { label: "下拉菜单", value: "select" },
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
], My = [
  { label: "单选", value: "radio" },
  { label: "多选", value: "checkbox" }
];
class Ly {
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
const Vy = () => {
  let e = /* @__PURE__ */ Oe([]), t = /* @__PURE__ */ Oe([]), n = /* @__PURE__ */ Oe({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Q(e, r), Q(t, o);
    },
    getNodes: () => c(e),
    setNodes: (r) => {
      Q(e, r);
    },
    getEdges: () => c(t),
    setEdges: (r) => {
      Q(t, r);
    },
    getViewport: () => c(n),
    setViewport: (r) => {
      Q(n, r);
    },
    getNode: (r) => c(e).find((o) => o.id === r),
    addNode: (r) => {
      Q(e, [...c(e), r]);
    },
    removeNode: (r) => {
      Q(e, c(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Q(e, c(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Q(e, r(c(e)));
    },
    updateNodeData: (r, o) => {
      Q(e, c(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Q(e, c(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => c(t).find((o) => o.id === r),
    addEdge: (r) => {
      Q(t, [...c(t), r]);
    },
    removeEdge: (r) => {
      Q(t, c(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Q(t, c(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Q(t, r(c(t)));
    },
    updateEdgeData: (r, o) => {
      Q(t, c(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Re = Vy();
var zy = /* @__PURE__ */ te("<button><!></button>");
function Ve(e, t) {
  fe(t, !0);
  const n = v(t, "children", 7), r = v(t, "primary", 7), o = /* @__PURE__ */ Xe(t, [
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
      n(l), g();
    },
    get primary() {
      return r();
    },
    set primary(l) {
      r(l), g();
    }
  }, s = zy();
  pt(s, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var a = B(s);
  return st(a, () => n() ?? St), K(s), D(e, s), pe(i);
}
le(Ve, { children: {}, primary: {} }, [], [], !0);
var Hy = /* @__PURE__ */ te("<input/>");
function nf(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Hy();
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
    void 0,
    !0
  ), D(e, r), pe();
}
le(nf, {}, [], [], !0);
var Ay = /* @__PURE__ */ te('<div><input type="hidden"/> <!> <!></div>');
const Iy = {
  hash: "svelte-1o3a23c",
  code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function rf(e, t) {
  fe(t, !0), Fe(e, Iy);
  const n = v(t, "placeholder", 7), r = v(t, "label", 7), o = v(t, "value", 7), i = v(t, "buttonText", 7, "选择..."), s = v(t, "onChosen", 7), a = /* @__PURE__ */ Xe(t, [
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
      n(h), g();
    },
    get label() {
      return r();
    },
    set label(h) {
      r(h), g();
    },
    get value() {
      return o();
    },
    set value(h) {
      o(h), g();
    },
    get buttonText() {
      return i();
    },
    set buttonText(h = "选择...") {
      i(h), g();
    },
    get onChosen() {
      return s();
    },
    set onChosen(h) {
      s(h), g();
    }
  }, u = Ay();
  pt(
    u,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    void 0,
    void 0,
    "svelte-1o3a23c"
  );
  var d = B(u);
  xr(d);
  var p = V(d, 2);
  ut(p, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var f = V(p, 2);
  return Ve(f, {
    onclick: (h) => {
      s()?.(o(), r(), h);
    },
    style: "padding: 3px",
    children: (h, m) => {
      be();
      var w = Pe();
      Ee(() => Je(w, i())), D(h, w);
    },
    $$slots: { default: !0 }
  }), K(u), Ee(() => ui(d, o())), D(e, u), pe(l);
}
le(
  rf,
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
var Ry = /* @__PURE__ */ te("<input/>");
function ut(e, t) {
  fe(t, !0);
  const n = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = Ry();
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
    void 0,
    !0
  ), D(e, r), pe();
}
le(ut, {}, [], [], !0);
var jy = /* @__PURE__ */ te("<textarea></textarea>");
function et(e, t) {
  fe(t, !0);
  const n = v(t, "value", 7), r = v(t, "height", 7), o = v(t, "autoHeight", 7, !0), i = v(t, "maxHeight", 7), s = v(t, "onHeightChange", 7), a = /* @__PURE__ */ Xe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value",
    "height",
    "autoHeight",
    "maxHeight",
    "onHeightChange"
  ]);
  let l, u;
  function d() {
    if (l && o()) {
      if (r() !== void 0) {
        const y = typeof r() == "number" ? `${r()}px` : r();
        l.style.height = y, l.style.overflowY = "hidden", s()?.(y);
        return;
      }
      l.style.height = "auto", l.style.overflowY = "hidden";
      let w = l.scrollHeight;
      if (!u) {
        const y = t.rows || 1, b = getComputedStyle(l);
        u = parseFloat(b.fontSize) * 1.2 * y + parseFloat(b.paddingTop) + parseFloat(b.paddingBottom) + parseFloat(b.borderTopWidth);
      }
      if (w < u && (w = u), i()) {
        const y = typeof i() == "number" ? `${i()}px` : i();
        w > parseInt(y) ? (l.style.height = y, l.style.overflowY = "auto") : l.style.height = `${w}px`;
      } else
        l.style.height = `${w}px`;
      s()?.(l.style.height);
    }
  }
  rt(() => {
    d();
  });
  var p = {
    get value() {
      return n();
    },
    set value(w) {
      n(w), g();
    },
    get height() {
      return r();
    },
    set height(w) {
      r(w), g();
    },
    get autoHeight() {
      return o();
    },
    set autoHeight(w = !0) {
      o(w), g();
    },
    get maxHeight() {
      return i();
    },
    set maxHeight(w) {
      i(w), g();
    },
    get onHeightChange() {
      return s();
    },
    set onHeightChange(w) {
      s(w), g();
    }
  }, f = jy();
  Jp(f);
  var h = (w) => {
    d(), t.oninput?.(w);
  }, m = (w) => {
    d(), t.onchange?.(w);
  };
  return pt(f, () => ({
    spellcheck: "false",
    ...a,
    oninput: h,
    onchange: m,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), jt(f, (w) => l = w, () => l), D(e, f), pe(p);
}
le(
  et,
  {
    value: {},
    height: {},
    autoHeight: {},
    maxHeight: {},
    onHeightChange: {}
  },
  [],
  [],
  !0
);
var Zy = /* @__PURE__ */ te('<div role="button"><!></div>'), Ky = /* @__PURE__ */ te("<div></div>");
function of(e, t) {
  const n = cl(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = cl(n, ["items", "onChange", "activeIndex"]);
  fe(t, !1);
  let o = v(t, "items", 28, () => []), i = v(t, "onChange", 12, () => {
  }), s = v(t, "activeIndex", 12, 0);
  function a(d, p) {
    s(p), i()?.(d, p);
  }
  var l = {
    get items() {
      return o();
    },
    set items(d) {
      o(d), g();
    },
    get onChange() {
      return i();
    },
    set onChange(d) {
      i(d), g();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(d) {
      s(d), g();
    }
  };
  dc();
  var u = Ky();
  return pt(u, () => ({
    ...r,
    class: `tf-tabs ${ca(r), yt(() => r.class) ?? ""}`
  })), Et(u, 5, o, Wr, (d, p, f) => {
    var h = Zy();
    ke(h, "tabindex", f), h.__click = () => a(c(p), f), h.__keydown = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), a(c(p), f));
    };
    var m = B(h);
    {
      var w = (b) => {
        var x = Pe();
        Ee(() => Je(x, (c(p), yt(() => c(p).label)))), D(b, x);
      }, y = (b) => {
        var x = Ne(), $ = se(x);
        st($, () => (c(p), yt(() => c(p).label) ?? St)), D(b, x);
      };
      ue(m, (b) => {
        c(p), yt(() => typeof c(p).label == "string") ? b(w) : b(y, !1);
      });
    }
    K(h), Ee(() => Rt(h, 1, `tf-tabs-item ${f === s() ? "active" : ""}`)), D(d, h);
  }), K(u), D(e, u), pe(l);
}
fr(["click", "keydown"]);
le(of, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var By = /* @__PURE__ */ te('<span class="tf-collapse-item-title-icon"><!></span>'), Yy = /* @__PURE__ */ te('<div class="tf-collapse-item-description"><!></div>'), Wy = /* @__PURE__ */ te('<div class="tf-collapse-item-content"><!></div>'), Fy = /* @__PURE__ */ te('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), qy = /* @__PURE__ */ te("<div></div>");
const Xy = {
  hash: "svelte-ynwjxt",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function sf(e, t) {
  fe(t, !0), Fe(e, Xy);
  let n = v(t, "items", 7), r = v(t, "onChange", 7), o = v(t, "activeKeys", 31, () => Qt([]));
  function i(l) {
    o().includes(l.key) ? o(o().filter((u) => u !== l.key)) : (o().push(l.key), o(o())), r()?.(l, o());
  }
  var s = {
    get items() {
      return n();
    },
    set items(l) {
      n(l), g();
    },
    get onChange() {
      return r();
    },
    set onChange(l) {
      r(l), g();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(l = []) {
      o(l), g();
    }
  }, a = qy();
  return Et(a, 21, n, Wr, (l, u, d) => {
    var p = Fy(), f = B(p);
    ke(f, "tabindex", d), f.__click = () => i(c(u)), f.__keydown = (S) => {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), i(c(u)));
    };
    var h = B(f);
    {
      var m = (S) => {
        var N = By(), M = B(N);
        er(M, {
          get target() {
            return c(u).icon;
          }
        }), K(N), D(S, N);
      };
      ue(h, (S) => {
        c(u).icon && S(m);
      });
    }
    var w = V(h, 2);
    er(w, {
      get target() {
        return c(u).title;
      }
    });
    var y = V(w, 2);
    K(f);
    var b = V(f, 2);
    {
      var x = (S) => {
        var N = Yy(), M = B(N);
        er(M, {
          get target() {
            return c(u).description;
          }
        }), K(N), D(S, N);
      };
      ue(b, (S) => {
        c(u).description && S(x);
      });
    }
    var $ = V(b, 2);
    {
      var C = (S) => {
        var N = Wy(), M = B(N);
        er(M, {
          get target() {
            return c(u).content;
          }
        }), K(N), D(S, N);
      };
      ue($, (S) => {
        o().includes(c(u).key) && S(C);
      });
    }
    K(p), Ee((S) => Rt(y, 1, `tf-collapse-item-title-arrow ${S ?? ""}`, "svelte-ynwjxt"), [
      () => o().includes(c(u).key) ? "rotate-90" : ""
    ]), D(l, p);
  }), K(a), Ee(() => {
    xt(a, t.style), Rt(a, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
  }), D(e, a), pe(s);
}
fr(["click", "keydown"]);
le(sf, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function er(e, t) {
  fe(t, !0);
  let n = v(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = {
    get target() {
      return n();
    },
    set target(l) {
      n(l), g();
    }
  }, o = Ne(), i = se(o);
  {
    var s = (l) => {
      var u = Ne(), d = se(u);
      st(d, () => n() ?? St), D(l, u);
    }, a = (l) => {
      var u = Ne(), d = se(u);
      pa(d, n), D(l, u);
    };
    ue(i, (l) => {
      typeof n() == "function" ? l(s) : l(a, !1);
    });
  }
  return D(e, o), pe(r);
}
le(er, { target: {} }, [], [], !0);
var Uy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Gy = /* @__PURE__ */ te('<div class="tf-select-content-children"><!></div>'), Jy = /* @__PURE__ */ te('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), Qy = /* @__PURE__ */ te('<div class="tf-select-content nopan nodrag nowheel "><!></div>'), e2 = /* @__PURE__ */ te("<!> <!>", 1), t2 = /* @__PURE__ */ te('<div class="tf-select-input-placeholder"> </div>'), n2 = /* @__PURE__ */ te('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), r2 = /* @__PURE__ */ te("<div><!></div>");
function wt(e, t) {
  fe(t, !0);
  const n = (x, $ = St) => {
    var C = Ne(), S = se(C);
    Et(S, 19, $, (N, M) => `${M}_${N.value}`, (N, M) => {
      var j = Jy(), A = se(j);
      A.__click = () => m(c(M));
      var I = B(A), H = B(I);
      {
        var k = (O) => {
          var Z = Uy();
          D(O, Z);
        };
        ue(H, (O) => {
          c(M).children && c(M).children.length > 0 && O(k);
        });
      }
      K(I);
      var T = V(I, 2);
      er(T, {
        get target() {
          return c(M).label;
        }
      }), K(A);
      var _ = V(A, 2);
      {
        var E = (O) => {
          var Z = Gy(), Y = B(Z);
          n(Y, () => c(M).children), K(Z), D(O, Z);
        };
        ue(_, (O) => {
          c(M).children && c(M).children.length > 0 && (a() || u().includes(c(M).value)) && O(E);
        });
      }
      D(N, j);
    }), D(x, C);
  };
  let r = v(t, "items", 7), o = v(t, "onSelect", 7), i = v(t, "value", 23, () => []), s = v(t, "defaultValue", 23, () => []), a = v(t, "expandAll", 7, !0), l = v(t, "multiple", 7, !1), u = v(t, "expandValue", 23, () => []), d = v(t, "placeholder", 7), p = /* @__PURE__ */ Xe(t, [
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
  ]), f = /* @__PURE__ */ P(() => {
    const x = [], $ = (C) => {
      for (let S of C)
        i().length > 0 ? i().includes(S.value) && x.push(S) : s().includes(S.value) && x.push(S), S.children && S.children.length > 0 && $(S.children);
    };
    return $(r()), x;
  }), h;
  function m(x) {
    h?.hide(), o()?.(x);
  }
  var w = {
    get items() {
      return r();
    },
    set items(x) {
      r(x), g();
    },
    get onSelect() {
      return o();
    },
    set onSelect(x) {
      o(x), g();
    },
    get value() {
      return i();
    },
    set value(x = []) {
      i(x), g();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(x = []) {
      s(x), g();
    },
    get expandAll() {
      return a();
    },
    set expandAll(x = !0) {
      a(x), g();
    },
    get multiple() {
      return l();
    },
    set multiple(x = !1) {
      l(x), g();
    },
    get expandValue() {
      return u();
    },
    set expandValue(x = []) {
      u(x), g();
    },
    get placeholder() {
      return d();
    },
    set placeholder(x) {
      d(x), g();
    }
  }, y = r2();
  pt(y, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var b = B(y);
  return jt(
    hr(b, {
      floating: (x) => {
        var $ = Qy(), C = B($);
        n(C, r), K($), D(x, $);
      },
      children: (x, $) => {
        var C = n2();
        pt(C, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var S = B(C);
        Et(
          S,
          23,
          () => c(f),
          (N, M) => `${M}_${N.value}`,
          (N, M, j) => {
            var A = Ne(), I = se(A);
            {
              var H = (T) => {
                var _ = Ne(), E = se(_);
                {
                  var O = (Z) => {
                    er(Z, {
                      get target() {
                        return c(M).label;
                      }
                    });
                  };
                  ue(E, (Z) => {
                    c(j) === 0 && Z(O);
                  });
                }
                D(T, _);
              }, k = (T) => {
                var _ = e2(), E = se(_);
                er(E, {
                  get target() {
                    return c(M).label;
                  }
                });
                var O = V(E, 2);
                {
                  var Z = (Y) => {
                    var W = Pe(",");
                    D(Y, W);
                  };
                  ue(O, (Y) => {
                    c(j) < c(f).length - 1 && Y(Z);
                  });
                }
                D(T, _);
              };
              ue(I, (T) => {
                l() ? T(k, !1) : T(H);
              });
            }
            D(N, A);
          },
          (N) => {
            var M = t2(), j = B(M, !0);
            K(M), Ee(() => Je(j, d())), D(N, M);
          }
        ), K(S), be(2), K(C), D(x, C);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (x) => h = x,
    () => h
  ), K(y), D(e, y), pe(w);
}
fr(["click"]);
le(
  wt,
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
const To = Math.min, jr = Math.max, Vi = Math.round, Sn = (e) => ({
  x: e,
  y: e
}), o2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, i2 = {
  start: "end",
  end: "start"
};
function Ys(e, t, n) {
  return jr(e, To(t, n));
}
function Xo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nr(e) {
  return e.split("-")[0];
}
function Uo(e) {
  return e.split("-")[1];
}
function af(e) {
  return e === "x" ? "y" : "x";
}
function Ma(e) {
  return e === "y" ? "height" : "width";
}
const s2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function tr(e) {
  return s2.has(Nr(e)) ? "y" : "x";
}
function La(e) {
  return af(tr(e));
}
function a2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Uo(e), o = La(e), i = Ma(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = zi(s)), [s, zi(s)];
}
function l2(e) {
  const t = zi(e);
  return [Ws(e), t, Ws(t)];
}
function Ws(e) {
  return e.replace(/start|end/g, (t) => i2[t]);
}
const Ul = ["left", "right"], Gl = ["right", "left"], u2 = ["top", "bottom"], c2 = ["bottom", "top"];
function d2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Gl : Ul : t ? Ul : Gl;
    case "left":
    case "right":
      return t ? u2 : c2;
    default:
      return [];
  }
}
function f2(e, t, n, r) {
  const o = Uo(e);
  let i = d2(Nr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ws)))), i;
}
function zi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => o2[t]);
}
function p2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function lf(e) {
  return typeof e != "number" ? p2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Hi(e) {
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
  const i = tr(t), s = La(t), a = Ma(s), l = Nr(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Uo(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const h2 = async (e, t, n) => {
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
  } = Jl(u, r, l), f = r, h = {}, m = 0;
  for (let w = 0; w < a.length; w++) {
    const {
      name: y,
      fn: b
    } = a[w], {
      x,
      y: $,
      data: C,
      reset: S
    } = await b({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, p = $ ?? p, h = {
      ...h,
      [y]: {
        ...h[y],
        ...C
      }
    }, S && m <= 50 && (m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (u = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: p
    } = Jl(u, f, l)), w = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function uf(e, t) {
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
    padding: h = 0
  } = Xo(t, e), m = lf(h), w = a[f ? p === "floating" ? "reference" : "floating" : p], y = Hi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: l
  })), b = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Hi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (y.top - C.top + m.top) / $.y,
    bottom: (C.bottom - y.bottom + m.bottom) / $.y,
    left: (y.left - C.left + m.left) / $.x,
    right: (C.right - y.right + m.right) / $.x
  };
}
const g2 = (e) => ({
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
    } = Xo(e, t) || {};
    if (u == null)
      return {};
    const p = lf(d), f = {
      x: n,
      y: r
    }, h = La(o), m = Ma(h), w = await s.getDimensions(u), y = h === "y", b = y ? "top" : "left", x = y ? "bottom" : "right", $ = y ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[h] - f[h] - i.floating[m], S = f[h] - i.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let M = N ? N[$] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(N))) && (M = a.floating[$] || i.floating[m]);
    const j = C / 2 - S / 2, A = M / 2 - w[m] / 2 - 1, I = To(p[b], A), H = To(p[x], A), k = I, T = M - w[m] - H, _ = M / 2 - w[m] / 2 + j, E = Ys(k, _, T), O = !l.arrow && Uo(o) != null && _ !== E && i.reference[m] / 2 - (_ < k ? I : H) - w[m] / 2 < 0, Z = O ? _ < k ? _ - k : _ - T : 0;
    return {
      [h]: f[h] + Z,
      data: {
        [h]: E,
        centerOffset: _ - E - Z,
        ...O && {
          alignmentOffset: Z
        }
      },
      reset: O
    };
  }
}), v2 = function(e) {
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
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: w = !0,
        ...y
      } = Xo(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Nr(o), x = tr(a), $ = Nr(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = f || ($ || !w ? [zi(a)] : l2(a)), N = m !== "none";
      !f && N && S.push(...f2(a, w, m, C));
      const M = [a, ...S], j = await uf(t, y), A = [];
      let I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(j[b]), p) {
        const _ = a2(o, s, C);
        A.push(j[_[0]], j[_[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: A
      }], !A.every((_) => _ <= 0)) {
        var H, k;
        const _ = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1, E = M[_];
        if (E && (!(p === "alignment" && x !== tr(E)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((Z) => tr(Z.placement) === x ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: I
            },
            reset: {
              placement: E
            }
          };
        let O = (k = I.filter((Z) => Z.overflows[0] <= 0).sort((Z, Y) => Z.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!O)
          switch (h) {
            case "bestFit": {
              var T;
              const Z = (T = I.filter((Y) => {
                if (N) {
                  const W = tr(Y.placement);
                  return W === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((W) => W > 0).reduce((W, L) => W + L, 0)]).sort((Y, W) => Y[1] - W[1])[0]) == null ? void 0 : T[0];
              Z && (O = Z);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
}, m2 = /* @__PURE__ */ new Set(["left", "top"]);
async function y2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Nr(n), a = Uo(n), l = tr(n) === "y", u = m2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Xo(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: m
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), l ? {
    x: h * d,
    y: f * u
  } : {
    x: f * u,
    y: h * d
  };
}
const w2 = function(e) {
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
      } = t, l = await y2(t, e);
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
}, b2 = function(e) {
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
          fn: (y) => {
            let {
              x: b,
              y: x
            } = y;
            return {
              x: b,
              y: x
            };
          }
        },
        ...l
      } = Xo(e, t), u = {
        x: n,
        y: r
      }, d = await uf(t, l), p = tr(Nr(o)), f = af(p);
      let h = u[f], m = u[p];
      if (i) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = h + d[y], $ = h - d[b];
        h = Ys(x, h, $);
      }
      if (s) {
        const y = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = m + d[y], $ = m - d[b];
        m = Ys(x, m, $);
      }
      const w = a.fn({
        ...t,
        [f]: h,
        [p]: m
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
function os() {
  return typeof window < "u";
}
function oo(e) {
  return cf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Un(e) {
  var t;
  return (t = (cf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cf(e) {
  return os() ? e instanceof Node || e instanceof Wt(e).Node : !1;
}
function fn(e) {
  return os() ? e instanceof Element || e instanceof Wt(e).Element : !1;
}
function Pn(e) {
  return os() ? e instanceof HTMLElement || e instanceof Wt(e).HTMLElement : !1;
}
function Ql(e) {
  return !os() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Wt(e).ShadowRoot;
}
const x2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Go(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = pn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !x2.has(o);
}
const _2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function C2(e) {
  return _2.has(oo(e));
}
const $2 = [":popover-open", ":modal"];
function is(e) {
  return $2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const k2 = ["transform", "translate", "scale", "rotate", "perspective"], S2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], E2 = ["paint", "layout", "strict", "content"];
function Va(e) {
  const t = za(), n = fn(e) ? pn(e) : e;
  return k2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || S2.some((r) => (n.willChange || "").includes(r)) || E2.some((r) => (n.contain || "").includes(r));
}
function P2(e) {
  let t = lr(e);
  for (; Pn(t) && !eo(t); ) {
    if (Va(t))
      return t;
    if (is(t))
      return null;
    t = lr(t);
  }
  return null;
}
function za() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const N2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function eo(e) {
  return N2.has(oo(e));
}
function pn(e) {
  return Wt(e).getComputedStyle(e);
}
function ss(e) {
  return fn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function lr(e) {
  if (oo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ql(e) && e.host || // Fallback.
    Un(e)
  );
  return Ql(t) ? t.host : t;
}
function df(e) {
  const t = lr(e);
  return eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pn(t) && Go(t) ? t : df(t);
}
function ff(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = df(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Wt(o);
  return i ? (Fs(s), t.concat(s, s.visualViewport || [], Go(o) ? o : [], [])) : t.concat(o, ff(o, []));
}
function Fs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pf(e) {
  const t = pn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Pn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Vi(n) !== i || Vi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function hf(e) {
  return fn(e) ? e : e.contextElement;
}
function Zr(e) {
  const t = hf(e);
  if (!Pn(t))
    return Sn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = pf(t);
  let s = (i ? Vi(n.width) : n.width) / r, a = (i ? Vi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const O2 = /* @__PURE__ */ Sn(0);
function gf(e) {
  const t = Wt(e);
  return !za() || !t.visualViewport ? O2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function T2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Wt(e) ? !1 : t;
}
function Do(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = hf(e);
  let s = Sn(1);
  t && (r ? fn(r) && (s = Zr(r)) : s = Zr(e));
  const a = T2(i, n, r) ? gf(i) : Sn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = Wt(i), h = r && fn(r) ? Wt(r) : r;
    let m = f, w = Fs(m);
    for (; w && r && h !== m; ) {
      const y = Zr(w), b = w.getBoundingClientRect(), x = pn(w), $ = b.left + (w.clientLeft + parseFloat(x.paddingLeft)) * y.x, C = b.top + (w.clientTop + parseFloat(x.paddingTop)) * y.y;
      l *= y.x, u *= y.y, d *= y.x, p *= y.y, l += $, u += C, m = Wt(w), w = Fs(m);
    }
  }
  return Hi({
    width: d,
    height: p,
    x: l,
    y: u
  });
}
function as(e, t) {
  const n = ss(e).scrollLeft;
  return t ? t.left + n : Do(Un(e)).left + n;
}
function vf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - as(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function D2(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Un(r), a = t ? is(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Sn(1);
  const d = Sn(0), p = Pn(r);
  if ((p || !p && !i) && ((oo(r) !== "body" || Go(s)) && (l = ss(r)), Pn(r))) {
    const h = Do(r);
    u = Zr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const f = s && !p && !i ? vf(s, l) : Sn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y + f.y
  };
}
function M2(e) {
  return Array.from(e.getClientRects());
}
function L2(e) {
  const t = Un(e), n = ss(e), r = e.ownerDocument.body, o = jr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = jr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + as(e);
  const a = -n.scrollTop;
  return pn(r).direction === "rtl" && (s += jr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const eu = 25;
function V2(e, t) {
  const n = Wt(e), r = Un(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = za();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = as(r);
  if (u <= 0) {
    const d = r.ownerDocument, p = d.body, f = getComputedStyle(p), h = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - p.clientWidth - h);
    m <= eu && (i -= m);
  } else u <= eu && (i += u);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const z2 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function H2(e, t) {
  const n = Do(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Pn(e) ? Zr(e) : Sn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function tu(e, t, n) {
  let r;
  if (t === "viewport")
    r = V2(e, n);
  else if (t === "document")
    r = L2(Un(e));
  else if (fn(t))
    r = H2(t, n);
  else {
    const o = gf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Hi(r);
}
function mf(e, t) {
  const n = lr(e);
  return n === t || !fn(n) || eo(n) ? !1 : pn(n).position === "fixed" || mf(n, t);
}
function A2(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ff(e, []).filter((a) => fn(a) && oo(a) !== "body"), o = null;
  const i = pn(e).position === "fixed";
  let s = i ? lr(e) : e;
  for (; fn(s) && !eo(s); ) {
    const a = pn(s), l = Va(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && z2.has(o.position) || Go(s) && !l && mf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = lr(s);
  }
  return t.set(e, r), r;
}
function I2(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? is(t) ? [] : A2(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, u) => {
    const d = tu(t, u, o);
    return l.top = jr(d.top, l.top), l.right = To(d.right, l.right), l.bottom = To(d.bottom, l.bottom), l.left = jr(d.left, l.left), l;
  }, tu(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function R2(e) {
  const {
    width: t,
    height: n
  } = pf(e);
  return {
    width: t,
    height: n
  };
}
function j2(e, t, n) {
  const r = Pn(t), o = Un(t), i = n === "fixed", s = Do(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Sn(0);
  function u() {
    l.x = as(o);
  }
  if (r || !r && !i)
    if ((oo(t) !== "body" || Go(o)) && (a = ss(t)), r) {
      const h = Do(t, !0, i, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? vf(o, a) : Sn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function _s(e) {
  return pn(e).position === "static";
}
function nu(e, t) {
  if (!Pn(e) || pn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Un(e) === n && (n = n.ownerDocument.body), n;
}
function yf(e, t) {
  const n = Wt(e);
  if (is(e))
    return n;
  if (!Pn(e)) {
    let o = lr(e);
    for (; o && !eo(o); ) {
      if (fn(o) && !_s(o))
        return o;
      o = lr(o);
    }
    return n;
  }
  let r = nu(e, t);
  for (; r && C2(r) && _s(r); )
    r = nu(r, t);
  return r && eo(r) && _s(r) && !Va(r) ? n : r || P2(e) || n;
}
const Z2 = async function(e) {
  const t = this.getOffsetParent || yf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: j2(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function K2(e) {
  return pn(e).direction === "rtl";
}
const B2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: D2,
  getDocumentElement: Un,
  getClippingRect: I2,
  getOffsetParent: yf,
  getElementRects: Z2,
  getClientRects: M2,
  getDimensions: R2,
  getScale: Zr,
  isElement: fn,
  isRTL: K2
}, Y2 = w2, W2 = b2, F2 = v2, q2 = g2, X2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: B2,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return h2(e, t, {
    ...o,
    platform: i
  });
}, U2 = ({
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
    X2(e, u, {
      placement: r,
      middleware: [
        Y2(o),
        // 手动偏移配置
        F2(i),
        //自动翻转
        W2(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [q2({ element: d })] : []
      ]
    }).then(({ x: b, y: x, placement: $, middlewareData: C }) => {
      if (Object.assign(u.style, {
        left: `${b}px`,
        top: `${x}px`
      }), l) {
        const { x: S, y: N } = C.arrow, M = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[$.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: S != null ? `${S}px` : "",
          top: N != null ? `${N}px` : "",
          right: "",
          bottom: "",
          [M]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function m() {
    u.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function w(b) {
    b.stopPropagation(), f ? m() : h();
  }
  function y(b) {
    u.contains(b.target) || m();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((b) => {
    e.addEventListener(b, w);
  }), document.addEventListener("click", y), {
    destroy() {
      t.forEach((b) => {
        e.removeEventListener(b, w);
      }), document.removeEventListener("click", y);
    },
    hide() {
      m();
    },
    isVisible() {
      return f;
    }
  };
};
var G2 = /* @__PURE__ */ te('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function hr(e, t) {
  fe(t, !0);
  const n = v(t, "children", 7), r = v(t, "floating", 7), o = v(t, "placement", 7, "bottom");
  let i, s, a;
  Fn(() => (a = U2({
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
    set children(w) {
      n(w), g();
    },
    get floating() {
      return r();
    },
    set floating(w) {
      r(w), g();
    },
    get placement() {
      return o();
    },
    set placement(w = "bottom") {
      o(w), g();
    }
  }, d = G2(), p = B(d), f = B(p);
  st(f, n), K(p), jt(p, (w) => i = w, () => i);
  var h = V(p, 2), m = B(h);
  return st(m, r), K(h), jt(h, (w) => s = w, () => s), K(d), D(e, d), pe(u);
}
le(hr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Ae(e, t) {
  fe(t, !0);
  const n = v(t, "children", 7), r = v(t, "level", 7, 1), o = v(t, "mt", 7), i = v(t, "mb", 7);
  var s = {
    get children() {
      return n();
    },
    set children(u) {
      n(u), g();
    },
    get level() {
      return r();
    },
    set level(u = 1) {
      r(u), g();
    },
    get mt() {
      return o();
    },
    set mt(u) {
      o(u), g();
    },
    get mb() {
      return i();
    },
    set mb(u) {
      i(u), g();
    }
  }, a = Ne(), l = se(a);
  return _h(l, () => `h${r()}`, !1, (u, d) => {
    pt(u, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var p = Ne(), f = se(p);
    st(f, () => n() ?? St), D(d, p);
  }), D(e, a), pe(s);
}
le(Ae, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var J2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1q3h954"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1q3h954"></path></svg>');
const Q2 = {
  hash: "svelte-1q3h954",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Jo(e, t) {
  fe(t, !0), Fe(e, Q2);
  const n = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  Ve(e, Qe(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = J2();
      D(r, i);
    },
    $$slots: { default: !0 }
  })), pe();
}
le(Jo, {}, [], [], !0);
const ew = () => ({ deleteNode: (e) => {
  Re.removeNode(e), Re.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), Kn = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, tw = () => ({ copyNode: (e) => {
  const t = Re.getNode(e);
  if (t) {
    const n = Kn(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Re.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), at = () => ir("svelteflow__node_id"), ur = () => ir("tinyflow_options");
var nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), rw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), ow = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), iw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">执行条件： <!></div>'), sw = /* @__PURE__ */ te('<div class="input-item svelte-ana6zl">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-ana6zl">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-ana6zl">退出条件： <!></div>', 1), aw = /* @__PURE__ */ te('<div class="settings svelte-ana6zl"><div class="input-item svelte-ana6zl">节点名称： <!></div> <div class="input-item svelte-ana6zl">参数描述： <!></div> <!> <label class="input-item-inline svelte-ana6zl"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-ana6zl"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), lw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), uw = /* @__PURE__ */ te('<div class="tf-node-toolbar svelte-ana6zl"><!> <!> <!> <!></div>'), cw = /* @__PURE__ */ te('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const dw = {
  hash: "svelte-ana6zl",
  code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function nn(e, t) {
  fe(t, !0), Fe(e, dw);
  const n = v(t, "data", 7), r = v(t, "id", 7, ""), o = v(t, "icon", 7), i = v(t, "handle", 7), s = v(t, "children", 7), a = v(t, "allowExecute", 7, !0), l = v(t, "allowCopy", 7, !0), u = v(t, "allowDelete", 7, !0), d = v(t, "allowSetting", 7, !0), p = v(t, "allowSettingOfCondition", 7, !0), f = v(t, "showSourceHandle", 7, !0), h = v(t, "showTargetHandle", 7, !0), m = v(t, "onCollapse", 7);
  let w = n().expand ? ["key"] : [];
  const { updateNodeData: y, getNode: b } = gt(), x = /* @__PURE__ */ P(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: $ } = ew(), { copyNode: C } = tw(), S = ur(), N = () => {
    S.onNodeExecute?.(b(r()));
  };
  let M = at();
  var j = {
    get data() {
      return n();
    },
    set data(L) {
      n(L), g();
    },
    get id() {
      return r();
    },
    set id(L = "") {
      r(L), g();
    },
    get icon() {
      return o();
    },
    set icon(L) {
      o(L), g();
    },
    get handle() {
      return i();
    },
    set handle(L) {
      i(L), g();
    },
    get children() {
      return s();
    },
    set children(L) {
      s(L), g();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(L = !0) {
      a(L), g();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(L = !0) {
      l(L), g();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(L = !0) {
      u(L), g();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(L = !0) {
      d(L), g();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(L = !0) {
      p(L), g();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(L = !0) {
      f(L), g();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(L = !0) {
      h(L), g();
    },
    get onCollapse() {
      return m();
    },
    set onCollapse(L) {
      m(L), g();
    }
  }, A = cw(), I = se(A);
  {
    var H = (L) => {
      tf(L, {
        get position() {
          return Ce.Top;
        },
        align: "start",
        children: (U, X) => {
          var J = uw(), R = B(J);
          {
            var q = (ie) => {
              Ve(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ae, me) => {
                  var ge = nw();
                  D(ae, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ue(R, (ie) => {
              u() && ie(q);
            });
          }
          var G = V(R, 2);
          {
            var ne = (ie) => {
              Ve(ie, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  C(r());
                },
                children: (ae, me) => {
                  var ge = rw();
                  D(ae, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ue(G, (ie) => {
              l() && ie(ne);
            });
          }
          var re = V(G, 2);
          {
            var ee = (ie) => {
              Ve(ie, {
                class: "tf-node-toolbar-item",
                onclick: N,
                children: (ae, me) => {
                  var ge = ow();
                  D(ae, ge);
                },
                $$slots: { default: !0 }
              });
            };
            ue(re, (ie) => {
              a() && ie(ee);
            });
          }
          var ve = V(re, 2);
          {
            var ce = (ie) => {
              hr(ie, {
                placement: "bottom",
                floating: (ae) => {
                  var me = aw(), ge = B(me), xe = V(B(ge));
                  ut(xe, {
                    style: "width: 100%;",
                    onchange: (Ue) => {
                      const Ie = Ue.target.value;
                      y(M, { title: Ie });
                    },
                    get value() {
                      return n().title;
                    }
                  }), K(ge);
                  var de = V(ge, 2), _e = V(B(de));
                  et(_e, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ue) => {
                      const Ie = Ue.target.value;
                      y(M, { description: Ie });
                    },
                    get value() {
                      return n().description;
                    }
                  }), K(de);
                  var Le = V(de, 2);
                  {
                    var F = (Ue) => {
                      var Ie = iw(), ye = V(B(Ie));
                      et(ye, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (We) => {
                          const vt = We.target.value;
                          y(M, { condition: vt });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), K(Ie), D(Ue, Ie);
                    };
                    ue(Le, (Ue) => {
                      p() && Ue(F);
                    });
                  }
                  var Ye = V(Le, 2), ze = V(B(Ye), 2);
                  xr(ze), ze.__change = (Ue) => {
                    const Ie = Ue.target.checked;
                    y(M, { async: Ie });
                  }, K(Ye);
                  var Ze = V(Ye, 2), Ke = V(B(Ze), 2);
                  xr(Ke), Ke.__change = (Ue) => {
                    const Ie = Ue.target.checked;
                    y(M, { loopEnable: Ie });
                  }, K(Ze);
                  var ot = V(Ze, 2);
                  {
                    var _t = (Ue) => {
                      var Ie = sw(), ye = se(Ie), We = V(B(ye));
                      {
                        let dt = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
                        et(We, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (yn) => {
                            const wn = yn.target.value;
                            y(M, { loopIntervalMs: wn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      K(ye);
                      var vt = V(ye, 2), qe = V(B(vt));
                      {
                        let dt = /* @__PURE__ */ P(() => n().maxLoopCount || "0");
                        et(qe, {
                          rows: 1,
                          style: "width: 100%;",
                          onchange: (yn) => {
                            const wn = yn.target.value;
                            y(M, { maxLoopCount: wn });
                          },
                          get value() {
                            return c(dt);
                          }
                        });
                      }
                      K(vt);
                      var Dt = V(vt, 2), rn = V(B(Dt));
                      et(rn, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (dt) => {
                          const yn = dt.target.value;
                          y(M, { loopBreakCondition: yn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), K(Dt), D(Ue, Ie);
                    };
                    ue(ot, (Ue) => {
                      n().loopEnable && Ue(_t);
                    });
                  }
                  K(me), Ee(() => {
                    il(ze, !!n().async), il(Ke, !!n().loopEnable);
                  }), D(ae, me);
                },
                children: (ae, me) => {
                  Ve(ae, {
                    class: "tf-node-toolbar-item",
                    children: (ge, xe) => {
                      var de = lw();
                      D(ge, de);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            ue(ve, (ie) => {
              d() && ie(ce);
            });
          }
          K(J), D(U, J);
        },
        $$slots: { default: !0 }
      });
    };
    ue(I, (L) => {
      (a() || l() || u()) && L(H);
    });
  }
  var k = V(I, 2), T = V(B(k), 2), _ = B(T);
  sf(_, {
    get items() {
      return c(x);
    },
    get activeKeys() {
      return w;
    },
    onChange: (L, U) => {
      y(r(), { expand: U?.includes("key") }), m()?.(U?.includes("key") ? "key" : "");
    }
  }), K(T), K(k);
  var E = V(k, 2);
  {
    var O = (L) => {
      ar(L, {
        type: "target",
        get position() {
          return Ce.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    ue(E, (L) => {
      h() && L(O);
    });
  }
  var Z = V(E, 2);
  {
    var Y = (L) => {
      ar(L, {
        type: "source",
        get position() {
          return Ce.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    ue(Z, (L) => {
      f() && L(Y);
    });
  }
  var W = V(Z, 2);
  return st(W, () => i() ?? St), D(e, A), pe(j);
}
fr(["change"]);
le(
  nn,
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
var fw = /* @__PURE__ */ te('<div class="input-more-item svelte-n5iecj">数据选项： <!></div>'), pw = /* @__PURE__ */ te('<div class="input-more-setting svelte-n5iecj"><div class="input-more-item svelte-n5iecj">数据内容： <!></div> <div class="input-more-item svelte-n5iecj">输入方式： <!></div> <!> <div class="input-more-item svelte-n5iecj">数据标题： <!></div> <div class="input-more-item svelte-n5iecj">数据描述： <!></div> <div class="input-more-item svelte-n5iecj">占位符： <!></div> <div class="input-more-item svelte-n5iecj"><!></div></div>'), hw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), gw = /* @__PURE__ */ te('<div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div> <div class="input-item svelte-n5iecj"><!></div>', 1);
const vw = {
  hash: "svelte-n5iecj",
  code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function wf(e, t) {
  fe(t, !0), Fe(e, vw);
  const n = v(t, "parameter", 7), r = v(t, "index", 7);
  let o = at(), i = Xn(o), s = /* @__PURE__ */ P(() => ({ ...n(), ...i?.current?.data?.parameters[r()] }));
  const { updateNodeData: a } = gt(), l = (j, A) => {
    a(o, (I) => {
      let H = I.data.parameters;
      return H[r()][j] = A, { parameters: H };
    });
  }, u = (j, A) => {
    const I = A.target.value;
    l(j, I);
  }, d = (j) => {
    const A = j.target.value;
    l("name", A);
  }, p = (j) => {
    const A = j.target.checked;
    l("required", A);
  }, f = (j) => {
    const A = j.value;
    l("formType", A);
  }, h = (j) => {
    const A = j.value;
    l("contentType", A);
  };
  let m;
  const w = () => {
    a(o, (j) => {
      let A = j.data.parameters;
      return A.splice(r(), 1), { parameters: [...A] };
    }), m?.hide();
  };
  var y = {
    get parameter() {
      return n();
    },
    set parameter(j) {
      n(j), g();
    },
    get index() {
      return r();
    },
    set index(j) {
      r(j), g();
    }
  }, b = gw(), x = se(b), $ = B(x);
  ut($, {
    style: "width: 100%;",
    get value() {
      return c(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: d
  }), K(x);
  var C = V(x, 2), S = B(C);
  nf(S, {
    get checked() {
      return c(s).required;
    },
    onchange: p
  }), K(C);
  var N = V(C, 2), M = B(N);
  return jt(
    hr(M, {
      placement: "bottom",
      floating: (j) => {
        var A = pw(), I = B(A), H = V(B(I));
        {
          let R = /* @__PURE__ */ P(() => c(s).contentType ? [c(s).contentType] : []);
          wt(H, {
            get items() {
              return Da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(R);
            },
            onSelect: h
          });
        }
        K(I);
        var k = V(I, 2), T = V(B(k));
        {
          let R = /* @__PURE__ */ P(() => c(s).formType ? [c(s).formType] : []);
          wt(T, {
            get items() {
              return Dy;
            },
            style: "width: 100%",
            defaultValue: ["input"],
            get value() {
              return c(R);
            },
            onSelect: f
          });
        }
        K(k);
        var _ = V(k, 2);
        {
          var E = (R) => {
            var q = fw(), G = V(B(q));
            {
              let ne = /* @__PURE__ */ P(() => c(s).enums?.join(`
`));
              et(G, {
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
            K(q), D(R, q);
          };
          ue(_, (R) => {
            (c(s).formType === "radio" || c(s).formType === "checkbox" || c(s).formType === "select") && R(E);
          });
        }
        var O = V(_, 2), Z = V(B(O));
        et(Z, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            u("formLabel", R);
          },
          get value() {
            return c(s).formLabel;
          }
        }), K(O);
        var Y = V(O, 2), W = V(B(Y));
        et(W, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formDescription", R);
          },
          get value() {
            return c(s).formDescription;
          }
        }), K(Y);
        var L = V(Y, 2), U = V(B(L));
        et(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            u("formPlaceholder", R);
          },
          get value() {
            return c(s).formPlaceholder;
          }
        }), K(L);
        var X = V(L, 2), J = B(X);
        Ve(J, {
          onclick: w,
          children: (R, q) => {
            be();
            var G = Pe("删除");
            D(R, G);
          },
          $$slots: { default: !0 }
        }), K(X), K(A), D(j, A);
      },
      children: (j, A) => {
        Ve(j, {
          class: "input-btn-more",
          children: (I, H) => {
            var k = hw();
            D(I, k);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (j) => m = j,
    () => m
  ), K(N), D(e, b), pe(y);
}
le(wf, { parameter: {}, index: {} }, [], [], !0);
var mw = /* @__PURE__ */ te('<div class="input-header svelte-1yp5n1k">参数名称</div> <div class="input-header svelte-1yp5n1k">必填</div> <div class="input-header svelte-1yp5n1k"></div>', 1), yw = /* @__PURE__ */ te('<div class="none-params svelte-1yp5n1k">无输入参数</div>'), ww = /* @__PURE__ */ te('<div class="input-container svelte-1yp5n1k"><!> <!></div>');
const bw = {
  hash: "svelte-1yp5n1k",
  code: `.input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:#666;}`
};
function bf(e, t) {
  fe(t, !0), Fe(e, bw);
  let n = at(), r = Xn(n), o = /* @__PURE__ */ P(() => [...r?.current?.data?.parameters || []]);
  var i = ww(), s = B(i);
  {
    var a = (u) => {
      var d = mw();
      be(4), D(u, d);
    };
    ue(s, (u) => {
      c(o).length !== 0 && u(a);
    });
  }
  var l = V(s, 2);
  Et(
    l,
    19,
    () => c(o),
    (u) => u.id,
    (u, d, p) => {
      wf(u, {
        get parameter() {
          return c(d);
        },
        get index() {
          return c(p);
        }
      });
    },
    (u) => {
      var d = yw();
      D(u, d);
    }
  ), K(i), D(e, i), pe();
}
le(bf, {}, [], [], !0);
const Mo = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Kn()), Mo(t.children);
}), e), mn = () => {
  const { updateNodeData: e } = gt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Array.isArray(r) ? r.forEach((s) => Mo(s?.children)) : Mo(r?.children);
      function o(s) {
        return {
          name: "",
          dataType: "String",
          refType: "ref",
          ...s,
          id: Kn()
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
var xw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), _w = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ te('<div class="heading svelte-llt1qy"><!> <!></div> <!>', 1);
const $w = {
  hash: "svelte-llt1qy",
  code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function xf(e, t) {
  fe(t, !0), Fe(e, $w);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return nn(e, Qe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = xw();
      D(a, l);
    },
    children: (a, l) => {
      var u = Cw(), d = se(u), p = B(d);
      Ae(p, {
        level: 3,
        children: (m, w) => {
          be();
          var y = Pe("输入参数");
          D(m, y);
        },
        $$slots: { default: !0 }
      });
      var f = V(p, 2);
      Ve(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input", name: "newParam" });
        },
        children: (m, w) => {
          var y = _w();
          D(m, y);
        },
        $$slots: { default: !0 }
      }), K(d);
      var h = V(d, 2);
      bf(h, {}), D(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), pe(s);
}
le(xf, { data: {} }, [], [], !0);
const _f = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), _f(e, r.source, n));
}, Cf = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Cf(r.children, t + "." + r.name, n)
})), ru = (e, t, n) => {
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
          children: Cf(r, e.id, t)
        };
    }
  }
}, $f = (e = !1) => {
  const t = at(), n = Xn(t), r = /* @__PURE__ */ P(vn), o = /* @__PURE__ */ P(() => c(r).nodes), i = /* @__PURE__ */ P(() => c(r).edges), s = /* @__PURE__ */ P(() => c(r).nodeLookup);
  let a = /* @__PURE__ */ P(() => {
    const l = [];
    if (!n.current)
      return [];
    const u = c(s).get(t);
    if (e)
      for (const d of c(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = ru(d, p, u);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      _f(d, t, c(i));
      for (const p of c(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, h = ru(p, f, u);
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
var kw = /* @__PURE__ */ te('<div class="input-more-item svelte-jmeys3">数据内容： <!></div>'), Sw = /* @__PURE__ */ te('<div class="input-more-setting svelte-jmeys3"><div class="input-more-item svelte-jmeys3">数据来源： <!></div> <!> <div class="input-more-item svelte-jmeys3">默认值： <!></div> <div class="input-more-item svelte-jmeys3">参数描述： <!></div> <div class="input-more-item svelte-jmeys3"><!></div></div>'), Ew = /* @__PURE__ */ te('<div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div> <div class="input-item svelte-jmeys3"><!></div>', 1);
const Pw = {
  hash: "svelte-jmeys3",
  code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function kf(e, t) {
  fe(t, !0), Fe(e, Pw), Fn(() => {
    c(u).refType || m({ value: "ref" });
  });
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7), s = v(t, "showContentType", 7, !1);
  let a = at(), l = Xn(a), u = /* @__PURE__ */ P(() => ({
    ...n(),
    ...l?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: d } = gt(), p = (T, _) => {
    d(a, (E) => {
      let O = E.data?.[o()];
      return O[r()] = { ...O[r()], [T]: _ }, { [o()]: O };
    });
  }, f = (T, _) => {
    const E = _.target.value;
    p(T, E);
  }, h = (T) => {
    const _ = T.value;
    p("ref", _);
  }, m = (T) => {
    const _ = T.value;
    p("refType", _);
  }, w = (T) => {
    const _ = T.value;
    p("contentType", _);
  };
  let y;
  const b = () => {
    d(a, (T) => {
      let _ = T.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), y?.hide();
  };
  let x = $f(i());
  var $ = {
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), g();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), g();
    },
    get showContentType() {
      return s();
    },
    set showContentType(T = !1) {
      s(T), g();
    }
  }, C = Ew(), S = se(C), N = B(S);
  {
    let T = /* @__PURE__ */ P(() => c(u).nameDisabled === !0);
    ut(N, {
      style: "width: 100%;",
      get value() {
        return c(u).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(T);
      },
      oninput: (_) => f("name", _)
    });
  }
  K(S);
  var M = V(S, 2), j = B(M);
  {
    var A = (T) => {
      ut(T, {
        get value() {
          return c(u).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => f("value", _)
      });
    }, I = (T) => {
      var _ = Ne(), E = se(_);
      {
        var O = (Z) => {
          {
            let Y = /* @__PURE__ */ P(() => [c(u).ref]);
            wt(Z, {
              get items() {
                return x.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(Y);
              },
              expandAll: !0,
              onSelect: h
            });
          }
        };
        ue(
          E,
          (Z) => {
            c(u).refType !== "input" && Z(O);
          },
          !0
        );
      }
      D(T, _);
    };
    ue(j, (T) => {
      c(u).refType === "fixed" ? T(A) : T(I, !1);
    });
  }
  K(M);
  var H = V(M, 2), k = B(H);
  return jt(
    hr(k, {
      placement: "bottom",
      floating: (T) => {
        var _ = Sw(), E = B(_), O = V(B(E));
        {
          let q = /* @__PURE__ */ P(() => c(u).refType ? [c(u).refType] : []);
          wt(O, {
            get items() {
              return Ty;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return c(q);
            },
            onSelect: m
          });
        }
        K(E);
        var Z = V(E, 2);
        {
          var Y = (q) => {
            var G = kw(), ne = V(B(G));
            {
              let re = /* @__PURE__ */ P(() => c(u).contentType ? [c(u).contentType] : []);
              wt(ne, {
                get items() {
                  return Da;
                },
                style: "width: 100%",
                defaultValue: ["text"],
                get value() {
                  return c(re);
                },
                onSelect: w
              });
            }
            K(G), D(q, G);
          };
          ue(Z, (q) => {
            s() && q(Y);
          });
        }
        var W = V(Z, 2), L = V(B(W));
        et(L, {
          rows: 1,
          style: "width: 100%;",
          onchange: (q) => {
            f("defaultValue", q);
          },
          get value() {
            return c(u).defaultValue;
          },
          placeholder: "请输入参数默认值"
        }), K(W);
        var U = V(W, 2), X = V(B(U));
        et(X, {
          rows: 3,
          style: "width: 100%;",
          onchange: (q) => {
            f("description", q);
          },
          get value() {
            return c(u).description;
          },
          placeholder: "请输入参数描述"
        }), K(U);
        var J = V(U, 2), R = B(J);
        Ve(R, {
          onclick: b,
          children: (q, G) => {
            be();
            var ne = Pe("删除");
            D(q, ne);
          },
          $$slots: { default: !0 }
        }), K(J), K(_), D(T, _);
      },
      children: (T, _) => {
        Jo(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => y = T,
    () => y
  ), K(H), D(e, C), pe($);
}
le(
  kf,
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
var Nw = /* @__PURE__ */ te('<div class="input-header svelte-32f1pk">参数名称</div> <div class="input-header svelte-32f1pk">参数值</div> <div class="input-header svelte-32f1pk"></div>', 1), Ow = /* @__PURE__ */ te('<div class="none-params svelte-32f1pk"> </div>'), Tw = /* @__PURE__ */ te('<div class="input-container svelte-32f1pk"><!> <!></div>');
const Dw = {
  hash: "svelte-32f1pk",
  code: `.input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:#666;}`
};
function Tt(e, t) {
  fe(t, !0), Fe(e, Dw);
  const n = v(t, "noneParameterText", 7, "无输入参数"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7), i = v(t, "showContentType", 7, !1);
  let s = at(), a = Xn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
  var u = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(m = "无输入参数") {
      n(m), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(m = "parameters") {
      r(m), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(m) {
      o(m), g();
    },
    get showContentType() {
      return i();
    },
    set showContentType(m = !1) {
      i(m), g();
    }
  }, d = Tw(), p = B(d);
  {
    var f = (m) => {
      var w = Nw();
      be(4), D(m, w);
    };
    ue(p, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var h = V(p, 2);
  return Et(
    h,
    19,
    () => c(l),
    (m) => m.id,
    (m, w, y) => {
      kf(m, {
        get parameter() {
          return c(w);
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
    (m) => {
      var w = Ow(), y = B(w, !0);
      K(w), Ee(() => Je(y, n())), D(m, w);
    }
  ), K(d), D(e, d), pe(u);
}
le(
  Tt,
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
var Mw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), Lw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Vw = /* @__PURE__ */ te('<div class="heading svelte-1fiuxu3"><!> <!></div> <!>', 1);
const zw = {
  hash: "svelte-1fiuxu3",
  code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function Sf(e, t) {
  fe(t, !0), Fe(e, zw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn();
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return nn(e, Qe(
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
        var l = Mw();
        D(a, l);
      },
      children: (a, l) => {
        var u = Vw(), d = se(u), p = B(d);
        Ae(p, {
          level: 3,
          children: (m, w) => {
            be();
            var y = Pe("输出参数");
            D(m, y);
          },
          $$slots: { default: !0 }
        });
        var f = V(p, 2);
        Ve(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs", { name: "output" });
          },
          children: (m, w) => {
            var y = Lw();
            D(m, y);
          },
          $$slots: { default: !0 }
        }), K(d);
        var h = V(d, 2);
        Tt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          showContentType: !0
        }), D(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(s);
}
le(Sf, { data: {} }, [], [], !0);
const Cs = (e) => JSON.parse(JSON.stringify(e));
var Hw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), Aw = /* @__PURE__ */ te('<div class="input-more-item svelte-hwmib9"><!></div>'), Iw = /* @__PURE__ */ te('<div class="input-more-setting svelte-hwmib9"><div class="input-more-item svelte-hwmib9">默认值： <!></div> <div class="input-more-item svelte-hwmib9">参数描述： <!></div> <!></div>'), Rw = /* @__PURE__ */ te('<div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!> <!></div> <div class="input-item svelte-hwmib9"><!></div>', 1);
const jw = {
  hash: "svelte-hwmib9",
  code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ef(e, t) {
  fe(t, !0), Fe(e, jw);
  const n = v(t, "parameter", 7), r = v(t, "position", 7), o = v(t, "dataKeyName", 7), i = v(t, "placeholder", 7, "请输入参数值");
  let s = at(), a = Xn(s), l = /* @__PURE__ */ P(() => {
    let k = a?.current?.data?.[o()], T;
    if (k && r().length > 0) {
      let _ = k;
      for (let E = 0; E < r().length; E++) {
        const O = r()[E];
        E == r().length - 1 ? T = _[O] : _ = _[O].children;
      }
    }
    return { ...n(), ...T };
  });
  const { updateNodeData: u } = gt(), d = (k, T) => {
    u(s, (_) => {
      const E = _.data?.[o()];
      if (E && r().length > 0) {
        let O = E;
        for (let Z = 0; Z < r().length; Z++) {
          const Y = r()[Z];
          Z == r().length - 1 ? O[Y] = { ...O[Y], [k]: T } : O = O[Y].children;
        }
      }
      return { [o()]: [...Cs(E)] };
    });
  }, p = (k, T) => {
    const _ = T.target.value;
    d(k, _);
  }, f = (k) => {
    const T = k.value;
    d("dataType", T);
  };
  let h;
  const m = () => {
    u(s, (k) => {
      let T = k.data?.[o()];
      if (T && r().length > 0) {
        let _ = T;
        for (let E = 0; E < r().length; E++) {
          const O = r()[E];
          E == r().length - 1 ? _.splice(O, 1) : _ = _[O].children;
        }
      }
      return { [o()]: [...Cs(T)] };
    }), h?.hide();
  }, w = () => {
    u(s, (k) => {
      let T = k.data?.[o()];
      if (T && r().length > 0) {
        let _ = T;
        for (let E = 0; E < r().length; E++) {
          const O = r()[E];
          E == r().length - 1 ? _[O].children ? _[O].children.push({ id: Kn(), name: "newParam", dataType: "String" }) : _[O].children = [{ id: Kn(), name: "newParam", dataType: "String" }] : _ = _[O].children;
        }
      }
      return { [o()]: [...Cs(T)] };
    });
  };
  var y = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), g();
    },
    get position() {
      return r();
    },
    set position(k) {
      r(k), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(k = "请输入参数值") {
      i(k), g();
    }
  }, b = Rw(), x = se(b), $ = B(x);
  {
    var C = (k) => {
      var T = Ne(), _ = se(T);
      Et(_, 17, r, Wr, (E, O) => {
        be();
        var Z = Pe(" ");
        D(E, Z);
      }), D(k, T);
    };
    ue($, (k) => {
      r().length > 1 && k(C);
    });
  }
  var S = V($, 2);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    ut(S, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      get placeholder() {
        return i();
      },
      oninput: (T) => {
        p("name", T);
      },
      get disabled() {
        return c(k);
      }
    });
  }
  K(x);
  var N = V(x, 2), M = B(N);
  {
    let k = /* @__PURE__ */ P(() => c(l).dataTypeItems || Oy), T = /* @__PURE__ */ P(() => c(l).dataType ? [c(l).dataType] : []), _ = /* @__PURE__ */ P(() => c(l).dataTypeDisabled === !0);
    wt(M, {
      get items() {
        return c(k);
      },
      style: "width: 100%",
      defaultValue: ["String"],
      get value() {
        return c(T);
      },
      get disabled() {
        return c(_);
      },
      onSelect: f
    });
  }
  var j = V(M, 2);
  {
    var A = (k) => {
      Ve(k, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: w,
        children: (T, _) => {
          var E = Hw();
          D(T, E);
        },
        $$slots: { default: !0 }
      });
    };
    ue(j, (k) => {
      (c(l).dataType === "Object" || c(l).dataType === "Array") && c(l).addChildDisabled !== !0 && k(A);
    });
  }
  K(N);
  var I = V(N, 2), H = B(I);
  return jt(
    hr(H, {
      placement: "bottom",
      floating: (k) => {
        var T = Iw(), _ = B(T), E = V(B(_));
        {
          let L = /* @__PURE__ */ P(() => c(l).defaultValue || "");
          et(E, {
            rows: 1,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (U) => {
              p("defaultValue", U);
            }
          });
        }
        K(_);
        var O = V(_, 2), Z = V(B(O));
        {
          let L = /* @__PURE__ */ P(() => c(l).description || "");
          et(Z, {
            rows: 3,
            style: "width: 100%;",
            get value() {
              return c(L);
            },
            onchange: (U) => {
              p("description", U);
            }
          });
        }
        K(O);
        var Y = V(O, 2);
        {
          var W = (L) => {
            var U = Aw(), X = B(U);
            Ve(X, {
              onclick: m,
              children: (J, R) => {
                be();
                var q = Pe("删除");
                D(J, q);
              },
              $$slots: { default: !0 }
            }), K(U), D(L, U);
          };
          ue(Y, (L) => {
            c(l).deleteDisabled !== !0 && L(W);
          });
        }
        K(T), D(k, T);
      },
      children: (k, T) => {
        Jo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => h = k,
    () => h
  ), K(I), D(e, b), pe(y);
}
le(
  Ef,
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
var Zw = /* @__PURE__ */ te("<!> <!>", 1), Kw = /* @__PURE__ */ te('<div class="none-params svelte-1oz5kx0"> </div>'), Bw = /* @__PURE__ */ te('<div class="input-header svelte-1oz5kx0">参数名称</div> <div class="input-header svelte-1oz5kx0">参数类型</div> <div class="input-header svelte-1oz5kx0"></div>', 1), Yw = /* @__PURE__ */ te('<div class="input-container svelte-1oz5kx0"><!> <!></div>');
const Ww = {
  hash: "svelte-1oz5kx0",
  code: `.input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:#666;}`
};
function Gn(e, t) {
  fe(t, !0), Fe(e, Ww);
  const n = (m, w = St, y = St) => {
    var b = Ne(), x = se(b);
    Et(
      x,
      19,
      w,
      ($) => `${$.id}_${$.children ? $.children.length : 0}`,
      ($, C, S) => {
        var N = Zw(), M = se(N);
        {
          let I = /* @__PURE__ */ P(() => [...y(), c(S)]);
          Ef(M, {
            get parameter() {
              return c(C);
            },
            get position() {
              return c(I);
            },
            get dataKeyName() {
              return o();
            },
            get placeholder() {
              return i();
            }
          });
        }
        var j = V(M, 2);
        {
          var A = (I) => {
            {
              let H = /* @__PURE__ */ P(() => [...y(), c(S)]);
              n(I, () => c(C).children, () => c(H));
            }
          };
          ue(j, (I) => {
            c(C).children && I(A);
          });
        }
        D($, N);
      },
      ($) => {
        var C = Ne(), S = se(C);
        {
          var N = (M) => {
            var j = Kw(), A = B(j, !0);
            K(j), Ee(() => Je(A, r())), D(M, j);
          };
          ue(S, (M) => {
            y().length === 0 && M(N);
          });
        }
        D($, C);
      }
    ), D(m, b);
  }, r = v(t, "noneParameterText", 7, "无输出参数"), o = v(t, "dataKeyName", 7, "outputDefs"), i = v(t, "placeholder", 7, "请输入参数名称");
  let s = at(), a = Xn(s), l = /* @__PURE__ */ P(() => [...a?.current?.data?.[o()] || []]);
  var u = {
    get noneParameterText() {
      return r();
    },
    set noneParameterText(m = "无输出参数") {
      r(m), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(m = "outputDefs") {
      o(m), g();
    },
    get placeholder() {
      return i();
    },
    set placeholder(m = "请输入参数名称") {
      i(m), g();
    }
  }, d = Yw(), p = B(d);
  {
    var f = (m) => {
      var w = Bw();
      be(4), D(m, w);
    };
    ue(p, (m) => {
      c(l).length !== 0 && m(f);
    });
  }
  var h = V(p, 2);
  return n(h, () => c(l) || [], () => []), K(d), D(e, d), pe(u);
}
le(Gn, { noneParameterText: {}, dataKeyName: {}, placeholder: {} }, [], [], !0);
var Fw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Uw = /* @__PURE__ */ te('<div class="llm-setting svelte-j81vcl"><div class="setting-title svelte-j81vcl">采样参数</div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-j81vcl"><div class="slider-container svelte-j81vcl"><span class="svelte-j81vcl"> </span> <input class="nodrag svelte-j81vcl" type="range" min="0" max="100" step="1"/></div></div></div>'), Gw = /* @__PURE__ */ te('<div class="heading svelte-j81vcl"><!> <!></div> <!> <div class="heading svelte-j81vcl" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="setting-title svelte-j81vcl">模型</div> <div class="setting-item svelte-j81vcl"><!> <!></div> <div class="setting-title svelte-j81vcl">系统提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="setting-title svelte-j81vcl">用户提示词</div> <div class="setting-item svelte-j81vcl"><!></div> <div class="heading svelte-j81vcl"><!> <!></div> <!>', 1);
const Jw = {
  hash: "svelte-j81vcl",
  code: `.heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:#fff;padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid #ddd;}input[type="range"].svelte-j81vcl {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Pf(e, t) {
  fe(t, !0), Fe(e, Jw);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn(), s = ur();
  let a = /* @__PURE__ */ Oe(Qt([]));
  Fn(async () => {
    const p = await s.provider?.llm?.();
    c(a).push(...p || []);
  });
  const { updateNodeData: l } = gt(), u = (p) => {
    l(o, () => ({ outType: p })), p === "text" ? l(o, {
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
  rt(() => {
    n().outType || u("text");
  });
  var d = {
    get data() {
      return n();
    },
    set data(p) {
      n(p), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (p) => {
        var f = Fw();
        D(p, f);
      },
      children: (p, f) => {
        var h = Gw(), m = se(h), w = B(m);
        Ae(w, {
          level: 3,
          children: (Y, W) => {
            be();
            var L = Pe("输入参数");
            D(Y, L);
          },
          $$slots: { default: !0 }
        });
        var y = V(w, 2);
        Ve(y, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (Y, W) => {
            var L = qw();
            D(Y, L);
          },
          $$slots: { default: !0 }
        }), K(m);
        var b = V(m, 2);
        Tt(b, {});
        var x = V(b, 2), $ = B(x);
        Ae($, {
          level: 3,
          children: (Y, W) => {
            be();
            var L = Pe("图片识别");
            D(Y, L);
          },
          $$slots: { default: !0 }
        });
        var C = V($, 2);
        Ve(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "images");
          },
          children: (Y, W) => {
            var L = Xw();
            D(Y, L);
          },
          $$slots: { default: !0 }
        }), K(x);
        var S = V(x, 2);
        Tt(S, { dataKeyName: "images", noneParameterText: "无图片参数" });
        var N = V(S, 2);
        Ae(N, {
          level: 3,
          mt: "10px",
          children: (Y, W) => {
            be();
            var L = Pe("模型设置");
            D(Y, L);
          },
          $$slots: { default: !0 }
        });
        var M = V(N, 4), j = B(M);
        {
          let Y = /* @__PURE__ */ P(() => n().llmId ? [n().llmId] : []);
          wt(j, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择模型",
            onSelect: (W) => {
              const L = W.value;
              l(o, () => ({ llmId: L }));
            },
            get value() {
              return c(Y);
            }
          });
        }
        var A = V(j, 2);
        hr(A, {
          placement: "bottom",
          floating: (Y) => {
            var W = Uw(), L = V(B(W), 2), U = B(L), X = B(U), J = B(X);
            K(X);
            var R = V(X, 2);
            xr(R), R.__input = (ge) => l(o, { temperature: parseFloat(ge.target.value) }), K(U), K(L);
            var q = V(L, 2), G = B(q), ne = B(G), re = B(ne);
            K(ne);
            var ee = V(ne, 2);
            xr(ee), ee.__input = (ge) => l(o, { topP: parseFloat(ge.target.value) }), K(G), K(q);
            var ve = V(q, 2), ce = B(ve), ie = B(ce), ae = B(ie);
            K(ie);
            var me = V(ie, 2);
            xr(me), me.__input = (ge) => l(o, { topK: parseInt(ge.target.value) }), K(ce), K(ve), K(W), Ee(() => {
              Je(J, `Temperature: ${n().temperature ?? 0.7 ?? ""}`), ui(R, n().temperature ?? 0.7), Je(re, `Top P: ${n().topP ?? 0.9 ?? ""}`), ui(ee, n().topP ?? 0.9), Je(ae, `Top K: ${n().topK ?? 50 ?? ""}`), ui(me, n().topK ?? 50);
            }), D(Y, W);
          },
          children: (Y, W) => {
            Jo(Y, {});
          },
          $$slots: { floating: !0, default: !0 }
        }), K(M);
        var I = V(M, 4), H = B(I);
        {
          let Y = /* @__PURE__ */ P(() => n().systemPrompt || "");
          et(H, {
            rows: 5,
            placeholder: "请输入系统提示词",
            style: "width: 100%",
            get value() {
              return c(Y);
            },
            oninput: (W) => {
              l(o, { systemPrompt: W.target.value });
            }
          });
        }
        K(I);
        var k = V(I, 4), T = B(k);
        {
          let Y = /* @__PURE__ */ P(() => n().userPrompt || "");
          et(T, {
            rows: 5,
            placeholder: "请输入用户提示词",
            style: "width: 100%",
            get value() {
              return c(Y);
            },
            oninput: (W) => {
              l(o, { userPrompt: W.target.value });
            }
          });
        }
        K(k);
        var _ = V(k, 2), E = B(_);
        Ae(E, {
          level: 3,
          children: (Y, W) => {
            be();
            var L = Pe("输出参数");
            D(Y, L);
          },
          $$slots: { default: !0 }
        });
        var O = V(E, 2);
        {
          let Y = /* @__PURE__ */ P(() => n().outType ? [n().outType] : []);
          wt(O, {
            items: [
              { label: "文本", value: "text" },
              { label: "JSON", value: "json" }
            ],
            style: "width: 100px;margin-left: auto",
            onSelect: (W) => {
              u(W.value);
            },
            get value() {
              return c(Y);
            }
          });
        }
        K(_);
        var Z = V(_, 2);
        Gn(Z, {}), D(p, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(d);
}
fr(["input"]);
le(Pf, { data: {} }, [], [], !0);
var Qw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), eb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), tb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), nb = /* @__PURE__ */ te('<div class="heading svelte-1wcsayx"><!> <!></div> <!> <!> <div class="setting-title svelte-1wcsayx">执行引擎</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="setting-title svelte-1wcsayx">执行代码</div> <div class="setting-item svelte-1wcsayx"><!></div> <div class="heading svelte-1wcsayx"><!> <!></div> <!>', 1);
const rb = {
  hash: "svelte-1wcsayx",
  code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Nf(e, t) {
  fe(t, !0), Fe(e, rb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Fn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = at(), { addParameter: i } = mn(), { updateNodeData: s } = gt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return nn(e, Qe(
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
        var p = nb(), f = se(p), h = B(f);
        Ae(h, {
          level: 3,
          children: (A, I) => {
            be();
            var H = Pe("输入参数");
            D(A, H);
          },
          $$slots: { default: !0 }
        });
        var m = V(h, 2);
        Ve(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (A, I) => {
            var H = eb();
            D(A, H);
          },
          $$slots: { default: !0 }
        }), K(f);
        var w = V(f, 2);
        Tt(w, {});
        var y = V(w, 2);
        Ae(y, {
          level: 3,
          mt: "10px",
          children: (A, I) => {
            be();
            var H = Pe("代码");
            D(A, H);
          },
          $$slots: { default: !0 }
        });
        var b = V(y, 4), x = B(b);
        {
          let A = /* @__PURE__ */ P(() => n().engine ? [n().engine] : ["qlexpress"]);
          wt(x, {
            get items() {
              return a;
            },
            style: "width: 100%",
            placeholder: "请选择执行引擎",
            onSelect: (I) => {
              const H = I.value;
              s(o, () => ({ engine: H }));
            },
            get value() {
              return c(A);
            }
          });
        }
        K(b);
        var $ = V(b, 4), C = B($);
        {
          let A = /* @__PURE__ */ P(() => n().code || "");
          et(C, {
            rows: 10,
            placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
            style: "width: 100%",
            onchange: (I) => {
              s(o, () => ({ code: I.target.value }));
            },
            get value() {
              return c(A);
            }
          });
        }
        K($);
        var S = V($, 2), N = B(S);
        Ae(N, {
          level: 3,
          mt: "10px",
          children: (A, I) => {
            be();
            var H = Pe("输出参数");
            D(A, H);
          },
          $$slots: { default: !0 }
        });
        var M = V(N, 2);
        Ve(M, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (A, I) => {
            var H = tb();
            D(A, H);
          },
          $$slots: { default: !0 }
        }), K(S);
        var j = V(S, 2);
        Gn(j, {}), D(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(Nf, { data: {} }, [], [], !0);
var ob = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), ib = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sb = /* @__PURE__ */ te('<div class="heading svelte-1lcrzpc"><!> <!></div> <!> <!> <div class="setting-item svelte-1lcrzpc"><!></div> <div class="heading svelte-1lcrzpc"><!></div> <!>', 1);
const ab = {
  hash: "svelte-1lcrzpc",
  code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Of(e, t) {
  fe(t, !0), Fe(e, ab);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn(), { updateNodeData: s } = gt();
  rt(() => {
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
      n(l), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = ob();
        D(l, u);
      },
      children: (l, u) => {
        var d = sb(), p = se(d), f = B(p);
        Ae(f, {
          level: 3,
          children: (S, N) => {
            be();
            var M = Pe("输入参数");
            D(S, M);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Ve(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (S, N) => {
            var M = ib();
            D(S, M);
          },
          $$slots: { default: !0 }
        }), K(p);
        var m = V(p, 2);
        Tt(m, {});
        var w = V(m, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (S, N) => {
            be();
            var M = Pe("模板内容");
            D(S, M);
          },
          $$slots: { default: !0 }
        });
        var y = V(w, 2), b = B(y);
        {
          let S = /* @__PURE__ */ P(() => n().template || "");
          et(b, {
            rows: 10,
            placeholder: "请输入模板内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ template: N.target.value }));
            },
            get value() {
              return c(S);
            }
          });
        }
        K(y);
        var x = V(y, 2), $ = B(x);
        Ae($, {
          level: 3,
          mt: "10px",
          children: (S, N) => {
            be();
            var M = Pe("输出参数");
            D(S, M);
          },
          $$slots: { default: !0 }
        }), K(x);
        var C = V(x, 2);
        Gn(C, {}), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Of, { data: {} }, [], [], !0);
var lb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), ub = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), cb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), db = /* @__PURE__ */ te('<!> <div class="radio-group svelte-19uflw6"><label class="svelte-19uflw6"><!>none</label> <label class="svelte-19uflw6"><!>form-data</label> <label class="svelte-19uflw6"><!>x-www-form-urlencoded</label> <label class="svelte-19uflw6"><!>json</label> <label class="svelte-19uflw6"><!>raw</label></div>', 1), fb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), pb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), hb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), gb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6" style="padding-top: 10px"><!> <!></div> <!>', 1), vb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), mb = /* @__PURE__ */ te('<div style="width: 100%"><!></div>'), yb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), wb = /* @__PURE__ */ te('<div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-19uflw6"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class="heading svelte-19uflw6"><!> <!></div> <!>', 1);
const bb = {
  hash: "svelte-19uflw6",
  code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;}"
};
function Tf(e, t) {
  fe(t, !0), Fe(e, bb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Fn(() => {
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
  ], i = at(), { addParameter: s } = mn(), { updateNodeData: a } = gt();
  var l = {
    get data() {
      return n();
    },
    set data(u) {
      n(u), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var d = lb();
        D(u, d);
      },
      children: (u, d) => {
        var p = wb(), f = se(p), h = B(f);
        Ae(h, {
          level: 3,
          children: (R, q) => {
            be();
            var G = Pe("输入参数");
            D(R, G);
          },
          $$slots: { default: !0 }
        });
        var m = V(h, 2);
        Ve(m, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (R, q) => {
            var G = ub();
            D(R, G);
          },
          $$slots: { default: !0 }
        }), K(f);
        var w = V(f, 2);
        Tt(w, {});
        var y = V(w, 2);
        Ae(y, {
          level: 3,
          mt: "10px",
          children: (R, q) => {
            be();
            var G = Pe("URL 地址");
            D(R, G);
          },
          $$slots: { default: !0 }
        });
        var b = V(y, 2), x = B(b), $ = B(x);
        {
          let R = /* @__PURE__ */ P(() => n().method ? [n().method] : ["get"]);
          wt($, {
            get items() {
              return o;
            },
            style: "width: 100%",
            placeholder: "请选择请求方式",
            onSelect: (q) => {
              const G = q.value;
              a(i, () => ({ method: G }));
            },
            get value() {
              return c(R);
            }
          });
        }
        K(x);
        var C = V(x, 2), S = B(C);
        {
          let R = /* @__PURE__ */ P(() => n().url || "");
          ut(S, {
            placeholder: "请输入url",
            style: "width: 100%",
            onchange: (q) => {
              a(i, () => ({ url: q.target.value }));
            },
            get value() {
              return c(R);
            }
          });
        }
        K(C), K(b);
        var N = V(b, 2), M = B(N);
        Ae(M, {
          level: 3,
          children: (R, q) => {
            be();
            var G = Pe("Http 头信息");
            D(R, G);
          },
          $$slots: { default: !0 }
        });
        var j = V(M, 2);
        Ve(j, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (R, q) => {
            var G = cb();
            D(R, G);
          },
          $$slots: { default: !0 }
        }), K(N);
        var A = V(N, 2);
        Tt(A, { dataKeyName: "headers" });
        var I = V(A, 2);
        {
          var H = (R) => {
            var q = db(), G = se(q);
            Ae(G, {
              level: 3,
              mt: "10px",
              children: (_e, Le) => {
                be();
                var F = Pe("Body");
                D(_e, F);
              },
              $$slots: { default: !0 }
            });
            var ne = V(G, 2), re = B(ne), ee = B(re);
            {
              let _e = /* @__PURE__ */ P(() => !n().bodyType || n().bodyType === "");
              ut(ee, {
                type: "radio",
                value: "",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "" });
                }
              });
            }
            be(), K(re);
            var ve = V(re, 2), ce = B(ve);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "form-data");
              ut(ce, {
                type: "radio",
                value: "form-data",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "form-data" });
                }
              });
            }
            be(), K(ve);
            var ie = V(ve, 2), ae = B(ie);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "x-www-form-urlencoded");
              ut(ae, {
                type: "radio",
                value: "x-www-form-urlencoded",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
                }
              });
            }
            be(), K(ie);
            var me = V(ie, 2), ge = B(me);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "json");
              ut(ge, {
                type: "radio",
                value: "json",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "json" });
                }
              });
            }
            be(), K(me);
            var xe = V(me, 2), de = B(xe);
            {
              let _e = /* @__PURE__ */ P(() => n().bodyType === "raw");
              ut(de, {
                type: "radio",
                value: "raw",
                get checked() {
                  return c(_e);
                },
                onchange: (Le) => {
                  Le.target?.checked && a(i, { bodyType: "raw" });
                }
              });
            }
            be(), K(xe), K(ne), D(R, q);
          };
          ue(I, (R) => {
            (n().method === "post" || n().method === "put" || n().method === "delete" || n().method === "patch") && R(H);
          });
        }
        var k = V(I, 2);
        {
          var T = (R) => {
            var q = pb(), G = se(q), ne = B(G);
            Ae(ne, {
              level: 3,
              children: (ve, ce) => {
                be();
                var ie = Pe("参数");
                D(ve, ie);
              },
              $$slots: { default: !0 }
            });
            var re = V(ne, 2);
            Ve(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (ve, ce) => {
                var ie = fb();
                D(ve, ie);
              },
              $$slots: { default: !0 }
            }), K(G);
            var ee = V(G, 2);
            Tt(ee, { dataKeyName: "formData" }), D(R, q);
          };
          ue(k, (R) => {
            n().bodyType === "form-data" && R(T);
          });
        }
        var _ = V(k, 2);
        {
          var E = (R) => {
            var q = gb(), G = se(q), ne = B(G);
            Ae(ne, {
              level: 3,
              children: (ve, ce) => {
                be();
                var ie = Pe("Body 参数");
                D(ve, ie);
              },
              $$slots: { default: !0 }
            });
            var re = V(ne, 2);
            Ve(re, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (ve, ce) => {
                var ie = hb();
                D(ve, ie);
              },
              $$slots: { default: !0 }
            }), K(G);
            var ee = V(G, 2);
            Tt(ee, { dataKeyName: "formUrlencoded" }), D(R, q);
          };
          ue(_, (R) => {
            n().bodyType === "x-www-form-urlencoded" && R(E);
          });
        }
        var O = V(_, 2);
        {
          var Z = (R) => {
            var q = vb(), G = B(q);
            et(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (ne) => {
                a(i, { bodyJson: ne.target.value });
              }
            }), K(q), D(R, q);
          };
          ue(O, (R) => {
            n().bodyType === "json" && R(Z);
          });
        }
        var Y = V(O, 2);
        {
          var W = (R) => {
            var q = mb(), G = B(q);
            et(G, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (ne) => {
                a(i, { bodyRaw: ne.target.value });
              }
            }), K(q), D(R, q);
          };
          ue(Y, (R) => {
            n().bodyType === "raw" && R(W);
          });
        }
        var L = V(Y, 2), U = B(L);
        Ae(U, {
          level: 3,
          mt: "10px",
          children: (R, q) => {
            be();
            var G = Pe("输出参数");
            D(R, G);
          },
          $$slots: { default: !0 }
        });
        var X = V(U, 2);
        Ve(X, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (R, q) => {
            var G = yb();
            D(R, G);
          },
          $$slots: { default: !0 }
        }), K(L);
        var J = V(L, 2);
        Gn(J, {}), D(u, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(l);
}
le(Tf, { data: {} }, [], [], !0);
var xb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), _b = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cb = /* @__PURE__ */ te('<div class="heading svelte-ddi5i"><!> <!></div> <!> <!> <div class="setting-title svelte-ddi5i">知识库</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">关键字</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="setting-title svelte-ddi5i">获取数据量</div> <div class="setting-item svelte-ddi5i"><!></div> <div class="heading svelte-ddi5i"><!></div> <!>', 1);
const $b = {
  hash: "svelte-ddi5i",
  code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Df(e, t) {
  fe(t, !0), Fe(e, $b);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn(), s = ur();
  let a = /* @__PURE__ */ Oe(Qt([]));
  Fn(async () => {
    const d = await s.provider?.knowledge?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = gt();
  rt(() => {
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
      n(d), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = xb();
        D(d, p);
      },
      children: (d, p) => {
        var f = Cb(), h = se(f), m = B(h);
        Ae(m, {
          level: 3,
          children: (H, k) => {
            be();
            var T = Pe("输入参数");
            D(H, T);
          },
          $$slots: { default: !0 }
        });
        var w = V(m, 2);
        Ve(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, k) => {
            var T = _b();
            D(H, T);
          },
          $$slots: { default: !0 }
        }), K(h);
        var y = V(h, 2);
        Tt(y, {});
        var b = V(y, 2);
        Ae(b, {
          level: 3,
          mt: "10px",
          children: (H, k) => {
            be();
            var T = Pe("知识库设置");
            D(H, T);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), $ = B(x);
        {
          let H = /* @__PURE__ */ P(() => n().knowledgeId ? [n().knowledgeId] : []);
          wt($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择知识库",
            onSelect: (k) => {
              const T = k.value;
              l(o, () => ({ knowledgeId: T }));
            },
            get value() {
              return c(H);
            }
          });
        }
        K(x);
        var C = V(x, 4), S = B(C);
        ut(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (H) => {
            const k = H.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), K(C);
        var N = V(C, 4), M = B(N);
        {
          let H = /* @__PURE__ */ P(() => n().limit || "");
          ut(M, {
            placeholder: "搜索的数据条数",
            style: "width: 100%",
            onchange: (k) => {
              const T = k.target.value;
              l(o, () => ({ limit: T }));
            },
            get value() {
              return c(H);
            }
          });
        }
        K(N);
        var j = V(N, 2), A = B(j);
        Ae(A, {
          level: 3,
          mt: "10px",
          children: (H, k) => {
            be();
            var T = Pe("输出参数");
            D(H, T);
          },
          $$slots: { default: !0 }
        }), K(j);
        var I = V(j, 2);
        Gn(I, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(Df, { data: {} }, [], [], !0);
var kb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Sb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Eb = /* @__PURE__ */ te('<div class="heading svelte-1qblm04"><!> <!></div> <!> <!> <div class="setting-title svelte-1qblm04">搜索引擎</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">关键字</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="setting-title svelte-1qblm04">搜索数据量</div> <div class="setting-item svelte-1qblm04"><!></div> <div class="heading svelte-1qblm04"><!></div> <!>', 1);
const Pb = {
  hash: "svelte-1qblm04",
  code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Mf(e, t) {
  fe(t, !0), Fe(e, Pb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn(), s = ur();
  let a = /* @__PURE__ */ Oe(Qt([]));
  Fn(async () => {
    const d = await s.provider?.searchEngine?.();
    c(a).push(...d || []);
  });
  const { updateNodeData: l } = gt();
  rt(() => {
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
      n(d), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = kb();
        D(d, p);
      },
      children: (d, p) => {
        var f = Eb(), h = se(f), m = B(h);
        Ae(m, {
          level: 3,
          children: (H, k) => {
            be();
            var T = Pe("输入参数");
            D(H, T);
          },
          $$slots: { default: !0 }
        });
        var w = V(m, 2);
        Ve(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, k) => {
            var T = Sb();
            D(H, T);
          },
          $$slots: { default: !0 }
        }), K(h);
        var y = V(h, 2);
        Tt(y, {});
        var b = V(y, 2);
        Ae(b, {
          level: 3,
          mt: "10px",
          children: (H, k) => {
            be();
            var T = Pe("搜索引擎设置");
            D(H, T);
          },
          $$slots: { default: !0 }
        });
        var x = V(b, 4), $ = B(x);
        {
          let H = /* @__PURE__ */ P(() => n().engine ? [n().engine] : []);
          wt($, {
            get items() {
              return c(a);
            },
            style: "width: 100%",
            placeholder: "请选择搜索引擎",
            onSelect: (k) => {
              const T = k.value;
              l(o, () => ({ engine: T }));
            },
            get value() {
              return c(H);
            }
          });
        }
        K(x);
        var C = V(x, 4), S = B(C);
        ut(S, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (H) => {
            const k = H.target.value;
            l(o, () => ({ keyword: k }));
          }
        }), K(C);
        var N = V(C, 4), M = B(N);
        ut(M, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (H) => {
            const k = H.target.value;
            l(o, () => ({ limit: k }));
          }
        }), K(N);
        var j = V(N, 2), A = B(j);
        Ae(A, {
          level: 3,
          mt: "10px",
          children: (H, k) => {
            be();
            var T = Pe("输出参数");
            D(H, T);
          },
          $$slots: { default: !0 }
        }), K(j);
        var I = V(j, 2);
        Gn(I, {}), D(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(u);
}
le(Mf, { data: {} }, [], [], !0);
var Nb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), Ob = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Tb = /* @__PURE__ */ te('<div class="heading svelte-1o34e8c"><!></div> <!> <div class="heading svelte-1o34e8c"><!> <!></div> <!>', 1);
const Db = {
  hash: "svelte-1o34e8c",
  code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Lf(e, t) {
  fe(t, !0), Fe(e, Db);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn();
  rt(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  });
  var s = {
    get data() {
      return n();
    },
    set data(a) {
      n(a), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Nb();
        D(a, l);
      },
      handle: (a) => {
        ar(a, {
          type: "source",
          get position() {
            return Ce.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (a, l) => {
        var u = Tb(), d = se(u), p = B(d);
        Ae(p, {
          level: 3,
          children: (b, x) => {
            be();
            var $ = Pe("循环变量");
            D(b, $);
          },
          $$slots: { default: !0 }
        }), K(d);
        var f = V(d, 2);
        Tt(f, { dataKeyName: "loopVars" });
        var h = V(f, 2), m = B(h);
        Ae(m, {
          level: 3,
          children: (b, x) => {
            be();
            var $ = Pe("输出参数");
            D(b, $);
          },
          $$slots: { default: !0 }
        });
        var w = V(m, 2);
        Ve(w, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (b, x) => {
            var $ = Ob();
            D(b, $);
          },
          $$slots: { default: !0 }
        }), K(h);
        var y = V(h, 2);
        Tt(y, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), D(a, u);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), pe(s);
}
le(Lf, { data: {} }, [], [], !0);
var Mb = /* @__PURE__ */ te('<div class="input-more-setting svelte-5x0hls"><div class="input-more-item svelte-5x0hls">数据内容： <!></div> <div class="input-more-item svelte-5x0hls">确认方式： <!></div> <div class="input-more-item svelte-5x0hls">数据标题： <!></div> <div class="input-more-item svelte-5x0hls">数据描述： <!></div>   <div class="input-more-item svelte-5x0hls"><!></div></div>'), Lb = /* @__PURE__ */ te('<div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div> <div class="input-item svelte-5x0hls"><!></div>', 1);
const Vb = {
  hash: "svelte-5x0hls",
  code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vf(e, t) {
  fe(t, !0), Fe(e, Vb);
  const n = v(t, "parameter", 7), r = v(t, "index", 7), o = v(t, "dataKeyName", 7), i = v(t, "useChildrenOnly", 7);
  let s = at(), a = Xn(s), l = /* @__PURE__ */ P(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: u } = gt(), d = (k, T) => {
    u(s, (_) => {
      let E = _.data?.[o()];
      return E[r()] = { ...E[r()], [k]: T }, { [o()]: E };
    });
  }, p = (k, T) => {
    const _ = T.target.value;
    d(k, _);
  }, f = (k) => {
    const T = k.value;
    d("ref", T);
  }, h = (k) => {
    const T = k.value;
    d("formType", T);
  }, m = (k) => {
    const T = k.value;
    d("contentType", T);
  };
  let w;
  const y = () => {
    u(s, (k) => {
      let T = k.data?.[o()];
      return T.splice(r(), 1), { [o()]: [...T] };
    }), w?.hide();
  };
  let b = $f(i());
  var x = {
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), g();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), g();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(k) {
      o(k), g();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(k) {
      i(k), g();
    }
  }, $ = Lb(), C = se($), S = B(C);
  {
    let k = /* @__PURE__ */ P(() => c(l).nameDisabled === !0);
    ut(S, {
      style: "width: 100%;",
      get value() {
        return c(l).name;
      },
      placeholder: "请输入参数名称",
      get disabled() {
        return c(k);
      },
      oninput: (T) => p("name", T)
    });
  }
  K(C);
  var N = V(C, 2), M = B(N);
  {
    var j = (k) => {
      ut(k, {
        get value() {
          return c(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (T) => p("value", T)
      });
    }, A = (k) => {
      var T = Ne(), _ = se(T);
      {
        var E = (O) => {
          {
            let Z = /* @__PURE__ */ P(() => [c(l).ref]);
            wt(O, {
              get items() {
                return b.current;
              },
              style: "width: 100%",
              defaultValue: ["ref"],
              get value() {
                return c(Z);
              },
              expandAll: !0,
              onSelect: f
            });
          }
        };
        ue(
          _,
          (O) => {
            c(l).refType !== "input" && O(E);
          },
          !0
        );
      }
      D(k, T);
    };
    ue(M, (k) => {
      c(l).refType === "fixed" ? k(j) : k(A, !1);
    });
  }
  K(N);
  var I = V(N, 2), H = B(I);
  return jt(
    hr(H, {
      placement: "bottom",
      floating: (k) => {
        var T = Mb(), _ = B(T), E = V(B(_));
        {
          let R = /* @__PURE__ */ P(() => c(l).contentType ? [c(l).contentType] : []);
          wt(E, {
            get items() {
              return Da;
            },
            style: "width: 100%",
            defaultValue: ["text"],
            get value() {
              return c(R);
            },
            onSelect: m
          });
        }
        K(_);
        var O = V(_, 2), Z = V(B(O));
        {
          let R = /* @__PURE__ */ P(() => c(l).formType ? [c(l).formType] : []);
          wt(Z, {
            get items() {
              return My;
            },
            style: "width: 100%",
            defaultValue: ["single"],
            get value() {
              return c(R);
            },
            onSelect: h
          });
        }
        K(O);
        var Y = V(O, 2), W = V(B(Y));
        et(W, {
          rows: 1,
          style: "width: 100%;",
          onchange: (R) => {
            p("formLabel", R);
          },
          get value() {
            return c(l).formLabel;
          }
        }), K(Y);
        var L = V(Y, 2), U = V(B(L));
        et(U, {
          rows: 2,
          style: "width: 100%;",
          onchange: (R) => {
            p("formDescription", R);
          },
          get value() {
            return c(l).formDescription;
          }
        }), K(L);
        var X = V(L, 2), J = B(X);
        Ve(J, {
          onclick: y,
          children: (R, q) => {
            be();
            var G = Pe("删除");
            D(R, G);
          },
          $$slots: { default: !0 }
        }), K(X), K(T), D(k, T);
      },
      children: (k, T) => {
        Jo(k, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => w = k,
    () => w
  ), K(I), D(e, $), pe(x);
}
le(
  Vf,
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
var zb = /* @__PURE__ */ te('<div class="input-header svelte-1fllp9b">参数名称</div> <div class="input-header svelte-1fllp9b">参数值</div> <div class="input-header svelte-1fllp9b"></div>', 1), Hb = /* @__PURE__ */ te('<div class="none-params svelte-1fllp9b"> </div>'), Ab = /* @__PURE__ */ te('<div class="input-container svelte-1fllp9b"><!> <!></div>');
const Ib = {
  hash: "svelte-1fllp9b",
  code: `.input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:#666;}`
};
function zf(e, t) {
  fe(t, !0), Fe(e, Ib);
  const n = v(t, "noneParameterText", 7, "无确认数据"), r = v(t, "dataKeyName", 7, "parameters"), o = v(t, "useChildrenOnly", 7);
  let i = at(), s = Xn(i), a = /* @__PURE__ */ P(() => [...s?.current?.data?.[r()] || []]);
  var l = {
    get noneParameterText() {
      return n();
    },
    set noneParameterText(h = "无确认数据") {
      n(h), g();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(h = "parameters") {
      r(h), g();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(h) {
      o(h), g();
    }
  }, u = Ab(), d = B(u);
  {
    var p = (h) => {
      var m = zb();
      be(4), D(h, m);
    };
    ue(d, (h) => {
      c(a).length !== 0 && h(p);
    });
  }
  var f = V(d, 2);
  return Et(
    f,
    19,
    () => c(a),
    (h) => h.id,
    (h, m, w) => {
      Vf(h, {
        get parameter() {
          return c(m);
        },
        get index() {
          return c(w);
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
      var m = Hb(), w = B(m, !0);
      K(m), Ee(() => Je(w, n())), D(h, m);
    }
  ), K(u), D(e, u), pe(l);
}
le(zf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const qs = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!qs(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !qs(e[s], t[s])) return !1;
    return !0;
  }
};
var Rb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), jb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Zb = /* @__PURE__ */ te('<div class="heading svelte-8iukvu"><!> <!></div> <!> <!> <div class="setting-title svelte-8iukvu">消息内容</div> <div class="setting-item svelte-8iukvu"><!></div> <div class="heading svelte-8iukvu"><!></div> <!>', 1);
const Kb = {
  hash: "svelte-8iukvu",
  code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Hf(e, t) {
  fe(t, !0), Fe(e, Kb);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn(), { updateNodeData: s } = gt();
  rt(() => {
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
      qs(l, n().outputDefs) || s(o, () => ({ outputDefs: l }));
    }
  });
  var a = {
    get data() {
      return n();
    },
    set data(l) {
      n(l), g();
    }
  };
  return nn(e, Qe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Rb();
        D(l, u);
      },
      children: (l, u) => {
        var d = Zb(), p = se(d), f = B(p);
        Ae(f, {
          level: 3,
          children: (S, N) => {
            be();
            var M = Pe("确认数据");
            D(S, M);
          },
          $$slots: { default: !0 }
        });
        var h = V(f, 2);
        Ve(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (S, N) => {
            var M = jb();
            D(S, M);
          },
          $$slots: { default: !0 }
        }), K(p);
        var m = V(p, 2);
        zf(m, { dataKeyName: "confirms", noneParameterText: "无确认数据" });
        var w = V(m, 2);
        Ae(w, {
          level: 3,
          mt: "10px",
          children: (S, N) => {
            be();
            var M = Pe("确认消息");
            D(S, M);
          },
          $$slots: { default: !0 }
        });
        var y = V(w, 4), b = B(y);
        {
          let S = /* @__PURE__ */ P(() => n().message || "");
          et(b, {
            rows: 5,
            placeholder: "请输入用户需要确认的消息内容",
            style: "width: 100%",
            onchange: (N) => {
              s(o, () => ({ message: N.target.value }));
            },
            get value() {
              return c(S);
            }
          });
        }
        K(y);
        var x = V(y, 2), $ = B(x);
        Ae($, {
          level: 3,
          mt: "10px",
          children: (S, N) => {
            be();
            var M = Pe("输出参数");
            D(S, M);
          },
          $$slots: { default: !0 }
        }), K(x);
        var C = V(x, 2);
        Gn(C, { placeholder: "" }), D(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), pe(a);
}
le(Hf, { data: {} }, [], [], !0);
const Bb = {
  startNode: xf,
  codeNode: Nf,
  confirmNode: Hf,
  llmNode: Pf,
  templateNode: Of,
  httpNode: Tf,
  knowledgeNode: Df,
  searchEngineNode: Mf,
  loopNode: Lf,
  endNode: Sf
};
var Yb = /* @__PURE__ */ te("<!> ", 1);
function Xs(e, t) {
  fe(t, !0);
  const n = v(t, "icon", 7), r = v(t, "title", 7), o = v(t, "type", 7), i = v(t, "description", 7), s = v(t, "extra", 7), a = (u) => {
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
      n(u), g();
    },
    get title() {
      return r();
    },
    set title(u) {
      r(u), g();
    },
    get type() {
      return o();
    },
    set type(u) {
      o(u), g();
    },
    get description() {
      return i();
    },
    set description(u) {
      i(u), g();
    },
    get extra() {
      return s();
    },
    set extra(u) {
      s(u), g();
    }
  };
  return Ve(e, {
    draggable: !0,
    ondragstart: a,
    get "data-node-type"() {
      return o();
    },
    children: (u, d) => {
      var p = Yb(), f = se(p);
      pa(f, n);
      var h = V(f);
      Ee(() => Je(h, ` ${r() ?? ""}`)), D(u, p);
    },
    $$slots: { default: !0 }
  }), pe(l);
}
le(Xs, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var Wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), Fb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), qb = /* @__PURE__ */ te('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Af(e, t) {
  fe(t, !0);
  let n = /* @__PURE__ */ Oe("base"), r = /* @__PURE__ */ Oe("show");
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
  ], s = [], a = ur(), l = a.customNodes;
  if (l) {
    const b = Object.keys(l).sort((x, $) => (l[x].sortNo || 0) - (l[$].sortNo || 0));
    for (let x of b)
      l[x].group === "base" ? o.push({ type: x, ...l[x] }) : s.push({
        icon: l[x].icon,
        title: l[x].title,
        type: x
      });
    o.sort((x, $) => (x.sortNo || 0) - ($.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const b = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(b)) {
      for (let x of b)
        for (let $ = 0; $ < o.length; $++)
          if (o[$].type === x) {
            o.splice($, 1);
            break;
          }
    }
  }
  var u = qb(), d = B(u), p = B(d), f = B(p);
  of(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (b) => {
      Q(n, b.value.toString(), !0);
    }
  }), K(p);
  var h = V(p, 2), m = B(h);
  Et(m, 21, () => o, Wr, (b, x) => {
    Xs(b, Qe(() => c(x)));
  }), K(m);
  var w = V(m, 2);
  Et(w, 21, () => s, Wr, (b, x) => {
    Xs(b, Qe(() => c(x)));
  }), K(w), K(h), K(d);
  var y = V(d, 2);
  Ve(y, {
    onclick: () => {
      Q(r, c(r) ? "" : "show", !0);
    },
    children: (b, x) => {
      var $ = Ne(), C = se($);
      {
        var S = (M) => {
          var j = Wb();
          D(M, j);
        }, N = (M) => {
          var j = Fb();
          D(M, j);
        };
        ue(C, (M) => {
          c(r) === "show" ? M(S) : M(N, !1);
        });
      }
      D(b, $);
    },
    $$slots: { default: !0 }
  }), K(u), Ee(() => {
    Rt(u, 1, `tf-toolbar ${c(r) ?? ""}`), xt(m, `display: ${c(n) === "base" ? "flex" : "none"}`), xt(w, `display: ${c(n) !== "base" ? "flex" : "none"}`);
  }), D(e, u), pe();
}
le(Af, {}, [], [], !0);
const Xb = () => ({ getNode: (e) => Re.getNode(e) }), Ub = () => ({ ensureParentInNodesBefore: (e, t) => {
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
} }), Gb = () => ({ getEdgesByTarget: (e) => Re.getEdges().filter((t) => t.target === e) });
var Jb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qb = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), ex = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), tx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), nx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><div class="slider-container svelte-qt4m0r"><span class="svelte-qt4m0r"> </span> <input/></div></div>', 1), rx = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), ox = /* @__PURE__ */ te('<div class="setting-title svelte-qt4m0r"> </div> <div class="setting-item svelte-qt4m0r"><!></div>', 1), ix = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sx = /* @__PURE__ */ te('<div class="heading svelte-qt4m0r"><!> <!></div> <!>', 1), ax = /* @__PURE__ */ te("<!> <!> <div></div> <!>", 1);
const lx = {
  hash: "svelte-qt4m0r",
  code: `.heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-qt4m0r {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function If(e, t) {
  fe(t, !0), Fe(e, lx);
  const n = v(t, "data", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = at(), { addParameter: i } = mn(), s = gt(), { updateNodeData: a } = s, l = (y) => {
    a(o, y);
  }, u = (y, b) => {
    l({ [y]: b.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = ur().customNodes[t.type];
  f.render?.(p, d, s);
  const h = f.forms;
  let m;
  rt(() => {
    n().expand && m && m.append(p);
  }), rt(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), rt(() => {
    !n().parameters && f.parameters && l({
      parameters: Mo(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), rt(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: Mo(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  var w = {
    get data() {
      return n();
    },
    set data(y) {
      n(y), g();
    }
  };
  {
    const y = (x) => {
      var $ = Ne(), C = se($);
      pa(C, () => f.icon), D(x, $);
    };
    let b = /* @__PURE__ */ P(() => ({ ...n(), description: f.description }));
    nn(e, Qe(
      {
        get data() {
          return c(b);
        }
      },
      () => r,
      {
        icon: y,
        children: (x, $) => {
          var C = ax(), S = se(C);
          {
            var N = (k) => {
              var T = Qb(), _ = se(T), E = B(_);
              Ae(E, {
                level: 3,
                children: (W, L) => {
                  be();
                  var U = Pe("输入参数");
                  D(W, U);
                },
                $$slots: { default: !0 }
              });
              var O = V(E, 2);
              {
                var Z = (W) => {
                  Ve(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o);
                    },
                    children: (L, U) => {
                      var X = Jb();
                      D(L, X);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(O, (W) => {
                  f.parametersAddEnable !== !1 && W(Z);
                });
              }
              K(_);
              var Y = V(_, 2);
              Tt(Y, {}), D(k, T);
            };
            ue(S, (k) => {
              f.parametersEnable !== !1 && k(N);
            });
          }
          var M = V(S, 2);
          {
            var j = (k) => {
              var T = Ne(), _ = se(T);
              Et(_, 17, () => h, Wr, (E, O) => {
                var Z = Ne(), Y = se(Z);
                {
                  var W = (U) => {
                    var X = ex(), J = se(X), R = B(J, !0);
                    K(J);
                    var q = V(J, 2), G = B(q);
                    {
                      let ne = /* @__PURE__ */ P(() => n()[c(O).name] || c(O).defaultValue);
                      ut(G, Qe(
                        {
                          get placeholder() {
                            return c(O).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return c(ne);
                          }
                        },
                        () => c(O).attrs,
                        {
                          onchange: (re) => {
                            u(c(O).name, re);
                          }
                        }
                      ));
                    }
                    K(q), Ee(() => Je(R, c(O).label)), D(U, X);
                  }, L = (U) => {
                    var X = Ne(), J = se(X);
                    {
                      var R = (G) => {
                        var ne = tx(), re = se(ne), ee = B(re, !0);
                        K(re);
                        var ve = V(re, 2), ce = B(ve);
                        {
                          let ie = /* @__PURE__ */ P(() => n()[c(O).name] || c(O).defaultValue);
                          et(ce, Qe(
                            {
                              rows: 3,
                              get placeholder() {
                                return c(O).placeholder;
                              },
                              style: "width: 100%",
                              get value() {
                                return c(ie);
                              }
                            },
                            () => c(O).attrs,
                            {
                              onchange: (ae) => {
                                u(c(O).name, ae);
                              }
                            }
                          ));
                        }
                        K(ve), Ee(() => Je(ee, c(O).label)), D(G, ne);
                      }, q = (G) => {
                        var ne = Ne(), re = se(ne);
                        {
                          var ee = (ce) => {
                            var ie = nx(), ae = se(ie), me = B(ae, !0);
                            K(ae);
                            var ge = V(ae, 2), xe = B(ge), de = B(xe), _e = B(de);
                            K(de);
                            var Le = V(de, 2), F = (Ye) => l({ [c(O).name]: parseFloat(Ye.target.value) });
                            pt(
                              Le,
                              () => ({
                                class: "nodrag",
                                type: "range",
                                ...c(O).attrs,
                                value: n()[c(O).name] ?? c(O).defaultValue,
                                oninput: F
                              }),
                              void 0,
                              void 0,
                              void 0,
                              "svelte-qt4m0r",
                              !0
                            ), K(xe), K(ge), Ee(() => {
                              Je(me, c(O).label), Je(_e, `${c(O).description ?? ""}: ${n()[c(O).name] ?? c(O).defaultValue ?? ""}`);
                            }), D(ce, ie);
                          }, ve = (ce) => {
                            var ie = Ne(), ae = se(ie);
                            {
                              var me = (xe) => {
                                var de = rx(), _e = se(de), Le = B(_e, !0);
                                K(_e);
                                var F = V(_e, 2), Ye = B(F);
                                {
                                  let ze = /* @__PURE__ */ P(() => c(O).options || []), Ze = /* @__PURE__ */ P(() => n()[c(O).name] ? [n()[c(O).name]] : [c(O).defaultValue]);
                                  wt(Ye, {
                                    get items() {
                                      return c(ze);
                                    },
                                    style: "width: 100%",
                                    get placeholder() {
                                      return c(O).placeholder;
                                    },
                                    onSelect: (Ke) => {
                                      const ot = Ke.value;
                                      l({ [c(O).name]: ot });
                                    },
                                    get value() {
                                      return c(Ze);
                                    }
                                  });
                                }
                                K(F), Ee(() => Je(Le, c(O).label)), D(xe, de);
                              }, ge = (xe) => {
                                var de = Ne(), _e = se(de);
                                {
                                  var Le = (Ye) => {
                                    var ze = ox(), Ze = se(ze), Ke = B(Ze, !0);
                                    K(Ze);
                                    var ot = V(Ze, 2), _t = B(ot);
                                    {
                                      let Ue = /* @__PURE__ */ P(() => c(O).chosen?.buttonText);
                                      rf(_t, {
                                        style: "width: 100%",
                                        get placeholder() {
                                          return c(O).placeholder;
                                        },
                                        get buttonText() {
                                          return c(Ue);
                                        },
                                        onChosen: (Ie, ye, We) => {
                                          c(O).chosen?.onChosen?.(l, Ie, ye, We);
                                        },
                                        get value() {
                                          return n()[c(O).chosen?.valueDataKey || ""];
                                        },
                                        get label() {
                                          return n()[c(O).chosen?.labelDataKey || ""];
                                        }
                                      });
                                    }
                                    K(ot), Ee(() => Je(Ke, c(O).label)), D(Ye, ze);
                                  }, F = (Ye) => {
                                    var ze = Ne(), Ze = se(ze);
                                    {
                                      var Ke = (ot) => {
                                        Ae(ot, Qe({ level: 3, mt: "10px" }, () => c(O).attrs, {
                                          children: (_t, Ue) => {
                                            be();
                                            var Ie = Pe();
                                            Ee(() => Je(Ie, c(O).label)), D(_t, Ie);
                                          },
                                          $$slots: { default: !0 }
                                        }));
                                      };
                                      ue(
                                        Ze,
                                        (ot) => {
                                          c(O).type === "heading" && ot(Ke);
                                        },
                                        !0
                                      );
                                    }
                                    D(Ye, ze);
                                  };
                                  ue(
                                    _e,
                                    (Ye) => {
                                      c(O).type === "chosen" ? Ye(Le) : Ye(F, !1);
                                    },
                                    !0
                                  );
                                }
                                D(xe, de);
                              };
                              ue(
                                ae,
                                (xe) => {
                                  c(O).type === "select" ? xe(me) : xe(ge, !1);
                                },
                                !0
                              );
                            }
                            D(ce, ie);
                          };
                          ue(
                            re,
                            (ce) => {
                              c(O).type === "slider" ? ce(ee) : ce(ve, !1);
                            },
                            !0
                          );
                        }
                        D(G, ne);
                      };
                      ue(
                        J,
                        (G) => {
                          c(O).type === "textarea" ? G(R) : G(q, !1);
                        },
                        !0
                      );
                    }
                    D(U, X);
                  };
                  ue(Y, (U) => {
                    c(O).type === "input" ? U(W) : U(L, !1);
                  });
                }
                D(E, Z);
              }), D(k, T);
            };
            ue(M, (k) => {
              h && k(j);
            });
          }
          var A = V(M, 2);
          jt(A, (k) => m = k, () => m);
          var I = V(A, 2);
          {
            var H = (k) => {
              var T = sx(), _ = se(T), E = B(_);
              Ae(E, {
                level: 3,
                mt: "10px",
                children: (W, L) => {
                  be();
                  var U = Pe("输出参数");
                  D(W, U);
                },
                $$slots: { default: !0 }
              });
              var O = V(E, 2);
              {
                var Z = (W) => {
                  Ve(W, {
                    class: "input-btn-more",
                    style: "margin-left: auto",
                    onclick: () => {
                      i(o, "outputDefs");
                    },
                    children: (L, U) => {
                      var X = ix();
                      D(L, X);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ue(O, (W) => {
                  f.outputDefsAddEnable !== !1 && W(Z);
                });
              }
              K(_);
              var Y = V(_, 2);
              Gn(Y, {}), D(k, T);
            };
            ue(I, (k) => {
              f.outputDefsEnable !== !1 && k(H);
            });
          }
          Ee(() => {
            xt(A, f.rootStyle || ""), Rt(A, 1, qn(f.rootClass), "svelte-qt4m0r");
          }), D(x, C);
        },
        $$slots: { icon: !0, default: !0 }
      }
    ));
  }
  return pe(w);
}
le(If, { data: {} }, [], [], !0);
const ux = () => ({ updateEdgeData: (e, t, n) => {
  const r = Re.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Re.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), cx = () => ({ deleteEdge: (e) => {
  Re.removeEdge(e);
} }), dx = () => {
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
}, fx = () => ({ getNodeRelativePosition: (e) => {
  let t = Re.getNode(e);
  const n = { x: 0, y: 0 };
  for (; t; )
    n.x += t.position.x, n.y += t.position.y, t.parentId ? t = Re.getNode(t.parentId) : t = void 0;
  return n;
} });
function px(e) {
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
function hx(e) {
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
function gx(e) {
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
function Us(e, t) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => Us(n, t));
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
      Object.hasOwn(e, r) && (n[r] = Us(e[r], t));
    return n;
  }
  return e;
}
const vx = () => (gt(), { copyHandler: async (e) => {
  const t = Re.getNodes().filter((s) => s.selected);
  if (t.length === 0) return;
  const n = Re.getEdges().filter((s) => t.some((a) => a.id === s.source) && t.some((a) => a.id === s.target)), r = t.map(px), o = n.map(gx), i = JSON.stringify({
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
  const r = hx(n.tinyflowNodes), o = n.tinyflowEdges || [], i = /* @__PURE__ */ new Map(), s = [];
  for (const l of r) {
    const u = `node_${Kn()}`;
    i.set(l.id, u);
  }
  for (const l of r) {
    const u = i.get(l.id), d = l.parentId !== void 0 ? i.get(l.parentId) : void 0, p = Us(l.data, i);
    s.push({
      ...l,
      id: u,
      parentId: d,
      data: p,
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
      id: `edge_${Kn()}`,
      source: u,
      target: d
    });
  }
  Re.updateNodes((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...s]), Re.updateEdges((l) => [...l.map((u) => ({ ...u, selected: !1 })), ...a]);
} }), ou = () => {
  const e = document.activeElement;
  return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
};
var mx = /* @__PURE__ */ te('<div class="panel-content svelte-woejl3"><div>边属性设置</div> <div class="setting-title svelte-woejl3">边条件设置</div> <div class="setting-item svelte-woejl3"><!></div> <div class="setting-item svelte-woejl3" style="padding: 8px 0"><!> <!></div></div>'), yx = /* @__PURE__ */ te("<!> <!> <!> <!>", 1), wx = /* @__PURE__ */ te('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const bx = {
  hash: "svelte-woejl3",
  code: ".panel-content.svelte-woejl3 {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function Rf(e, t) {
  fe(t, !0), Fe(e, bx);
  const n = v(t, "onInit", 7), r = /* @__PURE__ */ Xe(t, ["$$slots", "$$events", "$$legacy", "$$host", "onInit"]), o = gt();
  console.log("props", r), n()(o);
  let i = /* @__PURE__ */ Oe(!1), s = /* @__PURE__ */ Oe(null);
  const { updateEdgeData: a } = ux(), l = (X) => {
    X.preventDefault(), X.dataTransfer && (X.dataTransfer.dropEffect = "move");
  }, u = (X) => {
    X.preventDefault();
    const J = o.screenToFlowPosition({ x: X.clientX - 250, y: X.clientY - 100 }), R = X.dataTransfer?.getData("application/tinyflow");
    if (!R)
      return;
    const q = JSON.parse(R), G = { id: `node_${Kn()}`, position: J, data: {}, ...q };
    Re.addNode(G), Re.selectNodeOnly(G.id);
  }, { getNode: d } = Xb(), p = (X) => {
    const J = d(X.source), R = d(X.target);
    if (X.sourceHandle === "loop_handle" || J.parentId) {
      const q = o.getEdges();
      for (let G of q)
        if (G.target === X.target) {
          const ne = d(G.source);
          if (X.sourceHandle === "loop_handle" && ne.parentId !== J.id || J.parentId && ne.parentId !== J.parentId)
            return !1;
        }
    }
    return !(!J.parentId && R.parentId && R.parentId !== J.id);
  }, { getNodesFromSource: f } = dx(), { getNodeRelativePosition: h } = fx(), { ensureParentInNodesBefore: m } = Ub(), w = (X, J) => {
    if (!J.isValid)
      return;
    const R = J.toNode;
    if (R.parentId)
      return;
    const q = J.fromNode, G = J.fromHandle, ne = { position: { ...R.position } };
    if (G.id === "loop_handle" ? ne.parentId = q.id : q.parentId && (ne.parentId = q.parentId), ne.parentId) {
      const { x: re, y: ee } = h(ne.parentId);
      ne.position = { x: R.position.x - re, y: R.position.y - ee }, o.updateNode(R.id, ne), f(R.id).forEach((ve) => {
        o.updateNode(ve.id, {
          parentId: ne.parentId,
          position: { x: ve.position.x - re, y: ve.position.y - ee }
        });
      }), m(ne.parentId, R.id);
    }
    setTimeout(() => {
      Re.getEdges().forEach((re) => {
        re.target === R.id && re.source == q.id && (Q(i, !0), Q(s, re, !0));
      });
    });
  }, { getEdgesByTarget: y } = Gb(), b = (X) => {
    X.edges.forEach((J) => {
      J.id === c(s)?.id && (Q(s, null), Q(i, !1));
      const R = d(J.target);
      if (R && R.parentId) {
        const q = y(J.target), { x: G, y: ne } = h(R.parentId);
        if (q.length === 0)
          o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + G, y: R.position.y + ne }
          }), f(R.id).forEach((re) => {
            o.updateNode(re.id, {
              parentId: void 0,
              position: { x: re.position.x + G, y: re.position.y + ne }
            });
          });
        else {
          let re = !1;
          for (let ee = 0; ee < q.length; ee++) {
            const ve = q[ee], ce = d(ve.source);
            if (ce.parentId || ce.type === "loopNode") {
              re = !0;
              break;
            }
          }
          re || (o.updateNode(R.id, {
            parentId: void 0,
            position: { x: R.position.x + G, y: R.position.y + ne }
          }), f(R.id).forEach((ee) => {
            o.updateNode(ee.id, {
              parentId: void 0,
              position: { x: ee.position.x + G, y: ee.position.y + ne }
            });
          }));
        }
      }
    });
  }, { deleteEdge: x } = cx(), $ = (X, J) => {
  }, C = (X) => {
  }, { copyHandler: S, pasteHandler: N } = vx(), M = (X) => {
    ou() || ((X.ctrlKey || X.metaKey) && X.key === "c" && (X.preventDefault(), S(X)), (X.ctrlKey || X.metaKey) && X.key === "a" && (X.preventDefault(), Re.updateNodes((J) => J.map((R) => ({ ...R, selected: !0 }))), Re.updateEdges((J) => J.map((R) => ({ ...R, selected: !0 })))));
  }, j = async (X) => {
    ou() || N(X);
  };
  Fn(() => {
    window.addEventListener("keydown", M), window.addEventListener("paste", j);
  }), Ro(() => {
    window.removeEventListener("keydown", M), window.removeEventListener("paste", j);
  });
  const A = {
    // ...nodeTypes
  }, I = ur().customNodes;
  if (I)
    for (let X of Object.keys(I))
      A[X] = If;
  const H = ur().onDataChange;
  rt(() => {
    H?.({
      nodes: Re.getNodes(),
      edges: Re.getEdges(),
      viewport: Re.getViewport()
    });
  });
  var k = {
    get onInit() {
      return n();
    },
    set onInit(X) {
      n(X), g();
    }
  }, T = wx(), _ = B(T), E = Re.getNodes, O = Re.setNodes, Z = Re.getEdges, Y = Re.setEdges, W = Re.getViewport, L = Re.setViewport;
  {
    let X = /* @__PURE__ */ P(() => ({ ...Bb, ...A })), J = /* @__PURE__ */ P(() => ({
      markerEnd: { type: Po.ArrowClosed, width: 20, height: 20 }
    }));
    Zd(_, {
      get nodeTypes() {
        return c(X);
      },
      get nodes() {
        return E();
      },
      set nodes(R) {
        O(R);
      },
      get edges() {
        return Z();
      },
      set edges(R) {
        Y(R);
      },
      get viewport() {
        return W();
      },
      set viewport(R) {
        L(R);
      },
      class: "tinyflow-logo",
      ondrop: u,
      ondragover: l,
      isValidConnection: p,
      onconnectend: w,
      onconnectstart: $,
      onconnect: C,
      connectionRadius: 50,
      onedgeclick: (R) => {
        Q(i, !0), Q(s, R.edge, !0);
      },
      onbeforeconnect: (R) => ({ ...R, id: Kn() }),
      ondelete: b,
      onclick: (R) => {
        const q = R.target;
        q.classList.contains("svelte-flow__edge-interaction") || q.classList.contains("panel-content") || q.closest(".panel-content") || (Q(i, !1), Q(s, null));
      },
      get defaultEdgeOptions() {
        return c(J);
      },
      children: (R, q) => {
        var G = yx(), ne = se(G);
        Jd(ne, {});
        var re = V(ne, 2);
        Xd(re, {});
        var ee = V(re, 2);
        ef(ee, {});
        var ve = V(ee, 2);
        {
          var ce = (ie) => {
            qo(ie, {
              children: (ae, me) => {
                var ge = mx(), xe = V(B(ge), 4), de = B(xe);
                {
                  let Ye = /* @__PURE__ */ P(() => c(s)?.data?.condition);
                  et(de, {
                    rows: 3,
                    placeholder: "请输入边条件",
                    style: "width: 100%",
                    get value() {
                      return c(Ye);
                    },
                    onchange: (ze) => {
                      c(s) && a(c(s).id, { condition: ze.target?.value });
                    }
                  });
                }
                K(xe);
                var _e = V(xe, 2), Le = B(_e);
                Ve(Le, {
                  onclick: () => {
                    x(c(s)?.id), Q(i, !1);
                  },
                  children: (Ye, ze) => {
                    be();
                    var Ze = Pe("删除");
                    D(Ye, Ze);
                  },
                  $$slots: { default: !0 }
                });
                var F = V(Le, 2);
                Ve(F, {
                  primary: !0,
                  onclick: () => {
                    Q(i, !1);
                  },
                  children: (Ye, ze) => {
                    be();
                    var Ze = Pe("保存");
                    D(Ye, Ze);
                  },
                  $$slots: { default: !0 }
                }), K(_e), K(ge), D(ae, ge);
              },
              $$slots: { default: !0 }
            });
          };
          ue(ve, (ie) => {
            c(i) && ie(ce);
          });
        }
        D(R, G);
      },
      $$slots: { default: !0 }
    });
  }
  var U = V(_, 2);
  return Af(U, {}), K(T), D(e, T), pe(k);
}
le(Rf, { onInit: {} }, [], [], !0);
function xx(e, t) {
  fe(t, !0);
  const n = v(t, "options", 7), r = v(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  Re.init(o?.nodes || [], o?.edges || []), Br("tinyflow_options", n());
  var i = {
    get options() {
      return n();
    },
    set options(s) {
      n(s), g();
    },
    get onInit() {
      return r();
    },
    set onInit(s) {
      r(s), g();
    }
  };
  return Kd(e, {
    children: (s, a) => {
      Rf(s, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), pe(i);
}
customElements.define("tinyflow-component", le(xx, { options: {}, onInit: {} }, [], [], !1));
const Cx = Gf((e, t) => {
  const n = Ka(null), r = Ka(null);
  Jf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Qf(() => {
    if (n.current) {
      const a = new Ly({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ rp.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  Cx as Tinyflow
};
//# sourceMappingURL=index.js.map
